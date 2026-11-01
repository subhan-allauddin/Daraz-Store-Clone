/**
 * Daraz Store Clone - Shared Client-Side Interactions
 * Plain Vanilla JS + Bootstrap 5
 * Features:
 *  - Cart management with localStorage persistence and array of {id, title, price, qty, img}
 *  - Cart Offcanvas drawer rendering with quantity controls, item removal, and total calculation
 *  - Real-time product search filter on index.html with empty state
 *  - Global search redirect from subpages to index.html?q=term
 *  - Simulated login authentication with form validation and demo user persistence
 *  - Bootstrap Toast notification dispatcher
 *  - Global smooth back-to-top floating button
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. Toast Notification Helper
    // =========================================================================
    function showToast(message, variant = 'primary') {
        const toastEl = document.getElementById('liveToast');
        const toastBody = document.getElementById('toastMessage');
        if (!toastEl || !toastBody) return;

        toastBody.textContent = message;

        // Apply theme color
        toastEl.className = `toast align-items-center text-bg-${variant} border-0`;

        if (window.bootstrap && window.bootstrap.Toast) {
            const toast = window.bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 3500 });
            toast.show();
        }
    }

    // =========================================================================
    // 2. Shopping Cart (Array of items in localStorage: {id, title, price, qty, img})
    // =========================================================================
    const CART_STORAGE_KEY = 'cart';

    function getCart() {
        try {
            const raw = localStorage.getItem(CART_STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (err) {
            console.error('Error parsing cart from localStorage:', err);
            return [];
        }
    }

    function saveCart(cart) {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        } catch (err) {
            console.error('Error saving cart to localStorage:', err);
        }
        updateCartBadge();
        renderCartOffcanvas();
    }

    function updateCartBadge() {
        const cart = getCart();
        const totalQty = cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
        const badges = document.querySelectorAll('#cartCount');
        badges.forEach(badge => {
            badge.textContent = totalQty;
        });
    }

    function addToCart(product) {
        const cart = getCart();
        const existingIndex = cart.findIndex(item => item.id === product.id);

        if (existingIndex > -1) {
            cart[existingIndex].qty = (Number(cart[existingIndex].qty) || 1) + 1;
        } else {
            cart.push({
                id: product.id,
                title: product.title || 'Product',
                price: Number(product.price) || 0,
                qty: 1,
                img: product.img || ''
            });
        }

        saveCart(cart);
        showToast(`"${product.title}" added to cart!`, 'primary');
    }

    function updateItemQty(productId, change) {
        let cart = getCart();
        const index = cart.findIndex(item => item.id === productId);
        if (index === -1) return;

        cart[index].qty = (Number(cart[index].qty) || 1) + change;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        saveCart(cart);
    }

    function removeFromCart(productId) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== productId);
        saveCart(cart);
        showToast('Item removed from cart.', 'secondary');
    }

    function clearCart() {
        saveCart([]);
        showToast('Your cart has been cleared.', 'info');
    }

    function renderCartOffcanvas() {
        const listContainer = document.getElementById('cartItemsList');
        const totalPriceEl = document.getElementById('cartTotalPrice');
        if (!listContainer || !totalPriceEl) return;

        const cart = getCart();

        if (cart.length === 0) {
            const isSubpage = window.location.pathname.includes('/pages/');
            const homeLink = isSubpage ? '../index.html' : 'index.html';
            listContainer.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <i class="fas fa-shopping-basket fa-3x mb-3 text-secondary"></i>
                    <p class="mb-3">Your shopping cart is currently empty.</p>
                    <a href="${homeLink}" class="btn btn-sm btn-outline-primary" data-bs-dismiss="offcanvas">
                        <i class="fas fa-shopping-bag me-1"></i>Start Shopping
                    </a>
                </div>
            `;
            totalPriceEl.textContent = 'Rs 0';
            return;
        }

        let total = 0;
        let html = '<div class="list-group list-group-flush">';

        cart.forEach(item => {
            const itemSubtotal = (Number(item.price) || 0) * (Number(item.qty) || 1);
            total += itemSubtotal;
            const imgSrc = item.img || 'https://via.placeholder.com/60?text=Product';

            html += `
                <div class="list-group-item px-0 py-3 d-flex align-items-center justify-content-between">
                    <img src="${imgSrc}" alt="${item.title}" class="rounded me-3" style="width: 50px; height: 50px; object-fit: cover;">
                    <div class="flex-grow-1 me-2">
                        <h6 class="mb-0 text-truncate" style="max-width: 170px;" title="${item.title}">${item.title}</h6>
                        <small class="text-muted">Rs ${item.price.toLocaleString()} each</small>
                        <div class="d-flex align-items-center mt-2">
                            <button class="btn btn-outline-secondary btn-sm py-0 px-2 qty-dec" data-id="${item.id}" aria-label="Decrease quantity">-</button>
                            <span class="px-2 fw-semibold small">${item.qty}</span>
                            <button class="btn btn-outline-secondary btn-sm py-0 px-2 qty-inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold text-primary mb-1">Rs ${itemSubtotal.toLocaleString()}</div>
                        <button class="btn btn-sm text-danger remove-item p-0" data-id="${item.id}" aria-label="Remove item">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        listContainer.innerHTML = html;
        totalPriceEl.textContent = `Rs ${total.toLocaleString()}`;

        // Bind offcanvas buttons
        listContainer.querySelectorAll('.qty-inc').forEach(btn => {
            btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-id'), 1));
        });
        listContainer.querySelectorAll('.qty-dec').forEach(btn => {
            btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-id'), -1));
        });
        listContainer.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-id')));
        });
    }

    // =========================================================================
    // 3. Search Functionality (Live on index.html, redirect from other pages)
    // =========================================================================
    function setupSearch() {
        const searchForm = document.getElementById('navbarSearchForm');
        const searchInput = document.getElementById('navbarSearchInput');
        const productContainer = document.getElementById('productContainer');
        const isHomePage = !!productContainer;

        if (isHomePage) {
            const noProductsFoundEl = document.getElementById('noProductsFound');

            const filterProducts = (query) => {
                const term = (query || '').toLowerCase().trim();
                const productCols = productContainer.querySelectorAll('.product-col');
                let matchCount = 0;

                productCols.forEach(col => {
                    const title = (col.querySelector('.card-title')?.textContent || '').toLowerCase();
                    const desc = (col.querySelector('.card-text')?.textContent || '').toLowerCase();

                    if (!term || title.includes(term) || desc.includes(term)) {
                        col.classList.remove('d-none');
                        matchCount++;
                    } else {
                        col.classList.add('d-none');
                    }
                });

                if (noProductsFoundEl) {
                    if (matchCount === 0) {
                        noProductsFoundEl.classList.remove('d-none');
                    } else {
                        noProductsFoundEl.classList.add('d-none');
                    }
                }
            };

            // Live filter as user types
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    filterProducts(e.target.value);
                });
            }

            // Form submit on home page prevents reload and filters
            if (searchForm) {
                searchForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    if (searchInput) filterProducts(searchInput.value);
                });
            }

            // Check URL query parameters (?q=...) on initial load
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const queryParam = urlParams.get('q');
                if (queryParam) {
                    if (searchInput) searchInput.value = queryParam;
                    filterProducts(queryParam);
                }
            } catch (err) {
                console.error('Error reading URL search params:', err);
            }
        } else {
            // Subpages: redirect to index.html with q parameter
            if (searchForm) {
                searchForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const term = searchInput ? searchInput.value.trim() : '';
                    const targetUrl = `../index.html${term ? '?q=' + encodeURIComponent(term) : ''}`;
                    window.location.href = targetUrl;
                });
            }
        }
    }

    // =========================================================================
    // 4. Simulated Login / User Session
    // =========================================================================
    const USER_STORAGE_KEY = 'daraz_demo_user';

    function getLoggedInUser() {
        try {
            const raw = localStorage.getItem(USER_STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function updateNavbarUserUI() {
        const user = getLoggedInUser();
        const userText = document.getElementById('navUserText');
        const loginBtn = document.getElementById('navLoginBtn');

        if (user && user.name && userText) {
            userText.textContent = user.name;
            if (loginBtn) {
                loginBtn.title = `Logged in as ${user.email || user.name}. Click to view or sign out.`;
            }
        } else if (userText) {
            userText.textContent = 'Login';
        }
    }

    function setupLoginForm() {
        const loginForm = document.getElementById('loginForm') || document.querySelector('form');
        // Only run if we are on the login page (check for password input)
        const passwordInput = document.getElementById('password');
        const emailInput = document.getElementById('email');
        if (!passwordInput || !emailInput || !loginForm) return;

        // Toggle password visibility
        const toggleBtn = document.getElementById('togglePassword');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function () {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-eye', !isPassword);
                    icon.classList.toggle('fa-eye-slash', isPassword);
                }
            });
        }

        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            const password = passwordInput.value;

            // Basic validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isEmail = emailRegex.test(email);
            const isPhone = /^[0-9+\s-]{7,15}$/.test(email);

            if (!isEmail && !isPhone) {
                showToast('Please enter a valid email address or phone number.', 'danger');
                emailInput.focus();
                return;
            }

            if (!password || password.length < 6) {
                showToast('Password must be at least 6 characters long.', 'danger');
                passwordInput.focus();
                return;
            }

            // NEVER store password! Store demo metadata flag only
            const displayName = isEmail ? email.split('@')[0] : 'Demo User';
            const userData = {
                name: displayName,
                email: isEmail ? email : '',
                phone: isPhone ? email : '',
                isLoggedIn: true,
                loginTime: new Date().toISOString()
            };

            try {
                localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
            } catch (err) {
                console.error('Error saving user to localStorage:', err);
            }

            updateNavbarUserUI();
            showToast(`Welcome back, ${displayName}! Redirecting...`, 'success');

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1000);
        });
    }

    // =========================================================================
    // 5. Contact Form Validation
    // =========================================================================
    function setupContactForm() {
        const contactForm = document.querySelector('.contact-form-card form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const firstName = document.getElementById('firstName')?.value.trim();
            showToast(`Thank you, ${firstName || 'valued customer'}! Your message has been sent to Daraz support.`, 'success');
            contactForm.reset();
        });
    }

    // =========================================================================
    // 6. Global Back to Top Button
    // =========================================================================
    function setupBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (!backToTop) return;

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =========================================================================
    // 7. Add to Cart Button Listeners (index.html)
    // =========================================================================
    function setupAddToCartButtons() {
        const buttons = document.querySelectorAll('.add-to-cart-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                const product = {
                    id: this.getAttribute('data-id'),
                    title: this.getAttribute('data-title'),
                    price: this.getAttribute('data-price'),
                    img: this.getAttribute('data-img')
                };
                addToCart(product);
            });
        });

        const clearBtn = document.getElementById('clearCartBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', clearCart);
        }

        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', function () {
                const cart = getCart();
                if (cart.length === 0) {
                    showToast('Your cart is empty. Add products before checking out!', 'warning');
                } else {
                    showToast('Thank you for shopping with Daraz Clone! Checkout is simulated for demo.', 'success');
                }
            });
        }
    }

    // =========================================================================
    // Initialization on DOMContentLoaded
    // =========================================================================
    document.addEventListener('DOMContentLoaded', function () {
        updateCartBadge();
        renderCartOffcanvas();
        updateNavbarUserUI();
        setupSearch();
        setupLoginForm();
        setupContactForm();
        setupBackToTop();
        setupAddToCartButtons();
    });
})();
