const dialog=document.querySelector('#navigator');
const answers=document.querySelector('#answers');
const nextBtn=document.querySelector('#nextBtn');
const backBtn=document.querySelector('#backBtn');
const stepLabel=document.querySelector('#stepLabel');
const title=document.querySelector('#dialogTitle');
const help=document.querySelector('#questionHelp');
const bar=document.querySelector('#wizardProgress i');
let step=0;const selections={};
const questions=[
 {title:'Where are you settling?',help:'This helps us recommend services available near you.',options:[['London','Southwestern Ontario'],['Toronto','Greater Toronto Area'],['Ottawa','Eastern Ontario'],['Another city','Search across Ontario']]},
 {title:'What support do you need first?',help:'Choose the priority that matters most right now.',options:[['Employment','Jobs and credentials'],['Housing','Renting and tenant support'],['Healthcare','OHIP and local care'],['Language','English or French classes']]},
 {title:'Which language do you prefer?',help:'Your plan and service information will use this language.',options:[['English','Continue in English'],['Français','Continuer en français'],['Both','Show bilingual options']]},
 {title:'When did you arrive in Ontario?',help:'Some programs depend on how recently you arrived.',options:[['Not yet','I am preparing'],['Under 6 months','Recently arrived'],['6–24 months','Settling in'],['Over 2 years','Building my next step']]}
];
function render(){const q=questions[step];stepLabel.textContent=`STEP ${step+1} OF ${questions.length}`;title.textContent=q.title;help.textContent=q.help;bar.style.width=`${(step+1)/questions.length*100}%`;answers.innerHTML='';q.options.forEach(([label,detail])=>{const b=document.createElement('button');b.type='button';b.className='answer'+(selections[step]===label?' selected':'');b.innerHTML=`${label}<small>${detail}</small>`;b.onclick=()=>{selections[step]=label;render()};answers.appendChild(b)});nextBtn.disabled=!selections[step];nextBtn.textContent=step===questions.length-1?'Create my plan →':'Continue →';backBtn.style.visibility=step?'visible':'hidden'}
function start(prefill){step=0;Object.keys(selections).forEach(k=>delete selections[k]);if(prefill){selections[1]=prefill;step=1}render();dialog.showModal()}
document.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>start()));
document.querySelectorAll('.service-card').forEach(b=>b.addEventListener('click',()=>start(b.dataset.need)));
nextBtn.onclick=()=>{if(step<questions.length-1){step++;render();return}showPlan()};backBtn.onclick=()=>{if(step){step--;render()}};
function showPlan(){stepLabel.textContent='YOUR PERSONALIZED PLAN';title.textContent=`Start with ${selections[1]} in ${selections[0]}`;help.textContent='We found services and next steps matched to your answers.';answers.innerHTML=`<div class="answer selected"><b>1. Connect with a settlement advisor</b><small>Free · Available in ${selections[2]}</small></div><div class="answer"><b>2. Prepare your documents</b><small>Identity, address and immigration documents</small></div><div class="answer"><b>3. Explore ${selections[1]} services</b><small>Trusted Ontario programs near ${selections[0]}</small></div><div class="answer"><b>✓ Plan ready to save</b><small>No account required for this prototype</small></div>`;nextBtn.textContent='Done';nextBtn.disabled=false;nextBtn.onclick=()=>dialog.close();backBtn.style.visibility='hidden';bar.style.width='100%'}
document.querySelector('#languageBtn').onclick=e=>{e.currentTarget.textContent=e.currentTarget.textContent==='FR'?'EN':'FR';e.currentTarget.setAttribute('aria-label','Language preference toggled')};
