# Daraz Store Clone - Multi-Vendor E-Commerce Platform

A high-fidelity clone of **Daraz** (South Asia's leading online marketplace), built with HTML5, CSS3, JavaScript, and Bootstrap 5. Redesigned with authentic **Daraz Brand Architecture** and e-commerce patterns inspired by the **Doraz WooCommerce Theme** and **Daraz Store Theme**.

---

## 🎨 Brand Color Palette

Following the official [Daraz Brand Architecture Guidelines](https://discover.daraz.com/brand-architecture/colour):

### Primary Brand Colors
- **Daraz Orange (`#F85606`)**: Core primary brand color for navbars, primary CTAs, active states, price points, and highlights.
- **Daraz Light Blue / Teal (`#C2FFFA`)**: Signature secondary primary accent used for badges, search action buttons, promotional cards, and hero contrast accents.

### Secondary & Tint Palette
- **Dark Blue / Slate (`#0f172a`, `#1e293b`)**: Used for top utility bar, footers, and dark headers.
- **Teal Deep & Dark (`#009688`, `#0b6058`)**: High contrast typography and borders on teal badges.
- **Purple (`#7c3aed`)**: Secondary accent for corporate/promotional tints.
- **Green (`#10b981`)**: Verified sellers, in-stock indicators, and trust ratings.
- **Pink (`#f43f5e`)**: Special sale flags and voucher highlights.
- **Yellow / Amber (`#f59e0b`)**: Rating stars and high-urgency notifications.
- **Neutral Greys (`#f8fafc` to `#334155`)**: Crisp modern backgrounds and card borders.

---

## 🛍️ WordPress & E-Commerce Themes Inspiration

### 1. Doraz WooCommerce Theme (Shop Mania & Elementor Template)
- **Multi-Vendor Marketplace Layout**: Displays vendor name ("Sold by: [Store Name]"), seller rating, and badges (*DarazMall Official Flagship*, *Verified Seller*).
- **Multi-Vendor Live Search**: Instant interactive search suggestions popover with category filtering, product thumbnails, prices, and direct actions.
- **Multi-Vendor Filter Strip**: Quick-toggle filter buttons (*All Marketplace*, *DarazMall Official*, *Top Rated (4.7+)*, *Flash Deals*, *Under Rs. 1,000*).
- **Flash Sale Urgency Strip**: Real-time JavaScript countdown timer (Hours : Minutes : Seconds) and stock claim progress bars.
- **Quick View Modal**: Elementor-style modal popup with comprehensive product specs, vendor details, and quick add-to-cart.

### 2. Daraz Store Theme (WordPress.org E-Commerce Architecture)
- **Top Announcement Bar**: "Save More on App", "Sell on Daraz", "Daraz Affiliate", "Track My Order", and Login/Signup links.
- **Category Navigation Ribbon**: Dropdown categories and quick links to Flash Sales, DarazMall, Global Collection, and Best Sellers.
- **Trust & Value Bar**: 100% Authentic Brands, Nationwide DEX Delivery, 14-Day Free Returns, 24/7 Live Support.
- **Interactive Shopping Cart**: Dynamic cart badge counter with pop animation, slide-in offcanvas cart drawer, quantity adjustment, and checkout summary.

---

## 📂 Project Structure

```
Daraz-Store-Clone/
├── index.html                 # Main multi-vendor marketplace page
├── css/
│   └── style.css             # Comprehensive Daraz brand architecture & styles
├── js/
│   └── main.js               # Live search, cart drawer, filter, flash timer, quick view
├── images/
│   ├── daraz.png             # Daraz brand logo
│   ├── app-download.png      # App store / Google Play badges
│   └── payment-methods.png   # Accepted payment methods
├── pages/
│   ├── about-us.html         # About Daraz, DEX Logistics, Daraz University
│   ├── contact-us.html       # Customer care, DEX parcel tracking, contact form
│   ├── help-center.html      # Self-service FAQs and step-by-step order tracking
│   └── login.html            # Dual login for Buyers and Multi-Vendor Sellers
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser or serve it with Python:

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
http://localhost:8000
```

> **Note on Simulated Features**: User authentication (Login / Sign In) and Checkout are client-side simulations implemented for demonstration purposes. Credentials are validated locally and no real payment processing or user passwords are stored.
