main()

async function main(){
  const articles = await getArticles()
  console.log(articles)
  displayArticles(articles)
}
// Appel API
function getArticles(){
  return fetch("http://localhost:3000/api/teddies")
  .then(function(httpBobyResponse) {
    return httpBobyResponse.json( )
  })
  .then(function(articles){
    return articles 
  })
  .catch(function(error) {
    alert(error)
  })
}

function displayArticles() {
  return ""
}
