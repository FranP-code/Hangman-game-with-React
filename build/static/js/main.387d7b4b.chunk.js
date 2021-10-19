(this["webpackJsonphangman-game"]=this["webpackJsonphangman-game"]||[]).push([[0],{39:function(A,e,t){"use strict";t.r(e);var n=t(10),a=t.n(n),c=t(30),r=t.n(c),s=t(11),o=t(7),g=function(A){var e=A.currentScore,t=A.language,n=a.a.useState(""),c=Object(s.a)(n,2),r=c[0],g=c[1];return a.a.useEffect((function(){"spanish"===t&&g("Puntuaci\xf3n: "),"english"===t&&g("Current Score: ")})),Object(o.jsx)("div",{className:"current-score",children:Object(o.jsxs)("h2",{children:[Object(o.jsx)("span",{className:"text",children:r}),e]})})},i=[t.p+"static/media/00.568d8d0b.svg",t.p+"static/media/01.6338b5c8.svg",t.p+"static/media/02.9844dd07.svg",t.p+"static/media/03.6bbc7f38.svg",t.p+"static/media/04.47aae56d.svg",t.p+"static/media/05.2556129c.svg",t.p+"static/media/06.66808474.svg"],u=function(A){return Object(o.jsx)("div",{className:"hangman",children:Object(o.jsx)("img",{src:i[A.hangmanFrame],alt:""})})},l=function(A){var e=A.language,t=A.displayCategories,c=A.setDisplayCategories,r=Object(n.useState)(""),g=Object(s.a)(r,2),i=g[0],u=g[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),d=m[0],b=m[1];return a.a.useEffect((function(){"english"===e&&(u("Hangman game"),b("Select category")),"spanish"===e&&(u("Ahorcado"),b("Seleccionar categor\xeda"))})),Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:i}),Object(o.jsx)("h2",{onClick:function(){return c(!t)},children:d})]})},m=t(1),d=t.n(m),b=t(3),w=t(14),p=function(A,e,t){e.includes(A.toUpperCase())||(t([].concat(Object(w.a)(e),[A.toUpperCase()])),console.log(e))},S=function(A){var e=A.currentScore,t=A.setCurrentScore;return a.a.useEffect((function(){t(parseInt(e)+1)}),[]),Object(o.jsx)("div",{className:"victory animate__animated animate__backInDown",children:Object(o.jsx)("h1",{children:"VICTORIA"})})},j=function(A){var e=!0,t=document.getElementById("puzzleWord");Object(w.a)(t.children).forEach((function(A){""===A.textContent&&(e=!1)})),e&&A(!0)},O=function(A,e,t,n,a,c,r){var s=["a","\xe1","b","c","d","e","\xe9","f","g","h","i","\xed","j","k","l","m","n","\xf1","o","\xf3","p","q","r","s","t","u","\xfa","v","w","x","y","z"],o=function(o){var i=o.key.toLowerCase();if(e<=5&&s.includes(i)){A=A.toLowerCase();var u=document.getElementById("puzzleWord"),l=[];if(A.search(i)+1){for(var m=0;m<A.length;m++)i===A[m]&&l.push(m);l.forEach((function(A){var e=A;u.children[e].textContent=0===e?i.toUpperCase():i})),j(n)}else{if(t(e+1),5===e){for(var d=0;d<A.length;d++){var b=document.createElement("span");b.className="letter",b.textContent=A[d],0===d&&(b.textContent=b.textContent.toUpperCase()),u.replaceChild(b,u.children[d])}a(!0)}g()}p(i,c,r)}},g=function(){window.removeEventListener("keyup",o)};window.addEventListener("keyup",o)},f=function(A){return Math.trunc(Math.random()*(A.length-0)+0)},B=t(31),C=Object(B.a)({apiKey:"AIzaSyC_6waJmJaj6Xw8hbv6h0ZAPIQ_Ntk-llc",authDomain:"hangman-game-with-react.firebaseapp.com",projectId:"hangman-game-with-react",storageBucket:"hangman-game-with-react.appspot.com",messagingSenderId:"836415057159",appId:"1:836415057159:web:acfc2dd89087bb60c7e9a2"}),h=t(17),x=function(){var A=Object(b.a)(d.a.mark((function A(){var e,t,n,a;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=[],A.prev=1,t=Object(h.c)(C),n=Object(h.a)(t,"categories"),A.next=6,Object(h.b)(n);case 6:return A.sent.docs.map((function(A){return e.push(A.id.toLowerCase())})),a=Math.trunc(Math.random()*(e.length-0)+0),A.abrupt("return",e[a]);case 12:A.prev=12,A.t0=A.catch(1),console.log(A.t0);case 15:case"end":return A.stop()}}),A,null,[[1,12]])})));return function(){return A.apply(this,arguments)}}(),I=x,k=function(){var A=Object(b.a)(d.a.mark((function A(){var e,t,n,a,c,r,s=arguments;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(e=s.length>0&&void 0!==s[0]&&s[0],t=s.length>1&&void 0!==s[1]&&s[1],console.log(t),e||(e="english"),t){A.next=8;break}return A.next=7,I();case 7:t=A.sent;case 8:return A.prev=8,n=Object(h.c)(C),a=Object(h.a)(n,"hangman_words/".concat(e,"/").concat(t)),A.next=13,Object(h.b)(a);case 13:return c=A.sent,A.next=16,c.docs.map((function(A){return A.id}));case 16:return r=A.sent,A.abrupt("return",r);case 20:A.prev=20,A.t0=A.catch(8),console.log(A.t0);case 23:case"end":return A.stop()}}),A,null,[[8,20]])})));return function(){return A.apply(this,arguments)}}(),D=k,v=function(A){var e=A.hangmanFrame,t=A.setHangmanFrame,c=(A.currentScore,A.setCurrentScore,A.setIsVictory),r=A.setIsDefeat,g=A.displayApp,i=A.setDisplayApp,u=A.language,l=A.category,m=A.categoryIsReady,w=A.lettersRegistered,p=A.setLettersRegistered,S=Object(n.useState)(""),j=Object(s.a)(S,2),B=j[0],C=j[1];return a.a.useEffect((function(){B&&!g&&(!function(){for(var A=document.getElementById("puzzleWord"),e=0;e<B.length;e++){var t=document.createElement("span");t.className="letter",t.textContent="",A.appendChild(t)}var n=document.createElement("span");n.className="counter",n.textContent="("+B.length+")",A.appendChild(n)}(),i(!0))}),[B,l,g,u,i]),a.a.useEffect((function(){var A=function(){var A=Object(b.a)(d.a.mark((function A(){var e,t,n;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,D(u,l);case 2:return e=A.sent,A.next=5,f(e);case 5:return t=A.sent,A.next=8,e[t];case 8:n=A.sent,C(n);case 10:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();g||B||m&&A(),g&&(console.log(w),O(B,e,t,c,r,w,p))}),[e,g,B,t,r,c,m,l,w,p,u]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"puzzleWord",id:"puzzleWord"})})},E=function(){return Object(o.jsx)("div",{className:"defeat animate__animated animate__backInDown",children:Object(o.jsx)("h1",{children:"DEFEAT"})})},Q=t.p+"static/media/loading-light-theme.cf953a77.png",N=function(){return Object(o.jsx)("div",{className:"loading",children:Object(o.jsx)("img",{src:Q,alt:""})})},Z=function(A){localStorage.setItem("currentScore",A)},Y=function(A){console.log(navigator.language),"es"===navigator.language&&A("spanish"),"en"!==navigator.language&&"en-US"!==navigator.language||A("english")},y=function(A){localStorage.setItem("category",A)},P=function(A){localStorage.setItem("language",A)},L=function(A,e){console.log(A),A.length>=5&&e("stretch")},M=function(A){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(e?A.toLowerCase():A).replace(/(?:^|\s|["'([{])+\S/g,(function(A){return A.toUpperCase()}))},F=function(){var A=Object(b.a)(d.a.mark((function A(e,t,n){var a,c,r,s;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return console.log(n),A.prev=1,a=Object(h.c)(C),A.next=5,Object(h.a)(a,"categories");case 5:return c=A.sent,A.next=8,Object(h.b)(c);case 8:return r=A.sent,"english"===n&&(s=r.docs.map((function(A){return[A.data().english,A.data().iconRoute]}))),"spanish"===n&&(s=r.docs.map((function(A){return[A.data().spanish,A.data().iconRoute]}))),s=s.map((function(A){return[M(A[0],!0),A[1]]})),console.log(s),A.t0=e,A.next=16,s;case 16:return A.t1=A.sent,(0,A.t0)(A.t1),A.t2=L,A.next=21,s;case 21:A.t3=A.sent,A.t4=t,(0,A.t2)(A.t3,A.t4),A.next=29;break;case 26:A.prev=26,A.t5=A.catch(1),console.log(A.t5);case 29:case"end":return A.stop()}}),A,null,[[1,26]])})));return function(e,t,n){return A.apply(this,arguments)}}(),U=F,G=t(27),z=function(){var A=Object(b.a)(d.a.mark((function A(e){var t,n,a,c;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,t=Object(G.c)(C),n=Object(G.a)(t,"hangman_words"),A.next=5,Object(G.b)(n);case 5:return a=A.sent,A.next=8,a.docs.map((function(A){return A.id}));case 8:c=(c=A.sent).map((function(A){return M(A,!0)})),e(c),A.next=16;break;case 13:A.prev=13,A.t0=A.catch(0),console.log(A.t0);case 16:case"end":return A.stop()}}),A,null,[[0,13]])})));return function(e){return A.apply(this,arguments)}}(),R=z,W="data:image/png;base64,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",J=t.p+"static/media/cities.6fc05cbf.png",T=t.p+"static/media/countries.002d677d.png",X="data:image/png;base64,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",H={animals:W,animales:W,cities:J,ciudades:J,countries:T,"pa\xedses":T,pokemon:t.p+"static/media/pokemon.a607811c.png","programming languages":X,"lenguajes de programaci\xf3n":X,random:"data:image/png;base64,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"},V=function(A){var e=A.language,t=A.displayCategories,n=A.category,c=A.setCategory,r=A.currentScore,g=A.setLanguage,i=a.a.useState(!1),u=Object(s.a)(i,2),l=u[0],m=u[1],d=a.a.useState(!1),b=Object(s.a)(d,2),w=b[0],p=b[1],S=a.a.useState(!1),j=Object(s.a)(S,2),O=j[0],f=j[1],B=function(A){A=A.toLowerCase(),c(A),localStorage.setItem("category",A),Z(r),P(e),window.location.reload(!1)};return a.a.useEffect((function(){U(m,f,e,n),R(p),console.log(l)}),[]),Object(o.jsxs)("div",{className:t?"categories show animate__animated animate__backInDown ".concat(O):"categories hidden animate__animated animate__backOutUp ".concat(O),children:[Object(o.jsx)("select",{className:"Select",onChange:function(A){return function(A){A=A.toLowerCase(),g(A),localStorage.setItem("language",A),Z(r),y(n),window.location.reload(!1)}(A.target.value)},children:w.length>0?w.map((function(A){return Object(o.jsxs)("option",{value:A,children:[" ",A.toUpperCase()," "]},A)})):null}),l.length>0?l.map((function(A){var e=A[0].toLowerCase();return Object(o.jsxs)("button",{className:A[0],onClick:function(){return B(A[0])},children:[Object(o.jsx)("img",{src:H[e],alt:e}),Object(o.jsx)("span",{className:"text",children:A[0].toUpperCase()}),Object(o.jsx)("div",{className:"blank-space"})]},A[0])})):null,Object(o.jsxs)("button",{className:"Random",onClick:function(){return B("")},children:[Object(o.jsx)("img",{src:H.random,alt:"random-icon"}),Object(o.jsx)("span",{className:"text",children:"Random".toUpperCase()}),Object(o.jsx)("div",{className:"blank-space"})]},"Random")]})},K=function(A){var e="Hangman game",t="Ahorcado";"english"===A&&(document.title=e),"spanish"===A&&(document.title=t)},q=function(A){var e=A.lettersRegistered;A.setLettersRegistered;return Object(o.jsx)("div",{className:"letters-registered",children:e.map((function(A){return Object(o.jsx)("span",{children:A},A)}))})};var _=function(){var A=Object(n.useState)("english"),e=Object(s.a)(A,2),t=e[0],c=e[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),m=i[0],d=i[1],b=Object(n.useState)(!1),w=Object(s.a)(b,2),p=w[0],j=w[1],O=Object(n.useState)(!1),f=Object(s.a)(O,2),B=f[0],C=f[1],h=Object(n.useState)(0),x=Object(s.a)(h,2),I=x[0],k=x[1],D=Object(n.useState)(0),Q=Object(s.a)(D,2),L=Q[0],M=Q[1],F=Object(n.useState)(!1),U=Object(s.a)(F,2),G=U[0],z=U[1],R=Object(n.useState)(!1),W=Object(s.a)(R,2),J=W[0],T=W[1],X=Object(n.useState)(!1),H=Object(s.a)(X,2),_=H[0],$=H[1],AA=Object(n.useState)(!1),eA=Object(s.a)(AA,2),tA=eA[0],nA=eA[1],aA=Object(n.useState)([]),cA=Object(s.a)(aA,2),rA=cA[0],sA=cA[1];return a.a.useEffect((function(){!function(A){localStorage.getItem("currentScore")&&(A(localStorage.getItem("currentScore")),localStorage.removeItem("currentScore"))}(k),function(A){localStorage.getItem("category")&&(A(localStorage.getItem("category")),localStorage.removeItem("category"))}(j),C(!0),Y(c),function(A){localStorage.getItem("language")&&(A(localStorage.getItem("language")),localStorage.removeItem("language"))}(c),K(t),d(!0)}),[]),(G||J)&&setTimeout((function(){Z(I),y(p),P(t),window.location.reload(!1)}),3e3),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{language:t,displayCategories:tA,setDisplayCategories:nA}),Object(o.jsxs)("div",{className:"app",children:[m?Object(o.jsx)("div",{className:"categories-container",children:Object(o.jsx)(V,{currentScore:I,displayCategories:tA,language:t,category:p,setCategory:j,categoryIsReady:B,setLanguage:c})}):null,Object(o.jsx)("div",{className:"column-1",children:Object(o.jsx)(u,{hangmanFrame:L})}),Object(o.jsxs)("div",{className:"column-2",children:[Object(o.jsx)(g,{currentScore:I,language:t}),_?null:Object(o.jsx)(N,{}),Object(o.jsx)(v,{language:t,category:p,categoryIsReady:B,hangmanFrame:L,setHangmanFrame:M,currentScore:I,setCurrentScore:k,isVictory:G,setIsVictory:z,isDefeat:J,setIsDefeat:T,displayApp:_,setDisplayApp:$,lettersRegistered:rA,setLettersRegistered:sA})]})]}),Object(o.jsx)(q,{lettersRegistered:rA,setLettersRegistered:sA}),G?Object(o.jsx)(S,{currentScore:I,setCurrentScore:k}):null,J?Object(o.jsx)(E,{}):null]})},$=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(A),n(A),a(A),c(A),r(A)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root")),$()}},[[39,1,2]]]);
//# sourceMappingURL=main.387d7b4b.chunk.js.map