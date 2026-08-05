// ===================== ZENITH DASHBOARD =====================

const market = [
  { s:'ZNT', n:'Zenith',   p:3.42,    c:5.8,  col:'#7C3AED' },
  { s:'BTC', n:'Bitcoin',  p:67240,   c:1.2,  col:'#F7931A' },
  { s:'ETH', n:'Ethereum', p:3510,    c:2.4,  col:'#627EEA' },
  { s:'SOL', n:'Solana',   p:168,     c:-0.9, col:'#22D3EE' },
  { s:'BNB', n:'BNB',      p:592,     c:0.7,  col:'#F3BA2F' },
  { s:'AVAX',n:'Avalanche',p:38.2,    c:3.1,  col:'#E84142' },
  { s:'ADA', n:'Cardano',  p:0.46,    c:-1.3, col:'#0033AD' },
];

const fmt = n => n >= 1000 ? '$'+n.toLocaleString('en-US',{maximumFractionDigits:0})
                : n >= 1 ? '$'+n.toFixed(2) : '$'+n.toFixed(4);

// ---------- Sparkline helper ----------
function sparkline(canvas, data, color, up) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width = 90, h = canvas.height = 34;
  ctx.clearRect(0,0,w,h);
  const min = Math.min(...data), max = Math.max(...data), rng = (max-min)||1;
  ctx.beginPath();
  data.forEach((v,i) => {
    const x = (i/(data.length-1))*w;
    const y = h - ((v-min)/rng)*(h-6) - 3;
    i ? ctx.lineTo(x,y) : ctx.moveTo(x,y);
  });
  ctx.strokeStyle = up ? '#22C55E' : '#EF4444';
  ctx.lineWidth = 1.8; ctx.stroke();
}
function genSpark(base, up){
  const arr=[]; let v=base;
  for(let i=0;i<20;i++){ v += (Math.random()-(up?0.42:0.58))*base*0.02; arr.push(v); }
  return arr;
}

// ---------- Market table ----------
function renderMarket() {
  const body = document.getElementById('marketBody');
  body.innerHTML = market.map((m,i) => `
    <tr>
      <td><div class="coin-cell">
        <div class="coin-ic" style="background:${m.col}22;color:${m.col}">${m.s.slice(0,2)}</div>
        <div><div class="nm">${m.n}</div><div class="tk">${m.s}</div></div>
      </div></td>
      <td>${fmt(m.p)}</td>
      <td class="chg ${m.c>=0?'up':'down'}">${m.c>=0?'▲':'▼'} ${Math.abs(m.c).toFixed(1)}%</td>
      <td><canvas class="spark" id="sp${i}"></canvas></td>
      <td><button class="mini-btn" onclick="quickBuy('${m.s}',${m.p})">Trade</button></td>
    </tr>`).join('');
  market.forEach((m,i) => sparkline(document.getElementById('sp'+i), genSpark(m.p, m.c>=0), m.col, m.c>=0));
}
renderMarket();

window.quickBuy = (sym, price) => {
  document.getElementById('tPrice').textContent = `1 ${sym} = ${fmt(price)}`;
  recalc();
  showToast(`Selected ${sym} @ ${fmt(price)}`);
};

// ---------- Price chart ----------
function genSeries(points, base, vol){
  const arr=[]; let v=base;
  for(let i=0;i<points;i++){ v += (Math.random()-0.48)*base*vol; arr.push(+v.toFixed(3)); }
  return arr;
}
const ranges = {
  '1D': { labels: Array.from({length:24},(_,i)=>i+'h'), data: genSeries(24,3.42,0.01) },
  '1W': { labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], data: genSeries(7,3.1,0.03) },
  '1M': { labels: Array.from({length:30},(_,i)=>i+1), data: genSeries(30,2.6,0.04) },
  '1Y': { labels: ['J','F','M','A','M','J','J','A','S','O','N','D'], data: genSeries(12,1.2,0.08) },
};

const pctx = document.getElementById('priceChart');
const grad = pctx.getContext('2d').createLinearGradient(0,0,0,300);
grad.addColorStop(0,'rgba(124,58,237,.45)'); grad.addColorStop(1,'rgba(34,211,238,0)');

let chart = new Chart(pctx, {
  type: 'line',
  data: {
    labels: ranges['1W'].labels,
    datasets: [{
      data: ranges['1W'].data, fill: true, backgroundColor: grad,
      borderColor: '#22D3EE', borderWidth: 2.5, tension: .38,
      pointRadius: 0, pointHoverRadius: 5, pointHoverBackgroundColor:'#fff'
    }]
  },
  options: {
    plugins: { legend:{display:false}, tooltip:{ mode:'index', intersect:false,
      callbacks:{ label: c=> ' $'+c.raw } } },
    scales: {
      x: { grid:{color:'rgba(148,130,255,.06)'}, ticks:{color:'#5B5B72'} },
      y: { grid:{color:'rgba(148,130,255,.06)'}, ticks:{color:'#5B5B72', callback:v=>'$'+v} }
    },
    interaction:{ mode:'index', intersect:false }
  }
});

document.getElementById('rangeTabs').addEventListener('click', e => {
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#rangeTabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const r = ranges[btn.dataset.r];
  chart.data.labels = r.labels; chart.data.datasets[0].data = r.data; chart.update();
});

// ---------- Trade panel ----------
let side = 'buy';
const znt = () => market[0].p;
function recalc() {
  const pay = parseFloat(document.getElementById('payAmt').value) || 0;
  const get = side==='buy' ? pay / znt() : pay * znt();
  document.getElementById('getAmt').value = get.toFixed(side==='buy'?2:2);
  document.getElementById('tPrice').textContent = `1 ZNT = ${fmt(znt())}`;
  const cur = document.querySelectorAll('.field .cur');
  cur[0].textContent = side==='buy' ? 'USDT' : 'ZNT';
  cur[1].textContent = side==='buy' ? 'ZNT' : 'USDT';
}
document.getElementById('payAmt').addEventListener('input', recalc);

document.getElementById('tabBuy').addEventListener('click', ()=>{
  side='buy'; toggleTabs(); document.getElementById('doTrade').textContent='Buy ZNT';
  document.getElementById('doTrade').className='btn btn-trade buy'; recalc();
});
document.getElementById('tabSell').addEventListener('click', ()=>{
  side='sell'; toggleTabs(); document.getElementById('doTrade').textContent='Sell ZNT';
  document.getElementById('doTrade').className='btn btn-trade sell'; recalc();
});
function toggleTabs(){
  document.getElementById('tabBuy').classList.toggle('active', side==='buy');
  document.getElementById('tabSell').classList.toggle('active', side==='sell');
}
document.getElementById('pctRow').addEventListener('click', e=>{
  const b=e.target.closest('button'); if(!b) return;
  const bal = side==='buy'? 5000 : 6420;
  document.getElementById('payAmt').value = (bal*b.dataset.p/100).toFixed(0); recalc();
});
document.getElementById('doTrade').addEventListener('click', ()=>{
  const get = document.getElementById('getAmt').value;
  showToast(`${side==='buy'?'Bought':'Sold'} ${get} ${side==='buy'?'ZNT':'USDT'} ✓`);
});

function showToast(msg){
  const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2600);
}
recalc();

// ---------- Live price movements ----------
setInterval(()=>{
  market.forEach(m=>{
    m.p = Math.max(0.001, m.p + (Math.random()-0.5)*m.p*0.006);
    m.c = +(m.c + (Math.random()-0.5)*0.2).toFixed(1);
  });
  renderMarket();
  document.getElementById('chartPrice').textContent = fmt(znt());
  recalc();
}, 4000);
