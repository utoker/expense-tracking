(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(6)),s=n(3),r=n(1),i=(n(15),n(16),n(0)),u=function(e){var t=e.className,n=e.children,a="card "+t;return Object(i.jsx)("div",{className:a,children:n})},o=(n(18),function(e){var t=e.onFilterChange,n=e.value;return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:n,onChange:function(e){return t(e.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})}),j=(n(19),function(e){var t=e.date,n=t.toLocaleDateString("en-US",{month:"long"}),a=t.toLocaleDateString("en-US",{day:"2-digit"}),c=t.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:n}),Object(i.jsx)("div",{className:"expense-date__year",children:c}),Object(i.jsx)("div",{className:"expense-date__day",children:a})]})}),d=(n(20),function(e){var t=e.title,n=e.amount,a=e.date;return Object(i.jsxs)(u,{className:"expense-item",children:[Object(i.jsx)(j,{date:a}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"expense-item__description",children:t}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",n]})]})]})}),b=(n(21),function(e){var t=e.filteredExpenses;return 0===t.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(i.jsx)("ul",{className:"expenses-list",children:t.map((function(e){return Object(i.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=n(9),v=(n(22),n(23),function(e){var t=e.label,n=e.maxValue,a=e.value,c="0%";return n>0&&(c=Math.round(a/n*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:c}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:t})]})}),O=function(e){var t=e.dataPoints,n=t.map((function(e){return e.value})),a=Math.max.apply(Math,Object(l.a)(n));return Object(i.jsx)("div",{className:"chart",children:t.map((function(e){return Object(i.jsx)(v,{value:e.value,maxValue:a,label:e.label},e.label)}))})},h=function(e){var t,n=e.expenses,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(x.a)(n);try{for(c.s();!(t=c.n()).done;){var l=t.value,s=l.date.getMonth();a[s].value+=l.amount,console.log(a[s].value)}}catch(r){c.e(r)}finally{c.f()}return Object(i.jsx)(O,{dataPoints:a})},m=function(e){var t=e.expenses,n=Object(r.useState)("2021"),a=Object(s.a)(n,2),c=a[0],l=a[1],j=t.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(i.jsx)("li",{children:Object(i.jsxs)(u,{className:"expenses",children:[Object(i.jsx)(o,{onFilterChange:function(e){l(e)},value:c}),Object(i.jsx)(h,{expenses:j}),Object(i.jsx)(b,{filteredExpenses:j})]})})},p=n(2),f=(n(24),n(25),function(e){var t=e.onSaveExpenseData,n=e.onCancel,a=Object(r.useState)({enteredTitle:"",enteredAmount:"",enteredDate:""}),c=Object(s.a)(a,2),l=c[0],u=c[1],o={title:l.enteredTitle,amount:+l.enteredAmount,date:new Date(l.enteredDate)};return Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(o),n(),u({enteredTitle:"",enteredAmount:"",enteredDate:""})},children:Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"",children:"Title"}),Object(i.jsx)("input",{value:l.enteredTitle,type:"text",onChange:function(e){return u((function(t){return Object(p.a)(Object(p.a)({},t),{},{enteredTitle:e.target.value})}))}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"",children:"Amount"}),Object(i.jsx)("input",{value:l.enteredAmount,type:"number",min:"0.01",step:"0.01",onChange:function(e){return u((function(t){return Object(p.a)(Object(p.a)({},t),{},{enteredAmount:e.target.value})}))}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"",children:"Date"}),Object(i.jsx)("input",{value:l.enteredDate,type:"date",min:"2019-01-01",max:"2022-12-31",onChange:function(e){return u((function(t){return Object(p.a)(Object(p.a)({},t),{},{enteredDate:e.target.value})}))}})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"submit",children:"Add Expense"}),Object(i.jsx)("button",{onClick:function(){return n()},children:"Cancel"})]})]})})}),_=function(e){var t=e.onAddExpense,n=Object(r.useState)(!1),a=Object(s.a)(n,2),c=a[0],l=a[1];return Object(i.jsx)("div",{className:"new-expense",children:c?Object(i.jsx)(f,{onSaveExpenseData:function(e){var n=Object(p.a)(Object(p.a)({},e),{},{id:Math.random().toString()});t(n)},onCancel:function(){l(!1)}}):Object(i.jsx)("button",{onClick:function(){return l(!0)},children:"Add New Expense"})})},N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var g=function(){var e=Object(r.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(m,{expenses:n})]})};c.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.1ed25678.chunk.js.map