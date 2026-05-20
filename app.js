const categories = [
  ["Mobiles", "📱"],
  ["Laptops", "💻"],
  ["Fashion", "👕"],
  ["Shoes", "👟"],
  ["Watches", "⌚"],
  ["Beauty", "✨"],
  ["Appliances", "🔌"],
  ["Furniture", "🛋"],
  ["Gaming", "🎮"],
  ["Groceries", "🛒"],
  ["Fitness", "💪"],
  ["Books", "📚"],
];

const products = [
  {
    id: 1,
    title: "iPhone 16 Pro Max 256GB",
    brand: "Apple",
    category: "Mobiles",
    price: 139900,
    original: 159900,
    rating: 4.8,
    discount: 13,
    delivery: "Today by 9 PM",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80",
    specs: ["A18 Pro", "256GB", "48MP Camera", "Titanium"],
  },
  {
    id: 2,
    title: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Mobiles",
    price: 124999,
    original: 139999,
    rating: 4.7,
    discount: 11,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
    specs: ["12GB RAM", "512GB", "AI Zoom", "S Pen"],
  },
  {
    id: 3,
    title: "Alienware Zentra X Gaming Laptop",
    brand: "Alienware",
    category: "Laptops",
    price: 189990,
    original: 229990,
    rating: 4.6,
    discount: 17,
    delivery: "2 days",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
    specs: ["RTX 4080", "32GB RAM", "1TB SSD", "240Hz"],
  },
  {
    id: 4,
    title: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "Audio",
    price: 26990,
    original: 34990,
    rating: 4.8,
    discount: 23,
    delivery: "Today",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=80",
    specs: ["ANC", "30hr Battery", "Hi-Res", "Bluetooth 5.3"],
  },
  {
    id: 5,
    title: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "Watches",
    price: 79900,
    original: 89900,
    rating: 4.7,
    discount: 11,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=80",
    specs: ["GPS + Cellular", "Titanium", "Dive Ready", "OLED"],
  },
  {
    id: 6,
    title: "Nike Air Max Pulse Sneakers",
    brand: "Nike",
    category: "Shoes",
    price: 8999,
    original: 12999,
    rating: 4.4,
    discount: 31,
    delivery: "Today",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    specs: ["Size 6-11", "Running", "Foam Sole", "Blue"],
  },
  {
    id: 7,
    title: "Urban Hoodie Oversized",
    brand: "Zentra",
    category: "Fashion",
    price: 1299,
    original: 2499,
    rating: 4.3,
    discount: 48,
    delivery: "2 days",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    specs: ["Cotton", "Unisex", "Black", "Streetwear"],
  },
  {
    id: 8,
    title: "boAt Airdopes Supreme ANC",
    brand: "boAt",
    category: "Audio",
    price: 1499,
    original: 4499,
    rating: 4.2,
    discount: 67,
    delivery: "Today",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",
    specs: ["ANC", "50hr Case", "Low Latency", "Fast Charge"],
  },
  {
    id: 9,
    title: "MuscleBlaze Whey Protein 1kg",
    brand: "MuscleBlaze",
    category: "Fitness",
    price: 2199,
    original: 3299,
    rating: 4.5,
    discount: 33,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=900&q=80",
    specs: ["24g Protein", "Chocolate", "Certified", "1kg"],
  },
  {
    id: 10,
    title: "Logitech G Pro Gaming Keyboard",
    brand: "Logitech",
    category: "Gaming",
    price: 9999,
    original: 14999,
    rating: 4.6,
    discount: 33,
    delivery: "Today",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=900&q=80",
    specs: ["RGB", "Mechanical", "USB-C", "Tournament"],
  },
  {
    id: 11,
    title: "Minimal Desk Lamp Smart LED",
    brand: "Philips",
    category: "Home",
    price: 899,
    original: 1699,
    rating: 4.1,
    discount: 47,
    delivery: "Today",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    specs: ["Dimmable", "Warm/Cool", "USB", "Study"],
  },
  {
    id: 12,
    title: "Kindle Paperwhite Signature",
    brand: "Amazon",
    category: "Books",
    price: 15999,
    original: 19999,
    rating: 4.7,
    discount: 20,
    delivery: "2 days",
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=900&q=80",
    specs: ["32GB", "Waterproof", "Warm Light", "Wireless"],
  },
];

let cart = JSON.parse(localStorage.getItem("zentraCart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("zentraWishlist") || "[]");
let activeQuery = "";

const rupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderCategories() {
  $("#categoryGrid").innerHTML = categories
    .map(([name, icon]) => `<button class="category-card" data-category="${name}"><span>${icon}</span><b>${name}</b></button>`)
    .join("");
  $("#categoryMenu").innerHTML = categories
    .map(([name, icon]) => `<button data-category="${name}">${icon} ${name}</button>`)
    .join("");
}

function renderBrands() {
  const brands = [...new Set(products.map((p) => p.brand))];
  $("#brandFilter").innerHTML += brands.map((brand) => `<option value="${brand}">${brand}</option>`).join("");
  $("#brandRow").innerHTML = brands.map((brand) => `<span>${brand}</span>`).join("");
}

function productCard(product) {
  const wished = wishlist.includes(product.id);
  return `
    <article class="product-card">
      <img loading="lazy" src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <span class="rating">${product.rating} ★</span>
        <h3>${product.title}</h3>
        <small>${product.delivery} • Free delivery</small>
        <div class="price">
          <b>${rupee.format(product.price)}</b>
          <del>${rupee.format(product.original)}</del>
          <span class="discount">${product.discount}% off</span>
        </div>
        <div class="product-actions">
          <button class="ghost-btn" data-view="${product.id}">View</button>
          <button class="primary-btn" data-add="${product.id}">Add</button>
        </div>
        <button class="ghost-btn" data-wish="${product.id}">${wished ? "Saved" : "Wishlist"}</button>
      </div>
    </article>`;
}

function getFilteredProducts() {
  const maxPrice = Number($("#priceFilter").value);
  const minRating = Number($("#ratingFilter").value);
  const brand = $("#brandFilter").value;
  return products.filter((p) => {
    const queryMatch = `${p.title} ${p.brand} ${p.category}`.toLowerCase().includes(activeQuery.toLowerCase());
    return queryMatch && p.price <= maxPrice && p.rating >= minRating && (brand === "all" || p.brand === brand);
  });
}

function renderProducts() {
  $("#priceValue").textContent = rupee.format(Number($("#priceFilter").value));
  const filtered = getFilteredProducts();
  $("#resultText").textContent = `${filtered.length} products found`;
  $("#productsGrid").innerHTML = filtered.map(productCard).join("") || `<div class="panel"><h2>No products found</h2><p>Try another search or reset filters.</p></div>`;
}

function saveState() {
  localStorage.setItem("zentraCart", JSON.stringify(cart));
  localStorage.setItem("zentraWishlist", JSON.stringify(wishlist));
}

function updateCounts() {
  $("#cartCount").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  $("#wishCount").textContent = wishlist.length;
  $("#wishSummary").textContent = wishlist.length ? `${wishlist.length} products saved` : "No saved products yet";
}

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  saveState();
  updateCounts();
  renderCart();
  toast("Added to cart");
}

function toggleWishlist(id) {
  wishlist = wishlist.includes(id) ? wishlist.filter((item) => item !== id) : [...wishlist, id];
  saveState();
  updateCounts();
  renderProducts();
  toast(wishlist.includes(id) ? "Saved to wishlist" : "Removed from wishlist");
}

function renderCart() {
  const rows = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return `
        <div class="cart-line">
          <img src="${product.image}" alt="${product.title}">
          <div>
            <b>${product.title}</b>
            <small>${rupee.format(product.price)} • ${product.delivery}</small>
            <div class="qty">
              <button data-dec="${product.id}">-</button>
              <span>${item.qty}</span>
              <button data-inc="${product.id}">+</button>
              <button data-remove="${product.id}">Remove</button>
            </div>
          </div>
          <b>${rupee.format(product.price * item.qty)}</b>
        </div>`;
    })
    .join("");
  $("#cartItems").innerHTML = rows || `<p>Your cart is empty. Add something exciting.</p>`;
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);
  const shipping = subtotal > 0 && subtotal < 999 ? 49 : 0;
  const tax = Math.round(subtotal * 0.03);
  const total = subtotal + shipping + tax;
  $("#priceBox").innerHTML = `
    <div><span>Subtotal</span><b>${rupee.format(subtotal)}</b></div>
    <div><span>Shipping</span><b>${shipping ? rupee.format(shipping) : "Free"}</b></div>
    <div><span>Taxes</span><b>${rupee.format(tax)}</b></div>
    <div><span>Total</span><b>${rupee.format(total)}</b></div>`;
}

function openDrawer(id) {
  $(`#${id}`).classList.add("show");
  $(`#${id}`).setAttribute("aria-hidden", "false");
}

function closeOverlay(id) {
  $(`#${id}`).classList.remove("show");
  $(`#${id}`).setAttribute("aria-hidden", "true");
}

function showProduct(id) {
  const p = products.find((item) => item.id === id);
  $("#productModal").innerHTML = `
    <div class="modal-content">
      <button class="close" data-close="productModal">×</button>
      <div class="product-detail">
        <div>
          <img src="${p.image}" alt="${p.title}">
          <div class="quick-strip" style="grid-template-columns:repeat(2,1fr);padding:14px 0 0">
            <span>🎬 Product video preview</span>
            <span>🔍 Hover zoom effect</span>
          </div>
        </div>
        <div>
          <p class="eyebrow">${p.brand} verified seller</p>
          <h2>${p.title}</h2>
          <p><span class="rating">${p.rating} ★</span> 18,420 ratings and 2,140 reviews</p>
          <div class="price"><b>${rupee.format(p.price)}</b><del>${rupee.format(p.original)}</del><span class="discount">${p.discount}% off</span></div>
          <p>Offers: 10% bank discount, no-cost EMI from ${rupee.format(Math.round(p.price / 12))}/month, exchange bonus up to Rs.15,000.</p>
          <div class="specs">${p.specs.map((s) => `<span>${s}</span>`).join("")}</div>
          <p><b>Delivery checker:</b> Enter pincode 560001 - available for ${p.delivery}. Same-day and express options shown at checkout.</p>
          <p><b>Frequently bought together:</b> Screen guard, protection plan, fast charger.</p>
          <div class="product-actions">
            <button class="primary-btn" data-add="${p.id}">Add to Cart</button>
            <button class="ghost-btn" data-buy="${p.id}">Buy Now</button>
          </div>
        </div>
      </div>
    </div>`;
  openDrawer("productModal");
}

function showAuth(mode) {
  const isSignup = mode === "signup";
  $("#authModal").innerHTML = `
    <div class="auth-card">
      <button class="close" data-close="authModal">×</button>
      <p class="eyebrow">${isSignup ? "Create account" : "Welcome back"}</p>
      <h2>${isSignup ? "Join ZentraMart" : "Login to ZentraMart"}</h2>
      ${isSignup ? '<input placeholder="Full name">' : ""}
      <input placeholder="Email or mobile number">
      <input placeholder="Password" type="password">
      <button class="primary-btn full">${isSignup ? "Sign up" : "Login"}</button>
      <p><button class="ghost-btn">Forgot password?</button> <button class="ghost-btn">OTP verification</button></p>
      <div class="socials"><button class="ghost-btn">Google</button><button class="ghost-btn">Apple</button></div>
    </div>`;
  openDrawer("authModal");
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  $("#toasts").appendChild(node);
  setTimeout(() => node.remove(), 2400);
}

function updateCountdown() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end - now);
  const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  $("#countdown").innerHTML = `<span>${h}<br><small>Hrs</small></span><span>${m}<br><small>Min</small></span><span>${s}<br><small>Sec</small></span>`;
  $("#heroTimer").textContent = `${h}:${m}:${s} left`;
}

function renderAdmin() {
  $("#adminRows").innerHTML = products
    .slice(0, 7)
    .map((p, index) => `<tr><td>${p.title}</td><td>${32 + index * 9}</td><td>Live</td><td><button class="ghost-btn">Edit</button></td></tr>`)
    .join("");
}

function route(page) {
  $("#home").classList.toggle("hidden", page !== "home");
  $("#accountPage").classList.toggle("hidden", page !== "account");
  $("#adminPage").classList.toggle("hidden", page !== "admin");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button,a");
    if (!target) return;
    const add = target.dataset.add;
    const view = target.dataset.view;
    const wish = target.dataset.wish;
    const buy = target.dataset.buy;
    const routeName = target.dataset.route;
    const category = target.dataset.category;
    const closeId = target.dataset.close;
    const auth = target.dataset.openAuth;

    if (add) addToCart(Number(add));
    if (view) showProduct(Number(view));
    if (wish) toggleWishlist(Number(wish));
    if (buy) {
      addToCart(Number(buy));
      closeOverlay("productModal");
      openDrawer("checkoutDrawer");
    }
    if (routeName) route(routeName);
    if (category) {
      activeQuery = category;
      $("#searchInput").value = category;
      renderProducts();
      $("#categoryMenu").classList.remove("show");
      location.hash = "products";
    }
    if (closeId) closeOverlay(closeId);
    if (auth) showAuth(auth);
    if (target.id === "cartBtn" || target.id === "mobileCart") openDrawer("cartDrawer");
    if (target.id === "wishlistBtn") route("account");
    if (target.id === "checkoutBtn") openDrawer("checkoutDrawer");
    if (target.id === "categoryBtn") $("#categoryMenu").classList.toggle("show");
    if (target.id === "themeBtn") document.body.classList.toggle("dark");
    if (target.id === "placeOrder") {
      cart = [];
      saveState();
      renderCart();
      updateCounts();
      closeOverlay("checkoutDrawer");
      toast("Order placed successfully");
    }
    if (target.id === "spinBtn") toast("You won a Rs.250 cashback coupon");
    if (target.id === "scratchBtn") toast("Scratch reward unlocked: 10% off fashion");
    if (target.id === "chatBtn") toast("AI Assistant: Try searching 'gaming setup'");
    if (target.id === "hotDeal") {
      activeQuery = "earbuds";
      $("#searchInput").value = "earbuds";
      renderProducts();
      location.hash = "products";
    }
  });

  $("#cartItems").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const inc = button.dataset.inc;
    const dec = button.dataset.dec;
    const remove = button.dataset.remove;
    if (inc) cart.find((item) => item.id === Number(inc)).qty += 1;
    if (dec) {
      const item = cart.find((row) => row.id === Number(dec));
      item.qty -= 1;
      if (item.qty <= 0) cart = cart.filter((row) => row.id !== Number(dec));
    }
    if (remove) cart = cart.filter((row) => row.id !== Number(remove));
    saveState();
    renderCart();
    updateCounts();
  });

  $("#searchInput").addEventListener("input", (event) => {
    activeQuery = event.target.value.trim();
    const terms = products
      .filter((p) => `${p.title} ${p.brand} ${p.category}`.toLowerCase().includes(activeQuery.toLowerCase()))
      .slice(0, 5);
    $("#suggestions").classList.toggle("show", Boolean(activeQuery));
    $("#suggestions").innerHTML = terms.map((p) => `<button data-view="${p.id}">${p.title} • ${rupee.format(p.price)}</button>`).join("");
    renderProducts();
  });

  $("#searchInput").addEventListener("blur", () => setTimeout(() => $("#suggestions").classList.remove("show"), 200));
  $("#priceFilter").addEventListener("input", renderProducts);
  $("#ratingFilter").addEventListener("change", renderProducts);
  $("#brandFilter").addEventListener("change", renderProducts);
  $("#clearFilters").addEventListener("click", () => {
    activeQuery = "";
    $("#searchInput").value = "";
    $("#priceFilter").value = 200000;
    $("#ratingFilter").value = 0;
    $("#brandFilter").value = "all";
    renderProducts();
  });
  $("#voiceBtn").addEventListener("click", () => toast("Voice search UI demo activated"));
}

renderCategories();
renderBrands();
renderProducts();
renderCart();
renderAdmin();
updateCounts();
bindEvents();
updateCountdown();
setInterval(updateCountdown, 1000);
