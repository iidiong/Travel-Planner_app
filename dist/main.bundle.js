!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);n(5);const o=n(6);document.querySelector("#search").addEventListener("click",o.requestTemp,!1),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(){console.log("Service Worker Registered")}))}))},function(e,t,n){var o=n(2),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};o(a,r);e.exports=a.locals||{}},function(e,t,n){"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],a=0;a<e.length;a++){var r=e[a],l=t.base?r[0]+t.base:r[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var f=c(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:d,updater:h(u,t),references:1}),o.push(d)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,f=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var a=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,m=0;function h(e,t){var n,o,a;if(t.singleton){var r=m++;n=g||(g=s(t)),o=u.bind(null,n,r,!1),a=u.bind(null,n,r,!0)}else n=s(t),o=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var a=c(n[o]);i[a].references--}for(var r=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=r}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,'*{box-sizing:border-box}body{background:#fffff8;font-family:-apple-system, BlinkMacSystemFont, sans-serif;background:#f23557}.entry{background:rgba(59,74,107,0.4);margin-bottom:20px;width:640px}h1,p{text-align:center}textarea{background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald", sans-serif}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#f0d43a;font-family:"Oswald", sans-serif}:-ms-input-placeholder{color:#f0d43a;font-family:"Oswald", sans-serif}::-ms-input-placeholder{color:#f0d43a;font-family:"Oswald", sans-serif}@media all and (max-width: 699px) and (min-width: 400px){#app{display:grid;grid-template-columns:1fr;grid-template-rows:auto;color:#f0d43a;grid-gap:1em;font-size:20px;font-family:"Oswald", sans-serif}#data{grid-row:3;margin:30px auto}#display{grid-row:2;margin:auto}.headline{grid-row:1;justify-content:center;background:#ffffff;color:black}.footer{grid-row:4;justify-content:center;background:#ffffff;color:black}.image{display:flex;flex-direction:row;align-items:inherit;width:480px;height:320px}img{display:block;width:100%;height:100%}label{display:block;font-size:12px}.entryHolder{display:flex;flex-direction:row;justify-content:space-evenly;padding:10px}input{display:block;height:35px;width:320px;background:#22b2da;color:#f0d43a;font-size:15px;font-family:"Oswald", sans-serif;margin-bottom:15px;padding:10px;border:none}button{width:320px;height:35px;background:#3b4a6b;color:#f0d43a;font-size:20px;font-family:"Oswald", sans-serif;border:none;box-shadow:2px 4px 5px #444}.title{display:flex;flex-direction:row;justify-content:center}#tripLength{font-size:small}}@media all and (max-width: 1000px) and (min-width: 700px){#app{display:grid;grid-template-columns:1fr;grid-template-rows:auto;color:#f0d43a;grid-gap:1em;font-size:20px;font-family:"Oswald", sans-serif}#data{grid-row:3;margin:30px auto}#display{grid-row:2;margin:auto}.headline{grid-row:1;justify-content:center;background:#ffffff;color:black}.footer{grid-row:4;justify-content:center;background:#ffffff;color:black}.image{display:flex;flex-direction:row;align-items:inherit;width:640px;height:423px}img{display:block;width:100%;height:100%}label{display:block;font-size:18px}.entryHolder{display:flex;flex-direction:row;justify-content:space-evenly;padding:10px}input{display:block;height:35px;width:320px;background:#22b2da;color:#f0d43a;font-size:15px;font-family:"Oswald", sans-serif;margin-bottom:15px;padding:10px;border:none}button{width:320px;height:35px;background:#3b4a6b;color:#f0d43a;font-size:20px;font-family:"Oswald", sans-serif;border:none;box-shadow:2px 4px 5px #444}.title{display:flex;flex-direction:row;justify-content:center}#tripLength{font-size:medium}}@media all and (min-width: 1001px){#app{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1f auto 1fr;color:#f0d43a;grid-gap:1em;font-size:20px;font-family:"Oswald", sans-serif}#data{grid-column:1/2;grid-row:2;margin:100px auto 100px auto}#display{grid-column:2/3;grid-row:2;margin:auto 150px auto auto}.button-cont{padding:10px 0 15px 0px}.headline{grid-column:1/3;grid-row:1;justify-content:center;background:#ffffff;color:black}.footer{grid-column:1/3;grid-row:3;justify-content:center;background:#ffffff;color:black}.image{display:flex;flex-direction:row;align-items:inherit;width:640px;height:423px}img{display:block;width:100%;height:100%}label{display:block;font-size:20px}.entryHolder{display:flex;flex-direction:row;justify-content:space-evenly;padding:10px}input{display:block;height:60px;width:320px;background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald", sans-serif;margin-bottom:15px;padding:10px;border:none}button{width:320px;height:60px;background:#3b4a6b;color:#f0d43a;font-size:26px;font-family:"Oswald", sans-serif;border:none;box-shadow:2px 4px 5px #444}.title{display:flex;flex-direction:row;justify-content:center}#tripLength{font-size:medium}}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([a]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"cffc7dd687a183c890c7414e9e7b22d9.png"},function(e,t){document.querySelector("#search");const n=document.querySelector("#entryHolder"),o=document.querySelector("#tripLength"),a=document.querySelector("#sDate"),r=document.querySelector("#eDate"),i=document.querySelector("#city"),c=document.querySelector("#tempHigh"),l=document.querySelector("#tempLow"),s=(document.querySelector("#tempicon"),document.querySelector(".image"));document.querySelector(".holder");let d={},f="",u="",p="",g="",m="",h="",y="";function b(e){const t=e.lowTemp,i=e.highTemp,d=`My trip to: ${e.cName}, ${e.stateCode}\nDeparting: ${e.validDate}\n${e.weatherDes}`;v(a.value,r.value);o.innerText=d||"No valid Data is available",l.innerText=`Low - ${Number.parseInt(t)} °F`||"No valid Data is available",c.innerText=`High - ${Number.parseInt(i)} °F`||"No valid Data is available",n.setAttribute("class","entryHolder"),s.innerHTML=`<div class="image">\n          <a href=${e.pageURL}><img alt="" src=${e.webformatURL} wwidth="640" height="423"></a></div>`}const x=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"https://www.geonames.org"},body:JSON.stringify(t)});try{return await n}catch(e){console.log("error",e)}},w=async(e="")=>{const t=await fetch(e);try{return await t.json()}catch(e){console.log("error",e)}};function v(e,t){let n=new Date(e),o=new Date(t);return Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()))/864e5)}e.exports={requestTemp:function(e){if(i.value){const e=i.value,t=a.value;let n="",o="";w(`http://api.geonames.org/postalCodeSearchJSON?placename=${e}&maxRows=10&username=iidiong`).then(e=>(f=e,n=f.postalCodes[0].lat,o=f.postalCodes[0].lng,w(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${n}&lon=${o}&key=da41e4bb803c4ea683e9bd9ece028f65`))).then(n=>{u=n;for(let e=0;e<7;e++)u.data[e].datetime===t&&(m=u.data[e].high_temp,g=u.data[e].low_temp,h=u.data[e].valid_date,cName=u.city_name,stateCode=u.state_code,y=u.data[e].weather.icon,weatherDes=u.data[e].weather.description);return d={highTemp:""+(9*m/5+32),lowTemp:""+(9*g/5+32),validDate:h,icon:y,cName:cName,stateCode:stateCode,weatherDes:weatherDes},pixabayURL=`https://pixabay.com/api/?key=16471210-adcdb9f7c9889c5519cdbda83&q=${e}&category=nature&image_type=photo`,w(pixabayURL)}).then(e=>{p=e,parseInt(p.totalHits)>0?(index=Math.floor(10*Math.random()+1),d.pageURL=p.hits[index].pageURL,d.webformatURL=p.hits[index].webformatURL):console.log("No hits")}).then((function(e){x("http://localhost:3000/add",d)})).then(()=>{b(d)}).catch(e=>console.log("There was an error :",e))}else w("http://localhost:3000/all").then((function(e){b(e)}))},retrieveData:w,tripDays:v}}]);