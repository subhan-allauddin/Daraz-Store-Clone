/**
 * Daraz Store Clone - Multi-Vendor Marketplace Interactive Engine
 * Inspired by Doraz WooCommerce Theme & Daraz Store Theme
 * Powers:
 *   1. Multi-Vendor Live Search with Instant Dropdown Autocomplete
 *   2. Multi-Vendor Category & Store Filter Pills
 *   3. Flash Sale Dynamic Live Countdown Timer
 *   4. Elementor / Doraz Style Quick View Modal
 *   5. Interactive Shopping Cart with LocalStorage Persistence & Offcanvas Drawer
 *   6. Buyer & Seller Center Authentication Simulation
 *   7. Contact Form Handler & Global Toast Notifications
 *   8. Smooth Back to Top Navigation
 */

(function () {
  'use strict';

  // =========================================================================
  // Multi-Vendor Product Catalog Dataset
  // =========================================================================
  const marketplaceProducts = [
    {
      id: 1,
      title: "Kitchen Shopping Basket & Organizer",
      category: "Home & Living",
      vendor: "HomeMart Official",
      vendorType: "darazmall",
      vendorRating: 4.8,
      price: 77,
      originalPrice: 150,
      discount: "-49%",
      rating: 4.7,
      reviews: 142,
      image: "https://static-01.daraz.pk/p/708410c25a831ec2411924f8dfafb07d.jpg",
      sold: 18,
      stock: 30,
      isFlash: true,
      description: "Multi-functional durable kitchen organizer basket made with BPA-free food grade material. Ideal for fruits, vegetables, pantry storage, and countertop sorting."
    },
    {
      id: 2,
      title: "Student Insulated Lunch Box with Cutlery",
      category: "Home & Living",
      vendor: "SmartLiving Store",
      vendorType: "verified",
      vendorRating: 4.6,
      price: 141,
      originalPrice: 260,
      discount: "-46%",
      rating: 4.8,
      reviews: 98,
      image: "https://static-01.daraz.pk/p/efae367e257e9d1edd305bfdff65ed89.jpg",
      sold: 25,
      stock: 40,
      isFlash: false,
      description: "High-grade stainless steel interior with leak-proof airtight locking lid. Includes integrated fork and spoon compartment. Keeps meals hot and fresh for hours."
    },
    {
      id: 3,
      title: "Premium Smart Wireless Earbuds Pro",
      category: "Electronics",
      vendor: "SoundCore Flagship",
      vendorType: "darazmall",
      vendorRating: 4.9,
      price: 1444,
      originalPrice: 2899,
      discount: "-50%",
      rating: 4.9,
      reviews: 520,
      image: "https://static-01.daraz.pk/p/12037d40ec57450eb42aaa0018fdfe24.jpg",
      sold: 84,
      stock: 100,
      isFlash: false,
      description: "Active Noise Cancellation, 36-hour playback with rapid USB-C charging case, water-resistant IPX5 rating, and ultra low-latency gaming mode."
    },
    {
      id: 4,
      title: "Men's Luxury Embroidered Designer Suit",
      category: "Fashion",
      vendor: "Sapphire Lifestyle",
      vendorType: "darazmall",
      vendorRating: 4.7,
      price: 1899,
      originalPrice: 3200,
      discount: "-41%",
      rating: 4.6,
      reviews: 67,
      image: "https://static-01.daraz.pk/p/1032df98668d2c4431371a080fd6d05f.jpg",
      sold: 12,
      stock: 25,
      isFlash: true,
      description: "Handcrafted breathable cotton blend with intricate thread embroidery on collar and cuffs. Ideal for festive gatherings, formal events, and cultural occasions."
    },
    {
      id: 5,
      title: "Chic Fashion Pendant & Bracelet Set",
      category: "Fashion",
      vendor: "Glow & Shine Jewels",
      vendorType: "verified",
      vendorRating: 4.5,
      price: 655,
      originalPrice: 1199,
      discount: "-45%",
      rating: 4.5,
      reviews: 112,
      image: "https://static-01.daraz.pk/p/90daeba01323853c6ba55f5baefefd2b.jpg",
      sold: 45,
      stock: 60,
      isFlash: false,
      description: "Gold-plated hypoallergenic alloy jewelry set featuring a delicate minimalist pendant necklace with matching adjustable charm link bracelet."
    },
    {
      id: 6,
      title: "Abbott Nutrition Wellness Health Powder",
      category: "Health & Beauty",
      vendor: "Abbott Official Store",
      vendorType: "darazmall",
      vendorRating: 5.0,
      price: 2505,
      originalPrice: 3100,
      discount: "-19%",
      rating: 4.9,
      reviews: 310,
      image: "https://static-01.daraz.pk/p/5c786508cacb08c61c2b988a2afa4d61.jpg",
      sold: 110,
      stock: 120,
      isFlash: false,
      description: "Scientifically formulated with essential vitamins, minerals, and high-quality protein to support daily energy, active immunity, and bone density."
    },
    {
      id: 7,
      title: "Home Essential Multi-Use Organizer Rack",
      category: "Home & Living",
      vendor: "DecoCraft Official",
      vendorType: "verified",
      vendorRating: 4.6,
      price: 699,
      originalPrice: 1250,
      discount: "-44%",
      rating: 4.6,
      reviews: 89,
      image: "https://static-01.daraz.pk/p/0bee290dee340ce09891cfedb579fcbd.jpg",
      sold: 38,
      stock: 50,
      isFlash: true,
      description: "Heavy-duty anti-rust carbon steel organizer shelf. Space-saving stackable tier design suitable for bathroom counters, kitchen spices, or study desk."
    },
    {
      id: 8,
      title: "Ergonomic Daily Comfort Utility Item",
      category: "Home & Living",
      vendor: "Prime Retail PK",
      vendorType: "verified",
      vendorRating: 4.7,
      price: 599,
      originalPrice: 999,
      discount: "-40%",
      rating: 4.7,
      reviews: 76,
      image: "https://static-01.daraz.pk/p/981c7514769ccd16d570f681967e773b.jpg",
      sold: 19,
      stock: 35,
      isFlash: false,
      description: "Premium engineered silicone daily essential with reinforced grip and long-lasting durability. Backed by 100% Daraz buyer protection guarantee."
    },
    {
      id: 9,
      title: "Smart Fitness Tracker Band Pro",
      category: "Electronics",
      vendor: "Xiaomi Direct",
      vendorType: "darazmall",
      vendorRating: 4.8,
      price: 2499,
      originalPrice: 4199,
      discount: "-40%",
      rating: 4.8,
      reviews: 230,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 62,
      stock: 80,
      isFlash: true,
      description: "AMOLED full-color touch display, 24/7 heart-rate & SpO2 monitoring, 50m water resistance, and up to 14-day battery life."
    },
    {
      id: 10,
      title: "Fast-Charging Power Bank 20000mAh",
      category: "Electronics",
      vendor: "Anker Official",
      vendorType: "darazmall",
      vendorRating: 4.9,
      price: 3299,
      originalPrice: 5499,
      discount: "-40%",
      rating: 4.9,
      reviews: 415,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 140,
      stock: 160,
      isFlash: false,
      description: "Dual 22.5W USB-C Power Delivery ports with multi-device high-speed charging. Aircraft-approved compact fire-retardant casing."
    },
    {
      id: 11,
      title: "Gaming Mechanical RGB Keyboard",
      category: "Electronics",
      vendor: "Logitech Store",
      vendorType: "darazmall",
      vendorRating: 4.8,
      price: 4199,
      originalPrice: 6999,
      discount: "-40%",
      rating: 4.7,
      reviews: 180,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 45,
      stock: 70,
      isFlash: true,
      description: "Tactile Blue Switches with anti-ghosting keys, customizable per-key dynamic RGB backlighting, and heavy-duty aluminum top plate."
    },
    {
      id: 12,
      title: "Classic Chronograph Quartz Watch",
      category: "Fashion",
      vendor: "Casio Official",
      vendorType: "darazmall",
      vendorRating: 4.9,
      price: 5499,
      originalPrice: 8999,
      discount: "-39%",
      rating: 4.9,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 34,
      stock: 50,
      isFlash: false,
      description: "Sleek stainless steel case, scratch-resistant mineral glass, 50m water resistance, with precise Japanese quartz chronograph movement."
    },
    {
      id: 13,
      title: "Stainless Steel Electric Kettle 1.8L",
      category: "Home & Living",
      vendor: "Philips Domestic",
      vendorType: "darazmall",
      vendorRating: 4.7,
      price: 2899,
      originalPrice: 4499,
      discount: "-36%",
      rating: 4.6,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 52,
      stock: 75,
      isFlash: true,
      description: "Rapid-boil 1500W heating element, food-grade 304 stainless steel interior, auto shut-off, and boil-dry safety protection."
    },
    {
      id: 14,
      title: "Ultra-Quiet Portable Desk Fan",
      category: "Home & Living",
      vendor: "Baseus Global",
      vendorType: "verified",
      vendorRating: 4.6,
      price: 1199,
      originalPrice: 1999,
      discount: "-40%",
      rating: 4.5,
      reviews: 88,
      image: "https://images.unsplash.com/photo-1618941716939-553df3c6c278?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 30,
      stock: 60,
      isFlash: false,
      description: "USB rechargeable with 3-speed aerodynamic airflow, 360-degree rotation, ultra-quiet brushless motor, and up to 8-hour battery."
    },
    {
      id: 15,
      title: "Noise-Cancelling Over-Ear Headphones",
      category: "Electronics",
      vendor: "Sony Audio PK",
      vendorType: "darazmall",
      vendorRating: 5.0,
      price: 6999,
      originalPrice: 11500,
      discount: "-39%",
      rating: 4.9,
      reviews: 340,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 92,
      stock: 110,
      isFlash: false,
      description: "Hybrid active noise cancellation, high-resolution audio drivers, plush memory foam ear cushions, and 40-hour wireless playtime."
    },
    {
      id: 16,
      title: "Leather Casual Men's Loafers",
      category: "Fashion",
      vendor: "Bata Flagship",
      vendorType: "darazmall",
      vendorRating: 4.7,
      price: 3499,
      originalPrice: 5200,
      discount: "-33%",
      rating: 4.6,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 41,
      stock: 60,
      isFlash: true,
      description: "Genuine grain leather upper with cushioned arch support insole and flexible anti-skid rubber outsole for all-day walking comfort."
    },
    {
      id: 17,
      title: "UV Protection Polarized Sunglasses",
      category: "Fashion",
      vendor: "Ray-Style Eyewear",
      vendorType: "verified",
      vendorRating: 4.5,
      price: 899,
      originalPrice: 1799,
      discount: "-50%",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 80,
      stock: 100,
      isFlash: false,
      description: "UV400 anti-glare TAC polarized lenses, ultra-lightweight magnesium-aluminum frame, with protective hard case and cleaning cloth."
    },
    {
      id: 18,
      title: "Compact Multi-Blade Food Processor",
      category: "Home & Living",
      vendor: "Tefal Kitchen",
      vendorType: "darazmall",
      vendorRating: 4.8,
      price: 3799,
      originalPrice: 5999,
      discount: "-37%",
      rating: 4.7,
      reviews: 73,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 28,
      stock: 45,
      isFlash: true,
      description: "Heavy-duty copper motor with 4 titanium cross blades. Chops meat, vegetables, and blends sauces in under 15 seconds."
    },
    {
      id: 19,
      title: "Non-Stick Ceramic Frying Pan 28cm",
      category: "Home & Living",
      vendor: "Prestige Cookware",
      vendorType: "verified",
      vendorRating: 4.6,
      price: 1650,
      originalPrice: 2750,
      discount: "-40%",
      rating: 4.6,
      reviews: 110,
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 55,
      stock: 80,
      isFlash: false,
      description: "100% PFOA-free non-stick ceramic granite coating, induction compatible base, stay-cool ergonomic soft-touch wooden-finish handle."
    },
    {
      id: 20,
      title: "Herbal Anti-Hairfall Shampoo 400ml",
      category: "Health & Beauty",
      vendor: "L'Oreal Paris",
      vendorType: "darazmall",
      vendorRating: 4.9,
      price: 920,
      originalPrice: 1400,
      discount: "-34%",
      rating: 4.8,
      reviews: 420,
      image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 190,
      stock: 220,
      isFlash: true,
      description: "Enriched with biotin and natural argan oil to nourish hair follicles, reduce breakage, and promote thicker, stronger hair."
    },
    {
      id: 21,
      title: "High-Speed USB-C Braided Fast Cable",
      category: "Electronics",
      vendor: "Ugreen Official",
      vendorType: "verified",
      vendorRating: 4.8,
      price: 449,
      originalPrice: 899,
      discount: "-50%",
      rating: 4.8,
      reviews: 310,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 145,
      stock: 180,
      isFlash: false,
      description: "Military-grade nylon braided 2-meter USB-C cable supporting 60W Power Delivery fast charging and 480Mbps data synchronization."
    },
    {
      id: 22,
      title: "Ergonomic Memory Foam Contour Pillow",
      category: "Home & Living",
      vendor: "SleepWell PK",
      vendorType: "verified",
      vendorRating: 4.7,
      price: 1750,
      originalPrice: 2999,
      discount: "-42%",
      rating: 4.7,
      reviews: 84,
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 37,
      stock: 55,
      isFlash: false,
      description: "Orthopedic cervical contour design with slow-rebound memory foam to relieve neck strain, with washable breathable hypoallergenic cover."
    },
    {
      id: 23,
      title: "Lightweight Breathable Running Shoes",
      category: "Fashion",
      vendor: "Nike Athletics",
      vendorType: "darazmall",
      vendorRating: 4.9,
      price: 4899,
      originalPrice: 7999,
      discount: "-39%",
      rating: 4.8,
      reviews: 175,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 68,
      stock: 90,
      isFlash: true,
      description: "Engineered mesh upper for maximum ventilation, responsive Air-cushion foam midsole, and durable high-traction rubber outsole."
    },
    {
      id: 24,
      title: "Smart Touch Dimmable LED Desk Lamp",
      category: "Home & Living",
      vendor: "Mi Eco-System",
      vendorType: "darazmall",
      vendorRating: 4.8,
      price: 2150,
      originalPrice: 3499,
      discount: "-39%",
      rating: 4.7,
      reviews: 130,
      image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 48,
      stock: 70,
      isFlash: false,
      description: "Touch control with 3 color temperatures, flicker-free eye-caring lighting, built-in timer, and adjustable folding gooseneck arm."
    },
    {
      id: 25,
      title: "Stainless Steel Insulated Water Bottle 1L",
      category: "Home & Living",
      vendor: "HydroFlow Store",
      vendorType: "verified",
      vendorRating: 4.6,
      price: 799,
      originalPrice: 1499,
      discount: "-47%",
      rating: 4.6,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 82,
      stock: 120,
      isFlash: true,
      description: "Double-wall vacuum insulation keeps drinks cold for 24 hours and hot for 12 hours. Sweat-proof powder-coated exterior with leakproof cap."
    },
    {
      id: 26,
      title: "4K Ultra HD Waterproof Action Camera",
      category: "Electronics",
      vendor: "GoAction Tech",
      vendorType: "verified",
      vendorRating: 4.7,
      price: 7499,
      originalPrice: 12999,
      discount: "-42%",
      rating: 4.6,
      reviews: 90,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 22,
      stock: 40,
      isFlash: false,
      description: "Native 4K 60fps video recording, electronic image stabilization (EIS), 30m waterproof casing included, with Wi-Fi smartphone remote link."
    },
    {
      id: 27,
      title: "Salon Professional Ionic Hair Dryer",
      category: "Health & Beauty",
      vendor: "Babyliss Care",
      vendorType: "darazmall",
      vendorRating: 4.8,
      price: 2999,
      originalPrice: 4800,
      discount: "-38%",
      rating: 4.8,
      reviews: 160,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 70,
      stock: 95,
      isFlash: true,
      description: "2200W AC salon motor with ionic conditioning technology for frizz-free shiny hair. Includes styling concentrator nozzle and diffuser."
    },
    {
      id: 28,
      title: "Wireless Ergonomic Optical Gaming Mouse",
      category: "Electronics",
      vendor: "Razer Flagship",
      vendorType: "darazmall",
      vendorRating: 4.9,
      price: 1899,
      originalPrice: 3199,
      discount: "-41%",
      rating: 4.9,
      reviews: 280,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=400&fit=crop&q=80&auto=format",
      sold: 115,
      stock: 140,
      isFlash: false,
      description: "Ultra-fast 2.4GHz lag-free wireless connection, adjustable 16000 DPI optical sensor, 6 programmable buttons, and 70-hour battery life."
    }
  ];

  // =========================================================================
  // 1. Toast Notification Dispatcher
  // =========================================================================
  function showToast(message, variant = 'primary') {
    let toastContainer = document.getElementById('darazToastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'darazToastContainer';
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      toastContainer.style.zIndex = '11000';
      document.body.appendChild(toastContainer);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center text-white border-0 shadow-lg';
    toastEl.style.backgroundColor = variant === 'danger' ? '#ef4444' : (variant === 'success' ? '#10b981' : 'var(--daraz-orange, #F85606)');
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center">
          <i class="fas fa-${variant === 'danger' ? 'exclamation-circle' : 'check-circle'} me-2 fs-5 text-white"></i>
          <span>${escapeHtml(message)}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    toastContainer.appendChild(toastEl);
    if (window.bootstrap && window.bootstrap.Toast) {
      const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
      toast.show();
      toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
    }
  }

  // =========================================================================
  // 2. Shopping Cart with LocalStorage Persistence
  // =========================================================================
  const CART_STORAGE_KEY = 'daraz_cart_v2';

  function getCart() {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to save cart:', err);
    }
    updateCartUI();
  }

  function addToCart(product) {
    const cart = getCart();
    const id = parseInt(product.id, 10);
    const existing = cart.find(item => item.id === id);

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({
        id: id,
        title: product.title,
        price: parseInt(product.price, 10) || 0,
        image: product.image,
        vendor: product.vendor || 'Verified Seller',
        quantity: 1
      });
    }

    saveCart(cart);
    showToast(`Added "${product.title}" to cart!`);
  }

  function updateItemQty(id, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === parseInt(id, 10));
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
      return;
    }

    saveCart(cart);
  }

  function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(i => i.id !== parseInt(id, 10));
    saveCart(cart);
    showToast('Item removed from cart.');
  }

  function clearCart() {
    saveCart([]);
    showToast('Your shopping cart has been cleared.');
  }

  function updateCartUI() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

    // Update Badge Counters
    const badges = [document.getElementById('cartBadgeCount'), document.getElementById('cartCount')];
    badges.forEach(b => {
      if (b) {
        b.textContent = totalCount;
        b.style.display = totalCount > 0 ? 'inline-block' : 'none';
        b.classList.remove('badge-pop');
        void b.offsetWidth;
        b.classList.add('badge-pop');
      }
    });

    // Render Drawer Items Container
    const drawerContainer = document.getElementById('cartDrawerItems') || document.getElementById('cartItemsList');
    const emptyState = document.getElementById('emptyCartState');
    const subtotalEl = document.getElementById('cartSubtotalAmount') || document.getElementById('cartTotalPrice');

    if (subtotalEl) {
      subtotalEl.textContent = `Rs. ${totalPrice.toLocaleString()}`;
    }

    if (!drawerContainer) return;

    if (cart.length === 0) {
      drawerContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    let html = '';
    cart.forEach(item => {
      const itemTotal = item.price * (item.quantity || 1);
      html += `
        <div class="cart-item-row p-3 border-bottom d-flex align-items-center gap-3">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" class="rounded" style="width: 54px; height: 54px; object-fit: cover;">
          <div class="flex-grow-1 overflow-hidden">
            <div class="fw-semibold text-truncate small">${escapeHtml(item.title)}</div>
            <div class="text-muted small">Sold by: <span class="text-dark">${escapeHtml(item.vendor)}</span></div>
            <div class="text-danger fw-bold small">Rs. ${item.price.toLocaleString()} x ${item.quantity} = Rs. ${itemTotal.toLocaleString()}</div>
          </div>
          <div class="d-flex flex-column align-items-end gap-1">
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-secondary px-2 py-0" onclick="window.DarazApp.updateItemQty(${item.id}, -1)">-</button>
              <span class="px-2 py-0 border-top border-bottom small d-flex align-items-center">${item.quantity}</span>
              <button class="btn btn-outline-secondary px-2 py-0" onclick="window.DarazApp.updateItemQty(${item.id}, 1)">+</button>
            </div>
            <button class="btn btn-link text-danger p-0 small text-decoration-none" onclick="window.DarazApp.removeFromCart(${item.id})">
              <i class="fas fa-trash-alt me-1"></i>Remove
            </button>
          </div>
        </div>
      `;
    });

    drawerContainer.innerHTML = html;
  }

  // =========================================================================
  // 3. Multi-Vendor Live Search (Doraz Theme Feature)
  // =========================================================================
  function setupLiveSearch() {
    const searchInput = document.getElementById('navbarSearchInput');
    const searchDropdown = document.getElementById('liveSearchDropdown');
    const categoryFilter = document.getElementById('searchCategorySelect');
    const searchForm = document.getElementById('navbarSearchForm');

    if (!searchInput) return;

    function renderDropdownResults() {
      if (!searchDropdown) return;
      const query = searchInput.value.trim().toLowerCase();
      const selectedCategory = categoryFilter ? categoryFilter.value : 'all';

      if (query.length < 1) {
        searchDropdown.innerHTML = '';
        searchDropdown.classList.remove('show');
        return;
      }

      const matched = marketplaceProducts.filter(item => {
        const matchText = (item.title + ' ' + item.vendor + ' ' + item.category).toLowerCase().includes(query);
        const matchCategory = (selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase());
        return matchText && matchCategory;
      });

      if (matched.length === 0) {
        searchDropdown.innerHTML = `
          <div class="p-3 text-center text-muted">
            <i class="fas fa-search me-2 text-warning"></i>
            No products found for "<strong>${escapeHtml(query)}</strong>"
            <div class="mt-2 small text-secondary">Try searching "earbuds", "suit", "basket", or "abbott"</div>
          </div>
        `;
        searchDropdown.classList.add('show');
        return;
      }

      let html = `
        <div class="search-header px-3 py-2 border-bottom d-flex justify-content-between align-items-center bg-light">
          <span class="small fw-bold text-dark"><i class="fas fa-bolt text-danger me-1"></i> Suggested Products (${matched.length})</span>
          <span class="badge" style="background-color: var(--daraz-dark-blue); color: white;">Multi-Vendor</span>
        </div>
        <div class="search-results-list" style="max-height: 360px; overflow-y: auto;">
      `;

      matched.forEach(product => {
        const badgeClass = product.vendorType === 'darazmall' ? 'badge-darazmall' : 'badge-verified';
        html += `
          <div class="search-result-item d-flex align-items-center p-2 border-bottom" role="button" onclick="window.DarazApp.openQuickView(${product.id})">
            <img src="${product.image}" alt="${escapeHtml(product.title)}" class="rounded me-3" style="width: 46px; height: 46px; object-fit: cover;">
            <div class="flex-grow-1 overflow-hidden">
              <div class="product-title-search text-truncate fw-semibold text-dark">${escapeHtml(product.title)}</div>
              <div class="d-flex align-items-center gap-2 small">
                <span class="text-danger fw-bold">Rs. ${product.price.toLocaleString()}</span>
                <del class="text-muted small">Rs. ${product.originalPrice.toLocaleString()}</del>
                <span class="badge ${badgeClass} small">${escapeHtml(product.vendor)}</span>
              </div>
            </div>
            <button class="btn btn-sm btn-outline-danger ms-2" onclick="event.stopPropagation(); window.DarazApp.addToCartById(${product.id});" title="Quick Add">
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        `;
      });

      html += `
        </div>
        <div class="p-2 text-center bg-light border-top">
          <a href="#featured-products" class="small text-decoration-none fw-bold" style="color: var(--daraz-orange);" onclick="document.getElementById('liveSearchDropdown').classList.remove('show');">
            View all store results &rarr;
          </a>
        </div>
      `;

      searchDropdown.innerHTML = html;
      searchDropdown.classList.add('show');
    }

    searchInput.addEventListener('input', () => {
      renderDropdownResults();
      filterGridProducts(searchInput.value.trim().toLowerCase());
    });

    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length > 0) renderDropdownResults();
    });

    if (categoryFilter) {
      categoryFilter.addEventListener('change', () => {
        renderDropdownResults();
        filterGridProducts(searchInput.value.trim().toLowerCase());
      });
    }

    document.addEventListener('click', (e) => {
      if (searchDropdown && !searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove('show');
      }
    });

    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        const isHomePage = !!document.getElementById('productsGrid');
        if (isHomePage) {
          const section = document.getElementById('featured-products');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
          if (searchDropdown) searchDropdown.classList.remove('show');
        } else {
          window.location.href = `../index.html?q=${encodeURIComponent(query)}`;
        }
      });
    }

    // Check URL query parameters (?q=...) on index page
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const q = urlParams.get('q');
      if (q && searchInput) {
        searchInput.value = q;
        filterGridProducts(q.toLowerCase());
      }
    } catch (e) {}
  }

  function filterGridProducts(query) {
    const items = document.querySelectorAll('.product-grid-item, .product-col');
    if (!items.length) return;

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!query || text.includes(query)) {
        item.style.display = '';
        item.classList.remove('d-none');
      } else {
        item.style.display = 'none';
        item.classList.add('d-none');
      }
    });
  }

  // =========================================================================
  // 4. Multi-Vendor Filter Pills (Doraz Theme Feature)
  // =========================================================================
  function setupVendorFilter() {
    const filterButtons = document.querySelectorAll('.vendor-filter-btn');
    const productCards = document.querySelectorAll('.product-grid-item');

    if (!filterButtons.length || !productCards.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        productCards.forEach(card => {
          const vendorType = card.getAttribute('data-vendor-type');
          const isFlash = card.getAttribute('data-is-flash') === 'true';
          const rating = parseFloat(card.getAttribute('data-rating') || '0');
          const price = parseInt(card.getAttribute('data-price') || '0', 10);

          let show = false;
          if (filter === 'all') show = true;
          else if (filter === 'darazmall' && vendorType === 'darazmall') show = true;
          else if (filter === 'top-rated' && rating >= 4.7) show = true;
          else if (filter === 'flash-deals' && isFlash) show = true;
          else if (filter === 'under-1000' && price < 1000) show = true;

          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // =========================================================================
  // 5. Flash Sale Real-Time Countdown Timer
  // =========================================================================
  function setupFlashCountdown() {
    const hoursEl = document.getElementById('flashHours');
    const minsEl = document.getElementById('flashMins');
    const secsEl = document.getElementById('flashSecs');

    if (!hoursEl || !minsEl || !secsEl) return;

    let remainingSeconds = (8 * 3600) + (45 * 60) + 30;

    function tick() {
      if (remainingSeconds <= 0) remainingSeconds = 24 * 3600;
      remainingSeconds--;

      const h = Math.floor(remainingSeconds / 3600);
      const m = Math.floor((remainingSeconds % 3600) / 60);
      const s = remainingSeconds % 60;

      hoursEl.textContent = String(h).padStart(2, '0');
      minsEl.textContent = String(m).padStart(2, '0');
      secsEl.textContent = String(s).padStart(2, '0');
    }

    tick();
    setInterval(tick, 1000);
  }

  // =========================================================================
  // 6. Elementor / Doraz Style Quick View Modal
  // =========================================================================
  function setupQuickView() {
    document.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-grid-item') || e.target.closest('.product-card');
        if (!card) return;
        const rawId = card.getAttribute('data-product-id') || card.getAttribute('data-id') || btn.getAttribute('data-id') || '1';
        const id = parseInt(String(rawId).replace(/\D/g, ''), 10) || 1;
        openQuickView(id);
      });
    });
  }

  function openQuickView(productId) {
    const product = marketplaceProducts.find(p => p.id === productId);
    if (!product) return;

    const modalEl = document.getElementById('quickViewModal');
    if (!modalEl) return;

    document.getElementById('qvModalTitle').textContent = product.title;
    document.getElementById('qvModalImage').src = product.image;
    document.getElementById('qvModalImage').alt = product.title;
    document.getElementById('qvModalPrice').textContent = `Rs. ${product.price.toLocaleString()}`;
    document.getElementById('qvModalOriginalPrice').textContent = `Rs. ${product.originalPrice.toLocaleString()}`;
    document.getElementById('qvModalDiscount').textContent = product.discount;
    document.getElementById('qvModalDescription').textContent = product.description;
    document.getElementById('qvModalCategory').textContent = product.category;
    document.getElementById('qvModalVendor').textContent = product.vendor;
    document.getElementById('qvModalRating').innerHTML = `★ ${product.rating} (${product.reviews} buyer reviews)`;
    document.getElementById('qvModalStock').textContent = `${product.stock - product.sold} units remaining in stock`;

    const vendorBadge = document.getElementById('qvModalVendorBadge');
    if (vendorBadge) {
      vendorBadge.textContent = product.vendorType === 'darazmall' ? 'DarazMall Flagship' : 'Verified Seller';
      vendorBadge.className = `badge ${product.vendorType === 'darazmall' ? 'badge-darazmall' : 'badge-verified'}`;
    }

    const addBtn = document.getElementById('qvAddToCartBtn');
    if (addBtn) {
      addBtn.onclick = () => {
        addToCart(product);
        if (window.bootstrap && window.bootstrap.Modal) {
          const bsModal = bootstrap.Modal.getInstance(modalEl);
          if (bsModal) bsModal.hide();
        }
      };
    }

    if (window.bootstrap && window.bootstrap.Modal) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }

  // =========================================================================
  // 7. Add to Cart Listeners
  // =========================================================================
  function setupCartButtons() {
    document.querySelectorAll('.btn-add-to-cart, .add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-grid-item') || e.target.closest('.product-card') || e.target.closest('.product-col');
        if (!card) return;

        const rawId = card.getAttribute('data-product-id') || btn.getAttribute('data-id') || '1';
        const id = parseInt(String(rawId).replace(/\D/g, ''), 10) || 1;
        const product = marketplaceProducts.find(p => p.id === id) || {
          id: id,
          title: btn.getAttribute('data-title') || card.querySelector('.card-title')?.textContent.trim() || 'Daraz Product',
          price: parseInt(btn.getAttribute('data-price') || card.getAttribute('data-price') || '100', 10),
          image: btn.getAttribute('data-img') || card.querySelector('img')?.src || '',
          vendor: card.querySelector('.vendor-tag')?.textContent.trim() || 'Verified Seller'
        };

        addToCart(product);
      });
    });

    const clearBtn = document.getElementById('clearCartBtn');
    if (clearBtn) clearBtn.addEventListener('click', clearCart);

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        const cart = getCart();
        if (cart.length === 0) {
          showToast('Your cart is empty. Add products before checkout!', 'warning');
        } else {
          showToast('Redirecting to Daraz Secure Checkout... Thank you for shopping with us!', 'success');
        }
      });
    }
  }

  // =========================================================================
  // 8. Authentication (Buyer & Multi-Vendor Seller Center)
  // =========================================================================
  const USER_STORAGE_KEY = 'daraz_demo_user';

  function updateNavbarUserUI() {
    try {
      const raw = localStorage.getItem(USER_STORAGE_KEY);
      const user = raw ? JSON.parse(raw) : null;
      const userText = document.getElementById('navUserText');
      if (user && user.name && userText) {
        userText.textContent = user.name;
      }
    } catch (e) {}
  }

  function setupAuth() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.getElementById('togglePassword');
    if (toggleBtn && passwordInput) {
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

    const buyerForm = document.getElementById('buyerLoginForm');
    if (buyerForm) {
      buyerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email')?.value.trim() || 'Customer';
        const name = email.split('@')[0];
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ name: name, role: 'buyer' }));
        showToast(`Welcome back, ${name}! Redirecting to marketplace...`, 'success');
        setTimeout(() => window.location.href = '../index.html', 1000);
      });
    }

    const sellerForm = document.getElementById('sellerLoginForm');
    if (sellerForm) {
      sellerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ name: 'Seller Partner', role: 'seller' }));
        showToast('Authenticated! Redirecting to Daraz Seller Center...', 'success');
        setTimeout(() => window.location.href = '../index.html', 1000);
      });
    }
  }

  // =========================================================================
  // 9. Contact Form & Back to Top
  // =========================================================================
  function setupMisc() {
    const contactForm = document.getElementById('contactForm') || document.querySelector('.contact-form-card form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Your message has been submitted to Daraz Support! We will reply within 4 hours.', 'success');
        contactForm.reset();
      });
    }

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        backToTop.style.display = window.pageYOffset > 300 ? 'block' : 'none';
      });
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Expose global window API for inline callbacks
  window.DarazApp = {
    addToCartById: (id) => {
      const p = marketplaceProducts.find(item => item.id === id);
      if (p) addToCart(p);
    },
    openQuickView: openQuickView,
    updateItemQty: updateItemQty,
    removeFromCart: removeFromCart,
    clearCart: clearCart
  };

  // Global checkoutCart helper
  window.checkoutCart = function () {
    const cart = getCart();
    if (cart.length === 0) {
      showToast('Your cart is empty. Add products before checking out!', 'warning');
    } else {
      showToast('Redirecting to Daraz Secure Checkout... Thank you for shopping with us!', 'success');
    }
  };

  // DOM Ready Initializer
  document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    updateNavbarUserUI();
    setupLiveSearch();
    setupVendorFilter();
    setupFlashCountdown();
    setupQuickView();
    setupCartButtons();
    setupAuth();
    setupMisc();
  });
})();
