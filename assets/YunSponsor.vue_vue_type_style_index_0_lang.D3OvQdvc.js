import"./chunks/@vueuse/motion.CZxoZx72.js";import{u as m}from"./app.C-PR_irz.js";import"./chunks/dayjs.BXw2q20i.js";import{F as f,C as _,B as x,a4 as n,aa as r,a7 as s,x as i,ad as v,ac as y,I as h,aj as g,ab as c,ae as b}from"./framework.CXYPY74y.js";import{u as C}from"./chunks/vue-i18n.4U3Jg-xX.js";const k={class:"yun-sponsor-container flex-center flex-col"},w=["title"],B={key:0,class:"sponsor-description",mb:"4",text:"sm"},S={class:"flex justify-around"},z=["href"],j=["src","title"],D=f({__name:"YunSponsor",setup(q){const{t:d}=C(),o=m(),a=_(!1),u=x(()=>{var l;return((l=o.value.sponsor)==null?void 0:l.title)??d("reward.donate")});return(l,t)=>(n(),r("div",k,[s("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:u.value,text:"red-400",onClick:t[0]||(t[0]=e=>a.value=!a.value)},t[1]||(t[1]=[s("div",{class:"mt-2px","i-ri-heart-fill":""},null,-1)]),8,w),s("div",{class:c(["qrcode-container qrcode flex-center flex-col",a.value&&"show"]),m:"y-4"},[i(o).sponsor.description?(n(),r("div",B,v(i(o).sponsor.description),1)):y("v-if",!0),s("div",S,[(n(!0),r(h,null,g(i(o).sponsor.methods,(e,p)=>(n(),r("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:e.url,target:"_blank",style:b(`color:${e.color}`)},[s("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:e.url,title:e.name},null,8,j),s("div",{text:"xl",m:"2",class:c(e.icon)},null,2)],12,z))),128))])],2)]))}});export{D as _};
