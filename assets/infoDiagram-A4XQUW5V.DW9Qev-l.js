import{_ as e,l as o,I as i,k as n,K as p}from"./mermaid.core.LYynTnDO.js";import{p as g}from"./gitGraph-YCYPL57B.BNJ_fMJL.js";import"./framework.CXYPY74y.js";import"./chunks/dayjs.BXw2q20i.js";import"./_baseUniq.Cw6Bct29.js";import"./_basePickBy.Bu5XAXae.js";import"./clone.CXQGtOiX.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},D={parser:m,db:c,renderer:f};export{D as diagram};