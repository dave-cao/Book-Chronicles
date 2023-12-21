var tB=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var j8=tB((Xt,vt)=>{function m2(r,n){for(var o=0;o<n.length;o++){const l=n[o];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in r)){const f=Object.getOwnPropertyDescriptor(l,u);f&&Object.defineProperty(r,u,f.get?f:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function k2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function nB(r){if(r.__esModule)return r;var n=r.default;if(typeof n=="function"){var o=function l(){return this instanceof l?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};o.prototype=n.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(r).forEach(function(l){var u=Object.getOwnPropertyDescriptor(r,l);Object.defineProperty(o,l,u.get?u:{enumerable:!0,get:function(){return r[l]}})}),o}var b2={exports:{}},Af={},w2={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=Symbol.for("react.element"),iB=Symbol.for("react.portal"),rB=Symbol.for("react.fragment"),oB=Symbol.for("react.strict_mode"),sB=Symbol.for("react.profiler"),aB=Symbol.for("react.provider"),cB=Symbol.for("react.context"),lB=Symbol.for("react.forward_ref"),dB=Symbol.for("react.suspense"),uB=Symbol.for("react.memo"),hB=Symbol.for("react.lazy"),o1=Symbol.iterator;function fB(r){return r===null||typeof r!="object"?null:(r=o1&&r[o1]||r["@@iterator"],typeof r=="function"?r:null)}var _2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v2=Object.assign,y2={};function Wa(r,n,o){this.props=r,this.context=n,this.refs=y2,this.updater=o||_2}Wa.prototype.isReactComponent={};Wa.prototype.setState=function(r,n){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,n,"setState")};Wa.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function A2(){}A2.prototype=Wa.prototype;function m0(r,n,o){this.props=r,this.context=n,this.refs=y2,this.updater=o||_2}var k0=m0.prototype=new A2;k0.constructor=m0;v2(k0,Wa.prototype);k0.isPureReactComponent=!0;var s1=Array.isArray,C2=Object.prototype.hasOwnProperty,b0={current:null},x2={key:!0,ref:!0,__self:!0,__source:!0};function E2(r,n,o){var l,u={},f=null,g=null;if(n!=null)for(l in n.ref!==void 0&&(g=n.ref),n.key!==void 0&&(f=""+n.key),n)C2.call(n,l)&&!x2.hasOwnProperty(l)&&(u[l]=n[l]);var k=arguments.length-2;if(k===1)u.children=o;else if(1<k){for(var w=Array(k),v=0;v<k;v++)w[v]=arguments[v+2];u.children=w}if(r&&r.defaultProps)for(l in k=r.defaultProps,k)u[l]===void 0&&(u[l]=k[l]);return{$$typeof:ld,type:r,key:f,ref:g,props:u,_owner:b0.current}}function gB(r,n){return{$$typeof:ld,type:r.type,key:n,ref:r.ref,props:r.props,_owner:r._owner}}function w0(r){return typeof r=="object"&&r!==null&&r.$$typeof===ld}function pB(r){var n={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(o){return n[o]})}var a1=/\/+/g;function mm(r,n){return typeof r=="object"&&r!==null&&r.key!=null?pB(""+r.key):n.toString(36)}function Sh(r,n,o,l,u){var f=typeof r;(f==="undefined"||f==="boolean")&&(r=null);var g=!1;if(r===null)g=!0;else switch(f){case"string":case"number":g=!0;break;case"object":switch(r.$$typeof){case ld:case iB:g=!0}}if(g)return g=r,u=u(g),r=l===""?"."+mm(g,0):l,s1(u)?(o="",r!=null&&(o=r.replace(a1,"$&/")+"/"),Sh(u,n,o,"",function(v){return v})):u!=null&&(w0(u)&&(u=gB(u,o+(!u.key||g&&g.key===u.key?"":(""+u.key).replace(a1,"$&/")+"/")+r)),n.push(u)),1;if(g=0,l=l===""?".":l+":",s1(r))for(var k=0;k<r.length;k++){f=r[k];var w=l+mm(f,k);g+=Sh(f,n,o,w,u)}else if(w=fB(r),typeof w=="function")for(r=w.call(r),k=0;!(f=r.next()).done;)f=f.value,w=l+mm(f,k++),g+=Sh(f,n,o,w,u);else if(f==="object")throw n=String(r),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return g}function eh(r,n,o){if(r==null)return r;var l=[],u=0;return Sh(r,l,"","",function(f){return n.call(o,f,u++)}),l}function mB(r){if(r._status===-1){var n=r._result;n=n(),n.then(function(o){(r._status===0||r._status===-1)&&(r._status=1,r._result=o)},function(o){(r._status===0||r._status===-1)&&(r._status=2,r._result=o)}),r._status===-1&&(r._status=0,r._result=n)}if(r._status===1)return r._result.default;throw r._result}var yn={current:null},Th={transition:null},kB={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Th,ReactCurrentOwner:b0};Le.Children={map:eh,forEach:function(r,n,o){eh(r,function(){n.apply(this,arguments)},o)},count:function(r){var n=0;return eh(r,function(){n++}),n},toArray:function(r){return eh(r,function(n){return n})||[]},only:function(r){if(!w0(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};Le.Component=Wa;Le.Fragment=rB;Le.Profiler=sB;Le.PureComponent=m0;Le.StrictMode=oB;Le.Suspense=dB;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kB;Le.cloneElement=function(r,n,o){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var l=v2({},r.props),u=r.key,f=r.ref,g=r._owner;if(n!=null){if(n.ref!==void 0&&(f=n.ref,g=b0.current),n.key!==void 0&&(u=""+n.key),r.type&&r.type.defaultProps)var k=r.type.defaultProps;for(w in n)C2.call(n,w)&&!x2.hasOwnProperty(w)&&(l[w]=n[w]===void 0&&k!==void 0?k[w]:n[w])}var w=arguments.length-2;if(w===1)l.children=o;else if(1<w){k=Array(w);for(var v=0;v<w;v++)k[v]=arguments[v+2];l.children=k}return{$$typeof:ld,type:r.type,key:u,ref:f,props:l,_owner:g}};Le.createContext=function(r){return r={$$typeof:cB,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:aB,_context:r},r.Consumer=r};Le.createElement=E2;Le.createFactory=function(r){var n=E2.bind(null,r);return n.type=r,n};Le.createRef=function(){return{current:null}};Le.forwardRef=function(r){return{$$typeof:lB,render:r}};Le.isValidElement=w0;Le.lazy=function(r){return{$$typeof:hB,_payload:{_status:-1,_result:r},_init:mB}};Le.memo=function(r,n){return{$$typeof:uB,type:r,compare:n===void 0?null:n}};Le.startTransition=function(r){var n=Th.transition;Th.transition={};try{r()}finally{Th.transition=n}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(r,n){return yn.current.useCallback(r,n)};Le.useContext=function(r){return yn.current.useContext(r)};Le.useDebugValue=function(){};Le.useDeferredValue=function(r){return yn.current.useDeferredValue(r)};Le.useEffect=function(r,n){return yn.current.useEffect(r,n)};Le.useId=function(){return yn.current.useId()};Le.useImperativeHandle=function(r,n,o){return yn.current.useImperativeHandle(r,n,o)};Le.useInsertionEffect=function(r,n){return yn.current.useInsertionEffect(r,n)};Le.useLayoutEffect=function(r,n){return yn.current.useLayoutEffect(r,n)};Le.useMemo=function(r,n){return yn.current.useMemo(r,n)};Le.useReducer=function(r,n,o){return yn.current.useReducer(r,n,o)};Le.useRef=function(r){return yn.current.useRef(r)};Le.useState=function(r){return yn.current.useState(r)};Le.useSyncExternalStore=function(r,n,o){return yn.current.useSyncExternalStore(r,n,o)};Le.useTransition=function(){return yn.current.useTransition()};Le.version="18.2.0";w2.exports=Le;var de=w2.exports;const D2=k2(de),bB=m2({__proto__:null,default:D2},[de]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wB=de,_B=Symbol.for("react.element"),vB=Symbol.for("react.fragment"),yB=Object.prototype.hasOwnProperty,AB=wB.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CB={key:!0,ref:!0,__self:!0,__source:!0};function S2(r,n,o){var l,u={},f=null,g=null;o!==void 0&&(f=""+o),n.key!==void 0&&(f=""+n.key),n.ref!==void 0&&(g=n.ref);for(l in n)yB.call(n,l)&&!CB.hasOwnProperty(l)&&(u[l]=n[l]);if(r&&r.defaultProps)for(l in n=r.defaultProps,n)u[l]===void 0&&(u[l]=n[l]);return{$$typeof:_B,type:r,key:f,ref:g,props:u,_owner:AB.current}}Af.Fragment=vB;Af.jsx=S2;Af.jsxs=S2;b2.exports=Af;var F=b2.exports,ik={},T2={exports:{}},Qn={},I2={exports:{}},M2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function n(te,ne){var ge=te.length;te.push(ne);e:for(;0<ge;){var pe=ge-1>>>1,xe=te[pe];if(0<u(xe,ne))te[pe]=ne,te[ge]=xe,ge=pe;else break e}}function o(te){return te.length===0?null:te[0]}function l(te){if(te.length===0)return null;var ne=te[0],ge=te.pop();if(ge!==ne){te[0]=ge;e:for(var pe=0,xe=te.length,gt=xe>>>1;pe<gt;){var Dt=2*(pe+1)-1,St=te[Dt],Ge=Dt+1,or=te[Ge];if(0>u(St,ge))Ge<xe&&0>u(or,St)?(te[pe]=or,te[Ge]=ge,pe=Ge):(te[pe]=St,te[Dt]=ge,pe=Dt);else if(Ge<xe&&0>u(or,ge))te[pe]=or,te[Ge]=ge,pe=Ge;else break e}}return ne}function u(te,ne){var ge=te.sortIndex-ne.sortIndex;return ge!==0?ge:te.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var g=Date,k=g.now();r.unstable_now=function(){return g.now()-k}}var w=[],v=[],_=1,A=null,x=3,S=!1,N=!1,P=!1,R=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(te){for(var ne=o(v);ne!==null;){if(ne.callback===null)l(v);else if(ne.startTime<=te)l(v),ne.sortIndex=ne.expirationTime,n(w,ne);else break;ne=o(v)}}function W(te){if(P=!1,D(te),!N)if(o(w)!==null)N=!0,J(K);else{var ne=o(v);ne!==null&&ue(W,ne.startTime-te)}}function K(te,ne){N=!1,P&&(P=!1,B(se),se=-1),S=!0;var ge=x;try{for(D(ne),A=o(w);A!==null&&(!(A.expirationTime>ne)||te&&!G());){var pe=A.callback;if(typeof pe=="function"){A.callback=null,x=A.priorityLevel;var xe=pe(A.expirationTime<=ne);ne=r.unstable_now(),typeof xe=="function"?A.callback=xe:A===o(w)&&l(w),D(ne)}else l(w);A=o(w)}if(A!==null)var gt=!0;else{var Dt=o(v);Dt!==null&&ue(W,Dt.startTime-ne),gt=!1}return gt}finally{A=null,x=ge,S=!1}}var ee=!1,X=null,se=-1,he=5,be=-1;function G(){return!(r.unstable_now()-be<he)}function Y(){if(X!==null){var te=r.unstable_now();be=te;var ne=!0;try{ne=X(!0,te)}finally{ne?$():(ee=!1,X=null)}}else ee=!1}var $;if(typeof L=="function")$=function(){L(Y)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=Y,$=function(){H.postMessage(null)}}else $=function(){R(Y,0)};function J(te){X=te,ee||(ee=!0,$())}function ue(te,ne){se=R(function(){te(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){N||S||(N=!0,J(K))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return o(w)},r.unstable_next=function(te){switch(x){case 1:case 2:case 3:var ne=3;break;default:ne=x}var ge=x;x=ne;try{return te()}finally{x=ge}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,ne){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ge=x;x=te;try{return ne()}finally{x=ge}},r.unstable_scheduleCallback=function(te,ne,ge){var pe=r.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?pe+ge:pe):ge=pe,te){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ge+xe,te={id:_++,callback:ne,priorityLevel:te,startTime:ge,expirationTime:xe,sortIndex:-1},ge>pe?(te.sortIndex=ge,n(v,te),o(w)===null&&te===o(v)&&(P?(B(se),se=-1):P=!0,ue(W,ge-pe))):(te.sortIndex=xe,n(w,te),N||S||(N=!0,J(K))),te},r.unstable_shouldYield=G,r.unstable_wrapCallback=function(te){var ne=x;return function(){var ge=x;x=ne;try{return te.apply(this,arguments)}finally{x=ge}}}})(M2);I2.exports=M2;var xB=I2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N2=de,Kn=xB;function le(r){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+r,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+r+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O2=new Set,$l={};function As(r,n){za(r,n),za(r+"Capture",n)}function za(r,n){for($l[r]=n,r=0;r<n.length;r++)O2.add(n[r])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rk=Object.prototype.hasOwnProperty,EB=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,c1={},l1={};function DB(r){return rk.call(l1,r)?!0:rk.call(c1,r)?!1:EB.test(r)?l1[r]=!0:(c1[r]=!0,!1)}function SB(r,n,o,l){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function TB(r,n,o,l){if(n===null||typeof n>"u"||SB(r,n,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function An(r,n,o,l,u,f,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=r,this.type=n,this.sanitizeURL=f,this.removeEmptyString=g}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){nn[r]=new An(r,0,!1,r,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var n=r[0];nn[n]=new An(n,1,!1,r[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(r){nn[r]=new An(r,2,!1,r.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){nn[r]=new An(r,2,!1,r,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){nn[r]=new An(r,3,!1,r.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(r){nn[r]=new An(r,3,!0,r,null,!1,!1)});["capture","download"].forEach(function(r){nn[r]=new An(r,4,!1,r,null,!1,!1)});["cols","rows","size","span"].forEach(function(r){nn[r]=new An(r,6,!1,r,null,!1,!1)});["rowSpan","start"].forEach(function(r){nn[r]=new An(r,5,!1,r.toLowerCase(),null,!1,!1)});var _0=/[\-:]([a-z])/g;function v0(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var n=r.replace(_0,v0);nn[n]=new An(n,1,!1,r,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var n=r.replace(_0,v0);nn[n]=new An(n,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(r){var n=r.replace(_0,v0);nn[n]=new An(n,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(r){nn[r]=new An(r,1,!1,r.toLowerCase(),null,!1,!1)});nn.xlinkHref=new An("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(r){nn[r]=new An(r,1,!1,r.toLowerCase(),null,!0,!0)});function y0(r,n,o,l){var u=nn.hasOwnProperty(n)?nn[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(TB(n,o,u,l)&&(o=null),l||u===null?DB(n)&&(o===null?r.removeAttribute(n):r.setAttribute(n,""+o)):u.mustUseProperty?r[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,l=u.attributeNamespace,o===null?r.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?r.setAttributeNS(l,n,o):r.setAttribute(n,o))))}var Nr=N2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,th=Symbol.for("react.element"),ba=Symbol.for("react.portal"),wa=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),ok=Symbol.for("react.profiler"),B2=Symbol.for("react.provider"),P2=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),sk=Symbol.for("react.suspense"),ak=Symbol.for("react.suspense_list"),x0=Symbol.for("react.memo"),io=Symbol.for("react.lazy"),L2=Symbol.for("react.offscreen"),d1=Symbol.iterator;function ll(r){return r===null||typeof r!="object"?null:(r=d1&&r[d1]||r["@@iterator"],typeof r=="function"?r:null)}var kt=Object.assign,km;function _l(r){if(km===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);km=n&&n[1]||""}return`
`+km+r}var bm=!1;function wm(r,n){if(!r||bm)return"";bm=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(v){var l=v}Reflect.construct(r,[],n)}else{try{n.call()}catch(v){l=v}r.call(n.prototype)}else{try{throw Error()}catch(v){l=v}r()}}catch(v){if(v&&l&&typeof v.stack=="string"){for(var u=v.stack.split(`
`),f=l.stack.split(`
`),g=u.length-1,k=f.length-1;1<=g&&0<=k&&u[g]!==f[k];)k--;for(;1<=g&&0<=k;g--,k--)if(u[g]!==f[k]){if(g!==1||k!==1)do if(g--,k--,0>k||u[g]!==f[k]){var w=`
`+u[g].replace(" at new "," at ");return r.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",r.displayName)),w}while(1<=g&&0<=k);break}}}finally{bm=!1,Error.prepareStackTrace=o}return(r=r?r.displayName||r.name:"")?_l(r):""}function IB(r){switch(r.tag){case 5:return _l(r.type);case 16:return _l("Lazy");case 13:return _l("Suspense");case 19:return _l("SuspenseList");case 0:case 2:case 15:return r=wm(r.type,!1),r;case 11:return r=wm(r.type.render,!1),r;case 1:return r=wm(r.type,!0),r;default:return""}}function ck(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case wa:return"Fragment";case ba:return"Portal";case ok:return"Profiler";case A0:return"StrictMode";case sk:return"Suspense";case ak:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case P2:return(r.displayName||"Context")+".Consumer";case B2:return(r._context.displayName||"Context")+".Provider";case C0:var n=r.render;return r=r.displayName,r||(r=n.displayName||n.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case x0:return n=r.displayName||null,n!==null?n:ck(r.type)||"Memo";case io:n=r._payload,r=r._init;try{return ck(r(n))}catch{}}return null}function MB(r){var n=r.type;switch(r.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=n.render,r=r.displayName||r.name||"",n.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ck(n);case 8:return n===A0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Co(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function z2(r){var n=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function NB(r){var n=z2(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,n),l=""+r[n];if(!r.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(r,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,f.call(this,g)}}),Object.defineProperty(r,n,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){r._valueTracker=null,delete r[n]}}}}function nh(r){r._valueTracker||(r._valueTracker=NB(r))}function j2(r){if(!r)return!1;var n=r._valueTracker;if(!n)return!0;var o=n.getValue(),l="";return r&&(l=z2(r)?r.checked?"true":"false":r.value),r=l,r!==o?(n.setValue(r),!0):!1}function Uh(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function lk(r,n){var o=n.checked;return kt({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??r._wrapperState.initialChecked})}function u1(r,n){var o=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;o=Co(n.value!=null?n.value:o),r._wrapperState={initialChecked:l,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function R2(r,n){n=n.checked,n!=null&&y0(r,"checked",n,!1)}function dk(r,n){R2(r,n);var o=Co(n.value),l=n.type;if(o!=null)l==="number"?(o===0&&r.value===""||r.value!=o)&&(r.value=""+o):r.value!==""+o&&(r.value=""+o);else if(l==="submit"||l==="reset"){r.removeAttribute("value");return}n.hasOwnProperty("value")?uk(r,n.type,o):n.hasOwnProperty("defaultValue")&&uk(r,n.type,Co(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(r.defaultChecked=!!n.defaultChecked)}function h1(r,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+r._wrapperState.initialValue,o||n===r.value||(r.value=n),r.defaultValue=n}o=r.name,o!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,o!==""&&(r.name=o)}function uk(r,n,o){(n!=="number"||Uh(r.ownerDocument)!==r)&&(o==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+o&&(r.defaultValue=""+o))}var vl=Array.isArray;function Ia(r,n,o,l){if(r=r.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<r.length;o++)u=n.hasOwnProperty("$"+r[o].value),r[o].selected!==u&&(r[o].selected=u),u&&l&&(r[o].defaultSelected=!0)}else{for(o=""+Co(o),n=null,u=0;u<r.length;u++){if(r[u].value===o){r[u].selected=!0,l&&(r[u].defaultSelected=!0);return}n!==null||r[u].disabled||(n=r[u])}n!==null&&(n.selected=!0)}}function hk(r,n){if(n.dangerouslySetInnerHTML!=null)throw Error(le(91));return kt({},n,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function f1(r,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(le(92));if(vl(o)){if(1<o.length)throw Error(le(93));o=o[0]}n=o}n==null&&(n=""),o=n}r._wrapperState={initialValue:Co(o)}}function F2(r,n){var o=Co(n.value),l=Co(n.defaultValue);o!=null&&(o=""+o,o!==r.value&&(r.value=o),n.defaultValue==null&&r.defaultValue!==o&&(r.defaultValue=o)),l!=null&&(r.defaultValue=""+l)}function g1(r){var n=r.textContent;n===r._wrapperState.initialValue&&n!==""&&n!==null&&(r.value=n)}function V2(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fk(r,n){return r==null||r==="http://www.w3.org/1999/xhtml"?V2(n):r==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ih,U2=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,l,u){MSApp.execUnsafeLocalFunction(function(){return r(n,o,l,u)})}:r}(function(r,n){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=n;else{for(ih=ih||document.createElement("div"),ih.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ih.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;n.firstChild;)r.appendChild(n.firstChild)}});function Hl(r,n){if(n){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=n;return}}r.textContent=n}var Sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OB=["Webkit","ms","Moz","O"];Object.keys(Sl).forEach(function(r){OB.forEach(function(n){n=n+r.charAt(0).toUpperCase()+r.substring(1),Sl[n]=Sl[r]})});function $2(r,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Sl.hasOwnProperty(r)&&Sl[r]?(""+n).trim():n+"px"}function H2(r,n){r=r.style;for(var o in n)if(n.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=$2(o,n[o],l);o==="float"&&(o="cssFloat"),l?r.setProperty(o,u):r[o]=u}}var BB=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gk(r,n){if(n){if(BB[r]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(le(137,r));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(le(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(le(61))}if(n.style!=null&&typeof n.style!="object")throw Error(le(62))}}function pk(r,n){if(r.indexOf("-")===-1)return typeof n.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mk=null;function E0(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var kk=null,Ma=null,Na=null;function p1(r){if(r=hd(r)){if(typeof kk!="function")throw Error(le(280));var n=r.stateNode;n&&(n=Sf(n),kk(r.stateNode,r.type,n))}}function W2(r){Ma?Na?Na.push(r):Na=[r]:Ma=r}function q2(){if(Ma){var r=Ma,n=Na;if(Na=Ma=null,p1(r),n)for(r=0;r<n.length;r++)p1(n[r])}}function G2(r,n){return r(n)}function Y2(){}var _m=!1;function Z2(r,n,o){if(_m)return r(n,o);_m=!0;try{return G2(r,n,o)}finally{_m=!1,(Ma!==null||Na!==null)&&(Y2(),q2())}}function Wl(r,n){var o=r.stateNode;if(o===null)return null;var l=Sf(o);if(l===null)return null;o=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(le(231,n,typeof o));return o}var bk=!1;if(Er)try{var dl={};Object.defineProperty(dl,"passive",{get:function(){bk=!0}}),window.addEventListener("test",dl,dl),window.removeEventListener("test",dl,dl)}catch{bk=!1}function PB(r,n,o,l,u,f,g,k,w){var v=Array.prototype.slice.call(arguments,3);try{n.apply(o,v)}catch(_){this.onError(_)}}var Tl=!1,$h=null,Hh=!1,wk=null,LB={onError:function(r){Tl=!0,$h=r}};function zB(r,n,o,l,u,f,g,k,w){Tl=!1,$h=null,PB.apply(LB,arguments)}function jB(r,n,o,l,u,f,g,k,w){if(zB.apply(this,arguments),Tl){if(Tl){var v=$h;Tl=!1,$h=null}else throw Error(le(198));Hh||(Hh=!0,wk=v)}}function Cs(r){var n=r,o=r;if(r.alternate)for(;n.return;)n=n.return;else{r=n;do n=r,n.flags&4098&&(o=n.return),r=n.return;while(r)}return n.tag===3?o:null}function K2(r){if(r.tag===13){var n=r.memoizedState;if(n===null&&(r=r.alternate,r!==null&&(n=r.memoizedState)),n!==null)return n.dehydrated}return null}function m1(r){if(Cs(r)!==r)throw Error(le(188))}function RB(r){var n=r.alternate;if(!n){if(n=Cs(r),n===null)throw Error(le(188));return n!==r?null:r}for(var o=r,l=n;;){var u=o.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===o)return m1(u),r;if(f===l)return m1(u),n;f=f.sibling}throw Error(le(188))}if(o.return!==l.return)o=u,l=f;else{for(var g=!1,k=u.child;k;){if(k===o){g=!0,o=u,l=f;break}if(k===l){g=!0,l=u,o=f;break}k=k.sibling}if(!g){for(k=f.child;k;){if(k===o){g=!0,o=f,l=u;break}if(k===l){g=!0,l=f,o=u;break}k=k.sibling}if(!g)throw Error(le(189))}}if(o.alternate!==l)throw Error(le(190))}if(o.tag!==3)throw Error(le(188));return o.stateNode.current===o?r:n}function Q2(r){return r=RB(r),r!==null?J2(r):null}function J2(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var n=J2(r);if(n!==null)return n;r=r.sibling}return null}var X2=Kn.unstable_scheduleCallback,k1=Kn.unstable_cancelCallback,FB=Kn.unstable_shouldYield,VB=Kn.unstable_requestPaint,xt=Kn.unstable_now,UB=Kn.unstable_getCurrentPriorityLevel,D0=Kn.unstable_ImmediatePriority,eE=Kn.unstable_UserBlockingPriority,Wh=Kn.unstable_NormalPriority,$B=Kn.unstable_LowPriority,tE=Kn.unstable_IdlePriority,Cf=null,ir=null;function HB(r){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(Cf,r,void 0,(r.current.flags&128)===128)}catch{}}var Oi=Math.clz32?Math.clz32:GB,WB=Math.log,qB=Math.LN2;function GB(r){return r>>>=0,r===0?32:31-(WB(r)/qB|0)|0}var rh=64,oh=4194304;function yl(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function qh(r,n){var o=r.pendingLanes;if(o===0)return 0;var l=0,u=r.suspendedLanes,f=r.pingedLanes,g=o&268435455;if(g!==0){var k=g&~u;k!==0?l=yl(k):(f&=g,f!==0&&(l=yl(f)))}else g=o&~u,g!==0?l=yl(g):f!==0&&(l=yl(f));if(l===0)return 0;if(n!==0&&n!==l&&!(n&u)&&(u=l&-l,f=n&-n,u>=f||u===16&&(f&4194240)!==0))return n;if(l&4&&(l|=o&16),n=r.entangledLanes,n!==0)for(r=r.entanglements,n&=l;0<n;)o=31-Oi(n),u=1<<o,l|=r[o],n&=~u;return l}function YB(r,n){switch(r){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZB(r,n){for(var o=r.suspendedLanes,l=r.pingedLanes,u=r.expirationTimes,f=r.pendingLanes;0<f;){var g=31-Oi(f),k=1<<g,w=u[g];w===-1?(!(k&o)||k&l)&&(u[g]=YB(k,n)):w<=n&&(r.expiredLanes|=k),f&=~k}}function _k(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function nE(){var r=rh;return rh<<=1,!(rh&4194240)&&(rh=64),r}function vm(r){for(var n=[],o=0;31>o;o++)n.push(r);return n}function dd(r,n,o){r.pendingLanes|=n,n!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,n=31-Oi(n),r[n]=o}function KB(r,n){var o=r.pendingLanes&~n;r.pendingLanes=n,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=n,r.mutableReadLanes&=n,r.entangledLanes&=n,n=r.entanglements;var l=r.eventTimes;for(r=r.expirationTimes;0<o;){var u=31-Oi(o),f=1<<u;n[u]=0,l[u]=-1,r[u]=-1,o&=~f}}function S0(r,n){var o=r.entangledLanes|=n;for(r=r.entanglements;o;){var l=31-Oi(o),u=1<<l;u&n|r[l]&n&&(r[l]|=n),o&=~u}}var et=0;function iE(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var rE,T0,oE,sE,aE,vk=!1,sh=[],po=null,mo=null,ko=null,ql=new Map,Gl=new Map,ao=[],QB="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function b1(r,n){switch(r){case"focusin":case"focusout":po=null;break;case"dragenter":case"dragleave":mo=null;break;case"mouseover":case"mouseout":ko=null;break;case"pointerover":case"pointerout":ql.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(n.pointerId)}}function ul(r,n,o,l,u,f){return r===null||r.nativeEvent!==f?(r={blockedOn:n,domEventName:o,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=hd(n),n!==null&&T0(n)),r):(r.eventSystemFlags|=l,n=r.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),r)}function JB(r,n,o,l,u){switch(n){case"focusin":return po=ul(po,r,n,o,l,u),!0;case"dragenter":return mo=ul(mo,r,n,o,l,u),!0;case"mouseover":return ko=ul(ko,r,n,o,l,u),!0;case"pointerover":var f=u.pointerId;return ql.set(f,ul(ql.get(f)||null,r,n,o,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Gl.set(f,ul(Gl.get(f)||null,r,n,o,l,u)),!0}return!1}function cE(r){var n=us(r.target);if(n!==null){var o=Cs(n);if(o!==null){if(n=o.tag,n===13){if(n=K2(o),n!==null){r.blockedOn=n,aE(r.priority,function(){oE(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ih(r){if(r.blockedOn!==null)return!1;for(var n=r.targetContainers;0<n.length;){var o=yk(r.domEventName,r.eventSystemFlags,n[0],r.nativeEvent);if(o===null){o=r.nativeEvent;var l=new o.constructor(o.type,o);mk=l,o.target.dispatchEvent(l),mk=null}else return n=hd(o),n!==null&&T0(n),r.blockedOn=o,!1;n.shift()}return!0}function w1(r,n,o){Ih(r)&&o.delete(n)}function XB(){vk=!1,po!==null&&Ih(po)&&(po=null),mo!==null&&Ih(mo)&&(mo=null),ko!==null&&Ih(ko)&&(ko=null),ql.forEach(w1),Gl.forEach(w1)}function hl(r,n){r.blockedOn===n&&(r.blockedOn=null,vk||(vk=!0,Kn.unstable_scheduleCallback(Kn.unstable_NormalPriority,XB)))}function Yl(r){function n(u){return hl(u,r)}if(0<sh.length){hl(sh[0],r);for(var o=1;o<sh.length;o++){var l=sh[o];l.blockedOn===r&&(l.blockedOn=null)}}for(po!==null&&hl(po,r),mo!==null&&hl(mo,r),ko!==null&&hl(ko,r),ql.forEach(n),Gl.forEach(n),o=0;o<ao.length;o++)l=ao[o],l.blockedOn===r&&(l.blockedOn=null);for(;0<ao.length&&(o=ao[0],o.blockedOn===null);)cE(o),o.blockedOn===null&&ao.shift()}var Oa=Nr.ReactCurrentBatchConfig,Gh=!0;function eP(r,n,o,l){var u=et,f=Oa.transition;Oa.transition=null;try{et=1,I0(r,n,o,l)}finally{et=u,Oa.transition=f}}function tP(r,n,o,l){var u=et,f=Oa.transition;Oa.transition=null;try{et=4,I0(r,n,o,l)}finally{et=u,Oa.transition=f}}function I0(r,n,o,l){if(Gh){var u=yk(r,n,o,l);if(u===null)Mm(r,n,l,Yh,o),b1(r,l);else if(JB(u,r,n,o,l))l.stopPropagation();else if(b1(r,l),n&4&&-1<QB.indexOf(r)){for(;u!==null;){var f=hd(u);if(f!==null&&rE(f),f=yk(r,n,o,l),f===null&&Mm(r,n,l,Yh,o),f===u)break;u=f}u!==null&&l.stopPropagation()}else Mm(r,n,l,null,o)}}var Yh=null;function yk(r,n,o,l){if(Yh=null,r=E0(l),r=us(r),r!==null)if(n=Cs(r),n===null)r=null;else if(o=n.tag,o===13){if(r=K2(n),r!==null)return r;r=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;r=null}else n!==r&&(r=null);return Yh=r,null}function lE(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UB()){case D0:return 1;case eE:return 4;case Wh:case $B:return 16;case tE:return 536870912;default:return 16}default:return 16}}var ho=null,M0=null,Mh=null;function dE(){if(Mh)return Mh;var r,n=M0,o=n.length,l,u="value"in ho?ho.value:ho.textContent,f=u.length;for(r=0;r<o&&n[r]===u[r];r++);var g=o-r;for(l=1;l<=g&&n[o-l]===u[f-l];l++);return Mh=u.slice(r,1<l?1-l:void 0)}function Nh(r){var n=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&n===13&&(r=13)):r=n,r===10&&(r=13),32<=r||r===13?r:0}function ah(){return!0}function _1(){return!1}function Jn(r){function n(o,l,u,f,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(o=r[k],this[k]=o?o(f):f[k]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ah:_1,this.isPropagationStopped=_1,this}return kt(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ah)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ah)},persist:function(){},isPersistent:ah}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},N0=Jn(qa),ud=kt({},qa,{view:0,detail:0}),nP=Jn(ud),ym,Am,fl,xf=kt({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:O0,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fl&&(fl&&r.type==="mousemove"?(ym=r.screenX-fl.screenX,Am=r.screenY-fl.screenY):Am=ym=0,fl=r),ym)},movementY:function(r){return"movementY"in r?r.movementY:Am}}),v1=Jn(xf),iP=kt({},xf,{dataTransfer:0}),rP=Jn(iP),oP=kt({},ud,{relatedTarget:0}),Cm=Jn(oP),sP=kt({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),aP=Jn(sP),cP=kt({},qa,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),lP=Jn(cP),dP=kt({},qa,{data:0}),y1=Jn(dP),uP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gP(r){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(r):(r=fP[r])?!!n[r]:!1}function O0(){return gP}var pP=kt({},ud,{key:function(r){if(r.key){var n=uP[r.key]||r.key;if(n!=="Unidentified")return n}return r.type==="keypress"?(r=Nh(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?hP[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:O0,charCode:function(r){return r.type==="keypress"?Nh(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Nh(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),mP=Jn(pP),kP=kt({},xf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),A1=Jn(kP),bP=kt({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:O0}),wP=Jn(bP),_P=kt({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),vP=Jn(_P),yP=kt({},xf,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),AP=Jn(yP),CP=[9,13,27,32],B0=Er&&"CompositionEvent"in window,Il=null;Er&&"documentMode"in document&&(Il=document.documentMode);var xP=Er&&"TextEvent"in window&&!Il,uE=Er&&(!B0||Il&&8<Il&&11>=Il),C1=String.fromCharCode(32),x1=!1;function hE(r,n){switch(r){case"keyup":return CP.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fE(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var _a=!1;function EP(r,n){switch(r){case"compositionend":return fE(n);case"keypress":return n.which!==32?null:(x1=!0,C1);case"textInput":return r=n.data,r===C1&&x1?null:r;default:return null}}function DP(r,n){if(_a)return r==="compositionend"||!B0&&hE(r,n)?(r=dE(),Mh=M0=ho=null,_a=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return uE&&n.locale!=="ko"?null:n.data;default:return null}}var SP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E1(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n==="input"?!!SP[r.type]:n==="textarea"}function gE(r,n,o,l){W2(l),n=Zh(n,"onChange"),0<n.length&&(o=new N0("onChange","change",null,o,l),r.push({event:o,listeners:n}))}var Ml=null,Zl=null;function TP(r){xE(r,0)}function Ef(r){var n=Aa(r);if(j2(n))return r}function IP(r,n){if(r==="change")return n}var pE=!1;if(Er){var xm;if(Er){var Em="oninput"in document;if(!Em){var D1=document.createElement("div");D1.setAttribute("oninput","return;"),Em=typeof D1.oninput=="function"}xm=Em}else xm=!1;pE=xm&&(!document.documentMode||9<document.documentMode)}function S1(){Ml&&(Ml.detachEvent("onpropertychange",mE),Zl=Ml=null)}function mE(r){if(r.propertyName==="value"&&Ef(Zl)){var n=[];gE(n,Zl,r,E0(r)),Z2(TP,n)}}function MP(r,n,o){r==="focusin"?(S1(),Ml=n,Zl=o,Ml.attachEvent("onpropertychange",mE)):r==="focusout"&&S1()}function NP(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ef(Zl)}function OP(r,n){if(r==="click")return Ef(n)}function BP(r,n){if(r==="input"||r==="change")return Ef(n)}function PP(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var Pi=typeof Object.is=="function"?Object.is:PP;function Kl(r,n){if(Pi(r,n))return!0;if(typeof r!="object"||r===null||typeof n!="object"||n===null)return!1;var o=Object.keys(r),l=Object.keys(n);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!rk.call(n,u)||!Pi(r[u],n[u]))return!1}return!0}function T1(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function I1(r,n){var o=T1(r);r=0;for(var l;o;){if(o.nodeType===3){if(l=r+o.textContent.length,r<=n&&l>=n)return{node:o,offset:n-r};r=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=T1(o)}}function kE(r,n){return r&&n?r===n?!0:r&&r.nodeType===3?!1:n&&n.nodeType===3?kE(r,n.parentNode):"contains"in r?r.contains(n):r.compareDocumentPosition?!!(r.compareDocumentPosition(n)&16):!1:!1}function bE(){for(var r=window,n=Uh();n instanceof r.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)r=n.contentWindow;else break;n=Uh(r.document)}return n}function P0(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n&&(n==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||n==="textarea"||r.contentEditable==="true")}function LP(r){var n=bE(),o=r.focusedElem,l=r.selectionRange;if(n!==o&&o&&o.ownerDocument&&kE(o.ownerDocument.documentElement,o)){if(l!==null&&P0(o)){if(n=l.start,r=l.end,r===void 0&&(r=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(r,o.value.length);else if(r=(n=o.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var u=o.textContent.length,f=Math.min(l.start,u);l=l.end===void 0?f:Math.min(l.end,u),!r.extend&&f>l&&(u=l,l=f,f=u),u=I1(o,f);var g=I1(o,l);u&&g&&(r.rangeCount!==1||r.anchorNode!==u.node||r.anchorOffset!==u.offset||r.focusNode!==g.node||r.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),r.removeAllRanges(),f>l?(r.addRange(n),r.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),r.addRange(n)))}}for(n=[],r=o;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)r=n[o],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var zP=Er&&"documentMode"in document&&11>=document.documentMode,va=null,Ak=null,Nl=null,Ck=!1;function M1(r,n,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ck||va==null||va!==Uh(l)||(l=va,"selectionStart"in l&&P0(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Nl&&Kl(Nl,l)||(Nl=l,l=Zh(Ak,"onSelect"),0<l.length&&(n=new N0("onSelect","select",null,n,o),r.push({event:n,listeners:l}),n.target=va)))}function ch(r,n){var o={};return o[r.toLowerCase()]=n.toLowerCase(),o["Webkit"+r]="webkit"+n,o["Moz"+r]="moz"+n,o}var ya={animationend:ch("Animation","AnimationEnd"),animationiteration:ch("Animation","AnimationIteration"),animationstart:ch("Animation","AnimationStart"),transitionend:ch("Transition","TransitionEnd")},Dm={},wE={};Er&&(wE=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Df(r){if(Dm[r])return Dm[r];if(!ya[r])return r;var n=ya[r],o;for(o in n)if(n.hasOwnProperty(o)&&o in wE)return Dm[r]=n[o];return r}var _E=Df("animationend"),vE=Df("animationiteration"),yE=Df("animationstart"),AE=Df("transitionend"),CE=new Map,N1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Eo(r,n){CE.set(r,n),As(n,[r])}for(var Sm=0;Sm<N1.length;Sm++){var Tm=N1[Sm],jP=Tm.toLowerCase(),RP=Tm[0].toUpperCase()+Tm.slice(1);Eo(jP,"on"+RP)}Eo(_E,"onAnimationEnd");Eo(vE,"onAnimationIteration");Eo(yE,"onAnimationStart");Eo("dblclick","onDoubleClick");Eo("focusin","onFocus");Eo("focusout","onBlur");Eo(AE,"onTransitionEnd");za("onMouseEnter",["mouseout","mouseover"]);za("onMouseLeave",["mouseout","mouseover"]);za("onPointerEnter",["pointerout","pointerover"]);za("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Al));function O1(r,n,o){var l=r.type||"unknown-event";r.currentTarget=o,jB(l,n,void 0,r),r.currentTarget=null}function xE(r,n){n=(n&4)!==0;for(var o=0;o<r.length;o++){var l=r[o],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var g=l.length-1;0<=g;g--){var k=l[g],w=k.instance,v=k.currentTarget;if(k=k.listener,w!==f&&u.isPropagationStopped())break e;O1(u,k,v),f=w}else for(g=0;g<l.length;g++){if(k=l[g],w=k.instance,v=k.currentTarget,k=k.listener,w!==f&&u.isPropagationStopped())break e;O1(u,k,v),f=w}}}if(Hh)throw r=wk,Hh=!1,wk=null,r}function dt(r,n){var o=n[Tk];o===void 0&&(o=n[Tk]=new Set);var l=r+"__bubble";o.has(l)||(EE(n,r,2,!1),o.add(l))}function Im(r,n,o){var l=0;n&&(l|=4),EE(o,r,l,n)}var lh="_reactListening"+Math.random().toString(36).slice(2);function Ql(r){if(!r[lh]){r[lh]=!0,O2.forEach(function(o){o!=="selectionchange"&&(FP.has(o)||Im(o,!1,r),Im(o,!0,r))});var n=r.nodeType===9?r:r.ownerDocument;n===null||n[lh]||(n[lh]=!0,Im("selectionchange",!1,n))}}function EE(r,n,o,l){switch(lE(n)){case 1:var u=eP;break;case 4:u=tP;break;default:u=I0}o=u.bind(null,n,o,r),u=void 0,!bk||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?r.addEventListener(n,o,{capture:!0,passive:u}):r.addEventListener(n,o,!0):u!==void 0?r.addEventListener(n,o,{passive:u}):r.addEventListener(n,o,!1)}function Mm(r,n,o,l,u){var f=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var k=l.stateNode.containerInfo;if(k===u||k.nodeType===8&&k.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var w=g.tag;if((w===3||w===4)&&(w=g.stateNode.containerInfo,w===u||w.nodeType===8&&w.parentNode===u))return;g=g.return}for(;k!==null;){if(g=us(k),g===null)return;if(w=g.tag,w===5||w===6){l=f=g;continue e}k=k.parentNode}}l=l.return}Z2(function(){var v=f,_=E0(o),A=[];e:{var x=CE.get(r);if(x!==void 0){var S=N0,N=r;switch(r){case"keypress":if(Nh(o)===0)break e;case"keydown":case"keyup":S=mP;break;case"focusin":N="focus",S=Cm;break;case"focusout":N="blur",S=Cm;break;case"beforeblur":case"afterblur":S=Cm;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=v1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=rP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=wP;break;case _E:case vE:case yE:S=aP;break;case AE:S=vP;break;case"scroll":S=nP;break;case"wheel":S=AP;break;case"copy":case"cut":case"paste":S=lP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=A1}var P=(n&4)!==0,R=!P&&r==="scroll",B=P?x!==null?x+"Capture":null:x;P=[];for(var L=v,D;L!==null;){D=L;var W=D.stateNode;if(D.tag===5&&W!==null&&(D=W,B!==null&&(W=Wl(L,B),W!=null&&P.push(Jl(L,W,D)))),R)break;L=L.return}0<P.length&&(x=new S(x,N,null,o,_),A.push({event:x,listeners:P}))}}if(!(n&7)){e:{if(x=r==="mouseover"||r==="pointerover",S=r==="mouseout"||r==="pointerout",x&&o!==mk&&(N=o.relatedTarget||o.fromElement)&&(us(N)||N[Dr]))break e;if((S||x)&&(x=_.window===_?_:(x=_.ownerDocument)?x.defaultView||x.parentWindow:window,S?(N=o.relatedTarget||o.toElement,S=v,N=N?us(N):null,N!==null&&(R=Cs(N),N!==R||N.tag!==5&&N.tag!==6)&&(N=null)):(S=null,N=v),S!==N)){if(P=v1,W="onMouseLeave",B="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(P=A1,W="onPointerLeave",B="onPointerEnter",L="pointer"),R=S==null?x:Aa(S),D=N==null?x:Aa(N),x=new P(W,L+"leave",S,o,_),x.target=R,x.relatedTarget=D,W=null,us(_)===v&&(P=new P(B,L+"enter",N,o,_),P.target=D,P.relatedTarget=R,W=P),R=W,S&&N)t:{for(P=S,B=N,L=0,D=P;D;D=da(D))L++;for(D=0,W=B;W;W=da(W))D++;for(;0<L-D;)P=da(P),L--;for(;0<D-L;)B=da(B),D--;for(;L--;){if(P===B||B!==null&&P===B.alternate)break t;P=da(P),B=da(B)}P=null}else P=null;S!==null&&B1(A,x,S,P,!1),N!==null&&R!==null&&B1(A,R,N,P,!0)}}e:{if(x=v?Aa(v):window,S=x.nodeName&&x.nodeName.toLowerCase(),S==="select"||S==="input"&&x.type==="file")var K=IP;else if(E1(x))if(pE)K=BP;else{K=NP;var ee=MP}else(S=x.nodeName)&&S.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(K=OP);if(K&&(K=K(r,v))){gE(A,K,o,_);break e}ee&&ee(r,x,v),r==="focusout"&&(ee=x._wrapperState)&&ee.controlled&&x.type==="number"&&uk(x,"number",x.value)}switch(ee=v?Aa(v):window,r){case"focusin":(E1(ee)||ee.contentEditable==="true")&&(va=ee,Ak=v,Nl=null);break;case"focusout":Nl=Ak=va=null;break;case"mousedown":Ck=!0;break;case"contextmenu":case"mouseup":case"dragend":Ck=!1,M1(A,o,_);break;case"selectionchange":if(zP)break;case"keydown":case"keyup":M1(A,o,_)}var X;if(B0)e:{switch(r){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else _a?hE(r,o)&&(se="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(se="onCompositionStart");se&&(uE&&o.locale!=="ko"&&(_a||se!=="onCompositionStart"?se==="onCompositionEnd"&&_a&&(X=dE()):(ho=_,M0="value"in ho?ho.value:ho.textContent,_a=!0)),ee=Zh(v,se),0<ee.length&&(se=new y1(se,r,null,o,_),A.push({event:se,listeners:ee}),X?se.data=X:(X=fE(o),X!==null&&(se.data=X)))),(X=xP?EP(r,o):DP(r,o))&&(v=Zh(v,"onBeforeInput"),0<v.length&&(_=new y1("onBeforeInput","beforeinput",null,o,_),A.push({event:_,listeners:v}),_.data=X))}xE(A,n)})}function Jl(r,n,o){return{instance:r,listener:n,currentTarget:o}}function Zh(r,n){for(var o=n+"Capture",l=[];r!==null;){var u=r,f=u.stateNode;u.tag===5&&f!==null&&(u=f,f=Wl(r,o),f!=null&&l.unshift(Jl(r,f,u)),f=Wl(r,n),f!=null&&l.push(Jl(r,f,u))),r=r.return}return l}function da(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function B1(r,n,o,l,u){for(var f=n._reactName,g=[];o!==null&&o!==l;){var k=o,w=k.alternate,v=k.stateNode;if(w!==null&&w===l)break;k.tag===5&&v!==null&&(k=v,u?(w=Wl(o,f),w!=null&&g.unshift(Jl(o,w,k))):u||(w=Wl(o,f),w!=null&&g.push(Jl(o,w,k)))),o=o.return}g.length!==0&&r.push({event:n,listeners:g})}var VP=/\r\n?/g,UP=/\u0000|\uFFFD/g;function P1(r){return(typeof r=="string"?r:""+r).replace(VP,`
`).replace(UP,"")}function dh(r,n,o){if(n=P1(n),P1(r)!==n&&o)throw Error(le(425))}function Kh(){}var xk=null,Ek=null;function Dk(r,n){return r==="textarea"||r==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sk=typeof setTimeout=="function"?setTimeout:void 0,$P=typeof clearTimeout=="function"?clearTimeout:void 0,L1=typeof Promise=="function"?Promise:void 0,HP=typeof queueMicrotask=="function"?queueMicrotask:typeof L1<"u"?function(r){return L1.resolve(null).then(r).catch(WP)}:Sk;function WP(r){setTimeout(function(){throw r})}function Nm(r,n){var o=n,l=0;do{var u=o.nextSibling;if(r.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){r.removeChild(u),Yl(n);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Yl(n)}function bo(r){for(;r!=null;r=r.nextSibling){var n=r.nodeType;if(n===1||n===3)break;if(n===8){if(n=r.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return r}function z1(r){r=r.previousSibling;for(var n=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return r;n--}else o==="/$"&&n++}r=r.previousSibling}return null}var Ga=Math.random().toString(36).slice(2),tr="__reactFiber$"+Ga,Xl="__reactProps$"+Ga,Dr="__reactContainer$"+Ga,Tk="__reactEvents$"+Ga,qP="__reactListeners$"+Ga,GP="__reactHandles$"+Ga;function us(r){var n=r[tr];if(n)return n;for(var o=r.parentNode;o;){if(n=o[Dr]||o[tr]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(r=z1(r);r!==null;){if(o=r[tr])return o;r=z1(r)}return n}r=o,o=r.parentNode}return null}function hd(r){return r=r[tr]||r[Dr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Aa(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(le(33))}function Sf(r){return r[Xl]||null}var Ik=[],Ca=-1;function Do(r){return{current:r}}function ht(r){0>Ca||(r.current=Ik[Ca],Ik[Ca]=null,Ca--)}function ct(r,n){Ca++,Ik[Ca]=r.current,r.current=n}var xo={},un=Do(xo),On=Do(!1),bs=xo;function ja(r,n){var o=r.type.contextTypes;if(!o)return xo;var l=r.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in o)u[f]=n[f];return l&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=u),u}function Bn(r){return r=r.childContextTypes,r!=null}function Qh(){ht(On),ht(un)}function j1(r,n,o){if(un.current!==xo)throw Error(le(168));ct(un,n),ct(On,o)}function DE(r,n,o){var l=r.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(le(108,MB(r)||"Unknown",u));return kt({},o,l)}function Jh(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||xo,bs=un.current,ct(un,r),ct(On,On.current),!0}function R1(r,n,o){var l=r.stateNode;if(!l)throw Error(le(169));o?(r=DE(r,n,bs),l.__reactInternalMemoizedMergedChildContext=r,ht(On),ht(un),ct(un,r)):ht(On),ct(On,o)}var vr=null,Tf=!1,Om=!1;function SE(r){vr===null?vr=[r]:vr.push(r)}function YP(r){Tf=!0,SE(r)}function So(){if(!Om&&vr!==null){Om=!0;var r=0,n=et;try{var o=vr;for(et=1;r<o.length;r++){var l=o[r];do l=l(!0);while(l!==null)}vr=null,Tf=!1}catch(u){throw vr!==null&&(vr=vr.slice(r+1)),X2(D0,So),u}finally{et=n,Om=!1}}return null}var xa=[],Ea=0,Xh=null,ef=0,ai=[],ci=0,ws=null,yr=1,Ar="";function os(r,n){xa[Ea++]=ef,xa[Ea++]=Xh,Xh=r,ef=n}function TE(r,n,o){ai[ci++]=yr,ai[ci++]=Ar,ai[ci++]=ws,ws=r;var l=yr;r=Ar;var u=32-Oi(l)-1;l&=~(1<<u),o+=1;var f=32-Oi(n)+u;if(30<f){var g=u-u%5;f=(l&(1<<g)-1).toString(32),l>>=g,u-=g,yr=1<<32-Oi(n)+u|o<<u|l,Ar=f+r}else yr=1<<f|o<<u|l,Ar=r}function L0(r){r.return!==null&&(os(r,1),TE(r,1,0))}function z0(r){for(;r===Xh;)Xh=xa[--Ea],xa[Ea]=null,ef=xa[--Ea],xa[Ea]=null;for(;r===ws;)ws=ai[--ci],ai[ci]=null,Ar=ai[--ci],ai[ci]=null,yr=ai[--ci],ai[ci]=null}var Yn=null,Gn=null,ft=!1,Ii=null;function IE(r,n){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=r,n=r.deletions,n===null?(r.deletions=[o],r.flags|=16):n.push(o)}function F1(r,n){switch(r.tag){case 5:var o=r.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(r.stateNode=n,Yn=r,Gn=bo(n.firstChild),!0):!1;case 6:return n=r.pendingProps===""||n.nodeType!==3?null:n,n!==null?(r.stateNode=n,Yn=r,Gn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=ws!==null?{id:yr,overflow:Ar}:null,r.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=n,o.return=r,r.child=o,Yn=r,Gn=null,!0):!1;default:return!1}}function Mk(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Nk(r){if(ft){var n=Gn;if(n){var o=n;if(!F1(r,n)){if(Mk(r))throw Error(le(418));n=bo(o.nextSibling);var l=Yn;n&&F1(r,n)?IE(l,o):(r.flags=r.flags&-4097|2,ft=!1,Yn=r)}}else{if(Mk(r))throw Error(le(418));r.flags=r.flags&-4097|2,ft=!1,Yn=r}}}function V1(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Yn=r}function uh(r){if(r!==Yn)return!1;if(!ft)return V1(r),ft=!0,!1;var n;if((n=r.tag!==3)&&!(n=r.tag!==5)&&(n=r.type,n=n!=="head"&&n!=="body"&&!Dk(r.type,r.memoizedProps)),n&&(n=Gn)){if(Mk(r))throw ME(),Error(le(418));for(;n;)IE(r,n),n=bo(n.nextSibling)}if(V1(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(le(317));e:{for(r=r.nextSibling,n=0;r;){if(r.nodeType===8){var o=r.data;if(o==="/$"){if(n===0){Gn=bo(r.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}r=r.nextSibling}Gn=null}}else Gn=Yn?bo(r.stateNode.nextSibling):null;return!0}function ME(){for(var r=Gn;r;)r=bo(r.nextSibling)}function Ra(){Gn=Yn=null,ft=!1}function j0(r){Ii===null?Ii=[r]:Ii.push(r)}var ZP=Nr.ReactCurrentBatchConfig;function Di(r,n){if(r&&r.defaultProps){n=kt({},n),r=r.defaultProps;for(var o in r)n[o]===void 0&&(n[o]=r[o]);return n}return n}var tf=Do(null),nf=null,Da=null,R0=null;function F0(){R0=Da=nf=null}function V0(r){var n=tf.current;ht(tf),r._currentValue=n}function Ok(r,n,o){for(;r!==null;){var l=r.alternate;if((r.childLanes&n)!==n?(r.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),r===o)break;r=r.return}}function Ba(r,n){nf=r,R0=Da=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&n&&(Nn=!0),r.firstContext=null)}function fi(r){var n=r._currentValue;if(R0!==r)if(r={context:r,memoizedValue:n,next:null},Da===null){if(nf===null)throw Error(le(308));Da=r,nf.dependencies={lanes:0,firstContext:r}}else Da=Da.next=r;return n}var hs=null;function U0(r){hs===null?hs=[r]:hs.push(r)}function NE(r,n,o,l){var u=n.interleaved;return u===null?(o.next=o,U0(n)):(o.next=u.next,u.next=o),n.interleaved=o,Sr(r,l)}function Sr(r,n){r.lanes|=n;var o=r.alternate;for(o!==null&&(o.lanes|=n),o=r,r=r.return;r!==null;)r.childLanes|=n,o=r.alternate,o!==null&&(o.childLanes|=n),o=r,r=r.return;return o.tag===3?o.stateNode:null}var ro=!1;function $0(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function OE(r,n){r=r.updateQueue,n.updateQueue===r&&(n.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xr(r,n){return{eventTime:r,lane:n,tag:0,payload:null,callback:null,next:null}}function wo(r,n,o){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,$e&2){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Sr(r,o)}return u=l.interleaved,u===null?(n.next=n,U0(l)):(n.next=u.next,u.next=n),l.interleaved=n,Sr(r,o)}function Oh(r,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var l=n.lanes;l&=r.pendingLanes,o|=l,n.lanes=o,S0(r,o)}}function U1(r,n){var o=r.updateQueue,l=r.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?u=f=g:f=f.next=g,o=o.next}while(o!==null);f===null?u=f=n:f=f.next=n}else u=f=n;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,effects:l.effects},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=n:r.next=n,o.lastBaseUpdate=n}function rf(r,n,o,l){var u=r.updateQueue;ro=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,k=u.shared.pending;if(k!==null){u.shared.pending=null;var w=k,v=w.next;w.next=null,g===null?f=v:g.next=v,g=w;var _=r.alternate;_!==null&&(_=_.updateQueue,k=_.lastBaseUpdate,k!==g&&(k===null?_.firstBaseUpdate=v:k.next=v,_.lastBaseUpdate=w))}if(f!==null){var A=u.baseState;g=0,_=v=w=null,k=f;do{var x=k.lane,S=k.eventTime;if((l&x)===x){_!==null&&(_=_.next={eventTime:S,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var N=r,P=k;switch(x=n,S=o,P.tag){case 1:if(N=P.payload,typeof N=="function"){A=N.call(S,A,x);break e}A=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,x=typeof N=="function"?N.call(S,A,x):N,x==null)break e;A=kt({},A,x);break e;case 2:ro=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,x=u.effects,x===null?u.effects=[k]:x.push(k))}else S={eventTime:S,lane:x,tag:k.tag,payload:k.payload,callback:k.callback,next:null},_===null?(v=_=S,w=A):_=_.next=S,g|=x;if(k=k.next,k===null){if(k=u.shared.pending,k===null)break;x=k,k=x.next,x.next=null,u.lastBaseUpdate=x,u.shared.pending=null}}while(1);if(_===null&&(w=A),u.baseState=w,u.firstBaseUpdate=v,u.lastBaseUpdate=_,n=u.shared.interleaved,n!==null){u=n;do g|=u.lane,u=u.next;while(u!==n)}else f===null&&(u.shared.lanes=0);vs|=g,r.lanes=g,r.memoizedState=A}}function $1(r,n,o){if(r=n.effects,n.effects=null,r!==null)for(n=0;n<r.length;n++){var l=r[n],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(le(191,u));u.call(l)}}}var BE=new N2.Component().refs;function Bk(r,n,o,l){n=r.memoizedState,o=o(l,n),o=o==null?n:kt({},n,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var If={isMounted:function(r){return(r=r._reactInternals)?Cs(r)===r:!1},enqueueSetState:function(r,n,o){r=r._reactInternals;var l=vn(),u=vo(r),f=xr(l,u);f.payload=n,o!=null&&(f.callback=o),n=wo(r,f,u),n!==null&&(Bi(n,r,u,l),Oh(n,r,u))},enqueueReplaceState:function(r,n,o){r=r._reactInternals;var l=vn(),u=vo(r),f=xr(l,u);f.tag=1,f.payload=n,o!=null&&(f.callback=o),n=wo(r,f,u),n!==null&&(Bi(n,r,u,l),Oh(n,r,u))},enqueueForceUpdate:function(r,n){r=r._reactInternals;var o=vn(),l=vo(r),u=xr(o,l);u.tag=2,n!=null&&(u.callback=n),n=wo(r,u,l),n!==null&&(Bi(n,r,l,o),Oh(n,r,l))}};function H1(r,n,o,l,u,f,g){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(l,f,g):n.prototype&&n.prototype.isPureReactComponent?!Kl(o,l)||!Kl(u,f):!0}function PE(r,n,o){var l=!1,u=xo,f=n.contextType;return typeof f=="object"&&f!==null?f=fi(f):(u=Bn(n)?bs:un.current,l=n.contextTypes,f=(l=l!=null)?ja(r,u):xo),n=new n(o,f),r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=If,r.stateNode=n,n._reactInternals=r,l&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=u,r.__reactInternalMemoizedMaskedChildContext=f),n}function W1(r,n,o,l){r=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,l),n.state!==r&&If.enqueueReplaceState(n,n.state,null)}function Pk(r,n,o,l){var u=r.stateNode;u.props=o,u.state=r.memoizedState,u.refs=BE,$0(r);var f=n.contextType;typeof f=="object"&&f!==null?u.context=fi(f):(f=Bn(n)?bs:un.current,u.context=ja(r,f)),u.state=r.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Bk(r,n,f,o),u.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&If.enqueueReplaceState(u,u.state,null),rf(r,o,u,l),u.state=r.memoizedState),typeof u.componentDidMount=="function"&&(r.flags|=4194308)}function gl(r,n,o){if(r=o.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(le(309));var l=o.stateNode}if(!l)throw Error(le(147,r));var u=l,f=""+r;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(g){var k=u.refs;k===BE&&(k=u.refs={}),g===null?delete k[f]:k[f]=g},n._stringRef=f,n)}if(typeof r!="string")throw Error(le(284));if(!o._owner)throw Error(le(290,r))}return r}function hh(r,n){throw r=Object.prototype.toString.call(n),Error(le(31,r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r))}function q1(r){var n=r._init;return n(r._payload)}function LE(r){function n(B,L){if(r){var D=B.deletions;D===null?(B.deletions=[L],B.flags|=16):D.push(L)}}function o(B,L){if(!r)return null;for(;L!==null;)n(B,L),L=L.sibling;return null}function l(B,L){for(B=new Map;L!==null;)L.key!==null?B.set(L.key,L):B.set(L.index,L),L=L.sibling;return B}function u(B,L){return B=yo(B,L),B.index=0,B.sibling=null,B}function f(B,L,D){return B.index=D,r?(D=B.alternate,D!==null?(D=D.index,D<L?(B.flags|=2,L):D):(B.flags|=2,L)):(B.flags|=1048576,L)}function g(B){return r&&B.alternate===null&&(B.flags|=2),B}function k(B,L,D,W){return L===null||L.tag!==6?(L=Fm(D,B.mode,W),L.return=B,L):(L=u(L,D),L.return=B,L)}function w(B,L,D,W){var K=D.type;return K===wa?_(B,L,D.props.children,W,D.key):L!==null&&(L.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===io&&q1(K)===L.type)?(W=u(L,D.props),W.ref=gl(B,L,D),W.return=B,W):(W=Rh(D.type,D.key,D.props,null,B.mode,W),W.ref=gl(B,L,D),W.return=B,W)}function v(B,L,D,W){return L===null||L.tag!==4||L.stateNode.containerInfo!==D.containerInfo||L.stateNode.implementation!==D.implementation?(L=Vm(D,B.mode,W),L.return=B,L):(L=u(L,D.children||[]),L.return=B,L)}function _(B,L,D,W,K){return L===null||L.tag!==7?(L=ms(D,B.mode,W,K),L.return=B,L):(L=u(L,D),L.return=B,L)}function A(B,L,D){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Fm(""+L,B.mode,D),L.return=B,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case th:return D=Rh(L.type,L.key,L.props,null,B.mode,D),D.ref=gl(B,null,L),D.return=B,D;case ba:return L=Vm(L,B.mode,D),L.return=B,L;case io:var W=L._init;return A(B,W(L._payload),D)}if(vl(L)||ll(L))return L=ms(L,B.mode,D,null),L.return=B,L;hh(B,L)}return null}function x(B,L,D,W){var K=L!==null?L.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return K!==null?null:k(B,L,""+D,W);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case th:return D.key===K?w(B,L,D,W):null;case ba:return D.key===K?v(B,L,D,W):null;case io:return K=D._init,x(B,L,K(D._payload),W)}if(vl(D)||ll(D))return K!==null?null:_(B,L,D,W,null);hh(B,D)}return null}function S(B,L,D,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return B=B.get(D)||null,k(L,B,""+W,K);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case th:return B=B.get(W.key===null?D:W.key)||null,w(L,B,W,K);case ba:return B=B.get(W.key===null?D:W.key)||null,v(L,B,W,K);case io:var ee=W._init;return S(B,L,D,ee(W._payload),K)}if(vl(W)||ll(W))return B=B.get(D)||null,_(L,B,W,K,null);hh(L,W)}return null}function N(B,L,D,W){for(var K=null,ee=null,X=L,se=L=0,he=null;X!==null&&se<D.length;se++){X.index>se?(he=X,X=null):he=X.sibling;var be=x(B,X,D[se],W);if(be===null){X===null&&(X=he);break}r&&X&&be.alternate===null&&n(B,X),L=f(be,L,se),ee===null?K=be:ee.sibling=be,ee=be,X=he}if(se===D.length)return o(B,X),ft&&os(B,se),K;if(X===null){for(;se<D.length;se++)X=A(B,D[se],W),X!==null&&(L=f(X,L,se),ee===null?K=X:ee.sibling=X,ee=X);return ft&&os(B,se),K}for(X=l(B,X);se<D.length;se++)he=S(X,B,se,D[se],W),he!==null&&(r&&he.alternate!==null&&X.delete(he.key===null?se:he.key),L=f(he,L,se),ee===null?K=he:ee.sibling=he,ee=he);return r&&X.forEach(function(G){return n(B,G)}),ft&&os(B,se),K}function P(B,L,D,W){var K=ll(D);if(typeof K!="function")throw Error(le(150));if(D=K.call(D),D==null)throw Error(le(151));for(var ee=K=null,X=L,se=L=0,he=null,be=D.next();X!==null&&!be.done;se++,be=D.next()){X.index>se?(he=X,X=null):he=X.sibling;var G=x(B,X,be.value,W);if(G===null){X===null&&(X=he);break}r&&X&&G.alternate===null&&n(B,X),L=f(G,L,se),ee===null?K=G:ee.sibling=G,ee=G,X=he}if(be.done)return o(B,X),ft&&os(B,se),K;if(X===null){for(;!be.done;se++,be=D.next())be=A(B,be.value,W),be!==null&&(L=f(be,L,se),ee===null?K=be:ee.sibling=be,ee=be);return ft&&os(B,se),K}for(X=l(B,X);!be.done;se++,be=D.next())be=S(X,B,se,be.value,W),be!==null&&(r&&be.alternate!==null&&X.delete(be.key===null?se:be.key),L=f(be,L,se),ee===null?K=be:ee.sibling=be,ee=be);return r&&X.forEach(function(Y){return n(B,Y)}),ft&&os(B,se),K}function R(B,L,D,W){if(typeof D=="object"&&D!==null&&D.type===wa&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case th:e:{for(var K=D.key,ee=L;ee!==null;){if(ee.key===K){if(K=D.type,K===wa){if(ee.tag===7){o(B,ee.sibling),L=u(ee,D.props.children),L.return=B,B=L;break e}}else if(ee.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===io&&q1(K)===ee.type){o(B,ee.sibling),L=u(ee,D.props),L.ref=gl(B,ee,D),L.return=B,B=L;break e}o(B,ee);break}else n(B,ee);ee=ee.sibling}D.type===wa?(L=ms(D.props.children,B.mode,W,D.key),L.return=B,B=L):(W=Rh(D.type,D.key,D.props,null,B.mode,W),W.ref=gl(B,L,D),W.return=B,B=W)}return g(B);case ba:e:{for(ee=D.key;L!==null;){if(L.key===ee)if(L.tag===4&&L.stateNode.containerInfo===D.containerInfo&&L.stateNode.implementation===D.implementation){o(B,L.sibling),L=u(L,D.children||[]),L.return=B,B=L;break e}else{o(B,L);break}else n(B,L);L=L.sibling}L=Vm(D,B.mode,W),L.return=B,B=L}return g(B);case io:return ee=D._init,R(B,L,ee(D._payload),W)}if(vl(D))return N(B,L,D,W);if(ll(D))return P(B,L,D,W);hh(B,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,L!==null&&L.tag===6?(o(B,L.sibling),L=u(L,D),L.return=B,B=L):(o(B,L),L=Fm(D,B.mode,W),L.return=B,B=L),g(B)):o(B,L)}return R}var Fa=LE(!0),zE=LE(!1),fd={},rr=Do(fd),ed=Do(fd),td=Do(fd);function fs(r){if(r===fd)throw Error(le(174));return r}function H0(r,n){switch(ct(td,n),ct(ed,r),ct(rr,fd),r=n.nodeType,r){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:fk(null,"");break;default:r=r===8?n.parentNode:n,n=r.namespaceURI||null,r=r.tagName,n=fk(n,r)}ht(rr),ct(rr,n)}function Va(){ht(rr),ht(ed),ht(td)}function jE(r){fs(td.current);var n=fs(rr.current),o=fk(n,r.type);n!==o&&(ct(ed,r),ct(rr,o))}function W0(r){ed.current===r&&(ht(rr),ht(ed))}var pt=Do(0);function of(r){for(var n=r;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bm=[];function q0(){for(var r=0;r<Bm.length;r++)Bm[r]._workInProgressVersionPrimary=null;Bm.length=0}var Bh=Nr.ReactCurrentDispatcher,Pm=Nr.ReactCurrentBatchConfig,_s=0,mt=null,Lt=null,Gt=null,sf=!1,Ol=!1,nd=0,KP=0;function sn(){throw Error(le(321))}function G0(r,n){if(n===null)return!1;for(var o=0;o<n.length&&o<r.length;o++)if(!Pi(r[o],n[o]))return!1;return!0}function Y0(r,n,o,l,u,f){if(_s=f,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Bh.current=r===null||r.memoizedState===null?eL:tL,r=o(l,u),Ol){f=0;do{if(Ol=!1,nd=0,25<=f)throw Error(le(301));f+=1,Gt=Lt=null,n.updateQueue=null,Bh.current=nL,r=o(l,u)}while(Ol)}if(Bh.current=af,n=Lt!==null&&Lt.next!==null,_s=0,Gt=Lt=mt=null,sf=!1,n)throw Error(le(300));return r}function Z0(){var r=nd!==0;return nd=0,r}function er(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?mt.memoizedState=Gt=r:Gt=Gt.next=r,Gt}function gi(){if(Lt===null){var r=mt.alternate;r=r!==null?r.memoizedState:null}else r=Lt.next;var n=Gt===null?mt.memoizedState:Gt.next;if(n!==null)Gt=n,Lt=r;else{if(r===null)throw Error(le(310));Lt=r,r={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Gt===null?mt.memoizedState=Gt=r:Gt=Gt.next=r}return Gt}function id(r,n){return typeof n=="function"?n(r):n}function Lm(r){var n=gi(),o=n.queue;if(o===null)throw Error(le(311));o.lastRenderedReducer=r;var l=Lt,u=l.baseQueue,f=o.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}l.baseQueue=u=f,o.pending=null}if(u!==null){f=u.next,l=l.baseState;var k=g=null,w=null,v=f;do{var _=v.lane;if((_s&_)===_)w!==null&&(w=w.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),l=v.hasEagerState?v.eagerState:r(l,v.action);else{var A={lane:_,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};w===null?(k=w=A,g=l):w=w.next=A,mt.lanes|=_,vs|=_}v=v.next}while(v!==null&&v!==f);w===null?g=l:w.next=k,Pi(l,n.memoizedState)||(Nn=!0),n.memoizedState=l,n.baseState=g,n.baseQueue=w,o.lastRenderedState=l}if(r=o.interleaved,r!==null){u=r;do f=u.lane,mt.lanes|=f,vs|=f,u=u.next;while(u!==r)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function zm(r){var n=gi(),o=n.queue;if(o===null)throw Error(le(311));o.lastRenderedReducer=r;var l=o.dispatch,u=o.pending,f=n.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do f=r(f,g.action),g=g.next;while(g!==u);Pi(f,n.memoizedState)||(Nn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),o.lastRenderedState=f}return[f,l]}function RE(){}function FE(r,n){var o=mt,l=gi(),u=n(),f=!Pi(l.memoizedState,u);if(f&&(l.memoizedState=u,Nn=!0),l=l.queue,K0($E.bind(null,o,l,r),[r]),l.getSnapshot!==n||f||Gt!==null&&Gt.memoizedState.tag&1){if(o.flags|=2048,rd(9,UE.bind(null,o,l,u,n),void 0,null),Yt===null)throw Error(le(349));_s&30||VE(o,n,u)}return u}function VE(r,n,o){r.flags|=16384,r={getSnapshot:n,value:o},n=mt.updateQueue,n===null?(n={lastEffect:null,stores:null},mt.updateQueue=n,n.stores=[r]):(o=n.stores,o===null?n.stores=[r]:o.push(r))}function UE(r,n,o,l){n.value=o,n.getSnapshot=l,HE(n)&&WE(r)}function $E(r,n,o){return o(function(){HE(n)&&WE(r)})}function HE(r){var n=r.getSnapshot;r=r.value;try{var o=n();return!Pi(r,o)}catch{return!0}}function WE(r){var n=Sr(r,1);n!==null&&Bi(n,r,1,-1)}function G1(r){var n=er();return typeof r=="function"&&(r=r()),n.memoizedState=n.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:id,lastRenderedState:r},n.queue=r,r=r.dispatch=XP.bind(null,mt,r),[n.memoizedState,r]}function rd(r,n,o,l){return r={tag:r,create:n,destroy:o,deps:l,next:null},n=mt.updateQueue,n===null?(n={lastEffect:null,stores:null},mt.updateQueue=n,n.lastEffect=r.next=r):(o=n.lastEffect,o===null?n.lastEffect=r.next=r:(l=o.next,o.next=r,r.next=l,n.lastEffect=r)),r}function qE(){return gi().memoizedState}function Ph(r,n,o,l){var u=er();mt.flags|=r,u.memoizedState=rd(1|n,o,void 0,l===void 0?null:l)}function Mf(r,n,o,l){var u=gi();l=l===void 0?null:l;var f=void 0;if(Lt!==null){var g=Lt.memoizedState;if(f=g.destroy,l!==null&&G0(l,g.deps)){u.memoizedState=rd(n,o,f,l);return}}mt.flags|=r,u.memoizedState=rd(1|n,o,f,l)}function Y1(r,n){return Ph(8390656,8,r,n)}function K0(r,n){return Mf(2048,8,r,n)}function GE(r,n){return Mf(4,2,r,n)}function YE(r,n){return Mf(4,4,r,n)}function ZE(r,n){if(typeof n=="function")return r=r(),n(r),function(){n(null)};if(n!=null)return r=r(),n.current=r,function(){n.current=null}}function KE(r,n,o){return o=o!=null?o.concat([r]):null,Mf(4,4,ZE.bind(null,n,r),o)}function Q0(){}function QE(r,n){var o=gi();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&G0(n,l[1])?l[0]:(o.memoizedState=[r,n],r)}function JE(r,n){var o=gi();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&G0(n,l[1])?l[0]:(r=r(),o.memoizedState=[r,n],r)}function XE(r,n,o){return _s&21?(Pi(o,n)||(o=nE(),mt.lanes|=o,vs|=o,r.baseState=!0),n):(r.baseState&&(r.baseState=!1,Nn=!0),r.memoizedState=o)}function QP(r,n){var o=et;et=o!==0&&4>o?o:4,r(!0);var l=Pm.transition;Pm.transition={};try{r(!1),n()}finally{et=o,Pm.transition=l}}function e5(){return gi().memoizedState}function JP(r,n,o){var l=vo(r);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},t5(r))n5(n,o);else if(o=NE(r,n,o,l),o!==null){var u=vn();Bi(o,r,l,u),i5(o,n,l)}}function XP(r,n,o){var l=vo(r),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(t5(r))n5(n,u);else{var f=r.alternate;if(r.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,k=f(g,o);if(u.hasEagerState=!0,u.eagerState=k,Pi(k,g)){var w=n.interleaved;w===null?(u.next=u,U0(n)):(u.next=w.next,w.next=u),n.interleaved=u;return}}catch{}finally{}o=NE(r,n,u,l),o!==null&&(u=vn(),Bi(o,r,l,u),i5(o,n,l))}}function t5(r){var n=r.alternate;return r===mt||n!==null&&n===mt}function n5(r,n){Ol=sf=!0;var o=r.pending;o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n}function i5(r,n,o){if(o&4194240){var l=n.lanes;l&=r.pendingLanes,o|=l,n.lanes=o,S0(r,o)}}var af={readContext:fi,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},eL={readContext:fi,useCallback:function(r,n){return er().memoizedState=[r,n===void 0?null:n],r},useContext:fi,useEffect:Y1,useImperativeHandle:function(r,n,o){return o=o!=null?o.concat([r]):null,Ph(4194308,4,ZE.bind(null,n,r),o)},useLayoutEffect:function(r,n){return Ph(4194308,4,r,n)},useInsertionEffect:function(r,n){return Ph(4,2,r,n)},useMemo:function(r,n){var o=er();return n=n===void 0?null:n,r=r(),o.memoizedState=[r,n],r},useReducer:function(r,n,o){var l=er();return n=o!==void 0?o(n):n,l.memoizedState=l.baseState=n,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},l.queue=r,r=r.dispatch=JP.bind(null,mt,r),[l.memoizedState,r]},useRef:function(r){var n=er();return r={current:r},n.memoizedState=r},useState:G1,useDebugValue:Q0,useDeferredValue:function(r){return er().memoizedState=r},useTransition:function(){var r=G1(!1),n=r[0];return r=QP.bind(null,r[1]),er().memoizedState=r,[n,r]},useMutableSource:function(){},useSyncExternalStore:function(r,n,o){var l=mt,u=er();if(ft){if(o===void 0)throw Error(le(407));o=o()}else{if(o=n(),Yt===null)throw Error(le(349));_s&30||VE(l,n,o)}u.memoizedState=o;var f={value:o,getSnapshot:n};return u.queue=f,Y1($E.bind(null,l,f,r),[r]),l.flags|=2048,rd(9,UE.bind(null,l,f,o,n),void 0,null),o},useId:function(){var r=er(),n=Yt.identifierPrefix;if(ft){var o=Ar,l=yr;o=(l&~(1<<32-Oi(l)-1)).toString(32)+o,n=":"+n+"R"+o,o=nd++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=KP++,n=":"+n+"r"+o.toString(32)+":";return r.memoizedState=n},unstable_isNewReconciler:!1},tL={readContext:fi,useCallback:QE,useContext:fi,useEffect:K0,useImperativeHandle:KE,useInsertionEffect:GE,useLayoutEffect:YE,useMemo:JE,useReducer:Lm,useRef:qE,useState:function(){return Lm(id)},useDebugValue:Q0,useDeferredValue:function(r){var n=gi();return XE(n,Lt.memoizedState,r)},useTransition:function(){var r=Lm(id)[0],n=gi().memoizedState;return[r,n]},useMutableSource:RE,useSyncExternalStore:FE,useId:e5,unstable_isNewReconciler:!1},nL={readContext:fi,useCallback:QE,useContext:fi,useEffect:K0,useImperativeHandle:KE,useInsertionEffect:GE,useLayoutEffect:YE,useMemo:JE,useReducer:zm,useRef:qE,useState:function(){return zm(id)},useDebugValue:Q0,useDeferredValue:function(r){var n=gi();return Lt===null?n.memoizedState=r:XE(n,Lt.memoizedState,r)},useTransition:function(){var r=zm(id)[0],n=gi().memoizedState;return[r,n]},useMutableSource:RE,useSyncExternalStore:FE,useId:e5,unstable_isNewReconciler:!1};function Ua(r,n){try{var o="",l=n;do o+=IB(l),l=l.return;while(l);var u=o}catch(f){u=`
Error generating stack: `+f.message+`
`+f.stack}return{value:r,source:n,stack:u,digest:null}}function jm(r,n,o){return{value:r,source:null,stack:o??null,digest:n??null}}function Lk(r,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var iL=typeof WeakMap=="function"?WeakMap:Map;function r5(r,n,o){o=xr(-1,o),o.tag=3,o.payload={element:null};var l=n.value;return o.callback=function(){lf||(lf=!0,qk=l),Lk(r,n)},o}function o5(r,n,o){o=xr(-1,o),o.tag=3;var l=r.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;o.payload=function(){return l(u)},o.callback=function(){Lk(r,n)}}var f=r.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){Lk(r,n),typeof l!="function"&&(_o===null?_o=new Set([this]):_o.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),o}function Z1(r,n,o){var l=r.pingCache;if(l===null){l=r.pingCache=new iL;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(o)||(u.add(o),r=kL.bind(null,r,n,o),n.then(r,r))}function K1(r){do{var n;if((n=r.tag===13)&&(n=r.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return r;r=r.return}while(r!==null);return null}function Q1(r,n,o,l,u){return r.mode&1?(r.flags|=65536,r.lanes=u,r):(r===n?r.flags|=65536:(r.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=xr(-1,1),n.tag=2,wo(o,n,1))),o.lanes|=1),r)}var rL=Nr.ReactCurrentOwner,Nn=!1;function wn(r,n,o,l){n.child=r===null?zE(n,null,o,l):Fa(n,r.child,o,l)}function J1(r,n,o,l,u){o=o.render;var f=n.ref;return Ba(n,u),l=Y0(r,n,o,l,f,u),o=Z0(),r!==null&&!Nn?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~u,Tr(r,n,u)):(ft&&o&&L0(n),n.flags|=1,wn(r,n,l,u),n.child)}function X1(r,n,o,l,u){if(r===null){var f=o.type;return typeof f=="function"&&!ob(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=f,s5(r,n,f,l,u)):(r=Rh(o.type,null,l,n,n.mode,u),r.ref=n.ref,r.return=n,n.child=r)}if(f=r.child,!(r.lanes&u)){var g=f.memoizedProps;if(o=o.compare,o=o!==null?o:Kl,o(g,l)&&r.ref===n.ref)return Tr(r,n,u)}return n.flags|=1,r=yo(f,l),r.ref=n.ref,r.return=n,n.child=r}function s5(r,n,o,l,u){if(r!==null){var f=r.memoizedProps;if(Kl(f,l)&&r.ref===n.ref)if(Nn=!1,n.pendingProps=l=f,(r.lanes&u)!==0)r.flags&131072&&(Nn=!0);else return n.lanes=r.lanes,Tr(r,n,u)}return zk(r,n,o,l,u)}function a5(r,n,o){var l=n.pendingProps,u=l.children,f=r!==null?r.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Ta,Wn),Wn|=o;else{if(!(o&1073741824))return r=f!==null?f.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:r,cachePool:null,transitions:null},n.updateQueue=null,ct(Ta,Wn),Wn|=r,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:o,ct(Ta,Wn),Wn|=l}else f!==null?(l=f.baseLanes|o,n.memoizedState=null):l=o,ct(Ta,Wn),Wn|=l;return wn(r,n,u,o),n.child}function c5(r,n){var o=n.ref;(r===null&&o!==null||r!==null&&r.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function zk(r,n,o,l,u){var f=Bn(o)?bs:un.current;return f=ja(n,f),Ba(n,u),o=Y0(r,n,o,l,f,u),l=Z0(),r!==null&&!Nn?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~u,Tr(r,n,u)):(ft&&l&&L0(n),n.flags|=1,wn(r,n,o,u),n.child)}function ex(r,n,o,l,u){if(Bn(o)){var f=!0;Jh(n)}else f=!1;if(Ba(n,u),n.stateNode===null)Lh(r,n),PE(n,o,l),Pk(n,o,l,u),l=!0;else if(r===null){var g=n.stateNode,k=n.memoizedProps;g.props=k;var w=g.context,v=o.contextType;typeof v=="object"&&v!==null?v=fi(v):(v=Bn(o)?bs:un.current,v=ja(n,v));var _=o.getDerivedStateFromProps,A=typeof _=="function"||typeof g.getSnapshotBeforeUpdate=="function";A||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k!==l||w!==v)&&W1(n,g,l,v),ro=!1;var x=n.memoizedState;g.state=x,rf(n,l,g,u),w=n.memoizedState,k!==l||x!==w||On.current||ro?(typeof _=="function"&&(Bk(n,o,_,l),w=n.memoizedState),(k=ro||H1(n,o,k,l,x,w,v))?(A||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),g.props=l,g.state=w,g.context=v,l=k):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{g=n.stateNode,OE(r,n),k=n.memoizedProps,v=n.type===n.elementType?k:Di(n.type,k),g.props=v,A=n.pendingProps,x=g.context,w=o.contextType,typeof w=="object"&&w!==null?w=fi(w):(w=Bn(o)?bs:un.current,w=ja(n,w));var S=o.getDerivedStateFromProps;(_=typeof S=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k!==A||x!==w)&&W1(n,g,l,w),ro=!1,x=n.memoizedState,g.state=x,rf(n,l,g,u);var N=n.memoizedState;k!==A||x!==N||On.current||ro?(typeof S=="function"&&(Bk(n,o,S,l),N=n.memoizedState),(v=ro||H1(n,o,v,l,x,N,w)||!1)?(_||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,N,w),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,N,w)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||k===r.memoizedProps&&x===r.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&x===r.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),g.props=l,g.state=N,g.context=w,l=v):(typeof g.componentDidUpdate!="function"||k===r.memoizedProps&&x===r.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&x===r.memoizedState||(n.flags|=1024),l=!1)}return jk(r,n,o,l,f,u)}function jk(r,n,o,l,u,f){c5(r,n);var g=(n.flags&128)!==0;if(!l&&!g)return u&&R1(n,o,!1),Tr(r,n,f);l=n.stateNode,rL.current=n;var k=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,r!==null&&g?(n.child=Fa(n,r.child,null,f),n.child=Fa(n,null,k,f)):wn(r,n,k,f),n.memoizedState=l.state,u&&R1(n,o,!0),n.child}function l5(r){var n=r.stateNode;n.pendingContext?j1(r,n.pendingContext,n.pendingContext!==n.context):n.context&&j1(r,n.context,!1),H0(r,n.containerInfo)}function tx(r,n,o,l,u){return Ra(),j0(u),n.flags|=256,wn(r,n,o,l),n.child}var Rk={dehydrated:null,treeContext:null,retryLane:0};function Fk(r){return{baseLanes:r,cachePool:null,transitions:null}}function d5(r,n,o){var l=n.pendingProps,u=pt.current,f=!1,g=(n.flags&128)!==0,k;if((k=g)||(k=r!==null&&r.memoizedState===null?!1:(u&2)!==0),k?(f=!0,n.flags&=-129):(r===null||r.memoizedState!==null)&&(u|=1),ct(pt,u&1),r===null)return Nk(n),r=n.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(n.mode&1?r.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(g=l.children,r=l.fallback,f?(l=n.mode,f=n.child,g={mode:"hidden",children:g},!(l&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=Bf(g,l,0,null),r=ms(r,l,o,null),f.return=n,r.return=n,f.sibling=r,n.child=f,n.child.memoizedState=Fk(o),n.memoizedState=Rk,r):J0(n,g));if(u=r.memoizedState,u!==null&&(k=u.dehydrated,k!==null))return oL(r,n,g,l,k,u,o);if(f){f=l.fallback,g=n.mode,u=r.child,k=u.sibling;var w={mode:"hidden",children:l.children};return!(g&1)&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=w,n.deletions=null):(l=yo(u,w),l.subtreeFlags=u.subtreeFlags&14680064),k!==null?f=yo(k,f):(f=ms(f,g,o,null),f.flags|=2),f.return=n,l.return=n,l.sibling=f,n.child=l,l=f,f=n.child,g=r.child.memoizedState,g=g===null?Fk(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=r.childLanes&~o,n.memoizedState=Rk,l}return f=r.child,r=f.sibling,l=yo(f,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=o),l.return=n,l.sibling=null,r!==null&&(o=n.deletions,o===null?(n.deletions=[r],n.flags|=16):o.push(r)),n.child=l,n.memoizedState=null,l}function J0(r,n){return n=Bf({mode:"visible",children:n},r.mode,0,null),n.return=r,r.child=n}function fh(r,n,o,l){return l!==null&&j0(l),Fa(n,r.child,null,o),r=J0(n,n.pendingProps.children),r.flags|=2,n.memoizedState=null,r}function oL(r,n,o,l,u,f,g){if(o)return n.flags&256?(n.flags&=-257,l=jm(Error(le(422))),fh(r,n,g,l)):n.memoizedState!==null?(n.child=r.child,n.flags|=128,null):(f=l.fallback,u=n.mode,l=Bf({mode:"visible",children:l.children},u,0,null),f=ms(f,u,g,null),f.flags|=2,l.return=n,f.return=n,l.sibling=f,n.child=l,n.mode&1&&Fa(n,r.child,null,g),n.child.memoizedState=Fk(g),n.memoizedState=Rk,f);if(!(n.mode&1))return fh(r,n,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var k=l.dgst;return l=k,f=Error(le(419)),l=jm(f,l,void 0),fh(r,n,g,l)}if(k=(g&r.childLanes)!==0,Nn||k){if(l=Yt,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(l.suspendedLanes|g)?0:u,u!==0&&u!==f.retryLane&&(f.retryLane=u,Sr(r,u),Bi(l,r,u,-1))}return rb(),l=jm(Error(le(421))),fh(r,n,g,l)}return u.data==="$?"?(n.flags|=128,n.child=r.child,n=bL.bind(null,r),u._reactRetry=n,null):(r=f.treeContext,Gn=bo(u.nextSibling),Yn=n,ft=!0,Ii=null,r!==null&&(ai[ci++]=yr,ai[ci++]=Ar,ai[ci++]=ws,yr=r.id,Ar=r.overflow,ws=n),n=J0(n,l.children),n.flags|=4096,n)}function nx(r,n,o){r.lanes|=n;var l=r.alternate;l!==null&&(l.lanes|=n),Ok(r.return,n,o)}function Rm(r,n,o,l,u){var f=r.memoizedState;f===null?r.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=o,f.tailMode=u)}function u5(r,n,o){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(wn(r,n,l.children,o),l=pt.current,l&2)l=l&1|2,n.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=n.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&nx(r,o,n);else if(r.tag===19)nx(r,o,n);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}l&=1}if(ct(pt,l),!(n.mode&1))n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)r=o.alternate,r!==null&&of(r)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),Rm(n,!1,u,o,f);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(r=u.alternate,r!==null&&of(r)===null){n.child=u;break}r=u.sibling,u.sibling=o,o=u,u=r}Rm(n,!0,o,null,f);break;case"together":Rm(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Lh(r,n){!(n.mode&1)&&r!==null&&(r.alternate=null,n.alternate=null,n.flags|=2)}function Tr(r,n,o){if(r!==null&&(n.dependencies=r.dependencies),vs|=n.lanes,!(o&n.childLanes))return null;if(r!==null&&n.child!==r.child)throw Error(le(153));if(n.child!==null){for(r=n.child,o=yo(r,r.pendingProps),n.child=o,o.return=n;r.sibling!==null;)r=r.sibling,o=o.sibling=yo(r,r.pendingProps),o.return=n;o.sibling=null}return n.child}function sL(r,n,o){switch(n.tag){case 3:l5(n),Ra();break;case 5:jE(n);break;case 1:Bn(n.type)&&Jh(n);break;case 4:H0(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;ct(tf,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(ct(pt,pt.current&1),n.flags|=128,null):o&n.child.childLanes?d5(r,n,o):(ct(pt,pt.current&1),r=Tr(r,n,o),r!==null?r.sibling:null);ct(pt,pt.current&1);break;case 19:if(l=(o&n.childLanes)!==0,r.flags&128){if(l)return u5(r,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ct(pt,pt.current),l)break;return null;case 22:case 23:return n.lanes=0,a5(r,n,o)}return Tr(r,n,o)}var h5,Vk,f5,g5;h5=function(r,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};Vk=function(){};f5=function(r,n,o,l){var u=r.memoizedProps;if(u!==l){r=n.stateNode,fs(rr.current);var f=null;switch(o){case"input":u=lk(r,u),l=lk(r,l),f=[];break;case"select":u=kt({},u,{value:void 0}),l=kt({},l,{value:void 0}),f=[];break;case"textarea":u=hk(r,u),l=hk(r,l),f=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(r.onclick=Kh)}gk(o,l);var g;o=null;for(v in u)if(!l.hasOwnProperty(v)&&u.hasOwnProperty(v)&&u[v]!=null)if(v==="style"){var k=u[v];for(g in k)k.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&($l.hasOwnProperty(v)?f||(f=[]):(f=f||[]).push(v,null));for(v in l){var w=l[v];if(k=u!=null?u[v]:void 0,l.hasOwnProperty(v)&&w!==k&&(w!=null||k!=null))if(v==="style")if(k){for(g in k)!k.hasOwnProperty(g)||w&&w.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in w)w.hasOwnProperty(g)&&k[g]!==w[g]&&(o||(o={}),o[g]=w[g])}else o||(f||(f=[]),f.push(v,o)),o=w;else v==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,k=k?k.__html:void 0,w!=null&&k!==w&&(f=f||[]).push(v,w)):v==="children"?typeof w!="string"&&typeof w!="number"||(f=f||[]).push(v,""+w):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&($l.hasOwnProperty(v)?(w!=null&&v==="onScroll"&&dt("scroll",r),f||k===w||(f=[])):(f=f||[]).push(v,w))}o&&(f=f||[]).push("style",o);var v=f;(n.updateQueue=v)&&(n.flags|=4)}};g5=function(r,n,o,l){o!==l&&(n.flags|=4)};function pl(r,n){if(!ft)switch(r.tailMode){case"hidden":n=r.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?n||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function an(r){var n=r.alternate!==null&&r.alternate.child===r.child,o=0,l=0;if(n)for(var u=r.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=r,u=u.sibling;else for(u=r.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=r,u=u.sibling;return r.subtreeFlags|=l,r.childLanes=o,n}function aL(r,n,o){var l=n.pendingProps;switch(z0(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return Bn(n.type)&&Qh(),an(n),null;case 3:return l=n.stateNode,Va(),ht(On),ht(un),q0(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(r===null||r.child===null)&&(uh(n)?n.flags|=4:r===null||r.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ii!==null&&(Zk(Ii),Ii=null))),Vk(r,n),an(n),null;case 5:W0(n);var u=fs(td.current);if(o=n.type,r!==null&&n.stateNode!=null)f5(r,n,o,l,u),r.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(le(166));return an(n),null}if(r=fs(rr.current),uh(n)){l=n.stateNode,o=n.type;var f=n.memoizedProps;switch(l[tr]=n,l[Xl]=f,r=(n.mode&1)!==0,o){case"dialog":dt("cancel",l),dt("close",l);break;case"iframe":case"object":case"embed":dt("load",l);break;case"video":case"audio":for(u=0;u<Al.length;u++)dt(Al[u],l);break;case"source":dt("error",l);break;case"img":case"image":case"link":dt("error",l),dt("load",l);break;case"details":dt("toggle",l);break;case"input":u1(l,f),dt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},dt("invalid",l);break;case"textarea":f1(l,f),dt("invalid",l)}gk(o,f),u=null;for(var g in f)if(f.hasOwnProperty(g)){var k=f[g];g==="children"?typeof k=="string"?l.textContent!==k&&(f.suppressHydrationWarning!==!0&&dh(l.textContent,k,r),u=["children",k]):typeof k=="number"&&l.textContent!==""+k&&(f.suppressHydrationWarning!==!0&&dh(l.textContent,k,r),u=["children",""+k]):$l.hasOwnProperty(g)&&k!=null&&g==="onScroll"&&dt("scroll",l)}switch(o){case"input":nh(l),h1(l,f,!0);break;case"textarea":nh(l),g1(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=Kh)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=V2(o)),r==="http://www.w3.org/1999/xhtml"?o==="script"?(r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof l.is=="string"?r=g.createElement(o,{is:l.is}):(r=g.createElement(o),o==="select"&&(g=r,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):r=g.createElementNS(r,o),r[tr]=n,r[Xl]=l,h5(r,n,!1,!1),n.stateNode=r;e:{switch(g=pk(o,l),o){case"dialog":dt("cancel",r),dt("close",r),u=l;break;case"iframe":case"object":case"embed":dt("load",r),u=l;break;case"video":case"audio":for(u=0;u<Al.length;u++)dt(Al[u],r);u=l;break;case"source":dt("error",r),u=l;break;case"img":case"image":case"link":dt("error",r),dt("load",r),u=l;break;case"details":dt("toggle",r),u=l;break;case"input":u1(r,l),u=lk(r,l),dt("invalid",r);break;case"option":u=l;break;case"select":r._wrapperState={wasMultiple:!!l.multiple},u=kt({},l,{value:void 0}),dt("invalid",r);break;case"textarea":f1(r,l),u=hk(r,l),dt("invalid",r);break;default:u=l}gk(o,u),k=u;for(f in k)if(k.hasOwnProperty(f)){var w=k[f];f==="style"?H2(r,w):f==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&U2(r,w)):f==="children"?typeof w=="string"?(o!=="textarea"||w!=="")&&Hl(r,w):typeof w=="number"&&Hl(r,""+w):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&($l.hasOwnProperty(f)?w!=null&&f==="onScroll"&&dt("scroll",r):w!=null&&y0(r,f,w,g))}switch(o){case"input":nh(r),h1(r,l,!1);break;case"textarea":nh(r),g1(r);break;case"option":l.value!=null&&r.setAttribute("value",""+Co(l.value));break;case"select":r.multiple=!!l.multiple,f=l.value,f!=null?Ia(r,!!l.multiple,f,!1):l.defaultValue!=null&&Ia(r,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(r.onclick=Kh)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return an(n),null;case 6:if(r&&n.stateNode!=null)g5(r,n,r.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(le(166));if(o=fs(td.current),fs(rr.current),uh(n)){if(l=n.stateNode,o=n.memoizedProps,l[tr]=n,(f=l.nodeValue!==o)&&(r=Yn,r!==null))switch(r.tag){case 3:dh(l.nodeValue,o,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&dh(l.nodeValue,o,(r.mode&1)!==0)}f&&(n.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[tr]=n,n.stateNode=l}return an(n),null;case 13:if(ht(pt),l=n.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(ft&&Gn!==null&&n.mode&1&&!(n.flags&128))ME(),Ra(),n.flags|=98560,f=!1;else if(f=uh(n),l!==null&&l.dehydrated!==null){if(r===null){if(!f)throw Error(le(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(le(317));f[tr]=n}else Ra(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;an(n),f=!1}else Ii!==null&&(Zk(Ii),Ii=null),f=!0;if(!f)return n.flags&65536?n:null}return n.flags&128?(n.lanes=o,n):(l=l!==null,l!==(r!==null&&r.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(r===null||pt.current&1?zt===0&&(zt=3):rb())),n.updateQueue!==null&&(n.flags|=4),an(n),null);case 4:return Va(),Vk(r,n),r===null&&Ql(n.stateNode.containerInfo),an(n),null;case 10:return V0(n.type._context),an(n),null;case 17:return Bn(n.type)&&Qh(),an(n),null;case 19:if(ht(pt),f=n.memoizedState,f===null)return an(n),null;if(l=(n.flags&128)!==0,g=f.rendering,g===null)if(l)pl(f,!1);else{if(zt!==0||r!==null&&r.flags&128)for(r=n.child;r!==null;){if(g=of(r),g!==null){for(n.flags|=128,pl(f,!1),l=g.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=o,o=n.child;o!==null;)f=o,r=l,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=r,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,r=g.dependencies,f.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),o=o.sibling;return ct(pt,pt.current&1|2),n.child}r=r.sibling}f.tail!==null&&xt()>$a&&(n.flags|=128,l=!0,pl(f,!1),n.lanes=4194304)}else{if(!l)if(r=of(g),r!==null){if(n.flags|=128,l=!0,o=r.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),pl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!ft)return an(n),null}else 2*xt()-f.renderingStartTime>$a&&o!==1073741824&&(n.flags|=128,l=!0,pl(f,!1),n.lanes=4194304);f.isBackwards?(g.sibling=n.child,n.child=g):(o=f.last,o!==null?o.sibling=g:n.child=g,f.last=g)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=xt(),n.sibling=null,o=pt.current,ct(pt,l?o&1|2:o&1),n):(an(n),null);case 22:case 23:return ib(),l=n.memoizedState!==null,r!==null&&r.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?Wn&1073741824&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),null;case 24:return null;case 25:return null}throw Error(le(156,n.tag))}function cL(r,n){switch(z0(n),n.tag){case 1:return Bn(n.type)&&Qh(),r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 3:return Va(),ht(On),ht(un),q0(),r=n.flags,r&65536&&!(r&128)?(n.flags=r&-65537|128,n):null;case 5:return W0(n),null;case 13:if(ht(pt),r=n.memoizedState,r!==null&&r.dehydrated!==null){if(n.alternate===null)throw Error(le(340));Ra()}return r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 19:return ht(pt),null;case 4:return Va(),null;case 10:return V0(n.type._context),null;case 22:case 23:return ib(),null;case 24:return null;default:return null}}var gh=!1,ln=!1,lL=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Sa(r,n){var o=r.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){yt(r,n,l)}else o.current=null}function Uk(r,n,o){try{o()}catch(l){yt(r,n,l)}}var ix=!1;function dL(r,n){if(xk=Gh,r=bE(),P0(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var g=0,k=-1,w=-1,v=0,_=0,A=r,x=null;t:for(;;){for(var S;A!==o||u!==0&&A.nodeType!==3||(k=g+u),A!==f||l!==0&&A.nodeType!==3||(w=g+l),A.nodeType===3&&(g+=A.nodeValue.length),(S=A.firstChild)!==null;)x=A,A=S;for(;;){if(A===r)break t;if(x===o&&++v===u&&(k=g),x===f&&++_===l&&(w=g),(S=A.nextSibling)!==null)break;A=x,x=A.parentNode}A=S}o=k===-1||w===-1?null:{start:k,end:w}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ek={focusedElem:r,selectionRange:o},Gh=!1,_e=n;_e!==null;)if(n=_e,r=n.child,(n.subtreeFlags&1028)!==0&&r!==null)r.return=n,_e=r;else for(;_e!==null;){n=_e;try{var N=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var P=N.memoizedProps,R=N.memoizedState,B=n.stateNode,L=B.getSnapshotBeforeUpdate(n.elementType===n.type?P:Di(n.type,P),R);B.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var D=n.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(W){yt(n,n.return,W)}if(r=n.sibling,r!==null){r.return=n.return,_e=r;break}_e=n.return}return N=ix,ix=!1,N}function Bl(r,n,o){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&r)===r){var f=u.destroy;u.destroy=void 0,f!==void 0&&Uk(n,o,f)}u=u.next}while(u!==l)}}function Nf(r,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&r)===r){var l=o.create;o.destroy=l()}o=o.next}while(o!==n)}}function $k(r){var n=r.ref;if(n!==null){var o=r.stateNode;switch(r.tag){case 5:r=o;break;default:r=o}typeof n=="function"?n(r):n.current=r}}function p5(r){var n=r.alternate;n!==null&&(r.alternate=null,p5(n)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(n=r.stateNode,n!==null&&(delete n[tr],delete n[Xl],delete n[Tk],delete n[qP],delete n[GP])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function m5(r){return r.tag===5||r.tag===3||r.tag===4}function rx(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||m5(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Hk(r,n,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(r,n):o.insertBefore(r,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(r,o)):(n=o,n.appendChild(r)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Kh));else if(l!==4&&(r=r.child,r!==null))for(Hk(r,n,o),r=r.sibling;r!==null;)Hk(r,n,o),r=r.sibling}function Wk(r,n,o){var l=r.tag;if(l===5||l===6)r=r.stateNode,n?o.insertBefore(r,n):o.appendChild(r);else if(l!==4&&(r=r.child,r!==null))for(Wk(r,n,o),r=r.sibling;r!==null;)Wk(r,n,o),r=r.sibling}var en=null,Si=!1;function Xr(r,n,o){for(o=o.child;o!==null;)k5(r,n,o),o=o.sibling}function k5(r,n,o){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(Cf,o)}catch{}switch(o.tag){case 5:ln||Sa(o,n);case 6:var l=en,u=Si;en=null,Xr(r,n,o),en=l,Si=u,en!==null&&(Si?(r=en,o=o.stateNode,r.nodeType===8?r.parentNode.removeChild(o):r.removeChild(o)):en.removeChild(o.stateNode));break;case 18:en!==null&&(Si?(r=en,o=o.stateNode,r.nodeType===8?Nm(r.parentNode,o):r.nodeType===1&&Nm(r,o),Yl(r)):Nm(en,o.stateNode));break;case 4:l=en,u=Si,en=o.stateNode.containerInfo,Si=!0,Xr(r,n,o),en=l,Si=u;break;case 0:case 11:case 14:case 15:if(!ln&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var f=u,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&Uk(o,n,g),u=u.next}while(u!==l)}Xr(r,n,o);break;case 1:if(!ln&&(Sa(o,n),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(k){yt(o,n,k)}Xr(r,n,o);break;case 21:Xr(r,n,o);break;case 22:o.mode&1?(ln=(l=ln)||o.memoizedState!==null,Xr(r,n,o),ln=l):Xr(r,n,o);break;default:Xr(r,n,o)}}function ox(r){var n=r.updateQueue;if(n!==null){r.updateQueue=null;var o=r.stateNode;o===null&&(o=r.stateNode=new lL),n.forEach(function(l){var u=wL.bind(null,r,l);o.has(l)||(o.add(l),l.then(u,u))})}}function yi(r,n){var o=n.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var f=r,g=n,k=g;e:for(;k!==null;){switch(k.tag){case 5:en=k.stateNode,Si=!1;break e;case 3:en=k.stateNode.containerInfo,Si=!0;break e;case 4:en=k.stateNode.containerInfo,Si=!0;break e}k=k.return}if(en===null)throw Error(le(160));k5(f,g,u),en=null,Si=!1;var w=u.alternate;w!==null&&(w.return=null),u.return=null}catch(v){yt(u,n,v)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)b5(n,r),n=n.sibling}function b5(r,n){var o=r.alternate,l=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(yi(n,r),Xi(r),l&4){try{Bl(3,r,r.return),Nf(3,r)}catch(P){yt(r,r.return,P)}try{Bl(5,r,r.return)}catch(P){yt(r,r.return,P)}}break;case 1:yi(n,r),Xi(r),l&512&&o!==null&&Sa(o,o.return);break;case 5:if(yi(n,r),Xi(r),l&512&&o!==null&&Sa(o,o.return),r.flags&32){var u=r.stateNode;try{Hl(u,"")}catch(P){yt(r,r.return,P)}}if(l&4&&(u=r.stateNode,u!=null)){var f=r.memoizedProps,g=o!==null?o.memoizedProps:f,k=r.type,w=r.updateQueue;if(r.updateQueue=null,w!==null)try{k==="input"&&f.type==="radio"&&f.name!=null&&R2(u,f),pk(k,g);var v=pk(k,f);for(g=0;g<w.length;g+=2){var _=w[g],A=w[g+1];_==="style"?H2(u,A):_==="dangerouslySetInnerHTML"?U2(u,A):_==="children"?Hl(u,A):y0(u,_,A,v)}switch(k){case"input":dk(u,f);break;case"textarea":F2(u,f);break;case"select":var x=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!f.multiple;var S=f.value;S!=null?Ia(u,!!f.multiple,S,!1):x!==!!f.multiple&&(f.defaultValue!=null?Ia(u,!!f.multiple,f.defaultValue,!0):Ia(u,!!f.multiple,f.multiple?[]:"",!1))}u[Xl]=f}catch(P){yt(r,r.return,P)}}break;case 6:if(yi(n,r),Xi(r),l&4){if(r.stateNode===null)throw Error(le(162));u=r.stateNode,f=r.memoizedProps;try{u.nodeValue=f}catch(P){yt(r,r.return,P)}}break;case 3:if(yi(n,r),Xi(r),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Yl(n.containerInfo)}catch(P){yt(r,r.return,P)}break;case 4:yi(n,r),Xi(r);break;case 13:yi(n,r),Xi(r),u=r.child,u.flags&8192&&(f=u.memoizedState!==null,u.stateNode.isHidden=f,!f||u.alternate!==null&&u.alternate.memoizedState!==null||(tb=xt())),l&4&&ox(r);break;case 22:if(_=o!==null&&o.memoizedState!==null,r.mode&1?(ln=(v=ln)||_,yi(n,r),ln=v):yi(n,r),Xi(r),l&8192){if(v=r.memoizedState!==null,(r.stateNode.isHidden=v)&&!_&&r.mode&1)for(_e=r,_=r.child;_!==null;){for(A=_e=_;_e!==null;){switch(x=_e,S=x.child,x.tag){case 0:case 11:case 14:case 15:Bl(4,x,x.return);break;case 1:Sa(x,x.return);var N=x.stateNode;if(typeof N.componentWillUnmount=="function"){l=x,o=x.return;try{n=l,N.props=n.memoizedProps,N.state=n.memoizedState,N.componentWillUnmount()}catch(P){yt(l,o,P)}}break;case 5:Sa(x,x.return);break;case 22:if(x.memoizedState!==null){ax(A);continue}}S!==null?(S.return=x,_e=S):ax(A)}_=_.sibling}e:for(_=null,A=r;;){if(A.tag===5){if(_===null){_=A;try{u=A.stateNode,v?(f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(k=A.stateNode,w=A.memoizedProps.style,g=w!=null&&w.hasOwnProperty("display")?w.display:null,k.style.display=$2("display",g))}catch(P){yt(r,r.return,P)}}}else if(A.tag===6){if(_===null)try{A.stateNode.nodeValue=v?"":A.memoizedProps}catch(P){yt(r,r.return,P)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===r)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===r)break e;for(;A.sibling===null;){if(A.return===null||A.return===r)break e;_===A&&(_=null),A=A.return}_===A&&(_=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:yi(n,r),Xi(r),l&4&&ox(r);break;case 21:break;default:yi(n,r),Xi(r)}}function Xi(r){var n=r.flags;if(n&2){try{e:{for(var o=r.return;o!==null;){if(m5(o)){var l=o;break e}o=o.return}throw Error(le(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Hl(u,""),l.flags&=-33);var f=rx(r);Wk(r,f,u);break;case 3:case 4:var g=l.stateNode.containerInfo,k=rx(r);Hk(r,k,g);break;default:throw Error(le(161))}}catch(w){yt(r,r.return,w)}r.flags&=-3}n&4096&&(r.flags&=-4097)}function uL(r,n,o){_e=r,w5(r)}function w5(r,n,o){for(var l=(r.mode&1)!==0;_e!==null;){var u=_e,f=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||gh;if(!g){var k=u.alternate,w=k!==null&&k.memoizedState!==null||ln;k=gh;var v=ln;if(gh=g,(ln=w)&&!v)for(_e=u;_e!==null;)g=_e,w=g.child,g.tag===22&&g.memoizedState!==null?cx(u):w!==null?(w.return=g,_e=w):cx(u);for(;f!==null;)_e=f,w5(f),f=f.sibling;_e=u,gh=k,ln=v}sx(r)}else u.subtreeFlags&8772&&f!==null?(f.return=u,_e=f):sx(r)}}function sx(r){for(;_e!==null;){var n=_e;if(n.flags&8772){var o=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ln||Nf(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!ln)if(o===null)l.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Di(n.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&$1(n,f,l);break;case 3:var g=n.updateQueue;if(g!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}$1(n,g,o)}break;case 5:var k=n.stateNode;if(o===null&&n.flags&4){o=k;var w=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&o.focus();break;case"img":w.src&&(o.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var v=n.alternate;if(v!==null){var _=v.memoizedState;if(_!==null){var A=_.dehydrated;A!==null&&Yl(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}ln||n.flags&512&&$k(n)}catch(x){yt(n,n.return,x)}}if(n===r){_e=null;break}if(o=n.sibling,o!==null){o.return=n.return,_e=o;break}_e=n.return}}function ax(r){for(;_e!==null;){var n=_e;if(n===r){_e=null;break}var o=n.sibling;if(o!==null){o.return=n.return,_e=o;break}_e=n.return}}function cx(r){for(;_e!==null;){var n=_e;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Nf(4,n)}catch(w){yt(n,o,w)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(w){yt(n,u,w)}}var f=n.return;try{$k(n)}catch(w){yt(n,f,w)}break;case 5:var g=n.return;try{$k(n)}catch(w){yt(n,g,w)}}}catch(w){yt(n,n.return,w)}if(n===r){_e=null;break}var k=n.sibling;if(k!==null){k.return=n.return,_e=k;break}_e=n.return}}var hL=Math.ceil,cf=Nr.ReactCurrentDispatcher,X0=Nr.ReactCurrentOwner,hi=Nr.ReactCurrentBatchConfig,$e=0,Yt=null,Ot=null,tn=0,Wn=0,Ta=Do(0),zt=0,od=null,vs=0,Of=0,eb=0,Pl=null,Mn=null,tb=0,$a=1/0,_r=null,lf=!1,qk=null,_o=null,ph=!1,fo=null,df=0,Ll=0,Gk=null,zh=-1,jh=0;function vn(){return $e&6?xt():zh!==-1?zh:zh=xt()}function vo(r){return r.mode&1?$e&2&&tn!==0?tn&-tn:ZP.transition!==null?(jh===0&&(jh=nE()),jh):(r=et,r!==0||(r=window.event,r=r===void 0?16:lE(r.type)),r):1}function Bi(r,n,o,l){if(50<Ll)throw Ll=0,Gk=null,Error(le(185));dd(r,o,l),(!($e&2)||r!==Yt)&&(r===Yt&&(!($e&2)&&(Of|=o),zt===4&&co(r,tn)),Pn(r,l),o===1&&$e===0&&!(n.mode&1)&&($a=xt()+500,Tf&&So()))}function Pn(r,n){var o=r.callbackNode;ZB(r,n);var l=qh(r,r===Yt?tn:0);if(l===0)o!==null&&k1(o),r.callbackNode=null,r.callbackPriority=0;else if(n=l&-l,r.callbackPriority!==n){if(o!=null&&k1(o),n===1)r.tag===0?YP(lx.bind(null,r)):SE(lx.bind(null,r)),HP(function(){!($e&6)&&So()}),o=null;else{switch(iE(l)){case 1:o=D0;break;case 4:o=eE;break;case 16:o=Wh;break;case 536870912:o=tE;break;default:o=Wh}o=D5(o,_5.bind(null,r))}r.callbackPriority=n,r.callbackNode=o}}function _5(r,n){if(zh=-1,jh=0,$e&6)throw Error(le(327));var o=r.callbackNode;if(Pa()&&r.callbackNode!==o)return null;var l=qh(r,r===Yt?tn:0);if(l===0)return null;if(l&30||l&r.expiredLanes||n)n=uf(r,l);else{n=l;var u=$e;$e|=2;var f=y5();(Yt!==r||tn!==n)&&(_r=null,$a=xt()+500,ps(r,n));do try{pL();break}catch(k){v5(r,k)}while(1);F0(),cf.current=f,$e=u,Ot!==null?n=0:(Yt=null,tn=0,n=zt)}if(n!==0){if(n===2&&(u=_k(r),u!==0&&(l=u,n=Yk(r,u))),n===1)throw o=od,ps(r,0),co(r,l),Pn(r,xt()),o;if(n===6)co(r,l);else{if(u=r.current.alternate,!(l&30)&&!fL(u)&&(n=uf(r,l),n===2&&(f=_k(r),f!==0&&(l=f,n=Yk(r,f))),n===1))throw o=od,ps(r,0),co(r,l),Pn(r,xt()),o;switch(r.finishedWork=u,r.finishedLanes=l,n){case 0:case 1:throw Error(le(345));case 2:ss(r,Mn,_r);break;case 3:if(co(r,l),(l&130023424)===l&&(n=tb+500-xt(),10<n)){if(qh(r,0)!==0)break;if(u=r.suspendedLanes,(u&l)!==l){vn(),r.pingedLanes|=r.suspendedLanes&u;break}r.timeoutHandle=Sk(ss.bind(null,r,Mn,_r),n);break}ss(r,Mn,_r);break;case 4:if(co(r,l),(l&4194240)===l)break;for(n=r.eventTimes,u=-1;0<l;){var g=31-Oi(l);f=1<<g,g=n[g],g>u&&(u=g),l&=~f}if(l=u,l=xt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*hL(l/1960))-l,10<l){r.timeoutHandle=Sk(ss.bind(null,r,Mn,_r),l);break}ss(r,Mn,_r);break;case 5:ss(r,Mn,_r);break;default:throw Error(le(329))}}}return Pn(r,xt()),r.callbackNode===o?_5.bind(null,r):null}function Yk(r,n){var o=Pl;return r.current.memoizedState.isDehydrated&&(ps(r,n).flags|=256),r=uf(r,n),r!==2&&(n=Mn,Mn=o,n!==null&&Zk(n)),r}function Zk(r){Mn===null?Mn=r:Mn.push.apply(Mn,r)}function fL(r){for(var n=r;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],f=u.getSnapshot;u=u.value;try{if(!Pi(f(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function co(r,n){for(n&=~eb,n&=~Of,r.suspendedLanes|=n,r.pingedLanes&=~n,r=r.expirationTimes;0<n;){var o=31-Oi(n),l=1<<o;r[o]=-1,n&=~l}}function lx(r){if($e&6)throw Error(le(327));Pa();var n=qh(r,0);if(!(n&1))return Pn(r,xt()),null;var o=uf(r,n);if(r.tag!==0&&o===2){var l=_k(r);l!==0&&(n=l,o=Yk(r,l))}if(o===1)throw o=od,ps(r,0),co(r,n),Pn(r,xt()),o;if(o===6)throw Error(le(345));return r.finishedWork=r.current.alternate,r.finishedLanes=n,ss(r,Mn,_r),Pn(r,xt()),null}function nb(r,n){var o=$e;$e|=1;try{return r(n)}finally{$e=o,$e===0&&($a=xt()+500,Tf&&So())}}function ys(r){fo!==null&&fo.tag===0&&!($e&6)&&Pa();var n=$e;$e|=1;var o=hi.transition,l=et;try{if(hi.transition=null,et=1,r)return r()}finally{et=l,hi.transition=o,$e=n,!($e&6)&&So()}}function ib(){Wn=Ta.current,ht(Ta)}function ps(r,n){r.finishedWork=null,r.finishedLanes=0;var o=r.timeoutHandle;if(o!==-1&&(r.timeoutHandle=-1,$P(o)),Ot!==null)for(o=Ot.return;o!==null;){var l=o;switch(z0(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Qh();break;case 3:Va(),ht(On),ht(un),q0();break;case 5:W0(l);break;case 4:Va();break;case 13:ht(pt);break;case 19:ht(pt);break;case 10:V0(l.type._context);break;case 22:case 23:ib()}o=o.return}if(Yt=r,Ot=r=yo(r.current,null),tn=Wn=n,zt=0,od=null,eb=Of=vs=0,Mn=Pl=null,hs!==null){for(n=0;n<hs.length;n++)if(o=hs[n],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,f=o.pending;if(f!==null){var g=f.next;f.next=u,l.next=g}o.pending=l}hs=null}return r}function v5(r,n){do{var o=Ot;try{if(F0(),Bh.current=af,sf){for(var l=mt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}sf=!1}if(_s=0,Gt=Lt=mt=null,Ol=!1,nd=0,X0.current=null,o===null||o.return===null){zt=1,od=n,Ot=null;break}e:{var f=r,g=o.return,k=o,w=n;if(n=tn,k.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var v=w,_=k,A=_.tag;if(!(_.mode&1)&&(A===0||A===11||A===15)){var x=_.alternate;x?(_.updateQueue=x.updateQueue,_.memoizedState=x.memoizedState,_.lanes=x.lanes):(_.updateQueue=null,_.memoizedState=null)}var S=K1(g);if(S!==null){S.flags&=-257,Q1(S,g,k,f,n),S.mode&1&&Z1(f,v,n),n=S,w=v;var N=n.updateQueue;if(N===null){var P=new Set;P.add(w),n.updateQueue=P}else N.add(w);break e}else{if(!(n&1)){Z1(f,v,n),rb();break e}w=Error(le(426))}}else if(ft&&k.mode&1){var R=K1(g);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Q1(R,g,k,f,n),j0(Ua(w,k));break e}}f=w=Ua(w,k),zt!==4&&(zt=2),Pl===null?Pl=[f]:Pl.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var B=r5(f,w,n);U1(f,B);break e;case 1:k=w;var L=f.type,D=f.stateNode;if(!(f.flags&128)&&(typeof L.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(_o===null||!_o.has(D)))){f.flags|=65536,n&=-n,f.lanes|=n;var W=o5(f,k,n);U1(f,W);break e}}f=f.return}while(f!==null)}C5(o)}catch(K){n=K,Ot===o&&o!==null&&(Ot=o=o.return);continue}break}while(1)}function y5(){var r=cf.current;return cf.current=af,r===null?af:r}function rb(){(zt===0||zt===3||zt===2)&&(zt=4),Yt===null||!(vs&268435455)&&!(Of&268435455)||co(Yt,tn)}function uf(r,n){var o=$e;$e|=2;var l=y5();(Yt!==r||tn!==n)&&(_r=null,ps(r,n));do try{gL();break}catch(u){v5(r,u)}while(1);if(F0(),$e=o,cf.current=l,Ot!==null)throw Error(le(261));return Yt=null,tn=0,zt}function gL(){for(;Ot!==null;)A5(Ot)}function pL(){for(;Ot!==null&&!FB();)A5(Ot)}function A5(r){var n=E5(r.alternate,r,Wn);r.memoizedProps=r.pendingProps,n===null?C5(r):Ot=n,X0.current=null}function C5(r){var n=r;do{var o=n.alternate;if(r=n.return,n.flags&32768){if(o=cL(o,n),o!==null){o.flags&=32767,Ot=o;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{zt=6,Ot=null;return}}else if(o=aL(o,n,Wn),o!==null){Ot=o;return}if(n=n.sibling,n!==null){Ot=n;return}Ot=n=r}while(n!==null);zt===0&&(zt=5)}function ss(r,n,o){var l=et,u=hi.transition;try{hi.transition=null,et=1,mL(r,n,o,l)}finally{hi.transition=u,et=l}return null}function mL(r,n,o,l){do Pa();while(fo!==null);if($e&6)throw Error(le(327));o=r.finishedWork;var u=r.finishedLanes;if(o===null)return null;if(r.finishedWork=null,r.finishedLanes=0,o===r.current)throw Error(le(177));r.callbackNode=null,r.callbackPriority=0;var f=o.lanes|o.childLanes;if(KB(r,f),r===Yt&&(Ot=Yt=null,tn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ph||(ph=!0,D5(Wh,function(){return Pa(),null})),f=(o.flags&15990)!==0,o.subtreeFlags&15990||f){f=hi.transition,hi.transition=null;var g=et;et=1;var k=$e;$e|=4,X0.current=null,dL(r,o),b5(o,r),LP(Ek),Gh=!!xk,Ek=xk=null,r.current=o,uL(o),VB(),$e=k,et=g,hi.transition=f}else r.current=o;if(ph&&(ph=!1,fo=r,df=u),f=r.pendingLanes,f===0&&(_o=null),HB(o.stateNode),Pn(r,xt()),n!==null)for(l=r.onRecoverableError,o=0;o<n.length;o++)u=n[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(lf)throw lf=!1,r=qk,qk=null,r;return df&1&&r.tag!==0&&Pa(),f=r.pendingLanes,f&1?r===Gk?Ll++:(Ll=0,Gk=r):Ll=0,So(),null}function Pa(){if(fo!==null){var r=iE(df),n=hi.transition,o=et;try{if(hi.transition=null,et=16>r?16:r,fo===null)var l=!1;else{if(r=fo,fo=null,df=0,$e&6)throw Error(le(331));var u=$e;for($e|=4,_e=r.current;_e!==null;){var f=_e,g=f.child;if(_e.flags&16){var k=f.deletions;if(k!==null){for(var w=0;w<k.length;w++){var v=k[w];for(_e=v;_e!==null;){var _=_e;switch(_.tag){case 0:case 11:case 15:Bl(8,_,f)}var A=_.child;if(A!==null)A.return=_,_e=A;else for(;_e!==null;){_=_e;var x=_.sibling,S=_.return;if(p5(_),_===v){_e=null;break}if(x!==null){x.return=S,_e=x;break}_e=S}}}var N=f.alternate;if(N!==null){var P=N.child;if(P!==null){N.child=null;do{var R=P.sibling;P.sibling=null,P=R}while(P!==null)}}_e=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,_e=g;else e:for(;_e!==null;){if(f=_e,f.flags&2048)switch(f.tag){case 0:case 11:case 15:Bl(9,f,f.return)}var B=f.sibling;if(B!==null){B.return=f.return,_e=B;break e}_e=f.return}}var L=r.current;for(_e=L;_e!==null;){g=_e;var D=g.child;if(g.subtreeFlags&2064&&D!==null)D.return=g,_e=D;else e:for(g=L;_e!==null;){if(k=_e,k.flags&2048)try{switch(k.tag){case 0:case 11:case 15:Nf(9,k)}}catch(K){yt(k,k.return,K)}if(k===g){_e=null;break e}var W=k.sibling;if(W!==null){W.return=k.return,_e=W;break e}_e=k.return}}if($e=u,So(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(Cf,r)}catch{}l=!0}return l}finally{et=o,hi.transition=n}}return!1}function dx(r,n,o){n=Ua(o,n),n=r5(r,n,1),r=wo(r,n,1),n=vn(),r!==null&&(dd(r,1,n),Pn(r,n))}function yt(r,n,o){if(r.tag===3)dx(r,r,o);else for(;n!==null;){if(n.tag===3){dx(n,r,o);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_o===null||!_o.has(l))){r=Ua(o,r),r=o5(n,r,1),n=wo(n,r,1),r=vn(),n!==null&&(dd(n,1,r),Pn(n,r));break}}n=n.return}}function kL(r,n,o){var l=r.pingCache;l!==null&&l.delete(n),n=vn(),r.pingedLanes|=r.suspendedLanes&o,Yt===r&&(tn&o)===o&&(zt===4||zt===3&&(tn&130023424)===tn&&500>xt()-tb?ps(r,0):eb|=o),Pn(r,n)}function x5(r,n){n===0&&(r.mode&1?(n=oh,oh<<=1,!(oh&130023424)&&(oh=4194304)):n=1);var o=vn();r=Sr(r,n),r!==null&&(dd(r,n,o),Pn(r,o))}function bL(r){var n=r.memoizedState,o=0;n!==null&&(o=n.retryLane),x5(r,o)}function wL(r,n){var o=0;switch(r.tag){case 13:var l=r.stateNode,u=r.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=r.stateNode;break;default:throw Error(le(314))}l!==null&&l.delete(n),x5(r,o)}var E5;E5=function(r,n,o){if(r!==null)if(r.memoizedProps!==n.pendingProps||On.current)Nn=!0;else{if(!(r.lanes&o)&&!(n.flags&128))return Nn=!1,sL(r,n,o);Nn=!!(r.flags&131072)}else Nn=!1,ft&&n.flags&1048576&&TE(n,ef,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Lh(r,n),r=n.pendingProps;var u=ja(n,un.current);Ba(n,o),u=Y0(null,n,l,r,u,o);var f=Z0();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Bn(l)?(f=!0,Jh(n)):f=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,$0(n),u.updater=If,n.stateNode=u,u._reactInternals=n,Pk(n,l,r,o),n=jk(null,n,l,!0,f,o)):(n.tag=0,ft&&f&&L0(n),wn(null,n,u,o),n=n.child),n;case 16:l=n.elementType;e:{switch(Lh(r,n),r=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=vL(l),r=Di(l,r),u){case 0:n=zk(null,n,l,r,o);break e;case 1:n=ex(null,n,l,r,o);break e;case 11:n=J1(null,n,l,r,o);break e;case 14:n=X1(null,n,l,Di(l.type,r),o);break e}throw Error(le(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Di(l,u),zk(r,n,l,u,o);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Di(l,u),ex(r,n,l,u,o);case 3:e:{if(l5(n),r===null)throw Error(le(387));l=n.pendingProps,f=n.memoizedState,u=f.element,OE(r,n),rf(n,l,null,o);var g=n.memoizedState;if(l=g.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){u=Ua(Error(le(423)),n),n=tx(r,n,l,o,u);break e}else if(l!==u){u=Ua(Error(le(424)),n),n=tx(r,n,l,o,u);break e}else for(Gn=bo(n.stateNode.containerInfo.firstChild),Yn=n,ft=!0,Ii=null,o=zE(n,null,l,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ra(),l===u){n=Tr(r,n,o);break e}wn(r,n,l,o)}n=n.child}return n;case 5:return jE(n),r===null&&Nk(n),l=n.type,u=n.pendingProps,f=r!==null?r.memoizedProps:null,g=u.children,Dk(l,u)?g=null:f!==null&&Dk(l,f)&&(n.flags|=32),c5(r,n),wn(r,n,g,o),n.child;case 6:return r===null&&Nk(n),null;case 13:return d5(r,n,o);case 4:return H0(n,n.stateNode.containerInfo),l=n.pendingProps,r===null?n.child=Fa(n,null,l,o):wn(r,n,l,o),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Di(l,u),J1(r,n,l,u,o);case 7:return wn(r,n,n.pendingProps,o),n.child;case 8:return wn(r,n,n.pendingProps.children,o),n.child;case 12:return wn(r,n,n.pendingProps.children,o),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,f=n.memoizedProps,g=u.value,ct(tf,l._currentValue),l._currentValue=g,f!==null)if(Pi(f.value,g)){if(f.children===u.children&&!On.current){n=Tr(r,n,o);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var k=f.dependencies;if(k!==null){g=f.child;for(var w=k.firstContext;w!==null;){if(w.context===l){if(f.tag===1){w=xr(-1,o&-o),w.tag=2;var v=f.updateQueue;if(v!==null){v=v.shared;var _=v.pending;_===null?w.next=w:(w.next=_.next,_.next=w),v.pending=w}}f.lanes|=o,w=f.alternate,w!==null&&(w.lanes|=o),Ok(f.return,o,n),k.lanes|=o;break}w=w.next}}else if(f.tag===10)g=f.type===n.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(le(341));g.lanes|=o,k=g.alternate,k!==null&&(k.lanes|=o),Ok(g,o,n),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===n){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}wn(r,n,u.children,o),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,Ba(n,o),u=fi(u),l=l(u),n.flags|=1,wn(r,n,l,o),n.child;case 14:return l=n.type,u=Di(l,n.pendingProps),u=Di(l.type,u),X1(r,n,l,u,o);case 15:return s5(r,n,n.type,n.pendingProps,o);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:Di(l,u),Lh(r,n),n.tag=1,Bn(l)?(r=!0,Jh(n)):r=!1,Ba(n,o),PE(n,l,u),Pk(n,l,u,o),jk(null,n,l,!0,r,o);case 19:return u5(r,n,o);case 22:return a5(r,n,o)}throw Error(le(156,n.tag))};function D5(r,n){return X2(r,n)}function _L(r,n,o,l){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(r,n,o,l){return new _L(r,n,o,l)}function ob(r){return r=r.prototype,!(!r||!r.isReactComponent)}function vL(r){if(typeof r=="function")return ob(r)?1:0;if(r!=null){if(r=r.$$typeof,r===C0)return 11;if(r===x0)return 14}return 2}function yo(r,n){var o=r.alternate;return o===null?(o=di(r.tag,n,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=n,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&14680064,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,n=r.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o}function Rh(r,n,o,l,u,f){var g=2;if(l=r,typeof r=="function")ob(r)&&(g=1);else if(typeof r=="string")g=5;else e:switch(r){case wa:return ms(o.children,u,f,n);case A0:g=8,u|=8;break;case ok:return r=di(12,o,n,u|2),r.elementType=ok,r.lanes=f,r;case sk:return r=di(13,o,n,u),r.elementType=sk,r.lanes=f,r;case ak:return r=di(19,o,n,u),r.elementType=ak,r.lanes=f,r;case L2:return Bf(o,u,f,n);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case B2:g=10;break e;case P2:g=9;break e;case C0:g=11;break e;case x0:g=14;break e;case io:g=16,l=null;break e}throw Error(le(130,r==null?r:typeof r,""))}return n=di(g,o,n,u),n.elementType=r,n.type=l,n.lanes=f,n}function ms(r,n,o,l){return r=di(7,r,l,n),r.lanes=o,r}function Bf(r,n,o,l){return r=di(22,r,l,n),r.elementType=L2,r.lanes=o,r.stateNode={isHidden:!1},r}function Fm(r,n,o){return r=di(6,r,null,n),r.lanes=o,r}function Vm(r,n,o){return n=di(4,r.children!==null?r.children:[],r.key,n),n.lanes=o,n.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},n}function yL(r,n,o,l,u){this.tag=n,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vm(0),this.expirationTimes=vm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vm(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function sb(r,n,o,l,u,f,g,k,w){return r=new yL(r,n,o,k,w),n===1?(n=1,f===!0&&(n|=8)):n=0,f=di(3,null,null,n),r.current=f,f.stateNode=r,f.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},$0(f),r}function AL(r,n,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ba,key:l==null?null:""+l,children:r,containerInfo:n,implementation:o}}function S5(r){if(!r)return xo;r=r._reactInternals;e:{if(Cs(r)!==r||r.tag!==1)throw Error(le(170));var n=r;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Bn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(le(171))}if(r.tag===1){var o=r.type;if(Bn(o))return DE(r,o,n)}return n}function T5(r,n,o,l,u,f,g,k,w){return r=sb(o,l,!0,r,u,f,g,k,w),r.context=S5(null),o=r.current,l=vn(),u=vo(o),f=xr(l,u),f.callback=n??null,wo(o,f,u),r.current.lanes=u,dd(r,u,l),Pn(r,l),r}function Pf(r,n,o,l){var u=n.current,f=vn(),g=vo(u);return o=S5(o),n.context===null?n.context=o:n.pendingContext=o,n=xr(f,g),n.payload={element:r},l=l===void 0?null:l,l!==null&&(n.callback=l),r=wo(u,n,g),r!==null&&(Bi(r,u,g,f),Oh(r,u,g)),g}function hf(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ux(r,n){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<n?o:n}}function ab(r,n){ux(r,n),(r=r.alternate)&&ux(r,n)}function CL(){return null}var I5=typeof reportError=="function"?reportError:function(r){console.error(r)};function cb(r){this._internalRoot=r}Lf.prototype.render=cb.prototype.render=function(r){var n=this._internalRoot;if(n===null)throw Error(le(409));Pf(r,n,null,null)};Lf.prototype.unmount=cb.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var n=r.containerInfo;ys(function(){Pf(null,r,null,null)}),n[Dr]=null}};function Lf(r){this._internalRoot=r}Lf.prototype.unstable_scheduleHydration=function(r){if(r){var n=sE();r={blockedOn:null,target:r,priority:n};for(var o=0;o<ao.length&&n!==0&&n<ao[o].priority;o++);ao.splice(o,0,r),o===0&&cE(r)}};function lb(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function hx(){}function xL(r,n,o,l,u){if(u){if(typeof l=="function"){var f=l;l=function(){var v=hf(g);f.call(v)}}var g=T5(n,l,r,0,null,!1,!1,"",hx);return r._reactRootContainer=g,r[Dr]=g.current,Ql(r.nodeType===8?r.parentNode:r),ys(),g}for(;u=r.lastChild;)r.removeChild(u);if(typeof l=="function"){var k=l;l=function(){var v=hf(w);k.call(v)}}var w=sb(r,0,!1,null,null,!1,!1,"",hx);return r._reactRootContainer=w,r[Dr]=w.current,Ql(r.nodeType===8?r.parentNode:r),ys(function(){Pf(n,w,o,l)}),w}function jf(r,n,o,l,u){var f=o._reactRootContainer;if(f){var g=f;if(typeof u=="function"){var k=u;u=function(){var w=hf(g);k.call(w)}}Pf(n,g,r,u)}else g=xL(o,n,r,u,l);return hf(g)}rE=function(r){switch(r.tag){case 3:var n=r.stateNode;if(n.current.memoizedState.isDehydrated){var o=yl(n.pendingLanes);o!==0&&(S0(n,o|1),Pn(n,xt()),!($e&6)&&($a=xt()+500,So()))}break;case 13:ys(function(){var l=Sr(r,1);if(l!==null){var u=vn();Bi(l,r,1,u)}}),ab(r,1)}};T0=function(r){if(r.tag===13){var n=Sr(r,134217728);if(n!==null){var o=vn();Bi(n,r,134217728,o)}ab(r,134217728)}};oE=function(r){if(r.tag===13){var n=vo(r),o=Sr(r,n);if(o!==null){var l=vn();Bi(o,r,n,l)}ab(r,n)}};sE=function(){return et};aE=function(r,n){var o=et;try{return et=r,n()}finally{et=o}};kk=function(r,n,o){switch(n){case"input":if(dk(r,o),n=o.name,o.type==="radio"&&n!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var l=o[n];if(l!==r&&l.form===r.form){var u=Sf(l);if(!u)throw Error(le(90));j2(l),dk(l,u)}}}break;case"textarea":F2(r,o);break;case"select":n=o.value,n!=null&&Ia(r,!!o.multiple,n,!1)}};G2=nb;Y2=ys;var EL={usingClientEntryPoint:!1,Events:[hd,Aa,Sf,W2,q2,nb]},ml={findFiberByHostInstance:us,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},DL={bundleType:ml.bundleType,version:ml.version,rendererPackageName:ml.rendererPackageName,rendererConfig:ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Q2(r),r===null?null:r.stateNode},findFiberByHostInstance:ml.findFiberByHostInstance||CL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mh.isDisabled&&mh.supportsFiber)try{Cf=mh.inject(DL),ir=mh}catch{}}Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EL;Qn.createPortal=function(r,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lb(n))throw Error(le(200));return AL(r,n,null,o)};Qn.createRoot=function(r,n){if(!lb(r))throw Error(le(299));var o=!1,l="",u=I5;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=sb(r,1,!1,null,null,o,!1,l,u),r[Dr]=n.current,Ql(r.nodeType===8?r.parentNode:r),new cb(n)};Qn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var n=r._reactInternals;if(n===void 0)throw typeof r.render=="function"?Error(le(188)):(r=Object.keys(r).join(","),Error(le(268,r)));return r=Q2(n),r=r===null?null:r.stateNode,r};Qn.flushSync=function(r){return ys(r)};Qn.hydrate=function(r,n,o){if(!zf(n))throw Error(le(200));return jf(null,r,n,!0,o)};Qn.hydrateRoot=function(r,n,o){if(!lb(r))throw Error(le(405));var l=o!=null&&o.hydratedSources||null,u=!1,f="",g=I5;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),n=T5(n,null,r,1,o??null,u,!1,f,g),r[Dr]=n.current,Ql(r),l)for(r=0;r<l.length;r++)o=l[r],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Lf(n)};Qn.render=function(r,n,o){if(!zf(n))throw Error(le(200));return jf(null,r,n,!1,o)};Qn.unmountComponentAtNode=function(r){if(!zf(r))throw Error(le(40));return r._reactRootContainer?(ys(function(){jf(null,null,r,!1,function(){r._reactRootContainer=null,r[Dr]=null})}),!0):!1};Qn.unstable_batchedUpdates=nb;Qn.unstable_renderSubtreeIntoContainer=function(r,n,o,l){if(!zf(o))throw Error(le(200));if(r==null||r._reactInternals===void 0)throw Error(le(38));return jf(r,n,o,!1,l)};Qn.version="18.2.0-next-9e3b772b8-20220608";function M5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M5)}catch(r){console.error(r)}}M5(),T2.exports=Qn;var SL=T2.exports,fx=SL;ik.createRoot=fx.createRoot,ik.hydrateRoot=fx.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sd(){return sd=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},sd.apply(this,arguments)}var go;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(go||(go={}));const gx="popstate";function TL(r){r===void 0&&(r={});function n(l,u){let{pathname:f,search:g,hash:k}=l.location;return Kk("",{pathname:f,search:g,hash:k},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(l,u){return typeof u=="string"?u:ff(u)}return ML(n,o,null,r)}function Et(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function db(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function IL(){return Math.random().toString(36).substr(2,8)}function px(r,n){return{usr:r.state,key:r.key,idx:n}}function Kk(r,n,o,l){return o===void 0&&(o=null),sd({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof n=="string"?Ya(n):n,{state:o,key:n&&n.key||l||IL()})}function ff(r){let{pathname:n="/",search:o="",hash:l=""}=r;return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Ya(r){let n={};if(r){let o=r.indexOf("#");o>=0&&(n.hash=r.substr(o),r=r.substr(0,o));let l=r.indexOf("?");l>=0&&(n.search=r.substr(l),r=r.substr(0,l)),r&&(n.pathname=r)}return n}function ML(r,n,o,l){l===void 0&&(l={});let{window:u=document.defaultView,v5Compat:f=!1}=l,g=u.history,k=go.Pop,w=null,v=_();v==null&&(v=0,g.replaceState(sd({},g.state,{idx:v}),""));function _(){return(g.state||{idx:null}).idx}function A(){k=go.Pop;let R=_(),B=R==null?null:R-v;v=R,w&&w({action:k,location:P.location,delta:B})}function x(R,B){k=go.Push;let L=Kk(P.location,R,B);o&&o(L,R),v=_()+1;let D=px(L,v),W=P.createHref(L);try{g.pushState(D,"",W)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;u.location.assign(W)}f&&w&&w({action:k,location:P.location,delta:1})}function S(R,B){k=go.Replace;let L=Kk(P.location,R,B);o&&o(L,R),v=_();let D=px(L,v),W=P.createHref(L);g.replaceState(D,"",W),f&&w&&w({action:k,location:P.location,delta:0})}function N(R){let B=u.location.origin!=="null"?u.location.origin:u.location.href,L=typeof R=="string"?R:ff(R);return Et(B,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,B)}let P={get action(){return k},get location(){return r(u,g)},listen(R){if(w)throw new Error("A history only accepts one active listener");return u.addEventListener(gx,A),w=R,()=>{u.removeEventListener(gx,A),w=null}},createHref(R){return n(u,R)},createURL:N,encodeLocation(R){let B=N(R);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:x,replace:S,go(R){return g.go(R)}};return P}var mx;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(mx||(mx={}));function NL(r,n,o){o===void 0&&(o="/");let l=typeof n=="string"?Ya(n):n,u=ub(l.pathname||"/",o);if(u==null)return null;let f=N5(r);OL(f);let g=null;for(let k=0;g==null&&k<f.length;++k)g=UL(f[k],WL(u));return g}function N5(r,n,o,l){n===void 0&&(n=[]),o===void 0&&(o=[]),l===void 0&&(l="");let u=(f,g,k)=>{let w={relativePath:k===void 0?f.path||"":k,caseSensitive:f.caseSensitive===!0,childrenIndex:g,route:f};w.relativePath.startsWith("/")&&(Et(w.relativePath.startsWith(l),'Absolute route path "'+w.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),w.relativePath=w.relativePath.slice(l.length));let v=Ao([l,w.relativePath]),_=o.concat(w);f.children&&f.children.length>0&&(Et(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),N5(f.children,n,_,v)),!(f.path==null&&!f.index)&&n.push({path:v,score:FL(v,f.index),routesMeta:_})};return r.forEach((f,g)=>{var k;if(f.path===""||!((k=f.path)!=null&&k.includes("?")))u(f,g);else for(let w of O5(f.path))u(f,g,w)}),n}function O5(r){let n=r.split("/");if(n.length===0)return[];let[o,...l]=n,u=o.endsWith("?"),f=o.replace(/\?$/,"");if(l.length===0)return u?[f,""]:[f];let g=O5(l.join("/")),k=[];return k.push(...g.map(w=>w===""?f:[f,w].join("/"))),u&&k.push(...g),k.map(w=>r.startsWith("/")&&w===""?"/":w)}function OL(r){r.sort((n,o)=>n.score!==o.score?o.score-n.score:VL(n.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}const BL=/^:\w+$/,PL=3,LL=2,zL=1,jL=10,RL=-2,kx=r=>r==="*";function FL(r,n){let o=r.split("/"),l=o.length;return o.some(kx)&&(l+=RL),n&&(l+=LL),o.filter(u=>!kx(u)).reduce((u,f)=>u+(BL.test(f)?PL:f===""?zL:jL),l)}function VL(r,n){return r.length===n.length&&r.slice(0,-1).every((l,u)=>l===n[u])?r[r.length-1]-n[n.length-1]:0}function UL(r,n){let{routesMeta:o}=r,l={},u="/",f=[];for(let g=0;g<o.length;++g){let k=o[g],w=g===o.length-1,v=u==="/"?n:n.slice(u.length)||"/",_=$L({path:k.relativePath,caseSensitive:k.caseSensitive,end:w},v);if(!_)return null;Object.assign(l,_.params);let A=k.route;f.push({params:l,pathname:Ao([u,_.pathname]),pathnameBase:ZL(Ao([u,_.pathnameBase])),route:A}),_.pathnameBase!=="/"&&(u=Ao([u,_.pathnameBase]))}return f}function $L(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[o,l]=HL(r.path,r.caseSensitive,r.end),u=n.match(o);if(!u)return null;let f=u[0],g=f.replace(/(.)\/+$/,"$1"),k=u.slice(1);return{params:l.reduce((v,_,A)=>{let{paramName:x,isOptional:S}=_;if(x==="*"){let P=k[A]||"";g=f.slice(0,f.length-P.length).replace(/(.)\/+$/,"$1")}const N=k[A];return S&&!N?v[x]=void 0:v[x]=qL(N||"",x),v},{}),pathname:f,pathnameBase:g,pattern:r}}function HL(r,n,o){n===void 0&&(n=!1),o===void 0&&(o=!0),db(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let l=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(g,k,w)=>(l.push({paramName:k,isOptional:w!=null}),w?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(l.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,n?void 0:"i"),l]}function WL(r){try{return decodeURI(r)}catch(n){return db(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),r}}function qL(r,n){try{return decodeURIComponent(r)}catch(o){return db(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+r+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+o+").")),r}}function ub(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,l=r.charAt(o);return l&&l!=="/"?null:r.slice(o)||"/"}function GL(r,n){n===void 0&&(n="/");let{pathname:o,search:l="",hash:u=""}=typeof r=="string"?Ya(r):r;return{pathname:o?o.startsWith("/")?o:YL(o,n):n,search:KL(l),hash:QL(u)}}function YL(r,n){let o=n.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function Um(r,n,o,l){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hb(r){return r.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function fb(r,n,o,l){l===void 0&&(l=!1);let u;typeof r=="string"?u=Ya(r):(u=sd({},r),Et(!u.pathname||!u.pathname.includes("?"),Um("?","pathname","search",u)),Et(!u.pathname||!u.pathname.includes("#"),Um("#","pathname","hash",u)),Et(!u.search||!u.search.includes("#"),Um("#","search","hash",u)));let f=r===""||u.pathname==="",g=f?"/":u.pathname,k;if(l||g==null)k=o;else{let A=n.length-1;if(g.startsWith("..")){let x=g.split("/");for(;x[0]==="..";)x.shift(),A-=1;u.pathname=x.join("/")}k=A>=0?n[A]:"/"}let w=GL(u,k),v=g&&g!=="/"&&g.endsWith("/"),_=(f||g===".")&&o.endsWith("/");return!w.pathname.endsWith("/")&&(v||_)&&(w.pathname+="/"),w}const Ao=r=>r.join("/").replace(/\/\/+/g,"/"),ZL=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),KL=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,QL=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function JL(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const B5=["post","put","patch","delete"];new Set(B5);const XL=["get",...B5];new Set(XL);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gf(){return gf=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},gf.apply(this,arguments)}const gb=de.createContext(null),e6=de.createContext(null),Za=de.createContext(null),Rf=de.createContext(null),Or=de.createContext({outlet:null,matches:[],isDataRoute:!1}),P5=de.createContext(null);function t6(r,n){let{relative:o}=n===void 0?{}:n;Ka()||Et(!1);let{basename:l,navigator:u}=de.useContext(Za),{hash:f,pathname:g,search:k}=z5(r,{relative:o}),w=g;return l!=="/"&&(w=g==="/"?l:Ao([l,g])),u.createHref({pathname:w,search:k,hash:f})}function Ka(){return de.useContext(Rf)!=null}function Qa(){return Ka()||Et(!1),de.useContext(Rf).location}function L5(r){de.useContext(Za).static||de.useLayoutEffect(r)}function Br(){let{isDataRoute:r}=de.useContext(Or);return r?g6():n6()}function n6(){Ka()||Et(!1);let r=de.useContext(gb),{basename:n,navigator:o}=de.useContext(Za),{matches:l}=de.useContext(Or),{pathname:u}=Qa(),f=JSON.stringify(hb(l).map(w=>w.pathnameBase)),g=de.useRef(!1);return L5(()=>{g.current=!0}),de.useCallback(function(w,v){if(v===void 0&&(v={}),!g.current)return;if(typeof w=="number"){o.go(w);return}let _=fb(w,JSON.parse(f),u,v.relative==="path");r==null&&n!=="/"&&(_.pathname=_.pathname==="/"?n:Ao([n,_.pathname])),(v.replace?o.replace:o.push)(_,v.state,v)},[n,o,f,u,r])}function pb(){let{matches:r}=de.useContext(Or),n=r[r.length-1];return n?n.params:{}}function z5(r,n){let{relative:o}=n===void 0?{}:n,{matches:l}=de.useContext(Or),{pathname:u}=Qa(),f=JSON.stringify(hb(l).map(g=>g.pathnameBase));return de.useMemo(()=>fb(r,JSON.parse(f),u,o==="path"),[r,f,u,o])}function i6(r,n){return r6(r,n)}function r6(r,n,o){Ka()||Et(!1);let{navigator:l}=de.useContext(Za),{matches:u}=de.useContext(Or),f=u[u.length-1],g=f?f.params:{};f&&f.pathname;let k=f?f.pathnameBase:"/";f&&f.route;let w=Qa(),v;if(n){var _;let P=typeof n=="string"?Ya(n):n;k==="/"||(_=P.pathname)!=null&&_.startsWith(k)||Et(!1),v=P}else v=w;let A=v.pathname||"/",x=k==="/"?A:A.slice(k.length)||"/",S=NL(r,{pathname:x}),N=l6(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},g,P.params),pathname:Ao([k,l.encodeLocation?l.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?k:Ao([k,l.encodeLocation?l.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),u,o);return n&&N?de.createElement(Rf.Provider,{value:{location:gf({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:go.Pop}},N):N}function o6(){let r=f6(),n=JL(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),o=r instanceof Error?r.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},f=null;return de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},n),o?de.createElement("pre",{style:u},o):null,f)}const s6=de.createElement(o6,null);class a6 extends de.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error?de.createElement(Or.Provider,{value:this.props.routeContext},de.createElement(P5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function c6(r){let{routeContext:n,match:o,children:l}=r,u=de.useContext(gb);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),de.createElement(Or.Provider,{value:n},l)}function l6(r,n,o){var l;if(n===void 0&&(n=[]),o===void 0&&(o=null),r==null){var u;if((u=o)!=null&&u.errors)r=o.matches;else return null}let f=r,g=(l=o)==null?void 0:l.errors;if(g!=null){let k=f.findIndex(w=>w.route.id&&(g==null?void 0:g[w.route.id]));k>=0||Et(!1),f=f.slice(0,Math.min(f.length,k+1))}return f.reduceRight((k,w,v)=>{let _=w.route.id?g==null?void 0:g[w.route.id]:null,A=null;o&&(A=w.route.errorElement||s6);let x=n.concat(f.slice(0,v+1)),S=()=>{let N;return _?N=A:w.route.Component?N=de.createElement(w.route.Component,null):w.route.element?N=w.route.element:N=k,de.createElement(c6,{match:w,routeContext:{outlet:k,matches:x,isDataRoute:o!=null},children:N})};return o&&(w.route.ErrorBoundary||w.route.errorElement||v===0)?de.createElement(a6,{location:o.location,revalidation:o.revalidation,component:A,error:_,children:S(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):S()},null)}var j5=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(j5||{}),pf=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(pf||{});function d6(r){let n=de.useContext(gb);return n||Et(!1),n}function u6(r){let n=de.useContext(e6);return n||Et(!1),n}function h6(r){let n=de.useContext(Or);return n||Et(!1),n}function R5(r){let n=h6(),o=n.matches[n.matches.length-1];return o.route.id||Et(!1),o.route.id}function f6(){var r;let n=de.useContext(P5),o=u6(pf.UseRouteError),l=R5(pf.UseRouteError);return n||((r=o.errors)==null?void 0:r[l])}function g6(){let{router:r}=d6(j5.UseNavigateStable),n=R5(pf.UseNavigateStable),o=de.useRef(!1);return L5(()=>{o.current=!0}),de.useCallback(function(u,f){f===void 0&&(f={}),o.current&&(typeof u=="number"?r.navigate(u):r.navigate(u,gf({fromRouteId:n},f)))},[r,n])}function p6(r){let{to:n,replace:o,state:l,relative:u}=r;Ka()||Et(!1);let{matches:f}=de.useContext(Or),{pathname:g}=Qa(),k=Br(),w=fb(n,hb(f).map(_=>_.pathnameBase),g,u==="path"),v=JSON.stringify(w);return de.useEffect(()=>k(JSON.parse(v),{replace:o,state:l,relative:u}),[k,v,u,o,l]),null}function Ei(r){Et(!1)}function m6(r){let{basename:n="/",children:o=null,location:l,navigationType:u=go.Pop,navigator:f,static:g=!1}=r;Ka()&&Et(!1);let k=n.replace(/^\/*/,"/"),w=de.useMemo(()=>({basename:k,navigator:f,static:g}),[k,f,g]);typeof l=="string"&&(l=Ya(l));let{pathname:v="/",search:_="",hash:A="",state:x=null,key:S="default"}=l,N=de.useMemo(()=>{let P=ub(v,k);return P==null?null:{location:{pathname:P,search:_,hash:A,state:x,key:S},navigationType:u}},[k,v,_,A,x,S,u]);return N==null?null:de.createElement(Za.Provider,{value:w},de.createElement(Rf.Provider,{children:o,value:N}))}function k6(r){let{children:n,location:o}=r;return i6(Qk(n),o)}new Promise(()=>{});function Qk(r,n){n===void 0&&(n=[]);let o=[];return de.Children.forEach(r,(l,u)=>{if(!de.isValidElement(l))return;let f=[...n,u];if(l.type===de.Fragment){o.push.apply(o,Qk(l.props.children,f));return}l.type!==Ei&&Et(!1),!l.props.index||!l.props.children||Et(!1);let g={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(g.children=Qk(l.props.children,f)),o.push(g)}),o}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jk(){return Jk=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r},Jk.apply(this,arguments)}function b6(r,n){if(r==null)return{};var o={},l=Object.keys(r),u,f;for(f=0;f<l.length;f++)u=l[f],!(n.indexOf(u)>=0)&&(o[u]=r[u]);return o}function w6(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function _6(r,n){return r.button===0&&(!n||n==="_self")&&!w6(r)}const v6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],y6="startTransition",bx=bB[y6];function A6(r){let{basename:n,children:o,future:l,window:u}=r,f=de.useRef();f.current==null&&(f.current=TL({window:u,v5Compat:!0}));let g=f.current,[k,w]=de.useState({action:g.action,location:g.location}),{v7_startTransition:v}=l||{},_=de.useCallback(A=>{v&&bx?bx(()=>w(A)):w(A)},[w,v]);return de.useLayoutEffect(()=>g.listen(_),[g,_]),de.createElement(m6,{basename:n,children:o,location:k.location,navigationType:k.action,navigator:g})}const C6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",x6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mi=de.forwardRef(function(n,o){let{onClick:l,relative:u,reloadDocument:f,replace:g,state:k,target:w,to:v,preventScrollReset:_,unstable_viewTransition:A}=n,x=b6(n,v6),{basename:S}=de.useContext(Za),N,P=!1;if(typeof v=="string"&&x6.test(v)&&(N=v,C6))try{let D=new URL(window.location.href),W=v.startsWith("//")?new URL(D.protocol+v):new URL(v),K=ub(W.pathname,S);W.origin===D.origin&&K!=null?v=K+W.search+W.hash:P=!0}catch{}let R=t6(v,{relative:u}),B=E6(v,{replace:g,state:k,target:w,preventScrollReset:_,relative:u,unstable_viewTransition:A});function L(D){l&&l(D),D.defaultPrevented||B(D)}return de.createElement("a",Jk({},x,{href:N||R,onClick:P||f?l:L,ref:o,target:w}))});var wx;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(wx||(wx={}));var _x;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(_x||(_x={}));function E6(r,n){let{target:o,replace:l,state:u,preventScrollReset:f,relative:g,unstable_viewTransition:k}=n===void 0?{}:n,w=Br(),v=Qa(),_=z5(r,{relative:g});return de.useCallback(A=>{if(_6(A,o)){A.preventDefault();let x=l!==void 0?l:ff(v)===ff(_);w(r,{replace:x,state:u,preventScrollReset:f,relative:g,unstable_viewTransition:k})}},[v,w,_,l,u,o,r,f,g,k])}function Ir(r){return Array.isArray?Array.isArray(r):U5(r)==="[object Array]"}const D6=1/0;function S6(r){if(typeof r=="string")return r;let n=r+"";return n=="0"&&1/r==-D6?"-0":n}function T6(r){return r==null?"":S6(r)}function nr(r){return typeof r=="string"}function F5(r){return typeof r=="number"}function I6(r){return r===!0||r===!1||M6(r)&&U5(r)=="[object Boolean]"}function V5(r){return typeof r=="object"}function M6(r){return V5(r)&&r!==null}function qn(r){return r!=null}function $m(r){return!r.trim().length}function U5(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}const N6="Incorrect 'index' type",O6=r=>`Invalid value for key ${r}`,B6=r=>`Pattern length exceeds max of ${r}.`,P6=r=>`Missing ${r} property in key`,L6=r=>`Property 'weight' in key '${r}' must be a positive integer`,vx=Object.prototype.hasOwnProperty;class z6{constructor(n){this._keys=[],this._keyMap={};let o=0;n.forEach(l=>{let u=$5(l);this._keys.push(u),this._keyMap[u.id]=u,o+=u.weight}),this._keys.forEach(l=>{l.weight/=o})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function $5(r){let n=null,o=null,l=null,u=1,f=null;if(nr(r)||Ir(r))l=r,n=yx(r),o=Xk(r);else{if(!vx.call(r,"name"))throw new Error(P6("name"));const g=r.name;if(l=g,vx.call(r,"weight")&&(u=r.weight,u<=0))throw new Error(L6(g));n=yx(g),o=Xk(g),f=r.getFn}return{path:n,id:o,weight:u,src:l,getFn:f}}function yx(r){return Ir(r)?r:r.split(".")}function Xk(r){return Ir(r)?r.join("."):r}function j6(r,n){let o=[],l=!1;const u=(f,g,k)=>{if(qn(f))if(!g[k])o.push(f);else{let w=g[k];const v=f[w];if(!qn(v))return;if(k===g.length-1&&(nr(v)||F5(v)||I6(v)))o.push(T6(v));else if(Ir(v)){l=!0;for(let _=0,A=v.length;_<A;_+=1)u(v[_],g,k+1)}else g.length&&u(v,g,k+1)}};return u(r,nr(n)?n.split("."):n,0),l?o:o[0]}const R6={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},F6={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(r,n)=>r.score===n.score?r.idx<n.idx?-1:1:r.score<n.score?-1:1},V6={location:0,threshold:.6,distance:100},U6={useExtendedSearch:!1,getFn:j6,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Se={...F6,...R6,...V6,...U6};const $6=/[^ ]+/g;function H6(r=1,n=3){const o=new Map,l=Math.pow(10,n);return{get(u){const f=u.match($6).length;if(o.has(f))return o.get(f);const g=1/Math.pow(f,.5*r),k=parseFloat(Math.round(g*l)/l);return o.set(f,k),k},clear(){o.clear()}}}class mb{constructor({getFn:n=Se.getFn,fieldNormWeight:o=Se.fieldNormWeight}={}){this.norm=H6(o,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((o,l)=>{this._keysMap[o.id]=l})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,nr(this.docs[0])?this.docs.forEach((n,o)=>{this._addString(n,o)}):this.docs.forEach((n,o)=>{this._addObject(n,o)}),this.norm.clear())}add(n){const o=this.size();nr(n)?this._addString(n,o):this._addObject(n,o)}removeAt(n){this.records.splice(n,1);for(let o=n,l=this.size();o<l;o+=1)this.records[o].i-=1}getValueForItemAtKeyId(n,o){return n[this._keysMap[o]]}size(){return this.records.length}_addString(n,o){if(!qn(n)||$m(n))return;let l={v:n,i:o,n:this.norm.get(n)};this.records.push(l)}_addObject(n,o){let l={i:o,$:{}};this.keys.forEach((u,f)=>{let g=u.getFn?u.getFn(n):this.getFn(n,u.path);if(qn(g)){if(Ir(g)){let k=[];const w=[{nestedArrIndex:-1,value:g}];for(;w.length;){const{nestedArrIndex:v,value:_}=w.pop();if(qn(_))if(nr(_)&&!$m(_)){let A={v:_,i:v,n:this.norm.get(_)};k.push(A)}else Ir(_)&&_.forEach((A,x)=>{w.push({nestedArrIndex:x,value:A})})}l.$[f]=k}else if(nr(g)&&!$m(g)){let k={v:g,n:this.norm.get(g)};l.$[f]=k}}}),this.records.push(l)}toJSON(){return{keys:this.keys,records:this.records}}}function H5(r,n,{getFn:o=Se.getFn,fieldNormWeight:l=Se.fieldNormWeight}={}){const u=new mb({getFn:o,fieldNormWeight:l});return u.setKeys(r.map($5)),u.setSources(n),u.create(),u}function W6(r,{getFn:n=Se.getFn,fieldNormWeight:o=Se.fieldNormWeight}={}){const{keys:l,records:u}=r,f=new mb({getFn:n,fieldNormWeight:o});return f.setKeys(l),f.setIndexRecords(u),f}function kh(r,{errors:n=0,currentLocation:o=0,expectedLocation:l=0,distance:u=Se.distance,ignoreLocation:f=Se.ignoreLocation}={}){const g=n/r.length;if(f)return g;const k=Math.abs(l-o);return u?g+k/u:k?1:g}function q6(r=[],n=Se.minMatchCharLength){let o=[],l=-1,u=-1,f=0;for(let g=r.length;f<g;f+=1){let k=r[f];k&&l===-1?l=f:!k&&l!==-1&&(u=f-1,u-l+1>=n&&o.push([l,u]),l=-1)}return r[f-1]&&f-l>=n&&o.push([l,f-1]),o}const as=32;function G6(r,n,o,{location:l=Se.location,distance:u=Se.distance,threshold:f=Se.threshold,findAllMatches:g=Se.findAllMatches,minMatchCharLength:k=Se.minMatchCharLength,includeMatches:w=Se.includeMatches,ignoreLocation:v=Se.ignoreLocation}={}){if(n.length>as)throw new Error(B6(as));const _=n.length,A=r.length,x=Math.max(0,Math.min(l,A));let S=f,N=x;const P=k>1||w,R=P?Array(A):[];let B;for(;(B=r.indexOf(n,N))>-1;){let X=kh(n,{currentLocation:B,expectedLocation:x,distance:u,ignoreLocation:v});if(S=Math.min(X,S),N=B+_,P){let se=0;for(;se<_;)R[B+se]=1,se+=1}}N=-1;let L=[],D=1,W=_+A;const K=1<<_-1;for(let X=0;X<_;X+=1){let se=0,he=W;for(;se<he;)kh(n,{errors:X,currentLocation:x+he,expectedLocation:x,distance:u,ignoreLocation:v})<=S?se=he:W=he,he=Math.floor((W-se)/2+se);W=he;let be=Math.max(1,x-he+1),G=g?A:Math.min(x+he,A)+_,Y=Array(G+2);Y[G+1]=(1<<X)-1;for(let U=G;U>=be;U-=1){let H=U-1,J=o[r.charAt(H)];if(P&&(R[H]=+!!J),Y[U]=(Y[U+1]<<1|1)&J,X&&(Y[U]|=(L[U+1]|L[U])<<1|1|L[U+1]),Y[U]&K&&(D=kh(n,{errors:X,currentLocation:H,expectedLocation:x,distance:u,ignoreLocation:v}),D<=S)){if(S=D,N=H,N<=x)break;be=Math.max(1,2*x-N)}}if(kh(n,{errors:X+1,currentLocation:x,expectedLocation:x,distance:u,ignoreLocation:v})>S)break;L=Y}const ee={isMatch:N>=0,score:Math.max(.001,D)};if(P){const X=q6(R,k);X.length?w&&(ee.indices=X):ee.isMatch=!1}return ee}function Y6(r){let n={};for(let o=0,l=r.length;o<l;o+=1){const u=r.charAt(o);n[u]=(n[u]||0)|1<<l-o-1}return n}class W5{constructor(n,{location:o=Se.location,threshold:l=Se.threshold,distance:u=Se.distance,includeMatches:f=Se.includeMatches,findAllMatches:g=Se.findAllMatches,minMatchCharLength:k=Se.minMatchCharLength,isCaseSensitive:w=Se.isCaseSensitive,ignoreLocation:v=Se.ignoreLocation}={}){if(this.options={location:o,threshold:l,distance:u,includeMatches:f,findAllMatches:g,minMatchCharLength:k,isCaseSensitive:w,ignoreLocation:v},this.pattern=w?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const _=(x,S)=>{this.chunks.push({pattern:x,alphabet:Y6(x),startIndex:S})},A=this.pattern.length;if(A>as){let x=0;const S=A%as,N=A-S;for(;x<N;)_(this.pattern.substr(x,as),x),x+=as;if(S){const P=A-as;_(this.pattern.substr(P),P)}}else _(this.pattern,0)}searchIn(n){const{isCaseSensitive:o,includeMatches:l}=this.options;if(o||(n=n.toLowerCase()),this.pattern===n){let N={isMatch:!0,score:0};return l&&(N.indices=[[0,n.length-1]]),N}const{location:u,distance:f,threshold:g,findAllMatches:k,minMatchCharLength:w,ignoreLocation:v}=this.options;let _=[],A=0,x=!1;this.chunks.forEach(({pattern:N,alphabet:P,startIndex:R})=>{const{isMatch:B,score:L,indices:D}=G6(n,N,P,{location:u+R,distance:f,threshold:g,findAllMatches:k,minMatchCharLength:w,includeMatches:l,ignoreLocation:v});B&&(x=!0),A+=L,B&&D&&(_=[..._,...D])});let S={isMatch:x,score:x?A/this.chunks.length:1};return x&&l&&(S.indices=_),S}}class To{constructor(n){this.pattern=n}static isMultiMatch(n){return Ax(n,this.multiRegex)}static isSingleMatch(n){return Ax(n,this.singleRegex)}search(){}}function Ax(r,n){const o=r.match(n);return o?o[1]:null}class Z6 extends To{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const o=n===this.pattern;return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class K6 extends To{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const l=n.indexOf(this.pattern)===-1;return{isMatch:l,score:l?0:1,indices:[0,n.length-1]}}}class Q6 extends To{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const o=n.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class J6 extends To{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const o=!n.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class X6 extends To{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const o=n.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class ez extends To{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const o=!n.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class q5 extends To{constructor(n,{location:o=Se.location,threshold:l=Se.threshold,distance:u=Se.distance,includeMatches:f=Se.includeMatches,findAllMatches:g=Se.findAllMatches,minMatchCharLength:k=Se.minMatchCharLength,isCaseSensitive:w=Se.isCaseSensitive,ignoreLocation:v=Se.ignoreLocation}={}){super(n),this._bitapSearch=new W5(n,{location:o,threshold:l,distance:u,includeMatches:f,findAllMatches:g,minMatchCharLength:k,isCaseSensitive:w,ignoreLocation:v})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class G5 extends To{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let o=0,l;const u=[],f=this.pattern.length;for(;(l=n.indexOf(this.pattern,o))>-1;)o=l+f,u.push([l,o-1]);const g=!!u.length;return{isMatch:g,score:g?0:1,indices:u}}}const e0=[Z6,G5,Q6,J6,ez,X6,K6,q5],Cx=e0.length,tz=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,nz="|";function iz(r,n={}){return r.split(nz).map(o=>{let l=o.trim().split(tz).filter(f=>f&&!!f.trim()),u=[];for(let f=0,g=l.length;f<g;f+=1){const k=l[f];let w=!1,v=-1;for(;!w&&++v<Cx;){const _=e0[v];let A=_.isMultiMatch(k);A&&(u.push(new _(A,n)),w=!0)}if(!w)for(v=-1;++v<Cx;){const _=e0[v];let A=_.isSingleMatch(k);if(A){u.push(new _(A,n));break}}}return u})}const rz=new Set([q5.type,G5.type]);class oz{constructor(n,{isCaseSensitive:o=Se.isCaseSensitive,includeMatches:l=Se.includeMatches,minMatchCharLength:u=Se.minMatchCharLength,ignoreLocation:f=Se.ignoreLocation,findAllMatches:g=Se.findAllMatches,location:k=Se.location,threshold:w=Se.threshold,distance:v=Se.distance}={}){this.query=null,this.options={isCaseSensitive:o,includeMatches:l,minMatchCharLength:u,findAllMatches:g,ignoreLocation:f,location:k,threshold:w,distance:v},this.pattern=o?n:n.toLowerCase(),this.query=iz(this.pattern,this.options)}static condition(n,o){return o.useExtendedSearch}searchIn(n){const o=this.query;if(!o)return{isMatch:!1,score:1};const{includeMatches:l,isCaseSensitive:u}=this.options;n=u?n:n.toLowerCase();let f=0,g=[],k=0;for(let w=0,v=o.length;w<v;w+=1){const _=o[w];g.length=0,f=0;for(let A=0,x=_.length;A<x;A+=1){const S=_[A],{isMatch:N,indices:P,score:R}=S.search(n);if(N){if(f+=1,k+=R,l){const B=S.constructor.type;rz.has(B)?g=[...g,...P]:g.push(P)}}else{k=0,f=0,g.length=0;break}}if(f){let A={isMatch:!0,score:k/f};return l&&(A.indices=g),A}}return{isMatch:!1,score:1}}}const t0=[];function sz(...r){t0.push(...r)}function n0(r,n){for(let o=0,l=t0.length;o<l;o+=1){let u=t0[o];if(u.condition(r,n))return new u(r,n)}return new W5(r,n)}const mf={AND:"$and",OR:"$or"},i0={PATH:"$path",PATTERN:"$val"},r0=r=>!!(r[mf.AND]||r[mf.OR]),az=r=>!!r[i0.PATH],cz=r=>!Ir(r)&&V5(r)&&!r0(r),xx=r=>({[mf.AND]:Object.keys(r).map(n=>({[n]:r[n]}))});function Y5(r,n,{auto:o=!0}={}){const l=u=>{let f=Object.keys(u);const g=az(u);if(!g&&f.length>1&&!r0(u))return l(xx(u));if(cz(u)){const w=g?u[i0.PATH]:f[0],v=g?u[i0.PATTERN]:u[w];if(!nr(v))throw new Error(O6(w));const _={keyId:Xk(w),pattern:v};return o&&(_.searcher=n0(v,n)),_}let k={children:[],operator:f[0]};return f.forEach(w=>{const v=u[w];Ir(v)&&v.forEach(_=>{k.children.push(l(_))})}),k};return r0(r)||(r=xx(r)),l(r)}function lz(r,{ignoreFieldNorm:n=Se.ignoreFieldNorm}){r.forEach(o=>{let l=1;o.matches.forEach(({key:u,norm:f,score:g})=>{const k=u?u.weight:null;l*=Math.pow(g===0&&k?Number.EPSILON:g,(k||1)*(n?1:f))}),o.score=l})}function dz(r,n){const o=r.matches;n.matches=[],qn(o)&&o.forEach(l=>{if(!qn(l.indices)||!l.indices.length)return;const{indices:u,value:f}=l;let g={indices:u,value:f};l.key&&(g.key=l.key.src),l.idx>-1&&(g.refIndex=l.idx),n.matches.push(g)})}function uz(r,n){n.score=r.score}function hz(r,n,{includeMatches:o=Se.includeMatches,includeScore:l=Se.includeScore}={}){const u=[];return o&&u.push(dz),l&&u.push(uz),r.map(f=>{const{idx:g}=f,k={item:n[g],refIndex:g};return u.length&&u.forEach(w=>{w(f,k)}),k})}class Ja{constructor(n,o={},l){this.options={...Se,...o},this.options.useExtendedSearch,this._keyStore=new z6(this.options.keys),this.setCollection(n,l)}setCollection(n,o){if(this._docs=n,o&&!(o instanceof mb))throw new Error(N6);this._myIndex=o||H5(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){qn(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const o=[];for(let l=0,u=this._docs.length;l<u;l+=1){const f=this._docs[l];n(f,l)&&(this.removeAt(l),l-=1,u-=1,o.push(f))}return o}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:o=-1}={}){const{includeMatches:l,includeScore:u,shouldSort:f,sortFn:g,ignoreFieldNorm:k}=this.options;let w=nr(n)?nr(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return lz(w,{ignoreFieldNorm:k}),f&&w.sort(g),F5(o)&&o>-1&&(w=w.slice(0,o)),hz(w,this._docs,{includeMatches:l,includeScore:u})}_searchStringList(n){const o=n0(n,this.options),{records:l}=this._myIndex,u=[];return l.forEach(({v:f,i:g,n:k})=>{if(!qn(f))return;const{isMatch:w,score:v,indices:_}=o.searchIn(f);w&&u.push({item:f,idx:g,matches:[{score:v,value:f,norm:k,indices:_}]})}),u}_searchLogical(n){const o=Y5(n,this.options),l=(k,w,v)=>{if(!k.children){const{keyId:A,searcher:x}=k,S=this._findMatches({key:this._keyStore.get(A),value:this._myIndex.getValueForItemAtKeyId(w,A),searcher:x});return S&&S.length?[{idx:v,item:w,matches:S}]:[]}const _=[];for(let A=0,x=k.children.length;A<x;A+=1){const S=k.children[A],N=l(S,w,v);if(N.length)_.push(...N);else if(k.operator===mf.AND)return[]}return _},u=this._myIndex.records,f={},g=[];return u.forEach(({$:k,i:w})=>{if(qn(k)){let v=l(o,k,w);v.length&&(f[w]||(f[w]={idx:w,item:k,matches:[]},g.push(f[w])),v.forEach(({matches:_})=>{f[w].matches.push(..._)}))}}),g}_searchObjectList(n){const o=n0(n,this.options),{keys:l,records:u}=this._myIndex,f=[];return u.forEach(({$:g,i:k})=>{if(!qn(g))return;let w=[];l.forEach((v,_)=>{w.push(...this._findMatches({key:v,value:g[_],searcher:o}))}),w.length&&f.push({idx:k,item:g,matches:w})}),f}_findMatches({key:n,value:o,searcher:l}){if(!qn(o))return[];let u=[];if(Ir(o))o.forEach(({v:f,i:g,n:k})=>{if(!qn(f))return;const{isMatch:w,score:v,indices:_}=l.searchIn(f);w&&u.push({score:v,key:n,value:f,idx:g,norm:k,indices:_})});else{const{v:f,n:g}=o,{isMatch:k,score:w,indices:v}=l.searchIn(f);k&&u.push({score:w,key:n,value:f,norm:g,indices:v})}return u}}Ja.version="7.0.0";Ja.createIndex=H5;Ja.parseIndex=W6;Ja.config=Se;Ja.parseQuery=Y5;sz(oz);const fz=(r,n,o)=>{const u=new Ja(n,{keys:o}).search(r);return r?u.map(g=>g.item):n};class xs extends Error{}class gz extends xs{constructor(n){super(`Invalid DateTime: ${n.toMessage()}`)}}class pz extends xs{constructor(n){super(`Invalid Interval: ${n.toMessage()}`)}}class mz extends xs{constructor(n){super(`Invalid Duration: ${n.toMessage()}`)}}class Cl extends xs{}class Z5 extends xs{constructor(n){super(`Invalid unit ${n}`)}}class li extends xs{}class eo extends xs{constructor(){super("Zone is an abstract class")}}const me="numeric",Li="short",Zn="long",kf={year:me,month:me,day:me},K5={year:me,month:Li,day:me},kz={year:me,month:Li,day:me,weekday:Li},Q5={year:me,month:Zn,day:me},J5={year:me,month:Zn,day:me,weekday:Zn},X5={hour:me,minute:me},eD={hour:me,minute:me,second:me},tD={hour:me,minute:me,second:me,timeZoneName:Li},nD={hour:me,minute:me,second:me,timeZoneName:Zn},iD={hour:me,minute:me,hourCycle:"h23"},rD={hour:me,minute:me,second:me,hourCycle:"h23"},oD={hour:me,minute:me,second:me,hourCycle:"h23",timeZoneName:Li},sD={hour:me,minute:me,second:me,hourCycle:"h23",timeZoneName:Zn},aD={year:me,month:me,day:me,hour:me,minute:me},cD={year:me,month:me,day:me,hour:me,minute:me,second:me},lD={year:me,month:Li,day:me,hour:me,minute:me},dD={year:me,month:Li,day:me,hour:me,minute:me,second:me},bz={year:me,month:Li,day:me,weekday:Li,hour:me,minute:me},uD={year:me,month:Zn,day:me,hour:me,minute:me,timeZoneName:Li},hD={year:me,month:Zn,day:me,hour:me,minute:me,second:me,timeZoneName:Li},fD={year:me,month:Zn,day:me,weekday:Zn,hour:me,minute:me,timeZoneName:Zn},gD={year:me,month:Zn,day:me,weekday:Zn,hour:me,minute:me,second:me,timeZoneName:Zn};class gd{get type(){throw new eo}get name(){throw new eo}get ianaName(){return this.name}get isUniversal(){throw new eo}offsetName(n,o){throw new eo}formatOffset(n,o){throw new eo}offset(n){throw new eo}equals(n){throw new eo}get isValid(){throw new eo}}let Hm=null;class Ff extends gd{static get instance(){return Hm===null&&(Hm=new Ff),Hm}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(n,{format:o,locale:l}){return mD(n,o,l)}formatOffset(n,o){return jl(this.offset(n),o)}offset(n){return-new Date(n).getTimezoneOffset()}equals(n){return n.type==="system"}get isValid(){return!0}}let Fh={};function wz(r){return Fh[r]||(Fh[r]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Fh[r]}const _z={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function vz(r,n){const o=r.format(n).replace(/\u200E/g,""),l=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(o),[,u,f,g,k,w,v,_]=l;return[g,u,f,k,w,v,_]}function yz(r,n){const o=r.formatToParts(n),l=[];for(let u=0;u<o.length;u++){const{type:f,value:g}=o[u],k=_z[f];f==="era"?l[k]=g:je(k)||(l[k]=parseInt(g,10))}return l}let bh={};class Mr extends gd{static create(n){return bh[n]||(bh[n]=new Mr(n)),bh[n]}static resetCache(){bh={},Fh={}}static isValidSpecifier(n){return this.isValidZone(n)}static isValidZone(n){if(!n)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:n}).format(),!0}catch{return!1}}constructor(n){super(),this.zoneName=n,this.valid=Mr.isValidZone(n)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(n,{format:o,locale:l}){return mD(n,o,l,this.name)}formatOffset(n,o){return jl(this.offset(n),o)}offset(n){const o=new Date(n);if(isNaN(o))return NaN;const l=wz(this.name);let[u,f,g,k,w,v,_]=l.formatToParts?yz(l,o):vz(l,o);k==="BC"&&(u=-Math.abs(u)+1);const x=Uf({year:u,month:f,day:g,hour:w===24?0:w,minute:v,second:_,millisecond:0});let S=+o;const N=S%1e3;return S-=N>=0?N:1e3+N,(x-S)/(60*1e3)}equals(n){return n.type==="iana"&&n.name===this.name}get isValid(){return this.valid}}let Ex={};function Az(r,n={}){const o=JSON.stringify([r,n]);let l=Ex[o];return l||(l=new Intl.ListFormat(r,n),Ex[o]=l),l}let o0={};function s0(r,n={}){const o=JSON.stringify([r,n]);let l=o0[o];return l||(l=new Intl.DateTimeFormat(r,n),o0[o]=l),l}let a0={};function Cz(r,n={}){const o=JSON.stringify([r,n]);let l=a0[o];return l||(l=new Intl.NumberFormat(r,n),a0[o]=l),l}let c0={};function xz(r,n={}){const{base:o,...l}=n,u=JSON.stringify([r,l]);let f=c0[u];return f||(f=new Intl.RelativeTimeFormat(r,n),c0[u]=f),f}let xl=null;function Ez(){return xl||(xl=new Intl.DateTimeFormat().resolvedOptions().locale,xl)}function Dz(r){const n=r.indexOf("-x-");n!==-1&&(r=r.substring(0,n));const o=r.indexOf("-u-");if(o===-1)return[r];{let l,u;try{l=s0(r).resolvedOptions(),u=r}catch{const w=r.substring(0,o);l=s0(w).resolvedOptions(),u=w}const{numberingSystem:f,calendar:g}=l;return[u,f,g]}}function Sz(r,n,o){return(o||n)&&(r.includes("-u-")||(r+="-u"),o&&(r+=`-ca-${o}`),n&&(r+=`-nu-${n}`)),r}function Tz(r){const n=[];for(let o=1;o<=12;o++){const l=Ie.utc(2009,o,1);n.push(r(l))}return n}function Iz(r){const n=[];for(let o=1;o<=7;o++){const l=Ie.utc(2016,11,13+o);n.push(r(l))}return n}function wh(r,n,o,l){const u=r.listingMode();return u==="error"?null:u==="en"?o(n):l(n)}function Mz(r){return r.numberingSystem&&r.numberingSystem!=="latn"?!1:r.numberingSystem==="latn"||!r.locale||r.locale.startsWith("en")||new Intl.DateTimeFormat(r.intl).resolvedOptions().numberingSystem==="latn"}class Nz{constructor(n,o,l){this.padTo=l.padTo||0,this.floor=l.floor||!1;const{padTo:u,floor:f,...g}=l;if(!o||Object.keys(g).length>0){const k={useGrouping:!1,...l};l.padTo>0&&(k.minimumIntegerDigits=l.padTo),this.inf=Cz(n,k)}}format(n){if(this.inf){const o=this.floor?Math.floor(n):n;return this.inf.format(o)}else{const o=this.floor?Math.floor(n):bb(n,3);return Nt(o,this.padTo)}}}class Oz{constructor(n,o,l){this.opts=l,this.originalZone=void 0;let u;if(this.opts.timeZone)this.dt=n;else if(n.zone.type==="fixed"){const g=-1*(n.offset/60),k=g>=0?`Etc/GMT+${g}`:`Etc/GMT${g}`;n.offset!==0&&Mr.create(k).valid?(u=k,this.dt=n):(u="UTC",this.dt=n.offset===0?n:n.setZone("UTC").plus({minutes:n.offset}),this.originalZone=n.zone)}else n.zone.type==="system"?this.dt=n:n.zone.type==="iana"?(this.dt=n,u=n.zone.name):(u="UTC",this.dt=n.setZone("UTC").plus({minutes:n.offset}),this.originalZone=n.zone);const f={...this.opts};f.timeZone=f.timeZone||u,this.dtf=s0(o,f)}format(){return this.originalZone?this.formatToParts().map(({value:n})=>n).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const n=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?n.map(o=>{if(o.type==="timeZoneName"){const l=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...o,value:l}}else return o}):n}resolvedOptions(){return this.dtf.resolvedOptions()}}class Bz{constructor(n,o,l){this.opts={style:"long",...l},!o&&pD()&&(this.rtf=xz(n,l))}format(n,o){return this.rtf?this.rtf.format(n,o):Qz(o,n,this.opts.numeric,this.opts.style!=="long")}formatToParts(n,o){return this.rtf?this.rtf.formatToParts(n,o):[]}}class ut{static fromOpts(n){return ut.create(n.locale,n.numberingSystem,n.outputCalendar,n.defaultToEN)}static create(n,o,l,u=!1){const f=n||Mt.defaultLocale,g=f||(u?"en-US":Ez()),k=o||Mt.defaultNumberingSystem,w=l||Mt.defaultOutputCalendar;return new ut(g,k,w,f)}static resetCache(){xl=null,o0={},a0={},c0={}}static fromObject({locale:n,numberingSystem:o,outputCalendar:l}={}){return ut.create(n,o,l)}constructor(n,o,l,u){const[f,g,k]=Dz(n);this.locale=f,this.numberingSystem=o||g||null,this.outputCalendar=l||k||null,this.intl=Sz(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=u,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Mz(this)),this.fastNumbersCached}listingMode(){const n=this.isEnglish(),o=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return n&&o?"en":"intl"}clone(n){return!n||Object.getOwnPropertyNames(n).length===0?this:ut.create(n.locale||this.specifiedLocale,n.numberingSystem||this.numberingSystem,n.outputCalendar||this.outputCalendar,n.defaultToEN||!1)}redefaultToEN(n={}){return this.clone({...n,defaultToEN:!0})}redefaultToSystem(n={}){return this.clone({...n,defaultToEN:!1})}months(n,o=!1){return wh(this,n,wD,()=>{const l=o?{month:n,day:"numeric"}:{month:n},u=o?"format":"standalone";return this.monthsCache[u][n]||(this.monthsCache[u][n]=Tz(f=>this.extract(f,l,"month"))),this.monthsCache[u][n]})}weekdays(n,o=!1){return wh(this,n,yD,()=>{const l=o?{weekday:n,year:"numeric",month:"long",day:"numeric"}:{weekday:n},u=o?"format":"standalone";return this.weekdaysCache[u][n]||(this.weekdaysCache[u][n]=Iz(f=>this.extract(f,l,"weekday"))),this.weekdaysCache[u][n]})}meridiems(){return wh(this,void 0,()=>AD,()=>{if(!this.meridiemCache){const n={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Ie.utc(2016,11,13,9),Ie.utc(2016,11,13,19)].map(o=>this.extract(o,n,"dayperiod"))}return this.meridiemCache})}eras(n){return wh(this,n,CD,()=>{const o={era:n};return this.eraCache[n]||(this.eraCache[n]=[Ie.utc(-40,1,1),Ie.utc(2017,1,1)].map(l=>this.extract(l,o,"era"))),this.eraCache[n]})}extract(n,o,l){const u=this.dtFormatter(n,o),f=u.formatToParts(),g=f.find(k=>k.type.toLowerCase()===l);return g?g.value:null}numberFormatter(n={}){return new Nz(this.intl,n.forceSimple||this.fastNumbers,n)}dtFormatter(n,o={}){return new Oz(n,this.intl,o)}relFormatter(n={}){return new Bz(this.intl,this.isEnglish(),n)}listFormatter(n={}){return Az(this.intl,n)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(n){return this.locale===n.locale&&this.numberingSystem===n.numberingSystem&&this.outputCalendar===n.outputCalendar}}let Wm=null;class _n extends gd{static get utcInstance(){return Wm===null&&(Wm=new _n(0)),Wm}static instance(n){return n===0?_n.utcInstance:new _n(n)}static parseSpecifier(n){if(n){const o=n.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(o)return new _n($f(o[1],o[2]))}return null}constructor(n){super(),this.fixed=n}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${jl(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${jl(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(n,o){return jl(this.fixed,o)}get isUniversal(){return!0}offset(){return this.fixed}equals(n){return n.type==="fixed"&&n.fixed===this.fixed}get isValid(){return!0}}class Pz extends gd{constructor(n){super(),this.zoneName=n}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function lo(r,n){if(je(r)||r===null)return n;if(r instanceof gd)return r;if(Lz(r)){const o=r.toLowerCase();return o==="default"?n:o==="local"||o==="system"?Ff.instance:o==="utc"||o==="gmt"?_n.utcInstance:_n.parseSpecifier(o)||Mr.create(r)}else return ks(r)?_n.instance(r):typeof r=="object"&&"offset"in r&&typeof r.offset=="function"?r:new Pz(r)}let Dx=()=>Date.now(),Sx="system",Tx=null,Ix=null,Mx=null,Nx=60,Ox;class Mt{static get now(){return Dx}static set now(n){Dx=n}static set defaultZone(n){Sx=n}static get defaultZone(){return lo(Sx,Ff.instance)}static get defaultLocale(){return Tx}static set defaultLocale(n){Tx=n}static get defaultNumberingSystem(){return Ix}static set defaultNumberingSystem(n){Ix=n}static get defaultOutputCalendar(){return Mx}static set defaultOutputCalendar(n){Mx=n}static get twoDigitCutoffYear(){return Nx}static set twoDigitCutoffYear(n){Nx=n%100}static get throwOnInvalid(){return Ox}static set throwOnInvalid(n){Ox=n}static resetCaches(){ut.resetCache(),Mr.resetCache()}}function je(r){return typeof r>"u"}function ks(r){return typeof r=="number"}function Vf(r){return typeof r=="number"&&r%1===0}function Lz(r){return typeof r=="string"}function zz(r){return Object.prototype.toString.call(r)==="[object Date]"}function pD(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function jz(r){return Array.isArray(r)?r:[r]}function Bx(r,n,o){if(r.length!==0)return r.reduce((l,u)=>{const f=[n(u),u];return l&&o(l[0],f[0])===l[0]?l:f},null)[1]}function Rz(r,n){return n.reduce((o,l)=>(o[l]=r[l],o),{})}function Ha(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function Cr(r,n,o){return Vf(r)&&r>=n&&r<=o}function Fz(r,n){return r-n*Math.floor(r/n)}function Nt(r,n=2){const o=r<0;let l;return o?l="-"+(""+-r).padStart(n,"0"):l=(""+r).padStart(n,"0"),l}function oo(r){if(!(je(r)||r===null||r===""))return parseInt(r,10)}function ts(r){if(!(je(r)||r===null||r===""))return parseFloat(r)}function kb(r){if(!(je(r)||r===null||r==="")){const n=parseFloat("0."+r)*1e3;return Math.floor(n)}}function bb(r,n,o=!1){const l=10**n;return(o?Math.trunc:Math.round)(r*l)/l}function pd(r){return r%4===0&&(r%100!==0||r%400===0)}function zl(r){return pd(r)?366:365}function bf(r,n){const o=Fz(n-1,12)+1,l=r+(n-o)/12;return o===2?pd(l)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][o-1]}function Uf(r){let n=Date.UTC(r.year,r.month-1,r.day,r.hour,r.minute,r.second,r.millisecond);return r.year<100&&r.year>=0&&(n=new Date(n),n.setUTCFullYear(r.year,r.month-1,r.day)),+n}function wf(r){const n=(r+Math.floor(r/4)-Math.floor(r/100)+Math.floor(r/400))%7,o=r-1,l=(o+Math.floor(o/4)-Math.floor(o/100)+Math.floor(o/400))%7;return n===4||l===3?53:52}function l0(r){return r>99?r:r>Mt.twoDigitCutoffYear?1900+r:2e3+r}function mD(r,n,o,l=null){const u=new Date(r),f={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};l&&(f.timeZone=l);const g={timeZoneName:n,...f},k=new Intl.DateTimeFormat(o,g).formatToParts(u).find(w=>w.type.toLowerCase()==="timezonename");return k?k.value:null}function $f(r,n){let o=parseInt(r,10);Number.isNaN(o)&&(o=0);const l=parseInt(n,10)||0,u=o<0||Object.is(o,-0)?-l:l;return o*60+u}function kD(r){const n=Number(r);if(typeof r=="boolean"||r===""||Number.isNaN(n))throw new li(`Invalid unit value ${r}`);return n}function _f(r,n){const o={};for(const l in r)if(Ha(r,l)){const u=r[l];if(u==null)continue;o[n(l)]=kD(u)}return o}function jl(r,n){const o=Math.trunc(Math.abs(r/60)),l=Math.trunc(Math.abs(r%60)),u=r>=0?"+":"-";switch(n){case"short":return`${u}${Nt(o,2)}:${Nt(l,2)}`;case"narrow":return`${u}${o}${l>0?`:${l}`:""}`;case"techie":return`${u}${Nt(o,2)}${Nt(l,2)}`;default:throw new RangeError(`Value format ${n} is out of range for property format`)}}function Hf(r){return Rz(r,["hour","minute","second","millisecond"])}const Vz=["January","February","March","April","May","June","July","August","September","October","November","December"],bD=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Uz=["J","F","M","A","M","J","J","A","S","O","N","D"];function wD(r){switch(r){case"narrow":return[...Uz];case"short":return[...bD];case"long":return[...Vz];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const _D=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],vD=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],$z=["M","T","W","T","F","S","S"];function yD(r){switch(r){case"narrow":return[...$z];case"short":return[...vD];case"long":return[..._D];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const AD=["AM","PM"],Hz=["Before Christ","Anno Domini"],Wz=["BC","AD"],qz=["B","A"];function CD(r){switch(r){case"narrow":return[...qz];case"short":return[...Wz];case"long":return[...Hz];default:return null}}function Gz(r){return AD[r.hour<12?0:1]}function Yz(r,n){return yD(n)[r.weekday-1]}function Zz(r,n){return wD(n)[r.month-1]}function Kz(r,n){return CD(n)[r.year<0?0:1]}function Qz(r,n,o="always",l=!1){const u={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},f=["hours","minutes","seconds"].indexOf(r)===-1;if(o==="auto"&&f){const A=r==="days";switch(n){case 1:return A?"tomorrow":`next ${u[r][0]}`;case-1:return A?"yesterday":`last ${u[r][0]}`;case 0:return A?"today":`this ${u[r][0]}`}}const g=Object.is(n,-0)||n<0,k=Math.abs(n),w=k===1,v=u[r],_=l?w?v[1]:v[2]||v[1]:w?u[r][0]:r;return g?`${k} ${_} ago`:`in ${k} ${_}`}function Px(r,n){let o="";for(const l of r)l.literal?o+=l.val:o+=n(l.val);return o}const Jz={D:kf,DD:K5,DDD:Q5,DDDD:J5,t:X5,tt:eD,ttt:tD,tttt:nD,T:iD,TT:rD,TTT:oD,TTTT:sD,f:aD,ff:lD,fff:uD,ffff:fD,F:cD,FF:dD,FFF:hD,FFFF:gD};class dn{static create(n,o={}){return new dn(n,o)}static parseFormat(n){let o=null,l="",u=!1;const f=[];for(let g=0;g<n.length;g++){const k=n.charAt(g);k==="'"?(l.length>0&&f.push({literal:u||/^\s+$/.test(l),val:l}),o=null,l="",u=!u):u||k===o?l+=k:(l.length>0&&f.push({literal:/^\s+$/.test(l),val:l}),l=k,o=k)}return l.length>0&&f.push({literal:u||/^\s+$/.test(l),val:l}),f}static macroTokenToFormatOpts(n){return Jz[n]}constructor(n,o){this.opts=o,this.loc=n,this.systemLoc=null}formatWithSystemDefault(n,o){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(n,{...this.opts,...o}).format()}dtFormatter(n,o={}){return this.loc.dtFormatter(n,{...this.opts,...o})}formatDateTime(n,o){return this.dtFormatter(n,o).format()}formatDateTimeParts(n,o){return this.dtFormatter(n,o).formatToParts()}formatInterval(n,o){return this.dtFormatter(n.start,o).dtf.formatRange(n.start.toJSDate(),n.end.toJSDate())}resolvedOptions(n,o){return this.dtFormatter(n,o).resolvedOptions()}num(n,o=0){if(this.opts.forceSimple)return Nt(n,o);const l={...this.opts};return o>0&&(l.padTo=o),this.loc.numberFormatter(l).format(n)}formatDateTimeFromString(n,o){const l=this.loc.listingMode()==="en",u=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",f=(S,N)=>this.loc.extract(n,S,N),g=S=>n.isOffsetFixed&&n.offset===0&&S.allowZ?"Z":n.isValid?n.zone.formatOffset(n.ts,S.format):"",k=()=>l?Gz(n):f({hour:"numeric",hourCycle:"h12"},"dayperiod"),w=(S,N)=>l?Zz(n,S):f(N?{month:S}:{month:S,day:"numeric"},"month"),v=(S,N)=>l?Yz(n,S):f(N?{weekday:S}:{weekday:S,month:"long",day:"numeric"},"weekday"),_=S=>{const N=dn.macroTokenToFormatOpts(S);return N?this.formatWithSystemDefault(n,N):S},A=S=>l?Kz(n,S):f({era:S},"era"),x=S=>{switch(S){case"S":return this.num(n.millisecond);case"u":case"SSS":return this.num(n.millisecond,3);case"s":return this.num(n.second);case"ss":return this.num(n.second,2);case"uu":return this.num(Math.floor(n.millisecond/10),2);case"uuu":return this.num(Math.floor(n.millisecond/100));case"m":return this.num(n.minute);case"mm":return this.num(n.minute,2);case"h":return this.num(n.hour%12===0?12:n.hour%12);case"hh":return this.num(n.hour%12===0?12:n.hour%12,2);case"H":return this.num(n.hour);case"HH":return this.num(n.hour,2);case"Z":return g({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return g({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return g({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return n.zone.offsetName(n.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return n.zone.offsetName(n.ts,{format:"long",locale:this.loc.locale});case"z":return n.zoneName;case"a":return k();case"d":return u?f({day:"numeric"},"day"):this.num(n.day);case"dd":return u?f({day:"2-digit"},"day"):this.num(n.day,2);case"c":return this.num(n.weekday);case"ccc":return v("short",!0);case"cccc":return v("long",!0);case"ccccc":return v("narrow",!0);case"E":return this.num(n.weekday);case"EEE":return v("short",!1);case"EEEE":return v("long",!1);case"EEEEE":return v("narrow",!1);case"L":return u?f({month:"numeric",day:"numeric"},"month"):this.num(n.month);case"LL":return u?f({month:"2-digit",day:"numeric"},"month"):this.num(n.month,2);case"LLL":return w("short",!0);case"LLLL":return w("long",!0);case"LLLLL":return w("narrow",!0);case"M":return u?f({month:"numeric"},"month"):this.num(n.month);case"MM":return u?f({month:"2-digit"},"month"):this.num(n.month,2);case"MMM":return w("short",!1);case"MMMM":return w("long",!1);case"MMMMM":return w("narrow",!1);case"y":return u?f({year:"numeric"},"year"):this.num(n.year);case"yy":return u?f({year:"2-digit"},"year"):this.num(n.year.toString().slice(-2),2);case"yyyy":return u?f({year:"numeric"},"year"):this.num(n.year,4);case"yyyyyy":return u?f({year:"numeric"},"year"):this.num(n.year,6);case"G":return A("short");case"GG":return A("long");case"GGGGG":return A("narrow");case"kk":return this.num(n.weekYear.toString().slice(-2),2);case"kkkk":return this.num(n.weekYear,4);case"W":return this.num(n.weekNumber);case"WW":return this.num(n.weekNumber,2);case"o":return this.num(n.ordinal);case"ooo":return this.num(n.ordinal,3);case"q":return this.num(n.quarter);case"qq":return this.num(n.quarter,2);case"X":return this.num(Math.floor(n.ts/1e3));case"x":return this.num(n.ts);default:return _(S)}};return Px(dn.parseFormat(o),x)}formatDurationFromString(n,o){const l=w=>{switch(w[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},u=w=>v=>{const _=l(v);return _?this.num(w.get(_),v.length):v},f=dn.parseFormat(o),g=f.reduce((w,{literal:v,val:_})=>v?w:w.concat(_),[]),k=n.shiftTo(...g.map(l).filter(w=>w));return Px(f,u(k))}}class Ni{constructor(n,o){this.reason=n,this.explanation=o}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const xD=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Xa(...r){const n=r.reduce((o,l)=>o+l.source,"");return RegExp(`^${n}$`)}function ec(...r){return n=>r.reduce(([o,l,u],f)=>{const[g,k,w]=f(n,u);return[{...o,...g},k||l,w]},[{},null,1]).slice(0,2)}function tc(r,...n){if(r==null)return[null,null];for(const[o,l]of n){const u=o.exec(r);if(u)return l(u)}return[null,null]}function ED(...r){return(n,o)=>{const l={};let u;for(u=0;u<r.length;u++)l[r[u]]=oo(n[o+u]);return[l,null,o+u]}}const DD=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Xz=`(?:${DD.source}?(?:\\[(${xD.source})\\])?)?`,wb=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,SD=RegExp(`${wb.source}${Xz}`),_b=RegExp(`(?:T${SD.source})?`),ej=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,tj=/(\d{4})-?W(\d\d)(?:-?(\d))?/,nj=/(\d{4})-?(\d{3})/,ij=ED("weekYear","weekNumber","weekDay"),rj=ED("year","ordinal"),oj=/(\d{4})-(\d\d)-(\d\d)/,TD=RegExp(`${wb.source} ?(?:${DD.source}|(${xD.source}))?`),sj=RegExp(`(?: ${TD.source})?`);function La(r,n,o){const l=r[n];return je(l)?o:oo(l)}function aj(r,n){return[{year:La(r,n),month:La(r,n+1,1),day:La(r,n+2,1)},null,n+3]}function nc(r,n){return[{hours:La(r,n,0),minutes:La(r,n+1,0),seconds:La(r,n+2,0),milliseconds:kb(r[n+3])},null,n+4]}function md(r,n){const o=!r[n]&&!r[n+1],l=$f(r[n+1],r[n+2]),u=o?null:_n.instance(l);return[{},u,n+3]}function kd(r,n){const o=r[n]?Mr.create(r[n]):null;return[{},o,n+1]}const cj=RegExp(`^T?${wb.source}$`),lj=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function dj(r){const[n,o,l,u,f,g,k,w,v]=r,_=n[0]==="-",A=w&&w[0]==="-",x=(S,N=!1)=>S!==void 0&&(N||S&&_)?-S:S;return[{years:x(ts(o)),months:x(ts(l)),weeks:x(ts(u)),days:x(ts(f)),hours:x(ts(g)),minutes:x(ts(k)),seconds:x(ts(w),w==="-0"),milliseconds:x(kb(v),A)}]}const uj={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vb(r,n,o,l,u,f,g){const k={year:n.length===2?l0(oo(n)):oo(n),month:bD.indexOf(o)+1,day:oo(l),hour:oo(u),minute:oo(f)};return g&&(k.second=oo(g)),r&&(k.weekday=r.length>3?_D.indexOf(r)+1:vD.indexOf(r)+1),k}const hj=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function fj(r){const[,n,o,l,u,f,g,k,w,v,_,A]=r,x=vb(n,u,l,o,f,g,k);let S;return w?S=uj[w]:v?S=0:S=$f(_,A),[x,new _n(S)]}function gj(r){return r.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const pj=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,mj=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,kj=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Lx(r){const[,n,o,l,u,f,g,k]=r;return[vb(n,u,l,o,f,g,k),_n.utcInstance]}function bj(r){const[,n,o,l,u,f,g,k]=r;return[vb(n,k,o,l,u,f,g),_n.utcInstance]}const wj=Xa(ej,_b),_j=Xa(tj,_b),vj=Xa(nj,_b),yj=Xa(SD),ID=ec(aj,nc,md,kd),Aj=ec(ij,nc,md,kd),Cj=ec(rj,nc,md,kd),xj=ec(nc,md,kd);function Ej(r){return tc(r,[wj,ID],[_j,Aj],[vj,Cj],[yj,xj])}function Dj(r){return tc(gj(r),[hj,fj])}function Sj(r){return tc(r,[pj,Lx],[mj,Lx],[kj,bj])}function Tj(r){return tc(r,[lj,dj])}const Ij=ec(nc);function Mj(r){return tc(r,[cj,Ij])}const Nj=Xa(oj,sj),Oj=Xa(TD),Bj=ec(nc,md,kd);function Pj(r){return tc(r,[Nj,ID],[Oj,Bj])}const zx="Invalid Duration",MD={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Lj={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...MD},oi=146097/400,ua=146097/4800,zj={years:{quarters:4,months:12,weeks:oi/7,days:oi,hours:oi*24,minutes:oi*24*60,seconds:oi*24*60*60,milliseconds:oi*24*60*60*1e3},quarters:{months:3,weeks:oi/28,days:oi/4,hours:oi*24/4,minutes:oi*24*60/4,seconds:oi*24*60*60/4,milliseconds:oi*24*60*60*1e3/4},months:{weeks:ua/7,days:ua,hours:ua*24,minutes:ua*24*60,seconds:ua*24*60*60,milliseconds:ua*24*60*60*1e3},...MD},gs=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],jj=gs.slice(0).reverse();function to(r,n,o=!1){const l={values:o?n.values:{...r.values,...n.values||{}},loc:r.loc.clone(n.loc),conversionAccuracy:n.conversionAccuracy||r.conversionAccuracy,matrix:n.matrix||r.matrix};return new Ue(l)}function ND(r,n){let o=n.milliseconds??0;for(const l of jj.slice(1))n[l]&&(o+=n[l]*r[l].milliseconds);return o}function jx(r,n){const o=ND(r,n)<0?-1:1;gs.reduceRight((l,u)=>{if(je(n[u]))return l;if(l){const f=n[l]*o,g=r[u][l],k=Math.floor(f/g);n[u]+=k*o,n[l]-=k*g*o}return u},null),gs.reduce((l,u)=>{if(je(n[u]))return l;if(l){const f=n[l]%1;n[l]-=f,n[u]+=f*r[l][u]}return u},null)}function Rj(r){const n={};for(const[o,l]of Object.entries(r))l!==0&&(n[o]=l);return n}class Ue{constructor(n){const o=n.conversionAccuracy==="longterm"||!1;let l=o?zj:Lj;n.matrix&&(l=n.matrix),this.values=n.values,this.loc=n.loc||ut.create(),this.conversionAccuracy=o?"longterm":"casual",this.invalid=n.invalid||null,this.matrix=l,this.isLuxonDuration=!0}static fromMillis(n,o){return Ue.fromObject({milliseconds:n},o)}static fromObject(n,o={}){if(n==null||typeof n!="object")throw new li(`Duration.fromObject: argument expected to be an object, got ${n===null?"null":typeof n}`);return new Ue({values:_f(n,Ue.normalizeUnit),loc:ut.fromObject(o),conversionAccuracy:o.conversionAccuracy,matrix:o.matrix})}static fromDurationLike(n){if(ks(n))return Ue.fromMillis(n);if(Ue.isDuration(n))return n;if(typeof n=="object")return Ue.fromObject(n);throw new li(`Unknown duration argument ${n} of type ${typeof n}`)}static fromISO(n,o){const[l]=Tj(n);return l?Ue.fromObject(l,o):Ue.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static fromISOTime(n,o){const[l]=Mj(n);return l?Ue.fromObject(l,o):Ue.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static invalid(n,o=null){if(!n)throw new li("need to specify a reason the Duration is invalid");const l=n instanceof Ni?n:new Ni(n,o);if(Mt.throwOnInvalid)throw new mz(l);return new Ue({invalid:l})}static normalizeUnit(n){const o={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[n&&n.toLowerCase()];if(!o)throw new Z5(n);return o}static isDuration(n){return n&&n.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(n,o={}){const l={...o,floor:o.round!==!1&&o.floor!==!1};return this.isValid?dn.create(this.loc,l).formatDurationFromString(this,n):zx}toHuman(n={}){if(!this.isValid)return zx;const o=gs.map(l=>{const u=this.values[l];return je(u)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...n,unit:l.slice(0,-1)}).format(u)}).filter(l=>l);return this.loc.listFormatter({type:"conjunction",style:n.listStyle||"narrow",...n}).format(o)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let n="P";return this.years!==0&&(n+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(n+=this.months+this.quarters*3+"M"),this.weeks!==0&&(n+=this.weeks+"W"),this.days!==0&&(n+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(n+="T"),this.hours!==0&&(n+=this.hours+"H"),this.minutes!==0&&(n+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(n+=bb(this.seconds+this.milliseconds/1e3,3)+"S"),n==="P"&&(n+="T0S"),n}toISOTime(n={}){if(!this.isValid)return null;const o=this.toMillis();return o<0||o>=864e5?null:(n={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...n,includeOffset:!1},Ie.fromMillis(o,{zone:"UTC"}).toISOTime(n))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?ND(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(n){if(!this.isValid)return this;const o=Ue.fromDurationLike(n),l={};for(const u of gs)(Ha(o.values,u)||Ha(this.values,u))&&(l[u]=o.get(u)+this.get(u));return to(this,{values:l},!0)}minus(n){if(!this.isValid)return this;const o=Ue.fromDurationLike(n);return this.plus(o.negate())}mapUnits(n){if(!this.isValid)return this;const o={};for(const l of Object.keys(this.values))o[l]=kD(n(this.values[l],l));return to(this,{values:o},!0)}get(n){return this[Ue.normalizeUnit(n)]}set(n){if(!this.isValid)return this;const o={...this.values,..._f(n,Ue.normalizeUnit)};return to(this,{values:o})}reconfigure({locale:n,numberingSystem:o,conversionAccuracy:l,matrix:u}={}){const g={loc:this.loc.clone({locale:n,numberingSystem:o}),matrix:u,conversionAccuracy:l};return to(this,g)}as(n){return this.isValid?this.shiftTo(n).get(n):NaN}normalize(){if(!this.isValid)return this;const n=this.toObject();return jx(this.matrix,n),to(this,{values:n},!0)}rescale(){if(!this.isValid)return this;const n=Rj(this.normalize().shiftToAll().toObject());return to(this,{values:n},!0)}shiftTo(...n){if(!this.isValid)return this;if(n.length===0)return this;n=n.map(g=>Ue.normalizeUnit(g));const o={},l={},u=this.toObject();let f;for(const g of gs)if(n.indexOf(g)>=0){f=g;let k=0;for(const v in l)k+=this.matrix[v][g]*l[v],l[v]=0;ks(u[g])&&(k+=u[g]);const w=Math.trunc(k);o[g]=w,l[g]=(k*1e3-w*1e3)/1e3}else ks(u[g])&&(l[g]=u[g]);for(const g in l)l[g]!==0&&(o[f]+=g===f?l[g]:l[g]/this.matrix[f][g]);return jx(this.matrix,o),to(this,{values:o},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const n={};for(const o of Object.keys(this.values))n[o]=this.values[o]===0?0:-this.values[o];return to(this,{values:n},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(n){if(!this.isValid||!n.isValid||!this.loc.equals(n.loc))return!1;function o(l,u){return l===void 0||l===0?u===void 0||u===0:l===u}for(const l of gs)if(!o(this.values[l],n.values[l]))return!1;return!0}}const ha="Invalid Interval";function Fj(r,n){return!r||!r.isValid?_t.invalid("missing or invalid start"):!n||!n.isValid?_t.invalid("missing or invalid end"):n<r?_t.invalid("end before start",`The end of an interval must be after its start, but you had start=${r.toISO()} and end=${n.toISO()}`):null}class _t{constructor(n){this.s=n.start,this.e=n.end,this.invalid=n.invalid||null,this.isLuxonInterval=!0}static invalid(n,o=null){if(!n)throw new li("need to specify a reason the Interval is invalid");const l=n instanceof Ni?n:new Ni(n,o);if(Mt.throwOnInvalid)throw new pz(l);return new _t({invalid:l})}static fromDateTimes(n,o){const l=bl(n),u=bl(o),f=Fj(l,u);return f??new _t({start:l,end:u})}static after(n,o){const l=Ue.fromDurationLike(o),u=bl(n);return _t.fromDateTimes(u,u.plus(l))}static before(n,o){const l=Ue.fromDurationLike(o),u=bl(n);return _t.fromDateTimes(u.minus(l),u)}static fromISO(n,o){const[l,u]=(n||"").split("/",2);if(l&&u){let f,g;try{f=Ie.fromISO(l,o),g=f.isValid}catch{g=!1}let k,w;try{k=Ie.fromISO(u,o),w=k.isValid}catch{w=!1}if(g&&w)return _t.fromDateTimes(f,k);if(g){const v=Ue.fromISO(u,o);if(v.isValid)return _t.after(f,v)}else if(w){const v=Ue.fromISO(l,o);if(v.isValid)return _t.before(k,v)}}return _t.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static isInterval(n){return n&&n.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(n="milliseconds"){return this.isValid?this.toDuration(n).get(n):NaN}count(n="milliseconds"){if(!this.isValid)return NaN;const o=this.start.startOf(n),l=this.end.startOf(n);return Math.floor(l.diff(o,n).get(n))+(l.valueOf()!==this.end.valueOf())}hasSame(n){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,n):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(n){return this.isValid?this.s>n:!1}isBefore(n){return this.isValid?this.e<=n:!1}contains(n){return this.isValid?this.s<=n&&this.e>n:!1}set({start:n,end:o}={}){return this.isValid?_t.fromDateTimes(n||this.s,o||this.e):this}splitAt(...n){if(!this.isValid)return[];const o=n.map(bl).filter(g=>this.contains(g)).sort(),l=[];let{s:u}=this,f=0;for(;u<this.e;){const g=o[f]||this.e,k=+g>+this.e?this.e:g;l.push(_t.fromDateTimes(u,k)),u=k,f+=1}return l}splitBy(n){const o=Ue.fromDurationLike(n);if(!this.isValid||!o.isValid||o.as("milliseconds")===0)return[];let{s:l}=this,u=1,f;const g=[];for(;l<this.e;){const k=this.start.plus(o.mapUnits(w=>w*u));f=+k>+this.e?this.e:k,g.push(_t.fromDateTimes(l,f)),l=f,u+=1}return g}divideEqually(n){return this.isValid?this.splitBy(this.length()/n).slice(0,n):[]}overlaps(n){return this.e>n.s&&this.s<n.e}abutsStart(n){return this.isValid?+this.e==+n.s:!1}abutsEnd(n){return this.isValid?+n.e==+this.s:!1}engulfs(n){return this.isValid?this.s<=n.s&&this.e>=n.e:!1}equals(n){return!this.isValid||!n.isValid?!1:this.s.equals(n.s)&&this.e.equals(n.e)}intersection(n){if(!this.isValid)return this;const o=this.s>n.s?this.s:n.s,l=this.e<n.e?this.e:n.e;return o>=l?null:_t.fromDateTimes(o,l)}union(n){if(!this.isValid)return this;const o=this.s<n.s?this.s:n.s,l=this.e>n.e?this.e:n.e;return _t.fromDateTimes(o,l)}static merge(n){const[o,l]=n.sort((u,f)=>u.s-f.s).reduce(([u,f],g)=>f?f.overlaps(g)||f.abutsStart(g)?[u,f.union(g)]:[u.concat([f]),g]:[u,g],[[],null]);return l&&o.push(l),o}static xor(n){let o=null,l=0;const u=[],f=n.map(w=>[{time:w.s,type:"s"},{time:w.e,type:"e"}]),g=Array.prototype.concat(...f),k=g.sort((w,v)=>w.time-v.time);for(const w of k)l+=w.type==="s"?1:-1,l===1?o=w.time:(o&&+o!=+w.time&&u.push(_t.fromDateTimes(o,w.time)),o=null);return _t.merge(u)}difference(...n){return _t.xor([this].concat(n)).map(o=>this.intersection(o)).filter(o=>o&&!o.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:ha}toLocaleString(n=kf,o={}){return this.isValid?dn.create(this.s.loc.clone(o),n).formatInterval(this):ha}toISO(n){return this.isValid?`${this.s.toISO(n)}/${this.e.toISO(n)}`:ha}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ha}toISOTime(n){return this.isValid?`${this.s.toISOTime(n)}/${this.e.toISOTime(n)}`:ha}toFormat(n,{separator:o=" – "}={}){return this.isValid?`${this.s.toFormat(n)}${o}${this.e.toFormat(n)}`:ha}toDuration(n,o){return this.isValid?this.e.diff(this.s,n,o):Ue.invalid(this.invalidReason)}mapEndpoints(n){return _t.fromDateTimes(n(this.s),n(this.e))}}class _h{static hasDST(n=Mt.defaultZone){const o=Ie.now().setZone(n).set({month:12});return!n.isUniversal&&o.offset!==o.set({month:6}).offset}static isValidIANAZone(n){return Mr.isValidZone(n)}static normalizeZone(n){return lo(n,Mt.defaultZone)}static months(n="long",{locale:o=null,numberingSystem:l=null,locObj:u=null,outputCalendar:f="gregory"}={}){return(u||ut.create(o,l,f)).months(n)}static monthsFormat(n="long",{locale:o=null,numberingSystem:l=null,locObj:u=null,outputCalendar:f="gregory"}={}){return(u||ut.create(o,l,f)).months(n,!0)}static weekdays(n="long",{locale:o=null,numberingSystem:l=null,locObj:u=null}={}){return(u||ut.create(o,l,null)).weekdays(n)}static weekdaysFormat(n="long",{locale:o=null,numberingSystem:l=null,locObj:u=null}={}){return(u||ut.create(o,l,null)).weekdays(n,!0)}static meridiems({locale:n=null}={}){return ut.create(n).meridiems()}static eras(n="short",{locale:o=null}={}){return ut.create(o,null,"gregory").eras(n)}static features(){return{relative:pD()}}}function Rx(r,n){const o=u=>u.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),l=o(n)-o(r);return Math.floor(Ue.fromMillis(l).as("days"))}function Vj(r,n,o){const l=[["years",(w,v)=>v.year-w.year],["quarters",(w,v)=>v.quarter-w.quarter+(v.year-w.year)*4],["months",(w,v)=>v.month-w.month+(v.year-w.year)*12],["weeks",(w,v)=>{const _=Rx(w,v);return(_-_%7)/7}],["days",Rx]],u={},f=r;let g,k;for(const[w,v]of l)o.indexOf(w)>=0&&(g=w,u[w]=v(r,n),k=f.plus(u),k>n?(u[w]--,r=f.plus(u),r>n&&(k=r,u[w]--,r=f.plus(u))):r=k);return[r,u,k,g]}function Uj(r,n,o,l){let[u,f,g,k]=Vj(r,n,o);const w=n-u,v=o.filter(A=>["hours","minutes","seconds","milliseconds"].indexOf(A)>=0);v.length===0&&(g<n&&(g=u.plus({[k]:1})),g!==u&&(f[k]=(f[k]||0)+w/(g-u)));const _=Ue.fromObject(f,l);return v.length>0?Ue.fromMillis(w,l).shiftTo(...v).plus(_):_}const yb={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Fx={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},$j=yb.hanidec.replace(/[\[|\]]/g,"").split("");function Hj(r){let n=parseInt(r,10);if(isNaN(n)){n="";for(let o=0;o<r.length;o++){const l=r.charCodeAt(o);if(r[o].search(yb.hanidec)!==-1)n+=$j.indexOf(r[o]);else for(const u in Fx){const[f,g]=Fx[u];l>=f&&l<=g&&(n+=l-f)}}return parseInt(n,10)}else return n}function Ai({numberingSystem:r},n=""){return new RegExp(`${yb[r||"latn"]}${n}`)}const Wj="missing Intl.DateTimeFormat.formatToParts support";function Qe(r,n=o=>o){return{regex:r,deser:([o])=>n(Hj(o))}}const qj=String.fromCharCode(160),OD=`[ ${qj}]`,BD=new RegExp(OD,"g");function Gj(r){return r.replace(/\./g,"\\.?").replace(BD,OD)}function Vx(r){return r.replace(/\./g,"").replace(BD," ").toLowerCase()}function Ci(r,n){return r===null?null:{regex:RegExp(r.map(Gj).join("|")),deser:([o])=>r.findIndex(l=>Vx(o)===Vx(l))+n}}function Ux(r,n){return{regex:r,deser:([,o,l])=>$f(o,l),groups:n}}function vh(r){return{regex:r,deser:([n])=>n}}function Yj(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Zj(r,n){const o=Ai(n),l=Ai(n,"{2}"),u=Ai(n,"{3}"),f=Ai(n,"{4}"),g=Ai(n,"{6}"),k=Ai(n,"{1,2}"),w=Ai(n,"{1,3}"),v=Ai(n,"{1,6}"),_=Ai(n,"{1,9}"),A=Ai(n,"{2,4}"),x=Ai(n,"{4,6}"),S=R=>({regex:RegExp(Yj(R.val)),deser:([B])=>B,literal:!0}),P=(R=>{if(r.literal)return S(R);switch(R.val){case"G":return Ci(n.eras("short"),0);case"GG":return Ci(n.eras("long"),0);case"y":return Qe(v);case"yy":return Qe(A,l0);case"yyyy":return Qe(f);case"yyyyy":return Qe(x);case"yyyyyy":return Qe(g);case"M":return Qe(k);case"MM":return Qe(l);case"MMM":return Ci(n.months("short",!0),1);case"MMMM":return Ci(n.months("long",!0),1);case"L":return Qe(k);case"LL":return Qe(l);case"LLL":return Ci(n.months("short",!1),1);case"LLLL":return Ci(n.months("long",!1),1);case"d":return Qe(k);case"dd":return Qe(l);case"o":return Qe(w);case"ooo":return Qe(u);case"HH":return Qe(l);case"H":return Qe(k);case"hh":return Qe(l);case"h":return Qe(k);case"mm":return Qe(l);case"m":return Qe(k);case"q":return Qe(k);case"qq":return Qe(l);case"s":return Qe(k);case"ss":return Qe(l);case"S":return Qe(w);case"SSS":return Qe(u);case"u":return vh(_);case"uu":return vh(k);case"uuu":return Qe(o);case"a":return Ci(n.meridiems(),0);case"kkkk":return Qe(f);case"kk":return Qe(A,l0);case"W":return Qe(k);case"WW":return Qe(l);case"E":case"c":return Qe(o);case"EEE":return Ci(n.weekdays("short",!1),1);case"EEEE":return Ci(n.weekdays("long",!1),1);case"ccc":return Ci(n.weekdays("short",!0),1);case"cccc":return Ci(n.weekdays("long",!0),1);case"Z":case"ZZ":return Ux(new RegExp(`([+-]${k.source})(?::(${l.source}))?`),2);case"ZZZ":return Ux(new RegExp(`([+-]${k.source})(${l.source})?`),2);case"z":return vh(/[a-z_+-/]{1,256}?/i);case" ":return vh(/[^\S\n\r]/);default:return S(R)}})(r)||{invalidReason:Wj};return P.token=r,P}const Kj={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Qj(r,n,o){const{type:l,value:u}=r;if(l==="literal"){const w=/^\s+$/.test(u);return{literal:!w,val:w?" ":u}}const f=n[l];let g=l;l==="hour"&&(n.hour12!=null?g=n.hour12?"hour12":"hour24":n.hourCycle!=null?n.hourCycle==="h11"||n.hourCycle==="h12"?g="hour12":g="hour24":g=o.hour12?"hour12":"hour24");let k=Kj[g];if(typeof k=="object"&&(k=k[f]),k)return{literal:!1,val:k}}function Jj(r){return[`^${r.map(o=>o.regex).reduce((o,l)=>`${o}(${l.source})`,"")}$`,r]}function Xj(r,n,o){const l=r.match(n);if(l){const u={};let f=1;for(const g in o)if(Ha(o,g)){const k=o[g],w=k.groups?k.groups+1:1;!k.literal&&k.token&&(u[k.token.val[0]]=k.deser(l.slice(f,f+w))),f+=w}return[l,u]}else return[l,{}]}function e7(r){const n=f=>{switch(f){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let o=null,l;return je(r.z)||(o=Mr.create(r.z)),je(r.Z)||(o||(o=new _n(r.Z)),l=r.Z),je(r.q)||(r.M=(r.q-1)*3+1),je(r.h)||(r.h<12&&r.a===1?r.h+=12:r.h===12&&r.a===0&&(r.h=0)),r.G===0&&r.y&&(r.y=-r.y),je(r.u)||(r.S=kb(r.u)),[Object.keys(r).reduce((f,g)=>{const k=n(g);return k&&(f[k]=r[g]),f},{}),o,l]}let qm=null;function t7(){return qm||(qm=Ie.fromMillis(1555555555555)),qm}function n7(r,n){if(r.literal)return r;const o=dn.macroTokenToFormatOpts(r.val),l=zD(o,n);return l==null||l.includes(void 0)?r:l}function PD(r,n){return Array.prototype.concat(...r.map(o=>n7(o,n)))}function LD(r,n,o){const l=PD(dn.parseFormat(o),r),u=l.map(g=>Zj(g,r)),f=u.find(g=>g.invalidReason);if(f)return{input:n,tokens:l,invalidReason:f.invalidReason};{const[g,k]=Jj(u),w=RegExp(g,"i"),[v,_]=Xj(n,w,k),[A,x,S]=_?e7(_):[null,null,void 0];if(Ha(_,"a")&&Ha(_,"H"))throw new Cl("Can't include meridiem when specifying 24-hour format");return{input:n,tokens:l,regex:w,rawMatches:v,matches:_,result:A,zone:x,specificOffset:S}}}function i7(r,n,o){const{result:l,zone:u,specificOffset:f,invalidReason:g}=LD(r,n,o);return[l,u,f,g]}function zD(r,n){if(!r)return null;const l=dn.create(n,r).dtFormatter(t7()),u=l.formatToParts(),f=l.resolvedOptions();return u.map(g=>Qj(g,r,f))}const jD=[0,31,59,90,120,151,181,212,243,273,304,334],RD=[0,31,60,91,121,152,182,213,244,274,305,335];function ui(r,n){return new Ni("unit out of range",`you specified ${n} (of type ${typeof n}) as a ${r}, which is invalid`)}function FD(r,n,o){const l=new Date(Date.UTC(r,n-1,o));r<100&&r>=0&&l.setUTCFullYear(l.getUTCFullYear()-1900);const u=l.getUTCDay();return u===0?7:u}function VD(r,n,o){return o+(pd(r)?RD:jD)[n-1]}function UD(r,n){const o=pd(r)?RD:jD,l=o.findIndex(f=>f<n),u=n-o[l];return{month:l+1,day:u}}function d0(r){const{year:n,month:o,day:l}=r,u=VD(n,o,l),f=FD(n,o,l);let g=Math.floor((u-f+10)/7),k;return g<1?(k=n-1,g=wf(k)):g>wf(n)?(k=n+1,g=1):k=n,{weekYear:k,weekNumber:g,weekday:f,...Hf(r)}}function $x(r){const{weekYear:n,weekNumber:o,weekday:l}=r,u=FD(n,1,4),f=zl(n);let g=o*7+l-u-3,k;g<1?(k=n-1,g+=zl(k)):g>f?(k=n+1,g-=zl(n)):k=n;const{month:w,day:v}=UD(k,g);return{year:k,month:w,day:v,...Hf(r)}}function Gm(r){const{year:n,month:o,day:l}=r,u=VD(n,o,l);return{year:n,ordinal:u,...Hf(r)}}function Hx(r){const{year:n,ordinal:o}=r,{month:l,day:u}=UD(n,o);return{year:n,month:l,day:u,...Hf(r)}}function r7(r){const n=Vf(r.weekYear),o=Cr(r.weekNumber,1,wf(r.weekYear)),l=Cr(r.weekday,1,7);return n?o?l?!1:ui("weekday",r.weekday):ui("week",r.week):ui("weekYear",r.weekYear)}function o7(r){const n=Vf(r.year),o=Cr(r.ordinal,1,zl(r.year));return n?o?!1:ui("ordinal",r.ordinal):ui("year",r.year)}function $D(r){const n=Vf(r.year),o=Cr(r.month,1,12),l=Cr(r.day,1,bf(r.year,r.month));return n?o?l?!1:ui("day",r.day):ui("month",r.month):ui("year",r.year)}function HD(r){const{hour:n,minute:o,second:l,millisecond:u}=r,f=Cr(n,0,23)||n===24&&o===0&&l===0&&u===0,g=Cr(o,0,59),k=Cr(l,0,59),w=Cr(u,0,999);return f?g?k?w?!1:ui("millisecond",u):ui("second",l):ui("minute",o):ui("hour",n)}const Ym="Invalid DateTime",Wx=864e13;function yh(r){return new Ni("unsupported zone",`the zone "${r.name}" is not supported`)}function Zm(r){return r.weekData===null&&(r.weekData=d0(r.c)),r.weekData}function ns(r,n){const o={ts:r.ts,zone:r.zone,c:r.c,o:r.o,loc:r.loc,invalid:r.invalid};return new Ie({...o,...n,old:o})}function WD(r,n,o){let l=r-n*60*1e3;const u=o.offset(l);if(n===u)return[l,n];l-=(u-n)*60*1e3;const f=o.offset(l);return u===f?[l,u]:[r-Math.min(u,f)*60*1e3,Math.max(u,f)]}function Ah(r,n){r+=n*60*1e3;const o=new Date(r);return{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate(),hour:o.getUTCHours(),minute:o.getUTCMinutes(),second:o.getUTCSeconds(),millisecond:o.getUTCMilliseconds()}}function Vh(r,n,o){return WD(Uf(r),n,o)}function qx(r,n){const o=r.o,l=r.c.year+Math.trunc(n.years),u=r.c.month+Math.trunc(n.months)+Math.trunc(n.quarters)*3,f={...r.c,year:l,month:u,day:Math.min(r.c.day,bf(l,u))+Math.trunc(n.days)+Math.trunc(n.weeks)*7},g=Ue.fromObject({years:n.years-Math.trunc(n.years),quarters:n.quarters-Math.trunc(n.quarters),months:n.months-Math.trunc(n.months),weeks:n.weeks-Math.trunc(n.weeks),days:n.days-Math.trunc(n.days),hours:n.hours,minutes:n.minutes,seconds:n.seconds,milliseconds:n.milliseconds}).as("milliseconds"),k=Uf(f);let[w,v]=WD(k,o,r.zone);return g!==0&&(w+=g,v=r.zone.offset(w)),{ts:w,o:v}}function kl(r,n,o,l,u,f){const{setZone:g,zone:k}=o;if(r&&Object.keys(r).length!==0||n){const w=n||k,v=Ie.fromObject(r,{...o,zone:w,specificOffset:f});return g?v:v.setZone(k)}else return Ie.invalid(new Ni("unparsable",`the input "${u}" can't be parsed as ${l}`))}function Ch(r,n,o=!0){return r.isValid?dn.create(ut.create("en-US"),{allowZ:o,forceSimple:!0}).formatDateTimeFromString(r,n):null}function Km(r,n){const o=r.c.year>9999||r.c.year<0;let l="";return o&&r.c.year>=0&&(l+="+"),l+=Nt(r.c.year,o?6:4),n?(l+="-",l+=Nt(r.c.month),l+="-",l+=Nt(r.c.day)):(l+=Nt(r.c.month),l+=Nt(r.c.day)),l}function Gx(r,n,o,l,u,f){let g=Nt(r.c.hour);return n?(g+=":",g+=Nt(r.c.minute),(r.c.millisecond!==0||r.c.second!==0||!o)&&(g+=":")):g+=Nt(r.c.minute),(r.c.millisecond!==0||r.c.second!==0||!o)&&(g+=Nt(r.c.second),(r.c.millisecond!==0||!l)&&(g+=".",g+=Nt(r.c.millisecond,3))),u&&(r.isOffsetFixed&&r.offset===0&&!f?g+="Z":r.o<0?(g+="-",g+=Nt(Math.trunc(-r.o/60)),g+=":",g+=Nt(Math.trunc(-r.o%60))):(g+="+",g+=Nt(Math.trunc(r.o/60)),g+=":",g+=Nt(Math.trunc(r.o%60)))),f&&(g+="["+r.zone.ianaName+"]"),g}const qD={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},s7={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},a7={ordinal:1,hour:0,minute:0,second:0,millisecond:0},GD=["year","month","day","hour","minute","second","millisecond"],c7=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],l7=["year","ordinal","hour","minute","second","millisecond"];function Yx(r){const n={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[r.toLowerCase()];if(!n)throw new Z5(r);return n}function Zx(r,n){const o=lo(n.zone,Mt.defaultZone),l=ut.fromObject(n),u=Mt.now();let f,g;if(je(r.year))f=u;else{for(const v of GD)je(r[v])&&(r[v]=qD[v]);const k=$D(r)||HD(r);if(k)return Ie.invalid(k);const w=o.offset(u);[f,g]=Vh(r,w,o)}return new Ie({ts:f,zone:o,loc:l,o:g})}function Kx(r,n,o){const l=je(o.round)?!0:o.round,u=(g,k)=>(g=bb(g,l||o.calendary?0:2,!0),n.loc.clone(o).relFormatter(o).format(g,k)),f=g=>o.calendary?n.hasSame(r,g)?0:n.startOf(g).diff(r.startOf(g),g).get(g):n.diff(r,g).get(g);if(o.unit)return u(f(o.unit),o.unit);for(const g of o.units){const k=f(g);if(Math.abs(k)>=1)return u(k,g)}return u(r>n?-0:0,o.units[o.units.length-1])}function Qx(r){let n={},o;return r.length>0&&typeof r[r.length-1]=="object"?(n=r[r.length-1],o=Array.from(r).slice(0,r.length-1)):o=Array.from(r),[n,o]}class Ie{constructor(n){const o=n.zone||Mt.defaultZone;let l=n.invalid||(Number.isNaN(n.ts)?new Ni("invalid input"):null)||(o.isValid?null:yh(o));this.ts=je(n.ts)?Mt.now():n.ts;let u=null,f=null;if(!l)if(n.old&&n.old.ts===this.ts&&n.old.zone.equals(o))[u,f]=[n.old.c,n.old.o];else{const k=o.offset(this.ts);u=Ah(this.ts,k),l=Number.isNaN(u.year)?new Ni("invalid input"):null,u=l?null:u,f=l?null:k}this._zone=o,this.loc=n.loc||ut.create(),this.invalid=l,this.weekData=null,this.c=u,this.o=f,this.isLuxonDateTime=!0}static now(){return new Ie({})}static local(){const[n,o]=Qx(arguments),[l,u,f,g,k,w,v]=o;return Zx({year:l,month:u,day:f,hour:g,minute:k,second:w,millisecond:v},n)}static utc(){const[n,o]=Qx(arguments),[l,u,f,g,k,w,v]=o;return n.zone=_n.utcInstance,Zx({year:l,month:u,day:f,hour:g,minute:k,second:w,millisecond:v},n)}static fromJSDate(n,o={}){const l=zz(n)?n.valueOf():NaN;if(Number.isNaN(l))return Ie.invalid("invalid input");const u=lo(o.zone,Mt.defaultZone);return u.isValid?new Ie({ts:l,zone:u,loc:ut.fromObject(o)}):Ie.invalid(yh(u))}static fromMillis(n,o={}){if(ks(n))return n<-Wx||n>Wx?Ie.invalid("Timestamp out of range"):new Ie({ts:n,zone:lo(o.zone,Mt.defaultZone),loc:ut.fromObject(o)});throw new li(`fromMillis requires a numerical input, but received a ${typeof n} with value ${n}`)}static fromSeconds(n,o={}){if(ks(n))return new Ie({ts:n*1e3,zone:lo(o.zone,Mt.defaultZone),loc:ut.fromObject(o)});throw new li("fromSeconds requires a numerical input")}static fromObject(n,o={}){n=n||{};const l=lo(o.zone,Mt.defaultZone);if(!l.isValid)return Ie.invalid(yh(l));const u=Mt.now(),f=je(o.specificOffset)?l.offset(u):o.specificOffset,g=_f(n,Yx),k=!je(g.ordinal),w=!je(g.year),v=!je(g.month)||!je(g.day),_=w||v,A=g.weekYear||g.weekNumber,x=ut.fromObject(o);if((_||k)&&A)throw new Cl("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(v&&k)throw new Cl("Can't mix ordinal dates with month/day");const S=A||g.weekday&&!_;let N,P,R=Ah(u,f);S?(N=c7,P=s7,R=d0(R)):k?(N=l7,P=a7,R=Gm(R)):(N=GD,P=qD);let B=!1;for(const se of N){const he=g[se];je(he)?B?g[se]=P[se]:g[se]=R[se]:B=!0}const L=S?r7(g):k?o7(g):$D(g),D=L||HD(g);if(D)return Ie.invalid(D);const W=S?$x(g):k?Hx(g):g,[K,ee]=Vh(W,f,l),X=new Ie({ts:K,zone:l,o:ee,loc:x});return g.weekday&&_&&n.weekday!==X.weekday?Ie.invalid("mismatched weekday",`you can't specify both a weekday of ${g.weekday} and a date of ${X.toISO()}`):X}static fromISO(n,o={}){const[l,u]=Ej(n);return kl(l,u,o,"ISO 8601",n)}static fromRFC2822(n,o={}){const[l,u]=Dj(n);return kl(l,u,o,"RFC 2822",n)}static fromHTTP(n,o={}){const[l,u]=Sj(n);return kl(l,u,o,"HTTP",o)}static fromFormat(n,o,l={}){if(je(n)||je(o))throw new li("fromFormat requires an input string and a format");const{locale:u=null,numberingSystem:f=null}=l,g=ut.fromOpts({locale:u,numberingSystem:f,defaultToEN:!0}),[k,w,v,_]=i7(g,n,o);return _?Ie.invalid(_):kl(k,w,l,`format ${o}`,n,v)}static fromString(n,o,l={}){return Ie.fromFormat(n,o,l)}static fromSQL(n,o={}){const[l,u]=Pj(n);return kl(l,u,o,"SQL",n)}static invalid(n,o=null){if(!n)throw new li("need to specify a reason the DateTime is invalid");const l=n instanceof Ni?n:new Ni(n,o);if(Mt.throwOnInvalid)throw new gz(l);return new Ie({invalid:l})}static isDateTime(n){return n&&n.isLuxonDateTime||!1}static parseFormatForOpts(n,o={}){const l=zD(n,ut.fromObject(o));return l?l.map(u=>u?u.val:null).join(""):null}static expandFormat(n,o={}){return PD(dn.parseFormat(n),ut.fromObject(o)).map(u=>u.val).join("")}get(n){return this[n]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Zm(this).weekYear:NaN}get weekNumber(){return this.isValid?Zm(this).weekNumber:NaN}get weekday(){return this.isValid?Zm(this).weekday:NaN}get ordinal(){return this.isValid?Gm(this.c).ordinal:NaN}get monthShort(){return this.isValid?_h.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?_h.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?_h.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?_h.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const n=864e5,o=6e4,l=Uf(this.c),u=this.zone.offset(l-n),f=this.zone.offset(l+n),g=this.zone.offset(l-u*o),k=this.zone.offset(l-f*o);if(g===k)return[this];const w=l-g*o,v=l-k*o,_=Ah(w,g),A=Ah(v,k);return _.hour===A.hour&&_.minute===A.minute&&_.second===A.second&&_.millisecond===A.millisecond?[ns(this,{ts:w}),ns(this,{ts:v})]:[this]}get isInLeapYear(){return pd(this.year)}get daysInMonth(){return bf(this.year,this.month)}get daysInYear(){return this.isValid?zl(this.year):NaN}get weeksInWeekYear(){return this.isValid?wf(this.weekYear):NaN}resolvedLocaleOptions(n={}){const{locale:o,numberingSystem:l,calendar:u}=dn.create(this.loc.clone(n),n).resolvedOptions(this);return{locale:o,numberingSystem:l,outputCalendar:u}}toUTC(n=0,o={}){return this.setZone(_n.instance(n),o)}toLocal(){return this.setZone(Mt.defaultZone)}setZone(n,{keepLocalTime:o=!1,keepCalendarTime:l=!1}={}){if(n=lo(n,Mt.defaultZone),n.equals(this.zone))return this;if(n.isValid){let u=this.ts;if(o||l){const f=n.offset(this.ts),g=this.toObject();[u]=Vh(g,f,n)}return ns(this,{ts:u,zone:n})}else return Ie.invalid(yh(n))}reconfigure({locale:n,numberingSystem:o,outputCalendar:l}={}){const u=this.loc.clone({locale:n,numberingSystem:o,outputCalendar:l});return ns(this,{loc:u})}setLocale(n){return this.reconfigure({locale:n})}set(n){if(!this.isValid)return this;const o=_f(n,Yx),l=!je(o.weekYear)||!je(o.weekNumber)||!je(o.weekday),u=!je(o.ordinal),f=!je(o.year),g=!je(o.month)||!je(o.day),k=f||g,w=o.weekYear||o.weekNumber;if((k||u)&&w)throw new Cl("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(g&&u)throw new Cl("Can't mix ordinal dates with month/day");let v;l?v=$x({...d0(this.c),...o}):je(o.ordinal)?(v={...this.toObject(),...o},je(o.day)&&(v.day=Math.min(bf(v.year,v.month),v.day))):v=Hx({...Gm(this.c),...o});const[_,A]=Vh(v,this.o,this.zone);return ns(this,{ts:_,o:A})}plus(n){if(!this.isValid)return this;const o=Ue.fromDurationLike(n);return ns(this,qx(this,o))}minus(n){if(!this.isValid)return this;const o=Ue.fromDurationLike(n).negate();return ns(this,qx(this,o))}startOf(n){if(!this.isValid)return this;const o={},l=Ue.normalizeUnit(n);switch(l){case"years":o.month=1;case"quarters":case"months":o.day=1;case"weeks":case"days":o.hour=0;case"hours":o.minute=0;case"minutes":o.second=0;case"seconds":o.millisecond=0;break}if(l==="weeks"&&(o.weekday=1),l==="quarters"){const u=Math.ceil(this.month/3);o.month=(u-1)*3+1}return this.set(o)}endOf(n){return this.isValid?this.plus({[n]:1}).startOf(n).minus(1):this}toFormat(n,o={}){return this.isValid?dn.create(this.loc.redefaultToEN(o)).formatDateTimeFromString(this,n):Ym}toLocaleString(n=kf,o={}){return this.isValid?dn.create(this.loc.clone(o),n).formatDateTime(this):Ym}toLocaleParts(n={}){return this.isValid?dn.create(this.loc.clone(n),n).formatDateTimeParts(this):[]}toISO({format:n="extended",suppressSeconds:o=!1,suppressMilliseconds:l=!1,includeOffset:u=!0,extendedZone:f=!1}={}){if(!this.isValid)return null;const g=n==="extended";let k=Km(this,g);return k+="T",k+=Gx(this,g,o,l,u,f),k}toISODate({format:n="extended"}={}){return this.isValid?Km(this,n==="extended"):null}toISOWeekDate(){return Ch(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:n=!1,suppressSeconds:o=!1,includeOffset:l=!0,includePrefix:u=!1,extendedZone:f=!1,format:g="extended"}={}){return this.isValid?(u?"T":"")+Gx(this,g==="extended",o,n,l,f):null}toRFC2822(){return Ch(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ch(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Km(this,!0):null}toSQLTime({includeOffset:n=!0,includeZone:o=!1,includeOffsetSpace:l=!0}={}){let u="HH:mm:ss.SSS";return(o||n)&&(l&&(u+=" "),o?u+="z":n&&(u+="ZZ")),Ch(this,u,!0)}toSQL(n={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(n)}`:null}toString(){return this.isValid?this.toISO():Ym}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(n={}){if(!this.isValid)return{};const o={...this.c};return n.includeConfig&&(o.outputCalendar=this.outputCalendar,o.numberingSystem=this.loc.numberingSystem,o.locale=this.loc.locale),o}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(n,o="milliseconds",l={}){if(!this.isValid||!n.isValid)return Ue.invalid("created by diffing an invalid DateTime");const u={locale:this.locale,numberingSystem:this.numberingSystem,...l},f=jz(o).map(Ue.normalizeUnit),g=n.valueOf()>this.valueOf(),k=g?this:n,w=g?n:this,v=Uj(k,w,f,u);return g?v.negate():v}diffNow(n="milliseconds",o={}){return this.diff(Ie.now(),n,o)}until(n){return this.isValid?_t.fromDateTimes(this,n):this}hasSame(n,o){if(!this.isValid)return!1;const l=n.valueOf(),u=this.setZone(n.zone,{keepLocalTime:!0});return u.startOf(o)<=l&&l<=u.endOf(o)}equals(n){return this.isValid&&n.isValid&&this.valueOf()===n.valueOf()&&this.zone.equals(n.zone)&&this.loc.equals(n.loc)}toRelative(n={}){if(!this.isValid)return null;const o=n.base||Ie.fromObject({},{zone:this.zone}),l=n.padding?this<o?-n.padding:n.padding:0;let u=["years","months","days","hours","minutes","seconds"],f=n.unit;return Array.isArray(n.unit)&&(u=n.unit,f=void 0),Kx(o,this.plus(l),{...n,numeric:"always",units:u,unit:f})}toRelativeCalendar(n={}){return this.isValid?Kx(n.base||Ie.fromObject({},{zone:this.zone}),this,{...n,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...n){if(!n.every(Ie.isDateTime))throw new li("min requires all arguments be DateTimes");return Bx(n,o=>o.valueOf(),Math.min)}static max(...n){if(!n.every(Ie.isDateTime))throw new li("max requires all arguments be DateTimes");return Bx(n,o=>o.valueOf(),Math.max)}static fromFormatExplain(n,o,l={}){const{locale:u=null,numberingSystem:f=null}=l,g=ut.fromOpts({locale:u,numberingSystem:f,defaultToEN:!0});return LD(g,n,o)}static fromStringExplain(n,o,l={}){return Ie.fromFormatExplain(n,o,l)}static get DATE_SHORT(){return kf}static get DATE_MED(){return K5}static get DATE_MED_WITH_WEEKDAY(){return kz}static get DATE_FULL(){return Q5}static get DATE_HUGE(){return J5}static get TIME_SIMPLE(){return X5}static get TIME_WITH_SECONDS(){return eD}static get TIME_WITH_SHORT_OFFSET(){return tD}static get TIME_WITH_LONG_OFFSET(){return nD}static get TIME_24_SIMPLE(){return iD}static get TIME_24_WITH_SECONDS(){return rD}static get TIME_24_WITH_SHORT_OFFSET(){return oD}static get TIME_24_WITH_LONG_OFFSET(){return sD}static get DATETIME_SHORT(){return aD}static get DATETIME_SHORT_WITH_SECONDS(){return cD}static get DATETIME_MED(){return lD}static get DATETIME_MED_WITH_SECONDS(){return dD}static get DATETIME_MED_WITH_WEEKDAY(){return bz}static get DATETIME_FULL(){return uD}static get DATETIME_FULL_WITH_SECONDS(){return hD}static get DATETIME_HUGE(){return fD}static get DATETIME_HUGE_WITH_SECONDS(){return gD}}function bl(r){if(Ie.isDateTime(r))return r;if(r&&r.valueOf&&ks(r.valueOf()))return Ie.fromJSDate(r);if(r&&typeof r=="object")return Ie.fromObject(r);throw new li(`Unknown datetime argument: ${r}, of type ${typeof r}`)}const Jx=["year","month","week","day","hour","minute","second"],vf=r=>{const o=Ie.fromISO(r).diffNow().shiftTo(...Jx),l=Jx.find(f=>o.get(f)!==0)||"second";return new Intl.RelativeTimeFormat("en",{numeric:"auto"}).format(Math.trunc(o.as(l)),l)},YD="/Book-Chronicles/assets/like-21544d1e.png",d7=r=>{const n=/<oembed[^>]*>/g,o=r.match(n);if(o){const u=`<iframe src="${o[0].match(/url="([^"]*)"/)[1]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;r=r.replace(n,u)}return r};function u7(r){return{__html:d7(r||"")}}function ZD(r){return F.jsx("div",{dangerouslySetInnerHTML:u7(r)})}function KD({id:r,title:n,created_at:o,vote:l,category:u,username:f,img_url:g,content:k,currentUserLiked:w}){let v="back-pastel-green pastel-green";u=="review"?v="back-pastel-purple pastel-purple":u=="recommend"&&(v="back-pastel-red pastel-red");const _=k.length>=300?k.substring(0,300)+"...":k,A=ZD(_);return F.jsxs(Mi,{className:"post-preview",to:`/Book-Chronicles/post/${r}`,children:[F.jsxs("div",{className:"post-preview-top",children:[F.jsxs("p",{className:"time-ago",children:["Posted ",o?vf(o):" "]}),F.jsxs("p",{className:`post-category ${v}`,children:["#",u]})]}),F.jsxs("div",{className:"post-preview-middle",children:[F.jsx("h2",{className:"pastel-black",children:n}),g?F.jsx("img",{className:"post-preview-image",src:g}):"",F.jsxs("div",{className:"post-preview-content",children:[A," "]})]}),F.jsxs("div",{className:"post-preview-bot",children:[F.jsxs("div",{className:"vote-image",children:[F.jsx("img",{src:YD,className:"upvotes pastel-red"}),F.jsx("span",{className:"",children:F.jsxs("b",{className:w?"pastel-orange":"",children:[l," "]})})]}),F.jsx("p",{children:f?"~ "+f:""})]})]})}const h7="/Book-Chronicles/assets/gear-04e46c33.gif";function QD(){return F.jsx("img",{className:"loading-animation",src:h7})}function f7({supabase:r,session:n}){const[o,l]=de.useState([]),[u,f]=de.useState({created_at:!1,vote:!0}),[g,k]=de.useState(""),v=(n?n.user:{user_metadata:{}}).id,_=async()=>{const{data:N,error:P}=await r.from("posts").select().order("created_at",{ascending:!1});l(N)};de.useEffect(()=>{_()},[]);const A=N=>{k(N.target.value)},x=()=>fz(g,o,["title","category","username"]).map(P=>{const R=P.user_likes[v];return F.jsx(KD,{id:P.id,title:P.title,created_at:P.created_at,vote:P.vote,category:P.category,username:P.username,img_url:P.img,content:P.content,currentUserLiked:R},P.id)}),S=N=>{const P=JSON.parse(JSON.stringify(o));N==="vote"?(u.vote?P.sort((R,B)=>B.vote-R.vote):P.sort((R,B)=>R.vote-B.vote),f(R=>({...R,vote:!u.vote}))):(u.created_at?P.sort((R,B)=>new Date(B.created_at)-new Date(R.created_at)):P.sort((R,B)=>new Date(R.created_at)-new Date(B.created_at)),f(R=>({...R,created_at:!u.created_at}))),l(P)};return F.jsxs(F.Fragment,{children:[F.jsx("div",{className:"home-title-outside-container",children:F.jsxs("div",{className:"home-title-container",children:[F.jsxs("h1",{className:"home-title",children:[F.jsx("span",{className:"pastel-black",children:"Home"})," ",F.jsx("span",{className:"accent",children:"Feed"})]}),F.jsx("h2",{className:"home-subtitle",children:"Reviews and Recommendations"})]})}),F.jsx("div",{className:"input-outside-container",children:F.jsxs("div",{className:"input-container",children:[F.jsx("input",{className:"search-input",onChange:A,placeholder:"Search",type:"text"}),F.jsxs("div",{className:"sort-posts-container",children:[F.jsx("span",{children:"Order by: "}),F.jsx("button",{className:"darkAccent btn sort-button",onClick:()=>{S("created_at")},children:"Newest"}),F.jsx("button",{className:"btn sort-button",onClick:()=>{S("vote")},children:"Most Popular"})]})]})}),F.jsx("div",{className:"post-preview-container",children:x().length!==0?x():F.jsx(QD,{})})]})}function g7(){const r=Br();return de.useEffect(()=>{r("/")},[]),F.jsx("div",{children:"NotFound"})}var yf={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */yf.exports;(function(r,n){(function(o,l){r.exports=l(de)})(self,o=>(()=>{var l={703:(k,w,v)=>{var _=v(414);function A(){}function x(){}x.resetWarningCache=A,k.exports=function(){function S(R,B,L,D,W,K){if(K!==_){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}function N(){return S}S.isRequired=S;var P={array:S,bigint:S,bool:S,func:S,number:S,object:S,string:S,symbol:S,any:S,arrayOf:N,element:S,elementType:S,instanceOf:N,node:S,objectOf:N,oneOf:N,oneOfType:N,shape:N,exact:N,checkPropTypes:x,resetWarningCache:A};return P.PropTypes=P,P}},697:(k,w,v)=>{k.exports=v(703)()},414:k=>{k.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:k=>{k.exports=o}},u={};function f(k){var w=u[k];if(w!==void 0)return w.exports;var v=u[k]={exports:{}};return l[k](v,v.exports,f),v.exports}f.n=k=>{var w=k&&k.__esModule?()=>k.default:()=>k;return f.d(w,{a:w}),w},f.d=(k,w)=>{for(var v in w)f.o(w,v)&&!f.o(k,v)&&Object.defineProperty(k,v,{enumerable:!0,get:w[v]})},f.o=(k,w)=>Object.prototype.hasOwnProperty.call(k,w),f.r=k=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})};var g={};return(()=>{f.r(g),f.d(g,{CKEditor:()=>hr,CKEditorContext:()=>Hs,useMultiRootEditor:()=>Lg});var k=f(787),w=f.n(k),v=f(697),_=f.n(v);const A=new Array(256).fill("").map((T,I)=>("0"+I.toString(16)).slice(-2));class x{constructor(I){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof I.crashNumberLimit=="number"?I.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof I.minimumNonErrorTimePeriod=="number"?I.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=j=>{const q="error"in j?j.error:j.reason;q instanceof Error&&this._handleError(q,j)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(I,j){this._listeners[I]||(this._listeners[I]=[]),this._listeners[I].push(j)}off(I,j){this._listeners[I]=this._listeners[I].filter(q=>q!==j)}_fire(I,...j){const q=this._listeners[I]||[];for(const ie of q)ie.apply(this,[null,...j])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(I,j){if(this._shouldReactToError(I)){this.crashes.push({message:I.message,stack:I.stack,filename:j instanceof ErrorEvent?j.filename:void 0,lineno:j instanceof ErrorEvent?j.lineno:void 0,colno:j instanceof ErrorEvent?j.colno:void 0,date:this._now()});const q=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:I,causesRestart:q}),q?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(I){return I.is&&I.is("CKEditorError")&&I.context!==void 0&&I.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(I)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function S(T,I=new Set){const j=[T],q=new Set;let ie=0;for(;j.length>ie;){const we=j[ie++];if(!q.has(we)&&N(we)&&!I.has(we))if(q.add(we),Symbol.iterator in we)try{for(const ce of we)j.push(ce)}catch{}else for(const ce in we)ce!=="defaultValue"&&j.push(we[ce])}return q}function N(T){const I=Object.prototype.toString.call(T),j=typeof T;return!(j==="number"||j==="boolean"||j==="string"||j==="symbol"||j==="function"||I==="[object Date]"||I==="[object RegExp]"||I==="[object Module]"||T==null||T._watchdogExcluded||T instanceof EventTarget||T instanceof Event)}function P(T,I,j=new Set){if(T===I&&typeof(q=T)=="object"&&q!==null)return!0;var q;const ie=S(T,j),we=S(I,j);for(const ce of ie)if(we.has(ce))return!0;return!1}const R=function(T){var I=typeof T;return T!=null&&(I=="object"||I=="function")},B=typeof ds=="object"&&ds&&ds.Object===Object&&ds;var L=typeof self=="object"&&self&&self.Object===Object&&self;const D=B||L||Function("return this")(),W=function(){return D.Date.now()};var K=/\s/;const ee=function(T){for(var I=T.length;I--&&K.test(T.charAt(I)););return I};var X=/^\s+/;const se=function(T){return T&&T.slice(0,ee(T)+1).replace(X,"")},he=D.Symbol;var be=Object.prototype,G=be.hasOwnProperty,Y=be.toString,$=he?he.toStringTag:void 0;const U=function(T){var I=G.call(T,$),j=T[$];try{T[$]=void 0;var q=!0}catch{}var ie=Y.call(T);return q&&(I?T[$]=j:delete T[$]),ie};var H=Object.prototype.toString;const J=function(T){return H.call(T)};var ue=he?he.toStringTag:void 0;const te=function(T){return T==null?T===void 0?"[object Undefined]":"[object Null]":ue&&ue in Object(T)?U(T):J(T)},ne=function(T){return T!=null&&typeof T=="object"},ge=function(T){return typeof T=="symbol"||ne(T)&&te(T)=="[object Symbol]"};var pe=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,gt=/^0o[0-7]+$/i,Dt=parseInt;const St=function(T){if(typeof T=="number")return T;if(ge(T))return NaN;if(R(T)){var I=typeof T.valueOf=="function"?T.valueOf():T;T=R(I)?I+"":I}if(typeof T!="string")return T===0?T:+T;T=se(T);var j=xe.test(T);return j||gt.test(T)?Dt(T.slice(2),j?2:8):pe.test(T)?NaN:+T};var Ge=Math.max,or=Math.min;const Ye=function(T,I,j){var q,ie,we,ce,ke,Me,Ee=0,gn=!1,Kt=!1,Bt=!0;if(typeof T!="function")throw new TypeError("Expected a function");function Rt(Ft){var mn=q,ye=ie;return q=ie=void 0,Ee=Ft,ce=T.apply(ye,mn)}function ei(Ft){var mn=Ft-Me;return Me===void 0||mn>=I||mn<0||Kt&&Ft-Ee>=we}function jn(){var Ft=W();if(ei(Ft))return tt(Ft);ke=setTimeout(jn,function(mn){var ye=I-(mn-Me);return Kt?or(ye,we-(mn-Ee)):ye}(Ft))}function tt(Ft){return ke=void 0,Bt&&q?Rt(Ft):(q=ie=void 0,ce)}function pn(){var Ft=W(),mn=ei(Ft);if(q=arguments,ie=this,Me=Ft,mn){if(ke===void 0)return function(ye){return Ee=ye,ke=setTimeout(jn,I),gn?Rt(ye):ce}(Me);if(Kt)return clearTimeout(ke),ke=setTimeout(jn,I),Rt(Me)}return ke===void 0&&(ke=setTimeout(jn,I)),ce}return I=St(I)||0,R(j)&&(gn=!!j.leading,we=(Kt="maxWait"in j)?Ge(St(j.maxWait)||0,I):we,Bt="trailing"in j?!!j.trailing:Bt),pn.cancel=function(){ke!==void 0&&clearTimeout(ke),Ee=0,q=Me=ie=ke=void 0},pn.flush=function(){return ke===void 0?ce:tt(W())},pn},oc=function(T,I,j){var q=!0,ie=!0;if(typeof T!="function")throw new TypeError("Expected a function");return R(j)&&(q="leading"in j?!!j.leading:q,ie="trailing"in j?!!j.trailing:ie),Ye(T,I,{leading:q,maxWait:I,trailing:ie})},_d=function(T,I){return function(j){return T(I(j))}},sc=_d(Object.getPrototypeOf,Object);var vd=Function.prototype,yd=Object.prototype,Es=vd.toString,jt=yd.hasOwnProperty,hn=Es.call(Object);const Ad=function(T){if(!ne(T)||te(T)!="[object Object]")return!1;var I=sc(T);if(I===null)return!0;var j=jt.call(I,"constructor")&&I.constructor;return typeof j=="function"&&j instanceof j&&Es.call(j)==hn},Cd=function(T){return ne(T)&&T.nodeType===1&&!Ad(T)},Ln=function(){this.__data__=[],this.size=0},zn=function(T,I){return T===I||T!=T&&I!=I},Io=function(T,I){for(var j=T.length;j--;)if(zn(T[j][0],I))return j;return-1};var Gf=Array.prototype.splice;const Yf=function(T){var I=this.__data__,j=Io(I,T);return!(j<0)&&(j==I.length-1?I.pop():Gf.call(I,j,1),--this.size,!0)},Mo=function(T){var I=this.__data__,j=Io(I,T);return j<0?void 0:I[j][1]},Zf=function(T){return Io(this.__data__,T)>-1},Kf=function(T,I){var j=this.__data__,q=Io(j,T);return q<0?(++this.size,j.push([T,I])):j[q][1]=I,this};function Pr(T){var I=-1,j=T==null?0:T.length;for(this.clear();++I<j;){var q=T[I];this.set(q[0],q[1])}}Pr.prototype.clear=Ln,Pr.prototype.delete=Yf,Pr.prototype.get=Mo,Pr.prototype.has=Zf,Pr.prototype.set=Kf;const No=Pr,zi=function(){this.__data__=new No,this.size=0},Zt=function(T){var I=this.__data__,j=I.delete(T);return this.size=I.size,j},Cn=function(T){return this.__data__.get(T)},xd=function(T){return this.__data__.has(T)},Ds=function(T){if(!R(T))return!1;var I=te(T);return I=="[object Function]"||I=="[object GeneratorFunction]"||I=="[object AsyncFunction]"||I=="[object Proxy]"},Ss=D["__core-js_shared__"];var Ts=function(){var T=/[^.]+$/.exec(Ss&&Ss.keys&&Ss.keys.IE_PROTO||"");return T?"Symbol(src)_1."+T:""}();const Qf=function(T){return!!Ts&&Ts in T};var Jf=Function.prototype.toString;const ji=function(T){if(T!=null){try{return Jf.call(T)}catch{}try{return T+""}catch{}}return""};var Xf=/^\[object .+?Constructor\]$/,eg=Function.prototype,fn=Object.prototype,tg=eg.toString,Oo=fn.hasOwnProperty,Is=RegExp("^"+tg.call(Oo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ng=function(T){return!(!R(T)||Qf(T))&&(Ds(T)?Is:Xf).test(ji(T))},ig=function(T,I){return T==null?void 0:T[I]},sr=function(T,I){var j=ig(T,I);return ng(j)?j:void 0},Bo=sr(D,"Map"),Po=sr(Object,"create"),Lr=function(){this.__data__=Po?Po(null):{},this.size=0},Ms=function(T){var I=this.has(T)&&delete this.__data__[T];return this.size-=I?1:0,I};var rg=Object.prototype.hasOwnProperty;const og=function(T){var I=this.__data__;if(Po){var j=I[T];return j==="__lodash_hash_undefined__"?void 0:j}return rg.call(I,T)?I[T]:void 0};var sg=Object.prototype.hasOwnProperty;const ag=function(T){var I=this.__data__;return Po?I[T]!==void 0:sg.call(I,T)},ar=function(T,I){var j=this.__data__;return this.size+=this.has(T)?0:1,j[T]=Po&&I===void 0?"__lodash_hash_undefined__":I,this};function Ri(T){var I=-1,j=T==null?0:T.length;for(this.clear();++I<j;){var q=T[I];this.set(q[0],q[1])}}Ri.prototype.clear=Lr,Ri.prototype.delete=Ms,Ri.prototype.get=og,Ri.prototype.has=ag,Ri.prototype.set=ar;const ac=Ri,cg=function(){this.size=0,this.__data__={hash:new ac,map:new(Bo||No),string:new ac}},lg=function(T){var I=typeof T;return I=="string"||I=="number"||I=="symbol"||I=="boolean"?T!=="__proto__":T===null},Xn=function(T,I){var j=T.__data__;return lg(I)?j[typeof I=="string"?"string":"hash"]:j.map},dg=function(T){var I=Xn(this,T).delete(T);return this.size-=I?1:0,I},ug=function(T){return Xn(this,T).get(T)},hg=function(T){return Xn(this,T).has(T)},fg=function(T,I){var j=Xn(this,T),q=j.size;return j.set(T,I),this.size+=j.size==q?0:1,this};function zr(T){var I=-1,j=T==null?0:T.length;for(this.clear();++I<j;){var q=T[I];this.set(q[0],q[1])}}zr.prototype.clear=cg,zr.prototype.delete=dg,zr.prototype.get=ug,zr.prototype.has=hg,zr.prototype.set=fg;const gg=zr,pg=function(T,I){var j=this.__data__;if(j instanceof No){var q=j.__data__;if(!Bo||q.length<199)return q.push([T,I]),this.size=++j.size,this;j=this.__data__=new gg(q)}return j.set(T,I),this.size=j.size,this};function jr(T){var I=this.__data__=new No(T);this.size=I.size}jr.prototype.clear=zi,jr.prototype.delete=Zt,jr.prototype.get=Cn,jr.prototype.has=xd,jr.prototype.set=pg;const cr=jr,Lo=function(T,I){for(var j=-1,q=T==null?0:T.length;++j<q&&I(T[j],j,T)!==!1;);return T},Rr=function(){try{var T=sr(Object,"defineProperty");return T({},"",{}),T}catch{}}(),Ed=function(T,I,j){I=="__proto__"&&Rr?Rr(T,I,{configurable:!0,enumerable:!0,value:j,writable:!0}):T[I]=j};var mg=Object.prototype.hasOwnProperty;const Dd=function(T,I,j){var q=T[I];mg.call(T,I)&&zn(q,j)&&(j!==void 0||I in T)||Ed(T,I,j)},Ns=function(T,I,j,q){var ie=!j;j||(j={});for(var we=-1,ce=I.length;++we<ce;){var ke=I[we],Me=q?q(j[ke],T[ke],ke,j,T):void 0;Me===void 0&&(Me=T[ke]),ie?Ed(j,ke,Me):Dd(j,ke,Me)}return j},kg=function(T,I){for(var j=-1,q=Array(T);++j<T;)q[j]=I(j);return q},Sd=function(T){return ne(T)&&te(T)=="[object Arguments]"};var Td=Object.prototype,Fr=Td.hasOwnProperty,Id=Td.propertyIsEnumerable;const bg=Sd(function(){return arguments}())?Sd:function(T){return ne(T)&&Fr.call(T,"callee")&&!Id.call(T,"callee")},cc=Array.isArray,Os=function(){return!1};var Md=n&&!n.nodeType&&n,Nd=Md&&!0&&r&&!r.nodeType&&r,Od=Nd&&Nd.exports===Md?D.Buffer:void 0;const Bd=(Od?Od.isBuffer:void 0)||Os;var Vr=/^(?:0|[1-9]\d*)$/;const Bs=function(T,I){var j=typeof T;return!!(I=I??9007199254740991)&&(j=="number"||j!="symbol"&&Vr.test(T))&&T>-1&&T%1==0&&T<I},Pd=function(T){return typeof T=="number"&&T>-1&&T%1==0&&T<=9007199254740991};var He={};He["[object Float32Array]"]=He["[object Float64Array]"]=He["[object Int8Array]"]=He["[object Int16Array]"]=He["[object Int32Array]"]=He["[object Uint8Array]"]=He["[object Uint8ClampedArray]"]=He["[object Uint16Array]"]=He["[object Uint32Array]"]=!0,He["[object Arguments]"]=He["[object Array]"]=He["[object ArrayBuffer]"]=He["[object Boolean]"]=He["[object DataView]"]=He["[object Date]"]=He["[object Error]"]=He["[object Function]"]=He["[object Map]"]=He["[object Number]"]=He["[object Object]"]=He["[object RegExp]"]=He["[object Set]"]=He["[object String]"]=He["[object WeakMap]"]=!1;const zo=function(T){return ne(T)&&Pd(T.length)&&!!He[te(T)]},lc=function(T){return function(I){return T(I)}};var jo=n&&!n.nodeType&&n,lr=jo&&!0&&r&&!r.nodeType&&r,dc=lr&&lr.exports===jo&&B.process;const Fi=function(){try{var T=lr&&lr.require&&lr.require("util").types;return T||dc&&dc.binding&&dc.binding("util")}catch{}}();var dr=Fi&&Fi.isTypedArray;const wg=dr?lc(dr):zo;var Ld=Object.prototype.hasOwnProperty;const uc=function(T,I){var j=cc(T),q=!j&&bg(T),ie=!j&&!q&&Bd(T),we=!j&&!q&&!ie&&wg(T),ce=j||q||ie||we,ke=ce?kg(T.length,String):[],Me=ke.length;for(var Ee in T)!I&&!Ld.call(T,Ee)||ce&&(Ee=="length"||ie&&(Ee=="offset"||Ee=="parent")||we&&(Ee=="buffer"||Ee=="byteLength"||Ee=="byteOffset")||Bs(Ee,Me))||ke.push(Ee);return ke};var _g=Object.prototype;const hc=function(T){var I=T&&T.constructor;return T===(typeof I=="function"&&I.prototype||_g)},fc=_d(Object.keys,Object);var vg=Object.prototype.hasOwnProperty;const zd=function(T){if(!hc(T))return fc(T);var I=[];for(var j in Object(T))vg.call(T,j)&&j!="constructor"&&I.push(j);return I},gc=function(T){return T!=null&&Pd(T.length)&&!Ds(T)},Ps=function(T){return gc(T)?uc(T):zd(T)},Ro=function(T,I){return T&&Ns(I,Ps(I),T)},yg=function(T){var I=[];if(T!=null)for(var j in Object(T))I.push(j);return I};var pc=Object.prototype.hasOwnProperty;const jd=function(T){if(!R(T))return yg(T);var I=hc(T),j=[];for(var q in T)(q!="constructor"||!I&&pc.call(T,q))&&j.push(q);return j},Je=function(T){return gc(T)?uc(T,!0):jd(T)},Ag=function(T,I){return T&&Ns(I,Je(I),T)};var Ls=n&&!n.nodeType&&n,mc=Ls&&!0&&r&&!r.nodeType&&r,Ur=mc&&mc.exports===Ls?D.Buffer:void 0,zs=Ur?Ur.allocUnsafe:void 0;const $r=function(T,I){if(I)return T.slice();var j=T.length,q=zs?zs(j):new T.constructor(j);return T.copy(q),q},Rd=function(T,I){var j=-1,q=T.length;for(I||(I=Array(q));++j<q;)I[j]=T[j];return I},kc=function(T,I){for(var j=-1,q=T==null?0:T.length,ie=0,we=[];++j<q;){var ce=T[j];I(ce,j,T)&&(we[ie++]=ce)}return we},Fd=function(){return[]};var Vd=Object.prototype.propertyIsEnumerable,Ud=Object.getOwnPropertySymbols;const Fo=Ud?function(T){return T==null?[]:(T=Object(T),kc(Ud(T),function(I){return Vd.call(T,I)}))}:Fd,Cg=function(T,I){return Ns(T,Fo(T),I)},$d=function(T,I){for(var j=-1,q=I.length,ie=T.length;++j<q;)T[ie+j]=I[j];return T},Hd=Object.getOwnPropertySymbols?function(T){for(var I=[];T;)$d(I,Fo(T)),T=sc(T);return I}:Fd,js=function(T,I){return Ns(T,Hd(T),I)},Rs=function(T,I,j){var q=I(T);return cc(T)?q:$d(q,j(T))},xg=function(T){return Rs(T,Ps,Fo)},Eg=function(T){return Rs(T,Je,Hd)},bc=sr(D,"DataView"),wc=sr(D,"Promise"),Vi=sr(D,"Set"),_c=sr(D,"WeakMap");var vc="[object Map]",yc="[object Promise]",Ac="[object Set]",Cc="[object WeakMap]",xc="[object DataView]",Wd=ji(bc),Dg=ji(Bo),qd=ji(wc),Sg=ji(Vi),Gd=ji(_c),pi=te;(bc&&pi(new bc(new ArrayBuffer(1)))!=xc||Bo&&pi(new Bo)!=vc||wc&&pi(wc.resolve())!=yc||Vi&&pi(new Vi)!=Ac||_c&&pi(new _c)!=Cc)&&(pi=function(T){var I=te(T),j=I=="[object Object]"?T.constructor:void 0,q=j?ji(j):"";if(q)switch(q){case Wd:return xc;case Dg:return vc;case qd:return yc;case Sg:return Ac;case Gd:return Cc}return I});const Ec=pi;var Yd=Object.prototype.hasOwnProperty;const Zd=function(T){var I=T.length,j=new T.constructor(I);return I&&typeof T[0]=="string"&&Yd.call(T,"index")&&(j.index=T.index,j.input=T.input),j},Kd=D.Uint8Array,Fs=function(T){var I=new T.constructor(T.byteLength);return new Kd(I).set(new Kd(T)),I},Dc=function(T,I){var j=I?Fs(T.buffer):T.buffer;return new T.constructor(j,T.byteOffset,T.byteLength)};var Tg=/\w*$/;const Sc=function(T){var I=new T.constructor(T.source,Tg.exec(T));return I.lastIndex=T.lastIndex,I};var Vs=he?he.prototype:void 0,Us=Vs?Vs.valueOf:void 0;const Tc=function(T){return Us?Object(Us.call(T)):{}},Qd=function(T,I){var j=I?Fs(T.buffer):T.buffer;return new T.constructor(j,T.byteOffset,T.length)},Jd=function(T,I,j){var q=T.constructor;switch(I){case"[object ArrayBuffer]":return Fs(T);case"[object Boolean]":case"[object Date]":return new q(+T);case"[object DataView]":return Dc(T,j);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Qd(T,j);case"[object Map]":case"[object Set]":return new q;case"[object Number]":case"[object String]":return new q(T);case"[object RegExp]":return Sc(T);case"[object Symbol]":return Tc(T)}};var Ic=Object.create;const Xd=function(){function T(){}return function(I){if(!R(I))return{};if(Ic)return Ic(I);T.prototype=I;var j=new T;return T.prototype=void 0,j}}(),eu=function(T){return typeof T.constructor!="function"||hc(T)?{}:Xd(sc(T))},Ig=function(T){return ne(T)&&Ec(T)=="[object Map]"};var tu=Fi&&Fi.isMap;const Mg=tu?lc(tu):Ig,Ng=function(T){return ne(T)&&Ec(T)=="[object Set]"};var nu=Fi&&Fi.isSet;const ur=nu?lc(nu):Ng;var Hr="[object Arguments]",iu="[object Function]",ru="[object Object]",Ze={};Ze[Hr]=Ze["[object Array]"]=Ze["[object ArrayBuffer]"]=Ze["[object DataView]"]=Ze["[object Boolean]"]=Ze["[object Date]"]=Ze["[object Float32Array]"]=Ze["[object Float64Array]"]=Ze["[object Int8Array]"]=Ze["[object Int16Array]"]=Ze["[object Int32Array]"]=Ze["[object Map]"]=Ze["[object Number]"]=Ze[ru]=Ze["[object RegExp]"]=Ze["[object Set]"]=Ze["[object String]"]=Ze["[object Symbol]"]=Ze["[object Uint8Array]"]=Ze["[object Uint8ClampedArray]"]=Ze["[object Uint16Array]"]=Ze["[object Uint32Array]"]=!0,Ze["[object Error]"]=Ze[iu]=Ze["[object WeakMap]"]=!1;const Mc=function T(I,j,q,ie,we,ce){var ke,Me=1&j,Ee=2&j,gn=4&j;if(q&&(ke=we?q(I,ie,we,ce):q(I)),ke!==void 0)return ke;if(!R(I))return I;var Kt=cc(I);if(Kt){if(ke=Zd(I),!Me)return Rd(I,ke)}else{var Bt=Ec(I),Rt=Bt==iu||Bt=="[object GeneratorFunction]";if(Bd(I))return $r(I,Me);if(Bt==ru||Bt==Hr||Rt&&!we){if(ke=Ee||Rt?{}:eu(I),!Me)return Ee?js(I,Ag(ke,I)):Cg(I,Ro(ke,I))}else{if(!Ze[Bt])return we?I:{};ke=Jd(I,Bt,Me)}}ce||(ce=new cr);var ei=ce.get(I);if(ei)return ei;ce.set(I,ke),ur(I)?I.forEach(function(tt){ke.add(T(tt,j,q,tt,I,ce))}):Mg(I)&&I.forEach(function(tt,pn){ke.set(pn,T(tt,j,q,pn,I,ce))});var jn=Kt?void 0:(gn?Ee?Eg:xg:Ee?Je:Ps)(I);return Lo(jn||I,function(tt,pn){jn&&(tt=I[pn=tt]),Dd(ke,pn,T(tt,j,q,pn,I,ce))}),ke},Og=function(T,I){return Mc(T,5,I=typeof I=="function"?I:void 0)};class Nc extends x{constructor(I,j={}){super(j),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=oc(this._save.bind(this),typeof j.saveInterval=="number"?j.saveInterval:5e3),I&&(this._creator=(q,ie)=>I.create(q,ie)),this._destructor=q=>q.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(I){this._creator=I}setDestructor(I){this._destructor=I}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(I=>{console.error("An error happened during the editor destroying.",I)}).then(()=>{const I={},j=[],q=this._config.rootsAttributes||{},ie={};for(const[ce,ke]of Object.entries(this._data.roots))ke.isLoaded?(I[ce]="",ie[ce]=q[ce]||{}):j.push(ce);const we={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:j,rootsAttributes:ie,_watchdogInitialData:this._data};return delete we.initialData,we.extraPlugins.push(Bg),this._initUsingData?this.create(I,we,we.context):Cd(this._elementOrData)?this.create(this._elementOrData,we,we.context):this.create(this._editables,we,we.context)}).then(()=>{this._fire("restart")})}create(I=this._elementOrData,j=this._config,q){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=I,this._initUsingData=typeof I=="string"||Object.keys(I).length>0&&typeof Object.values(I)[0]=="string",this._config=this._cloneEditorConfiguration(j)||{},this._config.context=q,this._creator(I,this._config))).then(ie=>{this._editor=ie,ie.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=ie.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const I=this._editor;return this._editor=null,I.model.document.off("change:data",this._throttledSave),this._destructor(I)})}_save(){const I=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=I}catch(j){console.error(j,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(I){this._excludedProps=I}_getData(){const I=this._editor,j=I.model.document.roots.filter(ke=>ke.isAttached()&&ke.rootName!="$graveyard"),{plugins:q}=I,ie=q.has("CommentsRepository")&&q.get("CommentsRepository"),we=q.has("TrackChanges")&&q.get("TrackChanges"),ce={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};j.forEach(ke=>{ce.roots[ke.rootName]={content:JSON.stringify(Array.from(ke.getChildren())),attributes:JSON.stringify(Array.from(ke.getAttributes())),isLoaded:ke._isLoaded}});for(const ke of I.model.markers)ke._affectsData&&(ce.markers[ke.name]={rangeJSON:ke.getRange().toJSON(),usingOperation:ke._managedUsingOperations,affectsData:ke._affectsData});return ie&&(ce.commentThreads=JSON.stringify(ie.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),we&&(ce.suggestions=JSON.stringify(we.getSuggestions({toJSON:!0,skipNotAttached:!0}))),ce}_getEditables(){const I={};for(const j of this.editor.model.document.getRootNames()){const q=this.editor.ui.getEditableElement(j);q&&(I[j]=q)}return I}_isErrorComingFromThisItem(I){return P(this._editor,I.context,this._excludedProps)}_cloneEditorConfiguration(I){return Og(I,(j,q)=>Cd(j)||q==="context"?j:void 0)}}class Bg{constructor(I){this.editor=I,this._data=I.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",I=>{I.stop(),this.editor.model.enqueueChange({isUndoable:!1},j=>{this._restoreCollaborationData(),this._restoreEditorData(j)}),this.editor.data.fire("ready")},{priority:999})}_createNode(I,j){if("name"in j){const q=I.createElement(j.name,j.attributes);if(j.children)for(const ie of j.children)q._appendChild(this._createNode(I,ie));return q}return I.createText(j.data,j.attributes)}_restoreEditorData(I){const j=this.editor;Object.entries(this._data.roots).forEach(([q,{content:ie,attributes:we}])=>{const ce=JSON.parse(ie),ke=JSON.parse(we),Me=j.model.document.getRoot(q);for(const[Ee,gn]of ke)I.setAttribute(Ee,gn,Me);for(const Ee of ce){const gn=this._createNode(I,Ee);I.insert(gn,Me,"end")}}),Object.entries(this._data.markers).forEach(([q,ie])=>{const{document:we}=j.model,{rangeJSON:{start:ce,end:ke},...Me}=ie,Ee=we.getRoot(ce.root),gn=I.createPositionFromPath(Ee,ce.path,ce.stickiness),Kt=I.createPositionFromPath(Ee,ke.path,ke.stickiness),Bt=I.createRange(gn,Kt);I.addMarker(q,{range:Bt,...Me})})}_restoreCollaborationData(){const I=JSON.parse(this._data.commentThreads),j=JSON.parse(this._data.suggestions);I.forEach(q=>{const ie=this.editor.config.get("collaboration.channelId"),we=this.editor.plugins.get("CommentsRepository");we.hasCommentThread(q.threadId)&&we.getCommentThread(q.threadId).remove(),we.addCommentThread({channelId:ie,...q})}),j.forEach(q=>{const ie=this.editor.plugins.get("TrackChangesEditing");ie.hasSuggestion(q.id)?ie.getSuggestion(q.id).attributes=q.attributes:ie.addSuggestionData(q)})}}const Wr=Symbol("MainQueueId");class $s extends x{constructor(I,j={}){super(j),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Pg,this._watchdogConfig=j,this._creator=q=>I.create(q),this._destructor=q=>q.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(I){this._creator=I}setDestructor(I){this._destructor=I}get context(){return this._context}create(I={}){return this._actionQueues.enqueue(Wr,()=>(this._contextConfig=I,this._create()))}getItem(I){return this._getWatchdog(I)._item}getItemState(I){return this._getWatchdog(I).state}add(I){const j=Oc(I);return Promise.all(j.map(q=>this._actionQueues.enqueue(q.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let ie;if(this._watchdogs.has(q.id))throw new Error(`Item with the given id is already added: '${q.id}'.`);if(q.type==="editor")return ie=new Nc(null,this._watchdogConfig),ie.setCreator(q.creator),ie._setExcludedProperties(this._contextProps),q.destructor&&ie.setDestructor(q.destructor),this._watchdogs.set(q.id,ie),ie.on("error",(we,{error:ce,causesRestart:ke})=>{this._fire("itemError",{itemId:q.id,error:ce}),ke&&this._actionQueues.enqueue(q.id,()=>new Promise(Me=>{const Ee=()=>{ie.off("restart",Ee),this._fire("itemRestart",{itemId:q.id}),Me()};ie.on("restart",Ee)}))}),ie.create(q.sourceElementOrData,q.config,this._context);throw new Error(`Not supported item type: '${q.type}'.`)})))}remove(I){const j=Oc(I);return Promise.all(j.map(q=>this._actionQueues.enqueue(q,()=>{const ie=this._getWatchdog(q);return this._watchdogs.delete(q),ie.destroy()})))}destroy(){return this._actionQueues.enqueue(Wr,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Wr,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(I=>{console.error("An error happened during destroying the context or items.",I)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(I=>(this._context=I,this._contextProps=S(this._context),Promise.all(Array.from(this._watchdogs.values()).map(j=>(j._setExcludedProperties(this._contextProps),j.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const I=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(j=>j.destroy())).then(()=>this._destructor(I))})}_getWatchdog(I){const j=this._watchdogs.get(I);if(!j)throw new Error(`Item with the given id was not registered: ${I}.`);return j}_isErrorComingFromThisItem(I){for(const j of this._watchdogs.values())if(j._isErrorComingFromThisItem(I))return!1;return P(this._context,I.context)}}class Pg{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(I){this._onEmptyCallbacks.push(I)}enqueue(I,j){const q=I===Wr;this._activeActions++,this._queues.get(I)||this._queues.set(I,Promise.resolve());const ie=(q?Promise.all(this._queues.values()):Promise.all([this._queues.get(Wr),this._queues.get(I)])).then(j),we=ie.catch(()=>{});return this._queues.set(I,we),ie.finally(()=>{this._activeActions--,this._queues.get(I)===we&&this._activeActions===0&&this._onEmptyCallbacks.forEach(ce=>ce())})}}function Oc(T){return Array.isArray(T)?T:[T]}const Bc=w().createContext("contextWatchdog");class Hs extends w().Component{constructor(I,j){super(I,j),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(I){return this._shouldComponentUpdate(I)}async _shouldComponentUpdate(I){return I.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(I.config)),I.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(I.config),!0):this.props.children!==I.children}render(){return w().createElement(Bc.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(I){this.contextWatchdog=new $s(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(j,q)=>{this.props.onError(q.error,{phase:"runtime",willContextRestart:q.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(I).catch(j=>{this.props.onError(j,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Hs.defaultProps={isLayoutReady:!0,onError:(T,I)=>console.error(T,I)},Hs.propTypes={id:_().string,isLayoutReady:_().bool,context:_().func,watchdogConfig:_().object,config:_().object,onReady:_().func,onError:_().func};const Pc="Lock from React integration (@ckeditor/ckeditor5-react)";class hr extends w().Component{constructor(I){super(I),this.editorDestructionInProgress=null,this.domContainer=w().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:j}=window;if(j){const[q]=j.split(".").map(Number);q<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(I){return!!this.editor&&(I.id!==this.props.id||I.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(I)&&this.editor.data.set(I.data),"disabled"in I&&(I.disabled?this.editor.enableReadOnlyMode(Pc):this.editor.disableReadOnlyMode(Pc)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return w().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof $s?this.watchdog=new ou(this.context):this.watchdog=new hr._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((I,j)=>this._createEditor(I,j)),this.watchdog.on("error",(I,{error:j,causesRestart:q})=>{(this.props.onError||console.error)(j,{phase:"runtime",willEditorRestart:q})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(I=>{(this.props.onError||console.error)(I,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(I,j){return this.props.editor.create(I,j).then(q=>{"disabled"in this.props&&this.props.disabled&&q.enableReadOnlyMode(Pc);const ie=q.model.document,we=q.editing.view.document;return ie.on("change:data",ce=>{this.props.onChange&&this.props.onChange(ce,q)}),we.on("focus",ce=>{this.props.onFocus&&this.props.onFocus(ce,q)}),we.on("blur",ce=>{this.props.onBlur&&this.props.onBlur(ce,q)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(q)}),q})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(I=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,I()):this.instance?(await this.instance.destroy(),this.instance=null,I()):void I())})}_shouldUpdateEditor(I){return this.props.data!==I.data&&this.editor.data.get()!==I.data}_getConfig(){const I=this.props.config||{};return this.props.data&&I.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...I,initialData:I.initialData||this.props.data||""}}}hr.contextType=Bc,hr.propTypes={editor:_().func.isRequired,data:_().string,config:_().object,disableWatchdog:_().bool,watchdogConfig:_().object,onChange:_().func,onReady:_().func,onFocus:_().func,onBlur:_().func,onError:_().func,disabled:_().bool,id:_().any},hr._EditorWatchdog=Nc;class ou{constructor(I){this._contextWatchdog=I,this._id=function(){const j=4294967296*Math.random()>>>0,q=4294967296*Math.random()>>>0,ie=4294967296*Math.random()>>>0,we=4294967296*Math.random()>>>0;return"e"+A[j>>0&255]+A[j>>8&255]+A[j>>16&255]+A[j>>24&255]+A[q>>0&255]+A[q>>8&255]+A[q>>16&255]+A[q>>24&255]+A[ie>>0&255]+A[ie>>8&255]+A[ie>>16&255]+A[ie>>24&255]+A[we>>0&255]+A[we>>8&255]+A[we>>16&255]+A[we>>24&255]}()}setCreator(I){this._creator=I}create(I,j){return this._contextWatchdog.add({sourceElementOrData:I,config:j,creator:this._creator,id:this._id,type:"editor"})}on(I,j){this._contextWatchdog.on("itemError",(q,{itemId:ie,error:we})=>{ie===this._id&&j(null,{error:we,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const Ws="Lock from React integration (@ckeditor/ckeditor5-react)",Lg=T=>{let I=null;const j=(0,k.useRef)(null),q=(0,k.useContext)(Bc),[ie,we]=(0,k.useState)(null),[ce,ke]=(0,k.useState)(T.data),[Me,Ee]=(0,k.useState)(T.rootsAttributes||{}),[gn,Kt]=(0,k.useState)([]),Bt=(0,k.useRef)(!0),Rt=(0,k.useRef)(null),ei=w().createElement("div",{ref:Rt});(0,k.useEffect)(()=>((async()=>(await j.current,T.isLayoutReady!==!1&&mn()))(),()=>{Ft().then(()=>{j.current=null})}),[T.isLayoutReady]),(0,k.useEffect)(()=>{ie&&(T.disabled?ie.enableReadOnlyMode(Ws):ie.disableReadOnlyMode(Ws))},[T.disabled]),(0,k.useEffect)(()=>{const De=Rt.current;if(ie&&!j.current){const nt=ie.getFullData();ke({...nt}),Ee({...ie.getRootsAttributes()}),Kt([...Object.keys(nt).map(Oe=>tt(ie,Oe))]),De&&De.appendChild(ie.ui.view.toolbar.element)}return()=>{De&&De.firstChild&&De.removeChild(De.firstChild)}},[ie&&ie.id]);const jn=()=>{const De=T.config||{};return T.data&&De.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...De,rootsAttributes:Me}},tt=(De,nt)=>w().createElement("div",{id:nt,key:nt,ref:Oe=>{if(Oe){const Rn=De.ui.view.createEditable(nt,Oe);De.ui.addEditable(Rn),De.editing.view.forceRender()}}}),pn=(De,nt)=>T.editor.create(De,nt).then(Oe=>{T.disabled&&T.disabled&&Oe.enableReadOnlyMode(Ws);const Rn=Oe.model.document,Be=Oe.editing.view.document;return Rn.on("change:data",mi=>((rn,kn)=>{const Vt=rn.model.document,on={},At={};Vt.differ.getChanges().forEach(lt=>{let Pt;if(Pt=lt.type=="insert"||lt.type=="remove"?lt.position.root:lt.range.root,!Pt.isAttached())return;const{rootName:fr}=Pt;on[fr]=rn.getData({rootName:fr})}),Vt.differ.getChangedRoots().forEach(lt=>{if(lt.state)return void(on[lt.name]!==void 0&&delete on[lt.name]);const Pt=lt.name;At[Pt]=rn.getRootAttributes(Pt)}),Object.keys(on).length&&ke(lt=>({...lt,...on})),Object.keys(At).length&&Ee(lt=>({...lt,...At})),T.onChange&&T.onChange(kn,rn)})(Oe,mi)),Oe.on("addRoot",(mi,rn)=>((kn,Vt,on)=>{const At=on.rootName,lt=tt(kn,At);ke(Pt=>({...Pt,[At]:kn.getData({rootName:At})})),Ee(Pt=>({...Pt,[At]:kn.getRootAttributes(At)})),Kt(Pt=>[...Pt,lt])})(Oe,0,rn)),Oe.on("detachRoot",(mi,rn)=>((kn,Vt,on)=>{const At=on.rootName;Kt(lt=>lt.filter(Pt=>Pt.props.id!==At)),ke(lt=>{const{[At]:Pt,...fr}=lt;return{...fr}}),Ee(lt=>{const{[At]:Pt,...fr}=lt;return{...fr}}),kn.detachEditable(on)})(Oe,0,rn)),Be.on("focus",mi=>{T.onFocus&&T.onFocus(mi,Oe)}),Be.on("blur",mi=>{T.onBlur&&T.onBlur(mi,Oe)}),we(Oe),T.onReady&&T.onReady(Oe),Oe}),Ft=async()=>{we(null),ke({}),Ee({}),Kt([]),j.current=new Promise(De=>{setTimeout(async()=>I?(await I.destroy(),I=null,De()):ie?(await ie.destroy(),De()):void De())})},mn=async()=>{T.disableWatchdog?await pn(T.data,jn()):I||(I=q instanceof $s?new ou(q):new Nc(T.editor,T.watchdogConfig),I.setCreator((De,nt)=>pn(De,nt)),I.on("error",(De,{error:nt,causesRestart:Oe})=>{(T.onError||console.error)(nt,{phase:"runtime",willEditorRestart:Oe})}),await I.create(ce,jn()).catch(De=>{(T.onError||console.error)(De,{phase:"initialization",willEditorRestart:!1})}))};(0,k.useEffect)(()=>{if(ie&&Bt.current){Bt.current=!1;const De=Object.keys(ce),nt=Object.keys(Me);if(!De.every(Vt=>nt.includes(Vt)))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const Oe=ie.getFullData(),Rn=ie.getRootsAttributes(),{addedKeys:Be,removedKeys:mi}=ye(Oe,ce||{}),rn=De.some(Vt=>Oe[Vt]!==void 0&&JSON.stringify(Oe[Vt])!==JSON.stringify(ce[Vt])),kn=nt.filter(Vt=>JSON.stringify(Rn[Vt])!==JSON.stringify(Me[Vt]));ie.model.change(Vt=>{bt(Be),qs(mi),rn&&su(),kn.length&&au(Vt,kn)})}},[ce,Me]);const ye=(De,nt)=>{const Oe=Object.keys(De),Rn=Object.keys(nt);return{addedKeys:Rn.filter(Be=>!Oe.includes(Be)),removedKeys:Oe.filter(Be=>!Rn.includes(Be))}},bt=De=>{De.forEach(nt=>{ie.addRoot(nt,{data:ce[nt]||"",attributes:(Me==null?void 0:Me[nt])||{},isUndoable:!0})})},qs=De=>{De.forEach(nt=>{ie.detachRoot(nt,!0)})},su=()=>{ie.data.set(ce,{suppressErrorInCollaboration:!0})},au=(De,nt)=>{nt.forEach(Oe=>{Object.keys(Me[Oe]).forEach(Rn=>{ie.registerRootAttribute(Rn)}),De.clearAttributes(ie.model.document.getRoot(Oe)),De.setAttributes(Me[Oe],ie.model.document.getRoot(Oe))})},cu=(0,k.useCallback)(De=>{Bt.current=!0,ke(De)},[ke]),Ne=(0,k.useCallback)(De=>{Bt.current=!0,Ee(De)},[Ee]);return{editor:ie,editableElements:gn,toolbarElement:ei,data:ce,setData:cu,attributes:Me,setAttributes:Ne}}})(),g})())})(yf,yf.exports);var p7=yf.exports,vt={exports:{}},Xt=vt.exports;(function(r){const n=r.en=r.en||{};n.dictionary=Object.assign(n.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align center":"Align center","Align left":"Align left","Align right":"Align right",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Code:"Code",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Dim grey":"Dim grey",Disc:"Disc",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",HEX:"HEX","Horizontal line":"Horizontal line","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block",Italic:"Italic",Justify:"Justify","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",Next:"Next","No results found":"No results found","No searchable items":"No searchable items","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0","Right aligned image":"Right aligned image",Save:"Save","Select all":"Select all","Show more items":"Show more items","Side image":"Side image",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Subscript:"Subscript",Superscript:"Superscript","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(r,n){typeof Xt=="object"&&typeof vt=="object"?vt.exports=n():typeof define=="function"&&define.amd?define([],n):typeof Xt=="object"?Xt.InlineEditor=n():r.InlineEditor=n()}(self,()=>(()=>{var r={8168:(u,f,g)=>{const k=g(8874),w={};for(const _ of Object.keys(k))w[k[_]]=_;const v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};u.exports=v;for(const _ of Object.keys(v)){if(!("channels"in v[_]))throw new Error("missing channels property: "+_);if(!("labels"in v[_]))throw new Error("missing channel labels property: "+_);if(v[_].labels.length!==v[_].channels)throw new Error("channel and label counts mismatch: "+_);const{channels:A,labels:x}=v[_];delete v[_].channels,delete v[_].labels,Object.defineProperty(v[_],"channels",{value:A}),Object.defineProperty(v[_],"labels",{value:x})}v.rgb.hsl=function(_){const A=_[0]/255,x=_[1]/255,S=_[2]/255,N=Math.min(A,x,S),P=Math.max(A,x,S),R=P-N;let B,L;P===N?B=0:A===P?B=(x-S)/R:x===P?B=2+(S-A)/R:S===P&&(B=4+(A-x)/R),B=Math.min(60*B,360),B<0&&(B+=360);const D=(N+P)/2;return L=P===N?0:D<=.5?R/(P+N):R/(2-P-N),[B,100*L,100*D]},v.rgb.hsv=function(_){let A,x,S,N,P;const R=_[0]/255,B=_[1]/255,L=_[2]/255,D=Math.max(R,B,L),W=D-Math.min(R,B,L),K=function(ee){return(D-ee)/6/W+.5};return W===0?(N=0,P=0):(P=W/D,A=K(R),x=K(B),S=K(L),R===D?N=S-x:B===D?N=.3333333333333333+A-S:L===D&&(N=.6666666666666666+x-A),N<0?N+=1:N>1&&(N-=1)),[360*N,100*P,100*D]},v.rgb.hwb=function(_){const A=_[0],x=_[1];let S=_[2];const N=v.rgb.hsl(_)[0],P=1/255*Math.min(A,Math.min(x,S));return S=1-.00392156862745098*Math.max(A,Math.max(x,S)),[N,100*P,100*S]},v.rgb.cmyk=function(_){const A=_[0]/255,x=_[1]/255,S=_[2]/255,N=Math.min(1-A,1-x,1-S);return[100*((1-A-N)/(1-N)||0),100*((1-x-N)/(1-N)||0),100*((1-S-N)/(1-N)||0),100*N]},v.rgb.keyword=function(_){const A=w[_];if(A)return A;let x,S=1/0;for(const R of Object.keys(k)){const B=k[R],L=(P=B,((N=_)[0]-P[0])**2+(N[1]-P[1])**2+(N[2]-P[2])**2);L<S&&(S=L,x=R)}var N,P;return x},v.keyword.rgb=function(_){return k[_]},v.rgb.xyz=function(_){let A=_[0]/255,x=_[1]/255,S=_[2]/255;return A=A>.04045?((A+.055)/1.055)**2.4:A/12.92,x=x>.04045?((x+.055)/1.055)**2.4:x/12.92,S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,[100*(.4124*A+.3576*x+.1805*S),100*(.2126*A+.7152*x+.0722*S),100*(.0193*A+.1192*x+.9505*S)]},v.rgb.lab=function(_){const A=v.rgb.xyz(_);let x=A[0],S=A[1],N=A[2];return x/=95.047,S/=100,N/=108.883,x=x>.008856?x**.3333333333333333:7.787*x+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,[116*S-16,500*(x-S),200*(S-N)]},v.hsl.rgb=function(_){const A=_[0]/360,x=_[1]/100,S=_[2]/100;let N,P,R;if(x===0)return R=255*S,[R,R,R];N=S<.5?S*(1+x):S+x-S*x;const B=2*S-N,L=[0,0,0];for(let D=0;D<3;D++)P=A+.3333333333333333*-(D-1),P<0&&P++,P>1&&P--,R=6*P<1?B+6*(N-B)*P:2*P<1?N:3*P<2?B+(N-B)*(.6666666666666666-P)*6:B,L[D]=255*R;return L},v.hsl.hsv=function(_){const A=_[0];let x=_[1]/100,S=_[2]/100,N=x;const P=Math.max(S,.01);return S*=2,x*=S<=1?S:2-S,N*=P<=1?P:2-P,[A,100*(S===0?2*N/(P+N):2*x/(S+x)),100*((S+x)/2)]},v.hsv.rgb=function(_){const A=_[0]/60,x=_[1]/100;let S=_[2]/100;const N=Math.floor(A)%6,P=A-Math.floor(A),R=255*S*(1-x),B=255*S*(1-x*P),L=255*S*(1-x*(1-P));switch(S*=255,N){case 0:return[S,L,R];case 1:return[B,S,R];case 2:return[R,S,L];case 3:return[R,B,S];case 4:return[L,R,S];case 5:return[S,R,B]}},v.hsv.hsl=function(_){const A=_[0],x=_[1]/100,S=_[2]/100,N=Math.max(S,.01);let P,R;R=(2-x)*S;const B=(2-x)*N;return P=x*N,P/=B<=1?B:2-B,P=P||0,R/=2,[A,100*P,100*R]},v.hwb.rgb=function(_){const A=_[0]/360;let x=_[1]/100,S=_[2]/100;const N=x+S;let P;N>1&&(x/=N,S/=N);const R=Math.floor(6*A),B=1-S;P=6*A-R,1&R&&(P=1-P);const L=x+P*(B-x);let D,W,K;switch(R){default:case 6:case 0:D=B,W=L,K=x;break;case 1:D=L,W=B,K=x;break;case 2:D=x,W=B,K=L;break;case 3:D=x,W=L,K=B;break;case 4:D=L,W=x,K=B;break;case 5:D=B,W=x,K=L}return[255*D,255*W,255*K]},v.cmyk.rgb=function(_){const A=_[0]/100,x=_[1]/100,S=_[2]/100,N=_[3]/100;return[255*(1-Math.min(1,A*(1-N)+N)),255*(1-Math.min(1,x*(1-N)+N)),255*(1-Math.min(1,S*(1-N)+N))]},v.xyz.rgb=function(_){const A=_[0]/100,x=_[1]/100,S=_[2]/100;let N,P,R;return N=3.2406*A+-1.5372*x+-.4986*S,P=-.9689*A+1.8758*x+.0415*S,R=.0557*A+-.204*x+1.057*S,N=N>.0031308?1.055*N**.4166666666666667-.055:12.92*N,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,N=Math.min(Math.max(0,N),1),P=Math.min(Math.max(0,P),1),R=Math.min(Math.max(0,R),1),[255*N,255*P,255*R]},v.xyz.lab=function(_){let A=_[0],x=_[1],S=_[2];return A/=95.047,x/=100,S/=108.883,A=A>.008856?A**.3333333333333333:7.787*A+.13793103448275862,x=x>.008856?x**.3333333333333333:7.787*x+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,[116*x-16,500*(A-x),200*(x-S)]},v.lab.xyz=function(_){let A,x,S;x=(_[0]+16)/116,A=_[1]/500+x,S=x-_[2]/200;const N=x**3,P=A**3,R=S**3;return x=N>.008856?N:(x-.13793103448275862)/7.787,A=P>.008856?P:(A-.13793103448275862)/7.787,S=R>.008856?R:(S-.13793103448275862)/7.787,A*=95.047,x*=100,S*=108.883,[A,x,S]},v.lab.lch=function(_){const A=_[0],x=_[1],S=_[2];let N;return N=360*Math.atan2(S,x)/2/Math.PI,N<0&&(N+=360),[A,Math.sqrt(x*x+S*S),N]},v.lch.lab=function(_){const A=_[0],x=_[1],S=_[2]/360*2*Math.PI;return[A,x*Math.cos(S),x*Math.sin(S)]},v.rgb.ansi16=function(_,A=null){const[x,S,N]=_;let P=A===null?v.rgb.hsv(_)[2]:A;if(P=Math.round(P/50),P===0)return 30;let R=30+(Math.round(N/255)<<2|Math.round(S/255)<<1|Math.round(x/255));return P===2&&(R+=60),R},v.hsv.ansi16=function(_){return v.rgb.ansi16(v.hsv.rgb(_),_[2])},v.rgb.ansi256=function(_){const A=_[0],x=_[1],S=_[2];return A===x&&x===S?A<8?16:A>248?231:Math.round((A-8)/247*24)+232:16+36*Math.round(A/255*5)+6*Math.round(x/255*5)+Math.round(S/255*5)},v.ansi16.rgb=function(_){let A=_%10;if(A===0||A===7)return _>50&&(A+=3.5),A=A/10.5*255,[A,A,A];const x=.5*(1+~~(_>50));return[(1&A)*x*255,(A>>1&1)*x*255,(A>>2&1)*x*255]},v.ansi256.rgb=function(_){if(_>=232){const x=10*(_-232)+8;return[x,x,x]}let A;return _-=16,[Math.floor(_/36)/5*255,Math.floor((A=_%36)/6)/5*255,A%6/5*255]},v.rgb.hex=function(_){const A=(((255&Math.round(_[0]))<<16)+((255&Math.round(_[1]))<<8)+(255&Math.round(_[2]))).toString(16).toUpperCase();return"000000".substring(A.length)+A},v.hex.rgb=function(_){const A=_.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!A)return[0,0,0];let x=A[0];A[0].length===3&&(x=x.split("").map(N=>N+N).join(""));const S=parseInt(x,16);return[S>>16&255,S>>8&255,255&S]},v.rgb.hcg=function(_){const A=_[0]/255,x=_[1]/255,S=_[2]/255,N=Math.max(Math.max(A,x),S),P=Math.min(Math.min(A,x),S),R=N-P;let B,L;return B=R<1?P/(1-R):0,L=R<=0?0:N===A?(x-S)/R%6:N===x?2+(S-A)/R:4+(A-x)/R,L/=6,L%=1,[360*L,100*R,100*B]},v.hsl.hcg=function(_){const A=_[1]/100,x=_[2]/100,S=x<.5?2*A*x:2*A*(1-x);let N=0;return S<1&&(N=(x-.5*S)/(1-S)),[_[0],100*S,100*N]},v.hsv.hcg=function(_){const A=_[1]/100,x=_[2]/100,S=A*x;let N=0;return S<1&&(N=(x-S)/(1-S)),[_[0],100*S,100*N]},v.hcg.rgb=function(_){const A=_[0]/360,x=_[1]/100,S=_[2]/100;if(x===0)return[255*S,255*S,255*S];const N=[0,0,0],P=A%1*6,R=P%1,B=1-R;let L=0;switch(Math.floor(P)){case 0:N[0]=1,N[1]=R,N[2]=0;break;case 1:N[0]=B,N[1]=1,N[2]=0;break;case 2:N[0]=0,N[1]=1,N[2]=R;break;case 3:N[0]=0,N[1]=B,N[2]=1;break;case 4:N[0]=R,N[1]=0,N[2]=1;break;default:N[0]=1,N[1]=0,N[2]=B}return L=(1-x)*S,[255*(x*N[0]+L),255*(x*N[1]+L),255*(x*N[2]+L)]},v.hcg.hsv=function(_){const A=_[1]/100,x=A+_[2]/100*(1-A);let S=0;return x>0&&(S=A/x),[_[0],100*S,100*x]},v.hcg.hsl=function(_){const A=_[1]/100,x=_[2]/100*(1-A)+.5*A;let S=0;return x>0&&x<.5?S=A/(2*x):x>=.5&&x<1&&(S=A/(2*(1-x))),[_[0],100*S,100*x]},v.hcg.hwb=function(_){const A=_[1]/100,x=A+_[2]/100*(1-A);return[_[0],100*(x-A),100*(1-x)]},v.hwb.hcg=function(_){const A=_[1]/100,x=1-_[2]/100,S=x-A;let N=0;return S<1&&(N=(x-S)/(1-S)),[_[0],100*S,100*N]},v.apple.rgb=function(_){return[_[0]/65535*255,_[1]/65535*255,_[2]/65535*255]},v.rgb.apple=function(_){return[_[0]/255*65535,_[1]/255*65535,_[2]/255*65535]},v.gray.rgb=function(_){return[_[0]/100*255,_[0]/100*255,_[0]/100*255]},v.gray.hsl=function(_){return[0,0,_[0]]},v.gray.hsv=v.gray.hsl,v.gray.hwb=function(_){return[0,100,_[0]]},v.gray.cmyk=function(_){return[0,0,0,_[0]]},v.gray.lab=function(_){return[_[0],0,0]},v.gray.hex=function(_){const A=255&Math.round(_[0]/100*255),x=((A<<16)+(A<<8)+A).toString(16).toUpperCase();return"000000".substring(x.length)+x},v.rgb.gray=function(_){return[(_[0]+_[1]+_[2])/3/255*100]}},2085:(u,f,g)=>{const k=g(8168),w=g(4111),v={};Object.keys(k).forEach(_=>{v[_]={},Object.defineProperty(v[_],"channels",{value:k[_].channels}),Object.defineProperty(v[_],"labels",{value:k[_].labels});const A=w(_);Object.keys(A).forEach(x=>{const S=A[x];v[_][x]=function(N){const P=function(...R){const B=R[0];if(B==null)return B;B.length>1&&(R=B);const L=N(R);if(typeof L=="object")for(let D=L.length,W=0;W<D;W++)L[W]=Math.round(L[W]);return L};return"conversion"in N&&(P.conversion=N.conversion),P}(S),v[_][x].raw=function(N){const P=function(...R){const B=R[0];return B==null?B:(B.length>1&&(R=B),N(R))};return"conversion"in N&&(P.conversion=N.conversion),P}(S)})}),u.exports=v},4111:(u,f,g)=>{const k=g(8168);function w(A){const x=function(){const N={},P=Object.keys(k);for(let R=P.length,B=0;B<R;B++)N[P[B]]={distance:-1,parent:null};return N}(),S=[A];for(x[A].distance=0;S.length;){const N=S.pop(),P=Object.keys(k[N]);for(let R=P.length,B=0;B<R;B++){const L=P[B],D=x[L];D.distance===-1&&(D.distance=x[N].distance+1,D.parent=N,S.unshift(L))}}return x}function v(A,x){return function(S){return x(A(S))}}function _(A,x){const S=[x[A].parent,A];let N=k[x[A].parent][A],P=x[A].parent;for(;x[P].parent;)S.unshift(x[P].parent),N=v(k[x[P].parent][P],N),P=x[P].parent;return N.conversion=S,N}u.exports=function(A){const x=w(A),S={},N=Object.keys(x);for(let P=N.length,R=0;R<P;R++){const B=N[R];x[B].parent!==null&&(S[B]=_(B,x))}return S}},8874:u=>{u.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},5363:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},3789:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},799:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},7372:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},5037:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const A=_},4249:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},9893:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{background:#dedede;border:0;height:4px;margin:15px 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-horizontal-line/theme/horizontalline.css"],names:[],mappings:"AAMA,yCAEC,iBACD,CAEA,eAGC,kBAA2B,CAC3B,QAAS,CAFT,UAAW,CADX,aAID",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2430:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2423:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},8879:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsert.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD,CCfA,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
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
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const A=_},8340:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2400:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},3534:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},1547:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},6618:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2926:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},5269:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},3925:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},7536:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CCtDD,oCD0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CCzED",sourcesContent:[`/*
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
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=_},4874:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4330:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkimage.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const A=_},5782:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`],sourceRoot:""}]);const A=_},3190:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const A=_},4784:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},9938:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2591:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/liststyles.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},9292:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},8705:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},1922:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},7138:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4029:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-modal)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4971:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},7258:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4923:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4257:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},6306:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},5062:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},1883:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4791:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2704:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},9847:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},1874:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header .ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BASD,CAPC,6BACC,qCACD,CAEA,8CACC,WACD,CCXD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAkBD,CAbC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,eACD",sourcesContent:[`/*
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

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const A=_},4746:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},1977:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2470:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},3525:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2933:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,4WAGE,+HAYF,CAfA,4WAOE,wIAQF,CAfA,wVAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

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
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
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
`],sourceRoot:""}]);const A=_},179:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item .ck-button{text-align:left}[dir=rtl] .ck.ck-list__item .ck-button{text-align:right}.ck.ck-list__item .ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,oJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cAgED,CA9DC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UA6CD,CA/CA,uCAME,eAyCF,CA/CA,uCAUE,gBAqCF,CA/CA,6BAgBC,qCA+BD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

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
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

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

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
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
`],sourceRoot:""}]);const A=_},4460:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},7592:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},6356:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},3707:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},6603:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CCvBD,oCDMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CCpEH",sourcesContent:[`/*
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
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const A=_},9332:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/search/search.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
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

`],sourceRoot:""}]);const A=_},6446:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
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

`],sourceRoot:""}]);const A=_},5224:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4176:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4768:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},3888:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,qCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CACrB,wCAAyC,CAFzC,wBAGD,CApBD,gCAuBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},5167:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_poweredby.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CC3GhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJ2GD,CIrGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
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
`],sourceRoot:""}]);const A=_},7153:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},4875:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},2347:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const A=_},5948:(u,f,g)=>{g.d(f,{Z:()=>A});var k=g(4015),w=g.n(k),v=g(3645),_=g.n(v)()(w());_.push([u.id,".ck-editor.ck-plugin-full-screen{align-items:center;background-color:#fff;display:flex;flex-direction:column;height:100vh;left:0;position:fixed;top:0;width:100%;z-index:100}.ck-editor.ck-plugin-full-screen .ck-editor__main,.ck-editor.ck-plugin-full-screen .ck-editor__top{max-width:1000px;width:100%}.ck-editor.ck-plugin-full-screen .ck-editor__top{margin-top:2em}.ck-editor.ck-plugin-full-screen .ck-editor__main{flex-grow:1;margin-bottom:2em;overflow-y:hidden}.ck-editor.ck-plugin-full-screen .ck-source-editing-area{height:100%}.ck-editor.ck-plugin-full-screen .ck-source-editing-area textarea{overflow-y:scroll}","",{version:3,sources:["webpack://./plugins/fullscreen/theme/fullscreen.css"],names:[],mappings:"AAAA,iCASE,kBAAmB,CACnB,qBAAsB,CAHtB,YAAa,CACb,qBAAsB,CAFtB,YAAa,CAHb,MAAO,CAFP,cAAe,CACf,KAAM,CAGN,UAAW,CADX,WAOF,CAEA,mGAGE,gBAAiB,CADjB,UAEF,CAEA,iDACE,cACF,CAEA,kDAEE,WAAY,CAEZ,iBAAkB,CADlB,iBAEF,CAGA,yDACE,WACF,CAEA,kEACE,iBACF",sourcesContent:[`.ck-editor.ck-plugin-full-screen {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}

.ck-editor.ck-plugin-full-screen .ck-editor__top,
.ck-editor.ck-plugin-full-screen .ck-editor__main {
  width: 100%;
  max-width: 1000px;
}

.ck-editor.ck-plugin-full-screen .ck-editor__top {
  margin-top: 2em;
}

.ck-editor.ck-plugin-full-screen .ck-editor__main {
  /* Fill the rest of the height of the parent */
  flex-grow: 1;
  overflow-y: hidden;
  margin-bottom: 2em;
}

/* Make source view also cover the whole viewport */
.ck-editor.ck-plugin-full-screen .ck-source-editing-area {
  height: 100%;
}

.ck-editor.ck-plugin-full-screen .ck-source-editing-area textarea {
  overflow-y: scroll;
}
`],sourceRoot:""}]);const A=_},3645:u=>{u.exports=function(f){var g=[];return g.toString=function(){return this.map(function(k){var w=f(k);return k[2]?"@media ".concat(k[2]," {").concat(w,"}"):w}).join("")},g.i=function(k,w,v){typeof k=="string"&&(k=[[null,k,""]]);var _={};if(v)for(var A=0;A<this.length;A++){var x=this[A][0];x!=null&&(_[x]=!0)}for(var S=0;S<k.length;S++){var N=[].concat(k[S]);v&&_[N[0]]||(w&&(N[2]?N[2]="".concat(w," and ").concat(N[2]):N[2]=w),g.push(N))}},g}},4015:u=>{function f(k,w){return function(v){if(Array.isArray(v))return v}(k)||function(v,_){var A=v&&(typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"]);if(A!=null){var x,S,N=[],P=!0,R=!1;try{for(A=A.call(v);!(P=(x=A.next()).done)&&(N.push(x.value),!_||N.length!==_);P=!0);}catch(B){R=!0,S=B}finally{try{P||A.return==null||A.return()}finally{if(R)throw S}}return N}}(k,w)||function(v,_){if(v){if(typeof v=="string")return g(v,_);var A=Object.prototype.toString.call(v).slice(8,-1);if(A==="Object"&&v.constructor&&(A=v.constructor.name),A==="Map"||A==="Set")return Array.from(v);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return g(v,_)}}(k,w)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function g(k,w){(w==null||w>k.length)&&(w=k.length);for(var v=0,_=new Array(w);v<w;v++)_[v]=k[v];return _}u.exports=function(k){var w=f(k,4),v=w[1],_=w[3];if(!_)return v;if(typeof btoa=="function"){var A=btoa(unescape(encodeURIComponent(JSON.stringify(_)))),x="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),S="/*# ".concat(x," */"),N=_.sources.map(function(P){return"/*# sourceURL=".concat(_.sourceRoot||"").concat(P," */")});return[v].concat(N).concat([S]).join(`
`)}return[v].join(`
`)}},3379:(u,f,g)=>{var k,w=function(){return k===void 0&&(k=!!(window&&document&&document.all&&!window.atob)),k},v=function(){var K={};return function(ee){if(K[ee]===void 0){var X=document.querySelector(ee);if(window.HTMLIFrameElement&&X instanceof window.HTMLIFrameElement)try{X=X.contentDocument.head}catch{X=null}K[ee]=X}return K[ee]}}(),_=[];function A(K){for(var ee=-1,X=0;X<_.length;X++)if(_[X].identifier===K){ee=X;break}return ee}function x(K,ee){for(var X={},se=[],he=0;he<K.length;he++){var be=K[he],G=ee.base?be[0]+ee.base:be[0],Y=X[G]||0,$="".concat(G," ").concat(Y);X[G]=Y+1;var U=A($),H={css:be[1],media:be[2],sourceMap:be[3]};U!==-1?(_[U].references++,_[U].updater(H)):_.push({identifier:$,updater:W(H,ee),references:1}),se.push($)}return se}function S(K){var ee=document.createElement("style"),X=K.attributes||{};if(X.nonce===void 0){var se=g.nc;se&&(X.nonce=se)}if(Object.keys(X).forEach(function(be){ee.setAttribute(be,X[be])}),typeof K.insert=="function")K.insert(ee);else{var he=v(K.insert||"head");if(!he)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");he.appendChild(ee)}return ee}var N,P=(N=[],function(K,ee){return N[K]=ee,N.filter(Boolean).join(`
`)});function R(K,ee,X,se){var he=X?"":se.media?"@media ".concat(se.media," {").concat(se.css,"}"):se.css;if(K.styleSheet)K.styleSheet.cssText=P(ee,he);else{var be=document.createTextNode(he),G=K.childNodes;G[ee]&&K.removeChild(G[ee]),G.length?K.insertBefore(be,G[ee]):K.appendChild(be)}}function B(K,ee,X){var se=X.css,he=X.media,be=X.sourceMap;if(he?K.setAttribute("media",he):K.removeAttribute("media"),be&&typeof btoa<"u"&&(se+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(be))))," */")),K.styleSheet)K.styleSheet.cssText=se;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(se))}}var L=null,D=0;function W(K,ee){var X,se,he;if(ee.singleton){var be=D++;X=L||(L=S(ee)),se=R.bind(null,X,be,!1),he=R.bind(null,X,be,!0)}else X=S(ee),se=B.bind(null,X,ee),he=function(){(function(G){if(G.parentNode===null)return!1;G.parentNode.removeChild(G)})(X)};return se(K),function(G){if(G){if(G.css===K.css&&G.media===K.media&&G.sourceMap===K.sourceMap)return;se(K=G)}else he()}}u.exports=function(K,ee){(ee=ee||{}).singleton||typeof ee.singleton=="boolean"||(ee.singleton=w());var X=x(K=K||[],ee);return function(se){if(se=se||[],Object.prototype.toString.call(se)==="[object Array]"){for(var he=0;he<X.length;he++){var be=A(X[he]);_[be].references--}for(var G=x(se,ee),Y=0;Y<X.length;Y++){var $=A(X[Y]);_[$].references===0&&(_[$].updater(),_.splice($,1))}X=G}}}}},n={};function o(u){var f=n[u];if(f!==void 0)return f.exports;var g=n[u]={id:u,exports:{}};return r[u](g,g.exports,o),g.exports}o.n=u=>{var f=u&&u.__esModule?()=>u.default:()=>u;return o.d(f,{a:f}),f},o.d=(u,f)=>{for(var g in f)o.o(f,g)&&!o.o(u,g)&&Object.defineProperty(u,g,{enumerable:!0,get:f[g]})},o.o=(u,f)=>Object.prototype.hasOwnProperty.call(u,f),o.nc=void 0;var l={};return(()=>{o.d(l,{default:()=>XO});const u=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),f={isMac:k(u),isWindows:function(a){return a.indexOf("windows")>-1}(u),isGecko:function(a){return!!a.match(/gecko\/\d+/)}(u),isSafari:function(a){return a.indexOf(" applewebkit/")>-1&&a.indexOf("chrome")===-1}(u),isiOS:function(a){return!!a.match(/iphone|ipad/i)||k(a)&&navigator.maxTouchPoints>0}(u),isAndroid:function(a){return a.indexOf("android")>-1}(u),isBlink:function(a){return a.indexOf("chrome/")>-1&&a.indexOf("edge/")<0}(u),features:{isRegExpUnicodePropertySupported:function(){let a=!1;try{a="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return a}()}},g=f;function k(a){return a.indexOf("macintosh")>-1}function w(a,e,t,i){t=t||function(p,m){return p===m};const s=Array.isArray(a)?a:Array.prototype.slice.call(a),c=Array.isArray(e)?e:Array.prototype.slice.call(e),d=function(p,m,b){const y=v(p,m,b);if(y===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const C=_(p,y),E=_(m,y),M=v(C,E,b),O=p.length-M,z=m.length-M;return{firstIndex:y,lastIndexOld:O,lastIndexNew:z}}(s,c,t);return i?function(p,m){const{firstIndex:b,lastIndexOld:y,lastIndexNew:C}=p;if(b===-1)return Array(m).fill("equal");let E=[];return b>0&&(E=E.concat(Array(b).fill("equal"))),C-b>0&&(E=E.concat(Array(C-b).fill("insert"))),y-b>0&&(E=E.concat(Array(y-b).fill("delete"))),C<m&&(E=E.concat(Array(m-C).fill("equal"))),E}(d,c.length):function(p,m){const b=[],{firstIndex:y,lastIndexOld:C,lastIndexNew:E}=m;return E-y>0&&b.push({index:y,type:"insert",values:p.slice(y,E)}),C-y>0&&b.push({index:y+(E-y),type:"delete",howMany:C-y}),b}(c,d)}function v(a,e,t){for(let i=0;i<Math.max(a.length,e.length);i++)if(a[i]===void 0||e[i]===void 0||!t(a[i],e[i]))return i;return-1}function _(a,e){return a.slice(e).reverse()}function A(a,e,t){t=t||function(O,z){return O===z};const i=a.length,s=e.length;if(i>200||s>200||i+s>300)return A.fastDiff(a,e,t,!0);let c,d;if(s<i){const O=a;a=e,e=O,c="delete",d="insert"}else c="insert",d="delete";const h=a.length,p=e.length,m=p-h,b={},y={};function C(O){const z=(y[O-1]!==void 0?y[O-1]:-1)+1,V=y[O+1]!==void 0?y[O+1]:-1,Z=z>V?-1:1;b[O+Z]&&(b[O]=b[O+Z].slice(0)),b[O]||(b[O]=[]),b[O].push(z>V?c:d);let oe=Math.max(z,V),Ae=oe-O;for(;Ae<h&&oe<p&&t(a[Ae],e[oe]);)Ae++,oe++,b[O].push("equal");return oe}let E,M=0;do{for(E=-M;E<m;E++)y[E]=C(E);for(E=m+M;E>m;E--)y[E]=C(E);y[m]=C(m),M++}while(y[m]!==p);return b[m].slice(1)}A.fastDiff=w;const x=function(){return function a(){a.called=!0}};class S{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=x(),this.off=x()}}const N=new Array(256).fill("").map((a,e)=>("0"+e.toString(16)).slice(-2));function P(){const a=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0;return"e"+N[a>>0&255]+N[a>>8&255]+N[a>>16&255]+N[a>>24&255]+N[e>>0&255]+N[e>>8&255]+N[e>>16&255]+N[e>>24&255]+N[t>>0&255]+N[t>>8&255]+N[t>>16&255]+N[t>>24&255]+N[i>>0&255]+N[i>>8&255]+N[i>>16&255]+N[i>>24&255]}const R={get(a="normal"){return typeof a!="number"?this[a]||this.normal:a},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function B(a,e){const t=R.get(e.priority);for(let i=0;i<a.length;i++)if(R.get(a[i].priority)<t)return void a.splice(i,0,e);a.push(e)}const L="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class D extends Error{constructor(e,t,i){super(function(s,c){const d=new WeakSet,h=(b,y)=>{if(typeof y=="object"&&y!==null){if(d.has(y))return`[object ${y.constructor.name}]`;d.add(y)}return y},p=c?` ${JSON.stringify(c,h)}`:"",m=K(s);return s+p+m}(e,i)),this.name="CKEditorError",this.context=t,this.data=i}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const i=new D(e.message,t);throw i.stack=e.stack,i}}function W(a,e){console.warn(...ee(a,e))}function K(a){return`
Read more: ${L}#error-${a}`}function ee(a,e){const t=K(a);return e?[a,e,t]:[a,t]}const X="40.0.0",se=new Date(2023,9,4);if(globalThis.CKEDITOR_VERSION)throw new D("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=X;const he=Symbol("listeningTo"),be=Symbol("emitterId"),G=Symbol("delegations"),Y=$(Object);function $(a){return a?class extends a{on(e,t,i){this.listenTo(this,e,t,i)}once(e,t,i){let s=!1;this.listenTo(this,e,(c,...d)=>{s||(s=!0,c.off(),t.call(this,c,...d))},i)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,i,s={}){let c,d;this[he]||(this[he]={});const h=this[he];H(e)||U(e);const p=H(e);(c=h[p])||(c=h[p]={emitter:e,callbacks:{}}),(d=c.callbacks[t])||(d=c.callbacks[t]=[]),d.push(i),function(m,b,y,C,E){b._addEventListener?b._addEventListener(y,C,E):m._addEventListener.call(b,y,C,E)}(this,e,t,i,s)}stopListening(e,t,i){const s=this[he];let c=e&&H(e);const d=s&&c?s[c]:void 0,h=d&&t?d.callbacks[t]:void 0;if(!(!s||e&&!d||t&&!h))if(i)ge(this,e,t,i),h.indexOf(i)!==-1&&(h.length===1?delete d.callbacks[t]:ge(this,e,t,i));else if(h){for(;i=h.pop();)ge(this,e,t,i);delete d.callbacks[t]}else if(d){for(t in d.callbacks)this.stopListening(e,t);delete s[c]}else{for(c in s)this.stopListening(s[c].emitter);delete this[he]}}fire(e,...t){try{const i=e instanceof S?e:new S(this,e),s=i.name;let c=te(this,s);if(i.path.push(this),c){const h=[i,...t];c=Array.from(c);for(let p=0;p<c.length&&(c[p].callback.apply(this,h),i.off.called&&(delete i.off.called,this._removeEventListener(s,c[p].callback)),!i.stop.called);p++);}const d=this[G];if(d){const h=d.get(s),p=d.get("*");h&&ne(h,i,t),p&&ne(p,i,t)}return i.return}catch(i){D.rethrowUnexpectedError(i,this)}}delegate(...e){return{to:(t,i)=>{this[G]||(this[G]=new Map),e.forEach(s=>{const c=this[G].get(s);c?c.set(t,i):this[G].set(s,new Map([[t,i]]))})}}}stopDelegating(e,t){if(this[G])if(e)if(t){const i=this[G].get(e);i&&i.delete(t)}else this[G].delete(e);else this[G].clear()}_addEventListener(e,t,i){(function(d,h){const p=J(d);if(p[h])return;let m=h,b=null;const y=[];for(;m!==""&&!p[m];)p[m]={callbacks:[],childEvents:[]},y.push(p[m]),b&&p[m].childEvents.push(b),b=m,m=m.substr(0,m.lastIndexOf(":"));if(m!==""){for(const C of y)C.callbacks=p[m].callbacks.slice();p[m].childEvents.push(b)}})(this,e);const s=ue(this,e),c={callback:t,priority:R.get(i.priority)};for(const d of s)B(d,c)}_removeEventListener(e,t){const i=ue(this,e);for(const s of i)for(let c=0;c<s.length;c++)s[c].callback==t&&(s.splice(c,1),c--)}}:Y}function U(a,e){a[be]||(a[be]=e||P())}function H(a){return a[be]}function J(a){return a._events||Object.defineProperty(a,"_events",{value:{}}),a._events}function ue(a,e){const t=J(a)[e];if(!t)return[];let i=[t.callbacks];for(let s=0;s<t.childEvents.length;s++){const c=ue(a,t.childEvents[s]);i=i.concat(c)}return i}function te(a,e){let t;return a._events&&(t=a._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?te(a,e.substr(0,e.lastIndexOf(":"))):null}function ne(a,e,t){for(let[i,s]of a){s?typeof s=="function"&&(s=s(e.name)):s=e.name;const c=new S(e.source,s);c.path=[...e.path],i.fire(c,...t)}}function ge(a,e,t,i){e._removeEventListener?e._removeEventListener(t,i):a._removeEventListener.call(e,t,i)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(a=>{$[a]=Y.prototype[a]});const pe=function(a){var e=typeof a;return a!=null&&(e=="object"||e=="function")},xe=Symbol("observableProperties"),gt=Symbol("boundObservables"),Dt=Symbol("boundProperties"),St=Symbol("decoratedMethods"),Ge=Symbol("decoratedOriginal"),or=Ye($());function Ye(a){return a?class extends a{set(e,t){if(pe(e))return void Object.keys(e).forEach(s=>{this.set(s,e[s])},this);oc(this);const i=this[xe];if(e in this&&!i.has(e))throw new D("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>i.get(e),set(s){const c=i.get(e);let d=this.fire(`set:${e}`,e,s,c);d===void 0&&(d=s),c===d&&i.has(e)||(i.set(e,d),this.fire(`change:${e}`,e,d,c))}}),this[e]=t}bind(...e){if(!e.length||!vd(e))throw new D("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new D("observable-bind-duplicate-properties",this);oc(this);const t=this[Dt];e.forEach(s=>{if(t.has(s))throw new D("observable-bind-rebind",this)});const i=new Map;return e.forEach(s=>{const c={property:s,to:[]};t.set(s,c),i.set(s,c)}),{to:_d,toMany:sc,_observable:this,_bindProperties:e,_to:[],_bindings:i}}unbind(...e){if(!this[xe])return;const t=this[Dt],i=this[gt];if(e.length){if(!vd(e))throw new D("observable-unbind-wrong-properties",this);e.forEach(s=>{const c=t.get(s);c&&(c.to.forEach(([d,h])=>{const p=i.get(d),m=p[h];m.delete(c),m.size||delete p[h],Object.keys(p).length||(i.delete(d),this.stopListening(d,"change"))}),t.delete(s))})}else i.forEach((s,c)=>{this.stopListening(c,"change")}),i.clear(),t.clear()}decorate(e){oc(this);const t=this[e];if(!t)throw new D("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(i,s)=>{i.return=t.apply(this,s)}),this[e]=function(...i){return this.fire(e,i)},this[e][Ge]=t,this[St]||(this[St]=[]),this[St].push(e)}stopListening(e,t,i){if(!e&&this[St]){for(const s of this[St])this[s]=this[s][Ge];delete this[St]}super.stopListening(e,t,i)}}:or}function oc(a){a[xe]||(Object.defineProperty(a,xe,{value:new Map}),Object.defineProperty(a,gt,{value:new Map}),Object.defineProperty(a,Dt,{value:new Map}))}function _d(...a){const e=function(...c){if(!c.length)throw new D("observable-bind-to-parse-error",null);const d={to:[]};let h;return typeof c[c.length-1]=="function"&&(d.callback=c.pop()),c.forEach(p=>{if(typeof p=="string")h.properties.push(p);else{if(typeof p!="object")throw new D("observable-bind-to-parse-error",null);h={observable:p,properties:[]},d.to.push(h)}}),d}(...a),t=Array.from(this._bindings.keys()),i=t.length;if(!e.callback&&e.to.length>1)throw new D("observable-bind-to-no-callback",this);if(i>1&&e.callback)throw new D("observable-bind-to-extra-callback",this);var s;e.to.forEach(c=>{if(c.properties.length&&c.properties.length!==i)throw new D("observable-bind-to-properties-length",this);c.properties.length||(c.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),s=this._observable,this._to.forEach(c=>{const d=s[gt];let h;d.get(c.observable)||s.listenTo(c.observable,"change",(p,m)=>{h=d.get(c.observable)[m],h&&h.forEach(b=>{yd(s,b.property)})})}),function(c){let d;c._bindings.forEach((h,p)=>{c._to.forEach(m=>{d=m.properties[h.callback?0:c._bindProperties.indexOf(p)],h.to.push([m.observable,d]),function(b,y,C,E){const M=b[gt],O=M.get(C),z=O||{};z[E]||(z[E]=new Set),z[E].add(y),O||M.set(C,z)}(c._observable,h,m.observable,d)})})}(this),this._bindProperties.forEach(c=>{yd(this._observable,c)})}function sc(a,e,t){if(this._bindings.size>1)throw new D("observable-bind-to-many-not-one-binding",this);this.to(...function(i,s){const c=i.map(d=>[d,s]);return Array.prototype.concat.apply([],c)}(a,e),t)}function vd(a){return a.every(e=>typeof e=="string")}function yd(a,e){const t=a[Dt].get(e);let i;t.callback?i=t.callback.apply(a,t.to.map(s=>s[0][s[1]])):(i=t.to[0],i=i[0][i[1]]),Object.prototype.hasOwnProperty.call(a,e)?a[e]=i:a.set(e,i)}function Es(a){let e=0;for(const t of a)e++;return e}function jt(a,e){const t=Math.min(a.length,e.length);for(let i=0;i<t;i++)if(a[i]!=e[i])return i;return a.length==e.length?"same":a.length<e.length?"prefix":"extension"}function hn(a){return!(!a||!a[Symbol.iterator])}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(a=>{Ye[a]=or.prototype[a]});const Ad=typeof global=="object"&&global&&global.Object===Object&&global;var Cd=typeof self=="object"&&self&&self.Object===Object&&self;const Ln=Ad||Cd||Function("return this")(),zn=Ln.Symbol;var Io=Object.prototype,Gf=Io.hasOwnProperty,Yf=Io.toString,Mo=zn?zn.toStringTag:void 0;const Zf=function(a){var e=Gf.call(a,Mo),t=a[Mo];try{a[Mo]=void 0;var i=!0}catch{}var s=Yf.call(a);return i&&(e?a[Mo]=t:delete a[Mo]),s};var Kf=Object.prototype.toString;const Pr=function(a){return Kf.call(a)};var No=zn?zn.toStringTag:void 0;const zi=function(a){return a==null?a===void 0?"[object Undefined]":"[object Null]":No&&No in Object(a)?Zf(a):Pr(a)},Zt=Array.isArray,Cn=function(a){return a!=null&&typeof a=="object"},xd=function(a){return typeof a=="string"||!Zt(a)&&Cn(a)&&zi(a)=="[object String]"};function Ds(a,e,t={},i=[]){const s=t&&t.xmlns,c=s?a.createElementNS(s,e):a.createElement(e);for(const d in t)c.setAttribute(d,t[d]);!xd(i)&&hn(i)||(i=[i]);for(let d of i)xd(d)&&(d=a.createTextNode(d)),c.appendChild(d);return c}const Ss=function(a,e){return function(t){return a(e(t))}},Ts=Ss(Object.getPrototypeOf,Object);var Qf=Function.prototype,Jf=Object.prototype,ji=Qf.toString,Xf=Jf.hasOwnProperty,eg=ji.call(Object);const fn=function(a){if(!Cn(a)||zi(a)!="[object Object]")return!1;var e=Ts(a);if(e===null)return!0;var t=Xf.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&ji.call(t)==eg},tg=function(){this.__data__=[],this.size=0},Oo=function(a,e){return a===e||a!=a&&e!=e},Is=function(a,e){for(var t=a.length;t--;)if(Oo(a[t][0],e))return t;return-1};var ng=Array.prototype.splice;const ig=function(a){var e=this.__data__,t=Is(e,a);return!(t<0)&&(t==e.length-1?e.pop():ng.call(e,t,1),--this.size,!0)},sr=function(a){var e=this.__data__,t=Is(e,a);return t<0?void 0:e[t][1]},Bo=function(a){return Is(this.__data__,a)>-1},Po=function(a,e){var t=this.__data__,i=Is(t,a);return i<0?(++this.size,t.push([a,e])):t[i][1]=e,this};function Lr(a){var e=-1,t=a==null?0:a.length;for(this.clear();++e<t;){var i=a[e];this.set(i[0],i[1])}}Lr.prototype.clear=tg,Lr.prototype.delete=ig,Lr.prototype.get=sr,Lr.prototype.has=Bo,Lr.prototype.set=Po;const Ms=Lr,rg=function(){this.__data__=new Ms,this.size=0},og=function(a){var e=this.__data__,t=e.delete(a);return this.size=e.size,t},sg=function(a){return this.__data__.get(a)},ag=function(a){return this.__data__.has(a)},ar=function(a){if(!pe(a))return!1;var e=zi(a);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Ri=Ln["__core-js_shared__"];var ac=function(){var a=/[^.]+$/.exec(Ri&&Ri.keys&&Ri.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}();const cg=function(a){return!!ac&&ac in a};var lg=Function.prototype.toString;const Xn=function(a){if(a!=null){try{return lg.call(a)}catch{}try{return a+""}catch{}}return""};var dg=/^\[object .+?Constructor\]$/,ug=Function.prototype,hg=Object.prototype,fg=ug.toString,zr=hg.hasOwnProperty,gg=RegExp("^"+fg.call(zr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const pg=function(a){return!(!pe(a)||cg(a))&&(ar(a)?gg:dg).test(Xn(a))},jr=function(a,e){return a==null?void 0:a[e]},cr=function(a,e){var t=jr(a,e);return pg(t)?t:void 0},Lo=cr(Ln,"Map"),Rr=cr(Object,"create"),Ed=function(){this.__data__=Rr?Rr(null):{},this.size=0},mg=function(a){var e=this.has(a)&&delete this.__data__[a];return this.size-=e?1:0,e};var Dd=Object.prototype.hasOwnProperty;const Ns=function(a){var e=this.__data__;if(Rr){var t=e[a];return t==="__lodash_hash_undefined__"?void 0:t}return Dd.call(e,a)?e[a]:void 0};var kg=Object.prototype.hasOwnProperty;const Sd=function(a){var e=this.__data__;return Rr?e[a]!==void 0:kg.call(e,a)},Td=function(a,e){var t=this.__data__;return this.size+=this.has(a)?0:1,t[a]=Rr&&e===void 0?"__lodash_hash_undefined__":e,this};function Fr(a){var e=-1,t=a==null?0:a.length;for(this.clear();++e<t;){var i=a[e];this.set(i[0],i[1])}}Fr.prototype.clear=Ed,Fr.prototype.delete=mg,Fr.prototype.get=Ns,Fr.prototype.has=Sd,Fr.prototype.set=Td;const Id=Fr,bg=function(){this.size=0,this.__data__={hash:new Id,map:new(Lo||Ms),string:new Id}},cc=function(a){var e=typeof a;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?a!=="__proto__":a===null},Os=function(a,e){var t=a.__data__;return cc(e)?t[typeof e=="string"?"string":"hash"]:t.map},Md=function(a){var e=Os(this,a).delete(a);return this.size-=e?1:0,e},Nd=function(a){return Os(this,a).get(a)},Od=function(a){return Os(this,a).has(a)},Bd=function(a,e){var t=Os(this,a),i=t.size;return t.set(a,e),this.size+=t.size==i?0:1,this};function Vr(a){var e=-1,t=a==null?0:a.length;for(this.clear();++e<t;){var i=a[e];this.set(i[0],i[1])}}Vr.prototype.clear=bg,Vr.prototype.delete=Md,Vr.prototype.get=Nd,Vr.prototype.has=Od,Vr.prototype.set=Bd;const Bs=Vr,Pd=function(a,e){var t=this.__data__;if(t instanceof Ms){var i=t.__data__;if(!Lo||i.length<199)return i.push([a,e]),this.size=++t.size,this;t=this.__data__=new Bs(i)}return t.set(a,e),this.size=t.size,this};function He(a){var e=this.__data__=new Ms(a);this.size=e.size}He.prototype.clear=rg,He.prototype.delete=og,He.prototype.get=sg,He.prototype.has=ag,He.prototype.set=Pd;const zo=He,lc=function(a,e){for(var t=-1,i=a==null?0:a.length;++t<i&&e(a[t],t,a)!==!1;);return a},jo=function(){try{var a=cr(Object,"defineProperty");return a({},"",{}),a}catch{}}(),lr=function(a,e,t){e=="__proto__"&&jo?jo(a,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):a[e]=t};var dc=Object.prototype.hasOwnProperty;const Fi=function(a,e,t){var i=a[e];dc.call(a,e)&&Oo(i,t)&&(t!==void 0||e in a)||lr(a,e,t)},dr=function(a,e,t,i){var s=!t;t||(t={});for(var c=-1,d=e.length;++c<d;){var h=e[c],p=i?i(t[h],a[h],h,t,a):void 0;p===void 0&&(p=a[h]),s?lr(t,h,p):Fi(t,h,p)}return t},wg=function(a,e){for(var t=-1,i=Array(a);++t<a;)i[t]=e(t);return i},Ld=function(a){return Cn(a)&&zi(a)=="[object Arguments]"};var uc=Object.prototype,_g=uc.hasOwnProperty,hc=uc.propertyIsEnumerable;const fc=Ld(function(){return arguments}())?Ld:function(a){return Cn(a)&&_g.call(a,"callee")&&!hc.call(a,"callee")},vg=function(){return!1};var zd=typeof Xt=="object"&&Xt&&!Xt.nodeType&&Xt,gc=zd&&typeof vt=="object"&&vt&&!vt.nodeType&&vt,Ps=gc&&gc.exports===zd?Ln.Buffer:void 0;const Ro=(Ps?Ps.isBuffer:void 0)||vg;var yg=/^(?:0|[1-9]\d*)$/;const pc=function(a,e){var t=typeof a;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&yg.test(a))&&a>-1&&a%1==0&&a<e},jd=function(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=9007199254740991};var Je={};Je["[object Float32Array]"]=Je["[object Float64Array]"]=Je["[object Int8Array]"]=Je["[object Int16Array]"]=Je["[object Int32Array]"]=Je["[object Uint8Array]"]=Je["[object Uint8ClampedArray]"]=Je["[object Uint16Array]"]=Je["[object Uint32Array]"]=!0,Je["[object Arguments]"]=Je["[object Array]"]=Je["[object ArrayBuffer]"]=Je["[object Boolean]"]=Je["[object DataView]"]=Je["[object Date]"]=Je["[object Error]"]=Je["[object Function]"]=Je["[object Map]"]=Je["[object Number]"]=Je["[object Object]"]=Je["[object RegExp]"]=Je["[object Set]"]=Je["[object String]"]=Je["[object WeakMap]"]=!1;const Ag=function(a){return Cn(a)&&jd(a.length)&&!!Je[zi(a)]},Ls=function(a){return function(e){return a(e)}};var mc=typeof Xt=="object"&&Xt&&!Xt.nodeType&&Xt,Ur=mc&&typeof vt=="object"&&vt&&!vt.nodeType&&vt,zs=Ur&&Ur.exports===mc&&Ad.process;const $r=function(){try{var a=Ur&&Ur.require&&Ur.require("util").types;return a||zs&&zs.binding&&zs.binding("util")}catch{}}();var Rd=$r&&$r.isTypedArray;const kc=Rd?Ls(Rd):Ag;var Fd=Object.prototype.hasOwnProperty;const Vd=function(a,e){var t=Zt(a),i=!t&&fc(a),s=!t&&!i&&Ro(a),c=!t&&!i&&!s&&kc(a),d=t||i||s||c,h=d?wg(a.length,String):[],p=h.length;for(var m in a)!e&&!Fd.call(a,m)||d&&(m=="length"||s&&(m=="offset"||m=="parent")||c&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||pc(m,p))||h.push(m);return h};var Ud=Object.prototype;const Fo=function(a){var e=a&&a.constructor;return a===(typeof e=="function"&&e.prototype||Ud)},Cg=Ss(Object.keys,Object);var $d=Object.prototype.hasOwnProperty;const Hd=function(a){if(!Fo(a))return Cg(a);var e=[];for(var t in Object(a))$d.call(a,t)&&t!="constructor"&&e.push(t);return e},js=function(a){return a!=null&&jd(a.length)&&!ar(a)},Rs=function(a){return js(a)?Vd(a):Hd(a)},xg=function(a,e){return a&&dr(e,Rs(e),a)},Eg=function(a){var e=[];if(a!=null)for(var t in Object(a))e.push(t);return e};var bc=Object.prototype.hasOwnProperty;const wc=function(a){if(!pe(a))return Eg(a);var e=Fo(a),t=[];for(var i in a)(i!="constructor"||!e&&bc.call(a,i))&&t.push(i);return t},Vi=function(a){return js(a)?Vd(a,!0):wc(a)},_c=function(a,e){return a&&dr(e,Vi(e),a)};var vc=typeof Xt=="object"&&Xt&&!Xt.nodeType&&Xt,yc=vc&&typeof vt=="object"&&vt&&!vt.nodeType&&vt,Ac=yc&&yc.exports===vc?Ln.Buffer:void 0,Cc=Ac?Ac.allocUnsafe:void 0;const xc=function(a,e){if(e)return a.slice();var t=a.length,i=Cc?Cc(t):new a.constructor(t);return a.copy(i),i},Wd=function(a,e){var t=-1,i=a.length;for(e||(e=Array(i));++t<i;)e[t]=a[t];return e},Dg=function(a,e){for(var t=-1,i=a==null?0:a.length,s=0,c=[];++t<i;){var d=a[t];e(d,t,a)&&(c[s++]=d)}return c},qd=function(){return[]};var Sg=Object.prototype.propertyIsEnumerable,Gd=Object.getOwnPropertySymbols;const pi=Gd?function(a){return a==null?[]:(a=Object(a),Dg(Gd(a),function(e){return Sg.call(a,e)}))}:qd,Ec=function(a,e){return dr(a,pi(a),e)},Yd=function(a,e){for(var t=-1,i=e.length,s=a.length;++t<i;)a[s+t]=e[t];return a},Zd=Object.getOwnPropertySymbols?function(a){for(var e=[];a;)Yd(e,pi(a)),a=Ts(a);return e}:qd,Kd=function(a,e){return dr(a,Zd(a),e)},Fs=function(a,e,t){var i=e(a);return Zt(a)?i:Yd(i,t(a))},Dc=function(a){return Fs(a,Rs,pi)},Tg=function(a){return Fs(a,Vi,Zd)},Sc=cr(Ln,"DataView"),Vs=cr(Ln,"Promise"),Us=cr(Ln,"Set"),Tc=cr(Ln,"WeakMap");var Qd="[object Map]",Jd="[object Promise]",Ic="[object Set]",Xd="[object WeakMap]",eu="[object DataView]",Ig=Xn(Sc),tu=Xn(Lo),Mg=Xn(Vs),Ng=Xn(Us),nu=Xn(Tc),ur=zi;(Sc&&ur(new Sc(new ArrayBuffer(1)))!=eu||Lo&&ur(new Lo)!=Qd||Vs&&ur(Vs.resolve())!=Jd||Us&&ur(new Us)!=Ic||Tc&&ur(new Tc)!=Xd)&&(ur=function(a){var e=zi(a),t=e=="[object Object]"?a.constructor:void 0,i=t?Xn(t):"";if(i)switch(i){case Ig:return eu;case tu:return Qd;case Mg:return Jd;case Ng:return Ic;case nu:return Xd}return e});const Hr=ur;var iu=Object.prototype.hasOwnProperty;const ru=function(a){var e=a.length,t=new a.constructor(e);return e&&typeof a[0]=="string"&&iu.call(a,"index")&&(t.index=a.index,t.input=a.input),t},Ze=Ln.Uint8Array,Mc=function(a){var e=new a.constructor(a.byteLength);return new Ze(e).set(new Ze(a)),e},Og=function(a,e){var t=e?Mc(a.buffer):a.buffer;return new a.constructor(t,a.byteOffset,a.byteLength)};var Nc=/\w*$/;const Bg=function(a){var e=new a.constructor(a.source,Nc.exec(a));return e.lastIndex=a.lastIndex,e};var Wr=zn?zn.prototype:void 0,$s=Wr?Wr.valueOf:void 0;const Pg=function(a){return $s?Object($s.call(a)):{}},Oc=function(a,e){var t=e?Mc(a.buffer):a.buffer;return new a.constructor(t,a.byteOffset,a.length)},Bc=function(a,e,t){var i=a.constructor;switch(e){case"[object ArrayBuffer]":return Mc(a);case"[object Boolean]":case"[object Date]":return new i(+a);case"[object DataView]":return Og(a,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Oc(a,t);case"[object Map]":case"[object Set]":return new i;case"[object Number]":case"[object String]":return new i(a);case"[object RegExp]":return Bg(a);case"[object Symbol]":return Pg(a)}};var Hs=Object.create;const Pc=function(){function a(){}return function(e){if(!pe(e))return{};if(Hs)return Hs(e);a.prototype=e;var t=new a;return a.prototype=void 0,t}}(),hr=function(a){return typeof a.constructor!="function"||Fo(a)?{}:Pc(Ts(a))},ou=function(a){return Cn(a)&&Hr(a)=="[object Map]"};var Ws=$r&&$r.isMap;const Lg=Ws?Ls(Ws):ou,T=function(a){return Cn(a)&&Hr(a)=="[object Set]"};var I=$r&&$r.isSet;const j=I?Ls(I):T;var q="[object Arguments]",ie="[object Function]",we="[object Object]",ce={};ce[q]=ce["[object Array]"]=ce["[object ArrayBuffer]"]=ce["[object DataView]"]=ce["[object Boolean]"]=ce["[object Date]"]=ce["[object Float32Array]"]=ce["[object Float64Array]"]=ce["[object Int8Array]"]=ce["[object Int16Array]"]=ce["[object Int32Array]"]=ce["[object Map]"]=ce["[object Number]"]=ce[we]=ce["[object RegExp]"]=ce["[object Set]"]=ce["[object String]"]=ce["[object Symbol]"]=ce["[object Uint8Array]"]=ce["[object Uint8ClampedArray]"]=ce["[object Uint16Array]"]=ce["[object Uint32Array]"]=!0,ce["[object Error]"]=ce[ie]=ce["[object WeakMap]"]=!1;const ke=function a(e,t,i,s,c,d){var h,p=1&t,m=2&t,b=4&t;if(i&&(h=c?i(e,s,c,d):i(e)),h!==void 0)return h;if(!pe(e))return e;var y=Zt(e);if(y){if(h=ru(e),!p)return Wd(e,h)}else{var C=Hr(e),E=C==ie||C=="[object GeneratorFunction]";if(Ro(e))return xc(e,p);if(C==we||C==q||E&&!c){if(h=m||E?{}:hr(e),!p)return m?Kd(e,_c(h,e)):Ec(e,xg(h,e))}else{if(!ce[C])return c?e:{};h=Bc(e,C,p)}}d||(d=new zo);var M=d.get(e);if(M)return M;d.set(e,h),j(e)?e.forEach(function(z){h.add(a(z,t,i,z,e,d))}):Lg(e)&&e.forEach(function(z,V){h.set(V,a(z,t,i,V,e,d))});var O=y?void 0:(b?m?Tg:Dc:m?Vi:Rs)(e);return lc(O||e,function(z,V){O&&(z=e[V=z]),Fi(h,V,a(z,t,i,V,e,d))}),h},Me=function(a,e){return ke(a,5,e=typeof e=="function"?e:void 0)},Ee=function(a){return Cn(a)&&a.nodeType===1&&!fn(a)};class gn{constructor(e,t){this._config={},t&&this.define(Kt(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,i,s=!1){if(fn(t))return void this._setObjectToTarget(e,t,s);const c=t.split(".");t=c.pop();for(const d of c)fn(e[d])||(e[d]={}),e=e[d];if(fn(i))return fn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,i,s);s&&e[t]!==void 0||(e[t]=i)}_getFromSource(e,t){const i=t.split(".");t=i.pop();for(const s of i){if(!fn(e[s])){e=null;break}e=e[s]}return e?Kt(e[t]):void 0}_setObjectToTarget(e,t,i){Object.keys(t).forEach(s=>{this._setToTarget(e,s,t[s],i)})}}function Kt(a){return Me(a,Bt)}function Bt(a){return Ee(a)?a:void 0}function Rt(a){if(a){if(a.defaultView)return a instanceof a.defaultView.Document;if(a.ownerDocument&&a.ownerDocument.defaultView)return a instanceof a.ownerDocument.defaultView.Node}return!1}function ei(a){const e=Object.prototype.toString.apply(a);return e=="[object Window]"||e=="[object global]"}const jn=tt($());function tt(a){return a?class extends a{listenTo(e,t,i,s={}){if(Rt(e)||ei(e)){const c={capture:!!s.useCapture,passive:!!s.usePassive},d=this._getProxyEmitter(e,c)||new pn(e,c);this.listenTo(d,t,i,s)}else super.listenTo(e,t,i,s)}stopListening(e,t,i){if(Rt(e)||ei(e)){const s=this._getAllProxyEmitters(e);for(const c of s)this.stopListening(c,t,i)}else super.stopListening(e,t,i)}_getProxyEmitter(e,t){return function(i,s){const c=i[he];return c&&c[s]?c[s].emitter:null}(this,Ft(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:jn}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(a=>{tt[a]=jn.prototype[a]});class pn extends $(){constructor(e,t){super(),U(this,Ft(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,i){this.attach(e),$().prototype._addEventListener.call(this,e,t,i)}_removeEventListener(e,t){$().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=i=>{this.fire(e,i)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Ft(a,e){let t=function(i){return i["data-ck-expando"]||(i["data-ck-expando"]=P())}(a);for(const i of Object.keys(e).sort())e[i]&&(t+="-"+i);return t}let mn;try{mn={window,document}}catch{mn={window:{},document:{}}}const ye=mn;function bt(a){return Object.prototype.toString.call(a)=="[object Text]"}function qs(a){return Object.prototype.toString.apply(a)=="[object Range]"}function su(a){const e=a.ownerDocument.defaultView.getComputedStyle(a);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function au(a){return a&&a.parentNode?a.offsetParent===ye.document.body?null:a.offsetParent:null}const cu=["top","right","bottom","left","width","height"];class Ne{constructor(e){const t=qs(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Oe(e)||t)if(t){const i=Ne.getDomRangeRects(e);De(this,Ne.getBoundingRect(i))}else De(this,e.getBoundingClientRect());else if(ei(e)){const{innerWidth:i,innerHeight:s}=e;De(this,{top:0,right:i,bottom:s,left:0,width:i,height:s})}else De(this,e)}clone(){return new Ne(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const i=new Ne(t);return i._source=this._source,i}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(nt(e))return t;let i,s=e,c=e.parentNode||e.commonAncestorContainer;for(;c&&!nt(c);){const h=((d=c)instanceof HTMLElement?d.ownerDocument.defaultView.getComputedStyle(d).overflow:"visible")==="visible";s instanceof HTMLElement&&Rn(s)==="absolute"&&(i=s);const p=Rn(c);if(h||i&&(p==="relative"&&h||p!=="relative")){s=c,c=c.parentNode;continue}const m=new Ne(c),b=t.getIntersection(m);if(!b)return null;b.getArea()<t.getArea()&&(t=b),s=c,c=c.parentNode}var d;return t}isEqual(e){for(const t of cu)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=ye.window,i=this.clone().moveBy(e,t);if(Oe(i._source)){const s=au(i._source);s&&function(c,d){const h=new Ne(d),p=su(d);let m=0,b=0;m-=h.left,b-=h.top,m+=d.scrollLeft,b+=d.scrollTop,m-=p.left,b-=p.top,c.moveBy(m,b)}(i,s)}return i}excludeScrollbarsAndBorders(){const e=this._source;let t,i,s;if(ei(e))t=e.innerWidth-e.document.documentElement.clientWidth,i=e.innerHeight-e.document.documentElement.clientHeight,s=e.getComputedStyle(e.document.documentElement).direction;else{const c=su(e);t=e.offsetWidth-e.clientWidth-c.left-c.right,i=e.offsetHeight-e.clientHeight-c.top-c.bottom,s=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=c.left,this.top+=c.top,this.right-=c.right,this.bottom-=c.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,s==="ltr"?this.right-=t:this.left+=t,this.height-=i,this.bottom-=i,this}static getDomRangeRects(e){const t=[],i=Array.from(e.getClientRects());if(i.length)for(const s of i)t.push(new Ne(s));else{let s=e.startContainer;bt(s)&&(s=s.parentNode);const c=new Ne(s.getBoundingClientRect());c.right=c.left,c.width=0,t.push(c)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let i=0;for(const s of e)i++,t.left=Math.min(t.left,s.left),t.top=Math.min(t.top,s.top),t.right=Math.max(t.right,s.right),t.bottom=Math.max(t.bottom,s.bottom);return i==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Ne(t))}}function De(a,e){for(const t of cu)a[t]=e[t]}function nt(a){return!!Oe(a)&&a===a.ownerDocument.body}function Oe(a){return a!==null&&typeof a=="object"&&a.nodeType===1&&typeof a.getBoundingClientRect=="function"}function Rn(a){return a instanceof HTMLElement?a.ownerDocument.defaultView.getComputedStyle(a).position:"static"}class Be{constructor(e,t){Be._observerInstance||Be._createObserver(),this._element=e,this._callback=t,Be._addElementCallback(e,t),Be._observerInstance.observe(e)}get element(){return this._element}destroy(){Be._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){Be._elementCallbacks||(Be._elementCallbacks=new Map);let i=Be._elementCallbacks.get(e);i||(i=new Set,Be._elementCallbacks.set(e,i)),i.add(t)}static _deleteElementCallback(e,t){const i=Be._getElementCallbacks(e);i&&(i.delete(t),i.size||(Be._elementCallbacks.delete(e),Be._observerInstance.unobserve(e))),Be._elementCallbacks&&!Be._elementCallbacks.size&&(Be._observerInstance=null,Be._elementCallbacks=null)}static _getElementCallbacks(e){return Be._elementCallbacks?Be._elementCallbacks.get(e):null}static _createObserver(){Be._observerInstance=new ye.window.ResizeObserver(e=>{for(const t of e){const i=Be._getElementCallbacks(t.target);if(i)for(const s of i)s(t)}})}}function mi(a,e){a instanceof HTMLTextAreaElement&&(a.value=e),a.innerHTML=e}function rn(a){return e=>e+a}function kn(a){let e=0;for(;a.previousSibling;)a=a.previousSibling,e++;return e}function Vt(a,e,t){a.insertBefore(t,a.childNodes[e]||null)}function on(a){return a&&a.nodeType===Node.COMMENT_NODE}function At(a){return!!(a&&a.getClientRects&&a.getClientRects().length)}function lt({element:a,target:e,positions:t,limiter:i,fitInViewport:s,viewportOffsetConfig:c}){ar(e)&&(e=e()),ar(i)&&(i=i());const d=au(a),h=function(C){C=Object.assign({top:0,bottom:0,left:0,right:0},C);const E=new Ne(ye.window);return E.top+=C.top,E.height-=C.top,E.bottom-=C.bottom,E.height-=C.bottom,E}(c),p=new Ne(a),m=Pt(e,h);let b;if(!m||!h.getIntersection(m))return null;const y={targetRect:m,elementRect:p,positionedElementAncestor:d,viewportRect:h};if(i||s){if(i){const C=Pt(i,h);C&&(y.limiterRect=C)}b=function(C,E){const{elementRect:M}=E,O=M.getArea(),z=C.map(oe=>new fr(oe,E)).filter(oe=>!!oe.name);let V=0,Z=null;for(const oe of z){const{limiterIntersectionArea:Ae,viewportIntersectionArea:ze}=oe;if(Ae===O)return oe;const In=ze**2+Ae**2;In>V&&(V=In,Z=oe)}return Z}(t,y)}else b=new fr(t[0],y);return b}function Pt(a,e){const t=new Ne(a).getVisible();return t?t.getIntersection(e):null}Be._observerInstance=null,Be._elementCallbacks=null;class fr{constructor(e,t){const i=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!i)return;const{left:s,top:c,name:d,config:h}=i;this.name=d,this.config=h,this._positioningFunctionCoordinates={left:s,top:c},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Mb(a){const e=a.parentNode;e&&e.removeChild(a)}function lS({window:a,rect:e,alignToTop:t,forceScroll:i,viewportOffset:s}){const c=e.clone().moveBy(0,s.bottom),d=e.clone().moveBy(0,-s.top),h=new Ne(a).excludeScrollbarsAndBorders(),p=t&&i,m=[d,c].every(M=>h.contains(M));let{scrollX:b,scrollY:y}=a;const C=b,E=y;p?y-=h.top-e.top+s.top:m||(Ob(d,h)?y-=h.top-e.top+s.top:Nb(c,h)&&(y+=t?e.top-h.top-s.top:e.bottom-h.bottom+s.bottom)),m||(Bb(e,h)?b-=h.left-e.left+s.left:Pb(e,h)&&(b+=e.right-h.right+s.right)),b==C&&y===E||a.scrollTo(b,y)}function dS({parent:a,getRect:e,alignToTop:t,forceScroll:i,ancestorOffset:s=0,limiterElement:c}){const d=zg(a),h=t&&i;let p,m,b;const y=c||d.document.body;for(;a!=y;)m=e(),p=new Ne(a).excludeScrollbarsAndBorders(),b=p.contains(m),h?a.scrollTop-=p.top-m.top+s:b||(Ob(m,p)?a.scrollTop-=p.top-m.top+s:Nb(m,p)&&(a.scrollTop+=t?m.top-p.top-s:m.bottom-p.bottom+s)),b||(Bb(m,p)?a.scrollLeft-=p.left-m.left+s:Pb(m,p)&&(a.scrollLeft+=m.right-p.right+s)),a=a.parentNode}function Nb(a,e){return a.bottom>e.bottom}function Ob(a,e){return a.top<e.top}function Bb(a,e){return a.left<e.left}function Pb(a,e){return a.right>e.right}function zg(a){return qs(a)?a.startContainer.ownerDocument.defaultView:a.ownerDocument.defaultView}function uS(a){if(qs(a)){let e=a.commonAncestorContainer;return bt(e)&&(e=e.parentNode),e}return a.parentNode}function Lb(a,e){const t=zg(a),i=new Ne(a);if(t===e)return i;{let s=t;for(;s!=e;){const c=s.frameElement,d=new Ne(c).excludeScrollbarsAndBorders();i.moveBy(d.left,d.top),s=s.parent}}return i}const hS={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},fS={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Re=function(){const a={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)a[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)a[e-48]=e;for(let e=112;e<=123;e++)a["f"+(e-111)]=e;for(const e of"`-=[];',./\\")a[e]=e.charCodeAt(0);return a}(),gS=Object.fromEntries(Object.entries(Re).map(([a,e])=>[e,a.charAt(0).toUpperCase()+a.slice(1)]));function Gs(a){let e;if(typeof a=="string"){if(e=Re[a.toLowerCase()],!e)throw new D("keyboard-unknown-key",null,{key:a})}else e=a.keyCode+(a.altKey?Re.alt:0)+(a.ctrlKey?Re.ctrl:0)+(a.shiftKey?Re.shift:0)+(a.metaKey?Re.cmd:0);return e}function Lc(a){return typeof a=="string"&&(a=function(e){return e.split("+").map(t=>t.trim())}(a)),a.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Gs(t.slice(0,-1));const i=Gs(t);return(g.isMac||g.isiOS)&&i==Re.ctrl?Re.cmd:i}(e):e).reduce((e,t)=>t+e,0)}function zb(a){let e=Lc(a);return Object.entries(g.isMac||g.isiOS?hS:fS).reduce((t,[i,s])=>(e&Re[i]&&(e&=~Re[i],t+=s),t),"")+(e?gS[e]:"")}function jb(a,e){const t=e==="ltr";switch(a){case Re.arrowleft:return t?"left":"right";case Re.arrowright:return t?"right":"left";case Re.arrowup:return"up";case Re.arrowdown:return"down"}}function Ut(a){return Array.isArray(a)?a:[a]}function pS(a,e,t=1){if(typeof t!="number")throw new D("translation-service-quantity-not-a-number",null,{quantity:t});const i=Object.keys(ye.window.CKEDITOR_TRANSLATIONS).length;i===1&&(a=Object.keys(ye.window.CKEDITOR_TRANSLATIONS)[0]);const s=e.id||e.string;if(i===0||!function(p,m){return!!ye.window.CKEDITOR_TRANSLATIONS[p]&&!!ye.window.CKEDITOR_TRANSLATIONS[p].dictionary[m]}(a,s))return t!==1?e.plural:e.string;const c=ye.window.CKEDITOR_TRANSLATIONS[a].dictionary,d=ye.window.CKEDITOR_TRANSLATIONS[a].getPluralForm||(p=>p===1?0:1),h=c[s];return typeof h=="string"?h:h[Number(d(t))]}ye.window.CKEDITOR_TRANSLATIONS||(ye.window.CKEDITOR_TRANSLATIONS={});const mS=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Rb(a){return mS.includes(a)?"rtl":"ltr"}class kS{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Rb(this.uiLanguage),this.contentLanguageDirection=Rb(this.contentLanguage),this.t=(i,s)=>this._t(i,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Ut(t),typeof e=="string"&&(e={string:e});const i=e.plural?t[0]:1;return function(s,c){return s.replace(/%(\d+)/g,(d,h)=>h<c.length?c[h]:d)}(pS(this.uiLanguage,e,i),t)}}class ti extends $(){constructor(e={},t={}){super();const i=hn(e);if(i||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],i)for(const s of e)this._items.push(s),this._itemMap.set(this._getItemIdBeforeAdding(s),s)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new D("collection-add-item-invalid-index",this);let i=0;for(const s of e){const c=this._getItemIdBeforeAdding(s),d=t+i;this._items.splice(d,0,s),this._itemMap.set(c,s),this.fire("add",s,d),i++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new D("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,i]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:i}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new D("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(i=>new t(i))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(i=>i[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,i=(s,c,d)=>{const h=t._bindToCollection==this,p=t._bindToInternalToExternalMap.get(c);if(h&&p)this._bindToExternalToInternalMap.set(c,p),this._bindToInternalToExternalMap.set(p,c);else{const m=e(c);if(!m)return void this._skippedIndexesFromExternal.push(d);let b=d;for(const y of this._skippedIndexesFromExternal)d>y&&b--;for(const y of t._skippedIndexesFromExternal)b>=y&&b++;this._bindToExternalToInternalMap.set(c,m),this._bindToInternalToExternalMap.set(m,c),this.add(m,b);for(let y=0;y<t._skippedIndexesFromExternal.length;y++)b<=t._skippedIndexesFromExternal[y]&&t._skippedIndexesFromExternal[y]++}};for(const s of t)i(0,s,t.getIndex(s));this.listenTo(t,"add",i),this.listenTo(t,"remove",(s,c,d)=>{const h=this._bindToExternalToInternalMap.get(c);h&&this.remove(h),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((p,m)=>(d<m&&p.push(m-1),d>m&&p.push(m),p),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let i;if(t in e){if(i=e[t],typeof i!="string")throw new D("collection-add-invalid-id",this);if(this.get(i))throw new D("collection-add-item-already-exists",this)}else e[t]=i=P();return i}_remove(e){let t,i,s,c=!1;const d=this._idProperty;if(typeof e=="string"?(i=e,s=this._itemMap.get(i),c=!s,s&&(t=this._items.indexOf(s))):typeof e=="number"?(t=e,s=this._items[t],c=!s,s&&(i=s[d])):(s=e,i=s[d],t=this._items.indexOf(s),c=t==-1||!this._itemMap.get(i)),c)throw new D("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(i);const h=this._bindToInternalToExternalMap.get(s);return this._bindToInternalToExternalMap.delete(s),this._bindToExternalToInternalMap.delete(h),this.fire("remove",s,t),[s,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function $t(a){const e=a.next();return e.done?null:e.value}class xn extends tt(Ye()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new D("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class ki{constructor(){this._listener=new(tt())}listenTo(e){this._listener.listenTo(e,"keydown",(t,i)=>{this._listener.fire("_keydown:"+Gs(i),i)})}set(e,t,i={}){const s=Lc(e),c=i.priority;this._listener.listenTo(this._listener,"_keydown:"+s,(d,h)=>{t(h,()=>{h.preventDefault(),h.stopPropagation(),d.stop()}),d.return=!0},{priority:c})}press(e){return!!this._listener.fire("_keydown:"+Gs(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function Ui(a){return hn(a)?new Map(a):function(e){const t=new Map;for(const i in e)t.set(i,e[i]);return t}(a)}function jg(a,e){let t;function i(...s){i.cancel(),t=setTimeout(()=>a(...s),e)}return i.cancel=()=>{clearTimeout(t)},i}function Rg(a,e){return!!(t=a.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(i){return!!i&&i.length==1&&/[\udc00-\udfff]/.test(i)}(a.charAt(e));var t}function Fg(a,e){return!!(t=a.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const bS=function(){const a=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${a}|${e}(?:‍${e})*`,"ug")}();function Fb(a,e){const t=String(a).matchAll(bS);return Array.from(t).some(i=>i.index<e&&e<i.index+i[0].length)}class ae extends Ye(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Vb,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Vb),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Vb(a){a.return=!1,a.stop()}class st extends Ye(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const i=e.model.document.selection,s=i.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(i);(e.isReadOnly||this._isEnabledBasedOnSelection&&!s)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Ub,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Ub),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Ub(a){a.return=!1,a.stop()}class $b extends st{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){B(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class Hb extends $(){constructor(e,t=[],i=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const s of t)s.pluginName&&this._availablePlugins.set(s.pluginName,s);this._contextPlugins=new Map;for(const[s,c]of i)this._contextPlugins.set(s,c),this._contextPlugins.set(c,s),s.pluginName&&this._availablePlugins.set(s.pluginName,s)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let i=e;throw typeof e=="function"&&(i=e.pluginName||e.name),new D("plugincollection-plugin-not-loaded",this._context,{plugin:i})}return t}has(e){return this._plugins.has(e)}init(e,t=[],i=[]){const s=this,c=this._context;(function M(O,z=new Set){O.forEach(V=>{p(V)&&(z.has(V)||(z.add(V),V.pluginName&&!s._availablePlugins.has(V.pluginName)&&s._availablePlugins.set(V.pluginName,V),V.requires&&M(V.requires,z)))})})(e),C(e);const d=[...function M(O,z=new Set){return O.map(V=>p(V)?V:s._availablePlugins.get(V)).reduce((V,Z)=>z.has(Z)?V:(z.add(Z),Z.requires&&(C(Z.requires,Z),M(Z.requires,z).forEach(oe=>V.add(oe))),V.add(Z)),new Set)}(e.filter(M=>!b(M,t)))];(function(M,O){for(const z of O){if(typeof z!="function")throw new D("plugincollection-replace-plugin-invalid-type",null,{pluginItem:z});const V=z.pluginName;if(!V)throw new D("plugincollection-replace-plugin-missing-name",null,{pluginItem:z});if(z.requires&&z.requires.length)throw new D("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:V});const Z=s._availablePlugins.get(V);if(!Z)throw new D("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:V});const oe=M.indexOf(Z);if(oe===-1){if(s._contextPlugins.has(Z))return;throw new D("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:V})}if(Z.requires&&Z.requires.length)throw new D("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:V});M.splice(oe,1,z),s._availablePlugins.set(V,z)}})(d,i);const h=function(M){return M.map(O=>{let z=s._contextPlugins.get(O);return z=z||new O(c),s._add(O,z),z})}(d);return E(h,"init").then(()=>E(h,"afterInit")).then(()=>h);function p(M){return typeof M=="function"}function m(M){return p(M)&&!!M.isContextPlugin}function b(M,O){return O.some(z=>z===M||y(M)===z||y(z)===M)}function y(M){return p(M)?M.pluginName||M.name:M}function C(M,O=null){M.map(z=>p(z)?z:s._availablePlugins.get(z)||z).forEach(z=>{(function(V,Z){if(!p(V))throw Z?new D("plugincollection-soft-required",c,{missingPlugin:V,requiredBy:y(Z)}):new D("plugincollection-plugin-not-found",c,{plugin:V})})(z,O),function(V,Z){if(m(Z)&&!m(V))throw new D("plugincollection-context-required",c,{plugin:y(V),requiredBy:y(Z)})}(z,O),function(V,Z){if(Z&&b(V,t))throw new D("plugincollection-required",c,{plugin:y(V),requiredBy:y(Z)})}(z,O)})}function E(M,O){return M.reduce((z,V)=>V[O]?s._contextPlugins.has(V)?z:z.then(V[O].bind(V)):z,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const i=e.pluginName;if(i){if(this._plugins.has(i))throw new D("plugincollection-plugin-name-conflict",null,{pluginName:i,plugin1:this._plugins.get(i).constructor,plugin2:e});this._plugins.set(i,t)}}}class Wb{constructor(e){this._contextOwner=null,this.config=new gn(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new Hb(this,t);const i=this.config.get("language")||{};this.locale=new kS({uiLanguage:typeof i=="string"?i:i.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new ti}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const i of e.concat(t)){if(typeof i!="function")throw new D("context-initplugins-constructor-only",null,{Plugin:i});if(i.isContextPlugin!==!0)throw new D("context-initplugins-invalid-plugin",null,{Plugin:i})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new D("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const i=new this(e);t(i.initPlugins().then(()=>i))})}}class qb extends Ye(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var wS=o(3379),ve=o.n(wS),Gb=o(7372),_S={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Gb.Z,_S),Gb.Z.locals;const lu=new WeakMap;let Yb=!1;function Zb({view:a,element:e,text:t,isDirectHost:i=!0,keepOnFocus:s=!1}){const c=a.document;function d(h){lu.get(c).set(e,{text:h,isDirectHost:i,keepOnFocus:s,hostElement:i?e:null}),a.change(p=>Vg(c,p))}lu.has(c)||(lu.set(c,new Map),c.registerPostFixer(h=>Vg(c,h)),c.on("change:isComposing",()=>{a.change(h=>Vg(c,h))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(h,p,m)=>{d(m)}),e.placeholder?d(e.placeholder):t&&d(t),t&&function(){Yb||W("enableplaceholder-deprecated-text-option"),Yb=!0}()}function vS(a,e){return!!e.hasClass("ck-placeholder")&&(a.removeClass("ck-placeholder",e),!0)}function Vg(a,e){const t=lu.get(a),i=[];let s=!1;for(const[c,d]of t)d.isDirectHost&&(i.push(c),Kb(e,c,d)&&(s=!0));for(const[c,d]of t){if(d.isDirectHost)continue;const h=yS(c);h&&(i.includes(h)||(d.hostElement=h,Kb(e,c,d)&&(s=!0)))}return s}function Kb(a,e,t){const{text:i,isDirectHost:s,hostElement:c}=t;let d=!1;return c.getAttribute("data-placeholder")!==i&&(a.setAttribute("data-placeholder",i,c),d=!0),(s||e.childCount==1)&&function(h,p){if(!h.isAttached()||Array.from(h.getChildren()).some(C=>!C.is("uiElement")))return!1;const b=h.document,y=b.selection.anchor;return!(b.isComposing&&y&&y.parent===h||!p&&b.isFocused&&(!y||y.parent===h))}(c,t.keepOnFocus)?function(h,p){return!p.hasClass("ck-placeholder")&&(h.addClass("ck-placeholder",p),!0)}(a,c)&&(d=!0):vS(a,c)&&(d=!0),d}function yS(a){if(a.childCount){const e=a.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Vo{is(){throw new Error("is() method is abstract")}}const Qb=function(a){return ke(a,4)};class Uo extends $(Vo){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new D("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let i=e.includeSelf?this:this.parent;for(;i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}getCommonAncestor(e,t={}){const i=this.getAncestors(t),s=e.getAncestors(t);let c=0;for(;i[c]==s[c]&&i[c];)c++;return c===0?null:i[c-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),i=e.getPath(),s=jt(t,i);switch(s){case"prefix":return!0;case"extension":return!1;default:return t[s]<i[s]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Qb(this);return delete e.parent,e}}Uo.prototype.is=function(a){return a==="node"||a==="view:node"};class it extends Uo{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof it&&(this===e||this.data===e.data)}_clone(){return new it(this.document,this.data)}}it.prototype.is=function(a){return a==="$text"||a==="view:$text"||a==="text"||a==="view:text"||a==="node"||a==="view:node"};class $i extends Vo{constructor(e,t,i){if(super(),this.textNode=e,t<0||t>e.data.length)throw new D("view-textproxy-wrong-offsetintext",this);if(i<0||t+i>e.data.length)throw new D("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+i),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let i=e.includeSelf?this.textNode:this.parent;for(;i!==null;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}}$i.prototype.is=function(a){return a==="$textProxy"||a==="view:$textProxy"||a==="textProxy"||a==="view:textProxy"};class ni{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const i of this._patterns){const s=Jb(t,i);if(s)return{element:t,pattern:i,match:s}}return null}matchAll(...e){const t=[];for(const i of e)for(const s of this._patterns){const c=Jb(i,s);c&&t.push({element:i,pattern:s,match:c})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Jb(a,e){if(typeof e=="function")return e(a);const t={};return e.name&&(t.name=function(i,s){return i instanceof RegExp?!!s.match(i):i===s}(e.name,a.name),!t.name)||e.attributes&&(t.attributes=function(i,s){const c=new Set(s.getAttributeKeys());return fn(i)?(i.style!==void 0&&W("matcher-pattern-deprecated-attributes-style-key",i),i.class!==void 0&&W("matcher-pattern-deprecated-attributes-class-key",i)):(c.delete("style"),c.delete("class")),Ug(i,c,d=>s.getAttribute(d))}(e.attributes,a),!t.attributes)||e.classes&&(t.classes=function(i,s){return Ug(i,s.getClassNames(),()=>{})}(e.classes,a),!t.classes)||e.styles&&(t.styles=function(i,s){return Ug(i,s.getStyleNames(!0),c=>s.getStyle(c))}(e.styles,a),!t.styles)?null:t}function Ug(a,e,t){const i=function(d){return Array.isArray(d)?d.map(h=>fn(h)?(h.key!==void 0&&h.value!==void 0||W("matcher-pattern-missing-key-or-value",h),[h.key,h.value]):[h,!0]):fn(d)?Object.entries(d):[[d,!0]]}(a),s=Array.from(e),c=[];if(i.forEach(([d,h])=>{s.forEach(p=>{(function(m,b){return m===!0||m===b||m instanceof RegExp&&b.match(m)})(d,p)&&function(m,b,y){if(m===!0)return!0;const C=y(b);return m===C||m instanceof RegExp&&!!String(C).match(m)}(h,p,t)&&c.push(p)})}),i.length&&!(c.length<i.length))return c}const du=function(a){return typeof a=="symbol"||Cn(a)&&zi(a)=="[object Symbol]"};var AS=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,CS=/^\w*$/;const xS=function(a,e){if(Zt(a))return!1;var t=typeof a;return!(t!="number"&&t!="symbol"&&t!="boolean"&&a!=null&&!du(a))||CS.test(a)||!AS.test(a)||e!=null&&a in Object(e)};function $g(a,e){if(typeof a!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var i=arguments,s=e?e.apply(this,i):i[0],c=t.cache;if(c.has(s))return c.get(s);var d=a.apply(this,i);return t.cache=c.set(s,d)||c,d};return t.cache=new($g.Cache||Bs),t}$g.Cache=Bs;const ES=$g,DS=function(a){var e=ES(a,function(i){return t.size===500&&t.clear(),i}),t=e.cache;return e};var SS=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,TS=/\\(\\)?/g,IS=DS(function(a){var e=[];return a.charCodeAt(0)===46&&e.push(""),a.replace(SS,function(t,i,s,c){e.push(s?c.replace(TS,"$1"):i||t)}),e});const MS=IS,NS=function(a,e){for(var t=-1,i=a==null?0:a.length,s=Array(i);++t<i;)s[t]=e(a[t],t,a);return s};var Xb=zn?zn.prototype:void 0,ew=Xb?Xb.toString:void 0;const OS=function a(e){if(typeof e=="string")return e;if(Zt(e))return NS(e,a)+"";if(du(e))return ew?ew.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Hg=function(a){return a==null?"":OS(a)},Wg=function(a,e){return Zt(a)?a:xS(a,e)?[a]:MS(Hg(a))},BS=function(a){var e=a==null?0:a.length;return e?a[e-1]:void 0},qg=function(a){if(typeof a=="string"||du(a))return a;var e=a+"";return e=="0"&&1/a==-1/0?"-0":e},tw=function(a,e){for(var t=0,i=(e=Wg(e,a)).length;a!=null&&t<i;)a=a[qg(e[t++])];return t&&t==i?a:void 0},nw=function(a,e,t){var i=-1,s=a.length;e<0&&(e=-e>s?0:s+e),(t=t>s?s:t)<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var c=Array(s);++i<s;)c[i]=a[i+e];return c},PS=function(a,e){return e.length<2?a:tw(a,nw(e,0,-1))},LS=function(a,e){return e=Wg(e,a),(a=PS(a,e))==null||delete a[qg(BS(e))]},zS=function(a,e){return a==null||LS(a,e)},uu=function(a,e,t){var i=a==null?void 0:tw(a,e);return i===void 0?t:i},Gg=function(a,e,t){(t!==void 0&&!Oo(a[e],t)||t===void 0&&!(e in a))&&lr(a,e,t)},jS=function(a){return function(e,t,i){for(var s=-1,c=Object(e),d=i(e),h=d.length;h--;){var p=d[a?h:++s];if(t(c[p],p,c)===!1)break}return e}}(),RS=function(a){return Cn(a)&&js(a)},Yg=function(a,e){if((e!=="constructor"||typeof a[e]!="function")&&e!="__proto__")return a[e]},FS=function(a){return dr(a,Vi(a))},VS=function(a,e,t,i,s,c,d){var h=Yg(a,t),p=Yg(e,t),m=d.get(p);if(m)Gg(a,t,m);else{var b=c?c(h,p,t+"",a,e,d):void 0,y=b===void 0;if(y){var C=Zt(p),E=!C&&Ro(p),M=!C&&!E&&kc(p);b=p,C||E||M?Zt(h)?b=h:RS(h)?b=Wd(h):E?(y=!1,b=xc(p,!0)):M?(y=!1,b=Oc(p,!0)):b=[]:fn(p)||fc(p)?(b=h,fc(h)?b=FS(h):pe(h)&&!ar(h)||(b=hr(p))):y=!1}y&&(d.set(p,b),s(b,p,i,c,d),d.delete(p)),Gg(a,t,b)}},US=function a(e,t,i,s,c){e!==t&&jS(t,function(d,h){if(c||(c=new zo),pe(d))VS(e,t,h,i,a,s,c);else{var p=s?s(Yg(e,h),d,h+"",e,t,c):void 0;p===void 0&&(p=d),Gg(e,h,p)}},Vi)},$o=function(a){return a},$S=function(a,e,t){switch(t.length){case 0:return a.call(e);case 1:return a.call(e,t[0]);case 2:return a.call(e,t[0],t[1]);case 3:return a.call(e,t[0],t[1],t[2])}return a.apply(e,t)};var iw=Math.max;const HS=function(a,e,t){return e=iw(e===void 0?a.length-1:e,0),function(){for(var i=arguments,s=-1,c=iw(i.length-e,0),d=Array(c);++s<c;)d[s]=i[e+s];s=-1;for(var h=Array(e+1);++s<e;)h[s]=i[s];return h[e]=t(d),$S(a,this,h)}},WS=function(a){return function(){return a}},qS=jo?function(a,e){return jo(a,"toString",{configurable:!0,enumerable:!1,value:WS(e),writable:!0})}:$o;var GS=Date.now;const YS=function(a){var e=0,t=0;return function(){var i=GS(),s=16-(i-t);if(t=i,s>0){if(++e>=800)return arguments[0]}else e=0;return a.apply(void 0,arguments)}}(qS),ZS=function(a,e){return YS(HS(a,e,$o),a+"")},KS=function(a,e,t){if(!pe(t))return!1;var i=typeof e;return!!(i=="number"?js(t)&&pc(e,t.length):i=="string"&&e in t)&&Oo(t[e],a)},rw=function(a){return ZS(function(e,t){var i=-1,s=t.length,c=s>1?t[s-1]:void 0,d=s>2?t[2]:void 0;for(c=a.length>3&&typeof c=="function"?(s--,c):void 0,d&&KS(t[0],t[1],d)&&(c=s<3?void 0:c,s=1),e=Object(e);++i<s;){var h=t[i];h&&a(e,h,i,c)}return e})},ow=rw(function(a,e,t){US(a,e,t)}),QS=function(a,e,t,i){if(!pe(a))return a;for(var s=-1,c=(e=Wg(e,a)).length,d=c-1,h=a;h!=null&&++s<c;){var p=qg(e[s]),m=t;if(p==="__proto__"||p==="constructor"||p==="prototype")return a;if(s!=d){var b=h[p];(m=i?i(b,p,h):void 0)===void 0&&(m=pe(b)?b:pc(e[s+1])?[]:{})}Fi(h,p,m),h=h[p]}return a},JS=function(a,e,t){return a==null?a:QS(a,e,t)};class XS{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(i){let s=null,c=0,d=0,h=null;const p=new Map;if(i==="")return p;i.charAt(i.length-1)!=";"&&(i+=";");for(let m=0;m<i.length;m++){const b=i.charAt(m);if(s===null)switch(b){case":":h||(h=i.substr(c,m-c),d=m+1);break;case'"':case"'":s=b;break;case";":{const y=i.substr(d,m-d);h&&p.set(h.trim(),y.trim()),h=null,c=m+1;break}}else b===s&&(s=null)}return p}(e).entries());for(const[i,s]of t)this._styleProcessor.toNormalizedForm(i,s,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([i])=>i===e);return Array.isArray(t)}set(e,t){if(pe(e))for(const[i,s]of Object.entries(e))this._styleProcessor.toNormalizedForm(i,s,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Zg(e);zS(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!pe(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([i])=>i===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const i of t)e.push(...this._styleProcessor.getReducedForm(i,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const i=t.splice(0,t.length-1).join("."),s=uu(this._styles,i);s&&!Array.from(Object.keys(s)).length&&this.remove(i)}}class eT{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,i){if(pe(t))Kg(i,Zg(e),t);else if(this._normalizers.has(e)){const s=this._normalizers.get(e),{path:c,value:d}=s(t);Kg(i,c,d)}else Kg(i,e,t)}getNormalized(e,t){if(!e)return ow({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const i=this._extractors.get(e);if(typeof i=="string")return uu(t,i);const s=i(e,t);if(s)return s}return uu(t,Zg(e))}getReducedForm(e,t){const i=this.getNormalized(e,t);return i===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(i):[[e,i]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(s=>{const c=this.getNormalized(s,e);return c&&typeof c=="object"?Object.keys(c).length:c}),i=new Set([...t,...Object.keys(e)]);return Array.from(i.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const i of t)this._mapStyleNames(i,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Zg(a){return a.replace("-",".")}function Kg(a,e,t){let i=t;pe(t)&&(i=ow({},uu(a,e),t)),JS(a,e,i)}class Fn extends Uo{constructor(e,t,i,s){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(c){const d=Ui(c);for(const[h,p]of d)p===null?d.delete(h):typeof p!="string"&&d.set(h,String(p));return d}(i),this._children=[],s&&this._insertChild(0,s),this._classes=new Set,this._attrs.has("class")){const c=this._attrs.get("class");sw(this._classes,c),this._attrs.delete("class")}this._styles=new XS(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Fn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,i]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==i)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new ni(...e);let i=this.parent;for(;i&&!i.is("documentFragment");){if(t.match(i))return i;i=i.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),i=Array.from(this._attrs).map(s=>`${s[0]}="${s[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(i==""?"":` ${i}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const s of this.getChildren())t.push(s._clone(e));const i=new this.constructor(this.document,this.name,this._attrs,t);return i._classes=new Set(this._classes),i._styles.set(this._styles.getNormalized()),i._customProperties=new Map(this._customProperties),i.getFillerOffset=this.getFillerOffset,i._unsafeAttributesToRender=this._unsafeAttributesToRender,i}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let i=0;const s=function(c,d){return typeof d=="string"?[new it(c,d)]:(hn(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new it(c,h):h instanceof $i?new it(c,h.data):h))}(this.document,t);for(const c of s)c.parent!==null&&c._remove(),c.parent=this,c.document=this.document,this._children.splice(e,0,c),e++,i++;return i}_removeChildren(e,t=1){this._fireChange("children",this);for(let i=e;i<e+t;i++)this._children[i].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const i=String(t);this._fireChange("attributes",this),e=="class"?sw(this._classes,i):e=="style"?this._styles.setTo(i):this._attrs.set(e,i)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Ut(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Ut(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Ut(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function sw(a,e){const t=e.split(/\s+/);a.clear(),t.forEach(i=>a.add(i))}Fn.prototype.is=function(a,e){return e?e===this.name&&(a==="element"||a==="view:element"):a==="element"||a==="view:element"||a==="node"||a==="view:node"};class zc extends Fn{constructor(e,t,i,s){super(e,t,i,s),this.getFillerOffset=aw}}function aw(){const a=[...this.getChildren()],e=a[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of a)if(!t.is("uiElement"))return null;return this.childCount}zc.prototype.is=function(a,e){return e?e===this.name&&(a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"):a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class hu extends Ye(zc){constructor(e,t,i,s){super(e,t,i,s),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",c=>c&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}hu.prototype.is=function(a,e){return e?e===this.name&&(a==="editableElement"||a==="view:editableElement"||a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"):a==="editableElement"||a==="view:editableElement"||a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};const cw=Symbol("rootName");class lw extends hu{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(cw)}set rootName(e){this._setCustomProperty(cw,e)}set _name(e){this.name=e}}lw.prototype.is=function(a,e){return e?e===this.name&&(a==="rootElement"||a==="view:rootElement"||a==="editableElement"||a==="view:editableElement"||a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"):a==="rootElement"||a==="view:rootElement"||a==="editableElement"||a==="view:editableElement"||a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class Ho{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new D("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new D("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=fe._createAt(e.startPosition):this._position=fe._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,i;do i=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,i=e.parent;if(i.parent===null&&e.offset===i.childCount)return{done:!0,value:void 0};if(i===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let s;if(i instanceof it){if(e.isAtEnd)return this._position=fe._createAfter(i),this._next();s=i.data[e.offset]}else s=i.getChild(e.offset);if(s instanceof Fn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new fe(s,0);return this._position=e,this._formatReturnValue("elementStart",s,t,e,1)}if(s instanceof it){if(this.singleCharacters)return e=new fe(s,0),this._position=e,this._next();let c,d=s.data.length;return s==this._boundaryEndParent?(d=this.boundaries.end.offset,c=new $i(s,0,d),e=fe._createAfter(c)):(c=new $i(s,0,s.data.length),e.offset++),this._position=e,this._formatReturnValue("text",c,t,e,d)}if(typeof s=="string"){let c;this.singleCharacters?c=1:c=(i===this._boundaryEndParent?this.boundaries.end.offset:i.data.length)-e.offset;const d=new $i(i,e.offset,c);return e.offset+=c,this._position=e,this._formatReturnValue("text",d,t,e,c)}return e=fe._createAfter(i),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",i,t,e)}_previous(){let e=this.position.clone();const t=this.position,i=e.parent;if(i.parent===null&&e.offset===0)return{done:!0,value:void 0};if(i==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let s;if(i instanceof it){if(e.isAtStart)return this._position=fe._createBefore(i),this._previous();s=i.data[e.offset-1]}else s=i.getChild(e.offset-1);if(s instanceof Fn)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",s,t,e,1)):(e=new fe(s,s.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",s,t,e));if(s instanceof it){if(this.singleCharacters)return e=new fe(s,s.data.length),this._position=e,this._previous();let c,d=s.data.length;if(s==this._boundaryStartParent){const h=this.boundaries.start.offset;c=new $i(s,h,s.data.length-h),d=c.data.length,e=fe._createBefore(c)}else c=new $i(s,0,s.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",c,t,e,d)}if(typeof s=="string"){let c;if(this.singleCharacters)c=1;else{const h=i===this._boundaryStartParent?this.boundaries.start.offset:0;c=e.offset-h}e.offset-=c;const d=new $i(i,e.offset,c);return this._position=e,this._formatReturnValue("text",d,t,e,c)}return e=fe._createBefore(i),this._position=e,this._formatReturnValue("elementStart",i,t,e,1)}_formatReturnValue(e,t,i,s,c){return t instanceof $i&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?i=fe._createAfter(t.textNode):(s=fe._createAfter(t.textNode),this._position=s)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?i=fe._createBefore(t.textNode):(s=fe._createBefore(t.textNode),this._position=s))),{done:!1,value:{type:e,item:t,previousPosition:i,nextPosition:s,length:c}}}}class fe extends Vo{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof hu);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=fe._createAt(this),i=t.offset+e;return t.offset=i<0?0:i,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const i=new Ho(t);return i.skip(e),i.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),i=e.getAncestors();let s=0;for(;t[s]==i[s]&&t[s];)s++;return s===0?null:t[s-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],i=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),i.push(e.offset);const s=jt(t,i);switch(s){case"prefix":return"before";case"extension":return"after";default:return t[s]<i[s]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Ho(e)}clone(){return new fe(this.parent,this.offset)}static _createAt(e,t){if(e instanceof fe)return new this(e.parent,e.offset);{const i=e;if(t=="end")t=i.is("$text")?i.data.length:i.childCount;else{if(t=="before")return this._createBefore(i);if(t=="after")return this._createAfter(i);if(t!==0&&!t)throw new D("view-createpositionat-offset-required",i)}return new fe(i,t)}}static _createAfter(e){if(e.is("$textProxy"))return new fe(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new D("view-position-after-root",e,{root:e});return new fe(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new fe(e.textNode,e.offsetInText);if(!e.parent)throw new D("view-position-before-root",e,{root:e});return new fe(e.parent,e.index)}}fe.prototype.is=function(a){return a==="position"||a==="view:position"};class Ce extends Vo{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Ho({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(fu,{direction:"backward"}),t=this.end.getLastMatchingPosition(fu);return e.parent.is("$text")&&e.isAtStart&&(e=fe._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=fe._createAfter(t.parent)),new Ce(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(fu);if(e.isAfter(this.end)||e.isEqual(this.end))return new Ce(e,e);let t=this.end.getLastMatchingPosition(fu,{direction:"backward"});const i=e.nodeAfter,s=t.nodeBefore;return i&&i.is("$text")&&(e=new fe(i,0)),s&&s.is("$text")&&(t=new fe(s,s.data.length)),new Ce(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const i=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),s=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return i&&s}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Ce(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Ce(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,i=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(i=e.end),new Ce(t,i)}return null}getWalker(e={}){return e.boundaries=this,new Ho(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Ce(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Ho(e);for(const i of t)yield i.item}*getPositions(e={}){e.boundaries=this;const t=new Ho(e);yield t.position;for(const i of t)yield i.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,i,s){return new this(new fe(e,t),new fe(i,s))}static _createFromPositionAndShift(e,t){const i=e,s=e.getShiftedBy(t);return t>0?new this(i,s):new this(s,i)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(fe._createBefore(e),t)}}function fu(a){return!(!a.item.is("attributeElement")&&!a.item.is("uiElement"))}Ce.prototype.is=function(a){return a==="range"||a==="view:range"};class bi extends $(Vo){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let i=!1;for(const s of e._ranges)if(t.isEqual(s)){i=!0;break}if(!i)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Es(this.getRanges());if(t!=Es(e.getRanges()))return!1;if(t==0)return!0;for(let i of this.getRanges()){i=i.getTrimmed();let s=!1;for(let c of e.getRanges())if(c=c.getTrimmed(),i.start.isEqual(c.start)&&i.end.isEqual(c.end)){s=!0;break}if(!s)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,i,s]=e;if(typeof i=="object"&&(s=i,i=void 0),t===null)this._setRanges([]),this._setFakeOptions(s);else if(t instanceof bi||t instanceof Qg)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Ce)this._setRanges([t],s&&s.backward),this._setFakeOptions(s);else if(t instanceof fe)this._setRanges([new Ce(t)]),this._setFakeOptions(s);else if(t instanceof Uo){const c=!!s&&!!s.backward;let d;if(i===void 0)throw new D("view-selection-setto-required-second-parameter",this);d=i=="in"?Ce._createIn(t):i=="on"?Ce._createOn(t):new Ce(fe._createAt(t,i)),this._setRanges([d],c),this._setFakeOptions(s)}else{if(!hn(t))throw new D("view-selection-setto-not-selectable",this);this._setRanges(t,s&&s.backward),this._setFakeOptions(s)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new D("view-selection-setfocus-no-ranges",this);const i=fe._createAt(e,t);if(i.compareWith(this.focus)=="same")return;const s=this.anchor;this._ranges.pop(),i.compareWith(s)=="before"?this._addRange(new Ce(i,s),!0):this._addRange(new Ce(s,i)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const i of e)this._addRange(i);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Ce))throw new D("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new D("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Ce(e.start,e.end))}}bi.prototype.is=function(a){return a==="selection"||a==="view:selection"};class Qg extends $(Vo){constructor(...e){super(),this._selection=new bi,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Qg.prototype.is=function(a){return a==="selection"||a=="documentSelection"||a=="view:selection"||a=="view:documentSelection"};class Ys extends S{constructor(e,t,i){super(e,t),this.startRange=i,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Jg=Symbol("bubbling contexts");function Xg(a){return class extends a{fire(e,...t){try{const i=e instanceof S?e:new S(this,e),s=ep(this);if(!s.size)return;if(jc(i,"capturing",this),Zs(s,"$capture",i,...t))return i.return;const c=i.startRange||this.selection.getFirstRange(),d=c?c.getContainedElement():null,h=!!d&&!!dw(s,d);let p=d||function(m){if(!m)return null;const b=m.start.parent,y=m.end.parent,C=b.getPath(),E=y.getPath();return C.length>E.length?b:y}(c);if(jc(i,"atTarget",p),!h){if(Zs(s,"$text",i,...t))return i.return;jc(i,"bubbling",p)}for(;p;){if(p.is("rootElement")){if(Zs(s,"$root",i,...t))return i.return}else if(p.is("element")&&Zs(s,p.name,i,...t))return i.return;if(Zs(s,p,i,...t))return i.return;p=p.parent,jc(i,"bubbling",p)}return jc(i,"bubbling",this),Zs(s,"$document",i,...t),i.return}catch(i){D.rethrowUnexpectedError(i,this)}}_addEventListener(e,t,i){const s=Ut(i.context||"$document"),c=ep(this);for(const d of s){let h=c.get(d);h||(h=new($()),c.set(d,h)),this.listenTo(h,e,t,i)}}_removeEventListener(e,t){const i=ep(this);for(const s of i.values())this.stopListening(s,e,t)}}}{const a=Xg(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Xg[e]=a.prototype[e]})}function jc(a,e,t){a instanceof Ys&&(a._eventPhase=e,a._currentTarget=t)}function Zs(a,e,t,...i){const s=typeof e=="string"?a.get(e):dw(a,e);return!!s&&(s.fire(t,...i),t.stop.called)}function dw(a,e){for(const[t,i]of a)if(typeof t=="function"&&t(e))return i;return null}function ep(a){return a[Jg]||(a[Jg]=new Map),a[Jg]}class gu extends Xg(Ye()){constructor(e){super(),this._postFixers=new Set,this.selection=new Qg,this.roots=new ti({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const i of this._postFixers)if(t=i(e),t)break;while(t)}}class Wo extends Fn{constructor(e,t,i,s){super(e,t,i,s),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=tT}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new D("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function tT(){if(tp(this))return null;let a=this.parent;for(;a&&a.is("attributeElement");){if(tp(a)>1)return null;a=a.parent}return!a||tp(a)>1?null:this.childCount}function tp(a){return Array.from(a.getChildren()).filter(e=>!e.is("uiElement")).length}Wo.DEFAULT_PRIORITY=10,Wo.prototype.is=function(a,e){return e?e===this.name&&(a==="attributeElement"||a==="view:attributeElement"||a==="element"||a==="view:element"):a==="attributeElement"||a==="view:attributeElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class np extends Fn{constructor(e,t,i,s){super(e,t,i,s),this.getFillerOffset=nT}_insertChild(e,t){if(t&&(t instanceof Uo||Array.from(t).length>0))throw new D("view-emptyelement-cannot-add",[this,t]);return 0}}function nT(){return null}np.prototype.is=function(a,e){return e?e===this.name&&(a==="emptyElement"||a==="view:emptyElement"||a==="element"||a==="view:element"):a==="emptyElement"||a==="view:emptyElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class pu extends Fn{constructor(e,t,i,s){super(e,t,i,s),this.getFillerOffset=rT}_insertChild(e,t){if(t&&(t instanceof Uo||Array.from(t).length>0))throw new D("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const i of this.getAttributeKeys())t.setAttribute(i,this.getAttribute(i));return t}}function iT(a){a.document.on("arrowKey",(e,t)=>function(i,s,c){if(s.keyCode==Re.arrowright){const d=s.domTarget.ownerDocument.defaultView.getSelection(),h=d.rangeCount==1&&d.getRangeAt(0).collapsed;if(h||s.shiftKey){const p=d.focusNode,m=d.focusOffset,b=c.domPositionToView(p,m);if(b===null)return;let y=!1;const C=b.getLastMatchingPosition(E=>(E.item.is("uiElement")&&(y=!0),!(!E.item.is("uiElement")&&!E.item.is("attributeElement"))));if(y){const E=c.viewPositionToDom(C);h?d.collapse(E.parent,E.offset):d.extend(E.parent,E.offset)}}}}(0,t,a.domConverter),{priority:"low"})}function rT(){return null}pu.prototype.is=function(a,e){return e?e===this.name&&(a==="uiElement"||a==="view:uiElement"||a==="element"||a==="view:element"):a==="uiElement"||a==="view:uiElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class ip extends Fn{constructor(e,t,i,s){super(e,t,i,s),this.getFillerOffset=oT}_insertChild(e,t){if(t&&(t instanceof Uo||Array.from(t).length>0))throw new D("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function oT(){return null}ip.prototype.is=function(a,e){return e?e===this.name&&(a==="rawElement"||a==="view:rawElement"||a==="element"||a==="view:element"):a==="rawElement"||a==="view:rawElement"||a===this.name||a==="view:"+this.name||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class qo extends $(Vo){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let i=0;const s=function(c,d){return typeof d=="string"?[new it(c,d)]:(hn(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new it(c,h):h instanceof $i?new it(c,h.data):h))}(this.document,t);for(const c of s)c.parent!==null&&c._remove(),c.parent=this,this._children.splice(e,0,c),e++,i++;return i}_removeChildren(e,t=1){this._fireChange("children",this);for(let i=e;i<e+t;i++)this._children[i].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}qo.prototype.is=function(a){return a==="documentFragment"||a==="view:documentFragment"};class uw{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new qo(this.document,e)}createText(e){return new it(this.document,e)}createAttributeElement(e,t,i={}){const s=new Wo(this.document,e,t);return typeof i.priority=="number"&&(s._priority=i.priority),i.id&&(s._id=i.id),i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createContainerElement(e,t,i={},s={}){let c=null;fn(i)?s=i:c=i;const d=new zc(this.document,e,t,c);return s.renderUnsafeAttributes&&d._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),d}createEditableElement(e,t,i={}){const s=new hu(this.document,e,t);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEmptyElement(e,t,i={}){const s=new np(this.document,e,t);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createUIElement(e,t,i){const s=new pu(this.document,e,t);return i&&(s.render=i),s}createRawElement(e,t,i,s={}){const c=new ip(this.document,e,t);return i&&(c.render=i),s.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),c}setAttribute(e,t,i){i._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,i){fn(e)&&i===void 0?t._setStyle(e):i._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,i){i._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof fe?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new D("view-writer-break-non-container-element",this.document);if(!t.parent)throw new D("view-writer-break-root",this.document);if(e.isAtStart)return fe._createBefore(t);if(!e.isAtEnd){const i=t._clone(!1);this.insert(fe._createAfter(t),i);const s=new Ce(e,fe._createAt(t,"end")),c=new fe(i,0);this.move(s,c)}return fe._createAfter(t)}mergeAttributes(e){const t=e.offset,i=e.parent;if(i.is("$text"))return e;if(i.is("attributeElement")&&i.childCount===0){const d=i.parent,h=i.index;return i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new fe(d,h))}const s=i.getChild(t-1),c=i.getChild(t);if(!s||!c)return e;if(s.is("$text")&&c.is("$text"))return fw(s,c);if(s.is("attributeElement")&&c.is("attributeElement")&&s.isSimilar(c)){const d=s.childCount;return s._appendChild(c.getChildren()),c._remove(),this._removeFromClonedElementsGroup(c),this.mergeAttributes(new fe(s,d))}return e}mergeContainers(e){const t=e.nodeBefore,i=e.nodeAfter;if(!(t&&i&&t.is("containerElement")&&i.is("containerElement")))throw new D("view-writer-merge-containers-invalid-position",this.document);const s=t.getChild(t.childCount-1),c=s instanceof it?fe._createAt(s,"end"):fe._createAt(t,"end");return this.move(Ce._createIn(i),fe._createAt(t,"end")),this.remove(Ce._createOn(i)),c}insert(e,t){gw(t=hn(t)?[...t]:[t],this.document);const i=t.reduce((d,h)=>{const p=d[d.length-1],m=!h.is("uiElement");return p&&p.breakAttributes==m?p.nodes.push(h):d.push({breakAttributes:m,nodes:[h]}),d},[]);let s=null,c=e;for(const{nodes:d,breakAttributes:h}of i){const p=this._insertNodes(c,d,h);s||(s=p.start),c=p.end}return s?new Ce(s,c):new Ce(e)}remove(e){const t=e instanceof Ce?e:Ce._createOn(e);if(Rc(t,this.document),t.isCollapsed)return new qo(this.document);const{start:i,end:s}=this._breakAttributesRange(t,!0),c=i.parent,d=s.offset-i.offset,h=c._removeChildren(i.offset,d);for(const m of h)this._removeFromClonedElementsGroup(m);const p=this.mergeAttributes(i);return t.start=p,t.end=p.clone(),new qo(this.document,h)}clear(e,t){Rc(e,this.document);const i=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const s of i){const c=s.item;let d;if(c.is("element")&&t.isSimilar(c))d=Ce._createOn(c);else if(!s.nextPosition.isAfter(e.start)&&c.is("$textProxy")){const h=c.getAncestors().find(p=>p.is("element")&&t.isSimilar(p));h&&(d=Ce._createIn(h))}d&&(d.end.isAfter(e.end)&&(d.end=e.end),d.start.isBefore(e.start)&&(d.start=e.start),this.remove(d))}}move(e,t){let i;if(t.isAfter(e.end)){const s=(t=this._breakAttributes(t,!0)).parent,c=s.childCount;e=this._breakAttributesRange(e,!0),i=this.remove(e),t.offset+=s.childCount-c}else i=this.remove(e);return this.insert(t,i)}wrap(e,t){if(!(t instanceof Wo))throw new D("view-writer-wrap-invalid-attribute",this.document);if(Rc(e,this.document),e.isCollapsed){let s=e.start;s.parent.is("element")&&(i=s.parent,!Array.from(i.getChildren()).some(d=>!d.is("uiElement")))&&(s=s.getLastMatchingPosition(d=>d.item.is("uiElement"))),s=this._wrapPosition(s,t);const c=this.document.selection;return c.isCollapsed&&c.getFirstPosition().isEqual(e.start)&&this.setSelection(s),new Ce(s)}return this._wrapRange(e,t);var i}unwrap(e,t){if(!(t instanceof Wo))throw new D("view-writer-unwrap-invalid-attribute",this.document);if(Rc(e,this.document),e.isCollapsed)return e;const{start:i,end:s}=this._breakAttributesRange(e,!0),c=i.parent,d=this._unwrapChildren(c,i.offset,s.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const p=this.mergeAttributes(d.end);return new Ce(h,p)}rename(e,t){const i=new zc(this.document,e,t.getAttributes());return this.insert(fe._createAfter(t),i),this.move(Ce._createIn(t),fe._createAt(i,0)),this.remove(Ce._createOn(t)),i}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return fe._createAt(e,t)}createPositionAfter(e){return fe._createAfter(e)}createPositionBefore(e){return fe._createBefore(e)}createRange(e,t){return new Ce(e,t)}createRangeOn(e){return Ce._createOn(e)}createRangeIn(e){return Ce._createIn(e)}createSelection(...e){return new bi(...e)}createSlot(e="children"){if(!this._slotFactory)throw new D("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,i){let s,c;if(s=i?rp(e):e.parent.is("$text")?e.parent.parent:e.parent,!s)throw new D("view-writer-invalid-position-container",this.document);c=i?this._breakAttributes(e,!0):e.parent.is("$text")?op(e):e;const d=s._insertChild(c.offset,t);for(const b of t)this._addToClonedElementsGroup(b);const h=c.getShiftedBy(d),p=this.mergeAttributes(c);p.isEqual(c)||h.offset--;const m=this.mergeAttributes(h);return new Ce(p,m)}_wrapChildren(e,t,i,s){let c=t;const d=[];for(;c<i;){const p=e.getChild(c),m=p.is("$text"),b=p.is("attributeElement");if(b&&this._wrapAttributeElement(s,p))d.push(new fe(e,c));else if(m||!b||sT(s,p)){const y=s._clone();p._remove(),y._appendChild(p),e._insertChild(c,y),this._addToClonedElementsGroup(y),d.push(new fe(e,c))}else this._wrapChildren(p,0,p.childCount,s);c++}let h=0;for(const p of d)p.offset-=h,p.offset!=t&&(this.mergeAttributes(p).isEqual(p)||(h++,i--));return Ce._createFromParentsAndOffsets(e,t,e,i)}_unwrapChildren(e,t,i,s){let c=t;const d=[];for(;c<i;){const p=e.getChild(c);if(p.is("attributeElement"))if(p.isSimilar(s)){const m=p.getChildren(),b=p.childCount;p._remove(),e._insertChild(c,m),this._removeFromClonedElementsGroup(p),d.push(new fe(e,c),new fe(e,c+b)),c+=b,i+=b-1}else this._unwrapAttributeElement(s,p)?(d.push(new fe(e,c),new fe(e,c+1)),c++):(this._unwrapChildren(p,0,p.childCount,s),c++);else c++}let h=0;for(const p of d)p.offset-=h,!(p.offset==t||p.offset==i)&&(this.mergeAttributes(p).isEqual(p)||(h++,i--));return Ce._createFromParentsAndOffsets(e,t,e,i)}_wrapRange(e,t){const{start:i,end:s}=this._breakAttributesRange(e,!0),c=i.parent,d=this._wrapChildren(c,i.offset,s.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const p=this.mergeAttributes(d.end);return new Ce(h,p)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return hw(e.clone());e.parent.is("$text")&&(e=op(e));const i=this.createAttributeElement("_wrapPosition-fake-element");i._priority=Number.POSITIVE_INFINITY,i.isSimilar=()=>!1,e.parent._insertChild(e.offset,i);const s=new Ce(e,e.getShiftedBy(1));this.wrap(s,t);const c=new fe(i.parent,i.index);i._remove();const d=c.nodeBefore,h=c.nodeAfter;return d instanceof it&&h instanceof it?fw(d,h):hw(c)}_wrapAttributeElement(e,t){if(!pw(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const i of e.getAttributeKeys())if(i!=="class"&&i!=="style"&&t.hasAttribute(i)&&t.getAttribute(i)!==e.getAttribute(i))return!1;for(const i of e.getStyleNames())if(t.hasStyle(i)&&t.getStyle(i)!==e.getStyle(i))return!1;for(const i of e.getAttributeKeys())i!=="class"&&i!=="style"&&(t.hasAttribute(i)||this.setAttribute(i,e.getAttribute(i),t));for(const i of e.getStyleNames())t.hasStyle(i)||this.setStyle(i,e.getStyle(i),t);for(const i of e.getClassNames())t.hasClass(i)||this.addClass(i,t);return!0}_unwrapAttributeElement(e,t){if(!pw(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const i of e.getAttributeKeys())if(i!=="class"&&i!=="style"&&(!t.hasAttribute(i)||t.getAttribute(i)!==e.getAttribute(i)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const i of e.getStyleNames())if(!t.hasStyle(i)||t.getStyle(i)!==e.getStyle(i))return!1;for(const i of e.getAttributeKeys())i!=="class"&&i!=="style"&&this.removeAttribute(i,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const i=e.start,s=e.end;if(Rc(e,this.document),e.isCollapsed){const p=this._breakAttributes(e.start,t);return new Ce(p,p)}const c=this._breakAttributes(s,t),d=c.parent.childCount,h=this._breakAttributes(i,t);return c.offset+=c.parent.childCount-d,new Ce(h,c)}_breakAttributes(e,t=!1){const i=e.offset,s=e.parent;if(e.parent.is("emptyElement"))throw new D("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new D("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new D("view-writer-cannot-break-raw-element",this.document);if(!t&&s.is("$text")&&sp(s.parent)||sp(s))return e.clone();if(s.is("$text"))return this._breakAttributes(op(e),t);if(i==s.childCount){const c=new fe(s.parent,s.index+1);return this._breakAttributes(c,t)}if(i===0){const c=new fe(s.parent,s.index);return this._breakAttributes(c,t)}{const c=s.index+1,d=s._clone();s.parent._insertChild(c,d),this._addToClonedElementsGroup(d);const h=s.childCount-i,p=s._removeChildren(i,h);d._appendChild(p);const m=new fe(s.parent,c);return this._breakAttributes(m,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const s of e.getChildren())this._addToClonedElementsGroup(s);const t=e.id;if(!t)return;let i=this._cloneGroups.get(t);i||(i=new Set,this._cloneGroups.set(t,i)),i.add(e),e._clonesGroup=i}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const s of e.getChildren())this._removeFromClonedElementsGroup(s);const t=e.id;if(!t)return;const i=this._cloneGroups.get(t);i&&i.delete(e)}}function rp(a){let e=a.parent;for(;!sp(e);){if(!e)return;e=e.parent}return e}function sT(a,e){return a.priority<e.priority||!(a.priority>e.priority)&&a.getIdentity()<e.getIdentity()}function hw(a){const e=a.nodeBefore;if(e&&e.is("$text"))return new fe(e,e.data.length);const t=a.nodeAfter;return t&&t.is("$text")?new fe(t,0):a}function op(a){if(a.offset==a.parent.data.length)return new fe(a.parent.parent,a.parent.index+1);if(a.offset===0)return new fe(a.parent.parent,a.parent.index);const e=a.parent.data.slice(a.offset);return a.parent._data=a.parent.data.slice(0,a.offset),a.parent.parent._insertChild(a.parent.index+1,new it(a.root.document,e)),new fe(a.parent.parent,a.parent.index+1)}function fw(a,e){const t=a.data.length;return a._data+=e.data,e._remove(),new fe(a,t)}const aT=[it,Wo,zc,np,ip,pu];function gw(a,e){for(const t of a){if(!aT.some(i=>t instanceof i))throw new D("view-writer-insert-invalid-node-type",e);t.is("$text")||gw(t.getChildren(),e)}}function sp(a){return a&&(a.is("containerElement")||a.is("documentFragment"))}function Rc(a,e){const t=rp(a.start),i=rp(a.end);if(!t||!i||t!==i)throw new D("view-writer-invalid-range-container",e)}function pw(a,e){return a.id===null&&e.id===null}const mw=a=>a.createTextNode(" "),kw=a=>{const e=a.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},bw=a=>{const e=a.createElement("br");return e.dataset.ckeFiller="true",e},wi=7,Fc="⁠".repeat(wi);function Vn(a){return typeof a=="string"?a.substr(0,wi)===Fc:bt(a)&&a.data.substr(0,wi)===Fc}function Vc(a){return a.data.length==wi&&Vn(a)}function ww(a){const e=typeof a=="string"?a:a.data;return Vn(a)?e.slice(wi):e}function cT(a,e){if(e.keyCode==Re.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const i=t.getRangeAt(0).startContainer,s=t.getRangeAt(0).startOffset;Vn(i)&&s<=wi&&t.collapse(i,0)}}}var _w=o(5037),lT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(_w.Z,lT),_w.Z.locals;class dT extends Ye(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),g.isBlink&&!g.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new D("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!g.isAndroid)return;let e=null;const t=!(g.isBlink&&!g.isAndroid)||!this.isSelecting;for(const i of this.markedChildren)this._updateChildrenMappings(i);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=fe._createBefore(e.parent)));for(const i of this.markedAttributes)this._updateAttrs(i);for(const i of this.markedChildren)this._updateChildren(i,{inlineFillerPosition:e});for(const i of this.markedTexts)!this.markedChildren.has(i.parent)&&this.domConverter.mapViewToDom(i.parent)&&this._updateText(i,{inlineFillerPosition:e});if(t)if(e){const i=this.domConverter.viewPositionToDom(e),s=i.parent.ownerDocument;Vn(i.parent)?this._inlineFiller=i.parent:this._inlineFiller=vw(s,i.parent,i.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const i=Array.from(t.childNodes),s=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),c=this._diffNodeLists(i,s),d=this._findUpdateActions(c,i,s,uT);if(d.indexOf("update")!==-1){const h={equal:0,insert:0,delete:0};for(const p of d)if(p==="update"){const m=h.equal+h.insert,b=h.equal+h.delete,y=e.getChild(m);!y||y.is("uiElement")||y.is("rawElement")||this._updateElementMappings(y,i[b]),Mb(s[m]),h.equal++}else h[p]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?fe._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&bt(t.parent)&&Vn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Vn(e))throw new D("view-renderer-filler-was-lost",this);Vc(e)?e.remove():e.data=e.data.substr(wi),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,i=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(d){if(d.getAttribute("contenteditable")=="false")return!1;const h=d.findAncestor(p=>p.hasAttribute("contenteditable"));return!h||h.getAttribute("contenteditable")=="true"}(t)||i===t.getFillerOffset())return!1;const s=e.nodeBefore,c=e.nodeAfter;return!(s instanceof it||c instanceof it)&&(!g.isAndroid||!s&&!c)}_updateText(e,t){const i=this.domConverter.findCorrespondingDomText(e);let s=this.domConverter.viewToDom(e).data;const c=t.inlineFillerPosition;c&&c.parent==e.parent&&c.offset==e.index&&(s=Fc+s),yw(i,s)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const i=Array.from(t.attributes).map(c=>c.name),s=e.getAttributeKeys();for(const c of s)this.domConverter.setDomElementAttribute(t,c,e.getAttribute(c),e);for(const c of i)e.hasAttribute(c)||this.domConverter.removeDomElementAttribute(t,c)}_updateChildren(e,t){const i=this.domConverter.mapViewToDom(e);if(!i)return;if(g.isAndroid){let y=null;for(const C of Array.from(i.childNodes)){if(y&&bt(y)&&bt(C)){i.normalize();break}y=C}}const s=t.inlineFillerPosition,c=i.childNodes,d=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));s&&s.parent===e&&vw(i.ownerDocument,d,s.offset);const h=this._diffNodeLists(c,d),p=this._findUpdateActions(h,c,d,hT);let m=0;const b=new Set;for(const y of p)y==="delete"?(b.add(c[m]),Mb(c[m])):y!=="equal"&&y!=="update"||m++;m=0;for(const y of p)y==="insert"?(Vt(i,m,d[m]),m++):y==="update"?(yw(c[m],d[m].data),m++):y==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(d[m])),m++);for(const y of b)y.parentNode||this.domConverter.unbindDomElement(y)}_diffNodeLists(e,t){return e=function(i,s){const c=Array.from(i);return c.length==0||!s||c[c.length-1]==s&&c.pop(),c}(e,this._fakeSelectionContainer),A(e,t,fT.bind(null,this.domConverter))}_findUpdateActions(e,t,i,s){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let c=[],d=[],h=[];const p={equal:0,insert:0,delete:0};for(const m of e)m==="insert"?h.push(i[p.equal+p.insert]):m==="delete"?d.push(t[p.equal+p.delete]):(c=c.concat(A(d,h,s).map(b=>b==="equal"?"update":b)),c.push("equal"),d=[],h=[]),p[m]++;return c.concat(A(d,h,s).map(m=>m==="equal"?"update":m))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(g.isBlink&&!g.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&g.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(d){const h=d.createElement("div");return h.className="ck-fake-selection-container",Object.assign(h.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),h.textContent=" ",h}(t));const i=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(i,this.selection),!this._fakeSelectionNeedsUpdate(e))return;i.parentElement&&i.parentElement==e||e.appendChild(i),i.textContent=this.selection.fakeSelectionLabel||" ";const s=t.getSelection(),c=t.createRange();s.removeAllRanges(),c.selectNodeContents(i),s.addRange(c)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const i=this.domConverter.viewPositionToDom(this.selection.anchor),s=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(i.parent,i.offset,s.parent,s.offset),g.isGecko&&function(c,d){const h=c.parent;if(h.nodeType!=Node.ELEMENT_NODE||c.offset!=h.childNodes.length-1)return;const p=h.childNodes[c.offset];p&&p.tagName=="BR"&&d.addRange(d.getRangeAt(0))}(s,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,i=e.ownerDocument.getSelection();return!t||t.parentElement!==e||i.anchorNode!==t&&!t.contains(i.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const i=e.activeElement,s=this.domConverter.mapDomToView(i);i&&s&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function vw(a,e,t){const i=e instanceof Array?e:e.childNodes,s=i[t];if(bt(s))return s.data=Fc+s.data,s;{const c=a.createTextNode(Fc);return Array.isArray(e)?i.splice(t,0,c):Vt(e,t,c),c}}function uT(a,e){return Rt(a)&&Rt(e)&&!bt(a)&&!bt(e)&&!on(a)&&!on(e)&&a.tagName.toLowerCase()===e.tagName.toLowerCase()}function hT(a,e){return Rt(a)&&Rt(e)&&bt(a)&&bt(e)}function fT(a,e,t){return e===t||(bt(e)&&bt(t)?e.data===t.data:!(!a.isBlockFiller(e)||!a.isBlockFiller(t)))}function yw(a,e){const t=a.data;if(t==e)return;const i=w(t,e);for(const s of i)s.type==="insert"?a.insertData(s.index,s.values.join("")):a.deleteData(s.index,s.howMany)}const gT=bw(ye.document),pT=mw(ye.document),mT=kw(ye.document),mu="data-ck-unsafe-attribute-",Aw="data-ck-unsafe-element";class ku{constructor(e,{blockFillerMode:t,renderingMode:i="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new ni,this._inlineObjectElementMatcher=new ni,this.document=e,this.renderingMode=i,this.blockFillerMode=t||(i==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?ye.document:ye.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new bi(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const i of Array.from(e.children))this.unbindDomElement(i)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,i){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(i==="img"&&(e==="src"||e==="srcset")||i==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const i=new DOMParser().parseFromString(t,"text/html"),s=i.createDocumentFragment(),c=i.body.childNodes;for(;c.length>0;)s.appendChild(c[0]);const d=i.createTreeWalker(s,NodeFilter.SHOW_ELEMENT),h=[];let p;for(;p=d.nextNode();)h.push(p);for(const m of h){for(const y of m.getAttributeNames())this.setDomElementAttribute(m,y,m.getAttribute(y));const b=m.tagName.toLowerCase();this._shouldRenameElement(b)&&(Ew(b),m.replaceWith(this._createReplacementDomElement(b,m)))}for(;e.firstChild;)e.firstChild.remove();e.append(s)}viewToDom(e,t={}){if(e.is("$text")){const i=this._processDataFromViewText(e);return this._domDocument.createTextNode(i)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let i;if(e.is("documentFragment"))i=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(i,e);else{if(e.is("uiElement"))return i=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(i,e),i;this._shouldRenameElement(e.name)?(Ew(e.name),i=this._createReplacementDomElement(e.name)):i=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(i,this),t.bind&&this.bindElements(i,e);for(const s of e.getAttributeKeys())this.setDomElementAttribute(i,s,e.getAttribute(s),e)}if(t.withChildren!==!1)for(const s of this.viewChildrenToDom(e,t))i.appendChild(s);return i}}setDomElementAttribute(e,t,i,s){const c=this.shouldRenderAttribute(t,i,e.tagName.toLowerCase())||s&&s.shouldRenderUnsafeAttribute(t);c||W("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:i}),function(d){try{ye.document.createAttribute(d)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!c?e.removeAttribute(t):e.hasAttribute(mu+t)&&c&&e.removeAttribute(mu+t),e.setAttribute(c?t:mu+t,i)):W("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:i})}removeDomElementAttribute(e,t){t!=Aw&&(e.removeAttribute(t),e.removeAttribute(mu+t))}*viewChildrenToDom(e,t={}){const i=e.getFillerOffset&&e.getFillerOffset();let s=0;for(const c of e.getChildren()){i===s&&(yield this._getBlockFiller());const d=c.is("element")&&!!c.getCustomProperty("dataPipeline:transparentRendering")&&!$t(c.getAttributes());d&&this.renderingMode=="data"?yield*this.viewChildrenToDom(c,t):(d&&W("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:c}),yield this.viewToDom(c,t)),s++}i===s&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),i=this.viewPositionToDom(e.end),s=this._domDocument.createRange();return s.setStart(t.parent,t.offset),s.setEnd(i.parent,i.offset),s}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const i=this.findCorrespondingDomText(t);if(!i)return null;let s=e.offset;return Vn(i)&&(s+=wi),{parent:i,offset:s}}{let i,s,c;if(e.offset===0){if(i=this.mapViewToDom(t),!i)return null;c=i.childNodes[0]}else{const d=e.nodeBefore;if(s=d.is("$text")?this.findCorrespondingDomText(d):this.mapViewToDom(d),!s)return null;i=s.parentNode,c=s.nextSibling}return bt(c)&&Vn(c)?{parent:c,offset:wi}:{parent:i,offset:s?kn(s)+1:0}}}domToView(e,t={}){const i=[],s=this._domToView(e,t,i),c=s.next().value;return c?(s.next(),this._processDomInlineNodes(null,i,t),c.is("$text")&&c.data.length==0?null:c):null}*domChildrenToView(e,t={},i=[]){for(let s=0;s<e.childNodes.length;s++){const c=e.childNodes[s],d=this._domToView(c,t,i),h=d.next().value;h!==null&&(this._isBlockViewElement(h)&&this._processDomInlineNodes(e,i,t),yield h,d.next())}this._processDomInlineNodes(e,i,t)}domSelectionToView(e){if(function(s){if(!g.isGecko||!s.rangeCount)return!1;const c=s.getRangeAt(0).startContainer;try{Object.prototype.toString.call(c)}catch{return!0}return!1}(e))return new bi([]);if(e.rangeCount===1){let s=e.getRangeAt(0).startContainer;bt(s)&&(s=s.parentNode);const c=this.fakeSelectionToView(s);if(c)return c}const t=this.isDomSelectionBackward(e),i=[];for(let s=0;s<e.rangeCount;s++){const c=e.getRangeAt(s),d=this.domRangeToView(c);d&&i.push(d)}return new bi(i,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),i=this.domPositionToView(e.endContainer,e.endOffset);return t&&i?new Ce(t,i):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,kn(e));const i=this.mapDomToView(e);if(i&&(i.is("uiElement")||i.is("rawElement")))return fe._createBefore(i);if(bt(e)){if(Vc(e))return this.domPositionToView(e.parentNode,kn(e));const s=this.findCorrespondingViewText(e);let c=t;return s?(Vn(e)&&(c-=wi,c=c<0?0:c),new fe(s,c)):null}if(t===0){const s=this.mapDomToView(e);if(s)return new fe(s,0)}else{const s=e.childNodes[t-1];if(bt(s)&&Vc(s)||s&&this.isBlockFiller(s))return this.domPositionToView(s.parentNode,kn(s));const c=bt(s)?this.findCorrespondingViewText(s):this.mapDomToView(s);if(c&&c.parent)return new fe(c.parent,c.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Vc(e))return null;const t=this.getHostViewElement(e);if(t)return t;const i=e.previousSibling;if(i){if(!this.isElement(i))return null;const s=this.mapDomToView(i);if(s){const c=s.nextSibling;return c instanceof it?c:null}}else{const s=this.mapDomToView(e.parentNode);if(s){const c=s.getChild(0);return c instanceof it?c:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:i,scrollY:s}=ye.window,c=[];Cw(t,d=>{const{scrollLeft:h,scrollTop:p}=d;c.push([h,p])}),t.focus(),Cw(t,d=>{const[h,p]=c.shift();d.scrollLeft=h,d.scrollTop=p}),ye.window.scrollTo(i,s)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),i=this.domSelectionToView(t);i&&i.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(gT):!(e.tagName!=="BR"||!xw(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(mT)||function(t,i){return t.isEqualNode(pT)&&xw(t,i)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const i=t.collapsed;return t.detach(),i}getHostViewElement(e){const t=function(i){const s=[];let c=i;for(;c&&c.nodeType!=Node.DOCUMENT_NODE;)s.unshift(c),c=c.parentNode;return s}(e);for(t.pop();t.length;){const i=t.pop(),s=this._domToViewMapping.get(i);if(s&&(s.is("uiElement")||s.is("rawElement")))return s}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return mw(this._domDocument);case"markedNbsp":return kw(this._domDocument);case"br":return bw(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(bt(e)&&Vn(e)&&t<wi||this.isElement(e)&&Vn(e.childNodes[t]))return!1;const i=this.mapDomToView(e);return!i||!i.is("uiElement")&&!i.is("rawElement")}*_domToView(e,t,i){if(this.isBlockFiller(e))return null;const s=this.getHostViewElement(e);if(s)return s;if(on(e)&&t.skipComments)return null;if(bt(e)){if(Vc(e))return null;{const c=e.data;if(c==="")return null;const d=new it(this.document,c);return i.push(d),d}}{let c=this.mapDomToView(e);if(c)return this._isInlineObjectElement(c)&&i.push(c),c;if(this.isDocumentFragment(e))c=new qo(this.document),t.bind&&this.bindDocumentFragments(e,c);else{c=this._createViewElement(e,t),t.bind&&this.bindElements(e,c);const h=e.attributes;if(h)for(let p=h.length,m=0;m<p;m++)c._setAttribute(h[m].name,h[m].value);if(this._isViewElementWithRawContent(c,t))return c._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(c)||i.push(c),c;if(on(e))return c._setCustomProperty("$rawContent",e.data),c}yield c;const d=[];if(t.withChildren!==!1)for(const h of this.domChildrenToView(e,t,d))c._appendChild(h);if(this._isInlineObjectElement(c))i.push(c);else for(const h of d)i.push(h)}}_processDomInlineNodes(e,t,i){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let s=!1;for(let c=0;c<t.length;c++){const d=t[c];if(!d.is("$text")){s=!1;continue}let h,p=!1;if(kT(d,this.preElements))h=ww(d.data);else{h=d.data.replace(/[ \n\t\r]{1,}/g," "),p=/[^\S\u00A0]/.test(h.charAt(h.length-1));const m=c>0?t[c-1]:null,b=c+1<t.length?t[c+1]:null,y=!m||m.is("element")&&m.name=="br"||s,C=!b&&!Vn(d.data);i.withChildren!==!1&&(y&&(h=h.replace(/^ /,"")),C&&(h=h.replace(/ $/,""))),h=ww(h),h=h.replace(/ \u00A0/g,"  ");const E=b&&b.is("element")&&b.name!="br",M=b&&b.is("$text")&&b.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(h)||!b||E||M)&&(h=h.replace(/\u00A0$/," ")),(y||m&&m.is("element")&&m.name!="br")&&(h=h.replace(/^\u00A0/," "))}h.length==0&&d.parent?(d._remove(),t.splice(c,1),c--):(d._data=h,s=p)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(i=>this.preElements.includes(i.name)))return t;if(t.charAt(0)==" "){const i=this._getTouchingInlineViewNode(e,!1);!(i&&i.is("$textProxy")&&this._nodeEndsWithSpace(i))&&i||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const i=this._getTouchingInlineViewNode(e,!0),s=i&&i.is("$textProxy")&&i.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&i&&!s||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(i=>this.preElements.includes(i.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const i=new Ho({startPosition:t?fe._createAfter(e):fe._createBefore(e),direction:t?"forward":"backward"});for(const s of i){if(s.item.is("element","br"))return null;if(this._isInlineObjectElement(s.item))return s.item;if(s.item.is("containerElement"))return null;if(s.item.is("$textProxy"))return s.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(on(e))return new pu(this.document,"$comment");const i=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Fn(this.document,i)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const i=this._domDocument.createElement("span");if(i.setAttribute(Aw,e),t){for(;t.firstChild;)i.appendChild(t.firstChild);for(const s of t.getAttributeNames())i.setAttribute(s,t.getAttribute(s))}return i}}function kT(a,e){return a.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function Cw(a,e){let t=a;for(;t;)e(t),t=t.parentElement}function xw(a,e){const t=a.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Ew(a){a==="script"&&W("domconverter-unsafe-script-element-detected"),a==="style"&&W("domconverter-unsafe-style-element-detected")}class Hi extends tt(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Dw=rw(function(a,e){dr(e,Vi(e),a)});class Ks{constructor(e,t,i){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Dw(this,i)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Go extends Hi{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(i,s)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(s.target)&&this.onDomEvent(s)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,i){this.isEnabled&&this.document.fire(e,new Ks(this.view,t,i))}}class bT extends Go{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Gs(this)}};this.fire(e.type,e,t)}}const ap=function(){return Ln.Date.now()};var wT=/\s/;const _T=function(a){for(var e=a.length;e--&&wT.test(a.charAt(e)););return e};var vT=/^\s+/;const yT=function(a){return a&&a.slice(0,_T(a)+1).replace(vT,"")};var AT=/^[-+]0x[0-9a-f]+$/i,CT=/^0b[01]+$/i,xT=/^0o[0-7]+$/i,ET=parseInt;const Sw=function(a){if(typeof a=="number")return a;if(du(a))return NaN;if(pe(a)){var e=typeof a.valueOf=="function"?a.valueOf():a;a=pe(e)?e+"":e}if(typeof a!="string")return a===0?a:+a;a=yT(a);var t=CT.test(a);return t||xT.test(a)?ET(a.slice(2),t?2:8):AT.test(a)?NaN:+a};var DT=Math.max,ST=Math.min;const Uc=function(a,e,t){var i,s,c,d,h,p,m=0,b=!1,y=!1,C=!0;if(typeof a!="function")throw new TypeError("Expected a function");function E(Z){var oe=i,Ae=s;return i=s=void 0,m=Z,d=a.apply(Ae,oe)}function M(Z){var oe=Z-p;return p===void 0||oe>=e||oe<0||y&&Z-m>=c}function O(){var Z=ap();if(M(Z))return z(Z);h=setTimeout(O,function(oe){var Ae=e-(oe-p);return y?ST(Ae,c-(oe-m)):Ae}(Z))}function z(Z){return h=void 0,C&&i?E(Z):(i=s=void 0,d)}function V(){var Z=ap(),oe=M(Z);if(i=arguments,s=this,p=Z,oe){if(h===void 0)return function(Ae){return m=Ae,h=setTimeout(O,e),b?E(Ae):d}(p);if(y)return clearTimeout(h),h=setTimeout(O,e),E(p)}return h===void 0&&(h=setTimeout(O,e)),d}return e=Sw(e)||0,pe(t)&&(b=!!t.leading,c=(y="maxWait"in t)?DT(Sw(t.maxWait)||0,e):c,C="trailing"in t?!!t.trailing:C),V.cancel=function(){h!==void 0&&clearTimeout(h),m=0,i=p=s=h=void 0},V.flush=function(){return h===void 0?d:z(ap())},V};class TT extends Hi{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Uc(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,i)=>{e.selection.isFake&&this.isEnabled&&i.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,i)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(i.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,i=new bi(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Re.arrowleft&&e!=Re.arrowup||i.setTo(i.getFirstPosition()),e!=Re.arrowright&&e!=Re.arrowdown||i.setTo(i.getLastPosition());const s={oldSelection:t,newSelection:i,domSelection:null};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}const IT=function(a){return this.__data__.set(a,"__lodash_hash_undefined__"),this},MT=function(a){return this.__data__.has(a)};function bu(a){var e=-1,t=a==null?0:a.length;for(this.__data__=new Bs;++e<t;)this.add(a[e])}bu.prototype.add=bu.prototype.push=IT,bu.prototype.has=MT;const NT=bu,OT=function(a,e){for(var t=-1,i=a==null?0:a.length;++t<i;)if(e(a[t],t,a))return!0;return!1},BT=function(a,e){return a.has(e)},Tw=function(a,e,t,i,s,c){var d=1&t,h=a.length,p=e.length;if(h!=p&&!(d&&p>h))return!1;var m=c.get(a),b=c.get(e);if(m&&b)return m==e&&b==a;var y=-1,C=!0,E=2&t?new NT:void 0;for(c.set(a,e),c.set(e,a);++y<h;){var M=a[y],O=e[y];if(i)var z=d?i(O,M,y,e,a,c):i(M,O,y,a,e,c);if(z!==void 0){if(z)continue;C=!1;break}if(E){if(!OT(e,function(V,Z){if(!BT(E,Z)&&(M===V||s(M,V,t,i,c)))return E.push(Z)})){C=!1;break}}else if(M!==O&&!s(M,O,t,i,c)){C=!1;break}}return c.delete(a),c.delete(e),C},PT=function(a){var e=-1,t=Array(a.size);return a.forEach(function(i,s){t[++e]=[s,i]}),t},LT=function(a){var e=-1,t=Array(a.size);return a.forEach(function(i){t[++e]=i}),t};var Iw=zn?zn.prototype:void 0,cp=Iw?Iw.valueOf:void 0;const zT=function(a,e,t,i,s,c,d){switch(t){case"[object DataView]":if(a.byteLength!=e.byteLength||a.byteOffset!=e.byteOffset)return!1;a=a.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(a.byteLength!=e.byteLength||!c(new Ze(a),new Ze(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Oo(+a,+e);case"[object Error]":return a.name==e.name&&a.message==e.message;case"[object RegExp]":case"[object String]":return a==e+"";case"[object Map]":var h=PT;case"[object Set]":var p=1&i;if(h||(h=LT),a.size!=e.size&&!p)return!1;var m=d.get(a);if(m)return m==e;i|=2,d.set(a,e);var b=Tw(h(a),h(e),i,s,c,d);return d.delete(a),b;case"[object Symbol]":if(cp)return cp.call(a)==cp.call(e)}return!1};var jT=Object.prototype.hasOwnProperty;const RT=function(a,e,t,i,s,c){var d=1&t,h=Dc(a),p=h.length;if(p!=Dc(e).length&&!d)return!1;for(var m=p;m--;){var b=h[m];if(!(d?b in e:jT.call(e,b)))return!1}var y=c.get(a),C=c.get(e);if(y&&C)return y==e&&C==a;var E=!0;c.set(a,e),c.set(e,a);for(var M=d;++m<p;){var O=a[b=h[m]],z=e[b];if(i)var V=d?i(z,O,b,e,a,c):i(O,z,b,a,e,c);if(!(V===void 0?O===z||s(O,z,t,i,c):V)){E=!1;break}M||(M=b=="constructor")}if(E&&!M){var Z=a.constructor,oe=e.constructor;Z==oe||!("constructor"in a)||!("constructor"in e)||typeof Z=="function"&&Z instanceof Z&&typeof oe=="function"&&oe instanceof oe||(E=!1)}return c.delete(a),c.delete(e),E};var Mw="[object Arguments]",Nw="[object Array]",wu="[object Object]",Ow=Object.prototype.hasOwnProperty;const FT=function(a,e,t,i,s,c){var d=Zt(a),h=Zt(e),p=d?Nw:Hr(a),m=h?Nw:Hr(e),b=(p=p==Mw?wu:p)==wu,y=(m=m==Mw?wu:m)==wu,C=p==m;if(C&&Ro(a)){if(!Ro(e))return!1;d=!0,b=!1}if(C&&!b)return c||(c=new zo),d||kc(a)?Tw(a,e,t,i,s,c):zT(a,e,p,t,i,s,c);if(!(1&t)){var E=b&&Ow.call(a,"__wrapped__"),M=y&&Ow.call(e,"__wrapped__");if(E||M){var O=E?a.value():a,z=M?e.value():e;return c||(c=new zo),s(O,z,t,i,c)}}return!!C&&(c||(c=new zo),RT(a,e,t,i,s,c))},Bw=function a(e,t,i,s,c){return e===t||(e==null||t==null||!Cn(e)&&!Cn(t)?e!=e&&t!=t:FT(e,t,i,s,a,c))},VT=function(a,e,t){var i=(t=typeof t=="function"?t:void 0)?t(a,e):void 0;return i===void 0?Bw(a,e,void 0,t):!!i};class Pw extends Hi{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,i=new Set,s=new Set;for(const d of e){const h=t.mapDomToView(d.target);h&&(h.is("uiElement")||h.is("rawElement")||d.type!=="childList"||this._isBogusBrMutation(d)||s.add(h))}for(const d of e){const h=t.mapDomToView(d.target);if((!h||!h.is("uiElement")&&!h.is("rawElement"))&&d.type==="characterData"){const p=t.findCorrespondingViewText(d.target);p&&!s.has(p.parent)?i.add(p):!p&&Vn(d.target)&&s.add(t.mapDomToView(d.target.parentNode))}}let c=!1;for(const d of i)c=!0,this.renderer.markToSync("text",d);for(const d of s){const h=t.mapViewToDom(d),p=Array.from(d.getChildren()),m=Array.from(t.domChildrenToView(h,{withChildren:!1}));VT(p,m,UT)||(c=!0,this.renderer.markToSync("children",d))}c&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function UT(a,e){if(!Array.isArray(a))return a===e||!(!a.is("$text")||!e.is("$text"))&&a.data===e.data}class _u extends Go{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(i,s)=>{const c=t.selection.editableElement;c!==null&&c!==s.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class $T extends Hi{constructor(e){super(e),this.mutationObserver=e.getObserver(Pw),this.focusObserver=e.getObserver(_u),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Uc(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Uc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,i=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",i,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",i,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",i,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(s,c)=>{this.document.isComposing&&!g.isAndroid||(this._handleSelectionChange(c,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const i=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(i.anchorNode))return;this.mutationObserver.flush();const s=this.domConverter.domSelectionToView(i);if(s.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(s)||!this.domConverter.isDomSelectionCorrect(i))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(s))this.view.forceRender();else{const c={oldSelection:this.selection,newSelection:s,domSelection:i};this.document.fire("selectionChange",c),this._fireSelectionChangeDoneDebounced(c)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class HT extends Go{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Lw{constructor(e,t={}){this._files=t.cacheFiles?zw(e):null,this._native=e}get files(){return this._files||(this._files=zw(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,i){this._native.setDragImage(e,t,i)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function zw(a){const e=Array.from(a.files||[]),t=Array.from(a.items||[]);return e.length?e:t.filter(i=>i.kind==="file").map(i=>i.getAsFile())}class WT extends Go{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),i=this.view,s=i.document;let c=null,d=null,h=[];if(e.dataTransfer&&(c=new Lw(e.dataTransfer)),e.data!==null?d=e.data:c&&(d=c.getData("text/plain")),s.selection.isFake)h=Array.from(s.selection.getRanges());else if(t.length)h=t.map(p=>{const m=i.domConverter.domPositionToView(p.startContainer,p.startOffset),b=i.domConverter.domPositionToView(p.endContainer,p.endOffset);return m?i.createRange(m,b):b?i.createRange(b):void 0}).filter(p=>!!p);else if(g.isAndroid){const p=e.target.ownerDocument.defaultView.getSelection();h=Array.from(i.domConverter.domSelectionToView(p).getRanges())}if(g.isAndroid&&e.inputType=="insertCompositionText"&&d&&d.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[i.createRange(h[0].end)]});else if(e.inputType=="insertText"&&d&&d.includes(`
`,isColorInherited:!1}),i.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],i],on:{dragstart:s.to(c=>c.preventDefault())}}]})}}function Rv(a,e,t){return(i,s)=>{const c=new Ne(a);if(c.width<JI||c.height<QI)return null;let d;d=e.position==="inside"?c.bottom-s.height:c.bottom-s.height/2,d-=e.verticalOffset;const h=t(c,s),p=i.clone().moveTo(h,d).getIntersection(s.clone().moveTo(h,d)).getVisible();return!p||p.getArea()<s.getArea()?null:{top:d,left:h,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function Fv(a){const e=a.config.get("ui.poweredBy"),t=e&&e.position||"border";return{position:t,label:XI,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:a.locale.contentLanguageDirection==="ltr"?"right":"left",...e}}class nM extends Ye(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new GI(e),this.focusTracker=new xn,this.tooltipManager=new Wt(e),this.poweredBy=new eM(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const i=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?i():this.once("ready",i)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const i=e.config.get("toolbar.viewportTopOffset");return i?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:i}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let i,s;e.keystrokes.set("Alt+F10",(c,d)=>{const h=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(h)&&!Array.from(t.domRoots.values()).includes(h)&&(i=h);const p=this._getCurrentFocusedToolbarDefinition();p&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let m=0;m<s.length;m++){const b=s.shift();if(s.push(b),b!==p&&this._focusFocusableCandidateToolbar(b)){p&&p.options.afterBlur&&p.options.afterBlur();break}}d()}),e.keystrokes.set("Esc",(c,d)=>{const h=this._getCurrentFocusedToolbarDefinition();h&&(i?(i.focus(),i=null):e.editing.view.focus(),h.options.afterBlur&&h.options.afterBlur(),d())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:i,options:s}=t;(At(i.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,i)=>Vv(t)-Vv(i)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:i}}=e;return i&&i(),!!At(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const i={top:0,bottom:0,left:0,right:0,...this.viewportOffset};t.viewportOffset.top+=i.top,t.viewportOffset.bottom+=i.bottom,t.viewportOffset.left+=i.left,t.viewportOffset.right+=i.right}}function Vv(a){const{toolbarView:e,options:t}=a;let i=10;return At(e.element)&&i--,t.isContextual&&i--,i}var Uv=o(9847),iM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Uv.Z,iM),Uv.Z.locals;class rM extends Te{constructor(e){super(e),this.body=new lI(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class oM extends Te{constructor(e,t,i){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=i,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(i){e.change(s=>{const c=e.document.getRoot(i.name);s.addClass(i.isFocused?"ck-focused":"ck-blurred",c),s.removeClass(i.isFocused?"ck-blurred":"ck-focused",c)})}e.isRenderingInProgress?function i(s){e.once("change:isRenderingInProgress",(c,d,h)=>{h?i(s):t(s)})}(this):t(this)}}class sM extends oM{constructor(e,t,i,s={}){super(e,t,i);const c=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>c("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const i=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),i)})}}var $v=o(1874),aM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()($v.Z,aM),$v.Z.locals;class Hv extends qb{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Wv extends Ye(){constructor(e,t){super(),t&&Dw(this,t),e&&this.set(e)}}var qv=o(7592),cM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(qv.Z,cM),qv.Z.locals;var Gv=o(6356),lM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Gv.Z,lM),Gv.Z.locals;const Bu=rn("px");class Pu extends ae{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,i=t.document.selection.editableElement;return i?t.domConverter.mapViewToDom(i.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new D("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const i=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),i.set(e.view,e),this._viewToStack.set(e.view,i),i===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new D("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new D("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Jt(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new dM(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(i,s)=>!s&&i>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(i,s)=>{if(s<2)return"";const c=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[c,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new uM(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,i)=>!i&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:i=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=i,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class dM extends Te{constructor(e){super(e);const t=e.t,i=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new xn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",i.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:i.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const i=new Ke(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i}}class uM extends Te{constructor(e,t){super(e);const i=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",i.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:i.to("top",Bu),left:i.to("left",Bu),width:i.to("width",Bu),height:i.to("height",Bu)}},children:this.content}),this.on("change:numberOfPanels",(s,c,d,h)=>{d>h?this._addPanels(d-h):this._removePanels(h-d),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Te;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:i,height:s}=new Ne(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:i,height:s})}}}var Yv=o(3707),hM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Yv.Z,hM),Yv.Z.locals;class fM extends tl{constructor(e,t){const i=e.t,s=Object.assign({},{showResetButton:!0,showIcon:!0,creator:nl},t);super(e,s.creator),this.label=t.label,this._viewConfig=s,this._viewConfig.showIcon&&(this.iconView=new mr,this.iconView.content=Pe.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new Ke(e),this.resetButtonView.set({label:i("Clear"),icon:Pe.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",c=>!c),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class gM extends Te{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class pM extends Te{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new xn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new kr({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Zv=/[\\^$.*+?()[\]{}|]/g,mM=RegExp(Zv.source);const Kv=function(a){return(a=Hg(a))&&mM.test(a)?a.replace(Zv,"\\$&"):a};var Qv=o(9332),kM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Qv.Z,kM),Qv.Z.locals;class bM extends Te{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new xn,this.keystrokes=new ki,this.resultsView=new pM(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new gM,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new kr({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(i,{resultsCount:s,totalItemsCount:c})=>{this.resultsCount=s,this.totalItemsCount=c}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(Kv(e),"ig"):null,i=this.filteredView.filter(t);this.fire("search",{query:e,...i})}_createSearchTextQueryView(){const e=new fM(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function i(s,{query:c,resultsCount:d,totalItemsCount:h}){return typeof s=="function"?s(c,d,h):s}this.on("search",(s,c)=>{if(c.resultsCount)t.set({isVisible:!1});else{const d=this._config.infoView&&this._config.infoView.text;let h,p;c.totalItemsCount?d&&d.notFound?(h=d.notFound.primary,p=d.notFound.secondary):(h=e("No results found"),p=""):d&&d.noSearchableItems?(h=d.noSearchableItems.primary,p=d.noSearchableItems.secondary):(h=e("No searchable items"),p=""),t.set({primaryText:i(h,c),secondaryText:i(p,c),isVisible:!0})}})}}var Jv=o(4029),wM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Jv.Z,wM),Jv.Z.locals;class rl extends bM{constructor(e,t){super(e,t),this._config=t;const i=rn("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const s=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[s.if("isVisible","ck-hidden",c=>!c),s.to("_position",c=>`ck-search__results_${c}`)],style:{width:s.to("_width",i)}}}),this.focusTracker.on("change:isFocused",(c,d,h)=>{this._updateResultsVisibility(),h?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(c,d)=>{this.resultsView.isVisible=!1,d()}),this.listenTo(ye.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(c,{value:d})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=d,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Ne(this.queryView.fieldView.element).width;const e=rl._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:rl.defaultResultsPositions});this.resultsView._position=e?e.name:"s"}_updateResultsVisibility(){const e=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=e}}rl.defaultResultsPositions=[a=>({top:a.bottom,left:a.left,name:"s"}),(a,e)=>({top:a.top-e.height,left:a.left,name:"n"})],rl._getOptimalPosition=lt;var Xv=o(4746),_M={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Xv.Z,_M),Xv.Z.locals;var ey=o(6446),vM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(ey.Z,vM),ey.Z.locals;var ty=o(4176),yM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(ty.Z,yM),ty.Z.locals;class AM extends nM{constructor(e,t){super(e),this.view=t,this._toolbarConfig=cv(e.config.get("toolbar"))}get element(){return this.view.editable.element}init(){const e=this.editor,t=this.view,i=e.editing.view,s=t.editable,c=i.document.getRoot();s.name=c.rootName,t.render();const d=s.element;this.setEditableElement(s.name,d),s.bind("isFocused").to(this.focusTracker),i.attachDomRoot(d),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.editor,t=this.view,i=t.editable.element,s=t.toolbar;t.panel.bind("isVisible").to(this.focusTracker,"isFocused"),t.bind("viewportTopOffset").to(this,"viewportOffset",({top:c})=>c||0),t.listenTo(e.ui,"update",()=>{t.panel.isVisible&&t.panel.pin({target:i,positions:t.panelPositions})}),s.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(s)}_initPlaceholder(){const e=this.editor,t=e.editing.view,i=t.document.getRoot(),s=e.config.get("placeholder");if(s){const c=typeof s=="string"?s:s[i.rootName];c&&(i.placeholder=c)}Zb({view:t,element:i,isDirectHost:!1,keepOnFocus:!0})}}const CM=rn("px");class xM extends rM{constructor(e,t,i,s={}){super(e);const c=e.t;this.toolbar=new Dp(e,{shouldGroupWhenFull:s.shouldToolbarGroupWhenFull,isFloating:!0}),this.set("viewportTopOffset",0),this.panel=new Jt(e),this.panelPositions=this._getPanelPositions(),this.panel.extendTemplate({attributes:{class:"ck-toolbar-container"}}),this.editable=new sM(e,t,i,{label:d=>c("Rich Text Editor. Editing area: %0",d.name)}),this._resizeObserver=null}render(){if(super.render(),this.body.add(this.panel),this.registerChild(this.editable),this.panel.content.add(this.toolbar),this.toolbar.options.shouldGroupWhenFull){const e=this.editable.element;this._resizeObserver=new Be(e,()=>{this.toolbar.maxWidth=CM(new Ne(e).width)})}}destroy(){super.destroy(),this._resizeObserver&&this._resizeObserver.destroy()}_getPanelPositionTop(e,t){let i;return i=e.top>t.height+this.viewportTopOffset?e.top-t.height:e.bottom>t.height+this.viewportTopOffset+50?this.viewportTopOffset:e.bottom,i}_getPanelPositions(){const e=[(t,i)=>({top:this._getPanelPositionTop(t,i),left:t.left,name:"toolbar_west",config:{withArrow:!1}}),(t,i)=>({top:this._getPanelPositionTop(t,i),left:t.left+t.width-i.width,name:"toolbar_east",config:{withArrow:!1}})];return this.locale.uiLanguageDirection==="ltr"?e:e.reverse()}}class Lu extends Eu(wp(eI)){constructor(e,t={}){if(!zu(e)&&t.initialData!==void 0)throw new D("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(c){return zu(c)?(d=c,d instanceof HTMLTextAreaElement?d.value:d.innerHTML):c;var d}(e)),this.model.document.createRoot(),zu(e)&&(this.sourceElement=e,function(c,d){if(d.ckeditorInstance)throw new D("editor-source-element-already-used",c);d.ckeditorInstance=c,c.once("destroy",()=>{delete d.ckeditorInstance})}(this,e));const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new xM(this.locale,this.editing.view,this.sourceElement,{shouldToolbarGroupWhenFull:i});this.ui=new AM(this,s),function(c){if(!ar(c.updateSourceElement))throw new D("attachtoform-missing-elementapi-interface",c);const d=c.sourceElement;if(function(h){return!!h&&h.tagName.toLowerCase()==="textarea"}(d)&&d.form){let h;const p=d.form,m=()=>c.updateSourceElement();ar(p.submit)&&(h=p.submit,p.submit=()=>{m(),h.apply(p)}),p.addEventListener("submit",m),c.on("destroy",()=>{p.removeEventListener("submit",m),h&&(p.submit=h)})}}(this)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,t={}){return new Promise(i=>{if(zu(e)&&e.tagName==="TEXTAREA")throw new D("editor-wrong-element",null);const s=new this(e,t);i(s.initPlugins().then(()=>s.ui.init()).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function zu(a){return Ee(a)}Lu.Context=Wb,Lu.EditorWatchdog=z_,Lu.ContextWatchdog=class extends P_{constructor(a,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new iI,this._watchdogConfig=e,this._creator=t=>a.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(a){this._creator=a}setDestructor(a){this._destructor=a}get context(){return this._context}create(a={}){return this._actionQueues.enqueue(Xc,()=>(this._contextConfig=a,this._create()))}getItem(a){return this._getWatchdog(a)._item}getItemState(a){return this._getWatchdog(a).state}add(a){const e=j_(a);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let i;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return i=new z_(null,this._watchdogConfig),i.setCreator(t.creator),i._setExcludedProperties(this._contextProps),t.destructor&&i.setDestructor(t.destructor),this._watchdogs.set(t.id,i),i.on("error",(s,{error:c,causesRestart:d})=>{this._fire("itemError",{itemId:t.id,error:c}),d&&this._actionQueues.enqueue(t.id,()=>new Promise(h=>{const p=()=>{i.off("restart",p),this._fire("itemRestart",{itemId:t.id}),h()};i.on("restart",p)}))}),i.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(a){const e=j_(a);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const i=this._getWatchdog(t);return this._watchdogs.delete(t),i.destroy()})))}destroy(){return this._actionQueues.enqueue(Xc,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Xc,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(a=>{console.error("An error happened during destroying the context or items.",a)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(a=>(this._context=a,this._contextProps=_p(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const a=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(a))})}_getWatchdog(a){const e=this._watchdogs.get(a);if(!e)throw new Error(`Item with the given id was not registered: ${a}.`);return e}_isErrorComingFromThisItem(a){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(a))return!1;return L_(this._context,a.context)}};const jp=["left","right","center","justify"];function ny(a){return jp.includes(a)}function iy(a,e){return e.contentLanguageDirection=="rtl"?a==="right":a==="left"}function ry(a){const e=a.map(i=>{let s;return s=typeof i=="string"?{name:i}:i,s}).filter(i=>{const s=jp.includes(i.name);return s||W("alignment-config-name-not-recognized",{option:i}),s}),t=e.filter(i=>!!i.className).length;if(t&&t<e.length)throw new D("alignment-config-classnames-are-missing",{configuredOptions:a});return e.forEach((i,s,c)=>{const d=c.slice(s+1);if(d.some(h=>h.name==i.name))throw new D("alignment-config-name-already-defined",{option:i,configuredOptions:a});if(i.className&&d.some(h=>h.className==i.className))throw new D("alignment-config-classname-already-defined",{option:i,configuredOptions:a})}),e}const Rp="alignment";class EM extends st{refresh(){const e=this.editor.locale,t=$t(this.editor.model.document.selection.getSelectedBlocks());this.isEnabled=!!t&&this._canBeAligned(t),this.isEnabled&&t.hasAttribute("alignment")?this.value=t.getAttribute("alignment"):this.value=e.contentLanguageDirection==="rtl"?"right":"left"}execute(e={}){const t=this.editor,i=t.locale,s=t.model,c=s.document,d=e.value;s.change(h=>{const p=Array.from(c.selection.getSelectedBlocks()).filter(b=>this._canBeAligned(b)),m=p[0].getAttribute("alignment");iy(d,i)||m===d||!d?function(b,y){for(const C of b)y.removeAttribute(Rp,C)}(p,h):function(b,y,C){for(const E of b)y.setAttribute(Rp,C,E)}(p,h,d)})}_canBeAligned(e){return this.editor.model.schema.checkAttribute(e,Rp)}}class DM extends ae{static get pluginName(){return"AlignmentEditing"}constructor(e){super(e),e.config.define("alignment",{options:jp.map(t=>({name:t}))})}init(){const e=this.editor,t=e.locale,i=e.model.schema,s=ry(e.config.get("alignment.options")).filter(p=>ny(p.name)&&!iy(p.name,t)),c=s.some(p=>!!p.className);i.extend("$block",{allowAttributes:"alignment"}),e.model.schema.setAttributeProperties("alignment",{isFormatting:!0}),c?e.conversion.attributeToAttribute(function(p){const m={};for(const y of p)m[y.name]={key:"class",value:y.className};return{model:{key:"alignment",values:p.map(y=>y.name)},view:m}}(s)):e.conversion.for("downcast").attributeToAttribute(function(p){const m={};for(const{name:y}of p)m[y]={key:"style",value:{"text-align":y}};return{model:{key:"alignment",values:p.map(y=>y.name)},view:m}}(s));const d=function(p){const m=[];for(const{name:b}of p)m.push({view:{key:"style",value:{"text-align":b}},model:{key:"alignment",value:b}});return m}(s);for(const p of d)e.conversion.for("upcast").attributeToAttribute(p);const h=function(p){const m=[];for(const{name:b}of p)m.push({view:{key:"align",value:b},model:{key:"alignment",value:b}});return m}(s);for(const p of h)e.conversion.for("upcast").attributeToAttribute(p);e.commands.add("alignment",new EM(e))}}const ju=new Map([["left",Pe.alignLeft],["right",Pe.alignRight],["center",Pe.alignCenter],["justify",Pe.alignJustify]]);class SM extends ae{get localizedOptionTitles(){const e=this.editor.t;return{left:e("Align left"),right:e("Align right"),center:e("Align center"),justify:e("Justify")}}static get pluginName(){return"AlignmentUI"}init(){const e=this.editor,t=e.ui.componentFactory,i=e.t,s=ry(e.config.get("alignment.options"));s.map(c=>c.name).filter(ny).forEach(c=>this._addButton(c)),t.add("alignment",c=>{const d=Yr(c);Mu(d,()=>s.map(m=>t.create(`alignment:${m.name}`)),{enableActiveItemFocusOnDropdownOpen:!0,isVertical:!0,ariaLabel:i("Text alignment toolbar")}),d.buttonView.set({label:i("Text alignment"),tooltip:!0}),d.extendTemplate({attributes:{class:"ck-alignment-dropdown"}});const h=c.contentLanguageDirection==="rtl"?ju.get("right"):ju.get("left"),p=e.commands.get("alignment");return d.buttonView.bind("icon").to(p,"value",m=>ju.get(m)||h),d.bind("isEnabled").to(p,"isEnabled"),this.listenTo(d,"execute",()=>{e.editing.view.focus()}),d})}_addButton(e){const t=this.editor;t.ui.componentFactory.add(`alignment:${e}`,i=>{const s=t.commands.get("alignment"),c=new Ke(i);return c.set({label:this.localizedOptionTitles[e],icon:ju.get(e),tooltip:!0,isToggleable:!0}),c.bind("isEnabled").to(s),c.bind("isOn").to(s,"value",d=>d===e),this.listenTo(c,"execute",()=>{t.execute("alignment",{value:e}),t.editing.view.focus()}),c})}}class oy{constructor(e,t=20){this._batch=null,this.model=e,this._size=0,this.limit=t,this._isLocked=!1,this._changeCallback=(i,s)=>{s.isLocal&&s.isUndoable&&s!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}get size(){return this._size}input(e){this._size+=e,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e=!1){this.isLocked&&!e||(this._batch=null,this._size=0)}}class TM extends st{constructor(e,t){super(e),this._buffer=new oy(e.model,t),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,i=t.document,s=e.text||"",c=s.length;let d=i.selection;if(e.selection?d=e.selection:e.range&&(d=t.createSelection(e.range)),!t.canEditAt(d))return;const h=e.resultRange;t.enqueueChange(this._buffer.batch,p=>{this._buffer.lock(),t.deleteContent(d),s&&t.insertContent(p.createText(s,i.selection.getAttributes()),d),h?p.setSelection(h):d.is("documentSelection")||p.setSelection(d),this._buffer.unlock(),this._buffer.input(c)})}}const sy=["insertText","insertReplacementText"];class IM extends Hi{constructor(e){super(e),this.focusObserver=e.getObserver(_u),g.isAndroid&&sy.push("insertCompositionText");const t=e.document;t.on("beforeinput",(i,s)=>{if(!this.isEnabled)return;const{data:c,targetRanges:d,inputType:h,domEvent:p}=s;if(!sy.includes(h))return;this.focusObserver.flush();const m=new S(t,"insertText");t.fire(m,new Ks(e,p,{text:c,selection:e.createSelection(d)})),m.stop.called&&i.stop()}),t.on("compositionend",(i,{data:s,domEvent:c})=>{this.isEnabled&&!g.isAndroid&&s&&t.fire("insertText",new Ks(e,c,{text:s,selection:t.selection}))},{priority:"lowest"})}observe(){}stopObserving(){}}class ay extends ae{static get pluginName(){return"Input"}init(){const e=this.editor,t=e.model,i=e.editing.view,s=t.document.selection;i.addObserver(IM);const c=new TM(e,e.config.get("typing.undoStep")||20);e.commands.add("insertText",c),e.commands.add("input",c),this.listenTo(i.document,"insertText",(d,h)=>{i.document.isComposing||h.preventDefault();const{text:p,selection:m,resultRange:b}=h,y=Array.from(m.getRanges()).map(M=>e.editing.mapper.toModelRange(M));let C=p;if(g.isAndroid){const M=Array.from(y[0].getItems()).reduce((O,z)=>O+(z.is("$textProxy")?z.data:""),"");M&&(M.length<=C.length?C.startsWith(M)&&(C=C.substring(M.length),y[0].start=y[0].start.getShiftedBy(M.length)):M.startsWith(C)&&(y[0].start=y[0].start.getShiftedBy(C.length),C=""))}const E={text:C,selection:t.createSelection(y)};b&&(E.resultRange=e.editing.mapper.toModelRange(b)),e.execute("insertText",E),i.scrollToTheSelection()}),g.isAndroid?this.listenTo(i.document,"keydown",(d,h)=>{!s.isCollapsed&&h.keyCode==229&&i.document.isComposing&&cy(t,c)}):this.listenTo(i.document,"compositionstart",()=>{s.isCollapsed||cy(t,c)})}}function cy(a,e){if(!e.isEnabled)return;const t=e.buffer;t.lock(),a.enqueueChange(t.batch,()=>{a.deleteContent(a.document.selection)}),t.unlock()}class ly extends st{constructor(e,t){super(e),this.direction=t,this._buffer=new oy(e.model,e.config.get("typing.undoStep")),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,i=t.document;t.enqueueChange(this._buffer.batch,s=>{this._buffer.lock();const c=s.createSelection(e.selection||i.selection);if(!t.canEditAt(c))return;const d=e.sequence||1,h=c.isCollapsed;if(c.isCollapsed&&t.modifySelection(c,{direction:this.direction,unit:e.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(d))return void this._replaceEntireContentWithParagraph(s);if(this._shouldReplaceFirstBlockWithParagraph(c,d))return void this.editor.execute("paragraph",{selection:c});if(c.isCollapsed)return;let p=0;c.getFirstRange().getMinimalFlatRanges().forEach(m=>{p+=Es(m.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(c,{doNotResetEntireContent:h,direction:this.direction}),this._buffer.input(p),s.setSelection(c),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,i=t.document.selection,s=t.schema.getLimitElement(i);if(!(i.isCollapsed&&i.containsEntireContent(s))||!t.schema.checkChild(s,"paragraph"))return!1;const c=s.getChild(0);return!c||!c.is("element","paragraph")}_replaceEntireContentWithParagraph(e){const t=this.editor.model,i=t.document.selection,s=t.schema.getLimitElement(i),c=e.createElement("paragraph");e.remove(e.createRangeIn(s)),e.insert(c,s),e.setSelection(c,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const i=this.editor.model;if(t>1||this.direction!="backward"||!e.isCollapsed)return!1;const s=e.getFirstPosition(),c=i.schema.getLimitElement(s),d=c.getChild(0);return s.parent==d&&!!e.containsEntireContent(d)&&!!i.schema.checkChild(c,"paragraph")&&d.name!="paragraph"}}const dy="word",Zr="selection",ia="backward",ol="forward",uy={deleteContent:{unit:Zr,direction:ia},deleteContentBackward:{unit:"codePoint",direction:ia},deleteWordBackward:{unit:dy,direction:ia},deleteHardLineBackward:{unit:Zr,direction:ia},deleteSoftLineBackward:{unit:Zr,direction:ia},deleteContentForward:{unit:"character",direction:ol},deleteWordForward:{unit:dy,direction:ol},deleteHardLineForward:{unit:Zr,direction:ol},deleteSoftLineForward:{unit:Zr,direction:ol}};class MM extends Hi{constructor(e){super(e);const t=e.document;let i=0;t.on("keydown",()=>{i++}),t.on("keyup",()=>{i=0}),t.on("beforeinput",(s,c)=>{if(!this.isEnabled)return;const{targetRanges:d,domEvent:h,inputType:p}=c,m=uy[p];if(!m)return;const b={direction:m.direction,unit:m.unit,sequence:i};b.unit==Zr&&(b.selectionToRemove=e.createSelection(d[0])),p==="deleteContentBackward"&&(g.isAndroid&&(b.sequence=1),function(C){if(C.length!=1||C[0].isCollapsed)return!1;const E=C[0].getWalker({direction:"backward",singleCharacters:!0,ignoreElementEnd:!0});let M=0;for(const{nextPosition:O}of E){if(O.parent.is("$text")){const z=O.parent.data,V=O.offset;if(Rg(z,V)||Fg(z,V)||Fb(z,V))continue;M++}else M++;if(M>1)return!0}return!1}(d)&&(b.unit=Zr,b.selectionToRemove=e.createSelection(d)));const y=new Ys(t,"delete",d[0]);t.fire(y,new Ks(e,h,b)),y.stop.called&&s.stop()}),g.isBlink&&function(s){const c=s.view,d=c.document;let h=null,p=!1;function m(y){return y==Re.backspace||y==Re.delete}function b(y){return y==Re.backspace?ia:ol}d.on("keydown",(y,{keyCode:C})=>{h=C,p=!1}),d.on("keyup",(y,{keyCode:C,domEvent:E})=>{const M=d.selection,O=s.isEnabled&&C==h&&m(C)&&!M.isCollapsed&&!p;if(h=null,O){const z=M.getFirstRange(),V=new Ys(d,"delete",z),Z={unit:Zr,direction:b(C),selectionToRemove:M};d.fire(V,new Ks(c,E,Z))}}),d.on("beforeinput",(y,{inputType:C})=>{const E=uy[C];m(h)&&E&&E.direction==b(h)&&(p=!0)},{priority:"high"}),d.on("beforeinput",(y,{inputType:C,data:E})=>{h==Re.delete&&C=="insertText"&&E==""&&y.stop()},{priority:"high"})}(this)}observe(){}stopObserving(){}}class Zi extends ae{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,i=t.document,s=e.model.document;t.addObserver(MM),this._undoOnBackspace=!1;const c=new ly(e,"forward");e.commands.add("deleteForward",c),e.commands.add("forwardDelete",c),e.commands.add("delete",new ly(e,"backward")),this.listenTo(i,"delete",(d,h)=>{i.isComposing||h.preventDefault();const{direction:p,sequence:m,selectionToRemove:b,unit:y}=h,C=p==="forward"?"deleteForward":"delete",E={sequence:m};if(y=="selection"){const M=Array.from(b.getRanges()).map(O=>e.editing.mapper.toModelRange(O));E.selection=e.model.createSelection(M)}else E.unit=y;e.execute(C,E),t.scrollToTheSelection()},{priority:"low"}),this.editor.plugins.has("UndoEditing")&&(this.listenTo(i,"delete",(d,h)=>{this._undoOnBackspace&&h.direction=="backward"&&h.sequence==1&&h.unit=="codePoint"&&(this._undoOnBackspace=!1,e.execute("undo"),h.preventDefault(),d.stop())},{context:"$capture"}),this.listenTo(s,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class NM extends ae{static get requires(){return[ay,Zi]}static get pluginName(){return"Typing"}}function hy(a,e){let t=a.start;return{text:Array.from(a.getWalker({ignoreElementEnd:!1})).reduce((i,{item:s})=>s.is("$text")||s.is("$textProxy")?i+s.data:(t=e.createPositionAfter(s),""),""),range:e.createRange(t,a.end)}}class fy extends Ye(){constructor(e,t){super(),this.model=e,this.testCallback=t,this._hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){const e=this.model.document;this.listenTo(e.selection,"change:range",(t,{directChange:i})=>{i&&(e.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this._hasMatch=!1))}),this.listenTo(e,"change:data",(t,i)=>{!i.isUndo&&i.isLocal&&this._evaluateTextBeforeSelection("data",{batch:i})})}_evaluateTextBeforeSelection(e,t={}){const i=this.model,s=i.document.selection,c=i.createRange(i.createPositionAt(s.focus.parent,0),s.focus),{text:d,range:h}=hy(c,i),p=this.testCallback(d);if(!p&&this.hasMatch&&this.fire("unmatched"),this._hasMatch=!!p,p){const m=Object.assign(t,{text:d,range:h});typeof p=="object"&&Object.assign(m,p),this.fire(`matched:${e}`,m)}}}class gy extends ae{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,i=e.editing.view,s=e.locale,c=t.document.selection;this.listenTo(i.document,"arrowKey",(d,h)=>{if(!c.isCollapsed||h.shiftKey||h.altKey||h.ctrlKey)return;const p=h.keyCode==Re.arrowright,m=h.keyCode==Re.arrowleft;if(!p&&!m)return;const b=s.contentLanguageDirection;let y=!1;y=b==="ltr"&&p||b==="rtl"&&m?this._handleForwardMovement(h):this._handleBackwardMovement(h),y===!0&&d.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(c,"change:range",(d,h)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!h.directChange&&Fu(c.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,i=this.editor.model.document.selection,s=i.getFirstPosition();return!this._isGravityOverridden&&(!s.isAtStart||!Fp(i,t))&&!!Fu(s,t)&&(Ru(e),this._overrideGravity(),!0)}_handleBackwardMovement(e){const t=this.attributes,i=this.editor.model,s=i.document.selection,c=s.getFirstPosition();return this._isGravityOverridden?(Ru(e),this._restoreGravity(),Vp(i,t,c),!0):c.isAtStart?!!Fp(s,t)&&(Ru(e),Vp(i,t,c),!0):!!function(d,h){const p=d.getShiftedBy(-1);return Fu(p,h)}(c,t)&&(c.isAtEnd&&!Fp(s,t)&&Fu(c,t)?(Ru(e),Vp(i,t,c),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1))}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function Fp(a,e){for(const t of e)if(a.hasAttribute(t))return!0;return!1}function Vp(a,e,t){const i=t.nodeBefore;a.change(s=>{if(i){const c=[],d=a.schema.isObject(i)&&a.schema.isInline(i);for(const[h,p]of i.getAttributes())!a.schema.checkAttribute("$text",h)||d&&a.schema.getAttributeProperties(h).copyFromObject===!1||c.push([h,p]);s.setSelectionAttribute(c)}else s.removeSelectionAttribute(e)})}function Ru(a){a.preventDefault()}function Fu(a,e){const{nodeBefore:t,nodeAfter:i}=a;for(const s of e){const c=t?t.getAttribute(s):void 0;if((i?i.getAttribute(s):void 0)!==c)return!0}return!1}const py={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"½",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"⅓",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"⅔",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"¼",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"¾",null]},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:ra('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:ra("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:ra("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:ra('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:ra('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:ra("'"),to:[null,"‚",null,"’"]}},my={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},OM=["symbols","mathematical","typography","quotes"];function BM(a){return typeof a=="string"?new RegExp(`(${Kv(a)})$`):a}function PM(a){return typeof a=="string"?()=>[a]:a instanceof Array?()=>a:a}function LM(a){return(a.textNode?a.textNode:a.nodeAfter).getAttributes()}function ra(a){return new RegExp(`(^|\\s)(${a})([^${a}]*)(${a})$`)}function oa(a,e,t,i){return i.createRange(ky(a,e,t,!0,i),ky(a,e,t,!1,i))}function ky(a,e,t,i,s){let c=a.textNode||(i?a.nodeBefore:a.nodeAfter),d=null;for(;c&&c.getAttribute(e)==t;)d=c,c=i?c.previousSibling:c.nextSibling;return d?s.createPositionAt(d,i?"before":"after"):a}function Kr(a,e,t,i){let s,c=null;typeof i=="function"?s=i:(c=a.commands.get(i),s=()=>{a.execute(i)}),a.model.document.on("change:data",(d,h)=>{if(c&&!c.isEnabled||!e.isEnabled)return;const p=$t(a.model.document.selection.getRanges());if(!p.isCollapsed||h.isUndo||!h.isLocal)return;const m=Array.from(a.model.document.differ.getChanges()),b=m[0];if(m.length!=1||b.type!=="insert"||b.name!="$text"||b.length!=1)return;const y=b.position.parent;if(y.is("element","codeBlock")||y.is("element","listItem")&&typeof i!="function"&&!["numberedList","bulletedList","todoList"].includes(i)||c&&c.value===!0)return;const C=y.getChild(0),E=a.model.createRangeOn(C);if(!E.containsRange(p)&&!p.end.isEqual(E.end))return;const M=t.exec(C.data.substr(0,p.end.offset));M&&a.model.enqueueChange(O=>{const z=O.createPositionAt(y,0),V=O.createPositionAt(y,M[0].length),Z=new En(z,V);if(s({match:M})!==!1){O.remove(Z);const oe=a.model.document.selection.getFirstRange(),Ae=O.createRangeIn(y);!y.isEmpty||Ae.isEqual(oe)||Ae.containsRange(oe,!0)||O.remove(y)}Z.detach(),a.model.enqueueChange(()=>{a.plugins.get("Delete").requestUndoOnBackspace()})})})}function sa(a,e,t,i){let s,c;t instanceof RegExp?s=t:c=t,c=c||(d=>{let h;const p=[],m=[];for(;(h=s.exec(d))!==null&&!(h&&h.length<4);){let{index:b,1:y,2:C,3:E}=h;const M=y+C+E;b+=h[0].length-M.length;const O=[b,b+y.length],z=[b+y.length+C.length,b+y.length+C.length+E.length];p.push(O),p.push(z),m.push([b+y.length,b+y.length+C.length])}return{remove:p,format:m}}),a.model.document.on("change:data",(d,h)=>{if(h.isUndo||!h.isLocal||!e.isEnabled)return;const p=a.model,m=p.document.selection;if(!m.isCollapsed)return;const b=Array.from(p.document.differ.getChanges()),y=b[0];if(b.length!=1||y.type!=="insert"||y.name!="$text"||y.length!=1)return;const C=m.focus,E=C.parent,{text:M,range:O}=function(oe,Ae){let ze=oe.start;return{text:Array.from(oe.getItems()).reduce((Ji,bn)=>!bn.is("$text")&&!bn.is("$textProxy")||bn.getAttribute("code")?(ze=Ae.createPositionAfter(bn),""):Ji+bn.data,""),range:Ae.createRange(ze,oe.end)}}(p.createRange(p.createPositionAt(E,0),C),p),z=c(M),V=by(O.start,z.format,p),Z=by(O.start,z.remove,p);V.length&&Z.length&&p.enqueueChange(oe=>{if(i(oe,V)!==!1){for(const Ae of Z.reverse())oe.remove(Ae);p.enqueueChange(()=>{a.plugins.get("Delete").requestUndoOnBackspace()})}})})}function by(a,e,t){return e.filter(i=>i[0]!==void 0&&i[1]!==void 0).map(i=>t.createRange(a.getShiftedBy(i[0]),a.getShiftedBy(i[1])))}function Vu(a,e){return(t,i)=>{if(!a.commands.get(e).isEnabled)return!1;const s=a.model.schema.getValidRanges(i,e);for(const c of s)t.setAttribute(e,!0,c);t.removeSelectionAttribute(e)}}class wy extends st{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,i=t.document.selection,s=e.forceValue===void 0?!this.value:e.forceValue;t.change(c=>{if(i.isCollapsed)s?c.setSelectionAttribute(this.attributeKey,!0):c.removeSelectionAttribute(this.attributeKey);else{const d=t.schema.getValidRanges(i.getRanges(),this.attributeKey);for(const h of d)s?c.setAttribute(this.attributeKey,s,h):c.removeAttribute(this.attributeKey,h)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,i=e.document.selection;if(i.isCollapsed)return i.hasAttribute(this.attributeKey);for(const s of i.getRanges())for(const c of s.getItems())if(t.checkAttribute(c,this.attributeKey))return c.hasAttribute(this.attributeKey);return!1}}const aa="bold";class zM extends ae{static get pluginName(){return"BoldEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:aa}),e.model.schema.setAttributeProperties(aa,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:aa,view:"strong",upcastAlso:["b",t=>{const i=t.getStyle("font-weight");return i&&(i=="bold"||Number(i)>=600)?{name:!0,styles:["font-weight"]}:null}]}),e.commands.add(aa,new wy(e,aa)),e.keystrokes.set("CTRL+B",aa)}}const Up="bold";class jM extends ae{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(Up,i=>{const s=e.commands.get(Up),c=new Ke(i);return c.set({label:t("Bold"),icon:Pe.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),c.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(c,"execute",()=>{e.execute(Up),e.editing.view.focus()}),c})}}var _y=o(5363),RM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(_y.Z,RM),_y.Z.locals;const ca="italic";class FM extends ae{static get pluginName(){return"ItalicEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:ca}),e.model.schema.setAttributeProperties(ca,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:ca,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),e.commands.add(ca,new wy(e,ca)),e.keystrokes.set("CTRL+I",ca)}}const $p="italic";class VM extends ae{static get pluginName(){return"ItalicUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add($p,i=>{const s=e.commands.get($p),c=new Ke(i);return c.set({label:t("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),c.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(c,"execute",()=>{e.execute($p),e.editing.view.focus()}),c})}}function*vy(a,e){for(const t of e)t&&a.getAttributeProperties(t[0]).copyOnEnter&&(yield t)}class UM extends st{execute(){this.editor.model.change(e=>{this.enterBlock(e),this.fire("afterExecute",{writer:e})})}enterBlock(e){const t=this.editor.model,i=t.document.selection,s=t.schema,c=i.isCollapsed,d=i.getFirstRange(),h=d.start.parent,p=d.end.parent;if(s.isLimit(h)||s.isLimit(p))return c||h!=p||t.deleteContent(i),!1;if(c){const m=vy(e.model.schema,i.getAttributes());return yy(e,d.start),e.setSelectionAttribute(m),!0}{const m=!(d.start.isAtStart&&d.end.isAtEnd),b=h==p;if(t.deleteContent(i,{leaveUnmerged:m}),m){if(b)return yy(e,i.focus),!0;e.setSelection(p,0)}}return!1}}function yy(a,e){a.split(e),a.setSelection(e.parent.nextSibling,0)}const $M={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class Ay extends Hi{constructor(e){super(e);const t=this.document;let i=!1;t.on("keydown",(s,c)=>{i=c.shiftKey}),t.on("beforeinput",(s,c)=>{if(!this.isEnabled)return;let d=c.inputType;g.isSafari&&i&&d=="insertParagraph"&&(d="insertLineBreak");const h=c.domEvent,p=$M[d];if(!p)return;const m=new Ys(t,"enter",c.targetRanges[0]);t.fire(m,new Ks(e,h,{isSoft:p.isSoft})),m.stop.called&&s.stop()})}observe(){}stopObserving(){}}class Uu extends ae{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,i=t.document;t.addObserver(Ay),e.commands.add("enter",new UM(e)),this.listenTo(i,"enter",(s,c)=>{i.isComposing||c.preventDefault(),c.isSoft||(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"})}}class HM extends st{execute(){const e=this.editor.model,t=e.document;e.change(i=>{(function(s,c,d){const h=d.isCollapsed,p=d.getFirstRange(),m=p.start.parent,b=p.end.parent,y=m==b;if(h){const C=vy(s.schema,d.getAttributes());Cy(s,c,p.end),c.removeSelectionAttribute(d.getAttributeKeys()),c.setSelectionAttribute(C)}else{const C=!(p.start.isAtStart&&p.end.isAtEnd);s.deleteContent(d,{leaveUnmerged:C}),y?Cy(s,c,d.focus):C&&c.setSelection(b,0)}})(e,i,t.selection),this.fire("afterExecute",{writer:i})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=function(i,s){if(s.rangeCount>1)return!1;const c=s.anchor;if(!c||!i.checkChild(c,"softBreak"))return!1;const d=s.getFirstRange(),h=d.start.parent,p=d.end.parent;return!((Hp(h,i)||Hp(p,i))&&h!==p)}(e.schema,t.selection)}}function Cy(a,e,t){const i=e.createElement("softBreak");a.insertContent(i,t),e.setSelection(i,"after")}function Hp(a,e){return!a.is("rootElement")&&(e.isLimit(a)||Hp(a.parent,e))}class WM extends ae{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,i=e.conversion,s=e.editing.view,c=s.document;t.register("softBreak",{allowWhere:"$text",isInline:!0}),i.for("upcast").elementToElement({model:"softBreak",view:"br"}),i.for("downcast").elementToElement({model:"softBreak",view:(d,{writer:h})=>h.createEmptyElement("br")}),s.addObserver(Ay),e.commands.add("shiftEnter",new HM(e)),this.listenTo(c,"enter",(d,h)=>{c.isComposing||h.preventDefault(),h.isSoft&&(e.execute("shiftEnter"),s.scrollToTheSelection())},{priority:"low"})}}class qM extends st{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,i=t.schema,s=t.document.selection,c=Array.from(s.getSelectedBlocks()),d=e.forceValue===void 0?!this.value:e.forceValue;t.change(h=>{if(d){const p=c.filter(m=>$u(m)||Ey(i,m));this._applyQuote(h,p)}else this._removeQuote(h,c.filter($u))})}_getValue(){const e=$t(this.editor.model.document.selection.getSelectedBlocks());return!(!e||!$u(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,i=$t(e.getSelectedBlocks());return!!i&&Ey(t,i)}_removeQuote(e,t){xy(e,t).reverse().forEach(i=>{if(i.start.isAtStart&&i.end.isAtEnd)return void e.unwrap(i.start.parent);if(i.start.isAtStart){const c=e.createPositionBefore(i.start.parent);return void e.move(i,c)}i.end.isAtEnd||e.split(i.end);const s=e.createPositionAfter(i.end.parent);e.move(i,s)})}_applyQuote(e,t){const i=[];xy(e,t).reverse().forEach(s=>{let c=$u(s.start);c||(c=e.createElement("blockQuote"),e.wrap(s,c)),i.push(c)}),i.reverse().reduce((s,c)=>s.nextSibling==c?(e.merge(e.createPositionAfter(s)),s):c)}}function $u(a){return a.parent.name=="blockQuote"?a.parent:null}function xy(a,e){let t,i=0;const s=[];for(;i<e.length;){const c=e[i],d=e[i+1];t||(t=a.createPositionBefore(c)),d&&c.nextSibling==d||(s.push(a.createRange(t,a.createPositionAfter(c))),t=null),i++}return s}function Ey(a,e){const t=a.checkChild(e.parent,"blockQuote"),i=a.checkChild(["$root","blockQuote"],e);return t&&i}class GM extends ae{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Uu,Zi]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new qM(e)),t.register("blockQuote",{inheritAllFrom:"$container"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(d=>{const h=e.model.document.differ.getChanges();for(const p of h)if(p.type=="insert"){const m=p.position.nodeAfter;if(!m)continue;if(m.is("element","blockQuote")&&m.isEmpty)return d.remove(m),!0;if(m.is("element","blockQuote")&&!t.checkChild(p.position,m))return d.unwrap(m),!0;if(m.is("element")){const b=d.createRangeIn(m);for(const y of b.getItems())if(y.is("element","blockQuote")&&!t.checkChild(d.createPositionBefore(y),y))return d.unwrap(y),!0}}else if(p.type=="remove"){const m=p.position.parent;if(m.is("element","blockQuote")&&m.isEmpty)return d.remove(m),!0}return!1});const i=this.editor.editing.view.document,s=e.model.document.selection,c=e.commands.get("blockQuote");this.listenTo(i,"enter",(d,h)=>{!s.isCollapsed||!c.value||s.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),h.preventDefault(),d.stop())},{context:"blockquote"}),this.listenTo(i,"delete",(d,h)=>{if(h.direction!="backward"||!s.isCollapsed||!c.value)return;const p=s.getLastPosition().parent;p.isEmpty&&!p.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),h.preventDefault(),d.stop())},{context:"blockquote"})}}var Dy=o(3789),YM={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ve()(Dy.Z,YM),Dy.Z.locals;class ZM extends ae{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("blockQuote",i=>{const s=e.commands.get("blockQuote"),c=new Ke(i);return c.set({label:t("Block quote"),icon:Pe.quote,tooltip:!0,isToggleable:!0}),c.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(c,"execute",()=>{e.execute("blockQuote"),e.editing.view.focus()}),c})}}class sl extends Go{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function i(s){return(c,d)=>{d.preventDefault();const h=d.dropRange?[d.dropRange]:null,p=new S(t,s);t.fire(p,{dataTransfer:d.dataTransfer,method:c.name,targetRanges:h,target:d.target,domEvent:d.domEvent}),p.stop.called&&d.stopPropagation()}}this.listenTo(t,"paste",i("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",i("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",i("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,i=e.type=="drop"||e.type=="paste",s={dataTransfer:new Lw(t,{cacheFiles:i})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(c,d){const h=d.target.ownerDocument,p=d.clientX,m=d.clientY;let b;return h.caretRangeFromPoint&&h.caretRangeFromPoint(p,m)?b=h.caretRangeFromPoint(p,m):d.rangeParent&&(b=h.createRange(),b.setStart(d.rangeParent,d.rangeOffset),b.collapse(!0)),b?c.domConverter.domRangeToView(b):null}(this.view,e)),this.fire(e.type,e,s)}}const Sy=["figcaption","li"];function Ty(a){let e="";if(a.is("$text")||a.is("$textProxy"))e=a.data;else if(a.is("element","img")&&a.hasAttribute("alt"))e=a.getAttribute("alt");else if(a.is("element","br"))e=`
`;else{let t=null;for(const i of a.getChildren()){const s=Ty(i);t&&(t.is("containerElement")||i.is("containerElement"))&&(Sy.includes(t.name)||Sy.includes(i.name)?e+=`
`:e+=`

<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3H9V5H6.46173L11.3047 9.84298L9.8905 11.2572L5 6.3667V9H3V3Z" fill="black"/>
<path d="M3 21H9V19H6.3764L11.3046 14.0718L9.89038 12.6576L5 17.548V15H3V21Z" fill="black"/>
<path d="M15 21H21V15H19V17.5244L14.1332 12.6576L12.719 14.0718L17.6472 19H15V21Z" fill="black"/>
<path d="M21 3H15V5H17.5619L12.7189 9.84301L14.1331 11.2572L19 6.39032V9H21V3Z" fill="black"/>
</svg>
`,tooltip:!0}),t.bind("isOn").to(this,"isFullScreen"),a.config.get(XC),a.config.get(e1),t.on("execute",()=>{(i=>{const s=i.ui.view.editable.element;s.requestFullscreen?s.requestFullscreen():s.mozRequestFullScreen?s.mozRequestFullScreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.msRequestFullscreen&&s.msRequestFullscreen()})(this.editor)}),t})}_restoreStyle(a,e,t,i){t!==void 0?a.setStyle(e,t,i):a.removeStyle(e,i)}_restoreStyles(a,e){this._restoreStyle(a,"height",this.styles.height,e),this._restoreStyle(a,"overflow-y",this.styles["overflow-y"],e)}}],gm.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","alignment","|","imageInsert","blockQuote","mediaEmbed","undo","redo","fullscreen"]},language:"en",image:{toolbar:["imageTextAlternative","toggleImageCaption","imageStyle:inline","imageStyle:block","imageStyle:side","linkImage"]}};const XO=gm})(),l=l.default})());const m7=(vt.exports==null?{}:vt.exports).default||vt.exports;(vt.exports==null?{}:vt.exports).InlineEditor;function JD({handleChange:r,post:n}){const o=l=>{console.log("hello")};return F.jsxs("form",{children:[F.jsxs("div",{className:"input",children:[F.jsx("label",{htmlFor:"title"}),F.jsx("input",{placeholder:"Title",onChange:r,value:n.title,type:"text",id:"title",name:"title"})]}),F.jsxs("div",{className:"input",children:[F.jsxs("div",{className:"input",children:[F.jsx("label",{htmlFor:"img"}),F.jsx("input",{placeholder:"Cover image url (optional)",onChange:r,value:n.img,type:"text",id:"img_url",name:"img"})]}),F.jsx("div",{className:"ckeditor-container",children:F.jsx(p7.CKEditor,{config:{mediaEmbed:{previewsInData:!0},placeholder:"Content (optional)",toolbar:{shouldNotGroupWhenFull:!0},fullscreen:{closeOnEscape:!0,closeOnClick:!1}},editor:m7,data:n.content?n.content:"",onReady:l=>{console.log("Editor is ready to use!",l),l.editing.view.document.on("click",(u,f)=>{o()})},onChange:(l,u)=>{u.getData(),r(u)}})})]}),F.jsxs("div",{className:"radio-container",children:[F.jsx("input",{onChange:r,type:"radio",id:"general",name:"category",value:"general"}),F.jsx("label",{className:"radio",htmlFor:"general",children:"General (default)"}),F.jsx("br",{}),F.jsx("input",{onChange:r,type:"radio",id:"review",name:"category",value:"review"}),F.jsx("label",{className:"radio",onChange:r,htmlFor:"review",children:"Review"}),F.jsx("br",{}),F.jsx("input",{onChange:r,type:"radio",id:"recommend",name:"category",value:"recommend"}),F.jsx("label",{className:"radio",htmlFor:"recommend",children:"Recommend"}),F.jsx("br",{})]})]})}function k7({supabase:r,session:n}){const[o,l]=de.useState({title:"",content:"",img:""}),u=Br(),{state:f}=Qa(),g=n?n.user:{user_metadata:""},k=g.user_metadata.name,w=g.id;de.useEffect(()=>{f&&l({title:`${f.title} ~ ${f.author}`,content:f.description,img:f.cover_key?f.cover_url:""})},[]);const v=A=>{let x,S;A.target?(x=A.target.name,S=A.target.value):(x="content",S=A.getData()),l(N=>({...N,[x]:S}))},_=async()=>{await r.from("posts").insert({title:o.title,content:o.content,img:o.img,category:o.category,username:k,user_id:w}),alert("Post inserted into database!"),u("/Book-Chronicles")};return F.jsx(F.Fragment,{children:F.jsxs("div",{className:"create-container",children:[F.jsxs("h1",{className:"create-post-title pastel-black",children:["Create a ",F.jsx("span",{className:"pastel-orange",children:"Post"})]}),F.jsx(JD,{handleChange:v,post:o}),F.jsx("button",{className:"btn red-button darkAccent",onClick:_,post:o,children:"Create Post"}),F.jsx(Mi,{to:"/Book-Chronicles/getBookInfo",children:F.jsx("button",{className:"btn orange-button",children:"Get Book Info"})})]})})}const XD=(r,n)=>{(r.keyCode||r.which)===13&&n()};function b7({title:r,author:n,cover_url:o,cover_key:l,description:u}){const f=Br(),g=()=>{f("/Book-Chronicles/create",{state:{title:r,author:n,cover_url:o,description:u,cover_key:l}})};return F.jsxs("div",{onClick:g,className:"book",children:[F.jsxs("div",{children:[F.jsx("h4",{className:"pastel-black",children:r}),F.jsxs("h5",{children:["By: ",n]}),F.jsx("p",{children:u})]}),F.jsx("img",{src:l?o:"https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"})]})}function w7(){const[r,n]=de.useState(""),[o,l]=de.useState([]),[u,f]=de.useState(!1),g=v=>{n(v.target.value)},k=async()=>{f(!0);const _=await(await fetch(`https://openlibrary.org/search.json?q=${r}`)).json();l([]),n("");for(const A of _.docs)setTimeout(async()=>{const S=await(await fetch(`https://openlibrary.org${A.key}.json`)).json();let N;S.description&&(N=S.description,typeof N!="string"&&(N=S.description.value));const P=await fetch(`https://covers.openlibrary.org/b/olid/${A.cover_edition_key}-M.jpg`),R={key:S.key,title:S.title,author:A.author_name?A.author_name[0]:"",cover_url:P.url,description:N,cover_key:A.cover_edition_key};l(B=>[...B,R])},1e3);f(!1)},w=()=>o.map((_,A)=>F.jsx(b7,{title:_.title,author:_.author,cover_url:_.cover_url,cover_key:_.cover_key,description:_.description},A));return F.jsxs(F.Fragment,{children:[F.jsx("h1",{className:"book-info-title pastel-black",children:F.jsxs("b",{children:["Grab a ",F.jsx("span",{className:"pastel-orange",children:"Book"})]})}),F.jsxs("div",{className:"search-bar",children:[F.jsx("label",{htmlFor:"title"}),F.jsx("input",{value:r,placeholder:"Search for a book...",className:"book-input",onKeyUp:v=>{XD(v,k)},onChange:g,type:"text",name:"title"}),F.jsx("button",{className:"btn orange-button",onClick:k,children:"Search"})]}),F.jsxs("div",{className:"books-container",children:[u?F.jsx(QD,{}):"",w()]})]})}const _7="/Book-Chronicles/assets/cross-ab383046.png";function v7(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var y7={exports:{}};const A7={},C7=Object.freeze(Object.defineProperty({__proto__:null,default:A7},Symbol.toStringTag,{value:"Module"})),x7=nB(C7);(function(r){/**
 * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bcrypt.js for details
 */(function(n,o){typeof v7=="function"&&r&&r.exports?r.exports=o():(n.dcodeIO=n.dcodeIO||{}).bcrypt=o()})(ds,function(){var n={},o=null;function l(G){if(r&&r.exports)try{return x7.randomBytes(G)}catch{}try{var Y;return(self.crypto||self.msCrypto).getRandomValues(Y=new Uint32Array(G)),Array.prototype.slice.call(Y)}catch{}if(!o)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return o(G)}var u=!1;try{l(1),u=!0}catch{}o=null,n.setRandomFallback=function(G){o=G},n.genSaltSync=function(G,Y){if(G=G||P,typeof G!="number")throw Error("Illegal arguments: "+typeof G+", "+typeof Y);G<4?G=4:G>31&&(G=31);var $=[];return $.push("$2a$"),G<10&&$.push("0"),$.push(G.toString()),$.push("$"),$.push(A(l(N),N)),$.join("")},n.genSalt=function(G,Y,$){if(typeof Y=="function"&&($=Y,Y=void 0),typeof G=="function"&&($=G,G=void 0),typeof G>"u")G=P;else if(typeof G!="number")throw Error("illegal arguments: "+typeof G);function U(H){g(function(){try{H(null,n.genSaltSync(G))}catch(J){H(J)}})}if($){if(typeof $!="function")throw Error("Illegal callback: "+typeof $);U($)}else return new Promise(function(H,J){U(function(ue,te){if(ue){J(ue);return}H(te)})})},n.hashSync=function(G,Y){if(typeof Y>"u"&&(Y=P),typeof Y=="number"&&(Y=n.genSaltSync(Y)),typeof G!="string"||typeof Y!="string")throw Error("Illegal arguments: "+typeof G+", "+typeof Y);return be(G,Y)},n.hash=function(G,Y,$,U){function H(J){typeof G=="string"&&typeof Y=="number"?n.genSalt(Y,function(ue,te){be(G,te,J,U)}):typeof G=="string"&&typeof Y=="string"?be(G,Y,J,U):g(J.bind(this,Error("Illegal arguments: "+typeof G+", "+typeof Y)))}if($){if(typeof $!="function")throw Error("Illegal callback: "+typeof $);H($)}else return new Promise(function(J,ue){H(function(te,ne){if(te){ue(te);return}J(ne)})})};function f(G,Y){for(var $=0,U=0,H=0,J=G.length;H<J;++H)G.charCodeAt(H)===Y.charCodeAt(H)?++$:++U;return $<0?!1:U===0}n.compareSync=function(G,Y){if(typeof G!="string"||typeof Y!="string")throw Error("Illegal arguments: "+typeof G+", "+typeof Y);return Y.length!==60?!1:f(n.hashSync(G,Y.substr(0,Y.length-31)),Y)},n.compare=function(G,Y,$,U){function H(J){if(typeof G!="string"||typeof Y!="string"){g(J.bind(this,Error("Illegal arguments: "+typeof G+", "+typeof Y)));return}if(Y.length!==60){g(J.bind(this,null,!1));return}n.hash(G,Y.substr(0,29),function(ue,te){ue?J(ue):J(null,f(te,Y))},U)}if($){if(typeof $!="function")throw Error("Illegal callback: "+typeof $);H($)}else return new Promise(function(J,ue){H(function(te,ne){if(te){ue(te);return}J(ne)})})},n.getRounds=function(G){if(typeof G!="string")throw Error("Illegal arguments: "+typeof G);return parseInt(G.split("$")[2],10)},n.getSalt=function(G){if(typeof G!="string")throw Error("Illegal arguments: "+typeof G);if(G.length!==60)throw Error("Illegal hash length: "+G.length+" != 60");return G.substring(0,29)};var g=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout;function k(G){var Y=[],$=0;return S.encodeUTF16toUTF8(function(){return $>=G.length?null:G.charCodeAt($++)},function(U){Y.push(U)}),Y}var w="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),v=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],_=String.fromCharCode;function A(G,Y){var $=0,U=[],H,J;if(Y<=0||Y>G.length)throw Error("Illegal len: "+Y);for(;$<Y;){if(H=G[$++]&255,U.push(w[H>>2&63]),H=(H&3)<<4,$>=Y){U.push(w[H&63]);break}if(J=G[$++]&255,H|=J>>4&15,U.push(w[H&63]),H=(J&15)<<2,$>=Y){U.push(w[H&63]);break}J=G[$++]&255,H|=J>>6&3,U.push(w[H&63]),U.push(w[J&63])}return U.join("")}function x(G,Y){var $=0,U=G.length,H=0,J=[],ue,te,ne,ge,pe,xe;if(Y<=0)throw Error("Illegal len: "+Y);for(;$<U-1&&H<Y&&(xe=G.charCodeAt($++),ue=xe<v.length?v[xe]:-1,xe=G.charCodeAt($++),te=xe<v.length?v[xe]:-1,!(ue==-1||te==-1||(pe=ue<<2>>>0,pe|=(te&48)>>4,J.push(_(pe)),++H>=Y||$>=U)||(xe=G.charCodeAt($++),ne=xe<v.length?v[xe]:-1,ne==-1)||(pe=(te&15)<<4>>>0,pe|=(ne&60)>>2,J.push(_(pe)),++H>=Y||$>=U)));)xe=G.charCodeAt($++),ge=xe<v.length?v[xe]:-1,pe=(ne&3)<<6>>>0,pe|=ge,J.push(_(pe)),++H;var gt=[];for($=0;$<H;$++)gt.push(J[$].charCodeAt(0));return gt}var S=function(){var G={};return G.MAX_CODEPOINT=1114111,G.encodeUTF8=function(Y,$){var U=null;for(typeof Y=="number"&&(U=Y,Y=function(){return null});U!==null||(U=Y())!==null;)U<128?$(U&127):U<2048?($(U>>6&31|192),$(U&63|128)):U<65536?($(U>>12&15|224),$(U>>6&63|128),$(U&63|128)):($(U>>18&7|240),$(U>>12&63|128),$(U>>6&63|128),$(U&63|128)),U=null},G.decodeUTF8=function(Y,$){for(var U,H,J,ue,te=function(ne){ne=ne.slice(0,ne.indexOf(null));var ge=Error(ne.toString());throw ge.name="TruncatedError",ge.bytes=ne,ge};(U=Y())!==null;)if(!(U&128))$(U);else if((U&224)===192)(H=Y())===null&&te([U,H]),$((U&31)<<6|H&63);else if((U&240)===224)((H=Y())===null||(J=Y())===null)&&te([U,H,J]),$((U&15)<<12|(H&63)<<6|J&63);else if((U&248)===240)((H=Y())===null||(J=Y())===null||(ue=Y())===null)&&te([U,H,J,ue]),$((U&7)<<18|(H&63)<<12|(J&63)<<6|ue&63);else throw RangeError("Illegal starting byte: "+U)},G.UTF16toUTF8=function(Y,$){for(var U,H=null;(U=H!==null?H:Y())!==null;){if(U>=55296&&U<=57343&&(H=Y())!==null&&H>=56320&&H<=57343){$((U-55296)*1024+H-56320+65536),H=null;continue}$(U)}H!==null&&$(H)},G.UTF8toUTF16=function(Y,$){var U=null;for(typeof Y=="number"&&(U=Y,Y=function(){return null});U!==null||(U=Y())!==null;)U<=65535?$(U):(U-=65536,$((U>>10)+55296),$(U%1024+56320)),U=null},G.encodeUTF16toUTF8=function(Y,$){G.UTF16toUTF8(Y,function(U){G.encodeUTF8(U,$)})},G.decodeUTF8toUTF16=function(Y,$){G.decodeUTF8(Y,function(U){G.UTF8toUTF16(U,$)})},G.calculateCodePoint=function(Y){return Y<128?1:Y<2048?2:Y<65536?3:4},G.calculateUTF8=function(Y){for(var $,U=0;($=Y())!==null;)U+=G.calculateCodePoint($);return U},G.calculateUTF16asUTF8=function(Y){var $=0,U=0;return G.UTF16toUTF8(Y,function(H){++$,U+=G.calculateCodePoint(H)}),[$,U]},G}();Date.now=Date.now||function(){return+new Date};var N=16,P=10,R=16,B=100,L=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],D=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],W=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function K(G,Y,$,U){var H,J=G[Y],ue=G[Y+1];return J^=$[0],H=U[J>>>24],H+=U[256|J>>16&255],H^=U[512|J>>8&255],H+=U[768|J&255],ue^=H^$[1],H=U[ue>>>24],H+=U[256|ue>>16&255],H^=U[512|ue>>8&255],H+=U[768|ue&255],J^=H^$[2],H=U[J>>>24],H+=U[256|J>>16&255],H^=U[512|J>>8&255],H+=U[768|J&255],ue^=H^$[3],H=U[ue>>>24],H+=U[256|ue>>16&255],H^=U[512|ue>>8&255],H+=U[768|ue&255],J^=H^$[4],H=U[J>>>24],H+=U[256|J>>16&255],H^=U[512|J>>8&255],H+=U[768|J&255],ue^=H^$[5],H=U[ue>>>24],H+=U[256|ue>>16&255],H^=U[512|ue>>8&255],H+=U[768|ue&255],J^=H^$[6],H=U[J>>>24],H+=U[256|J>>16&255],H^=U[512|J>>8&255],H+=U[768|J&255],ue^=H^$[7],H=U[ue>>>24],H+=U[256|ue>>16&255],H^=U[512|ue>>8&255],H+=U[768|ue&255],J^=H^$[8],H=U[J>>>24],H+=U[256|J>>16&255],H^=U[512|J>>8&255],H+=U[768|J&255],ue^=H^$[9],H=U[ue>>>24],H+=U[256|ue>>16&255],H^=U[512|ue>>8&255],H+=U[768|ue&255],J^=H^$[10],H=U[J>>>24],H+=U[256|J>>16&255],H^=U[512|J>>8&255],H+=U[768|J&255],ue^=H^$[11],H=U[ue>>>24],H+=U[256|ue>>16&255],H^=U[512|ue>>8&255],H+=U[768|ue&255],J^=H^$[12],H=U[J>>>24],H+=U[256|J>>16&255],H^=U[512|J>>8&255],H+=U[768|J&255],ue^=H^$[13],H=U[ue>>>24],H+=U[256|ue>>16&255],H^=U[512|ue>>8&255],H+=U[768|ue&255],J^=H^$[14],H=U[J>>>24],H+=U[256|J>>16&255],H^=U[512|J>>8&255],H+=U[768|J&255],ue^=H^$[15],H=U[ue>>>24],H+=U[256|ue>>16&255],H^=U[512|ue>>8&255],H+=U[768|ue&255],J^=H^$[16],G[Y]=ue^$[R+1],G[Y+1]=J,G}function ee(G,Y){for(var $=0,U=0;$<4;++$)U=U<<8|G[Y]&255,Y=(Y+1)%G.length;return{key:U,offp:Y}}function X(G,Y,$){for(var U=0,H=[0,0],J=Y.length,ue=$.length,te,ne=0;ne<J;ne++)te=ee(G,U),U=te.offp,Y[ne]=Y[ne]^te.key;for(ne=0;ne<J;ne+=2)H=K(H,0,Y,$),Y[ne]=H[0],Y[ne+1]=H[1];for(ne=0;ne<ue;ne+=2)H=K(H,0,Y,$),$[ne]=H[0],$[ne+1]=H[1]}function se(G,Y,$,U){for(var H=0,J=[0,0],ue=$.length,te=U.length,ne,ge=0;ge<ue;ge++)ne=ee(Y,H),H=ne.offp,$[ge]=$[ge]^ne.key;for(H=0,ge=0;ge<ue;ge+=2)ne=ee(G,H),H=ne.offp,J[0]^=ne.key,ne=ee(G,H),H=ne.offp,J[1]^=ne.key,J=K(J,0,$,U),$[ge]=J[0],$[ge+1]=J[1];for(ge=0;ge<te;ge+=2)ne=ee(G,H),H=ne.offp,J[0]^=ne.key,ne=ee(G,H),H=ne.offp,J[1]^=ne.key,J=K(J,0,$,U),U[ge]=J[0],U[ge+1]=J[1]}function he(G,Y,$,U,H){var J=W.slice(),ue=J.length,te;if($<4||$>31)if(te=Error("Illegal number of rounds (4-31): "+$),U){g(U.bind(this,te));return}else throw te;if(Y.length!==N)if(te=Error("Illegal salt length: "+Y.length+" != "+N),U){g(U.bind(this,te));return}else throw te;$=1<<$>>>0;var ne,ge,pe=0,xe;Int32Array?(ne=new Int32Array(L),ge=new Int32Array(D)):(ne=L.slice(),ge=D.slice()),se(Y,G,ne,ge);function gt(){if(H&&H(pe/$),pe<$)for(var St=Date.now();pe<$&&(pe=pe+1,X(G,ne,ge),X(Y,ne,ge),!(Date.now()-St>B)););else{for(pe=0;pe<64;pe++)for(xe=0;xe<ue>>1;xe++)K(J,xe<<1,ne,ge);var Ge=[];for(pe=0;pe<ue;pe++)Ge.push((J[pe]>>24&255)>>>0),Ge.push((J[pe]>>16&255)>>>0),Ge.push((J[pe]>>8&255)>>>0),Ge.push((J[pe]&255)>>>0);if(U){U(null,Ge);return}else return Ge}U&&g(gt)}if(typeof U<"u")gt();else for(var Dt;;)if(typeof(Dt=gt())<"u")return Dt||[]}function be(G,Y,$,U){var H;if(typeof G!="string"||typeof Y!="string")if(H=Error("Invalid string / salt: Not a string"),$){g($.bind(this,H));return}else throw H;var J,ue;if(Y.charAt(0)!=="$"||Y.charAt(1)!=="2")if(H=Error("Invalid salt version: "+Y.substring(0,2)),$){g($.bind(this,H));return}else throw H;if(Y.charAt(2)==="$")J=String.fromCharCode(0),ue=3;else{if(J=Y.charAt(2),J!=="a"&&J!=="b"&&J!=="y"||Y.charAt(3)!=="$")if(H=Error("Invalid salt revision: "+Y.substring(2,4)),$){g($.bind(this,H));return}else throw H;ue=4}if(Y.charAt(ue+2)>"$")if(H=Error("Missing salt rounds"),$){g($.bind(this,H));return}else throw H;var te=parseInt(Y.substring(ue,ue+1),10)*10,ne=parseInt(Y.substring(ue+1,ue+2),10),ge=te+ne,pe=Y.substring(ue+3,ue+25);G+=J>="a"?"\0":"";var xe=k(G),gt=x(pe,N);function Dt(St){var Ge=[];return Ge.push("$2"),J>="a"&&Ge.push(J),Ge.push("$"),ge<10&&Ge.push("0"),Ge.push(ge.toString()),Ge.push("$"),Ge.push(A(gt,gt.length)),Ge.push(A(St,W.length*4-1)),Ge.join("")}if(typeof $>"u")return Dt(he(xe,gt,ge));he(xe,gt,ge,function(St,Ge){St?$(St,null):$(null,Dt(Ge))},U)}return n.encodeBase64=A,n.decodeBase64=x,n})})(y7);function E7({date:r,comment:n,id:o,supabase:l,reloadComments:u,username:f,user_id:g,session_user_id:k}){const w=g===k,v=async()=>{w?confirm("Are you sure you want to delete this comment?")?(await l.from("comments").delete().eq("id",o),u()):console.log("delete is cancelled"):alert("You can't delete this comment! It's not yours!")};return F.jsxs("div",{className:"comment",children:[F.jsxs("div",{className:"comment-header",children:[F.jsxs("small",{children:[f," ",F.jsxs("span",{className:"time-ago",children:["• ",vf(r)?vf(r):""]})]}),w?F.jsx("img",{onClick:v,src:_7}):""]}),F.jsx("p",{children:n})]})}const D7="/Book-Chronicles/assets/trash-2415bf1a.png",S7="/Book-Chronicles/assets/edit-727f5020.png";function T7({supabase:r,session:n}){const[o,l]=de.useState({user_likes:""}),[u,f]=de.useState(!1),[g,k]=de.useState([]),[w,v]=de.useState(""),{id:_}=pb(),A=Br(),x=n?n.user:{user_metadata:{}},S=x.user_metadata.name,N=x.id,P=N===o.user_id,R=async()=>{const{data:he,error:be}=await r.from("posts").select().eq("id",_);l(he[0])},B=async()=>{const{data:he,error:be}=await r.from("comments").select().order("created_at",{ascending:!1}).eq("post_id",_);k(he)};de.useEffect(()=>{R(),B(),window.scroll(0,0)},[]);const L=async()=>{if(n)if(!o.user_likes[N]&&!u){const he={...o.user_likes,[N]:!0};await r.from("posts").update({vote:o.vote+1,user_likes:he}).eq("id",_),console.log("vote has been updated..."),f(!0),l({...o,vote:o.vote+1})}else console.log("Can't like a post more than once...");else alert("You must be logged in to like a post!")},D=he=>{v(he.target.value)},W=async()=>{P?confirm("Are you sure you want to delete this post?")?(await r.from("posts").delete().eq("id",_),A("/Book-Chronicles")):console.log("delete is cancelled"):alert("You can't delete this post!'")},K=async()=>{P?A(`/Book-Chronicles/post/${_}/edit`):alert("You can't access this!")},ee=async()=>{await r.from("comments").insert({post_id:_,comment:w,username:S,user_id:N}),console.log("Comment is inserted into database..."),B(),v("")},X=g.map(he=>F.jsx(E7,{date:he.created_at,comment:he.comment,id:he.id,supabase:r,reloadComments:B,username:he.username,user_id:he.user_id,session_user_id:N},he.id));let se="back-pastel-green pastel-green";return o.category=="review"?se="back-pastel-purple pastel-purple":o.category=="recommend"&&(se="back-pastel-red pastel-red"),F.jsx("div",{className:"post-container",children:F.jsxs("div",{className:"post",children:[F.jsxs("div",{className:"post-tags",children:[F.jsxs("p",{children:["Posted ",o.created_at?vf(o.created_at):" "]}),F.jsxs("p",{className:`post-category ${se}`,children:["#",o.category]})]}),F.jsx("h2",{className:"pastel-black",children:o.title}),F.jsx("img",{className:"post-image",src:o.img}),F.jsx("div",{children:ZD(o.content)}),F.jsx("p",{children:F.jsx("b",{children:o.username?"~ "+o.username:""})}),F.jsxs("div",{className:"action-images",children:[F.jsxs("div",{onClick:L,className:`${o.user_likes[N]||u?"pastel-red":""} like-image`,children:[F.jsx("img",{src:YD})," ",F.jsxs("b",{children:[o.vote," ",o.vote!==1?"likes":"like"]})]}),n&&P?F.jsxs("div",{children:[F.jsx("img",{onClick:K,className:"edit-image",src:S7}),F.jsx("img",{onClick:W,className:"delete-image",src:D7})]}):""]}),F.jsxs("div",{className:"comments-section",children:[F.jsx("div",{className:"insert-comment-container",children:n?F.jsx("input",{onKeyUp:he=>{XD(he,ee)},value:w,onChange:D,placeholder:"Leave a comment...",type:"text"}):F.jsx("input",{disabled:!0,placeholder:"Sign in to leave a comment...",type:"text"})}),F.jsx("div",{className:"comments-container",children:X})]})]})})}function I7({supabase:r}){const[n,o]=de.useState({title:"",content:"",img:""}),l=Br(),{id:u}=pb(),f=async()=>{const{data:w,error:v}=await r.from("posts").select().eq("id",u);o(w[0])};de.useEffect(()=>{f()},[]);const g=w=>{let v,_;w.target?(v=w.target.name,_=w.target.value):(v="content",_=w.getData()),o(A=>({...A,[v]:_}))},k=async()=>{await r.from("posts").update({title:n.title,content:n.content,img:n.img,category:n.category}).eq("id",u),alert("successfully updated!"),l(`/Book-Chronicles/post/${u}`)};return F.jsx("div",{children:F.jsxs("div",{className:"create-container",children:[F.jsxs("h1",{className:"create-post-title pastel-black",children:["Update ",F.jsx("span",{className:"pastel-orange",children:"Post"})]}),F.jsx(JD,{handleChange:g,post:n}),F.jsx("button",{className:"btn orange-button",onClick:k,children:"Update Post"})]})})}const Ab=r=>({async signupUser(n,o,l){const{data:u,error:f}=await r.auth.signUp({email:n,password:o,options:{data:{name:l}}});return[u,f]},async signIn(n,o){const{data:l,error:u}=await r.auth.signInWithPassword({email:n,password:o});return[l,u]},async getSession(){const{data:n,error:o}=await r.auth.getSession();return n},async logout(){await r.auth.signOut()},eventListener(){r.auth.onAuthStateChange((n,o)=>{console.log(n,o)})}}),Rl=(r,n)=>{const{name:o,value:l}=r.target;n(u=>({...u,[o]:l}))};function M7({supabase:r}){const n=Ab(r),[o,l]=de.useState({}),u=Br(),f=async()=>{if(o.name&&o.password&&o.email){const[g,k]=await n.signupUser(o.email,o.password,o.name),{user:w,session:v}=g;w?(await r.from("users").insert({user_id:w.id,name:w.user_metadata.name}),alert("Signed up successfully"),u("/Book-Chronicles")):alert(k)}else alert("You need to fill in all the fields!")};return F.jsxs(F.Fragment,{children:[F.jsx("h1",{children:"Sign Up"}),F.jsxs("form",{onSubmit:g=>g.preventDefault(),children:[F.jsx("label",{htmlFor:"email"}),F.jsx("input",{onChange:g=>Rl(g,l),required:!0,placeholder:"Email",id:"email",name:"email",type:"email"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"password"}),F.jsx("input",{onChange:g=>Rl(g,l),required:!0,placeholder:"Password",id:"password",name:"password",type:"password"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"name"}),F.jsx("input",{onChange:g=>Rl(g,l),required:!0,placeholder:"Display Name",id:"name",name:"name",type:"text"}),F.jsx("div",{}),F.jsx("button",{onClick:f,type:"submit",className:"red-button",children:"Signup"}),F.jsx("div",{children:F.jsx(Mi,{to:"/Book-Chronicles/signin",children:"Have an account? Sign in!"})})]})]})}function N7({supabase:r}){const n=Ab(r),[o,l]=de.useState({}),u=Br(),f=async()=>{const[g,k]=await n.signIn(o.email,o.password),{user:w,session:v}=g;w||v?(alert("Logged in."),u("/Book-Chronicles")):alert(k)};return F.jsxs("div",{children:[F.jsx("h1",{children:"Sign In"}),F.jsxs("form",{onSubmit:g=>g.preventDefault(),children:[F.jsx("label",{htmlFor:"email"}),F.jsx("input",{onChange:g=>Rl(g,l),required:!0,placeholder:"Email",id:"email",name:"email",type:"email"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"password"}),F.jsx("input",{onChange:g=>Rl(g,l),required:!0,placeholder:"Password",id:"password",name:"password",type:"password"}),F.jsx("div",{}),F.jsx("button",{onClick:f,type:"submit",className:"red-button",children:"Signin"}),F.jsx("div",{children:F.jsx(Mi,{to:"/Book-Chronicles/signup",children:"Not a member? Signup!"})})]})]})}function O7({supabase:r}){const[n,o]=de.useState([]),l=async()=>{const{data:g,error:k}=await r.from("users").select().order("name");for(let w=0;w<g.length;w++){const v=g[w],_=await u(v);g[w].posts=_}o(g)},u=async g=>{const{data:k,error:w}=await r.from("posts").select().eq("user_id",g.user_id);return k};de.useEffect(()=>{l()},[]);const f=()=>n.map(g=>F.jsx("li",{children:F.jsxs(Mi,{to:`/Book-Chronicles/users/${g.user_id}`,children:[g.name," ~ ",g.posts.length]})},g.id));return F.jsxs("div",{children:[F.jsx("h1",{children:"Click on a user to see their posts!"}),f()]})}function B7({supabase:r,session:n}){const[o,l]=de.useState([]),f=(n?n.user:{user_metadata:{}}).id,{id:g}=pb(),k=async()=>{const{data:v,error:_}=await r.from("posts").select().order("created_at",{ascending:!1}).eq("user_id",g);l(v)};de.useEffect(()=>{k()},[]);const w=()=>o.length===0?F.jsx("h2",{children:"This user has not posted anything yet!"}):o.map(v=>{const _=v.user_likes[f];return F.jsx(KD,{id:v.id,title:v.title,created_at:v.created_at,vote:v.vote,category:v.category,username:v.username,img_url:v.img,content:v.content,currentUserLiked:_},v.id)});return F.jsx("div",{children:w()})}const P7="/Book-Chronicles/assets/arrow-up-0fb140ce.png",L7=()=>{const[r,n]=de.useState(!1);de.useEffect(()=>{const l=()=>{window.scrollY>200?n(!0):n(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return F.jsx("div",{children:F.jsx("img",{className:`back-to-top-button ${r?"show-back-to-top":""}`,onClick:o,src:P7})})};function z7({supabase:r,session:n}){const o=Ab(r),l=()=>{o.logout(),alert("Logged out.")};return F.jsxs("nav",{className:"navbar navbar-inverse navbar-expand-md navbar-light",children:[F.jsx(Mi,{to:"/Book-Chronicles",children:F.jsx("img",{className:"navbar-brand",width:"64",height:"64",src:"https://img.icons8.com/cute-clipart/64/book.png",alt:"book"})}),F.jsx("div",{className:"navbar-title-container d-flex align-items-center mx-auto",children:n?F.jsx("h3",{children:n.user.user_metadata.name+"'s Bookshelf"}):F.jsx("h3",{children:"Bookshelf Chronicles"})}),F.jsx("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:F.jsx("span",{className:"navbar-toggler-icon"})}),F.jsx("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:F.jsxs("div",{className:"navbar-nav",children:[F.jsxs(Mi,{to:"/Book-Chronicles",className:"nav-item nav-link",href:"#",children:["Home ",F.jsx("span",{className:"sr-only",children:"(current)"})]}),F.jsx(Mi,{to:"/Book-Chronicles/create",className:"nav-item nav-link",href:"#",children:"Create"}),F.jsx(Mi,{to:"/Book-Chronicles/getBookInfo",className:"nav-item nav-link",href:"#",children:"Get Book"}),F.jsx(Mi,{to:"/Book-Chronicles/userposts",className:"nav-item nav-link",href:"#",children:"User Posts"}),n?"":F.jsx(Mi,{to:"/Book-Chronicles/signin",className:"nav-item nav-link",href:"#",children:"Signin"}),n?F.jsx("a",{onClick:l,className:"nav-item nav-link",href:"#",children:"Logout"}):""]})}),F.jsx(L7,{})]})}const Xx=({session:r,children:n})=>r?n:(alert("You need to sign in to access this!"),F.jsx(p6,{to:"/Book-Chronicles/signin",replace:!0})),j7="modulepreload",R7=function(r){return"/Book-Chronicles/"+r},e2={},bd=function(n,o,l){if(!o||o.length===0)return n();const u=document.getElementsByTagName("link");return Promise.all(o.map(f=>{if(f=R7(f),f in e2)return;e2[f]=!0;const g=f.endsWith(".css"),k=g?'[rel="stylesheet"]':"";if(!!l)for(let _=u.length-1;_>=0;_--){const A=u[_];if(A.href===f&&(!g||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${k}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":j7,g||(v.as="script",v.crossOrigin=""),v.href=f,document.head.appendChild(v),g)return new Promise((_,A)=>{v.addEventListener("load",_),v.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>n()).catch(f=>{const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=f,window.dispatchEvent(g),!g.defaultPrevented)throw f})},F7=r=>{let n;return r?n=r:typeof fetch>"u"?n=(...o)=>bd(()=>Promise.resolve().then(()=>wd),void 0).then(({default:l})=>l(...o)):n=fetch,(...o)=>n(...o)};class Cb extends Error{constructor(n,o="FunctionsError",l){super(n),this.name=o,this.context=l}}class V7 extends Cb{constructor(n){super("Failed to send a request to the Edge Function","FunctionsFetchError",n)}}class U7 extends Cb{constructor(n){super("Relay Error invoking the Edge Function","FunctionsRelayError",n)}}class $7 extends Cb{constructor(n){super("Edge Function returned a non-2xx status code","FunctionsHttpError",n)}}var H7=globalThis&&globalThis.__awaiter||function(r,n,o,l){function u(f){return f instanceof o?f:new o(function(g){g(f)})}return new(o||(o=Promise))(function(f,g){function k(_){try{v(l.next(_))}catch(A){g(A)}}function w(_){try{v(l.throw(_))}catch(A){g(A)}}function v(_){_.done?f(_.value):u(_.value).then(k,w)}v((l=l.apply(r,n||[])).next())})};class W7{constructor(n,{headers:o={},customFetch:l}={}){this.url=n,this.headers=o,this.fetch=F7(l)}setAuth(n){this.headers.Authorization=`Bearer ${n}`}invoke(n,o={}){var l;return H7(this,void 0,void 0,function*(){try{const{headers:u,method:f,body:g}=o;let k={},w;g&&(u&&!Object.prototype.hasOwnProperty.call(u,"Content-Type")||!u)&&(typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(k["Content-Type"]="application/octet-stream",w=g):typeof g=="string"?(k["Content-Type"]="text/plain",w=g):typeof FormData<"u"&&g instanceof FormData?w=g:(k["Content-Type"]="application/json",w=JSON.stringify(g)));const v=yield this.fetch(`${this.url}/${n}`,{method:f||"POST",headers:Object.assign(Object.assign(Object.assign({},k),this.headers),u),body:w}).catch(S=>{throw new V7(S)}),_=v.headers.get("x-relay-error");if(_&&_==="true")throw new U7(v);if(!v.ok)throw new $7(v);let A=((l=v.headers.get("Content-Type"))!==null&&l!==void 0?l:"text/plain").split(";")[0].trim(),x;return A==="application/json"?x=yield v.json():A==="application/octet-stream"?x=yield v.blob():A==="multipart/form-data"?x=yield v.formData():x=yield v.text(),{data:x,error:null}}catch(u){return{data:null,error:u}}})}}var u0={exports:{}};(function(r,n){var o=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof ds<"u")return ds;throw new Error("unable to locate global object")},l=o();r.exports=n=l.fetch,l.fetch&&(n.default=l.fetch.bind(l)),n.Headers=l.Headers,n.Request=l.Request,n.Response=l.Response})(u0,u0.exports);var xb=u0.exports;const Eb=k2(xb),wd=m2({__proto__:null,default:Eb},[xb]);class q7{constructor(n){this.shouldThrowOnError=!1,this.method=n.method,this.url=n.url,this.headers=n.headers,this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=n.shouldThrowOnError,this.signal=n.signal,this.isMaybeSingle=n.isMaybeSingle,n.fetch?this.fetch=n.fetch:typeof fetch>"u"?this.fetch=Eb:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}then(n,o){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const l=this.fetch;let u=l(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async f=>{var g,k,w;let v=null,_=null,A=null,x=f.status,S=f.statusText;if(f.ok){if(this.method!=="HEAD"){const B=await f.text();B===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?_=B:_=JSON.parse(B))}const P=(g=this.headers.Prefer)===null||g===void 0?void 0:g.match(/count=(exact|planned|estimated)/),R=(k=f.headers.get("content-range"))===null||k===void 0?void 0:k.split("/");P&&R&&R.length>1&&(A=parseInt(R[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(_)&&(_.length>1?(v={code:"PGRST116",details:`Results contain ${_.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},_=null,A=null,x=406,S="Not Acceptable"):_.length===1?_=_[0]:_=null)}else{const P=await f.text();try{v=JSON.parse(P),Array.isArray(v)&&f.status===404&&(_=[],v=null,x=200,S="OK")}catch{f.status===404&&P===""?(x=204,S="No Content"):v={message:P}}if(v&&this.isMaybeSingle&&(!((w=v==null?void 0:v.details)===null||w===void 0)&&w.includes("0 rows"))&&(v=null,x=200,S="OK"),v&&this.shouldThrowOnError)throw v}return{error:v,data:_,count:A,status:x,statusText:S}});return this.shouldThrowOnError||(u=u.catch(f=>{var g,k,w;return{error:{message:`${(g=f==null?void 0:f.name)!==null&&g!==void 0?g:"FetchError"}: ${f==null?void 0:f.message}`,details:`${(k=f==null?void 0:f.stack)!==null&&k!==void 0?k:""}`,hint:"",code:`${(w=f==null?void 0:f.code)!==null&&w!==void 0?w:""}`},data:null,count:null,status:0,statusText:""}})),u.then(n,o)}}class G7 extends q7{select(n){let o=!1;const l=(n??"*").split("").map(u=>/\s/.test(u)&&!o?"":(u==='"'&&(o=!o),u)).join("");return this.url.searchParams.set("select",l),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(n,{ascending:o=!0,nullsFirst:l,foreignTable:u}={}){const f=u?`${u}.order`:"order",g=this.url.searchParams.get(f);return this.url.searchParams.set(f,`${g?`${g},`:""}${n}.${o?"asc":"desc"}${l===void 0?"":l?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:o}={}){const l=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(l,`${n}`),this}range(n,o,{foreignTable:l}={}){const u=typeof l>"u"?"offset":`${l}.offset`,f=typeof l>"u"?"limit":`${l}.limit`;return this.url.searchParams.set(u,`${n}`),this.url.searchParams.set(f,`${o-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:n=!1,verbose:o=!1,settings:l=!1,buffers:u=!1,wal:f=!1,format:g="text"}={}){const k=[n?"analyze":null,o?"verbose":null,l?"settings":null,u?"buffers":null,f?"wal":null].filter(Boolean).join("|"),w=this.headers.Accept;return this.headers.Accept=`application/vnd.pgrst.plan+${g}; for="${w}"; options=${k};`,g==="json"?this:this}rollback(){var n;return((n=this.headers.Prefer)!==null&&n!==void 0?n:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}class ka extends G7{eq(n,o){return this.url.searchParams.append(n,`eq.${o}`),this}neq(n,o){return this.url.searchParams.append(n,`neq.${o}`),this}gt(n,o){return this.url.searchParams.append(n,`gt.${o}`),this}gte(n,o){return this.url.searchParams.append(n,`gte.${o}`),this}lt(n,o){return this.url.searchParams.append(n,`lt.${o}`),this}lte(n,o){return this.url.searchParams.append(n,`lte.${o}`),this}like(n,o){return this.url.searchParams.append(n,`like.${o}`),this}likeAllOf(n,o){return this.url.searchParams.append(n,`like(all).{${o.join(",")}}`),this}likeAnyOf(n,o){return this.url.searchParams.append(n,`like(any).{${o.join(",")}}`),this}ilike(n,o){return this.url.searchParams.append(n,`ilike.${o}`),this}ilikeAllOf(n,o){return this.url.searchParams.append(n,`ilike(all).{${o.join(",")}}`),this}ilikeAnyOf(n,o){return this.url.searchParams.append(n,`ilike(any).{${o.join(",")}}`),this}is(n,o){return this.url.searchParams.append(n,`is.${o}`),this}in(n,o){const l=o.map(u=>typeof u=="string"&&new RegExp("[,()]").test(u)?`"${u}"`:`${u}`).join(",");return this.url.searchParams.append(n,`in.(${l})`),this}contains(n,o){return typeof o=="string"?this.url.searchParams.append(n,`cs.${o}`):Array.isArray(o)?this.url.searchParams.append(n,`cs.{${o.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(o)}`),this}containedBy(n,o){return typeof o=="string"?this.url.searchParams.append(n,`cd.${o}`):Array.isArray(o)?this.url.searchParams.append(n,`cd.{${o.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(o)}`),this}rangeGt(n,o){return this.url.searchParams.append(n,`sr.${o}`),this}rangeGte(n,o){return this.url.searchParams.append(n,`nxl.${o}`),this}rangeLt(n,o){return this.url.searchParams.append(n,`sl.${o}`),this}rangeLte(n,o){return this.url.searchParams.append(n,`nxr.${o}`),this}rangeAdjacent(n,o){return this.url.searchParams.append(n,`adj.${o}`),this}overlaps(n,o){return typeof o=="string"?this.url.searchParams.append(n,`ov.${o}`):this.url.searchParams.append(n,`ov.{${o.join(",")}}`),this}textSearch(n,o,{config:l,type:u}={}){let f="";u==="plain"?f="pl":u==="phrase"?f="ph":u==="websearch"&&(f="w");const g=l===void 0?"":`(${l})`;return this.url.searchParams.append(n,`${f}fts${g}.${o}`),this}match(n){return Object.entries(n).forEach(([o,l])=>{this.url.searchParams.append(o,`eq.${l}`)}),this}not(n,o,l){return this.url.searchParams.append(n,`not.${o}.${l}`),this}or(n,{foreignTable:o}={}){const l=o?`${o}.or`:"or";return this.url.searchParams.append(l,`(${n})`),this}filter(n,o,l){return this.url.searchParams.append(n,`${o}.${l}`),this}}class Y7{constructor(n,{headers:o={},schema:l,fetch:u}){this.url=n,this.headers=o,this.schema=l,this.fetch=u}select(n,{head:o=!1,count:l}={}){const u=o?"HEAD":"GET";let f=!1;const g=(n??"*").split("").map(k=>/\s/.test(k)&&!f?"":(k==='"'&&(f=!f),k)).join("");return this.url.searchParams.set("select",g),l&&(this.headers.Prefer=`count=${l}`),new ka({method:u,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(n,{count:o,defaultToNull:l=!0}={}){const u="POST",f=[];if(this.headers.Prefer&&f.push(this.headers.Prefer),o&&f.push(`count=${o}`),l||f.push("missing=default"),this.headers.Prefer=f.join(","),Array.isArray(n)){const g=n.reduce((k,w)=>k.concat(Object.keys(w)),[]);if(g.length>0){const k=[...new Set(g)].map(w=>`"${w}"`);this.url.searchParams.set("columns",k.join(","))}}return new ka({method:u,url:this.url,headers:this.headers,schema:this.schema,body:n,fetch:this.fetch,allowEmpty:!1})}upsert(n,{onConflict:o,ignoreDuplicates:l=!1,count:u,defaultToNull:f=!0}={}){const g="POST",k=[`resolution=${l?"ignore":"merge"}-duplicates`];if(o!==void 0&&this.url.searchParams.set("on_conflict",o),this.headers.Prefer&&k.push(this.headers.Prefer),u&&k.push(`count=${u}`),f||k.push("missing=default"),this.headers.Prefer=k.join(","),Array.isArray(n)){const w=n.reduce((v,_)=>v.concat(Object.keys(_)),[]);if(w.length>0){const v=[...new Set(w)].map(_=>`"${_}"`);this.url.searchParams.set("columns",v.join(","))}}return new ka({method:g,url:this.url,headers:this.headers,schema:this.schema,body:n,fetch:this.fetch,allowEmpty:!1})}update(n,{count:o}={}){const l="PATCH",u=[];return this.headers.Prefer&&u.push(this.headers.Prefer),o&&u.push(`count=${o}`),this.headers.Prefer=u.join(","),new ka({method:l,url:this.url,headers:this.headers,schema:this.schema,body:n,fetch:this.fetch,allowEmpty:!1})}delete({count:n}={}){const o="DELETE",l=[];return n&&l.push(`count=${n}`),this.headers.Prefer&&l.unshift(this.headers.Prefer),this.headers.Prefer=l.join(","),new ka({method:o,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}const Z7="1.8.5",K7={"X-Client-Info":`postgrest-js/${Z7}`};class Db{constructor(n,{headers:o={},schema:l,fetch:u}={}){this.url=n,this.headers=Object.assign(Object.assign({},K7),o),this.schemaName=l,this.fetch=u}from(n){const o=new URL(`${this.url}/${n}`);return new Y7(o,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(n){return new Db(this.url,{headers:this.headers,schema:n,fetch:this.fetch})}rpc(n,o={},{head:l=!1,count:u}={}){let f;const g=new URL(`${this.url}/rpc/${n}`);let k;l?(f="HEAD",Object.entries(o).forEach(([v,_])=>{g.searchParams.append(v,`${_}`)})):(f="POST",k=o);const w=Object.assign({},this.headers);return u&&(w.Prefer=`count=${u}`),new ka({method:f,url:g,headers:w,schema:this.schemaName,body:k,fetch:this.fetch,allowEmpty:!1})}}var Qm,t2;function Q7(){if(t2)return Qm;t2=1;var r=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};return Qm=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}(),Qm}const J7="websocket",X7="Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",eR=["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],tR="Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",nR=["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],iR="1.0.34",rR={type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},oR="https://github.com/theturtle32/WebSocket-Node",sR={node:">=4.0.0"},aR={bufferutil:"^4.0.1",debug:"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2",yaeti:"^0.0.6"},cR={"buffer-equal":"^1.0.0",gulp:"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.9.1"},lR={verbose:!1},dR={test:"tape test/unit/*.js",gulp:"gulp"},uR="index",hR={lib:"./lib"},fR="lib/browser.js",gR="Apache-2.0",pR={name:J7,description:X7,keywords:eR,author:tR,contributors:nR,version:iR,repository:rR,homepage:oR,engines:sR,dependencies:aR,devDependencies:cR,config:lR,scripts:dR,main:uR,directories:hR,browser:fR,license:gR};var mR=pR.version,cs;if(typeof globalThis=="object")cs=globalThis;else try{cs=Q7()}catch{}finally{if(!cs&&typeof window<"u"&&(cs=window),!cs)throw new Error("Could not determine global this")}var ad=cs.WebSocket||cs.MozWebSocket,kR=mR;function eS(r,n){var o;return n?o=new ad(r,n):o=new ad(r),o}ad&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(r){Object.defineProperty(eS,r,{get:function(){return ad[r]}})});var bR={w3cwebsocket:ad?eS:null,version:kR};const wR="2.8.4",_R={"X-Client-Info":`realtime-js/${wR}`},vR="1.0.0",tS=1e4,yR=1e3;var Fl;(function(r){r[r.connecting=0]="connecting",r[r.open=1]="open",r[r.closing=2]="closing",r[r.closed=3]="closed"})(Fl||(Fl={}));var Hn;(function(r){r.closed="closed",r.errored="errored",r.joined="joined",r.joining="joining",r.leaving="leaving"})(Hn||(Hn={}));var Ti;(function(r){r.close="phx_close",r.error="phx_error",r.join="phx_join",r.reply="phx_reply",r.leave="phx_leave",r.access_token="access_token"})(Ti||(Ti={}));var h0;(function(r){r.websocket="websocket"})(h0||(h0={}));var ls;(function(r){r.Connecting="connecting",r.Open="open",r.Closing="closing",r.Closed="closed"})(ls||(ls={}));class nS{constructor(n,o){this.callback=n,this.timerCalc=o,this.timer=void 0,this.tries=0,this.callback=n,this.timerCalc=o}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}class AR{constructor(){this.HEADER_LENGTH=1}decode(n,o){return n.constructor===ArrayBuffer?o(this._binaryDecode(n)):o(typeof n=="string"?JSON.parse(n):{})}_binaryDecode(n){const o=new DataView(n),l=new TextDecoder;return this._decodeBroadcast(n,o,l)}_decodeBroadcast(n,o,l){const u=o.getUint8(1),f=o.getUint8(2);let g=this.HEADER_LENGTH+2;const k=l.decode(n.slice(g,g+u));g=g+u;const w=l.decode(n.slice(g,g+f));g=g+f;const v=JSON.parse(l.decode(n.slice(g,n.byteLength)));return{ref:null,topic:k,event:w,payload:v}}}class Jm{constructor(n,o,l={},u=tS){this.channel=n,this.event=o,this.payload=l,this.timeout=u,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(n){this.timeout=n,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(n){this.payload=Object.assign(Object.assign({},this.payload),n)}receive(n,o){var l;return this._hasReceived(n)&&o((l=this.receivedResp)===null||l===void 0?void 0:l.response),this.recHooks.push({status:n,callback:o}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const n=o=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=o,this._matchReceive(o)};this.channel._on(this.refEvent,{},n),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(n,o){this.refEvent&&this.channel._trigger(this.refEvent,{status:n,response:o})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:n,response:o}){this.recHooks.filter(l=>l.status===n).forEach(l=>l.callback(o))}_hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}}var n2;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(n2||(n2={}));class Vl{constructor(n,o){this.channel=n,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const l=(o==null?void 0:o.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(l.state,{},u=>{const{onJoin:f,onLeave:g,onSync:k}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Vl.syncState(this.state,u,f,g),this.pendingDiffs.forEach(w=>{this.state=Vl.syncDiff(this.state,w,f,g)}),this.pendingDiffs=[],k()}),this.channel._on(l.diff,{},u=>{const{onJoin:f,onLeave:g,onSync:k}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(u):(this.state=Vl.syncDiff(this.state,u,f,g),k())}),this.onJoin((u,f,g)=>{this.channel._trigger("presence",{event:"join",key:u,currentPresences:f,newPresences:g})}),this.onLeave((u,f,g)=>{this.channel._trigger("presence",{event:"leave",key:u,currentPresences:f,leftPresences:g})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(n,o,l,u){const f=this.cloneDeep(n),g=this.transformState(o),k={},w={};return this.map(f,(v,_)=>{g[v]||(w[v]=_)}),this.map(g,(v,_)=>{const A=f[v];if(A){const x=_.map(R=>R.presence_ref),S=A.map(R=>R.presence_ref),N=_.filter(R=>S.indexOf(R.presence_ref)<0),P=A.filter(R=>x.indexOf(R.presence_ref)<0);N.length>0&&(k[v]=N),P.length>0&&(w[v]=P)}else k[v]=_}),this.syncDiff(f,{joins:k,leaves:w},l,u)}static syncDiff(n,o,l,u){const{joins:f,leaves:g}={joins:this.transformState(o.joins),leaves:this.transformState(o.leaves)};return l||(l=()=>{}),u||(u=()=>{}),this.map(f,(k,w)=>{var v;const _=(v=n[k])!==null&&v!==void 0?v:[];if(n[k]=this.cloneDeep(w),_.length>0){const A=n[k].map(S=>S.presence_ref),x=_.filter(S=>A.indexOf(S.presence_ref)<0);n[k].unshift(...x)}l(k,_,w)}),this.map(g,(k,w)=>{let v=n[k];if(!v)return;const _=w.map(A=>A.presence_ref);v=v.filter(A=>_.indexOf(A.presence_ref)<0),n[k]=v,u(k,v,w),v.length===0&&delete n[k]}),n}static map(n,o){return Object.getOwnPropertyNames(n).map(l=>o(l,n[l]))}static transformState(n){return n=this.cloneDeep(n),Object.getOwnPropertyNames(n).reduce((o,l)=>{const u=n[l];return"metas"in u?o[l]=u.metas.map(f=>(f.presence_ref=f.phx_ref,delete f.phx_ref,delete f.phx_ref_prev,f)):o[l]=u,o},{})}static cloneDeep(n){return JSON.parse(JSON.stringify(n))}onJoin(n){this.caller.onJoin=n}onLeave(n){this.caller.onLeave=n}onSync(n){this.caller.onSync=n}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var at;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(at||(at={}));const i2=(r,n,o={})=>{var l;const u=(l=o.skipTypes)!==null&&l!==void 0?l:[];return Object.keys(n).reduce((f,g)=>(f[g]=CR(g,r,n,u),f),{})},CR=(r,n,o,l)=>{const u=n.find(k=>k.name===r),f=u==null?void 0:u.type,g=o[r];return f&&!l.includes(f)?iS(f,g):f0(g)},iS=(r,n)=>{if(r.charAt(0)==="_"){const o=r.slice(1,r.length);return SR(n,o)}switch(r){case at.bool:return xR(n);case at.float4:case at.float8:case at.int2:case at.int4:case at.int8:case at.numeric:case at.oid:return ER(n);case at.json:case at.jsonb:return DR(n);case at.timestamp:return TR(n);case at.abstime:case at.date:case at.daterange:case at.int4range:case at.int8range:case at.money:case at.reltime:case at.text:case at.time:case at.timestamptz:case at.timetz:case at.tsrange:case at.tstzrange:return f0(n);default:return f0(n)}},f0=r=>r,xR=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},ER=r=>{if(typeof r=="string"){const n=parseFloat(r);if(!Number.isNaN(n))return n}return r},DR=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch(n){return console.log(`JSON parse error: ${n}`),r}return r},SR=(r,n)=>{if(typeof r!="string")return r;const o=r.length-1,l=r[o];if(r[0]==="{"&&l==="}"){let f;const g=r.slice(1,o);try{f=JSON.parse("["+g+"]")}catch{f=g?g.split(","):[]}return f.map(k=>iS(n,k))}return r},TR=r=>typeof r=="string"?r.replace(" ","T"):r;var r2;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(r2||(r2={}));var o2;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes"})(o2||(o2={}));var s2;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(s2||(s2={}));class Sb{constructor(n,o={config:{}},l){this.topic=n,this.params=o,this.socket=l,this.bindings={},this.state=Hn.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=n.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},o.config),this.timeout=this.socket.timeout,this.joinPush=new Jm(this,Ti.join,this.params,this.timeout),this.rejoinTimer=new nS(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Hn.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(u=>u.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Hn.closed,this.socket._remove(this)}),this._onError(u=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,u),this.state=Hn.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Hn.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Ti.reply,{},(u,f)=>{this._trigger(this._replyEventName(f),u)}),this.presence=new Vl(this),this.broadcastEndpointURL=this._broadcastEndpointURL()}subscribe(n,o=this.timeout){var l,u;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:f,presence:g}}=this.params;this._onError(v=>n&&n("CHANNEL_ERROR",v)),this._onClose(()=>n&&n("CLOSED"));const k={},w={broadcast:f,presence:g,postgres_changes:(u=(l=this.bindings.postgres_changes)===null||l===void 0?void 0:l.map(v=>v.filter))!==null&&u!==void 0?u:[]};this.socket.accessToken&&(k.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:w},k)),this.joinedOnce=!0,this._rejoin(o),this.joinPush.receive("ok",({postgres_changes:v})=>{var _;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),v===void 0){n&&n("SUBSCRIBED");return}else{const A=this.bindings.postgres_changes,x=(_=A==null?void 0:A.length)!==null&&_!==void 0?_:0,S=[];for(let N=0;N<x;N++){const P=A[N],{filter:{event:R,schema:B,table:L,filter:D}}=P,W=v&&v[N];if(W&&W.event===R&&W.schema===B&&W.table===L&&W.filter===D)S.push(Object.assign(Object.assign({},P),{id:W.id}));else{this.unsubscribe(),n&&n("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=S,n&&n("SUBSCRIBED");return}}).receive("error",v=>{n&&n("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(v).join(", ")||"error")))}).receive("timeout",()=>{n&&n("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(n,o={}){return await this.send({type:"presence",event:"track",payload:n},o.timeout||this.timeout)}async untrack(n={}){return await this.send({type:"presence",event:"untrack"},n)}on(n,o,l){return this._on(n,o,l)}async send(n,o={}){var l,u;if(!this._canPush()&&n.type==="broadcast"){const{event:f,payload:g}=n,k={method:"POST",headers:{apikey:(l=this.socket.accessToken)!==null&&l!==void 0?l:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:f,payload:g}]})};try{return(await this._fetchWithTimeout(this.broadcastEndpointURL,k,(u=o.timeout)!==null&&u!==void 0?u:this.timeout)).ok?"ok":"error"}catch(w){return w.name==="AbortError"?"timed out":"error"}}else return new Promise(f=>{var g,k,w;const v=this._push(n.type,n,o.timeout||this.timeout);n.type==="broadcast"&&!(!((w=(k=(g=this.params)===null||g===void 0?void 0:g.config)===null||k===void 0?void 0:k.broadcast)===null||w===void 0)&&w.ack)&&f("ok"),v.receive("ok",()=>f("ok")),v.receive("timeout",()=>f("timed out"))})}updateJoinPayload(n){this.joinPush.updatePayload(n)}unsubscribe(n=this.timeout){this.state=Hn.leaving;const o=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Ti.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(l=>{const u=new Jm(this,Ti.leave,{},n);u.receive("ok",()=>{o(),l("ok")}).receive("timeout",()=>{o(),l("timed out")}).receive("error",()=>{l("error")}),u.send(),this._canPush()||u.trigger("ok",{})})}_broadcastEndpointURL(){let n=this.socket.endPoint;return n=n.replace(/^ws/i,"http"),n=n.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),n.replace(/\/+$/,"")+"/api/broadcast"}async _fetchWithTimeout(n,o,l){const u=new AbortController,f=setTimeout(()=>u.abort(),l),g=await this.socket.fetch(n,Object.assign(Object.assign({},o),{signal:u.signal}));return clearTimeout(f),g}_push(n,o,l=this.timeout){if(!this.joinedOnce)throw`tried to push '${n}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let u=new Jm(this,n,o,l);return this._canPush()?u.send():(u.startTimeout(),this.pushBuffer.push(u)),u}_onMessage(n,o,l){return o}_isMember(n){return this.topic===n}_joinRef(){return this.joinPush.ref}_trigger(n,o,l){var u,f;const g=n.toLocaleLowerCase(),{close:k,error:w,leave:v,join:_}=Ti;if(l&&[k,w,v,_].indexOf(g)>=0&&l!==this._joinRef())return;let x=this._onMessage(g,o,l);if(o&&!x)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(g)?(u=this.bindings.postgres_changes)===null||u===void 0||u.filter(S=>{var N,P,R;return((N=S.filter)===null||N===void 0?void 0:N.event)==="*"||((R=(P=S.filter)===null||P===void 0?void 0:P.event)===null||R===void 0?void 0:R.toLocaleLowerCase())===g}).map(S=>S.callback(x,l)):(f=this.bindings[g])===null||f===void 0||f.filter(S=>{var N,P,R,B,L,D;if(["broadcast","presence","postgres_changes"].includes(g))if("id"in S){const W=S.id,K=(N=S.filter)===null||N===void 0?void 0:N.event;return W&&((P=o.ids)===null||P===void 0?void 0:P.includes(W))&&(K==="*"||(K==null?void 0:K.toLocaleLowerCase())===((R=o.data)===null||R===void 0?void 0:R.type.toLocaleLowerCase()))}else{const W=(L=(B=S==null?void 0:S.filter)===null||B===void 0?void 0:B.event)===null||L===void 0?void 0:L.toLocaleLowerCase();return W==="*"||W===((D=o==null?void 0:o.event)===null||D===void 0?void 0:D.toLocaleLowerCase())}else return S.type.toLocaleLowerCase()===g}).map(S=>{if(typeof x=="object"&&"ids"in x){const N=x.data,{schema:P,table:R,commit_timestamp:B,type:L,errors:D}=N;x=Object.assign(Object.assign({},{schema:P,table:R,commit_timestamp:B,eventType:L,new:{},old:{},errors:D}),this._getPayloadRecords(N))}S.callback(x,l)})}_isClosed(){return this.state===Hn.closed}_isJoined(){return this.state===Hn.joined}_isJoining(){return this.state===Hn.joining}_isLeaving(){return this.state===Hn.leaving}_replyEventName(n){return`chan_reply_${n}`}_on(n,o,l){const u=n.toLocaleLowerCase(),f={type:u,filter:o,callback:l};return this.bindings[u]?this.bindings[u].push(f):this.bindings[u]=[f],this}_off(n,o){const l=n.toLocaleLowerCase();return this.bindings[l]=this.bindings[l].filter(u=>{var f;return!(((f=u.type)===null||f===void 0?void 0:f.toLocaleLowerCase())===l&&Sb.isEqual(u.filter,o))}),this}static isEqual(n,o){if(Object.keys(n).length!==Object.keys(o).length)return!1;for(const l in n)if(n[l]!==o[l])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(n){this._on(Ti.close,{},n)}_onError(n){this._on(Ti.error,{},o=>n(o))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(n=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Hn.joining,this.joinPush.resend(n))}_getPayloadRecords(n){const o={new:{},old:{}};return(n.type==="INSERT"||n.type==="UPDATE")&&(o.new=i2(n.columns,n.record)),(n.type==="UPDATE"||n.type==="DELETE")&&(o.old=i2(n.columns,n.old_record)),o}}const IR=()=>{};class MR{constructor(n,o){var l;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=_R,this.params={},this.timeout=tS,this.transport=bR.w3cwebsocket,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=IR,this.conn=null,this.sendBuffer=[],this.serializer=new AR,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=f=>{let g;return f?g=f:typeof fetch>"u"?g=(...k)=>bd(()=>Promise.resolve().then(()=>wd),void 0).then(({default:w})=>w(...k)):g=fetch,(...k)=>g(...k)},this.endPoint=`${n}/${h0.websocket}`,o!=null&&o.params&&(this.params=o.params),o!=null&&o.headers&&(this.headers=Object.assign(Object.assign({},this.headers),o.headers)),o!=null&&o.timeout&&(this.timeout=o.timeout),o!=null&&o.logger&&(this.logger=o.logger),o!=null&&o.transport&&(this.transport=o.transport),o!=null&&o.heartbeatIntervalMs&&(this.heartbeatIntervalMs=o.heartbeatIntervalMs);const u=(l=o==null?void 0:o.params)===null||l===void 0?void 0:l.apikey;u&&(this.accessToken=u),this.reconnectAfterMs=o!=null&&o.reconnectAfterMs?o.reconnectAfterMs:f=>[1e3,2e3,5e3,1e4][f-1]||1e4,this.encode=o!=null&&o.encode?o.encode:(f,g)=>g(JSON.stringify(f)),this.decode=o!=null&&o.decode?o.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new nS(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(o==null?void 0:o.fetch)}connect(){this.conn||(this.conn=new this.transport(this._endPointURL(),[],null,this.headers),this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=n=>this._onConnError(n),this.conn.onmessage=n=>this._onConnMessage(n),this.conn.onclose=n=>this._onConnClose(n)))}disconnect(n,o){this.conn&&(this.conn.onclose=function(){},n?this.conn.close(n,o??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(n){const o=await n.unsubscribe();return this.channels.length===0&&this.disconnect(),o}async removeAllChannels(){const n=await Promise.all(this.channels.map(o=>o.unsubscribe()));return this.disconnect(),n}log(n,o,l){this.logger(n,o,l)}connectionState(){switch(this.conn&&this.conn.readyState){case Fl.connecting:return ls.Connecting;case Fl.open:return ls.Open;case Fl.closing:return ls.Closing;default:return ls.Closed}}isConnected(){return this.connectionState()===ls.Open}channel(n,o={config:{}}){const l=new Sb(`realtime:${n}`,o,this);return this.channels.push(l),l}push(n){const{topic:o,event:l,payload:u,ref:f}=n,g=()=>{this.encode(n,k=>{var w;(w=this.conn)===null||w===void 0||w.send(k)})};this.log("push",`${o} ${l} (${f})`,u),this.isConnected()?g():this.sendBuffer.push(g)}setAuth(n){this.accessToken=n,this.channels.forEach(o=>{n&&o.updateJoinPayload({access_token:n}),o.joinedOnce&&o._isJoined()&&o._push(Ti.access_token,{access_token:n})})}_makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}_leaveOpenTopic(n){let o=this.channels.find(l=>l.topic===n&&(l._isJoined()||l._isJoining()));o&&(this.log("transport",`leaving duplicate topic "${n}"`),o.unsubscribe())}_remove(n){this.channels=this.channels.filter(o=>o._joinRef()!==n._joinRef())}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:vR}))}_onConnMessage(n){this.decode(n.data,o=>{let{topic:l,event:u,payload:f,ref:g}=o;(g&&g===this.pendingHeartbeatRef||u===(f==null?void 0:f.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${f.status||""} ${l} ${u} ${g&&"("+g+")"||""}`,f),this.channels.filter(k=>k._isMember(l)).forEach(k=>k._trigger(u,f,g)),this.stateChangeCallbacks.message.forEach(k=>k(o))})}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach(n=>n())}_onConnClose(n){this.log("transport","close",n),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(o=>o(n))}_onConnError(n){this.log("transport",n.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(o=>o(n))}_triggerChanError(){this.channels.forEach(n=>n._trigger(Ti.error))}_appendParams(n,o){if(Object.keys(o).length===0)return n;const l=n.match(/\?/)?"&":"?",u=new URLSearchParams(o);return`${n}${l}${u}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}_sendHeartbeat(){var n;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(n=this.conn)===null||n===void 0||n.close(yR,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}}class Tb extends Error{constructor(n){super(n),this.__isStorageError=!0,this.name="StorageError"}}function cn(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}class NR extends Tb{constructor(n,o){super(n),this.name="StorageApiError",this.status=o}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class a2 extends Tb{constructor(n,o){super(n),this.name="StorageUnknownError",this.originalError=o}}var OR=globalThis&&globalThis.__awaiter||function(r,n,o,l){function u(f){return f instanceof o?f:new o(function(g){g(f)})}return new(o||(o=Promise))(function(f,g){function k(_){try{v(l.next(_))}catch(A){g(A)}}function w(_){try{v(l.throw(_))}catch(A){g(A)}}function v(_){_.done?f(_.value):u(_.value).then(k,w)}v((l=l.apply(r,n||[])).next())})};const rS=r=>{let n;return r?n=r:typeof fetch>"u"?n=(...o)=>bd(()=>Promise.resolve().then(()=>wd),void 0).then(({default:l})=>l(...o)):n=fetch,(...o)=>n(...o)},BR=()=>OR(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield bd(()=>Promise.resolve().then(()=>wd),void 0)).Response:Response});var ic=globalThis&&globalThis.__awaiter||function(r,n,o,l){function u(f){return f instanceof o?f:new o(function(g){g(f)})}return new(o||(o=Promise))(function(f,g){function k(_){try{v(l.next(_))}catch(A){g(A)}}function w(_){try{v(l.throw(_))}catch(A){g(A)}}function v(_){_.done?f(_.value):u(_.value).then(k,w)}v((l=l.apply(r,n||[])).next())})};const Xm=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),PR=(r,n)=>ic(void 0,void 0,void 0,function*(){const o=yield BR();r instanceof o?r.json().then(l=>{n(new NR(Xm(l),r.status||500))}).catch(l=>{n(new a2(Xm(l),l))}):n(new a2(Xm(r),r))}),LR=(r,n,o,l)=>{const u={method:r,headers:(n==null?void 0:n.headers)||{}};return r==="GET"?u:(u.headers=Object.assign({"Content-Type":"application/json"},n==null?void 0:n.headers),u.body=JSON.stringify(l),Object.assign(Object.assign({},u),o))};function Wf(r,n,o,l,u,f){return ic(this,void 0,void 0,function*(){return new Promise((g,k)=>{r(o,LR(n,l,u,f)).then(w=>{if(!w.ok)throw w;return l!=null&&l.noResolveJson?w:w.json()}).then(w=>g(w)).catch(w=>PR(w,k))})})}function g0(r,n,o,l){return ic(this,void 0,void 0,function*(){return Wf(r,"GET",n,o,l)})}function so(r,n,o,l,u){return ic(this,void 0,void 0,function*(){return Wf(r,"POST",n,l,u,o)})}function zR(r,n,o,l,u){return ic(this,void 0,void 0,function*(){return Wf(r,"PUT",n,l,u,o)})}function oS(r,n,o,l,u){return ic(this,void 0,void 0,function*(){return Wf(r,"DELETE",n,l,u,o)})}var si=globalThis&&globalThis.__awaiter||function(r,n,o,l){function u(f){return f instanceof o?f:new o(function(g){g(f)})}return new(o||(o=Promise))(function(f,g){function k(_){try{v(l.next(_))}catch(A){g(A)}}function w(_){try{v(l.throw(_))}catch(A){g(A)}}function v(_){_.done?f(_.value):u(_.value).then(k,w)}v((l=l.apply(r,n||[])).next())})};const jR={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},c2={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class RR{constructor(n,o={},l,u){this.url=n,this.headers=o,this.bucketId=l,this.fetch=rS(u)}uploadOrUpdate(n,o,l,u){return si(this,void 0,void 0,function*(){try{let f;const g=Object.assign(Object.assign({},c2),u),k=Object.assign(Object.assign({},this.headers),n==="POST"&&{"x-upsert":String(g.upsert)});typeof Blob<"u"&&l instanceof Blob?(f=new FormData,f.append("cacheControl",g.cacheControl),f.append("",l)):typeof FormData<"u"&&l instanceof FormData?(f=l,f.append("cacheControl",g.cacheControl)):(f=l,k["cache-control"]=`max-age=${g.cacheControl}`,k["content-type"]=g.contentType);const w=this._removeEmptyFolders(o),v=this._getFinalPath(w),_=yield this.fetch(`${this.url}/object/${v}`,Object.assign({method:n,body:f,headers:k},g!=null&&g.duplex?{duplex:g.duplex}:{}));return _.ok?{data:{path:w},error:null}:{data:null,error:yield _.json()}}catch(f){if(cn(f))return{data:null,error:f};throw f}})}upload(n,o,l){return si(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",n,o,l)})}uploadToSignedUrl(n,o,l,u){return si(this,void 0,void 0,function*(){const f=this._removeEmptyFolders(n),g=this._getFinalPath(f),k=new URL(this.url+`/object/upload/sign/${g}`);k.searchParams.set("token",o);try{let w;const v=Object.assign({upsert:c2.upsert},u),_=Object.assign(Object.assign({},this.headers),{"x-upsert":String(v.upsert)});typeof Blob<"u"&&l instanceof Blob?(w=new FormData,w.append("cacheControl",v.cacheControl),w.append("",l)):typeof FormData<"u"&&l instanceof FormData?(w=l,w.append("cacheControl",v.cacheControl)):(w=l,_["cache-control"]=`max-age=${v.cacheControl}`,_["content-type"]=v.contentType);const A=yield this.fetch(k.toString(),{method:"PUT",body:w,headers:_});return A.ok?{data:{path:f},error:null}:{data:null,error:yield A.json()}}catch(w){if(cn(w))return{data:null,error:w};throw w}})}createSignedUploadUrl(n){return si(this,void 0,void 0,function*(){try{let o=this._getFinalPath(n);const l=yield so(this.fetch,`${this.url}/object/upload/sign/${o}`,{},{headers:this.headers}),u=new URL(this.url+l.url),f=u.searchParams.get("token");if(!f)throw new Tb("No token returned by API");return{data:{signedUrl:u.toString(),path:n,token:f},error:null}}catch(o){if(cn(o))return{data:null,error:o};throw o}})}update(n,o,l){return si(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",n,o,l)})}move(n,o){return si(this,void 0,void 0,function*(){try{return{data:yield so(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:n,destinationKey:o},{headers:this.headers}),error:null}}catch(l){if(cn(l))return{data:null,error:l};throw l}})}copy(n,o){return si(this,void 0,void 0,function*(){try{return{data:{path:(yield so(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:n,destinationKey:o},{headers:this.headers})).Key},error:null}}catch(l){if(cn(l))return{data:null,error:l};throw l}})}createSignedUrl(n,o,l){return si(this,void 0,void 0,function*(){try{let u=this._getFinalPath(n),f=yield so(this.fetch,`${this.url}/object/sign/${u}`,Object.assign({expiresIn:o},l!=null&&l.transform?{transform:l.transform}:{}),{headers:this.headers});const g=l!=null&&l.download?`&download=${l.download===!0?"":l.download}`:"";return f={signedUrl:encodeURI(`${this.url}${f.signedURL}${g}`)},{data:f,error:null}}catch(u){if(cn(u))return{data:null,error:u};throw u}})}createSignedUrls(n,o,l){return si(this,void 0,void 0,function*(){try{const u=yield so(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:o,paths:n},{headers:this.headers}),f=l!=null&&l.download?`&download=${l.download===!0?"":l.download}`:"";return{data:u.map(g=>Object.assign(Object.assign({},g),{signedUrl:g.signedURL?encodeURI(`${this.url}${g.signedURL}${f}`):null})),error:null}}catch(u){if(cn(u))return{data:null,error:u};throw u}})}download(n,o){return si(this,void 0,void 0,function*(){const u=typeof(o==null?void 0:o.transform)<"u"?"render/image/authenticated":"object",f=this.transformOptsToQueryString((o==null?void 0:o.transform)||{}),g=f?`?${f}`:"";try{const k=this._getFinalPath(n);return{data:yield(yield g0(this.fetch,`${this.url}/${u}/${k}${g}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(k){if(cn(k))return{data:null,error:k};throw k}})}getPublicUrl(n,o){const l=this._getFinalPath(n),u=[],f=o!=null&&o.download?`download=${o.download===!0?"":o.download}`:"";f!==""&&u.push(f);const k=typeof(o==null?void 0:o.transform)<"u"?"render/image":"object",w=this.transformOptsToQueryString((o==null?void 0:o.transform)||{});w!==""&&u.push(w);let v=u.join("&");return v!==""&&(v=`?${v}`),{data:{publicUrl:encodeURI(`${this.url}/${k}/public/${l}${v}`)}}}remove(n){return si(this,void 0,void 0,function*(){try{return{data:yield oS(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:n},{headers:this.headers}),error:null}}catch(o){if(cn(o))return{data:null,error:o};throw o}})}list(n,o,l){return si(this,void 0,void 0,function*(){try{const u=Object.assign(Object.assign(Object.assign({},jR),o),{prefix:n||""});return{data:yield so(this.fetch,`${this.url}/object/list/${this.bucketId}`,u,{headers:this.headers},l),error:null}}catch(u){if(cn(u))return{data:null,error:u};throw u}})}_getFinalPath(n){return`${this.bucketId}/${n}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(n){const o=[];return n.width&&o.push(`width=${n.width}`),n.height&&o.push(`height=${n.height}`),n.resize&&o.push(`resize=${n.resize}`),n.format&&o.push(`format=${n.format}`),n.quality&&o.push(`quality=${n.quality}`),o.join("&")}}const FR="2.5.4",VR={"X-Client-Info":`storage-js/${FR}`};var fa=globalThis&&globalThis.__awaiter||function(r,n,o,l){function u(f){return f instanceof o?f:new o(function(g){g(f)})}return new(o||(o=Promise))(function(f,g){function k(_){try{v(l.next(_))}catch(A){g(A)}}function w(_){try{v(l.throw(_))}catch(A){g(A)}}function v(_){_.done?f(_.value):u(_.value).then(k,w)}v((l=l.apply(r,n||[])).next())})};class UR{constructor(n,o={},l){this.url=n,this.headers=Object.assign(Object.assign({},VR),o),this.fetch=rS(l)}listBuckets(){return fa(this,void 0,void 0,function*(){try{return{data:yield g0(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(n){if(cn(n))return{data:null,error:n};throw n}})}getBucket(n){return fa(this,void 0,void 0,function*(){try{return{data:yield g0(this.fetch,`${this.url}/bucket/${n}`,{headers:this.headers}),error:null}}catch(o){if(cn(o))return{data:null,error:o};throw o}})}createBucket(n,o={public:!1}){return fa(this,void 0,void 0,function*(){try{return{data:yield so(this.fetch,`${this.url}/bucket`,{id:n,name:n,public:o.public,file_size_limit:o.fileSizeLimit,allowed_mime_types:o.allowedMimeTypes},{headers:this.headers}),error:null}}catch(l){if(cn(l))return{data:null,error:l};throw l}})}updateBucket(n,o){return fa(this,void 0,void 0,function*(){try{return{data:yield zR(this.fetch,`${this.url}/bucket/${n}`,{id:n,name:n,public:o.public,file_size_limit:o.fileSizeLimit,allowed_mime_types:o.allowedMimeTypes},{headers:this.headers}),error:null}}catch(l){if(cn(l))return{data:null,error:l};throw l}})}emptyBucket(n){return fa(this,void 0,void 0,function*(){try{return{data:yield so(this.fetch,`${this.url}/bucket/${n}/empty`,{},{headers:this.headers}),error:null}}catch(o){if(cn(o))return{data:null,error:o};throw o}})}deleteBucket(n){return fa(this,void 0,void 0,function*(){try{return{data:yield oS(this.fetch,`${this.url}/bucket/${n}`,{},{headers:this.headers}),error:null}}catch(o){if(cn(o))return{data:null,error:o};throw o}})}}class $R extends UR{constructor(n,o={},l){super(n,o,l)}from(n){return new RR(this.url,this.headers,n,this.fetch)}}const HR="2.38.4";let El="";typeof Deno<"u"?El="deno":typeof document<"u"?El="web":typeof navigator<"u"&&navigator.product==="ReactNative"?El="react-native":El="node";const WR={"X-Client-Info":`supabase-js-${El}/${HR}`};var qR=globalThis&&globalThis.__awaiter||function(r,n,o,l){function u(f){return f instanceof o?f:new o(function(g){g(f)})}return new(o||(o=Promise))(function(f,g){function k(_){try{v(l.next(_))}catch(A){g(A)}}function w(_){try{v(l.throw(_))}catch(A){g(A)}}function v(_){_.done?f(_.value):u(_.value).then(k,w)}v((l=l.apply(r,n||[])).next())})};const GR=r=>{let n;return r?n=r:typeof fetch>"u"?n=Eb:n=fetch,(...o)=>n(...o)},YR=()=>typeof Headers>"u"?xb.Headers:Headers,ZR=(r,n,o)=>{const l=GR(o),u=YR();return(f,g)=>qR(void 0,void 0,void 0,function*(){var k;const w=(k=yield n())!==null&&k!==void 0?k:r;let v=new u(g==null?void 0:g.headers);return v.has("apikey")||v.set("apikey",r),v.has("Authorization")||v.set("Authorization",`Bearer ${w}`),l(f,Object.assign(Object.assign({},g),{headers:v}))})};function KR(r){return r.replace(/\/$/,"")}function QR(r,n){const{db:o,auth:l,realtime:u,global:f}=r,{db:g,auth:k,realtime:w,global:v}=n;return{db:Object.assign(Object.assign({},g),o),auth:Object.assign(Object.assign({},k),l),realtime:Object.assign(Object.assign({},w),u),global:Object.assign(Object.assign({},v),f)}}function JR(r){return Math.round(Date.now()/1e3)+r}function XR(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){const n=Math.random()*16|0;return(r=="x"?n:n&3|8).toString(16)})}const wr=()=>typeof document<"u",is={tested:!1,writable:!1},Ul=()=>{if(!wr())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(is.tested)return is.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),is.tested=!0,is.writable=!0}catch{is.tested=!0,is.writable=!1}return is.writable};function ek(r){const n={},o=new URL(r);if(o.hash&&o.hash[0]==="#")try{new URLSearchParams(o.hash.substring(1)).forEach((u,f)=>{n[f]=u})}catch{}return o.searchParams.forEach((l,u)=>{n[u]=l}),n}const sS=r=>{let n;return r?n=r:typeof fetch>"u"?n=(...o)=>bd(()=>Promise.resolve().then(()=>wd),void 0).then(({default:l})=>l(...o)):n=fetch,(...o)=>n(...o)},e8=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",rs=async(r,n,o)=>{await r.setItem(n,JSON.stringify(o))},xh=async(r,n)=>{const o=await r.getItem(n);if(!o)return null;try{return JSON.parse(o)}catch{return o}},tk=async(r,n)=>{await r.removeItem(n)};function t8(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let o="",l,u,f,g,k,w,v,_=0;for(r=r.replace("-","+").replace("_","/");_<r.length;)g=n.indexOf(r.charAt(_++)),k=n.indexOf(r.charAt(_++)),w=n.indexOf(r.charAt(_++)),v=n.indexOf(r.charAt(_++)),l=g<<2|k>>4,u=(k&15)<<4|w>>2,f=(w&3)<<6|v,o=o+String.fromCharCode(l),w!=64&&u!=0&&(o=o+String.fromCharCode(u)),v!=64&&f!=0&&(o=o+String.fromCharCode(f));return o}class qf{constructor(){this.promise=new qf.promiseConstructor((n,o)=>{this.resolve=n,this.reject=o})}}qf.promiseConstructor=Promise;function l2(r){const n=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,o=r.split(".");if(o.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!n.test(o[1]))throw new Error("JWT is not valid: payload is not in base64url format");const l=o[1];return JSON.parse(t8(l))}async function n8(r){return await new Promise(n=>{setTimeout(()=>n(null),r)})}function i8(r,n){return new Promise((l,u)=>{(async()=>{for(let f=0;f<1/0;f++)try{const g=await r(f);if(!n(f,null,g)){l(g);return}}catch(g){if(!n(f,g)){u(g);return}}})()})}function r8(r){return("0"+r.toString(16)).substr(-2)}function ga(){const n=new Uint32Array(56);if(typeof crypto>"u"){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",l=o.length;let u="";for(let f=0;f<56;f++)u+=o.charAt(Math.floor(Math.random()*l));return u}return crypto.getRandomValues(n),Array.from(n,r8).join("")}async function o8(r){const o=new TextEncoder().encode(r),l=await crypto.subtle.digest("SHA-256",o),u=new Uint8Array(l);return Array.from(u).map(f=>String.fromCharCode(f)).join("")}function s8(r){return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function pa(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const o=await o8(r);return s8(o)}class Ib extends Error{constructor(n,o){super(n),this.__isAuthError=!0,this.name="AuthError",this.status=o}}function Ve(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class a8 extends Ib{constructor(n,o){super(n,o),this.name="AuthApiError",this.status=o}toJSON(){return{name:this.name,message:this.message,status:this.status}}}function c8(r){return Ve(r)&&r.name==="AuthApiError"}class aS extends Ib{constructor(n,o){super(n),this.name="AuthUnknownError",this.originalError=o}}class rc extends Ib{constructor(n,o,l){super(n),this.name=o,this.status=l}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class ma extends rc{constructor(){super("Auth session missing!","AuthSessionMissingError",400)}}class nk extends rc{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500)}}class Eh extends rc{constructor(n){super(n,"AuthInvalidCredentialsError",400)}}class Dh extends rc{constructor(n,o=null){super(n,"AuthImplicitGrantRedirectError",500),this.details=null,this.details=o}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class d2 extends rc{constructor(n,o=null){super(n,"AuthPKCEGrantCodeExchangeError",500),this.details=null,this.details=o}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class p0 extends rc{constructor(n,o){super(n,"AuthRetryableFetchError",o)}}function u2(r){return Ve(r)&&r.name==="AuthRetryableFetchError"}var l8=globalThis&&globalThis.__rest||function(r,n){var o={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&n.indexOf(l)<0&&(o[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(r);u<l.length;u++)n.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(r,l[u])&&(o[l[u]]=r[l[u]]);return o};const Dl=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),d8=[502,503,504];async function h2(r){if(!e8(r))throw new p0(Dl(r),0);if(d8.includes(r.status))throw new p0(Dl(r),r.status);let n;try{n=await r.json()}catch(o){throw new aS(Dl(o),o)}throw new a8(Dl(n),r.status||500)}const u8=(r,n,o,l)=>{const u={method:r,headers:(n==null?void 0:n.headers)||{}};return r==="GET"?u:(u.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},n==null?void 0:n.headers),u.body=JSON.stringify(l),Object.assign(Object.assign({},u),o))};async function qe(r,n,o,l){var u;const f=Object.assign({},l==null?void 0:l.headers);l!=null&&l.jwt&&(f.Authorization=`Bearer ${l.jwt}`);const g=(u=l==null?void 0:l.query)!==null&&u!==void 0?u:{};l!=null&&l.redirectTo&&(g.redirect_to=l.redirectTo);const k=Object.keys(g).length?"?"+new URLSearchParams(g).toString():"",w=await h8(r,n,o+k,{headers:f,noResolveJson:l==null?void 0:l.noResolveJson},{},l==null?void 0:l.body);return l!=null&&l.xform?l==null?void 0:l.xform(w):{data:Object.assign({},w),error:null}}async function h8(r,n,o,l,u,f){const g=u8(n,l,u,f);let k;try{k=await r(o,g)}catch(w){throw console.error(w),new p0(Dl(w),0)}if(k.ok||await h2(k),l!=null&&l.noResolveJson)return k;try{return await k.json()}catch(w){await h2(w)}}function no(r){var n;let o=null;m8(r)&&(o=Object.assign({},r),r.expires_at||(o.expires_at=JR(r.expires_in)));const l=(n=r.user)!==null&&n!==void 0?n:r;return{data:{session:o,user:l},error:null}}function uo(r){var n;return{data:{user:(n=r.user)!==null&&n!==void 0?n:r},error:null}}function f8(r){return{data:r,error:null}}function g8(r){const{action_link:n,email_otp:o,hashed_token:l,redirect_to:u,verification_type:f}=r,g=l8(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),k={action_link:n,email_otp:o,hashed_token:l,redirect_to:u,verification_type:f},w=Object.assign({},g);return{data:{properties:k,user:w},error:null}}function p8(r){return r}function m8(r){return r.access_token&&r.refresh_token&&r.expires_in}var k8=globalThis&&globalThis.__rest||function(r,n){var o={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&n.indexOf(l)<0&&(o[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(r);u<l.length;u++)n.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(r,l[u])&&(o[l[u]]=r[l[u]]);return o};class b8{constructor({url:n="",headers:o={},fetch:l}){this.url=n,this.headers=o,this.fetch=sS(l),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(n,o="global"){try{return await qe(this.fetch,"POST",`${this.url}/logout?scope=${o}`,{headers:this.headers,jwt:n,noResolveJson:!0}),{data:null,error:null}}catch(l){if(Ve(l))return{data:null,error:l};throw l}}async inviteUserByEmail(n,o={}){try{return await qe(this.fetch,"POST",`${this.url}/invite`,{body:{email:n,data:o.data},headers:this.headers,redirectTo:o.redirectTo,xform:uo})}catch(l){if(Ve(l))return{data:{user:null},error:l};throw l}}async generateLink(n){try{const{options:o}=n,l=k8(n,["options"]),u=Object.assign(Object.assign({},l),o);return"newEmail"in l&&(u.new_email=l==null?void 0:l.newEmail,delete u.newEmail),await qe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:u,headers:this.headers,xform:g8,redirectTo:o==null?void 0:o.redirectTo})}catch(o){if(Ve(o))return{data:{properties:null,user:null},error:o};throw o}}async createUser(n){try{return await qe(this.fetch,"POST",`${this.url}/admin/users`,{body:n,headers:this.headers,xform:uo})}catch(o){if(Ve(o))return{data:{user:null},error:o};throw o}}async listUsers(n){var o,l,u,f,g,k,w;try{const v={nextPage:null,lastPage:0,total:0},_=await qe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(o=n==null?void 0:n.page)===null||o===void 0?void 0:o.toString())!==null&&l!==void 0?l:"",per_page:(f=(u=n==null?void 0:n.perPage)===null||u===void 0?void 0:u.toString())!==null&&f!==void 0?f:""},xform:p8});if(_.error)throw _.error;const A=await _.json(),x=(g=_.headers.get("x-total-count"))!==null&&g!==void 0?g:0,S=(w=(k=_.headers.get("link"))===null||k===void 0?void 0:k.split(","))!==null&&w!==void 0?w:[];return S.length>0&&(S.forEach(N=>{const P=parseInt(N.split(";")[0].split("=")[1].substring(0,1)),R=JSON.parse(N.split(";")[1].split("=")[1]);v[`${R}Page`]=P}),v.total=parseInt(x)),{data:Object.assign(Object.assign({},A),v),error:null}}catch(v){if(Ve(v))return{data:{users:[]},error:v};throw v}}async getUserById(n){try{return await qe(this.fetch,"GET",`${this.url}/admin/users/${n}`,{headers:this.headers,xform:uo})}catch(o){if(Ve(o))return{data:{user:null},error:o};throw o}}async updateUserById(n,o){try{return await qe(this.fetch,"PUT",`${this.url}/admin/users/${n}`,{body:o,headers:this.headers,xform:uo})}catch(l){if(Ve(l))return{data:{user:null},error:l};throw l}}async deleteUser(n,o=!1){try{return await qe(this.fetch,"DELETE",`${this.url}/admin/users/${n}`,{headers:this.headers,body:{should_soft_delete:o},xform:uo})}catch(l){if(Ve(l))return{data:{user:null},error:l};throw l}}async _listFactors(n){try{const{data:o,error:l}=await qe(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/factors`,{headers:this.headers,xform:u=>({data:{factors:u},error:null})});return{data:o,error:l}}catch(o){if(Ve(o))return{data:null,error:o};throw o}}async _deleteFactor(n){try{return{data:await qe(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/factors/${n.id}`,{headers:this.headers}),error:null}}catch(o){if(Ve(o))return{data:null,error:o};throw o}}}const cS="2.57.0",w8="http://localhost:9999",_8="supabase.auth.token",v8={"X-Client-Info":`gotrue-js/${cS}`},f2=10,y8={getItem:r=>Ul()?globalThis.localStorage.getItem(r):null,setItem:(r,n)=>{Ul()&&globalThis.localStorage.setItem(r,n)},removeItem:r=>{Ul()&&globalThis.localStorage.removeItem(r)}};function g2(r={}){return{getItem:n=>r[n]||null,setItem:(n,o)=>{r[n]=o},removeItem:n=>{delete r[n]}}}function A8(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}globalThis&&Ul()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class C8 extends Error{constructor(n){super(n),this.isAcquireTimeout=!0}}A8();const x8={url:w8,storageKey:_8,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:v8,flowType:"implicit",debug:!1},wl=30*1e3,p2=3;async function E8(r,n,o){return await o()}class cd{constructor(n){var o;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=cd.nextInstanceID,cd.nextInstanceID+=1,this.instanceID>0&&wr()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const l=Object.assign(Object.assign({},x8),n);if(this.logDebugMessages=!!l.debug,typeof l.debug=="function"&&(this.logger=l.debug),this.persistSession=l.persistSession,this.storageKey=l.storageKey,this.autoRefreshToken=l.autoRefreshToken,this.admin=new b8({url:l.url,headers:l.headers,fetch:l.fetch}),this.url=l.url,this.headers=l.headers,this.fetch=sS(l.fetch),this.lock=l.lock||E8,this.detectSessionInUrl=l.detectSessionInUrl,this.flowType=l.flowType,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?l.storage?this.storage=l.storage:Ul()?this.storage=y8:(this.memoryStorage={},this.storage=g2(this.memoryStorage)):(this.memoryStorage={},this.storage=g2(this.memoryStorage)),wr()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(u){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",u)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async u=>{this._debug("received broadcast notification from other tab or client",u),await this._notifyAllSubscribers(u.data.event,u.data.session,!1)})}this.initialize()}_debug(...n){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${cS}) ${new Date().toISOString()}`,...n),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const n=wr()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",n),n||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:o,error:l}=await this._getSessionFromURL(n);if(l)return this._debug("#_initialize()","error detecting session from URL",l),await this._removeSession(),{error:l};const{session:u,redirectType:f}=o;return this._debug("#_initialize()","detected session in URL",u,"redirect type",f),await this._saveSession(u),setTimeout(async()=>{f==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",u):await this._notifyAllSubscribers("SIGNED_IN",u)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(n){return Ve(n)?{error:n}:{error:new aS("Unexpected error during initialization",n)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signUp(n){var o,l,u;try{await this._removeSession();let f;if("email"in n){const{email:_,password:A,options:x}=n;let S=null,N=null;if(this.flowType==="pkce"){const P=ga();await rs(this.storage,`${this.storageKey}-code-verifier`,P),S=await pa(P),N=P===S?"plain":"s256"}f=await qe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:_,password:A,data:(o=x==null?void 0:x.data)!==null&&o!==void 0?o:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:S,code_challenge_method:N},xform:no})}else if("phone"in n){const{phone:_,password:A,options:x}=n;f=await qe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:_,password:A,data:(l=x==null?void 0:x.data)!==null&&l!==void 0?l:{},channel:(u=x==null?void 0:x.channel)!==null&&u!==void 0?u:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:no})}else throw new Eh("You must provide either an email or phone number and a password");const{data:g,error:k}=f;if(k||!g)return{data:{user:null,session:null},error:k};const w=g.session,v=g.user;return g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("SIGNED_IN",w)),{data:{user:v,session:w},error:null}}catch(f){if(Ve(f))return{data:{user:null,session:null},error:f};throw f}}async signInWithPassword(n){try{await this._removeSession();let o;if("email"in n){const{email:f,password:g,options:k}=n;o=await qe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:f,password:g,gotrue_meta_security:{captcha_token:k==null?void 0:k.captchaToken}},xform:no})}else if("phone"in n){const{phone:f,password:g,options:k}=n;o=await qe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:f,password:g,gotrue_meta_security:{captcha_token:k==null?void 0:k.captchaToken}},xform:no})}else throw new Eh("You must provide either an email or phone number and a password");const{data:l,error:u}=o;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new nk}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:{user:l.user,session:l.session},error:u})}catch(o){if(Ve(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithOAuth(n){var o,l,u,f;return await this._removeSession(),await this._handleProviderSignIn(n.provider,{redirectTo:(o=n.options)===null||o===void 0?void 0:o.redirectTo,scopes:(l=n.options)===null||l===void 0?void 0:l.scopes,queryParams:(u=n.options)===null||u===void 0?void 0:u.queryParams,skipBrowserRedirect:(f=n.options)===null||f===void 0?void 0:f.skipBrowserRedirect})}async exchangeCodeForSession(n){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(n))}async _exchangeCodeForSession(n){const o=await xh(this.storage,`${this.storageKey}-code-verifier`),{data:l,error:u}=await qe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:n,code_verifier:o},xform:no});return await tk(this.storage,`${this.storageKey}-code-verifier`),u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new nk}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}async signInWithIdToken(n){await this._removeSession();try{const{options:o,provider:l,token:u,access_token:f,nonce:g}=n,k=await qe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:l,id_token:u,access_token:f,nonce:g,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:no}),{data:w,error:v}=k;return v?{data:{user:null,session:null},error:v}:!w||!w.session||!w.user?{data:{user:null,session:null},error:new nk}:(w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("SIGNED_IN",w.session)),{data:w,error:v})}catch(o){if(Ve(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithOtp(n){var o,l,u,f,g;try{if(await this._removeSession(),"email"in n){const{email:k,options:w}=n;let v=null,_=null;if(this.flowType==="pkce"){const x=ga();await rs(this.storage,`${this.storageKey}-code-verifier`,x),v=await pa(x),_=x===v?"plain":"s256"}const{error:A}=await qe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:k,data:(o=w==null?void 0:w.data)!==null&&o!==void 0?o:{},create_user:(l=w==null?void 0:w.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:w==null?void 0:w.captchaToken},code_challenge:v,code_challenge_method:_},redirectTo:w==null?void 0:w.emailRedirectTo});return{data:{user:null,session:null},error:A}}if("phone"in n){const{phone:k,options:w}=n,{data:v,error:_}=await qe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:k,data:(u=w==null?void 0:w.data)!==null&&u!==void 0?u:{},create_user:(f=w==null?void 0:w.shouldCreateUser)!==null&&f!==void 0?f:!0,gotrue_meta_security:{captcha_token:w==null?void 0:w.captchaToken},channel:(g=w==null?void 0:w.channel)!==null&&g!==void 0?g:"sms"}});return{data:{user:null,session:null,messageId:v==null?void 0:v.message_id},error:_}}throw new Eh("You must provide either an email or phone number.")}catch(k){if(Ve(k))return{data:{user:null,session:null},error:k};throw k}}async verifyOtp(n){var o,l;try{n.type!=="email_change"&&n.type!=="phone_change"&&await this._removeSession();let u,f;"options"in n&&(u=(o=n.options)===null||o===void 0?void 0:o.redirectTo,f=(l=n.options)===null||l===void 0?void 0:l.captchaToken);const{data:g,error:k}=await qe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},n),{gotrue_meta_security:{captcha_token:f}}),redirectTo:u,xform:no});if(k)throw k;if(!g)throw new Error("An error occurred on token verification.");const w=g.session,v=g.user;return w!=null&&w.access_token&&(await this._saveSession(w),await this._notifyAllSubscribers("SIGNED_IN",w)),{data:{user:v,session:w},error:null}}catch(u){if(Ve(u))return{data:{user:null,session:null},error:u};throw u}}async signInWithSSO(n){var o,l,u;try{await this._removeSession();let f=null,g=null;if(this.flowType==="pkce"){const k=ga();await rs(this.storage,`${this.storageKey}-code-verifier`,k),f=await pa(k),g=k===f?"plain":"s256"}return await qe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in n?{provider_id:n.providerId}:null),"domain"in n?{domain:n.domain}:null),{redirect_to:(l=(o=n.options)===null||o===void 0?void 0:o.redirectTo)!==null&&l!==void 0?l:void 0}),!((u=n==null?void 0:n.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:n.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:f,code_challenge_method:g}),headers:this.headers,xform:f8})}catch(f){if(Ve(f))return{data:null,error:f};throw f}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async n=>{const{data:{session:o},error:l}=n;if(l)throw l;if(!o)throw new ma;const{error:u}=await qe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:o.access_token});return{data:{user:null,session:null},error:u}})}catch(n){if(Ve(n))return{data:{user:null,session:null},error:n};throw n}}async resend(n){try{n.type!="email_change"&&n.type!="phone_change"&&await this._removeSession();const o=`${this.url}/resend`;if("email"in n){const{email:l,type:u,options:f}=n,{error:g}=await qe(this.fetch,"POST",o,{headers:this.headers,body:{email:l,type:u,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},redirectTo:f==null?void 0:f.emailRedirectTo});return{data:{user:null,session:null},error:g}}else if("phone"in n){const{phone:l,type:u,options:f}=n,{data:g,error:k}=await qe(this.fetch,"POST",o,{headers:this.headers,body:{phone:l,type:u,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}}});return{data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:k}}throw new Eh("You must provide either an email or phone number and a type")}catch(o){if(Ve(o))return{data:{user:null,session:null},error:o};throw o}}async getSession(){return await this.initializePromise,this._acquireLock(-1,async()=>this._useSession(async n=>n))}async _acquireLock(n,o){this._debug("#_acquireLock","begin",n);try{if(this.lockAcquired){const l=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),u=(async()=>(await l,await o()))();return this.pendingInLock.push((async()=>{try{await u}catch{}})()),u}return await this.lock(`lock:${this.storageKey}`,n,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const l=o();for(this.pendingInLock.push((async()=>{try{await l}catch{}})()),await l;this.pendingInLock.length;){const u=[...this.pendingInLock];await Promise.all(u),this.pendingInLock.splice(0,u.length)}return await l}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(n){this._debug("#_useSession","begin");try{const o=await this.__loadSession();return await n(o)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let n=null;const o=await xh(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",o),o!==null&&(this._isValidSession(o)?n=o:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!n)return{data:{session:null},error:null};const l=n.expires_at?n.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${l?"":" not"} expired`,"expires_at",n.expires_at),!l)return{data:{session:n},error:null};const{session:u,error:f}=await this._callRefreshToken(n.refresh_token);return f?{data:{session:null},error:f}:{data:{session:u},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(n){return n?await this._getUser(n):(await this.initializePromise,this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(n){try{return n?await qe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:n,xform:uo}):await this._useSession(async o=>{var l,u;const{data:f,error:g}=o;if(g)throw g;return await qe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(u=(l=f.session)===null||l===void 0?void 0:l.access_token)!==null&&u!==void 0?u:void 0,xform:uo})})}catch(o){if(Ve(o))return{data:{user:null},error:o};throw o}}async updateUser(n,o={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(n,o))}async _updateUser(n,o={}){try{return await this._useSession(async l=>{const{data:u,error:f}=l;if(f)throw f;if(!u.session)throw new ma;const g=u.session;let k=null,w=null;if(this.flowType==="pkce"&&n.email!=null){const A=ga();await rs(this.storage,`${this.storageKey}-code-verifier`,A),k=await pa(A),w=A===k?"plain":"s256"}const{data:v,error:_}=await qe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:o==null?void 0:o.emailRedirectTo,body:Object.assign(Object.assign({},n),{code_challenge:k,code_challenge_method:w}),jwt:g.access_token,xform:uo});if(_)throw _;return g.user=v.user,await this._saveSession(g),await this._notifyAllSubscribers("USER_UPDATED",g),{data:{user:g.user},error:null}})}catch(l){if(Ve(l))return{data:{user:null},error:l};throw l}}_decodeJWT(n){return l2(n)}async setSession(n){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(n))}async _setSession(n){try{if(!n.access_token||!n.refresh_token)throw new ma;const o=Date.now()/1e3;let l=o,u=!0,f=null;const g=l2(n.access_token);if(g.exp&&(l=g.exp,u=l<=o),u){const{session:k,error:w}=await this._callRefreshToken(n.refresh_token);if(w)return{data:{user:null,session:null},error:w};if(!k)return{data:{user:null,session:null},error:null};f=k}else{const{data:k,error:w}=await this._getUser(n.access_token);if(w)throw w;f={access_token:n.access_token,refresh_token:n.refresh_token,user:k.user,token_type:"bearer",expires_in:l-o,expires_at:l},await this._saveSession(f),await this._notifyAllSubscribers("SIGNED_IN",f)}return{data:{user:f.user,session:f},error:null}}catch(o){if(Ve(o))return{data:{session:null,user:null},error:o};throw o}}async refreshSession(n){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(n))}async _refreshSession(n){try{return await this._useSession(async o=>{var l;if(!n){const{data:g,error:k}=o;if(k)throw k;n=(l=g.session)!==null&&l!==void 0?l:void 0}if(!(n!=null&&n.refresh_token))throw new ma;const{session:u,error:f}=await this._callRefreshToken(n.refresh_token);return f?{data:{user:null,session:null},error:f}:u?{data:{user:u.user,session:u},error:null}:{data:{user:null,session:null},error:null}})}catch(o){if(Ve(o))return{data:{user:null,session:null},error:o};throw o}}async _getSessionFromURL(n){try{if(!wr())throw new Dh("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new Dh("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!n)throw new d2("Not a valid PKCE flow url.");const o=ek(window.location.href);if(n){if(!o.code)throw new d2("No code detected.");const{data:L,error:D}=await this._exchangeCodeForSession(o.code);if(D)throw D;const W=new URL(window.location.href);return W.searchParams.delete("code"),window.history.replaceState(window.history.state,"",W.toString()),{data:{session:L.session,redirectType:null},error:null}}if(o.error||o.error_description||o.error_code)throw new Dh(o.error_description||"Error in URL with unspecified error_description",{error:o.error||"unspecified_error",code:o.error_code||"unspecified_code"});const{provider_token:l,provider_refresh_token:u,access_token:f,refresh_token:g,expires_in:k,expires_at:w,token_type:v}=o;if(!f||!k||!g||!v)throw new Dh("No session defined in URL");const _=Math.round(Date.now()/1e3),A=parseInt(k);let x=_+A;w&&(x=parseInt(w));const S=x-_;S*1e3<=wl&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${A}s`);const N=x-A;_-N>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",N,x,_):_-N<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",N,x,_);const{data:P,error:R}=await this._getUser(f);if(R)throw R;const B={provider_token:l,provider_refresh_token:u,access_token:f,expires_in:A,expires_at:x,refresh_token:g,token_type:v,user:P.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:B,redirectType:o.type},error:null}}catch(o){if(Ve(o))return{data:{session:null,redirectType:null},error:o};throw o}}_isImplicitGrantFlow(){const n=ek(window.location.href);return!!(wr()&&(n.access_token||n.error_description))}async _isPKCEFlow(){const n=ek(window.location.href),o=await xh(this.storage,`${this.storageKey}-code-verifier`);return!!(n.code&&o)}async signOut(n={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(n))}async _signOut({scope:n}={scope:"global"}){return await this._useSession(async o=>{var l;const{data:u,error:f}=o;if(f)return{error:f};const g=(l=u.session)===null||l===void 0?void 0:l.access_token;if(g){const{error:k}=await this.admin.signOut(g,n);if(k&&!(c8(k)&&(k.status===404||k.status===401)))return{error:k}}return n!=="others"&&(await this._removeSession(),await tk(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}})}onAuthStateChange(n){const o=XR(),l={id:o,callback:n,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",o),this.stateChangeEmitters.delete(o)}};return this._debug("#onAuthStateChange()","registered callback with id",o),this.stateChangeEmitters.set(o,l),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(o)})))(),{data:{subscription:l}}}async _emitInitialSession(n){return await this._useSession(async o=>{var l,u;try{const{data:{session:f},error:g}=o;if(g)throw g;await((l=this.stateChangeEmitters.get(n))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",f)),this._debug("INITIAL_SESSION","callback id",n,"session",f)}catch(f){await((u=this.stateChangeEmitters.get(n))===null||u===void 0?void 0:u.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",n,"error",f),console.error(f)}})}async resetPasswordForEmail(n,o={}){let l=null,u=null;if(this.flowType==="pkce"){const f=ga();await rs(this.storage,`${this.storageKey}-code-verifier`,f),l=await pa(f),u=f===l?"plain":"s256"}try{return await qe(this.fetch,"POST",`${this.url}/recover`,{body:{email:n,code_challenge:l,code_challenge_method:u,gotrue_meta_security:{captcha_token:o.captchaToken}},headers:this.headers,redirectTo:o.redirectTo})}catch(f){if(Ve(f))return{data:null,error:f};throw f}}async _refreshAccessToken(n){const o=`#_refreshAccessToken(${n.substring(0,5)}...)`;this._debug(o,"begin");try{const l=Date.now();return await i8(async u=>(await n8(u*200),this._debug(o,"refreshing attempt",u),await qe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:n},headers:this.headers,xform:no})),(u,f,g)=>g&&g.error&&u2(g.error)&&Date.now()+(u+1)*200-l<wl)}catch(l){if(this._debug(o,"error",l),Ve(l))return{data:{session:null,user:null},error:l};throw l}finally{this._debug(o,"end")}}_isValidSession(n){return typeof n=="object"&&n!==null&&"access_token"in n&&"refresh_token"in n&&"expires_at"in n}async _handleProviderSignIn(n,o){const l=await this._getUrlForProvider(n,{redirectTo:o.redirectTo,scopes:o.scopes,queryParams:o.queryParams});return this._debug("#_handleProviderSignIn()","provider",n,"options",o,"url",l),wr()&&!o.skipBrowserRedirect&&window.location.assign(l),{data:{provider:n,url:l},error:null}}async _recoverAndRefresh(){var n;const o="#_recoverAndRefresh()";this._debug(o,"begin");try{const l=await xh(this.storage,this.storageKey);if(this._debug(o,"session from storage",l),!this._isValidSession(l)){this._debug(o,"session is not valid"),l!==null&&await this._removeSession();return}const u=Math.round(Date.now()/1e3),f=((n=l.expires_at)!==null&&n!==void 0?n:1/0)<u+f2;if(this._debug(o,`session has${f?"":" not"} expired with margin of ${f2}s`),f){if(this.autoRefreshToken&&l.refresh_token){const{error:g}=await this._callRefreshToken(l.refresh_token);g&&(console.error(g),u2(g)||(this._debug(o,"refresh failed with a non-retryable error, removing the session",g),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",l)}catch(l){this._debug(o,"error",l),console.error(l);return}finally{this._debug(o,"end")}}async _callRefreshToken(n){var o,l;if(!n)throw new ma;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const u=`#_callRefreshToken(${n.substring(0,5)}...)`;this._debug(u,"begin");try{this.refreshingDeferred=new qf;const{data:f,error:g}=await this._refreshAccessToken(n);if(g)throw g;if(!f.session)throw new ma;await this._saveSession(f.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",f.session);const k={session:f.session,error:null};return this.refreshingDeferred.resolve(k),k}catch(f){if(this._debug(u,"error",f),Ve(f)){const g={session:null,error:f};return(o=this.refreshingDeferred)===null||o===void 0||o.resolve(g),g}throw(l=this.refreshingDeferred)===null||l===void 0||l.reject(f),f}finally{this.refreshingDeferred=null,this._debug(u,"end")}}async _notifyAllSubscribers(n,o,l=!0){const u=`#_notifyAllSubscribers(${n})`;this._debug(u,"begin",o,`broadcast = ${l}`);try{this.broadcastChannel&&l&&this.broadcastChannel.postMessage({event:n,session:o});const f=[],g=Array.from(this.stateChangeEmitters.values()).map(async k=>{try{await k.callback(n,o)}catch(w){f.push(w)}});if(await Promise.all(g),f.length>0){for(let k=0;k<f.length;k+=1)console.error(f[k]);throw f[0]}}finally{this._debug(u,"end")}}async _saveSession(n){this._debug("#_saveSession()",n),await this._persistSession(n)}_persistSession(n){return this._debug("#_persistSession()",n),rs(this.storage,this.storageKey,n)}async _removeSession(){this._debug("#_removeSession()"),await tk(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const n=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{n&&wr()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",n)}catch(o){console.error("removing visibilitychange callback failed",o)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const n=setInterval(()=>this._autoRefreshTokenTick(),wl);this.autoRefreshTicker=n,n&&typeof n=="object"&&typeof n.unref=="function"?n.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(n),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const n=this.autoRefreshTicker;this.autoRefreshTicker=null,n&&clearInterval(n)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const n=Date.now();try{return await this._useSession(async o=>{const{data:{session:l}}=o;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const u=Math.floor((l.expires_at*1e3-n)/wl);this._debug("#_autoRefreshTokenTick()",`access token expires in ${u} ticks, a tick lasts ${wl}ms, refresh threshold is ${p2} ticks`),u<=p2&&await this._callRefreshToken(l.refresh_token)})}catch(o){console.error("Auto refresh tick failed with error. This is likely a transient error.",o)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(n){if(n.isAcquireTimeout||n instanceof C8)this._debug("auto refresh token tick lock not available");else throw n}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!wr()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(n){console.error("_handleVisibilityChange",n)}}async _onVisibilityChanged(n){const o=`#_onVisibilityChanged(${n})`;this._debug(o,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),n||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(o,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(n,o){const l=[`provider=${encodeURIComponent(n)}`];if(o!=null&&o.redirectTo&&l.push(`redirect_to=${encodeURIComponent(o.redirectTo)}`),o!=null&&o.scopes&&l.push(`scopes=${encodeURIComponent(o.scopes)}`),this.flowType==="pkce"){const u=ga();await rs(this.storage,`${this.storageKey}-code-verifier`,u);const f=await pa(u),g=u===f?"plain":"s256";this._debug("PKCE","code verifier",`${u.substring(0,5)}...`,"code challenge",f,"method",g);const k=new URLSearchParams({code_challenge:`${encodeURIComponent(f)}`,code_challenge_method:`${encodeURIComponent(g)}`});l.push(k.toString())}if(o!=null&&o.queryParams){const u=new URLSearchParams(o.queryParams);l.push(u.toString())}return`${this.url}/authorize?${l.join("&")}`}async _unenroll(n){try{return await this._useSession(async o=>{var l;const{data:u,error:f}=o;return f?{data:null,error:f}:await qe(this.fetch,"DELETE",`${this.url}/factors/${n.factorId}`,{headers:this.headers,jwt:(l=u==null?void 0:u.session)===null||l===void 0?void 0:l.access_token})})}catch(o){if(Ve(o))return{data:null,error:o};throw o}}async _enroll(n){try{return await this._useSession(async o=>{var l,u;const{data:f,error:g}=o;if(g)return{data:null,error:g};const{data:k,error:w}=await qe(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:n.friendlyName,factor_type:n.factorType,issuer:n.issuer},headers:this.headers,jwt:(l=f==null?void 0:f.session)===null||l===void 0?void 0:l.access_token});return w?{data:null,error:w}:(!((u=k==null?void 0:k.totp)===null||u===void 0)&&u.qr_code&&(k.totp.qr_code=`data:image/svg+xml;utf-8,${k.totp.qr_code}`),{data:k,error:null})})}catch(o){if(Ve(o))return{data:null,error:o};throw o}}async _verify(n){return this._acquireLock(-1,async()=>{try{return await this._useSession(async o=>{var l;const{data:u,error:f}=o;if(f)return{data:null,error:f};const{data:g,error:k}=await qe(this.fetch,"POST",`${this.url}/factors/${n.factorId}/verify`,{body:{code:n.code,challenge_id:n.challengeId},headers:this.headers,jwt:(l=u==null?void 0:u.session)===null||l===void 0?void 0:l.access_token});return k?{data:null,error:k}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+g.expires_in},g)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",g),{data:g,error:k})})}catch(o){if(Ve(o))return{data:null,error:o};throw o}})}async _challenge(n){return this._acquireLock(-1,async()=>{try{return await this._useSession(async o=>{var l;const{data:u,error:f}=o;return f?{data:null,error:f}:await qe(this.fetch,"POST",`${this.url}/factors/${n.factorId}/challenge`,{headers:this.headers,jwt:(l=u==null?void 0:u.session)===null||l===void 0?void 0:l.access_token})})}catch(o){if(Ve(o))return{data:null,error:o};throw o}})}async _challengeAndVerify(n){const{data:o,error:l}=await this._challenge({factorId:n.factorId});return l?{data:null,error:l}:await this._verify({factorId:n.factorId,challengeId:o.id,code:n.code})}async _listFactors(){const{data:{user:n},error:o}=await this.getUser();if(o)return{data:null,error:o};const l=(n==null?void 0:n.factors)||[],u=l.filter(f=>f.factor_type==="totp"&&f.status==="verified");return{data:{all:l,totp:u},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async n=>{var o,l;const{data:{session:u},error:f}=n;if(f)return{data:null,error:f};if(!u)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const g=this._decodeJWT(u.access_token);let k=null;g.aal&&(k=g.aal);let w=k;((l=(o=u.user.factors)===null||o===void 0?void 0:o.filter(A=>A.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(w="aal2");const _=g.amr||[];return{data:{currentLevel:k,nextLevel:w,currentAuthenticationMethods:_},error:null}}))}}cd.nextInstanceID=0;class D8 extends cd{constructor(n){super(n)}}var S8=globalThis&&globalThis.__awaiter||function(r,n,o,l){function u(f){return f instanceof o?f:new o(function(g){g(f)})}return new(o||(o=Promise))(function(f,g){function k(_){try{v(l.next(_))}catch(A){g(A)}}function w(_){try{v(l.throw(_))}catch(A){g(A)}}function v(_){_.done?f(_.value):u(_.value).then(k,w)}v((l=l.apply(r,n||[])).next())})};const T8={headers:WR},I8={schema:"public"},M8={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},N8={};class O8{constructor(n,o,l){var u,f,g,k,w,v,_,A;if(this.supabaseUrl=n,this.supabaseKey=o,!n)throw new Error("supabaseUrl is required.");if(!o)throw new Error("supabaseKey is required.");const x=KR(n);this.realtimeUrl=`${x}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${x}/auth/v1`,this.storageUrl=`${x}/storage/v1`,this.functionsUrl=`${x}/functions/v1`;const S=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,N={db:I8,realtime:N8,auth:Object.assign(Object.assign({},M8),{storageKey:S}),global:T8},P=QR(l??{},N);this.storageKey=(f=(u=P.auth)===null||u===void 0?void 0:u.storageKey)!==null&&f!==void 0?f:"",this.headers=(k=(g=P.global)===null||g===void 0?void 0:g.headers)!==null&&k!==void 0?k:{},this.auth=this._initSupabaseAuthClient((w=P.auth)!==null&&w!==void 0?w:{},this.headers,(v=P.global)===null||v===void 0?void 0:v.fetch),this.fetch=ZR(o,this._getAccessToken.bind(this),(_=P.global)===null||_===void 0?void 0:_.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},P.realtime)),this.rest=new Db(`${x}/rest/v1`,{headers:this.headers,schema:(A=P.db)===null||A===void 0?void 0:A.schema,fetch:this.fetch}),this._listenForAuthEvents()}get functions(){return new W7(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new $R(this.storageUrl,this.headers,this.fetch)}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}rpc(n,o={},l){return this.rest.rpc(n,o,l)}channel(n,o={config:{}}){return this.realtime.channel(n,o)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var n,o;return S8(this,void 0,void 0,function*(){const{data:l}=yield this.auth.getSession();return(o=(n=l.session)===null||n===void 0?void 0:n.access_token)!==null&&o!==void 0?o:null})}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:o,detectSessionInUrl:l,storage:u,storageKey:f,flowType:g,debug:k},w,v){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new D8({url:this.authUrl,headers:Object.assign(Object.assign({},_),w),storageKey:f,autoRefreshToken:n,persistSession:o,detectSessionInUrl:l,storage:u,flowType:g,debug:k,fetch:v})}_initRealtimeClient(n){return new MR(this.realtimeUrl,Object.assign(Object.assign({},n),{params:Object.assign({apikey:this.supabaseKey},n==null?void 0:n.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((o,l)=>{this._handleTokenChanged(o,"CLIENT",l==null?void 0:l.access_token)})}_handleTokenChanged(n,o,l){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN")&&this.changedAccessToken!==l?(this.realtime.setAuth(l??null),this.changedAccessToken=l):n==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),o=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const B8=(r,n,o)=>new O8(r,n,o),P8="https://wfmzmjdkdoryaeunljkv.supabase.co",L8="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbXptamRrZG9yeWFldW5samt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0MDc2NTcsImV4cCI6MjAxNDk4MzY1N30.zRjzq2AcsGmIx0GBvfPoDyj5BBWlAwHsjc3yEV8vXcQ",xi=B8(P8,L8);function z8(){const[r,n]=de.useState(null);return de.useEffect(()=>{xi.auth.getSession().then(({data:{session:l}})=>{n(l)});const{data:{subscription:o}}=xi.auth.onAuthStateChange((l,u)=>{n(u)});return()=>o.unsubscribe()},[]),F.jsxs(F.Fragment,{children:[F.jsx(z7,{supabase:xi,session:r}),F.jsxs(k6,{children:[F.jsx(Ei,{path:"/Book-Chronicles/",element:F.jsx(f7,{supabase:xi,session:r})}),F.jsx(Ei,{path:"/Book-Chronicles/create",element:F.jsx(Xx,{session:r,children:F.jsx(k7,{supabase:xi,session:r})})}),F.jsx(Ei,{path:"/Book-Chronicles/post/:id",element:F.jsx(T7,{supabase:xi,session:r})}),F.jsx(Ei,{path:"/Book-Chronicles/post/:id/edit",element:F.jsx(Xx,{session:r,children:F.jsx(I7,{supabase:xi,session:r})})}),F.jsx(Ei,{path:"/Book-Chronicles/users/:id",element:F.jsx(B7,{supabase:xi,session:r})}),F.jsx(Ei,{path:"/Book-Chronicles/getBookInfo",element:F.jsx(w7,{})}),F.jsx(Ei,{path:"Book-Chronicles/userposts",element:F.jsx(O7,{supabase:xi})}),F.jsx(Ei,{path:"Book-Chronicles/signup",element:F.jsx(M7,{supabase:xi})}),F.jsx(Ei,{path:"Book-Chronicles/signin",element:F.jsx(N7,{supabase:xi})}),F.jsx(Ei,{path:"*",element:F.jsx(g7,{})})]})]})}ik.createRoot(document.getElementById("root")).render(F.jsx(D2.StrictMode,{children:F.jsx(A6,{children:F.jsx(z8,{})})}))});export default j8();