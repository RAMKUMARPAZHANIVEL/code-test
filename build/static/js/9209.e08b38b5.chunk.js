"use strict";(self.webpackChunkfigma_react_boilerplate=self.webpackChunkfigma_react_boilerplate||[]).push([[9209],{9209:function(e,t,n){n.d(t,{D3:function(){return x}});var r=n(5671),o=n(3144),i=n(7326),a=n(136),c=n(7277),u=n(1120),s=n(9611);var l=n(8814);function f(e,t,n){return f=(0,l.Z)()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,s.Z)(o,n.prototype),o},f.apply(null,arguments)}function d(e){var t="function"===typeof Map?new Map:void 0;return d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return f(e,arguments,(0,u.Z)(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,s.Z)(r,e)},d(e)}var h=n(2791),p=function(e,t){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},p(e,t)};var v=function(){return v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},v.apply(this,arguments)};var w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof n.g?n.g:"undefined"!=typeof self?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function m(e,t){return e(t={exports:{}},t.exports),t.exports}var y=m((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){var e=this;this.locked=new Map,this.addToLocked=function(t,n){var r=e.locked.get(t);void 0===r?void 0===n?e.locked.set(t,[]):e.locked.set(t,[n]):void 0!==n&&(r.unshift(n),e.locked.set(t,r))},this.isLocked=function(t){return e.locked.has(t)},this.lock=function(t){return new Promise((function(n,r){e.isLocked(t)?e.addToLocked(t,n):(e.addToLocked(t),n())}))},this.unlock=function(t){var n=e.locked.get(t);if(void 0!==n&&0!==n.length){var r=n.pop();e.locked.set(t,n),void 0!==r&&setTimeout(r,0)}else e.locked.delete(t)}}return e.getInstance=function(){return void 0===e.instance&&(e.instance=new e),e.instance},e}();t.default=function(){return n.getInstance()}}));g(y);var b=g(m((function(e,t){var n=w&&w.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(a,c)}u((r=r.apply(e,t||[])).next())}))},r=w&&w.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var o="browser-tabs-lock-key";function i(e){return new Promise((function(t){return setTimeout(t,e)}))}function a(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",r=0;r<e;r++)n+=t[Math.floor(Math.random()*t.length)];return n}var c=function(){function e(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+a(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&&(e.waiters=[])}return e.prototype.acquireLock=function(t,c){return void 0===c&&(c=5e3),n(this,void 0,void 0,(function(){var n,u,s,l,f,d;return r(this,(function(r){switch(r.label){case 0:n=Date.now()+a(4),u=Date.now()+c,s=o+"-"+t,l=window.localStorage,r.label=1;case 1:return Date.now()<u?[4,i(30)]:[3,8];case 2:return r.sent(),null!==l.getItem(s)?[3,5]:(f=this.id+"-"+t+"-"+n,[4,i(Math.floor(25*Math.random()))]);case 3:return r.sent(),l.setItem(s,JSON.stringify({id:this.id,iat:n,timeoutKey:f,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,i(30)];case 4:return r.sent(),null!==(d=l.getItem(s))&&(d=JSON.parse(d)).id===this.id&&d.iat===n?(this.acquiredIatSet.add(n),this.refreshLockWhileAcquired(s,n),[2,!0]):[3,7];case 5:return e.lockCorrector(),[4,this.waitForSomethingToChange(u)];case 6:r.sent(),r.label=7;case 7:return n=Date.now()+a(4),[3,1];case 8:return[2,!1]}}))}))},e.prototype.refreshLockWhileAcquired=function(e,t){return n(this,void 0,void 0,(function(){var o=this;return r(this,(function(i){return setTimeout((function(){return n(o,void 0,void 0,(function(){var n,o;return r(this,(function(r){switch(r.label){case 0:return[4,y.default().lock(t)];case 1:return r.sent(),this.acquiredIatSet.has(t)?(n=window.localStorage,null===(o=n.getItem(e))?(y.default().unlock(t),[2]):((o=JSON.parse(o)).timeRefreshed=Date.now(),n.setItem(e,JSON.stringify(o)),y.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(y.default().unlock(t),[2])}}))}))}),1e3),[2]}))}))},e.prototype.waitForSomethingToChange=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){var r=!1,o=Date.now(),i=!1;function a(){if(i||(window.removeEventListener("storage",a),e.removeFromWaiting(a),clearTimeout(c),i=!0),!r){r=!0;var t=50-(Date.now()-o);t>0?setTimeout(n,t):n()}}window.addEventListener("storage",a),e.addToWaiting(a);var c=setTimeout(a,Math.max(0,t-Date.now()))}))];case 1:return n.sent(),[2]}}))}))},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&&e.waiters.push(t)},e.removeFromWaiting=function(t){void 0!==e.waiters&&(e.waiters=e.waiters.filter((function(e){return e!==t})))},e.notifyWaiters=function(){void 0!==e.waiters&&e.waiters.slice().forEach((function(e){return e()}))},e.prototype.releaseLock=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,this.releaseLock__private__(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.releaseLock__private__=function(t){return n(this,void 0,void 0,(function(){var n,i,a;return r(this,(function(r){switch(r.label){case 0:return n=window.localStorage,i=o+"-"+t,null===(a=n.getItem(i))?[2]:(a=JSON.parse(a)).id!==this.id?[3,2]:[4,y.default().lock(a.iat)];case 1:r.sent(),this.acquiredIatSet.delete(a.iat),n.removeItem(i),y.default().unlock(a.iat),e.notifyWaiters(),r.label=2;case 2:return[2]}}))}))},e.lockCorrector=function(){for(var t=Date.now()-5e3,n=window.localStorage,r=Object.keys(n),i=!1,a=0;a<r.length;a++){var c=r[a];if(c.includes(o)){var u=n.getItem(c);null!==u&&(void 0===(u=JSON.parse(u)).timeRefreshed&&u.timeAcquired<t||void 0!==u.timeRefreshed&&u.timeRefreshed<t)&&(n.removeItem(c),i=!0)}}i&&e.notifyWaiters()},e.waiters=void 0,e}();t.default=c})));Error;var k=m((function(e,t){var n=w&&w.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function r(e,t){if(!t)return"";var n="; "+e;return!0===t?n:n+"="+t}function o(e,t,n){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t}return r("Expires",e.expires?e.expires.toUTCString():"")+r("Domain",e.domain)+r("Path",e.path)+r("Secure",e.secure)+r("SameSite",e.sameSite)}(n)}function i(e){for(var t={},n=e?e.split("; "):[],r=/(%[\dA-F]{2})+/gi,o=0;o<n.length;o++){var i=n[o].split("="),a=i.slice(1).join("=");'"'===a.charAt(0)&&(a=a.slice(1,-1));try{t[i[0].replace(r,decodeURIComponent)]=a.replace(r,decodeURIComponent)}catch(e){}}return t}function a(){return i(document.cookie)}function c(e,t,r){document.cookie=o(e,t,n({path:"/"},r))}t.__esModule=!0,t.encode=o,t.parse=i,t.getAll=a,t.get=function(e){return a()[e]},t.set=c,t.remove=function(e,t){c(e,"",n(n({},t),{expires:-1}))}}));g(k),k.encode,k.parse,k.getAll;k.get,k.set,k.remove;new b;var _,S={isAuthenticated:!1,isLoading:!0},O=function(){throw new Error("You forgot to wrap your component in <Auth0Provider>.")},L=v(v({},S),{buildAuthorizeUrl:O,buildLogoutUrl:O,getAccessTokenSilently:O,getAccessTokenWithPopup:O,getIdTokenClaims:O,loginWithRedirect:O,loginWithPopup:O,logout:O,handleRedirectCallback:O}),T=(0,h.createContext)(L),C=function(e){function t(n,r){var o=e.call(this,r||n)||this;return o.error=n,o.error_description=r,Object.setPrototypeOf(o,t.prototype),o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),I=function(e){return function(t){return"error"in t?new C(t.error,t.error_description):t instanceof Error?t:new Error(e)}},x=(I("Login failed"),I("Get access token failed"),function(e){return void 0===e&&(e=T),(0,h.useContext)(e)})}}]);
//# sourceMappingURL=9209.e08b38b5.chunk.js.map