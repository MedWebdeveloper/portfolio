/* ============================================================
   Portfolio — Médard Kiteretse | interactive logic (EN)
   ============================================================ */

/* ---------- PROJECT DATA ----------
   👉 To add / replace a project:
      - put your images in images/projects/
      - create a "cover" image (card preview) in images/thumbs/
      - duplicate / edit a block below
      - categories: "web" (websites) or "uiux" (apps & UI/UX)
      - "gallery" = list of screenshots shown in the case study
*/
const PROJECTS = [
  {
    title:"ShopEase — E-commerce App Concept",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-ecommerce.jpg",
    short:"A clean, modern e-commerce app UI — product grid, smart filters, cart & one-tap checkout.",
    type:"UI/UX concept (mobile e-commerce)",
    tools:"Figma, Adobe Illustrator",
    year:"2025",
    challenge:"ShopEase is a mobile shopping app UI concept designed to make online buying effortless. The design focuses on a bright, friendly interface with a scannable product grid, category filters (clothing, shoes, accessories), a featured banner, wishlists, a live shopping cart and a frictionless one-tap checkout. Built around a vibrant purple-and-coral palette, soft shadows and generous whitespace to keep the experience premium and easy to navigate. This is an original design concept for portfolio purposes.",
    tags:["E-commerce","Mobile App","UI Design","Figma","Concept"],
    gallery:[
      "images/thumbs/cover-ecommerce.jpg"
    ]
  },
  {
    title:"QuickBite — Food Delivery App Concept",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-fooddelivery.jpg",
    short:"A warm, appetizing food-delivery app UI — restaurant browsing, live order tracking & smooth checkout.",
    type:"UI/UX concept (food delivery)",
    tools:"Figma, Adobe Illustrator",
    year:"2025",
    challenge:"QuickBite is a food-delivery app UI concept built around speed and appetite appeal. The interface lets users browse restaurants and dishes through rich cards, filter by cuisine, add items to a cart and follow their order on a live delivery map with a real-time tracking bar. A warm orange-and-cream palette, illustrated food icons and rounded cards make the whole flow feel friendly and tasty. This is an original design concept for portfolio purposes.",
    tags:["Food Delivery","Mobile App","UI Design","Figma","Concept"],
    gallery:[
      "images/thumbs/cover-fooddelivery.jpg"
    ]
  },
  {
    title:"Wanderly — Travel Booking App Concept",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-travel.jpg",
    short:"A calm, inspiring travel-booking app UI — flight search, destination discovery & interactive map.",
    type:"UI/UX concept (travel booking)",
    tools:"Figma, Adobe Illustrator",
    year:"2025",
    challenge:"Wanderly is a travel-booking app UI concept designed to make trip planning feel effortless and inspiring. The design combines a smart flight-and-stay search bar, beautiful destination cards, a date picker and an interactive map with location pins. A serene teal-and-sky-blue palette paired with illustrated landscapes keeps the mood relaxed and wanderlust-driven, from discovery all the way to booking. This is an original design concept for portfolio purposes.",
    tags:["Travel","Booking","Mobile App","UI Design","Figma"],
    gallery:[
      "images/thumbs/cover-travel.jpg"
    ]
  },
  {
    title:"ZENITH — Next-Gen DeFi Platform (Live)",
    cat:"web",
    catLabel:"Live Website",
    cover:"images/thumbs/cover-zenith.jpg",
    short:"A live crypto / DeFi platform — animated landing, live price ticker & a full trading dashboard with charts.",
    type:"Live crypto / DeFi website + dashboard",
    tools:"HTML, CSS, Vanilla JavaScript, Chart.js",
    year:"2025",
    challenge:"Zenith is a complete, futuristic DeFi product built entirely from scratch. It pairs a marketing landing page (hero, tokenomics, roadmap, blog) with a fully working trading dashboard — portfolio overview, holdings, interactive Chart.js price charts, a simulated live price ticker and staking cards. The dark, neon-gradient design (violet → cyan) keeps the whole experience premium and on-brand across desktop and mobile. No framework, no backend — pure HTML, CSS and vanilla JavaScript. Click below to open the live site and explore the dashboard.",
    tags:["Crypto","DeFi","Dashboard","Chart.js","Dark UI"],
    link:"case-studies/zenith/index.html",
    linkLabel:"Open the live site →",
    gallery:[
      "images/projects/zenith-landing.jpg",
      "images/projects/zenith-dashboard.jpg",
      "images/projects/zenith-mobile.jpg",
      "images/projects/zenith-phone.jpg"
    ]
  },
  {
    title:"FinBank — Mobile Banking UX Case Study",
    cat:"uiux",
    catLabel:"UI/UX · Case Study",
    cover:"images/cover-finbank.jpg",
    short:"Complete UX/UI redesign of a mobile banking app — +85% satisfaction, −60% abandonment.",
    type:"UX/UI Case Study (mobile banking)",
    tools:"Figma, Miro, Maze, Hotjar",
    year:"2023",
    challenge:"A full UX case study for FinBank, a digital bank with 2.5M users. I led the complete redesign — user research, information architecture, wireframes, UI design system, prototyping and user testing. The result: user satisfaction up 85%, onboarding abandonment down 60%, and the app store rating raised from 2.8★ to 4.8★. Click below to explore the full interactive case study.",
    tags:["UX Research","Case Study","Fintech","Figma","Prototyping"],
    link:"case-studies/finbank/index.html",
    linkLabel:"Read the full case study →",
    gallery:[
      "images/cover-finbank.jpg"
    ]
  },
  {
    title:"Atlas Law Firm — Legal Website (Live)",
    cat:"web",
    catLabel:"Live Website",
    cover:"images/thumbs/cover-law.jpg",
    short:"Live, responsive website for a high-end law firm — elegant, professional and fully clickable.",
    type:"Corporate website (live)",
    tools:"HTML, CSS, JavaScript",
    year:"2024",
    challenge:"I designed and built the complete identity of a high-end law firm as a fully live website. The challenge was to convey trust and authority while staying modern. The single-page experience covers Home, About, Services, Blog and Contact — with a signature blue-red gradient, a \"heritage\" timeline (1968–2024), team sections, testimonials, practice areas and a working contact form. Fully responsive design.",
    link:"case-studies/atlas-law/index.html",
    linkLabel:"Open the live site →",
    tags:["Web Design","Live Website","Responsive","Corporate"],
    gallery:[
      "images/projects/law-home.jpg",
      "images/projects/law-about.jpg",
      "images/projects/law-services.jpg",
      "images/projects/law-blog.jpg",
      "images/projects/law-contacts.jpg"
    ]
  },
  {
    title:"LUXE — Fashion E-commerce (Live)",
    cat:"web",
    catLabel:"Live Website",
    cover:"images/thumbs/cover-fashion.jpg",
    short:"A fully live & interactive fashion boutique — working cart, filters, search and product modals.",
    type:"Live e-commerce website (fashion)",
    tools:"HTML, CSS, Vanilla JavaScript",
    year:"2025",
    challenge:"I turned a Figma fashion mockup into a real, fully interactive online store. LUXE features a dynamic catalogue with Men, Women, Kids and Trends filters, a working shopping cart (add / remove, quantity, live total), a quick-view product modal, live search, a \"Deal of the Day\" countdown, scroll animations, testimonials and a fully responsive layout. Built from scratch with vanilla JavaScript — no framework, no backend. Click below to open the live shop and try it yourself.",
    tags:["E-commerce","Fashion","JavaScript","Interactive","Responsive"],
    link:"case-studies/luxe/index.html",
    linkLabel:"Open the live shop →",
    gallery:[
      "images/thumbs/cover-fashion.jpg"
    ]
  },
  {
    title:"TID Store — Shoe Shop",
    cat:"web",
    catLabel:"Website",
    cover:"images/thumbs/cover-shoes.jpg",
    short:"Running & hiking shoe e-commerce, colorful and bold.",
    type:"E-commerce website (footwear)",
    tools:"HTML, CSS, JavaScript",
    year:"2023",
    challenge:"A bold online sport & outdoor shoe store with an energetic visual world. I built it from scratch in HTML, CSS and vanilla JavaScript — no framework, no backend. Vivid color blocks (red, yellow, coral pink) bring the product presentation to life, with a \"Running Shoes\" and \"Hiking Shoes\" hero, a live category filter (Hot, Onsale, Trending, Arrivals), product cards with \"Buy Now / Collection\" actions, a working cart demo, scroll animations and a fully responsive layout. Click below to open the live shop and try it yourself.",
    tags:["E-commerce","JavaScript","Interactive","Responsive"],
    link:"case-studies/tid-store/index.html",
    linkLabel:"Open the live site \u2192",
    gallery:[
      "images/projects/shoes-home.jpg",
      "images/projects/shoes-shop.jpg",
      "images/projects/shoes-about.jpg"
    ]
  },
  {
    title:"LinkJob — Recruitment App",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-linkjob-app.jpg",
    short:"LinkedIn-style careers app: browse & filter jobs, apply in seconds, chat with recruiters.",
    type:"Mobile app · live interactive demo",
    tools:"HTML, CSS, JavaScript (from Figma)",
    year:"2024",
    challenge:"A LinkedIn-inspired recruitment network for job seekers. Starting from a Figma design, I built a fully interactive front-end demo you can actually use: a recommended-jobs feed, a search screen with live category filters, a full job post you can open (about the company, responsibilities, requirements), a one-tap apply flow with a pre-filled application, a \"my applications\" tracker with live statuses, saved jobs, a professional profile, and a recruiter messaging inbox with a working chat. A clean blue/magenta LinkedIn-style identity and quick bottom-tab navigation. Click below to open the live app demo.",
    tags:["Mobile App","Careers","JavaScript","Interactive","Messaging"],
    link:"case-studies/linkjob/index.html",
    linkLabel:"Open the live app →",
    gallery:[
      "images/projects/linkjob-feed.jpg",
      "images/projects/linkjob-detail.jpg",
      "images/projects/linkjob-profile.jpg"
    ]
  },
  {
    title:"Medicare — Health & Booking App",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-medical.jpg",
    short:"Mobile app for booking medical appointments and telehealth consultations.",
    type:"Mobile app · live interactive demo",
    tools:"HTML, CSS, JavaScript (from Figma)",
    year:"2024",
    challenge:"A health app designed for simplicity and trust. Starting from a Figma design, I built a fully interactive front-end demo you can actually use: a home screen with categories and top doctors, a \"Find a doctor\" search, doctor profiles with ratings and experience, appointment booking (pick a day, morning/afternoon slot), and a \"My appointments\" list — plus services, doctors team and contact. A reassuring navy/cyan palette and clear navigation for all ages. Click below to open the live app demo.",
    tags:["Mobile App","Health","JavaScript","Interactive","Booking"],
    link:"case-studies/medicare/index.html",
    linkLabel:"Open the live app →",
    gallery:[
      "images/projects/medicare-home.jpg",
      "images/projects/medicare-doctor.jpg",
      "images/projects/medicare-book.jpg"
    ]
  },
  {
    title:"TransitGo — Windsor Transit App",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-transit.jpg",
    short:"Public-transit companion app: plan a trip, buy & scan tickets, live schedules.",
    type:"Mobile app · live interactive demo",
    tools:"HTML, CSS, JavaScript (from Figma)",
    year:"2024",
    challenge:"A public-transit companion for Windsor Transit riders. Starting from a Figma design, I built a fully interactive front-end demo you can actually use: a home screen with your monthly pass and last trips, a \"Plan a trip\" flow (From / To with a swap button) that returns live route options, a scannable ticket screen with a barcode and validity timer, a schedule view (next departures / full timetable), a map with nearby stops, and an account section. A fresh green transit palette and quick bottom-tab navigation. Click below to open the live app demo.",
    tags:["Mobile App","Transit","JavaScript","Interactive","Ticketing"],
    link:"case-studies/transit/index.html",
    linkLabel:"Open the live app →",
    gallery:[
      "images/projects/transit-home.jpg",
      "images/projects/transit-routes.jpg",
      "images/projects/transit-ticket.jpg"
    ]
  },
  {
    title:"Silhouette — Fitness App",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-fitness-app.jpg",
    short:"Women's fitness app: browse workout programs, follow a guided timer player, track your progress.",
    type:"Mobile app · live interactive demo",
    tools:"HTML, CSS, JavaScript (from Figma)",
    year:"2024",
    challenge:"A bold women's fitness app on an energetic pink base. Starting from a Figma design, I built a fully interactive front-end demo you can actually use: a home with a daily-goal ring and workout categories, program pages with an exercise list, a guided player with a live countdown timer (play / pause / next), a weekly progress dashboard with achievements, saved programs and a profile. Click below to open the live app demo.",
    tags:["Mobile App","Fitness","JavaScript","Interactive","Timer"],
    link:"case-studies/fitness/index.html",
    linkLabel:"Open the live app →",
    gallery:[
      "images/projects/fitness-browse.jpg",
      "images/projects/fitness-program.jpg",
      "images/projects/fitness-player.jpg"
    ]
  },
  {
    title:"CareConnect — Babysitting App",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-careconnect-app.jpg",
    short:"Find, vet and book trusted babysitters — ratings, CPR certifications, chat and instant booking. A live interactive demo.",
    type:"Mobile app · live interactive demo",
    tools:"HTML, CSS, JavaScript (from Figma)",
    year:"2024",
    challenge:"A warm platform connecting parents with verified babysitters. Browse sitters by age group, check ratings, First-Aid/CPR certifications and reviews, book a session in seconds and chat with sitters — all from your phone. I turned my Figma design into a fully interactive front-end you can actually use: open a sitter profile, pick a day/time/duration and confirm a booking with live pricing, or start a chat and get a reply.",
    tags:["Mobile App","Childcare","JavaScript","Interactive","Booking"],
    link:"case-studies/careconnect/index.html",
    linkLabel:"Open the live app →",
    gallery:[
      "images/projects/careconnect-home.jpg",
      "images/projects/careconnect-sitter.jpg",
      "images/projects/careconnect-booking.jpg"
    ]
  },
  {
    title:"CineStream — Streaming App",
    cat:"uiux",
    catLabel:"UI/UX · Mobile App",
    cover:"images/thumbs/cover-movie.jpg",
    short:"Movie streaming app with onboarding, catalogue and detailed film pages.",
    type:"Mobile app design (streaming)",
    tools:"Figma, UI Design, Prototyping",
    year:"2024",
    challenge:"A streaming app with an elegant dark theme (deep purple + red accents). I designed the key screens: Sign In / Sign Up, sign-up confirmation, a \"Now Playing / Coming Soon / Trending\" discovery flow, and immersive movie pages with playback controls. Focus on smooth navigation and cinematic content highlighting.",
    tags:["Mobile App","Streaming","Figma","UI Design"],
    gallery:[
      "images/projects/movie-app.jpg"
    ]
  }
];

/* ---------- CARD RENDERING ---------- */
const grid = document.getElementById("projectsGrid");

function renderProjects(filter="all"){
  grid.innerHTML = "";
  const list = PROJECTS.filter(p => filter === "all" || p.cat === filter);
  list.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.style.transitionDelay = (i * 60) + "ms";
    card.innerHTML = `
      <div class="project-thumb">
        <img src="${p.cover}" alt="${p.title}" loading="lazy">
        <div class="project-overlay">
          <span class="project-view">View case study →</span>
        </div>
        ${p.gallery.length > 1 ? `<span class="project-count">${p.gallery.length} screens</span>` : ``}
      </div>
      <div class="project-info">
        <span class="project-cat">${p.catLabel}</span>
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <div class="project-tags">
          ${p.tags.slice(0,3).map(t=>`<span>${t}</span>`).join("")}
        </div>
      </div>`;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
  observeReveals();
}

/* ---------- MODAL / CASE STUDY ---------- */
const modal      = document.getElementById("modal");
const mImg       = document.getElementById("mImg");
const mCat       = document.getElementById("mCat");
const mTitle     = document.getElementById("mTitle");
const mDesc      = document.getElementById("mDesc");
const mType      = document.getElementById("mType");
const mTools     = document.getElementById("mTools");
const mYear      = document.getElementById("mYear");
const mChallenge = document.getElementById("mChallenge");
const mTags      = document.getElementById("mTags");
const mGallery   = document.getElementById("mGallery");

let currentGallery = [];

function openModal(p){
  mImg.src        = p.cover;
  mCat.textContent   = p.catLabel;
  mTitle.textContent = p.title;
  mDesc.textContent  = p.short;
  mType.textContent  = p.type;
  mTools.textContent = p.tools;
  mYear.textContent  = p.year;
  mChallenge.textContent = p.challenge;
  mTags.innerHTML = p.tags.map(t=>`<span>${t}</span>`).join("");

  // Bouton "étude de cas complète" (si le projet a une page dédiée)
  const oldBtn = document.getElementById("mCaseLink");
  if(oldBtn) oldBtn.remove();
  if(p.link){
    const a = document.createElement("a");
    a.id = "mCaseLink";
    a.href = p.link;
    a.target = "_blank";
    a.rel = "noopener";
    a.className = "btn btn-primary case-link-btn";
    a.textContent = p.linkLabel || "View full case study →";
    mTags.insertAdjacentElement("afterend", a);
  }

  currentGallery = p.gallery;
  mGallery.innerHTML = p.gallery.map((src, idx) => `
    <figure class="gallery-item" data-idx="${idx}">
      <img src="${src}" alt="${p.title} — screen ${idx+1}" loading="lazy">
    </figure>`).join("");
  mGallery.querySelectorAll(".gallery-item").forEach(el=>{
    el.addEventListener("click", ()=> openLightbox(parseInt(el.dataset.idx)));
  });

  modal.classList.add("open");
  modal.querySelector(".modal-card").scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("mClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });

/* ---------- FULLSCREEN LIGHTBOX ---------- */
const lightbox = document.getElementById("lightbox");
const lbImg    = document.getElementById("lbImg");
let lbIndex = 0;

function openLightbox(idx){
  lbIndex = idx;
  lbImg.src = currentGallery[lbIndex];
  lightbox.classList.add("open");
}
function closeLightbox(){ lightbox.classList.remove("open"); }
function lbShift(dir){
  lbIndex = (lbIndex + dir + currentGallery.length) % currentGallery.length;
  lbImg.src = currentGallery[lbIndex];
}
document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", e=>{ e.stopPropagation(); lbShift(-1); });
document.getElementById("lbNext").addEventListener("click", e=>{ e.stopPropagation(); lbShift(1); });
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });

/* ---------- KEYBOARD ---------- */
document.addEventListener("keydown", e => {
  if(e.key === "Escape"){ closeLightbox(); closeModal(); }
  if(lightbox.classList.contains("open")){
    if(e.key === "ArrowLeft")  lbShift(-1);
    if(e.key === "ArrowRight") lbShift(1);
  }
});

/* ---------- FILTERS ---------- */
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

/* ---------- NAVBAR SCROLL ---------- */
const nav = document.querySelector(".navbar");
window.addEventListener("scroll", ()=>{
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

/* ---------- MOBILE MENU ---------- */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
if(burger){
  burger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
    burger.classList.toggle("active");
  });
  navLinks.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      navLinks.classList.remove("open");
      burger.classList.remove("active");
    });
  });
}

/* ---------- SCROLL REVEAL + SKILL BARS ---------- */
let revealObserver;
function observeReveals(){
  if(!revealObserver){
    revealObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
          entry.target.querySelectorAll?.(".skill-bar span").forEach(bar=>{
            bar.style.width = bar.dataset.level;
          });
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold:0.12 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach(el=>revealObserver.observe(el));
}

/* ---------- FOOTER YEAR ---------- */
const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- INIT ---------- */
renderProjects("all");
observeReveals();
