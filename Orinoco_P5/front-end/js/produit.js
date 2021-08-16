const urlParams = new URLSearchParams(location.search);

var id = urlParams.get('id')

main()
function main() {
    checkIf404();
    getArticles();
    addToCart();
}

// Appel à  API
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
        <button type="button" class="btn btn-primary " id="myBtn">Ajouter au panier</button>
        <p id="succes">
        </div>
        </div>`
// Selection de couleur pour la personnalisation des peluches
        let colorSelect = document.getElementById("color-select");
        for (let i = 0; i < article.colors.length; i++) {
        let option = document.createElement("option");
        option.innerText = article.colors[i];
        colorSelect.appendChild(option);
      }

        document.getElementById("myBtn").addEventListener("click", addToCart);
// Confirmation du boton -- ajoutez à mon panier --
function addToCart()  {
        document.getElementById("succes").innerHTML = " Votre article a bien été ajouté au panier";
  
    }
}



