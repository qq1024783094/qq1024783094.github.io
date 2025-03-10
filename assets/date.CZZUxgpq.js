import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DMKahr14.js";import"./chunks/@vueuse/motion.QKQgXNlf.js";import{l as h}from"./app.BdVgmeLu.js";import{d as z}from"./chunks/dayjs.ouEjkJjx.js";import{a9 as _,U as F,b3 as p,Z as c,be as n,_ as a,bt as f,bB as b,F as Y,bd as H,X as $,b_ as s,aM as X,b5 as D,a6 as t}from"./framework.BKJYaCLv.js";import{d as j,a as k}from"./chunks/vue-router.D7j2sAts.js";import"./YunComment.vue_vue_type_style_index_0_lang.DxHAcxn8.js";import"./index.dXt3ZyM3.js";import"./chunks/vue-i18n.D_IX1rR7.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.C4S-U0YE.js";import"./post.BizhecFZ.js";import"./chunks/pinia.S032aTqE.js";import"./chunks/nprogress.DNVyqPj2.js";const B={flex:"~ gap-2 justify-between","p-2":"","my-2":"",border:""},w={flex:"~ col gap-1",class:"text-sm w-xs"},S={class:"flex justify-between gap-2"},L={flex:"~ gap-1 items-center"},x={"text-xs":"","op-80":""},Z={class:"flex justify-between gap-2"},N={class:"flex justify-between gap-2"},T=_({__name:"TestFormatDate",props:{date:{},template:{},timezone:{},keepLocalTime:{type:Boolean}},setup(i){const l=i,d=F(()=>h(l.date,{template:l.template,timezone:l.timezone}));return(m,o)=>(p(),c("div",B,[n(m.$slots,"default"),a("div",w,[a("span",S,[o[0]||(o[0]=a("span",{op:"55","font-bold":""},"DATE:",-1)),a("span",L,[a("span",x,f(m.timezone),1),a("span",null,f(m.date),1)])]),a("span",Z,[o[1]||(o[1]=a("span",{op:"55","font-bold":""}," FORMAT: ",-1)),a("span",null,f(m.template),1)]),a("span",N,[o[2]||(o[2]=a("span",{op:"55","font-bold":""}," KeepLocalTime: ",-1)),a("span",null,f(m.keepLocalTime),1)])]),a("div",null,[o[3]||(o[3]=a("span",{op:"55",font:"bold"}," Formatted: ",-1)),a("time",null,f(d.value),1)])]))}}),O={class:"inline-flex items-center justify-center p-2"},P=_({__name:"TestFormatDateExamples",setup(i){return(l,d)=>{const m=T;return p(),c(Y,null,[a("div",null," Guess TimeZone: "+f(b(z).tz.guess()),1),(p(!0),c(Y,null,H(l.dateExamples,(o,u)=>(p(),$(m,X({key:u,class:["test-format-date",`item-${u}`],ref_for:!0},o),{default:s(()=>[a("div",O,f(u+1),1)]),_:2},1040,["class"]))),128))],64)}}}),R=j("/posts/date",async i=>JSON.parse('{"title":"Date test","description":"","frontmatter":{"title":"Date test","date":"2023-07-19 18:55:53","toc":false},"headers":[],"relativePath":"pages/posts/date.md","lastUpdated":null}'),{lazy:(i,l)=>i.name===l.name}),at={__name:"date",setup(i,{expose:l}){var M;const{data:d}=R(),m=k(),o=Object.assign(m.meta.frontmatter||{},((M=d.value)==null?void 0:M.frontmatter)||{});return m.meta.frontmatter=o,D("pageData",d.value),D("valaxy:frontmatter",o),globalThis.$frontmatter=o,l({frontmatter:{title:"Date test",date:"2023-07-19 18:55:53",toc:!1}}),(r,y)=>{const e=T,v=P,E=g;return p(),$(E,{frontmatter:b(o)},{"main-content-md":s(()=>[t(e,{format:"MMM d"}),t(e,{format:"MMM d, yyyy"}),t(e,{date:"2023-07-19T00:00:00+08:00",format:"d MMM yyyy"}),t(e,{date:"1847-05-16T00:01:15.000Z",format:"YYYY-MM-DD HH:mm:ss"}),t(e,{format:"EEEE, MMMM d, yyyy"}),t(e,{format:"EEEE, d MMMM yyyy"}),t(e,{format:"YYYYMMDD"}),t(e,{format:"yy/MM/dd"}),t(e,{format:"HH:mm:ss"}),t(e,{format:"h:mm a"}),t(e,{format:"hh 'o''clock' a, zzzz"}),t(e,{format:"K:mm a, z"}),t(e,{date:"2023-07-19T00:00:00+08:00",format:"EEEE, d MMMM YYYY"}),t(e,{date:1722589089,format:"YYYYMMDD"}),t(e,{format:"yyMMdd"}),t(e,{date:"2021/3/1 12:00",format:"YYYY/MM/DD"}),t(e,{format:"X"}),t(e,{format:"x"}),t(e,{date:"2023-07-19 10:55:53Z",format:"YYYY-MM-DD'T'HH:mm:ssXXX"}),t(e,{format:"YYYY-MM-DD'T'HH:mm:ss.SSSXXX"}),t(e,{date:1722589089,format:"T"}),t(e,{format:"R"}),t(e,{format:"do"}),y[0]||(y[0]=a("hr",null,null,-1)),t(v)]),"main-header":s(()=>[n(r.$slots,"main-header")]),"main-header-after":s(()=>[n(r.$slots,"main-header-after")]),"main-nav":s(()=>[n(r.$slots,"main-nav")]),"main-content-before":s(()=>[n(r.$slots,"main-content-before")]),"main-content":s(()=>[n(r.$slots,"main-content")]),"main-content-after":s(()=>[n(r.$slots,"main-content-after")]),"main-nav-before":s(()=>[n(r.$slots,"main-nav-before")]),"main-nav-after":s(()=>[n(r.$slots,"main-nav-after")]),comment:s(()=>[n(r.$slots,"comment")]),footer:s(()=>[n(r.$slots,"footer")]),aside:s(()=>[n(r.$slots,"aside")]),"aside-custom":s(()=>[n(r.$slots,"aside-custom")]),default:s(()=>[n(r.$slots,"default")]),_:3},8,["frontmatter"])}}};export{at as default,R as usePageData};
