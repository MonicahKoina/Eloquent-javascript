let productCard = document.getElementById("productCard");
let searchBar = document.getElementById("searchBar");
let allProducts = [];

async function fetchProducts() {
    try {
        let url = "https://fakestoreapi.com/products";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        allProducts = data;
        renderProducts(data);

    } catch (error) {
        console.log("Fetching products failed", error);
    }
}
function renderProducts(products) {
    productCard.innerHTML = products.map((item) => {
        return `
            <div>
                <figure>
                    <img src="${item.image}" alt="${item.title}" />
                </figure>
                <div>
                    <p>${item.title}</p>
                    <p>${item.price}</p>
                </div>
                <div>
                    <button>ADD TO CART</button>
                </div>
            </div>
        `;
    }).join("");
}

searchBar.addEventListener("input", function (e) {
    let searchText = e.target.value.toLowerCase();
    let filtered = allProducts.filter(item =>
        item.title.toLowerCase().includes(searchText)
    );
    if (filtered.length > 0) {
        renderProducts(filtered);
    } else {
        productCard.innerHTML = "<p>No products found.</p>";
    }
});

fetchProducts();
