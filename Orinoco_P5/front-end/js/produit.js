const urlParams = new URLSearchParams(location.search);

var id = urlParams.get('id')



// http://localhost:3000/api/teddies/5be9c8541c9d440000665243
//imageSrc = 

// Appel API
function getArticle() {
    return fetch("http://localhost:3000/api/teddies/" + id)
        .then(function (httpBobyResponse) {
            return httpBobyResponse.json()
        })
        .then(function (articles) {
            return articles
        })
        .catch(function (error) {
            alert(error)
        })
}
async function main() {
    const article = await getArticle()
    console.log(article)

    document.getElementById("main").innerHTML = `
<div class="card-body">        
    <h5 class="produitName">${article.name}</h2>
    <h5 class="produitPrix">${article.price/100}€</h5>
</div> 
        <div class="col-6">
            <figure class="figure">
                <img id="product-image" src="${article.imageUrl}" width="700" height="400" class="figure-img img-fluid rounded">
            </figure>
        </div>
        <div class="col-6">
        <p id="description">${article.description}</p>
        <div class="col align-self-end">
        <button type="button" class="btn btn-primary">Ajouter au panier</button>
        </div>
        </div>`

}

main()
