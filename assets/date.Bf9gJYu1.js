import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Dv2fhbxa.js";import"./chunks/@vueuse/motion.CZxoZx72.js";import{l as h}from"./app.C-PR_irz.js";import{d as z}from"./chunks/dayjs.BXw2q20i.js";import{F as _,B as F,a4 as p,aa as c,a9 as n,a7 as a,ad as f,x as $,I as Y,aj as j,a5 as T,a6 as s,al as H,a0 as D,Z as t}from"./framework.CXYPY74y.js";import{d as k,a as B}from"./chunks/vue-router.DZUCPFIh.js";import"./YunComment.vue_vue_type_style_index_0_lang.DPGKsyaa.js";import"./index.C5okkQwF.js";import"./chunks/nprogress.Vpn3vwKD.js";import"./chunks/vue-i18n.4U3Jg-xX.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.Bf8cW1ze.js";import"./post.D4J7vn2d.js";import"./chunks/pinia.CRX2zez6.js";const X={flex:"~ gap-2 justify-between","p-2":"","my-2":"",border:""},w={flex:"~ col gap-1",class:"text-sm w-xs"},S={class:"flex justify-between gap-2"},x={flex:"~ gap-1 items-center"},L={"text-xs":"","op-80":""},Z={class:"flex justify-between gap-2"},N={class:"flex justify-between gap-2"},v=_({__name:"TestFormatDate",props:{date:{},template:{},timezone:{},keepLocalTime:{type:Boolean}},setup(i){const l=i,d=F(()=>h(l.date,{template:l.template,timezone:l.timezone}));return(m,o)=>(p(),c("div",X,[n(m.$slots,"default"),a("div",w,[a("span",S,[o[0]||(o[0]=a("span",{op:"55","font-bold":""},"DATE:",-1)),a("span",x,[a("span",L,f(m.timezone),1),a("span",null,f(m.date),1)])]),a("span",Z,[o[1]||(o[1]=a("span",{op:"55","font-bold":""}," FORMAT: ",-1)),a("span",null,f(m.template),1)]),a("span",N,[o[2]||(o[2]=a("span",{op:"55","font-bold":""}," KeepLocalTime: ",-1)),a("span",null,f(m.keepLocalTime),1)])]),a("div",null,[o[3]||(o[3]=a("span",{op:"55",font:"bold"}," Formatted: ",-1)),a("time",null,f(d.value),1)])]))}}),O={class:"inline-flex items-center justify-center p-2"},P=_({__name:"TestFormatDateExamples",setup(i){return(l,d)=>{const m=v;return p(),c(Y,null,[a("div",null," Guess TimeZone: "+f($(z).tz.guess()),1),(p(!0),c(Y,null,j(l.dateExamples,(o,u)=>(p(),T(m,H({key:u,class:["test-format-date",`item-${u}`],ref_for:!0},o),{default:s(()=>[a("div",O,f(u+1),1)]),_:2},1040,["class"]))),128))],64)}}}),R=k("/posts/date",async i=>JSON.parse('{"title":"Date test","description":"","frontmatter":{"title":"Date test","date":"2023-07-19 18:55:53","toc":false},"headers":[],"relativePath":"pages/posts/date.md","lastUpdated":null}'),{lazy:(i,l)=>i.name===l.name}),at={__name:"date",setup(i,{expose:l}){var M;const{data:d}=R(),m=B(),o=Object.assign(m.meta.frontmatter||{},((M=d.value)==null?void 0:M.frontmatter)||{});return m.meta.frontmatter=o,D("pageData",d.value),D("valaxy:frontmatter",o),globalThis.$frontmatter=o,l({frontmatter:{title:"Date test",date:"2023-07-19 18:55:53",toc:!1}}),(r,y)=>{const e=v,E=P,g=b;return p(),T(g,{frontmatter:$(o)},{"main-content-md":s(()=>[t(e,{format:"MMM d"}),t(e,{format:"MMM d, yyyy"}),t(e,{date:"2023-07-19T00:00:00+08:00",format:"d MMM yyyy"}),t(e,{date:"1847-05-16T00:01:15.000Z",format:"YYYY-MM-DD HH:mm:ss"}),t(e,{format:"EEEE, MMMM d, yyyy"}),t(e,{format:"EEEE, d MMMM yyyy"}),t(e,{format:"YYYYMMDD"}),t(e,{format:"yy/MM/dd"}),t(e,{format:"HH:mm:ss"}),t(e,{format:"h:mm a"}),t(e,{format:"hh 'o''clock' a, zzzz"}),t(e,{format:"K:mm a, z"}),t(e,{date:"2023-07-19T00:00:00+08:00",format:"EEEE, d MMMM YYYY"}),t(e,{date:1722589089,format:"YYYYMMDD"}),t(e,{format:"yyMMdd"}),t(e,{date:"2021/3/1 12:00",format:"YYYY/MM/DD"}),t(e,{format:"X"}),t(e,{format:"x"}),t(e,{date:"2023-07-19 10:55:53Z",format:"YYYY-MM-DD'T'HH:mm:ssXXX"}),t(e,{format:"YYYY-MM-DD'T'HH:mm:ss.SSSXXX"}),t(e,{date:1722589089,format:"T"}),t(e,{format:"R"}),t(e,{format:"do"}),y[0]||(y[0]=a("hr",null,null,-1)),t(E)]),"main-header":s(()=>[n(r.$slots,"main-header")]),"main-header-after":s(()=>[n(r.$slots,"main-header-after")]),"main-nav":s(()=>[n(r.$slots,"main-nav")]),"main-content-before":s(()=>[n(r.$slots,"main-content-before")]),"main-content":s(()=>[n(r.$slots,"main-content")]),"main-content-after":s(()=>[n(r.$slots,"main-content-after")]),"main-nav-before":s(()=>[n(r.$slots,"main-nav-before")]),"main-nav-after":s(()=>[n(r.$slots,"main-nav-after")]),comment:s(()=>[n(r.$slots,"comment")]),footer:s(()=>[n(r.$slots,"footer")]),aside:s(()=>[n(r.$slots,"aside")]),"aside-custom":s(()=>[n(r.$slots,"aside-custom")]),default:s(()=>[n(r.$slots,"default")]),_:3},8,["frontmatter"])}}};export{at as default,R as usePageData};
