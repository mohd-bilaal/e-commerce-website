const categories = [
  ["Mobiles", "MB"],
  ["Laptops", "LP"],
  ["Tablets", "TB"],
  ["Cameras", "CM"],
  ["Fashion", "FS"],
  ["Shoes", "SH"],
  ["Watches", "WT"],
  ["Audio", "AU"],
  ["Home", "HM"],
  ["Gaming", "GM"],
  ["Drones", "DR"],
  ["Smart Home", "SH"],
  ["Fitness", "FT"],
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
    specs: ["A18 Pro chip", "256GB storage", "48MP camera", "Titanium body"],
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
    specs: ["12GB RAM", "512GB storage", "AI camera", "S Pen"],
  },
  {
    id: 3,
    title: "Alienware Nova X Gaming Laptop",
    brand: "Alienware",
    category: "Laptops",
    price: 189990,
    original: 229990,
    rating: 4.6,
    discount: 17,
    delivery: "2 days",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
    specs: ["RTX graphics", "32GB RAM", "1TB SSD", "240Hz display"],
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
    specs: ["Noise cancellation", "30hr battery", "Hi-Res audio", "Bluetooth"],
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
    specs: ["GPS + Cellular", "Titanium", "Fitness tracking", "OLED display"],
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
    specs: ["Running fit", "Foam sole", "Size 6-11", "Blue"],
  },
  {
    id: 7,
    title: "Urban Hoodie Oversized",
    brand: "NovaCart",
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
    specs: ["ANC", "50hr case", "Low latency", "Fast charge"],
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
    specs: ["24g protein", "Chocolate", "Certified", "1kg"],
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
    specs: ["RGB", "Mechanical", "USB-C", "Tournament size"],
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
    specs: ["Dimmable", "Warm and cool", "USB powered", "Study mode"],
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
    specs: ["32GB", "Waterproof", "Warm light", "Wireless charging"],
  },
  {
    id: 13,
    title: "iPad Pro M4 11-inch 256GB",
    brand: "Apple",
    category: "Tablets",
    price: 99900,
    original: 119900,
    rating: 4.8,
    discount: 17,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
    specs: ["M4 chip", "Ultra Retina XDR", "256GB", "Apple Pencil ready"],
  },
  {
    id: 14,
    title: "Sony Alpha ZV-E10 Creator Camera",
    brand: "Sony",
    category: "Cameras",
    price: 61990,
    original: 74990,
    rating: 4.6,
    discount: 17,
    delivery: "2 days",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    specs: ["24.2MP", "4K video", "Flip screen", "Creator kit"],
  },
  {
    id: 15,
    title: "DJI Mini 4 Pro Fly More Drone",
    brand: "DJI",
    category: "Drones",
    price: 115999,
    original: 139999,
    rating: 4.7,
    discount: 17,
    delivery: "3 days",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=80",
    specs: ["4K HDR", "Omni sensing", "34 min flight", "Creator bundle"],
  },
  {
    id: 16,
    title: "PlayStation 5 Slim Digital Edition",
    brand: "Sony",
    category: "Gaming",
    price: 44990,
    original: 54990,
    rating: 4.8,
    discount: 18,
    delivery: "Today",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
    specs: ["1TB SSD", "4K gaming", "DualSense", "Digital edition"],
  },
  {
    id: 17,
    title: "Meta Quest 3 Mixed Reality Headset",
    brand: "Meta",
    category: "Gaming",
    price: 52990,
    original: 64990,
    rating: 4.5,
    discount: 18,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=900&q=80",
    specs: ["Mixed reality", "128GB", "Wireless VR", "4K+ display"],
  },
  {
    id: 18,
    title: "Samsung Odyssey G7 32-inch Monitor",
    brand: "Samsung",
    category: "Gaming",
    price: 38990,
    original: 52990,
    rating: 4.5,
    discount: 26,
    delivery: "2 days",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
    specs: ["32 inch", "240Hz", "QHD", "Curved display"],
  },
  {
    id: 19,
    title: "Google Nest Hub Max Smart Display",
    brand: "Google",
    category: "Smart Home",
    price: 18999,
    original: 24999,
    rating: 4.4,
    discount: 24,
    delivery: "Today",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=900&q=80",
    specs: ["10 inch display", "Assistant", "Smart home control", "Video calls"],
  },
  {
    id: 20,
    title: "Anker Prime 20000mAh Power Bank",
    brand: "Anker",
    category: "Gadgets",
    price: 7999,
    original: 11999,
    rating: 4.6,
    discount: 33,
    delivery: "Today",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80",
    specs: ["20000mAh", "100W USB-C", "Fast charge", "Travel ready"],
  },
];

let cart = JSON.parse(localStorage.getItem("novaCart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("novaWishlist") || "[]");
let orderPlaced = localStorage.getItem("novaOrderPlaced") === "true";
let activeQuery = "";
let appliedCoupon = "";
let selectedPayment = "";
let selectedDelivery = "Standard";

const $ = (selector) => document.querySelector(selector);

function money(value) {
  return `Rs.${Number(value).toLocaleString("en-IN")}`;
}

function saveState() {
  localStorage.setItem("novaCart", JSON.stringify(cart));
  localStorage.setItem("novaWishlist", JSON.stringify(wishlist));
  localStorage.setItem("novaOrderPlaced", String(orderPlaced));
}

function renderCategories() {
  $("#categoryGrid").innerHTML = categories
    .map(([name, code]) => `<button class="category-card" data-category="${name}"><span>${code}</span><b>${name}</b></button>`)
    .join("");
  $("#categoryMenu").innerHTML = categories
    .map(([name, code]) => `<button data-category="${name}">${code} ${name}</button>`)
    .join("");
}

function renderBrands() {
  const brands = [...new Set(products.map((product) => product.brand))];
  $("#brandFilter").innerHTML =
    '<option value="all">All brands</option>' + brands.map((brand) => `<option value="${brand}">${brand}</option>`).join("");
  $("#brandRow").innerHTML = brands.map((brand) => `<span>${brand}</span>`).join("");
}

function getFilteredProducts() {
  const maxPrice = Number($("#priceFilter").value);
  const minRating = Number($("#ratingFilter").value);
  const brand = $("#brandFilter").value;
  const query = activeQuery.toLowerCase();

  return products.filter((product) => {
    const text = `${product.title} ${product.brand} ${product.category}`.toLowerCase();
    return text.includes(query) && product.price <= maxPrice && product.rating >= minRating && (brand === "all" || product.brand === brand);
  });
}

function productCard(product) {
  const wished = wishlist.includes(product.id);
  return `
    <article class="product-card">
      <img loading="lazy" src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <span class="rating">${product.rating} star</span>
        <h3>${product.title}</h3>
        <small>${product.delivery} - Free delivery</small>
        <div class="price">
          <b>${money(product.price)}</b>
          <del>${money(product.original)}</del>
          <span class="discount">${product.discount}% off</span>
        </div>
        <div class="product-actions">
          <button class="ghost-btn" data-view="${product.id}">View</button>
          <button class="primary-btn" data-add="${product.id}">Add</button>
        </div>
        <button class="ghost-btn" data-wish="${product.id}">${wished ? "Saved in wishlist" : "Add to wishlist"}</button>
      </div>
    </article>`;
}

function renderProducts() {
  $("#priceValue").textContent = money($("#priceFilter").value);
  const filtered = getFilteredProducts();
  $("#resultText").textContent = `${filtered.length} products found`;
  $("#productsGrid").innerHTML =
    filtered.map(productCard).join("") || '<div class="panel"><h2>No products found</h2><p>Reset filters or try another search.</p></div>';
}

function updateCounts() {
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  $("#cartCount").textContent = itemCount;
  $("#wishCount").textContent = wishlist.length;
  $("#wishSummary").textContent = wishlist.length ? `${wishlist.length} products saved` : "No saved products yet";
  $("#orderSummary").textContent = orderPlaced ? "Latest order placed successfully" : "No order placed yet";
}

function addToCart(id) {
  const item = cart.find((row) => row.id === id);
  if (item) item.qty += 1;
  else cart.push({ id, qty: 1 });
  saveState();
  renderCart();
  updateCounts();
  toast("Added to cart");
}

function toggleWishlist(id) {
  wishlist = wishlist.includes(id) ? wishlist.filter((item) => item !== id) : [...wishlist, id];
  saveState();
  renderProducts();
  updateCounts();
  toast(wishlist.includes(id) ? "Saved to wishlist" : "Removed from wishlist");
}

function cartTotals() {
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((row) => row.id === item.id);
    return sum + product.price * item.qty;
  }, 0);
  const discount = appliedCoupon ? Math.min(250, subtotal) : 0;
  const shipping = subtotal > 0 && subtotal < 999 ? 49 : 0;
  const tax = Math.round((subtotal - discount) * 0.03);
  return { subtotal, discount, shipping, tax, total: subtotal - discount + shipping + tax };
}

function renderCart() {
  $("#cartItems").innerHTML =
    cart
      .map((item) => {
        const product = products.find((row) => row.id === item.id);
        return `
          <div class="cart-line">
            <img src="${product.image}" alt="${product.title}">
            <div>
              <b>${product.title}</b>
              <small>${money(product.price)} - ${product.delivery}</small>
              <div class="qty">
                <button data-dec="${product.id}">-</button>
                <span>${item.qty}</span>
                <button data-inc="${product.id}">+</button>
                <button data-remove="${product.id}">Remove</button>
              </div>
            </div>
            <b>${money(product.price * item.qty)}</b>
          </div>`;
      })
      .join("") || "<p>Your cart is empty. Add a product to continue.</p>";

  const totals = cartTotals();
  $("#priceBox").innerHTML = `
    <div><span>Subtotal</span><b>${money(totals.subtotal)}</b></div>
    <div><span>Coupon</span><b>${totals.discount ? `-${money(totals.discount)}` : "Not applied"}</b></div>
    <div><span>Shipping</span><b>${totals.shipping ? money(totals.shipping) : "Free"}</b></div>
    <div><span>Taxes</span><b>${money(totals.tax)}</b></div>
    <div><span>Total</span><b>${money(totals.total)}</b></div>`;
}

function openOverlay(id) {
  $(`#${id}`).classList.add("show");
  $(`#${id}`).setAttribute("aria-hidden", "false");
}

function closeOverlay(id) {
  $(`#${id}`).classList.remove("show");
  $(`#${id}`).setAttribute("aria-hidden", "true");
}

function showProduct(id) {
  const product = products.find((row) => row.id === id);
  $("#productModal").innerHTML = `
    <div class="modal-content">
      <button class="close" data-close="productModal">x</button>
      <div class="product-detail">
        <div>
          <img src="${product.image}" alt="${product.title}">
          <div class="quick-strip" style="grid-template-columns:repeat(2,1fr);padding:14px 0 0">
            <span>Zoom preview</span>
            <span>Seller verified</span>
          </div>
        </div>
        <div>
          <p class="eyebrow">${product.brand} official seller</p>
          <h2>${product.title}</h2>
          <p><span class="rating">${product.rating} star</span> 18,420 ratings and 2,140 reviews</p>
          <div class="price"><b>${money(product.price)}</b><del>${money(product.original)}</del><span class="discount">${product.discount}% off</span></div>
          <p>Offers: 10% bank discount, no-cost EMI, exchange bonus, and coupon NOVA250.</p>
          <div class="specs">${product.specs.map((spec) => `<span>${spec}</span>`).join("")}</div>
          <p><b>Delivery:</b> Available for Bengaluru 560001. Choose same-day, next-day, or express at checkout.</p>
          <p><b>Frequently bought together:</b> Protection plan, fast charger, and care kit.</p>
          <div class="product-actions">
            <button class="primary-btn" data-add="${product.id}">Add to Cart</button>
            <button class="ghost-btn" data-buy="${product.id}">Buy Now</button>
          </div>
        </div>
      </div>
    </div>`;
  openOverlay("productModal");
}

function showAuth(mode) {
  const signup = mode === "signup";
  $("#authModal").innerHTML = `
    <div class="auth-card">
      <button class="close" data-close="authModal">x</button>
      <p class="eyebrow">${signup ? "Create account" : "Welcome back"}</p>
      <h2>${signup ? "Join NovaCart" : "Login to NovaCart"}</h2>
      ${signup ? '<input placeholder="Full name">' : ""}
      <input placeholder="Email or mobile number">
      <input placeholder="Password" type="password">
      <button class="primary-btn full" data-login-submit>${signup ? "Create account" : "Login"}</button>
      <p><button class="ghost-btn" data-demo-action="OTP sent">OTP demo</button> <button class="ghost-btn" data-demo-action="Password reset link generated">Forgot password</button></p>
      <div class="socials"><button class="ghost-btn" data-demo-action="Google login demo">Google</button><button class="ghost-btn" data-demo-action="Apple login demo">Apple</button></div>
    </div>`;
  openOverlay("authModal");
}

function route(page) {
  $("#home").classList.toggle("hidden", page !== "home");
  $("#accountPage").classList.toggle("hidden", page !== "account");
  $("#adminPage").classList.toggle("hidden", page !== "admin");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAdmin() {
  $("#adminRows").innerHTML = products
    .slice(0, 8)
    .map((product, index) => `<tr><td>${product.title}</td><td>${35 + index * 8}</td><td>Live</td><td><button class="ghost-btn" data-demo-action="Edited ${product.title}">Edit</button></td></tr>`)
    .join("");
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  $("#toasts").appendChild(node);
  setTimeout(() => node.remove(), 2400);
}

function updateCountdown() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end - new Date());
  const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  $("#countdown").innerHTML = `<span>${h}<br><small>Hrs</small></span><span>${m}<br><small>Min</small></span><span>${s}<br><small>Sec</small></span>`;
  $("#heroTimer").textContent = `${h}:${m}:${s} left`;
}

function openChat() {
  $("#chatPanel").classList.add("show");
  $("#chatPanel").setAttribute("aria-hidden", "false");
  $("#chatInput").focus();
}

function closeChat() {
  $("#chatPanel").classList.remove("show");
  $("#chatPanel").setAttribute("aria-hidden", "true");
}

function addChatMessage(text, from = "bot") {
  const row = document.createElement("div");
  row.className = `chat-message ${from}`;
  row.textContent = text;
  $("#chatBody").appendChild(row);
  $("#chatBody").scrollTop = $("#chatBody").scrollHeight;
  return row;
}

async function onlineChatbotReply(message) {
  const cartContext = cart.map((item) => {
    const product = products.find((row) => row.id === item.id);
    return {
      title: product.title,
      price: product.price,
      quantity: item.qty,
    };
  });

  const response = await fetch("/api/chat/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      cart: cartContext,
      wishlist,
    }),
  });

  const raw = await response.text();
  let data = {};
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch (error) {
    throw new Error("Chat server did not return JSON. Open the Django localhost link, not the file link.");
  }

  if (!response.ok) {
    throw new Error(data.reply || data.error || "Online chatbot is unavailable.");
  }
  return data.reply || "I could not generate a reply right now.";
}

function localChatFallback(message) {
  const text = message.toLowerCase();
  const product = products.find((item) => {
    const searchText = `${item.title} ${item.brand} ${item.category}`.toLowerCase();
    return searchText
      .split(/\s+/)
      .some((word) => word.length > 3 && text.includes(word));
  });

  if (text.includes("iphone 15")) {
    return "I do not have iPhone 15 in this demo catalog. The closest listed product is iPhone 16 Pro Max 256GB at Rs.1,39,900.";
  }
  if (product && (text.includes("price") || text.includes("cost") || text.includes("rate"))) {
    return `${product.title} costs ${money(product.price)} in this demo. Original price is ${money(product.original)}.`;
  }
  if (product) {
    return `${product.title} is available for ${money(product.price)} with ${product.discount}% off.`;
  }
  return "Online chat is not reachable right now. Run the Django server and set OPENAI_API_KEY for live answers.";
}

async function sendChat(message) {
  const clean = message.trim();
  if (!clean) return;
  addChatMessage(clean, "user");
  $("#chatInput").value = "";
  const pending = addChatMessage("Thinking online...", "bot");
  try {
    pending.textContent = await onlineChatbotReply(clean);
  } catch (error) {
    pending.textContent = `${localChatFallback(clean)} (${error.message})`;
  }
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button,a");
    if (!target) return;

    if (target.matches('a[href^="#"]')) {
      route("home");
    }

    if (target.dataset.add) addToCart(Number(target.dataset.add));
    if (target.dataset.view) showProduct(Number(target.dataset.view));
    if (target.dataset.wish) toggleWishlist(Number(target.dataset.wish));
    if (target.dataset.buy) {
      addToCart(Number(target.dataset.buy));
      closeOverlay("productModal");
      openOverlay("checkoutDrawer");
    }
    if (target.dataset.route) route(target.dataset.route);
    if (target.dataset.close) closeOverlay(target.dataset.close);
    if (target.dataset.openAuth) showAuth(target.dataset.openAuth);
    if (target.dataset.demoAction) toast(target.dataset.demoAction);
    if (target.dataset.category) {
      route("home");
      activeQuery = target.dataset.category;
      $("#searchInput").value = target.dataset.category;
      $("#categoryMenu").classList.remove("show");
      renderProducts();
      location.hash = "products";
    }
    if (target.dataset.delivery) {
      selectedDelivery = target.dataset.delivery;
      $("#deliveryChoice").textContent = `${selectedDelivery} delivery selected`;
      toast(`${selectedDelivery} delivery selected`);
    }
    if (target.dataset.payment) {
      selectedPayment = target.dataset.payment;
      $("#paymentChoice").textContent = `${selectedPayment} selected`;
      document.querySelectorAll("[data-payment]").forEach((button) => button.classList.toggle("is-selected", button === target));
    }
    if (target.dataset.chatSuggest) sendChat(target.dataset.chatSuggest);

    if (target.id === "categoryBtn") $("#categoryMenu").classList.toggle("show");
    if (target.id === "showAllBtn") {
      route("home");
      activeQuery = "";
      $("#searchInput").value = "";
      renderProducts();
      location.hash = "products";
    }
    if (target.id === "cartBtn" || target.id === "mobileCart") openOverlay("cartDrawer");
    if (target.id === "wishlistBtn") route("account");
    if (target.id === "checkoutBtn") {
      if (!cart.length) toast("Add a product before checkout");
      else openOverlay("checkoutDrawer");
    }
    if (target.id === "themeBtn") document.body.classList.toggle("dark");
    if (target.id === "applyCoupon") {
      const code = $("#couponInput").value.trim().toUpperCase();
      if (code === "NOVA250") {
        appliedCoupon = code;
        toast("Coupon applied");
        renderCart();
      } else {
        toast("Try coupon NOVA250");
      }
    }
    if (target.id === "placeOrder") {
      if (!cart.length) return toast("Cart is empty");
      if (!selectedPayment) return toast("Select a payment method");
      cart = [];
      orderPlaced = true;
      appliedCoupon = "";
      saveState();
      renderCart();
      updateCounts();
      closeOverlay("checkoutDrawer");
      toast("Order placed successfully");
    }
    if (target.id === "gpsBtn") toast("GPS demo: Bengaluru 560001 detected");
    if (target.id === "spinBtn" || target.id === "scratchBtn") toast("Coupon unlocked: NOVA250");
    if (target.id === "voiceBtn") toast("Voice search demo: type your search to continue");
    if (target.id === "chatBtn" || target.id === "openChatHero") openChat();
    if (target.id === "closeChat") closeChat();
    if (target.id === "hotDeal") {
      route("home");
      activeQuery = "earbuds";
      $("#searchInput").value = "earbuds";
      renderProducts();
      location.hash = "products";
      toast("Showing earbud deals");
    }
  });

  $("#cartItems").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.inc) cart.find((item) => item.id === Number(button.dataset.inc)).qty += 1;
    if (button.dataset.dec) {
      const item = cart.find((row) => row.id === Number(button.dataset.dec));
      item.qty -= 1;
      if (item.qty <= 0) cart = cart.filter((row) => row.id !== Number(button.dataset.dec));
    }
    if (button.dataset.remove) cart = cart.filter((row) => row.id !== Number(button.dataset.remove));
    saveState();
    renderCart();
    updateCounts();
  });

  $("#searchInput").addEventListener("input", (event) => {
    activeQuery = event.target.value.trim();
    const terms = products
      .filter((product) => `${product.title} ${product.brand} ${product.category}`.toLowerCase().includes(activeQuery.toLowerCase()))
      .slice(0, 5);
    $("#suggestions").classList.toggle("show", Boolean(activeQuery));
    $("#suggestions").innerHTML = terms.map((product) => `<button data-view="${product.id}">${product.title} - ${money(product.price)}</button>`).join("");
    renderProducts();
  });

  $("#searchInput").addEventListener("blur", () => setTimeout(() => $("#suggestions").classList.remove("show"), 200));
  $("#priceFilter").addEventListener("input", renderProducts);
  $("#ratingFilter").addEventListener("change", renderProducts);
  $("#brandFilter").addEventListener("change", renderProducts);
  $("#clearFilters").addEventListener("click", () => {
    activeQuery = "";
    $("#searchInput").value = "";
    $("#priceFilter").value = 250000;
    $("#ratingFilter").value = 0;
    $("#brandFilter").value = "all";
    renderProducts();
  });
  $("#chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    sendChat($("#chatInput").value);
  });
}

renderCategories();
renderBrands();
renderProducts();
renderCart();
renderAdmin();
updateCounts();
bindEvents();
updateCountdown();
addChatMessage("Hi, I am NovaBot. Ask me about products, coupons, cart, delivery, payment, returns, or orders.");
setInterval(updateCountdown, 1000);

