window.jwplayer=function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(t,r,o){for(var a,u,c=0,s=[];c<t.length;c++)u=t[c],i[u]&&s.push(i[u][0]),i[u]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(n&&n(t,r,o);s.length;)s.shift()()};var r={},i={16:0};return t.e=function(e){function n(){u.onerror=u.onload=null,clearTimeout(c);var t=i[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),i[e]=void 0)}var r=i[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var o=new Promise(function(t,n){r=i[e]=[t,n]});r[2]=o;var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=35e3,t.nc&&u.setAttribute("nonce",t.nc),u.src=t.p+""+({0:"jwplayer.core.controls.polyfills.html5",1:"jwplayer.core.controls.html5",2:"jwplayer.core.controls.polyfills",3:"jwplayer.core.controls",4:"jwplayer.controls",5:"provider.shaka",6:"provider.hlsjs",7:"provider.html5",8:"jwplayer.core",9:"provider.flash",10:"polyfills.intersection-observer",11:"jwplayer.vr",12:"provider.cast",13:"vttparser",14:"provider.airplay",15:"polyfills.webvtt"}[e]||e)+".js";var c=setTimeout(n,35e3);return u.onerror=u.onload=n,a.appendChild(u),o},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=53)}([function(e,t,n){"use strict";n.d(t,"a",function(){return P}),n.d(t,"b",function(){return T});var r=n(22),i={},o=Array.prototype,a=Object.prototype,u=Function.prototype,c=o.slice,s=o.concat,l=a.toString,f=a.hasOwnProperty,d=o.map,p=o.reduce,v=o.forEach,h=o.filter,m=o.every,g=o.some,y=o.indexOf,b=Array.isArray,w=Object.keys,j=u.bind,O=function e(t){return t instanceof e?t:this instanceof e?void 0:new e(t)},k=O.each=O.forEach=function(e,t,n){var r,o;if(null==e)return e;if(v&&e.forEach===v)e.forEach(t,n);else if(e.length===+e.length){for(r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e)===i)return}else{var a=O.keys(e);for(r=0,o=a.length;r<o;r++)if(t.call(n,e[a[r]],a[r],e)===i)return}return e};O.map=O.collect=function(e,t,n){var r=[];return null==e?r:d&&e.map===d?e.map(t,n):(k(e,function(e,i,o){r.push(t.call(n,e,i,o))}),r)};O.reduce=O.foldl=O.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),p&&e.reduce===p)return r&&(t=O.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(k(e,function(e,o,a){i?n=t.call(r,n,e,o,a):(n=e,i=!0)}),!i)throw new TypeError("Reduce of empty array with no initial value");return n},O.find=O.detect=function(e,t,n){var r;return C(e,function(e,i,o){if(t.call(n,e,i,o))return r=e,!0}),r},O.filter=O.select=function(e,t,n){var r=[];return null==e?r:h&&e.filter===h?e.filter(t,n):(k(e,function(e,i,o){t.call(n,e,i,o)&&r.push(e)}),r)},O.reject=function(e,t,n){return O.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},O.compact=function(e){return O.filter(e,O.identity)},O.every=O.all=function(e,t,n){t||(t=O.identity);var r=!0;return null==e?r:m&&e.every===m?e.every(t,n):(k(e,function(e,o,a){if(!(r=r&&t.call(n,e,o,a)))return i}),!!r)};var C=O.some=O.any=function(e,t,n){t||(t=O.identity);var r=!1;return null==e?r:g&&e.some===g?e.some(t,n):(k(e,function(e,o,a){if(r||(r=t.call(n,e,o,a)))return i}),!!r)};O.size=function(e){return null==e?0:e.length===+e.length?e.length:O.keys(e).length},O.last=function(e,t,n){if(null!=e)return null==t||n?e[e.length-1]:c.call(e,Math.max(e.length-t,0))},O.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},O.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}};var x=function(e){return null==e?O.identity:O.isFunction(e)?e:O.property(e)},E=function(e){return function(t,n,r){var i={};return n=x(n),k(t,function(o,a){var u=n.call(r,o,a,t);e(i,u,o)}),i}};O.groupBy=E(function(e,t,n){O.has(e,t)?e[t].push(n):e[t]=[n]}),O.indexBy=E(function(e,t,n){e[t]=n}),O.sortedIndex=function(e,t,n,r){n=x(n);for(var i=n.call(r,t),o=0,a=e.length;o<a;){var u=o+a>>>1;n.call(r,e[u])<i?o=u+1:a=u}return o},O.contains=O.include=function(e,t){return null!=e&&(e.length!==+e.length&&(e=O.values(e)),O.indexOf(e,t)>=0)},O.pluck=function(e,t){return O.map(e,O.property(t))},O.where=function(e,t){return O.filter(e,O.matches(t))},O.findWhere=function(e,t){return O.find(e,O.matches(t))},O.max=function(e,t,n){if(!t&&O.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var r=-1/0,i=-1/0;return k(e,function(e,o,a){var u=t?t.call(n,e,o,a):e;u>i&&(r=e,i=u)}),r},O.difference=function(e){var t=s.apply(o,c.call(arguments,1));return O.filter(e,function(e){return!O.contains(t,e)})},O.without=function(e){return O.difference(e,c.call(arguments,1))},O.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=O.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1};var S=function(){};O.bind=function(e,t){var n,r;if(j&&e.bind===j)return j.apply(e,c.call(arguments,1));if(!O.isFunction(e))throw new TypeError;return n=c.call(arguments,2),r=function(){if(!(this instanceof r))return e.apply(t,n.concat(c.call(arguments)));S.prototype=e.prototype;var i=new S;S.prototype=null;var o=e.apply(i,n.concat(c.call(arguments)));return Object(o)===o?o:i}},O.partial=function(e){var t=c.call(arguments,1);return function(){for(var n=0,r=t.slice(),i=0,o=r.length;i<o;i++)r[i]===O&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return e.apply(this,r)}},O.once=O.partial(O.before,2),O.memoize=function(e,t){var n={};return t||(t=O.identity),function(){var r=t.apply(this,arguments);return O.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},O.delay=function(e,t){var n=c.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},O.defer=function(e){return O.delay.apply(O,[e,1].concat(c.call(arguments,1)))},O.throttle=function(e,t,n){var i,o,a,u=null,c=0;n||(n={});var s=function(){c=!1===n.leading?0:Object(r.a)(),u=null,a=e.apply(i,o),i=o=null};return function(){c||!1!==n.leading||(c=r.a);var l=t-(r.a-c);return i=this,o=arguments,l<=0?(clearTimeout(u),u=null,c=r.a,a=e.apply(i,o),i=o=null):u||!1===n.trailing||(u=setTimeout(s,l)),a}},O.keys=function(e){if(!O.isObject(e))return[];if(w)return w(e);var t=[];for(var n in e)O.has(e,n)&&t.push(n);return t},O.invert=function(e){for(var t={},n=O.keys(e),r=0,i=n.length;r<i;r++)t[e[n[r]]]=n[r];return t},O.defaults=function(e){return k(c.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},O.extend=function(e){return k(c.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},O.pick=function(e){var t={},n=s.apply(o,c.call(arguments,1));return k(n,function(n){n in e&&(t[n]=e[n])}),t},O.omit=function(e){var t={},n=s.apply(o,c.call(arguments,1));for(var r in e)O.contains(n,r)||(t[r]=e[r]);return t},O.clone=function(e){return O.isObject(e)?O.isArray(e)?e.slice():O.extend({},e):e},O.isArray=b||function(e){return"[object Array]"==l.call(e)},O.isObject=function(e){return e===Object(e)},k(["Function","String","Number","Date","RegExp"],function(e){O["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}}),O.isFunction=function(e){return"function"==typeof e},O.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))};var P=O.isNaN=function(e){return O.isNumber(e)&&e!=+e};O.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"==l.call(e)},O.isNull=function(e){return null===e},O.isUndefined=function(e){return void 0===e},O.has=function(e,t){return f.call(e,t)},O.identity=function(e){return e},O.constant=function(e){return function(){return e}},O.property=function(e){return function(t){return t[e]}},O.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},O.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},O.now=r.a,O.result=function(e,t){if(null!=e){var n=e[t];return O.isFunction(n)?n.call(e):n}};var T=O.isNumber;t.c=O},function(e,t,n){"use strict";function r(e){return e.replace(/^\s+|\s+$/g,"")}function i(e,t,n){for(e=""+e,n=n||"0";e.length<t;)e=n+e;return e}function o(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()===t.toLowerCase())return e.attributes[n].value.toString();return""}function a(e){return/[(,]format=m3u8-/i.test(e)?"m3u8":!!/[(,]format=mpd-/i.test(e)&&"mpd"}function u(e){if(!e||"rtmp"===e.substr(0,4))return"";var t=a(e);return t||(e=e.split("?")[0].split("#")[0],e.lastIndexOf(".")>-1?e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase():void 0)}function c(e){var t=parseInt(e/3600),n=parseInt(e/60)%60,r=e%60;return i(t,2)+":"+i(n,2)+":"+i(r.toFixed(3),6)}function s(e,t){if(!e)return 0;if(p.c.isNumber(e)&&!p.c.isNaN(e))return e;e=e.replace(",",".");var n=e.split(":"),r=n.length,i=0;if("s"===e.slice(-1))i=parseFloat(e);else if("m"===e.slice(-1))i=60*parseFloat(e);else if("h"===e.slice(-1))i=3600*parseFloat(e);else if(r>1){var o=r-1;4===r&&(t&&(i=parseFloat(n[o])/t),o-=1),i+=parseFloat(n[o]),i+=60*parseFloat(n[o-1]),r>=3&&(i+=3600*parseFloat(n[o-2]))}else i=parseFloat(e);return p.c.isNaN(i)?0:i}function l(e,t,n){if(p.c.isString(e)&&"%"===e.slice(-1)){var r=parseFloat(e);return!t||isNaN(t)||isNaN(r)?null:t*r/100}return s(e,n)}function f(e,t){return p.c.map(e,function(e){return t+e})}function d(e,t){return p.c.map(e,function(e){return e+t})}t.h=r,t.d=i,t.i=o,t.a=u,t.b=c,t.f=s,t.c=l,t.e=f,t.g=d;var p=n(0)},function(e,t,n){"use strict";function r(){}function i(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!==d(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function a(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?u:c)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void c(t.promise,e)}u(t.promise,r)})}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===(void 0===t?"undefined":d(t))||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void s(e);if("function"==typeof n)return void f(i(n,t),e)}e._state=1,e._value=t,s(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}n.d(t,"b",function(){return m});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=window.setTimeout,v=window.setImmediate;o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r);return a(this,new l(e,t,n)),n},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(o,a){try{if(a&&("object"===(void 0===a?"undefined":d(a))||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(e){r(o,e)},n)}t[o]=a,0==--i&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var i=t.length,o=0;o<t.length;o++)r(o,t[o])})},o.resolve=function(e){return e&&"object"===(void 0===e?"undefined":d(e))&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof v&&function(e){v(e)}||function(e){p(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var h=window.Promise||(window.Promise=o),m=h.resolve();t.a=h},,,function(e,t,n){"use strict";n.d(t,"_2",function(){return r}),n.d(t,"_5",function(){return i}),n.d(t,"_3",function(){return o}),n.d(t,"_7",function(){return a}),n.d(t,"_8",function(){return u}),n.d(t,"_4",function(){return c}),n.d(t,"_6",function(){return s}),n.d(t,"_9",function(){return l}),n.d(t,"m",function(){return f}),n.d(t,"o",function(){return d}),n.d(t,"n",function(){return p}),n.d(t,"h",function(){return v}),n.d(t,"k",function(){return h}),n.d(t,"_10",function(){return m}),n.d(t,"l",function(){return g}),n.d(t,"R",function(){return y}),n.d(t,"O",function(){return b}),n.d(t,"p",function(){return w}),n.d(t,"Q",function(){return j}),n.d(t,"q",function(){return O}),n.d(t,"a",function(){return k}),n.d(t,"y",function(){return C}),n.d(t,"Z",function(){return x}),n.d(t,"I",function(){return E}),n.d(t,"v",function(){return S}),n.d(t,"u",function(){return P}),n.d(t,"x",function(){return T}),n.d(t,"j",function(){return _}),n.d(t,"U",function(){return N}),n.d(t,"g",function(){return L}),n.d(t,"z",function(){return A}),n.d(t,"A",function(){return M}),n.d(t,"F",function(){return F}),n.d(t,"G",function(){return I}),n.d(t,"J",function(){return R}),n.d(t,"_1",function(){return B}),n.d(t,"T",function(){return q}),n.d(t,"w",function(){return D}),n.d(t,"K",function(){return Q}),n.d(t,"H",function(){return X}),n.d(t,"L",function(){return z}),n.d(t,"N",function(){return V}),n.d(t,"E",function(){return W}),n.d(t,"D",function(){return H}),n.d(t,"B",function(){return U}),n.d(t,"C",function(){return J}),n.d(t,"M",function(){return $}),n.d(t,"i",function(){return K}),n.d(t,"r",function(){return Y}),n.d(t,"_0",function(){return G}),n.d(t,"V",function(){return Z}),n.d(t,"W",function(){return ee}),n.d(t,"b",function(){return te}),n.d(t,"c",function(){return ne}),n.d(t,"S",function(){return re}),n.d(t,"t",function(){return ie}),n.d(t,"f",function(){return oe}),n.d(t,"e",function(){return ae}),n.d(t,"X",function(){return ue}),n.d(t,"Y",function(){return ce}),n.d(t,"_11",function(){return se}),n.d(t,"s",function(){return le}),n.d(t,"d",function(){return fe}),n.d(t,"P",function(){return de});var r="buffering",i="idle",o="complete",a="paused",u="playing",c="error",s="loading",l="stalled",f="drag",d="dragStart",p="dragEnd",v="click",h="doubleClick",m="tap",g="doubleTap",y="over",b="move",w="enter",j="out",O=c,k="adSkipped",C=o,x="ready",E="seek",S="beforePlay",P="beforeComplete",T="bufferFull",_="displayClick",N="playlistComplete",L="cast",A="mediaError",M="firstFrame",F="playAttempt",I="playAttemptFailed",R="seeked",B="setupError",q="state",D="bufferChange",Q="time",X="ratechange",z="mediaType",V="volume",W="mute",H="meta",U="levels",J="levelsChanged",$="visualQuality",K="controls",Y="fullscreen",G="resize",Z="playlistItem",ee="playlist",te="audioTracks",ne="audioTrackChanged",re="playbackRateChanged",ie="logoClick",oe="captionsList",ae="captionsChanged",ue="providerChanged",ce="providerFirstFrame",se="userAction",le="instreamClick",fe="breakpoint",de="fullscreenchange"},function(e,t,n){"use strict";function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(l.a.debug)return e.apply(t||this,n);try{return e.apply(t||this,n)}catch(t){return new i(e.name,t)}}function i(e,t){this.name=e,this.message=t.message||t.toString(),this.error=t}var o=n(16),a=n(11),u=n(12),c=n(1),s=n(20),l=n(15),f=n(0),d=n(29),p=n(25),v=n(26),h=n(51);n.d(t,"b",function(){return g});var m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g="function"==typeof console.log?console.log.bind(console):function(){},y=function(e,t,n){return Math.max(Math.min(e,n),t)},b=function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])},w=f.c.indexOf,j=function(){},O=m({},u,a,o,{addClass:p.a,hasClass:p.h,removeClass:p.j,replaceClass:p.k,toggleClass:p.m,classList:p.d,styleDimension:p.l,createElement:p.e,emptyElement:p.g,addStyleSheet:p.b,bounds:p.c,css:v.b,clearCss:v.a,style:v.d,transform:v.e,getRgba:v.c,ajax:h.a,crossdomain:h.b,tryCatch:r,Error:i,Timer:s.a,log:g,between:y,foreach:b,flashVersion:d.a,isIframe:d.m,indexOf:w,trim:c.h,pad:c.d,extension:c.a,hms:c.b,seconds:c.f,prefix:c.e,suffix:c.g,noop:j});t.a=O},function(e,t,n){"use strict";function r(e,t,n){if(!c(this,"on",e,[t,n])||!t)return this;var r=this._events||(this._events={});return(r[e]||(r[e]=[])).push({callback:t,context:n}),this}function i(e,t,n){if(!c(this,"once",e,[t,n])||!t)return this;var r=0,i=this,o=function n(){r++||(i.off(e,n),t.apply(this,arguments))};return o._callback=t,this.on(e,o,n)}function o(e,t,n){if(!this._events||!c(this,"off",e,[t,n]))return this;if(!e&&!t&&!n)return delete this._events,this;for(var r=e?[e]:Object.keys(this._events),i=0,o=r.length;i<o;i++){e=r[i];var a=this._events[e];if(a){var u=this._events[e]=[];if(t||n)for(var s=0,l=a.length;s<l;s++){var f=a[s];(t&&t!==f.callback&&t!==f.callback._callback||n&&n!==f.context)&&u.push(f)}u.length||delete this._events[e]}}return this}function a(e){if(!this._events)return this;var t=f.call(arguments,1);if(!c(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&s(n,t,this),r&&s(r,arguments,this),this}function u(e){if(!this._events)return this;var t=f.call(arguments,1);if(!c(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&s(n,t,this,e),r&&s(r,arguments,this,e),this}function c(e,t,n,r){if(!n)return!0;if("object"===(void 0===n?"undefined":l(n))){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e[t].apply(e,[i,n[i]].concat(r));return!1}if(d.test(n)){for(var o=n.split(d),a=0,u=o.length;a<u;a++)e[t].apply(e,[o[a]].concat(r));return!1}return!0}function s(e,t,n,r){for(var i=-1,o=e.length;++i<o;){var a=e[i];if(r)try{a.callback.apply(a.context||n,t)}catch(e){console.log('Error in "'+r+'" event handler:',e)}else a.callback.apply(a.context||n,t)}}t.c=r,t.d=i,t.b=o,t.e=a,t.f=u;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=[].slice,d=/\s+/;t.a={on:r,once:i,off:o,trigger:a}},function(e,t,n){"use strict";function r(e,t){var n=void 0,r=void 0,i=void 0,o=void 0;return e.chrome?n=-1!==t.indexOf("Chrome")?t.substring(t.indexOf("Chrome")+7):t.substring(t.indexOf("CriOS")+6):e.safari?n=t.substring(t.indexOf("Version")+8):e.firefox?n=t.substring(t.indexOf("Firefox")+8):e.edge?n=t.substring(t.indexOf("Edge")+5):e.ie&&(-1!==t.indexOf("rv:")?n=t.substring(t.indexOf("rv:")+3):-1!==t.indexOf("MSIE")&&(n=t.substring(t.indexOf("MSIE")+5))),n&&(-1!==(o=n.indexOf(";"))&&(n=n.substring(0,o)),-1!==(o=n.indexOf(" "))&&(n=n.substring(0,o)),-1!==(o=n.indexOf(")"))&&(n=n.substring(0,o)),r=parseInt(n,10),i=parseInt(n.split(".")[1],10)),{version:n,major:r,minor:i}}function i(e,t){if(e&&e.length>t)return e[t]}function o(e,t){var n=void 0,r=void 0,o=void 0;if(e.windows)switch(n=i(/Windows(?: NT|)? ([._\d]+)/.exec(t),1)){case"6.1":n="7.0";break;case"6.2":n="8.0";break;case"6.3":n="8.1"}else e.android?n=i(/Android ([._\d]+)/.exec(t),1):e.iOS?n=i(/OS ([._\d]+)/.exec(t),1):e.mac&&(n=i(/Mac OS X (10[._\d]+)/.exec(t),1));if(n){r=parseInt(n,10);var a=n.split(/[._]/);a&&(o=parseInt(a[1],10))}return{version:n,major:r,minor:o}}function a(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}Object.defineProperty(t,"__esModule",{value:!0});var u=n(29),c=n(0);n.d(t,"Browser",function(){return f}),n.d(t,"OS",function(){return d}),n.d(t,"Features",function(){return p});var s=c.c.memoize,l=navigator.userAgent,f={},d={},p={},v=function(){return l.indexOf("Windows")>-1};Object.defineProperties(f,{androidNative:{get:s(u.c),enumerable:!0},chrome:{get:s(u.d),enumerable:!0},edge:{get:s(u.e),enumerable:!0},facebook:{get:s(u.g),enumerable:!0},firefox:{get:s(u.f),enumerable:!0},ie:{get:s(u.i),enumerable:!0},msie:{get:s(u.n),enumerable:!0},safari:{get:s(u.q),enumerable:!0},version:{get:s(r.bind(this,f,l)),enumerable:!0}}),Object.defineProperties(d,{android:{get:s(u.b),enumerable:!0},iOS:{get:s(u.j),enumerable:!0},mobile:{get:s(u.o),enumerable:!0},mac:{get:s(u.p),enumerable:!0},iPad:{get:s(u.k),enumerable:!0},iPhone:{get:s(u.l),enumerable:!0},windows:{get:s(v),enumerable:!0},version:{get:s(o.bind(this,d,l)),enumerable:!0}}),Object.defineProperties(p,{flash:{get:s(u.h),enumerable:!0},flashVersion:{get:s(u.a),enumerable:!0},iframe:{get:s(u.m),enumerable:!0},passiveEvents:{get:s(a),enumerable:!0},backgroundLoading:{get:s(function(){return!(d.iOS||f.safari)}),enumerable:!0}})},function(e,t,n){"use strict";function r(e){return b||(b=o(e)),b}function i(){throw new Error("Network error")}function o(e){var t=e.get("controls"),n=a(),r=u(e,"html5");return t&&n&&r?c():t&&r?s():t&&n?l():t?f():d()}function a(){var e=window.IntersectionObserverEntry;return!(e&&"IntersectionObserver"in window&&"intersectionRatio"in e.prototype)}function u(e,t){var n=e.get("playlist");if(Array.isArray(n)&&n.length)for(var r=Object(v.a)(n[0]).sources,i=0;i<r.length;i++)for(var o=r[i],a=e.getProviders(),u=0;u<h.a.length;u++){var c=h.a[u];if(a.providerSupports(c,o))return c.name===t}return!1}function c(){return w.html5=!0,n.e(0).then(function(e){n(10);var t=n(4).default;return g.b.controls=n(3).default,Object(m.a)(n(112).default),t}.bind(null,n)).catch(i)}function s(){return w.html5=!0,n.e(1).then(function(e){var t=n(4).default;return g.b.controls=n(3).default,Object(m.a)(n(112).default),t}.bind(null,n)).catch(i)}function l(){return n.e(2).then(function(e){n(10);var t=n(4).default;return g.b.controls=n(3).default,t}.bind(null,n)).catch(i)}function f(){return n.e(3).then(function(e){var t=n(4).default;return g.b.controls=n(3).default,t}.bind(null,n)).catch(i)}function d(){return p().then(function(){return n.e(8).then(function(e){return n(4).default}.bind(null,n)).catch(i)})}function p(){return a()?n.e(10).then(function(e){return n(10)}.bind(null,n)).catch(i):y.b}n.d(t,"a",function(){return w}),t.c=r,t.b=i;var v=n(24),h=n(17),m=n(18),g=n(46),y=n(2),b=null,w={}},,function(e,t,n){"use strict";function r(e){switch(void 0===e?"undefined":c(e)){case"string":return e.length>0;case"object":return null!==e;case"undefined":return!1;default:return!0}}function i(){return"https:"===window.location.protocol}function o(e,t){return 0===e.indexOf("rtmp:")||"rtmp"===t}function a(e,t){return"youtube"===t||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)}function u(e){if(null===e)return"null";var t=void 0===e?"undefined":c(e);return"object"===t&&Array.isArray(e)?"array":t}Object.defineProperty(t,"__esModule",{value:!0}),t.exists=r,t.isHTTPS=i,t.isRtmp=o,t.isYouTube=a,t.typeOf=u;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},function(e,t,n){"use strict";function r(e,t){if(Object(l.exists)(t)||(t=document.location.href),Object(l.exists)(e)){if(i(e))return e;var n=t.substring(0,t.indexOf("://")+3),r=t.substring(n.length,t.indexOf("/",n.length+1)),o=void 0;if(0===e.indexOf("/"))o=e.split("/");else{var a=t.split("?")[0];a=a.substring(n.length+r.length+1,a.lastIndexOf("/")),o=a.split("/").concat(e.split("/"))}for(var u=[],c=0;c<o.length;c++)o[c]&&Object(l.exists)(o[c])&&"."!==o[c]&&(".."===o[c]?u.pop():u.push(o[c]));return n+r+"/"+u.join("/")}}function i(e){return/^(?:(?:https?|file):)?\/\//.test(e)}function o(e){return f.c.some(e,function(e){return"parsererror"===e.nodeName})}function a(e){var t=null;try{"DOMParser"in window?(t=(new window.DOMParser).parseFromString(e,"text/xml"),(o(t.childNodes)||t.childNodes&&o(t.childNodes[0].childNodes))&&(t=null)):(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(e){}return t}function u(e){if(void 0===e)return null;if("string"==typeof e&&e.length<6){var t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(Number(e))&&!isNaN(parseFloat(e)))return Number(e)}return e}function c(e){return"string"==typeof e?""===e?0:e.lastIndexOf("%")>-1?e:parseInt(e.replace("px",""),10):e}function s(e,t){if(e<=0&&!t||f.c.isNaN(parseInt(e)))return"00:00";var n=e<0?"-":"";e=Math.abs(e);var r=Math.floor(e/3600),i=Math.floor((e-3600*r)/60),o=Math.floor(e%60);return n+(r?r+":":"")+(i<10?"0":"")+i+":"+(o<10?"0":"")+o}Object.defineProperty(t,"__esModule",{value:!0}),t.getAbsolutePath=r,t.isAbsolutePath=i,t.parseXML=a,t.serialize=u,t.parseDimension=c,t.timeFormat=s;var l=n(11),f=n(0)},function(e,t,n){"use strict";function r(e){var t="";return e&&(e.localName?t=e.localName:e.baseName&&(t=e.baseName)),t}function i(e){var t="";return e&&(e.textContent?t=Object(u.h)(e.textContent):e.text&&(t=Object(u.h)(e.text))),t}function o(e,t){return e.childNodes[t]}function a(e){return e.childNodes?e.childNodes.length:0}t.b=r,t.d=i,t.a=o,t.c=a;var u=n(1)},function(e,t,n){"use strict";function r(e){var t={setup:[i,o,a,u,c,l,f,d,s],drm:[c,l,f,d],ads:[l,f,d,s,c],jwpsrv:[i,o,a,u,c,l,d,s],discovery:[l,c,d,f]};return function(n){return t[n]&&t[n].indexOf(e)>-1}}t.a=r;var i="free",o="starter",a="business",u="premium",c="enterprise",s="platinum",l="ads",f="unlimited",d="trial"},function(e,t,n){"use strict";t.a={debug:!1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getScriptPath",function(){return i}),n.d(t,"repo",function(){return o}),n.d(t,"versionCheck",function(){return a}),n.d(t,"loadFrom",function(){return u});var r=n(19),i=function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var r=t[n].src;if(r){var i=r.lastIndexOf("/"+e);if(i>=0)return r.substr(0,i+1)}}return""},o=function(){var e="//ssl.p.jwpcdn.com/player/v/8.1.3/";return("file:"===window.location.protocol?"https:":"")+e},a=function(e){var t=("0"+e).split(/\W/),n=r.a.split(/\W/),i=parseFloat(t[0]),o=parseFloat(n[0]);return!(i>o)&&!(i===o&&parseFloat("0"+t[1])>parseFloat(n[1]))},u=function(){return o()}},function(e,t,n){"use strict";function r(){return!!window.MediaSource&&!!window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')}function i(e){if(f.Browser.safari)return!1;if(e.drm&&!Object(v.a)(e.drm))return!1;var t=window.MediaSource;if(!window.HTMLVideoElement||!t)return!1;var n=!0;return e.mediaTypes&&(n=p.c.all(e.mediaTypes,function(e){return t.isTypeSupported(e)})),n&&("dash"===e.type||"mpd"===e.type||(e.file||"").indexOf("mpd-time-csf")>-1)}var o=n(52),a=n(11),u=n(32),c={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},s=[{name:"html5",supports:function(e){if(!1===Object(o.a)(e))return!1;if(!u.a.canPlayType)return!1;var t=e.file,n=e.type;if(Object(a.isRtmp)(t,n))return!1;var r=e.mimeType||c[n];return!!r&&!!u.a.canPlayType(r)}}],l=s,f=n(8),d=n(14),p=n(0),v=n(28),h=p.c.find(l,p.c.matches({name:"html5"})),m=h.supports;h.supports=function(e,t){var n=m.apply(this,arguments);if(n&&e.drm&&"hls"===e.type){var r=Object(d.a)(t),i=r("drm");if(i&&e.drm.fairplay){var o=window.WebKitMediaKeys;return o&&o.isTypeSupported&&o.isTypeSupported("com.apple.fps.1_0","video/mp4")}return i}return n},l.push({name:"shaka",supports:i}),l.splice(0,0,{name:"hlsjs",supports:function(e){if(e.drm)return!1;var t=f.Browser.chrome||f.Browser.firefox||f.Browser.edge||f.Browser.ie&&11===f.Browser.version.major,n=f.OS.android&&!!e.hlsjsdefault,i=!f.OS.iOS&&f.Browser.safari&&!!e.safarihlsjs,o=r()&&(t||n||i),a=e.file.indexOf(".m3u8")>-1,u="hls"===e.type||"m3u8"===e.type;return o&&(a||u)}}),l.push({name:"flash",supports:function(e){if(!f.Features.flash||e.drm)return!1;var t=e.type;return"hls"===t||"m3u8"===t||!Object(a.isRtmp)(e.file,t)&&["flv","f4v","mov","m4a","m4v","mp4","aac","f4a","mp3","mpeg","smil"].indexOf(t)>-1}});t.a=l},function(e,t,n){"use strict";function r(e){var t=e.getName().name;if(!i.a[t]){if(!u.c.find(o.a,u.c.matches({name:t}))){if(!u.c.isFunction(e.supports))throw new Error("Tried to register a provider with an invalid object");o.a.unshift({name:t,supports:e.supports})}u.c.defaults(e.prototype,a.a),i.a[t]=e}}t.a=r;var i=n(33),o=n(17),a=n(44),u=n(0)},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="8.1.3+commercial_v8-1-3.234.commercial.b996a4.hlsjs..jwplayer.cee666.dai.c24260.freewheel.782b72.googima.08db8b.vast.404e57.jwpsrv.0f8f62.gapro.fb7ea6.related.c64ebe"},function(e,t,n){"use strict";function r(){return a+o.now()}var i=n(22),o=window.performance||{timing:{}},a=o.timing.navigationStart||Object(i.a)();"now"in o||(o.now=function(){return Object(i.a)()-a});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){var e={},t={},n={},i={};return{start:function(t){e[t]=r(),n[t]=n[t]+1||1},end:function(n){if(e[n]){var i=r(),o=i-e[n];delete e[n],t[n]=t[n]+o||o}},dump:function(){var o=u({},t);for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=r(),s=c-e[a];o[a]=o[a]+s||s}return{counts:u({},n),sums:o,events:u({},i)}},tick:function(e){i[e]=r()},clear:function(e){delete i[e]},between:function(e,t){return i[t]&&i[e]?i[t]-i[e]:null}}};t.a=c},function(e,t,n){"use strict";function r(e){var t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,t}function i(e){var t=document.createElement("script");return t.type="text/javascript",t.charset="utf-8",t.async=!0,t.timeout=l,t.src=e,t}var o=n(7),a=n(5),u=n(2),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s={},l=15e3,f=2,d=3,p=function(e,t){function n(e){p=f,c.trigger(a.q,e).off()}function o(e){p=d,c.trigger(a._3,e).off()}var c=this,p=0;this.getStatus=function(){return p},this.load=function(){var a=s[e];return 0!==p?a:(a&&a.then(o).catch(n),p=1,a=new u.a(function(a,u){var c=t?r:i,s=c(e),f=function(){s.onerror=s.onload=null,clearTimeout(p)},d=function(e){f(),n(e),u(e)},p=setTimeout(function(){d(new Error("Network timeout "+e))},l);s.onerror=function(){d(new Error("Failed to load "+e))},s.onload=function(e){f(),o(e),a(e)};var v=document.getElementsByTagName("head")[0]||document.documentElement;v.insertBefore(s,v.firstChild)}),s[e]=a,a)}};c(p.prototype,o.a),t.a=p},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=Date.now||function(){return(new Date).getTime()}},function(e,t,n){"use strict";function r(e,t,n){var r=e.name,i=document.createElement("div");i.id=n.id+"_"+r,i.className="jw-plugin jw-reset";var o=s({},t),a=e.getNewInstance(n,o,i);n.addPlugin(r,a)}function i(e){switch(y(e)){case m:return e;case g:return Object(p.getAbsolutePath)(e,window.location.href)}}function o(e){return S[e]=new f,S[e]}function a(e,t){var n=e.get("id"),r=e.get("plugins");window.jwplayerPluginJsonp=P;var i=o(n);return i.load(t,E,r).then(function(e){i===S[n]&&(e&&e.forEach(function(e){e instanceof Error&&Object(j.b)(e.message)}),delete window.jwplayerPluginJsonp)})}var u=n(2),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){this.load=function(e,t,n){return n&&"object"===(void 0===n?"undefined":c(n))?u.a.all(Object.keys(n).filter(function(e){return e}).map(function(i){var o=t.addPlugin(i,!0),a=n[i];return o.load().then(function(){r(o,a,e)}).catch(function(e){return e instanceof Error?e:new Error("Error in "+i+' "'+e+'"')})})):u.b}},f=l,d=n(21),p=n(12),v=n(1),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=0,g=1,y=function(e){if("string"==typeof e){e=e.split("?")[0];var t=e.indexOf("://");if(t>0)return m;var n=e.indexOf("/"),r=Object(v.a)(e);return!(t<0&&n<0)||r&&isNaN(r)?g:2}},b=function(e){this.url=e};h(b.prototype,{load:function(){if(2===y(this.url))return u.b;var e=new d.a(i(this.url));return this.loader=e,e.load()},registerPlugin:function(e,t,n){this.name=e,this.target=t,this.js=n},getNewInstance:function(e,t,n){var r=this.js,i=new r(e,t,n);return i.addToPlayer=function(){var t=e.getContainer().querySelector(".jw-overlays");t&&(n.left=t.style.left,n.top=t.style.top,t.appendChild(n),i.displayArea=t)},i.resizeHandler=function(){var e=i.displayArea;e&&i.resize(e.clientWidth,e.clientHeight)},i}});var w=b,j=n(6),O={},k=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/,"$2")},C=function(){this.addPlugin=function(e,t){var n=k(e),r=O[n];return r?t&&r.url!==e&&Object(j.b)('JW Plugin "'+n+'" already loaded from "'+r.url+'". Ignoring "'+e+'."'):(r=new w(e),O[n]=r),r},this.getPlugins=function(){return O}},x=C;n.d(t,"b",function(){return P}),t.a=a;var E=new x,S={},P=function(e,t,n){var r=E.addPlugin(e);r.js||r.registerPlugin(e,t,n)}},function(e,t,n){"use strict";var r=n(36),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e){if(e&&e.file)return i({},{kind:"captions",default:!1},e)},a=o,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=Array.isArray,s=function(e){e=e||{},c(e.tracks)||delete e.tracks;var t=u({},{sources:[],tracks:[],minDvrWindow:120},e);t.sources!==Object(t.sources)||c(t.sources)||(t.sources=[Object(r.a)(t.sources)]),c(t.sources)&&0!==t.sources.length||(e.levels?t.sources=e.levels:t.sources=[Object(r.a)(e)]);for(var n=0;n<t.sources.length;n++){var i=t.sources[n];if(i){var o=i.default;i.default=!!o&&"true"===o.toString(),t.sources[n].label||(t.sources[n].label=n.toString()),t.sources[n]=Object(r.a)(t.sources[n])}}return t.sources=t.sources.filter(function(e){return!!e}),c(t.tracks)||(t.tracks=[]),c(t.captions)&&(t.tracks=t.tracks.concat(t.captions),delete t.captions),t.tracks=t.tracks.map(a).filter(function(e){return!!e}),t};t.a=s},function(e,t,n){"use strict";function r(e,t){var n=" "+t+" ";return 1===e.nodeType&&(" "+e.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0}function i(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild}function o(e){return e+(e.toString().indexOf("%")>0?"":"px")}function a(e){return b.c.isString(e.className)?e.className.split(" "):[]}function u(e,t){t=Object(y.h)(t),e.className!==t&&(e.className=t)}function c(e){return e.classList?e.classList:a(e)}function s(e,t){var n=a(e),r=b.c.isArray(t)?t:t.split(" ");b.c.each(r,function(e){b.c.contains(n,e)||n.push(e)}),u(e,n.join(" "))}function l(e,t){var n=a(e),r=b.c.isArray(t)?t:t.split(" ");u(e,b.c.difference(n,r).join(" "))}function f(e,t,n){var r=e.className||"";t.test(r)?r=r.replace(t,n):n&&(r+=" "+n),u(e,r)}function d(e,t,n){var i=r(e,t);(n=b.c.isBoolean(n)?n:!i)!==i&&(n?s(e,t):l(e,t))}function p(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function v(e){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}function h(e){e&&p(e)}function m(e){var t={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!e||!document.body.contains(e))return t;var n=e.getBoundingClientRect(),r=window.pageYOffset,i=window.pageXOffset;return n.width||n.height||n.left||n.top?(t.left=n.left+i,t.right=n.right+i,t.top=n.top+r,t.bottom=n.bottom+r,t.width=n.right-n.left,t.height=n.bottom-n.top,t):t}function g(e,t){e.insertBefore(t,e.firstChild)}t.h=r,t.e=i,t.l=o,t.d=c,t.a=s,t.j=l,t.k=f,t.m=d,t.g=p,t.b=v,t.f=h,t.c=m,t.i=g;var y=n(1),b=n(0)},function(e,t,n){"use strict";function r(e,t,n,r){n=n||"all-players";var o="";if("object"===(void 0===t?"undefined":d(t))){var a=document.createElement("div");i(a,t);var u=a.style.cssText;r&&u&&(u=u.replace(/;/g," !important;")),o="{"+u+"}"}else"string"==typeof t&&(o=t);if(""===o||"{}"===o)return void f.a.clear(n,e);f.a.style([[e,e+o]],n)}function i(e,t){if(void 0!==e&&null!==e){void 0===e.length&&(e=[e]);var n,r={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=a(n,t[n]));for(var i=0;i<e.length;i++){var u,c=e[i];if(void 0!==c&&null!==c)for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(u=o(n),c.style[u]!==r[n]&&(c.style[u]=r[n]))}}}function o(e){e=e.split("-");for(var t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join("")}function a(e,t){return""===t||void 0===t||null===t?"":"string"==typeof t&&isNaN(t)?/png|gif|jpe?g/i.test(t)&&t.indexOf("url")<0?"url("+t+")":t:0===t||"z-index"===e||"opacity"===e?""+t:/color/i.test(e)?"#"+Object(s.d)(t.toString(16).replace(/^0x/i,""),6):Math.ceil(t)+"px"}function u(e,t){i(e,{transform:t,webkitTransform:t,msTransform:t,mozTransform:t,oTransform:t})}function c(e,t){var n="rgb",r=void 0!==t&&100!==t;if(r&&(n+="a"),!v){var i=document.createElement("canvas");i.height=1,i.width=1,v=i.getContext("2d")}e?isNaN(parseInt(e,16))||(e="#"+e):e="#000000",v.clearRect(0,0,1,1),v.fillStyle=e,v.fillRect(0,0,1,1);var o=v.getImageData(0,0,1,1).data;return n+="("+o[0]+", "+o[1]+", "+o[2],r&&(n+=", "+t/100),n+")"}n.d(t,"a",function(){return p}),t.b=r,t.d=i,t.e=u,t.c=c;var s=n(1),l=n(39),f=n.n(l),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=f.a.clear,v=void 0},function(e,t,n){"use strict";var r=[];t.a=r},function(e,t,n){"use strict";function r(e){return e.some(function(e){return!!e.drm||e.sources.some(function(e){return!!e.drm})})}function i(e){return new l.a(function(t,n){var r=void 0;try{r=new window.MSMediaKeys(e)}catch(e){return void n(e)}t(r)})}function o(e){if(v)return v;if(a()&&Object(s.a)(e)("drm")){var t=i;return navigator.requestMediaKeySystemAccess&&(t=navigator.requestMediaKeySystemAccess.bind(navigator)),f.forEach(function(e){var n=t(e.keyName,[{initDataTypes:["cenc"],videoCapabilities:[{contentType:'video/mp4;codecs="avc1.4d401e"'}],audioCapabilities:[{contentType:'audio/mp4;codecs="mp4a.40.2"'}]}]).then(function(){p[e.configName]=!0}).catch(function(){p[e.configName]=!1});d.push(n)}),v=l.a.all(d)}return l.b}function a(){return!!navigator.requestMediaKeySystemAccess&&!!MediaKeySystemAccess.prototype.getConfiguration||!!window.MSMediaKeys}function u(e){return p[e]}function c(e){if(v)return Object.keys(e).some(function(e){return u(e)})}t.b=r,t.d=o,t.c=u,t.a=c;var s=n(14),l=n(2),f=[{configName:"clearkey",keyName:"org.w3.clearkey"},{configName:"widevine",keyName:"com.widevine.alpha"},{configName:"playready",keyName:"com.microsoft.playready"}],d=[],p={},v=void 0},function(e,t,n){"use strict";function r(e){return null!==g.match(e)}function i(e){return function(){return r(e)}}function o(){var e=m();return!!(e&&e>=18)}function a(){return r(/\sEdge\/\d+/i)}function u(){return r(/msie/i)}function c(){return r(/\s(?:Chrome|CriOS)\//i)&&!a()}function s(){return a()||b()||u()}function l(){return r(/safari/i)&&!r(/(?:Chrome|CriOS|chromium|android|phantom)/i)}function f(){return r(/iP(hone|ad|od)/i)}function d(){return!(r(/chrome\/[123456789]/i)&&!r(/chrome\/18/i)&&!y())&&p()}function p(){return r(/Android/i)&&!r(/Windows Phone/i)}function v(){return f()||p()||r(/Windows Phone/i)}function h(){try{return window.self!==window.top}catch(e){return!0}}function m(){if(p())return 0;var e,t=navigator.plugins;if(t&&(e=t["Shockwave Flash"])&&e.description)return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/,"$1"));if(void 0!==window.ActiveXObject){try{if(e=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,"."))}catch(e){return 0}return e}return 0}t.h=o,n.d(t,"f",function(){return y}),n.d(t,"l",function(){return w}),n.d(t,"k",function(){return j}),n.d(t,"p",function(){return O}),n.d(t,"g",function(){return k}),t.e=a,t.n=u,t.d=c,t.i=s,t.q=l,t.j=f,t.c=d,t.b=p,t.o=v,t.m=h,t.a=m;var g=navigator.userAgent,y=i(/gecko\//i),b=i(/trident\/.+rv:\s*11/i),w=i(/iP(hone|od)/i),j=i(/iPad/i),O=i(/Macintosh/i),k=i(/FBAV/i)},function(e,t,n){"use strict";function r(e){this.config=e||{}}var i=n(17),o=n(18),a=n(33),u=n(9),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s={html5:function(){return n.e(7).then(function(e){var t=n(112).default;return Object(o.a)(t),t}.bind(null,n)).catch(u.b)}};c(r.prototype,{load:function(e){return Promise.all(e.filter(function(e){return!!s[e.name]}).map(function(e){return(0,s[e.name])()}))},providerSupports:function(e,t){return e.supports(t)},required:function(e){var t=this;return e=e.slice(),i.a.filter(function(n){for(var r=!1,i=e.length;i--;){var o=e[i],a=o.sources[0];if(a){var u=t.providerSupports(n,a);u&&e.splice(i,1),r=r||u}}return r})},choose:function(e){e=e===Object(e)?e:{};for(var t=i.a.length,n=0;n<t;n++){var r=i.a[n];if(this.providerSupports(r,e)){return{priority:t-n-1,name:r.name,type:e.type,providerToCheck:r,provider:a.a[r.name]}}}return null}});var l=r,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=void 0;f(s,{shaka:function(){return n.e(5).then(function(e){var t=n(121).default;return Object(o.a)(t),t}.bind(null,n)).catch(u.b)},hlsjs:function(){return n.e(6).then(function(e){var t=n(122).default;return t.setEdition&&t.setEdition(d),Object(o.a)(t),t}.bind(null,n)).catch(u.b)},flash:function(){return n.e(9).then(function(e){var t=n(123).default;return Object(o.a)(t),t}.bind(null,n)).catch(u.b)}}),l.prototype.providerSupports=function(e,t){return d=this.config.edition,e.supports(t,d)};t.a=l},function(e,t,n){"use strict";function r(e){this.message=e}function i(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,i,a="",u=0,c=0;i=t.charAt(c++);~i&&(n=u%4?64*n+i:i,u++%4)?a+=String.fromCharCode(255&n>>(-2*u&6)):0)i=o.indexOf(i);return a}n.d(t,"a",function(){return a});var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.name="InvalidCharacterError";var a=window.atob||i},function(e,t,n){"use strict";var r=document.createElement("video");t.a=r},function(e,t,n){"use strict";var r={};t.a=r},function(e,t,n){"use strict";var r=n(35),i=n(14),o=n(31),a="invalid",u=function(e){var t=void 0,n=void 0,u=void 0;this.edition=function(){return u&&u.getTime()<(new Date).getTime()?a:t},this.token=function(){return n},this.expiration=function(){return u},function(e,c){try{var s=Object(r.a)(e,Object(o.a)(c)),l=s.split("/");"pro"===(t=l[0])&&(t="premium");var f=Object(i.a)(t);if(l.length>2&&f("setup")){n=l[1];var d=parseInt(l[2]);d>0&&(u=new Date,u.setTime(d))}else t=a}catch(e){t=a}}(e||"","NDh2aU1Cb0NHRG5hcDFRZQ==")};t.a=u},function(e,t,n){"use strict";function r(e){return Object(s.a)(e)}function i(e){return unescape(encodeURIComponent(e))}function o(e){try{return decodeURIComponent(escape(e))}catch(t){return e}}function a(e){for(var t=new Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);return t}function u(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);return t.join("")}function c(e,t){if(e=String(e),t=String(t),0===e.length)return"";for(var n=a(r(e)),c=a(i(t).slice(0,16)),s=n.length,l=n[s-1],f=n[0],d=void 0,p=void 0,v=2654435769*Math.floor(6+52/s);v;){p=v>>>2&3;for(var h=s-1;h>=0;h--)l=n[h>0?h-1:s-1],d=(l>>>5^f<<2)+(f>>>3^l<<4)^(v^f)+(c[3&h^p]^l),f=n[h]-=d;v-=2654435769}return o(u(n).replace(/\0+$/,""))}t.a=c;var s=n(31)},function(e,t,n){"use strict";var r=n(11),i=n(1),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e){if(e&&e.file){var t=o({},{default:!1},e);t.file=Object(i.h)(""+t.file);var n=/^[^\/]+\/(?:x-)?([^\/]+)$/;if(n.test(t.type)&&(t.mimeType=t.type,t.type=t.type.replace(n,"$1")),Object(r.isYouTube)(t.file)?t.type="youtube":Object(r.isRtmp)(t.file)?t.type="rtmp":t.type||(t.type=Object(i.a)(t.file)),t.type){switch(t.type){case"m3u8":case"vnd.apple.mpegurl":t.type="hls";break;case"dash+xml":t.type="dash";break;case"m4a":t.type="aac";break;case"smil":t.type="rtmp"}return Object.keys(t).forEach(function(e){""===t[e]&&delete t[e]}),t}}};t.a=a},function(e,t,n){"use strict";function r(e){for(var t=[],n=0;n<Object(a.c)(e);n++){var r=e.childNodes[n];"jwplayer"===r.prefix&&"mediatypes"===Object(a.b)(r).toLowerCase()&&t.push(Object(a.d)(r))}return t}function i(e){var t=[];t.feedData={};for(var n=0;n<Object(a.c)(e);n++){var r=Object(a.a)(e,n);if("channel"===Object(a.b)(r).toLowerCase())for(var i=0;i<Object(a.c)(r);i++){var u=Object(a.a)(r,i),c=Object(a.b)(u).toLowerCase();"item"===c?t.push(o(u)):c&&(t.feedData[c]=Object(a.d)(u))}}return t}function o(e){for(var t={},n=0;n<e.childNodes.length;n++){var r=e.childNodes[n],i=Object(a.b)(r);if(i)switch(i.toLowerCase()){case"enclosure":t.file=Object(u.i)(r,"url");break;case"title":t.title=Object(a.d)(r);break;case"guid":t.mediaid=Object(a.d)(r);break;case"pubdate":t.date=Object(a.d)(r);break;case"description":t.description=Object(a.d)(r);break;case"link":t.link=Object(a.d)(r);break;case"category":t.tags?t.tags+=Object(a.d)(r):t.tags=Object(a.d)(r)}}return new p.a(d(e,l(e,t)))}var a=n(13),u=n(1),c=n(6),s=function e(t,n){for(var i=[],o=0;o<Object(a.c)(t);o++){var s=t.childNodes[o];if("media"===s.prefix){if(!Object(a.b)(s))continue;switch(Object(a.b)(s).toLowerCase()){case"content":if(Object(u.i)(s,"duration")&&(n.duration=c.a.seconds(Object(u.i)(s,"duration"))),Object(u.i)(s,"url")){n.sources||(n.sources=[]);var l={file:Object(u.i)(s,"url"),type:Object(u.i)(s,"type"),width:Object(u.i)(s,"width"),label:Object(u.i)(s,"label")},f=r(s);f.length&&(l.mediaTypes=f),n.sources.push(l)}Object(a.c)(s)>0&&(n=e(s,n));break;case"title":n.title=Object(a.d)(s);break;case"description":n.description=Object(a.d)(s);break;case"guid":n.mediaid=Object(a.d)(s);break;case"thumbnail":n.image||(n.image=Object(u.i)(s,"url"));break;case"group":e(s,n);break;case"subtitle":var d={};d.file=Object(u.i)(s,"url"),d.kind="captions",Object(u.i)(s,"lang").length>0&&(d.label=function(e){var t={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};return t[e]?t[e]:e}(Object(u.i)(s,"lang"))),i.push(d)}}}n.hasOwnProperty("tracks")||(n.tracks=[]);for(var p=0;p<i.length;p++)n.tracks.push(i[p]);return n},l=s,f=function(e,t){for(var n="default",r=[],i=[],o=0;o<e.childNodes.length;o++){var s=e.childNodes[o];if("jwplayer"===s.prefix){var l=Object(a.b)(s);"source"===l?(delete t.sources,r.push({file:Object(u.i)(s,"file"),default:Object(u.i)(s,n),label:Object(u.i)(s,"label"),type:Object(u.i)(s,"type")})):"track"===l?(delete t.tracks,i.push({file:Object(u.i)(s,"file"),default:Object(u.i)(s,n),kind:Object(u.i)(s,"kind"),label:Object(u.i)(s,"label")})):(t[l]=c.a.serialize(Object(a.d)(s)),"file"===l&&t.sources&&delete t.sources)}t.file||(t.file=t.link)}if(r.length){t.sources=[];for(var f=0;f<r.length;f++)r[f].file.length>0&&(r[f][n]="true"===r[f][n],r[f].label.length||delete r[f].label,t.sources.push(r[f]))}if(i.length){t.tracks=[];for(var d=0;d<i.length;d++)i[d].file.length>0&&(i[d][n]="true"===i[d][n],i[d].kind=i[d].kind.length?i[d].kind:"captions",i[d].label.length||delete i[d].label,t.tracks.push(i[d]))}return t},d=f,p=n(24);t.a=i},function(e,t,n){"use strict";function r(e,t){return/touch/.test(e.type)?(e.originalEvent||e).changedTouches[0]["page"+t]:e["page"+t]}function i(e){var t=e||window.event;return e instanceof MouseEvent&&("which"in t?3===t.which:"button"in t&&2===t.button)}function o(e){var t=e||window.event;return t instanceof KeyboardEvent&&13===t.keyCode&&(e.stopPropagation(),!0)}function a(e,t,n){var r=void 0;return r=t instanceof MouseEvent||!t.touches&&!t.changedTouches?t:t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0],{type:e,sourceEvent:t,target:t.target,currentTarget:n,pageX:r.pageX,pageY:r.pageY}}function u(e){(e instanceof MouseEvent||e instanceof v)&&(e.preventManipulation&&e.preventManipulation(),e.preventDefault&&e.preventDefault())}function c(e){return g&&e instanceof v||m&&e instanceof h&&"touch"===e.pointerType?"touch":"mouse"}t.b=c;var s=n(8),l=n(5),f=n(7),d=n(22),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=window.TouchEvent,h=window.PointerEvent,m="PointerEvent"in window&&!s.OS.android,g="ontouchstart"in window,y=!(m||g&&s.OS.mobile),b=s.Browser.firefox&&s.OS.mac,w=function(e,t){function n(e){"touch"!==e.pointerType&&j(l.R,e)}function c(e){"touch"!==e.pointerType&&j(l.O,e)}function f(t){(y||m&&"touch"!==t.pointerType&&!e.contains(document.elementFromPoint(t.x,t.y)))&&j(l.Q,t)}function p(e){o(e)&&j(l.p,e)}function v(e,t,n){e.removeEventListener(t,n),e.addEventListener(t,n)}function h(n){P=n.target,C=r(n,"X"),x=r(n,"Y"),i(n)||("pointerdown"===n.type&&n.isPrimary?(t.preventScrolling&&(T=n.pointerId,e.setPointerCapture(T)),v(e,"pointermove",g,_),v(e,"pointercancel",w),"mouse"===n.pointerType&&"OBJECT"===P.nodeName?v(document,"mouseup",w):v(e,"pointerup",w)):"mousedown"===n.type?(v(document,"mousemove",g,_),b&&"object"===n.target.nodeName.toLowerCase()?v(e,"click",w):v(document,"mouseup",w)):"touchstart"===n.type&&(v(P,"touchmove",g,_),v(P,"touchcancel",w),v(P,"touchend",w)),t.preventScrolling&&u(n))}function g(e){if(k)j(l.m,e);else{var n=r(e,"X"),i=r(e,"Y"),o=n-C,a=i-x;o*o+a*a>36&&(j(l.o,e),k=!0,j(l.m,e))}t.preventScrolling&&u(e)}function w(n){var r="pointerup"===n.type||"pointercancel"===n.type;r&&t.preventScrolling&&e.releasePointerCapture(T),e.removeEventListener("pointermove",g),e.removeEventListener("pointercancel",w),e.removeEventListener("pointerup",w),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",w),P&&(P.removeEventListener("touchmove",g),P.removeEventListener("touchcancel",w),P.removeEventListener("touchend",w)),k?j(l.n,n):t.directSelect&&n.target!==e||-1!==n.type.indexOf("cancel")||("mouseup"===n.type||"click"===n.type||r&&"mouse"===n.pointerType?j(l.h,n):(j(l._10,n),"touchend"===n.type&&u(n))),P=null,k=!1}function j(e,n){var r=void 0;if(t.enableDoubleTap&&(e===l.h||e===l._10))if(Object(d.a)()-E<S){var i=e===l.h?l.k:l.l;r=a(i,n,O),N.trigger(i,r),E=0}else E=Object(d.a)();r=a(e,n,O),N.trigger(e,r)}var O=e,k=!1,C=0,x=0,E=0,S=300,P=void 0,T=void 0;t=t||{};var _=!!s.Features.passiveEvents&&{passive:!t.preventScrolling};m?(e.addEventListener("pointerdown",h,_),t.useHover&&(e.addEventListener("pointerover",n),e.addEventListener("pointerout",f)),t.useMove&&e.addEventListener("pointermove",c)):(y&&(e.addEventListener("mousedown",h,_),t.useHover&&(e.addEventListener("mouseover",n),e.addEventListener("mouseout",f)),t.useMove&&e.addEventListener("mousemove",c)),e.addEventListener("touchstart",h,_)),e.addEventListener("keydown",p),t.useFocus&&(e.addEventListener("focus",n),e.addEventListener("blur",f));var N=this;return this.triggerEvent=j,this.destroy=function(){this.off(),e.removeEventListener("touchstart",h),e.removeEventListener("mousedown",h),e.removeEventListener("keydown",p),P&&(P.removeEventListener("touchmove",g),P.removeEventListener("touchcancel",w),P.removeEventListener("touchend",w),P=null),m&&(t.preventScrolling&&e.releasePointerCapture(T),e.removeEventListener("pointerover",n),e.removeEventListener("pointerdown",h),e.removeEventListener("pointermove",g),e.removeEventListener("pointermove",c),e.removeEventListener("pointercancel",w),e.removeEventListener("pointerout",f),e.removeEventListener("pointerup",w)),e.removeEventListener("click",w),e.removeEventListener("mouseover",n),e.removeEventListener("mousemove",c),e.removeEventListener("mouseout",f),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",w),t.useFocus&&(e.removeEventListener("focus",n),e.removeEventListener("blur",f))},this};p(w.prototype,f.a),t.a=w},function(e,t,n){var r;void 0!==(r=function(e,t,n){function r(e,t){o(t,a(e))}function i(e,t){var n=f[e];if(n)if(t){var r=n[t];if(r)for(var i=0;i<r.parts.length;i+=1)r.parts[i]()}else{for(var o=Object.keys(n),a=0;a<o.length;a+=1)for(var u=n[o[a]],c=0;c<u.parts.length;c+=1)u.parts[c]();delete f[e]}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=(f[e]||{})[r.id];if(i){for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(s(e,r.parts[o]))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(s(e,r.parts[o]));f[e]=f[e]||{},f[e][r.id]={id:r.id,parts:a}}}}function a(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],u=i[2],c={css:a,media:u};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function u(e){p().appendChild(e)}function c(e){var t=document.createElement("style");return t.type="text/css",t.setAttribute("data-jwplayer-id",e),u(t),t}function s(e,t){var n,r,i,o=d[e];o||(o=d[e]={element:c(e),counter:0});var a=o.counter++;return n=o.element,r=function(e){l(n,a,e)},i=function(){l(n,a,"")},r(t.css),function(e){if(e){if(e.css===t.css&&e.media===t.media)return;t=e,r(t.css)}else i()}}function l(e,t,n){if(e.styleSheet)e.styleSheet.cssText=v(t,n);else{var r=document.createTextNode(n),i=e.childNodes,o=i[t];o?e.replaceChild(r,o):e.appendChild(r)}}var f={},d={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return document.head||document.getElementsByTagName("head")[0]});n.exports={style:r,clear:i};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}.call(t,n,t,e))&&(e.exports=r)},function(e,t,n){"use strict";function r(e,t,n){function r(){for(;i.length>0;){var t=i.shift(),n=t.command,r=t.args;(o[n]||e[n]).apply(e,r)}}var i=[],o={};t.forEach(function(t){var a=e[t];o[t]=a,e[t]=function(){var e=Array.prototype.slice.call(arguments,0);n()?i.push({command:t,args:e}):(r(),a&&a.apply(this,e))}}),Object.defineProperty(this,"queue",{enumerable:!0,get:function(){return i}}),this.flush=r,this.empty=function(){i.length=0},this.off=function(){t.forEach(function(t){var n=o[t];n&&(e[t]=n,delete o[t])})},this.destroy=function(){this.off(),this.empty()}}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=t.indexOf(":")+1,r=n>0?t.substr(0,n):"Error loading player:",u=t.substr(n),c=i(e.get("id"),r,u),s=e.get("width"),l=e.get("height"),f=Object(o.e)(c);return Object(a.d)(f,{width:s.toString().indexOf("%")>0?s:s+"px",height:l.toString().indexOf("%")>0?l:l+"px"}),f}var i=function(e){return'<div id="'+e+'" class="jw-error jw-reset"><div class="jw-error-msg jw-reset"><style>[id="'+e+'"].jw-error{position:relative;background:#000;overflow:hidden;position:relative}[id="'+e+'"] .jw-error-msg{top:50%;left:50%;position:absolute;align-items:center;display:flex;transform:translate(-50%,-50%)}[id="'+e+'"] .jw-title{color:#FFF;position:static}[id="'+e+'"] .jw-title-primary,[id="'+e+'"] .jw-title-secondary{font:600 14px/1.35 Arial,Helvetica,sans-serif}[id="'+e+'"] .jw-title-secondary{font-weight:400}</style><div class="jw-icon jw-reset"></div><div class="jw-title jw-reset"><div class="jw-title-primary jw-reset">'+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+'</div><div class="jw-title-secondary jw-reset">'+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"")+"</div></div></div></div>"},o=n(25),a=n(26);t.a=r},function(e,t,n){"use strict";var r=n(7),i={on:r.a.on,once:r.a.once,off:r.a.off,trigger:r.a.trigger,get:function(e){return this.attributes=this.attributes||{},this.attributes[e]},set:function(e,t){if(this.attributes=this.attributes||{},this.attributes[e]!==t){var n=this.attributes[e];this.attributes[e]=t,this.trigger("change:"+e,this,t,n)}},clone:function(){var e={},t=this.attributes;if(t)for(var n in t)e[n]=t[n];return e},change:function(e,t,n){this.on("change:"+e,t,n);var r=this.get(e);return t.call(n,this,r,r),this}};t.a=i},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var r=n(5),i={audioMode:!1,flashBlocked:!1,item:0,itemMeta:{},playbackRate:1,playRejected:!1,state:r._5,itemReady:!1},o={position:0,duration:0,buffer:0}},function(e,t,n){"use strict";var r=n(5),i=function(){},o=function(){return!1},a={name:"default"},u=function(){return a},c={supports:o,play:i,pause:i,preload:i,load:i,stop:i,volume:i,mute:i,seek:i,resize:i,remove:i,destroy:i,eventsOn_:i,eventsOff_:i,setVisibility:i,setFullscreen:i,getFullscreen:o,getContainer:i,setContainer:o,getName:u,getQualityLevels:i,getCurrentQuality:i,setCurrentQuality:i,getAudioTracks:i,getCurrentAudioTrack:i,setCurrentAudioTrack:i,setPlaybackRate:i,getPlaybackRate:function(){return 1},checkComplete:i,setControls:i,attachMedia:i,detachMedia:i,init:i,setState:function(e){this.state=e,this.trigger(r.T,{newstate:e})},sendMediaType:function(e){var t=e[0].type,n="oga"===t||"aac"===t||"mp3"===t||"mpeg"===t||"vorbis"===t;this.trigger(r.L,{mediaType:n?"audio":"video"})}};t.a=c},function(e,t,n){"use strict";function r(e){Object.keys(e).forEach(function(t){"id"!==t&&(e[t]=Object(S.serialize)(e[t]))})}function i(e){return e.slice&&"px"===e.slice(-2)&&(e=e.slice(0,-2)),e}function o(e,t){if(-1===t.toString().indexOf("%"))return 0;if("string"!=typeof e||!e)return 0;if(/^\d*\.?\d+%$/.test(e))return e;var n=e.indexOf(":");if(-1===n)return 0;var r=parseFloat(e.substr(0,n)),i=parseFloat(e.substr(n+1));return r<=0||i<=0?0:i/r*100+"%"}function a(e){var t=e.flashplayer;return t||(t=(Object(E.getScriptPath)("jwplayer.js")||e.base)+"jwplayer.flash.swf"),"http:"===window.location.protocol&&(t=t.replace(/^https/,"http")),t}function u(e){var t="file:"===window.location.protocol?"https:":"",n={jwpsrv:"//ssl.p.jwpcdn.com/player/v/8.1.3/jwpsrv.js",dai:"//ssl.p.jwpcdn.com/player/plugins/dai/v/0.2.1/dai.js",vast:"//ssl.p.jwpcdn.com/player/plugins/vast/v/8.1.1/vast.js",googima:"//ssl.p.jwpcdn.com/player/plugins/googima/v/8.1.6/googima.js",freewheel:"//ssl.p.jwpcdn.com/player/plugins/freewheel/v/2.1.2/freewheel.js",related:"//ssl.p.jwpcdn.com/player/plugins/related/v/6.1.3/related.js",gapro:"//ssl.p.jwpcdn.com/player/plugins/gapro/v/2.1.3/gapro.js"},r=n[e];return r?t+r:""}function c(e,t,n){if(t){e[t.client||u(n)]=t,delete t.client}}function s(e){var t=M({},e.plugins),n=e.edition,r=Object(A.a)(n);if(r("ads")){var i=M({},e.advertising),o=i.client;if(o){t[u(o)||o]=i,delete i.client}}if(r("jwpsrv")){var a=e.analytics;a!==Object(a)&&(a={}),c(t,a,"jwpsrv")}c(t,e.ga,"gapro");var s=e.related,l=s===Object(s)&&r("discovery");if(!1!==e.controls||l){var f=!1!==e.visualplaylist||l;l||(s={disableRelated:!0}),s.showButton=f,c(t,s,"related")}return t}function l(e){var t=e.get("playlist");if("string"==typeof t)return new q.a(function(n,r){var i=new D.a;i.on(B.W,function(t){var r=t.playlist;delete t.playlist,f(e,r,t),n()}),i.on(B.q,function(t){f(e,[],{}),r(new Error("Error loading playlist: "+t.message))}),i.load(t)});var n=e.get("feedData")||{};return f(e,t,n),q.b}function f(e,t,n){var r=e.attributes;r.playlist=Object(Q.a)(t),r.feedData=n}function d(e){return l(e).then(function(){if(!h(e)){var t=Object(Q.b)(e.get("playlist"),e);Object(Q.c)(t);var n=e.getProviders(),r=n.required([t[0]]);if(!R.a.html5||!r||"html5"!==r[0].name)return n.load(r)}})}function p(e){for(var t=document.styleSheets,n=0,r=t.length;n<r;n++)if(t[n].href===e)return!0;return!1}function v(e){var t=e.get("skin")?e.get("skin").url:void 0;if("string"==typeof t&&!p(t)){return new X.a(t,!0).load().catch(function(e){return e})}return q.b}function h(e){return e.attributes._destroyed}function m(e){return l(e).then(function(){return e.get("drm")||Object(W.b)(e.get("playlist"))?Object(W.d)(e.get("edition")):q.b})}function g(e){return m(e).then(function(){return V(e)})}function y(e,t){this.namespace=e,this.items=t}function b(){for(var e=oe.c,t=[],n=[],r=0;r<e;r++){var i=j();t.push(i),n.push(i)}var o=n.shift();return{prime:function(){t.forEach(w)},getPrimedElement:function(){return n.length?n.shift():null},getAdElement:function(){return o},clean:function(e){if(e.src){e.removeAttribute("src");try{e.load()}catch(e){}}},recycle:function(e){e&&!n.some(function(t){return t===e})&&(this.clean(e),n.push(e))},syncVolume:function(e){t.forEach(function(t){t.volume=e/100})},syncMute:function(e){t.forEach(function(t){t.muted=e})}}}function w(e){if(e.src){if(ae.OS.android&&!e.parentNode){var t=e.played;(!t||t&&!t.length)&&e.load()}}else e.load()}function j(){var e=document.createElement("video");return e.className="jw-video jw-reset",e.setAttribute("disableRemotePlayback",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("playsinline",""),e}function O(e,t){q.b.then(function(){var n=t.message,r=t.code,i=Object(ie.a)(e,n);ie.a.cloneIcon&&i.querySelector(".jw-icon").appendChild(ie.a.cloneIcon("error")),k(e,i);var o={message:n,code:r,error:t},a=e._model||e.modelShim;a.set("errorEvent",o),a.set("state",B._4),e.trigger(B._1,o)})}function k(e,t){if(!document.body.contains(e.currentContainer)){var n=document.getElementById(e.get("id"));n&&(e.currentContainer=n)}e.currentContainer.parentElement&&e.currentContainer.parentElement.replaceChild(t,e.currentContainer),e.currentContainer=t}var C=n(40),x=n(0),E=n(16),S=n(12),P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T={autostart:!1,controls:!0,displaytitle:!0,displaydescription:!0,defaultPlaybackRate:1,playbackRateControls:!1,playbackRates:[.5,1,1.25,1.5,2],repeat:!1,castAvailable:!1,stretching:"uniform",mute:!1,volume:90,width:640,height:360,localization:{player:"Video Player",play:"Play",playback:"Start Playback",pause:"Pause",volume:"Volume",prev:"Previous",next:"Next",cast:"Chromecast",airplay:"AirPlay",fullscreen:"Fullscreen",playlist:"Playlist",hd:"Quality",cc:"Closed Captions",audioTracks:"Audio Tracks",playbackRates:"Playback Rates",replay:"Replay",buffer:"Loading",more:"More",liveBroadcast:"Live broadcast",loadingAd:"Loading ad",rewind:"Rewind 10 Seconds",nextUp:"Next Up",nextUpClose:"Next Up Close",related:"Discover",close:"Close",settings:"Settings",unmute:"Unmute",copied:"Copied"},renderCaptionsNatively:!1,nextUpDisplay:!0},_=function(e,t){var a=P({},(window.jwplayer||{}).defaults,t,e);r(a),a.localization=P({},T.localization,a.localization);var u=P({},T,a);"."===u.base&&(u.base=Object(E.getScriptPath)("jwplayer.js")),u.base=(u.base||Object(E.loadFrom)()).replace(/\/?$/,"/"),n.p=u.base,u.width=i(u.width),u.height=i(u.height),u.aspectratio=o(u.aspectratio,u.width);var c=u.playbackRateControls;if(c){var s=u.playbackRates;Array.isArray(c)&&(s=c),s=s.filter(function(e){return x.c.isNumber(e)&&e>=.25&&e<=4}).map(function(e){return Math.round(4*e)/4}),s.indexOf(1)<0&&s.push(1),s.sort(),u.playbackRateControls=!0,u.playbackRates=s}(!u.playbackRateControls||u.playbackRates.indexOf(u.defaultPlaybackRate)<0)&&(u.defaultPlaybackRate=1),u.playbackRate=u.defaultPlaybackRate,u.aspectratio||delete u.aspectratio;var l=u.playlist;if(l)Array.isArray(l.playlist)&&(u.feedData=l,u.playlist=l.playlist);else{var f=x.c.pick(u,["title","description","type","mediaid","image","file","sources","tracks","preload","duration"]);u.playlist=[f]}return u.qualityLabels=u.qualityLabels||u.hlslabels,delete u.duration,u},N=_,L=n(34),A=n(14),M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var r=N(e,t),i=r.key||window.jwplayer&&window.jwplayer.key,o=new L.a(i),u=o.edition();if(r.key=i,r.edition=u,r.error=null,"unlimited"===u){var c=Object(E.getScriptPath)("jwplayer.js");if(!c)throw new Error("Error setting up player: Could not locate jwplayer.js script tag");n.p=c}if("invalid"===u){var l=void 0===i?"Missing":"Invalid";r.error=new Error("Error setting up player: "+l+" license key")}return r.flashplayer=a(r),r.plugins=s(r),r},I=F,R=n(9),B=n(5),q=n(2),D=n(47),Q=n(48),X=n(21),z=function(e){return h(e)?q.a.reject():q.a.all([d(e),v(e)])},V=z,W=n(28),H=n(23),U=function(e){var t=void 0;this.start=function(n){var r=q.a.all([Object(R.c)(e),g(e),Object(H.a)(e,n)]),i=new q.a(function(e,n){t=setTimeout(function(){n(new Error("Setup Timeout Error: Setup took longer than 30 seconds to complete."))},3e4);var i=function(){clearTimeout(t),e()};r.then(i).catch(i)});return q.a.race([r,i])},this.destroy=function(){clearTimeout(t),e=null}},J=U,$=n(30),K=n(20),Y=n(15),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z={removeItem:function(){}};try{Z=window.localStorage||Z}catch(e){}G(y.prototype,{getAllItems:function(){var e=this;return this.items.reduce(function(t,n){var r=Z[e.namespace+"."+n];return r&&(t[n]=Object(S.serialize)(r)),t},{})},track:function(e){var t=this;this.items.forEach(function(n){e.on("change:"+n,function(e,r){try{Z[t.namespace+"."+n]=r}catch(e){Y.a.debug&&console.error(e)}})})},clear:function(){var e=this;this.items.forEach(function(t){Z.removeItem(e.namespace+"."+t)})}});var ee=y,te=n(42),ne=n(43),re=n(7),ie=n(41),oe=n(49),ae=n(8),ue=n(50);t.b=k;var ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se=function(){};ce(se.prototype,te.a);var le=function(e){this._events={},this.modelShim=new se,this.modelShim._qoeItem=new K.a,this.mediaShim={},this.setup=new J(this.modelShim),this.currentContainer=this.originalContainer=e,this.apiQueue=new C.a(this,["load","play","pause","seek","stop","playlistItem","playlistNext","playlistPrev","next","setConfig","setCurrentAudioTrack","setCurrentCaptions","setCurrentQuality","setFullscreen","addButton","removeButton","castToggle","setMute","setVolume","setPlaybackRate","setCues","resize","setCaptions","setControls"],function(){return!0})};ce(le.prototype,{on:re.a.on,once:re.a.once,off:re.a.off,trigger:re.a.trigger,init:function(e,t){var n=this,r=this.modelShim,i=new ee("jwplayer",["volume","mute","captionLabel","qualityLabel"]),o=i&&i.getAllItems();r.attributes=r.attributes||{},ce(this.mediaShim,ne.a);var a=I(e,o);ce(r.attributes,a,ne.b),r.getProviders=function(){return new $.a(a)},r.setProvider=function(){};var u=b();return ae.Features.backgroundLoading||(u=Object(ue.a)(u.getPrimedElement(),u)),u.prime(),this.setup.start(t).then(function(e){var r=e[0];if(n.setup){var o=n.modelShim.clone();if(o.error instanceof Error)throw o.error;var a=n.apiQueue.queue.slice(0);n.apiQueue.destroy(),ce(n,r.prototype),n.setup(o,t,n.originalContainer,n._events,a,u);var c=n._model;return i.track(c),n.updatePlaylist(c.get("playlist"),c.get("feedData"))}}).then(function(){n.setup&&n.playerReady()}).catch(function(e){n.setup&&O(n,e)})},playerDestroy:function(){this.apiQueue&&this.apiQueue.destroy(),this.setup&&this.setup.destroy(),this.off(),this._events=this._model=this.originalContainer=this.apiQueue=this.setup=null},getContainer:function(){return this.currentContainer},get:function(e){return e in this.mediaShim?this.mediaShim[e]:this.modelShim.get(e)},getItemQoe:function(){return this.modelShim._qoeItem},getConfig:function(){return ce({},this.modelShim.attributes,this.mediaShim)},getCurrentCaptions:function(){return this.get("captionsIndex")},getWidth:function(){return this.get("containerWidth")},getHeight:function(){return this.get("containerHeight")},getMute:function(){return this.get("mute")},getProvider:function(){return this.get("provider")},getState:function(){return this.get("state")},getAudioTracks:function(){return null},getCaptionsList:function(){return null},getQualityLevels:function(){return null},getVisualQuality:function(){return null},getCurrentQuality:function(){return-1},getCurrentAudioTrack:function(){return-1},getSafeRegion:function(){return{x:0,y:0,width:0,height:0}},isBeforeComplete:function(){return!1},isBeforePlay:function(){return!1},createInstream:function(){return null},skipAd:function(){},attachMedia:function(){},detachMedia:function(){return null}});t.a=le},function(e,t,n){"use strict";function r(){return o||(o=n.e(4).then(function(t){var r=n(3).default;return e.controls=r,r}.bind(null,n)).catch(function(){o=null,Object(i.b)()})),o}n.d(t,"b",function(){return e}),t.a=r;var i=n(9),o=null,e={}},function(e,t,n){"use strict";var r=n(5),i=n(13),o=n(37),a=n(6),u=n(7),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e){try{var a,u=e.responseXML?e.responseXML.childNodes:null,s="";if(u){for(var l=0;l<u.length&&(s=u[l],8===s.nodeType);l++);if("xml"===Object(i.b)(s)&&(s=s.nextSibling),"rss"===Object(i.b)(s)){var f=Object(o.a)(s);a=c({playlist:f},f.feedData)}}if(!a)try{var d=JSON.parse(e.responseText);if(Array.isArray(d))a={playlist:d};else{if(!Array.isArray(d.playlist))throw Error;a=d}}catch(e){throw new Error("Not a valid RSS/JSON feed")}n.trigger(r.W,a)}catch(e){t(e.message)}}function t(e){n.trigger(r.q,{message:e||"Error loading file"})}var n=c(this,u.a);this.load=function(n){a.a.ajax(n,e,t)},this.destroy=function(){this.off()}};t.a=s},function(e,t,n){"use strict";function r(e,t){return l[e]?e:l[t]?t:"metadata"}function i(e,t,n){var i=[],o=t.getProviders(),c=t.get("preload"),s=v({},n);return delete s.playlist,e.forEach(function(e){e=v({},e),e.preload=r(e.preload,c),e.allSources=a(e,t),e.sources=u(e.allSources,o),e.sources.length&&(e.file=e.sources[0].file,n&&(e.feedData=s),i.push(e))}),i}function o(e){if(!Array.isArray(e)||0===e.length)throw new Error("No playable sources found")}function a(e,t){var n=e.sources,i=t.get("androidhls"),o=t.get("safarihlsjs"),a=e.drm||t.get("drm"),u=s(e.withCredentials,t.get("withCredentials")),c=!1!==t.get("hlsjsdefault");return n.map(function(t){if(t!==Object(t))return null;void 0!==i&&null!==i&&(t.androidhls=i),void 0!==o&&null!==o&&(t.safarihlsjs=o),void 0!==o&&null!==o&&(t.safarihlsjs=o),(t.drm||a)&&(t.drm=t.drm||a),t.preload=r(t.preload,e.preload);var n=s(t.withCredentials,u);return void 0!==n&&(t.withCredentials=n),c&&(t.hlsjsdefault=c),Object(d.a)(t)}).filter(function(e){return!!e})}function u(e,t){t&&t.choose||(t=new p.a);var n=c(e,t);if(!n)return[];var r=n.provider,i=n.type;return e.filter(function(e){return e.type===i&&t.providerSupports(r,e)})}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=t.choose(r);if(i)return{type:r.type,provider:i.providerToCheck}}return null}function s(e,t){return void 0===e?t:e}var l={none:!0,metadata:!0,auto:!0},f=n(24),d=n(36),p=n(30);t.b=i,t.c=o;var v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(e){return(Array.isArray(e)?e:[e]).map(f.a)};t.a=h},function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var r=3,i=2,o=1},function(e,t,n){"use strict";function r(e,t){return i({},t,{prime:function(){e.load()},getPrimedElement:function(){return e},clean:function(){t.clean(e)},recycle:function(){t.clean(e)}})}t.a=r;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},function(e,t,n){"use strict";function r(e){var t=document.createElement("a"),n=document.createElement("a");t.href=location.href;try{return n.href=e,n.href=n.href,t.protocol+"//"+t.host!=n.protocol+"//"+n.host}catch(e){}return!0}function i(e,t,n,i){d.c.isObject(e)&&(i=e,e=i.url);var s,l=p({xhr:null,url:e,withCredentials:!1,retryWithoutCredentials:!1,timeout:6e4,timeoutId:-1,oncomplete:t||v,onerror:n||v,mimeType:i&&!i.responseType?"text/xml":"",requireValidXML:!1,responseType:i&&i.plainText?"text":""},i);if("XDomainRequest"in window&&r(e))s=l.xhr=new window.XDomainRequest,s.onload=c(l),s.ontimeout=s.onprogress=v,h=!0;else{if(!("XMLHttpRequest"in window))return void l.onerror("",e);s=l.xhr=new window.XMLHttpRequest,s.onreadystatechange=u(l)}var f=a("Error loading file",l);s.onerror=f,"overrideMimeType"in s?l.mimeType&&s.overrideMimeType(l.mimeType):h=!0;try{e=e.replace(/#.*$/,""),s.open("GET",e,!0)}catch(e){return f(e),s}if(l.responseType)try{s.responseType=l.responseType}catch(e){}l.timeout&&(l.timeoutId=setTimeout(function(){o(s),l.onerror("Timeout",e,s)},l.timeout),s.onabort=function(){clearTimeout(l.timeoutId)});try{l.withCredentials&&"withCredentials"in s&&(s.withCredentials=!0),s.send()}catch(e){f(e)}return s}function o(e){e.onload=null,e.onprogress=null,e.onreadystatechange=null,e.onerror=null,"abort"in e&&e.abort()}function a(e,t){return function(n){var r=n.currentTarget||t.xhr;if(clearTimeout(t.timeoutId),t.retryWithoutCredentials&&t.xhr.withCredentials){o(r);return void i(p({},t,{xhr:null,withCredentials:!1,retryWithoutCredentials:!1}))}t.onerror(e,t.url,r)}}function u(e){return function(t){var n=t.currentTarget||e.xhr;if(4===n.readyState){if(clearTimeout(e.timeoutId),n.status>=400){var r;return r=404===n.status?"File not found":n.status+"("+n.statusText+")",e.onerror(r,e.url,n)}if(200===n.status)return c(e)(t)}}}function c(e){return function(t){var n=t.currentTarget||e.xhr;if(clearTimeout(e.timeoutId),e.responseType){if("json"===e.responseType)return s(n,e)}else{var r,i=n.responseXML;if(i)try{r=i.firstChild}catch(e){}if(i&&r)return l(n,i,e);if(h&&n.responseText&&!i&&(i=Object(f.parseXML)(n.responseText))&&i.firstChild)return l(n,i,e);if(e.requireValidXML)return void e.onerror("Invalid XML",e.url,n)}e.oncomplete(n)}}function s(e,t){if(!e.response||d.c.isString(e.response)&&'"'!==e.responseText.substr(1))try{e=p({},e,{response:JSON.parse(e.responseText)})}catch(n){return void t.onerror("Invalid JSON",t.url,e)}return t.oncomplete(e)}function l(e,t,n){var r=t.documentElement;return n.requireValidXML&&("parsererror"===r.nodeName||r.getElementsByTagName("parsererror").length)?void n.onerror("Invalid XML",n.url,e):(e.responseXML||(e=p({},e,{responseXML:t})),n.oncomplete(e))}t.b=r,t.a=i;var f=n(12),d=n(0),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=function(){},h=!1},function(e,t,n){"use strict";function r(e){return"hls"===e.type&&i.OS.android?!1!==e.androidhls&&(!i.Browser.firefox&&parseFloat(i.OS.version.version)>=4.4):null}t.a=r;var i=n(8)},function(e,t,n){"use strict";function r(e,t){var n=new y.a(t);return n.on(b.Z,function(t){e._qoe.tick("ready"),t.setupTime=e._qoe.between("setup","ready")}),n.on("all",function(t,n){e.trigger(t,n)}),n}function i(e,t){e.off(),t.playerDestroy(),t.getContainer().removeAttribute("data-jwplayer-id")}function o(e){for(var t=s.a.length;t--;)if(s.a[t].uniqueId===e.uniqueId){s.a.splice(t,1);break}}function a(e){var t=++x,n=e.id||"player-"+t,a=new w.a,u={},c=r(this,e);a.tick("init"),e.setAttribute("data-jwplayer-id",n),Object.defineProperties(this,{id:{get:function(){return n}},uniqueId:{get:function(){return t}},plugins:{get:function(){return u}},_qoe:{get:function(){return a}},version:{get:function(){return h.a}},Events:{get:function(){return j.a}},utils:{get:function(){return O.a}},_:{get:function(){return k.c}}}),C(this,{_events:{},setup:function(t){return a.clear("ready"),a.tick("setup"),i(this,c),c=r(this,e),t.id=n,c.init(t,this),this.on(t.events,null,this)},remove:function(){return o(this),this.trigger("remove"),i(this,c),this},qoe:function(){var e=c.getItemQoe();return{setupTime:this._qoe.between("setup","ready"),firstFrame:e.getFirstFrame?e.getFirstFrame():null,player:this._qoe.dump(),item:e.dump()}},getAudioTracks:function(){return c.getAudioTracks()},getBuffer:function(){return c.get("buffer")},getCaptions:function(){return c.get("captions")},getCaptionsList:function(){return c.getCaptionsList()},getConfig:function(){return c.getConfig()},getContainer:function(){return c.getContainer()},getControls:function(){return c.get("controls")},getCurrentAudioTrack:function(){return c.getCurrentAudioTrack()},getCurrentCaptions:function(){return c.getCurrentCaptions()},getCurrentQuality:function(){return c.getCurrentQuality()},getDuration:function(){return c.get("duration")},getEnvironment:function(){return g},getFullscreen:function(){return c.get("fullscreen")},getHeight:function(){return c.getHeight()},getItemMeta:function(){return c.get("itemMeta")||{}},getMute:function(){return c.getMute()},getPlaybackRate:function(){return c.get("playbackRate")},getPlaylist:function(){return c.get("playlist")},getPlaylistIndex:function(){return c.get("item")},getPlaylistItem:function(e){if(!O.a.exists(e))return c.get("playlistItem");var t=this.getPlaylist();return t?t[e]:null},getPosition:function(){return c.get("position")},getProvider:function(){return c.getProvider()},getQualityLevels:function(){return c.getQualityLevels()},getSafeRegion:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return c.getSafeRegion(e)},getState:function(){return c.getState()},getStretching:function(){return c.get("stretching")},getViewable:function(){return c.get("viewable")},getVisualQuality:function(){return c.getVisualQuality()},getVolume:function(){return c.get("volume")},getWidth:function(){return c.getWidth()},setCaptions:function(e){return c.setCaptions(e),this},setConfig:function(e){return c.setConfig(e),this},setControls:function(e){return c.setControls(e),this},setCurrentAudioTrack:function(e){c.setCurrentAudioTrack(e)},setCurrentCaptions:function(e){c.setCurrentCaptions(e)},setCurrentQuality:function(e){c.setCurrentQuality(e)},setFullscreen:function(e){return c.setFullscreen(e),this},setMute:function(e){return c.setMute(e),this},setPlaybackRate:function(e){return c.setPlaybackRate(e),this},setCues:function(e){return c.setCues(e),this},setVolume:function(e){return c.setVolume(e),this},load:function(e,t){return c.load(e,t),this},play:function(e){return c.play(e),this},pause:function(e){return c.pause(e),this},playToggle:function(e){switch(this.getState()){case b._8:case b._2:this.pause(e);break;default:this.play(e)}},seek:function(e,t){return c.seek(e,t),this},playlistItem:function(e,t){return c.playlistItem(e,t),this},playlistNext:function(e){return c.playlistNext(e),this},playlistPrev:function(e){return c.playlistPrev(e),this},next:function(){return c.next(),this},castToggle:function(){return c.castToggle(),this},createInstream:function(){return c.createInstream()},skipAd:function(){return c.skipAd(),this},stop:function(){return c.stop(),this},resize:function(e,t){return c.resize(e,t),this},addButton:function(e,t,n,r,i){return c.addButton(e,t,n,r,i),this},removeButton:function(e){return c.removeButton(e),this},attachMedia:function(){return c.attachMedia(),this},detachMedia:function(){return c.detachMedia(),this},isBeforeComplete:function(){return c.isBeforeComplete()},isBeforePlay:function(){return c.isBeforePlay()}})}function u(e){for(var t=0;t<s.a.length;t++)if(s.a[t].id===e)return s.a[t];return null}Object.defineProperty(t,"__esModule",{value:!0});var c=n(16),s=n(27),l=n(17),f=n(18),d={availableProviders:l.a,registerProvider:f.a},p=n(23);d.registerPlugin=function(e,t,n){"jwpsrv"!==e&&Object(p.b)(e,t,n)};var v=d,h=n(19),m=n(15),g=n(8),y=n(45),b=n(5),w=n(20),j=n(7),O=n(6),k=n(0),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x=0;C(a.prototype,{on:function(e,t,n){return j.c.call(this,e,t,n)},once:function(e,t,n){return j.d.call(this,e,t,n)},off:function(e,t,n){return j.b.call(this,e,t,n)},trigger:function(e,t){return t=k.c.isObject(t)?C({},t):{},t.type=e,m.a.debug?j.e.call(this,e,t):j.f.call(this,e,t)},getPlugin:function(e){return this.plugins[e]},addPlugin:function(e,t){this.plugins[e]=t,this.on("ready",t.addToPlayer),t.resize&&this.on("resize",t.resizeHandler)},registerPlugin:function(e,t,n){Object(p.b)(e,t,n)},getAdBlock:function(){return!1},playAd:function(e){},pauseAd:function(e){}}),n.p=Object(c.loadFrom)();var E=function(e){var t=void 0,n=void 0;if(e?"string"==typeof e?(t=u(e))||(n=document.getElementById(e)):"number"==typeof e?t=s.a[e]:e.nodeType&&(n=e,t=u(n.id||n.getAttribute("data-jwplayer-id"))):t=s.a[0],t)return t;if(n){var r=new a(n);return s.a.push(r),r}return{registerPlugin:v.registerPlugin}};Object.defineProperties(E,{api:{get:function(){return v},set:function(){}},version:{get:function(){return h.a},set:function(){}},debug:{get:function(){return m.a.debug},set:function(e){m.a.debug=!!e}}});var S=E,P=n(38),T=n(34),_=n(21),N=n(35),L=n(37),A=n(32),M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=k.c.extend,I={};I.api=v,I._=k.c,I.version="8.1.3+commercial_v8-1-3.234.commercial.b996a4.hlsjs..jwplayer.cee666.dai.c24260.freewheel.782b72.googima.08db8b.vast.404e57.jwpsrv.0f8f62.gapro.fb7ea6.related.c64ebe",I.utils=M(O.a,{key:T.a,extend:F,scriptloader:_.a,rssparser:{parse:L.a},tea:N.a,UI:P.a}),I.utils.css.style=I.utils.style,I.vid=A.a;var R=I,B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=window;B(S,R),"function"==typeof q.define&&q.define.amd&&q.define([],function(){return S});var D=S;q.jwplayer&&(D=q.jwplayer);t.default=D}]).default;
var jwDefaults = {
    "aspectratio": "16:9",
    "autostart": false,
    "controls": true,
    "displaytitle": true,
    "flashplayer": "//ssl.p.jwpcdn.com/player/v/8.3.5/jwplayer.flash.swf",
    "key": "MBvrieqNdmVL4jV0x6LPJ0wKB/Nbz2Qq/lqm3g==",
    "playbackRateControls": true,
    "stretching": "uniform",
    "width": "100%"
};
jwplayer.defaults = jwDefaults;

! function(e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).jwplayer_hls_provider = e()
}(function() {
    return function e(t, n, r) {
        function i(o, a) {
            if (!n[o]) {
                if (!t[o]) {
                    var u = "function" == typeof require && require;
                    if (!a && u) return u(o, !0);
                    if (s) return s(o, !0);
                    var l = new Error("Cannot find module '" + o + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var c = n[o] = {
                    exports: {}
                };
                t[o][0].call(c.exports, function(e) {
                    return i(t[o][1][e] || e)
                }, c, c.exports, e, t, n, r)
            }
            return n[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
        return i
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = Object.prototype.hasOwnProperty,
                i = "~";

            function s() {}

            function o(e, t, n, r, s) {
                if ("function" != typeof n) throw new TypeError("The listener must be a function");
                var o = new function(e, t, n) {
                        this.fn = e, this.context = t, this.once = n || !1
                    }(n, r || e, s),
                    a = i ? i + t : t;
                return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], o] : e._events[a].push(o) : (e._events[a] = o, e._eventsCount++), e
            }

            function a(e, t) {
                0 == --e._eventsCount ? e._events = new s : delete e._events[t]
            }

            function u() {
                this._events = new s, this._eventsCount = 0
            }
            Object.create && (s.prototype = Object.create(null), (new s).__proto__ || (i = !1)), u.prototype.eventNames = function() {
                var e, t, n = [];
                if (0 === this._eventsCount) return n;
                for (t in e = this._events) r.call(e, t) && n.push(i ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            }, u.prototype.listeners = function(e) {
                var t = i ? i + e : e,
                    n = this._events[t];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var r = 0, s = n.length, o = new Array(s); r < s; r++) o[r] = n[r].fn;
                return o
            }, u.prototype.listenerCount = function(e) {
                var t = i ? i + e : e,
                    n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }, u.prototype.emit = function(e, t, n, r, s, o) {
                var a = i ? i + e : e;
                if (!this._events[a]) return !1;
                var u, l, c = this._events[a],
                    d = arguments.length;
                if (c.fn) {
                    switch (c.once && this.removeListener(e, c.fn, void 0, !0), d) {
                        case 1:
                            return c.fn.call(c.context), !0;
                        case 2:
                            return c.fn.call(c.context, t), !0;
                        case 3:
                            return c.fn.call(c.context, t, n), !0;
                        case 4:
                            return c.fn.call(c.context, t, n, r), !0;
                        case 5:
                            return c.fn.call(c.context, t, n, r, s), !0;
                        case 6:
                            return c.fn.call(c.context, t, n, r, s, o), !0
                    }
                    for (l = 1, u = new Array(d - 1); l < d; l++) u[l - 1] = arguments[l];
                    c.fn.apply(c.context, u)
                } else {
                    var h, f = c.length;
                    for (l = 0; l < f; l++) switch (c[l].once && this.removeListener(e, c[l].fn, void 0, !0), d) {
                        case 1:
                            c[l].fn.call(c[l].context);
                            break;
                        case 2:
                            c[l].fn.call(c[l].context, t);
                            break;
                        case 3:
                            c[l].fn.call(c[l].context, t, n);
                            break;
                        case 4:
                            c[l].fn.call(c[l].context, t, n, r);
                            break;
                        default:
                            if (!u)
                                for (h = 1, u = new Array(d - 1); h < d; h++) u[h - 1] = arguments[h];
                            c[l].fn.apply(c[l].context, u)
                    }
                }
                return !0
            }, u.prototype.on = function(e, t, n) {
                return o(this, e, t, n, !1)
            }, u.prototype.once = function(e, t, n) {
                return o(this, e, t, n, !0)
            }, u.prototype.removeListener = function(e, t, n, r) {
                var s = i ? i + e : e;
                if (!this._events[s]) return this;
                if (!t) return a(this, s), this;
                var o = this._events[s];
                if (o.fn) o.fn !== t || r && !o.once || n && o.context !== n || a(this, s);
                else {
                    for (var u = 0, l = [], c = o.length; u < c; u++)(o[u].fn !== t || r && !o[u].once || n && o[u].context !== n) && l.push(o[u]);
                    l.length ? this._events[s] = 1 === l.length ? l[0] : l : a(this, s)
                }
                return this
            }, u.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = i ? i + e : e, this._events[t] && a(this, t)) : (this._events = new s, this._eventsCount = 0), this
            }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = i, u.EventEmitter = u, void 0 !== t && (t.exports = u)
        }, {}],
        2: [function(e, t, n) {
            "use strict";
            var r = e("eventemitter3"),
                i = t.exports = function(e, t, n) {
                    var s = i.jwplayer || window.jwplayer,
                        a = i.Hls || window.Hls,
                        u = e && s(e);
                    console.log("init hola/hls provider v" + i.VERSION + " hls v" + a.version + (i.version ? " hap v" + i.version : ""));
                    var l = u.provider = this;

                    function c() {
                        var e = g.play() || function(e) {
                            function t(n) {
                                e.removeEventListener("playing", t), e.removeEventListener("pause", t), e.removeEventListener("abort", t), e.removeEventListener("error", t), "playing" != n.type && d('play() was interrupted by a "' + n.type + '" event')
                            }
                            e.paused ? d("video play refused") : (e.addEventListener("playing", t), e.addEventListener("abort", t), e.addEventListener("error", t), e.addEventListener("pause", t))
                        }(g);
                        e && e.catch ? e.catch(function(e) {
                            d("video_play failed with " + e), console.warn(e), "NotAllowedError" == e.name && g.hasAttribute("jw-gesture-required") && (l.trigger("autoplayFailed"), g.setAttribute("autoplay-failed", "failed"))
                        }) : g.hasAttribute("jw-gesture-required") && (l.trigger("autoplayFailed"), g.setAttribute("autoplay-failed", "failed"))
                    }

                    function d(e) {
                        var t;
                        (t = R.debug) && t.log(e)
                    }

                    function h() {
                        d("hls_play state: " + l.hls_state + " att:" + l.attached), !(l.hls_queued.play = "ready" != l.hls_state) && l.attached && (l.hls_restore_pos(), c())
                    }
                    this.hls_restore_pos = function() {
                        var e = this.hls_queued.seek,
                            t = g.currentTime;
                        "STOPPED" == f.streamController.state && (f.streamController.startPosition = 0, f.startLoad(e || 0)), e && (this._in_seek = !0, g.currentTime = e, this.trigger(o.JWPLAYER_MEDIA_SEEK, {
                            position: t,
                            offset: e
                        }), g.readyState || g.dispatchEvent(new Event("seeking")), this.hls_queued.seek = 0)
                    }, this.events = new r, this.addEventListener = this.on = this.events.on.bind(this.events), this.once = this.events.once.bind(this.events), this.removeEventListener = this.off = this.events.off.bind(this.events), this.trigger = this.emit = function(e) {
                        if (l.attached || l.before_complete) {
                            var t = [].slice.call(arguments);
                            l.events.emit.apply(this.events, t), "all" != e && (t.unshift("all"), l.events.emit.apply(this.events, t))
                        }
                    }, this.removeAllListeners = function(e) {
                        this.events.removeAllListeners(e)
                    }, this.hls_queued = {
                        play: !1,
                        seek: 0
                    }, this.attached = !0, this.hls_state = "idle", this.is_mobile = function() {
                        var e, t, n = navigator.userAgent;
                        if ((e = /iP(hone|ad|od)/i.test(n)) || (t = /Android/i.test(n))) return {
                            is_ios: e,
                            is_android: t
                        }
                    }, this.supports_captions = function() {
                        var e = navigator.userAgent;
                        return /(iPhone|iPad|iPod|iPod touch);.*?OS/.test(e) || / (Chrome|Version)\/\d+(\.\d+)+.* Safari\/\d+(\.\d+)+/.test(e) || /Firefox\/(\d+(?:\.\d+)+)/.test(e)
                    };
                    var f, p, g = n;
                    if (!g) {
                        var m = document.getElementById(e);
                        g = m ? m.querySelector("video") : void 0
                    }
                    var y, b, w = this.is_mobile(),
                        _ = {
                            reason: "initial choice",
                            mode: "auto"
                        };
                    g || (g = document.createElement("video"), w && g.setAttribute("jw-gesture-required", "")), (this.video = g).className = "jw-video jw-reset", g.hola_dm_hls_attached = !0,
                        function(e, t) {
                            for (var n = e; n && !n.hasOwnProperty("src"); n = Object.getPrototypeOf(n));
                            if (n) {
                                var r = Object.getOwnPropertyDescriptor(n, "src");
                                r.get || r.set || (r.get = function() {
                                    var t = e.getAttribute("src");
                                    return null != t ? t : ""
                                }, r.set = function(t) {
                                    var n = document.createElement("source");
                                    n.src = t || "", e.setAttribute("src", n.src)
                                }), Object.defineProperty(e, "src", {
                                    configurable: !0,
                                    enumerable: !1,
                                    set: function(t) {
                                        (function(e, t) {
                                            return t != e + "?"
                                        })(r.get.call(e), t) && r.set.call(e, t)
                                    },
                                    get: r.get
                                })
                            }
                        }(g);
                    var v, S, E, T, R = i.hls_params || {};

                    function C(e) {
                        if (l.renderNatively)
                            for (var t = g.textTracks, n = e.tracks[e.track].id, r = 0; r < t.length; r++) t[r].mode = t[r]._id == n ? "showing" : "hidden"
                    }

                    function A() {
                        var e, t, n = g.seekable ? g.seekable.length : 0;
                        for (e = t = 0; e < n; e++) t = Math.max(t, g.seekable.end(e));
                        return t
                    }

                    function I() {
                        var e = g.duration,
                            t = A();
                        if (e == 1 / 0 && t) {
                            var n = t - g.seekable.start(0);
                            n != 1 / 0 && 120 < n && (e = -n)
                        }
                        return e
                    }

                    function M() {
                        return function() {
                            var e, t;
                            try {
                                if (!(t = f.streamController.levels)) return;
                                var n = t.find(function(e) {
                                    return e.details
                                });
                                e = n && !!n.details.live
                            } catch (e) {
                                d("is_live failed with " + e)
                            }
                            return e
                        }() ? 1 / 0 : I()
                    }

                    function k() {
                        var e = g.buffered,
                            t = g.duration;
                        return !e || !e.length || t <= 0 || t == 1 / 0 ? 0 : Math.min(e.end(e.length - 1) / t, 1)
                    }

                    function P(e, t, n) {
                        e == S && n == E || (S = e, l.trigger(o.JWPLAYER_MEDIA_BUFFER, {
                            bufferPercent: 100 * e,
                            position: t,
                            duration: M()
                        }))
                    }

                    function L() {
                        l.setState("complete"), l.trigger(o.JWPLAYER_MEDIA_COMPLETE), l.before_complete = !1
                    }
                    this.ad_count = 0, u && (u.on("captionsList", C), u.on("captionsChanged", C), u.on("adImpression", function() {
                        l.ad_count++
                    }), u.on("adComplete", function() {
                        l.ad_count--
                    }), u.on("adSkipped", function() {
                        l.ad_count--
                    }), Object.assign(R, u.hola_config), "undefined" != R.debug && (v = R.debug, delete R.debug)), R.debug = {}, ["debug", "info", "log", "warn", "error"].forEach(function(e) {
                        R.debug[e] = function(e, t) {
                            l.hls.holaLog && l.hls.holaLog[e] && l.hls.holaLog[e].call(l.hls.holaLog, t)
                        }.bind(null, e)
                    }), this.hls = f = new a(R), f.holaLog = v, u && (u.hls = f);
                    var x = {
                        durationchange: function() {
                            E = I(), P(k(), T, E)
                        },
                        ended: function() {
                            "idle" != l.state && "complete" != l.state && (l.before_complete = !0, l.trigger(o.JWPLAYER_MEDIA_BEFORECOMPLETE), l.attached && L())
                        },
                        error: function() {
                            l.trigger(o.JWPLAYER_MEDIA_ERROR, {
                                message: "Error loading media: File could not be played"
                            })
                        },
                        loadstart: function() {
                            g.setAttribute("jw-loaded", "started")
                        },
                        loadeddata: function() {
                            g.setAttribute("jw-loaded", "data"), l.supports_captions() && (g.textTracks.onaddtrack = function() {
                                l.renderNatively = !0, l.trigger("subtitlesTracks", {
                                    tracks: g.textTracks
                                })
                            }, g.textTracks.length && g.textTracks.onaddtrack(), l.trigger(o.JWPLAYER_MEDIA_TYPE, {
                                mediaType: g.videoHeight ? "video" : "audio"
                            }))
                        },
                        loadedmetadata: function() {
                            g.muted && (g.muted = !1, g.muted = !0), g.setAttribute("jw-loaded", "meta"), E = I(), l.trigger(o.JWPLAYER_MEDIA_META, {
                                duration: M(),
                                height: g.videoHeight,
                                width: g.videoWidth
                            })
                        },
                        canplay: function() {
                            b = !0, l.trigger(o.JWPLAYER_MEDIA_BUFFER_FULL)
                        },
                        playing: function() {
                            l.setState("playing"), g.hasAttribute("jw-played") || g.setAttribute("jw-played", ""), g.hasAttribute("jw-gesture-required") && (g.removeAttribute("jw-gesture-required"), g.removeAttribute("autoplay-failed")), l.trigger(o.JWPLAYER_PROVIDER_FIRST_FRAME, {})
                        },
                        pause: function() {
                            "complete" != l.state && g.currentTime != g.duration && l.setState("paused")
                        },
                        seeking: function() {
                            l._in_seek || (l._in_seek = !0, l.trigger(o.JWPLAYER_MEDIA_SEEK, {
                                position: T,
                                offset: g.currentTime
                            }))
                        },
                        seeked: function() {
                            l._in_seek = !1, l.trigger(o.JWPLAYER_MEDIA_SEEKED)
                        },
                        progress: function() {
                            P(k(), T, E)
                        },
                        timeupdate: function() {
                            E = I(), T = E < 0 ? -(A() - g.currentTime) : g.currentTime, P(k(), T, E), "playing" == l.state && l.trigger(o.JWPLAYER_MEDIA_TIME, {
                                position: T,
                                duration: M()
                            })
                        }
                    };

                    function O(e) {
                        return function() {
                            l.attached && x[e]()
                        }
                    }
                    for (var D in x) g.addEventListener(D, O(D), !1);

                    function N() {
                        var e = f.levels || [],
                            t = [];
                        return 1 < e.length && t.push({
                            label: "Auto"
                        }), e.forEach(function(e) {
                            t.push({
                                bitrate: e.bitrate,
                                height: e.height,
                                label: function(e) {
                                    return e.height ? e.height + "p" : e.width ? Math.round(9 * e.width / 16) + "p" : e.bitrate ? function(e) {
                                        if (void 0 === e) return "";
                                        if (!e) return "0";
                                        var t = Math.floor(Math.log(e) / Math.log(1024));
                                        return (e /= Math.pow(1024, t)) < .001 ? "0" : (1023 <= e && (e = Math.trunc(e)), e.toFixed(e < 1 ? 3 : e < 10 ? 2 : e < 100 ? 1 : 0).replace(/\.0*$/, "") + ["", "K", "M", "G", "T", "P"][t])
                                    }(e.bitrate) + "bps" : 0
                                }(e),
                                width: e.width
                            })
                        }), t
                    }

                    function U(e) {
                        var t = f.levels || [];
                        return e = e || f.currentLevel, {
                            jw: -1 == f.manual_level || t.length < 2 ? 0 : e + 1,
                            real: t.length < 2 ? 0 : e + 1
                        }
                    }
                    f.on(a.Events.ERROR, function(e, t) {
                        if (t.fatal) {
                            var n;
                            switch (t.details) {
                                case a.ErrorDetails.MANIFEST_LOAD_ERROR:
                                case a.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
                                    n = "Cannot load M3U8: " + t.response.statusText;
                                    break;
                                default:
                                    n = "Error loading media: " + t.details
                            }
                            l.trigger(o.JWPLAYER_MEDIA_ERROR, {
                                message: n
                            })
                        }
                    }), f.on(a.Events.MANIFEST_LOADED, function() {
                        l.trigger(o.JWPLAYER_MEDIA_LEVELS, {
                            currentQuality: U().jw,
                            levels: N()
                        })
                    }), f.on(a.Events.LEVEL_SWITCHED, function(e, t) {
                        var n = N(),
                            r = U(t.level);
                        l.trigger(o.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                            currentQuality: r.jw,
                            levels: n
                        });
                        var i = n[r.real];
                        _.level = i, _.level.index = r.real, _.level.label = -1 == f.manual_level && 1 < n.length ? "auto" : i.label, _.reason = _.reason || "auto", l.trigger("visualQuality", _), _.reason = ""
                    }), this.init = function(e) {
                        y = !1, g.setAttribute("jw-loaded", "init")
                    }, this.load = function(e) {
                        if (this.attached) {
                            var t, n, r = ((t = e.sources) && t.find(function(e) {
                                    return e.default
                                }) || t[0]).file,
                                i = g.getAttribute("jw-loaded"),
                                s = this.hls_queued,
                                u = g.hasAttribute("jw-played");
                            w && !u || this.setState("loading"), s.seek = Math.max(e.starttime - (s.rw_sec || 0), 0), "ready" != this.hls_state || (this.source || "") != r || ["init", "started"].includes(i) ? (y = !1, g.load(), f.stopLoad(f.media && "ready" == this.hls_state && "init" == i), (n = this.source = r) && ("ready" == l.hls_state && (l.hls_state = "idle"), l.level_cb && f.off(a.Events.LEVEL_LOADED, l.level_cb), l.level_cb = function() {
                                d("hls play queued on level_cb:" + l.hls_queued.play), f.off(a.Events.LEVEL_LOADED, l.level_cb), l.level_cb = void 0, l.hls_state = "ready", l.hls_queued.play && h(), l.trigger(o.JWPLAYER_MEDIA_BUFFER_FULL)
                            }, f.on(a.Events.LEVEL_LOADED, l.level_cb), f.loadSource(n), f.media || l.attachMedia()), g.setAttribute("jw-loaded", "init")) : h(), w && !u && (y || w.is_ios && !b || (b = !(y = !0), c()), g.paused || "playing" == this.state || this.setState("loading"))
                        }
                    }, this.play = function() {
                        h()
                    }, this.pause = function() {
                        g.pause(), l.setState("paused")
                    }, this.stop = function() {
                        f.stopLoad(), l.setState("idle")
                    }, this.volume = function(e) {
                        g.volume = Math.min(e / 100, 1)
                    }, this.mute = function(e) {
                        g.muted = !!e
                    }, this.seek = function(e) {
                        if (this._in_seek = !0, "ready" == this.hls_state) {
                            var t = g.currentTime;
                            g.currentTime = e, this.trigger(o.JWPLAYER_MEDIA_SEEK, {
                                position: t,
                                offset: e
                            })
                        } else this.hls_queued.seek = e
                    }, this.resize = function(e, t, n) {}, this.remove = function() {
                        f.stopLoad(), this.source = void 0, p === g.parentNode && p.removeChild(g)
                    }, this.destroy = function() {
                        for (var e in x) g.removeEventListener(e, x[e], !1);
                        this.removeAllListeners()
                    }, this.setVisibility = function(e) {
                        p.style.visibility = e ? "visible" : "", p.style.opacity = e ? 1 : 0
                    }, this.setFullscreen = function() {
                        return !1
                    }, this.getFullscreen = function() {}, this.getContainer = function() {
                        return p
                    }, this.setContainer = function(e) {
                        p = e, this.video.parentNode !== e && p.appendChild(g)
                    }, f.manual_level = -1, this.setCurrentQuality = function(e) {
                        e != f.manual_level + 1 && (f.manual_level = e - 1, f.hola_adaptive || (f.loadLevel = f.manual_level), l.trigger(o.JWPLAYER_MEDIA_LEVEL_CHANGED, {
                            currentQuality: e,
                            levels: N()
                        }), _.reason = "api")
                    }, this.getName = function() {
                        return {
                            name: "hola/hls"
                        }
                    }, this.get_position = function() {
                        return g.currentTime
                    }, this.getQualityLevels = function() {
                        return N()
                    }, this.getCurrentQuality = function() {
                        return U(f.loadLevel).jw
                    }, this.getAudioTracks = function() {}, this.getCurrentAudioTrack = function() {}, this.setCurrentAudioTrack = function() {}, this.checkComplete = function() {
                        return !!this.before_complete
                    }, this.setControls = function() {}, this.attachMedia = function() {
                        if (this.before_complete) return L();
                        this.ad_count && d("jwprovider attach inside ad " + this.ad_count), this.attached = !0, f.attachMedia(g)
                    }, this.detachMedia = function() {
                        return f.trigger(a.Events.BUFFER_RESET), f.detachMedia(), this.level_cb && (f.off(a.Events.LEVEL_LOADED, this.level_cb), this.level_cb = void 0), void 0 !== f.bufferController && delete f.bufferController.segments, this.attached = !1, g
                    }, this.setState = function(e) {
                        var t = this.state || "idle";
                        (this.state = e) != t && this.trigger(o.JWPLAYER_PLAYER_STATE, {
                            newstate: e
                        })
                    }, this.sendMediaType = function(e) {
                        var t = ["oga", "aac", "mp3", "mpeg", "vorbis"].includes(e[0].type);
                        this.trigger(o.JWPLAYER_MEDIA_TYPE, {
                            mediaType: t ? "audio" : "video"
                        })
                    }
                },
                s = !1,
                o = {
                    JWPLAYER_MEDIA_BEFORECOMPLETE: "beforeComplete",
                    JWPLAYER_MEDIA_BUFFER: "bufferChange",
                    JWPLAYER_MEDIA_BUFFER_FULL: "bufferFull",
                    JWPLAYER_MEDIA_COMPLETE: "complete",
                    JWPLAYER_MEDIA_ERROR: "mediaError",
                    JWPLAYER_MEDIA_LEVELS: "levels",
                    JWPLAYER_MEDIA_LEVEL_CHANGED: "levelsChanged",
                    JWPLAYER_MEDIA_META: "meta",
                    JWPLAYER_MEDIA_SEEK: "seek",
                    JWPLAYER_MEDIA_SEEKED: "seeked",
                    JWPLAYER_MEDIA_TIME: "time",
                    JWPLAYER_MEDIA_TYPE: "mediaType",
                    JWPLAYER_PLAYER_STATE: "state",
                    JWPLAYER_PROVIDER_FIRST_FRAME: "providerFirstFrame"
                };

            function a() {
                for (var e, t = i.jwplayer || window.jwplayer, n = 0, r = [];
                    (e = t(n++)) && e.pause;) r.push(e);
                return r
            }
            i.getName = function() {
                return {
                    name: "hola/hls"
                }
            }, i.supports = function(e) {
                var t, n = i.Hls || window.Hls;
                return !a().every(function(t) {
                    var n = t.getPlaylist();
                    return (n.every ? n : [{
                        sources: [n]
                    }]).every(function(t) {
                        return (t.allSources || t.sources || [{
                            file: t.file
                        }]).every(function(t) {
                            return t.file != e.file
                        })
                    })
                }) && !i.disabled && ("hls" == (t = e).type || (t.file || "").match(/\.m3u8$/)) && n && n.isSupported()
            }, i.attach = function() {
                var e = i.jwplayer || window.jwplayer;
                i.disabled = !1, s || (s = !0, e.api.registerProvider(this))
            }, i.detach = function(e) {
                i.disabled = !0, e && e.attached && (e.setState("idle"), e.detachMedia())
            }, i.reload_jwplayer_instances = function() {
                a().forEach(function(e) {
                    var t = e.getConfig();
                    if (t) {
                        if (t.advertising && !t.advertising.client && t.plugins)
                            for (var n in t.plugins)
                                if (t.plugins[n] === t.advertising) {
                                    var r = n.match(/\/(\w+)\.js$/);
                                    t.advertising.client = r && r[1];
                                    break
                                } e.setup(t)
                    }
                })
            }, i.VERSION = "0.0.79"
        }, {
            eventemitter3: 1
        }]
    }, {}, [2])(2)
}), require = function e(t, n, r) {
    function i(o, a) {
        if (!n[o]) {
            if (!t[o]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(o, !0);
                if (s) return s(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[o] = {
                exports: {}
            };
            t[o][0].call(c.exports, function(e) {
                return i(t[o][1][e] || e)
            }, c, c.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
    return i
}({
    1: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        class r {
            constructor(e, t) {
                this.value = e, this.timeStamp = t
            }
        }
        n.BandwidthApproximator = class {
            constructor() {
                this.lastBytes = [], this.currentBytesSum = 0, this.lastBandwidth = []
            }
            addBytes(e, t) {
                for (this.lastBytes.push(new r(e, t)), this.currentBytesSum += e; t - this.lastBytes[0].timeStamp > 1e3;) this.currentBytesSum -= this.lastBytes.shift().value;
                this.lastBandwidth.push(new r(this.currentBytesSum / 1e3, t))
            }
            getBandwidth(e) {
                for (; 0 != this.lastBandwidth.length && e - this.lastBandwidth[0].timeStamp > 6e4;) this.lastBandwidth.shift();
                let t = 0;
                for (const e of this.lastBandwidth) e.value > t && (t = e.value);
                return t
            }
            getSmoothInterval() {
                return 1e3
            }
            getMeasureInterval() {
                return 6e4
            }
        }
    }, {}],
    2: [function(e, t, n) {
        window.p2pml || (window.p2pml = {}), window.p2pml.core = e("./index")
    }, {
        "./index": "p2p-media-loader-core"
    }],
    3: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const r = e("debug"),
            i = e("./stringly-typed-event-emitter");
        n.HttpMediaManager = class extends i.STEEmitter {
            constructor(e) {
                super(), this.settings = e, this.xhrRequests = new Map, this.failedSegments = new Map, this.debug = r("p2pml:http-media-manager"), this.now = (() => performance.now())
            }
            download(e, t, n = !1) {
                if (this.isDownloading(e) && !n) return;
                var r;
                this.cleanTimedOutFailedSegments(), r = this.settings.segmentUrlBuilder ? this.settings.segmentUrlBuilder(e) : e.url, this.debug("http segment download", r), n && (r = e.responseUrl || e.url);
                const i = new XMLHttpRequest;
                if (/(googleusercontent.com|redirect)/.test(r) && (i.timeout = this.settings.requestTimeOut), i.open("GET", r, !0), i.responseType = "arraybuffer", e.range) i.setRequestHeader("Range", e.range), t = void 0;
                else if (void 0 !== t && this.settings.httpUseRanges) {
                    let e = 0;
                    for (const n of t) e += n.byteLength;
                    i.setRequestHeader("Range", `bytes=${e}-`), this.debug("continue download from", e)
                } else t = void 0;
                this.setupXhrEvents(i, e, t), this.settings.xhrSetup && this.settings.xhrSetup(i, r), this.xhrRequests.set(e.id, {
                    xhr: i,
                    segment: e
                }), i.send()
            }
            abort(e) {
                const t = this.xhrRequests.get(e.id);
                t && (t.xhr.abort(), this.xhrRequests.delete(e.id), this.debug("http segment abort", e.id))
            }
            isDownloading(e) {
                return this.xhrRequests.has(e.id)
            }
            isFailed(e) {
                const t = this.failedSegments.get(e.id);
                return void 0 !== t && t > this.now()
            }
            getActiveDownloads() {
                return this.xhrRequests
            }
            getActiveDownloadsCount() {
                return this.xhrRequests.size
            }
            destroy() {
                this.xhrRequests.forEach(e => e.xhr.abort()), this.xhrRequests.clear()
            }
            setupXhrEvents(e, t, n) {
                let r = 0;
                e.addEventListener("progress", e => {
                    const t = e.loaded - r;
                    this.emit("bytes-downloaded", t), r = e.loaded
                }), e.addEventListener("load", async r => {
                    if (502 === r.target.status || 400 === r.target.status || 403 === r.target.status) {
                        var i = this;
                        this.segmentRetry(t, function(e) {
                            if (!1 !== e) return t.responseUrl = e, void i.download(t, void 0, !0)
                        })
                    }
                    if (r.target.status < 200 || r.target.status >= 300) return void this.segmentFailure(t, r, e);
                    let s = r.target.response;
                    if (void 0 !== n && 206 === r.target.status) {
                        let e = 0;
                        for (const t of n) e += t.byteLength;
                        const t = new Uint8Array(e + s.byteLength);
                        let r = 0;
                        for (const e of n) t.set(new Uint8Array(e), r), r += e.byteLength;
                        t.set(new Uint8Array(s), r), s = t.buffer
                    }
                    await this.segmentDownloadFinished(t, s, e)
                }), e.addEventListener("error", n => {
                    this.segmentFailure(t, n, e)
                }), e.addEventListener("timeout", n => {
                    if (!t.retry || !t.retry) {
                        var r = this;
                        this.segmentRetry(t, function(e) {
                            if (!1 !== e) return t.responseUrl = e, void r.download(t, void 0, !0)
                        }), t.retry++
                    }
                    this.segmentFailure(t, n, e)
                })
            }
            async segmentDownloadFinished(e, t, n) {
                if (e.responseUrl = null === n.responseURL ? void 0 : n.responseURL, this.settings.segmentValidator) try {
                    await this.settings.segmentValidator(Object.assign(Object.assign({}, e), {
                        data: t
                    }), "http")
                } catch (t) {
                    return this.debug("segment validator failed", t), void this.segmentFailure(e, t, n)
                }
                this.xhrRequests.delete(e.id), this.emit("segment-loaded", e, t)
            }
            sleep(e) {
                return new Promise(t => setTimeout(t, e))
            }
            async segmentRetry(e, t) {
                if (this.settings.disableRetry) {
                    var n = "https://hls-storage-cdn-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=31536000&url=" + encodeURIComponent(e.url);
                    setTimeout(() => {
                        t(n)
                    }, 500)
                } else {
                    var r = this.settings.domainApi + "/get-retry?url=" + e.url;
                    const n = new XMLHttpRequest;
                    n.open("GET", r, !0), n.responseType = "text", n.onreadystatechange = function() {
                        4 === n.readyState && (200 === n.status ? t(n.response) : t(!1))
                    }, n.send()
                }
            }
            segmentFailure(e, t, n) {
                e.responseUrl = null === n.responseURL ? void 0 : n.responseURL, this.xhrRequests.delete(e.id), this.failedSegments.set(e.id, this.now() + this.settings.httpFailedSegmentTimeout), this.emit("segment-error", e, t)
            }
            cleanTimedOutFailedSegments() {
                const e = this.now(),
                    t = [];
                this.failedSegments.forEach((n, r) => {
                    n < e && t.push(r)
                }), t.forEach(e => this.failedSegments.delete(e))
            }
        }
    }, {
        "./stringly-typed-event-emitter": 9,
        debug: "debug"
    }],
    4: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const r = e("debug"),
            i = e("./loader-interface"),
            s = e("events"),
            o = e("./http-media-manager"),
            a = e("./p2p-media-manager"),
            u = e("./media-peer"),
            l = e("./bandwidth-approximator"),
            c = e("./segments-memory-storage"),
            d = e("get-browser-rtc"),
            h = {
                cachedSegmentExpiration: 3e5,
                cachedSegmentsCount: 30,
                domainApi: "",
                useP2P: !0,
                consumeOnly: !1,
                requiredSegmentsPriority: 1,
                simultaneousHttpDownloads: 2,
                httpDownloadProbability: .1,
                httpDownloadProbabilityInterval: 1e3,
                httpDownloadProbabilitySkipIfNoPeers: !1,
                httpFailedSegmentTimeout: 1e4,
                httpDownloadMaxPriority: 20,
                httpDownloadInitialTimeout: 0,
                httpDownloadInitialTimeoutPerSegment: 4e3,
                httpUseRanges: !1,
                simultaneousP2PDownloads: 3,
                p2pDownloadMaxPriority: 20,
                p2pSegmentDownloadTimeout: 6e4,
                webRtcMaxMessageSize: 65535,
                trackerAnnounce: ["wss://tracker.novage.com.ua", "wss://tracker.openwebtorrent.com"],
                peerRequestsPerAnnounce: 10,
                rtcConfig: e("simple-peer").config
            };
        n.HybridLoader = class extends s.EventEmitter {
            constructor(e = {}) {
                super(), this.debug = r("p2pml:hybrid-loader"), this.debugSegments = r("p2pml:hybrid-loader-segments"), this.segmentsQueue = [], this.bandwidthApproximator = new l.BandwidthApproximator, this.httpDownloadInitialTimeoutTimestamp = -1 / 0, this.processInitialSegmentTimeout = (async () => {
                    if (void 0 !== this.httpRandomDownloadInterval) {
                        if (void 0 !== this.masterSwarmId) {
                            const e = await this.segmentsStorage.getSegmentsMap(this.masterSwarmId);
                            this.processSegmentsQueue(e) && !this.settings.consumeOnly && this.p2pManager.sendSegmentsMapToAll(this.createSegmentsMap(e))
                        }
                        this.httpDownloadInitialTimeoutTimestamp !== -1 / 0 && setTimeout(this.processInitialSegmentTimeout, this.settings.httpDownloadInitialTimeoutPerSegment)
                    }
                }), this.downloadRandomSegmentOverHttp = (async () => {
                    if (void 0 === this.masterSwarmId || void 0 === this.httpRandomDownloadInterval || this.httpDownloadInitialTimeoutTimestamp !== -1 / 0 || this.httpManager.getActiveDownloadsCount() >= this.settings.simultaneousHttpDownloads || this.settings.httpDownloadProbabilitySkipIfNoPeers && 0 === this.p2pManager.getPeers().size || this.settings.consumeOnly) return;
                    const e = await this.segmentsStorage.getSegmentsMap(this.masterSwarmId),
                        t = this.p2pManager.getOvrallSegmentsMap(),
                        n = this.segmentsQueue.filter(n => !this.p2pManager.isDownloading(n) && !this.httpManager.isDownloading(n) && !t.has(n.id) && !this.httpManager.isFailed(n) && n.priority <= this.settings.httpDownloadMaxPriority && !e.has(n.id));
                    if (0 == n.length) return;
                    if (Math.random() > this.settings.httpDownloadProbability * n.length) return;
                    const r = n[Math.floor(Math.random() * n.length)];
                    this.debugSegments("HTTP download (random)", r.priority, r.url), this.httpManager.download(r), this.p2pManager.sendSegmentsMapToAll(this.createSegmentsMap(e))
                }), this.onPieceBytesDownloaded = ((e, t, n) => {
                    this.bandwidthApproximator.addBytes(t, this.now()), this.emit(i.Events.PieceBytesDownloaded, e, t, n)
                }), this.onPieceBytesUploaded = ((e, t, n) => {
                    this.emit(i.Events.PieceBytesUploaded, e, t, n)
                }), this.onSegmentLoaded = (async (e, t, n) => {
                    if (this.debugSegments("segment loaded", e.id, e.url), void 0 === this.masterSwarmId) return;
                    let r;
                    e.data = t, e.downloadBandwidth = this.bandwidthApproximator.getBandwidth(this.now()), await this.segmentsStorage.storeSegment(e), this.emit(i.Events.SegmentLoaded, e, n), r = void 0 === r ? await this.segmentsStorage.getSegmentsMap(this.masterSwarmId) : r, this.processSegmentsQueue(r), this.settings.consumeOnly || this.p2pManager.sendSegmentsMapToAll(this.createSegmentsMap(r))
                }), this.onSegmentError = (async (e, t, n) => {
                    if (this.debugSegments("segment error", e.id, e.url, n, t), this.emit(i.Events.SegmentError, e, t, n), void 0 !== this.masterSwarmId) {
                        const e = await this.segmentsStorage.getSegmentsMap(this.masterSwarmId);
                        this.processSegmentsQueue(e) && !this.settings.consumeOnly && this.p2pManager.sendSegmentsMapToAll(this.createSegmentsMap(e))
                    }
                }), this.onPeerConnect = (async e => {
                    this.emit(i.Events.PeerConnect, e), this.settings.consumeOnly || void 0 === this.masterSwarmId || this.p2pManager.sendSegmentsMap(e.id, this.createSegmentsMap(await this.segmentsStorage.getSegmentsMap(this.masterSwarmId)))
                }), this.onPeerClose = (e => {
                    this.emit(i.Events.PeerClose, e)
                }), this.onTrackerUpdate = (async e => {
                    if (this.httpDownloadInitialTimeoutTimestamp !== -1 / 0 && void 0 !== e.incomplete && e.incomplete <= 1 && (this.debugSegments("cancel initial HTTP download timeout - no peers"), this.httpDownloadInitialTimeoutTimestamp = -1 / 0, void 0 !== this.masterSwarmId)) {
                        const e = await this.segmentsStorage.getSegmentsMap(this.masterSwarmId);
                        this.processSegmentsQueue(e) && !this.settings.consumeOnly && this.p2pManager.sendSegmentsMapToAll(this.createSegmentsMap(e))
                    }
                }), this.settings = Object.assign(Object.assign({}, h), e), e.bufferedSegmentsCount && (void 0 === e.p2pDownloadMaxPriority && (this.settings.p2pDownloadMaxPriority = e.bufferedSegmentsCount), void 0 === e.httpDownloadMaxPriority && (this.settings.p2pDownloadMaxPriority = e.bufferedSegmentsCount), delete this.settings.bufferedSegmentsCount), this.segmentsStorage = void 0 === this.settings.segmentsStorage ? new c.SegmentsMemoryStorage(this.settings) : this.settings.segmentsStorage, this.debug("loader settings", this.settings), this.httpManager = this.createHttpManager(), this.httpManager.on("segment-loaded", this.onSegmentLoaded), this.httpManager.on("segment-error", this.onSegmentError), this.httpManager.on("bytes-downloaded", e => this.onPieceBytesDownloaded("http", e)), this.p2pManager = this.createP2PManager(), this.p2pManager.on("segment-loaded", this.onSegmentLoaded), this.p2pManager.on("segment-error", this.onSegmentError), this.p2pManager.on("peer-data-updated", async () => {
                    if (void 0 === this.masterSwarmId) return;
                    const e = await this.segmentsStorage.getSegmentsMap(this.masterSwarmId);
                    this.processSegmentsQueue(e) && !this.settings.consumeOnly && this.p2pManager.sendSegmentsMapToAll(this.createSegmentsMap(e))
                }), this.p2pManager.on("bytes-downloaded", (e, t) => this.onPieceBytesDownloaded("p2p", e, t)), this.p2pManager.on("bytes-uploaded", (e, t) => this.onPieceBytesUploaded("p2p", e, t)), this.p2pManager.on("peer-connected", this.onPeerConnect), this.p2pManager.on("peer-closed", this.onPeerClose), this.p2pManager.on("tracker-update", this.onTrackerUpdate)
            }
            static isSupported() {
                const e = d();
                return e && void 0 !== e.RTCPeerConnection.prototype.createDataChannel
            }
            createHttpManager() {
                return new o.HttpMediaManager(this.settings)
            }
            createP2PManager() {
                return new a.P2PMediaManager(this.segmentsStorage, this.settings)
            }
            async load(e, t) {
                void 0 === this.httpRandomDownloadInterval && (this.httpRandomDownloadInterval = setInterval(this.downloadRandomSegmentOverHttp, this.settings.httpDownloadProbabilityInterval), this.settings.httpDownloadInitialTimeout > 0 && this.settings.httpDownloadInitialTimeoutPerSegment > 0 && (this.debugSegments("enable initial HTTP download timeout", this.settings.httpDownloadInitialTimeout, "per segment", this.settings.httpDownloadInitialTimeoutPerSegment), this.httpDownloadInitialTimeoutTimestamp = this.now(), setTimeout(this.processInitialSegmentTimeout, this.settings.httpDownloadInitialTimeoutPerSegment + 100))), e.length > 0 && (this.masterSwarmId = e[0].masterSwarmId), void 0 !== this.masterSwarmId && this.p2pManager.setStreamSwarmId(t, this.masterSwarmId), this.debug("load segments");
                let n = !1;
                for (const t of this.segmentsQueue) e.find(e => e.url == t.url) || (this.debug("remove segment", t.url), this.httpManager.isDownloading(t) ? (n = !0, this.httpManager.abort(t)) : this.p2pManager.abort(t), this.emit(i.Events.SegmentAbort, t));
                if (this.debug.enabled)
                    for (const t of e) this.segmentsQueue.find(e => e.url == t.url) || this.debug("add segment", t.url);
                if (this.segmentsQueue = e, void 0 === this.masterSwarmId) return;
                let r = await this.segmentsStorage.getSegmentsMap(this.masterSwarmId);
                n = this.processSegmentsQueue(r) || n, await this.cleanSegmentsStorage() && (r = await this.segmentsStorage.getSegmentsMap(this.masterSwarmId), n = !0), n && !this.settings.consumeOnly && this.p2pManager.sendSegmentsMapToAll(this.createSegmentsMap(r))
            }
            async getSegment(e) {
                return void 0 === this.masterSwarmId ? void 0 : this.segmentsStorage.getSegment(e, this.masterSwarmId)
            }
            getSettings() {
                return this.settings
            }
            getDetails() {
                return {
                    peerId: this.p2pManager.getPeerId()
                }
            }
            async destroy() {
                void 0 !== this.httpRandomDownloadInterval && (clearInterval(this.httpRandomDownloadInterval), this.httpRandomDownloadInterval = void 0), this.httpDownloadInitialTimeoutTimestamp = -1 / 0, this.segmentsQueue = [], this.httpManager.destroy(), this.p2pManager.destroy(), this.masterSwarmId = void 0, await this.segmentsStorage.destroy()
            }
            processSegmentsQueue(e) {
                if (this.debugSegments("process segments queue. priority", this.segmentsQueue.length > 0 ? this.segmentsQueue[0].priority : 0), void 0 === this.masterSwarmId || 0 === this.segmentsQueue.length) return !1;
                let t, n = !1,
                    r = !0;
                if (this.httpDownloadInitialTimeoutTimestamp !== -1 / 0) {
                    let t;
                    for (const n of this.segmentsQueue)
                        if (!e.has(n.id)) {
                            t = n.priority;
                            break
                        } const n = this.now() - this.httpDownloadInitialTimeoutTimestamp;
                    (r = n >= this.settings.httpDownloadInitialTimeout || void 0 !== t && n > this.settings.httpDownloadInitialTimeoutPerSegment && t <= 0) && (this.debugSegments("cancel initial HTTP download timeout - timed out"), this.httpDownloadInitialTimeoutTimestamp = -1 / 0)
                }
                for (let i = 0; i < this.segmentsQueue.length; i++) {
                    const s = this.segmentsQueue[i];
                    if (!e.has(s.id) && !this.httpManager.isDownloading(s)) {
                        if (s.priority <= this.settings.requiredSegmentsPriority && r && !this.httpManager.isFailed(s)) {
                            if (this.httpManager.getActiveDownloadsCount() >= this.settings.simultaneousHttpDownloads)
                                for (let e = this.segmentsQueue.length - 1; e > i; e--) {
                                    const t = this.segmentsQueue[e];
                                    if (this.httpManager.isDownloading(t)) {
                                        this.debugSegments("cancel HTTP download", t.priority, t.url), this.httpManager.abort(t);
                                        break
                                    }
                                }
                            if (this.httpManager.getActiveDownloadsCount() < this.settings.simultaneousHttpDownloads) {
                                const e = this.p2pManager.abort(s);
                                this.httpManager.download(s, e), this.debugSegments("HTTP download (priority)", s.priority, s.url), n = !0;
                                continue
                            }
                        }
                        if (!this.p2pManager.isDownloading(s))
                            if (s.priority <= this.settings.requiredSegmentsPriority) {
                                if ((t = t || this.p2pManager.getOvrallSegmentsMap()).get(s.id) !== u.MediaPeerSegmentStatus.Loaded) continue;
                                if (this.p2pManager.getActiveDownloadsCount() >= this.settings.simultaneousP2PDownloads)
                                    for (let e = this.segmentsQueue.length - 1; e > i; e--) {
                                        const t = this.segmentsQueue[e];
                                        if (this.p2pManager.isDownloading(t)) {
                                            this.debugSegments("cancel P2P download", t.priority, t.url), this.p2pManager.abort(t);
                                            break
                                        }
                                    }
                                if (this.p2pManager.getActiveDownloadsCount() < this.settings.simultaneousP2PDownloads && this.p2pManager.download(s)) {
                                    this.debugSegments("P2P download (priority)", s.priority, s.url);
                                    continue
                                }
                            } else this.p2pManager.getActiveDownloadsCount() < this.settings.simultaneousP2PDownloads && s.priority <= this.settings.p2pDownloadMaxPriority && this.p2pManager.download(s) && this.debugSegments("P2P download", s.priority, s.url)
                    }
                }
                return n
            }
            getStreamSwarmId(e) {
                return void 0 === e.streamId ? e.masterSwarmId : `${e.masterSwarmId}+${e.streamId}`
            }
            createSegmentsMap(e) {
                const t = {},
                    n = (e, n) => {
                        const r = this.getStreamSwarmId(e),
                            i = e.sequence;
                        let s = t[r];
                        void 0 === s && (s = ["", []], t[r] = s);
                        const o = s[1];
                        s[0] += 0 == o.length ? i : `|${i}`, o.push(n)
                    };
                for (const t of e.values()) n(t.segment, u.MediaPeerSegmentStatus.Loaded);
                for (const e of this.httpManager.getActiveDownloads().values()) n(e.segment, u.MediaPeerSegmentStatus.LoadingByHttp);
                return t
            }
            async cleanSegmentsStorage() {
                return void 0 !== this.masterSwarmId && this.segmentsStorage.clean(this.masterSwarmId, e => void 0 !== this.segmentsQueue.find(t => t.id === e))
            }
            now() {
                return performance.now()
            }
        }
    }, {
        "./bandwidth-approximator": 1,
        "./http-media-manager": 3,
        "./loader-interface": 5,
        "./media-peer": 6,
        "./p2p-media-manager": 7,
        "./segments-memory-storage": 8,
        debug: "debug",
        events: "events",
        "get-browser-rtc": 18,
        "simple-peer": 44
    }],
    5: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            function(e) {
                e.SegmentLoaded = "segment_loaded", e.SegmentError = "segment_error", e.SegmentAbort = "segment_abort", e.PeerConnect = "peer_connect", e.PeerClose = "peer_close", e.PieceBytesDownloaded = "piece_bytes_downloaded", e.PieceBytesUploaded = "piece_bytes_uploaded"
            }(n.Events || (n.Events = {}))
    }, {}],
    6: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const r = e("debug"),
            i = e("./stringly-typed-event-emitter"),
            s = e("buffer");
        var o, a;
        ! function(e) {
            e[e.SegmentData = 0] = "SegmentData", e[e.SegmentAbsent = 1] = "SegmentAbsent", e[e.SegmentsMap = 2] = "SegmentsMap", e[e.SegmentRequest = 3] = "SegmentRequest", e[e.CancelSegmentRequest = 4] = "CancelSegmentRequest"
        }(o || (o = {})),
        function(e) {
            e[e.Loaded = 0] = "Loaded", e[e.LoadingByHttp = 1] = "LoadingByHttp"
        }(a = n.MediaPeerSegmentStatus || (n.MediaPeerSegmentStatus = {}));
        class u {
            constructor(e, t) {
                this.id = e, this.size = t, this.bytesDownloaded = 0, this.pieces = []
            }
        }
        n.MediaPeer = class extends i.STEEmitter {
            constructor(e, t) {
                super(), this.peer = e, this.settings = t, this.remoteAddress = "", this.downloadingSegmentId = null, this.downloadingSegment = null, this.segmentsMap = new Map, this.debug = r("p2pml:media-peer"), this.timer = null, this.onPeerConnect = (() => {
                    this.debug("peer connect", this.id, this), this.remoteAddress = this.peer.remoteAddress, this.emit("connect", this)
                }), this.onPeerClose = (() => {
                    this.debug("peer close", this.id, this), this.terminateSegmentRequest(), this.emit("close", this)
                }), this.onPeerError = (e => {
                    this.debug("peer error", this.id, e, this)
                }), this.onPeerData = (e => {
                    const t = this.getJsonCommand(e);
                    if (null != t) {
                        if (this.downloadingSegment) {
                            this.debug("peer segment download is interrupted by a command", this.id, this);
                            const e = this.downloadingSegment.id;
                            return this.terminateSegmentRequest(), void this.emit("segment-error", this, e, "Segment download is interrupted by a command")
                        }
                        switch (this.debug("peer receive command", this.id, t, this), t.c) {
                            case o.SegmentsMap:
                                this.segmentsMap = this.createSegmentsMap(t.m), this.emit("data-updated");
                                break;
                            case o.SegmentRequest:
                                this.emit("segment-request", this, t.i);
                                break;
                            case o.SegmentData:
                                this.downloadingSegmentId === t.i && (this.downloadingSegment = new u(t.i, t.s), this.cancelResponseTimeoutTimer());
                                break;
                            case o.SegmentAbsent:
                                this.downloadingSegmentId === t.i && (this.terminateSegmentRequest(), this.segmentsMap.delete(t.i), this.emit("segment-absent", this, t.i));
                                break;
                            case o.CancelSegmentRequest:
                        }
                    } else this.receiveSegmentPiece(e)
                }), this.peer.on("connect", this.onPeerConnect), this.peer.on("close", this.onPeerClose), this.peer.on("error", this.onPeerError), this.peer.on("data", this.onPeerData), this.id = e.id
            }
            receiveSegmentPiece(e) {
                if (!this.downloadingSegment) return void this.debug("peer segment not requested", this.id, this);
                this.downloadingSegment.bytesDownloaded += e.byteLength, this.downloadingSegment.pieces.push(e), this.emit("bytes-downloaded", this, e.byteLength);
                const t = this.downloadingSegment.id;
                if (this.downloadingSegment.bytesDownloaded == this.downloadingSegment.size) {
                    const e = new Uint8Array(this.downloadingSegment.size);
                    let n = 0;
                    for (const t of this.downloadingSegment.pieces) e.set(new Uint8Array(t), n), n += t.byteLength;
                    this.debug("peer segment download done", this.id, t, this), this.terminateSegmentRequest(), this.emit("segment-loaded", this, t, e.buffer)
                } else this.downloadingSegment.bytesDownloaded > this.downloadingSegment.size && (this.debug("peer segment download bytes mismatch", this.id, t, this), this.terminateSegmentRequest(), this.emit("segment-error", this, t, "Too many bytes received for segment"))
            }
            getJsonCommand(e) {
                const t = new Uint8Array(e);
                if (123 == t[0] && 34 == t[1] && 125 == t[e.byteLength - 1]) try {
                    return JSON.parse((new TextDecoder).decode(e))
                } catch (e) {}
                return null
            }
            createSegmentsMap(e) {
                if (null == e || !(e instanceof Object)) return new Map;
                const t = new Map;
                for (const n of Object.keys(e)) {
                    const r = e[n];
                    if (!(r instanceof Array && 2 === r.length && "string" == typeof r[0] && r[1] instanceof Array)) return new Map;
                    const i = r[0].split("|"),
                        s = r[1];
                    if (i.length !== s.length) return new Map;
                    for (let e = 0; e < i.length; e++) {
                        const r = s[e];
                        if ("number" != typeof r || void 0 === a[r]) return new Map;
                        t.set(`${n}+${i[e]}`, r)
                    }
                }
                return t
            }
            sendCommand(e) {
                this.debug("peer send command", this.id, e, this), this.peer.write(JSON.stringify(e))
            }
            destroy() {
                this.debug("peer destroy", this.id, this), this.terminateSegmentRequest(), this.peer.destroy()
            }
            getDownloadingSegmentId() {
                return this.downloadingSegmentId
            }
            getSegmentsMap() {
                return this.segmentsMap
            }
            sendSegmentsMap(e) {
                this.sendCommand({
                    c: o.SegmentsMap,
                    m: e
                })
            }
            sendSegmentData(e, t) {
                this.sendCommand({
                    c: o.SegmentData,
                    i: e,
                    s: t.byteLength
                });
                let n = t.byteLength;
                for (; n > 0;) {
                    const e = n >= this.settings.webRtcMaxMessageSize ? this.settings.webRtcMaxMessageSize : n,
                        r = s.Buffer.from(t, t.byteLength - n, e);
                    this.peer.write(r), n -= e
                }
                this.emit("bytes-uploaded", this, t.byteLength)
            }
            sendSegmentAbsent(e) {
                this.sendCommand({
                    c: o.SegmentAbsent,
                    i: e
                })
            }
            requestSegment(e) {
                if (this.downloadingSegmentId) throw new Error("A segment is already downloading: " + this.downloadingSegmentId);
                this.sendCommand({
                    c: o.SegmentRequest,
                    i: e
                }), this.downloadingSegmentId = e, this.runResponseTimeoutTimer()
            }
            cancelSegmentRequest() {
                let e;
                if (this.downloadingSegmentId) {
                    const t = this.downloadingSegmentId;
                    e = this.downloadingSegment ? this.downloadingSegment.pieces : void 0, this.terminateSegmentRequest(), this.sendCommand({
                        c: o.CancelSegmentRequest,
                        i: t
                    })
                }
                return e
            }
            runResponseTimeoutTimer() {
                this.timer = setTimeout(() => {
                    if (this.timer = null, !this.downloadingSegmentId) return;
                    const e = this.downloadingSegmentId;
                    this.cancelSegmentRequest(), this.emit("segment-timeout", this, e)
                }, this.settings.p2pSegmentDownloadTimeout)
            }
            cancelResponseTimeoutTimer() {
                this.timer && (clearTimeout(this.timer), this.timer = null)
            }
            terminateSegmentRequest() {
                this.downloadingSegmentId = null, this.downloadingSegment = null, this.cancelResponseTimeoutTimer()
            }
        }
    }, {
        "./stringly-typed-event-emitter": 9,
        buffer: 16,
        debug: "debug"
    }],
    7: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const r = e("debug"),
            i = e("bittorrent-tracker/client"),
            s = e("./stringly-typed-event-emitter"),
            o = e("./media-peer"),
            a = e("buffer"),
            u = e("sha.js/sha1"),
            l = `-WW${e("./index").version.replace(/\d*./g,e=>`0${parseInt(e,10)%100}`.slice(-2)).slice(0,4)}-`;
        class c {
            constructor(e, t) {
                this.peerId = e, this.segment = t
            }
        }
        n.P2PMediaManager = class extends s.STEEmitter {
            constructor(e, t) {
                super(), this.sementsStorage = e, this.settings = t, this.trackerClient = null, this.peers = new Map, this.peerCandidates = new Map, this.peerSegmentRequests = new Map, this.streamSwarmId = null, this.debug = r("p2pml:p2p-media-manager"), this.pendingTrackerClient = null, this.onTrackerError = (e => {
                    this.debug("tracker error", e)
                }), this.onTrackerWarning = (e => {
                    this.debug("tracker warning", e)
                }), this.onTrackerUpdate = (e => {
                    this.debug("tracker update", e), this.emit("tracker-update", e)
                }), this.onTrackerPeer = (e => {
                    if (this.debug("tracker peer", e.id, e), this.peers.has(e.id)) return this.debug("tracker peer already connected", e.id, e), void e.destroy();
                    const t = new o.MediaPeer(e, this.settings);
                    t.on("connect", this.onPeerConnect), t.on("close", this.onPeerClose), t.on("data-updated", this.onPeerDataUpdated), t.on("segment-request", this.onSegmentRequest), t.on("segment-loaded", this.onSegmentLoaded), t.on("segment-absent", this.onSegmentAbsent), t.on("segment-error", this.onSegmentError), t.on("segment-timeout", this.onSegmentTimeout), t.on("bytes-downloaded", this.onPieceBytesDownloaded), t.on("bytes-uploaded", this.onPieceBytesUploaded);
                    let n = this.peerCandidates.get(t.id);
                    n || (n = [], this.peerCandidates.set(t.id, n)), n.push(t)
                }), this.onPieceBytesDownloaded = ((e, t) => {
                    this.emit("bytes-downloaded", t, e.id)
                }), this.onPieceBytesUploaded = ((e, t) => {
                    this.emit("bytes-uploaded", t, e.id)
                }), this.onPeerConnect = (e => {
                    if (this.peers.get(e.id)) return this.debug("tracker peer already connected (in peer connect)", e.id, e), void e.destroy();
                    this.peers.set(e.id, e);
                    const t = this.peerCandidates.get(e.id);
                    if (t) {
                        for (const n of t) n != e && n.destroy();
                        this.peerCandidates.delete(e.id)
                    }
                    this.emit("peer-connected", {
                        id: e.id,
                        remoteAddress: e.remoteAddress
                    })
                }), this.onPeerClose = (e => {
                    if (this.peers.get(e.id) != e) {
                        const t = this.peerCandidates.get(e.id);
                        if (!t) return;
                        const n = t.indexOf(e);
                        return -1 != n && t.splice(n, 1), void(0 == t.length && this.peerCandidates.delete(e.id))
                    }
                    for (const [t, n] of this.peerSegmentRequests) n.peerId == e.id && this.peerSegmentRequests.delete(t);
                    this.peers.delete(e.id), this.emit("peer-data-updated"), this.emit("peer-closed", e.id)
                }), this.onPeerDataUpdated = (() => {
                    this.emit("peer-data-updated")
                }), this.onSegmentRequest = (async (e, t) => {
                    if (void 0 === this.masterSwarmId) return;
                    const n = await this.sementsStorage.getSegment(t, this.masterSwarmId);
                    n ? e.sendSegmentData(t, n.data) : e.sendSegmentAbsent(t)
                }), this.onSegmentLoaded = (async (e, t, n) => {
                    const r = this.peerSegmentRequests.get(t);
                    if (!r) return;
                    const i = r.segment;
                    if (this.settings.segmentValidator) try {
                        await this.settings.segmentValidator(Object.assign(Object.assign({}, i), {
                            data: n
                        }), "p2p", e.id)
                    } catch (n) {
                        return this.debug("segment validator failed", n), this.peerSegmentRequests.delete(t), this.emit("segment-error", i, n, e.id), void this.onPeerClose(e)
                    }
                    this.peerSegmentRequests.delete(t), this.emit("segment-loaded", i, n, e.id)
                }), this.onSegmentAbsent = ((e, t) => {
                    this.peerSegmentRequests.delete(t), this.emit("peer-data-updated")
                }), this.onSegmentError = ((e, t, n) => {
                    const r = this.peerSegmentRequests.get(t);
                    r && (this.peerSegmentRequests.delete(t), this.emit("segment-error", r.segment, n, e.id))
                }), this.onSegmentTimeout = ((e, t) => {
                    const n = this.peerSegmentRequests.get(t);
                    n && (this.peerSegmentRequests.delete(t), e.destroy(), this.peers.delete(n.peerId) && this.emit("peer-data-updated"))
                }), this.peerId = t.useP2P ? function() {
                    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    let t = l;
                    for (let n = 0; n < 20 - l.length; n++) t += e.charAt(Math.floor(Math.random() * e.length));
                    return (new TextEncoder).encode(t).buffer
                }() : new ArrayBuffer(0), this.debug.enabled && this.debug("peer ID", this.getPeerId(), (new TextDecoder).decode(this.peerId))
            }
            getPeers() {
                return this.peers
            }
            getPeerId() {
                return a.Buffer.from(this.peerId).toString("hex")
            }
            async setStreamSwarmId(e, t) {
                if (this.streamSwarmId === e) return;
                this.destroy(!0), this.streamSwarmId = e, this.masterSwarmId = t, this.debug("stream swarm ID", this.streamSwarmId), this.pendingTrackerClient = {
                    isDestroyed: !1
                };
                const n = this.pendingTrackerClient,
                    r = (new u).update(2 + this.streamSwarmId).digest();
                n.isDestroyed ? null != this.trackerClient && (this.trackerClient.destroy(), this.trackerClient = null) : (this.pendingTrackerClient = null, this.createClient(r))
            }
            createClient(e) {
                if (!this.settings.useP2P) return;
                const t = {
                    infoHash: a.Buffer.from(e, 0, 20),
                    peerId: a.Buffer.from(this.peerId, 0, 20),
                    announce: this.settings.trackerAnnounce,
                    rtcConfig: this.settings.rtcConfig,
                    port: 6881,
                    getAnnounceOpts: () => ({
                        numwant: this.settings.peerRequestsPerAnnounce
                    })
                };
                let n = this.trackerClient;
                this.trackerClient = new i(t), this.trackerClient.on("error", this.onTrackerError), this.trackerClient.on("warning", this.onTrackerWarning), this.trackerClient.on("update", this.onTrackerUpdate), this.trackerClient.on("peer", this.onTrackerPeer), this.trackerClient.start(), null != n && (n.destroy(), n = null)
            }
            download(e) {
                if (this.isDownloading(e)) return !1;
                const t = [];
                for (const n of this.peers.values()) null == n.getDownloadingSegmentId() && n.getSegmentsMap().get(e.id) === o.MediaPeerSegmentStatus.Loaded && t.push(n);
                if (0 === t.length) return !1;
                const n = t[Math.floor(Math.random() * t.length)];
                return n.requestSegment(e.id), this.peerSegmentRequests.set(e.id, new c(n.id, e)), !0
            }
            abort(e) {
                let t;
                const n = this.peerSegmentRequests.get(e.id);
                if (n) {
                    const r = this.peers.get(n.peerId);
                    r && (t = r.cancelSegmentRequest()), this.peerSegmentRequests.delete(e.id)
                }
                return t
            }
            isDownloading(e) {
                return this.peerSegmentRequests.has(e.id)
            }
            getActiveDownloadsCount() {
                return this.peerSegmentRequests.size
            }
            destroy(e = !1) {
                this.streamSwarmId = null, this.trackerClient && (this.trackerClient.stop(), e ? (this.trackerClient.removeAllListeners("error"), this.trackerClient.removeAllListeners("warning"), this.trackerClient.removeAllListeners("update"), this.trackerClient.removeAllListeners("peer")) : (this.trackerClient.destroy(), this.trackerClient = null)), this.pendingTrackerClient && (this.pendingTrackerClient.isDestroyed = !0, this.pendingTrackerClient = null), this.peers.forEach(e => e.destroy()), this.peers.clear(), this.peerSegmentRequests.clear();
                for (const e of this.peerCandidates.values())
                    for (const t of e) t.destroy();
                this.peerCandidates.clear()
            }
            sendSegmentsMapToAll(e) {
                this.peers.forEach(t => t.sendSegmentsMap(e))
            }
            sendSegmentsMap(e, t) {
                const n = this.peers.get(e);
                n && n.sendSegmentsMap(t)
            }
            getOvrallSegmentsMap() {
                const e = new Map;
                for (const t of this.peers.values())
                    for (const [n, r] of t.getSegmentsMap()) r === o.MediaPeerSegmentStatus.Loaded ? e.set(n, o.MediaPeerSegmentStatus.Loaded) : e.get(n) || e.set(n, o.MediaPeerSegmentStatus.LoadingByHttp);
                return e
            }
        }
    }, {
        "./index": "p2p-media-loader-core",
        "./media-peer": 6,
        "./stringly-typed-event-emitter": 9,
        "bittorrent-tracker/client": 11,
        buffer: 16,
        debug: "debug",
        "sha.js/sha1": 43
    }],
    8: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.SegmentsMemoryStorage = class {
            constructor(e) {
                this.settings = e, this.cache = new Map
            }
            async storeSegment(e) {
                this.cache.set(e.id, {
                    segment: e,
                    lastAccessed: performance.now()
                })
            }
            async getSegmentsMap(e) {
                return this.cache
            }
            async getSegment(e, t) {
                const n = this.cache.get(e);
                if (void 0 !== n) return n.lastAccessed = performance.now(), n.segment
            }
            async hasSegment(e, t) {
                return this.cache.has(e)
            }
            async clean(e, t) {
                const n = [],
                    r = [],
                    i = performance.now();
                for (const e of this.cache.values()) i - e.lastAccessed > this.settings.cachedSegmentExpiration ? n.push(e.segment.id) : r.push(e);
                let s = r.length - this.settings.cachedSegmentsCount;
                if (s > 0) {
                    r.sort((e, t) => e.lastAccessed - t.lastAccessed);
                    for (const e of r)
                        if ((void 0 === t || !t(e.segment.id)) && (n.push(e.segment.id), 0 == --s)) break
                }
                return n.forEach(e => this.cache.delete(e)), n.length > 0
            }
            async destroy() {
                this.cache.clear()
            }
        }
    }, {}],
    9: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const r = e("events");
        n.STEEmitter = class extends r.EventEmitter {
            on(e, t) {
                return super.on(e, t)
            }
            emit(e, ...t) {
                return super.emit(e, ...t)
            }
        }
    }, {
        events: "events"
    }],
    10: [function(e, t, n) {
        "use strict";
        n.byteLength = function(e) {
            var t = l(e),
                n = t[0],
                r = t[1];
            return 3 * (n + r) / 4 - r
        }, n.toByteArray = function(e) {
            var t, n, r = l(e),
                o = r[0],
                a = r[1],
                u = new s(3 * (o + a) / 4 - a),
                c = 0,
                d = a > 0 ? o - 4 : o;
            for (n = 0; n < d; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], u[c++] = t >> 16 & 255, u[c++] = t >> 8 & 255, u[c++] = 255 & t;
            return 2 === a && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, u[c++] = 255 & t), 1 === a && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, u[c++] = t >> 8 & 255, u[c++] = 255 & t), u
        }, n.fromByteArray = function(e) {
            for (var t, n = e.length, i = n % 3, s = [], o = 0, a = n - i; o < a; o += 16383) s.push(c(e, o, o + 16383 > a ? a : o + 16383));
            return 1 === i ? (t = e[n - 1], s.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], s.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), s.join("")
        };
        for (var r = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = o.length; a < u; ++a) r[a] = o[a], i[o.charCodeAt(a)] = a;

        function l(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
        }

        function c(e, t, n) {
            for (var i, s, o = [], a = t; a < n; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(r[(s = i) >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
            return o.join("")
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, {}],
    11: [function(e, t, n) {
        (function(n, r) {
            const i = e("debug")("bittorrent-tracker:client"),
                s = e("events"),
                o = e("once"),
                a = e("run-parallel"),
                u = e("simple-peer"),
                l = e("uniq"),
                c = e("./lib/common"),
                d = e("./lib/client/http-tracker"),
                h = e("./lib/client/udp-tracker"),
                f = e("./lib/client/websocket-tracker");
            class p extends s {
                constructor(e = {}) {
                    if (super(), !e.peerId) throw new Error("Option `peerId` is required");
                    if (!e.infoHash) throw new Error("Option `infoHash` is required");
                    if (!e.announce) throw new Error("Option `announce` is required");
                    if (!n.browser && !e.port) throw new Error("Option `port` is required");
                    this.peerId = "string" == typeof e.peerId ? e.peerId : e.peerId.toString("hex"), this._peerIdBuffer = r.from(this.peerId, "hex"), this._peerIdBinary = this._peerIdBuffer.toString("binary"), this.infoHash = "string" == typeof e.infoHash ? e.infoHash.toLowerCase() : e.infoHash.toString("hex"), this._infoHashBuffer = r.from(this.infoHash, "hex"), this._infoHashBinary = this._infoHashBuffer.toString("binary"), i("new client %s", this.infoHash), this.destroyed = !1, this._port = e.port, this._getAnnounceOpts = e.getAnnounceOpts, this._rtcConfig = e.rtcConfig, this._userAgent = e.userAgent, this._wrtc = "function" == typeof e.wrtc ? e.wrtc() : e.wrtc;
                    let t = "string" == typeof e.announce ? [e.announce] : null == e.announce ? [] : e.announce;
                    t = t.map(e => ("/" === (e = e.toString())[e.length - 1] && (e = e.substring(0, e.length - 1)), e)), t = l(t);
                    const s = !1 !== this._wrtc && (!!this._wrtc || u.WEBRTC_SUPPORT),
                        o = e => {
                            n.nextTick(() => {
                                this.emit("warning", e)
                            })
                        };
                    this._trackers = t.map(e => {
                        let t;
                        try {
                            t = new URL(e)
                        } catch (t) {
                            return o(new Error(`Invalid tracker URL: ${e}`)), null
                        }
                        const n = t.port;
                        if (n < 0 || n > 65535) return o(new Error(`Invalid tracker port: ${e}`)), null;
                        const r = t.protocol;
                        return "http:" !== r && "https:" !== r || "function" != typeof d ? "udp:" === r && "function" == typeof h ? new h(this, e) : "ws:" !== r && "wss:" !== r || !s ? (o(new Error(`Unsupported tracker protocol: ${e}`)), null) : "ws:" === r && "undefined" != typeof window && "https:" === window.location.protocol ? (o(new Error(`Unsupported tracker protocol: ${e}`)), null) : new f(this, e) : new d(this, e)
                    }).filter(Boolean)
                }
                start(e) {
                    (e = this._defaultAnnounceOpts(e)).event = "started", i("send `start` %o", e), this._announce(e), this._trackers.forEach(e => {
                        e.setInterval()
                    })
                }
                stop(e) {
                    (e = this._defaultAnnounceOpts(e)).event = "stopped", i("send `stop` %o", e), this._announce(e)
                }
                complete(e) {
                    e || (e = {}), (e = this._defaultAnnounceOpts(e)).event = "completed", i("send `complete` %o", e), this._announce(e)
                }
                update(e) {
                    (e = this._defaultAnnounceOpts(e)).event && delete e.event, i("send `update` %o", e), this._announce(e)
                }
                _announce(e) {
                    this._trackers.forEach(t => {
                        t.announce(e)
                    })
                }
                scrape(e) {
                    i("send `scrape`"), e || (e = {}), this._trackers.forEach(t => {
                        t.scrape(e)
                    })
                }
                setInterval(e) {
                    i("setInterval %d", e), this._trackers.forEach(t => {
                        t.setInterval(e)
                    })
                }
                destroy(e) {
                    if (this.destroyed) return;
                    this.destroyed = !0, i("destroy");
                    const t = this._trackers.map(e => t => {
                        e.destroy(t)
                    });
                    a(t, e), this._trackers = [], this._getAnnounceOpts = null
                }
                _defaultAnnounceOpts(e = {}) {
                    return null == e.numwant && (e.numwant = c.DEFAULT_ANNOUNCE_PEERS), null == e.uploaded && (e.uploaded = 0), null == e.downloaded && (e.downloaded = 0), this._getAnnounceOpts && (e = Object.assign({}, e, this._getAnnounceOpts())), e
                }
            }
            p.scrape = ((e, t) => {
                if (t = o(t), !e.infoHash) throw new Error("Option `infoHash` is required");
                if (!e.announce) throw new Error("Option `announce` is required");
                const n = Object.assign({}, e, {
                        infoHash: Array.isArray(e.infoHash) ? e.infoHash[0] : e.infoHash,
                        peerId: r.from("01234567890123456789"),
                        port: 6881
                    }),
                    i = new p(n);
                i.once("error", t), i.once("warning", t);
                let s = Array.isArray(e.infoHash) ? e.infoHash.length : 1;
                const a = {};
                return i.on("scrape", e => {
                    if (s -= 1, a[e.infoHash] = e, 0 === s) {
                        i.destroy();
                        const e = Object.keys(a);
                        1 === e.length ? t(null, a[e[0]]) : t(null, a)
                    }
                }), e.infoHash = Array.isArray(e.infoHash) ? e.infoHash.map(e => r.from(e, "hex")) : r.from(e.infoHash, "hex"), i.scrape({
                    infoHash: e.infoHash
                }), i
            }), t.exports = p
        }).call(this, e("_process"), e("buffer").Buffer)
    }, {
        "./lib/client/http-tracker": 15,
        "./lib/client/udp-tracker": 15,
        "./lib/client/websocket-tracker": 13,
        "./lib/common": 14,
        _process: 23,
        buffer: 16,
        debug: "debug",
        events: "events",
        once: 22,
        "run-parallel": 40,
        "simple-peer": 44,
        uniq: 47
    }],
    12: [function(e, t, n) {
        const r = e("events");
        t.exports = class extends r {
            constructor(e, t) {
                super(), this.client = e, this.announceUrl = t, this.interval = null, this.destroyed = !1
            }
            setInterval(e) {
                null == e && (e = this.DEFAULT_ANNOUNCE_INTERVAL), clearInterval(this.interval), e && (this.interval = setInterval(() => {
                    this.announce(this.client._defaultAnnounceOpts())
                }, e), this.interval.unref && this.interval.unref())
            }
        }
    }, {
        events: "events"
    }],
    13: [function(e, t, n) {
        const r = e("debug")("bittorrent-tracker:websocket-tracker"),
            i = e("simple-peer"),
            s = e("randombytes"),
            o = e("simple-websocket"),
            a = e("../common"),
            u = e("./tracker"),
            l = {},
            c = 1e4,
            d = 18e5,
            h = 12e4,
            f = 5e4;
        class p extends u {
            constructor(e, t, n) {
                super(e, t), r("new websocket tracker %s", t), this.peers = {}, this.socket = null, this.reconnecting = !1, this.retries = 0, this.reconnectTimer = null, this.expectingResponse = !1, this._openSocket()
            }
            announce(e) {
                if (this.destroyed || this.reconnecting) return;
                if (!this.socket.connected) return void this.socket.once("connect", () => {
                    this.announce(e)
                });
                const t = Object.assign({}, e, {
                    action: "announce",
                    info_hash: this.client._infoHashBinary,
                    peer_id: this.client._peerIdBinary
                });
                if (this._trackerId && (t.trackerid = this._trackerId), "stopped" === e.event || "completed" === e.event) this._send(t);
                else {
                    const n = Math.min(e.numwant, 10);
                    this._generateOffers(n, e => {
                        t.numwant = n, t.offers = e, this._send(t)
                    })
                }
            }
            scrape(e) {
                if (this.destroyed || this.reconnecting) return;
                if (!this.socket.connected) return void this.socket.once("connect", () => {
                    this.scrape(e)
                });
                const t = {
                    action: "scrape",
                    info_hash: Array.isArray(e.infoHash) && e.infoHash.length > 0 ? e.infoHash.map(e => e.toString("binary")) : e.infoHash && e.infoHash.toString("binary") || this.client._infoHashBinary
                };
                this._send(t)
            }
            destroy(e = g) {
                if (this.destroyed) return e(null);
                this.destroyed = !0, clearInterval(this.interval), clearTimeout(this.reconnectTimer);
                for (const e in this.peers) {
                    const t = this.peers[e];
                    clearTimeout(t.trackerTimeout), t.destroy()
                }
                if (this.peers = null, this.socket && (this.socket.removeListener("connect", this._onSocketConnectBound), this.socket.removeListener("data", this._onSocketDataBound), this.socket.removeListener("close", this._onSocketCloseBound), this.socket.removeListener("error", this._onSocketErrorBound), this.socket = null), this._onSocketConnectBound = null, this._onSocketErrorBound = null, this._onSocketDataBound = null, this._onSocketCloseBound = null, l[this.announceUrl] && (l[this.announceUrl].consumers -= 1), l[this.announceUrl].consumers > 0) return e();
                let t = l[this.announceUrl];
                if (delete l[this.announceUrl], t.on("error", g), t.once("close", e), !this.expectingResponse) return r();
                var n = setTimeout(r, a.DESTROY_TIMEOUT);

                function r() {
                    n && (clearTimeout(n), n = null), t.removeListener("data", r), t.destroy(), t = null
                }
                t.once("data", r)
            }
            _openSocket() {
                this.destroyed = !1, this.peers || (this.peers = {}), this._onSocketConnectBound = (() => {
                    this._onSocketConnect()
                }), this._onSocketErrorBound = (e => {
                    this._onSocketError(e)
                }), this._onSocketDataBound = (e => {
                    this._onSocketData(e)
                }), this._onSocketCloseBound = (() => {
                    this._onSocketClose()
                }), this.socket = l[this.announceUrl], this.socket ? (l[this.announceUrl].consumers += 1, this.socket.connected && this._onSocketConnectBound()) : (this.socket = l[this.announceUrl] = new o(this.announceUrl), this.socket.consumers = 1, this.socket.once("connect", this._onSocketConnectBound)), this.socket.on("data", this._onSocketDataBound), this.socket.once("close", this._onSocketCloseBound), this.socket.once("error", this._onSocketErrorBound)
            }
            _onSocketConnect() {
                this.destroyed || this.reconnecting && (this.reconnecting = !1, this.retries = 0, this.announce(this.client._defaultAnnounceOpts()))
            }
            _onSocketData(e) {
                if (!this.destroyed) {
                    this.expectingResponse = !1;
                    try {
                        e = JSON.parse(e)
                    } catch (e) {
                        return void this.client.emit("warning", new Error("Invalid tracker response"))
                    }
                    "announce" === e.action ? this._onAnnounceResponse(e) : "scrape" === e.action ? this._onScrapeResponse(e) : this._onSocketError(new Error(`invalid action in WS response: ${e.action}`))
                }
            }
            _onAnnounceResponse(e) {
                if (e.info_hash !== this.client._infoHashBinary) return void r("ignoring websocket data from %s for %s (looking for %s: reused socket)", this.announceUrl, a.binaryToHex(e.info_hash), this.client.infoHash);
                if (e.peer_id && e.peer_id === this.client._peerIdBinary) return;
                r("received %s from %s for %s", JSON.stringify(e), this.announceUrl, this.client.infoHash);
                const t = e["failure reason"];
                if (t) return this.client.emit("warning", new Error(t));
                const n = e["warning message"];
                n && this.client.emit("warning", new Error(n));
                const i = e.interval || e["min interval"];
                i && this.setInterval(1e3 * i);
                const s = e["tracker id"];
                if (s && (this._trackerId = s), null != e.complete) {
                    const t = Object.assign({}, e, {
                        announce: this.announceUrl,
                        infoHash: a.binaryToHex(e.info_hash)
                    });
                    this.client.emit("update", t)
                }
                let o;
                if (e.offer && e.peer_id && (r("creating peer (from remote offer)"), (o = this._createPeer()).id = a.binaryToHex(e.peer_id), o.once("signal", t => {
                        const n = {
                            action: "announce",
                            info_hash: this.client._infoHashBinary,
                            peer_id: this.client._peerIdBinary,
                            to_peer_id: e.peer_id,
                            answer: t,
                            offer_id: e.offer_id
                        };
                        this._trackerId && (n.trackerid = this._trackerId), this._send(n)
                    }), o.signal(e.offer), this.client.emit("peer", o)), e.answer && e.peer_id) {
                    const t = a.binaryToHex(e.offer_id);
                    (o = this.peers[t]) ? (o.id = a.binaryToHex(e.peer_id), o.signal(e.answer), this.client.emit("peer", o), clearTimeout(o.trackerTimeout), o.trackerTimeout = null, delete this.peers[t]) : r(`got unexpected answer: ${JSON.stringify(e.answer)}`)
                }
            }
            _onScrapeResponse(e) {
                e = e.files || {};
                const t = Object.keys(e);
                0 !== t.length ? t.forEach(t => {
                    const n = Object.assign(e[t], {
                        announce: this.announceUrl,
                        infoHash: a.binaryToHex(t)
                    });
                    this.client.emit("scrape", n)
                }) : this.client.emit("warning", new Error("invalid scrape response"))
            }
            _onSocketClose() {
                this.destroyed || (this.destroy(), this._startReconnectTimer())
            }
            _onSocketError(e) {
                this.destroyed || (this.destroy(), this.client.emit("warning", e), this._startReconnectTimer())
            }
            _startReconnectTimer() {
                const e = Math.floor(Math.random() * h) + Math.min(Math.pow(2, this.retries) * c, d);
                this.reconnecting = !0, clearTimeout(this.reconnectTimer), this.reconnectTimer = setTimeout(() => {
                    this.retries++, this._openSocket()
                }, e), this.reconnectTimer.unref && this.reconnectTimer.unref(), r("reconnecting socket in %s ms", e)
            }
            _send(e) {
                if (this.destroyed) return;
                this.expectingResponse = !0;
                const t = JSON.stringify(e);
                r("send %s", t), this.socket.send(t)
            }
            _generateOffers(e, t) {
                const n = this,
                    i = [];
                r("generating %s offers", e);
                for (let t = 0; t < e; ++t) o();

                function o() {
                    const e = s(20).toString("hex");
                    r("creating peer (from _generateOffers)");
                    const t = n.peers[e] = n._createPeer({
                        initiator: !0
                    });
                    t.once("signal", t => {
                        i.push({
                            offer: t,
                            offer_id: a.hexToBinary(e)
                        }), u()
                    }), t.trackerTimeout = setTimeout(() => {
                        r("tracker timeout: destroying peer"), t.trackerTimeout = null, delete n.peers[e], t.destroy()
                    }, f), t.trackerTimeout.unref && t.trackerTimeout.unref()
                }

                function u() {
                    i.length === e && (r("generated %s offers", e), t(i))
                }
                u()
            }
            _createPeer(e) {
                const t = this;
                e = Object.assign({
                    trickle: !1,
                    config: t.client._rtcConfig,
                    wrtc: t.client._wrtc
                }, e);
                const n = new i(e);
                return n.once("error", r), n.once("connect", function e() {
                    n.removeListener("error", r), n.removeListener("connect", e)
                }), n;

                function r(e) {
                    t.client.emit("warning", new Error(`Connection error: ${e.message}`)), n.destroy()
                }
            }
        }

        function g() {}
        p.prototype.DEFAULT_ANNOUNCE_INTERVAL = 3e4, p._socketPool = l, t.exports = p
    }, {
        "../common": 14,
        "./tracker": 12,
        debug: "debug",
        randombytes: 24,
        "simple-peer": 44,
        "simple-websocket": 45
    }],
    14: [function(e, t, n) {
        (function(t) {
            n.DEFAULT_ANNOUNCE_PEERS = 50, n.MAX_ANNOUNCE_PEERS = 82, n.binaryToHex = function(e) {
                return "string" != typeof e && (e = String(e)), t.from(e, "binary").toString("hex")
            }, n.hexToBinary = function(e) {
                return "string" != typeof e && (e = String(e)), t.from(e, "hex").toString("binary")
            };
            var r = e("./common-node");
            Object.assign(n, r)
        }).call(this, e("buffer").Buffer)
    }, {
        "./common-node": 15,
        buffer: 16
    }],
    15: [function(e, t, n) {}, {}],
    16: [function(e, t, n) {
        (function(t) {
            "use strict";
            var r = e("base64-js"),
                i = e("ieee754"),
                s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            n.Buffer = t, n.SlowBuffer = function(e) {
                return +e != e && (e = 0), t.alloc(+e)
            }, n.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;

            function a(e) {
                if (e > o) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                var n = new Uint8Array(e);
                return Object.setPrototypeOf(n, t.prototype), n
            }

            function t(e, t, n) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return c(e)
                }
                return u(e, t, n)
            }

            function u(e, n, r) {
                if ("string" == typeof e) return function(e, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"), !t.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    var r = 0 | f(e, n),
                        i = a(r),
                        s = i.write(e, n);
                    return s !== r && (i = i.slice(0, s)), i
                }(e, n);
                if (ArrayBuffer.isView(e)) return d(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (q(e, ArrayBuffer) || e && q(e.buffer, ArrayBuffer)) return function(e, n, r) {
                    if (n < 0 || e.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < n + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    var i;
                    return i = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), Object.setPrototypeOf(i, t.prototype), i
                }(e, n, r);
                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var i = e.valueOf && e.valueOf();
                if (null != i && i !== e) return t.from(i, n, r);
                var s = function(e) {
                    if (t.isBuffer(e)) {
                        var n = 0 | h(e.length),
                            r = a(n);
                        return 0 === r.length ? r : (e.copy(r, 0, 0, n), r)
                    }
                    return void 0 !== e.length ? "number" != typeof e.length || F(e.length) ? a(0) : d(e) : "Buffer" === e.type && Array.isArray(e.data) ? d(e.data) : void 0
                }(e);
                if (s) return s;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return t.from(e[Symbol.toPrimitive]("string"), n, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function l(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function c(e) {
                return l(e), a(e < 0 ? 0 : 0 | h(e))
            }

            function d(e) {
                for (var t = e.length < 0 ? 0 : 0 | h(e.length), n = a(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
                return n
            }

            function h(e) {
                if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
                return 0 | e
            }

            function f(e, n) {
                if (t.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || q(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                var r = e.length,
                    i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === r) return 0;
                for (var s = !1;;) switch (n) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return U(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return B(e).length;
                    default:
                        if (s) return i ? -1 : U(e).length;
                        n = ("" + n).toLowerCase(), s = !0
                }
            }

            function p(e, t, n) {
                var r = e[t];
                e[t] = e[n], e[n] = r
            }

            function g(e, n, r, i, s) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), F(r = +r) && (r = s ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (s) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!s) return -1;
                    r = 0
                }
                if ("string" == typeof n && (n = t.from(n, i)), t.isBuffer(n)) return 0 === n.length ? -1 : m(e, n, r, i, s);
                if ("number" == typeof n) return n &= 255, "function" == typeof Uint8Array.prototype.indexOf ? s ? Uint8Array.prototype.indexOf.call(e, n, r) : Uint8Array.prototype.lastIndexOf.call(e, n, r) : m(e, [n], r, i, s);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(e, t, n, r, i) {
                var s, o = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    o = 2, a /= 2, u /= 2, n /= 2
                }

                function l(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                if (i) {
                    var c = -1;
                    for (s = n; s < a; s++)
                        if (l(e, s) === l(t, -1 === c ? 0 : s - c)) {
                            if (-1 === c && (c = s), s - c + 1 === u) return c * o
                        } else -1 !== c && (s -= s - c), c = -1
                } else
                    for (n + u > a && (n = a - u), s = n; s >= 0; s--) {
                        for (var d = !0, h = 0; h < u; h++)
                            if (l(e, s + h) !== l(t, h)) {
                                d = !1;
                                break
                            } if (d) return s
                    }
                return -1
            }

            function y(e, t, n, r) {
                n = Number(n) || 0;
                var i = e.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var s = t.length;
                r > s / 2 && (r = s / 2);
                for (var o = 0; o < r; ++o) {
                    var a = parseInt(t.substr(2 * o, 2), 16);
                    if (F(a)) return o;
                    e[n + o] = a
                }
                return o
            }

            function b(e, t, n, r) {
                return j(U(t, e.length - n), e, n, r)
            }

            function w(e, t, n, r) {
                return j(function(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, r)
            }

            function _(e, t, n, r) {
                return w(e, t, n, r)
            }

            function v(e, t, n, r) {
                return j(B(t), e, n, r)
            }

            function S(e, t, n, r) {
                return j(function(e, t) {
                    for (var n, r, i, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = (n = e.charCodeAt(o)) >> 8, i = n % 256, s.push(i), s.push(r);
                    return s
                }(t, e.length - n), e, n, r)
            }

            function E(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
            }

            function T(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; i < n;) {
                    var s, o, a, u, l = e[i],
                        c = null,
                        d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                    if (i + d <= n) switch (d) {
                        case 1:
                            l < 128 && (c = l);
                            break;
                        case 2:
                            128 == (192 & (s = e[i + 1])) && (u = (31 & l) << 6 | 63 & s) > 127 && (c = u);
                            break;
                        case 3:
                            s = e[i + 1], o = e[i + 2], 128 == (192 & s) && 128 == (192 & o) && (u = (15 & l) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (u < 55296 || u > 57343) && (c = u);
                            break;
                        case 4:
                            s = e[i + 1], o = e[i + 2], a = e[i + 3], 128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && (u = (15 & l) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && u < 1114112 && (c = u)
                    }
                    null === c ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), i += d
                }
                return function(e) {
                    var t = e.length;
                    if (t <= R) return String.fromCharCode.apply(String, e);
                    for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += R));
                    return n
                }(r)
            }
            n.kMaxLength = o, t.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var e = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), t.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(t.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (t.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(t.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (t.isBuffer(this)) return this.byteOffset
                }
            }), "undefined" != typeof Symbol && null != Symbol.species && t[Symbol.species] === t && Object.defineProperty(t, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            }), t.poolSize = 8192, t.from = function(e, t, n) {
                return u(e, t, n)
            }, Object.setPrototypeOf(t.prototype, Uint8Array.prototype), Object.setPrototypeOf(t, Uint8Array), t.alloc = function(e, t, n) {
                return function(e, t, n) {
                    return l(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof n ? a(e).fill(t, n) : a(e).fill(t) : a(e)
                }(e, t, n)
            }, t.allocUnsafe = function(e) {
                return c(e)
            }, t.allocUnsafeSlow = function(e) {
                return c(e)
            }, t.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== t.prototype
            }, t.compare = function(e, n) {
                if (q(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)), q(n, Uint8Array) && (n = t.from(n, n.offset, n.byteLength)), !t.isBuffer(e) || !t.isBuffer(n)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === n) return 0;
                for (var r = e.length, i = n.length, s = 0, o = Math.min(r, i); s < o; ++s)
                    if (e[s] !== n[s]) {
                        r = e[s], i = n[s];
                        break
                    } return r < i ? -1 : i < r ? 1 : 0
            }, t.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, t.concat = function(e, n) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return t.alloc(0);
                var r;
                if (void 0 === n)
                    for (n = 0, r = 0; r < e.length; ++r) n += e[r].length;
                var i = t.allocUnsafe(n),
                    s = 0;
                for (r = 0; r < e.length; ++r) {
                    var o = e[r];
                    if (q(o, Uint8Array) && (o = t.from(o)), !t.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(i, s), s += o.length
                }
                return i
            }, t.byteLength = f, t.prototype._isBuffer = !0, t.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                return this
            }, t.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                return this
            }, t.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                return this
            }, t.prototype.toString = function() {
                var e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : function(e, t, n) {
                    var r = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return I(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return T(this, t, n);
                        case "ascii":
                            return C(this, t, n);
                        case "latin1":
                        case "binary":
                            return A(this, t, n);
                        case "base64":
                            return E(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return M(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }.apply(this, arguments)
            }, t.prototype.toLocaleString = t.prototype.toString, t.prototype.equals = function(e) {
                if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === t.compare(this, e)
            }, t.prototype.inspect = function() {
                var e = "",
                    t = n.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
            }, s && (t.prototype[s] = t.prototype.inspect), t.prototype.compare = function(e, n, r, i, s) {
                if (q(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)), !t.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === n && (n = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === s && (s = this.length), n < 0 || r > e.length || i < 0 || s > this.length) throw new RangeError("out of range index");
                if (i >= s && n >= r) return 0;
                if (i >= s) return -1;
                if (n >= r) return 1;
                if (this === e) return 0;
                for (var o = (s >>>= 0) - (i >>>= 0), a = (r >>>= 0) - (n >>>= 0), u = Math.min(o, a), l = this.slice(i, s), c = e.slice(n, r), d = 0; d < u; ++d)
                    if (l[d] !== c[d]) {
                        o = l[d], a = c[d];
                        break
                    } return o < a ? -1 : a < o ? 1 : 0
            }, t.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, t.prototype.indexOf = function(e, t, n) {
                return g(this, e, t, n, !0)
            }, t.prototype.lastIndexOf = function(e, t, n) {
                return g(this, e, t, n, !1)
            }, t.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var i = this.length - t;
                if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var s = !1;;) switch (r) {
                    case "hex":
                        return y(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return b(this, e, t, n);
                    case "ascii":
                        return w(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return _(this, e, t, n);
                    case "base64":
                        return v(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, e, t, n);
                    default:
                        if (s) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), s = !0
                }
            }, t.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var R = 4096;

            function C(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                return r
            }

            function A(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                return r
            }

            function I(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", s = t; s < n; ++s) i += N(e[s]);
                return i
            }

            function M(e, t, n) {
                for (var r = e.slice(t, n), i = "", s = 0; s < r.length; s += 2) i += String.fromCharCode(r[s] + 256 * r[s + 1]);
                return i
            }

            function k(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function P(e, n, r, i, s, o) {
                if (!t.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (n > s || n < o) throw new RangeError('"value" argument is out of bounds');
                if (r + i > e.length) throw new RangeError("Index out of range")
            }

            function L(e, t, n, r, i, s) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function x(e, t, n, r, s) {
                return t = +t, n >>>= 0, s || L(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
            }

            function O(e, t, n, r, s) {
                return t = +t, n >>>= 0, s || L(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
            }
            t.prototype.slice = function(e, n) {
                var r = this.length;
                (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), n < e && (n = e);
                var i = this.subarray(e, n);
                return Object.setPrototypeOf(i, t.prototype), i
            }, t.prototype.readUIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || k(e, t, this.length);
                for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256);) r += this[e + s] * i;
                return r
            }, t.prototype.readUIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || k(e, t, this.length);
                for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                return r
            }, t.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || k(e, 1, this.length), this[e]
            }, t.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || k(e, 2, this.length), this[e] | this[e + 1] << 8
            }, t.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, t.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, t.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, t.prototype.readIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || k(e, t, this.length);
                for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256);) r += this[e + s] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
            }, t.prototype.readIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || k(e, t, this.length);
                for (var r = t, i = 1, s = this[e + --r]; r > 0 && (i *= 256);) s += this[e + --r] * i;
                return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s
            }, t.prototype.readInt8 = function(e, t) {
                return e >>>= 0, t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, t.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || k(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, t.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || k(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, t.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, t.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, t.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || k(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, t.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || k(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, t.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || k(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, t.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || k(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, t.prototype.writeUIntLE = function(e, t, n, r) {
                e = +e, t >>>= 0, n >>>= 0, r || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var i = 1,
                    s = 0;
                for (this[t] = 255 & e; ++s < n && (i *= 256);) this[t + s] = e / i & 255;
                return t + n
            }, t.prototype.writeUIntBE = function(e, t, n, r) {
                e = +e, t >>>= 0, n >>>= 0, r || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var i = n - 1,
                    s = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = e / s & 255;
                return t + n
            }, t.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, t.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, t.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, t.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, t.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, t.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    P(this, e, t, n, i - 1, -i)
                }
                var s = 0,
                    o = 1,
                    a = 0;
                for (this[t] = 255 & e; ++s < n && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
                return t + n
            }, t.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    P(this, e, t, n, i - 1, -i)
                }
                var s = n - 1,
                    o = 1,
                    a = 0;
                for (this[t + s] = 255 & e; --s >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
                return t + n
            }, t.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, t.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, t.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, t.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, t.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, t.prototype.writeFloatLE = function(e, t, n) {
                return x(this, e, t, !0, n)
            }, t.prototype.writeFloatBE = function(e, t, n) {
                return x(this, e, t, !1, n)
            }, t.prototype.writeDoubleLE = function(e, t, n) {
                return O(this, e, t, !0, n)
            }, t.prototype.writeDoubleBE = function(e, t, n) {
                return O(this, e, t, !1, n)
            }, t.prototype.copy = function(e, n, r, i) {
                if (!t.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), i || 0 === i || (i = this.length), n >= e.length && (n = e.length), n || (n = 0), i > 0 && i < r && (i = r), i === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (n < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (i < 0) throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), e.length - n < i - r && (i = e.length - n + r);
                var s = i - r;
                if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, r, i);
                else if (this === e && r < n && n < i)
                    for (var o = s - 1; o >= 0; --o) e[o + n] = this[o + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, i), n);
                return s
            }, t.prototype.fill = function(e, n, r, i) {
                if ("string" == typeof e) {
                    if ("string" == typeof n ? (i = n, n = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !t.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                    if (1 === e.length) {
                        var s = e.charCodeAt(0);
                        ("utf8" === i && s < 128 || "latin1" === i) && (e = s)
                    }
                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                if (n < 0 || this.length < n || this.length < r) throw new RangeError("Out of range index");
                if (r <= n) return this;
                var o;
                if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (o = n; o < r; ++o) this[o] = e;
                else {
                    var a = t.isBuffer(e) ? e : t.from(e, i),
                        u = a.length;
                    if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (o = 0; o < r - n; ++o) this[o + n] = a[o % u]
                }
                return this
            };
            var D = /[^+\/0-9A-Za-z-_]/g;

            function N(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function U(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, i = null, s = [], o = 0; o < r; ++o) {
                    if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === r) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && s.push(239, 191, 189), i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else i && (t -= 3) > -1 && s.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        s.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        s.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return s
            }

            function B(e) {
                return r.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(D, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function j(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                return i
            }

            function q(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function F(e) {
                return e != e
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "base64-js": 10,
        buffer: 16,
        ieee754: 19
    }],
    17: [function(e, t, n) {
        t.exports = function(t) {
            function n(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return r.colors[Math.abs(t) % r.colors.length]
            }

            function r(e) {
                let t;

                function o(...e) {
                    if (!o.enabled) return;
                    const n = o,
                        i = Number(new Date),
                        s = i - (t || i);
                    n.diff = s, n.prev = t, n.curr = i, t = i, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let a = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, i) => {
                        if ("%%" === t) return t;
                        a++;
                        const s = r.formatters[i];
                        if ("function" == typeof s) {
                            const r = e[a];
                            t = s.call(n, r), e.splice(a, 1), a--
                        }
                        return t
                    }), r.formatArgs.call(n, e), (n.log || r.log).apply(n, e)
                }
                return o.namespace = e, o.enabled = r.enabled(e), o.useColors = r.useColors(), o.color = n(e), o.destroy = i, o.extend = s, "function" == typeof r.init && r.init(o), r.instances.push(o), o
            }

            function i() {
                const e = r.instances.indexOf(this);
                return -1 !== e && (r.instances.splice(e, 1), !0)
            }

            function s(e, t) {
                const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
                return n.log = this.log, n
            }

            function o(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return r.debug = r, r.default = r, r.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, r.disable = function() {
                const e = [...r.names.map(o), ...r.skips.map(o).map(e => "-" + e)].join(",");
                return r.enable(""), e
            }, r.enable = function(e) {
                let t;
                r.save(e), r.names = [], r.skips = [];
                const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    i = n.length;
                for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < r.instances.length; t++) {
                    const e = r.instances[t];
                    e.enabled = r.enabled(e.namespace)
                }
            }, r.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                let t, n;
                for (t = 0, n = r.skips.length; t < n; t++)
                    if (r.skips[t].test(e)) return !1;
                for (t = 0, n = r.names.length; t < n; t++)
                    if (r.names[t].test(e)) return !0;
                return !1
            }, r.humanize = e("ms"), Object.keys(t).forEach(e => {
                r[e] = t[e]
            }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = n, r.enable(r.load()), r
        }
    }, {
        ms: 21
    }],
    18: [function(e, t, n) {
        t.exports = function() {
            if ("undefined" == typeof window) return null;
            var e = {
                RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
                RTCSessionDescription: window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
                RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate
            };
            return e.RTCPeerConnection ? e : null
        }
    }, {}],
    19: [function(e, t, n) {
        n.read = function(e, t, n, r, i) {
            var s, o, a = 8 * i - r - 1,
                u = (1 << a) - 1,
                l = u >> 1,
                c = -7,
                d = n ? i - 1 : 0,
                h = n ? -1 : 1,
                f = e[t + d];
            for (d += h, s = f & (1 << -c) - 1, f >>= -c, c += a; c > 0; s = 256 * s + e[t + d], d += h, c -= 8);
            for (o = s & (1 << -c) - 1, s >>= -c, c += r; c > 0; o = 256 * o + e[t + d], d += h, c -= 8);
            if (0 === s) s = 1 - l;
            else {
                if (s === u) return o ? NaN : 1 / 0 * (f ? -1 : 1);
                o += Math.pow(2, r), s -= l
            }
            return (f ? -1 : 1) * o * Math.pow(2, s - r)
        }, n.write = function(e, t, n, r, i, s) {
            var o, a, u, l = 8 * s - i - 1,
                c = (1 << l) - 1,
                d = c >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                f = r ? 0 : s - 1,
                p = r ? 1 : -1,
                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + d >= 1 ? h / u : h * Math.pow(2, 1 - d)) * u >= 2 && (o++, u /= 2), o + d >= c ? (a = 0, o = c) : o + d >= 1 ? (a = (t * u - 1) * Math.pow(2, i), o += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + f] = 255 & a, f += p, a /= 256, i -= 8);
            for (o = o << i | a, l += i; l > 0; e[n + f] = 255 & o, f += p, o /= 256, l -= 8);
            e[n + f - p] |= 128 * g
        }
    }, {}],
    20: [function(e, t, n) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : t.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }
    }, {}],
    21: [function(e, t, n) {
        var r = 1e3,
            i = 6e4,
            s = 36e5,
            o = 24 * s;

        function a(e, t, n, r) {
            var i = t >= 1.5 * n;
            return Math.round(e / n) + " " + r + (i ? "s" : "")
        }
        t.exports = function(e, t) {
            t = t || {};
            var n = typeof e;
            if ("string" === n && e.length > 0) return function(e) {
                if (!((e = String(e)).length > 100)) {
                    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var n = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return 315576e5 * n;
                            case "weeks":
                            case "week":
                            case "w":
                                return 6048e5 * n;
                            case "days":
                            case "day":
                            case "d":
                                return n * o;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * s;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * i;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * r;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n;
                            default:
                                return
                        }
                    }
                }
            }(e);
            if ("number" === n && isFinite(e)) return t.long ? function(e) {
                var t = Math.abs(e);
                return t >= o ? a(e, t, o, "day") : t >= s ? a(e, t, s, "hour") : t >= i ? a(e, t, i, "minute") : t >= r ? a(e, t, r, "second") : e + " ms"
            }(e) : function(e) {
                var t = Math.abs(e);
                return t >= o ? Math.round(e / o) + "d" : t >= s ? Math.round(e / s) + "h" : t >= i ? Math.round(e / i) + "m" : t >= r ? Math.round(e / r) + "s" : e + "ms"
            }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }, {}],
    22: [function(e, t, n) {
        var r = e("wrappy");

        function i(e) {
            var t = function() {
                return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
            };
            return t.called = !1, t
        }

        function s(e) {
            var t = function() {
                    if (t.called) throw new Error(t.onceError);
                    return t.called = !0, t.value = e.apply(this, arguments)
                },
                n = e.name || "Function wrapped with `once`";
            return t.onceError = n + " shouldn't be called more than once", t.called = !1, t
        }
        t.exports = r(i), t.exports.strict = r(s), i.proto = i(function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return i(this)
                },
                configurable: !0
            }), Object.defineProperty(Function.prototype, "onceStrict", {
                value: function() {
                    return s(this)
                },
                configurable: !0
            })
        })
    }, {
        wrappy: 49
    }],
    23: [function(e, t, n) {
        var r, i, s = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function u(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                r = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                i = a
            }
        }();
        var l, c = [],
            d = !1,
            h = -1;

        function f() {
            d && l && (d = !1, l.length ? c = l.concat(c) : h = -1, c.length && p())
        }

        function p() {
            if (!d) {
                var e = u(f);
                d = !0;
                for (var t = c.length; t;) {
                    for (l = c, c = []; ++h < t;) l && l[h].run();
                    h = -1, t = c.length
                }
                l = null, d = !1,
                    function(e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                        try {
                            i(e)
                        } catch (t) {
                            try {
                                return i.call(null, e)
                            } catch (t) {
                                return i.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function g(e, t) {
            this.fun = e, this.array = t
        }

        function m() {}
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new g(e, t)), 1 !== c.length || d || u(p)
        }, g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.prependListener = m, s.prependOnceListener = m, s.listeners = function(e) {
            return []
        }, s.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, s.cwd = function() {
            return "/"
        }, s.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, s.umask = function() {
            return 0
        }
    }, {}],
    24: [function(e, t, n) {
        (function(n, r) {
            "use strict";
            var i = 65536,
                s = e("safe-buffer").Buffer,
                o = r.crypto || r.msCrypto;
            o && o.getRandomValues ? t.exports = function(e, t) {
                if (e > 4294967295) throw new RangeError("requested too many random bytes");
                var r = s.allocUnsafe(e);
                if (e > 0)
                    if (e > i)
                        for (var a = 0; a < e; a += i) o.getRandomValues(r.slice(a, a + i));
                    else o.getRandomValues(r);
                return "function" == typeof t ? n.nextTick(function() {
                    t(null, r)
                }) : r
            } : t.exports = function() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 23,
        "safe-buffer": 41
    }],
    25: [function(e, t, n) {
        "use strict";
        var r = {};

        function i(e, t, n) {
            n || (n = Error);
            var i = function(e) {
                var n, r;

                function i(n, r, i) {
                    return e.call(this, function(e, n, r) {
                        return "string" == typeof t ? t : t(e, n, i)
                    }(n, r)) || this
                }
                return r = e, (n = i).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r, i
            }(n);
            i.prototype.name = n.name, i.prototype.code = e, r[e] = i
        }

        function s(e, t) {
            if (Array.isArray(e)) {
                var n = e.length;
                return e = e.map(function(e) {
                    return String(e)
                }), n > 2 ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : 2 === n ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            return "of ".concat(t, " ").concat(String(e))
        }
        i("ERR_INVALID_OPT_VALUE", function(e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"'
        }, TypeError), i("ERR_INVALID_ARG_TYPE", function(e, t, n) {
            var r, i, o;
            if ("string" == typeof t && (i = "not ", t.substr(0, i.length) === i) ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be", function(e, t, n) {
                    return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t
                }(e, " argument")) o = "The ".concat(e, " ").concat(r, " ").concat(s(t, "type"));
            else {
                var a = function(e, t, n) {
                    return "number" != typeof n && (n = 0), !(n + ".".length > e.length) && -1 !== e.indexOf(".", n)
                }(e) ? "property" : "argument";
                o = 'The "'.concat(e, '" ').concat(a, " ").concat(r, " ").concat(s(t, "type"))
            }
            return o + ". Received type ".concat(typeof n)
        }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
            return "The " + e + " method is not implemented"
        }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function(e) {
            return "Cannot call " + e + " after a stream was destroyed"
        }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", function(e) {
            return "Unknown encoding: " + e
        }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = r
    }, {}],
    26: [function(e, t, n) {
        (function(e) {
            "use strict";
            var n = new Set;
            t.exports.emitExperimentalWarning = e.emitWarning ? function(t) {
                if (!n.has(t)) {
                    var r = t + " is an experimental feature. This feature could change at any time";
                    n.add(t), e.emitWarning(r, "ExperimentalWarning")
                }
            } : function() {}
        }).call(this, e("_process"))
    }, {
        _process: 23
    }],
    27: [function(e, t, n) {
        (function(n) {
            "use strict";
            var r = Object.keys || function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t
            };
            t.exports = l;
            var i = e("./_stream_readable"),
                s = e("./_stream_writable");
            e("inherits")(l, i);
            for (var o = r(s.prototype), a = 0; a < o.length; a++) {
                var u = o[a];
                l.prototype[u] || (l.prototype[u] = s.prototype[u])
            }

            function l(e) {
                if (!(this instanceof l)) return new l(e);
                i.call(this, e), s.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", c)))
            }

            function c() {
                this._writableState.ended || n.nextTick(d, this)
            }

            function d(e) {
                e.end()
            }
            Object.defineProperty(l.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(l.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(l.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(l.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            })
        }).call(this, e("_process"))
    }, {
        "./_stream_readable": 29,
        "./_stream_writable": 31,
        _process: 23,
        inherits: 20
    }],
    28: [function(e, t, n) {
        "use strict";
        t.exports = i;
        var r = e("./_stream_transform");

        function i(e) {
            if (!(this instanceof i)) return new i(e);
            r.call(this, e)
        }
        e("inherits")(i, r), i.prototype._transform = function(e, t, n) {
            n(null, e)
        }
    }, {
        "./_stream_transform": 30,
        inherits: 20
    }],
    29: [function(e, t, n) {
        (function(n, r) {
            "use strict";
            var i;
            t.exports = T, T.ReadableState = E, e("events").EventEmitter;
            var s, o = function(e, t) {
                    return e.listeners(t).length
                },
                a = e("./internal/streams/stream"),
                u = e("buffer").Buffer,
                l = r.Uint8Array || function() {},
                c = e("util");
            s = c && c.debuglog ? c.debuglog("stream") : function() {};
            var d, h, f = e("./internal/streams/buffer_list"),
                p = e("./internal/streams/destroy"),
                g = e("./internal/streams/state").getHighWaterMark,
                m = e("../errors").codes,
                y = m.ERR_INVALID_ARG_TYPE,
                b = m.ERR_STREAM_PUSH_AFTER_EOF,
                w = m.ERR_METHOD_NOT_IMPLEMENTED,
                _ = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
                v = e("../experimentalWarning").emitExperimentalWarning;
            e("inherits")(T, a);
            var S = ["error", "close", "destroy", "pause", "resume"];

            function E(t, n, r) {
                i = i || e("./_stream_duplex"), t = t || {}, "boolean" != typeof r && (r = n instanceof i), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = g(this, t, "readableHighWaterMark", r), this.buffer = new f, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (d || (d = e("string_decoder/").StringDecoder), this.decoder = new d(t.encoding), this.encoding = t.encoding)
            }

            function T(t) {
                if (i = i || e("./_stream_duplex"), !(this instanceof T)) return new T(t);
                var n = this instanceof i;
                this._readableState = new E(t, this, n), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), a.call(this)
            }

            function R(e, t, n, r, i) {
                s("readableAddChunk", t);
                var o, a = e._readableState;
                if (null === t) a.reading = !1,
                    function(e, t) {
                        if (!t.ended) {
                            if (t.decoder) {
                                var n = t.decoder.end();
                                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                            }
                            t.ended = !0, t.sync ? M(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, k(e)))
                        }
                    }(e, a);
                else if (i || (o = function(e, t) {
                        var n, r;
                        return r = t, u.isBuffer(r) || r instanceof l || "string" == typeof t || void 0 === t || e.objectMode || (n = new y("chunk", ["string", "Buffer", "Uint8Array"], t)), n
                    }(a, t)), o) e.emit("error", o);
                else if (a.objectMode || t && t.length > 0)
                    if ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === u.prototype || (t = function(e) {
                            return u.from(e)
                        }(t)), r) a.endEmitted ? e.emit("error", new _) : C(e, a, t, !0);
                    else if (a.ended) e.emit("error", new b);
                else {
                    if (a.destroyed) return !1;
                    a.reading = !1, a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? C(e, a, t, !1) : P(e, a)) : C(e, a, t, !1)
                } else r || (a.reading = !1, P(e, a));
                return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
            }

            function C(e, t, n, r) {
                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && M(e)), P(e, t)
            }
            Object.defineProperty(T.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), T.prototype.destroy = p.destroy, T.prototype._undestroy = p.undestroy, T.prototype._destroy = function(e, t) {
                t(e)
            }, T.prototype.push = function(e, t) {
                var n, r = this._readableState;
                return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = u.from(e, t), t = ""), n = !0), R(this, e, t, !1, n)
            }, T.prototype.unshift = function(e) {
                return R(this, e, null, !0, !1)
            }, T.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, T.prototype.setEncoding = function(t) {
                return d || (d = e("string_decoder/").StringDecoder), this._readableState.decoder = new d(t), this._readableState.encoding = this._readableState.decoder.encoding, this
            };
            var A = 8388608;

            function I(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                    return e >= A ? e = A : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function M(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (s("emitReadable", t.flowing), t.emittedReadable = !0, n.nextTick(k, e))
            }

            function k(e) {
                var t = e._readableState;
                s("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || e.emit("readable"), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, N(e)
            }

            function P(e, t) {
                t.readingMore || (t.readingMore = !0, n.nextTick(L, e, t))
            }

            function L(e, t) {
                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                    var n = t.length;
                    if (s("maybeReadMore read 0"), e.read(0), n === t.length) break
                }
                t.readingMore = !1
            }

            function x(e) {
                var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
            }

            function O(e) {
                s("readable nexttick read 0"), e.read(0)
            }

            function D(e, t) {
                s("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), N(e), t.flowing && !t.reading && e.read(0)
            }

            function N(e) {
                var t = e._readableState;
                for (s("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function U(e, t) {
                return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n);
                var n
            }

            function B(e) {
                var t = e._readableState;
                s("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick(j, t, e))
            }

            function j(e, t) {
                s("endReadableNT", e.endEmitted, e.length), e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function q(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            }
            T.prototype.read = function(e) {
                s("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    n = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return s("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? B(this) : M(this), null;
                if (0 === (e = I(e, t)) && t.ended) return 0 === t.length && B(this), null;
                var r, i = t.needReadable;
                return s("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && s("length less than watermark", i = !0), t.ended || t.reading ? s("reading or ended", i = !1) : i && (s("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = I(n, t))), null === (r = e > 0 ? U(e, t) : null) ? (t.needReadable = !0, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && B(this)), null !== r && this.emit("data", r), r
            }, T.prototype._read = function(e) {
                this.emit("error", new w("_read()"))
            }, T.prototype.pipe = function(e, t) {
                var r = this,
                    i = this._readableState;
                switch (i.pipesCount) {
                    case 0:
                        i.pipes = e;
                        break;
                    case 1:
                        i.pipes = [i.pipes, e];
                        break;
                    default:
                        i.pipes.push(e)
                }
                i.pipesCount += 1, s("pipe count=%d opts=%j", i.pipesCount, t);
                var a = t && !1 === t.end || e === n.stdout || e === n.stderr ? g : u;

                function u() {
                    s("onend"), e.end()
                }
                i.endEmitted ? n.nextTick(a) : r.once("end", a), e.on("unpipe", function t(n, o) {
                    s("onunpipe"), n === r && o && !1 === o.hasUnpiped && (o.hasUnpiped = !0, s("cleanup"), e.removeListener("close", f), e.removeListener("finish", p), e.removeListener("drain", l), e.removeListener("error", h), e.removeListener("unpipe", t), r.removeListener("end", u), r.removeListener("end", g), r.removeListener("data", d), c = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || l())
                });
                var l = function(e) {
                    return function() {
                        var t = e._readableState;
                        s("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, N(e))
                    }
                }(r);
                e.on("drain", l);
                var c = !1;

                function d(t) {
                    s("ondata");
                    var n = e.write(t);
                    s("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== q(i.pipes, e)) && !c && (s("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
                }

                function h(t) {
                    s("onerror", t), g(), e.removeListener("error", h), 0 === o(e, "error") && e.emit("error", t)
                }

                function f() {
                    e.removeListener("finish", p), g()
                }

                function p() {
                    s("onfinish"), e.removeListener("close", f), g()
                }

                function g() {
                    s("unpipe"), r.unpipe(e)
                }
                return r.on("data", d),
                    function(e, t, n) {
                        if ("function" == typeof e.prependListener) return e.prependListener(t, n);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
                    }(e, "error", h), e.once("close", f), e.once("finish", p), e.emit("pipe", r), i.flowing || (s("pipe resume"), r.resume()), e
            }, T.prototype.unpipe = function(e) {
                var t = this._readableState,
                    n = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n), this);
                if (!e) {
                    var r = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var s = 0; s < i; s++) r[s].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var o = q(t.pipes, e);
                return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this)
            }, T.prototype.on = function(e, t) {
                var r = a.prototype.on.call(this, e, t),
                    i = this._readableState;
                return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, s("on readable", i.length, i.reading), i.length ? M(this) : i.reading || n.nextTick(O, this))), r
            }, T.prototype.addListener = T.prototype.on, T.prototype.removeListener = function(e, t) {
                var r = a.prototype.removeListener.call(this, e, t);
                return "readable" === e && n.nextTick(x, this), r
            }, T.prototype.removeAllListeners = function(e) {
                var t = a.prototype.removeAllListeners.apply(this, arguments);
                return "readable" !== e && void 0 !== e || n.nextTick(x, this), t
            }, T.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (s("resume"), e.flowing = !e.readableListening, function(e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0, n.nextTick(D, e, t))
                }(this, e)), e.paused = !1, this
            }, T.prototype.pause = function() {
                return s("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (s("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, T.prototype.wrap = function(e) {
                var t = this,
                    n = this._readableState,
                    r = !1;
                for (var i in e.on("end", function() {
                        if (s("wrapped end"), n.decoder && !n.ended) {
                            var e = n.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }), e.on("data", function(i) {
                        s("wrapped data"), n.decoder && (i = n.decoder.write(i)), (!n.objectMode || null != i) && (n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause()))
                    }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                for (var o = 0; o < S.length; o++) e.on(S[o], this.emit.bind(this, S[o]));
                return this._read = function(t) {
                    s("wrapped _read", t), r && (r = !1, e.resume())
                }, this
            }, "function" == typeof Symbol && (T.prototype[Symbol.asyncIterator] = function() {
                return v("Readable[Symbol.asyncIterator]"), void 0 === h && (h = e("./internal/streams/async_iterator")), h(this)
            }), Object.defineProperty(T.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(T.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(T.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(e) {
                    this._readableState && (this._readableState.flowing = e)
                }
            }), T._fromList = U, Object.defineProperty(T.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            })
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../errors": 25,
        "../experimentalWarning": 26,
        "./_stream_duplex": 27,
        "./internal/streams/async_iterator": 32,
        "./internal/streams/buffer_list": 33,
        "./internal/streams/destroy": 34,
        "./internal/streams/state": 37,
        "./internal/streams/stream": 38,
        _process: 23,
        buffer: 16,
        events: "events",
        inherits: 20,
        "string_decoder/": 46,
        util: 15
    }],
    30: [function(e, t, n) {
        "use strict";
        t.exports = l;
        var r = e("../errors").codes,
            i = r.ERR_METHOD_NOT_IMPLEMENTED,
            s = r.ERR_MULTIPLE_CALLBACK,
            o = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            a = r.ERR_TRANSFORM_WITH_LENGTH_0,
            u = e("./_stream_duplex");

        function l(e) {
            if (!(this instanceof l)) return new l(e);
            u.call(this, e), this._transformState = {
                afterTransform: function(e, t) {
                    var n = this._transformState;
                    n.transforming = !1;
                    var r = n.writecb;
                    if (null === r) return this.emit("error", new s);
                    n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
                    var i = this._readableState;
                    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", c)
        }

        function c() {
            var e = this;
            "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush(function(t, n) {
                d(e, t, n)
            })
        }

        function d(e, t, n) {
            if (t) return e.emit("error", t);
            if (null != n && e.push(n), e._writableState.length) throw new a;
            if (e._transformState.transforming) throw new o;
            return e.push(null)
        }
        e("inherits")(l, u), l.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1, u.prototype.push.call(this, e, t)
        }, l.prototype._transform = function(e, t, n) {
            n(new i("_transform()"))
        }, l.prototype._write = function(e, t, n) {
            var r = this._transformState;
            if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
                var i = this._readableState;
                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, l.prototype._read = function(e) {
            var t = this._transformState;
            null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        }, l.prototype._destroy = function(e, t) {
            u.prototype._destroy.call(this, e, function(e) {
                t(e)
            })
        }
    }, {
        "../errors": 25,
        "./_stream_duplex": 27,
        inherits: 20
    }],
    31: [function(e, t, n) {
        (function(n, r) {
            "use strict";

            function i(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function(e, t, n) {
                        var r = e.entry;
                        for (e.entry = null; r;) {
                            var i = r.callback;
                            t.pendingcb--, i(void 0), r = r.next
                        }
                        t.corkedRequestsFree.next = e
                    }(t, e)
                }
            }
            var s;
            t.exports = T, T.WritableState = E;
            var o, a = {
                    deprecate: e("util-deprecate")
                },
                u = e("./internal/streams/stream"),
                l = e("buffer").Buffer,
                c = r.Uint8Array || function() {},
                d = e("./internal/streams/destroy"),
                h = e("./internal/streams/state").getHighWaterMark,
                f = e("../errors").codes,
                p = f.ERR_INVALID_ARG_TYPE,
                g = f.ERR_METHOD_NOT_IMPLEMENTED,
                m = f.ERR_MULTIPLE_CALLBACK,
                y = f.ERR_STREAM_CANNOT_PIPE,
                b = f.ERR_STREAM_DESTROYED,
                w = f.ERR_STREAM_NULL_VALUES,
                _ = f.ERR_STREAM_WRITE_AFTER_END,
                v = f.ERR_UNKNOWN_ENCODING;

            function S() {}

            function E(t, r, o) {
                s = s || e("./_stream_duplex"), t = t || {}, "boolean" != typeof o && (o = r instanceof s), this.objectMode = !!t.objectMode, o && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = h(this, t, "writableHighWaterMark", o), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var a = !1 === t.decodeStrings;
                this.decodeStrings = !a, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    ! function(e, t) {
                        var r = e._writableState,
                            i = r.sync,
                            s = r.writecb;
                        if ("function" != typeof s) throw new m;
                        if (function(e) {
                                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                            }(r), t) ! function(e, t, r, i, s) {
                            --t.pendingcb, r ? (n.nextTick(s, i), n.nextTick(k, e, t), e._writableState.errorEmitted = !0, e.emit("error", i)) : (s(i), e._writableState.errorEmitted = !0, e.emit("error", i), k(e, t))
                        }(e, r, i, t, s);
                        else {
                            var o = I(r) || e.destroyed;
                            o || r.corked || r.bufferProcessing || !r.bufferedRequest || A(e, r), i ? n.nextTick(C, e, r, o, s) : C(e, r, o, s)
                        }
                    }(r, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this)
            }

            function T(t) {
                var n = this instanceof(s = s || e("./_stream_duplex"));
                if (!n && !o.call(T, this)) return new T(t);
                this._writableState = new E(t, this, n), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), u.call(this)
            }

            function R(e, t, n, r, i, s, o) {
                t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new b("write")) : n ? e._writev(i, t.onwrite) : e._write(i, s, t.onwrite), t.sync = !1
            }

            function C(e, t, n, r) {
                n || function(e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                }(e, t), t.pendingcb--, r(), k(e, t)
            }

            function A(e, t) {
                t.bufferProcessing = !0;
                var n = t.bufferedRequest;
                if (e._writev && n && n.next) {
                    var r = t.bufferedRequestCount,
                        s = new Array(r),
                        o = t.corkedRequestsFree;
                    o.entry = n;
                    for (var a = 0, u = !0; n;) s[a] = n, n.isBuf || (u = !1), n = n.next, a += 1;
                    s.allBuffers = u, R(e, t, !0, t.length, s, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0
                } else {
                    for (; n;) {
                        var l = n.chunk,
                            c = n.encoding,
                            d = n.callback;
                        if (R(e, t, !1, t.objectMode ? 1 : l.length, l, c, d), n = n.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === n && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = n, t.bufferProcessing = !1
            }

            function I(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function M(e, t) {
                e._final(function(n) {
                    t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), k(e, t)
                })
            }

            function k(e, t) {
                var r = I(t);
                return r && (function(e, t) {
                    t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, n.nextTick(M, e, t)))
                }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), r
            }
            e("inherits")(T, u), E.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(E.prototype, "buffer", {
                            get: a.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (o = Function.prototype[Symbol.hasInstance], Object.defineProperty(T, Symbol.hasInstance, {
                    value: function(e) {
                        return !!o.call(this, e) || this === T && e && e._writableState instanceof E
                    }
                })) : o = function(e) {
                    return e instanceof this
                }, T.prototype.pipe = function() {
                    this.emit("error", new y)
                }, T.prototype.write = function(e, t, r) {
                    var i, s = this._writableState,
                        o = !1,
                        a = !s.objectMode && (i = e, l.isBuffer(i) || i instanceof c);
                    return a && !l.isBuffer(e) && (e = function(e) {
                        return l.from(e)
                    }(e)), "function" == typeof t && (r = t, t = null), a ? t = "buffer" : t || (t = s.defaultEncoding), "function" != typeof r && (r = S), s.ending ? function(e, t) {
                        var r = new _;
                        e.emit("error", r), n.nextTick(t, r)
                    }(this, r) : (a || function(e, t, r, i) {
                        var s;
                        return null === r ? s = new w : "string" == typeof r || t.objectMode || (s = new p("chunk", ["string", "Buffer"], r)), !s || (e.emit("error", s), n.nextTick(i, s), !1)
                    }(this, s, e, r)) && (s.pendingcb++, o = function(e, t, n, r, i, s) {
                        if (!n) {
                            var o = function(e, t, n) {
                                return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = l.from(t, n)), t
                            }(t, r, i);
                            r !== o && (n = !0, i = "buffer", r = o)
                        }
                        var a = t.objectMode ? 1 : r.length;
                        t.length += a;
                        var u = t.length < t.highWaterMark;
                        if (u || (t.needDrain = !0), t.writing || t.corked) {
                            var c = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: r,
                                encoding: i,
                                isBuf: n,
                                callback: s,
                                next: null
                            }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                        } else R(e, t, !1, a, r, i, s);
                        return u
                    }(this, s, a, e, t, r)), o
                }, T.prototype.cork = function() {
                    this._writableState.corked++
                }, T.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || A(this, e))
                }, T.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new v(e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(T.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(T.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), T.prototype._write = function(e, t, n) {
                    n(new g("_write()"))
                }, T.prototype._writev = null, T.prototype.end = function(e, t, r) {
                    var i = this._writableState;
                    return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function(e, t, r) {
                        t.ending = !0, k(e, t), r && (t.finished ? n.nextTick(r) : e.once("finish", r)), t.ended = !0, e.writable = !1
                    }(this, i, r), this
                }, Object.defineProperty(T.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(T.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), T.prototype.destroy = d.destroy, T.prototype._undestroy = d.undestroy, T.prototype._destroy = function(e, t) {
                    t(e)
                }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../errors": 25,
        "./_stream_duplex": 27,
        "./internal/streams/destroy": 34,
        "./internal/streams/state": 37,
        "./internal/streams/stream": 38,
        _process: 23,
        buffer: 16,
        inherits: 20,
        "util-deprecate": 48
    }],
    32: [function(e, t, n) {
        (function(n) {
            "use strict";
            var r;

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = e("./end-of-stream"),
                o = Symbol("lastResolve"),
                a = Symbol("lastReject"),
                u = Symbol("error"),
                l = Symbol("ended"),
                c = Symbol("lastPromise"),
                d = Symbol("handlePromise"),
                h = Symbol("stream");

            function f(e, t) {
                return {
                    value: e,
                    done: t
                }
            }

            function p(e) {
                var t = e[o];
                if (null !== t) {
                    var n = e[h].read();
                    null !== n && (e[c] = null, e[o] = null, e[a] = null, t(f(n, !1)))
                }
            }
            var g = Object.getPrototypeOf(function() {}),
                m = Object.setPrototypeOf((i(r = {
                    get stream() {
                        return this[h]
                    },
                    next: function() {
                        var e = this,
                            t = this[u];
                        if (null !== t) return Promise.reject(t);
                        if (this[l]) return Promise.resolve(f(void 0, !0));
                        if (this[h].destroyed) return new Promise(function(t, r) {
                            n.nextTick(function() {
                                e[u] ? r(e[u]) : t(f(void 0, !0))
                            })
                        });
                        var r, i = this[c];
                        if (i) r = new Promise(function(e, t) {
                            return function(n, r) {
                                e.then(function() {
                                    t[l] ? n(f(void 0, !0)) : t[d](n, r)
                                }, r)
                            }
                        }(i, this));
                        else {
                            var s = this[h].read();
                            if (null !== s) return Promise.resolve(f(s, !1));
                            r = new Promise(this[d])
                        }
                        return this[c] = r, r
                    }
                }, Symbol.asyncIterator, function() {
                    return this
                }), i(r, "return", function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        e[h].destroy(null, function(e) {
                            e ? n(e) : t(f(void 0, !0))
                        })
                    })
                }), r), g);
            t.exports = function(e) {
                var t, r = Object.create(m, (i(t = {}, h, {
                    value: e,
                    writable: !0
                }), i(t, o, {
                    value: null,
                    writable: !0
                }), i(t, a, {
                    value: null,
                    writable: !0
                }), i(t, u, {
                    value: null,
                    writable: !0
                }), i(t, l, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }), i(t, d, {
                    value: function(e, t) {
                        var n = r[h].read();
                        n ? (r[c] = null, r[o] = null, r[a] = null, e(f(n, !1))) : (r[o] = e, r[a] = t)
                    },
                    writable: !0
                }), t));
                return r[c] = null, s(e, function(e) {
                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                        var t = r[a];
                        return null !== t && (r[c] = null, r[o] = null, r[a] = null, t(e)), void(r[u] = e)
                    }
                    var n = r[o];
                    null !== n && (r[c] = null, r[o] = null, r[a] = null, n(f(void 0, !0))), r[l] = !0
                }), e.on("readable", function(e) {
                    n.nextTick(p, e)
                }.bind(null, r)), r
            }
        }).call(this, e("_process"))
    }, {
        "./end-of-stream": 35,
        _process: 23
    }],
    33: [function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var i = e("buffer").Buffer,
            s = e("util").inspect,
            o = s && s.custom || "inspect";
        t.exports = function() {
            function e() {
                this.head = null, this.tail = null, this.length = 0
            }
            var t = e.prototype;
            return t.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }, t.unshift = function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }, t.shift = function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }, t.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, t.join = function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                return n
            }, t.concat = function(e) {
                if (0 === this.length) return i.alloc(0);
                for (var t, n, r, s = i.allocUnsafe(e >>> 0), o = this.head, a = 0; o;) t = o.data, n = s, r = a, i.prototype.copy.call(t, n, r), a += o.data.length, o = o.next;
                return s
            }, t.consume = function(e, t) {
                var n;
                return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n
            }, t.first = function() {
                return this.head.data
            }, t._getString = function(e) {
                var t = this.head,
                    n = 1,
                    r = t.data;
                for (e -= r.length; t = t.next;) {
                    var i = t.data,
                        s = e > i.length ? i.length : e;
                    if (s === i.length ? r += i : r += i.slice(0, e), 0 == (e -= s)) {
                        s === i.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(s));
                        break
                    }++n
                }
                return this.length -= n, r
            }, t._getBuffer = function(e) {
                var t = i.allocUnsafe(e),
                    n = this.head,
                    r = 1;
                for (n.data.copy(t), e -= n.data.length; n = n.next;) {
                    var s = n.data,
                        o = e > s.length ? s.length : e;
                    if (s.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
                        o === s.length ? (++r, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = s.slice(o));
                        break
                    }++r
                }
                return this.length -= r, t
            }, t[o] = function(e, t) {
                return s(this, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), i.forEach(function(t) {
                            r(e, t, n[t])
                        })
                    }
                    return e
                }({}, t, {
                    depth: 0,
                    customInspect: !1
                }))
            }, e
        }()
    }, {
        buffer: 16,
        util: 15
    }],
    34: [function(e, t, n) {
        (function(e) {
            "use strict";

            function n(e, t) {
                i(e, t), r(e)
            }

            function r(e) {
                e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
            }

            function i(e, t) {
                e.emit("error", t)
            }
            t.exports = {
                destroy: function(t, s) {
                    var o = this,
                        a = this._readableState && this._readableState.destroyed,
                        u = this._writableState && this._writableState.destroyed;
                    return a || u ? (s ? s(t) : !t || this._writableState && this._writableState.errorEmitted || e.nextTick(i, this, t), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {
                        !s && t ? (e.nextTick(n, o, t), o._writableState && (o._writableState.errorEmitted = !0)) : s ? (e.nextTick(r, o), s(t)) : e.nextTick(r, o)
                    }), this)
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                }
            }
        }).call(this, e("_process"))
    }, {
        _process: 23
    }],
    35: [function(e, t, n) {
        "use strict";
        var r = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;

        function i() {}
        t.exports = function e(t, n, s) {
            if ("function" == typeof n) return e(t, null, n);
            n || (n = {}), s = function(e) {
                var t = !1;
                return function() {
                    if (!t) {
                        t = !0;
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        e.apply(this, r)
                    }
                }
            }(s || i);
            var o = n.readable || !1 !== n.readable && t.readable,
                a = n.writable || !1 !== n.writable && t.writable,
                u = function() {
                    t.writable || c()
                },
                l = t._writableState && t._writableState.finished,
                c = function() {
                    a = !1, l = !0, o || s.call(t)
                },
                d = t._readableState && t._readableState.endEmitted,
                h = function() {
                    o = !1, d = !0, a || s.call(t)
                },
                f = function(e) {
                    s.call(t, e)
                },
                p = function() {
                    var e;
                    return o && !d ? (t._readableState && t._readableState.ended || (e = new r), s.call(t, e)) : a && !l ? (t._writableState && t._writableState.ended || (e = new r), s.call(t, e)) : void 0
                },
                g = function() {
                    t.req.on("finish", c)
                };
            return function(e) {
                    return e.setHeader && "function" == typeof e.abort
                }(t) ? (t.on("complete", c), t.on("abort", p), t.req ? g() : t.on("request", g)) : a && !t._writableState && (t.on("end", u), t.on("close", u)), t.on("end", h), t.on("finish", c), !1 !== n.error && t.on("error", f), t.on("close", p),
                function() {
                    t.removeListener("complete", c), t.removeListener("abort", p), t.removeListener("request", g), t.req && t.req.removeListener("finish", c), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", c), t.removeListener("end", h), t.removeListener("error", f), t.removeListener("close", p)
                }
        }
    }, {
        "../../../errors": 25
    }],
    36: [function(e, t, n) {
        "use strict";
        var r, i = e("../../../errors").codes,
            s = i.ERR_MISSING_ARGS,
            o = i.ERR_STREAM_DESTROYED;

        function a(e) {
            if (e) throw e
        }

        function u(e) {
            e()
        }

        function l(e, t) {
            return e.pipe(t)
        }
        t.exports = function() {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            var c, d = function(e) {
                return e.length ? "function" != typeof e[e.length - 1] ? a : e.pop() : a
            }(n);
            if (Array.isArray(n[0]) && (n = n[0]), n.length < 2) throw new s("streams");
            var h = n.map(function(t, i) {
                var s = i < n.length - 1;
                return function(t, n, i, s) {
                    s = function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0, e.apply(void 0, arguments))
                        }
                    }(s);
                    var a = !1;
                    t.on("close", function() {
                        a = !0
                    }), void 0 === r && (r = e("./end-of-stream")), r(t, {
                        readable: n,
                        writable: i
                    }, function(e) {
                        if (e) return s(e);
                        a = !0, s()
                    });
                    var u = !1;
                    return function(e) {
                        if (!a && !u) return u = !0,
                            function(e) {
                                return e.setHeader && "function" == typeof e.abort
                            }(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void s(e || new o("pipe"))
                    }
                }(t, s, i > 0, function(e) {
                    c || (c = e), e && h.forEach(u), s || (h.forEach(u), d(c))
                })
            });
            return n.reduce(l)
        }
    }, {
        "../../../errors": 25,
        "./end-of-stream": 35
    }],
    37: [function(e, t, n) {
        "use strict";
        var r = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
        t.exports = {
            getHighWaterMark: function(e, t, n, i) {
                var s = function(e, t, n) {
                    return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null
                }(t, i, n);
                if (null != s) {
                    if (!isFinite(s) || Math.floor(s) !== s || s < 0) throw new r(i ? n : "highWaterMark", s);
                    return Math.floor(s)
                }
                return e.objectMode ? 16 : 16384
            }
        }
    }, {
        "../../../errors": 25
    }],
    38: [function(e, t, n) {
        t.exports = e("events").EventEmitter
    }, {
        events: "events"
    }],
    39: [function(e, t, n) {
        (n = t.exports = e("./lib/_stream_readable.js")).Stream = n, n.Readable = n, n.Writable = e("./lib/_stream_writable.js"), n.Duplex = e("./lib/_stream_duplex.js"), n.Transform = e("./lib/_stream_transform.js"), n.PassThrough = e("./lib/_stream_passthrough.js"), n.finished = e("./lib/internal/streams/end-of-stream.js"), n.pipeline = e("./lib/internal/streams/pipeline.js")
    }, {
        "./lib/_stream_duplex.js": 27,
        "./lib/_stream_passthrough.js": 28,
        "./lib/_stream_readable.js": 29,
        "./lib/_stream_transform.js": 30,
        "./lib/_stream_writable.js": 31,
        "./lib/internal/streams/end-of-stream.js": 35,
        "./lib/internal/streams/pipeline.js": 36
    }],
    40: [function(e, t, n) {
        (function(e) {
            t.exports = function(t, n) {
                var r, i, s, o = !0;

                function a(t) {
                    function i() {
                        n && n(t, r), n = null
                    }
                    o ? e.nextTick(i) : i()
                }

                function u(e, t, n) {
                    r[e] = n, (0 == --i || t) && a(t)
                }
                Array.isArray(t) ? (r = [], i = t.length) : (s = Object.keys(t), r = {}, i = s.length), i ? s ? s.forEach(function(e) {
                    t[e](function(t, n) {
                        u(e, t, n)
                    })
                }) : t.forEach(function(e, t) {
                    e(function(e, n) {
                        u(t, e, n)
                    })
                }) : a(null), o = !1
            }
        }).call(this, e("_process"))
    }, {
        _process: 23
    }],
    41: [function(e, t, n) {
        var r = e("buffer"),
            i = r.Buffer;

        function s(e, t) {
            for (var n in e) t[n] = e[n]
        }

        function o(e, t, n) {
            return i(e, t, n)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (s(r, n), n.Buffer = o), o.prototype = Object.create(i.prototype), s(i, o), o.from = function(e, t, n) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return i(e, t, n)
        }, o.alloc = function(e, t, n) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var r = i(e);
            return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
        }, o.allocUnsafe = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return i(e)
        }, o.allocUnsafeSlow = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return r.SlowBuffer(e)
        }
    }, {
        buffer: 16
    }],
    42: [function(e, t, n) {
        var r = e("safe-buffer").Buffer;

        function i(e, t) {
            this._block = r.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
        }
        i.prototype.update = function(e, t) {
            "string" == typeof e && (t = t || "utf8", e = r.from(e, t));
            for (var n = this._block, i = this._blockSize, s = e.length, o = this._len, a = 0; a < s;) {
                for (var u = o % i, l = Math.min(s - a, i - u), c = 0; c < l; c++) n[u + c] = e[a + c];
                a += l, (o += l) % i == 0 && this._update(n)
            }
            return this._len += s, this
        }, i.prototype.digest = function(e) {
            var t = this._len % this._blockSize;
            this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
            var n = 8 * this._len;
            if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4);
            else {
                var r = (4294967295 & n) >>> 0,
                    i = (n - r) / 4294967296;
                this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4)
            }
            this._update(this._block);
            var s = this._hash();
            return e ? s.toString(e) : s
        }, i.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }, t.exports = i
    }, {
        "safe-buffer": 41
    }],
    43: [function(e, t, n) {
        var r = e("inherits"),
            i = e("./hash"),
            s = e("safe-buffer").Buffer,
            o = [1518500249, 1859775393, -1894007588, -899497514],
            a = new Array(80);

        function u() {
            this.init(), this._w = a, i.call(this, 64, 56)
        }

        function l(e) {
            return e << 5 | e >>> 27
        }

        function c(e) {
            return e << 30 | e >>> 2
        }

        function d(e, t, n, r) {
            return 0 === e ? t & n | ~t & r : 2 === e ? t & n | t & r | n & r : t ^ n ^ r
        }
        r(u, i), u.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, u.prototype._update = function(e) {
            for (var t, n = this._w, r = 0 | this._a, i = 0 | this._b, s = 0 | this._c, a = 0 | this._d, u = 0 | this._e, h = 0; h < 16; ++h) n[h] = e.readInt32BE(4 * h);
            for (; h < 80; ++h) n[h] = (t = n[h - 3] ^ n[h - 8] ^ n[h - 14] ^ n[h - 16]) << 1 | t >>> 31;
            for (var f = 0; f < 80; ++f) {
                var p = ~~(f / 20),
                    g = l(r) + d(p, i, s, a) + u + n[f] + o[p] | 0;
                u = a, a = s, s = c(i), i = r, r = g
            }
            this._a = r + this._a | 0, this._b = i + this._b | 0, this._c = s + this._c | 0, this._d = a + this._d | 0, this._e = u + this._e | 0
        }, u.prototype._hash = function() {
            var e = s.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
        }, t.exports = u
    }, {
        "./hash": 42,
        inherits: 20,
        "safe-buffer": 41
    }],
    44: [function(e, t, n) {
        (function(n) {
            t.exports = l;
            var r = e("debug")("simple-peer"),
                i = e("get-browser-rtc"),
                s = e("inherits"),
                o = e("randombytes"),
                a = e("readable-stream"),
                u = 5e3;

            function l(e) {
                var t = this;
                if (!(t instanceof l)) return new l(e);
                if (t._id = o(4).toString("hex").slice(0, 7), t._debug("new peer %o", e), e = Object.assign({
                        allowHalfOpen: !1
                    }, e), a.Duplex.call(t, e), t.channelName = e.initiator ? e.channelName || o(20).toString("hex") : null, t.initiator = e.initiator || !1, t.channelConfig = e.channelConfig || l.channelConfig, t.config = Object.assign({}, l.config, e.config), t.offerOptions = e.offerOptions || {}, t.answerOptions = e.answerOptions || {}, t.sdpTransform = e.sdpTransform || function(e) {
                        return e
                    }, t.streams = e.streams || (e.stream ? [e.stream] : []), t.trickle = void 0 === e.trickle || e.trickle, t.allowHalfTrickle = void 0 !== e.allowHalfTrickle && e.allowHalfTrickle, t.iceCompleteTimeout = e.iceCompleteTimeout || u, t.destroyed = !1, t._connected = !1, t.remoteAddress = void 0, t.remoteFamily = void 0, t.remotePort = void 0, t.localAddress = void 0, t.localFamily = void 0, t.localPort = void 0, t._wrtc = e.wrtc && "object" == typeof e.wrtc ? e.wrtc : i(), !t._wrtc) throw "undefined" == typeof window ? d("No WebRTC support: Specify `opts.wrtc` option in this environment", "ERR_WEBRTC_SUPPORT") : d("No WebRTC support: Not a supported browser", "ERR_WEBRTC_SUPPORT");
                t._pcReady = !1, t._channelReady = !1, t._iceComplete = !1, t._iceCompleteTimer = null, t._channel = null, t._pendingCandidates = [], t._isNegotiating = !t.initiator, t._batchedNegotiation = !1, t._queuedNegotiation = !1, t._sendersAwaitingStable = [], t._senderMap = new Map, t._firstStable = !0, t._closingInterval = null, t._remoteTracks = [], t._remoteStreams = [], t._chunk = null, t._cb = null, t._interval = null;
                try {
                    t._pc = new t._wrtc.RTCPeerConnection(t.config)
                } catch (e) {
                    return void setTimeout(() => t.destroy(e), 0)
                }
                t._isReactNativeWebrtc = "number" == typeof t._pc._peerConnectionId, t._pc.oniceconnectionstatechange = function() {
                    t._onIceStateChange()
                }, t._pc.onicegatheringstatechange = function() {
                    t._onIceStateChange()
                }, t._pc.onsignalingstatechange = function() {
                    t._onSignalingStateChange()
                }, t._pc.onicecandidate = function(e) {
                    t._onIceCandidate(e)
                }, t.initiator ? t._setupData({
                    channel: t._pc.createDataChannel(t.channelName, t.channelConfig)
                }) : t._pc.ondatachannel = function(e) {
                    t._setupData(e)
                }, t.streams && t.streams.forEach(function(e) {
                    t.addStream(e)
                }), t._pc.ontrack = function(e) {
                    t._onTrack(e)
                }, t.initiator && t._needsNegotiation(), t._onFinishBound = function() {
                    t._onFinish()
                }, t.once("finish", t._onFinishBound)
            }

            function c(e) {
                return e.replace(/a=ice-options:trickle\s\n/g, "")
            }

            function d(e, t) {
                var n = new Error(e);
                return n.code = t, n
            }
            s(l, a.Duplex), l.WEBRTC_SUPPORT = !!i(), l.config = {
                iceServers: [{
                    urls: "stun:stun.l.google.com:19302"
                }, {
                    urls: "stun:global.stun.twilio.com:3478?transport=udp"
                }],
                sdpSemantics: "unified-plan"
            }, l.channelConfig = {}, Object.defineProperty(l.prototype, "bufferSize", {
                get: function() {
                    return this._channel && this._channel.bufferedAmount || 0
                }
            }), Object.defineProperty(l.prototype, "connected", {
                get: function() {
                    return this._connected && "open" === this._channel.readyState
                }
            }), l.prototype.address = function() {
                return {
                    port: this.localPort,
                    family: this.localFamily,
                    address: this.localAddress
                }
            }, l.prototype.signal = function(e) {
                var t = this;
                if (t.destroyed) throw d("cannot signal after peer is destroyed", "ERR_SIGNALING");
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (t) {
                    e = {}
                }
                t._debug("signal()"), e.renegotiate && t.initiator && (t._debug("got request to renegotiate"), t._needsNegotiation()), e.transceiverRequest && t.initiator && (t._debug("got request for transceiver"), t.addTransceiver(e.transceiverRequest.kind, e.transceiverRequest.init)), e.candidate && (t._pc.localDescription && t._pc.localDescription.type && t._pc.remoteDescription && t._pc.remoteDescription.type ? t._addIceCandidate(e.candidate) : t._pendingCandidates.push(e.candidate)), e.sdp && t._pc.setRemoteDescription(new t._wrtc.RTCSessionDescription(e)).then(function() {
                    t.destroyed || (t._pendingCandidates.forEach(function(e) {
                        t._addIceCandidate(e)
                    }), t._pendingCandidates = [], "offer" === t._pc.remoteDescription.type && t._createAnswer())
                }).catch(function(e) {
                    t.destroy(d(e, "ERR_SET_REMOTE_DESCRIPTION"))
                }), e.sdp || e.candidate || e.renegotiate || e.transceiverRequest || t.destroy(d("signal() called with invalid signal data", "ERR_SIGNALING"))
            }, l.prototype._addIceCandidate = function(e) {
                var t = this,
                    n = new t._wrtc.RTCIceCandidate(e);
                t._pc.addIceCandidate(n).catch(function(e) {
                    !n.address || n.address.endsWith(".local") ? ("Ignoring unsupported ICE candidate.", console.warn("Ignoring unsupported ICE candidate.")) : t.destroy(d(e, "ERR_ADD_ICE_CANDIDATE"))
                })
            }, l.prototype.send = function(e) {
                this._channel.send(e)
            }, l.prototype.addTransceiver = function(e, t) {
                if (this._debug("addTransceiver()"), this.initiator) try {
                    this._pc.addTransceiver(e, t), this._needsNegotiation()
                } catch (e) {
                    this.destroy(e)
                } else this.emit("signal", {
                    transceiverRequest: {
                        kind: e,
                        init: t
                    }
                })
            }, l.prototype.addStream = function(e) {
                var t = this;
                t._debug("addStream()"), e.getTracks().forEach(function(n) {
                    t.addTrack(n, e)
                })
            }, l.prototype.addTrack = function(e, t) {
                this._debug("addTrack()");
                var n = this._senderMap.get(e) || new Map,
                    r = n.get(t);
                r ? r.removed ? this.destroy(d("Track has been removed. You should enable/disable tracks that you want to re-add.", "ERR_SENDER_REMOVED")) : this.destroy(d("Track has already been added to that stream.", "ERR_SENDER_ALREADY_ADDED")) : (r = this._pc.addTrack(e, t), n.set(t, r), this._senderMap.set(e, n), this._needsNegotiation())
            }, l.prototype.replaceTrack = function(e, t, n) {
                this._debug("replaceTrack()");
                var r = this._senderMap.get(e),
                    i = r ? r.get(n) : null;
                i || this.destroy(d("Cannot replace track that was never added.", "ERR_TRACK_NOT_ADDED")), t && this._senderMap.set(t, r), null != i.replaceTrack ? i.replaceTrack(t) : this.destroy(d("replaceTrack is not supported in this browser", "ERR_UNSUPPORTED_REPLACETRACK"))
            }, l.prototype.removeTrack = function(e, t) {
                this._debug("removeSender()");
                var n = this._senderMap.get(e),
                    r = n ? n.get(t) : null;
                r || this.destroy(d("Cannot remove track that was never added.", "ERR_TRACK_NOT_ADDED"));
                try {
                    r.removed = !0, this._pc.removeTrack(r)
                } catch (e) {
                    "NS_ERROR_UNEXPECTED" === e.name ? this._sendersAwaitingStable.push(r) : this.destroy(e)
                }
                this._needsNegotiation()
            }, l.prototype.removeStream = function(e) {
                var t = this;
                t._debug("removeSenders()"), e.getTracks().forEach(function(n) {
                    t.removeTrack(n, e)
                })
            }, l.prototype._needsNegotiation = function() {
                var e = this;
                e._debug("_needsNegotiation"), e._batchedNegotiation || (e._batchedNegotiation = !0, setTimeout(function() {
                    e._batchedNegotiation = !1, e._debug("starting batched negotiation"), e.negotiate()
                }, 0))
            }, l.prototype.negotiate = function() {
                var e = this;
                e.initiator ? e._isNegotiating ? (e._queuedNegotiation = !0, e._debug("already negotiating, queueing")) : (e._debug("start negotiation"), setTimeout(() => {
                    e._createOffer()
                }, 0)) : e._isNegotiating || (e._debug("requesting negotiation from initiator"), e.emit("signal", {
                    renegotiate: !0
                })), e._isNegotiating = !0
            }, l.prototype.destroy = function(e) {
                this._destroy(e, function() {})
            }, l.prototype._destroy = function(e, t) {
                if (!this.destroyed) {
                    if (this._debug("destroy (error: %s)", e && (e.message || e)), this.readable = this.writable = !1, this._readableState.ended || this.push(null), this._writableState.finished || this.end(), this.destroyed = !0, this._connected = !1, this._pcReady = !1, this._channelReady = !1, this._remoteTracks = null, this._remoteStreams = null, this._senderMap = null, clearInterval(this._closingInterval), this._closingInterval = null, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._onFinishBound && this.removeListener("finish", this._onFinishBound), this._onFinishBound = null, this._channel) {
                        try {
                            this._channel.close()
                        } catch (e) {}
                        this._channel.onmessage = null, this._channel.onopen = null, this._channel.onclose = null, this._channel.onerror = null
                    }
                    if (this._pc) {
                        try {
                            this._pc.close()
                        } catch (e) {}
                        this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ontrack = null, this._pc.ondatachannel = null
                    }
                    this._pc = null, this._channel = null, e && this.emit("error", e), this.emit("close"), t()
                }
            }, l.prototype._setupData = function(e) {
                var t = this;
                if (!e.channel) return t.destroy(d("Data channel event is missing `channel` property", "ERR_DATA_CHANNEL"));
                t._channel = e.channel, t._channel.binaryType = "arraybuffer", "number" == typeof t._channel.bufferedAmountLowThreshold && (t._channel.bufferedAmountLowThreshold = 65536), t.channelName = t._channel.label, t._channel.onmessage = function(e) {
                    t._onChannelMessage(e)
                }, t._channel.onbufferedamountlow = function() {
                    t._onChannelBufferedAmountLow()
                }, t._channel.onopen = function() {
                    t._onChannelOpen()
                }, t._channel.onclose = function() {
                    t._onChannelClose()
                }, t._channel.onerror = function(e) {
                    t.destroy(d(e, "ERR_DATA_CHANNEL"))
                };
                var n = !1;
                t._closingInterval = setInterval(function() {
                    t._channel && "closing" === t._channel.readyState ? (n && t._onChannelClose(), n = !0) : n = !1
                }, 5e3)
            }, l.prototype._read = function() {}, l.prototype._write = function(e, t, n) {
                if (this.destroyed) return n(d("cannot write after peer is destroyed", "ERR_DATA_CHANNEL"));
                if (this._connected) {
                    try {
                        this.send(e)
                    } catch (e) {
                        return this.destroy(d(e, "ERR_DATA_CHANNEL"))
                    }
                    this._channel.bufferedAmount > 65536 ? (this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount), this._cb = n) : n(null)
                } else this._debug("write before connect"), this._chunk = e, this._cb = n
            }, l.prototype._onFinish = function() {
                var e = this;

                function t() {
                    setTimeout(function() {
                        e.destroy()
                    }, 1e3)
                }
                e.destroyed || (e._connected ? t() : e.once("connect", t))
            }, l.prototype._startIceCompleteTimeout = function() {
                var e = this;
                e.destroyed || e._iceCompleteTimer || (e._debug("started iceComplete timeout"), e._iceCompleteTimer = setTimeout(function() {
                    e._iceComplete || (e._iceComplete = !0, e._debug("iceComplete timeout completed"), e.emit("iceTimeout"), e.emit("_iceComplete"))
                }, e.iceCompleteTimeout))
            }, l.prototype._createOffer = function() {
                var e = this;
                e.destroyed || e._pc.createOffer(e.offerOptions).then(function(t) {
                    function n() {
                        if (!e.destroyed) {
                            var n = e._pc.localDescription || t;
                            e._debug("signal"), e.emit("signal", {
                                type: n.type,
                                sdp: n.sdp
                            })
                        }
                    }
                    e.destroyed || (e.trickle || e.allowHalfTrickle || (t.sdp = c(t.sdp)), t.sdp = e.sdpTransform(t.sdp), e._pc.setLocalDescription(t).then(function() {
                        e._debug("createOffer success"), e.destroyed || (e.trickle || e._iceComplete ? n() : e.once("_iceComplete", n))
                    }).catch(function(t) {
                        e.destroy(d(t, "ERR_SET_LOCAL_DESCRIPTION"))
                    }))
                }).catch(function(t) {
                    e.destroy(d(t, "ERR_CREATE_OFFER"))
                })
            }, l.prototype._requestMissingTransceivers = function() {
                var e = this;
                e._pc.getTransceivers && e._pc.getTransceivers().forEach(t => {
                    t.mid || !t.sender.track || t.requested || (t.requested = !0, e.addTransceiver(t.sender.track.kind))
                })
            }, l.prototype._createAnswer = function() {
                var e = this;
                e.destroyed || e._pc.createAnswer(e.answerOptions).then(function(t) {
                    function n() {
                        if (!e.destroyed) {
                            var n = e._pc.localDescription || t;
                            e._debug("signal"), e.emit("signal", {
                                type: n.type,
                                sdp: n.sdp
                            }), e.initiator || e._requestMissingTransceivers()
                        }
                    }
                    e.destroyed || (e.trickle || e.allowHalfTrickle || (t.sdp = c(t.sdp)), t.sdp = e.sdpTransform(t.sdp), e._pc.setLocalDescription(t).then(function() {
                        e.destroyed || (e.trickle || e._iceComplete ? n() : e.once("_iceComplete", n))
                    }).catch(function(t) {
                        e.destroy(d(t, "ERR_SET_LOCAL_DESCRIPTION"))
                    }))
                }).catch(function(t) {
                    e.destroy(d(t, "ERR_CREATE_ANSWER"))
                })
            }, l.prototype._onIceStateChange = function() {
                if (!this.destroyed) {
                    var e = this._pc.iceConnectionState,
                        t = this._pc.iceGatheringState;
                    this._debug("iceStateChange (connection: %s) (gathering: %s)", e, t), this.emit("iceStateChange", e, t), "connected" !== e && "completed" !== e || (this._pcReady = !0, this._maybeReady()), "failed" === e && this.destroy(d("Ice connection failed.", "ERR_ICE_CONNECTION_FAILURE")), "closed" === e && this.destroy(d("Ice connection closed.", "ERR_ICE_CONNECTION_CLOSED"))
                }
            }, l.prototype.getStats = function(e) {
                var t = this;

                function n(e) {
                    return "[object Array]" === Object.prototype.toString.call(e.values) && e.values.forEach(function(t) {
                        Object.assign(e, t)
                    }), e
                }
                0 === t._pc.getStats.length ? t._pc.getStats().then(function(t) {
                    var r = [];
                    t.forEach(function(e) {
                        r.push(n(e))
                    }), e(null, r)
                }, function(t) {
                    e(t)
                }) : t._isReactNativeWebrtc ? t._pc.getStats(null, function(t) {
                    var r = [];
                    t.forEach(function(e) {
                        r.push(n(e))
                    }), e(null, r)
                }, function(t) {
                    e(t)
                }) : t._pc.getStats.length > 0 ? t._pc.getStats(function(r) {
                    if (!t.destroyed) {
                        var i = [];
                        r.result().forEach(function(e) {
                            var t = {};
                            e.names().forEach(function(n) {
                                t[n] = e.stat(n)
                            }), t.id = e.id, t.type = e.type, t.timestamp = e.timestamp, i.push(n(t))
                        }), e(null, i)
                    }
                }, function(t) {
                    e(t)
                }) : e(null, [])
            }, l.prototype._maybeReady = function() {
                var e = this;
                e._debug("maybeReady pc %s channel %s", e._pcReady, e._channelReady), !e._connected && !e._connecting && e._pcReady && e._channelReady && (e._connecting = !0, function t() {
                    e.destroyed || e.getStats(function(n, r) {
                        if (!e.destroyed) {
                            n && (r = []);
                            var i = {},
                                s = {},
                                o = {},
                                a = !1;
                            if (r.forEach(function(e) {
                                    "remotecandidate" !== e.type && "remote-candidate" !== e.type || (i[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (s[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (o[e.id] = e)
                                }), r.forEach(function(e) {
                                    "transport" === e.type && e.selectedCandidatePairId && l(o[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && l(e)
                                }), a || Object.keys(o).length && !Object.keys(s).length) {
                                if (e._connecting = !1, e._connected = !0, e._chunk) {
                                    try {
                                        e.send(e._chunk)
                                    } catch (n) {
                                        return e.destroy(d(n, "ERR_DATA_CHANNEL"))
                                    }
                                    e._chunk = null, e._debug('sent chunk from "write before connect"');
                                    var u = e._cb;
                                    e._cb = null, u(null)
                                }
                                "number" != typeof e._channel.bufferedAmountLowThreshold && (e._interval = setInterval(function() {
                                    e._onInterval()
                                }, 150), e._interval.unref && e._interval.unref()), e._debug("connect"), e.emit("connect")
                            } else setTimeout(t, 100)
                        }

                        function l(t) {
                            a = !0;
                            var n = s[t.localCandidateId];
                            n && (n.ip || n.address) ? (e.localAddress = n.ip || n.address, e.localPort = Number(n.port)) : n && n.ipAddress ? (e.localAddress = n.ipAddress, e.localPort = Number(n.portNumber)) : "string" == typeof t.googLocalAddress && (n = t.googLocalAddress.split(":"), e.localAddress = n[0], e.localPort = Number(n[1])), e.localAddress && (e.localFamily = e.localAddress.includes(":") ? "IPv6" : "IPv4");
                            var r = i[t.remoteCandidateId];
                            r && (r.ip || r.address) ? (e.remoteAddress = r.ip || r.address, e.remotePort = Number(r.port)) : r && r.ipAddress ? (e.remoteAddress = r.ipAddress, e.remotePort = Number(r.portNumber)) : "string" == typeof t.googRemoteAddress && (r = t.googRemoteAddress.split(":"), e.remoteAddress = r[0], e.remotePort = Number(r[1])), e.remoteAddress && (e.remoteFamily = e.remoteAddress.includes(":") ? "IPv6" : "IPv4"), e._debug("connect local: %s:%s remote: %s:%s", e.localAddress, e.localPort, e.remoteAddress, e.remotePort)
                        }
                    })
                }())
            }, l.prototype._onInterval = function() {
                !this._cb || !this._channel || this._channel.bufferedAmount > 65536 || this._onChannelBufferedAmountLow()
            }, l.prototype._onSignalingStateChange = function() {
                var e = this;
                e.destroyed || ("stable" !== e._pc.signalingState || e._firstStable || (e._isNegotiating = !1, e._debug("flushing sender queue", e._sendersAwaitingStable), e._sendersAwaitingStable.forEach(function(t) {
                    e._pc.removeTrack(t), e._queuedNegotiation = !0
                }), e._sendersAwaitingStable = [], e._queuedNegotiation && (e._debug("flushing negotiation queue"), e._queuedNegotiation = !1, e._needsNegotiation()), e._debug("negotiate"), e.emit("negotiate")), e._firstStable = !1, e._debug("signalingStateChange %s", e._pc.signalingState), e.emit("signalingStateChange", e._pc.signalingState))
            }, l.prototype._onIceCandidate = function(e) {
                this.destroyed || (e.candidate && this.trickle ? this.emit("signal", {
                    candidate: {
                        candidate: e.candidate.candidate,
                        sdpMLineIndex: e.candidate.sdpMLineIndex,
                        sdpMid: e.candidate.sdpMid
                    }
                }) : e.candidate || this._iceComplete || (this._iceComplete = !0, this.emit("_iceComplete")), e.candidate && this._startIceCompleteTimeout())
            }, l.prototype._onChannelMessage = function(e) {
                if (!this.destroyed) {
                    var t = e.data;
                    t instanceof ArrayBuffer && (t = n.from(t)), this.push(t)
                }
            }, l.prototype._onChannelBufferedAmountLow = function() {
                if (!this.destroyed && this._cb) {
                    this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
                    var e = this._cb;
                    this._cb = null, e(null)
                }
            }, l.prototype._onChannelOpen = function() {
                this._connected || this.destroyed || (this._debug("on channel open"), this._channelReady = !0, this._maybeReady())
            }, l.prototype._onChannelClose = function() {
                this.destroyed || (this._debug("on channel close"), this.destroy())
            }, l.prototype._onTrack = function(e) {
                var t = this;
                t.destroyed || e.streams.forEach(function(n) {
                    t._debug("on track"), t.emit("track", e.track, n), t._remoteTracks.push({
                        track: e.track,
                        stream: n
                    }), t._remoteStreams.some(function(e) {
                        return e.id === n.id
                    }) || (t._remoteStreams.push(n), setTimeout(function() {
                        t.emit("stream", n)
                    }, 0))
                })
            }, l.prototype._debug = function() {
                var e = [].slice.call(arguments);
                e[0] = "[" + this._id + "] " + e[0], r.apply(null, e)
            }
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 16,
        debug: "debug",
        "get-browser-rtc": 18,
        inherits: 20,
        randombytes: 24,
        "readable-stream": 39
    }],
    45: [function(e, t, n) {
        (function(n, r) {
            const i = e("debug")("simple-websocket"),
                s = e("randombytes"),
                o = e("readable-stream"),
                a = e("ws"),
                u = "function" != typeof a ? WebSocket : a,
                l = 65536;
            class c extends o.Duplex {
                constructor(e = {}) {
                    if ("string" == typeof e && (e = {
                            url: e
                        }), super(e = Object.assign({
                            allowHalfOpen: !1
                        }, e)), null == e.url && null == e.socket) throw new Error("Missing required `url` or `socket` option");
                    if (null != e.url && null != e.socket) throw new Error("Must specify either `url` or `socket` option, not both");
                    if (this._id = s(4).toString("hex").slice(0, 7), this._debug("new websocket: %o", e), this.connected = !1, this.destroyed = !1, this._chunk = null, this._cb = null, this._interval = null, e.socket) this.url = e.socket.url, this._ws = e.socket, this.connected = e.socket.readyState === u.OPEN;
                    else {
                        this.url = e.url;
                        try {
                            this._ws = "function" == typeof a ? new u(e.url, e) : new u(e.url)
                        } catch (e) {
                            return void n.nextTick(() => this.destroy(e))
                        }
                    }
                    this._ws.binaryType = "arraybuffer", this._ws.onopen = (() => {
                        this._onOpen()
                    }), this._ws.onmessage = (e => {
                        this._onMessage(e)
                    }), this._ws.onclose = (() => {
                        this._onClose()
                    }), this._ws.onerror = (() => {
                        this.destroy(new Error("connection error to " + this.url))
                    }), this._onFinishBound = (() => {
                        this._onFinish()
                    }), this.once("finish", this._onFinishBound)
                }
                send(e) {
                    this._ws.send(e)
                }
                destroy(e) {
                    this._destroy(e, () => {})
                }
                _destroy(e, t) {
                    if (!this.destroyed) {
                        if (this._debug("destroy (error: %s)", e && (e.message || e)), this.readable = this.writable = !1, this._readableState.ended || this.push(null), this._writableState.finished || this.end(), this.connected = !1, this.destroyed = !0, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._onFinishBound && this.removeListener("finish", this._onFinishBound), this._onFinishBound = null, this._ws) {
                            const t = this._ws,
                                n = () => {
                                    t.onclose = null
                                };
                            if (t.readyState === u.CLOSED) n();
                            else try {
                                t.onclose = n, t.close()
                            } catch (e) {
                                n()
                            }
                            t.onopen = null, t.onmessage = null, t.onerror = (() => {})
                        }
                        if (this._ws = null, e) {
                            if ("undefined" != typeof DOMException && e instanceof DOMException) {
                                const t = e.code;
                                (e = new Error(e.message)).code = t
                            }
                            this.emit("error", e)
                        }
                        this.emit("close"), t()
                    }
                }
                _read() {}
                _write(e, t, n) {
                    if (this.destroyed) return n(new Error("cannot write after socket is destroyed"));
                    if (this.connected) {
                        try {
                            this.send(e)
                        } catch (e) {
                            return this.destroy(e)
                        }
                        "function" != typeof a && this._ws.bufferedAmount > l ? (this._debug("start backpressure: bufferedAmount %d", this._ws.bufferedAmount), this._cb = n) : n(null)
                    } else this._debug("write before connect"), this._chunk = e, this._cb = n
                }
                _onFinish() {
                    if (this.destroyed) return;
                    const e = () => {
                        setTimeout(() => this.destroy(), 1e3)
                    };
                    this.connected ? e() : this.once("connect", e)
                }
                _onMessage(e) {
                    if (this.destroyed) return;
                    let t = e.data;
                    t instanceof ArrayBuffer && (t = r.from(t)), this.push(t)
                }
                _onOpen() {
                    if (!this.connected && !this.destroyed) {
                        if (this.connected = !0, this._chunk) {
                            try {
                                this.send(this._chunk)
                            } catch (e) {
                                return this.destroy(e)
                            }
                            this._chunk = null, this._debug('sent chunk from "write before connect"');
                            const e = this._cb;
                            this._cb = null, e(null)
                        }
                        "function" != typeof a && (this._interval = setInterval(() => this._onInterval(), 150), this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect")
                    }
                }
                _onInterval() {
                    if (!this._cb || !this._ws || this._ws.bufferedAmount > l) return;
                    this._debug("ending backpressure: bufferedAmount %d", this._ws.bufferedAmount);
                    const e = this._cb;
                    this._cb = null, e(null)
                }
                _onClose() {
                    this.destroyed || (this._debug("on close"), this.destroy())
                }
                _debug() {
                    const e = [].slice.call(arguments);
                    e[0] = "[" + this._id + "] " + e[0], i.apply(null, e)
                }
            }
            c.WEBSOCKET_SUPPORT = !!u, t.exports = c
        }).call(this, e("_process"), e("buffer").Buffer)
    }, {
        _process: 23,
        buffer: 16,
        debug: "debug",
        randombytes: 24,
        "readable-stream": 39,
        ws: 15
    }],
    46: [function(e, t, n) {
        "use strict";
        var r = e("safe-buffer").Buffer,
            i = r.isEncoding || function(e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };

        function s(e) {
            var t;
            switch (this.encoding = function(e) {
                var t = function(e) {
                    if (!e) return "utf8";
                    for (var t;;) switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t) return;
                            e = ("" + e).toLowerCase(), t = !0
                    }
                }(e);
                if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                return t || e
            }(e), this.encoding) {
                case "utf16le":
                    this.text = u, this.end = l, t = 4;
                    break;
                case "utf8":
                    this.fillLast = a, t = 4;
                    break;
                case "base64":
                    this.text = c, this.end = d, t = 3;
                    break;
                default:
                    return this.write = h, void(this.end = f)
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
        }

        function o(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }

        function a(e) {
            var t = this.lastTotal - this.lastNeed,
                n = function(e, t, n) {
                    if (128 != (192 & t[0])) return e.lastNeed = 0, "ï¿½";
                    if (e.lastNeed > 1 && t.length > 1) {
                        if (128 != (192 & t[1])) return e.lastNeed = 1, "ï¿½";
                        if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "ï¿½"
                    }
                }(this, e);
            return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
        }

        function u(e, t) {
            if ((e.length - t) % 2 == 0) {
                var n = e.toString("utf16le", t);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                }
                return n
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
        }

        function l(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, n)
            }
            return t
        }

        function c(e, t) {
            var n = (e.length - t) % 3;
            return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
        }

        function d(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }

        function h(e) {
            return e.toString(this.encoding)
        }

        function f(e) {
            return e && e.length ? this.write(e) : ""
        }
        n.StringDecoder = s, s.prototype.write = function(e) {
            if (0 === e.length) return "";
            var t, n;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                n = this.lastNeed, this.lastNeed = 0
            } else n = 0;
            return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
        }, s.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "ï¿½" : t
        }, s.prototype.text = function(e, t) {
            var n = function(e, t, n) {
                var r = t.length - 1;
                if (r < n) return 0;
                var i = o(t[r]);
                return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --r < n || -2 === i ? 0 : (i = o(t[r])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --r < n || -2 === i ? 0 : (i = o(t[r])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
            }(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = n;
            var r = e.length - (n - this.lastNeed);
            return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
        }, s.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        }
    }, {
        "safe-buffer": 41
    }],
    47: [function(e, t, n) {
        "use strict";
        t.exports = function(e, t, n) {
            return 0 === e.length ? e : t ? (n || e.sort(t), function(e, t) {
                for (var n = 1, r = e.length, i = e[0], s = e[0], o = 1; o < r; ++o)
                    if (s = i, t(i = e[o], s)) {
                        if (o === n) {
                            n++;
                            continue
                        }
                        e[n++] = i
                    } return e.length = n, e
            }(e, t)) : (n || e.sort(), function(e) {
                for (var t = 1, n = e.length, r = e[0], i = e[0], s = 1; s < n; ++s, i = r)
                    if (i = r, (r = e[s]) !== i) {
                        if (s === t) {
                            t++;
                            continue
                        }
                        e[t++] = r
                    } return e.length = t, e
            }(e))
        }
    }, {}],
    48: [function(e, t, n) {
        (function(e) {
            function n(t) {
                try {
                    if (!e.localStorage) return !1
                } catch (e) {
                    return !1
                }
                var n = e.localStorage[t];
                return null != n && "true" === String(n).toLowerCase()
            }
            t.exports = function(e, t) {
                if (n("noDeprecation")) return e;
                var r = !1;
                return function() {
                    if (!r) {
                        if (n("throwDeprecation")) throw new Error(t);
                        n("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    49: [function(e, t, n) {
        t.exports = function e(t, n) {
            if (t && n) return e(t)(n);
            if ("function" != typeof t) throw new TypeError("need wrapper function");
            return Object.keys(t).forEach(function(e) {
                r[e] = t[e]
            }), r;

            function r() {
                for (var e = new Array(arguments.length), n = 0; n < e.length; n++) e[n] = arguments[n];
                var r = t.apply(this, e),
                    i = e[e.length - 1];
                return "function" == typeof r && r !== i && Object.keys(i).forEach(function(e) {
                    r[e] = i[e]
                }), r
            }
        }
    }, {}],
    debug: [function(e, t, n) {
        (function(r) {
            n.log = function(...e) {
                return "object" == typeof console && console.log && console.log(...e)
            }, n.formatArgs = function(e) {
                if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
                const n = "color: " + this.color;
                e.splice(1, 0, n, "color: inherit");
                let r = 0,
                    i = 0;
                e[0].replace(/%[a-zA-Z%]/g, e => {
                    "%%" !== e && "%c" === e && (i = ++r)
                }), e.splice(i, 0, n)
            }, n.save = function(e) {
                try {
                    e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug")
                } catch (e) {}
            }, n.load = function() {
                let e;
                try {
                    e = n.storage.getItem("debug")
                } catch (e) {}
                return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
            }, n.useColors = function() {
                return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }, n.storage = function() {
                try {
                    return localStorage
                } catch (e) {}
            }(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = e("./common")(n);
            const {
                formatters: i
            } = t.exports;
            i.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        }).call(this, e("_process"))
    }, {
        "./common": 17,
        _process: 23
    }],
    events: [function(e, t, n) {
        var r = Object.create || function(e) {
                var t = function() {};
                return t.prototype = e, new t
            },
            i = Object.keys || function(e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return n
            },
            s = Function.prototype.bind || function(e) {
                var t = this;
                return function() {
                    return t.apply(e, arguments)
                }
            };

        function o() {
            this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = r(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }
        t.exports = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._maxListeners = void 0;
        var a, u = 10;
        try {
            var l = {};
            Object.defineProperty && Object.defineProperty(l, "x", {
                value: 0
            }), a = 0 === l.x
        } catch (e) {
            a = !1
        }

        function c(e) {
            return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
        }

        function d(e, t, n, i) {
            var s, o, a;
            if ("function" != typeof n) throw new TypeError('"listener" argument must be a function');
            if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), a = o[t]) : (o = e._events = r(null), e._eventsCount = 0), a) {
                if ("function" == typeof a ? a = o[t] = i ? [n, a] : [a, n] : i ? a.unshift(n) : a.push(n), !a.warned && (s = c(e)) && s > 0 && a.length > s) {
                    a.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + a.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
                    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length, "object" == typeof console && console.warn && console.warn("%s: %s", u.name, u.message)
                }
            } else a = o[t] = n, ++e._eventsCount;
            return e
        }

        function h() {
            if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
                case 0:
                    return this.listener.call(this.target);
                case 1:
                    return this.listener.call(this.target, arguments[0]);
                case 2:
                    return this.listener.call(this.target, arguments[0], arguments[1]);
                case 3:
                    return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                default:
                    for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
                    this.listener.apply(this.target, e)
            }
        }

        function f(e, t, n) {
            var r = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: n
                },
                i = s.call(h, r);
            return i.listener = n, r.wrapFn = i, i
        }

        function p(e, t, n) {
            var r = e._events;
            if (!r) return [];
            var i = r[t];
            return i ? "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                return t
            }(i) : m(i, i.length) : []
        }

        function g(e) {
            var t = this._events;
            if (t) {
                var n = t[e];
                if ("function" == typeof n) return 1;
                if (n) return n.length
            }
            return 0
        }

        function m(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
            return n
        }
        a ? Object.defineProperty(o, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return u
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
                u = e
            }
        }) : o.defaultMaxListeners = u, o.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
            return this._maxListeners = e, this
        }, o.prototype.getMaxListeners = function() {
            return c(this)
        }, o.prototype.emit = function(e) {
            var t, n, r, i, s, o, a = "error" === e;
            if (o = this._events) a = a && null == o.error;
            else if (!a) return !1;
            if (a) {
                if (arguments.length > 1 && (t = arguments[1]), t instanceof Error) throw t;
                var u = new Error('Unhandled "error" event. (' + t + ")");
                throw u.context = t, u
            }
            if (!(n = o[e])) return !1;
            var l = "function" == typeof n;
            switch (r = arguments.length) {
                case 1:
                    ! function(e, t, n) {
                        if (l) e.call(n);
                        else
                            for (var r = e.length, i = m(e, r), s = 0; s < r; ++s) i[s].call(n)
                    }(n, 0, this);
                    break;
                case 2:
                    ! function(e, t, n, r) {
                        if (t) e.call(n, r);
                        else
                            for (var i = e.length, s = m(e, i), o = 0; o < i; ++o) s[o].call(n, r)
                    }(n, l, this, arguments[1]);
                    break;
                case 3:
                    ! function(e, t, n, r, i) {
                        if (t) e.call(n, r, i);
                        else
                            for (var s = e.length, o = m(e, s), a = 0; a < s; ++a) o[a].call(n, r, i)
                    }(n, l, this, arguments[1], arguments[2]);
                    break;
                case 4:
                    ! function(e, t, n, r, i, s) {
                        if (t) e.call(n, r, i, s);
                        else
                            for (var o = e.length, a = m(e, o), u = 0; u < o; ++u) a[u].call(n, r, i, s)
                    }(n, l, this, arguments[1], arguments[2], arguments[3]);
                    break;
                default:
                    for (i = new Array(r - 1), s = 1; s < r; s++) i[s - 1] = arguments[s];
                    ! function(e, t, n, r) {
                        if (l) e.apply(n, r);
                        else
                            for (var i = e.length, s = m(e, i), o = 0; o < i; ++o) s[o].apply(n, r)
                    }(n, 0, this, i)
            }
            return !0
        }, o.prototype.addListener = function(e, t) {
            return d(this, e, t, !1)
        }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e, t) {
            return d(this, e, t, !0)
        }, o.prototype.once = function(e, t) {
            if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
            return this.on(e, f(this, e, t)), this
        }, o.prototype.prependOnceListener = function(e, t) {
            if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
            return this.prependListener(e, f(this, e, t)), this
        }, o.prototype.removeListener = function(e, t) {
            var n, i, s, o, a;
            if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
            if (!(i = this._events)) return this;
            if (!(n = i[e])) return this;
            if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = r(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (s = -1, o = n.length - 1; o >= 0; o--)
                    if (n[o] === t || n[o].listener === t) {
                        a = n[o].listener, s = o;
                        break
                    } if (s < 0) return this;
                0 === s ? n.shift() : function(e, t) {
                    for (var n = s, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
                    e.pop()
                }(n), 1 === n.length && (i[e] = n[0]), i.removeListener && this.emit("removeListener", e, a || t)
            }
            return this
        }, o.prototype.removeAllListeners = function(e) {
            var t, n, s;
            if (!(n = this._events)) return this;
            if (!n.removeListener) return 0 === arguments.length ? (this._events = r(null), this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = r(null) : delete n[e]), this;
            if (0 === arguments.length) {
                var o, a = i(n);
                for (s = 0; s < a.length; ++s) "removeListener" !== (o = a[s]) && this.removeAllListeners(o);
                return this.removeAllListeners("removeListener"), this._events = r(null), this._eventsCount = 0, this
            }
            if ("function" == typeof(t = n[e])) this.removeListener(e, t);
            else if (t)
                for (s = t.length - 1; s >= 0; s--) this.removeListener(e, t[s]);
            return this
        }, o.prototype.listeners = function(e) {
            return p(this, e, !0)
        }, o.prototype.rawListeners = function(e) {
            return p(this, e, !1)
        }, o.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
        }, o.prototype.listenerCount = g, o.prototype.eventNames = function() {
            return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
        }
    }, {}],
    "p2p-media-loader-core": [function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t])
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.version = "0.6.2", r(e("./loader-interface")), r(e("./hybrid-loader"))
    }, {
        "./hybrid-loader": 4,
        "./loader-interface": 5
    }]
}, {}, [2]), require = function e(t, n, r) {
    function i(o, a) {
        if (!n[o]) {
            if (!t[o]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(o, !0);
                if (s) return s(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[o] = {
                exports: {}
            };
            t[o][0].call(c.exports, function(e) {
                return i(t[o][1][e] || e)
            }, c, c.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
    return i
}({
    1: [function(e, t, n) {
        window.p2pml || (window.p2pml = {}), window.p2pml.hlsjs = e("p2p-media-loader-hlsjs")
    }, {
        "p2p-media-loader-hlsjs": "p2p-media-loader-hlsjs"
    }],
    2: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const r = e("events"),
            i = e("p2p-media-loader-core"),
            s = e("./segment-manager"),
            o = e("./hlsjs-loader"),
            a = e("./hlsjs-loader-class");
        n.Engine = class extends r.EventEmitter {
            constructor(e = {}) {
                super(), this.loader = new i.HybridLoader(e.loader), this.segmentManager = new s.SegmentManager(this.loader, e.segments), Object.keys(i.Events).map(e => i.Events[e]).forEach(e => this.loader.on(e, (...t) => this.emit(e, ...t)))
            }
            static isSupported() {
                return i.HybridLoader.isSupported()
            }
            createLoaderClass() {
                return a.createHlsJsLoaderClass(o.HlsJsLoader, this)
            }
            async destroy() {
                await this.segmentManager.destroy()
            }
            getSettings() {
                return {
                    segments: this.segmentManager.getSettings(),
                    loader: this.loader.getSettings()
                }
            }
            getDetails() {
                return {
                    loader: this.loader.getDetails()
                }
            }
            setPlayingSegment(e, t, n, r) {
                this.segmentManager.setPlayingSegment(e, t, n, r)
            }
            setPlayingSegmentByCurrentTime(e) {
                this.segmentManager.setPlayingSegmentByCurrentTime(e)
            }
        }
    }, {
        "./hlsjs-loader": 4,
        "./hlsjs-loader-class": 3,
        "./segment-manager": 5,
        events: "events",
        "p2p-media-loader-core": "p2p-media-loader-core"
    }],
    3: [function(e, t, n) {
        t.exports.createHlsJsLoaderClass = function(e, t) {
            function n() {
                this.impl = new e(t.segmentManager), this.stats = this.impl.stats
            }
            return n.prototype.load = function(e, t, n) {
                this.context = e, this.impl.load(e, t, n)
            }, n.prototype.abort = function() {
                this.impl.abort(this.context)
            }, n.prototype.destroy = function() {
                this.context && this.impl.abort(this.context)
            }, n.getEngine = function() {
                return t
            }, n
        }
    }, {}],
    4: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.HlsJsLoader = class {
            constructor(e) {
                this.stats = {}, this.segmentManager = e
            }
            async load(e, t, n) {
                if (e.type) try {
                    const r = await this.segmentManager.loadPlaylist(e.url);
                    this.successPlaylist(r, e, n)
                } catch (t) {
                    this.error(t, e, n)
                } else if (e.frag) try {
                    const r = await this.segmentManager.loadSegment(e.url, null == e.rangeStart || null == e.rangeEnd ? void 0 : {
                        offset: e.rangeStart,
                        length: e.rangeEnd - e.rangeStart
                    });
                    void 0 !== r.content && setTimeout(() => this.successSegment(r.content, r.downloadBandwidth, e, n), 0)
                } catch (t) {
                    setTimeout(() => this.error(t, e, n), 0)
                } else console.warn("Unknown load request", e)
            }
            abort(e) {
                this.segmentManager.abortSegment(e.url, null == e.rangeStart || null == e.rangeEnd ? void 0 : {
                    offset: e.rangeStart,
                    length: e.rangeEnd - e.rangeStart
                })
            }
            successPlaylist(e, t, n) {
                const r = performance.now();
                this.stats.trequest = r - 300, this.stats.tfirst = r - 200, this.stats.tload = r, this.stats.loaded = e.response.length, n.onSuccess({
                    url: e.responseURL,
                    data: e.response
                }, this.stats, t)
            }
            successSegment(e, t, n, r) {
                const i = performance.now(),
                    s = e.byteLength / (void 0 === t || t <= 0 ? 12500 : t);
                this.stats.trequest = i - 1 - s, this.stats.tfirst = i - s, this.stats.tload = i, this.stats.loaded = e.byteLength, r.onSuccess({
                    url: n.url,
                    data: e
                }, this.stats, n)
            }
            error(e, t, n) {
                n.onError(e, t)
            }
        }
    }, {}],
    5: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const r = e("p2p-media-loader-core"),
            i = e("m3u8-parser"),
            s = {
                forwardSegmentCount: 20,
                swarmId: void 0,
                assetsStorage: void 0
            };
        n.SegmentManager = class {
            constructor(e, t = {}) {
                this.masterPlaylist = null, this.variantPlaylists = new Map, this.segmentRequest = null, this.playQueue = [], this.onSegmentLoaded = (e => {
                    this.segmentRequest && this.segmentRequest.segmentUrl === e.url && l(this.segmentRequest.segmentByterange) === e.range && (this.segmentRequest.onSuccess(e.data.slice(0), e.downloadBandwidth), this.segmentRequest = null)
                }), this.onSegmentError = ((e, t) => {
                    this.segmentRequest && this.segmentRequest.segmentUrl === e.url && l(this.segmentRequest.segmentByterange) === e.range && (this.segmentRequest.onError(t), this.segmentRequest = null)
                }), this.onSegmentAbort = (e => {
                    this.segmentRequest && this.segmentRequest.segmentUrl === e.url && l(this.segmentRequest.segmentByterange) === e.range && (this.segmentRequest.onError("Loading aborted: internal abort"), this.segmentRequest = null)
                }), this.settings = Object.assign(Object.assign({}, s), t), this.loader = e, this.loader.on(r.Events.SegmentLoaded, this.onSegmentLoaded), this.loader.on(r.Events.SegmentError, this.onSegmentError), this.loader.on(r.Events.SegmentAbort, this.onSegmentAbort)
            }
            getSettings() {
                return this.settings
            }
            processPlaylist(e, t, n) {
                const r = new i.Parser;
                r.push(t), r.end();
                const s = new o(e, n, r.manifest);
                if (s.manifest.playlists) {
                    this.masterPlaylist = s;
                    for (const [e, t] of this.variantPlaylists) {
                        const {
                            streamSwarmId: n,
                            found: r,
                            index: i
                        } = this.getStreamSwarmId(t.requestUrl);
                        r ? (t.streamSwarmId = n, t.streamId = "V" + i.toString()) : this.variantPlaylists.delete(e)
                    }
                } else {
                    const {
                        streamSwarmId: t,
                        found: n,
                        index: r
                    } = this.getStreamSwarmId(e);
                    (n || null === this.masterPlaylist) && (s.streamSwarmId = t, s.streamId = null === this.masterPlaylist ? void 0 : "V" + r.toString(), this.variantPlaylists.set(e, s), this.updateSegments())
                }
            }
            async loadPlaylist(e) {
                const t = this.settings.assetsStorage;
                let n;
                if (void 0 !== t) {
                    let r;
                    void 0 === (r = this.getMasterSwarmId()) && (r = e.split("?")[0]);
                    const i = await t.getAsset(e, void 0, r);
                    void 0 !== i ? n = {
                        responseURL: i.responseUri,
                        response: i.data
                    } : (n = await this.loadContent(e, "text"), t.storeAsset({
                        masterManifestUri: null !== this.masterPlaylist ? this.masterPlaylist.requestUrl : e,
                        masterSwarmId: r,
                        requestUri: e,
                        responseUri: n.responseURL,
                        data: n.response
                    }))
                } else n = await this.loadContent(e, "text");
                return this.processPlaylist(e, n.response, n.responseURL), n
            }
            async loadSegment(e, t) {
                const n = this.getSegmentLocation(e, t),
                    r = l(t);
                if (!n) {
                    let t;
                    const n = this.settings.assetsStorage;
                    if (void 0 !== n) {
                        let i, s = null !== this.masterPlaylist ? this.masterPlaylist.requestUrl : void 0;
                        if (void 0 === (i = this.getMasterSwarmId()) && 1 === this.variantPlaylists.size && (i = this.variantPlaylists.values().next().value.requestUrl.split("?")[0]), void 0 === s && 1 === this.variantPlaylists.size && (s = this.variantPlaylists.values().next().value.requestUrl), void 0 !== i && void 0 !== s) {
                            const o = await n.getAsset(e, r, i);
                            if (void 0 !== o) t = o.data;
                            else {
                                const o = await this.loadContent(e, "arraybuffer", r);
                                t = o.response, n.storeAsset({
                                    masterManifestUri: s,
                                    masterSwarmId: i,
                                    requestUri: e,
                                    requestRange: r,
                                    responseUri: o.responseURL,
                                    data: t
                                })
                            }
                        }
                    }
                    return void 0 === t && (t = (await this.loadContent(e, "arraybuffer", r)).response), {
                        content: t,
                        downloadBandwidth: 0
                    }
                }
                const i = (n.playlist.manifest.mediaSequence ? n.playlist.manifest.mediaSequence : 0) + n.segmentIndex;
                this.playQueue.length > 0 && this.playQueue[this.playQueue.length - 1].segmentSequence !== i - 1 && (this.playQueue = []), this.segmentRequest && this.segmentRequest.onError("Cancel segment request: simultaneous segment requests are not supported");
                const s = new Promise((r, s) => {
                    this.segmentRequest = new a(e, t, i, n.playlist.requestUrl, (e, t) => r({
                        content: e,
                        downloadBandwidth: t
                    }), e => s(e))
                });
                return this.playQueue.push({
                    segmentUrl: e,
                    segmentByterange: t,
                    segmentSequence: i
                }), this.loadSegments(n.playlist, n.segmentIndex, !0), s
            }
            setPlayingSegment(e, t, n, r) {
                const i = this.playQueue.findIndex(n => n.segmentUrl == e && u(n.segmentByterange, t));
                i >= 0 && (this.playQueue = this.playQueue.slice(i), this.playQueue[0].playPosition = {
                    start: n,
                    duration: r
                }, this.updateSegments())
            }
            setPlayingSegmentByCurrentTime(e) {
                if (0 === this.playQueue.length || !this.playQueue[0].playPosition) return;
                const t = this.playQueue[0].playPosition;
                t.start + t.duration - e < .2 && (this.playQueue = this.playQueue.slice(1), this.updateSegments())
            }
            abortSegment(e, t) {
                this.segmentRequest && this.segmentRequest.segmentUrl === e && u(this.segmentRequest.segmentByterange, t) && (this.segmentRequest.onSuccess(void 0, 0), this.segmentRequest = null)
            }
            async destroy() {
                this.segmentRequest && (this.segmentRequest.onError("Loading aborted: object destroyed"), this.segmentRequest = null), this.masterPlaylist = null, this.variantPlaylists.clear(), this.playQueue = [], void 0 !== this.settings.assetsStorage && await this.settings.assetsStorage.destroy(), await this.loader.destroy()
            }
            updateSegments() {
                if (!this.segmentRequest) return;
                const e = this.getSegmentLocation(this.segmentRequest.segmentUrl, this.segmentRequest.segmentByterange);
                e && this.loadSegments(e.playlist, e.segmentIndex, !1)
            }
            getSegmentLocation(e, t) {
                for (const n of this.variantPlaylists.values()) {
                    const r = n.getSegmentIndex(e, t);
                    if (r >= 0) return {
                        playlist: n,
                        segmentIndex: r
                    }
                }
            }
            async loadSegments(e, t, n) {
                const r = [],
                    i = e.manifest.segments,
                    s = e.manifest.mediaSequence ? e.manifest.mediaSequence : 0;
                let o = null,
                    a = Math.max(0, this.playQueue.length - 1);
                const u = this.getMasterSwarmId();
                for (let c = t; c < i.length && r.length < this.settings.forwardSegmentCount; ++c) {
                    const t = e.manifest.segments[c],
                        i = e.getSegmentAbsoluteUrl(t.uri),
                        d = t.byterange,
                        h = this.getSegmentId(e, s + c);
                    r.push({
                        id: h,
                        url: i,
                        masterSwarmId: void 0 !== u ? u : e.streamSwarmId,
                        masterManifestUri: null !== this.masterPlaylist ? this.masterPlaylist.requestUrl : e.requestUrl,
                        streamId: e.streamId,
                        sequence: (s + c).toString(),
                        range: l(d),
                        priority: a++
                    }), n && !o && (o = h)
                }
                if (this.loader.load(r, e.streamSwarmId), o) {
                    const e = await this.loader.getSegment(o);
                    e && this.onSegmentLoaded(e)
                }
            }
            getSegmentId(e, t) {
                return `${e.streamSwarmId}+${t}`
            }
            getMasterSwarmId() {
                const e = this.settings.swarmId && 0 !== this.settings.swarmId.length ? this.settings.swarmId : void 0;
                return void 0 !== e ? e : null !== this.masterPlaylist ? this.masterPlaylist.requestUrl.split("?")[0] : void 0
            }
            getStreamSwarmId(e) {
                const t = this.getMasterSwarmId();
                if (null !== this.masterPlaylist)
                    for (let n = 0; n < this.masterPlaylist.manifest.playlists.length; ++n)
                        if (new URL(this.masterPlaylist.manifest.playlists[n].uri, this.masterPlaylist.responseUrl).toString() === e) return {
                            streamSwarmId: `${t}+V${n}`,
                            found: !0,
                            index: n
                        };
                return {
                    streamSwarmId: void 0 !== t ? t : e.split("?")[0],
                    found: !1,
                    index: -1
                }
            }
            async loadContent(e, t, n) {
                return new Promise((r, i) => {
                    const s = new XMLHttpRequest;
                    s.open("GET", e, !0), s.responseType = t, n && s.setRequestHeader("Range", n), s.addEventListener("readystatechange", () => {
                        4 === s.readyState && (s.status >= 200 && s.status < 300 ? r(s) : i(s.statusText))
                    });
                    const o = this.loader.getSettings().xhrSetup;
                    o && o(s, e), s.send()
                })
            }
        };
        class o {
            constructor(e, t, n) {
                this.requestUrl = e, this.responseUrl = t, this.manifest = n, this.streamSwarmId = ""
            }
            getSegmentIndex(e, t) {
                for (let n = 0; n < this.manifest.segments.length; ++n) {
                    const r = this.manifest.segments[n];
                    if (e === this.getSegmentAbsoluteUrl(r.uri) && u(r.byterange, t)) return n
                }
                return -1
            }
            getSegmentAbsoluteUrl(e) {
                return new URL(e, this.responseUrl).toString()
            }
        }
        class a {
            constructor(e, t, n, r, i, s) {
                this.segmentUrl = e, this.segmentByterange = t, this.segmentSequence = n, this.playlistRequestUrl = r, this.onSuccess = i, this.onError = s
            }
        }

        function u(e, t) {
            return void 0 === e ? void 0 === t : void 0 !== t && e.length === t.length && e.offset === t.offset
        }

        function l(e) {
            if (void 0 === e) return;
            const t = e.offset + e.length - 1;
            return `bytes=${e.offset}-${t}`
        }
    }, {
        "m3u8-parser": 7,
        "p2p-media-loader-core": "p2p-media-loader-core"
    }],
    6: [function(e, t, n) {
        (function(e) {
            var n;
            n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = n
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    7: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, i = (r = e("global/window")) && "object" == typeof r && "default" in r ? r.default : r;

        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function o(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }
        var a = function() {
                function e() {
                    this.listeners = {}
                }
                var t = e.prototype;
                return t.on = function(e, t) {
                    this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
                }, t.off = function(e, t) {
                    if (!this.listeners[e]) return !1;
                    var n = this.listeners[e].indexOf(t);
                    return this.listeners[e].splice(n, 1), n > -1
                }, t.trigger = function(e) {
                    var t, n, r, i = this.listeners[e];
                    if (i)
                        if (2 === arguments.length)
                            for (n = i.length, t = 0; t < n; ++t) i[t].call(this, arguments[1]);
                        else
                            for (r = Array.prototype.slice.call(arguments, 1), n = i.length, t = 0; t < n; ++t) i[t].apply(this, r)
                }, t.dispose = function() {
                    this.listeners = {}
                }, t.pipe = function(e) {
                    this.on("data", function(t) {
                        e.push(t)
                    })
                }, e
            }(),
            u = function(e) {
                function t() {
                    var t;
                    return (t = e.call(this) || this).buffer = "", t
                }
                return o(t, e), t.prototype.push = function(e) {
                    var t;
                    for (this.buffer += e, t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1)
                }, t
            }(a),
            l = function(e) {
                for (var t, n = e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), r = {}, i = n.length; i--;) "" !== n[i] && ((t = /([^=]*)=(.*)/.exec(n[i]).slice(1))[0] = t[0].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"), r[t[0]] = t[1]);
                return r
            },
            c = function(e) {
                function t() {
                    var t;
                    return (t = e.call(this) || this).customParsers = [], t.tagMappers = [], t
                }
                o(t, e);
                var n = t.prototype;
                return n.push = function(e) {
                    var t, n, r = this;
                    0 !== (e = e.trim()).length && ("#" === e[0] ? this.tagMappers.reduce(function(t, n) {
                        var r = n(e);
                        return r === e ? t : t.concat([r])
                    }, [e]).forEach(function(e) {
                        for (var i = 0; i < r.customParsers.length; i++)
                            if (r.customParsers[i].call(r, e)) return;
                        if (0 === e.indexOf("#EXT"))
                            if (e = e.replace("\r", ""), t = /^#EXTM3U/.exec(e)) r.trigger("data", {
                                type: "tag",
                                tagType: "m3u"
                            });
                            else {
                                if (t = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "inf"
                                }, t[1] && (n.duration = parseFloat(t[1])), t[2] && (n.title = t[2]), void r.trigger("data", n);
                                if (t = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "targetduration"
                                }, t[1] && (n.duration = parseInt(t[1], 10)), void r.trigger("data", n);
                                if (t = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "totalduration"
                                }, t[1] && (n.duration = parseInt(t[1], 10)), void r.trigger("data", n);
                                if (t = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "version"
                                }, t[1] && (n.version = parseInt(t[1], 10)), void r.trigger("data", n);
                                if (t = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "media-sequence"
                                }, t[1] && (n.number = parseInt(t[1], 10)), void r.trigger("data", n);
                                if (t = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "discontinuity-sequence"
                                }, t[1] && (n.number = parseInt(t[1], 10)), void r.trigger("data", n);
                                if (t = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "playlist-type"
                                }, t[1] && (n.playlistType = t[1]), void r.trigger("data", n);
                                if (t = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "byterange"
                                }, t[1] && (n.length = parseInt(t[1], 10)), t[2] && (n.offset = parseInt(t[2], 10)), void r.trigger("data", n);
                                if (t = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return n = {
                                    type: "tag",
                                    tagType: "allow-cache"
                                }, t[1] && (n.allowed = !/NO/.test(t[1])), void r.trigger("data", n);
                                if (t = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
                                    if (n = {
                                            type: "tag",
                                            tagType: "map"
                                        }, t[1]) {
                                        var s = l(t[1]);
                                        if (s.URI && (n.uri = s.URI), s.BYTERANGE) {
                                            var o = s.BYTERANGE.split("@"),
                                                a = o[0],
                                                u = o[1];
                                            n.byterange = {}, a && (n.byterange.length = parseInt(a, 10)), u && (n.byterange.offset = parseInt(u, 10))
                                        }
                                    }
                                    r.trigger("data", n)
                                } else if (t = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
                                    if (n = {
                                            type: "tag",
                                            tagType: "stream-inf"
                                        }, t[1]) {
                                        if (n.attributes = l(t[1]), n.attributes.RESOLUTION) {
                                            var c = n.attributes.RESOLUTION.split("x"),
                                                d = {};
                                            c[0] && (d.width = parseInt(c[0], 10)), c[1] && (d.height = parseInt(c[1], 10)), n.attributes.RESOLUTION = d
                                        }
                                        n.attributes.BANDWIDTH && (n.attributes.BANDWIDTH = parseInt(n.attributes.BANDWIDTH, 10)), n.attributes["PROGRAM-ID"] && (n.attributes["PROGRAM-ID"] = parseInt(n.attributes["PROGRAM-ID"], 10))
                                    }
                                    r.trigger("data", n)
                                } else {
                                    if (t = /^#EXT-X-MEDIA:?(.*)$/.exec(e)) return n = {
                                        type: "tag",
                                        tagType: "media"
                                    }, t[1] && (n.attributes = l(t[1])), void r.trigger("data", n);
                                    if (t = /^#EXT-X-ENDLIST/.exec(e)) r.trigger("data", {
                                        type: "tag",
                                        tagType: "endlist"
                                    });
                                    else if (t = /^#EXT-X-DISCONTINUITY/.exec(e)) r.trigger("data", {
                                        type: "tag",
                                        tagType: "discontinuity"
                                    });
                                    else {
                                        if (t = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)) return n = {
                                            type: "tag",
                                            tagType: "program-date-time"
                                        }, t[1] && (n.dateTimeString = t[1], n.dateTimeObject = new Date(t[1])), void r.trigger("data", n);
                                        if (t = /^#EXT-X-KEY:?(.*)$/.exec(e)) return n = {
                                            type: "tag",
                                            tagType: "key"
                                        }, t[1] && (n.attributes = l(t[1]), n.attributes.IV && ("0x" === n.attributes.IV.substring(0, 2).toLowerCase() && (n.attributes.IV = n.attributes.IV.substring(2)), n.attributes.IV = n.attributes.IV.match(/.{8}/g), n.attributes.IV[0] = parseInt(n.attributes.IV[0], 16), n.attributes.IV[1] = parseInt(n.attributes.IV[1], 16), n.attributes.IV[2] = parseInt(n.attributes.IV[2], 16), n.attributes.IV[3] = parseInt(n.attributes.IV[3], 16), n.attributes.IV = new Uint32Array(n.attributes.IV))), void r.trigger("data", n);
                                        if (t = /^#EXT-X-START:?(.*)$/.exec(e)) return n = {
                                            type: "tag",
                                            tagType: "start"
                                        }, t[1] && (n.attributes = l(t[1]), n.attributes["TIME-OFFSET"] = parseFloat(n.attributes["TIME-OFFSET"]), n.attributes.PRECISE = /YES/.test(n.attributes.PRECISE)), void r.trigger("data", n);
                                        if (t = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)) return n = {
                                            type: "tag",
                                            tagType: "cue-out-cont"
                                        }, t[1] ? n.data = t[1] : n.data = "", void r.trigger("data", n);
                                        if (t = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)) return n = {
                                            type: "tag",
                                            tagType: "cue-out"
                                        }, t[1] ? n.data = t[1] : n.data = "", void r.trigger("data", n);
                                        if (t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e)) return n = {
                                            type: "tag",
                                            tagType: "cue-in"
                                        }, t[1] ? n.data = t[1] : n.data = "", void r.trigger("data", n);
                                        r.trigger("data", {
                                            type: "tag",
                                            data: e.slice(4)
                                        })
                                    }
                                }
                            }
                        else r.trigger("data", {
                            type: "comment",
                            text: e.slice(1)
                        })
                    }) : this.trigger("data", {
                        type: "uri",
                        uri: e
                    }))
                }, n.addParser = function(e) {
                    var t = this,
                        n = e.expression,
                        r = e.customType,
                        i = e.dataParser,
                        s = e.segment;
                    "function" != typeof i && (i = function(e) {
                        return e
                    }), this.customParsers.push(function(e) {
                        if (n.exec(e)) return t.trigger("data", {
                            type: "custom",
                            data: i(e),
                            customType: r,
                            segment: s
                        }), !0
                    })
                }, n.addTagMapper = function(e) {
                    var t = e.expression,
                        n = e.map;
                    this.tagMappers.push(function(e) {
                        return t.test(e) ? n(e) : e
                    })
                }, t
            }(a),
            d = function(e) {
                function t() {
                    var t;
                    (t = e.call(this) || this).lineStream = new u, t.parseStream = new c, t.lineStream.pipe(t.parseStream);
                    var n, r, o = function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(t),
                        a = [],
                        l = {},
                        d = {
                            AUDIO: {},
                            VIDEO: {},
                            "CLOSED-CAPTIONS": {},
                            SUBTITLES: {}
                        },
                        h = 0;
                    return t.manifest = {
                        allowCache: !0,
                        discontinuityStarts: [],
                        segments: []
                    }, t.parseStream.on("data", function(e) {
                        var t, u;
                        ({
                            tag: function() {
                                ({
                                    "allow-cache": function() {
                                        this.manifest.allowCache = e.allowed, "allowed" in e || (this.trigger("info", {
                                            message: "defaulting allowCache to YES"
                                        }), this.manifest.allowCache = !0)
                                    },
                                    byterange: function() {
                                        var t = {};
                                        "length" in e && (l.byterange = t, t.length = e.length, "offset" in e || (this.trigger("info", {
                                            message: "defaulting offset to zero"
                                        }), e.offset = 0)), "offset" in e && (l.byterange = t, t.offset = e.offset)
                                    },
                                    endlist: function() {
                                        this.manifest.endList = !0
                                    },
                                    inf: function() {
                                        "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                            message: "defaulting media sequence to zero"
                                        })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                            message: "defaulting discontinuity sequence to zero"
                                        })), e.duration > 0 && (l.duration = e.duration), 0 === e.duration && (l.duration = .01, this.trigger("info", {
                                            message: "updating zero segment duration to a small value"
                                        })), this.manifest.segments = a
                                    },
                                    key: function() {
                                        if (e.attributes)
                                            if ("NONE" !== e.attributes.METHOD)
                                                if (e.attributes.URI) {
                                                    if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === e.attributes.KEYFORMAT) return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(e.attributes.METHOD) ? void this.trigger("warn", {
                                                        message: "invalid key method provided for Widevine"
                                                    }) : ("SAMPLE-AES-CENC" === e.attributes.METHOD && this.trigger("warn", {
                                                        message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                                                    }), "data:text/plain;base64," !== e.attributes.URI.substring(0, 23) ? void this.trigger("warn", {
                                                        message: "invalid key URI provided for Widevine"
                                                    }) : e.attributes.KEYID && "0x" === e.attributes.KEYID.substring(0, 2) ? void(this.manifest.contentProtection = {
                                                        "com.widevine.alpha": {
                                                            attributes: {
                                                                schemeIdUri: e.attributes.KEYFORMAT,
                                                                keyId: e.attributes.KEYID.substring(2)
                                                            },
                                                            pssh: function(e) {
                                                                for (var t = i.atob(e || ""), n = new Uint8Array(t.length), r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
                                                                return n
                                                            }(e.attributes.URI.split(",")[1])
                                                        }
                                                    }) : void this.trigger("warn", {
                                                        message: "invalid key ID provided for Widevine"
                                                    }));
                                                    e.attributes.METHOD || this.trigger("warn", {
                                                        message: "defaulting key method to AES-128"
                                                    }), r = {
                                                        method: e.attributes.METHOD || "AES-128",
                                                        uri: e.attributes.URI
                                                    }, void 0 !== e.attributes.IV && (r.iv = e.attributes.IV)
                                                } else this.trigger("warn", {
                                                    message: "ignoring key declaration without URI"
                                                });
                                        else r = null;
                                        else this.trigger("warn", {
                                            message: "ignoring key declaration without attribute list"
                                        })
                                    },
                                    "media-sequence": function() {
                                        isFinite(e.number) ? this.manifest.mediaSequence = e.number : this.trigger("warn", {
                                            message: "ignoring invalid media sequence: " + e.number
                                        })
                                    },
                                    "discontinuity-sequence": function() {
                                        isFinite(e.number) ? (this.manifest.discontinuitySequence = e.number, h = e.number) : this.trigger("warn", {
                                            message: "ignoring invalid discontinuity sequence: " + e.number
                                        })
                                    },
                                    "playlist-type": function() {
                                        /VOD|EVENT/.test(e.playlistType) ? this.manifest.playlistType = e.playlistType : this.trigger("warn", {
                                            message: "ignoring unknown playlist type: " + e.playlist
                                        })
                                    },
                                    map: function() {
                                        n = {}, e.uri && (n.uri = e.uri), e.byterange && (n.byterange = e.byterange)
                                    },
                                    "stream-inf": function() {
                                        this.manifest.playlists = a, this.manifest.mediaGroups = this.manifest.mediaGroups || d, e.attributes ? (l.attributes || (l.attributes = {}), s(l.attributes, e.attributes)) : this.trigger("warn", {
                                            message: "ignoring empty stream-inf attributes"
                                        })
                                    },
                                    media: function() {
                                        if (this.manifest.mediaGroups = this.manifest.mediaGroups || d, e.attributes && e.attributes.TYPE && e.attributes["GROUP-ID"] && e.attributes.NAME) {
                                            var n = this.manifest.mediaGroups[e.attributes.TYPE];
                                            n[e.attributes["GROUP-ID"]] = n[e.attributes["GROUP-ID"]] || {}, t = n[e.attributes["GROUP-ID"]], (u = {
                                                default: /yes/i.test(e.attributes.DEFAULT)
                                            }).default ? u.autoselect = !0 : u.autoselect = /yes/i.test(e.attributes.AUTOSELECT), e.attributes.LANGUAGE && (u.language = e.attributes.LANGUAGE), e.attributes.URI && (u.uri = e.attributes.URI), e.attributes["INSTREAM-ID"] && (u.instreamId = e.attributes["INSTREAM-ID"]), e.attributes.CHARACTERISTICS && (u.characteristics = e.attributes.CHARACTERISTICS), e.attributes.FORCED && (u.forced = /yes/i.test(e.attributes.FORCED)), t[e.attributes.NAME] = u
                                        } else this.trigger("warn", {
                                            message: "ignoring incomplete or missing media group"
                                        })
                                    },
                                    discontinuity: function() {
                                        h += 1, l.discontinuity = !0, this.manifest.discontinuityStarts.push(a.length)
                                    },
                                    "program-date-time": function() {
                                        void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = e.dateTimeString, this.manifest.dateTimeObject = e.dateTimeObject), l.dateTimeString = e.dateTimeString, l.dateTimeObject = e.dateTimeObject
                                    },
                                    targetduration: function() {
                                        !isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {
                                            message: "ignoring invalid target duration: " + e.duration
                                        }) : this.manifest.targetDuration = e.duration
                                    },
                                    totalduration: function() {
                                        !isFinite(e.duration) || e.duration < 0 ? this.trigger("warn", {
                                            message: "ignoring invalid total duration: " + e.duration
                                        }) : this.manifest.totalDuration = e.duration
                                    },
                                    start: function() {
                                        e.attributes && !isNaN(e.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                                            timeOffset: e.attributes["TIME-OFFSET"],
                                            precise: e.attributes.PRECISE
                                        } : this.trigger("warn", {
                                            message: "ignoring start declaration without appropriate attribute list"
                                        })
                                    },
                                    "cue-out": function() {
                                        l.cueOut = e.data
                                    },
                                    "cue-out-cont": function() {
                                        l.cueOutCont = e.data
                                    },
                                    "cue-in": function() {
                                        l.cueIn = e.data
                                    }
                                } [e.tagType] || function() {}).call(o)
                            },
                            uri: function() {
                                l.uri = e.uri, a.push(l), !this.manifest.targetDuration || "duration" in l || (this.trigger("warn", {
                                    message: "defaulting segment duration to the target duration"
                                }), l.duration = this.manifest.targetDuration), r && (l.key = r), l.timeline = h, n && (l.map = n), l = {}
                            },
                            comment: function() {},
                            custom: function() {
                                e.segment ? (l.custom = l.custom || {}, l.custom[e.customType] = e.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[e.customType] = e.data)
                            }
                        })[e.type].call(o)
                    }), t
                }
                o(t, e);
                var n = t.prototype;
                return n.push = function(e) {
                    this.lineStream.push(e)
                }, n.end = function() {
                    this.lineStream.push("\n")
                }, n.addParser = function(e) {
                    this.parseStream.addParser(e)
                }, n.addTagMapper = function(e) {
                    this.parseStream.addTagMapper(e)
                }, t
            }(a);
        n.LineStream = u, n.ParseStream = c, n.Parser = d
    }, {
        "global/window": 6
    }],
    "p2p-media-loader-hlsjs": [function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t])
        }

        function i(e) {
            e && e.config && e.config.loader && "function" == typeof e.config.loader.getEngine && s(e, e.config.loader.getEngine())
        }

        function s(e, t) {
            e.on("hlsFragChanged", (e, n) => {
                const r = n.frag,
                    i = 2 !== r.byteRange.length ? void 0 : {
                        offset: r.byteRange[0],
                        length: r.byteRange[1] - r.byteRange[0]
                    };
                t.setPlayingSegment(r.url, i, r.start, r.duration)
            }), e.on("hlsDestroying", async () => {
                await t.destroy()
            }), e.on("hlsError", (n, r) => {
                if ("bufferStalledError" === r.details) {
                    const n = void 0 === e.media ? e.el_ : e.media;
                    if (void 0 === n) return;
                    t.setPlayingSegmentByCurrentTime(n.currentTime)
                }
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.version = "0.6.2", r(e("./engine")), r(e("./segment-manager")), n.initHlsJsPlayer = i, n.initClapprPlayer = function(e) {
            e.on("play", () => {
                const t = e.core.getCurrentPlayback();
                t._hls && !t._hls._p2pm_linitialized && (t._hls._p2pm_linitialized = !0, i(e.core.getCurrentPlayback()._hls))
            })
        }, n.initFlowplayerHlsJsPlayer = function(e) {
            e.on("ready", () => i(e.engine.hlsjs ? e.engine.hlsjs : e.engine.hls))
        }, n.initVideoJsContribHlsJsPlayer = function(e) {
            e.ready(() => {
                const t = e.tech_.options_;
                t && t.hlsjsConfig && t.hlsjsConfig.loader && "function" == typeof t.hlsjsConfig.loader.getEngine && s(e.tech_, t.hlsjsConfig.loader.getEngine())
            })
        }, n.initVideoJsHlsJsPlugin = function() {
            null != videojs && null != videojs.Html5Hlsjs && videojs.Html5Hlsjs.addHook("beforeinitialize", (e, t) => {
                t.config && t.config.loader && "function" == typeof t.config.loader.getEngine && s(t, t.config.loader.getEngine())
            })
        }, n.initMediaElementJsPlayer = function(e) {
            e.addEventListener("hlsFragChanged", t => {
                const n = e.hlsPlayer;
                if (n && n.config && n.config.loader && "function" == typeof n.config.loader.getEngine) {
                    const e = n.config.loader.getEngine();
                    if (t.data && t.data.length > 1) {
                        const n = t.data[1].frag,
                            r = 2 !== n.byteRange.length ? void 0 : {
                                offset: n.byteRange[0],
                                length: n.byteRange[1] - n.byteRange[0]
                            };
                        e.setPlayingSegment(n.url, r, n.start, n.duration)
                    }
                }
            }), e.addEventListener("hlsDestroying", async () => {
                const t = e.hlsPlayer;
                if (t && t.config && t.config.loader && "function" == typeof t.config.loader.getEngine) {
                    const e = t.config.loader.getEngine();
                    await e.destroy()
                }
            }), e.addEventListener("hlsError", t => {
                const n = e.hlsPlayer;
                n && n.config && n.config.loader && "function" == typeof n.config.loader.getEngine && void 0 !== t.data && "bufferStalledError" === t.data.details && n.config.loader.getEngine().setPlayingSegmentByCurrentTime(n.media.currentTime)
            })
        }, n.initJwPlayer = function(e, t) {
            const n = setInterval(() => {
                e.hls && e.hls.config && (clearInterval(n), Object.assign(e.hls.config, t), i(e.hls))
            }, 200)
        }
    }, {
        "./engine": 2,
        "./segment-manager": 5
    }]
}, {}, [1]);
var customTracker = window.trackers || [],
    loadBalanceServer = window.lbs || null,
    isRedirect = window.isRedirect || !1,
    isgoogleProxy = window.googleProxy || !1;
let proxies = [];

function generateHls(e, t) {
    let n = "#EXTM3U\n";
    n += "#EXT-X-VERSION:3\n", n += `#EXT-X-TARGETDURATION:${e.targetDuration}\n`, n += `#EXT-X-MEDIA-SEQUENCE:${e.mediaSequence}\n`;
    for (var r = e.segments, i = window.location.protocol, s = 0; s < r.length; s++) {
        let e = r[s],
            o = "/" + e.url.split("/").slice(3, 5).join("/"),
            a = e.url.split("//")[1];
        n += `#EXTINF:${e.inf.duration},\n`, n += t ? i + "//" + t + o + "\n" : i + "//" + a + "\n"
    }
    return n += "#EXT-X-ENDLIST", window.URL.createObjectURL(new Blob([n], {
        type: "application/x-mpegurl"
    }))
}
async function generate_master(e) {
    var t = "#EXTM3U\n";
    t += "#EXT-X-VERSION:3\n";
    for (var n = e.segments, r = 0; r < n.length; r++) {
        var i = n[r].streamInf.bandwidth,
            s = n[r].streamInf.resolution;
        switch (s) {
            case 1920:
                s = "1920x1080";
                break;
            case 1280:
                s = "1280x720";
                break;
            case 842:
                s = "842x480";
                break;
            case 640:
                s = "640x360"
        }
        var o = n[r].url.split("/")[2];
        i || (i = 15e5), t += `#EXT-X-STREAM-INF:BANDWIDTH=${i},RESOLUTION=${s}\n`;
        var a = await xhrCallbackSync("/get-hls-json/" + o);
        a && (t += `${generateHls(a)}\n`)
    }
    return window.URL.createObjectURL(new Blob([t], {
        type: "application/x-mpegURL"
    }))
}

function xhrCallback(e, t) {
    const n = new XMLHttpRequest;
    n.open("GET", e, !0), n.timeout = 8e3, n.responseType = "text", n.onreadystatechange = function() {
        4 === n.readyState && (200 === n.status ? t(JSON.parse(n.response)) : t(!1))
    }, n.send()
}
async function xhrCallbackSync(e) {
    const t = await fetch(e, {
        headers: {
            "x-proxy-pass": Date.now()
        }
    });
    return 200 === t.status ? t.json() : null
}

function proxiesCallback(e) {
    let t = window.location,
        n = (window.domainApi || "") + "/proxiesIndex?uid=" + t.pathname + t.search;
    const r = new XMLHttpRequest;
    r.open("GET", n, !0), r.responseType = "text", r.onreadystatechange = function() {
        4 === r.readyState && (200 === r.status ? e(r.response) : e(!1))
    }, r.send()
}
window.runProxy && proxiesCallback(e => {
    proxies = e ? JSON.parse(e) : []
});
var jwPlayerConfig = {
        segments: {
            forwardSegmentCount: 50
        },
        loader: {
            cachedSegmentExpiration: 864e5,
            cachedSegmentsCount: 1e3,
            requiredSegmentsPriority: window.segmentPerRequest || 3,
            httpDownloadMaxPriority: 9,
            httpDownloadProbability: .06,
            httpDownloadProbabilityInterval: 1e3,
            httpDownloadProbabilitySkipIfNoPeers: !0,
            p2pDownloadMaxPriority: 50,
            httpFailedSegmentTimeout: 1e3,
            simultaneousP2PDownloads: 20,
            simultaneousHttpDownloads: 3,
            requestTimeOut: 5e3,
            segmentUrlBuilder: function(e) {
                var t = e.url;
                if (isgoogleProxy) {
                    var n = "https://hls-storage-" + (Math.floor(100 * Math.random()) + 1) + "-cdn-opensocial.googleusercontent.com/gadgets/proxy?container=cdn&refresh=31536000&url=";
                    if (proxies.length) {
                        var r = proxies[Math.floor(Math.random() * proxies.length)],
                            i = window.location.protocol + "//" + r.ip_address + "/?url=" + encodeURIComponent(t);
                        return e.proxyServer = i, isRedirect ? (window.domainApi || "") + "/redirect/?url=" + i : n + encodeURIComponent(i)
                    }
                    return isRedirect ? (window.domainApi || "") + "/redirect/?url=" + t : n + encodeURIComponent(t)
                }
                return proxies.length ? (i = "//" + (r = proxies[Math.floor(Math.random() * proxies.length)]).ip_address + "/?url=" + encodeURIComponent(t), e.proxyServer = i, i) : loadBalanceServer ? loadBalanceServer + "/?url=" + encodeURIComponent(t) : t
            },
            disableRetry: window.disableRetry || !1,
            httpUseRanges: !0,
            domainApi: window.domainApi || "",
            trackerAnnounce: ["wss://tracker.77player.xyz", "wss://tracker.sloppyta.co:443/announce", "wss://tracker.one3up.com", "wss://tracker.feplayer.net", "wss://tracker.movies-store.com", "wss://echo.websocket.org", "wss://tracker.openwebtorrent.com"],
            xhrSetup: function(e, t) {
                e.setRequestHeader("x-proxy-pass", Date.now())
            }
        },
        rtcConfig: {
            iceServers: [{
                urls: "stun:stun2.l.google.com:19302"
            }, {
                urls: "stun:stun3.l.google.com:19302"
            }, {
                urls: "stun:stun4.l.google.com:19302"
            }]
        }
    },
    _ENGINE = new p2pml.hlsjs.Engine(jwPlayerConfig);

function ExCdnPlayer(e) {
    var t = jwplayer(e);
    return jwplayer_hls_provider.attach(), p2pml.hlsjs.initJwPlayer(t, {
        liveSyncDurationCount: 7,
        loader: _ENGINE.createLoaderClass()
    }), t
}

function onp2p() {
    return _ENGINE.on("peer_connect", e => console.log("peer_connect", e.id, e.remoteAddress)), _ENGINE.on("peer_close", e => console.log("peer_close", e)), _ENGINE.on("segment_loaded", (e, t) => console.log("segment_loaded from", t ? `peer ${t}` : "HTTP", e.url)), "show p2p chart"
}
