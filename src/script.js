// FlexiSaf Tech Store - Combined JavaScript Application
// Week 1 Intermediate Deliverable - ES6 Features and Array Methods Implementation

const products = [
  {
    id: "p001",
    name: "FlexiSaf Ultrabook 14",
    brand: "FlexiSaf",
    category: "Laptops",
    price: 650000,
    rating: 4.6,
    stock: 12,
    image: "images/ultrabook14.jpeg",
    description: "14-inch ultrabook with Intel i7, 16GB RAM, 512GB SSD.",
  },
  {
    id: "p002",
    name: "FlexiSaf Pro 15",
    brand: "FlexiSaf",
    category: "Laptops",
    price: 890000,
    rating: 4.8,
    stock: 7,
    image: "images/laptop15.jpeg",
    description: "15-inch powerhouse for creators, 32GB RAM, 1TB SSD.",
  },
  {
    id: "p003",
    name: "FlexiTab 11",
    brand: "FlexiSaf",
    category: "Tablets",
    price: 280000,
    rating: 4.3,
    stock: 20,
    image: "images/tab11.jpeg",
    description: "11-inch tablet with stylus support and LTE.",
  },
  {
    id: "p004",
    name: "FlexiTab Mini 8",
    brand: "FlexiSaf",
    category: "Tablets",
    price: 165000,
    rating: 4.1,
    stock: 30,
    image: "images/tabmini8.jpeg",
    description: "Compact 8-inch tablet, perfect for reading and notes.",
  },
  {
    id: "p005",
    name: "FlexiBuds Pro",
    brand: "FlexiSaf",
    category: "Audio",
    price: 85000,
    rating: 4.5,
    stock: 50,
    image: "images/budspro.jpeg",
    description: "Active noise-cancelling earbuds with 24h battery.",
  },
  {
    id: "p006",
    name: "FlexiSound Bar 2.1",
    brand: "FlexiSaf",
    category: "Audio",
    price: 140000,
    rating: 4.2,
    stock: 18,
    image: "images/soundbar2.1.jpeg",
    description: "Immersive sound bar with wireless subwoofer.",
  },
  {
    id: "p007",
    name: "FlexiWatch S",
    brand: "FlexiSaf",
    category: "Wearables",
    price: 120000,
    rating: 4.0,
    stock: 35,
    image: "images/watchS.jpeg",
    description: "Smartwatch with AMOLED display and GPS.",
  },
  {
    id: "p008",
    name: "FlexiWatch X",
    brand: "FlexiSaf",
    category: "Wearables",
    price: 185000,
    rating: 4.7,
    stock: 15,
    image: "images/watchX.jpeg",
    description: "Premium smartwatch with ECG and LTE.",
  },
  {
    id: "p009",
    name: "FlexiCharge 65W GaN",
    brand: "FlexiSaf",
    category: "Accessories",
    price: 35000,
    rating: 4.4,
    stock: 60,
    image: "images/charge65.jpeg",
    description: "Compact fast charger with dual USB-C ports.",
  },
  {
    id: "p010",
    name: "FlexiType Mechanical Keyboard",
    brand: "FlexiSaf",
    category: "Accessories",
    price: 90000,
    rating: 4.6,
    stock: 22,
    image: "images/mechanicalkeyboard.jpeg",
    description: "Hot-swappable mechanical keyboard with RGB.",
  },
  {
    id: "p011",
    name: "FlexiCam 4K",
    brand: "FlexiSaf",
    category: "Cameras",
    price: 320000,
    rating: 4.4,
    stock: 9,
    image: "images/cam4k.jpeg",
    description: "Compact 4K mirrorless camera with dual AF.",
  },
  {
    id: "p012",
    name: "FlexiLens 50mm f/1.8",
    brand: "FlexiSaf",
    category: "Cameras",
    price: 110000,
    rating: 4.3,
    stock: 14,
    image: "images/lens50.jpeg",
    description: "Fast prime lens for portraits and low light.",
  },
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================
// Utility helpers and functional pipelines using ES6 features

// Currency formatting using Intl API (ES6 feature)
const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);

// Get unique categories using Set and spread operator (ES6 features)
const uniqueCategories = (items) =>
  Array.from(new Set(items.map((p) => p.category))).sort();

// Search products using arrow functions and destructuring (ES6 features)
const searchProducts = (items, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(({ name, brand, category, description }) => {
    const haystack =
      `${name} ${brand} ${category} ${description}`.toLowerCase();
    return haystack.includes(q);
  });
};

// Filter by category using arrow functions (ES6 feature)
const filterByCategory = (items, category) =>
  category && category !== "all"
    ? items.filter((p) => p.category === category)
    : items;

// Sort products using arrow functions and spread operator (ES6 features)
const sortProducts = (items, mode) => {
  const list = [...items]; // Spread operator to create new array
  switch (mode) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "rating-desc":
      return list.sort((a, b) => b.rating - a.rating);
    case "name-asc":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "relevance":
    default:
      return list;
  }
};

// Apply all filters using function composition (ES6 features)
const applyAllFilters = (items, { query, category, sort }) => {
  return sortProducts(
    filterByCategory(searchProducts(items, query), category),
    sort
  );
};

// Local storage utility using arrow functions and template literals (ES6 features)
const storage = {
  get: (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // ignore
    }
  },
};

// ============================================================================
// CART CLASS
// ============================================================================
// Shopping cart implementation using ES6 class syntax and Map

const STORAGE_KEY = "flexisaf-tech-store/cart";

class Cart {
  constructor() {
    // Initialize cart with saved data from localStorage
    const saved = storage.get(STORAGE_KEY, { items: {} });
    // Convert plain object to Map for better performance
    this.items = new Map(
      Object.entries(saved.items).map(([id, qty]) => [id, qty])
    );
  }

  // Save cart state to localStorage
  save() {
    const plain = Object.fromEntries(this.items);
    storage.set(STORAGE_KEY, { items: plain });
  }

  // Add item to cart
  add(productId, quantity = 1) {
    const existing = this.items.get(productId) || 0;
    this.items.set(productId, existing + quantity);
    this.save();
  }

  // Update item quantity
  update(productId, quantity) {
    if (quantity <= 0) {
      this.items.delete(productId);
    } else {
      this.items.set(productId, quantity);
    }
    this.save();
  }

  // Remove item from cart
  remove(productId) {
    this.items.delete(productId);
    this.save();
  }

  // Clear entire cart
  clear() {
    this.items.clear();
    this.save();
  }

  // Join with product catalog to compute totals using array methods
  lineItems(products) {
    return [...this.items.entries()]
      .map(([id, qty]) => {
        const product = products.find((p) => p.id === id);
        if (!product) return null;
        const lineTotal = qty * product.price;
        return { id, quantity: qty, product, lineTotal };
      })
      .filter(Boolean); // Remove null values
  }

  // Calculate cart totals using reduce method
  totals(products) {
    const subtotal = this.lineItems(products).reduce(
      (acc, li) => acc + li.lineTotal,
      0
    );
    const tax = Math.round(subtotal * 0.075);
    const total = subtotal + tax;
    return {
      subtotal,
      tax,
      total,
      formatted: {
        subtotal: formatCurrency(subtotal),
        tax: formatCurrency(tax),
        total: formatCurrency(total),
      },
    };
  }
}

// ============================================================================
// APPLICATION STATE AND INITIALIZATION
// ============================================================================
// Main application state and DOM elements

const state = {
  query: "",
  category: "all",
  sort: "relevance",
};

// Initialize cart instance
const cart = new Cart();

// DOM element references
const productGrid = document.getElementById("productGrid");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");
const cartItemsEl = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");
const clearCartBtn = document.getElementById("clearCartBtn");

// ============================================================================
// RENDERING FUNCTIONS
// ============================================================================
// Functions to render products and cart using template literals

// Populate categories dropdown using forEach method
const categories = uniqueCategories(products);
categories.forEach((cat) => {
  const opt = document.createElement("option");
  opt.value = cat;
  opt.textContent = cat;
  categorySelect.appendChild(opt);
});

// Render products grid using map method and template literals
const renderProducts = () => {
  const list = applyAllFilters(products, state);
  productGrid.innerHTML = list
    .map(
      (p) => `
    <article class="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-sm transition">
      <div class="aspect-square overflow-hidden">
        <img src="${p.image}" alt="${
        p.name
      }" class="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
      </div>
      <div class="p-3 space-y-1">
        <h3 class="text-sm font-medium line-clamp-1">${p.name}</h3>
        <p class="text-xs text-gray-500">${p.category}</p>
        <div class="flex items-center justify-between mt-1">
          <span class="text-brand font-semibold">${formatCurrency(
            p.price
          )}</span>
          <span class="text-xs text-amber-600">★ ${p.rating.toFixed(1)}</span>
        </div>
        <button data-add="${
          p.id
        }" class="w-full mt-2 rounded-md bg-brand hover:bg-brand-dark text-white py-1.5 text-xs">Add to Cart</button>
      </div>
    </article>
  `
    )
    .join("");
};

// Render cart items using map method and destructuring
const renderCart = () => {
  const lineItems = cart.lineItems(products);
  if (lineItems.length === 0) {
    cartItemsEl.innerHTML = `<div class="p-4 text-sm text-gray-500">Your cart is empty.</div>`;
  } else {
    cartItemsEl.innerHTML = lineItems
      .map(
        ({ id, quantity, product, lineTotal }) => `
      <div class="p-3 flex gap-3 items-center">
        <img src="${product.image}" alt="${
          product.name
        }" class="w-14 h-14 rounded-md object-cover border"/>
        <div class="flex-1">
          <p class="text-sm font-medium line-clamp-1">${product.name}</p>
          <p class="text-xs text-gray-500">${formatCurrency(
            product.price
          )} each</p>
          <div class="mt-1 flex items-center gap-2">
            <button data-dec="${id}" class="w-6 h-6 rounded border text-sm">-</button>
            <input data-qty="${id}" value="${quantity}" class="w-12 h-7 text-center rounded border" />
            <button data-inc="${id}" class="w-6 h-6 rounded border text-sm">+</button>
            <button data-remove="${id}" class="ml-auto text-xs text-red-600">Remove</button>
          </div>
        </div>
        <div class="text-sm font-semibold">${formatCurrency(lineTotal)}</div>
      </div>
    `
      )
      .join("");
  }

  // Update totals display
  const totals = cart.totals(products);
  subtotalEl.textContent = totals.formatted.subtotal;
  taxEl.textContent = totals.formatted.tax;
  totalEl.textContent = totals.formatted.total;
};

// ============================================================================
// EVENT HANDLERS
// ============================================================================
// Event listeners using arrow functions and destructuring

// Search input handler
searchInput.addEventListener("input", (e) => {
  state.query = e.target.value;
  renderProducts();
});

// Category filter handler
categorySelect.addEventListener("change", (e) => {
  state.category = e.target.value;
  renderProducts();
});

// Sort handler
sortSelect.addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderProducts();
});

// Product grid click handler for add to cart
productGrid.addEventListener("click", (e) => {
  const id = e.target?.dataset?.add;
  if (!id) return;
  cart.add(id, 1);
  renderCart();
});

// Cart items click handler using destructuring
cartItemsEl.addEventListener("click", (e) => {
  const { inc, dec, remove } = e.target.dataset;
  if (inc) {
    const current = Number(
      document.querySelector(`input[data-qty="${inc}"]`).value || 0
    );
    cart.update(inc, current + 1);
    renderCart();
  } else if (dec) {
    const current = Number(
      document.querySelector(`input[data-qty="${dec}"]`).value || 0
    );
    cart.update(dec, Math.max(0, current - 1));
    renderCart();
  } else if (remove) {
    cart.remove(remove);
    renderCart();
  }
});

// Quantity input change handler
cartItemsEl.addEventListener("change", (e) => {
  const id = e.target?.dataset?.qty;
  if (!id) return;
  const val = Number(e.target.value);
  cart.update(id, Number.isFinite(val) && val > 0 ? val : 1);
  renderCart();
});

// Clear cart handler
clearCartBtn.addEventListener("click", () => {
  cart.clear();
  renderCart();
});

// ============================================================================
// APPLICATION INITIALIZATION
// ============================================================================
// Initialize the application when DOM is loaded

// Initial render of products and cart
renderProducts();
renderCart();
