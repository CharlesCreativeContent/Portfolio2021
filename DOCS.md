# Portfolio Development Documentation

This document serves as the source of truth for developers working on this portfolio project.

## HTML & CSS Reference

The [blog/elements.html](blog/elements.html) file is your comprehensive reference guide for all HTML formatting and CSS classes available in this project.

### What's Included

The elements.html file contains live, interactive examples of all available components and styles:

- **Grid System & Responsive Layouts** - Column classes for responsive design (col-6, col-12-small, etc.)
- **Text Formatting & Typography** - Headings, bold, italic, links, code, subscript, superscript
- **Lists** - Unordered, ordered, alternate styles, icon lists, actions, pagination
- **Tables** - Default and alternate table styles
- **Buttons & Actions** - Various sizes (small, default, large), styles (primary, default), and states (disabled, fit)
- **Forms & Inputs** - Text inputs, email, select dropdowns, radio buttons, checkboxes, textareas
- **Images & Media** - Fit, left/right alignment, responsive image grids
- **Containers & Boxes** - Box components and content wrappers
- **Code Blocks** - Preformatted code display

### How to Use

1. Open [blog/elements.html](blog/elements.html) in your browser to see live examples of each component
2. Find the component or style you need
3. Copy the HTML structure and classes from the examples
4. Paste into your page and customize the content

The elements.html file is designed as a living style guide - reference it whenever you need to add new content to ensure consistency across the site.

## Creating New Blog Posts

The [blog/blog_template.html](blog/blog_template.html) file serves as the template for creating new blog posts. **Do not modify the template directly.**

### Blog Post Creation Workflow

1. **Copy the template file**
   ```bash
   cp blog/blog_template.html blog/your-blog-post-name.html
   ```

2. **Rename to your blog post name**
   - Use descriptive, URL-friendly names (e.g., `my-first-blog-post.html`)

3. **Update the content line by line**

   Key sections to update:
   - **Line 24**: `<title>` - Your blog post title
   - **Line 26**: `<meta name="description">` - Brief description of the blog post
   - **Line 27**: `<meta name="keywords">` - Relevant keywords for SEO
   - **Line 29**: `<link rel="canonical">` - Update URL to your blog post filename
   - **Line 43**: `<meta property="og:url">` - Update URL for Open Graph
   - **Line 45**: `<meta property="og:title">` - Your blog post title for social sharing
   - **Line 46**: `<meta property="og:description">` - Description for social sharing
   - **Line 91**: `<h1>` - Main blog title heading
   - **Line 94**: `<img src="">` - Update image path for blog header image
   - **Line 96**: First paragraph content
   - **Line 100-101**: Main blog content section

   **Note**: The template includes an E-E-A-T compliant author bio section (lines 106-113) that appears automatically on all blog posts. This section includes:
   - Professional headshot (headCircle1.png)
   - Concise credentials highlighting ML Infrastructure experience at Audible and 10+ years of experience
   - Current work building open-source AI communities
   - Social proof links (LinkedIn, Twitter, YouTube, TikTok)
   - This helps with Google's Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) guidelines

### Important Notes

- Always start from a fresh copy of blog_template.html
- Never modify blog_template.html itself - it should remain as the master template
- Update all metadata (title, description, keywords, URLs) to match your blog post
- Replace placeholder text and images with your actual content
- Ensure all relative paths (../) remain correct for assets and navigation
