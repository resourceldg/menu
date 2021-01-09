import{S as t,i as e,s as n,l as s,h as o,m as a,k as i,o as r,f as c,p as l,q as m,r as p,d as $,T as f,U as h,V as d,W as g,y as u,X as v,Y as x,Z as w}from"./client.7628e46f.js";import{C as k}from"./Code.4523955d.js";import{C as b}from"./index.802c5456.js";import"./index.7cb649bd.js";function y(t){let e,n,f,u,v,x,w,y,L,N,j,D,C,S;function T(e){t[4].call(null,e)}let I={label:"Show drawer"};function P(e){t[5].call(null,e)}void 0!==t[0]&&(I.checked=t[0]),e=new b({props:I}),h.push((()=>d(e,"checked",T)));let U={label:"With elevation"};function W(e){t[6].call(null,e)}void 0!==t[1]&&(U.checked=t[1]),u=new b({props:U}),h.push((()=>d(u,"checked",P)));let q={label:"Placed on the right"};function B(e){t[7].call(null,e)}void 0!==t[2]&&(q.checked=t[2]),w=new b({props:q}),h.push((()=>d(w,"checked",W)));let G={label:"Persistent"};return void 0!==t[3]&&(G.checked=t[3]),N=new b({props:G}),h.push((()=>d(N,"checked",B))),C=new k({props:{code:'<script>\n  // This is top src/routes/_layout.svelte.\n\n  import {\n    List,\n    ListItem,\n    NavigationDrawer\n  } from "smelte";\n  import { right, elevation, persistent, showNav } from \'stores.js\';\n  const menu = [\n      { to: "components/text-fields", text: \'Text fields\' },\n      { to: "components/buttons", text: \'Buttons\' },\n      { to: "components/selection-controls", text: \'Selection controls\' },\n      { to: "components/lists", text: \'Lists\' },\n      { to: "components/navigation-drawers", text: \'Navigation Drawers\' },\n      { to: "..", text: \'Go back\' },\n    ];\n  \n  let path = "components/navigation-drawers";\n\n<\/script>\n\n<NavigationDrawer\n  bind:showDesktop={$showNav}\n  right={$right}\n  persistent={$persistent}\n  elevation={$elevation}\n>\n  <h6\n    class="p-6 ml-1 pb-2 text-xs text-gray-900"\n  >Components</h6>\n  <List items={menu}>\n    <span slot="item" let:item={item} class="cursor-pointer">\n      {#if item.to === \'/typography\'}\n        <hr>\n        <h6 class="p-6 ml-1 py-2 text-xs text-gray-900">Utilities</h6>\n      {/if}\n\n      <a href={item.to}>\n        <ListItem\n          selected={path.includes(item.to)}\n          {...item}\n          dense\n          navigation\n        />\n      </a>\n    </span>\n  </List>\n  <hr>\n</NavigationDrawer>'}}),{c(){s(e.$$.fragment),f=o(),s(u.$$.fragment),x=o(),s(w.$$.fragment),L=o(),s(N.$$.fragment),D=o(),s(C.$$.fragment)},l(t){a(e.$$.fragment,t),f=i(t),a(u.$$.fragment,t),x=i(t),a(w.$$.fragment,t),L=i(t),a(N.$$.fragment,t),D=i(t),a(C.$$.fragment,t)},m(t,n){r(e,t,n),c(t,f,n),r(u,t,n),c(t,x,n),r(w,t,n),c(t,L,n),r(N,t,n),c(t,D,n),r(C,t,n),S=!0},p(t,[s]){const o={};!n&&1&s&&(n=!0,o.checked=t[0],g((()=>n=!1))),e.$set(o);const a={};!v&&2&s&&(v=!0,a.checked=t[1],g((()=>v=!1))),u.$set(a);const i={};!y&&4&s&&(y=!0,i.checked=t[2],g((()=>y=!1))),w.$set(i);const r={};!j&&8&s&&(j=!0,r.checked=t[3],g((()=>j=!1))),N.$set(r)},i(t){S||(l(e.$$.fragment,t),l(u.$$.fragment,t),l(w.$$.fragment,t),l(N.$$.fragment,t),l(C.$$.fragment,t),S=!0)},o(t){m(e.$$.fragment,t),m(u.$$.fragment,t),m(w.$$.fragment,t),m(N.$$.fragment,t),m(C.$$.fragment,t),S=!1},d(t){p(e,t),t&&$(f),p(u,t),t&&$(x),p(w,t),t&&$(L),p(N,t),t&&$(D),p(C,t)}}}function L(t,e,n){let s,o,a,i;return f(t,u,(t=>n(0,s=t))),f(t,v,(t=>n(1,o=t))),f(t,x,(t=>n(2,a=t))),f(t,w,(t=>n(3,i=t))),[s,o,a,i,function(t){s=t,u.set(s)},function(t){o=t,v.set(o)},function(t){a=t,x.set(a)},function(t){i=t,w.set(i)}]}export default class extends t{constructor(t){super(),e(this,t,L,y,n,{})}}