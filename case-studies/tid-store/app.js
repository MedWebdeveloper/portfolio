/* =========================================================
   TID Store — Shoe Shop · vanilla JS
   Built by Médard Kiteretse
   ========================================================= */

/* ---------- product data ---------- */
const PRODUCTS = [
  { name:"Volt Runner X",     cat:"hot",      label:"Running",  price:129, old:159, rating:5, tag:"Hot",      img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
  { name:"Neon Sprint 2.0",   cat:"trending", label:"Running",  price:139, old:null, rating:5, tag:"Trending", img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80" },
  { name:"Aqua Glide",        cat:"arrivals", label:"Running",  price:119, old:null, rating:4, tag:"New",      img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80" },
  { name:"Air Momentum Pro",  cat:"hot",      label:"Running",  price:149, old:189, rating:5, tag:"Hot",      img:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80" },
  { name:"Trail Blaze Red",   cat:"trending", label:"Trail",    price:134, old:null, rating:4, tag:"Trending", img:"https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=600&q=80" },
  { name:"Summit Trek GTX",   cat:"arrivals", label:"Hiking",   price:179, old:null, rating:5, tag:"New",      img:"https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80" },
  { name:"Ridge Walker",      cat:"onsale",   label:"Hiking",   price:99,  old:149, rating:4, tag:"-33%",     img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" },
  { name:"Classic Court",     cat:"onsale",   label:"Lifestyle",price:79,  old:119, rating:4, tag:"-34%",     img:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=600&q=80" },
];

const starRow = n => "★★★★★".slice(0,n) + "☆☆☆☆☆".slice(0,5-n);
const tagClass = c => ({hot:"hot",onsale:"onsale",trending:"trending",arrivals:"arrivals"}[c] || "arrivals");

const grid = document.getElementById("products");

function renderProducts(filter="all"){
  const list = filter==="all" ? PRODUCTS : PRODUCTS.filter(p=>p.cat===filter);
  grid.innerHTML = list.map(p=>`
    <article class="card reveal in">
      <div class="thumb">
        <span class="tag ${tagClass(p.cat)}">${p.tag}</span>
        <button class="fav" aria-label="wishlist"><i class="fa-regular fa-heart"></i></button>
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="body">
        <span class="cat-label">${p.label}</span>
        <h3>${p.name}</h3>
        <div class="stars">${starRow(p.rating)}</div>
        <div class="price">
          <span class="now">$${p.price}</span>
          ${p.old?`<span class="old">$${p.old}</span>`:""}
        </div>
        <div class="actions">
          <button class="btn btn-buy add-cart" data-name="${p.name}" data-price="${p.price}"><i class="fa-solid fa-bag-shopping"></i> Buy Now</button>
          <a href="#shop" class="btn btn-coll">Collection</a>
        </div>
      </div>
    </article>
  `).join("");
  bindCards();
}

/* ---------- category filter ---------- */
document.getElementById("cats").addEventListener("click", e=>{
  const btn = e.target.closest(".cat-btn");
  if(!btn) return;
  document.querySelectorAll(".cat-btn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts(btn.dataset.cat);
});

/* ---------- cart demo ---------- */
let cart = 0;
const cartCount = document.getElementById("cartCount");

function bindCards(){
  document.querySelectorAll(".add-cart").forEach(b=>{
    if(b.dataset.bound) return;
    b.dataset.bound = "1";
    b.addEventListener("click",()=>{
      cart++;
      cartCount.textContent = cart;
      cartCount.animate([{transform:"scale(1.6)"},{transform:"scale(1)"}],{duration:300});
      showToast(`${b.dataset.name} added to bag`);
    });
  });
  document.querySelectorAll(".fav").forEach(f=>{
    if(f.dataset.bound) return;
    f.dataset.bound = "1";
    f.addEventListener("click",()=>{
      f.classList.toggle("on");
      const i = f.querySelector("i");
      i.className = f.classList.contains("on") ? "fa-solid fa-heart" : "fa-regular fa-heart";
    });
  });
}

document.getElementById("cartBtn").addEventListener("click",()=>{
  showToast(cart? `You have ${cart} item${cart>1?"s":""} in your bag` : "Your bag is empty — go find a pair!");
});

/* ---------- toast ---------- */
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
let toastTimer;
function showToast(msg){
  toastMsg.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"), 2400);
}

/* ---------- newsletter ---------- */
document.getElementById("nlForm").addEventListener("submit",e=>{
  e.preventDefault();
  showToast("You're in! 15% off is on its way ✨");
  e.target.reset();
});

/* ---------- sticky header ---------- */
const header = document.getElementById("header");
window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled", window.scrollY>10);
});

/* ---------- mobile drawer ---------- */
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("backdrop");
const openDrawer = ()=>{drawer.classList.add("open");backdrop.classList.add("show")};
const closeDrawer = ()=>{drawer.classList.remove("open");backdrop.classList.remove("show")};
document.getElementById("burger").addEventListener("click",openDrawer);
document.getElementById("drawerClose").addEventListener("click",closeDrawer);
backdrop.addEventListener("click",closeDrawer);
drawer.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeDrawer));

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
},{threshold:.14});
function observeReveals(){ document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el)); }

/* ---------- init ---------- */
renderProducts("all");
observeReveals();
