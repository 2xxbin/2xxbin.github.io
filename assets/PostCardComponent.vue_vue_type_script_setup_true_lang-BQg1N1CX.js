import{d as n,b as t,g as r,i as e,t as l,F as a}from"./index-CsYqw8FY.js";const i={class:"font-bold text-2xl mb-6"},p=["innerHTML"],b=n({__name:"PostCardComponent",props:{post:{},baseUrl:{}},setup(d){return(o,s)=>(t(),r(a,null,[s[1]||(s[1]=e("hr",{class:"h-1 my-10"},null,-1)),e("div",{role:"button",tabindex:"0",onClick:s[0]||(s[0]=()=>o.$router.push(`${o.baseUrl}/${o.post.id}`))},[e("h2",i,l(o.post.title),1),e("p",{class:"leading-loose break-keep",innerHTML:o.post.description.join("<br />")},null,8,p)])],64))}});export{b as _};