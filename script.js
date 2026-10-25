(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var $=function(s){return document.querySelector(s)};
// marquee
var items=['Python','Cybersecurity','React','Machine Learning','Node.js','YOLO','Kali Linux','Flutter','Wireshark','Metasploit','OSINT','React Native'];
var h='';for(var k=0;k<2;k++)items.forEach(function(t){h+='<span>'+t+'</span>'});$('#mq').innerHTML=h;
// scramble name
function scr(el,txt,delay){var ch='ABCDEF0123456789#$%&*<>/';var i=0;if(rm){el.textContent=txt;return}
setTimeout(function(){var t=setInterval(function(){el.textContent=txt.split('').map(function(c,j){return j<i?c:ch[Math.random()*ch.length|0]}).join('');i+=.5;if(i>txt.length){el.textContent=txt;clearInterval(t)}},45)},delay)}
scr($('#n1'),'Sreevatsa',300);scr($('#n2'),'Rajesh',900);
// role typer
var roles=['Cybersecurity enthusiast','ML researcher','Full-stack developer'],ri=0,ci=0,del=false,re=$('#role');
(function tick(){var r=roles[ri];re.textContent=r.slice(0,ci);if(!del&&ci==r.length){del=true;return setTimeout(tick,1400)}
if(del&&ci==0){del=false;ri=(ri+1)%roles.length}ci+=del?-1:1;setTimeout(tick,del?35:70)})();
// reveal + counters
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-c]').forEach(count);if(e.target.id=='term')runTerm();io.unobserve(e.target)}})},{threshold:.18});
document.querySelectorAll('.rv').forEach(function(e,i){e.style.transitionDelay=(i%4)*70+'ms';io.observe(e)});
function count(el){var to=+el.dataset.c,s=el.dataset.s||'',st=performance.now();(function f(n){var p=Math.min((n-st)/1400,1),v=to*(1-Math.pow(1-p,3));el.textContent=Math.round(v)+s;if(p<1)requestAnimationFrame(f)})(st)}
// terminal
var term=$('#term'),started=false;
var lines=[['k','$ python port_scanner.py 192.168.1.10 --threads 64'],['g','Scanning 1-1024 across 64 threads...'],['o','[+] 22/tcp   open'],['o','[+] 80/tcp   open'],['o','[+] 443/tcp  open'],['g','Done: 3 open ports found.'],['k','$ python banner_grabber.py 192.168.1.10 22 80'],['o','22  → SSH-2.0-OpenSSH'],['o','80  → HTTP server detected'],['k','$ sudo python packet_sniffer.py'],['g','TCP 192.168.1.10:443 → 192.168.1.4:51822  len=1420'],['g','UDP 192.168.1.4:5353 → 224.0.0.251:5353  len=88'],['o','Capturing live traffic...']];
function runTerm(){if(started)return;started=true;var i=0;(function next(){if(i>=lines.length)return;var l=lines[i++],s=document.createElement('span');s.className=l[0];term.appendChild(s);var j=0,txt=l[1]+'\n',sp=l[0]=='k'?28:6;
(function ty(){s.textContent=txt.slice(0,++j);if(j<txt.length)setTimeout(ty,rm?0:sp);else setTimeout(next,rm?0:l[0]=='k'?350:180)})()})()}
io.observe(term.parentNode);term.parentNode.id='';term.id='term';
var tio=new IntersectionObserver(function(e){if(e[0].isIntersecting){runTerm();tio.disconnect()}},{threshold:.3});tio.observe(term);
// scroll progress + timeline
var bar=$('#bar'),tl=$('#tl'),tlp=$('#tlp');
function sc(){var d=document.documentElement,p=d.scrollTop/(d.scrollHeight-innerHeight);bar.style.width=(p*100)+'%';
var r=tl.getBoundingClientRect(),hgt=Math.max(0,Math.min(r.height-6,innerHeight*.6-r.top));tlp.style.height=hgt+'px'}
addEventListener('scroll',sc,{passive:true});sc();
// tilt cards
document.querySelectorAll('.card').forEach(function(c){if(rm)return;
c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(700px) rotateY('+x*10+'deg) rotateX('+(-y*10)+'deg) translateY(-4px)'});
c.addEventListener('mouseleave',function(){c.style.transform=''})});
// glow + network canvas
var g=$('#glow'),mx=innerWidth/2,my=innerHeight/2;
addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;g.style.transform='translate('+(mx-260)+'px,'+(my-260)+'px)'});
var cv=$('#net'),cx=cv.getContext('2d'),W,H,pts=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;var n=Math.min(70,W*H/20000|0);pts=[];for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4})}
rs();addEventListener('resize',rs);
function dr(){cx.clearRect(0,0,W,H);pts.forEach(function(p,i){if(!rm){p.x+=p.vx;p.y+=p.vy}if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
cx.fillStyle='rgba(124,196,255,.7)';cx.beginPath();cx.arc(p.x,p.y,1.8,0,6.3);cx.fill();
for(var j=i+1;j<pts.length;j++){var q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){cx.strokeStyle='rgba(124,196,255,'+(.18*(1-d/130))+')';cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}
var m=Math.hypot(p.x-mx,p.y-my);if(m<170){cx.strokeStyle='rgba(182,156,255,'+(.5*(1-m/170))+')';cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(mx,my);cx.stroke()}});
if(!rm)requestAnimationFrame(dr)}
dr();
})();
