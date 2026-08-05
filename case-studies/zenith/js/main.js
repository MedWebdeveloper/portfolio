// ===== Nav scroll =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ===== Mobile drawer =====
const drawer = document.getElementById('drawer');
document.getElementById('hamburger')?.addEventListener('click', () => drawer.classList.add('open'));
document.getElementById('drawerClose')?.addEventListener('click', () => drawer.classList.remove('open'));
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== FAQ accordion =====
document.querySelectorAll('.faq-item .faq-q').forEach(q => {
  q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
});

// ===== Price ticker (simulated live) =====
const coins = [
  { s: 'ZNT', p: 3.42, c: 5.8 },
  { s: 'BTC', p: 67240, c: 1.2 },
  { s: 'ETH', p: 3510, c: 2.4 },
  { s: 'SOL', p: 168, c: -0.9 },
  { s: 'BNB', p: 592, c: 0.7 },
  { s: 'ADA', p: 0.46, c: -1.3 },
  { s: 'AVAX', p: 38.2, c: 3.1 },
  { s: 'DOT', p: 7.1, c: -0.4 },
];
function fmt(n){ return n >= 1000 ? '$'+n.toLocaleString('en-US',{maximumFractionDigits:0}) : '$'+n.toFixed(2); }
function renderTicker(){
  const track = document.getElementById('ticker');
  if(!track) return;
  const html = coins.map(c => `
    <span class="ticker-item"><strong>${c.s}</strong> <span class="sym">${fmt(c.p)}</span>
    <span class="chg ${c.c>=0?'up':'down'}">${c.c>=0?'▲':'▼'} ${Math.abs(c.c).toFixed(1)}%</span></span>`).join('');
  track.innerHTML = html + html; // duplicate for seamless loop
}
renderTicker();

// simulate small price movements
setInterval(() => {
  coins.forEach(c => {
    const drift = (Math.random() - 0.5) * (c.p * 0.004);
    c.p = Math.max(0.01, c.p + drift);
    c.c = +(c.c + (Math.random()-0.5)*0.3).toFixed(1);
  });
  renderTicker();
  const sp = document.getElementById('statPrice');
  if(sp) sp.textContent = fmt(coins[0].p);
}, 3000);

// ===== Tokenomics donut chart =====
const tc = document.getElementById('tokenChart');
if (tc && window.Chart) {
  new Chart(tc, {
    type: 'doughnut',
    data: {
      labels: ['Community', 'Staking', 'Team', 'Treasury', 'Private'],
      datasets: [{
        data: [40, 22, 15, 13, 10],
        backgroundColor: ['#7C3AED','#22D3EE','#A78BFA','#67E8F9','#4C1D95'],
        borderColor: '#06060C', borderWidth: 4, hoverOffset: 8
      }]
    },
    options: {
      cutout: '68%',
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.label}: ${c.raw}%` } } },
      responsive: false
    }
  });
}
