(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{14:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(7),s=n.n(i),h=(n(14),n(3)),r=n(8),o=n(9),l=n(1),j="f9f995e5e556c4b8cca140be6996aa5e",u="https://api.openweathermap.org/data/2.5/";var d=function(){var e=Object(c.useState)((new Date).toLocaleTimeString()),t=Object(h.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(h.a)(i,2),d=s[0],b=s[1],m=Object(c.useState)(null),g=Object(h.a)(m,2),O=g[0],f=g[1],v=Object(c.useState)(!0),T=Object(h.a)(v,2),x=T[0],N=T[1],p=Object(c.useState)(null),w=Object(h.a)(p,2),y=w[0],S=w[1],M=Object(c.useState)(null),C=Object(h.a)(M,2),k=C[0],B=C[1],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Ho Chi Minh";""!==e&&fetch("".concat(u,"weather?q=").concat(e,"&units=metric&appid=").concat(j)).then((function(e){if(!e.ok)throw f(null),Error("Kh\xf4ng t\xecm th\u1ea5y \u0111\u1ecba \u0111i\u1ec3m n\xe0y!");return e.json()})).then((function(e){switch(S(null),N(!1),f(e),e.weather[0].main){case"Clouds":B("Nhi\u1ec1u m\xe2y");break;case"Sunny":B("Tr\u1eddi n\u1eafng");break;case"Rain":B("C\xf3 m\u01b0a");break;case"Mist":B("\u1ea8m \u01b0\u1edbt")}})).catch((function(e){N(!1),S(e.message)}))};return Object(c.useEffect)((function(){setInterval((function(){a((new Date).toLocaleTimeString())}),1e3),D()}),[]),Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{className:"search-box",children:Object(l.jsx)("input",{type:"text",className:"search-bar",placeholder:"Ho Chi Minh, Ha Noi, ...",value:d,onChange:function(e){""!==e.target.value&&b(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&D(d)}(e)}})}),Object(l.jsxs)("div",{className:"location-box",children:[O&&Object(l.jsxs)("div",{className:"location",children:[O.name,", ",O.sys.country]}),Object(l.jsx)("div",{className:"date",children:function(e){var t=["Ch\u1ee7 Nh\u1eadt","Th\u1ee9 Hai","Th\u1ee9 Ba","Th\u1ee9 T\u01b0","Th\u1ee9 N\u0103m","Th\u1ee9 S\xe1u","Th\u1ee9 B\u1ea3y"][e.getDay()],n=e.getDate(),c=["Th\xe1ng M\u1ed9t","Th\xe1ng Hai","Th\xe1ng Ba","Th\xe1ng T\u01b0","Th\xe1ng N\u0103m","Th\xe1ng S\xe1u","Th\xe1ng B\u1ea3y","Th\xe1ng T\xe1m","Th\xe1ng Ch\xedn","Th\xe1ng M\u01b0\u1eddi","Th\xe1ng M\u01b0\u1eddi M\u1ed9t","Th\xe1ng M\u01b0\u1eddi Hai"][e.getMonth()],a=e.getFullYear();return"".concat(t,", ").concat(n," ").concat(c," ").concat(a)}(new Date)}),Object(l.jsxs)("div",{className:"live-clock",children:[Object(l.jsx)(r.a,{className:"clock-icon",icon:o.a}),n]})]}),Object(l.jsxs)("div",{className:"weather-box",children:[y&&Object(l.jsx)("div",{className:"notification",children:y}),x&&Object(l.jsx)("div",{className:"notification",children:"\u0110ang t\u1ea3i d\u1eef li\u1ec7u ..."}),O&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"temp",children:[Math.round(O.main.temp,-1),"\xb0c"]}),Object(l.jsx)("div",{className:"weather",children:k}),Object(l.jsxs)("div",{className:"weather-info",children:["\u0110\u1ed9 \u1ea9m: ",O.main.humidity,"%"]}),Object(l.jsxs)("div",{className:"weather-info",children:["T\u1ed1c \u0111\u1ed9 gi\xf3: ",O.wind.speed," m/s"]}),Object(l.jsxs)("div",{className:"weather-info",children:["\u0110\u1ed9 m\xe2y ph\u1ee7: ",O.clouds.all,"%"]})]})]})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}},[[21,1,2]]]);
//# sourceMappingURL=main.2359289d.chunk.js.map