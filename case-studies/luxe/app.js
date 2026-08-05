/* =========================================================
   LUXE — Fashion Shop  |  Interactivity
   Cart · Filters · Modal · Search · Animations · Countdown
   (Demo store — no real payment)
   ========================================================= */

'use strict';

/* ---------------------- PRODUCT DATA ---------------------- */
const PRODUCTS = [
  { id: 1,  name: 'Classic Beige Trench Coat', cat: 'women',  tag: 'new',  price: 129, old: 179, img: 'images/product-trench.jpg',   rate: 4.9, reviews: 214, desc: 'A double-breasted trench in a soft beige tone. Water-resistant twill with a tailored belt for a sharp silhouette.' },
  { id: 2,  name: 'Vintage Blue Denim Jeans',  cat: 'men',    tag: 'hot',  price: 79,  old: null, img: 'images/product-jeans.jpg',    rate: 4.8, reviews: 341, desc: 'Straight-leg jeans cut from premium rigid denim. A timeless mid-blue wash that pairs with everything.' },
  { id: 3,  name: 'Minimal White Sneakers',    cat: 'trends', tag: 'hot',  price: 99,  old: 120, img: 'images/product-sneakers.jpg', rate: 5.0, reviews: 508, desc: 'Clean low-top sneakers in full-grain leather. Cushioned insole for all-day comfort and effortless style.' },
  { id: 4,  name: 'Tan Leather Handbag',       cat: 'women',  tag: 'new',  price: 149, old: null, img: 'images/product-handbag.jpg',  rate: 4.9, reviews: 176, desc: 'A structured tote in supple tan leather with gold hardware. Roomy enough for daily essentials.' },
  { id: 5,  name: 'Floral Summer Dress',       cat: 'women',  tag: 'sale', price: 69,  old: 99,  img: 'images/product-dress.jpg',    rate: 4.7, reviews: 289, desc: 'A breezy midi dress in a delicate floral print. Lightweight viscose that flows beautifully in warm weather.' },
  { id: 6,  name: 'Essential Black Tee',       cat: 'men',    tag: 'new',  price: 34,  old: null, img: 'images/product-tshirt.jpg',   rate: 4.8, reviews: 612, desc: 'The perfect black t-shirt in heavyweight organic cotton. A relaxed fit that keeps its shape wash after wash.' },
  { id: 7,  name: 'Luxury Leather Watch',      cat: 'trends', tag: 'hot',  price: 189, old: 249, img: 'images/product-watch.jpg',    rate: 5.0, reviews: 143, desc: 'A refined timepiece with a brown leather strap and minimalist dial. Understated luxury for every wrist.' },
  { id: 8,  name: 'Blush Tailored Blazer',     cat: 'trends', tag: 'sale', price: 89,  old: 149, img: 'images/deal.jpg',             rate: 4.9, reviews: 198, desc: 'A relaxed pink blazer with soft shoulders and a longline cut. The statement piece of the season.' },
  { id: 9,  name: 'Brown Leather Jacket',      cat: 'men',    tag: 'new',  price: 219, old: null, img: 'images/cat-jacket.jpg',       rate: 4.9, reviews: 167, desc: 'A rugged yet refined leather jacket in rich cognac brown. Ages beautifully and layers over everything.' },
  { id: 10, name: 'Magenta Statement Set',     cat: 'trends', tag: 'hot',  price: 139, old: null, img: 'images/cat-fancy.jpg',        rate: 4.8, reviews: 121, desc: 'Turn heads in this bold magenta co-ord. Cut for a flattering fit with a modern, confident edge.' },
  { id: 11, name: 'Orange Street Hoodie',      cat: 'men',    tag: 'new',  price: 74,  old: 95,  img: 'images/cat-street.jpg',       rate: 4.7, reviews: 254, desc: 'A cozy heavyweight hoodie in a vibrant orange. Brushed fleece interior for maximum warmth and comfort.' },
  { id: 12, name: 'Cream Tailored Suit',       cat: 'women',  tag: 'new',  price: 199, old: 259, img: 'images/hero.jpg',             rate: 5.0, reviews: 302, desc: 'An elegant cream two-piece suit with wide-leg trousers. Sharp tailoring meets soft, minimalist luxury.' },
  { id: 13, name: 'Rainbow Stripe Kids Tee',   cat: 'kids',   tag: 'new',  price: 24,  old: 32,  img: 'images/kids-tshirt.jpg',      rate: 4.9, reviews: 187, desc: 'A playful striped t-shirt in soft organic cotton. Bright, bold colors kids love — comfy for all-day play.' },
  { id: 14, name: 'Floral Girls Dress',        cat: 'kids',   tag: 'hot',  price: 39,  old: null, img: 'images/kids-dress.jpg',       rate: 5.0, reviews: 243, desc: 'A sweet blush dress with a delicate floral print and flutter sleeves. Twirl-ready for every little occasion.' },
  { id: 15, name: 'Kids Velcro Sneakers',      cat: 'kids',   tag: 'hot',  price: 34,  old: 45,  img: 'images/kids-sneakers.jpg',    rate: 4.8, reviews: 312, desc: 'Easy velcro sneakers with a cushioned sole. Lightweight, supportive and made for little adventures.' },
  { id: 16, name: 'Embroidered Denim Jacket',  cat: 'kids',   tag: 'new',  price: 49,  old: 69,  img: 'images/kids-jacket.jpg',      rate: 4.9, reviews: 156, desc: 'A charming denim jacket with hand-style floral and butterfly embroidery. The perfect layer for cooler days.' },
];

/* ---------------------- STATE ---------------------- */
let cart = [];
let activeFilter = 'all';
let searchTerm = '';
let visibleCount = 8;
let currentModalId = null;

/* ---------------------- HELPERS ---------------------- */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const money = (n) => '$' + n;
const CAT_LABELS = { men: 'Men', women: 'Women', kids: 'Kids', trends: 'Trends' };

/* =========================================================
   RENDER PRODUCTS
   ========================================================= */
function getFiltered() {
  return PRODUCTS.filter(p => {
    const matchCat = activeFilter === 'all' || p.cat === activeFilter;
    const matchSearch = !searchTerm || p.name.toLowerCase().includes(searchTerm) || p.cat.includes(searchTerm);
    return matchCat && matchSearch;
  });
}

function renderProducts() {
  const grid = $('#productGrid');
  const list = getFiltered();
  const shown = list.slice(0, visibleCount);

  if (shown.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--muted)">
      <i class="fa-solid fa-magnifying-glass" style="font-size:2.4rem;color:var(--line);display:block;margin-bottom:14px"></i>
      No products match your search. Try another keyword.</div>`;
  } else {
    grid.innerHTML = shown.map(p => `
      <article class="card" data-id="${p.id}">
        <div class="card-media">
          <span class="card-tag ${p.tag}">${p.tag === 'new' ? 'New' : p.tag === 'hot' ? 'Best Seller' : 'Sale'}</span>
          <button class="wish" data-wish="${p.id}" aria-label="Wishlist"><i class="fa-regular fa-heart"></i></button>
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          <button class="quick-add" data-add="${p.id}"><i class="fa-solid fa-bag-shopping"></i> Quick Add</button>
        </div>
        <div class="card-body">
          <span class="card-cat">${CAT_LABELS[p.cat]}</span>
          <h3 class="card-name" data-open="${p.id}">${p.name}</h3>
          <div class="card-rate"><i class="fa-solid fa-star"></i> ${p.rate.toFixed(1)} <span>(${p.reviews})</span></div>
          <div class="card-foot">
            <div class="price">${money(p.price)}${p.old ? `<s>${money(p.old)}</s>` : ''}</div>
            <button class="add-mini" data-add="${p.id}" aria-label="Add to bag"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Toggle "View All" button
  const btn = $('#loadMore');
  if (btn) btn.style.display = (visibleCount >= list.length) ? 'none' : 'inline-flex';

  // trigger reveal on freshly injected cards
  $$('.card', grid).forEach((c, i) => {
    c.classList.add('reveal');
    setTimeout(() => c.classList.add('in'), 40 * i);
  });
}

/* =========================================================
   CART
   ========================================================= */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const line = cart.find(x => x.id === id);
  if (line) line.qty++;
  else cart.push({ id, qty: 1 });
  updateCart();
  bumpCartIcon();
  toast(`${p.name} added to bag`, 'fa-circle-check');
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCart();
}

function changeQty(id, delta) {
  const line = cart.find(x => x.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) removeFromCart(id);
  else updateCart();
}

function cartCount() { return cart.reduce((s, x) => s + x.qty, 0); }
function cartTotal() { return cart.reduce((s, x) => s + x.qty * PRODUCTS.find(p => p.id === x.id).price, 0); }

function updateCart() {
  const count = cartCount();
  const badge = $('#cartCount');
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);

  const body = $('#drawerBody');
  const foot = $('#drawerFoot');

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty">
      <i class="fa-solid fa-bag-shopping"></i>
      <p>Your bag is empty.</p>
      <p style="font-size:.85rem;margin-top:6px">Add something you love ✨</p>
    </div>`;
    foot.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(line => {
    const p = PRODUCTS.find(x => x.id === line.id);
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.name}" />
      <div class="ci-body">
        <div class="ci-name">${p.name}</div>
        <div class="ci-cat">${CAT_LABELS[p.cat]}</div>
        <div class="qty">
          <button data-dec="${p.id}"><i class="fa-solid fa-minus"></i></button>
          <span>${line.qty}</span>
          <button data-inc="${p.id}"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="ci-price">${money(p.price * line.qty)}</div>
      </div>
      <button class="ci-remove" data-remove="${p.id}" aria-label="Remove"><i class="fa-solid fa-trash-can"></i></button>
    </div>`;
  }).join('');

  foot.style.display = 'block';
  const total = cartTotal();
  $('#subTotal').textContent = money(total);
  $('#grandTotal').textContent = money(total);
}

function bumpCartIcon() {
  const icon = $('#cartToggle');
  icon.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.25)' }, { transform: 'scale(1)' }],
    { duration: 360, easing: 'cubic-bezier(.22,.61,.36,1)' }
  );
}

/* =========================================================
   DRAWER
   ========================================================= */
function openDrawer() { $('#drawer').classList.add('open'); $('#overlay').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeDrawer() { $('#drawer').classList.remove('open'); $('#overlay').classList.remove('open'); document.body.style.overflow = ''; }

/* =========================================================
   MODAL
   ========================================================= */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentModalId = id;
  $('#mImg').src = p.img;
  $('#mImg').alt = p.name;
  $('#mCat').textContent = CAT_LABELS[p.cat];
  $('#mName').textContent = p.name;
  $('#mRate').innerHTML = `<i class="fa-solid fa-star"></i> ${p.rate.toFixed(1)} <span>· ${p.reviews} reviews</span>`;
  $('#mPrice').innerHTML = `${money(p.price)}${p.old ? `<s>${money(p.old)}</s>` : ''}`;
  $('#mDesc').textContent = p.desc;
  $('#modalWrap').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { $('#modalWrap').classList.remove('open'); document.body.style.overflow = ''; currentModalId = null; }

/* =========================================================
   TOAST
   ========================================================= */
function toast(msg, icon = 'fa-circle-check') {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<i class="fa-solid ${icon}"></i> ${msg}`;
  $('#toastWrap').appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 400);
  }, 2600);
}

/* =========================================================
   FILTERS & NAV
   ========================================================= */
function setFilter(f, sourceEl) {
  activeFilter = f;
  visibleCount = 8;
  // sync filter bar
  $$('#filterBar button').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  // sync nav
  $$('#navLinks button').forEach(b => b.classList.toggle('active', b.dataset.nav === f || (f === 'all' && b.dataset.nav === 'all')));
  renderProducts();
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function startCountdown() {
  let end = new Date();
  end.setHours(end.getHours() + 8, end.getMinutes() + 45, end.getSeconds() + 30);
  const tick = () => {
    let diff = Math.max(0, end - new Date());
    if (diff === 0) { end = new Date(); end.setHours(end.getHours() + 8, 45, 30); }
    const h = Math.floor(diff / 3.6e6);
    const m = Math.floor((diff % 3.6e6) / 6e4);
    const s = Math.floor((diff % 6e4) / 1000);
    $('#cdH').textContent = String(h).padStart(2, '0');
    $('#cdM').textContent = String(m).padStart(2, '0');
    $('#cdS').textContent = String(s).padStart(2, '0');
  };
  tick();
  setInterval(tick, 1000);
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));
}

/* =========================================================
   EVENT WIRING
   ========================================================= */
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-add],[data-open],[data-remove],[data-inc],[data-dec],[data-wish],[data-filter],[data-nav]');
  if (!t) return;

  if (t.dataset.add)    { addToCart(+t.dataset.add); }
  if (t.dataset.open)   { openModal(+t.dataset.open); }
  if (t.dataset.remove) { removeFromCart(+t.dataset.remove); }
  if (t.dataset.inc)    { changeQty(+t.dataset.inc, 1); }
  if (t.dataset.dec)    { changeQty(+t.dataset.dec, -1); }
  if (t.dataset.wish)   {
    const ic = t.querySelector('i');
    t.classList.toggle('active');
    const on = t.classList.contains('active');
    ic.className = on ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    toast(on ? 'Added to wishlist' : 'Removed from wishlist', on ? 'fa-heart' : 'fa-heart-crack');
  }
  if (t.dataset.filter) { setFilter(t.dataset.filter, t); document.getElementById('products').scrollIntoView({behavior:'smooth', block:'start'}); }
  if (t.dataset.nav)    {
    if (t.dataset.nav === 'all') { setFilter('all'); scrollTo({top:0,behavior:'smooth'}); }
    else { setFilter(t.dataset.nav); document.getElementById('products').scrollIntoView({behavior:'smooth', block:'start'}); }
    $('#navLinks').classList.remove('open');
  }
});

/* Static controls */
window.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCart();
  initReveal();
  startCountdown();

  // Cart toggles
  $('#cartToggle').addEventListener('click', openDrawer);
  $('#drawerClose').addEventListener('click', closeDrawer);
  $('#overlay').addEventListener('click', closeDrawer);

  // Modal
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalBackdrop').addEventListener('click', closeModal);
  $('#mAdd').addEventListener('click', () => { if (currentModalId) { addToCart(currentModalId); closeModal(); openDrawer(); } });
  $('#mWish').addEventListener('click', (e) => {
    const on = e.currentTarget.querySelector('i').classList.toggle('fa-solid');
    e.currentTarget.querySelector('i').classList.toggle('fa-regular', !on);
    toast(on ? 'Added to wishlist' : 'Removed from wishlist', 'fa-heart');
  });
  $$('#mSizes button').forEach(b => b.addEventListener('click', () => {
    $$('#mSizes button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  }));

  // Load more
  $('#loadMore').addEventListener('click', () => { visibleCount += 4; renderProducts(); });

  // Search
  const sToggle = $('#searchToggle'), sWrap = $('#searchWrap'), sInput = $('#searchInput');
  sToggle.addEventListener('click', () => { sWrap.classList.toggle('open'); if (sWrap.classList.contains('open')) setTimeout(() => sInput.focus(), 200); });
  $('#searchClose').addEventListener('click', () => { sWrap.classList.remove('open'); sInput.value=''; searchTerm=''; visibleCount=8; renderProducts(); });
  sInput.addEventListener('input', (e) => { searchTerm = e.target.value.trim().toLowerCase(); visibleCount = 8; renderProducts(); });

  // Burger (mobile nav)
  $('#burger').addEventListener('click', () => $('#navLinks').classList.toggle('open'));

  // Deal button
  $('#dealBtn').addEventListener('click', () => { addToCart(8); openDrawer(); });

  // Newsletter
  $('#newsForm').addEventListener('submit', (e) => { e.preventDefault(); e.target.reset(); toast('You\'re subscribed! Check your inbox 💌', 'fa-envelope-circle-check'); });

  // Checkout (demo)
  $('#checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return;
    toast('This is a demo store — no real payment 🛍️', 'fa-circle-info');
  });

  // Header shadow on scroll
  const header = $('#header');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10));

  // ESC closes overlays
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeDrawer(); } });
});
