/* ============================================================
   Portfolio — Médard Kiteretse | logique interactive
   ============================================================ */

/* ---------- DONNÉES DES PROJETS ----------
   👉 Pour ajouter / remplacer un projet :
      - mets tes images dans images/projects/
      - crée une image "cover" (aperçu carte) dans images/thumbs/
      - duplique / modifie un bloc ci-dessous
      - catégories : "web" (sites web) ou "uiux" (apps & UI/UX)
      - "gallery" = liste des captures affichées dans l'étude de cas
*/
const PROJECTS = [
  {
    title:"ZENITH — Plateforme DeFi nouvelle génération (en ligne)",
    cat:"web",
    catLabel:"Site Web Live",
    cover:"images/thumbs/cover-zenith.jpg",
    short:"Une plateforme crypto / DeFi live — landing animée, ticker de prix en direct & un vrai dashboard de trading avec graphiques.",
    type:"Site crypto / DeFi live + dashboard",
    tools:"HTML, CSS, JavaScript (vanilla), Chart.js",
    year:"2025",
    challenge:"Zenith est un produit DeFi complet et futuriste, codé entièrement from scratch. Il associe une landing page marketing (hero, tokenomics, roadmap, blog) à un vrai dashboard de trading — vue portefeuille, holdings, graphiques de prix interactifs (Chart.js), un ticker de prix simulé en direct et des cartes de staking. Le design sombre à dégradés néon (violet → cyan) garde une expérience premium et cohérente sur desktop et mobile. Sans framework, sans backend — du HTML, CSS et JavaScript vanilla pur. Clique ci-dessous pour ouvrir le site en ligne et explorer le dashboard.",
    tags:["Crypto","DeFi","Dashboard","Chart.js","Dark UI"],
    link:"../case-studies/zenith/index.html",
    linkLabel:"Ouvrir le site en ligne →",
    gallery:[
      "images/projects/zenith-landing.jpg",
      "images/projects/zenith-dashboard.jpg",
      "images/projects/zenith-mobile.jpg",
      "images/projects/zenith-phone.jpg"
    ]
  },
  {
    title:"FinBank — Étude de cas UX bancaire",
    cat:"uiux",
    catLabel:"UI/UX · Étude de cas",
    cover:"images/cover-finbank.jpg",
    short:"Refonte UX/UI complète d'une app de banque mobile — +85% de satisfaction, −60% d'abandon.",
    type:"Étude de cas UX/UI (banque mobile)",
    tools:"Figma, Miro, Maze, Hotjar",
    year:"2023",
    challenge:"Une étude de cas UX complète pour FinBank, une banque digitale de 2,5 M d'utilisateurs. J'ai mené la refonte complète — recherche utilisateur, architecture de l'information, wireframes, design system UI, prototypage et tests utilisateurs. Résultat : satisfaction +85%, abandon à l'onboarding −60%, et note de l'app passée de 2,8★ à 4,8★. Clique ci-dessous pour explorer l'étude de cas interactive complète.",
    tags:["UX Research","Étude de cas","Fintech","Figma","Prototypage"],
    link:"../case-studies/finbank/index_fr.html",
    linkLabel:"Lire l'étude de cas complète →",
    gallery:[
      "images/cover-finbank.jpg"
    ]
  },
  {
    title:"Atlas Law Firm — Site juridique (en ligne)",
    cat:"web",
    catLabel:"Site Web Live",
    cover:"images/thumbs/cover-law.jpg",
    short:"Site web en ligne et responsive pour un cabinet d'avocats haut de gamme — élégant, professionnel et entièrement cliquable.",
    type:"Site web corporate (en ligne)",
    tools:"HTML, CSS, JavaScript",
    year:"2024",
    challenge:"J'ai conçu et développé l'identité complète d'un cabinet d'avocats haut de gamme sous forme de site web entièrement en ligne. Le défi était de transmettre confiance et autorité tout en restant moderne. L'expérience une-page couvre Accueil, À propos, Services, Blog et Contact — avec un dégradé bleu-rouge signature, une timeline « heritage » (1968–2024), des sections d'équipe, témoignages, domaines de pratique et un formulaire de contact fonctionnel. Design entièrement responsive.",
    link:"case-studies/atlas-law/index.html",
    linkLabel:"Ouvrir le site en ligne →",
    tags:["Web Design","Site Web Live","Responsive","Corporate"],
    gallery:[
      "images/projects/law-home.jpg",
      "images/projects/law-about.jpg",
      "images/projects/law-services.jpg",
      "images/projects/law-blog.jpg",
      "images/projects/law-contacts.jpg"
    ]
  },
  {
    title:"LUXE — E-commerce mode (en ligne)",
    cat:"web",
    catLabel:"Site Web Live",
    cover:"images/thumbs/cover-fashion.jpg",
    short:"Une boutique de mode 100% live et interactive — panier fonctionnel, filtres, recherche et fiches produits.",
    type:"Site e-commerce live (mode)",
    tools:"HTML, CSS, JavaScript (vanilla)",
    year:"2025",
    challenge:"J'ai transformé une maquette Figma en une vraie boutique en ligne entièrement interactive. LUXE propose un catalogue dynamique avec filtres Homme, Femme, Enfant et Tendances, un panier fonctionnel (ajout / retrait, quantité, total en direct), une fiche produit en fenêtre modale, une recherche instantanée, un compte à rebours « Deal du jour », des animations au défilement, des témoignages et un design 100% responsive. Le tout codé from scratch en JavaScript vanilla — sans framework, sans backend. Clique ci-dessous pour ouvrir la boutique en ligne et l'essayer toi-même.",
    tags:["E-commerce","Mode","JavaScript","Interactif","Responsive"],
    link:"case-studies/luxe/index.html",
    linkLabel:"Ouvrir la boutique en ligne →",
    gallery:[
      "images/thumbs/cover-fashion.jpg"
    ]
  },
  {
    title:"TID Store — Boutique de chaussures",
    cat:"web",
    catLabel:"Site Web",
    cover:"images/thumbs/cover-shoes.jpg",
    short:"E-commerce de chaussures running & randonnée, coloré et audacieux.",
    type:"Site e-commerce (chaussures)",
    tools:"HTML, CSS, JavaScript",
    year:"2023",
    challenge:"Boutique en ligne de chaussures sport & outdoor à l'univers visuel énergique. Je l'ai codée from scratch en HTML, CSS et JavaScript vanilla — sans framework, sans backend. Des blocs de couleurs vives (rouge, jaune, rose corail) dynamisent la présentation produit, avec un hero « Running Shoes » et « Hiking Shoes », un filtre de catégories en direct (Hot, Onsale, Trending, Arrivals), des fiches produit avec boutons « Buy Now / Collection », un panier de démonstration fonctionnel, des animations au défilement et un design 100% responsive. Clique ci-dessous pour ouvrir la boutique en ligne et l'essayer toi-même.",
    tags:["E-commerce","JavaScript","Interactif","Responsive"],
    link:"case-studies/tid-store/index.html",
    linkLabel:"Ouvrir le site en ligne \u2192",
    gallery:[
      "images/projects/shoes-home.jpg",
      "images/projects/shoes-shop.jpg",
      "images/projects/shoes-about.jpg"
    ]
  },
  {
    title:"LinkJob — App de recrutement",
    cat:"uiux",
    catLabel:"UI/UX · App mobile",
    cover:"images/thumbs/cover-linkjob-app.jpg",
    short:"App carrières type LinkedIn : parcourir et filtrer les offres, postuler en un clic, discuter avec les recruteurs.",
    type:"App mobile · démo interactive en ligne",
    tools:"HTML, CSS, JavaScript (d'après Figma)",
    year:"2024",
    challenge:"Un réseau de recrutement inspiré de LinkedIn pour les chercheurs d'emploi. À partir d'un design Figma, j'ai construit une démo front-end entièrement interactive que l'on peut vraiment utiliser : un fil d'offres recommandées, un écran de recherche avec filtres par catégorie en direct, une offre complète à ouvrir (à propos de l'entreprise, missions, profil recherché), un parcours de candidature en un clic avec formulaire pré-rempli, un suivi « mes candidatures » avec statuts en direct, les offres sauvegardées, un profil professionnel et une messagerie recruteur avec chat fonctionnel. Une identité bleu/magenta type LinkedIn et une navigation rapide par onglets. Cliquez ci-dessous pour ouvrir la démo en ligne.",
    tags:["App mobile","Carrières","JavaScript","Interactif","Messagerie"],
    link:"case-studies/linkjob/index.html",
    linkLabel:"Ouvrir l'app en ligne →",
    gallery:[
      "images/projects/linkjob-feed.jpg",
      "images/projects/linkjob-detail.jpg",
      "images/projects/linkjob-profile.jpg"
    ]
  },
  {
    title:"Medicare — App santé & rendez-vous",
    cat:"uiux",
    catLabel:"UI/UX · App Mobile",
    cover:"images/thumbs/cover-medical.jpg",
    short:"Application mobile de prise de rendez-vous médicaux et téléconsultation.",
    type:"App mobile · démo interactive en ligne",
    tools:"HTML, CSS, JavaScript (d'après Figma)",
    year:"2024",
    challenge:"Une app santé pensée pour la simplicité et la confiance. À partir d'un design Figma, j'ai construit une démo front-end 100 % interactive que l'on peut réellement utiliser : un accueil avec catégories et meilleurs médecins, une recherche « Chercher un médecin », des profils de médecins (notes, expérience), la prise de rendez-vous (choix du jour, créneau matin/après-midi), et une liste « Mes RDV » — plus services, équipe de médecins et contact. Palette bleu marine/cyan rassurante et navigation claire pour tous les âges. Cliquez ci-dessous pour ouvrir la démo en ligne.",
    tags:["Mobile App","Santé","JavaScript","Interactif","Booking"],
    link:"case-studies/medicare/index.html",
    linkLabel:"Ouvrir l'app en ligne →",
    gallery:[
      "images/projects/medicare-home.jpg",
      "images/projects/medicare-doctor.jpg",
      "images/projects/medicare-book.jpg"
    ]
  },
  {
    title:"TransitGo — App Transport Windsor",
    cat:"uiux",
    catLabel:"UI/UX · App Mobile",
    cover:"images/thumbs/cover-transit.jpg",
    short:"App compagnon de transport en commun : planifier un trajet, acheter & scanner un billet, horaires en direct.",
    type:"App mobile · démo interactive en ligne",
    tools:"HTML, CSS, JavaScript (d'après Figma)",
    year:"2024",
    challenge:"Un compagnon de transport en commun pour les usagers de Windsor Transit. À partir d'un design Figma, j'ai construit une démo front-end 100 % interactive que l'on peut réellement utiliser : un accueil avec la carte d'abonnement mensuel et les derniers trajets, un parcours « Planifier un trajet » (Depuis / Vers avec bouton d'inversion) qui affiche des itinéraires en direct, un billet scannable avec code-barres et minuteur de validité, une vue horaires (prochains départs / grille complète), une carte avec les arrêts proches, et un espace compte. Palette verte fraîche et navigation rapide par onglets. Cliquez ci-dessous pour ouvrir la démo en ligne.",
    tags:["Mobile App","Transport","JavaScript","Interactif","Billetterie"],
    link:"case-studies/transit/index.html",
    linkLabel:"Ouvrir l'app en ligne →",
    gallery:[
      "images/projects/transit-home.jpg",
      "images/projects/transit-routes.jpg",
      "images/projects/transit-ticket.jpg"
    ]
  },
  {
    title:"Silhouette — App Fitness",
    cat:"uiux",
    catLabel:"UI/UX · App mobile",
    cover:"images/thumbs/cover-fitness-app.jpg",
    short:"Application fitness féminine : programmes d'entraînement, lecteur guidé avec minuteur, suivi de progression.",
    type:"App mobile · démo interactive en ligne",
    tools:"HTML, CSS, JavaScript (d'après Figma)",
    year:"2024",
    challenge:"Une app fitness au design affirmé sur une base rose énergique. À partir d'un design Figma, j'ai construit une démo front-end entièrement interactive que vous pouvez vraiment utiliser : un accueil avec anneau d'objectif quotidien et catégories d'entraînement, des pages programme avec liste d'exercices, un lecteur guidé avec minuteur en direct (play / pause / suivant), un tableau de progression hebdomadaire avec récompenses, les programmes sauvegardés et un profil. Cliquez ci-dessous pour ouvrir la démo en ligne.",
    tags:["App mobile","Fitness","JavaScript","Interactif","Minuteur"],
    link:"case-studies/fitness/index.html",
    linkLabel:"Ouvrir l'app en ligne →",
    gallery:[
      "images/projects/fitness-browse.jpg",
      "images/projects/fitness-program.jpg",
      "images/projects/fitness-player.jpg"
    ]
  },
  {
    title:"CareConnect — App de baby-sitting",
    cat:"uiux",
    catLabel:"UI/UX · App mobile",
    cover:"images/thumbs/cover-careconnect-app.jpg",
    short:"Trouvez, vérifiez et réservez des nounous de confiance — notes, certifications CPR, chat et réservation instantanée. Une démo interactive en ligne.",
    type:"App mobile · démo interactive en ligne",
    tools:"HTML, CSS, JavaScript (d'après Figma)",
    year:"2024",
    challenge:"Une plateforme chaleureuse mettant en relation les parents et des baby-sitters vérifiées. Parcourez les nounous par tranche d'âge, consultez les notes, les certifications First-Aid/CPR et les avis, réservez une session en quelques secondes et discutez avec les nounous — le tout depuis votre téléphone. J'ai transformé ma maquette Figma en un front-end entièrement interactif que vous pouvez réellement utiliser : ouvrez une fiche nounou, choisissez un jour / une heure / une durée et confirmez une réservation avec calcul du prix en direct, ou lancez une conversation et recevez une réponse.",
    tags:["App mobile","Garde d'enfants","JavaScript","Interactif","Réservation"],
    link:"case-studies/careconnect/index.html",
    linkLabel:"Ouvrir l'app en ligne →",
    gallery:[
      "images/projects/careconnect-home.jpg",
      "images/projects/careconnect-sitter.jpg",
      "images/projects/careconnect-booking.jpg"
    ]
  },
  {
    title:"CineStream — App de streaming",
    cat:"uiux",
    catLabel:"UI/UX · App Mobile",
    cover:"images/thumbs/cover-movie.jpg",
    short:"Application de streaming de films avec onboarding, catalogue et fiches détaillées.",
    type:"Design d'application mobile (streaming)",
    tools:"Figma, UI Design, Prototyping",
    year:"2024",
    challenge:"Une app de streaming au thème sombre élégant (violet profond + accents rouges). J'ai dessiné les écrans clés : Sign In / Sign Up, confirmation d'inscription, parcours de découverte « Now Playing / Coming Soon / Trending », et fiches film immersives avec contrôles de lecture. Focus sur une navigation fluide et une mise en avant cinématographique des contenus.",
    tags:["Mobile App","Streaming","Figma","UI Design"],
    gallery:[
      "images/projects/movie-app.jpg"
    ]
  }
];

/* ---------- RENDU DES CARTES ---------- */
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
          <span class="project-view">Voir l'étude de cas →</span>
        </div>
        ${p.gallery.length > 1 ? `<span class="project-count">${p.gallery.length} écrans</span>` : ``}
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

/* ---------- MODAL / ÉTUDE DE CAS ---------- */
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
    a.textContent = p.linkLabel || "Voir l'étude de cas →";
    mTags.insertAdjacentElement("afterend", a);
  }

  currentGallery = p.gallery;
  mGallery.innerHTML = p.gallery.map((src, idx) => `
    <figure class="gallery-item" data-idx="${idx}">
      <img src="${src}" alt="${p.title} — écran ${idx+1}" loading="lazy">
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

/* ---------- LIGHTBOX PLEIN ÉCRAN ---------- */
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

/* ---------- CLAVIER ---------- */
document.addEventListener("keydown", e => {
  if(e.key === "Escape"){ closeLightbox(); closeModal(); }
  if(lightbox.classList.contains("open")){
    if(e.key === "ArrowLeft")  lbShift(-1);
    if(e.key === "ArrowRight") lbShift(1);
  }
});

/* ---------- FILTRES ---------- */
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

/* ---------- MENU MOBILE ---------- */
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

/* ---------- SCROLL REVEAL + BARRES DE COMPÉTENCES ---------- */
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

/* ---------- ANNÉE FOOTER ---------- */
const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- INIT ---------- */
renderProjects("all");
observeReveals();
