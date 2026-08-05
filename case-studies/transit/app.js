/* ===== TransitGo — Windsor Transit live app logic ===== */

// Route options generated for a trip
const ROUTE_TEMPLATES = [
  { line:"1C",  name:"Transway",  dur:"18 min", walk:"4 min walk", fare:"3.75", deps:"every 10 min" },
  { line:"22",  name:"Tunnel",    dur:"24 min", walk:"2 min walk", fare:"3.75", deps:"every 15 min" },
  { line:"5",   name:"Dougall",   dur:"29 min", walk:"6 min walk", fare:"3.75", deps:"every 20 min" },
];

// Departures data
const NEXT_DEPS = [
  { line:"1C", stop:"Ouellette Ave",   eta:"2 min",  dest:"→ Tecumseh" },
  { line:"22", stop:"Downtown Term.",  eta:"6 min",  dest:"→ Tunnel"   },
  { line:"5",  stop:"University Ave",  eta:"9 min",  dest:"→ Devonshire" },
  { line:"4",  stop:"Wyandotte St",    eta:"13 min", dest:"→ Forest Glade" },
  { line:"7",  stop:"Central Ave",     eta:"17 min", dest:"→ Airport" },
];
const FULL_SCHED = [
  { line:"1C", stop:"Transway",   times:"06:00 · 06:20 · 06:40 · 07:00" },
  { line:"22", stop:"Tunnel",     times:"06:05 · 06:25 · 06:45 · 07:05" },
  { line:"5",  stop:"Dougall",    times:"06:10 · 06:35 · 07:00 · 07:25" },
  { line:"4",  stop:"Ottawa",     times:"06:15 · 06:45 · 07:15 · 07:45" },
  { line:"7",  stop:"Central",    times:"06:20 · 06:55 · 07:30 · 08:05" },
];

// ---------- state ----------
let selectedRoute = ROUTE_TEMPLATES[0];

// ---------- navigation ----------
function go(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active', v.dataset.view===view));
  document.querySelectorAll('.tab').forEach(t=>{
    const on = t.dataset.goto===view || (view==='routes' && t.dataset.goto==='plan');
    t.classList.toggle('on', on && !t.classList.contains('fab'));
  });
  const scr = document.querySelector('.view.active');
  if(scr) scr.scrollTop = 0;
}

// ---------- render routes ----------
function renderRoutes(from, to){
  document.getElementById('routeHeader').textContent = `${from} → ${to}`;
  const list = document.getElementById('routeList');
  list.innerHTML = ROUTE_TEMPLATES.map((r,i)=>`
    <div class="route" data-route="${i}">
      <div class="top">
        <span class="badge-line">${r.line}</span>
        <span style="font-weight:700;color:var(--slate);font-size:14px">${r.name}</span>
        <span class="dur">${r.dur}</span>
      </div>
      <div class="meta">
        <span>🚶 ${r.walk}</span>
        <span>🕒 ${r.deps}</span>
        <span class="fare">CAN$ ${r.fare}</span>
      </div>
    </div>`).join('');
}

// ---------- render schedule ----------
function renderSchedule(mode){
  const list = document.getElementById('scheduleList');
  if(mode==='full'){
    list.innerHTML = FULL_SCHED.map(s=>`
      <div class="stop">
        <span class="rl">${s.line}</span>
        <div class="info"><b>${s.stop}</b><small>${s.times}</small></div>
      </div>`).join('');
  } else {
    list.innerHTML = NEXT_DEPS.map(d=>`
      <div class="stop">
        <span class="rl">${d.line}</span>
        <div class="info"><b>${d.stop}</b><small>${d.dest}</small></div>
        <div class="eta"><b>${d.eta}</b><small>on time</small></div>
      </div>`).join('');
  }
}

// ---------- ticket ----------
function loadTicket(){
  document.getElementById('ticketLine').textContent = `${selectedRoute.line} ${selectedRoute.name}`;
  document.getElementById('ticketPrice').textContent = selectedRoute.fare;
  // valid until = now + 30 min
  const d = new Date(Date.now()+30*60000);
  document.getElementById('ticketValid').textContent =
    String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
}

// ---------- toast ----------
let toastT;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('show'),2200);
}

// ---------- clock ----------
function tick(){
  const d=new Date();
  document.getElementById('clock').textContent =
    String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
}

// ---------- events ----------
document.addEventListener('click', e=>{
  const g = e.target.closest('[data-goto]');
  if(g){
    const v=g.dataset.goto;
    if(v==='ticket') loadTicket();
    if(v==='schedule') renderSchedule('next');
    go(v);
    return;
  }

  const dest = e.target.closest('[data-dest]');
  if(dest){
    document.getElementById('toInput').value = dest.dataset.dest;
    return;
  }

  const route = e.target.closest('[data-route]');
  if(route){
    selectedRoute = ROUTE_TEMPLATES[+route.dataset.route];
    loadTicket();
    go('ticket');
    return;
  }

  const sched = e.target.closest('[data-sched]');
  if(sched){
    document.querySelectorAll('.tab2').forEach(t=>t.classList.toggle('sel', t===sched));
    renderSchedule(sched.dataset.sched);
    return;
  }

  const t = e.target.closest('[data-toast]');
  if(t){ toast(t.dataset.toast); return; }

  if(e.target.closest('#findBtn')){
    const from=document.getElementById('fromInput').value.trim()||'Current location';
    const to=document.getElementById('toInput').value.trim()||'Destination';
    renderRoutes(from,to);
    go('routes');
    return;
  }

  if(e.target.closest('#swapBtn')){
    const a=document.getElementById('fromInput'), b=document.getElementById('toInput');
    const tmp=a.value; a.value=b.value; b.value=tmp;
    return;
  }

  if(e.target.closest('#buyBtn')){
    document.getElementById('successText').textContent =
      `Your ${selectedRoute.line} ${selectedRoute.name} ticket (CAN$ ${selectedRoute.fare}) is ready. Show the barcode at the reader.`;
    go('success');
    return;
  }
});

// ---------- init ----------
renderRoutes('Ouellette Ave','Devonshire Mall');
renderSchedule('next');
loadTicket();
tick(); setInterval(tick, 10000);
