import{S as e,i as n,s as t,e as l,t as a,h as o,l as s,c as r,a as c,j as i,d as u,k as m,m as p,b as d,f,g as $,o as g,u as v,p as h,q as b,r as x,H as S,af as y,L as C,M as E,_ as w,U as L,V as j,W as k,N as P}from"./client.7628e46f.js";import{C as O}from"./Code.4523955d.js";import{C as A}from"./index.802c5456.js";import"./index.7cb649bd.js";import{T as I}from"./index.9c86a623.js";import{S as T}from"./index.e7330692.js";import"./Card.74b86d5f.js";import"./index.1a3f4bbd.js";function M(e,n,t){const l=e.slice();return l[16]=n[t],l}function N(e){let n,t;return n=new A({props:{checked:e[5].includes(e[16]),class:"block my-2",color:"error",label:e[16].text}}),n.$on("change",e[8](e[16])),{c(){s(n.$$.fragment)},l(e){p(n.$$.fragment,e)},m(e,l){g(n,e,l),t=!0},p(e,t){const l={};32&t&&(l.checked=e[5].includes(e[16])),n.$set(l)},i(e){t||(h(n.$$.fragment,e),t=!0)},o(e){b(n.$$.fragment,e),t=!1},d(e){x(n,e)}}}function W(e){let n,t,a,o,s=e[7],i=[];for(let n=0;n<s.length;n+=1)i[n]=N(M(e,s,n));const m=e=>b(i[e],1,1,(()=>{i[e]=null}));return{c(){n=l("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){n=r(e,"DIV",{slot:!0,class:!0});var t=c(n);for(let e=0;e<i.length;e+=1)i[e].l(t);t.forEach(u),this.h()},h(){d(n,"slot","options"),d(n,"class","elevation-3 rounded px-2 py-4 mt-0")},m(l,s){f(l,n,s);for(let e=0;e<i.length;e+=1)i[e].m(n,null);t=!0,a||(o=S(n,"click",y(e[9])),a=!0)},p(e,t){if(416&t){let l;for(s=e[7],l=0;l<s.length;l+=1){const a=M(e,s,l);i[l]?(i[l].p(a,t),h(i[l],1)):(i[l]=N(a),i[l].c(),h(i[l],1),i[l].m(n,null))}for(C(),l=s.length;l<i.length;l+=1)m(l);E()}},i(e){if(!t){for(let e=0;e<s.length;e+=1)h(i[e]);t=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)b(i[e]);t=!1},d(e){e&&u(n),w(i,e),a=!1,o()}}}function F(e){let n,t,S,y,C,E,w,P,A,M,N,F,D,H,U,_,z,G,J,K,Q,R,X,Y,Z,ee,ne,te,le,ae,oe,se,re,ce,ie,ue,me,pe,de,fe,$e,ge,ve,he,be,xe,Se,ye,Ce,Ee,we,Le,je,ke,Pe,Oe,Ae,Ie=(e[0]||"nothing")+"",Te=(e[1]||"nothing")+"",Me=(e[2]||"nothing")+"";function Ne(n){e[11].call(null,n)}N=new T({props:{label:V,items:e[7]}}),N.$on("change",e[10]),D=new O({props:{code:'<script>\n  import { Select, Checkbox } from "smelte";\n\n  let value1 = "";\n  let value2 = "";\n  let value3 = "";\n  let value4 = "";\n\n  let showList = false;\n\n  const items = [\n    { value: 1, text: "One" },\n    { value: 2, text: "Two" },\n    { value: 3, text: "Three" },\n    { value: 4, text: "Four" },\n  ];\n\n  let selectedItems = [];\n\n  function toggle(i) {\n    return v => v.detail\n      ? selectedItems.push(i)\n      : selectedItems = selectedItems.filter(si => si !== i);\n  }\n\n  $: selectedLabel = selectedItems.map(i => i.text).join(", ");\n\n  const label = "A select";\n<\/script>\n\n<p>\n  One may bind to a select via\n  <span class="code-inline">on:change</span>\n  event.\n</p>\n<small>Selected: {value1 || \'nothing\'}</small>\n<Select {label} {items} on:change={v => (value1 = v.detail)} />\n\n<p>\n  Or through binding\n  <span class="code-inline">on:value</span>\n  .\n</p>\n<small>Selected: {value2 || \'nothing\'}</small>\n<Select color="success" bind:value={value2} {label} {items} />\n\n<p>Select may be outlined.</p>\n<Select bind:value={value2} outlined {label} {items} />\n\n<p>Select may even be an autocomplete search component.</p>\n<small>Selected: {value3 || \'nothing\'}</small>\n<Select bind:value={value3} outlined autocomplete {label} {items} />\n\n<p>Custom options slot</p>\n\n<Select\n  {selectedLabel}\n  outlined\n  color="red"\n  inputClasses={i => i.replace(\'rounded-t\', \'rounded-full\')}\n  appendClasses={i => i.replace(\'text-gray-700\', \'text-red-700\')}\n  label="Categories"\n  {items}\n>\n  <div slot="options" class="elevation-3 rounded px-2 py-4 mt-0" on:click|stopPropagation>\n      {#each items as item}\n        <Checkbox\n          value={selectedItems.includes(item)}\n          class="block my-2"\n          color="red"\n          label={item.text}\n          on:change={toggle(item)}\n        />\n      {/each}\n  </div>\n</Select>'}});let We={color:"success",label:V,items:e[7]};function Fe(n){e[12].call(null,n)}void 0!==e[1]&&(We.value=e[1]),Z=new T({props:We}),L.push((()=>j(Z,"value",Ne)));let Ve={outlined:!0,label:V,items:e[7]};function qe(n){e[13].call(null,n)}void 0!==e[1]&&(Ve.value=e[1]),oe=new T({props:Ve}),L.push((()=>j(oe,"value",Fe)));let Be={outlined:!0,autocomplete:!0,label:V,items:e[7]};function De(n){e[14].call(null,n)}void 0!==e[2]&&(Be.value=e[2]),$e=new T({props:Be}),L.push((()=>j($e,"value",qe))),Se=new T({props:{selectedLabel:e[6],outlined:!0,color:"error",inputClasses:q,appendClasses:B,label:"Categories",items:e[7],$$slots:{options:[W]},$$scope:{ctx:e}}});let He={label:"Error"};function Ue(n){e[15].call(null,n)}void 0!==e[4]&&(He.value=e[4]),Le=new I({props:He}),L.push((()=>j(Le,"value",De)));let _e={outlined:!0,autocomplete:!0,label:V,items:e[7],error:e[4]};return void 0!==e[3]&&(_e.value=e[3]),Pe=new T({props:_e}),L.push((()=>j(Pe,"value",Ue))),{c(){n=l("p"),t=a("One may bind to a select via\n  "),S=l("span"),y=a("on:change"),C=a("\n  event."),E=o(),w=l("small"),P=a("Selected: "),A=a(Ie),M=o(),s(N.$$.fragment),F=o(),s(D.$$.fragment),H=o(),U=l("p"),_=a("Or through binding\n  "),z=l("span"),G=a("on:value"),J=a("\n  ."),K=o(),Q=l("small"),R=a("Selected: "),X=a(Te),Y=o(),s(Z.$$.fragment),ne=o(),te=l("p"),le=a("Select may be outlined."),ae=o(),s(oe.$$.fragment),re=o(),ce=l("p"),ie=a("Select may even be an autocomplete search component."),ue=o(),me=l("small"),pe=a("Selected: "),de=a(Me),fe=o(),s($e.$$.fragment),ve=o(),he=l("p"),be=a("Custom options slot"),xe=o(),s(Se.$$.fragment),ye=o(),Ce=l("p"),Ee=a("With error message"),we=o(),s(Le.$$.fragment),ke=o(),s(Pe.$$.fragment),this.h()},l(e){n=r(e,"P",{});var l=c(n);t=i(l,"One may bind to a select via\n  "),S=r(l,"SPAN",{class:!0});var a=c(S);y=i(a,"on:change"),a.forEach(u),C=i(l,"\n  event."),l.forEach(u),E=m(e),w=r(e,"SMALL",{});var o=c(w);P=i(o,"Selected: "),A=i(o,Ie),o.forEach(u),M=m(e),p(N.$$.fragment,e),F=m(e),p(D.$$.fragment,e),H=m(e),U=r(e,"P",{});var s=c(U);_=i(s,"Or through binding\n  "),z=r(s,"SPAN",{class:!0});var d=c(z);G=i(d,"on:value"),d.forEach(u),J=i(s,"\n  ."),s.forEach(u),K=m(e),Q=r(e,"SMALL",{});var f=c(Q);R=i(f,"Selected: "),X=i(f,Te),f.forEach(u),Y=m(e),p(Z.$$.fragment,e),ne=m(e),te=r(e,"P",{});var $=c(te);le=i($,"Select may be outlined."),$.forEach(u),ae=m(e),p(oe.$$.fragment,e),re=m(e),ce=r(e,"P",{});var g=c(ce);ie=i(g,"Select may even be an autocomplete search component."),g.forEach(u),ue=m(e),me=r(e,"SMALL",{});var v=c(me);pe=i(v,"Selected: "),de=i(v,Me),v.forEach(u),fe=m(e),p($e.$$.fragment,e),ve=m(e),he=r(e,"P",{});var h=c(he);be=i(h,"Custom options slot"),h.forEach(u),xe=m(e),p(Se.$$.fragment,e),ye=m(e),Ce=r(e,"P",{});var b=c(Ce);Ee=i(b,"With error message"),b.forEach(u),we=m(e),p(Le.$$.fragment,e),ke=m(e),p(Pe.$$.fragment,e),this.h()},h(){d(S,"class","code-inline"),d(z,"class","code-inline")},m(e,l){f(e,n,l),$(n,t),$(n,S),$(S,y),$(n,C),f(e,E,l),f(e,w,l),$(w,P),$(w,A),f(e,M,l),g(N,e,l),f(e,F,l),g(D,e,l),f(e,H,l),f(e,U,l),$(U,_),$(U,z),$(z,G),$(U,J),f(e,K,l),f(e,Q,l),$(Q,R),$(Q,X),f(e,Y,l),g(Z,e,l),f(e,ne,l),f(e,te,l),$(te,le),f(e,ae,l),g(oe,e,l),f(e,re,l),f(e,ce,l),$(ce,ie),f(e,ue,l),f(e,me,l),$(me,pe),$(me,de),f(e,fe,l),g($e,e,l),f(e,ve,l),f(e,he,l),$(he,be),f(e,xe,l),g(Se,e,l),f(e,ye,l),f(e,Ce,l),$(Ce,Ee),f(e,we,l),g(Le,e,l),f(e,ke,l),g(Pe,e,l),Ae=!0},p(e,[n]){(!Ae||1&n)&&Ie!==(Ie=(e[0]||"nothing")+"")&&v(A,Ie),(!Ae||2&n)&&Te!==(Te=(e[1]||"nothing")+"")&&v(X,Te);const t={};!ee&&2&n&&(ee=!0,t.value=e[1],k((()=>ee=!1))),Z.$set(t);const l={};!se&&2&n&&(se=!0,l.value=e[1],k((()=>se=!1))),oe.$set(l),(!Ae||4&n)&&Me!==(Me=(e[2]||"nothing")+"")&&v(de,Me);const a={};!ge&&4&n&&(ge=!0,a.value=e[2],k((()=>ge=!1))),$e.$set(a);const o={};64&n&&(o.selectedLabel=e[6]),524320&n&&(o.$$scope={dirty:n,ctx:e}),Se.$set(o);const s={};!je&&16&n&&(je=!0,s.value=e[4],k((()=>je=!1))),Le.$set(s);const r={};16&n&&(r.error=e[4]),!Oe&&8&n&&(Oe=!0,r.value=e[3],k((()=>Oe=!1))),Pe.$set(r)},i(e){Ae||(h(N.$$.fragment,e),h(D.$$.fragment,e),h(Z.$$.fragment,e),h(oe.$$.fragment,e),h($e.$$.fragment,e),h(Se.$$.fragment,e),h(Le.$$.fragment,e),h(Pe.$$.fragment,e),Ae=!0)},o(e){b(N.$$.fragment,e),b(D.$$.fragment,e),b(Z.$$.fragment,e),b(oe.$$.fragment,e),b($e.$$.fragment,e),b(Se.$$.fragment,e),b(Le.$$.fragment,e),b(Pe.$$.fragment,e),Ae=!1},d(e){e&&u(n),e&&u(E),e&&u(w),e&&u(M),x(N,e),e&&u(F),x(D,e),e&&u(H),e&&u(U),e&&u(K),e&&u(Q),e&&u(Y),x(Z,e),e&&u(ne),e&&u(te),e&&u(ae),x(oe,e),e&&u(re),e&&u(ce),e&&u(ue),e&&u(me),e&&u(fe),x($e,e),e&&u(ve),e&&u(he),e&&u(xe),x(Se,e),e&&u(ye),e&&u(Ce),e&&u(we),x(Le,e),e&&u(ke),x(Pe,e)}}}const V="A select",q=e=>e.replace("rounded-t","rounded-full"),B=e=>e.replace("text-gray-700","text-error-700");function D(e,n,t){let l="",a="",o="",s="",r="";let c=[];let i;return e.$$.update=()=>{32&e.$$.dirty&&t(6,i=c.map((e=>e.text)).join(", "))},[l,a,o,s,r,c,i,[{value:1,text:"One"},{value:2,text:"Two"},{value:3,text:"Three"},{value:4,text:"Four"}],function(e){return n=>t(5,c=n.detail?c.concat(e):c.filter((n=>n!==e)))},function(n){P(e,n)},e=>t(0,l=e.detail),function(e){a=e,t(1,a)},function(e){a=e,t(1,a)},function(e){o=e,t(2,o)},function(e){r=e,t(4,r)},function(e){s=e,t(3,s)}]}export default class extends e{constructor(e){super(),n(this,e,D,F,t,{})}}
