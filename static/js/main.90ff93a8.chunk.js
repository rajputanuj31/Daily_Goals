(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r);n(14);var i=function(){return l.a.createElement("div",{className:"Header"},"Complete Your Daily Goals")},o=n(4),u=n(1),s=function(e){var t=e.title,n=e.description,a=e.deleteTask,r=e.index;return l.a.createElement("div",{className:"Task"},l.a.createElement("div",null,l.a.createElement("p",null,t),l.a.createElement("span",null,n)),l.a.createElement("button",{onClick:function(){return a(r)}},"-"))},m=function(){var e=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[],t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),m=Object(u.a)(i,2),d=m[0],p=m[1],E=Object(a.useState)(""),f=Object(u.a)(E,2),g=f[0],v=f[1],b=function(e){var t=r.filter(function(t,n){return n!==e});c(t)};return Object(a.useEffect)(function(){localStorage.setItem("tasks",JSON.stringify(r))},[r]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Daily Goals"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0!==d.length&&0!==g.length?(c([].concat(Object(o.a)(r),[{title:d,description:g}])),p(""),v("")):0===d.length&&0===g.length?alert("Please Fill all Fields"):0===g.length?alert("Please Enter the some description"):alert("Please Enter the Title")}},l.a.createElement("input",{type:"text",placeholder:"Title",value:d,onChange:function(e){return p(e.target.value)}}),l.a.createElement("textarea",{placeholder:"Description",value:g,onChange:function(e){return v(e.target.value)}}),l.a.createElement("button",{type:"submit"},"ADD")),r.map(function(e,t){return l.a.createElement(s,{key:t,title:e.title,description:e.description,deleteTask:b,index:t})}))};var d=function(){return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(m,null))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)))},5:function(e,t,n){e.exports=n(16)}},[[5,2,1]]]);
//# sourceMappingURL=main.90ff93a8.chunk.js.map