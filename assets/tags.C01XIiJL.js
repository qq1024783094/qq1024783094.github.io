import{o as W,T as R,e as H,f as O,a as Z,b as G,d as J,c as K,_ as Q,p as U,g as X,h as tt,i as et}from"./app.C-PR_irz.js";import{_ as nt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang.CFrbtxfU.js";import"./chunks/@vueuse/motion.CZxoZx72.js";import{u as at,a as ot}from"./animation.B_z31FyG.js";import{F as k,C as B,a4 as c,aa as S,a7 as f,ad as $,B as C,a3 as st,Z as t,a6 as n,a5 as T,ai as rt,x as a,ao as it,I as b,aj as ct,ae as lt,ac as ut}from"./framework.CXYPY74y.js";import{_ as mt}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.Bf8cW1ze.js";import{a as pt,u as _t}from"./chunks/vue-router.DZUCPFIh.js";import"./chunks/dayjs.BXw2q20i.js";import{u as ft}from"./chunks/vue-i18n.4U3Jg-xX.js";import"./chunks/nprogress.Vpn3vwKD.js";import"./chunks/pinia.CRX2zez6.js";import"./index.x8TNrC4q.js";function gt(u={primary:"#0078E7"}){const o=W(),s=new R("#999999"),r=new R(u.primary);return{tags:o,getTagStyle:i=>{const p=Array.from(o.value).map(([d,h])=>h.count),g=Math.max(...p),e=Math.min(...p),y=g-e,_=(i-e)/y;return{"--yun-tag-color":s.mix(r,_*100).toString(),fontSize:`${_*36+12}px`}}}}const yt={"inline-flex":""},dt={"inline-flex":"",text:"xs"},ht=k({__name:"YunLayoutPostTag",props:{i:{},title:{},count:{}},setup(u){const o=u,s=B();return at(s,{i:o.i||0,delay:25}),(r,m)=>(c(),S("span",{ref_key:"tagRef",ref:s,"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},[f("span",yt,"#"+$(r.title),1),f("span",dt,"["+$(r.count)+"]",1)],512))}}),vt={class:"yun-text-light",text:"center",p:"2"},xt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},At=k({__name:"tags",setup(u){H([O({"@type":"CollectionPage"})]);const o=pt(),s=_t(),r=Z(),{t:m}=ft(),i=G(),{tags:p,getTagStyle:g}=gt({primary:r.value.colors.primary}),e=C(()=>o.query.tag||""),y=J(),_=C(()=>y.postList.filter(l=>l.tags?typeof l.tags=="string"?l.tags===e.value:l.tags.includes(e.value):!1)),d=B(),{show:h}=ot(d);function V(v){s.push({query:{tag:v}}),h()}const A=K(i),Y=C(()=>Array.from(p.value).sort());return(v,l)=>{const F=Q,w=mt,E=ht,L=st("RouterView"),I=nt,N=U,j=X,q=tt,z=et;return c(),S(b,null,[t(q,null,{default:n(()=>[t(F),t(L,null,{default:n(({Component:D})=>[(c(),T(rt(D),null,{"main-header":n(()=>[t(w,{title:a(A)||a(m)("menu.tags"),icon:a(i).icon||"i-ri-tag-line",color:a(i).color,"page-title-class":a(i).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":n(()=>[t(it,{"enter-active-class":"animate-fade-in animate-duration-400",appear:""},{default:n(()=>[f("div",vt,$(a(m)("counter.tags",Y.value.length)),1)]),_:1}),f("div",xt,[(c(!0),S(b,null,ct(Y.value,([x,P],M)=>(c(),T(E,{key:x,i:M,title:x,count:P.count,style:lt(a(g)(P.count)),onClick:Ct=>V(x.toString())},null,8,["i","title","count","style","onClick"]))),128))]),t(L)]),"main-nav-before":n(()=>[e.value?(c(),T(N,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:n(()=>[t(w,{title:e.value,icon:"i-ri-hashtag"},null,8,["title"]),t(I,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:_.value},null,8,["posts"])]),_:1},512)):ut("v-if",!0)]),_:2},1024))]),_:1}),t(j)]),_:1}),t(z)],64)}}});export{At as default};
