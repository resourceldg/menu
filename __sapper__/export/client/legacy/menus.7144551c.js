import{_ as n,a as t,b as e,i as a,c as o,S as i,s as r,e as u,t as s,m as c,q as f,d as l,f as $,o as m,g as v,p,r as d,j as x,k as h,u as g,l as j,y as w,v as b,w as M,x as S,D as A,h as B,Z as F,$ as T,a0 as k}from"./client.01ca4560.js";import{C as y}from"./Code.538820bc.js";import"./index.62380659.js";import"./index.5f5d7018.js";import"./index.2d192613.js";import{M as C}from"./index.7225fa83.js";import"./index.269ac588.js";function D(n){var t;return{c:function(){t=s("A menu")},l:function(n){t=m(n,"A menu")},m:function(n,e){x(n,t,e)},d:function(n){n&&v(t)}}}function E(n){var t,e,a;return(e=new A({props:{$$slots:{default:[D]},$$scope:{ctx:n}}})).$on("click",n[3]),{c:function(){t=u("div"),f(e.$$.fragment),this.h()},l:function(n){t=l(n,"DIV",{slot:!0});var a=$(t);d(e.$$.fragment,a),a.forEach(v),this.h()},h:function(){B(t,"slot","activator")},m:function(n,o){x(n,t,o),g(e,t,null),a=!0},p:function(n,t){var a={};64&t&&(a.$$scope={dirty:t,ctx:n}),e.$set(a)},i:function(n){a||(b(e.$$.fragment,n),a=!0)},o:function(n){M(e.$$.fragment,n),a=!1},d:function(n){n&&v(t),S(e)}}}function L(n){var t,e,a,o,i,r,A,B,D,L,O,q=(n[1]||"nothing")+"";function I(t){n[4].call(null,t)}function R(t){n[5].call(null,t)}var V={items:n[2],$$slots:{activator:[E]},$$scope:{ctx:n}};return void 0!==n[0]&&(V.open=n[0]),void 0!==n[1]&&(V.value=n[1]),r=new C({props:V}),F.push((function(){return T(r,"open",I)})),F.push((function(){return T(r,"value",R)})),L=new y({props:{code:"<script>\n  import {\n    Button,\n    Menu,\n  } from \"smelte\";\n\n  let open = true;\n\tlet selected = \"\";\n\n  const items = [\n\t\t{ value: 1, text: 'One' },\n\t\t{ value: 2, text: 'Two' },\n\t\t{ value: 3, text: 'Three' },\n\t\t{ value: 4, text: 'Four' },\n\t\t{ value: 5, text: 'Five' },\n\t];\n\n<\/script>\n\n<small>Selected: {selected || 'nothing'}</small>\n\n<Menu bind:open {items} bind:value={selected}>\n\t<div slot=\"activator\">\n\t\t<Button on:click={() => open = !open}>A menu</Button>\n\t</div>\n</Menu>"}}),{c:function(){t=u("small"),e=s("Selected: "),a=s(q),o=u("br"),i=c(),f(r.$$.fragment),D=c(),f(L.$$.fragment)},l:function(n){t=l(n,"SMALL",{});var u=$(t);e=m(u,"Selected: "),a=m(u,q),u.forEach(v),o=l(n,"BR",{}),i=p(n),d(r.$$.fragment,n),D=p(n),d(L.$$.fragment,n)},m:function(n,u){x(n,t,u),h(t,e),h(t,a),x(n,o,u),x(n,i,u),g(r,n,u),x(n,D,u),g(L,n,u),O=!0},p:function(n,t){var e=j(t,1)[0];(!O||2&e)&&q!==(q=(n[1]||"nothing")+"")&&w(a,q);var o={};65&e&&(o.$$scope={dirty:e,ctx:n}),!A&&1&e&&(A=!0,o.open=n[0],k((function(){return A=!1}))),!B&&2&e&&(B=!0,o.value=n[1],k((function(){return B=!1}))),r.$set(o)},i:function(n){O||(b(r.$$.fragment,n),b(L.$$.fragment,n),O=!0)},o:function(n){M(r.$$.fragment,n),M(L.$$.fragment,n),O=!1},d:function(n){n&&v(t),n&&v(o),n&&v(i),S(r,n),n&&v(D),S(L,n)}}}function O(n,t,e){var a=!1,o="";return[a,o,[{value:1,text:"One"},{value:2,text:"Two"},{value:3,text:"Three"},{value:4,text:"Four"},{value:5,text:"Five"}],function(){return e(0,a=!a)},function(n){e(0,a=n)},function(n){e(1,o=n)}]}var q=function(u){n(c,i);var s=t(c);function c(n){var t;return e(this,c),t=s.call(this),a(o(t),n,O,L,r,{}),t}return c}();export default q;