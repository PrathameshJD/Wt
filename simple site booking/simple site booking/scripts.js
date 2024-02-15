// Placeholder for user information after login
let currentUser = null;

// Sample movies data (replace with your actual movie data)
const movies = [
    { id: 1, title: 'Inception', image: 'inception.jpg', price: 10 },
    { id: 2, title: 'Interstellar', image: 'interstellar.jpg', price: 12 },
    { id: 3, title: 'The Dark Knight', image: 'dark_knight.jpg', price: 15 },
    // Add more movies as needed
];

// Placeholder for the shopping cart
const cartItems = [];

function login() {
    // Placeholder validation - replace this with actual authentication logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your actual authentication logic
    if (username === 'user' && password === 'pass') {
        currentUser = { username: 'user' };
        updateUserInfo();
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function updateUserInfo() {
    const userInfoElement = document.getElementById('user-info');
    if (currentUser) {
        userInfoElement.innerHTML = `Logged in as: ${currentUser.username} <button onclick="logout()">Logout</button>`;
    } else {
        userInfoElement.innerHTML = '';
    }
}

function logout() {
    currentUser = null;
    updateUserInfo();
    alert('Logout successful!');
}

function addToCart(movieId, title, image, price) {
    // Find the selected movie from the movies array
    const selectedMovie = movies.find(movie => movie.id === movieId);

    // Check if the movie is already in the cart
    const existingCartItem = cartItems.find(item => item.movie.id === selectedMovie.id);

    if (existingCartItem) {
        // Update the number of seats for an existing item
        existingCartItem.numSeats += 1;
    } else {
        // Add the selected movie to the cart
        cartItems.push({ movie: selectedMovie, numSeats: 1 });
    }

    // Update the cart display
    updateCart();
}

// function updateCart() {
//     const cartItemsElement = document.getElementById('cart-items');
//     cartItemsElement.innerHTML = '';

//     let totalPrice = 0;

//     cartItems.forEach(item => {
//         const cartItemElement = document
