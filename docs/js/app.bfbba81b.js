(function(t){function n(n){for(var o,i,c=n[0],s=n[1],u=n[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,c=1;c<e.length;c++){var s=e[c];0!==r[s]&&(o=!1)}o&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},a=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"011e":function(t,n,e){},"35fa":function(t,n,e){t.exports=e.p+"img/logo-blue.443f80ab.svg"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[t.loaded&&!t.loadingBlock?e("Main2"):e("Loading")],1)])},a=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{staticClass:"row head"},[t._m(0),e("div",{staticClass:"col-6 social"},[e("div",{staticClass:"icons"},[e("Twitter"),e("Facebook"),e("Instagram")],1)])]),t._m(1)])},c=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"logo-old col-6"},[o("img",{attrs:{src:e("ddc5"),alt:"Monify"}})])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"row main-container"},[o("div",{staticClass:"col-10 col-md-6 offset-md-3 offset-1"},[o("img",{staticClass:"logo-mounted",attrs:{src:e("35fa"),alt:"Lumen Investment Group"}}),o("hr"),o("h1",[t._v("Webpage is under construction")])])])}],s=e("e792"),u=e("d5df"),l=e("03b1"),d={components:{Twitter:s["a"],Facebook:u["a"],Instagram:l["a"]},data:function(){return{mounted:!1}},mounted:function(){console.log("mounted"),this.mounted=!0}},f=d,p=(e("980f"),e("2877")),v=Object(p["a"])(f,i,c,!1,null,"5e02257a",null),m=v.exports,g=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"loading"},[o("img",{class:t.loaded?"change":"",attrs:{src:e("ddc5")}}),o("div",{class:"lds-ring "+(t.loaded?"change":"")},[o("div"),o("div"),o("div"),o("div")])])},b=[],h={data:function(){return{loaded:!1}},mounted:function(){var t=this;window.addEventListener("load",(function(){t.loaded=!0}))}},w=h,_=(e("da94"),Object(p["a"])(w,g,b,!1,null,"eaf74e12",null)),y=_.exports,O={name:"App",data:function(){return{loaded:!1,loadingBlock:!0}},components:{Main2:m,Loading:y},mounted:function(){var t=this;setTimeout((function(){t.loadingBlock=!0}),800),window.addEventListener("load",(function(){setTimeout((function(){t.loaded=!0}),300)}))}},j=O,x=(e("5c0b"),Object(p["a"])(j,r,a,!1,null,null,null)),C=x.exports,k=e("5f5b");e("d48d");o["default"].use(k["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";e("9c0c")},"94f9":function(t,n,e){},"980f":function(t,n,e){"use strict";e("94f9")},"9c0c":function(t,n,e){},da94:function(t,n,e){"use strict";e("011e")},ddc5:function(t,n,e){t.exports=e.p+"img/logo-old.3cc26ae4.png"}});
//# sourceMappingURL=app.bfbba81b.js.map