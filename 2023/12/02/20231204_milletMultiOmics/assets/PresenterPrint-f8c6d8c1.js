import{d as u,u as _,a as d,c as m,b as p,r as h,e as s,f as t,t as a,g as r,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as N,m as k,_ as P}from"./index-bfd9f28d.js";import{N as C}from"./NoteDisplay-b550c91d.js";const w={class:"m-4"},B={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},E={class:"text-lg"},S={class:"font-bold flex gap-2"},T={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),D={key:0,class:"border-gray-400/50 mb-8"},F=u({__name:"PresenterPrint",setup(H){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),d({title:`Notes - ${m.title}`});const i=p(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),s("div",{id:"page-root",style:v(r(x))},[t("div",w,[t("div",B,[t("h1",L,a(r(m).title),1),t("div",V,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,g(i.value,(e,c)=>(n(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",E,[t("div",S,[t("div",T,a(e==null?void 0:e.no)+"/"+a(r(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),A])]),N(C,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),s("hr",D)):k("v-if",!0)]))),128))])],4))}}),z=P(F,[["__file","E:/Literature/多组学/2022MP_小米多组学/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{z as default};
