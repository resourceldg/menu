import{_ as a,a as e,b as s,i as n,c as t,S as r,s as o,e as l,t as d,m as i,q as c,d as h,f,o as u,g as k,p as m,r as g,h as p,j as v,k as w,u as b,l as $,y,v as E,w as S,x,Y as C,aE as P}from"./client.01ca4560.js";import{C as I}from"./Code.538820bc.js";function N(a){var e,s,n,t,r,o,C,P,N,T,A,B,M,j,D,q,H,V,Y,_,z,F,G,J,K,L,O,Q,R,U,W,X,Z,aa,ea,sa,na,ta,ra=a[0]?"dark":"light";return T=new I({props:{code:"<button bind:value={$darkMode}>Toggle dark mode</button>"}}),V=new I({props:{code:'\nbackgroundColor: ["dark", "dark-hover", "hover"],\nborderColor: ["dark", "dark-focus"],\ntextColor: ["dark", "dark-hover", "dark-active"]\n'}}),W=new I({props:{code:'\n<div class="duration-200 ease-in p-10 my-10 bg-black dark:bg-white text-white dark:text-black">\n  I am a {$darkMode ? "dark" : "light"} div.\n</div>\n'}}),{c:function(){e=l("h4"),s=d("Dark mode"),n=i(),t=l("p"),r=d("Smelte uses css pseudo-class variant\n  "),o=l("a"),C=d("feature"),P=d("\n  of Tailwind to enable dark mode. Basic dark mode switch looks like this:"),N=i(),c(T.$$.fragment),A=i(),B=l("p"),M=d("This will append\n  "),j=l("span"),D=d("mode-dark"),q=d('\n  class to the document body which will enable all generated classes preceded by\n  pseudo-class "dark:". By default smelte generates following variants:'),H=i(),c(V.$$.fragment),Y=i(),_=l("p"),z=d("Now you can use dark theme classes like\n  "),F=l("span"),G=d("dark:bg-white"),J=d("\n  (try using the theme toggle on the top right)."),K=i(),L=l("div"),O=d("I am a "),Q=d(ra),R=d(" div."),U=i(),c(W.$$.fragment),X=i(),Z=l("p"),aa=d("If you don't need dark mode at all, you can pass\n  "),ea=l("span"),sa=d("darkMode: false"),na=d("\n  to the smelte-rollup-plugin and it will generate no extra CSS."),this.h()},l:function(a){e=h(a,"H4",{class:!0});var l=f(e);s=u(l,"Dark mode"),l.forEach(k),n=m(a),t=h(a,"P",{});var d=f(t);r=u(d,"Smelte uses css pseudo-class variant\n  "),o=h(d,"A",{class:!0,href:!0});var i=f(o);C=u(i,"feature"),i.forEach(k),P=u(d,"\n  of Tailwind to enable dark mode. Basic dark mode switch looks like this:"),d.forEach(k),N=m(a),g(T.$$.fragment,a),A=m(a),B=h(a,"P",{});var c=f(B);M=u(c,"This will append\n  "),j=h(c,"SPAN",{class:!0});var p=f(j);D=u(p,"mode-dark"),p.forEach(k),q=u(c,'\n  class to the document body which will enable all generated classes preceded by\n  pseudo-class "dark:". By default smelte generates following variants:'),c.forEach(k),H=m(a),g(V.$$.fragment,a),Y=m(a),_=h(a,"P",{});var v=f(_);z=u(v,"Now you can use dark theme classes like\n  "),F=h(v,"SPAN",{class:!0});var w=f(F);G=u(w,"dark:bg-white"),w.forEach(k),J=u(v,"\n  (try using the theme toggle on the top right)."),v.forEach(k),K=m(a),L=h(a,"DIV",{class:!0});var b=f(L);O=u(b,"I am a "),Q=u(b,ra),R=u(b," div."),b.forEach(k),U=m(a),g(W.$$.fragment,a),X=m(a),Z=h(a,"P",{});var $=f(Z);aa=u($,"If you don't need dark mode at all, you can pass\n  "),ea=h($,"SPAN",{class:!0});var y=f(ea);sa=u(y,"darkMode: false"),y.forEach(k),na=u($,"\n  to the smelte-rollup-plugin and it will generate no extra CSS."),$.forEach(k),this.h()},h:function(){p(e,"class","pb-8"),p(o,"class","a"),p(o,"href","https://tailwindcss.com/docs/configuring-variants/"),p(j,"class","code-inline"),p(F,"class","code-inline"),p(L,"class","duration-200 ease-in p-10 my-10 bg-black dark:bg-white text-white\n  dark:text-black"),p(ea,"class","code-inline")},m:function(a,l){v(a,e,l),w(e,s),v(a,n,l),v(a,t,l),w(t,r),w(t,o),w(o,C),w(t,P),v(a,N,l),b(T,a,l),v(a,A,l),v(a,B,l),w(B,M),w(B,j),w(j,D),w(B,q),v(a,H,l),b(V,a,l),v(a,Y,l),v(a,_,l),w(_,z),w(_,F),w(F,G),w(_,J),v(a,K,l),v(a,L,l),w(L,O),w(L,Q),w(L,R),v(a,U,l),b(W,a,l),v(a,X,l),v(a,Z,l),w(Z,aa),w(Z,ea),w(ea,sa),w(Z,na),ta=!0},p:function(a,e){var s=$(e,1)[0];(!ta||1&s)&&ra!==(ra=a[0]?"dark":"light")&&y(Q,ra)},i:function(a){ta||(E(T.$$.fragment,a),E(V.$$.fragment,a),E(W.$$.fragment,a),ta=!0)},o:function(a){S(T.$$.fragment,a),S(V.$$.fragment,a),S(W.$$.fragment,a),ta=!1},d:function(a){a&&k(e),a&&k(n),a&&k(t),a&&k(N),x(T,a),a&&k(A),a&&k(B),a&&k(H),x(V,a),a&&k(Y),a&&k(_),a&&k(K),a&&k(L),a&&k(U),x(W,a),a&&k(X),a&&k(Z)}}}function T(a,e,s){var n;return C(a,P,(function(a){return s(0,n=a)})),[n]}var A=function(l){a(i,r);var d=e(i);function i(a){var e;return s(this,i),e=d.call(this),n(t(e),a,T,N,o,{}),e}return i}();export default A;
