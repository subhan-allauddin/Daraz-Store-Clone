# Daraz Store Clone - Multi-Vendor E-Commerce Platform

A high-fidelity clone of **Daraz** (South Asia's leading online marketplace), built with HTML5, CSS3, JavaScript, and Bootstrap 5. Redesigned with authentic **Daraz Brand Architecture** and e-commerce patterns inspired by the **Doraz WooCommerce Theme** and **Daraz Store Theme**.

> **Note:** Product data, vendors, ratings, stock counts, and authentication (Buyer and Seller Center) are demo/simulated for client-side evaluation.

---

## 🎨 Brand Color Palette

### Primary Brand Color
- **Daraz Orange (`#F85606`)**: Official core primary brand color for navbars, primary CTAs, active states, price points, and sale highlights.

### Neutral Tint & Secondary Palette
- **Neutral Light Tint (`#EFF0F5`)**: Standard e-commerce neutral background tint used across category backdrops, borders, and UI panels.
- **Dark Blue / Slate (`#0F172A`, `#1E293B`)**: Used for the top utility bar, footers, text headings, and high-contrast elements.
- **Secondary Accents**:
  - **Green (`#10B981`)**: Verified seller indicators, in-stock badges, and positive ratings.
  - **Yellow / Amber (`#F59E0B`)**: Product rating stars and urgency notifications.
  - **Red / Maroon (`#D0011B`)**: DarazMall official flagship badges.
  - **Purple (`#7C3AED`) & Pink (`#F43F5E`)**: Promotional tint accents.
  - **Neutral Greys (`#F8FAFC` to `#334155`)**: Crisp card borders, dividers, and subtle backgrounds.

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
├── index.html                 # Main multi-vendor marketplace storefront
├── css/
│   └── style.css             # Comprehensive Daraz brand architecture & styles
├── js/
│   └── main.js               # Multi-vendor live search, cart drawer, filter, flash timer
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
