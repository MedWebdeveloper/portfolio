/* ===== Medicare — interactive mobile app demo ===== */

const DOCTORS = [
  { id:"d1", name:"Dr. Amara Okafor", spec:"Cardiologist", exp:"12 yrs", rate:"4.9", patients:"1.8k", online:true,
    img:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80&auto=format&fit=crop",
    about:"Senior cardiologist specialising in preventive heart care, ECG and follow-up for chronic conditions. Warm, patient-focused approach." },
  { id:"d2", name:"Dr. Julien Marchand", spec:"Neurologist", exp:"9 yrs", rate:"4.8", patients:"1.2k", online:true,
    img:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80&auto=format&fit=crop",
    about:"Neurologist focused on migraines, sleep disorders and nervous-system health. Combines clinical care with lifestyle guidance." },
  { id:"d3", name:"Dr. Sofia Herrera", spec:"Dentist", exp:"7 yrs", rate:"4.9", patients:"2.3k", online:false,
    img:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80&auto=format&fit=crop",
    about:"Gentle dental surgeon covering cleaning, cavities and orthodontics. Known for making nervous patients feel at ease." },
  { id:"d4", name:"Dr. Noah Bennett", spec:"General practitioner", exp:"15 yrs", rate:"4.7", patients:"3.1k", online:true,
    img:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80&auto=format&fit=crop",
    about:"Experienced family doctor for everyday health needs, check-ups and prescriptions — in person or via telehealth." },
  { id:"d5", name:"Dr. Priya Nair", spec:"Ophthalmologist", exp:"10 yrs", rate:"4.8", patients:"1.5k", online:true,
    img:"https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=200&q=80&auto=format&fit=crop",
    about:"Eye specialist covering vision screening, prescriptions and early detection of eye conditions for all ages." },
  { id:"d6", name:"Dr. Marcus Reid", spec:"Dermatologist", exp:"8 yrs", rate:"4.6", patients:"980", online:false,
    img:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&q=80&auto=format&fit=crop",
    about:"Skin-health specialist treating acne, allergies and skin screening, with a focus on long-term prevention." },
];

let current = null;      // selected doctor
let selDay = null;       // selected day index
let selSlot = null;      // selected slot text
const appointments = []; // booked appointments

/* ---------- helpers ---------- */
const $  = (s,ctx=document)=>ctx.querySelector(s);
const $$ = (s,ctx=document)=>[...ctx.querySelectorAll(s)];

function docCardHTML(d){
  return `<div class="doc" data-doc="${d.id}">
    <img src="${d.img}" alt="${d.name}">
    <div class="info">
      <h5>${d.name}</h5>
      <small>${d.spec}</small>
      <div class="meta">
        <span class="star">★ ${d.rate}</span>
        <span>${d.exp}</span>
        ${d.online?'<span class="pill-online">Online</span>':''}
      </div>
    </div>
    <span class="go">›</span>
  </div>`;
}

/* ---------- render lists ---------- */
function renderHome(){ $("#homeDocs").innerHTML = DOCTORS.slice(0,3).map(docCardHTML).join(""); }
function renderSearch(list){ $("#searchList").innerHTML = (list||DOCTORS).map(docCardHTML).join("") || '<div class="empty"><div class="ic">🔍</div>No doctor found.</div>'; }
function renderTeam(){ $("#teamList").innerHTML = DOCTORS.map(docCardHTML).join(""); }

/* ---------- navigation ---------- */
function go(view){
  $$(".view").forEach(v=>v.classList.toggle("active", v.dataset.view===view));
  $$(".tab").forEach(t=>{
    const map = {home:"home",search:"search",appts:"appts",contact:"contact"};
    t.classList.toggle("active", t.dataset.goto===view && t.dataset.goto in map);
  });
  // scroll the active view to top
  const av = $(`.view[data-view="${view}"]`);
  if(av) av.scrollTop = 0;
}

/* ---------- doctor profile ---------- */
function openDoctor(id){
  current = DOCTORS.find(d=>d.id===id);
  if(!current) return;
  $("#pfImg").src = current.img;
  $("#pfName").textContent = current.name;
  $("#pfSpec").textContent = current.spec;
  $("#pfExp").textContent  = current.exp;
  $("#pfRate").textContent = "★ "+current.rate;
  $("#pfPatients").textContent = current.patients;
  $("#pfAbout").textContent = current.about;
  go("profile");
}

/* ---------- booking ---------- */
function buildDays(){
  const wrap = $("#days"); wrap.innerHTML="";
  const names=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const today = new Date();
  for(let i=0;i<7;i++){
    const dt = new Date(today); dt.setDate(today.getDate()+i);
    const el = document.createElement("div");
    el.className="day"+(i===0?" sel":"");
    el.innerHTML = `<small>${names[(dt.getDay()+6)%7]}</small><b>${dt.getDate()}</b>`;
    el.dataset.day = i;
    el.dataset.label = `${names[(dt.getDay()+6)%7]} ${dt.getDate()}`;
    el.addEventListener("click",()=>{ $$(".day").forEach(d=>d.classList.remove("sel")); el.classList.add("sel"); selDay=el.dataset.label; });
    wrap.appendChild(el);
  }
  selDay = wrap.firstChild.dataset.label;
}
function buildSlots(){
  const am=["08:00","09:00","10:00","11:00"];
  const pm=["13:00","14:00","15:00","16:00","17:00"];
  const taken=["10:00","15:00"]; // demo unavailable
  const make = (arr,box)=>{
    box.innerHTML="";
    arr.forEach(t=>{
      const s=document.createElement("div");
      s.className="slot"+(taken.includes(t)?" taken":"");
      s.textContent=t;
      s.addEventListener("click",()=>{ $$(".slot").forEach(x=>x.classList.remove("sel")); s.classList.add("sel"); selSlot=t; });
      box.appendChild(s);
    });
  };
  make(am,$("#slotsAM")); make(pm,$("#slotsPM"));
  selSlot=null;
}
function openBooking(){
  if(!current) return;
  $("#bkImg").src=current.img;
  $("#bkName").textContent=current.name;
  $("#bkSpec").textContent=current.spec;
  buildDays(); buildSlots();
  go("book");
}

/* ---------- appointments ---------- */
function renderAppts(){
  const box=$("#apptList");
  if(!appointments.length){
    box.innerHTML='<div class="empty"><div class="ic">🗓️</div>No appointments yet.<br>Book your first visit!</div>';
    return;
  }
  box.innerHTML = appointments.map(a=>`
    <div class="appt">
      <img src="${a.img}" alt="">
      <div class="info">
        <h5>${a.name}</h5>
        <small>${a.spec}</small><br>
        <span class="when">📅 ${a.day} · ${a.time}</span>
      </div>
      <span class="status st-confirmed">Confirmed</span>
    </div>`).join("");
}

/* ---------- toast ---------- */
let toastT;
function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"),2200);
}

/* ---------- events ---------- */
document.addEventListener("click",e=>{
  const g = e.target.closest("[data-goto]");
  if(g){
    const v=g.dataset.goto;
    if(v==="search") renderSearch();
    if(v==="team")   renderTeam();
    if(v==="appts")  renderAppts();
    if(v==="book"){ openBooking(); return; }
    go(v);
    return;
  }
  const d = e.target.closest("[data-doc]");
  if(d){ openDoctor(d.dataset.doc); return; }
});

// live search
document.addEventListener("input",e=>{
  if(e.target.id==="docSearch"){
    const q=e.target.value.toLowerCase().trim();
    renderSearch(DOCTORS.filter(d=>d.name.toLowerCase().includes(q)||d.spec.toLowerCase().includes(q)));
  }
});

// confirm booking
document.addEventListener("click",e=>{
  if(e.target.id==="confirmBtn"){
    if(!selSlot){ toast("⚠️ Please pick a time slot"); return; }
    appointments.unshift({ name:current.name, spec:current.spec, img:current.img, day:selDay, time:selSlot });
    $("#successText").textContent = `Your appointment with ${current.name} on ${selDay} at ${selSlot} is confirmed. You'll get a reminder before it starts.`;
    go("success");
  }
  if(e.target.id==="callBtn") toast("📞 Calling hotline…");
  if(e.target.id==="msgBtn")  toast("✅ Message sent — we'll reply soon!");
});

/* ---------- clock ---------- */
function tick(){
  const n=new Date();
  $("#clock").textContent = n.getHours().toString().padStart(2,"0")+":"+n.getMinutes().toString().padStart(2,"0");
}

/* ---------- init ---------- */
renderHome(); renderSearch(); renderTeam(); renderAppts();
tick(); setInterval(tick,10000);
