
function onLoadSearch (){
  let pageName = window.location.toString()
  if(pageName.includes("=")){
  let query = pageName.slice(pageName.lastIndexOf("=")+1,pageName.length).toLowerCase().split("+")
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
  console.log("query: ",query)
  console.log("contentList: ",contentList)
  document.getElementById("searchSection").style.display = "block"
  document.getElementById("searchTitle").innerHTML = query

  contentList.forEach(content=>{
    let {button, description,image,keywords,subTitle,title,type,url} = content
    console.log("Here: ",Object.entries(button))
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
  
  
  if(contentList.length===0) document.getElementById("searchArticles").innerHTML = "Sorry we didn't find any content for your search"

}

window.addEventListener('load', onLoadSearch);
