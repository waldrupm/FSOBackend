(window.webpackJsonpfullstackopen=window.webpackJsonpfullstackopen||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),u=n(14),i=n(2),l=n(3),f=n.n(l),s=function(){return f.a.get("/notes").then(function(t){return t.data})},m=function(t){return f.a.post("/notes",t).then(function(t){return t.data})},p=function(t,e){return f.a.put("".concat("/notes","/").concat(t),e).then(function(t){return t.data})},b=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"Make Unimportant":"Make Important";return a.a.createElement("li",{className:"note"},e.content,a.a.createElement("button",{onClick:n},r))},O=function(t){var e=t.message;return null===e?null:a.a.createElement("div",{className:"error"},e)};function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var v=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(""),l=Object(i.a)(c,2),f=l[0],v=l[1],g=Object(r.useState)(!0),j=Object(i.a)(g,2),h=j[0],E=j[1],y=Object(r.useState)(null),w=Object(i.a)(y,2),k=w[0],S=w[1];Object(r.useEffect)(function(){s().then(function(t){o(t)})},[]);var P=h?n:n.filter(function(t){return!0===t.important}),D=function(t){var e=n.find(function(e){return e.id===t}),r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach(function(e){Object(u.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e,{important:!e.important});p(t,r).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(r){S("Note ".concat(e.content," was already removed from the server")),setTimeout(function(){S(null)},5e3),o(n.filter(function(e){return e.id!==t}))})};return a.a.createElement("div",null,a.a.createElement("h1",null,"Notes"),a.a.createElement(O,{message:k}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return E(!h)}},"Show ",h?"Only Important":"All")),a.a.createElement("ul",null,P.map(function(t){return a.a.createElement(b,{key:t.id,note:t,toggleImportance:function(){return D(t.id)}})})),a.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};m(e).then(function(t){o(n.concat(t)),v("")})}},a.a.createElement("input",{value:f,onChange:function(t){console.log(t.target.value),v(t.target.value)}}),a.a.createElement("button",{type:"submit"},"save")))};n(37);c.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c586a01c.chunk.js.map