
window.addEventListener('load', function() {
  let pageName = window.location.toString()
  let contentData = search(pageName)
  console.log("final: ", contentData)
});

function search(page){
let query = page.slice(page.lastIndexOf("=")+1,page.length-1).toLowerCase().split("+")
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
