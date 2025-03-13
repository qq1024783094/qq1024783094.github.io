import{T as P,b as Y,u as B,h as S,i as T}from"./app.wLi3bVjP.js";import{_ as V}from"./YunComment.vue_vue_type_style_index_0_lang.mb4pr1ol.js";import{_ as F}from"./YunSponsor.vue_vue_type_style_index_0_lang.7AraBiAy.js";import{u as I}from"./chunks/@vueuse/motion.QKQgXNlf.js";import{a9 as h,b3 as t,Z as n,_ as s,aO as C,aQ as w,bb as L,U as b,bt as j,Y as _,F as p,bd as $,X as g,be as N,b9 as R,bB as k,a6 as v,b_ as x,a5 as z}from"./framework.BKJYaCLv.js";import{c as H}from"./index.x8TNrC4q.js";import"./chunks/dayjs.ouEjkJjx.js";import{u as M}from"./chunks/vue-i18n.D_IX1rR7.js";import"./chunks/vue-router.rbPXV7Bv.js";import"./chunks/pinia.S032aTqE.js";import"./chunks/nprogress.DNVyqPj2.js";import"./index.dXt3ZyM3.js";const U=["href"],D=h({__name:"YunProjectLinkItem",props:{item:{}},setup(f){return(e,l)=>(t(),n("a",{class:"yun-project-link-item inline-flex items-center justify-center flex-1 p-2 h-full text-white",href:e.item.url,target:"_blank",style:w({"--c-brand":e.item.color})},[s("div",{class:C(e.item.icon)},null,2)],12,U))}}),E={key:0,class:"mt-4"},J=["href"],O={text:"lg",font:"bold",m:"2"},Q=["innerHTML"],W={flex:"~ center",class:"absolute left-0 right-0 bottom-0 h-10"},X=h({__name:"YunProjectCard",props:{i:{},project:{}},setup(f){const e=f,l=L();I(l,{initial:{opacity:0,y:50},enter:{opacity:1,y:0,transition:{delay:e.i*50,type:"spring",ease:H.easeIn,damping:8,duration:400}}});const u=b(()=>{const o={color:e.project.textColor};if(e.project.color&&(typeof e.project.gradient>"u"||e.project.gradient)){const c=new P(e.project.color);o["--un-gradient-stops"]=`${c.spin(55).toHexString()}, ${e.project.color}`,o.color||(o.color=c.isDark()?"white":"black")}else o.backgroundColor=e.project.color||"rgba(255,255,255,0.9)",o.color||(o.color="black");return o}),r=b(()=>e.project.github?`https://github.com/${e.project.github}`:`https://github.com/YunYouJun/${e.project.name}`),m=b(()=>e.project.npm?`https://www.npmjs.com/package/${e.project.npm}`:""),a=b(()=>e.project.url||r.value),d=b(()=>[{url:a.value,icon:"i-ri-global-line",color:"#6eb7f9"},{url:e.project.docs,icon:"i-ri-book-line",color:"#443ed1"},{url:r.value,icon:"i-ri-github-line",color:"black"},{url:m.value,icon:"i-ri-npmjs-line",color:"red"}]);return(o,c)=>{const i=D;return t(),n("div",{ref_key:"cardRef",ref:l,flex:"~ col center",class:"m-2 w-90 transform rounded shadow-md grayscale-30",bg:"opacity-80 gradient-to-br",p:"x-2 b-12",hover:"shadow-lg grayscale-0",style:w(u.value)},[o.project.emoji?(t(),n("div",E,j(o.project.emoji),1)):_("v-if",!0),s("a",{href:a.value,target:"_blank",class:"text-unset"},[s("h2",O,j(o.project.name||"忘记叫啥了"),1)],8,J),s("small",{class:"block",p:"2",text:"center",innerHTML:o.project.desc||"说点什么好呢"},null,8,Q),s("div",W,[(t(!0),n(p,null,$(d.value,y=>(t(),n(p,{key:y.icon},[y.url?(t(),g(i,{key:0,item:y},null,8,["item"])):_("v-if",!0)],64))),128))])],4)}}}),Z={class:"w-full flex justify-center",text:"xl",font:"black",m:"b-2 t-4"},q=h({__name:"YunProjectCollection",props:{title:{},projects:{}},setup(f){return(e,l)=>{const u=X;return t(),n(p,null,[s("div",Z,j(e.title),1),(t(!0),n(p,null,$(e.projects,(r,m)=>(t(),g(u,{key:m,project:r,i:m},null,8,["project","i"]))),128))],64)}}}),A=h({__name:"YunProjectToggleButton",props:{active:{type:Boolean}},setup(f){return(e,l)=>(t(),n("button",{class:C(["bg-white-90 m-2 inline-flex items-center justify-center rounded px-2 gap-2 h-8",{"bg-blue-500 text-white":e.active,"hover:bg-$va-c-bg-soft":!e.active}])},[N(e.$slots,"default")],2))}}),G={flex:"~ col center"},K={class:"mb-3 text-2xl"},ee={flex:"~ wrap",justify:"center"},te={class:"inline-flex"},oe={class:"inline-flex"},ne={flex:"~ wrap",justify:"center"},re=h({__name:"YunProjects",setup(f){const e=Y(),{t:l}=M(),u=R(e.value.projects),r=L("all");return(m,a)=>{const d=A,o=q;return t(),n("div",G,[s("h2",K,j(k(e).title||k(l)("title.projects")),1),s("div",ee,[v(d,{active:r.value==="all",onClick:a[0]||(a[0]=c=>r.value="all")},{default:x(()=>a[1]||(a[1]=[z(" 全部 ")])),_:1},8,["active"]),(t(!0),n(p,null,$(u,(c,i)=>(t(),g(d,{key:i,active:i===r.value,onClick:y=>r.value=i},{default:x(()=>[s("span",te,j(c.emoji),1),s("span",oe,j(c.title),1)]),_:2},1032,["active","onClick"]))),128))]),s("div",ne,[(t(!0),n(p,null,$(u,(c,i)=>(t(),n(p,{key:i},[r.value==="all"||r.value===i?(t(),g(o,{key:0,title:c.title,projects:u[i].collection},null,8,["title","projects"])):_("v-if",!0)],64))),128))])])}}}),se={flex:"~ col"},be=h({__name:"projects",setup(f){const e=B(),l=Y();return(u,r)=>{const m=re,a=F,d=V,o=S,c=T;return t(),n(p,null,[v(o,null,{default:x(()=>[s("div",se,[v(m),_(" <YunLayoutLeft /> "),_(" <RouterView /> "),_(" <YunLayoutRight /> "),v(a,{class:"mt-4"}),k(e).comment.enable&&k(l).comment!==!1?(t(),g(d,{key:0,class:"max-w-4xl m-auto"})):_("v-if",!0)])]),_:1}),v(c)],64)}}});export{be as default};
