(this.webpackJsonpledmebe=this.webpackJsonpledmebe||[]).push([[0],{102:function(e,t,c){},107:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},119:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(43),r=c.n(i),s=(c(98),c(6)),o=c(12),l=c(46),d=(c(120),l.a.initializeApp({apiKey:"AIzaSyD_AD7naKgQmyj7cnwx8Z7xU4mORCS3REA",authDomain:"ledmebe-d2f9f.firebaseapp.com",projectId:"ledmebe-d2f9f",storageBucket:"ledmebe-d2f9f.appspot.com",messagingSenderId:"772127648473",appId:"1:772127648473:web:41d89207dfa2f07977acc8",measurementId:"G-FS571ZSSXX"}));function j(){return l.a.firestore(d)}var b=c(20),u=c(21),O=c(34),m=c(2),h=Object(a.createContext)(),x=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(o.a)(c,2),i=n[0],r=n[1],l=Object(a.useState)(0),d=Object(o.a)(l,2),j=d[0],b=d[1];return Object(m.jsx)(h.Provider,{value:{cart:i,setCart:r,addToCart:function(e,t){var c=i.find((function(t){return t.id===e.id}));c?(i.map((function(e){return e.id===c.id?Object(s.a)({},e.quantity+=t):e})),b(j+t)):(r([].concat(Object(O.a)(i),[Object(s.a)(Object(s.a)({},e),{},{quantity:t})])),b(j+t))},deleteItem:function(e){console.log(e.quantity),b(j-e.quantity);var t=i.filter((function(t){return t.id!==e.id}));r(t)},quantyItems:j,totalPrice:function(){var e=0;return 0!==i.length?(i.forEach((function(t){e+=t.price*t.quantity})),e):e},setQuantyItems:b},children:t})},f=c.p+"static/media/Logo.66280fa6.jpg",p=(c(102),function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"inicio-container",children:[Object(m.jsx)(b.c,{to:"/productos",children:Object(m.jsx)("img",{className:"inicio-logo ",src:f,alt:"logo"})}),Object(m.jsx)("h2",{className:"inicio-titulo",children:"Dise\xf1os novedosos de l\xe1mparas led e iluminarias\ud83d\udca1 "})]})})}),g=c(131),v=c(126),y=c(132),N=c(129),C=c(87);c(84);var k=function(){var e=Object(a.useContext)(h),t=e.cart,c=e.quantyItems;return Object(m.jsx)(m.Fragment,{children:0!==t.length&&Object(m.jsxs)(b.b,{to:"/cart",className:"widget-box",children:[Object(m.jsx)(C.a,{size:50,color:"red"}),Object(m.jsxs)("span",{className:"cart-widget",children:[" ",c]})]})})};c(107);var I=function(){return Object(m.jsx)(g.a,{bg:"light",expand:"lg",children:Object(m.jsxs)(v.a,{children:[Object(m.jsx)(g.a.Brand,{children:Object(m.jsx)(b.c,{className:"link",to:"/",children:Object(m.jsx)("img",{className:"logo",src:f,alt:"logo"})})}),Object(m.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(y.a,{className:"me-auto",children:[Object(m.jsx)(y.a.Link,{as:b.c,className:"link",to:"/",children:"Inicio"}),Object(m.jsx)(y.a.Link,{as:b.c,className:"link",to:"/productos",children:"Productos"}),Object(m.jsxs)(N.a,{title:"Categorias",id:"basic-nav-dropdown",children:[Object(m.jsx)(N.a.Item,{children:Object(m.jsx)(b.c,{className:"link",to:"/category/RGB",children:"RGB"})}),Object(m.jsx)(N.a.Item,{children:Object(m.jsx)(b.c,{className:"link",to:"/category/C\xe1lida",children:"C\xe1lidas"})}),Object(m.jsx)(N.a.Divider,{}),Object(m.jsx)(N.a.Item,{children:Object(m.jsx)(b.c,{className:"link",to:"/cart",children:"Cart"})})]}),Object(m.jsx)(k,{})]})})]})})},S=c(133),E=c(91),z=(c(110),function(e){var t=e.id,c=e.name,a=e.price,n=e.img;e.stock,e.luz;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{style:{width:"18rem",margin:"3em"},children:[Object(m.jsx)(S.a.Img,{variant:"top",src:n,className:"img-size"}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsx)(S.a.Title,{children:c}),Object(m.jsxs)(S.a.Text,{children:["Precio: ",a]}),Object(m.jsx)(b.c,{className:"item-link",to:"/item/".concat(t),children:Object(m.jsx)(E.a,{variant:"outline-info",children:"Ver detalle"})})]})]},t)})}),T=c(127),q=(c(111),function(e){var t=e.items;return Object(m.jsx)("div",{className:"detail-products",children:t?t.map((function(e){return Object(m.jsx)(z,{id:e.id,name:e.name,price:e.price,img:e.img},e.id)})):Object(m.jsx)(T.a,{className:"spinner",animation:"border",variant:"secondary"})})}),w=(c(112),function(e){var t=e.products,c=Object(a.useState)(t),n=Object(o.a)(c,2),i=n[0],r=n[1],l=Object(u.f)().id,d=j().collection("Productos");return Object(a.useEffect)((function(){l?d.where("luz","==",l).get().then((function(e){0===e.size&&console.log("No Hay resultados"),r(e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())})))})).catch((function(e){console.log("Error al traer los items",e)})):d.get().then((function(e){0===e.size&&console.log("No Hay resultados"),r(e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())})))})).catch((function(e){console.log("Error al traer los items",e)}))}),[l]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h1",{style:{color:"#7D2181",fontSize:"2em"},children:"Led Me BE"}),Object(m.jsx)("h3",{children:"Dise\xf1os novedosos de l\xe1mparas led e iluminarias\ud83d\udca1"}),Object(m.jsx)("h4",{children:"lista de productos"})]}),Object(m.jsx)("div",{className:"products",children:Object(m.jsx)(q,{items:i})})]})}),L=c(53),D=(c(113),function(e){var t=e.handleMas,c=e.handleMenos,a=e.handleOnAdd,n=e.stock,i=e.count;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{children:["Stock: ",Object(m.jsx)("strong",{children:n})]}),Object(m.jsx)(E.a,{variant:"outline-secondary m-2",onClick:c,children:"-"}),i,Object(m.jsx)(E.a,{variant:"outline-secondary m-2",onClick:t,children:"+"})]}),Object(m.jsx)("div",{children:Object(m.jsx)(E.a,{variant:"outline-warning m-3",onClick:a,children:"Agregar al carrito"})})]})}),G=(c(114),function(e){var t=e.detail,c=Object(a.useState)(),n=Object(o.a)(c,2),i=n[0],r=n[1],s=Object(a.useState)(1),l=Object(o.a)(s,2),d=l[0],j=l[1],u=Object(a.useContext)(h),O=u.cart,x=u.addToCart;Object(a.useEffect)((function(){if(i||O.length){if(O.length){var e=O.find((function(e){return e.id===t.id}));r(e?e.stock-e.quantity:t.stock)}}else r(t.stock)}),[i]);return Object(m.jsx)("div",{children:t.stock&&Object(m.jsxs)("div",{className:"itemDetail-container",children:[Object(m.jsx)("aside",{children:Object(m.jsx)("img",{src:null===t||void 0===t?void 0:t.img,className:"detail-img",alt:null===t||void 0===t?void 0:t.name})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"itemDetail-title",children:Object(m.jsxs)("h2",{className:"m-2",children:[" ",Object(m.jsx)(b.b,{to:"/productos",className:"left-arrow",children:Object(m.jsx)(L.a,{color:"#0dcaf2"})}),null===t||void 0===t?void 0:t.name," "]})}),Object(m.jsx)("hr",{className:"detail-line"}),Object(m.jsxs)("p",{className:"m-5",children:[" ","L\xe1mpara led manejada con control ",null===t||void 0===t?void 0:t.control," y una luz de tipo ",null===t||void 0===t?void 0:t.luz," "]}),0!==i&&Object(m.jsx)(D,{handleOnAdd:function(){r(i-d),x(t,d),j(1)},handleMas:function(){i>d?j(d+1):console.log("Sin stock")},handleMenos:function(){d>1?j(d-1):console.log("...")},stock:i,count:d}),0!==O.length&&Object(m.jsx)(b.c,{className:"itemDetail-link",to:"/cart",children:Object(m.jsx)(E.a,{variant:"outline-secondary",size:"sm",children:"Ver Compra"})})]})]})})}),P=c(82),A=(c(115),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(u.f)().id;return Object(a.useEffect)((function(){j().collection("Productos").doc(i).get().then((function(e){0===e.size&&console.log("No Hay resultados"),n(Object(s.a)(Object(s.a)({},e.data()),{},{id:i}))})).catch((function(e){console.log("Error al traer los items",e)}))}),[i]),Object(m.jsxs)("div",{className:"container",children:[c.id&&0!==c.stock&&Object(m.jsx)(G,{detail:c}),!c.stock&&0!==c.stock&&Object(m.jsx)(T.a,{className:"spinner",animation:"border",variant:"secondary"}),0===c.stock&&Object(m.jsxs)("div",{className:"container-sinstock",children:[Object(m.jsx)(P.a,{variant:"danger",className:"alert-danger",children:"Producto sin stock"},"2"),Object(m.jsx)(b.b,{to:"/productos",className:"left-arrow",children:Object(m.jsx)(L.a,{size:50,color:"#0dcaf2"})})]})]})}),F=c(10),B=c(13),M=c(9),R=function(e){var t=document.querySelector(e).offsetTop;window.scrollTo(0,t)},V=c(130),H=c(128),Q=c(92),J=function(e){var t=e.handleChange,c=e.handleBuy,n=e.handleSetAlert,i=e.handleCheckEmail,r=Object(a.useState)(!1),s=Object(o.a)(r,2),l=s[0],d=s[1],j=Object(a.useContext)(h).cart;return Object(m.jsx)("div",{className:"m-5",children:Object(m.jsxs)(V.a,{noValidate:!0,validated:l,onSubmit:function(e){var t=e.currentTarget;e.preventDefault(),!1===t.checkValidity()?(e.stopPropagation(),n(!0,"Completa todos los campos")):!0===t.checkValidity()&&(i()?j.length?(c(),n(!1,"")):n(!0,"No agregaste productos"):n(!0,"Los email no coinciden")),d(!0)},children:[Object(m.jsxs)(H.a,{className:"mb-3",children:[Object(m.jsxs)(V.a.Group,{as:Q.a,controlId:"formGridName",children:[Object(m.jsx)(V.a.Label,{children:"Nombre"}),Object(m.jsx)(V.a.Control,{required:!0,type:"text",placeholder:"Nombre",onChange:t,name:"nombre"})]}),Object(m.jsxs)(V.a.Group,{as:Q.a,controlId:"formGridApellido",children:[Object(m.jsx)(V.a.Label,{children:"Apellido"}),Object(m.jsx)(V.a.Control,{required:!0,type:"text",placeholder:"Apellido",name:"apellido",onChange:t})]})]}),Object(m.jsxs)(H.a,{className:"mb-3",children:[Object(m.jsxs)(V.a.Group,{as:Q.a,controlId:"formGridEmail",children:[Object(m.jsx)(V.a.Label,{children:"Email"}),Object(m.jsx)(V.a.Control,{required:!0,type:"email",placeholder:"Ingresar email",name:"email",onChange:t})]}),Object(m.jsxs)(V.a.Group,{as:Q.a,controlId:"formGridEmail2",children:[Object(m.jsx)(V.a.Label,{children:"Repetir email"}),Object(m.jsx)(V.a.Control,{required:!i(),isInvalid:!i(),type:"email2",placeholder:"Repetir email",name:"email2",onChange:t}),Object(m.jsx)(V.a.Control.Feedback,{type:"invalid",children:"Los email deben coincidir."})]}),Object(m.jsxs)(V.a.Group,{as:Q.a,controlId:"formGridAddress1",children:[Object(m.jsx)(V.a.Label,{children:"Direccion"}),Object(m.jsx)(V.a.Control,{required:!0,placeholder:"Nazca 2354",name:"direccion",onChange:t})]})]}),Object(m.jsxs)(H.a,{className:"mb-3",children:[Object(m.jsxs)(V.a.Group,{as:Q.a,controlId:"formGridCity",children:[Object(m.jsx)(V.a.Label,{children:"Localidad"}),Object(m.jsx)(V.a.Control,{required:!0,name:"localidad",onChange:t})]}),Object(m.jsxs)(V.a.Group,{as:Q.a,controlId:"formGridPhone",children:[Object(m.jsx)(V.a.Label,{children:"Tel\xe9fono"}),Object(m.jsx)(V.a.Control,{type:"number",placeholder:"Telefono",name:"telefono",onChange:t,required:!0})]})]}),Object(m.jsx)(E.a,{type:"submit",id:"sendOrder",children:"Enviar Orden"})]})})},K=(c(116),["control","img","luz","stock"]),X=function(){var e,t=Object(a.useContext)(h),c=t.cart,n=t.setCart,i=t.totalPrice,r=t.setQuantyItems,d=Object(a.useState)(),b=Object(o.a)(d,2),u=b[0],O=b[1],x=Object(a.useState)(""),f=Object(o.a)(x,2),p=f[0],g=f[1],v=Object(a.useState)(),y=Object(o.a)(v,2),N=y[0],C=y[1],k=Object(a.useState)({nombre:"",apellido:"",email:"",email2:"",direccion:"",localidad:"",telefono:""}),I=Object(o.a)(k,2),S=I[0],E=I[1],z=[],T=[],q=Object(M.a)(c);try{for(q.s();!(e=q.n()).done;){var w=e.value,L=(w.control,w.img,w.luz,w.stock,Object(F.a)(w,K));z.push(L)}}catch(Q){q.e(Q)}finally{q.f()}var D=j(),G=D.batch(),A=D.collection("compra"),V=D.collection("Productos"),H={buyer:S,items:z,date:l.a.firestore.Timestamp.fromDate(new Date),total:i()};return Object(a.useEffect)((function(){!u&&N?R(".alert-compraID"):u&&(R(".alert-danger"),setTimeout((function(){O(!1)}),3e3))}),[N,u]),Object(m.jsxs)("div",{children:[Object(m.jsx)(J,{handleChange:function(e){E(Object(s.a)(Object(s.a)({},S),{},Object(B.a)({},e.target.name,e.target.value)))},handleBuy:function(){!function(e,t,c){e.add(t).then((function(e){var t=e.id;c(t)})).catch((function(e){console.log("Error al realizar compra",e)}))}(A,H,C),function(e,t,c,a){e.where(l.a.firestore.FieldPath.documentId(),"in",t.map((function(e){return e.id}))).get().then((function(e){e.docs.forEach((function(e,n){e.data().stock>=t[n].quantity?c.update(e.ref,{stock:e.data().stock-t[n].quantity}):a.push(Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}))})),0===a.length&&c.commit().then((function(e){return e}))}))}(V,z,G,T),n([]),r(0)},handleSetAlert:function(e,t){O(e),g(t)},handleCheckEmail:function(){return S.email===S.email2}}),!u&&N&&Object(m.jsxs)(P.a,{variant:"info",className:"alert-compraID",children:["La identificacion de su compra es ",N]},N),u&&Object(m.jsx)(P.a,{variant:"danger",className:"alert-danger m-3",children:p},"2")]})},Z=function(){var e=Object(a.useContext)(h),t=e.cart,c=e.deleteItem,n=e.totalPrice;return Object(m.jsxs)("div",{className:"cart",children:[Object(m.jsxs)(b.b,{to:"/productos",className:"styles",children:[Object(m.jsx)(L.a,{className:"arrowStyles"}),Object(m.jsx)("span",{children:"Eleg\xed tus l\xe1mparas!"})]}),Object(m.jsxs)("div",{className:"containerStyles",children:[!t.length&&Object(m.jsx)("h1",{children:"No agregaste productos"}),t.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)(S.a,{style:{width:"18rem"},children:[Object(m.jsx)(S.a.Img,{variant:"top",src:e.img}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsx)(S.a.Title,{children:e.name}),Object(m.jsx)(S.a.Text,{}),Object(m.jsxs)(S.a.Text,{children:["L\xe1mpara led con control ",e.control," y luz tipo ",e.luz]}),Object(m.jsxs)(S.a.Text,{children:["Cantidad: ",e.quantity," Precio: ",e.price]}),Object(m.jsxs)(S.a.Text,{children:["Total: ",e.price*e.quantity]}),Object(m.jsx)(E.a,{variant:"outline-danger",className:"w-100",onClick:function(){return c(e)},children:"x"})]})]},e.id)})}))]}),Object(m.jsxs)("h2",{children:["Total acumulado: ",n()]}),Object(m.jsx)(X,{})]})},U=(c(117),c(118),function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([]),r=Object(o.a)(i,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){n(!0),j().collection("Productos").get().then((function(e){0===e.size&&console.log("No Hay resultados"),d(e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())})))})).catch((function(e){console.log("Error al traer los products",e)})).finally((function(){n(!1)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:c&&Object(m.jsx)("p",{children:"Cargando Informacion..."})}),!c&&Object(m.jsx)(x,{children:Object(m.jsx)(b.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(I,{}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(p,{})}),Object(m.jsx)(u.a,{exact:!0,path:"/productos",children:Object(m.jsx)(w,{products:l})}),Object(m.jsx)(u.a,{exact:!0,path:"/category/:id",children:Object(m.jsx)(w,{products:l})}),Object(m.jsx)(u.a,{exact:!0,path:"/item/:id",children:Object(m.jsx)(A,{})}),Object(m.jsx)(u.a,{exact:!0,path:"/cart",children:Object(m.jsx)(Z,{})})]})]})})})]})}),_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,134)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root")),_()},84:function(e,t,c){},98:function(e,t,c){}},[[119,1,2]]]);
//# sourceMappingURL=main.410a1a9d.chunk.js.map