(this.webpackJsonpmilionaire=this.webpackJsonpmilionaire||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),s=n.n(r),i=n(3),u=(n(14),n(1));function o(e){var t=e.setUsername,n=Object(c.useRef)();return Object(u.jsxs)("div",{className:"start",children:[Object(u.jsx)("input",{className:"startInput",placeholder:"enter your name",ref:n}),Object(u.jsx)("button",{className:"startButton",onClick:function(){n.current.value&&t(n.current.value)},children:"Start"})]})}function j(e){var t=e.setTimeOut,n=e.questionNumber,a=Object(c.useState)(30),r=Object(i.a)(a,2),s=r[0],u=r[1];return Object(c.useEffect)((function(){if(0===s)return t(!0);var e=setInterval((function(){u((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}),[s,t]),Object(c.useEffect)((function(){u(30)}),[n]),s}var m=n(6),d=n.p+"static/media/play.8e5f6d1d.mp3",l=n.p+"static/media/correct.160572d7.mp3",b=n.p+"static/media/wrong.e9468218.mp3";function O(e){var t=e.data,n=e.questionNumber,a=e.setQuestionNumber,r=e.setTimeOut,s=Object(c.useState)(null),o=Object(i.a)(s,2),j=o[0],O=o[1],f=Object(c.useState)(null),x=Object(i.a)(f,2),v=x[0],h=x[1],p=Object(c.useState)("answer"),N=Object(i.a)(p,2),S=N[0],$=N[1],w=Object(m.a)(d),y=Object(i.a)(w,1)[0],q=Object(m.a)(l),I=Object(i.a)(q,1)[0],L=Object(m.a)(b),T=Object(i.a)(L,1)[0];Object(c.useEffect)((function(){y()}),[y]),Object(c.useEffect)((function(){O(t[n-1])}),[t,n]);var A=function(e,t){setTimeout((function(){t()}),e)};return Object(u.jsxs)("div",{className:"trivia",children:[Object(u.jsx)("div",{className:"question",children:null===j||void 0===j?void 0:j.question}),Object(u.jsx)("div",{className:"answers",children:null===j||void 0===j?void 0:j.answers.map((function(e){return Object(u.jsx)("div",{className:v===e?S:"answer",onClick:function(){return!v&&function(e){h(e),$("answer active"),A(3e3,(function(){$(e.correct?"answer correct":"answer wrong")})),A(5e3,(function(){e.correct?(I(),A(1e3,(function(){a((function(e){return e+1})),h(null)}))):(T(),A(1e3,(function(){r(!0)})))}))}(e)},children:e.text})}))})]})}n(2),n(9);var f=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),m=s[0],d=s[1],l=Object(c.useState)(1),b=Object(i.a)(l,2),f=b[0],x=b[1],v=Object(c.useState)("$ 0"),h=Object(i.a)(v,2),p=h[0],N=h[1],S=Object(c.useMemo)((function(){return[{id:1,amount:"$ 100"},{id:2,amount:"$ 200"},{id:3,amount:"$ 300"},{id:4,amount:"$ 500"},{id:5,amount:"$ 1.000"},{id:6,amount:"$ 2.000"},{id:7,amount:"$ 4.000"},{id:8,amount:"$ 8.000"},{id:9,amount:"$ 16.000"},{id:10,amount:"$ 32.000"},{id:11,amount:"$ 64.000"},{id:12,amount:"$ 125.000"},{id:13,amount:"$ 250.000"},{id:14,amount:"$ 500.000"},{id:15,amount:"$ 1.000.000"}].reverse()}),[]);return Object(c.useEffect)((function(){f>1&&N(S.find((function(e){return e.id===f-1})).amount)}),[f,S]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"app",children:n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"main",children:m?Object(u.jsxs)("h1",{className:"endText",children:["You earned: ",p]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"top",children:Object(u.jsx)("div",{className:"timer",children:Object(u.jsx)(j,{setTimeOut:d,questionNumber:f})})}),Object(u.jsx)("div",{className:"bottom",children:Object(u.jsx)(O,{data:[{id:1,question:"What is a SASA Astronaut called?",answers:[{text:"Astronomer",correct:!1},{text:"Sastronaut",correct:!0},{text:"Lion",correct:!1},{text:"SasaMan",correct:!1}]},{id:2,question:"SASA wants us to have the heart of a ______?",answers:[{text:"Lion",correct:!0},{text:"Racoon",correct:!1},{text:"Beaver",correct:!1},{text:"Leopard",correct:!1}]},{id:3,question:"Who invented the Heliocentric Telescope?",answers:[{text:"Mr. Obinna",correct:!1},{text:"Mr. Richard",correct:!1},{text:"The Director",correct:!1},{text:"Galileo Galilay",correct:!0}]}],questionNumber:f,setQuestionNumber:x,setTimeOut:d})})]})}),Object(u.jsx)("div",{className:"pyramid",children:Object(u.jsx)("ul",{className:"moneyList",children:S.map((function(e){return Object(u.jsxs)("li",{className:f===e.id?"moneyListItem active":"moneyListItem",children:[Object(u.jsx)("span",{className:"moneyListItemNumber",children:e.id}),Object(u.jsx)("span",{className:"moneyListItemAmount",children:e.amount})]})}))})})]}):Object(u.jsx)(o,{setUsername:a})})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2fc89514.chunk.js.map