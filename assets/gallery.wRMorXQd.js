const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery.5txhwfS-.js","assets/framework.CXYPY74y.js","assets/app.D82Kdg7i.js","assets/chunks/vue-router.DSVtBz9U.js","assets/chunks/@vueuse/motion.CZxoZx72.js","assets/chunks/dayjs.BXw2q20i.js","assets/chunks/nprogress.Vpn3vwKD.js","assets/chunks/vue-i18n.4U3Jg-xX.js","assets/chunks/pinia.CRX2zez6.js","assets/app.D4v33-fc.css","assets/decrypt.CWlFotAt.js","assets/YunPageHeader.vue_vue_type_script_setup_true_lang.Bf8cW1ze.js"])))=>i.map(i=>d[i]);
import{F as C,a3 as k,a4 as a,a5 as f,C as b,B as w,aa as h,a7 as n,af as Y,ag as A,ab as T,ah as B,Z as i,am as L,an as O,a6 as y,ai as S,x as t,ad as F,I,a1 as N}from"./framework.CXYPY74y.js";import{b as j,c as z,e as K,f as M,m as W,n as H,_ as J,h as U,i as Z}from"./app.D82Kdg7i.js";import"./chunks/@vueuse/motion.CZxoZx72.js";import{u as q}from"./decrypt.CWlFotAt.js";import"./chunks/dayjs.BXw2q20i.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.Bf8cW1ze.js";import{u as X,a as ee}from"./chunks/vue-router.DSVtBz9U.js";import{u as te}from"./chunks/vue-i18n.4U3Jg-xX.js";const oe=C({__name:"YunGallery",props:{photos:{}},setup(v){return(u,r)=>{const e=k("VAGallery");return a(),f(e,{photos:u.photos},null,8,["photos"])}}}),ne={key:0,"w-full":"","pt-14":"","pb-10":""},ae={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},se={key:1},re=C({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(v,{expose:u}){const r=v,e=b(""),l=b(""),p=b(!1),{decrypt:m}=q();async function g(){const c=r.encryptedPhotos;if(c)try{const o=await m(e.value,c);l.value=o||""}catch(o){p.value=!0,console.error(o)}}function x(){l.value="",e.value=""}const _=w(()=>JSON.parse(l.value||"[]")||[]);return u({photos:_}),(c,o)=>{const d=oe;return a(),h("div",null,[l.value?(a(),h("div",se,[i(d,{photos:_.value},null,8,["photos"]),n("div",{"w-full":"","text-center":"","mt-8":""},[n("button",{"m-auto":"",class:"btn","font-bold":"",onClick:x}," Encrypt Again ")])])):(a(),h("div",ne,[n("div",ae,[Y(n("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.value=s),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:T(p.value&&"border-red"),onInput:o[1]||(o[1]=s=>p.value=!1),onKeyup:B(g,["enter"])},null,34),[[A,e.value]]),n("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:g})])]))])}}}),le={text:"center",class:"yun-text-light",p:"2"},ce={class:"page-action",text:"center"},ie=["title"],ue=C({__name:"gallery",setup(v){const u=X(),{t:r}=te(),e=j(),l=z(e);K([M({"@type":"CollectionPage"})]);const p=ee(),m=w(()=>p.meta.frontmatter.photos||[]),x=W().value.addons["valaxy-addon-lightgallery"]?L(()=>N(()=>import("./YunGallery.5txhwfS-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))):()=>null,_=H(),c=O("galleryRef"),o=w(()=>{var d;return m.value.length||((d=c.value)==null?void 0:d.photos.length)});return(d,s)=>{const P=J,R=Q,V=re,$=k("RouterView"),D=U,E=Z;return a(),h(I,null,[i(D,null,{default:y(()=>[i(P),i($,null,{default:y(({Component:G})=>[(a(),f(S(G),null,{"main-header":y(()=>[i(R,{title:t(l)||t(r)("title.gallery"),icon:t(e).icon||"i-ri-gallery-line",color:t(e).color,"page-title-class":t(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),default:y(()=>[n("div",le,F(t(r)("counter.photos",o.value||0)),1),n("div",ce,[n("a",{class:"yun-icon-btn",title:t(r)("accessibility.back"),onClick:s[0]||(s[0]=()=>t(u).back())},s[1]||(s[1]=[n("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,ie)]),t(_)?(a(),f(V,{key:0,ref_key:"galleryRef",ref:c,"encrypted-photos":t(_)},null,8,["encrypted-photos"])):(a(),f(t(x),{key:1,photos:m.value},null,8,["photos"]))]),_:2},1024))]),_:1})]),_:1}),i(E)],64)}}}),ge=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));export{oe as _,ge as g};