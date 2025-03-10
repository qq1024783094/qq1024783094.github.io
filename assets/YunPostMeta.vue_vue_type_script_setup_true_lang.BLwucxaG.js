import"./chunks/@vueuse/motion.QKQgXNlf.js";import{a9 as f,bf as k,b3 as t,Z as o,F as b,bd as w,X as c,b_ as _,_ as e,bt as u,U as x,bB as r,Y as l,aO as C,a6 as g}from"./framework.BKJYaCLv.js";import{p as Y,l as h,B as M,u as P}from"./app.C9RKYA78.js";import{a as B}from"./chunks/vue-router.BlDkhGPC.js";import"./chunks/dayjs.ouEjkJjx.js";import{u as v}from"./chunks/vue-i18n.D_IX1rR7.js";import{f as y}from"./index.CjXaF9HI.js";const R={class:"post-tags inline-flex",items:"center",gap:"1",flex:"wrap 1",justify:"end"},lt=f({__name:"YunPostTags",props:{tags:{}},setup(m){return(n,i)=>{const a=k("RouterLink");return t(),o("div",R,[(t(!0),o(b,null,w(n.tags,(s,p)=>(t(),c(a,{key:p,to:{path:"/tags/",query:{tag:s}},class:"transition post-tag inline-flex-center text-xs border-$va-c-divider","px-2":"",h:"7","rounded-full":"",border:"",hover:"bg-blue-500 text-white"},{default:_(()=>[e("span",null,u(s),1)]),_:2},1032,["to"]))),128))])}}}),pt=f({__name:"YunPostCategories",props:{categories:{}},setup(m){return(n,i)=>{const a=k("RouterLink");return t(),c(a,{to:{path:"/categories",query:{category:Array.isArray(n.categories)?n.categories.join("/"):n.categories}},class:"transition post-category inline-flex-center text-xs border-$va-c-divider","px-2":"",h:"7",border:"","rounded-full":"",hover:"bg-blue-500 text-white"},{default:_(()=>[i[0]||(i[0]=e("div",{m:"x-1","inline-flex":"","i-ri-folder-2-line":""},null,-1)),e("span",null,u(Array.isArray(n.categories)?n.categories.join(" / "):n.categories),1)]),_:1},8,["to"])}}}),j={key:0,class:"inline-flex gap-4",text:"sm",h:"5"},A=["title"],L=["data-path"],D=["title"],T=["data-path"],z=f({__name:"YunWalineMeta",setup(m){const n=B(),i=Y(),a=x(()=>i.value.addons["valaxy-addon-waline"]),{t:s}=v();return(p,d)=>a.value&&a.value.options?(t(),o("div",j,[a.value.options.pageview?(t(),o("div",{key:0,"inline-flex":"",justify:"center",items:"center",title:r(s)("post.pageview_count")},[d[0]||(d[0]=e("div",{"inline-flex":"","i-ri-eye-line":""},null,-1)),e("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count op-80","data-path":r(n).path},null,8,L)],8,A)):l("v-if",!0),a.value.options.comment?(t(),o("div",{key:1,"inline-flex":"",justify:"center",items:"center",title:r(s)("post.comment_count")},[d[1]||(d[1]=e("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1)),e("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count op-80","data-path":r(n).path},null,8,T)],8,D)):l("v-if",!0)])):l("v-if",!0)}}),N={key:0,class:"post-time flex items-center gap-4"},S=["title"],V={class:"op-80"},W=["title"],q={class:"op-80"},F=f({__name:"YunPostDateMeta",props:{frontmatter:{}},setup(m){const{t:n}=v();return(i,a)=>i.frontmatter.date?(t(),o("div",N,[e("span",{class:"posted-time inline-flex-center gap-1",title:r(n)("post.posted")+r(y)(i.frontmatter.date)},[a[0]||(a[0]=e("div",{class:"inline-block","i-ri-calendar-line":""},null,-1)),e("time",V,u(r(h)(i.frontmatter.date)),1)],8,S),i.frontmatter.updated&&i.frontmatter.updated!==i.frontmatter.date?(t(),o("span",{key:0,class:"edited-time inline-flex-center gap-1",title:r(n)("post.edited")+r(y)(i.frontmatter.updated)},[a[1]||(a[1]=e("div",{"i-ri-calendar-2-line":""},null,-1)),e("time",q,u(r(h)(i.frontmatter.updated)),1)],8,W)):l("v-if",!0)])):l("v-if",!0)}}),E={key:0,class:"post-draft-icon",title:"draft"},I=["title"],O={key:0,"i-ri-eye-close-line":""},U={key:1,"i-ri-eye-off-line":""},X={key:2,class:"post-top-icon",color:"$va-c-warning"},Z={class:"inline-flex-center gap-4"},G={key:0,class:"inline-flex-center post-counter gap-4"},H=["title"],J={class:"op-80"},K=["title"],Q={class:"op-80"},tt=f({__name:"YunPostMeta",props:{frontmatter:{}},setup(m){const n=M(),{t:i}=v(),a=P();return(s,p)=>{const d=F,$=z;return t(),o(b,null,[s.frontmatter.draft?(t(),o("div",E,p[0]||(p[0]=[e("div",{"i-ri-draft-line":""},null,-1)]))):l("v-if",!0),s.frontmatter.hide?(t(),o("div",{key:1,class:"post-top-icon",color:"$va-c-danger",title:`hide:${s.frontmatter.hide}`},[s.frontmatter.hide==="index"?(t(),o("div",O)):(t(),o("div",U))],8,I)):l("v-if",!0),s.frontmatter.top?(t(),o("div",X,p[1]||(p[1]=[e("div",{"i-ri-pushpin-line":""},null,-1)]))):l("v-if",!0),s.frontmatter?(t(),o("div",{key:3,class:C(["post-meta gap-4",{"flex-col gap-2!":r(n).isMobile||s.frontmatter.updated}]),flex:"~ center",text:"sm"},[g(d,{frontmatter:s.frontmatter},null,8,["frontmatter"]),e("div",Z,[r(a).statistics.enable?(t(),o("div",G,[s.frontmatter.wordCount?(t(),o("span",{key:0,class:"word-count inline-flex-center gap-1",title:r(i)("statistics.word")},[p[2]||(p[2]=e("div",{class:"inline-block","i-ri-file-word-line":""},null,-1)),e("span",J,u(s.frontmatter.wordCount),1)],8,H)):l("v-if",!0),s.frontmatter.readingTime?(t(),o("span",{key:1,class:"reading-time inline-flex-center gap-1",title:r(i)("statistics.time")},[p[3]||(p[3]=e("div",{"i-ri-timer-line":""},null,-1)),e("time",Q,u(s.frontmatter.readingTime)+"m",1)],8,K)):l("v-if",!0)])):l("v-if",!0),g($)])],2)):l("v-if",!0)],64)}}}),dt=f({__name:"YunPostMeta",props:{frontmatter:{}},setup(m){return(n,i)=>(t(),c(tt,{frontmatter:n.frontmatter},{default:_(()=>[l(` <span v-if="isPost" id="busuanzi_container_page_pv">
      本文总阅读量 <span id="busuanzi_value_page_pv" /> 次
    </span> `)]),_:1},8,["frontmatter"]))}});export{pt as _,lt as a,dt as b};
