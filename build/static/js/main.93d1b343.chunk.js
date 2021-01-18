(this["webpackJsonpcountry-app"]=this["webpackJsonpcountry-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(16),r=c.n(i),l=(c(23),c(24),c(4)),j=(c(25),c.p+"static/media/sun.f681ac14.svg"),o=c.p+"static/media/moon.054f2092.svg",d=Object(s.createContext)(),b=function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),a=c[0],i=c[1];return Object(n.jsx)(d.Provider,{value:[a,i],children:e.children})};function u(){var e=Object(s.useContext)(d),t=Object(l.a)(e,2),c=t[0],a=t[1];return function(){if(document.querySelector(".App")){var e=document.querySelector(".App");c?(e.classList.remove("dark-bg"),e.classList.add("light-bg")):(e.classList.remove("light-bg"),e.classList.add("dark-bg"))}}(),Object(n.jsx)("header",{className:c?"light":"dark",children:Object(n.jsxs)("div",{className:"header-container",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("h3",{children:"Where in the world?"})}),Object(n.jsxs)("div",{onClick:function(){a(!c)},className:"mode",children:[Object(n.jsx)("span",{children:c?"Dark Mode":"Light Mode"}),Object(n.jsx)("img",{className:"icon sun",src:c?o:j,alt:""})]})]})})}var h=c(9);function O(e){var t=Object(s.useState)(!1),c=Object(l.a)(t,2),a=c[0],i=c[1],r=Object(s.useContext)(d),j=Object(l.a)(r,2),o=j[0];j[1];Object(s.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);var b="",u=e.filter;e.query&&e.query.toLowerCase();return a&&"all"!==u?b=a.filter((function(e){return e.region===u})):a&&"all"===u&&(b=a),e.query&&(b=b.filter((function(t){return t.name.toLowerCase().includes(e.query)}))),Object(n.jsx)("div",{className:"cards-section",children:Object(n.jsx)("div",{className:"cards-container",children:a&&b.map((function(e){return Object(n.jsx)(h.b,{to:"/".concat(e.alpha3Code),children:Object(n.jsxs)("div",{id:e.alpha3Code,onClick:function(){},className:o?"single-card light":"single-card dark",children:[Object(n.jsx)("img",{src:e.flag,alt:"flag"}),Object(n.jsxs)("div",{className:"card-text",children:[Object(n.jsx)("h3",{children:e.name}),Object(n.jsxs)("p",{children:["Population: ",Object(n.jsx)("span",{children:e.population})]}),Object(n.jsxs)("p",{children:["Region: ",Object(n.jsx)("span",{children:e.region})]}),Object(n.jsxs)("p",{children:["Capital ",Object(n.jsx)("span",{children:e.capital})]})]})]},e.alpha3Code)},e.alpha3Code)}))})})}var x=c.p+"static/media/loupe.4378a9c5.svg";c(31);function p(){var e=Object(s.useContext)(d),t=Object(l.a)(e,2),c=t[0],a=(t[1],Object(s.useState)("all")),i=Object(l.a)(a,2),r=i[0],j=i[1],o=Object(s.useState)(""),b=Object(l.a)(o,2),u=b[0],h=b[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"search-box",children:[Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{onChange:function(e){h(e.target.value)},value:u,className:c?"light":"dark",type:"text",placeholder:"Select Country"}),Object(n.jsx)("img",{className:"icon",src:x,alt:""})]}),Object(n.jsx)("div",{className:"filter-box",children:Object(n.jsx)("form",{children:Object(n.jsxs)("select",{value:r,onChange:function(e){!function(e){j(e.target.value)}(e)},className:c?"custom-select light":"custom-select dark",id:"regions",name:"regions",children:[Object(n.jsx)("option",{className:"custom-option",value:"all",children:"All"}),Object(n.jsx)("option",{value:"Africa",children:"Africa"}),Object(n.jsx)("option",{value:"Americas",children:"America"}),Object(n.jsx)("option",{value:"Asia",children:"Asia"}),Object(n.jsx)("option",{value:"Europe",children:"Europe"}),Object(n.jsx)("option",{value:"Oceania",children:"Oceania"})]})})})]}),Object(n.jsx)(O,{filter:r,query:u.toLocaleLowerCase()})]})}var m=c(2),f=c.p+"static/media/arrow.2d863411.svg";function g(e){var t=e.match,c=Object(s.useContext)(d),a=Object(l.a)(c,2),i=a[0],r=(a[1],t.params.country),j="https://restcountries.eu/rest/v2/alpha/".concat(r),o=Object(s.useState)({}),b=Object(l.a)(o,2),u=b[0],O=b[1];Object(s.useEffect)((function(){fetch(j).then((function(e){return e.json()})).then((function(e){return O(e)}))}),[]);return u?Object(n.jsxs)("div",{className:i?"single-card-page light":"single-card-page dark",children:[Object(n.jsxs)("div",{className:"left-container",children:[Object(n.jsxs)(h.b,{to:"/",children:[" ",Object(n.jsxs)("div",{className:i?"go-back light":"go-back dark",children:["Back",Object(n.jsx)("img",{className:"icon arrow",src:f,alt:""})]})," "]}),Object(n.jsx)("img",{src:u.flag,alt:"flag-image"})]}),Object(n.jsxs)("div",{className:"right-container",children:[Object(n.jsxs)("div",{className:"info1",children:[Object(n.jsx)("h1",{children:u.name}),Object(n.jsxs)("p",{children:["Native name: ",Object(n.jsx)("span",{children:u.nativeName})]}),Object(n.jsxs)("p",{children:["Population: ",Object(n.jsx)("span",{children:u.population})]}),Object(n.jsxs)("p",{children:["Region: ",Object(n.jsx)("span",{children:u.region})]}),Object(n.jsxs)("p",{children:["Sub Region: ",Object(n.jsx)("span",{children:u.subregion})]}),Object(n.jsxs)("p",{children:["Capital ",Object(n.jsx)("span",{children:u.capital})]})]}),Object(n.jsx)("div",{className:"info2",children:Object(n.jsxs)("p",{children:["Borders: ",Object(n.jsx)("br",{})," ",Object(n.jsx)("span",{children:u.borders+" "})]})})]})]}):Object(n.jsx)("div",{children:"Loading"})}c(32);function v(e){e.filter,e.query;return Object(n.jsx)("div",{children:Object(n.jsx)(p,{})})}var N=function(){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)(h.a,{children:Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{path:"/",exact:!0,component:v}),Object(n.jsx)(m.a,{path:"/:country",component:g})]})})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),C()}},[[33,1,2]]]);
//# sourceMappingURL=main.93d1b343.chunk.js.map