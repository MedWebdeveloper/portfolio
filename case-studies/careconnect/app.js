/* ===== CareConnect — Babysitting App · interactive front-end demo ===== */
(function(){
  "use strict";

  var AV = {
    emma:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
    olivia:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
    grace:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80&auto=format&fit=crop",
    hannah:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&auto=format&fit=crop",
    maya:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80&auto=format&fit=crop",
    chloe:"https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&q=80&auto=format&fit=crop",
    p1:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&q=80&auto=format&fit=crop",
    p2:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&auto=format&fit=crop"
  };

  // ages
  var AGES = [
    {id:"newborn", em:"🍼", label:"Newborn"},
    {id:"toddler", em:"🧒", label:"Toddler"},
    {id:"preschool", em:"🎨", label:"Preschool"},
    {id:"school", em:"🎒", label:"School age"}
  ];

  // sitters
  var SITTERS = [
    { id:"s1", name:"Emma Wilson", ava:AV.emma, loc:"📍 2.1 km · Downtown", rate:22, stars:4.9, reviews:87,
      exp:"6 yrs", ages:["toddler","preschool","school"], badges:["ID verified","CPR"], fav:true,
      certs:[{i:"🩹",t:"First Aid"},{i:"❤️",t:"CPR certified"},{i:"🛡️",t:"Background check"}],
      about:"Warm, energetic and reliable sitter with 6 years of experience. I love arts & crafts, outdoor play and reading bedtime stories. Non-smoker, comfortable with pets.",
      tags:["Arts & crafts","Homework help","Meal prep"],
      reviewList:[
        {img:AV.p1,n:"Julie M.",s:"★★★★★",t:"Emma is amazing with our twins. Always on time and super caring!"},
        {img:AV.p2,n:"David R.",s:"★★★★★",t:"Kids ask for her every weekend. Highly recommend."}
      ]},
    { id:"s2", name:"Olivia Chen", ava:AV.olivia, loc:"📍 3.4 km · Westside", rate:26, stars:5.0, reviews:112,
      exp:"8 yrs", ages:["newborn","toddler"], badges:["ID verified","Nurse"], fav:false,
      certs:[{i:"🩺",t:"Registered Nurse"},{i:"🩹",t:"First Aid"},{i:"❤️",t:"CPR certified"}],
      about:"Registered pediatric nurse offering specialised newborn and infant care. Experienced with sleep routines, feeding schedules and gentle care.",
      tags:["Newborn care","Overnight","Sleep routine"],
      reviewList:[
        {img:AV.p2,n:"Amara O.",s:"★★★★★",t:"Trusted Olivia with our 3-month-old. Absolute professional."}
      ]},
    { id:"s3", name:"Grace Taylor", ava:AV.grace, loc:"📍 1.2 km · Central", rate:18, stars:4.7, reviews:54,
      exp:"3 yrs", ages:["preschool","school"], badges:["ID verified"], fav:false,
      certs:[{i:"🩹",t:"First Aid"},{i:"🛡️",t:"Background check"}],
      about:"Education student who makes learning fun. Great with homework help, board games and creative activities for school-age kids.",
      tags:["Homework help","Tutoring","Games"],
      reviewList:[
        {img:AV.p1,n:"Priya S.",s:"★★★★★",t:"Grace helped my son with math and he loves her!"}
      ]},
    { id:"s4", name:"Hannah Lee", ava:AV.hannah, loc:"📍 4.0 km · Northgate", rate:20, stars:4.8, reviews:63,
      exp:"5 yrs", ages:["toddler","preschool"], badges:["ID verified","CPR"], fav:false,
      certs:[{i:"🩹",t:"First Aid"},{i:"❤️",t:"CPR certified"},{i:"🛡️",t:"Background check"}],
      about:"Patient and playful sitter who loves music, dancing and imaginative play. Bilingual (English/French).",
      tags:["Music & dance","Bilingual","Meal prep"],
      reviewList:[
        {img:AV.p2,n:"Marc L.",s:"★★★★☆",t:"Very sweet with our daughter, great communication."}
      ]},
    { id:"s5", name:"Maya Rodriguez", ava:AV.maya, loc:"📍 2.8 km · Eastview", rate:24, stars:4.9, reviews:95,
      exp:"7 yrs", ages:["newborn","toddler","preschool"], badges:["ID verified","CPR"], fav:false,
      certs:[{i:"🩹",t:"First Aid"},{i:"❤️",t:"CPR certified"},{i:"👶",t:"Infant care"}],
      about:"Experienced nanny specialising in early childhood development. Calm, structured and full of fun activities.",
      tags:["Early learning","Newborn care","Outdoor play"],
      reviewList:[
        {img:AV.p1,n:"Nina K.",s:"★★★★★",t:"Maya is like family now. The kids adore her."}
      ]},
    { id:"s6", name:"Chloé Martin", ava:AV.chloe, loc:"📍 5.1 km · Riverside", rate:19, stars:4.6, reviews:41,
      exp:"4 yrs", ages:["preschool","school"], badges:["ID verified"], fav:false,
      certs:[{i:"🩹",t:"First Aid"},{i:"🛡️",t:"Background check"}],
      about:"Energetic sitter who loves sports and outdoor adventures. Perfect for active school-age children.",
      tags:["Sports","Outdoor play","Homework help"],
      reviewList:[
        {img:AV.p2,n:"Tom B.",s:"★★★★★",t:"My boys had a blast. Chloé keeps them active!"}
      ]}
  ];

  var MESSAGES = [
    { id:"s1", last:"Perfect, see you Saturday at 6pm! 😊", time:"2m", unread:true },
    { id:"s2", last:"Thank you! I'll bring the sleep schedule.", time:"1h", unread:true },
    { id:"s5", last:"The kids had so much fun today ❤️", time:"3d", unread:false }
  ];
  var CHATS = {
    s1:[{who:"them",t:"Hi Sophie! I'd love to babysit for you 😊"},{who:"me",t:"Great! Are you free Saturday evening?"},{who:"them",t:"Perfect, see you Saturday at 6pm! 😊"}],
    s2:[{who:"them",t:"Hello! I saw your request for newborn care."},{who:"me",t:"Yes, our baby is 3 months old."},{who:"them",t:"Thank you! I'll bring the sleep schedule."}],
    s5:[{who:"them",t:"The kids had so much fun today ❤️"}]
  };

  var BOOKINGS = [
    { id:"s1", when:"Sat, 6:00 PM · 4h", status:"confirmed" },
    { id:"s5", when:"Last Tue · 3h", status:"done" }
  ];

  var DAYS = [
    {d:"Fri",n:"12"},{d:"Sat",n:"13"},{d:"Sun",n:"14"},{d:"Mon",n:"15"},{d:"Tue",n:"16"},{d:"Wed",n:"17"}
  ];
  var SLOTS = ["Morning\n8:00 AM","Noon\n12:00 PM","Evening\n5:00 PM","Night\n8:00 PM"];
  var DURS = [{h:2,l:"2h"},{h:4,l:"4h"},{h:6,l:"6h"}];

  var state = { ageFilter:"all", current:null, saved:{}, chatFor:null,
                bkDay:1, bkSlot:2, bkDur:1 };
  SITTERS.forEach(function(s){ if(s.fav) state.saved[s.id]=true; });

  var $ = function(s,r){ return (r||document).querySelector(s); };

  function show(view){
    var vs = document.querySelectorAll(".view");
    for(var i=0;i<vs.length;i++){ vs[i].classList.toggle("active", vs[i].getAttribute("data-view")===view); }
    var tabMap = { home:"home", search:"search", bookings:"bookings", messages:"messages", profile:"profile" };
    var tabs = document.querySelectorAll(".tab");
    for(var j=0;j<tabs.length;j++){ tabs[j].classList.toggle("on", tabs[j].getAttribute("data-tab")===(tabMap[view]||"")); }
    var av = $(".view.active"); if(av) av.scrollTop=0;
  }

  // ---- age cats ----
  function renderAges(){
    var c = $("#ages"); if(!c) return;
    c.innerHTML = AGES.map(function(a){
      return '<div class="age'+(state.ageFilter===a.id?' on':'')+'" data-age="'+a.id+'"><div class="em">'+a.em+'</div><small>'+a.label+'</small></div>';
    }).join("");
  }

  // ---- filters ----
  var FILTERS = [{id:"all",l:"All"},{id:"newborn",l:"👶 Newborn"},{id:"toddler",l:"🧒 Toddler"},{id:"preschool",l:"🎨 Preschool"},{id:"school",l:"🎒 School"},{id:"cpr",l:"❤️ CPR"}];
  function renderFilters(){
    var c = $("#filters"); if(!c) return;
    c.innerHTML = FILTERS.map(function(f){
      return '<button class="chip'+(state.ageFilter===f.id?' on':'')+'" data-filter="'+f.id+'">'+f.l+'</button>';
    }).join("");
  }

  // ---- sitter card ----
  function sitterCard(s){
    return '<div class="sitter" data-sitter="'+s.id+'">'+
      '<img class="ava" src="'+s.ava+'" alt="'+s.name+'">'+
      '<div class="info">'+
        '<div class="top"><h4>'+s.name+'</h4><div class="rate">$'+s.rate+'<small>/hr</small></div></div>'+
        '<div class="meta"><span class="stars">★ <b>'+s.stars.toFixed(1)+'</b> ('+s.reviews+')</span><span>'+s.loc+'</span></div>'+
        '<div class="tags">'+s.tags.slice(0,3).map(function(t){return '<span>'+t+'</span>';}).join("")+'</div>'+
      '</div></div>';
  }
  function matches(s){
    if(state.ageFilter==="all") return true;
    if(state.ageFilter==="cpr") return s.badges.indexOf("CPR")>-1;
    return s.ages.indexOf(state.ageFilter)>-1;
  }
  function renderSitters(){
    var home = $("#homeSitters");
    if(home) home.innerHTML = SITTERS.slice(0,4).map(sitterCard).join("");
    var sc = $("#searchSitters");
    if(sc){
      var arr = SITTERS.filter(matches);
      sc.innerHTML = arr.length ? arr.map(sitterCard).join("")
        : '<p style="padding:24px 4px;color:var(--muted);text-align:center">No sitters match this filter.</p>';
    }
  }

  // ---- open sitter ----
  function openSitter(id){
    var s = SITTERS.filter(function(x){return x.id===id;})[0]; if(!s) return;
    state.current = s;
    $("#spAva").src = s.ava;
    $("#spName").textContent = s.name;
    $("#spLoc").textContent = s.loc;
    $("#spBadges").innerHTML = s.badges.map(function(b){return '<span>✅ '+b+'</span>';}).join("");
    $("#spRate").textContent = "$"+s.rate;
    $("#spStars").textContent = "★ "+s.stars.toFixed(1);
    $("#spReviews").textContent = s.reviews+" reviews";
    $("#spExp").textContent = s.exp;
    $("#spAbout").textContent = s.about;
    $("#spCerts").innerHTML = s.certs.map(function(c){return '<div class="c">'+c.i+' '+c.t+'</div>';}).join("");
    $("#spReviewList").innerHTML = s.reviewList.map(function(r){
      return '<div class="review"><div class="rh"><img src="'+r.img+'" alt=""><div><div class="rn">'+r.n+'</div><div class="rs">'+r.s+'</div></div></div><p>'+r.t+'</p></div>';
    }).join("");
    $("#favBtn").textContent = state.saved[s.id] ? "❤️" : "🤍";
    show("sitter");
  }

  function toggleFav(){
    var s = state.current; if(!s) return;
    state.saved[s.id] = !state.saved[s.id];
    $("#favBtn").textContent = state.saved[s.id] ? "❤️" : "🤍";
    toast(state.saved[s.id] ? "Added to favourites ❤️" : "Removed from favourites");
    renderFavs();
  }
  function renderFavs(){
    var c = $("#favList"); if(!c) return;
    var arr = SITTERS.filter(function(s){return state.saved[s.id];});
    c.innerHTML = arr.length ? arr.map(sitterCard).join("")
      : '<p style="padding:30px 16px;color:var(--muted);text-align:center">No favourites yet.<br>Tap the 🤍 on a sitter to save them.</p>';
  }

  // ---- booking ----
  function openBooking(){
    var s = state.current; if(!s) return;
    $("#bkAva").src = s.ava;
    $("#bkName").textContent = s.name;
    $("#bkRate").textContent = "$"+s.rate+"/hr · ★ "+s.stars.toFixed(1);
    $("#days").innerHTML = DAYS.map(function(d,i){
      return '<div class="day'+(i===state.bkDay?' on':'')+'" data-day="'+i+'"><small>'+d.d+'</small><b>'+d.n+'</b></div>';
    }).join("");
    $("#slots").innerHTML = SLOTS.map(function(sl,i){
      var parts = sl.split("\n");
      return '<div class="slot'+(i===state.bkSlot?' on':'')+'" data-slot="'+i+'">'+parts[0]+'<br><small style="color:var(--muted)">'+parts[1]+'</small></div>';
    }).join("");
    $("#durs").innerHTML = DURS.map(function(d,i){
      return '<div class="d'+(i===state.bkDur?' on':'')+'" data-dur="'+i+'">'+d.l+'</div>';
    }).join("");
    updateSummary();
    show("booking");
  }
  function updateSummary(){
    var s = state.current; if(!s) return;
    var day = DAYS[state.bkDay], slot = SLOTS[state.bkSlot].split("\n"), dur = DURS[state.bkDur];
    $("#sumDay").textContent = day.d+" "+day.n;
    $("#sumTime").textContent = slot[1]+" · "+dur.l;
    $("#sumRateLbl").textContent = "$"+s.rate+" × "+dur.h+"h";
    $("#sumRate").textContent = "$"+(s.rate*dur.h).toFixed(2);
    $("#sumTotal").textContent = "$"+(s.rate*dur.h+3).toFixed(2);
  }
  function confirmBooking(){
    var s = state.current;
    var day = DAYS[state.bkDay], slot = SLOTS[state.bkSlot].split("\n"), dur = DURS[state.bkDur];
    $("#doneDetail").textContent = s.name+" · "+day.d+" "+day.n+" · "+slot[1]+" · "+dur.l+" · $"+(s.rate*dur.h+3).toFixed(2);
    // add to bookings
    if(!BOOKINGS.some(function(b){return b.id===s.id && b.status==="pending";})){
      BOOKINGS.unshift({ id:s.id, when:day.d+" "+day.n+" · "+slot[1]+" · "+dur.l, status:"pending" });
    }
    $("#pfBookings").textContent = BOOKINGS.length;
    renderBookings();
    show("success");
  }

  function renderBookings(){
    var c = $("#blist"); if(!c) return;
    if(!BOOKINGS.length){ c.innerHTML = '<p style="padding:30px 16px;color:var(--muted);text-align:center">No bookings yet.</p>'; return; }
    c.innerHTML = BOOKINGS.map(function(b){
      var s = SITTERS.filter(function(x){return x.id===b.id;})[0];
      var lbl = b.status==="confirmed"?"Confirmed":(b.status==="pending"?"Pending":"Completed");
      return '<div class="bcard"><img src="'+s.ava+'" alt=""><div class="bi"><h4>'+s.name+'</h4><p>'+b.when+'</p></div><span class="status-pill '+b.status+'">'+lbl+'</span></div>';
    }).join("");
  }

  // ---- messages / chat ----
  function renderMessages(){
    var c = $("#mlist"); if(!c) return;
    c.innerHTML = MESSAGES.map(function(m){
      var s = SITTERS.filter(function(x){return x.id===m.id;})[0];
      return '<div class="mrow" data-chat="'+m.id+'"><img src="'+s.ava+'" alt=""><div class="mi"><div class="mt"><h4>'+s.name+'</h4><span class="time">'+m.time+'</span></div><p>'+m.last+'</p></div>'+(m.unread?'<span class="unread"></span>':'')+'</div>';
    }).join("");
  }
  function openChat(id){
    var s = SITTERS.filter(function(x){return x.id===id;})[0]; if(!s) return;
    state.chatFor = id;
    $("#chAva").src = s.ava;
    $("#chName").textContent = s.name;
    renderChat();
    show("chat");
  }
  function renderChat(){
    var body = $("#chatBody"); if(!body) return;
    var msgs = CHATS[state.chatFor] || [];
    body.innerHTML = msgs.map(function(m){ return '<div class="bub '+m.who+'">'+m.t+'</div>'; }).join("");
    body.scrollTop = body.scrollHeight;
  }
  function sendChat(){
    var input = $("#chatInput"); if(!input) return;
    var txt = input.value.trim(); if(!txt) return;
    if(!CHATS[state.chatFor]) CHATS[state.chatFor]=[];
    CHATS[state.chatFor].push({who:"me",t:txt});
    input.value = ""; renderChat();
    setTimeout(function(){
      var replies = ["Sounds good! 😊","Absolutely, I can do that.","Great, I'll be there on time!","Thank you for reaching out ❤️"];
      CHATS[state.chatFor].push({who:"them",t:replies[Math.floor(Math.random()*replies.length)]});
      renderChat();
    }, 900);
  }

  // ---- toast ----
  var toastT;
  function toast(msg){
    var t = $("#toast"); if(!t) return;
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(function(){ t.classList.remove("show"); }, 1900);
  }

  // ---- clock ----
  function clock(){
    var el = $("#clock"); if(!el) return;
    var d = new Date(), h=d.getHours(), m=d.getMinutes();
    el.textContent = h+":"+(m<10?"0":"")+m;
  }

  // ---- delegation ----
  document.addEventListener("click", function(e){
    var t = e.target.closest("[data-goto],[data-tab],[data-age],[data-filter],[data-sitter],[data-fav],[data-book],[data-openchat],[data-day],[data-slot],[data-dur],[data-confirm],[data-chat],[data-send],[data-toast]");
    if(!t) return;

    if(t.hasAttribute("data-goto")){ var v=t.getAttribute("data-goto"); if(v==="favs")renderFavs(); if(v==="bookings")renderBookings(); if(v==="messages")renderMessages(); show(v); return; }
    if(t.hasAttribute("data-tab")){ var tb=t.getAttribute("data-tab"); if(tb==="bookings")renderBookings(); if(tb==="messages")renderMessages(); show(tb); return; }
    if(t.hasAttribute("data-age")){ state.ageFilter=t.getAttribute("data-age"); renderAges(); renderFilters(); renderSitters(); show("search"); return; }
    if(t.hasAttribute("data-filter")){ state.ageFilter=t.getAttribute("data-filter"); renderFilters(); renderAges(); renderSitters(); return; }
    if(t.hasAttribute("data-sitter")){ openSitter(t.getAttribute("data-sitter")); return; }
    if(t.hasAttribute("data-fav")){ toggleFav(); return; }
    if(t.hasAttribute("data-book")){ openBooking(); return; }
    if(t.hasAttribute("data-openchat")){ openChat(state.current.id); return; }
    if(t.hasAttribute("data-day")){ state.bkDay=parseInt(t.getAttribute("data-day"),10); openBooking(); return; }
    if(t.hasAttribute("data-slot")){ state.bkSlot=parseInt(t.getAttribute("data-slot"),10); openBooking(); return; }
    if(t.hasAttribute("data-dur")){ state.bkDur=parseInt(t.getAttribute("data-dur"),10); openBooking(); return; }
    if(t.hasAttribute("data-confirm")){ confirmBooking(); return; }
    if(t.hasAttribute("data-chat")){ openChat(t.getAttribute("data-chat")); return; }
    if(t.hasAttribute("data-send")){ sendChat(); return; }
    if(t.hasAttribute("data-toast")){ toast(t.getAttribute("data-toast")); return; }
  });
  document.addEventListener("keydown", function(e){
    if(e.key==="Enter" && document.activeElement && document.activeElement.id==="chatInput"){ sendChat(); }
  });

  // ---- init ----
  renderAges(); renderFilters(); renderSitters(); renderMessages(); renderBookings(); renderFavs();
  clock(); setInterval(clock, 30000);
})();
