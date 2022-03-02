(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var p=ba(this);function q(a,b){if(b)a:{var c=p;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&m(c,a,{configurable:!0,writable:!0,value:b})}}
q("Symbol",function(a){function b(l){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(l||"")+"_"+g++,l)}function c(l,e){this.g=l;m(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",g=0;return b});function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},v;if("function"==typeof Object.setPrototypeOf)v=Object.setPrototypeOf;else{var w;a:{var da={a:!0},x={};try{x.__proto__=da;w=x.a;break a}catch(a){}w=!1}v=w?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var y=v;
function z(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(y)y(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.J=b.prototype}
q("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.v=!1;var f=this.l();try{e(f.resolve,f.reject)}catch(h){f.reject(h)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(f){f(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var f=this;this.i(function(){f.m()})}this.g.push(e)};var g=p.setTimeout;c.prototype.i=function(e){g(e,0)};c.prototype.m=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var f=0;f<e.length;++f){var h=
e[f];e[f]=null;try{h()}catch(k){this.l(k)}}}this.g=null};c.prototype.l=function(e){this.i(function(){throw e;})};b.prototype.l=function(){function e(k){return function(n){h||(h=!0,k.call(f,n))}}var f=this,h=!1;return{resolve:e(this.C),reject:e(this.m)}};b.prototype.C=function(e){if(e===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.F(e);else{a:switch(typeof e){case "object":var f=null!=e;break a;case "function":f=!0;break a;default:f=!1}f?this.B(e):this.u(e)}};
b.prototype.B=function(e){var f=void 0;try{f=e.then}catch(h){this.m(h);return}"function"==typeof f?this.G(f,e):this.u(e)};b.prototype.m=function(e){this.A(2,e)};b.prototype.u=function(e){this.A(1,e)};b.prototype.A=function(e,f){if(0!=this.h)throw Error("Cannot settle("+e+", "+f+"): Promise already settled in state"+this.h);this.h=e;this.i=f;2===this.h&&this.D();this.H()};b.prototype.D=function(){var e=this;g(function(){if(e.I()){var f=p.console;"undefined"!==typeof f&&f.error(e.i)}},1)};b.prototype.I=
function(){if(this.v)return!1;var e=p.CustomEvent,f=p.Event,h=p.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof f?e=new f("unhandledrejection",{cancelable:!0}):(e=p.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return h(e)};b.prototype.H=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)l.h(this.g[e]);this.g=null}};var l=new c;b.prototype.F=
function(e){var f=this.l();e.o(f.resolve,f.reject)};b.prototype.G=function(e,f){var h=this.l();try{e.call(f,h.resolve,h.reject)}catch(k){h.reject(k)}};b.prototype.then=function(e,f){function h(r,u){return"function"==typeof r?function(I){try{k(r(I))}catch(J){n(J)}}:u}var k,n,K=new b(function(r,u){k=r;n=u});this.o(h(e,k),h(f,n));return K};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.o=function(e,f){function h(){switch(k.h){case 1:e(k.i);break;case 2:f(k.i);break;default:throw Error("Unexpected state: "+
k.h);}}var k=this;null==this.g?l.h(h):this.g.push(h);this.v=!0};b.resolve=d;b.reject=function(e){return new b(function(f,h){h(e)})};b.race=function(e){return new b(function(f,h){for(var k=t(e),n=k.next();!n.done;n=k.next())d(n.value).o(f,h)})};b.all=function(e){var f=t(e),h=f.next();return h.done?d([]):new b(function(k,n){function K(I){return function(J){r[I]=J;u--;0==u&&k(r)}}var r=[],u=0;do r.push(void 0),u++,d(h.value).o(K(r.length-1),n),h=f.next();while(!h.done)})};return b});var A=this||self;
function B(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};var C={},D=null;var E="function"===typeof Uint8Array;var F="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function G(a,b){Object.isFrozen(a)||(F?a[F]|=b:void 0!==a.s?a.s|=b:Object.defineProperties(a,{s:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function ea(a){var b;F?b=a[F]:b=a.s;return null==b?0:b}function H(a){G(a,1);return a}function fa(a){return Array.isArray(a)?!!(ea(a)&2):!1};function ha(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var ia=Object.freeze(H([]));function ja(a){if(fa(a.j))throw Error("Cannot mutate an immutable Message");}var ka="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function la(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function L(a,b,c){return-1===b?null:b>=a.i?a.g?a.g[b]:void 0:(void 0===c?0:c)&&a.g&&(c=a.g[b],null!=c)?c:a.j[b+a.h]}function ma(a,b,c,d,g){d=void 0===d?!1:d;(void 0===g?0:g)||ja(a);b<a.i&&!d?a.j[b+a.h]=c:(a.g||(a.g=a.j[a.i+a.h]={}))[b]=c}function na(a,b){a=L(a,b);return null==a?a:!!a}function oa(a){a=L(a,3);return null==a?0:a}function pa(a){a=na(a,1);return null==a?!1:a}function M(a,b,c,d){ja(a);c!==d?ma(a,b,c):ma(a,b,void 0,!1,!1)}
function N(a,b,c){if(-1===c)return null;a.l||(a.l={});var d=a.l[c];if(d)return d;var g=L(a,c,!1);if(null==g)return d;b=new b(g);if(fa(a.j)){d=b.j;if(!Array.isArray(d))throw Error("cannot mark non-array as immutable");G(d,2)}return a.l[c]=b};function qa(a){var b=ra;b=void 0===b?sa:b;return ta(a,b)}function ua(a,b){if(null!=a){if(Array.isArray(a))a=ta(a,b);else if(ha(a)){var c={},d;for(d in a)c[d]=ua(a[d],b);a=c}else a=b(a);return a}}function ta(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=ua(c[d],b);Array.isArray(a)&&ea(a)&1&&H(c);return c}
function ra(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(a&&!Array.isArray(a)&&E&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!D){D={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var l=c.concat(d[g].split(""));C[g]=l;for(var e=0;e<l.length;e++){var f=l[e];void 0===D[f]&&(D[f]=e)}}}b=C[b];c=Array(Math.floor(a.length/
3));d=b[64]||"";for(g=l=0;l<a.length-2;l+=3){var h=a[l],k=a[l+1];f=a[l+2];e=b[h>>2];h=b[(h&3)<<4|k>>4];k=b[(k&15)<<2|f>>6];f=b[f&63];c[g++]=e+h+k+f}e=0;f=d;switch(a.length-l){case 2:e=a[l+1],f=b[(e&15)<<2]||d;case 1:a=a[l],c[g]=b[a>>2]+b[(a&3)<<4|e>>4]+f+d}a=c.join("")}}return Array.isArray(a)?qa(a):a}function sa(a){return E&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};function va(a){A.setTimeout(function(){throw a;},0)};function O(a,b,c){a||(a=P);P=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.h=(d?0:-1)-(this.constructor.g||0);this.l=void 0;this.j=a;a:{d=this.j.length;a=d-1;if(d&&(d=this.j[a],ha(d))){this.i=a-this.h;this.g=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.h,(d=this.j[a])?Array.isArray(d)&&H(d):this.j[a]=ia;else{d=this.g||(this.g=this.j[this.i+this.h]={});var g=d[a];g?Array.isArray(g)&&H(g):
d[a]=ia}}O.prototype.toJSON=function(){return qa(this.j)};function wa(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b)){var c=typeof b;va(Error("Expected to deserialize an Array but got "+("object"!=c?c:b?Array.isArray(b)?"array":c:"null")+": "+b))}P=b;a=new a(b);P=null;return a}O.prototype.toString=function(){return this.j.toString()};var P;function Q(){O.apply(this,arguments)}z(Q,O);function R(){Q.apply(this,arguments)}z(R,Q);if(ka){var xa={};Object.defineProperties(Q,(xa[Symbol.hasInstance]=la(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),xa));var ya={};Object.defineProperties(R,(ya[Symbol.hasInstance]=la(Object[Symbol.hasInstance]),ya))};function S(a){R.call(this,a,-1,za)}z(S,R);var za=[8];function T(a){R.call(this,a,-1,Aa)}z(T,R);var Aa=[17];function Ba(a){R.call(this,a,-1,Ca)}z(Ba,R);var Ca=[27];function Da(a){R.call(this,a)}z(Da,R);function Ea(a){R.call(this,a,-1,Fa)}z(Ea,R);var Fa=[1,2,3,6];function Ga(a){R.call(this,a,-1,Ha)}z(Ga,R);var Ha=[12];/*

 SPDX-License-Identifier: Apache-2.0
*/
function U(a,b){a=a.getElementsByTagName("META");for(var c=0;c<a.length;++c)if(a[c].getAttribute("name")===b)return a[c].getAttribute("content")||"";return""};function Ia(a,b){this.head=a;this.body=b;this.g=[];this.h={};U(b,"sampling_mod");a=U(b,"namespace");if(!a){a=Math.random;a="ns-"+a().toString(36).substr(2,5);a:{var c=void 0===c?0:c;for(var d=b.getElementsByTagName("META"),g=0;g<d.length;++g)if("namespace"===d[g].getAttribute("name")&&d[g].getAttribute("index")===c.toString()){d[g].setAttribute("content",a);break a}d=b.querySelector("#mys-meta");d||(d=document.createElement("div"),d.id="mys-meta",d.style.position="absolute",d.style.display="none",
b.appendChild(d));b=document.createElement("META");b.setAttribute("name","namespace");b.setAttribute("content",a);b.setAttribute("index",c.toString());d.appendChild(b)}}Ja(this);!this.h.hasOwnProperty("META_LOCKED")&&(c=U(this.body,"custom_flags"))&&(this.h=JSON.parse(c))}
function V(a,b){a=a.body;var c={detail:void 0};c=void 0===c?{}:c;if("function"===typeof window.CustomEvent)var d=new CustomEvent(b,c);else d=document.createEvent("CustomEvent"),d.initCustomEvent(b,!!c.bubbles,!!c.cancelable,c.detail);a.dispatchEvent(d)}Ia.prototype.addEventListener=function(a,b){this.body.addEventListener(a,b)};function Ja(a){if(!(0<a.g.length)){var b=U(a.body,"environment");b=t(b.split("|"));for(var c=b.next();!c.done;c=b.next())(c=c.value)&&a.g.push(c)}};function Ka(a){R.call(this,a)}z(Ka,R);function La(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function Ma(a,b){this.context=a;this.i=b;this.h=La("SPAN");this.g=La("DIV");this.h.style.fontSize="6px";this.h.textContent="go";this.g.style.position="absolute";this.g.style.top="100%";this.g.style.left="100%";this.g.style.width="1px";this.g.style.height="0";this.g.style.overflow="hidden";this.g.style.visibility="hidden";this.g.appendChild(this.h)}
Ma.prototype.wait=function(){var a=this;if(!pa(this.i)&&(V(this.context,"spanStart"),this.context.body.appendChild(this.g),!Na(this)))return new Promise(function(b){var c=setInterval(function(){Na(a)&&(clearInterval(c),b())},oa(a.i))})};function Na(a){if(1>=a.h.offsetWidth||1>=a.h.offsetHeight)return!1;a.g.remove();V(a.context,"spanReady");return!0};function Oa(a,b){this.context=a;this.h=N(b,Ba,1);this.g=N(b,S,12)||new S;N(this.h,T,10)||new T};function W(){this.channel=3;(this.g=!(!window.mys||!window.mys.pingback))&&this.setData(43,Date.now()-window.mys.pingback.getBaseTime())}W.prototype.setAttribute=function(a,b){this.g&&window.mys.pingback.setAttribute(a,b)};W.prototype.setData=function(a,b){this.g&&window.mys.pingback.setData(a,b,this.channel)};W.prototype.send=function(a){this.g&&window.mys.pingback.send(a)};function X(a,b){this.context=a;this.l=b;new Ga;this.g=0;this.pingback=new W}function Pa(a){a.g&=-31}function Y(a,b){a.g|=b}X.prototype.h=function(){};function Qa(a,b,c,d){this.g=d(a,b,c);this.context=this.g.context}function Ra(a){wa(Ea,U(a.context.body,"engine_msg")||"[]");return a.g.h()||Promise.resolve()}
Qa.prototype.init=function(){var a=this,b;Pa(this.g);Y(this.g,1);null===(b=window.AFMA_Communicator)||void 0===b?void 0:b.addEventListener("onshow",function(){Y(a.g,32)});var c=0,d=this.context.body;d.addEventListener("browserRender",function(){++c;if(1===c)V(a.context,"overallStart"),Ra(a).then(function(){V(a.context,"overallQuiet")});else{var g=d.clientHeight;d.clientWidth&&g&&Ra(a)}})};function Sa(){this.h=this.g=!1;this.i=[]}function Ta(a){a.i.length=0;a.h=!0}function Ua(a,b){function c(){a.h=!1;var d=a.i.shift();return void 0===d?(a.g=!1,Promise.resolve()):Ua(a,d())}a.g=!0;return b?b.then(c,function(){if(a.h)return c();a.g=!1;return Promise.reject()}):c()}function Va(a,b){b=t(b);for(var c=b.next();!c.done;c=b.next())a.i.push(c.value);if(!a.g)return Ua(a)};function Z(){X.apply(this,arguments);this.i=new Sa}z(Z,X);
Z.prototype.h=function(){var a=this;Ta(this.i);return Va(this.i,[function(){},function(){var b,c=a.l,d=new Ka;M(d,3,100,0);M(d,4,1E4,0);M(d,5,!0,!1);na(c.g,3)&&M(d,2,!0,!1);c=c.context;Ja(c);0<=c.g.indexOf("amp")&&M(d,2,!0,!1);d&&(b=(new Ma(a.context,d)).wait());V(a.context,"browserStart");V(a.context,"browserStartEnd");Pa(a);Y(a,2);return b},function(){V(a.context,"browserReady");V(a.context,"browserReadyEnd");Y(a,4);V(a.context,"overallReady")},function(){V(a.context,"browserQuiet");V(a.context,
"browserQuietEnd");Y(a,8)}])};(function(a){var b=null;B("mys.engine.init",function(c,d){var g=wa(Da,U(d,"render_config")||"[]");b=new Qa(c,d,g,a);b.init()});B("mys.engine.stage",function(){return b?b.g.g:0})})(function(a,b,c){a=new Ia(a,b);c=new Oa(a,c);return new Z(a,c)});}).call(this);