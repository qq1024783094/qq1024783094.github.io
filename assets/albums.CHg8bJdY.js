import{A as Y,b as L,c as A,e as C,f as k,_ as x,h as B,i as F}from"./app.Bips8P1-.js";import"./chunks/@vueuse/motion.QKQgXNlf.js";import{o as P}from"./index.BZMbDEPH.js";import{a9 as m,b3 as s,X as i,b_ as r,_ as c,bB as o,bt as b,Z as u,F as f,bd as V,U as w,bf as D,a6 as n,bh as E}from"./framework.BKJYaCLv.js";import{_ as I}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.C4S-U0YE.js";import"./chunks/dayjs.ouEjkJjx.js";import{u as N}from"./chunks/vue-i18n.D_IX1rR7.js";import"./chunks/vue-router.CPlbVIsw.js";import"./chunks/pinia.S032aTqE.js";import"./chunks/nprogress.DNVyqPj2.js";import"./animation.CynHjTJD.js";const R=["title"],S=["src","alt","on-error"],T={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex-center"},W=m({__name:"YunAlbum",props:{album:{}},setup(_){return(t,e)=>{const a=Y;return s(),i(a,{class:"yun-album-list-item",to:t.album.url},{default:r(()=>[c("figure",{class:"m-10",flex:"~ col",title:t.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":o(P)},null,40,S),c("figcaption",T,b(t.album.caption),1)],8,R)]),_:1},8,["to"])}}}),z={class:"yun-album-list mb-4"},H=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(t,e)=>{const a=W;return s(),u("div",z,[(s(!0),u(f,null,V(t.albums,l=>(s(),i(a,{key:l.url,album:l},null,8,["album"]))),128))])}}}),O={text:"center",class:"yun-text-light",p:"2"},ot=m({__name:"albums",setup(_){const{t}=N(),e=L(),a=A(e);C([k({"@type":"CollectionPage"})]);const l=w(()=>e.value.albums||[]);return(U,X)=>{const d=x,g=I,h=H,p=D("RouterView"),y=B,v=F;return s(),u(f,null,[n(y,null,{default:r(()=>[n(d),n(p,null,{default:r(({Component:$})=>[(s(),i(E($),null,{"main-header":r(()=>[n(g,{title:o(a)||o(t)("title.album"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color,"page-title-class":o(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":r(()=>[c("div",O,b(o(t)("counter.albums",l.value.length)),1),n(h,{albums:l.value},null,8,["albums"]),n(p)]),_:2},1024))]),_:1})]),_:1}),n(v)],64)}}});export{ot as default};
