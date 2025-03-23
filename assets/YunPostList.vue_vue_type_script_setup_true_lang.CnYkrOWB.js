import"./chunks/@vueuse/motion.QKQgXNlf.js";import{A as L,o as N,d as B,u as j}from"./app.Cz9T16cH.js";import"./chunks/dayjs.ouEjkJjx.js";import{a as R}from"./chunks/vue-router.DHRBmsxx.js";import{U as i,a9 as T,bf as M,b3 as t,Z as a,bB as o,X as b,b_ as x,_ as f,Y as l,F as C,bd as S,a5 as V,bt as z,aO as k,c6 as A,bb as Y,a6 as $,aQ as E}from"./framework.BKJYaCLv.js";import{b as F,_ as H,a as I}from"./YunPostMeta.vue_vue_type_script_setup_true_lang.C07xFEGH.js";import{u as D}from"./post.BUeGky1M.js";import{u as G}from"./chunks/vue-i18n.D_IX1rR7.js";function O(d){const m=R(),s=i(()=>Number.parseInt(m.params.page||"1")),n=i(()=>Math.ceil(d.total/d.pageSize)),_=i(()=>s.value===1||s.value===n.value?3:2);function h(r){return r===1||r===n.value?!0:r>s.value-_.value&&r<s.value+_.value}function c(r){return r===1?"/":`/page/${r}`}const v=i(()=>c(s.value-1)),e=i(()=>c(s.value+1)),p=i(()=>s.value>1),w=i(()=>s.value<n.value);return{curPage:s,totalPages:n,showPage:h,surLen:_,getTo:c,prevTo:v,nextTo:e,showPrev:p,showNext:w}}const Q={class:"pagination"},U=T({__name:"YunPagination",props:{total:{},pageSize:{}},setup(d,{expose:m}){const s=d,{curPage:n,totalPages:_,showPage:h,getTo:c,surLen:v,prevTo:e,nextTo:p,showPrev:w,showNext:r}=O({total:s.total,pageSize:s.pageSize});return m({curPage:n}),(P,g)=>{const y=M("RouterLink");return t(),a("nav",Q,[o(w)?(t(),b(y,{key:0,class:"page-number",to:o(e),"aria-label":"prev"},{default:x(()=>g[0]||(g[0]=[f("div",{"i-ri-arrow-left-s-line":""},null,-1)])),_:1},8,["to"])):l("v-if",!0),(t(!0),a(C,null,S(o(_),u=>(t(),a(C,null,[o(h)(u)?(t(),b(y,{key:u,class:k(["page-number",o(n)===u&&"active"]),to:o(c)(u)},{default:x(()=>[V(z(u),1)]),_:2},1032,["class","to"])):u===o(n)-o(v)?(t(),a("span",{key:`prev-space-${u}`,class:"space",disabled:""}," ... ")):u===o(n)+o(v)?(t(),a("span",{key:`next-space-${u}`,class:"space",disabled:""}," ... ")):l("v-if",!0)],64))),256)),o(r)?(t(),b(y,{key:1,class:"page-number",to:o(p),"aria-label":"next"},{default:x(()=>g[1]||(g[1]=[f("div",{"i-ri-arrow-right-s-line":""},null,-1)])),_:1},8,["to"])):l("v-if",!0)])}}}),X={},Z={w:"full",h:"10",class:"absolute bottom-0 bg-gradient-to-t from-$va-c-bg-light to-transparent z-1"};function q(d,m){return t(),a("div",Z)}const J=A(X,[["render",q]]),K={class:"flex flex-1 of-hidden justify-start items-start post-card-info",w:"full"},W=["src","alt"],ee={class:"flex-center title text-2xl",text:"center",font:"serif black"},te={flex:"~ grow col",w:"full",justify:"center",items:"center"},se={key:0,py:"1"},oe=["innerHTML"],ae={key:2,m:"b-5"},ne=["href"],re={w:"full",class:"yun-card-actions flex justify-between","min-h":"10",text:"sm"},le={class:"post-categories inline-flex",flex:"wrap 1",items:"center"},ie=T({__name:"YunPostCard",props:{post:{}},setup(d){const m=d,{t:s}=G(),{icon:n,styles:_,color:h}=D(m.post.type),c=Y("bg-gradient-to-r gradient-text from-$va-c-primary to-$va-c-primary-lighter"),v=i(()=>h?"":m.post.postTitleClass||c.value);return(e,p)=>{const w=L,r=F,P=J,g=H,y=I,u=N;return t(),b(u,{class:k(["w-full",e.post.cover?"post-card-image":"post-card"]),m:"auto",overflow:"hidden",style:E(o(_))},{default:x(()=>[f("div",K,[e.post.cover?(t(),a("img",{key:0,src:e.post.cover,alt:o(s)("post.cover"),width:"320",height:"180",w:"40%",h:"54",class:"cover object-cover object-center md:shadow",loading:"lazy"},null,8,W)):l("v-if",!0),f("div",{class:k(["flex flex-col items-center relative",e.post.cover&&"h-54"]),w:"full"},[$(w,{class:k(["post-title-link cursor-pointer",v.value]),to:e.post.path||"",m:"t-3"},{default:x(()=>[f("div",ee,[e.post.type?(t(),a("div",{key:0,class:k(["inline-flex",o(n)]),m:"r-1"},null,2)):l("v-if",!0),f("span",null,z(e.post.title),1)])]),_:1},8,["to","class"]),$(r,{frontmatter:e.post},null,8,["frontmatter"]),f("div",te,[e.post.excerpt_type==="text"?(t(),a("div",se)):l("v-if",!0),e.post.excerpt?(t(),a("div",{key:1,class:"markdown-body",op:"90",text:"left",w:"full",p:"x-6 lt-sm:4 y-2",innerHTML:e.post.excerpt},null,8,oe)):(t(),a("div",ae))]),l(' <div m="b-5" /> '),e.post.excerpt?(t(),b(P,{key:0})):l("v-if",!0),e.post.url?(t(),a("a",{key:1,href:e.post.url,class:"post-link-btn shadow hover:shadow-md z-2",rounded:"",target:"_blank",m:"b-4"},z(o(s)("post.view_link")),9,ne)):l("v-if",!0)],2)]),l(" always show "),f("div",re,[f("div",le,[$(g,{m:"l-1",categories:e.post.categories},null,8,["categories"])]),e.post.tags?(t(),b(y,{key:0,m:"1",tags:e.post.tags},null,8,["tags"])):l("v-if",!0)])]),_:1},8,["class","style"])}}}),ce={flex:"~ col",class:"yun-post-list gap-4",w:"full",p:"x-4 lt-sm:0"},ue={key:0,py2:"",op50:"","text-center":""},ye=T({__name:"YunPostList",props:{type:{},posts:{}},setup(d){const m=d,s=Y(),n=i(()=>{var p;return((p=s.value)==null?void 0:p.curPage)||1}),_=B(),h=j(),c=i(()=>h.value.pageSize),v=i(()=>(m.posts||_.postList).filter(p=>!p.hide)),e=i(()=>v.value.slice((n.value-1)*c.value,n.value*c.value));return(p,w)=>{const r=ie,P=U;return t(),a(C,null,[f("div",ce,[e.value.length?l("v-if",!0):(t(),a("div",ue," 博主还什么都没写哦～ ")),(t(!0),a(C,null,S(e.value,(g,y)=>(t(),b(r,{key:y,post:g},null,8,["post"]))),128))]),$(P,{ref_key:"paginationRef",ref:s,class:"mt-5",total:v.value.length,"page-size":c.value},null,8,["total","page-size"])],64)}}});export{ye as _};
