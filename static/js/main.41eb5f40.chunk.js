(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={formWrapper:"ContactForm_formWrapper__2rbxI",form:"ContactForm_form__1Jit1",label:"ContactForm_label__vsk8f",input:"ContactForm_input__2H_IE",button:"ContactForm_button__21P1M"}},function(e,t,n){e.exports={item:"ContactList_item__2xhJZ",text:"ContactList_text__2IE4G",button:"ContactList_button__3v1lV"}},,,function(e,t,n){e.exports={App:"App_App__3Ragq",title:"App_title__3ZgcL"}},,function(e,t,n){e.exports={label:"Filter_label__2hRFt",input:"Filter_input__1JrdG"}},,function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(17),n(12)),i=n(2),l=n(7),u=n.n(l),b=n(3),m=n.n(b),j=n(21),d=n(0);var p=function(e){var t=e.formSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],b=l[1],p=Object(j.a)(),f=Object(j.a)(),h=function(e){switch(e.target.name){case"name":o(e.target.value);break;case"number":b(e.target.value);break;default:return}},O=function(){o(""),b("")};return Object(d.jsx)("div",{className:m.a.formWrapper,children:Object(d.jsxs)("form",{className:m.a.form,onSubmit:function(e){e.preventDefault();var n={id:Object(j.a)(),name:r,number:u};t(n),O()},children:[Object(d.jsxs)("label",{className:m.a.label,htmlFor:p,children:["Name",Object(d.jsx)("input",{id:p,className:m.a.input,value:r,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:h})]}),Object(d.jsxs)("label",{className:m.a.label,htmlFor:f,children:["Number",Object(d.jsx)("input",{id:f,className:m.a.input,type:"tel",value:u,name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:h})]}),Object(d.jsx)("button",{className:m.a.button,children:"Add contact"})]})})},f=n(4),h=n.n(f),O=function(e){var t=e.getContacts,n=e.deleteContact;return Object(d.jsx)("div",{className:h.a.listWrapper,children:Object(d.jsx)("ul",{className:h.a.list,children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(d.jsxs)("li",{className:h.a.item,children:[Object(d.jsxs)("p",{className:h.a.text,children:[t,":"]}),Object(d.jsx)("p",{className:h.a.text,children:a}),Object(d.jsx)("button",{className:h.a.button,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})})},_=n(9),x=n.n(_);var v=function(e){var t=e.filter,n=e.onFilterChange;return Object(d.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(d.jsx)("input",{className:x.a.input,type:"text",name:"name",value:t,onChange:n})]})},C=n(11);var N=function(){var e=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]}("allContacts",C),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1],m=function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(d.jsxs)("div",{className:u.a.App,children:[Object(d.jsx)("h1",{className:u.a.title,children:"Phonebook"}),Object(d.jsx)(p,{formSubmit:function(e){if(n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("This contact has already been added to the list");c([e].concat(Object(s.a)(n)))}}),Object(d.jsx)("h2",{className:u.a.title,children:"Contacts"}),Object(d.jsx)(v,{filter:l,onFilterChange:function(e){b(e.target.value)}}),Object(d.jsx)(O,{getContacts:m,deleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.41eb5f40.chunk.js.map