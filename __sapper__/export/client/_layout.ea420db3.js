import{S as t,i as e,s,e as a,t as n,c,a as l,j as o,d as i,b as d,f as r,g as u,u as h,v as m,h as p,w as $,k as f,x as g,p as x,q as v,y as E}from"./client.7628e46f.js";function W(t){let e,s;return{c(){e=a("h4"),s=n(t[1]),this.h()},l(a){e=c(a,"H4",{class:!0});var n=l(e);s=o(n,t[1]),n.forEach(i),this.h()},h(){d(e,"class","capitalize pb-8")},m(t,a){r(t,e,a),u(e,s)},p(t,e){2&e&&h(s,t[1])},d(t){t&&i(e)}}}function w(t){let e,s,n,l,o,h;document.title=e="\n    "+(t[1]?`${t[1]} |`:"")+" Waladocs.\n  ";let E=t[0]&&W(t);const w=t[3].default,y=m(w,t,t[2],null);return{c(){s=a("meta"),l=p(),E&&E.c(),o=p(),y&&y.c(),this.h()},l(t){const e=$('[data-svelte="svelte-1wi97xh"]',document.head);s=c(e,"META",{name:!0,content:!0}),e.forEach(i),l=f(t),E&&E.l(t),o=f(t),y&&y.l(t),this.h()},h(){d(s,"name","description"),d(s,"content",n="Walatic documentation. "+t[1])},m(t,e){u(document.head,s),r(t,l,e),E&&E.m(t,e),r(t,o,e),y&&y.m(t,e),h=!0},p(t,[a]){(!h||2&a)&&e!==(e="\n    "+(t[1]?`${t[1]} |`:"")+" Waladocs.\n  ")&&(document.title=e),(!h||2&a&&n!==(n="Walatic documentation. "+t[1]))&&d(s,"content",n),t[0]?E?E.p(t,a):(E=W(t),E.c(),E.m(o.parentNode,o)):E&&(E.d(1),E=null),y&&y.p&&4&a&&g(y,w,t,t[2],a,null,null)},i(t){h||(x(y,t),h=!0)},o(t){v(y,t),h=!1},d(t){i(s),t&&i(l),E&&E.d(t),t&&i(o),y&&y.d(t)}}}function y(t,e,s){let{segment:a=""}=e;E.set(!0);let n,c,{$$slots:l={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&s(0,a=t.segment),"$$scope"in t&&s(2,o=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&s(4,n=(a||"").replace(new RegExp("-","g")," ")),16&t.$$.dirty&&s(1,c=n.length?n.charAt(0).toUpperCase()+n.slice(1):"")},[a,c,o,l]}export default class extends t{constructor(t){super(),e(this,t,y,w,s,{segment:0})}}
