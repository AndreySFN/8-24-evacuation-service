(this["webpackJsonp8-24-evacuation-service"]=this["webpackJsonp8-24-evacuation-service"]||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){"use strict";t.r(c);var n=t(1),i=t.n(n),a=t(16),s=t.n(a),r=(t(22),t(23),t(7)),l=t(0),j=function(){return Object(l.jsxs)("ul",{className:"nav",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/",children:"\u0433\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/prices",children:"\u0446\u0435\u043d\u044b"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/contacts",children:"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})},o=t.p+"static/media/header-image.2faa2092.svg",A="8 (800) 555-35-35",d="tel:".concat(A),g=function(){return Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("img",{className:"header__image",src:o,alt:"8.24"}),Object(l.jsxs)("div",{className:"header__info",children:[Object(l.jsxs)("div",{className:"header__title-organization",children:["\u0421\u043b\u0443\u0436\u0431\u0430 \u044d\u0432\u0430\u043a\u0443\u0430\u0446\u0438\u0438\xa0",Object(l.jsx)("div",{children:'"8.24"'})]}),Object(l.jsx)("a",{className:"header__phone-number",href:d,children:A})]})]}),Object(l.jsx)(j,{})]})},b=t(2),f=t(10),h=(t(30),function(){var e=Object(n.useState)(""),c=Object(f.a)(e,2),t=c[0],i=c[1],a=Object(n.useState)(!1),s=Object(f.a)(a,2),r=s[0],j=s[1],o=Object(n.useState)(""),A=Object(f.a)(o,2),d=A[0],g=A[1],b=function(e){g(""),i(e.target.value)},h=function(){return"ok"===window.jivo_api.startCall(t.replace(/^8/g,"+7")).result?j(!0):g("\u041a\u0430\u0436\u0435\u0442\u0441\u044f, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u0430."),!1};return Object(l.jsxs)("div",{id:"recall",children:[r?Object(l.jsx)("span",{id:"recall_success",children:"\u041c\u044b \u0443\u0436\u0435 \u043f\u0435\u0440\u0435\u0437\u0432\u0430\u043d\u0438\u0432\u0430\u0435\u043c \u0432\u0430\u043c!"}):Object(l.jsxs)("div",{className:"recall_form",children:[Object(l.jsx)("input",{id:"recall_input",onChange:b,placeholder:"+7 (___) ___-__-__",value:t}),Object(l.jsx)("button",{id:"recall_submit",onClick:h,children:"\u0417\u0410\u041a\u0410\u0417\u0410\u0422\u042c \u0417\u0412\u041e\u041d\u041e\u041a"})]}),Object(l.jsx)("div",{className:"errorMessage",children:d})]})}),U=(t(31),t(32),function(e){return Object(l.jsxs)("div",{className:"product_card",children:[Object(l.jsx)("img",{src:e.imageUrl,className:"product_card__img"}),Object(l.jsx)("div",{className:"product_card__title",children:e.title}),Object(l.jsxs)("div",{className:"product_card__price",children:["\u043e\u0442 ",e.price," \u0440\u0443\u0431."]})]})}),m=t.p+"static/media/NoImg.ef336ee1.png",p=function(){return Object(l.jsxs)("div",{id:"main_page",children:[Object(l.jsx)("div",{className:"main_page__recall_container",children:Object(l.jsx)(h,{})}),Object(l.jsxs)("div",{id:"main_content",children:[Object(l.jsxs)("div",{id:"main_content__products",children:[Object(l.jsx)(U,{imageUrl:m,title:"\u044d\u0432\u0430\u043a\u0443\u0430\u0446\u0438\u044f \u044d\u0432\u0430\u043a\u0443\u0430\u0442\u043e\u0440\u0430",price:"213125"}),Object(l.jsx)(U,{imageUrl:m,title:"\u0443\u043d\u0435\u0441\u0442\u0438 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u0440\u0443\u043a\u0430\u0445",price:"213125"}),Object(l.jsx)(U,{imageUrl:m,title:"\u043a\u0442\u043e \u043d\u0435 \u043f\u043e\u043d\u044f\u043b \u0442\u043e\u0442 \u043f\u043e\u0439\u043c\u0451\u0442",price:"213125"}),Object(l.jsx)(U,{imageUrl:m,title:"\u0438\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u044d\u0432\u0430\u043a\u0443\u0430\u0442\u043e\u0440\u0430",price:"213125"})]}),Object(l.jsx)("button",{id:"all_price_button",children:Object(l.jsx)("a",{href:"/prices",children:"\u0421\u041c\u041e\u0422\u0420\u0415\u0422\u042c \u0412\u0421\u0415 \u0426\u0415\u041d\u042b"})})]})]})},O=(t(33),t.p+"static/media/whatsapp_logo.b95633c7.png"),x=function(){return Object(l.jsxs)("div",{id:"contacts",children:[Object(l.jsxs)("div",{className:"contacts__main_info",children:[Object(l.jsxs)("div",{className:"contacts__main_info__contacts_info",children:[Object(l.jsx)("a",{href:d,className:"contacts__main_info__contacts_info__phone",children:A}),Object(l.jsxs)("div",{className:"contacts__main_info__contacts_info__logo_container",children:[Object(l.jsx)("a",{href:d,children:Object(l.jsx)("img",{src:"data:image/png;base64,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"})}),Object(l.jsx)("a",{href:"https://tlgg.ru/yargash",children:Object(l.jsx)("img",{src:"data:image/png;base64,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"})}),Object(l.jsx)("a",{href:"https://wa.me/79162894638",children:Object(l.jsx)("img",{src:O})})]})]}),Object(l.jsxs)("div",{className:"contacts__main_info__map",children:[Object(l.jsx)("iframe",{className:"contacts__main_info__yandex_map",src:"https://yandex.ru/map-widget/v1/?um=constructor%3A5dc691de634d55e463729450c06453ee9a5acf81779af39640d3fda1fe16f925&source=constructor"}),Object(l.jsx)("div",{children:"\u0443\u043b. \u041f\u0443\u0448\u043a\u0438\u043d\u0430 \u0434\u043e\u043c \u041a\u043e\u043b\u043e\u043a\u043e\u043a\u043e\u043a\u043e"})]})]}),Object(l.jsx)("div",{className:"contacts__recall_container",children:Object(l.jsx)(h,{})})]})},I=t.p+"static/media/UnderConstruction.0afedb56.png",v=function(){return Object(l.jsxs)("div",{style:{width:"100%",textAlign:"center",backgroundColor:"antiquewhite",minHeight:"80%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(l.jsx)("img",{src:I,style:{width:"30%",minWidth:"250px"}}),Object(l.jsx)("br",{}),"\u041f\u043e \u0432\u0441\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 ",Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:d,style:{color:"black"},children:A})]})};var T=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(g,{}),Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/prices",component:v}),Object(l.jsx)(b.a,{path:"/contacts",component:x}),Object(l.jsx)(b.a,{path:"/",component:p})]},"content")]})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(T,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d9964d83.chunk.js.map