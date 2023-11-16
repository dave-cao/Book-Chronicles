var PU=(o,i)=>()=>(i||o((i={exports:{}}).exports,i),i.exports);var bQ=PU((Zt,Ct)=>{function L5(o,i){for(var a=0;a<i.length;a++){const l=i[a];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in o)){const h=Object.getOwnPropertyDescriptor(l,u);h&&Object.defineProperty(o,u,h.get?h:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function a(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(u){if(u.ep)return;u.ep=!0;const h=a(u);fetch(u.href,h)}})();var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function j5(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function zU(o){if(o.__esModule)return o;var i=o.default;if(typeof i=="function"){var a=function l(){return this instanceof l?Reflect.construct(i,arguments,this.constructor):i.apply(this,arguments)};a.prototype=i.prototype}else a={};return Object.defineProperty(a,"__esModule",{value:!0}),Object.keys(o).forEach(function(l){var u=Object.getOwnPropertyDescriptor(o,l);Object.defineProperty(a,l,u.get?u:{enumerable:!0,get:function(){return o[l]}})}),a}var R5={exports:{}},nf={},F5={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=Symbol.for("react.element"),LU=Symbol.for("react.portal"),jU=Symbol.for("react.fragment"),RU=Symbol.for("react.strict_mode"),FU=Symbol.for("react.profiler"),VU=Symbol.for("react.provider"),UU=Symbol.for("react.context"),HU=Symbol.for("react.forward_ref"),$U=Symbol.for("react.suspense"),WU=Symbol.for("react.memo"),qU=Symbol.for("react.lazy"),E2=Symbol.iterator;function GU(o){return o===null||typeof o!="object"?null:(o=E2&&o[E2]||o["@@iterator"],typeof o=="function"?o:null)}var V5={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U5=Object.assign,H5={};function xa(o,i,a){this.props=o,this.context=i,this.refs=H5,this.updater=a||V5}xa.prototype.isReactComponent={};xa.prototype.setState=function(o,i){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,i,"setState")};xa.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function $5(){}$5.prototype=xa.prototype;function $b(o,i,a){this.props=o,this.context=i,this.refs=H5,this.updater=a||V5}var Wb=$b.prototype=new $5;Wb.constructor=$b;U5(Wb,xa.prototype);Wb.isPureReactComponent=!0;var D2=Array.isArray,W5=Object.prototype.hasOwnProperty,qb={current:null},q5={key:!0,ref:!0,__self:!0,__source:!0};function G5(o,i,a){var l,u={},h=null,g=null;if(i!=null)for(l in i.ref!==void 0&&(g=i.ref),i.key!==void 0&&(h=""+i.key),i)W5.call(i,l)&&!q5.hasOwnProperty(l)&&(u[l]=i[l]);var m=arguments.length-2;if(m===1)u.children=a;else if(1<m){for(var k=Array(m),b=0;b<m;b++)k[b]=arguments[b+2];u.children=k}if(o&&o.defaultProps)for(l in m=o.defaultProps,m)u[l]===void 0&&(u[l]=m[l]);return{$$typeof:Fl,type:o,key:h,ref:g,props:u,_owner:qb.current}}function YU(o,i){return{$$typeof:Fl,type:o.type,key:i,ref:o.ref,props:o.props,_owner:o._owner}}function Gb(o){return typeof o=="object"&&o!==null&&o.$$typeof===Fl}function ZU(o){var i={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(a){return i[a]})}var S2=/\/+/g;function $k(o,i){return typeof o=="object"&&o!==null&&o.key!=null?ZU(""+o.key):i.toString(36)}function ch(o,i,a,l,u){var h=typeof o;(h==="undefined"||h==="boolean")&&(o=null);var g=!1;if(o===null)g=!0;else switch(h){case"string":case"number":g=!0;break;case"object":switch(o.$$typeof){case Fl:case LU:g=!0}}if(g)return g=o,u=u(g),o=l===""?"."+$k(g,0):l,D2(u)?(a="",o!=null&&(a=o.replace(S2,"$&/")+"/"),ch(u,i,a,"",function(b){return b})):u!=null&&(Gb(u)&&(u=YU(u,a+(!u.key||g&&g.key===u.key?"":(""+u.key).replace(S2,"$&/")+"/")+o)),i.push(u)),1;if(g=0,l=l===""?".":l+":",D2(o))for(var m=0;m<o.length;m++){h=o[m];var k=l+$k(h,m);g+=ch(h,i,a,k,u)}else if(k=GU(o),typeof k=="function")for(o=k.call(o),m=0;!(h=o.next()).done;)h=h.value,k=l+$k(h,m++),g+=ch(h,i,a,k,u);else if(h==="object")throw i=String(o),Error("Objects are not valid as a React child (found: "+(i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return g}function Bu(o,i,a){if(o==null)return o;var l=[],u=0;return ch(o,l,"","",function(h){return i.call(a,h,u++)}),l}function KU(o){if(o._status===-1){var i=o._result;i=i(),i.then(function(a){(o._status===0||o._status===-1)&&(o._status=1,o._result=a)},function(a){(o._status===0||o._status===-1)&&(o._status=2,o._result=a)}),o._status===-1&&(o._status=0,o._result=i)}if(o._status===1)return o._result.default;throw o._result}var hn={current:null},lh={transition:null},QU={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:lh,ReactCurrentOwner:qb};Ie.Children={map:Bu,forEach:function(o,i,a){Bu(o,function(){i.apply(this,arguments)},a)},count:function(o){var i=0;return Bu(o,function(){i++}),i},toArray:function(o){return Bu(o,function(i){return i})||[]},only:function(o){if(!Gb(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};Ie.Component=xa;Ie.Fragment=jU;Ie.Profiler=FU;Ie.PureComponent=$b;Ie.StrictMode=RU;Ie.Suspense=$U;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QU;Ie.cloneElement=function(o,i,a){if(o==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+o+".");var l=U5({},o.props),u=o.key,h=o.ref,g=o._owner;if(i!=null){if(i.ref!==void 0&&(h=i.ref,g=qb.current),i.key!==void 0&&(u=""+i.key),o.type&&o.type.defaultProps)var m=o.type.defaultProps;for(k in i)W5.call(i,k)&&!q5.hasOwnProperty(k)&&(l[k]=i[k]===void 0&&m!==void 0?m[k]:i[k])}var k=arguments.length-2;if(k===1)l.children=a;else if(1<k){m=Array(k);for(var b=0;b<k;b++)m[b]=arguments[b+2];l.children=m}return{$$typeof:Fl,type:o.type,key:u,ref:h,props:l,_owner:g}};Ie.createContext=function(o){return o={$$typeof:UU,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},o.Provider={$$typeof:VU,_context:o},o.Consumer=o};Ie.createElement=G5;Ie.createFactory=function(o){var i=G5.bind(null,o);return i.type=o,i};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(o){return{$$typeof:HU,render:o}};Ie.isValidElement=Gb;Ie.lazy=function(o){return{$$typeof:qU,_payload:{_status:-1,_result:o},_init:KU}};Ie.memo=function(o,i){return{$$typeof:WU,type:o,compare:i===void 0?null:i}};Ie.startTransition=function(o){var i=lh.transition;lh.transition={};try{o()}finally{lh.transition=i}};Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ie.useCallback=function(o,i){return hn.current.useCallback(o,i)};Ie.useContext=function(o){return hn.current.useContext(o)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(o){return hn.current.useDeferredValue(o)};Ie.useEffect=function(o,i){return hn.current.useEffect(o,i)};Ie.useId=function(){return hn.current.useId()};Ie.useImperativeHandle=function(o,i,a){return hn.current.useImperativeHandle(o,i,a)};Ie.useInsertionEffect=function(o,i){return hn.current.useInsertionEffect(o,i)};Ie.useLayoutEffect=function(o,i){return hn.current.useLayoutEffect(o,i)};Ie.useMemo=function(o,i){return hn.current.useMemo(o,i)};Ie.useReducer=function(o,i,a){return hn.current.useReducer(o,i,a)};Ie.useRef=function(o){return hn.current.useRef(o)};Ie.useState=function(o){return hn.current.useState(o)};Ie.useSyncExternalStore=function(o,i,a){return hn.current.useSyncExternalStore(o,i,a)};Ie.useTransition=function(){return hn.current.useTransition()};Ie.version="18.2.0";F5.exports=Ie;var se=F5.exports;const Y5=j5(se),JU=L5({__proto__:null,default:Y5},[se]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XU=se,eH=Symbol.for("react.element"),tH=Symbol.for("react.fragment"),nH=Object.prototype.hasOwnProperty,iH=XU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rH={key:!0,ref:!0,__self:!0,__source:!0};function Z5(o,i,a){var l,u={},h=null,g=null;a!==void 0&&(h=""+a),i.key!==void 0&&(h=""+i.key),i.ref!==void 0&&(g=i.ref);for(l in i)nH.call(i,l)&&!rH.hasOwnProperty(l)&&(u[l]=i[l]);if(o&&o.defaultProps)for(l in i=o.defaultProps,i)u[l]===void 0&&(u[l]=i[l]);return{$$typeof:eH,type:o,key:h,ref:g,props:u,_owner:iH.current}}nf.Fragment=tH;nf.jsx=Z5;nf.jsxs=Z5;R5.exports=nf;var F=R5.exports,M0={},K5={exports:{}},Rn={},Q5={exports:{}},J5={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(o){function i(J,ee){var le=J.length;J.push(ee);e:for(;0<le;){var ke=le-1>>>1,Ce=J[ke];if(0<u(Ce,ee))J[ke]=ee,J[le]=Ce,le=ke;else break e}}function a(J){return J.length===0?null:J[0]}function l(J){if(J.length===0)return null;var ee=J[0],le=J.pop();if(le!==ee){J[0]=le;e:for(var ke=0,Ce=J.length,at=Ce>>>1;ke<at;){var Pt=2*(ke+1)-1,gt=J[Pt],Ve=Pt+1,Me=J[Ve];if(0>u(gt,le))Ve<Ce&&0>u(Me,gt)?(J[ke]=Me,J[Ve]=le,ke=Ve):(J[ke]=gt,J[Pt]=le,ke=Pt);else if(Ve<Ce&&0>u(Me,le))J[ke]=Me,J[Ve]=le,ke=Ve;else break e}}return ee}function u(J,ee){var le=J.sortIndex-ee.sortIndex;return le!==0?le:J.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var g=Date,m=g.now();o.unstable_now=function(){return g.now()-m}}var k=[],b=[],y=1,v=null,A=3,x=!1,E=!1,T=!1,P=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(J){for(var ee=a(b);ee!==null;){if(ee.callback===null)l(b);else if(ee.startTime<=J)l(b),ee.sortIndex=ee.expirationTime,i(k,ee);else break;ee=a(b)}}function j(J){if(T=!1,B(J),!E)if(a(k)!==null)E=!0,M(q);else{var ee=a(b);ee!==null&&Q(j,ee.startTime-J)}}function q(J,ee){E=!1,T&&(T=!1,I(X),X=-1),x=!0;var le=A;try{for(B(ee),v=a(k);v!==null&&(!(v.expirationTime>ee)||J&&!$());){var ke=v.callback;if(typeof ke=="function"){v.callback=null,A=v.priorityLevel;var Ce=ke(v.expirationTime<=ee);ee=o.unstable_now(),typeof Ce=="function"?v.callback=Ce:v===a(k)&&l(k),B(ee)}else l(k);v=a(k)}if(v!==null)var at=!0;else{var Pt=a(b);Pt!==null&&Q(j,Pt.startTime-ee),at=!1}return at}finally{v=null,A=le,x=!1}}var Z=!1,K=null,X=-1,re=5,ce=-1;function $(){return!(o.unstable_now()-ce<re)}function G(){if(K!==null){var J=o.unstable_now();ce=J;var ee=!0;try{ee=K(!0,J)}finally{ee?U():(Z=!1,K=null)}}else Z=!1}var U;if(typeof N=="function")U=function(){N(G)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,V=R.port2;R.port1.onmessage=G,U=function(){V.postMessage(null)}}else U=function(){P(G,0)};function M(J){K=J,Z||(Z=!0,U())}function Q(J,ee){X=P(function(){J(o.unstable_now())},ee)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(J){J.callback=null},o.unstable_continueExecution=function(){E||x||(E=!0,M(q))},o.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<J?Math.floor(1e3/J):5},o.unstable_getCurrentPriorityLevel=function(){return A},o.unstable_getFirstCallbackNode=function(){return a(k)},o.unstable_next=function(J){switch(A){case 1:case 2:case 3:var ee=3;break;default:ee=A}var le=A;A=ee;try{return J()}finally{A=le}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(J,ee){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var le=A;A=J;try{return ee()}finally{A=le}},o.unstable_scheduleCallback=function(J,ee,le){var ke=o.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ke+le:ke):le=ke,J){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=le+Ce,J={id:y++,callback:ee,priorityLevel:J,startTime:le,expirationTime:Ce,sortIndex:-1},le>ke?(J.sortIndex=le,i(b,J),a(k)===null&&J===a(b)&&(T?(I(X),X=-1):T=!0,Q(j,le-ke))):(J.sortIndex=Ce,i(k,J),E||x||(E=!0,M(q))),J},o.unstable_shouldYield=$,o.unstable_wrapCallback=function(J){var ee=A;return function(){var le=A;A=ee;try{return J.apply(this,arguments)}finally{A=le}}}})(J5);Q5.exports=J5;var oH=Q5.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X5=se,jn=oH;function oe(o){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+o,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+o+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eD=new Set,vl={};function hs(o,i){ka(o,i),ka(o+"Capture",i)}function ka(o,i){for(vl[o]=i,o=0;o<i.length;o++)eD.add(i[o])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N0=Object.prototype.hasOwnProperty,sH=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T2={},I2={};function aH(o){return N0.call(I2,o)?!0:N0.call(T2,o)?!1:sH.test(o)?I2[o]=!0:(T2[o]=!0,!1)}function cH(o,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function lH(o,i,a,l){if(i===null||typeof i>"u"||cH(o,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function fn(o,i,a,l,u,h,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=o,this.type=i,this.sanitizeURL=h,this.removeEmptyString=g}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){Jt[o]=new fn(o,0,!1,o,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var i=o[0];Jt[i]=new fn(i,1,!1,o[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(o){Jt[o]=new fn(o,2,!1,o.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){Jt[o]=new fn(o,2,!1,o,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){Jt[o]=new fn(o,3,!1,o.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(o){Jt[o]=new fn(o,3,!0,o,null,!1,!1)});["capture","download"].forEach(function(o){Jt[o]=new fn(o,4,!1,o,null,!1,!1)});["cols","rows","size","span"].forEach(function(o){Jt[o]=new fn(o,6,!1,o,null,!1,!1)});["rowSpan","start"].forEach(function(o){Jt[o]=new fn(o,5,!1,o.toLowerCase(),null,!1,!1)});var Yb=/[\-:]([a-z])/g;function Zb(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var i=o.replace(Yb,Zb);Jt[i]=new fn(i,1,!1,o,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var i=o.replace(Yb,Zb);Jt[i]=new fn(i,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(o){var i=o.replace(Yb,Zb);Jt[i]=new fn(i,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(o){Jt[o]=new fn(o,1,!1,o.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(o){Jt[o]=new fn(o,1,!1,o.toLowerCase(),null,!0,!0)});function Kb(o,i,a,l){var u=Jt.hasOwnProperty(i)?Jt[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(lH(i,a,u,l)&&(a=null),l||u===null?aH(i)&&(a===null?o.removeAttribute(i):o.setAttribute(i,""+a)):u.mustUseProperty?o[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?o.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?o.setAttributeNS(l,i,a):o.setAttribute(i,a))))}var _r=X5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pu=Symbol.for("react.element"),Js=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),Qb=Symbol.for("react.strict_mode"),O0=Symbol.for("react.profiler"),tD=Symbol.for("react.provider"),nD=Symbol.for("react.context"),Jb=Symbol.for("react.forward_ref"),B0=Symbol.for("react.suspense"),P0=Symbol.for("react.suspense_list"),Xb=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),iD=Symbol.for("react.offscreen"),M2=Symbol.iterator;function Fc(o){return o===null||typeof o!="object"?null:(o=M2&&o[M2]||o["@@iterator"],typeof o=="function"?o:null)}var wt=Object.assign,Wk;function Qc(o){if(Wk===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Wk=i&&i[1]||""}return`
`+Wk+o}var qk=!1;function Gk(o,i){if(!o||qk)return"";qk=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(b){var l=b}Reflect.construct(o,[],i)}else{try{i.call()}catch(b){l=b}o.call(i.prototype)}else{try{throw Error()}catch(b){l=b}o()}}catch(b){if(b&&l&&typeof b.stack=="string"){for(var u=b.stack.split(`
`),h=l.stack.split(`
`),g=u.length-1,m=h.length-1;1<=g&&0<=m&&u[g]!==h[m];)m--;for(;1<=g&&0<=m;g--,m--)if(u[g]!==h[m]){if(g!==1||m!==1)do if(g--,m--,0>m||u[g]!==h[m]){var k=`
`+u[g].replace(" at new "," at ");return o.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",o.displayName)),k}while(1<=g&&0<=m);break}}}finally{qk=!1,Error.prepareStackTrace=a}return(o=o?o.displayName||o.name:"")?Qc(o):""}function dH(o){switch(o.tag){case 5:return Qc(o.type);case 16:return Qc("Lazy");case 13:return Qc("Suspense");case 19:return Qc("SuspenseList");case 0:case 2:case 15:return o=Gk(o.type,!1),o;case 11:return o=Gk(o.type.render,!1),o;case 1:return o=Gk(o.type,!0),o;default:return""}}function z0(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case Xs:return"Fragment";case Js:return"Portal";case O0:return"Profiler";case Qb:return"StrictMode";case B0:return"Suspense";case P0:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case nD:return(o.displayName||"Context")+".Consumer";case tD:return(o._context.displayName||"Context")+".Provider";case Jb:var i=o.render;return o=o.displayName,o||(o=i.displayName||i.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case Xb:return i=o.displayName||null,i!==null?i:z0(o.type)||"Memo";case Wr:i=o._payload,o=o._init;try{return z0(o(i))}catch{}}return null}function uH(o){var i=o.type;switch(o.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=i.render,o=o.displayName||o.name||"",i.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return z0(i);case 8:return i===Qb?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ho(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function rD(o){var i=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function hH(o){var i=rD(o)?"checked":"value",a=Object.getOwnPropertyDescriptor(o.constructor.prototype,i),l=""+o[i];if(!o.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(o,i,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,h.call(this,g)}}),Object.defineProperty(o,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){o._valueTracker=null,delete o[i]}}}}function zu(o){o._valueTracker||(o._valueTracker=hH(o))}function oD(o){if(!o)return!1;var i=o._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return o&&(l=rD(o)?o.checked?"true":"false":o.value),o=l,o!==a?(i.setValue(o),!0):!1}function yh(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function L0(o,i){var a=i.checked;return wt({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??o._wrapperState.initialChecked})}function N2(o,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ho(i.value!=null?i.value:a),o._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function sD(o,i){i=i.checked,i!=null&&Kb(o,"checked",i,!1)}function j0(o,i){sD(o,i);var a=ho(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&o.value===""||o.value!=a)&&(o.value=""+a):o.value!==""+a&&(o.value=""+a);else if(l==="submit"||l==="reset"){o.removeAttribute("value");return}i.hasOwnProperty("value")?R0(o,i.type,a):i.hasOwnProperty("defaultValue")&&R0(o,i.type,ho(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(o.defaultChecked=!!i.defaultChecked)}function O2(o,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+o._wrapperState.initialValue,a||i===o.value||(o.value=i),o.defaultValue=i}a=o.name,a!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,a!==""&&(o.name=a)}function R0(o,i,a){(i!=="number"||yh(o.ownerDocument)!==o)&&(a==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+a&&(o.defaultValue=""+a))}var Jc=Array.isArray;function da(o,i,a,l){if(o=o.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<o.length;a++)u=i.hasOwnProperty("$"+o[a].value),o[a].selected!==u&&(o[a].selected=u),u&&l&&(o[a].defaultSelected=!0)}else{for(a=""+ho(a),i=null,u=0;u<o.length;u++){if(o[u].value===a){o[u].selected=!0,l&&(o[u].defaultSelected=!0);return}i!==null||o[u].disabled||(i=o[u])}i!==null&&(i.selected=!0)}}function F0(o,i){if(i.dangerouslySetInnerHTML!=null)throw Error(oe(91));return wt({},i,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function B2(o,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(oe(92));if(Jc(a)){if(1<a.length)throw Error(oe(93));a=a[0]}i=a}i==null&&(i=""),a=i}o._wrapperState={initialValue:ho(a)}}function aD(o,i){var a=ho(i.value),l=ho(i.defaultValue);a!=null&&(a=""+a,a!==o.value&&(o.value=a),i.defaultValue==null&&o.defaultValue!==a&&(o.defaultValue=a)),l!=null&&(o.defaultValue=""+l)}function P2(o){var i=o.textContent;i===o._wrapperState.initialValue&&i!==""&&i!==null&&(o.value=i)}function cD(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function V0(o,i){return o==null||o==="http://www.w3.org/1999/xhtml"?cD(i):o==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var Lu,lD=function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return o(i,a,l,u)})}:o}(function(o,i){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=i;else{for(Lu=Lu||document.createElement("div"),Lu.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Lu.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;i.firstChild;)o.appendChild(i.firstChild)}});function _l(o,i){if(i){var a=o.firstChild;if(a&&a===o.lastChild&&a.nodeType===3){a.nodeValue=i;return}}o.textContent=i}var ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fH=["Webkit","ms","Moz","O"];Object.keys(ol).forEach(function(o){fH.forEach(function(i){i=i+o.charAt(0).toUpperCase()+o.substring(1),ol[i]=ol[o]})});function dD(o,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ol.hasOwnProperty(o)&&ol[o]?(""+i).trim():i+"px"}function uD(o,i){o=o.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=dD(a,i[a],l);a==="float"&&(a="cssFloat"),l?o.setProperty(a,u):o[a]=u}}var gH=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function U0(o,i){if(i){if(gH[o]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(oe(137,o));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(oe(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(oe(61))}if(i.style!=null&&typeof i.style!="object")throw Error(oe(62))}}function H0(o,i){if(o.indexOf("-")===-1)return typeof i.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $0=null;function ew(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var W0=null,ua=null,ha=null;function z2(o){if(o=Hl(o)){if(typeof W0!="function")throw Error(oe(280));var i=o.stateNode;i&&(i=cf(i),W0(o.stateNode,o.type,i))}}function hD(o){ua?ha?ha.push(o):ha=[o]:ua=o}function fD(){if(ua){var o=ua,i=ha;if(ha=ua=null,z2(o),i)for(o=0;o<i.length;o++)z2(i[o])}}function gD(o,i){return o(i)}function pD(){}var Yk=!1;function mD(o,i,a){if(Yk)return o(i,a);Yk=!0;try{return gD(o,i,a)}finally{Yk=!1,(ua!==null||ha!==null)&&(pD(),fD())}}function yl(o,i){var a=o.stateNode;if(a===null)return null;var l=cf(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(o=o.type,l=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!l;break e;default:o=!1}if(o)return null;if(a&&typeof a!="function")throw Error(oe(231,i,typeof a));return a}var q0=!1;if(pr)try{var Vc={};Object.defineProperty(Vc,"passive",{get:function(){q0=!0}}),window.addEventListener("test",Vc,Vc),window.removeEventListener("test",Vc,Vc)}catch{q0=!1}function pH(o,i,a,l,u,h,g,m,k){var b=Array.prototype.slice.call(arguments,3);try{i.apply(a,b)}catch(y){this.onError(y)}}var sl=!1,Ah=null,Ch=!1,G0=null,mH={onError:function(o){sl=!0,Ah=o}};function kH(o,i,a,l,u,h,g,m,k){sl=!1,Ah=null,pH.apply(mH,arguments)}function bH(o,i,a,l,u,h,g,m,k){if(kH.apply(this,arguments),sl){if(sl){var b=Ah;sl=!1,Ah=null}else throw Error(oe(198));Ch||(Ch=!0,G0=b)}}function fs(o){var i=o,a=o;if(o.alternate)for(;i.return;)i=i.return;else{o=i;do i=o,i.flags&4098&&(a=i.return),o=i.return;while(o)}return i.tag===3?a:null}function kD(o){if(o.tag===13){var i=o.memoizedState;if(i===null&&(o=o.alternate,o!==null&&(i=o.memoizedState)),i!==null)return i.dehydrated}return null}function L2(o){if(fs(o)!==o)throw Error(oe(188))}function wH(o){var i=o.alternate;if(!i){if(i=fs(o),i===null)throw Error(oe(188));return i!==o?null:o}for(var a=o,l=i;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return L2(u),o;if(h===l)return L2(u),i;h=h.sibling}throw Error(oe(188))}if(a.return!==l.return)a=u,l=h;else{for(var g=!1,m=u.child;m;){if(m===a){g=!0,a=u,l=h;break}if(m===l){g=!0,l=u,a=h;break}m=m.sibling}if(!g){for(m=h.child;m;){if(m===a){g=!0,a=h,l=u;break}if(m===l){g=!0,l=h,a=u;break}m=m.sibling}if(!g)throw Error(oe(189))}}if(a.alternate!==l)throw Error(oe(190))}if(a.tag!==3)throw Error(oe(188));return a.stateNode.current===a?o:i}function bD(o){return o=wH(o),o!==null?wD(o):null}function wD(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var i=wD(o);if(i!==null)return i;o=o.sibling}return null}var vD=jn.unstable_scheduleCallback,j2=jn.unstable_cancelCallback,vH=jn.unstable_shouldYield,_H=jn.unstable_requestPaint,Dt=jn.unstable_now,yH=jn.unstable_getCurrentPriorityLevel,tw=jn.unstable_ImmediatePriority,_D=jn.unstable_UserBlockingPriority,xh=jn.unstable_NormalPriority,AH=jn.unstable_LowPriority,yD=jn.unstable_IdlePriority,rf=null,$i=null;function CH(o){if($i&&typeof $i.onCommitFiberRoot=="function")try{$i.onCommitFiberRoot(rf,o,void 0,(o.current.flags&128)===128)}catch{}}var wi=Math.clz32?Math.clz32:DH,xH=Math.log,EH=Math.LN2;function DH(o){return o>>>=0,o===0?32:31-(xH(o)/EH|0)|0}var ju=64,Ru=4194304;function Xc(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function Eh(o,i){var a=o.pendingLanes;if(a===0)return 0;var l=0,u=o.suspendedLanes,h=o.pingedLanes,g=a&268435455;if(g!==0){var m=g&~u;m!==0?l=Xc(m):(h&=g,h!==0&&(l=Xc(h)))}else g=a&~u,g!==0?l=Xc(g):h!==0&&(l=Xc(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&u)&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if(l&4&&(l|=a&16),i=o.entangledLanes,i!==0)for(o=o.entanglements,i&=l;0<i;)a=31-wi(i),u=1<<a,l|=o[a],i&=~u;return l}function SH(o,i){switch(o){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TH(o,i){for(var a=o.suspendedLanes,l=o.pingedLanes,u=o.expirationTimes,h=o.pendingLanes;0<h;){var g=31-wi(h),m=1<<g,k=u[g];k===-1?(!(m&a)||m&l)&&(u[g]=SH(m,i)):k<=i&&(o.expiredLanes|=m),h&=~m}}function Y0(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function AD(){var o=ju;return ju<<=1,!(ju&4194240)&&(ju=64),o}function Zk(o){for(var i=[],a=0;31>a;a++)i.push(o);return i}function Vl(o,i,a){o.pendingLanes|=i,i!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,i=31-wi(i),o[i]=a}function IH(o,i){var a=o.pendingLanes&~i;o.pendingLanes=i,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=i,o.mutableReadLanes&=i,o.entangledLanes&=i,i=o.entanglements;var l=o.eventTimes;for(o=o.expirationTimes;0<a;){var u=31-wi(a),h=1<<u;i[u]=0,l[u]=-1,o[u]=-1,a&=~h}}function nw(o,i){var a=o.entangledLanes|=i;for(o=o.entanglements;a;){var l=31-wi(a),u=1<<l;u&i|o[l]&i&&(o[l]|=i),a&=~u}}var Ge=0;function CD(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var xD,iw,ED,DD,SD,Z0=!1,Fu=[],no=null,io=null,ro=null,Al=new Map,Cl=new Map,Zr=[],MH="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function R2(o,i){switch(o){case"focusin":case"focusout":no=null;break;case"dragenter":case"dragleave":io=null;break;case"mouseover":case"mouseout":ro=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(i.pointerId)}}function Uc(o,i,a,l,u,h){return o===null||o.nativeEvent!==h?(o={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=Hl(i),i!==null&&iw(i)),o):(o.eventSystemFlags|=l,i=o.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),o)}function NH(o,i,a,l,u){switch(i){case"focusin":return no=Uc(no,o,i,a,l,u),!0;case"dragenter":return io=Uc(io,o,i,a,l,u),!0;case"mouseover":return ro=Uc(ro,o,i,a,l,u),!0;case"pointerover":var h=u.pointerId;return Al.set(h,Uc(Al.get(h)||null,o,i,a,l,u)),!0;case"gotpointercapture":return h=u.pointerId,Cl.set(h,Uc(Cl.get(h)||null,o,i,a,l,u)),!0}return!1}function TD(o){var i=es(o.target);if(i!==null){var a=fs(i);if(a!==null){if(i=a.tag,i===13){if(i=kD(a),i!==null){o.blockedOn=i,SD(o.priority,function(){ED(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){o.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}o.blockedOn=null}function dh(o){if(o.blockedOn!==null)return!1;for(var i=o.targetContainers;0<i.length;){var a=K0(o.domEventName,o.eventSystemFlags,i[0],o.nativeEvent);if(a===null){a=o.nativeEvent;var l=new a.constructor(a.type,a);$0=l,a.target.dispatchEvent(l),$0=null}else return i=Hl(a),i!==null&&iw(i),o.blockedOn=a,!1;i.shift()}return!0}function F2(o,i,a){dh(o)&&a.delete(i)}function OH(){Z0=!1,no!==null&&dh(no)&&(no=null),io!==null&&dh(io)&&(io=null),ro!==null&&dh(ro)&&(ro=null),Al.forEach(F2),Cl.forEach(F2)}function Hc(o,i){o.blockedOn===i&&(o.blockedOn=null,Z0||(Z0=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,OH)))}function xl(o){function i(u){return Hc(u,o)}if(0<Fu.length){Hc(Fu[0],o);for(var a=1;a<Fu.length;a++){var l=Fu[a];l.blockedOn===o&&(l.blockedOn=null)}}for(no!==null&&Hc(no,o),io!==null&&Hc(io,o),ro!==null&&Hc(ro,o),Al.forEach(i),Cl.forEach(i),a=0;a<Zr.length;a++)l=Zr[a],l.blockedOn===o&&(l.blockedOn=null);for(;0<Zr.length&&(a=Zr[0],a.blockedOn===null);)TD(a),a.blockedOn===null&&Zr.shift()}var fa=_r.ReactCurrentBatchConfig,Dh=!0;function BH(o,i,a,l){var u=Ge,h=fa.transition;fa.transition=null;try{Ge=1,rw(o,i,a,l)}finally{Ge=u,fa.transition=h}}function PH(o,i,a,l){var u=Ge,h=fa.transition;fa.transition=null;try{Ge=4,rw(o,i,a,l)}finally{Ge=u,fa.transition=h}}function rw(o,i,a,l){if(Dh){var u=K0(o,i,a,l);if(u===null)o0(o,i,l,Sh,a),R2(o,l);else if(NH(u,o,i,a,l))l.stopPropagation();else if(R2(o,l),i&4&&-1<MH.indexOf(o)){for(;u!==null;){var h=Hl(u);if(h!==null&&xD(h),h=K0(o,i,a,l),h===null&&o0(o,i,l,Sh,a),h===u)break;u=h}u!==null&&l.stopPropagation()}else o0(o,i,l,null,a)}}var Sh=null;function K0(o,i,a,l){if(Sh=null,o=ew(l),o=es(o),o!==null)if(i=fs(o),i===null)o=null;else if(a=i.tag,a===13){if(o=kD(i),o!==null)return o;o=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;o=null}else i!==o&&(o=null);return Sh=o,null}function ID(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yH()){case tw:return 1;case _D:return 4;case xh:case AH:return 16;case yD:return 536870912;default:return 16}default:return 16}}var Xr=null,ow=null,uh=null;function MD(){if(uh)return uh;var o,i=ow,a=i.length,l,u="value"in Xr?Xr.value:Xr.textContent,h=u.length;for(o=0;o<a&&i[o]===u[o];o++);var g=a-o;for(l=1;l<=g&&i[a-l]===u[h-l];l++);return uh=u.slice(o,1<l?1-l:void 0)}function hh(o){var i=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&i===13&&(o=13)):o=i,o===10&&(o=13),32<=o||o===13?o:0}function Vu(){return!0}function V2(){return!1}function Fn(o){function i(a,l,u,h,g){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var m in o)o.hasOwnProperty(m)&&(a=o[m],this[m]=a?a(h):h[m]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Vu:V2,this.isPropagationStopped=V2,this}return wt(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vu)},persist:function(){},isPersistent:Vu}),i}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sw=Fn(Ea),Ul=wt({},Ea,{view:0,detail:0}),zH=Fn(Ul),Kk,Qk,$c,of=wt({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:aw,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==$c&&($c&&o.type==="mousemove"?(Kk=o.screenX-$c.screenX,Qk=o.screenY-$c.screenY):Qk=Kk=0,$c=o),Kk)},movementY:function(o){return"movementY"in o?o.movementY:Qk}}),U2=Fn(of),LH=wt({},of,{dataTransfer:0}),jH=Fn(LH),RH=wt({},Ul,{relatedTarget:0}),Jk=Fn(RH),FH=wt({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),VH=Fn(FH),UH=wt({},Ea,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),HH=Fn(UH),$H=wt({},Ea,{data:0}),H2=Fn($H),WH={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qH={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GH={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YH(o){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(o):(o=GH[o])?!!i[o]:!1}function aw(){return YH}var ZH=wt({},Ul,{key:function(o){if(o.key){var i=WH[o.key]||o.key;if(i!=="Unidentified")return i}return o.type==="keypress"?(o=hh(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?qH[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:aw,charCode:function(o){return o.type==="keypress"?hh(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?hh(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),KH=Fn(ZH),QH=wt({},of,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$2=Fn(QH),JH=wt({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:aw}),XH=Fn(JH),e$=wt({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),t$=Fn(e$),n$=wt({},of,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),i$=Fn(n$),r$=[9,13,27,32],cw=pr&&"CompositionEvent"in window,al=null;pr&&"documentMode"in document&&(al=document.documentMode);var o$=pr&&"TextEvent"in window&&!al,ND=pr&&(!cw||al&&8<al&&11>=al),W2=String.fromCharCode(32),q2=!1;function OD(o,i){switch(o){case"keyup":return r$.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function BD(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var ea=!1;function s$(o,i){switch(o){case"compositionend":return BD(i);case"keypress":return i.which!==32?null:(q2=!0,W2);case"textInput":return o=i.data,o===W2&&q2?null:o;default:return null}}function a$(o,i){if(ea)return o==="compositionend"||!cw&&OD(o,i)?(o=MD(),uh=ow=Xr=null,ea=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ND&&i.locale!=="ko"?null:i.data;default:return null}}var c$={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G2(o){var i=o&&o.nodeName&&o.nodeName.toLowerCase();return i==="input"?!!c$[o.type]:i==="textarea"}function PD(o,i,a,l){hD(l),i=Th(i,"onChange"),0<i.length&&(a=new sw("onChange","change",null,a,l),o.push({event:a,listeners:i}))}var cl=null,El=null;function l$(o){qD(o,0)}function sf(o){var i=ia(o);if(oD(i))return o}function d$(o,i){if(o==="change")return i}var zD=!1;if(pr){var Xk;if(pr){var e0="oninput"in document;if(!e0){var Y2=document.createElement("div");Y2.setAttribute("oninput","return;"),e0=typeof Y2.oninput=="function"}Xk=e0}else Xk=!1;zD=Xk&&(!document.documentMode||9<document.documentMode)}function Z2(){cl&&(cl.detachEvent("onpropertychange",LD),El=cl=null)}function LD(o){if(o.propertyName==="value"&&sf(El)){var i=[];PD(i,El,o,ew(o)),mD(l$,i)}}function u$(o,i,a){o==="focusin"?(Z2(),cl=i,El=a,cl.attachEvent("onpropertychange",LD)):o==="focusout"&&Z2()}function h$(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return sf(El)}function f$(o,i){if(o==="click")return sf(i)}function g$(o,i){if(o==="input"||o==="change")return sf(i)}function p$(o,i){return o===i&&(o!==0||1/o===1/i)||o!==o&&i!==i}var _i=typeof Object.is=="function"?Object.is:p$;function Dl(o,i){if(_i(o,i))return!0;if(typeof o!="object"||o===null||typeof i!="object"||i===null)return!1;var a=Object.keys(o),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!N0.call(i,u)||!_i(o[u],i[u]))return!1}return!0}function K2(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function Q2(o,i){var a=K2(o);o=0;for(var l;a;){if(a.nodeType===3){if(l=o+a.textContent.length,o<=i&&l>=i)return{node:a,offset:i-o};o=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=K2(a)}}function jD(o,i){return o&&i?o===i?!0:o&&o.nodeType===3?!1:i&&i.nodeType===3?jD(o,i.parentNode):"contains"in o?o.contains(i):o.compareDocumentPosition?!!(o.compareDocumentPosition(i)&16):!1:!1}function RD(){for(var o=window,i=yh();i instanceof o.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)o=i.contentWindow;else break;i=yh(o.document)}return i}function lw(o){var i=o&&o.nodeName&&o.nodeName.toLowerCase();return i&&(i==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||i==="textarea"||o.contentEditable==="true")}function m$(o){var i=RD(),a=o.focusedElem,l=o.selectionRange;if(i!==a&&a&&a.ownerDocument&&jD(a.ownerDocument.documentElement,a)){if(l!==null&&lw(a)){if(i=l.start,o=l.end,o===void 0&&(o=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(o,a.value.length);else if(o=(i=a.ownerDocument||document)&&i.defaultView||window,o.getSelection){o=o.getSelection();var u=a.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!o.extend&&h>l&&(u=l,l=h,h=u),u=Q2(a,h);var g=Q2(a,l);u&&g&&(o.rangeCount!==1||o.anchorNode!==u.node||o.anchorOffset!==u.offset||o.focusNode!==g.node||o.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),o.removeAllRanges(),h>l?(o.addRange(i),o.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),o.addRange(i)))}}for(i=[],o=a;o=o.parentNode;)o.nodeType===1&&i.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)o=i[a],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var k$=pr&&"documentMode"in document&&11>=document.documentMode,ta=null,Q0=null,ll=null,J0=!1;function J2(o,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;J0||ta==null||ta!==yh(l)||(l=ta,"selectionStart"in l&&lw(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ll&&Dl(ll,l)||(ll=l,l=Th(Q0,"onSelect"),0<l.length&&(i=new sw("onSelect","select",null,i,a),o.push({event:i,listeners:l}),i.target=ta)))}function Uu(o,i){var a={};return a[o.toLowerCase()]=i.toLowerCase(),a["Webkit"+o]="webkit"+i,a["Moz"+o]="moz"+i,a}var na={animationend:Uu("Animation","AnimationEnd"),animationiteration:Uu("Animation","AnimationIteration"),animationstart:Uu("Animation","AnimationStart"),transitionend:Uu("Transition","TransitionEnd")},t0={},FD={};pr&&(FD=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function af(o){if(t0[o])return t0[o];if(!na[o])return o;var i=na[o],a;for(a in i)if(i.hasOwnProperty(a)&&a in FD)return t0[o]=i[a];return o}var VD=af("animationend"),UD=af("animationiteration"),HD=af("animationstart"),$D=af("transitionend"),WD=new Map,X2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function go(o,i){WD.set(o,i),hs(i,[o])}for(var n0=0;n0<X2.length;n0++){var i0=X2[n0],b$=i0.toLowerCase(),w$=i0[0].toUpperCase()+i0.slice(1);go(b$,"on"+w$)}go(VD,"onAnimationEnd");go(UD,"onAnimationIteration");go(HD,"onAnimationStart");go("dblclick","onDoubleClick");go("focusin","onFocus");go("focusout","onBlur");go($D,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v$=new Set("cancel close invalid load scroll toggle".split(" ").concat(el));function eE(o,i,a){var l=o.type||"unknown-event";o.currentTarget=a,bH(l,i,void 0,o),o.currentTarget=null}function qD(o,i){i=(i&4)!==0;for(var a=0;a<o.length;a++){var l=o[a],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var g=l.length-1;0<=g;g--){var m=l[g],k=m.instance,b=m.currentTarget;if(m=m.listener,k!==h&&u.isPropagationStopped())break e;eE(u,m,b),h=k}else for(g=0;g<l.length;g++){if(m=l[g],k=m.instance,b=m.currentTarget,m=m.listener,k!==h&&u.isPropagationStopped())break e;eE(u,m,b),h=k}}}if(Ch)throw o=G0,Ch=!1,G0=null,o}function dt(o,i){var a=i[ib];a===void 0&&(a=i[ib]=new Set);var l=o+"__bubble";a.has(l)||(GD(i,o,2,!1),a.add(l))}function r0(o,i,a){var l=0;i&&(l|=4),GD(a,o,l,i)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function Sl(o){if(!o[Hu]){o[Hu]=!0,eD.forEach(function(a){a!=="selectionchange"&&(v$.has(a)||r0(a,!1,o),r0(a,!0,o))});var i=o.nodeType===9?o:o.ownerDocument;i===null||i[Hu]||(i[Hu]=!0,r0("selectionchange",!1,i))}}function GD(o,i,a,l){switch(ID(i)){case 1:var u=BH;break;case 4:u=PH;break;default:u=rw}a=u.bind(null,i,a,o),u=void 0,!q0||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?o.addEventListener(i,a,{capture:!0,passive:u}):o.addEventListener(i,a,!0):u!==void 0?o.addEventListener(i,a,{passive:u}):o.addEventListener(i,a,!1)}function o0(o,i,a,l,u){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var m=l.stateNode.containerInfo;if(m===u||m.nodeType===8&&m.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;m!==null;){if(g=es(m),g===null)return;if(k=g.tag,k===5||k===6){l=h=g;continue e}m=m.parentNode}}l=l.return}mD(function(){var b=h,y=ew(a),v=[];e:{var A=WD.get(o);if(A!==void 0){var x=sw,E=o;switch(o){case"keypress":if(hh(a)===0)break e;case"keydown":case"keyup":x=KH;break;case"focusin":E="focus",x=Jk;break;case"focusout":E="blur",x=Jk;break;case"beforeblur":case"afterblur":x=Jk;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=U2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=jH;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=XH;break;case VD:case UD:case HD:x=VH;break;case $D:x=t$;break;case"scroll":x=zH;break;case"wheel":x=i$;break;case"copy":case"cut":case"paste":x=HH;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$2}var T=(i&4)!==0,P=!T&&o==="scroll",I=T?A!==null?A+"Capture":null:A;T=[];for(var N=b,B;N!==null;){B=N;var j=B.stateNode;if(B.tag===5&&j!==null&&(B=j,I!==null&&(j=yl(N,I),j!=null&&T.push(Tl(N,j,B)))),P)break;N=N.return}0<T.length&&(A=new x(A,E,null,a,y),v.push({event:A,listeners:T}))}}if(!(i&7)){e:{if(A=o==="mouseover"||o==="pointerover",x=o==="mouseout"||o==="pointerout",A&&a!==$0&&(E=a.relatedTarget||a.fromElement)&&(es(E)||E[mr]))break e;if((x||A)&&(A=y.window===y?y:(A=y.ownerDocument)?A.defaultView||A.parentWindow:window,x?(E=a.relatedTarget||a.toElement,x=b,E=E?es(E):null,E!==null&&(P=fs(E),E!==P||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=b),x!==E)){if(T=U2,j="onMouseLeave",I="onMouseEnter",N="mouse",(o==="pointerout"||o==="pointerover")&&(T=$2,j="onPointerLeave",I="onPointerEnter",N="pointer"),P=x==null?A:ia(x),B=E==null?A:ia(E),A=new T(j,N+"leave",x,a,y),A.target=P,A.relatedTarget=B,j=null,es(y)===b&&(T=new T(I,N+"enter",E,a,y),T.target=B,T.relatedTarget=P,j=T),P=j,x&&E)t:{for(T=x,I=E,N=0,B=T;B;B=$s(B))N++;for(B=0,j=I;j;j=$s(j))B++;for(;0<N-B;)T=$s(T),N--;for(;0<B-N;)I=$s(I),B--;for(;N--;){if(T===I||I!==null&&T===I.alternate)break t;T=$s(T),I=$s(I)}T=null}else T=null;x!==null&&tE(v,A,x,T,!1),E!==null&&P!==null&&tE(v,P,E,T,!0)}}e:{if(A=b?ia(b):window,x=A.nodeName&&A.nodeName.toLowerCase(),x==="select"||x==="input"&&A.type==="file")var q=d$;else if(G2(A))if(zD)q=g$;else{q=h$;var Z=u$}else(x=A.nodeName)&&x.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(q=f$);if(q&&(q=q(o,b))){PD(v,q,a,y);break e}Z&&Z(o,A,b),o==="focusout"&&(Z=A._wrapperState)&&Z.controlled&&A.type==="number"&&R0(A,"number",A.value)}switch(Z=b?ia(b):window,o){case"focusin":(G2(Z)||Z.contentEditable==="true")&&(ta=Z,Q0=b,ll=null);break;case"focusout":ll=Q0=ta=null;break;case"mousedown":J0=!0;break;case"contextmenu":case"mouseup":case"dragend":J0=!1,J2(v,a,y);break;case"selectionchange":if(k$)break;case"keydown":case"keyup":J2(v,a,y)}var K;if(cw)e:{switch(o){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else ea?OD(o,a)&&(X="onCompositionEnd"):o==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(ND&&a.locale!=="ko"&&(ea||X!=="onCompositionStart"?X==="onCompositionEnd"&&ea&&(K=MD()):(Xr=y,ow="value"in Xr?Xr.value:Xr.textContent,ea=!0)),Z=Th(b,X),0<Z.length&&(X=new H2(X,o,null,a,y),v.push({event:X,listeners:Z}),K?X.data=K:(K=BD(a),K!==null&&(X.data=K)))),(K=o$?s$(o,a):a$(o,a))&&(b=Th(b,"onBeforeInput"),0<b.length&&(y=new H2("onBeforeInput","beforeinput",null,a,y),v.push({event:y,listeners:b}),y.data=K))}qD(v,i)})}function Tl(o,i,a){return{instance:o,listener:i,currentTarget:a}}function Th(o,i){for(var a=i+"Capture",l=[];o!==null;){var u=o,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=yl(o,a),h!=null&&l.unshift(Tl(o,h,u)),h=yl(o,i),h!=null&&l.push(Tl(o,h,u))),o=o.return}return l}function $s(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function tE(o,i,a,l,u){for(var h=i._reactName,g=[];a!==null&&a!==l;){var m=a,k=m.alternate,b=m.stateNode;if(k!==null&&k===l)break;m.tag===5&&b!==null&&(m=b,u?(k=yl(a,h),k!=null&&g.unshift(Tl(a,k,m))):u||(k=yl(a,h),k!=null&&g.push(Tl(a,k,m)))),a=a.return}g.length!==0&&o.push({event:i,listeners:g})}var _$=/\r\n?/g,y$=/\u0000|\uFFFD/g;function nE(o){return(typeof o=="string"?o:""+o).replace(_$,`
`).replace(y$,"")}function $u(o,i,a){if(i=nE(i),nE(o)!==i&&a)throw Error(oe(425))}function Ih(){}var X0=null,eb=null;function tb(o,i){return o==="textarea"||o==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nb=typeof setTimeout=="function"?setTimeout:void 0,A$=typeof clearTimeout=="function"?clearTimeout:void 0,iE=typeof Promise=="function"?Promise:void 0,C$=typeof queueMicrotask=="function"?queueMicrotask:typeof iE<"u"?function(o){return iE.resolve(null).then(o).catch(x$)}:nb;function x$(o){setTimeout(function(){throw o})}function s0(o,i){var a=i,l=0;do{var u=a.nextSibling;if(o.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){o.removeChild(u),xl(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);xl(i)}function oo(o){for(;o!=null;o=o.nextSibling){var i=o.nodeType;if(i===1||i===3)break;if(i===8){if(i=o.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return o}function rE(o){o=o.previousSibling;for(var i=0;o;){if(o.nodeType===8){var a=o.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return o;i--}else a==="/$"&&i++}o=o.previousSibling}return null}var Da=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Da,Il="__reactProps$"+Da,mr="__reactContainer$"+Da,ib="__reactEvents$"+Da,E$="__reactListeners$"+Da,D$="__reactHandles$"+Da;function es(o){var i=o[Ui];if(i)return i;for(var a=o.parentNode;a;){if(i=a[mr]||a[Ui]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(o=rE(o);o!==null;){if(a=o[Ui])return a;o=rE(o)}return i}o=a,a=o.parentNode}return null}function Hl(o){return o=o[Ui]||o[mr],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function ia(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(oe(33))}function cf(o){return o[Il]||null}var rb=[],ra=-1;function po(o){return{current:o}}function ht(o){0>ra||(o.current=rb[ra],rb[ra]=null,ra--)}function st(o,i){ra++,rb[ra]=o.current,o.current=i}var fo={},an=po(fo),_n=po(!1),as=fo;function ba(o,i){var a=o.type.contextTypes;if(!a)return fo;var l=o.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in a)u[h]=i[h];return l&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=i,o.__reactInternalMemoizedMaskedChildContext=u),u}function yn(o){return o=o.childContextTypes,o!=null}function Mh(){ht(_n),ht(an)}function oE(o,i,a){if(an.current!==fo)throw Error(oe(168));st(an,i),st(_n,a)}function YD(o,i,a){var l=o.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(oe(108,uH(o)||"Unknown",u));return wt({},a,l)}function Nh(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||fo,as=an.current,st(an,o),st(_n,_n.current),!0}function sE(o,i,a){var l=o.stateNode;if(!l)throw Error(oe(169));a?(o=YD(o,i,as),l.__reactInternalMemoizedMergedChildContext=o,ht(_n),ht(an),st(an,o)):ht(_n),st(_n,a)}var dr=null,lf=!1,a0=!1;function ZD(o){dr===null?dr=[o]:dr.push(o)}function S$(o){lf=!0,ZD(o)}function mo(){if(!a0&&dr!==null){a0=!0;var o=0,i=Ge;try{var a=dr;for(Ge=1;o<a.length;o++){var l=a[o];do l=l(!0);while(l!==null)}dr=null,lf=!1}catch(u){throw dr!==null&&(dr=dr.slice(o+1)),vD(tw,mo),u}finally{Ge=i,a0=!1}}return null}var oa=[],sa=0,Oh=null,Bh=0,Kn=[],Qn=0,cs=null,ur=1,hr="";function Yo(o,i){oa[sa++]=Bh,oa[sa++]=Oh,Oh=o,Bh=i}function KD(o,i,a){Kn[Qn++]=ur,Kn[Qn++]=hr,Kn[Qn++]=cs,cs=o;var l=ur;o=hr;var u=32-wi(l)-1;l&=~(1<<u),a+=1;var h=32-wi(i)+u;if(30<h){var g=u-u%5;h=(l&(1<<g)-1).toString(32),l>>=g,u-=g,ur=1<<32-wi(i)+u|a<<u|l,hr=h+o}else ur=1<<h|a<<u|l,hr=o}function dw(o){o.return!==null&&(Yo(o,1),KD(o,1,0))}function uw(o){for(;o===Oh;)Oh=oa[--sa],oa[sa]=null,Bh=oa[--sa],oa[sa]=null;for(;o===cs;)cs=Kn[--Qn],Kn[Qn]=null,hr=Kn[--Qn],Kn[Qn]=null,ur=Kn[--Qn],Kn[Qn]=null}var zn=null,Pn=null,ft=!1,ki=null;function QD(o,i){var a=Xn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=o,i=o.deletions,i===null?(o.deletions=[a],o.flags|=16):i.push(a)}function aE(o,i){switch(o.tag){case 5:var a=o.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(o.stateNode=i,zn=o,Pn=oo(i.firstChild),!0):!1;case 6:return i=o.pendingProps===""||i.nodeType!==3?null:i,i!==null?(o.stateNode=i,zn=o,Pn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=cs!==null?{id:ur,overflow:hr}:null,o.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Xn(18,null,null,0),a.stateNode=i,a.return=o,o.child=a,zn=o,Pn=null,!0):!1;default:return!1}}function ob(o){return(o.mode&1)!==0&&(o.flags&128)===0}function sb(o){if(ft){var i=Pn;if(i){var a=i;if(!aE(o,i)){if(ob(o))throw Error(oe(418));i=oo(a.nextSibling);var l=zn;i&&aE(o,i)?QD(l,a):(o.flags=o.flags&-4097|2,ft=!1,zn=o)}}else{if(ob(o))throw Error(oe(418));o.flags=o.flags&-4097|2,ft=!1,zn=o}}}function cE(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;zn=o}function Wu(o){if(o!==zn)return!1;if(!ft)return cE(o),ft=!0,!1;var i;if((i=o.tag!==3)&&!(i=o.tag!==5)&&(i=o.type,i=i!=="head"&&i!=="body"&&!tb(o.type,o.memoizedProps)),i&&(i=Pn)){if(ob(o))throw JD(),Error(oe(418));for(;i;)QD(o,i),i=oo(i.nextSibling)}if(cE(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(oe(317));e:{for(o=o.nextSibling,i=0;o;){if(o.nodeType===8){var a=o.data;if(a==="/$"){if(i===0){Pn=oo(o.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}o=o.nextSibling}Pn=null}}else Pn=zn?oo(o.stateNode.nextSibling):null;return!0}function JD(){for(var o=Pn;o;)o=oo(o.nextSibling)}function wa(){Pn=zn=null,ft=!1}function hw(o){ki===null?ki=[o]:ki.push(o)}var T$=_r.ReactCurrentBatchConfig;function gi(o,i){if(o&&o.defaultProps){i=wt({},i),o=o.defaultProps;for(var a in o)i[a]===void 0&&(i[a]=o[a]);return i}return i}var Ph=po(null),zh=null,aa=null,fw=null;function gw(){fw=aa=zh=null}function pw(o){var i=Ph.current;ht(Ph),o._currentValue=i}function ab(o,i,a){for(;o!==null;){var l=o.alternate;if((o.childLanes&i)!==i?(o.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),o===a)break;o=o.return}}function ga(o,i){zh=o,fw=aa=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&i&&(vn=!0),o.firstContext=null)}function ni(o){var i=o._currentValue;if(fw!==o)if(o={context:o,memoizedValue:i,next:null},aa===null){if(zh===null)throw Error(oe(308));aa=o,zh.dependencies={lanes:0,firstContext:o}}else aa=aa.next=o;return i}var ts=null;function mw(o){ts===null?ts=[o]:ts.push(o)}function XD(o,i,a,l){var u=i.interleaved;return u===null?(a.next=a,mw(i)):(a.next=u.next,u.next=a),i.interleaved=a,kr(o,l)}function kr(o,i){o.lanes|=i;var a=o.alternate;for(a!==null&&(a.lanes|=i),a=o,o=o.return;o!==null;)o.childLanes|=i,a=o.alternate,a!==null&&(a.childLanes|=i),a=o,o=o.return;return a.tag===3?a.stateNode:null}var qr=!1;function kw(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eS(o,i){o=o.updateQueue,i.updateQueue===o&&(i.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function gr(o,i){return{eventTime:o,lane:i,tag:0,payload:null,callback:null,next:null}}function so(o,i,a){var l=o.updateQueue;if(l===null)return null;if(l=l.shared,je&2){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,kr(o,a)}return u=l.interleaved,u===null?(i.next=i,mw(l)):(i.next=u.next,u.next=i),l.interleaved=i,kr(o,a)}function fh(o,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=o.pendingLanes,a|=l,i.lanes=a,nw(o,a)}}function lE(o,i){var a=o.updateQueue,l=o.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?u=h=g:h=h.next=g,a=a.next}while(a!==null);h===null?u=h=i:h=h.next=i}else u=h=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},o.updateQueue=a;return}o=a.lastBaseUpdate,o===null?a.firstBaseUpdate=i:o.next=i,a.lastBaseUpdate=i}function Lh(o,i,a,l){var u=o.updateQueue;qr=!1;var h=u.firstBaseUpdate,g=u.lastBaseUpdate,m=u.shared.pending;if(m!==null){u.shared.pending=null;var k=m,b=k.next;k.next=null,g===null?h=b:g.next=b,g=k;var y=o.alternate;y!==null&&(y=y.updateQueue,m=y.lastBaseUpdate,m!==g&&(m===null?y.firstBaseUpdate=b:m.next=b,y.lastBaseUpdate=k))}if(h!==null){var v=u.baseState;g=0,y=b=k=null,m=h;do{var A=m.lane,x=m.eventTime;if((l&A)===A){y!==null&&(y=y.next={eventTime:x,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var E=o,T=m;switch(A=i,x=a,T.tag){case 1:if(E=T.payload,typeof E=="function"){v=E.call(x,v,A);break e}v=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=T.payload,A=typeof E=="function"?E.call(x,v,A):E,A==null)break e;v=wt({},v,A);break e;case 2:qr=!0}}m.callback!==null&&m.lane!==0&&(o.flags|=64,A=u.effects,A===null?u.effects=[m]:A.push(m))}else x={eventTime:x,lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},y===null?(b=y=x,k=v):y=y.next=x,g|=A;if(m=m.next,m===null){if(m=u.shared.pending,m===null)break;A=m,m=A.next,A.next=null,u.lastBaseUpdate=A,u.shared.pending=null}}while(1);if(y===null&&(k=v),u.baseState=k,u.firstBaseUpdate=b,u.lastBaseUpdate=y,i=u.shared.interleaved,i!==null){u=i;do g|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);ds|=g,o.lanes=g,o.memoizedState=v}}function dE(o,i,a){if(o=i.effects,i.effects=null,o!==null)for(i=0;i<o.length;i++){var l=o[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(oe(191,u));u.call(l)}}}var tS=new X5.Component().refs;function cb(o,i,a,l){i=o.memoizedState,a=a(l,i),a=a==null?i:wt({},i,a),o.memoizedState=a,o.lanes===0&&(o.updateQueue.baseState=a)}var df={isMounted:function(o){return(o=o._reactInternals)?fs(o)===o:!1},enqueueSetState:function(o,i,a){o=o._reactInternals;var l=un(),u=co(o),h=gr(l,u);h.payload=i,a!=null&&(h.callback=a),i=so(o,h,u),i!==null&&(vi(i,o,u,l),fh(i,o,u))},enqueueReplaceState:function(o,i,a){o=o._reactInternals;var l=un(),u=co(o),h=gr(l,u);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=so(o,h,u),i!==null&&(vi(i,o,u,l),fh(i,o,u))},enqueueForceUpdate:function(o,i){o=o._reactInternals;var a=un(),l=co(o),u=gr(a,l);u.tag=2,i!=null&&(u.callback=i),i=so(o,u,l),i!==null&&(vi(i,o,l,a),fh(i,o,l))}};function uE(o,i,a,l,u,h,g){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(l,h,g):i.prototype&&i.prototype.isPureReactComponent?!Dl(a,l)||!Dl(u,h):!0}function nS(o,i,a){var l=!1,u=fo,h=i.contextType;return typeof h=="object"&&h!==null?h=ni(h):(u=yn(i)?as:an.current,l=i.contextTypes,h=(l=l!=null)?ba(o,u):fo),i=new i(a,h),o.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=df,o.stateNode=i,i._reactInternals=o,l&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=u,o.__reactInternalMemoizedMaskedChildContext=h),i}function hE(o,i,a,l){o=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==o&&df.enqueueReplaceState(i,i.state,null)}function lb(o,i,a,l){var u=o.stateNode;u.props=a,u.state=o.memoizedState,u.refs=tS,kw(o);var h=i.contextType;typeof h=="object"&&h!==null?u.context=ni(h):(h=yn(i)?as:an.current,u.context=ba(o,h)),u.state=o.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(cb(o,i,h,a),u.state=o.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&df.enqueueReplaceState(u,u.state,null),Lh(o,a,u,l),u.state=o.memoizedState),typeof u.componentDidMount=="function"&&(o.flags|=4194308)}function Wc(o,i,a){if(o=a.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(oe(309));var l=a.stateNode}if(!l)throw Error(oe(147,o));var u=l,h=""+o;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(g){var m=u.refs;m===tS&&(m=u.refs={}),g===null?delete m[h]:m[h]=g},i._stringRef=h,i)}if(typeof o!="string")throw Error(oe(284));if(!a._owner)throw Error(oe(290,o))}return o}function qu(o,i){throw o=Object.prototype.toString.call(i),Error(oe(31,o==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":o))}function fE(o){var i=o._init;return i(o._payload)}function iS(o){function i(I,N){if(o){var B=I.deletions;B===null?(I.deletions=[N],I.flags|=16):B.push(N)}}function a(I,N){if(!o)return null;for(;N!==null;)i(I,N),N=N.sibling;return null}function l(I,N){for(I=new Map;N!==null;)N.key!==null?I.set(N.key,N):I.set(N.index,N),N=N.sibling;return I}function u(I,N){return I=lo(I,N),I.index=0,I.sibling=null,I}function h(I,N,B){return I.index=B,o?(B=I.alternate,B!==null?(B=B.index,B<N?(I.flags|=2,N):B):(I.flags|=2,N)):(I.flags|=1048576,N)}function g(I){return o&&I.alternate===null&&(I.flags|=2),I}function m(I,N,B,j){return N===null||N.tag!==6?(N=g0(B,I.mode,j),N.return=I,N):(N=u(N,B),N.return=I,N)}function k(I,N,B,j){var q=B.type;return q===Xs?y(I,N,B.props.children,j,B.key):N!==null&&(N.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Wr&&fE(q)===N.type)?(j=u(N,B.props),j.ref=Wc(I,N,B),j.return=I,j):(j=wh(B.type,B.key,B.props,null,I.mode,j),j.ref=Wc(I,N,B),j.return=I,j)}function b(I,N,B,j){return N===null||N.tag!==4||N.stateNode.containerInfo!==B.containerInfo||N.stateNode.implementation!==B.implementation?(N=p0(B,I.mode,j),N.return=I,N):(N=u(N,B.children||[]),N.return=I,N)}function y(I,N,B,j,q){return N===null||N.tag!==7?(N=os(B,I.mode,j,q),N.return=I,N):(N=u(N,B),N.return=I,N)}function v(I,N,B){if(typeof N=="string"&&N!==""||typeof N=="number")return N=g0(""+N,I.mode,B),N.return=I,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Pu:return B=wh(N.type,N.key,N.props,null,I.mode,B),B.ref=Wc(I,null,N),B.return=I,B;case Js:return N=p0(N,I.mode,B),N.return=I,N;case Wr:var j=N._init;return v(I,j(N._payload),B)}if(Jc(N)||Fc(N))return N=os(N,I.mode,B,null),N.return=I,N;qu(I,N)}return null}function A(I,N,B,j){var q=N!==null?N.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return q!==null?null:m(I,N,""+B,j);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Pu:return B.key===q?k(I,N,B,j):null;case Js:return B.key===q?b(I,N,B,j):null;case Wr:return q=B._init,A(I,N,q(B._payload),j)}if(Jc(B)||Fc(B))return q!==null?null:y(I,N,B,j,null);qu(I,B)}return null}function x(I,N,B,j,q){if(typeof j=="string"&&j!==""||typeof j=="number")return I=I.get(B)||null,m(N,I,""+j,q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Pu:return I=I.get(j.key===null?B:j.key)||null,k(N,I,j,q);case Js:return I=I.get(j.key===null?B:j.key)||null,b(N,I,j,q);case Wr:var Z=j._init;return x(I,N,B,Z(j._payload),q)}if(Jc(j)||Fc(j))return I=I.get(B)||null,y(N,I,j,q,null);qu(N,j)}return null}function E(I,N,B,j){for(var q=null,Z=null,K=N,X=N=0,re=null;K!==null&&X<B.length;X++){K.index>X?(re=K,K=null):re=K.sibling;var ce=A(I,K,B[X],j);if(ce===null){K===null&&(K=re);break}o&&K&&ce.alternate===null&&i(I,K),N=h(ce,N,X),Z===null?q=ce:Z.sibling=ce,Z=ce,K=re}if(X===B.length)return a(I,K),ft&&Yo(I,X),q;if(K===null){for(;X<B.length;X++)K=v(I,B[X],j),K!==null&&(N=h(K,N,X),Z===null?q=K:Z.sibling=K,Z=K);return ft&&Yo(I,X),q}for(K=l(I,K);X<B.length;X++)re=x(K,I,X,B[X],j),re!==null&&(o&&re.alternate!==null&&K.delete(re.key===null?X:re.key),N=h(re,N,X),Z===null?q=re:Z.sibling=re,Z=re);return o&&K.forEach(function($){return i(I,$)}),ft&&Yo(I,X),q}function T(I,N,B,j){var q=Fc(B);if(typeof q!="function")throw Error(oe(150));if(B=q.call(B),B==null)throw Error(oe(151));for(var Z=q=null,K=N,X=N=0,re=null,ce=B.next();K!==null&&!ce.done;X++,ce=B.next()){K.index>X?(re=K,K=null):re=K.sibling;var $=A(I,K,ce.value,j);if($===null){K===null&&(K=re);break}o&&K&&$.alternate===null&&i(I,K),N=h($,N,X),Z===null?q=$:Z.sibling=$,Z=$,K=re}if(ce.done)return a(I,K),ft&&Yo(I,X),q;if(K===null){for(;!ce.done;X++,ce=B.next())ce=v(I,ce.value,j),ce!==null&&(N=h(ce,N,X),Z===null?q=ce:Z.sibling=ce,Z=ce);return ft&&Yo(I,X),q}for(K=l(I,K);!ce.done;X++,ce=B.next())ce=x(K,I,X,ce.value,j),ce!==null&&(o&&ce.alternate!==null&&K.delete(ce.key===null?X:ce.key),N=h(ce,N,X),Z===null?q=ce:Z.sibling=ce,Z=ce);return o&&K.forEach(function(G){return i(I,G)}),ft&&Yo(I,X),q}function P(I,N,B,j){if(typeof B=="object"&&B!==null&&B.type===Xs&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Pu:e:{for(var q=B.key,Z=N;Z!==null;){if(Z.key===q){if(q=B.type,q===Xs){if(Z.tag===7){a(I,Z.sibling),N=u(Z,B.props.children),N.return=I,I=N;break e}}else if(Z.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Wr&&fE(q)===Z.type){a(I,Z.sibling),N=u(Z,B.props),N.ref=Wc(I,Z,B),N.return=I,I=N;break e}a(I,Z);break}else i(I,Z);Z=Z.sibling}B.type===Xs?(N=os(B.props.children,I.mode,j,B.key),N.return=I,I=N):(j=wh(B.type,B.key,B.props,null,I.mode,j),j.ref=Wc(I,N,B),j.return=I,I=j)}return g(I);case Js:e:{for(Z=B.key;N!==null;){if(N.key===Z)if(N.tag===4&&N.stateNode.containerInfo===B.containerInfo&&N.stateNode.implementation===B.implementation){a(I,N.sibling),N=u(N,B.children||[]),N.return=I,I=N;break e}else{a(I,N);break}else i(I,N);N=N.sibling}N=p0(B,I.mode,j),N.return=I,I=N}return g(I);case Wr:return Z=B._init,P(I,N,Z(B._payload),j)}if(Jc(B))return E(I,N,B,j);if(Fc(B))return T(I,N,B,j);qu(I,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,N!==null&&N.tag===6?(a(I,N.sibling),N=u(N,B),N.return=I,I=N):(a(I,N),N=g0(B,I.mode,j),N.return=I,I=N),g(I)):a(I,N)}return P}var va=iS(!0),rS=iS(!1),$l={},Wi=po($l),Ml=po($l),Nl=po($l);function ns(o){if(o===$l)throw Error(oe(174));return o}function bw(o,i){switch(st(Nl,i),st(Ml,o),st(Wi,$l),o=i.nodeType,o){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:V0(null,"");break;default:o=o===8?i.parentNode:i,i=o.namespaceURI||null,o=o.tagName,i=V0(i,o)}ht(Wi),st(Wi,i)}function _a(){ht(Wi),ht(Ml),ht(Nl)}function oS(o){ns(Nl.current);var i=ns(Wi.current),a=V0(i,o.type);i!==a&&(st(Ml,o),st(Wi,a))}function ww(o){Ml.current===o&&(ht(Wi),ht(Ml))}var kt=po(0);function jh(o){for(var i=o;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break;for(;i.sibling===null;){if(i.return===null||i.return===o)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var c0=[];function vw(){for(var o=0;o<c0.length;o++)c0[o]._workInProgressVersionPrimary=null;c0.length=0}var gh=_r.ReactCurrentDispatcher,l0=_r.ReactCurrentBatchConfig,ls=0,bt=null,Lt=null,Wt=null,Rh=!1,dl=!1,Ol=0,I$=0;function tn(){throw Error(oe(321))}function _w(o,i){if(i===null)return!1;for(var a=0;a<i.length&&a<o.length;a++)if(!_i(o[a],i[a]))return!1;return!0}function yw(o,i,a,l,u,h){if(ls=h,bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,gh.current=o===null||o.memoizedState===null?B$:P$,o=a(l,u),dl){h=0;do{if(dl=!1,Ol=0,25<=h)throw Error(oe(301));h+=1,Wt=Lt=null,i.updateQueue=null,gh.current=z$,o=a(l,u)}while(dl)}if(gh.current=Fh,i=Lt!==null&&Lt.next!==null,ls=0,Wt=Lt=bt=null,Rh=!1,i)throw Error(oe(300));return o}function Aw(){var o=Ol!==0;return Ol=0,o}function Fi(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?bt.memoizedState=Wt=o:Wt=Wt.next=o,Wt}function ii(){if(Lt===null){var o=bt.alternate;o=o!==null?o.memoizedState:null}else o=Lt.next;var i=Wt===null?bt.memoizedState:Wt.next;if(i!==null)Wt=i,Lt=o;else{if(o===null)throw Error(oe(310));Lt=o,o={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Wt===null?bt.memoizedState=Wt=o:Wt=Wt.next=o}return Wt}function Bl(o,i){return typeof i=="function"?i(o):i}function d0(o){var i=ii(),a=i.queue;if(a===null)throw Error(oe(311));a.lastRenderedReducer=o;var l=Lt,u=l.baseQueue,h=a.pending;if(h!==null){if(u!==null){var g=u.next;u.next=h.next,h.next=g}l.baseQueue=u=h,a.pending=null}if(u!==null){h=u.next,l=l.baseState;var m=g=null,k=null,b=h;do{var y=b.lane;if((ls&y)===y)k!==null&&(k=k.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),l=b.hasEagerState?b.eagerState:o(l,b.action);else{var v={lane:y,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};k===null?(m=k=v,g=l):k=k.next=v,bt.lanes|=y,ds|=y}b=b.next}while(b!==null&&b!==h);k===null?g=l:k.next=m,_i(l,i.memoizedState)||(vn=!0),i.memoizedState=l,i.baseState=g,i.baseQueue=k,a.lastRenderedState=l}if(o=a.interleaved,o!==null){u=o;do h=u.lane,bt.lanes|=h,ds|=h,u=u.next;while(u!==o)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function u0(o){var i=ii(),a=i.queue;if(a===null)throw Error(oe(311));a.lastRenderedReducer=o;var l=a.dispatch,u=a.pending,h=i.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do h=o(h,g.action),g=g.next;while(g!==u);_i(h,i.memoizedState)||(vn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function sS(){}function aS(o,i){var a=bt,l=ii(),u=i(),h=!_i(l.memoizedState,u);if(h&&(l.memoizedState=u,vn=!0),l=l.queue,Cw(dS.bind(null,a,l,o),[o]),l.getSnapshot!==i||h||Wt!==null&&Wt.memoizedState.tag&1){if(a.flags|=2048,Pl(9,lS.bind(null,a,l,u,i),void 0,null),qt===null)throw Error(oe(349));ls&30||cS(a,i,u)}return u}function cS(o,i,a){o.flags|=16384,o={getSnapshot:i,value:a},i=bt.updateQueue,i===null?(i={lastEffect:null,stores:null},bt.updateQueue=i,i.stores=[o]):(a=i.stores,a===null?i.stores=[o]:a.push(o))}function lS(o,i,a,l){i.value=a,i.getSnapshot=l,uS(i)&&hS(o)}function dS(o,i,a){return a(function(){uS(i)&&hS(o)})}function uS(o){var i=o.getSnapshot;o=o.value;try{var a=i();return!_i(o,a)}catch{return!0}}function hS(o){var i=kr(o,1);i!==null&&vi(i,o,1,-1)}function gE(o){var i=Fi();return typeof o=="function"&&(o=o()),i.memoizedState=i.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bl,lastRenderedState:o},i.queue=o,o=o.dispatch=O$.bind(null,bt,o),[i.memoizedState,o]}function Pl(o,i,a,l){return o={tag:o,create:i,destroy:a,deps:l,next:null},i=bt.updateQueue,i===null?(i={lastEffect:null,stores:null},bt.updateQueue=i,i.lastEffect=o.next=o):(a=i.lastEffect,a===null?i.lastEffect=o.next=o:(l=a.next,a.next=o,o.next=l,i.lastEffect=o)),o}function fS(){return ii().memoizedState}function ph(o,i,a,l){var u=Fi();bt.flags|=o,u.memoizedState=Pl(1|i,a,void 0,l===void 0?null:l)}function uf(o,i,a,l){var u=ii();l=l===void 0?null:l;var h=void 0;if(Lt!==null){var g=Lt.memoizedState;if(h=g.destroy,l!==null&&_w(l,g.deps)){u.memoizedState=Pl(i,a,h,l);return}}bt.flags|=o,u.memoizedState=Pl(1|i,a,h,l)}function pE(o,i){return ph(8390656,8,o,i)}function Cw(o,i){return uf(2048,8,o,i)}function gS(o,i){return uf(4,2,o,i)}function pS(o,i){return uf(4,4,o,i)}function mS(o,i){if(typeof i=="function")return o=o(),i(o),function(){i(null)};if(i!=null)return o=o(),i.current=o,function(){i.current=null}}function kS(o,i,a){return a=a!=null?a.concat([o]):null,uf(4,4,mS.bind(null,i,o),a)}function xw(){}function bS(o,i){var a=ii();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&_w(i,l[1])?l[0]:(a.memoizedState=[o,i],o)}function wS(o,i){var a=ii();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&_w(i,l[1])?l[0]:(o=o(),a.memoizedState=[o,i],o)}function vS(o,i,a){return ls&21?(_i(a,i)||(a=AD(),bt.lanes|=a,ds|=a,o.baseState=!0),i):(o.baseState&&(o.baseState=!1,vn=!0),o.memoizedState=a)}function M$(o,i){var a=Ge;Ge=a!==0&&4>a?a:4,o(!0);var l=l0.transition;l0.transition={};try{o(!1),i()}finally{Ge=a,l0.transition=l}}function _S(){return ii().memoizedState}function N$(o,i,a){var l=co(o);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},yS(o))AS(i,a);else if(a=XD(o,i,a,l),a!==null){var u=un();vi(a,o,l,u),CS(a,i,l)}}function O$(o,i,a){var l=co(o),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(yS(o))AS(i,u);else{var h=o.alternate;if(o.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var g=i.lastRenderedState,m=h(g,a);if(u.hasEagerState=!0,u.eagerState=m,_i(m,g)){var k=i.interleaved;k===null?(u.next=u,mw(i)):(u.next=k.next,k.next=u),i.interleaved=u;return}}catch{}finally{}a=XD(o,i,u,l),a!==null&&(u=un(),vi(a,o,l,u),CS(a,i,l))}}function yS(o){var i=o.alternate;return o===bt||i!==null&&i===bt}function AS(o,i){dl=Rh=!0;var a=o.pending;a===null?i.next=i:(i.next=a.next,a.next=i),o.pending=i}function CS(o,i,a){if(a&4194240){var l=i.lanes;l&=o.pendingLanes,a|=l,i.lanes=a,nw(o,a)}}var Fh={readContext:ni,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},B$={readContext:ni,useCallback:function(o,i){return Fi().memoizedState=[o,i===void 0?null:i],o},useContext:ni,useEffect:pE,useImperativeHandle:function(o,i,a){return a=a!=null?a.concat([o]):null,ph(4194308,4,mS.bind(null,i,o),a)},useLayoutEffect:function(o,i){return ph(4194308,4,o,i)},useInsertionEffect:function(o,i){return ph(4,2,o,i)},useMemo:function(o,i){var a=Fi();return i=i===void 0?null:i,o=o(),a.memoizedState=[o,i],o},useReducer:function(o,i,a){var l=Fi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:i},l.queue=o,o=o.dispatch=N$.bind(null,bt,o),[l.memoizedState,o]},useRef:function(o){var i=Fi();return o={current:o},i.memoizedState=o},useState:gE,useDebugValue:xw,useDeferredValue:function(o){return Fi().memoizedState=o},useTransition:function(){var o=gE(!1),i=o[0];return o=M$.bind(null,o[1]),Fi().memoizedState=o,[i,o]},useMutableSource:function(){},useSyncExternalStore:function(o,i,a){var l=bt,u=Fi();if(ft){if(a===void 0)throw Error(oe(407));a=a()}else{if(a=i(),qt===null)throw Error(oe(349));ls&30||cS(l,i,a)}u.memoizedState=a;var h={value:a,getSnapshot:i};return u.queue=h,pE(dS.bind(null,l,h,o),[o]),l.flags|=2048,Pl(9,lS.bind(null,l,h,a,i),void 0,null),a},useId:function(){var o=Fi(),i=qt.identifierPrefix;if(ft){var a=hr,l=ur;a=(l&~(1<<32-wi(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ol++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=I$++,i=":"+i+"r"+a.toString(32)+":";return o.memoizedState=i},unstable_isNewReconciler:!1},P$={readContext:ni,useCallback:bS,useContext:ni,useEffect:Cw,useImperativeHandle:kS,useInsertionEffect:gS,useLayoutEffect:pS,useMemo:wS,useReducer:d0,useRef:fS,useState:function(){return d0(Bl)},useDebugValue:xw,useDeferredValue:function(o){var i=ii();return vS(i,Lt.memoizedState,o)},useTransition:function(){var o=d0(Bl)[0],i=ii().memoizedState;return[o,i]},useMutableSource:sS,useSyncExternalStore:aS,useId:_S,unstable_isNewReconciler:!1},z$={readContext:ni,useCallback:bS,useContext:ni,useEffect:Cw,useImperativeHandle:kS,useInsertionEffect:gS,useLayoutEffect:pS,useMemo:wS,useReducer:u0,useRef:fS,useState:function(){return u0(Bl)},useDebugValue:xw,useDeferredValue:function(o){var i=ii();return Lt===null?i.memoizedState=o:vS(i,Lt.memoizedState,o)},useTransition:function(){var o=u0(Bl)[0],i=ii().memoizedState;return[o,i]},useMutableSource:sS,useSyncExternalStore:aS,useId:_S,unstable_isNewReconciler:!1};function ya(o,i){try{var a="",l=i;do a+=dH(l),l=l.return;while(l);var u=a}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:o,source:i,stack:u,digest:null}}function h0(o,i,a){return{value:o,source:null,stack:a??null,digest:i??null}}function db(o,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var L$=typeof WeakMap=="function"?WeakMap:Map;function xS(o,i,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Uh||(Uh=!0,vb=l),db(o,i)},a}function ES(o,i,a){a=gr(-1,a),a.tag=3;var l=o.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){db(o,i)}}var h=o.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){db(o,i),typeof l!="function"&&(ao===null?ao=new Set([this]):ao.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),a}function mE(o,i,a){var l=o.pingCache;if(l===null){l=o.pingCache=new L$;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),o=Q$.bind(null,o,i,a),i.then(o,o))}function kE(o){do{var i;if((i=o.tag===13)&&(i=o.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return o;o=o.return}while(o!==null);return null}function bE(o,i,a,l,u){return o.mode&1?(o.flags|=65536,o.lanes=u,o):(o===i?o.flags|=65536:(o.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=gr(-1,1),i.tag=2,so(a,i,1))),a.lanes|=1),o)}var j$=_r.ReactCurrentOwner,vn=!1;function ln(o,i,a,l){i.child=o===null?rS(i,null,a,l):va(i,o.child,a,l)}function wE(o,i,a,l,u){a=a.render;var h=i.ref;return ga(i,u),l=yw(o,i,a,l,h,u),a=Aw(),o!==null&&!vn?(i.updateQueue=o.updateQueue,i.flags&=-2053,o.lanes&=~u,br(o,i,u)):(ft&&a&&dw(i),i.flags|=1,ln(o,i,l,u),i.child)}function vE(o,i,a,l,u){if(o===null){var h=a.type;return typeof h=="function"&&!Ow(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,DS(o,i,h,l,u)):(o=wh(a.type,null,l,i,i.mode,u),o.ref=i.ref,o.return=i,i.child=o)}if(h=o.child,!(o.lanes&u)){var g=h.memoizedProps;if(a=a.compare,a=a!==null?a:Dl,a(g,l)&&o.ref===i.ref)return br(o,i,u)}return i.flags|=1,o=lo(h,l),o.ref=i.ref,o.return=i,i.child=o}function DS(o,i,a,l,u){if(o!==null){var h=o.memoizedProps;if(Dl(h,l)&&o.ref===i.ref)if(vn=!1,i.pendingProps=l=h,(o.lanes&u)!==0)o.flags&131072&&(vn=!0);else return i.lanes=o.lanes,br(o,i,u)}return ub(o,i,a,l,u)}function SS(o,i,a){var l=i.pendingProps,u=l.children,h=o!==null?o.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(la,On),On|=a;else{if(!(a&1073741824))return o=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:o,cachePool:null,transitions:null},i.updateQueue=null,st(la,On),On|=o,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,st(la,On),On|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,st(la,On),On|=l;return ln(o,i,u,a),i.child}function TS(o,i){var a=i.ref;(o===null&&a!==null||o!==null&&o.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ub(o,i,a,l,u){var h=yn(a)?as:an.current;return h=ba(i,h),ga(i,u),a=yw(o,i,a,l,h,u),l=Aw(),o!==null&&!vn?(i.updateQueue=o.updateQueue,i.flags&=-2053,o.lanes&=~u,br(o,i,u)):(ft&&l&&dw(i),i.flags|=1,ln(o,i,a,u),i.child)}function _E(o,i,a,l,u){if(yn(a)){var h=!0;Nh(i)}else h=!1;if(ga(i,u),i.stateNode===null)mh(o,i),nS(i,a,l),lb(i,a,l,u),l=!0;else if(o===null){var g=i.stateNode,m=i.memoizedProps;g.props=m;var k=g.context,b=a.contextType;typeof b=="object"&&b!==null?b=ni(b):(b=yn(a)?as:an.current,b=ba(i,b));var y=a.getDerivedStateFromProps,v=typeof y=="function"||typeof g.getSnapshotBeforeUpdate=="function";v||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(m!==l||k!==b)&&hE(i,g,l,b),qr=!1;var A=i.memoizedState;g.state=A,Lh(i,l,g,u),k=i.memoizedState,m!==l||A!==k||_n.current||qr?(typeof y=="function"&&(cb(i,a,y,l),k=i.memoizedState),(m=qr||uE(i,a,m,l,A,k,b))?(v||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),g.props=l,g.state=k,g.context=b,l=m):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{g=i.stateNode,eS(o,i),m=i.memoizedProps,b=i.type===i.elementType?m:gi(i.type,m),g.props=b,v=i.pendingProps,A=g.context,k=a.contextType,typeof k=="object"&&k!==null?k=ni(k):(k=yn(a)?as:an.current,k=ba(i,k));var x=a.getDerivedStateFromProps;(y=typeof x=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(m!==v||A!==k)&&hE(i,g,l,k),qr=!1,A=i.memoizedState,g.state=A,Lh(i,l,g,u);var E=i.memoizedState;m!==v||A!==E||_n.current||qr?(typeof x=="function"&&(cb(i,a,x,l),E=i.memoizedState),(b=qr||uE(i,a,b,l,A,E,k)||!1)?(y||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,E,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,E,k)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||m===o.memoizedProps&&A===o.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||m===o.memoizedProps&&A===o.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=E),g.props=l,g.state=E,g.context=k,l=b):(typeof g.componentDidUpdate!="function"||m===o.memoizedProps&&A===o.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||m===o.memoizedProps&&A===o.memoizedState||(i.flags|=1024),l=!1)}return hb(o,i,a,l,h,u)}function hb(o,i,a,l,u,h){TS(o,i);var g=(i.flags&128)!==0;if(!l&&!g)return u&&sE(i,a,!1),br(o,i,h);l=i.stateNode,j$.current=i;var m=g&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,o!==null&&g?(i.child=va(i,o.child,null,h),i.child=va(i,null,m,h)):ln(o,i,m,h),i.memoizedState=l.state,u&&sE(i,a,!0),i.child}function IS(o){var i=o.stateNode;i.pendingContext?oE(o,i.pendingContext,i.pendingContext!==i.context):i.context&&oE(o,i.context,!1),bw(o,i.containerInfo)}function yE(o,i,a,l,u){return wa(),hw(u),i.flags|=256,ln(o,i,a,l),i.child}var fb={dehydrated:null,treeContext:null,retryLane:0};function gb(o){return{baseLanes:o,cachePool:null,transitions:null}}function MS(o,i,a){var l=i.pendingProps,u=kt.current,h=!1,g=(i.flags&128)!==0,m;if((m=g)||(m=o!==null&&o.memoizedState===null?!1:(u&2)!==0),m?(h=!0,i.flags&=-129):(o===null||o.memoizedState!==null)&&(u|=1),st(kt,u&1),o===null)return sb(i),o=i.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(i.mode&1?o.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(g=l.children,o=l.fallback,h?(l=i.mode,h=i.child,g={mode:"hidden",children:g},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=g):h=gf(g,l,0,null),o=os(o,l,a,null),h.return=i,o.return=i,h.sibling=o,i.child=h,i.child.memoizedState=gb(a),i.memoizedState=fb,o):Ew(i,g));if(u=o.memoizedState,u!==null&&(m=u.dehydrated,m!==null))return R$(o,i,g,l,m,u,a);if(h){h=l.fallback,g=i.mode,u=o.child,m=u.sibling;var k={mode:"hidden",children:l.children};return!(g&1)&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=lo(u,k),l.subtreeFlags=u.subtreeFlags&14680064),m!==null?h=lo(m,h):(h=os(h,g,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,g=o.child.memoizedState,g=g===null?gb(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=o.childLanes&~a,i.memoizedState=fb,l}return h=o.child,o=h.sibling,l=lo(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=a),l.return=i,l.sibling=null,o!==null&&(a=i.deletions,a===null?(i.deletions=[o],i.flags|=16):a.push(o)),i.child=l,i.memoizedState=null,l}function Ew(o,i){return i=gf({mode:"visible",children:i},o.mode,0,null),i.return=o,o.child=i}function Gu(o,i,a,l){return l!==null&&hw(l),va(i,o.child,null,a),o=Ew(i,i.pendingProps.children),o.flags|=2,i.memoizedState=null,o}function R$(o,i,a,l,u,h,g){if(a)return i.flags&256?(i.flags&=-257,l=h0(Error(oe(422))),Gu(o,i,g,l)):i.memoizedState!==null?(i.child=o.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=gf({mode:"visible",children:l.children},u,0,null),h=os(h,u,g,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&va(i,o.child,null,g),i.child.memoizedState=gb(g),i.memoizedState=fb,h);if(!(i.mode&1))return Gu(o,i,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var m=l.dgst;return l=m,h=Error(oe(419)),l=h0(h,l,void 0),Gu(o,i,g,l)}if(m=(g&o.childLanes)!==0,vn||m){if(l=qt,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(l.suspendedLanes|g)?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,kr(o,u),vi(l,o,u,-1))}return Nw(),l=h0(Error(oe(421))),Gu(o,i,g,l)}return u.data==="$?"?(i.flags|=128,i.child=o.child,i=J$.bind(null,o),u._reactRetry=i,null):(o=h.treeContext,Pn=oo(u.nextSibling),zn=i,ft=!0,ki=null,o!==null&&(Kn[Qn++]=ur,Kn[Qn++]=hr,Kn[Qn++]=cs,ur=o.id,hr=o.overflow,cs=i),i=Ew(i,l.children),i.flags|=4096,i)}function AE(o,i,a){o.lanes|=i;var l=o.alternate;l!==null&&(l.lanes|=i),ab(o.return,i,a)}function f0(o,i,a,l,u){var h=o.memoizedState;h===null?o.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=u)}function NS(o,i,a){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(ln(o,i,l.children,a),l=kt.current,l&2)l=l&1|2,i.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=i.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&AE(o,a,i);else if(o.tag===19)AE(o,a,i);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break e;for(;o.sibling===null;){if(o.return===null||o.return===i)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}l&=1}if(st(kt,l),!(i.mode&1))i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)o=a.alternate,o!==null&&jh(o)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),f0(i,!1,u,a,h);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(o=u.alternate,o!==null&&jh(o)===null){i.child=u;break}o=u.sibling,u.sibling=a,a=u,u=o}f0(i,!0,a,null,h);break;case"together":f0(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function mh(o,i){!(i.mode&1)&&o!==null&&(o.alternate=null,i.alternate=null,i.flags|=2)}function br(o,i,a){if(o!==null&&(i.dependencies=o.dependencies),ds|=i.lanes,!(a&i.childLanes))return null;if(o!==null&&i.child!==o.child)throw Error(oe(153));if(i.child!==null){for(o=i.child,a=lo(o,o.pendingProps),i.child=a,a.return=i;o.sibling!==null;)o=o.sibling,a=a.sibling=lo(o,o.pendingProps),a.return=i;a.sibling=null}return i.child}function F$(o,i,a){switch(i.tag){case 3:IS(i),wa();break;case 5:oS(i);break;case 1:yn(i.type)&&Nh(i);break;case 4:bw(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;st(Ph,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(st(kt,kt.current&1),i.flags|=128,null):a&i.child.childLanes?MS(o,i,a):(st(kt,kt.current&1),o=br(o,i,a),o!==null?o.sibling:null);st(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,o.flags&128){if(l)return NS(o,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),st(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,SS(o,i,a)}return br(o,i,a)}var OS,pb,BS,PS;OS=function(o,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)o.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};pb=function(){};BS=function(o,i,a,l){var u=o.memoizedProps;if(u!==l){o=i.stateNode,ns(Wi.current);var h=null;switch(a){case"input":u=L0(o,u),l=L0(o,l),h=[];break;case"select":u=wt({},u,{value:void 0}),l=wt({},l,{value:void 0}),h=[];break;case"textarea":u=F0(o,u),l=F0(o,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(o.onclick=Ih)}U0(a,l);var g;a=null;for(b in u)if(!l.hasOwnProperty(b)&&u.hasOwnProperty(b)&&u[b]!=null)if(b==="style"){var m=u[b];for(g in m)m.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(vl.hasOwnProperty(b)?h||(h=[]):(h=h||[]).push(b,null));for(b in l){var k=l[b];if(m=u!=null?u[b]:void 0,l.hasOwnProperty(b)&&k!==m&&(k!=null||m!=null))if(b==="style")if(m){for(g in m)!m.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in k)k.hasOwnProperty(g)&&m[g]!==k[g]&&(a||(a={}),a[g]=k[g])}else a||(h||(h=[]),h.push(b,a)),a=k;else b==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,m=m?m.__html:void 0,k!=null&&m!==k&&(h=h||[]).push(b,k)):b==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(b,""+k):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(vl.hasOwnProperty(b)?(k!=null&&b==="onScroll"&&dt("scroll",o),h||m===k||(h=[])):(h=h||[]).push(b,k))}a&&(h=h||[]).push("style",a);var b=h;(i.updateQueue=b)&&(i.flags|=4)}};PS=function(o,i,a,l){a!==l&&(i.flags|=4)};function qc(o,i){if(!ft)switch(o.tailMode){case"hidden":i=o.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?o.tail=null:a.sibling=null;break;case"collapsed":a=o.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||o.tail===null?o.tail=null:o.tail.sibling=null:l.sibling=null}}function nn(o){var i=o.alternate!==null&&o.alternate.child===o.child,a=0,l=0;if(i)for(var u=o.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=o,u=u.sibling;else for(u=o.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=o,u=u.sibling;return o.subtreeFlags|=l,o.childLanes=a,i}function V$(o,i,a){var l=i.pendingProps;switch(uw(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(i),null;case 1:return yn(i.type)&&Mh(),nn(i),null;case 3:return l=i.stateNode,_a(),ht(_n),ht(an),vw(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(o===null||o.child===null)&&(Wu(i)?i.flags|=4:o===null||o.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,ki!==null&&(Ab(ki),ki=null))),pb(o,i),nn(i),null;case 5:ww(i);var u=ns(Nl.current);if(a=i.type,o!==null&&i.stateNode!=null)BS(o,i,a,l,u),o.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(oe(166));return nn(i),null}if(o=ns(Wi.current),Wu(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[Ui]=i,l[Il]=h,o=(i.mode&1)!==0,a){case"dialog":dt("cancel",l),dt("close",l);break;case"iframe":case"object":case"embed":dt("load",l);break;case"video":case"audio":for(u=0;u<el.length;u++)dt(el[u],l);break;case"source":dt("error",l);break;case"img":case"image":case"link":dt("error",l),dt("load",l);break;case"details":dt("toggle",l);break;case"input":N2(l,h),dt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},dt("invalid",l);break;case"textarea":B2(l,h),dt("invalid",l)}U0(a,h),u=null;for(var g in h)if(h.hasOwnProperty(g)){var m=h[g];g==="children"?typeof m=="string"?l.textContent!==m&&(h.suppressHydrationWarning!==!0&&$u(l.textContent,m,o),u=["children",m]):typeof m=="number"&&l.textContent!==""+m&&(h.suppressHydrationWarning!==!0&&$u(l.textContent,m,o),u=["children",""+m]):vl.hasOwnProperty(g)&&m!=null&&g==="onScroll"&&dt("scroll",l)}switch(a){case"input":zu(l),O2(l,h,!0);break;case"textarea":zu(l),P2(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Ih)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=cD(a)),o==="http://www.w3.org/1999/xhtml"?a==="script"?(o=g.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof l.is=="string"?o=g.createElement(a,{is:l.is}):(o=g.createElement(a),a==="select"&&(g=o,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):o=g.createElementNS(o,a),o[Ui]=i,o[Il]=l,OS(o,i,!1,!1),i.stateNode=o;e:{switch(g=H0(a,l),a){case"dialog":dt("cancel",o),dt("close",o),u=l;break;case"iframe":case"object":case"embed":dt("load",o),u=l;break;case"video":case"audio":for(u=0;u<el.length;u++)dt(el[u],o);u=l;break;case"source":dt("error",o),u=l;break;case"img":case"image":case"link":dt("error",o),dt("load",o),u=l;break;case"details":dt("toggle",o),u=l;break;case"input":N2(o,l),u=L0(o,l),dt("invalid",o);break;case"option":u=l;break;case"select":o._wrapperState={wasMultiple:!!l.multiple},u=wt({},l,{value:void 0}),dt("invalid",o);break;case"textarea":B2(o,l),u=F0(o,l),dt("invalid",o);break;default:u=l}U0(a,u),m=u;for(h in m)if(m.hasOwnProperty(h)){var k=m[h];h==="style"?uD(o,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&lD(o,k)):h==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&_l(o,k):typeof k=="number"&&_l(o,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(vl.hasOwnProperty(h)?k!=null&&h==="onScroll"&&dt("scroll",o):k!=null&&Kb(o,h,k,g))}switch(a){case"input":zu(o),O2(o,l,!1);break;case"textarea":zu(o),P2(o);break;case"option":l.value!=null&&o.setAttribute("value",""+ho(l.value));break;case"select":o.multiple=!!l.multiple,h=l.value,h!=null?da(o,!!l.multiple,h,!1):l.defaultValue!=null&&da(o,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(o.onclick=Ih)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nn(i),null;case 6:if(o&&i.stateNode!=null)PS(o,i,o.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(oe(166));if(a=ns(Nl.current),ns(Wi.current),Wu(i)){if(l=i.stateNode,a=i.memoizedProps,l[Ui]=i,(h=l.nodeValue!==a)&&(o=zn,o!==null))switch(o.tag){case 3:$u(l.nodeValue,a,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&$u(l.nodeValue,a,(o.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Ui]=i,i.stateNode=l}return nn(i),null;case 13:if(ht(kt),l=i.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(ft&&Pn!==null&&i.mode&1&&!(i.flags&128))JD(),wa(),i.flags|=98560,h=!1;else if(h=Wu(i),l!==null&&l.dehydrated!==null){if(o===null){if(!h)throw Error(oe(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(oe(317));h[Ui]=i}else wa(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;nn(i),h=!1}else ki!==null&&(Ab(ki),ki=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(l=l!==null,l!==(o!==null&&o.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(o===null||kt.current&1?jt===0&&(jt=3):Nw())),i.updateQueue!==null&&(i.flags|=4),nn(i),null);case 4:return _a(),pb(o,i),o===null&&Sl(i.stateNode.containerInfo),nn(i),null;case 10:return pw(i.type._context),nn(i),null;case 17:return yn(i.type)&&Mh(),nn(i),null;case 19:if(ht(kt),h=i.memoizedState,h===null)return nn(i),null;if(l=(i.flags&128)!==0,g=h.rendering,g===null)if(l)qc(h,!1);else{if(jt!==0||o!==null&&o.flags&128)for(o=i.child;o!==null;){if(g=jh(o),g!==null){for(i.flags|=128,qc(h,!1),l=g.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,o=l,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=o,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,o=g.dependencies,h.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),a=a.sibling;return st(kt,kt.current&1|2),i.child}o=o.sibling}h.tail!==null&&Dt()>Aa&&(i.flags|=128,l=!0,qc(h,!1),i.lanes=4194304)}else{if(!l)if(o=jh(g),o!==null){if(i.flags|=128,l=!0,a=o.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qc(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!ft)return nn(i),null}else 2*Dt()-h.renderingStartTime>Aa&&a!==1073741824&&(i.flags|=128,l=!0,qc(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(a=h.last,a!==null?a.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Dt(),i.sibling=null,a=kt.current,st(kt,l?a&1|2:a&1),i):(nn(i),null);case 22:case 23:return Mw(),l=i.memoizedState!==null,o!==null&&o.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?On&1073741824&&(nn(i),i.subtreeFlags&6&&(i.flags|=8192)):nn(i),null;case 24:return null;case 25:return null}throw Error(oe(156,i.tag))}function U$(o,i){switch(uw(i),i.tag){case 1:return yn(i.type)&&Mh(),o=i.flags,o&65536?(i.flags=o&-65537|128,i):null;case 3:return _a(),ht(_n),ht(an),vw(),o=i.flags,o&65536&&!(o&128)?(i.flags=o&-65537|128,i):null;case 5:return ww(i),null;case 13:if(ht(kt),o=i.memoizedState,o!==null&&o.dehydrated!==null){if(i.alternate===null)throw Error(oe(340));wa()}return o=i.flags,o&65536?(i.flags=o&-65537|128,i):null;case 19:return ht(kt),null;case 4:return _a(),null;case 10:return pw(i.type._context),null;case 22:case 23:return Mw(),null;case 24:return null;default:return null}}var Yu=!1,on=!1,H$=typeof WeakSet=="function"?WeakSet:Set,fe=null;function ca(o,i){var a=o.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){xt(o,i,l)}else a.current=null}function mb(o,i,a){try{a()}catch(l){xt(o,i,l)}}var CE=!1;function $$(o,i){if(X0=Dh,o=RD(),lw(o)){if("selectionStart"in o)var a={start:o.selectionStart,end:o.selectionEnd};else e:{a=(a=o.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var g=0,m=-1,k=-1,b=0,y=0,v=o,A=null;t:for(;;){for(var x;v!==a||u!==0&&v.nodeType!==3||(m=g+u),v!==h||l!==0&&v.nodeType!==3||(k=g+l),v.nodeType===3&&(g+=v.nodeValue.length),(x=v.firstChild)!==null;)A=v,v=x;for(;;){if(v===o)break t;if(A===a&&++b===u&&(m=g),A===h&&++y===l&&(k=g),(x=v.nextSibling)!==null)break;v=A,A=v.parentNode}v=x}a=m===-1||k===-1?null:{start:m,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(eb={focusedElem:o,selectionRange:a},Dh=!1,fe=i;fe!==null;)if(i=fe,o=i.child,(i.subtreeFlags&1028)!==0&&o!==null)o.return=i,fe=o;else for(;fe!==null;){i=fe;try{var E=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var T=E.memoizedProps,P=E.memoizedState,I=i.stateNode,N=I.getSnapshotBeforeUpdate(i.elementType===i.type?T:gi(i.type,T),P);I.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var B=i.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(j){xt(i,i.return,j)}if(o=i.sibling,o!==null){o.return=i.return,fe=o;break}fe=i.return}return E=CE,CE=!1,E}function ul(o,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&o)===o){var h=u.destroy;u.destroy=void 0,h!==void 0&&mb(i,a,h)}u=u.next}while(u!==l)}}function hf(o,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&o)===o){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function kb(o){var i=o.ref;if(i!==null){var a=o.stateNode;switch(o.tag){case 5:o=a;break;default:o=a}typeof i=="function"?i(o):i.current=o}}function zS(o){var i=o.alternate;i!==null&&(o.alternate=null,zS(i)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(i=o.stateNode,i!==null&&(delete i[Ui],delete i[Il],delete i[ib],delete i[E$],delete i[D$])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function LS(o){return o.tag===5||o.tag===3||o.tag===4}function xE(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||LS(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function bb(o,i,a){var l=o.tag;if(l===5||l===6)o=o.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(o,i):a.insertBefore(o,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(o,a)):(i=a,i.appendChild(o)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ih));else if(l!==4&&(o=o.child,o!==null))for(bb(o,i,a),o=o.sibling;o!==null;)bb(o,i,a),o=o.sibling}function wb(o,i,a){var l=o.tag;if(l===5||l===6)o=o.stateNode,i?a.insertBefore(o,i):a.appendChild(o);else if(l!==4&&(o=o.child,o!==null))for(wb(o,i,a),o=o.sibling;o!==null;)wb(o,i,a),o=o.sibling}var Kt=null,pi=!1;function Vr(o,i,a){for(a=a.child;a!==null;)jS(o,i,a),a=a.sibling}function jS(o,i,a){if($i&&typeof $i.onCommitFiberUnmount=="function")try{$i.onCommitFiberUnmount(rf,a)}catch{}switch(a.tag){case 5:on||ca(a,i);case 6:var l=Kt,u=pi;Kt=null,Vr(o,i,a),Kt=l,pi=u,Kt!==null&&(pi?(o=Kt,a=a.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):Kt.removeChild(a.stateNode));break;case 18:Kt!==null&&(pi?(o=Kt,a=a.stateNode,o.nodeType===8?s0(o.parentNode,a):o.nodeType===1&&s0(o,a),xl(o)):s0(Kt,a.stateNode));break;case 4:l=Kt,u=pi,Kt=a.stateNode.containerInfo,pi=!0,Vr(o,i,a),Kt=l,pi=u;break;case 0:case 11:case 14:case 15:if(!on&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,g=h.destroy;h=h.tag,g!==void 0&&(h&2||h&4)&&mb(a,i,g),u=u.next}while(u!==l)}Vr(o,i,a);break;case 1:if(!on&&(ca(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(m){xt(a,i,m)}Vr(o,i,a);break;case 21:Vr(o,i,a);break;case 22:a.mode&1?(on=(l=on)||a.memoizedState!==null,Vr(o,i,a),on=l):Vr(o,i,a);break;default:Vr(o,i,a)}}function EE(o){var i=o.updateQueue;if(i!==null){o.updateQueue=null;var a=o.stateNode;a===null&&(a=o.stateNode=new H$),i.forEach(function(l){var u=X$.bind(null,o,l);a.has(l)||(a.add(l),l.then(u,u))})}}function ui(o,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var h=o,g=i,m=g;e:for(;m!==null;){switch(m.tag){case 5:Kt=m.stateNode,pi=!1;break e;case 3:Kt=m.stateNode.containerInfo,pi=!0;break e;case 4:Kt=m.stateNode.containerInfo,pi=!0;break e}m=m.return}if(Kt===null)throw Error(oe(160));jS(h,g,u),Kt=null,pi=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(b){xt(u,i,b)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)RS(i,o),i=i.sibling}function RS(o,i){var a=o.alternate,l=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(ui(i,o),Li(o),l&4){try{ul(3,o,o.return),hf(3,o)}catch(T){xt(o,o.return,T)}try{ul(5,o,o.return)}catch(T){xt(o,o.return,T)}}break;case 1:ui(i,o),Li(o),l&512&&a!==null&&ca(a,a.return);break;case 5:if(ui(i,o),Li(o),l&512&&a!==null&&ca(a,a.return),o.flags&32){var u=o.stateNode;try{_l(u,"")}catch(T){xt(o,o.return,T)}}if(l&4&&(u=o.stateNode,u!=null)){var h=o.memoizedProps,g=a!==null?a.memoizedProps:h,m=o.type,k=o.updateQueue;if(o.updateQueue=null,k!==null)try{m==="input"&&h.type==="radio"&&h.name!=null&&sD(u,h),H0(m,g);var b=H0(m,h);for(g=0;g<k.length;g+=2){var y=k[g],v=k[g+1];y==="style"?uD(u,v):y==="dangerouslySetInnerHTML"?lD(u,v):y==="children"?_l(u,v):Kb(u,y,v,b)}switch(m){case"input":j0(u,h);break;case"textarea":aD(u,h);break;case"select":var A=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var x=h.value;x!=null?da(u,!!h.multiple,x,!1):A!==!!h.multiple&&(h.defaultValue!=null?da(u,!!h.multiple,h.defaultValue,!0):da(u,!!h.multiple,h.multiple?[]:"",!1))}u[Il]=h}catch(T){xt(o,o.return,T)}}break;case 6:if(ui(i,o),Li(o),l&4){if(o.stateNode===null)throw Error(oe(162));u=o.stateNode,h=o.memoizedProps;try{u.nodeValue=h}catch(T){xt(o,o.return,T)}}break;case 3:if(ui(i,o),Li(o),l&4&&a!==null&&a.memoizedState.isDehydrated)try{xl(i.containerInfo)}catch(T){xt(o,o.return,T)}break;case 4:ui(i,o),Li(o);break;case 13:ui(i,o),Li(o),u=o.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Tw=Dt())),l&4&&EE(o);break;case 22:if(y=a!==null&&a.memoizedState!==null,o.mode&1?(on=(b=on)||y,ui(i,o),on=b):ui(i,o),Li(o),l&8192){if(b=o.memoizedState!==null,(o.stateNode.isHidden=b)&&!y&&o.mode&1)for(fe=o,y=o.child;y!==null;){for(v=fe=y;fe!==null;){switch(A=fe,x=A.child,A.tag){case 0:case 11:case 14:case 15:ul(4,A,A.return);break;case 1:ca(A,A.return);var E=A.stateNode;if(typeof E.componentWillUnmount=="function"){l=A,a=A.return;try{i=l,E.props=i.memoizedProps,E.state=i.memoizedState,E.componentWillUnmount()}catch(T){xt(l,a,T)}}break;case 5:ca(A,A.return);break;case 22:if(A.memoizedState!==null){SE(v);continue}}x!==null?(x.return=A,fe=x):SE(v)}y=y.sibling}e:for(y=null,v=o;;){if(v.tag===5){if(y===null){y=v;try{u=v.stateNode,b?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(m=v.stateNode,k=v.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,m.style.display=dD("display",g))}catch(T){xt(o,o.return,T)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=b?"":v.memoizedProps}catch(T){xt(o,o.return,T)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===o)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===o)break e;for(;v.sibling===null;){if(v.return===null||v.return===o)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ui(i,o),Li(o),l&4&&EE(o);break;case 21:break;default:ui(i,o),Li(o)}}function Li(o){var i=o.flags;if(i&2){try{e:{for(var a=o.return;a!==null;){if(LS(a)){var l=a;break e}a=a.return}throw Error(oe(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(_l(u,""),l.flags&=-33);var h=xE(o);wb(o,h,u);break;case 3:case 4:var g=l.stateNode.containerInfo,m=xE(o);bb(o,m,g);break;default:throw Error(oe(161))}}catch(k){xt(o,o.return,k)}o.flags&=-3}i&4096&&(o.flags&=-4097)}function W$(o,i,a){fe=o,FS(o)}function FS(o,i,a){for(var l=(o.mode&1)!==0;fe!==null;){var u=fe,h=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||Yu;if(!g){var m=u.alternate,k=m!==null&&m.memoizedState!==null||on;m=Yu;var b=on;if(Yu=g,(on=k)&&!b)for(fe=u;fe!==null;)g=fe,k=g.child,g.tag===22&&g.memoizedState!==null?TE(u):k!==null?(k.return=g,fe=k):TE(u);for(;h!==null;)fe=h,FS(h),h=h.sibling;fe=u,Yu=m,on=b}DE(o)}else u.subtreeFlags&8772&&h!==null?(h.return=u,fe=h):DE(o)}}function DE(o){for(;fe!==null;){var i=fe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:on||hf(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!on)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:gi(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&dE(i,h,l);break;case 3:var g=i.updateQueue;if(g!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}dE(i,g,a)}break;case 5:var m=i.stateNode;if(a===null&&i.flags&4){a=m;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var b=i.alternate;if(b!==null){var y=b.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&xl(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}on||i.flags&512&&kb(i)}catch(A){xt(i,i.return,A)}}if(i===o){fe=null;break}if(a=i.sibling,a!==null){a.return=i.return,fe=a;break}fe=i.return}}function SE(o){for(;fe!==null;){var i=fe;if(i===o){fe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,fe=a;break}fe=i.return}}function TE(o){for(;fe!==null;){var i=fe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hf(4,i)}catch(k){xt(i,a,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(k){xt(i,u,k)}}var h=i.return;try{kb(i)}catch(k){xt(i,h,k)}break;case 5:var g=i.return;try{kb(i)}catch(k){xt(i,g,k)}}}catch(k){xt(i,i.return,k)}if(i===o){fe=null;break}var m=i.sibling;if(m!==null){m.return=i.return,fe=m;break}fe=i.return}}var q$=Math.ceil,Vh=_r.ReactCurrentDispatcher,Dw=_r.ReactCurrentOwner,ti=_r.ReactCurrentBatchConfig,je=0,qt=null,Bt=null,Qt=0,On=0,la=po(0),jt=0,zl=null,ds=0,ff=0,Sw=0,hl=null,wn=null,Tw=0,Aa=1/0,lr=null,Uh=!1,vb=null,ao=null,Zu=!1,eo=null,Hh=0,fl=0,_b=null,kh=-1,bh=0;function un(){return je&6?Dt():kh!==-1?kh:kh=Dt()}function co(o){return o.mode&1?je&2&&Qt!==0?Qt&-Qt:T$.transition!==null?(bh===0&&(bh=AD()),bh):(o=Ge,o!==0||(o=window.event,o=o===void 0?16:ID(o.type)),o):1}function vi(o,i,a,l){if(50<fl)throw fl=0,_b=null,Error(oe(185));Vl(o,a,l),(!(je&2)||o!==qt)&&(o===qt&&(!(je&2)&&(ff|=a),jt===4&&Kr(o,Qt)),An(o,l),a===1&&je===0&&!(i.mode&1)&&(Aa=Dt()+500,lf&&mo()))}function An(o,i){var a=o.callbackNode;TH(o,i);var l=Eh(o,o===qt?Qt:0);if(l===0)a!==null&&j2(a),o.callbackNode=null,o.callbackPriority=0;else if(i=l&-l,o.callbackPriority!==i){if(a!=null&&j2(a),i===1)o.tag===0?S$(IE.bind(null,o)):ZD(IE.bind(null,o)),C$(function(){!(je&6)&&mo()}),a=null;else{switch(CD(l)){case 1:a=tw;break;case 4:a=_D;break;case 16:a=xh;break;case 536870912:a=yD;break;default:a=xh}a=YS(a,VS.bind(null,o))}o.callbackPriority=i,o.callbackNode=a}}function VS(o,i){if(kh=-1,bh=0,je&6)throw Error(oe(327));var a=o.callbackNode;if(pa()&&o.callbackNode!==a)return null;var l=Eh(o,o===qt?Qt:0);if(l===0)return null;if(l&30||l&o.expiredLanes||i)i=$h(o,l);else{i=l;var u=je;je|=2;var h=HS();(qt!==o||Qt!==i)&&(lr=null,Aa=Dt()+500,rs(o,i));do try{Z$();break}catch(m){US(o,m)}while(1);gw(),Vh.current=h,je=u,Bt!==null?i=0:(qt=null,Qt=0,i=jt)}if(i!==0){if(i===2&&(u=Y0(o),u!==0&&(l=u,i=yb(o,u))),i===1)throw a=zl,rs(o,0),Kr(o,l),An(o,Dt()),a;if(i===6)Kr(o,l);else{if(u=o.current.alternate,!(l&30)&&!G$(u)&&(i=$h(o,l),i===2&&(h=Y0(o),h!==0&&(l=h,i=yb(o,h))),i===1))throw a=zl,rs(o,0),Kr(o,l),An(o,Dt()),a;switch(o.finishedWork=u,o.finishedLanes=l,i){case 0:case 1:throw Error(oe(345));case 2:Zo(o,wn,lr);break;case 3:if(Kr(o,l),(l&130023424)===l&&(i=Tw+500-Dt(),10<i)){if(Eh(o,0)!==0)break;if(u=o.suspendedLanes,(u&l)!==l){un(),o.pingedLanes|=o.suspendedLanes&u;break}o.timeoutHandle=nb(Zo.bind(null,o,wn,lr),i);break}Zo(o,wn,lr);break;case 4:if(Kr(o,l),(l&4194240)===l)break;for(i=o.eventTimes,u=-1;0<l;){var g=31-wi(l);h=1<<g,g=i[g],g>u&&(u=g),l&=~h}if(l=u,l=Dt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*q$(l/1960))-l,10<l){o.timeoutHandle=nb(Zo.bind(null,o,wn,lr),l);break}Zo(o,wn,lr);break;case 5:Zo(o,wn,lr);break;default:throw Error(oe(329))}}}return An(o,Dt()),o.callbackNode===a?VS.bind(null,o):null}function yb(o,i){var a=hl;return o.current.memoizedState.isDehydrated&&(rs(o,i).flags|=256),o=$h(o,i),o!==2&&(i=wn,wn=a,i!==null&&Ab(i)),o}function Ab(o){wn===null?wn=o:wn.push.apply(wn,o)}function G$(o){for(var i=o;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],h=u.getSnapshot;u=u.value;try{if(!_i(h(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===o)break;for(;i.sibling===null;){if(i.return===null||i.return===o)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Kr(o,i){for(i&=~Sw,i&=~ff,o.suspendedLanes|=i,o.pingedLanes&=~i,o=o.expirationTimes;0<i;){var a=31-wi(i),l=1<<a;o[a]=-1,i&=~l}}function IE(o){if(je&6)throw Error(oe(327));pa();var i=Eh(o,0);if(!(i&1))return An(o,Dt()),null;var a=$h(o,i);if(o.tag!==0&&a===2){var l=Y0(o);l!==0&&(i=l,a=yb(o,l))}if(a===1)throw a=zl,rs(o,0),Kr(o,i),An(o,Dt()),a;if(a===6)throw Error(oe(345));return o.finishedWork=o.current.alternate,o.finishedLanes=i,Zo(o,wn,lr),An(o,Dt()),null}function Iw(o,i){var a=je;je|=1;try{return o(i)}finally{je=a,je===0&&(Aa=Dt()+500,lf&&mo())}}function us(o){eo!==null&&eo.tag===0&&!(je&6)&&pa();var i=je;je|=1;var a=ti.transition,l=Ge;try{if(ti.transition=null,Ge=1,o)return o()}finally{Ge=l,ti.transition=a,je=i,!(je&6)&&mo()}}function Mw(){On=la.current,ht(la)}function rs(o,i){o.finishedWork=null,o.finishedLanes=0;var a=o.timeoutHandle;if(a!==-1&&(o.timeoutHandle=-1,A$(a)),Bt!==null)for(a=Bt.return;a!==null;){var l=a;switch(uw(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Mh();break;case 3:_a(),ht(_n),ht(an),vw();break;case 5:ww(l);break;case 4:_a();break;case 13:ht(kt);break;case 19:ht(kt);break;case 10:pw(l.type._context);break;case 22:case 23:Mw()}a=a.return}if(qt=o,Bt=o=lo(o.current,null),Qt=On=i,jt=0,zl=null,Sw=ff=ds=0,wn=hl=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,h=a.pending;if(h!==null){var g=h.next;h.next=u,l.next=g}a.pending=l}ts=null}return o}function US(o,i){do{var a=Bt;try{if(gw(),gh.current=Fh,Rh){for(var l=bt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Rh=!1}if(ls=0,Wt=Lt=bt=null,dl=!1,Ol=0,Dw.current=null,a===null||a.return===null){jt=1,zl=i,Bt=null;break}e:{var h=o,g=a.return,m=a,k=i;if(i=Qt,m.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var b=k,y=m,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var A=y.alternate;A?(y.updateQueue=A.updateQueue,y.memoizedState=A.memoizedState,y.lanes=A.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=kE(g);if(x!==null){x.flags&=-257,bE(x,g,m,h,i),x.mode&1&&mE(h,b,i),i=x,k=b;var E=i.updateQueue;if(E===null){var T=new Set;T.add(k),i.updateQueue=T}else E.add(k);break e}else{if(!(i&1)){mE(h,b,i),Nw();break e}k=Error(oe(426))}}else if(ft&&m.mode&1){var P=kE(g);if(P!==null){!(P.flags&65536)&&(P.flags|=256),bE(P,g,m,h,i),hw(ya(k,m));break e}}h=k=ya(k,m),jt!==4&&(jt=2),hl===null?hl=[h]:hl.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=xS(h,k,i);lE(h,I);break e;case 1:m=k;var N=h.type,B=h.stateNode;if(!(h.flags&128)&&(typeof N.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(ao===null||!ao.has(B)))){h.flags|=65536,i&=-i,h.lanes|=i;var j=ES(h,m,i);lE(h,j);break e}}h=h.return}while(h!==null)}WS(a)}catch(q){i=q,Bt===a&&a!==null&&(Bt=a=a.return);continue}break}while(1)}function HS(){var o=Vh.current;return Vh.current=Fh,o===null?Fh:o}function Nw(){(jt===0||jt===3||jt===2)&&(jt=4),qt===null||!(ds&268435455)&&!(ff&268435455)||Kr(qt,Qt)}function $h(o,i){var a=je;je|=2;var l=HS();(qt!==o||Qt!==i)&&(lr=null,rs(o,i));do try{Y$();break}catch(u){US(o,u)}while(1);if(gw(),je=a,Vh.current=l,Bt!==null)throw Error(oe(261));return qt=null,Qt=0,jt}function Y$(){for(;Bt!==null;)$S(Bt)}function Z$(){for(;Bt!==null&&!vH();)$S(Bt)}function $S(o){var i=GS(o.alternate,o,On);o.memoizedProps=o.pendingProps,i===null?WS(o):Bt=i,Dw.current=null}function WS(o){var i=o;do{var a=i.alternate;if(o=i.return,i.flags&32768){if(a=U$(a,i),a!==null){a.flags&=32767,Bt=a;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{jt=6,Bt=null;return}}else if(a=V$(a,i,On),a!==null){Bt=a;return}if(i=i.sibling,i!==null){Bt=i;return}Bt=i=o}while(i!==null);jt===0&&(jt=5)}function Zo(o,i,a){var l=Ge,u=ti.transition;try{ti.transition=null,Ge=1,K$(o,i,a,l)}finally{ti.transition=u,Ge=l}return null}function K$(o,i,a,l){do pa();while(eo!==null);if(je&6)throw Error(oe(327));a=o.finishedWork;var u=o.finishedLanes;if(a===null)return null;if(o.finishedWork=null,o.finishedLanes=0,a===o.current)throw Error(oe(177));o.callbackNode=null,o.callbackPriority=0;var h=a.lanes|a.childLanes;if(IH(o,h),o===qt&&(Bt=qt=null,Qt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Zu||(Zu=!0,YS(xh,function(){return pa(),null})),h=(a.flags&15990)!==0,a.subtreeFlags&15990||h){h=ti.transition,ti.transition=null;var g=Ge;Ge=1;var m=je;je|=4,Dw.current=null,$$(o,a),RS(a,o),m$(eb),Dh=!!X0,eb=X0=null,o.current=a,W$(a),_H(),je=m,Ge=g,ti.transition=h}else o.current=a;if(Zu&&(Zu=!1,eo=o,Hh=u),h=o.pendingLanes,h===0&&(ao=null),CH(a.stateNode),An(o,Dt()),i!==null)for(l=o.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Uh)throw Uh=!1,o=vb,vb=null,o;return Hh&1&&o.tag!==0&&pa(),h=o.pendingLanes,h&1?o===_b?fl++:(fl=0,_b=o):fl=0,mo(),null}function pa(){if(eo!==null){var o=CD(Hh),i=ti.transition,a=Ge;try{if(ti.transition=null,Ge=16>o?16:o,eo===null)var l=!1;else{if(o=eo,eo=null,Hh=0,je&6)throw Error(oe(331));var u=je;for(je|=4,fe=o.current;fe!==null;){var h=fe,g=h.child;if(fe.flags&16){var m=h.deletions;if(m!==null){for(var k=0;k<m.length;k++){var b=m[k];for(fe=b;fe!==null;){var y=fe;switch(y.tag){case 0:case 11:case 15:ul(8,y,h)}var v=y.child;if(v!==null)v.return=y,fe=v;else for(;fe!==null;){y=fe;var A=y.sibling,x=y.return;if(zS(y),y===b){fe=null;break}if(A!==null){A.return=x,fe=A;break}fe=x}}}var E=h.alternate;if(E!==null){var T=E.child;if(T!==null){E.child=null;do{var P=T.sibling;T.sibling=null,T=P}while(T!==null)}}fe=h}}if(h.subtreeFlags&2064&&g!==null)g.return=h,fe=g;else e:for(;fe!==null;){if(h=fe,h.flags&2048)switch(h.tag){case 0:case 11:case 15:ul(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,fe=I;break e}fe=h.return}}var N=o.current;for(fe=N;fe!==null;){g=fe;var B=g.child;if(g.subtreeFlags&2064&&B!==null)B.return=g,fe=B;else e:for(g=N;fe!==null;){if(m=fe,m.flags&2048)try{switch(m.tag){case 0:case 11:case 15:hf(9,m)}}catch(q){xt(m,m.return,q)}if(m===g){fe=null;break e}var j=m.sibling;if(j!==null){j.return=m.return,fe=j;break e}fe=m.return}}if(je=u,mo(),$i&&typeof $i.onPostCommitFiberRoot=="function")try{$i.onPostCommitFiberRoot(rf,o)}catch{}l=!0}return l}finally{Ge=a,ti.transition=i}}return!1}function ME(o,i,a){i=ya(a,i),i=xS(o,i,1),o=so(o,i,1),i=un(),o!==null&&(Vl(o,1,i),An(o,i))}function xt(o,i,a){if(o.tag===3)ME(o,o,a);else for(;i!==null;){if(i.tag===3){ME(i,o,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ao===null||!ao.has(l))){o=ya(a,o),o=ES(i,o,1),i=so(i,o,1),o=un(),i!==null&&(Vl(i,1,o),An(i,o));break}}i=i.return}}function Q$(o,i,a){var l=o.pingCache;l!==null&&l.delete(i),i=un(),o.pingedLanes|=o.suspendedLanes&a,qt===o&&(Qt&a)===a&&(jt===4||jt===3&&(Qt&130023424)===Qt&&500>Dt()-Tw?rs(o,0):Sw|=a),An(o,i)}function qS(o,i){i===0&&(o.mode&1?(i=Ru,Ru<<=1,!(Ru&130023424)&&(Ru=4194304)):i=1);var a=un();o=kr(o,i),o!==null&&(Vl(o,i,a),An(o,a))}function J$(o){var i=o.memoizedState,a=0;i!==null&&(a=i.retryLane),qS(o,a)}function X$(o,i){var a=0;switch(o.tag){case 13:var l=o.stateNode,u=o.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=o.stateNode;break;default:throw Error(oe(314))}l!==null&&l.delete(i),qS(o,a)}var GS;GS=function(o,i,a){if(o!==null)if(o.memoizedProps!==i.pendingProps||_n.current)vn=!0;else{if(!(o.lanes&a)&&!(i.flags&128))return vn=!1,F$(o,i,a);vn=!!(o.flags&131072)}else vn=!1,ft&&i.flags&1048576&&KD(i,Bh,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;mh(o,i),o=i.pendingProps;var u=ba(i,an.current);ga(i,a),u=yw(null,i,l,o,u,a);var h=Aw();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yn(l)?(h=!0,Nh(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,kw(i),u.updater=df,i.stateNode=u,u._reactInternals=i,lb(i,l,o,a),i=hb(null,i,l,!0,h,a)):(i.tag=0,ft&&h&&dw(i),ln(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(mh(o,i),o=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=tW(l),o=gi(l,o),u){case 0:i=ub(null,i,l,o,a);break e;case 1:i=_E(null,i,l,o,a);break e;case 11:i=wE(null,i,l,o,a);break e;case 14:i=vE(null,i,l,gi(l.type,o),a);break e}throw Error(oe(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:gi(l,u),ub(o,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:gi(l,u),_E(o,i,l,u,a);case 3:e:{if(IS(i),o===null)throw Error(oe(387));l=i.pendingProps,h=i.memoizedState,u=h.element,eS(o,i),Lh(i,l,null,a);var g=i.memoizedState;if(l=g.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=ya(Error(oe(423)),i),i=yE(o,i,l,a,u);break e}else if(l!==u){u=ya(Error(oe(424)),i),i=yE(o,i,l,a,u);break e}else for(Pn=oo(i.stateNode.containerInfo.firstChild),zn=i,ft=!0,ki=null,a=rS(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(wa(),l===u){i=br(o,i,a);break e}ln(o,i,l,a)}i=i.child}return i;case 5:return oS(i),o===null&&sb(i),l=i.type,u=i.pendingProps,h=o!==null?o.memoizedProps:null,g=u.children,tb(l,u)?g=null:h!==null&&tb(l,h)&&(i.flags|=32),TS(o,i),ln(o,i,g,a),i.child;case 6:return o===null&&sb(i),null;case 13:return MS(o,i,a);case 4:return bw(i,i.stateNode.containerInfo),l=i.pendingProps,o===null?i.child=va(i,null,l,a):ln(o,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:gi(l,u),wE(o,i,l,u,a);case 7:return ln(o,i,i.pendingProps,a),i.child;case 8:return ln(o,i,i.pendingProps.children,a),i.child;case 12:return ln(o,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,g=u.value,st(Ph,l._currentValue),l._currentValue=g,h!==null)if(_i(h.value,g)){if(h.children===u.children&&!_n.current){i=br(o,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var m=h.dependencies;if(m!==null){g=h.child;for(var k=m.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=gr(-1,a&-a),k.tag=2;var b=h.updateQueue;if(b!==null){b=b.shared;var y=b.pending;y===null?k.next=k:(k.next=y.next,y.next=k),b.pending=k}}h.lanes|=a,k=h.alternate,k!==null&&(k.lanes|=a),ab(h.return,a,i),m.lanes|=a;break}k=k.next}}else if(h.tag===10)g=h.type===i.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(oe(341));g.lanes|=a,m=g.alternate,m!==null&&(m.lanes|=a),ab(g,a,i),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===i){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}ln(o,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ga(i,a),u=ni(u),l=l(u),i.flags|=1,ln(o,i,l,a),i.child;case 14:return l=i.type,u=gi(l,i.pendingProps),u=gi(l.type,u),vE(o,i,l,u,a);case 15:return DS(o,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:gi(l,u),mh(o,i),i.tag=1,yn(l)?(o=!0,Nh(i)):o=!1,ga(i,a),nS(i,l,u),lb(i,l,u,a),hb(null,i,l,!0,o,a);case 19:return NS(o,i,a);case 22:return SS(o,i,a)}throw Error(oe(156,i.tag))};function YS(o,i){return vD(o,i)}function eW(o,i,a,l){this.tag=o,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(o,i,a,l){return new eW(o,i,a,l)}function Ow(o){return o=o.prototype,!(!o||!o.isReactComponent)}function tW(o){if(typeof o=="function")return Ow(o)?1:0;if(o!=null){if(o=o.$$typeof,o===Jb)return 11;if(o===Xb)return 14}return 2}function lo(o,i){var a=o.alternate;return a===null?(a=Xn(o.tag,i,o.key,o.mode),a.elementType=o.elementType,a.type=o.type,a.stateNode=o.stateNode,a.alternate=o,o.alternate=a):(a.pendingProps=i,a.type=o.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=o.flags&14680064,a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,i=o.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=o.sibling,a.index=o.index,a.ref=o.ref,a}function wh(o,i,a,l,u,h){var g=2;if(l=o,typeof o=="function")Ow(o)&&(g=1);else if(typeof o=="string")g=5;else e:switch(o){case Xs:return os(a.children,u,h,i);case Qb:g=8,u|=8;break;case O0:return o=Xn(12,a,i,u|2),o.elementType=O0,o.lanes=h,o;case B0:return o=Xn(13,a,i,u),o.elementType=B0,o.lanes=h,o;case P0:return o=Xn(19,a,i,u),o.elementType=P0,o.lanes=h,o;case iD:return gf(a,u,h,i);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case tD:g=10;break e;case nD:g=9;break e;case Jb:g=11;break e;case Xb:g=14;break e;case Wr:g=16,l=null;break e}throw Error(oe(130,o==null?o:typeof o,""))}return i=Xn(g,a,i,u),i.elementType=o,i.type=l,i.lanes=h,i}function os(o,i,a,l){return o=Xn(7,o,l,i),o.lanes=a,o}function gf(o,i,a,l){return o=Xn(22,o,l,i),o.elementType=iD,o.lanes=a,o.stateNode={isHidden:!1},o}function g0(o,i,a){return o=Xn(6,o,null,i),o.lanes=a,o}function p0(o,i,a){return i=Xn(4,o.children!==null?o.children:[],o.key,i),i.lanes=a,i.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},i}function nW(o,i,a,l,u){this.tag=i,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zk(0),this.expirationTimes=Zk(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zk(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Bw(o,i,a,l,u,h,g,m,k){return o=new nW(o,i,a,m,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),o.current=h,h.stateNode=o,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kw(h),o}function iW(o,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Js,key:l==null?null:""+l,children:o,containerInfo:i,implementation:a}}function ZS(o){if(!o)return fo;o=o._reactInternals;e:{if(fs(o)!==o||o.tag!==1)throw Error(oe(170));var i=o;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(oe(171))}if(o.tag===1){var a=o.type;if(yn(a))return YD(o,a,i)}return i}function KS(o,i,a,l,u,h,g,m,k){return o=Bw(a,l,!0,o,u,h,g,m,k),o.context=ZS(null),a=o.current,l=un(),u=co(a),h=gr(l,u),h.callback=i??null,so(a,h,u),o.current.lanes=u,Vl(o,u,l),An(o,l),o}function pf(o,i,a,l){var u=i.current,h=un(),g=co(u);return a=ZS(a),i.context===null?i.context=a:i.pendingContext=a,i=gr(h,g),i.payload={element:o},l=l===void 0?null:l,l!==null&&(i.callback=l),o=so(u,i,g),o!==null&&(vi(o,u,g,h),fh(o,u,g)),g}function Wh(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function NE(o,i){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var a=o.retryLane;o.retryLane=a!==0&&a<i?a:i}}function Pw(o,i){NE(o,i),(o=o.alternate)&&NE(o,i)}function rW(){return null}var QS=typeof reportError=="function"?reportError:function(o){console.error(o)};function zw(o){this._internalRoot=o}mf.prototype.render=zw.prototype.render=function(o){var i=this._internalRoot;if(i===null)throw Error(oe(409));pf(o,i,null,null)};mf.prototype.unmount=zw.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var i=o.containerInfo;us(function(){pf(null,o,null,null)}),i[mr]=null}};function mf(o){this._internalRoot=o}mf.prototype.unstable_scheduleHydration=function(o){if(o){var i=DD();o={blockedOn:null,target:o,priority:i};for(var a=0;a<Zr.length&&i!==0&&i<Zr[a].priority;a++);Zr.splice(a,0,o),a===0&&TD(o)}};function Lw(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function kf(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function OE(){}function oW(o,i,a,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var b=Wh(g);h.call(b)}}var g=KS(i,l,o,0,null,!1,!1,"",OE);return o._reactRootContainer=g,o[mr]=g.current,Sl(o.nodeType===8?o.parentNode:o),us(),g}for(;u=o.lastChild;)o.removeChild(u);if(typeof l=="function"){var m=l;l=function(){var b=Wh(k);m.call(b)}}var k=Bw(o,0,!1,null,null,!1,!1,"",OE);return o._reactRootContainer=k,o[mr]=k.current,Sl(o.nodeType===8?o.parentNode:o),us(function(){pf(i,k,a,l)}),k}function bf(o,i,a,l,u){var h=a._reactRootContainer;if(h){var g=h;if(typeof u=="function"){var m=u;u=function(){var k=Wh(g);m.call(k)}}pf(i,g,o,u)}else g=oW(a,i,o,u,l);return Wh(g)}xD=function(o){switch(o.tag){case 3:var i=o.stateNode;if(i.current.memoizedState.isDehydrated){var a=Xc(i.pendingLanes);a!==0&&(nw(i,a|1),An(i,Dt()),!(je&6)&&(Aa=Dt()+500,mo()))}break;case 13:us(function(){var l=kr(o,1);if(l!==null){var u=un();vi(l,o,1,u)}}),Pw(o,1)}};iw=function(o){if(o.tag===13){var i=kr(o,134217728);if(i!==null){var a=un();vi(i,o,134217728,a)}Pw(o,134217728)}};ED=function(o){if(o.tag===13){var i=co(o),a=kr(o,i);if(a!==null){var l=un();vi(a,o,i,l)}Pw(o,i)}};DD=function(){return Ge};SD=function(o,i){var a=Ge;try{return Ge=o,i()}finally{Ge=a}};W0=function(o,i,a){switch(i){case"input":if(j0(o,a),i=a.name,a.type==="radio"&&i!=null){for(a=o;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==o&&l.form===o.form){var u=cf(l);if(!u)throw Error(oe(90));oD(l),j0(l,u)}}}break;case"textarea":aD(o,a);break;case"select":i=a.value,i!=null&&da(o,!!a.multiple,i,!1)}};gD=Iw;pD=us;var sW={usingClientEntryPoint:!1,Events:[Hl,ia,cf,hD,fD,Iw]},Gc={findFiberByHostInstance:es,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aW={bundleType:Gc.bundleType,version:Gc.version,rendererPackageName:Gc.rendererPackageName,rendererConfig:Gc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=bD(o),o===null?null:o.stateNode},findFiberByHostInstance:Gc.findFiberByHostInstance||rW,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{rf=Ku.inject(aW),$i=Ku}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sW;Rn.createPortal=function(o,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lw(i))throw Error(oe(200));return iW(o,i,null,a)};Rn.createRoot=function(o,i){if(!Lw(o))throw Error(oe(299));var a=!1,l="",u=QS;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=Bw(o,1,!1,null,null,a,!1,l,u),o[mr]=i.current,Sl(o.nodeType===8?o.parentNode:o),new zw(i)};Rn.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var i=o._reactInternals;if(i===void 0)throw typeof o.render=="function"?Error(oe(188)):(o=Object.keys(o).join(","),Error(oe(268,o)));return o=bD(i),o=o===null?null:o.stateNode,o};Rn.flushSync=function(o){return us(o)};Rn.hydrate=function(o,i,a){if(!kf(i))throw Error(oe(200));return bf(null,o,i,!0,a)};Rn.hydrateRoot=function(o,i,a){if(!Lw(o))throw Error(oe(405));var l=a!=null&&a.hydratedSources||null,u=!1,h="",g=QS;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),i=KS(i,null,o,1,a??null,u,!1,h,g),o[mr]=i.current,Sl(o),l)for(o=0;o<l.length;o++)a=l[o],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new mf(i)};Rn.render=function(o,i,a){if(!kf(i))throw Error(oe(200));return bf(null,o,i,!1,a)};Rn.unmountComponentAtNode=function(o){if(!kf(o))throw Error(oe(40));return o._reactRootContainer?(us(function(){bf(null,null,o,!1,function(){o._reactRootContainer=null,o[mr]=null})}),!0):!1};Rn.unstable_batchedUpdates=Iw;Rn.unstable_renderSubtreeIntoContainer=function(o,i,a,l){if(!kf(a))throw Error(oe(200));if(o==null||o._reactInternals===void 0)throw Error(oe(38));return bf(o,i,a,!1,l)};Rn.version="18.2.0-next-9e3b772b8-20220608";function JS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JS)}catch(o){console.error(o)}}JS(),K5.exports=Rn;var cW=K5.exports,BE=cW;M0.createRoot=BE.createRoot,M0.hydrateRoot=BE.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(o[l]=a[l])}return o},Ll.apply(this,arguments)}var to;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(to||(to={}));const PE="popstate";function lW(o){o===void 0&&(o={});function i(l,u){let{pathname:h,search:g,hash:m}=l.location;return Cb("",{pathname:h,search:g,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(l,u){return typeof u=="string"?u:qh(u)}return uW(i,a,null,o)}function St(o,i){if(o===!1||o===null||typeof o>"u")throw new Error(i)}function jw(o,i){if(!o){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function dW(){return Math.random().toString(36).substr(2,8)}function zE(o,i){return{usr:o.state,key:o.key,idx:i}}function Cb(o,i,a,l){return a===void 0&&(a=null),Ll({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof i=="string"?Sa(i):i,{state:a,key:i&&i.key||l||dW()})}function qh(o){let{pathname:i="/",search:a="",hash:l=""}=o;return a&&a!=="?"&&(i+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(i+=l.charAt(0)==="#"?l:"#"+l),i}function Sa(o){let i={};if(o){let a=o.indexOf("#");a>=0&&(i.hash=o.substr(a),o=o.substr(0,a));let l=o.indexOf("?");l>=0&&(i.search=o.substr(l),o=o.substr(0,l)),o&&(i.pathname=o)}return i}function uW(o,i,a,l){l===void 0&&(l={});let{window:u=document.defaultView,v5Compat:h=!1}=l,g=u.history,m=to.Pop,k=null,b=y();b==null&&(b=0,g.replaceState(Ll({},g.state,{idx:b}),""));function y(){return(g.state||{idx:null}).idx}function v(){m=to.Pop;let P=y(),I=P==null?null:P-b;b=P,k&&k({action:m,location:T.location,delta:I})}function A(P,I){m=to.Push;let N=Cb(T.location,P,I);a&&a(N,P),b=y()+1;let B=zE(N,b),j=T.createHref(N);try{g.pushState(B,"",j)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;u.location.assign(j)}h&&k&&k({action:m,location:T.location,delta:1})}function x(P,I){m=to.Replace;let N=Cb(T.location,P,I);a&&a(N,P),b=y();let B=zE(N,b),j=T.createHref(N);g.replaceState(B,"",j),h&&k&&k({action:m,location:T.location,delta:0})}function E(P){let I=u.location.origin!=="null"?u.location.origin:u.location.href,N=typeof P=="string"?P:qh(P);return St(I,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,I)}let T={get action(){return m},get location(){return o(u,g)},listen(P){if(k)throw new Error("A history only accepts one active listener");return u.addEventListener(PE,v),k=P,()=>{u.removeEventListener(PE,v),k=null}},createHref(P){return i(u,P)},createURL:E,encodeLocation(P){let I=E(P);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:A,replace:x,go(P){return g.go(P)}};return T}var LE;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(LE||(LE={}));function hW(o,i,a){a===void 0&&(a="/");let l=typeof i=="string"?Sa(i):i,u=Rw(l.pathname||"/",a);if(u==null)return null;let h=XS(o);fW(h);let g=null;for(let m=0;g==null&&m<h.length;++m)g=yW(h[m],xW(u));return g}function XS(o,i,a,l){i===void 0&&(i=[]),a===void 0&&(a=[]),l===void 0&&(l="");let u=(h,g,m)=>{let k={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:g,route:h};k.relativePath.startsWith("/")&&(St(k.relativePath.startsWith(l),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(l.length));let b=uo([l,k.relativePath]),y=a.concat(k);h.children&&h.children.length>0&&(St(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),XS(h.children,i,y,b)),!(h.path==null&&!h.index)&&i.push({path:b,score:vW(b,h.index),routesMeta:y})};return o.forEach((h,g)=>{var m;if(h.path===""||!((m=h.path)!=null&&m.includes("?")))u(h,g);else for(let k of eT(h.path))u(h,g,k)}),i}function eT(o){let i=o.split("/");if(i.length===0)return[];let[a,...l]=i,u=a.endsWith("?"),h=a.replace(/\?$/,"");if(l.length===0)return u?[h,""]:[h];let g=eT(l.join("/")),m=[];return m.push(...g.map(k=>k===""?h:[h,k].join("/"))),u&&m.push(...g),m.map(k=>o.startsWith("/")&&k===""?"/":k)}function fW(o){o.sort((i,a)=>i.score!==a.score?a.score-i.score:_W(i.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}const gW=/^:\w+$/,pW=3,mW=2,kW=1,bW=10,wW=-2,jE=o=>o==="*";function vW(o,i){let a=o.split("/"),l=a.length;return a.some(jE)&&(l+=wW),i&&(l+=mW),a.filter(u=>!jE(u)).reduce((u,h)=>u+(gW.test(h)?pW:h===""?kW:bW),l)}function _W(o,i){return o.length===i.length&&o.slice(0,-1).every((l,u)=>l===i[u])?o[o.length-1]-i[i.length-1]:0}function yW(o,i){let{routesMeta:a}=o,l={},u="/",h=[];for(let g=0;g<a.length;++g){let m=a[g],k=g===a.length-1,b=u==="/"?i:i.slice(u.length)||"/",y=AW({path:m.relativePath,caseSensitive:m.caseSensitive,end:k},b);if(!y)return null;Object.assign(l,y.params);let v=m.route;h.push({params:l,pathname:uo([u,y.pathname]),pathnameBase:TW(uo([u,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(u=uo([u,y.pathnameBase]))}return h}function AW(o,i){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[a,l]=CW(o.path,o.caseSensitive,o.end),u=i.match(a);if(!u)return null;let h=u[0],g=h.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:l.reduce((b,y,v)=>{let{paramName:A,isOptional:x}=y;if(A==="*"){let T=m[v]||"";g=h.slice(0,h.length-T.length).replace(/(.)\/+$/,"$1")}const E=m[v];return x&&!E?b[A]=void 0:b[A]=EW(E||"",A),b},{}),pathname:h,pathnameBase:g,pattern:o}}function CW(o,i,a){i===void 0&&(i=!1),a===void 0&&(a=!0),jw(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let l=[],u="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(g,m,k)=>(l.push({paramName:m,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(l.push({paramName:"*"}),u+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?u+="\\/*$":o!==""&&o!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),l]}function xW(o){try{return decodeURI(o)}catch(i){return jw(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),o}}function EW(o,i){try{return decodeURIComponent(o)}catch(a){return jw(!1,'The value for the URL param "'+i+'" will not be decoded because'+(' the string "'+o+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),o}}function Rw(o,i){if(i==="/")return o;if(!o.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,l=o.charAt(a);return l&&l!=="/"?null:o.slice(a)||"/"}function DW(o,i){i===void 0&&(i="/");let{pathname:a,search:l="",hash:u=""}=typeof o=="string"?Sa(o):o;return{pathname:a?a.startsWith("/")?a:SW(a,i):i,search:IW(l),hash:MW(u)}}function SW(o,i){let a=i.replace(/\/+$/,"").split("/");return o.split("/").forEach(u=>{u===".."?a.length>1&&a.pop():u!=="."&&a.push(u)}),a.length>1?a.join("/"):"/"}function m0(o,i,a,l){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fw(o){return o.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function Vw(o,i,a,l){l===void 0&&(l=!1);let u;typeof o=="string"?u=Sa(o):(u=Ll({},o),St(!u.pathname||!u.pathname.includes("?"),m0("?","pathname","search",u)),St(!u.pathname||!u.pathname.includes("#"),m0("#","pathname","hash",u)),St(!u.search||!u.search.includes("#"),m0("#","search","hash",u)));let h=o===""||u.pathname==="",g=h?"/":u.pathname,m;if(l||g==null)m=a;else{let v=i.length-1;if(g.startsWith("..")){let A=g.split("/");for(;A[0]==="..";)A.shift(),v-=1;u.pathname=A.join("/")}m=v>=0?i[v]:"/"}let k=DW(u,m),b=g&&g!=="/"&&g.endsWith("/"),y=(h||g===".")&&a.endsWith("/");return!k.pathname.endsWith("/")&&(b||y)&&(k.pathname+="/"),k}const uo=o=>o.join("/").replace(/\/\/+/g,"/"),TW=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),IW=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,MW=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function NW(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const tT=["post","put","patch","delete"];new Set(tT);const OW=["get",...tT];new Set(OW);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gh(){return Gh=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(o[l]=a[l])}return o},Gh.apply(this,arguments)}const Uw=se.createContext(null),BW=se.createContext(null),Ta=se.createContext(null),wf=se.createContext(null),yr=se.createContext({outlet:null,matches:[],isDataRoute:!1}),nT=se.createContext(null);function PW(o,i){let{relative:a}=i===void 0?{}:i;Ia()||St(!1);let{basename:l,navigator:u}=se.useContext(Ta),{hash:h,pathname:g,search:m}=oT(o,{relative:a}),k=g;return l!=="/"&&(k=g==="/"?l:uo([l,g])),u.createHref({pathname:k,search:m,hash:h})}function Ia(){return se.useContext(wf)!=null}function Ma(){return Ia()||St(!1),se.useContext(wf).location}function iT(o){se.useContext(Ta).static||se.useLayoutEffect(o)}function Ar(){let{isDataRoute:o}=se.useContext(yr);return o?YW():zW()}function zW(){Ia()||St(!1);let o=se.useContext(Uw),{basename:i,navigator:a}=se.useContext(Ta),{matches:l}=se.useContext(yr),{pathname:u}=Ma(),h=JSON.stringify(Fw(l).map(k=>k.pathnameBase)),g=se.useRef(!1);return iT(()=>{g.current=!0}),se.useCallback(function(k,b){if(b===void 0&&(b={}),!g.current)return;if(typeof k=="number"){a.go(k);return}let y=Vw(k,JSON.parse(h),u,b.relative==="path");o==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:uo([i,y.pathname])),(b.replace?a.replace:a.push)(y,b.state,b)},[i,a,h,u,o])}function rT(){let{matches:o}=se.useContext(yr),i=o[o.length-1];return i?i.params:{}}function oT(o,i){let{relative:a}=i===void 0?{}:i,{matches:l}=se.useContext(yr),{pathname:u}=Ma(),h=JSON.stringify(Fw(l).map(g=>g.pathnameBase));return se.useMemo(()=>Vw(o,JSON.parse(h),u,a==="path"),[o,h,u,a])}function LW(o,i){return jW(o,i)}function jW(o,i,a){Ia()||St(!1);let{navigator:l}=se.useContext(Ta),{matches:u}=se.useContext(yr),h=u[u.length-1],g=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let k=Ma(),b;if(i){var y;let T=typeof i=="string"?Sa(i):i;m==="/"||(y=T.pathname)!=null&&y.startsWith(m)||St(!1),b=T}else b=k;let v=b.pathname||"/",A=m==="/"?v:v.slice(m.length)||"/",x=hW(o,{pathname:A}),E=HW(x&&x.map(T=>Object.assign({},T,{params:Object.assign({},g,T.params),pathname:uo([m,l.encodeLocation?l.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?m:uo([m,l.encodeLocation?l.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),u,a);return i&&E?se.createElement(wf.Provider,{value:{location:Gh({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:to.Pop}},E):E}function RW(){let o=GW(),i=NW(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),a=o instanceof Error?o.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},h=null;return se.createElement(se.Fragment,null,se.createElement("h2",null,"Unexpected Application Error!"),se.createElement("h3",{style:{fontStyle:"italic"}},i),a?se.createElement("pre",{style:u},a):null,h)}const FW=se.createElement(RW,null);class VW extends se.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,a){return a.location!==i.location||a.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error||a.error,location:a.location,revalidation:i.revalidation||a.revalidation}}componentDidCatch(i,a){console.error("React Router caught the following error during render",i,a)}render(){return this.state.error?se.createElement(yr.Provider,{value:this.props.routeContext},se.createElement(nT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function UW(o){let{routeContext:i,match:a,children:l}=o,u=se.useContext(Uw);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),se.createElement(yr.Provider,{value:i},l)}function HW(o,i,a){var l;if(i===void 0&&(i=[]),a===void 0&&(a=null),o==null){var u;if((u=a)!=null&&u.errors)o=a.matches;else return null}let h=o,g=(l=a)==null?void 0:l.errors;if(g!=null){let m=h.findIndex(k=>k.route.id&&(g==null?void 0:g[k.route.id]));m>=0||St(!1),h=h.slice(0,Math.min(h.length,m+1))}return h.reduceRight((m,k,b)=>{let y=k.route.id?g==null?void 0:g[k.route.id]:null,v=null;a&&(v=k.route.errorElement||FW);let A=i.concat(h.slice(0,b+1)),x=()=>{let E;return y?E=v:k.route.Component?E=se.createElement(k.route.Component,null):k.route.element?E=k.route.element:E=m,se.createElement(UW,{match:k,routeContext:{outlet:m,matches:A,isDataRoute:a!=null},children:E})};return a&&(k.route.ErrorBoundary||k.route.errorElement||b===0)?se.createElement(VW,{location:a.location,revalidation:a.revalidation,component:v,error:y,children:x(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):x()},null)}var sT=function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o}(sT||{}),Yh=function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o}(Yh||{});function $W(o){let i=se.useContext(Uw);return i||St(!1),i}function WW(o){let i=se.useContext(BW);return i||St(!1),i}function qW(o){let i=se.useContext(yr);return i||St(!1),i}function aT(o){let i=qW(),a=i.matches[i.matches.length-1];return a.route.id||St(!1),a.route.id}function GW(){var o;let i=se.useContext(nT),a=WW(Yh.UseRouteError),l=aT(Yh.UseRouteError);return i||((o=a.errors)==null?void 0:o[l])}function YW(){let{router:o}=$W(sT.UseNavigateStable),i=aT(Yh.UseNavigateStable),a=se.useRef(!1);return iT(()=>{a.current=!0}),se.useCallback(function(u,h){h===void 0&&(h={}),a.current&&(typeof u=="number"?o.navigate(u):o.navigate(u,Gh({fromRouteId:i},h)))},[o,i])}function ZW(o){let{to:i,replace:a,state:l,relative:u}=o;Ia()||St(!1);let{matches:h}=se.useContext(yr),{pathname:g}=Ma(),m=Ar(),k=Vw(i,Fw(h).map(y=>y.pathnameBase),g,u==="path"),b=JSON.stringify(k);return se.useEffect(()=>m(JSON.parse(b),{replace:a,state:l,relative:u}),[m,b,u,a,l]),null}function Ri(o){St(!1)}function KW(o){let{basename:i="/",children:a=null,location:l,navigationType:u=to.Pop,navigator:h,static:g=!1}=o;Ia()&&St(!1);let m=i.replace(/^\/*/,"/"),k=se.useMemo(()=>({basename:m,navigator:h,static:g}),[m,h,g]);typeof l=="string"&&(l=Sa(l));let{pathname:b="/",search:y="",hash:v="",state:A=null,key:x="default"}=l,E=se.useMemo(()=>{let T=Rw(b,m);return T==null?null:{location:{pathname:T,search:y,hash:v,state:A,key:x},navigationType:u}},[m,b,y,v,A,x,u]);return E==null?null:se.createElement(Ta.Provider,{value:k},se.createElement(wf.Provider,{children:a,value:E}))}function QW(o){let{children:i,location:a}=o;return LW(xb(i),a)}new Promise(()=>{});function xb(o,i){i===void 0&&(i=[]);let a=[];return se.Children.forEach(o,(l,u)=>{if(!se.isValidElement(l))return;let h=[...i,u];if(l.type===se.Fragment){a.push.apply(a,xb(l.props.children,h));return}l.type!==Ri&&St(!1),!l.props.index||!l.props.children||St(!1);let g={id:l.props.id||h.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(g.children=xb(l.props.children,h)),a.push(g)}),a}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eb(){return Eb=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(o[l]=a[l])}return o},Eb.apply(this,arguments)}function JW(o,i){if(o==null)return{};var a={},l=Object.keys(o),u,h;for(h=0;h<l.length;h++)u=l[h],!(i.indexOf(u)>=0)&&(a[u]=o[u]);return a}function XW(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function eq(o,i){return o.button===0&&(!i||i==="_self")&&!XW(o)}const tq=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nq="startTransition",RE=JU[nq];function iq(o){let{basename:i,children:a,future:l,window:u}=o,h=se.useRef();h.current==null&&(h.current=lW({window:u,v5Compat:!0}));let g=h.current,[m,k]=se.useState({action:g.action,location:g.location}),{v7_startTransition:b}=l||{},y=se.useCallback(v=>{b&&RE?RE(()=>k(v)):k(v)},[k,b]);return se.useLayoutEffect(()=>g.listen(y),[g,y]),se.createElement(KW,{basename:i,children:a,location:m.location,navigationType:m.action,navigator:g})}const rq=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oq=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vi=se.forwardRef(function(i,a){let{onClick:l,relative:u,reloadDocument:h,replace:g,state:m,target:k,to:b,preventScrollReset:y,unstable_viewTransition:v}=i,A=JW(i,tq),{basename:x}=se.useContext(Ta),E,T=!1;if(typeof b=="string"&&oq.test(b)&&(E=b,rq))try{let B=new URL(window.location.href),j=b.startsWith("//")?new URL(B.protocol+b):new URL(b),q=Rw(j.pathname,x);j.origin===B.origin&&q!=null?b=q+j.search+j.hash:T=!0}catch{}let P=PW(b,{relative:u}),I=sq(b,{replace:g,state:m,target:k,preventScrollReset:y,relative:u,unstable_viewTransition:v});function N(B){l&&l(B),B.defaultPrevented||I(B)}return se.createElement("a",Eb({},A,{href:E||P,onClick:T||h?l:N,ref:a,target:k}))});var FE;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(FE||(FE={}));var VE;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(VE||(VE={}));function sq(o,i){let{target:a,replace:l,state:u,preventScrollReset:h,relative:g,unstable_viewTransition:m}=i===void 0?{}:i,k=Ar(),b=Ma(),y=oT(o,{relative:g});return se.useCallback(v=>{if(eq(v,a)){v.preventDefault();let A=l!==void 0?l:qh(b)===qh(y);k(o,{replace:A,state:u,preventScrollReset:h,relative:g,unstable_viewTransition:m})}},[b,k,y,l,u,a,o,h,g,m])}function wr(o){return Array.isArray?Array.isArray(o):dT(o)==="[object Array]"}const aq=1/0;function cq(o){if(typeof o=="string")return o;let i=o+"";return i=="0"&&1/o==-aq?"-0":i}function lq(o){return o==null?"":cq(o)}function Hi(o){return typeof o=="string"}function cT(o){return typeof o=="number"}function dq(o){return o===!0||o===!1||uq(o)&&dT(o)=="[object Boolean]"}function lT(o){return typeof o=="object"}function uq(o){return lT(o)&&o!==null}function Bn(o){return o!=null}function k0(o){return!o.trim().length}function dT(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(o)}const hq="Incorrect 'index' type",fq=o=>`Invalid value for key ${o}`,gq=o=>`Pattern length exceeds max of ${o}.`,pq=o=>`Missing ${o} property in key`,mq=o=>`Property 'weight' in key '${o}' must be a positive integer`,UE=Object.prototype.hasOwnProperty;class kq{constructor(i){this._keys=[],this._keyMap={};let a=0;i.forEach(l=>{let u=uT(l);this._keys.push(u),this._keyMap[u.id]=u,a+=u.weight}),this._keys.forEach(l=>{l.weight/=a})}get(i){return this._keyMap[i]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function uT(o){let i=null,a=null,l=null,u=1,h=null;if(Hi(o)||wr(o))l=o,i=HE(o),a=Db(o);else{if(!UE.call(o,"name"))throw new Error(pq("name"));const g=o.name;if(l=g,UE.call(o,"weight")&&(u=o.weight,u<=0))throw new Error(mq(g));i=HE(g),a=Db(g),h=o.getFn}return{path:i,id:a,weight:u,src:l,getFn:h}}function HE(o){return wr(o)?o:o.split(".")}function Db(o){return wr(o)?o.join("."):o}function bq(o,i){let a=[],l=!1;const u=(h,g,m)=>{if(Bn(h))if(!g[m])a.push(h);else{let k=g[m];const b=h[k];if(!Bn(b))return;if(m===g.length-1&&(Hi(b)||cT(b)||dq(b)))a.push(lq(b));else if(wr(b)){l=!0;for(let y=0,v=b.length;y<v;y+=1)u(b[y],g,m+1)}else g.length&&u(b,g,m+1)}};return u(o,Hi(i)?i.split("."):i,0),l?a:a[0]}const wq={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},vq={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(o,i)=>o.score===i.score?o.idx<i.idx?-1:1:o.score<i.score?-1:1},_q={location:0,threshold:.6,distance:100},yq={useExtendedSearch:!1,getFn:bq,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ye={...vq,...wq,..._q,...yq};const Aq=/[^ ]+/g;function Cq(o=1,i=3){const a=new Map,l=Math.pow(10,i);return{get(u){const h=u.match(Aq).length;if(a.has(h))return a.get(h);const g=1/Math.pow(h,.5*o),m=parseFloat(Math.round(g*l)/l);return a.set(h,m),m},clear(){a.clear()}}}class Hw{constructor({getFn:i=ye.getFn,fieldNormWeight:a=ye.fieldNormWeight}={}){this.norm=Cq(a,3),this.getFn=i,this.isCreated=!1,this.setIndexRecords()}setSources(i=[]){this.docs=i}setIndexRecords(i=[]){this.records=i}setKeys(i=[]){this.keys=i,this._keysMap={},i.forEach((a,l)=>{this._keysMap[a.id]=l})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Hi(this.docs[0])?this.docs.forEach((i,a)=>{this._addString(i,a)}):this.docs.forEach((i,a)=>{this._addObject(i,a)}),this.norm.clear())}add(i){const a=this.size();Hi(i)?this._addString(i,a):this._addObject(i,a)}removeAt(i){this.records.splice(i,1);for(let a=i,l=this.size();a<l;a+=1)this.records[a].i-=1}getValueForItemAtKeyId(i,a){return i[this._keysMap[a]]}size(){return this.records.length}_addString(i,a){if(!Bn(i)||k0(i))return;let l={v:i,i:a,n:this.norm.get(i)};this.records.push(l)}_addObject(i,a){let l={i:a,$:{}};this.keys.forEach((u,h)=>{let g=u.getFn?u.getFn(i):this.getFn(i,u.path);if(Bn(g)){if(wr(g)){let m=[];const k=[{nestedArrIndex:-1,value:g}];for(;k.length;){const{nestedArrIndex:b,value:y}=k.pop();if(Bn(y))if(Hi(y)&&!k0(y)){let v={v:y,i:b,n:this.norm.get(y)};m.push(v)}else wr(y)&&y.forEach((v,A)=>{k.push({nestedArrIndex:A,value:v})})}l.$[h]=m}else if(Hi(g)&&!k0(g)){let m={v:g,n:this.norm.get(g)};l.$[h]=m}}}),this.records.push(l)}toJSON(){return{keys:this.keys,records:this.records}}}function hT(o,i,{getFn:a=ye.getFn,fieldNormWeight:l=ye.fieldNormWeight}={}){const u=new Hw({getFn:a,fieldNormWeight:l});return u.setKeys(o.map(uT)),u.setSources(i),u.create(),u}function xq(o,{getFn:i=ye.getFn,fieldNormWeight:a=ye.fieldNormWeight}={}){const{keys:l,records:u}=o,h=new Hw({getFn:i,fieldNormWeight:a});return h.setKeys(l),h.setIndexRecords(u),h}function Qu(o,{errors:i=0,currentLocation:a=0,expectedLocation:l=0,distance:u=ye.distance,ignoreLocation:h=ye.ignoreLocation}={}){const g=i/o.length;if(h)return g;const m=Math.abs(l-a);return u?g+m/u:m?1:g}function Eq(o=[],i=ye.minMatchCharLength){let a=[],l=-1,u=-1,h=0;for(let g=o.length;h<g;h+=1){let m=o[h];m&&l===-1?l=h:!m&&l!==-1&&(u=h-1,u-l+1>=i&&a.push([l,u]),l=-1)}return o[h-1]&&h-l>=i&&a.push([l,h-1]),a}const Ko=32;function Dq(o,i,a,{location:l=ye.location,distance:u=ye.distance,threshold:h=ye.threshold,findAllMatches:g=ye.findAllMatches,minMatchCharLength:m=ye.minMatchCharLength,includeMatches:k=ye.includeMatches,ignoreLocation:b=ye.ignoreLocation}={}){if(i.length>Ko)throw new Error(gq(Ko));const y=i.length,v=o.length,A=Math.max(0,Math.min(l,v));let x=h,E=A;const T=m>1||k,P=T?Array(v):[];let I;for(;(I=o.indexOf(i,E))>-1;){let K=Qu(i,{currentLocation:I,expectedLocation:A,distance:u,ignoreLocation:b});if(x=Math.min(K,x),E=I+y,T){let X=0;for(;X<y;)P[I+X]=1,X+=1}}E=-1;let N=[],B=1,j=y+v;const q=1<<y-1;for(let K=0;K<y;K+=1){let X=0,re=j;for(;X<re;)Qu(i,{errors:K,currentLocation:A+re,expectedLocation:A,distance:u,ignoreLocation:b})<=x?X=re:j=re,re=Math.floor((j-X)/2+X);j=re;let ce=Math.max(1,A-re+1),$=g?v:Math.min(A+re,v)+y,G=Array($+2);G[$+1]=(1<<K)-1;for(let R=$;R>=ce;R-=1){let V=R-1,M=a[o.charAt(V)];if(T&&(P[V]=+!!M),G[R]=(G[R+1]<<1|1)&M,K&&(G[R]|=(N[R+1]|N[R])<<1|1|N[R+1]),G[R]&q&&(B=Qu(i,{errors:K,currentLocation:V,expectedLocation:A,distance:u,ignoreLocation:b}),B<=x)){if(x=B,E=V,E<=A)break;ce=Math.max(1,2*A-E)}}if(Qu(i,{errors:K+1,currentLocation:A,expectedLocation:A,distance:u,ignoreLocation:b})>x)break;N=G}const Z={isMatch:E>=0,score:Math.max(.001,B)};if(T){const K=Eq(P,m);K.length?k&&(Z.indices=K):Z.isMatch=!1}return Z}function Sq(o){let i={};for(let a=0,l=o.length;a<l;a+=1){const u=o.charAt(a);i[u]=(i[u]||0)|1<<l-a-1}return i}class fT{constructor(i,{location:a=ye.location,threshold:l=ye.threshold,distance:u=ye.distance,includeMatches:h=ye.includeMatches,findAllMatches:g=ye.findAllMatches,minMatchCharLength:m=ye.minMatchCharLength,isCaseSensitive:k=ye.isCaseSensitive,ignoreLocation:b=ye.ignoreLocation}={}){if(this.options={location:a,threshold:l,distance:u,includeMatches:h,findAllMatches:g,minMatchCharLength:m,isCaseSensitive:k,ignoreLocation:b},this.pattern=k?i:i.toLowerCase(),this.chunks=[],!this.pattern.length)return;const y=(A,x)=>{this.chunks.push({pattern:A,alphabet:Sq(A),startIndex:x})},v=this.pattern.length;if(v>Ko){let A=0;const x=v%Ko,E=v-x;for(;A<E;)y(this.pattern.substr(A,Ko),A),A+=Ko;if(x){const T=v-Ko;y(this.pattern.substr(T),T)}}else y(this.pattern,0)}searchIn(i){const{isCaseSensitive:a,includeMatches:l}=this.options;if(a||(i=i.toLowerCase()),this.pattern===i){let E={isMatch:!0,score:0};return l&&(E.indices=[[0,i.length-1]]),E}const{location:u,distance:h,threshold:g,findAllMatches:m,minMatchCharLength:k,ignoreLocation:b}=this.options;let y=[],v=0,A=!1;this.chunks.forEach(({pattern:E,alphabet:T,startIndex:P})=>{const{isMatch:I,score:N,indices:B}=Dq(i,E,T,{location:u+P,distance:h,threshold:g,findAllMatches:m,minMatchCharLength:k,includeMatches:l,ignoreLocation:b});I&&(A=!0),v+=N,I&&B&&(y=[...y,...B])});let x={isMatch:A,score:A?v/this.chunks.length:1};return A&&l&&(x.indices=y),x}}class ko{constructor(i){this.pattern=i}static isMultiMatch(i){return $E(i,this.multiRegex)}static isSingleMatch(i){return $E(i,this.singleRegex)}search(){}}function $E(o,i){const a=o.match(i);return a?a[1]:null}class Tq extends ko{constructor(i){super(i)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(i){const a=i===this.pattern;return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class Iq extends ko{constructor(i){super(i)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(i){const l=i.indexOf(this.pattern)===-1;return{isMatch:l,score:l?0:1,indices:[0,i.length-1]}}}class Mq extends ko{constructor(i){super(i)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(i){const a=i.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class Nq extends ko{constructor(i){super(i)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(i){const a=!i.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,i.length-1]}}}class Oq extends ko{constructor(i){super(i)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(i){const a=i.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[i.length-this.pattern.length,i.length-1]}}}class Bq extends ko{constructor(i){super(i)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(i){const a=!i.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,i.length-1]}}}class gT extends ko{constructor(i,{location:a=ye.location,threshold:l=ye.threshold,distance:u=ye.distance,includeMatches:h=ye.includeMatches,findAllMatches:g=ye.findAllMatches,minMatchCharLength:m=ye.minMatchCharLength,isCaseSensitive:k=ye.isCaseSensitive,ignoreLocation:b=ye.ignoreLocation}={}){super(i),this._bitapSearch=new fT(i,{location:a,threshold:l,distance:u,includeMatches:h,findAllMatches:g,minMatchCharLength:m,isCaseSensitive:k,ignoreLocation:b})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(i){return this._bitapSearch.searchIn(i)}}class pT extends ko{constructor(i){super(i)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(i){let a=0,l;const u=[],h=this.pattern.length;for(;(l=i.indexOf(this.pattern,a))>-1;)a=l+h,u.push([l,a-1]);const g=!!u.length;return{isMatch:g,score:g?0:1,indices:u}}}const Sb=[Tq,pT,Mq,Nq,Bq,Oq,Iq,gT],WE=Sb.length,Pq=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,zq="|";function Lq(o,i={}){return o.split(zq).map(a=>{let l=a.trim().split(Pq).filter(h=>h&&!!h.trim()),u=[];for(let h=0,g=l.length;h<g;h+=1){const m=l[h];let k=!1,b=-1;for(;!k&&++b<WE;){const y=Sb[b];let v=y.isMultiMatch(m);v&&(u.push(new y(v,i)),k=!0)}if(!k)for(b=-1;++b<WE;){const y=Sb[b];let v=y.isSingleMatch(m);if(v){u.push(new y(v,i));break}}}return u})}const jq=new Set([gT.type,pT.type]);class Rq{constructor(i,{isCaseSensitive:a=ye.isCaseSensitive,includeMatches:l=ye.includeMatches,minMatchCharLength:u=ye.minMatchCharLength,ignoreLocation:h=ye.ignoreLocation,findAllMatches:g=ye.findAllMatches,location:m=ye.location,threshold:k=ye.threshold,distance:b=ye.distance}={}){this.query=null,this.options={isCaseSensitive:a,includeMatches:l,minMatchCharLength:u,findAllMatches:g,ignoreLocation:h,location:m,threshold:k,distance:b},this.pattern=a?i:i.toLowerCase(),this.query=Lq(this.pattern,this.options)}static condition(i,a){return a.useExtendedSearch}searchIn(i){const a=this.query;if(!a)return{isMatch:!1,score:1};const{includeMatches:l,isCaseSensitive:u}=this.options;i=u?i:i.toLowerCase();let h=0,g=[],m=0;for(let k=0,b=a.length;k<b;k+=1){const y=a[k];g.length=0,h=0;for(let v=0,A=y.length;v<A;v+=1){const x=y[v],{isMatch:E,indices:T,score:P}=x.search(i);if(E){if(h+=1,m+=P,l){const I=x.constructor.type;jq.has(I)?g=[...g,...T]:g.push(T)}}else{m=0,h=0,g.length=0;break}}if(h){let v={isMatch:!0,score:m/h};return l&&(v.indices=g),v}}return{isMatch:!1,score:1}}}const Tb=[];function Fq(...o){Tb.push(...o)}function Ib(o,i){for(let a=0,l=Tb.length;a<l;a+=1){let u=Tb[a];if(u.condition(o,i))return new u(o,i)}return new fT(o,i)}const Zh={AND:"$and",OR:"$or"},Mb={PATH:"$path",PATTERN:"$val"},Nb=o=>!!(o[Zh.AND]||o[Zh.OR]),Vq=o=>!!o[Mb.PATH],Uq=o=>!wr(o)&&lT(o)&&!Nb(o),qE=o=>({[Zh.AND]:Object.keys(o).map(i=>({[i]:o[i]}))});function mT(o,i,{auto:a=!0}={}){const l=u=>{let h=Object.keys(u);const g=Vq(u);if(!g&&h.length>1&&!Nb(u))return l(qE(u));if(Uq(u)){const k=g?u[Mb.PATH]:h[0],b=g?u[Mb.PATTERN]:u[k];if(!Hi(b))throw new Error(fq(k));const y={keyId:Db(k),pattern:b};return a&&(y.searcher=Ib(b,i)),y}let m={children:[],operator:h[0]};return h.forEach(k=>{const b=u[k];wr(b)&&b.forEach(y=>{m.children.push(l(y))})}),m};return Nb(o)||(o=qE(o)),l(o)}function Hq(o,{ignoreFieldNorm:i=ye.ignoreFieldNorm}){o.forEach(a=>{let l=1;a.matches.forEach(({key:u,norm:h,score:g})=>{const m=u?u.weight:null;l*=Math.pow(g===0&&m?Number.EPSILON:g,(m||1)*(i?1:h))}),a.score=l})}function $q(o,i){const a=o.matches;i.matches=[],Bn(a)&&a.forEach(l=>{if(!Bn(l.indices)||!l.indices.length)return;const{indices:u,value:h}=l;let g={indices:u,value:h};l.key&&(g.key=l.key.src),l.idx>-1&&(g.refIndex=l.idx),i.matches.push(g)})}function Wq(o,i){i.score=o.score}function qq(o,i,{includeMatches:a=ye.includeMatches,includeScore:l=ye.includeScore}={}){const u=[];return a&&u.push($q),l&&u.push(Wq),o.map(h=>{const{idx:g}=h,m={item:i[g],refIndex:g};return u.length&&u.forEach(k=>{k(h,m)}),m})}class Na{constructor(i,a={},l){this.options={...ye,...a},this.options.useExtendedSearch,this._keyStore=new kq(this.options.keys),this.setCollection(i,l)}setCollection(i,a){if(this._docs=i,a&&!(a instanceof Hw))throw new Error(hq);this._myIndex=a||hT(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(i){Bn(i)&&(this._docs.push(i),this._myIndex.add(i))}remove(i=()=>!1){const a=[];for(let l=0,u=this._docs.length;l<u;l+=1){const h=this._docs[l];i(h,l)&&(this.removeAt(l),l-=1,u-=1,a.push(h))}return a}removeAt(i){this._docs.splice(i,1),this._myIndex.removeAt(i)}getIndex(){return this._myIndex}search(i,{limit:a=-1}={}){const{includeMatches:l,includeScore:u,shouldSort:h,sortFn:g,ignoreFieldNorm:m}=this.options;let k=Hi(i)?Hi(this._docs[0])?this._searchStringList(i):this._searchObjectList(i):this._searchLogical(i);return Hq(k,{ignoreFieldNorm:m}),h&&k.sort(g),cT(a)&&a>-1&&(k=k.slice(0,a)),qq(k,this._docs,{includeMatches:l,includeScore:u})}_searchStringList(i){const a=Ib(i,this.options),{records:l}=this._myIndex,u=[];return l.forEach(({v:h,i:g,n:m})=>{if(!Bn(h))return;const{isMatch:k,score:b,indices:y}=a.searchIn(h);k&&u.push({item:h,idx:g,matches:[{score:b,value:h,norm:m,indices:y}]})}),u}_searchLogical(i){const a=mT(i,this.options),l=(m,k,b)=>{if(!m.children){const{keyId:v,searcher:A}=m,x=this._findMatches({key:this._keyStore.get(v),value:this._myIndex.getValueForItemAtKeyId(k,v),searcher:A});return x&&x.length?[{idx:b,item:k,matches:x}]:[]}const y=[];for(let v=0,A=m.children.length;v<A;v+=1){const x=m.children[v],E=l(x,k,b);if(E.length)y.push(...E);else if(m.operator===Zh.AND)return[]}return y},u=this._myIndex.records,h={},g=[];return u.forEach(({$:m,i:k})=>{if(Bn(m)){let b=l(a,m,k);b.length&&(h[k]||(h[k]={idx:k,item:m,matches:[]},g.push(h[k])),b.forEach(({matches:y})=>{h[k].matches.push(...y)}))}}),g}_searchObjectList(i){const a=Ib(i,this.options),{keys:l,records:u}=this._myIndex,h=[];return u.forEach(({$:g,i:m})=>{if(!Bn(g))return;let k=[];l.forEach((b,y)=>{k.push(...this._findMatches({key:b,value:g[y],searcher:a}))}),k.length&&h.push({idx:m,item:g,matches:k})}),h}_findMatches({key:i,value:a,searcher:l}){if(!Bn(a))return[];let u=[];if(wr(a))a.forEach(({v:h,i:g,n:m})=>{if(!Bn(h))return;const{isMatch:k,score:b,indices:y}=l.searchIn(h);k&&u.push({score:b,key:i,value:h,idx:g,norm:m,indices:y})});else{const{v:h,n:g}=a,{isMatch:m,score:k,indices:b}=l.searchIn(h);m&&u.push({score:k,key:i,value:h,norm:g,indices:b})}return u}}Na.version="7.0.0";Na.createIndex=hT;Na.parseIndex=xq;Na.config=ye;Na.parseQuery=mT;Fq(Rq);const Gq=(o,i,a)=>{const u=new Na(i,{keys:a}).search(o);return o?u.map(g=>g.item):i};class gs extends Error{}class Yq extends gs{constructor(i){super(`Invalid DateTime: ${i.toMessage()}`)}}class Zq extends gs{constructor(i){super(`Invalid Interval: ${i.toMessage()}`)}}class Kq extends gs{constructor(i){super(`Invalid Duration: ${i.toMessage()}`)}}class tl extends gs{}class kT extends gs{constructor(i){super(`Invalid unit ${i}`)}}class Jn extends gs{}class Ur extends gs{constructor(){super("Zone is an abstract class")}}const de="numeric",yi="short",Ln="long",Kh={year:de,month:de,day:de},bT={year:de,month:yi,day:de},Qq={year:de,month:yi,day:de,weekday:yi},wT={year:de,month:Ln,day:de},vT={year:de,month:Ln,day:de,weekday:Ln},_T={hour:de,minute:de},yT={hour:de,minute:de,second:de},AT={hour:de,minute:de,second:de,timeZoneName:yi},CT={hour:de,minute:de,second:de,timeZoneName:Ln},xT={hour:de,minute:de,hourCycle:"h23"},ET={hour:de,minute:de,second:de,hourCycle:"h23"},DT={hour:de,minute:de,second:de,hourCycle:"h23",timeZoneName:yi},ST={hour:de,minute:de,second:de,hourCycle:"h23",timeZoneName:Ln},TT={year:de,month:de,day:de,hour:de,minute:de},IT={year:de,month:de,day:de,hour:de,minute:de,second:de},MT={year:de,month:yi,day:de,hour:de,minute:de},NT={year:de,month:yi,day:de,hour:de,minute:de,second:de},Jq={year:de,month:yi,day:de,weekday:yi,hour:de,minute:de},OT={year:de,month:Ln,day:de,hour:de,minute:de,timeZoneName:yi},BT={year:de,month:Ln,day:de,hour:de,minute:de,second:de,timeZoneName:yi},PT={year:de,month:Ln,day:de,weekday:Ln,hour:de,minute:de,timeZoneName:Ln},zT={year:de,month:Ln,day:de,weekday:Ln,hour:de,minute:de,second:de,timeZoneName:Ln};class Wl{get type(){throw new Ur}get name(){throw new Ur}get ianaName(){return this.name}get isUniversal(){throw new Ur}offsetName(i,a){throw new Ur}formatOffset(i,a){throw new Ur}offset(i){throw new Ur}equals(i){throw new Ur}get isValid(){throw new Ur}}let b0=null;class vf extends Wl{static get instance(){return b0===null&&(b0=new vf),b0}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(i,{format:a,locale:l}){return jT(i,a,l)}formatOffset(i,a){return pl(this.offset(i),a)}offset(i){return-new Date(i).getTimezoneOffset()}equals(i){return i.type==="system"}get isValid(){return!0}}let vh={};function Xq(o){return vh[o]||(vh[o]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:o,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),vh[o]}const eG={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function tG(o,i){const a=o.format(i).replace(/\u200E/g,""),l=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(a),[,u,h,g,m,k,b,y]=l;return[g,u,h,m,k,b,y]}function nG(o,i){const a=o.formatToParts(i),l=[];for(let u=0;u<a.length;u++){const{type:h,value:g}=a[u],m=eG[h];h==="era"?l[m]=g:Oe(m)||(l[m]=parseInt(g,10))}return l}let Ju={};class vr extends Wl{static create(i){return Ju[i]||(Ju[i]=new vr(i)),Ju[i]}static resetCache(){Ju={},vh={}}static isValidSpecifier(i){return this.isValidZone(i)}static isValidZone(i){if(!i)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:i}).format(),!0}catch{return!1}}constructor(i){super(),this.zoneName=i,this.valid=vr.isValidZone(i)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(i,{format:a,locale:l}){return jT(i,a,l,this.name)}formatOffset(i,a){return pl(this.offset(i),a)}offset(i){const a=new Date(i);if(isNaN(a))return NaN;const l=Xq(this.name);let[u,h,g,m,k,b,y]=l.formatToParts?nG(l,a):tG(l,a);m==="BC"&&(u=-Math.abs(u)+1);const A=yf({year:u,month:h,day:g,hour:k===24?0:k,minute:b,second:y,millisecond:0});let x=+a;const E=x%1e3;return x-=E>=0?E:1e3+E,(A-x)/(60*1e3)}equals(i){return i.type==="iana"&&i.name===this.name}get isValid(){return this.valid}}let GE={};function iG(o,i={}){const a=JSON.stringify([o,i]);let l=GE[a];return l||(l=new Intl.ListFormat(o,i),GE[a]=l),l}let Ob={};function Bb(o,i={}){const a=JSON.stringify([o,i]);let l=Ob[a];return l||(l=new Intl.DateTimeFormat(o,i),Ob[a]=l),l}let Pb={};function rG(o,i={}){const a=JSON.stringify([o,i]);let l=Pb[a];return l||(l=new Intl.NumberFormat(o,i),Pb[a]=l),l}let zb={};function oG(o,i={}){const{base:a,...l}=i,u=JSON.stringify([o,l]);let h=zb[u];return h||(h=new Intl.RelativeTimeFormat(o,i),zb[u]=h),h}let nl=null;function sG(){return nl||(nl=new Intl.DateTimeFormat().resolvedOptions().locale,nl)}function aG(o){const i=o.indexOf("-x-");i!==-1&&(o=o.substring(0,i));const a=o.indexOf("-u-");if(a===-1)return[o];{let l,u;try{l=Bb(o).resolvedOptions(),u=o}catch{const k=o.substring(0,a);l=Bb(k).resolvedOptions(),u=k}const{numberingSystem:h,calendar:g}=l;return[u,h,g]}}function cG(o,i,a){return(a||i)&&(o.includes("-u-")||(o+="-u"),a&&(o+=`-ca-${a}`),i&&(o+=`-nu-${i}`)),o}function lG(o){const i=[];for(let a=1;a<=12;a++){const l=Se.utc(2009,a,1);i.push(o(l))}return i}function dG(o){const i=[];for(let a=1;a<=7;a++){const l=Se.utc(2016,11,13+a);i.push(o(l))}return i}function Xu(o,i,a,l){const u=o.listingMode();return u==="error"?null:u==="en"?a(i):l(i)}function uG(o){return o.numberingSystem&&o.numberingSystem!=="latn"?!1:o.numberingSystem==="latn"||!o.locale||o.locale.startsWith("en")||new Intl.DateTimeFormat(o.intl).resolvedOptions().numberingSystem==="latn"}class hG{constructor(i,a,l){this.padTo=l.padTo||0,this.floor=l.floor||!1;const{padTo:u,floor:h,...g}=l;if(!a||Object.keys(g).length>0){const m={useGrouping:!1,...l};l.padTo>0&&(m.minimumIntegerDigits=l.padTo),this.inf=rG(i,m)}}format(i){if(this.inf){const a=this.floor?Math.floor(i):i;return this.inf.format(a)}else{const a=this.floor?Math.floor(i):Ww(i,3);return Ot(a,this.padTo)}}}class fG{constructor(i,a,l){this.opts=l,this.originalZone=void 0;let u;if(this.opts.timeZone)this.dt=i;else if(i.zone.type==="fixed"){const g=-1*(i.offset/60),m=g>=0?`Etc/GMT+${g}`:`Etc/GMT${g}`;i.offset!==0&&vr.create(m).valid?(u=m,this.dt=i):(u="UTC",this.dt=i.offset===0?i:i.setZone("UTC").plus({minutes:i.offset}),this.originalZone=i.zone)}else i.zone.type==="system"?this.dt=i:i.zone.type==="iana"?(this.dt=i,u=i.zone.name):(u="UTC",this.dt=i.setZone("UTC").plus({minutes:i.offset}),this.originalZone=i.zone);const h={...this.opts};h.timeZone=h.timeZone||u,this.dtf=Bb(a,h)}format(){return this.originalZone?this.formatToParts().map(({value:i})=>i).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const i=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?i.map(a=>{if(a.type==="timeZoneName"){const l=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...a,value:l}}else return a}):i}resolvedOptions(){return this.dtf.resolvedOptions()}}class gG{constructor(i,a,l){this.opts={style:"long",...l},!a&&LT()&&(this.rtf=oG(i,l))}format(i,a){return this.rtf?this.rtf.format(i,a):MG(a,i,this.opts.numeric,this.opts.style!=="long")}formatToParts(i,a){return this.rtf?this.rtf.formatToParts(i,a):[]}}class ut{static fromOpts(i){return ut.create(i.locale,i.numberingSystem,i.outputCalendar,i.defaultToEN)}static create(i,a,l,u=!1){const h=i||Nt.defaultLocale,g=h||(u?"en-US":sG()),m=a||Nt.defaultNumberingSystem,k=l||Nt.defaultOutputCalendar;return new ut(g,m,k,h)}static resetCache(){nl=null,Ob={},Pb={},zb={}}static fromObject({locale:i,numberingSystem:a,outputCalendar:l}={}){return ut.create(i,a,l)}constructor(i,a,l,u){const[h,g,m]=aG(i);this.locale=h,this.numberingSystem=a||g||null,this.outputCalendar=l||m||null,this.intl=cG(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=u,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=uG(this)),this.fastNumbersCached}listingMode(){const i=this.isEnglish(),a=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return i&&a?"en":"intl"}clone(i){return!i||Object.getOwnPropertyNames(i).length===0?this:ut.create(i.locale||this.specifiedLocale,i.numberingSystem||this.numberingSystem,i.outputCalendar||this.outputCalendar,i.defaultToEN||!1)}redefaultToEN(i={}){return this.clone({...i,defaultToEN:!0})}redefaultToSystem(i={}){return this.clone({...i,defaultToEN:!1})}months(i,a=!1){return Xu(this,i,VT,()=>{const l=a?{month:i,day:"numeric"}:{month:i},u=a?"format":"standalone";return this.monthsCache[u][i]||(this.monthsCache[u][i]=lG(h=>this.extract(h,l,"month"))),this.monthsCache[u][i]})}weekdays(i,a=!1){return Xu(this,i,$T,()=>{const l=a?{weekday:i,year:"numeric",month:"long",day:"numeric"}:{weekday:i},u=a?"format":"standalone";return this.weekdaysCache[u][i]||(this.weekdaysCache[u][i]=dG(h=>this.extract(h,l,"weekday"))),this.weekdaysCache[u][i]})}meridiems(){return Xu(this,void 0,()=>WT,()=>{if(!this.meridiemCache){const i={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Se.utc(2016,11,13,9),Se.utc(2016,11,13,19)].map(a=>this.extract(a,i,"dayperiod"))}return this.meridiemCache})}eras(i){return Xu(this,i,qT,()=>{const a={era:i};return this.eraCache[i]||(this.eraCache[i]=[Se.utc(-40,1,1),Se.utc(2017,1,1)].map(l=>this.extract(l,a,"era"))),this.eraCache[i]})}extract(i,a,l){const u=this.dtFormatter(i,a),h=u.formatToParts(),g=h.find(m=>m.type.toLowerCase()===l);return g?g.value:null}numberFormatter(i={}){return new hG(this.intl,i.forceSimple||this.fastNumbers,i)}dtFormatter(i,a={}){return new fG(i,this.intl,a)}relFormatter(i={}){return new gG(this.intl,this.isEnglish(),i)}listFormatter(i={}){return iG(this.intl,i)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(i){return this.locale===i.locale&&this.numberingSystem===i.numberingSystem&&this.outputCalendar===i.outputCalendar}}let w0=null;class dn extends Wl{static get utcInstance(){return w0===null&&(w0=new dn(0)),w0}static instance(i){return i===0?dn.utcInstance:new dn(i)}static parseSpecifier(i){if(i){const a=i.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(a)return new dn(Af(a[1],a[2]))}return null}constructor(i){super(),this.fixed=i}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${pl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${pl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(i,a){return pl(this.fixed,a)}get isUniversal(){return!0}offset(){return this.fixed}equals(i){return i.type==="fixed"&&i.fixed===this.fixed}get isValid(){return!0}}class pG extends Wl{constructor(i){super(),this.zoneName=i}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Qr(o,i){if(Oe(o)||o===null)return i;if(o instanceof Wl)return o;if(mG(o)){const a=o.toLowerCase();return a==="default"?i:a==="local"||a==="system"?vf.instance:a==="utc"||a==="gmt"?dn.utcInstance:dn.parseSpecifier(a)||vr.create(o)}else return ss(o)?dn.instance(o):typeof o=="object"&&"offset"in o&&typeof o.offset=="function"?o:new pG(o)}let YE=()=>Date.now(),ZE="system",KE=null,QE=null,JE=null,XE=60,e5;class Nt{static get now(){return YE}static set now(i){YE=i}static set defaultZone(i){ZE=i}static get defaultZone(){return Qr(ZE,vf.instance)}static get defaultLocale(){return KE}static set defaultLocale(i){KE=i}static get defaultNumberingSystem(){return QE}static set defaultNumberingSystem(i){QE=i}static get defaultOutputCalendar(){return JE}static set defaultOutputCalendar(i){JE=i}static get twoDigitCutoffYear(){return XE}static set twoDigitCutoffYear(i){XE=i%100}static get throwOnInvalid(){return e5}static set throwOnInvalid(i){e5=i}static resetCaches(){ut.resetCache(),vr.resetCache()}}function Oe(o){return typeof o>"u"}function ss(o){return typeof o=="number"}function _f(o){return typeof o=="number"&&o%1===0}function mG(o){return typeof o=="string"}function kG(o){return Object.prototype.toString.call(o)==="[object Date]"}function LT(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function bG(o){return Array.isArray(o)?o:[o]}function t5(o,i,a){if(o.length!==0)return o.reduce((l,u)=>{const h=[i(u),u];return l&&a(l[0],h[0])===l[0]?l:h},null)[1]}function wG(o,i){return i.reduce((a,l)=>(a[l]=o[l],a),{})}function Ca(o,i){return Object.prototype.hasOwnProperty.call(o,i)}function fr(o,i,a){return _f(o)&&o>=i&&o<=a}function vG(o,i){return o-i*Math.floor(o/i)}function Ot(o,i=2){const a=o<0;let l;return a?l="-"+(""+-o).padStart(i,"0"):l=(""+o).padStart(i,"0"),l}function Gr(o){if(!(Oe(o)||o===null||o===""))return parseInt(o,10)}function $o(o){if(!(Oe(o)||o===null||o===""))return parseFloat(o)}function $w(o){if(!(Oe(o)||o===null||o==="")){const i=parseFloat("0."+o)*1e3;return Math.floor(i)}}function Ww(o,i,a=!1){const l=10**i;return(a?Math.trunc:Math.round)(o*l)/l}function ql(o){return o%4===0&&(o%100!==0||o%400===0)}function gl(o){return ql(o)?366:365}function Qh(o,i){const a=vG(i-1,12)+1,l=o+(i-a)/12;return a===2?ql(l)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][a-1]}function yf(o){let i=Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second,o.millisecond);return o.year<100&&o.year>=0&&(i=new Date(i),i.setUTCFullYear(o.year,o.month-1,o.day)),+i}function Jh(o){const i=(o+Math.floor(o/4)-Math.floor(o/100)+Math.floor(o/400))%7,a=o-1,l=(a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400))%7;return i===4||l===3?53:52}function Lb(o){return o>99?o:o>Nt.twoDigitCutoffYear?1900+o:2e3+o}function jT(o,i,a,l=null){const u=new Date(o),h={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};l&&(h.timeZone=l);const g={timeZoneName:i,...h},m=new Intl.DateTimeFormat(a,g).formatToParts(u).find(k=>k.type.toLowerCase()==="timezonename");return m?m.value:null}function Af(o,i){let a=parseInt(o,10);Number.isNaN(a)&&(a=0);const l=parseInt(i,10)||0,u=a<0||Object.is(a,-0)?-l:l;return a*60+u}function RT(o){const i=Number(o);if(typeof o=="boolean"||o===""||Number.isNaN(i))throw new Jn(`Invalid unit value ${o}`);return i}function Xh(o,i){const a={};for(const l in o)if(Ca(o,l)){const u=o[l];if(u==null)continue;a[i(l)]=RT(u)}return a}function pl(o,i){const a=Math.trunc(Math.abs(o/60)),l=Math.trunc(Math.abs(o%60)),u=o>=0?"+":"-";switch(i){case"short":return`${u}${Ot(a,2)}:${Ot(l,2)}`;case"narrow":return`${u}${a}${l>0?`:${l}`:""}`;case"techie":return`${u}${Ot(a,2)}${Ot(l,2)}`;default:throw new RangeError(`Value format ${i} is out of range for property format`)}}function Cf(o){return wG(o,["hour","minute","second","millisecond"])}const _G=["January","February","March","April","May","June","July","August","September","October","November","December"],FT=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yG=["J","F","M","A","M","J","J","A","S","O","N","D"];function VT(o){switch(o){case"narrow":return[...yG];case"short":return[...FT];case"long":return[..._G];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const UT=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],HT=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],AG=["M","T","W","T","F","S","S"];function $T(o){switch(o){case"narrow":return[...AG];case"short":return[...HT];case"long":return[...UT];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const WT=["AM","PM"],CG=["Before Christ","Anno Domini"],xG=["BC","AD"],EG=["B","A"];function qT(o){switch(o){case"narrow":return[...EG];case"short":return[...xG];case"long":return[...CG];default:return null}}function DG(o){return WT[o.hour<12?0:1]}function SG(o,i){return $T(i)[o.weekday-1]}function TG(o,i){return VT(i)[o.month-1]}function IG(o,i){return qT(i)[o.year<0?0:1]}function MG(o,i,a="always",l=!1){const u={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},h=["hours","minutes","seconds"].indexOf(o)===-1;if(a==="auto"&&h){const v=o==="days";switch(i){case 1:return v?"tomorrow":`next ${u[o][0]}`;case-1:return v?"yesterday":`last ${u[o][0]}`;case 0:return v?"today":`this ${u[o][0]}`}}const g=Object.is(i,-0)||i<0,m=Math.abs(i),k=m===1,b=u[o],y=l?k?b[1]:b[2]||b[1]:k?u[o][0]:o;return g?`${m} ${y} ago`:`in ${m} ${y}`}function n5(o,i){let a="";for(const l of o)l.literal?a+=l.val:a+=i(l.val);return a}const NG={D:Kh,DD:bT,DDD:wT,DDDD:vT,t:_T,tt:yT,ttt:AT,tttt:CT,T:xT,TT:ET,TTT:DT,TTTT:ST,f:TT,ff:MT,fff:OT,ffff:PT,F:IT,FF:NT,FFF:BT,FFFF:zT};class sn{static create(i,a={}){return new sn(i,a)}static parseFormat(i){let a=null,l="",u=!1;const h=[];for(let g=0;g<i.length;g++){const m=i.charAt(g);m==="'"?(l.length>0&&h.push({literal:u||/^\s+$/.test(l),val:l}),a=null,l="",u=!u):u||m===a?l+=m:(l.length>0&&h.push({literal:/^\s+$/.test(l),val:l}),l=m,a=m)}return l.length>0&&h.push({literal:u||/^\s+$/.test(l),val:l}),h}static macroTokenToFormatOpts(i){return NG[i]}constructor(i,a){this.opts=a,this.loc=i,this.systemLoc=null}formatWithSystemDefault(i,a){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(i,{...this.opts,...a}).format()}dtFormatter(i,a={}){return this.loc.dtFormatter(i,{...this.opts,...a})}formatDateTime(i,a){return this.dtFormatter(i,a).format()}formatDateTimeParts(i,a){return this.dtFormatter(i,a).formatToParts()}formatInterval(i,a){return this.dtFormatter(i.start,a).dtf.formatRange(i.start.toJSDate(),i.end.toJSDate())}resolvedOptions(i,a){return this.dtFormatter(i,a).resolvedOptions()}num(i,a=0){if(this.opts.forceSimple)return Ot(i,a);const l={...this.opts};return a>0&&(l.padTo=a),this.loc.numberFormatter(l).format(i)}formatDateTimeFromString(i,a){const l=this.loc.listingMode()==="en",u=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",h=(x,E)=>this.loc.extract(i,x,E),g=x=>i.isOffsetFixed&&i.offset===0&&x.allowZ?"Z":i.isValid?i.zone.formatOffset(i.ts,x.format):"",m=()=>l?DG(i):h({hour:"numeric",hourCycle:"h12"},"dayperiod"),k=(x,E)=>l?TG(i,x):h(E?{month:x}:{month:x,day:"numeric"},"month"),b=(x,E)=>l?SG(i,x):h(E?{weekday:x}:{weekday:x,month:"long",day:"numeric"},"weekday"),y=x=>{const E=sn.macroTokenToFormatOpts(x);return E?this.formatWithSystemDefault(i,E):x},v=x=>l?IG(i,x):h({era:x},"era"),A=x=>{switch(x){case"S":return this.num(i.millisecond);case"u":case"SSS":return this.num(i.millisecond,3);case"s":return this.num(i.second);case"ss":return this.num(i.second,2);case"uu":return this.num(Math.floor(i.millisecond/10),2);case"uuu":return this.num(Math.floor(i.millisecond/100));case"m":return this.num(i.minute);case"mm":return this.num(i.minute,2);case"h":return this.num(i.hour%12===0?12:i.hour%12);case"hh":return this.num(i.hour%12===0?12:i.hour%12,2);case"H":return this.num(i.hour);case"HH":return this.num(i.hour,2);case"Z":return g({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return g({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return g({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return i.zone.offsetName(i.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return i.zone.offsetName(i.ts,{format:"long",locale:this.loc.locale});case"z":return i.zoneName;case"a":return m();case"d":return u?h({day:"numeric"},"day"):this.num(i.day);case"dd":return u?h({day:"2-digit"},"day"):this.num(i.day,2);case"c":return this.num(i.weekday);case"ccc":return b("short",!0);case"cccc":return b("long",!0);case"ccccc":return b("narrow",!0);case"E":return this.num(i.weekday);case"EEE":return b("short",!1);case"EEEE":return b("long",!1);case"EEEEE":return b("narrow",!1);case"L":return u?h({month:"numeric",day:"numeric"},"month"):this.num(i.month);case"LL":return u?h({month:"2-digit",day:"numeric"},"month"):this.num(i.month,2);case"LLL":return k("short",!0);case"LLLL":return k("long",!0);case"LLLLL":return k("narrow",!0);case"M":return u?h({month:"numeric"},"month"):this.num(i.month);case"MM":return u?h({month:"2-digit"},"month"):this.num(i.month,2);case"MMM":return k("short",!1);case"MMMM":return k("long",!1);case"MMMMM":return k("narrow",!1);case"y":return u?h({year:"numeric"},"year"):this.num(i.year);case"yy":return u?h({year:"2-digit"},"year"):this.num(i.year.toString().slice(-2),2);case"yyyy":return u?h({year:"numeric"},"year"):this.num(i.year,4);case"yyyyyy":return u?h({year:"numeric"},"year"):this.num(i.year,6);case"G":return v("short");case"GG":return v("long");case"GGGGG":return v("narrow");case"kk":return this.num(i.weekYear.toString().slice(-2),2);case"kkkk":return this.num(i.weekYear,4);case"W":return this.num(i.weekNumber);case"WW":return this.num(i.weekNumber,2);case"o":return this.num(i.ordinal);case"ooo":return this.num(i.ordinal,3);case"q":return this.num(i.quarter);case"qq":return this.num(i.quarter,2);case"X":return this.num(Math.floor(i.ts/1e3));case"x":return this.num(i.ts);default:return y(x)}};return n5(sn.parseFormat(a),A)}formatDurationFromString(i,a){const l=k=>{switch(k[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},u=k=>b=>{const y=l(b);return y?this.num(k.get(y),b.length):b},h=sn.parseFormat(a),g=h.reduce((k,{literal:b,val:y})=>b?k:k.concat(y),[]),m=i.shiftTo(...g.map(l).filter(k=>k));return n5(h,u(m))}}class bi{constructor(i,a){this.reason=i,this.explanation=a}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const GT=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Oa(...o){const i=o.reduce((a,l)=>a+l.source,"");return RegExp(`^${i}$`)}function Ba(...o){return i=>o.reduce(([a,l,u],h)=>{const[g,m,k]=h(i,u);return[{...a,...g},m||l,k]},[{},null,1]).slice(0,2)}function Pa(o,...i){if(o==null)return[null,null];for(const[a,l]of i){const u=a.exec(o);if(u)return l(u)}return[null,null]}function YT(...o){return(i,a)=>{const l={};let u;for(u=0;u<o.length;u++)l[o[u]]=Gr(i[a+u]);return[l,null,a+u]}}const ZT=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,OG=`(?:${ZT.source}?(?:\\[(${GT.source})\\])?)?`,qw=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,KT=RegExp(`${qw.source}${OG}`),Gw=RegExp(`(?:T${KT.source})?`),BG=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,PG=/(\d{4})-?W(\d\d)(?:-?(\d))?/,zG=/(\d{4})-?(\d{3})/,LG=YT("weekYear","weekNumber","weekDay"),jG=YT("year","ordinal"),RG=/(\d{4})-(\d\d)-(\d\d)/,QT=RegExp(`${qw.source} ?(?:${ZT.source}|(${GT.source}))?`),FG=RegExp(`(?: ${QT.source})?`);function ma(o,i,a){const l=o[i];return Oe(l)?a:Gr(l)}function VG(o,i){return[{year:ma(o,i),month:ma(o,i+1,1),day:ma(o,i+2,1)},null,i+3]}function za(o,i){return[{hours:ma(o,i,0),minutes:ma(o,i+1,0),seconds:ma(o,i+2,0),milliseconds:$w(o[i+3])},null,i+4]}function Gl(o,i){const a=!o[i]&&!o[i+1],l=Af(o[i+1],o[i+2]),u=a?null:dn.instance(l);return[{},u,i+3]}function Yl(o,i){const a=o[i]?vr.create(o[i]):null;return[{},a,i+1]}const UG=RegExp(`^T?${qw.source}$`),HG=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function $G(o){const[i,a,l,u,h,g,m,k,b]=o,y=i[0]==="-",v=k&&k[0]==="-",A=(x,E=!1)=>x!==void 0&&(E||x&&y)?-x:x;return[{years:A($o(a)),months:A($o(l)),weeks:A($o(u)),days:A($o(h)),hours:A($o(g)),minutes:A($o(m)),seconds:A($o(k),k==="-0"),milliseconds:A($w(b),v)}]}const WG={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Yw(o,i,a,l,u,h,g){const m={year:i.length===2?Lb(Gr(i)):Gr(i),month:FT.indexOf(a)+1,day:Gr(l),hour:Gr(u),minute:Gr(h)};return g&&(m.second=Gr(g)),o&&(m.weekday=o.length>3?UT.indexOf(o)+1:HT.indexOf(o)+1),m}const qG=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function GG(o){const[,i,a,l,u,h,g,m,k,b,y,v]=o,A=Yw(i,u,l,a,h,g,m);let x;return k?x=WG[k]:b?x=0:x=Af(y,v),[A,new dn(x)]}function YG(o){return o.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const ZG=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,KG=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,QG=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function i5(o){const[,i,a,l,u,h,g,m]=o;return[Yw(i,u,l,a,h,g,m),dn.utcInstance]}function JG(o){const[,i,a,l,u,h,g,m]=o;return[Yw(i,m,a,l,u,h,g),dn.utcInstance]}const XG=Oa(BG,Gw),eY=Oa(PG,Gw),tY=Oa(zG,Gw),nY=Oa(KT),JT=Ba(VG,za,Gl,Yl),iY=Ba(LG,za,Gl,Yl),rY=Ba(jG,za,Gl,Yl),oY=Ba(za,Gl,Yl);function sY(o){return Pa(o,[XG,JT],[eY,iY],[tY,rY],[nY,oY])}function aY(o){return Pa(YG(o),[qG,GG])}function cY(o){return Pa(o,[ZG,i5],[KG,i5],[QG,JG])}function lY(o){return Pa(o,[HG,$G])}const dY=Ba(za);function uY(o){return Pa(o,[UG,dY])}const hY=Oa(RG,FG),fY=Oa(QT),gY=Ba(za,Gl,Yl);function pY(o){return Pa(o,[hY,JT],[fY,gY])}const r5="Invalid Duration",XT={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},mY={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...XT},Yn=146097/400,Ws=146097/4800,kY={years:{quarters:4,months:12,weeks:Yn/7,days:Yn,hours:Yn*24,minutes:Yn*24*60,seconds:Yn*24*60*60,milliseconds:Yn*24*60*60*1e3},quarters:{months:3,weeks:Yn/28,days:Yn/4,hours:Yn*24/4,minutes:Yn*24*60/4,seconds:Yn*24*60*60/4,milliseconds:Yn*24*60*60*1e3/4},months:{weeks:Ws/7,days:Ws,hours:Ws*24,minutes:Ws*24*60,seconds:Ws*24*60*60,milliseconds:Ws*24*60*60*1e3},...XT},is=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],bY=is.slice(0).reverse();function Hr(o,i,a=!1){const l={values:a?i.values:{...o.values,...i.values||{}},loc:o.loc.clone(i.loc),conversionAccuracy:i.conversionAccuracy||o.conversionAccuracy,matrix:i.matrix||o.matrix};return new Le(l)}function eI(o,i){let a=i.milliseconds??0;for(const l of bY.slice(1))i[l]&&(a+=i[l]*o[l].milliseconds);return a}function o5(o,i){const a=eI(o,i)<0?-1:1;is.reduceRight((l,u)=>{if(Oe(i[u]))return l;if(l){const h=i[l]*a,g=o[u][l],m=Math.floor(h/g);i[u]+=m*a,i[l]-=m*g*a}return u},null),is.reduce((l,u)=>{if(Oe(i[u]))return l;if(l){const h=i[l]%1;i[l]-=h,i[u]+=h*o[l][u]}return u},null)}function wY(o){const i={};for(const[a,l]of Object.entries(o))l!==0&&(i[a]=l);return i}class Le{constructor(i){const a=i.conversionAccuracy==="longterm"||!1;let l=a?kY:mY;i.matrix&&(l=i.matrix),this.values=i.values,this.loc=i.loc||ut.create(),this.conversionAccuracy=a?"longterm":"casual",this.invalid=i.invalid||null,this.matrix=l,this.isLuxonDuration=!0}static fromMillis(i,a){return Le.fromObject({milliseconds:i},a)}static fromObject(i,a={}){if(i==null||typeof i!="object")throw new Jn(`Duration.fromObject: argument expected to be an object, got ${i===null?"null":typeof i}`);return new Le({values:Xh(i,Le.normalizeUnit),loc:ut.fromObject(a),conversionAccuracy:a.conversionAccuracy,matrix:a.matrix})}static fromDurationLike(i){if(ss(i))return Le.fromMillis(i);if(Le.isDuration(i))return i;if(typeof i=="object")return Le.fromObject(i);throw new Jn(`Unknown duration argument ${i} of type ${typeof i}`)}static fromISO(i,a){const[l]=lY(i);return l?Le.fromObject(l,a):Le.invalid("unparsable",`the input "${i}" can't be parsed as ISO 8601`)}static fromISOTime(i,a){const[l]=uY(i);return l?Le.fromObject(l,a):Le.invalid("unparsable",`the input "${i}" can't be parsed as ISO 8601`)}static invalid(i,a=null){if(!i)throw new Jn("need to specify a reason the Duration is invalid");const l=i instanceof bi?i:new bi(i,a);if(Nt.throwOnInvalid)throw new Kq(l);return new Le({invalid:l})}static normalizeUnit(i){const a={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[i&&i.toLowerCase()];if(!a)throw new kT(i);return a}static isDuration(i){return i&&i.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(i,a={}){const l={...a,floor:a.round!==!1&&a.floor!==!1};return this.isValid?sn.create(this.loc,l).formatDurationFromString(this,i):r5}toHuman(i={}){if(!this.isValid)return r5;const a=is.map(l=>{const u=this.values[l];return Oe(u)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...i,unit:l.slice(0,-1)}).format(u)}).filter(l=>l);return this.loc.listFormatter({type:"conjunction",style:i.listStyle||"narrow",...i}).format(a)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let i="P";return this.years!==0&&(i+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(i+=this.months+this.quarters*3+"M"),this.weeks!==0&&(i+=this.weeks+"W"),this.days!==0&&(i+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(i+="T"),this.hours!==0&&(i+=this.hours+"H"),this.minutes!==0&&(i+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(i+=Ww(this.seconds+this.milliseconds/1e3,3)+"S"),i==="P"&&(i+="T0S"),i}toISOTime(i={}){if(!this.isValid)return null;const a=this.toMillis();return a<0||a>=864e5?null:(i={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...i,includeOffset:!1},Se.fromMillis(a,{zone:"UTC"}).toISOTime(i))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?eI(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(i){if(!this.isValid)return this;const a=Le.fromDurationLike(i),l={};for(const u of is)(Ca(a.values,u)||Ca(this.values,u))&&(l[u]=a.get(u)+this.get(u));return Hr(this,{values:l},!0)}minus(i){if(!this.isValid)return this;const a=Le.fromDurationLike(i);return this.plus(a.negate())}mapUnits(i){if(!this.isValid)return this;const a={};for(const l of Object.keys(this.values))a[l]=RT(i(this.values[l],l));return Hr(this,{values:a},!0)}get(i){return this[Le.normalizeUnit(i)]}set(i){if(!this.isValid)return this;const a={...this.values,...Xh(i,Le.normalizeUnit)};return Hr(this,{values:a})}reconfigure({locale:i,numberingSystem:a,conversionAccuracy:l,matrix:u}={}){const g={loc:this.loc.clone({locale:i,numberingSystem:a}),matrix:u,conversionAccuracy:l};return Hr(this,g)}as(i){return this.isValid?this.shiftTo(i).get(i):NaN}normalize(){if(!this.isValid)return this;const i=this.toObject();return o5(this.matrix,i),Hr(this,{values:i},!0)}rescale(){if(!this.isValid)return this;const i=wY(this.normalize().shiftToAll().toObject());return Hr(this,{values:i},!0)}shiftTo(...i){if(!this.isValid)return this;if(i.length===0)return this;i=i.map(g=>Le.normalizeUnit(g));const a={},l={},u=this.toObject();let h;for(const g of is)if(i.indexOf(g)>=0){h=g;let m=0;for(const b in l)m+=this.matrix[b][g]*l[b],l[b]=0;ss(u[g])&&(m+=u[g]);const k=Math.trunc(m);a[g]=k,l[g]=(m*1e3-k*1e3)/1e3}else ss(u[g])&&(l[g]=u[g]);for(const g in l)l[g]!==0&&(a[h]+=g===h?l[g]:l[g]/this.matrix[h][g]);return o5(this.matrix,a),Hr(this,{values:a},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const i={};for(const a of Object.keys(this.values))i[a]=this.values[a]===0?0:-this.values[a];return Hr(this,{values:i},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(i){if(!this.isValid||!i.isValid||!this.loc.equals(i.loc))return!1;function a(l,u){return l===void 0||l===0?u===void 0||u===0:l===u}for(const l of is)if(!a(this.values[l],i.values[l]))return!1;return!0}}const qs="Invalid Interval";function vY(o,i){return!o||!o.isValid?At.invalid("missing or invalid start"):!i||!i.isValid?At.invalid("missing or invalid end"):i<o?At.invalid("end before start",`The end of an interval must be after its start, but you had start=${o.toISO()} and end=${i.toISO()}`):null}class At{constructor(i){this.s=i.start,this.e=i.end,this.invalid=i.invalid||null,this.isLuxonInterval=!0}static invalid(i,a=null){if(!i)throw new Jn("need to specify a reason the Interval is invalid");const l=i instanceof bi?i:new bi(i,a);if(Nt.throwOnInvalid)throw new Zq(l);return new At({invalid:l})}static fromDateTimes(i,a){const l=Zc(i),u=Zc(a),h=vY(l,u);return h??new At({start:l,end:u})}static after(i,a){const l=Le.fromDurationLike(a),u=Zc(i);return At.fromDateTimes(u,u.plus(l))}static before(i,a){const l=Le.fromDurationLike(a),u=Zc(i);return At.fromDateTimes(u.minus(l),u)}static fromISO(i,a){const[l,u]=(i||"").split("/",2);if(l&&u){let h,g;try{h=Se.fromISO(l,a),g=h.isValid}catch{g=!1}let m,k;try{m=Se.fromISO(u,a),k=m.isValid}catch{k=!1}if(g&&k)return At.fromDateTimes(h,m);if(g){const b=Le.fromISO(u,a);if(b.isValid)return At.after(h,b)}else if(k){const b=Le.fromISO(l,a);if(b.isValid)return At.before(m,b)}}return At.invalid("unparsable",`the input "${i}" can't be parsed as ISO 8601`)}static isInterval(i){return i&&i.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(i="milliseconds"){return this.isValid?this.toDuration(i).get(i):NaN}count(i="milliseconds"){if(!this.isValid)return NaN;const a=this.start.startOf(i),l=this.end.startOf(i);return Math.floor(l.diff(a,i).get(i))+(l.valueOf()!==this.end.valueOf())}hasSame(i){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,i):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(i){return this.isValid?this.s>i:!1}isBefore(i){return this.isValid?this.e<=i:!1}contains(i){return this.isValid?this.s<=i&&this.e>i:!1}set({start:i,end:a}={}){return this.isValid?At.fromDateTimes(i||this.s,a||this.e):this}splitAt(...i){if(!this.isValid)return[];const a=i.map(Zc).filter(g=>this.contains(g)).sort(),l=[];let{s:u}=this,h=0;for(;u<this.e;){const g=a[h]||this.e,m=+g>+this.e?this.e:g;l.push(At.fromDateTimes(u,m)),u=m,h+=1}return l}splitBy(i){const a=Le.fromDurationLike(i);if(!this.isValid||!a.isValid||a.as("milliseconds")===0)return[];let{s:l}=this,u=1,h;const g=[];for(;l<this.e;){const m=this.start.plus(a.mapUnits(k=>k*u));h=+m>+this.e?this.e:m,g.push(At.fromDateTimes(l,h)),l=h,u+=1}return g}divideEqually(i){return this.isValid?this.splitBy(this.length()/i).slice(0,i):[]}overlaps(i){return this.e>i.s&&this.s<i.e}abutsStart(i){return this.isValid?+this.e==+i.s:!1}abutsEnd(i){return this.isValid?+i.e==+this.s:!1}engulfs(i){return this.isValid?this.s<=i.s&&this.e>=i.e:!1}equals(i){return!this.isValid||!i.isValid?!1:this.s.equals(i.s)&&this.e.equals(i.e)}intersection(i){if(!this.isValid)return this;const a=this.s>i.s?this.s:i.s,l=this.e<i.e?this.e:i.e;return a>=l?null:At.fromDateTimes(a,l)}union(i){if(!this.isValid)return this;const a=this.s<i.s?this.s:i.s,l=this.e>i.e?this.e:i.e;return At.fromDateTimes(a,l)}static merge(i){const[a,l]=i.sort((u,h)=>u.s-h.s).reduce(([u,h],g)=>h?h.overlaps(g)||h.abutsStart(g)?[u,h.union(g)]:[u.concat([h]),g]:[u,g],[[],null]);return l&&a.push(l),a}static xor(i){let a=null,l=0;const u=[],h=i.map(k=>[{time:k.s,type:"s"},{time:k.e,type:"e"}]),g=Array.prototype.concat(...h),m=g.sort((k,b)=>k.time-b.time);for(const k of m)l+=k.type==="s"?1:-1,l===1?a=k.time:(a&&+a!=+k.time&&u.push(At.fromDateTimes(a,k.time)),a=null);return At.merge(u)}difference(...i){return At.xor([this].concat(i)).map(a=>this.intersection(a)).filter(a=>a&&!a.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:qs}toLocaleString(i=Kh,a={}){return this.isValid?sn.create(this.s.loc.clone(a),i).formatInterval(this):qs}toISO(i){return this.isValid?`${this.s.toISO(i)}/${this.e.toISO(i)}`:qs}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:qs}toISOTime(i){return this.isValid?`${this.s.toISOTime(i)}/${this.e.toISOTime(i)}`:qs}toFormat(i,{separator:a=" – "}={}){return this.isValid?`${this.s.toFormat(i)}${a}${this.e.toFormat(i)}`:qs}toDuration(i,a){return this.isValid?this.e.diff(this.s,i,a):Le.invalid(this.invalidReason)}mapEndpoints(i){return At.fromDateTimes(i(this.s),i(this.e))}}class eh{static hasDST(i=Nt.defaultZone){const a=Se.now().setZone(i).set({month:12});return!i.isUniversal&&a.offset!==a.set({month:6}).offset}static isValidIANAZone(i){return vr.isValidZone(i)}static normalizeZone(i){return Qr(i,Nt.defaultZone)}static months(i="long",{locale:a=null,numberingSystem:l=null,locObj:u=null,outputCalendar:h="gregory"}={}){return(u||ut.create(a,l,h)).months(i)}static monthsFormat(i="long",{locale:a=null,numberingSystem:l=null,locObj:u=null,outputCalendar:h="gregory"}={}){return(u||ut.create(a,l,h)).months(i,!0)}static weekdays(i="long",{locale:a=null,numberingSystem:l=null,locObj:u=null}={}){return(u||ut.create(a,l,null)).weekdays(i)}static weekdaysFormat(i="long",{locale:a=null,numberingSystem:l=null,locObj:u=null}={}){return(u||ut.create(a,l,null)).weekdays(i,!0)}static meridiems({locale:i=null}={}){return ut.create(i).meridiems()}static eras(i="short",{locale:a=null}={}){return ut.create(a,null,"gregory").eras(i)}static features(){return{relative:LT()}}}function s5(o,i){const a=u=>u.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),l=a(i)-a(o);return Math.floor(Le.fromMillis(l).as("days"))}function _Y(o,i,a){const l=[["years",(k,b)=>b.year-k.year],["quarters",(k,b)=>b.quarter-k.quarter+(b.year-k.year)*4],["months",(k,b)=>b.month-k.month+(b.year-k.year)*12],["weeks",(k,b)=>{const y=s5(k,b);return(y-y%7)/7}],["days",s5]],u={},h=o;let g,m;for(const[k,b]of l)a.indexOf(k)>=0&&(g=k,u[k]=b(o,i),m=h.plus(u),m>i?(u[k]--,o=h.plus(u),o>i&&(m=o,u[k]--,o=h.plus(u))):o=m);return[o,u,m,g]}function yY(o,i,a,l){let[u,h,g,m]=_Y(o,i,a);const k=i-u,b=a.filter(v=>["hours","minutes","seconds","milliseconds"].indexOf(v)>=0);b.length===0&&(g<i&&(g=u.plus({[m]:1})),g!==u&&(h[m]=(h[m]||0)+k/(g-u)));const y=Le.fromObject(h,l);return b.length>0?Le.fromMillis(k,l).shiftTo(...b).plus(y):y}const Zw={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},a5={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},AY=Zw.hanidec.replace(/[\[|\]]/g,"").split("");function CY(o){let i=parseInt(o,10);if(isNaN(i)){i="";for(let a=0;a<o.length;a++){const l=o.charCodeAt(a);if(o[a].search(Zw.hanidec)!==-1)i+=AY.indexOf(o[a]);else for(const u in a5){const[h,g]=a5[u];l>=h&&l<=g&&(i+=l-h)}}return parseInt(i,10)}else return i}function hi({numberingSystem:o},i=""){return new RegExp(`${Zw[o||"latn"]}${i}`)}const xY="missing Intl.DateTimeFormat.formatToParts support";function $e(o,i=a=>a){return{regex:o,deser:([a])=>i(CY(a))}}const EY=String.fromCharCode(160),tI=`[ ${EY}]`,nI=new RegExp(tI,"g");function DY(o){return o.replace(/\./g,"\\.?").replace(nI,tI)}function c5(o){return o.replace(/\./g,"").replace(nI," ").toLowerCase()}function fi(o,i){return o===null?null:{regex:RegExp(o.map(DY).join("|")),deser:([a])=>o.findIndex(l=>c5(a)===c5(l))+i}}function l5(o,i){return{regex:o,deser:([,a,l])=>Af(a,l),groups:i}}function th(o){return{regex:o,deser:([i])=>i}}function SY(o){return o.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function TY(o,i){const a=hi(i),l=hi(i,"{2}"),u=hi(i,"{3}"),h=hi(i,"{4}"),g=hi(i,"{6}"),m=hi(i,"{1,2}"),k=hi(i,"{1,3}"),b=hi(i,"{1,6}"),y=hi(i,"{1,9}"),v=hi(i,"{2,4}"),A=hi(i,"{4,6}"),x=P=>({regex:RegExp(SY(P.val)),deser:([I])=>I,literal:!0}),T=(P=>{if(o.literal)return x(P);switch(P.val){case"G":return fi(i.eras("short"),0);case"GG":return fi(i.eras("long"),0);case"y":return $e(b);case"yy":return $e(v,Lb);case"yyyy":return $e(h);case"yyyyy":return $e(A);case"yyyyyy":return $e(g);case"M":return $e(m);case"MM":return $e(l);case"MMM":return fi(i.months("short",!0),1);case"MMMM":return fi(i.months("long",!0),1);case"L":return $e(m);case"LL":return $e(l);case"LLL":return fi(i.months("short",!1),1);case"LLLL":return fi(i.months("long",!1),1);case"d":return $e(m);case"dd":return $e(l);case"o":return $e(k);case"ooo":return $e(u);case"HH":return $e(l);case"H":return $e(m);case"hh":return $e(l);case"h":return $e(m);case"mm":return $e(l);case"m":return $e(m);case"q":return $e(m);case"qq":return $e(l);case"s":return $e(m);case"ss":return $e(l);case"S":return $e(k);case"SSS":return $e(u);case"u":return th(y);case"uu":return th(m);case"uuu":return $e(a);case"a":return fi(i.meridiems(),0);case"kkkk":return $e(h);case"kk":return $e(v,Lb);case"W":return $e(m);case"WW":return $e(l);case"E":case"c":return $e(a);case"EEE":return fi(i.weekdays("short",!1),1);case"EEEE":return fi(i.weekdays("long",!1),1);case"ccc":return fi(i.weekdays("short",!0),1);case"cccc":return fi(i.weekdays("long",!0),1);case"Z":case"ZZ":return l5(new RegExp(`([+-]${m.source})(?::(${l.source}))?`),2);case"ZZZ":return l5(new RegExp(`([+-]${m.source})(${l.source})?`),2);case"z":return th(/[a-z_+-/]{1,256}?/i);case" ":return th(/[^\S\n\r]/);default:return x(P)}})(o)||{invalidReason:xY};return T.token=o,T}const IY={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function MY(o,i,a){const{type:l,value:u}=o;if(l==="literal"){const k=/^\s+$/.test(u);return{literal:!k,val:k?" ":u}}const h=i[l];let g=l;l==="hour"&&(i.hour12!=null?g=i.hour12?"hour12":"hour24":i.hourCycle!=null?i.hourCycle==="h11"||i.hourCycle==="h12"?g="hour12":g="hour24":g=a.hour12?"hour12":"hour24");let m=IY[g];if(typeof m=="object"&&(m=m[h]),m)return{literal:!1,val:m}}function NY(o){return[`^${o.map(a=>a.regex).reduce((a,l)=>`${a}(${l.source})`,"")}$`,o]}function OY(o,i,a){const l=o.match(i);if(l){const u={};let h=1;for(const g in a)if(Ca(a,g)){const m=a[g],k=m.groups?m.groups+1:1;!m.literal&&m.token&&(u[m.token.val[0]]=m.deser(l.slice(h,h+k))),h+=k}return[l,u]}else return[l,{}]}function BY(o){const i=h=>{switch(h){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let a=null,l;return Oe(o.z)||(a=vr.create(o.z)),Oe(o.Z)||(a||(a=new dn(o.Z)),l=o.Z),Oe(o.q)||(o.M=(o.q-1)*3+1),Oe(o.h)||(o.h<12&&o.a===1?o.h+=12:o.h===12&&o.a===0&&(o.h=0)),o.G===0&&o.y&&(o.y=-o.y),Oe(o.u)||(o.S=$w(o.u)),[Object.keys(o).reduce((h,g)=>{const m=i(g);return m&&(h[m]=o[g]),h},{}),a,l]}let v0=null;function PY(){return v0||(v0=Se.fromMillis(1555555555555)),v0}function zY(o,i){if(o.literal)return o;const a=sn.macroTokenToFormatOpts(o.val),l=oI(a,i);return l==null||l.includes(void 0)?o:l}function iI(o,i){return Array.prototype.concat(...o.map(a=>zY(a,i)))}function rI(o,i,a){const l=iI(sn.parseFormat(a),o),u=l.map(g=>TY(g,o)),h=u.find(g=>g.invalidReason);if(h)return{input:i,tokens:l,invalidReason:h.invalidReason};{const[g,m]=NY(u),k=RegExp(g,"i"),[b,y]=OY(i,k,m),[v,A,x]=y?BY(y):[null,null,void 0];if(Ca(y,"a")&&Ca(y,"H"))throw new tl("Can't include meridiem when specifying 24-hour format");return{input:i,tokens:l,regex:k,rawMatches:b,matches:y,result:v,zone:A,specificOffset:x}}}function LY(o,i,a){const{result:l,zone:u,specificOffset:h,invalidReason:g}=rI(o,i,a);return[l,u,h,g]}function oI(o,i){if(!o)return null;const l=sn.create(i,o).dtFormatter(PY()),u=l.formatToParts(),h=l.resolvedOptions();return u.map(g=>MY(g,o,h))}const sI=[0,31,59,90,120,151,181,212,243,273,304,334],aI=[0,31,60,91,121,152,182,213,244,274,305,335];function ei(o,i){return new bi("unit out of range",`you specified ${i} (of type ${typeof i}) as a ${o}, which is invalid`)}function cI(o,i,a){const l=new Date(Date.UTC(o,i-1,a));o<100&&o>=0&&l.setUTCFullYear(l.getUTCFullYear()-1900);const u=l.getUTCDay();return u===0?7:u}function lI(o,i,a){return a+(ql(o)?aI:sI)[i-1]}function dI(o,i){const a=ql(o)?aI:sI,l=a.findIndex(h=>h<i),u=i-a[l];return{month:l+1,day:u}}function jb(o){const{year:i,month:a,day:l}=o,u=lI(i,a,l),h=cI(i,a,l);let g=Math.floor((u-h+10)/7),m;return g<1?(m=i-1,g=Jh(m)):g>Jh(i)?(m=i+1,g=1):m=i,{weekYear:m,weekNumber:g,weekday:h,...Cf(o)}}function d5(o){const{weekYear:i,weekNumber:a,weekday:l}=o,u=cI(i,1,4),h=gl(i);let g=a*7+l-u-3,m;g<1?(m=i-1,g+=gl(m)):g>h?(m=i+1,g-=gl(i)):m=i;const{month:k,day:b}=dI(m,g);return{year:m,month:k,day:b,...Cf(o)}}function _0(o){const{year:i,month:a,day:l}=o,u=lI(i,a,l);return{year:i,ordinal:u,...Cf(o)}}function u5(o){const{year:i,ordinal:a}=o,{month:l,day:u}=dI(i,a);return{year:i,month:l,day:u,...Cf(o)}}function jY(o){const i=_f(o.weekYear),a=fr(o.weekNumber,1,Jh(o.weekYear)),l=fr(o.weekday,1,7);return i?a?l?!1:ei("weekday",o.weekday):ei("week",o.week):ei("weekYear",o.weekYear)}function RY(o){const i=_f(o.year),a=fr(o.ordinal,1,gl(o.year));return i?a?!1:ei("ordinal",o.ordinal):ei("year",o.year)}function uI(o){const i=_f(o.year),a=fr(o.month,1,12),l=fr(o.day,1,Qh(o.year,o.month));return i?a?l?!1:ei("day",o.day):ei("month",o.month):ei("year",o.year)}function hI(o){const{hour:i,minute:a,second:l,millisecond:u}=o,h=fr(i,0,23)||i===24&&a===0&&l===0&&u===0,g=fr(a,0,59),m=fr(l,0,59),k=fr(u,0,999);return h?g?m?k?!1:ei("millisecond",u):ei("second",l):ei("minute",a):ei("hour",i)}const y0="Invalid DateTime",h5=864e13;function nh(o){return new bi("unsupported zone",`the zone "${o.name}" is not supported`)}function A0(o){return o.weekData===null&&(o.weekData=jb(o.c)),o.weekData}function Wo(o,i){const a={ts:o.ts,zone:o.zone,c:o.c,o:o.o,loc:o.loc,invalid:o.invalid};return new Se({...a,...i,old:a})}function fI(o,i,a){let l=o-i*60*1e3;const u=a.offset(l);if(i===u)return[l,i];l-=(u-i)*60*1e3;const h=a.offset(l);return u===h?[l,u]:[o-Math.min(u,h)*60*1e3,Math.max(u,h)]}function ih(o,i){o+=i*60*1e3;const a=new Date(o);return{year:a.getUTCFullYear(),month:a.getUTCMonth()+1,day:a.getUTCDate(),hour:a.getUTCHours(),minute:a.getUTCMinutes(),second:a.getUTCSeconds(),millisecond:a.getUTCMilliseconds()}}function _h(o,i,a){return fI(yf(o),i,a)}function f5(o,i){const a=o.o,l=o.c.year+Math.trunc(i.years),u=o.c.month+Math.trunc(i.months)+Math.trunc(i.quarters)*3,h={...o.c,year:l,month:u,day:Math.min(o.c.day,Qh(l,u))+Math.trunc(i.days)+Math.trunc(i.weeks)*7},g=Le.fromObject({years:i.years-Math.trunc(i.years),quarters:i.quarters-Math.trunc(i.quarters),months:i.months-Math.trunc(i.months),weeks:i.weeks-Math.trunc(i.weeks),days:i.days-Math.trunc(i.days),hours:i.hours,minutes:i.minutes,seconds:i.seconds,milliseconds:i.milliseconds}).as("milliseconds"),m=yf(h);let[k,b]=fI(m,a,o.zone);return g!==0&&(k+=g,b=o.zone.offset(k)),{ts:k,o:b}}function Yc(o,i,a,l,u,h){const{setZone:g,zone:m}=a;if(o&&Object.keys(o).length!==0||i){const k=i||m,b=Se.fromObject(o,{...a,zone:k,specificOffset:h});return g?b:b.setZone(m)}else return Se.invalid(new bi("unparsable",`the input "${u}" can't be parsed as ${l}`))}function rh(o,i,a=!0){return o.isValid?sn.create(ut.create("en-US"),{allowZ:a,forceSimple:!0}).formatDateTimeFromString(o,i):null}function C0(o,i){const a=o.c.year>9999||o.c.year<0;let l="";return a&&o.c.year>=0&&(l+="+"),l+=Ot(o.c.year,a?6:4),i?(l+="-",l+=Ot(o.c.month),l+="-",l+=Ot(o.c.day)):(l+=Ot(o.c.month),l+=Ot(o.c.day)),l}function g5(o,i,a,l,u,h){let g=Ot(o.c.hour);return i?(g+=":",g+=Ot(o.c.minute),(o.c.millisecond!==0||o.c.second!==0||!a)&&(g+=":")):g+=Ot(o.c.minute),(o.c.millisecond!==0||o.c.second!==0||!a)&&(g+=Ot(o.c.second),(o.c.millisecond!==0||!l)&&(g+=".",g+=Ot(o.c.millisecond,3))),u&&(o.isOffsetFixed&&o.offset===0&&!h?g+="Z":o.o<0?(g+="-",g+=Ot(Math.trunc(-o.o/60)),g+=":",g+=Ot(Math.trunc(-o.o%60))):(g+="+",g+=Ot(Math.trunc(o.o/60)),g+=":",g+=Ot(Math.trunc(o.o%60)))),h&&(g+="["+o.zone.ianaName+"]"),g}const gI={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},FY={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},VY={ordinal:1,hour:0,minute:0,second:0,millisecond:0},pI=["year","month","day","hour","minute","second","millisecond"],UY=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],HY=["year","ordinal","hour","minute","second","millisecond"];function p5(o){const i={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[o.toLowerCase()];if(!i)throw new kT(o);return i}function m5(o,i){const a=Qr(i.zone,Nt.defaultZone),l=ut.fromObject(i),u=Nt.now();let h,g;if(Oe(o.year))h=u;else{for(const b of pI)Oe(o[b])&&(o[b]=gI[b]);const m=uI(o)||hI(o);if(m)return Se.invalid(m);const k=a.offset(u);[h,g]=_h(o,k,a)}return new Se({ts:h,zone:a,loc:l,o:g})}function k5(o,i,a){const l=Oe(a.round)?!0:a.round,u=(g,m)=>(g=Ww(g,l||a.calendary?0:2,!0),i.loc.clone(a).relFormatter(a).format(g,m)),h=g=>a.calendary?i.hasSame(o,g)?0:i.startOf(g).diff(o.startOf(g),g).get(g):i.diff(o,g).get(g);if(a.unit)return u(h(a.unit),a.unit);for(const g of a.units){const m=h(g);if(Math.abs(m)>=1)return u(m,g)}return u(o>i?-0:0,a.units[a.units.length-1])}function b5(o){let i={},a;return o.length>0&&typeof o[o.length-1]=="object"?(i=o[o.length-1],a=Array.from(o).slice(0,o.length-1)):a=Array.from(o),[i,a]}class Se{constructor(i){const a=i.zone||Nt.defaultZone;let l=i.invalid||(Number.isNaN(i.ts)?new bi("invalid input"):null)||(a.isValid?null:nh(a));this.ts=Oe(i.ts)?Nt.now():i.ts;let u=null,h=null;if(!l)if(i.old&&i.old.ts===this.ts&&i.old.zone.equals(a))[u,h]=[i.old.c,i.old.o];else{const m=a.offset(this.ts);u=ih(this.ts,m),l=Number.isNaN(u.year)?new bi("invalid input"):null,u=l?null:u,h=l?null:m}this._zone=a,this.loc=i.loc||ut.create(),this.invalid=l,this.weekData=null,this.c=u,this.o=h,this.isLuxonDateTime=!0}static now(){return new Se({})}static local(){const[i,a]=b5(arguments),[l,u,h,g,m,k,b]=a;return m5({year:l,month:u,day:h,hour:g,minute:m,second:k,millisecond:b},i)}static utc(){const[i,a]=b5(arguments),[l,u,h,g,m,k,b]=a;return i.zone=dn.utcInstance,m5({year:l,month:u,day:h,hour:g,minute:m,second:k,millisecond:b},i)}static fromJSDate(i,a={}){const l=kG(i)?i.valueOf():NaN;if(Number.isNaN(l))return Se.invalid("invalid input");const u=Qr(a.zone,Nt.defaultZone);return u.isValid?new Se({ts:l,zone:u,loc:ut.fromObject(a)}):Se.invalid(nh(u))}static fromMillis(i,a={}){if(ss(i))return i<-h5||i>h5?Se.invalid("Timestamp out of range"):new Se({ts:i,zone:Qr(a.zone,Nt.defaultZone),loc:ut.fromObject(a)});throw new Jn(`fromMillis requires a numerical input, but received a ${typeof i} with value ${i}`)}static fromSeconds(i,a={}){if(ss(i))return new Se({ts:i*1e3,zone:Qr(a.zone,Nt.defaultZone),loc:ut.fromObject(a)});throw new Jn("fromSeconds requires a numerical input")}static fromObject(i,a={}){i=i||{};const l=Qr(a.zone,Nt.defaultZone);if(!l.isValid)return Se.invalid(nh(l));const u=Nt.now(),h=Oe(a.specificOffset)?l.offset(u):a.specificOffset,g=Xh(i,p5),m=!Oe(g.ordinal),k=!Oe(g.year),b=!Oe(g.month)||!Oe(g.day),y=k||b,v=g.weekYear||g.weekNumber,A=ut.fromObject(a);if((y||m)&&v)throw new tl("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(b&&m)throw new tl("Can't mix ordinal dates with month/day");const x=v||g.weekday&&!y;let E,T,P=ih(u,h);x?(E=UY,T=FY,P=jb(P)):m?(E=HY,T=VY,P=_0(P)):(E=pI,T=gI);let I=!1;for(const X of E){const re=g[X];Oe(re)?I?g[X]=T[X]:g[X]=P[X]:I=!0}const N=x?jY(g):m?RY(g):uI(g),B=N||hI(g);if(B)return Se.invalid(B);const j=x?d5(g):m?u5(g):g,[q,Z]=_h(j,h,l),K=new Se({ts:q,zone:l,o:Z,loc:A});return g.weekday&&y&&i.weekday!==K.weekday?Se.invalid("mismatched weekday",`you can't specify both a weekday of ${g.weekday} and a date of ${K.toISO()}`):K}static fromISO(i,a={}){const[l,u]=sY(i);return Yc(l,u,a,"ISO 8601",i)}static fromRFC2822(i,a={}){const[l,u]=aY(i);return Yc(l,u,a,"RFC 2822",i)}static fromHTTP(i,a={}){const[l,u]=cY(i);return Yc(l,u,a,"HTTP",a)}static fromFormat(i,a,l={}){if(Oe(i)||Oe(a))throw new Jn("fromFormat requires an input string and a format");const{locale:u=null,numberingSystem:h=null}=l,g=ut.fromOpts({locale:u,numberingSystem:h,defaultToEN:!0}),[m,k,b,y]=LY(g,i,a);return y?Se.invalid(y):Yc(m,k,l,`format ${a}`,i,b)}static fromString(i,a,l={}){return Se.fromFormat(i,a,l)}static fromSQL(i,a={}){const[l,u]=pY(i);return Yc(l,u,a,"SQL",i)}static invalid(i,a=null){if(!i)throw new Jn("need to specify a reason the DateTime is invalid");const l=i instanceof bi?i:new bi(i,a);if(Nt.throwOnInvalid)throw new Yq(l);return new Se({invalid:l})}static isDateTime(i){return i&&i.isLuxonDateTime||!1}static parseFormatForOpts(i,a={}){const l=oI(i,ut.fromObject(a));return l?l.map(u=>u?u.val:null).join(""):null}static expandFormat(i,a={}){return iI(sn.parseFormat(i),ut.fromObject(a)).map(u=>u.val).join("")}get(i){return this[i]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?A0(this).weekYear:NaN}get weekNumber(){return this.isValid?A0(this).weekNumber:NaN}get weekday(){return this.isValid?A0(this).weekday:NaN}get ordinal(){return this.isValid?_0(this.c).ordinal:NaN}get monthShort(){return this.isValid?eh.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?eh.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?eh.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?eh.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const i=864e5,a=6e4,l=yf(this.c),u=this.zone.offset(l-i),h=this.zone.offset(l+i),g=this.zone.offset(l-u*a),m=this.zone.offset(l-h*a);if(g===m)return[this];const k=l-g*a,b=l-m*a,y=ih(k,g),v=ih(b,m);return y.hour===v.hour&&y.minute===v.minute&&y.second===v.second&&y.millisecond===v.millisecond?[Wo(this,{ts:k}),Wo(this,{ts:b})]:[this]}get isInLeapYear(){return ql(this.year)}get daysInMonth(){return Qh(this.year,this.month)}get daysInYear(){return this.isValid?gl(this.year):NaN}get weeksInWeekYear(){return this.isValid?Jh(this.weekYear):NaN}resolvedLocaleOptions(i={}){const{locale:a,numberingSystem:l,calendar:u}=sn.create(this.loc.clone(i),i).resolvedOptions(this);return{locale:a,numberingSystem:l,outputCalendar:u}}toUTC(i=0,a={}){return this.setZone(dn.instance(i),a)}toLocal(){return this.setZone(Nt.defaultZone)}setZone(i,{keepLocalTime:a=!1,keepCalendarTime:l=!1}={}){if(i=Qr(i,Nt.defaultZone),i.equals(this.zone))return this;if(i.isValid){let u=this.ts;if(a||l){const h=i.offset(this.ts),g=this.toObject();[u]=_h(g,h,i)}return Wo(this,{ts:u,zone:i})}else return Se.invalid(nh(i))}reconfigure({locale:i,numberingSystem:a,outputCalendar:l}={}){const u=this.loc.clone({locale:i,numberingSystem:a,outputCalendar:l});return Wo(this,{loc:u})}setLocale(i){return this.reconfigure({locale:i})}set(i){if(!this.isValid)return this;const a=Xh(i,p5),l=!Oe(a.weekYear)||!Oe(a.weekNumber)||!Oe(a.weekday),u=!Oe(a.ordinal),h=!Oe(a.year),g=!Oe(a.month)||!Oe(a.day),m=h||g,k=a.weekYear||a.weekNumber;if((m||u)&&k)throw new tl("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(g&&u)throw new tl("Can't mix ordinal dates with month/day");let b;l?b=d5({...jb(this.c),...a}):Oe(a.ordinal)?(b={...this.toObject(),...a},Oe(a.day)&&(b.day=Math.min(Qh(b.year,b.month),b.day))):b=u5({..._0(this.c),...a});const[y,v]=_h(b,this.o,this.zone);return Wo(this,{ts:y,o:v})}plus(i){if(!this.isValid)return this;const a=Le.fromDurationLike(i);return Wo(this,f5(this,a))}minus(i){if(!this.isValid)return this;const a=Le.fromDurationLike(i).negate();return Wo(this,f5(this,a))}startOf(i){if(!this.isValid)return this;const a={},l=Le.normalizeUnit(i);switch(l){case"years":a.month=1;case"quarters":case"months":a.day=1;case"weeks":case"days":a.hour=0;case"hours":a.minute=0;case"minutes":a.second=0;case"seconds":a.millisecond=0;break}if(l==="weeks"&&(a.weekday=1),l==="quarters"){const u=Math.ceil(this.month/3);a.month=(u-1)*3+1}return this.set(a)}endOf(i){return this.isValid?this.plus({[i]:1}).startOf(i).minus(1):this}toFormat(i,a={}){return this.isValid?sn.create(this.loc.redefaultToEN(a)).formatDateTimeFromString(this,i):y0}toLocaleString(i=Kh,a={}){return this.isValid?sn.create(this.loc.clone(a),i).formatDateTime(this):y0}toLocaleParts(i={}){return this.isValid?sn.create(this.loc.clone(i),i).formatDateTimeParts(this):[]}toISO({format:i="extended",suppressSeconds:a=!1,suppressMilliseconds:l=!1,includeOffset:u=!0,extendedZone:h=!1}={}){if(!this.isValid)return null;const g=i==="extended";let m=C0(this,g);return m+="T",m+=g5(this,g,a,l,u,h),m}toISODate({format:i="extended"}={}){return this.isValid?C0(this,i==="extended"):null}toISOWeekDate(){return rh(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:i=!1,suppressSeconds:a=!1,includeOffset:l=!0,includePrefix:u=!1,extendedZone:h=!1,format:g="extended"}={}){return this.isValid?(u?"T":"")+g5(this,g==="extended",a,i,l,h):null}toRFC2822(){return rh(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return rh(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?C0(this,!0):null}toSQLTime({includeOffset:i=!0,includeZone:a=!1,includeOffsetSpace:l=!0}={}){let u="HH:mm:ss.SSS";return(a||i)&&(l&&(u+=" "),a?u+="z":i&&(u+="ZZ")),rh(this,u,!0)}toSQL(i={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(i)}`:null}toString(){return this.isValid?this.toISO():y0}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(i={}){if(!this.isValid)return{};const a={...this.c};return i.includeConfig&&(a.outputCalendar=this.outputCalendar,a.numberingSystem=this.loc.numberingSystem,a.locale=this.loc.locale),a}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(i,a="milliseconds",l={}){if(!this.isValid||!i.isValid)return Le.invalid("created by diffing an invalid DateTime");const u={locale:this.locale,numberingSystem:this.numberingSystem,...l},h=bG(a).map(Le.normalizeUnit),g=i.valueOf()>this.valueOf(),m=g?this:i,k=g?i:this,b=yY(m,k,h,u);return g?b.negate():b}diffNow(i="milliseconds",a={}){return this.diff(Se.now(),i,a)}until(i){return this.isValid?At.fromDateTimes(this,i):this}hasSame(i,a){if(!this.isValid)return!1;const l=i.valueOf(),u=this.setZone(i.zone,{keepLocalTime:!0});return u.startOf(a)<=l&&l<=u.endOf(a)}equals(i){return this.isValid&&i.isValid&&this.valueOf()===i.valueOf()&&this.zone.equals(i.zone)&&this.loc.equals(i.loc)}toRelative(i={}){if(!this.isValid)return null;const a=i.base||Se.fromObject({},{zone:this.zone}),l=i.padding?this<a?-i.padding:i.padding:0;let u=["years","months","days","hours","minutes","seconds"],h=i.unit;return Array.isArray(i.unit)&&(u=i.unit,h=void 0),k5(a,this.plus(l),{...i,numeric:"always",units:u,unit:h})}toRelativeCalendar(i={}){return this.isValid?k5(i.base||Se.fromObject({},{zone:this.zone}),this,{...i,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...i){if(!i.every(Se.isDateTime))throw new Jn("min requires all arguments be DateTimes");return t5(i,a=>a.valueOf(),Math.min)}static max(...i){if(!i.every(Se.isDateTime))throw new Jn("max requires all arguments be DateTimes");return t5(i,a=>a.valueOf(),Math.max)}static fromFormatExplain(i,a,l={}){const{locale:u=null,numberingSystem:h=null}=l,g=ut.fromOpts({locale:u,numberingSystem:h,defaultToEN:!0});return rI(g,i,a)}static fromStringExplain(i,a,l={}){return Se.fromFormatExplain(i,a,l)}static get DATE_SHORT(){return Kh}static get DATE_MED(){return bT}static get DATE_MED_WITH_WEEKDAY(){return Qq}static get DATE_FULL(){return wT}static get DATE_HUGE(){return vT}static get TIME_SIMPLE(){return _T}static get TIME_WITH_SECONDS(){return yT}static get TIME_WITH_SHORT_OFFSET(){return AT}static get TIME_WITH_LONG_OFFSET(){return CT}static get TIME_24_SIMPLE(){return xT}static get TIME_24_WITH_SECONDS(){return ET}static get TIME_24_WITH_SHORT_OFFSET(){return DT}static get TIME_24_WITH_LONG_OFFSET(){return ST}static get DATETIME_SHORT(){return TT}static get DATETIME_SHORT_WITH_SECONDS(){return IT}static get DATETIME_MED(){return MT}static get DATETIME_MED_WITH_SECONDS(){return NT}static get DATETIME_MED_WITH_WEEKDAY(){return Jq}static get DATETIME_FULL(){return OT}static get DATETIME_FULL_WITH_SECONDS(){return BT}static get DATETIME_HUGE(){return PT}static get DATETIME_HUGE_WITH_SECONDS(){return zT}}function Zc(o){if(Se.isDateTime(o))return o;if(o&&o.valueOf&&ss(o.valueOf()))return Se.fromJSDate(o);if(o&&typeof o=="object")return Se.fromObject(o);throw new Jn(`Unknown datetime argument: ${o}, of type ${typeof o}`)}const w5=["year","month","week","day","hour","minute","second"],ef=o=>{const a=Se.fromISO(o).diffNow().shiftTo(...w5),l=w5.find(h=>a.get(h)!==0)||"second";return new Intl.RelativeTimeFormat("en",{numeric:"auto"}).format(Math.trunc(a.as(l)),l)},mI="/Book-Chronicles/assets/like-21544d1e.png",$Y=o=>{const i=/<oembed[^>]*>/g,a=o.match(i);if(a){const u=`<iframe src="${a[0].match(/url="([^"]*)"/)[1]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;o=o.replace(i,u)}return o};function WY(o){return{__html:$Y(o||"")}}function kI(o){return F.jsx("div",{dangerouslySetInnerHTML:WY(o)})}function qY({id:o,title:i,created_at:a,vote:l,category:u,username:h,img_url:g,content:m,currentUserLiked:k}){let b="back-pastel-green pastel-green";u=="review"?b="back-pastel-purple pastel-purple":u=="recommend"&&(b="back-pastel-red pastel-red");const y=m.length>=300?m.substring(0,300)+"...":m,v=kI(y);return F.jsxs(Vi,{className:"post-preview",to:`/Book-Chronicles/post/${o}`,children:[F.jsxs("div",{className:"post-preview-top",children:[F.jsxs("p",{className:"time-ago",children:["Posted ",a?ef(a):" "]}),F.jsxs("p",{className:`post-category ${b}`,children:["#",u]})]}),F.jsxs("div",{className:"post-preview-middle",children:[F.jsx("h2",{className:"pastel-black",children:i}),g?F.jsx("img",{className:"post-preview-image",src:g}):"",F.jsxs("div",{className:"post-preview-content",children:[v," "]})]}),F.jsxs("div",{className:"post-preview-bot",children:[F.jsxs("div",{className:"vote-image",children:[F.jsx("img",{src:mI,className:"upvotes pastel-red"}),F.jsx("span",{className:"",children:F.jsxs("b",{className:k?"pastel-orange":"",children:[l," "]})})]}),F.jsx("p",{children:h?"~ "+h:""})]})]})}const GY="/Book-Chronicles/assets/gear-04e46c33.gif";function bI(){return F.jsx("img",{className:"loading-animation",src:GY})}function YY({supabase:o,session:i}){const[a,l]=se.useState([]),[u,h]=se.useState({created_at:!1,vote:!0}),[g,m]=se.useState(""),b=(i?i.user:{user_metadata:{}}).id,y=async()=>{const{data:E,error:T}=await o.from("posts").select().order("created_at",{ascending:!1});l(E)};se.useEffect(()=>{y()},[]);const v=E=>{m(E.target.value)},A=()=>Gq(g,a,["title","category","username"]).map(T=>{const P=T.user_likes[b];return F.jsx(qY,{id:T.id,title:T.title,created_at:T.created_at,vote:T.vote,category:T.category,username:T.username,img_url:T.img,content:T.content,currentUserLiked:P},T.id)}),x=E=>{const T=JSON.parse(JSON.stringify(a));E==="vote"?(u.vote?T.sort((P,I)=>I.vote-P.vote):T.sort((P,I)=>P.vote-I.vote),h(P=>({...P,vote:!u.vote}))):(u.created_at?T.sort((P,I)=>new Date(I.created_at)-new Date(P.created_at)):T.sort((P,I)=>new Date(P.created_at)-new Date(I.created_at)),h(P=>({...P,created_at:!u.created_at}))),l(T)};return F.jsxs(F.Fragment,{children:[F.jsx("div",{className:"home-title-outside-container",children:F.jsxs("div",{className:"home-title-container",children:[F.jsxs("h1",{className:"home-title",children:[F.jsx("span",{className:"pastel-black",children:"Home"})," ",F.jsx("span",{className:"accent",children:"Feed"})]}),F.jsx("h2",{className:"home-subtitle",children:"Reviews and Recommendations"})]})}),F.jsx("div",{className:"input-outside-container",children:F.jsxs("div",{className:"input-container",children:[F.jsx("input",{className:"search-input",onChange:v,placeholder:"Search",type:"text"}),F.jsxs("div",{className:"sort-posts-container",children:[F.jsx("span",{children:"Order by: "}),F.jsx("button",{className:"darkAccent btn sort-button",onClick:()=>{x("created_at")},children:"Newest"}),F.jsx("button",{className:"btn sort-button",onClick:()=>{x("vote")},children:"Most Popular"})]})]})}),F.jsx("div",{className:"post-preview-container",children:A().length!==0?A():F.jsx(bI,{})})]})}function ZY(){const o=Ar();return se.useEffect(()=>{o("/")},[]),F.jsx("div",{children:"NotFound"})}var tf={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */tf.exports;(function(o,i){(function(a,l){o.exports=l(se)})(self,a=>(()=>{var l={703:(m,k,b)=>{var y=b(414);function v(){}function A(){}A.resetWarningCache=v,m.exports=function(){function x(P,I,N,B,j,q){if(q!==y){var Z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Z.name="Invariant Violation",Z}}function E(){return x}x.isRequired=x;var T={array:x,bigint:x,bool:x,func:x,number:x,object:x,string:x,symbol:x,any:x,arrayOf:E,element:x,elementType:x,instanceOf:E,node:x,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:A,resetWarningCache:v};return T.PropTypes=T,T}},697:(m,k,b)=>{m.exports=b(703)()},414:m=>{m.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:m=>{m.exports=a}},u={};function h(m){var k=u[m];if(k!==void 0)return k.exports;var b=u[m]={exports:{}};return l[m](b,b.exports,h),b.exports}h.n=m=>{var k=m&&m.__esModule?()=>m.default:()=>m;return h.d(k,{a:k}),k},h.d=(m,k)=>{for(var b in k)h.o(k,b)&&!h.o(m,b)&&Object.defineProperty(m,b,{enumerable:!0,get:k[b]})},h.o=(m,k)=>Object.prototype.hasOwnProperty.call(m,k),h.r=m=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})};var g={};return(()=>{h.r(g),h.d(g,{CKEditor:()=>xi,CKEditorContext:()=>Nr});var m=h(787),k=h.n(m),b=h(697),y=h.n(b);const v=new Array(256).fill("").map((D,S)=>("0"+S.toString(16)).slice(-2));class A{constructor(S){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof S.crashNumberLimit=="number"?S.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof S.minimumNonErrorTimePeriod=="number"?S.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=L=>{const W="error"in L?L.error:L.reason;W instanceof Error&&this._handleError(W,L)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(S,L){this._listeners[S]||(this._listeners[S]=[]),this._listeners[S].push(L)}off(S,L){this._listeners[S]=this._listeners[S].filter(W=>W!==L)}_fire(S,...L){const W=this._listeners[S]||[];for(const ue of W)ue.apply(this,[null,...L])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(S,L){if(this._shouldReactToError(S)){this.crashes.push({message:S.message,stack:S.stack,filename:L instanceof ErrorEvent?L.filename:void 0,lineno:L instanceof ErrorEvent?L.lineno:void 0,colno:L instanceof ErrorEvent?L.colno:void 0,date:this._now()});const W=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:S,causesRestart:W}),W?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(S){return S.is&&S.is("CKEditorError")&&S.context!==void 0&&S.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(S)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function x(D,S=new Set){const L=[D],W=new Set;let ue=0;for(;L.length>ue;){const _e=L[ue++];if(!W.has(_e)&&E(_e)&&!S.has(_e))if(W.add(_e),Symbol.iterator in _e)try{for(const xe of _e)L.push(xe)}catch{}else for(const xe in _e)xe!=="defaultValue"&&L.push(_e[xe])}return W}function E(D){const S=Object.prototype.toString.call(D),L=typeof D;return!(L==="number"||L==="boolean"||L==="string"||L==="symbol"||L==="function"||S==="[object Date]"||S==="[object RegExp]"||S==="[object Module]"||D==null||D._watchdogExcluded||D instanceof EventTarget||D instanceof Event)}function T(D,S,L=new Set){if(D===S&&typeof(W=D)=="object"&&W!==null)return!0;var W;const ue=x(D,L),_e=x(S,L);for(const xe of ue)if(_e.has(xe))return!0;return!1}const P=function(D){var S=typeof D;return D!=null&&(S=="object"||S=="function")},I=typeof Xo=="object"&&Xo&&Xo.Object===Object&&Xo;var N=typeof self=="object"&&self&&self.Object===Object&&self;const B=I||N||Function("return this")(),j=function(){return B.Date.now()};var q=/\s/;const Z=function(D){for(var S=D.length;S--&&q.test(D.charAt(S)););return S};var K=/^\s+/;const X=function(D){return D&&D.slice(0,Z(D)+1).replace(K,"")},re=B.Symbol;var ce=Object.prototype,$=ce.hasOwnProperty,G=ce.toString,U=re?re.toStringTag:void 0;const R=function(D){var S=$.call(D,U),L=D[U];try{D[U]=void 0;var W=!0}catch{}var ue=G.call(D);return W&&(S?D[U]=L:delete D[U]),ue};var V=Object.prototype.toString;const M=function(D){return V.call(D)};var Q=re?re.toStringTag:void 0;const J=function(D){return D==null?D===void 0?"[object Undefined]":"[object Null]":Q&&Q in Object(D)?R(D):M(D)},ee=function(D){return D!=null&&typeof D=="object"},le=function(D){return typeof D=="symbol"||ee(D)&&J(D)=="[object Symbol]"};var ke=/^[-+]0x[0-9a-f]+$/i,Ce=/^0b[01]+$/i,at=/^0o[0-7]+$/i,Pt=parseInt;const gt=function(D){if(typeof D=="number")return D;if(le(D))return NaN;if(P(D)){var S=typeof D.valueOf=="function"?D.valueOf():D;D=P(S)?S+"":S}if(typeof D!="string")return D===0?D:+D;D=X(D);var L=Ce.test(D);return L||at.test(D)?Pt(D.slice(2),L?2:8):ke.test(D)?NaN:+D};var Ve=Math.max,Me=Math.min;const Df=function(D,S,L){var W,ue,_e,xe,Ee,pt,nt=0,xo=!1,er=!1,Hn=!0;if(typeof D!="function")throw new TypeError("Expected a function");function Or(en){var oi=W,Ei=ue;return W=ue=void 0,nt=en,xe=D.apply(Ei,oi)}function tr(en){var oi=en-pt;return pt===void 0||oi>=S||oi<0||er&&en-nt>=_e}function nr(){var en=j();if(tr(en))return xn(en);Ee=setTimeout(nr,function(oi){var Ei=S-(oi-pt);return er?Me(Ei,_e-(oi-nt)):Ei}(en))}function xn(en){return Ee=void 0,Hn&&W?Or(en):(W=ue=void 0,xe)}function En(){var en=j(),oi=tr(en);if(W=arguments,ue=this,pt=en,oi){if(Ee===void 0)return function(Ei){return nt=Ei,Ee=setTimeout(nr,S),xo?Or(Ei):xe}(pt);if(er)return clearTimeout(Ee),Ee=setTimeout(nr,S),Or(pt)}return Ee===void 0&&(Ee=setTimeout(nr,S)),xe}return S=gt(S)||0,P(L)&&(xo=!!L.leading,_e=(er="maxWait"in L)?Ve(gt(L.maxWait)||0,S):_e,Hn="trailing"in L?!!L.trailing:Hn),En.cancel=function(){Ee!==void 0&&clearTimeout(Ee),nt=0,W=pt=ue=Ee=void 0},En.flush=function(){return Ee===void 0?xe:xn(j())},En},Ql=function(D,S,L){var W=!0,ue=!0;if(typeof D!="function")throw new TypeError("Expected a function");return P(L)&&(W="leading"in L?!!L.leading:W,ue="trailing"in L?!!L.trailing:ue),Df(D,S,{leading:W,maxWait:S,trailing:ue})},Ra=function(){this.__data__=[],this.size=0},Fa=function(D,S){return D===S||D!=D&&S!=S},ps=function(D,S){for(var L=D.length;L--;)if(Fa(D[L][0],S))return L;return-1};var Sf=Array.prototype.splice;const Va=function(D){var S=this.__data__,L=ps(S,D);return!(L<0)&&(L==S.length-1?S.pop():Sf.call(S,L,1),--this.size,!0)},Jl=function(D){var S=this.__data__,L=ps(S,D);return L<0?void 0:S[L][1]},Xl=function(D){return ps(this.__data__,D)>-1},Tf=function(D,S){var L=this.__data__,W=ps(L,D);return W<0?(++this.size,L.push([D,S])):L[W][1]=S,this};function Ai(D){var S=-1,L=D==null?0:D.length;for(this.clear();++S<L;){var W=D[S];this.set(W[0],W[1])}}Ai.prototype.clear=Ra,Ai.prototype.delete=Va,Ai.prototype.get=Jl,Ai.prototype.has=Xl,Ai.prototype.set=Tf;const ms=Ai,tt=function(){this.__data__=new ms,this.size=0},ks=function(D){var S=this.__data__,L=S.delete(D);return this.size=S.size,L},bs=function(D){return this.__data__.get(D)},ws=function(D){return this.__data__.has(D)},qi=function(D){if(!P(D))return!1;var S=J(D);return S=="[object Function]"||S=="[object GeneratorFunction]"||S=="[object AsyncFunction]"||S=="[object Proxy]"},vs=B["__core-js_shared__"];var Ua=function(){var D=/[^.]+$/.exec(vs&&vs.keys&&vs.keys.IE_PROTO||"");return D?"Symbol(src)_1."+D:""}();const Ue=function(D){return!!Ua&&Ua in D};var Ha=Function.prototype.toString;const Gi=function(D){if(D!=null){try{return Ha.call(D)}catch{}try{return D+""}catch{}}return""};var If=/^\[object .+?Constructor\]$/,Mf=Function.prototype,ed=Object.prototype,Nf=Mf.toString,Of=ed.hasOwnProperty,Bf=RegExp("^"+Nf.call(Of).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const td=function(D){return!(!P(D)||Ue(D))&&(qi(D)?Bf:If).test(Gi(D))},Pf=function(D,S){return D==null?void 0:D[S]},ri=function(D,S){var L=Pf(D,S);return td(L)?L:void 0},vt=ri(B,"Map"),zt=ri(Object,"create"),zf=function(){this.__data__=zt?zt(null):{},this.size=0},nd=function(D){var S=this.has(D)&&delete this.__data__[D];return this.size-=S?1:0,S};var Lf=Object.prototype.hasOwnProperty;const jf=function(D){var S=this.__data__;if(zt){var L=S[D];return L==="__lodash_hash_undefined__"?void 0:L}return Lf.call(S,D)?S[D]:void 0};var Cn=Object.prototype.hasOwnProperty;const Rf=function(D){var S=this.__data__;return zt?S[D]!==void 0:Cn.call(S,D)},Vn=function(D,S){var L=this.__data__;return this.size+=this.has(D)?0:1,L[D]=zt&&S===void 0?"__lodash_hash_undefined__":S,this};function Yi(D){var S=-1,L=D==null?0:D.length;for(this.clear();++S<L;){var W=D[S];this.set(W[0],W[1])}}Yi.prototype.clear=zf,Yi.prototype.delete=nd,Yi.prototype.get=jf,Yi.prototype.has=Rf,Yi.prototype.set=Vn;const id=Yi,Ff=function(){this.size=0,this.__data__={hash:new id,map:new(vt||ms),string:new id}},bo=function(D){var S=typeof D;return S=="string"||S=="number"||S=="symbol"||S=="boolean"?D!=="__proto__":D===null},_s=function(D,S){var L=D.__data__;return bo(S)?L[typeof S=="string"?"string":"hash"]:L.map},Vf=function(D){var S=_s(this,D).delete(D);return this.size-=S?1:0,S},Uf=function(D){return _s(this,D).get(D)},Hf=function(D){return _s(this,D).has(D)},$f=function(D,S){var L=_s(this,D),W=L.size;return L.set(D,S),this.size+=L.size==W?0:1,this};function Cr(D){var S=-1,L=D==null?0:D.length;for(this.clear();++S<L;){var W=D[S];this.set(W[0],W[1])}}Cr.prototype.clear=Ff,Cr.prototype.delete=Vf,Cr.prototype.get=Uf,Cr.prototype.has=Hf,Cr.prototype.set=$f;const Wf=Cr,qf=function(D,S){var L=this.__data__;if(L instanceof ms){var W=L.__data__;if(!vt||W.length<199)return W.push([D,S]),this.size=++L.size,this;L=this.__data__=new Wf(W)}return L.set(D,S),this.size=L.size,this};function Zi(D){var S=this.__data__=new ms(D);this.size=S.size}Zi.prototype.clear=tt,Zi.prototype.delete=ks,Zi.prototype.get=bs,Zi.prototype.has=ws,Zi.prototype.set=qf;const Gf=Zi,Ci=function(D,S){for(var L=-1,W=D==null?0:D.length;++L<W&&S(D[L],L,D)!==!1;);return D},rd=function(){try{var D=ri(Object,"defineProperty");return D({},"",{}),D}catch{}}(),Rt=function(D,S,L){S=="__proto__"&&rd?rd(D,S,{configurable:!0,enumerable:!0,value:L,writable:!0}):D[S]=L};var Yf=Object.prototype.hasOwnProperty;const cn=function(D,S,L){var W=D[S];Yf.call(D,S)&&Fa(W,L)&&(L!==void 0||S in D)||Rt(D,S,L)},ys=function(D,S,L,W){var ue=!L;L||(L={});for(var _e=-1,xe=S.length;++_e<xe;){var Ee=S[_e],pt=W?W(L[Ee],D[Ee],Ee,L,D):void 0;pt===void 0&&(pt=D[Ee]),ue?Rt(L,Ee,pt):cn(L,Ee,pt)}return L},Zf=function(D,S){for(var L=-1,W=Array(D);++L<D;)W[L]=S(L);return W},$a=function(D){return ee(D)&&J(D)=="[object Arguments]"};var As=Object.prototype,Kf=As.hasOwnProperty,od=As.propertyIsEnumerable;const Qf=$a(function(){return arguments}())?$a:function(D){return ee(D)&&Kf.call(D,"callee")&&!od.call(D,"callee")},wo=Array.isArray,Jf=function(){return!1};var sd=i&&!i.nodeType&&i,ad=sd&&!0&&o&&!o.nodeType&&o,Wa=ad&&ad.exports===sd?B.Buffer:void 0;const cd=(Wa?Wa.isBuffer:void 0)||Jf;var Xf=/^(?:0|[1-9]\d*)$/;const eg=function(D,S){var L=typeof D;return!!(S=S??9007199254740991)&&(L=="number"||L!="symbol"&&Xf.test(D))&&D>-1&&D%1==0&&D<S},Xt=function(D){return typeof D=="number"&&D>-1&&D%1==0&&D<=9007199254740991};var Je={};Je["[object Float32Array]"]=Je["[object Float64Array]"]=Je["[object Int8Array]"]=Je["[object Int16Array]"]=Je["[object Int32Array]"]=Je["[object Uint8Array]"]=Je["[object Uint8ClampedArray]"]=Je["[object Uint16Array]"]=Je["[object Uint32Array]"]=!0,Je["[object Arguments]"]=Je["[object Array]"]=Je["[object ArrayBuffer]"]=Je["[object Boolean]"]=Je["[object DataView]"]=Je["[object Date]"]=Je["[object Error]"]=Je["[object Function]"]=Je["[object Map]"]=Je["[object Number]"]=Je["[object Object]"]=Je["[object RegExp]"]=Je["[object Set]"]=Je["[object String]"]=Je["[object WeakMap]"]=!1;const tg=function(D){return ee(D)&&Xt(D.length)&&!!Je[J(D)]},qa=function(D){return function(S){return D(S)}};var xr=i&&!i.nodeType&&i,vo=xr&&!0&&o&&!o.nodeType&&o,Er=vo&&vo.exports===xr&&I.process;const Dr=function(){try{var D=vo&&vo.require&&vo.require("util").types;return D||Er&&Er.binding&&Er.binding("util")}catch{}}();var ld=Dr&&Dr.isTypedArray;const ng=ld?qa(ld):tg;var ig=Object.prototype.hasOwnProperty;const dd=function(D,S){var L=wo(D),W=!L&&Qf(D),ue=!L&&!W&&cd(D),_e=!L&&!W&&!ue&&ng(D),xe=L||W||ue||_e,Ee=xe?Zf(D.length,String):[],pt=Ee.length;for(var nt in D)!S&&!ig.call(D,nt)||xe&&(nt=="length"||ue&&(nt=="offset"||nt=="parent")||_e&&(nt=="buffer"||nt=="byteLength"||nt=="byteOffset")||eg(nt,pt))||Ee.push(nt);return Ee};var rg=Object.prototype;const Ga=function(D){var S=D&&D.constructor;return D===(typeof S=="function"&&S.prototype||rg)},ud=function(D,S){return function(L){return D(S(L))}},og=ud(Object.keys,Object);var sg=Object.prototype.hasOwnProperty;const Sr=function(D){if(!Ga(D))return og(D);var S=[];for(var L in Object(D))sg.call(D,L)&&L!="constructor"&&S.push(L);return S},_o=function(D){return D!=null&&Xt(D.length)&&!qi(D)},Ya=function(D){return _o(D)?dd(D):Sr(D)},ag=function(D,S){return D&&ys(S,Ya(S),D)},cg=function(D){var S=[];if(D!=null)for(var L in Object(D))S.push(L);return S};var lg=Object.prototype.hasOwnProperty;const dg=function(D){if(!P(D))return cg(D);var S=Ga(D),L=[];for(var W in D)(W!="constructor"||!S&&lg.call(D,W))&&L.push(W);return L},Za=function(D){return _o(D)?dd(D,!0):dg(D)},ug=function(D,S){return D&&ys(S,Za(S),D)};var hd=i&&!i.nodeType&&i,fd=hd&&!0&&o&&!o.nodeType&&o,gd=fd&&fd.exports===hd?B.Buffer:void 0,pd=gd?gd.allocUnsafe:void 0;const hg=function(D,S){if(S)return D.slice();var L=D.length,W=pd?pd(L):new D.constructor(L);return D.copy(W),W},fg=function(D,S){var L=-1,W=D.length;for(S||(S=Array(W));++L<W;)S[L]=D[L];return S},Ki=function(D,S){for(var L=-1,W=D==null?0:D.length,ue=0,_e=[];++L<W;){var xe=D[L];S(xe,L,D)&&(_e[ue++]=xe)}return _e},md=function(){return[]};var Ka=Object.prototype.propertyIsEnumerable,Qa=Object.getOwnPropertySymbols;const Ja=Qa?function(D){return D==null?[]:(D=Object(D),Ki(Qa(D),function(S){return Ka.call(D,S)}))}:md,gg=function(D,S){return ys(D,Ja(D),S)},kd=function(D,S){for(var L=-1,W=S.length,ue=D.length;++L<W;)D[ue+L]=S[L];return D},Xa=ud(Object.getPrototypeOf,Object),bd=Object.getOwnPropertySymbols?function(D){for(var S=[];D;)kd(S,Ja(D)),D=Xa(D);return S}:md,Qi=function(D,S){return ys(D,bd(D),S)},wd=function(D,S,L){var W=S(D);return wo(D)?W:kd(W,L(D))},pg=function(D){return wd(D,Ya,Ja)},mg=function(D){return wd(D,Za,bd)},ec=ri(B,"DataView"),tc=ri(B,"Promise"),nc=ri(B,"Set"),ic=ri(B,"WeakMap");var vd="[object Map]",_d="[object Promise]",yd="[object Set]",Ad="[object WeakMap]",Cd="[object DataView]",Ji=Gi(ec),kg=Gi(vt),yo=Gi(tc),bg=Gi(nc),Ao=Gi(ic),Xi=J;(ec&&Xi(new ec(new ArrayBuffer(1)))!=Cd||vt&&Xi(new vt)!=vd||tc&&Xi(tc.resolve())!=_d||nc&&Xi(new nc)!=yd||ic&&Xi(new ic)!=Ad)&&(Xi=function(D){var S=J(D),L=S=="[object Object]"?D.constructor:void 0,W=L?Gi(L):"";if(W)switch(W){case Ji:return Cd;case kg:return vd;case yo:return _d;case bg:return yd;case Ao:return Ad}return S});const rc=Xi;var wg=Object.prototype.hasOwnProperty;const vg=function(D){var S=D.length,L=new D.constructor(S);return S&&typeof D[0]=="string"&&wg.call(D,"index")&&(L.index=D.index,L.input=D.input),L},xd=B.Uint8Array,oc=function(D){var S=new D.constructor(D.byteLength);return new xd(S).set(new xd(D)),S},_g=function(D,S){var L=S?oc(D.buffer):D.buffer;return new D.constructor(L,D.byteOffset,D.byteLength)};var yg=/\w*$/;const Ag=function(D){var S=new D.constructor(D.source,yg.exec(D));return S.lastIndex=D.lastIndex,S};var Ed=re?re.prototype:void 0,Dd=Ed?Ed.valueOf:void 0;const Cg=function(D){return Dd?Object(Dd.call(D)):{}},xg=function(D,S){var L=S?oc(D.buffer):D.buffer;return new D.constructor(L,D.byteOffset,D.length)},Eg=function(D,S,L){var W=D.constructor;switch(S){case"[object ArrayBuffer]":return oc(D);case"[object Boolean]":case"[object Date]":return new W(+D);case"[object DataView]":return _g(D,L);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return xg(D,L);case"[object Map]":case"[object Set]":return new W;case"[object Number]":case"[object String]":return new W(D);case"[object RegExp]":return Ag(D);case"[object Symbol]":return Cg(D)}};var Sd=Object.create;const Dg=function(){function D(){}return function(S){if(!P(S))return{};if(Sd)return Sd(S);D.prototype=S;var L=new D;return D.prototype=void 0,L}}(),Tr=function(D){return typeof D.constructor!="function"||Ga(D)?{}:Dg(Xa(D))},Td=function(D){return ee(D)&&rc(D)=="[object Map]"};var Id=Dr&&Dr.isMap;const Sg=Id?qa(Id):Td,Tg=function(D){return ee(D)&&rc(D)=="[object Set]"};var Md=Dr&&Dr.isSet;const Ig=Md?qa(Md):Tg;var Co="[object Arguments]",Nd="[object Function]",Od="[object Object]",Ye={};Ye[Co]=Ye["[object Array]"]=Ye["[object ArrayBuffer]"]=Ye["[object DataView]"]=Ye["[object Boolean]"]=Ye["[object Date]"]=Ye["[object Float32Array]"]=Ye["[object Float64Array]"]=Ye["[object Int8Array]"]=Ye["[object Int16Array]"]=Ye["[object Int32Array]"]=Ye["[object Map]"]=Ye["[object Number]"]=Ye[Od]=Ye["[object RegExp]"]=Ye["[object Set]"]=Ye["[object String]"]=Ye["[object Symbol]"]=Ye["[object Uint8Array]"]=Ye["[object Uint8ClampedArray]"]=Ye["[object Uint16Array]"]=Ye["[object Uint32Array]"]=!0,Ye["[object Error]"]=Ye[Nd]=Ye["[object WeakMap]"]=!1;const Mg=function D(S,L,W,ue,_e,xe){var Ee,pt=1&L,nt=2&L,xo=4&L;if(W&&(Ee=_e?W(S,ue,_e,xe):W(S)),Ee!==void 0)return Ee;if(!P(S))return S;var er=wo(S);if(er){if(Ee=vg(S),!pt)return fg(S,Ee)}else{var Hn=rc(S),Or=Hn==Nd||Hn=="[object GeneratorFunction]";if(cd(S))return hg(S,pt);if(Hn==Od||Hn==Co||Or&&!_e){if(Ee=nt||Or?{}:Tr(S),!pt)return nt?Qi(S,ug(Ee,S)):gg(S,ag(Ee,S))}else{if(!Ye[Hn])return _e?S:{};Ee=Eg(S,Hn,pt)}}xe||(xe=new Gf);var tr=xe.get(S);if(tr)return tr;xe.set(S,Ee),Ig(S)?S.forEach(function(xn){Ee.add(D(xn,L,W,xn,S,xe))}):Sg(S)&&S.forEach(function(xn,En){Ee.set(En,D(xn,L,W,En,S,xe))});var nr=er?void 0:(xo?nt?mg:pg:nt?Za:Ya)(S);return Ci(nr||S,function(xn,En){nr&&(xn=S[En=xn]),cn(Ee,En,D(xn,L,W,En,S,xe))}),Ee},Ng=function(D,S){return Mg(D,5,S=typeof S=="function"?S:void 0)};var Og=Function.prototype,Bg=Object.prototype,Bd=Og.toString,Ir=Bg.hasOwnProperty,Cs=Bd.call(Object);const Pg=function(D){if(!ee(D)||J(D)!="[object Object]")return!1;var S=Xa(D);if(S===null)return!0;var L=Ir.call(S,"constructor")&&S.constructor;return typeof L=="function"&&L instanceof L&&Bd.call(L)==Cs},zg=function(D){return ee(D)&&D.nodeType===1&&!Pg(D)};class Pd extends A{constructor(S,L={}){super(L),this._editor=null,this._throttledSave=Ql(this._save.bind(this),typeof L.saveInterval=="number"?L.saveInterval:5e3),S&&(this._creator=(W,ue)=>S.create(W,ue)),this._destructor=W=>W.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(S){this._creator=S}setDestructor(S){this._destructor=S}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(S=>{console.error("An error happened during the editor destroying.",S)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const S=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,S,S.context)}}).then(()=>{this._fire("restart")})}create(S=this._elementOrData,L=this._config,W){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=S,this._config=this._cloneEditorConfiguration(L)||{},this._config.context=W,this._creator(S,this._config))).then(ue=>{this._editor=ue,ue.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=ue.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const S=this._editor;return this._editor=null,S.model.document.off("change:data",this._throttledSave),this._destructor(S)})}_save(){const S=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=S}catch(L){console.error(L,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(S){this._excludedProps=S}_getData(){const S={};for(const L of this._editor.model.document.getRootNames())S[L]=this._editor.data.get({rootName:L});return S}_isErrorComingFromThisItem(S){return T(this._editor,S.context,this._excludedProps)}_cloneEditorConfiguration(S){return Ng(S,(L,W)=>zg(L)||W==="context"?L:void 0)}}const Un=Symbol("MainQueueId");class Mr extends A{constructor(S,L={}){super(L),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Lg,this._watchdogConfig=L,this._creator=W=>S.create(W),this._destructor=W=>W.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(S){this._creator=S}setDestructor(S){this._destructor=S}get context(){return this._context}create(S={}){return this._actionQueues.enqueue(Un,()=>(this._contextConfig=S,this._create()))}getItem(S){return this._getWatchdog(S)._item}getItemState(S){return this._getWatchdog(S).state}add(S){const L=zd(S);return Promise.all(L.map(W=>this._actionQueues.enqueue(W.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let ue;if(this._watchdogs.has(W.id))throw new Error(`Item with the given id is already added: '${W.id}'.`);if(W.type==="editor")return ue=new Pd(null,this._watchdogConfig),ue.setCreator(W.creator),ue._setExcludedProperties(this._contextProps),W.destructor&&ue.setDestructor(W.destructor),this._watchdogs.set(W.id,ue),ue.on("error",(_e,{error:xe,causesRestart:Ee})=>{this._fire("itemError",{itemId:W.id,error:xe}),Ee&&this._actionQueues.enqueue(W.id,()=>new Promise(pt=>{const nt=()=>{ue.off("restart",nt),this._fire("itemRestart",{itemId:W.id}),pt()};ue.on("restart",nt)}))}),ue.create(W.sourceElementOrData,W.config,this._context);throw new Error(`Not supported item type: '${W.type}'.`)})))}remove(S){const L=zd(S);return Promise.all(L.map(W=>this._actionQueues.enqueue(W,()=>{const ue=this._getWatchdog(W);return this._watchdogs.delete(W),ue.destroy()})))}destroy(){return this._actionQueues.enqueue(Un,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Un,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(S=>{console.error("An error happened during destroying the context or items.",S)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(S=>(this._context=S,this._contextProps=x(this._context),Promise.all(Array.from(this._watchdogs.values()).map(L=>(L._setExcludedProperties(this._contextProps),L.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const S=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(L=>L.destroy())).then(()=>this._destructor(S))})}_getWatchdog(S){const L=this._watchdogs.get(S);if(!L)throw new Error(`Item with the given id was not registered: ${S}.`);return L}_isErrorComingFromThisItem(S){for(const L of this._watchdogs.values())if(L._isErrorComingFromThisItem(S))return!1;return T(this._context,S.context)}}class Lg{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(S){this._onEmptyCallbacks.push(S)}enqueue(S,L){const W=S===Un;this._activeActions++,this._queues.get(S)||this._queues.set(S,Promise.resolve());const ue=(W?Promise.all(this._queues.values()):Promise.all([this._queues.get(Un),this._queues.get(S)])).then(L),_e=ue.catch(()=>{});return this._queues.set(S,_e),ue.finally(()=>{this._activeActions--,this._queues.get(S)===_e&&this._activeActions===0&&this._onEmptyCallbacks.forEach(xe=>xe())})}}function zd(D){return Array.isArray(D)?D:[D]}const Ld=k().createContext("contextWatchdog");class Nr extends k().Component{constructor(S,L){super(S,L),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(S){return this._shouldComponentUpdate(S)}async _shouldComponentUpdate(S){return S.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(S.config)),S.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(S.config),!0):this.props.children!==S.children}render(){return k().createElement(Ld.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(S){this.contextWatchdog=new Mr(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(L,W)=>{this.props.onError(W.error,{phase:"runtime",willContextRestart:W.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(S).catch(L=>{this.props.onError(L,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Nr.defaultProps={isLayoutReady:!0,onError:(D,S)=>console.error(D,S)},Nr.propTypes={id:y().string,isLayoutReady:y().bool,context:y().func,watchdogConfig:y().object,config:y().object,onReady:y().func,onError:y().func};const sc="Lock from React integration (@ckeditor/ckeditor5-react)";class xi extends k().Component{constructor(S){super(S),this.editorDestructionInProgress=null,this.domContainer=k().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:L}=window;if(L){const[W]=L.split(".").map(Number);W<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(S){return!!this.editor&&(S.id!==this.props.id||S.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(S)&&this.editor.data.set(S.data),"disabled"in S&&(S.disabled?this.editor.enableReadOnlyMode(sc):this.editor.disableReadOnlyMode(sc)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return k().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Mr?this.watchdog=new jg(this.context):this.watchdog=new xi._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((S,L)=>this._createEditor(S,L)),this.watchdog.on("error",(S,{error:L,causesRestart:W})=>{(this.props.onError||console.error)(L,{phase:"runtime",willEditorRestart:W})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(S=>{(this.props.onError||console.error)(S,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(S,L){return this.props.editor.create(S,L).then(W=>{"disabled"in this.props&&this.props.disabled&&W.enableReadOnlyMode(sc);const ue=W.model.document,_e=W.editing.view.document;return ue.on("change:data",xe=>{this.props.onChange&&this.props.onChange(xe,W)}),_e.on("focus",xe=>{this.props.onFocus&&this.props.onFocus(xe,W)}),_e.on("blur",xe=>{this.props.onBlur&&this.props.onBlur(xe,W)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(W)}),W})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(S=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,S()):this.instance?(await this.instance.destroy(),this.instance=null,S()):void S())})}_shouldUpdateEditor(S){return this.props.data!==S.data&&this.editor.data.get()!==S.data}_getConfig(){const S=this.props.config||{};return this.props.data&&S.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...S,initialData:S.initialData||this.props.data||""}}}xi.contextType=Ld,xi.propTypes={editor:y().func.isRequired,data:y().string,config:y().object,disableWatchdog:y().bool,watchdogConfig:y().object,onChange:y().func,onReady:y().func,onFocus:y().func,onBlur:y().func,onError:y().func,disabled:y().bool,id:y().any},xi._EditorWatchdog=Pd;class jg{constructor(S){this._contextWatchdog=S,this._id=function(){const L=4294967296*Math.random()>>>0,W=4294967296*Math.random()>>>0,ue=4294967296*Math.random()>>>0,_e=4294967296*Math.random()>>>0;return"e"+v[L>>0&255]+v[L>>8&255]+v[L>>16&255]+v[L>>24&255]+v[W>>0&255]+v[W>>8&255]+v[W>>16&255]+v[W>>24&255]+v[ue>>0&255]+v[ue>>8&255]+v[ue>>16&255]+v[ue>>24&255]+v[_e>>0&255]+v[_e>>8&255]+v[_e>>16&255]+v[_e>>24&255]}()}setCreator(S){this._creator=S}create(S,L){return this._contextWatchdog.add({sourceElementOrData:S,config:L,creator:this._creator,id:this._id,type:"editor"})}on(S,L){this._contextWatchdog.on("itemError",(W,{itemId:ue,error:_e})=>{ue===this._id&&L(null,{error:_e,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),g})())})(tf,tf.exports);var KY=tf.exports,Ct={exports:{}},Zt=Ct.exports;(function(o){const i=o.en=o.en||{};i.dictionary=Object.assign(i.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align center":"Align center","Align left":"Align left","Align right":"Align right",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Code:"Code",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Dim grey":"Dim grey",Disc:"Disc",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",HEX:"HEX","Horizontal line":"Horizontal line","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block",Italic:"Italic",Justify:"Justify","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",Next:"Next","No results found":"No results found","No searchable items":"No searchable items","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0","Right aligned image":"Right aligned image",Save:"Save","Select all":"Select all","Show more items":"Show more items","Side image":"Side image",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Subscript:"Subscript",Superscript:"Superscript","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(i,a){typeof Zt=="object"&&typeof Ct=="object"?Ct.exports=a():typeof define=="function"&&define.amd?define([],a):typeof Zt=="object"?Zt.InlineEditor=a():i.InlineEditor=a()})(self,()=>(()=>{var o={8168:(u,h,g)=>{const m=g(8874),k={};for(const v of Object.keys(m))k[m[v]]=v;const b={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};u.exports=b;for(const v of Object.keys(b)){if(!("channels"in b[v]))throw new Error("missing channels property: "+v);if(!("labels"in b[v]))throw new Error("missing channel labels property: "+v);if(b[v].labels.length!==b[v].channels)throw new Error("channel and label counts mismatch: "+v);const{channels:A,labels:x}=b[v];delete b[v].channels,delete b[v].labels,Object.defineProperty(b[v],"channels",{value:A}),Object.defineProperty(b[v],"labels",{value:x})}b.rgb.hsl=function(v){const A=v[0]/255,x=v[1]/255,E=v[2]/255,T=Math.min(A,x,E),P=Math.max(A,x,E),I=P-T;let N,B;P===T?N=0:A===P?N=(x-E)/I:x===P?N=2+(E-A)/I:E===P&&(N=4+(A-x)/I),N=Math.min(N*60,360),N<0&&(N+=360);const j=(T+P)/2;return P===T?B=0:j<=.5?B=I/(P+T):B=I/(2-P-T),[N,B*100,j*100]},b.rgb.hsv=function(v){let A,x,E,T,P;const I=v[0]/255,N=v[1]/255,B=v[2]/255,j=Math.max(I,N,B),q=j-Math.min(I,N,B),Z=function(K){return(j-K)/6/q+1/2};return q===0?(T=0,P=0):(P=q/j,A=Z(I),x=Z(N),E=Z(B),I===j?T=E-x:N===j?T=.3333333333333333+A-E:B===j&&(T=.6666666666666666+x-A),T<0?T+=1:T>1&&(T-=1)),[T*360,P*100,j*100]},b.rgb.hwb=function(v){const A=v[0],x=v[1];let E=v[2];const T=b.rgb.hsl(v)[0],P=1/255*Math.min(A,Math.min(x,E));return E=1-.00392156862745098*Math.max(A,Math.max(x,E)),[T,P*100,E*100]},b.rgb.cmyk=function(v){const A=v[0]/255,x=v[1]/255,E=v[2]/255,T=Math.min(1-A,1-x,1-E),P=(1-A-T)/(1-T)||0,I=(1-x-T)/(1-T)||0,N=(1-E-T)/(1-T)||0;return[P*100,I*100,N*100,T*100]};function y(v,A){return(v[0]-A[0])**2+(v[1]-A[1])**2+(v[2]-A[2])**2}b.rgb.keyword=function(v){const A=k[v];if(A)return A;let x=1/0,E;for(const T of Object.keys(m)){const P=m[T],I=y(v,P);I<x&&(x=I,E=T)}return E},b.keyword.rgb=function(v){return m[v]},b.rgb.xyz=function(v){let A=v[0]/255,x=v[1]/255,E=v[2]/255;A=A>.04045?((A+.055)/1.055)**2.4:A/12.92,x=x>.04045?((x+.055)/1.055)**2.4:x/12.92,E=E>.04045?((E+.055)/1.055)**2.4:E/12.92;const T=A*.4124+x*.3576+E*.1805,P=A*.2126+x*.7152+E*.0722,I=A*.0193+x*.1192+E*.9505;return[T*100,P*100,I*100]},b.rgb.lab=function(v){const A=b.rgb.xyz(v);let x=A[0],E=A[1],T=A[2];x/=95.047,E/=100,T/=108.883,x=x>.008856?x**.3333333333333333:7.787*x+.13793103448275862,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862;const P=116*E-16,I=500*(x-E),N=200*(E-T);return[P,I,N]},b.hsl.rgb=function(v){const A=v[0]/360,x=v[1]/100,E=v[2]/100;let T,P,I;if(x===0)return I=E*255,[I,I,I];E<.5?T=E*(1+x):T=E+x-E*x;const N=2*E-T,B=[0,0,0];for(let j=0;j<3;j++)P=A+.3333333333333333*-(j-1),P<0&&P++,P>1&&P--,6*P<1?I=N+(T-N)*6*P:2*P<1?I=T:3*P<2?I=N+(T-N)*(.6666666666666666-P)*6:I=N,B[j]=I*255;return B},b.hsl.hsv=function(v){const A=v[0];let x=v[1]/100,E=v[2]/100,T=x;const P=Math.max(E,.01);E*=2,x*=E<=1?E:2-E,T*=P<=1?P:2-P;const I=(E+x)/2,N=E===0?2*T/(P+T):2*x/(E+x);return[A,N*100,I*100]},b.hsv.rgb=function(v){const A=v[0]/60,x=v[1]/100;let E=v[2]/100;const T=Math.floor(A)%6,P=A-Math.floor(A),I=255*E*(1-x),N=255*E*(1-x*P),B=255*E*(1-x*(1-P));switch(E*=255,T){case 0:return[E,B,I];case 1:return[N,E,I];case 2:return[I,E,B];case 3:return[I,N,E];case 4:return[B,I,E];case 5:return[E,I,N]}},b.hsv.hsl=function(v){const A=v[0],x=v[1]/100,E=v[2]/100,T=Math.max(E,.01);let P,I;I=(2-x)*E;const N=(2-x)*T;return P=x*T,P/=N<=1?N:2-N,P=P||0,I/=2,[A,P*100,I*100]},b.hwb.rgb=function(v){const A=v[0]/360;let x=v[1]/100,E=v[2]/100;const T=x+E;let P;T>1&&(x/=T,E/=T);const I=Math.floor(6*A),N=1-E;P=6*A-I,I&1&&(P=1-P);const B=x+P*(N-x);let j,q,Z;switch(I){default:case 6:case 0:j=N,q=B,Z=x;break;case 1:j=B,q=N,Z=x;break;case 2:j=x,q=N,Z=B;break;case 3:j=x,q=B,Z=N;break;case 4:j=B,q=x,Z=N;break;case 5:j=N,q=x,Z=B;break}return[j*255,q*255,Z*255]},b.cmyk.rgb=function(v){const A=v[0]/100,x=v[1]/100,E=v[2]/100,T=v[3]/100,P=1-Math.min(1,A*(1-T)+T),I=1-Math.min(1,x*(1-T)+T),N=1-Math.min(1,E*(1-T)+T);return[P*255,I*255,N*255]},b.xyz.rgb=function(v){const A=v[0]/100,x=v[1]/100,E=v[2]/100;let T,P,I;return T=A*3.2406+x*-1.5372+E*-.4986,P=A*-.9689+x*1.8758+E*.0415,I=A*.0557+x*-.204+E*1.057,T=T>.0031308?1.055*T**.4166666666666667-.055:T*12.92,P=P>.0031308?1.055*P**.4166666666666667-.055:P*12.92,I=I>.0031308?1.055*I**.4166666666666667-.055:I*12.92,T=Math.min(Math.max(0,T),1),P=Math.min(Math.max(0,P),1),I=Math.min(Math.max(0,I),1),[T*255,P*255,I*255]},b.xyz.lab=function(v){let A=v[0],x=v[1],E=v[2];A/=95.047,x/=100,E/=108.883,A=A>.008856?A**.3333333333333333:7.787*A+.13793103448275862,x=x>.008856?x**.3333333333333333:7.787*x+.13793103448275862,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862;const T=116*x-16,P=500*(A-x),I=200*(x-E);return[T,P,I]},b.lab.xyz=function(v){const A=v[0],x=v[1],E=v[2];let T,P,I;P=(A+16)/116,T=x/500+P,I=P-E/200;const N=P**3,B=T**3,j=I**3;return P=N>.008856?N:(P-.13793103448275862)/7.787,T=B>.008856?B:(T-.13793103448275862)/7.787,I=j>.008856?j:(I-.13793103448275862)/7.787,T*=95.047,P*=100,I*=108.883,[T,P,I]},b.lab.lch=function(v){const A=v[0],x=v[1],E=v[2];let T;T=Math.atan2(E,x)*360/2/Math.PI,T<0&&(T+=360);const I=Math.sqrt(x*x+E*E);return[A,I,T]},b.lch.lab=function(v){const A=v[0],x=v[1],T=v[2]/360*2*Math.PI,P=x*Math.cos(T),I=x*Math.sin(T);return[A,P,I]},b.rgb.ansi16=function(v,A=null){const[x,E,T]=v;let P=A===null?b.rgb.hsv(v)[2]:A;if(P=Math.round(P/50),P===0)return 30;let I=30+(Math.round(T/255)<<2|Math.round(E/255)<<1|Math.round(x/255));return P===2&&(I+=60),I},b.hsv.ansi16=function(v){return b.rgb.ansi16(b.hsv.rgb(v),v[2])},b.rgb.ansi256=function(v){const A=v[0],x=v[1],E=v[2];return A===x&&x===E?A<8?16:A>248?231:Math.round((A-8)/247*24)+232:16+36*Math.round(A/255*5)+6*Math.round(x/255*5)+Math.round(E/255*5)},b.ansi16.rgb=function(v){let A=v%10;if(A===0||A===7)return v>50&&(A+=3.5),A=A/10.5*255,[A,A,A];const x=(~~(v>50)+1)*.5,E=(A&1)*x*255,T=(A>>1&1)*x*255,P=(A>>2&1)*x*255;return[E,T,P]},b.ansi256.rgb=function(v){if(v>=232){const P=(v-232)*10+8;return[P,P,P]}v-=16;let A;const x=Math.floor(v/36)/5*255,E=Math.floor((A=v%36)/6)/5*255,T=A%6/5*255;return[x,E,T]},b.rgb.hex=function(v){const x=(((Math.round(v[0])&255)<<16)+((Math.round(v[1])&255)<<8)+(Math.round(v[2])&255)).toString(16).toUpperCase();return"000000".substring(x.length)+x},b.hex.rgb=function(v){const A=v.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!A)return[0,0,0];let x=A[0];A[0].length===3&&(x=x.split("").map(N=>N+N).join(""));const E=parseInt(x,16),T=E>>16&255,P=E>>8&255,I=E&255;return[T,P,I]},b.rgb.hcg=function(v){const A=v[0]/255,x=v[1]/255,E=v[2]/255,T=Math.max(Math.max(A,x),E),P=Math.min(Math.min(A,x),E),I=T-P;let N,B;return I<1?N=P/(1-I):N=0,I<=0?B=0:T===A?B=(x-E)/I%6:T===x?B=2+(E-A)/I:B=4+(A-x)/I,B/=6,B%=1,[B*360,I*100,N*100]},b.hsl.hcg=function(v){const A=v[1]/100,x=v[2]/100,E=x<.5?2*A*x:2*A*(1-x);let T=0;return E<1&&(T=(x-.5*E)/(1-E)),[v[0],E*100,T*100]},b.hsv.hcg=function(v){const A=v[1]/100,x=v[2]/100,E=A*x;let T=0;return E<1&&(T=(x-E)/(1-E)),[v[0],E*100,T*100]},b.hcg.rgb=function(v){const A=v[0]/360,x=v[1]/100,E=v[2]/100;if(x===0)return[E*255,E*255,E*255];const T=[0,0,0],P=A%1*6,I=P%1,N=1-I;let B=0;switch(Math.floor(P)){case 0:T[0]=1,T[1]=I,T[2]=0;break;case 1:T[0]=N,T[1]=1,T[2]=0;break;case 2:T[0]=0,T[1]=1,T[2]=I;break;case 3:T[0]=0,T[1]=N,T[2]=1;break;case 4:T[0]=I,T[1]=0,T[2]=1;break;default:T[0]=1,T[1]=0,T[2]=N}return B=(1-x)*E,[(x*T[0]+B)*255,(x*T[1]+B)*255,(x*T[2]+B)*255]},b.hcg.hsv=function(v){const A=v[1]/100,x=v[2]/100,E=A+x*(1-A);let T=0;return E>0&&(T=A/E),[v[0],T*100,E*100]},b.hcg.hsl=function(v){const A=v[1]/100,E=v[2]/100*(1-A)+.5*A;let T=0;return E>0&&E<.5?T=A/(2*E):E>=.5&&E<1&&(T=A/(2*(1-E))),[v[0],T*100,E*100]},b.hcg.hwb=function(v){const A=v[1]/100,x=v[2]/100,E=A+x*(1-A);return[v[0],(E-A)*100,(1-E)*100]},b.hwb.hcg=function(v){const A=v[1]/100,E=1-v[2]/100,T=E-A;let P=0;return T<1&&(P=(E-T)/(1-T)),[v[0],T*100,P*100]},b.apple.rgb=function(v){return[v[0]/65535*255,v[1]/65535*255,v[2]/65535*255]},b.rgb.apple=function(v){return[v[0]/255*65535,v[1]/255*65535,v[2]/255*65535]},b.gray.rgb=function(v){return[v[0]/100*255,v[0]/100*255,v[0]/100*255]},b.gray.hsl=function(v){return[0,0,v[0]]},b.gray.hsv=b.gray.hsl,b.gray.hwb=function(v){return[0,100,v[0]]},b.gray.cmyk=function(v){return[0,0,0,v[0]]},b.gray.lab=function(v){return[v[0],0,0]},b.gray.hex=function(v){const A=Math.round(v[0]/100*255)&255,E=((A<<16)+(A<<8)+A).toString(16).toUpperCase();return"000000".substring(E.length)+E},b.rgb.gray=function(v){return[(v[0]+v[1]+v[2])/3/255*100]}},2085:(u,h,g)=>{const m=g(8168),k=g(4111),b={},y=Object.keys(m);function v(x){const E=function(...T){const P=T[0];return P==null?P:(P.length>1&&(T=P),x(T))};return"conversion"in x&&(E.conversion=x.conversion),E}function A(x){const E=function(...T){const P=T[0];if(P==null)return P;P.length>1&&(T=P);const I=x(T);if(typeof I=="object")for(let N=I.length,B=0;B<N;B++)I[B]=Math.round(I[B]);return I};return"conversion"in x&&(E.conversion=x.conversion),E}y.forEach(x=>{b[x]={},Object.defineProperty(b[x],"channels",{value:m[x].channels}),Object.defineProperty(b[x],"labels",{value:m[x].labels});const E=k(x);Object.keys(E).forEach(P=>{const I=E[P];b[x][P]=A(I),b[x][P].raw=v(I)})}),u.exports=b},4111:(u,h,g)=>{const m=g(8168);function k(){const A={},x=Object.keys(m);for(let E=x.length,T=0;T<E;T++)A[x[T]]={distance:-1,parent:null};return A}function b(A){const x=k(),E=[A];for(x[A].distance=0;E.length;){const T=E.pop(),P=Object.keys(m[T]);for(let I=P.length,N=0;N<I;N++){const B=P[N],j=x[B];j.distance===-1&&(j.distance=x[T].distance+1,j.parent=T,E.unshift(B))}}return x}function y(A,x){return function(E){return x(A(E))}}function v(A,x){const E=[x[A].parent,A];let T=m[x[A].parent][A],P=x[A].parent;for(;x[P].parent;)E.unshift(x[P].parent),T=y(m[x[P].parent][P],T),P=x[P].parent;return T.conversion=E,T}u.exports=function(A){const x=b(A),E={},T=Object.keys(x);for(let P=T.length,I=0;I<P;I++){const N=T[I];x[N].parent!==null&&(E[N]=v(N,x))}return E}},8874:u=>{u.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},5363:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const A=v},3789:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const A=v},799:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const A=v},7372:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const A=v},5037:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const A=v},4249:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const A=v},9893:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{background:#dedede;border:0;height:4px;margin:15px 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-horizontal-line/theme/horizontalline.css"],names:[],mappings:"AAMA,yCAEC,iBACD,CAEA,eAGC,kBAA2B,CAC3B,QAAS,CAFT,UAAW,CADX,aAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


.ck-editor__editable .ck-horizontal-line {
	/* Necessary to render properly next to floated objects, e.g. side image case. */
	display: flow-root;
}

.ck-content hr {
	margin: 15px 0;
	height: 4px;
	background: hsl(0, 0%, 87%);
	border: 0;
}
`],sourceRoot:""}]);const A=v},2430:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const A=v},2423:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const A=v},8879:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const A=v},8340:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const A=v},2400:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const A=v},3534:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const A=v},1547:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const A=v},6618:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const A=v},2926:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const A=v},5269:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=v},3925:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const A=v},7536:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const A=v},4874:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const A=v},4330:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkimage.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const A=v},5782:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/collapsible.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const A=v},3190:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const A=v},4784:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const A=v},9938:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const A=v},2591:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/liststyles.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const A=v},9292:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const A=v},8705:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const A=v},1922:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const A=v},7138:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=v},4029:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-modal)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-modal);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=v},4971:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const A=v},7258:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const A=v},4923:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const A=v},4257:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const A=v},6306:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const A=v},5062:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=v},1883:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=v},4791:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=v},2704:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const A=v},9847:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=v},1874:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BASD,CAPC,6BACC,qCACD,CAEA,8CACC,WACD,CCbD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& .ck-icon {
		margin-right: var(--ck-spacing-medium);
	}

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const A=v},4746:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const A=v},1977:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const A=v},2470:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=v},3525:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const A=v},2933:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=v},179:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>span{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,8BACC,cAAe,CACf,eAAiB,CACjB,gCACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > span {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=v},4460:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=v},7592:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const A=v},6356:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=v},3707:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=v},6603:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const A=v},9332:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/search/search.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const A=v},6446:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const A=v},5224:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const A=v},4176:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const A=v},4768:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=v},3888:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,qCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CACrB,wCAAyC,CAFzC,wBAGD,CApBD,gCAuBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const A=v},5167:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_poweredby.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const A=v},7153:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const A=v},4875:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const A=v},2347:(u,h,g)=>{g.d(h,{Z:()=>A});var m=g(4015),k=g.n(m),b=g(3645),y=g.n(b),v=y()(k());v.push([u.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const A=v},3645:u=>{u.exports=function(h){var g=[];return g.toString=function(){return this.map(function(k){var b=h(k);return k[2]?"@media ".concat(k[2]," {").concat(b,"}"):b}).join("")},g.i=function(m,k,b){typeof m=="string"&&(m=[[null,m,""]]);var y={};if(b)for(var v=0;v<this.length;v++){var A=this[v][0];A!=null&&(y[A]=!0)}for(var x=0;x<m.length;x++){var E=[].concat(m[x]);b&&y[E[0]]||(k&&(E[2]?E[2]="".concat(k," and ").concat(E[2]):E[2]=k),g.push(E))}},g}},4015:u=>{function h(v,A){return y(v)||b(v,A)||m(v,A)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(v,A){if(v){if(typeof v=="string")return k(v,A);var x=Object.prototype.toString.call(v).slice(8,-1);if(x==="Object"&&v.constructor&&(x=v.constructor.name),x==="Map"||x==="Set")return Array.from(v);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return k(v,A)}}function k(v,A){(A==null||A>v.length)&&(A=v.length);for(var x=0,E=new Array(A);x<A;x++)E[x]=v[x];return E}function b(v,A){var x=v&&(typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"]);if(x!=null){var E=[],T=!0,P=!1,I,N;try{for(x=x.call(v);!(T=(I=x.next()).done)&&(E.push(I.value),!(A&&E.length===A));T=!0);}catch(B){P=!0,N=B}finally{try{!T&&x.return!=null&&x.return()}finally{if(P)throw N}}return E}}function y(v){if(Array.isArray(v))return v}u.exports=function(A){var x=h(A,4),E=x[1],T=x[3];if(!T)return E;if(typeof btoa=="function"){var P=btoa(unescape(encodeURIComponent(JSON.stringify(T)))),I="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(P),N="/*# ".concat(I," */"),B=T.sources.map(function(j){return"/*# sourceURL=".concat(T.sourceRoot||"").concat(j," */")});return[E].concat(B).concat([N]).join(`
`)}return[E].join(`
`)}},3379:(u,h,g)=>{var m=function(){var q;return function(){return typeof q>"u"&&(q=!!(window&&document&&document.all&&!window.atob)),q}}(),k=function(){var q={};return function(K){if(typeof q[K]>"u"){var X=document.querySelector(K);if(window.HTMLIFrameElement&&X instanceof window.HTMLIFrameElement)try{X=X.contentDocument.head}catch{X=null}q[K]=X}return q[K]}}(),b=[];function y(j){for(var q=-1,Z=0;Z<b.length;Z++)if(b[Z].identifier===j){q=Z;break}return q}function v(j,q){for(var Z={},K=[],X=0;X<j.length;X++){var re=j[X],ce=q.base?re[0]+q.base:re[0],$=Z[ce]||0,G="".concat(ce," ").concat($);Z[ce]=$+1;var U=y(G),R={css:re[1],media:re[2],sourceMap:re[3]};U!==-1?(b[U].references++,b[U].updater(R)):b.push({identifier:G,updater:B(R,q),references:1}),K.push(G)}return K}function A(j){var q=document.createElement("style"),Z=j.attributes||{};if(typeof Z.nonce>"u"){var K=g.nc;K&&(Z.nonce=K)}if(Object.keys(Z).forEach(function(re){q.setAttribute(re,Z[re])}),typeof j.insert=="function")j.insert(q);else{var X=k(j.insert||"head");if(!X)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");X.appendChild(q)}return q}function x(j){if(j.parentNode===null)return!1;j.parentNode.removeChild(j)}var E=function(){var q=[];return function(K,X){return q[K]=X,q.filter(Boolean).join(`
`)}}();function T(j,q,Z,K){var X=Z?"":K.media?"@media ".concat(K.media," {").concat(K.css,"}"):K.css;if(j.styleSheet)j.styleSheet.cssText=E(q,X);else{var re=document.createTextNode(X),ce=j.childNodes;ce[q]&&j.removeChild(ce[q]),ce.length?j.insertBefore(re,ce[q]):j.appendChild(re)}}function P(j,q,Z){var K=Z.css,X=Z.media,re=Z.sourceMap;if(X?j.setAttribute("media",X):j.removeAttribute("media"),re&&typeof btoa<"u"&&(K+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(re))))," */")),j.styleSheet)j.styleSheet.cssText=K;else{for(;j.firstChild;)j.removeChild(j.firstChild);j.appendChild(document.createTextNode(K))}}var I=null,N=0;function B(j,q){var Z,K,X;if(q.singleton){var re=N++;Z=I||(I=A(q)),K=T.bind(null,Z,re,!1),X=T.bind(null,Z,re,!0)}else Z=A(q),K=P.bind(null,Z,q),X=function(){x(Z)};return K(j),function($){if($){if($.css===j.css&&$.media===j.media&&$.sourceMap===j.sourceMap)return;K(j=$)}else X()}}u.exports=function(j,q){q=q||{},!q.singleton&&typeof q.singleton!="boolean"&&(q.singleton=m()),j=j||[];var Z=v(j,q);return function(X){if(X=X||[],Object.prototype.toString.call(X)==="[object Array]"){for(var re=0;re<Z.length;re++){var ce=Z[re],$=y(ce);b[$].references--}for(var G=v(X,q),U=0;U<Z.length;U++){var R=Z[U],V=y(R);b[V].references===0&&(b[V].updater(),b.splice(V,1))}Z=G}}}}},i={};function a(u){var h=i[u];if(h!==void 0)return h.exports;var g=i[u]={id:u,exports:{}};return o[u](g,g.exports,a),g.exports}a.n=u=>{var h=u&&u.__esModule?()=>u.default:()=>u;return a.d(h,{a:h}),h},a.d=(u,h)=>{for(var g in h)a.o(h,g)&&!a.o(u,g)&&Object.defineProperty(u,g,{enumerable:!0,get:h[g]})},a.o=(u,h)=>Object.prototype.hasOwnProperty.call(u,h),a.nc=void 0;var l={};return(()=>{a.d(l,{default:()=>BU});function u(){try{return navigator.userAgent.toLowerCase()}catch{return""}}const h=u(),m={isMac:k(h),isWindows:b(h),isGecko:y(h),isSafari:v(h),isiOS:A(h),isAndroid:x(h),isBlink:E(h),features:{isRegExpUnicodePropertySupported:T()}};function k(r){return r.indexOf("macintosh")>-1}function b(r){return r.indexOf("windows")>-1}function y(r){return!!r.match(/gecko\/\d+/)}function v(r){return r.indexOf(" applewebkit/")>-1&&r.indexOf("chrome")===-1}function A(r){return!!r.match(/iphone|ipad/i)||k(r)&&navigator.maxTouchPoints>0}function x(r){return r.indexOf("android")>-1}function E(r){return r.indexOf("chrome/")>-1&&r.indexOf("edge/")<0}function T(){let r=!1;try{r="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return r}function P(r,e,t,n){t=t||function(p,w){return p===w};const s=Array.isArray(r)?r:Array.prototype.slice.call(r),c=Array.isArray(e)?e:Array.prototype.slice.call(e),d=I(s,c,t);return n?q(d,c.length):j(c,d)}function I(r,e,t){const n=N(r,e,t);if(n===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const s=B(r,n),c=B(e,n),d=N(s,c,t),f=r.length-d,p=e.length-d;return{firstIndex:n,lastIndexOld:f,lastIndexNew:p}}function N(r,e,t){for(let n=0;n<Math.max(r.length,e.length);n++)if(r[n]===void 0||e[n]===void 0||!t(r[n],e[n]))return n;return-1}function B(r,e){return r.slice(e).reverse()}function j(r,e){const t=[],{firstIndex:n,lastIndexOld:s,lastIndexNew:c}=e;return c-n>0&&t.push({index:n,type:"insert",values:r.slice(n,c)}),s-n>0&&t.push({index:n+(c-n),type:"delete",howMany:s-n}),t}function q(r,e){const{firstIndex:t,lastIndexOld:n,lastIndexNew:s}=r;if(t===-1)return Array(e).fill("equal");let c=[];return t>0&&(c=c.concat(Array(t).fill("equal"))),s-t>0&&(c=c.concat(Array(s-t).fill("insert"))),n-t>0&&(c=c.concat(Array(n-t).fill("delete"))),s<e&&(c=c.concat(Array(e-s).fill("equal"))),c}function Z(r,e,t){t=t||function(ne,he){return ne===he};const n=r.length,s=e.length;if(n>200||s>200||n+s>300)return Z.fastDiff(r,e,t,!0);let c,d;if(s<n){const ne=r;r=e,e=ne,c="delete",d="insert"}else c="insert",d="delete";const f=r.length,p=e.length,w=p-f,_={},C={};function O(ne){const he=(C[ne-1]!==void 0?C[ne-1]:-1)+1,we=C[ne+1]!==void 0?C[ne+1]:-1,He=he>we?-1:1;_[ne+He]&&(_[ne]=_[ne+He].slice(0)),_[ne]||(_[ne]=[]),_[ne].push(he>we?c:d);let rt=Math.max(he,we),mt=rt-ne;for(;mt<f&&rt<p&&t(r[mt],e[rt]);)mt++,rt++,_[ne].push("equal");return rt}let z=0,H;do{for(H=-z;H<w;H++)C[H]=O(H);for(H=w+z;H>w;H--)C[H]=O(H);C[w]=O(w),z++}while(C[w]!==p);return _[w].slice(1)}Z.fastDiff=P;function K(){return function r(){r.called=!0}}const X=K;class re{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=X(),this.off=X()}}const ce=new Array(256).fill("").map((r,e)=>("0"+e.toString(16)).slice(-2));function $(){const r=Math.random()*4294967296>>>0,e=Math.random()*4294967296>>>0,t=Math.random()*4294967296>>>0,n=Math.random()*4294967296>>>0;return"e"+ce[r>>0&255]+ce[r>>8&255]+ce[r>>16&255]+ce[r>>24&255]+ce[e>>0&255]+ce[e>>8&255]+ce[e>>16&255]+ce[e>>24&255]+ce[t>>0&255]+ce[t>>8&255]+ce[t>>16&255]+ce[t>>24&255]+ce[n>>0&255]+ce[n>>8&255]+ce[n>>16&255]+ce[n>>24&255]}const U={get(r="normal"){return typeof r!="number"?this[r]||this.normal:r},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function R(r,e){const t=U.get(e.priority);for(let n=0;n<r.length;n++)if(U.get(r[n].priority)<t){r.splice(n,0,e);return}r.push(e)}const V="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class M extends Error{constructor(e,t,n){super(ee(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new M(e.message,t);throw n.stack=e.stack,n}}function Q(r,e){console.warn(...le(r,e))}function J(r){return`
Read more: ${V}#error-${r}`}function ee(r,e){const t=new WeakSet,s=e?` ${JSON.stringify(e,(d,f)=>{if(typeof f=="object"&&f!==null){if(t.has(f))return`[object ${f.constructor.name}]`;t.add(f)}return f})}`:"",c=J(r);return r+s+c}function le(r,e){const t=J(r);return e?[r,e,t]:[r,t]}const ke="40.0.0",Ce=new Date(2023,9,4);if(globalThis.CKEDITOR_VERSION)throw new M("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=ke;const at=Symbol("listeningTo"),Pt=Symbol("emitterId"),gt=Symbol("delegations"),Ve=Me(Object);function Me(r){if(!r)return Ve;class e extends r{on(n,s,c){this.listenTo(this,n,s,c)}once(n,s,c){let d=!1;const f=(p,...w)=>{d||(d=!0,p.off(),s.call(this,p,...w))};this.listenTo(this,n,f,c)}off(n,s){this.stopListening(this,n,s)}listenTo(n,s,c,d={}){let f,p;this[at]||(this[at]={});const w=this[at];Ra(n)||Ql(n);const _=Ra(n);(f=w[_])||(f=w[_]={emitter:n,callbacks:{}}),(p=f.callbacks[s])||(p=f.callbacks[s]=[]),p.push(c),Tf(this,n,s,c,d)}stopListening(n,s,c){const d=this[at];let f=n&&Ra(n);const p=d&&f?d[f]:void 0,w=p&&s?p.callbacks[s]:void 0;if(!(!d||n&&!p||s&&!w))if(c)Ai(this,n,s,c),w.indexOf(c)!==-1&&(w.length===1?delete p.callbacks[s]:Ai(this,n,s,c));else if(w){for(;c=w.pop();)Ai(this,n,s,c);delete p.callbacks[s]}else if(p){for(s in p.callbacks)this.stopListening(n,s);delete d[f]}else{for(f in d)this.stopListening(d[f].emitter);delete this[at]}}fire(n,...s){try{const c=n instanceof re?n:new re(this,n),d=c.name;let f=Jl(this,d);if(c.path.push(this),f){const w=[c,...s];f=Array.from(f);for(let _=0;_<f.length&&(f[_].callback.apply(this,w),c.off.called&&(delete c.off.called,this._removeEventListener(d,f[_].callback)),!c.stop.called);_++);}const p=this[gt];if(p){const w=p.get(d),_=p.get("*");w&&Xl(w,c,s),_&&Xl(_,c,s)}return c.return}catch(c){M.rethrowUnexpectedError(c,this)}}delegate(...n){return{to:(s,c)=>{this[gt]||(this[gt]=new Map),n.forEach(d=>{const f=this[gt].get(d);f?f.set(s,c):this[gt].set(d,new Map([[s,c]]))})}}}stopDelegating(n,s){if(this[gt])if(!n)this[gt].clear();else if(!s)this[gt].delete(n);else{const c=this[gt].get(n);c&&c.delete(s)}}_addEventListener(n,s,c){Sf(this,n);const d=Va(this,n),f=U.get(c.priority),p={callback:s,priority:f};for(const w of d)R(w,p)}_removeEventListener(n,s){const c=Va(this,n);for(const d of c)for(let f=0;f<d.length;f++)d[f].callback==s&&(d.splice(f,1),f--)}}return e}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{Me[r]=Ve.prototype[r]});function Df(r,e){const t=r[at];return t&&t[e]?t[e].emitter:null}function Ql(r,e){r[Pt]||(r[Pt]=e||$())}function Ra(r){return r[Pt]}function Fa(r){return r._events||Object.defineProperty(r,"_events",{value:{}}),r._events}function ps(){return{callbacks:[],childEvents:[]}}function Sf(r,e){const t=Fa(r);if(t[e])return;let n=e,s=null;const c=[];for(;n!==""&&!t[n];)t[n]=ps(),c.push(t[n]),s&&t[n].childEvents.push(s),s=n,n=n.substr(0,n.lastIndexOf(":"));if(n!==""){for(const d of c)d.callbacks=t[n].callbacks.slice();t[n].childEvents.push(s)}}function Va(r,e){const t=Fa(r)[e];if(!t)return[];let n=[t.callbacks];for(let s=0;s<t.childEvents.length;s++){const c=Va(r,t.childEvents[s]);n=n.concat(c)}return n}function Jl(r,e){let t;return!r._events||!(t=r._events[e])||!t.callbacks.length?e.indexOf(":")>-1?Jl(r,e.substr(0,e.lastIndexOf(":"))):null:t.callbacks}function Xl(r,e,t){for(let[n,s]of r){s?typeof s=="function"&&(s=s(e.name)):s=e.name;const c=new re(e.source,s);c.path=[...e.path],n.fire(c,...t)}}function Tf(r,e,t,n,s){e._addEventListener?e._addEventListener(t,n,s):r._addEventListener.call(e,t,n,s)}function Ai(r,e,t,n){e._removeEventListener?e._removeEventListener(t,n):r._removeEventListener.call(e,t,n)}function ms(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}const tt=ms,ks=Symbol("observableProperties"),bs=Symbol("boundObservables"),ws=Symbol("boundProperties"),qi=Symbol("decoratedMethods"),vs=Symbol("decoratedOriginal"),Ua=Ue(Me());function Ue(r){if(!r)return Ua;class e extends r{set(n,s){if(tt(n)){Object.keys(n).forEach(d=>{this.set(d,n[d])},this);return}Ha(this);const c=this[ks];if(n in this&&!c.has(n))throw new M("observable-set-cannot-override",this);Object.defineProperty(this,n,{enumerable:!0,configurable:!0,get(){return c.get(n)},set(d){const f=c.get(n);let p=this.fire(`set:${n}`,n,d,f);p===void 0&&(p=d),(f!==p||!c.has(n))&&(c.set(n,p),this.fire(`change:${n}`,n,p,f))}}),this[n]=s}bind(...n){if(!n.length||!ed(n))throw new M("observable-bind-wrong-properties",this);if(new Set(n).size!==n.length)throw new M("observable-bind-duplicate-properties",this);Ha(this);const s=this[ws];n.forEach(d=>{if(s.has(d))throw new M("observable-bind-rebind",this)});const c=new Map;return n.forEach(d=>{const f={property:d,to:[]};s.set(d,f),c.set(d,f)}),{to:Gi,toMany:If,_observable:this,_bindProperties:n,_to:[],_bindings:c}}unbind(...n){if(!this[ks])return;const s=this[ws],c=this[bs];if(n.length){if(!ed(n))throw new M("observable-unbind-wrong-properties",this);n.forEach(d=>{const f=s.get(d);f&&(f.to.forEach(([p,w])=>{const _=c.get(p),C=_[w];C.delete(f),C.size||delete _[w],Object.keys(_).length||(c.delete(p),this.stopListening(p,"change"))}),s.delete(d))})}else c.forEach((d,f)=>{this.stopListening(f,"change")}),c.clear(),s.clear()}decorate(n){Ha(this);const s=this[n];if(!s)throw new M("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:n});this.on(n,(c,d)=>{c.return=s.apply(this,d)}),this[n]=function(...c){return this.fire(n,c)},this[n][vs]=s,this[qi]||(this[qi]=[]),this[qi].push(n)}stopListening(n,s,c){if(!n&&this[qi]){for(const d of this[qi])this[d]=this[d][vs];delete this[qi]}super.stopListening(n,s,c)}}return e}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{Ue[r]=Ua.prototype[r]});function Ha(r){r[ks]||(Object.defineProperty(r,ks,{value:new Map}),Object.defineProperty(r,bs,{value:new Map}),Object.defineProperty(r,ws,{value:new Map}))}function Gi(...r){const e=Nf(...r),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new M("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new M("observable-bind-to-extra-callback",this);e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new M("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),Pf(this._observable,this._to),Bf(this),this._bindProperties.forEach(s=>{td(this._observable,s)})}function If(r,e,t){if(this._bindings.size>1)throw new M("observable-bind-to-many-not-one-binding",this);this.to(...Mf(r,e),t)}function Mf(r,e){const t=r.map(n=>[n,e]);return Array.prototype.concat.apply([],t)}function ed(r){return r.every(e=>typeof e=="string")}function Nf(...r){if(!r.length)throw new M("observable-bind-to-parse-error",null);const e={to:[]};let t;return typeof r[r.length-1]=="function"&&(e.callback=r.pop()),r.forEach(n=>{if(typeof n=="string")t.properties.push(n);else if(typeof n=="object")t={observable:n,properties:[]},e.to.push(t);else throw new M("observable-bind-to-parse-error",null)}),e}function Of(r,e,t,n){const s=r[bs],c=s.get(t),d=c||{};d[n]||(d[n]=new Set),d[n].add(e),c||s.set(t,d)}function Bf(r){let e;r._bindings.forEach((t,n)=>{r._to.forEach(s=>{e=s.properties[t.callback?0:r._bindProperties.indexOf(n)],t.to.push([s.observable,e]),Of(r._observable,t,s.observable,e)})})}function td(r,e){const n=r[ws].get(e);let s;n.callback?s=n.callback.apply(r,n.to.map(c=>c[0][c[1]])):(s=n.to[0],s=s[0][s[1]]),Object.prototype.hasOwnProperty.call(r,e)?r[e]=s:r.set(e,s)}function Pf(r,e){e.forEach(t=>{const n=r[bs];let s;n.get(t.observable)||r.listenTo(t.observable,"change",(c,d)=>{s=n.get(t.observable)[d],s&&s.forEach(f=>{td(r,f.property)})})})}function ri(r){let e=0;for(const t of r)e++;return e}function vt(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)if(r[n]!=e[n])return n;return r.length==e.length?"same":r.length<e.length?"prefix":"extension"}function zt(r){return!!(r&&r[Symbol.iterator])}var zf=typeof global=="object"&&global&&global.Object===Object&&global;const nd=zf;var Lf=typeof self=="object"&&self&&self.Object===Object&&self,jf=nd||Lf||Function("return this")();const Cn=jf;var Rf=Cn.Symbol;const Vn=Rf;var Yi=Object.prototype,id=Yi.hasOwnProperty,Ff=Yi.toString,bo=Vn?Vn.toStringTag:void 0;function _s(r){var e=id.call(r,bo),t=r[bo];try{r[bo]=void 0;var n=!0}catch{}var s=Ff.call(r);return n&&(e?r[bo]=t:delete r[bo]),s}const Vf=_s;var Uf=Object.prototype,Hf=Uf.toString;function $f(r){return Hf.call(r)}const Cr=$f;var Wf="[object Null]",qf="[object Undefined]",Zi=Vn?Vn.toStringTag:void 0;function Gf(r){return r==null?r===void 0?qf:Wf:Zi&&Zi in Object(r)?Vf(r):Cr(r)}const Ci=Gf;var rd=Array.isArray;const Rt=rd;function Yf(r){return r!=null&&typeof r=="object"}const cn=Yf;var ys="[object String]";function Zf(r){return typeof r=="string"||!Rt(r)&&cn(r)&&Ci(r)==ys}const $a=Zf;function As(r,e,t={},n=[]){const s=t&&t.xmlns,c=s?r.createElementNS(s,e):r.createElement(e);for(const d in t)c.setAttribute(d,t[d]);($a(n)||!zt(n))&&(n=[n]);for(let d of n)$a(d)&&(d=r.createTextNode(d)),c.appendChild(d);return c}function Kf(r,e){return function(t){return r(e(t))}}const od=Kf;var Qf=od(Object.getPrototypeOf,Object);const wo=Qf;var Jf="[object Object]",sd=Function.prototype,ad=Object.prototype,Wa=sd.toString,cd=ad.hasOwnProperty,Xf=Wa.call(Object);function eg(r){if(!cn(r)||Ci(r)!=Jf)return!1;var e=wo(r);if(e===null)return!0;var t=cd.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Wa.call(t)==Xf}const Xt=eg;function Je(){this.__data__=[],this.size=0}const tg=Je;function qa(r,e){return r===e||r!==r&&e!==e}const xr=qa;function vo(r,e){for(var t=r.length;t--;)if(xr(r[t][0],e))return t;return-1}const Er=vo;var Dr=Array.prototype,ld=Dr.splice;function ng(r){var e=this.__data__,t=Er(e,r);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():ld.call(e,t,1),--this.size,!0}const ig=ng;function dd(r){var e=this.__data__,t=Er(e,r);return t<0?void 0:e[t][1]}const rg=dd;function Ga(r){return Er(this.__data__,r)>-1}const ud=Ga;function og(r,e){var t=this.__data__,n=Er(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this}const sg=og;function Sr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Sr.prototype.clear=tg,Sr.prototype.delete=ig,Sr.prototype.get=rg,Sr.prototype.has=ud,Sr.prototype.set=sg;const _o=Sr;function Ya(){this.__data__=new _o,this.size=0}const ag=Ya;function cg(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}const lg=cg;function dg(r){return this.__data__.get(r)}const Za=dg;function ug(r){return this.__data__.has(r)}const hd=ug;var fd="[object AsyncFunction]",gd="[object Function]",pd="[object GeneratorFunction]",hg="[object Proxy]";function fg(r){if(!tt(r))return!1;var e=Ci(r);return e==gd||e==pd||e==fd||e==hg}const Ki=fg;var md=Cn["__core-js_shared__"];const Ka=md;var Qa=function(){var r=/[^.]+$/.exec(Ka&&Ka.keys&&Ka.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function Ja(r){return!!Qa&&Qa in r}const gg=Ja;var kd=Function.prototype,Xa=kd.toString;function bd(r){if(r!=null){try{return Xa.call(r)}catch{}try{return r+""}catch{}}return""}const Qi=bd;var wd=/[\\^$.*+?()[\]{}|]/g,pg=/^\[object .+?Constructor\]$/,mg=Function.prototype,ec=Object.prototype,tc=mg.toString,nc=ec.hasOwnProperty,ic=RegExp("^"+tc.call(nc).replace(wd,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function vd(r){if(!tt(r)||gg(r))return!1;var e=Ki(r)?ic:pg;return e.test(Qi(r))}const _d=vd;function yd(r,e){return r==null?void 0:r[e]}const Ad=yd;function Cd(r,e){var t=Ad(r,e);return _d(t)?t:void 0}const Ji=Cd;var kg=Ji(Cn,"Map");const yo=kg;var bg=Ji(Object,"create");const Ao=bg;function Xi(){this.__data__=Ao?Ao(null):{},this.size=0}const rc=Xi;function wg(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}const vg=wg;var xd="__lodash_hash_undefined__",oc=Object.prototype,_g=oc.hasOwnProperty;function yg(r){var e=this.__data__;if(Ao){var t=e[r];return t===xd?void 0:t}return _g.call(e,r)?e[r]:void 0}const Ag=yg;var Ed=Object.prototype,Dd=Ed.hasOwnProperty;function Cg(r){var e=this.__data__;return Ao?e[r]!==void 0:Dd.call(e,r)}const xg=Cg;var Eg="__lodash_hash_undefined__";function Sd(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=Ao&&e===void 0?Eg:e,this}const Dg=Sd;function Tr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Tr.prototype.clear=rc,Tr.prototype.delete=vg,Tr.prototype.get=Ag,Tr.prototype.has=xg,Tr.prototype.set=Dg;const Td=Tr;function Id(){this.size=0,this.__data__={hash:new Td,map:new(yo||_o),string:new Td}}const Sg=Id;function Tg(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}const Md=Tg;function Ig(r,e){var t=r.__data__;return Md(e)?t[typeof e=="string"?"string":"hash"]:t.map}const Co=Ig;function Nd(r){var e=Co(this,r).delete(r);return this.size-=e?1:0,e}const Od=Nd;function Ye(r){return Co(this,r).get(r)}const Mg=Ye;function Ng(r){return Co(this,r).has(r)}const Og=Ng;function Bg(r,e){var t=Co(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this}const Bd=Bg;function Ir(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Ir.prototype.clear=Sg,Ir.prototype.delete=Od,Ir.prototype.get=Mg,Ir.prototype.has=Og,Ir.prototype.set=Bd;const Cs=Ir;var Pg=200;function zg(r,e){var t=this.__data__;if(t instanceof _o){var n=t.__data__;if(!yo||n.length<Pg-1)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new Cs(n)}return t.set(r,e),this.size=t.size,this}const Pd=zg;function Un(r){var e=this.__data__=new _o(r);this.size=e.size}Un.prototype.clear=ag,Un.prototype.delete=lg,Un.prototype.get=Za,Un.prototype.has=hd,Un.prototype.set=Pd;const Mr=Un;function Lg(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}const zd=Lg;var Ld=function(){try{var r=Ji(Object,"defineProperty");return r({},"",{}),r}catch{}}();const Nr=Ld;function sc(r,e,t){e=="__proto__"&&Nr?Nr(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}const xi=sc;var jg=Object.prototype,D=jg.hasOwnProperty;function S(r,e,t){var n=r[e];(!(D.call(r,e)&&xr(n,t))||t===void 0&&!(e in r))&&xi(r,e,t)}const L=S;function W(r,e,t,n){var s=!t;t||(t={});for(var c=-1,d=e.length;++c<d;){var f=e[c],p=n?n(t[f],r[f],f,t,r):void 0;p===void 0&&(p=r[f]),s?xi(t,f,p):L(t,f,p)}return t}const ue=W;function _e(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}const xe=_e;var Ee="[object Arguments]";function pt(r){return cn(r)&&Ci(r)==Ee}const nt=pt;var xo=Object.prototype,er=xo.hasOwnProperty,Hn=xo.propertyIsEnumerable,Or=nt(function(){return arguments}())?nt:function(r){return cn(r)&&er.call(r,"callee")&&!Hn.call(r,"callee")};const tr=Or;function nr(){return!1}const xn=nr;var En=typeof Zt=="object"&&Zt&&!Zt.nodeType&&Zt,en=En&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,oi=en&&en.exports===En,Ei=oi?Cn.Buffer:void 0,II=Ei?Ei.isBuffer:void 0,MI=II||xn;const ac=MI;var NI=9007199254740991,OI=/^(?:0|[1-9]\d*)$/;function BI(r,e){var t=typeof r;return e=e??NI,!!e&&(t=="number"||t!="symbol"&&OI.test(r))&&r>-1&&r%1==0&&r<e}const Rg=BI;var PI=9007199254740991;function zI(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=PI}const rv=zI;var LI="[object Arguments]",jI="[object Array]",RI="[object Boolean]",FI="[object Date]",VI="[object Error]",UI="[object Function]",HI="[object Map]",$I="[object Number]",WI="[object Object]",qI="[object RegExp]",GI="[object Set]",YI="[object String]",ZI="[object WeakMap]",KI="[object ArrayBuffer]",QI="[object DataView]",JI="[object Float32Array]",XI="[object Float64Array]",e4="[object Int8Array]",t4="[object Int16Array]",n4="[object Int32Array]",i4="[object Uint8Array]",r4="[object Uint8ClampedArray]",o4="[object Uint16Array]",s4="[object Uint32Array]",ct={};ct[JI]=ct[XI]=ct[e4]=ct[t4]=ct[n4]=ct[i4]=ct[r4]=ct[o4]=ct[s4]=!0,ct[LI]=ct[jI]=ct[KI]=ct[RI]=ct[QI]=ct[FI]=ct[VI]=ct[UI]=ct[HI]=ct[$I]=ct[WI]=ct[qI]=ct[GI]=ct[YI]=ct[ZI]=!1;function a4(r){return cn(r)&&rv(r.length)&&!!ct[Ci(r)]}const c4=a4;function l4(r){return function(e){return r(e)}}const Fg=l4;var ov=typeof Zt=="object"&&Zt&&!Zt.nodeType&&Zt,cc=ov&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,d4=cc&&cc.exports===ov,Vg=d4&&nd.process,u4=function(){try{var r=cc&&cc.require&&cc.require("util").types;return r||Vg&&Vg.binding&&Vg.binding("util")}catch{}}();const xs=u4;var sv=xs&&xs.isTypedArray,h4=sv?Fg(sv):c4;const Ug=h4;var f4=Object.prototype,g4=f4.hasOwnProperty;function p4(r,e){var t=Rt(r),n=!t&&tr(r),s=!t&&!n&&ac(r),c=!t&&!n&&!s&&Ug(r),d=t||n||s||c,f=d?xe(r.length,String):[],p=f.length;for(var w in r)(e||g4.call(r,w))&&!(d&&(w=="length"||s&&(w=="offset"||w=="parent")||c&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||Rg(w,p)))&&f.push(w);return f}const av=p4;var m4=Object.prototype;function k4(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||m4;return r===t}const Hg=k4;var b4=od(Object.keys,Object);const w4=b4;var v4=Object.prototype,_4=v4.hasOwnProperty;function y4(r){if(!Hg(r))return w4(r);var e=[];for(var t in Object(r))_4.call(r,t)&&t!="constructor"&&e.push(t);return e}const A4=y4;function C4(r){return r!=null&&rv(r.length)&&!Ki(r)}const jd=C4;function x4(r){return jd(r)?av(r):A4(r)}const $g=x4;function E4(r,e){return r&&ue(e,$g(e),r)}const D4=E4;function S4(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}const T4=S4;var I4=Object.prototype,M4=I4.hasOwnProperty;function N4(r){if(!tt(r))return T4(r);var e=Hg(r),t=[];for(var n in r)n=="constructor"&&(e||!M4.call(r,n))||t.push(n);return t}const O4=N4;function B4(r){return jd(r)?av(r,!0):O4(r)}const Es=B4;function P4(r,e){return r&&ue(e,Es(e),r)}const z4=P4;var cv=typeof Zt=="object"&&Zt&&!Zt.nodeType&&Zt,lv=cv&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,L4=lv&&lv.exports===cv,dv=L4?Cn.Buffer:void 0,uv=dv?dv.allocUnsafe:void 0;function j4(r,e){if(e)return r.slice();var t=r.length,n=uv?uv(t):new r.constructor(t);return r.copy(n),n}const hv=j4;function R4(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}const fv=R4;function F4(r,e){for(var t=-1,n=r==null?0:r.length,s=0,c=[];++t<n;){var d=r[t];e(d,t,r)&&(c[s++]=d)}return c}const V4=F4;function U4(){return[]}const gv=U4;var H4=Object.prototype,$4=H4.propertyIsEnumerable,pv=Object.getOwnPropertySymbols,W4=pv?function(r){return r==null?[]:(r=Object(r),V4(pv(r),function(e){return $4.call(r,e)}))}:gv;const Wg=W4;function q4(r,e){return ue(r,Wg(r),e)}const G4=q4;function Y4(r,e){for(var t=-1,n=e.length,s=r.length;++t<n;)r[s+t]=e[t];return r}const mv=Y4;var Z4=Object.getOwnPropertySymbols,K4=Z4?function(r){for(var e=[];r;)mv(e,Wg(r)),r=wo(r);return e}:gv;const kv=K4;function Q4(r,e){return ue(r,kv(r),e)}const J4=Q4;function X4(r,e,t){var n=e(r);return Rt(r)?n:mv(n,t(r))}const bv=X4;function eM(r){return bv(r,$g,Wg)}const qg=eM;function tM(r){return bv(r,Es,kv)}const nM=tM;var iM=Ji(Cn,"DataView");const Gg=iM;var rM=Ji(Cn,"Promise");const Yg=rM;var oM=Ji(Cn,"Set");const Zg=oM;var sM=Ji(Cn,"WeakMap");const Kg=sM;var wv="[object Map]",aM="[object Object]",vv="[object Promise]",_v="[object Set]",yv="[object WeakMap]",Av="[object DataView]",cM=Qi(Gg),lM=Qi(yo),dM=Qi(Yg),uM=Qi(Zg),hM=Qi(Kg),Eo=Ci;(Gg&&Eo(new Gg(new ArrayBuffer(1)))!=Av||yo&&Eo(new yo)!=wv||Yg&&Eo(Yg.resolve())!=vv||Zg&&Eo(new Zg)!=_v||Kg&&Eo(new Kg)!=yv)&&(Eo=function(r){var e=Ci(r),t=e==aM?r.constructor:void 0,n=t?Qi(t):"";if(n)switch(n){case cM:return Av;case lM:return wv;case dM:return vv;case uM:return _v;case hM:return yv}return e});const lc=Eo;var fM=Object.prototype,gM=fM.hasOwnProperty;function pM(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&gM.call(r,"index")&&(t.index=r.index,t.input=r.input),t}const mM=pM;var kM=Cn.Uint8Array;const Rd=kM;function bM(r){var e=new r.constructor(r.byteLength);return new Rd(e).set(new Rd(r)),e}const Qg=bM;function wM(r,e){var t=e?Qg(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}const vM=wM;var _M=/\w*$/;function yM(r){var e=new r.constructor(r.source,_M.exec(r));return e.lastIndex=r.lastIndex,e}const AM=yM;var Cv=Vn?Vn.prototype:void 0,xv=Cv?Cv.valueOf:void 0;function CM(r){return xv?Object(xv.call(r)):{}}const xM=CM;function EM(r,e){var t=e?Qg(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}const Ev=EM;var DM="[object Boolean]",SM="[object Date]",TM="[object Map]",IM="[object Number]",MM="[object RegExp]",NM="[object Set]",OM="[object String]",BM="[object Symbol]",PM="[object ArrayBuffer]",zM="[object DataView]",LM="[object Float32Array]",jM="[object Float64Array]",RM="[object Int8Array]",FM="[object Int16Array]",VM="[object Int32Array]",UM="[object Uint8Array]",HM="[object Uint8ClampedArray]",$M="[object Uint16Array]",WM="[object Uint32Array]";function qM(r,e,t){var n=r.constructor;switch(e){case PM:return Qg(r);case DM:case SM:return new n(+r);case zM:return vM(r,t);case LM:case jM:case RM:case FM:case VM:case UM:case HM:case $M:case WM:return Ev(r,t);case TM:return new n;case IM:case OM:return new n(r);case MM:return AM(r);case NM:return new n;case BM:return xM(r)}}const GM=qM;var Dv=Object.create,YM=function(){function r(){}return function(e){if(!tt(e))return{};if(Dv)return Dv(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();const ZM=YM;function KM(r){return typeof r.constructor=="function"&&!Hg(r)?ZM(wo(r)):{}}const Sv=KM;var QM="[object Map]";function JM(r){return cn(r)&&lc(r)==QM}const XM=JM;var Tv=xs&&xs.isMap,e3=Tv?Fg(Tv):XM;const t3=e3;var n3="[object Set]";function i3(r){return cn(r)&&lc(r)==n3}const r3=i3;var Iv=xs&&xs.isSet,o3=Iv?Fg(Iv):r3;const s3=o3;var a3=1,c3=2,l3=4,Mv="[object Arguments]",d3="[object Array]",u3="[object Boolean]",h3="[object Date]",f3="[object Error]",Nv="[object Function]",g3="[object GeneratorFunction]",p3="[object Map]",m3="[object Number]",Ov="[object Object]",k3="[object RegExp]",b3="[object Set]",w3="[object String]",v3="[object Symbol]",_3="[object WeakMap]",y3="[object ArrayBuffer]",A3="[object DataView]",C3="[object Float32Array]",x3="[object Float64Array]",E3="[object Int8Array]",D3="[object Int16Array]",S3="[object Int32Array]",T3="[object Uint8Array]",I3="[object Uint8ClampedArray]",M3="[object Uint16Array]",N3="[object Uint32Array]",it={};it[Mv]=it[d3]=it[y3]=it[A3]=it[u3]=it[h3]=it[C3]=it[x3]=it[E3]=it[D3]=it[S3]=it[p3]=it[m3]=it[Ov]=it[k3]=it[b3]=it[w3]=it[v3]=it[T3]=it[I3]=it[M3]=it[N3]=!0,it[f3]=it[Nv]=it[_3]=!1;function Fd(r,e,t,n,s,c){var d,f=e&a3,p=e&c3,w=e&l3;if(t&&(d=s?t(r,n,s,c):t(r)),d!==void 0)return d;if(!tt(r))return r;var _=Rt(r);if(_){if(d=mM(r),!f)return fv(r,d)}else{var C=lc(r),O=C==Nv||C==g3;if(ac(r))return hv(r,f);if(C==Ov||C==Mv||O&&!s){if(d=p||O?{}:Sv(r),!f)return p?J4(r,z4(d,r)):G4(r,D4(d,r))}else{if(!it[C])return s?r:{};d=GM(r,C,f)}}c||(c=new Mr);var z=c.get(r);if(z)return z;c.set(r,d),s3(r)?r.forEach(function(he){d.add(Fd(he,e,t,he,r,c))}):t3(r)&&r.forEach(function(he,we){d.set(we,Fd(he,e,t,we,r,c))});var H=w?p?nM:qg:p?Es:$g,ne=_?void 0:H(r);return zd(ne||r,function(he,we){ne&&(we=he,he=r[we]),L(d,we,Fd(he,e,t,we,r,c))}),d}const Jg=Fd;var O3=1,B3=4;function P3(r,e){return e=typeof e=="function"?e:void 0,Jg(r,O3|B3,e)}const Xg=P3;function z3(r){return cn(r)&&r.nodeType===1&&!Xt(r)}const Do=z3;class Bv{constructor(e,t){this._config={},t&&this.define(Pv(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,s=!1){if(Xt(t)){this._setObjectToTarget(e,t,s);return}const c=t.split(".");t=c.pop();for(const d of c)Xt(e[d])||(e[d]={}),e=e[d];if(Xt(n)){Xt(e[t])||(e[t]={}),e=e[t],this._setObjectToTarget(e,n,s);return}s&&typeof e[t]<"u"||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const s of n){if(!Xt(e[s])){e=null;break}e=e[s]}return e?Pv(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(s=>{this._setToTarget(e,s,t[s],n)})}}function Pv(r){return Xg(r,L3)}function L3(r){return Do(r)?r:void 0}function Br(r){if(r){if(r.defaultView)return r instanceof r.defaultView.Document;if(r.ownerDocument&&r.ownerDocument.defaultView)return r instanceof r.ownerDocument.defaultView.Node}return!1}function Vd(r){const e=Object.prototype.toString.apply(r);return e=="[object Window]"||e=="[object global]"}const zv=Dn(Me());function Dn(r){if(!r)return zv;class e extends r{listenTo(n,s,c,d={}){if(Br(n)||Vd(n)){const f={capture:!!d.useCapture,passive:!!d.usePassive},p=this._getProxyEmitter(n,f)||new j3(n,f);this.listenTo(p,s,c,d)}else super.listenTo(n,s,c,d)}stopListening(n,s,c){if(Br(n)||Vd(n)){const d=this._getAllProxyEmitters(n);for(const f of d)this.stopListening(f,s,c)}else super.stopListening(n,s,c)}_getProxyEmitter(n,s){return Df(this,Lv(n,s))}_getAllProxyEmitters(n){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(s=>this._getProxyEmitter(n,s)).filter(s=>!!s)}}return e}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{Dn[r]=zv.prototype[r]});class j3 extends Me(){constructor(e,t){super(),Ql(this,Lv(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;this._domListeners[e]&&(!(t=this._events[e])||!t.callbacks.length)&&this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),Me().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){Me().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function R3(r){return r["data-ck-expando"]||(r["data-ck-expando"]=$())}function Lv(r,e){let t=R3(r);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let ep;try{ep={window,document}}catch{ep={window:{},document:{}}}const be=ep;function F3(r){const e=[];let t=r;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function V3(r){return r instanceof HTMLTextAreaElement?r.value:r.innerHTML}function Tt(r){return Object.prototype.toString.call(r)=="[object Text]"}function Ud(r){return Object.prototype.toString.apply(r)=="[object Range]"}function jv(r){const e=r.ownerDocument.defaultView.getComputedStyle(r);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function Rv(r){return!r||!r.parentNode||r.offsetParent===be.document.body?null:r.offsetParent}const Fv=["top","right","bottom","left","width","height"];class Ne{constructor(e){const t=Ud(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),tp(e)||t)if(t){const n=Ne.getDomRangeRects(e);Hd(this,Ne.getBoundingRect(n))}else Hd(this,e.getBoundingClientRect());else if(Vd(e)){const{innerWidth:n,innerHeight:s}=e;Hd(this,{top:0,right:n,bottom:s,left:0,width:n,height:s})}else Hd(this,e)}clone(){return new Ne(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new Ne(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(Vv(e))return t;let n=e,s=e.parentNode||e.commonAncestorContainer,c;for(;s&&!Vv(s);){const d=U3(s)==="visible";n instanceof HTMLElement&&Uv(n)==="absolute"&&(c=n);const f=Uv(s);if(d||c&&(f==="relative"&&d||f!=="relative")){n=s,s=s.parentNode;continue}const p=new Ne(s),w=t.getIntersection(p);if(w)w.getArea()<t.getArea()&&(t=w);else return null;n=s,s=s.parentNode}return t}isEqual(e){for(const t of Fv)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!!(t&&t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=be.window,n=this.clone().moveBy(e,t);if(tp(n._source)){const s=Rv(n._source);s&&H3(n,s)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,s;if(Vd(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,s=e.getComputedStyle(e.document.documentElement).direction;else{const c=jv(e);t=e.offsetWidth-e.clientWidth-c.left-c.right,n=e.offsetHeight-e.clientHeight-c.top-c.bottom,s=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=c.left,this.top+=c.top,this.right-=c.right,this.bottom-=c.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,s==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const s of n)t.push(new Ne(s));else{let s=e.startContainer;Tt(s)&&(s=s.parentNode);const c=new Ne(s.getBoundingClientRect());c.right=c.left,c.width=0,t.push(c)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const s of e)n++,t.left=Math.min(t.left,s.left),t.top=Math.min(t.top,s.top),t.right=Math.max(t.right,s.right),t.bottom=Math.max(t.bottom,s.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Ne(t))}}function Hd(r,e){for(const t of Fv)r[t]=e[t]}function Vv(r){return tp(r)?r===r.ownerDocument.body:!1}function tp(r){return r!==null&&typeof r=="object"&&r.nodeType===1&&typeof r.getBoundingClientRect=="function"}function Uv(r){return r instanceof HTMLElement?r.ownerDocument.defaultView.getComputedStyle(r).position:"static"}function U3(r){return r instanceof HTMLElement?r.ownerDocument.defaultView.getComputedStyle(r).overflow:"visible"}function H3(r,e){const t=new Ne(e),n=jv(e);let s=0,c=0;s-=t.left,c-=t.top,s+=e.scrollLeft,c+=e.scrollTop,s-=n.left,c-=n.top,r.moveBy(s,c)}class Xe{constructor(e,t){Xe._observerInstance||Xe._createObserver(),this._element=e,this._callback=t,Xe._addElementCallback(e,t),Xe._observerInstance.observe(e)}get element(){return this._element}destroy(){Xe._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){Xe._elementCallbacks||(Xe._elementCallbacks=new Map);let n=Xe._elementCallbacks.get(e);n||(n=new Set,Xe._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=Xe._getElementCallbacks(e);n&&(n.delete(t),n.size||(Xe._elementCallbacks.delete(e),Xe._observerInstance.unobserve(e))),Xe._elementCallbacks&&!Xe._elementCallbacks.size&&(Xe._observerInstance=null,Xe._elementCallbacks=null)}static _getElementCallbacks(e){return Xe._elementCallbacks?Xe._elementCallbacks.get(e):null}static _createObserver(){Xe._observerInstance=new be.window.ResizeObserver(e=>{for(const t of e){const n=Xe._getElementCallbacks(t.target);if(n)for(const s of n)s(t)}})}}Xe._observerInstance=null,Xe._elementCallbacks=null;function Hv(r,e){r instanceof HTMLTextAreaElement&&(r.value=e),r.innerHTML=e}function dc(r){return e=>e+r}function $d(r){let e=0;for(;r.previousSibling;)r=r.previousSibling,e++;return e}function $v(r,e,t){r.insertBefore(t,r.childNodes[e]||null)}function uc(r){return r&&r.nodeType===Node.COMMENT_NODE}function $3(r){try{be.document.createAttribute(r)}catch{return!1}return!0}function So(r){return!!(r&&r.getClientRects&&r.getClientRects().length)}function np({element:r,target:e,positions:t,limiter:n,fitInViewport:s,viewportOffsetConfig:c}){Ki(e)&&(e=e()),Ki(n)&&(n=n());const d=Rv(r),f=W3(c),p=new Ne(r),w=Wv(e,f);let _;if(!w||!f.getIntersection(w))return null;const C={targetRect:w,elementRect:p,positionedElementAncestor:d,viewportRect:f};if(!n&&!s)_=new qv(t[0],C);else{if(n){const O=Wv(n,f);O&&(C.limiterRect=O)}_=q3(t,C)}return _}function Wv(r,e){const t=new Ne(r).getVisible();return t?t.getIntersection(e):null}function W3(r){r=Object.assign({top:0,bottom:0,left:0,right:0},r);const e=new Ne(be.window);return e.top+=r.top,e.height-=r.top,e.bottom-=r.bottom,e.height-=r.bottom,e}function q3(r,e){const{elementRect:t}=e,n=t.getArea(),s=r.map(f=>new qv(f,e)).filter(f=>!!f.name);let c=0,d=null;for(const f of s){const{limiterIntersectionArea:p,viewportIntersectionArea:w}=f;if(p===n)return f;const _=w**2+p**2;_>c&&(c=_,d=f)}return d}class qv{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:s,top:c,name:d,config:f}=n;this.name=d,this.config=f,this._positioningFunctionCoordinates={left:s,top:c},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect?this._cachedRect:(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top),this._cachedRect)}get _absoluteRect(){return this._cachedAbsoluteRect?this._cachedAbsoluteRect:(this._cachedAbsoluteRect=this._rect.toAbsoluteRect(),this._cachedAbsoluteRect)}}function Gv(r){const e=r.parentNode;e&&e.removeChild(r)}function G3({target:r,viewportOffset:e=0,ancestorOffset:t=0,alignToTop:n,forceScroll:s}){const c=ip(r);let d=c,f=null;for(e=K3(e);d;){let p;d==c?p=Jv(r):p=Jv(f),Z3({parent:p,getRect:()=>Xv(r,d),alignToTop:n,ancestorOffset:t,forceScroll:s});const w=Xv(r,d);if(Y3({window:d,rect:w,viewportOffset:e,alignToTop:n,forceScroll:s}),d.parent!=d){if(f=d.frameElement,d=d.parent,!f)return}else d=null}}function Y3({window:r,rect:e,alignToTop:t,forceScroll:n,viewportOffset:s}){const c=e.clone().moveBy(0,s.bottom),d=e.clone().moveBy(0,-s.top),f=new Ne(r).excludeScrollbarsAndBorders(),p=[d,c],w=t&&n,_=p.every(ne=>f.contains(ne));let{scrollX:C,scrollY:O}=r;const z=C,H=O;w?O-=f.top-e.top+s.top:_||(Zv(d,f)?O-=f.top-e.top+s.top:Yv(c,f)&&(t?O+=e.top-f.top-s.top:O+=e.bottom-f.bottom+s.bottom)),_||(Kv(e,f)?C-=f.left-e.left+s.left:Qv(e,f)&&(C+=e.right-f.right+s.right)),(C!=z||O!==H)&&r.scrollTo(C,O)}function Z3({parent:r,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:s=0,limiterElement:c}){const d=ip(r),f=t&&n;let p,w,_;const C=c||d.document.body;for(;r!=C;)w=e(),p=new Ne(r).excludeScrollbarsAndBorders(),_=p.contains(w),f?r.scrollTop-=p.top-w.top+s:_||(Zv(w,p)?r.scrollTop-=p.top-w.top+s:Yv(w,p)&&(t?r.scrollTop+=w.top-p.top-s:r.scrollTop+=w.bottom-p.bottom+s)),_||(Kv(w,p)?r.scrollLeft-=p.left-w.left+s:Qv(w,p)&&(r.scrollLeft+=w.right-p.right+s)),r=r.parentNode}function Yv(r,e){return r.bottom>e.bottom}function Zv(r,e){return r.top<e.top}function Kv(r,e){return r.left<e.left}function Qv(r,e){return r.right>e.right}function ip(r){return Ud(r)?r.startContainer.ownerDocument.defaultView:r.ownerDocument.defaultView}function Jv(r){if(Ud(r)){let e=r.commonAncestorContainer;return Tt(e)&&(e=e.parentNode),e}else return r.parentNode}function Xv(r,e){const t=ip(r),n=new Ne(r);if(t===e)return n;{let s=t;for(;s!=e;){const c=s.frameElement,d=new Ne(c).excludeScrollbarsAndBorders();n.moveBy(d.left,d.top),s=s.parent}}return n}function K3(r){return typeof r=="number"?{top:r,bottom:r,left:r,right:r}:r}const Q3={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},J3={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Be=iN(),X3=Object.fromEntries(Object.entries(Be).map(([r,e])=>[e,r.charAt(0).toUpperCase()+r.slice(1)]));function Ds(r){let e;if(typeof r=="string"){if(e=Be[r.toLowerCase()],!e)throw new M("keyboard-unknown-key",null,{key:r})}else e=r.keyCode+(r.altKey?Be.alt:0)+(r.ctrlKey?Be.ctrl:0)+(r.shiftKey?Be.shift:0)+(r.metaKey?Be.cmd:0);return e}function hc(r){return typeof r=="string"&&(r=rN(r)),r.map(e=>typeof e=="string"?tN(e):e).reduce((e,t)=>t+e,0)}function e_(r){let e=hc(r);return Object.entries(m.isMac||m.isiOS?Q3:J3).reduce((s,[c,d])=>(e&Be[c]&&(e&=~Be[c],s+=d),s),"")+(e?X3[e]:"")}function eN(r){return r==Be.arrowright||r==Be.arrowleft||r==Be.arrowup||r==Be.arrowdown}function t_(r,e){const t=e==="ltr";switch(r){case Be.arrowleft:return t?"left":"right";case Be.arrowright:return t?"right":"left";case Be.arrowup:return"up";case Be.arrowdown:return"down"}}function tN(r){if(r.endsWith("!"))return Ds(r.slice(0,-1));const e=Ds(r);return(m.isMac||m.isiOS)&&e==Be.ctrl?Be.cmd:e}function nN(r,e){const t=t_(r,e);return t==="down"||t==="right"}function iN(){const r={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);r[t.toLowerCase()]=e}for(let e=48;e<=57;e++)r[e-48]=e;for(let e=112;e<=123;e++)r["f"+(e-111)]=e;for(const e of"`-=[];',./\\")r[e]=e.charCodeAt(0);return r}function rN(r){return r.split("+").map(e=>e.trim())}function Ft(r){return Array.isArray(r)?r:[r]}be.window.CKEDITOR_TRANSLATIONS||(be.window.CKEDITOR_TRANSLATIONS={});function oN(r,e,t=1){if(typeof t!="number")throw new M("translation-service-quantity-not-a-number",null,{quantity:t});const n=aN();n===1&&(r=Object.keys(be.window.CKEDITOR_TRANSLATIONS)[0]);const s=e.id||e.string;if(n===0||!sN(r,s))return t!==1?e.plural:e.string;const c=be.window.CKEDITOR_TRANSLATIONS[r].dictionary,d=be.window.CKEDITOR_TRANSLATIONS[r].getPluralForm||(w=>w===1?0:1),f=c[s];if(typeof f=="string")return f;const p=Number(d(t));return f[p]}function sN(r,e){return!!be.window.CKEDITOR_TRANSLATIONS[r]&&!!be.window.CKEDITOR_TRANSLATIONS[r].dictionary[e]}function aN(){return Object.keys(be.window.CKEDITOR_TRANSLATIONS).length}const cN=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function n_(r){return cN.includes(r)?"rtl":"ltr"}class lN{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=n_(this.uiLanguage),this.contentLanguageDirection=n_(this.contentLanguage),this.t=(n,s)=>this._t(n,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Ft(t),typeof e=="string"&&(e={string:e});const s=!!e.plural?t[0]:1,c=oN(this.uiLanguage,e,s);return dN(c,t)}}function dN(r,e){return r.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)}class $n extends Me(){constructor(e={},t={}){super();const n=zt(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const s of e)this._items.push(s),this._itemMap.set(this._getItemIdBeforeAdding(s),s)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new M("collection-add-item-invalid-index",this);let n=0;for(const s of e){const c=this._getItemIdBeforeAdding(s),d=t+n;this._items.splice(d,0,s),this._itemMap.set(c,s),this.fire("add",s,d),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else if(typeof e=="number")t=this._items[e];else throw new M("collection-get-invalid-arg",this);return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=this._idProperty,n=e[t];return n&&this._itemMap.has(n)}}getIndex(e){let t;return typeof e=="string"?t=this._itemMap.get(e):t=e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new M("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(s,c,d)=>{const f=t._bindToCollection==this,p=t._bindToInternalToExternalMap.get(c);if(f&&p)this._bindToExternalToInternalMap.set(c,p),this._bindToInternalToExternalMap.set(p,c);else{const w=e(c);if(!w){this._skippedIndexesFromExternal.push(d);return}let _=d;for(const C of this._skippedIndexesFromExternal)d>C&&_--;for(const C of t._skippedIndexesFromExternal)_>=C&&_++;this._bindToExternalToInternalMap.set(c,w),this._bindToInternalToExternalMap.set(w,c),this.add(w,_);for(let C=0;C<t._skippedIndexesFromExternal.length;C++)_<=t._skippedIndexesFromExternal[C]&&t._skippedIndexesFromExternal[C]++}};for(const s of t)n(null,s,t.getIndex(s));this.listenTo(t,"add",n),this.listenTo(t,"remove",(s,c,d)=>{const f=this._bindToExternalToInternalMap.get(c);f&&this.remove(f),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((p,w)=>(d<w&&p.push(w-1),d>w&&p.push(w),p),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new M("collection-add-invalid-id",this);if(this.get(n))throw new M("collection-add-item-already-exists",this)}else e[t]=n=$();return n}_remove(e){let t,n,s,c=!1;const d=this._idProperty;if(typeof e=="string"?(n=e,s=this._itemMap.get(n),c=!s,s&&(t=this._items.indexOf(s))):typeof e=="number"?(t=e,s=this._items[t],c=!s,s&&(n=s[d])):(s=e,n=s[d],t=this._items.indexOf(s),c=t==-1||!this._itemMap.get(n)),c)throw new M("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const f=this._bindToInternalToExternalMap.get(s);return this._bindToInternalToExternalMap.delete(s),this._bindToExternalToInternalMap.delete(f),this.fire("remove",s,t),[s,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Vt(r){const e=r.next();return e.done?null:e.value}class gn extends Dn(Ue()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new M("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class si{constructor(){this._listener=new(Dn())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Ds(n),n)})}set(e,t,n={}){const s=hc(e),c=n.priority;this._listener.listenTo(this._listener,"_keydown:"+s,(d,f)=>{t(f,()=>{f.preventDefault(),f.stopPropagation(),d.stop()}),d.return=!0},{priority:c})}press(e){return!!this._listener.fire("_keydown:"+Ds(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function uN(r){const e=new Map;for(const t in r)e.set(t,r[t]);return e}function Di(r){return zt(r)?new Map(r):uN(r)}const hN=1e4;function fN(r,e,t,n){if(Math.max(e.length,r.length)>hN)return r.slice(0,t).concat(e).concat(r.slice(t+n,r.length));{const s=Array.from(r);return s.splice(t,n,...e),s}}function rp(r,e){let t;function n(...s){n.cancel(),t=setTimeout(()=>r(...s),e)}return n.cancel=()=>{clearTimeout(t)},n}function gN(r){function e(C){return C.length>=40&&C.length<=255?"VALID":"INVALID"}if(!r)return"INVALID";let t="";try{t=atob(r)}catch{return"INVALID"}const n=t.split("-"),s=n[0],c=n[1];if(!c)return e(r);try{atob(c)}catch{try{if(atob(s),!atob(s).length)return e(r)}catch{return e(r)}}if(s.length<40||s.length>255)return"INVALID";let d="";try{atob(s),d=atob(c)}catch{return"INVALID"}if(d.length!==8)return"INVALID";const f=Number(d.substring(0,4)),p=Number(d.substring(4,6))-1,w=Number(d.substring(6,8)),_=new Date(f,p,w);return _<Ce||isNaN(Number(_))?"INVALID":"VALID"}function pN(r){return!!r&&r.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(r)}function mN(r){return!!r&&r.length==1&&/[\ud800-\udbff]/.test(r)}function kN(r){return!!r&&r.length==1&&/[\udc00-\udfff]/.test(r)}function op(r,e){return mN(r.charAt(e-1))&&kN(r.charAt(e))}function sp(r,e){return pN(r.charAt(e))}const bN=wN();function i_(r,e){const t=String(r).matchAll(bN);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}function wN(){const r=[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u],e=/\p{Regional_Indicator}{2}/u.source,t="(?:"+r.map(s=>s.source).join("|")+")",n=`${e}|${t}(?:‍${t})*`;return new RegExp(n,"ug")}class ie extends Ue(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",r_,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",r_),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function r_(r){r.return=!1,r.stop()}class et extends Ue(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,c=!(n.getFirstPosition().root.rootName=="$graveyard")&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!c)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",o_,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",o_),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function o_(r){r.return=!1,r.stop()}class s_ extends et{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){R(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class a_ extends Me(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const s of t)s.pluginName&&this._availablePlugins.set(s.pluginName,s);this._contextPlugins=new Map;for(const[s,c]of n)this._contextPlugins.set(s,c),this._contextPlugins.set(c,s),s.pluginName&&this._availablePlugins.set(s.pluginName,s)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new M("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const s=this,c=this._context;z(e),ne(e);const d=e.filter(pe=>!C(pe,t)),f=[...H(d)];yt(f,n);const p=rt(f);return mt(p,"init").then(()=>mt(p,"afterInit")).then(()=>p);function w(pe){return typeof pe=="function"}function _(pe){return w(pe)&&!!pe.isContextPlugin}function C(pe,De){return De.some(me=>me===pe||O(pe)===me||O(me)===pe)}function O(pe){return w(pe)?pe.pluginName||pe.name:pe}function z(pe,De=new Set){pe.forEach(me=>{w(me)&&(De.has(me)||(De.add(me),me.pluginName&&!s._availablePlugins.has(me.pluginName)&&s._availablePlugins.set(me.pluginName,me),me.requires&&z(me.requires,De)))})}function H(pe,De=new Set){return pe.map(me=>w(me)?me:s._availablePlugins.get(me)).reduce((me,lt)=>De.has(lt)?me:(De.add(lt),lt.requires&&(ne(lt.requires,lt),H(lt.requires,De).forEach(Ho=>me.add(Ho))),me.add(lt)),new Set)}function ne(pe,De=null){pe.map(me=>w(me)?me:s._availablePlugins.get(me)||me).forEach(me=>{he(me,De),we(me,De),He(me,De)})}function he(pe,De){if(!w(pe))throw De?new M("plugincollection-soft-required",c,{missingPlugin:pe,requiredBy:O(De)}):new M("plugincollection-plugin-not-found",c,{plugin:pe})}function we(pe,De){if(_(De)&&!_(pe))throw new M("plugincollection-context-required",c,{plugin:O(pe),requiredBy:O(De)})}function He(pe,De){if(De&&C(pe,t))throw new M("plugincollection-required",c,{plugin:O(pe),requiredBy:O(De)})}function rt(pe){return pe.map(De=>{let me=s._contextPlugins.get(De);return me=me||new De(c),s._add(De,me),me})}function mt(pe,De){return pe.reduce((me,lt)=>!lt[De]||s._contextPlugins.has(lt)?me:me.then(lt[De].bind(lt)),Promise.resolve())}function yt(pe,De){for(const me of De){if(typeof me!="function")throw new M("plugincollection-replace-plugin-invalid-type",null,{pluginItem:me});const lt=me.pluginName;if(!lt)throw new M("plugincollection-replace-plugin-missing-name",null,{pluginItem:me});if(me.requires&&me.requires.length)throw new M("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:lt});const Ho=s._availablePlugins.get(lt);if(!Ho)throw new M("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:lt});const x2=pe.indexOf(Ho);if(x2===-1){if(s._contextPlugins.has(Ho))return;throw new M("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:lt})}if(Ho.requires&&Ho.requires.length)throw new M("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:lt});pe.splice(x2,1,me),s._availablePlugins.set(lt,me)}}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy=="function"&&!this._contextPlugins.has(t)&&e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new M("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class c_{constructor(e){this._contextOwner=null,this.config=new Bv(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new a_(this,t);const n=this.config.get("language")||{};this.locale=new lN({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new $n}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new M("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new M("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new M("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class l_ extends Ue(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var vN=a(3379),ge=a.n(vN),d_=a(7372),ap={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};ap.insert="head",ap.singleton=!0,ge()(d_.Z,ap),d_.Z.locals;const Wd=new WeakMap;let u_=!1;function h_({view:r,element:e,text:t,isDirectHost:n=!0,keepOnFocus:s=!1}){const c=r.document;Wd.has(c)||(Wd.set(c,new Map),c.registerPostFixer(f=>cp(c,f)),c.on("change:isComposing",()=>{r.change(f=>cp(c,f))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(f,p,w)=>{d(w)}),e.placeholder?d(e.placeholder):t&&d(t),t&&xN();function d(f){Wd.get(c).set(e,{text:f,isDirectHost:n,keepOnFocus:s,hostElement:n?e:null}),r.change(p=>cp(c,p))}}function _N(r,e){return e.hasClass("ck-placeholder")?!1:(r.addClass("ck-placeholder",e),!0)}function yN(r,e){return e.hasClass("ck-placeholder")?(r.removeClass("ck-placeholder",e),!0):!1}function AN(r,e){if(!r.isAttached()||Array.from(r.getChildren()).some(d=>!d.is("uiElement")))return!1;const n=r.document,c=n.selection.anchor;return n.isComposing&&c&&c.parent===r?!1:e||!n.isFocused?!0:!!c&&c.parent!==r}function cp(r,e){const t=Wd.get(r),n=[];let s=!1;for(const[c,d]of t)d.isDirectHost&&(n.push(c),f_(e,c,d)&&(s=!0));for(const[c,d]of t){if(d.isDirectHost)continue;const f=CN(c);f&&(n.includes(f)||(d.hostElement=f,f_(e,c,d)&&(s=!0)))}return s}function f_(r,e,t){const{text:n,isDirectHost:s,hostElement:c}=t;let d=!1;return c.getAttribute("data-placeholder")!==n&&(r.setAttribute("data-placeholder",n,c),d=!0),(s||e.childCount==1)&&AN(c,t.keepOnFocus)?_N(r,c)&&(d=!0):yN(r,c)&&(d=!0),d}function CN(r){if(r.childCount){const e=r.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}function xN(){u_||Q("enableplaceholder-deprecated-text-option"),u_=!0}class To{is(){throw new Error("is() method is abstract")}}var EN=4;function DN(r){return Jg(r,EN)}const g_=DN;class Io extends Me(To){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new M("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),s=e.getAncestors(t);let c=0;for(;n[c]==s[c]&&n[c];)c++;return c===0?null:n[c-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),s=vt(t,n);switch(s){case"prefix":return!0;case"extension":return!1;default:return t[s]<n[s]}}isAfter(e){return this==e||this.root!==e.root?!1:!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=g_(this);return delete e.parent,e}}Io.prototype.is=function(r){return r==="node"||r==="view:node"};class Ze extends Io{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Ze?this===e||this.data===e.data:!1}_clone(){return new Ze(this.document,this.data)}}Ze.prototype.is=function(r){return r==="$text"||r==="view:$text"||r==="text"||r==="view:text"||r==="node"||r==="view:node"};class Si extends To{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new M("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new M("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}Si.prototype.is=function(r){return r==="$textProxy"||r==="view:$textProxy"||r==="textProxy"||r==="view:textProxy"};class Wn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const s=p_(t,n);if(s)return{element:t,pattern:n,match:s}}return null}matchAll(...e){const t=[];for(const n of e)for(const s of this._patterns){const c=p_(n,s);c&&t.push({element:n,pattern:s,match:c})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e!="function"&&t&&!(t instanceof RegExp)?t:null}}function p_(r,e){if(typeof e=="function")return e(r);const t={};return e.name&&(t.name=SN(e.name,r.name),!t.name)||e.attributes&&(t.attributes=NN(e.attributes,r),!t.attributes)||e.classes&&(t.classes=ON(e.classes,r),!t.classes)||e.styles&&(t.styles=BN(e.styles,r),!t.styles)?null:t}function SN(r,e){return r instanceof RegExp?!!e.match(r):r===e}function lp(r,e,t){const n=TN(r),s=Array.from(e),c=[];if(n.forEach(([d,f])=>{s.forEach(p=>{IN(d,p)&&MN(f,p,t)&&c.push(p)})}),!(!n.length||c.length<n.length))return c}function TN(r){return Array.isArray(r)?r.map(e=>Xt(e)?((e.key===void 0||e.value===void 0)&&Q("matcher-pattern-missing-key-or-value",e),[e.key,e.value]):[e,!0]):Xt(r)?Object.entries(r):[[r,!0]]}function IN(r,e){return r===!0||r===e||r instanceof RegExp&&e.match(r)}function MN(r,e,t){if(r===!0)return!0;const n=t(e);return r===n||r instanceof RegExp&&!!String(n).match(r)}function NN(r,e){const t=new Set(e.getAttributeKeys());return Xt(r)?(r.style!==void 0&&Q("matcher-pattern-deprecated-attributes-style-key",r),r.class!==void 0&&Q("matcher-pattern-deprecated-attributes-class-key",r)):(t.delete("style"),t.delete("class")),lp(r,t,n=>e.getAttribute(n))}function ON(r,e){return lp(r,e.getClassNames(),()=>{})}function BN(r,e){return lp(r,e.getStyleNames(!0),t=>e.getStyle(t))}var PN="[object Symbol]";function zN(r){return typeof r=="symbol"||cn(r)&&Ci(r)==PN}const qd=zN;var LN=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jN=/^\w*$/;function RN(r,e){if(Rt(r))return!1;var t=typeof r;return t=="number"||t=="symbol"||t=="boolean"||r==null||qd(r)?!0:jN.test(r)||!LN.test(r)||e!=null&&r in Object(e)}const FN=RN;var VN="Expected a function";function dp(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(VN);var t=function(){var n=arguments,s=e?e.apply(this,n):n[0],c=t.cache;if(c.has(s))return c.get(s);var d=r.apply(this,n);return t.cache=c.set(s,d)||c,d};return t.cache=new(dp.Cache||Cs),t}dp.Cache=Cs;const UN=dp;var HN=500;function $N(r){var e=UN(r,function(n){return t.size===HN&&t.clear(),n}),t=e.cache;return e}const WN=$N;var qN=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,GN=/\\(\\)?/g,YN=WN(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(qN,function(t,n,s,c){e.push(s?c.replace(GN,"$1"):n||t)}),e});const ZN=YN;function KN(r,e){for(var t=-1,n=r==null?0:r.length,s=Array(n);++t<n;)s[t]=e(r[t],t,r);return s}const QN=KN;var JN=1/0,m_=Vn?Vn.prototype:void 0,k_=m_?m_.toString:void 0;function b_(r){if(typeof r=="string")return r;if(Rt(r))return QN(r,b_)+"";if(qd(r))return k_?k_.call(r):"";var e=r+"";return e=="0"&&1/r==-JN?"-0":e}const XN=b_;function eO(r){return r==null?"":XN(r)}const up=eO;function tO(r,e){return Rt(r)?r:FN(r,e)?[r]:ZN(up(r))}const hp=tO;function nO(r){var e=r==null?0:r.length;return e?r[e-1]:void 0}const iO=nO;var rO=1/0;function oO(r){if(typeof r=="string"||qd(r))return r;var e=r+"";return e=="0"&&1/r==-rO?"-0":e}const fp=oO;function sO(r,e){e=hp(e,r);for(var t=0,n=e.length;r!=null&&t<n;)r=r[fp(e[t++])];return t&&t==n?r:void 0}const w_=sO;function aO(r,e,t){var n=-1,s=r.length;e<0&&(e=-e>s?0:s+e),t=t>s?s:t,t<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var c=Array(s);++n<s;)c[n]=r[n+e];return c}const v_=aO;function cO(r,e){return e.length<2?r:w_(r,v_(e,0,-1))}const lO=cO;function dO(r,e){return e=hp(e,r),r=lO(r,e),r==null||delete r[fp(iO(e))]}const uO=dO;function hO(r,e){return r==null?!0:uO(r,e)}const fO=hO;function gO(r,e,t){var n=r==null?void 0:w_(r,e);return n===void 0?t:n}const Gd=gO;function pO(r,e,t){(t!==void 0&&!xr(r[e],t)||t===void 0&&!(e in r))&&xi(r,e,t)}const gp=pO;function mO(r){return function(e,t,n){for(var s=-1,c=Object(e),d=n(e),f=d.length;f--;){var p=d[r?f:++s];if(t(c[p],p,c)===!1)break}return e}}var kO=mO();const bO=kO;function wO(r){return cn(r)&&jd(r)}const vO=wO;function _O(r,e){if(!(e==="constructor"&&typeof r[e]=="function")&&e!="__proto__")return r[e]}const pp=_O;function yO(r){return ue(r,Es(r))}const AO=yO;function CO(r,e,t,n,s,c,d){var f=pp(r,t),p=pp(e,t),w=d.get(p);if(w){gp(r,t,w);return}var _=c?c(f,p,t+"",r,e,d):void 0,C=_===void 0;if(C){var O=Rt(p),z=!O&&ac(p),H=!O&&!z&&Ug(p);_=p,O||z||H?Rt(f)?_=f:vO(f)?_=fv(f):z?(C=!1,_=hv(p,!0)):H?(C=!1,_=Ev(p,!0)):_=[]:Xt(p)||tr(p)?(_=f,tr(f)?_=AO(f):(!tt(f)||Ki(f))&&(_=Sv(p))):C=!1}C&&(d.set(p,_),s(_,p,n,c,d),d.delete(p)),gp(r,t,_)}const xO=CO;function __(r,e,t,n,s){r!==e&&bO(e,function(c,d){if(s||(s=new Mr),tt(c))xO(r,e,d,t,__,n,s);else{var f=n?n(pp(r,d),c,d+"",r,e,s):void 0;f===void 0&&(f=c),gp(r,d,f)}},Es)}const EO=__;function DO(r){return r}const Mo=DO;function SO(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)}const TO=SO;var y_=Math.max;function IO(r,e,t){return e=y_(e===void 0?r.length-1:e,0),function(){for(var n=arguments,s=-1,c=y_(n.length-e,0),d=Array(c);++s<c;)d[s]=n[e+s];s=-1;for(var f=Array(e+1);++s<e;)f[s]=n[s];return f[e]=t(d),TO(r,this,f)}}const MO=IO;function NO(r){return function(){return r}}const OO=NO;var BO=Nr?function(r,e){return Nr(r,"toString",{configurable:!0,enumerable:!1,value:OO(e),writable:!0})}:Mo;const PO=BO;var zO=800,LO=16,jO=Date.now;function RO(r){var e=0,t=0;return function(){var n=jO(),s=LO-(n-t);if(t=n,s>0){if(++e>=zO)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}var FO=RO(PO);const VO=FO;function UO(r,e){return VO(MO(r,e,Mo),r+"")}const HO=UO;function $O(r,e,t){if(!tt(t))return!1;var n=typeof e;return(n=="number"?jd(t)&&Rg(e,t.length):n=="string"&&e in t)?xr(t[e],r):!1}const WO=$O;function qO(r){return HO(function(e,t){var n=-1,s=t.length,c=s>1?t[s-1]:void 0,d=s>2?t[2]:void 0;for(c=r.length>3&&typeof c=="function"?(s--,c):void 0,d&&WO(t[0],t[1],d)&&(c=s<3?void 0:c,s=1),e=Object(e);++n<s;){var f=t[n];f&&r(e,f,n,c)}return e})}const A_=qO;var GO=A_(function(r,e,t){EO(r,e,t)});const C_=GO;function YO(r,e,t,n){if(!tt(r))return r;e=hp(e,r);for(var s=-1,c=e.length,d=c-1,f=r;f!=null&&++s<c;){var p=fp(e[s]),w=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return r;if(s!=d){var _=f[p];w=n?n(_,p,f):void 0,w===void 0&&(w=tt(_)?_:Rg(e[s+1])?[]:{})}L(f,p,w),f=f[p]}return r}const ZO=YO;function KO(r,e,t){return r==null?r:ZO(r,e,t)}const QO=KO;class JO{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(eB(e).entries());for(const[n,s]of t)this._styleProcessor.toNormalizedForm(n,s,this._styles)}has(e){if(this.isEmpty)return!1;const n=this._styleProcessor.getReducedForm(e,this._styles).find(([s])=>s===e);return Array.isArray(n)}set(e,t){if(tt(e))for(const[n,s]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,s,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=mp(e);fO(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!tt(this._styles[e]))return this._styles[e];const n=this._styleProcessor.getReducedForm(e,this._styles).find(([s])=>s===e);if(Array.isArray(n))return n[1]}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([n])=>n)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const s=t.splice(0,t.length-1).join("."),c=Gd(this._styles,s);if(!c)return;!Array.from(Object.keys(c)).length&&this.remove(s)}}class XO{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(tt(t)){kp(n,mp(e),t);return}if(this._normalizers.has(e)){const s=this._normalizers.get(e),{path:c,value:d}=s(t);kp(n,c,d)}else kp(n,e,t)}getNormalized(e,t){if(!e)return C_({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Gd(t,n);const s=n(e,t);if(s)return s}return Gd(t,mp(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(s=>{const c=this.getNormalized(s,e);return c&&typeof c=="object"?Object.keys(c).length:c}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function eB(r){let e=null,t=0,n=0,s=null;const c=new Map;if(r==="")return c;r.charAt(r.length-1)!=";"&&(r=r+";");for(let d=0;d<r.length;d++){const f=r.charAt(d);if(e===null)switch(f){case":":s||(s=r.substr(t,d-t),n=d+1);break;case'"':case"'":e=f;break;case";":{const p=r.substr(n,d-n);s&&c.set(s.trim(),p.trim()),s=null,t=d+1;break}}else f===e&&(e=null)}return c}function mp(r){return r.replace("-",".")}function kp(r,e,t){let n=t;tt(t)&&(n=C_({},Gd(r,e),t)),QO(r,e,n)}class Sn extends Io{constructor(e,t,n,s){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=tB(n),this._children=[],s&&this._insertChild(0,s),this._classes=new Set,this._attrs.has("class")){const c=this._attrs.get("class");x_(this._classes,c),this._attrs.delete("class")}this._styles=new JO(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Sn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Wn(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(s=>`${s[0]}="${s[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const s of this.getChildren())t.push(s._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const s=nB(this.document,t);for(const c of s)c.parent!==null&&c._remove(),c.parent=this,c.document=this.document,this._children.splice(e,0,c),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?x_(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0?(this._classes.clear(),!0):!1:e=="style"?this._styles.isEmpty?!1:(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Ft(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Ft(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Ft(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Sn.prototype.is=function(r,e){return e?e===this.name&&(r==="element"||r==="view:element"):r==="element"||r==="view:element"||r==="node"||r==="view:node"};function tB(r){const e=Di(r);for(const[t,n]of e)n===null?e.delete(t):typeof n!="string"&&e.set(t,String(n));return e}function x_(r,e){const t=e.split(/\s+/);r.clear(),t.forEach(n=>r.add(n))}function nB(r,e){return typeof e=="string"?[new Ze(r,e)]:(zt(e)||(e=[e]),Array.from(e).map(t=>typeof t=="string"?new Ze(r,t):t instanceof Si?new Ze(r,t.data):t))}class fc extends Sn{constructor(e,t,n,s){super(e,t,n,s),this.getFillerOffset=E_}}fc.prototype.is=function(r,e){return e?e===this.name&&(r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};function E_(){const r=[...this.getChildren()],e=r[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of r)if(!t.is("uiElement"))return null;return this.childCount}class Yd extends Ue(fc){constructor(e,t,n,s){super(e,t,n,s),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",c=>c&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Yd.prototype.is=function(r,e){return e?e===this.name&&(r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};const D_=Symbol("rootName");class S_ extends Yd{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(D_)}set rootName(e){this._setCustomProperty(D_,e)}set _name(e){this.name=e}}S_.prototype.is=function(r,e){return e?e===this.name&&(r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class No{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new M("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new M("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=ae._createAt(e.startPosition):this._position=ae._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let s;if(n instanceof Ze){if(e.isAtEnd)return this._position=ae._createAfter(n),this._next();s=n.data[e.offset]}else s=n.getChild(e.offset);if(s instanceof Sn){if(!this.shallow)e=new ae(s,0);else{if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}return this._position=e,this._formatReturnValue("elementStart",s,t,e,1)}if(s instanceof Ze){if(this.singleCharacters)return e=new ae(s,0),this._position=e,this._next();let c=s.data.length,d;return s==this._boundaryEndParent?(c=this.boundaries.end.offset,d=new Si(s,0,c),e=ae._createAfter(d)):(d=new Si(s,0,s.data.length),e.offset++),this._position=e,this._formatReturnValue("text",d,t,e,c)}if(typeof s=="string"){let c;this.singleCharacters?c=1:c=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const d=new Si(n,e.offset,c);return e.offset+=c,this._position=e,this._formatReturnValue("text",d,t,e,c)}return e=ae._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let s;if(n instanceof Ze){if(e.isAtStart)return this._position=ae._createBefore(n),this._previous();s=n.data[e.offset-1]}else s=n.getChild(e.offset-1);if(s instanceof Sn)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",s,t,e,1)):(e=new ae(s,s.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",s,t,e));if(s instanceof Ze){if(this.singleCharacters)return e=new ae(s,s.data.length),this._position=e,this._previous();let c=s.data.length,d;if(s==this._boundaryStartParent){const f=this.boundaries.start.offset;d=new Si(s,f,s.data.length-f),c=d.data.length,e=ae._createBefore(d)}else d=new Si(s,0,s.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",d,t,e,c)}if(typeof s=="string"){let c;if(this.singleCharacters)c=1;else{const f=n===this._boundaryStartParent?this.boundaries.start.offset:0;c=e.offset-f}e.offset-=c;const d=new Si(n,e.offset,c);return this._position=e,this._formatReturnValue("text",d,t,e,c)}return e=ae._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,s,c){return t instanceof Si&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction=="forward"&&!(this.boundaries&&this.boundaries.end.isEqual(this.position))?(s=ae._createAfter(t.textNode),this._position=s):n=ae._createAfter(t.textNode)),t.offsetInText===0&&(this.direction=="backward"&&!(this.boundaries&&this.boundaries.start.isEqual(this.position))?(s=ae._createBefore(t.textNode),this._position=s):n=ae._createBefore(t.textNode))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:s,length:c}}}}class ae extends To{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Yd);)if(e.parent)e=e.parent;else return null;return e}getShiftedBy(e){const t=ae._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new No(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let s=0;for(;t[s]==n[s]&&t[s];)s++;return s===0?null:t[s-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const s=vt(t,n);switch(s){case"prefix":return"before";case"extension":return"after";default:return t[s]<n[s]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new No(e)}clone(){return new ae(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ae)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new M("view-createpositionat-offset-required",n)}return new ae(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ae(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new M("view-position-after-root",e,{root:e});return new ae(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ae(e.textNode,e.offsetInText);if(!e.parent)throw new M("view-position-before-root",e,{root:e});return new ae(e.parent,e.index)}}ae.prototype.is=function(r){return r==="position"||r==="view:position"};class ve extends To{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new No({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Zd,{direction:"backward"}),t=this.end.getLastMatchingPosition(Zd);return e.parent.is("$text")&&e.isAtStart&&(e=ae._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ae._createAfter(t.parent)),new ve(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Zd);if(e.isAfter(this.end)||e.isEqual(this.end))return new ve(e,e);let t=this.end.getLastMatchingPosition(Zd,{direction:"backward"});const n=e.nodeAfter,s=t.nodeBefore;return n&&n.is("$text")&&(e=new ae(n,0)),s&&s.is("$text")&&(t=new ae(s,s.data.length)),new ve(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),s=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&s}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new ve(this.start,e.start)),this.containsPosition(e.end)&&t.push(new ve(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new ve(t,n)}return null}getWalker(e={}){return e.boundaries=this,new No(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new ve(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new No(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new No(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,s){return new this(new ae(e,t),new ae(n,s))}static _createFromPositionAndShift(e,t){const n=e,s=e.getShiftedBy(t);return t>0?new this(n,s):new this(s,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ae._createBefore(e),t)}}ve.prototype.is=function(r){return r==="range"||r==="view:range"};function Zd(r){return!!(r.item.is("attributeElement")||r.item.is("uiElement"))}class ai extends Me(To){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)(!e||t.start.isBefore(e.start))&&(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)(!e||t.end.isAfter(e.end))&&(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const s of e._ranges)if(t.isEqual(s)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=ri(this.getRanges()),n=ri(e.getRanges());if(t!=n)return!1;if(t==0)return!0;for(let s of this.getRanges()){s=s.getTrimmed();let c=!1;for(let d of e.getRanges())if(d=d.getTrimmed(),s.start.isEqual(d.start)&&s.end.isEqual(d.end)){c=!0;break}if(!c)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,s]=e;if(typeof n=="object"&&(s=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(s);else if(t instanceof ai||t instanceof bp)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof ve)this._setRanges([t],s&&s.backward),this._setFakeOptions(s);else if(t instanceof ae)this._setRanges([new ve(t)]),this._setFakeOptions(s);else if(t instanceof Io){const c=!!s&&!!s.backward;let d;if(n===void 0)throw new M("view-selection-setto-required-second-parameter",this);n=="in"?d=ve._createIn(t):n=="on"?d=ve._createOn(t):d=new ve(ae._createAt(t,n)),this._setRanges([d],c),this._setFakeOptions(s)}else if(zt(t))this._setRanges(t,s&&s.backward),this._setFakeOptions(s);else throw new M("view-selection-setto-not-selectable",this);this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new M("view-selection-setfocus-no-ranges",this);const n=ae._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const s=this.anchor;this._ranges.pop(),n.compareWith(s)=="before"?this._addRange(new ve(n,s),!0):this._addRange(new ve(s,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof ve))throw new M("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new M("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new ve(e.start,e.end))}}ai.prototype.is=function(r){return r==="selection"||r==="view:selection"};class bp extends Me(To){constructor(...e){super(),this._selection=new ai,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}bp.prototype.is=function(r){return r==="selection"||r=="documentSelection"||r=="view:selection"||r=="view:documentSelection"};class Ss extends re{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const wp=Symbol("bubbling contexts");function vp(r){class e extends r{fire(n,...s){try{const c=n instanceof re?n:new re(this,n),d=_p(this);if(!d.size)return;if(gc(c,"capturing",this),Ts(d,"$capture",c,...s))return c.return;const f=c.startRange||this.selection.getFirstRange(),p=f?f.getContainedElement():null,w=p?!!T_(d,p):!1;let _=p||iB(f);if(gc(c,"atTarget",_),!w){if(Ts(d,"$text",c,...s))return c.return;gc(c,"bubbling",_)}for(;_;){if(_.is("rootElement")){if(Ts(d,"$root",c,...s))return c.return}else if(_.is("element")&&Ts(d,_.name,c,...s))return c.return;if(Ts(d,_,c,...s))return c.return;_=_.parent,gc(c,"bubbling",_)}return gc(c,"bubbling",this),Ts(d,"$document",c,...s),c.return}catch(c){M.rethrowUnexpectedError(c,this)}}_addEventListener(n,s,c){const d=Ft(c.context||"$document"),f=_p(this);for(const p of d){let w=f.get(p);w||(w=new(Me()),f.set(p,w)),this.listenTo(w,n,s,c)}}_removeEventListener(n,s){const c=_p(this);for(const d of c.values())this.stopListening(d,n,s)}}return e}{const r=vp(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{vp[e]=r.prototype[e]})}function gc(r,e,t){r instanceof Ss&&(r._eventPhase=e,r._currentTarget=t)}function Ts(r,e,t,...n){const s=typeof e=="string"?r.get(e):T_(r,e);return s?(s.fire(t,...n),t.stop.called):!1}function T_(r,e){for(const[t,n]of r)if(typeof t=="function"&&t(e))return n;return null}function _p(r){return r[wp]||(r[wp]=new Map),r[wp]}function iB(r){if(!r)return null;const e=r.start.parent,t=r.end.parent,n=e.getPath(),s=t.getPath();return n.length>s.length?e:t}class Kd extends vp(Ue()){constructor(e){super(),this._postFixers=new Set,this.selection=new bp,this.roots=new $n({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}const I_=10;class Oo extends Sn{constructor(e,t,n,s){super(e,t,n,s),this._priority=I_,this._id=null,this._clonesGroup=null,this.getFillerOffset=rB}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new M("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}Oo.DEFAULT_PRIORITY=I_,Oo.prototype.is=function(r,e){return e?e===this.name&&(r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"):r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};function rB(){if(yp(this))return null;let r=this.parent;for(;r&&r.is("attributeElement");){if(yp(r)>1)return null;r=r.parent}return!r||yp(r)>1?null:this.childCount}function yp(r){return Array.from(r.getChildren()).filter(e=>!e.is("uiElement")).length}class Ap extends Sn{constructor(e,t,n,s){super(e,t,n,s),this.getFillerOffset=oB}_insertChild(e,t){if(t&&(t instanceof Io||Array.from(t).length>0))throw new M("view-emptyelement-cannot-add",[this,t]);return 0}}Ap.prototype.is=function(r,e){return e?e===this.name&&(r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"):r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};function oB(){return null}class Qd extends Sn{constructor(e,t,n,s){super(e,t,n,s),this.getFillerOffset=aB}_insertChild(e,t){if(t&&(t instanceof Io||Array.from(t).length>0))throw new M("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}Qd.prototype.is=function(r,e){return e?e===this.name&&(r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"):r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};function sB(r){r.document.on("arrowKey",(e,t)=>cB(e,t,r.domConverter),{priority:"low"})}function aB(){return null}function cB(r,e,t){if(e.keyCode==Be.arrowright){const n=e.domTarget.ownerDocument.defaultView.getSelection(),s=n.rangeCount==1&&n.getRangeAt(0).collapsed;if(s||e.shiftKey){const c=n.focusNode,d=n.focusOffset,f=t.domPositionToView(c,d);if(f===null)return;let p=!1;const w=f.getLastMatchingPosition(_=>(_.item.is("uiElement")&&(p=!0),!!(_.item.is("uiElement")||_.item.is("attributeElement"))));if(p){const _=t.viewPositionToDom(w);s?n.collapse(_.parent,_.offset):n.extend(_.parent,_.offset)}}}}class Cp extends Sn{constructor(e,t,n,s){super(e,t,n,s),this.getFillerOffset=lB}_insertChild(e,t){if(t&&(t instanceof Io||Array.from(t).length>0))throw new M("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}Cp.prototype.is=function(r,e){return e?e===this.name&&(r==="rawElement"||r==="view:rawElement"||r==="element"||r==="view:element"):r==="rawElement"||r==="view:rawElement"||r===this.name||r==="view:"+this.name||r==="element"||r==="view:element"||r==="node"||r==="view:node"};function lB(){return null}class Bo extends Me(To){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const s=dB(this.document,t);for(const c of s)c.parent!==null&&c._remove(),c.parent=this,this._children.splice(e,0,c),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Bo.prototype.is=function(r){return r==="documentFragment"||r==="view:documentFragment"};function dB(r,e){return typeof e=="string"?[new Ze(r,e)]:(zt(e)||(e=[e]),Array.from(e).map(t=>typeof t=="string"?new Ze(r,t):t instanceof Si?new Ze(r,t.data):t))}class M_{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Bo(this.document,e)}createText(e){return new Ze(this.document,e)}createAttributeElement(e,t,n={}){const s=new Oo(this.document,e,t);return typeof n.priority=="number"&&(s._priority=n.priority),n.id&&(s._id=n.id),n.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),s}createContainerElement(e,t,n={},s={}){let c=null;Xt(n)?s=n:c=n;const d=new fc(this.document,e,t,c);return s.renderUnsafeAttributes&&d._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),d}createEditableElement(e,t,n={}){const s=new Yd(this.document,e,t);return n.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),s}createEmptyElement(e,t,n={}){const s=new Ap(this.document,e,t);return n.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),s}createUIElement(e,t,n){const s=new Qd(this.document,e,t);return n&&(s.render=n),s}createRawElement(e,t,n,s={}){const c=new Cp(this.document,e,t);return n&&(c.render=n),s.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),c}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Xt(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ae?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new M("view-writer-break-non-container-element",this.document);if(!t.parent)throw new M("view-writer-break-root",this.document);if(e.isAtStart)return ae._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(ae._createAfter(t),n);const s=new ve(e,ae._createAt(t,"end")),c=new ae(n,0);this.move(s,c)}return ae._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const d=n.parent,f=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new ae(d,f))}const s=n.getChild(t-1),c=n.getChild(t);if(!s||!c)return e;if(s.is("$text")&&c.is("$text"))return O_(s,c);if(s.is("attributeElement")&&c.is("attributeElement")&&s.isSimilar(c)){const d=s.childCount;return s._appendChild(c.getChildren()),c._remove(),this._removeFromClonedElementsGroup(c),this.mergeAttributes(new ae(s,d))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!t||!n||!t.is("containerElement")||!n.is("containerElement"))throw new M("view-writer-merge-containers-invalid-position",this.document);const s=t.getChild(t.childCount-1),c=s instanceof Ze?ae._createAt(s,"end"):ae._createAt(t,"end");return this.move(ve._createIn(n),ae._createAt(t,"end")),this.remove(ve._createOn(n)),c}insert(e,t){t=zt(t)?[...t]:[t],B_(t,this.document);const n=t.reduce((d,f)=>{const p=d[d.length-1],w=!f.is("uiElement");return!p||p.breakAttributes!=w?d.push({breakAttributes:w,nodes:[f]}):p.nodes.push(f),d},[]);let s=null,c=e;for(const{nodes:d,breakAttributes:f}of n){const p=this._insertNodes(c,d,f);s||(s=p.start),c=p.end}return s?new ve(s,c):new ve(e)}remove(e){const t=e instanceof ve?e:ve._createOn(e);if(pc(t,this.document),t.isCollapsed)return new Bo(this.document);const{start:n,end:s}=this._breakAttributesRange(t,!0),c=n.parent,d=s.offset-n.offset,f=c._removeChildren(n.offset,d);for(const w of f)this._removeFromClonedElementsGroup(w);const p=this.mergeAttributes(n);return t.start=p,t.end=p.clone(),new Bo(this.document,f)}clear(e,t){pc(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const s of n){const c=s.item;let d;if(c.is("element")&&t.isSimilar(c))d=ve._createOn(c);else if(!s.nextPosition.isAfter(e.start)&&c.is("$textProxy")){const f=c.getAncestors().find(p=>p.is("element")&&t.isSimilar(p));f&&(d=ve._createIn(f))}d&&(d.end.isAfter(e.end)&&(d.end=e.end),d.start.isBefore(e.start)&&(d.start=e.start),this.remove(d))}}move(e,t){let n;if(t.isAfter(e.end)){t=this._breakAttributes(t,!0);const s=t.parent,c=s.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=s.childCount-c}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Oo))throw new M("view-writer-wrap-invalid-attribute",this.document);if(pc(e,this.document),e.isCollapsed){let n=e.start;n.parent.is("element")&&!uB(n.parent)&&(n=n.getLastMatchingPosition(c=>c.item.is("uiElement"))),n=this._wrapPosition(n,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(n),new ve(n)}else return this._wrapRange(e,t)}unwrap(e,t){if(!(t instanceof Oo))throw new M("view-writer-unwrap-invalid-attribute",this.document);if(pc(e,this.document),e.isCollapsed)return e;const{start:n,end:s}=this._breakAttributesRange(e,!0),c=n.parent,d=this._unwrapChildren(c,n.offset,s.offset,t),f=this.mergeAttributes(d.start);f.isEqual(d.start)||d.end.offset--;const p=this.mergeAttributes(d.end);return new ve(f,p)}rename(e,t){const n=new fc(this.document,e,t.getAttributes());return this.insert(ae._createAfter(t),n),this.move(ve._createIn(t),ae._createAt(n,0)),this.remove(ve._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ae._createAt(e,t)}createPositionAfter(e){return ae._createAfter(e)}createPositionBefore(e){return ae._createBefore(e)}createRange(e,t){return new ve(e,t)}createRangeOn(e){return ve._createOn(e)}createRangeIn(e){return ve._createIn(e)}createSelection(...e){return new ai(...e)}createSlot(e="children"){if(!this._slotFactory)throw new M("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let s;if(n?s=xp(e):s=e.parent.is("$text")?e.parent.parent:e.parent,!s)throw new M("view-writer-invalid-position-container",this.document);let c;n?c=this._breakAttributes(e,!0):c=e.parent.is("$text")?Ep(e):e;const d=s._insertChild(c.offset,t);for(const _ of t)this._addToClonedElementsGroup(_);const f=c.getShiftedBy(d),p=this.mergeAttributes(c);p.isEqual(c)||f.offset--;const w=this.mergeAttributes(f);return new ve(p,w)}_wrapChildren(e,t,n,s){let c=t;const d=[];for(;c<n;){const p=e.getChild(c),w=p.is("$text"),_=p.is("attributeElement");if(_&&this._wrapAttributeElement(s,p))d.push(new ae(e,c));else if(w||!_||hB(s,p)){const C=s._clone();p._remove(),C._appendChild(p),e._insertChild(c,C),this._addToClonedElementsGroup(C),d.push(new ae(e,c))}else this._wrapChildren(p,0,p.childCount,s);c++}let f=0;for(const p of d){if(p.offset-=f,p.offset==t)continue;this.mergeAttributes(p).isEqual(p)||(f++,n--)}return ve._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,s){let c=t;const d=[];for(;c<n;){const p=e.getChild(c);if(!p.is("attributeElement")){c++;continue}if(p.isSimilar(s)){const w=p.getChildren(),_=p.childCount;p._remove(),e._insertChild(c,w),this._removeFromClonedElementsGroup(p),d.push(new ae(e,c),new ae(e,c+_)),c+=_,n+=_-1;continue}if(this._unwrapAttributeElement(s,p)){d.push(new ae(e,c),new ae(e,c+1)),c++;continue}this._unwrapChildren(p,0,p.childCount,s),c++}let f=0;for(const p of d){if(p.offset-=f,p.offset==t||p.offset==n)continue;this.mergeAttributes(p).isEqual(p)||(f++,n--)}return ve._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:s}=this._breakAttributesRange(e,!0),c=n.parent,d=this._wrapChildren(c,n.offset,s.offset,t),f=this.mergeAttributes(d.start);f.isEqual(d.start)||d.end.offset--;const p=this.mergeAttributes(d.end);return new ve(f,p)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return N_(e.clone());e.parent.is("$text")&&(e=Ep(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const s=new ve(e,e.getShiftedBy(1));this.wrap(s,t);const c=new ae(n.parent,n.index);n._remove();const d=c.nodeBefore,f=c.nodeAfter;return d instanceof Ze&&f instanceof Ze?O_(d,f):N_(c)}_wrapAttributeElement(e,t){if(!P_(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(!(n==="class"||n==="style")&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n==="class"||n==="style"||t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t);for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!P_(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(!(n==="class"||n==="style")&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n==="class"||n==="style"||this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,s=e.end;if(pc(e,this.document),e.isCollapsed){const p=this._breakAttributes(e.start,t);return new ve(p,p)}const c=this._breakAttributes(s,t),d=c.parent.childCount,f=this._breakAttributes(n,t);return c.offset+=c.parent.childCount-d,new ve(f,c)}_breakAttributes(e,t=!1){const n=e.offset,s=e.parent;if(e.parent.is("emptyElement"))throw new M("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new M("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new M("view-writer-cannot-break-raw-element",this.document);if(!t&&s.is("$text")&&Dp(s.parent)||Dp(s))return e.clone();if(s.is("$text"))return this._breakAttributes(Ep(e),t);const c=s.childCount;if(n==c){const d=new ae(s.parent,s.index+1);return this._breakAttributes(d,t)}else if(n===0){const d=new ae(s.parent,s.index);return this._breakAttributes(d,t)}else{const d=s.index+1,f=s._clone();s.parent._insertChild(d,f),this._addToClonedElementsGroup(f);const p=s.childCount-n,w=s._removeChildren(n,p);f._appendChild(w);const _=new ae(s.parent,d);return this._breakAttributes(_,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const s of e.getChildren())this._addToClonedElementsGroup(s);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const s of e.getChildren())this._removeFromClonedElementsGroup(s);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function uB(r){return Array.from(r.getChildren()).some(e=>!e.is("uiElement"))}function xp(r){let e=r.parent;for(;!Dp(e);){if(!e)return;e=e.parent}return e}function hB(r,e){return r.priority<e.priority?!0:r.priority>e.priority?!1:r.getIdentity()<e.getIdentity()}function N_(r){const e=r.nodeBefore;if(e&&e.is("$text"))return new ae(e,e.data.length);const t=r.nodeAfter;return t&&t.is("$text")?new ae(t,0):r}function Ep(r){if(r.offset==r.parent.data.length)return new ae(r.parent.parent,r.parent.index+1);if(r.offset===0)return new ae(r.parent.parent,r.parent.index);const e=r.parent.data.slice(r.offset);return r.parent._data=r.parent.data.slice(0,r.offset),r.parent.parent._insertChild(r.parent.index+1,new Ze(r.root.document,e)),new ae(r.parent.parent,r.parent.index+1)}function O_(r,e){const t=r.data.length;return r._data+=e.data,e._remove(),new ae(r,t)}const fB=[Ze,Oo,fc,Ap,Cp,Qd];function B_(r,e){for(const t of r){if(!fB.some(n=>t instanceof n))throw new M("view-writer-insert-invalid-node-type",e);t.is("$text")||B_(t.getChildren(),e)}}function Dp(r){return r&&(r.is("containerElement")||r.is("documentFragment"))}function pc(r,e){const t=xp(r.start),n=xp(r.end);if(!t||!n||t!==n)throw new M("view-writer-invalid-range-container",e)}function P_(r,e){return r.id===null&&e.id===null}const z_=r=>r.createTextNode(" "),L_=r=>{const e=r.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},j_=r=>{const e=r.createElement("br");return e.dataset.ckeFiller="true",e},ci=7,mc="⁠".repeat(ci);function Tn(r){return typeof r=="string"?r.substr(0,ci)===mc:Tt(r)&&r.data.substr(0,ci)===mc}function kc(r){return r.data.length==ci&&Tn(r)}function R_(r){const e=typeof r=="string"?r:r.data;return Tn(r)?e.slice(ci):e}function gB(r){r.document.on("arrowKey",pB,{priority:"low"})}function pB(r,e){if(e.keyCode==Be.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,s=t.getRangeAt(0).startOffset;Tn(n)&&s<=ci&&t.collapse(n,0)}}}var F_=a(5037),Sp={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Sp.insert="head",Sp.singleton=!0,ge()(F_.Z,Sp),F_.Z.locals;class mB extends Ue(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),m.isBlink&&!m.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else if(e==="children")this.markedChildren.add(t);else throw new M("view-renderer-unknown-type",this)}}render(){if(this.isComposing&&!m.isAndroid)return;let e=null;const t=m.isBlink&&!m.isAndroid?!this.isSelecting:!0;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ae._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),s=n.parent.ownerDocument;Tn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=V_(s,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),s=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),c=this._diffNodeLists(n,s),d=this._findUpdateActions(c,n,s,bB);if(d.indexOf("update")!==-1){const f={equal:0,insert:0,delete:0};for(const p of d)if(p==="update"){const w=f.equal+f.insert,_=f.equal+f.delete,C=e.getChild(w);C&&!(C.is("uiElement")||C.is("rawElement"))&&this._updateElementMappings(C,n[_]),Gv(s[w]),f.equal++}else f[p]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ae._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Tt(t.parent)&&Tn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Tn(e))throw new M("view-renderer-filler-was-lost",this);kc(e)?e.remove():e.data=e.data.substr(ci),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!kB(t)||n===t.getFillerOffset())return!1;const s=e.nodeBefore,c=e.nodeAfter;return!(s instanceof Ze||c instanceof Ze||m.isAndroid&&(s||c))}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let c=this.domConverter.viewToDom(e).data;const d=t.inlineFillerPosition;d&&d.parent==e.parent&&d.offset==e.index&&(c=mc+c),U_(n,c)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(c=>c.name),s=e.getAttributeKeys();for(const c of s)this.domConverter.setDomElementAttribute(t,c,e.getAttribute(c),e);for(const c of n)e.hasAttribute(c)||this.domConverter.removeDomElementAttribute(t,c)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(m.isAndroid){let C=null;for(const O of Array.from(n.childNodes)){if(C&&Tt(C)&&Tt(O)){n.normalize();break}C=O}}const s=t.inlineFillerPosition,c=n.childNodes,d=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));s&&s.parent===e&&V_(n.ownerDocument,d,s.offset);const f=this._diffNodeLists(c,d),p=this._findUpdateActions(f,c,d,wB);let w=0;const _=new Set;for(const C of p)C==="delete"?(_.add(c[w]),Gv(c[w])):(C==="equal"||C==="update")&&w++;w=0;for(const C of p)C==="insert"?($v(n,w,d[w]),w++):C==="update"?(U_(c[w],d[w].data),w++):C==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(d[w])),w++);for(const C of _)C.parentNode||this.domConverter.unbindDomElement(C)}_diffNodeLists(e,t){return e=yB(e,this._fakeSelectionContainer),Z(e,t,vB.bind(null,this.domConverter))}_findUpdateActions(e,t,n,s){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let c=[],d=[],f=[];const p={equal:0,insert:0,delete:0};for(const w of e)w==="insert"?f.push(n[p.equal+p.insert]):w==="delete"?d.push(t[p.equal+p.delete]):(c=c.concat(Z(d,f,s).map(_=>_==="equal"?"update":_)),c.push("equal"),d=[],f=[]),p[w]++;return c.concat(Z(d,f,s).map(w=>w==="equal"?"update":w))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(m.isBlink&&!m.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0){this._removeDomSelection(),this._removeFakeSelection();return}const e=this.domConverter.mapViewToDom(this.selection.editableElement);!this.isFocused||!e||(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&m.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=AB(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;(!n.parentElement||n.parentElement!=e)&&e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const s=t.getSelection(),c=t.createRange();s.removeAllRanges(),c.selectNodeContents(n),s.addRange(c)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),s=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,s.parent,s.offset),m.isGecko&&_B(s,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return!(t&&this.selection.isEqual(t)||!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)?!0:t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,s=this.domConverter.mapDomToView(n);n&&s&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function kB(r){if(r.getAttribute("contenteditable")=="false")return!1;const e=r.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||e.getAttribute("contenteditable")=="true"}function V_(r,e,t){const n=e instanceof Array?e:e.childNodes,s=n[t];if(Tt(s))return s.data=mc+s.data,s;{const c=r.createTextNode(mc);return Array.isArray(e)?n.splice(t,0,c):$v(e,t,c),c}}function bB(r,e){return Br(r)&&Br(e)&&!Tt(r)&&!Tt(e)&&!uc(r)&&!uc(e)&&r.tagName.toLowerCase()===e.tagName.toLowerCase()}function wB(r,e){return Br(r)&&Br(e)&&Tt(r)&&Tt(e)}function vB(r,e,t){return e===t?!0:Tt(e)&&Tt(t)?e.data===t.data:!!(r.isBlockFiller(e)&&r.isBlockFiller(t))}function _B(r,e){const t=r.parent;if(t.nodeType!=Node.ELEMENT_NODE||r.offset!=t.childNodes.length-1)return;const n=t.childNodes[r.offset];n&&n.tagName=="BR"&&e.addRange(e.getRangeAt(0))}function yB(r,e){const t=Array.from(r);return t.length==0||!e||t[t.length-1]==e&&t.pop(),t}function AB(r){const e=r.createElement("div");return e.className="ck-fake-selection-container",Object.assign(e.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),e.textContent=" ",e}function U_(r,e){const t=r.data;if(t==e)return;const n=P(t,e);for(const s of n)s.type==="insert"?r.insertData(s.index,s.values.join("")):r.deleteData(s.index,s.howMany)}const CB=j_(be.document),xB=z_(be.document),EB=L_(be.document),Jd="data-ck-unsafe-attribute-",H_="data-ck-unsafe-element";class Xd{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Wn,this._inlineObjectElementMatcher=new Wn,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?be.document:be.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new ai(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"?!0:(e=e.toLowerCase(),e.startsWith("on")||e==="srcdoc"&&t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i)?!1:n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"?!0:!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data"){e.innerHTML=t;return}const n=new DOMParser().parseFromString(t,"text/html"),s=n.createDocumentFragment(),c=n.body.childNodes;for(;c.length>0;)s.appendChild(c[0]);const d=n.createTreeWalker(s,NodeFilter.SHOW_ELEMENT),f=[];let p;for(;p=d.nextNode();)f.push(p);for(const w of f){for(const C of w.getAttributeNames())this.setDomElementAttribute(w,C,w.getAttribute(C));const _=w.tagName.toLowerCase();this._shouldRenameElement(_)&&(q_(_),w.replaceWith(this._createReplacementDomElement(_,w)))}for(;e.firstChild;)e.firstChild.remove();e.append(s)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}else{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return e.name==="$comment"?n=this._domDocument.createComment(e.getCustomProperty("$rawContent")):n=e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(q_(e.name),n=this._createReplacementDomElement(e.name)):e.hasAttribute("xmlns")?n=this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):n=this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const s of e.getAttributeKeys())this.setDomElementAttribute(n,s,e.getAttribute(s),e)}if(t.withChildren!==!1)for(const s of this.viewChildrenToDom(e,t))n.appendChild(s);return n}}setDomElementAttribute(e,t,n,s){const c=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||s&&s.shouldRenderUnsafeAttribute(t);if(c||Q("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),!$3(t)){Q("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n});return}e.hasAttribute(t)&&!c?e.removeAttribute(t):e.hasAttribute(Jd+t)&&c&&e.removeAttribute(Jd+t),e.setAttribute(c?t:Jd+t,n)}removeDomElementAttribute(e,t){t!=H_&&(e.removeAttribute(t),e.removeAttribute(Jd+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let s=0;for(const c of e.getChildren()){n===s&&(yield this._getBlockFiller());const d=c.is("element")&&!!c.getCustomProperty("dataPipeline:transparentRendering")&&!Vt(c.getAttributes());d&&this.renderingMode=="data"?yield*this.viewChildrenToDom(c,t):(d&&Q("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:c}),yield this.viewToDom(c,t)),s++}n===s&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),s=this._domDocument.createRange();return s.setStart(t.parent,t.offset),s.setEnd(n.parent,n.offset),s}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let s=e.offset;return Tn(n)&&(s+=ci),{parent:n,offset:s}}else{let n,s,c;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;c=n.childNodes[0]}else{const f=e.nodeBefore;if(s=f.is("$text")?this.findCorrespondingDomText(f):this.mapViewToDom(f),!s)return null;n=s.parentNode,c=s.nextSibling}if(Tt(c)&&Tn(c))return{parent:c,offset:ci};const d=s?$d(s)+1:0;return{parent:n,offset:d}}}domToView(e,t={}){const n=[],s=this._domToView(e,t,n),c=s.next().value;return!c||(s.next(),this._processDomInlineNodes(null,n,t),c.is("$text")&&c.data.length==0)?null:c}*domChildrenToView(e,t={},n=[]){for(let s=0;s<e.childNodes.length;s++){const c=e.childNodes[s],d=this._domToView(c,t,n),f=d.next().value;f!==null&&(this._isBlockViewElement(f)&&this._processDomInlineNodes(e,n,t),yield f,d.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(TB(e))return new ai([]);if(e.rangeCount===1){let s=e.getRangeAt(0).startContainer;Tt(s)&&(s=s.parentNode);const c=this.fakeSelectionToView(s);if(c)return c}const t=this.isDomSelectionBackward(e),n=[];for(let s=0;s<e.rangeCount;s++){const c=e.getRangeAt(s),d=this.domRangeToView(c);d&&n.push(d)}return new ai(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new ve(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,$d(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return ae._createBefore(n);if(Tt(e)){if(kc(e))return this.domPositionToView(e.parentNode,$d(e));const s=this.findCorrespondingViewText(e);let c=t;return s?(Tn(e)&&(c-=ci,c=c<0?0:c),new ae(s,c)):null}else{if(t===0){const s=this.mapDomToView(e);if(s)return new ae(s,0)}else{const s=e.childNodes[t-1];if(Tt(s)&&kc(s)||s&&this.isBlockFiller(s))return this.domPositionToView(s.parentNode,$d(s));const c=Tt(s)?this.findCorrespondingViewText(s):this.mapDomToView(s);if(c&&c.parent)return new ae(c.parent,c.index+1)}return null}}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(kc(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const s=this.mapDomToView(n);if(s){const c=s.nextSibling;return c instanceof Ze?c:null}}else{const s=this.mapDomToView(e.parentNode);if(s){const c=s.getChild(0);return c instanceof Ze?c:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:s}=be.window,c=[];$_(t,d=>{const{scrollLeft:f,scrollTop:p}=d;c.push([f,p])}),t.focus(),$_(t,d=>{const[f,p]=c.shift();d.scrollLeft=f,d.scrollTop=p}),be.window.scrollTo(n,s)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(CB):e.tagName==="BR"&&W_(e,this.blockElements)&&e.parentNode.childNodes.length===1?!0:e.isEqualNode(EB)||SB(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=F3(e);for(t.pop();t.length;){const n=t.pop(),s=this._domToViewMapping.get(n);if(s&&(s.is("uiElement")||s.is("rawElement")))return s}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return z_(this._domDocument);case"markedNbsp":return L_(this._domDocument);case"br":return j_(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Tt(e)&&Tn(e)&&t<ci||this.isElement(e)&&Tn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!(n&&(n.is("uiElement")||n.is("rawElement")))}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const s=this.getHostViewElement(e);if(s)return s;if(uc(e)&&t.skipComments)return null;if(Tt(e)){if(kc(e))return null;{const c=e.data;if(c==="")return null;const d=new Ze(this.document,c);return n.push(d),d}}else{let c=this.mapDomToView(e);if(c)return this._isInlineObjectElement(c)&&n.push(c),c;if(this.isDocumentFragment(e))c=new Bo(this.document),t.bind&&this.bindDocumentFragments(e,c);else{c=this._createViewElement(e,t),t.bind&&this.bindElements(e,c);const f=e.attributes;if(f)for(let p=f.length,w=0;w<p;w++)c._setAttribute(f[w].name,f[w].value);if(this._isViewElementWithRawContent(c,t))return c._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(c)||n.push(c),c;if(uc(e))return c._setCustomProperty("$rawContent",e.data),c}yield c;const d=[];if(t.withChildren!==!1)for(const f of this.domChildrenToView(e,t,d))c._appendChild(f);if(this._isInlineObjectElement(c))n.push(c);else for(const f of d)n.push(f)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let s=!1;for(let c=0;c<t.length;c++){const d=t[c];if(!d.is("$text")){s=!1;continue}let f,p=!1;if(DB(d,this.preElements))f=R_(d.data);else{f=d.data.replace(/[ \n\t\r]{1,}/g," "),p=/[^\S\u00A0]/.test(f.charAt(f.length-1));const w=c>0?t[c-1]:null,_=c+1<t.length?t[c+1]:null,C=!w||w.is("element")&&w.name=="br"||s,O=_?!1:!Tn(d.data);n.withChildren!==!1&&(C&&(f=f.replace(/^ /,"")),O&&(f=f.replace(/ $/,""))),f=R_(f),f=f.replace(/ \u00A0/g,"  ");const z=_&&_.is("element")&&_.name!="br",H=_&&_.is("$text")&&_.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(f)||!_||z||H)&&(f=f.replace(/\u00A0$/," ")),(C||w&&w.is("element")&&w.name!="br")&&(f=f.replace(/^\u00A0/," "))}f.length==0&&d.parent?(d._remove(),t.splice(c,1),c--):(d._data=f,s=p)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n)||!n)&&(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),s=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";(t.charAt(t.length-2)==" "||!n||s)&&(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new No({startPosition:t?ae._createAfter(e):ae._createBefore(e),direction:t?"forward":"backward"});for(const s of n){if(s.item.is("element","br"))return null;if(this._isInlineObjectElement(s.item))return s.item;if(s.item.is("containerElement"))return null;if(s.item.is("$textProxy"))return s.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return e.is("element")?e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e):!1}_createViewElement(e,t){if(uc(e))return new Qd(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Sn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(H_,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const s of t.getAttributeNames())n.setAttribute(s,t.getAttribute(s))}return n}}function DB(r,e){return r.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function $_(r,e){let t=r;for(;t;)e(t),t=t.parentElement}function SB(r,e){return r.isEqualNode(xB)&&W_(r,e)&&r.parentNode.childNodes.length===1}function W_(r,e){const t=r.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function q_(r){r==="script"&&Q("domconverter-unsafe-script-element-detected"),r==="style"&&Q("domconverter-unsafe-style-element-detected")}function TB(r){if(!m.isGecko||!r.rangeCount)return!1;const e=r.getRangeAt(0).startContainer;try{Object.prototype.toString.call(e)}catch{return!0}return!1}class Ti extends Dn(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!e||e.nodeType!==1?!1:e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}var IB=A_(function(r,e){ue(e,Es(e),r)});const G_=IB;class Is{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,G_(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Po extends Ti{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(n=>{this.listenTo(e,n,(s,c)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(c.target)&&this.onDomEvent(c)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Is(this.view,t,n))}}class MB extends Po{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Ds(this)}};this.fire(e.type,e,t)}}var NB=function(){return Cn.Date.now()};const Tp=NB;var OB=/\s/;function BB(r){for(var e=r.length;e--&&OB.test(r.charAt(e)););return e}const PB=BB;var zB=/^\s+/;function LB(r){return r&&r.slice(0,PB(r)+1).replace(zB,"")}const jB=LB;var Y_=0/0,RB=/^[-+]0x[0-9a-f]+$/i,FB=/^0b[01]+$/i,VB=/^0o[0-7]+$/i,UB=parseInt;function HB(r){if(typeof r=="number")return r;if(qd(r))return Y_;if(tt(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=tt(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=jB(r);var t=FB.test(r);return t||VB.test(r)?UB(r.slice(2),t?2:8):RB.test(r)?Y_:+r}const Z_=HB;var $B="Expected a function",WB=Math.max,qB=Math.min;function GB(r,e,t){var n,s,c,d,f,p,w=0,_=!1,C=!1,O=!0;if(typeof r!="function")throw new TypeError($B);e=Z_(e)||0,tt(t)&&(_=!!t.leading,C="maxWait"in t,c=C?WB(Z_(t.maxWait)||0,e):c,O="trailing"in t?!!t.trailing:O);function z(pe){var De=n,me=s;return n=s=void 0,w=pe,d=r.apply(me,De),d}function H(pe){return w=pe,f=setTimeout(we,e),_?z(pe):d}function ne(pe){var De=pe-p,me=pe-w,lt=e-De;return C?qB(lt,c-me):lt}function he(pe){var De=pe-p,me=pe-w;return p===void 0||De>=e||De<0||C&&me>=c}function we(){var pe=Tp();if(he(pe))return He(pe);f=setTimeout(we,ne(pe))}function He(pe){return f=void 0,O&&n?z(pe):(n=s=void 0,d)}function rt(){f!==void 0&&clearTimeout(f),w=0,n=p=s=f=void 0}function mt(){return f===void 0?d:He(Tp())}function yt(){var pe=Tp(),De=he(pe);if(n=arguments,s=this,p=pe,De){if(f===void 0)return H(p);if(C)return clearTimeout(f),f=setTimeout(we,e),z(p)}return f===void 0&&(f=setTimeout(we,e)),d}return yt.cancel=rt,yt.flush=mt,yt}const bc=GB;class YB extends Ti{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=bc(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new ai(t.getRanges(),{backward:t.isBackward,fake:!1});(e==Be.arrowleft||e==Be.arrowup)&&n.setTo(n.getFirstPosition()),(e==Be.arrowright||e==Be.arrowdown)&&n.setTo(n.getLastPosition());const s={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}var ZB="__lodash_hash_undefined__";function KB(r){return this.__data__.set(r,ZB),this}const QB=KB;function JB(r){return this.__data__.has(r)}const XB=JB;function eu(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new Cs;++e<t;)this.add(r[e])}eu.prototype.add=eu.prototype.push=QB,eu.prototype.has=XB;const eP=eu;function tP(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1}const nP=tP;function iP(r,e){return r.has(e)}const rP=iP;var oP=1,sP=2;function aP(r,e,t,n,s,c){var d=t&oP,f=r.length,p=e.length;if(f!=p&&!(d&&p>f))return!1;var w=c.get(r),_=c.get(e);if(w&&_)return w==e&&_==r;var C=-1,O=!0,z=t&sP?new eP:void 0;for(c.set(r,e),c.set(e,r);++C<f;){var H=r[C],ne=e[C];if(n)var he=d?n(ne,H,C,e,r,c):n(H,ne,C,r,e,c);if(he!==void 0){if(he)continue;O=!1;break}if(z){if(!nP(e,function(we,He){if(!rP(z,He)&&(H===we||s(H,we,t,n,c)))return z.push(He)})){O=!1;break}}else if(!(H===ne||s(H,ne,t,n,c))){O=!1;break}}return c.delete(r),c.delete(e),O}const K_=aP;function cP(r){var e=-1,t=Array(r.size);return r.forEach(function(n,s){t[++e]=[s,n]}),t}const lP=cP;function dP(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t}const uP=dP;var hP=1,fP=2,gP="[object Boolean]",pP="[object Date]",mP="[object Error]",kP="[object Map]",bP="[object Number]",wP="[object RegExp]",vP="[object Set]",_P="[object String]",yP="[object Symbol]",AP="[object ArrayBuffer]",CP="[object DataView]",Q_=Vn?Vn.prototype:void 0,Ip=Q_?Q_.valueOf:void 0;function xP(r,e,t,n,s,c,d){switch(t){case CP:if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case AP:return!(r.byteLength!=e.byteLength||!c(new Rd(r),new Rd(e)));case gP:case pP:case bP:return xr(+r,+e);case mP:return r.name==e.name&&r.message==e.message;case wP:case _P:return r==e+"";case kP:var f=lP;case vP:var p=n&hP;if(f||(f=uP),r.size!=e.size&&!p)return!1;var w=d.get(r);if(w)return w==e;n|=fP,d.set(r,e);var _=K_(f(r),f(e),n,s,c,d);return d.delete(r),_;case yP:if(Ip)return Ip.call(r)==Ip.call(e)}return!1}const EP=xP;var DP=1,SP=Object.prototype,TP=SP.hasOwnProperty;function IP(r,e,t,n,s,c){var d=t&DP,f=qg(r),p=f.length,w=qg(e),_=w.length;if(p!=_&&!d)return!1;for(var C=p;C--;){var O=f[C];if(!(d?O in e:TP.call(e,O)))return!1}var z=c.get(r),H=c.get(e);if(z&&H)return z==e&&H==r;var ne=!0;c.set(r,e),c.set(e,r);for(var he=d;++C<p;){O=f[C];var we=r[O],He=e[O];if(n)var rt=d?n(He,we,O,e,r,c):n(we,He,O,r,e,c);if(!(rt===void 0?we===He||s(we,He,t,n,c):rt)){ne=!1;break}he||(he=O=="constructor")}if(ne&&!he){var mt=r.constructor,yt=e.constructor;mt!=yt&&"constructor"in r&&"constructor"in e&&!(typeof mt=="function"&&mt instanceof mt&&typeof yt=="function"&&yt instanceof yt)&&(ne=!1)}return c.delete(r),c.delete(e),ne}const MP=IP;var NP=1,J_="[object Arguments]",X_="[object Array]",tu="[object Object]",OP=Object.prototype,ey=OP.hasOwnProperty;function BP(r,e,t,n,s,c){var d=Rt(r),f=Rt(e),p=d?X_:lc(r),w=f?X_:lc(e);p=p==J_?tu:p,w=w==J_?tu:w;var _=p==tu,C=w==tu,O=p==w;if(O&&ac(r)){if(!ac(e))return!1;d=!0,_=!1}if(O&&!_)return c||(c=new Mr),d||Ug(r)?K_(r,e,t,n,s,c):EP(r,e,p,t,n,s,c);if(!(t&NP)){var z=_&&ey.call(r,"__wrapped__"),H=C&&ey.call(e,"__wrapped__");if(z||H){var ne=z?r.value():r,he=H?e.value():e;return c||(c=new Mr),s(ne,he,t,n,c)}}return O?(c||(c=new Mr),MP(r,e,t,n,s,c)):!1}const PP=BP;function ty(r,e,t,n,s){return r===e?!0:r==null||e==null||!cn(r)&&!cn(e)?r!==r&&e!==e:PP(r,e,t,n,ty,s)}const ny=ty;function zP(r,e,t){t=typeof t=="function"?t:void 0;var n=t?t(r,e):void 0;return n===void 0?ny(r,e,void 0,t):!!n}const LP=zP;class iy extends Ti{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,s=new Set;for(const d of e){const f=t.mapDomToView(d.target);f&&(f.is("uiElement")||f.is("rawElement")||d.type==="childList"&&!this._isBogusBrMutation(d)&&s.add(f))}for(const d of e){const f=t.mapDomToView(d.target);if(!(f&&(f.is("uiElement")||f.is("rawElement")))&&d.type==="characterData"){const p=t.findCorrespondingViewText(d.target);p&&!s.has(p.parent)?n.add(p):!p&&Tn(d.target)&&s.add(t.mapDomToView(d.target.parentNode))}}let c=!1;for(const d of n)c=!0,this.renderer.markToSync("text",d);for(const d of s){const f=t.mapViewToDom(d),p=Array.from(d.getChildren()),w=Array.from(t.domChildrenToView(f,{withChildren:!1}));LP(p,w,jP)||(c=!0,this.renderer.markToSync("children",d))}c&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function jP(r,e){if(!Array.isArray(r))return r===e?!0:r.is("$text")&&e.is("$text")?r.data===e.data:!1}class nu extends Po{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,s)=>{const c=t.selection.editableElement;(c===null||c===s.target)&&(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class RP extends Ti{constructor(e){super(e),this.mutationObserver=e.getObserver(iy),this.focusObserver=e.getObserver(nu),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=bc(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=bc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},s=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",n,{priority:"highest"}),this.listenTo(e,"keydown",s,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",s,{priority:"highest",useCapture:!0}),!this._documents.has(t)&&(this.listenTo(t,"mouseup",s,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(c,d)=>{this.document.isComposing&&!m.isAndroid||(this._handleSelectionChange(d,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const s=this.domConverter.domSelectionToView(n);if(s.rangeCount==0){this.view.hasDomSelection=!1;return}if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!(this.selection.isEqual(s)&&this.domConverter.isDomSelectionCorrect(n))){if(++this._loopbackCounter>60){this._reportInfiniteLoop();return}if(this.selection.isSimilar(s))this.view.forceRender();else{const c={oldSelection:this.selection,newSelection:s,domSelection:n};this.document.fire("selectionChange",c),this._fireSelectionChangeDoneDebounced(c)}}}_clearInfiniteLoop(){this._loopbackCounter=0}}class FP extends Po{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class ry{constructor(e,t={}){this._files=t.cacheFiles?oy(e):null,this._native=e}get files(){return this._files||(this._files=oy(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function oy(r){const e=Array.from(r.files||[]),t=Array.from(r.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class VP extends Po{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,s=n.document;let c=null,d=null,f=[];if(e.dataTransfer&&(c=new ry(e.dataTransfer)),e.data!==null?d=e.data:c&&(d=c.getData("text/plain")),s.selection.isFake)f=Array.from(s.selection.getRanges());else if(t.length)f=t.map(p=>{const w=n.domConverter.domPositionToView(p.startContainer,p.startOffset),_=n.domConverter.domPositionToView(p.endContainer,p.endOffset);if(w)return n.createRange(w,_);if(_)return n.createRange(_)}).filter(p=>!!p);else if(m.isAndroid){const p=e.target.ownerDocument.defaultView.getSelection();f=Array.from(n.domConverter.domSelectionToView(p).getRanges())}if(m.isAndroid&&e.inputType=="insertCompositionText"&&d&&d.endsWith(`
`)){this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(f[0].end)]});return}if(e.inputType=="insertText"&&d&&d.includes(`
`,jj=53,Rj=10,Fj=50,Vj=350,Uj="Powered by";class Hj extends Dn(){constructor(e){super(),this.editor=e,this._balloonView=null,this._lastFocusedEditableElement=null,this._showBalloonThrottled=Tc(this._showBalloon.bind(this),50,{leading:!0}),e.on("ready",this._handleEditorReady.bind(this))}destroy(){const e=this._balloonView;e&&(e.unpin(),this._balloonView=null),this._showBalloonThrottled.cancel(),this.stopListening()}_handleEditorReady(){const e=this.editor;!e.config.get("ui.poweredBy.forceVisible")&&gN(e.config.get("licenseKey"))==="VALID"||e.ui.view&&(e.ui.focusTracker.on("change:isFocused",(n,s,c)=>{this._updateLastFocusedEditableElement(),c?this._showBalloon():this._hideBalloon()}),e.ui.focusTracker.on("change:focusedElement",(n,s,c)=>{this._updateLastFocusedEditableElement(),c&&this._showBalloon()}),e.ui.on("update",()=>{this._showBalloonThrottled()}))}_createBalloonView(){const e=this.editor,t=this._balloonView=new Yt,n=hC(e),s=new $j(e.locale,n.label);t.content.add(s),t.set({class:"ck-powered-by-balloon"}),e.ui.view.body.add(t),e.ui.focusTracker.add(t.element),this._balloonView=t}_showBalloon(){if(!this._lastFocusedEditableElement)return;const e=Wj(this.editor,this._lastFocusedEditableElement);e&&(this._balloonView||this._createBalloonView(),this._balloonView.pin(e))}_hideBalloon(){this._balloonView&&this._balloonView.unpin()}_updateLastFocusedEditableElement(){const e=this.editor,t=e.ui.focusTracker.isFocused,n=e.ui.focusTracker.focusedElement;if(!t||!n){this._lastFocusedEditableElement=null;return}const s=Array.from(e.ui.getEditableElementsNames()).map(c=>e.ui.getEditableElement(c));s.includes(n)?this._lastFocusedEditableElement=n:this._lastFocusedEditableElement=s[0]}}class $j extends Ae{constructor(e,t){super(e);const n=new or,s=this.bindTemplate;n.set({content:Lj,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:jj+"px",height:Rj+"px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:s.to(c=>c.preventDefault())}}]})}}function Wj(r,e){const t=hC(r),n=t.side==="right"?qj(e,t):Gj(e,t);return{target:e,positions:[n]}}function qj(r,e){return uC(r,e,(t,n)=>t.left+t.width-n.width-e.horizontalOffset)}function Gj(r,e){return uC(r,e,t=>t.left+e.horizontalOffset)}function uC(r,e,t){return(n,s)=>{const c=new Ne(r);if(c.width<Vj||c.height<Fj)return null;let d;e.position==="inside"?d=c.bottom-s.height:d=c.bottom-s.height/2,d-=e.verticalOffset;const f=t(c,s),w=n.clone().moveTo(f,d).getIntersection(s.clone().moveTo(f,d)).getVisible();return!w||w.getArea()<s.getArea()?null:{top:d,left:f,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function hC(r){const e=r.config.get("ui.poweredBy"),t=e&&e.position||"border";return{position:t,label:Uj,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:r.locale.contentLanguageDirection==="ltr"?"right":"left",...e}}class Yj extends Ue(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new Bj(e),this.focusTracker=new gn,this.tooltipManager=new Ht(e),this.poweredBy=new Hj(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,s;e.keystrokes.set("Alt+F10",(c,d)=>{const f=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(f)&&!Array.from(t.domRoots.values()).includes(f)&&(n=f);const p=this._getCurrentFocusedToolbarDefinition();(!p||!s)&&(s=this._getFocusableCandidateToolbarDefinitions());for(let w=0;w<s.length;w++){const _=s.shift();if(s.push(_),_!==p&&this._focusFocusableCandidateToolbar(_)){p&&p.options.afterBlur&&p.options.afterBlur();break}}d()}),e.keystrokes.set("Esc",(c,d)=>{const f=this._getCurrentFocusedToolbarDefinition();f&&(n?(n.focus(),n=null):e.editing.view.focus(),f.options.afterBlur&&f.options.afterBlur(),d())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:s}=t;(So(n.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,n)=>fC(t)-fC(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),So(t.element)?(t.focus(),!0):!1}_handleScrollToTheSelection(e,t){const n={top:0,bottom:0,left:0,right:0,...this.viewportOffset};t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function fC(r){const{toolbarView:e,options:t}=r;let n=10;return So(e.element)&&n--,t.isContextual&&n--,n}var gC=a(9847),xm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};xm.insert="head",xm.singleton=!0,ge()(gC.Z,xm),gC.Z.locals;class Zj extends Ae{constructor(e){super(e),this.body=new Y6(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class Kj extends Ae{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;e.isRenderingInProgress?n(this):t(this);function t(s){e.change(c=>{const d=e.document.getRoot(s.name);c.addClass(s.isFocused?"ck-focused":"ck-blurred",d),c.removeClass(s.isFocused?"ck-blurred":"ck-focused",d)})}function n(s){e.once("change:isRenderingInProgress",(c,d,f)=>{f?n(s):t(s)})}}}class Qj extends Kj{constructor(e,t,n,s={}){super(e,t,n);const c=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>c("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var pC=a(1874),Em={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Em.insert="head",Em.singleton=!0,ge()(pC.Z,Em),pC.Z.locals;class mC extends l_{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class kC extends Ue(){constructor(e,t){super(),t&&G_(this,t),e&&this.set(e)}}const Jj='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>',Xj='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>';var bC=a(7592),Dm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Dm.insert="head",Dm.singleton=!0,ge()(bC.Z,Dm),bC.Z.locals;var wC=a(6356),Sm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Sm.insert="head",Sm.singleton=!0,ge()(wC.Z,Sm),wC.Z.locals;const pu=dc("px");class mu extends ie{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,s=t.document.selection.editableElement;return s?t.domConverter.mapViewToDom(s.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new M("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t)){this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,(!this._visibleStack||e.singleViewMode)&&this.showStack(t);return}const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new M("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new M("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Yt(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(n=>n[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new e7(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,s)=>!s&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,s)=>{if(s<2)return"";const c=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[c,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new t7(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class e7 extends Ae{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new gn,this.buttonPrevView=this._createButtonView(t("Previous"),Jj),this.buttonNextView=this._createButtonView(t("Next"),Xj),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new We(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class t7 extends Ae{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:n.to("top",pu),left:n.to("left",pu),width:n.to("width",pu),height:n.to("height",pu)}},children:this.content}),this.on("change:numberOfPanels",(s,c,d,f)=>{d>f?this._addPanels(d-f):this._removePanels(f-d),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Ae;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:s}=new Ne(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:s})}}}var vC=a(3707),Tm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Tm.insert="head",Tm.singleton=!0,ge()(vC.Z,Tm),vC.Z.locals;class n7 extends Nc{constructor(e,t){const n=e.t,s=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Oc},t);super(e,s.creator),this.label=t.label,this._viewConfig=s,this._viewConfig.showIcon&&(this.iconView=new or,this.iconView.content=Te.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new We(e),this.resetButtonView.set({label:n("Clear"),icon:Te.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",c=>!c),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class i7 extends Ae{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class r7 extends Ae{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new gn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new sr({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var _C=/[\\^$.*+?()[\]{}|]/g,o7=RegExp(_C.source);function s7(r){return r=up(r),r&&o7.test(r)?r.replace(_C,"\\$&"):r}const yC=s7;var AC=a(9332),Im={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Im.insert="head",Im.singleton=!0,ge()(AC.Z,Im),AC.Z.locals;class a7 extends Ae{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new gn,this.keystrokes=new si,this.resultsView=new r7(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new i7,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new sr({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:s,totalItemsCount:c})=>{this.resultsCount=s,this.totalItemsCount=c}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(yC(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",{query:e,...n})}_createSearchTextQueryView(){const e=new n7(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;this.on("search",(s,c)=>{if(c.resultsCount)t.set({isVisible:!1});else{const d=this._config.infoView&&this._config.infoView.text;let f,p;c.totalItemsCount?d&&d.notFound?(f=d.notFound.primary,p=d.notFound.secondary):(f=e("No results found"),p=""):d&&d.noSearchableItems?(f=d.noSearchableItems.primary,p=d.noSearchableItems.secondary):(f=e("No searchable items"),p=""),t.set({primaryText:n(f,c),secondaryText:n(p,c),isVisible:!0})}});function n(s,{query:c,resultsCount:d,totalItemsCount:f}){return typeof s=="function"?s(c,d,f):s}}}var CC=a(4029),Mm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Mm.insert="head",Mm.singleton=!0,ge()(CC.Z,Mm),CC.Z.locals;class Pc extends a7{constructor(e,t){super(e,t),this._config=t;const n=dc("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const s=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[s.if("isVisible","ck-hidden",c=>!c),s.to("_position",c=>`ck-search__results_${c}`)],style:{width:s.to("_width",n)}}}),this.focusTracker.on("change:isFocused",(c,d,f)=>{this._updateResultsVisibility(),f?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(c,d)=>{this.resultsView.isVisible=!1,d()}),this.listenTo(be.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(c,{value:d})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=d,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Ne(this.queryView.fieldView.element).width;const e=Pc._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Pc.defaultResultsPositions});this.resultsView._position=e?e.name:"s"}_updateResultsVisibility(){const e=typeof this._config.queryMinChars>"u"?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=e}}Pc.defaultResultsPositions=[r=>({top:r.bottom,left:r.left,name:"s"}),(r,e)=>({top:r.top-e.height,left:r.left,name:"n"})],Pc._getOptimalPosition=np;var xC=a(4746),Nm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Nm.insert="head",Nm.singleton=!0,ge()(xC.Z,Nm),xC.Z.locals;var EC=a(6446),Om={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Om.insert="head",Om.singleton=!0,ge()(EC.Z,Om),EC.Z.locals;var DC=a(4176),Bm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Bm.insert="head",Bm.singleton=!0,ge()(DC.Z,Bm),DC.Z.locals;class c7 extends Yj{constructor(e,t){super(e),this.view=t,this._toolbarConfig=BA(e.config.get("toolbar"))}get element(){return this.view.editable.element}init(){const e=this.editor,t=this.view,n=e.editing.view,s=t.editable,c=n.document.getRoot();s.name=c.rootName,t.render();const d=s.element;this.setEditableElement(s.name,d),s.bind("isFocused").to(this.focusTracker),n.attachDomRoot(d),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.editor,t=this.view,n=t.editable.element,s=t.toolbar;t.panel.bind("isVisible").to(this.focusTracker,"isFocused"),t.bind("viewportTopOffset").to(this,"viewportOffset",({top:c})=>c||0),t.listenTo(e.ui,"update",()=>{t.panel.isVisible&&t.panel.pin({target:n,positions:t.panelPositions})}),s.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(s)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),s=e.config.get("placeholder");if(s){const c=typeof s=="string"?s:s[n.rootName];c&&(n.placeholder=c)}h_({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}}const l7=dc("px");class d7 extends Zj{constructor(e,t,n,s={}){super(e);const c=e.t;this.toolbar=new sm(e,{shouldGroupWhenFull:s.shouldToolbarGroupWhenFull,isFloating:!0}),this.set("viewportTopOffset",0),this.panel=new Yt(e),this.panelPositions=this._getPanelPositions(),this.panel.extendTemplate({attributes:{class:"ck-toolbar-container"}}),this.editable=new Qj(e,t,n,{label:d=>c("Rich Text Editor. Editing area: %0",d.name)}),this._resizeObserver=null}render(){if(super.render(),this.body.add(this.panel),this.registerChild(this.editable),this.panel.content.add(this.toolbar),this.toolbar.options.shouldGroupWhenFull){const t=this.editable.element;this._resizeObserver=new Xe(t,()=>{this.toolbar.maxWidth=l7(new Ne(t).width)})}}destroy(){super.destroy(),this._resizeObserver&&this._resizeObserver.destroy()}_getPanelPositionTop(e,t){let n;return e.top>t.height+this.viewportTopOffset?n=e.top-t.height:e.bottom>t.height+this.viewportTopOffset+50?n=this.viewportTopOffset:n=e.bottom,n}_getPanelPositions(){const e=[(t,n)=>({top:this._getPanelPositionTop(t,n),left:t.left,name:"toolbar_west",config:{withArrow:!1}}),(t,n)=>({top:this._getPanelPositionTop(t,n),left:t.left+t.width-n.width,name:"toolbar_east",config:{withArrow:!1}})];return this.locale.uiLanguageDirection==="ltr"?e:e.reverse()}}class ku extends au(Vp(E6)){constructor(e,t={}){if(!bu(e)&&t.initialData!==void 0)throw new M("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",u7(e)),this.model.document.createRoot(),bu(e)&&(this.sourceElement=e,T6(this,e));const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new d7(this.locale,this.editing.view,this.sourceElement,{shouldToolbarGroupWhenFull:n});this.ui=new c7(this,s),D6(this)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,t={}){return new Promise(n=>{if(bu(e)&&e.tagName==="TEXTAREA")throw new M("editor-wrong-element",null);const s=new this(e,t);n(s.initPlugins().then(()=>s.ui.init()).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}ku.Context=c_,ku.EditorWatchdog=cA,ku.ContextWatchdog=P6;function u7(r){return bu(r)?V3(r):r}function bu(r){return Do(r)}const Pm=["left","right","center","justify"];function SC(r){return Pm.includes(r)}function TC(r,e){return e.contentLanguageDirection=="rtl"?r==="right":r==="left"}function IC(r){const e=r.map(n=>{let s;return typeof n=="string"?s={name:n}:s=n,s}).filter(n=>{const s=Pm.includes(n.name);return s||Q("alignment-config-name-not-recognized",{option:n}),s}),t=e.filter(n=>!!n.className).length;if(t&&t<e.length)throw new M("alignment-config-classnames-are-missing",{configuredOptions:r});return e.forEach((n,s,c)=>{const d=c.slice(s+1);if(d.some(p=>p.name==n.name))throw new M("alignment-config-name-already-defined",{option:n,configuredOptions:r});if(n.className&&d.some(w=>w.className==n.className))throw new M("alignment-config-classname-already-defined",{option:n,configuredOptions:r})}),e}const zm="alignment";class h7 extends et{refresh(){const t=this.editor.locale,n=Vt(this.editor.model.document.selection.getSelectedBlocks());this.isEnabled=!!n&&this._canBeAligned(n),this.isEnabled&&n.hasAttribute("alignment")?this.value=n.getAttribute("alignment"):this.value=t.contentLanguageDirection==="rtl"?"right":"left"}execute(e={}){const t=this.editor,n=t.locale,s=t.model,c=s.document,d=e.value;s.change(f=>{const p=Array.from(c.selection.getSelectedBlocks()).filter(C=>this._canBeAligned(C)),w=p[0].getAttribute("alignment");TC(d,n)||w===d||!d?f7(p,f):g7(p,f,d)})}_canBeAligned(e){return this.editor.model.schema.checkAttribute(e,zm)}}function f7(r,e){for(const t of r)e.removeAttribute(zm,t)}function g7(r,e,t){for(const n of r)e.setAttribute(zm,t,n)}class p7 extends ie{static get pluginName(){return"AlignmentEditing"}constructor(e){super(e),e.config.define("alignment",{options:Pm.map(t=>({name:t}))})}init(){const e=this.editor,t=e.locale,n=e.model.schema,c=IC(e.config.get("alignment.options")).filter(w=>SC(w.name)&&!TC(w.name,t)),d=c.some(w=>!!w.className);n.extend("$block",{allowAttributes:"alignment"}),e.model.schema.setAttributeProperties("alignment",{isFormatting:!0}),d?e.conversion.attributeToAttribute(w7(c)):e.conversion.for("downcast").attributeToAttribute(m7(c));const f=k7(c);for(const w of f)e.conversion.for("upcast").attributeToAttribute(w);const p=b7(c);for(const w of p)e.conversion.for("upcast").attributeToAttribute(w);e.commands.add("alignment",new h7(e))}}function m7(r){const e={};for(const{name:n}of r)e[n]={key:"style",value:{"text-align":n}};return{model:{key:"alignment",values:r.map(n=>n.name)},view:e}}function k7(r){const e=[];for(const{name:t}of r)e.push({view:{key:"style",value:{"text-align":t}},model:{key:"alignment",value:t}});return e}function b7(r){const e=[];for(const{name:t}of r)e.push({view:{key:"align",value:t},model:{key:"alignment",value:t}});return e}function w7(r){const e={};for(const n of r)e[n.name]={key:"class",value:n.className};return{model:{key:"alignment",values:r.map(n=>n.name)},view:e}}const wu=new Map([["left",Te.alignLeft],["right",Te.alignRight],["center",Te.alignCenter],["justify",Te.alignJustify]]);class v7 extends ie{get localizedOptionTitles(){const e=this.editor.t;return{left:e("Align left"),right:e("Align right"),center:e("Align center"),justify:e("Justify")}}static get pluginName(){return"AlignmentUI"}init(){const e=this.editor,t=e.ui.componentFactory,n=e.t,s=IC(e.config.get("alignment.options"));s.map(c=>c.name).filter(SC).forEach(c=>this._addButton(c)),t.add("alignment",c=>{const d=Lr(c);hu(d,()=>s.map(w=>t.create(`alignment:${w.name}`)),{enableActiveItemFocusOnDropdownOpen:!0,isVertical:!0,ariaLabel:n("Text alignment toolbar")}),d.buttonView.set({label:n("Text alignment"),tooltip:!0}),d.extendTemplate({attributes:{class:"ck-alignment-dropdown"}});const f=c.contentLanguageDirection==="rtl"?wu.get("right"):wu.get("left"),p=e.commands.get("alignment");return d.buttonView.bind("icon").to(p,"value",w=>wu.get(w)||f),d.bind("isEnabled").to(p,"isEnabled"),this.listenTo(d,"execute",()=>{e.editing.view.focus()}),d})}_addButton(e){const t=this.editor;t.ui.componentFactory.add(`alignment:${e}`,n=>{const s=t.commands.get("alignment"),c=new We(n);return c.set({label:this.localizedOptionTitles[e],icon:wu.get(e),tooltip:!0,isToggleable:!0}),c.bind("isEnabled").to(s),c.bind("isOn").to(s,"value",d=>d===e),this.listenTo(c,"execute",()=>{t.execute("alignment",{value:e}),t.editing.view.focus()}),c})}}class _7 extends ie{static get requires(){return[p7,v7]}static get pluginName(){return"Alignment"}}class MC{constructor(e,t=20){this._batch=null,this.model=e,this._size=0,this.limit=t,this._isLocked=!1,this._changeCallback=(n,s)=>{s.isLocal&&s.isUndoable&&s!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}get size(){return this._size}input(e){this._size+=e,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e=!1){(!this.isLocked||e)&&(this._batch=null,this._size=0)}}class y7 extends et{constructor(e,t){super(e),this._buffer=new MC(e.model,t),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,n=t.document,s=e.text||"",c=s.length;let d=n.selection;if(e.selection?d=e.selection:e.range&&(d=t.createSelection(e.range)),!t.canEditAt(d))return;const f=e.resultRange;t.enqueueChange(this._buffer.batch,p=>{this._buffer.lock(),t.deleteContent(d),s&&t.insertContent(p.createText(s,n.selection.getAttributes()),d),f?p.setSelection(f):d.is("documentSelection")||p.setSelection(d),this._buffer.unlock(),this._buffer.input(c)})}}const NC=["insertText","insertReplacementText"];class A7 extends Ti{constructor(e){super(e),this.focusObserver=e.getObserver(nu),m.isAndroid&&NC.push("insertCompositionText");const t=e.document;t.on("beforeinput",(n,s)=>{if(!this.isEnabled)return;const{data:c,targetRanges:d,inputType:f,domEvent:p}=s;if(!NC.includes(f))return;this.focusObserver.flush();const w=new re(t,"insertText");t.fire(w,new Is(e,p,{text:c,selection:e.createSelection(d)})),w.stop.called&&n.stop()}),t.on("compositionend",(n,{data:s,domEvent:c})=>{!this.isEnabled||m.isAndroid||s&&t.fire("insertText",new Is(e,c,{text:s,selection:t.selection}))},{priority:"lowest"})}observe(){}stopObserving(){}}class OC extends ie{static get pluginName(){return"Input"}init(){const e=this.editor,t=e.model,n=e.editing.view,s=t.document.selection;n.addObserver(A7);const c=new y7(e,e.config.get("typing.undoStep")||20);e.commands.add("insertText",c),e.commands.add("input",c),this.listenTo(n.document,"insertText",(d,f)=>{n.document.isComposing||f.preventDefault();const{text:p,selection:w,resultRange:_}=f,C=Array.from(w.getRanges()).map(H=>e.editing.mapper.toModelRange(H));let O=p;if(m.isAndroid){const H=Array.from(C[0].getItems()).reduce((ne,he)=>ne+(he.is("$textProxy")?he.data:""),"");H&&(H.length<=O.length?O.startsWith(H)&&(O=O.substring(H.length),C[0].start=C[0].start.getShiftedBy(H.length)):H.startsWith(O)&&(C[0].start=C[0].start.getShiftedBy(O.length),O=""))}const z={text:O,selection:t.createSelection(C)};_&&(z.resultRange=e.editing.mapper.toModelRange(_)),e.execute("insertText",z),n.scrollToTheSelection()}),m.isAndroid?this.listenTo(n.document,"keydown",(d,f)=>{s.isCollapsed||f.keyCode!=229||!n.document.isComposing||BC(t,c)}):this.listenTo(n.document,"compositionstart",()=>{s.isCollapsed||BC(t,c)})}}function BC(r,e){if(!e.isEnabled)return;const t=e.buffer;t.lock(),r.enqueueChange(t.batch,()=>{r.deleteContent(r.document.selection)}),t.unlock()}class PC extends et{constructor(e,t){super(e),this.direction=t,this._buffer=new MC(e.model,e.config.get("typing.undoStep")),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,n=t.document;t.enqueueChange(this._buffer.batch,s=>{this._buffer.lock();const c=s.createSelection(e.selection||n.selection);if(!t.canEditAt(c))return;const d=e.sequence||1,f=c.isCollapsed;if(c.isCollapsed&&t.modifySelection(c,{direction:this.direction,unit:e.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(d)){this._replaceEntireContentWithParagraph(s);return}if(this._shouldReplaceFirstBlockWithParagraph(c,d)){this.editor.execute("paragraph",{selection:c});return}if(c.isCollapsed)return;let p=0;c.getFirstRange().getMinimalFlatRanges().forEach(w=>{p+=ri(w.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(c,{doNotResetEntireContent:f,direction:this.direction}),this._buffer.input(p),s.setSelection(c),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,s=t.document.selection,c=t.schema.getLimitElement(s);if(!(s.isCollapsed&&s.containsEntireContent(c))||!t.schema.checkChild(c,"paragraph"))return!1;const f=c.getChild(0);return!(f&&f.is("element","paragraph"))}_replaceEntireContentWithParagraph(e){const t=this.editor.model,s=t.document.selection,c=t.schema.getLimitElement(s),d=e.createElement("paragraph");e.remove(e.createRangeIn(c)),e.insert(d,c),e.setSelection(d,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const n=this.editor.model;if(t>1||this.direction!="backward"||!e.isCollapsed)return!1;const s=e.getFirstPosition(),c=n.schema.getLimitElement(s),d=c.getChild(0);return!(s.parent!=d||!e.containsEntireContent(d)||!n.schema.checkChild(c,"paragraph")||d.name=="paragraph")}}const C7="character",zC="word",x7="codePoint",jr="selection",Ls="backward",zc="forward",LC={deleteContent:{unit:jr,direction:Ls},deleteContentBackward:{unit:x7,direction:Ls},deleteWordBackward:{unit:zC,direction:Ls},deleteHardLineBackward:{unit:jr,direction:Ls},deleteSoftLineBackward:{unit:jr,direction:Ls},deleteContentForward:{unit:C7,direction:zc},deleteWordForward:{unit:zC,direction:zc},deleteHardLineForward:{unit:jr,direction:zc},deleteSoftLineForward:{unit:jr,direction:zc}};class E7 extends Ti{constructor(e){super(e);const t=e.document;let n=0;t.on("keydown",()=>{n++}),t.on("keyup",()=>{n=0}),t.on("beforeinput",(s,c)=>{if(!this.isEnabled)return;const{targetRanges:d,domEvent:f,inputType:p}=c,w=LC[p];if(!w)return;const _={direction:w.direction,unit:w.unit,sequence:n};_.unit==jr&&(_.selectionToRemove=e.createSelection(d[0])),p==="deleteContentBackward"&&(m.isAndroid&&(_.sequence=1),S7(d)&&(_.unit=jr,_.selectionToRemove=e.createSelection(d)));const C=new Ss(t,"delete",d[0]);t.fire(C,new Is(e,f,_)),C.stop.called&&s.stop()}),m.isBlink&&D7(this)}observe(){}stopObserving(){}}function D7(r){const e=r.view,t=e.document;let n=null,s=!1;t.on("keydown",(f,{keyCode:p})=>{n=p,s=!1}),t.on("keyup",(f,{keyCode:p,domEvent:w})=>{const _=t.selection,C=r.isEnabled&&p==n&&c(p)&&!_.isCollapsed&&!s;if(n=null,C){const O=_.getFirstRange(),z=new Ss(t,"delete",O),H={unit:jr,direction:d(p),selectionToRemove:_};t.fire(z,new Is(e,w,H))}}),t.on("beforeinput",(f,{inputType:p})=>{const w=LC[p];c(n)&&w&&w.direction==d(n)&&(s=!0)},{priority:"high"}),t.on("beforeinput",(f,{inputType:p,data:w})=>{n==Be.delete&&p=="insertText"&&w==""&&f.stop()},{priority:"high"});function c(f){return f==Be.backspace||f==Be.delete}function d(f){return f==Be.backspace?Ls:zc}}function S7(r){if(r.length!=1||r[0].isCollapsed)return!1;const e=r[0].getWalker({direction:"backward",singleCharacters:!0,ignoreElementEnd:!0});let t=0;for(const{nextPosition:n}of e){if(!n.parent.is("$text"))t++;else{const s=n.parent.data,c=n.offset;if(op(s,c)||sp(s,c)||i_(s,c))continue;t++}if(t>1)return!0}return!1}class Bi extends ie{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,n=t.document,s=e.model.document;t.addObserver(E7),this._undoOnBackspace=!1;const c=new PC(e,"forward");e.commands.add("deleteForward",c),e.commands.add("forwardDelete",c),e.commands.add("delete",new PC(e,"backward")),this.listenTo(n,"delete",(d,f)=>{n.isComposing||f.preventDefault();const{direction:p,sequence:w,selectionToRemove:_,unit:C}=f,O=p==="forward"?"deleteForward":"delete",z={sequence:w};if(C=="selection"){const H=Array.from(_.getRanges()).map(ne=>e.editing.mapper.toModelRange(ne));z.selection=e.model.createSelection(H)}else z.unit=C;e.execute(O,z),t.scrollToTheSelection()},{priority:"low"}),this.editor.plugins.has("UndoEditing")&&(this.listenTo(n,"delete",(d,f)=>{this._undoOnBackspace&&f.direction=="backward"&&f.sequence==1&&f.unit=="codePoint"&&(this._undoOnBackspace=!1,e.execute("undo"),f.preventDefault(),d.stop())},{context:"$capture"}),this.listenTo(s,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class T7 extends ie{static get requires(){return[OC,Bi]}static get pluginName(){return"Typing"}}function jC(r,e){let t=r.start;return{text:Array.from(r.getWalker({ignoreElementEnd:!1})).reduce((s,{item:c})=>c.is("$text")||c.is("$textProxy")?s+c.data:(t=e.createPositionAfter(c),""),""),range:e.createRange(t,r.end)}}class RC extends Ue(){constructor(e,t){super(),this.model=e,this.testCallback=t,this._hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){const t=this.model.document;this.listenTo(t.selection,"change:range",(n,{directChange:s})=>{if(s){if(!t.selection.isCollapsed){this.hasMatch&&(this.fire("unmatched"),this._hasMatch=!1);return}this._evaluateTextBeforeSelection("selection")}}),this.listenTo(t,"change:data",(n,s)=>{s.isUndo||!s.isLocal||this._evaluateTextBeforeSelection("data",{batch:s})})}_evaluateTextBeforeSelection(e,t={}){const n=this.model,c=n.document.selection,d=n.createRange(n.createPositionAt(c.focus.parent,0),c.focus),{text:f,range:p}=jC(d,n),w=this.testCallback(f);if(!w&&this.hasMatch&&this.fire("unmatched"),this._hasMatch=!!w,w){const _=Object.assign(t,{text:f,range:p});typeof w=="object"&&Object.assign(_,w),this.fire(`matched:${e}`,_)}}}class FC extends ie{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,n=e.editing.view,s=e.locale,c=t.document.selection;this.listenTo(n.document,"arrowKey",(d,f)=>{if(!c.isCollapsed||f.shiftKey||f.altKey||f.ctrlKey)return;const p=f.keyCode==Be.arrowright,w=f.keyCode==Be.arrowleft;if(!p&&!w)return;const _=s.contentLanguageDirection;let C=!1;_==="ltr"&&p||_==="rtl"&&w?C=this._handleForwardMovement(f):C=this._handleBackwardMovement(f),C===!0&&d.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(c,"change:range",(d,f)=>{if(this._isNextGravityRestorationSkipped){this._isNextGravityRestorationSkipped=!1;return}this._isGravityOverridden&&(!f.directChange&&_u(c.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,s=this.editor.model.document.selection,c=s.getFirstPosition();return this._isGravityOverridden||c.isAtStart&&Lm(s,t)?!1:_u(c,t)?(vu(e),this._overrideGravity(),!0):!1}_handleBackwardMovement(e){const t=this.attributes,n=this.editor.model,s=n.document.selection,c=s.getFirstPosition();return this._isGravityOverridden?(vu(e),this._restoreGravity(),jm(n,t,c),!0):c.isAtStart?Lm(s,t)?(vu(e),jm(n,t,c),!0):!1:I7(c,t)?c.isAtEnd&&!Lm(s,t)&&_u(c,t)?(vu(e),jm(n,t,c),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1):!1}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function Lm(r,e){for(const t of e)if(r.hasAttribute(t))return!0;return!1}function jm(r,e,t){const n=t.nodeBefore;r.change(s=>{if(n){const c=[],d=r.schema.isObject(n)&&r.schema.isInline(n);for(const[f,p]of n.getAttributes())r.schema.checkAttribute("$text",f)&&(!d||r.schema.getAttributeProperties(f).copyFromObject!==!1)&&c.push([f,p]);s.setSelectionAttribute(c)}else s.removeSelectionAttribute(e)})}function vu(r){r.preventDefault()}function I7(r,e){const t=r.getShiftedBy(-1);return _u(t,e)}function _u(r,e){const{nodeBefore:t,nodeAfter:n}=r;for(const s of e){const c=t?t.getAttribute(s):void 0;if((n?n.getAttribute(s):void 0)!==c)return!0}return!1}const VC={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"½",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"⅓",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"⅔",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"¼",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"¾",null]},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:js('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:js("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:js("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:js('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:js('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:js("'"),to:[null,"‚",null,"’"]}},UC={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},M7=["symbols","mathematical","typography","quotes"];class N7 extends ie{static get requires(){return["Delete","Input"]}static get pluginName(){return"TextTransformation"}constructor(e){super(e),e.config.define("typing",{transformations:{include:M7}})}init(){const t=this.editor.model.document.selection;t.on("change:range",()=>{this.isEnabled=!t.anchor.parent.is("element","codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){const e=this.editor,t=e.model,n=e.plugins.get("Delete"),s=z7(e.config.get("typing.transformations")),c=f=>{for(const p of s)if(p.from.test(f))return{normalizedTransformation:p}},d=new RC(e.model,c);d.on("matched:data",(f,p)=>{if(!p.batch.isTyping)return;const{from:w,to:_}=p.normalizedTransformation,C=w.exec(p.text),O=_(C.slice(1)),z=p.range;let H=C.index;t.enqueueChange(ne=>{for(let he=1;he<C.length;he++){const we=C[he],He=O[he-1];if(He==null){H+=we.length;continue}const rt=z.start.getShiftedBy(H),mt=t.createRange(rt,rt.getShiftedBy(we.length)),yt=P7(rt);t.insertContent(ne.createText(He,yt),mt),H+=He.length}t.enqueueChange(()=>{n.requestUndoOnBackspace()})})}),d.bind("isEnabled").to(this)}}function O7(r){return typeof r=="string"?new RegExp(`(${yC(r)})$`):r}function B7(r){return typeof r=="string"?()=>[r]:r instanceof Array?()=>r:r}function P7(r){return(r.textNode?r.textNode:r.nodeAfter).getAttributes()}function js(r){return new RegExp(`(^|\\s)(${r})([^${r}]*)(${r})$`)}function z7(r){const e=r.extra||[],t=r.remove||[],n=c=>!t.includes(c),s=r.include.concat(e).filter(n);return L7(s).filter(n).map(c=>typeof c=="string"&&VC[c]?VC[c]:c).filter(c=>typeof c=="object").map(c=>({from:O7(c.from),to:B7(c.to)}))}function L7(r){const e=new Set;for(const t of r)if(typeof t=="string"&&UC[t])for(const n of UC[t])e.add(n);else e.add(t);return Array.from(e)}function Rs(r,e,t,n){return n.createRange(HC(r,e,t,!0,n),HC(r,e,t,!1,n))}function HC(r,e,t,n,s){let c=r.textNode||(n?r.nodeBefore:r.nodeAfter),d=null;for(;c&&c.getAttribute(e)==t;)d=c,c=n?c.previousSibling:c.nextSibling;return d?s.createPositionAt(d,n?"before":"after"):r}function j7(r,e,t,n){const s=r.editing.view,c=new Set;s.document.registerPostFixer(d=>{const f=r.model.document.selection;let p=!1;if(f.hasAttribute(e)){const w=Rs(f.getFirstPosition(),e,f.getAttribute(e),r.model),_=r.editing.mapper.toViewRange(w);for(const C of _.getItems())C.is("element",t)&&!C.hasClass(n)&&(d.addClass(n,C),c.add(C),p=!0)}return p}),r.conversion.for("editingDowncast").add(d=>{d.on("insert",f,{priority:"highest"}),d.on("remove",f,{priority:"highest"}),d.on("attribute",f,{priority:"highest"}),d.on("selection",f,{priority:"highest"});function f(){s.change(p=>{for(const w of c.values())p.removeClass(n,w),c.delete(w)})}})}function Rr(r,e,t,n){let s,c=null;typeof n=="function"?s=n:(c=r.commands.get(n),s=()=>{r.execute(n)}),r.model.document.on("change:data",(d,f)=>{if(c&&!c.isEnabled||!e.isEnabled)return;const p=Vt(r.model.document.selection.getRanges());if(!p.isCollapsed||f.isUndo||!f.isLocal)return;const w=Array.from(r.model.document.differ.getChanges()),_=w[0];if(w.length!=1||_.type!=="insert"||_.name!="$text"||_.length!=1)return;const C=_.position.parent;if(C.is("element","codeBlock")||C.is("element","listItem")&&typeof n!="function"&&!["numberedList","bulletedList","todoList"].includes(n)||c&&c.value===!0)return;const O=C.getChild(0),z=r.model.createRangeOn(O);if(!z.containsRange(p)&&!p.end.isEqual(z.end))return;const H=t.exec(O.data.substr(0,p.end.offset));H&&r.model.enqueueChange(ne=>{const he=ne.createPositionAt(C,0),we=ne.createPositionAt(C,H[0].length),He=new pn(he,we);if(s({match:H})!==!1){ne.remove(He);const mt=r.model.document.selection.getFirstRange(),yt=ne.createRangeIn(C);C.isEmpty&&!yt.isEqual(mt)&&!yt.containsRange(mt,!0)&&ne.remove(C)}He.detach(),r.model.enqueueChange(()=>{r.plugins.get("Delete").requestUndoOnBackspace()})})})}function Fs(r,e,t,n){let s,c;t instanceof RegExp?s=t:c=t,c=c||(d=>{let f;const p=[],w=[];for(;(f=s.exec(d))!==null&&!(f&&f.length<4);){let{index:_,1:C,2:O,3:z}=f;const H=C+O+z;_+=f[0].length-H.length;const ne=[_,_+C.length],he=[_+C.length+O.length,_+C.length+O.length+z.length];p.push(ne),p.push(he),w.push([_+C.length,_+C.length+O.length])}return{remove:p,format:w}}),r.model.document.on("change:data",(d,f)=>{if(f.isUndo||!f.isLocal||!e.isEnabled)return;const p=r.model,w=p.document.selection;if(!w.isCollapsed)return;const _=Array.from(p.document.differ.getChanges()),C=_[0];if(_.length!=1||C.type!=="insert"||C.name!="$text"||C.length!=1)return;const O=w.focus,z=O.parent,{text:H,range:ne}=R7(p.createRange(p.createPositionAt(z,0),O),p),he=c(H),we=$C(ne.start,he.format,p),He=$C(ne.start,he.remove,p);we.length&&He.length&&p.enqueueChange(rt=>{if(n(rt,we)!==!1){for(const yt of He.reverse())rt.remove(yt);p.enqueueChange(()=>{r.plugins.get("Delete").requestUndoOnBackspace()})}})})}function $C(r,e,t){return e.filter(n=>n[0]!==void 0&&n[1]!==void 0).map(n=>t.createRange(r.getShiftedBy(n[0]),r.getShiftedBy(n[1])))}function R7(r,e){let t=r.start;return{text:Array.from(r.getItems()).reduce((s,c)=>!(c.is("$text")||c.is("$textProxy"))||c.getAttribute("code")?(t=e.createPositionAfter(c),""):s+c.data,""),range:e.createRange(t,r.end)}}class F7 extends ie{static get requires(){return[Bi]}static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){const e=this.editor.commands;e.get("bulletedList")&&Rr(this.editor,this,/^[*-]\s$/,"bulletedList"),e.get("numberedList")&&Rr(this.editor,this,/^1[.|)]\s$/,"numberedList"),e.get("todoList")&&Rr(this.editor,this,/^\[\s?\]\s$/,"todoList"),e.get("checkTodoList")&&Rr(this.editor,this,/^\[\s?x\s?\]\s$/,()=>{this.editor.execute("todoList"),this.editor.execute("checkTodoList")})}_addBasicStylesAutoformats(){const e=this.editor.commands;if(e.get("bold")){const t=yu(this.editor,"bold");Fs(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,t),Fs(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,t)}if(e.get("italic")){const t=yu(this.editor,"italic");Fs(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,t),Fs(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,t)}if(e.get("code")){const t=yu(this.editor,"code");Fs(this.editor,this,/(`)([^`]+)(`)$/g,t)}if(e.get("strikethrough")){const t=yu(this.editor,"strikethrough");Fs(this.editor,this,/(~~)([^~]+)(~~)$/g,t)}}_addHeadingAutoformats(){const e=this.editor.commands.get("heading");e&&e.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(t=>{const n=t[7],s=new RegExp(`^(#{${n}})\\s$`);Rr(this.editor,this,s,()=>{if(!e.isEnabled||e.value===t)return!1;this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&Rr(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){const e=this.editor,t=e.model.document.selection;e.commands.get("codeBlock")&&Rr(e,this,/^```$/,()=>{if(t.getFirstPosition().parent.is("element","listItem"))return!1;this.editor.execute("codeBlock",{usePreviousLanguageChoice:!0})})}_addHorizontalLineAutoformats(){this.editor.commands.get("horizontalLine")&&Rr(this.editor,this,/^---$/,"horizontalLine")}}function yu(r,e){return(t,n)=>{if(!r.commands.get(e).isEnabled)return!1;const c=r.model.schema.getValidRanges(n,e);for(const d of c)t.setAttribute(e,!0,d);t.removeSelectionAttribute(e)}}class WC extends et{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,s=t.document.selection,c=e.forceValue===void 0?!this.value:e.forceValue;t.change(d=>{if(s.isCollapsed)c?d.setSelectionAttribute(this.attributeKey,!0):d.removeSelectionAttribute(this.attributeKey);else{const f=t.schema.getValidRanges(s.getRanges(),this.attributeKey);for(const p of f)c?d.setAttribute(this.attributeKey,c,p):d.removeAttribute(this.attributeKey,p)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,n=e.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const s of n.getRanges())for(const c of s.getItems())if(t.checkAttribute(c,this.attributeKey))return c.hasAttribute(this.attributeKey);return!1}}const Vs="bold";class V7 extends ie{static get pluginName(){return"BoldEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:Vs}),e.model.schema.setAttributeProperties(Vs,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:Vs,view:"strong",upcastAlso:["b",t=>{const n=t.getStyle("font-weight");return n&&(n=="bold"||Number(n)>=600)?{name:!0,styles:["font-weight"]}:null}]}),e.commands.add(Vs,new WC(e,Vs)),e.keystrokes.set("CTRL+B",Vs)}}const Rm="bold";class U7 extends ie{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(Rm,n=>{const s=e.commands.get(Rm),c=new We(n);return c.set({label:t("Bold"),icon:Te.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),c.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(c,"execute",()=>{e.execute(Rm),e.editing.view.focus()}),c})}}class H7 extends ie{static get requires(){return[V7,U7]}static get pluginName(){return"Bold"}}var qC=a(5363),Fm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Fm.insert="head",Fm.singleton=!0,ge()(qC.Z,Fm),qC.Z.locals;const Us="italic";class $7 extends ie{static get pluginName(){return"ItalicEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:Us}),e.model.schema.setAttributeProperties(Us,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:Us,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),e.commands.add(Us,new WC(e,Us)),e.keystrokes.set("CTRL+I",Us)}}const W7='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',Vm="italic";class q7 extends ie{static get pluginName(){return"ItalicUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(Vm,n=>{const s=e.commands.get(Vm),c=new We(n);return c.set({label:t("Italic"),icon:W7,keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),c.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(c,"execute",()=>{e.execute(Vm),e.editing.view.focus()}),c})}}class G7 extends ie{static get requires(){return[$7,q7]}static get pluginName(){return"Italic"}}function*GC(r,e){for(const t of e)t&&r.getAttributeProperties(t[0]).copyOnEnter&&(yield t)}class Y7 extends et{execute(){this.editor.model.change(e=>{this.enterBlock(e),this.fire("afterExecute",{writer:e})})}enterBlock(e){const t=this.editor.model,n=t.document.selection,s=t.schema,c=n.isCollapsed,d=n.getFirstRange(),f=d.start.parent,p=d.end.parent;if(s.isLimit(f)||s.isLimit(p))return!c&&f==p&&t.deleteContent(n),!1;if(c){const w=GC(e.model.schema,n.getAttributes());return YC(e,d.start),e.setSelectionAttribute(w),!0}else{const w=!(d.start.isAtStart&&d.end.isAtEnd),_=f==p;if(t.deleteContent(n,{leaveUnmerged:w}),w){if(_)return YC(e,n.focus),!0;e.setSelection(p,0)}}return!1}}function YC(r,e){r.split(e),r.setSelection(e.parent.nextSibling,0)}const Z7={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class ZC extends Ti{constructor(e){super(e);const t=this.document;let n=!1;t.on("keydown",(s,c)=>{n=c.shiftKey}),t.on("beforeinput",(s,c)=>{if(!this.isEnabled)return;let d=c.inputType;m.isSafari&&n&&d=="insertParagraph"&&(d="insertLineBreak");const f=c.domEvent,p=Z7[d];if(!p)return;const w=new Ss(t,"enter",c.targetRanges[0]);t.fire(w,new Is(e,f,{isSoft:p.isSoft})),w.stop.called&&s.stop()})}observe(){}stopObserving(){}}class Au extends ie{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,n=t.document;t.addObserver(ZC),e.commands.add("enter",new Y7(e)),this.listenTo(n,"enter",(s,c)=>{n.isComposing||c.preventDefault(),!c.isSoft&&(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"})}}class K7 extends et{execute(){const e=this.editor.model,t=e.document;e.change(n=>{J7(e,n,t.selection),this.fire("afterExecute",{writer:n})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=Q7(e.schema,t.selection)}}function Q7(r,e){if(e.rangeCount>1)return!1;const t=e.anchor;if(!t||!r.checkChild(t,"softBreak"))return!1;const n=e.getFirstRange(),s=n.start.parent,c=n.end.parent;return!((Um(s,r)||Um(c,r))&&s!==c)}function J7(r,e,t){const n=t.isCollapsed,s=t.getFirstRange(),c=s.start.parent,d=s.end.parent,f=c==d;if(n){const p=GC(r.schema,t.getAttributes());KC(r,e,s.end),e.removeSelectionAttribute(t.getAttributeKeys()),e.setSelectionAttribute(p)}else{const p=!(s.start.isAtStart&&s.end.isAtEnd);r.deleteContent(t,{leaveUnmerged:p}),f?KC(r,e,t.focus):p&&e.setSelection(d,0)}}function KC(r,e,t){const n=e.createElement("softBreak");r.insertContent(n,t),e.setSelection(n,"after")}function Um(r,e){return r.is("rootElement")?!1:e.isLimit(r)||Um(r.parent,e)}class X7 extends ie{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,n=e.conversion,s=e.editing.view,c=s.document;t.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(d,{writer:f})=>f.createEmptyElement("br")}),s.addObserver(ZC),e.commands.add("shiftEnter",new K7(e)),this.listenTo(c,"enter",(d,f)=>{c.isComposing||f.preventDefault(),f.isSoft&&(e.execute("shiftEnter"),s.scrollToTheSelection())},{priority:"low"})}}class eR extends et{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,n=t.schema,s=t.document.selection,c=Array.from(s.getSelectedBlocks()),d=e.forceValue===void 0?!this.value:e.forceValue;t.change(f=>{if(!d)this._removeQuote(f,c.filter(Cu));else{const p=c.filter(w=>Cu(w)||JC(n,w));this._applyQuote(f,p)}})}_getValue(){const e=this.editor.model.document.selection,t=Vt(e.getSelectedBlocks());return!!(t&&Cu(t))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=Vt(e.getSelectedBlocks());return n?JC(t,n):!1}_removeQuote(e,t){QC(e,t).reverse().forEach(n=>{if(n.start.isAtStart&&n.end.isAtEnd){e.unwrap(n.start.parent);return}if(n.start.isAtStart){const c=e.createPositionBefore(n.start.parent);e.move(n,c);return}n.end.isAtEnd||e.split(n.end);const s=e.createPositionAfter(n.end.parent);e.move(n,s)})}_applyQuote(e,t){const n=[];QC(e,t).reverse().forEach(s=>{let c=Cu(s.start);c||(c=e.createElement("blockQuote"),e.wrap(s,c)),n.push(c)}),n.reverse().reduce((s,c)=>s.nextSibling==c?(e.merge(e.createPositionAfter(s)),s):c)}}function Cu(r){return r.parent.name=="blockQuote"?r.parent:null}function QC(r,e){let t,n=0;const s=[];for(;n<e.length;){const c=e[n],d=e[n+1];t||(t=r.createPositionBefore(c)),(!d||c.nextSibling!=d)&&(s.push(r.createRange(t,r.createPositionAfter(c))),t=null),n++}return s}function JC(r,e){const t=r.checkChild(e.parent,"blockQuote"),n=r.checkChild(["$root","blockQuote"],e);return t&&n}class tR extends ie{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Au,Bi]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new eR(e)),t.register("blockQuote",{inheritAllFrom:"$container"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(d=>{const f=e.model.document.differ.getChanges();for(const p of f)if(p.type=="insert"){const w=p.position.nodeAfter;if(!w)continue;if(w.is("element","blockQuote")&&w.isEmpty)return d.remove(w),!0;if(w.is("element","blockQuote")&&!t.checkChild(p.position,w))return d.unwrap(w),!0;if(w.is("element")){const _=d.createRangeIn(w);for(const C of _.getItems())if(C.is("element","blockQuote")&&!t.checkChild(d.createPositionBefore(C),C))return d.unwrap(C),!0}}else if(p.type=="remove"){const w=p.position.parent;if(w.is("element","blockQuote")&&w.isEmpty)return d.remove(w),!0}return!1});const n=this.editor.editing.view.document,s=e.model.document.selection,c=e.commands.get("blockQuote");this.listenTo(n,"enter",(d,f)=>{if(!s.isCollapsed||!c.value)return;s.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),f.preventDefault(),d.stop())},{context:"blockquote"}),this.listenTo(n,"delete",(d,f)=>{if(f.direction!="backward"||!s.isCollapsed||!c.value)return;const p=s.getLastPosition().parent;p.isEmpty&&!p.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),f.preventDefault(),d.stop())},{context:"blockquote"})}}var XC=a(3789),Hm={injectType:"singletonStyleTag",attributes:{"data-cke":!0}};Hm.insert="head",Hm.singleton=!0,ge()(XC.Z,Hm),XC.Z.locals;class nR extends ie{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("blockQuote",n=>{const s=e.commands.get("blockQuote"),c=new We(n);return c.set({label:t("Block quote"),icon:Te.quote,tooltip:!0,isToggleable:!0}),c.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(c,"execute",()=>{e.execute("blockQuote"),e.editing.view.focus()}),c})}}class iR extends ie{static get requires(){return[tR,nR]}static get pluginName(){return"BlockQuote"}}class Lc extends Po{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"});function n(s){return(c,d)=>{d.preventDefault();const f=d.dropRange?[d.dropRange]:null,p=new re(t,s);t.fire(p,{dataTransfer:d.dataTransfer,method:c.name,targetRanges:f,target:d.target,domEvent:d.domEvent}),p.stop.called&&d.stopPropagation()}}}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",s={dataTransfer:new ry(t,{cacheFiles:n})};(e.type=="drop"||e.type=="dragover")&&(s.dropRange=rR(this.view,e)),this.fire(e.type,e,s)}}function rR(r,e){const t=e.target.ownerDocument,n=e.clientX,s=e.clientY;let c;return t.caretRangeFromPoint&&t.caretRangeFromPoint(n,s)?c=t.caretRangeFromPoint(n,s):e.rangeParent&&(c=t.createRange(),c.setStart(e.rangeParent,e.rangeOffset),c.collapse(!0)),c?r.domConverter.domRangeToView(c):null}function oR(r){return r=r.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;"),(r.includes("</p><p>")||r.includes("<br>"))&&(r=`<p>${r}</p>`),r}function sR(r){return r.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>t.length==1?" ":t).replace(/<!--[\s\S]*?-->/g,"")}const e1=["figcaption","li"];function t1(r){let e="";if(r.is("$text")||r.is("$textProxy"))e=r.data;else if(r.is("element","img")&&r.hasAttribute("alt"))e=r.getAttribute("alt");else if(r.is("element","br"))e=`
`;else{let t=null;for(const n of r.getChildren()){const s=t1(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(e1.includes(t.name)||e1.includes(n.name)?e+=`
`:e+=`

 * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bcrypt.js for details
 */(function(i,a){typeof nZ=="function"&&o&&o.exports?o.exports=a():(i.dcodeIO=i.dcodeIO||{}).bcrypt=a()})(Xo,function(){var i={},a=null;function l($){if(o&&o.exports)try{return sZ.randomBytes($)}catch{}try{var G;return(self.crypto||self.msCrypto).getRandomValues(G=new Uint32Array($)),Array.prototype.slice.call(G)}catch{}if(!a)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return a($)}var u=!1;try{l(1),u=!0}catch{}a=null,i.setRandomFallback=function($){a=$},i.genSaltSync=function($,G){if($=$||T,typeof $!="number")throw Error("Illegal arguments: "+typeof $+", "+typeof G);$<4?$=4:$>31&&($=31);var U=[];return U.push("$2a$"),$<10&&U.push("0"),U.push($.toString()),U.push("$"),U.push(v(l(E),E)),U.join("")},i.genSalt=function($,G,U){if(typeof G=="function"&&(U=G,G=void 0),typeof $=="function"&&(U=$,$=void 0),typeof $>"u")$=T;else if(typeof $!="number")throw Error("illegal arguments: "+typeof $);function R(V){g(function(){try{V(null,i.genSaltSync($))}catch(M){V(M)}})}if(U){if(typeof U!="function")throw Error("Illegal callback: "+typeof U);R(U)}else return new Promise(function(V,M){R(function(Q,J){if(Q){M(Q);return}V(J)})})},i.hashSync=function($,G){if(typeof G>"u"&&(G=T),typeof G=="number"&&(G=i.genSaltSync(G)),typeof $!="string"||typeof G!="string")throw Error("Illegal arguments: "+typeof $+", "+typeof G);return ce($,G)},i.hash=function($,G,U,R){function V(M){typeof $=="string"&&typeof G=="number"?i.genSalt(G,function(Q,J){ce($,J,M,R)}):typeof $=="string"&&typeof G=="string"?ce($,G,M,R):g(M.bind(this,Error("Illegal arguments: "+typeof $+", "+typeof G)))}if(U){if(typeof U!="function")throw Error("Illegal callback: "+typeof U);V(U)}else return new Promise(function(M,Q){V(function(J,ee){if(J){Q(J);return}M(ee)})})};function h($,G){for(var U=0,R=0,V=0,M=$.length;V<M;++V)$.charCodeAt(V)===G.charCodeAt(V)?++U:++R;return U<0?!1:R===0}i.compareSync=function($,G){if(typeof $!="string"||typeof G!="string")throw Error("Illegal arguments: "+typeof $+", "+typeof G);return G.length!==60?!1:h(i.hashSync($,G.substr(0,G.length-31)),G)},i.compare=function($,G,U,R){function V(M){if(typeof $!="string"||typeof G!="string"){g(M.bind(this,Error("Illegal arguments: "+typeof $+", "+typeof G)));return}if(G.length!==60){g(M.bind(this,null,!1));return}i.hash($,G.substr(0,29),function(Q,J){Q?M(Q):M(null,h(J,G))},R)}if(U){if(typeof U!="function")throw Error("Illegal callback: "+typeof U);V(U)}else return new Promise(function(M,Q){V(function(J,ee){if(J){Q(J);return}M(ee)})})},i.getRounds=function($){if(typeof $!="string")throw Error("Illegal arguments: "+typeof $);return parseInt($.split("$")[2],10)},i.getSalt=function($){if(typeof $!="string")throw Error("Illegal arguments: "+typeof $);if($.length!==60)throw Error("Illegal hash length: "+$.length+" != 60");return $.substring(0,29)};var g=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout;function m($){var G=[],U=0;return x.encodeUTF16toUTF8(function(){return U>=$.length?null:$.charCodeAt(U++)},function(R){G.push(R)}),G}var k="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],y=String.fromCharCode;function v($,G){var U=0,R=[],V,M;if(G<=0||G>$.length)throw Error("Illegal len: "+G);for(;U<G;){if(V=$[U++]&255,R.push(k[V>>2&63]),V=(V&3)<<4,U>=G){R.push(k[V&63]);break}if(M=$[U++]&255,V|=M>>4&15,R.push(k[V&63]),V=(M&15)<<2,U>=G){R.push(k[V&63]);break}M=$[U++]&255,V|=M>>6&3,R.push(k[V&63]),R.push(k[M&63])}return R.join("")}function A($,G){var U=0,R=$.length,V=0,M=[],Q,J,ee,le,ke,Ce;if(G<=0)throw Error("Illegal len: "+G);for(;U<R-1&&V<G&&(Ce=$.charCodeAt(U++),Q=Ce<b.length?b[Ce]:-1,Ce=$.charCodeAt(U++),J=Ce<b.length?b[Ce]:-1,!(Q==-1||J==-1||(ke=Q<<2>>>0,ke|=(J&48)>>4,M.push(y(ke)),++V>=G||U>=R)||(Ce=$.charCodeAt(U++),ee=Ce<b.length?b[Ce]:-1,ee==-1)||(ke=(J&15)<<4>>>0,ke|=(ee&60)>>2,M.push(y(ke)),++V>=G||U>=R)));)Ce=$.charCodeAt(U++),le=Ce<b.length?b[Ce]:-1,ke=(ee&3)<<6>>>0,ke|=le,M.push(y(ke)),++V;var at=[];for(U=0;U<V;U++)at.push(M[U].charCodeAt(0));return at}var x=function(){var $={};return $.MAX_CODEPOINT=1114111,$.encodeUTF8=function(G,U){var R=null;for(typeof G=="number"&&(R=G,G=function(){return null});R!==null||(R=G())!==null;)R<128?U(R&127):R<2048?(U(R>>6&31|192),U(R&63|128)):R<65536?(U(R>>12&15|224),U(R>>6&63|128),U(R&63|128)):(U(R>>18&7|240),U(R>>12&63|128),U(R>>6&63|128),U(R&63|128)),R=null},$.decodeUTF8=function(G,U){for(var R,V,M,Q,J=function(ee){ee=ee.slice(0,ee.indexOf(null));var le=Error(ee.toString());throw le.name="TruncatedError",le.bytes=ee,le};(R=G())!==null;)if(!(R&128))U(R);else if((R&224)===192)(V=G())===null&&J([R,V]),U((R&31)<<6|V&63);else if((R&240)===224)((V=G())===null||(M=G())===null)&&J([R,V,M]),U((R&15)<<12|(V&63)<<6|M&63);else if((R&248)===240)((V=G())===null||(M=G())===null||(Q=G())===null)&&J([R,V,M,Q]),U((R&7)<<18|(V&63)<<12|(M&63)<<6|Q&63);else throw RangeError("Illegal starting byte: "+R)},$.UTF16toUTF8=function(G,U){for(var R,V=null;(R=V!==null?V:G())!==null;){if(R>=55296&&R<=57343&&(V=G())!==null&&V>=56320&&V<=57343){U((R-55296)*1024+V-56320+65536),V=null;continue}U(R)}V!==null&&U(V)},$.UTF8toUTF16=function(G,U){var R=null;for(typeof G=="number"&&(R=G,G=function(){return null});R!==null||(R=G())!==null;)R<=65535?U(R):(R-=65536,U((R>>10)+55296),U(R%1024+56320)),R=null},$.encodeUTF16toUTF8=function(G,U){$.UTF16toUTF8(G,function(R){$.encodeUTF8(R,U)})},$.decodeUTF8toUTF16=function(G,U){$.decodeUTF8(G,function(R){$.UTF8toUTF16(R,U)})},$.calculateCodePoint=function(G){return G<128?1:G<2048?2:G<65536?3:4},$.calculateUTF8=function(G){for(var U,R=0;(U=G())!==null;)R+=$.calculateCodePoint(U);return R},$.calculateUTF16asUTF8=function(G){var U=0,R=0;return $.UTF16toUTF8(G,function(V){++U,R+=$.calculateCodePoint(V)}),[U,R]},$}();Date.now=Date.now||function(){return+new Date};var E=16,T=10,P=16,I=100,N=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],B=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],j=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function q($,G,U,R){var V,M=$[G],Q=$[G+1];return M^=U[0],V=R[M>>>24],V+=R[256|M>>16&255],V^=R[512|M>>8&255],V+=R[768|M&255],Q^=V^U[1],V=R[Q>>>24],V+=R[256|Q>>16&255],V^=R[512|Q>>8&255],V+=R[768|Q&255],M^=V^U[2],V=R[M>>>24],V+=R[256|M>>16&255],V^=R[512|M>>8&255],V+=R[768|M&255],Q^=V^U[3],V=R[Q>>>24],V+=R[256|Q>>16&255],V^=R[512|Q>>8&255],V+=R[768|Q&255],M^=V^U[4],V=R[M>>>24],V+=R[256|M>>16&255],V^=R[512|M>>8&255],V+=R[768|M&255],Q^=V^U[5],V=R[Q>>>24],V+=R[256|Q>>16&255],V^=R[512|Q>>8&255],V+=R[768|Q&255],M^=V^U[6],V=R[M>>>24],V+=R[256|M>>16&255],V^=R[512|M>>8&255],V+=R[768|M&255],Q^=V^U[7],V=R[Q>>>24],V+=R[256|Q>>16&255],V^=R[512|Q>>8&255],V+=R[768|Q&255],M^=V^U[8],V=R[M>>>24],V+=R[256|M>>16&255],V^=R[512|M>>8&255],V+=R[768|M&255],Q^=V^U[9],V=R[Q>>>24],V+=R[256|Q>>16&255],V^=R[512|Q>>8&255],V+=R[768|Q&255],M^=V^U[10],V=R[M>>>24],V+=R[256|M>>16&255],V^=R[512|M>>8&255],V+=R[768|M&255],Q^=V^U[11],V=R[Q>>>24],V+=R[256|Q>>16&255],V^=R[512|Q>>8&255],V+=R[768|Q&255],M^=V^U[12],V=R[M>>>24],V+=R[256|M>>16&255],V^=R[512|M>>8&255],V+=R[768|M&255],Q^=V^U[13],V=R[Q>>>24],V+=R[256|Q>>16&255],V^=R[512|Q>>8&255],V+=R[768|Q&255],M^=V^U[14],V=R[M>>>24],V+=R[256|M>>16&255],V^=R[512|M>>8&255],V+=R[768|M&255],Q^=V^U[15],V=R[Q>>>24],V+=R[256|Q>>16&255],V^=R[512|Q>>8&255],V+=R[768|Q&255],M^=V^U[16],$[G]=Q^U[P+1],$[G+1]=M,$}function Z($,G){for(var U=0,R=0;U<4;++U)R=R<<8|$[G]&255,G=(G+1)%$.length;return{key:R,offp:G}}function K($,G,U){for(var R=0,V=[0,0],M=G.length,Q=U.length,J,ee=0;ee<M;ee++)J=Z($,R),R=J.offp,G[ee]=G[ee]^J.key;for(ee=0;ee<M;ee+=2)V=q(V,0,G,U),G[ee]=V[0],G[ee+1]=V[1];for(ee=0;ee<Q;ee+=2)V=q(V,0,G,U),U[ee]=V[0],U[ee+1]=V[1]}function X($,G,U,R){for(var V=0,M=[0,0],Q=U.length,J=R.length,ee,le=0;le<Q;le++)ee=Z(G,V),V=ee.offp,U[le]=U[le]^ee.key;for(V=0,le=0;le<Q;le+=2)ee=Z($,V),V=ee.offp,M[0]^=ee.key,ee=Z($,V),V=ee.offp,M[1]^=ee.key,M=q(M,0,U,R),U[le]=M[0],U[le+1]=M[1];for(le=0;le<J;le+=2)ee=Z($,V),V=ee.offp,M[0]^=ee.key,ee=Z($,V),V=ee.offp,M[1]^=ee.key,M=q(M,0,U,R),R[le]=M[0],R[le+1]=M[1]}function re($,G,U,R,V){var M=j.slice(),Q=M.length,J;if(U<4||U>31)if(J=Error("Illegal number of rounds (4-31): "+U),R){g(R.bind(this,J));return}else throw J;if(G.length!==E)if(J=Error("Illegal salt length: "+G.length+" != "+E),R){g(R.bind(this,J));return}else throw J;U=1<<U>>>0;var ee,le,ke=0,Ce;Int32Array?(ee=new Int32Array(N),le=new Int32Array(B)):(ee=N.slice(),le=B.slice()),X(G,$,ee,le);function at(){if(V&&V(ke/U),ke<U)for(var gt=Date.now();ke<U&&(ke=ke+1,K($,ee,le),K(G,ee,le),!(Date.now()-gt>I)););else{for(ke=0;ke<64;ke++)for(Ce=0;Ce<Q>>1;Ce++)q(M,Ce<<1,ee,le);var Ve=[];for(ke=0;ke<Q;ke++)Ve.push((M[ke]>>24&255)>>>0),Ve.push((M[ke]>>16&255)>>>0),Ve.push((M[ke]>>8&255)>>>0),Ve.push((M[ke]&255)>>>0);if(R){R(null,Ve);return}else return Ve}R&&g(at)}if(typeof R<"u")at();else for(var Pt;;)if(typeof(Pt=at())<"u")return Pt||[]}function ce($,G,U,R){var V;if(typeof $!="string"||typeof G!="string")if(V=Error("Invalid string / salt: Not a string"),U){g(U.bind(this,V));return}else throw V;var M,Q;if(G.charAt(0)!=="$"||G.charAt(1)!=="2")if(V=Error("Invalid salt version: "+G.substring(0,2)),U){g(U.bind(this,V));return}else throw V;if(G.charAt(2)==="$")M=String.fromCharCode(0),Q=3;else{if(M=G.charAt(2),M!=="a"&&M!=="b"&&M!=="y"||G.charAt(3)!=="$")if(V=Error("Invalid salt revision: "+G.substring(2,4)),U){g(U.bind(this,V));return}else throw V;Q=4}if(G.charAt(Q+2)>"$")if(V=Error("Missing salt rounds"),U){g(U.bind(this,V));return}else throw V;var J=parseInt(G.substring(Q,Q+1),10)*10,ee=parseInt(G.substring(Q+1,Q+2),10),le=J+ee,ke=G.substring(Q+3,Q+25);$+=M>="a"?"\0":"";var Ce=m($),at=A(ke,E);function Pt(gt){var Ve=[];return Ve.push("$2"),M>="a"&&Ve.push(M),Ve.push("$"),le<10&&Ve.push("0"),Ve.push(le.toString()),Ve.push("$"),Ve.push(v(at,at.length)),Ve.push(v(gt,j.length*4-1)),Ve.join("")}if(typeof U>"u")return Pt(re(Ce,at,le));re(Ce,at,le,function(gt,Ve){gt?U(gt,null):U(null,Pt(Ve))},R)}return i.encodeBase64=v,i.decodeBase64=A,i})})(iZ);function aZ({date:o,comment:i,id:a,supabase:l,reloadComments:u,username:h,user_id:g,session_user_id:m}){const k=g===m,b=async()=>{console.log(k),k?confirm("Are you sure you want to delete this comment?")?(await l.from("comments").delete().eq("id",a),u()):console.log("delete is cancelled"):alert("You can't delete this comment! It's not yours!")};return F.jsxs("div",{className:"comment",children:[F.jsxs("div",{className:"comment-header",children:[F.jsxs("small",{children:[h," ",F.jsxs("span",{className:"time-ago",children:["• ",ef(o)?ef(o):""]})]}),k?F.jsx("img",{onClick:b,src:tZ}):""]}),F.jsx("p",{children:i})]})}const cZ="/Book-Chronicles/assets/trash-2415bf1a.png",lZ="/Book-Chronicles/assets/edit-727f5020.png";function dZ({supabase:o,session:i}){const[a,l]=se.useState({user_likes:""}),[u,h]=se.useState(!1),[g,m]=se.useState([]),[k,b]=se.useState(""),{id:y}=rT(),v=Ar(),A=i?i.user:{user_metadata:{}},x=A.user_metadata.name,E=A.id,T=E===a.user_id,P=async()=>{const{data:re,error:ce}=await o.from("posts").select().eq("id",y);l(re[0])},I=async()=>{const{data:re,error:ce}=await o.from("comments").select().order("created_at",{ascending:!1}).eq("post_id",y);m(re)};se.useEffect(()=>{P(),I(),window.scroll(0,0)},[]);const N=async()=>{if(i)if(!a.user_likes[E]&&!u){const re={...a.user_likes,[E]:!0};await o.from("posts").update({vote:a.vote+1,user_likes:re}).eq("id",y),console.log("vote has been updated..."),h(!0),l({...a,vote:a.vote+1})}else console.log("Can't like a post more than once...");else alert("You must be logged in to like a post!")},B=re=>{b(re.target.value),console.log(re.target.value)},j=async()=>{T?confirm("Are you sure you want to delete this post?")?(await o.from("posts").delete().eq("id",y),v("/Book-Chronicles")):console.log("delete is cancelled"):alert("You can't delete this post!'")},q=async()=>{T?v(`/Book-Chronicles/post/${y}/edit`):alert("You can't access this!")},Z=async()=>{await o.from("comments").insert({post_id:y,comment:k,username:x,user_id:E}),console.log("Comment is inserted into database..."),I(),b("")},K=g.map(re=>F.jsx(aZ,{date:re.created_at,comment:re.comment,id:re.id,supabase:o,reloadComments:I,username:re.username,user_id:re.user_id,session_user_id:E},re.id));let X="back-pastel-green pastel-green";return a.category=="review"?X="back-pastel-purple pastel-purple":a.category=="recommend"&&(X="back-pastel-red pastel-red"),F.jsx("div",{className:"post-container",children:F.jsxs("div",{className:"post",children:[F.jsxs("div",{className:"post-tags",children:[F.jsxs("p",{children:["Posted ",a.created_at?ef(a.created_at):" "]}),F.jsxs("p",{className:`post-category ${X}`,children:["#",a.category]})]}),F.jsx("h2",{className:"pastel-black",children:a.title}),F.jsx("img",{className:"post-image",src:a.img}),F.jsx("div",{children:kI(a.content)}),F.jsx("p",{children:F.jsx("b",{children:a.username?"~ "+a.username:""})}),F.jsxs("div",{className:"action-images",children:[F.jsxs("div",{onClick:N,className:`${a.user_likes[E]||u?"pastel-red":""} like-image`,children:[F.jsx("img",{src:mI})," ",F.jsxs("b",{children:[a.vote," ",a.vote!==1?"likes":"like"]})]}),i&&T?F.jsxs("div",{children:[F.jsx("img",{onClick:q,className:"edit-image",src:lZ}),F.jsx("img",{onClick:j,className:"delete-image",src:cZ})]}):""]}),F.jsxs("div",{className:"comments-section",children:[F.jsx("div",{className:"insert-comment-container",children:i?F.jsx("input",{onKeyUp:re=>{vI(re,Z)},value:k,onChange:B,placeholder:"Leave a comment...",type:"text"}):F.jsx("input",{disabled:!0,placeholder:"Sign in to leave a comment...",type:"text"})}),F.jsx("div",{className:"comments-container",children:K})]})]})})}function uZ({supabase:o}){const[i,a]=se.useState({title:"",content:"",img:""}),l=Ar(),{id:u}=rT(),h=async()=>{const{data:k,error:b}=await o.from("posts").select().eq("id",u);console.log(k),a(k[0])};se.useEffect(()=>{h()},[]);const g=k=>{let b,y;k.target?(b=k.target.name,y=k.target.value):(b="content",y=k.getData()),console.log("Name: ",b," value: ",y),a(v=>({...v,[b]:y})),console.log(y)},m=async()=>{await o.from("posts").update({title:i.title,content:i.content,img:i.img,category:i.category}).eq("id",u),alert("successfully updated!"),l(`/Book-Chronicles/post/${u}`)};return F.jsx("div",{children:F.jsxs("div",{className:"create-container",children:[F.jsxs("h1",{className:"create-post-title pastel-black",children:["Update ",F.jsx("span",{className:"pastel-orange",children:"Post"})]}),F.jsx(wI,{handleChange:g,post:i}),F.jsx("button",{className:"btn orange-button",onClick:m,children:"Update Post"})]})})}const Kw=o=>({async signupUser(i,a,l){const{data:u,error:h}=await o.auth.signUp({email:i,password:a,options:{data:{name:l}}});return console.log(u,h),u},async signIn(i,a){const{data:l,error:u}=await o.auth.signInWithPassword({email:i,password:a});return console.log(l),l},async getSession(){const{data:i,error:a}=await o.auth.getSession();return console.log(i),i},async logout(){const{error:i}=await o.auth.signOut();console.log(i)},eventListener(){o.auth.onAuthStateChange((i,a)=>{console.log(i,a)})}}),ml=(o,i)=>{const{name:a,value:l}=o.target;i(u=>({...u,[a]:l}))};function hZ({supabase:o}){const i=Kw(o),[a,l]=se.useState({}),u=Ar(),h=async()=>{if(a.name&&a.password&&a.email){const{user:g,session:m}=await i.signupUser(a.email,a.password,a.name);if(g){const{data:k,error:b}=await o.from("users").insert({user_id:g.id,name:g.user_metadata.name});console.log(k),alert("Signed up successfully"),u("/Book-Chronicles")}else alert("Error signing up, try again...")}else alert("You need to fill in all the fields!")};return F.jsxs(F.Fragment,{children:[F.jsx("h1",{children:"Sign Up"}),F.jsxs("form",{onSubmit:g=>g.preventDefault(),children:[F.jsx("label",{htmlFor:"email"}),F.jsx("input",{onChange:g=>ml(g,l),required:!0,placeholder:"Email",id:"email",name:"email",type:"email"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"password"}),F.jsx("input",{onChange:g=>ml(g,l),required:!0,placeholder:"Password",id:"password",name:"password",type:"text"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"name"}),F.jsx("input",{onChange:g=>ml(g,l),required:!0,placeholder:"Display Name",id:"name",name:"name",type:"text"}),F.jsx("div",{}),F.jsx("button",{onClick:h,type:"submit",className:"red-button",children:"Signup"}),F.jsx(Vi,{to:"/Book-Chronicles/signin",children:F.jsx("button",{type:"button",className:"orange-button",children:"Sign in"})})]})]})}function fZ({supabase:o}){const i=Kw(o),[a,l]=se.useState({}),u=Ar(),h=async()=>{const{user:g,session:m}=await i.signIn(a.email,a.password);g||m?(alert("Logged in."),u("/Book-Chronicles")):alert("Wrong email and / or password...")};return F.jsxs("div",{children:[F.jsx("h1",{children:"Sign In"}),F.jsxs("form",{onSubmit:g=>g.preventDefault(),children:[F.jsx("label",{htmlFor:"email"}),F.jsx("input",{onChange:g=>ml(g,l),required:!0,placeholder:"Email",id:"email",name:"email",type:"email"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"password"}),F.jsx("input",{onChange:g=>ml(g,l),required:!0,placeholder:"Password",id:"password",name:"password",type:"text"}),F.jsx("div",{}),F.jsx("button",{onClick:h,type:"submit",className:"red-button",children:"Signin"}),F.jsx(Vi,{to:"/Book-Chronicles/signup",children:F.jsx("button",{type:"submit",className:"orange-button",children:"Signup"})})]})]})}function gZ({supabase:o}){const[i,a]=se.useState([]),l=async()=>{const{data:h,error:g}=await o.from("users").select().order("name");a(h)};se.useEffect(()=>{l()},[]);const u=()=>i.map(h=>F.jsx("li",{children:h.name},h.id));return console.log(i),F.jsx("div",{children:u()})}const pZ="/Book-Chronicles/assets/arrow-up-0fb140ce.png",mZ=()=>{const[o,i]=se.useState(!1);se.useEffect(()=>{const l=()=>{window.scrollY>200?i(!0):i(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return F.jsx("div",{children:F.jsx("img",{className:`back-to-top-button ${o?"show-back-to-top":""}`,onClick:a,src:pZ})})};function kZ({supabase:o,session:i}){const a=Kw(o),l=()=>{a.logout(),alert("Logged out.")};return F.jsxs("nav",{className:"navbar navbar-inverse navbar-expand-md navbar-light",children:[F.jsx(Vi,{to:"/Book-Chronicles",children:F.jsx("img",{className:"navbar-brand",width:"64",height:"64",src:"https://img.icons8.com/cute-clipart/64/book.png",alt:"book"})}),F.jsx("div",{className:"navbar-title-container d-flex align-items-center mx-auto",children:i?F.jsx("h3",{children:i.user.user_metadata.name+"'s Bookshelf"}):F.jsx("h3",{children:"Bookshelf Chronicles"})}),F.jsx("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:F.jsx("span",{className:"navbar-toggler-icon"})}),F.jsx("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:F.jsxs("div",{className:"navbar-nav",children:[F.jsxs(Vi,{to:"/Book-Chronicles",className:"nav-item nav-link",href:"#",children:["Home ",F.jsx("span",{className:"sr-only",children:"(current)"})]}),F.jsx(Vi,{to:"/Book-Chronicles/create",className:"nav-item nav-link",href:"#",children:"Create"}),F.jsx(Vi,{to:"/Book-Chronicles/getBookInfo",className:"nav-item nav-link",href:"#",children:"Get Book"}),F.jsx(Vi,{to:"/Book-Chronicles/userposts",className:"nav-item nav-link",href:"#",children:"User Posts"}),i?"":F.jsx(Vi,{to:"/Book-Chronicles/signin",className:"nav-item nav-link",href:"#",children:"Signin"}),i?F.jsx("a",{onClick:l,className:"nav-item nav-link",href:"#",children:"Logout"}):""]})}),F.jsx(mZ,{})]})}const v5=({session:o,children:i})=>o?i:(alert("You need to sign in to access this!"),F.jsx(ZW,{to:"/Book-Chronicles/signin",replace:!0})),bZ="modulepreload",wZ=function(o){return"/Book-Chronicles/"+o},_5={},Zl=function(i,a,l){if(!a||a.length===0)return i();const u=document.getElementsByTagName("link");return Promise.all(a.map(h=>{if(h=wZ(h),h in _5)return;_5[h]=!0;const g=h.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!l)for(let y=u.length-1;y>=0;y--){const v=u[y];if(v.href===h&&(!g||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${m}`))return;const b=document.createElement("link");if(b.rel=g?"stylesheet":bZ,g||(b.as="script",b.crossOrigin=""),b.href=h,document.head.appendChild(b),g)return new Promise((y,v)=>{b.addEventListener("load",y),b.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})})).then(()=>i()).catch(h=>{const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=h,window.dispatchEvent(g),!g.defaultPrevented)throw h})},vZ=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...a)=>Zl(()=>Promise.resolve().then(()=>Kl),void 0).then(({default:l})=>l(...a)):i=fetch,(...a)=>i(...a)};class Qw extends Error{constructor(i,a="FunctionsError",l){super(i),this.name=a,this.context=l}}class _Z extends Qw{constructor(i){super("Failed to send a request to the Edge Function","FunctionsFetchError",i)}}class yZ extends Qw{constructor(i){super("Relay Error invoking the Edge Function","FunctionsRelayError",i)}}class AZ extends Qw{constructor(i){super("Edge Function returned a non-2xx status code","FunctionsHttpError",i)}}var CZ=globalThis&&globalThis.__awaiter||function(o,i,a,l){function u(h){return h instanceof a?h:new a(function(g){g(h)})}return new(a||(a=Promise))(function(h,g){function m(y){try{b(l.next(y))}catch(v){g(v)}}function k(y){try{b(l.throw(y))}catch(v){g(v)}}function b(y){y.done?h(y.value):u(y.value).then(m,k)}b((l=l.apply(o,i||[])).next())})};class xZ{constructor(i,{headers:a={},customFetch:l}={}){this.url=i,this.headers=a,this.fetch=vZ(l)}setAuth(i){this.headers.Authorization=`Bearer ${i}`}invoke(i,a={}){var l;return CZ(this,void 0,void 0,function*(){try{const{headers:u,method:h,body:g}=a;let m={},k;g&&(u&&!Object.prototype.hasOwnProperty.call(u,"Content-Type")||!u)&&(typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(m["Content-Type"]="application/octet-stream",k=g):typeof g=="string"?(m["Content-Type"]="text/plain",k=g):typeof FormData<"u"&&g instanceof FormData?k=g:(m["Content-Type"]="application/json",k=JSON.stringify(g)));const b=yield this.fetch(`${this.url}/${i}`,{method:h||"POST",headers:Object.assign(Object.assign(Object.assign({},m),this.headers),u),body:k}).catch(x=>{throw new _Z(x)}),y=b.headers.get("x-relay-error");if(y&&y==="true")throw new yZ(b);if(!b.ok)throw new AZ(b);let v=((l=b.headers.get("Content-Type"))!==null&&l!==void 0?l:"text/plain").split(";")[0].trim(),A;return v==="application/json"?A=yield b.json():v==="application/octet-stream"?A=yield b.blob():v==="multipart/form-data"?A=yield b.formData():A=yield b.text(),{data:A,error:null}}catch(u){return{data:null,error:u}}})}}var Rb={exports:{}};(function(o,i){var a=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Xo<"u")return Xo;throw new Error("unable to locate global object")},l=a();o.exports=i=l.fetch,l.fetch&&(i.default=l.fetch.bind(l)),i.Headers=l.Headers,i.Request=l.Request,i.Response=l.Response})(Rb,Rb.exports);var Jw=Rb.exports;const Xw=j5(Jw),Kl=L5({__proto__:null,default:Xw},[Jw]);class EZ{constructor(i){this.shouldThrowOnError=!1,this.method=i.method,this.url=i.url,this.headers=i.headers,this.schema=i.schema,this.body=i.body,this.shouldThrowOnError=i.shouldThrowOnError,this.signal=i.signal,this.isMaybeSingle=i.isMaybeSingle,i.fetch?this.fetch=i.fetch:typeof fetch>"u"?this.fetch=Xw:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(i,a){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const l=this.fetch;let u=l(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async h=>{var g,m,k;let b=null,y=null,v=null,A=h.status,x=h.statusText;if(h.ok){if(this.method!=="HEAD"){const I=await h.text();I===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?y=I:y=JSON.parse(I))}const T=(g=this.headers.Prefer)===null||g===void 0?void 0:g.match(/count=(exact|planned|estimated)/),P=(m=h.headers.get("content-range"))===null||m===void 0?void 0:m.split("/");T&&P&&P.length>1&&(v=parseInt(P[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(y)&&(y.length>1?(b={code:"PGRST116",details:`Results contain ${y.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},y=null,v=null,A=406,x="Not Acceptable"):y.length===1?y=y[0]:y=null)}else{const T=await h.text();try{b=JSON.parse(T),Array.isArray(b)&&h.status===404&&(y=[],b=null,A=200,x="OK")}catch{h.status===404&&T===""?(A=204,x="No Content"):b={message:T}}if(b&&this.isMaybeSingle&&(!((k=b==null?void 0:b.details)===null||k===void 0)&&k.includes("0 rows"))&&(b=null,A=200,x="OK"),b&&this.shouldThrowOnError)throw b}return{error:b,data:y,count:v,status:A,statusText:x}});return this.shouldThrowOnError||(u=u.catch(h=>{var g,m,k;return{error:{message:`${(g=h==null?void 0:h.name)!==null&&g!==void 0?g:"FetchError"}: ${h==null?void 0:h.message}`,details:`${(m=h==null?void 0:h.stack)!==null&&m!==void 0?m:""}`,hint:"",code:`${(k=h==null?void 0:h.code)!==null&&k!==void 0?k:""}`},data:null,count:null,status:0,statusText:""}})),u.then(i,a)}}class DZ extends EZ{select(i){let a=!1;const l=(i??"*").split("").map(u=>/\s/.test(u)&&!a?"":(u==='"'&&(a=!a),u)).join("");return this.url.searchParams.set("select",l),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(i,{ascending:a=!0,nullsFirst:l,foreignTable:u}={}){const h=u?`${u}.order`:"order",g=this.url.searchParams.get(h);return this.url.searchParams.set(h,`${g?`${g},`:""}${i}.${a?"asc":"desc"}${l===void 0?"":l?".nullsfirst":".nullslast"}`),this}limit(i,{foreignTable:a}={}){const l=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(l,`${i}`),this}range(i,a,{foreignTable:l}={}){const u=typeof l>"u"?"offset":`${l}.offset`,h=typeof l>"u"?"limit":`${l}.limit`;return this.url.searchParams.set(u,`${i}`),this.url.searchParams.set(h,`${a-i+1}`),this}abortSignal(i){return this.signal=i,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:i=!1,verbose:a=!1,settings:l=!1,buffers:u=!1,wal:h=!1,format:g="text"}={}){const m=[i?"analyze":null,a?"verbose":null,l?"settings":null,u?"buffers":null,h?"wal":null].filter(Boolean).join("|"),k=this.headers.Accept;return this.headers.Accept=`application/vnd.pgrst.plan+${g}; for="${k}"; options=${m};`,g==="json"?this:this}rollback(){var i;return((i=this.headers.Prefer)!==null&&i!==void 0?i:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class Qs extends DZ{eq(i,a){return this.url.searchParams.append(i,`eq.${a}`),this}neq(i,a){return this.url.searchParams.append(i,`neq.${a}`),this}gt(i,a){return this.url.searchParams.append(i,`gt.${a}`),this}gte(i,a){return this.url.searchParams.append(i,`gte.${a}`),this}lt(i,a){return this.url.searchParams.append(i,`lt.${a}`),this}lte(i,a){return this.url.searchParams.append(i,`lte.${a}`),this}like(i,a){return this.url.searchParams.append(i,`like.${a}`),this}likeAllOf(i,a){return this.url.searchParams.append(i,`like(all).{${a.join(",")}}`),this}likeAnyOf(i,a){return this.url.searchParams.append(i,`like(any).{${a.join(",")}}`),this}ilike(i,a){return this.url.searchParams.append(i,`ilike.${a}`),this}ilikeAllOf(i,a){return this.url.searchParams.append(i,`ilike(all).{${a.join(",")}}`),this}ilikeAnyOf(i,a){return this.url.searchParams.append(i,`ilike(any).{${a.join(",")}}`),this}is(i,a){return this.url.searchParams.append(i,`is.${a}`),this}in(i,a){const l=a.map(u=>typeof u=="string"&&new RegExp("[,()]").test(u)?`"${u}"`:`${u}`).join(",");return this.url.searchParams.append(i,`in.(${l})`),this}contains(i,a){return typeof a=="string"?this.url.searchParams.append(i,`cs.${a}`):Array.isArray(a)?this.url.searchParams.append(i,`cs.{${a.join(",")}}`):this.url.searchParams.append(i,`cs.${JSON.stringify(a)}`),this}containedBy(i,a){return typeof a=="string"?this.url.searchParams.append(i,`cd.${a}`):Array.isArray(a)?this.url.searchParams.append(i,`cd.{${a.join(",")}}`):this.url.searchParams.append(i,`cd.${JSON.stringify(a)}`),this}rangeGt(i,a){return this.url.searchParams.append(i,`sr.${a}`),this}rangeGte(i,a){return this.url.searchParams.append(i,`nxl.${a}`),this}rangeLt(i,a){return this.url.searchParams.append(i,`sl.${a}`),this}rangeLte(i,a){return this.url.searchParams.append(i,`nxr.${a}`),this}rangeAdjacent(i,a){return this.url.searchParams.append(i,`adj.${a}`),this}overlaps(i,a){return typeof a=="string"?this.url.searchParams.append(i,`ov.${a}`):this.url.searchParams.append(i,`ov.{${a.join(",")}}`),this}textSearch(i,a,{config:l,type:u}={}){let h="";u==="plain"?h="pl":u==="phrase"?h="ph":u==="websearch"&&(h="w");const g=l===void 0?"":`(${l})`;return this.url.searchParams.append(i,`${h}fts${g}.${a}`),this}match(i){return Object.entries(i).forEach(([a,l])=>{this.url.searchParams.append(a,`eq.${l}`)}),this}not(i,a,l){return this.url.searchParams.append(i,`not.${a}.${l}`),this}or(i,{foreignTable:a}={}){const l=a?`${a}.or`:"or";return this.url.searchParams.append(l,`(${i})`),this}filter(i,a,l){return this.url.searchParams.append(i,`${a}.${l}`),this}}class SZ{constructor(i,{headers:a={},schema:l,fetch:u}){this.url=i,this.headers=a,this.schema=l,this.fetch=u}select(i,{head:a=!1,count:l}={}){const u=a?"HEAD":"GET";let h=!1;const g=(i??"*").split("").map(m=>/\s/.test(m)&&!h?"":(m==='"'&&(h=!h),m)).join("");return this.url.searchParams.set("select",g),l&&(this.headers.Prefer=`count=${l}`),new Qs({method:u,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(i,{count:a,defaultToNull:l=!0}={}){const u="POST",h=[];if(this.headers.Prefer&&h.push(this.headers.Prefer),a&&h.push(`count=${a}`),l||h.push("missing=default"),this.headers.Prefer=h.join(","),Array.isArray(i)){const g=i.reduce((m,k)=>m.concat(Object.keys(k)),[]);if(g.length>0){const m=[...new Set(g)].map(k=>`"${k}"`);this.url.searchParams.set("columns",m.join(","))}}return new Qs({method:u,url:this.url,headers:this.headers,schema:this.schema,body:i,fetch:this.fetch,allowEmpty:!1})}upsert(i,{onConflict:a,ignoreDuplicates:l=!1,count:u,defaultToNull:h=!0}={}){const g="POST",m=[`resolution=${l?"ignore":"merge"}-duplicates`];if(a!==void 0&&this.url.searchParams.set("on_conflict",a),this.headers.Prefer&&m.push(this.headers.Prefer),u&&m.push(`count=${u}`),h||m.push("missing=default"),this.headers.Prefer=m.join(","),Array.isArray(i)){const k=i.reduce((b,y)=>b.concat(Object.keys(y)),[]);if(k.length>0){const b=[...new Set(k)].map(y=>`"${y}"`);this.url.searchParams.set("columns",b.join(","))}}return new Qs({method:g,url:this.url,headers:this.headers,schema:this.schema,body:i,fetch:this.fetch,allowEmpty:!1})}update(i,{count:a}={}){const l="PATCH",u=[];return this.headers.Prefer&&u.push(this.headers.Prefer),a&&u.push(`count=${a}`),this.headers.Prefer=u.join(","),new Qs({method:l,url:this.url,headers:this.headers,schema:this.schema,body:i,fetch:this.fetch,allowEmpty:!1})}delete({count:i}={}){const a="DELETE",l=[];return i&&l.push(`count=${i}`),this.headers.Prefer&&l.unshift(this.headers.Prefer),this.headers.Prefer=l.join(","),new Qs({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const TZ="1.8.5",IZ={"X-Client-Info":`postgrest-js/${TZ}`};class ev{constructor(i,{headers:a={},schema:l,fetch:u}={}){this.url=i,this.headers=Object.assign(Object.assign({},IZ),a),this.schemaName=l,this.fetch=u}from(i){const a=new URL(`${this.url}/${i}`);return new SZ(a,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(i){return new ev(this.url,{headers:this.headers,schema:i,fetch:this.fetch})}rpc(i,a={},{head:l=!1,count:u}={}){let h;const g=new URL(`${this.url}/rpc/${i}`);let m;l?(h="HEAD",Object.entries(a).forEach(([b,y])=>{g.searchParams.append(b,`${y}`)})):(h="POST",m=a);const k=Object.assign({},this.headers);return u&&(k.Prefer=`count=${u}`),new Qs({method:h,url:g,headers:k,schema:this.schemaName,body:m,fetch:this.fetch,allowEmpty:!1})}}var x0,y5;function MZ(){if(y5)return x0;y5=1;var o=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return x0=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return o()}try{return __global__||o()}finally{delete Object.prototype.__global__}}(),x0}const NZ="websocket",OZ="Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",BZ=["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],PZ="Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",zZ=["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],LZ="1.0.34",jZ={type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},RZ="https://github.com/theturtle32/WebSocket-Node",FZ={node:">=4.0.0"},VZ={bufferutil:"^4.0.1",debug:"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2",yaeti:"^0.0.6"},UZ={"buffer-equal":"^1.0.0",gulp:"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.9.1"},HZ={verbose:!1},$Z={test:"tape test/unit/*.js",gulp:"gulp"},WZ="index",qZ={lib:"./lib"},GZ="lib/browser.js",YZ="Apache-2.0",ZZ={name:NZ,description:OZ,keywords:BZ,author:PZ,contributors:zZ,version:LZ,repository:jZ,homepage:RZ,engines:FZ,dependencies:VZ,devDependencies:UZ,config:HZ,scripts:$Z,main:WZ,directories:qZ,browser:GZ,license:YZ};var KZ=ZZ.version,Qo;if(typeof globalThis=="object")Qo=globalThis;else try{Qo=MZ()}catch{}finally{if(!Qo&&typeof window<"u"&&(Qo=window),!Qo)throw new Error("Could not determine global this")}var jl=Qo.WebSocket||Qo.MozWebSocket,QZ=KZ;function _I(o,i){var a;return i?a=new jl(o,i):a=new jl(o),a}jl&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(o){Object.defineProperty(_I,o,{get:function(){return jl[o]}})});var JZ={w3cwebsocket:jl?_I:null,version:QZ};const XZ="2.8.4",eK={"X-Client-Info":`realtime-js/${XZ}`},tK="1.0.0",yI=1e4,nK=1e3;var kl;(function(o){o[o.connecting=0]="connecting",o[o.open=1]="open",o[o.closing=2]="closing",o[o.closed=3]="closed"})(kl||(kl={}));var Nn;(function(o){o.closed="closed",o.errored="errored",o.joined="joined",o.joining="joining",o.leaving="leaving"})(Nn||(Nn={}));var mi;(function(o){o.close="phx_close",o.error="phx_error",o.join="phx_join",o.reply="phx_reply",o.leave="phx_leave",o.access_token="access_token"})(mi||(mi={}));var Fb;(function(o){o.websocket="websocket"})(Fb||(Fb={}));var Jo;(function(o){o.Connecting="connecting",o.Open="open",o.Closing="closing",o.Closed="closed"})(Jo||(Jo={}));class AI{constructor(i,a){this.callback=i,this.timerCalc=a,this.timer=void 0,this.tries=0,this.callback=i,this.timerCalc=a}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class iK{constructor(){this.HEADER_LENGTH=1}decode(i,a){return i.constructor===ArrayBuffer?a(this._binaryDecode(i)):a(typeof i=="string"?JSON.parse(i):{})}_binaryDecode(i){const a=new DataView(i),l=new TextDecoder;return this._decodeBroadcast(i,a,l)}_decodeBroadcast(i,a,l){const u=a.getUint8(1),h=a.getUint8(2);let g=this.HEADER_LENGTH+2;const m=l.decode(i.slice(g,g+u));g=g+u;const k=l.decode(i.slice(g,g+h));g=g+h;const b=JSON.parse(l.decode(i.slice(g,i.byteLength)));return{ref:null,topic:m,event:k,payload:b}}}class E0{constructor(i,a,l={},u=yI){this.channel=i,this.event=a,this.payload=l,this.timeout=u,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(i){this.timeout=i,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(i){this.payload=Object.assign(Object.assign({},this.payload),i)}receive(i,a){var l;return this._hasReceived(i)&&a((l=this.receivedResp)===null||l===void 0?void 0:l.response),this.recHooks.push({status:i,callback:a}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const i=a=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=a,this._matchReceive(a)};this.channel._on(this.refEvent,{},i),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(i,a){this.refEvent&&this.channel._trigger(this.refEvent,{status:i,response:a})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:i,response:a}){this.recHooks.filter(l=>l.status===i).forEach(l=>l.callback(a))}_hasReceived(i){return this.receivedResp&&this.receivedResp.status===i}}var A5;(function(o){o.SYNC="sync",o.JOIN="join",o.LEAVE="leave"})(A5||(A5={}));class bl{constructor(i,a){this.channel=i,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const l=(a==null?void 0:a.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(l.state,{},u=>{const{onJoin:h,onLeave:g,onSync:m}=this.caller;this.joinRef=this.channel._joinRef(),this.state=bl.syncState(this.state,u,h,g),this.pendingDiffs.forEach(k=>{this.state=bl.syncDiff(this.state,k,h,g)}),this.pendingDiffs=[],m()}),this.channel._on(l.diff,{},u=>{const{onJoin:h,onLeave:g,onSync:m}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(u):(this.state=bl.syncDiff(this.state,u,h,g),m())}),this.onJoin((u,h,g)=>{this.channel._trigger("presence",{event:"join",key:u,currentPresences:h,newPresences:g})}),this.onLeave((u,h,g)=>{this.channel._trigger("presence",{event:"leave",key:u,currentPresences:h,leftPresences:g})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(i,a,l,u){const h=this.cloneDeep(i),g=this.transformState(a),m={},k={};return this.map(h,(b,y)=>{g[b]||(k[b]=y)}),this.map(g,(b,y)=>{const v=h[b];if(v){const A=y.map(P=>P.presence_ref),x=v.map(P=>P.presence_ref),E=y.filter(P=>x.indexOf(P.presence_ref)<0),T=v.filter(P=>A.indexOf(P.presence_ref)<0);E.length>0&&(m[b]=E),T.length>0&&(k[b]=T)}else m[b]=y}),this.syncDiff(h,{joins:m,leaves:k},l,u)}static syncDiff(i,a,l,u){const{joins:h,leaves:g}={joins:this.transformState(a.joins),leaves:this.transformState(a.leaves)};return l||(l=()=>{}),u||(u=()=>{}),this.map(h,(m,k)=>{var b;const y=(b=i[m])!==null&&b!==void 0?b:[];if(i[m]=this.cloneDeep(k),y.length>0){const v=i[m].map(x=>x.presence_ref),A=y.filter(x=>v.indexOf(x.presence_ref)<0);i[m].unshift(...A)}l(m,y,k)}),this.map(g,(m,k)=>{let b=i[m];if(!b)return;const y=k.map(v=>v.presence_ref);b=b.filter(v=>y.indexOf(v.presence_ref)<0),i[m]=b,u(m,b,k),b.length===0&&delete i[m]}),i}static map(i,a){return Object.getOwnPropertyNames(i).map(l=>a(l,i[l]))}static transformState(i){return i=this.cloneDeep(i),Object.getOwnPropertyNames(i).reduce((a,l)=>{const u=i[l];return"metas"in u?a[l]=u.metas.map(h=>(h.presence_ref=h.phx_ref,delete h.phx_ref,delete h.phx_ref_prev,h)):a[l]=u,a},{})}static cloneDeep(i){return JSON.parse(JSON.stringify(i))}onJoin(i){this.caller.onJoin=i}onLeave(i){this.caller.onLeave=i}onSync(i){this.caller.onSync=i}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var ot;(function(o){o.abstime="abstime",o.bool="bool",o.date="date",o.daterange="daterange",o.float4="float4",o.float8="float8",o.int2="int2",o.int4="int4",o.int4range="int4range",o.int8="int8",o.int8range="int8range",o.json="json",o.jsonb="jsonb",o.money="money",o.numeric="numeric",o.oid="oid",o.reltime="reltime",o.text="text",o.time="time",o.timestamp="timestamp",o.timestamptz="timestamptz",o.timetz="timetz",o.tsrange="tsrange",o.tstzrange="tstzrange"})(ot||(ot={}));const C5=(o,i,a={})=>{var l;const u=(l=a.skipTypes)!==null&&l!==void 0?l:[];return Object.keys(i).reduce((h,g)=>(h[g]=rK(g,o,i,u),h),{})},rK=(o,i,a,l)=>{const u=i.find(m=>m.name===o),h=u==null?void 0:u.type,g=a[o];return h&&!l.includes(h)?CI(h,g):Vb(g)},CI=(o,i)=>{if(o.charAt(0)==="_"){const a=o.slice(1,o.length);return cK(i,a)}switch(o){case ot.bool:return oK(i);case ot.float4:case ot.float8:case ot.int2:case ot.int4:case ot.int8:case ot.numeric:case ot.oid:return sK(i);case ot.json:case ot.jsonb:return aK(i);case ot.timestamp:return lK(i);case ot.abstime:case ot.date:case ot.daterange:case ot.int4range:case ot.int8range:case ot.money:case ot.reltime:case ot.text:case ot.time:case ot.timestamptz:case ot.timetz:case ot.tsrange:case ot.tstzrange:return Vb(i);default:return Vb(i)}},Vb=o=>o,oK=o=>{switch(o){case"t":return!0;case"f":return!1;default:return o}},sK=o=>{if(typeof o=="string"){const i=parseFloat(o);if(!Number.isNaN(i))return i}return o},aK=o=>{if(typeof o=="string")try{return JSON.parse(o)}catch(i){return console.log(`JSON parse error: ${i}`),o}return o},cK=(o,i)=>{if(typeof o!="string")return o;const a=o.length-1,l=o[a];if(o[0]==="{"&&l==="}"){let h;const g=o.slice(1,a);try{h=JSON.parse("["+g+"]")}catch{h=g?g.split(","):[]}return h.map(m=>CI(i,m))}return o},lK=o=>typeof o=="string"?o.replace(" ","T"):o;var x5;(function(o){o.ALL="*",o.INSERT="INSERT",o.UPDATE="UPDATE",o.DELETE="DELETE"})(x5||(x5={}));var E5;(function(o){o.BROADCAST="broadcast",o.PRESENCE="presence",o.POSTGRES_CHANGES="postgres_changes"})(E5||(E5={}));var D5;(function(o){o.SUBSCRIBED="SUBSCRIBED",o.TIMED_OUT="TIMED_OUT",o.CLOSED="CLOSED",o.CHANNEL_ERROR="CHANNEL_ERROR"})(D5||(D5={}));class tv{constructor(i,a={config:{}},l){this.topic=i,this.params=a,this.socket=l,this.bindings={},this.state=Nn.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=i.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},a.config),this.timeout=this.socket.timeout,this.joinPush=new E0(this,mi.join,this.params,this.timeout),this.rejoinTimer=new AI(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Nn.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(u=>u.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Nn.closed,this.socket._remove(this)}),this._onError(u=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,u),this.state=Nn.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Nn.errored,this.rejoinTimer.scheduleTimeout())}),this._on(mi.reply,{},(u,h)=>{this._trigger(this._replyEventName(h),u)}),this.presence=new bl(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(i,a=this.timeout){var l,u;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:h,presence:g}}=this.params;this._onError(b=>i&&i("CHANNEL_ERROR",b)),this._onClose(()=>i&&i("CLOSED"));const m={},k={broadcast:h,presence:g,postgres_changes:(u=(l=this.bindings.postgres_changes)===null||l===void 0?void 0:l.map(b=>b.filter))!==null&&u!==void 0?u:[]};this.socket.accessToken&&(m.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:k},m)),this.joinedOnce=!0,this._rejoin(a),this.joinPush.receive("ok",({postgres_changes:b})=>{var y;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),b===void 0){i&&i("SUBSCRIBED");return}else{const v=this.bindings.postgres_changes,A=(y=v==null?void 0:v.length)!==null&&y!==void 0?y:0,x=[];for(let E=0;E<A;E++){const T=v[E],{filter:{event:P,schema:I,table:N,filter:B}}=T,j=b&&b[E];if(j&&j.event===P&&j.schema===I&&j.table===N&&j.filter===B)x.push(Object.assign(Object.assign({},T),{id:j.id}));else{this.unsubscribe(),i&&i("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=x,i&&i("SUBSCRIBED");return}}).receive("error",b=>{i&&i("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(b).join(", ")||"error")))}).receive("timeout",()=>{i&&i("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(i,a={}){return await this.send({type:"presence",event:"track",payload:i},a.timeout||this.timeout)}async untrack(i={}){return await this.send({type:"presence",event:"untrack"},i)}on(i,a,l){return this._on(i,a,l)}async send(i,a={}){var l,u;if(!this._canPush()&&i.type==="broadcast"){const{event:h,payload:g}=i,m={method:"POST",headers:{apikey:(l=this.socket.accessToken)!==null&&l!==void 0?l:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:h,payload:g}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,m,(u=a.timeout)!==null&&u!==void 0?u:this.timeout)).ok?"ok":"error"}catch(k){return k.name==="AbortError"?"timed out":"error"}}else return new Promise(h=>{var g,m,k;const b=this._push(i.type,i,a.timeout||this.timeout);i.type==="broadcast"&&!(!((k=(m=(g=this.params)===null||g===void 0?void 0:g.config)===null||m===void 0?void 0:m.broadcast)===null||k===void 0)&&k.ack)&&h("ok"),b.receive("ok",()=>h("ok")),b.receive("timeout",()=>h("timed out"))})}updateJoinPayload(i){this.joinPush.updatePayload(i)}unsubscribe(i=this.timeout){this.state=Nn.leaving;const a=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(mi.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(l=>{const u=new E0(this,mi.leave,{},i);u.receive("ok",()=>{a(),l("ok")}).receive("timeout",()=>{a(),l("timed out")}).receive("error",()=>{l("error")}),u.send(),this._canPush()||u.trigger("ok",{})})}_broadcastEndpointURL(){let i=this.socket.endPoint;return i=i.replace(/^ws/i,"http"),i=i.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),i.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(i,a,l){const u=new AbortController,h=setTimeout(()=>u.abort(),l),g=await this.socket.fetch(i,Object.assign(Object.assign({},a),{signal:u.signal}));return clearTimeout(h),g}_push(i,a,l=this.timeout){if(!this.joinedOnce)throw`tried to push '${i}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let u=new E0(this,i,a,l);return this._canPush()?u.send():(u.startTimeout(),this.pushBuffer.push(u)),u}_onMessage(i,a,l){return a}_isMember(i){return this.topic===i}_joinRef(){return this.joinPush.ref}_trigger(i,a,l){var u,h;const g=i.toLocaleLowerCase(),{close:m,error:k,leave:b,join:y}=mi;if(l&&[m,k,b,y].indexOf(g)>=0&&l!==this._joinRef())return;let A=this._onMessage(g,a,l);if(a&&!A)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(g)?(u=this.bindings.postgres_changes)===null||u===void 0||u.filter(x=>{var E,T,P;return((E=x.filter)===null||E===void 0?void 0:E.event)==="*"||((P=(T=x.filter)===null||T===void 0?void 0:T.event)===null||P===void 0?void 0:P.toLocaleLowerCase())===g}).map(x=>x.callback(A,l)):(h=this.bindings[g])===null||h===void 0||h.filter(x=>{var E,T,P,I,N,B;if(["broadcast","presence","postgres_changes"].includes(g))if("id"in x){const j=x.id,q=(E=x.filter)===null||E===void 0?void 0:E.event;return j&&((T=a.ids)===null||T===void 0?void 0:T.includes(j))&&(q==="*"||(q==null?void 0:q.toLocaleLowerCase())===((P=a.data)===null||P===void 0?void 0:P.type.toLocaleLowerCase()))}else{const j=(N=(I=x==null?void 0:x.filter)===null||I===void 0?void 0:I.event)===null||N===void 0?void 0:N.toLocaleLowerCase();return j==="*"||j===((B=a==null?void 0:a.event)===null||B===void 0?void 0:B.toLocaleLowerCase())}else return x.type.toLocaleLowerCase()===g}).map(x=>{if(typeof A=="object"&&"ids"in A){const E=A.data,{schema:T,table:P,commit_timestamp:I,type:N,errors:B}=E;A=Object.assign(Object.assign({},{schema:T,table:P,commit_timestamp:I,eventType:N,new:{},old:{},errors:B}),this._getPayloadRecords(E))}x.callback(A,l)})}_isClosed(){return this.state===Nn.closed}_isJoined(){return this.state===Nn.joined}_isJoining(){return this.state===Nn.joining}_isLeaving(){return this.state===Nn.leaving}_replyEventName(i){return`chan_reply_${i}`}_on(i,a,l){const u=i.toLocaleLowerCase(),h={type:u,filter:a,callback:l};return this.bindings[u]?this.bindings[u].push(h):this.bindings[u]=[h],this}_off(i,a){const l=i.toLocaleLowerCase();return this.bindings[l]=this.bindings[l].filter(u=>{var h;return!(((h=u.type)===null||h===void 0?void 0:h.toLocaleLowerCase())===l&&tv.isEqual(u.filter,a))}),this}static isEqual(i,a){if(Object.keys(i).length!==Object.keys(a).length)return!1;for(const l in i)if(i[l]!==a[l])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(i){this._on(mi.close,{},i)}_onError(i){this._on(mi.error,{},a=>i(a))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(i=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Nn.joining,this.joinPush.resend(i))}_getPayloadRecords(i){const a={new:{},old:{}};return(i.type==="INSERT"||i.type==="UPDATE")&&(a.new=C5(i.columns,i.record)),(i.type==="UPDATE"||i.type==="DELETE")&&(a.old=C5(i.columns,i.old_record)),a}}const dK=()=>{};class uK{constructor(i,a){var l;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=eK,this.params={},this.timeout=yI,this.transport=JZ.w3cwebsocket,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=dK,this.conn=null,this.sendBuffer=[],this.serializer=new iK,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=h=>{let g;return h?g=h:typeof fetch>"u"?g=(...m)=>Zl(()=>Promise.resolve().then(()=>Kl),void 0).then(({default:k})=>k(...m)):g=fetch,(...m)=>g(...m)},this.endPoint=`${i}/${Fb.websocket}`,a!=null&&a.params&&(this.params=a.params),a!=null&&a.headers&&(this.headers=Object.assign(Object.assign({},this.headers),a.headers)),a!=null&&a.timeout&&(this.timeout=a.timeout),a!=null&&a.logger&&(this.logger=a.logger),a!=null&&a.transport&&(this.transport=a.transport),a!=null&&a.heartbeatIntervalMs&&(this.heartbeatIntervalMs=a.heartbeatIntervalMs);const u=(l=a==null?void 0:a.params)===null||l===void 0?void 0:l.apikey;u&&(this.accessToken=u),this.reconnectAfterMs=a!=null&&a.reconnectAfterMs?a.reconnectAfterMs:h=>[1e3,2e3,5e3,1e4][h-1]||1e4,this.encode=a!=null&&a.encode?a.encode:(h,g)=>g(JSON.stringify(h)),this.decode=a!=null&&a.decode?a.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new AI(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(a==null?void 0:a.fetch)}connect(){this.conn||(this.conn=new this.transport(this._endPointURL(),[],null,this.headers),this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=i=>this._onConnError(i),this.conn.onmessage=i=>this._onConnMessage(i),this.conn.onclose=i=>this._onConnClose(i)))}disconnect(i,a){this.conn&&(this.conn.onclose=function(){},i?this.conn.close(i,a??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(i){const a=await i.unsubscribe();return this.channels.length===0&&this.disconnect(),a}async removeAllChannels(){const i=await Promise.all(this.channels.map(a=>a.unsubscribe()));return this.disconnect(),i}log(i,a,l){this.logger(i,a,l)}connectionState(){switch(this.conn&&this.conn.readyState){case kl.connecting:return Jo.Connecting;case kl.open:return Jo.Open;case kl.closing:return Jo.Closing;default:return Jo.Closed}}isConnected(){return this.connectionState()===Jo.Open}channel(i,a={config:{}}){const l=new tv(`realtime:${i}`,a,this);return this.channels.push(l),l}push(i){const{topic:a,event:l,payload:u,ref:h}=i,g=()=>{this.encode(i,m=>{var k;(k=this.conn)===null||k===void 0||k.send(m)})};this.log("push",`${a} ${l} (${h})`,u),this.isConnected()?g():this.sendBuffer.push(g)}setAuth(i){this.accessToken=i,this.channels.forEach(a=>{i&&a.updateJoinPayload({access_token:i}),a.joinedOnce&&a._isJoined()&&a._push(mi.access_token,{access_token:i})})}_makeRef(){let i=this.ref+1;return i===this.ref?this.ref=0:this.ref=i,this.ref.toString()}_leaveOpenTopic(i){let a=this.channels.find(l=>l.topic===i&&(l._isJoined()||l._isJoining()));a&&(this.log("transport",`leaving duplicate topic "${i}"`),a.unsubscribe())}_remove(i){this.channels=this.channels.filter(a=>a._joinRef()!==i._joinRef())}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:tK}))}_onConnMessage(i){this.decode(i.data,a=>{let{topic:l,event:u,payload:h,ref:g}=a;(g&&g===this.pendingHeartbeatRef||u===(h==null?void 0:h.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${h.status||""} ${l} ${u} ${g&&"("+g+")"||""}`,h),this.channels.filter(m=>m._isMember(l)).forEach(m=>m._trigger(u,h,g)),this.stateChangeCallbacks.message.forEach(m=>m(a))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(i=>i())}_onConnClose(i){this.log("transport","close",i),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(a=>a(i))}_onConnError(i){this.log("transport",i.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(a=>a(i))}_triggerChanError(){this.channels.forEach(i=>i._trigger(mi.error))}_appendParams(i,a){if(Object.keys(a).length===0)return i;const l=i.match(/\?/)?"&":"?",u=new URLSearchParams(a);return`${i}${l}${u}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(i=>i()),this.sendBuffer=[])}_sendHeartbeat(){var i;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(i=this.conn)===null||i===void 0||i.close(nK,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class nv extends Error{constructor(i){super(i),this.__isStorageError=!0,this.name="StorageError"}}function rn(o){return typeof o=="object"&&o!==null&&"__isStorageError"in o}class hK extends nv{constructor(i,a){super(i),this.name="StorageApiError",this.status=a}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class S5 extends nv{constructor(i,a){super(i),this.name="StorageUnknownError",this.originalError=a}}var fK=globalThis&&globalThis.__awaiter||function(o,i,a,l){function u(h){return h instanceof a?h:new a(function(g){g(h)})}return new(a||(a=Promise))(function(h,g){function m(y){try{b(l.next(y))}catch(v){g(v)}}function k(y){try{b(l.throw(y))}catch(v){g(v)}}function b(y){y.done?h(y.value):u(y.value).then(m,k)}b((l=l.apply(o,i||[])).next())})};const xI=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...a)=>Zl(()=>Promise.resolve().then(()=>Kl),void 0).then(({default:l})=>l(...a)):i=fetch,(...a)=>i(...a)},gK=()=>fK(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Zl(()=>Promise.resolve().then(()=>Kl),void 0)).Response:Response});var La=globalThis&&globalThis.__awaiter||function(o,i,a,l){function u(h){return h instanceof a?h:new a(function(g){g(h)})}return new(a||(a=Promise))(function(h,g){function m(y){try{b(l.next(y))}catch(v){g(v)}}function k(y){try{b(l.throw(y))}catch(v){g(v)}}function b(y){y.done?h(y.value):u(y.value).then(m,k)}b((l=l.apply(o,i||[])).next())})};const D0=o=>o.msg||o.message||o.error_description||o.error||JSON.stringify(o),pK=(o,i)=>La(void 0,void 0,void 0,function*(){const a=yield gK();o instanceof a?o.json().then(l=>{i(new hK(D0(l),o.status||500))}).catch(l=>{i(new S5(D0(l),l))}):i(new S5(D0(o),o))}),mK=(o,i,a,l)=>{const u={method:o,headers:(i==null?void 0:i.headers)||{}};return o==="GET"?u:(u.headers=Object.assign({"Content-Type":"application/json"},i==null?void 0:i.headers),u.body=JSON.stringify(l),Object.assign(Object.assign({},u),a))};function xf(o,i,a,l,u,h){return La(this,void 0,void 0,function*(){return new Promise((g,m)=>{o(a,mK(i,l,u,h)).then(k=>{if(!k.ok)throw k;return l!=null&&l.noResolveJson?k:k.json()}).then(k=>g(k)).catch(k=>pK(k,m))})})}function Ub(o,i,a,l){return La(this,void 0,void 0,function*(){return xf(o,"GET",i,a,l)})}function Yr(o,i,a,l,u){return La(this,void 0,void 0,function*(){return xf(o,"POST",i,l,u,a)})}function kK(o,i,a,l,u){return La(this,void 0,void 0,function*(){return xf(o,"PUT",i,l,u,a)})}function EI(o,i,a,l,u){return La(this,void 0,void 0,function*(){return xf(o,"DELETE",i,l,u,a)})}var Zn=globalThis&&globalThis.__awaiter||function(o,i,a,l){function u(h){return h instanceof a?h:new a(function(g){g(h)})}return new(a||(a=Promise))(function(h,g){function m(y){try{b(l.next(y))}catch(v){g(v)}}function k(y){try{b(l.throw(y))}catch(v){g(v)}}function b(y){y.done?h(y.value):u(y.value).then(m,k)}b((l=l.apply(o,i||[])).next())})};const bK={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},T5={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class wK{constructor(i,a={},l,u){this.url=i,this.headers=a,this.bucketId=l,this.fetch=xI(u)}uploadOrUpdate(i,a,l,u){return Zn(this,void 0,void 0,function*(){try{let h;const g=Object.assign(Object.assign({},T5),u),m=Object.assign(Object.assign({},this.headers),i==="POST"&&{"x-upsert":String(g.upsert)});typeof Blob<"u"&&l instanceof Blob?(h=new FormData,h.append("cacheControl",g.cacheControl),h.append("",l)):typeof FormData<"u"&&l instanceof FormData?(h=l,h.append("cacheControl",g.cacheControl)):(h=l,m["cache-control"]=`max-age=${g.cacheControl}`,m["content-type"]=g.contentType);const k=this._removeEmptyFolders(a),b=this._getFinalPath(k),y=yield this.fetch(`${this.url}/object/${b}`,Object.assign({method:i,body:h,headers:m},g!=null&&g.duplex?{duplex:g.duplex}:{}));return y.ok?{data:{path:k},error:null}:{data:null,error:yield y.json()}}catch(h){if(rn(h))return{data:null,error:h};throw h}})}upload(i,a,l){return Zn(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",i,a,l)})}uploadToSignedUrl(i,a,l,u){return Zn(this,void 0,void 0,function*(){const h=this._removeEmptyFolders(i),g=this._getFinalPath(h),m=new URL(this.url+`/object/upload/sign/${g}`);m.searchParams.set("token",a);try{let k;const b=Object.assign({upsert:T5.upsert},u),y=Object.assign(Object.assign({},this.headers),{"x-upsert":String(b.upsert)});typeof Blob<"u"&&l instanceof Blob?(k=new FormData,k.append("cacheControl",b.cacheControl),k.append("",l)):typeof FormData<"u"&&l instanceof FormData?(k=l,k.append("cacheControl",b.cacheControl)):(k=l,y["cache-control"]=`max-age=${b.cacheControl}`,y["content-type"]=b.contentType);const v=yield this.fetch(m.toString(),{method:"PUT",body:k,headers:y});return v.ok?{data:{path:h},error:null}:{data:null,error:yield v.json()}}catch(k){if(rn(k))return{data:null,error:k};throw k}})}createSignedUploadUrl(i){return Zn(this,void 0,void 0,function*(){try{let a=this._getFinalPath(i);const l=yield Yr(this.fetch,`${this.url}/object/upload/sign/${a}`,{},{headers:this.headers}),u=new URL(this.url+l.url),h=u.searchParams.get("token");if(!h)throw new nv("No token returned by API");return{data:{signedUrl:u.toString(),path:i,token:h},error:null}}catch(a){if(rn(a))return{data:null,error:a};throw a}})}update(i,a,l){return Zn(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",i,a,l)})}move(i,a){return Zn(this,void 0,void 0,function*(){try{return{data:yield Yr(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:i,destinationKey:a},{headers:this.headers}),error:null}}catch(l){if(rn(l))return{data:null,error:l};throw l}})}copy(i,a){return Zn(this,void 0,void 0,function*(){try{return{data:{path:(yield Yr(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:i,destinationKey:a},{headers:this.headers})).Key},error:null}}catch(l){if(rn(l))return{data:null,error:l};throw l}})}createSignedUrl(i,a,l){return Zn(this,void 0,void 0,function*(){try{let u=this._getFinalPath(i),h=yield Yr(this.fetch,`${this.url}/object/sign/${u}`,Object.assign({expiresIn:a},l!=null&&l.transform?{transform:l.transform}:{}),{headers:this.headers});const g=l!=null&&l.download?`&download=${l.download===!0?"":l.download}`:"";return h={signedUrl:encodeURI(`${this.url}${h.signedURL}${g}`)},{data:h,error:null}}catch(u){if(rn(u))return{data:null,error:u};throw u}})}createSignedUrls(i,a,l){return Zn(this,void 0,void 0,function*(){try{const u=yield Yr(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:a,paths:i},{headers:this.headers}),h=l!=null&&l.download?`&download=${l.download===!0?"":l.download}`:"";return{data:u.map(g=>Object.assign(Object.assign({},g),{signedUrl:g.signedURL?encodeURI(`${this.url}${g.signedURL}${h}`):null})),error:null}}catch(u){if(rn(u))return{data:null,error:u};throw u}})}download(i,a){return Zn(this,void 0,void 0,function*(){const u=typeof(a==null?void 0:a.transform)<"u"?"render/image/authenticated":"object",h=this.transformOptsToQueryString((a==null?void 0:a.transform)||{}),g=h?`?${h}`:"";try{const m=this._getFinalPath(i);return{data:yield(yield Ub(this.fetch,`${this.url}/${u}/${m}${g}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(m){if(rn(m))return{data:null,error:m};throw m}})}getPublicUrl(i,a){const l=this._getFinalPath(i),u=[],h=a!=null&&a.download?`download=${a.download===!0?"":a.download}`:"";h!==""&&u.push(h);const m=typeof(a==null?void 0:a.transform)<"u"?"render/image":"object",k=this.transformOptsToQueryString((a==null?void 0:a.transform)||{});k!==""&&u.push(k);let b=u.join("&");return b!==""&&(b=`?${b}`),{data:{publicUrl:encodeURI(`${this.url}/${m}/public/${l}${b}`)}}}remove(i){return Zn(this,void 0,void 0,function*(){try{return{data:yield EI(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:i},{headers:this.headers}),error:null}}catch(a){if(rn(a))return{data:null,error:a};throw a}})}list(i,a,l){return Zn(this,void 0,void 0,function*(){try{const u=Object.assign(Object.assign(Object.assign({},bK),a),{prefix:i||""});return{data:yield Yr(this.fetch,`${this.url}/object/list/${this.bucketId}`,u,{headers:this.headers},l),error:null}}catch(u){if(rn(u))return{data:null,error:u};throw u}})}_getFinalPath(i){return`${this.bucketId}/${i}`}_removeEmptyFolders(i){return i.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(i){const a=[];return i.width&&a.push(`width=${i.width}`),i.height&&a.push(`height=${i.height}`),i.resize&&a.push(`resize=${i.resize}`),i.format&&a.push(`format=${i.format}`),i.quality&&a.push(`quality=${i.quality}`),a.join("&")}}const vK="2.5.4",_K={"X-Client-Info":`storage-js/${vK}`};var Gs=globalThis&&globalThis.__awaiter||function(o,i,a,l){function u(h){return h instanceof a?h:new a(function(g){g(h)})}return new(a||(a=Promise))(function(h,g){function m(y){try{b(l.next(y))}catch(v){g(v)}}function k(y){try{b(l.throw(y))}catch(v){g(v)}}function b(y){y.done?h(y.value):u(y.value).then(m,k)}b((l=l.apply(o,i||[])).next())})};class yK{constructor(i,a={},l){this.url=i,this.headers=Object.assign(Object.assign({},_K),a),this.fetch=xI(l)}listBuckets(){return Gs(this,void 0,void 0,function*(){try{return{data:yield Ub(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(i){if(rn(i))return{data:null,error:i};throw i}})}getBucket(i){return Gs(this,void 0,void 0,function*(){try{return{data:yield Ub(this.fetch,`${this.url}/bucket/${i}`,{headers:this.headers}),error:null}}catch(a){if(rn(a))return{data:null,error:a};throw a}})}createBucket(i,a={public:!1}){return Gs(this,void 0,void 0,function*(){try{return{data:yield Yr(this.fetch,`${this.url}/bucket`,{id:i,name:i,public:a.public,file_size_limit:a.fileSizeLimit,allowed_mime_types:a.allowedMimeTypes},{headers:this.headers}),error:null}}catch(l){if(rn(l))return{data:null,error:l};throw l}})}updateBucket(i,a){return Gs(this,void 0,void 0,function*(){try{return{data:yield kK(this.fetch,`${this.url}/bucket/${i}`,{id:i,name:i,public:a.public,file_size_limit:a.fileSizeLimit,allowed_mime_types:a.allowedMimeTypes},{headers:this.headers}),error:null}}catch(l){if(rn(l))return{data:null,error:l};throw l}})}emptyBucket(i){return Gs(this,void 0,void 0,function*(){try{return{data:yield Yr(this.fetch,`${this.url}/bucket/${i}/empty`,{},{headers:this.headers}),error:null}}catch(a){if(rn(a))return{data:null,error:a};throw a}})}deleteBucket(i){return Gs(this,void 0,void 0,function*(){try{return{data:yield EI(this.fetch,`${this.url}/bucket/${i}`,{},{headers:this.headers}),error:null}}catch(a){if(rn(a))return{data:null,error:a};throw a}})}}class AK extends yK{constructor(i,a={},l){super(i,a,l)}from(i){return new wK(this.url,this.headers,i,this.fetch)}}const CK="2.38.4";let il="";typeof Deno<"u"?il="deno":typeof document<"u"?il="web":typeof navigator<"u"&&navigator.product==="ReactNative"?il="react-native":il="node";const xK={"X-Client-Info":`supabase-js-${il}/${CK}`};var EK=globalThis&&globalThis.__awaiter||function(o,i,a,l){function u(h){return h instanceof a?h:new a(function(g){g(h)})}return new(a||(a=Promise))(function(h,g){function m(y){try{b(l.next(y))}catch(v){g(v)}}function k(y){try{b(l.throw(y))}catch(v){g(v)}}function b(y){y.done?h(y.value):u(y.value).then(m,k)}b((l=l.apply(o,i||[])).next())})};const DK=o=>{let i;return o?i=o:typeof fetch>"u"?i=Xw:i=fetch,(...a)=>i(...a)},SK=()=>typeof Headers>"u"?Jw.Headers:Headers,TK=(o,i,a)=>{const l=DK(a),u=SK();return(h,g)=>EK(void 0,void 0,void 0,function*(){var m;const k=(m=yield i())!==null&&m!==void 0?m:o;let b=new u(g==null?void 0:g.headers);return b.has("apikey")||b.set("apikey",o),b.has("Authorization")||b.set("Authorization",`Bearer ${k}`),l(h,Object.assign(Object.assign({},g),{headers:b}))})};function IK(o){return o.replace(/\/$/,"")}function MK(o,i){const{db:a,auth:l,realtime:u,global:h}=o,{db:g,auth:m,realtime:k,global:b}=i;return{db:Object.assign(Object.assign({},g),a),auth:Object.assign(Object.assign({},m),l),realtime:Object.assign(Object.assign({},k),u),global:Object.assign(Object.assign({},b),h)}}function NK(o){return Math.round(Date.now()/1e3)+o}function OK(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){const i=Math.random()*16|0;return(o=="x"?i:i&3|8).toString(16)})}const cr=()=>typeof document<"u",qo={tested:!1,writable:!1},wl=()=>{if(!cr())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(qo.tested)return qo.writable;const o=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(o,o),globalThis.localStorage.removeItem(o),qo.tested=!0,qo.writable=!0}catch{qo.tested=!0,qo.writable=!1}return qo.writable};function S0(o){const i={},a=new URL(o);if(a.hash&&a.hash[0]==="#")try{new URLSearchParams(a.hash.substring(1)).forEach((u,h)=>{i[h]=u})}catch{}return a.searchParams.forEach((l,u)=>{i[u]=l}),i}const DI=o=>{let i;return o?i=o:typeof fetch>"u"?i=(...a)=>Zl(()=>Promise.resolve().then(()=>Kl),void 0).then(({default:l})=>l(...a)):i=fetch,(...a)=>i(...a)},BK=o=>typeof o=="object"&&o!==null&&"status"in o&&"ok"in o&&"json"in o&&typeof o.json=="function",Go=async(o,i,a)=>{await o.setItem(i,JSON.stringify(a))},oh=async(o,i)=>{const a=await o.getItem(i);if(!a)return null;try{return JSON.parse(a)}catch{return a}},T0=async(o,i)=>{await o.removeItem(i)};function PK(o){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let a="",l,u,h,g,m,k,b,y=0;for(o=o.replace("-","+").replace("_","/");y<o.length;)g=i.indexOf(o.charAt(y++)),m=i.indexOf(o.charAt(y++)),k=i.indexOf(o.charAt(y++)),b=i.indexOf(o.charAt(y++)),l=g<<2|m>>4,u=(m&15)<<4|k>>2,h=(k&3)<<6|b,a=a+String.fromCharCode(l),k!=64&&u!=0&&(a=a+String.fromCharCode(u)),b!=64&&h!=0&&(a=a+String.fromCharCode(h));return a}class Ef{constructor(){this.promise=new Ef.promiseConstructor((i,a)=>{this.resolve=i,this.reject=a})}}Ef.promiseConstructor=Promise;function I5(o){const i=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,a=o.split(".");if(a.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!i.test(a[1]))throw new Error("JWT is not valid: payload is not in base64url format");const l=a[1];return JSON.parse(PK(l))}async function zK(o){return await new Promise(i=>{setTimeout(()=>i(null),o)})}function LK(o,i){return new Promise((l,u)=>{(async()=>{for(let h=0;h<1/0;h++)try{const g=await o(h);if(!i(h,null,g)){l(g);return}}catch(g){if(!i(h,g)){u(g);return}}})()})}function jK(o){return("0"+o.toString(16)).substr(-2)}function Ys(){const i=new Uint32Array(56);if(typeof crypto>"u"){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",l=a.length;let u="";for(let h=0;h<56;h++)u+=a.charAt(Math.floor(Math.random()*l));return u}return crypto.getRandomValues(i),Array.from(i,jK).join("")}async function RK(o){const a=new TextEncoder().encode(o),l=await crypto.subtle.digest("SHA-256",a),u=new Uint8Array(l);return Array.from(u).map(h=>String.fromCharCode(h)).join("")}function FK(o){return btoa(o).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Zs(o){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),o;const a=await RK(o);return FK(a)}class iv extends Error{constructor(i,a){super(i),this.__isAuthError=!0,this.name="AuthError",this.status=a}}function ze(o){return typeof o=="object"&&o!==null&&"__isAuthError"in o}class VK extends iv{constructor(i,a){super(i,a),this.name="AuthApiError",this.status=a}toJSON(){return{name:this.name,message:this.message,status:this.status}}}function UK(o){return ze(o)&&o.name==="AuthApiError"}class SI extends iv{constructor(i,a){super(i),this.name="AuthUnknownError",this.originalError=a}}class ja extends iv{constructor(i,a,l){super(i),this.name=a,this.status=l}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Ks extends ja{constructor(){super("Auth session missing!","AuthSessionMissingError",400)}}class I0 extends ja{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500)}}class sh extends ja{constructor(i){super(i,"AuthInvalidCredentialsError",400)}}class ah extends ja{constructor(i,a=null){super(i,"AuthImplicitGrantRedirectError",500),this.details=null,this.details=a}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class M5 extends ja{constructor(i,a=null){super(i,"AuthPKCEGrantCodeExchangeError",500),this.details=null,this.details=a}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Hb extends ja{constructor(i,a){super(i,"AuthRetryableFetchError",a)}}function N5(o){return ze(o)&&o.name==="AuthRetryableFetchError"}var HK=globalThis&&globalThis.__rest||function(o,i){var a={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&i.indexOf(l)<0&&(a[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(o);u<l.length;u++)i.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(o,l[u])&&(a[l[u]]=o[l[u]]);return a};const rl=o=>o.msg||o.message||o.error_description||o.error||JSON.stringify(o),$K=[502,503,504];async function O5(o){if(!BK(o))throw new Hb(rl(o),0);if($K.includes(o.status))throw new Hb(rl(o),o.status);let i;try{i=await o.json()}catch(a){throw new SI(rl(a),a)}throw new VK(rl(i),o.status||500)}const WK=(o,i,a,l)=>{const u={method:o,headers:(i==null?void 0:i.headers)||{}};return o==="GET"?u:(u.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},i==null?void 0:i.headers),u.body=JSON.stringify(l),Object.assign(Object.assign({},u),a))};async function Fe(o,i,a,l){var u;const h=Object.assign({},l==null?void 0:l.headers);l!=null&&l.jwt&&(h.Authorization=`Bearer ${l.jwt}`);const g=(u=l==null?void 0:l.query)!==null&&u!==void 0?u:{};l!=null&&l.redirectTo&&(g.redirect_to=l.redirectTo);const m=Object.keys(g).length?"?"+new URLSearchParams(g).toString():"",k=await qK(o,i,a+m,{headers:h,noResolveJson:l==null?void 0:l.noResolveJson},{},l==null?void 0:l.body);return l!=null&&l.xform?l==null?void 0:l.xform(k):{data:Object.assign({},k),error:null}}async function qK(o,i,a,l,u,h){const g=WK(i,l,u,h);let m;try{m=await o(a,g)}catch(k){throw console.error(k),new Hb(rl(k),0)}if(m.ok||await O5(m),l!=null&&l.noResolveJson)return m;try{return await m.json()}catch(k){await O5(k)}}function $r(o){var i;let a=null;KK(o)&&(a=Object.assign({},o),o.expires_at||(a.expires_at=NK(o.expires_in)));const l=(i=o.user)!==null&&i!==void 0?i:o;return{data:{session:a,user:l},error:null}}function Jr(o){var i;return{data:{user:(i=o.user)!==null&&i!==void 0?i:o},error:null}}function GK(o){return{data:o,error:null}}function YK(o){const{action_link:i,email_otp:a,hashed_token:l,redirect_to:u,verification_type:h}=o,g=HK(o,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),m={action_link:i,email_otp:a,hashed_token:l,redirect_to:u,verification_type:h},k=Object.assign({},g);return{data:{properties:m,user:k},error:null}}function ZK(o){return o}function KK(o){return o.access_token&&o.refresh_token&&o.expires_in}var QK=globalThis&&globalThis.__rest||function(o,i){var a={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&i.indexOf(l)<0&&(a[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(o);u<l.length;u++)i.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(o,l[u])&&(a[l[u]]=o[l[u]]);return a};class JK{constructor({url:i="",headers:a={},fetch:l}){this.url=i,this.headers=a,this.fetch=DI(l),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(i,a="global"){try{return await Fe(this.fetch,"POST",`${this.url}/logout?scope=${a}`,{headers:this.headers,jwt:i,noResolveJson:!0}),{data:null,error:null}}catch(l){if(ze(l))return{data:null,error:l};throw l}}async inviteUserByEmail(i,a={}){try{return await Fe(this.fetch,"POST",`${this.url}/invite`,{body:{email:i,data:a.data},headers:this.headers,redirectTo:a.redirectTo,xform:Jr})}catch(l){if(ze(l))return{data:{user:null},error:l};throw l}}async generateLink(i){try{const{options:a}=i,l=QK(i,["options"]),u=Object.assign(Object.assign({},l),a);return"newEmail"in l&&(u.new_email=l==null?void 0:l.newEmail,delete u.newEmail),await Fe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:u,headers:this.headers,xform:YK,redirectTo:a==null?void 0:a.redirectTo})}catch(a){if(ze(a))return{data:{properties:null,user:null},error:a};throw a}}async createUser(i){try{return await Fe(this.fetch,"POST",`${this.url}/admin/users`,{body:i,headers:this.headers,xform:Jr})}catch(a){if(ze(a))return{data:{user:null},error:a};throw a}}async listUsers(i){var a,l,u,h,g,m,k;try{const b={nextPage:null,lastPage:0,total:0},y=await Fe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(a=i==null?void 0:i.page)===null||a===void 0?void 0:a.toString())!==null&&l!==void 0?l:"",per_page:(h=(u=i==null?void 0:i.perPage)===null||u===void 0?void 0:u.toString())!==null&&h!==void 0?h:""},xform:ZK});if(y.error)throw y.error;const v=await y.json(),A=(g=y.headers.get("x-total-count"))!==null&&g!==void 0?g:0,x=(k=(m=y.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&k!==void 0?k:[];return x.length>0&&(x.forEach(E=>{const T=parseInt(E.split(";")[0].split("=")[1].substring(0,1)),P=JSON.parse(E.split(";")[1].split("=")[1]);b[`${P}Page`]=T}),b.total=parseInt(A)),{data:Object.assign(Object.assign({},v),b),error:null}}catch(b){if(ze(b))return{data:{users:[]},error:b};throw b}}async getUserById(i){try{return await Fe(this.fetch,"GET",`${this.url}/admin/users/${i}`,{headers:this.headers,xform:Jr})}catch(a){if(ze(a))return{data:{user:null},error:a};throw a}}async updateUserById(i,a){try{return await Fe(this.fetch,"PUT",`${this.url}/admin/users/${i}`,{body:a,headers:this.headers,xform:Jr})}catch(l){if(ze(l))return{data:{user:null},error:l};throw l}}async deleteUser(i,a=!1){try{return await Fe(this.fetch,"DELETE",`${this.url}/admin/users/${i}`,{headers:this.headers,body:{should_soft_delete:a},xform:Jr})}catch(l){if(ze(l))return{data:{user:null},error:l};throw l}}async _listFactors(i){try{const{data:a,error:l}=await Fe(this.fetch,"GET",`${this.url}/admin/users/${i.userId}/factors`,{headers:this.headers,xform:u=>({data:{factors:u},error:null})});return{data:a,error:l}}catch(a){if(ze(a))return{data:null,error:a};throw a}}async _deleteFactor(i){try{return{data:await Fe(this.fetch,"DELETE",`${this.url}/admin/users/${i.userId}/factors/${i.id}`,{headers:this.headers}),error:null}}catch(a){if(ze(a))return{data:null,error:a};throw a}}}const TI="2.57.0",XK="http://localhost:9999",eQ="supabase.auth.token",tQ={"X-Client-Info":`gotrue-js/${TI}`},B5=10,nQ={getItem:o=>wl()?globalThis.localStorage.getItem(o):null,setItem:(o,i)=>{wl()&&globalThis.localStorage.setItem(o,i)},removeItem:o=>{wl()&&globalThis.localStorage.removeItem(o)}};function P5(o={}){return{getItem:i=>o[i]||null,setItem:(i,a)=>{o[i]=a},removeItem:i=>{delete o[i]}}}function iQ(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}globalThis&&wl()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class rQ extends Error{constructor(i){super(i),this.isAcquireTimeout=!0}}iQ();const oQ={url:XK,storageKey:eQ,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:tQ,flowType:"implicit",debug:!1},Kc=30*1e3,z5=3;async function sQ(o,i,a){return await a()}class Rl{constructor(i){var a;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Rl.nextInstanceID,Rl.nextInstanceID+=1,this.instanceID>0&&cr()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const l=Object.assign(Object.assign({},oQ),i);if(this.logDebugMessages=!!l.debug,typeof l.debug=="function"&&(this.logger=l.debug),this.persistSession=l.persistSession,this.storageKey=l.storageKey,this.autoRefreshToken=l.autoRefreshToken,this.admin=new JK({url:l.url,headers:l.headers,fetch:l.fetch}),this.url=l.url,this.headers=l.headers,this.fetch=DI(l.fetch),this.lock=l.lock||sQ,this.detectSessionInUrl=l.detectSessionInUrl,this.flowType=l.flowType,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?l.storage?this.storage=l.storage:wl()?this.storage=nQ:(this.memoryStorage={},this.storage=P5(this.memoryStorage)):(this.memoryStorage={},this.storage=P5(this.memoryStorage)),cr()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(u){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",u)}(a=this.broadcastChannel)===null||a===void 0||a.addEventListener("message",async u=>{this._debug("received broadcast notification from other tab or client",u),await this._notifyAllSubscribers(u.data.event,u.data.session,!1)})}this.initialize()}_debug(...i){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${TI}) ${new Date().toISOString()}`,...i),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const i=cr()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",i),i||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:a,error:l}=await this._getSessionFromURL(i);if(l)return this._debug("#_initialize()","error detecting session from URL",l),await this._removeSession(),{error:l};const{session:u,redirectType:h}=a;return this._debug("#_initialize()","detected session in URL",u,"redirect type",h),await this._saveSession(u),setTimeout(async()=>{h==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",u):await this._notifyAllSubscribers("SIGNED_IN",u)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(i){return ze(i)?{error:i}:{error:new SI("Unexpected error during initialization",i)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signUp(i){var a,l,u;try{await this._removeSession();let h;if("email"in i){const{email:y,password:v,options:A}=i;let x=null,E=null;if(this.flowType==="pkce"){const T=Ys();await Go(this.storage,`${this.storageKey}-code-verifier`,T),x=await Zs(T),E=T===x?"plain":"s256"}h=await Fe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:A==null?void 0:A.emailRedirectTo,body:{email:y,password:v,data:(a=A==null?void 0:A.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:A==null?void 0:A.captchaToken},code_challenge:x,code_challenge_method:E},xform:$r})}else if("phone"in i){const{phone:y,password:v,options:A}=i;h=await Fe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:v,data:(l=A==null?void 0:A.data)!==null&&l!==void 0?l:{},channel:(u=A==null?void 0:A.channel)!==null&&u!==void 0?u:"sms",gotrue_meta_security:{captcha_token:A==null?void 0:A.captchaToken}},xform:$r})}else throw new sh("You must provide either an email or phone number and a password");const{data:g,error:m}=h;if(m||!g)return{data:{user:null,session:null},error:m};const k=g.session,b=g.user;return g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("SIGNED_IN",k)),{data:{user:b,session:k},error:null}}catch(h){if(ze(h))return{data:{user:null,session:null},error:h};throw h}}async signInWithPassword(i){try{await this._removeSession();let a;if("email"in i){const{email:h,password:g,options:m}=i;a=await Fe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:h,password:g,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:$r})}else if("phone"in i){const{phone:h,password:g,options:m}=i;a=await Fe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:h,password:g,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:$r})}else throw new sh("You must provide either an email or phone number and a password");const{data:l,error:u}=a;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new I0}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:{user:l.user,session:l.session},error:u})}catch(a){if(ze(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithOAuth(i){var a,l,u,h;return await this._removeSession(),await this._handleProviderSignIn(i.provider,{redirectTo:(a=i.options)===null||a===void 0?void 0:a.redirectTo,scopes:(l=i.options)===null||l===void 0?void 0:l.scopes,queryParams:(u=i.options)===null||u===void 0?void 0:u.queryParams,skipBrowserRedirect:(h=i.options)===null||h===void 0?void 0:h.skipBrowserRedirect})}async exchangeCodeForSession(i){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(i))}async _exchangeCodeForSession(i){const a=await oh(this.storage,`${this.storageKey}-code-verifier`),{data:l,error:u}=await Fe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:i,code_verifier:a},xform:$r});return await T0(this.storage,`${this.storageKey}-code-verifier`),u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new I0}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}async signInWithIdToken(i){await this._removeSession();try{const{options:a,provider:l,token:u,access_token:h,nonce:g}=i,m=await Fe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:l,id_token:u,access_token:h,nonce:g,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:$r}),{data:k,error:b}=m;return b?{data:{user:null,session:null},error:b}:!k||!k.session||!k.user?{data:{user:null,session:null},error:new I0}:(k.session&&(await this._saveSession(k.session),await this._notifyAllSubscribers("SIGNED_IN",k.session)),{data:k,error:b})}catch(a){if(ze(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithOtp(i){var a,l,u,h,g;try{if(await this._removeSession(),"email"in i){const{email:m,options:k}=i;let b=null,y=null;if(this.flowType==="pkce"){const A=Ys();await Go(this.storage,`${this.storageKey}-code-verifier`,A),b=await Zs(A),y=A===b?"plain":"s256"}const{error:v}=await Fe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:m,data:(a=k==null?void 0:k.data)!==null&&a!==void 0?a:{},create_user:(l=k==null?void 0:k.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:k==null?void 0:k.captchaToken},code_challenge:b,code_challenge_method:y},redirectTo:k==null?void 0:k.emailRedirectTo});return{data:{user:null,session:null},error:v}}if("phone"in i){const{phone:m,options:k}=i,{data:b,error:y}=await Fe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:m,data:(u=k==null?void 0:k.data)!==null&&u!==void 0?u:{},create_user:(h=k==null?void 0:k.shouldCreateUser)!==null&&h!==void 0?h:!0,gotrue_meta_security:{captcha_token:k==null?void 0:k.captchaToken},channel:(g=k==null?void 0:k.channel)!==null&&g!==void 0?g:"sms"}});return{data:{user:null,session:null,messageId:b==null?void 0:b.message_id},error:y}}throw new sh("You must provide either an email or phone number.")}catch(m){if(ze(m))return{data:{user:null,session:null},error:m};throw m}}async verifyOtp(i){var a,l;try{i.type!=="email_change"&&i.type!=="phone_change"&&await this._removeSession();let u,h;"options"in i&&(u=(a=i.options)===null||a===void 0?void 0:a.redirectTo,h=(l=i.options)===null||l===void 0?void 0:l.captchaToken);const{data:g,error:m}=await Fe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},i),{gotrue_meta_security:{captcha_token:h}}),redirectTo:u,xform:$r});if(m)throw m;if(!g)throw new Error("An error occurred on token verification.");const k=g.session,b=g.user;return k!=null&&k.access_token&&(await this._saveSession(k),await this._notifyAllSubscribers("SIGNED_IN",k)),{data:{user:b,session:k},error:null}}catch(u){if(ze(u))return{data:{user:null,session:null},error:u};throw u}}async signInWithSSO(i){var a,l,u;try{await this._removeSession();let h=null,g=null;if(this.flowType==="pkce"){const m=Ys();await Go(this.storage,`${this.storageKey}-code-verifier`,m),h=await Zs(m),g=m===h?"plain":"s256"}return await Fe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in i?{provider_id:i.providerId}:null),"domain"in i?{domain:i.domain}:null),{redirect_to:(l=(a=i.options)===null||a===void 0?void 0:a.redirectTo)!==null&&l!==void 0?l:void 0}),!((u=i==null?void 0:i.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:i.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:h,code_challenge_method:g}),headers:this.headers,xform:GK})}catch(h){if(ze(h))return{data:null,error:h};throw h}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async i=>{const{data:{session:a},error:l}=i;if(l)throw l;if(!a)throw new Ks;const{error:u}=await Fe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:a.access_token});return{data:{user:null,session:null},error:u}})}catch(i){if(ze(i))return{data:{user:null,session:null},error:i};throw i}}async resend(i){try{i.type!="email_change"&&i.type!="phone_change"&&await this._removeSession();const a=`${this.url}/resend`;if("email"in i){const{email:l,type:u,options:h}=i,{error:g}=await Fe(this.fetch,"POST",a,{headers:this.headers,body:{email:l,type:u,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},redirectTo:h==null?void 0:h.emailRedirectTo});return{data:{user:null,session:null},error:g}}else if("phone"in i){const{phone:l,type:u,options:h}=i,{data:g,error:m}=await Fe(this.fetch,"POST",a,{headers:this.headers,body:{phone:l,type:u,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}}});return{data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:m}}throw new sh("You must provide either an email or phone number and a type")}catch(a){if(ze(a))return{data:{user:null,session:null},error:a};throw a}}async getSession(){return await this.initializePromise,this._acquireLock(-1,async()=>this._useSession(async i=>i))}async _acquireLock(i,a){this._debug("#_acquireLock","begin",i);try{if(this.lockAcquired){const l=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),u=(async()=>(await l,await a()))();return this.pendingInLock.push((async()=>{try{await u}catch{}})()),u}return await this.lock(`lock:${this.storageKey}`,i,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const l=a();for(this.pendingInLock.push((async()=>{try{await l}catch{}})()),await l;this.pendingInLock.length;){const u=[...this.pendingInLock];await Promise.all(u),this.pendingInLock.splice(0,u.length)}return await l}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(i){this._debug("#_useSession","begin");try{const a=await this.__loadSession();return await i(a)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let i=null;const a=await oh(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",a),a!==null&&(this._isValidSession(a)?i=a:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!i)return{data:{session:null},error:null};const l=i.expires_at?i.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${l?"":" not"} expired`,"expires_at",i.expires_at),!l)return{data:{session:i},error:null};const{session:u,error:h}=await this._callRefreshToken(i.refresh_token);return h?{data:{session:null},error:h}:{data:{session:u},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(i){return i?await this._getUser(i):(await this.initializePromise,this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(i){try{return i?await Fe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:i,xform:Jr}):await this._useSession(async a=>{var l,u;const{data:h,error:g}=a;if(g)throw g;return await Fe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(u=(l=h.session)===null||l===void 0?void 0:l.access_token)!==null&&u!==void 0?u:void 0,xform:Jr})})}catch(a){if(ze(a))return{data:{user:null},error:a};throw a}}async updateUser(i,a={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(i,a))}async _updateUser(i,a={}){try{return await this._useSession(async l=>{const{data:u,error:h}=l;if(h)throw h;if(!u.session)throw new Ks;const g=u.session;let m=null,k=null;if(this.flowType==="pkce"&&i.email!=null){const v=Ys();await Go(this.storage,`${this.storageKey}-code-verifier`,v),m=await Zs(v),k=v===m?"plain":"s256"}const{data:b,error:y}=await Fe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:a==null?void 0:a.emailRedirectTo,body:Object.assign(Object.assign({},i),{code_challenge:m,code_challenge_method:k}),jwt:g.access_token,xform:Jr});if(y)throw y;return g.user=b.user,await this._saveSession(g),await this._notifyAllSubscribers("USER_UPDATED",g),{data:{user:g.user},error:null}})}catch(l){if(ze(l))return{data:{user:null},error:l};throw l}}_decodeJWT(i){return I5(i)}async setSession(i){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(i))}async _setSession(i){try{if(!i.access_token||!i.refresh_token)throw new Ks;const a=Date.now()/1e3;let l=a,u=!0,h=null;const g=I5(i.access_token);if(g.exp&&(l=g.exp,u=l<=a),u){const{session:m,error:k}=await this._callRefreshToken(i.refresh_token);if(k)return{data:{user:null,session:null},error:k};if(!m)return{data:{user:null,session:null},error:null};h=m}else{const{data:m,error:k}=await this._getUser(i.access_token);if(k)throw k;h={access_token:i.access_token,refresh_token:i.refresh_token,user:m.user,token_type:"bearer",expires_in:l-a,expires_at:l},await this._saveSession(h),await this._notifyAllSubscribers("SIGNED_IN",h)}return{data:{user:h.user,session:h},error:null}}catch(a){if(ze(a))return{data:{session:null,user:null},error:a};throw a}}async refreshSession(i){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(i))}async _refreshSession(i){try{return await this._useSession(async a=>{var l;if(!i){const{data:g,error:m}=a;if(m)throw m;i=(l=g.session)!==null&&l!==void 0?l:void 0}if(!(i!=null&&i.refresh_token))throw new Ks;const{session:u,error:h}=await this._callRefreshToken(i.refresh_token);return h?{data:{user:null,session:null},error:h}:u?{data:{user:u.user,session:u},error:null}:{data:{user:null,session:null},error:null}})}catch(a){if(ze(a))return{data:{user:null,session:null},error:a};throw a}}async _getSessionFromURL(i){try{if(!cr())throw new ah("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new ah("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!i)throw new M5("Not a valid PKCE flow url.");const a=S0(window.location.href);if(i){if(!a.code)throw new M5("No code detected.");const{data:N,error:B}=await this._exchangeCodeForSession(a.code);if(B)throw B;const j=new URL(window.location.href);return j.searchParams.delete("code"),window.history.replaceState(window.history.state,"",j.toString()),{data:{session:N.session,redirectType:null},error:null}}if(a.error||a.error_description||a.error_code)throw new ah(a.error_description||"Error in URL with unspecified error_description",{error:a.error||"unspecified_error",code:a.error_code||"unspecified_code"});const{provider_token:l,provider_refresh_token:u,access_token:h,refresh_token:g,expires_in:m,expires_at:k,token_type:b}=a;if(!h||!m||!g||!b)throw new ah("No session defined in URL");const y=Math.round(Date.now()/1e3),v=parseInt(m);let A=y+v;k&&(A=parseInt(k));const x=A-y;x*1e3<=Kc&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${x}s, should have been closer to ${v}s`);const E=A-v;y-E>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",E,A,y):y-E<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",E,A,y);const{data:T,error:P}=await this._getUser(h);if(P)throw P;const I={provider_token:l,provider_refresh_token:u,access_token:h,expires_in:v,expires_at:A,refresh_token:g,token_type:b,user:T.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:I,redirectType:a.type},error:null}}catch(a){if(ze(a))return{data:{session:null,redirectType:null},error:a};throw a}}_isImplicitGrantFlow(){const i=S0(window.location.href);return!!(cr()&&(i.access_token||i.error_description))}async _isPKCEFlow(){const i=S0(window.location.href),a=await oh(this.storage,`${this.storageKey}-code-verifier`);return!!(i.code&&a)}async signOut(i={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(i))}async _signOut({scope:i}={scope:"global"}){return await this._useSession(async a=>{var l;const{data:u,error:h}=a;if(h)return{error:h};const g=(l=u.session)===null||l===void 0?void 0:l.access_token;if(g){const{error:m}=await this.admin.signOut(g,i);if(m&&!(UK(m)&&(m.status===404||m.status===401)))return{error:m}}return i!=="others"&&(await this._removeSession(),await T0(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}})}onAuthStateChange(i){const a=OK(),l={id:a,callback:i,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",a),this.stateChangeEmitters.delete(a)}};return this._debug("#onAuthStateChange()","registered callback with id",a),this.stateChangeEmitters.set(a,l),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(a)})))(),{data:{subscription:l}}}async _emitInitialSession(i){return await this._useSession(async a=>{var l,u;try{const{data:{session:h},error:g}=a;if(g)throw g;await((l=this.stateChangeEmitters.get(i))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",h)),this._debug("INITIAL_SESSION","callback id",i,"session",h)}catch(h){await((u=this.stateChangeEmitters.get(i))===null||u===void 0?void 0:u.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",i,"error",h),console.error(h)}})}async resetPasswordForEmail(i,a={}){let l=null,u=null;if(this.flowType==="pkce"){const h=Ys();await Go(this.storage,`${this.storageKey}-code-verifier`,h),l=await Zs(h),u=h===l?"plain":"s256"}try{return await Fe(this.fetch,"POST",`${this.url}/recover`,{body:{email:i,code_challenge:l,code_challenge_method:u,gotrue_meta_security:{captcha_token:a.captchaToken}},headers:this.headers,redirectTo:a.redirectTo})}catch(h){if(ze(h))return{data:null,error:h};throw h}}async _refreshAccessToken(i){const a=`#_refreshAccessToken(${i.substring(0,5)}...)`;this._debug(a,"begin");try{const l=Date.now();return await LK(async u=>(await zK(u*200),this._debug(a,"refreshing attempt",u),await Fe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:i},headers:this.headers,xform:$r})),(u,h,g)=>g&&g.error&&N5(g.error)&&Date.now()+(u+1)*200-l<Kc)}catch(l){if(this._debug(a,"error",l),ze(l))return{data:{session:null,user:null},error:l};throw l}finally{this._debug(a,"end")}}_isValidSession(i){return typeof i=="object"&&i!==null&&"access_token"in i&&"refresh_token"in i&&"expires_at"in i}async _handleProviderSignIn(i,a){const l=await this._getUrlForProvider(i,{redirectTo:a.redirectTo,scopes:a.scopes,queryParams:a.queryParams});return this._debug("#_handleProviderSignIn()","provider",i,"options",a,"url",l),cr()&&!a.skipBrowserRedirect&&window.location.assign(l),{data:{provider:i,url:l},error:null}}async _recoverAndRefresh(){var i;const a="#_recoverAndRefresh()";this._debug(a,"begin");try{const l=await oh(this.storage,this.storageKey);if(this._debug(a,"session from storage",l),!this._isValidSession(l)){this._debug(a,"session is not valid"),l!==null&&await this._removeSession();return}const u=Math.round(Date.now()/1e3),h=((i=l.expires_at)!==null&&i!==void 0?i:1/0)<u+B5;if(this._debug(a,`session has${h?"":" not"} expired with margin of ${B5}s`),h){if(this.autoRefreshToken&&l.refresh_token){const{error:g}=await this._callRefreshToken(l.refresh_token);g&&(console.error(g),N5(g)||(this._debug(a,"refresh failed with a non-retryable error, removing the session",g),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",l)}catch(l){this._debug(a,"error",l),console.error(l);return}finally{this._debug(a,"end")}}async _callRefreshToken(i){var a,l;if(!i)throw new Ks;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const u=`#_callRefreshToken(${i.substring(0,5)}...)`;this._debug(u,"begin");try{this.refreshingDeferred=new Ef;const{data:h,error:g}=await this._refreshAccessToken(i);if(g)throw g;if(!h.session)throw new Ks;await this._saveSession(h.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",h.session);const m={session:h.session,error:null};return this.refreshingDeferred.resolve(m),m}catch(h){if(this._debug(u,"error",h),ze(h)){const g={session:null,error:h};return(a=this.refreshingDeferred)===null||a===void 0||a.resolve(g),g}throw(l=this.refreshingDeferred)===null||l===void 0||l.reject(h),h}finally{this.refreshingDeferred=null,this._debug(u,"end")}}async _notifyAllSubscribers(i,a,l=!0){const u=`#_notifyAllSubscribers(${i})`;this._debug(u,"begin",a,`broadcast = ${l}`);try{this.broadcastChannel&&l&&this.broadcastChannel.postMessage({event:i,session:a});const h=[],g=Array.from(this.stateChangeEmitters.values()).map(async m=>{try{await m.callback(i,a)}catch(k){h.push(k)}});if(await Promise.all(g),h.length>0){for(let m=0;m<h.length;m+=1)console.error(h[m]);throw h[0]}}finally{this._debug(u,"end")}}async _saveSession(i){this._debug("#_saveSession()",i),await this._persistSession(i)}_persistSession(i){return this._debug("#_persistSession()",i),Go(this.storage,this.storageKey,i)}async _removeSession(){this._debug("#_removeSession()"),await T0(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const i=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{i&&cr()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",i)}catch(a){console.error("removing visibilitychange callback failed",a)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const i=setInterval(()=>this._autoRefreshTokenTick(),Kc);this.autoRefreshTicker=i,i&&typeof i=="object"&&typeof i.unref=="function"?i.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(i),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const i=this.autoRefreshTicker;this.autoRefreshTicker=null,i&&clearInterval(i)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const i=Date.now();try{return await this._useSession(async a=>{const{data:{session:l}}=a;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const u=Math.floor((l.expires_at*1e3-i)/Kc);this._debug("#_autoRefreshTokenTick()",`access token expires in ${u} ticks, a tick lasts ${Kc}ms, refresh threshold is ${z5} ticks`),u<=z5&&await this._callRefreshToken(l.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(i){if(i.isAcquireTimeout||i instanceof rQ)this._debug("auto refresh token tick lock not available");else throw i}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!cr()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(i){console.error("_handleVisibilityChange",i)}}async _onVisibilityChanged(i){const a=`#_onVisibilityChanged(${i})`;this._debug(a,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),i||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(a,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(i,a){const l=[`provider=${encodeURIComponent(i)}`];if(a!=null&&a.redirectTo&&l.push(`redirect_to=${encodeURIComponent(a.redirectTo)}`),a!=null&&a.scopes&&l.push(`scopes=${encodeURIComponent(a.scopes)}`),this.flowType==="pkce"){const u=Ys();await Go(this.storage,`${this.storageKey}-code-verifier`,u);const h=await Zs(u),g=u===h?"plain":"s256";this._debug("PKCE","code verifier",`${u.substring(0,5)}...`,"code challenge",h,"method",g);const m=new URLSearchParams({code_challenge:`${encodeURIComponent(h)}`,code_challenge_method:`${encodeURIComponent(g)}`});l.push(m.toString())}if(a!=null&&a.queryParams){const u=new URLSearchParams(a.queryParams);l.push(u.toString())}return`${this.url}/authorize?${l.join("&")}`}async _unenroll(i){try{return await this._useSession(async a=>{var l;const{data:u,error:h}=a;return h?{data:null,error:h}:await Fe(this.fetch,"DELETE",`${this.url}/factors/${i.factorId}`,{headers:this.headers,jwt:(l=u==null?void 0:u.session)===null||l===void 0?void 0:l.access_token})})}catch(a){if(ze(a))return{data:null,error:a};throw a}}async _enroll(i){try{return await this._useSession(async a=>{var l,u;const{data:h,error:g}=a;if(g)return{data:null,error:g};const{data:m,error:k}=await Fe(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:i.friendlyName,factor_type:i.factorType,issuer:i.issuer},headers:this.headers,jwt:(l=h==null?void 0:h.session)===null||l===void 0?void 0:l.access_token});return k?{data:null,error:k}:(!((u=m==null?void 0:m.totp)===null||u===void 0)&&u.qr_code&&(m.totp.qr_code=`data:image/svg+xml;utf-8,${m.totp.qr_code}`),{data:m,error:null})})}catch(a){if(ze(a))return{data:null,error:a};throw a}}async _verify(i){return this._acquireLock(-1,async()=>{try{return await this._useSession(async a=>{var l;const{data:u,error:h}=a;if(h)return{data:null,error:h};const{data:g,error:m}=await Fe(this.fetch,"POST",`${this.url}/factors/${i.factorId}/verify`,{body:{code:i.code,challenge_id:i.challengeId},headers:this.headers,jwt:(l=u==null?void 0:u.session)===null||l===void 0?void 0:l.access_token});return m?{data:null,error:m}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+g.expires_in},g)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",g),{data:g,error:m})})}catch(a){if(ze(a))return{data:null,error:a};throw a}})}async _challenge(i){return this._acquireLock(-1,async()=>{try{return await this._useSession(async a=>{var l;const{data:u,error:h}=a;return h?{data:null,error:h}:await Fe(this.fetch,"POST",`${this.url}/factors/${i.factorId}/challenge`,{headers:this.headers,jwt:(l=u==null?void 0:u.session)===null||l===void 0?void 0:l.access_token})})}catch(a){if(ze(a))return{data:null,error:a};throw a}})}async _challengeAndVerify(i){const{data:a,error:l}=await this._challenge({factorId:i.factorId});return l?{data:null,error:l}:await this._verify({factorId:i.factorId,challengeId:a.id,code:i.code})}async _listFactors(){const{data:{user:i},error:a}=await this.getUser();if(a)return{data:null,error:a};const l=(i==null?void 0:i.factors)||[],u=l.filter(h=>h.factor_type==="totp"&&h.status==="verified");return{data:{all:l,totp:u},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async i=>{var a,l;const{data:{session:u},error:h}=i;if(h)return{data:null,error:h};if(!u)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const g=this._decodeJWT(u.access_token);let m=null;g.aal&&(m=g.aal);let k=m;((l=(a=u.user.factors)===null||a===void 0?void 0:a.filter(v=>v.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(k="aal2");const y=g.amr||[];return{data:{currentLevel:m,nextLevel:k,currentAuthenticationMethods:y},error:null}}))}}Rl.nextInstanceID=0;class aQ extends Rl{constructor(i){super(i)}}var cQ=globalThis&&globalThis.__awaiter||function(o,i,a,l){function u(h){return h instanceof a?h:new a(function(g){g(h)})}return new(a||(a=Promise))(function(h,g){function m(y){try{b(l.next(y))}catch(v){g(v)}}function k(y){try{b(l.throw(y))}catch(v){g(v)}}function b(y){y.done?h(y.value):u(y.value).then(m,k)}b((l=l.apply(o,i||[])).next())})};const lQ={headers:xK},dQ={schema:"public"},uQ={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},hQ={};class fQ{constructor(i,a,l){var u,h,g,m,k,b,y,v;if(this.supabaseUrl=i,this.supabaseKey=a,!i)throw new Error("supabaseUrl is required.");if(!a)throw new Error("supabaseKey is required.");const A=IK(i);this.realtimeUrl=`${A}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${A}/auth/v1`,this.storageUrl=`${A}/storage/v1`,this.functionsUrl=`${A}/functions/v1`;const x=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,E={db:dQ,realtime:hQ,auth:Object.assign(Object.assign({},uQ),{storageKey:x}),global:lQ},T=MK(l??{},E);this.storageKey=(h=(u=T.auth)===null||u===void 0?void 0:u.storageKey)!==null&&h!==void 0?h:"",this.headers=(m=(g=T.global)===null||g===void 0?void 0:g.headers)!==null&&m!==void 0?m:{},this.auth=this._initSupabaseAuthClient((k=T.auth)!==null&&k!==void 0?k:{},this.headers,(b=T.global)===null||b===void 0?void 0:b.fetch),this.fetch=TK(a,this._getAccessToken.bind(this),(y=T.global)===null||y===void 0?void 0:y.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},T.realtime)),this.rest=new ev(`${A}/rest/v1`,{headers:this.headers,schema:(v=T.db)===null||v===void 0?void 0:v.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new xZ(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new AK(this.storageUrl,this.headers,this.fetch)}from(i){return this.rest.from(i)}schema(i){return this.rest.schema(i)}rpc(i,a={},l){return this.rest.rpc(i,a,l)}channel(i,a={config:{}}){return this.realtime.channel(i,a)}getChannels(){return this.realtime.getChannels()}removeChannel(i){return this.realtime.removeChannel(i)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var i,a;return cQ(this,void 0,void 0,function*(){const{data:l}=yield this.auth.getSession();return(a=(i=l.session)===null||i===void 0?void 0:i.access_token)!==null&&a!==void 0?a:null})}_initSupabaseAuthClient({autoRefreshToken:i,persistSession:a,detectSessionInUrl:l,storage:u,storageKey:h,flowType:g,debug:m},k,b){const y={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new aQ({url:this.authUrl,headers:Object.assign(Object.assign({},y),k),storageKey:h,autoRefreshToken:i,persistSession:a,detectSessionInUrl:l,storage:u,flowType:g,debug:m,fetch:b})}_initRealtimeClient(i){return new uK(this.realtimeUrl,Object.assign(Object.assign({},i),{params:Object.assign({apikey:this.supabaseKey},i==null?void 0:i.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((a,l)=>{this._handleTokenChanged(a,"CLIENT",l==null?void 0:l.access_token)})}_handleTokenChanged(i,a,l){(i==="TOKEN_REFRESHED"||i==="SIGNED_IN")&&this.changedAccessToken!==l?(this.realtime.setAuth(l??null),this.changedAccessToken=l):i==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),a=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const gQ=(o,i,a)=>new fQ(o,i,a),pQ="https://wfmzmjdkdoryaeunljkv.supabase.co",mQ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbXptamRrZG9yeWFldW5samt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0MDc2NTcsImV4cCI6MjAxNDk4MzY1N30.zRjzq2AcsGmIx0GBvfPoDyj5BBWlAwHsjc3yEV8vXcQ",ji=gQ(pQ,mQ);function kQ(){const[o,i]=se.useState(null);return se.useEffect(()=>{ji.auth.getSession().then(({data:{session:l}})=>{i(l)});const{data:{subscription:a}}=ji.auth.onAuthStateChange((l,u)=>{i(u)});return()=>a.unsubscribe()},[]),F.jsxs(F.Fragment,{children:[F.jsx(kZ,{supabase:ji,session:o}),F.jsxs(QW,{children:[F.jsx(Ri,{path:"/Book-Chronicles/",element:F.jsx(YY,{supabase:ji,session:o})}),F.jsx(Ri,{path:"/Book-Chronicles/create",element:F.jsx(v5,{session:o,children:F.jsx(JY,{supabase:ji,session:o})})}),F.jsx(Ri,{path:"/Book-Chronicles/post/:id",element:F.jsx(dZ,{supabase:ji,session:o})}),F.jsx(Ri,{path:"/Book-Chronicles/post/:id/edit",element:F.jsx(v5,{session:o,children:F.jsx(uZ,{supabase:ji,session:o})})}),F.jsx(Ri,{path:"/Book-Chronicles/getBookInfo",element:F.jsx(eZ,{})}),F.jsx(Ri,{path:"Book-Chronicles/userposts",element:F.jsx(gZ,{supabase:ji})}),F.jsx(Ri,{path:"Book-Chronicles/signup",element:F.jsx(hZ,{supabase:ji})}),F.jsx(Ri,{path:"Book-Chronicles/signin",element:F.jsx(fZ,{supabase:ji})}),F.jsx(Ri,{path:"*",element:F.jsx(ZY,{})})]})]})}M0.createRoot(document.getElementById("root")).render(F.jsx(Y5.StrictMode,{children:F.jsx(iq,{children:F.jsx(kQ,{})})}))});export default bQ();