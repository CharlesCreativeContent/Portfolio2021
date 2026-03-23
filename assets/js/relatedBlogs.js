// relatedBlogs.js
// Searches for related blog posts based on current blog title
// and renders them in the "Related Blogs" section

function getCurrentBlogTitle() {
  // Extract title from the h1 element in blog_template.html
  const titleElement = document.querySelector('header.main h1');
  return titleElement ? titleElement.textContent.trim() : '';
}

function searchRelatedBlogs(currentTitle) {
  // Get current page URL to properly exclude the current blog
  const currentPageUrl = window.location.pathname;

  // Get all blog entries
  const allBlogs = Object.values(window.blogData);

  // Find the current blog to get its keywords
  const currentBlog = allBlogs.find(blog => {
    if (blog.url && currentPageUrl.includes(blog.url.split('/').pop())) {
      return true;
    }
    return blog.title.toLowerCase().includes(currentTitle.toLowerCase()) ||
           currentTitle.toLowerCase().includes(blog.title.toLowerCase());
  });

  if (!currentBlog) {
    console.warn('Current blog not found in blogData');
    return [];
  }

  // Get keywords from current blog (same as search.js logic)
  const query = currentBlog.keywords.toLowerCase().split(" ");

  // Filter and search for related blogs (exact same logic as search.js)
  const relatedBlogs = allBlogs.filter(blog => {
    // Exclude current blog
    if (blog.title === currentBlog.title) return false;

    // Use exact same logic as search.js
    return haveCommonElement(blog.keywords.toLowerCase().split(" "), query);
  });

  return relatedBlogs;
}

function haveCommonElement(arr1, arr2) {
  const set = new Set(arr1); // Build hash set in O(n)
  for (const element of arr2) {
    if (set.has(element)) {  // O(1) lookup
      return true;
    }
  }
  return false;
}

function renderRelatedBlogs(relatedBlogs, isSearchResult = false) {
  const relatedArticlesDiv = document.getElementById('relevantArticles');
  const searchSection = document.getElementById('searchSection');
  const headingElement = document.getElementById('elements');

  if (!relatedArticlesDiv) {
    console.warn('Related articles container not found');
    return;
  }

  // Update heading based on context
  if (headingElement) {
    headingElement.textContent = isSearchResult ? 'Search Results' : 'Related Blogs';
  }

  // Clear existing content
  relatedArticlesDiv.innerHTML = '';

  if (relatedBlogs.length === 0) {
    const message = isSearchResult
      ? 'Sorry, no blogs found matching your search. <a href="../index.html">Browse all blogs</a>'
      : 'No related blogs found. <a href="../index.html">Browse all blogs</a>';
    relatedArticlesDiv.innerHTML = `<p>${message}</p>`;
    // Still show section even if no results, so user sees the message
    if (searchSection) searchSection.style.display = 'block';
    return;
  }

  // Show the section when we have results
  if (searchSection) searchSection.style.display = 'block';

  // Render each related blog
  relatedBlogs.forEach(blog => {
    const { button, description, image, subTitle, title, url } = blog;

    // Create button list from button object (same format as search.js)
    const buttonList = Object.entries(button).reduce((acc, [label, link]) => {
      return acc + `<li><a target="_blank" href="${link}" class="button">${label}</a></li>`;
    }, '');

    // Create blog article HTML (matching search.js format)
    const articleHTML = `
      <article>
        <a target="_blank" href="${url}" class="image">
          <img src="${image}" alt="${title}" />
        </a>
        <h3>${title}</h3>
        <p><strong>${subTitle}</strong> – ${description}</p>
        <ul class="actions">
          ${buttonList}
        </ul>
      </article>
    `;

    relatedArticlesDiv.innerHTML += articleHTML;
  });
}

function searchByQuery(query) {
  // Search all blogs for matches with the search query keywords
  const queryKeywords = query.toLowerCase().split(/[\s+]+/); // Split by spaces or +
  const allBlogs = Object.values(window.blogData);

  const searchResults = allBlogs.filter(blog => {
    const blogKeywords = blog.keywords.toLowerCase().split(' ');
    // Check if any query keyword matches any blog keyword
    return haveCommonElement(blogKeywords, queryKeywords);
  });

  return searchResults;
}

function getSearchQueryFromURL() {
  const pageName = window.location.toString();
  if (pageName.includes('query=')) {
    const query = pageName.slice(pageName.lastIndexOf('=') + 1, pageName.length);
    return decodeURIComponent(query.replace(/\+/g, ' '));
  }
  return null;
}

function onLoadRelatedBlogs() {
  // Ensure dependencies are loaded
  if (typeof window.blogData === 'undefined') {
    console.error('blogData not loaded');
    return;
  }

  // Check if there's a search query in the URL
  const searchQuery = getSearchQueryFromURL();

  if (searchQuery) {
    // If there's a search query, show search results
    console.log('Searching for:', searchQuery);
    const searchResults = searchByQuery(searchQuery);
    console.log('Search results:', searchResults);
    renderRelatedBlogs(searchResults, true);
  } else {
    // Otherwise, show related blogs based on current blog
    const currentTitle = getCurrentBlogTitle();
    if (!currentTitle) {
      console.warn('Could not determine current blog title');
      return;
    }

    const relatedBlogs = searchRelatedBlogs(currentTitle);
    renderRelatedBlogs(relatedBlogs, false);
  }
}

// Execute when DOM is ready
window.addEventListener('load', onLoadRelatedBlogs);
