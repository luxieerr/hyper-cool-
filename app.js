// Mock product data
const products = [
    { id: 1, name: "Super Cool T-Shirt", price: 29.99 },
    { id: 2, name: "Cool Sunglasses", price: 15.99 },
    { id: 3, name: "Sneakers", price: 49.99 }
];

// Display products
window.onload = function() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
};

// Add product to cart
function addToCart(id) {
    alert("Product " + id + " added to cart");
}
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Product " + id + " added to cart");
}