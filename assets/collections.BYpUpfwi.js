import{e as d}from"./app.z2kOlZXe.js";import{r as f,e as l,M as i,N as e,O as o,a1 as t,V as k,B as h,a6 as C,R as g,P as w,F as x,Z as B,u as R}from"./framework.BDAG0DUs.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-router.EZSgtiJK.js";import"./chunks/nprogress.XLa1pfiT.js";import"./chunks/vue-i18n.C8jXiADb.js";import"./chunks/pinia.CeAIPU70.js";import"./chunks/@vueuse/motion.CcI7EDSz.js";function V(){return{collections:f([{id:"i-and-she",name:"I and She",description:"Love letters from the past"},{id:"love-and-peace",name:"爱与和平",description:"Recipes for a good life"}])}}const v=l({__name:"YunCollectionItem",props:{collection:{}},setup(s){return(n,r)=>{const a=i("RouterLink");return e(),o(a,{class:"inline-flex rounded p-4 h-50 w-40 bg-gray-100 dark:bg-dark-300 shadow",to:`/collections/${n.collection.id}`},{default:t(()=>r[0]||(r[0]=[k(" Book ")])),_:1},8,["to"])}}}),L={flex:"~ wrap",gap:"4"},E=l({__name:"collections",setup(s){const{collections:n}=V();return(r,a)=>{const p=v,u=i("RouterView"),m=d;return e(),o(m,null,{default:t(()=>[h(u,null,{default:t(({Component:_})=>[(e(),o(C(_),null,{default:t(()=>[g("div",L,[(e(!0),w(x,null,B(R(n),c=>(e(),o(p,{key:c.id,collection:c},null,8,["collection"]))),128))])]),_:2},1024))]),_:1})]),_:1})}}});export{E as default};
