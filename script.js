(function(){
var $=function(s){return document.querySelector(s)},rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
// boot sequence
var lp=$('#lp'),lb=$('#lbar'),big=$('#big'),ld=$('#load'),t0=Date.now(),dur=rm?300:2600;
var CH='ABCDEF0123456789#$%&*<>/';
function reveal(){document.body.classList.add('ready');if(rm)return;document.querySelectorAll('.hc h1').forEach(function(el,k){var fin=el.dataset.text,i=0;
setTimeout(function(){var t=setInterval(function(){var s=fin.split('').map(function(c,n){return n<i?c:CH[Math.random()*CH.length|0]}).join('');el.textContent=s;el.dataset.text=s;i+=.55;if(i>fin.length){el.textContent=fin;el.dataset.text=fin;clearInterval(t)}},38)},300+k*260)})}
function finish(){ld.classList.add('go');setTimeout(function(){ld.classList.add('done');setTimeout(reveal,rm?0:350);setTimeout(function(){ld.classList.add('gone');sbu()},1500)},rm?0:450)}
(function f(){var p=Math.min(1,(Date.now()-t0)/dur),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2,n=String(Math.floor(e*100)).padStart(3,'0');
lp.textContent=n+'%';big.textContent=n;lb.style.width=e*100+'%';
if(p<1)requestAnimationFrame(f);else finish()})();
// ticker
var items=[['','▲ PYTHON'],['a','● MIT MANIPAL'],['','◆ SITER NORWAY'],['','▲ REACT'],['a','● CYBERSECURITY'],['','◆ YOLO'],['','▲ NODE.JS'],['a','● ML RESEARCH'],['','◆ KALI LINUX'],['','▲ CLASS OF 2028'],['a','● OPEN TO WORK']],h='';
for(var k=0;k<2;k++)items.forEach(function(i){h+='<span class="'+i[0]+'">'+i[1]+'</span>'});$('#tk').innerHTML=h;
// cursor
var cd=$('#cd'),cr=$('#cr'),x=0,y=0,rx=0,ry=0;
addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY;cd.style.transform='translate('+x+'px,'+y+'px)'});
(function l(){rx+=(x-rx)*.18;ry+=(y-ry)*.18;cr.style.transform='translate('+rx+'px,'+ry+'px)';requestAnimationFrame(l)})();
document.querySelectorAll('a').forEach(function(a){a.addEventListener('mouseenter',function(){cr.classList.add('h')});a.addEventListener('mouseleave',function(){cr.classList.remove('h')})});
// reveal
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.lab').forEach(function(e){e.classList.add('r')});
document.querySelectorAll('.big').forEach(function(el){el.innerHTML=el.textContent.trim().split(/\s+/).map(function(w,i){return '<span class="w"><span style="transition-delay:'+(i*40)+'ms">'+w+'</span></span>'}).join(' ')});
var cnt=new Map();document.querySelectorAll('.r').forEach(function(e){var p=e.parentNode,i=cnt.get(p)||0;cnt.set(p,i+1);e.style.setProperty('--i',Math.min(i,6));io.observe(e)});
// custom scrollbar with a gradient thumb
var sb=$('#sb'),sbt=$('#sbt'),de=document.documentElement;
function sbm(){var H=de.scrollHeight,V=innerHeight,th=Math.max(48,V*V/H);return{H:H,V:V,th:th}}
function sbu(){var m=sbm(),top=m.H>m.V?(de.scrollTop/(m.H-m.V))*(m.V-m.th):0;sbt.style.height=m.th+'px';sbt.style.transform='translateY('+top+'px)';sbt.style.backgroundSize='100% '+m.V+'px';sbt.style.backgroundPosition='0 '+(-top)+'px'}
addEventListener('scroll',sbu,{passive:true});addEventListener('resize',sbu);sbu();
sbt.addEventListener('mousedown',function(e){e.preventDefault();var sy=e.clientY,s0=de.scrollTop,m=sbm();
function mv(ev){de.scrollTop=s0+(ev.clientY-sy)*(m.H-m.V)/(m.V-m.th)}
function up(){removeEventListener('mousemove',mv);removeEventListener('mouseup',up)}
addEventListener('mousemove',mv);addEventListener('mouseup',up)});
sb.addEventListener('mousedown',function(e){if(e.target!==sb)return;var m=sbm();goTo((e.clientY/m.V)*(m.H-m.V))});
// smooth scroll
var tg=scrollY,cur=scrollY,smooth=!rm&&matchMedia('(hover:hover)').matches;
function mxs(){return de.scrollHeight-innerHeight}
function goTo(y){y=Math.max(0,Math.min(mxs(),y));if(smooth)tg=y;else scrollTo(0,y)}
if(smooth){addEventListener('wheel',function(e){if(e.ctrlKey||!document.body.classList.contains('ready'))return;if(Math.abs(e.deltaX)>Math.abs(e.deltaY)&&e.target.closest&&e.target.closest('.trk'))return;e.preventDefault();tg=Math.max(0,Math.min(mxs(),tg+e.deltaY*(e.deltaMode==1?34:1)))},{passive:false});
addEventListener('scroll',function(){if(Math.abs(scrollY-cur)>2){cur=tg=scrollY}},{passive:true})}
document.querySelectorAll('nav a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var el=$(a.getAttribute('href'));if(!el)return;e.preventDefault();goTo(el.getBoundingClientRect().top+scrollY)})});

// skills track: drag to scroll
document.querySelectorAll('.trk').forEach(function(t){var d=0,sx=0,sl=0,mv=0;
t.addEventListener('mousedown',function(e){d=1;mv=0;sx=e.clientX;sl=t.scrollLeft});
addEventListener('mousemove',function(e){if(!d)return;var dx=e.clientX-sx;if(Math.abs(dx)>3){mv=1;t.classList.add('dg')}t.scrollLeft=sl-dx});
addEventListener('mouseup',function(){d=0;t.classList.remove('dg')})});
var mqs=[].slice.call(document.querySelectorAll('.mqs')).map(function(m){var it=m.dataset.t.split('|'),s=it.map(function(t){return t+' <em>/</em> '}).join('');s=s+s;var i=m.firstChild;i.innerHTML=s+s;return{m:m,i:i,d:+m.dataset.dir}});
var cv=$('#hcv'),cx=cv.getContext('2d'),hp=$('.hp'),W,H,dp=Math.min(devicePixelRatio||1,2),SY=['$','%','∑','∆','π','λ','∞','01','10','{ }','</>','0x','::','&&'],P=[],mx=0,my=0,smx=0,smy=0;
function rs(){W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dp;cv.height=H*dp;cx.setTransform(dp,0,0,dp,0,0);P=[];for(var i=0;i<(W<700?26:60);i++)P.push({x:Math.random()*W,y:Math.random()*H,v:.12+Math.random()*.35,s:Math.random()*6.28,d:.3+Math.random()*1.2,c:SY[Math.random()*SY.length|0],a:.1+Math.random()*.25,r:Math.random()<.14})}
rs();addEventListener('resize',rs);
addEventListener('mousemove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function tick(t){
if(smooth&&Math.abs(tg-cur)>.05){cur+=(tg-cur)*.085;if(Math.abs(tg-cur)<.5)cur=tg;scrollTo(0,cur)}
var y=scrollY,vh=innerHeight;
if(y<vh*1.1){var p=Math.min(1,y/(vh*.8));hp.style.transform='translate3d(0,'+(y*.35)+'px,0)';hp.style.opacity=1-p;cv.style.opacity=1-p*.9;
smx+=(mx-smx)*.05;smy+=(my-smy)*.05;cx.clearRect(0,0,W,H);cx.font='14px "JetBrains Mono",monospace';cx.textAlign='center';
for(var k=0;k<P.length;k++){var q=P[k];q.y-=q.v;if(q.y<-20){q.y=H+20;q.x=Math.random()*W}
cx.globalAlpha=q.a;cx.fillStyle=q.r?'#e8452c':'#f5f2e8';cx.fillText(q.c,q.x+Math.sin(t*.0004+q.s)*14+smx*60*q.d,q.y+smy*40*q.d)}cx.globalAlpha=1}
for(var n=0;n<mqs.length;n++){var o=mqs[n],r=o.m.getBoundingClientRect();if(r.bottom<-50||r.top>vh+50)continue;var w=o.i.scrollWidth/2,off=(y*.5)%w;o.i.style.transform='translate3d('+(o.d>0?-off:off-w)+'px,0,0)'}
requestAnimationFrame(tick)}
if(!rm)requestAnimationFrame(tick);
})();