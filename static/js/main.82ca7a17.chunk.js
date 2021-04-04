(this["webpackJsonpmusic-shop"]=this["webpackJsonpmusic-shop"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(21),i=c.n(s),a=c(11),o=c(3),l=c(8),j=c(24),u=c(19),x=c(9),b=c(2),d=n.a.createContext();function m(e){var t=e.children,c=Object(r.useState)([]),n=Object(x.a)(c,2),s=n[0],i=n[1],a=Object(r.useState)([]),o=Object(x.a)(a,2),l=o[0],m=o[1];return Object(r.useEffect)((function(){fetch("https://raw.githubusercontent.com/PaoloGiraudi/music-db-JSON/main/music.json").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(b.jsx)(d.Provider,{value:{allItems:s,toggleFavorite:function(e){var t=s.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{isFavorite:!t.isFavorite}):t}));i(t)},addToCart:function(e){m((function(t){return[].concat(Object(j.a)(t),[e])}))},cartItems:l,removeFromCart:function(e){m((function(t){return t.filter((function(t){return t.id!==e}))}))},emptyCart:function(){m([])}},children:t})}function O(){var e=Object(r.useContext)(d).cartItems.length>0?Object(b.jsx)(l.e,{}):Object(b.jsx)(l.d,{});return Object(b.jsxs)("header",{className:"box-border  flex justify-between ",children:[Object(b.jsx)(a.b,{to:"/",children:Object(b.jsx)("h1",{className:"text-4xl font-bold ",children:"Music Shop"})}),Object(b.jsx)(a.b,{to:"/cart",className:"box-border h-24 w-24 text-4xl ",children:e})]})}function h(e){var t=e.item,c=Object(r.useState)(!1),n=Object(x.a)(c,2),s=n[0],i=n[1],a=Object(r.useContext)(d),o=a.toggleFavorite,j=a.addToCart,u=a.cartItems,m=a.removeFromCart;return Object(b.jsxs)("div",{className:"relative",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(b.jsx)("img",{className:"",src:t.url,alt:t.artist}),Object(b.jsx)("div",{className:"text-2xl text-red-600 h-8 w-8 p-1  bg-white absolute left-0 top-0",children:t.isFavorite?Object(b.jsx)(l.a,{onClick:function(){return o(t.id)}}):s?Object(b.jsx)(l.b,{onClick:function(){return o(t.id)}}):void 0}),Object(b.jsx)("div",{className:"text-2xl text-green-600 h-8 w-8 p-1 bg-white absolute right-0 top-0",children:u.some((function(e){return e.id===t.id}))?Object(b.jsx)(l.e,{onClick:function(){return m(t.id)}}):s?Object(b.jsx)(l.c,{onClick:function(){return j(t)}}):void 0})]})}function f(){var e=Object(r.useContext)(d).allItems.map((function(e,t){return Object(b.jsx)(h,{item:e},e.id)}));return Object(b.jsx)("main",{className:"grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2",children:e})}var g=c(23);function v(e){var t=e.item,c=Object(r.useContext)(d).removeFromCart;return Object(b.jsxs)("div",{className:"flex items-center my-4",children:[Object(b.jsx)(g.a,{className:"mr-4 text-2xl text-red-600 cursor-pointer",onClick:function(){return c(t.id)}}),Object(b.jsx)("img",{className:"w-36",src:t.url,alt:t.artist}),Object(b.jsx)("p",{className:"flex-grow text-lg text-right mr-4",children:"$5.99"})]})}function p(){var e=Object(r.useState)("Place Order"),t=Object(x.a)(e,2),c=t[0],n=t[1],s=Object(r.useContext)(d),i=s.cartItems,a=s.emptyCart,o=i.map((function(e){return Object(b.jsx)(v,{item:e},e.id)})),l=(5.99*i.length).toLocaleString("en-US",{style:"currency",currency:"USD"});return Object(b.jsxs)("main",{className:"flex flex-col",children:[Object(b.jsx)("h3",{className:"text-2xl underline mb-4",children:"Check out"}),o,Object(b.jsxs)("p",{className:"text-xl text-right my-4 mr-4",children:["Total: ",l]}),i.length>0?Object(b.jsx)("div",{className:"flex justify-end",children:Object(b.jsx)("button",{className:"text-xl py-4 px-2 bg-green-200 border-4 border-green-400",onClick:function(){n("Ordering..."),setTimeout((function(){alert("Order Placed!"),n("Place Order"),a()}),3e3)},children:c})}):Object(b.jsx)("p",{children:"You have no items in the cart."})]})}function C(){return Object(b.jsxs)("div",{className:"container mx-auto p-12",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(f,{})}),Object(b.jsx)(o.a,{path:"/cart",children:Object(b.jsx)(p,{})})]})]})}c(35);i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{children:Object(b.jsx)(a.a,{children:Object(b.jsx)(C,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.82ca7a17.chunk.js.map