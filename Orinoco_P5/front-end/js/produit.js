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

    document.getElementById("product-image").src = article.imageUrl;

}

main()
