var x0=Object.defineProperty;var v0=(s,e,t)=>e in s?x0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ne=(s,e,t)=>v0(s,typeof e!="symbol"?e+"":e,t);function Zi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function fp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fr={duration:.5,overwrite:!1,delay:0},_h,fn,Lt,li=1e8,Et=1/li,oh=Math.PI*2,y0=oh/4,M0=0,dp=Math.sqrt,S0=Math.cos,b0=Math.sin,jt=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},$i=function(e){return typeof e=="number"},cl=function(e){return typeof e>"u"},Ui=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},xh=function(){return typeof window<"u"},el=function(e){return Ft(e)||jt(e)},pp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,ah=/(?:-?\.?\d|\.)+/gi,vh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ir=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yh=/[+-]=-?[.\d]+/,mp=/[^,'"\[\]\s]+/gi,w0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,Di,lh,Mh,$n={},sl={},gp,_p=function(e){return(sl=nr(e,$n))&&pn},hl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$o=function(e,t){return!t&&console.warn(e)},xp=function(e,t){return e&&($n[e]=t)&&sl&&(sl[e]=t)||$n},Jo=function(){return 0},T0={suppressEvents:!0,isStart:!0,kill:!1},tl={suppressEvents:!0,kill:!1},E0={suppressEvents:!0},Sh={},Ts=[],ch={},vp,kn={},eh={},rp=30,nl=[],bh="",wh=function(e){var t=e[0],n,i;if(Ui(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=nl.length;i--&&!nl[i].targetTest(t););n=nl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ah(e[i],n)))||e.splice(i,1);return e},Es=function(e){return e._gsap||wh(ci(e))[0]._gsap},Th=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():cl(n)&&e.getAttribute&&e.getAttribute(t)||n},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},sn=function(e){return Math.round(e*1e7)/1e7||0},sr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},A0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},rl=function(){var e=Ts.length,t=Ts.slice(0),n,i;for(ch={},Ts.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yp=function(e,t,n,i){Ts.length&&!fn&&rl(),e.render(t,n,i||fn&&t<0&&(e._initted||e._startAt)),Ts.length&&!fn&&rl()},Mp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(mp).length<2?t:jt(e)?e.trim():e},Sp=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},R0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},nr=function(e,t){for(var n in t)e[n]=t[n];return e},op=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ui(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ol=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qo=function(e){var t=e.parent||Dt,n=e.keyframes?R0(dn(e.keyframes)):hi;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},C0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bp=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ul=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},As=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},P0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hh=function(e,t,n,i){return e._startAt&&(fn?e._startAt.revert(tl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},I0=function s(e){return!e||e._ts&&s(e.parent)},ap=function(e){return e._repeat?Br(e._tTime,e=e.duration()+e._rDelay)*e:0},Br=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fl=function(e){return e._end=sn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},dl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=sn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fl(e),n._dirty||Qs(n,e)),e},wp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=al(e.rawTime(),t),(!t._dur||ea(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),Qs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Ni=function(e,t,n,i){return t.parent&&As(t),t._start=sn(($i(n)?n:n||e!==Dt?ai(e,n,t):e._time)+t._delay),t._end=sn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bp(e,t,"_first","_last",e._sort?"_start":0),uh(t)||(e._recent=t),i||wp(e,t),e._ts<0&&dl(e,e._tTime),e},Tp=function(e,t){return($n.ScrollTrigger||hl("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},Ep=function(e,t,n,i,r){if(Ph(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vp!==zn.frame)return Ts.push(e),e._lazy=[r,i],1},L0=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},uh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},D0=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&L0(e)&&!(!e._initted&&uh(e))||(e._ts<0||e._dp._ts<0)&&!uh(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=ea(0,e._tDur,t),h=Br(l,a),e._yoyo&&h&1&&(o=1-o),h!==Br(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||fn||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&Ep(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&hh(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&As(e,1),!n&&!fn&&(Kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},N0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},kr=function(e,t,n,i){var r=e._repeat,o=sn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:sn(o*(r+1)+e._rDelay*r):o,a>0&&!i&&dl(e,e._tTime=e._tDur*a),e.parent&&fl(e),n||Qs(e.parent,e),e},lp=function(e){return e instanceof cn?Qs(e):kr(e,e._dur)},U0={_start:0,endTime:Jo,totalDuration:Jo},ai=function s(e,t,n){var i=e.labels,r=e._recent||U0,o=e.duration()>=li?r.endTime(!1):e._dur,a,l,c;return jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Zo=function(e,t,n){var i=$i(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;o.immediateRender=Hn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Gt(t[0],o,t[r+1])},Rs=function(e,t){return e||e===0?t(e):t},ea=function(e,t,n){return n<e?e:n>t?t:n},hn=function(e,t){return!jt(e)||!(t=w0.exec(e))?"":t[1]},O0=function(e,t,n){return Rs(n,function(i){return ea(e,t,i)})},fh=[].slice,Ap=function(e,t){return e&&Ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ui(e[0]))&&!e.nodeType&&e!==Di},F0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return jt(i)&&!t||Ap(i,1)?(r=n).push.apply(r,ci(i)):n.push(i)})||n},ci=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):jt(e)&&!n&&(lh||!zr())?fh.call((t||Mh).querySelectorAll(e),0):dn(e)?F0(e,n):Ap(e)?fh.call(e,0):e?[e]:[]},dh=function(e){return e=ci(e)[0]||$o("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?$o("Invalid scope")||Mh.createElement("div"):e)}},Rp=function(e){return e.sort(function(){return .5-Math.random()})},Cp=function(e){if(Ft(e))return e;var t=Ui(e)?e:{each:e},n=er(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return jt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,v,M,x,A,E,w,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,li])[1],!S){for(w=-li;w<(w=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*h-.5:i%S,v=S===li?0:l?g*u/S-.5:i/S|0,w=0,C=li,E=0;E<g;E++)M=E%S-p,x=v-(E/S|0),m[E]=A=c?Math.abs(c==="y"?x:M):dp(M*M+x*x),A>w&&(w=A),A<C&&(C=A);i==="random"&&Rp(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=hn(t.amount||t.each)||0,n=n&&g<0?Bp(n):n}return g=(m[f]-m.min)/m.max||0,sn(m.b+(n?n(g):g)*m.v)+m.u}},ph=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=sn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+($i(n)?0:hn(n))}},Pp=function(e,t){var n=dn(e),i,r;return!n&&Ui(e)&&(i=n=e.radius||li,e.values?(e=ci(e.values),(r=!$i(e[0]))&&(i*=i)):e=ph(e.increment)),Rs(t,n?Ft(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=li,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,r||h===o||$i(o)?h:h+hn(o)}:ph(e))},Ip=function(e,t,n,i){return Rs(dn(e)?!t:n===!0?!!(n=0):!i,function(){return dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},B0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},k0=function(e,t){return function(n){return e(parseFloat(n))+(t||hn(n))}},z0=function(e,t,n){return Dp(e,t,0,1,n)},Lp=function(e,t,n){return Rs(n,function(i){return e[~~t(i)]})},H0=function s(e,t,n){var i=t-e;return dn(e)?Lp(e,s(0,e.length),t):Rs(n,function(r){return(i+(r-e)%i)%i+e})},V0=function s(e,t,n){var i=t-e,r=i*2;return dn(e)?Lp(e,s(0,e.length-1),t):Rs(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Hr=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?mp:ah),n+=e.substr(t,i-t)+Ip(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dp=function(e,t,n,i,r){var o=t-e,a=i-n;return Rs(r,function(l){return n+((l-e)/o*a||0)})},G0=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=jt(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(dn(e)&&!dn(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=t}else i||(e=nr(dn(e)?[]:{},e));if(!h){for(l in t)Rh.call(a,e,l,"get",t[l]);r=function(_){return Dh(_,a)||(o?e.p:e)}}}return Rs(n,r)},cp=function(e,t,n){var i=e.labels,r=li,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Kn=function(e,t,n){var i=e.vars,r=i[t],o=Lt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ts.length&&rl(),a&&(Lt=a),h=l?r.apply(c,l):r.call(c),Lt=o,h},Xo=function(e){return As(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&Kn(e,"onInterrupt"),e},Or,Np=[],Up=function(e){if(e)if(e=!e.name&&e.default||e,xh()||e.headless){var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Jo,render:Dh,add:Rh,kill:rx,modifier:sx,rawVars:0},o={targetTest:0,get:0,getSetter:pl,aliases:{},register:0};if(zr(),e!==i){if(kn[t])return;hi(i,hi(ol(e,r),o)),nr(i.prototype,nr(r,ol(e,o))),kn[i.prop=t]=i,e.targetTest&&(nl.push(i),Sh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xp(t,i),e.register&&e.register(pn,i,En)}else Np.push(e)},bt=255,Yo={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},th=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Op=function(e,t,n){var i=e?$i(e)?[e>>16,e>>8&bt,e&bt]:0:Yo.black,r,o,a,l,c,h,u,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Yo[e])i=Yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ah),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=th(l+1/3,r,o),i[1]=th(l,r,o),i[2]=th(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(vh),n&&i.length<4&&(i[3]=1),i}else i=e.match(ah)||Yo.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/bt,o=i[1]/bt,a=i[2]/bt,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Fp=function(e){var t=[],n=[],i=-1;return e.split(Ki).forEach(function(r){var o=r.match(ir)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},hp=function(e,t,n){var i="",r=(e+i).match(Ki),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=Op(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Fp(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ki,"1").split(ir),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Ki),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Ki=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Yo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),W0=/hsl[a]?\(/,Eh=function(e){var t=e.join(" "),n;if(Ki.lastIndex=0,Ki.test(t))return n=W0.test(t),e[1]=hp(e[1],n),e[0]=hp(e[0],n,Fp(e[1])),!0},jo,zn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,_=function g(m){var p=s()-i,v=m===!0,M,x,A,E;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,M=A-o,(M>0||v)&&(E=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,o+=M+(M>=r?4:r-M),x=1),v||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](A,f,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){gp&&(!lh&&xh()&&(Di=lh=window,Mh=Di.document||{},$n.gsap=pn,(Di.gsapVersions||(Di.gsapVersions=[])).push(pn.version),_p(sl||Di.GreenSockGlobals||!Di.gsap&&Di||{}),Np.forEach(Up)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},jo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),jo=0,c=Jo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,v){var M=p?function(x,A,E,w){m(x,A,E,w),u.remove(M)}:m;return u.remove(m),a[v?"unshift":"push"](M),zr(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),zr=function(){return!jo&&zn.wake()},lt={},X0=/^[\d.\-M][\d.\-,\s]/,Y0=/["']/g,q0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Y0,"").trim():+c,i=l.substr(a+1).trim();return t},Z0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},K0=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[q0(t[1])]:Z0(e).split(",").map(Mp)):lt._CE&&X0.test(e)?lt._CE("",e):n},Bp=function(e){return function(t){return 1-e(1-t)}},kp=function s(e,t){for(var n=e._first,i;n;)n instanceof cn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},er=function(e,t){return e&&(Ft(e)?e:lt[e]||K0(e))||t},rr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Tn(e,function(a){lt[a]=$n[a]=r,lt[o=a.toLowerCase()]=n;for(var l in r)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=r[l]}),r},zp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nh=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/oh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*b0((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:zp(a);return r=oh/r,l.config=function(c,h){return s(e,c,h)},l},ih=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:zp(n);return i.config=function(r){return s(e,r)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;rr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;rr("Elastic",nh("in"),nh("out"),nh());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};rr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);rr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});rr("Circ",function(s){return-(dp(1-s*s)-1)});rr("Sine",function(s){return s===1?1:-S0(s*y0)+1});rr("Back",ih("in"),ih("out"),ih());lt.SteppedEase=lt.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Et;return function(a){return((i*ea(0,o,a)|0)+r)*n}}};Fr.ease=lt["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return bh+=s+","+s+"Params,"});var Ah=function(e,t){this.id=M0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Th,this.set=t?t.getSetter:pl},Qo=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,kr(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),jo||zn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(zr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(dl(this,n),!r._dp||r.parent||wp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ap(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ap(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Br(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(ea(-Math.abs(this._delay),this._tDur,r),i!==!1),fl(this),P0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ni(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?al(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=E0);var i=fn;return fn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ai(this,n),Hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Hn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Et)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Ft(n)?n:Sp,a=function(){var c=i.then;i.then=null,Ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Xo(this)},s}();hi(Qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var cn=function(s){fp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Hn(n.sortChildren),Dt&&Ni(n.parent||Dt,Zi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Tp(Zi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Zo(0,arguments,this),this},t.from=function(i,r,o){return Zo(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Zo(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,qo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Gt(i,r,ai(this,o),1),this},t.call=function(i,r,o){return Ni(this,Gt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Gt(i,o,ai(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,qo(o).immediateRender=Hn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,qo(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:sn(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,v,M,x,A,E,w;if(this!==Dt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,M=this._ts,p=!M,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=sn(h%m),h===l?(g=this._repeat,f=c):(g=~~(h/m),g&&g===h/m&&(f=c,g--),f>c&&(f=c)),A=Br(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),E&&g&1&&(f=c-f,w=1),g!==A&&!this._lock){var C=E&&A&1,S=C===(E&&g&1);if(g<A&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(w?0:sn(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;kp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=N0(this,sn(a),sn(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!g&&(Kn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-Et);break}}d=_}else{d=this._last;for(var y=i<0?i:f;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,o||fn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=y?-Et:Et);break}}d=_}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Et)._zTime=f>=a?1:-1,this._ts))return this._start=x,fl(this),this.render(i,r,o);this._onUpdate&&!r&&Kn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&As(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Kn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if($i(r)||(r=ai(this,r,i)),!(i instanceof Qo)){if(dn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(jt(i))return this.addLabel(i,r);if(Ft(i))i=Gt.delayedCall(0,i);else return this}return this!==i?Ni(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Gt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(ul(this,i),i===this._recent&&(this._recent=this._last),Qs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=sn(zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ai(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Gt.delayedCall(0,r||Jo,o);return a.data="isPause",this._hasPause=1,Ni(this,a,ai(this,i))},t.removePause=function(i){var r=this._first;for(i=ai(this,i);r;)r._start===i&&r.data==="isPause"&&As(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ws!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ci(i),l=this._first,c=$i(r),h;l;)l instanceof Gt?A0(l._targets,a)&&(c?(!ws||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=ai(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Gt.to(o,hi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&kr(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,hi({startAt:{time:ai(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),cp(this,ai(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),cp(this,ai(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Qs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qs(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=li,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ni(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;kr(o,o===Dt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Dt._ts&&(yp(Dt,al(i,Dt)),vp=zn.frame),zn.frame>=rp){rp+=Vn.autoSleep||120;var r=Dt._first;if((!r||!r._ts)&&Vn.autoSleep&&zn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||zn.sleep()}}},e}(Qo);hi(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var $0=function(e,t,n,i,r,o,a){var l=new En(this._pt,e,t,0,1,Lh,null,r),c=0,h=0,u,f,d,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Hr(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match(Qc)||[];u=Qc.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?sr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Qc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(yh.test(i)||p)&&(l.e=0),this._pt=l,l},Rh=function(e,t,n,i,r,o,a,l,c,h){Ft(i)&&(i=i(r||0,e,o));var u=e[t],f=n!=="get"?n:Ft(u)?c?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Ft(u)?c?tx:Gp:Ih,_;if(jt(i)&&(~i.indexOf("random(")&&(i=Hr(i)),i.charAt(1)==="="&&(_=sr(f,i)+(hn(f)||0),(_||_===0)&&(i=_))),!h||f!==i||mh)return!isNaN(f*i)&&i!==""?(_=new En(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?ix:Wp,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&hl(t,i),$0.call(this,e,t,f,i,d,l||Vn.stringFilter,c))},J0=function(e,t,n,i,r){if(Ft(e)&&(e=Ko(e,r,t,n,i)),!Ui(e)||e.style&&e.nodeType||dn(e)||pp(e))return jt(e)?Ko(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Ko(e[a],r,t,n,i);return o},Ch=function(e,t,n,i,r,o){var a,l,c,h;if(kn[e]&&(a=new kn[e]).init(r,a.rawVars?t[e]:J0(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new En(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Or))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ws,mh,Ph=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!_h,x=e.timeline,A,E,w,C,S,y,P,U,B,H,q,X,K;if(x&&(!f||!r)&&(r="none"),e._ease=er(r,Fr.ease),e._yEase=u?Bp(er(u===!0?r:u,Fr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(U=m[0]?Es(m[0]).harness:0,X=U&&i[U.prop],A=ol(i,Sh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?tl:T0),g._lazy=0),o){if(As(e._startAt=Gt.set(m,hi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!a&&!d)&&e._startAt.revert(tl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),w=hi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Hn(l),immediateRender:a,stagger:0,parent:p},A),X&&(w[U.prop]=X),As(e._startAt=Gt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(tl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Hn(l)||l&&!_,E=0;E<m.length;E++){if(S=m[E],P=S._gsap||wh(m)[E]._gsap,e._ptLookup[E]=H={},ch[P.id]&&Ts.length&&rl(),q=v===m?E:v.indexOf(S),U&&(B=new U).init(S,X||A,e,q,v)!==!1&&(e._pt=C=new En(e._pt,S,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(G){H[G]=C}),B.priority&&(y=1)),!U||X)for(w in A)kn[w]&&(B=Ch(w,A,e,q,S,v))?B.priority&&(y=1):H[w]=C=Rh.call(e,S,w,"get",A[w],q,v,0,i.stringFilter);e._op&&e._op[E]&&e.kill(S,e._op[E]),M&&e._pt&&(ws=e,Dt.killTweensOf(S,H,e.globalTime(t)),K=!e.parent,ws=0),e._pt&&l&&(ch[P.id]=1)}y&&Nh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&x.render(li,!0,!0)},j0=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return mh=1,e.vars[t]="+=0",Ph(e,a),mh=0,l?$o(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Bt(n)+hn(u.e)),u.b&&(u.b=h.s+hn(u.b))},Q0=function(e,t){var n=e[0]?Es(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=nr({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ex=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(dn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Ko=function(e,t,n,i,r){return Ft(e)?e.call(t,n,i,r):jt(e)&&~e.indexOf("random(")?Hr(e):e},Hp=bh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vp={};Tn(Hp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Vp[s]=1});var Gt=function(s){fp(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:qo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||Dt,M=(dn(n)||pp(n)?$i(n[0]):"length"in i)?[n]:ci(n),x,A,E,w,C,S,y,P;if(a._targets=M.length?wh(M):$o("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||el(c)||el(h)){if(i=a.vars,x=a.timeline=new cn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:M}),x.kill(),x.parent=x._dp=Zi(a),x._start=0,f||el(c)||el(h)){if(w=M.length,y=f&&Cp(f),Ui(f))for(C in f)~Hp.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(A=0;A<w;A++)E=ol(i,Vp),E.stagger=0,p&&(E.yoyoEase=p),P&&nr(E,P),S=M[A],E.duration=+Ko(c,Zi(a),A,S,M),E.delay=(+Ko(h,Zi(a),A,S,M)||0)-a._delay,!f&&w===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(S,E,y?y(A,S,M):0),x._ease=lt.none;x.duration()?c=h=0:a.timeline=0}else if(_){qo(hi(x.vars.defaults,{ease:"none"})),x._ease=er(_.ease||i.ease||"none");var U=0,B,H,q;if(dn(_))_.forEach(function(X){return x.to(M,X,">")}),x.duration();else{E={};for(C in _)C==="ease"||C==="easeEach"||ex(C,_[C],E,_.easeEach);for(C in E)for(B=E[C].sort(function(X,K){return X.t-K.t}),U=0,A=0;A<B.length;A++)H=B[A],q={ease:H.e,duration:(H.t-(A?B[A-1].t:0))/100*c},q[C]=H.v,x.to(M,q,U),U+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!_h&&(ws=Zi(a),Dt.killTweensOf(M),ws=0),Ni(v,Zi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===sn(v._time)&&Hn(u)&&I0(Zi(a))&&v.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-h)||0)),m&&Tp(Zi(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Et&&!h?l:i<Et?0:i,f,d,_,g,m,p,v,M,x;if(!c)D0(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(f=sn(u%g),u===l?(_=this._repeat,f=c):(_=~~(u/g),_&&_===sn(u/g)&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=c-f),m=Br(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(M&&this._yEase&&kp(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(sn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ep(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!a&&!r&&!_&&(Kn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&hh(this,i,r,o),Kn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Kn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&hh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&As(this,1),!r&&!(h&&!a)&&(u||a||p)&&(Kn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){jo||zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ph(this,c),h=this._ease(c/this._dur),j0(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(dl(this,0),this.parent||bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Xo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ws&&ws.vars.overwrite!==!0)._first||Xo(this),this.parent&&o!==this.timeline.totalDuration()&&kr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ci(i):a,c=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!r||r==="all")&&C0(a,l))return r==="all"&&(this._pt=0),Xo(this);for(u=this._op=this._op||[],r!=="all"&&(jt(r)&&(g={},Tn(r,function(v){return g[v]=1}),r=g),r=Q0(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(u[p]=r,_=f,d={}):(d=u[p]=u[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ul(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&Xo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Zo(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Zo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Dt.killTweensOf(i,r,o)},e}(Qo);hi(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(s){Gt[s]=function(){var e=new cn,t=fh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ih=function(e,t,n){return e[t]=n},Gp=function(e,t,n){return e[t](n)},tx=function(e,t,n,i){return e[t](i.fp,n)},nx=function(e,t,n){return e.setAttribute(t,n)},pl=function(e,t){return Ft(e[t])?Gp:cl(e[t])&&e.setAttribute?nx:Ih},Wp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ix=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Dh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sx=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},rx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ul(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ox=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Nh=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},En=function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Wp,this.d=l||this,this.set=c||Ih,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ox,this.m=n,this.mt=r,this.tween=i},s}();Tn(bh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Sh[s]=1});$n.TweenMax=$n.TweenLite=Gt;$n.TimelineLite=$n.TimelineMax=cn;Dt=new cn({sortChildren:!1,defaults:Fr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Eh;var tr=[],il={},ax=[],up=0,lx=0,sh=function(e){return(il[e]||ax).map(function(t){return t()})},gh=function(){var e=Date.now(),t=[];e-up>2&&(sh("matchMediaInit"),tr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Di.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),sh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),up=e,sh("matchMedia"))},Xp=function(){function s(t,n){this.selector=n&&dh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lx++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ft(n)&&(r=i,i=n,n=Ft);var o=this,a=function(){var c=Lt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=dh(r)),Lt=o,u=i.apply(o,arguments),Ft(u)&&o._r.push(u),Lt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ft?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=tr.length;o--;)tr[o].id===this.id&&tr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),cx=function(){function s(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Ui(n)||(n={matches:n});var o=new Xp(0,r||this.scope),a=o.conditions={},l,c,h;Lt&&!o.selector&&(o.selector=Lt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Di.matchMedia(n[c]),l&&(tr.indexOf(o)<0&&tr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(gh):l.addEventListener("change",gh)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ll={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Up(i)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=ci(e)[0]);var r=Es(e||{}).get,o=n?Sp:Mp;return n==="native"&&(n=""),e&&(t?o((kn[t]&&kn[t].get||r)(e,t,n,i)):function(a,l,c){return o((kn[a]&&kn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var i=e.map(function(h){return pn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=kn[t],a=Es(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Or._pt=0,u.init(e,n?h+n:h,Or,0,[e]),u.render(1,u),Or._pt&&Dh(1,Or)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=pn.to(e,nr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=er(e.ease,Fr.ease)),op(Fr,e||{})},config:function(e){return op(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!$n[a]&&$o(t+" effect requires "+a+" plugin.")}),eh[t]=function(a,l,c){return n(ci(a),hi(l||{},r),c)},o&&(cn.prototype[t]=function(a,l,c){return this.add(eh[t](a,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=er(t)},parseEase:function(e,t){return arguments.length?er(e,t):lt},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new cn(e),i,r;for(n.smoothChildTiming=Hn(e.smoothChildTiming),Dt.remove(n),n._dp=0,n._time=n._tTime=Dt._time,i=Dt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]))&&Ni(n,i,i._start-i._delay),i=r;return Ni(Dt,n,0),n},context:function(e,t){return e?new Xp(e,t):Lt},matchMedia:function(e){return new cx(e)},matchMediaRefresh:function(){return tr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||gh()},addEventListener:function(e,t){var n=il[e]||(il[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=il[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:H0,wrapYoyo:V0,distribute:Cp,random:Ip,snap:Pp,normalize:z0,getUnit:hn,clamp:O0,splitColor:Op,toArray:ci,selector:dh,mapRange:Dp,pipe:B0,unitize:k0,interpolate:G0,shuffle:Rp},install:_p,effects:eh,ticker:zn,updateRoot:cn.updateRoot,plugins:kn,globalTimeline:Dt,core:{PropTween:En,globals:xp,Tween:Gt,Timeline:cn,Animation:Qo,getCache:Es,_removeLinkedListItem:ul,reverting:function(){return fn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return _h=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ll[s]=Gt[s]});zn.add(cn.updateRoot);Or=ll.to({},{duration:0});var hx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ux=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=hx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},rh=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(jt(r)&&(l={},Tn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}ux(a,r)}}}},pn=ll.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},rh("roundProps",ph),rh("modifiers"),rh("snap",Pp))||ll;Gt.version=cn.version=pn.version="3.12.5";gp=1;xh()&&zr();var fx=lt.Power0,dx=lt.Power1,px=lt.Power2,mx=lt.Power3,gx=lt.Power4,_x=lt.Linear,xx=lt.Quad,vx=lt.Cubic,yx=lt.Quart,Mx=lt.Quint,Sx=lt.Strong,bx=lt.Elastic,wx=lt.Back,Tx=lt.SteppedEase,Ex=lt.Bounce,Ax=lt.Sine,Rx=lt.Expo,Cx=lt.Circ;var Yp,Cs,Gr,Hh,cr,Px,qp,Vh,Ix=function(){return typeof window<"u"},ji={},lr=180/Math.PI,Wr=Math.PI/180,Vr=Math.atan2,Zp=1e8,Gh=/([A-Z])/g,Lx=/(left|right|width|margin|padding|x)/i,Dx=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ux=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ox=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Fx=function(e,t,n){return e.style[t]=n},Bx=function(e,t,n){return e.style.setProperty(t,n)},kx=function(e,t,n){return e._gsap[t]=n},zx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Hx=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Vx=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Nt="transform",Gn=Nt+"Origin",Gx=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in ji&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ji(i,a)}):this.tfm[e]=o.x?o[e]:Ji(i,e),e===Gn&&(this.tfm.zOrigin=o.zOrigin);else return Oi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Nt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=Nt}(r||t)&&this.props.push(e,t,r[e])},im=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Wx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Gh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Vh(),(!r||!r.isStart)&&!n[Nt]&&(im(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sm=function(e,t){var n={target:e,props:[],revert:Wx,save:Gx};return e._gsap||pn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},rm,Bh=function(e,t){var n=Cs.createElementNS?Cs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cs.createElement(e);return n&&n.style?n:Cs.createElement(e)},Fi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Gh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Xr(t)||t,1)||""},Kp="O,Moz,ms,Ms,Webkit".split(","),Xr=function(e,t,n){var i=t||cr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Kp[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Kp[o]:"")+e},kh=function(){Ix()&&window.document&&(Yp=window,Cs=Yp.document,Gr=Cs.documentElement,cr=Bh("div")||{style:{}},Px=Bh("div"),Nt=Xr(Nt),Gn=Nt+"Origin",cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rm=!!Xr("perspective"),Vh=pn.core.reverting,Hh=1)},Uh=function s(e){var t=Bh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Gr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Gr.removeChild(t),this.style.cssText=r,o},$p=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},om=function(e){var t;try{t=e.getBBox()}catch{t=Uh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Uh||(t=Uh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+$p(e,["x","cx","x1"])||0,y:+$p(e,["y","cy","y1"])||0,width:0,height:0}:t},am=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&om(e))},hr=function(e,t){if(t){var n=e.style,i;t in ji&&t!==Gn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Gh,"-$1").toLowerCase())):n.removeAttribute(t)}},Ps=function(e,t,n,i,r,o){var a=new En(e._pt,t,n,0,1,o?nm:tm);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Jp={deg:1,rad:1,turn:1},Xx={grid:1,flex:1},Is=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=cr.style,l=Lx.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!r||Jp[i]||Jp[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&am(e),(d||o==="%")&&(ji[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],Bt(d?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Cs||!g.appendChild)&&(g=Cs.body),m=g._gsap,m&&d&&m.width&&l&&m.time===zn.time&&!m.uncache)return Bt(r/m.width*u);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,_=e[h],v?e.style[t]=v:hr(e,t)}else(d||o==="%")&&!Xx[Fi(g,"display")]&&(a.position=Fi(e,"position")),g===e&&(a.position="static"),g.appendChild(cr),_=cr[h],g.removeChild(cr),a.position="absolute";return l&&d&&(m=Es(g),m.time=zn.time,m.width=g[h]),Bt(f?_*r/u:_&&r?u/_*r:0)},Ji=function(e,t,n,i){var r;return Hh||kh(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ji[t]&&t!=="transform"?(r=ia(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:gl(Fi(e,Gn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ml[t]&&ml[t](e,t,n)||Fi(e,t)||Th(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Is(e,t,r,n)+n:r},Yx=function(e,t,n,i){if(!n||n==="none"){var r=Xr(t,e,1),o=r&&Fi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Fi(e,"borderTopColor"))}var a=new En(this._pt,e.style,t,0,1,Lh),l=0,c=0,h,u,f,d,_,g,m,p,v,M,x,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Fi(e,t)||i,g?e.style[t]=g:hr(e,t)),h=[n,i],Eh(h),n=h[0],i=h[1],f=n.match(ir)||[],A=i.match(ir)||[],A.length){for(;u=ir.exec(i);)m=u[0],v=i.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=sr(d,m)+x),p=parseFloat(m),M=m.substr((p+"").length),l=ir.lastIndex-M.length,M||(M=M||Vn.units[t]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(d=Is(e,t,g,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?nm:tm;return yh.test(i)&&(a.e=0),this._pt=a,a},jp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=jp[n]||n,t[1]=jp[i]||i,t.join(" ")},Zx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ji[a]&&(l=1,a=a==="transformOrigin"?Gn:Nt),hr(n,a);l&&(hr(n,Nt),o&&(o.svg&&n.removeAttribute("transform"),ia(n,1),o.uncache=1,im(i)))}},ml={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new En(e._pt,t,n,0,0,Zx);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},na=[1,0,0,1,0,0],lm={},cm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qp=function(e){var t=Fi(e,Nt);return cm(t)?na:t.substr(7).match(vh).map(Bt)},Wh=function(e,t){var n=e._gsap||Es(e),i=e.style,r=Qp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?na:r):(r===na&&!e.offsetParent&&e!==Gr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Gr.appendChild(e)),r=Qp(e),l?i.display=l:hr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Gr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},zh=function(e,t,n,i,r,o){var a=e._gsap,l=r||Wh(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],M=t.split(" "),x=parseFloat(M[0])||0,A=parseFloat(M[1])||0,E,w,C,S;n?l!==na&&(w=d*m-_*g)&&(C=x*(m/w)+A*(-g/w)+(g*v-m*p)/w,S=x*(-_/w)+A*(d/w)-(d*v-_*p)/w,x=C,A=S):(E=om(e),x=E.x+(~M[0].indexOf("%")?x/100*E.width:x),A=E.y+(~(M[1]||M[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(p=x-c,v=A-h,a.xOffset=u+(p*d+v*g)-p,a.yOffset=f+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Gn]="0px 0px",o&&(Ps(o,a,"xOrigin",c,x),Ps(o,a,"yOrigin",h,A),Ps(o,a,"xOffset",u,a.xOffset),Ps(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+A)},ia=function(e,t){var n=e._gsap||new Ah(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Fi(e,Gn)||"0",h,u,f,d,_,g,m,p,v,M,x,A,E,w,C,S,y,P,U,B,H,q,X,K,G,te,I,he,Le,et,Z,ee;return h=u=f=g=m=p=v=M=x=0,d=_=1,n.svg=!!(e.getCTM&&am(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),w=Wh(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),zh(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,E=n.yOrigin||0,w!==na&&(P=w[0],U=w[1],B=w[2],H=w[3],h=q=w[4],u=X=w[5],w.length===6?(d=Math.sqrt(P*P+U*U),_=Math.sqrt(H*H+B*B),g=P||U?Vr(U,P)*lr:0,v=B||H?Vr(B,H)*lr+g:0,v&&(_*=Math.abs(Math.cos(v*Wr))),n.svg&&(h-=A-(A*P+E*B),u-=E-(A*U+E*H))):(ee=w[6],et=w[7],I=w[8],he=w[9],Le=w[10],Z=w[11],h=w[12],u=w[13],f=w[14],C=Vr(ee,Le),m=C*lr,C&&(S=Math.cos(-C),y=Math.sin(-C),K=q*S+I*y,G=X*S+he*y,te=ee*S+Le*y,I=q*-y+I*S,he=X*-y+he*S,Le=ee*-y+Le*S,Z=et*-y+Z*S,q=K,X=G,ee=te),C=Vr(-B,Le),p=C*lr,C&&(S=Math.cos(-C),y=Math.sin(-C),K=P*S-I*y,G=U*S-he*y,te=B*S-Le*y,Z=H*y+Z*S,P=K,U=G,B=te),C=Vr(U,P),g=C*lr,C&&(S=Math.cos(C),y=Math.sin(C),K=P*S+U*y,G=q*S+X*y,U=U*S-P*y,X=X*S-q*y,P=K,q=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Bt(Math.sqrt(P*P+U*U+B*B)),_=Bt(Math.sqrt(X*X+ee*ee)),C=Vr(q,X),v=Math.abs(C)>2e-4?C*lr:0,x=Z?1/(Z<0?-Z:Z):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cm(Fi(e,Nt)),K&&e.setAttribute("transform",K))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(d*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Bt(d),n.scaleY=Bt(_),n.rotation=Bt(g)+a,n.rotationX=Bt(m)+a,n.rotationY=Bt(p)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=gl(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?$x:rm?hm:Kx,n.uncache=0,n},gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Oh=function(e,t,n){var i=hn(t);return Bt(parseFloat(t)+parseFloat(Is(e,"x",n+"px",i)))+i},Kx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,hm(e,t)},or="0deg",ta="0px",ar=") ",hm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,M=n.zOrigin,x="",A=p==="auto"&&e&&e!==1||p===!0;if(M&&(u!==or||h!==or)){var E=parseFloat(h)*Wr,w=Math.sin(E),C=Math.cos(E),S;E=parseFloat(u)*Wr,S=Math.cos(E),o=Oh(v,o,w*S*-M),a=Oh(v,a,-Math.sin(E)*-M),l=Oh(v,l,C*S*-M+M)}m!==ta&&(x+="perspective("+m+ar),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(A||o!==ta||a!==ta||l!==ta)&&(x+=l!==ta||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ar),c!==or&&(x+="rotate("+c+ar),h!==or&&(x+="rotateY("+h+ar),u!==or&&(x+="rotateX("+u+ar),(f!==or||d!==or)&&(x+="skew("+f+", "+d+ar),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ar),v.style[Nt]=x||"translate(0, 0)"},$x=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,M=parseFloat(o),x=parseFloat(a),A,E,w,C,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Wr,c*=Wr,A=Math.cos(l)*u,E=Math.sin(l)*u,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=Wr,S=Math.tan(c-h),S=Math.sqrt(1+S*S),w*=S,C*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),A*=S,E*=S)),A=Bt(A),E=Bt(E),w=Bt(w),C=Bt(C)):(A=u,C=f,E=w=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=Is(d,"x",o,"px"),x=Is(d,"y",a,"px")),(_||g||m||p)&&(M=Bt(M+_-(_*A+g*w)+m),x=Bt(x+g-(_*E+g*C)+p)),(i||r)&&(S=d.getBBox(),M=Bt(M+i/100*S.width),x=Bt(x+r/100*S.height)),S="matrix("+A+","+E+","+w+","+C+","+M+","+x+")",d.setAttribute("transform",S),v&&(d.style[Nt]=S)},Jx=function(e,t,n,i,r){var o=360,a=jt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?lr:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Zp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Zp)%o-~~(c/o)*o)),e._pt=f=new En(e._pt,t,n,i,c,Nx),f.e=h,f.u="deg",e._props.push(n),f},em=function(e,t){for(var n in t)e[n]=t[n];return e},jx=function(e,t,n){var i=em({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Nt]=t,a=ia(n,1),hr(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],o[Nt]=t,a=ia(n,1),o[Nt]=c);for(l in ji)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=hn(c),_=hn(h),u=d!==_?Is(n,l,c,_):parseFloat(c),f=parseFloat(h),e._pt=new En(e._pt,a,l,u,f-u,Fh),e._pt.u=_||0,e._props.push(l));em(a,i)};Tn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});ml[e>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(_){return Ji(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,u)}});var Xh={name:"css",register:kh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,_,g,m,p,v,M,x,A,E,w,C;Hh||kh(),this.styles=this.styles||sm(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(kn[g]&&Ch(g,t,n,i,e,r)))){if(d=typeof h,_=ml[g],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Hr(h)),_)_(this,e,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Ki.lastIndex=0,Ki.test(c)||(m=hn(c),p=hn(h)),p?m!==p&&(c=Is(e,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],jt(c)&&~c.indexOf("random(")&&(c=Hr(c)),hn(c+"")||c==="auto"||(c+=Vn.units[g]||hn(Ji(e,g))||""),(c+"").charAt(1)==="="&&(c=Ji(e,g))):c=Ji(e,g),f=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in Oi&&(g==="autoAlpha"&&(f===1&&Ji(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,a.visibility),Ps(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Oi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in ji,M){if(this.styles.save(g),x||(A=e._gsap,A.renderTransform&&!t.parseTransform||ia(e,t.parseTransform),E=t.smoothOrigin!==!1&&A.smooth,x=this._pt=new En(this._pt,a,Nt,0,1,A.renderTransform,A,0,-1),x.dep=1),g==="scale")this._pt=new En(this._pt,A,"scaleY",A.scaleY,(v?sr(A.scaleY,v+u):u)-A.scaleY||0,Fh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Gn,0,a[Gn]),h=qx(h),A.svg?zh(e,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Ps(this,A,"zOrigin",A.zOrigin,p),Ps(this,a,g,gl(c),gl(h)));continue}else if(g==="svgOrigin"){zh(e,h,1,E,0,this);continue}else if(g in lm){Jx(this,A,g,f,v?sr(f,v+h):h);continue}else if(g==="smoothOrigin"){Ps(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){jx(this,h,e);continue}}else g in a||(g=Xr(g)||g);if(M||(u||u===0)&&(f||f===0)&&!Dx.test(h)&&g in a)m=(c+"").substr((f+"").length),u||(u=0),p=hn(h)||(g in Vn.units?Vn.units[g]:m),m!==p&&(f=Is(e,g,c,p)),this._pt=new En(this._pt,M?A:a,g,f,(v?sr(f,v+u):u)-f,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Ox:Fh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ux);else if(g in a)Yx.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,i,r);else if(g!=="parseTransform"){hl(g,h);continue}M||(g in a?C.push(g,0,a[g]):C.push(g,1,c||e[g])),o.push(g)}}w&&Nh(this)},render:function(e,t){if(t.tween._time||!Vh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ji,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in ji&&t!==Gn&&(e._gsap.x||Ji(e,"x"))?n&&qp===n?t==="scale"?zx:kx:(qp=n||{})&&(t==="scale"?Hx:Vx):e.style&&!cl(e.style[t])?Fx:~t.indexOf("-")?Bx:pl(e,t)},core:{_removeProperty:hr,_getMatrix:Wh}};pn.utils.checkPrefix=Xr;pn.core.getStyleSaver=sm;(function(s,e,t,n){var i=Tn(s+","+e+","+t,function(r){ji[r]=1});Tn(e,function(r){Vn.units[r]="deg",lm[r]=1}),Oi[i[13]]=s+","+e,Tn(n,function(r){var o=r.split(":");Oi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Vn.units[s]="px"});pn.registerPlugin(Xh);var wt=pn.registerPlugin(Xh)||pn,vE=wt.core.Tween;function um(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Qx(s,e,t){return e&&um(s.prototype,e),t&&um(s,t),s}var un,vl,ev,Jn,Ls,Ds,qr,dm,ur,ra,pm,Qi,Mi,mm,gm=function(){return un||typeof window<"u"&&(un=window.gsap)&&un.registerPlugin&&un},_m=1,Yr=[],it=[],Si=[],oa=Date.now,Yh=function(e,t){return t},tv=function(){var e=ra.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,Si),it=n,Si=i,Yh=function(o,a){return t[o](a)}},ts=function(e,t){return~Si.indexOf(e)&&Si[Si.indexOf(e)+1][t]},aa=function(e){return!!~pm.indexOf(e)},Rn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},_l="scrollLeft",xl="scrollTop",qh=function(){return Qi&&Qi.isPressed||it.cache++},yl=function(e,t){var n=function i(r){if(r||r===0){_m&&(Jn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;r=i.v=Math.round(r)||(Qi&&Qi.iOS?1:0),e(r),i.cacheID=it.cache,o&&Yh("ss",r)}else(t||it.cache!==i.cacheID||Yh("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},mn={s:_l,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yl(function(s){return arguments.length?Jn.scrollTo(s,qt.sc()):Jn.pageXOffset||Ls[_l]||Ds[_l]||qr[_l]||0})},qt={s:xl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mn,sc:yl(function(s){return arguments.length?Jn.scrollTo(mn.sc(),s):Jn.pageYOffset||Ls[xl]||Ds[xl]||qr[xl]||0})},Cn=function(e,t){return(t&&t._ctx&&t._ctx.selector||un.utils.toArray)(e)[0]||(typeof e=="string"&&un.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},es=function(e,t){var n=t.s,i=t.sc;aa(e)&&(e=Ls.scrollingElement||Ds);var r=it.indexOf(e),o=i===qt.sc?1:2;!~r&&(r=it.push(e)-1),it[r+o]||Rn(e,"scroll",qh);var a=it[r+o],l=a||(it[r+o]=yl(ts(e,n),!0)||(aa(e)?i:yl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=un.getProperty(e,"scrollBehavior")==="smooth"),l},Ml=function(e,t,n){var i=e,r=e,o=oa(),a=o,l=t||50,c=Math.max(500,l*3),h=function(_,g){var m=oa();g||m-o>l?(r=i,i=_,a=o,o=m):n?i+=_:i=r+(_-r)/(m-a)*(o-a)},u=function(){r=i=n?0:i,a=o=0},f=function(_){var g=a,m=r,p=oa();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:u,getVelocity:f}},sa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},xm=function(){ra=un.core.globals().ScrollTrigger,ra&&ra.core&&tv()},vm=function(e){return un=e||gm(),!vl&&un&&typeof document<"u"&&document.body&&(Jn=window,Ls=document,Ds=Ls.documentElement,qr=Ls.body,pm=[Jn,Ls,Ds,qr],ev=un.utils.clamp,mm=un.core.context||function(){},ur="onpointerenter"in qr?"pointer":"mouse",dm=kt.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=kt.eventTypes=("ontouchstart"in Ds?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ds?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _m=0},500),xm(),vl=1),vl};mn.op=qt;it.cache=0;var kt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){vl||vm(un)||console.warn("Please gsap.registerPlugin(Observer)"),ra||xm();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,M=n.onPress,x=n.onRelease,A=n.onRight,E=n.onLeft,w=n.onUp,C=n.onDown,S=n.onChangeX,y=n.onChangeY,P=n.onChange,U=n.onToggleX,B=n.onToggleY,H=n.onHover,q=n.onHoverEnd,X=n.onMove,K=n.ignoreCheck,G=n.isNormalizer,te=n.onGestureStart,I=n.onGestureEnd,he=n.onWheel,Le=n.onEnable,et=n.onDisable,Z=n.onClick,ee=n.scrollSpeed,_e=n.capture,ne=n.allowClicks,be=n.lockAxis,Ee=n.onLockAxis;this.target=a=Cn(a)||Ds,this.vars=n,d&&(d=un.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,ee=ee||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(qr).lineHeight)||22);var He,tt,Ve,Pe,D,yt,Fe,k=this,we=0,at=0,Ae=n.passive||!h,R=es(a,mn),b=es(a,qt),W=R(),Q=b(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Mi[0]==="pointerdown",$=aa(a),ue=a.ownerDocument||Ls,ae=[0,0,0],pe=[0,0,0],Xe=0,ie=function(){return Xe=oa()},oe=function(Te,Ke){return(k.event=Te)&&d&&~d.indexOf(Te.target)||Ke&&j&&Te.pointerType!=="touch"||K&&K(Te,Ke)},De=function(){k._vx.reset(),k._vy.reset(),tt.pause(),u&&u(k)},Ie=function(){var Te=k.deltaX=fm(ae),Ke=k.deltaY=fm(pe),me=Math.abs(Te)>=i,Ge=Math.abs(Ke)>=i;P&&(me||Ge)&&P(k,Te,Ke,ae,pe),me&&(A&&k.deltaX>0&&A(k),E&&k.deltaX<0&&E(k),S&&S(k),U&&k.deltaX<0!=we<0&&U(k),we=k.deltaX,ae[0]=ae[1]=ae[2]=0),Ge&&(C&&k.deltaY>0&&C(k),w&&k.deltaY<0&&w(k),y&&y(k),B&&k.deltaY<0!=at<0&&B(k),at=k.deltaY,pe[0]=pe[1]=pe[2]=0),(Pe||Ve)&&(X&&X(k),Ve&&(v(k),Ve=!1),Pe=!1),yt&&!(yt=!1)&&Ee&&Ee(k),D&&(he(k),D=!1),He=0},ve=function(Te,Ke,me){ae[me]+=Te,pe[me]+=Ke,k._vx.update(Te),k._vy.update(Ke),c?He||(He=requestAnimationFrame(Ie)):Ie()},Ze=function(Te,Ke){be&&!Fe&&(k.axis=Fe=Math.abs(Te)>Math.abs(Ke)?"x":"y",yt=!0),Fe!=="y"&&(ae[2]+=Te,k._vx.update(Te,!0)),Fe!=="x"&&(pe[2]+=Ke,k._vy.update(Ke,!0)),c?He||(He=requestAnimationFrame(Ie)):Ie()},Oe=function(Te){if(!oe(Te,1)){Te=sa(Te,h);var Ke=Te.clientX,me=Te.clientY,Ge=Ke-k.x,Re=me-k.y,ze=k.isDragging;k.x=Ke,k.y=me,(ze||Math.abs(k.startX-Ke)>=r||Math.abs(k.startY-me)>=r)&&(v&&(Ve=!0),ze||(k.isDragging=!0),Ze(Ge,Re),ze||m&&m(k))}},ht=k.onPress=function(xe){oe(xe,1)||xe&&xe.button||(k.axis=Fe=null,tt.pause(),k.isPressed=!0,xe=sa(xe),we=at=0,k.startX=k.x=xe.clientX,k.startY=k.y=xe.clientY,k._vx.reset(),k._vy.reset(),Rn(G?a:ue,Mi[1],Oe,Ae,!0),k.deltaX=k.deltaY=0,M&&M(k))},L=k.onRelease=function(xe){if(!oe(xe,1)){An(G?a:ue,Mi[1],Oe,!0);var Te=!isNaN(k.y-k.startY),Ke=k.isDragging,me=Ke&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Ge=sa(xe);!me&&Te&&(k._vx.reset(),k._vy.reset(),h&&ne&&un.delayedCall(.08,function(){if(oa()-Xe>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(ue.createEvent){var Re=ue.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,Jn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Re)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,u&&Ke&&!G&&tt.restart(!0),p&&Ke&&p(k),x&&x(k,me)}},ce=function(Te){return Te.touches&&Te.touches.length>1&&(k.isGesturing=!0)&&te(Te,k.isDragging)},Y=function(){return(k.isGesturing=!1)||I(k)},J=function(Te){if(!oe(Te)){var Ke=R(),me=b();ve((Ke-W)*ee,(me-Q)*ee,1),W=Ke,Q=me,u&&tt.restart(!0)}},le=function(Te){if(!oe(Te)){Te=sa(Te,h),he&&(D=!0);var Ke=(Te.deltaMode===1?l:Te.deltaMode===2?Jn.innerHeight:1)*_;ve(Te.deltaX*Ke,Te.deltaY*Ke,0),u&&!G&&tt.restart(!0)}},fe=function(Te){if(!oe(Te)){var Ke=Te.clientX,me=Te.clientY,Ge=Ke-k.x,Re=me-k.y;k.x=Ke,k.y=me,Pe=!0,u&&tt.restart(!0),(Ge||Re)&&Ze(Ge,Re)}},Be=function(Te){k.event=Te,H(k)},ut=function(Te){k.event=Te,q(k)},Ot=function(Te){return oe(Te)||sa(Te,h)&&Z(k)};tt=k._dc=un.delayedCall(f||.25,De).pause(),k.deltaX=k.deltaY=0,k._vx=Ml(0,50,!0),k._vy=Ml(0,50,!0),k.scrollX=R,k.scrollY=b,k.isDragging=k.isGesturing=k.isPressed=!1,mm(this),k.enable=function(xe){return k.isEnabled||(Rn($?ue:a,"scroll",qh),o.indexOf("scroll")>=0&&Rn($?ue:a,"scroll",J,Ae,_e),o.indexOf("wheel")>=0&&Rn(a,"wheel",le,Ae,_e),(o.indexOf("touch")>=0&&dm||o.indexOf("pointer")>=0)&&(Rn(a,Mi[0],ht,Ae,_e),Rn(ue,Mi[2],L),Rn(ue,Mi[3],L),ne&&Rn(a,"click",ie,!0,!0),Z&&Rn(a,"click",Ot),te&&Rn(ue,"gesturestart",ce),I&&Rn(ue,"gestureend",Y),H&&Rn(a,ur+"enter",Be),q&&Rn(a,ur+"leave",ut),X&&Rn(a,ur+"move",fe)),k.isEnabled=!0,xe&&xe.type&&ht(xe),Le&&Le(k)),k},k.disable=function(){k.isEnabled&&(Yr.filter(function(xe){return xe!==k&&aa(xe.target)}).length||An($?ue:a,"scroll",qh),k.isPressed&&(k._vx.reset(),k._vy.reset(),An(G?a:ue,Mi[1],Oe,!0)),An($?ue:a,"scroll",J,_e),An(a,"wheel",le,_e),An(a,Mi[0],ht,_e),An(ue,Mi[2],L),An(ue,Mi[3],L),An(a,"click",ie,!0),An(a,"click",Ot),An(ue,"gesturestart",ce),An(ue,"gestureend",Y),An(a,ur+"enter",Be),An(a,ur+"leave",ut),An(a,ur+"move",fe),k.isEnabled=k.isPressed=k.isDragging=!1,et&&et(k))},k.kill=k.revert=function(){k.disable();var xe=Yr.indexOf(k);xe>=0&&Yr.splice(xe,1),Qi===k&&(Qi=0)},Yr.push(k),G&&aa(a)&&(Qi=k),k.enable(g)},Qx(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();kt.version="3.12.5";kt.create=function(s){return new kt(s)};kt.register=vm;kt.getAll=function(){return Yr.slice()};kt.getById=function(s){return Yr.filter(function(e){return e.vars.id===s})[0]};gm()&&un.registerPlugin(kt);var Me,$r,ct,Ut,bi,Pt,Fm,Fl,ya,pa,ca,Sl,gn,Hl,tu,In,ym,Mm,Jr,Bm,Zh,km,Pn,nu,zm,Hm,Ns,iu,lu,jr,cu,Bl,su,Kh,bl=1,_n=Date.now,$h=_n(),di=0,ha=0,Sm=function(e,t,n){var i=Qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},bm=function(e,t){return t&&(!Qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nv=function s(){return ha&&requestAnimationFrame(s)},wm=function(){return Hl=1},Tm=function(){return Hl=0},Bi=function(e){return e},ua=function(e){return Math.round(e*1e5)/1e5||0},Vm=function(){return typeof window<"u"},Gm=function(){return Me||Vm()&&(Me=window.gsap)&&Me.registerPlugin&&Me},_r=function(e){return!!~Fm.indexOf(e)},Wm=function(e){return(e==="Height"?cu:ct["inner"+e])||bi["client"+e]||Pt["client"+e]},Xm=function(e){return ts(e,"getBoundingClientRect")||(_r(e)?function(){return Ol.width=ct.innerWidth,Ol.height=cu,Ol}:function(){return ns(e)})},iv=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=ts(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Wm(r):e["client"+r])||0}},sv=function(e,t){return!t||~Si.indexOf(e)?Xm(e):function(){return Ol}},ki=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ts(e,n))?o()-Xm(e)()[r]:_r(e)?(bi[n]||Pt[n])-Wm(i):e[n]-e["offset"+i])},wl=function(e,t){for(var n=0;n<Jr.length;n+=3)(!t||~t.indexOf(Jr[n+1]))&&e(Jr[n],Jr[n+1],Jr[n+2])},Qn=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},fa=function(e){return typeof e=="number"},fr=function(e){return typeof e=="object"},la=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Jh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Zr=Math.abs,Ym="left",qm="top",hu="right",uu="bottom",pr="width",mr="height",ma="Right",ga="Left",_a="Top",xa="Bottom",Zt="padding",ui="margin",eo="Width",fu="Height",Qt="px",fi=function(e){return ct.getComputedStyle(e)},rv=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Em=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ns=function(e,t){var n=t&&fi(e)[tu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},kl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Zm=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},ov=function(e){return function(t){return Me.utils.snap(Zm(e),t)}},du=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},av=function(e){return function(t,n){return du(Zm(e))(t,n.direction)}},Tl=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},on=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},El=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Am={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Al={toggleActions:"play",anticipatePin:0},zl={top:0,left:0,center:.5,bottom:1,right:1},Ll=function(e,t){if(Qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in zl?zl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Rl=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,u=r.fontSize,f=r.indent,d=r.fontWeight,_=Ut.createElement("div"),g=_r(n)||ts(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Pt:n,v=e.indexOf("start")!==-1,M=v?c:h,x="border-color:"+M+";font-size:"+u+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===qt?hu:uu)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Dl(_,0,i,v),_},Dl=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+eo]=1,r["border"+a+eo]=0,r[n.p]=t+"px",Me.set(e,r)},st=[],ru={},Ma,Rm=function(){return _n()-di>34&&(Ma||(Ma=requestAnimationFrame(is)))},Kr=function(){(!Pn||!Pn.isPressed||Pn.startX>Pt.clientWidth)&&(it.cache++,Pn?Ma||(Ma=requestAnimationFrame(is)):is(),di||vr("scrollStart"),di=_n())},jh=function(){Hm=ct.innerWidth,zm=ct.innerHeight},da=function(){it.cache++,!gn&&!km&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!nu||Hm!==ct.innerWidth||Math.abs(ct.innerHeight-zm)>ct.innerHeight*.25)&&Fl.restart(!0)},xr={},lv=[],Km=function s(){return rn(qe,"scrollEnd",s)||dr(!0)},vr=function(e){return xr[e]&&xr[e].map(function(t){return t()})||lv},jn=[],$m=function(e){for(var t=0;t<jn.length;t+=5)(!e||jn[t+4]&&jn[t+4].query===e)&&(jn[t].style.cssText=jn[t+1],jn[t].getBBox&&jn[t].setAttribute("transform",jn[t+2]||""),jn[t+3].uncache=1)},pu=function(e,t){var n;for(In=0;In<st.length;In++)n=st[In],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Bl=!0,t&&$m(t),t||vr("revert")},Jm=function(e,t){it.cache++,(t||!Ln)&&it.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),Qn(e)&&(ct.history.scrollRestoration=lu=e)},Ln,gr=0,Cm,cv=function(){if(Cm!==gr){var e=Cm=gr;requestAnimationFrame(function(){return e===gr&&dr(!0)})}},jm=function(){Pt.appendChild(jr),cu=!Pn&&jr.offsetHeight||ct.innerHeight,Pt.removeChild(jr)},Pm=function(e){return ya(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},dr=function(e,t){if(di&&!e&&!Bl){on(qe,"scrollEnd",Km);return}jm(),Ln=qe.isRefreshing=!0,it.forEach(function(i){return Dn(i)&&++i.cacheID&&(i.rec=i())});var n=vr("refreshInit");Bm&&qe.sort(),t||pu(),it.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),Bl=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),su=1,Pm(!0),st.forEach(function(i){var r=ki(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Pm(!1),su=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Jm(lu,1),Fl.pause(),gr++,Ln=2,is(2),st.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ln=qe.isRefreshing=!1,vr("refresh")},ou=0,Nl=1,va,is=function(e){if(e===2||!Ln&&!Bl){qe.isUpdating=!0,va&&va.update(0);var t=st.length,n=_n(),i=n-$h>=50,r=t&&st[0].scroll();if(Nl=ou>r?-1:1,Ln||(ou=r),i&&(di&&!Hl&&n-di>200&&(di=0,vr("scrollEnd")),ca=$h,$h=n),Nl<0){for(In=t;In-- >0;)st[In]&&st[In].update(0,i);Nl=1}else for(In=0;In<t;In++)st[In]&&st[In].update(0,i);qe.isUpdating=!1}Ma=0},au=[Ym,qm,uu,hu,ui+xa,ui+ma,ui+_a,ui+ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ul=au.concat([pr,mr,"boxSizing","max"+eo,"max"+fu,"position",ui,Zt,Zt+_a,Zt+ma,Zt+xa,Zt+ga]),hv=function(e,t,n){Qr(n);var i=e._gsap;if(i.spacerIsNative)Qr(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Qh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=au.length,o=t.style,a=e.style,l;r--;)l=au[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[uu]=a[hu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[pr]=kl(e,mn)+Qt,o[mr]=kl(e,qt)+Qt,o[Zt]=a[ui]=a[qm]=a[Ym]="0",Qr(i),a[pr]=a["max"+eo]=n[pr],a[mr]=a["max"+fu]=n[mr],a[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},uv=/([A-Z])/g,Qr=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(uv,"-$1").toLowerCase())}},Cl=function(e){for(var t=Ul.length,n=e.style,i=[],r=0;r<t;r++)i.push(Ul[r],n[Ul[r]]);return i.t=e,i},fv=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ol={left:0,top:0},Im=function(e,t,n,i,r,o,a,l,c,h,u,f,d,_){Dn(e)&&(e=e(l)),Qn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ll("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),fa(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Dl(a,n,i,!0);else{Dn(t)&&(t=t(l));var M=(e||"0").split(" "),x,A,E,w;v=Cn(t,l)||Pt,x=ns(v)||{},(!x||!x.left&&!x.top)&&fi(v).display==="none"&&(w=v.style.display,v.style.display="block",x=ns(v),w?v.style.display=w:v.style.removeProperty("display")),A=Ll(M[0],x[i.d]),E=Ll(M[1]||"0",n),e=x[i.p]-c[i.p]-h+A+r-E,a&&Dl(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;m="scroll"+i.d2,Dl(o,C,i,S&&C>20||!S&&(u?Math.max(Pt[m],bi[m]):o.parentNode[m])<=C+1),u&&(c=ns(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Qt))}return d&&v&&(m=ns(v),d.seek(f),p=ns(v),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},dv=/(webkit|moz|length|cssText|inset)/i,Lm=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Pt){e._stOrig=r.cssText,a=fi(e);for(o in a)!+o&&!dv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},Qm=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},Pl=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},Dm=function(e,t){var n=es(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=Qm(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){it.cache++,o.tween&&is()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Me.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},on(e,"wheel",n.wheelHandler),qe.isTouch&&on(e,"touchmove",n.wheelHandler),r},qe=function(){function s(t,n){$r||s.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),iu(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ha){this.update=this.refresh=this.kill=Bi;return}n=Em(Qn(n)||fa(n)||n.nodeType?{trigger:n}:n,Al);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,u=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,v=r.onSnapComplete,M=r.once,x=r.snap,A=r.pinReparent,E=r.pinSpacer,w=r.containerAnimation,C=r.fastScrollEnd,S=r.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?mn:qt,P=!u&&u!==0,U=Cn(n.scroller||ct),B=Me.core.getCache(U),H=_r(U),q=("pinType"in n?n.pinType:ts(U,"pinType")||H&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=P&&n.toggleActions.split(" "),G="markers"in n?n.markers:Al.markers,te=H?0:parseFloat(fi(U)["border"+y.p2+eo])||0,I=this,he=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Le=iv(U,H,y),et=sv(U,H),Z=0,ee=0,_e=0,ne=es(U,y),be,Ee,He,tt,Ve,Pe,D,yt,Fe,k,we,at,Ae,R,b,W,Q,j,$,ue,ae,pe,Xe,ie,oe,De,Ie,ve,Ze,Oe,ht,L,ce,Y,J,le,fe,Be,ut;if(I._startClamp=I._endClamp=!1,I._dir=y,m*=45,I.scroller=U,I.scroll=w?w.time.bind(w):ne,tt=ne(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Bm=1,n.refreshPriority===-9999&&(va=I)),B.tweenScroll=B.tweenScroll||{top:Dm(U,qt),left:Dm(U,mn)},I.tweenTo=be=B.tweenScroll[y.p],I.scrubDuration=function(me){ce=fa(me)&&me,ce?L?L.duration(me):L=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return p&&p(I)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(u),Oe=0,l||(l=i.vars.id)),x&&((!fr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Pt.style&&Me.set(H?[Pt,bi]:U,{scrollBehavior:"auto"}),it.forEach(function(me){return Dn(me)&&me.target===(H?Ut.scrollingElement||bi:U)&&(me.smooth=!1)}),He=Dn(x.snapTo)?x.snapTo:x.snapTo==="labels"?ov(i):x.snapTo==="labelsDirectional"?av(i):x.directional!==!1?function(me,Ge){return du(x.snapTo)(me,_n()-ee<500?0:Ge.direction)}:Me.utils.snap(x.snapTo),Y=x.duration||{min:.1,max:2},Y=fr(Y)?pa(Y.min,Y.max):pa(Y,Y),J=Me.delayedCall(x.delay||ce/2||.1,function(){var me=ne(),Ge=_n()-ee<500,Re=be.tween;if((Ge||Math.abs(I.getVelocity())<10)&&!Re&&!Hl&&Z!==me){var ze=(me-Pe)/R,Vt=i&&!P?i.totalProgress():ze,nt=Ge?0:(Vt-ht)/(_n()-ca)*1e3||0,Tt=Me.utils.clamp(-ze,1-ze,Zr(nt/2)*nt/.185),Jt=ze+(x.inertia===!1?0:Tt),Mt,St,pt=x,qn=pt.onStart,Rt=pt.onInterrupt,wn=pt.onComplete;if(Mt=He(Jt,I),fa(Mt)||(Mt=Jt),St=Math.round(Pe+Mt*R),me<=D&&me>=Pe&&St!==me){if(Re&&!Re._initted&&Re.data<=Zr(St-me))return;x.inertia===!1&&(Tt=Mt-ze),be(St,{duration:Y(Zr(Math.max(Zr(Jt-Vt),Zr(Mt-Vt))*.185/nt/.05||0)),ease:x.ease||"power3",data:Zr(St-me),onInterrupt:function(){return J.restart(!0)&&Rt&&Rt(I)},onComplete:function(){I.update(),Z=ne(),i&&(L?L.resetTo("totalProgress",Mt,i._tTime/i._tDur):i.progress(Mt)),Oe=ht=i&&!P?i.totalProgress():I.progress,v&&v(I),wn&&wn(I)}},me,Tt*R,St-me-Tt*R),qn&&qn(I,be.tween)}}else I.isActive&&Z!==me&&J.restart(!0)}).pause()),l&&(ru[l]=I),f=I.trigger=Cn(f||d!==!0&&d),ut=f&&f._gsap&&f._gsap.stRevert,ut&&(ut=ut(I)),d=d===!0?f:Cn(d),Qn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===ui||(_=!_&&d.parentNode&&d.parentNode.style&&fi(d.parentNode).display==="flex"?!1:Zt),I.pin=d,Ee=Me.core.getCache(d),Ee.spacer?b=Ee.pinState:(E&&(E=Cn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ee.spacerIsNative=!!E,E&&(Ee.spacerState=Cl(E))),Ee.spacer=j=E||Ut.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),Ee.pinState=b=Cl(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),I.spacer=j=Ee.spacer,Ze=fi(d),ie=Ze[_+y.os2],ue=Me.getProperty(d),ae=Me.quickSetter(d,y.a,Qt),Qh(d,j,Ze),Q=Cl(d)),G){at=fr(G)?Em(G,Am):Am,k=Rl("scroller-start",l,U,y,at,0),we=Rl("scroller-end",l,U,y,at,0,k),$=k["offset"+y.op.d2];var Ot=Cn(ts(U,"content")||U);yt=this.markerStart=Rl("start",l,Ot,y,at,$,0,w),Fe=this.markerEnd=Rl("end",l,Ot,y,at,$,0,w),w&&(Be=Me.quickSetter([yt,Fe],y.a,Qt)),!q&&!(Si.length&&ts(U,"fixedMarkers")===!0)&&(rv(H?Pt:U),Me.set([k,we],{force3D:!0}),De=Me.quickSetter(k,y.a,Qt),ve=Me.quickSetter(we,y.a,Qt))}if(w){var xe=w.vars.onUpdate,Te=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){I.update(0,0,1),xe&&xe.apply(w,Te||[])})}if(I.previous=function(){return st[st.indexOf(I)-1]},I.next=function(){return st[st.indexOf(I)+1]},I.revert=function(me,Ge){if(!Ge)return I.kill(!0);var Re=me!==!1||!I.enabled,ze=gn;Re!==I.isReverted&&(Re&&(le=Math.max(ne(),I.scroll.rec||0),_e=I.progress,fe=i&&i.progress()),yt&&[yt,Fe,k,we].forEach(function(Vt){return Vt.style.display=Re?"none":"block"}),Re&&(gn=I,I.update(Re)),d&&(!A||!I.isActive)&&(Re?hv(d,j,b):Qh(d,j,fi(d),oe)),Re||I.update(Re),gn=ze,I.isReverted=Re)},I.refresh=function(me,Ge,Re,ze){if(!((gn||!I.enabled)&&!Ge)){if(d&&me&&di){on(s,"scrollEnd",Km);return}!Ln&&he&&he(I),gn=I,be.tween&&!Re&&(be.tween.kill(),be.tween=0),L&&L.pause(),g&&i&&i.revert({kill:!1}).invalidate(),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Vt=Le(),nt=et(),Tt=w?w.duration():ki(U,y),Jt=R<=.01,Mt=0,St=ze||0,pt=fr(Re)?Re.end:n.end,qn=n.endTrigger||f,Rt=fr(Re)?Re.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),wn=I.pinnedContainer=n.pinnedContainer&&Cn(n.pinnedContainer,I),T=f&&Math.max(0,st.indexOf(I))||0,N=T,z,V,O,se,re,de,ye,ke,We,Se,Ye,ft,mt;for(G&&fr(Re)&&(ft=Me.getProperty(k,y.p),mt=Me.getProperty(we,y.p));N--;)de=st[N],de.end||de.refresh(0,1)||(gn=I),ye=de.pin,ye&&(ye===f||ye===d||ye===wn)&&!de.isReverted&&(Se||(Se=[]),Se.unshift(de),de.revert(!0,!0)),de!==st[N]&&(T--,N--);for(Dn(Rt)&&(Rt=Rt(I)),Rt=Sm(Rt,"start",I),Pe=Im(Rt,f,Vt,y,ne(),yt,k,I,nt,te,q,Tt,w,I._startClamp&&"_startClamp")||(d?-.001:0),Dn(pt)&&(pt=pt(I)),Qn(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(Qn(Rt)?Rt.split(" ")[0]:"")+pt:(Mt=Ll(pt.substr(2),Vt),pt=Qn(Rt)?Rt:(w?Me.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Pe):Pe)+Mt,qn=f)),pt=Sm(pt,"end",I),D=Math.max(Pe,Im(pt||(qn?"100% 0":Tt),qn,Vt,y,ne()+Mt,Fe,we,I,nt,te,q,Tt,w,I._endClamp&&"_endClamp"))||-.001,Mt=0,N=T;N--;)de=st[N],ye=de.pin,ye&&de.start-de._pinPush<=Pe&&!w&&de.end>0&&(z=de.end-(I._startClamp?Math.max(0,de.start):de.start),(ye===f&&de.start-de._pinPush<Pe||ye===wn)&&isNaN(Rt)&&(Mt+=z*(1-de.progress)),ye===d&&(St+=z));if(Pe+=Mt,D+=Mt,I._startClamp&&(I._startClamp+=Mt),I._endClamp&&!Ln&&(I._endClamp=D||-.001,D=Math.min(D,ki(U,y))),R=D-Pe||(Pe-=.01)&&.001,Jt&&(_e=Me.utils.clamp(0,1,Me.utils.normalize(Pe,D,le))),I._pinPush=St,yt&&Mt&&(z={},z[y.a]="+="+Mt,wn&&(z[y.p]="-="+ne()),Me.set([yt,Fe],z)),d&&!(su&&I.end>=ki(U,y)))z=fi(d),se=y===qt,O=ne(),pe=parseFloat(ue(y.a))+St,!Tt&&D>1&&(Ye=(H?Ut.scrollingElement||bi:U).style,Ye={style:Ye,value:Ye["overflow"+y.a.toUpperCase()]},H&&fi(Pt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Ye.style["overflow"+y.a.toUpperCase()]="scroll")),Qh(d,j,z),Q=Cl(d),V=ns(d,!0),ke=q&&es(U,se?mn:qt)(),_?(oe=[_+y.os2,R+St+Qt],oe.t=j,N=_===Zt?kl(d,y)+R+St:0,N&&(oe.push(y.d,N+Qt),j.style.flexBasis!=="auto"&&(j.style.flexBasis=N+Qt)),Qr(oe),wn&&st.forEach(function(Yt){Yt.pin===wn&&Yt.vars.pinSpacing!==!1&&(Yt._subPinOffset=!0)}),q&&ne(le)):(N=kl(d,y),N&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=N+Qt)),q&&(re={top:V.top+(se?O-Pe:ke)+Qt,left:V.left+(se?ke:O-Pe)+Qt,boxSizing:"border-box",position:"fixed"},re[pr]=re["max"+eo]=Math.ceil(V.width)+Qt,re[mr]=re["max"+fu]=Math.ceil(V.height)+Qt,re[ui]=re[ui+_a]=re[ui+ma]=re[ui+xa]=re[ui+ga]="0",re[Zt]=z[Zt],re[Zt+_a]=z[Zt+_a],re[Zt+ma]=z[Zt+ma],re[Zt+xa]=z[Zt+xa],re[Zt+ga]=z[Zt+ga],W=fv(b,re,A),Ln&&ne(0)),i?(We=i._initted,Zh(1),i.render(i.duration(),!0,!0),Xe=ue(y.a)-pe+R+St,Ie=Math.abs(R-Xe)>1,q&&Ie&&W.splice(W.length-2,2),i.render(0,!0,!0),We||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Zh(0)):Xe=R,Ye&&(Ye.value?Ye.style["overflow"+y.a.toUpperCase()]=Ye.value:Ye.style.removeProperty("overflow-"+y.a));else if(f&&ne()&&!w)for(V=f.parentNode;V&&V!==Pt;)V._pinOffset&&(Pe-=V._pinOffset,D-=V._pinOffset),V=V.parentNode;Se&&Se.forEach(function(Yt){return Yt.revert(!1,!0)}),I.start=Pe,I.end=D,tt=Ve=Ln?le:ne(),!w&&!Ln&&(tt<le&&ne(le),I.scroll.rec=0),I.revert(!1,!0),ee=_n(),J&&(Z=-1,J.restart(!0)),gn=0,i&&P&&(i._initted||fe)&&i.progress()!==fe&&i.progress(fe||0,!0).render(i.time(),!0,!0),(Jt||_e!==I.progress||w||g)&&(i&&!P&&i.totalProgress(w&&Pe<-.001&&!_e?Me.utils.normalize(Pe,D,0):_e,!0),I.progress=Jt||(tt-Pe)/R===_e?0:_e),d&&_&&(j._pinOffset=Math.round(I.progress*Xe)),L&&L.invalidate(),isNaN(ft)||(ft-=Me.getProperty(k,y.p),mt-=Me.getProperty(we,y.p),Pl(k,y,ft),Pl(yt,y,ft-(ze||0)),Pl(we,y,mt),Pl(Fe,y,mt-(ze||0))),Jt&&!Ln&&I.update(),h&&!Ln&&!Ae&&(Ae=!0,h(I),Ae=!1)}},I.getVelocity=function(){return(ne()-Ve)/(_n()-ca)*1e3||0},I.endAnimation=function(){la(I.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||la(i,I.direction<0,1):la(i,i.reversed()))},I.labelToScroll=function(me){return i&&i.labels&&(Pe||I.refresh()||Pe)+i.labels[me]/i.duration()*R||0},I.getTrailing=function(me){var Ge=st.indexOf(I),Re=I.direction>0?st.slice(0,Ge).reverse():st.slice(Ge+1);return(Qn(me)?Re.filter(function(ze){return ze.vars.preventOverlaps===me}):Re).filter(function(ze){return I.direction>0?ze.end<=Pe:ze.start>=D})},I.update=function(me,Ge,Re){if(!(w&&!Re&&!me)){var ze=Ln===!0?le:I.scroll(),Vt=me?0:(ze-Pe)/R,nt=Vt<0?0:Vt>1?1:Vt||0,Tt=I.progress,Jt,Mt,St,pt,qn,Rt,wn,T;if(Ge&&(Ve=tt,tt=w?ne():ze,x&&(ht=Oe,Oe=i&&!P?i.totalProgress():nt)),m&&d&&!gn&&!bl&&di&&(!nt&&Pe<ze+(ze-Ve)/(_n()-ca)*m?nt=1e-4:nt===1&&D>ze+(ze-Ve)/(_n()-ca)*m&&(nt=.9999)),nt!==Tt&&I.enabled){if(Jt=I.isActive=!!nt&&nt<1,Mt=!!Tt&&Tt<1,Rt=Jt!==Mt,qn=Rt||!!nt!=!!Tt,I.direction=nt>Tt?1:-1,I.progress=nt,qn&&!gn&&(St=nt&&!Tt?0:nt===1?1:Tt===1?2:3,P&&(pt=!Rt&&K[St+1]!=="none"&&K[St+1]||K[St],T=i&&(pt==="complete"||pt==="reset"||pt in i))),S&&(Rt||T)&&(T||u||!i)&&(Dn(S)?S(I):I.getTrailing(S).forEach(function(O){return O.endAnimation()})),P||(L&&!gn&&!bl?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",nt,i._tTime/i._tDur):(L.vars.totalProgress=nt,L.invalidate().restart())):i&&i.totalProgress(nt,!!(gn&&(ee||me)))),d){if(me&&_&&(j.style[_+y.os2]=ie),!q)ae(ua(pe+Xe*nt));else if(qn){if(wn=!me&&nt>Tt&&D+1>ze&&ze+1>=ki(U,y),A)if(!me&&(Jt||wn)){var N=ns(d,!0),z=ze-Pe;Lm(d,Pt,N.top+(y===qt?z:0)+Qt,N.left+(y===qt?0:z)+Qt)}else Lm(d,j);Qr(Jt||wn?W:Q),Ie&&nt<1&&Jt||ae(pe+(nt===1&&!wn?Xe:0))}}x&&!be.tween&&!gn&&!bl&&J.restart(!0),a&&(Rt||M&&nt&&(nt<1||!Kh))&&ya(a.targets).forEach(function(O){return O.classList[Jt||M?"add":"remove"](a.className)}),o&&!P&&!me&&o(I),qn&&!gn?(P&&(T&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),o&&o(I)),(Rt||!Kh)&&(c&&Rt&&Jh(I,c),X[St]&&Jh(I,X[St]),M&&(nt===1?I.kill(!1,1):X[St]=0),Rt||(St=nt===1?1:3,X[St]&&Jh(I,X[St]))),C&&!Jt&&Math.abs(I.getVelocity())>(fa(C)?C:2500)&&(la(I.callbackAnimation),L?L.progress(1):la(i,pt==="reverse"?1:!nt,1))):P&&o&&!gn&&o(I)}if(ve){var V=w?ze/w.duration()*(w._caScrollDist||0):ze;De(V+(k._isFlipped?1:0)),ve(V)}Be&&Be(-ze/w.duration()*(w._caScrollDist||0))}},I.enable=function(me,Ge){I.enabled||(I.enabled=!0,on(U,"resize",da),H||on(U,"scroll",Kr),he&&on(s,"refreshInit",he),me!==!1&&(I.progress=_e=0,tt=Ve=Z=ne()),Ge!==!1&&I.refresh())},I.getTween=function(me){return me&&be?be.tween:L},I.setPositions=function(me,Ge,Re,ze){if(w){var Vt=w.scrollTrigger,nt=w.duration(),Tt=Vt.end-Vt.start;me=Vt.start+Tt*me/nt,Ge=Vt.start+Tt*Ge/nt}I.refresh(!1,!1,{start:bm(me,Re&&!!I._startClamp),end:bm(Ge,Re&&!!I._endClamp)},ze),I.update()},I.adjustPinSpacing=function(me){if(oe&&me){var Ge=oe.indexOf(y.d)+1;oe[Ge]=parseFloat(oe[Ge])+me+Qt,oe[1]=parseFloat(oe[1])+me+Qt,Qr(oe)}},I.disable=function(me,Ge){if(I.enabled&&(me!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Ge||L&&L.pause(),le=0,Ee&&(Ee.uncache=1),he&&rn(s,"refreshInit",he),J&&(J.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!H)){for(var Re=st.length;Re--;)if(st[Re].scroller===U&&st[Re]!==I)return;rn(U,"resize",da),H||rn(U,"scroll",Kr)}},I.kill=function(me,Ge){I.disable(me,Ge),L&&!Ge&&L.kill(),l&&delete ru[l];var Re=st.indexOf(I);Re>=0&&st.splice(Re,1),Re===In&&Nl>0&&In--,Re=0,st.forEach(function(ze){return ze.scroller===I.scroller&&(Re=1)}),Re||Ln||(I.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Ge||i.kill()),yt&&[yt,Fe,k,we].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),va===I&&(va=0),d&&(Ee&&(Ee.uncache=1),Re=0,st.forEach(function(ze){return ze.pin===d&&Re++}),Re||(Ee.spacer=0)),n.onKill&&n.onKill(I)},st.push(I),I.enable(!1,!1),ut&&ut(I),i&&i.add&&!R){var Ke=I.update;I.update=function(){I.update=Ke,Pe||D||I.refresh()},Me.delayedCall(.01,I.update),R=.01,Pe=D=0}else I.refresh();d&&cv()},s.register=function(n){return $r||(Me=n||Gm(),Vm()&&window.document&&s.enable(),$r=ha),$r},s.defaults=function(n){if(n)for(var i in n)Al[i]=n[i];return Al},s.disable=function(n,i){ha=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),rn(ct,"wheel",Kr),rn(Ut,"scroll",Kr),clearInterval(Sl),rn(Ut,"touchcancel",Bi),rn(Pt,"touchstart",Bi),Tl(rn,Ut,"pointerdown,touchstart,mousedown",wm),Tl(rn,Ut,"pointerup,touchend,mouseup",Tm),Fl.kill(),wl(rn);for(var r=0;r<it.length;r+=3)El(rn,it[r],it[r+1]),El(rn,it[r],it[r+2])},s.enable=function(){if(ct=window,Ut=document,bi=Ut.documentElement,Pt=Ut.body,Me&&(ya=Me.utils.toArray,pa=Me.utils.clamp,iu=Me.core.context||Bi,Zh=Me.core.suppressOverwrites||Bi,lu=ct.history.scrollRestoration||"auto",ou=ct.pageYOffset,Me.core.globals("ScrollTrigger",s),Pt)){ha=1,jr=document.createElement("div"),jr.style.height="100vh",jr.style.position="absolute",jm(),nv(),kt.register(Me),s.isTouch=kt.isTouch,Ns=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nu=kt.isTouch===1,on(ct,"wheel",Kr),Fm=[ct,Ut,bi,Pt],Me.matchMedia?(s.matchMedia=function(l){var c=Me.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Me.addEventListener("matchMediaInit",function(){return pu()}),Me.addEventListener("matchMediaRevert",function(){return $m()}),Me.addEventListener("matchMedia",function(){dr(0,1),vr("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return jh(),jh})):console.warn("Requires GSAP 3.11.0 or later"),jh(),on(Ut,"scroll",Kr);var n=Pt.style,i=n.borderTopStyle,r=Me.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=ns(Pt),qt.m=Math.round(o.top+qt.sc())||0,mn.m=Math.round(o.left+mn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Sl=setInterval(Rm,250),Me.delayedCall(.5,function(){return bl=0}),on(Ut,"touchcancel",Bi),on(Pt,"touchstart",Bi),Tl(on,Ut,"pointerdown,touchstart,mousedown",wm),Tl(on,Ut,"pointerup,touchend,mouseup",Tm),tu=Me.utils.checkPrefix("transform"),Ul.push(tu),$r=_n(),Fl=Me.delayedCall(.2,dr).pause(),Jr=[Ut,"visibilitychange",function(){var l=ct.innerWidth,c=ct.innerHeight;Ut.hidden?(ym=l,Mm=c):(ym!==l||Mm!==c)&&da()},Ut,"DOMContentLoaded",dr,ct,"load",dr,ct,"resize",da],wl(on),st.forEach(function(l){return l.enable(0,1)}),a=0;a<it.length;a+=3)El(rn,it[a],it[a+1]),El(rn,it[a],it[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Kh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Sl)||(Sl=i)&&setInterval(Rm,i),"ignoreMobileResize"in n&&(nu=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wl(rn)||wl(on,n.autoRefreshEvents||"none"),km=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Cn(n),o=it.indexOf(r),a=_r(r);~o&&it.splice(o,a?6:2),i&&(a?Si.unshift(ct,i,Pt,i,bi,i):Si.unshift(r,i))},s.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Qn(n)?Cn(n):n).getBoundingClientRect(),a=o[r?pr:mr]*i||0;return r?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},s.positionInViewport=function(n,i,r){Qn(n)&&(n=Cn(n));var o=n.getBoundingClientRect(),a=o[r?pr:mr],l=i==null?a/2:i in zl?zl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},s.killAll=function(n){if(st.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=xr.killAll||[];xr={},i.forEach(function(r){return r()})}},s}();qe.version="3.12.5";qe.saveStyles=function(s){return s?ya(s).forEach(function(e){if(e&&e.style){var t=jn.indexOf(e);t>=0&&jn.splice(t,5),jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),iu())}}):jn};qe.revert=function(s,e){return pu(!s,e)};qe.create=function(s,e){return new qe(s,e)};qe.refresh=function(s){return s?da():($r||qe.register())&&dr(!0)};qe.update=function(s){return++it.cache&&is(s===!0?2:0)};qe.clearScrollMemory=Jm;qe.maxScroll=function(s,e){return ki(s,e?mn:qt)};qe.getScrollFunc=function(s,e){return es(Cn(s),e?mn:qt)};qe.getById=function(s){return ru[s]};qe.getAll=function(){return st.filter(function(s){return s.vars.id!=="ScrollSmoother"})};qe.isScrolling=function(){return!!di};qe.snapDirectional=du;qe.addEventListener=function(s,e){var t=xr[s]||(xr[s]=[]);~t.indexOf(e)||t.push(e)};qe.removeEventListener=function(s,e){var t=xr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};qe.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var u=[],f=[],d=Me.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(_){u.length||d.restart(!0),u.push(_.trigger),f.push(_),r<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Dn(r)&&(r=r(),on(qe,"refresh",function(){return r=e.batchMax()})),ya(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(qe.create(c))}),t};var Nm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},eu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===bi&&s(Pt,t)},Il={auto:1,scroll:1},pv=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Me.core.getCache(r),a=_n(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Pt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Il[(l=fi(r)).overflowY]||Il[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!_r(r)&&(Il[(l=fi(r)).overflowY]||Il[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},eg=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&pv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(Ut,kt.eventTypes[0],Om,!1,!0)},onDisable:function(){return rn(Ut,kt.eventTypes[0],Om,!0)}})},mv=/(input|label|select|textarea)/i,Um,Om=function(e){var t=mv.test(e.target.tagName);(t||Um)&&(e._gsapAllow=!0,Um=t)},gv=function(e){fr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Cn(e.target)||bi,h=Me.core.globals().ScrollSmoother,u=h&&h.get(),f=Ns&&(e.content&&Cn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=es(c,qt),_=es(c,mn),g=1,m=(kt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,v=Dn(i)?function(){return i(a)}:function(){return i||2.8},M,x,A=eg(c,e.type,!0,r),E=function(){return x=!1},w=Bi,C=Bi,S=function(){l=ki(c,qt),C=pa(Ns?1:0,l),n&&(w=pa(0,ki(c,mn))),M=gr},y=function(){f._gsap.y=ua(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(x){requestAnimationFrame(E);var G=ua(a.deltaY/2),te=C(d.v-G);if(f&&te!==d.v+d.offset){d.offset=te-d.v;var I=ua((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=it.cache,is()}return!0}d.offset&&y(),x=!0},U,B,H,q,X=function(){S(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Me.set(f,{y:"+=0"}),e.ignoreCheck=function(K){return Ns&&K.type==="touchmove"&&P(K)||g>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){x=!1;var K=g;g=ua((ct.visualViewport&&ct.visualViewport.scale||1)/m),U.pause(),K!==g&&eu(c,g>1.01?!0:n?!1:"x"),B=_(),H=d(),S(),M=gr},e.onRelease=e.onGestureStart=function(K,G){if(d.offset&&y(),!G)q.restart(!0);else{it.cache++;var te=v(),I,he;n&&(I=_(),he=I+te*.05*-K.velocityX/.227,te*=Nm(_,I,he,ki(c,mn)),U.vars.scrollX=w(he)),I=d(),he=I+te*.05*-K.velocityY/.227,te*=Nm(d,I,he,ki(c,qt)),U.vars.scrollY=C(he),U.invalidate().duration(te).play(.01),(Ns&&U.vars.scrollY>=l||I>=l-1)&&Me.to({},{onUpdate:X,duration:te})}o&&o(K)},e.onWheel=function(){U._ts&&U.pause(),_n()-p>1e3&&(M=0,p=_n())},e.onChange=function(K,G,te,I,he){if(gr!==M&&S(),G&&n&&_(w(I[2]===G?B+(K.startX-K.x):_()+G-I[1])),te){d.offset&&y();var Le=he[2]===te,et=Le?H+K.startY-K.y:d()+te-he[1],Z=C(et);Le&&et!==Z&&(H+=Z-et),d(Z)}(te||G)&&is()},e.onEnable=function(){eu(c,n?!1:"x"),qe.addEventListener("refresh",X),on(ct,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),A.enable()},e.onDisable=function(){eu(c,!0),rn(ct,"resize",X),qe.removeEventListener("refresh",X),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new kt(e),a.iOS=Ns,Ns&&!d()&&d(1),Ns&&Me.ticker.add(Bi),q=a._dc,U=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Qm(d,d(),function(){return U.pause()})},onUpdate:is,onComplete:q.vars.onComplete}),a};qe.sort=function(s){return st.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};qe.observe=function(s){return new kt(s)};qe.normalizeScroll=function(s){if(typeof s>"u")return Pn;if(s===!0&&Pn)return Pn.enable();if(s===!1){Pn&&Pn.kill(),Pn=s;return}var e=s instanceof kt?s:gv(s);return Pn&&Pn.target===e.target&&Pn.kill(),_r(e.target)&&(Pn=e),e};qe.core={_getVelocityProp:Ml,_inputObserver:eg,_scrollers:it,_proxies:Si,bridge:{ss:function(){di||vr("scrollStart"),di=_n()},ref:function(){return gn}}};Gm()&&Me.registerPlugin(qe);var _v="1.1.14";function ng(s,e,t){return Math.max(s,Math.min(e,t))}function xv(s,e,t){return(1-t)*s+t*e}function vv(s,e,t,n){return xv(s,e,1-Math.exp(-t*n))}function yv(s,e){return(s%e+e)%e}var Mv=class{constructor(){Ne(this,"isRunning",!1);Ne(this,"value",0);Ne(this,"from",0);Ne(this,"to",0);Ne(this,"currentTime",0);Ne(this,"lerp");Ne(this,"duration");Ne(this,"easing");Ne(this,"onUpdate")}advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;let t=ng(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=vv(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Sv(s,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(i,n)},e)}}var bv=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){Ne(this,"width",0);Ne(this,"height",0);Ne(this,"scrollHeight",0);Ne(this,"scrollWidth",0);Ne(this,"debouncedResize");Ne(this,"wrapperResizeObserver");Ne(this,"contentResizeObserver");Ne(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ne(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ne(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Sv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ig=class{constructor(){Ne(this,"events",{})}emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(s,e){return this.events[s]?.push(e)||(this.events[s]=[e]),()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},tg=100/6,Us={passive:!1},wv=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){Ne(this,"touchStart",{x:0,y:0});Ne(this,"lastDelta",{x:0,y:0});Ne(this,"window",{width:0,height:0});Ne(this,"emitter",new ig);Ne(this,"onTouchStart",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Ne(this,"onTouchMove",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Ne(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Ne(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s,i=n===1?tg:n===2?this.window.width:1,r=n===1?tg:n===2?this.window.height:1;e*=i,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});Ne(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Us),this.element.addEventListener("touchstart",this.onTouchStart,Us),this.element.addEventListener("touchmove",this.onTouchMove,Us),this.element.addEventListener("touchend",this.onTouchEnd,Us)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Us),this.element.removeEventListener("touchstart",this.onTouchStart,Us),this.element.removeEventListener("touchmove",this.onTouchMove,Us),this.element.removeEventListener("touchend",this.onTouchEnd,Us)}},sg=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=x=>Math.min(1,1.001-Math.pow(2,-10*x)),lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f="vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:v=!0,__experimental__naiveDimensions:M=!1}={}){Ne(this,"_isScrolling",!1);Ne(this,"_isStopped",!1);Ne(this,"_isLocked",!1);Ne(this,"_preventNextNativeScrollEvent",!1);Ne(this,"_resetVelocityTimeout",null);Ne(this,"isTouching");Ne(this,"time",0);Ne(this,"userData",{});Ne(this,"lastVelocity",0);Ne(this,"velocity",0);Ne(this,"direction",0);Ne(this,"options");Ne(this,"targetScroll");Ne(this,"animatedScroll");Ne(this,"animate",new Mv);Ne(this,"emitter",new ig);Ne(this,"dimensions");Ne(this,"virtualScroll");Ne(this,"onPointerDown",s=>{s.button===1&&this.reset()});Ne(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(this.isTouching=n.type==="touchstart"||n.type==="touchmove",this.options.syncTouch&&i&&n.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}let a=e===0&&t===0,l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let d=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(f)>5;g&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ne(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});window.lenisVersion=_v,(!s||s===document.documentElement||s===document.body)&&(s=window),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:v,__experimental__naiveDimensions:M},this.dimensions=new bv(s,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new wv(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}setScroll(s){this.isHorizontal?this.rootElement.scrollLeft=s:this.rootElement.scrollTop=s}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(s){let e=s-(this.time||s);this.time=s,this.animate.advance(e*.001)}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof s=="string"&&["top","left","start"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let f;if(typeof s=="string"?f=document.querySelector(s):s instanceof HTMLElement&&s?.nodeType&&(f=s),f){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}let d=f.getBoundingClientRect();s=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=e,s=Math.round(s),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):s=ng(0,s,this.limit),s===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={};return}h||(this.targetScroll=s),this.animate.fromTo(this.animatedScroll,s,{duration:i,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?yv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var Sa={"nav.pieces":["In 3D","\u062B\u0644\u0627\u062B\u064A \u0627\u0644\u0623\u0628\u0639\u0627\u062F"],"nav.collection":["Collection","\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629"],"nav.craft":["Craft","\u0627\u0644\u0635\u0646\u0639\u0629"],"nav.school":["School","\u0627\u0644\u0645\u062F\u0631\u0633\u0629"],"nav.visit":["Visit","\u0632\u0648\u0631\u0648\u0646\u0627"],"nav.lang":["\u0627\u0644\u0639\u0631\u0628\u064A\u0629","English"],skip:["Skip to content","\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649"],"hero.title":["Jewelry shaped by hand in Cairo","\u062D\u064F\u0644\u064A\u0651 \u062A\u064F\u0635\u0627\u063A \u0628\u0627\u0644\u064A\u062F \u0641\u064A \u0627\u0644\u0642\u0627\u0647\u0631\u0629"],"hero.lede":["Masagh is an atelier and a jewelry school. Every piece is sawn, engraved and set at the bench, one at a time, since 2011.","\u0645\u0635\u0627\u063A \u0648\u0631\u0634\u0629 \u0648\u0645\u062F\u0631\u0633\u0629 \u0644\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u062D\u064F\u0644\u064A\u0651. \u0643\u0644 \u0642\u0637\u0639\u0629 \u062A\u064F\u0646\u0634\u0631 \u0648\u062A\u064F\u0646\u0642\u0634 \u0648\u062A\u064F\u0631\u0643\u064E\u0651\u0628 \u0623\u062D\u062C\u0627\u0631\u0647\u0627 \u0639\u0644\u0649 \u0637\u0627\u0648\u0644\u0629 \u0627\u0644\u0635\u0627\u0626\u063A\u060C \u0648\u0627\u062D\u062F\u0629\u064B \u0648\u0627\u062D\u062F\u0629\u060C \u0645\u0646\u0630 \u0662\u0660\u0661\u0661."],"hero.cta1":["See the collection","\u0634\u0627\u0647\u062F \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629"],"hero.cta2":["Learn the craft","\u062A\u0639\u0644\u064E\u0651\u0645 \u0627\u0644\u0635\u0646\u0639\u0629"],"hero.hint":["Move your pointer. The gold follows the light.","\u062D\u0631\u0650\u0651\u0643 \u0627\u0644\u0645\u0624\u0634\u0631\u060C \u0641\u0627\u0644\u0630\u0647\u0628 \u064A\u062A\u0628\u0639 \u0627\u0644\u0636\u0648\u0621."],"house.statement":["The word \u0645\u0635\u0627\u063A means what a jeweler has shaped. Ours keeps the old Cairene habits: brass engraved line by line, coins that once paid for bread turned into rings, stones chosen for their character.","\u0643\u0644\u0645\u0629 \xAB\u0645\u0635\u0627\u063A\xBB \u062A\u0639\u0646\u064A \u0645\u0627 \u0635\u0627\u063A\u062A\u0647 \u064A\u062F \u0627\u0644\u0635\u0627\u0626\u063A. \u0648\u0646\u062D\u0646 \u0646\u062D\u0641\u0638 \u0639\u0627\u062F\u0627\u062A \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u0642\u062F\u064A\u0645\u0629: \u0646\u062D\u0627\u0633 \u064A\u064F\u0646\u0642\u0634 \u062E\u0637\u064B\u0651\u0627 \u062E\u0637\u064B\u0651\u0627\u060C \u0648\u0639\u0645\u0644\u0627\u062A \u0643\u0627\u0646\u062A \u062A\u0634\u062A\u0631\u064A \u0627\u0644\u062E\u0628\u0632 \u0635\u0627\u0631\u062A \u062E\u0648\u0627\u062A\u0645\u060C \u0648\u0623\u062D\u062C\u0627\u0631 \u0646\u062E\u062A\u0627\u0631\u0647\u0627 \u0644\u0637\u0628\u0639\u0647\u0627."],"house.f1.n":["2011","\u0662\u0660\u0661\u0661"],"house.f1.t":["The year Masagh opened its doors in Cairo.","\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062A\u064A \u0641\u062A\u062D\u062A \u0641\u064A\u0647\u0627 \u0645\u0635\u0627\u063A \u0623\u0628\u0648\u0627\u0628\u0647\u0627 \u0641\u064A \u0627\u0644\u0642\u0627\u0647\u0631\u0629."],"house.f2.n":["1998","\u0661\u0669\u0669\u0668"],"house.f2.t":["Our founder, Nermin El Demardash, starts learning in the old workshops of Khan El Khalili.","\u0645\u0624\u0633\u0650\u0651\u0633\u062A\u0646\u0627 \u0646\u0631\u0645\u064A\u0646 \u0627\u0644\u062F\u0645\u0631\u062F\u0627\u0634 \u062A\u0628\u062F\u0623 \u062A\u0639\u0644\u064F\u0651\u0645 \u0627\u0644\u0635\u0646\u0639\u0629 \u0641\u064A \u0648\u0631\u0634 \u062E\u0627\u0646 \u0627\u0644\u062E\u0644\u064A\u0644\u064A \u0627\u0644\u0642\u062F\u064A\u0645\u0629."],"house.f3.n":["\u0627 \u2014 \u064A","\u0627 \u2014 \u064A"],"house.f3.t":["From alef to yaa: we teach the whole craft, first cut to final polish.","\u0645\u0646 \u0627\u0644\u0623\u0644\u0641 \u0625\u0644\u0649 \u0627\u0644\u064A\u0627\u0621: \u0646\u0639\u0644\u0650\u0651\u0645 \u0627\u0644\u0635\u0646\u0639\u0629 \u0643\u0644\u0647\u0627\u060C \u0645\u0646 \u0623\u0648\u0644 \u0642\u064E\u0637\u0639\u0629 \u0625\u0644\u0649 \u0622\u062E\u0631 \u062A\u0644\u0645\u064A\u0639\u0629."],"pieces.title":["Turn them in your hand","\u0642\u0644\u0650\u0651\u0628\u0647\u0627 \u0628\u064A\u0646 \u064A\u062F\u064A\u0643"],"pieces.lede":["Four pieces rebuilt in 3D from the atelier\u2019s photographs. Drag to turn them.","\u0623\u0631\u0628\u0639 \u0642\u0637\u0639 \u0623\u064F\u0639\u064A\u062F \u0628\u0646\u0627\u0624\u0647\u0627 \u0628\u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u062B\u0644\u0627\u062B\u0629 \u0645\u0646 \u0635\u0648\u0631 \u0627\u0644\u0648\u0631\u0634\u0629. \u0627\u0633\u062D\u0628 \u0644\u062A\u062F\u064A\u0631\u0647\u0627."],"pieces.drag":["Drag","\u0627\u0633\u062D\u0628"],"pieces.materials":["Materials","\u0627\u0644\u062E\u0627\u0645\u0627\u062A"],"pieces.technique":["Technique","\u0627\u0644\u062A\u0642\u0646\u064A\u0629"],"pieces.family":["Family","\u0627\u0644\u0639\u0627\u0626\u0644\u0629"],"col.title":["The collection","\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629"],"col.lede":["Five families from one bench. Open any plate to look closer.","\u062E\u0645\u0633 \u0639\u0627\u0626\u0644\u0627\u062A \u0645\u0646 \u0637\u0627\u0648\u0644\u0629 \u0648\u0627\u062D\u062F\u0629. \u0627\u0641\u062A\u062D \u0623\u064A \u0644\u0648\u062D\u0629 \u0644\u062A\u0631\u0627\u0647\u0627 \u0639\u0646 \u0642\u0631\u0628."],"col.close":["Close","\u0625\u063A\u0644\u0627\u0642"],"col.no":["No.","\u0631\u0642\u0645"],"worn.title":["Worn in the sun","\u062A\u064F\u0644\u0628\u064E\u0633 \u0641\u064A \u0627\u0644\u0634\u0645\u0633"],"craft.title":["How a piece is made","\u0643\u064A\u0641 \u062A\u064F\u0635\u0646\u0639 \u0627\u0644\u0642\u0637\u0639\u0629"],"craft.lede":["Scroll to follow one pendant, the engraved kaff, from paper to polish.","\u0645\u0631\u0650\u0651\u0631 \u0627\u0644\u0635\u0641\u062D\u0629 \u0644\u062A\u062A\u0627\u0628\u0639 \u0642\u0644\u0627\u062F\u0629 \u0648\u0627\u062D\u062F\u0629\u060C \u0627\u0644\u0643\u0641\u0651 \u0627\u0644\u0645\u0646\u0642\u0648\u0634\u060C \u0645\u0646 \u0627\u0644\u0648\u0631\u0642\u0629 \u0625\u0644\u0649 \u0627\u0644\u062A\u0644\u0645\u064A\u0639."],"craft.s1.t":["Draw","\u0627\u0644\u0631\u0633\u0645"],"craft.s1.d":["Every piece starts as a pencil line, first on paper, then scribed onto the sheet of metal.","\u062A\u0628\u062F\u0623 \u0643\u0644 \u0642\u0637\u0639\u0629 \u0628\u062E\u0637\u0651 \u0642\u0644\u0645 \u0631\u0635\u0627\u0635\u060C \u0639\u0644\u0649 \u0627\u0644\u0648\u0631\u0642 \u0623\u0648\u0644\u064B\u0627\u060C \u062B\u0645 \u064A\u064F\u0646\u0642\u0644 \u0625\u0644\u0649 \u0644\u0648\u062D \u0627\u0644\u0645\u0639\u062F\u0646."],"craft.s2.t":["Saw","\u0627\u0644\u0646\u0634\u0631"],"craft.s2.d":["A jeweler\u2019s saw follows the line. The blade is as fine as a thread and the hand does the steering.","\u0645\u0646\u0634\u0627\u0631 \u0627\u0644\u0635\u0627\u0626\u063A \u064A\u062A\u0628\u0639 \u0627\u0644\u062E\u0637. \u0633\u0644\u0627\u062D\u0647 \u0631\u0641\u064A\u0639 \u0643\u0627\u0644\u062E\u064A\u0637\u060C \u0648\u0627\u0644\u064A\u062F \u0647\u064A \u0627\u0644\u062A\u064A \u062A\u0642\u0648\u062F\u0647."],"craft.s3.t":["Engrave","\u0627\u0644\u0646\u0642\u0634"],"craft.s3.d":["The pattern is cut into the surface one stroke at a time. No two pieces carry exactly the same lines.","\u064A\u064F\u062D\u0641\u0631 \u0627\u0644\u0646\u0642\u0634 \u0641\u064A \u0627\u0644\u0633\u0637\u062D \u0636\u0631\u0628\u0629\u064B \u0636\u0631\u0628\u0629. \u0644\u0627 \u062A\u062D\u0645\u0644 \u0642\u0637\u0639\u062A\u0627\u0646 \u0627\u0644\u062E\u0637\u0648\u0637 \u0646\u0641\u0633\u0647\u0627 \u062A\u0645\u0627\u0645\u064B\u0627."],"craft.s4.t":["Set","\u0627\u0644\u062A\u0631\u0643\u064A\u0628"],"craft.s4.d":["Each stone is seated in its own bezel and the metal is pressed closed around it.","\u064A\u064F\u062C\u0644\u064E\u0633 \u0643\u0644 \u062D\u062C\u0631 \u0641\u064A \u0628\u064A\u062A\u0647\u060C \u062B\u0645 \u064A\u064F\u0636\u063A\u0637 \u0627\u0644\u0645\u0639\u062F\u0646 \u062D\u0648\u0644\u0647 \u062D\u062A\u0649 \u064A\u064F\u062D\u0643\u064E\u0645."],"craft.s5.t":["Finish","\u0627\u0644\u062A\u0634\u0637\u064A\u0628"],"craft.s5.d":["Filing, sanding and polishing, until the surface catches the light the way you see it here.","\u0628\u064E\u0631\u062F \u0648\u0635\u0646\u0641\u0631\u0629 \u0648\u062A\u0644\u0645\u064A\u0639\u060C \u062D\u062A\u0649 \u064A\u0644\u062A\u0642\u0637 \u0627\u0644\u0633\u0637\u062D \u0627\u0644\u0636\u0648\u0621 \u0643\u0645\u0627 \u062A\u0631\u0627\u0647 \u0647\u0646\u0627."],"school.title":["Learn it from alef to yaa","\u062A\u0639\u0644\u064E\u0651\u0645\u0647\u0627 \u0645\u0646 \u0627\u0644\u0623\u0644\u0641 \u0625\u0644\u0649 \u0627\u0644\u064A\u0627\u0621"],"school.lede":["Masagh began as a school and still is one. The courses take you from holding a saw for the first time to finishing a collection of your own, with certified diplomas along the way.","\u0628\u062F\u0623\u062A \u0645\u0635\u0627\u063A \u0645\u062F\u0631\u0633\u0629\u064B \u0648\u0645\u0627 \u0632\u0627\u0644\u062A. \u062A\u0623\u062E\u0630\u0643 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0645\u0646 \u0623\u0648\u0644 \u0645\u0631\u0629 \u062A\u0645\u0633\u0643 \u0641\u064A\u0647\u0627 \u0627\u0644\u0645\u0646\u0634\u0627\u0631 \u0625\u0644\u0649 \u0625\u0646\u0647\u0627\u0621 \u0645\u062C\u0645\u0648\u0639\u0629 \u062A\u062D\u0645\u0644 \u0627\u0633\u0645\u0643\u060C \u0645\u0639 \u062F\u0628\u0644\u0648\u0645\u0627\u062A \u0645\u0639\u062A\u0645\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642."],"school.m1.t":["The bench","\u0637\u0627\u0648\u0644\u0629 \u0627\u0644\u0635\u0627\u0626\u063A"],"school.m1.d":["Tools, safety, sawing, filing and your first soldered joint.","\u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0648\u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u0627\u0644\u0646\u0634\u0631 \u0648\u0627\u0644\u0628\u064E\u0631\u062F \u0648\u0623\u0648\u0644 \u0644\u062D\u0627\u0645 \u0644\u0643."],"school.m2.t":["Forming metal","\u062A\u0634\u0643\u064A\u0644 \u0627\u0644\u0645\u0639\u062F\u0646"],"school.m2.d":["Sheet and wire: bending, forging, hammering and texture.","\u0627\u0644\u0644\u0648\u062D \u0648\u0627\u0644\u0633\u0644\u0643: \u0627\u0644\u062B\u0646\u064A \u0648\u0627\u0644\u0637\u064E\u0651\u0631\u0642 \u0648\u0627\u0644\u062A\u062E\u0634\u064A\u0646."],"school.m3.t":["Engraving","\u0627\u0644\u0646\u0642\u0634"],"school.m3.d":["Transferring a drawing and cutting it into brass and silver.","\u0646\u0642\u0644 \u0627\u0644\u0631\u0633\u0645 \u0648\u062D\u0641\u0631\u0647 \u0641\u064A \u0627\u0644\u0646\u062D\u0627\u0633 \u0648\u0627\u0644\u0641\u0636\u0629."],"school.m4.t":["Stone setting","\u062A\u0631\u0643\u064A\u0628 \u0627\u0644\u0623\u062D\u062C\u0627\u0631"],"school.m4.d":["Bezels for cabochons, then coins and found objects.","\u0628\u064A\u0648\u062A \u0627\u0644\u0623\u062D\u062C\u0627\u0631\u060C \u062B\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0648\u0627\u0644\u0642\u0637\u0639 \u0627\u0644\u0642\u062F\u064A\u0645\u0629."],"school.m5.t":["Finishing","\u0627\u0644\u062A\u0634\u0637\u064A\u0628"],"school.m5.d":["Sanding, polishing, plating and patina.","\u0627\u0644\u0635\u0646\u0641\u0631\u0629 \u0648\u0627\u0644\u062A\u0644\u0645\u064A\u0639 \u0648\u0627\u0644\u0637\u0644\u0627\u0621 \u0648\u0627\u0644\u062A\u0639\u062A\u064A\u0642."],"school.m6.t":["Your collection","\u0645\u062C\u0645\u0648\u0639\u062A\u0643"],"school.m6.d":["Design, make and present a small collection of your own.","\u0635\u0645\u0650\u0651\u0645 \u0648\u0646\u0641\u0650\u0651\u0630 \u0648\u0642\u062F\u0650\u0651\u0645 \u0645\u062C\u0645\u0648\u0639\u0629 \u0635\u063A\u064A\u0631\u0629 \u0645\u0646 \u0635\u0646\u0639 \u064A\u062F\u0643."],"school.cta":["Ask about the next course","\u0627\u0633\u0623\u0644 \u0639\u0646 \u0627\u0644\u062F\u0648\u0631\u0629 \u0627\u0644\u0642\u0627\u062F\u0645\u0629"],"school.note":["Courses are taught in Arabic at the atelier in Cairo.","\u062A\u064F\u062F\u0631\u064E\u0651\u0633 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0641\u064A \u0627\u0644\u0648\u0631\u0634\u0629 \u0628\u0627\u0644\u0642\u0627\u0647\u0631\u0629."],"visit.title":["Come to the bench","\u062A\u0639\u0627\u0644\u064E \u0625\u0644\u0649 \u0627\u0644\u0648\u0631\u0634\u0629"],"visit.lede":["This is a showcase, not a shop. To see a piece, order one, or join a course, write to us.","\u0647\u0630\u0627 \u0645\u0639\u0631\u0636 \u0648\u0644\u064A\u0633 \u0645\u062A\u062C\u0631\u064B\u0627. \u0644\u0631\u0624\u064A\u0629 \u0642\u0637\u0639\u0629 \u0623\u0648 \u0637\u0644\u0628\u0647\u0627 \u0623\u0648 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u062F\u0648\u0631\u0629\u060C \u0631\u0627\u0633\u0644\u0646\u0627."],"visit.wa":["WhatsApp","\u0648\u0627\u062A\u0633\u0627\u0628"],"visit.mail":["Email","\u0627\u0644\u0628\u0631\u064A\u062F"],"visit.ig":["Instagram","\u0625\u0646\u0633\u062A\u063A\u0631\u0627\u0645"],"visit.fb":["Facebook","\u0641\u064A\u0633\u0628\u0648\u0643"],"visit.city":["Cairo, Egypt","\u0627\u0644\u0642\u0627\u0647\u0631\u0629\u060C \u0645\u0635\u0631"],"foot.made":["Handmade in Cairo","\u0635\u064F\u0646\u0639 \u0628\u0627\u0644\u064A\u062F \u0641\u064A \u0627\u0644\u0642\u0627\u0647\u0631\u0629"],"foot.top":["Back to top","\u0625\u0644\u0649 \u0627\u0644\u0623\u0639\u0644\u0649"]};var to=[{id:"pendant",file:"pendant",fit:[0,2.2,0,8.4],rot:[0,0,0],poster:"pendant",mount:"wall",name:["Sadaf necklace","\u0639\u0642\u062F \u0635\u062F\u0641"],fam:["Ahjar","\u0623\u062D\u062C\u0627\u0631"],mat:["Mother-of-pearl, coloured stones, gold-tone metal","\u0635\u062F\u0641\u060C \u0623\u062D\u062C\u0627\u0631 \u0645\u0644\u0648\u0651\u0646\u0629\u060C \u0645\u0639\u062F\u0646 \u0630\u0647\u0628\u064A \u0627\u0644\u0644\u0648\u0646"],tech:["Bezel setting, hand-linked chain","\u062A\u0631\u0643\u064A\u0628 \u0641\u064A \u0628\u064A\u0648\u062A\u060C \u0633\u0644\u0633\u0644\u0629 \u0645\u0648\u0635\u0648\u0644\u0629 \u0628\u0627\u0644\u064A\u062F"]},{id:"ring",file:"ring",fit:[0,.25,0,3.6],rot:[.5,.5,0],poster:"ring",name:["Nesr coin ring","\u062E\u0627\u062A\u0645 \u0627\u0644\u0646\u0633\u0631"],fam:["Qirsh","\u0642\u0631\u0634"],mat:["Vintage Egyptian coin, coloured stones, gold-tone metal","\u0639\u0645\u0644\u0629 \u0645\u0635\u0631\u064A\u0629 \u0642\u062F\u064A\u0645\u0629\u060C \u0623\u062D\u062C\u0627\u0631 \u0645\u0644\u0648\u0651\u0646\u0629\u060C \u0645\u0639\u062F\u0646 \u0630\u0647\u0628\u064A \u0627\u0644\u0644\u0648\u0646"],tech:["Coin setting, grain-set halo","\u062A\u0631\u0643\u064A\u0628 \u0639\u0645\u0644\u0629\u060C \u0647\u0627\u0644\u0629 \u062D\u0628\u064A\u0628\u0627\u062A"]},{id:"hamsa",file:"hamsa",fit:[0,1.5,0,8.6],rot:[0,0,0],poster:"hamsa",mount:"wall",name:["Kaff pendant","\u0642\u0644\u0627\u062F\u0629 \u0627\u0644\u0643\u0641\u0651"],fam:["Turath","\u062A\u0631\u0627\u062B"],mat:["Brass, turquoise, cotton cord","\u0646\u062D\u0627\u0633\u060C \u0641\u064A\u0631\u0648\u0632\u060C \u062E\u064A\u0637 \u0642\u0637\u0646"],tech:["Hand-sawn, hand-engraved","\u0646\u0634\u0631 \u0648\u0646\u0642\u0634 \u0628\u0627\u0644\u064A\u062F"]},{id:"bangle",file:"bangle",fit:[0,0,0,7.6],rot:[.95,0,0],poster:"bangle",name:["Qirsh open bangle","\u0625\u0633\u0648\u0631\u0629 \u0627\u0644\u0642\u0631\u0634"],fam:["Qirsh","\u0642\u0631\u0634"],mat:["Vintage coin, red stone, gold-tone metal","\u0639\u0645\u0644\u0629 \u0642\u062F\u064A\u0645\u0629\u060C \u062D\u062C\u0631 \u0623\u062D\u0645\u0631\u060C \u0645\u0639\u062F\u0646 \u0630\u0647\u0628\u064A \u0627\u0644\u0644\u0648\u0646"],tech:["Hand-forged wire","\u0633\u0644\u0643 \u0645\u0637\u0631\u0648\u0642 \u0628\u0627\u0644\u064A\u062F"]}];var od="170";var Tv=0,rg=1,Ev=2;var w_=1,ad=2,hs=3,Gi=0,Mn=1,Ai=2,Gs=0,yo=1,og=2,ag=3,lg=4,Av=5,Ar=100,Rv=101,Cv=102,Pv=103,Iv=104,Lv=200,Dv=201,Nv=202,Uv=203,qu=204,Zu=205,Ov=206,Fv=207,Bv=208,kv=209,zv=210,Hv=211,Vv=212,Gv=213,Wv=214,Ku=0,$u=1,Ju=2,wo=3,ju=4,Qu=5,ef=6,tf=7,T_=0,Xv=1,Yv=2,Ws=0,qv=1,Zv=2,Kv=3,$v=4,Jv=5,jv=6,ld=7,cg="attached",Qv="detached",E_=300,To=301,Eo=302,nf=303,sf=304,Xc=306,Wi=1e3,fs=1001,Fa=1002,Sn=1003,cd=1004;var xo=1005;var Wn=1006,Da=1007;var Vi=1008;var ms=1009,A_=1010,R_=1011,Ba=1012,hd=1013,Pr=1014,Ci=1015,$a=1016,ud=1017,fd=1018,Ao=1020,C_=35902,P_=1021,I_=1022,mi=1023,L_=1024,D_=1025,Mo=1026,Ro=1027,dd=1028,pd=1029,N_=1030,md=1031;var gd=1033,mc=33776,gc=33777,_c=33778,xc=33779,rf=35840,of=35841,af=35842,lf=35843,cf=36196,hf=37492,uf=37496,ff=37808,df=37809,pf=37810,mf=37811,gf=37812,_f=37813,xf=37814,vf=37815,yf=37816,Mf=37817,Sf=37818,bf=37819,wf=37820,Tf=37821,vc=36492,Ef=36494,Af=36495,U_=36283,Rf=36284,Cf=36285,Pf=36286;var Co=2300,Po=2301,mu=2302,hg=2400,ug=2401,fg=2402,ey=2500;var O_=0,Yc=1,Ja=2,ty=3200,ny=3201;var F_=0,iy=1,Hi="",Wt="srgb",bn="srgb-linear",qc="linear",vt="srgb";var no=7680;var dg=519,sy=512,ry=513,oy=514,B_=515,ay=516,ly=517,cy=518,hy=519,If=35044;var pg="300 es",ds=2e3,yc=2001,Xs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mg=1234567,Na=Math.PI/180,Io=180/Math.PI;function Pi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function yn(s,e,t){return Math.max(e,Math.min(t,s))}function _d(s,e){return(s%e+e)%e}function uy(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function fy(s,e,t){return s!==e?(t-s)/(e-s):0}function Ua(s,e,t){return(1-t)*s+t*e}function dy(s,e,t,n){return Ua(s,e,1-Math.exp(-t*n))}function py(s,e=1){return e-Math.abs(_d(s,e*2)-e)}function my(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function gy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function _y(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xy(s,e){return s+Math.random()*(e-s)}function vy(s){return s*(.5-Math.random())}function yy(s){s!==void 0&&(mg=s);let e=mg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function My(s){return s*Na}function Sy(s){return s*Io}function by(s){return(s&s-1)===0&&s!==0}function wy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ty(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ey(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var k_={DEG2RAD:Na,RAD2DEG:Io,generateUUID:Pi,clamp:yn,euclideanModulo:_d,mapLinear:uy,inverseLerp:fy,lerp:Ua,damp:dy,pingpong:py,smoothstep:my,smootherstep:gy,randInt:_y,randFloat:xy,randFloatSpread:vy,seededRandom:yy,degToRad:My,radToDeg:Sy,isPowerOfTwo:by,ceilPowerOfTwo:wy,floorPowerOfTwo:Ty,setQuaternionFromProperEuler:Ey,normalize:xt,denormalize:Ri},Je=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],M=i[4],x=i[7],A=i[2],E=i[5],w=i[8];return r[0]=o*g+a*v+l*A,r[3]=o*m+a*M+l*E,r[6]=o*p+a*x+l*w,r[1]=c*g+h*v+u*A,r[4]=c*m+h*M+u*E,r[7]=c*p+h*x+u*w,r[2]=f*g+d*v+_*A,r[5]=f*m+d*M+_*E,r[8]=f*p+d*x+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,_=t*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gu.makeScale(e,t)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gu=new $e;function z_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ka(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ay(){let s=ka("canvas");return s.style.display="block",s}var gg={};function Ia(s){s in gg||(gg[s]=!0,console.warn(s))}function Ry(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Cy(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Py(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ot={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(s.r=So(s.r),s.g=So(s.g),s.b=So(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?qc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ps(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function So(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var _g=[.64,.33,.3,.6,.15,.06],xg=[.2126,.7152,.0722],vg=[.3127,.329],yg=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mg=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[bn]:{primaries:_g,whitePoint:vg,transfer:qc,toXYZ:yg,fromXYZ:Mg,luminanceCoefficients:xg,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:_g,whitePoint:vg,transfer:vt,toXYZ:yg,fromXYZ:Mg,luminanceCoefficients:xg,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});var io,Lf=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{io===void 0&&(io=ka("canvas")),io.width=e.width,io.height=e.height;let n=io.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=io}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ka("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ps(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ps(t[n]/255)*255):t[n]=ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Iy=0,Mc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_u(i[o].image)):r.push(_u(i[o]))}else r=_u(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function _u(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ly=0,ln=class s extends Xs{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=fs,i=fs,r=Wn,o=Vi,a=mi,l=ms,c=s.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Pi(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=E_;ln.DEFAULT_ANISOTROPY=1;var dt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,x=(d+1)/2,A=(p+1)/2,E=(h+f)/4,w=(u+g)/4,C=(_+m)/4;return M>x&&M>A?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=w/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=C/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Df=class extends Xs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gs=class extends Df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sc=class extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nf=class extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let m=1-a,p=l*f+c*d+h*_+u*g,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let A=Math.sqrt(M),E=Math.atan2(A,p*v);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}let x=a*v;if(l=l*m+f*x,c=c*m+d*x,h=h*m+_*x,u=u*m+g*x,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*d-c*f,e[t+1]=l*_+h*f+c*u-a*d,e[t+2]=c*_+h*d+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xu=new F,Sg=new Ii,gi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wi):wi.fromBufferAttribute(r,o),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vl.copy(n.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),Gl.subVectors(this.max,ba),so.subVectors(e.a,ba),ro.subVectors(e.b,ba),oo.subVectors(e.c,ba),Os.subVectors(ro,so),Fs.subVectors(oo,ro),yr.subVectors(so,oo);let t=[0,-Os.z,Os.y,0,-Fs.z,Fs.y,0,-yr.z,yr.y,Os.z,0,-Os.x,Fs.z,0,-Fs.x,yr.z,0,-yr.x,-Os.y,Os.x,0,-Fs.y,Fs.x,0,-yr.y,yr.x,0];return!vu(t,so,ro,oo,Gl)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,so,ro,oo,Gl))?!1:(Wl.crossVectors(Os,Fs),t=[Wl.x,Wl.y,Wl.z],vu(t,so,ro,oo,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ss=[new F,new F,new F,new F,new F,new F,new F,new F],wi=new F,Vl=new gi,so=new F,ro=new F,oo=new F,Os=new F,Fs=new F,yr=new F,ba=new F,Gl=new F,Wl=new F,Mr=new F;function vu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Mr.fromArray(s,r);let a=i.x*Math.abs(Mr.x)+i.y*Math.abs(Mr.y)+i.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),h=n.dot(Mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Dy=new gi,wa=new F,yu=new F,ni=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);let t=wa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(yu)),this.expandByPoint(wa.copy(e.center).sub(yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},rs=new F,Mu=new F,Xl=new F,Bs=new F,Su=new F,Yl=new F,bu=new F,Lo=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mu.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),Bs.copy(this.origin).sub(Mu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xl),a=Bs.dot(this.direction),l=-Bs.dot(Xl),c=Bs.lengthSq(),h=Math.abs(1-o*o),u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Mu).addScaledVector(Xl,f),d}intersectSphere(e,t){rs.subVectors(e.center,this.origin);let n=rs.dot(this.direction),i=rs.dot(rs)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,n,i,r){Su.subVectors(t,e),Yl.subVectors(n,e),bu.crossVectors(Su,Yl);let o=this.direction.dot(bu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bs.subVectors(this.origin,e);let l=a*this.direction.dot(Yl.crossVectors(Bs,Yl));if(l<0)return null;let c=a*this.direction.dot(Su.cross(Bs));if(c<0||l+c>o)return null;let h=-a*Bs.dot(bu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,_,g,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ao.setFromMatrixColumn(e,0).length(),r=1/ao.setFromMatrixColumn(e,1).length(),o=1/ao.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,_=c*h,g=c*u;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,_=c*h,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=_*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+_,t[10]=f-g*u}else if(e.order==="XZY"){let f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ny,e,Uy)}lookAt(e,t,n){let i=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ks.crossVectors(n,ei),ks.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ks.crossVectors(n,ei)),ks.normalize(),ql.crossVectors(ei,ks),i[0]=ks.x,i[4]=ql.x,i[8]=ei.x,i[1]=ks.y,i[5]=ql.y,i[9]=ei.y,i[2]=ks.z,i[6]=ql.z,i[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],A=n[15],E=i[0],w=i[4],C=i[8],S=i[12],y=i[1],P=i[5],U=i[9],B=i[13],H=i[2],q=i[6],X=i[10],K=i[14],G=i[3],te=i[7],I=i[11],he=i[15];return r[0]=o*E+a*y+l*H+c*G,r[4]=o*w+a*P+l*q+c*te,r[8]=o*C+a*U+l*X+c*I,r[12]=o*S+a*B+l*K+c*he,r[1]=h*E+u*y+f*H+d*G,r[5]=h*w+u*P+f*q+d*te,r[9]=h*C+u*U+f*X+d*I,r[13]=h*S+u*B+f*K+d*he,r[2]=_*E+g*y+m*H+p*G,r[6]=_*w+g*P+m*q+p*te,r[10]=_*C+g*U+m*X+p*I,r[14]=_*S+g*B+m*K+p*he,r[3]=v*E+M*y+x*H+A*G,r[7]=v*w+M*P+x*q+A*te,r[11]=v*C+M*U+x*X+A*I,r[15]=v*S+M*B+x*K+A*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=u*m*c-g*f*c+g*l*d-a*m*d-u*l*p+a*f*p,M=_*f*c-h*m*c-_*l*d+o*m*d+h*l*p-o*f*p,x=h*g*c-_*u*c+_*a*d-o*g*d-h*a*p+o*u*p,A=_*u*l-h*g*l-_*a*f+o*g*f+h*a*m-o*u*m,E=t*v+n*M+i*x+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return e[0]=v*w,e[1]=(g*f*r-u*m*r-g*i*d+n*m*d+u*i*p-n*f*p)*w,e[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=M*w,e[5]=(h*m*r-_*f*r+_*i*d-t*m*d-h*i*p+t*f*p)*w,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=x*w,e[9]=(_*u*r-h*g*r-_*n*d+t*g*d+h*n*p-t*u*p)*w,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*w,e[12]=A*w,e[13]=(h*g*i-_*u*i+_*n*f-t*g*f-h*n*m+t*u*m)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,_=r*u,g=o*h,m=o*u,p=a*u,v=l*c,M=l*h,x=l*u,A=n.x,E=n.y,w=n.z;return i[0]=(1-(g+p))*A,i[1]=(d+x)*A,i[2]=(_-M)*A,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(_+M)*w,i[9]=(m-v)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ao.set(i[0],i[1],i[2]).length(),o=ao.set(i[4],i[5],i[6]).length(),a=ao.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ti.copy(this);let c=1/r,h=1/o,u=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,t.setFromRotationMatrix(Ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ds){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,_;if(a===ds)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===yc)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ds){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*h,_,g;if(a===ds)_=(o+r)*u,g=-2*u;else if(a===yc)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ao=new F,Ti=new je,Ny=new F(0,0,0),Uy=new F(1,1,1),ks=new F,ql=new F,ei=new F,bg=new je,wg=new Ii,Xi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wg.setFromEuler(this),this.setFromQuaternion(wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var bc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Oy=0,Tg=new F,lo=new Ii,os=new je,Zl=new F,Ta=new F,Fy=new F,By=new Ii,Eg=new F(1,0,0),Ag=new F(0,1,0),Rg=new F(0,0,1),Cg={type:"added"},ky={type:"removed"},co={type:"childadded",child:null},wu={type:"childremoved",child:null},Ht=class s extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new Xi,n=new Ii,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new $e}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(Eg,e)}rotateY(e){return this.rotateOnAxis(Ag,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,t){return Tg.copy(e).applyQuaternion(this.quaternion),this.position.add(Tg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eg,e)}translateY(e){return this.translateOnAxis(Ag,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zl.copy(e):Zl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Ta,Zl,this.up):os.lookAt(Zl,Ta,this.up),this.quaternion.setFromRotationMatrix(os),i&&(os.extractRotation(i.matrixWorld),lo.setFromRotationMatrix(os),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),co.child=e,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ky),wu.child=e,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,Fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,By,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ht.DEFAULT_UP=new F(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ei=new F,as=new F,Tu=new F,ls=new F,ho=new F,uo=new F,Pg=new F,Eu=new F,Au=new F,Ru=new F,Cu=new dt,Pu=new dt,Iu=new dt,Rr=class s{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ei.subVectors(e,t),i.cross(Ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ei.subVectors(i,t),as.subVectors(n,t),Tu.subVectors(e,t);let o=Ei.dot(Ei),a=Ei.dot(as),l=Ei.dot(Tu),c=as.dot(as),h=as.dot(Tu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ls.x),l.addScaledVector(o,ls.y),l.addScaledVector(a,ls.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Cu.setScalar(0),Pu.setScalar(0),Iu.setScalar(0),Cu.fromBufferAttribute(e,t),Pu.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Cu,r.x),o.addScaledVector(Pu,r.y),o.addScaledVector(Iu,r.z),o}static isFrontFacing(e,t,n,i){return Ei.subVectors(n,t),as.subVectors(e,t),Ei.cross(as).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Ei.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ho.subVectors(i,n),uo.subVectors(r,n),Eu.subVectors(e,n);let l=ho.dot(Eu),c=uo.dot(Eu);if(l<=0&&c<=0)return t.copy(n);Au.subVectors(e,i);let h=ho.dot(Au),u=uo.dot(Au);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ho,o);Ru.subVectors(e,r);let d=ho.dot(Ru),_=uo.dot(Ru);if(_>=0&&d<=_)return t.copy(r);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(uo,a);let m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return Pg.subVectors(r,i),a=(u-h)/(u-h+(d-_)),t.copy(i).addScaledVector(Pg,a);let p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(ho,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Lu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=_d(e,1),t=yn(t,0,1),n=yn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lu(o,r,e+1/3),this.g=Lu(o,r,e),this.b=Lu(o,r,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=H_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ot.fromWorkingColorSpace(vn.copy(this),e),Math.round(yn(vn.r*255,0,255))*65536+Math.round(yn(vn.g*255,0,255))*256+Math.round(yn(vn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(vn.copy(this),t);let n=vn.r,i=vn.g,r=vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Wt){ot.fromWorkingColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,i=vn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zs),this.setHSL(zs.h+e,zs.s+t,zs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zs),e.getHSL(Kl);let n=Ua(zs.h,Kl.h,t),i=Ua(zs.s,Kl.s,t),r=Ua(zs.l,Kl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Ue;Ue.NAMES=H_;var zy=0,Xn=class extends Xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Pi(),this.name="",this.blending=yo,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=Zu,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qu&&(n.blendSrc=this.blendSrc),this.blendDst!==Zu&&(n.blendDst=this.blendDst),this.blendEquation!==Ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(n.stencilFail=this.stencilFail),this.stencilZFail!==no&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ii=class extends Xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=T_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new F,$l=new Je,en=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=If,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==If&&(e.usage=this.usage),e}};var wc=class extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tc=class extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Fn=class extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hy=0,pi=new je,Du=new Ht,fo=new F,ti=new gi,Ea=new gi,an=new F,si=class s extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z_(e)?Tc:wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fn(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ea.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(ti.min,Ea.min),ti.expandByPoint(an),an.addVectors(ti.max,Ea.max),ti.expandByPoint(an)):(ti.expandByPoint(Ea.min),ti.expandByPoint(Ea.max))}ti.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),an.add(fo)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new F,l[C]=new F;let c=new F,h=new F,u=new F,f=new Je,d=new Je,_=new Je,g=new F,m=new F;function p(C,S,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),_.sub(f);let P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),a[C].add(g),a[S].add(g),a[y].add(g),l[C].add(m),l[S].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){let y=v[C],P=y.start,U=y.count;for(let B=P,H=P+U;B<H;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new F,x=new F,A=new F,E=new F;function w(C){A.fromBufferAttribute(i,C),E.copy(A);let S=a[C];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(E,S);let P=x.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,S=v.length;C<S;++C){let y=v[C],P=y.start,U=y.count;for(let B=P,H=P+U;B<H;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){let _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[d++]}return new en(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ig=new je,Sr=new Lo,Jl=new ni,Lg=new F,jl=new F,Ql=new F,ec=new F,Nu=new F,tc=new F,Dg=new F,nc=new F,zt=class extends Ht{constructor(e=new si,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){tc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Nu.fromBufferAttribute(u,e),o?tc.addScaledVector(Nu,h):tc.addScaledVector(Nu.sub(t),h))}t.add(tc)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jl.copy(n.boundingSphere),Jl.applyMatrix4(r),Sr.copy(e.ray).recast(e.near),!(Jl.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Jl,Lg)===null||Sr.origin.distanceToSquared(Lg)>(e.far-e.near)**2))&&(Ig.copy(r).invert(),Sr.copy(e.ray).applyMatrix4(Ig),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,A=M;x<A;x+=3){let E=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);i=ic(this,p,e,n,c,h,u,E,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=ic(this,o,e,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,A=M;x<A;x+=3){let E=x,w=x+1,C=x+2;i=ic(this,p,e,n,c,h,u,E,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let v=m,M=m+1,x=m+2;i=ic(this,o,e,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Vy(s,e,t,n,i,r,o,a){let l;if(e.side===Mn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Gi,a),l===null)return null;nc.copy(a),nc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(nc);return c<t.near||c>t.far?null:{distance:c,point:nc.clone(),object:s}}function ic(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,jl),s.getVertexPosition(l,Ql),s.getVertexPosition(c,ec);let h=Vy(s,e,t,n,jl,Ql,ec,Dg);if(h){let u=new F;Rr.getBarycoord(Dg,jl,Ql,ec,u),i&&(h.uv=Rr.getInterpolatedAttribute(i,a,l,c,u,new Je)),r&&(h.uv1=Rr.getInterpolatedAttribute(r,a,l,c,u,new Je)),o&&(h.normal=Rr.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};Rr.getNormal(jl,Ql,ec,f.normal),h.face=f,h.barycoord=u}return h}var Ir=class s extends si{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(h,3)),this.setAttribute("uv",new Fn(u,2));function _(g,m,p,v,M,x,A,E,w,C,S){let y=x/w,P=A/C,U=x/2,B=A/2,H=E/2,q=w+1,X=C+1,K=0,G=0,te=new F;for(let I=0;I<X;I++){let he=I*P-B;for(let Le=0;Le<q;Le++){let et=Le*y-U;te[g]=et*v,te[m]=he*M,te[p]=H,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=E>0?1:-1,h.push(te.x,te.y,te.z),u.push(Le/w),u.push(1-I/C),K+=1}}for(let I=0;I<C;I++)for(let he=0;he<w;he++){let Le=f+he+q*I,et=f+he+q*(I+1),Z=f+(he+1)+q*(I+1),ee=f+(he+1)+q*I;l.push(Le,et,ee),l.push(et,Z,ee),G+=6}a.addGroup(d,G,S),d+=G,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Do(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Un(s){let e={};for(let t=0;t<s.length;t++){let n=Do(s[t]);for(let i in n)e[i]=n[i]}return e}function Gy(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function V_(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Wy={clone:Do,merge:Un},Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yi=class extends Xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=Yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=Gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ec=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ds}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hs=new F,Ng=new Je,Ug=new Je,$t=class extends Ec{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hs.x,Hs.y).multiplyScalar(-e/Hs.z),Hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hs.x,Hs.y).multiplyScalar(-e/Hs.z)}getViewSize(e,t){return this.getViewBounds(e,Ng,Ug),t.subVectors(Ug,Ng)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Na*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},po=-90,mo=1,Uf=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $t(po,mo,e,t);i.layers=this.layers,this.add(i);let r=new $t(po,mo,e,t);r.layers=this.layers,this.add(r);let o=new $t(po,mo,e,t);o.layers=this.layers,this.add(o);let a=new $t(po,mo,e,t);a.layers=this.layers,this.add(a);let l=new $t(po,mo,e,t);l.layers=this.layers,this.add(l);let c=new $t(po,mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ds)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ac=class extends ln{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:To,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Of=class extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ac(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ir(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Gs});r.uniforms.tEquirect.value=t;let o=new zt(i,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Wn),new Uf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Uu=new F,qy=new F,Zy=new $e,us=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Uu.subVectors(n,t).cross(qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Uu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zy.getNormalMatrix(e),i=this.coplanarPoint(Uu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},br=new ni,sc=new F,za=class{constructor(e=new us,t=new us,n=new us,i=new us,r=new us,o=new us){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ds){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,m-d,x-p).normalize(),n[1].setComponents(l+r,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+h,m+_,x+v).normalize(),n[3].setComponents(l-o,f-h,m-_,x-v).normalize(),n[4].setComponents(l-a,f-u,m-g,x-M).normalize(),t===ds)n[5].setComponents(l+a,f+u,m+g,x+M).normalize();else if(t===yc)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(sc.x=i.normal.x>0?e.max.x:e.min.x,sc.y=i.normal.y>0?e.max.y:e.min.y,sc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function G_(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ky(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){let _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){let g=u[d];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ys=class s extends si{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let M=0;M<c;M++){let x=M*u-r;_.push(x,-v,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,x=v+c*(p+1),A=v+1+c*(p+1),E=v+1+c*p;d.push(M,x,E),d.push(x,A,E)}this.setIndex(d),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},$y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ES=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,US=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$S=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ib=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_b=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:$y,alphahash_pars_fragment:Jy,alphamap_fragment:jy,alphamap_pars_fragment:Qy,alphatest_fragment:eM,alphatest_pars_fragment:tM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:sM,batching_vertex:rM,begin_vertex:oM,beginnormal_vertex:aM,bsdfs:lM,iridescence_fragment:cM,bumpmap_pars_fragment:hM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:_M,color_vertex:xM,common:vM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:MM,displacementmap_pars_vertex:SM,displacementmap_vertex:bM,emissivemap_fragment:wM,emissivemap_pars_fragment:TM,colorspace_fragment:EM,colorspace_pars_fragment:AM,envmap_fragment:RM,envmap_common_pars_fragment:CM,envmap_pars_fragment:PM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:VM,envmap_vertex:LM,fog_vertex:DM,fog_pars_vertex:NM,fog_fragment:UM,fog_pars_fragment:OM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:BM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:zM,lights_pars_begin:HM,lights_toon_fragment:GM,lights_toon_pars_fragment:WM,lights_phong_fragment:XM,lights_phong_pars_fragment:YM,lights_physical_fragment:qM,lights_physical_pars_fragment:ZM,lights_fragment_begin:KM,lights_fragment_maps:$M,lights_fragment_end:JM,logdepthbuf_fragment:jM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:eS,logdepthbuf_vertex:tS,map_fragment:nS,map_pars_fragment:iS,map_particle_fragment:sS,map_particle_pars_fragment:rS,metalnessmap_fragment:oS,metalnessmap_pars_fragment:aS,morphinstance_vertex:lS,morphcolor_vertex:cS,morphnormal_vertex:hS,morphtarget_pars_vertex:uS,morphtarget_vertex:fS,normal_fragment_begin:dS,normal_fragment_maps:pS,normal_pars_fragment:mS,normal_pars_vertex:gS,normal_vertex:_S,normalmap_pars_fragment:xS,clearcoat_normal_fragment_begin:vS,clearcoat_normal_fragment_maps:yS,clearcoat_pars_fragment:MS,iridescence_pars_fragment:SS,opaque_fragment:bS,packing:wS,premultiplied_alpha_fragment:TS,project_vertex:ES,dithering_fragment:AS,dithering_pars_fragment:RS,roughnessmap_fragment:CS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:IS,shadowmap_pars_vertex:LS,shadowmap_vertex:DS,shadowmask_pars_fragment:NS,skinbase_vertex:US,skinning_pars_vertex:OS,skinning_vertex:FS,skinnormal_vertex:BS,specularmap_fragment:kS,specularmap_pars_fragment:zS,tonemapping_fragment:HS,tonemapping_pars_fragment:VS,transmission_fragment:GS,transmission_pars_fragment:WS,uv_pars_fragment:XS,uv_pars_vertex:YS,uv_vertex:qS,worldpos_vertex:ZS,background_vert:KS,background_frag:$S,backgroundCube_vert:JS,backgroundCube_frag:jS,cube_vert:QS,cube_frag:eb,depth_vert:tb,depth_frag:nb,distanceRGBA_vert:ib,distanceRGBA_frag:sb,equirect_vert:rb,equirect_frag:ob,linedashed_vert:ab,linedashed_frag:lb,meshbasic_vert:cb,meshbasic_frag:hb,meshlambert_vert:ub,meshlambert_frag:fb,meshmatcap_vert:db,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:_b,meshphong_frag:xb,meshphysical_vert:vb,meshphysical_frag:yb,meshtoon_vert:Mb,meshtoon_frag:Sb,points_vert:bb,points_frag:wb,shadow_vert:Tb,shadow_frag:Eb,sprite_vert:Ab,sprite_frag:Rb},ge={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},zi={basic:{uniforms:Un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Un([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Un([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Un([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Un([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Un([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Un([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Un([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Un([ge.lights,ge.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};zi.physical={uniforms:Un([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var rc={r:0,b:0,g:0},wr=new Xi,Cb=new je;function Pb(s,e,t,n,i,r,o){let a=new Ue(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function g(v){let M=!1,x=_(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),M=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,M){let x=_(M);x&&(x.isCubeTexture||x.mapping===Xc)?(h===void 0&&(h=new zt(new Ir(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Do(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),wr.copy(M.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(wr)),h.material.toneMapped=ot.getTransfer(x.colorSpace)!==vt,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zt(new Ys(2,2),new Yi({name:"BackgroundMaterial",uniforms:Do(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(rc,V_(s)),n.buffers.color.setClear(rc.r,rc.g,rc.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:g,addToRenderList:m}}function Ib(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(y,P,U,B,H){let q=!1,X=u(B,U,P);r!==X&&(r=X,c(r.object)),q=d(y,B,U,H),q&&_(y,B,U,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(y,P,U,B),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,U){let B=U.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let q=H[P.id];q===void 0&&(q={},H[P.id]=q);let X=q[B];return X===void 0&&(X=f(l()),q[B]=X),X}function f(y){let P=[],U=[],B=[];for(let H=0;H<t;H++)P[H]=0,U[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,P,U,B){let H=r.attributes,q=P.attributes,X=0,K=U.getAttributes();for(let G in K)if(K[G].location>=0){let I=H[G],he=q[G];if(he===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),I===void 0||I.attribute!==he||he&&I.data!==he.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function _(y,P,U,B){let H={},q=P.attributes,X=0,K=U.getAttributes();for(let G in K)if(K[G].location>=0){let I=q[G];I===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(I=y.instanceColor));let he={};he.attribute=I,I&&I.data&&(he.data=I.data),H[G]=he,X++}r.attributes=H,r.attributesNum=X,r.index=B}function g(){let y=r.newAttributes;for(let P=0,U=y.length;P<U;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){let U=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;U[y]=1,B[y]===0&&(s.enableVertexAttribArray(y),B[y]=1),H[y]!==P&&(s.vertexAttribDivisor(y,P),H[y]=P)}function v(){let y=r.newAttributes,P=r.enabledAttributes;for(let U=0,B=P.length;U<B;U++)P[U]!==y[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function M(y,P,U,B,H,q,X){X===!0?s.vertexAttribIPointer(y,P,U,H,q):s.vertexAttribPointer(y,P,U,B,H,q)}function x(y,P,U,B){g();let H=B.attributes,q=U.getAttributes(),X=P.defaultAttributeValues;for(let K in q){let G=q[K];if(G.location>=0){let te=H[K];if(te===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){let I=te.normalized,he=te.itemSize,Le=e.get(te);if(Le===void 0)continue;let et=Le.buffer,Z=Le.type,ee=Le.bytesPerElement,_e=Z===s.INT||Z===s.UNSIGNED_INT||te.gpuType===hd;if(te.isInterleavedBufferAttribute){let ne=te.data,be=ne.stride,Ee=te.offset;if(ne.isInstancedInterleavedBuffer){for(let He=0;He<G.locationSize;He++)p(G.location+He,ne.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let He=0;He<G.locationSize;He++)m(G.location+He);s.bindBuffer(s.ARRAY_BUFFER,et);for(let He=0;He<G.locationSize;He++)M(G.location+He,he/G.locationSize,Z,I,be*ee,(Ee+he/G.locationSize*He)*ee,_e)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne,te.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ne=0;ne<G.locationSize;ne++)M(G.location+ne,he/G.locationSize,Z,I,he*ee,he/G.locationSize*ne*ee,_e)}}else if(X!==void 0){let I=X[K];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(G.location,I);break;case 3:s.vertexAttrib3fv(G.location,I);break;case 4:s.vertexAttrib4fv(G.location,I);break;default:s.vertexAttrib1fv(G.location,I)}}}}v()}function A(){C();for(let y in n){let P=n[y];for(let U in P){let B=P[U];for(let H in B)h(B[H].object),delete B[H];delete P[U]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let U in P){let B=P[U];for(let H in B)h(B[H].object),delete B[H];delete P[U]}delete n[y.id]}function w(y){for(let P in n){let U=n[P];if(U[y.id]===void 0)continue;let B=U[y.id];for(let H in B)h(B[H].object),delete B[H];delete U[y.id]}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Lb(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Db(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==mi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===$a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ms&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ci&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function Nb(s){let e=this,t=null,n=0,i=!1,r=!1,o=new us,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,M=v*4,x=p.clippingState||null;l.value=x,x=h(_,f,M,d);for(let A=0;A!==M;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=d+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==g;++M,x+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Ub(s){let e=new WeakMap;function t(o,a){return a===nf?o.mapping=To:a===sf&&(o.mapping=Eo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===nf||a===sf)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Of(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var No=class extends Ec{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vo=4,Og=[.125,.215,.35,.446,.526,.582],Cr=20,Ou=new No,Fg=new Ue,Fu=null,Bu=0,ku=0,zu=!1,Er=(1+Math.sqrt(5))/2,go=1/Er,Bg=[new F(-Er,go,0),new F(Er,go,0),new F(-go,0,Er),new F(go,0,Er),new F(0,Er,-go),new F(0,Er,go),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Bu,ku),this._renderer.xr.enabled=zu,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===To||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:$a,format:mi,colorSpace:bn,depthBuffer:!1},i=kg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ob(r)),this._blurMaterial=Fb(r,e,t)}return i}_compileMaterial(e){let t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Ou)}_sceneToCubeUV(e,t,n,i){let a=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Fg),h.toneMapping=Ws,h.autoClear=!1;let d=new ii({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new zt(new Ir,d),g=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Fg),g=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;oc(i,v*M,p>2?M:0,M,M),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===To||e.mapping===Eo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;oc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ou)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bg[(i-r-1)%Bg.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Cr-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Cr;m>Cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);let p=[],v=0;for(let w=0;w<Cr;++w){let C=w/g,S=Math.exp(-C*C/2);p.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;let x=this._sizeLods[i],A=3*x*(i>M-vo?i-M+vo:0),E=4*(this._cubeSize-x);oc(t,A,E,3*x,2*x),l.setRenderTarget(t),l.render(u,Ou)}};function Ob(s){let e=[],t=[],n=[],i=s,r=s-vo+1+Og.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-vo?l=Og[o-s+vo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*d),M=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,C=E>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(S,g*_*E),M.set(f,m*_*E);let y=[E,E,E,E,E,E];x.set(y,p*_*E)}let A=new si;A.setAttribute("position",new en(v,g)),A.setAttribute("uv",new en(M,m)),A.setAttribute("faceIndex",new en(x,p)),e.push(A),i>vo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kg(s,e,t){let n=new gs(s,e,t);return n.texture.mapping=Xc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fb(s,e,t){let n=new Float32Array(Cr),i=new F(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function zg(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function Hg(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gs,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bb(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===nf||l===sf,h=l===To||l===Eo;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Uo(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Uo(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ia("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zb(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let _ in f)e.update(f[_],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let _ in d){let g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,_=u.attributes.position,g=0;if(d!==null){let v=d.array;g=d.version;for(let M=0,x=v.length;M<x;M+=3){let A=v[M+0],E=v[M+1],w=v[M+2];f.push(A,E,E,w,w,A)}}else if(_!==void 0){let v=_.array;g=_.version;for(let M=0,x=v.length/3-1;M<x;M+=3){let A=M+0,E=M+1,w=M+2;f.push(A,E,E,w,w,A)}}else return;let m=new(z_(f)?Tc:wc)(f,1);m.version=g;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hb(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function h(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function u(f,d,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v]*g[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gb(s,e,t){let n=new WeakMap,i=new dt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;d===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*A*4*u),w=new Sc(E,x,A,u);w.type=Ci,w.needsUpdate=!0;let C=M*4;for(let y=0;y<u;y++){let P=m[y],U=p[y],B=v[y],H=x*A*4*y;for(let q=0;q<P.count;q++){let X=q*C;d===!0&&(i.fromBufferAttribute(P,q),E[H+X+0]=i.x,E[H+X+1]=i.y,E[H+X+2]=i.z,E[H+X+3]=0),_===!0&&(i.fromBufferAttribute(U,q),E[H+X+4]=i.x,E[H+X+5]=i.y,E[H+X+6]=i.z,E[H+X+7]=0),g===!0&&(i.fromBufferAttribute(B,q),E[H+X+8]=i.x,E[H+X+9]=i.y,E[H+X+10]=i.z,E[H+X+11]=B.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new Je(x,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Wb(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Rc=class extends ln{constructor(e,t,n,i,r,o,a,l,c,h=Mo){if(h!==Mo&&h!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mo&&(n=Pr),n===void 0&&h===Ro&&(n=Ao),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},W_=new ln,Vg=new Rc(1,1),X_=new Sc,Y_=new Nf,q_=new Ac,Gg=[],Wg=[],Xg=new Float32Array(16),Yg=new Float32Array(9),qg=new Float32Array(4);function Ho(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Gg[i];if(r===void 0&&(r=new Float32Array(i),Gg[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Zc(s,e){let t=Wg[e];t===void 0&&(t=new Int32Array(e),Wg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Xb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function qb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function Zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function Kb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;qg.set(n),s.uniformMatrix2fv(this.addr,!1,qg),nn(t,n)}}function $b(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Yg.set(n),s.uniformMatrix3fv(this.addr,!1,Yg),nn(t,n)}}function Jb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Xg.set(n),s.uniformMatrix4fv(this.addr,!1,Xg),nn(t,n)}}function jb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function ew(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function tw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function nw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function sw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function rw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function ow(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Vg.compareFunction=B_,r=Vg):r=W_,t.setTexture2D(e||r,i)}function aw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Y_,i)}function lw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||q_,i)}function cw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||X_,i)}function hw(s){switch(s){case 5126:return Xb;case 35664:return Yb;case 35665:return qb;case 35666:return Zb;case 35674:return Kb;case 35675:return $b;case 35676:return Jb;case 5124:case 35670:return jb;case 35667:case 35671:return Qb;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return sw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}function uw(s,e){s.uniform1fv(this.addr,e)}function fw(s,e){let t=Ho(e,this.size,2);s.uniform2fv(this.addr,t)}function dw(s,e){let t=Ho(e,this.size,3);s.uniform3fv(this.addr,t)}function pw(s,e){let t=Ho(e,this.size,4);s.uniform4fv(this.addr,t)}function mw(s,e){let t=Ho(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gw(s,e){let t=Ho(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _w(s,e){let t=Ho(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xw(s,e){s.uniform1iv(this.addr,e)}function vw(s,e){s.uniform2iv(this.addr,e)}function yw(s,e){s.uniform3iv(this.addr,e)}function Mw(s,e){s.uniform4iv(this.addr,e)}function Sw(s,e){s.uniform1uiv(this.addr,e)}function bw(s,e){s.uniform2uiv(this.addr,e)}function ww(s,e){s.uniform3uiv(this.addr,e)}function Tw(s,e){s.uniform4uiv(this.addr,e)}function Ew(s,e,t){let n=this.cache,i=e.length,r=Zc(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||W_,r[o])}function Aw(s,e,t){let n=this.cache,i=e.length,r=Zc(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Y_,r[o])}function Rw(s,e,t){let n=this.cache,i=e.length,r=Zc(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||q_,r[o])}function Cw(s,e,t){let n=this.cache,i=e.length,r=Zc(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||X_,r[o])}function Pw(s){switch(s){case 5126:return uw;case 35664:return fw;case 35665:return dw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return _w;case 5124:case 35670:return xw;case 35667:case 35671:return vw;case 35668:case 35672:return yw;case 35669:case 35673:return Mw;case 5125:return Sw;case 36294:return bw;case 36295:return ww;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Cw}}var Ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hw(t.type)}},Bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pw(t.type)}},kf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function Zg(s,e){s.seq.push(e),s.map[e.id]=e}function Iw(s,e,t){let n=s.name,i=n.length;for(Hu.lastIndex=0;;){let r=Hu.exec(n),o=Hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zg(t,c===void 0?new Ff(a,s,e):new Bf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new kf(a),Zg(t,u)),t=u}}}var bo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Iw(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Kg(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Lw=37297,Dw=0;function Nw(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var $g=new $e;function Uw(s){ot._getMatrix($g,ot.workingColorSpace,s);let e=`mat3( ${$g.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case qc:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jg(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Nw(s.getShaderSource(e),o)}else return i}function Ow(s,e){let t=Uw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fw(s,e){let t;switch(e){case qv:t="Linear";break;case Zv:t="Reinhard";break;case Kv:t="Cineon";break;case $v:t="ACESFilmic";break;case jv:t="AgX";break;case ld:t="Neutral";break;case Jv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ac=new F;function Bw(){ot.getLuminanceCoefficients(ac);let s=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function zw(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hw(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function La(s){return s!==""}function jg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(s){return s.replace(Vw,Ww)}var Gw=new Map;function Ww(s,e){let t=Qe[e];if(t===void 0){let n=Gw.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zf(t)}var Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e_(s){return s.replace(Xw,Yw)}function Yw(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function t_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function Zw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case To:case Eo:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function $w(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case T_:e="ENVMAP_BLENDING_MULTIPLY";break;case Xv:e="ENVMAP_BLENDING_MIX";break;case Yv:e="ENVMAP_BLENDING_ADD";break}return e}function Jw(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jw(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=qw(t),c=Zw(t),h=Kw(t),u=$w(t),f=Jw(t),d=kw(t),_=zw(r),g=i.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(La).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(La).join(`
`),p.length>0&&(p+=`
`)):(m=[t_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[t_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ws?"#define TONE_MAPPING":"",t.toneMapping!==Ws?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ws?Fw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Ow("linearToOutputTexel",t.outputColorSpace),Bw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),o=zf(o),o=jg(o,t),o=Qg(o,t),a=zf(a),a=jg(a,t),a=Qg(a,t),o=e_(o),a=e_(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+m+o,x=v+p+a,A=Kg(i,i.VERTEX_SHADER,M),E=Kg(i,i.FRAGMENT_SHADER,x);i.attachShader(g,A),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(E).trim(),q=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,E);else{let K=Jg(i,A,"vertex"),G=Jg(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+K+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||H==="")&&(X=!1);X&&(P.diagnostics={runnable:q,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(A),i.deleteShader(E),C=new bo(i,g),S=Hw(i,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Lw)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}var Qw=0,Hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vf(e),t.set(e,n)),n}},Vf=class{constructor(e){this.id=Qw++,this.code=e,this.usedTimes=0}};function eT(s,e,t,n,i,r,o){let a=new bc,l=new Hf,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,U,B){let H=U.fog,q=B.geometry,X=S.isMeshStandardMaterial?U.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),G=K&&K.mapping===Xc?K.image.height:null,te=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let I=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=I!==void 0?I.length:0,Le=0;q.morphAttributes.position!==void 0&&(Le=1),q.morphAttributes.normal!==void 0&&(Le=2),q.morphAttributes.color!==void 0&&(Le=3);let et,Z,ee,_e;if(te){let xe=zi[te];et=xe.vertexShader,Z=xe.fragmentShader}else et=S.vertexShader,Z=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);let ne=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ee=B.isInstancedMesh===!0,He=B.isBatchedMesh===!0,tt=!!S.map,Ve=!!S.matcap,Pe=!!K,D=!!S.aoMap,yt=!!S.lightMap,Fe=!!S.bumpMap,k=!!S.normalMap,we=!!S.displacementMap,at=!!S.emissiveMap,Ae=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,W=S.clearcoat>0,Q=S.dispersion>0,j=S.iridescence>0,$=S.sheen>0,ue=S.transmission>0,ae=b&&!!S.anisotropyMap,pe=W&&!!S.clearcoatMap,Xe=W&&!!S.clearcoatNormalMap,ie=W&&!!S.clearcoatRoughnessMap,oe=j&&!!S.iridescenceMap,De=j&&!!S.iridescenceThicknessMap,Ie=$&&!!S.sheenColorMap,ve=$&&!!S.sheenRoughnessMap,Ze=!!S.specularMap,Oe=!!S.specularColorMap,ht=!!S.specularIntensityMap,L=ue&&!!S.transmissionMap,ce=ue&&!!S.thicknessMap,Y=!!S.gradientMap,J=!!S.alphaMap,le=S.alphaTest>0,fe=!!S.alphaHash,Be=!!S.extensions,ut=Ws;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ut=s.toneMapping);let Ot={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:Z,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:He,batchingColor:He&&B._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&B.instanceColor!==null,instancingMorph:Ee&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:bn,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:Ve,envMap:Pe,envMapMode:Pe&&K.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:yt,bumpMap:Fe,normalMap:k,displacementMap:f&&we,emissiveMap:at,normalMapObjectSpace:k&&S.normalMapType===iy,normalMapTangentSpace:k&&S.normalMapType===F_,metalnessMap:Ae,roughnessMap:R,anisotropy:b,anisotropyMap:ae,clearcoat:W,clearcoatMap:pe,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:j,iridescenceMap:oe,iridescenceThicknessMap:De,sheen:$,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:Ze,specularColorMap:Oe,specularIntensityMap:ht,transmission:ue,transmissionMap:L,thicknessMap:ce,gradientMap:Y,opaque:S.transparent===!1&&S.blending===yo&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:fe,combine:S.combine,mapUv:tt&&g(S.map.channel),aoMapUv:D&&g(S.aoMap.channel),lightMapUv:yt&&g(S.lightMap.channel),bumpMapUv:Fe&&g(S.bumpMap.channel),normalMapUv:k&&g(S.normalMap.channel),displacementMapUv:we&&g(S.displacementMap.channel),emissiveMapUv:at&&g(S.emissiveMap.channel),metalnessMapUv:Ae&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:ae&&g(S.anisotropyMap.channel),clearcoatMapUv:pe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(S.sheenRoughnessMap.channel),specularMapUv:Ze&&g(S.specularMap.channel),specularColorMapUv:Oe&&g(S.specularColorMap.channel),specularIntensityMapUv:ht&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:ce&&g(S.thicknessMap.channel),alphaMapUv:J&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(k||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(tt||J),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:at&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ai,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(y,S),M(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let y=_[S.type],P;if(y){let U=zi[y];P=Wy.clone(U.uniforms)}else P=S.uniforms;return P}function A(S,y){let P;for(let U=0,B=h.length;U<B;U++){let H=h[U];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new jw(s,y,S,r),h.push(P)),P}function E(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:C}}function tT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function nT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function n_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function i_(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,_,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,f,d,_,g,m){let p=o(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,_,g,m){let p=o(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||nT),n.length>1&&n.sort(f||n_),i.length>1&&i.sort(f||n_)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function iT(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new i_,s.set(n,[o])):i>=r.length?(o=new i_,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ue};break;case"SpotLight":t={position:new F,direction:new F,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function rT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var oT=0;function aT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lT(s){let e=new sT,t=rT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new je,o=new je;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,v=0,M=0,x=0,A=0,E=0,w=0;c.sort(aT);for(let S=0,y=c.length;S<y;S++){let P=c[S],U=P.color,B=P.intensity,H=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*B,u+=U.g*B,f+=U.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],B);w++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,G=t.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=X,d++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(B),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[g]=X;let K=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=K.matrix,P.castShadow){let G=t.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=q,x++}g++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(U).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let K=P.shadow,G=t.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=X,_++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=w,n.version=oT++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function s_(s){let e=new lT(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function cT(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new s_(s),e.set(i,[a])):r>=o.length?(a=new s_(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gf=class extends Xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wf=class extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},hT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fT(s,e,t){let n=new za,i=new Je,r=new Je,o=new dt,a=new Gf({depthPacking:ny}),l=new Wf,c={},h=t.maxTextureSize,u={[Gi]:Mn,[Mn]:Gi,[Ai]:Ai},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:hT,fragmentShader:uT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new si;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new zt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let p=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Gs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=p!==hs&&this.type===hs,H=p===hs&&this.type!==hs;for(let q=0,X=E.length;q<X;q++){let K=E[q],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let te=G.getFrameExtents();if(i.multiply(te),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,G.mapSize.y=r.y)),G.map===null||B===!0||H===!0){let he=this.type!==hs?{minFilter:Sn,magFilter:Sn}:{};G.map!==null&&G.map.dispose(),G.map=new gs(i.x,i.y,he),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let I=G.getViewportCount();for(let he=0;he<I;he++){let Le=G.getViewport(he);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),U.viewport(o),G.updateMatrices(K,he),n=G.getFrustum(),x(w,C,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===hs&&v(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,P)};function v(E,w){let C=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gs(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,C,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,C,d,g,null)}function M(E,w,C,S){let y=null,P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=y.uuid,B=w.uuid,H=c[U];H===void 0&&(H={},c[U]=H);let q=H[B];q===void 0&&(q=y.clone(),H[B]=q,w.addEventListener("dispose",A)),y=q}if(y.visible=w.visible,y.wireframe=w.wireframe,S===hs?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=s.properties.get(y);U.light=C}return y}function x(E,w,C,S,y){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===hs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let B=e.update(E),H=E.material;if(Array.isArray(H)){let q=B.groups;for(let X=0,K=q.length;X<K;X++){let G=q[X],te=H[G.materialIndex];if(te&&te.visible){let I=M(E,te,S,y);E.onBeforeShadow(s,E,w,C,B,I,G),s.renderBufferDirect(C,null,B,I,E,G),E.onAfterShadow(s,E,w,C,B,I,G)}}}else if(H.visible){let q=M(E,H,S,y);E.onBeforeShadow(s,E,w,C,B,q,null),s.renderBufferDirect(C,null,B,q,E,null),E.onAfterShadow(s,E,w,C,B,q,null)}}let U=E.children;for(let B=0,H=U.length;B<H;B++)x(U[B],w,C,S,y)}function A(E){E.target.removeEventListener("dispose",A);for(let C in c){let S=c[C],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var dT={[Ku]:$u,[Ju]:ef,[ju]:tf,[wo]:Qu,[$u]:Ku,[ef]:Ju,[tf]:ju,[Qu]:wo};function pT(s,e){function t(){let L=!1,ce=new dt,Y=null,J=new dt(0,0,0,0);return{setMask:function(le){Y!==le&&!L&&(s.colorMask(le,le,le,le),Y=le)},setLocked:function(le){L=le},setClear:function(le,fe,Be,ut,Ot){Ot===!0&&(le*=ut,fe*=ut,Be*=ut),ce.set(le,fe,Be,ut),J.equals(ce)===!1&&(s.clearColor(le,fe,Be,ut),J.copy(ce))},reset:function(){L=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let L=!1,ce=!1,Y=null,J=null,le=null;return{setReversed:function(fe){if(ce!==fe){let Be=e.get("EXT_clip_control");ce?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);let ut=le;le=null,this.setClear(ut)}ce=fe},getReversed:function(){return ce},setTest:function(fe){fe?ne(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!L&&(s.depthMask(fe),Y=fe)},setFunc:function(fe){if(ce&&(fe=dT[fe]),J!==fe){switch(fe){case Ku:s.depthFunc(s.NEVER);break;case $u:s.depthFunc(s.ALWAYS);break;case Ju:s.depthFunc(s.LESS);break;case wo:s.depthFunc(s.LEQUAL);break;case ju:s.depthFunc(s.EQUAL);break;case Qu:s.depthFunc(s.GEQUAL);break;case ef:s.depthFunc(s.GREATER);break;case tf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=fe}},setLocked:function(fe){L=fe},setClear:function(fe){le!==fe&&(ce&&(fe=1-fe),s.clearDepth(fe),le=fe)},reset:function(){L=!1,Y=null,J=null,le=null,ce=!1}}}function i(){let L=!1,ce=null,Y=null,J=null,le=null,fe=null,Be=null,ut=null,Ot=null;return{setTest:function(xe){L||(xe?ne(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(xe){ce!==xe&&!L&&(s.stencilMask(xe),ce=xe)},setFunc:function(xe,Te,Ke){(Y!==xe||J!==Te||le!==Ke)&&(s.stencilFunc(xe,Te,Ke),Y=xe,J=Te,le=Ke)},setOp:function(xe,Te,Ke){(fe!==xe||Be!==Te||ut!==Ke)&&(s.stencilOp(xe,Te,Ke),fe=xe,Be=Te,ut=Ke)},setLocked:function(xe){L=xe},setClear:function(xe){Ot!==xe&&(s.clearStencil(xe),Ot=xe)},reset:function(){L=!1,ce=null,Y=null,J=null,le=null,fe=null,Be=null,ut=null,Ot=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,M=null,x=null,A=null,E=null,w=new Ue(0,0,0),C=0,S=!1,y=null,P=null,U=null,B=null,H=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=K>=2);let te=null,I={},he=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),et=new dt().fromArray(he),Z=new dt().fromArray(Le);function ee(L,ce,Y,J){let le=new Uint8Array(4),fe=s.createTexture();s.bindTexture(L,fe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<Y;Be++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ce+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return fe}let _e={};_e[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(wo),Fe(!1),k(rg),ne(s.CULL_FACE),D(Gs);function ne(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function be(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ee(L,ce){return u[L]!==ce?(s.bindFramebuffer(L,ce),u[L]=ce,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function He(L,ce){let Y=d,J=!1;if(L){Y=f.get(ce),Y===void 0&&(Y=[],f.set(ce,Y));let le=L.textures;if(Y.length!==le.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,Be=le.length;fe<Be;fe++)Y[fe]=s.COLOR_ATTACHMENT0+fe;Y.length=le.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function tt(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let Ve={[Ar]:s.FUNC_ADD,[Rv]:s.FUNC_SUBTRACT,[Cv]:s.FUNC_REVERSE_SUBTRACT};Ve[Pv]=s.MIN,Ve[Iv]=s.MAX;let Pe={[Lv]:s.ZERO,[Dv]:s.ONE,[Nv]:s.SRC_COLOR,[qu]:s.SRC_ALPHA,[zv]:s.SRC_ALPHA_SATURATE,[Bv]:s.DST_COLOR,[Ov]:s.DST_ALPHA,[Uv]:s.ONE_MINUS_SRC_COLOR,[Zu]:s.ONE_MINUS_SRC_ALPHA,[kv]:s.ONE_MINUS_DST_COLOR,[Fv]:s.ONE_MINUS_DST_ALPHA,[Hv]:s.CONSTANT_COLOR,[Vv]:s.ONE_MINUS_CONSTANT_COLOR,[Gv]:s.CONSTANT_ALPHA,[Wv]:s.ONE_MINUS_CONSTANT_ALPHA};function D(L,ce,Y,J,le,fe,Be,ut,Ot,xe){if(L===Gs){g===!0&&(be(s.BLEND),g=!1);return}if(g===!1&&(ne(s.BLEND),g=!0),L!==Av){if(L!==m||xe!==S){if((p!==Ar||x!==Ar)&&(s.blendEquation(s.FUNC_ADD),p=Ar,x=Ar),xe)switch(L){case yo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case og:s.blendFunc(s.ONE,s.ONE);break;case ag:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case yo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case og:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ag:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,M=null,A=null,E=null,w.set(0,0,0),C=0,m=L,S=xe}return}le=le||ce,fe=fe||Y,Be=Be||J,(ce!==p||le!==x)&&(s.blendEquationSeparate(Ve[ce],Ve[le]),p=ce,x=le),(Y!==v||J!==M||fe!==A||Be!==E)&&(s.blendFuncSeparate(Pe[Y],Pe[J],Pe[fe],Pe[Be]),v=Y,M=J,A=fe,E=Be),(ut.equals(w)===!1||Ot!==C)&&(s.blendColor(ut.r,ut.g,ut.b,Ot),w.copy(ut),C=Ot),m=L,S=!1}function yt(L,ce){L.side===Ai?be(s.CULL_FACE):ne(s.CULL_FACE);let Y=L.side===Mn;ce&&(Y=!Y),Fe(Y),L.blending===yo&&L.transparent===!1?D(Gs):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),at(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){y!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),y=L)}function k(L){L!==Tv?(ne(s.CULL_FACE),L!==P&&(L===rg?s.cullFace(s.BACK):L===Ev?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),P=L}function we(L){L!==U&&(X&&s.lineWidth(L),U=L)}function at(L,ce,Y){L?(ne(s.POLYGON_OFFSET_FILL),(B!==ce||H!==Y)&&(s.polygonOffset(ce,Y),B=ce,H=Y)):be(s.POLYGON_OFFSET_FILL)}function Ae(L){L?ne(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function R(L){L===void 0&&(L=s.TEXTURE0+q-1),te!==L&&(s.activeTexture(L),te=L)}function b(L,ce,Y){Y===void 0&&(te===null?Y=s.TEXTURE0+q-1:Y=te);let J=I[Y];J===void 0&&(J={type:void 0,texture:void 0},I[Y]=J),(J.type!==L||J.texture!==ce)&&(te!==Y&&(s.activeTexture(Y),te=Y),s.bindTexture(L,ce||_e[L]),J.type=L,J.texture=ce)}function W(){let L=I[te];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(L){et.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function ve(L){Z.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function Ze(L,ce){let Y=c.get(ce);Y===void 0&&(Y=new WeakMap,c.set(ce,Y));let J=Y.get(L);J===void 0&&(J=s.getUniformBlockIndex(ce,L.name),Y.set(L,J))}function Oe(L,ce){let J=c.get(ce).get(L);l.get(ce)!==J&&(s.uniformBlockBinding(ce,J,L.__bindingPointIndex),l.set(ce,J))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},te=null,I={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,M=null,x=null,A=null,E=null,w=new Ue(0,0,0),C=0,S=!1,y=null,P=null,U=null,B=null,H=null,et.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:be,bindFramebuffer:Ee,drawBuffers:He,useProgram:tt,setBlending:D,setMaterial:yt,setFlipSided:Fe,setCullFace:k,setLineWidth:we,setPolygonOffset:at,setScissorTest:Ae,activeTexture:R,bindTexture:b,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:j,texImage2D:oe,texImage3D:De,updateUBOMapping:Ze,uniformBlockBinding:Oe,texStorage2D:Xe,texStorage3D:ie,texSubImage2D:$,texSubImage3D:ue,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Ie,viewport:ve,reset:ht}}function r_(s,e,t,n){let i=mT(n);switch(t){case P_:return s*e;case L_:return s*e;case D_:return s*e*2;case dd:return s*e/i.components*i.byteLength;case pd:return s*e/i.components*i.byteLength;case N_:return s*e*2/i.components*i.byteLength;case md:return s*e*2/i.components*i.byteLength;case I_:return s*e*3/i.components*i.byteLength;case mi:return s*e*4/i.components*i.byteLength;case gd:return s*e*4/i.components*i.byteLength;case mc:case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _c:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case of:case lf:return Math.max(s,16)*Math.max(e,8)/4;case rf:case af:return Math.max(s,8)*Math.max(e,8)/2;case cf:case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vc:case Ef:case Af:return Math.ceil(s/4)*Math.ceil(e/4)*16;case U_:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Cf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mT(s){switch(s){case ms:case A_:return{byteLength:1,components:1};case Ba:case R_:case $a:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case Pr:case hd:case Ci:return{byteLength:4,components:1};case C_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function gT(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return d?new OffscreenCanvas(R,b):ka("canvas")}function g(R,b,W){let Q=1,j=Ae(R);if((j.width>W||j.height>W)&&(Q=W/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(Q*j.width),ue=Math.floor(Q*j.height);u===void 0&&(u=_($,ue));let ae=b?_($,ue):u;return ae.width=$,ae.height=ue,ae.getContext("2d").drawImage(R,0,0,$,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+ue+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,b,W,Q,j=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=b;if(b===s.RED&&(W===s.FLOAT&&($=s.R32F),W===s.HALF_FLOAT&&($=s.R16F),W===s.UNSIGNED_BYTE&&($=s.R8)),b===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&($=s.R8UI),W===s.UNSIGNED_SHORT&&($=s.R16UI),W===s.UNSIGNED_INT&&($=s.R32UI),W===s.BYTE&&($=s.R8I),W===s.SHORT&&($=s.R16I),W===s.INT&&($=s.R32I)),b===s.RG&&(W===s.FLOAT&&($=s.RG32F),W===s.HALF_FLOAT&&($=s.RG16F),W===s.UNSIGNED_BYTE&&($=s.RG8)),b===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&($=s.RG8UI),W===s.UNSIGNED_SHORT&&($=s.RG16UI),W===s.UNSIGNED_INT&&($=s.RG32UI),W===s.BYTE&&($=s.RG8I),W===s.SHORT&&($=s.RG16I),W===s.INT&&($=s.RG32I)),b===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&($=s.RGB8UI),W===s.UNSIGNED_SHORT&&($=s.RGB16UI),W===s.UNSIGNED_INT&&($=s.RGB32UI),W===s.BYTE&&($=s.RGB8I),W===s.SHORT&&($=s.RGB16I),W===s.INT&&($=s.RGB32I)),b===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&($=s.RGBA8UI),W===s.UNSIGNED_SHORT&&($=s.RGBA16UI),W===s.UNSIGNED_INT&&($=s.RGBA32UI),W===s.BYTE&&($=s.RGBA8I),W===s.SHORT&&($=s.RGBA16I),W===s.INT&&($=s.RGBA32I)),b===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),b===s.RGBA){let ue=j?qc:ot.getTransfer(Q);W===s.FLOAT&&($=s.RGBA32F),W===s.HALF_FLOAT&&($=s.RGBA16F),W===s.UNSIGNED_BYTE&&($=ue===vt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,b){let W;return R?b===null||b===Pr||b===Ao?W=s.DEPTH24_STENCIL8:b===Ci?W=s.DEPTH32F_STENCIL8:b===Ba&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pr||b===Ao?W=s.DEPTH_COMPONENT24:b===Ci?W=s.DEPTH_COMPONENT32F:b===Ba&&(W=s.DEPTH_COMPONENT16),W}function A(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){let b=R.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&h.delete(b)}function w(R){let b=R.target;b.removeEventListener("dispose",w),y(b)}function C(R){let b=n.get(R);if(b.__webglInit===void 0)return;let W=R.source,Q=f.get(W);if(Q){let j=Q[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(R),Object.keys(Q).length===0&&f.delete(W)}n.remove(R)}function S(R){let b=n.get(R);s.deleteTexture(b.__webglTexture);let W=R.source,Q=f.get(W);delete Q[b.__cacheKey],o.memory.textures--}function y(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let j=0;j<b.__webglFramebuffer[Q].length;j++)s.deleteFramebuffer(b.__webglFramebuffer[Q][j]);else s.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Q]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=R.textures;for(let Q=0,j=W.length;Q<j;Q++){let $=n.get(W[Q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(W[Q])}n.remove(R)}let P=0;function U(){P=0}function B(){let R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function H(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function q(R,b){let W=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){let Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,R,b);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+b)}function X(R,b){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Z(W,R,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+b)}function K(R,b){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Z(W,R,b);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+b)}function G(R,b){let W=n.get(R);if(R.version>0&&W.__version!==R.version){ee(W,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+b)}let te={[Wi]:s.REPEAT,[fs]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},I={[Sn]:s.NEAREST,[cd]:s.NEAREST_MIPMAP_NEAREST,[xo]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[Da]:s.LINEAR_MIPMAP_NEAREST,[Vi]:s.LINEAR_MIPMAP_LINEAR},he={[sy]:s.NEVER,[hy]:s.ALWAYS,[ry]:s.LESS,[B_]:s.LEQUAL,[oy]:s.EQUAL,[cy]:s.GEQUAL,[ay]:s.GREATER,[ly]:s.NOTEQUAL};function Le(R,b){if(b.type===Ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===Da||b.magFilter===xo||b.magFilter===Vi||b.minFilter===Wn||b.minFilter===Da||b.minFilter===xo||b.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,te[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,te[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,te[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,I[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,I[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Sn||b.minFilter!==xo&&b.minFilter!==Vi||b.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function et(R,b){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));let Q=b.source,j=f.get(Q);j===void 0&&(j={},f.set(Q,j));let $=H(b);if($!==R.__cacheKey){j[$]===void 0&&(j[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),j[$].usedTimes++;let ue=j[R.__cacheKey];ue!==void 0&&(j[R.__cacheKey].usedTimes--,ue.usedTimes===0&&S(b)),R.__cacheKey=$,R.__webglTexture=j[$].texture}return W}function Z(R,b,W){let Q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=s.TEXTURE_3D);let j=et(R,b),$=b.source;t.bindTexture(Q,R.__webglTexture,s.TEXTURE0+W);let ue=n.get($);if($.version!==ue.__version||j===!0){t.activeTexture(s.TEXTURE0+W);let ae=ot.getPrimaries(ot.workingColorSpace),pe=b.colorSpace===Hi?null:ot.getPrimaries(b.colorSpace),Xe=b.colorSpace===Hi||ae===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ie=g(b.image,!1,i.maxTextureSize);ie=at(b,ie);let oe=r.convert(b.format,b.colorSpace),De=r.convert(b.type),Ie=M(b.internalFormat,oe,De,b.colorSpace,b.isVideoTexture);Le(Q,b);let ve,Ze=b.mipmaps,Oe=b.isVideoTexture!==!0,ht=ue.__version===void 0||j===!0,L=$.dataReady,ce=A(b,ie);if(b.isDepthTexture)Ie=x(b.format===Ro,b.type),ht&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Ie,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Ie,ie.width,ie.height,0,oe,De,null));else if(b.isDataTexture)if(Ze.length>0){Oe&&ht&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,Ze[0].width,Ze[0].height);for(let Y=0,J=Ze.length;Y<J;Y++)ve=Ze[Y],Oe?L&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,oe,De,ve.data):t.texImage2D(s.TEXTURE_2D,Y,Ie,ve.width,ve.height,0,oe,De,ve.data);b.generateMipmaps=!1}else Oe?(ht&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,ie.width,ie.height),L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,oe,De,ie.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,ie.width,ie.height,0,oe,De,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,Ze[0].width,Ze[0].height,ie.depth);for(let Y=0,J=Ze.length;Y<J;Y++)if(ve=Ze[Y],b.format!==mi)if(oe!==null)if(Oe){if(L)if(b.layerUpdates.size>0){let le=r_(ve.width,ve.height,b.format,b.type);for(let fe of b.layerUpdates){let Be=ve.data.subarray(fe*le/ve.data.BYTES_PER_ELEMENT,(fe+1)*le/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,fe,ve.width,ve.height,1,oe,Be)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ie.depth,oe,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ie,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ie.depth,oe,De,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ie,ve.width,ve.height,ie.depth,0,oe,De,ve.data)}else{Oe&&ht&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,Ze[0].width,Ze[0].height);for(let Y=0,J=Ze.length;Y<J;Y++)ve=Ze[Y],b.format!==mi?oe!==null?Oe?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,oe,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?L&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ve.width,ve.height,oe,De,ve.data):t.texImage2D(s.TEXTURE_2D,Y,Ie,ve.width,ve.height,0,oe,De,ve.data)}else if(b.isDataArrayTexture)if(Oe){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,ie.width,ie.height,ie.depth),L)if(b.layerUpdates.size>0){let Y=r_(ie.width,ie.height,b.format,b.type);for(let J of b.layerUpdates){let le=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,oe,De,le)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,oe,De,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,ie.width,ie.height,ie.depth,0,oe,De,ie.data);else if(b.isData3DTexture)Oe?(ht&&t.texStorage3D(s.TEXTURE_3D,ce,Ie,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,oe,De,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,ie.width,ie.height,ie.depth,0,oe,De,ie.data);else if(b.isFramebufferTexture){if(ht)if(Oe)t.texStorage2D(s.TEXTURE_2D,ce,Ie,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let le=0;le<ce;le++)t.texImage2D(s.TEXTURE_2D,le,Ie,Y,J,0,oe,De,null),Y>>=1,J>>=1}}else if(Ze.length>0){if(Oe&&ht){let Y=Ae(Ze[0]);t.texStorage2D(s.TEXTURE_2D,ce,Ie,Y.width,Y.height)}for(let Y=0,J=Ze.length;Y<J;Y++)ve=Ze[Y],Oe?L&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,oe,De,ve):t.texImage2D(s.TEXTURE_2D,Y,Ie,oe,De,ve);b.generateMipmaps=!1}else if(Oe){if(ht){let Y=Ae(ie);t.texStorage2D(s.TEXTURE_2D,ce,Ie,Y.width,Y.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,De,ie)}else t.texImage2D(s.TEXTURE_2D,0,Ie,oe,De,ie);m(b)&&p(Q),ue.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ee(R,b,W){if(b.image.length!==6)return;let Q=et(R,b),j=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+W);let $=n.get(j);if(j.version!==$.__version||Q===!0){t.activeTexture(s.TEXTURE0+W);let ue=ot.getPrimaries(ot.workingColorSpace),ae=b.colorSpace===Hi?null:ot.getPrimaries(b.colorSpace),pe=b.colorSpace===Hi||ue===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,oe=[];for(let J=0;J<6;J++)!Xe&&!ie?oe[J]=g(b.image[J],!0,i.maxCubemapSize):oe[J]=ie?b.image[J].image:b.image[J],oe[J]=at(b,oe[J]);let De=oe[0],Ie=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),Ze=M(b.internalFormat,Ie,ve,b.colorSpace),Oe=b.isVideoTexture!==!0,ht=$.__version===void 0||Q===!0,L=j.dataReady,ce=A(b,De);Le(s.TEXTURE_CUBE_MAP,b);let Y;if(Xe){Oe&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Ze,De.width,De.height);for(let J=0;J<6;J++){Y=oe[J].mipmaps;for(let le=0;le<Y.length;le++){let fe=Y[le];b.format!==mi?Ie!==null?Oe?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,fe.width,fe.height,Ie,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ze,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,fe.width,fe.height,Ie,ve,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,Ze,fe.width,fe.height,0,Ie,ve,fe.data)}}}else{if(Y=b.mipmaps,Oe&&ht){Y.length>0&&ce++;let J=Ae(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Ze,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,oe[J].width,oe[J].height,Ie,ve,oe[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,oe[J].width,oe[J].height,0,Ie,ve,oe[J].data);for(let le=0;le<Y.length;le++){let Be=Y[le].image[J].image;Oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Be.width,Be.height,Ie,ve,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ze,Be.width,Be.height,0,Ie,ve,Be.data)}}else{Oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ve,oe[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,Ie,ve,oe[J]);for(let le=0;le<Y.length;le++){let fe=Y[le];Oe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Ie,ve,fe.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,Ze,Ie,ve,fe.image[J])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),$.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _e(R,b,W,Q,j,$){let ue=r.convert(W.format,W.colorSpace),ae=r.convert(W.type),pe=M(W.internalFormat,ue,ae,W.colorSpace),Xe=n.get(b),ie=n.get(W);if(ie.__renderTarget=b,!Xe.__hasExternalTextures){let oe=Math.max(1,b.width>>$),De=Math.max(1,b.height>>$);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,$,pe,oe,De,b.depth,0,ue,ae,null):t.texImage2D(j,$,pe,oe,De,0,ue,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),k(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,j,ie.__webglTexture,0,Fe(b)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,j,ie.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(R,b,W){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let Q=b.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,$=x(b.stencilBuffer,j),ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=Fe(b);k(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,$,b.width,b.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,$,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,$,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,R)}else{let Q=b.textures;for(let j=0;j<Q.length;j++){let $=Q[j],ue=r.convert($.format,$.colorSpace),ae=r.convert($.type),pe=M($.internalFormat,ue,ae,$.colorSpace),Xe=Fe(b);W&&k(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,pe,b.width,b.height):k(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,pe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);let j=Q.__webglTexture,$=Fe(b);if(b.depthTexture.format===Mo)k(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(b.depthTexture.format===Ro)k(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ee(R){let b=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",j)};Q.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=Q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");be(b.__webglFramebuffer,R)}else if(W){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=s.createRenderbuffer(),ne(b.__webglDepthbuffer[Q],R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ne(b.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(R,b,W){let Q=n.get(R);b!==void 0&&_e(Q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Ee(R)}function tt(R){let b=R.texture,W=n.get(R),Q=n.get(b);R.addEventListener("dispose",w);let j=R.textures,$=R.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=b.version,o.memory.textures++),$){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[ae]=[];for(let pe=0;pe<b.mipmaps.length;pe++)W.__webglFramebuffer[ae][pe]=s.createFramebuffer()}else W.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let ae=0;ae<b.mipmaps.length;ae++)W.__webglFramebuffer[ae]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(ue)for(let ae=0,pe=j.length;ae<pe;ae++){let Xe=n.get(j[ae]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&k(R)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){let pe=j[ae];W.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);let Xe=r.convert(pe.format,pe.colorSpace),ie=r.convert(pe.type),oe=M(pe.internalFormat,Xe,ie,pe.colorSpace,R.isXRRenderTarget===!0),De=Fe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,oe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,W.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(s.TEXTURE_CUBE_MAP,b);for(let ae=0;ae<6;ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)_e(W.__webglFramebuffer[ae][pe],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else _e(W.__webglFramebuffer[ae],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ae=0,pe=j.length;ae<pe;ae++){let Xe=j[ae],ie=n.get(Xe);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),Le(s.TEXTURE_2D,Xe),_e(W.__webglFramebuffer,R,Xe,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,0),m(Xe)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Le(ae,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)_e(W.__webglFramebuffer[pe],R,b,s.COLOR_ATTACHMENT0,ae,pe);else _e(W.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,ae,0);m(b)&&p(ae),t.unbindTexture()}R.depthBuffer&&Ee(R)}function Ve(R){let b=R.textures;for(let W=0,Q=b.length;W<Q;W++){let j=b[W];if(m(j)){let $=v(R),ue=n.get(j).__webglTexture;t.bindTexture($,ue),p($),t.unbindTexture()}}}let Pe=[],D=[];function yt(R){if(R.samples>0){if(k(R)===!1){let b=R.textures,W=R.width,Q=R.height,j=s.COLOR_BUFFER_BIT,$=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(R),ae=b.length>1;if(ae)for(let pe=0;pe<b.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<b.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let Xe=n.get(b[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,W,Q,0,0,W,Q,j,s.NEAREST),l===!0&&(Pe.length=0,D.length=0,Pe.push(s.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pe.push($),D.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<b.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let Xe=n.get(b[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Fe(R){return Math.min(i.maxSamples,R.samples)}function k(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function at(R,b){let W=R.colorSpace,Q=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==bn&&W!==Hi&&(ot.getTransfer(W)===vt?(Q!==mi||j!==ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=He,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=k}function _T(s,e){function t(n,i=Hi){let r,o=ot.getTransfer(i);if(n===ms)return s.UNSIGNED_BYTE;if(n===ud)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fd)return s.UNSIGNED_SHORT_5_5_5_1;if(n===C_)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===A_)return s.BYTE;if(n===R_)return s.SHORT;if(n===Ba)return s.UNSIGNED_SHORT;if(n===hd)return s.INT;if(n===Pr)return s.UNSIGNED_INT;if(n===Ci)return s.FLOAT;if(n===$a)return s.HALF_FLOAT;if(n===P_)return s.ALPHA;if(n===I_)return s.RGB;if(n===mi)return s.RGBA;if(n===L_)return s.LUMINANCE;if(n===D_)return s.LUMINANCE_ALPHA;if(n===Mo)return s.DEPTH_COMPONENT;if(n===Ro)return s.DEPTH_STENCIL;if(n===dd)return s.RED;if(n===pd)return s.RED_INTEGER;if(n===N_)return s.RG;if(n===md)return s.RG_INTEGER;if(n===gd)return s.RGBA_INTEGER;if(n===mc||n===gc||n===_c||n===xc)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_c)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_c)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rf||n===of||n===af||n===lf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===of)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===af)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cf||n===hf||n===uf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cf||n===hf)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ff||n===df||n===pf||n===mf||n===gf||n===_f||n===xf||n===vf||n===yf||n===Mf||n===Sf||n===bf||n===wf||n===Tf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ff)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===df)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_f)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===Ef||n===Af)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vc)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ef)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Af)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===U_||n===Rf||n===Cf||n===Pf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ao?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Xf=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},On=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},xT={type:"move"},Oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new ln,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yi({vertexShader:vT,fragmentShader:yT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qf=class extends Xs{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null,g=new Yf,m=t.getContextAttributes(),p=null,v=null,M=[],x=[],A=new Je,E=null,w=new $t;w.viewport=new dt;let C=new $t;C.viewport=new dt;let S=[w,C],y=new Xf,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=M[Z];return ee===void 0&&(ee=new Oa,M[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=M[Z];return ee===void 0&&(ee=new Oa,M[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=M[Z];return ee===void 0&&(ee=new Oa,M[Z]=ee),ee.getHandSpace()};function B(Z){let ee=x.indexOf(Z.inputSource);if(ee===-1)return;let _e=M[ee];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||o),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let Z=0;Z<M.length;Z++){let ee=x[Z];ee!==null&&(x[Z]=null,M[Z].disconnect(ee))}P=null,U=null,g.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new gs(d.framebufferWidth,d.framebufferHeight,{format:mi,type:ms,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,_e=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Ro:Mo,_e=m.stencil?Ao:Pr);let be={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new gs(f.textureWidth,f.textureHeight,{format:mi,type:ms,depthTexture:new Rc(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Z){for(let ee=0;ee<Z.removed.length;ee++){let _e=Z.removed[ee],ne=x.indexOf(_e);ne>=0&&(x[ne]=null,M[ne].disconnect(_e))}for(let ee=0;ee<Z.added.length;ee++){let _e=Z.added[ee],ne=x.indexOf(_e);if(ne===-1){for(let Ee=0;Ee<M.length;Ee++)if(Ee>=x.length){x.push(_e),ne=Ee;break}else if(x[Ee]===null){x[Ee]=_e,ne=Ee;break}if(ne===-1)break}let be=M[ne];be&&be.connect(_e)}}let X=new F,K=new F;function G(Z,ee,_e){X.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);let ne=X.distanceTo(K),be=ee.projectionMatrix.elements,Ee=_e.projectionMatrix.elements,He=be[14]/(be[10]-1),tt=be[14]/(be[10]+1),Ve=(be[9]+1)/be[5],Pe=(be[9]-1)/be[5],D=(be[8]-1)/be[0],yt=(Ee[8]+1)/Ee[0],Fe=He*D,k=He*yt,we=ne/(-D+yt),at=we*-D;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(at),Z.translateZ(we),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Ae=He+we,R=tt+we,b=Fe-at,W=k+(ne-at),Q=Ve*tt/R*Ae,j=Pe*tt/R*Ae;Z.projectionMatrix.makePerspective(b,W,Q,j,Ae,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function te(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,_e=Z.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),y.near=C.near=w.near=ee,y.far=C.far=w.far=_e,(P!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,U=y.far),w.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,y.layers.mask=w.layers.mask|C.layers.mask;let ne=Z.parent,be=y.cameras;te(y,ne);for(let Ee=0;Ee<be.length;Ee++)te(be[Ee],ne);be.length===2?G(y,w,C):y.projectionMatrix.copy(w.projectionMatrix),I(Z,y,ne)};function I(Z,ee,_e){_e===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Io*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let he=null;function Le(Z,ee){if(h=ee.getViewerPose(c||o),_=ee,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ne=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let Ee=0;Ee<_e.length;Ee++){let He=_e[Ee],tt=null;if(d!==null)tt=d.getViewport(He);else{let Pe=u.getViewSubImage(f,He);tt=Pe.viewport,Ee===0&&(e.setRenderTargetTextures(v,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(v))}let Ve=S[Ee];Ve===void 0&&(Ve=new $t,Ve.layers.enable(Ee),Ve.viewport=new dt,S[Ee]=Ve),Ve.matrix.fromArray(He.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(He.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),Ee===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ne===!0&&y.cameras.push(Ve)}let be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){let Ee=u.getDepthInformation(_e[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(e,Ee,i.renderState)}}for(let _e=0;_e<M.length;_e++){let ne=x[_e],be=M[_e];ne!==null&&be!==void 0&&be.update(ne,ee,c||o)}he&&he(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}let et=new G_;et.setAnimationLoop(Le),this.setAnimationLoop=function(Z){he=Z},this.dispose=function(){}}},Tr=new Xi,MT=new je;function ST(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,V_(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,Tr.copy(x),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(MT.makeRotationFromEuler(Tr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bT(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=i[v.id];x===void 0&&(_(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));let A=M.program;n.updateUBOMapping(v,A);let E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function h(v){let M=u();v.__bindingPointIndex=M;let x=s.createBuffer(),A=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=i[v.id],x=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,w=x.length;E<w;E++){let C=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,y=C.length;S<y;S++){let P=C[S];if(d(P,E,S,A)===!0){let U=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],H=0;for(let q=0;q<B.length;q++){let X=B[q],K=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,U+H,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,M,x,A){let E=v.value,w=M+"_"+x;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{let C=A[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(v){let M=v.uniforms,x=0,A=16;for(let w=0,C=M.length;w<C;w++){let S=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,P=S.length;y<P;y++){let U=S[y],B=Array.isArray(U.value)?U.value:[U.value];for(let H=0,q=B.length;H<q;H++){let X=B[H],K=g(X),G=x%A,te=G%K.boundary,I=G+te;x+=te,I!==0&&A-I<K.storage&&(x+=A-I),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=K.storage}}}let E=x%A;return E>0&&(x+=A-E),v.__size=x,v.__cache={},this}function g(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){let M=v.target;M.removeEventListener("dispose",m);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Cc=class{constructor(e={}){let{canvas:t=Ay(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Ws,this.toneMappingExposure=1;let x=this,A=!1,E=0,w=0,C=null,S=-1,y=null,P=new dt,U=new dt,B=null,H=new Ue(0),q=0,X=t.width,K=t.height,G=1,te=null,I=null,he=new dt(0,0,X,K),Le=new dt(0,0,X,K),et=!1,Z=new za,ee=!1,_e=!1,ne=new je,be=new je,Ee=new F,He=new dt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function Pe(){return C===null?G:1}let D=n;function yt(T,N){return t.getContext(T,N)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${od}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){let N="webgl2";if(D=yt(N,T),D===null)throw yt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,k,we,at,Ae,R,b,W,Q,j,$,ue,ae,pe,Xe,ie,oe,De,Ie,ve,Ze,Oe,ht,L;function ce(){Fe=new kb(D),Fe.init(),Oe=new _T(D,Fe),k=new Db(D,Fe,e,Oe),we=new pT(D,Fe),k.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),at=new Vb(D),Ae=new tT,R=new gT(D,Fe,we,Ae,k,Oe,at),b=new Ub(x),W=new Bb(x),Q=new Ky(D),ht=new Ib(D,Q),j=new zb(D,Q,at,ht),$=new Wb(D,j,Q,at),Ie=new Gb(D,k,R),ie=new Nb(Ae),ue=new eT(x,b,W,Fe,k,ht,ie),ae=new ST(x,Ae),pe=new iT,Xe=new cT(Fe),De=new Pb(x,b,W,we,$,d,l),oe=new fT(x,$,k),L=new bT(D,at,k,we),ve=new Lb(D,Fe,at),Ze=new Hb(D,Fe,at),at.programs=ue.programs,x.capabilities=k,x.extensions=Fe,x.properties=Ae,x.renderLists=pe,x.shadowMap=oe,x.state=we,x.info=at}ce();let Y=new qf(x,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(X,K,!1))},this.getSize=function(T){return T.set(X,K)},this.setSize=function(T,N,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,K=N,t.width=Math.floor(T*G),t.height=Math.floor(N*G),z===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(X*G,K*G).floor()},this.setDrawingBufferSize=function(T,N,z){X=T,K=N,G=z,t.width=Math.floor(T*z),t.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,N,z,V){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,N,z,V),we.viewport(P.copy(he).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,N,z,V){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,N,z,V),we.scissor(U.copy(Le).multiplyScalar(G).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){we.setScissorTest(et=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,N=!0,z=!0){let V=0;if(T){let O=!1;if(C!==null){let se=C.texture.format;O=se===gd||se===md||se===pd}if(O){let se=C.texture.type,re=se===ms||se===Pr||se===Ba||se===Ao||se===ud||se===fd,de=De.getClearColor(),ye=De.getClearAlpha(),ke=de.r,We=de.g,Se=de.b;re?(_[0]=ke,_[1]=We,_[2]=Se,_[3]=ye,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=ke,g[1]=We,g[2]=Se,g[3]=ye,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT),z&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),pe.dispose(),Xe.dispose(),Ae.dispose(),b.dispose(),W.dispose(),$.dispose(),ht.dispose(),L.dispose(),ue.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",me),Y.removeEventListener("sessionend",Ge),Re.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=at.autoReset,N=oe.enabled,z=oe.autoUpdate,V=oe.needsUpdate,O=oe.type;ce(),at.autoReset=T,oe.enabled=N,oe.autoUpdate=z,oe.needsUpdate=V,oe.type=O}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){let N=T.target;N.removeEventListener("dispose",Be),ut(N)}function ut(T){Ot(T),Ae.remove(T)}function Ot(T){let N=Ae.get(T).programs;N!==void 0&&(N.forEach(function(z){ue.releaseProgram(z)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,V,O,se){N===null&&(N=tt);let re=O.isMesh&&O.matrixWorld.determinant()<0,de=qn(T,N,z,V,O);we.setMaterial(V,re);let ye=z.index,ke=1;if(V.wireframe===!0){if(ye=j.getWireframeAttribute(z),ye===void 0)return;ke=2}let We=z.drawRange,Se=z.attributes.position,Ye=We.start*ke,ft=(We.start+We.count)*ke;se!==null&&(Ye=Math.max(Ye,se.start*ke),ft=Math.min(ft,(se.start+se.count)*ke)),ye!==null?(Ye=Math.max(Ye,0),ft=Math.min(ft,ye.count)):Se!=null&&(Ye=Math.max(Ye,0),ft=Math.min(ft,Se.count));let mt=ft-Ye;if(mt<0||mt===1/0)return;ht.setup(O,V,de,z,ye);let Yt,gt=ve;if(ye!==null&&(Yt=Q.get(ye),gt=Ze,gt.setIndex(Yt)),O.isMesh)V.wireframe===!0?(we.setLineWidth(V.wireframeLinewidth*Pe()),gt.setMode(D.LINES)):gt.setMode(D.TRIANGLES);else if(O.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*Pe()),O.isLineSegments?gt.setMode(D.LINES):O.isLineLoop?gt.setMode(D.LINE_LOOP):gt.setMode(D.LINE_STRIP)}else O.isPoints?gt.setMode(D.POINTS):O.isSprite&&gt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)gt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))gt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ce=O._multiDrawStarts,qi=O._multiDrawCounts,_t=O._multiDrawCount,yi=ye?Q.get(ye).bytesPerElement:1,Ur=Ae.get(V).currentProgram.getUniforms();for(let Zn=0;Zn<_t;Zn++)Ur.setValue(D,"_gl_DrawID",Zn),gt.render(Ce[Zn]/yi,qi[Zn])}else if(O.isInstancedMesh)gt.renderInstances(Ye,mt,O.count);else if(z.isInstancedBufferGeometry){let Ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,qi=Math.min(z.instanceCount,Ce);gt.renderInstances(Ye,mt,qi)}else gt.render(Ye,mt)};function xe(T,N,z){T.transparent===!0&&T.side===Ai&&T.forceSinglePass===!1?(T.side=Mn,T.needsUpdate=!0,Mt(T,N,z),T.side=Gi,T.needsUpdate=!0,Mt(T,N,z),T.side=Ai):Mt(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),p=Xe.get(z),p.init(N),M.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==z&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let V=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let se=O.material;if(se)if(Array.isArray(se))for(let re=0;re<se.length;re++){let de=se[re];xe(de,z,O),V.add(de)}else xe(se,z,O),V.add(se)}),M.pop(),p=null,V},this.compileAsync=function(T,N,z=null){let V=this.compile(T,N,z);return new Promise(O=>{function se(){if(V.forEach(function(re){Ae.get(re).currentProgram.isReady()&&V.delete(re)}),V.size===0){O(T);return}setTimeout(se,10)}Fe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Te=null;function Ke(T){Te&&Te(T)}function me(){Re.stop()}function Ge(){Re.start()}let Re=new G_;Re.setAnimationLoop(Ke),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(T){Te=T,Y.setAnimationLoop(T),T===null?Re.stop():Re.start()},Y.addEventListener("sessionstart",me),Y.addEventListener("sessionend",Ge),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,C),p=Xe.get(T,M.length),p.init(N),M.push(p),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(be),_e=this.localClippingEnabled,ee=ie.init(this.clippingPlanes,_e),m=pe.get(T,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){let se=x.xr.getDepthSensingMesh();se!==null&&ze(se,N,-1/0,x.sortObjects)}ze(T,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,I),Ve=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ve&&De.addToRenderList(m,T),this.info.render.frame++,ee===!0&&ie.beginShadows();let z=p.state.shadowsArray;oe.render(z,T,N),ee===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){let se=N.cameras;if(O.length>0)for(let re=0,de=se.length;re<de;re++){let ye=se[re];nt(V,O,T,ye)}Ve&&De.render(T);for(let re=0,de=se.length;re<de;re++){let ye=se[re];Vt(m,T,ye,ye.viewport)}}else O.length>0&&nt(V,O,T,N),Ve&&De.render(T),Vt(m,T,N);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,N),ht.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],ee===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ze(T,N,z,V){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){V&&He.setFromMatrixPosition(T.matrixWorld).applyMatrix4(be);let re=$.update(T),de=T.material;de.visible&&m.push(T,re,de,z,He.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let re=$.update(T),de=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),He.copy(T.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),He.copy(re.boundingSphere.center)),He.applyMatrix4(T.matrixWorld).applyMatrix4(be)),Array.isArray(de)){let ye=re.groups;for(let ke=0,We=ye.length;ke<We;ke++){let Se=ye[ke],Ye=de[Se.materialIndex];Ye&&Ye.visible&&m.push(T,re,Ye,z,He.z,Se)}}else de.visible&&m.push(T,re,de,z,He.z,null)}}let se=T.children;for(let re=0,de=se.length;re<de;re++)ze(se[re],N,z,V)}function Vt(T,N,z,V){let O=T.opaque,se=T.transmissive,re=T.transparent;p.setupLightsView(z),ee===!0&&ie.setGlobalState(x.clippingPlanes,z),V&&we.viewport(P.copy(V)),O.length>0&&Tt(O,N,z),se.length>0&&Tt(se,N,z),re.length>0&&Tt(re,N,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function nt(T,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new gs(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?$a:ms,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let se=p.state.transmissionRenderTarget[V.id],re=V.viewport||P;se.setSize(re.z,re.w);let de=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(H),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&De.render(z);let ye=x.toneMapping;x.toneMapping=Ws;let ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ee===!0&&ie.setGlobalState(x.clippingPlanes,V),Tt(T,z,V),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Se=0,Ye=N.length;Se<Ye;Se++){let ft=N[Se],mt=ft.object,Yt=ft.geometry,gt=ft.material,Ce=ft.group;if(gt.side===Ai&&mt.layers.test(V.layers)){let qi=gt.side;gt.side=Mn,gt.needsUpdate=!0,Jt(mt,z,V,Yt,gt,Ce),gt.side=qi,gt.needsUpdate=!0,We=!0}}We===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}x.setRenderTarget(de),x.setClearColor(H,q),ke!==void 0&&(V.viewport=ke),x.toneMapping=ye}function Tt(T,N,z){let V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,se=T.length;O<se;O++){let re=T[O],de=re.object,ye=re.geometry,ke=V===null?re.material:V,We=re.group;de.layers.test(z.layers)&&Jt(de,N,z,ye,ke,We)}}function Jt(T,N,z,V,O,se){T.onBeforeRender(x,N,z,V,O,se),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(x,N,z,V,T,se),O.transparent===!0&&O.side===Ai&&O.forceSinglePass===!1?(O.side=Mn,O.needsUpdate=!0,x.renderBufferDirect(z,N,V,O,T,se),O.side=Gi,O.needsUpdate=!0,x.renderBufferDirect(z,N,V,O,T,se),O.side=Ai):x.renderBufferDirect(z,N,V,O,T,se),T.onAfterRender(x,N,z,V,O,se)}function Mt(T,N,z){N.isScene!==!0&&(N=tt);let V=Ae.get(T),O=p.state.lights,se=p.state.shadowsArray,re=O.state.version,de=ue.getParameters(T,O.state,se,N,z),ye=ue.getProgramCacheKey(de),ke=V.programs;V.environment=T.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(T.isMeshStandardMaterial?W:b).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Be),ke=new Map,V.programs=ke);let We=ke.get(ye);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===re)return pt(T,de),We}else de.uniforms=ue.getUniforms(T),T.onBeforeCompile(de,x),We=ue.acquireProgram(de,ye),ke.set(ye,We),V.uniforms=de.uniforms;let Se=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=ie.uniform),pt(T,de),V.needsLights=wn(T),V.lightsStateVersion=re,V.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=We,V.uniformsList=null,We}function St(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=bo.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function pt(T,N){let z=Ae.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function qn(T,N,z,V,O){N.isScene!==!0&&(N=tt),R.resetTextureUnits();let se=N.fog,re=V.isMeshStandardMaterial?N.environment:null,de=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bn,ye=(V.isMeshStandardMaterial?W:b).get(V.envMap||re),ke=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,We=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,ft=!!z.morphAttributes.color,mt=Ws;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=x.toneMapping);let Yt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=Yt!==void 0?Yt.length:0,Ce=Ae.get(V),qi=p.state.lights;if(ee===!0&&(_e===!0||T!==y)){let oi=T===y&&V.id===S;ie.setState(V,T,oi)}let _t=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==qi.state.version||Ce.outputColorSpace!==de||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==ye||V.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ie.numPlanes||Ce.numIntersection!==ie.numIntersection)||Ce.vertexAlphas!==ke||Ce.vertexTangents!==We||Ce.morphTargets!==Se||Ce.morphNormals!==Ye||Ce.morphColors!==ft||Ce.toneMapping!==mt||Ce.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,Ce.__version=V.version);let yi=Ce.currentProgram;_t===!0&&(yi=Mt(V,N,O));let Ur=!1,Zn=!1,Go=!1,Ct=yi.getUniforms(),Li=Ce.uniforms;if(we.useProgram(yi.program)&&(Ur=!0,Zn=!0,Go=!0),V.id!==S&&(S=V.id,Zn=!0),Ur||y!==T){we.buffers.depth.getReversed()?(ne.copy(T.projectionMatrix),Cy(ne),Py(ne),Ct.setValue(D,"projectionMatrix",ne)):Ct.setValue(D,"projectionMatrix",T.projectionMatrix),Ct.setValue(D,"viewMatrix",T.matrixWorldInverse);let Ss=Ct.map.cameraPosition;Ss!==void 0&&Ss.setValue(D,Ee.setFromMatrixPosition(T.matrixWorld)),k.logarithmicDepthBuffer&&Ct.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ct.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Zn=!0,Go=!0)}if(O.isSkinnedMesh){Ct.setOptional(D,O,"bindMatrix"),Ct.setOptional(D,O,"bindMatrixInverse");let oi=O.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),Ct.setValue(D,"boneTexture",oi.boneTexture,R))}O.isBatchedMesh&&(Ct.setOptional(D,O,"batchingTexture"),Ct.setValue(D,"batchingTexture",O._matricesTexture,R),Ct.setOptional(D,O,"batchingIdTexture"),Ct.setValue(D,"batchingIdTexture",O._indirectTexture,R),Ct.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Ct.setValue(D,"batchingColorTexture",O._colorsTexture,R));let Wo=z.morphAttributes;if((Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0)&&Ie.update(O,z,yi),(Zn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,Ct.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Li.envMap.value=ye,Li.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Li.envMapIntensity.value=N.environmentIntensity),Zn&&(Ct.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Rt(Li,Go),se&&V.fog===!0&&ae.refreshFogUniforms(Li,se),ae.refreshMaterialUniforms(Li,V,G,K,p.state.transmissionRenderTarget[T.id]),bo.upload(D,St(Ce),Li,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(bo.upload(D,St(Ce),Li,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ct.setValue(D,"center",O.center),Ct.setValue(D,"modelViewMatrix",O.modelViewMatrix),Ct.setValue(D,"normalMatrix",O.normalMatrix),Ct.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let oi=V.uniformsGroups;for(let Ss=0,bs=oi.length;Ss<bs;Ss++){let sp=oi[Ss];L.update(sp,yi),L.bind(sp,yi)}}return yi}function Rt(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function wn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,N,z){Ae.get(T.texture).__webglTexture=N,Ae.get(T.depthTexture).__webglTexture=z;let V=Ae.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){let z=Ae.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,z=0){C=T,E=N,w=z;let V=!0,O=null,se=!1,re=!1;if(T){let ye=Ae.get(T);if(ye.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(ye.__hasExternalTextures)R.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Se=T.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Ae.has(Se)&&(T.width!==Se.image.width||T.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(re=!0);let We=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[N])?O=We[N][z]:O=We[N],se=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?O=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?O=We[z]:O=We,P.copy(T.viewport),U.copy(T.scissor),B=T.scissorTest}else P.copy(he).multiplyScalar(G).floor(),U.copy(Le).multiplyScalar(G).floor(),B=et;if(we.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&we.drawBuffers(T,O),we.viewport(P),we.scissor(U),we.setScissorTest(B),se){let ye=Ae.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,z)}else if(re){let ye=Ae.get(T.texture),ke=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,ke)}S=-1},this.readRenderTargetPixels=function(T,N,z,V,O,se,re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&re!==void 0&&(de=de[re]),de){we.bindFramebuffer(D.FRAMEBUFFER,de);try{let ye=T.texture,ke=ye.format,We=ye.type;if(!k.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-V&&z>=0&&z<=T.height-O&&D.readPixels(N,z,V,O,Oe.convert(ke),Oe.convert(We),se)}finally{let ye=C!==null?Ae.get(C).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,N,z,V,O,se,re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&re!==void 0&&(de=de[re]),de){let ye=T.texture,ke=ye.format,We=ye.type;if(!k.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-V&&z>=0&&z<=T.height-O){we.bindFramebuffer(D.FRAMEBUFFER,de);let Se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(N,z,V,O,Oe.convert(ke),Oe.convert(We),0);let Ye=C!==null?Ae.get(C).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Ye);let ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ry(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Se),D.deleteSync(ft),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,z=0){T.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);let V=Math.pow(2,-z),O=Math.floor(T.image.width*V),se=Math.floor(T.image.height*V),re=N!==null?N.x:0,de=N!==null?N.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,re,de,O,se),we.unbindTexture()},this.copyTextureToTexture=function(T,N,z=null,V=null,O=0){T.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],N=arguments[2],O=arguments[3]||0,z=null);let se,re,de,ye,ke,We,Se,Ye,ft,mt=T.isCompressedTexture?T.mipmaps[O]:T.image;z!==null?(se=z.max.x-z.min.x,re=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,ye=z.min.x,ke=z.min.y,We=z.isBox3?z.min.z:0):(se=mt.width,re=mt.height,de=mt.depth||1,ye=0,ke=0,We=0),V!==null?(Se=V.x,Ye=V.y,ft=V.z):(Se=0,Ye=0,ft=0);let Yt=Oe.convert(N.format),gt=Oe.convert(N.type),Ce;N.isData3DTexture?(R.setTexture3D(N,0),Ce=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Ce=D.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Ce=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let qi=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yi=D.getParameter(D.UNPACK_SKIP_PIXELS),Ur=D.getParameter(D.UNPACK_SKIP_ROWS),Zn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,We);let Go=T.isDataArrayTexture||T.isData3DTexture,Ct=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Li=Ae.get(T),Wo=Ae.get(N),oi=Ae.get(Li.__renderTarget),Ss=Ae.get(Wo.__renderTarget);we.bindFramebuffer(D.READ_FRAMEBUFFER,oi.__webglFramebuffer),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let bs=0;bs<de;bs++)Go&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(T).__webglTexture,O,We+bs),T.isDepthTexture?(Ct&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,O,ft+bs),D.blitFramebuffer(ye,ke,se,re,Se,Ye,se,re,D.DEPTH_BUFFER_BIT,D.NEAREST)):Ct?D.copyTexSubImage3D(Ce,O,Se,Ye,ft+bs,ye,ke,se,re):D.copyTexSubImage2D(Ce,O,Se,Ye,ft+bs,ye,ke,se,re);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ct?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ce,O,Se,Ye,ft,se,re,de,Yt,gt,mt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,O,Se,Ye,ft,se,re,de,Yt,mt.data):D.texSubImage3D(Ce,O,Se,Ye,ft,se,re,de,Yt,gt,mt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Se,Ye,se,re,Yt,gt,mt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Se,Ye,mt.width,mt.height,Yt,mt.data):D.texSubImage2D(D.TEXTURE_2D,O,Se,Ye,se,re,Yt,gt,mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,qi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ur),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zn),O===0&&N.generateMipmaps&&D.generateMipmap(Ce),we.unbindTexture()},this.copyTextureToTexture3D=function(T,N,z=null,V=null,O=0){return T.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0),Ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,z,V,O)},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,we.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ds}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Oo=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ha=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=If,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new F,Va=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var o_=new F,a_=new dt,l_=new dt,wT=new F,c_=new je,lc=new F,Vu=new ni,h_=new je,Gu=new Lo,Pc=class extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cg,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lc),this.boundingBox.expandByPoint(lc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lc),this.boundingSphere.expandByPoint(lc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vu.copy(this.boundingSphere),Vu.applyMatrix4(i),e.ray.intersectsSphere(Vu)!==!1&&(h_.copy(i).invert(),Gu.copy(e.ray).applyMatrix4(h_),!(this.boundingBox!==null&&Gu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;a_.fromBufferAttribute(i.attributes.skinIndex,e),l_.fromBufferAttribute(i.attributes.skinWeight,e),o_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=l_.getComponent(r);if(o!==0){let a=a_.getComponent(r);c_.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(wT.copy(o_).applyMatrix4(c_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ga=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ic=class extends ln{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Sn,h=Sn,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},u_=new je,TT=new je,Lc=class s{constructor(e=[],t=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:TT;u_.multiplyMatrices(a,t[r]),u_.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ic(t,e,e,mi,Ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ga),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Lr=class extends en{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_o=new je,f_=new je,cc=[],d_=new gi,ET=new je,Aa=new zt,Ra=new ni,Dc=class extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ET)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_o),d_.copy(e.boundingBox).applyMatrix4(_o),this.boundingBox.union(d_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_o),Ra.copy(e.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(n),e.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_o),f_.multiplyMatrices(n,_o),Aa.matrixWorld=f_,Aa.raycast(e,cc);for(let o=0,a=cc.length;o<a;o++){let l=cc[o];l.instanceId=r,l.object=this,t.push(l)}cc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(i*this.count),i,this.count,dd,Ci));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wa=class extends Xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nc=new F,Uc=new F,p_=new je,Ca=new Lo,hc=new ni,Wu=new F,m_=new F,Fo=class extends Ht{constructor(e=new si,t=new Wa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Nc.fromBufferAttribute(t,i-1),Uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nc.distanceTo(Uc);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(i),hc.radius+=r,e.ray.intersectsSphere(hc)===!1)return;p_.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(p_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){let p=h.getX(g),v=h.getX(g+1),M=uc(this,e,Ca,l,p,v);M&&t.push(M)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(d),p=uc(this,e,Ca,l,g,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){let p=uc(this,e,Ca,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){let g=uc(this,e,Ca,l,_-1,d);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function uc(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Nc.fromBufferAttribute(o,i),Uc.fromBufferAttribute(o,r),t.distanceSqToSegment(Nc,Uc,Wu,m_)>n)return;Wu.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Wu);if(!(l<e.near||l>e.far))return{distance:l,point:m_.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var g_=new F,__=new F,Oc=class extends Fo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)g_.fromBufferAttribute(t,i),__.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+g_.distanceTo(__);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fc=class extends Fo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xa=class extends Xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},x_=new je,Zf=new Lo,fc=new ni,dc=new F,Bc=class extends Ht{constructor(e=new si,t=new Xa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(i),fc.radius+=r,e.ray.intersectsSphere(fc)===!1)return;x_.copy(i).invert(),Zf.copy(e.ray).applyMatrix4(x_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){let m=c.getX(_);dc.fromBufferAttribute(u,m),v_(dc,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)dc.fromBufferAttribute(u,_),v_(dc,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function v_(s,e,t,n,i,r,o){let a=Zf.distanceSqToPoint(s);if(a<t){let l=new F;Zf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ya=class extends ln{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kc=class s extends si{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,f=new F,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let v=[],M=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let E=A/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(E+x,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let M=h[p][v+1],x=h[p][v],A=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&d.push(M,x,E),(p!==n-1||l<Math.PI)&&d.push(x,A,E)}this.setIndex(d),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bo=class extends Xn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var qs=class extends Xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F_,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends qs{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function pc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function AT(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function RT(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function y_(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Z_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Zs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kf=class extends Zs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hg,endingEnd:hg}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ug:r=e,a=2*t-n;break;case fg:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ug:o=e,l=2*n-t;break;case fg:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,v=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,M=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+v*o[c+A]+M*o[l+A]+x*o[u+A];return r}},$f=class extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Jf=class extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},_i=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pc(t,this.TimeBufferType),this.values=pc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pc(e.times,Array),values:pc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $f(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Co:t=this.InterpolantFactoryMethodDiscrete;break;case Po:t=this.InterpolantFactoryMethodLinear;break;case mu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Co;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&AT(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mu,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){let g=t[u+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Po;var Ks=class extends _i{constructor(e,t,n){super(e,t,n)}};Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Co;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends _i{};zc.prototype.ValueTypeName="color";var _s=class extends _i{};_s.prototype.ValueTypeName="number";var jf=class extends Zs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ii.slerpFlat(r,0,o,c-a,o,c,l);return r}},xs=class extends _i{InterpolantFactoryMethodLinear(e){return new jf(this.times,this.values,this.getValueSize(),e)}};xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;var $s=class extends _i{constructor(e,t,n){super(e,t,n)}};$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Co;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends _i{};vs.prototype.ValueTypeName="vector";var Hc=class{constructor(e="",t=-1,n=[],i=ey){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(PT(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(_i.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=RT(l);l=y_(l,1,h),c=y_(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new _s(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,_,g){if(d.length!==0){let m=[],p=[];Z_(d,m,p,_),m.length!==0&&g.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(let g in d){let m=[],p=[];for(let v=0;v!==f[_].morphTargets.length;++v){let M=f[_];m.push(M.time),p.push(M.morphTarget===g?1:0)}i.push(new _s(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(vs,d+".position",f,"pos",i),n(xs,d+".quaternion",f,"rot",i),n(vs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function CT(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return zc;case"quaternion":return xs;case"bool":case"boolean":return Ks;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function PT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=CT(s.type);if(s.times===void 0){let t=[],n=[];Z_(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Vs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Qf=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}},IT=new Qf,ys=class{constructor(e){this.manager=e!==void 0?e:IT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ys.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs={},ed=class extends Error{constructor(e,t){super(e),this.response=t}},qa=class extends ys{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(cs[e]!==void 0){cs[e].push({onLoad:t,onProgress:n,onError:i});return}cs[e]=[],cs[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=cs[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0,g=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{g+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let E=0,w=h.length;E<w;E++){let C=h[E];C.onProgress&&C.onProgress(A)}p.enqueue(x),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new ed(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Vs.add(e,c);let h=cs[e];delete cs[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=cs[e];if(h===void 0)throw this.manager.itemError(e),c;delete cs[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var td=class extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Vs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=ka("img");function l(){h(),Vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ko=class extends ys{constructor(e){super(e)}load(e,t,n,i){let r=new ln,o=new td(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Za=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Xu=new je,M_=new F,S_=new F,Ka=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;M_.setFromMatrixPosition(e.matrixWorld),t.position.copy(M_),S_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(S_),t.updateMatrixWorld(),Xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nd=class extends Ka{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Io*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Vc=class extends Za{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},b_=new je,Pa=new F,Yu=new F,id=class extends Ka{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pa),Yu.copy(n.position),Yu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yu),n.updateMatrixWorld(),i.makeTranslation(-Pa.x,-Pa.y,-Pa.z),b_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(b_)}},Gc=class extends Za{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new id}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sd=class extends Ka{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zo=class extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new sd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Js=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Wc=class extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Vs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Vs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Vs.add(e,l),r.manager.itemStart(e)}};var vd="\\[\\]\\.:\\/",LT=new RegExp("["+vd+"]","g"),yd="[^"+vd+"]",DT="[^"+vd.replace("\\.","")+"]",NT=/((?:WC+[\/:])*)/.source.replace("WC",yd),UT=/(WCOD+)?/.source.replace("WCOD",DT),OT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yd),FT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yd),BT=new RegExp("^"+NT+UT+OT+FT+"$"),kT=["material","materials","bones","map"],rd=class{constructor(e,t,n){let i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LT,"")}static parseTrackName(e){let t=BT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);kT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=rd;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);function K_(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let v=0,M=a.length;v<M;v++){let x=a[v],A=s.attributes[x];l[x]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let E=s.morphAttributes[x];E&&(c[x]||(c[x]=[]),E.forEach((w,C)=>{let S=new w.array.constructor(w.count*w.itemSize);c[x][C]=new w.constructor(S,w.itemSize,w.normalized)}))}let d=e*.5,_=Math.log10(1/e),g=Math.pow(10,_),m=d*g;for(let v=0;v<r;v++){let M=n?n.getX(v):v,x="";for(let A=0,E=a.length;A<E;A++){let w=a[A],C=s.getAttribute(w),S=C.itemSize;for(let y=0;y<S;y++)x+=`${~~(C[u[y]](M)*g+m)},`}if(x in t)h.push(t[x]);else{for(let A=0,E=a.length;A<E;A++){let w=a[A],C=s.getAttribute(w),S=s.morphAttributes[w],y=C.itemSize,P=l[w],U=c[w];for(let B=0;B<y;B++){let H=u[B],q=f[B];if(P[q](o,C[H](M)),S)for(let X=0,K=S.length;X<K;X++)U[X][q](o,S[X][H](M))}}t[x]=o,h.push(o),o++}}let p=s.clone();for(let v in s.attributes){let M=l[v];if(p.setAttribute(v,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),v in c)for(let x=0;x<c[v].length;x++){let A=c[v][x];p.morphAttributes[v][x]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}function Md(s,e){if(e===O_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ja||e===Yc){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ja)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Kc=class extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Vd(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Js.extractUrlBase(e);o=Js.resolveURL(c,this.path)}else o=Js.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===e0){try{o[rt.KHR_BINARY_GLTF]=new Gd(e)}catch(u){i&&i(u);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new $d(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:o[u]=new Ed;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Wd(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[u]=new Xd;break;case rt.KHR_MESH_QUANTIZATION:o[u]=new Yd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function HT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Td=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ue(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],bn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gc(h),c.distance=u;break;case"spot":c=new Vc(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ms(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Ed=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){let i=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(i)}},Ad=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Rd=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(a,a)}return Promise.all(r)}},Cd=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Pd=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Id=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],bn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Ld=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Dd=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],bn),Promise.all(r)}},Nd=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ud=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],bn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Wt)),Promise.all(r)}},Od=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Fd=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Bd=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},kd=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zd=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Hd=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Vd=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==xi.TRIANGLES&&c.mode!==xi.TRIANGLE_STRIP&&c.mode!==xi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let _ of u){let g=new je,m=new F,p=new Ii,v=new F(1,1,1),M=new Dc(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,g.compose(m,p,v));for(let x in l)if(x==="_COLOR_0"){let A=l[x];M.instanceColor=new Lr(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);Ht.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},e0="glTF",ja=12,$_={JSON:1313821514,BIN:5130562},Gd=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==e0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ja,r=new DataView(e,ja),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===$_.JSON){let c=new Uint8Array(e,ja+o,a);this.content=n.decode(c)}else if(l===$_.BIN){let c=ja+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Wd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Zd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Zd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Vo[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let _ in d.attributes){let g=d.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}u(d)},a,c,bn,f)})})}},Xd=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Yd=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},$c=class extends Zs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,v=1-m,M=p-f+u;for(let x=0;x!==a;x++){let A=o[g+x+a],E=o[g+x+l]*h,w=o[_+x+a],C=o[_+x]*h;r[x]=v*A+M*E+m*w+p*C}return r}},VT=new Ii,qd=class extends $c{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return VT.fromArray(r).normalize().toArray(r),r}},xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},J_={9728:Sn,9729:Wn,9984:cd,9985:Da,9986:xo,9987:Vi},j_={33071:fs,33648:Fa,10497:Wi},Sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},js={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GT={CUBICSPLINE:void 0,LINEAR:Po,STEP:Co},bd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new qs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),s.DefaultMaterial}function Dr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ms(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function XT(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function YT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qT(s){let e,t=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wd(t.attributes):e=s.indices+":"+wd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wd(s.targets[n]);return e}function wd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Kd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var KT=new je,$d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ko(this.options.manager):this.textureLoader=new Wc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Dr(r,a,i),Ms(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Js.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Sd[i.type],a=Vo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new en(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Sd[i.type],c=Vo[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,g,m;if(d&&d!==u){let p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,M=t.cache.get(v);M||(g=new c(a,p*d,i.count*d/h),M=new Ha(g,d/h),t.cache.add(v,M)),m=new Va(M,l,f%d/h,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),m=new en(g,l,_);if(i.sparse!==void 0){let p=Sd.SCALAR,v=Vo[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new v(o[1],M,i.sparse.count*p),E=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new en(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,C=A.length;w<C;w++){let S=A[w];if(m.setX(S,E[w*l]),l>=2&&m.setY(S,E[w*l+1]),l>=3&&m.setZ(S,E[w*l+2]),l>=4&&m.setW(S,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=J_[f.magFilter]||Wn,h.minFilter=J_[f.minFilter]||Vi,h.wrapS=j_[f.wrapS]||Wi,h.wrapT=j_[f.wrapT]||Wi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Sn&&h.minFilter!==Wn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){let m=new ln(g);m.needsUpdate=!0,f(m)}),t.load(Js.resolveURL(u,r.path),_,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ms(u,o),u.userData.mimeType=o.mimeType||ZT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Xa,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Wa,Xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return qs}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let u=i[rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],bn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ai);let h=r.alphaMode||bd.OPAQUE;if(h===bd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===bd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ii&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==ii&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ii){let u=r.emissiveFactor;a.emissive=new Ue().setRGB(u[0],u[1],u[2],bn)}return r.emissiveTexture!==void 0&&o!==ii&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ms(u,r),t.associations.set(u,{materials:e}),r.extensions&&Dr(i,u,r),u})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Q_(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=qT(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Q_(new si,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?WT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,_=h.length;d<_;d++){let g=h[d],m=o[d],p,v=c[d];if(m.mode===xi.TRIANGLES||m.mode===xi.TRIANGLE_STRIP||m.mode===xi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Pc(g,v):new zt(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xi.TRIANGLE_STRIP?p.geometry=Md(p.geometry,Yc):m.mode===xi.TRIANGLE_FAN&&(p.geometry=Md(p.geometry,Ja));else if(m.mode===xi.LINES)p=new Oc(g,v);else if(m.mode===xi.LINE_STRIP)p=new Fo(g,v);else if(m.mode===xi.LINE_LOOP)p=new Fc(g,v);else if(m.mode===xi.POINTS)p=new Bc(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&YT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ms(p,r),m.extensions&&Dr(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,_=u.length;d<_;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Dr(i,u[0],r),u[0];let f=new On;r.extensions&&Dr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=u.length;d<_;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(k_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new No(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ms(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Lc(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],_=u[2],g=u[3],m=u[4],p=[];for(let v=0,M=f.length;v<M;v++){let x=f[v],A=d[v],E=_[v],w=g[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let S=n._createAnimationTracks(x,A,E,w,C);if(S)for(let y=0;y<S.length;y++)p.push(S[y])}return new Hc(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,KT)});for(let d=0,_=u.length;d<_;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ga:c.length>1?h=new On:c.length===1?h=c[0]:h=new Ht,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ms(h,r),r.extensions&&Dr(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new On;n.name&&(r.name=i.createUniqueName(n.name)),Ms(r,n),n.extensions&&Dr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Xn||f instanceof ln)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];js[r.path]===js.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(js[r.path]){case js.weights:c=_s;break;case js.rotation:c=xs;break;case js.position:case js.scale:c=vs;break;default:switch(n.itemSize){case 1:c=_s;break;case 2:case 3:default:c=vs;break}break}let h=i.interpolation!==void 0?GT[i.interpolation]:Po,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let _=new c(l[f]+"."+js[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Kd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof xs?qd:$c;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $T(s,e,t){let n=e.attributes,i=new gi;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){let h=Kd(Vo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,l=new F;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){let g=Kd(Vo[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new ni;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Q_(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Zd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ot.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Ms(s,e),$T(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?XT(s,e.targets,t):s})}var jd=new Kc,JT=new ko,Jd=new Map,t0=async s=>{let e=await(await fetch(s.replace(/\.glb$/,".json"))).json(),t=atob(e.glb),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return jd.parseAsync(n.buffer,"models/")},jT=/claude/.test(location.hostname),QT=s=>jT?t0(s).catch(()=>jd.loadAsync(s)):jd.loadAsync(s).catch(()=>t0(s)),s0=s=>(Jd.has(s)||Jd.set(s,QT(s)),Jd.get(s)),Jc=(s,e)=>{let t=JT.load(s);return t.flipY=!1,t.colorSpace=e?Wt:Hi,t.anisotropy=8,t};function ep(){try{let s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}}function r0(s){let e=new Oo;e.add(new zt(new kc(30,32,16),new ii({color:new Ue(12169380),side:Mn})));let t=new Ir(1,1,1),n=(o,a,l,c)=>{let h=new zt(t,new ii({color:new Ue(o).multiplyScalar(a)}));h.position.set(...l),h.scale.set(...c),h.lookAt(0,0,0),e.add(h)};n(16773596,9,[-9,10,9],[11,11,.2]),n(16777215,7,[12,2,6],[3,16,.2]),n(16773334,2.6,[0,-11,3],[22,8,.2]),n(15659775,4,[-12,0,-8],[4,14,.2]),n(16774888,6,[4,12,-7],[14,3,.2]),n(16774111,1.6,[0,2,16],[18,12,.2]),n(1905932,1,[-14,-3,4],[.2,10,8]),n(1905932,1,[9,-6,9],[7,.2,7]),n(2760208,1,[6,9,10],[5,.2,5]);let i=new Uo(s),r=i.fromScene(e,.035).texture;return i.dispose(),r}function n0(s=1,e=!1){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),i=s*9301+49297,r=()=>(i=(i*9301+49297)%233280)/233280;n.fillStyle=e?"#f4f0ea":"#b9b9b9",n.fillRect(0,0,128,128);for(let a=0;a<900;a++){let l=e?215+r()*40:90+r()*165;n.fillStyle=`rgba(${l},${l},${e?l-6:l},${.35+r()*.5})`;let c=e?2+r()*16:.6+r()*2.6;n.fillRect(r()*128,r()*128,e?c*3:c,e?1.2:c)}let o=new Ya(t);return o.colorSpace=Wt,o.wrapS=o.wrapT=Wi,o}function i0(s=256,e=260,t=7){let n=t,i=()=>(n=n*16807%2147483647)/2147483647,r=new Float32Array(s*s);for(let h=0;h<e;h++){let u=i()*s,f=i()*s,d=7+i()*20,_=(i()-.35)*1.2,g=Math.ceil(d*2.2);for(let m=-g;m<=g;m++)for(let p=-g;p<=g;p++){let v=((Math.round(u)+p)%s+s)%s,M=((Math.round(f)+m)%s+s)%s;r[M*s+v]+=_*Math.exp(-(p*p+m*m)/(d*d))}}for(let h=0;h<s*s;h++)r[h]+=(i()-.5)*.05;let o=document.createElement("canvas");o.width=o.height=s;let a=o.getContext("2d"),l=a.createImageData(s,s);for(let h=0;h<s;h++)for(let u=0;u<s;u++){let f=(r[h*s+(u+1)%s]-r[h*s+(u+s-1)%s])*2.2,d=(r[(h+1)%s*s+u]-r[(h+s-1)%s*s+u])*2.2,_=Math.hypot(f,d,1),g=(h*s+u)*4;l.data[g]=(-f/_*.5+.5)*255,l.data[g+1]=(d/_*.5+.5)*255,l.data[g+2]=(1/_*.5+.5)*255,l.data[g+3]=255}a.putImageData(l,0,0);let c=new Ya(o);return c.wrapS=c.wrapT=Wi,c.repeat.set(1.6,1.6),c.anisotropy=8,c}var jc=null;function o0(){if(jc)return jc;let s=Bn,e=n0(3),t=n0(5,!0),n=Jc("tex/coin_normal.webp"),i=Jc("tex/hamsa_normal.webp"),r=(o,a=.32)=>new s({color:o,roughness:a,metalness:0,clearcoat:.7,clearcoatRoughness:.12,map:e,bumpMap:e,bumpScale:.6});return jc={gold:new s({color:15582307,metalness:1,roughness:.2}),silver:new s({color:15856629,metalness:1,roughness:.2}),gold_logo:new s({color:15912564,metalness:1,roughness:.2,normalMap:i0(),normalScale:new Je(.5,.5)}),silver_logo:new s({color:15856629,metalness:1,roughness:.2,normalMap:i0(256,260,11),normalScale:new Je(.45,.45)}),brass:new s({color:16777215,metalness:1,roughness:.34,map:Jc("tex/hamsa_color.webp",!0),normalMap:i,normalScale:new Je(1.5,-1.5)}),coin_aged:new s({color:15916192,metalness:1,roughness:.42,map:Jc("tex/coin_color.webp",!0),normalMap:n,normalScale:new Je(1.6,-1.6)}),coin_gold:new s({color:15579214,metalness:1,roughness:.28,normalMap:n,normalScale:new Je(1.3,-1.3)}),mop:new s({color:16117992,roughness:.16,metalness:0,clearcoat:1,clearcoatRoughness:.05,iridescence:1,iridescenceIOR:1.7,iridescenceThicknessRange:[180,520],map:t,sheen:.4,sheenColor:new Ue(16771316)}),st_turquoise:r(1483674),st_lapis:r(2047907),st_carnelian:r(12664863,.26),st_garnet:r(9313074,.26),st_malachite:r(1212506),st_smoke:r(10129276),st_sapphire:new s({color:726080,roughness:.12,clearcoat:1}),cord:new qs({color:789518,roughness:.85})},jc}function a0(s){let e=o0();return s.traverse(t=>{if(!t.isMesh)return;let n=(t.material&&t.material.name||"").replace(/\.\d+$/,"");e[n]&&(t.material=e[n]),t.castShadow=!0,t.receiveShadow=!1}),s}function l0(s){let e=new Cc({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.toneMapping=ld,e.toneMappingExposure=1.08,e.shadowMap.enabled=!0,e.shadowMap.type=ad,e}function Qd(s,e,t){let n=t.clientWidth,i=t.clientHeight;!n||!i||(s.setSize(n,i,!1),e.aspect=n/i,e.updateProjectionMatrix())}function c0(s,e,t){let n=new zo(16773853,1.1);n.position.set(...e),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.radius=9,n.shadow.blurSamples=16,n.shadow.bias=-5e-4,n.shadow.normalBias=.02;let i=n.shadow.camera;return i.left=-t,i.right=t,i.top=t,i.bottom=-t,i.near=.1,i.far=40,s.add(n),n}function h0(s,e){new IntersectionObserver(t=>t.forEach(n=>e(n.isIntersecting)),{rootMargin:"120px"}).observe(s)}async function u0(s,{reduced:e}){let t=s.querySelector("canvas"),n=l0(t),i=new Oo;i.environment=r0(n);let r=new $t(26,1,.1,100);r.position.set(0,0,12.4);let o=new zt(new Ys(40,40),new Bo({opacity:.17,color:4864546}));o.position.z=-.26,o.receiveShadow=!0,i.add(o),c0(i,[-3.2,5.5,11],4.2);let a=await s0("models/logo.glb"),l=a0(a.scene),c=new On;c.add(l),i.add(c);let h=[];l.traverse(g=>{g.isMesh&&h.push(g)}),h.forEach(g=>{let m=g.geometry.clone();m.deleteAttribute("normal"),m=K_(m,1e-4),m.computeVertexNormals(),g.geometry=m,g.material=o0()[g.name.includes("silver")?"silver_logo":"gold_logo"]}),h.forEach((g,m)=>{g.userData.home=g.position.clone();let p=m%2?1:-1;g.userData.out=new F(g.position.x*.55,g.position.y*.35,p*(.5+m%5*.32)),g.userData.spin=p*(.3+m%3*.2)});let u={px:0,py:0,rx:0,ry:0,burst:0,intro:e?1:0,on:!0,t0:performance.now()},f=()=>{Qd(n,r,s);let g=r.aspect;c.scale.setScalar(g<.8?.78:g<1.05?.9:1)};f(),new ResizeObserver(f).observe(s),window.addEventListener("pointermove",g=>{u.px=g.clientX/innerWidth-.5,u.py=g.clientY/innerHeight-.5},{passive:!0}),h0(s,g=>{u.on=g});let d=new F;function _(g){if(requestAnimationFrame(_),!u.on)return;let m=(g-u.t0)/1e3,p=e?0:Math.sin(m*.45)*.1;u.ry+=(u.px*.7+p-u.ry)*.05,u.rx+=(u.py*.35-u.rx)*.05;let v=u.burst,M=u.intro;c.rotation.set(u.rx,u.ry+v*1.25+(1-M)*-1.1,0),c.position.y=v*.6,i.environmentRotation.y=u.ry*1.6+m*(e?0:.07),i.environmentRotation.x=u.rx,h.forEach((x,A)=>{let E=Math.max(0,Math.min(1,v*1.25-A*.012)),w=E*E*(3-2*E);d.copy(x.userData.out).multiplyScalar(w),x.position.copy(x.userData.home).add(d),x.position.z+=(1-M)*(A%2?.9:-.9)*(1+A*.12),x.rotation.y=w*x.userData.spin}),n.render(i,r)}return n.render(i,r),requestAnimationFrame(_),u}async function f0(s,e,{reduced:t}){let n=s.querySelector("canvas"),i=l0(n),r=new Oo;r.environment=r0(i);let o=new $t(24,1,.1,100);o.position.set(0,1.5,10.5),o.lookAt(0,0,0);let a=new zt(new Ys(40,40),new Bo({opacity:.2,color:4864546}));a.rotation.x=-Math.PI/2,a.position.y=-2.05,a.receiveShadow=!0,r.add(a);let l=new zt(new Ys(40,40),new Bo({opacity:.17,color:4864546}));l.position.z=-1.5,l.receiveShadow=!0,l.visible=!1,r.add(l);let c=c0(r,[-3,9,5],4.4),h=new On;r.add(h);let u={on:!1,vel:0,drag:!1,lx:0,ly:0,tilt:0,idle:0,cur:null,busy:!1,scale:1};Qd(i,o,s),new ResizeObserver(()=>Qd(i,o,s)).observe(s),h0(s,v=>{u.on=v});let f={};async function d(v){if(f[v.id])return f[v.id];let M=await s0(`models/${v.file}.glb`),x=a0(M.scene.clone(!0)),A=new On,[E,w,C,S]=v.fit,y=3.5/S;x.position.set(-E*y,-w*y,-C*y),x.scale.setScalar(y);let P=new On;return P.rotation.set(...v.rot),P.add(x),A.add(P),f[v.id]=A}async function _(v,M){let x=e.find(P=>P.id===v);if(!x||u.busy||u.cur===v)return;u.busy=!0;let A=await d(x),E=()=>{h.clear(),h.add(A),u.cur=v;let P=x.mount==="wall";l.visible=P,a.visible=!P,c.position.set(...P?[-3.5,6,10]:[-3,9,5])};if(M||t||!u.cur){E(),u.scale=1,u.busy=!1;return}let w=performance.now(),C=h.rotation.y;await new Promise(P=>{(function U(B){let H=Math.min(1,(B-w)/420),q=H*H;u.scale=1-q*.96,h.rotation.y=C+q*2.2,H<1?requestAnimationFrame(U):P()})(w)}),E(),h.rotation.y-=2.6;let S=performance.now(),y=h.rotation.y;await new Promise(P=>{(function U(B){let H=Math.min(1,(B-S)/900),q=1-Math.pow(1-H,4);u.scale=.04+q*.96,h.rotation.y=y+q*2.6,H<1?requestAnimationFrame(U):P()})(S)}),u.busy=!1}n.addEventListener("pointerdown",v=>{u.drag=!0,u.lx=v.clientX,u.ly=v.clientY,u.idle=0,n.setPointerCapture(v.pointerId)}),n.addEventListener("pointermove",v=>{if(!u.drag)return;let M=v.clientX-u.lx,x=v.clientY-u.ly;u.lx=v.clientX,u.ly=v.clientY,u.vel=M*.009,h.rotation.y+=u.vel,u.tilt=Math.max(-.5,Math.min(.5,u.tilt+x*.004))});let g=()=>{u.drag=!1};n.addEventListener("pointerup",g),n.addEventListener("pointercancel",g),n.addEventListener("keydown",v=>{v.key==="ArrowLeft"&&(h.rotation.y-=.25),v.key==="ArrowRight"&&(h.rotation.y+=.25)});let m=performance.now();function p(v){requestAnimationFrame(p);let M=Math.min(.05,(v-m)/1e3);m=v,u.on&&(!u.drag&&!u.busy&&(u.idle+=M,h.rotation.y+=u.vel,u.vel*=.94,!t&&u.idle>1.2&&(h.rotation.y+=M*.32),u.tilt*=.985),h.rotation.x=u.tilt,h.scale.setScalar(u.scale),r.environmentRotation.y=-h.rotation.y*.25,i.render(r,o))}return requestAnimationFrame(p),{show:_,state:u}}wt.registerPlugin(qe);var It=(s,e=document)=>e.querySelector(s),Xt=(s,e=document)=>[...e.querySelectorAll(s)],d0=document.documentElement,vi=matchMedia("(prefers-reduced-motion: reduce)").matches,eE=matchMedia("(hover: hover) and (pointer: fine)").matches,Yn="en";try{let s=localStorage.getItem("masagh-lang");(s==="ar"||s==="en")&&(Yn=s)}catch{}var Nr=()=>Yn==="ar"?1:0,ri=null;vi||(ri=new sg({duration:1.15,smoothWheel:!0}),ri.on("scroll",qe.update),wt.ticker.add(s=>ri.raf(s*1e3)),wt.ticker.lagSmoothing(0));Xt('a[href^="#"]').forEach(s=>s.addEventListener("click",e=>{let t=It(s.getAttribute("href"));t&&(e.preventDefault(),ri?ri.scrollTo(t,{offset:-20}):t.scrollIntoView())}));function tE(s){let e=s.textContent;s.setAttribute("aria-label",e),s.textContent="",e.split(/\s+/).filter(Boolean).forEach((t,n,i)=>{let r=document.createElement("span");r.className="w",r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.textContent=t,r.appendChild(o),s.appendChild(r),n<i.length-1&&s.appendChild(document.createTextNode(" "))})}function nE(s){let e=s.textContent;s.textContent="",e.split(/\s+/).filter(Boolean).forEach((t,n,i)=>{let r=document.createElement("span");r.className="fw",r.textContent=t,/[؀-ۿ]/.test(t)&&Yn==="en"&&(r.lang="ar"),s.appendChild(r),n<i.length-1&&s.appendChild(document.createTextNode(" "))})}var tp=null;function g0(s){d0.lang=Yn,d0.dir=Yn==="ar"?"rtl":"ltr",Xt("[data-i18n]").forEach(t=>{let n=t.dataset.i18n;Sa[n]&&(t.textContent=Sa[n][Nr()])}),Xt("[data-en]").forEach(t=>{t.matches("button")||(t.textContent=t.dataset[Yn])}),Xt(".plate__btn").forEach(t=>{t.setAttribute("aria-label",t.dataset[Yn]),It("img",t).alt=t.dataset[Yn]}),It("#lang").lang=Yn==="ar"?"en":"ar",Xt("[data-split]").forEach(tE);let e=It("[data-fill]");nE(e),tp&&tp.kill(),vi||(tp=wt.fromTo(Xt(".fw",e),{opacity:.16},{opacity:1,stagger:.08,ease:"none",scrollTrigger:{trigger:e,start:"top 82%",end:"bottom 45%",scrub:.6}}).scrollTrigger),ip(Qa),It(".cursor__label").textContent=Sa["pieces.drag"][Nr()];try{localStorage.setItem("masagh-lang",Yn)}catch{}s||(_0(!0),qe.refresh())}It("#lang").addEventListener("click",()=>{Yn=Yn==="ar"?"en":"ar",g0(!1)});var Qa=to[0].id;function ip(s){let e=to.find(n=>n.id===s);if(!e)return;let t=It("#piece-label");It('[data-f="fam"]',t).textContent=e.fam[Nr()],It('[data-f="mat"]',t).textContent=e.mat[Nr()],It('[data-f="tech"]',t).textContent=e.tech[Nr()]}var p0=new WeakSet;function _0(s){Xt("[data-split]").forEach(e=>{let t=Xt(".w > span",e);if(!vi){if(s&&p0.has(e)){wt.set(t,{yPercent:0});return}e.closest(".hero")||(wt.set(t,{yPercent:112}),qe.create({trigger:e,start:"top 88%",once:!0,onEnter:()=>{p0.add(e),wt.to(t,{yPercent:0,duration:1.1,ease:"expo.out",stagger:.05})}}))}})}var np=null;function iE(){let s=It(".loader"),e=It(".loader__pour"),t=Xt(".hero h1 .w > span"),n=Xt(".hero .lede, .hero__actions > *, .hero__hint");if(vi)return s.remove(),null;wt.set(t,{yPercent:112}),wt.set(n,{opacity:0,y:18});let i=wt.timeline({defaults:{ease:"expo.out"}});return i.fromTo(e,{attr:{y:820}},{attr:{y:0},duration:1.5,ease:"power2.inOut"}).to(s,{yPercent:-100,duration:1,ease:"expo.inOut"},"+=.15").add(()=>s.remove()).to(t,{yPercent:0,duration:1.2,stagger:.06},"-=.55").to(n,{opacity:1,y:0,duration:.9,stagger:.08},"-=.8"),i}function sE(){let s=It(".nav"),e=0,t=n=>{s.classList.toggle("is-stuck",n>40),innerWidth>860&&s.classList.toggle("is-hidden",n>e&&n>500),e=n};ri?ri.on("scroll",n=>t(n.scroll)):addEventListener("scroll",()=>t(scrollY),{passive:!0})}function rE(){if(!eE)return;let s=It(".cursor"),e=innerWidth/2,t=innerHeight/2,n=e,i=t;addEventListener("pointermove",r=>{e=r.clientX,t=r.clientY},{passive:!0}),wt.ticker.add(()=>{n+=(e-n)*.22,i+=(t-i)*.22,s.style.transform=`translate3d(${n}px,${i}px,0)`}),document.addEventListener("pointerover",r=>{let o=r.target.closest?r.target:null;o&&(s.classList.toggle("is-drag",!!o.closest('[data-cursor="drag"]')),s.classList.toggle("is-link",!o.closest('[data-cursor="drag"]')&&!!o.closest("a, button")),s.classList.toggle("is-dark",!!o.closest(".school")))}),document.addEventListener("pointerleave",()=>{s.style.opacity=0}),document.addEventListener("pointerenter",()=>{s.style.opacity=1})}function oE(){vi||Xt(".fam").forEach(i=>{let r=It(".fam__ar",i);wt.fromTo(r,{"--foil":"0%"},{"--foil":"100%",ease:"none",scrollTrigger:{trigger:i,start:"top bottom",end:"top 10%",scrub:!0}}),wt.from(Xt(".plate",i),{y:46,opacity:0,duration:1.1,ease:"expo.out",stagger:.07,scrollTrigger:{trigger:It(".plates",i),start:"top 86%",once:!0}})});let s=It("#lightbox"),e=It("img",s),t=It("figcaption",s);Xt(".plate__btn").forEach(i=>i.addEventListener("click",()=>{e.src=i.dataset.full,e.width=i.dataset.w,e.height=i.dataset.h,e.alt=i.dataset[Yn],t.innerHTML="";let r=document.createElement("b");r.textContent=`${Sa["col.no"][Nr()]} ${i.dataset.no}`;let o=document.createElement("span");o.textContent=i.dataset[Yn],t.append(r,o),s.showModal?s.showModal():s.setAttribute("open",""),ri&&ri.stop()}));let n=()=>{s.open&&s.close()};It(".lightbox__close").addEventListener("click",n),s.addEventListener("click",i=>{(i.target===s||i.target.tagName==="FIGURE")&&n()}),s.addEventListener("close",()=>{ri&&ri.start()})}function aE(){Xt(".worn__row").forEach(s=>{let e=It(".worn__track",s);e.innerHTML+=e.innerHTML;let t=+s.dataset.dir,n=0,i=0,r=!1,o=()=>{i=e.scrollWidth/2};o(),addEventListener("load",o),new ResizeObserver(o).observe(e),new IntersectionObserver(a=>{r=a[0].isIntersecting},{rootMargin:"100px"}).observe(s),wt.ticker.add((a,l)=>{if(!r||!i)return;let c=ri?Math.abs(ri.velocity):0;n+=t*(vi?0:.035*l+c*.5),n=(n%i+i)%i,e.style.transform=`translate3d(${-n}px,0,0)`})})}function lE(){let s=Xt(".step"),e=i=>s.forEach((r,o)=>r.classList.toggle("is-on",o===i));if(vi){s.forEach(i=>i.classList.add("is-on")),wt.set(".kaff__stone",{attr:{rx:13,ry:15}});return}let t=i=>Xt(`.kaff ${i}`);wt.set(t(".kaff__outline"),{strokeDashoffset:1}),wt.set(t(".kaff__fill"),{opacity:0}),wt.set(t(".kaff__eng path"),{strokeDashoffset:1}),wt.set(t(".kaff__dot"),{scale:0,transformOrigin:"center",transformBox:"fill-box"}),wt.set(t(".kaff__hang"),{opacity:0}),wt.set(t(".kaff__cord"),{strokeDashoffset:1}),wt.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".steps",start:"top 88%",end:"bottom 72%",scrub:.7,onUpdate:i=>e(Math.min(4,Math.floor(i.progress*5)))}}).to(t(".kaff__outline"),{strokeDashoffset:0,duration:1}).to(t(".kaff__fill"),{opacity:1,duration:.6},1.1).to(t(".kaff__outline"),{stroke:"#7F5A12",duration:.4},1.2).to(t(".e1"),{strokeDashoffset:0,duration:.3},2).to(t(".e2"),{strokeDashoffset:0,duration:.25,stagger:.03},2.15).to(t(".e3"),{strokeDashoffset:0,duration:.3,stagger:.012},2.3).to(t(".e4"),{strokeDashoffset:0,duration:.2,stagger:.04},2.5).to(t(".e5"),{strokeDashoffset:0,duration:.25,stagger:.015},2.6).to(t(".e6"),{strokeDashoffset:0,duration:.15,stagger:.008},2.75).to(t(".kaff__dot"),{scale:1,duration:.1,stagger:.006},2.8).to(t(".kaff__hang"),{opacity:1,duration:.25},3.05).to(t(".kaff__stone"),{attr:{rx:13,ry:15},duration:.4,ease:"back.out(2.5)"},3.3).to(t(".kaff__cord"),{strokeDashoffset:0,duration:.4},3.5).to(t(".kaff__sheen"),{opacity:1,duration:.1},4.05).fromTo(t(".kaff__sheen"),{attr:{x:-300}},{attr:{x:760},duration:.8},4.05).to(t(".kaff__eng path"),{stroke:"#6B4A0E",duration:.5},4.1).to({},{duration:.15},4.85),e(0)}function cE(){let s=Xt(".school__mark use");vi||!s.length||(s.forEach(e=>{e.style.setProperty("--len",4200)}),wt.fromTo(s,{"--off":4200},{"--off":0,ease:"none",stagger:.1,scrollTrigger:{trigger:".school",start:"top 75%",end:"bottom 80%",scrub:.8}}),wt.from(".mod",{opacity:0,y:28,duration:.9,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:".mods",start:"top 82%",once:!0}}))}async function hE(){if(!ep())return;let s=It(".hero__stage");try{np=await u0(s,{reduced:vi}),s.classList.add("is-live"),vi||wt.to(np,{intro:1,duration:2.4,ease:"expo.out",delay:Math.max(0,2.3-(m0?m0.time():9))}),vi||qe.create({trigger:".hero",start:"top top",end:"bottom 15%",scrub:.5,onUpdate:r=>{np.burst=r.progress}})}catch(r){console.warn("hero 3D unavailable",r)}let e=It(".vitrine__stage"),t=null,n=!1,i=async()=>{if(!(t||n)){n=!0;try{t=await f0(e,to,{reduced:vi}),await t.show(Qa,!0),e.classList.add("is-live")}catch(r){console.warn("3D viewer unavailable",r)}}};new IntersectionObserver((r,o)=>{r[0].isIntersecting&&(o.disconnect(),i())},{rootMargin:"900px"}).observe(e),Xt(".ptab").forEach(r=>r.addEventListener("click",async()=>{let o=r.dataset.piece;if(o===Qa)return;Xt(".ptab").forEach(c=>{let h=c===r;c.classList.toggle("is-on",h),c.setAttribute("aria-pressed",h)}),Qa=o,ip(o);let a=to.find(c=>c.id===o),l=It(".vitrine__poster");l.src=`img/render_${a.poster}.webp`,l.alt=a.name[Nr()],t&&t.show(o)}))}Xt(".ptab").forEach(s=>s.addEventListener("click",()=>{if(!ep()){let e=s.dataset.piece;Xt(".ptab").forEach(n=>n.classList.toggle("is-on",n===s)),Qa=e,ip(e);let t=to.find(n=>n.id===e);It(".vitrine__poster").src=`img/render_${t.poster}.webp`}}));g0(!0);_0(!1);var m0=iE();sE();rE();oE();aE();lE();cE();hE();addEventListener("load",()=>qe.refresh());
