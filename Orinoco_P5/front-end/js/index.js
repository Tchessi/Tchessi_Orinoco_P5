main()

function main(){
  const articles = getArticles()
  displayArticles(articles)
}
// Appel API
function getArticles(){
  fetch("http://localhost:3000/api/teddies")
  .then(function(httpBobyResponse) {
    return httpBobyResponse.json( )
  })
  .then(function(articles){
    console.log(articles)
  })
  .catch(function(error) {
    alert(error)
  })
}

function displayArticles() {
  return ""
}
