var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var bg=$('.burger');bg.onclick=function(){var o=$('.top .in').classList.toggle('open');bg.setAttribute('aria-expanded',o)};
$$('.menuimgs img,.gal img').forEach(function(i){i.onclick=function(){var d=document.createElement('div');d.className='lb';d.innerHTML='<img src="'+i.src+'" alt="">';d.onclick=function(){d.remove()};document.body.appendChild(d)}});
var cb=$('#chatBox');$('#chatBtn').onclick=function(){cb.hidden=false};$('#chatX').onclick=function(){cb.hidden=true};
$('#chatForm').onsubmit=function(ev){ev.preventDefault();var f=this,log=$('#chatLog');
log.insertAdjacentHTML('beforeend','<p class="me"></p>');log.lastChild.textContent=f.message.value;
fetch(BASE+'/api/chat.php',{method:'POST',body:new FormData(f)}).then(function(r){return r.json()}).then(function(j){
log.insertAdjacentHTML('beforeend','<p class="bot"></p>');log.lastChild.textContent=j.ok?'Thank you! We will contact you shortly.':'Could not send. Please call or use WhatsApp.';f.message.value='';log.scrollTop=1e5})
.catch(function(){log.insertAdjacentHTML('beforeend','<p class="bot">Network error. Please call us.</p>')})};
var nl=$('#nlForm');nl.onsubmit=function(e){e.preventDefault();var m=$('#nlMsg');
fetch(BASE+'/api/subscribe.php',{method:'POST',body:new FormData(nl)}).then(function(r){return r.json()}).then(function(j){m.textContent=j.ok?'Subscribed. Thank you!':'Please enter a valid email.';if(j.ok)nl.reset()})};
$$('.car').forEach(function(c){var t=$('.track',c),d=c.parentNode.querySelector('.dots');if(!t)return;
var cards=t.children,step=function(){return cards[0].offsetWidth+19};
$('.l',c).onclick=function(){t.scrollBy({left:-step(),behavior:'smooth'})};$('.r',c).onclick=function(){t.scrollBy({left:step(),behavior:'smooth'})};
if(d){d.innerHTML=$$('.card',t).map(function(){return'<i></i>'}).join('');var up=function(){var i=Math.round(t.scrollLeft/step());$$('i',d).forEach(function(x,k){x.className=k===i?'on':''})};t.addEventListener('scroll',up);up()}});
(function(){var h=$('.hs');if(!h)return;var sl=h.children,dots=$$('.hdots button'),i=0,tm;
function go(n){i=(n+sl.length)%sl.length;$$('.slide',h).forEach(function(s,k){s.classList.toggle('on',k===i)});dots.forEach(function(d,k){d.classList.toggle('on',k===i)})}
function auto(){clearInterval(tm);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)tm=setInterval(function(){go(i+1)},6500)}
$$('.arr2').forEach(function(b){b.onclick=function(){go(i+parseInt(b.dataset.d));auto()}});dots.forEach(function(d,k){d.onclick=function(){go(k);auto()}});
var hero=$('.hero');hero.onmouseenter=function(){clearInterval(tm)};hero.onmouseleave=auto;
var x0=null;h.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
h.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50){go(i+(dx<0?1:-1));auto()}x0=null});auto()})();
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});$$('.rv').forEach(function(x){io.observe(x)})}else{$$('.rv').forEach(function(x){x.classList.add('in')})}
