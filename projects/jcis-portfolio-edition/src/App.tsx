import { useMemo, useState } from 'react'

type View = 'overview' | 'campaigns' | 'discrepancy' | 'creative' | 'decision'
type CampaignStatus = 'winner' | 'review'

interface Campaign {
  name: string; status: CampaignStatus; spend: number; ctr: number;
  purchases: number; cpa: number; score: number; audience: string
}

const campaigns: Campaign[] = [
  { name:'Morning puffiness · Video 1', status:'winner', spend:842, ctr:1.92, purchases:7, cpa:120.29, score:78, audience:'Broad · Canada' },
  { name:'5-minute ritual · Video 2', status:'winner', spend:726, ctr:1.71, purchases:6, cpa:121, score:73, audience:'Active shoppers' },
  { name:'Before / after · Static', status:'review', spend:1196, ctr:1.08, purchases:4, cpa:299, score:41, audience:'Yoga + shoppers' },
  { name:'Self-care routine · Video 3', status:'review', spend:1384, ctr:.91, purchases:2, cpa:692, score:28, audience:'Walking + shoppers' },
]

const creatives = [
  { hook:'“I didn’t think it would work…”', type:'UGC video · 15 sec', ctr:'1.92%', orders:'7', bg:'linear-gradient(135deg,#215f62,#72b89f)', tag:'Best hook' },
  { hook:'“5 minutes a day = this”', type:'Demo video · 15 sec', ctr:'1.71%', orders:'6', bg:'linear-gradient(135deg,#6d4f7d,#da8c97)', tag:'Strong' },
  { hook:'“If your face feels puffy…”', type:'UGC video · 38 sec', ctr:'1.28%', orders:'4', bg:'linear-gradient(135deg,#aa6a3e,#efb66f)', tag:'Learning' },
  { hook:'“A calmer skincare ritual”', type:'Lifestyle image', ctr:'.86%', orders:'2', bg:'linear-gradient(135deg,#41596d,#8da1b1)', tag:'Pause' },
  { hook:'“Visible transformation”', type:'Before / after image', ctr:'1.08%', orders:'4', bg:'linear-gradient(135deg,#555942,#aebc76)', tag:'Review' },
  { hook:'“Seven modes. One ritual.”', type:'Product demo', ctr:'1.42%', orders:'3', bg:'linear-gradient(135deg,#914e5a,#e59b8e)', tag:'Retest' },
]

const nav: {id:View; label:string; icon:string}[] = [
  {id:'overview',label:'Overview',icon:'◫'}, {id:'campaigns',label:'Campaigns',icon:'⌁'},
  {id:'discrepancy',label:'Data discrepancy',icon:'⇄'}, {id:'creative',label:'Creative library',icon:'✦'},
  {id:'decision',label:'Decision center',icon:'◎'},
]

const titles: Record<View,string> = {
  overview:'Campaign overview', campaigns:'Campaign comparison', discrepancy:'Data discrepancy',
  creative:'Creative library', decision:'Decision center'
}

function SectionIntro({ kicker, title, copy, action }: {kicker:string; title:string; copy:string; action?:React.ReactNode}) {
  return <div className="hero-row"><div><p className="section-kicker">{kicker}</p><h2>{title}</h2><p className="subcopy">{copy}</p></div>{action}</div>
}

function Status({ status }: {status:CampaignStatus}) {
  return <span className={`status ${status}`}>{status === 'winner' ? 'Promising' : 'Review'}</span>
}

function CampaignTable({ rows=campaigns }: {rows?:Campaign[]}) {
  return <div className="table-wrap"><table><thead><tr><th>Campaign</th><th>Status</th><th>Spend</th><th>CTR</th><th>Purchases</th><th>CPA</th></tr></thead><tbody>
    {rows.map(c=><tr key={c.name}><td><strong>{c.name}</strong></td><td><Status status={c.status}/></td><td>${c.spend}</td><td>{c.ctr}%</td><td>{c.purchases}</td><td>${c.cpa.toFixed(2)}</td></tr>)}
  </tbody></table></div>
}

function Overview({ period, go }: {period:number; go:(v:View)=>void}) {
  const mult=period/30
  const metrics=[
    ['Ad spend',`$${Math.round(5024*mult).toLocaleString()}`,'+8.4%',true],
    ['Shopify purchases',String(Math.max(4,Math.round(26*mult))),'+4 verified',false],
    ['Ad-attributed',String(Math.max(3,Math.round(19*mult))),'7 unmatched',true],
    ['Average CTR','1.34%','Target 3%',true],['Verified CPA','$193.23','Needs reduction',true],
  ] as const
  const bars=[[72,56],[64,71],[80,60],[55,69],[82,76],[70,88]]
  return <>
    <SectionIntro kicker="Executive snapshot" title="Know what is working before spending more." copy="One decision layer for campaign performance, storefront signals and creative learning." action={<button className="primary" onClick={()=>go('decision')}>Review recommendation →</button>}/>
    <div className="metric-grid">{metrics.map(([label,value,delta,down])=><article className="metric" key={label}><span>{label}</span><strong>{value}</strong><small className={down?'down':''}>{delta}</small></article>)}</div>
    <div className="grid two-one">
      <article className="card chart-card"><div className="card-head"><div><p className="section-kicker">Performance</p><h3>Spend vs. attributed revenue</h3></div><span className="legend"><i className="spend"/>Spend <i className="revenue"/>Revenue</span></div><div className="chart" role="img" aria-label="Spend and revenue by week">{bars.map((v,i)=><div className="bar-group" key={i}><div className="bar spend" style={{height:`${v[0]}%`}}/><div className="bar revenue" style={{height:`${v[1]}%`}}/><label>W{i+1}</label></div>)}</div></article>
      <article className="card signal-card"><div className="card-head"><div><p className="section-kicker">Signal health</p><h3>Attribution confidence</h3></div><span className="pill warning">Needs review</span></div><div className="donut"><div><strong>61%</strong><span>confidence</span></div></div><p>Shopify reports more purchases than the ad platform. Use storefront orders as the source of truth.</p><button className="text-btn" onClick={()=>go('discrepancy')}>Inspect discrepancy →</button></article>
    </div>
    <article className="card table-card"><div className="card-head"><div><p className="section-kicker">Campaign pulse</p><h3>Where attention is needed</h3></div><button className="text-btn" onClick={()=>go('campaigns')}>View all campaigns →</button></div><CampaignTable rows={campaigns.slice(0,3)}/></article>
  </>
}

function Campaigns() {
  const [filter,setFilter]=useState<'all'|CampaignStatus>('all')
  const rows=useMemo(()=>filter==='all'?campaigns:campaigns.filter(c=>c.status===filter),[filter])
  return <><SectionIntro kicker="Campaign comparison" title="Compare performance without spreadsheet noise." copy="Sort the signals that matter and isolate the next optimization target." action={<div className="segmented">{(['all','winner','review'] as const).map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f==='all'?'All':f==='winner'?'Winners':'Review'}</button>)}</div>}/><div className="campaign-cards">{rows.map(c=><article className="campaign-card" key={c.name}><div className="title-row"><div><h3>{c.name}</h3><p>{c.audience}</p></div><span className={`pill ${c.status==='winner'?'neutral':'warning'}`}>{c.status==='winner'?'Promising':'Review'}</span></div><div className="stats-row"><div><span>Spend</span><strong>${c.spend}</strong></div><div><span>CTR</span><strong>{c.ctr}%</strong></div><div><span>Purchases</span><strong>{c.purchases}</strong></div><div><span>CPA</span><strong>${c.cpa.toFixed(0)}</strong></div></div><div className="progress"><i style={{width:`${c.score}%`}}/></div><p>Signal score {c.score}/100</p></article>)}</div></>
}

function Discrepancy() { return <>
  <SectionIntro kicker="Data discrepancy" title="Two platforms. One explainable truth." copy="Surface attribution gaps before they become budget decisions." action={<span className="pill warning">7 orders unmatched</span>}/>
  <div className="grid half"><article className="source-card shopify"><div className="source-icon">S</div><div><p>Shopify</p><h3>26 purchases</h3><span>Storefront source of truth</span></div></article><article className="source-card meta"><div className="source-icon">M</div><div><p>Ad platform</p><h3>19 purchases</h3><span>Attributed within reporting window</span></div></article></div>
  <article className="card reconciliation"><div className="card-head"><div><p className="section-kicker">Reconciliation map</p><h3>Where the gap may come from</h3></div></div><div className="cause-grid"><div><strong>4</strong><span>Delayed attribution</span><small>Orders placed after ad click</small></div><div><strong>2</strong><span>Cross-device journeys</span><small>Click and purchase on different devices</small></div><div><strong>1</strong><span>Tracking interruption</span><small>Consent or pixel event missing</small></div></div></article>
  <article className="insight"><span>JCIS insight</span><h3>Do not optimize against Meta purchases alone.</h3><p>Use Shopify orders for commercial truth and Meta signals for creative direction. Resolve event quality before increasing spend.</p></article>
  </> }

function Creative() {
  const [compact,setCompact]=useState(false)
  return <><SectionIntro kicker="Creative library" title="Turn every test into reusable knowledge." copy="Compare hooks, audiences and outcomes instead of starting from zero." action={<button className="secondary" onClick={()=>setCompact(v=>!v)}>{compact?'Grid view':'Compact view'}</button>}/><div className={`creative-grid ${compact?'compact':''}`}>{creatives.map(c=><article className="creative-card" key={c.hook}><div className="creative-visual" style={{background:c.bg}}><span>{c.hook}</span></div><div className="creative-body"><div className="title-row"><h3>{c.type}</h3><span className="pill neutral">{c.tag}</span></div><p>Reusable learning captured from the test.</p><div className="stats-row"><div><span>CTR</span><strong>{c.ctr}</strong></div><div><span>Orders</span><strong>{c.orders}</strong></div></div></div></article>)}</div></>
}

function Decision({ go, notify }: {go:(v:View)=>void;notify:()=>void}) { return <>
  <SectionIntro kicker="Decision center" title="A recommendation you can explain." copy="Evidence is separated from judgment so the owner keeps the final decision." action={<span className="pill neutral">Confidence: medium</span>}/>
  <article className="decision-hero"><div className="decision-orb">OPTIMIZE</div><div><p className="section-kicker">CURRENT RECOMMENDATION</p><h3>Keep the product, pause scaling, repair measurement.</h3><p>The product has generated verified demand, but acquisition economics and attribution confidence do not justify higher spend yet.</p><div className="decision-actions"><button className="primary" onClick={notify}>Accept 14-day plan</button><button className="secondary" onClick={()=>go('discrepancy')}>Review evidence</button></div></div></article>
  <div className="grid three"><article className="card evidence positive"><span>Evidence for continuing</span><strong>26 verified orders</strong><p>Real Shopify purchases confirm demand exists.</p></article><article className="card evidence caution"><span>Evidence for caution</span><strong>1–1.5% CTR</strong><p>Creative attention remains below the 3% working target.</p></article><article className="card evidence negative"><span>Evidence against scaling</span><strong>Weak efficiency</strong><p>Historical spend is too high relative to verified orders.</p></article></div>
  <article className="card plan"><div className="card-head"><div><p className="section-kicker">Next experiment</p><h3>14-day measurement repair plan</h3></div><span className="pill neutral">Owner approval required</span></div><ol><li><b>Validate events</b><span>Test checkout, purchase and campaign parameters end to end.</span></li><li><b>Run one controlled creative test</b><span>One offer, one audience, three hooks, fixed budget.</span></li><li><b>Use explicit gates</b><span>Continue only if CTR and verified CPA improve against the baseline.</span></li></ol></article>
  </> }

function CaseStudy({ close }:{close:()=>void}) { return <div className="modal-backdrop" onMouseDown={close}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="caseTitle" onMouseDown={e=>e.stopPropagation()}><button className="close" onClick={close} aria-label="Close">×</button><p className="section-kicker">PORTFOLIO CASE STUDY</p><h2 id="caseTitle">From fragmented data to an explainable decision.</h2><div className="case-grid"><div><span>Role</span><strong>Product designer & React developer</strong></div><div><span>Stack</span><strong>React, TypeScript, Vite, component architecture</strong></div><div><span>Problem</span><strong>Shopify and ad-platform data disagree</strong></div><div><span>Outcome</span><strong>Faster, evidence-led campaign decisions</strong></div></div><h3>Implementation proof</h3><p>Typed campaign data, reusable components, state-driven filters, responsive navigation, accessible semantics and interactive product states are implemented in React.</p><h3>Next validation step</h3><p>Test with five e-commerce operators and measure task success, time to identify the weakest campaign, interpretation errors and perceived confidence.</p></section></div> }

export default function App() {
  const [view,setView]=useState<View>('overview'); const [period,setPeriod]=useState(30)
  const [menu,setMenu]=useState(false); const [caseOpen,setCaseOpen]=useState(false); const [toast,setToast]=useState(false)
  const go=(v:View)=>{setView(v);setMenu(false);window.scrollTo({top:0,behavior:'smooth'})}
  const notify=()=>{setToast(true);window.setTimeout(()=>setToast(false),2800)}
  return <><a className="skip" href="#content">Skip to content</a><div className="shell"><aside className={`sidebar ${menu?'open':''}`}><div className="brand"><span className="brandmark">J</span><div><strong>JCIS</strong><small>React Portfolio Edition</small></div></div><nav aria-label="Primary navigation">{nav.map(n=><button key={n.id} className={`nav ${view===n.id?'active':''}`} onClick={()=>go(n.id)}><span>{n.icon}</span>{n.label}</button>)}</nav><div className="sidebar-foot"><div className="mini-status"><i/><span>Demo data connected</span></div><button className="about-btn" onClick={()=>setCaseOpen(true)}>View case study</button></div></aside><main id="content"><header className="topbar"><button className="menu" onClick={()=>setMenu(v=>!v)} aria-label="Open navigation">☰</button><div><p className="eyebrow">DEMO BEAUTY STORE</p><h1>{titles[view]}</h1></div><div className="top-actions"><label className="date-select"><span>Period</span><select value={period} onChange={e=>setPeriod(Number(e.target.value))}><option value="30">Last 30 days</option><option value="14">Last 14 days</option><option value="7">Last 7 days</option></select></label><div className="avatar" aria-label="Médard Kiteretse">MK</div></div></header><section className="view active">{view==='overview'&&<Overview period={period} go={go}/>} {view==='campaigns'&&<Campaigns/>} {view==='discrepancy'&&<Discrepancy/>} {view==='creative'&&<Creative/>} {view==='decision'&&<Decision go={go} notify={notify}/>}</section></main></div>{caseOpen&&<CaseStudy close={()=>setCaseOpen(false)}/>}<div className={`toast ${toast?'show':''}`} role="status" aria-live="polite">14-day plan saved to the decision log.</div></>
}
