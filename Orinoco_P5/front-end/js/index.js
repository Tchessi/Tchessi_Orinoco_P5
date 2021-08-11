main()

async function main(){
const articles = await getArticles()
for (article of articles) {
  displayArticles(article)
  console.log(article)
} 
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
// Affichage des articles 
function displayArticles(article) {
document.getElementById("main").innerHTML += `   
<div class="col">
  <div class="card">
    <img src="${article.imageUrl}" class="card-img-top" id="imageUrl" width="400" height="300" alt="...">
    <div class="card-body" >
    <h5 class="produitName" id="name">${article.name}</h5>
    <h5 class="produitPrix" id="price">${article.price}€</h5>
  </div>
  <p id="description">${article.description}</p>
</div>`

document.getElementById("produitLink").href += `?id=${article.id}`


}


