(this.webpackJsonpkafene=this.webpackJsonpkafene||[]).push([[0],{39:function(e,t,c){},45:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c(1),s=c.n(a),n=c(31),i=c.n(n),l=(c(39),c(7)),d=c(2),j=c(16),o=function(){return!!localStorage.getItem("isUserLoggedIn")&&!!JSON.parse(localStorage.getItem("isUserLoggedIn"))},b=function(e){!0===e?localStorage.setItem("isUserLoggedIn","true"):localStorage.clear("isUserLoggedIn")};var h=function(e){var t=e.path,c=e.Component;return Object(r.jsx)(d.b,{path:t,exact:!0,render:function(e){return o()?Object(r.jsx)(d.a,{to:"/orders"}):Object(r.jsx)(c,Object(j.a)({},e))}})};var x=function(e){var t=e.path,c=e.Component;return Object(r.jsx)(d.b,{path:t,exact:!0,render:function(e){return o()?Object(r.jsx)(c,Object(j.a)({},e)):Object(r.jsx)(d.a,{to:"/"})}})};c(45);var u=Object(d.g)((function(e){var t={orders:!1,products:!1,users:!1};return t[e.location.pathname.slice(1)]=!0,Object(r.jsx)("div",{className:"Topbar",children:Object(r.jsxs)("div",{className:"LeftMenu",children:[Object(r.jsxs)("div",{className:"LogoWrapper",children:[Object(r.jsx)(l.b,{to:"/",children:Object(r.jsx)("img",{src:"https://raw.githubusercontent.com/pawankumargali/kafene/main/images/logo.png",alt:"Logo"})}),Object(r.jsx)("p",{className:"BrandName",children:"Kafene"})]}),o()&&Object(r.jsxs)("nav",{children:[Object(r.jsx)(l.b,{className:t.orders?"MenuItem MenuItemActive":"MenuItem",to:"/orders",children:"Orders"}),Object(r.jsx)(l.b,{className:t.products?"MenuItem MenuItemActive":"MenuItem",to:"/products",children:"Products"}),Object(r.jsx)(l.b,{className:t.users?"MenuItem MenuItemActive":"MenuItem",to:"/users",children:"Users"}),Object(r.jsx)("button",{id:"logout-btn",className:"LogoutBtn",onClick:function(){return b(!1),e.history.push("/")},children:"Logout"})]})]})})})),O=c(5),m=c.n(O),p=c(10),N=c(3),f=c(12),v=c.n(f),y="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1",g=("".concat(y,"/login"),"".concat(y,"/orders")),T="".concat(y,"/products"),w="".concat(y,"/users");"".concat(y,"/users?fullName="),c(65);var S=function(e){var t=Object(a.useState)(""),c=Object(N.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),l=Object(N.a)(i,2),d=l[0],j=l[1],o=function(){var t=Object(p.a)(m.a.mark((function t(c){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),s){t.next=4;break}return alert("username is required"),t.abrupt("return");case 4:if(d){t.next=7;break}return alert("password is required"),t.abrupt("return");case 7:if(s===d){t.next=10;break}return alert("Please enter valid credentials"),t.abrupt("return");case 10:if("abhi"!==(r={username:"abhi",password:"abhi"}).password||"abhi"!==r.username){t.next=16;break}return b(!0),alert("Login Successful"),e.history.push("/"),t.abrupt("return");case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)(a.Fragment,{children:Object(r.jsx)("main",{className:"MainContainer",children:Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:"LoginForm",children:[Object(r.jsx)("h1",{children:"Sign In"}),Object(r.jsx)("input",{className:"InputField",type:"text",name:"username",id:"username",value:s,onChange:function(e){return n(e.target.value)},placeholder:"Enter Username"}),Object(r.jsx)("input",{className:"InputField",type:"password",name:"password",id:"password",value:d,onChange:function(e){return j(e.target.value)},placeholder:"Enter Password"}),Object(r.jsx)("button",{className:"Button",id:"login-btn",onClick:o,children:"Login"})]})})})})};c(66);var k=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(N.a)(n,2),d=i[0],j=i[1],o=Object(a.useState)({New:!0,Packed:!0,InTransit:!0,Delivered:!0}),b=Object(N.a)(o,2),h=b[0],x=b[1],u=Object(a.useState)(0),O=Object(N.a)(u,2),f=O[0],y=O[1],T=function(){var e=Object(p.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(g);case 2:t=e.sent,c=t.data,s(c),j(c),y(c.length),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){T()}),[]);var w=function(e){var t=h;t[e.target.name]=e.target.checked,x(t),console.log(h),S()},S=function(){var e=c.filter((function(e){return h[e.orderStatus]}));j(e),y(e.length)};return Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"PageWrapper",children:[Object(r.jsx)("h1",{className:"MainHeading",children:"Orders"}),Object(r.jsxs)("div",{className:"OrdersWrapper",children:[Object(r.jsxs)("div",{className:"FilterWrapper",children:[Object(r.jsx)("h3",{children:"Filters"}),Object(r.jsxs)("div",{className:"FilterOptions",children:[Object(r.jsxs)("p",{children:["Count:",Object(r.jsx)("span",{id:"count-elt",children:f})]}),Object(r.jsxs)("label",{className:"FilterCheckbox",children:[Object(r.jsx)("input",{type:"checkbox",name:"New",checked:h.New,onChange:w}),"New"]}),Object(r.jsxs)("label",{className:"FilterCheckbox",children:[Object(r.jsx)("input",{type:"checkbox",name:"Packed",checked:h.Packed,onChange:w}),"Packed"]}),Object(r.jsxs)("label",{className:"FilterCheckbox",children:[Object(r.jsx)("input",{type:"checkbox",name:"InTransit",checked:h.InTransit,onChange:w}),"InTransit"]}),Object(r.jsxs)("label",{className:"FilterCheckbox",children:[Object(r.jsx)("input",{type:"checkbox",name:"Delivered",checked:h.Delivered,onChange:w}),"Delivered"]})]})]}),Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsx)("table",{className:"OrderTable",children:Object(r.jsxs)("tbody",{id:"orders-table",children:[Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Customer"}),Object(r.jsx)("th",{children:"Date"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Status"})]}),d.map((function(e,t){var c=e.id,a=e.customerName,s=e.orderDate,n=e.orderTime,i=e.amount,d=e.orderStatus;return Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:Object(r.jsx)(l.b,{to:"/order/".concat(c),style:{textDecoration:"none",color:"inherit"},children:c})}),Object(r.jsx)("td",{className:"PrimaryText",children:a}),Object(r.jsxs)("td",{className:"PrimaryText",children:[s,Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"SecondaryText",children:n})]}),Object(r.jsx)("td",{className:"SecondaryText",children:i}),Object(r.jsx)("td",{className:"PrimaryText",children:d})]},c+""+t)}))]})})})]})]})})};var P=function(e){var t=e.match.params.orderId,c=Object(a.useState)({id:"",customerName:"",orderDate:"",orderTime:"",amount:"",orderStatus:""}),s=Object(N.a)(c,2),n=s[0],i=s[1],l=function(){var e=Object(p.a)(m.a.mark((function e(){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(g,"/").concat(t));case 2:c=e.sent,r=c.data,i(r),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),Object(r.jsx)("div",{style:{width:"50%",marginLeft:"20vw"},children:Object(r.jsx)("table",{className:"OrderTable",children:Object(r.jsxs)("tbody",{id:"orders-table",children:[Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("th",{children:"Detail"}),Object(r.jsx)("th",{children:"Value"})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Order ID"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.id})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Customer Name"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.customerName})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Order Date & Time"}),Object(r.jsxs)("td",{className:"PrimaryText",children:[n.orderDate,Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"SecondaryText",children:n.orderTime})]})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Amount"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.amount})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Status"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.orderStatus})]})]})})})},C=c(15);c(67);var I=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(N.a)(n,2),d=i[0],j=i[1],o=Object(a.useState)({expired:!1,low_stock:!1}),b=Object(N.a)(o,2),h=b[0],x=b[1],u=Object(a.useState)(0),O=Object(N.a)(u,2),f=O[0],y=O[1],g=function(){var e=Object(p.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(T);case 2:t=e.sent,c=t.data,s(c),j(c),y(c.length),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){g()}),[]);var w=function(e){var t=h;t[e.target.name]=e.target.checked,x(t),console.log("Active Filters",h),S()},S=function(){if(!h.expired&&!h.low_stock)return j(c),void y(c.length);var e,t=[],r=Object(C.a)(c);try{for(r.s();!(e=r.n()).done;){var a=e.value,s=(a.expiryDate,a.stock);if(!0===h.expired){var n=new Date;new Date(a.expiryDate)<n&&t.push(a)}!0===h.low_stock&&!isNaN(Number(s))&&Number(s)<100&&t.push(a)}}catch(i){r.e(i)}finally{r.f()}j(t),y(t.length)};return Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"PageWrapper",children:[Object(r.jsx)("h1",{className:"MainHeading",children:"Products"}),Object(r.jsxs)("div",{className:"OrdersWrapper",children:[Object(r.jsxs)("div",{className:"FilterWrapper",children:[Object(r.jsx)("h3",{children:"Filters"}),Object(r.jsxs)("div",{className:"FilterOptions",children:[Object(r.jsxs)("p",{children:["Count:",Object(r.jsx)("span",{id:"count-elt",children:f})]}),Object(r.jsxs)("label",{className:"FilterCheckbox",children:[Object(r.jsx)("input",{type:"checkbox",name:"expired",checked:h.expired,onChange:w}),"Expired"]}),Object(r.jsxs)("label",{className:"FilterCheckbox",children:[Object(r.jsx)("input",{type:"checkbox",name:"low_stock",checked:h.low_stock,onChange:w}),"Low Stock"]})]})]}),Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsx)("table",{className:"OrderTable",children:Object(r.jsxs)("tbody",{id:"products-table",children:[Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Product Name"}),Object(r.jsx)("th",{children:"Product Brand"}),Object(r.jsx)("th",{style:{minWidth:"100px"},children:"Expiry Date"}),Object(r.jsx)("th",{children:"Unit Price"}),Object(r.jsx)("th",{children:"Stock"})]}),d.map((function(e,t){var c=e.id,a=e.medicineName,s=e.medicineBrand,n=e.stock,i=e.unitPrice,d=e.expiryDate;return Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:Object(r.jsx)(l.b,{to:"/product/".concat(c),style:{textDecoration:"none",color:"inherit"},children:c})}),Object(r.jsx)("td",{className:"PrimaryText",children:a}),Object(r.jsx)("td",{className:"SecondaryText",children:s}),Object(r.jsx)("td",{className:"PrimaryText",children:d}),Object(r.jsx)("td",{className:"SecondaryText",children:i}),Object(r.jsx)("td",{className:"SecondaryText",children:n})]},c+""+t)}))]})})})]})]})})};var D=function(e){var t=e.match.params.productId,c=Object(a.useState)({id:"",medicineName:"",medicineBrand:"",stock:"",unitPrice:"",expiryDate:"",prescriptionRequired:""}),s=Object(N.a)(c,2),n=s[0],i=s[1],l=function(){var e=Object(p.a)(m.a.mark((function e(){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(T,"/").concat(t));case 2:c=e.sent,r=c.data,i(r),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),Object(r.jsx)("div",{style:{width:"50%",marginLeft:"20vw"},children:Object(r.jsx)("table",{className:"OrderTable",children:Object(r.jsxs)("tbody",{id:"orders-table",children:[Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("th",{children:"Detail"}),Object(r.jsx)("th",{children:"Value"})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Product ID"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.id})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Medicine Name"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.medicineName})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Medicine Brand"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.medicineBrand})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Stock"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.stock})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Unit Price"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.unitPrice})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Expiry Date"}),Object(r.jsx)("td",{className:"PrimaryText",children:n.expiryDate})]}),Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:"Prescription Required"}),Object(r.jsx)("td",{className:"PrimaryText",children:1==n.prescriptionRequired?"Yes":"No"})]})]})})})},R=c(33);c(68);var F=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(N.a)(n,2),l=i[0],d=i[1],j=Object(a.useState)(""),o=Object(N.a)(j,2),b=o[0],h=o[1],x=function(){var e=Object(p.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(w);case 2:t=e.sent,c=t.data,s(c),d(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){x()}),[]);var u=!1,O=function(){var e,t=[],r=Object(C.a)(c);try{for(r.s();!(e=r.n()).done;){var a=e.value;a.fullName.toLowerCase().includes(b.toLowerCase())&&t.push(a)}}catch(s){r.e(s)}finally{r.f()}d(t)};return Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"PageWrapper",children:[Object(r.jsx)("h1",{className:"MainHeading",children:"Users"}),Object(r.jsx)("form",{id:"searchForm",onSubmit:function(){Object(R.a)("submitAction"),u=!0},children:Object(r.jsxs)("div",{className:"SearchBoxDiv",children:[Object(r.jsx)("input",{type:"text",className:"SearchBox",name:"search-text",id:"search-text",placeholder:"Search By Name",value:b,onChange:function(e){h(e.target.value),b.length<1&&u?alert("Please enter at least 2 characters"):O()}}),Object(r.jsx)("button",{className:"ResetBtn",id:"reset-search",onClick:function(){h(""),d(c)},children:"Reset"})]})}),Object(r.jsx)("div",{className:"OrdersWrapper",children:Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsx)("table",{className:"OrderTable",children:Object(r.jsxs)("tbody",{id:"users-table",children:[Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"User Avatar"}),Object(r.jsx)("th",{children:"Full Name"}),Object(r.jsx)("th",{children:"DoB"}),Object(r.jsx)("th",{children:"Gender"}),Object(r.jsx)("th",{children:"Current Location"})]}),l.map((function(e,t){var c=e.id,a=e.profilePic,s=e.fullName,n=e.gender,i=e.dob,l=e.currentCity,d=e.currentCountry;return Object(r.jsxs)("tr",{className:"TableRow",children:[Object(r.jsx)("td",{className:"SecondaryText",children:c}),Object(r.jsx)("td",{className:"PrimaryText",children:Object(r.jsx)("img",{src:a,alt:"user-profile-pic"})}),Object(r.jsx)("td",{className:"SecondaryText",children:s}),Object(r.jsx)("td",{className:"PrimaryText",children:"".concat(i.split("-")[0]," ").concat(i.split("-")[1],", ").concat(i.split("-")[2])}),Object(r.jsx)("td",{className:"SecondaryText",children:n}),Object(r.jsxs)("td",{className:"SecondaryText",children:[l,", ",d]})]},c+""+t)}))]})})})})]})})},L=function(){return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(u,{}),Object(r.jsxs)(d.d,{children:[Object(r.jsx)(h,{path:"/",exact:!0,Component:S}),Object(r.jsx)(x,{exact:!0,path:"/orders",Component:k}),Object(r.jsx)(x,{exact:!0,path:"/order/:orderId",Component:P}),Object(r.jsx)(x,{exact:!0,path:"/products",Component:I}),Object(r.jsx)(x,{exact:!0,path:"/product/:productId",Component:D}),Object(r.jsx)(x,{exact:!0,path:"/users",Component:F})]})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),r(e),a(e),s(e),n(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),M()}},[[69,1,2]]]);
//# sourceMappingURL=main.de2b3ef3.chunk.js.map