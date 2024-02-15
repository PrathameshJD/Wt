document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const cartContainer = document.getElementById("cart-container");

    const products = [
        { id: 1, name: "Product 1", price: 20, image: "product1.jpg" },
        { id: 2, name: "Product 2", price: 30, image: "product2.jpg" },
        { id: 3, name: "Product 3", price: 25, image: "product3.jpg" },
    ];

    const cart = [];

    function renderProducts() {
        productList.innerHTML = "";
        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;

            productList.appendChild(card);
        });
    }

    function renderCart() {
        cartContainer.innerHTML = "";
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;

            cartContainer.appendChild(cartItem);
        });
    }

    window.addToCart = function (productId) {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            cart.push({ id: productToAdd.id, name: productToAdd.name, price: productToAdd.price });
            renderCart();
        }
    };

    window.removeFromCart = function (productId) {
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            cart.splice(index, 1);
            renderCart();
        }
    };

    renderProducts();
});
// Existing code...

function showLogin() {
    document.getElementById("login-overlay").style.display = "flex";
}

function hideLogin() {
    document.getElementById("login-overlay").style.display = "none";
}

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation, you should implement more secure validation on the server-side
    if (username === "user" && password === "pass") {
        alert("Login successful!");
        hideLogin();
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
