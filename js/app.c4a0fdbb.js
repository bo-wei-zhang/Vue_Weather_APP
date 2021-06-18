(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7d21eab2"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Vue_Weather_App/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08d1":function(e,t,n){"use strict";n("c139")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["t"])("router-view");return Object(r["o"])(),Object(r["d"])(n)}n("79f9");const a={};a.render=o;var c=a,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=(n("b0c0"),{class:"search-box"}),s={key:0,class:"weather-wrap"},l={class:"location-box"},d={class:"location"},f={class:"date"},h={class:"weather-box"},p={class:"temp"},b={class:"weather"};function y(e,t,n,o,a,c){var i=Object(r["t"])("Cities");return Object(r["o"])(),Object(r["d"])("div",{class:["undefined"!=typeof a.weather.main&&a.weather.main.temp>16?"warm":"","home"]},[Object(r["f"])("main",null,[Object(r["f"])("div",u,[Object(r["A"])(Object(r["f"])("input",{type:"text",class:"search-bar",placeholder:"Search...","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.query=e}),onKeypress:t[2]||(t[2]=Object(r["B"])((function(){return c.fetchWeather&&c.fetchWeather.apply(c,arguments)}),["enter"]))},null,544),[[r["y"],a.query]])]),Object(r["f"])(i,{onGetCity:t[3]||(t[3]=function(e){return c.getCity(e)}),cities:a.cities},null,8,["cities"]),Object(r["f"])("button",{onClick:t[4]||(t[4]=function(){return c.getPositionWeather&&c.getPositionWeather.apply(c,arguments)})},"取得當前地區天氣"),"undefined"!=typeof a.weather.main?(Object(r["o"])(),Object(r["d"])("div",s,[Object(r["f"])("div",l,[Object(r["f"])("div",d,Object(r["v"])(a.weather.name)+", "+Object(r["v"])(a.weather.sys.country),1),Object(r["f"])("div",f,Object(r["v"])(c.dateBuilder()),1)]),Object(r["f"])("div",h,[Object(r["f"])("div",p,Object(r["v"])(Math.round(a.weather.main.temp))+"°c",1),Object(r["f"])("div",b,Object(r["v"])(a.weather.weather[0].main),1)])])):Object(r["e"])("",!0)])],2)}n("99af"),n("b680");function m(e,t,n,o,a,c){var i=this;return Object(r["A"])((Object(r["o"])(),Object(r["d"])("select",{onChange:t[1]||(t[1]=function(t){return e.$emit("get-city",i.selected)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.selected=e}),name:"cities",id:""},[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["s"])(n.cities,(function(e){return Object(r["o"])(),Object(r["d"])("option",{value:e,key:e},Object(r["v"])(e),9,["value"])})),128))],544)),[[r["x"],a.selected]])}var v={name:"Cities",props:{cities:Array},data:function(){return{selected:"Taipei"}},methods:{}};v.render=m;var g=v,j={name:"Home",components:{Cities:g},data:function(){return{api_key:"c2f1dd42276e57bdfa93f97f1ef46583",url_base:"https://api.openweathermap.org/data/2.5/",query:"",weather:{},lat:"",lon:"",cities:["Taipei","New Taipei","Keelung","Taoyuan","Hsinchu","Miaoli","Taichung","Changhua","Nantou","Yunlin","Chiayi","Tainan","Kaohsiung","Pingtung","Yilan","Hualien","Taitung ","Penghu","Green Island","Orchid Island","Kinmen","Matsu"]}},methods:{getCity:function(e){console.log(e),fetch("".concat(this.url_base,"weather?q=").concat(e,"&units=metric&APPID=").concat(this.api_key)).then((function(e){return e.json()})).then(this.setResults)},getPositionWeather:function(){console.log(this.lat,this.lon),fetch("".concat(this.url_base,"weather?lat=").concat(this.lat,"&lon=").concat(this.lon,"&APPID=").concat(this.api_key,"&units=metric")).then((function(e){return e.json()})).then(this.setResults)},fetchWeather:function(e){console.log(this),fetch("".concat(this.url_base,"weather?q=").concat(this.query,"&units=metric&APPID=").concat(this.api_key)).then((function(e){return e.json()})).then(this.setResults)},setResults:function(e){this.weather=e},dateBuilder:function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=n[e.getDay()],o=e.getDate(),a=t[e.getMonth()],c=e.getFullYear();return"".concat(r," ").concat(o," ").concat(a," ").concat(c)}},created:function(){var e=this;"geolocation"in navigator?(this.gettingLocation=!0,navigator.geolocation.getCurrentPosition((function(t){e.gettingLocation=!1,e.lat=t.coords.latitude.toFixed(4),e.lon=t.coords.longitude.toFixed(4)}),(function(t){e.gettingLocation=!1,e.errorStr=t.message,alert(error.code+": "+error.message)}),{timeout:1e4})):this.errorStr="Geolocation is not available."}};n("08d1");j.render=y;var O=j,w=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],P=Object(i["a"])({history:Object(i["b"])("/Vue_Weather_App/"),routes:w}),_=P,x=n("5502"),C=Object(x["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(c).use(C).use(_).mount("#app")},"79f9":function(e,t,n){"use strict";n("cf1d")},c139:function(e,t,n){},cf1d:function(e,t,n){}});
//# sourceMappingURL=app.c4a0fdbb.js.map