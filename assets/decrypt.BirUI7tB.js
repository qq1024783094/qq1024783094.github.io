import"./chunks/@vueuse/motion.QKQgXNlf.js";import{u as d}from"./app.C9RKYA78.js";import"./chunks/dayjs.ouEjkJjx.js";function p(t){const e=new TextEncoder;return window.crypto.subtle.importKey("raw",e.encode(t),"PBKDF2",!1,["deriveBits","deriveKey"])}function l(t,e){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:1e5,hash:"SHA-256"},t,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function v(){const t=d(),{encrypt:e}=t.value,n=Uint8Array.from(Object.values(e.iv)),o=Uint8Array.from(Object.values(e.salt));return{decrypt:async(r,c)=>{if(!r)return;const i=await p(r),a=await l(i,o),s=Uint8Array.from(c,u=>u.charCodeAt(0)),y=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:n},a,s);return new TextDecoder().decode(y)}}}export{v as u};
