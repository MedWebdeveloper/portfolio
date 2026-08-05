/* ===== Silhouette — Fitness App · interactive front-end demo ===== */
(function(){
  "use strict";

  var IMG = {
    fullbody:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80&auto=format&fit=crop",
    weightloss:"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=700&q=80&auto=format&fit=crop",
    abs:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80&auto=format&fit=crop",
    yoga:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80&auto=format&fit=crop",
    hiit:"https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=700&q=80&auto=format&fit=crop",
    stretch:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=700&q=80&auto=format&fit=crop",
    glutes:"https://images.unsplash.com/photo-1550345332-09e3ac987658?w=700&q=80&auto=format&fit=crop",
    arms:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&q=80&auto=format&fit=crop"
  };
  var EX = {
    jumping:"https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&q=80&auto=format&fit=crop",
    squat:"https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80&auto=format&fit=crop",
    plank:"https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=500&q=80&auto=format&fit=crop",
    lunge:"https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80&auto=format&fit=crop",
    burpee:"https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=500&q=80&auto=format&fit=crop",
    crunch:"https://images.unsplash.com/photo-1607914660217-754fdd90041d?w=500&q=80&auto=format&fit=crop",
    mountain:"https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&q=80&auto=format&fit=crop",
    stretch:"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=500&q=80&auto=format&fit=crop"
  };

  // ---- categories ----
  var CATS = ["All","Weight Loss","Full Body","Abs","Yoga","HIIT","Glutes","Stretch"];

  // ---- workout programs ----
  var PROGRAMS = [
    { id:"p1", cat:"Weight Loss", tag:"WEIGHT LOSS", title:"Full Body Workout",
      img:IMG.weightloss, dur:"28 min", kcal:"320", lvl:"Beginner",
      desc:"A fat-burning full-body circuit designed to boost your metabolism and tone every muscle. No equipment needed — just you, your mat and 28 minutes.",
      moves:[
        {n:"Jumping Jacks", m:"Warm up · full body", t:40, img:EX.jumping},
        {n:"Bodyweight Squats", m:"Legs & glutes", t:45, img:EX.squat},
        {n:"Plank Hold", m:"Core · abs", t:30, img:EX.plank},
        {n:"Reverse Lunges", m:"Legs · balance", t:45, img:EX.lunge},
        {n:"Mountain Climbers", m:"Cardio · core", t:40, img:EX.mountain},
        {n:"Cool-down Stretch", m:"Recovery", t:60, img:EX.stretch}
      ]},
    { id:"p2", cat:"HIIT", tag:"HIIT", title:"Fat Burn HIIT",
      img:IMG.hiit, dur:"22 min", kcal:"280", lvl:"Intermediate",
      desc:"High-intensity intervals that keep your heart rate up and torch calories long after you finish. Push hard, rest short, repeat.",
      moves:[
        {n:"High Knees", m:"Cardio", t:35, img:EX.jumping},
        {n:"Burpees", m:"Full body power", t:40, img:EX.burpee},
        {n:"Jump Squats", m:"Explosive legs", t:35, img:EX.squat},
        {n:"Mountain Climbers", m:"Core cardio", t:40, img:EX.mountain},
        {n:"Plank Jacks", m:"Core", t:35, img:EX.plank}
      ]},
    { id:"p3", cat:"Abs", tag:"ABS", title:"Flat Belly Core",
      img:IMG.abs, dur:"15 min", kcal:"150", lvl:"Beginner",
      desc:"A focused core routine to strengthen and sculpt your abs. Quality over speed — feel every rep.",
      moves:[
        {n:"Crunches", m:"Upper abs", t:40, img:EX.crunch},
        {n:"Leg Raises", m:"Lower abs", t:40, img:EX.crunch},
        {n:"Plank Hold", m:"Full core", t:45, img:EX.plank},
        {n:"Bicycle Crunches", m:"Obliques", t:40, img:EX.crunch}
      ]},
    { id:"p4", cat:"Glutes", tag:"GLUTES", title:"Booty Builder",
      img:IMG.glutes, dur:"25 min", kcal:"240", lvl:"Intermediate",
      desc:"Lift, shape and strengthen your glutes with this targeted lower-body session.",
      moves:[
        {n:"Glute Bridges", m:"Glutes", t:45, img:EX.squat},
        {n:"Reverse Lunges", m:"Glutes & legs", t:45, img:EX.lunge},
        {n:"Squat Pulses", m:"Glutes", t:40, img:EX.squat},
        {n:"Donkey Kicks", m:"Glutes", t:40, img:EX.lunge},
        {n:"Cool-down Stretch", m:"Recovery", t:50, img:EX.stretch}
      ]},
    { id:"p5", cat:"Yoga", tag:"YOGA", title:"Morning Flow Yoga",
      img:IMG.yoga, dur:"20 min", kcal:"120", lvl:"All levels",
      desc:"A gentle flow to wake up your body, improve flexibility and set a calm tone for your day.",
      moves:[
        {n:"Sun Salutation", m:"Flow", t:60, img:EX.stretch},
        {n:"Downward Dog", m:"Full body", t:45, img:EX.stretch},
        {n:"Warrior Pose", m:"Legs & balance", t:45, img:EX.stretch},
        {n:"Child's Pose", m:"Recovery", t:60, img:EX.stretch}
      ]},
    { id:"p6", cat:"Stretch", tag:"STRETCH", title:"Full Body Stretch",
      img:IMG.stretch, dur:"12 min", kcal:"70", lvl:"All levels",
      desc:"Release tension and improve mobility with this relaxing full-body stretch routine.",
      moves:[
        {n:"Neck & Shoulders", m:"Upper body", t:40, img:EX.stretch},
        {n:"Hamstring Stretch", m:"Legs", t:45, img:EX.stretch},
        {n:"Hip Opener", m:"Hips", t:45, img:EX.stretch},
        {n:"Spinal Twist", m:"Back", t:40, img:EX.stretch}
      ]}
  ];

  var TILES = [
    { id:"p3", label:"7-min Abs", img:IMG.abs },
    { id:"p2", label:"Quick HIIT", img:IMG.hiit },
    { id:"p6", label:"Stretch", img:IMG.stretch },
    { id:"p5", label:"Yoga", img:IMG.yoga }
  ];

  var WEEK = [ {d:"M",v:70}, {d:"T",v:95}, {d:"W",v:40}, {d:"T",v:100}, {d:"F",v:60}, {d:"S",v:85}, {d:"S",v:30} ];

  // ---- state ----
  var state = { activeCat:"All", currentProg:null, exIndex:0, playing:false, saved:{}, doneMoves:{} };
  var $ = function(s,r){ return (r||document).querySelector(s); };
  var $$ = function(s,r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); };

  // ---------- navigation ----------
  function show(view){
    $$(".view").forEach(function(v){ v.classList.toggle("active", v.getAttribute("data-view")===view); });
    var tabMap = { home:"home", workouts:"workouts", progress:"progress", profile:"profile" };
    $$(".tab").forEach(function(t){ t.classList.toggle("on", t.getAttribute("data-tab")===(tabMap[view]||"")); });
    var vw = $(".views"); if(vw) vw.scrollTop=0;
    var av = $(".view.active"); if(av) av.scrollTop=0;
  }

  // ---------- render categories ----------
  function renderCats(containerId){
    var c = document.getElementById(containerId); if(!c) return;
    c.innerHTML = CATS.map(function(cat){
      return '<button class="cat'+(cat===state.activeCat?' on':'')+'" data-cat="'+cat+'">'+cat+'</button>';
    }).join("");
  }

  // ---------- render program cards ----------
  function progCard(p){
    return '<div class="wk" data-prog="'+p.id+'">'+
      '<img src="'+p.img+'" alt="'+p.title+'"><div class="ov"></div>'+
      '<div class="wk-body">'+
        '<span class="tagline">'+p.tag+'</span>'+
        '<h4>'+p.title+'</h4>'+
        '<div class="meta"><span>⏱️ '+p.dur+'</span><span>🔥 '+p.kcal+' kcal</span><span>📊 '+p.lvl+'</span></div>'+
      '</div></div>';
  }
  function filtered(){
    if(state.activeCat==="All") return PROGRAMS;
    return PROGRAMS.filter(function(p){ return p.cat===state.activeCat; });
  }
  function renderPrograms(listId){
    var c = document.getElementById(listId); if(!c) return;
    var arr = filtered();
    c.innerHTML = arr.length ? arr.map(progCard).join("")
      : '<p style="padding:24px 4px;color:var(--muted);text-align:center">No programs in this category yet.</p>';
  }
  function renderTiles(){
    var c = $("#tiles"); if(!c) return;
    c.innerHTML = TILES.map(function(t){
      return '<div class="tile" data-prog="'+t.id+'"><img src="'+t.img+'" alt="'+t.label+'"><div class="ov"></div><span>'+t.label+'</span></div>';
    }).join("");
  }

  // ---------- open program ----------
  function openProgram(id){
    var p = PROGRAMS.filter(function(x){return x.id===id;})[0]; if(!p) return;
    state.currentProg = p; state.doneMoves = {};
    $("#prgImg").src = p.img;
    $("#prgTag").textContent = p.tag;
    $("#prgTitle").textContent = p.title;
    $("#prgDur").textContent = "⏱️ "+p.dur;
    $("#prgKcal").textContent = "🔥 "+p.kcal+" kcal";
    $("#prgLvl").textContent = "📊 "+p.lvl;
    $("#prgDesc").innerHTML = p.desc;
    $("#exCount").textContent = p.moves.length+" moves";
    $("#favBtn").textContent = state.saved[p.id] ? "❤️" : "🤍";
    $("#exList").innerHTML = p.moves.map(function(m,i){
      return '<div class="ex" data-exidx="'+i+'">'+
        '<span class="idx">'+(i+1)+'</span>'+
        '<img class="thumb" src="'+m.img+'" alt="'+m.n+'">'+
        '<div class="info"><h4>'+m.n+'</h4><div class="m">'+m.m+' · '+m.t+'s</div></div>'+
      '</div>';
    }).join("");
    show("program");
  }

  // ---------- player ----------
  var timer = null;
  function loadEx(i){
    var p = state.currentProg; if(!p) return;
    if(i<0) i=0; if(i>p.moves.length-1) i=p.moves.length-1;
    state.exIndex = i;
    var m = p.moves[i];
    state.remaining = m.t; state.total = m.t;
    $("#pStep").textContent = "Exercise "+(i+1)+" / "+p.moves.length;
    $("#pImg").src = m.img;
    $("#pName").textContent = m.n;
    $("#pSub").textContent = m.m;
    updateTime();
    $("#pPrev").disabled = (i===0);
    $("#pNext").disabled = (i===p.moves.length-1);
    var done = Object.keys(state.doneMoves).length;
    $("#pBar").style.width = (done/p.moves.length*100)+"%";
    $("#pDone").textContent = done+" done";
    $("#pLeft").textContent = (p.moves.length-done)+" to go";
  }
  function updateTime(){
    var mm = Math.floor(state.remaining/60), ss = state.remaining%60;
    $("#pTime").textContent = mm+":"+(ss<10?"0":"")+ss;
    var pct = state.total ? (1-state.remaining/state.total)*100 : 0;
    $("#timerRing").style.setProperty("--tpct", pct+"%");
  }
  function play(){
    if(state.playing){ pause(); return; }
    state.playing = true; $("#pPlay").textContent = "⏸";
    timer = setInterval(function(){
      state.remaining--;
      if(state.remaining<=0){
        state.doneMoves[state.exIndex] = true;
        clearInterval(timer); state.playing=false; $("#pPlay").textContent="▶";
        markDone();
        var p = state.currentProg;
        if(state.exIndex < p.moves.length-1){ loadEx(state.exIndex+1); toast("Great! Next exercise 💪"); }
        else { finishWorkout(); }
        return;
      }
      updateTime();
    }, 1000);
  }
  function pause(){ state.playing=false; $("#pPlay").textContent="▶"; if(timer) clearInterval(timer); }
  function markDone(){
    var done = Object.keys(state.doneMoves).length, tot = state.currentProg.moves.length;
    $("#pBar").style.width = (done/tot*100)+"%";
    $("#pDone").textContent = done+" done";
    $("#pLeft").textContent = (tot-done)+" to go";
  }
  function finishWorkout(){
    pause();
    var p = state.currentProg;
    $("#doneKcal").textContent = "🔥 "+p.kcal+" kcal burned · "+p.dur;
    show("success");
  }

  // ---------- progress bars ----------
  function renderWeek(){
    var c = $("#bars"); if(!c) return;
    c.innerHTML = WEEK.map(function(w){
      return '<div class="col"><div class="bh" style="height:'+w.v+'%"></div><small>'+w.d+'</small></div>';
    }).join("");
  }

  // ---------- saved / favs ----------
  function toggleFav(){
    var p = state.currentProg; if(!p) return;
    state.saved[p.id] = !state.saved[p.id];
    $("#favBtn").textContent = state.saved[p.id] ? "❤️" : "🤍";
    toast(state.saved[p.id] ? "Saved to your programs ❤️" : "Removed from saved");
    renderFavs();
  }
  function renderFavs(){
    var c = $("#favList"); if(!c) return;
    var ids = Object.keys(state.saved).filter(function(k){return state.saved[k];});
    if(!ids.length){ c.innerHTML = '<p style="padding:30px 16px;color:var(--muted);text-align:center">No saved programs yet.<br>Tap the 🤍 on a program to save it.</p>'; return; }
    c.innerHTML = PROGRAMS.filter(function(p){return state.saved[p.id];}).map(progCard).join("");
  }

  // ---------- toast ----------
  var toastT;
  function toast(msg){
    var t = $("#toast"); if(!t) return;
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(function(){ t.classList.remove("show"); }, 1900);
  }

  // ---------- clock ----------
  function clock(){
    var el = $("#clock"); if(!el) return;
    var d = new Date(), h=d.getHours(), m=d.getMinutes();
    el.textContent = h+":"+(m<10?"0":"")+m;
  }

  // ---------- global click delegation ----------
  document.addEventListener("click", function(e){
    var t = e.target.closest("[data-goto],[data-tab],[data-cat],[data-prog],[data-start],[data-pplay],[data-pprev],[data-pnext],[data-fav],[data-toast],[data-exidx]");
    if(!t) return;

    if(t.hasAttribute("data-goto")){ var v=t.getAttribute("data-goto"); if(v==="favs")renderFavs(); if(v==="player"){loadEx(0);} show(v); return; }
    if(t.hasAttribute("data-tab")){ show(t.getAttribute("data-tab")); return; }
    if(t.hasAttribute("data-cat")){
      state.activeCat = t.getAttribute("data-cat");
      renderCats("cats"); renderCats("cats2"); renderPrograms("wkList"); renderPrograms("wkList2");
      return;
    }
    if(t.hasAttribute("data-prog")){ openProgram(t.getAttribute("data-prog")); return; }
    if(t.hasAttribute("data-start")){ pause(); loadEx(0); show("player"); return; }
    if(t.hasAttribute("data-pplay")){ play(); return; }
    if(t.hasAttribute("data-pprev")){ pause(); loadEx(state.exIndex-1); return; }
    if(t.hasAttribute("data-pnext")){ pause(); loadEx(state.exIndex+1); return; }
    if(t.hasAttribute("data-fav")){ toggleFav(); return; }
    if(t.hasAttribute("data-exidx")){ pause(); loadEx(parseInt(t.getAttribute("data-exidx"),10)); show("player"); return; }
    if(t.hasAttribute("data-toast")){ toast(t.getAttribute("data-toast")); return; }
  });

  // ---------- init ----------
  renderCats("cats"); renderCats("cats2");
  renderPrograms("wkList"); renderPrograms("wkList2");
  renderTiles(); renderWeek(); renderFavs();
  clock(); setInterval(clock, 30000);
})();
