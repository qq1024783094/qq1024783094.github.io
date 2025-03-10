import{u as Q,b as xe,q as Ie,d as jt,M as Qe,m as Ve,N as et,r as se,F as Bt,c as qt,o as Ut,O as Vt}from"./app.C9RKYA78.js";import{_ as Dt}from"./YunComment.vue_vue_type_style_index_0_lang.BBnMZhkw.js";import"./chunks/@vueuse/motion.QKQgXNlf.js";import{d as De}from"./chunks/dayjs.ouEjkJjx.js";import{a as tt,u as Ft}from"./chunks/vue-router.BlDkhGPC.js";import{aX as ue,U as O,a9 as ee,bf as Gt,b3 as x,Z as D,_,bB as h,X,b_ as de,bt as P,Y as k,bb as Zt,b1 as Wt,be as y,aO as Le,aN as Kt,a6 as W,aQ as Xt}from"./framework.BKJYaCLv.js";import{u as Oe}from"./chunks/vue-i18n.D_IX1rR7.js";import{_ as Jt}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.C4S-U0YE.js";import{u as Qt}from"./post.BMf169Z6.js";function en(){const e=Q(),t=xe();Ie&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),ue(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let i;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;i=o}else i=a;for(const c of Array.from(n))c.scrollHeight>i&&c.classList.add("folded")})}function tn(){if(Ie){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,i=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!i)return;const c=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let m="";i.querySelectorAll("span.line:not(.diff.remove)").forEach(g=>m+=`${g.textContent||""}
`),m=m.slice(0,-1),c&&(m=m.replace(/^ *(\$|>) /gm,"").trim()),nn(m).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const g=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,g)})}})}}async function nn(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},le=function(t){return t.tagName==="IMG"},on=function(t){return NodeList.prototype.isPrototypeOf(t)},ce=function(t){return t&&t.nodeType===1},Fe=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Ge=function(t){try{return Array.isArray(t)?t.filter(le):on(t)?[].slice.call(t).filter(le):ce(t)?[t].filter(le):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(le):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},an=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},rn=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,i=n.width,c=n.height,m=t.cloneNode(),g=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,w=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return m.removeAttribute("id"),m.style.position="absolute",m.style.top=o+g+"px",m.style.left=a+w+"px",m.style.width=i+"px",m.style.height=c+"px",m.style.transform="",m},V=function(t,n){var o=R({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},sn=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(s){function l(){}s(l,l)},a=function(s){var l=s.target;if(l===re){C();return}E.indexOf(l)!==-1&&ae({target:l})},i=function(){if(!(q||!r.original)){var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(qe-s)>f.scrollOffset&&setTimeout(C,150)}},c=function(s){var l=s.key||s.keyCode;(l==="Escape"||l==="Esc"||l===27)&&C()},m=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s;if(s.background&&(re.style.background=s.background),s.container&&s.container instanceof Object&&(l.container=R({},f.container,s.container)),s.template){var p=ce(s.template)?s.template:document.querySelector(s.template);l.template=p}return f=R({},f,l),E.forEach(function(v){v.dispatchEvent(V("medium-zoom:update",{detail:{zoom:b}}))}),b},g=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(R({},f,s))},w=function(){for(var s=arguments.length,l=Array(s),p=0;p<s;p++)l[p]=arguments[p];var v=l.reduce(function(d,z){return[].concat(d,Ge(z))},[]);return v.filter(function(d){return E.indexOf(d)===-1}).forEach(function(d){E.push(d),d.classList.add("medium-zoom-image")}),B.forEach(function(d){var z=d.type,A=d.listener,U=d.options;v.forEach(function(T){T.addEventListener(z,A,U)})}),b},he=function(){for(var s=arguments.length,l=Array(s),p=0;p<s;p++)l[p]=arguments[p];r.zoomed&&C();var v=l.length>0?l.reduce(function(d,z){return[].concat(d,Ge(z))},[]):E;return v.forEach(function(d){d.classList.remove("medium-zoom-image"),d.dispatchEvent(V("medium-zoom:detach",{detail:{zoom:b}}))}),E=E.filter(function(d){return v.indexOf(d)===-1}),b},u=function(s,l){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E.forEach(function(v){v.addEventListener("medium-zoom:"+s,l,p)}),B.push({type:"medium-zoom:"+s,listener:l,options:p}),b},Be=function(s,l){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E.forEach(function(v){v.removeEventListener("medium-zoom:"+s,l,p)}),B=B.filter(function(v){return!(v.type==="medium-zoom:"+s&&v.listener.toString()===l.toString())}),b},oe=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.target,p=function(){var d={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},z=void 0,A=void 0;if(f.container)if(f.container instanceof Object)d=R({},d,f.container),z=d.width-d.left-d.right-f.margin*2,A=d.height-d.top-d.bottom-f.margin*2;else{var U=ce(f.container)?f.container:document.querySelector(f.container),T=U.getBoundingClientRect(),Ee=T.width,xt=T.height,It=T.left,Ot=T.top;d=R({},d,{width:Ee,height:xt,left:It,top:Ot})}z=z||d.width-f.margin*2,A=A||d.height-f.margin*2;var Z=r.zoomedHd||r.original,St=Fe(Z)?z:Z.naturalWidth||z,Tt=Fe(Z)?A:Z.naturalHeight||A,ie=Z.getBoundingClientRect(),Ht=ie.top,Nt=ie.left,$e=ie.width,ze=ie.height,Mt=Math.min(Math.max($e,St),z)/$e,Rt=Math.min(Math.max(ze,Tt),A)/ze,we=Math.min(Mt,Rt),Pt=(-Nt+(z-$e)/2+f.margin+d.left)/we,Yt=(-Ht+(A-ze)/2+f.margin+d.top)/we,Ue="scale("+we+") translate3d("+Pt+"px, "+Yt+"px, 0)";r.zoomed.style.transform=Ue,r.zoomedHd&&(r.zoomedHd.style.transform=Ue)};return new o(function(v){if(l&&E.indexOf(l)===-1){v(b);return}var d=function Ee(){q=!1,r.zoomed.removeEventListener("transitionend",Ee),r.original.dispatchEvent(V("medium-zoom:opened",{detail:{zoom:b}})),v(b)};if(r.zoomed){v(b);return}if(l)r.original=l;else if(E.length>0){var z=E;r.original=z[0]}else{v(b);return}if(r.original.dispatchEvent(V("medium-zoom:open",{detail:{zoom:b}})),qe=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,q=!0,r.zoomed=rn(r.original),document.body.appendChild(re),f.template){var A=ce(f.template)?f.template:document.querySelector(f.template);r.template=document.createElement("div"),r.template.appendChild(A.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",C),r.zoomed.addEventListener("transitionend",d),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(U),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,p()};var U=setInterval(function(){r.zoomedHd.complete&&(clearInterval(U),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",C),document.body.appendChild(r.zoomedHd),p())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var T=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",T),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",C),document.body.appendChild(r.zoomedHd),p()})}else p()})},C=function(){return new o(function(s){if(q||!r.original){s(b);return}var l=function p(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(re),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),q=!1,r.zoomed.removeEventListener("transitionend",p),r.original.dispatchEvent(V("medium-zoom:closed",{detail:{zoom:b}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,s(b)};q=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(V("medium-zoom:close",{detail:{zoom:b}})),r.zoomed.addEventListener("transitionend",l)})},ae=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.target;return r.original?C():oe({target:l})},be=function(){return f},_e=function(){return E},ye=function(){return r.original},E=[],B=[],q=!1,qe=0,f=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?f=t:(t||typeof t=="string")&&w(t),f=R({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},f);var re=an(f.background);document.addEventListener("click",a),document.addEventListener("keyup",c),document.addEventListener("scroll",i),window.addEventListener("resize",C);var b={open:oe,close:C,toggle:ae,update:m,clone:g,attach:w,detach:he,on:u,off:Be,getOptions:be,getImages:_e,getZoomedImage:ye};return b};function ln(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var cn=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ln(cn);function dn(){const t=Q().value.mediumZoom;ue(()=>{t.enable&&sn(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function nt(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,i=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(i-window.scrollY)>window.innerHeight?window.scrollTo(0,i):window.scrollTo({top:i,behavior:"smooth"})}}function mn(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:i,hash:c,target:m}=n,g=window.location,w=i.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&m!=="_blank"&&o===g.protocol&&a===g.hostname&&!(w&&w[0]!==".html")&&i===g.pathname&&(t.preventDefault(),c&&c!==g.hash&&(await e.push({hash:decodeURIComponent(c)}),nt(n,c,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function un(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function fn(e=document){e.querySelectorAll("table").forEach(t=>{var o;if((o=t.parentElement)!=null&&o.classList.contains("table-container"))return;const n=document.createElement("div");n.className="table-container",un(t,"table-container")})}function pn(e){const t=tt(),n=O(()=>t.path),o=jt(),a=O(()=>{let m=-1;return o.postList.find((g,w)=>g.path===n.value?(m=w,!0):!1),m}),i=O(()=>a.value-1>=0?o.postList[a.value-1]:null),c=O(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[i,c]}function gn(){const e=Q(),t=O(()=>e.value.cdn.prefix);Qe({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),Ve(`${t.value}aplayer/dist/APlayer.min.js`,()=>{Ve(`${t.value}meting@2/dist/Meting.min.js`)})}function vn(){Qe({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const hn={class:"post-nav"},bn={class:"post-nav-item"},_n={class:"title truncate",text:"sm"},yn={class:"post-nav-item"},En={class:"title truncate",text:"sm"},$n=ee({__name:"YunPostNav",setup(e){const[t,n]=pn();return(o,a)=>{const i=Gt("RouterLink");return x(),D("div",hn,[_("div",bn,[h(t)?(x(),X(i,{key:0,class:"post-nav-prev",to:h(t).path||"",title:h(t).title},{default:de(()=>[a[0]||(a[0]=_("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1)),_("span",_n,P(h(t).title),1)]),_:1},8,["to","title"])):k("v-if",!0)]),_("div",yn,[h(n)?(x(),X(i,{key:0,to:h(n).path||"",title:h(n).title,class:"post-nav-next"},{default:de(()=>[_("span",En,P(h(n).title),1),a[1]||(a[1]=_("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1))]),_:1},8,["to","title"])):k("v-if",!0)])])}}});function zn(){Ie&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const i=o.querySelector(".blocks");if(!i)return;const c=Array.from(i.children).find(w=>w.classList.contains("active"));if(!c)return;const m=i.children[a];if(!m||c===m)return;c.classList.remove("active"),m.classList.add("active");const g=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);g==null||g.scrollIntoView({block:"nearest"})}})}const N=typeof window<"u",ot=N&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),at=N&&window.devicePixelRatio>1,wn={elements_selector:".lazy",container:ot||N?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},rt=e=>Object.assign({},wn,e),Ze=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},Ln=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)Ze(e,n);else Ze(e,t)},S="src",Se="srcset",Te="sizes",it="poster",te="llOriginalAttrs",st="data",He="loading",lt="loaded",ct="applied",Cn="entered",Ne="error",dt="native",mt="data-",ut="ll-status",L=(e,t)=>e.getAttribute(mt+t),kn=(e,t,n)=>{const o=mt+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ne=e=>L(e,ut),j=(e,t)=>kn(e,ut,t),fe=e=>j(e,null),Me=e=>ne(e)===null,An=e=>ne(e)===He,xn=e=>ne(e)===Ne,Re=e=>ne(e)===dt,In=[He,lt,ct,Ne],On=e=>In.indexOf(ne(e))>=0,M=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},G=(e,t)=>{N&&t!==""&&e.classList.add(t)},I=(e,t)=>{N&&t!==""&&e.classList.remove(t)},Sn=e=>{e.llTempImage=document.createElement("IMG")},Tn=e=>{delete e.llTempImage},ft=e=>e.llTempImage,pe=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},Hn=e=>{e.disconnect()},Nn=(e,t,n)=>{t.unobserve_entered&&pe(e,n)},Pe=(e,t)=>{e&&(e.loadingCount+=t)},Mn=e=>{e&&(e.toLoadCount-=1)},pt=(e,t)=>{e&&(e.toLoadCount=t)},Rn=e=>e.loadingCount>0,Pn=e=>e.toLoadCount>0,gt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Ye=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&gt(n).forEach(t)},vt=(e,t)=>{gt(e).forEach(t)},ge=[S],ht=[S,it],J=[S,Se,Te],bt=[st],ve=e=>!!e[te],_t=e=>e[te],yt=e=>delete e[te],F=(e,t)=>{if(ve(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[te]=n},Yn=e=>{ve(e)||(e[te]={backgroundImage:e.style.backgroundImage})},Y=(e,t)=>{if(!ve(e))return;const n=_t(e);t.forEach(o=>{((a,i,c)=>{c?a.setAttribute(i,c):a.removeAttribute(i)})(e,o,n[o])})},jn=e=>{if(!ve(e))return;const t=_t(e);e.style.backgroundImage=t.backgroundImage},Et=(e,t,n)=>{G(e,t.class_applied),j(e,ct),n&&(t.unobserve_completed&&pe(e,t),M(t.callback_applied,e,n))},$t=(e,t,n)=>{G(e,t.class_loading),j(e,He),n&&(Pe(n,1),M(t.callback_loading,e,n))},H=(e,t,n)=>{n&&e.setAttribute(t,n)},We=(e,t)=>{H(e,Te,L(e,t.data_sizes)),H(e,Se,L(e,t.data_srcset)),H(e,S,L(e,t.data_src))},Bn=(e,t)=>{Ye(e,n=>{F(n,J),We(n,t)}),F(e,J),We(e,t)},qn=(e,t)=>{F(e,ge),H(e,S,L(e,t.data_src))},Un=(e,t)=>{vt(e,n=>{F(n,ge),H(n,S,L(n,t.data_src))}),F(e,ht),H(e,it,L(e,t.data_poster)),H(e,S,L(e,t.data_src)),e.load()},Vn=(e,t)=>{F(e,bt),H(e,st,L(e,t.data_src))},Dn=(e,t,n)=>{const o=L(e,t.data_bg),a=L(e,t.data_bg_hidpi),i=at&&a?a:o;i&&(e.style.backgroundImage=`url("${i}")`,ft(e).setAttribute(S,i),$t(e,t,n))},Fn=(e,t,n)=>{const o=L(e,t.data_bg_multi),a=L(e,t.data_bg_multi_hidpi),i=at&&a?a:o;i&&(e.style.backgroundImage=i,Et(e,t,n))},Gn=(e,t,n)=>{const o=L(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(i=>`image-set(${i})`);e.style.backgroundImage=a.join(),Et(e,t,n)},zt={IMG:Bn,IFRAME:qn,VIDEO:Un,OBJECT:Vn},Zn=(e,t)=>{const n=zt[e.tagName];n&&n(e,t)},Wn=(e,t,n)=>{const o=zt[e.tagName];o&&(o(e,t),$t(e,t,n))},Kn=["IMG","IFRAME","VIDEO","OBJECT"],Xn=e=>Kn.indexOf(e.tagName)>-1,wt=(e,t)=>{!t||Rn(t)||Pn(t)||M(e.callback_finish,t)},Ke=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},Jn=(e,t,n)=>{e.removeEventListener(t,n)},je=e=>!!e.llEvLisnrs,Qn=(e,t,n)=>{je(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";Ke(e,o,t),Ke(e,"error",n)},Ce=e=>{if(!je(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];Jn(e,n,o)}delete e.llEvLisnrs},Lt=(e,t,n)=>{Tn(e),Pe(n,-1),Mn(n),I(e,t.class_loading),t.unobserve_completed&&pe(e,n)},eo=(e,t,n,o)=>{const a=Re(t);Lt(t,n,o),G(t,n.class_loaded),j(t,lt),M(n.callback_loaded,t,o),a||wt(n,o)},to=(e,t,n,o)=>{const a=Re(t);Lt(t,n,o),G(t,n.class_error),j(t,Ne),M(n.callback_error,t,o),n.restore_on_error&&Y(t,J),a||wt(n,o)},ke=(e,t,n)=>{const o=ft(e)||e;je(o)||Qn(o,a=>{eo(0,e,t,n),Ce(o)},a=>{to(0,e,t,n),Ce(o)})},Ae=(e,t,n)=>{Xn(e)?((o,a,i)=>{ke(o,a,i),Wn(o,a,i)})(e,t,n):((o,a,i)=>{Sn(o),ke(o,a,i),Yn(o),Dn(o,a,i),Fn(o,a,i),Gn(o,a,i)})(e,t,n)},no=(e,t,n)=>{e.setAttribute("loading","lazy"),ke(e,t,n),Zn(e,t),j(e,dt)},Xe=e=>{e.removeAttribute(S),e.removeAttribute(Se),e.removeAttribute(Te)},oo=e=>{Ye(e,t=>{Xe(t)}),Xe(e)},Ct=e=>{Ye(e,t=>{Y(t,J)}),Y(e,J)},ao=e=>{vt(e,t=>{Y(t,ge)}),Y(e,ht),e.load()},ro=e=>{Y(e,ge)},io=e=>{Y(e,bt)},so={IMG:Ct,IFRAME:ro,VIDEO:ao,OBJECT:io},lo=(e,t)=>{(n=>{const o=so[n.tagName];o?o(n):jn(n)})(e),((n,o)=>{Me(n)||Re(n)||(I(n,o.class_entered),I(n,o.class_exited),I(n,o.class_applied),I(n,o.class_loading),I(n,o.class_loaded),I(n,o.class_error))})(e,t),fe(e),yt(e)},co=(e,t,n,o)=>{n.cancel_on_exit&&An(e)&&e.tagName==="IMG"&&(Ce(e),oo(e),Ct(e),I(e,n.class_loading),Pe(o,-1),fe(e),M(n.callback_cancel,e,t,o))},mo=(e,t,n,o)=>{const a=On(e);j(e,Cn),G(e,n.class_entered),I(e,n.class_exited),Nn(e,n,o),M(n.callback_enter,e,t,o),a||Ae(e,n,o)},uo=(e,t,n,o)=>{Me(e)||(G(e,n.class_exited),co(e,t,n,o),M(n.callback_exit,e,t,o))},fo=["IMG","IFRAME","VIDEO"],kt=e=>e.use_native&&"loading"in HTMLImageElement.prototype,po=(e,t,n)=>{e.forEach(o=>{fo.indexOf(o.tagName)!==-1&&no(o,t,n)}),pt(n,0)},go=e=>e.isIntersecting||e.intersectionRatio>0,vo=(e,t)=>{t.forEach(n=>{e.observe(n)})},ho=(e,t)=>{Hn(e),vo(e,t)},bo=(e,t)=>{kt(e)||(t._observer=new IntersectionObserver(n=>{((o,a,i)=>{o.forEach(c=>go(c)?mo(c.target,c,a,i):uo(c.target,c,a,i))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},At=e=>Array.prototype.slice.call(e),me=e=>e.container.querySelectorAll(e.elements_selector),_o=e=>At(e).filter(Me),yo=e=>xn(e),Eo=e=>At(e).filter(yo),Je=(e,t)=>_o(e||me(t)),$o=(e,t)=>{Eo(me(e)).forEach(n=>{I(n,e.class_error),fe(n)}),t.update()},zo=(e,t)=>{N&&(t._onlineHandler=()=>{$o(e,t)},window.addEventListener("online",t._onlineHandler))},wo=e=>{N&&window.removeEventListener("online",e._onlineHandler)},K=function(e,t){const n=rt(e);this._settings=n,this.loadingCount=0,bo(n,this),zo(n,this),this.update(t)};K.prototype={update:function(e){const t=this._settings,n=Je(e,t);pt(this,n.length),ot?this.loadAll(n):kt(t)?po(n,t,this):ho(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),wo(this),me(this._settings).forEach(e=>{yt(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;Je(e,t).forEach(n=>{pe(n,this),Ae(n,t,this)})},restoreAll:function(){const e=this._settings;me(e).forEach(t=>{lo(t,e)})}},K.load=(e,t)=>{const n=rt(t);Ae(e,n)},K.resetStatus=e=>{fe(e)},N&&Ln(K,window.lazyLoadOptions);function Lo(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new K({elements_selector:".lazy",...e})}function Co(){const e=Q();e.value.vanillaLazyload.enable&&ue(()=>{Lo(e.value.vanillaLazyload)})}const ko={key:0,text:"center"},Ao=["href"],xo={m:"y-4",class:"end flex justify-center items-center"},Io={p:"x-4",font:"bold",class:"whitespace-nowrap"},Oo=ee({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=Oe(),o=Zt();return et(()=>{fn(o.value)}),ue(()=>{se()}),Wt(()=>{se()}),t.frontmatter.aplayer&&gn(),t.frontmatter.codepen&&vn(),tn(),zn(),en(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&dn(),Co(),(a,i)=>a.$slots.default?(x(),D("article",{key:0,class:Le(a.frontmatter.markdownClass||"markdown-body")},[y(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:i[0]||(i[0]=(...c)=>h(se)&&h(se)(...c))}),a.frontmatter.url?(x(),D("div",ko,[_("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},P(h(n)("post.view_link")),9,Ao)])):k("v-if",!0),a.frontmatter.end!==void 0?y(a.$slots,"end",{key:1},()=>[_("div",xo,[i[1]||(i[1]=_("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1)),_("span",Io,P(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),i[2]||(i[2]=_("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1))])]):k("v-if",!0)],2)):k("v-if",!0)}}),So={key:0,class:"yun-time-warning",op:"80"},To=ee({__name:"YunMdTimeWarning",setup(e){const t=xe(),{t:n,locale:o}=Oe(),a=O(()=>De(t.value.updated||t.value.date).locale(o.value)),i=O(()=>a.value.fromNow()),c=O(()=>{const m=De().valueOf()-a.value.valueOf();return typeof t.value.time_warning=="number"?m>t.value.time_warning:t.value.time_warning});return(m,g)=>c.value?(x(),D("blockquote",So,P(h(n)("post.time_warning",{ago:i.value})),1)):k("v-if",!0)}}),Ho={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},No={font:"black",flex:"","items-center":""},Mo={op:"90","mt-1":""},Ro=ee({__name:"YunAiExcerpt",setup(e){const t=xe(),{t:n}=Oe();return(o,a)=>(x(),D("div",Ho,[_("div",No,[a[0]||(a[0]=_("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1)),_("div",null,P(h(n)("excerpt.ai")),1)]),_("div",Mo,P(h(t).excerpt),1)]))}}),Po={class:"yun-main lt-md:w-full",flex:"~ center"},Yo={class:"mt-8 mb-4"},jo={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Ko=ee({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=Bt(),o=Q(),{styles:a,icon:i,color:c}=Qt(t.frontmatter.type),m=qt(O(()=>t.frontmatter)),g=O(()=>t.frontmatter.aside!==!1),w=tt(),he=Ft();return Kt(()=>{w.hash&&setTimeout(()=>{nt(document.body,w.hash,{smooth:!0})},0)}),et(()=>{mn(he)}),(u,Be)=>{const oe=Jt,C=Ro,ae=To,be=Oo,_e=Ut,ye=$n,E=Dt,B=Vt;return x(),D("main",Po,[y(u.$slots,"main",{},()=>[_("div",{class:Le(["content w-full md:w-3xl lg:w-2xl xl:w-2xl 2xl:w-4xl",{"no-aside":!g.value}]),flex:"~ col grow",p:"lt-md:0"},[W(_e,{cover:u.frontmatter.cover,m:"0",class:"relative",style:Xt(h(a))},{default:de(()=>[_("div",Yo,[y(u.$slots,"main-header",{},()=>[W(oe,{title:h(m),icon:u.frontmatter.icon||h(i),color:u.frontmatter.color||h(c),cover:u.frontmatter.cover,"page-title-class":u.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])])]),y(u.$slots,"main-header-after"),_("div",jo,[y(u.$slots,"main-content-before"),y(u.$slots,"main-content",{},()=>[k(" <Transition appear> "),W(be,{frontmatter:u.frontmatter},{default:de(()=>[u.frontmatter.excerpt_type==="ai"&&u.frontmatter.excerpt?(x(),X(C,{key:0})):k("v-if",!0),W(ae),y(u.$slots,"default"),y(u.$slots,"main-content-md")]),_:3},8,["frontmatter"]),k(" </Transition> ")]),y(u.$slots,"main-content-after")])]),_:3},8,["cover","style"]),y(u.$slots,"main-nav-before"),y(u.$slots,"main-nav",{},()=>[u.frontmatter.nav!==!1?(x(),X(ye,{key:0})):k("v-if",!0)]),y(u.$slots,"main-nav-after"),h(o).comment.enable&&u.frontmatter.comment!==!1?y(u.$slots,"comment",{key:0},()=>[W(E,{class:Le(u.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):k("v-if",!0),h(n).size.isLg?k("v-if",!0):(x(),X(B,{key:1,class:"mt-4"})),y(u.$slots,"main-footer-before"),y(u.$slots,"main-footer-after")],2)])])}}});export{Ko as _};
