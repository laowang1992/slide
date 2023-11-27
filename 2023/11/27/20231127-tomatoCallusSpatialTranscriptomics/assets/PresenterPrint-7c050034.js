import{d as m,u as _,a as d,c,b as p,r as h,e as s,f as t,t as a,g as r,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as F,m as N,_ as D}from"./index-7852da13.js";import{N as k}from"./NoteDisplay-2a0b146b.js";const C={class:"m-4"},P={class:"mb-10"},E={class:"text-4xl font-bold mt-2"},w={class:"opacity-50"},L={class:"text-lg"},S={class:"font-bold flex gap-2"},V={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),B={key:0,class:"border-gray-400/50 mb-8"},T=m({__name:"PresenterPrint",setup(H){_(`
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
`),d({title:`Notes - ${c.title}`});const i=p(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),s("div",{id:"page-root",style:v(r(x))},[t("div",C,[t("div",P,[t("h1",E,a(r(c).title),1),t("div",w,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,g(i.value,(e,u)=>(n(),s("div",{key:u,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",S,[t("div",V,a(e==null?void 0:e.no)+"/"+a(r(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),A])]),F(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),u<i.value.length-1?(n(),s("hr",B)):N("v-if",!0)]))),128))])],4))}}),M=D(T,[["__file","E:/Literature/植物再生/2023PNAS_植物愈伤组织芽再生的空间转录组图谱/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
