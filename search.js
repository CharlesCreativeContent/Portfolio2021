
function onLoadSearch (){
  let pageName = window.location.toString()
  if(pageName.includes("=")){
  document.getElementById("searchSection").scrollIntoView({ behavior: "smooth",block: "start"})
  let query = pageName.slice(pageName.lastIndexOf("=")+1).toLowerCase().split("+")
  let contentData = search(query)
  console.log("final: ", contentData)
  renderContent(query, contentData)
  }
}

function search(query){
  let keywords = Object.values(window.contentData)
  let searchList = keywords.filter(article=>haveCommonElement(article.keywords.toLowerCase().split(" "),query))
  return searchList
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

function renderContent (query,contentList){
  document.getElementById("searchTitle").innerHTML = query.join(" ")

  contentList.forEach(content=>{
    let {button, description,image,keywords,subTitle,title,type,url} = content
    let buttonList = Object.entries(button).reduce((a,b)=>{
      let buttons = `<li><a target="_blank" href="${b[1]}" class="button">${b[0]}</a></li>`
      return a+buttons
    },"")
    document.getElementById("searchArticles").innerHTML += `
  <article>
  <a target="_blank" href="${url}" class="image">
  <img src="${image}" />
  </a>
  <h3>${title}</h3>
  <p><strong>${subTitle}</strong> – ${description}</p>
  <ul class="actions">
  ${buttonList}
  </ul>
  </article>
  `
  })
  
  
  if(contentList.length===0) renderEmptySearch()
  document.getElementById("searchSection").style.display = "block"
  document.getElementById("searchSection").scrollIntoView({ behavior: "smooth",block: "start"})
}

function renderEmptySearch(){
  document.getElementById("searchArticles").innerHTML = `
  <article>
  <h3>Sorry, Found 0 results for your search!</h3>
  </article>
  `
}

window.addEventListener('load', onLoadSearch);
