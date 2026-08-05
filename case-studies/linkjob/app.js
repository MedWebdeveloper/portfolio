/* ===== LinkJob — interactive demo ===== */
(function(){
  "use strict";

  /* ---- data ---- */
  var JOBS = [
    { id:"j1", cat:"design", logo:"N", color:"#0a66c2", title:"Senior UI/UX Designer",
      company:"Nova Labs", loc:"London, ON · Hybrid", salary:"$85k–$105k", type:"Full-time",
      posted:"2 days ago", applicants:"27", promoted:true, tags:["Figma","UI/UX","Design System"],
      about:"Nova Labs builds delightful SaaS products used by 200k+ teams worldwide. We're a design-led company looking for a senior designer to own our product experience end-to-end.",
      resp:["Lead end-to-end product design from wireframe to shipped UI","Maintain and grow our Figma design system","Partner with front-end engineers on hand-off","Run usability tests and iterate quickly"],
      req:["3+ years in product / UI-UX design","Strong Figma & prototyping skills","Solid grasp of responsive & accessible design","A portfolio that shows real shipped work"] },

    { id:"j2", cat:"dev", logo:"P", color:"#d63384", title:"Front-End Developer",
      company:"Pixelform", loc:"Remote · Canada", salary:"$78k–$96k", type:"Full-time",
      posted:"1 day ago", applicants:"64", promoted:false, tags:["HTML","CSS","JavaScript"],
      about:"Pixelform is a boutique studio crafting fast, beautiful websites for ambitious brands. Join a small, senior team that ships weekly.",
      resp:["Build responsive interfaces in HTML, CSS & vanilla JS","Turn Figma designs into pixel-perfect code","Optimise performance and accessibility","Collaborate closely with designers"],
      req:["2+ years front-end experience","Fluent in HTML, CSS, JavaScript","Eye for detail and clean code","Bonus: experience with animations"] },

    { id:"j3", cat:"dev", logo:"A", color:"#0a8f3c", title:"Junior Web Developer",
      company:"Atlas Digital", loc:"Windsor, ON · On-site", salary:"$55k–$68k", type:"Full-time",
      posted:"3 days ago", applicants:"41", promoted:false, tags:["JavaScript","React","Git"],
      about:"Atlas Digital helps local businesses grow online. Great place to start a career with mentorship from senior devs.",
      resp:["Support the team building client websites","Write and maintain clean JavaScript","Fix bugs and improve existing sites","Learn modern front-end tooling"],
      req:["Diploma in software / web development","Knowledge of JavaScript & the DOM","Willingness to learn fast","Good communication in English & French"] },

    { id:"j4", cat:"design", logo:"S", color:"#7b2ff7", title:"Product Designer (Mobile)",
      company:"Silhouette", loc:"Toronto, ON · Hybrid", salary:"$90k–$115k", type:"Full-time",
      posted:"5 days ago", applicants:"18", promoted:true, tags:["Mobile","Figma","Prototyping"],
      about:"Silhouette is a fast-growing health & fitness app with 1M+ downloads. We want a mobile-first designer to shape our next big features.",
      resp:["Design mobile flows for iOS & Android","Prototype and validate with real users","Keep our design language consistent","Collaborate with product & engineering"],
      req:["Mobile app design portfolio","Expert in Figma","Understanding of iOS & Material guidelines","Strong visual & interaction skills"] },

    { id:"j5", cat:"data", logo:"D", color:"#f0a500", title:"Data Analyst",
      company:"DataWave", loc:"Remote · North America", salary:"$72k–$90k", type:"Full-time",
      posted:"4 days ago", applicants:"53", promoted:false, tags:["SQL","Python","Dashboards"],
      about:"DataWave turns raw numbers into decisions for e-commerce brands. Curious minds welcome.",
      resp:["Build dashboards and reports","Write SQL queries against large datasets","Find insights that drive growth","Present findings to stakeholders"],
      req:["Strong SQL & spreadsheet skills","Python (pandas) a plus","Clear data storytelling","Attention to detail"] },

    { id:"j6", cat:"marketing", logo:"B", color:"#e8590c", title:"Digital Marketing Specialist",
      company:"BrightReach", loc:"Montréal, QC · Hybrid", salary:"$60k–$78k", type:"Full-time",
      posted:"6 days ago", applicants:"31", promoted:false, tags:["SEO","Social","Ads"],
      about:"BrightReach is a growth agency helping startups scale. Bilingual environment, big ambitions.",
      resp:["Run paid & organic campaigns","Own SEO and content calendar","Analyse and optimise funnels","Report on ROI monthly"],
      req:["2+ years digital marketing","Google Ads & Analytics","Bilingual FR / EN","Creative + analytical mindset"] },

    { id:"j7", cat:"dev", logo:"C", color:"#0a66c2", title:"UI Engineer (Contract)",
      company:"CloudNest", loc:"Remote · Contract", salary:"$45–$60 /hr", type:"Contract",
      posted:"today", applicants:"9", promoted:true, tags:["CSS","JavaScript","Animation"],
      about:"CloudNest needs a polished UI engineer for a 6-month product refresh. Design-minded devs will love this one.",
      resp:["Implement a fresh design system in code","Build smooth, accessible components","Collaborate with the design team daily","Ship incrementally"],
      req:["Advanced CSS & JavaScript","Experience with component libraries","Care about accessibility & motion","Available ~30h / week"] }
  ];

  var MESSAGES = [
    { id:"m1", name:"Sophie Tremblay", role:"Recruiter · Nova Labs", img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop", last:"Hi Médard! Loved your portfolio — are you open to a quick chat?", time:"2h", unread:true,
      thread:[["them","Hi Médard! Loved your portfolio 🙌"],["them","Are you open to a quick chat about our Senior UI/UX Designer role?"]] },
    { id:"m2", name:"James Okafor", role:"Hiring Manager · Pixelform", img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&auto=format&fit=crop", last:"Thanks for applying — we'll review and get back this week.", time:"1d", unread:false,
      thread:[["them","Thanks for applying to the Front-End Developer role."],["them","We'll review your application and get back this week 👍"]] },
    { id:"m3", name:"LinkJob Careers", role:"Job alert", img:"https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=120&q=80&auto=format&fit=crop", last:"5 new jobs match your search 'Front-End'.", time:"1d", unread:false,
      thread:[["them","5 new jobs match your saved search 'Front-End Developer' in London, ON."]] }
  ];

  var saved = {};      // id -> job
  var applied = {};    // id -> {job, status}
  var currentJob = null;
  var backTarget = "feed";
  var chatFor = null;

  var $ = function(s,ctx){ return (ctx||document).querySelector(s); };
  var $$ = function(s,ctx){ return Array.prototype.slice.call((ctx||document).querySelectorAll(s)); };

  /* ---- view navigation ---- */
  function show(name){
    $$(".view").forEach(function(v){ v.classList.toggle("active", v.getAttribute("data-view")===name); });
    var vw = $('.view[data-view="'+name+'"]');
    if(vw) vw.scrollTop = 0;
    // sync tabs
    $$(".tab").forEach(function(t){ t.classList.toggle("on", t.getAttribute("data-tab")===name); });
    // ensure related searches render
    if(name==="search") renderJobs($("#searchJobs"), filterJobs());
    if(name==="apps") renderApps();
  }

  /* ---- job card html ---- */
  function jobCard(j){
    var isSaved = !!saved[j.id];
    return '<div class="job" data-job="'+j.id+'">'+
      '<div class="logo" style="background:'+j.color+'">'+j.logo+'</div>'+
      '<div class="info">'+
        '<h4>'+j.title+'</h4>'+
        '<div class="co">'+j.company+'</div>'+
        '<div class="meta"><span>📍 '+j.loc+'</span><span>· '+j.type+'</span></div>'+
        '<div class="meta"><span>💰 '+j.salary+'</span><span>· '+j.applicants+' applicants</span></div>'+
        '<div class="tags">'+ j.tags.map(function(t){return '<b>'+t+'</b>';}).join('') +'</div>'+
        (j.promoted?'<div class="promoted">⭐ Promoted · '+j.posted+'</div>':'<div class="promoted">'+j.posted+'</div>')+
      '</div>'+
      '<button class="save'+(isSaved?' on':'')+'" data-save="'+j.id+'" title="Save">'+(isSaved?'🔖':'🏷️')+'</button>'+
    '</div>';
  }

  function renderJobs(container, list){
    if(!container) return;
    if(!list.length){ container.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px">No jobs match your search.</div>'; return; }
    container.innerHTML = list.map(jobCard).join('');
  }

  function filterJobs(){
    var f = activeFilter;
    var q = ($("#searchInput") && $("#searchInput").value || "").trim().toLowerCase();
    return JOBS.filter(function(j){
      var okF = (f==="all") || (f==="remote" ? /remote/i.test(j.loc) : j.cat===f);
      var okQ = !q || (j.title+" "+j.company+" "+j.loc+" "+j.tags.join(" ")).toLowerCase().indexOf(q)>-1;
      return okF && okQ;
    });
  }

  /* ---- job detail ---- */
  function openJob(id){
    var j = JOBS.filter(function(x){return x.id===id;})[0];
    if(!j) return;
    currentJob = j;
    var isSaved = !!saved[j.id];
    $("#jobDetail").innerHTML =
      '<div class="jd-head">'+
        '<div class="top">'+
          '<div class="logo" style="background:'+j.color+'">'+j.logo+'</div>'+
          '<div><h2>'+j.title+'</h2><div class="co">'+j.company+'</div>'+
          '<div class="meta">📍 '+j.loc+'<br>💰 '+j.salary+' · '+j.type+'<br>👥 '+j.applicants+' applicants · '+j.posted+'</div></div>'+
        '</div>'+
        '<div class="stat">'+ j.tags.map(function(t){return '<b>'+t+'</b>';}).join('') +'</div>'+
      '</div>'+
      '<div class="jd-cta">'+
        '<button class="btn btn-primary" id="applyBtn">Apply now</button>'+
        '<button class="btn btn-ghost" id="saveBtn">'+(isSaved?'🔖 Saved':'🔖 Save')+'</button>'+
      '</div>'+
      '<div class="jd-body">'+
        '<h5>About the company</h5><p>'+j.about+'</p>'+
        '<h5>What you\u2019ll do</h5><ul>'+ j.resp.map(function(r){return '<li>'+r+'</li>';}).join('') +'</ul>'+
        '<h5>What we\u2019re looking for</h5><ul>'+ j.req.map(function(r){return '<li>'+r+'</li>';}).join('') +'</ul>'+
      '</div>';
    // wire the detail buttons
    $("#applyBtn").addEventListener("click", function(){ openApply(j); });
    $("#saveBtn").addEventListener("click", function(){ toggleSave(j.id); openJob(j.id); });
    show("detail");
  }

  /* ---- apply ---- */
  function openApply(j){
    backTarget = "detail";
    $("#applyTitle").textContent = j.title;
    $("#applySub").textContent = "Applying to "+j.company+" · "+j.loc;
    show("apply");
  }

  function submitApply(){
    if(!currentJob) return;
    applied[currentJob.id] = { job:currentJob, status:"sent" };
    // simulate a status change to "review" after a moment
    var jid = currentJob.id;
    setTimeout(function(){ if(applied[jid]) applied[jid].status="review"; }, 4000);
    $("#successMsg").textContent = "Your application to "+currentJob.title+" at "+currentJob.company+" has been submitted. "+currentJob.company+" will get back to you soon.";
    show("success");
  }

  /* ---- save ---- */
  function toggleSave(id){
    var j = JOBS.filter(function(x){return x.id===id;})[0];
    if(!j) return;
    if(saved[id]){ delete saved[id]; toast("Removed from saved"); }
    else { saved[id]=j; toast("Saved to your list 🔖"); }
    // refresh visible lists
    renderJobs($("#feedJobs"), JOBS);
    if($('.view[data-view="search"]').classList.contains("active")) renderJobs($("#searchJobs"), filterJobs());
  }

  /* ---- applications view ---- */
  function statusLabel(s){
    if(s==="review") return '<span class="status-pill review">Under review</span>';
    if(s==="viewed") return '<span class="status-pill viewed">Viewed</span>';
    return '<span class="status-pill sent">Sent</span>';
  }
  function renderApps(){
    var list = Object.keys(applied);
    var box = $("#appsList");
    if(!list.length){
      box.innerHTML = '<div style="padding:22px 16px;text-align:center;color:var(--muted);font-size:13px">You haven\u2019t applied yet.<br>Open a job and tap <b>Apply now</b>.</div>';
    } else {
      box.innerHTML = list.map(function(id){
        var a = applied[id], j=a.job;
        return '<div class="nrow"><div class="ni" style="background:'+j.color+'">'+j.logo+'</div>'+
          '<div class="nt"><p><b>'+j.title+'</b><br>'+j.company+' · '+j.loc+'</p>'+
          '<time>Applied just now</time></div>'+statusLabel(a.status)+'</div>';
      }).join('');
    }
    // saved
    var sv = Object.keys(saved);
    var sbox = $("#savedList");
    if(!sv.length){ sbox.innerHTML='<div style="padding:0 14px;color:var(--muted);font-size:13px">Tap the 🔖 on a job to save it here.</div>'; }
    else { renderJobs(sbox, sv.map(function(id){return saved[id];})); }
  }

  /* ---- messages ---- */
  function renderMessages(){
    $("#msgList").innerHTML = MESSAGES.map(function(m){
      return '<div class="mrow" data-chat="'+m.id+'">'+
        '<img src="'+m.img+'" alt="">'+
        '<div class="mc"><div class="nm"><b>'+m.name+'</b><time>'+m.time+'</time></div>'+
        '<p>'+m.last+'</p></div>'+
        (m.unread?'<span class="un"></span>':'')+
      '</div>';
    }).join('');
  }
  function openChat(id){
    var m = MESSAGES.filter(function(x){return x.id===id;})[0];
    if(!m) return;
    chatFor = m; m.unread=false;
    $("#chatName").textContent = m.name;
    var body = $("#chatBody");
    body.innerHTML = m.thread.map(function(t){ return '<div class="bub '+t[0]+'">'+t[1]+'</div>'; }).join('');
    show("chat");
    setTimeout(function(){ body.scrollTop = body.scrollHeight; },30);
  }
  function sendChat(){
    var inp = $("#chatInput"); var txt = inp.value.trim();
    if(!txt || !chatFor) return;
    var body = $("#chatBody");
    body.insertAdjacentHTML("beforeend",'<div class="bub me">'+escapeHtml(txt)+'</div>');
    chatFor.thread.push(["me",txt]);
    inp.value="";
    body.scrollTop = body.scrollHeight;
    // auto reply
    setTimeout(function(){
      var reply = "Great, thanks Médard! Let\u2019s set up a call this week. 📅";
      body.insertAdjacentHTML("beforeend",'<div class="bub them">'+reply+'</div>');
      chatFor.thread.push(["them",reply]);
      body.scrollTop = body.scrollHeight;
    }, 900);
  }

  function escapeHtml(s){ return s.replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }

  /* ---- toast ---- */
  var toastTimer;
  function toast(msg){
    var t=$("#toast"); t.textContent=msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer=setTimeout(function(){t.classList.remove("show");},1600);
  }

  /* ---- filters ---- */
  var activeFilter = "all";

  /* ---- clock ---- */
  function tick(){
    var d=new Date(), h=d.getHours(), m=d.getMinutes();
    $("#clock").textContent = h+":"+(m<10?"0"+m:m);
  }

  /* ---- events ---- */
  document.addEventListener("click", function(e){
    var t = e.target;

    var goto = t.closest && t.closest("[data-goto]");
    if(goto){ show(goto.getAttribute("data-goto")); return; }

    var back = t.closest && t.closest("[data-back]");
    if(back){ show(back.getAttribute("data-back")); return; }

    var tab = t.closest && t.closest(".tab");
    if(tab){ show(tab.getAttribute("data-tab")); return; }

    var save = t.closest && t.closest("[data-save]");
    if(save){ e.stopPropagation(); toggleSave(save.getAttribute("data-save")); return; }

    var job = t.closest && t.closest("[data-job]");
    if(job){ openJob(job.getAttribute("data-job")); return; }

    var chip = t.closest && t.closest(".chip");
    if(chip){
      $$(".chip").forEach(function(c){c.classList.remove("on");});
      chip.classList.add("on");
      activeFilter = chip.getAttribute("data-f");
      renderJobs($("#searchJobs"), filterJobs());
      return;
    }

    var chat = t.closest && t.closest("[data-chat]");
    if(chat){ openChat(chat.getAttribute("data-chat")); return; }

    if(t.id==="submitApply"){ submitApply(); return; }
    if(t.id==="chatSend"){ sendChat(); return; }
  });

  document.addEventListener("input", function(e){
    if(e.target.id==="searchInput"){ renderJobs($("#searchJobs"), filterJobs()); }
  });
  document.addEventListener("keydown", function(e){
    if(e.key==="Enter" && e.target.id==="chatInput"){ sendChat(); }
  });

  /* ---- init ---- */
  renderJobs($("#feedJobs"), JOBS);
  renderJobs($("#searchJobs"), JOBS);
  renderMessages();
  renderApps();
  tick(); setInterval(tick, 15000);

})();
