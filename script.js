// Sample product data
const products = [
    // Fruits
    {
        id: 1,
        name: "Fresh Apples",
        price: 2.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Organic Bananas",
        price: 1.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Sweet Oranges",
        price: 3.49,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Juicy Grapes",
        price: 4.99,
        category: "fruits",
        image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    // Vegetables
    {
        id: 5,
        name: "Fresh Carrots",
        price: 1.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Crisp Broccoli",
        price: 2.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 7,
        name: "Fresh Spinach",
        price: 2.49,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 8,
        name: "Sweet Potatoes",
        price: 1.99,
        category: "vegetables",
        image: "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    // Dairy
    {
        id: 9,
        name: "Organic Milk",
        price: 3.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 10,
        name: "Fresh Cheese",
        price: 4.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 11,
        name: "Greek Yogurt",
        price: 2.99,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 12,
        name: "Butter",
        price: 3.49,
        category: "dairy",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    // Meat
    {
        id: 13,
        name: "Fresh Chicken",
        price: 5.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 14,
        name: "Beef Steak",
        price: 12.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 15,
        name: "Pork Chops",
        price: 8.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 16,
        name: "Ground Beef",
        price: 6.99,
        category: "meat",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

// Cart functionality
let cart = [];
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const cartCount = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const productContainer = document.getElementById('product-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// Sign In/Up functionality
const signInBtn = document.querySelector('.sign-in-btn');
const signInModal = document.getElementById('signin-modal');
const signUpModal = document.getElementById('signup-modal');
const closeSignIn = document.querySelector('.close-signin');
const closeSignUp = document.querySelector('.close-signup');
const signInForm = document.getElementById('signin-form');
const signUpForm = document.getElementById('signup-form');
const signUpToggle = document.querySelector('.signup-toggle');
const signInToggle = document.querySelector('.signin-toggle');

// Order functionality
let orders = [];
let currentOrder = null;

// Display products
function displayProducts(category = 'all') {
    productContainer.innerHTML = '';
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="quick-order" data-id="${product.id}">Quick Order</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Add event listeners to "Quick Order" buttons
    document.querySelectorAll('.quick-order').forEach(button => {
        button.addEventListener('click', quickOrder);
    });
}

// Add to cart function
function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
}

// Update cart display
function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">×</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Remove from cart function
function removeFromCart(event) {
    const productId = parseInt(event.target.dataset.id);
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Filter products
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProducts(button.dataset.category);
    });
});

// Cart modal functionality
document.querySelector('.cart-icon').addEventListener('click', () => {
    cartModal.style.display = 'block';
});

document.querySelector('.close-cart').addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Checkout functionality
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'block';
});

document.querySelector('.cancel-checkout').addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

// Handle form submission
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would process the payment here
    alert('Order placed successfully! Thank you for shopping with us.');
    
    // Clear cart and close modals
    cart = [];
    updateCart();
    checkoutModal.style.display = 'none';
});

// Open Sign In Modal
signInBtn.addEventListener('click', () => {
    signInModal.style.display = 'block';
});

// Close Sign In Modal
closeSignIn.addEventListener('click', () => {
    signInModal.style.display = 'none';
});

// Close Sign Up Modal
closeSignUp.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Toggle between Sign In and Sign Up
signUpToggle.addEventListener('click', (e) => {
    e.preventDefault();
    signInModal.style.display = 'none';
    signUpModal.style.display = 'block';
});

signInToggle.addEventListener('click', (e) => {
    e.preventDefault();
    signUpModal.style.display = 'none';
    signInModal.style.display = 'block';
});

// Handle Sign In Form Submission
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // In a real application, you would validate credentials with a backend
    console.log('Sign In Attempt:', { email, password, rememberMe });
    
    // For demo purposes, we'll just close the modal
    signInModal.style.display = 'none';
    alert('Sign in successful!');
});

// Handle Sign Up Form Submission
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // In a real application, you would send this data to a backend
    console.log('Sign Up Attempt:', { name, email, password });
    
    // For demo purposes, we'll just close the modal
    signUpModal.style.display = 'none';
    alert('Account created successfully!');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === signInModal) {
        signInModal.style.display = 'none';
    }
    if (e.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (e.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
});

// Quick Order functionality
function quickOrder(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    // Create a new order
    currentOrder = {
        id: Date.now(),
        items: [{
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        }],
        status: 'pending',
        date: new Date(),
        total: product.price
    };

    // Show order confirmation modal
    showOrderConfirmation(currentOrder);
}

// Show order confirmation modal
function showOrderConfirmation(order) {
    const confirmationModal = document.createElement('div');
    confirmationModal.className = 'order-confirmation-modal';
    confirmationModal.innerHTML = `
        <div class="confirmation-content">
            <h2>Order Confirmation</h2>
            <div class="order-details">
                <h3>Order #${order.id}</h3>
                <p>Date: ${order.date.toLocaleDateString()}</p>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <span>${item.name}</span>
                            <span>$${item.price.toFixed(2)} x ${item.quantity}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="order-total">
                    <strong>Total: $${order.total.toFixed(2)}</strong>
                </div>
            </div>
            <div class="order-actions">
                <button class="confirm-order">Confirm Order</button>
                <button class="cancel-order">Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(confirmationModal);

    // Add event listeners
    confirmationModal.querySelector('.confirm-order').addEventListener('click', () => {
        // Save the order
        orders.push(currentOrder);
        // Show success message
        showOrderSuccess(currentOrder);
        // Remove modal
        confirmationModal.remove();
    });

    confirmationModal.querySelector('.cancel-order').addEventListener('click', () => {
        confirmationModal.remove();
    });
}

// Show order success message
function showOrderSuccess(order) {
    const successModal = document.createElement('div');
    successModal.className = 'order-success-modal';
    successModal.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h2>Order Placed Successfully!</h2>
            <p>Your order #${order.id} has been confirmed.</p>
            <p>Estimated delivery time: 30-45 minutes</p>
            <div class="track-order">
                <button class="track-order-btn">Track Order</button>
            </div>
        </div>
    `;

    document.body.appendChild(successModal);

    // Add event listener to track order button
    successModal.querySelector('.track-order-btn').addEventListener('click', () => {
        showOrderTracking(order);
        successModal.remove();
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        successModal.remove();
    }, 5000);
}

// Show order tracking
function showOrderTracking(order) {
    const trackingModal = document.createElement('div');
    trackingModal.className = 'order-tracking-modal';
    trackingModal.innerHTML = `
        <div class="tracking-content">
            <h2>Order Tracking</h2>
            <div class="tracking-details">
                <h3>Order #${order.id}</h3>
                <div class="tracking-status">
                    <div class="status-step ${order.status === 'pending' ? 'active' : ''}">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Order Placed</span>
                    </div>
                    <div class="status-step ${order.status === 'processing' ? 'active' : ''}">
                        <i class="fas fa-utensils"></i>
                        <span>Preparing</span>
                    </div>
                    <div class="status-step ${order.status === 'ready' ? 'active' : ''}">
                        <i class="fas fa-motorcycle"></i>
                        <span>On the Way</span>
                    </div>
                    <div class="status-step ${order.status === 'delivered' ? 'active' : ''}">
                        <i class="fas fa-check"></i>
                        <span>Delivered</span>
                    </div>
                </div>
            </div>
            <button class="close-tracking">Close</button>
        </div>
    `;

    document.body.appendChild(trackingModal);

    // Add event listener to close button
    trackingModal.querySelector('.close-tracking').addEventListener('click', () => {
        trackingModal.remove();
    });
}

// Initialize the page
displayProducts(); 