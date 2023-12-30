var _L=(i,n)=>()=>(n||i((n={exports:{}}).exports,n),n.exports);var wq=_L((Tn,$t)=>{function U5(i,n){for(var o=0;o<n.length;o++){const c=n[o];if(typeof c!="string"&&!Array.isArray(c)){for(const d in c)if(d!=="default"&&!(d in i)){const h=Object.getOwnPropertyDescriptor(c,d);h&&Object.defineProperty(i,d,h.get?h:{enumerable:!0,get:()=>c[d]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ig(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function yL(i){if(i.__esModule)return i;var n=i.default;if(typeof n=="function"){var o=function c(){return this instanceof c?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};o.prototype=n.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(i).forEach(function(c){var d=Object.getOwnPropertyDescriptor(i,c);Object.defineProperty(o,c,d.get?d:{enumerable:!0,get:function(){return i[c]}})}),o}var H5={exports:{}},rg={},W5={exports:{}},Ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu=Symbol.for("react.element"),AL=Symbol.for("react.portal"),CL=Symbol.for("react.fragment"),xL=Symbol.for("react.strict_mode"),EL=Symbol.for("react.profiler"),SL=Symbol.for("react.provider"),DL=Symbol.for("react.context"),TL=Symbol.for("react.forward_ref"),IL=Symbol.for("react.suspense"),ML=Symbol.for("react.memo"),NL=Symbol.for("react.lazy"),i2=Symbol.iterator;function OL(i){return i===null||typeof i!="object"?null:(i=i2&&i[i2]||i["@@iterator"],typeof i=="function"?i:null)}var q5={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G5=Object.assign,Y5={};function il(i,n,o){this.props=i,this.context=n,this.refs=Y5,this.updater=o||q5}il.prototype.isReactComponent={};il.prototype.setState=function(i,n){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,n,"setState")};il.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function K5(){}K5.prototype=il.prototype;function nw(i,n,o){this.props=i,this.context=n,this.refs=Y5,this.updater=o||q5}var iw=nw.prototype=new K5;iw.constructor=nw;G5(iw,il.prototype);iw.isPureReactComponent=!0;var r2=Array.isArray,Z5=Object.prototype.hasOwnProperty,rw={current:null},Q5={key:!0,ref:!0,__self:!0,__source:!0};function J5(i,n,o){var c,d={},h=null,f=null;if(n!=null)for(c in n.ref!==void 0&&(f=n.ref),n.key!==void 0&&(h=""+n.key),n)Z5.call(n,c)&&!Q5.hasOwnProperty(c)&&(d[c]=n[c]);var m=arguments.length-2;if(m===1)d.children=o;else if(1<m){for(var k=Array(m),v=0;v<m;v++)k[v]=arguments[v+2];d.children=k}if(i&&i.defaultProps)for(c in m=i.defaultProps,m)d[c]===void 0&&(d[c]=m[c]);return{$$typeof:Eu,type:i,key:h,ref:f,props:d,_owner:rw.current}}function PL(i,n){return{$$typeof:Eu,type:i.type,key:n,ref:i.ref,props:i.props,_owner:i._owner}}function ow(i){return typeof i=="object"&&i!==null&&i.$$typeof===Eu}function BL(i){var n={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(o){return n[o]})}var o2=/\/+/g;function P0(i,n){return typeof i=="object"&&i!==null&&i.key!=null?BL(""+i.key):n.toString(36)}function Qf(i,n,o,c,d){var h=typeof i;(h==="undefined"||h==="boolean")&&(i=null);var f=!1;if(i===null)f=!0;else switch(h){case"string":case"number":f=!0;break;case"object":switch(i.$$typeof){case Eu:case AL:f=!0}}if(f)return f=i,d=d(f),i=c===""?"."+P0(f,0):c,r2(d)?(o="",i!=null&&(o=i.replace(o2,"$&/")+"/"),Qf(d,n,o,"",function(v){return v})):d!=null&&(ow(d)&&(d=PL(d,o+(!d.key||f&&f.key===d.key?"":(""+d.key).replace(o2,"$&/")+"/")+i)),n.push(d)),1;if(f=0,c=c===""?".":c+":",r2(i))for(var m=0;m<i.length;m++){h=i[m];var k=c+P0(h,m);f+=Qf(h,n,o,k,d)}else if(k=OL(i),typeof k=="function")for(i=k.call(i),m=0;!(h=i.next()).done;)h=h.value,k=c+P0(h,m++),f+=Qf(h,n,o,k,d);else if(h==="object")throw n=String(i),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return f}function mf(i,n,o){if(i==null)return i;var c=[],d=0;return Qf(i,c,"","",function(h){return n.call(o,h,d++)}),c}function LL(i){if(i._status===-1){var n=i._result;n=n(),n.then(function(o){(i._status===0||i._status===-1)&&(i._status=1,i._result=o)},function(o){(i._status===0||i._status===-1)&&(i._status=2,i._result=o)}),i._status===-1&&(i._status=0,i._result=n)}if(i._status===1)return i._result.default;throw i._result}var ei={current:null},Jf={transition:null},zL={ReactCurrentDispatcher:ei,ReactCurrentBatchConfig:Jf,ReactCurrentOwner:rw};Ue.Children={map:mf,forEach:function(i,n,o){mf(i,function(){n.apply(this,arguments)},o)},count:function(i){var n=0;return mf(i,function(){n++}),n},toArray:function(i){return mf(i,function(n){return n})||[]},only:function(i){if(!ow(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};Ue.Component=il;Ue.Fragment=CL;Ue.Profiler=EL;Ue.PureComponent=nw;Ue.StrictMode=xL;Ue.Suspense=IL;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zL;Ue.cloneElement=function(i,n,o){if(i==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+i+".");var c=G5({},i.props),d=i.key,h=i.ref,f=i._owner;if(n!=null){if(n.ref!==void 0&&(h=n.ref,f=rw.current),n.key!==void 0&&(d=""+n.key),i.type&&i.type.defaultProps)var m=i.type.defaultProps;for(k in n)Z5.call(n,k)&&!Q5.hasOwnProperty(k)&&(c[k]=n[k]===void 0&&m!==void 0?m[k]:n[k])}var k=arguments.length-2;if(k===1)c.children=o;else if(1<k){m=Array(k);for(var v=0;v<k;v++)m[v]=arguments[v+2];c.children=m}return{$$typeof:Eu,type:i.type,key:d,ref:h,props:c,_owner:f}};Ue.createContext=function(i){return i={$$typeof:DL,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},i.Provider={$$typeof:SL,_context:i},i.Consumer=i};Ue.createElement=J5;Ue.createFactory=function(i){var n=J5.bind(null,i);return n.type=i,n};Ue.createRef=function(){return{current:null}};Ue.forwardRef=function(i){return{$$typeof:TL,render:i}};Ue.isValidElement=ow;Ue.lazy=function(i){return{$$typeof:NL,_payload:{_status:-1,_result:i},_init:LL}};Ue.memo=function(i,n){return{$$typeof:ML,type:i,compare:n===void 0?null:n}};Ue.startTransition=function(i){var n=Jf.transition;Jf.transition={};try{i()}finally{Jf.transition=n}};Ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ue.useCallback=function(i,n){return ei.current.useCallback(i,n)};Ue.useContext=function(i){return ei.current.useContext(i)};Ue.useDebugValue=function(){};Ue.useDeferredValue=function(i){return ei.current.useDeferredValue(i)};Ue.useEffect=function(i,n){return ei.current.useEffect(i,n)};Ue.useId=function(){return ei.current.useId()};Ue.useImperativeHandle=function(i,n,o){return ei.current.useImperativeHandle(i,n,o)};Ue.useInsertionEffect=function(i,n){return ei.current.useInsertionEffect(i,n)};Ue.useLayoutEffect=function(i,n){return ei.current.useLayoutEffect(i,n)};Ue.useMemo=function(i,n){return ei.current.useMemo(i,n)};Ue.useReducer=function(i,n,o){return ei.current.useReducer(i,n,o)};Ue.useRef=function(i){return ei.current.useRef(i)};Ue.useState=function(i){return ei.current.useState(i)};Ue.useSyncExternalStore=function(i,n,o){return ei.current.useSyncExternalStore(i,n,o)};Ue.useTransition=function(){return ei.current.useTransition()};Ue.version="18.2.0";W5.exports=Ue;var M=W5.exports;const Ao=ig(M),X5=U5({__proto__:null,default:Ao},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jL=M,RL=Symbol.for("react.element"),FL=Symbol.for("react.fragment"),VL=Object.prototype.hasOwnProperty,$L=jL.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UL={key:!0,ref:!0,__self:!0,__source:!0};function eS(i,n,o){var c,d={},h=null,f=null;o!==void 0&&(h=""+o),n.key!==void 0&&(h=""+n.key),n.ref!==void 0&&(f=n.ref);for(c in n)VL.call(n,c)&&!UL.hasOwnProperty(c)&&(d[c]=n[c]);if(i&&i.defaultProps)for(c in n=i.defaultProps,n)d[c]===void 0&&(d[c]=n[c]);return{$$typeof:RL,type:i,key:h,ref:f,props:d,_owner:$L.current}}rg.Fragment=FL;rg.jsx=eS;rg.jsxs=eS;H5.exports=rg;var F=H5.exports,Ik={},tS={exports:{}},Fi={},nS={exports:{}},iS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(i){function n(re,ie){var pe=re.length;re.push(ie);e:for(;0<pe;){var ge=pe-1>>>1,Se=re[ge];if(0<d(Se,ie))re[ge]=ie,re[pe]=Se,pe=ge;else break e}}function o(re){return re.length===0?null:re[0]}function c(re){if(re.length===0)return null;var ie=re[0],pe=re.pop();if(pe!==ie){re[0]=pe;e:for(var ge=0,Se=re.length,tt=Se>>>1;ge<tt;){var wt=2*(ge+1)-1,nt=re[wt],Ee=wt+1,on=re[Ee];if(0>d(nt,pe))Ee<Se&&0>d(on,nt)?(re[ge]=on,re[Ee]=pe,ge=Ee):(re[ge]=nt,re[wt]=pe,ge=wt);else if(Ee<Se&&0>d(on,pe))re[ge]=on,re[Ee]=pe,ge=Ee;else break e}}return ie}function d(re,ie){var pe=re.sortIndex-ie.sortIndex;return pe!==0?pe:re.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var k=[],v=[],w=1,y=null,C=3,E=!1,D=!1,I=!1,j=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(re){for(var ie=o(v);ie!==null;){if(ie.callback===null)c(v);else if(ie.startTime<=re)c(v),ie.sortIndex=ie.expirationTime,n(k,ie);else break;ie=o(v)}}function $(re){if(I=!1,S(re),!D)if(o(k)!==null)D=!0,X(H);else{var ie=o(v);ie!==null&&oe($,ie.startTime-re)}}function H(re,ie){D=!1,I&&(I=!1,P(ee),ee=-1),E=!0;var pe=C;try{for(S(ie),y=o(k);y!==null&&(!(y.expirationTime>ie)||re&&!Y());){var ge=y.callback;if(typeof ge=="function"){y.callback=null,C=y.priorityLevel;var Se=ge(y.expirationTime<=ie);ie=i.unstable_now(),typeof Se=="function"?y.callback=Se:y===o(k)&&c(k),S(ie)}else c(k);y=o(k)}if(y!==null)var tt=!0;else{var wt=o(v);wt!==null&&oe($,wt.startTime-ie),tt=!1}return tt}finally{y=null,C=pe,E=!1}}var J=!1,Z=null,ee=-1,de=5,se=-1;function Y(){return!(i.unstable_now()-se<de)}function Q(){if(Z!==null){var re=i.unstable_now();se=re;var ie=!0;try{ie=Z(!0,re)}finally{ie?q():(J=!1,Z=null)}}else J=!1}var q;if(typeof L=="function")q=function(){L(Q)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,W=U.port2;U.port1.onmessage=Q,q=function(){W.postMessage(null)}}else q=function(){j(Q,0)};function X(re){Z=re,J||(J=!0,q())}function oe(re,ie){ee=j(function(){re(i.unstable_now())},ie)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(re){re.callback=null},i.unstable_continueExecution=function(){D||E||(D=!0,X(H))},i.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<re?Math.floor(1e3/re):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return o(k)},i.unstable_next=function(re){switch(C){case 1:case 2:case 3:var ie=3;break;default:ie=C}var pe=C;C=ie;try{return re()}finally{C=pe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(re,ie){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var pe=C;C=re;try{return ie()}finally{C=pe}},i.unstable_scheduleCallback=function(re,ie,pe){var ge=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?ge+pe:ge):pe=ge,re){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=pe+Se,re={id:w++,callback:ie,priorityLevel:re,startTime:pe,expirationTime:Se,sortIndex:-1},pe>ge?(re.sortIndex=pe,n(v,re),o(k)===null&&re===o(v)&&(I?(P(ee),ee=-1):I=!0,oe($,pe-ge))):(re.sortIndex=Se,n(k,re),D||E||(D=!0,X(H))),re},i.unstable_shouldYield=Y,i.unstable_wrapCallback=function(re){var ie=C;return function(){var pe=C;C=ie;try{return re.apply(this,arguments)}finally{C=pe}}}})(iS);nS.exports=iS;var HL=nS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=M,Ri=HL;function fe(i){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+i,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+i+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oS=new Set,nu={};function Ia(i,n){Gc(i,n),Gc(i+"Capture",n)}function Gc(i,n){for(nu[i]=n,i=0;i<n.length;i++)oS.add(n[i])}var Do=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mk=Object.prototype.hasOwnProperty,WL=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,s2={},a2={};function qL(i){return Mk.call(a2,i)?!0:Mk.call(s2,i)?!1:WL.test(i)?a2[i]=!0:(s2[i]=!0,!1)}function GL(i,n,o,c){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function YL(i,n,o,c){if(n===null||typeof n>"u"||GL(i,n,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ti(i,n,o,c,d,h,f){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=i,this.type=n,this.sanitizeURL=h,this.removeEmptyString=f}var Nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){Nn[i]=new ti(i,0,!1,i,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var n=i[0];Nn[n]=new ti(n,1,!1,i[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(i){Nn[i]=new ti(i,2,!1,i.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){Nn[i]=new ti(i,2,!1,i,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){Nn[i]=new ti(i,3,!1,i.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(i){Nn[i]=new ti(i,3,!0,i,null,!1,!1)});["capture","download"].forEach(function(i){Nn[i]=new ti(i,4,!1,i,null,!1,!1)});["cols","rows","size","span"].forEach(function(i){Nn[i]=new ti(i,6,!1,i,null,!1,!1)});["rowSpan","start"].forEach(function(i){Nn[i]=new ti(i,5,!1,i.toLowerCase(),null,!1,!1)});var sw=/[\-:]([a-z])/g;function aw(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var n=i.replace(sw,aw);Nn[n]=new ti(n,1,!1,i,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var n=i.replace(sw,aw);Nn[n]=new ti(n,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(i){var n=i.replace(sw,aw);Nn[n]=new ti(n,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(i){Nn[i]=new ti(i,1,!1,i.toLowerCase(),null,!1,!1)});Nn.xlinkHref=new ti("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(i){Nn[i]=new ti(i,1,!1,i.toLowerCase(),null,!0,!0)});function cw(i,n,o,c){var d=Nn.hasOwnProperty(n)?Nn[n]:null;(d!==null?d.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(YL(n,o,d,c)&&(o=null),c||d===null?qL(n)&&(o===null?i.removeAttribute(n):i.setAttribute(n,""+o)):d.mustUseProperty?i[d.propertyName]=o===null?d.type===3?!1:"":o:(n=d.attributeName,c=d.attributeNamespace,o===null?i.removeAttribute(n):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?i.setAttributeNS(c,n,o):i.setAttribute(n,o))))}var jo=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kf=Symbol.for("react.element"),Sc=Symbol.for("react.portal"),Dc=Symbol.for("react.fragment"),lw=Symbol.for("react.strict_mode"),Nk=Symbol.for("react.profiler"),sS=Symbol.for("react.provider"),aS=Symbol.for("react.context"),dw=Symbol.for("react.forward_ref"),Ok=Symbol.for("react.suspense"),Pk=Symbol.for("react.suspense_list"),uw=Symbol.for("react.memo"),ls=Symbol.for("react.lazy"),cS=Symbol.for("react.offscreen"),c2=Symbol.iterator;function yd(i){return i===null||typeof i!="object"?null:(i=c2&&i[c2]||i["@@iterator"],typeof i=="function"?i:null)}var zt=Object.assign,B0;function Od(i){if(B0===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);B0=n&&n[1]||""}return`
`+B0+i}var L0=!1;function z0(i,n){if(!i||L0)return"";L0=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(v){var c=v}Reflect.construct(i,[],n)}else{try{n.call()}catch(v){c=v}i.call(n.prototype)}else{try{throw Error()}catch(v){c=v}i()}}catch(v){if(v&&c&&typeof v.stack=="string"){for(var d=v.stack.split(`
`),h=c.stack.split(`
`),f=d.length-1,m=h.length-1;1<=f&&0<=m&&d[f]!==h[m];)m--;for(;1<=f&&0<=m;f--,m--)if(d[f]!==h[m]){if(f!==1||m!==1)do if(f--,m--,0>m||d[f]!==h[m]){var k=`
`+d[f].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=f&&0<=m);break}}}finally{L0=!1,Error.prepareStackTrace=o}return(i=i?i.displayName||i.name:"")?Od(i):""}function KL(i){switch(i.tag){case 5:return Od(i.type);case 16:return Od("Lazy");case 13:return Od("Suspense");case 19:return Od("SuspenseList");case 0:case 2:case 15:return i=z0(i.type,!1),i;case 11:return i=z0(i.type.render,!1),i;case 1:return i=z0(i.type,!0),i;default:return""}}function Bk(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case Dc:return"Fragment";case Sc:return"Portal";case Nk:return"Profiler";case lw:return"StrictMode";case Ok:return"Suspense";case Pk:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case aS:return(i.displayName||"Context")+".Consumer";case sS:return(i._context.displayName||"Context")+".Provider";case dw:var n=i.render;return i=i.displayName,i||(i=n.displayName||n.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case uw:return n=i.displayName||null,n!==null?n:Bk(i.type)||"Memo";case ls:n=i._payload,i=i._init;try{return Bk(i(n))}catch{}}return null}function ZL(i){var n=i.type;switch(i.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=n.render,i=i.displayName||i.name||"",n.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bk(n);case 8:return n===lw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Is(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function lS(i){var n=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function QL(i){var n=lS(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,n),c=""+i[n];if(!i.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(i,n,{configurable:!0,get:function(){return d.call(this)},set:function(f){c=""+f,h.call(this,f)}}),Object.defineProperty(i,n,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(f){c=""+f},stopTracking:function(){i._valueTracker=null,delete i[n]}}}}function bf(i){i._valueTracker||(i._valueTracker=QL(i))}function dS(i){if(!i)return!1;var n=i._valueTracker;if(!n)return!0;var o=n.getValue(),c="";return i&&(c=lS(i)?i.checked?"true":"false":i.value),i=c,i!==o?(n.setValue(i),!0):!1}function bp(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Lk(i,n){var o=n.checked;return zt({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??i._wrapperState.initialChecked})}function l2(i,n){var o=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;o=Is(n.value!=null?n.value:o),i._wrapperState={initialChecked:c,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function uS(i,n){n=n.checked,n!=null&&cw(i,"checked",n,!1)}function zk(i,n){uS(i,n);var o=Is(n.value),c=n.type;if(o!=null)c==="number"?(o===0&&i.value===""||i.value!=o)&&(i.value=""+o):i.value!==""+o&&(i.value=""+o);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}n.hasOwnProperty("value")?jk(i,n.type,o):n.hasOwnProperty("defaultValue")&&jk(i,n.type,Is(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(i.defaultChecked=!!n.defaultChecked)}function d2(i,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+i._wrapperState.initialValue,o||n===i.value||(i.value=n),i.defaultValue=n}o=i.name,o!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,o!==""&&(i.name=o)}function jk(i,n,o){(n!=="number"||bp(i.ownerDocument)!==i)&&(o==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+o&&(i.defaultValue=""+o))}var Pd=Array.isArray;function Rc(i,n,o,c){if(i=i.options,n){n={};for(var d=0;d<o.length;d++)n["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=n.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&c&&(i[o].defaultSelected=!0)}else{for(o=""+Is(o),n=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,c&&(i[d].defaultSelected=!0);return}n!==null||i[d].disabled||(n=i[d])}n!==null&&(n.selected=!0)}}function Rk(i,n){if(n.dangerouslySetInnerHTML!=null)throw Error(fe(91));return zt({},n,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function u2(i,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(fe(92));if(Pd(o)){if(1<o.length)throw Error(fe(93));o=o[0]}n=o}n==null&&(n=""),o=n}i._wrapperState={initialValue:Is(o)}}function hS(i,n){var o=Is(n.value),c=Is(n.defaultValue);o!=null&&(o=""+o,o!==i.value&&(i.value=o),n.defaultValue==null&&i.defaultValue!==o&&(i.defaultValue=o)),c!=null&&(i.defaultValue=""+c)}function h2(i){var n=i.textContent;n===i._wrapperState.initialValue&&n!==""&&n!==null&&(i.value=n)}function fS(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fk(i,n){return i==null||i==="http://www.w3.org/1999/xhtml"?fS(n):i==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var wf,pS=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,c,d){MSApp.execUnsafeLocalFunction(function(){return i(n,o,c,d)})}:i}(function(i,n){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=n;else{for(wf=wf||document.createElement("div"),wf.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wf.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;n.firstChild;)i.appendChild(n.firstChild)}});function iu(i,n){if(n){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=n;return}}i.textContent=n}var Vd={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JL=["Webkit","ms","Moz","O"];Object.keys(Vd).forEach(function(i){JL.forEach(function(n){n=n+i.charAt(0).toUpperCase()+i.substring(1),Vd[n]=Vd[i]})});function gS(i,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Vd.hasOwnProperty(i)&&Vd[i]?(""+n).trim():n+"px"}function mS(i,n){i=i.style;for(var o in n)if(n.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=gS(o,n[o],c);o==="float"&&(o="cssFloat"),c?i.setProperty(o,d):i[o]=d}}var XL=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vk(i,n){if(n){if(XL[i]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(fe(137,i));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(fe(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(fe(61))}if(n.style!=null&&typeof n.style!="object")throw Error(fe(62))}}function $k(i,n){if(i.indexOf("-")===-1)return typeof n.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uk=null;function hw(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Hk=null,Fc=null,Vc=null;function f2(i){if(i=Tu(i)){if(typeof Hk!="function")throw Error(fe(280));var n=i.stateNode;n&&(n=lg(n),Hk(i.stateNode,i.type,n))}}function kS(i){Fc?Vc?Vc.push(i):Vc=[i]:Fc=i}function bS(){if(Fc){var i=Fc,n=Vc;if(Vc=Fc=null,f2(i),n)for(i=0;i<n.length;i++)f2(n[i])}}function wS(i,n){return i(n)}function vS(){}var j0=!1;function _S(i,n,o){if(j0)return i(n,o);j0=!0;try{return wS(i,n,o)}finally{j0=!1,(Fc!==null||Vc!==null)&&(vS(),bS())}}function ru(i,n){var o=i.stateNode;if(o===null)return null;var c=lg(o);if(c===null)return null;o=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(fe(231,n,typeof o));return o}var Wk=!1;if(Do)try{var Ad={};Object.defineProperty(Ad,"passive",{get:function(){Wk=!0}}),window.addEventListener("test",Ad,Ad),window.removeEventListener("test",Ad,Ad)}catch{Wk=!1}function e7(i,n,o,c,d,h,f,m,k){var v=Array.prototype.slice.call(arguments,3);try{n.apply(o,v)}catch(w){this.onError(w)}}var $d=!1,wp=null,vp=!1,qk=null,t7={onError:function(i){$d=!0,wp=i}};function n7(i,n,o,c,d,h,f,m,k){$d=!1,wp=null,e7.apply(t7,arguments)}function i7(i,n,o,c,d,h,f,m,k){if(n7.apply(this,arguments),$d){if($d){var v=wp;$d=!1,wp=null}else throw Error(fe(198));vp||(vp=!0,qk=v)}}function Ma(i){var n=i,o=i;if(i.alternate)for(;n.return;)n=n.return;else{i=n;do n=i,n.flags&4098&&(o=n.return),i=n.return;while(i)}return n.tag===3?o:null}function yS(i){if(i.tag===13){var n=i.memoizedState;if(n===null&&(i=i.alternate,i!==null&&(n=i.memoizedState)),n!==null)return n.dehydrated}return null}function p2(i){if(Ma(i)!==i)throw Error(fe(188))}function r7(i){var n=i.alternate;if(!n){if(n=Ma(i),n===null)throw Error(fe(188));return n!==i?null:i}for(var o=i,c=n;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return p2(d),i;if(h===c)return p2(d),n;h=h.sibling}throw Error(fe(188))}if(o.return!==c.return)o=d,c=h;else{for(var f=!1,m=d.child;m;){if(m===o){f=!0,o=d,c=h;break}if(m===c){f=!0,c=d,o=h;break}m=m.sibling}if(!f){for(m=h.child;m;){if(m===o){f=!0,o=h,c=d;break}if(m===c){f=!0,c=h,o=d;break}m=m.sibling}if(!f)throw Error(fe(189))}}if(o.alternate!==c)throw Error(fe(190))}if(o.tag!==3)throw Error(fe(188));return o.stateNode.current===o?i:n}function AS(i){return i=r7(i),i!==null?CS(i):null}function CS(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var n=CS(i);if(n!==null)return n;i=i.sibling}return null}var xS=Ri.unstable_scheduleCallback,g2=Ri.unstable_cancelCallback,o7=Ri.unstable_shouldYield,s7=Ri.unstable_requestPaint,Zt=Ri.unstable_now,a7=Ri.unstable_getCurrentPriorityLevel,fw=Ri.unstable_ImmediatePriority,ES=Ri.unstable_UserBlockingPriority,_p=Ri.unstable_NormalPriority,c7=Ri.unstable_LowPriority,SS=Ri.unstable_IdlePriority,og=null,Xr=null;function l7(i){if(Xr&&typeof Xr.onCommitFiberRoot=="function")try{Xr.onCommitFiberRoot(og,i,void 0,(i.current.flags&128)===128)}catch{}}var Dr=Math.clz32?Math.clz32:h7,d7=Math.log,u7=Math.LN2;function h7(i){return i>>>=0,i===0?32:31-(d7(i)/u7|0)|0}var vf=64,_f=4194304;function Bd(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function yp(i,n){var o=i.pendingLanes;if(o===0)return 0;var c=0,d=i.suspendedLanes,h=i.pingedLanes,f=o&268435455;if(f!==0){var m=f&~d;m!==0?c=Bd(m):(h&=f,h!==0&&(c=Bd(h)))}else f=o&~d,f!==0?c=Bd(f):h!==0&&(c=Bd(h));if(c===0)return 0;if(n!==0&&n!==c&&!(n&d)&&(d=c&-c,h=n&-n,d>=h||d===16&&(h&4194240)!==0))return n;if(c&4&&(c|=o&16),n=i.entangledLanes,n!==0)for(i=i.entanglements,n&=c;0<n;)o=31-Dr(n),d=1<<o,c|=i[o],n&=~d;return c}function f7(i,n){switch(i){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p7(i,n){for(var o=i.suspendedLanes,c=i.pingedLanes,d=i.expirationTimes,h=i.pendingLanes;0<h;){var f=31-Dr(h),m=1<<f,k=d[f];k===-1?(!(m&o)||m&c)&&(d[f]=f7(m,n)):k<=n&&(i.expiredLanes|=m),h&=~m}}function Gk(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function DS(){var i=vf;return vf<<=1,!(vf&4194240)&&(vf=64),i}function R0(i){for(var n=[],o=0;31>o;o++)n.push(i);return n}function Su(i,n,o){i.pendingLanes|=n,n!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,n=31-Dr(n),i[n]=o}function g7(i,n){var o=i.pendingLanes&~n;i.pendingLanes=n,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=n,i.mutableReadLanes&=n,i.entangledLanes&=n,n=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<o;){var d=31-Dr(o),h=1<<d;n[d]=0,c[d]=-1,i[d]=-1,o&=~h}}function pw(i,n){var o=i.entangledLanes|=n;for(i=i.entanglements;o;){var c=31-Dr(o),d=1<<c;d&n|i[c]&n&&(i[c]|=n),o&=~d}}var ht=0;function TS(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var IS,gw,MS,NS,OS,Yk=!1,yf=[],_s=null,ys=null,As=null,ou=new Map,su=new Map,fs=[],m7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function m2(i,n){switch(i){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":ou.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":su.delete(n.pointerId)}}function Cd(i,n,o,c,d,h){return i===null||i.nativeEvent!==h?(i={blockedOn:n,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},n!==null&&(n=Tu(n),n!==null&&gw(n)),i):(i.eventSystemFlags|=c,n=i.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),i)}function k7(i,n,o,c,d){switch(n){case"focusin":return _s=Cd(_s,i,n,o,c,d),!0;case"dragenter":return ys=Cd(ys,i,n,o,c,d),!0;case"mouseover":return As=Cd(As,i,n,o,c,d),!0;case"pointerover":var h=d.pointerId;return ou.set(h,Cd(ou.get(h)||null,i,n,o,c,d)),!0;case"gotpointercapture":return h=d.pointerId,su.set(h,Cd(su.get(h)||null,i,n,o,c,d)),!0}return!1}function PS(i){var n=ka(i.target);if(n!==null){var o=Ma(n);if(o!==null){if(n=o.tag,n===13){if(n=yS(o),n!==null){i.blockedOn=n,OS(i.priority,function(){MS(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Xf(i){if(i.blockedOn!==null)return!1;for(var n=i.targetContainers;0<n.length;){var o=Kk(i.domEventName,i.eventSystemFlags,n[0],i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);Uk=c,o.target.dispatchEvent(c),Uk=null}else return n=Tu(o),n!==null&&gw(n),i.blockedOn=o,!1;n.shift()}return!0}function k2(i,n,o){Xf(i)&&o.delete(n)}function b7(){Yk=!1,_s!==null&&Xf(_s)&&(_s=null),ys!==null&&Xf(ys)&&(ys=null),As!==null&&Xf(As)&&(As=null),ou.forEach(k2),su.forEach(k2)}function xd(i,n){i.blockedOn===n&&(i.blockedOn=null,Yk||(Yk=!0,Ri.unstable_scheduleCallback(Ri.unstable_NormalPriority,b7)))}function au(i){function n(d){return xd(d,i)}if(0<yf.length){xd(yf[0],i);for(var o=1;o<yf.length;o++){var c=yf[o];c.blockedOn===i&&(c.blockedOn=null)}}for(_s!==null&&xd(_s,i),ys!==null&&xd(ys,i),As!==null&&xd(As,i),ou.forEach(n),su.forEach(n),o=0;o<fs.length;o++)c=fs[o],c.blockedOn===i&&(c.blockedOn=null);for(;0<fs.length&&(o=fs[0],o.blockedOn===null);)PS(o),o.blockedOn===null&&fs.shift()}var $c=jo.ReactCurrentBatchConfig,Ap=!0;function w7(i,n,o,c){var d=ht,h=$c.transition;$c.transition=null;try{ht=1,mw(i,n,o,c)}finally{ht=d,$c.transition=h}}function v7(i,n,o,c){var d=ht,h=$c.transition;$c.transition=null;try{ht=4,mw(i,n,o,c)}finally{ht=d,$c.transition=h}}function mw(i,n,o,c){if(Ap){var d=Kk(i,n,o,c);if(d===null)K0(i,n,c,Cp,o),m2(i,c);else if(k7(d,i,n,o,c))c.stopPropagation();else if(m2(i,c),n&4&&-1<m7.indexOf(i)){for(;d!==null;){var h=Tu(d);if(h!==null&&IS(h),h=Kk(i,n,o,c),h===null&&K0(i,n,c,Cp,o),h===d)break;d=h}d!==null&&c.stopPropagation()}else K0(i,n,c,null,o)}}var Cp=null;function Kk(i,n,o,c){if(Cp=null,i=hw(c),i=ka(i),i!==null)if(n=Ma(i),n===null)i=null;else if(o=n.tag,o===13){if(i=yS(n),i!==null)return i;i=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;i=null}else n!==i&&(i=null);return Cp=i,null}function BS(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a7()){case fw:return 1;case ES:return 4;case _p:case c7:return 16;case SS:return 536870912;default:return 16}default:return 16}}var bs=null,kw=null,ep=null;function LS(){if(ep)return ep;var i,n=kw,o=n.length,c,d="value"in bs?bs.value:bs.textContent,h=d.length;for(i=0;i<o&&n[i]===d[i];i++);var f=o-i;for(c=1;c<=f&&n[o-c]===d[h-c];c++);return ep=d.slice(i,1<c?1-c:void 0)}function tp(i){var n=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&n===13&&(i=13)):i=n,i===10&&(i=13),32<=i||i===13?i:0}function Af(){return!0}function b2(){return!1}function Vi(i){function n(o,c,d,h,f){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=f,this.currentTarget=null;for(var m in i)i.hasOwnProperty(m)&&(o=i[m],this[m]=o?o(h):h[m]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Af:b2,this.isPropagationStopped=b2,this}return zt(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Af)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Af)},persist:function(){},isPersistent:Af}),n}var rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bw=Vi(rl),Du=zt({},rl,{view:0,detail:0}),_7=Vi(Du),F0,V0,Ed,sg=zt({},Du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ww,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ed&&(Ed&&i.type==="mousemove"?(F0=i.screenX-Ed.screenX,V0=i.screenY-Ed.screenY):V0=F0=0,Ed=i),F0)},movementY:function(i){return"movementY"in i?i.movementY:V0}}),w2=Vi(sg),y7=zt({},sg,{dataTransfer:0}),A7=Vi(y7),C7=zt({},Du,{relatedTarget:0}),$0=Vi(C7),x7=zt({},rl,{animationName:0,elapsedTime:0,pseudoElement:0}),E7=Vi(x7),S7=zt({},rl,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),D7=Vi(S7),T7=zt({},rl,{data:0}),v2=Vi(T7),I7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O7(i){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(i):(i=N7[i])?!!n[i]:!1}function ww(){return O7}var P7=zt({},Du,{key:function(i){if(i.key){var n=I7[i.key]||i.key;if(n!=="Unidentified")return n}return i.type==="keypress"?(i=tp(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?M7[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ww,charCode:function(i){return i.type==="keypress"?tp(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?tp(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),B7=Vi(P7),L7=zt({},sg,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_2=Vi(L7),z7=zt({},Du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ww}),j7=Vi(z7),R7=zt({},rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),F7=Vi(R7),V7=zt({},sg,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),$7=Vi(V7),U7=[9,13,27,32],vw=Do&&"CompositionEvent"in window,Ud=null;Do&&"documentMode"in document&&(Ud=document.documentMode);var H7=Do&&"TextEvent"in window&&!Ud,zS=Do&&(!vw||Ud&&8<Ud&&11>=Ud),y2=String.fromCharCode(32),A2=!1;function jS(i,n){switch(i){case"keyup":return U7.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function RS(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Tc=!1;function W7(i,n){switch(i){case"compositionend":return RS(n);case"keypress":return n.which!==32?null:(A2=!0,y2);case"textInput":return i=n.data,i===y2&&A2?null:i;default:return null}}function q7(i,n){if(Tc)return i==="compositionend"||!vw&&jS(i,n)?(i=LS(),ep=kw=bs=null,Tc=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zS&&n.locale!=="ko"?null:n.data;default:return null}}var G7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function C2(i){var n=i&&i.nodeName&&i.nodeName.toLowerCase();return n==="input"?!!G7[i.type]:n==="textarea"}function FS(i,n,o,c){kS(c),n=xp(n,"onChange"),0<n.length&&(o=new bw("onChange","change",null,o,c),i.push({event:o,listeners:n}))}var Hd=null,cu=null;function Y7(i){QS(i,0)}function ag(i){var n=Nc(i);if(dS(n))return i}function K7(i,n){if(i==="change")return n}var VS=!1;if(Do){var U0;if(Do){var H0="oninput"in document;if(!H0){var x2=document.createElement("div");x2.setAttribute("oninput","return;"),H0=typeof x2.oninput=="function"}U0=H0}else U0=!1;VS=U0&&(!document.documentMode||9<document.documentMode)}function E2(){Hd&&(Hd.detachEvent("onpropertychange",$S),cu=Hd=null)}function $S(i){if(i.propertyName==="value"&&ag(cu)){var n=[];FS(n,cu,i,hw(i)),_S(Y7,n)}}function Z7(i,n,o){i==="focusin"?(E2(),Hd=n,cu=o,Hd.attachEvent("onpropertychange",$S)):i==="focusout"&&E2()}function Q7(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ag(cu)}function J7(i,n){if(i==="click")return ag(n)}function X7(i,n){if(i==="input"||i==="change")return ag(n)}function ez(i,n){return i===n&&(i!==0||1/i===1/n)||i!==i&&n!==n}var Ir=typeof Object.is=="function"?Object.is:ez;function lu(i,n){if(Ir(i,n))return!0;if(typeof i!="object"||i===null||typeof n!="object"||n===null)return!1;var o=Object.keys(i),c=Object.keys(n);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!Mk.call(n,d)||!Ir(i[d],n[d]))return!1}return!0}function S2(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function D2(i,n){var o=S2(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=n&&c>=n)return{node:o,offset:n-i};i=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=S2(o)}}function US(i,n){return i&&n?i===n?!0:i&&i.nodeType===3?!1:n&&n.nodeType===3?US(i,n.parentNode):"contains"in i?i.contains(n):i.compareDocumentPosition?!!(i.compareDocumentPosition(n)&16):!1:!1}function HS(){for(var i=window,n=bp();n instanceof i.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)i=n.contentWindow;else break;n=bp(i.document)}return n}function _w(i){var n=i&&i.nodeName&&i.nodeName.toLowerCase();return n&&(n==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||n==="textarea"||i.contentEditable==="true")}function tz(i){var n=HS(),o=i.focusedElem,c=i.selectionRange;if(n!==o&&o&&o.ownerDocument&&US(o.ownerDocument.documentElement,o)){if(c!==null&&_w(o)){if(n=c.start,i=c.end,i===void 0&&(i=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(i,o.value.length);else if(i=(n=o.ownerDocument||document)&&n.defaultView||window,i.getSelection){i=i.getSelection();var d=o.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!i.extend&&h>c&&(d=c,c=h,h=d),d=D2(o,h);var f=D2(o,c);d&&f&&(i.rangeCount!==1||i.anchorNode!==d.node||i.anchorOffset!==d.offset||i.focusNode!==f.node||i.focusOffset!==f.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),i.removeAllRanges(),h>c?(i.addRange(n),i.extend(f.node,f.offset)):(n.setEnd(f.node,f.offset),i.addRange(n)))}}for(n=[],i=o;i=i.parentNode;)i.nodeType===1&&n.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)i=n[o],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var nz=Do&&"documentMode"in document&&11>=document.documentMode,Ic=null,Zk=null,Wd=null,Qk=!1;function T2(i,n,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Qk||Ic==null||Ic!==bp(c)||(c=Ic,"selectionStart"in c&&_w(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Wd&&lu(Wd,c)||(Wd=c,c=xp(Zk,"onSelect"),0<c.length&&(n=new bw("onSelect","select",null,n,o),i.push({event:n,listeners:c}),n.target=Ic)))}function Cf(i,n){var o={};return o[i.toLowerCase()]=n.toLowerCase(),o["Webkit"+i]="webkit"+n,o["Moz"+i]="moz"+n,o}var Mc={animationend:Cf("Animation","AnimationEnd"),animationiteration:Cf("Animation","AnimationIteration"),animationstart:Cf("Animation","AnimationStart"),transitionend:Cf("Transition","TransitionEnd")},W0={},WS={};Do&&(WS=document.createElement("div").style,"AnimationEvent"in window||(delete Mc.animationend.animation,delete Mc.animationiteration.animation,delete Mc.animationstart.animation),"TransitionEvent"in window||delete Mc.transitionend.transition);function cg(i){if(W0[i])return W0[i];if(!Mc[i])return i;var n=Mc[i],o;for(o in n)if(n.hasOwnProperty(o)&&o in WS)return W0[i]=n[o];return i}var qS=cg("animationend"),GS=cg("animationiteration"),YS=cg("animationstart"),KS=cg("transitionend"),ZS=new Map,I2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ls(i,n){ZS.set(i,n),Ia(n,[i])}for(var q0=0;q0<I2.length;q0++){var G0=I2[q0],iz=G0.toLowerCase(),rz=G0[0].toUpperCase()+G0.slice(1);Ls(iz,"on"+rz)}Ls(qS,"onAnimationEnd");Ls(GS,"onAnimationIteration");Ls(YS,"onAnimationStart");Ls("dblclick","onDoubleClick");Ls("focusin","onFocus");Ls("focusout","onBlur");Ls(KS,"onTransitionEnd");Gc("onMouseEnter",["mouseout","mouseover"]);Gc("onMouseLeave",["mouseout","mouseover"]);Gc("onPointerEnter",["pointerout","pointerover"]);Gc("onPointerLeave",["pointerout","pointerover"]);Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ld="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ld));function M2(i,n,o){var c=i.type||"unknown-event";i.currentTarget=o,i7(c,n,void 0,i),i.currentTarget=null}function QS(i,n){n=(n&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],d=c.event;c=c.listeners;e:{var h=void 0;if(n)for(var f=c.length-1;0<=f;f--){var m=c[f],k=m.instance,v=m.currentTarget;if(m=m.listener,k!==h&&d.isPropagationStopped())break e;M2(d,m,v),h=k}else for(f=0;f<c.length;f++){if(m=c[f],k=m.instance,v=m.currentTarget,m=m.listener,k!==h&&d.isPropagationStopped())break e;M2(d,m,v),h=k}}}if(vp)throw i=qk,vp=!1,qk=null,i}function Ct(i,n){var o=n[nb];o===void 0&&(o=n[nb]=new Set);var c=i+"__bubble";o.has(c)||(JS(n,i,2,!1),o.add(c))}function Y0(i,n,o){var c=0;n&&(c|=4),JS(o,i,c,n)}var xf="_reactListening"+Math.random().toString(36).slice(2);function du(i){if(!i[xf]){i[xf]=!0,oS.forEach(function(o){o!=="selectionchange"&&(oz.has(o)||Y0(o,!1,i),Y0(o,!0,i))});var n=i.nodeType===9?i:i.ownerDocument;n===null||n[xf]||(n[xf]=!0,Y0("selectionchange",!1,n))}}function JS(i,n,o,c){switch(BS(n)){case 1:var d=w7;break;case 4:d=v7;break;default:d=mw}o=d.bind(null,n,o,i),d=void 0,!Wk||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),c?d!==void 0?i.addEventListener(n,o,{capture:!0,passive:d}):i.addEventListener(n,o,!0):d!==void 0?i.addEventListener(n,o,{passive:d}):i.addEventListener(n,o,!1)}function K0(i,n,o,c,d){var h=c;if(!(n&1)&&!(n&2)&&c!==null)e:for(;;){if(c===null)return;var f=c.tag;if(f===3||f===4){var m=c.stateNode.containerInfo;if(m===d||m.nodeType===8&&m.parentNode===d)break;if(f===4)for(f=c.return;f!==null;){var k=f.tag;if((k===3||k===4)&&(k=f.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;f=f.return}for(;m!==null;){if(f=ka(m),f===null)return;if(k=f.tag,k===5||k===6){c=h=f;continue e}m=m.parentNode}}c=c.return}_S(function(){var v=h,w=hw(o),y=[];e:{var C=ZS.get(i);if(C!==void 0){var E=bw,D=i;switch(i){case"keypress":if(tp(o)===0)break e;case"keydown":case"keyup":E=B7;break;case"focusin":D="focus",E=$0;break;case"focusout":D="blur",E=$0;break;case"beforeblur":case"afterblur":E=$0;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=w2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=A7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=j7;break;case qS:case GS:case YS:E=E7;break;case KS:E=F7;break;case"scroll":E=_7;break;case"wheel":E=$7;break;case"copy":case"cut":case"paste":E=D7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=_2}var I=(n&4)!==0,j=!I&&i==="scroll",P=I?C!==null?C+"Capture":null:C;I=[];for(var L=v,S;L!==null;){S=L;var $=S.stateNode;if(S.tag===5&&$!==null&&(S=$,P!==null&&($=ru(L,P),$!=null&&I.push(uu(L,$,S)))),j)break;L=L.return}0<I.length&&(C=new E(C,D,null,o,w),y.push({event:C,listeners:I}))}}if(!(n&7)){e:{if(C=i==="mouseover"||i==="pointerover",E=i==="mouseout"||i==="pointerout",C&&o!==Uk&&(D=o.relatedTarget||o.fromElement)&&(ka(D)||D[To]))break e;if((E||C)&&(C=w.window===w?w:(C=w.ownerDocument)?C.defaultView||C.parentWindow:window,E?(D=o.relatedTarget||o.toElement,E=v,D=D?ka(D):null,D!==null&&(j=Ma(D),D!==j||D.tag!==5&&D.tag!==6)&&(D=null)):(E=null,D=v),E!==D)){if(I=w2,$="onMouseLeave",P="onMouseEnter",L="mouse",(i==="pointerout"||i==="pointerover")&&(I=_2,$="onPointerLeave",P="onPointerEnter",L="pointer"),j=E==null?C:Nc(E),S=D==null?C:Nc(D),C=new I($,L+"leave",E,o,w),C.target=j,C.relatedTarget=S,$=null,ka(w)===v&&(I=new I(P,L+"enter",D,o,w),I.target=S,I.relatedTarget=j,$=I),j=$,E&&D)t:{for(I=E,P=D,L=0,S=I;S;S=gc(S))L++;for(S=0,$=P;$;$=gc($))S++;for(;0<L-S;)I=gc(I),L--;for(;0<S-L;)P=gc(P),S--;for(;L--;){if(I===P||P!==null&&I===P.alternate)break t;I=gc(I),P=gc(P)}I=null}else I=null;E!==null&&N2(y,C,E,I,!1),D!==null&&j!==null&&N2(y,j,D,I,!0)}}e:{if(C=v?Nc(v):window,E=C.nodeName&&C.nodeName.toLowerCase(),E==="select"||E==="input"&&C.type==="file")var H=K7;else if(C2(C))if(VS)H=X7;else{H=Q7;var J=Z7}else(E=C.nodeName)&&E.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(H=J7);if(H&&(H=H(i,v))){FS(y,H,o,w);break e}J&&J(i,C,v),i==="focusout"&&(J=C._wrapperState)&&J.controlled&&C.type==="number"&&jk(C,"number",C.value)}switch(J=v?Nc(v):window,i){case"focusin":(C2(J)||J.contentEditable==="true")&&(Ic=J,Zk=v,Wd=null);break;case"focusout":Wd=Zk=Ic=null;break;case"mousedown":Qk=!0;break;case"contextmenu":case"mouseup":case"dragend":Qk=!1,T2(y,o,w);break;case"selectionchange":if(nz)break;case"keydown":case"keyup":T2(y,o,w)}var Z;if(vw)e:{switch(i){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Tc?jS(i,o)&&(ee="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(zS&&o.locale!=="ko"&&(Tc||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Tc&&(Z=LS()):(bs=w,kw="value"in bs?bs.value:bs.textContent,Tc=!0)),J=xp(v,ee),0<J.length&&(ee=new v2(ee,i,null,o,w),y.push({event:ee,listeners:J}),Z?ee.data=Z:(Z=RS(o),Z!==null&&(ee.data=Z)))),(Z=H7?W7(i,o):q7(i,o))&&(v=xp(v,"onBeforeInput"),0<v.length&&(w=new v2("onBeforeInput","beforeinput",null,o,w),y.push({event:w,listeners:v}),w.data=Z))}QS(y,n)})}function uu(i,n,o){return{instance:i,listener:n,currentTarget:o}}function xp(i,n){for(var o=n+"Capture",c=[];i!==null;){var d=i,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=ru(i,o),h!=null&&c.unshift(uu(i,h,d)),h=ru(i,n),h!=null&&c.push(uu(i,h,d))),i=i.return}return c}function gc(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function N2(i,n,o,c,d){for(var h=n._reactName,f=[];o!==null&&o!==c;){var m=o,k=m.alternate,v=m.stateNode;if(k!==null&&k===c)break;m.tag===5&&v!==null&&(m=v,d?(k=ru(o,h),k!=null&&f.unshift(uu(o,k,m))):d||(k=ru(o,h),k!=null&&f.push(uu(o,k,m)))),o=o.return}f.length!==0&&i.push({event:n,listeners:f})}var sz=/\r\n?/g,az=/\u0000|\uFFFD/g;function O2(i){return(typeof i=="string"?i:""+i).replace(sz,`
`).replace(az,"")}function Ef(i,n,o){if(n=O2(n),O2(i)!==n&&o)throw Error(fe(425))}function Ep(){}var Jk=null,Xk=null;function eb(i,n){return i==="textarea"||i==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var tb=typeof setTimeout=="function"?setTimeout:void 0,cz=typeof clearTimeout=="function"?clearTimeout:void 0,P2=typeof Promise=="function"?Promise:void 0,lz=typeof queueMicrotask=="function"?queueMicrotask:typeof P2<"u"?function(i){return P2.resolve(null).then(i).catch(dz)}:tb;function dz(i){setTimeout(function(){throw i})}function Z0(i,n){var o=n,c=0;do{var d=o.nextSibling;if(i.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){i.removeChild(d),au(n);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);au(n)}function Cs(i){for(;i!=null;i=i.nextSibling){var n=i.nodeType;if(n===1||n===3)break;if(n===8){if(n=i.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return i}function B2(i){i=i.previousSibling;for(var n=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return i;n--}else o==="/$"&&n++}i=i.previousSibling}return null}var ol=Math.random().toString(36).slice(2),Zr="__reactFiber$"+ol,hu="__reactProps$"+ol,To="__reactContainer$"+ol,nb="__reactEvents$"+ol,uz="__reactListeners$"+ol,hz="__reactHandles$"+ol;function ka(i){var n=i[Zr];if(n)return n;for(var o=i.parentNode;o;){if(n=o[To]||o[Zr]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(i=B2(i);i!==null;){if(o=i[Zr])return o;i=B2(i)}return n}i=o,o=i.parentNode}return null}function Tu(i){return i=i[Zr]||i[To],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Nc(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(fe(33))}function lg(i){return i[hu]||null}var ib=[],Oc=-1;function zs(i){return{current:i}}function Et(i){0>Oc||(i.current=ib[Oc],ib[Oc]=null,Oc--)}function _t(i,n){Oc++,ib[Oc]=i.current,i.current=n}var Ms={},Un=zs(Ms),mi=zs(!1),Ca=Ms;function Yc(i,n){var o=i.type.contextTypes;if(!o)return Ms;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=n[h];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=n,i.__reactInternalMemoizedMaskedChildContext=d),d}function ki(i){return i=i.childContextTypes,i!=null}function Sp(){Et(mi),Et(Un)}function L2(i,n,o){if(Un.current!==Ms)throw Error(fe(168));_t(Un,n),_t(mi,o)}function XS(i,n,o){var c=i.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in n))throw Error(fe(108,ZL(i)||"Unknown",d));return zt({},o,c)}function Dp(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ms,Ca=Un.current,_t(Un,i),_t(mi,mi.current),!0}function z2(i,n,o){var c=i.stateNode;if(!c)throw Error(fe(169));o?(i=XS(i,n,Ca),c.__reactInternalMemoizedMergedChildContext=i,Et(mi),Et(Un),_t(Un,i)):Et(mi),_t(mi,o)}var yo=null,dg=!1,Q0=!1;function eD(i){yo===null?yo=[i]:yo.push(i)}function fz(i){dg=!0,eD(i)}function js(){if(!Q0&&yo!==null){Q0=!0;var i=0,n=ht;try{var o=yo;for(ht=1;i<o.length;i++){var c=o[i];do c=c(!0);while(c!==null)}yo=null,dg=!1}catch(d){throw yo!==null&&(yo=yo.slice(i+1)),xS(fw,js),d}finally{ht=n,Q0=!1}}return null}var Pc=[],Bc=0,Tp=null,Ip=0,tr=[],nr=0,xa=null,Co=1,xo="";function ua(i,n){Pc[Bc++]=Ip,Pc[Bc++]=Tp,Tp=i,Ip=n}function tD(i,n,o){tr[nr++]=Co,tr[nr++]=xo,tr[nr++]=xa,xa=i;var c=Co;i=xo;var d=32-Dr(c)-1;c&=~(1<<d),o+=1;var h=32-Dr(n)+d;if(30<h){var f=d-d%5;h=(c&(1<<f)-1).toString(32),c>>=f,d-=f,Co=1<<32-Dr(n)+d|o<<d|c,xo=h+i}else Co=1<<h|o<<d|c,xo=i}function yw(i){i.return!==null&&(ua(i,1),tD(i,1,0))}function Aw(i){for(;i===Tp;)Tp=Pc[--Bc],Pc[Bc]=null,Ip=Pc[--Bc],Pc[Bc]=null;for(;i===xa;)xa=tr[--nr],tr[nr]=null,xo=tr[--nr],tr[nr]=null,Co=tr[--nr],tr[nr]=null}var Li=null,Bi=null,Tt=!1,Er=null;function nD(i,n){var o=rr(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=i,n=i.deletions,n===null?(i.deletions=[o],i.flags|=16):n.push(o)}function j2(i,n){switch(i.tag){case 5:var o=i.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(i.stateNode=n,Li=i,Bi=Cs(n.firstChild),!0):!1;case 6:return n=i.pendingProps===""||n.nodeType!==3?null:n,n!==null?(i.stateNode=n,Li=i,Bi=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=xa!==null?{id:Co,overflow:xo}:null,i.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=rr(18,null,null,0),o.stateNode=n,o.return=i,i.child=o,Li=i,Bi=null,!0):!1;default:return!1}}function rb(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ob(i){if(Tt){var n=Bi;if(n){var o=n;if(!j2(i,n)){if(rb(i))throw Error(fe(418));n=Cs(o.nextSibling);var c=Li;n&&j2(i,n)?nD(c,o):(i.flags=i.flags&-4097|2,Tt=!1,Li=i)}}else{if(rb(i))throw Error(fe(418));i.flags=i.flags&-4097|2,Tt=!1,Li=i}}}function R2(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Li=i}function Sf(i){if(i!==Li)return!1;if(!Tt)return R2(i),Tt=!0,!1;var n;if((n=i.tag!==3)&&!(n=i.tag!==5)&&(n=i.type,n=n!=="head"&&n!=="body"&&!eb(i.type,i.memoizedProps)),n&&(n=Bi)){if(rb(i))throw iD(),Error(fe(418));for(;n;)nD(i,n),n=Cs(n.nextSibling)}if(R2(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(fe(317));e:{for(i=i.nextSibling,n=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"){if(n===0){Bi=Cs(i.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}i=i.nextSibling}Bi=null}}else Bi=Li?Cs(i.stateNode.nextSibling):null;return!0}function iD(){for(var i=Bi;i;)i=Cs(i.nextSibling)}function Kc(){Bi=Li=null,Tt=!1}function Cw(i){Er===null?Er=[i]:Er.push(i)}var pz=jo.ReactCurrentBatchConfig;function Ar(i,n){if(i&&i.defaultProps){n=zt({},n),i=i.defaultProps;for(var o in i)n[o]===void 0&&(n[o]=i[o]);return n}return n}var Mp=zs(null),Np=null,Lc=null,xw=null;function Ew(){xw=Lc=Np=null}function Sw(i){var n=Mp.current;Et(Mp),i._currentValue=n}function sb(i,n,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&n)!==n?(i.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),i===o)break;i=i.return}}function Uc(i,n){Np=i,xw=Lc=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&n&&(gi=!0),i.firstContext=null)}function ar(i){var n=i._currentValue;if(xw!==i)if(i={context:i,memoizedValue:n,next:null},Lc===null){if(Np===null)throw Error(fe(308));Lc=i,Np.dependencies={lanes:0,firstContext:i}}else Lc=Lc.next=i;return n}var ba=null;function Dw(i){ba===null?ba=[i]:ba.push(i)}function rD(i,n,o,c){var d=n.interleaved;return d===null?(o.next=o,Dw(n)):(o.next=d.next,d.next=o),n.interleaved=o,Io(i,c)}function Io(i,n){i.lanes|=n;var o=i.alternate;for(o!==null&&(o.lanes|=n),o=i,i=i.return;i!==null;)i.childLanes|=n,o=i.alternate,o!==null&&(o.childLanes|=n),o=i,i=i.return;return o.tag===3?o.stateNode:null}var ds=!1;function Tw(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oD(i,n){i=i.updateQueue,n.updateQueue===i&&(n.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function So(i,n){return{eventTime:i,lane:n,tag:0,payload:null,callback:null,next:null}}function xs(i,n,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,Qe&2){var d=c.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),c.pending=n,Io(i,o)}return d=c.interleaved,d===null?(n.next=n,Dw(c)):(n.next=d.next,d.next=n),c.interleaved=n,Io(i,o)}function np(i,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var c=n.lanes;c&=i.pendingLanes,o|=c,n.lanes=o,pw(i,o)}}function F2(i,n){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var f={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=f:h=h.next=f,o=o.next}while(o!==null);h===null?d=h=n:h=h.next=n}else d=h=n;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=n:i.next=n,o.lastBaseUpdate=n}function Op(i,n,o,c){var d=i.updateQueue;ds=!1;var h=d.firstBaseUpdate,f=d.lastBaseUpdate,m=d.shared.pending;if(m!==null){d.shared.pending=null;var k=m,v=k.next;k.next=null,f===null?h=v:f.next=v,f=k;var w=i.alternate;w!==null&&(w=w.updateQueue,m=w.lastBaseUpdate,m!==f&&(m===null?w.firstBaseUpdate=v:m.next=v,w.lastBaseUpdate=k))}if(h!==null){var y=d.baseState;f=0,w=v=k=null,m=h;do{var C=m.lane,E=m.eventTime;if((c&C)===C){w!==null&&(w=w.next={eventTime:E,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var D=i,I=m;switch(C=n,E=o,I.tag){case 1:if(D=I.payload,typeof D=="function"){y=D.call(E,y,C);break e}y=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=I.payload,C=typeof D=="function"?D.call(E,y,C):D,C==null)break e;y=zt({},y,C);break e;case 2:ds=!0}}m.callback!==null&&m.lane!==0&&(i.flags|=64,C=d.effects,C===null?d.effects=[m]:C.push(m))}else E={eventTime:E,lane:C,tag:m.tag,payload:m.payload,callback:m.callback,next:null},w===null?(v=w=E,k=y):w=w.next=E,f|=C;if(m=m.next,m===null){if(m=d.shared.pending,m===null)break;C=m,m=C.next,C.next=null,d.lastBaseUpdate=C,d.shared.pending=null}}while(1);if(w===null&&(k=y),d.baseState=k,d.firstBaseUpdate=v,d.lastBaseUpdate=w,n=d.shared.interleaved,n!==null){d=n;do f|=d.lane,d=d.next;while(d!==n)}else h===null&&(d.shared.lanes=0);Sa|=f,i.lanes=f,i.memoizedState=y}}function V2(i,n,o){if(i=n.effects,n.effects=null,i!==null)for(n=0;n<i.length;n++){var c=i[n],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(fe(191,d));d.call(c)}}}var sD=new rS.Component().refs;function ab(i,n,o,c){n=i.memoizedState,o=o(c,n),o=o==null?n:zt({},n,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var ug={isMounted:function(i){return(i=i._reactInternals)?Ma(i)===i:!1},enqueueSetState:function(i,n,o){i=i._reactInternals;var c=Xn(),d=Ss(i),h=So(c,d);h.payload=n,o!=null&&(h.callback=o),n=xs(i,h,d),n!==null&&(Tr(n,i,d,c),np(n,i,d))},enqueueReplaceState:function(i,n,o){i=i._reactInternals;var c=Xn(),d=Ss(i),h=So(c,d);h.tag=1,h.payload=n,o!=null&&(h.callback=o),n=xs(i,h,d),n!==null&&(Tr(n,i,d,c),np(n,i,d))},enqueueForceUpdate:function(i,n){i=i._reactInternals;var o=Xn(),c=Ss(i),d=So(o,c);d.tag=2,n!=null&&(d.callback=n),n=xs(i,d,c),n!==null&&(Tr(n,i,c,o),np(n,i,c))}};function $2(i,n,o,c,d,h,f){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,h,f):n.prototype&&n.prototype.isPureReactComponent?!lu(o,c)||!lu(d,h):!0}function aD(i,n,o){var c=!1,d=Ms,h=n.contextType;return typeof h=="object"&&h!==null?h=ar(h):(d=ki(n)?Ca:Un.current,c=n.contextTypes,h=(c=c!=null)?Yc(i,d):Ms),n=new n(o,h),i.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ug,i.stateNode=n,n._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=d,i.__reactInternalMemoizedMaskedChildContext=h),n}function U2(i,n,o,c){i=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,c),n.state!==i&&ug.enqueueReplaceState(n,n.state,null)}function cb(i,n,o,c){var d=i.stateNode;d.props=o,d.state=i.memoizedState,d.refs=sD,Tw(i);var h=n.contextType;typeof h=="object"&&h!==null?d.context=ar(h):(h=ki(n)?Ca:Un.current,d.context=Yc(i,h)),d.state=i.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(ab(i,n,h,o),d.state=i.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&ug.enqueueReplaceState(d,d.state,null),Op(i,o,d,c),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308)}function Sd(i,n,o){if(i=o.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(fe(309));var c=o.stateNode}if(!c)throw Error(fe(147,i));var d=c,h=""+i;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(f){var m=d.refs;m===sD&&(m=d.refs={}),f===null?delete m[h]:m[h]=f},n._stringRef=h,n)}if(typeof i!="string")throw Error(fe(284));if(!o._owner)throw Error(fe(290,i))}return i}function Df(i,n){throw i=Object.prototype.toString.call(n),Error(fe(31,i==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":i))}function H2(i){var n=i._init;return n(i._payload)}function cD(i){function n(P,L){if(i){var S=P.deletions;S===null?(P.deletions=[L],P.flags|=16):S.push(L)}}function o(P,L){if(!i)return null;for(;L!==null;)n(P,L),L=L.sibling;return null}function c(P,L){for(P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function d(P,L){return P=Ds(P,L),P.index=0,P.sibling=null,P}function h(P,L,S){return P.index=S,i?(S=P.alternate,S!==null?(S=S.index,S<L?(P.flags|=2,L):S):(P.flags|=2,L)):(P.flags|=1048576,L)}function f(P){return i&&P.alternate===null&&(P.flags|=2),P}function m(P,L,S,$){return L===null||L.tag!==6?(L=rk(S,P.mode,$),L.return=P,L):(L=d(L,S),L.return=P,L)}function k(P,L,S,$){var H=S.type;return H===Dc?w(P,L,S.props.children,$,S.key):L!==null&&(L.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ls&&H2(H)===L.type)?($=d(L,S.props),$.ref=Sd(P,L,S),$.return=P,$):($=cp(S.type,S.key,S.props,null,P.mode,$),$.ref=Sd(P,L,S),$.return=P,$)}function v(P,L,S,$){return L===null||L.tag!==4||L.stateNode.containerInfo!==S.containerInfo||L.stateNode.implementation!==S.implementation?(L=ok(S,P.mode,$),L.return=P,L):(L=d(L,S.children||[]),L.return=P,L)}function w(P,L,S,$,H){return L===null||L.tag!==7?(L=ya(S,P.mode,$,H),L.return=P,L):(L=d(L,S),L.return=P,L)}function y(P,L,S){if(typeof L=="string"&&L!==""||typeof L=="number")return L=rk(""+L,P.mode,S),L.return=P,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case kf:return S=cp(L.type,L.key,L.props,null,P.mode,S),S.ref=Sd(P,null,L),S.return=P,S;case Sc:return L=ok(L,P.mode,S),L.return=P,L;case ls:var $=L._init;return y(P,$(L._payload),S)}if(Pd(L)||yd(L))return L=ya(L,P.mode,S,null),L.return=P,L;Df(P,L)}return null}function C(P,L,S,$){var H=L!==null?L.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return H!==null?null:m(P,L,""+S,$);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case kf:return S.key===H?k(P,L,S,$):null;case Sc:return S.key===H?v(P,L,S,$):null;case ls:return H=S._init,C(P,L,H(S._payload),$)}if(Pd(S)||yd(S))return H!==null?null:w(P,L,S,$,null);Df(P,S)}return null}function E(P,L,S,$,H){if(typeof $=="string"&&$!==""||typeof $=="number")return P=P.get(S)||null,m(L,P,""+$,H);if(typeof $=="object"&&$!==null){switch($.$$typeof){case kf:return P=P.get($.key===null?S:$.key)||null,k(L,P,$,H);case Sc:return P=P.get($.key===null?S:$.key)||null,v(L,P,$,H);case ls:var J=$._init;return E(P,L,S,J($._payload),H)}if(Pd($)||yd($))return P=P.get(S)||null,w(L,P,$,H,null);Df(L,$)}return null}function D(P,L,S,$){for(var H=null,J=null,Z=L,ee=L=0,de=null;Z!==null&&ee<S.length;ee++){Z.index>ee?(de=Z,Z=null):de=Z.sibling;var se=C(P,Z,S[ee],$);if(se===null){Z===null&&(Z=de);break}i&&Z&&se.alternate===null&&n(P,Z),L=h(se,L,ee),J===null?H=se:J.sibling=se,J=se,Z=de}if(ee===S.length)return o(P,Z),Tt&&ua(P,ee),H;if(Z===null){for(;ee<S.length;ee++)Z=y(P,S[ee],$),Z!==null&&(L=h(Z,L,ee),J===null?H=Z:J.sibling=Z,J=Z);return Tt&&ua(P,ee),H}for(Z=c(P,Z);ee<S.length;ee++)de=E(Z,P,ee,S[ee],$),de!==null&&(i&&de.alternate!==null&&Z.delete(de.key===null?ee:de.key),L=h(de,L,ee),J===null?H=de:J.sibling=de,J=de);return i&&Z.forEach(function(Y){return n(P,Y)}),Tt&&ua(P,ee),H}function I(P,L,S,$){var H=yd(S);if(typeof H!="function")throw Error(fe(150));if(S=H.call(S),S==null)throw Error(fe(151));for(var J=H=null,Z=L,ee=L=0,de=null,se=S.next();Z!==null&&!se.done;ee++,se=S.next()){Z.index>ee?(de=Z,Z=null):de=Z.sibling;var Y=C(P,Z,se.value,$);if(Y===null){Z===null&&(Z=de);break}i&&Z&&Y.alternate===null&&n(P,Z),L=h(Y,L,ee),J===null?H=Y:J.sibling=Y,J=Y,Z=de}if(se.done)return o(P,Z),Tt&&ua(P,ee),H;if(Z===null){for(;!se.done;ee++,se=S.next())se=y(P,se.value,$),se!==null&&(L=h(se,L,ee),J===null?H=se:J.sibling=se,J=se);return Tt&&ua(P,ee),H}for(Z=c(P,Z);!se.done;ee++,se=S.next())se=E(Z,P,ee,se.value,$),se!==null&&(i&&se.alternate!==null&&Z.delete(se.key===null?ee:se.key),L=h(se,L,ee),J===null?H=se:J.sibling=se,J=se);return i&&Z.forEach(function(Q){return n(P,Q)}),Tt&&ua(P,ee),H}function j(P,L,S,$){if(typeof S=="object"&&S!==null&&S.type===Dc&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case kf:e:{for(var H=S.key,J=L;J!==null;){if(J.key===H){if(H=S.type,H===Dc){if(J.tag===7){o(P,J.sibling),L=d(J,S.props.children),L.return=P,P=L;break e}}else if(J.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===ls&&H2(H)===J.type){o(P,J.sibling),L=d(J,S.props),L.ref=Sd(P,J,S),L.return=P,P=L;break e}o(P,J);break}else n(P,J);J=J.sibling}S.type===Dc?(L=ya(S.props.children,P.mode,$,S.key),L.return=P,P=L):($=cp(S.type,S.key,S.props,null,P.mode,$),$.ref=Sd(P,L,S),$.return=P,P=$)}return f(P);case Sc:e:{for(J=S.key;L!==null;){if(L.key===J)if(L.tag===4&&L.stateNode.containerInfo===S.containerInfo&&L.stateNode.implementation===S.implementation){o(P,L.sibling),L=d(L,S.children||[]),L.return=P,P=L;break e}else{o(P,L);break}else n(P,L);L=L.sibling}L=ok(S,P.mode,$),L.return=P,P=L}return f(P);case ls:return J=S._init,j(P,L,J(S._payload),$)}if(Pd(S))return D(P,L,S,$);if(yd(S))return I(P,L,S,$);Df(P,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,L!==null&&L.tag===6?(o(P,L.sibling),L=d(L,S),L.return=P,P=L):(o(P,L),L=rk(S,P.mode,$),L.return=P,P=L),f(P)):o(P,L)}return j}var Zc=cD(!0),lD=cD(!1),Iu={},eo=zs(Iu),fu=zs(Iu),pu=zs(Iu);function wa(i){if(i===Iu)throw Error(fe(174));return i}function Iw(i,n){switch(_t(pu,n),_t(fu,i),_t(eo,Iu),i=n.nodeType,i){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Fk(null,"");break;default:i=i===8?n.parentNode:n,n=i.namespaceURI||null,i=i.tagName,n=Fk(n,i)}Et(eo),_t(eo,n)}function Qc(){Et(eo),Et(fu),Et(pu)}function dD(i){wa(pu.current);var n=wa(eo.current),o=Fk(n,i.type);n!==o&&(_t(fu,i),_t(eo,o))}function Mw(i){fu.current===i&&(Et(eo),Et(fu))}var Bt=zs(0);function Pp(i){for(var n=i;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break;for(;n.sibling===null;){if(n.return===null||n.return===i)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var J0=[];function Nw(){for(var i=0;i<J0.length;i++)J0[i]._workInProgressVersionPrimary=null;J0.length=0}var ip=jo.ReactCurrentDispatcher,X0=jo.ReactCurrentBatchConfig,Ea=0,Lt=null,dn=null,_n=null,Bp=!1,qd=!1,gu=0,gz=0;function zn(){throw Error(fe(321))}function Ow(i,n){if(n===null)return!1;for(var o=0;o<n.length&&o<i.length;o++)if(!Ir(i[o],n[o]))return!1;return!0}function Pw(i,n,o,c,d,h){if(Ea=h,Lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ip.current=i===null||i.memoizedState===null?wz:vz,i=o(c,d),qd){h=0;do{if(qd=!1,gu=0,25<=h)throw Error(fe(301));h+=1,_n=dn=null,n.updateQueue=null,ip.current=_z,i=o(c,d)}while(qd)}if(ip.current=Lp,n=dn!==null&&dn.next!==null,Ea=0,_n=dn=Lt=null,Bp=!1,n)throw Error(fe(300));return i}function Bw(){var i=gu!==0;return gu=0,i}function Kr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Lt.memoizedState=_n=i:_n=_n.next=i,_n}function cr(){if(dn===null){var i=Lt.alternate;i=i!==null?i.memoizedState:null}else i=dn.next;var n=_n===null?Lt.memoizedState:_n.next;if(n!==null)_n=n,dn=i;else{if(i===null)throw Error(fe(310));dn=i,i={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},_n===null?Lt.memoizedState=_n=i:_n=_n.next=i}return _n}function mu(i,n){return typeof n=="function"?n(i):n}function ek(i){var n=cr(),o=n.queue;if(o===null)throw Error(fe(311));o.lastRenderedReducer=i;var c=dn,d=c.baseQueue,h=o.pending;if(h!==null){if(d!==null){var f=d.next;d.next=h.next,h.next=f}c.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,c=c.baseState;var m=f=null,k=null,v=h;do{var w=v.lane;if((Ea&w)===w)k!==null&&(k=k.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),c=v.hasEagerState?v.eagerState:i(c,v.action);else{var y={lane:w,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};k===null?(m=k=y,f=c):k=k.next=y,Lt.lanes|=w,Sa|=w}v=v.next}while(v!==null&&v!==h);k===null?f=c:k.next=m,Ir(c,n.memoizedState)||(gi=!0),n.memoizedState=c,n.baseState=f,n.baseQueue=k,o.lastRenderedState=c}if(i=o.interleaved,i!==null){d=i;do h=d.lane,Lt.lanes|=h,Sa|=h,d=d.next;while(d!==i)}else d===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function tk(i){var n=cr(),o=n.queue;if(o===null)throw Error(fe(311));o.lastRenderedReducer=i;var c=o.dispatch,d=o.pending,h=n.memoizedState;if(d!==null){o.pending=null;var f=d=d.next;do h=i(h,f.action),f=f.next;while(f!==d);Ir(h,n.memoizedState)||(gi=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),o.lastRenderedState=h}return[h,c]}function uD(){}function hD(i,n){var o=Lt,c=cr(),d=n(),h=!Ir(c.memoizedState,d);if(h&&(c.memoizedState=d,gi=!0),c=c.queue,Lw(gD.bind(null,o,c,i),[i]),c.getSnapshot!==n||h||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,ku(9,pD.bind(null,o,c,d,n),void 0,null),yn===null)throw Error(fe(349));Ea&30||fD(o,n,d)}return d}function fD(i,n,o){i.flags|=16384,i={getSnapshot:n,value:o},n=Lt.updateQueue,n===null?(n={lastEffect:null,stores:null},Lt.updateQueue=n,n.stores=[i]):(o=n.stores,o===null?n.stores=[i]:o.push(i))}function pD(i,n,o,c){n.value=o,n.getSnapshot=c,mD(n)&&kD(i)}function gD(i,n,o){return o(function(){mD(n)&&kD(i)})}function mD(i){var n=i.getSnapshot;i=i.value;try{var o=n();return!Ir(i,o)}catch{return!0}}function kD(i){var n=Io(i,1);n!==null&&Tr(n,i,1,-1)}function W2(i){var n=Kr();return typeof i=="function"&&(i=i()),n.memoizedState=n.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mu,lastRenderedState:i},n.queue=i,i=i.dispatch=bz.bind(null,Lt,i),[n.memoizedState,i]}function ku(i,n,o,c){return i={tag:i,create:n,destroy:o,deps:c,next:null},n=Lt.updateQueue,n===null?(n={lastEffect:null,stores:null},Lt.updateQueue=n,n.lastEffect=i.next=i):(o=n.lastEffect,o===null?n.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,n.lastEffect=i)),i}function bD(){return cr().memoizedState}function rp(i,n,o,c){var d=Kr();Lt.flags|=i,d.memoizedState=ku(1|n,o,void 0,c===void 0?null:c)}function hg(i,n,o,c){var d=cr();c=c===void 0?null:c;var h=void 0;if(dn!==null){var f=dn.memoizedState;if(h=f.destroy,c!==null&&Ow(c,f.deps)){d.memoizedState=ku(n,o,h,c);return}}Lt.flags|=i,d.memoizedState=ku(1|n,o,h,c)}function q2(i,n){return rp(8390656,8,i,n)}function Lw(i,n){return hg(2048,8,i,n)}function wD(i,n){return hg(4,2,i,n)}function vD(i,n){return hg(4,4,i,n)}function _D(i,n){if(typeof n=="function")return i=i(),n(i),function(){n(null)};if(n!=null)return i=i(),n.current=i,function(){n.current=null}}function yD(i,n,o){return o=o!=null?o.concat([i]):null,hg(4,4,_D.bind(null,n,i),o)}function zw(){}function AD(i,n){var o=cr();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Ow(n,c[1])?c[0]:(o.memoizedState=[i,n],i)}function CD(i,n){var o=cr();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Ow(n,c[1])?c[0]:(i=i(),o.memoizedState=[i,n],i)}function xD(i,n,o){return Ea&21?(Ir(o,n)||(o=DS(),Lt.lanes|=o,Sa|=o,i.baseState=!0),n):(i.baseState&&(i.baseState=!1,gi=!0),i.memoizedState=o)}function mz(i,n){var o=ht;ht=o!==0&&4>o?o:4,i(!0);var c=X0.transition;X0.transition={};try{i(!1),n()}finally{ht=o,X0.transition=c}}function ED(){return cr().memoizedState}function kz(i,n,o){var c=Ss(i);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},SD(i))DD(n,o);else if(o=rD(i,n,o,c),o!==null){var d=Xn();Tr(o,i,c,d),TD(o,n,c)}}function bz(i,n,o){var c=Ss(i),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(SD(i))DD(n,d);else{var h=i.alternate;if(i.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var f=n.lastRenderedState,m=h(f,o);if(d.hasEagerState=!0,d.eagerState=m,Ir(m,f)){var k=n.interleaved;k===null?(d.next=d,Dw(n)):(d.next=k.next,k.next=d),n.interleaved=d;return}}catch{}finally{}o=rD(i,n,d,c),o!==null&&(d=Xn(),Tr(o,i,c,d),TD(o,n,c))}}function SD(i){var n=i.alternate;return i===Lt||n!==null&&n===Lt}function DD(i,n){qd=Bp=!0;var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}function TD(i,n,o){if(o&4194240){var c=n.lanes;c&=i.pendingLanes,o|=c,n.lanes=o,pw(i,o)}}var Lp={readContext:ar,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},wz={readContext:ar,useCallback:function(i,n){return Kr().memoizedState=[i,n===void 0?null:n],i},useContext:ar,useEffect:q2,useImperativeHandle:function(i,n,o){return o=o!=null?o.concat([i]):null,rp(4194308,4,_D.bind(null,n,i),o)},useLayoutEffect:function(i,n){return rp(4194308,4,i,n)},useInsertionEffect:function(i,n){return rp(4,2,i,n)},useMemo:function(i,n){var o=Kr();return n=n===void 0?null:n,i=i(),o.memoizedState=[i,n],i},useReducer:function(i,n,o){var c=Kr();return n=o!==void 0?o(n):n,c.memoizedState=c.baseState=n,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:n},c.queue=i,i=i.dispatch=kz.bind(null,Lt,i),[c.memoizedState,i]},useRef:function(i){var n=Kr();return i={current:i},n.memoizedState=i},useState:W2,useDebugValue:zw,useDeferredValue:function(i){return Kr().memoizedState=i},useTransition:function(){var i=W2(!1),n=i[0];return i=mz.bind(null,i[1]),Kr().memoizedState=i,[n,i]},useMutableSource:function(){},useSyncExternalStore:function(i,n,o){var c=Lt,d=Kr();if(Tt){if(o===void 0)throw Error(fe(407));o=o()}else{if(o=n(),yn===null)throw Error(fe(349));Ea&30||fD(c,n,o)}d.memoizedState=o;var h={value:o,getSnapshot:n};return d.queue=h,q2(gD.bind(null,c,h,i),[i]),c.flags|=2048,ku(9,pD.bind(null,c,h,o,n),void 0,null),o},useId:function(){var i=Kr(),n=yn.identifierPrefix;if(Tt){var o=xo,c=Co;o=(c&~(1<<32-Dr(c)-1)).toString(32)+o,n=":"+n+"R"+o,o=gu++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=gz++,n=":"+n+"r"+o.toString(32)+":";return i.memoizedState=n},unstable_isNewReconciler:!1},vz={readContext:ar,useCallback:AD,useContext:ar,useEffect:Lw,useImperativeHandle:yD,useInsertionEffect:wD,useLayoutEffect:vD,useMemo:CD,useReducer:ek,useRef:bD,useState:function(){return ek(mu)},useDebugValue:zw,useDeferredValue:function(i){var n=cr();return xD(n,dn.memoizedState,i)},useTransition:function(){var i=ek(mu)[0],n=cr().memoizedState;return[i,n]},useMutableSource:uD,useSyncExternalStore:hD,useId:ED,unstable_isNewReconciler:!1},_z={readContext:ar,useCallback:AD,useContext:ar,useEffect:Lw,useImperativeHandle:yD,useInsertionEffect:wD,useLayoutEffect:vD,useMemo:CD,useReducer:tk,useRef:bD,useState:function(){return tk(mu)},useDebugValue:zw,useDeferredValue:function(i){var n=cr();return dn===null?n.memoizedState=i:xD(n,dn.memoizedState,i)},useTransition:function(){var i=tk(mu)[0],n=cr().memoizedState;return[i,n]},useMutableSource:uD,useSyncExternalStore:hD,useId:ED,unstable_isNewReconciler:!1};function Jc(i,n){try{var o="",c=n;do o+=KL(c),c=c.return;while(c);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:i,source:n,stack:d,digest:null}}function nk(i,n,o){return{value:i,source:null,stack:o??null,digest:n??null}}function lb(i,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var yz=typeof WeakMap=="function"?WeakMap:Map;function ID(i,n,o){o=So(-1,o),o.tag=3,o.payload={element:null};var c=n.value;return o.callback=function(){jp||(jp=!0,wb=c),lb(i,n)},o}function MD(i,n,o){o=So(-1,o),o.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var d=n.value;o.payload=function(){return c(d)},o.callback=function(){lb(i,n)}}var h=i.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){lb(i,n),typeof c!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})}),o}function G2(i,n,o){var c=i.pingCache;if(c===null){c=i.pingCache=new yz;var d=new Set;c.set(n,d)}else d=c.get(n),d===void 0&&(d=new Set,c.set(n,d));d.has(o)||(d.add(o),i=Lz.bind(null,i,n,o),n.then(i,i))}function Y2(i){do{var n;if((n=i.tag===13)&&(n=i.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return i;i=i.return}while(i!==null);return null}function K2(i,n,o,c,d){return i.mode&1?(i.flags|=65536,i.lanes=d,i):(i===n?i.flags|=65536:(i.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=So(-1,1),n.tag=2,xs(o,n,1))),o.lanes|=1),i)}var Az=jo.ReactCurrentOwner,gi=!1;function Zn(i,n,o,c){n.child=i===null?lD(n,null,o,c):Zc(n,i.child,o,c)}function Z2(i,n,o,c,d){o=o.render;var h=n.ref;return Uc(n,d),c=Pw(i,n,o,c,h,d),o=Bw(),i!==null&&!gi?(n.updateQueue=i.updateQueue,n.flags&=-2053,i.lanes&=~d,Mo(i,n,d)):(Tt&&o&&yw(n),n.flags|=1,Zn(i,n,c,d),n.child)}function Q2(i,n,o,c,d){if(i===null){var h=o.type;return typeof h=="function"&&!Ww(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=h,ND(i,n,h,c,d)):(i=cp(o.type,null,c,n,n.mode,d),i.ref=n.ref,i.return=n,n.child=i)}if(h=i.child,!(i.lanes&d)){var f=h.memoizedProps;if(o=o.compare,o=o!==null?o:lu,o(f,c)&&i.ref===n.ref)return Mo(i,n,d)}return n.flags|=1,i=Ds(h,c),i.ref=n.ref,i.return=n,n.child=i}function ND(i,n,o,c,d){if(i!==null){var h=i.memoizedProps;if(lu(h,c)&&i.ref===n.ref)if(gi=!1,n.pendingProps=c=h,(i.lanes&d)!==0)i.flags&131072&&(gi=!0);else return n.lanes=i.lanes,Mo(i,n,d)}return db(i,n,o,c,d)}function OD(i,n,o){var c=n.pendingProps,d=c.children,h=i!==null?i.memoizedState:null;if(c.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(jc,Mi),Mi|=o;else{if(!(o&1073741824))return i=h!==null?h.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:i,cachePool:null,transitions:null},n.updateQueue=null,_t(jc,Mi),Mi|=i,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,_t(jc,Mi),Mi|=c}else h!==null?(c=h.baseLanes|o,n.memoizedState=null):c=o,_t(jc,Mi),Mi|=c;return Zn(i,n,d,o),n.child}function PD(i,n){var o=n.ref;(i===null&&o!==null||i!==null&&i.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function db(i,n,o,c,d){var h=ki(o)?Ca:Un.current;return h=Yc(n,h),Uc(n,d),o=Pw(i,n,o,c,h,d),c=Bw(),i!==null&&!gi?(n.updateQueue=i.updateQueue,n.flags&=-2053,i.lanes&=~d,Mo(i,n,d)):(Tt&&c&&yw(n),n.flags|=1,Zn(i,n,o,d),n.child)}function J2(i,n,o,c,d){if(ki(o)){var h=!0;Dp(n)}else h=!1;if(Uc(n,d),n.stateNode===null)op(i,n),aD(n,o,c),cb(n,o,c,d),c=!0;else if(i===null){var f=n.stateNode,m=n.memoizedProps;f.props=m;var k=f.context,v=o.contextType;typeof v=="object"&&v!==null?v=ar(v):(v=ki(o)?Ca:Un.current,v=Yc(n,v));var w=o.getDerivedStateFromProps,y=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function";y||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==c||k!==v)&&U2(n,f,c,v),ds=!1;var C=n.memoizedState;f.state=C,Op(n,c,f,d),k=n.memoizedState,m!==c||C!==k||mi.current||ds?(typeof w=="function"&&(ab(n,o,w,c),k=n.memoizedState),(m=ds||$2(n,o,m,c,C,k,v))?(y||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=k),f.props=c,f.state=k,f.context=v,c=m):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{f=n.stateNode,oD(i,n),m=n.memoizedProps,v=n.type===n.elementType?m:Ar(n.type,m),f.props=v,y=n.pendingProps,C=f.context,k=o.contextType,typeof k=="object"&&k!==null?k=ar(k):(k=ki(o)?Ca:Un.current,k=Yc(n,k));var E=o.getDerivedStateFromProps;(w=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==y||C!==k)&&U2(n,f,c,k),ds=!1,C=n.memoizedState,f.state=C,Op(n,c,f,d);var D=n.memoizedState;m!==y||C!==D||mi.current||ds?(typeof E=="function"&&(ab(n,o,E,c),D=n.memoizedState),(v=ds||$2(n,o,v,c,C,D,k)||!1)?(w||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(c,D,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(c,D,k)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===i.memoizedProps&&C===i.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===i.memoizedProps&&C===i.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=D),f.props=c,f.state=D,f.context=k,c=v):(typeof f.componentDidUpdate!="function"||m===i.memoizedProps&&C===i.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===i.memoizedProps&&C===i.memoizedState||(n.flags|=1024),c=!1)}return ub(i,n,o,c,h,d)}function ub(i,n,o,c,d,h){PD(i,n);var f=(n.flags&128)!==0;if(!c&&!f)return d&&z2(n,o,!1),Mo(i,n,h);c=n.stateNode,Az.current=n;var m=f&&typeof o.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,i!==null&&f?(n.child=Zc(n,i.child,null,h),n.child=Zc(n,null,m,h)):Zn(i,n,m,h),n.memoizedState=c.state,d&&z2(n,o,!0),n.child}function BD(i){var n=i.stateNode;n.pendingContext?L2(i,n.pendingContext,n.pendingContext!==n.context):n.context&&L2(i,n.context,!1),Iw(i,n.containerInfo)}function X2(i,n,o,c,d){return Kc(),Cw(d),n.flags|=256,Zn(i,n,o,c),n.child}var hb={dehydrated:null,treeContext:null,retryLane:0};function fb(i){return{baseLanes:i,cachePool:null,transitions:null}}function LD(i,n,o){var c=n.pendingProps,d=Bt.current,h=!1,f=(n.flags&128)!==0,m;if((m=f)||(m=i!==null&&i.memoizedState===null?!1:(d&2)!==0),m?(h=!0,n.flags&=-129):(i===null||i.memoizedState!==null)&&(d|=1),_t(Bt,d&1),i===null)return ob(n),i=n.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(n.mode&1?i.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(f=c.children,i=c.fallback,h?(c=n.mode,h=n.child,f={mode:"hidden",children:f},!(c&1)&&h!==null?(h.childLanes=0,h.pendingProps=f):h=gg(f,c,0,null),i=ya(i,c,o,null),h.return=n,i.return=n,h.sibling=i,n.child=h,n.child.memoizedState=fb(o),n.memoizedState=hb,i):jw(n,f));if(d=i.memoizedState,d!==null&&(m=d.dehydrated,m!==null))return Cz(i,n,f,c,m,d,o);if(h){h=c.fallback,f=n.mode,d=i.child,m=d.sibling;var k={mode:"hidden",children:c.children};return!(f&1)&&n.child!==d?(c=n.child,c.childLanes=0,c.pendingProps=k,n.deletions=null):(c=Ds(d,k),c.subtreeFlags=d.subtreeFlags&14680064),m!==null?h=Ds(m,h):(h=ya(h,f,o,null),h.flags|=2),h.return=n,c.return=n,c.sibling=h,n.child=c,c=h,h=n.child,f=i.child.memoizedState,f=f===null?fb(o):{baseLanes:f.baseLanes|o,cachePool:null,transitions:f.transitions},h.memoizedState=f,h.childLanes=i.childLanes&~o,n.memoizedState=hb,c}return h=i.child,i=h.sibling,c=Ds(h,{mode:"visible",children:c.children}),!(n.mode&1)&&(c.lanes=o),c.return=n,c.sibling=null,i!==null&&(o=n.deletions,o===null?(n.deletions=[i],n.flags|=16):o.push(i)),n.child=c,n.memoizedState=null,c}function jw(i,n){return n=gg({mode:"visible",children:n},i.mode,0,null),n.return=i,i.child=n}function Tf(i,n,o,c){return c!==null&&Cw(c),Zc(n,i.child,null,o),i=jw(n,n.pendingProps.children),i.flags|=2,n.memoizedState=null,i}function Cz(i,n,o,c,d,h,f){if(o)return n.flags&256?(n.flags&=-257,c=nk(Error(fe(422))),Tf(i,n,f,c)):n.memoizedState!==null?(n.child=i.child,n.flags|=128,null):(h=c.fallback,d=n.mode,c=gg({mode:"visible",children:c.children},d,0,null),h=ya(h,d,f,null),h.flags|=2,c.return=n,h.return=n,c.sibling=h,n.child=c,n.mode&1&&Zc(n,i.child,null,f),n.child.memoizedState=fb(f),n.memoizedState=hb,h);if(!(n.mode&1))return Tf(i,n,f,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var m=c.dgst;return c=m,h=Error(fe(419)),c=nk(h,c,void 0),Tf(i,n,f,c)}if(m=(f&i.childLanes)!==0,gi||m){if(c=yn,c!==null){switch(f&-f){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|f)?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Io(i,d),Tr(c,i,d,-1))}return Hw(),c=nk(Error(fe(421))),Tf(i,n,f,c)}return d.data==="$?"?(n.flags|=128,n.child=i.child,n=zz.bind(null,i),d._reactRetry=n,null):(i=h.treeContext,Bi=Cs(d.nextSibling),Li=n,Tt=!0,Er=null,i!==null&&(tr[nr++]=Co,tr[nr++]=xo,tr[nr++]=xa,Co=i.id,xo=i.overflow,xa=n),n=jw(n,c.children),n.flags|=4096,n)}function eE(i,n,o){i.lanes|=n;var c=i.alternate;c!==null&&(c.lanes|=n),sb(i.return,n,o)}function ik(i,n,o,c,d){var h=i.memoizedState;h===null?i.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=d)}function zD(i,n,o){var c=n.pendingProps,d=c.revealOrder,h=c.tail;if(Zn(i,n,c.children,o),c=Bt.current,c&2)c=c&1|2,n.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=n.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&eE(i,o,n);else if(i.tag===19)eE(i,o,n);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(_t(Bt,c),!(n.mode&1))n.memoizedState=null;else switch(d){case"forwards":for(o=n.child,d=null;o!==null;)i=o.alternate,i!==null&&Pp(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=n.child,n.child=null):(d=o.sibling,o.sibling=null),ik(n,!1,d,o,h);break;case"backwards":for(o=null,d=n.child,n.child=null;d!==null;){if(i=d.alternate,i!==null&&Pp(i)===null){n.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}ik(n,!0,o,null,h);break;case"together":ik(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function op(i,n){!(n.mode&1)&&i!==null&&(i.alternate=null,n.alternate=null,n.flags|=2)}function Mo(i,n,o){if(i!==null&&(n.dependencies=i.dependencies),Sa|=n.lanes,!(o&n.childLanes))return null;if(i!==null&&n.child!==i.child)throw Error(fe(153));if(n.child!==null){for(i=n.child,o=Ds(i,i.pendingProps),n.child=o,o.return=n;i.sibling!==null;)i=i.sibling,o=o.sibling=Ds(i,i.pendingProps),o.return=n;o.sibling=null}return n.child}function xz(i,n,o){switch(n.tag){case 3:BD(n),Kc();break;case 5:dD(n);break;case 1:ki(n.type)&&Dp(n);break;case 4:Iw(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,d=n.memoizedProps.value;_t(Mp,c._currentValue),c._currentValue=d;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(_t(Bt,Bt.current&1),n.flags|=128,null):o&n.child.childLanes?LD(i,n,o):(_t(Bt,Bt.current&1),i=Mo(i,n,o),i!==null?i.sibling:null);_t(Bt,Bt.current&1);break;case 19:if(c=(o&n.childLanes)!==0,i.flags&128){if(c)return zD(i,n,o);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_t(Bt,Bt.current),c)break;return null;case 22:case 23:return n.lanes=0,OD(i,n,o)}return Mo(i,n,o)}var jD,pb,RD,FD;jD=function(i,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};pb=function(){};RD=function(i,n,o,c){var d=i.memoizedProps;if(d!==c){i=n.stateNode,wa(eo.current);var h=null;switch(o){case"input":d=Lk(i,d),c=Lk(i,c),h=[];break;case"select":d=zt({},d,{value:void 0}),c=zt({},c,{value:void 0}),h=[];break;case"textarea":d=Rk(i,d),c=Rk(i,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=Ep)}Vk(o,c);var f;o=null;for(v in d)if(!c.hasOwnProperty(v)&&d.hasOwnProperty(v)&&d[v]!=null)if(v==="style"){var m=d[v];for(f in m)m.hasOwnProperty(f)&&(o||(o={}),o[f]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(nu.hasOwnProperty(v)?h||(h=[]):(h=h||[]).push(v,null));for(v in c){var k=c[v];if(m=d!=null?d[v]:void 0,c.hasOwnProperty(v)&&k!==m&&(k!=null||m!=null))if(v==="style")if(m){for(f in m)!m.hasOwnProperty(f)||k&&k.hasOwnProperty(f)||(o||(o={}),o[f]="");for(f in k)k.hasOwnProperty(f)&&m[f]!==k[f]&&(o||(o={}),o[f]=k[f])}else o||(h||(h=[]),h.push(v,o)),o=k;else v==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,m=m?m.__html:void 0,k!=null&&m!==k&&(h=h||[]).push(v,k)):v==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(v,""+k):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(nu.hasOwnProperty(v)?(k!=null&&v==="onScroll"&&Ct("scroll",i),h||m===k||(h=[])):(h=h||[]).push(v,k))}o&&(h=h||[]).push("style",o);var v=h;(n.updateQueue=v)&&(n.flags|=4)}};FD=function(i,n,o,c){o!==c&&(n.flags|=4)};function Dd(i,n){if(!Tt)switch(i.tailMode){case"hidden":n=i.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?n||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function jn(i){var n=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(n)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=c,i.childLanes=o,n}function Ez(i,n,o){var c=n.pendingProps;switch(Aw(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(n),null;case 1:return ki(n.type)&&Sp(),jn(n),null;case 3:return c=n.stateNode,Qc(),Et(mi),Et(Un),Nw(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(Sf(n)?n.flags|=4:i===null||i.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Er!==null&&(yb(Er),Er=null))),pb(i,n),jn(n),null;case 5:Mw(n);var d=wa(pu.current);if(o=n.type,i!==null&&n.stateNode!=null)RD(i,n,o,c,d),i.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(fe(166));return jn(n),null}if(i=wa(eo.current),Sf(n)){c=n.stateNode,o=n.type;var h=n.memoizedProps;switch(c[Zr]=n,c[hu]=h,i=(n.mode&1)!==0,o){case"dialog":Ct("cancel",c),Ct("close",c);break;case"iframe":case"object":case"embed":Ct("load",c);break;case"video":case"audio":for(d=0;d<Ld.length;d++)Ct(Ld[d],c);break;case"source":Ct("error",c);break;case"img":case"image":case"link":Ct("error",c),Ct("load",c);break;case"details":Ct("toggle",c);break;case"input":l2(c,h),Ct("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Ct("invalid",c);break;case"textarea":u2(c,h),Ct("invalid",c)}Vk(o,h),d=null;for(var f in h)if(h.hasOwnProperty(f)){var m=h[f];f==="children"?typeof m=="string"?c.textContent!==m&&(h.suppressHydrationWarning!==!0&&Ef(c.textContent,m,i),d=["children",m]):typeof m=="number"&&c.textContent!==""+m&&(h.suppressHydrationWarning!==!0&&Ef(c.textContent,m,i),d=["children",""+m]):nu.hasOwnProperty(f)&&m!=null&&f==="onScroll"&&Ct("scroll",c)}switch(o){case"input":bf(c),d2(c,h,!0);break;case"textarea":bf(c),h2(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Ep)}c=d,n.updateQueue=c,c!==null&&(n.flags|=4)}else{f=d.nodeType===9?d:d.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=fS(o)),i==="http://www.w3.org/1999/xhtml"?o==="script"?(i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=f.createElement(o,{is:c.is}):(i=f.createElement(o),o==="select"&&(f=i,c.multiple?f.multiple=!0:c.size&&(f.size=c.size))):i=f.createElementNS(i,o),i[Zr]=n,i[hu]=c,jD(i,n,!1,!1),n.stateNode=i;e:{switch(f=$k(o,c),o){case"dialog":Ct("cancel",i),Ct("close",i),d=c;break;case"iframe":case"object":case"embed":Ct("load",i),d=c;break;case"video":case"audio":for(d=0;d<Ld.length;d++)Ct(Ld[d],i);d=c;break;case"source":Ct("error",i),d=c;break;case"img":case"image":case"link":Ct("error",i),Ct("load",i),d=c;break;case"details":Ct("toggle",i),d=c;break;case"input":l2(i,c),d=Lk(i,c),Ct("invalid",i);break;case"option":d=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},d=zt({},c,{value:void 0}),Ct("invalid",i);break;case"textarea":u2(i,c),d=Rk(i,c),Ct("invalid",i);break;default:d=c}Vk(o,d),m=d;for(h in m)if(m.hasOwnProperty(h)){var k=m[h];h==="style"?mS(i,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&pS(i,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&iu(i,k):typeof k=="number"&&iu(i,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(nu.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Ct("scroll",i):k!=null&&cw(i,h,k,f))}switch(o){case"input":bf(i),d2(i,c,!1);break;case"textarea":bf(i),h2(i);break;case"option":c.value!=null&&i.setAttribute("value",""+Is(c.value));break;case"select":i.multiple=!!c.multiple,h=c.value,h!=null?Rc(i,!!c.multiple,h,!1):c.defaultValue!=null&&Rc(i,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(i.onclick=Ep)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return jn(n),null;case 6:if(i&&n.stateNode!=null)FD(i,n,i.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(fe(166));if(o=wa(pu.current),wa(eo.current),Sf(n)){if(c=n.stateNode,o=n.memoizedProps,c[Zr]=n,(h=c.nodeValue!==o)&&(i=Li,i!==null))switch(i.tag){case 3:Ef(c.nodeValue,o,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ef(c.nodeValue,o,(i.mode&1)!==0)}h&&(n.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Zr]=n,n.stateNode=c}return jn(n),null;case 13:if(Et(Bt),c=n.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Tt&&Bi!==null&&n.mode&1&&!(n.flags&128))iD(),Kc(),n.flags|=98560,h=!1;else if(h=Sf(n),c!==null&&c.dehydrated!==null){if(i===null){if(!h)throw Error(fe(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(fe(317));h[Zr]=n}else Kc(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;jn(n),h=!1}else Er!==null&&(yb(Er),Er=null),h=!0;if(!h)return n.flags&65536?n:null}return n.flags&128?(n.lanes=o,n):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(n.child.flags|=8192,n.mode&1&&(i===null||Bt.current&1?un===0&&(un=3):Hw())),n.updateQueue!==null&&(n.flags|=4),jn(n),null);case 4:return Qc(),pb(i,n),i===null&&du(n.stateNode.containerInfo),jn(n),null;case 10:return Sw(n.type._context),jn(n),null;case 17:return ki(n.type)&&Sp(),jn(n),null;case 19:if(Et(Bt),h=n.memoizedState,h===null)return jn(n),null;if(c=(n.flags&128)!==0,f=h.rendering,f===null)if(c)Dd(h,!1);else{if(un!==0||i!==null&&i.flags&128)for(i=n.child;i!==null;){if(f=Pp(i),f!==null){for(n.flags|=128,Dd(h,!1),c=f.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=o,o=n.child;o!==null;)h=o,i=c,h.flags&=14680066,f=h.alternate,f===null?(h.childLanes=0,h.lanes=i,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=f.childLanes,h.lanes=f.lanes,h.child=f.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=f.memoizedProps,h.memoizedState=f.memoizedState,h.updateQueue=f.updateQueue,h.type=f.type,i=f.dependencies,h.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),o=o.sibling;return _t(Bt,Bt.current&1|2),n.child}i=i.sibling}h.tail!==null&&Zt()>Xc&&(n.flags|=128,c=!0,Dd(h,!1),n.lanes=4194304)}else{if(!c)if(i=Pp(f),i!==null){if(n.flags|=128,c=!0,o=i.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Dd(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Tt)return jn(n),null}else 2*Zt()-h.renderingStartTime>Xc&&o!==1073741824&&(n.flags|=128,c=!0,Dd(h,!1),n.lanes=4194304);h.isBackwards?(f.sibling=n.child,n.child=f):(o=h.last,o!==null?o.sibling=f:n.child=f,h.last=f)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=Zt(),n.sibling=null,o=Bt.current,_t(Bt,c?o&1|2:o&1),n):(jn(n),null);case 22:case 23:return Uw(),c=n.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(n.flags|=8192),c&&n.mode&1?Mi&1073741824&&(jn(n),n.subtreeFlags&6&&(n.flags|=8192)):jn(n),null;case 24:return null;case 25:return null}throw Error(fe(156,n.tag))}function Sz(i,n){switch(Aw(n),n.tag){case 1:return ki(n.type)&&Sp(),i=n.flags,i&65536?(n.flags=i&-65537|128,n):null;case 3:return Qc(),Et(mi),Et(Un),Nw(),i=n.flags,i&65536&&!(i&128)?(n.flags=i&-65537|128,n):null;case 5:return Mw(n),null;case 13:if(Et(Bt),i=n.memoizedState,i!==null&&i.dehydrated!==null){if(n.alternate===null)throw Error(fe(340));Kc()}return i=n.flags,i&65536?(n.flags=i&-65537|128,n):null;case 19:return Et(Bt),null;case 4:return Qc(),null;case 10:return Sw(n.type._context),null;case 22:case 23:return Uw(),null;case 24:return null;default:return null}}var If=!1,Fn=!1,Dz=typeof WeakSet=="function"?WeakSet:Set,_e=null;function zc(i,n){var o=i.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Ut(i,n,c)}else o.current=null}function gb(i,n,o){try{o()}catch(c){Ut(i,n,c)}}var tE=!1;function Tz(i,n){if(Jk=Ap,i=HS(),_w(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var f=0,m=-1,k=-1,v=0,w=0,y=i,C=null;t:for(;;){for(var E;y!==o||d!==0&&y.nodeType!==3||(m=f+d),y!==h||c!==0&&y.nodeType!==3||(k=f+c),y.nodeType===3&&(f+=y.nodeValue.length),(E=y.firstChild)!==null;)C=y,y=E;for(;;){if(y===i)break t;if(C===o&&++v===d&&(m=f),C===h&&++w===c&&(k=f),(E=y.nextSibling)!==null)break;y=C,C=y.parentNode}y=E}o=m===-1||k===-1?null:{start:m,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Xk={focusedElem:i,selectionRange:o},Ap=!1,_e=n;_e!==null;)if(n=_e,i=n.child,(n.subtreeFlags&1028)!==0&&i!==null)i.return=n,_e=i;else for(;_e!==null;){n=_e;try{var D=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var I=D.memoizedProps,j=D.memoizedState,P=n.stateNode,L=P.getSnapshotBeforeUpdate(n.elementType===n.type?I:Ar(n.type,I),j);P.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var S=n.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch($){Ut(n,n.return,$)}if(i=n.sibling,i!==null){i.return=n.return,_e=i;break}_e=n.return}return D=tE,tE=!1,D}function Gd(i,n,o){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&i)===i){var h=d.destroy;d.destroy=void 0,h!==void 0&&gb(n,o,h)}d=d.next}while(d!==c)}}function fg(i,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&i)===i){var c=o.create;o.destroy=c()}o=o.next}while(o!==n)}}function mb(i){var n=i.ref;if(n!==null){var o=i.stateNode;switch(i.tag){case 5:i=o;break;default:i=o}typeof n=="function"?n(i):n.current=i}}function VD(i){var n=i.alternate;n!==null&&(i.alternate=null,VD(n)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(n=i.stateNode,n!==null&&(delete n[Zr],delete n[hu],delete n[nb],delete n[uz],delete n[hz])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function $D(i){return i.tag===5||i.tag===3||i.tag===4}function nE(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||$D(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function kb(i,n,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(i,n):o.insertBefore(i,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(i,o)):(n=o,n.appendChild(i)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Ep));else if(c!==4&&(i=i.child,i!==null))for(kb(i,n,o),i=i.sibling;i!==null;)kb(i,n,o),i=i.sibling}function bb(i,n,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,n?o.insertBefore(i,n):o.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(bb(i,n,o),i=i.sibling;i!==null;)bb(i,n,o),i=i.sibling}var In=null,Cr=!1;function rs(i,n,o){for(o=o.child;o!==null;)UD(i,n,o),o=o.sibling}function UD(i,n,o){if(Xr&&typeof Xr.onCommitFiberUnmount=="function")try{Xr.onCommitFiberUnmount(og,o)}catch{}switch(o.tag){case 5:Fn||zc(o,n);case 6:var c=In,d=Cr;In=null,rs(i,n,o),In=c,Cr=d,In!==null&&(Cr?(i=In,o=o.stateNode,i.nodeType===8?i.parentNode.removeChild(o):i.removeChild(o)):In.removeChild(o.stateNode));break;case 18:In!==null&&(Cr?(i=In,o=o.stateNode,i.nodeType===8?Z0(i.parentNode,o):i.nodeType===1&&Z0(i,o),au(i)):Z0(In,o.stateNode));break;case 4:c=In,d=Cr,In=o.stateNode.containerInfo,Cr=!0,rs(i,n,o),In=c,Cr=d;break;case 0:case 11:case 14:case 15:if(!Fn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,f=h.destroy;h=h.tag,f!==void 0&&(h&2||h&4)&&gb(o,n,f),d=d.next}while(d!==c)}rs(i,n,o);break;case 1:if(!Fn&&(zc(o,n),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(m){Ut(o,n,m)}rs(i,n,o);break;case 21:rs(i,n,o);break;case 22:o.mode&1?(Fn=(c=Fn)||o.memoizedState!==null,rs(i,n,o),Fn=c):rs(i,n,o);break;default:rs(i,n,o)}}function iE(i){var n=i.updateQueue;if(n!==null){i.updateQueue=null;var o=i.stateNode;o===null&&(o=i.stateNode=new Dz),n.forEach(function(c){var d=jz.bind(null,i,c);o.has(c)||(o.add(c),c.then(d,d))})}}function vr(i,n){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var h=i,f=n,m=f;e:for(;m!==null;){switch(m.tag){case 5:In=m.stateNode,Cr=!1;break e;case 3:In=m.stateNode.containerInfo,Cr=!0;break e;case 4:In=m.stateNode.containerInfo,Cr=!0;break e}m=m.return}if(In===null)throw Error(fe(160));UD(h,f,d),In=null,Cr=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(v){Ut(d,n,v)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)HD(n,i),n=n.sibling}function HD(i,n){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(vr(n,i),Yr(i),c&4){try{Gd(3,i,i.return),fg(3,i)}catch(I){Ut(i,i.return,I)}try{Gd(5,i,i.return)}catch(I){Ut(i,i.return,I)}}break;case 1:vr(n,i),Yr(i),c&512&&o!==null&&zc(o,o.return);break;case 5:if(vr(n,i),Yr(i),c&512&&o!==null&&zc(o,o.return),i.flags&32){var d=i.stateNode;try{iu(d,"")}catch(I){Ut(i,i.return,I)}}if(c&4&&(d=i.stateNode,d!=null)){var h=i.memoizedProps,f=o!==null?o.memoizedProps:h,m=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{m==="input"&&h.type==="radio"&&h.name!=null&&uS(d,h),$k(m,f);var v=$k(m,h);for(f=0;f<k.length;f+=2){var w=k[f],y=k[f+1];w==="style"?mS(d,y):w==="dangerouslySetInnerHTML"?pS(d,y):w==="children"?iu(d,y):cw(d,w,y,v)}switch(m){case"input":zk(d,h);break;case"textarea":hS(d,h);break;case"select":var C=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var E=h.value;E!=null?Rc(d,!!h.multiple,E,!1):C!==!!h.multiple&&(h.defaultValue!=null?Rc(d,!!h.multiple,h.defaultValue,!0):Rc(d,!!h.multiple,h.multiple?[]:"",!1))}d[hu]=h}catch(I){Ut(i,i.return,I)}}break;case 6:if(vr(n,i),Yr(i),c&4){if(i.stateNode===null)throw Error(fe(162));d=i.stateNode,h=i.memoizedProps;try{d.nodeValue=h}catch(I){Ut(i,i.return,I)}}break;case 3:if(vr(n,i),Yr(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{au(n.containerInfo)}catch(I){Ut(i,i.return,I)}break;case 4:vr(n,i),Yr(i);break;case 13:vr(n,i),Yr(i),d=i.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Vw=Zt())),c&4&&iE(i);break;case 22:if(w=o!==null&&o.memoizedState!==null,i.mode&1?(Fn=(v=Fn)||w,vr(n,i),Fn=v):vr(n,i),Yr(i),c&8192){if(v=i.memoizedState!==null,(i.stateNode.isHidden=v)&&!w&&i.mode&1)for(_e=i,w=i.child;w!==null;){for(y=_e=w;_e!==null;){switch(C=_e,E=C.child,C.tag){case 0:case 11:case 14:case 15:Gd(4,C,C.return);break;case 1:zc(C,C.return);var D=C.stateNode;if(typeof D.componentWillUnmount=="function"){c=C,o=C.return;try{n=c,D.props=n.memoizedProps,D.state=n.memoizedState,D.componentWillUnmount()}catch(I){Ut(c,o,I)}}break;case 5:zc(C,C.return);break;case 22:if(C.memoizedState!==null){oE(y);continue}}E!==null?(E.return=C,_e=E):oE(y)}w=w.sibling}e:for(w=null,y=i;;){if(y.tag===5){if(w===null){w=y;try{d=y.stateNode,v?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(m=y.stateNode,k=y.memoizedProps.style,f=k!=null&&k.hasOwnProperty("display")?k.display:null,m.style.display=gS("display",f))}catch(I){Ut(i,i.return,I)}}}else if(y.tag===6){if(w===null)try{y.stateNode.nodeValue=v?"":y.memoizedProps}catch(I){Ut(i,i.return,I)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===i)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;w===y&&(w=null),y=y.return}w===y&&(w=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:vr(n,i),Yr(i),c&4&&iE(i);break;case 21:break;default:vr(n,i),Yr(i)}}function Yr(i){var n=i.flags;if(n&2){try{e:{for(var o=i.return;o!==null;){if($D(o)){var c=o;break e}o=o.return}throw Error(fe(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(iu(d,""),c.flags&=-33);var h=nE(i);bb(i,h,d);break;case 3:case 4:var f=c.stateNode.containerInfo,m=nE(i);kb(i,m,f);break;default:throw Error(fe(161))}}catch(k){Ut(i,i.return,k)}i.flags&=-3}n&4096&&(i.flags&=-4097)}function Iz(i,n,o){_e=i,WD(i)}function WD(i,n,o){for(var c=(i.mode&1)!==0;_e!==null;){var d=_e,h=d.child;if(d.tag===22&&c){var f=d.memoizedState!==null||If;if(!f){var m=d.alternate,k=m!==null&&m.memoizedState!==null||Fn;m=If;var v=Fn;if(If=f,(Fn=k)&&!v)for(_e=d;_e!==null;)f=_e,k=f.child,f.tag===22&&f.memoizedState!==null?sE(d):k!==null?(k.return=f,_e=k):sE(d);for(;h!==null;)_e=h,WD(h),h=h.sibling;_e=d,If=m,Fn=v}rE(i)}else d.subtreeFlags&8772&&h!==null?(h.return=d,_e=h):rE(i)}}function rE(i){for(;_e!==null;){var n=_e;if(n.flags&8772){var o=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fn||fg(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!Fn)if(o===null)c.componentDidMount();else{var d=n.elementType===n.type?o.memoizedProps:Ar(n.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&V2(n,h,c);break;case 3:var f=n.updateQueue;if(f!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}V2(n,f,o)}break;case 5:var m=n.stateNode;if(o===null&&n.flags&4){o=m;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var v=n.alternate;if(v!==null){var w=v.memoizedState;if(w!==null){var y=w.dehydrated;y!==null&&au(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Fn||n.flags&512&&mb(n)}catch(C){Ut(n,n.return,C)}}if(n===i){_e=null;break}if(o=n.sibling,o!==null){o.return=n.return,_e=o;break}_e=n.return}}function oE(i){for(;_e!==null;){var n=_e;if(n===i){_e=null;break}var o=n.sibling;if(o!==null){o.return=n.return,_e=o;break}_e=n.return}}function sE(i){for(;_e!==null;){var n=_e;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{fg(4,n)}catch(k){Ut(n,o,k)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var d=n.return;try{c.componentDidMount()}catch(k){Ut(n,d,k)}}var h=n.return;try{mb(n)}catch(k){Ut(n,h,k)}break;case 5:var f=n.return;try{mb(n)}catch(k){Ut(n,f,k)}}}catch(k){Ut(n,n.return,k)}if(n===i){_e=null;break}var m=n.sibling;if(m!==null){m.return=n.return,_e=m;break}_e=n.return}}var Mz=Math.ceil,zp=jo.ReactCurrentDispatcher,Rw=jo.ReactCurrentOwner,sr=jo.ReactCurrentBatchConfig,Qe=0,yn=null,rn=null,Mn=0,Mi=0,jc=zs(0),un=0,bu=null,Sa=0,pg=0,Fw=0,Yd=null,fi=null,Vw=0,Xc=1/0,_o=null,jp=!1,wb=null,Es=null,Mf=!1,ws=null,Rp=0,Kd=0,vb=null,sp=-1,ap=0;function Xn(){return Qe&6?Zt():sp!==-1?sp:sp=Zt()}function Ss(i){return i.mode&1?Qe&2&&Mn!==0?Mn&-Mn:pz.transition!==null?(ap===0&&(ap=DS()),ap):(i=ht,i!==0||(i=window.event,i=i===void 0?16:BS(i.type)),i):1}function Tr(i,n,o,c){if(50<Kd)throw Kd=0,vb=null,Error(fe(185));Su(i,o,c),(!(Qe&2)||i!==yn)&&(i===yn&&(!(Qe&2)&&(pg|=o),un===4&&ps(i,Mn)),bi(i,c),o===1&&Qe===0&&!(n.mode&1)&&(Xc=Zt()+500,dg&&js()))}function bi(i,n){var o=i.callbackNode;p7(i,n);var c=yp(i,i===yn?Mn:0);if(c===0)o!==null&&g2(o),i.callbackNode=null,i.callbackPriority=0;else if(n=c&-c,i.callbackPriority!==n){if(o!=null&&g2(o),n===1)i.tag===0?fz(aE.bind(null,i)):eD(aE.bind(null,i)),lz(function(){!(Qe&6)&&js()}),o=null;else{switch(TS(c)){case 1:o=fw;break;case 4:o=ES;break;case 16:o=_p;break;case 536870912:o=SS;break;default:o=_p}o=XD(o,qD.bind(null,i))}i.callbackPriority=n,i.callbackNode=o}}function qD(i,n){if(sp=-1,ap=0,Qe&6)throw Error(fe(327));var o=i.callbackNode;if(Hc()&&i.callbackNode!==o)return null;var c=yp(i,i===yn?Mn:0);if(c===0)return null;if(c&30||c&i.expiredLanes||n)n=Fp(i,c);else{n=c;var d=Qe;Qe|=2;var h=YD();(yn!==i||Mn!==n)&&(_o=null,Xc=Zt()+500,_a(i,n));do try{Pz();break}catch(m){GD(i,m)}while(1);Ew(),zp.current=h,Qe=d,rn!==null?n=0:(yn=null,Mn=0,n=un)}if(n!==0){if(n===2&&(d=Gk(i),d!==0&&(c=d,n=_b(i,d))),n===1)throw o=bu,_a(i,0),ps(i,c),bi(i,Zt()),o;if(n===6)ps(i,c);else{if(d=i.current.alternate,!(c&30)&&!Nz(d)&&(n=Fp(i,c),n===2&&(h=Gk(i),h!==0&&(c=h,n=_b(i,h))),n===1))throw o=bu,_a(i,0),ps(i,c),bi(i,Zt()),o;switch(i.finishedWork=d,i.finishedLanes=c,n){case 0:case 1:throw Error(fe(345));case 2:ha(i,fi,_o);break;case 3:if(ps(i,c),(c&130023424)===c&&(n=Vw+500-Zt(),10<n)){if(yp(i,0)!==0)break;if(d=i.suspendedLanes,(d&c)!==c){Xn(),i.pingedLanes|=i.suspendedLanes&d;break}i.timeoutHandle=tb(ha.bind(null,i,fi,_o),n);break}ha(i,fi,_o);break;case 4:if(ps(i,c),(c&4194240)===c)break;for(n=i.eventTimes,d=-1;0<c;){var f=31-Dr(c);h=1<<f,f=n[f],f>d&&(d=f),c&=~h}if(c=d,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Mz(c/1960))-c,10<c){i.timeoutHandle=tb(ha.bind(null,i,fi,_o),c);break}ha(i,fi,_o);break;case 5:ha(i,fi,_o);break;default:throw Error(fe(329))}}}return bi(i,Zt()),i.callbackNode===o?qD.bind(null,i):null}function _b(i,n){var o=Yd;return i.current.memoizedState.isDehydrated&&(_a(i,n).flags|=256),i=Fp(i,n),i!==2&&(n=fi,fi=o,n!==null&&yb(n)),i}function yb(i){fi===null?fi=i:fi.push.apply(fi,i)}function Nz(i){for(var n=i;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],h=d.getSnapshot;d=d.value;try{if(!Ir(h(),d))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===i)break;for(;n.sibling===null;){if(n.return===null||n.return===i)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ps(i,n){for(n&=~Fw,n&=~pg,i.suspendedLanes|=n,i.pingedLanes&=~n,i=i.expirationTimes;0<n;){var o=31-Dr(n),c=1<<o;i[o]=-1,n&=~c}}function aE(i){if(Qe&6)throw Error(fe(327));Hc();var n=yp(i,0);if(!(n&1))return bi(i,Zt()),null;var o=Fp(i,n);if(i.tag!==0&&o===2){var c=Gk(i);c!==0&&(n=c,o=_b(i,c))}if(o===1)throw o=bu,_a(i,0),ps(i,n),bi(i,Zt()),o;if(o===6)throw Error(fe(345));return i.finishedWork=i.current.alternate,i.finishedLanes=n,ha(i,fi,_o),bi(i,Zt()),null}function $w(i,n){var o=Qe;Qe|=1;try{return i(n)}finally{Qe=o,Qe===0&&(Xc=Zt()+500,dg&&js())}}function Da(i){ws!==null&&ws.tag===0&&!(Qe&6)&&Hc();var n=Qe;Qe|=1;var o=sr.transition,c=ht;try{if(sr.transition=null,ht=1,i)return i()}finally{ht=c,sr.transition=o,Qe=n,!(Qe&6)&&js()}}function Uw(){Mi=jc.current,Et(jc)}function _a(i,n){i.finishedWork=null,i.finishedLanes=0;var o=i.timeoutHandle;if(o!==-1&&(i.timeoutHandle=-1,cz(o)),rn!==null)for(o=rn.return;o!==null;){var c=o;switch(Aw(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Sp();break;case 3:Qc(),Et(mi),Et(Un),Nw();break;case 5:Mw(c);break;case 4:Qc();break;case 13:Et(Bt);break;case 19:Et(Bt);break;case 10:Sw(c.type._context);break;case 22:case 23:Uw()}o=o.return}if(yn=i,rn=i=Ds(i.current,null),Mn=Mi=n,un=0,bu=null,Fw=pg=Sa=0,fi=Yd=null,ba!==null){for(n=0;n<ba.length;n++)if(o=ba[n],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,h=o.pending;if(h!==null){var f=h.next;h.next=d,c.next=f}o.pending=c}ba=null}return i}function GD(i,n){do{var o=rn;try{if(Ew(),ip.current=Lp,Bp){for(var c=Lt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Bp=!1}if(Ea=0,_n=dn=Lt=null,qd=!1,gu=0,Rw.current=null,o===null||o.return===null){un=1,bu=n,rn=null;break}e:{var h=i,f=o.return,m=o,k=n;if(n=Mn,m.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var v=k,w=m,y=w.tag;if(!(w.mode&1)&&(y===0||y===11||y===15)){var C=w.alternate;C?(w.updateQueue=C.updateQueue,w.memoizedState=C.memoizedState,w.lanes=C.lanes):(w.updateQueue=null,w.memoizedState=null)}var E=Y2(f);if(E!==null){E.flags&=-257,K2(E,f,m,h,n),E.mode&1&&G2(h,v,n),n=E,k=v;var D=n.updateQueue;if(D===null){var I=new Set;I.add(k),n.updateQueue=I}else D.add(k);break e}else{if(!(n&1)){G2(h,v,n),Hw();break e}k=Error(fe(426))}}else if(Tt&&m.mode&1){var j=Y2(f);if(j!==null){!(j.flags&65536)&&(j.flags|=256),K2(j,f,m,h,n),Cw(Jc(k,m));break e}}h=k=Jc(k,m),un!==4&&(un=2),Yd===null?Yd=[h]:Yd.push(h),h=f;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var P=ID(h,k,n);F2(h,P);break e;case 1:m=k;var L=h.type,S=h.stateNode;if(!(h.flags&128)&&(typeof L.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Es===null||!Es.has(S)))){h.flags|=65536,n&=-n,h.lanes|=n;var $=MD(h,m,n);F2(h,$);break e}}h=h.return}while(h!==null)}ZD(o)}catch(H){n=H,rn===o&&o!==null&&(rn=o=o.return);continue}break}while(1)}function YD(){var i=zp.current;return zp.current=Lp,i===null?Lp:i}function Hw(){(un===0||un===3||un===2)&&(un=4),yn===null||!(Sa&268435455)&&!(pg&268435455)||ps(yn,Mn)}function Fp(i,n){var o=Qe;Qe|=2;var c=YD();(yn!==i||Mn!==n)&&(_o=null,_a(i,n));do try{Oz();break}catch(d){GD(i,d)}while(1);if(Ew(),Qe=o,zp.current=c,rn!==null)throw Error(fe(261));return yn=null,Mn=0,un}function Oz(){for(;rn!==null;)KD(rn)}function Pz(){for(;rn!==null&&!o7();)KD(rn)}function KD(i){var n=JD(i.alternate,i,Mi);i.memoizedProps=i.pendingProps,n===null?ZD(i):rn=n,Rw.current=null}function ZD(i){var n=i;do{var o=n.alternate;if(i=n.return,n.flags&32768){if(o=Sz(o,n),o!==null){o.flags&=32767,rn=o;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{un=6,rn=null;return}}else if(o=Ez(o,n,Mi),o!==null){rn=o;return}if(n=n.sibling,n!==null){rn=n;return}rn=n=i}while(n!==null);un===0&&(un=5)}function ha(i,n,o){var c=ht,d=sr.transition;try{sr.transition=null,ht=1,Bz(i,n,o,c)}finally{sr.transition=d,ht=c}return null}function Bz(i,n,o,c){do Hc();while(ws!==null);if(Qe&6)throw Error(fe(327));o=i.finishedWork;var d=i.finishedLanes;if(o===null)return null;if(i.finishedWork=null,i.finishedLanes=0,o===i.current)throw Error(fe(177));i.callbackNode=null,i.callbackPriority=0;var h=o.lanes|o.childLanes;if(g7(i,h),i===yn&&(rn=yn=null,Mn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Mf||(Mf=!0,XD(_p,function(){return Hc(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=sr.transition,sr.transition=null;var f=ht;ht=1;var m=Qe;Qe|=4,Rw.current=null,Tz(i,o),HD(o,i),tz(Xk),Ap=!!Jk,Xk=Jk=null,i.current=o,Iz(o),s7(),Qe=m,ht=f,sr.transition=h}else i.current=o;if(Mf&&(Mf=!1,ws=i,Rp=d),h=i.pendingLanes,h===0&&(Es=null),l7(o.stateNode),bi(i,Zt()),n!==null)for(c=i.onRecoverableError,o=0;o<n.length;o++)d=n[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(jp)throw jp=!1,i=wb,wb=null,i;return Rp&1&&i.tag!==0&&Hc(),h=i.pendingLanes,h&1?i===vb?Kd++:(Kd=0,vb=i):Kd=0,js(),null}function Hc(){if(ws!==null){var i=TS(Rp),n=sr.transition,o=ht;try{if(sr.transition=null,ht=16>i?16:i,ws===null)var c=!1;else{if(i=ws,ws=null,Rp=0,Qe&6)throw Error(fe(331));var d=Qe;for(Qe|=4,_e=i.current;_e!==null;){var h=_e,f=h.child;if(_e.flags&16){var m=h.deletions;if(m!==null){for(var k=0;k<m.length;k++){var v=m[k];for(_e=v;_e!==null;){var w=_e;switch(w.tag){case 0:case 11:case 15:Gd(8,w,h)}var y=w.child;if(y!==null)y.return=w,_e=y;else for(;_e!==null;){w=_e;var C=w.sibling,E=w.return;if(VD(w),w===v){_e=null;break}if(C!==null){C.return=E,_e=C;break}_e=E}}}var D=h.alternate;if(D!==null){var I=D.child;if(I!==null){D.child=null;do{var j=I.sibling;I.sibling=null,I=j}while(I!==null)}}_e=h}}if(h.subtreeFlags&2064&&f!==null)f.return=h,_e=f;else e:for(;_e!==null;){if(h=_e,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Gd(9,h,h.return)}var P=h.sibling;if(P!==null){P.return=h.return,_e=P;break e}_e=h.return}}var L=i.current;for(_e=L;_e!==null;){f=_e;var S=f.child;if(f.subtreeFlags&2064&&S!==null)S.return=f,_e=S;else e:for(f=L;_e!==null;){if(m=_e,m.flags&2048)try{switch(m.tag){case 0:case 11:case 15:fg(9,m)}}catch(H){Ut(m,m.return,H)}if(m===f){_e=null;break e}var $=m.sibling;if($!==null){$.return=m.return,_e=$;break e}_e=m.return}}if(Qe=d,js(),Xr&&typeof Xr.onPostCommitFiberRoot=="function")try{Xr.onPostCommitFiberRoot(og,i)}catch{}c=!0}return c}finally{ht=o,sr.transition=n}}return!1}function cE(i,n,o){n=Jc(o,n),n=ID(i,n,1),i=xs(i,n,1),n=Xn(),i!==null&&(Su(i,1,n),bi(i,n))}function Ut(i,n,o){if(i.tag===3)cE(i,i,o);else for(;n!==null;){if(n.tag===3){cE(n,i,o);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Es===null||!Es.has(c))){i=Jc(o,i),i=MD(n,i,1),n=xs(n,i,1),i=Xn(),n!==null&&(Su(n,1,i),bi(n,i));break}}n=n.return}}function Lz(i,n,o){var c=i.pingCache;c!==null&&c.delete(n),n=Xn(),i.pingedLanes|=i.suspendedLanes&o,yn===i&&(Mn&o)===o&&(un===4||un===3&&(Mn&130023424)===Mn&&500>Zt()-Vw?_a(i,0):Fw|=o),bi(i,n)}function QD(i,n){n===0&&(i.mode&1?(n=_f,_f<<=1,!(_f&130023424)&&(_f=4194304)):n=1);var o=Xn();i=Io(i,n),i!==null&&(Su(i,n,o),bi(i,o))}function zz(i){var n=i.memoizedState,o=0;n!==null&&(o=n.retryLane),QD(i,o)}function jz(i,n){var o=0;switch(i.tag){case 13:var c=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(fe(314))}c!==null&&c.delete(n),QD(i,o)}var JD;JD=function(i,n,o){if(i!==null)if(i.memoizedProps!==n.pendingProps||mi.current)gi=!0;else{if(!(i.lanes&o)&&!(n.flags&128))return gi=!1,xz(i,n,o);gi=!!(i.flags&131072)}else gi=!1,Tt&&n.flags&1048576&&tD(n,Ip,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;op(i,n),i=n.pendingProps;var d=Yc(n,Un.current);Uc(n,o),d=Pw(null,n,c,i,d,o);var h=Bw();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ki(c)?(h=!0,Dp(n)):h=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Tw(n),d.updater=ug,n.stateNode=d,d._reactInternals=n,cb(n,c,i,o),n=ub(null,n,c,!0,h,o)):(n.tag=0,Tt&&h&&yw(n),Zn(null,n,d,o),n=n.child),n;case 16:c=n.elementType;e:{switch(op(i,n),i=n.pendingProps,d=c._init,c=d(c._payload),n.type=c,d=n.tag=Fz(c),i=Ar(c,i),d){case 0:n=db(null,n,c,i,o);break e;case 1:n=J2(null,n,c,i,o);break e;case 11:n=Z2(null,n,c,i,o);break e;case 14:n=Q2(null,n,c,Ar(c.type,i),o);break e}throw Error(fe(306,c,""))}return n;case 0:return c=n.type,d=n.pendingProps,d=n.elementType===c?d:Ar(c,d),db(i,n,c,d,o);case 1:return c=n.type,d=n.pendingProps,d=n.elementType===c?d:Ar(c,d),J2(i,n,c,d,o);case 3:e:{if(BD(n),i===null)throw Error(fe(387));c=n.pendingProps,h=n.memoizedState,d=h.element,oD(i,n),Op(n,c,null,o);var f=n.memoizedState;if(c=f.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){d=Jc(Error(fe(423)),n),n=X2(i,n,c,o,d);break e}else if(c!==d){d=Jc(Error(fe(424)),n),n=X2(i,n,c,o,d);break e}else for(Bi=Cs(n.stateNode.containerInfo.firstChild),Li=n,Tt=!0,Er=null,o=lD(n,null,c,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Kc(),c===d){n=Mo(i,n,o);break e}Zn(i,n,c,o)}n=n.child}return n;case 5:return dD(n),i===null&&ob(n),c=n.type,d=n.pendingProps,h=i!==null?i.memoizedProps:null,f=d.children,eb(c,d)?f=null:h!==null&&eb(c,h)&&(n.flags|=32),PD(i,n),Zn(i,n,f,o),n.child;case 6:return i===null&&ob(n),null;case 13:return LD(i,n,o);case 4:return Iw(n,n.stateNode.containerInfo),c=n.pendingProps,i===null?n.child=Zc(n,null,c,o):Zn(i,n,c,o),n.child;case 11:return c=n.type,d=n.pendingProps,d=n.elementType===c?d:Ar(c,d),Z2(i,n,c,d,o);case 7:return Zn(i,n,n.pendingProps,o),n.child;case 8:return Zn(i,n,n.pendingProps.children,o),n.child;case 12:return Zn(i,n,n.pendingProps.children,o),n.child;case 10:e:{if(c=n.type._context,d=n.pendingProps,h=n.memoizedProps,f=d.value,_t(Mp,c._currentValue),c._currentValue=f,h!==null)if(Ir(h.value,f)){if(h.children===d.children&&!mi.current){n=Mo(i,n,o);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var m=h.dependencies;if(m!==null){f=h.child;for(var k=m.firstContext;k!==null;){if(k.context===c){if(h.tag===1){k=So(-1,o&-o),k.tag=2;var v=h.updateQueue;if(v!==null){v=v.shared;var w=v.pending;w===null?k.next=k:(k.next=w.next,w.next=k),v.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),sb(h.return,o,n),m.lanes|=o;break}k=k.next}}else if(h.tag===10)f=h.type===n.type?null:h.child;else if(h.tag===18){if(f=h.return,f===null)throw Error(fe(341));f.lanes|=o,m=f.alternate,m!==null&&(m.lanes|=o),sb(f,o,n),f=h.sibling}else f=h.child;if(f!==null)f.return=h;else for(f=h;f!==null;){if(f===n){f=null;break}if(h=f.sibling,h!==null){h.return=f.return,f=h;break}f=f.return}h=f}Zn(i,n,d.children,o),n=n.child}return n;case 9:return d=n.type,c=n.pendingProps.children,Uc(n,o),d=ar(d),c=c(d),n.flags|=1,Zn(i,n,c,o),n.child;case 14:return c=n.type,d=Ar(c,n.pendingProps),d=Ar(c.type,d),Q2(i,n,c,d,o);case 15:return ND(i,n,n.type,n.pendingProps,o);case 17:return c=n.type,d=n.pendingProps,d=n.elementType===c?d:Ar(c,d),op(i,n),n.tag=1,ki(c)?(i=!0,Dp(n)):i=!1,Uc(n,o),aD(n,c,d),cb(n,c,d,o),ub(null,n,c,!0,i,o);case 19:return zD(i,n,o);case 22:return OD(i,n,o)}throw Error(fe(156,n.tag))};function XD(i,n){return xS(i,n)}function Rz(i,n,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rr(i,n,o,c){return new Rz(i,n,o,c)}function Ww(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Fz(i){if(typeof i=="function")return Ww(i)?1:0;if(i!=null){if(i=i.$$typeof,i===dw)return 11;if(i===uw)return 14}return 2}function Ds(i,n){var o=i.alternate;return o===null?(o=rr(i.tag,n,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=n,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&14680064,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,n=i.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o}function cp(i,n,o,c,d,h){var f=2;if(c=i,typeof i=="function")Ww(i)&&(f=1);else if(typeof i=="string")f=5;else e:switch(i){case Dc:return ya(o.children,d,h,n);case lw:f=8,d|=8;break;case Nk:return i=rr(12,o,n,d|2),i.elementType=Nk,i.lanes=h,i;case Ok:return i=rr(13,o,n,d),i.elementType=Ok,i.lanes=h,i;case Pk:return i=rr(19,o,n,d),i.elementType=Pk,i.lanes=h,i;case cS:return gg(o,d,h,n);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case sS:f=10;break e;case aS:f=9;break e;case dw:f=11;break e;case uw:f=14;break e;case ls:f=16,c=null;break e}throw Error(fe(130,i==null?i:typeof i,""))}return n=rr(f,o,n,d),n.elementType=i,n.type=c,n.lanes=h,n}function ya(i,n,o,c){return i=rr(7,i,c,n),i.lanes=o,i}function gg(i,n,o,c){return i=rr(22,i,c,n),i.elementType=cS,i.lanes=o,i.stateNode={isHidden:!1},i}function rk(i,n,o){return i=rr(6,i,null,n),i.lanes=o,i}function ok(i,n,o){return n=rr(4,i.children!==null?i.children:[],i.key,n),n.lanes=o,n.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},n}function Vz(i,n,o,c,d){this.tag=n,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=R0(0),this.expirationTimes=R0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=R0(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function qw(i,n,o,c,d,h,f,m,k){return i=new Vz(i,n,o,m,k),n===1?(n=1,h===!0&&(n|=8)):n=0,h=rr(3,null,null,n),i.current=h,h.stateNode=i,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tw(h),i}function $z(i,n,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sc,key:c==null?null:""+c,children:i,containerInfo:n,implementation:o}}function eT(i){if(!i)return Ms;i=i._reactInternals;e:{if(Ma(i)!==i||i.tag!==1)throw Error(fe(170));var n=i;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ki(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(fe(171))}if(i.tag===1){var o=i.type;if(ki(o))return XS(i,o,n)}return n}function tT(i,n,o,c,d,h,f,m,k){return i=qw(o,c,!0,i,d,h,f,m,k),i.context=eT(null),o=i.current,c=Xn(),d=Ss(o),h=So(c,d),h.callback=n??null,xs(o,h,d),i.current.lanes=d,Su(i,d,c),bi(i,c),i}function mg(i,n,o,c){var d=n.current,h=Xn(),f=Ss(d);return o=eT(o),n.context===null?n.context=o:n.pendingContext=o,n=So(h,f),n.payload={element:i},c=c===void 0?null:c,c!==null&&(n.callback=c),i=xs(d,n,f),i!==null&&(Tr(i,d,f,h),np(i,d,f)),f}function Vp(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function lE(i,n){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<n?o:n}}function Gw(i,n){lE(i,n),(i=i.alternate)&&lE(i,n)}function Uz(){return null}var nT=typeof reportError=="function"?reportError:function(i){console.error(i)};function Yw(i){this._internalRoot=i}kg.prototype.render=Yw.prototype.render=function(i){var n=this._internalRoot;if(n===null)throw Error(fe(409));mg(i,n,null,null)};kg.prototype.unmount=Yw.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var n=i.containerInfo;Da(function(){mg(null,i,null,null)}),n[To]=null}};function kg(i){this._internalRoot=i}kg.prototype.unstable_scheduleHydration=function(i){if(i){var n=NS();i={blockedOn:null,target:i,priority:n};for(var o=0;o<fs.length&&n!==0&&n<fs[o].priority;o++);fs.splice(o,0,i),o===0&&PS(i)}};function Kw(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function bg(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function dE(){}function Hz(i,n,o,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var v=Vp(f);h.call(v)}}var f=tT(n,c,i,0,null,!1,!1,"",dE);return i._reactRootContainer=f,i[To]=f.current,du(i.nodeType===8?i.parentNode:i),Da(),f}for(;d=i.lastChild;)i.removeChild(d);if(typeof c=="function"){var m=c;c=function(){var v=Vp(k);m.call(v)}}var k=qw(i,0,!1,null,null,!1,!1,"",dE);return i._reactRootContainer=k,i[To]=k.current,du(i.nodeType===8?i.parentNode:i),Da(function(){mg(n,k,o,c)}),k}function wg(i,n,o,c,d){var h=o._reactRootContainer;if(h){var f=h;if(typeof d=="function"){var m=d;d=function(){var k=Vp(f);m.call(k)}}mg(n,f,i,d)}else f=Hz(o,n,i,d,c);return Vp(f)}IS=function(i){switch(i.tag){case 3:var n=i.stateNode;if(n.current.memoizedState.isDehydrated){var o=Bd(n.pendingLanes);o!==0&&(pw(n,o|1),bi(n,Zt()),!(Qe&6)&&(Xc=Zt()+500,js()))}break;case 13:Da(function(){var c=Io(i,1);if(c!==null){var d=Xn();Tr(c,i,1,d)}}),Gw(i,1)}};gw=function(i){if(i.tag===13){var n=Io(i,134217728);if(n!==null){var o=Xn();Tr(n,i,134217728,o)}Gw(i,134217728)}};MS=function(i){if(i.tag===13){var n=Ss(i),o=Io(i,n);if(o!==null){var c=Xn();Tr(o,i,n,c)}Gw(i,n)}};NS=function(){return ht};OS=function(i,n){var o=ht;try{return ht=i,n()}finally{ht=o}};Hk=function(i,n,o){switch(n){case"input":if(zk(i,o),n=o.name,o.type==="radio"&&n!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var c=o[n];if(c!==i&&c.form===i.form){var d=lg(c);if(!d)throw Error(fe(90));dS(c),zk(c,d)}}}break;case"textarea":hS(i,o);break;case"select":n=o.value,n!=null&&Rc(i,!!o.multiple,n,!1)}};wS=$w;vS=Da;var Wz={usingClientEntryPoint:!1,Events:[Tu,Nc,lg,kS,bS,$w]},Td={findFiberByHostInstance:ka,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qz={bundleType:Td.bundleType,version:Td.version,rendererPackageName:Td.rendererPackageName,rendererConfig:Td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jo.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=AS(i),i===null?null:i.stateNode},findFiberByHostInstance:Td.findFiberByHostInstance||Uz,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nf.isDisabled&&Nf.supportsFiber)try{og=Nf.inject(qz),Xr=Nf}catch{}}Fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wz;Fi.createPortal=function(i,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kw(n))throw Error(fe(200));return $z(i,n,null,o)};Fi.createRoot=function(i,n){if(!Kw(i))throw Error(fe(299));var o=!1,c="",d=nT;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=qw(i,1,!1,null,null,o,!1,c,d),i[To]=n.current,du(i.nodeType===8?i.parentNode:i),new Yw(n)};Fi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var n=i._reactInternals;if(n===void 0)throw typeof i.render=="function"?Error(fe(188)):(i=Object.keys(i).join(","),Error(fe(268,i)));return i=AS(n),i=i===null?null:i.stateNode,i};Fi.flushSync=function(i){return Da(i)};Fi.hydrate=function(i,n,o){if(!bg(n))throw Error(fe(200));return wg(null,i,n,!0,o)};Fi.hydrateRoot=function(i,n,o){if(!Kw(i))throw Error(fe(405));var c=o!=null&&o.hydratedSources||null,d=!1,h="",f=nT;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(f=o.onRecoverableError)),n=tT(n,null,i,1,o??null,d,!1,h,f),i[To]=n.current,du(i),c)for(i=0;i<c.length;i++)o=c[i],d=o._getVersion,d=d(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,d]:n.mutableSourceEagerHydrationData.push(o,d);return new kg(n)};Fi.render=function(i,n,o){if(!bg(n))throw Error(fe(200));return wg(null,i,n,!1,o)};Fi.unmountComponentAtNode=function(i){if(!bg(i))throw Error(fe(40));return i._reactRootContainer?(Da(function(){wg(null,null,i,!1,function(){i._reactRootContainer=null,i[To]=null})}),!0):!1};Fi.unstable_batchedUpdates=$w;Fi.unstable_renderSubtreeIntoContainer=function(i,n,o,c){if(!bg(o))throw Error(fe(200));if(i==null||i._reactInternals===void 0)throw Error(fe(38));return wg(i,n,o,!1,c)};Fi.version="18.2.0-next-9e3b772b8-20220608";function iT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iT)}catch(i){console.error(i)}}iT(),tS.exports=Fi;var Mu=tS.exports;const Gz=ig(Mu);var uE=Mu;Ik.createRoot=uE.createRoot,Ik.hydrateRoot=uE.hydrateRoot;/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wu(){return wu=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(i[c]=o[c])}return i},wu.apply(this,arguments)}var vs;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(vs||(vs={}));const hE="popstate";function Yz(i){i===void 0&&(i={});function n(c,d){let{pathname:h,search:f,hash:m}=c.location;return Ab("",{pathname:h,search:f,hash:m},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){return typeof d=="string"?d:$p(d)}return Zz(n,o,null,i)}function Qt(i,n){if(i===!1||i===null||typeof i>"u")throw new Error(n)}function Zw(i,n){if(!i){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Kz(){return Math.random().toString(36).substr(2,8)}function fE(i,n){return{usr:i.state,key:i.key,idx:n}}function Ab(i,n,o,c){return o===void 0&&(o=null),wu({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof n=="string"?sl(n):n,{state:o,key:n&&n.key||c||Kz()})}function $p(i){let{pathname:n="/",search:o="",hash:c=""}=i;return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(n+=c.charAt(0)==="#"?c:"#"+c),n}function sl(i){let n={};if(i){let o=i.indexOf("#");o>=0&&(n.hash=i.substr(o),i=i.substr(0,o));let c=i.indexOf("?");c>=0&&(n.search=i.substr(c),i=i.substr(0,c)),i&&(n.pathname=i)}return n}function Zz(i,n,o,c){c===void 0&&(c={});let{window:d=document.defaultView,v5Compat:h=!1}=c,f=d.history,m=vs.Pop,k=null,v=w();v==null&&(v=0,f.replaceState(wu({},f.state,{idx:v}),""));function w(){return(f.state||{idx:null}).idx}function y(){m=vs.Pop;let j=w(),P=j==null?null:j-v;v=j,k&&k({action:m,location:I.location,delta:P})}function C(j,P){m=vs.Push;let L=Ab(I.location,j,P);o&&o(L,j),v=w()+1;let S=fE(L,v),$=I.createHref(L);try{f.pushState(S,"",$)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;d.location.assign($)}h&&k&&k({action:m,location:I.location,delta:1})}function E(j,P){m=vs.Replace;let L=Ab(I.location,j,P);o&&o(L,j),v=w();let S=fE(L,v),$=I.createHref(L);f.replaceState(S,"",$),h&&k&&k({action:m,location:I.location,delta:0})}function D(j){let P=d.location.origin!=="null"?d.location.origin:d.location.href,L=typeof j=="string"?j:$p(j);return Qt(P,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,P)}let I={get action(){return m},get location(){return i(d,f)},listen(j){if(k)throw new Error("A history only accepts one active listener");return d.addEventListener(hE,y),k=j,()=>{d.removeEventListener(hE,y),k=null}},createHref(j){return n(d,j)},createURL:D,encodeLocation(j){let P=D(j);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:C,replace:E,go(j){return f.go(j)}};return I}var pE;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(pE||(pE={}));function Qz(i,n,o){o===void 0&&(o="/");let c=typeof n=="string"?sl(n):n,d=Qw(c.pathname||"/",o);if(d==null)return null;let h=rT(i);Jz(h);let f=null;for(let m=0;f==null&&m<h.length;++m)f=aj(h[m],dj(d));return f}function rT(i,n,o,c){n===void 0&&(n=[]),o===void 0&&(o=[]),c===void 0&&(c="");let d=(h,f,m)=>{let k={relativePath:m===void 0?h.path||"":m,caseSensitive:h.caseSensitive===!0,childrenIndex:f,route:h};k.relativePath.startsWith("/")&&(Qt(k.relativePath.startsWith(c),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(c.length));let v=Ts([c,k.relativePath]),w=o.concat(k);h.children&&h.children.length>0&&(Qt(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),rT(h.children,n,w,v)),!(h.path==null&&!h.index)&&n.push({path:v,score:oj(v,h.index),routesMeta:w})};return i.forEach((h,f)=>{var m;if(h.path===""||!((m=h.path)!=null&&m.includes("?")))d(h,f);else for(let k of oT(h.path))d(h,f,k)}),n}function oT(i){let n=i.split("/");if(n.length===0)return[];let[o,...c]=n,d=o.endsWith("?"),h=o.replace(/\?$/,"");if(c.length===0)return d?[h,""]:[h];let f=oT(c.join("/")),m=[];return m.push(...f.map(k=>k===""?h:[h,k].join("/"))),d&&m.push(...f),m.map(k=>i.startsWith("/")&&k===""?"/":k)}function Jz(i){i.sort((n,o)=>n.score!==o.score?o.score-n.score:sj(n.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}const Xz=/^:\w+$/,ej=3,tj=2,nj=1,ij=10,rj=-2,gE=i=>i==="*";function oj(i,n){let o=i.split("/"),c=o.length;return o.some(gE)&&(c+=rj),n&&(c+=tj),o.filter(d=>!gE(d)).reduce((d,h)=>d+(Xz.test(h)?ej:h===""?nj:ij),c)}function sj(i,n){return i.length===n.length&&i.slice(0,-1).every((c,d)=>c===n[d])?i[i.length-1]-n[n.length-1]:0}function aj(i,n){let{routesMeta:o}=i,c={},d="/",h=[];for(let f=0;f<o.length;++f){let m=o[f],k=f===o.length-1,v=d==="/"?n:n.slice(d.length)||"/",w=cj({path:m.relativePath,caseSensitive:m.caseSensitive,end:k},v);if(!w)return null;Object.assign(c,w.params);let y=m.route;h.push({params:c,pathname:Ts([d,w.pathname]),pathnameBase:pj(Ts([d,w.pathnameBase])),route:y}),w.pathnameBase!=="/"&&(d=Ts([d,w.pathnameBase]))}return h}function cj(i,n){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,c]=lj(i.path,i.caseSensitive,i.end),d=n.match(o);if(!d)return null;let h=d[0],f=h.replace(/(.)\/+$/,"$1"),m=d.slice(1);return{params:c.reduce((v,w,y)=>{let{paramName:C,isOptional:E}=w;if(C==="*"){let I=m[y]||"";f=h.slice(0,h.length-I.length).replace(/(.)\/+$/,"$1")}const D=m[y];return E&&!D?v[C]=void 0:v[C]=uj(D||"",C),v},{}),pathname:h,pathnameBase:f,pattern:i}}function lj(i,n,o){n===void 0&&(n=!1),o===void 0&&(o=!0),Zw(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let c=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(f,m,k)=>(c.push({paramName:m,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(c.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,n?void 0:"i"),c]}function dj(i){try{return decodeURI(i)}catch(n){return Zw(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),i}}function uj(i,n){try{return decodeURIComponent(i)}catch(o){return Zw(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+i+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+o+").")),i}}function Qw(i,n){if(n==="/")return i;if(!i.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,c=i.charAt(o);return c&&c!=="/"?null:i.slice(o)||"/"}function hj(i,n){n===void 0&&(n="/");let{pathname:o,search:c="",hash:d=""}=typeof i=="string"?sl(i):i;return{pathname:o?o.startsWith("/")?o:fj(o,n):n,search:gj(c),hash:mj(d)}}function fj(i,n){let o=n.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function sk(i,n,o,c){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jw(i){return i.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function Xw(i,n,o,c){c===void 0&&(c=!1);let d;typeof i=="string"?d=sl(i):(d=wu({},i),Qt(!d.pathname||!d.pathname.includes("?"),sk("?","pathname","search",d)),Qt(!d.pathname||!d.pathname.includes("#"),sk("#","pathname","hash",d)),Qt(!d.search||!d.search.includes("#"),sk("#","search","hash",d)));let h=i===""||d.pathname==="",f=h?"/":d.pathname,m;if(c||f==null)m=o;else{let y=n.length-1;if(f.startsWith("..")){let C=f.split("/");for(;C[0]==="..";)C.shift(),y-=1;d.pathname=C.join("/")}m=y>=0?n[y]:"/"}let k=hj(d,m),v=f&&f!=="/"&&f.endsWith("/"),w=(h||f===".")&&o.endsWith("/");return!k.pathname.endsWith("/")&&(v||w)&&(k.pathname+="/"),k}const Ts=i=>i.join("/").replace(/\/\/+/g,"/"),pj=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),gj=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,mj=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function kj(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const sT=["post","put","patch","delete"];new Set(sT);const bj=["get",...sT];new Set(bj);/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Up(){return Up=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(i[c]=o[c])}return i},Up.apply(this,arguments)}const ev=M.createContext(null),wj=M.createContext(null),al=M.createContext(null),vg=M.createContext(null),Ro=M.createContext({outlet:null,matches:[],isDataRoute:!1}),aT=M.createContext(null);function vj(i,n){let{relative:o}=n===void 0?{}:n;cl()||Qt(!1);let{basename:c,navigator:d}=M.useContext(al),{hash:h,pathname:f,search:m}=lT(i,{relative:o}),k=f;return c!=="/"&&(k=f==="/"?c:Ts([c,f])),d.createHref({pathname:k,search:m,hash:h})}function cl(){return M.useContext(vg)!=null}function ll(){return cl()||Qt(!1),M.useContext(vg).location}function cT(i){M.useContext(al).static||M.useLayoutEffect(i)}function Fo(){let{isDataRoute:i}=M.useContext(Ro);return i?Oj():_j()}function _j(){cl()||Qt(!1);let i=M.useContext(ev),{basename:n,navigator:o}=M.useContext(al),{matches:c}=M.useContext(Ro),{pathname:d}=ll(),h=JSON.stringify(Jw(c).map(k=>k.pathnameBase)),f=M.useRef(!1);return cT(()=>{f.current=!0}),M.useCallback(function(k,v){if(v===void 0&&(v={}),!f.current)return;if(typeof k=="number"){o.go(k);return}let w=Xw(k,JSON.parse(h),d,v.relative==="path");i==null&&n!=="/"&&(w.pathname=w.pathname==="/"?n:Ts([n,w.pathname])),(v.replace?o.replace:o.push)(w,v.state,v)},[n,o,h,d,i])}function tv(){let{matches:i}=M.useContext(Ro),n=i[i.length-1];return n?n.params:{}}function lT(i,n){let{relative:o}=n===void 0?{}:n,{matches:c}=M.useContext(Ro),{pathname:d}=ll(),h=JSON.stringify(Jw(c).map(f=>f.pathnameBase));return M.useMemo(()=>Xw(i,JSON.parse(h),d,o==="path"),[i,h,d,o])}function yj(i,n){return Aj(i,n)}function Aj(i,n,o){cl()||Qt(!1);let{navigator:c}=M.useContext(al),{matches:d}=M.useContext(Ro),h=d[d.length-1],f=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let k=ll(),v;if(n){var w;let I=typeof n=="string"?sl(n):n;m==="/"||(w=I.pathname)!=null&&w.startsWith(m)||Qt(!1),v=I}else v=k;let y=v.pathname||"/",C=m==="/"?y:y.slice(m.length)||"/",E=Qz(i,{pathname:C}),D=Dj(E&&E.map(I=>Object.assign({},I,{params:Object.assign({},f,I.params),pathname:Ts([m,c.encodeLocation?c.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?m:Ts([m,c.encodeLocation?c.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),d,o);return n&&D?M.createElement(vg.Provider,{value:{location:Up({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:vs.Pop}},D):D}function Cj(){let i=Nj(),n=kj(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,d={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},h=null;return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},n),o?M.createElement("pre",{style:d},o):null,h)}const xj=M.createElement(Cj,null);class Ej extends M.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error||o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error?M.createElement(Ro.Provider,{value:this.props.routeContext},M.createElement(aT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sj(i){let{routeContext:n,match:o,children:c}=i,d=M.useContext(ev);return d&&d.static&&d.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=o.route.id),M.createElement(Ro.Provider,{value:n},c)}function Dj(i,n,o){var c;if(n===void 0&&(n=[]),o===void 0&&(o=null),i==null){var d;if((d=o)!=null&&d.errors)i=o.matches;else return null}let h=i,f=(c=o)==null?void 0:c.errors;if(f!=null){let m=h.findIndex(k=>k.route.id&&(f==null?void 0:f[k.route.id]));m>=0||Qt(!1),h=h.slice(0,Math.min(h.length,m+1))}return h.reduceRight((m,k,v)=>{let w=k.route.id?f==null?void 0:f[k.route.id]:null,y=null;o&&(y=k.route.errorElement||xj);let C=n.concat(h.slice(0,v+1)),E=()=>{let D;return w?D=y:k.route.Component?D=M.createElement(k.route.Component,null):k.route.element?D=k.route.element:D=m,M.createElement(Sj,{match:k,routeContext:{outlet:m,matches:C,isDataRoute:o!=null},children:D})};return o&&(k.route.ErrorBoundary||k.route.errorElement||v===0)?M.createElement(Ej,{location:o.location,revalidation:o.revalidation,component:y,error:w,children:E(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):E()},null)}var dT=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(dT||{}),Hp=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(Hp||{});function Tj(i){let n=M.useContext(ev);return n||Qt(!1),n}function Ij(i){let n=M.useContext(wj);return n||Qt(!1),n}function Mj(i){let n=M.useContext(Ro);return n||Qt(!1),n}function uT(i){let n=Mj(),o=n.matches[n.matches.length-1];return o.route.id||Qt(!1),o.route.id}function Nj(){var i;let n=M.useContext(aT),o=Ij(Hp.UseRouteError),c=uT(Hp.UseRouteError);return n||((i=o.errors)==null?void 0:i[c])}function Oj(){let{router:i}=Tj(dT.UseNavigateStable),n=uT(Hp.UseNavigateStable),o=M.useRef(!1);return cT(()=>{o.current=!0}),M.useCallback(function(d,h){h===void 0&&(h={}),o.current&&(typeof d=="number"?i.navigate(d):i.navigate(d,Up({fromRouteId:n},h)))},[i,n])}function Pj(i){let{to:n,replace:o,state:c,relative:d}=i;cl()||Qt(!1);let{matches:h}=M.useContext(Ro),{pathname:f}=ll(),m=Fo(),k=Xw(n,Jw(h).map(w=>w.pathnameBase),f,d==="path"),v=JSON.stringify(k);return M.useEffect(()=>m(JSON.parse(v),{replace:o,state:c,relative:d}),[m,v,d,o,c]),null}function er(i){Qt(!1)}function Bj(i){let{basename:n="/",children:o=null,location:c,navigationType:d=vs.Pop,navigator:h,static:f=!1}=i;cl()&&Qt(!1);let m=n.replace(/^\/*/,"/"),k=M.useMemo(()=>({basename:m,navigator:h,static:f}),[m,h,f]);typeof c=="string"&&(c=sl(c));let{pathname:v="/",search:w="",hash:y="",state:C=null,key:E="default"}=c,D=M.useMemo(()=>{let I=Qw(v,m);return I==null?null:{location:{pathname:I,search:w,hash:y,state:C,key:E},navigationType:d}},[m,v,w,y,C,E,d]);return D==null?null:M.createElement(al.Provider,{value:k},M.createElement(vg.Provider,{children:o,value:D}))}function Lj(i){let{children:n,location:o}=i;return yj(Cb(n),o)}new Promise(()=>{});function Cb(i,n){n===void 0&&(n=[]);let o=[];return M.Children.forEach(i,(c,d)=>{if(!M.isValidElement(c))return;let h=[...n,d];if(c.type===M.Fragment){o.push.apply(o,Cb(c.props.children,h));return}c.type!==er&&Qt(!1),!c.props.index||!c.props.children||Qt(!1);let f={id:c.props.id||h.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(f.children=Cb(c.props.children,h)),o.push(f)}),o}/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xb(){return xb=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(i[c]=o[c])}return i},xb.apply(this,arguments)}function zj(i,n){if(i==null)return{};var o={},c=Object.keys(i),d,h;for(h=0;h<c.length;h++)d=c[h],!(n.indexOf(d)>=0)&&(o[d]=i[d]);return o}function jj(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Rj(i,n){return i.button===0&&(!n||n==="_self")&&!jj(i)}const Fj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Vj="startTransition",mE=X5[Vj];function $j(i){let{basename:n,children:o,future:c,window:d}=i,h=M.useRef();h.current==null&&(h.current=Yz({window:d,v5Compat:!0}));let f=h.current,[m,k]=M.useState({action:f.action,location:f.location}),{v7_startTransition:v}=c||{},w=M.useCallback(y=>{v&&mE?mE(()=>k(y)):k(y)},[k,v]);return M.useLayoutEffect(()=>f.listen(w),[f,w]),M.createElement(Bj,{basename:n,children:o,location:m.location,navigationType:m.action,navigator:f})}const Uj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ni=M.forwardRef(function(n,o){let{onClick:c,relative:d,reloadDocument:h,replace:f,state:m,target:k,to:v,preventScrollReset:w,unstable_viewTransition:y}=n,C=zj(n,Fj),{basename:E}=M.useContext(al),D,I=!1;if(typeof v=="string"&&Hj.test(v)&&(D=v,Uj))try{let S=new URL(window.location.href),$=v.startsWith("//")?new URL(S.protocol+v):new URL(v),H=Qw($.pathname,E);$.origin===S.origin&&H!=null?v=H+$.search+$.hash:I=!0}catch{}let j=vj(v,{relative:d}),P=Wj(v,{replace:f,state:m,target:k,preventScrollReset:w,relative:d,unstable_viewTransition:y});function L(S){c&&c(S),S.defaultPrevented||P(S)}return M.createElement("a",xb({},C,{href:D||j,onClick:I||h?c:L,ref:o,target:k}))});var kE;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(kE||(kE={}));var bE;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(bE||(bE={}));function Wj(i,n){let{target:o,replace:c,state:d,preventScrollReset:h,relative:f,unstable_viewTransition:m}=n===void 0?{}:n,k=Fo(),v=ll(),w=lT(i,{relative:f});return M.useCallback(y=>{if(Rj(y,o)){y.preventDefault();let C=c!==void 0?c:$p(v)===$p(w);k(i,{replace:C,state:d,preventScrollReset:h,relative:f,unstable_viewTransition:m})}},[v,k,w,c,d,o,i,h,f,m])}function No(i){return Array.isArray?Array.isArray(i):pT(i)==="[object Array]"}const qj=1/0;function Gj(i){if(typeof i=="string")return i;let n=i+"";return n=="0"&&1/i==-qj?"-0":n}function Yj(i){return i==null?"":Gj(i)}function Jr(i){return typeof i=="string"}function hT(i){return typeof i=="number"}function Kj(i){return i===!0||i===!1||Zj(i)&&pT(i)=="[object Boolean]"}function fT(i){return typeof i=="object"}function Zj(i){return fT(i)&&i!==null}function Oi(i){return i!=null}function ak(i){return!i.trim().length}function pT(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(i)}const Qj="Incorrect 'index' type",Jj=i=>`Invalid value for key ${i}`,Xj=i=>`Pattern length exceeds max of ${i}.`,eR=i=>`Missing ${i} property in key`,tR=i=>`Property 'weight' in key '${i}' must be a positive integer`,wE=Object.prototype.hasOwnProperty;class nR{constructor(n){this._keys=[],this._keyMap={};let o=0;n.forEach(c=>{let d=gT(c);this._keys.push(d),this._keyMap[d.id]=d,o+=d.weight}),this._keys.forEach(c=>{c.weight/=o})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function gT(i){let n=null,o=null,c=null,d=1,h=null;if(Jr(i)||No(i))c=i,n=vE(i),o=Eb(i);else{if(!wE.call(i,"name"))throw new Error(eR("name"));const f=i.name;if(c=f,wE.call(i,"weight")&&(d=i.weight,d<=0))throw new Error(tR(f));n=vE(f),o=Eb(f),h=i.getFn}return{path:n,id:o,weight:d,src:c,getFn:h}}function vE(i){return No(i)?i:i.split(".")}function Eb(i){return No(i)?i.join("."):i}function iR(i,n){let o=[],c=!1;const d=(h,f,m)=>{if(Oi(h))if(!f[m])o.push(h);else{let k=f[m];const v=h[k];if(!Oi(v))return;if(m===f.length-1&&(Jr(v)||hT(v)||Kj(v)))o.push(Yj(v));else if(No(v)){c=!0;for(let w=0,y=v.length;w<y;w+=1)d(v[w],f,m+1)}else f.length&&d(v,f,m+1)}};return d(i,Jr(n)?n.split("."):n,0),c?o:o[0]}const rR={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},oR={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(i,n)=>i.score===n.score?i.idx<n.idx?-1:1:i.score<n.score?-1:1},sR={location:0,threshold:.6,distance:100},aR={useExtendedSearch:!1,getFn:iR,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Pe={...oR,...rR,...sR,...aR};const cR=/[^ ]+/g;function lR(i=1,n=3){const o=new Map,c=Math.pow(10,n);return{get(d){const h=d.match(cR).length;if(o.has(h))return o.get(h);const f=1/Math.pow(h,.5*i),m=parseFloat(Math.round(f*c)/c);return o.set(h,m),m},clear(){o.clear()}}}class nv{constructor({getFn:n=Pe.getFn,fieldNormWeight:o=Pe.fieldNormWeight}={}){this.norm=lR(o,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((o,c)=>{this._keysMap[o.id]=c})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Jr(this.docs[0])?this.docs.forEach((n,o)=>{this._addString(n,o)}):this.docs.forEach((n,o)=>{this._addObject(n,o)}),this.norm.clear())}add(n){const o=this.size();Jr(n)?this._addString(n,o):this._addObject(n,o)}removeAt(n){this.records.splice(n,1);for(let o=n,c=this.size();o<c;o+=1)this.records[o].i-=1}getValueForItemAtKeyId(n,o){return n[this._keysMap[o]]}size(){return this.records.length}_addString(n,o){if(!Oi(n)||ak(n))return;let c={v:n,i:o,n:this.norm.get(n)};this.records.push(c)}_addObject(n,o){let c={i:o,$:{}};this.keys.forEach((d,h)=>{let f=d.getFn?d.getFn(n):this.getFn(n,d.path);if(Oi(f)){if(No(f)){let m=[];const k=[{nestedArrIndex:-1,value:f}];for(;k.length;){const{nestedArrIndex:v,value:w}=k.pop();if(Oi(w))if(Jr(w)&&!ak(w)){let y={v:w,i:v,n:this.norm.get(w)};m.push(y)}else No(w)&&w.forEach((y,C)=>{k.push({nestedArrIndex:C,value:y})})}c.$[h]=m}else if(Jr(f)&&!ak(f)){let m={v:f,n:this.norm.get(f)};c.$[h]=m}}}),this.records.push(c)}toJSON(){return{keys:this.keys,records:this.records}}}function mT(i,n,{getFn:o=Pe.getFn,fieldNormWeight:c=Pe.fieldNormWeight}={}){const d=new nv({getFn:o,fieldNormWeight:c});return d.setKeys(i.map(gT)),d.setSources(n),d.create(),d}function dR(i,{getFn:n=Pe.getFn,fieldNormWeight:o=Pe.fieldNormWeight}={}){const{keys:c,records:d}=i,h=new nv({getFn:n,fieldNormWeight:o});return h.setKeys(c),h.setIndexRecords(d),h}function Of(i,{errors:n=0,currentLocation:o=0,expectedLocation:c=0,distance:d=Pe.distance,ignoreLocation:h=Pe.ignoreLocation}={}){const f=n/i.length;if(h)return f;const m=Math.abs(c-o);return d?f+m/d:m?1:f}function uR(i=[],n=Pe.minMatchCharLength){let o=[],c=-1,d=-1,h=0;for(let f=i.length;h<f;h+=1){let m=i[h];m&&c===-1?c=h:!m&&c!==-1&&(d=h-1,d-c+1>=n&&o.push([c,d]),c=-1)}return i[h-1]&&h-c>=n&&o.push([c,h-1]),o}const fa=32;function hR(i,n,o,{location:c=Pe.location,distance:d=Pe.distance,threshold:h=Pe.threshold,findAllMatches:f=Pe.findAllMatches,minMatchCharLength:m=Pe.minMatchCharLength,includeMatches:k=Pe.includeMatches,ignoreLocation:v=Pe.ignoreLocation}={}){if(n.length>fa)throw new Error(Xj(fa));const w=n.length,y=i.length,C=Math.max(0,Math.min(c,y));let E=h,D=C;const I=m>1||k,j=I?Array(y):[];let P;for(;(P=i.indexOf(n,D))>-1;){let Z=Of(n,{currentLocation:P,expectedLocation:C,distance:d,ignoreLocation:v});if(E=Math.min(Z,E),D=P+w,I){let ee=0;for(;ee<w;)j[P+ee]=1,ee+=1}}D=-1;let L=[],S=1,$=w+y;const H=1<<w-1;for(let Z=0;Z<w;Z+=1){let ee=0,de=$;for(;ee<de;)Of(n,{errors:Z,currentLocation:C+de,expectedLocation:C,distance:d,ignoreLocation:v})<=E?ee=de:$=de,de=Math.floor(($-ee)/2+ee);$=de;let se=Math.max(1,C-de+1),Y=f?y:Math.min(C+de,y)+w,Q=Array(Y+2);Q[Y+1]=(1<<Z)-1;for(let U=Y;U>=se;U-=1){let W=U-1,X=o[i.charAt(W)];if(I&&(j[W]=+!!X),Q[U]=(Q[U+1]<<1|1)&X,Z&&(Q[U]|=(L[U+1]|L[U])<<1|1|L[U+1]),Q[U]&H&&(S=Of(n,{errors:Z,currentLocation:W,expectedLocation:C,distance:d,ignoreLocation:v}),S<=E)){if(E=S,D=W,D<=C)break;se=Math.max(1,2*C-D)}}if(Of(n,{errors:Z+1,currentLocation:C,expectedLocation:C,distance:d,ignoreLocation:v})>E)break;L=Q}const J={isMatch:D>=0,score:Math.max(.001,S)};if(I){const Z=uR(j,m);Z.length?k&&(J.indices=Z):J.isMatch=!1}return J}function fR(i){let n={};for(let o=0,c=i.length;o<c;o+=1){const d=i.charAt(o);n[d]=(n[d]||0)|1<<c-o-1}return n}class kT{constructor(n,{location:o=Pe.location,threshold:c=Pe.threshold,distance:d=Pe.distance,includeMatches:h=Pe.includeMatches,findAllMatches:f=Pe.findAllMatches,minMatchCharLength:m=Pe.minMatchCharLength,isCaseSensitive:k=Pe.isCaseSensitive,ignoreLocation:v=Pe.ignoreLocation}={}){if(this.options={location:o,threshold:c,distance:d,includeMatches:h,findAllMatches:f,minMatchCharLength:m,isCaseSensitive:k,ignoreLocation:v},this.pattern=k?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const w=(C,E)=>{this.chunks.push({pattern:C,alphabet:fR(C),startIndex:E})},y=this.pattern.length;if(y>fa){let C=0;const E=y%fa,D=y-E;for(;C<D;)w(this.pattern.substr(C,fa),C),C+=fa;if(E){const I=y-fa;w(this.pattern.substr(I),I)}}else w(this.pattern,0)}searchIn(n){const{isCaseSensitive:o,includeMatches:c}=this.options;if(o||(n=n.toLowerCase()),this.pattern===n){let D={isMatch:!0,score:0};return c&&(D.indices=[[0,n.length-1]]),D}const{location:d,distance:h,threshold:f,findAllMatches:m,minMatchCharLength:k,ignoreLocation:v}=this.options;let w=[],y=0,C=!1;this.chunks.forEach(({pattern:D,alphabet:I,startIndex:j})=>{const{isMatch:P,score:L,indices:S}=hR(n,D,I,{location:d+j,distance:h,threshold:f,findAllMatches:m,minMatchCharLength:k,includeMatches:c,ignoreLocation:v});P&&(C=!0),y+=L,P&&S&&(w=[...w,...S])});let E={isMatch:C,score:C?y/this.chunks.length:1};return C&&c&&(E.indices=w),E}}class Rs{constructor(n){this.pattern=n}static isMultiMatch(n){return _E(n,this.multiRegex)}static isSingleMatch(n){return _E(n,this.singleRegex)}search(){}}function _E(i,n){const o=i.match(n);return o?o[1]:null}class pR extends Rs{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const o=n===this.pattern;return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class gR extends Rs{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const c=n.indexOf(this.pattern)===-1;return{isMatch:c,score:c?0:1,indices:[0,n.length-1]}}}class mR extends Rs{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const o=n.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class kR extends Rs{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const o=!n.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class bR extends Rs{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const o=n.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class wR extends Rs{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const o=!n.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,n.length-1]}}}class bT extends Rs{constructor(n,{location:o=Pe.location,threshold:c=Pe.threshold,distance:d=Pe.distance,includeMatches:h=Pe.includeMatches,findAllMatches:f=Pe.findAllMatches,minMatchCharLength:m=Pe.minMatchCharLength,isCaseSensitive:k=Pe.isCaseSensitive,ignoreLocation:v=Pe.ignoreLocation}={}){super(n),this._bitapSearch=new kT(n,{location:o,threshold:c,distance:d,includeMatches:h,findAllMatches:f,minMatchCharLength:m,isCaseSensitive:k,ignoreLocation:v})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class wT extends Rs{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let o=0,c;const d=[],h=this.pattern.length;for(;(c=n.indexOf(this.pattern,o))>-1;)o=c+h,d.push([c,o-1]);const f=!!d.length;return{isMatch:f,score:f?0:1,indices:d}}}const Sb=[pR,wT,mR,kR,wR,bR,gR,bT],yE=Sb.length,vR=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,_R="|";function yR(i,n={}){return i.split(_R).map(o=>{let c=o.trim().split(vR).filter(h=>h&&!!h.trim()),d=[];for(let h=0,f=c.length;h<f;h+=1){const m=c[h];let k=!1,v=-1;for(;!k&&++v<yE;){const w=Sb[v];let y=w.isMultiMatch(m);y&&(d.push(new w(y,n)),k=!0)}if(!k)for(v=-1;++v<yE;){const w=Sb[v];let y=w.isSingleMatch(m);if(y){d.push(new w(y,n));break}}}return d})}const AR=new Set([bT.type,wT.type]);class CR{constructor(n,{isCaseSensitive:o=Pe.isCaseSensitive,includeMatches:c=Pe.includeMatches,minMatchCharLength:d=Pe.minMatchCharLength,ignoreLocation:h=Pe.ignoreLocation,findAllMatches:f=Pe.findAllMatches,location:m=Pe.location,threshold:k=Pe.threshold,distance:v=Pe.distance}={}){this.query=null,this.options={isCaseSensitive:o,includeMatches:c,minMatchCharLength:d,findAllMatches:f,ignoreLocation:h,location:m,threshold:k,distance:v},this.pattern=o?n:n.toLowerCase(),this.query=yR(this.pattern,this.options)}static condition(n,o){return o.useExtendedSearch}searchIn(n){const o=this.query;if(!o)return{isMatch:!1,score:1};const{includeMatches:c,isCaseSensitive:d}=this.options;n=d?n:n.toLowerCase();let h=0,f=[],m=0;for(let k=0,v=o.length;k<v;k+=1){const w=o[k];f.length=0,h=0;for(let y=0,C=w.length;y<C;y+=1){const E=w[y],{isMatch:D,indices:I,score:j}=E.search(n);if(D){if(h+=1,m+=j,c){const P=E.constructor.type;AR.has(P)?f=[...f,...I]:f.push(I)}}else{m=0,h=0,f.length=0;break}}if(h){let y={isMatch:!0,score:m/h};return c&&(y.indices=f),y}}return{isMatch:!1,score:1}}}const Db=[];function xR(...i){Db.push(...i)}function Tb(i,n){for(let o=0,c=Db.length;o<c;o+=1){let d=Db[o];if(d.condition(i,n))return new d(i,n)}return new kT(i,n)}const Wp={AND:"$and",OR:"$or"},Ib={PATH:"$path",PATTERN:"$val"},Mb=i=>!!(i[Wp.AND]||i[Wp.OR]),ER=i=>!!i[Ib.PATH],SR=i=>!No(i)&&fT(i)&&!Mb(i),AE=i=>({[Wp.AND]:Object.keys(i).map(n=>({[n]:i[n]}))});function vT(i,n,{auto:o=!0}={}){const c=d=>{let h=Object.keys(d);const f=ER(d);if(!f&&h.length>1&&!Mb(d))return c(AE(d));if(SR(d)){const k=f?d[Ib.PATH]:h[0],v=f?d[Ib.PATTERN]:d[k];if(!Jr(v))throw new Error(Jj(k));const w={keyId:Eb(k),pattern:v};return o&&(w.searcher=Tb(v,n)),w}let m={children:[],operator:h[0]};return h.forEach(k=>{const v=d[k];No(v)&&v.forEach(w=>{m.children.push(c(w))})}),m};return Mb(i)||(i=AE(i)),c(i)}function DR(i,{ignoreFieldNorm:n=Pe.ignoreFieldNorm}){i.forEach(o=>{let c=1;o.matches.forEach(({key:d,norm:h,score:f})=>{const m=d?d.weight:null;c*=Math.pow(f===0&&m?Number.EPSILON:f,(m||1)*(n?1:h))}),o.score=c})}function TR(i,n){const o=i.matches;n.matches=[],Oi(o)&&o.forEach(c=>{if(!Oi(c.indices)||!c.indices.length)return;const{indices:d,value:h}=c;let f={indices:d,value:h};c.key&&(f.key=c.key.src),c.idx>-1&&(f.refIndex=c.idx),n.matches.push(f)})}function IR(i,n){n.score=i.score}function MR(i,n,{includeMatches:o=Pe.includeMatches,includeScore:c=Pe.includeScore}={}){const d=[];return o&&d.push(TR),c&&d.push(IR),i.map(h=>{const{idx:f}=h,m={item:n[f],refIndex:f};return d.length&&d.forEach(k=>{k(h,m)}),m})}class dl{constructor(n,o={},c){this.options={...Pe,...o},this.options.useExtendedSearch,this._keyStore=new nR(this.options.keys),this.setCollection(n,c)}setCollection(n,o){if(this._docs=n,o&&!(o instanceof nv))throw new Error(Qj);this._myIndex=o||mT(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){Oi(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const o=[];for(let c=0,d=this._docs.length;c<d;c+=1){const h=this._docs[c];n(h,c)&&(this.removeAt(c),c-=1,d-=1,o.push(h))}return o}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:o=-1}={}){const{includeMatches:c,includeScore:d,shouldSort:h,sortFn:f,ignoreFieldNorm:m}=this.options;let k=Jr(n)?Jr(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return DR(k,{ignoreFieldNorm:m}),h&&k.sort(f),hT(o)&&o>-1&&(k=k.slice(0,o)),MR(k,this._docs,{includeMatches:c,includeScore:d})}_searchStringList(n){const o=Tb(n,this.options),{records:c}=this._myIndex,d=[];return c.forEach(({v:h,i:f,n:m})=>{if(!Oi(h))return;const{isMatch:k,score:v,indices:w}=o.searchIn(h);k&&d.push({item:h,idx:f,matches:[{score:v,value:h,norm:m,indices:w}]})}),d}_searchLogical(n){const o=vT(n,this.options),c=(m,k,v)=>{if(!m.children){const{keyId:y,searcher:C}=m,E=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(k,y),searcher:C});return E&&E.length?[{idx:v,item:k,matches:E}]:[]}const w=[];for(let y=0,C=m.children.length;y<C;y+=1){const E=m.children[y],D=c(E,k,v);if(D.length)w.push(...D);else if(m.operator===Wp.AND)return[]}return w},d=this._myIndex.records,h={},f=[];return d.forEach(({$:m,i:k})=>{if(Oi(m)){let v=c(o,m,k);v.length&&(h[k]||(h[k]={idx:k,item:m,matches:[]},f.push(h[k])),v.forEach(({matches:w})=>{h[k].matches.push(...w)}))}}),f}_searchObjectList(n){const o=Tb(n,this.options),{keys:c,records:d}=this._myIndex,h=[];return d.forEach(({$:f,i:m})=>{if(!Oi(f))return;let k=[];c.forEach((v,w)=>{k.push(...this._findMatches({key:v,value:f[w],searcher:o}))}),k.length&&h.push({idx:m,item:f,matches:k})}),h}_findMatches({key:n,value:o,searcher:c}){if(!Oi(o))return[];let d=[];if(No(o))o.forEach(({v:h,i:f,n:m})=>{if(!Oi(h))return;const{isMatch:k,score:v,indices:w}=c.searchIn(h);k&&d.push({score:v,key:n,value:h,idx:f,norm:m,indices:w})});else{const{v:h,n:f}=o,{isMatch:m,score:k,indices:v}=c.searchIn(h);m&&d.push({score:k,key:n,value:h,norm:f,indices:v})}return d}}dl.version="7.0.0";dl.createIndex=mT;dl.parseIndex=dR;dl.config=Pe;dl.parseQuery=vT;xR(CR);const NR=(i,n,o)=>{const d=new dl(n,{keys:o}).search(i);return i?d.map(f=>f.item):n};class Na extends Error{}class OR extends Na{constructor(n){super(`Invalid DateTime: ${n.toMessage()}`)}}class PR extends Na{constructor(n){super(`Invalid Interval: ${n.toMessage()}`)}}class BR extends Na{constructor(n){super(`Invalid Duration: ${n.toMessage()}`)}}class zd extends Na{}class _T extends Na{constructor(n){super(`Invalid unit ${n}`)}}class ir extends Na{}class os extends Na{constructor(){super("Zone is an abstract class")}}const be="numeric",Mr="short",zi="long",qp={year:be,month:be,day:be},yT={year:be,month:Mr,day:be},LR={year:be,month:Mr,day:be,weekday:Mr},AT={year:be,month:zi,day:be},CT={year:be,month:zi,day:be,weekday:zi},xT={hour:be,minute:be},ET={hour:be,minute:be,second:be},ST={hour:be,minute:be,second:be,timeZoneName:Mr},DT={hour:be,minute:be,second:be,timeZoneName:zi},TT={hour:be,minute:be,hourCycle:"h23"},IT={hour:be,minute:be,second:be,hourCycle:"h23"},MT={hour:be,minute:be,second:be,hourCycle:"h23",timeZoneName:Mr},NT={hour:be,minute:be,second:be,hourCycle:"h23",timeZoneName:zi},OT={year:be,month:be,day:be,hour:be,minute:be},PT={year:be,month:be,day:be,hour:be,minute:be,second:be},BT={year:be,month:Mr,day:be,hour:be,minute:be},LT={year:be,month:Mr,day:be,hour:be,minute:be,second:be},zR={year:be,month:Mr,day:be,weekday:Mr,hour:be,minute:be},zT={year:be,month:zi,day:be,hour:be,minute:be,timeZoneName:Mr},jT={year:be,month:zi,day:be,hour:be,minute:be,second:be,timeZoneName:Mr},RT={year:be,month:zi,day:be,weekday:zi,hour:be,minute:be,timeZoneName:zi},FT={year:be,month:zi,day:be,weekday:zi,hour:be,minute:be,second:be,timeZoneName:zi};class Nu{get type(){throw new os}get name(){throw new os}get ianaName(){return this.name}get isUniversal(){throw new os}offsetName(n,o){throw new os}formatOffset(n,o){throw new os}offset(n){throw new os}equals(n){throw new os}get isValid(){throw new os}}let ck=null;class _g extends Nu{static get instance(){return ck===null&&(ck=new _g),ck}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(n,{format:o,locale:c}){return $T(n,o,c)}formatOffset(n,o){return Qd(this.offset(n),o)}offset(n){return-new Date(n).getTimezoneOffset()}equals(n){return n.type==="system"}get isValid(){return!0}}let lp={};function jR(i){return lp[i]||(lp[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),lp[i]}const RR={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function FR(i,n){const o=i.format(n).replace(/\u200E/g,""),c=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(o),[,d,h,f,m,k,v,w]=c;return[f,d,h,m,k,v,w]}function VR(i,n){const o=i.formatToParts(n),c=[];for(let d=0;d<o.length;d++){const{type:h,value:f}=o[d],m=RR[h];h==="era"?c[m]=f:We(m)||(c[m]=parseInt(f,10))}return c}let Pf={};class Oo extends Nu{static create(n){return Pf[n]||(Pf[n]=new Oo(n)),Pf[n]}static resetCache(){Pf={},lp={}}static isValidSpecifier(n){return this.isValidZone(n)}static isValidZone(n){if(!n)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:n}).format(),!0}catch{return!1}}constructor(n){super(),this.zoneName=n,this.valid=Oo.isValidZone(n)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(n,{format:o,locale:c}){return $T(n,o,c,this.name)}formatOffset(n,o){return Qd(this.offset(n),o)}offset(n){const o=new Date(n);if(isNaN(o))return NaN;const c=jR(this.name);let[d,h,f,m,k,v,w]=c.formatToParts?VR(c,o):FR(c,o);m==="BC"&&(d=-Math.abs(d)+1);const C=Ag({year:d,month:h,day:f,hour:k===24?0:k,minute:v,second:w,millisecond:0});let E=+o;const D=E%1e3;return E-=D>=0?D:1e3+D,(C-E)/(60*1e3)}equals(n){return n.type==="iana"&&n.name===this.name}get isValid(){return this.valid}}let CE={};function $R(i,n={}){const o=JSON.stringify([i,n]);let c=CE[o];return c||(c=new Intl.ListFormat(i,n),CE[o]=c),c}let Nb={};function Ob(i,n={}){const o=JSON.stringify([i,n]);let c=Nb[o];return c||(c=new Intl.DateTimeFormat(i,n),Nb[o]=c),c}let Pb={};function UR(i,n={}){const o=JSON.stringify([i,n]);let c=Pb[o];return c||(c=new Intl.NumberFormat(i,n),Pb[o]=c),c}let Bb={};function HR(i,n={}){const{base:o,...c}=n,d=JSON.stringify([i,c]);let h=Bb[d];return h||(h=new Intl.RelativeTimeFormat(i,n),Bb[d]=h),h}let jd=null;function WR(){return jd||(jd=new Intl.DateTimeFormat().resolvedOptions().locale,jd)}function qR(i){const n=i.indexOf("-x-");n!==-1&&(i=i.substring(0,n));const o=i.indexOf("-u-");if(o===-1)return[i];{let c,d;try{c=Ob(i).resolvedOptions(),d=i}catch{const k=i.substring(0,o);c=Ob(k).resolvedOptions(),d=k}const{numberingSystem:h,calendar:f}=c;return[d,h,f]}}function GR(i,n,o){return(o||n)&&(i.includes("-u-")||(i+="-u"),o&&(i+=`-ca-${o}`),n&&(i+=`-nu-${n}`)),i}function YR(i){const n=[];for(let o=1;o<=12;o++){const c=Le.utc(2009,o,1);n.push(i(c))}return n}function KR(i){const n=[];for(let o=1;o<=7;o++){const c=Le.utc(2016,11,13+o);n.push(i(c))}return n}function Bf(i,n,o,c){const d=i.listingMode();return d==="error"?null:d==="en"?o(n):c(n)}function ZR(i){return i.numberingSystem&&i.numberingSystem!=="latn"?!1:i.numberingSystem==="latn"||!i.locale||i.locale.startsWith("en")||new Intl.DateTimeFormat(i.intl).resolvedOptions().numberingSystem==="latn"}class QR{constructor(n,o,c){this.padTo=c.padTo||0,this.floor=c.floor||!1;const{padTo:d,floor:h,...f}=c;if(!o||Object.keys(f).length>0){const m={useGrouping:!1,...c};c.padTo>0&&(m.minimumIntegerDigits=c.padTo),this.inf=UR(n,m)}}format(n){if(this.inf){const o=this.floor?Math.floor(n):n;return this.inf.format(o)}else{const o=this.floor?Math.floor(n):rv(n,3);return nn(o,this.padTo)}}}class JR{constructor(n,o,c){this.opts=c,this.originalZone=void 0;let d;if(this.opts.timeZone)this.dt=n;else if(n.zone.type==="fixed"){const f=-1*(n.offset/60),m=f>=0?`Etc/GMT+${f}`:`Etc/GMT${f}`;n.offset!==0&&Oo.create(m).valid?(d=m,this.dt=n):(d="UTC",this.dt=n.offset===0?n:n.setZone("UTC").plus({minutes:n.offset}),this.originalZone=n.zone)}else n.zone.type==="system"?this.dt=n:n.zone.type==="iana"?(this.dt=n,d=n.zone.name):(d="UTC",this.dt=n.setZone("UTC").plus({minutes:n.offset}),this.originalZone=n.zone);const h={...this.opts};h.timeZone=h.timeZone||d,this.dtf=Ob(o,h)}format(){return this.originalZone?this.formatToParts().map(({value:n})=>n).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const n=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?n.map(o=>{if(o.type==="timeZoneName"){const c=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...o,value:c}}else return o}):n}resolvedOptions(){return this.dtf.resolvedOptions()}}class XR{constructor(n,o,c){this.opts={style:"long",...c},!o&&VT()&&(this.rtf=HR(n,c))}format(n,o){return this.rtf?this.rtf.format(n,o):m8(o,n,this.opts.numeric,this.opts.style!=="long")}formatToParts(n,o){return this.rtf?this.rtf.formatToParts(n,o):[]}}class xt{static fromOpts(n){return xt.create(n.locale,n.numberingSystem,n.outputCalendar,n.defaultToEN)}static create(n,o,c,d=!1){const h=n||tn.defaultLocale,f=h||(d?"en-US":WR()),m=o||tn.defaultNumberingSystem,k=c||tn.defaultOutputCalendar;return new xt(f,m,k,h)}static resetCache(){jd=null,Nb={},Pb={},Bb={}}static fromObject({locale:n,numberingSystem:o,outputCalendar:c}={}){return xt.create(n,o,c)}constructor(n,o,c,d){const[h,f,m]=qR(n);this.locale=h,this.numberingSystem=o||f||null,this.outputCalendar=c||m||null,this.intl=GR(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=d,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=ZR(this)),this.fastNumbersCached}listingMode(){const n=this.isEnglish(),o=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return n&&o?"en":"intl"}clone(n){return!n||Object.getOwnPropertyNames(n).length===0?this:xt.create(n.locale||this.specifiedLocale,n.numberingSystem||this.numberingSystem,n.outputCalendar||this.outputCalendar,n.defaultToEN||!1)}redefaultToEN(n={}){return this.clone({...n,defaultToEN:!0})}redefaultToSystem(n={}){return this.clone({...n,defaultToEN:!1})}months(n,o=!1){return Bf(this,n,WT,()=>{const c=o?{month:n,day:"numeric"}:{month:n},d=o?"format":"standalone";return this.monthsCache[d][n]||(this.monthsCache[d][n]=YR(h=>this.extract(h,c,"month"))),this.monthsCache[d][n]})}weekdays(n,o=!1){return Bf(this,n,YT,()=>{const c=o?{weekday:n,year:"numeric",month:"long",day:"numeric"}:{weekday:n},d=o?"format":"standalone";return this.weekdaysCache[d][n]||(this.weekdaysCache[d][n]=KR(h=>this.extract(h,c,"weekday"))),this.weekdaysCache[d][n]})}meridiems(){return Bf(this,void 0,()=>KT,()=>{if(!this.meridiemCache){const n={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[Le.utc(2016,11,13,9),Le.utc(2016,11,13,19)].map(o=>this.extract(o,n,"dayperiod"))}return this.meridiemCache})}eras(n){return Bf(this,n,ZT,()=>{const o={era:n};return this.eraCache[n]||(this.eraCache[n]=[Le.utc(-40,1,1),Le.utc(2017,1,1)].map(c=>this.extract(c,o,"era"))),this.eraCache[n]})}extract(n,o,c){const d=this.dtFormatter(n,o),h=d.formatToParts(),f=h.find(m=>m.type.toLowerCase()===c);return f?f.value:null}numberFormatter(n={}){return new QR(this.intl,n.forceSimple||this.fastNumbers,n)}dtFormatter(n,o={}){return new JR(n,this.intl,o)}relFormatter(n={}){return new XR(this.intl,this.isEnglish(),n)}listFormatter(n={}){return $R(this.intl,n)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(n){return this.locale===n.locale&&this.numberingSystem===n.numberingSystem&&this.outputCalendar===n.outputCalendar}}let lk=null;class Qn extends Nu{static get utcInstance(){return lk===null&&(lk=new Qn(0)),lk}static instance(n){return n===0?Qn.utcInstance:new Qn(n)}static parseSpecifier(n){if(n){const o=n.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(o)return new Qn(Cg(o[1],o[2]))}return null}constructor(n){super(),this.fixed=n}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${Qd(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${Qd(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(n,o){return Qd(this.fixed,o)}get isUniversal(){return!0}offset(){return this.fixed}equals(n){return n.type==="fixed"&&n.fixed===this.fixed}get isValid(){return!0}}class e8 extends Nu{constructor(n){super(),this.zoneName=n}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function gs(i,n){if(We(i)||i===null)return n;if(i instanceof Nu)return i;if(t8(i)){const o=i.toLowerCase();return o==="default"?n:o==="local"||o==="system"?_g.instance:o==="utc"||o==="gmt"?Qn.utcInstance:Qn.parseSpecifier(o)||Oo.create(i)}else return Aa(i)?Qn.instance(i):typeof i=="object"&&"offset"in i&&typeof i.offset=="function"?i:new e8(i)}let xE=()=>Date.now(),EE="system",SE=null,DE=null,TE=null,IE=60,ME;class tn{static get now(){return xE}static set now(n){xE=n}static set defaultZone(n){EE=n}static get defaultZone(){return gs(EE,_g.instance)}static get defaultLocale(){return SE}static set defaultLocale(n){SE=n}static get defaultNumberingSystem(){return DE}static set defaultNumberingSystem(n){DE=n}static get defaultOutputCalendar(){return TE}static set defaultOutputCalendar(n){TE=n}static get twoDigitCutoffYear(){return IE}static set twoDigitCutoffYear(n){IE=n%100}static get throwOnInvalid(){return ME}static set throwOnInvalid(n){ME=n}static resetCaches(){xt.resetCache(),Oo.resetCache()}}function We(i){return typeof i>"u"}function Aa(i){return typeof i=="number"}function yg(i){return typeof i=="number"&&i%1===0}function t8(i){return typeof i=="string"}function n8(i){return Object.prototype.toString.call(i)==="[object Date]"}function VT(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function i8(i){return Array.isArray(i)?i:[i]}function NE(i,n,o){if(i.length!==0)return i.reduce((c,d)=>{const h=[n(d),d];return c&&o(c[0],h[0])===c[0]?c:h},null)[1]}function r8(i,n){return n.reduce((o,c)=>(o[c]=i[c],o),{})}function el(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function Eo(i,n,o){return yg(i)&&i>=n&&i<=o}function o8(i,n){return i-n*Math.floor(i/n)}function nn(i,n=2){const o=i<0;let c;return o?c="-"+(""+-i).padStart(n,"0"):c=(""+i).padStart(n,"0"),c}function us(i){if(!(We(i)||i===null||i===""))return parseInt(i,10)}function aa(i){if(!(We(i)||i===null||i===""))return parseFloat(i)}function iv(i){if(!(We(i)||i===null||i==="")){const n=parseFloat("0."+i)*1e3;return Math.floor(n)}}function rv(i,n,o=!1){const c=10**n;return(o?Math.trunc:Math.round)(i*c)/c}function Ou(i){return i%4===0&&(i%100!==0||i%400===0)}function Zd(i){return Ou(i)?366:365}function Gp(i,n){const o=o8(n-1,12)+1,c=i+(n-o)/12;return o===2?Ou(c)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][o-1]}function Ag(i){let n=Date.UTC(i.year,i.month-1,i.day,i.hour,i.minute,i.second,i.millisecond);return i.year<100&&i.year>=0&&(n=new Date(n),n.setUTCFullYear(i.year,i.month-1,i.day)),+n}function Yp(i){const n=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7,o=i-1,c=(o+Math.floor(o/4)-Math.floor(o/100)+Math.floor(o/400))%7;return n===4||c===3?53:52}function Lb(i){return i>99?i:i>tn.twoDigitCutoffYear?1900+i:2e3+i}function $T(i,n,o,c=null){const d=new Date(i),h={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};c&&(h.timeZone=c);const f={timeZoneName:n,...h},m=new Intl.DateTimeFormat(o,f).formatToParts(d).find(k=>k.type.toLowerCase()==="timezonename");return m?m.value:null}function Cg(i,n){let o=parseInt(i,10);Number.isNaN(o)&&(o=0);const c=parseInt(n,10)||0,d=o<0||Object.is(o,-0)?-c:c;return o*60+d}function UT(i){const n=Number(i);if(typeof i=="boolean"||i===""||Number.isNaN(n))throw new ir(`Invalid unit value ${i}`);return n}function Kp(i,n){const o={};for(const c in i)if(el(i,c)){const d=i[c];if(d==null)continue;o[n(c)]=UT(d)}return o}function Qd(i,n){const o=Math.trunc(Math.abs(i/60)),c=Math.trunc(Math.abs(i%60)),d=i>=0?"+":"-";switch(n){case"short":return`${d}${nn(o,2)}:${nn(c,2)}`;case"narrow":return`${d}${o}${c>0?`:${c}`:""}`;case"techie":return`${d}${nn(o,2)}${nn(c,2)}`;default:throw new RangeError(`Value format ${n} is out of range for property format`)}}function xg(i){return r8(i,["hour","minute","second","millisecond"])}const s8=["January","February","March","April","May","June","July","August","September","October","November","December"],HT=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a8=["J","F","M","A","M","J","J","A","S","O","N","D"];function WT(i){switch(i){case"narrow":return[...a8];case"short":return[...HT];case"long":return[...s8];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const qT=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],GT=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],c8=["M","T","W","T","F","S","S"];function YT(i){switch(i){case"narrow":return[...c8];case"short":return[...GT];case"long":return[...qT];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const KT=["AM","PM"],l8=["Before Christ","Anno Domini"],d8=["BC","AD"],u8=["B","A"];function ZT(i){switch(i){case"narrow":return[...u8];case"short":return[...d8];case"long":return[...l8];default:return null}}function h8(i){return KT[i.hour<12?0:1]}function f8(i,n){return YT(n)[i.weekday-1]}function p8(i,n){return WT(n)[i.month-1]}function g8(i,n){return ZT(n)[i.year<0?0:1]}function m8(i,n,o="always",c=!1){const d={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},h=["hours","minutes","seconds"].indexOf(i)===-1;if(o==="auto"&&h){const y=i==="days";switch(n){case 1:return y?"tomorrow":`next ${d[i][0]}`;case-1:return y?"yesterday":`last ${d[i][0]}`;case 0:return y?"today":`this ${d[i][0]}`}}const f=Object.is(n,-0)||n<0,m=Math.abs(n),k=m===1,v=d[i],w=c?k?v[1]:v[2]||v[1]:k?d[i][0]:i;return f?`${m} ${w} ago`:`in ${m} ${w}`}function OE(i,n){let o="";for(const c of i)c.literal?o+=c.val:o+=n(c.val);return o}const k8={D:qp,DD:yT,DDD:AT,DDDD:CT,t:xT,tt:ET,ttt:ST,tttt:DT,T:TT,TT:IT,TTT:MT,TTTT:NT,f:OT,ff:BT,fff:zT,ffff:RT,F:PT,FF:LT,FFF:jT,FFFF:FT};class Vn{static create(n,o={}){return new Vn(n,o)}static parseFormat(n){let o=null,c="",d=!1;const h=[];for(let f=0;f<n.length;f++){const m=n.charAt(f);m==="'"?(c.length>0&&h.push({literal:d||/^\s+$/.test(c),val:c}),o=null,c="",d=!d):d||m===o?c+=m:(c.length>0&&h.push({literal:/^\s+$/.test(c),val:c}),c=m,o=m)}return c.length>0&&h.push({literal:d||/^\s+$/.test(c),val:c}),h}static macroTokenToFormatOpts(n){return k8[n]}constructor(n,o){this.opts=o,this.loc=n,this.systemLoc=null}formatWithSystemDefault(n,o){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(n,{...this.opts,...o}).format()}dtFormatter(n,o={}){return this.loc.dtFormatter(n,{...this.opts,...o})}formatDateTime(n,o){return this.dtFormatter(n,o).format()}formatDateTimeParts(n,o){return this.dtFormatter(n,o).formatToParts()}formatInterval(n,o){return this.dtFormatter(n.start,o).dtf.formatRange(n.start.toJSDate(),n.end.toJSDate())}resolvedOptions(n,o){return this.dtFormatter(n,o).resolvedOptions()}num(n,o=0){if(this.opts.forceSimple)return nn(n,o);const c={...this.opts};return o>0&&(c.padTo=o),this.loc.numberFormatter(c).format(n)}formatDateTimeFromString(n,o){const c=this.loc.listingMode()==="en",d=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",h=(E,D)=>this.loc.extract(n,E,D),f=E=>n.isOffsetFixed&&n.offset===0&&E.allowZ?"Z":n.isValid?n.zone.formatOffset(n.ts,E.format):"",m=()=>c?h8(n):h({hour:"numeric",hourCycle:"h12"},"dayperiod"),k=(E,D)=>c?p8(n,E):h(D?{month:E}:{month:E,day:"numeric"},"month"),v=(E,D)=>c?f8(n,E):h(D?{weekday:E}:{weekday:E,month:"long",day:"numeric"},"weekday"),w=E=>{const D=Vn.macroTokenToFormatOpts(E);return D?this.formatWithSystemDefault(n,D):E},y=E=>c?g8(n,E):h({era:E},"era"),C=E=>{switch(E){case"S":return this.num(n.millisecond);case"u":case"SSS":return this.num(n.millisecond,3);case"s":return this.num(n.second);case"ss":return this.num(n.second,2);case"uu":return this.num(Math.floor(n.millisecond/10),2);case"uuu":return this.num(Math.floor(n.millisecond/100));case"m":return this.num(n.minute);case"mm":return this.num(n.minute,2);case"h":return this.num(n.hour%12===0?12:n.hour%12);case"hh":return this.num(n.hour%12===0?12:n.hour%12,2);case"H":return this.num(n.hour);case"HH":return this.num(n.hour,2);case"Z":return f({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return f({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return f({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return n.zone.offsetName(n.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return n.zone.offsetName(n.ts,{format:"long",locale:this.loc.locale});case"z":return n.zoneName;case"a":return m();case"d":return d?h({day:"numeric"},"day"):this.num(n.day);case"dd":return d?h({day:"2-digit"},"day"):this.num(n.day,2);case"c":return this.num(n.weekday);case"ccc":return v("short",!0);case"cccc":return v("long",!0);case"ccccc":return v("narrow",!0);case"E":return this.num(n.weekday);case"EEE":return v("short",!1);case"EEEE":return v("long",!1);case"EEEEE":return v("narrow",!1);case"L":return d?h({month:"numeric",day:"numeric"},"month"):this.num(n.month);case"LL":return d?h({month:"2-digit",day:"numeric"},"month"):this.num(n.month,2);case"LLL":return k("short",!0);case"LLLL":return k("long",!0);case"LLLLL":return k("narrow",!0);case"M":return d?h({month:"numeric"},"month"):this.num(n.month);case"MM":return d?h({month:"2-digit"},"month"):this.num(n.month,2);case"MMM":return k("short",!1);case"MMMM":return k("long",!1);case"MMMMM":return k("narrow",!1);case"y":return d?h({year:"numeric"},"year"):this.num(n.year);case"yy":return d?h({year:"2-digit"},"year"):this.num(n.year.toString().slice(-2),2);case"yyyy":return d?h({year:"numeric"},"year"):this.num(n.year,4);case"yyyyyy":return d?h({year:"numeric"},"year"):this.num(n.year,6);case"G":return y("short");case"GG":return y("long");case"GGGGG":return y("narrow");case"kk":return this.num(n.weekYear.toString().slice(-2),2);case"kkkk":return this.num(n.weekYear,4);case"W":return this.num(n.weekNumber);case"WW":return this.num(n.weekNumber,2);case"o":return this.num(n.ordinal);case"ooo":return this.num(n.ordinal,3);case"q":return this.num(n.quarter);case"qq":return this.num(n.quarter,2);case"X":return this.num(Math.floor(n.ts/1e3));case"x":return this.num(n.ts);default:return w(E)}};return OE(Vn.parseFormat(o),C)}formatDurationFromString(n,o){const c=k=>{switch(k[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},d=k=>v=>{const w=c(v);return w?this.num(k.get(w),v.length):v},h=Vn.parseFormat(o),f=h.reduce((k,{literal:v,val:w})=>v?k:k.concat(w),[]),m=n.shiftTo(...f.map(c).filter(k=>k));return OE(h,d(m))}}class Sr{constructor(n,o){this.reason=n,this.explanation=o}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const QT=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function ul(...i){const n=i.reduce((o,c)=>o+c.source,"");return RegExp(`^${n}$`)}function hl(...i){return n=>i.reduce(([o,c,d],h)=>{const[f,m,k]=h(n,d);return[{...o,...f},m||c,k]},[{},null,1]).slice(0,2)}function fl(i,...n){if(i==null)return[null,null];for(const[o,c]of n){const d=o.exec(i);if(d)return c(d)}return[null,null]}function JT(...i){return(n,o)=>{const c={};let d;for(d=0;d<i.length;d++)c[i[d]]=us(n[o+d]);return[c,null,o+d]}}const XT=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,b8=`(?:${XT.source}?(?:\\[(${QT.source})\\])?)?`,ov=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,e4=RegExp(`${ov.source}${b8}`),sv=RegExp(`(?:T${e4.source})?`),w8=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,v8=/(\d{4})-?W(\d\d)(?:-?(\d))?/,_8=/(\d{4})-?(\d{3})/,y8=JT("weekYear","weekNumber","weekDay"),A8=JT("year","ordinal"),C8=/(\d{4})-(\d\d)-(\d\d)/,t4=RegExp(`${ov.source} ?(?:${XT.source}|(${QT.source}))?`),x8=RegExp(`(?: ${t4.source})?`);function Wc(i,n,o){const c=i[n];return We(c)?o:us(c)}function E8(i,n){return[{year:Wc(i,n),month:Wc(i,n+1,1),day:Wc(i,n+2,1)},null,n+3]}function pl(i,n){return[{hours:Wc(i,n,0),minutes:Wc(i,n+1,0),seconds:Wc(i,n+2,0),milliseconds:iv(i[n+3])},null,n+4]}function Pu(i,n){const o=!i[n]&&!i[n+1],c=Cg(i[n+1],i[n+2]),d=o?null:Qn.instance(c);return[{},d,n+3]}function Bu(i,n){const o=i[n]?Oo.create(i[n]):null;return[{},o,n+1]}const S8=RegExp(`^T?${ov.source}$`),D8=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function T8(i){const[n,o,c,d,h,f,m,k,v]=i,w=n[0]==="-",y=k&&k[0]==="-",C=(E,D=!1)=>E!==void 0&&(D||E&&w)?-E:E;return[{years:C(aa(o)),months:C(aa(c)),weeks:C(aa(d)),days:C(aa(h)),hours:C(aa(f)),minutes:C(aa(m)),seconds:C(aa(k),k==="-0"),milliseconds:C(iv(v),y)}]}const I8={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function av(i,n,o,c,d,h,f){const m={year:n.length===2?Lb(us(n)):us(n),month:HT.indexOf(o)+1,day:us(c),hour:us(d),minute:us(h)};return f&&(m.second=us(f)),i&&(m.weekday=i.length>3?qT.indexOf(i)+1:GT.indexOf(i)+1),m}const M8=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function N8(i){const[,n,o,c,d,h,f,m,k,v,w,y]=i,C=av(n,d,c,o,h,f,m);let E;return k?E=I8[k]:v?E=0:E=Cg(w,y),[C,new Qn(E)]}function O8(i){return i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const P8=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,B8=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,L8=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function PE(i){const[,n,o,c,d,h,f,m]=i;return[av(n,d,c,o,h,f,m),Qn.utcInstance]}function z8(i){const[,n,o,c,d,h,f,m]=i;return[av(n,m,o,c,d,h,f),Qn.utcInstance]}const j8=ul(w8,sv),R8=ul(v8,sv),F8=ul(_8,sv),V8=ul(e4),n4=hl(E8,pl,Pu,Bu),$8=hl(y8,pl,Pu,Bu),U8=hl(A8,pl,Pu,Bu),H8=hl(pl,Pu,Bu);function W8(i){return fl(i,[j8,n4],[R8,$8],[F8,U8],[V8,H8])}function q8(i){return fl(O8(i),[M8,N8])}function G8(i){return fl(i,[P8,PE],[B8,PE],[L8,z8])}function Y8(i){return fl(i,[D8,T8])}const K8=hl(pl);function Z8(i){return fl(i,[S8,K8])}const Q8=ul(C8,x8),J8=ul(t4),X8=hl(pl,Pu,Bu);function e9(i){return fl(i,[Q8,n4],[J8,X8])}const BE="Invalid Duration",i4={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},t9={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...i4},Qi=146097/400,mc=146097/4800,n9={years:{quarters:4,months:12,weeks:Qi/7,days:Qi,hours:Qi*24,minutes:Qi*24*60,seconds:Qi*24*60*60,milliseconds:Qi*24*60*60*1e3},quarters:{months:3,weeks:Qi/28,days:Qi/4,hours:Qi*24/4,minutes:Qi*24*60/4,seconds:Qi*24*60*60/4,milliseconds:Qi*24*60*60*1e3/4},months:{weeks:mc/7,days:mc,hours:mc*24,minutes:mc*24*60,seconds:mc*24*60*60,milliseconds:mc*24*60*60*1e3},...i4},va=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],i9=va.slice(0).reverse();function ss(i,n,o=!1){const c={values:o?n.values:{...i.values,...n.values||{}},loc:i.loc.clone(n.loc),conversionAccuracy:n.conversionAccuracy||i.conversionAccuracy,matrix:n.matrix||i.matrix};return new Ze(c)}function r4(i,n){let o=n.milliseconds??0;for(const c of i9.slice(1))n[c]&&(o+=n[c]*i[c].milliseconds);return o}function LE(i,n){const o=r4(i,n)<0?-1:1;va.reduceRight((c,d)=>{if(We(n[d]))return c;if(c){const h=n[c]*o,f=i[d][c],m=Math.floor(h/f);n[d]+=m*o,n[c]-=m*f*o}return d},null),va.reduce((c,d)=>{if(We(n[d]))return c;if(c){const h=n[c]%1;n[c]-=h,n[d]+=h*i[c][d]}return d},null)}function r9(i){const n={};for(const[o,c]of Object.entries(i))c!==0&&(n[o]=c);return n}class Ze{constructor(n){const o=n.conversionAccuracy==="longterm"||!1;let c=o?n9:t9;n.matrix&&(c=n.matrix),this.values=n.values,this.loc=n.loc||xt.create(),this.conversionAccuracy=o?"longterm":"casual",this.invalid=n.invalid||null,this.matrix=c,this.isLuxonDuration=!0}static fromMillis(n,o){return Ze.fromObject({milliseconds:n},o)}static fromObject(n,o={}){if(n==null||typeof n!="object")throw new ir(`Duration.fromObject: argument expected to be an object, got ${n===null?"null":typeof n}`);return new Ze({values:Kp(n,Ze.normalizeUnit),loc:xt.fromObject(o),conversionAccuracy:o.conversionAccuracy,matrix:o.matrix})}static fromDurationLike(n){if(Aa(n))return Ze.fromMillis(n);if(Ze.isDuration(n))return n;if(typeof n=="object")return Ze.fromObject(n);throw new ir(`Unknown duration argument ${n} of type ${typeof n}`)}static fromISO(n,o){const[c]=Y8(n);return c?Ze.fromObject(c,o):Ze.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static fromISOTime(n,o){const[c]=Z8(n);return c?Ze.fromObject(c,o):Ze.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static invalid(n,o=null){if(!n)throw new ir("need to specify a reason the Duration is invalid");const c=n instanceof Sr?n:new Sr(n,o);if(tn.throwOnInvalid)throw new BR(c);return new Ze({invalid:c})}static normalizeUnit(n){const o={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[n&&n.toLowerCase()];if(!o)throw new _T(n);return o}static isDuration(n){return n&&n.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(n,o={}){const c={...o,floor:o.round!==!1&&o.floor!==!1};return this.isValid?Vn.create(this.loc,c).formatDurationFromString(this,n):BE}toHuman(n={}){if(!this.isValid)return BE;const o=va.map(c=>{const d=this.values[c];return We(d)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...n,unit:c.slice(0,-1)}).format(d)}).filter(c=>c);return this.loc.listFormatter({type:"conjunction",style:n.listStyle||"narrow",...n}).format(o)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let n="P";return this.years!==0&&(n+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(n+=this.months+this.quarters*3+"M"),this.weeks!==0&&(n+=this.weeks+"W"),this.days!==0&&(n+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(n+="T"),this.hours!==0&&(n+=this.hours+"H"),this.minutes!==0&&(n+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(n+=rv(this.seconds+this.milliseconds/1e3,3)+"S"),n==="P"&&(n+="T0S"),n}toISOTime(n={}){if(!this.isValid)return null;const o=this.toMillis();return o<0||o>=864e5?null:(n={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...n,includeOffset:!1},Le.fromMillis(o,{zone:"UTC"}).toISOTime(n))}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.isValid?r4(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(n){if(!this.isValid)return this;const o=Ze.fromDurationLike(n),c={};for(const d of va)(el(o.values,d)||el(this.values,d))&&(c[d]=o.get(d)+this.get(d));return ss(this,{values:c},!0)}minus(n){if(!this.isValid)return this;const o=Ze.fromDurationLike(n);return this.plus(o.negate())}mapUnits(n){if(!this.isValid)return this;const o={};for(const c of Object.keys(this.values))o[c]=UT(n(this.values[c],c));return ss(this,{values:o},!0)}get(n){return this[Ze.normalizeUnit(n)]}set(n){if(!this.isValid)return this;const o={...this.values,...Kp(n,Ze.normalizeUnit)};return ss(this,{values:o})}reconfigure({locale:n,numberingSystem:o,conversionAccuracy:c,matrix:d}={}){const f={loc:this.loc.clone({locale:n,numberingSystem:o}),matrix:d,conversionAccuracy:c};return ss(this,f)}as(n){return this.isValid?this.shiftTo(n).get(n):NaN}normalize(){if(!this.isValid)return this;const n=this.toObject();return LE(this.matrix,n),ss(this,{values:n},!0)}rescale(){if(!this.isValid)return this;const n=r9(this.normalize().shiftToAll().toObject());return ss(this,{values:n},!0)}shiftTo(...n){if(!this.isValid)return this;if(n.length===0)return this;n=n.map(f=>Ze.normalizeUnit(f));const o={},c={},d=this.toObject();let h;for(const f of va)if(n.indexOf(f)>=0){h=f;let m=0;for(const v in c)m+=this.matrix[v][f]*c[v],c[v]=0;Aa(d[f])&&(m+=d[f]);const k=Math.trunc(m);o[f]=k,c[f]=(m*1e3-k*1e3)/1e3}else Aa(d[f])&&(c[f]=d[f]);for(const f in c)c[f]!==0&&(o[h]+=f===h?c[f]:c[f]/this.matrix[h][f]);return LE(this.matrix,o),ss(this,{values:o},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const n={};for(const o of Object.keys(this.values))n[o]=this.values[o]===0?0:-this.values[o];return ss(this,{values:n},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(n){if(!this.isValid||!n.isValid||!this.loc.equals(n.loc))return!1;function o(c,d){return c===void 0||c===0?d===void 0||d===0:c===d}for(const c of va)if(!o(this.values[c],n.values[c]))return!1;return!0}}const kc="Invalid Interval";function o9(i,n){return!i||!i.isValid?Vt.invalid("missing or invalid start"):!n||!n.isValid?Vt.invalid("missing or invalid end"):n<i?Vt.invalid("end before start",`The end of an interval must be after its start, but you had start=${i.toISO()} and end=${n.toISO()}`):null}class Vt{constructor(n){this.s=n.start,this.e=n.end,this.invalid=n.invalid||null,this.isLuxonInterval=!0}static invalid(n,o=null){if(!n)throw new ir("need to specify a reason the Interval is invalid");const c=n instanceof Sr?n:new Sr(n,o);if(tn.throwOnInvalid)throw new PR(c);return new Vt({invalid:c})}static fromDateTimes(n,o){const c=Md(n),d=Md(o),h=o9(c,d);return h??new Vt({start:c,end:d})}static after(n,o){const c=Ze.fromDurationLike(o),d=Md(n);return Vt.fromDateTimes(d,d.plus(c))}static before(n,o){const c=Ze.fromDurationLike(o),d=Md(n);return Vt.fromDateTimes(d.minus(c),d)}static fromISO(n,o){const[c,d]=(n||"").split("/",2);if(c&&d){let h,f;try{h=Le.fromISO(c,o),f=h.isValid}catch{f=!1}let m,k;try{m=Le.fromISO(d,o),k=m.isValid}catch{k=!1}if(f&&k)return Vt.fromDateTimes(h,m);if(f){const v=Ze.fromISO(d,o);if(v.isValid)return Vt.after(h,v)}else if(k){const v=Ze.fromISO(c,o);if(v.isValid)return Vt.before(m,v)}}return Vt.invalid("unparsable",`the input "${n}" can't be parsed as ISO 8601`)}static isInterval(n){return n&&n.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(n="milliseconds"){return this.isValid?this.toDuration(n).get(n):NaN}count(n="milliseconds"){if(!this.isValid)return NaN;const o=this.start.startOf(n),c=this.end.startOf(n);return Math.floor(c.diff(o,n).get(n))+(c.valueOf()!==this.end.valueOf())}hasSame(n){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,n):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(n){return this.isValid?this.s>n:!1}isBefore(n){return this.isValid?this.e<=n:!1}contains(n){return this.isValid?this.s<=n&&this.e>n:!1}set({start:n,end:o}={}){return this.isValid?Vt.fromDateTimes(n||this.s,o||this.e):this}splitAt(...n){if(!this.isValid)return[];const o=n.map(Md).filter(f=>this.contains(f)).sort(),c=[];let{s:d}=this,h=0;for(;d<this.e;){const f=o[h]||this.e,m=+f>+this.e?this.e:f;c.push(Vt.fromDateTimes(d,m)),d=m,h+=1}return c}splitBy(n){const o=Ze.fromDurationLike(n);if(!this.isValid||!o.isValid||o.as("milliseconds")===0)return[];let{s:c}=this,d=1,h;const f=[];for(;c<this.e;){const m=this.start.plus(o.mapUnits(k=>k*d));h=+m>+this.e?this.e:m,f.push(Vt.fromDateTimes(c,h)),c=h,d+=1}return f}divideEqually(n){return this.isValid?this.splitBy(this.length()/n).slice(0,n):[]}overlaps(n){return this.e>n.s&&this.s<n.e}abutsStart(n){return this.isValid?+this.e==+n.s:!1}abutsEnd(n){return this.isValid?+n.e==+this.s:!1}engulfs(n){return this.isValid?this.s<=n.s&&this.e>=n.e:!1}equals(n){return!this.isValid||!n.isValid?!1:this.s.equals(n.s)&&this.e.equals(n.e)}intersection(n){if(!this.isValid)return this;const o=this.s>n.s?this.s:n.s,c=this.e<n.e?this.e:n.e;return o>=c?null:Vt.fromDateTimes(o,c)}union(n){if(!this.isValid)return this;const o=this.s<n.s?this.s:n.s,c=this.e>n.e?this.e:n.e;return Vt.fromDateTimes(o,c)}static merge(n){const[o,c]=n.sort((d,h)=>d.s-h.s).reduce(([d,h],f)=>h?h.overlaps(f)||h.abutsStart(f)?[d,h.union(f)]:[d.concat([h]),f]:[d,f],[[],null]);return c&&o.push(c),o}static xor(n){let o=null,c=0;const d=[],h=n.map(k=>[{time:k.s,type:"s"},{time:k.e,type:"e"}]),f=Array.prototype.concat(...h),m=f.sort((k,v)=>k.time-v.time);for(const k of m)c+=k.type==="s"?1:-1,c===1?o=k.time:(o&&+o!=+k.time&&d.push(Vt.fromDateTimes(o,k.time)),o=null);return Vt.merge(d)}difference(...n){return Vt.xor([this].concat(n)).map(o=>this.intersection(o)).filter(o=>o&&!o.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:kc}toLocaleString(n=qp,o={}){return this.isValid?Vn.create(this.s.loc.clone(o),n).formatInterval(this):kc}toISO(n){return this.isValid?`${this.s.toISO(n)}/${this.e.toISO(n)}`:kc}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:kc}toISOTime(n){return this.isValid?`${this.s.toISOTime(n)}/${this.e.toISOTime(n)}`:kc}toFormat(n,{separator:o=" – "}={}){return this.isValid?`${this.s.toFormat(n)}${o}${this.e.toFormat(n)}`:kc}toDuration(n,o){return this.isValid?this.e.diff(this.s,n,o):Ze.invalid(this.invalidReason)}mapEndpoints(n){return Vt.fromDateTimes(n(this.s),n(this.e))}}class Lf{static hasDST(n=tn.defaultZone){const o=Le.now().setZone(n).set({month:12});return!n.isUniversal&&o.offset!==o.set({month:6}).offset}static isValidIANAZone(n){return Oo.isValidZone(n)}static normalizeZone(n){return gs(n,tn.defaultZone)}static months(n="long",{locale:o=null,numberingSystem:c=null,locObj:d=null,outputCalendar:h="gregory"}={}){return(d||xt.create(o,c,h)).months(n)}static monthsFormat(n="long",{locale:o=null,numberingSystem:c=null,locObj:d=null,outputCalendar:h="gregory"}={}){return(d||xt.create(o,c,h)).months(n,!0)}static weekdays(n="long",{locale:o=null,numberingSystem:c=null,locObj:d=null}={}){return(d||xt.create(o,c,null)).weekdays(n)}static weekdaysFormat(n="long",{locale:o=null,numberingSystem:c=null,locObj:d=null}={}){return(d||xt.create(o,c,null)).weekdays(n,!0)}static meridiems({locale:n=null}={}){return xt.create(n).meridiems()}static eras(n="short",{locale:o=null}={}){return xt.create(o,null,"gregory").eras(n)}static features(){return{relative:VT()}}}function zE(i,n){const o=d=>d.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),c=o(n)-o(i);return Math.floor(Ze.fromMillis(c).as("days"))}function s9(i,n,o){const c=[["years",(k,v)=>v.year-k.year],["quarters",(k,v)=>v.quarter-k.quarter+(v.year-k.year)*4],["months",(k,v)=>v.month-k.month+(v.year-k.year)*12],["weeks",(k,v)=>{const w=zE(k,v);return(w-w%7)/7}],["days",zE]],d={},h=i;let f,m;for(const[k,v]of c)o.indexOf(k)>=0&&(f=k,d[k]=v(i,n),m=h.plus(d),m>n?(d[k]--,i=h.plus(d),i>n&&(m=i,d[k]--,i=h.plus(d))):i=m);return[i,d,m,f]}function a9(i,n,o,c){let[d,h,f,m]=s9(i,n,o);const k=n-d,v=o.filter(y=>["hours","minutes","seconds","milliseconds"].indexOf(y)>=0);v.length===0&&(f<n&&(f=d.plus({[m]:1})),f!==d&&(h[m]=(h[m]||0)+k/(f-d)));const w=Ze.fromObject(h,c);return v.length>0?Ze.fromMillis(k,c).shiftTo(...v).plus(w):w}const cv={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},jE={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},c9=cv.hanidec.replace(/[\[|\]]/g,"").split("");function l9(i){let n=parseInt(i,10);if(isNaN(n)){n="";for(let o=0;o<i.length;o++){const c=i.charCodeAt(o);if(i[o].search(cv.hanidec)!==-1)n+=c9.indexOf(i[o]);else for(const d in jE){const[h,f]=jE[d];c>=h&&c<=f&&(n+=c-h)}}return parseInt(n,10)}else return n}function _r({numberingSystem:i},n=""){return new RegExp(`${cv[i||"latn"]}${n}`)}const d9="missing Intl.DateTimeFormat.formatToParts support";function ot(i,n=o=>o){return{regex:i,deser:([o])=>n(l9(o))}}const u9=String.fromCharCode(160),o4=`[ ${u9}]`,s4=new RegExp(o4,"g");function h9(i){return i.replace(/\./g,"\\.?").replace(s4,o4)}function RE(i){return i.replace(/\./g,"").replace(s4," ").toLowerCase()}function yr(i,n){return i===null?null:{regex:RegExp(i.map(h9).join("|")),deser:([o])=>i.findIndex(c=>RE(o)===RE(c))+n}}function FE(i,n){return{regex:i,deser:([,o,c])=>Cg(o,c),groups:n}}function zf(i){return{regex:i,deser:([n])=>n}}function f9(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function p9(i,n){const o=_r(n),c=_r(n,"{2}"),d=_r(n,"{3}"),h=_r(n,"{4}"),f=_r(n,"{6}"),m=_r(n,"{1,2}"),k=_r(n,"{1,3}"),v=_r(n,"{1,6}"),w=_r(n,"{1,9}"),y=_r(n,"{2,4}"),C=_r(n,"{4,6}"),E=j=>({regex:RegExp(f9(j.val)),deser:([P])=>P,literal:!0}),I=(j=>{if(i.literal)return E(j);switch(j.val){case"G":return yr(n.eras("short"),0);case"GG":return yr(n.eras("long"),0);case"y":return ot(v);case"yy":return ot(y,Lb);case"yyyy":return ot(h);case"yyyyy":return ot(C);case"yyyyyy":return ot(f);case"M":return ot(m);case"MM":return ot(c);case"MMM":return yr(n.months("short",!0),1);case"MMMM":return yr(n.months("long",!0),1);case"L":return ot(m);case"LL":return ot(c);case"LLL":return yr(n.months("short",!1),1);case"LLLL":return yr(n.months("long",!1),1);case"d":return ot(m);case"dd":return ot(c);case"o":return ot(k);case"ooo":return ot(d);case"HH":return ot(c);case"H":return ot(m);case"hh":return ot(c);case"h":return ot(m);case"mm":return ot(c);case"m":return ot(m);case"q":return ot(m);case"qq":return ot(c);case"s":return ot(m);case"ss":return ot(c);case"S":return ot(k);case"SSS":return ot(d);case"u":return zf(w);case"uu":return zf(m);case"uuu":return ot(o);case"a":return yr(n.meridiems(),0);case"kkkk":return ot(h);case"kk":return ot(y,Lb);case"W":return ot(m);case"WW":return ot(c);case"E":case"c":return ot(o);case"EEE":return yr(n.weekdays("short",!1),1);case"EEEE":return yr(n.weekdays("long",!1),1);case"ccc":return yr(n.weekdays("short",!0),1);case"cccc":return yr(n.weekdays("long",!0),1);case"Z":case"ZZ":return FE(new RegExp(`([+-]${m.source})(?::(${c.source}))?`),2);case"ZZZ":return FE(new RegExp(`([+-]${m.source})(${c.source})?`),2);case"z":return zf(/[a-z_+-/]{1,256}?/i);case" ":return zf(/[^\S\n\r]/);default:return E(j)}})(i)||{invalidReason:d9};return I.token=i,I}const g9={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function m9(i,n,o){const{type:c,value:d}=i;if(c==="literal"){const k=/^\s+$/.test(d);return{literal:!k,val:k?" ":d}}const h=n[c];let f=c;c==="hour"&&(n.hour12!=null?f=n.hour12?"hour12":"hour24":n.hourCycle!=null?n.hourCycle==="h11"||n.hourCycle==="h12"?f="hour12":f="hour24":f=o.hour12?"hour12":"hour24");let m=g9[f];if(typeof m=="object"&&(m=m[h]),m)return{literal:!1,val:m}}function k9(i){return[`^${i.map(o=>o.regex).reduce((o,c)=>`${o}(${c.source})`,"")}$`,i]}function b9(i,n,o){const c=i.match(n);if(c){const d={};let h=1;for(const f in o)if(el(o,f)){const m=o[f],k=m.groups?m.groups+1:1;!m.literal&&m.token&&(d[m.token.val[0]]=m.deser(c.slice(h,h+k))),h+=k}return[c,d]}else return[c,{}]}function w9(i){const n=h=>{switch(h){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let o=null,c;return We(i.z)||(o=Oo.create(i.z)),We(i.Z)||(o||(o=new Qn(i.Z)),c=i.Z),We(i.q)||(i.M=(i.q-1)*3+1),We(i.h)||(i.h<12&&i.a===1?i.h+=12:i.h===12&&i.a===0&&(i.h=0)),i.G===0&&i.y&&(i.y=-i.y),We(i.u)||(i.S=iv(i.u)),[Object.keys(i).reduce((h,f)=>{const m=n(f);return m&&(h[m]=i[f]),h},{}),o,c]}let dk=null;function v9(){return dk||(dk=Le.fromMillis(1555555555555)),dk}function _9(i,n){if(i.literal)return i;const o=Vn.macroTokenToFormatOpts(i.val),c=l4(o,n);return c==null||c.includes(void 0)?i:c}function a4(i,n){return Array.prototype.concat(...i.map(o=>_9(o,n)))}function c4(i,n,o){const c=a4(Vn.parseFormat(o),i),d=c.map(f=>p9(f,i)),h=d.find(f=>f.invalidReason);if(h)return{input:n,tokens:c,invalidReason:h.invalidReason};{const[f,m]=k9(d),k=RegExp(f,"i"),[v,w]=b9(n,k,m),[y,C,E]=w?w9(w):[null,null,void 0];if(el(w,"a")&&el(w,"H"))throw new zd("Can't include meridiem when specifying 24-hour format");return{input:n,tokens:c,regex:k,rawMatches:v,matches:w,result:y,zone:C,specificOffset:E}}}function y9(i,n,o){const{result:c,zone:d,specificOffset:h,invalidReason:f}=c4(i,n,o);return[c,d,h,f]}function l4(i,n){if(!i)return null;const c=Vn.create(n,i).dtFormatter(v9()),d=c.formatToParts(),h=c.resolvedOptions();return d.map(f=>m9(f,i,h))}const d4=[0,31,59,90,120,151,181,212,243,273,304,334],u4=[0,31,60,91,121,152,182,213,244,274,305,335];function or(i,n){return new Sr("unit out of range",`you specified ${n} (of type ${typeof n}) as a ${i}, which is invalid`)}function h4(i,n,o){const c=new Date(Date.UTC(i,n-1,o));i<100&&i>=0&&c.setUTCFullYear(c.getUTCFullYear()-1900);const d=c.getUTCDay();return d===0?7:d}function f4(i,n,o){return o+(Ou(i)?u4:d4)[n-1]}function p4(i,n){const o=Ou(i)?u4:d4,c=o.findIndex(h=>h<n),d=n-o[c];return{month:c+1,day:d}}function zb(i){const{year:n,month:o,day:c}=i,d=f4(n,o,c),h=h4(n,o,c);let f=Math.floor((d-h+10)/7),m;return f<1?(m=n-1,f=Yp(m)):f>Yp(n)?(m=n+1,f=1):m=n,{weekYear:m,weekNumber:f,weekday:h,...xg(i)}}function VE(i){const{weekYear:n,weekNumber:o,weekday:c}=i,d=h4(n,1,4),h=Zd(n);let f=o*7+c-d-3,m;f<1?(m=n-1,f+=Zd(m)):f>h?(m=n+1,f-=Zd(n)):m=n;const{month:k,day:v}=p4(m,f);return{year:m,month:k,day:v,...xg(i)}}function uk(i){const{year:n,month:o,day:c}=i,d=f4(n,o,c);return{year:n,ordinal:d,...xg(i)}}function $E(i){const{year:n,ordinal:o}=i,{month:c,day:d}=p4(n,o);return{year:n,month:c,day:d,...xg(i)}}function A9(i){const n=yg(i.weekYear),o=Eo(i.weekNumber,1,Yp(i.weekYear)),c=Eo(i.weekday,1,7);return n?o?c?!1:or("weekday",i.weekday):or("week",i.week):or("weekYear",i.weekYear)}function C9(i){const n=yg(i.year),o=Eo(i.ordinal,1,Zd(i.year));return n?o?!1:or("ordinal",i.ordinal):or("year",i.year)}function g4(i){const n=yg(i.year),o=Eo(i.month,1,12),c=Eo(i.day,1,Gp(i.year,i.month));return n?o?c?!1:or("day",i.day):or("month",i.month):or("year",i.year)}function m4(i){const{hour:n,minute:o,second:c,millisecond:d}=i,h=Eo(n,0,23)||n===24&&o===0&&c===0&&d===0,f=Eo(o,0,59),m=Eo(c,0,59),k=Eo(d,0,999);return h?f?m?k?!1:or("millisecond",d):or("second",c):or("minute",o):or("hour",n)}const hk="Invalid DateTime",UE=864e13;function jf(i){return new Sr("unsupported zone",`the zone "${i.name}" is not supported`)}function fk(i){return i.weekData===null&&(i.weekData=zb(i.c)),i.weekData}function ca(i,n){const o={ts:i.ts,zone:i.zone,c:i.c,o:i.o,loc:i.loc,invalid:i.invalid};return new Le({...o,...n,old:o})}function k4(i,n,o){let c=i-n*60*1e3;const d=o.offset(c);if(n===d)return[c,n];c-=(d-n)*60*1e3;const h=o.offset(c);return d===h?[c,d]:[i-Math.min(d,h)*60*1e3,Math.max(d,h)]}function Rf(i,n){i+=n*60*1e3;const o=new Date(i);return{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate(),hour:o.getUTCHours(),minute:o.getUTCMinutes(),second:o.getUTCSeconds(),millisecond:o.getUTCMilliseconds()}}function dp(i,n,o){return k4(Ag(i),n,o)}function HE(i,n){const o=i.o,c=i.c.year+Math.trunc(n.years),d=i.c.month+Math.trunc(n.months)+Math.trunc(n.quarters)*3,h={...i.c,year:c,month:d,day:Math.min(i.c.day,Gp(c,d))+Math.trunc(n.days)+Math.trunc(n.weeks)*7},f=Ze.fromObject({years:n.years-Math.trunc(n.years),quarters:n.quarters-Math.trunc(n.quarters),months:n.months-Math.trunc(n.months),weeks:n.weeks-Math.trunc(n.weeks),days:n.days-Math.trunc(n.days),hours:n.hours,minutes:n.minutes,seconds:n.seconds,milliseconds:n.milliseconds}).as("milliseconds"),m=Ag(h);let[k,v]=k4(m,o,i.zone);return f!==0&&(k+=f,v=i.zone.offset(k)),{ts:k,o:v}}function Id(i,n,o,c,d,h){const{setZone:f,zone:m}=o;if(i&&Object.keys(i).length!==0||n){const k=n||m,v=Le.fromObject(i,{...o,zone:k,specificOffset:h});return f?v:v.setZone(m)}else return Le.invalid(new Sr("unparsable",`the input "${d}" can't be parsed as ${c}`))}function Ff(i,n,o=!0){return i.isValid?Vn.create(xt.create("en-US"),{allowZ:o,forceSimple:!0}).formatDateTimeFromString(i,n):null}function pk(i,n){const o=i.c.year>9999||i.c.year<0;let c="";return o&&i.c.year>=0&&(c+="+"),c+=nn(i.c.year,o?6:4),n?(c+="-",c+=nn(i.c.month),c+="-",c+=nn(i.c.day)):(c+=nn(i.c.month),c+=nn(i.c.day)),c}function WE(i,n,o,c,d,h){let f=nn(i.c.hour);return n?(f+=":",f+=nn(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!o)&&(f+=":")):f+=nn(i.c.minute),(i.c.millisecond!==0||i.c.second!==0||!o)&&(f+=nn(i.c.second),(i.c.millisecond!==0||!c)&&(f+=".",f+=nn(i.c.millisecond,3))),d&&(i.isOffsetFixed&&i.offset===0&&!h?f+="Z":i.o<0?(f+="-",f+=nn(Math.trunc(-i.o/60)),f+=":",f+=nn(Math.trunc(-i.o%60))):(f+="+",f+=nn(Math.trunc(i.o/60)),f+=":",f+=nn(Math.trunc(i.o%60)))),h&&(f+="["+i.zone.ianaName+"]"),f}const b4={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},x9={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},E9={ordinal:1,hour:0,minute:0,second:0,millisecond:0},w4=["year","month","day","hour","minute","second","millisecond"],S9=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],D9=["year","ordinal","hour","minute","second","millisecond"];function qE(i){const n={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[i.toLowerCase()];if(!n)throw new _T(i);return n}function GE(i,n){const o=gs(n.zone,tn.defaultZone),c=xt.fromObject(n),d=tn.now();let h,f;if(We(i.year))h=d;else{for(const v of w4)We(i[v])&&(i[v]=b4[v]);const m=g4(i)||m4(i);if(m)return Le.invalid(m);const k=o.offset(d);[h,f]=dp(i,k,o)}return new Le({ts:h,zone:o,loc:c,o:f})}function YE(i,n,o){const c=We(o.round)?!0:o.round,d=(f,m)=>(f=rv(f,c||o.calendary?0:2,!0),n.loc.clone(o).relFormatter(o).format(f,m)),h=f=>o.calendary?n.hasSame(i,f)?0:n.startOf(f).diff(i.startOf(f),f).get(f):n.diff(i,f).get(f);if(o.unit)return d(h(o.unit),o.unit);for(const f of o.units){const m=h(f);if(Math.abs(m)>=1)return d(m,f)}return d(i>n?-0:0,o.units[o.units.length-1])}function KE(i){let n={},o;return i.length>0&&typeof i[i.length-1]=="object"?(n=i[i.length-1],o=Array.from(i).slice(0,i.length-1)):o=Array.from(i),[n,o]}class Le{constructor(n){const o=n.zone||tn.defaultZone;let c=n.invalid||(Number.isNaN(n.ts)?new Sr("invalid input"):null)||(o.isValid?null:jf(o));this.ts=We(n.ts)?tn.now():n.ts;let d=null,h=null;if(!c)if(n.old&&n.old.ts===this.ts&&n.old.zone.equals(o))[d,h]=[n.old.c,n.old.o];else{const m=o.offset(this.ts);d=Rf(this.ts,m),c=Number.isNaN(d.year)?new Sr("invalid input"):null,d=c?null:d,h=c?null:m}this._zone=o,this.loc=n.loc||xt.create(),this.invalid=c,this.weekData=null,this.c=d,this.o=h,this.isLuxonDateTime=!0}static now(){return new Le({})}static local(){const[n,o]=KE(arguments),[c,d,h,f,m,k,v]=o;return GE({year:c,month:d,day:h,hour:f,minute:m,second:k,millisecond:v},n)}static utc(){const[n,o]=KE(arguments),[c,d,h,f,m,k,v]=o;return n.zone=Qn.utcInstance,GE({year:c,month:d,day:h,hour:f,minute:m,second:k,millisecond:v},n)}static fromJSDate(n,o={}){const c=n8(n)?n.valueOf():NaN;if(Number.isNaN(c))return Le.invalid("invalid input");const d=gs(o.zone,tn.defaultZone);return d.isValid?new Le({ts:c,zone:d,loc:xt.fromObject(o)}):Le.invalid(jf(d))}static fromMillis(n,o={}){if(Aa(n))return n<-UE||n>UE?Le.invalid("Timestamp out of range"):new Le({ts:n,zone:gs(o.zone,tn.defaultZone),loc:xt.fromObject(o)});throw new ir(`fromMillis requires a numerical input, but received a ${typeof n} with value ${n}`)}static fromSeconds(n,o={}){if(Aa(n))return new Le({ts:n*1e3,zone:gs(o.zone,tn.defaultZone),loc:xt.fromObject(o)});throw new ir("fromSeconds requires a numerical input")}static fromObject(n,o={}){n=n||{};const c=gs(o.zone,tn.defaultZone);if(!c.isValid)return Le.invalid(jf(c));const d=tn.now(),h=We(o.specificOffset)?c.offset(d):o.specificOffset,f=Kp(n,qE),m=!We(f.ordinal),k=!We(f.year),v=!We(f.month)||!We(f.day),w=k||v,y=f.weekYear||f.weekNumber,C=xt.fromObject(o);if((w||m)&&y)throw new zd("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(v&&m)throw new zd("Can't mix ordinal dates with month/day");const E=y||f.weekday&&!w;let D,I,j=Rf(d,h);E?(D=S9,I=x9,j=zb(j)):m?(D=D9,I=E9,j=uk(j)):(D=w4,I=b4);let P=!1;for(const ee of D){const de=f[ee];We(de)?P?f[ee]=I[ee]:f[ee]=j[ee]:P=!0}const L=E?A9(f):m?C9(f):g4(f),S=L||m4(f);if(S)return Le.invalid(S);const $=E?VE(f):m?$E(f):f,[H,J]=dp($,h,c),Z=new Le({ts:H,zone:c,o:J,loc:C});return f.weekday&&w&&n.weekday!==Z.weekday?Le.invalid("mismatched weekday",`you can't specify both a weekday of ${f.weekday} and a date of ${Z.toISO()}`):Z}static fromISO(n,o={}){const[c,d]=W8(n);return Id(c,d,o,"ISO 8601",n)}static fromRFC2822(n,o={}){const[c,d]=q8(n);return Id(c,d,o,"RFC 2822",n)}static fromHTTP(n,o={}){const[c,d]=G8(n);return Id(c,d,o,"HTTP",o)}static fromFormat(n,o,c={}){if(We(n)||We(o))throw new ir("fromFormat requires an input string and a format");const{locale:d=null,numberingSystem:h=null}=c,f=xt.fromOpts({locale:d,numberingSystem:h,defaultToEN:!0}),[m,k,v,w]=y9(f,n,o);return w?Le.invalid(w):Id(m,k,c,`format ${o}`,n,v)}static fromString(n,o,c={}){return Le.fromFormat(n,o,c)}static fromSQL(n,o={}){const[c,d]=e9(n);return Id(c,d,o,"SQL",n)}static invalid(n,o=null){if(!n)throw new ir("need to specify a reason the DateTime is invalid");const c=n instanceof Sr?n:new Sr(n,o);if(tn.throwOnInvalid)throw new OR(c);return new Le({invalid:c})}static isDateTime(n){return n&&n.isLuxonDateTime||!1}static parseFormatForOpts(n,o={}){const c=l4(n,xt.fromObject(o));return c?c.map(d=>d?d.val:null).join(""):null}static expandFormat(n,o={}){return a4(Vn.parseFormat(n),xt.fromObject(o)).map(d=>d.val).join("")}get(n){return this[n]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?fk(this).weekYear:NaN}get weekNumber(){return this.isValid?fk(this).weekNumber:NaN}get weekday(){return this.isValid?fk(this).weekday:NaN}get ordinal(){return this.isValid?uk(this.c).ordinal:NaN}get monthShort(){return this.isValid?Lf.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Lf.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Lf.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Lf.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const n=864e5,o=6e4,c=Ag(this.c),d=this.zone.offset(c-n),h=this.zone.offset(c+n),f=this.zone.offset(c-d*o),m=this.zone.offset(c-h*o);if(f===m)return[this];const k=c-f*o,v=c-m*o,w=Rf(k,f),y=Rf(v,m);return w.hour===y.hour&&w.minute===y.minute&&w.second===y.second&&w.millisecond===y.millisecond?[ca(this,{ts:k}),ca(this,{ts:v})]:[this]}get isInLeapYear(){return Ou(this.year)}get daysInMonth(){return Gp(this.year,this.month)}get daysInYear(){return this.isValid?Zd(this.year):NaN}get weeksInWeekYear(){return this.isValid?Yp(this.weekYear):NaN}resolvedLocaleOptions(n={}){const{locale:o,numberingSystem:c,calendar:d}=Vn.create(this.loc.clone(n),n).resolvedOptions(this);return{locale:o,numberingSystem:c,outputCalendar:d}}toUTC(n=0,o={}){return this.setZone(Qn.instance(n),o)}toLocal(){return this.setZone(tn.defaultZone)}setZone(n,{keepLocalTime:o=!1,keepCalendarTime:c=!1}={}){if(n=gs(n,tn.defaultZone),n.equals(this.zone))return this;if(n.isValid){let d=this.ts;if(o||c){const h=n.offset(this.ts),f=this.toObject();[d]=dp(f,h,n)}return ca(this,{ts:d,zone:n})}else return Le.invalid(jf(n))}reconfigure({locale:n,numberingSystem:o,outputCalendar:c}={}){const d=this.loc.clone({locale:n,numberingSystem:o,outputCalendar:c});return ca(this,{loc:d})}setLocale(n){return this.reconfigure({locale:n})}set(n){if(!this.isValid)return this;const o=Kp(n,qE),c=!We(o.weekYear)||!We(o.weekNumber)||!We(o.weekday),d=!We(o.ordinal),h=!We(o.year),f=!We(o.month)||!We(o.day),m=h||f,k=o.weekYear||o.weekNumber;if((m||d)&&k)throw new zd("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&d)throw new zd("Can't mix ordinal dates with month/day");let v;c?v=VE({...zb(this.c),...o}):We(o.ordinal)?(v={...this.toObject(),...o},We(o.day)&&(v.day=Math.min(Gp(v.year,v.month),v.day))):v=$E({...uk(this.c),...o});const[w,y]=dp(v,this.o,this.zone);return ca(this,{ts:w,o:y})}plus(n){if(!this.isValid)return this;const o=Ze.fromDurationLike(n);return ca(this,HE(this,o))}minus(n){if(!this.isValid)return this;const o=Ze.fromDurationLike(n).negate();return ca(this,HE(this,o))}startOf(n){if(!this.isValid)return this;const o={},c=Ze.normalizeUnit(n);switch(c){case"years":o.month=1;case"quarters":case"months":o.day=1;case"weeks":case"days":o.hour=0;case"hours":o.minute=0;case"minutes":o.second=0;case"seconds":o.millisecond=0;break}if(c==="weeks"&&(o.weekday=1),c==="quarters"){const d=Math.ceil(this.month/3);o.month=(d-1)*3+1}return this.set(o)}endOf(n){return this.isValid?this.plus({[n]:1}).startOf(n).minus(1):this}toFormat(n,o={}){return this.isValid?Vn.create(this.loc.redefaultToEN(o)).formatDateTimeFromString(this,n):hk}toLocaleString(n=qp,o={}){return this.isValid?Vn.create(this.loc.clone(o),n).formatDateTime(this):hk}toLocaleParts(n={}){return this.isValid?Vn.create(this.loc.clone(n),n).formatDateTimeParts(this):[]}toISO({format:n="extended",suppressSeconds:o=!1,suppressMilliseconds:c=!1,includeOffset:d=!0,extendedZone:h=!1}={}){if(!this.isValid)return null;const f=n==="extended";let m=pk(this,f);return m+="T",m+=WE(this,f,o,c,d,h),m}toISODate({format:n="extended"}={}){return this.isValid?pk(this,n==="extended"):null}toISOWeekDate(){return Ff(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:n=!1,suppressSeconds:o=!1,includeOffset:c=!0,includePrefix:d=!1,extendedZone:h=!1,format:f="extended"}={}){return this.isValid?(d?"T":"")+WE(this,f==="extended",o,n,c,h):null}toRFC2822(){return Ff(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ff(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?pk(this,!0):null}toSQLTime({includeOffset:n=!0,includeZone:o=!1,includeOffsetSpace:c=!0}={}){let d="HH:mm:ss.SSS";return(o||n)&&(c&&(d+=" "),o?d+="z":n&&(d+="ZZ")),Ff(this,d,!0)}toSQL(n={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(n)}`:null}toString(){return this.isValid?this.toISO():hk}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(n={}){if(!this.isValid)return{};const o={...this.c};return n.includeConfig&&(o.outputCalendar=this.outputCalendar,o.numberingSystem=this.loc.numberingSystem,o.locale=this.loc.locale),o}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(n,o="milliseconds",c={}){if(!this.isValid||!n.isValid)return Ze.invalid("created by diffing an invalid DateTime");const d={locale:this.locale,numberingSystem:this.numberingSystem,...c},h=i8(o).map(Ze.normalizeUnit),f=n.valueOf()>this.valueOf(),m=f?this:n,k=f?n:this,v=a9(m,k,h,d);return f?v.negate():v}diffNow(n="milliseconds",o={}){return this.diff(Le.now(),n,o)}until(n){return this.isValid?Vt.fromDateTimes(this,n):this}hasSame(n,o){if(!this.isValid)return!1;const c=n.valueOf(),d=this.setZone(n.zone,{keepLocalTime:!0});return d.startOf(o)<=c&&c<=d.endOf(o)}equals(n){return this.isValid&&n.isValid&&this.valueOf()===n.valueOf()&&this.zone.equals(n.zone)&&this.loc.equals(n.loc)}toRelative(n={}){if(!this.isValid)return null;const o=n.base||Le.fromObject({},{zone:this.zone}),c=n.padding?this<o?-n.padding:n.padding:0;let d=["years","months","days","hours","minutes","seconds"],h=n.unit;return Array.isArray(n.unit)&&(d=n.unit,h=void 0),YE(o,this.plus(c),{...n,numeric:"always",units:d,unit:h})}toRelativeCalendar(n={}){return this.isValid?YE(n.base||Le.fromObject({},{zone:this.zone}),this,{...n,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...n){if(!n.every(Le.isDateTime))throw new ir("min requires all arguments be DateTimes");return NE(n,o=>o.valueOf(),Math.min)}static max(...n){if(!n.every(Le.isDateTime))throw new ir("max requires all arguments be DateTimes");return NE(n,o=>o.valueOf(),Math.max)}static fromFormatExplain(n,o,c={}){const{locale:d=null,numberingSystem:h=null}=c,f=xt.fromOpts({locale:d,numberingSystem:h,defaultToEN:!0});return c4(f,n,o)}static fromStringExplain(n,o,c={}){return Le.fromFormatExplain(n,o,c)}static get DATE_SHORT(){return qp}static get DATE_MED(){return yT}static get DATE_MED_WITH_WEEKDAY(){return LR}static get DATE_FULL(){return AT}static get DATE_HUGE(){return CT}static get TIME_SIMPLE(){return xT}static get TIME_WITH_SECONDS(){return ET}static get TIME_WITH_SHORT_OFFSET(){return ST}static get TIME_WITH_LONG_OFFSET(){return DT}static get TIME_24_SIMPLE(){return TT}static get TIME_24_WITH_SECONDS(){return IT}static get TIME_24_WITH_SHORT_OFFSET(){return MT}static get TIME_24_WITH_LONG_OFFSET(){return NT}static get DATETIME_SHORT(){return OT}static get DATETIME_SHORT_WITH_SECONDS(){return PT}static get DATETIME_MED(){return BT}static get DATETIME_MED_WITH_SECONDS(){return LT}static get DATETIME_MED_WITH_WEEKDAY(){return zR}static get DATETIME_FULL(){return zT}static get DATETIME_FULL_WITH_SECONDS(){return jT}static get DATETIME_HUGE(){return RT}static get DATETIME_HUGE_WITH_SECONDS(){return FT}}function Md(i){if(Le.isDateTime(i))return i;if(i&&i.valueOf&&Aa(i.valueOf()))return Le.fromJSDate(i);if(i&&typeof i=="object")return Le.fromObject(i);throw new ir(`Unknown datetime argument: ${i}, of type ${typeof i}`)}const ZE=["year","month","week","day","hour","minute","second"],Zp=i=>{const o=Le.fromISO(i).diffNow().shiftTo(...ZE),c=ZE.find(h=>o.get(h)!==0)||"second";return new Intl.RelativeTimeFormat("en",{numeric:"auto"}).format(Math.trunc(o.as(c)),c)},v4="/Book-Chronicles/assets/like-21544d1e.png",T9=i=>{const n=/<oembed[^>]*>/g,o=i.match(n);if(o){const d=`<iframe src="${o[0].match(/url="([^"]*)"/)[1]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;i=i.replace(n,d)}return i};function I9(i){return{__html:T9(i||"")}}function _4(i){return F.jsx("div",{dangerouslySetInnerHTML:I9(i)})}function st(){return st=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(i[c]=o[c])}return i},st.apply(this,arguments)}function pi(i,n,{checkForDefaultPrevented:o=!0}={}){return function(d){if(i==null||i(d),o===!1||!d.defaultPrevented)return n==null?void 0:n(d)}}function M9(i,n){typeof i=="function"?i(n):i!=null&&(i.current=n)}function y4(...i){return n=>i.forEach(o=>M9(o,n))}function no(...i){return M.useCallback(y4(...i),i)}function lv(i,n=[]){let o=[];function c(h,f){const m=M.createContext(f),k=o.length;o=[...o,f];function v(y){const{scope:C,children:E,...D}=y,I=(C==null?void 0:C[i][k])||m,j=M.useMemo(()=>D,Object.values(D));return M.createElement(I.Provider,{value:j},E)}function w(y,C){const E=(C==null?void 0:C[i][k])||m,D=M.useContext(E);if(D)return D;if(f!==void 0)return f;throw new Error(`\`${y}\` must be used within \`${h}\``)}return v.displayName=h+"Provider",[v,w]}const d=()=>{const h=o.map(f=>M.createContext(f));return function(m){const k=(m==null?void 0:m[i])||h;return M.useMemo(()=>({[`__scope${i}`]:{...m,[i]:k}}),[m,k])}};return d.scopeName=i,[c,N9(d,...n)]}function N9(...i){const n=i[0];if(i.length===1)return n;const o=()=>{const c=i.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(h){const f=c.reduce((m,{useScope:k,scopeName:v})=>{const y=k(h)[`__scope${v}`];return{...m,...y}},{});return M.useMemo(()=>({[`__scope${n.scopeName}`]:f}),[f])}};return o.scopeName=n.scopeName,o}const dv=M.forwardRef((i,n)=>{const{children:o,...c}=i,d=M.Children.toArray(o),h=d.find(O9);if(h){const f=h.props.children,m=d.map(k=>k===h?M.Children.count(f)>1?M.Children.only(null):M.isValidElement(f)?f.props.children:null:k);return M.createElement(jb,st({},c,{ref:n}),M.isValidElement(f)?M.cloneElement(f,void 0,m):null)}return M.createElement(jb,st({},c,{ref:n}),o)});dv.displayName="Slot";const jb=M.forwardRef((i,n)=>{const{children:o,...c}=i;return M.isValidElement(o)?M.cloneElement(o,{...P9(c,o.props),ref:n?y4(n,o.ref):o.ref}):M.Children.count(o)>1?M.Children.only(null):null});jb.displayName="SlotClone";const A4=({children:i})=>M.createElement(M.Fragment,null,i);function O9(i){return M.isValidElement(i)&&i.type===A4}function P9(i,n){const o={...n};for(const c in n){const d=i[c],h=n[c];/^on[A-Z]/.test(c)?d&&h?o[c]=(...m)=>{h(...m),d(...m)}:d&&(o[c]=d):c==="style"?o[c]={...d,...h}:c==="className"&&(o[c]=[d,h].filter(Boolean).join(" "))}return{...i,...o}}const B9=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],$i=B9.reduce((i,n)=>{const o=M.forwardRef((c,d)=>{const{asChild:h,...f}=c,m=h?dv:n;return M.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),M.createElement(m,st({},f,{ref:d}))});return o.displayName=`Primitive.${n}`,{...i,[n]:o}},{});function L9(i,n){i&&Mu.flushSync(()=>i.dispatchEvent(n))}function Ns(i){const n=M.useRef(i);return M.useEffect(()=>{n.current=i}),M.useMemo(()=>(...o)=>{var c;return(c=n.current)===null||c===void 0?void 0:c.call(n,...o)},[])}function z9(i,n=globalThis==null?void 0:globalThis.document){const o=Ns(i);M.useEffect(()=>{const c=d=>{d.key==="Escape"&&o(d)};return n.addEventListener("keydown",c),()=>n.removeEventListener("keydown",c)},[o,n])}const Rb="dismissableLayer.update",j9="dismissableLayer.pointerDownOutside",R9="dismissableLayer.focusOutside";let QE;const F9=M.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),C4=M.forwardRef((i,n)=>{var o;const{disableOutsidePointerEvents:c=!1,onEscapeKeyDown:d,onPointerDownOutside:h,onFocusOutside:f,onInteractOutside:m,onDismiss:k,...v}=i,w=M.useContext(F9),[y,C]=M.useState(null),E=(o=y==null?void 0:y.ownerDocument)!==null&&o!==void 0?o:globalThis==null?void 0:globalThis.document,[,D]=M.useState({}),I=no(n,ee=>C(ee)),j=Array.from(w.layers),[P]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),L=j.indexOf(P),S=y?j.indexOf(y):-1,$=w.layersWithOutsidePointerEventsDisabled.size>0,H=S>=L,J=V9(ee=>{const de=ee.target,se=[...w.branches].some(Y=>Y.contains(de));!H||se||(h==null||h(ee),m==null||m(ee),ee.defaultPrevented||k==null||k())},E),Z=$9(ee=>{const de=ee.target;[...w.branches].some(Y=>Y.contains(de))||(f==null||f(ee),m==null||m(ee),ee.defaultPrevented||k==null||k())},E);return z9(ee=>{S===w.layers.size-1&&(d==null||d(ee),!ee.defaultPrevented&&k&&(ee.preventDefault(),k()))},E),M.useEffect(()=>{if(y)return c&&(w.layersWithOutsidePointerEventsDisabled.size===0&&(QE=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(y)),w.layers.add(y),JE(),()=>{c&&w.layersWithOutsidePointerEventsDisabled.size===1&&(E.body.style.pointerEvents=QE)}},[y,E,c,w]),M.useEffect(()=>()=>{y&&(w.layers.delete(y),w.layersWithOutsidePointerEventsDisabled.delete(y),JE())},[y,w]),M.useEffect(()=>{const ee=()=>D({});return document.addEventListener(Rb,ee),()=>document.removeEventListener(Rb,ee)},[]),M.createElement($i.div,st({},v,{ref:I,style:{pointerEvents:$?H?"auto":"none":void 0,...i.style},onFocusCapture:pi(i.onFocusCapture,Z.onFocusCapture),onBlurCapture:pi(i.onBlurCapture,Z.onBlurCapture),onPointerDownCapture:pi(i.onPointerDownCapture,J.onPointerDownCapture)}))});function V9(i,n=globalThis==null?void 0:globalThis.document){const o=Ns(i),c=M.useRef(!1),d=M.useRef(()=>{});return M.useEffect(()=>{const h=m=>{if(m.target&&!c.current){let w=function(){x4(j9,o,v,{discrete:!0})};var k=w;const v={originalEvent:m};m.pointerType==="touch"?(n.removeEventListener("click",d.current),d.current=w,n.addEventListener("click",d.current,{once:!0})):w()}else n.removeEventListener("click",d.current);c.current=!1},f=window.setTimeout(()=>{n.addEventListener("pointerdown",h)},0);return()=>{window.clearTimeout(f),n.removeEventListener("pointerdown",h),n.removeEventListener("click",d.current)}},[n,o]),{onPointerDownCapture:()=>c.current=!0}}function $9(i,n=globalThis==null?void 0:globalThis.document){const o=Ns(i),c=M.useRef(!1);return M.useEffect(()=>{const d=h=>{h.target&&!c.current&&x4(R9,o,{originalEvent:h},{discrete:!1})};return n.addEventListener("focusin",d),()=>n.removeEventListener("focusin",d)},[n,o]),{onFocusCapture:()=>c.current=!0,onBlurCapture:()=>c.current=!1}}function JE(){const i=new CustomEvent(Rb);document.dispatchEvent(i)}function x4(i,n,o,{discrete:c}){const d=o.originalEvent.target,h=new CustomEvent(i,{bubbles:!1,cancelable:!0,detail:o});n&&d.addEventListener(i,n,{once:!0}),c?L9(d,h):d.dispatchEvent(h)}const tl=globalThis!=null&&globalThis.document?M.useLayoutEffect:()=>{},U9=X5["useId".toString()]||(()=>{});let H9=0;function up(i){const[n,o]=M.useState(U9());return tl(()=>{i||o(c=>c??String(H9++))},[i]),i||(n?`radix-${n}`:"")}const W9=["top","right","bottom","left"],Os=Math.min,Pi=Math.max,Qp=Math.round,Vf=Math.floor,Ps=i=>({x:i,y:i}),q9={left:"right",right:"left",bottom:"top",top:"bottom"},G9={start:"end",end:"start"};function Fb(i,n,o){return Pi(i,Os(n,o))}function Po(i,n){return typeof i=="function"?i(n):i}function Bo(i){return i.split("-")[0]}function gl(i){return i.split("-")[1]}function uv(i){return i==="x"?"y":"x"}function hv(i){return i==="y"?"height":"width"}function ml(i){return["top","bottom"].includes(Bo(i))?"y":"x"}function fv(i){return uv(ml(i))}function Y9(i,n,o){o===void 0&&(o=!1);const c=gl(i),d=fv(i),h=hv(d);let f=d==="x"?c===(o?"end":"start")?"right":"left":c==="start"?"bottom":"top";return n.reference[h]>n.floating[h]&&(f=Jp(f)),[f,Jp(f)]}function K9(i){const n=Jp(i);return[Vb(i),n,Vb(n)]}function Vb(i){return i.replace(/start|end/g,n=>G9[n])}function Z9(i,n,o){const c=["left","right"],d=["right","left"],h=["top","bottom"],f=["bottom","top"];switch(i){case"top":case"bottom":return o?n?d:c:n?c:d;case"left":case"right":return n?h:f;default:return[]}}function Q9(i,n,o,c){const d=gl(i);let h=Z9(Bo(i),o==="start",c);return d&&(h=h.map(f=>f+"-"+d),n&&(h=h.concat(h.map(Vb)))),h}function Jp(i){return i.replace(/left|right|bottom|top/g,n=>q9[n])}function J9(i){return{top:0,right:0,bottom:0,left:0,...i}}function E4(i){return typeof i!="number"?J9(i):{top:i,right:i,bottom:i,left:i}}function Xp(i){return{...i,top:i.y,left:i.x,right:i.x+i.width,bottom:i.y+i.height}}function XE(i,n,o){let{reference:c,floating:d}=i;const h=ml(n),f=fv(n),m=hv(f),k=Bo(n),v=h==="y",w=c.x+c.width/2-d.width/2,y=c.y+c.height/2-d.height/2,C=c[m]/2-d[m]/2;let E;switch(k){case"top":E={x:w,y:c.y-d.height};break;case"bottom":E={x:w,y:c.y+c.height};break;case"right":E={x:c.x+c.width,y};break;case"left":E={x:c.x-d.width,y};break;default:E={x:c.x,y:c.y}}switch(gl(n)){case"start":E[f]-=C*(o&&v?-1:1);break;case"end":E[f]+=C*(o&&v?-1:1);break}return E}const X9=async(i,n,o)=>{const{placement:c="bottom",strategy:d="absolute",middleware:h=[],platform:f}=o,m=h.filter(Boolean),k=await(f.isRTL==null?void 0:f.isRTL(n));let v=await f.getElementRects({reference:i,floating:n,strategy:d}),{x:w,y}=XE(v,c,k),C=c,E={},D=0;for(let I=0;I<m.length;I++){const{name:j,fn:P}=m[I],{x:L,y:S,data:$,reset:H}=await P({x:w,y,initialPlacement:c,placement:C,strategy:d,middlewareData:E,rects:v,platform:f,elements:{reference:i,floating:n}});if(w=L??w,y=S??y,E={...E,[j]:{...E[j],...$}},H&&D<=50){D++,typeof H=="object"&&(H.placement&&(C=H.placement),H.rects&&(v=H.rects===!0?await f.getElementRects({reference:i,floating:n,strategy:d}):H.rects),{x:w,y}=XE(v,C,k)),I=-1;continue}}return{x:w,y,placement:C,strategy:d,middlewareData:E}};async function vu(i,n){var o;n===void 0&&(n={});const{x:c,y:d,platform:h,rects:f,elements:m,strategy:k}=i,{boundary:v="clippingAncestors",rootBoundary:w="viewport",elementContext:y="floating",altBoundary:C=!1,padding:E=0}=Po(n,i),D=E4(E),j=m[C?y==="floating"?"reference":"floating":y],P=Xp(await h.getClippingRect({element:(o=await(h.isElement==null?void 0:h.isElement(j)))==null||o?j:j.contextElement||await(h.getDocumentElement==null?void 0:h.getDocumentElement(m.floating)),boundary:v,rootBoundary:w,strategy:k})),L=y==="floating"?{...f.floating,x:c,y:d}:f.reference,S=await(h.getOffsetParent==null?void 0:h.getOffsetParent(m.floating)),$=await(h.isElement==null?void 0:h.isElement(S))?await(h.getScale==null?void 0:h.getScale(S))||{x:1,y:1}:{x:1,y:1},H=Xp(h.convertOffsetParentRelativeRectToViewportRelativeRect?await h.convertOffsetParentRelativeRectToViewportRelativeRect({rect:L,offsetParent:S,strategy:k}):L);return{top:(P.top-H.top+D.top)/$.y,bottom:(H.bottom-P.bottom+D.bottom)/$.y,left:(P.left-H.left+D.left)/$.x,right:(H.right-P.right+D.right)/$.x}}const $b=i=>({name:"arrow",options:i,async fn(n){const{x:o,y:c,placement:d,rects:h,platform:f,elements:m,middlewareData:k}=n,{element:v,padding:w=0}=Po(i,n)||{};if(v==null)return{};const y=E4(w),C={x:o,y:c},E=fv(d),D=hv(E),I=await f.getDimensions(v),j=E==="y",P=j?"top":"left",L=j?"bottom":"right",S=j?"clientHeight":"clientWidth",$=h.reference[D]+h.reference[E]-C[E]-h.floating[D],H=C[E]-h.reference[E],J=await(f.getOffsetParent==null?void 0:f.getOffsetParent(v));let Z=J?J[S]:0;(!Z||!await(f.isElement==null?void 0:f.isElement(J)))&&(Z=m.floating[S]||h.floating[D]);const ee=$/2-H/2,de=Z/2-I[D]/2-1,se=Os(y[P],de),Y=Os(y[L],de),Q=se,q=Z-I[D]-Y,U=Z/2-I[D]/2+ee,W=Fb(Q,U,q),X=!k.arrow&&gl(d)!=null&&U!=W&&h.reference[D]/2-(U<Q?se:Y)-I[D]/2<0,oe=X?U<Q?U-Q:U-q:0;return{[E]:C[E]+oe,data:{[E]:W,centerOffset:U-W-oe,...X&&{alignmentOffset:oe}},reset:X}}}),S4=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(n){var o,c;const{placement:d,middlewareData:h,rects:f,initialPlacement:m,platform:k,elements:v}=n,{mainAxis:w=!0,crossAxis:y=!0,fallbackPlacements:C,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:D="none",flipAlignment:I=!0,...j}=Po(i,n);if((o=h.arrow)!=null&&o.alignmentOffset)return{};const P=Bo(d),L=Bo(m)===m,S=await(k.isRTL==null?void 0:k.isRTL(v.floating)),$=C||(L||!I?[Jp(m)]:K9(m));!C&&D!=="none"&&$.push(...Q9(m,I,D,S));const H=[m,...$],J=await vu(n,j),Z=[];let ee=((c=h.flip)==null?void 0:c.overflows)||[];if(w&&Z.push(J[P]),y){const Q=Y9(d,f,S);Z.push(J[Q[0]],J[Q[1]])}if(ee=[...ee,{placement:d,overflows:Z}],!Z.every(Q=>Q<=0)){var de,se;const Q=(((de=h.flip)==null?void 0:de.index)||0)+1,q=H[Q];if(q)return{data:{index:Q,overflows:ee},reset:{placement:q}};let U=(se=ee.filter(W=>W.overflows[0]<=0).sort((W,X)=>W.overflows[1]-X.overflows[1])[0])==null?void 0:se.placement;if(!U)switch(E){case"bestFit":{var Y;const W=(Y=ee.map(X=>[X.placement,X.overflows.filter(oe=>oe>0).reduce((oe,re)=>oe+re,0)]).sort((X,oe)=>X[1]-oe[1])[0])==null?void 0:Y[0];W&&(U=W);break}case"initialPlacement":U=m;break}if(d!==U)return{reset:{placement:U}}}return{}}}};function e5(i,n){return{top:i.top-n.height,right:i.right-n.width,bottom:i.bottom-n.height,left:i.left-n.width}}function t5(i){return W9.some(n=>i[n]>=0)}const eF=function(i){return i===void 0&&(i={}),{name:"hide",options:i,async fn(n){const{rects:o}=n,{strategy:c="referenceHidden",...d}=Po(i,n);switch(c){case"referenceHidden":{const h=await vu(n,{...d,elementContext:"reference"}),f=e5(h,o.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:t5(f)}}}case"escaped":{const h=await vu(n,{...d,altBoundary:!0}),f=e5(h,o.floating);return{data:{escapedOffsets:f,escaped:t5(f)}}}default:return{}}}}};async function tF(i,n){const{placement:o,platform:c,elements:d}=i,h=await(c.isRTL==null?void 0:c.isRTL(d.floating)),f=Bo(o),m=gl(o),k=ml(o)==="y",v=["left","top"].includes(f)?-1:1,w=h&&k?-1:1,y=Po(n,i);let{mainAxis:C,crossAxis:E,alignmentAxis:D}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...y};return m&&typeof D=="number"&&(E=m==="end"?D*-1:D),k?{x:E*w,y:C*v}:{x:C*v,y:E*w}}const D4=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(n){var o,c;const{x:d,y:h,placement:f,middlewareData:m}=n,k=await tF(n,i);return f===((o=m.offset)==null?void 0:o.placement)&&(c=m.arrow)!=null&&c.alignmentOffset?{}:{x:d+k.x,y:h+k.y,data:{...k,placement:f}}}}},T4=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(n){const{x:o,y:c,placement:d}=n,{mainAxis:h=!0,crossAxis:f=!1,limiter:m={fn:j=>{let{x:P,y:L}=j;return{x:P,y:L}}},...k}=Po(i,n),v={x:o,y:c},w=await vu(n,k),y=ml(Bo(d)),C=uv(y);let E=v[C],D=v[y];if(h){const j=C==="y"?"top":"left",P=C==="y"?"bottom":"right",L=E+w[j],S=E-w[P];E=Fb(L,E,S)}if(f){const j=y==="y"?"top":"left",P=y==="y"?"bottom":"right",L=D+w[j],S=D-w[P];D=Fb(L,D,S)}const I=m.fn({...n,[C]:E,[y]:D});return{...I,data:{x:I.x-o,y:I.y-c}}}}},nF=function(i){return i===void 0&&(i={}),{options:i,fn(n){const{x:o,y:c,placement:d,rects:h,middlewareData:f}=n,{offset:m=0,mainAxis:k=!0,crossAxis:v=!0}=Po(i,n),w={x:o,y:c},y=ml(d),C=uv(y);let E=w[C],D=w[y];const I=Po(m,n),j=typeof I=="number"?{mainAxis:I,crossAxis:0}:{mainAxis:0,crossAxis:0,...I};if(k){const S=C==="y"?"height":"width",$=h.reference[C]-h.floating[S]+j.mainAxis,H=h.reference[C]+h.reference[S]-j.mainAxis;E<$?E=$:E>H&&(E=H)}if(v){var P,L;const S=C==="y"?"width":"height",$=["top","left"].includes(Bo(d)),H=h.reference[y]-h.floating[S]+($&&((P=f.offset)==null?void 0:P[y])||0)+($?0:j.crossAxis),J=h.reference[y]+h.reference[S]+($?0:((L=f.offset)==null?void 0:L[y])||0)-($?j.crossAxis:0);D<H?D=H:D>J&&(D=J)}return{[C]:E,[y]:D}}}},iF=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(n){const{placement:o,rects:c,platform:d,elements:h}=n,{apply:f=()=>{},...m}=Po(i,n),k=await vu(n,m),v=Bo(o),w=gl(o),y=ml(o)==="y",{width:C,height:E}=c.floating;let D,I;v==="top"||v==="bottom"?(D=v,I=w===(await(d.isRTL==null?void 0:d.isRTL(h.floating))?"start":"end")?"left":"right"):(I=v,D=w==="end"?"top":"bottom");const j=E-k[D],P=C-k[I],L=!n.middlewareData.shift;let S=j,$=P;if(y){const J=C-k.left-k.right;$=w||L?Os(P,J):J}else{const J=E-k.top-k.bottom;S=w||L?Os(j,J):J}if(L&&!w){const J=Pi(k.left,0),Z=Pi(k.right,0),ee=Pi(k.top,0),de=Pi(k.bottom,0);y?$=C-2*(J!==0||Z!==0?J+Z:Pi(k.left,k.right)):S=E-2*(ee!==0||de!==0?ee+de:Pi(k.top,k.bottom))}await f({...n,availableWidth:$,availableHeight:S});const H=await d.getDimensions(h.floating);return C!==H.width||E!==H.height?{reset:{rects:!0}}:{}}}};function Bs(i){return I4(i)?(i.nodeName||"").toLowerCase():"#document"}function ji(i){var n;return(i==null||(n=i.ownerDocument)==null?void 0:n.defaultView)||window}function Vo(i){var n;return(n=(I4(i)?i.ownerDocument:i.document)||window.document)==null?void 0:n.documentElement}function I4(i){return i instanceof Node||i instanceof ji(i).Node}function Lo(i){return i instanceof Element||i instanceof ji(i).Element}function to(i){return i instanceof HTMLElement||i instanceof ji(i).HTMLElement}function n5(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof ji(i).ShadowRoot}function Lu(i){const{overflow:n,overflowX:o,overflowY:c,display:d}=lr(i);return/auto|scroll|overlay|hidden|clip/.test(n+c+o)&&!["inline","contents"].includes(d)}function rF(i){return["table","td","th"].includes(Bs(i))}function pv(i){const n=gv(),o=lr(i);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!n&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!n&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(c=>(o.willChange||"").includes(c))||["paint","layout","strict","content"].some(c=>(o.contain||"").includes(c))}function oF(i){let n=nl(i);for(;to(n)&&!Eg(n);){if(pv(n))return n;n=nl(n)}return null}function gv(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Eg(i){return["html","body","#document"].includes(Bs(i))}function lr(i){return ji(i).getComputedStyle(i)}function Sg(i){return Lo(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function nl(i){if(Bs(i)==="html")return i;const n=i.assignedSlot||i.parentNode||n5(i)&&i.host||Vo(i);return n5(n)?n.host:n}function M4(i){const n=nl(i);return Eg(n)?i.ownerDocument?i.ownerDocument.body:i.body:to(n)&&Lu(n)?n:M4(n)}function _u(i,n,o){var c;n===void 0&&(n=[]),o===void 0&&(o=!0);const d=M4(i),h=d===((c=i.ownerDocument)==null?void 0:c.body),f=ji(d);return h?n.concat(f,f.visualViewport||[],Lu(d)?d:[],f.frameElement&&o?_u(f.frameElement):[]):n.concat(d,_u(d,[],o))}function N4(i){const n=lr(i);let o=parseFloat(n.width)||0,c=parseFloat(n.height)||0;const d=to(i),h=d?i.offsetWidth:o,f=d?i.offsetHeight:c,m=Qp(o)!==h||Qp(c)!==f;return m&&(o=h,c=f),{width:o,height:c,$:m}}function mv(i){return Lo(i)?i:i.contextElement}function qc(i){const n=mv(i);if(!to(n))return Ps(1);const o=n.getBoundingClientRect(),{width:c,height:d,$:h}=N4(n);let f=(h?Qp(o.width):o.width)/c,m=(h?Qp(o.height):o.height)/d;return(!f||!Number.isFinite(f))&&(f=1),(!m||!Number.isFinite(m))&&(m=1),{x:f,y:m}}const sF=Ps(0);function O4(i){const n=ji(i);return!gv()||!n.visualViewport?sF:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function aF(i,n,o){return n===void 0&&(n=!1),!o||n&&o!==ji(i)?!1:n}function Ta(i,n,o,c){n===void 0&&(n=!1),o===void 0&&(o=!1);const d=i.getBoundingClientRect(),h=mv(i);let f=Ps(1);n&&(c?Lo(c)&&(f=qc(c)):f=qc(i));const m=aF(h,o,c)?O4(h):Ps(0);let k=(d.left+m.x)/f.x,v=(d.top+m.y)/f.y,w=d.width/f.x,y=d.height/f.y;if(h){const C=ji(h),E=c&&Lo(c)?ji(c):c;let D=C.frameElement;for(;D&&c&&E!==C;){const I=qc(D),j=D.getBoundingClientRect(),P=lr(D),L=j.left+(D.clientLeft+parseFloat(P.paddingLeft))*I.x,S=j.top+(D.clientTop+parseFloat(P.paddingTop))*I.y;k*=I.x,v*=I.y,w*=I.x,y*=I.y,k+=L,v+=S,D=ji(D).frameElement}}return Xp({width:w,height:y,x:k,y:v})}function cF(i){let{rect:n,offsetParent:o,strategy:c}=i;const d=to(o),h=Vo(o);if(o===h)return n;let f={scrollLeft:0,scrollTop:0},m=Ps(1);const k=Ps(0);if((d||!d&&c!=="fixed")&&((Bs(o)!=="body"||Lu(h))&&(f=Sg(o)),to(o))){const v=Ta(o);m=qc(o),k.x=v.x+o.clientLeft,k.y=v.y+o.clientTop}return{width:n.width*m.x,height:n.height*m.y,x:n.x*m.x-f.scrollLeft*m.x+k.x,y:n.y*m.y-f.scrollTop*m.y+k.y}}function lF(i){return Array.from(i.getClientRects())}function P4(i){return Ta(Vo(i)).left+Sg(i).scrollLeft}function dF(i){const n=Vo(i),o=Sg(i),c=i.ownerDocument.body,d=Pi(n.scrollWidth,n.clientWidth,c.scrollWidth,c.clientWidth),h=Pi(n.scrollHeight,n.clientHeight,c.scrollHeight,c.clientHeight);let f=-o.scrollLeft+P4(i);const m=-o.scrollTop;return lr(c).direction==="rtl"&&(f+=Pi(n.clientWidth,c.clientWidth)-d),{width:d,height:h,x:f,y:m}}function uF(i,n){const o=ji(i),c=Vo(i),d=o.visualViewport;let h=c.clientWidth,f=c.clientHeight,m=0,k=0;if(d){h=d.width,f=d.height;const v=gv();(!v||v&&n==="fixed")&&(m=d.offsetLeft,k=d.offsetTop)}return{width:h,height:f,x:m,y:k}}function hF(i,n){const o=Ta(i,!0,n==="fixed"),c=o.top+i.clientTop,d=o.left+i.clientLeft,h=to(i)?qc(i):Ps(1),f=i.clientWidth*h.x,m=i.clientHeight*h.y,k=d*h.x,v=c*h.y;return{width:f,height:m,x:k,y:v}}function i5(i,n,o){let c;if(n==="viewport")c=uF(i,o);else if(n==="document")c=dF(Vo(i));else if(Lo(n))c=hF(n,o);else{const d=O4(i);c={...n,x:n.x-d.x,y:n.y-d.y}}return Xp(c)}function B4(i,n){const o=nl(i);return o===n||!Lo(o)||Eg(o)?!1:lr(o).position==="fixed"||B4(o,n)}function fF(i,n){const o=n.get(i);if(o)return o;let c=_u(i,[],!1).filter(m=>Lo(m)&&Bs(m)!=="body"),d=null;const h=lr(i).position==="fixed";let f=h?nl(i):i;for(;Lo(f)&&!Eg(f);){const m=lr(f),k=pv(f);!k&&m.position==="fixed"&&(d=null),(h?!k&&!d:!k&&m.position==="static"&&!!d&&["absolute","fixed"].includes(d.position)||Lu(f)&&!k&&B4(i,f))?c=c.filter(w=>w!==f):d=m,f=nl(f)}return n.set(i,c),c}function pF(i){let{element:n,boundary:o,rootBoundary:c,strategy:d}=i;const f=[...o==="clippingAncestors"?fF(n,this._c):[].concat(o),c],m=f[0],k=f.reduce((v,w)=>{const y=i5(n,w,d);return v.top=Pi(y.top,v.top),v.right=Os(y.right,v.right),v.bottom=Os(y.bottom,v.bottom),v.left=Pi(y.left,v.left),v},i5(n,m,d));return{width:k.right-k.left,height:k.bottom-k.top,x:k.left,y:k.top}}function gF(i){return N4(i)}function mF(i,n,o){const c=to(n),d=Vo(n),h=o==="fixed",f=Ta(i,!0,h,n);let m={scrollLeft:0,scrollTop:0};const k=Ps(0);if(c||!c&&!h)if((Bs(n)!=="body"||Lu(d))&&(m=Sg(n)),c){const v=Ta(n,!0,h,n);k.x=v.x+n.clientLeft,k.y=v.y+n.clientTop}else d&&(k.x=P4(d));return{x:f.left+m.scrollLeft-k.x,y:f.top+m.scrollTop-k.y,width:f.width,height:f.height}}function r5(i,n){return!to(i)||lr(i).position==="fixed"?null:n?n(i):i.offsetParent}function L4(i,n){const o=ji(i);if(!to(i))return o;let c=r5(i,n);for(;c&&rF(c)&&lr(c).position==="static";)c=r5(c,n);return c&&(Bs(c)==="html"||Bs(c)==="body"&&lr(c).position==="static"&&!pv(c))?o:c||oF(i)||o}const kF=async function(i){let{reference:n,floating:o,strategy:c}=i;const d=this.getOffsetParent||L4,h=this.getDimensions;return{reference:mF(n,await d(o),c),floating:{x:0,y:0,...await h(o)}}};function bF(i){return lr(i).direction==="rtl"}const wF={convertOffsetParentRelativeRectToViewportRelativeRect:cF,getDocumentElement:Vo,getClippingRect:pF,getOffsetParent:L4,getElementRects:kF,getClientRects:lF,getDimensions:gF,getScale:qc,isElement:Lo,isRTL:bF};function vF(i,n){let o=null,c;const d=Vo(i);function h(){clearTimeout(c),o&&o.disconnect(),o=null}function f(m,k){m===void 0&&(m=!1),k===void 0&&(k=1),h();const{left:v,top:w,width:y,height:C}=i.getBoundingClientRect();if(m||n(),!y||!C)return;const E=Vf(w),D=Vf(d.clientWidth-(v+y)),I=Vf(d.clientHeight-(w+C)),j=Vf(v),L={rootMargin:-E+"px "+-D+"px "+-I+"px "+-j+"px",threshold:Pi(0,Os(1,k))||1};let S=!0;function $(H){const J=H[0].intersectionRatio;if(J!==k){if(!S)return f();J?f(!1,J):c=setTimeout(()=>{f(!1,1e-7)},100)}S=!1}try{o=new IntersectionObserver($,{...L,root:d.ownerDocument})}catch{o=new IntersectionObserver($,L)}o.observe(i)}return f(!0),h}function z4(i,n,o,c){c===void 0&&(c={});const{ancestorScroll:d=!0,ancestorResize:h=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:k=!1}=c,v=mv(i),w=d||h?[...v?_u(v):[],..._u(n)]:[];w.forEach(P=>{d&&P.addEventListener("scroll",o,{passive:!0}),h&&P.addEventListener("resize",o)});const y=v&&m?vF(v,o):null;let C=-1,E=null;f&&(E=new ResizeObserver(P=>{let[L]=P;L&&L.target===v&&E&&(E.unobserve(n),cancelAnimationFrame(C),C=requestAnimationFrame(()=>{E&&E.observe(n)})),o()}),v&&!k&&E.observe(v),E.observe(n));let D,I=k?Ta(i):null;k&&j();function j(){const P=Ta(i);I&&(P.x!==I.x||P.y!==I.y||P.width!==I.width||P.height!==I.height)&&o(),I=P,D=requestAnimationFrame(j)}return o(),()=>{w.forEach(P=>{d&&P.removeEventListener("scroll",o),h&&P.removeEventListener("resize",o)}),y&&y(),E&&E.disconnect(),E=null,k&&cancelAnimationFrame(D)}}const Ub=(i,n,o)=>{const c=new Map,d={platform:wF,...o},h={...d.platform,_c:c};return X9(i,n,{...d,platform:h})},_F=i=>{function n(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:i,fn(o){const{element:c,padding:d}=typeof i=="function"?i(o):i;return c&&n(c)?c.current!=null?$b({element:c.current,padding:d}).fn(o):{}:c?$b({element:c,padding:d}).fn(o):{}}}};var hp=typeof document<"u"?M.useLayoutEffect:M.useEffect;function eg(i,n){if(i===n)return!0;if(typeof i!=typeof n)return!1;if(typeof i=="function"&&i.toString()===n.toString())return!0;let o,c,d;if(i&&n&&typeof i=="object"){if(Array.isArray(i)){if(o=i.length,o!=n.length)return!1;for(c=o;c--!==0;)if(!eg(i[c],n[c]))return!1;return!0}if(d=Object.keys(i),o=d.length,o!==Object.keys(n).length)return!1;for(c=o;c--!==0;)if(!{}.hasOwnProperty.call(n,d[c]))return!1;for(c=o;c--!==0;){const h=d[c];if(!(h==="_owner"&&i.$$typeof)&&!eg(i[h],n[h]))return!1}return!0}return i!==i&&n!==n}function j4(i){return typeof window>"u"?1:(i.ownerDocument.defaultView||window).devicePixelRatio||1}function o5(i,n){const o=j4(i);return Math.round(n*o)/o}function s5(i){const n=M.useRef(i);return hp(()=>{n.current=i}),n}function yF(i){i===void 0&&(i={});const{placement:n="bottom",strategy:o="absolute",middleware:c=[],platform:d,elements:{reference:h,floating:f}={},transform:m=!0,whileElementsMounted:k,open:v}=i,[w,y]=M.useState({x:0,y:0,strategy:o,placement:n,middlewareData:{},isPositioned:!1}),[C,E]=M.useState(c);eg(C,c)||E(c);const[D,I]=M.useState(null),[j,P]=M.useState(null),L=M.useCallback(X=>{X!=J.current&&(J.current=X,I(X))},[I]),S=M.useCallback(X=>{X!==Z.current&&(Z.current=X,P(X))},[P]),$=h||D,H=f||j,J=M.useRef(null),Z=M.useRef(null),ee=M.useRef(w),de=s5(k),se=s5(d),Y=M.useCallback(()=>{if(!J.current||!Z.current)return;const X={placement:n,strategy:o,middleware:C};se.current&&(X.platform=se.current),Ub(J.current,Z.current,X).then(oe=>{const re={...oe,isPositioned:!0};Q.current&&!eg(ee.current,re)&&(ee.current=re,Mu.flushSync(()=>{y(re)}))})},[C,n,o,se]);hp(()=>{v===!1&&ee.current.isPositioned&&(ee.current.isPositioned=!1,y(X=>({...X,isPositioned:!1})))},[v]);const Q=M.useRef(!1);hp(()=>(Q.current=!0,()=>{Q.current=!1}),[]),hp(()=>{if($&&(J.current=$),H&&(Z.current=H),$&&H){if(de.current)return de.current($,H,Y);Y()}},[$,H,Y,de]);const q=M.useMemo(()=>({reference:J,floating:Z,setReference:L,setFloating:S}),[L,S]),U=M.useMemo(()=>({reference:$,floating:H}),[$,H]),W=M.useMemo(()=>{const X={position:o,left:0,top:0};if(!U.floating)return X;const oe=o5(U.floating,w.x),re=o5(U.floating,w.y);return m?{...X,transform:"translate("+oe+"px, "+re+"px)",...j4(U.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:oe,top:re}},[o,m,U.floating,w.x,w.y]);return M.useMemo(()=>({...w,update:Y,refs:q,elements:U,floatingStyles:W}),[w,Y,q,U,W])}const AF=M.forwardRef((i,n)=>{const{children:o,width:c=10,height:d=5,...h}=i;return M.createElement($i.svg,st({},h,{ref:n,width:c,height:d,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),i.asChild?o:M.createElement("polygon",{points:"0,0 30,0 15,10"}))}),CF=AF;function xF(i){const[n,o]=M.useState(void 0);return tl(()=>{if(i){o({width:i.offsetWidth,height:i.offsetHeight});const c=new ResizeObserver(d=>{if(!Array.isArray(d)||!d.length)return;const h=d[0];let f,m;if("borderBoxSize"in h){const k=h.borderBoxSize,v=Array.isArray(k)?k[0]:k;f=v.inlineSize,m=v.blockSize}else f=i.offsetWidth,m=i.offsetHeight;o({width:f,height:m})});return c.observe(i,{box:"border-box"}),()=>c.unobserve(i)}else o(void 0)},[i]),n}const R4="Popper",[F4,V4]=lv(R4),[EF,$4]=F4(R4),SF=i=>{const{__scopePopper:n,children:o}=i,[c,d]=M.useState(null);return M.createElement(EF,{scope:n,anchor:c,onAnchorChange:d},o)},DF="PopperAnchor",TF=M.forwardRef((i,n)=>{const{__scopePopper:o,virtualRef:c,...d}=i,h=$4(DF,o),f=M.useRef(null),m=no(n,f);return M.useEffect(()=>{h.onAnchorChange((c==null?void 0:c.current)||f.current)}),c?null:M.createElement($i.div,st({},d,{ref:m}))}),U4="PopperContent",[IF,MF]=F4(U4),NF=M.forwardRef((i,n)=>{var o,c,d,h,f,m,k,v;const{__scopePopper:w,side:y="bottom",sideOffset:C=0,align:E="center",alignOffset:D=0,arrowPadding:I=0,avoidCollisions:j=!0,collisionBoundary:P=[],collisionPadding:L=0,sticky:S="partial",hideWhenDetached:$=!1,updatePositionStrategy:H="optimized",onPlaced:J,...Z}=i,ee=$4(U4,w),[de,se]=M.useState(null),Y=no(n,lt=>se(lt)),[Q,q]=M.useState(null),U=xF(Q),W=(o=U==null?void 0:U.width)!==null&&o!==void 0?o:0,X=(c=U==null?void 0:U.height)!==null&&c!==void 0?c:0,oe=y+(E!=="center"?"-"+E:""),re=typeof L=="number"?L:{top:0,right:0,bottom:0,left:0,...L},ie=Array.isArray(P)?P:[P],pe=ie.length>0,ge={padding:re,boundary:ie.filter(LF),altBoundary:pe},{refs:Se,floatingStyles:tt,placement:wt,isPositioned:nt,middlewareData:Ee}=yF({strategy:"fixed",placement:oe,whileElementsMounted:(...lt)=>z4(...lt,{animationFrame:H==="always"}),elements:{reference:ee.anchor},middleware:[D4({mainAxis:C+X,alignmentAxis:D}),j&&T4({mainAxis:!0,crossAxis:!1,limiter:S==="partial"?nF():void 0,...ge}),j&&S4({...ge}),iF({...ge,apply:({elements:lt,rects:Mt,availableWidth:Jt,availableHeight:ur})=>{const{width:jt,height:Nt}=Mt.reference,Re=lt.floating.style;Re.setProperty("--radix-popper-available-width",`${Jt}px`),Re.setProperty("--radix-popper-available-height",`${ur}px`),Re.setProperty("--radix-popper-anchor-width",`${jt}px`),Re.setProperty("--radix-popper-anchor-height",`${Nt}px`)}}),Q&&_F({element:Q,padding:I}),zF({arrowWidth:W,arrowHeight:X}),$&&eF({strategy:"referenceHidden",...ge})]}),[on,Me]=H4(wt),It=Ns(J);tl(()=>{nt&&(It==null||It())},[nt,It]);const ni=(d=Ee.arrow)===null||d===void 0?void 0:d.x,wi=(h=Ee.arrow)===null||h===void 0?void 0:h.y,dr=((f=Ee.arrow)===null||f===void 0?void 0:f.centerOffset)!==0,[Ui,vi]=M.useState();return tl(()=>{de&&vi(window.getComputedStyle(de).zIndex)},[de]),M.createElement("div",{ref:Se.setFloating,"data-radix-popper-content-wrapper":"",style:{...tt,transform:nt?tt.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ui,"--radix-popper-transform-origin":[(m=Ee.transformOrigin)===null||m===void 0?void 0:m.x,(k=Ee.transformOrigin)===null||k===void 0?void 0:k.y].join(" ")},dir:i.dir},M.createElement(IF,{scope:w,placedSide:on,onArrowChange:q,arrowX:ni,arrowY:wi,shouldHideArrow:dr},M.createElement($i.div,st({"data-side":on,"data-align":Me},Z,{ref:Y,style:{...Z.style,animation:nt?void 0:"none",opacity:(v=Ee.hide)!==null&&v!==void 0&&v.referenceHidden?0:void 0}}))))}),OF="PopperArrow",PF={top:"bottom",right:"left",bottom:"top",left:"right"},BF=M.forwardRef(function(n,o){const{__scopePopper:c,...d}=n,h=MF(OF,c),f=PF[h.placedSide];return M.createElement("span",{ref:h.onArrowChange,style:{position:"absolute",left:h.arrowX,top:h.arrowY,[f]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[h.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[h.placedSide],visibility:h.shouldHideArrow?"hidden":void 0}},M.createElement(CF,st({},d,{ref:o,style:{...d.style,display:"block"}})))});function LF(i){return i!==null}const zF=i=>({name:"transformOrigin",options:i,fn(n){var o,c,d,h,f;const{placement:m,rects:k,middlewareData:v}=n,y=((o=v.arrow)===null||o===void 0?void 0:o.centerOffset)!==0,C=y?0:i.arrowWidth,E=y?0:i.arrowHeight,[D,I]=H4(m),j={start:"0%",center:"50%",end:"100%"}[I],P=((c=(d=v.arrow)===null||d===void 0?void 0:d.x)!==null&&c!==void 0?c:0)+C/2,L=((h=(f=v.arrow)===null||f===void 0?void 0:f.y)!==null&&h!==void 0?h:0)+E/2;let S="",$="";return D==="bottom"?(S=y?j:`${P}px`,$=`${-E}px`):D==="top"?(S=y?j:`${P}px`,$=`${k.floating.height+E}px`):D==="right"?(S=`${-E}px`,$=y?j:`${L}px`):D==="left"&&(S=`${k.floating.width+E}px`,$=y?j:`${L}px`),{data:{x:S,y:$}}}});function H4(i){const[n,o="center"]=i.split("-");return[n,o]}const jF=SF,RF=TF,FF=NF,VF=BF,W4=M.forwardRef((i,n)=>{var o;const{container:c=globalThis==null||(o=globalThis.document)===null||o===void 0?void 0:o.body,...d}=i;return c?Gz.createPortal(M.createElement($i.div,st({},d,{ref:n})),c):null});function $F(i,n){return M.useReducer((o,c)=>{const d=n[o][c];return d??o},i)}const kl=i=>{const{present:n,children:o}=i,c=UF(n),d=typeof o=="function"?o({present:c.isPresent}):M.Children.only(o),h=no(c.ref,d.ref);return typeof o=="function"||c.isPresent?M.cloneElement(d,{ref:h}):null};kl.displayName="Presence";function UF(i){const[n,o]=M.useState(),c=M.useRef({}),d=M.useRef(i),h=M.useRef("none"),f=i?"mounted":"unmounted",[m,k]=$F(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return M.useEffect(()=>{const v=$f(c.current);h.current=m==="mounted"?v:"none"},[m]),tl(()=>{const v=c.current,w=d.current;if(w!==i){const C=h.current,E=$f(v);i?k("MOUNT"):E==="none"||(v==null?void 0:v.display)==="none"?k("UNMOUNT"):k(w&&C!==E?"ANIMATION_OUT":"UNMOUNT"),d.current=i}},[i,k]),tl(()=>{if(n){const v=y=>{const E=$f(c.current).includes(y.animationName);y.target===n&&E&&Mu.flushSync(()=>k("ANIMATION_END"))},w=y=>{y.target===n&&(h.current=$f(c.current))};return n.addEventListener("animationstart",w),n.addEventListener("animationcancel",v),n.addEventListener("animationend",v),()=>{n.removeEventListener("animationstart",w),n.removeEventListener("animationcancel",v),n.removeEventListener("animationend",v)}}else k("ANIMATION_END")},[n,k]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:M.useCallback(v=>{v&&(c.current=getComputedStyle(v)),o(v)},[])}}function $f(i){return(i==null?void 0:i.animationName)||"none"}function q4({prop:i,defaultProp:n,onChange:o=()=>{}}){const[c,d]=HF({defaultProp:n,onChange:o}),h=i!==void 0,f=h?i:c,m=Ns(o),k=M.useCallback(v=>{if(h){const y=typeof v=="function"?v(i):v;y!==i&&m(y)}else d(v)},[h,i,d,m]);return[f,k]}function HF({defaultProp:i,onChange:n}){const o=M.useState(i),[c]=o,d=M.useRef(c),h=Ns(n);return M.useEffect(()=>{d.current!==c&&(h(c),d.current=c)},[c,d,h]),o}const WF=M.forwardRef((i,n)=>M.createElement($i.span,st({},i,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...i.style}}))),qF=WF,[Dg,yq]=lv("Tooltip",[V4]),Tg=V4(),GF="TooltipProvider",YF=700,Hb="tooltip.open",[KF,kv]=Dg(GF),ZF=i=>{const{__scopeTooltip:n,delayDuration:o=YF,skipDelayDuration:c=300,disableHoverableContent:d=!1,children:h}=i,[f,m]=M.useState(!0),k=M.useRef(!1),v=M.useRef(0);return M.useEffect(()=>{const w=v.current;return()=>window.clearTimeout(w)},[]),M.createElement(KF,{scope:n,isOpenDelayed:f,delayDuration:o,onOpen:M.useCallback(()=>{window.clearTimeout(v.current),m(!1)},[]),onClose:M.useCallback(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>m(!0),c)},[c]),isPointerInTransitRef:k,onPointerInTransitChange:M.useCallback(w=>{k.current=w},[]),disableHoverableContent:d},h)},bv="Tooltip",[QF,zu]=Dg(bv),JF=i=>{const{__scopeTooltip:n,children:o,open:c,defaultOpen:d=!1,onOpenChange:h,disableHoverableContent:f,delayDuration:m}=i,k=kv(bv,i.__scopeTooltip),v=Tg(n),[w,y]=M.useState(null),C=up(),E=M.useRef(0),D=f??k.disableHoverableContent,I=m??k.delayDuration,j=M.useRef(!1),[P=!1,L]=q4({prop:c,defaultProp:d,onChange:Z=>{Z?(k.onOpen(),document.dispatchEvent(new CustomEvent(Hb))):k.onClose(),h==null||h(Z)}}),S=M.useMemo(()=>P?j.current?"delayed-open":"instant-open":"closed",[P]),$=M.useCallback(()=>{window.clearTimeout(E.current),j.current=!1,L(!0)},[L]),H=M.useCallback(()=>{window.clearTimeout(E.current),L(!1)},[L]),J=M.useCallback(()=>{window.clearTimeout(E.current),E.current=window.setTimeout(()=>{j.current=!0,L(!0)},I)},[I,L]);return M.useEffect(()=>()=>window.clearTimeout(E.current),[]),M.createElement(jF,v,M.createElement(QF,{scope:n,contentId:C,open:P,stateAttribute:S,trigger:w,onTriggerChange:y,onTriggerEnter:M.useCallback(()=>{k.isOpenDelayed?J():$()},[k.isOpenDelayed,J,$]),onTriggerLeave:M.useCallback(()=>{D?H():window.clearTimeout(E.current)},[H,D]),onOpen:$,onClose:H,disableHoverableContent:D},o))},a5="TooltipTrigger",XF=M.forwardRef((i,n)=>{const{__scopeTooltip:o,...c}=i,d=zu(a5,o),h=kv(a5,o),f=Tg(o),m=M.useRef(null),k=no(n,m,d.onTriggerChange),v=M.useRef(!1),w=M.useRef(!1),y=M.useCallback(()=>v.current=!1,[]);return M.useEffect(()=>()=>document.removeEventListener("pointerup",y),[y]),M.createElement(RF,st({asChild:!0},f),M.createElement($i.button,st({"aria-describedby":d.open?d.contentId:void 0,"data-state":d.stateAttribute},c,{ref:k,onPointerMove:pi(i.onPointerMove,C=>{C.pointerType!=="touch"&&!w.current&&!h.isPointerInTransitRef.current&&(d.onTriggerEnter(),w.current=!0)}),onPointerLeave:pi(i.onPointerLeave,()=>{d.onTriggerLeave(),w.current=!1}),onPointerDown:pi(i.onPointerDown,()=>{v.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:pi(i.onFocus,()=>{v.current||d.onOpen()}),onBlur:pi(i.onBlur,d.onClose),onClick:pi(i.onClick,d.onClose)})))}),G4="TooltipPortal",[eV,tV]=Dg(G4,{forceMount:void 0}),nV=i=>{const{__scopeTooltip:n,forceMount:o,children:c,container:d}=i,h=zu(G4,n);return M.createElement(eV,{scope:n,forceMount:o},M.createElement(kl,{present:o||h.open},M.createElement(W4,{asChild:!0,container:d},c)))},yu="TooltipContent",iV=M.forwardRef((i,n)=>{const o=tV(yu,i.__scopeTooltip),{forceMount:c=o.forceMount,side:d="top",...h}=i,f=zu(yu,i.__scopeTooltip);return M.createElement(kl,{present:c||f.open},f.disableHoverableContent?M.createElement(Y4,st({side:d},h,{ref:n})):M.createElement(rV,st({side:d},h,{ref:n})))}),rV=M.forwardRef((i,n)=>{const o=zu(yu,i.__scopeTooltip),c=kv(yu,i.__scopeTooltip),d=M.useRef(null),h=no(n,d),[f,m]=M.useState(null),{trigger:k,onClose:v}=o,w=d.current,{onPointerInTransitChange:y}=c,C=M.useCallback(()=>{m(null),y(!1)},[y]),E=M.useCallback((D,I)=>{const j=D.currentTarget,P={x:D.clientX,y:D.clientY},L=lV(P,j.getBoundingClientRect()),S=dV(P,L),$=uV(I.getBoundingClientRect()),H=fV([...S,...$]);m(H),y(!0)},[y]);return M.useEffect(()=>()=>C(),[C]),M.useEffect(()=>{if(k&&w){const D=j=>E(j,w),I=j=>E(j,k);return k.addEventListener("pointerleave",D),w.addEventListener("pointerleave",I),()=>{k.removeEventListener("pointerleave",D),w.removeEventListener("pointerleave",I)}}},[k,w,E,C]),M.useEffect(()=>{if(f){const D=I=>{const j=I.target,P={x:I.clientX,y:I.clientY},L=(k==null?void 0:k.contains(j))||(w==null?void 0:w.contains(j)),S=!hV(P,f);L?C():S&&(C(),v())};return document.addEventListener("pointermove",D),()=>document.removeEventListener("pointermove",D)}},[k,w,f,v,C]),M.createElement(Y4,st({},i,{ref:h}))}),[oV,sV]=Dg(bv,{isInside:!1}),Y4=M.forwardRef((i,n)=>{const{__scopeTooltip:o,children:c,"aria-label":d,onEscapeKeyDown:h,onPointerDownOutside:f,...m}=i,k=zu(yu,o),v=Tg(o),{onClose:w}=k;return M.useEffect(()=>(document.addEventListener(Hb,w),()=>document.removeEventListener(Hb,w)),[w]),M.useEffect(()=>{if(k.trigger){const y=C=>{const E=C.target;E!=null&&E.contains(k.trigger)&&w()};return window.addEventListener("scroll",y,{capture:!0}),()=>window.removeEventListener("scroll",y,{capture:!0})}},[k.trigger,w]),M.createElement(C4,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:h,onPointerDownOutside:f,onFocusOutside:y=>y.preventDefault(),onDismiss:w},M.createElement(FF,st({"data-state":k.stateAttribute},v,m,{ref:n,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),M.createElement(A4,null,c),M.createElement(oV,{scope:o,isInside:!0},M.createElement(qF,{id:k.contentId,role:"tooltip"},d||c))))}),aV="TooltipArrow",cV=M.forwardRef((i,n)=>{const{__scopeTooltip:o,...c}=i,d=Tg(o);return sV(aV,o).isInside?null:M.createElement(VF,st({},d,c,{ref:n}))});function lV(i,n){const o=Math.abs(n.top-i.y),c=Math.abs(n.bottom-i.y),d=Math.abs(n.right-i.x),h=Math.abs(n.left-i.x);switch(Math.min(o,c,d,h)){case h:return"left";case d:return"right";case o:return"top";case c:return"bottom";default:throw new Error("unreachable")}}function dV(i,n,o=5){const c=[];switch(n){case"top":c.push({x:i.x-o,y:i.y+o},{x:i.x+o,y:i.y+o});break;case"bottom":c.push({x:i.x-o,y:i.y-o},{x:i.x+o,y:i.y-o});break;case"left":c.push({x:i.x+o,y:i.y-o},{x:i.x+o,y:i.y+o});break;case"right":c.push({x:i.x-o,y:i.y-o},{x:i.x-o,y:i.y+o});break}return c}function uV(i){const{top:n,right:o,bottom:c,left:d}=i;return[{x:d,y:n},{x:o,y:n},{x:o,y:c},{x:d,y:c}]}function hV(i,n){const{x:o,y:c}=i;let d=!1;for(let h=0,f=n.length-1;h<n.length;f=h++){const m=n[h].x,k=n[h].y,v=n[f].x,w=n[f].y;k>c!=w>c&&o<(v-m)*(c-k)/(w-k)+m&&(d=!d)}return d}function fV(i){const n=i.slice();return n.sort((o,c)=>o.x<c.x?-1:o.x>c.x?1:o.y<c.y?-1:o.y>c.y?1:0),pV(n)}function pV(i){if(i.length<=1)return i.slice();const n=[];for(let c=0;c<i.length;c++){const d=i[c];for(;n.length>=2;){const h=n[n.length-1],f=n[n.length-2];if((h.x-f.x)*(d.y-f.y)>=(h.y-f.y)*(d.x-f.x))n.pop();else break}n.push(d)}n.pop();const o=[];for(let c=i.length-1;c>=0;c--){const d=i[c];for(;o.length>=2;){const h=o[o.length-1],f=o[o.length-2];if((h.x-f.x)*(d.y-f.y)>=(h.y-f.y)*(d.x-f.x))o.pop();else break}o.push(d)}return o.pop(),n.length===1&&o.length===1&&n[0].x===o[0].x&&n[0].y===o[0].y?n:n.concat(o)}const gV=ZF,mV=JF,kV=XF,bV=nV,wV=iV,vV=cV;function K4(i,n){if(i==null)return{};var o={},c=Object.keys(i),d,h;for(h=0;h<c.length;h++)d=c[h],!(n.indexOf(d)>=0)&&(o[d]=i[d]);return o}var _V=["color"],yV=M.forwardRef(function(i,n){var o=i.color,c=o===void 0?"currentColor":o,d=K4(i,_V);return M.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d,{ref:n}),M.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))}),AV=["color"],CV=M.forwardRef(function(i,n){var o=i.color,c=o===void 0?"currentColor":o,d=K4(i,AV);return M.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d,{ref:n}),M.createElement("path",{d:"M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",fill:c,fillRule:"evenodd",clipRule:"evenodd"}))});const Z4=({tags:i,subtracted:n})=>{const o=()=>(i=i.slice(n),i.map(c=>F.jsxs("p",{className:"post-category",children:["#",c]},c)));return F.jsx("div",{children:F.jsx(gV,{children:F.jsxs(mV,{children:[F.jsx(kV,{asChild:!0,children:F.jsx("button",{className:"IconButton tags-plus-button",children:F.jsx(CV,{})})}),F.jsx(bV,{children:F.jsxs(wV,{className:"TooltipContent",sideOffset:5,children:[o(),F.jsx(vV,{className:"TooltipArrow"})]})})]})})})};function Q4({id:i,title:n,created_at:o,vote:c,tags:d,username:h,img_url:f,content:m,currentUserLiked:k}){let v="back-pastel-green pastel-green";d=="review"?v="back-pastel-purple pastel-purple":d=="recommend"&&(v="back-pastel-red pastel-red");const w=()=>d.slice(0,1).map(D=>F.jsxs("p",{className:`post-category ${v}`,children:["#",D]},D+i)),y=m.length>=300?m.replace(/<p>&nbsp;<\/p>/g,"").substring(0,300)+"...":m.replace(/<p>&nbsp;<\/p>/g,""),C=_4(y);return F.jsxs(Ni,{className:"post-preview",to:`/Book-Chronicles/post/${i}`,children:[F.jsxs("div",{className:"post-preview-top",children:[F.jsxs("p",{className:"time-ago",children:["Posted ",o?Zp(o):" "]}),d.length>1?F.jsxs("div",{className:"preview-tags-container",children:[w(),F.jsx("small",{children:F.jsx(Z4,{tags:d,subtracted:1})})]}):F.jsx("div",{className:"preview-tags-container",children:w()})]}),F.jsxs("div",{className:"post-preview-middle",children:[F.jsx("h2",{className:"pastel-black",children:n}),F.jsxs("div",{className:"post-preview-img-content",children:[f?F.jsx("img",{className:"post-preview-image",src:f}):"",F.jsxs("div",{className:"post-preview-content",children:[C," "]})]})]}),F.jsxs("div",{className:"post-preview-bot",children:[F.jsxs("div",{className:"vote-image",children:[F.jsx("img",{src:v4,className:"upvotes pastel-red"}),F.jsx("span",{className:"",children:F.jsxs("b",{className:k?"pastel-orange":"",children:[c," "]})})]}),F.jsx("p",{children:h?"~ "+h:""})]})]})}let xV={data:""},EV=i=>typeof window=="object"?((i?i.querySelector("#_goober"):window._goober)||Object.assign((i||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:i||xV,SV=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,DV=/\/\*[^]*?\*\/|  +/g,c5=/\n+/g,ms=(i,n)=>{let o="",c="",d="";for(let h in i){let f=i[h];h[0]=="@"?h[1]=="i"?o=h+" "+f+";":c+=h[1]=="f"?ms(f,h):h+"{"+ms(f,h[1]=="k"?"":n)+"}":typeof f=="object"?c+=ms(f,n?n.replace(/([^,])+/g,m=>h.replace(/(^:.*)|([^,])+/g,k=>/&/.test(k)?k.replace(/&/g,m):m?m+" "+k:k)):h):f!=null&&(h=/^--/.test(h)?h:h.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=ms.p?ms.p(h,f):h+":"+f+";")}return o+(n&&d?n+"{"+d+"}":d)+c},wo={},J4=i=>{if(typeof i=="object"){let n="";for(let o in i)n+=o+J4(i[o]);return n}return i},TV=(i,n,o,c,d)=>{let h=J4(i),f=wo[h]||(wo[h]=(k=>{let v=0,w=11;for(;v<k.length;)w=101*w+k.charCodeAt(v++)>>>0;return"go"+w})(h));if(!wo[f]){let k=h!==i?i:(v=>{let w,y,C=[{}];for(;w=SV.exec(v.replace(DV,""));)w[4]?C.shift():w[3]?(y=w[3].replace(c5," ").trim(),C.unshift(C[0][y]=C[0][y]||{})):C[0][w[1]]=w[2].replace(c5," ").trim();return C[0]})(i);wo[f]=ms(d?{["@keyframes "+f]:k}:k,o?"":"."+f)}let m=o&&wo.g?wo.g:null;return o&&(wo.g=wo[f]),((k,v,w,y)=>{y?v.data=v.data.replace(y,k):v.data.indexOf(k)===-1&&(v.data=w?k+v.data:v.data+k)})(wo[f],n,c,m),f},IV=(i,n,o)=>i.reduce((c,d,h)=>{let f=n[h];if(f&&f.call){let m=f(o),k=m&&m.props&&m.props.className||/^go/.test(m)&&m;f=k?"."+k:m&&typeof m=="object"?m.props?"":ms(m,""):m===!1?"":m}return c+d+(f??"")},"");function Ig(i){let n=this||{},o=i.call?i(n.p):i;return TV(o.unshift?o.raw?IV(o,[].slice.call(arguments,1),n.p):o.reduce((c,d)=>Object.assign(c,d&&d.call?d(n.p):d),{}):o,EV(n.target),n.g,n.o,n.k)}let X4,Wb,qb;Ig.bind({g:1});let zo=Ig.bind({k:1});function MV(i,n,o,c){ms.p=n,X4=i,Wb=o,qb=c}function Fs(i,n){let o=this||{};return function(){let c=arguments;function d(h,f){let m=Object.assign({},h),k=m.className||d.className;o.p=Object.assign({theme:Wb&&Wb()},m),o.o=/ *go\d+/.test(k),m.className=Ig.apply(o,c)+(k?" "+k:""),n&&(m.ref=f);let v=i;return i[0]&&(v=m.as||i,delete m.as),qb&&v[0]&&qb(m),X4(v,m)}return n?n(d):d}}var NV=i=>typeof i=="function",tg=(i,n)=>NV(i)?i(n):i,OV=(()=>{let i=0;return()=>(++i).toString()})(),eI=(()=>{let i;return()=>{if(i===void 0&&typeof window<"u"){let n=matchMedia("(prefers-reduced-motion: reduce)");i=!n||n.matches}return i}})(),PV=20,fp=new Map,BV=1e3,l5=i=>{if(fp.has(i))return;let n=setTimeout(()=>{fp.delete(i),Oa({type:4,toastId:i})},BV);fp.set(i,n)},LV=i=>{let n=fp.get(i);n&&clearTimeout(n)},Gb=(i,n)=>{switch(n.type){case 0:return{...i,toasts:[n.toast,...i.toasts].slice(0,PV)};case 1:return n.toast.id&&LV(n.toast.id),{...i,toasts:i.toasts.map(h=>h.id===n.toast.id?{...h,...n.toast}:h)};case 2:let{toast:o}=n;return i.toasts.find(h=>h.id===o.id)?Gb(i,{type:1,toast:o}):Gb(i,{type:0,toast:o});case 3:let{toastId:c}=n;return c?l5(c):i.toasts.forEach(h=>{l5(h.id)}),{...i,toasts:i.toasts.map(h=>h.id===c||c===void 0?{...h,visible:!1}:h)};case 4:return n.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(h=>h.id!==n.toastId)};case 5:return{...i,pausedAt:n.time};case 6:let d=n.time-(i.pausedAt||0);return{...i,pausedAt:void 0,toasts:i.toasts.map(h=>({...h,pauseDuration:h.pauseDuration+d}))}}},pp=[],gp={toasts:[],pausedAt:void 0},Oa=i=>{gp=Gb(gp,i),pp.forEach(n=>{n(gp)})},zV={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jV=(i={})=>{let[n,o]=M.useState(gp);M.useEffect(()=>(pp.push(o),()=>{let d=pp.indexOf(o);d>-1&&pp.splice(d,1)}),[n]);let c=n.toasts.map(d=>{var h,f;return{...i,...i[d.type],...d,duration:d.duration||((h=i[d.type])==null?void 0:h.duration)||(i==null?void 0:i.duration)||zV[d.type],style:{...i.style,...(f=i[d.type])==null?void 0:f.style,...d.style}}});return{...n,toasts:c}},RV=(i,n="blank",o)=>({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:i,pauseDuration:0,...o,id:(o==null?void 0:o.id)||OV()}),ju=i=>(n,o)=>{let c=RV(n,i,o);return Oa({type:2,toast:c}),c.id},$n=(i,n)=>ju("blank")(i,n);$n.error=ju("error");$n.success=ju("success");$n.loading=ju("loading");$n.custom=ju("custom");$n.dismiss=i=>{Oa({type:3,toastId:i})};$n.remove=i=>Oa({type:4,toastId:i});$n.promise=(i,n,o)=>{let c=$n.loading(n.loading,{...o,...o==null?void 0:o.loading});return i.then(d=>($n.success(tg(n.success,d),{id:c,...o,...o==null?void 0:o.success}),d)).catch(d=>{$n.error(tg(n.error,d),{id:c,...o,...o==null?void 0:o.error})}),i};var FV=(i,n)=>{Oa({type:1,toast:{id:i,height:n}})},VV=()=>{Oa({type:5,time:Date.now()})},$V=i=>{let{toasts:n,pausedAt:o}=jV(i);M.useEffect(()=>{if(o)return;let h=Date.now(),f=n.map(m=>{if(m.duration===1/0)return;let k=(m.duration||0)+m.pauseDuration-(h-m.createdAt);if(k<0){m.visible&&$n.dismiss(m.id);return}return setTimeout(()=>$n.dismiss(m.id),k)});return()=>{f.forEach(m=>m&&clearTimeout(m))}},[n,o]);let c=M.useCallback(()=>{o&&Oa({type:6,time:Date.now()})},[o]),d=M.useCallback((h,f)=>{let{reverseOrder:m=!1,gutter:k=8,defaultPosition:v}=f||{},w=n.filter(E=>(E.position||v)===(h.position||v)&&E.height),y=w.findIndex(E=>E.id===h.id),C=w.filter((E,D)=>D<y&&E.visible).length;return w.filter(E=>E.visible).slice(...m?[C+1]:[0,C]).reduce((E,D)=>E+(D.height||0)+k,0)},[n]);return{toasts:n,handlers:{updateHeight:FV,startPause:VV,endPause:c,calculateOffset:d}}},UV=zo`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,HV=zo`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,WV=zo`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,qV=Fs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${UV} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${HV} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${i=>i.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${WV} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,GV=zo`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,YV=Fs("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${i=>i.secondary||"#e0e0e0"};
  border-right-color: ${i=>i.primary||"#616161"};
  animation: ${GV} 1s linear infinite;
`,KV=zo`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ZV=zo`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,QV=Fs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${KV} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ZV} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${i=>i.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,JV=Fs("div")`
  position: absolute;
`,XV=Fs("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,e$=zo`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,t$=Fs("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${e$} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,n$=({toast:i})=>{let{icon:n,type:o,iconTheme:c}=i;return n!==void 0?typeof n=="string"?M.createElement(t$,null,n):n:o==="blank"?null:M.createElement(XV,null,M.createElement(YV,{...c}),o!=="loading"&&M.createElement(JV,null,o==="error"?M.createElement(qV,{...c}):M.createElement(QV,{...c})))},i$=i=>`
0% {transform: translate3d(0,${i*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,r$=i=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i*-150}%,-1px) scale(.6); opacity:0;}
`,o$="0%{opacity:0;} 100%{opacity:1;}",s$="0%{opacity:1;} 100%{opacity:0;}",a$=Fs("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,c$=Fs("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,l$=(i,n)=>{let o=i.includes("top")?1:-1,[c,d]=eI()?[o$,s$]:[i$(o),r$(o)];return{animation:n?`${zo(c)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${zo(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},d$=M.memo(({toast:i,position:n,style:o,children:c})=>{let d=i.height?l$(i.position||n||"top-center",i.visible):{opacity:0},h=M.createElement(n$,{toast:i}),f=M.createElement(c$,{...i.ariaProps},tg(i.message,i));return M.createElement(a$,{className:i.className,style:{...d,...o,...i.style}},typeof c=="function"?c({icon:h,message:f}):M.createElement(M.Fragment,null,h,f))});MV(M.createElement);var u$=({id:i,className:n,style:o,onHeightUpdate:c,children:d})=>{let h=M.useCallback(f=>{if(f){let m=()=>{let k=f.getBoundingClientRect().height;c(i,k)};m(),new MutationObserver(m).observe(f,{subtree:!0,childList:!0,characterData:!0})}},[i,c]);return M.createElement("div",{ref:h,className:n,style:o},d)},h$=(i,n)=>{let o=i.includes("top"),c=o?{top:0}:{bottom:0},d=i.includes("center")?{justifyContent:"center"}:i.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:eI()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(o?1:-1)}px)`,...c,...d}},f$=Ig`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Uf=16,p$=({reverseOrder:i,position:n="top-center",toastOptions:o,gutter:c,children:d,containerStyle:h,containerClassName:f})=>{let{toasts:m,handlers:k}=$V(o);return M.createElement("div",{style:{position:"fixed",zIndex:9999,top:Uf,left:Uf,right:Uf,bottom:Uf,pointerEvents:"none",...h},className:f,onMouseEnter:k.startPause,onMouseLeave:k.endPause},m.map(v=>{let w=v.position||n,y=k.calculateOffset(v,{reverseOrder:i,gutter:c,defaultPosition:n}),C=h$(w,y);return M.createElement(u$,{id:v.id,key:v.id,onHeightUpdate:k.updateHeight,className:v.visible?f$:"",style:C},v.type==="custom"?tg(v.message,v):d?d(v):M.createElement(d$,{toast:v,position:w}))}))},Jn=$n;function g$({supabase:i,session:n}){const[o,c]=M.useState([]),[d,h]=M.useState({created_at:!1,vote:!0}),[f,m]=M.useState(""),v=(n?n.user:{user_metadata:{}}).id,w=async()=>{const{data:D,error:I}=await i.from("posts").select().order("created_at",{ascending:!1});c(D)};M.useEffect(()=>{const D=w();Jn.promise(D,{loading:"Loading your posts...",success:"Bookshelf Loaded",error:"Error when fetching"})},[]);const y=D=>{m(D.target.value)},C=()=>NR(f,o,["title","tags","username"]).map(I=>{const j=I.user_likes[v];return F.jsx(Q4,{id:I.id,title:I.title,created_at:I.created_at,vote:I.vote,tags:I.tags,username:I.username,img_url:I.img,content:I.content,currentUserLiked:j},I.id)}),E=D=>{const I=JSON.parse(JSON.stringify(o));D==="vote"?(d.vote?I.sort((j,P)=>P.vote-j.vote):I.sort((j,P)=>j.vote-P.vote),h(j=>({...j,vote:!d.vote}))):(d.created_at?I.sort((j,P)=>new Date(P.created_at)-new Date(j.created_at)):I.sort((j,P)=>new Date(j.created_at)-new Date(P.created_at)),h(j=>({...j,created_at:!d.created_at}))),c(I)};return F.jsxs(F.Fragment,{children:[F.jsx("div",{className:"home-title-outside-container",children:F.jsxs("div",{className:"home-title-container",children:[F.jsxs("h1",{className:"home-title",children:[F.jsx("span",{className:"pastel-black",children:"Home"})," ",F.jsx("span",{className:"accent",children:"Feed"})]}),F.jsx("h2",{className:"home-subtitle",children:"Reviews and Recommendations"})]})}),F.jsx("div",{className:"input-outside-container",children:F.jsxs("div",{className:"input-container",children:[F.jsx("input",{className:"search-input",onChange:y,placeholder:"Search",type:"text"}),F.jsxs("div",{className:"sort-posts-container",children:[F.jsx("span",{children:"Order by: "}),F.jsx("button",{className:"darkAccent btn sort-button",onClick:()=>{E("created_at")},children:"Newest"}),F.jsx("button",{className:"btn sort-button",onClick:()=>{E("vote")},children:"Most Popular"})]})]})}),F.jsx("div",{className:"post-preview-container",children:C()})]})}function m$(){const i=Fo();return M.useEffect(()=>{i("/")},[]),F.jsx("div",{children:"NotFound"})}var ng={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ng.exports;(function(i,n){(function(o,c){i.exports=c(M)})(self,o=>(()=>{var c={703:(m,k,v)=>{var w=v(414);function y(){}function C(){}C.resetWarningCache=y,m.exports=function(){function E(j,P,L,S,$,H){if(H!==w){var J=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw J.name="Invariant Violation",J}}function D(){return E}E.isRequired=E;var I={array:E,bigint:E,bool:E,func:E,number:E,object:E,string:E,symbol:E,any:E,arrayOf:D,element:E,elementType:E,instanceOf:D,node:E,objectOf:D,oneOf:D,oneOfType:D,shape:D,exact:D,checkPropTypes:C,resetWarningCache:y};return I.PropTypes=I,I}},697:(m,k,v)=>{m.exports=v(703)()},414:m=>{m.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:m=>{m.exports=o}},d={};function h(m){var k=d[m];if(k!==void 0)return k.exports;var v=d[m]={exports:{}};return c[m](v,v.exports,h),v.exports}h.n=m=>{var k=m&&m.__esModule?()=>m.default:()=>m;return h.d(k,{a:k}),k},h.d=(m,k)=>{for(var v in k)h.o(k,v)&&!h.o(m,v)&&Object.defineProperty(m,v,{enumerable:!0,get:k[v]})},h.o=(m,k)=>Object.prototype.hasOwnProperty.call(m,k),h.r=m=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})};var f={};return(()=>{h.r(f),h.d(f,{CKEditor:()=>ho,CKEditorContext:()=>Ka,useMultiRootEditor:()=>em});var m=h(787),k=h.n(m),v=h(697),w=h.n(v);const y=new Array(256).fill("").map((N,O)=>("0"+O.toString(16)).slice(-2));class C{constructor(O){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof O.crashNumberLimit=="number"?O.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof O.minimumNonErrorTimePeriod=="number"?O.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=V=>{const K="error"in V?V.error:V.reason;K instanceof Error&&this._handleError(K,V)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(O,V){this._listeners[O]||(this._listeners[O]=[]),this._listeners[O].push(V)}off(O,V){this._listeners[O]=this._listeners[O].filter(K=>K!==V)}_fire(O,...V){const K=this._listeners[O]||[];for(const ae of K)ae.apply(this,[null,...V])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(O,V){if(this._shouldReactToError(O)){this.crashes.push({message:O.message,stack:O.stack,filename:V instanceof ErrorEvent?V.filename:void 0,lineno:V instanceof ErrorEvent?V.lineno:void 0,colno:V instanceof ErrorEvent?V.colno:void 0,date:this._now()});const K=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:O,causesRestart:K}),K?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(O){return O.is&&O.is("CKEditorError")&&O.context!==void 0&&O.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(O)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function E(N,O=new Set){const V=[N],K=new Set;let ae=0;for(;V.length>ae;){const ve=V[ae++];if(!K.has(ve)&&D(ve)&&!O.has(ve))if(K.add(ve),Symbol.iterator in ve)try{for(const he of ve)V.push(he)}catch{}else for(const he in ve)he!=="defaultValue"&&V.push(ve[he])}return K}function D(N){const O=Object.prototype.toString.call(N),V=typeof N;return!(V==="number"||V==="boolean"||V==="string"||V==="symbol"||V==="function"||O==="[object Date]"||O==="[object RegExp]"||O==="[object Module]"||N==null||N._watchdogExcluded||N instanceof EventTarget||N instanceof Event)}function I(N,O,V=new Set){if(N===O&&typeof(K=N)=="object"&&K!==null)return!0;var K;const ae=E(N,V),ve=E(O,V);for(const he of ae)if(ve.has(he))return!0;return!1}const j=function(N){var O=typeof N;return N!=null&&(O=="object"||O=="function")},P=typeof ma=="object"&&ma&&ma.Object===Object&&ma;var L=typeof self=="object"&&self&&self.Object===Object&&self;const S=P||L||Function("return this")(),$=function(){return S.Date.now()};var H=/\s/;const J=function(N){for(var O=N.length;O--&&H.test(N.charAt(O)););return O};var Z=/^\s+/;const ee=function(N){return N&&N.slice(0,J(N)+1).replace(Z,"")},de=S.Symbol;var se=Object.prototype,Y=se.hasOwnProperty,Q=se.toString,q=de?de.toStringTag:void 0;const U=function(N){var O=Y.call(N,q),V=N[q];try{N[q]=void 0;var K=!0}catch{}var ae=Q.call(N);return K&&(O?N[q]=V:delete N[q]),ae};var W=Object.prototype.toString;const X=function(N){return W.call(N)};var oe=de?de.toStringTag:void 0;const re=function(N){return N==null?N===void 0?"[object Undefined]":"[object Null]":oe&&oe in Object(N)?U(N):X(N)},ie=function(N){return N!=null&&typeof N=="object"},pe=function(N){return typeof N=="symbol"||ie(N)&&re(N)=="[object Symbol]"};var ge=/^[-+]0x[0-9a-f]+$/i,Se=/^0b[01]+$/i,tt=/^0o[0-7]+$/i,wt=parseInt;const nt=function(N){if(typeof N=="number")return N;if(pe(N))return NaN;if(j(N)){var O=typeof N.valueOf=="function"?N.valueOf():N;N=j(O)?O+"":O}if(typeof N!="string")return N===0?N:+N;N=ee(N);var V=Se.test(N);return V||tt.test(N)?wt(N.slice(2),V?2:8):ge.test(N)?NaN:+N};var Ee=Math.max,on=Math.min;const Me=function(N,O,V){var K,ae,ve,he,we,ze,Ne=0,Wn=!1,En=!1,cn=!0;if(typeof N!="function")throw new TypeError("Expected a function");function fn(pn){var Gn=K,Ae=ae;return K=ae=void 0,Ne=pn,he=N.apply(Ae,Gn)}function qi(pn){var Gn=pn-ze;return ze===void 0||Gn>=O||Gn<0||En&&pn-Ne>=ve}function Ci(){var pn=$();if(qi(pn))return ft(pn);we=setTimeout(Ci,function(Gn){var Ae=O-(Gn-ze);return En?on(Ae,ve-(Gn-Ne)):Ae}(pn))}function ft(pn){return we=void 0,cn&&K?fn(pn):(K=ae=void 0,he)}function qn(){var pn=$(),Gn=qi(pn);if(K=arguments,ae=this,ze=pn,Gn){if(we===void 0)return function(Ae){return Ne=Ae,we=setTimeout(Ci,O),Wn?fn(Ae):he}(ze);if(En)return clearTimeout(we),we=setTimeout(Ci,O),fn(ze)}return we===void 0&&(we=setTimeout(Ci,O)),he}return O=nt(O)||0,j(V)&&(Wn=!!V.leading,ve=(En="maxWait"in V)?Ee(nt(V.maxWait)||0,O):ve,cn="trailing"in V?!!V.trailing:cn),qn.cancel=function(){we!==void 0&&clearTimeout(we),Ne=0,K=ze=ae=we=void 0},qn.flush=function(){return we===void 0?he:ft($())},qn},It=function(N,O,V){var K=!0,ae=!0;if(typeof N!="function")throw new TypeError("Expected a function");return j(V)&&(K="leading"in V?!!V.leading:K,ae="trailing"in V?!!V.trailing:ae),Me(N,O,{leading:K,maxWait:O,trailing:ae})},ni=function(N,O){return function(V){return N(O(V))}},wi=ni(Object.getPrototypeOf,Object);var dr=Function.prototype,Ui=Object.prototype,vi=dr.toString,lt=Ui.hasOwnProperty,Mt=vi.call(Object);const Jt=function(N){if(!ie(N)||re(N)!="[object Object]")return!1;var O=wi(N);if(O===null)return!0;var V=lt.call(O,"constructor")&&O.constructor;return typeof V=="function"&&V instanceof V&&vi.call(V)==Mt},ur=function(N){return ie(N)&&N.nodeType===1&&!Jt(N)},jt=function(){this.__data__=[],this.size=0},Nt=function(N,O){return N===O||N!=N&&O!=O},Re=function(N,O){for(var V=N.length;V--;)if(Nt(N[V][0],O))return V;return-1};var io=Array.prototype.splice;const ro=function(N){var O=this.__data__,V=Re(O,N);return!(V<0)&&(V==O.length-1?O.pop():io.call(O,V,1),--this.size,!0)},_i=function(N){var O=this.__data__,V=Re(O,N);return V<0?void 0:O[V][1]},$o=function(N){return Re(this.__data__,N)>-1},Uo=function(N,O){var V=this.__data__,K=Re(V,N);return K<0?(++this.size,V.push([N,O])):V[K][1]=O,this};function ii(N){var O=-1,V=N==null?0:N.length;for(this.clear();++O<V;){var K=N[O];this.set(K[0],K[1])}}ii.prototype.clear=jt,ii.prototype.delete=ro,ii.prototype.get=_i,ii.prototype.has=$o,ii.prototype.set=Uo;const On=ii,An=function(){this.__data__=new On,this.size=0},yt=function(N){var O=this.__data__,V=O.delete(N);return this.size=O.size,V},Ht=function(N){return this.__data__.get(N)},ri=function(N){return this.__data__.has(N)},Hi=function(N){if(!j(N))return!1;var O=re(N);return O=="[object Function]"||O=="[object GeneratorFunction]"||O=="[object AsyncFunction]"||O=="[object Proxy]"},Wi=S["__core-js_shared__"];var sn=function(){var N=/[^.]+$/.exec(Wi&&Wi.keys&&Wi.keys.IE_PROTO||"");return N?"Symbol(src)_1."+N:""}();const Cn=function(N){return!!sn&&sn in N};var oo=Function.prototype.toString;const xn=function(N){if(N!=null){try{return oo.call(N)}catch{}try{return N+""}catch{}}return""};var hr=/^\[object .+?Constructor\]$/,Or=Function.prototype,Wt=Object.prototype,qt=Or.toString,Gt=Wt.hasOwnProperty,Ce=RegExp("^"+qt.call(Gt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const qe=function(N){return!(!j(N)||Cn(N))&&(Hi(N)?Ce:hr).test(xn(N))},an=function(N,O){return N==null?void 0:N[O]},Pn=function(N,O){var V=an(N,O);return qe(V)?V:void 0},oi=Pn(S,"Map"),ke=Pn(Object,"create"),Te=function(){this.__data__=ke?ke(null):{},this.size=0},De=function(N){var O=this.has(N)&&delete this.__data__[N];return this.size-=O?1:0,O};var St=Object.prototype.hasOwnProperty;const Dt=function(N){var O=this.__data__;if(ke){var V=O[N];return V==="__lodash_hash_undefined__"?void 0:V}return St.call(O,N)?O[N]:void 0};var si=Object.prototype.hasOwnProperty;const yi=function(N){var O=this.__data__;return ke?O[N]!==void 0:si.call(O,N)},Ot=function(N,O){var V=this.__data__;return this.size+=this.has(N)?0:1,V[N]=ke&&O===void 0?"__lodash_hash_undefined__":O,this};function Pt(N){var O=-1,V=N==null?0:N.length;for(this.clear();++O<V;){var K=N[O];this.set(K[0],K[1])}}Pt.prototype.clear=Te,Pt.prototype.delete=De,Pt.prototype.get=Dt,Pt.prototype.has=yi,Pt.prototype.set=Ot;const at=Pt,so=function(){this.size=0,this.__data__={hash:new at,map:new(oi||On),string:new at}},vl=function(N){var O=typeof N;return O=="string"||O=="number"||O=="symbol"||O=="boolean"?N!=="__proto__":N===null},Hn=function(N,O){var V=N.__data__;return vl(O)?V[typeof O=="string"?"string":"hash"]:V.map},Pa=function(N){var O=Hn(this,N).delete(N);return this.size-=O?1:0,O},Ba=function(N){return Hn(this,N).get(N)},La=function(N){return Hn(this,N).has(N)},ct=function(N,O){var V=Hn(this,N),K=V.size;return V.set(N,O),this.size+=V.size==K?0:1,this};function hn(N){var O=-1,V=N==null?0:N.length;for(this.clear();++O<V;){var K=N[O];this.set(K[0],K[1])}}hn.prototype.clear=so,hn.prototype.delete=Pa,hn.prototype.get=Ba,hn.prototype.has=La,hn.prototype.set=ct;const Vs=hn,ao=function(N,O){var V=this.__data__;if(V instanceof On){var K=V.__data__;if(!oi||K.length<199)return K.push([N,O]),this.size=++V.size,this;V=this.__data__=new Vs(K)}return V.set(N,O),this.size=V.size,this};function Pr(N){var O=this.__data__=new On(N);this.size=O.size}Pr.prototype.clear=An,Pr.prototype.delete=yt,Pr.prototype.get=Ht,Pr.prototype.has=ri,Pr.prototype.set=ao;const Ai=Pr,$s=function(N,O){for(var V=-1,K=N==null?0:N.length;++V<K&&O(N[V],V,N)!==!1;);return N},Ho=function(){try{var N=Pn(Object,"defineProperty");return N({},"",{}),N}catch{}}(),Vu=function(N,O,V){O=="__proto__"&&Ho?Ho(N,O,{configurable:!0,enumerable:!0,value:V,writable:!0}):N[O]=V};var Pg=Object.prototype.hasOwnProperty;const $u=function(N,O,V){var K=N[O];Pg.call(N,O)&&Nt(K,V)&&(V!==void 0||O in N)||Vu(N,O,V)},za=function(N,O,V,K){var ae=!V;V||(V={});for(var ve=-1,he=O.length;++ve<he;){var we=O[ve],ze=K?K(V[we],N[we],we,V,N):void 0;ze===void 0&&(ze=N[we]),ae?Vu(V,we,ze):$u(V,we,ze)}return V},Bg=function(N,O){for(var V=-1,K=Array(N);++V<N;)K[V]=O(V);return K},Uu=function(N){return ie(N)&&re(N)=="[object Arguments]"};var Hu=Object.prototype,Wo=Hu.hasOwnProperty,Wu=Hu.propertyIsEnumerable;const Lg=Uu(function(){return arguments}())?Uu:function(N){return ie(N)&&Wo.call(N,"callee")&&!Wu.call(N,"callee")},_l=Array.isArray,ja=function(){return!1};var qu=n&&!n.nodeType&&n,Gu=qu&&!0&&i&&!i.nodeType&&i,Yu=Gu&&Gu.exports===qu?S.Buffer:void 0;const Ku=(Yu?Yu.isBuffer:void 0)||ja;var qo=/^(?:0|[1-9]\d*)$/;const Ra=function(N,O){var V=typeof N;return!!(O=O??9007199254740991)&&(V=="number"||V!="symbol"&&qo.test(N))&&N>-1&&N%1==0&&N<O},Zu=function(N){return typeof N=="number"&&N>-1&&N%1==0&&N<=9007199254740991};var Je={};Je["[object Float32Array]"]=Je["[object Float64Array]"]=Je["[object Int8Array]"]=Je["[object Int16Array]"]=Je["[object Int32Array]"]=Je["[object Uint8Array]"]=Je["[object Uint8ClampedArray]"]=Je["[object Uint16Array]"]=Je["[object Uint32Array]"]=!0,Je["[object Arguments]"]=Je["[object Array]"]=Je["[object ArrayBuffer]"]=Je["[object Boolean]"]=Je["[object DataView]"]=Je["[object Date]"]=Je["[object Error]"]=Je["[object Function]"]=Je["[object Map]"]=Je["[object Number]"]=Je["[object Object]"]=Je["[object RegExp]"]=Je["[object Set]"]=Je["[object String]"]=Je["[object WeakMap]"]=!1;const Us=function(N){return ie(N)&&Zu(N.length)&&!!Je[re(N)]},yl=function(N){return function(O){return N(O)}};var Hs=n&&!n.nodeType&&n,co=Hs&&!0&&i&&!i.nodeType&&i,Al=co&&co.exports===Hs&&P.process;const Br=function(){try{var N=co&&co.require&&co.require("util").types;return N||Al&&Al.binding&&Al.binding("util")}catch{}}();var lo=Br&&Br.isTypedArray;const zg=lo?yl(lo):Us;var Qu=Object.prototype.hasOwnProperty;const Cl=function(N,O){var V=_l(N),K=!V&&Lg(N),ae=!V&&!K&&Ku(N),ve=!V&&!K&&!ae&&zg(N),he=V||K||ae||ve,we=he?Bg(N.length,String):[],ze=we.length;for(var Ne in N)!O&&!Qu.call(N,Ne)||he&&(Ne=="length"||ae&&(Ne=="offset"||Ne=="parent")||ve&&(Ne=="buffer"||Ne=="byteLength"||Ne=="byteOffset")||Ra(Ne,ze))||we.push(Ne);return we};var jg=Object.prototype;const xl=function(N){var O=N&&N.constructor;return N===(typeof O=="function"&&O.prototype||jg)},El=ni(Object.keys,Object);var Rg=Object.prototype.hasOwnProperty;const Ju=function(N){if(!xl(N))return El(N);var O=[];for(var V in Object(N))Rg.call(N,V)&&V!="constructor"&&O.push(V);return O},Sl=function(N){return N!=null&&Zu(N.length)&&!Hi(N)},Fa=function(N){return Sl(N)?Cl(N):Ju(N)},Ws=function(N,O){return N&&za(O,Fa(O),N)},Fg=function(N){var O=[];if(N!=null)for(var V in Object(N))O.push(V);return O};var Dl=Object.prototype.hasOwnProperty;const Xu=function(N){if(!j(N))return Fg(N);var O=xl(N),V=[];for(var K in N)(K!="constructor"||!O&&Dl.call(N,K))&&V.push(K);return V},dt=function(N){return Sl(N)?Cl(N,!0):Xu(N)},Vg=function(N,O){return N&&za(O,dt(O),N)};var Va=n&&!n.nodeType&&n,Tl=Va&&!0&&i&&!i.nodeType&&i,Go=Tl&&Tl.exports===Va?S.Buffer:void 0,$a=Go?Go.allocUnsafe:void 0;const Yo=function(N,O){if(O)return N.slice();var V=N.length,K=$a?$a(V):new N.constructor(V);return N.copy(K),K},eh=function(N,O){var V=-1,K=N.length;for(O||(O=Array(K));++V<K;)O[V]=N[V];return O},Il=function(N,O){for(var V=-1,K=N==null?0:N.length,ae=0,ve=[];++V<K;){var he=N[V];O(he,V,N)&&(ve[ae++]=he)}return ve},th=function(){return[]};var nh=Object.prototype.propertyIsEnumerable,ih=Object.getOwnPropertySymbols;const qs=ih?function(N){return N==null?[]:(N=Object(N),Il(ih(N),function(O){return nh.call(N,O)}))}:th,$g=function(N,O){return za(N,qs(N),O)},rh=function(N,O){for(var V=-1,K=O.length,ae=N.length;++V<K;)N[ae+V]=O[V];return N},oh=Object.getOwnPropertySymbols?function(N){for(var O=[];N;)rh(O,qs(N)),N=wi(N);return O}:th,Ua=function(N,O){return za(N,oh(N),O)},Ha=function(N,O,V){var K=O(N);return _l(N)?K:rh(K,V(N))},Ug=function(N){return Ha(N,Fa,qs)},Hg=function(N){return Ha(N,dt,oh)},Ml=Pn(S,"DataView"),Nl=Pn(S,"Promise"),Lr=Pn(S,"Set"),Ol=Pn(S,"WeakMap");var Pl="[object Map]",Bl="[object Promise]",Ll="[object Set]",zl="[object WeakMap]",jl="[object DataView]",sh=xn(Ml),Wg=xn(oi),ah=xn(Nl),qg=xn(Lr),ch=xn(Ol),fr=re;(Ml&&fr(new Ml(new ArrayBuffer(1)))!=jl||oi&&fr(new oi)!=Pl||Nl&&fr(Nl.resolve())!=Bl||Lr&&fr(new Lr)!=Ll||Ol&&fr(new Ol)!=zl)&&(fr=function(N){var O=re(N),V=O=="[object Object]"?N.constructor:void 0,K=V?xn(V):"";if(K)switch(K){case sh:return jl;case Wg:return Pl;case ah:return Bl;case qg:return Ll;case ch:return zl}return O});const Rl=fr;var lh=Object.prototype.hasOwnProperty;const dh=function(N){var O=N.length,V=new N.constructor(O);return O&&typeof N[0]=="string"&&lh.call(N,"index")&&(V.index=N.index,V.input=N.input),V},uh=S.Uint8Array,Wa=function(N){var O=new N.constructor(N.byteLength);return new uh(O).set(new uh(N)),O},Fl=function(N,O){var V=O?Wa(N.buffer):N.buffer;return new N.constructor(V,N.byteOffset,N.byteLength)};var Gg=/\w*$/;const Vl=function(N){var O=new N.constructor(N.source,Gg.exec(N));return O.lastIndex=N.lastIndex,O};var qa=de?de.prototype:void 0,Ga=qa?qa.valueOf:void 0;const $l=function(N){return Ga?Object(Ga.call(N)):{}},hh=function(N,O){var V=O?Wa(N.buffer):N.buffer;return new N.constructor(V,N.byteOffset,N.length)},fh=function(N,O,V){var K=N.constructor;switch(O){case"[object ArrayBuffer]":return Wa(N);case"[object Boolean]":case"[object Date]":return new K(+N);case"[object DataView]":return Fl(N,V);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return hh(N,V);case"[object Map]":case"[object Set]":return new K;case"[object Number]":case"[object String]":return new K(N);case"[object RegExp]":return Vl(N);case"[object Symbol]":return $l(N)}};var Ul=Object.create;const ph=function(){function N(){}return function(O){if(!j(O))return{};if(Ul)return Ul(O);N.prototype=O;var V=new N;return N.prototype=void 0,V}}(),gh=function(N){return typeof N.constructor!="function"||xl(N)?{}:ph(wi(N))},Yg=function(N){return ie(N)&&Rl(N)=="[object Map]"};var mh=Br&&Br.isMap;const Kg=mh?yl(mh):Yg,Zg=function(N){return ie(N)&&Rl(N)=="[object Set]"};var kh=Br&&Br.isSet;const uo=kh?yl(kh):Zg;var Ko="[object Arguments]",bh="[object Function]",wh="[object Object]",it={};it[Ko]=it["[object Array]"]=it["[object ArrayBuffer]"]=it["[object DataView]"]=it["[object Boolean]"]=it["[object Date]"]=it["[object Float32Array]"]=it["[object Float64Array]"]=it["[object Int8Array]"]=it["[object Int16Array]"]=it["[object Int32Array]"]=it["[object Map]"]=it["[object Number]"]=it[wh]=it["[object RegExp]"]=it["[object Set]"]=it["[object String]"]=it["[object Symbol]"]=it["[object Uint8Array]"]=it["[object Uint8ClampedArray]"]=it["[object Uint16Array]"]=it["[object Uint32Array]"]=!0,it["[object Error]"]=it[bh]=it["[object WeakMap]"]=!1;const Hl=function N(O,V,K,ae,ve,he){var we,ze=1&V,Ne=2&V,Wn=4&V;if(K&&(we=ve?K(O,ae,ve,he):K(O)),we!==void 0)return we;if(!j(O))return O;var En=_l(O);if(En){if(we=dh(O),!ze)return eh(O,we)}else{var cn=Rl(O),fn=cn==bh||cn=="[object GeneratorFunction]";if(Ku(O))return Yo(O,ze);if(cn==wh||cn==Ko||fn&&!ve){if(we=Ne||fn?{}:gh(O),!ze)return Ne?Ua(O,Vg(we,O)):$g(O,Ws(we,O))}else{if(!it[cn])return ve?O:{};we=fh(O,cn,ze)}}he||(he=new Ai);var qi=he.get(O);if(qi)return qi;he.set(O,we),uo(O)?O.forEach(function(ft){we.add(N(ft,V,K,ft,O,he))}):Kg(O)&&O.forEach(function(ft,qn){we.set(qn,N(ft,V,K,qn,O,he))});var Ci=En?void 0:(Wn?Ne?Hg:Ug:Ne?dt:Fa)(O);return $s(Ci||O,function(ft,qn){Ci&&(ft=O[qn=ft]),$u(we,qn,N(ft,V,K,qn,O,he))}),we},Qg=function(N,O){return Hl(N,5,O=typeof O=="function"?O:void 0)};class Wl extends C{constructor(O,V={}){super(V),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=It(this._save.bind(this),typeof V.saveInterval=="number"?V.saveInterval:5e3),O&&(this._creator=(K,ae)=>O.create(K,ae)),this._destructor=K=>K.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(O){this._creator=O}setDestructor(O){this._destructor=O}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(O=>{console.error("An error happened during the editor destroying.",O)}).then(()=>{const O={},V=[],K=this._config.rootsAttributes||{},ae={};for(const[he,we]of Object.entries(this._data.roots))we.isLoaded?(O[he]="",ae[he]=K[he]||{}):V.push(he);const ve={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:V,rootsAttributes:ae,_watchdogInitialData:this._data};return delete ve.initialData,ve.extraPlugins.push(Jg),this._initUsingData?this.create(O,ve,ve.context):ur(this._elementOrData)?this.create(this._elementOrData,ve,ve.context):this.create(this._editables,ve,ve.context)}).then(()=>{this._fire("restart")})}create(O=this._elementOrData,V=this._config,K){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=O,this._initUsingData=typeof O=="string"||Object.keys(O).length>0&&typeof Object.values(O)[0]=="string",this._config=this._cloneEditorConfiguration(V)||{},this._config.context=K,this._creator(O,this._config))).then(ae=>{this._editor=ae,ae.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=ae.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const O=this._editor;return this._editor=null,O.model.document.off("change:data",this._throttledSave),this._destructor(O)})}_save(){const O=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=O}catch(V){console.error(V,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(O){this._excludedProps=O}_getData(){const O=this._editor,V=O.model.document.roots.filter(we=>we.isAttached()&&we.rootName!="$graveyard"),{plugins:K}=O,ae=K.has("CommentsRepository")&&K.get("CommentsRepository"),ve=K.has("TrackChanges")&&K.get("TrackChanges"),he={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};V.forEach(we=>{he.roots[we.rootName]={content:JSON.stringify(Array.from(we.getChildren())),attributes:JSON.stringify(Array.from(we.getAttributes())),isLoaded:we._isLoaded}});for(const we of O.model.markers)we._affectsData&&(he.markers[we.name]={rangeJSON:we.getRange().toJSON(),usingOperation:we._managedUsingOperations,affectsData:we._affectsData});return ae&&(he.commentThreads=JSON.stringify(ae.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),ve&&(he.suggestions=JSON.stringify(ve.getSuggestions({toJSON:!0,skipNotAttached:!0}))),he}_getEditables(){const O={};for(const V of this.editor.model.document.getRootNames()){const K=this.editor.ui.getEditableElement(V);K&&(O[V]=K)}return O}_isErrorComingFromThisItem(O){return I(this._editor,O.context,this._excludedProps)}_cloneEditorConfiguration(O){return Qg(O,(V,K)=>ur(V)||K==="context"?V:void 0)}}class Jg{constructor(O){this.editor=O,this._data=O.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",O=>{O.stop(),this.editor.model.enqueueChange({isUndoable:!1},V=>{this._restoreCollaborationData(),this._restoreEditorData(V)}),this.editor.data.fire("ready")},{priority:999})}_createNode(O,V){if("name"in V){const K=O.createElement(V.name,V.attributes);if(V.children)for(const ae of V.children)K._appendChild(this._createNode(O,ae));return K}return O.createText(V.data,V.attributes)}_restoreEditorData(O){const V=this.editor;Object.entries(this._data.roots).forEach(([K,{content:ae,attributes:ve}])=>{const he=JSON.parse(ae),we=JSON.parse(ve),ze=V.model.document.getRoot(K);for(const[Ne,Wn]of we)O.setAttribute(Ne,Wn,ze);for(const Ne of he){const Wn=this._createNode(O,Ne);O.insert(Wn,ze,"end")}}),Object.entries(this._data.markers).forEach(([K,ae])=>{const{document:ve}=V.model,{rangeJSON:{start:he,end:we},...ze}=ae,Ne=ve.getRoot(he.root),Wn=O.createPositionFromPath(Ne,he.path,he.stickiness),En=O.createPositionFromPath(Ne,we.path,we.stickiness),cn=O.createRange(Wn,En);O.addMarker(K,{range:cn,...ze})})}_restoreCollaborationData(){const O=JSON.parse(this._data.commentThreads),V=JSON.parse(this._data.suggestions);O.forEach(K=>{const ae=this.editor.config.get("collaboration.channelId"),ve=this.editor.plugins.get("CommentsRepository");ve.hasCommentThread(K.threadId)&&ve.getCommentThread(K.threadId).remove(),ve.addCommentThread({channelId:ae,...K})}),V.forEach(K=>{const ae=this.editor.plugins.get("TrackChangesEditing");ae.hasSuggestion(K.id)?ae.getSuggestion(K.id).attributes=K.attributes:ae.addSuggestionData(K)})}}const Zo=Symbol("MainQueueId");class Ya extends C{constructor(O,V={}){super(V),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Xg,this._watchdogConfig=V,this._creator=K=>O.create(K),this._destructor=K=>K.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(O){this._creator=O}setDestructor(O){this._destructor=O}get context(){return this._context}create(O={}){return this._actionQueues.enqueue(Zo,()=>(this._contextConfig=O,this._create()))}getItem(O){return this._getWatchdog(O)._item}getItemState(O){return this._getWatchdog(O).state}add(O){const V=ql(O);return Promise.all(V.map(K=>this._actionQueues.enqueue(K.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let ae;if(this._watchdogs.has(K.id))throw new Error(`Item with the given id is already added: '${K.id}'.`);if(K.type==="editor")return ae=new Wl(null,this._watchdogConfig),ae.setCreator(K.creator),ae._setExcludedProperties(this._contextProps),K.destructor&&ae.setDestructor(K.destructor),this._watchdogs.set(K.id,ae),ae.on("error",(ve,{error:he,causesRestart:we})=>{this._fire("itemError",{itemId:K.id,error:he}),we&&this._actionQueues.enqueue(K.id,()=>new Promise(ze=>{const Ne=()=>{ae.off("restart",Ne),this._fire("itemRestart",{itemId:K.id}),ze()};ae.on("restart",Ne)}))}),ae.create(K.sourceElementOrData,K.config,this._context);throw new Error(`Not supported item type: '${K.type}'.`)})))}remove(O){const V=ql(O);return Promise.all(V.map(K=>this._actionQueues.enqueue(K,()=>{const ae=this._getWatchdog(K);return this._watchdogs.delete(K),ae.destroy()})))}destroy(){return this._actionQueues.enqueue(Zo,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Zo,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(O=>{console.error("An error happened during destroying the context or items.",O)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(O=>(this._context=O,this._contextProps=E(this._context),Promise.all(Array.from(this._watchdogs.values()).map(V=>(V._setExcludedProperties(this._contextProps),V.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const O=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(V=>V.destroy())).then(()=>this._destructor(O))})}_getWatchdog(O){const V=this._watchdogs.get(O);if(!V)throw new Error(`Item with the given id was not registered: ${O}.`);return V}_isErrorComingFromThisItem(O){for(const V of this._watchdogs.values())if(V._isErrorComingFromThisItem(O))return!1;return I(this._context,O.context)}}class Xg{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(O){this._onEmptyCallbacks.push(O)}enqueue(O,V){const K=O===Zo;this._activeActions++,this._queues.get(O)||this._queues.set(O,Promise.resolve());const ae=(K?Promise.all(this._queues.values()):Promise.all([this._queues.get(Zo),this._queues.get(O)])).then(V),ve=ae.catch(()=>{});return this._queues.set(O,ve),ae.finally(()=>{this._activeActions--,this._queues.get(O)===ve&&this._activeActions===0&&this._onEmptyCallbacks.forEach(he=>he())})}}function ql(N){return Array.isArray(N)?N:[N]}const Gl=k().createContext("contextWatchdog");class Ka extends k().Component{constructor(O,V){super(O,V),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(O){return this._shouldComponentUpdate(O)}async _shouldComponentUpdate(O){return O.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(O.config)),O.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(O.config),!0):this.props.children!==O.children}render(){return k().createElement(Gl.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(O){this.contextWatchdog=new Ya(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(V,K)=>{this.props.onError(K.error,{phase:"runtime",willContextRestart:K.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(O).catch(V=>{this.props.onError(V,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Ka.defaultProps={isLayoutReady:!0,onError:(N,O)=>console.error(N,O)},Ka.propTypes={id:w().string,isLayoutReady:w().bool,context:w().func,watchdogConfig:w().object,config:w().object,onReady:w().func,onError:w().func};const Yl="Lock from React integration (@ckeditor/ckeditor5-react)";class ho extends k().Component{constructor(O){super(O),this.editorDestructionInProgress=null,this.domContainer=k().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:V}=window;if(V){const[K]=V.split(".").map(Number);K<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(O){return!!this.editor&&(O.id!==this.props.id||O.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(O)&&this.editor.data.set(O.data),"disabled"in O&&(O.disabled?this.editor.enableReadOnlyMode(Yl):this.editor.disableReadOnlyMode(Yl)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return k().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Ya?this.watchdog=new vh(this.context):this.watchdog=new ho._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((O,V)=>this._createEditor(O,V)),this.watchdog.on("error",(O,{error:V,causesRestart:K})=>{(this.props.onError||console.error)(V,{phase:"runtime",willEditorRestart:K})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(O=>{(this.props.onError||console.error)(O,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(O,V){return this.props.editor.create(O,V).then(K=>{"disabled"in this.props&&this.props.disabled&&K.enableReadOnlyMode(Yl);const ae=K.model.document,ve=K.editing.view.document;return ae.on("change:data",he=>{this.props.onChange&&this.props.onChange(he,K)}),ve.on("focus",he=>{this.props.onFocus&&this.props.onFocus(he,K)}),ve.on("blur",he=>{this.props.onBlur&&this.props.onBlur(he,K)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(K)}),K})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(O=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,O()):this.instance?(await this.instance.destroy(),this.instance=null,O()):void O())})}_shouldUpdateEditor(O){return this.props.data!==O.data&&this.editor.data.get()!==O.data}_getConfig(){const O=this.props.config||{};return this.props.data&&O.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...O,initialData:O.initialData||this.props.data||""}}}ho.contextType=Gl,ho.propTypes={editor:w().func.isRequired,data:w().string,config:w().object,disableWatchdog:w().bool,watchdogConfig:w().object,onChange:w().func,onReady:w().func,onFocus:w().func,onBlur:w().func,onError:w().func,disabled:w().bool,id:w().any},ho._EditorWatchdog=Wl;class vh{constructor(O){this._contextWatchdog=O,this._id=function(){const V=4294967296*Math.random()>>>0,K=4294967296*Math.random()>>>0,ae=4294967296*Math.random()>>>0,ve=4294967296*Math.random()>>>0;return"e"+y[V>>0&255]+y[V>>8&255]+y[V>>16&255]+y[V>>24&255]+y[K>>0&255]+y[K>>8&255]+y[K>>16&255]+y[K>>24&255]+y[ae>>0&255]+y[ae>>8&255]+y[ae>>16&255]+y[ae>>24&255]+y[ve>>0&255]+y[ve>>8&255]+y[ve>>16&255]+y[ve>>24&255]}()}setCreator(O){this._creator=O}create(O,V){return this._contextWatchdog.add({sourceElementOrData:O,config:V,creator:this._creator,id:this._id,type:"editor"})}on(O,V){this._contextWatchdog.on("itemError",(K,{itemId:ae,error:ve})=>{ae===this._id&&V(null,{error:ve,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const Za="Lock from React integration (@ckeditor/ckeditor5-react)",em=N=>{let O=null;const V=(0,m.useRef)(null),K=(0,m.useContext)(Gl),[ae,ve]=(0,m.useState)(null),[he,we]=(0,m.useState)(N.data),[ze,Ne]=(0,m.useState)(N.rootsAttributes||{}),[Wn,En]=(0,m.useState)([]),cn=(0,m.useRef)(!0),fn=(0,m.useRef)(null),qi=k().createElement("div",{ref:fn});(0,m.useEffect)(()=>((async()=>(await V.current,N.isLayoutReady!==!1&&Gn()))(),()=>{pn().then(()=>{V.current=null})}),[N.isLayoutReady]),(0,m.useEffect)(()=>{ae&&(N.disabled?ae.enableReadOnlyMode(Za):ae.disableReadOnlyMode(Za))},[N.disabled]),(0,m.useEffect)(()=>{const Oe=fn.current;if(ae&&!V.current){const pt=ae.getFullData();we({...pt}),Ne({...ae.getRootsAttributes()}),En([...Object.keys(pt).map(Fe=>ft(ae,Fe))]),Oe&&Oe.appendChild(ae.ui.view.toolbar.element)}return()=>{Oe&&Oe.firstChild&&Oe.removeChild(Oe.firstChild)}},[ae&&ae.id]);const Ci=()=>{const Oe=N.config||{};return N.data&&Oe.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...Oe,rootsAttributes:ze}},ft=(Oe,pt)=>k().createElement("div",{id:pt,key:pt,ref:Fe=>{if(Fe){const xi=Oe.ui.view.createEditable(pt,Fe);Oe.ui.addEditable(xi),Oe.editing.view.forceRender()}}}),qn=(Oe,pt)=>N.editor.create(Oe,pt).then(Fe=>{N.disabled&&N.disabled&&Fe.enableReadOnlyMode(Za);const xi=Fe.model.document,Ve=Fe.editing.view.document;return xi.on("change:data",pr=>((Bn,Yn)=>{const gn=Bn.model.document,Ln={},Yt={};gn.differ.getChanges().forEach(At=>{let ln;if(ln=At.type=="insert"||At.type=="remove"?At.position.root:At.range.root,!ln.isAttached())return;const{rootName:fo}=ln;Ln[fo]=Bn.getData({rootName:fo})}),gn.differ.getChangedRoots().forEach(At=>{if(At.state)return void(Ln[At.name]!==void 0&&delete Ln[At.name]);const ln=At.name;Yt[ln]=Bn.getRootAttributes(ln)}),Object.keys(Ln).length&&we(At=>({...At,...Ln})),Object.keys(Yt).length&&Ne(At=>({...At,...Yt})),N.onChange&&N.onChange(Yn,Bn)})(Fe,pr)),Fe.on("addRoot",(pr,Bn)=>((Yn,gn,Ln)=>{const Yt=Ln.rootName,At=ft(Yn,Yt);we(ln=>({...ln,[Yt]:Yn.getData({rootName:Yt})})),Ne(ln=>({...ln,[Yt]:Yn.getRootAttributes(Yt)})),En(ln=>[...ln,At])})(Fe,0,Bn)),Fe.on("detachRoot",(pr,Bn)=>((Yn,gn,Ln)=>{const Yt=Ln.rootName;En(At=>At.filter(ln=>ln.props.id!==Yt)),we(At=>{const{[Yt]:ln,...fo}=At;return{...fo}}),Ne(At=>{const{[Yt]:ln,...fo}=At;return{...fo}}),Yn.detachEditable(Ln)})(Fe,0,Bn)),Ve.on("focus",pr=>{N.onFocus&&N.onFocus(pr,Fe)}),Ve.on("blur",pr=>{N.onBlur&&N.onBlur(pr,Fe)}),ve(Fe),N.onReady&&N.onReady(Fe),Fe}),pn=async()=>{ve(null),we({}),Ne({}),En([]),V.current=new Promise(Oe=>{setTimeout(async()=>O?(await O.destroy(),O=null,Oe()):ae?(await ae.destroy(),Oe()):void Oe())})},Gn=async()=>{N.disableWatchdog?await qn(N.data,Ci()):O||(O=K instanceof Ya?new vh(K):new Wl(N.editor,N.watchdogConfig),O.setCreator((Oe,pt)=>qn(Oe,pt)),O.on("error",(Oe,{error:pt,causesRestart:Fe})=>{(N.onError||console.error)(pt,{phase:"runtime",willEditorRestart:Fe})}),await O.create(he,Ci()).catch(Oe=>{(N.onError||console.error)(Oe,{phase:"initialization",willEditorRestart:!1})}))};(0,m.useEffect)(()=>{if(ae&&cn.current){cn.current=!1;const Oe=Object.keys(he),pt=Object.keys(ze);if(!Oe.every(gn=>pt.includes(gn)))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const Fe=ae.getFullData(),xi=ae.getRootsAttributes(),{addedKeys:Ve,removedKeys:pr}=Ae(Fe,he||{}),Bn=Oe.some(gn=>Fe[gn]!==void 0&&JSON.stringify(Fe[gn])!==JSON.stringify(he[gn])),Yn=pt.filter(gn=>JSON.stringify(xi[gn])!==JSON.stringify(ze[gn]));ae.model.change(gn=>{Rt(Ve),Qa(pr),Bn&&_h(),Yn.length&&yh(gn,Yn)})}},[he,ze]);const Ae=(Oe,pt)=>{const Fe=Object.keys(Oe),xi=Object.keys(pt);return{addedKeys:xi.filter(Ve=>!Fe.includes(Ve)),removedKeys:Fe.filter(Ve=>!xi.includes(Ve))}},Rt=Oe=>{Oe.forEach(pt=>{ae.addRoot(pt,{data:he[pt]||"",attributes:(ze==null?void 0:ze[pt])||{},isUndoable:!0})})},Qa=Oe=>{Oe.forEach(pt=>{ae.detachRoot(pt,!0)})},_h=()=>{ae.data.set(he,{suppressErrorInCollaboration:!0})},yh=(Oe,pt)=>{pt.forEach(Fe=>{Object.keys(ze[Fe]).forEach(xi=>{ae.registerRootAttribute(xi)}),Oe.clearAttributes(ae.model.document.getRoot(Fe)),Oe.setAttributes(ze[Fe],ae.model.document.getRoot(Fe))})},Ah=(0,m.useCallback)(Oe=>{cn.current=!0,we(Oe)},[we]),je=(0,m.useCallback)(Oe=>{cn.current=!0,Ne(Oe)},[Ne]);return{editor:ae,editableElements:Wn,toolbarElement:qi,data:he,setData:Ah,attributes:ze,setAttributes:je}}})(),f})())})(ng,ng.exports);var k$=ng.exports,$t={exports:{}},Tn=$t.exports;(function(i){const n=i.en=i.en||{};n.dictionary=Object.assign(n.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align center":"Align center","Align left":"Align left","Align right":"Align right",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Code:"Code",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Dim grey":"Dim grey",Disc:"Disc",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",HEX:"HEX","Horizontal line":"Horizontal line","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block",Italic:"Italic",Justify:"Justify","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",Next:"Next","No results found":"No results found","No searchable items":"No searchable items","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0","Right aligned image":"Right aligned image",Save:"Save","Select all":"Select all","Show more items":"Show more items","Side image":"Side image",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Subscript:"Subscript",Superscript:"Superscript","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(i,n){typeof Tn=="object"&&typeof $t=="object"?$t.exports=n():typeof define=="function"&&define.amd?define([],n):typeof Tn=="object"?Tn.InlineEditor=n():i.InlineEditor=n()}(self,()=>(()=>{var i={8168:(d,h,f)=>{const m=f(8874),k={};for(const w of Object.keys(m))k[m[w]]=w;const v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};d.exports=v;for(const w of Object.keys(v)){if(!("channels"in v[w]))throw new Error("missing channels property: "+w);if(!("labels"in v[w]))throw new Error("missing channel labels property: "+w);if(v[w].labels.length!==v[w].channels)throw new Error("channel and label counts mismatch: "+w);const{channels:y,labels:C}=v[w];delete v[w].channels,delete v[w].labels,Object.defineProperty(v[w],"channels",{value:y}),Object.defineProperty(v[w],"labels",{value:C})}v.rgb.hsl=function(w){const y=w[0]/255,C=w[1]/255,E=w[2]/255,D=Math.min(y,C,E),I=Math.max(y,C,E),j=I-D;let P,L;I===D?P=0:y===I?P=(C-E)/j:C===I?P=2+(E-y)/j:E===I&&(P=4+(y-C)/j),P=Math.min(60*P,360),P<0&&(P+=360);const S=(D+I)/2;return L=I===D?0:S<=.5?j/(I+D):j/(2-I-D),[P,100*L,100*S]},v.rgb.hsv=function(w){let y,C,E,D,I;const j=w[0]/255,P=w[1]/255,L=w[2]/255,S=Math.max(j,P,L),$=S-Math.min(j,P,L),H=function(J){return(S-J)/6/$+.5};return $===0?(D=0,I=0):(I=$/S,y=H(j),C=H(P),E=H(L),j===S?D=E-C:P===S?D=.3333333333333333+y-E:L===S&&(D=.6666666666666666+C-y),D<0?D+=1:D>1&&(D-=1)),[360*D,100*I,100*S]},v.rgb.hwb=function(w){const y=w[0],C=w[1];let E=w[2];const D=v.rgb.hsl(w)[0],I=1/255*Math.min(y,Math.min(C,E));return E=1-.00392156862745098*Math.max(y,Math.max(C,E)),[D,100*I,100*E]},v.rgb.cmyk=function(w){const y=w[0]/255,C=w[1]/255,E=w[2]/255,D=Math.min(1-y,1-C,1-E);return[100*((1-y-D)/(1-D)||0),100*((1-C-D)/(1-D)||0),100*((1-E-D)/(1-D)||0),100*D]},v.rgb.keyword=function(w){const y=k[w];if(y)return y;let C,E=1/0;for(const j of Object.keys(m)){const P=m[j],L=(I=P,((D=w)[0]-I[0])**2+(D[1]-I[1])**2+(D[2]-I[2])**2);L<E&&(E=L,C=j)}var D,I;return C},v.keyword.rgb=function(w){return m[w]},v.rgb.xyz=function(w){let y=w[0]/255,C=w[1]/255,E=w[2]/255;return y=y>.04045?((y+.055)/1.055)**2.4:y/12.92,C=C>.04045?((C+.055)/1.055)**2.4:C/12.92,E=E>.04045?((E+.055)/1.055)**2.4:E/12.92,[100*(.4124*y+.3576*C+.1805*E),100*(.2126*y+.7152*C+.0722*E),100*(.0193*y+.1192*C+.9505*E)]},v.rgb.lab=function(w){const y=v.rgb.xyz(w);let C=y[0],E=y[1],D=y[2];return C/=95.047,E/=100,D/=108.883,C=C>.008856?C**.3333333333333333:7.787*C+.13793103448275862,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,[116*E-16,500*(C-E),200*(E-D)]},v.hsl.rgb=function(w){const y=w[0]/360,C=w[1]/100,E=w[2]/100;let D,I,j;if(C===0)return j=255*E,[j,j,j];D=E<.5?E*(1+C):E+C-E*C;const P=2*E-D,L=[0,0,0];for(let S=0;S<3;S++)I=y+.3333333333333333*-(S-1),I<0&&I++,I>1&&I--,j=6*I<1?P+6*(D-P)*I:2*I<1?D:3*I<2?P+(D-P)*(.6666666666666666-I)*6:P,L[S]=255*j;return L},v.hsl.hsv=function(w){const y=w[0];let C=w[1]/100,E=w[2]/100,D=C;const I=Math.max(E,.01);return E*=2,C*=E<=1?E:2-E,D*=I<=1?I:2-I,[y,100*(E===0?2*D/(I+D):2*C/(E+C)),100*((E+C)/2)]},v.hsv.rgb=function(w){const y=w[0]/60,C=w[1]/100;let E=w[2]/100;const D=Math.floor(y)%6,I=y-Math.floor(y),j=255*E*(1-C),P=255*E*(1-C*I),L=255*E*(1-C*(1-I));switch(E*=255,D){case 0:return[E,L,j];case 1:return[P,E,j];case 2:return[j,E,L];case 3:return[j,P,E];case 4:return[L,j,E];case 5:return[E,j,P]}},v.hsv.hsl=function(w){const y=w[0],C=w[1]/100,E=w[2]/100,D=Math.max(E,.01);let I,j;j=(2-C)*E;const P=(2-C)*D;return I=C*D,I/=P<=1?P:2-P,I=I||0,j/=2,[y,100*I,100*j]},v.hwb.rgb=function(w){const y=w[0]/360;let C=w[1]/100,E=w[2]/100;const D=C+E;let I;D>1&&(C/=D,E/=D);const j=Math.floor(6*y),P=1-E;I=6*y-j,1&j&&(I=1-I);const L=C+I*(P-C);let S,$,H;switch(j){default:case 6:case 0:S=P,$=L,H=C;break;case 1:S=L,$=P,H=C;break;case 2:S=C,$=P,H=L;break;case 3:S=C,$=L,H=P;break;case 4:S=L,$=C,H=P;break;case 5:S=P,$=C,H=L}return[255*S,255*$,255*H]},v.cmyk.rgb=function(w){const y=w[0]/100,C=w[1]/100,E=w[2]/100,D=w[3]/100;return[255*(1-Math.min(1,y*(1-D)+D)),255*(1-Math.min(1,C*(1-D)+D)),255*(1-Math.min(1,E*(1-D)+D))]},v.xyz.rgb=function(w){const y=w[0]/100,C=w[1]/100,E=w[2]/100;let D,I,j;return D=3.2406*y+-1.5372*C+-.4986*E,I=-.9689*y+1.8758*C+.0415*E,j=.0557*y+-.204*C+1.057*E,D=D>.0031308?1.055*D**.4166666666666667-.055:12.92*D,I=I>.0031308?1.055*I**.4166666666666667-.055:12.92*I,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,D=Math.min(Math.max(0,D),1),I=Math.min(Math.max(0,I),1),j=Math.min(Math.max(0,j),1),[255*D,255*I,255*j]},v.xyz.lab=function(w){let y=w[0],C=w[1],E=w[2];return y/=95.047,C/=100,E/=108.883,y=y>.008856?y**.3333333333333333:7.787*y+.13793103448275862,C=C>.008856?C**.3333333333333333:7.787*C+.13793103448275862,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,[116*C-16,500*(y-C),200*(C-E)]},v.lab.xyz=function(w){let y,C,E;C=(w[0]+16)/116,y=w[1]/500+C,E=C-w[2]/200;const D=C**3,I=y**3,j=E**3;return C=D>.008856?D:(C-.13793103448275862)/7.787,y=I>.008856?I:(y-.13793103448275862)/7.787,E=j>.008856?j:(E-.13793103448275862)/7.787,y*=95.047,C*=100,E*=108.883,[y,C,E]},v.lab.lch=function(w){const y=w[0],C=w[1],E=w[2];let D;return D=360*Math.atan2(E,C)/2/Math.PI,D<0&&(D+=360),[y,Math.sqrt(C*C+E*E),D]},v.lch.lab=function(w){const y=w[0],C=w[1],E=w[2]/360*2*Math.PI;return[y,C*Math.cos(E),C*Math.sin(E)]},v.rgb.ansi16=function(w,y=null){const[C,E,D]=w;let I=y===null?v.rgb.hsv(w)[2]:y;if(I=Math.round(I/50),I===0)return 30;let j=30+(Math.round(D/255)<<2|Math.round(E/255)<<1|Math.round(C/255));return I===2&&(j+=60),j},v.hsv.ansi16=function(w){return v.rgb.ansi16(v.hsv.rgb(w),w[2])},v.rgb.ansi256=function(w){const y=w[0],C=w[1],E=w[2];return y===C&&C===E?y<8?16:y>248?231:Math.round((y-8)/247*24)+232:16+36*Math.round(y/255*5)+6*Math.round(C/255*5)+Math.round(E/255*5)},v.ansi16.rgb=function(w){let y=w%10;if(y===0||y===7)return w>50&&(y+=3.5),y=y/10.5*255,[y,y,y];const C=.5*(1+~~(w>50));return[(1&y)*C*255,(y>>1&1)*C*255,(y>>2&1)*C*255]},v.ansi256.rgb=function(w){if(w>=232){const C=10*(w-232)+8;return[C,C,C]}let y;return w-=16,[Math.floor(w/36)/5*255,Math.floor((y=w%36)/6)/5*255,y%6/5*255]},v.rgb.hex=function(w){const y=(((255&Math.round(w[0]))<<16)+((255&Math.round(w[1]))<<8)+(255&Math.round(w[2]))).toString(16).toUpperCase();return"000000".substring(y.length)+y},v.hex.rgb=function(w){const y=w.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!y)return[0,0,0];let C=y[0];y[0].length===3&&(C=C.split("").map(D=>D+D).join(""));const E=parseInt(C,16);return[E>>16&255,E>>8&255,255&E]},v.rgb.hcg=function(w){const y=w[0]/255,C=w[1]/255,E=w[2]/255,D=Math.max(Math.max(y,C),E),I=Math.min(Math.min(y,C),E),j=D-I;let P,L;return P=j<1?I/(1-j):0,L=j<=0?0:D===y?(C-E)/j%6:D===C?2+(E-y)/j:4+(y-C)/j,L/=6,L%=1,[360*L,100*j,100*P]},v.hsl.hcg=function(w){const y=w[1]/100,C=w[2]/100,E=C<.5?2*y*C:2*y*(1-C);let D=0;return E<1&&(D=(C-.5*E)/(1-E)),[w[0],100*E,100*D]},v.hsv.hcg=function(w){const y=w[1]/100,C=w[2]/100,E=y*C;let D=0;return E<1&&(D=(C-E)/(1-E)),[w[0],100*E,100*D]},v.hcg.rgb=function(w){const y=w[0]/360,C=w[1]/100,E=w[2]/100;if(C===0)return[255*E,255*E,255*E];const D=[0,0,0],I=y%1*6,j=I%1,P=1-j;let L=0;switch(Math.floor(I)){case 0:D[0]=1,D[1]=j,D[2]=0;break;case 1:D[0]=P,D[1]=1,D[2]=0;break;case 2:D[0]=0,D[1]=1,D[2]=j;break;case 3:D[0]=0,D[1]=P,D[2]=1;break;case 4:D[0]=j,D[1]=0,D[2]=1;break;default:D[0]=1,D[1]=0,D[2]=P}return L=(1-C)*E,[255*(C*D[0]+L),255*(C*D[1]+L),255*(C*D[2]+L)]},v.hcg.hsv=function(w){const y=w[1]/100,C=y+w[2]/100*(1-y);let E=0;return C>0&&(E=y/C),[w[0],100*E,100*C]},v.hcg.hsl=function(w){const y=w[1]/100,C=w[2]/100*(1-y)+.5*y;let E=0;return C>0&&C<.5?E=y/(2*C):C>=.5&&C<1&&(E=y/(2*(1-C))),[w[0],100*E,100*C]},v.hcg.hwb=function(w){const y=w[1]/100,C=y+w[2]/100*(1-y);return[w[0],100*(C-y),100*(1-C)]},v.hwb.hcg=function(w){const y=w[1]/100,C=1-w[2]/100,E=C-y;let D=0;return E<1&&(D=(C-E)/(1-E)),[w[0],100*E,100*D]},v.apple.rgb=function(w){return[w[0]/65535*255,w[1]/65535*255,w[2]/65535*255]},v.rgb.apple=function(w){return[w[0]/255*65535,w[1]/255*65535,w[2]/255*65535]},v.gray.rgb=function(w){return[w[0]/100*255,w[0]/100*255,w[0]/100*255]},v.gray.hsl=function(w){return[0,0,w[0]]},v.gray.hsv=v.gray.hsl,v.gray.hwb=function(w){return[0,100,w[0]]},v.gray.cmyk=function(w){return[0,0,0,w[0]]},v.gray.lab=function(w){return[w[0],0,0]},v.gray.hex=function(w){const y=255&Math.round(w[0]/100*255),C=((y<<16)+(y<<8)+y).toString(16).toUpperCase();return"000000".substring(C.length)+C},v.rgb.gray=function(w){return[(w[0]+w[1]+w[2])/3/255*100]}},2085:(d,h,f)=>{const m=f(8168),k=f(4111),v={};Object.keys(m).forEach(w=>{v[w]={},Object.defineProperty(v[w],"channels",{value:m[w].channels}),Object.defineProperty(v[w],"labels",{value:m[w].labels});const y=k(w);Object.keys(y).forEach(C=>{const E=y[C];v[w][C]=function(D){const I=function(...j){const P=j[0];if(P==null)return P;P.length>1&&(j=P);const L=D(j);if(typeof L=="object")for(let S=L.length,$=0;$<S;$++)L[$]=Math.round(L[$]);return L};return"conversion"in D&&(I.conversion=D.conversion),I}(E),v[w][C].raw=function(D){const I=function(...j){const P=j[0];return P==null?P:(P.length>1&&(j=P),D(j))};return"conversion"in D&&(I.conversion=D.conversion),I}(E)})}),d.exports=v},4111:(d,h,f)=>{const m=f(8168);function k(y){const C=function(){const D={},I=Object.keys(m);for(let j=I.length,P=0;P<j;P++)D[I[P]]={distance:-1,parent:null};return D}(),E=[y];for(C[y].distance=0;E.length;){const D=E.pop(),I=Object.keys(m[D]);for(let j=I.length,P=0;P<j;P++){const L=I[P],S=C[L];S.distance===-1&&(S.distance=C[D].distance+1,S.parent=D,E.unshift(L))}}return C}function v(y,C){return function(E){return C(y(E))}}function w(y,C){const E=[C[y].parent,y];let D=m[C[y].parent][y],I=C[y].parent;for(;C[I].parent;)E.unshift(C[I].parent),D=v(m[C[I].parent][I],D),I=C[I].parent;return D.conversion=E,D}d.exports=function(y){const C=k(y),E={},D=Object.keys(C);for(let I=D.length,j=0;j<I;j++){const P=D[j];C[P].parent!==null&&(E[P]=w(P,C))}return E}},8874:d=>{d.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},5363:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},3789:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},799:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},7372:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},5037:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const y=w},4249:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},9893:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{background:#dedede;border:0;height:4px;margin:15px 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-horizontal-line/theme/horizontalline.css"],names:[],mappings:"AAMA,yCAEC,iBACD,CAEA,eAGC,kBAA2B,CAC3B,QAAS,CAFT,UAAW,CADX,aAID",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2430:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2423:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},8879:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsert.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD,CCfA,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},8340:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2400:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},3534:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},1547:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},6618:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2926:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},5269:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},3925:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},7536:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CCtDD,oCD0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CCzED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4874:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4330:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkimage.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const y=w},5782:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`],sourceRoot:""}]);const y=w},3190:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const y=w},4784:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},9938:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2591:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/liststyles.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},9292:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},8705:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},1922:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},7138:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4029:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-modal)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4971:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},7258:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4923:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4257:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},6306:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},5062:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},1883:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4791:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2704:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},9847:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},1874:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header .ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BASD,CAPC,6BACC,qCACD,CAEA,8CACC,WACD,CCXD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAkBD,CAbC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4746:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},1977:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2470:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},3525:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2933:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,4WAGE,+HAYF,CAfA,4WAOE,wIAQF,CAfA,wVAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},179:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item .ck-button{text-align:left}[dir=rtl] .ck.ck-list__item .ck-button{text-align:right}.ck.ck-list__item .ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,oJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cAgED,CA9DC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UA6CD,CA/CA,uCAME,eAyCF,CA/CA,uCAUE,gBAqCF,CA/CA,6BAgBC,qCA+BD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4460:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},7592:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},6356:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},3707:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},6603:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CCvBD,oCDMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CCpEH",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},9332:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/search/search.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
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

`],sourceRoot:""}]);const y=w},6446:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
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

`],sourceRoot:""}]);const y=w},5224:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4176:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4768:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},3888:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,qCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CACrB,wCAAyC,CAFzC,wBAGD,CApBD,gCAuBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},5167:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_poweredby.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CC3GhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJ2GD,CIrGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},7153:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},4875:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},2347:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const y=w},5948:(d,h,f)=>{f.d(h,{Z:()=>y});var m=f(4015),k=f.n(m),v=f(3645),w=f.n(v)()(k());w.push([d.id,".ck-editor.ck-plugin-full-screen{align-items:center;background-color:#fff;display:flex;flex-direction:column;height:100vh;left:0;position:fixed;top:0;width:100%;z-index:100}.ck-editor.ck-plugin-full-screen .ck-editor__main,.ck-editor.ck-plugin-full-screen .ck-editor__top{max-width:1000px;width:100%}.ck-editor.ck-plugin-full-screen .ck-editor__top{margin-top:2em}.ck-editor.ck-plugin-full-screen .ck-editor__main{flex-grow:1;margin-bottom:2em;overflow-y:hidden}.ck-editor.ck-plugin-full-screen .ck-source-editing-area{height:100%}.ck-editor.ck-plugin-full-screen .ck-source-editing-area textarea{overflow-y:scroll}","",{version:3,sources:["webpack://./plugins/fullscreen/theme/fullscreen.css"],names:[],mappings:"AAAA,iCASE,kBAAmB,CACnB,qBAAsB,CAHtB,YAAa,CACb,qBAAsB,CAFtB,YAAa,CAHb,MAAO,CAFP,cAAe,CACf,KAAM,CAGN,UAAW,CADX,WAOF,CAEA,mGAGE,gBAAiB,CADjB,UAEF,CAEA,iDACE,cACF,CAEA,kDAEE,WAAY,CAEZ,iBAAkB,CADlB,iBAEF,CAGA,yDACE,WACF,CAEA,kEACE,iBACF",sourcesContent:[`.ck-editor.ck-plugin-full-screen {
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
`],sourceRoot:""}]);const y=w},3645:d=>{d.exports=function(h){var f=[];return f.toString=function(){return this.map(function(m){var k=h(m);return m[2]?"@media ".concat(m[2]," {").concat(k,"}"):k}).join("")},f.i=function(m,k,v){typeof m=="string"&&(m=[[null,m,""]]);var w={};if(v)for(var y=0;y<this.length;y++){var C=this[y][0];C!=null&&(w[C]=!0)}for(var E=0;E<m.length;E++){var D=[].concat(m[E]);v&&w[D[0]]||(k&&(D[2]?D[2]="".concat(k," and ").concat(D[2]):D[2]=k),f.push(D))}},f}},4015:d=>{function h(m,k){return function(v){if(Array.isArray(v))return v}(m)||function(v,w){var y=v&&(typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"]);if(y!=null){var C,E,D=[],I=!0,j=!1;try{for(y=y.call(v);!(I=(C=y.next()).done)&&(D.push(C.value),!w||D.length!==w);I=!0);}catch(P){j=!0,E=P}finally{try{I||y.return==null||y.return()}finally{if(j)throw E}}return D}}(m,k)||function(v,w){if(v){if(typeof v=="string")return f(v,w);var y=Object.prototype.toString.call(v).slice(8,-1);if(y==="Object"&&v.constructor&&(y=v.constructor.name),y==="Map"||y==="Set")return Array.from(v);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return f(v,w)}}(m,k)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(m,k){(k==null||k>m.length)&&(k=m.length);for(var v=0,w=new Array(k);v<k;v++)w[v]=m[v];return w}d.exports=function(m){var k=h(m,4),v=k[1],w=k[3];if(!w)return v;if(typeof btoa=="function"){var y=btoa(unescape(encodeURIComponent(JSON.stringify(w)))),C="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(y),E="/*# ".concat(C," */"),D=w.sources.map(function(I){return"/*# sourceURL=".concat(w.sourceRoot||"").concat(I," */")});return[v].concat(D).concat([E]).join(`
`)}return[v].join(`
`)}},3379:(d,h,f)=>{var m,k=function(){return m===void 0&&(m=!!(window&&document&&document.all&&!window.atob)),m},v=function(){var H={};return function(J){if(H[J]===void 0){var Z=document.querySelector(J);if(window.HTMLIFrameElement&&Z instanceof window.HTMLIFrameElement)try{Z=Z.contentDocument.head}catch{Z=null}H[J]=Z}return H[J]}}(),w=[];function y(H){for(var J=-1,Z=0;Z<w.length;Z++)if(w[Z].identifier===H){J=Z;break}return J}function C(H,J){for(var Z={},ee=[],de=0;de<H.length;de++){var se=H[de],Y=J.base?se[0]+J.base:se[0],Q=Z[Y]||0,q="".concat(Y," ").concat(Q);Z[Y]=Q+1;var U=y(q),W={css:se[1],media:se[2],sourceMap:se[3]};U!==-1?(w[U].references++,w[U].updater(W)):w.push({identifier:q,updater:$(W,J),references:1}),ee.push(q)}return ee}function E(H){var J=document.createElement("style"),Z=H.attributes||{};if(Z.nonce===void 0){var ee=f.nc;ee&&(Z.nonce=ee)}if(Object.keys(Z).forEach(function(se){J.setAttribute(se,Z[se])}),typeof H.insert=="function")H.insert(J);else{var de=v(H.insert||"head");if(!de)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");de.appendChild(J)}return J}var D,I=(D=[],function(H,J){return D[H]=J,D.filter(Boolean).join(`
`)});function j(H,J,Z,ee){var de=Z?"":ee.media?"@media ".concat(ee.media," {").concat(ee.css,"}"):ee.css;if(H.styleSheet)H.styleSheet.cssText=I(J,de);else{var se=document.createTextNode(de),Y=H.childNodes;Y[J]&&H.removeChild(Y[J]),Y.length?H.insertBefore(se,Y[J]):H.appendChild(se)}}function P(H,J,Z){var ee=Z.css,de=Z.media,se=Z.sourceMap;if(de?H.setAttribute("media",de):H.removeAttribute("media"),se&&typeof btoa<"u"&&(ee+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(se))))," */")),H.styleSheet)H.styleSheet.cssText=ee;else{for(;H.firstChild;)H.removeChild(H.firstChild);H.appendChild(document.createTextNode(ee))}}var L=null,S=0;function $(H,J){var Z,ee,de;if(J.singleton){var se=S++;Z=L||(L=E(J)),ee=j.bind(null,Z,se,!1),de=j.bind(null,Z,se,!0)}else Z=E(J),ee=P.bind(null,Z,J),de=function(){(function(Y){if(Y.parentNode===null)return!1;Y.parentNode.removeChild(Y)})(Z)};return ee(H),function(Y){if(Y){if(Y.css===H.css&&Y.media===H.media&&Y.sourceMap===H.sourceMap)return;ee(H=Y)}else de()}}d.exports=function(H,J){(J=J||{}).singleton||typeof J.singleton=="boolean"||(J.singleton=k());var Z=C(H=H||[],J);return function(ee){if(ee=ee||[],Object.prototype.toString.call(ee)==="[object Array]"){for(var de=0;de<Z.length;de++){var se=y(Z[de]);w[se].references--}for(var Y=C(ee,J),Q=0;Q<Z.length;Q++){var q=y(Z[Q]);w[q].references===0&&(w[q].updater(),w.splice(q,1))}Z=Y}}}}},n={};function o(d){var h=n[d];if(h!==void 0)return h.exports;var f=n[d]={id:d,exports:{}};return i[d](f,f.exports,o),f.exports}o.n=d=>{var h=d&&d.__esModule?()=>d.default:()=>d;return o.d(h,{a:h}),h},o.d=(d,h)=>{for(var f in h)o.o(h,f)&&!o.o(d,f)&&Object.defineProperty(d,f,{enumerable:!0,get:h[f]})},o.o=(d,h)=>Object.prototype.hasOwnProperty.call(d,h),o.nc=void 0;var c={};return(()=>{o.d(c,{default:()=>wL});const d=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),h={isMac:m(d),isWindows:function(a){return a.indexOf("windows")>-1}(d),isGecko:function(a){return!!a.match(/gecko\/\d+/)}(d),isSafari:function(a){return a.indexOf(" applewebkit/")>-1&&a.indexOf("chrome")===-1}(d),isiOS:function(a){return!!a.match(/iphone|ipad/i)||m(a)&&navigator.maxTouchPoints>0}(d),isAndroid:function(a){return a.indexOf("android")>-1}(d),isBlink:function(a){return a.indexOf("chrome/")>-1&&a.indexOf("edge/")<0}(d),features:{isRegExpUnicodePropertySupported:function(){let a=!1;try{a="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return a}()}},f=h;function m(a){return a.indexOf("macintosh")>-1}function k(a,e,t,r){t=t||function(g,b){return g===b};const s=Array.isArray(a)?a:Array.prototype.slice.call(a),l=Array.isArray(e)?e:Array.prototype.slice.call(e),u=function(g,b,_){const A=v(g,b,_);if(A===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const x=w(g,A),T=w(b,A),B=v(x,T,_),z=g.length-B,R=b.length-B;return{firstIndex:A,lastIndexOld:z,lastIndexNew:R}}(s,l,t);return r?function(g,b){const{firstIndex:_,lastIndexOld:A,lastIndexNew:x}=g;if(_===-1)return Array(b).fill("equal");let T=[];return _>0&&(T=T.concat(Array(_).fill("equal"))),x-_>0&&(T=T.concat(Array(x-_).fill("insert"))),A-_>0&&(T=T.concat(Array(A-_).fill("delete"))),x<b&&(T=T.concat(Array(b-x).fill("equal"))),T}(u,l.length):function(g,b){const _=[],{firstIndex:A,lastIndexOld:x,lastIndexNew:T}=b;return T-A>0&&_.push({index:A,type:"insert",values:g.slice(A,T)}),x-A>0&&_.push({index:A+(T-A),type:"delete",howMany:x-A}),_}(l,u)}function v(a,e,t){for(let r=0;r<Math.max(a.length,e.length);r++)if(a[r]===void 0||e[r]===void 0||!t(a[r],e[r]))return r;return-1}function w(a,e){return a.slice(e).reverse()}function y(a,e,t){t=t||function(z,R){return z===R};const r=a.length,s=e.length;if(r>200||s>200||r+s>300)return y.fastDiff(a,e,t,!0);let l,u;if(s<r){const z=a;a=e,e=z,l="delete",u="insert"}else l="insert",u="delete";const p=a.length,g=e.length,b=g-p,_={},A={};function x(z){const R=(A[z-1]!==void 0?A[z-1]:-1)+1,G=A[z+1]!==void 0?A[z+1]:-1,te=R>G?-1:1;_[z+te]&&(_[z]=_[z+te].slice(0)),_[z]||(_[z]=[]),_[z].push(R>G?l:u);let le=Math.max(R,G),xe=le-z;for(;xe<p&&le<g&&t(a[xe],e[le]);)xe++,le++,_[z].push("equal");return le}let T,B=0;do{for(T=-B;T<b;T++)A[T]=x(T);for(T=b+B;T>b;T--)A[T]=x(T);A[b]=x(b),B++}while(A[b]!==g);return _[b].slice(1)}y.fastDiff=k;const C=function(){return function a(){a.called=!0}};class E{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=C(),this.off=C()}}const D=new Array(256).fill("").map((a,e)=>("0"+e.toString(16)).slice(-2));function I(){const a=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0;return"e"+D[a>>0&255]+D[a>>8&255]+D[a>>16&255]+D[a>>24&255]+D[e>>0&255]+D[e>>8&255]+D[e>>16&255]+D[e>>24&255]+D[t>>0&255]+D[t>>8&255]+D[t>>16&255]+D[t>>24&255]+D[r>>0&255]+D[r>>8&255]+D[r>>16&255]+D[r>>24&255]}const j={get(a="normal"){return typeof a!="number"?this[a]||this.normal:a},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function P(a,e){const t=j.get(e.priority);for(let r=0;r<a.length;r++)if(j.get(a[r].priority)<t)return void a.splice(r,0,e);a.push(e)}const L="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class S extends Error{constructor(e,t,r){super(function(s,l){const u=new WeakSet,p=(_,A)=>{if(typeof A=="object"&&A!==null){if(u.has(A))return`[object ${A.constructor.name}]`;u.add(A)}return A},g=l?` ${JSON.stringify(l,p)}`:"",b=H(s);return s+g+b}(e,r)),this.name="CKEditorError",this.context=t,this.data=r}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const r=new S(e.message,t);throw r.stack=e.stack,r}}function $(a,e){console.warn(...J(a,e))}function H(a){return`
Read more: ${L}#error-${a}`}function J(a,e){const t=H(a);return e?[a,e,t]:[a,t]}const Z="40.0.0",ee=new Date(2023,9,4);if(globalThis.CKEDITOR_VERSION)throw new S("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=Z;const de=Symbol("listeningTo"),se=Symbol("emitterId"),Y=Symbol("delegations"),Q=q(Object);function q(a){return a?class extends a{on(e,t,r){this.listenTo(this,e,t,r)}once(e,t,r){let s=!1;this.listenTo(this,e,(l,...u)=>{s||(s=!0,l.off(),t.call(this,l,...u))},r)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,r,s={}){let l,u;this[de]||(this[de]={});const p=this[de];W(e)||U(e);const g=W(e);(l=p[g])||(l=p[g]={emitter:e,callbacks:{}}),(u=l.callbacks[t])||(u=l.callbacks[t]=[]),u.push(r),function(b,_,A,x,T){_._addEventListener?_._addEventListener(A,x,T):b._addEventListener.call(_,A,x,T)}(this,e,t,r,s)}stopListening(e,t,r){const s=this[de];let l=e&&W(e);const u=s&&l?s[l]:void 0,p=u&&t?u.callbacks[t]:void 0;if(!(!s||e&&!u||t&&!p))if(r)pe(this,e,t,r),p.indexOf(r)!==-1&&(p.length===1?delete u.callbacks[t]:pe(this,e,t,r));else if(p){for(;r=p.pop();)pe(this,e,t,r);delete u.callbacks[t]}else if(u){for(t in u.callbacks)this.stopListening(e,t);delete s[l]}else{for(l in s)this.stopListening(s[l].emitter);delete this[de]}}fire(e,...t){try{const r=e instanceof E?e:new E(this,e),s=r.name;let l=re(this,s);if(r.path.push(this),l){const p=[r,...t];l=Array.from(l);for(let g=0;g<l.length&&(l[g].callback.apply(this,p),r.off.called&&(delete r.off.called,this._removeEventListener(s,l[g].callback)),!r.stop.called);g++);}const u=this[Y];if(u){const p=u.get(s),g=u.get("*");p&&ie(p,r,t),g&&ie(g,r,t)}return r.return}catch(r){S.rethrowUnexpectedError(r,this)}}delegate(...e){return{to:(t,r)=>{this[Y]||(this[Y]=new Map),e.forEach(s=>{const l=this[Y].get(s);l?l.set(t,r):this[Y].set(s,new Map([[t,r]]))})}}}stopDelegating(e,t){if(this[Y])if(e)if(t){const r=this[Y].get(e);r&&r.delete(t)}else this[Y].delete(e);else this[Y].clear()}_addEventListener(e,t,r){(function(u,p){const g=X(u);if(g[p])return;let b=p,_=null;const A=[];for(;b!==""&&!g[b];)g[b]={callbacks:[],childEvents:[]},A.push(g[b]),_&&g[b].childEvents.push(_),_=b,b=b.substr(0,b.lastIndexOf(":"));if(b!==""){for(const x of A)x.callbacks=g[b].callbacks.slice();g[b].childEvents.push(_)}})(this,e);const s=oe(this,e),l={callback:t,priority:j.get(r.priority)};for(const u of s)P(u,l)}_removeEventListener(e,t){const r=oe(this,e);for(const s of r)for(let l=0;l<s.length;l++)s[l].callback==t&&(s.splice(l,1),l--)}}:Q}function U(a,e){a[se]||(a[se]=e||I())}function W(a){return a[se]}function X(a){return a._events||Object.defineProperty(a,"_events",{value:{}}),a._events}function oe(a,e){const t=X(a)[e];if(!t)return[];let r=[t.callbacks];for(let s=0;s<t.childEvents.length;s++){const l=oe(a,t.childEvents[s]);r=r.concat(l)}return r}function re(a,e){let t;return a._events&&(t=a._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?re(a,e.substr(0,e.lastIndexOf(":"))):null}function ie(a,e,t){for(let[r,s]of a){s?typeof s=="function"&&(s=s(e.name)):s=e.name;const l=new E(e.source,s);l.path=[...e.path],r.fire(l,...t)}}function pe(a,e,t,r){e._removeEventListener?e._removeEventListener(t,r):a._removeEventListener.call(e,t,r)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(a=>{q[a]=Q.prototype[a]});const ge=function(a){var e=typeof a;return a!=null&&(e=="object"||e=="function")},Se=Symbol("observableProperties"),tt=Symbol("boundObservables"),wt=Symbol("boundProperties"),nt=Symbol("decoratedMethods"),Ee=Symbol("decoratedOriginal"),on=Me(q());function Me(a){return a?class extends a{set(e,t){if(ge(e))return void Object.keys(e).forEach(s=>{this.set(s,e[s])},this);It(this);const r=this[Se];if(e in this&&!r.has(e))throw new S("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>r.get(e),set(s){const l=r.get(e);let u=this.fire(`set:${e}`,e,s,l);u===void 0&&(u=s),l===u&&r.has(e)||(r.set(e,u),this.fire(`change:${e}`,e,u,l))}}),this[e]=t}bind(...e){if(!e.length||!dr(e))throw new S("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new S("observable-bind-duplicate-properties",this);It(this);const t=this[wt];e.forEach(s=>{if(t.has(s))throw new S("observable-bind-rebind",this)});const r=new Map;return e.forEach(s=>{const l={property:s,to:[]};t.set(s,l),r.set(s,l)}),{to:ni,toMany:wi,_observable:this,_bindProperties:e,_to:[],_bindings:r}}unbind(...e){if(!this[Se])return;const t=this[wt],r=this[tt];if(e.length){if(!dr(e))throw new S("observable-unbind-wrong-properties",this);e.forEach(s=>{const l=t.get(s);l&&(l.to.forEach(([u,p])=>{const g=r.get(u),b=g[p];b.delete(l),b.size||delete g[p],Object.keys(g).length||(r.delete(u),this.stopListening(u,"change"))}),t.delete(s))})}else r.forEach((s,l)=>{this.stopListening(l,"change")}),r.clear(),t.clear()}decorate(e){It(this);const t=this[e];if(!t)throw new S("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(r,s)=>{r.return=t.apply(this,s)}),this[e]=function(...r){return this.fire(e,r)},this[e][Ee]=t,this[nt]||(this[nt]=[]),this[nt].push(e)}stopListening(e,t,r){if(!e&&this[nt]){for(const s of this[nt])this[s]=this[s][Ee];delete this[nt]}super.stopListening(e,t,r)}}:on}function It(a){a[Se]||(Object.defineProperty(a,Se,{value:new Map}),Object.defineProperty(a,tt,{value:new Map}),Object.defineProperty(a,wt,{value:new Map}))}function ni(...a){const e=function(...l){if(!l.length)throw new S("observable-bind-to-parse-error",null);const u={to:[]};let p;return typeof l[l.length-1]=="function"&&(u.callback=l.pop()),l.forEach(g=>{if(typeof g=="string")p.properties.push(g);else{if(typeof g!="object")throw new S("observable-bind-to-parse-error",null);p={observable:g,properties:[]},u.to.push(p)}}),u}(...a),t=Array.from(this._bindings.keys()),r=t.length;if(!e.callback&&e.to.length>1)throw new S("observable-bind-to-no-callback",this);if(r>1&&e.callback)throw new S("observable-bind-to-extra-callback",this);var s;e.to.forEach(l=>{if(l.properties.length&&l.properties.length!==r)throw new S("observable-bind-to-properties-length",this);l.properties.length||(l.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),s=this._observable,this._to.forEach(l=>{const u=s[tt];let p;u.get(l.observable)||s.listenTo(l.observable,"change",(g,b)=>{p=u.get(l.observable)[b],p&&p.forEach(_=>{Ui(s,_.property)})})}),function(l){let u;l._bindings.forEach((p,g)=>{l._to.forEach(b=>{u=b.properties[p.callback?0:l._bindProperties.indexOf(g)],p.to.push([b.observable,u]),function(_,A,x,T){const B=_[tt],z=B.get(x),R=z||{};R[T]||(R[T]=new Set),R[T].add(A),z||B.set(x,R)}(l._observable,p,b.observable,u)})})}(this),this._bindProperties.forEach(l=>{Ui(this._observable,l)})}function wi(a,e,t){if(this._bindings.size>1)throw new S("observable-bind-to-many-not-one-binding",this);this.to(...function(r,s){const l=r.map(u=>[u,s]);return Array.prototype.concat.apply([],l)}(a,e),t)}function dr(a){return a.every(e=>typeof e=="string")}function Ui(a,e){const t=a[wt].get(e);let r;t.callback?r=t.callback.apply(a,t.to.map(s=>s[0][s[1]])):(r=t.to[0],r=r[0][r[1]]),Object.prototype.hasOwnProperty.call(a,e)?a[e]=r:a.set(e,r)}function vi(a){let e=0;for(const t of a)e++;return e}function lt(a,e){const t=Math.min(a.length,e.length);for(let r=0;r<t;r++)if(a[r]!=e[r])return r;return a.length==e.length?"same":a.length<e.length?"prefix":"extension"}function Mt(a){return!(!a||!a[Symbol.iterator])}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(a=>{Me[a]=on.prototype[a]});const Jt=typeof global=="object"&&global&&global.Object===Object&&global;var ur=typeof self=="object"&&self&&self.Object===Object&&self;const jt=Jt||ur||Function("return this")(),Nt=jt.Symbol;var Re=Object.prototype,io=Re.hasOwnProperty,ro=Re.toString,_i=Nt?Nt.toStringTag:void 0;const $o=function(a){var e=io.call(a,_i),t=a[_i];try{a[_i]=void 0;var r=!0}catch{}var s=ro.call(a);return r&&(e?a[_i]=t:delete a[_i]),s};var Uo=Object.prototype.toString;const ii=function(a){return Uo.call(a)};var On=Nt?Nt.toStringTag:void 0;const An=function(a){return a==null?a===void 0?"[object Undefined]":"[object Null]":On&&On in Object(a)?$o(a):ii(a)},yt=Array.isArray,Ht=function(a){return a!=null&&typeof a=="object"},ri=function(a){return typeof a=="string"||!yt(a)&&Ht(a)&&An(a)=="[object String]"};function Hi(a,e,t={},r=[]){const s=t&&t.xmlns,l=s?a.createElementNS(s,e):a.createElement(e);for(const u in t)l.setAttribute(u,t[u]);!ri(r)&&Mt(r)||(r=[r]);for(let u of r)ri(u)&&(u=a.createTextNode(u)),l.appendChild(u);return l}const Wi=function(a,e){return function(t){return a(e(t))}},sn=Wi(Object.getPrototypeOf,Object);var Cn=Function.prototype,oo=Object.prototype,xn=Cn.toString,hr=oo.hasOwnProperty,Or=xn.call(Object);const Wt=function(a){if(!Ht(a)||An(a)!="[object Object]")return!1;var e=sn(a);if(e===null)return!0;var t=hr.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&xn.call(t)==Or},qt=function(){this.__data__=[],this.size=0},Gt=function(a,e){return a===e||a!=a&&e!=e},Ce=function(a,e){for(var t=a.length;t--;)if(Gt(a[t][0],e))return t;return-1};var qe=Array.prototype.splice;const an=function(a){var e=this.__data__,t=Ce(e,a);return!(t<0)&&(t==e.length-1?e.pop():qe.call(e,t,1),--this.size,!0)},Pn=function(a){var e=this.__data__,t=Ce(e,a);return t<0?void 0:e[t][1]},oi=function(a){return Ce(this.__data__,a)>-1},ke=function(a,e){var t=this.__data__,r=Ce(t,a);return r<0?(++this.size,t.push([a,e])):t[r][1]=e,this};function Te(a){var e=-1,t=a==null?0:a.length;for(this.clear();++e<t;){var r=a[e];this.set(r[0],r[1])}}Te.prototype.clear=qt,Te.prototype.delete=an,Te.prototype.get=Pn,Te.prototype.has=oi,Te.prototype.set=ke;const De=Te,St=function(){this.__data__=new De,this.size=0},Dt=function(a){var e=this.__data__,t=e.delete(a);return this.size=e.size,t},si=function(a){return this.__data__.get(a)},yi=function(a){return this.__data__.has(a)},Ot=function(a){if(!ge(a))return!1;var e=An(a);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Pt=jt["__core-js_shared__"];var at=function(){var a=/[^.]+$/.exec(Pt&&Pt.keys&&Pt.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}();const so=function(a){return!!at&&at in a};var vl=Function.prototype.toString;const Hn=function(a){if(a!=null){try{return vl.call(a)}catch{}try{return a+""}catch{}}return""};var Pa=/^\[object .+?Constructor\]$/,Ba=Function.prototype,La=Object.prototype,ct=Ba.toString,hn=La.hasOwnProperty,Vs=RegExp("^"+ct.call(hn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ao=function(a){return!(!ge(a)||so(a))&&(Ot(a)?Vs:Pa).test(Hn(a))},Pr=function(a,e){return a==null?void 0:a[e]},Ai=function(a,e){var t=Pr(a,e);return ao(t)?t:void 0},$s=Ai(jt,"Map"),Ho=Ai(Object,"create"),Vu=function(){this.__data__=Ho?Ho(null):{},this.size=0},Pg=function(a){var e=this.has(a)&&delete this.__data__[a];return this.size-=e?1:0,e};var $u=Object.prototype.hasOwnProperty;const za=function(a){var e=this.__data__;if(Ho){var t=e[a];return t==="__lodash_hash_undefined__"?void 0:t}return $u.call(e,a)?e[a]:void 0};var Bg=Object.prototype.hasOwnProperty;const Uu=function(a){var e=this.__data__;return Ho?e[a]!==void 0:Bg.call(e,a)},Hu=function(a,e){var t=this.__data__;return this.size+=this.has(a)?0:1,t[a]=Ho&&e===void 0?"__lodash_hash_undefined__":e,this};function Wo(a){var e=-1,t=a==null?0:a.length;for(this.clear();++e<t;){var r=a[e];this.set(r[0],r[1])}}Wo.prototype.clear=Vu,Wo.prototype.delete=Pg,Wo.prototype.get=za,Wo.prototype.has=Uu,Wo.prototype.set=Hu;const Wu=Wo,Lg=function(){this.size=0,this.__data__={hash:new Wu,map:new($s||De),string:new Wu}},_l=function(a){var e=typeof a;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?a!=="__proto__":a===null},ja=function(a,e){var t=a.__data__;return _l(e)?t[typeof e=="string"?"string":"hash"]:t.map},qu=function(a){var e=ja(this,a).delete(a);return this.size-=e?1:0,e},Gu=function(a){return ja(this,a).get(a)},Yu=function(a){return ja(this,a).has(a)},Ku=function(a,e){var t=ja(this,a),r=t.size;return t.set(a,e),this.size+=t.size==r?0:1,this};function qo(a){var e=-1,t=a==null?0:a.length;for(this.clear();++e<t;){var r=a[e];this.set(r[0],r[1])}}qo.prototype.clear=Lg,qo.prototype.delete=qu,qo.prototype.get=Gu,qo.prototype.has=Yu,qo.prototype.set=Ku;const Ra=qo,Zu=function(a,e){var t=this.__data__;if(t instanceof De){var r=t.__data__;if(!$s||r.length<199)return r.push([a,e]),this.size=++t.size,this;t=this.__data__=new Ra(r)}return t.set(a,e),this.size=t.size,this};function Je(a){var e=this.__data__=new De(a);this.size=e.size}Je.prototype.clear=St,Je.prototype.delete=Dt,Je.prototype.get=si,Je.prototype.has=yi,Je.prototype.set=Zu;const Us=Je,yl=function(a,e){for(var t=-1,r=a==null?0:a.length;++t<r&&e(a[t],t,a)!==!1;);return a},Hs=function(){try{var a=Ai(Object,"defineProperty");return a({},"",{}),a}catch{}}(),co=function(a,e,t){e=="__proto__"&&Hs?Hs(a,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):a[e]=t};var Al=Object.prototype.hasOwnProperty;const Br=function(a,e,t){var r=a[e];Al.call(a,e)&&Gt(r,t)&&(t!==void 0||e in a)||co(a,e,t)},lo=function(a,e,t,r){var s=!t;t||(t={});for(var l=-1,u=e.length;++l<u;){var p=e[l],g=r?r(t[p],a[p],p,t,a):void 0;g===void 0&&(g=a[p]),s?co(t,p,g):Br(t,p,g)}return t},zg=function(a,e){for(var t=-1,r=Array(a);++t<a;)r[t]=e(t);return r},Qu=function(a){return Ht(a)&&An(a)=="[object Arguments]"};var Cl=Object.prototype,jg=Cl.hasOwnProperty,xl=Cl.propertyIsEnumerable;const El=Qu(function(){return arguments}())?Qu:function(a){return Ht(a)&&jg.call(a,"callee")&&!xl.call(a,"callee")},Rg=function(){return!1};var Ju=typeof Tn=="object"&&Tn&&!Tn.nodeType&&Tn,Sl=Ju&&typeof $t=="object"&&$t&&!$t.nodeType&&$t,Fa=Sl&&Sl.exports===Ju?jt.Buffer:void 0;const Ws=(Fa?Fa.isBuffer:void 0)||Rg;var Fg=/^(?:0|[1-9]\d*)$/;const Dl=function(a,e){var t=typeof a;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&Fg.test(a))&&a>-1&&a%1==0&&a<e},Xu=function(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=9007199254740991};var dt={};dt["[object Float32Array]"]=dt["[object Float64Array]"]=dt["[object Int8Array]"]=dt["[object Int16Array]"]=dt["[object Int32Array]"]=dt["[object Uint8Array]"]=dt["[object Uint8ClampedArray]"]=dt["[object Uint16Array]"]=dt["[object Uint32Array]"]=!0,dt["[object Arguments]"]=dt["[object Array]"]=dt["[object ArrayBuffer]"]=dt["[object Boolean]"]=dt["[object DataView]"]=dt["[object Date]"]=dt["[object Error]"]=dt["[object Function]"]=dt["[object Map]"]=dt["[object Number]"]=dt["[object Object]"]=dt["[object RegExp]"]=dt["[object Set]"]=dt["[object String]"]=dt["[object WeakMap]"]=!1;const Vg=function(a){return Ht(a)&&Xu(a.length)&&!!dt[An(a)]},Va=function(a){return function(e){return a(e)}};var Tl=typeof Tn=="object"&&Tn&&!Tn.nodeType&&Tn,Go=Tl&&typeof $t=="object"&&$t&&!$t.nodeType&&$t,$a=Go&&Go.exports===Tl&&Jt.process;const Yo=function(){try{var a=Go&&Go.require&&Go.require("util").types;return a||$a&&$a.binding&&$a.binding("util")}catch{}}();var eh=Yo&&Yo.isTypedArray;const Il=eh?Va(eh):Vg;var th=Object.prototype.hasOwnProperty;const nh=function(a,e){var t=yt(a),r=!t&&El(a),s=!t&&!r&&Ws(a),l=!t&&!r&&!s&&Il(a),u=t||r||s||l,p=u?zg(a.length,String):[],g=p.length;for(var b in a)!e&&!th.call(a,b)||u&&(b=="length"||s&&(b=="offset"||b=="parent")||l&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Dl(b,g))||p.push(b);return p};var ih=Object.prototype;const qs=function(a){var e=a&&a.constructor;return a===(typeof e=="function"&&e.prototype||ih)},$g=Wi(Object.keys,Object);var rh=Object.prototype.hasOwnProperty;const oh=function(a){if(!qs(a))return $g(a);var e=[];for(var t in Object(a))rh.call(a,t)&&t!="constructor"&&e.push(t);return e},Ua=function(a){return a!=null&&Xu(a.length)&&!Ot(a)},Ha=function(a){return Ua(a)?nh(a):oh(a)},Ug=function(a,e){return a&&lo(e,Ha(e),a)},Hg=function(a){var e=[];if(a!=null)for(var t in Object(a))e.push(t);return e};var Ml=Object.prototype.hasOwnProperty;const Nl=function(a){if(!ge(a))return Hg(a);var e=qs(a),t=[];for(var r in a)(r!="constructor"||!e&&Ml.call(a,r))&&t.push(r);return t},Lr=function(a){return Ua(a)?nh(a,!0):Nl(a)},Ol=function(a,e){return a&&lo(e,Lr(e),a)};var Pl=typeof Tn=="object"&&Tn&&!Tn.nodeType&&Tn,Bl=Pl&&typeof $t=="object"&&$t&&!$t.nodeType&&$t,Ll=Bl&&Bl.exports===Pl?jt.Buffer:void 0,zl=Ll?Ll.allocUnsafe:void 0;const jl=function(a,e){if(e)return a.slice();var t=a.length,r=zl?zl(t):new a.constructor(t);return a.copy(r),r},sh=function(a,e){var t=-1,r=a.length;for(e||(e=Array(r));++t<r;)e[t]=a[t];return e},Wg=function(a,e){for(var t=-1,r=a==null?0:a.length,s=0,l=[];++t<r;){var u=a[t];e(u,t,a)&&(l[s++]=u)}return l},ah=function(){return[]};var qg=Object.prototype.propertyIsEnumerable,ch=Object.getOwnPropertySymbols;const fr=ch?function(a){return a==null?[]:(a=Object(a),Wg(ch(a),function(e){return qg.call(a,e)}))}:ah,Rl=function(a,e){return lo(a,fr(a),e)},lh=function(a,e){for(var t=-1,r=e.length,s=a.length;++t<r;)a[s+t]=e[t];return a},dh=Object.getOwnPropertySymbols?function(a){for(var e=[];a;)lh(e,fr(a)),a=sn(a);return e}:ah,uh=function(a,e){return lo(a,dh(a),e)},Wa=function(a,e,t){var r=e(a);return yt(a)?r:lh(r,t(a))},Fl=function(a){return Wa(a,Ha,fr)},Gg=function(a){return Wa(a,Lr,dh)},Vl=Ai(jt,"DataView"),qa=Ai(jt,"Promise"),Ga=Ai(jt,"Set"),$l=Ai(jt,"WeakMap");var hh="[object Map]",fh="[object Promise]",Ul="[object Set]",ph="[object WeakMap]",gh="[object DataView]",Yg=Hn(Vl),mh=Hn($s),Kg=Hn(qa),Zg=Hn(Ga),kh=Hn($l),uo=An;(Vl&&uo(new Vl(new ArrayBuffer(1)))!=gh||$s&&uo(new $s)!=hh||qa&&uo(qa.resolve())!=fh||Ga&&uo(new Ga)!=Ul||$l&&uo(new $l)!=ph)&&(uo=function(a){var e=An(a),t=e=="[object Object]"?a.constructor:void 0,r=t?Hn(t):"";if(r)switch(r){case Yg:return gh;case mh:return hh;case Kg:return fh;case Zg:return Ul;case kh:return ph}return e});const Ko=uo;var bh=Object.prototype.hasOwnProperty;const wh=function(a){var e=a.length,t=new a.constructor(e);return e&&typeof a[0]=="string"&&bh.call(a,"index")&&(t.index=a.index,t.input=a.input),t},it=jt.Uint8Array,Hl=function(a){var e=new a.constructor(a.byteLength);return new it(e).set(new it(a)),e},Qg=function(a,e){var t=e?Hl(a.buffer):a.buffer;return new a.constructor(t,a.byteOffset,a.byteLength)};var Wl=/\w*$/;const Jg=function(a){var e=new a.constructor(a.source,Wl.exec(a));return e.lastIndex=a.lastIndex,e};var Zo=Nt?Nt.prototype:void 0,Ya=Zo?Zo.valueOf:void 0;const Xg=function(a){return Ya?Object(Ya.call(a)):{}},ql=function(a,e){var t=e?Hl(a.buffer):a.buffer;return new a.constructor(t,a.byteOffset,a.length)},Gl=function(a,e,t){var r=a.constructor;switch(e){case"[object ArrayBuffer]":return Hl(a);case"[object Boolean]":case"[object Date]":return new r(+a);case"[object DataView]":return Qg(a,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ql(a,t);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(a);case"[object RegExp]":return Jg(a);case"[object Symbol]":return Xg(a)}};var Ka=Object.create;const Yl=function(){function a(){}return function(e){if(!ge(e))return{};if(Ka)return Ka(e);a.prototype=e;var t=new a;return a.prototype=void 0,t}}(),ho=function(a){return typeof a.constructor!="function"||qs(a)?{}:Yl(sn(a))},vh=function(a){return Ht(a)&&Ko(a)=="[object Map]"};var Za=Yo&&Yo.isMap;const em=Za?Va(Za):vh,N=function(a){return Ht(a)&&Ko(a)=="[object Set]"};var O=Yo&&Yo.isSet;const V=O?Va(O):N;var K="[object Arguments]",ae="[object Function]",ve="[object Object]",he={};he[K]=he["[object Array]"]=he["[object ArrayBuffer]"]=he["[object DataView]"]=he["[object Boolean]"]=he["[object Date]"]=he["[object Float32Array]"]=he["[object Float64Array]"]=he["[object Int8Array]"]=he["[object Int16Array]"]=he["[object Int32Array]"]=he["[object Map]"]=he["[object Number]"]=he[ve]=he["[object RegExp]"]=he["[object Set]"]=he["[object String]"]=he["[object Symbol]"]=he["[object Uint8Array]"]=he["[object Uint8ClampedArray]"]=he["[object Uint16Array]"]=he["[object Uint32Array]"]=!0,he["[object Error]"]=he[ae]=he["[object WeakMap]"]=!1;const we=function a(e,t,r,s,l,u){var p,g=1&t,b=2&t,_=4&t;if(r&&(p=l?r(e,s,l,u):r(e)),p!==void 0)return p;if(!ge(e))return e;var A=yt(e);if(A){if(p=wh(e),!g)return sh(e,p)}else{var x=Ko(e),T=x==ae||x=="[object GeneratorFunction]";if(Ws(e))return jl(e,g);if(x==ve||x==K||T&&!l){if(p=b||T?{}:ho(e),!g)return b?uh(e,Ol(p,e)):Rl(e,Ug(p,e))}else{if(!he[x])return l?e:{};p=Gl(e,x,g)}}u||(u=new Us);var B=u.get(e);if(B)return B;u.set(e,p),V(e)?e.forEach(function(R){p.add(a(R,t,r,R,e,u))}):em(e)&&e.forEach(function(R,G){p.set(G,a(R,t,r,G,e,u))});var z=A?void 0:(_?b?Gg:Fl:b?Lr:Ha)(e);return yl(z||e,function(R,G){z&&(R=e[G=R]),Br(p,G,a(R,t,r,G,e,u))}),p},ze=function(a,e){return we(a,5,e=typeof e=="function"?e:void 0)},Ne=function(a){return Ht(a)&&a.nodeType===1&&!Wt(a)};class Wn{constructor(e,t){this._config={},t&&this.define(En(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,r,s=!1){if(Wt(t))return void this._setObjectToTarget(e,t,s);const l=t.split(".");t=l.pop();for(const u of l)Wt(e[u])||(e[u]={}),e=e[u];if(Wt(r))return Wt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,r,s);s&&e[t]!==void 0||(e[t]=r)}_getFromSource(e,t){const r=t.split(".");t=r.pop();for(const s of r){if(!Wt(e[s])){e=null;break}e=e[s]}return e?En(e[t]):void 0}_setObjectToTarget(e,t,r){Object.keys(t).forEach(s=>{this._setToTarget(e,s,t[s],r)})}}function En(a){return ze(a,cn)}function cn(a){return Ne(a)?a:void 0}function fn(a){if(a){if(a.defaultView)return a instanceof a.defaultView.Document;if(a.ownerDocument&&a.ownerDocument.defaultView)return a instanceof a.ownerDocument.defaultView.Node}return!1}function qi(a){const e=Object.prototype.toString.apply(a);return e=="[object Window]"||e=="[object global]"}const Ci=ft(q());function ft(a){return a?class extends a{listenTo(e,t,r,s={}){if(fn(e)||qi(e)){const l={capture:!!s.useCapture,passive:!!s.usePassive},u=this._getProxyEmitter(e,l)||new qn(e,l);this.listenTo(u,t,r,s)}else super.listenTo(e,t,r,s)}stopListening(e,t,r){if(fn(e)||qi(e)){const s=this._getAllProxyEmitters(e);for(const l of s)this.stopListening(l,t,r)}else super.stopListening(e,t,r)}_getProxyEmitter(e,t){return function(r,s){const l=r[de];return l&&l[s]?l[s].emitter:null}(this,pn(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:Ci}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(a=>{ft[a]=Ci.prototype[a]});class qn extends q(){constructor(e,t){super(),U(this,pn(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,r){this.attach(e),q().prototype._addEventListener.call(this,e,t,r)}_removeEventListener(e,t){q().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=r=>{this.fire(e,r)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function pn(a,e){let t=function(r){return r["data-ck-expando"]||(r["data-ck-expando"]=I())}(a);for(const r of Object.keys(e).sort())e[r]&&(t+="-"+r);return t}let Gn;try{Gn={window,document}}catch{Gn={window:{},document:{}}}const Ae=Gn;function Rt(a){return Object.prototype.toString.call(a)=="[object Text]"}function Qa(a){return Object.prototype.toString.apply(a)=="[object Range]"}function _h(a){const e=a.ownerDocument.defaultView.getComputedStyle(a);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function yh(a){return a&&a.parentNode?a.offsetParent===Ae.document.body?null:a.offsetParent:null}const Ah=["top","right","bottom","left","width","height"];class je{constructor(e){const t=Qa(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Fe(e)||t)if(t){const r=je.getDomRangeRects(e);Oe(this,je.getBoundingRect(r))}else Oe(this,e.getBoundingClientRect());else if(qi(e)){const{innerWidth:r,innerHeight:s}=e;Oe(this,{top:0,right:r,bottom:s,left:0,width:r,height:s})}else Oe(this,e)}clone(){return new je(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const r=new je(t);return r._source=this._source,r}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(pt(e))return t;let r,s=e,l=e.parentNode||e.commonAncestorContainer;for(;l&&!pt(l);){const p=((u=l)instanceof HTMLElement?u.ownerDocument.defaultView.getComputedStyle(u).overflow:"visible")==="visible";s instanceof HTMLElement&&xi(s)==="absolute"&&(r=s);const g=xi(l);if(p||r&&(g==="relative"&&p||g!=="relative")){s=l,l=l.parentNode;continue}const b=new je(l),_=t.getIntersection(b);if(!_)return null;_.getArea()<t.getArea()&&(t=_),s=l,l=l.parentNode}var u;return t}isEqual(e){for(const t of Ah)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=Ae.window,r=this.clone().moveBy(e,t);if(Fe(r._source)){const s=yh(r._source);s&&function(l,u){const p=new je(u),g=_h(u);let b=0,_=0;b-=p.left,_-=p.top,b+=u.scrollLeft,_+=u.scrollTop,b-=g.left,_-=g.top,l.moveBy(b,_)}(r,s)}return r}excludeScrollbarsAndBorders(){const e=this._source;let t,r,s;if(qi(e))t=e.innerWidth-e.document.documentElement.clientWidth,r=e.innerHeight-e.document.documentElement.clientHeight,s=e.getComputedStyle(e.document.documentElement).direction;else{const l=_h(e);t=e.offsetWidth-e.clientWidth-l.left-l.right,r=e.offsetHeight-e.clientHeight-l.top-l.bottom,s=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=l.left,this.top+=l.top,this.right-=l.right,this.bottom-=l.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,s==="ltr"?this.right-=t:this.left+=t,this.height-=r,this.bottom-=r,this}static getDomRangeRects(e){const t=[],r=Array.from(e.getClientRects());if(r.length)for(const s of r)t.push(new je(s));else{let s=e.startContainer;Rt(s)&&(s=s.parentNode);const l=new je(s.getBoundingClientRect());l.right=l.left,l.width=0,t.push(l)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let r=0;for(const s of e)r++,t.left=Math.min(t.left,s.left),t.top=Math.min(t.top,s.top),t.right=Math.max(t.right,s.right),t.bottom=Math.max(t.bottom,s.bottom);return r==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new je(t))}}function Oe(a,e){for(const t of Ah)a[t]=e[t]}function pt(a){return!!Fe(a)&&a===a.ownerDocument.body}function Fe(a){return a!==null&&typeof a=="object"&&a.nodeType===1&&typeof a.getBoundingClientRect=="function"}function xi(a){return a instanceof HTMLElement?a.ownerDocument.defaultView.getComputedStyle(a).position:"static"}class Ve{constructor(e,t){Ve._observerInstance||Ve._createObserver(),this._element=e,this._callback=t,Ve._addElementCallback(e,t),Ve._observerInstance.observe(e)}get element(){return this._element}destroy(){Ve._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){Ve._elementCallbacks||(Ve._elementCallbacks=new Map);let r=Ve._elementCallbacks.get(e);r||(r=new Set,Ve._elementCallbacks.set(e,r)),r.add(t)}static _deleteElementCallback(e,t){const r=Ve._getElementCallbacks(e);r&&(r.delete(t),r.size||(Ve._elementCallbacks.delete(e),Ve._observerInstance.unobserve(e))),Ve._elementCallbacks&&!Ve._elementCallbacks.size&&(Ve._observerInstance=null,Ve._elementCallbacks=null)}static _getElementCallbacks(e){return Ve._elementCallbacks?Ve._elementCallbacks.get(e):null}static _createObserver(){Ve._observerInstance=new Ae.window.ResizeObserver(e=>{for(const t of e){const r=Ve._getElementCallbacks(t.target);if(r)for(const s of r)s(t)}})}}function pr(a,e){a instanceof HTMLTextAreaElement&&(a.value=e),a.innerHTML=e}function Bn(a){return e=>e+a}function Yn(a){let e=0;for(;a.previousSibling;)a=a.previousSibling,e++;return e}function gn(a,e,t){a.insertBefore(t,a.childNodes[e]||null)}function Ln(a){return a&&a.nodeType===Node.COMMENT_NODE}function Yt(a){return!!(a&&a.getClientRects&&a.getClientRects().length)}function At({element:a,target:e,positions:t,limiter:r,fitInViewport:s,viewportOffsetConfig:l}){Ot(e)&&(e=e()),Ot(r)&&(r=r());const u=yh(a),p=function(x){x=Object.assign({top:0,bottom:0,left:0,right:0},x);const T=new je(Ae.window);return T.top+=x.top,T.height-=x.top,T.bottom-=x.bottom,T.height-=x.bottom,T}(l),g=new je(a),b=ln(e,p);let _;if(!b||!p.getIntersection(b))return null;const A={targetRect:b,elementRect:g,positionedElementAncestor:u,viewportRect:p};if(r||s){if(r){const x=ln(r,p);x&&(A.limiterRect=x)}_=function(x,T){const{elementRect:B}=T,z=B.getArea(),R=x.map(le=>new fo(le,T)).filter(le=>!!le.name);let G=0,te=null;for(const le of R){const{limiterIntersectionArea:xe,viewportIntersectionArea:He}=le;if(xe===z)return le;const hi=He**2+xe**2;hi>G&&(G=hi,te=le)}return te}(t,A)}else _=new fo(t[0],A);return _}function ln(a,e){const t=new je(a).getVisible();return t?t.getIntersection(e):null}Ve._observerInstance=null,Ve._elementCallbacks=null;class fo{constructor(e,t){const r=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!r)return;const{left:s,top:l,name:u,config:p}=r;this.name=u,this.config=p,this._positioningFunctionCoordinates={left:s,top:l},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Tv(a){const e=a.parentNode;e&&e.removeChild(a)}function TI({window:a,rect:e,alignToTop:t,forceScroll:r,viewportOffset:s}){const l=e.clone().moveBy(0,s.bottom),u=e.clone().moveBy(0,-s.top),p=new je(a).excludeScrollbarsAndBorders(),g=t&&r,b=[u,l].every(B=>p.contains(B));let{scrollX:_,scrollY:A}=a;const x=_,T=A;g?A-=p.top-e.top+s.top:b||(Mv(u,p)?A-=p.top-e.top+s.top:Iv(l,p)&&(A+=t?e.top-p.top-s.top:e.bottom-p.bottom+s.bottom)),b||(Nv(e,p)?_-=p.left-e.left+s.left:Ov(e,p)&&(_+=e.right-p.right+s.right)),_==x&&A===T||a.scrollTo(_,A)}function II({parent:a,getRect:e,alignToTop:t,forceScroll:r,ancestorOffset:s=0,limiterElement:l}){const u=tm(a),p=t&&r;let g,b,_;const A=l||u.document.body;for(;a!=A;)b=e(),g=new je(a).excludeScrollbarsAndBorders(),_=g.contains(b),p?a.scrollTop-=g.top-b.top+s:_||(Mv(b,g)?a.scrollTop-=g.top-b.top+s:Iv(b,g)&&(a.scrollTop+=t?b.top-g.top-s:b.bottom-g.bottom+s)),_||(Nv(b,g)?a.scrollLeft-=g.left-b.left+s:Ov(b,g)&&(a.scrollLeft+=b.right-g.right+s)),a=a.parentNode}function Iv(a,e){return a.bottom>e.bottom}function Mv(a,e){return a.top<e.top}function Nv(a,e){return a.left<e.left}function Ov(a,e){return a.right>e.right}function tm(a){return Qa(a)?a.startContainer.ownerDocument.defaultView:a.ownerDocument.defaultView}function MI(a){if(Qa(a)){let e=a.commonAncestorContainer;return Rt(e)&&(e=e.parentNode),e}return a.parentNode}function Pv(a,e){const t=tm(a),r=new je(a);if(t===e)return r;{let s=t;for(;s!=e;){const l=s.frameElement,u=new je(l).excludeScrollbarsAndBorders();r.moveBy(u.left,u.top),s=s.parent}}return r}const NI={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},OI={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Ge=function(){const a={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)a[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)a[e-48]=e;for(let e=112;e<=123;e++)a["f"+(e-111)]=e;for(const e of"`-=[];',./\\")a[e]=e.charCodeAt(0);return a}(),PI=Object.fromEntries(Object.entries(Ge).map(([a,e])=>[e,a.charAt(0).toUpperCase()+a.slice(1)]));function Ja(a){let e;if(typeof a=="string"){if(e=Ge[a.toLowerCase()],!e)throw new S("keyboard-unknown-key",null,{key:a})}else e=a.keyCode+(a.altKey?Ge.alt:0)+(a.ctrlKey?Ge.ctrl:0)+(a.shiftKey?Ge.shift:0)+(a.metaKey?Ge.cmd:0);return e}function Kl(a){return typeof a=="string"&&(a=function(e){return e.split("+").map(t=>t.trim())}(a)),a.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Ja(t.slice(0,-1));const r=Ja(t);return(f.isMac||f.isiOS)&&r==Ge.ctrl?Ge.cmd:r}(e):e).reduce((e,t)=>t+e,0)}function Bv(a){let e=Kl(a);return Object.entries(f.isMac||f.isiOS?NI:OI).reduce((t,[r,s])=>(e&Ge[r]&&(e&=~Ge[r],t+=s),t),"")+(e?PI[e]:"")}function Lv(a,e){const t=e==="ltr";switch(a){case Ge.arrowleft:return t?"left":"right";case Ge.arrowright:return t?"right":"left";case Ge.arrowup:return"up";case Ge.arrowdown:return"down"}}function mn(a){return Array.isArray(a)?a:[a]}function BI(a,e,t=1){if(typeof t!="number")throw new S("translation-service-quantity-not-a-number",null,{quantity:t});const r=Object.keys(Ae.window.CKEDITOR_TRANSLATIONS).length;r===1&&(a=Object.keys(Ae.window.CKEDITOR_TRANSLATIONS)[0]);const s=e.id||e.string;if(r===0||!function(g,b){return!!Ae.window.CKEDITOR_TRANSLATIONS[g]&&!!Ae.window.CKEDITOR_TRANSLATIONS[g].dictionary[b]}(a,s))return t!==1?e.plural:e.string;const l=Ae.window.CKEDITOR_TRANSLATIONS[a].dictionary,u=Ae.window.CKEDITOR_TRANSLATIONS[a].getPluralForm||(g=>g===1?0:1),p=l[s];return typeof p=="string"?p:p[Number(u(t))]}Ae.window.CKEDITOR_TRANSLATIONS||(Ae.window.CKEDITOR_TRANSLATIONS={});const LI=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function zv(a){return LI.includes(a)?"rtl":"ltr"}class zI{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=zv(this.uiLanguage),this.contentLanguageDirection=zv(this.contentLanguage),this.t=(r,s)=>this._t(r,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=mn(t),typeof e=="string"&&(e={string:e});const r=e.plural?t[0]:1;return function(s,l){return s.replace(/%(\d+)/g,(u,p)=>p<l.length?l[p]:u)}(BI(this.uiLanguage,e,r),t)}}class Gi extends q(){constructor(e={},t={}){super();const r=Mt(e);if(r||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],r)for(const s of e)this._items.push(s),this._itemMap.set(this._getItemIdBeforeAdding(s),s)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new S("collection-add-item-invalid-index",this);let r=0;for(const s of e){const l=this._getItemIdBeforeAdding(s),u=t+r;this._items.splice(u,0,s),this._itemMap.set(l,s),this.fire("add",s,u),r++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new S("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,r]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:r}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new S("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(r=>new t(r))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(r=>r[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,r=(s,l,u)=>{const p=t._bindToCollection==this,g=t._bindToInternalToExternalMap.get(l);if(p&&g)this._bindToExternalToInternalMap.set(l,g),this._bindToInternalToExternalMap.set(g,l);else{const b=e(l);if(!b)return void this._skippedIndexesFromExternal.push(u);let _=u;for(const A of this._skippedIndexesFromExternal)u>A&&_--;for(const A of t._skippedIndexesFromExternal)_>=A&&_++;this._bindToExternalToInternalMap.set(l,b),this._bindToInternalToExternalMap.set(b,l),this.add(b,_);for(let A=0;A<t._skippedIndexesFromExternal.length;A++)_<=t._skippedIndexesFromExternal[A]&&t._skippedIndexesFromExternal[A]++}};for(const s of t)r(0,s,t.getIndex(s));this.listenTo(t,"add",r),this.listenTo(t,"remove",(s,l,u)=>{const p=this._bindToExternalToInternalMap.get(l);p&&this.remove(p),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((g,b)=>(u<b&&g.push(b-1),u>b&&g.push(b),g),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let r;if(t in e){if(r=e[t],typeof r!="string")throw new S("collection-add-invalid-id",this);if(this.get(r))throw new S("collection-add-item-already-exists",this)}else e[t]=r=I();return r}_remove(e){let t,r,s,l=!1;const u=this._idProperty;if(typeof e=="string"?(r=e,s=this._itemMap.get(r),l=!s,s&&(t=this._items.indexOf(s))):typeof e=="number"?(t=e,s=this._items[t],l=!s,s&&(r=s[u])):(s=e,r=s[u],t=this._items.indexOf(s),l=t==-1||!this._itemMap.get(r)),l)throw new S("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(r);const p=this._bindToInternalToExternalMap.get(s);return this._bindToInternalToExternalMap.delete(s),this._bindToExternalToInternalMap.delete(p),this.fire("remove",s,t),[s,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function kn(a){const e=a.next();return e.done?null:e.value}class ai extends ft(Me()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new S("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class gr{constructor(){this._listener=new(ft())}listenTo(e){this._listener.listenTo(e,"keydown",(t,r)=>{this._listener.fire("_keydown:"+Ja(r),r)})}set(e,t,r={}){const s=Kl(e),l=r.priority;this._listener.listenTo(this._listener,"_keydown:"+s,(u,p)=>{t(p,()=>{p.preventDefault(),p.stopPropagation(),u.stop()}),u.return=!0},{priority:l})}press(e){return!!this._listener.fire("_keydown:"+Ja(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function zr(a){return Mt(a)?new Map(a):function(e){const t=new Map;for(const r in e)t.set(r,e[r]);return t}(a)}function nm(a,e){let t;function r(...s){r.cancel(),t=setTimeout(()=>a(...s),e)}return r.cancel=()=>{clearTimeout(t)},r}function im(a,e){return!!(t=a.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(r){return!!r&&r.length==1&&/[\udc00-\udfff]/.test(r)}(a.charAt(e));var t}function rm(a,e){return!!(t=a.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const jI=function(){const a=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${a}|${e}(?:‍${e})*`,"ug")}();function jv(a,e){const t=String(a).matchAll(jI);return Array.from(t).some(r=>r.index<e&&e<r.index+r[0].length)}class ue extends Me(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Rv,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Rv),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Rv(a){a.return=!1,a.stop()}class bt extends Me(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const r=e.model.document.selection,s=r.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(r);(e.isReadOnly||this._isEnabledBasedOnSelection&&!s)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Fv,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Fv),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Fv(a){a.return=!1,a.stop()}class Vv extends bt{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){P(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class $v extends q(){constructor(e,t=[],r=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const s of t)s.pluginName&&this._availablePlugins.set(s.pluginName,s);this._contextPlugins=new Map;for(const[s,l]of r)this._contextPlugins.set(s,l),this._contextPlugins.set(l,s),s.pluginName&&this._availablePlugins.set(s.pluginName,s)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let r=e;throw typeof e=="function"&&(r=e.pluginName||e.name),new S("plugincollection-plugin-not-loaded",this._context,{plugin:r})}return t}has(e){return this._plugins.has(e)}init(e,t=[],r=[]){const s=this,l=this._context;(function B(z,R=new Set){z.forEach(G=>{g(G)&&(R.has(G)||(R.add(G),G.pluginName&&!s._availablePlugins.has(G.pluginName)&&s._availablePlugins.set(G.pluginName,G),G.requires&&B(G.requires,R)))})})(e),x(e);const u=[...function B(z,R=new Set){return z.map(G=>g(G)?G:s._availablePlugins.get(G)).reduce((G,te)=>R.has(te)?G:(R.add(te),te.requires&&(x(te.requires,te),B(te.requires,R).forEach(le=>G.add(le))),G.add(te)),new Set)}(e.filter(B=>!_(B,t)))];(function(B,z){for(const R of z){if(typeof R!="function")throw new S("plugincollection-replace-plugin-invalid-type",null,{pluginItem:R});const G=R.pluginName;if(!G)throw new S("plugincollection-replace-plugin-missing-name",null,{pluginItem:R});if(R.requires&&R.requires.length)throw new S("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:G});const te=s._availablePlugins.get(G);if(!te)throw new S("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:G});const le=B.indexOf(te);if(le===-1){if(s._contextPlugins.has(te))return;throw new S("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:G})}if(te.requires&&te.requires.length)throw new S("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:G});B.splice(le,1,R),s._availablePlugins.set(G,R)}})(u,r);const p=function(B){return B.map(z=>{let R=s._contextPlugins.get(z);return R=R||new z(l),s._add(z,R),R})}(u);return T(p,"init").then(()=>T(p,"afterInit")).then(()=>p);function g(B){return typeof B=="function"}function b(B){return g(B)&&!!B.isContextPlugin}function _(B,z){return z.some(R=>R===B||A(B)===R||A(R)===B)}function A(B){return g(B)?B.pluginName||B.name:B}function x(B,z=null){B.map(R=>g(R)?R:s._availablePlugins.get(R)||R).forEach(R=>{(function(G,te){if(!g(G))throw te?new S("plugincollection-soft-required",l,{missingPlugin:G,requiredBy:A(te)}):new S("plugincollection-plugin-not-found",l,{plugin:G})})(R,z),function(G,te){if(b(te)&&!b(G))throw new S("plugincollection-context-required",l,{plugin:A(G),requiredBy:A(te)})}(R,z),function(G,te){if(te&&_(G,t))throw new S("plugincollection-required",l,{plugin:A(G),requiredBy:A(te)})}(R,z)})}function T(B,z){return B.reduce((R,G)=>G[z]?s._contextPlugins.has(G)?R:R.then(G[z].bind(G)):R,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const r=e.pluginName;if(r){if(this._plugins.has(r))throw new S("plugincollection-plugin-name-conflict",null,{pluginName:r,plugin1:this._plugins.get(r).constructor,plugin2:e});this._plugins.set(r,t)}}}class Uv{constructor(e){this._contextOwner=null,this.config=new Wn(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new $v(this,t);const r=this.config.get("language")||{};this.locale=new zI({uiLanguage:typeof r=="string"?r:r.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Gi}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const r of e.concat(t)){if(typeof r!="function")throw new S("context-initplugins-constructor-only",null,{Plugin:r});if(r.isContextPlugin!==!0)throw new S("context-initplugins-invalid-plugin",null,{Plugin:r})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new S("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const r=new this(e);t(r.initPlugins().then(()=>r))})}}class Hv extends Me(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var RI=o(3379),ye=o.n(RI),Wv=o(7372),FI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Wv.Z,FI),Wv.Z.locals;const Ch=new WeakMap;let qv=!1;function Gv({view:a,element:e,text:t,isDirectHost:r=!0,keepOnFocus:s=!1}){const l=a.document;function u(p){Ch.get(l).set(e,{text:p,isDirectHost:r,keepOnFocus:s,hostElement:r?e:null}),a.change(g=>om(l,g))}Ch.has(l)||(Ch.set(l,new Map),l.registerPostFixer(p=>om(l,p)),l.on("change:isComposing",()=>{a.change(p=>om(l,p))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(p,g,b)=>{u(b)}),e.placeholder?u(e.placeholder):t&&u(t),t&&function(){qv||$("enableplaceholder-deprecated-text-option"),qv=!0}()}function VI(a,e){return!!e.hasClass("ck-placeholder")&&(a.removeClass("ck-placeholder",e),!0)}function om(a,e){const t=Ch.get(a),r=[];let s=!1;for(const[l,u]of t)u.isDirectHost&&(r.push(l),Yv(e,l,u)&&(s=!0));for(const[l,u]of t){if(u.isDirectHost)continue;const p=$I(l);p&&(r.includes(p)||(u.hostElement=p,Yv(e,l,u)&&(s=!0)))}return s}function Yv(a,e,t){const{text:r,isDirectHost:s,hostElement:l}=t;let u=!1;return l.getAttribute("data-placeholder")!==r&&(a.setAttribute("data-placeholder",r,l),u=!0),(s||e.childCount==1)&&function(p,g){if(!p.isAttached()||Array.from(p.getChildren()).some(x=>!x.is("uiElement")))return!1;const _=p.document,A=_.selection.anchor;return!(_.isComposing&&A&&A.parent===p||!g&&_.isFocused&&(!A||A.parent===p))}(l,t.keepOnFocus)?function(p,g){return!g.hasClass("ck-placeholder")&&(p.addClass("ck-placeholder",g),!0)}(a,l)&&(u=!0):VI(a,l)&&(u=!0),u}function $I(a){if(a.childCount){const e=a.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Gs{is(){throw new Error("is() method is abstract")}}const Kv=function(a){return we(a,4)};class Ys extends q(Gs){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new S("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let r=e.includeSelf?this:this.parent;for(;r;)t[e.parentFirst?"push":"unshift"](r),r=r.parent;return t}getCommonAncestor(e,t={}){const r=this.getAncestors(t),s=e.getAncestors(t);let l=0;for(;r[l]==s[l]&&r[l];)l++;return l===0?null:r[l-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),r=e.getPath(),s=lt(t,r);switch(s){case"prefix":return!0;case"extension":return!1;default:return t[s]<r[s]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Kv(this);return delete e.parent,e}}Ys.prototype.is=function(a){return a==="node"||a==="view:node"};class gt extends Ys{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof gt&&(this===e||this.data===e.data)}_clone(){return new gt(this.document,this.data)}}gt.prototype.is=function(a){return a==="$text"||a==="view:$text"||a==="text"||a==="view:text"||a==="node"||a==="view:node"};class jr extends Gs{constructor(e,t,r){if(super(),this.textNode=e,t<0||t>e.data.length)throw new S("view-textproxy-wrong-offsetintext",this);if(r<0||t+r>e.data.length)throw new S("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+r),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let r=e.includeSelf?this.textNode:this.parent;for(;r!==null;)t[e.parentFirst?"push":"unshift"](r),r=r.parent;return t}}jr.prototype.is=function(a){return a==="$textProxy"||a==="view:$textProxy"||a==="textProxy"||a==="view:textProxy"};class Yi{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const r of this._patterns){const s=Zv(t,r);if(s)return{element:t,pattern:r,match:s}}return null}matchAll(...e){const t=[];for(const r of e)for(const s of this._patterns){const l=Zv(r,s);l&&t.push({element:r,pattern:s,match:l})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Zv(a,e){if(typeof e=="function")return e(a);const t={};return e.name&&(t.name=function(r,s){return r instanceof RegExp?!!s.match(r):r===s}(e.name,a.name),!t.name)||e.attributes&&(t.attributes=function(r,s){const l=new Set(s.getAttributeKeys());return Wt(r)?(r.style!==void 0&&$("matcher-pattern-deprecated-attributes-style-key",r),r.class!==void 0&&$("matcher-pattern-deprecated-attributes-class-key",r)):(l.delete("style"),l.delete("class")),sm(r,l,u=>s.getAttribute(u))}(e.attributes,a),!t.attributes)||e.classes&&(t.classes=function(r,s){return sm(r,s.getClassNames(),()=>{})}(e.classes,a),!t.classes)||e.styles&&(t.styles=function(r,s){return sm(r,s.getStyleNames(!0),l=>s.getStyle(l))}(e.styles,a),!t.styles)?null:t}function sm(a,e,t){const r=function(u){return Array.isArray(u)?u.map(p=>Wt(p)?(p.key!==void 0&&p.value!==void 0||$("matcher-pattern-missing-key-or-value",p),[p.key,p.value]):[p,!0]):Wt(u)?Object.entries(u):[[u,!0]]}(a),s=Array.from(e),l=[];if(r.forEach(([u,p])=>{s.forEach(g=>{(function(b,_){return b===!0||b===_||b instanceof RegExp&&_.match(b)})(u,g)&&function(b,_,A){if(b===!0)return!0;const x=A(_);return b===x||b instanceof RegExp&&!!String(x).match(b)}(p,g,t)&&l.push(g)})}),r.length&&!(l.length<r.length))return l}const xh=function(a){return typeof a=="symbol"||Ht(a)&&An(a)=="[object Symbol]"};var UI=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,HI=/^\w*$/;const WI=function(a,e){if(yt(a))return!1;var t=typeof a;return!(t!="number"&&t!="symbol"&&t!="boolean"&&a!=null&&!xh(a))||HI.test(a)||!UI.test(a)||e!=null&&a in Object(e)};function am(a,e){if(typeof a!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var r=arguments,s=e?e.apply(this,r):r[0],l=t.cache;if(l.has(s))return l.get(s);var u=a.apply(this,r);return t.cache=l.set(s,u)||l,u};return t.cache=new(am.Cache||Ra),t}am.Cache=Ra;const qI=am,GI=function(a){var e=qI(a,function(r){return t.size===500&&t.clear(),r}),t=e.cache;return e};var YI=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,KI=/\\(\\)?/g,ZI=GI(function(a){var e=[];return a.charCodeAt(0)===46&&e.push(""),a.replace(YI,function(t,r,s,l){e.push(s?l.replace(KI,"$1"):r||t)}),e});const QI=ZI,JI=function(a,e){for(var t=-1,r=a==null?0:a.length,s=Array(r);++t<r;)s[t]=e(a[t],t,a);return s};var Qv=Nt?Nt.prototype:void 0,Jv=Qv?Qv.toString:void 0;const XI=function a(e){if(typeof e=="string")return e;if(yt(e))return JI(e,a)+"";if(xh(e))return Jv?Jv.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},cm=function(a){return a==null?"":XI(a)},lm=function(a,e){return yt(a)?a:WI(a,e)?[a]:QI(cm(a))},e3=function(a){var e=a==null?0:a.length;return e?a[e-1]:void 0},dm=function(a){if(typeof a=="string"||xh(a))return a;var e=a+"";return e=="0"&&1/a==-1/0?"-0":e},Xv=function(a,e){for(var t=0,r=(e=lm(e,a)).length;a!=null&&t<r;)a=a[dm(e[t++])];return t&&t==r?a:void 0},e_=function(a,e,t){var r=-1,s=a.length;e<0&&(e=-e>s?0:s+e),(t=t>s?s:t)<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var l=Array(s);++r<s;)l[r]=a[r+e];return l},t3=function(a,e){return e.length<2?a:Xv(a,e_(e,0,-1))},n3=function(a,e){return e=lm(e,a),(a=t3(a,e))==null||delete a[dm(e3(e))]},i3=function(a,e){return a==null||n3(a,e)},Eh=function(a,e,t){var r=a==null?void 0:Xv(a,e);return r===void 0?t:r},um=function(a,e,t){(t!==void 0&&!Gt(a[e],t)||t===void 0&&!(e in a))&&co(a,e,t)},r3=function(a){return function(e,t,r){for(var s=-1,l=Object(e),u=r(e),p=u.length;p--;){var g=u[a?p:++s];if(t(l[g],g,l)===!1)break}return e}}(),o3=function(a){return Ht(a)&&Ua(a)},hm=function(a,e){if((e!=="constructor"||typeof a[e]!="function")&&e!="__proto__")return a[e]},s3=function(a){return lo(a,Lr(a))},a3=function(a,e,t,r,s,l,u){var p=hm(a,t),g=hm(e,t),b=u.get(g);if(b)um(a,t,b);else{var _=l?l(p,g,t+"",a,e,u):void 0,A=_===void 0;if(A){var x=yt(g),T=!x&&Ws(g),B=!x&&!T&&Il(g);_=g,x||T||B?yt(p)?_=p:o3(p)?_=sh(p):T?(A=!1,_=jl(g,!0)):B?(A=!1,_=ql(g,!0)):_=[]:Wt(g)||El(g)?(_=p,El(p)?_=s3(p):ge(p)&&!Ot(p)||(_=ho(g))):A=!1}A&&(u.set(g,_),s(_,g,r,l,u),u.delete(g)),um(a,t,_)}},c3=function a(e,t,r,s,l){e!==t&&r3(t,function(u,p){if(l||(l=new Us),ge(u))a3(e,t,p,r,a,s,l);else{var g=s?s(hm(e,p),u,p+"",e,t,l):void 0;g===void 0&&(g=u),um(e,p,g)}},Lr)},Ks=function(a){return a},l3=function(a,e,t){switch(t.length){case 0:return a.call(e);case 1:return a.call(e,t[0]);case 2:return a.call(e,t[0],t[1]);case 3:return a.call(e,t[0],t[1],t[2])}return a.apply(e,t)};var t_=Math.max;const d3=function(a,e,t){return e=t_(e===void 0?a.length-1:e,0),function(){for(var r=arguments,s=-1,l=t_(r.length-e,0),u=Array(l);++s<l;)u[s]=r[e+s];s=-1;for(var p=Array(e+1);++s<e;)p[s]=r[s];return p[e]=t(u),l3(a,this,p)}},u3=function(a){return function(){return a}},h3=Hs?function(a,e){return Hs(a,"toString",{configurable:!0,enumerable:!1,value:u3(e),writable:!0})}:Ks;var f3=Date.now;const p3=function(a){var e=0,t=0;return function(){var r=f3(),s=16-(r-t);if(t=r,s>0){if(++e>=800)return arguments[0]}else e=0;return a.apply(void 0,arguments)}}(h3),g3=function(a,e){return p3(d3(a,e,Ks),a+"")},m3=function(a,e,t){if(!ge(t))return!1;var r=typeof e;return!!(r=="number"?Ua(t)&&Dl(e,t.length):r=="string"&&e in t)&&Gt(t[e],a)},n_=function(a){return g3(function(e,t){var r=-1,s=t.length,l=s>1?t[s-1]:void 0,u=s>2?t[2]:void 0;for(l=a.length>3&&typeof l=="function"?(s--,l):void 0,u&&m3(t[0],t[1],u)&&(l=s<3?void 0:l,s=1),e=Object(e);++r<s;){var p=t[r];p&&a(e,p,r,l)}return e})},i_=n_(function(a,e,t){c3(a,e,t)}),k3=function(a,e,t,r){if(!ge(a))return a;for(var s=-1,l=(e=lm(e,a)).length,u=l-1,p=a;p!=null&&++s<l;){var g=dm(e[s]),b=t;if(g==="__proto__"||g==="constructor"||g==="prototype")return a;if(s!=u){var _=p[g];(b=r?r(_,g,p):void 0)===void 0&&(b=ge(_)?_:Dl(e[s+1])?[]:{})}Br(p,g,b),p=p[g]}return a},b3=function(a,e,t){return a==null?a:k3(a,e,t)};class w3{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(r){let s=null,l=0,u=0,p=null;const g=new Map;if(r==="")return g;r.charAt(r.length-1)!=";"&&(r+=";");for(let b=0;b<r.length;b++){const _=r.charAt(b);if(s===null)switch(_){case":":p||(p=r.substr(l,b-l),u=b+1);break;case'"':case"'":s=_;break;case";":{const A=r.substr(u,b-u);p&&g.set(p.trim(),A.trim()),p=null,l=b+1;break}}else _===s&&(s=null)}return g}(e).entries());for(const[r,s]of t)this._styleProcessor.toNormalizedForm(r,s,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([r])=>r===e);return Array.isArray(t)}set(e,t){if(ge(e))for(const[r,s]of Object.entries(e))this._styleProcessor.toNormalizedForm(r,s,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=fm(e);i3(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!ge(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([r])=>r===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const r of t)e.push(...this._styleProcessor.getReducedForm(r,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const r=t.splice(0,t.length-1).join("."),s=Eh(this._styles,r);s&&!Array.from(Object.keys(s)).length&&this.remove(r)}}class v3{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,r){if(ge(t))pm(r,fm(e),t);else if(this._normalizers.has(e)){const s=this._normalizers.get(e),{path:l,value:u}=s(t);pm(r,l,u)}else pm(r,e,t)}getNormalized(e,t){if(!e)return i_({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const r=this._extractors.get(e);if(typeof r=="string")return Eh(t,r);const s=r(e,t);if(s)return s}return Eh(t,fm(e))}getReducedForm(e,t){const r=this.getNormalized(e,t);return r===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(r):[[e,r]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(s=>{const l=this.getNormalized(s,e);return l&&typeof l=="object"?Object.keys(l).length:l}),r=new Set([...t,...Object.keys(e)]);return Array.from(r.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const r of t)this._mapStyleNames(r,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function fm(a){return a.replace("-",".")}function pm(a,e,t){let r=t;ge(t)&&(r=i_({},Eh(a,e),t)),b3(a,e,r)}class Ei extends Ys{constructor(e,t,r,s){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(l){const u=zr(l);for(const[p,g]of u)g===null?u.delete(p):typeof g!="string"&&u.set(p,String(g));return u}(r),this._children=[],s&&this._insertChild(0,s),this._classes=new Set,this._attrs.has("class")){const l=this._attrs.get("class");r_(this._classes,l),this._attrs.delete("class")}this._styles=new w3(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Ei))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,r]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==r)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Yi(...e);let r=this.parent;for(;r&&!r.is("documentFragment");){if(t.match(r))return r;r=r.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),r=Array.from(this._attrs).map(s=>`${s[0]}="${s[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(r==""?"":` ${r}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const s of this.getChildren())t.push(s._clone(e));const r=new this.constructor(this.document,this.name,this._attrs,t);return r._classes=new Set(this._classes),r._styles.set(this._styles.getNormalized()),r._customProperties=new Map(this._customProperties),r.getFillerOffset=this.getFillerOffset,r._unsafeAttributesToRender=this._unsafeAttributesToRender,r}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let r=0;const s=function(l,u){return typeof u=="string"?[new gt(l,u)]:(Mt(u)||(u=[u]),Array.from(u).map(p=>typeof p=="string"?new gt(l,p):p instanceof jr?new gt(l,p.data):p))}(this.document,t);for(const l of s)l.parent!==null&&l._remove(),l.parent=this,l.document=this.document,this._children.splice(e,0,l),e++,r++;return r}_removeChildren(e,t=1){this._fireChange("children",this);for(let r=e;r<e+t;r++)this._children[r].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const r=String(t);this._fireChange("attributes",this),e=="class"?r_(this._classes,r):e=="style"?this._styles.setTo(r):this._attrs.set(e,r)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of mn(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of mn(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of mn(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function r_(a,e){const t=e.split(/\s+/);a.clear(),t.forEach(r=>a.add(r))}Ei.prototype.is=function(a,e){return e?e===this.name&&(a==="element"||a==="view:element"):a==="element"||a==="view:element"||a==="node"||a==="view:node"};class Zl extends Ei{constructor(e,t,r,s){super(e,t,r,s),this.getFillerOffset=o_}}function o_(){const a=[...this.getChildren()],e=a[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of a)if(!t.is("uiElement"))return null;return this.childCount}Zl.prototype.is=function(a,e){return e?e===this.name&&(a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"):a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class Sh extends Me(Zl){constructor(e,t,r,s){super(e,t,r,s),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",l=>l&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Sh.prototype.is=function(a,e){return e?e===this.name&&(a==="editableElement"||a==="view:editableElement"||a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"):a==="editableElement"||a==="view:editableElement"||a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};const s_=Symbol("rootName");class a_ extends Sh{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(s_)}set rootName(e){this._setCustomProperty(s_,e)}set _name(e){this.name=e}}a_.prototype.is=function(a,e){return e?e===this.name&&(a==="rootElement"||a==="view:rootElement"||a==="editableElement"||a==="view:editableElement"||a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"):a==="rootElement"||a==="view:rootElement"||a==="editableElement"||a==="view:editableElement"||a==="containerElement"||a==="view:containerElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class Zs{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new S("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new S("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=me._createAt(e.startPosition):this._position=me._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,r;do r=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,r=e.parent;if(r.parent===null&&e.offset===r.childCount)return{done:!0,value:void 0};if(r===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let s;if(r instanceof gt){if(e.isAtEnd)return this._position=me._createAfter(r),this._next();s=r.data[e.offset]}else s=r.getChild(e.offset);if(s instanceof Ei){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new me(s,0);return this._position=e,this._formatReturnValue("elementStart",s,t,e,1)}if(s instanceof gt){if(this.singleCharacters)return e=new me(s,0),this._position=e,this._next();let l,u=s.data.length;return s==this._boundaryEndParent?(u=this.boundaries.end.offset,l=new jr(s,0,u),e=me._createAfter(l)):(l=new jr(s,0,s.data.length),e.offset++),this._position=e,this._formatReturnValue("text",l,t,e,u)}if(typeof s=="string"){let l;this.singleCharacters?l=1:l=(r===this._boundaryEndParent?this.boundaries.end.offset:r.data.length)-e.offset;const u=new jr(r,e.offset,l);return e.offset+=l,this._position=e,this._formatReturnValue("text",u,t,e,l)}return e=me._createAfter(r),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",r,t,e)}_previous(){let e=this.position.clone();const t=this.position,r=e.parent;if(r.parent===null&&e.offset===0)return{done:!0,value:void 0};if(r==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let s;if(r instanceof gt){if(e.isAtStart)return this._position=me._createBefore(r),this._previous();s=r.data[e.offset-1]}else s=r.getChild(e.offset-1);if(s instanceof Ei)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",s,t,e,1)):(e=new me(s,s.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",s,t,e));if(s instanceof gt){if(this.singleCharacters)return e=new me(s,s.data.length),this._position=e,this._previous();let l,u=s.data.length;if(s==this._boundaryStartParent){const p=this.boundaries.start.offset;l=new jr(s,p,s.data.length-p),u=l.data.length,e=me._createBefore(l)}else l=new jr(s,0,s.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",l,t,e,u)}if(typeof s=="string"){let l;if(this.singleCharacters)l=1;else{const p=r===this._boundaryStartParent?this.boundaries.start.offset:0;l=e.offset-p}e.offset-=l;const u=new jr(r,e.offset,l);return this._position=e,this._formatReturnValue("text",u,t,e,l)}return e=me._createBefore(r),this._position=e,this._formatReturnValue("elementStart",r,t,e,1)}_formatReturnValue(e,t,r,s,l){return t instanceof jr&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?r=me._createAfter(t.textNode):(s=me._createAfter(t.textNode),this._position=s)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?r=me._createBefore(t.textNode):(s=me._createBefore(t.textNode),this._position=s))),{done:!1,value:{type:e,item:t,previousPosition:r,nextPosition:s,length:l}}}}class me extends Gs{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Sh);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=me._createAt(this),r=t.offset+e;return t.offset=r<0?0:r,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const r=new Zs(t);return r.skip(e),r.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),r=e.getAncestors();let s=0;for(;t[s]==r[s]&&t[s];)s++;return s===0?null:t[s-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],r=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),r.push(e.offset);const s=lt(t,r);switch(s){case"prefix":return"before";case"extension":return"after";default:return t[s]<r[s]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Zs(e)}clone(){return new me(this.parent,this.offset)}static _createAt(e,t){if(e instanceof me)return new this(e.parent,e.offset);{const r=e;if(t=="end")t=r.is("$text")?r.data.length:r.childCount;else{if(t=="before")return this._createBefore(r);if(t=="after")return this._createAfter(r);if(t!==0&&!t)throw new S("view-createpositionat-offset-required",r)}return new me(r,t)}}static _createAfter(e){if(e.is("$textProxy"))return new me(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new S("view-position-after-root",e,{root:e});return new me(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new me(e.textNode,e.offsetInText);if(!e.parent)throw new S("view-position-before-root",e,{root:e});return new me(e.parent,e.index)}}me.prototype.is=function(a){return a==="position"||a==="view:position"};class Ie extends Gs{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Zs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Dh,{direction:"backward"}),t=this.end.getLastMatchingPosition(Dh);return e.parent.is("$text")&&e.isAtStart&&(e=me._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=me._createAfter(t.parent)),new Ie(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Dh);if(e.isAfter(this.end)||e.isEqual(this.end))return new Ie(e,e);let t=this.end.getLastMatchingPosition(Dh,{direction:"backward"});const r=e.nodeAfter,s=t.nodeBefore;return r&&r.is("$text")&&(e=new me(r,0)),s&&s.is("$text")&&(t=new me(s,s.data.length)),new Ie(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const r=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),s=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return r&&s}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Ie(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Ie(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,r=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(r=e.end),new Ie(t,r)}return null}getWalker(e={}){return e.boundaries=this,new Zs(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Ie(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Zs(e);for(const r of t)yield r.item}*getPositions(e={}){e.boundaries=this;const t=new Zs(e);yield t.position;for(const r of t)yield r.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,r,s){return new this(new me(e,t),new me(r,s))}static _createFromPositionAndShift(e,t){const r=e,s=e.getShiftedBy(t);return t>0?new this(r,s):new this(s,r)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(me._createBefore(e),t)}}function Dh(a){return!(!a.item.is("attributeElement")&&!a.item.is("uiElement"))}Ie.prototype.is=function(a){return a==="range"||a==="view:range"};class mr extends q(Gs){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let r=!1;for(const s of e._ranges)if(t.isEqual(s)){r=!0;break}if(!r)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=vi(this.getRanges());if(t!=vi(e.getRanges()))return!1;if(t==0)return!0;for(let r of this.getRanges()){r=r.getTrimmed();let s=!1;for(let l of e.getRanges())if(l=l.getTrimmed(),r.start.isEqual(l.start)&&r.end.isEqual(l.end)){s=!0;break}if(!s)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,r,s]=e;if(typeof r=="object"&&(s=r,r=void 0),t===null)this._setRanges([]),this._setFakeOptions(s);else if(t instanceof mr||t instanceof gm)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Ie)this._setRanges([t],s&&s.backward),this._setFakeOptions(s);else if(t instanceof me)this._setRanges([new Ie(t)]),this._setFakeOptions(s);else if(t instanceof Ys){const l=!!s&&!!s.backward;let u;if(r===void 0)throw new S("view-selection-setto-required-second-parameter",this);u=r=="in"?Ie._createIn(t):r=="on"?Ie._createOn(t):new Ie(me._createAt(t,r)),this._setRanges([u],l),this._setFakeOptions(s)}else{if(!Mt(t))throw new S("view-selection-setto-not-selectable",this);this._setRanges(t,s&&s.backward),this._setFakeOptions(s)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new S("view-selection-setfocus-no-ranges",this);const r=me._createAt(e,t);if(r.compareWith(this.focus)=="same")return;const s=this.anchor;this._ranges.pop(),r.compareWith(s)=="before"?this._addRange(new Ie(r,s),!0):this._addRange(new Ie(s,r)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const r of e)this._addRange(r);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Ie))throw new S("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new S("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Ie(e.start,e.end))}}mr.prototype.is=function(a){return a==="selection"||a==="view:selection"};class gm extends q(Gs){constructor(...e){super(),this._selection=new mr,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}gm.prototype.is=function(a){return a==="selection"||a=="documentSelection"||a=="view:selection"||a=="view:documentSelection"};class Xa extends E{constructor(e,t,r){super(e,t),this.startRange=r,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const mm=Symbol("bubbling contexts");function km(a){return class extends a{fire(e,...t){try{const r=e instanceof E?e:new E(this,e),s=bm(this);if(!s.size)return;if(Ql(r,"capturing",this),ec(s,"$capture",r,...t))return r.return;const l=r.startRange||this.selection.getFirstRange(),u=l?l.getContainedElement():null,p=!!u&&!!c_(s,u);let g=u||function(b){if(!b)return null;const _=b.start.parent,A=b.end.parent,x=_.getPath(),T=A.getPath();return x.length>T.length?_:A}(l);if(Ql(r,"atTarget",g),!p){if(ec(s,"$text",r,...t))return r.return;Ql(r,"bubbling",g)}for(;g;){if(g.is("rootElement")){if(ec(s,"$root",r,...t))return r.return}else if(g.is("element")&&ec(s,g.name,r,...t))return r.return;if(ec(s,g,r,...t))return r.return;g=g.parent,Ql(r,"bubbling",g)}return Ql(r,"bubbling",this),ec(s,"$document",r,...t),r.return}catch(r){S.rethrowUnexpectedError(r,this)}}_addEventListener(e,t,r){const s=mn(r.context||"$document"),l=bm(this);for(const u of s){let p=l.get(u);p||(p=new(q()),l.set(u,p)),this.listenTo(p,e,t,r)}}_removeEventListener(e,t){const r=bm(this);for(const s of r.values())this.stopListening(s,e,t)}}}{const a=km(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{km[e]=a.prototype[e]})}function Ql(a,e,t){a instanceof Xa&&(a._eventPhase=e,a._currentTarget=t)}function ec(a,e,t,...r){const s=typeof e=="string"?a.get(e):c_(a,e);return!!s&&(s.fire(t,...r),t.stop.called)}function c_(a,e){for(const[t,r]of a)if(typeof t=="function"&&t(e))return r;return null}function bm(a){return a[mm]||(a[mm]=new Map),a[mm]}class Th extends km(Me()){constructor(e){super(),this._postFixers=new Set,this.selection=new gm,this.roots=new Gi({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const r of this._postFixers)if(t=r(e),t)break;while(t)}}class Qs extends Ei{constructor(e,t,r,s){super(e,t,r,s),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=_3}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new S("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function _3(){if(wm(this))return null;let a=this.parent;for(;a&&a.is("attributeElement");){if(wm(a)>1)return null;a=a.parent}return!a||wm(a)>1?null:this.childCount}function wm(a){return Array.from(a.getChildren()).filter(e=>!e.is("uiElement")).length}Qs.DEFAULT_PRIORITY=10,Qs.prototype.is=function(a,e){return e?e===this.name&&(a==="attributeElement"||a==="view:attributeElement"||a==="element"||a==="view:element"):a==="attributeElement"||a==="view:attributeElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class vm extends Ei{constructor(e,t,r,s){super(e,t,r,s),this.getFillerOffset=y3}_insertChild(e,t){if(t&&(t instanceof Ys||Array.from(t).length>0))throw new S("view-emptyelement-cannot-add",[this,t]);return 0}}function y3(){return null}vm.prototype.is=function(a,e){return e?e===this.name&&(a==="emptyElement"||a==="view:emptyElement"||a==="element"||a==="view:element"):a==="emptyElement"||a==="view:emptyElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class Ih extends Ei{constructor(e,t,r,s){super(e,t,r,s),this.getFillerOffset=C3}_insertChild(e,t){if(t&&(t instanceof Ys||Array.from(t).length>0))throw new S("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const r of this.getAttributeKeys())t.setAttribute(r,this.getAttribute(r));return t}}function A3(a){a.document.on("arrowKey",(e,t)=>function(r,s,l){if(s.keyCode==Ge.arrowright){const u=s.domTarget.ownerDocument.defaultView.getSelection(),p=u.rangeCount==1&&u.getRangeAt(0).collapsed;if(p||s.shiftKey){const g=u.focusNode,b=u.focusOffset,_=l.domPositionToView(g,b);if(_===null)return;let A=!1;const x=_.getLastMatchingPosition(T=>(T.item.is("uiElement")&&(A=!0),!(!T.item.is("uiElement")&&!T.item.is("attributeElement"))));if(A){const T=l.viewPositionToDom(x);p?u.collapse(T.parent,T.offset):u.extend(T.parent,T.offset)}}}}(0,t,a.domConverter),{priority:"low"})}function C3(){return null}Ih.prototype.is=function(a,e){return e?e===this.name&&(a==="uiElement"||a==="view:uiElement"||a==="element"||a==="view:element"):a==="uiElement"||a==="view:uiElement"||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class _m extends Ei{constructor(e,t,r,s){super(e,t,r,s),this.getFillerOffset=x3}_insertChild(e,t){if(t&&(t instanceof Ys||Array.from(t).length>0))throw new S("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function x3(){return null}_m.prototype.is=function(a,e){return e?e===this.name&&(a==="rawElement"||a==="view:rawElement"||a==="element"||a==="view:element"):a==="rawElement"||a==="view:rawElement"||a===this.name||a==="view:"+this.name||a==="element"||a==="view:element"||a==="node"||a==="view:node"};class Js extends q(Gs){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let r=0;const s=function(l,u){return typeof u=="string"?[new gt(l,u)]:(Mt(u)||(u=[u]),Array.from(u).map(p=>typeof p=="string"?new gt(l,p):p instanceof jr?new gt(l,p.data):p))}(this.document,t);for(const l of s)l.parent!==null&&l._remove(),l.parent=this,this._children.splice(e,0,l),e++,r++;return r}_removeChildren(e,t=1){this._fireChange("children",this);for(let r=e;r<e+t;r++)this._children[r].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Js.prototype.is=function(a){return a==="documentFragment"||a==="view:documentFragment"};class l_{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Js(this.document,e)}createText(e){return new gt(this.document,e)}createAttributeElement(e,t,r={}){const s=new Qs(this.document,e,t);return typeof r.priority=="number"&&(s._priority=r.priority),r.id&&(s._id=r.id),r.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),s}createContainerElement(e,t,r={},s={}){let l=null;Wt(r)?s=r:l=r;const u=new Zl(this.document,e,t,l);return s.renderUnsafeAttributes&&u._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),u}createEditableElement(e,t,r={}){const s=new Sh(this.document,e,t);return r.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),s}createEmptyElement(e,t,r={}){const s=new vm(this.document,e,t);return r.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),s}createUIElement(e,t,r){const s=new Ih(this.document,e,t);return r&&(s.render=r),s}createRawElement(e,t,r,s={}){const l=new _m(this.document,e,t);return r&&(l.render=r),s.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),l}setAttribute(e,t,r){r._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,r){Wt(e)&&r===void 0?t._setStyle(e):r._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,r){r._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof me?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new S("view-writer-break-non-container-element",this.document);if(!t.parent)throw new S("view-writer-break-root",this.document);if(e.isAtStart)return me._createBefore(t);if(!e.isAtEnd){const r=t._clone(!1);this.insert(me._createAfter(t),r);const s=new Ie(e,me._createAt(t,"end")),l=new me(r,0);this.move(s,l)}return me._createAfter(t)}mergeAttributes(e){const t=e.offset,r=e.parent;if(r.is("$text"))return e;if(r.is("attributeElement")&&r.childCount===0){const u=r.parent,p=r.index;return r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new me(u,p))}const s=r.getChild(t-1),l=r.getChild(t);if(!s||!l)return e;if(s.is("$text")&&l.is("$text"))return u_(s,l);if(s.is("attributeElement")&&l.is("attributeElement")&&s.isSimilar(l)){const u=s.childCount;return s._appendChild(l.getChildren()),l._remove(),this._removeFromClonedElementsGroup(l),this.mergeAttributes(new me(s,u))}return e}mergeContainers(e){const t=e.nodeBefore,r=e.nodeAfter;if(!(t&&r&&t.is("containerElement")&&r.is("containerElement")))throw new S("view-writer-merge-containers-invalid-position",this.document);const s=t.getChild(t.childCount-1),l=s instanceof gt?me._createAt(s,"end"):me._createAt(t,"end");return this.move(Ie._createIn(r),me._createAt(t,"end")),this.remove(Ie._createOn(r)),l}insert(e,t){h_(t=Mt(t)?[...t]:[t],this.document);const r=t.reduce((u,p)=>{const g=u[u.length-1],b=!p.is("uiElement");return g&&g.breakAttributes==b?g.nodes.push(p):u.push({breakAttributes:b,nodes:[p]}),u},[]);let s=null,l=e;for(const{nodes:u,breakAttributes:p}of r){const g=this._insertNodes(l,u,p);s||(s=g.start),l=g.end}return s?new Ie(s,l):new Ie(e)}remove(e){const t=e instanceof Ie?e:Ie._createOn(e);if(Jl(t,this.document),t.isCollapsed)return new Js(this.document);const{start:r,end:s}=this._breakAttributesRange(t,!0),l=r.parent,u=s.offset-r.offset,p=l._removeChildren(r.offset,u);for(const b of p)this._removeFromClonedElementsGroup(b);const g=this.mergeAttributes(r);return t.start=g,t.end=g.clone(),new Js(this.document,p)}clear(e,t){Jl(e,this.document);const r=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const s of r){const l=s.item;let u;if(l.is("element")&&t.isSimilar(l))u=Ie._createOn(l);else if(!s.nextPosition.isAfter(e.start)&&l.is("$textProxy")){const p=l.getAncestors().find(g=>g.is("element")&&t.isSimilar(g));p&&(u=Ie._createIn(p))}u&&(u.end.isAfter(e.end)&&(u.end=e.end),u.start.isBefore(e.start)&&(u.start=e.start),this.remove(u))}}move(e,t){let r;if(t.isAfter(e.end)){const s=(t=this._breakAttributes(t,!0)).parent,l=s.childCount;e=this._breakAttributesRange(e,!0),r=this.remove(e),t.offset+=s.childCount-l}else r=this.remove(e);return this.insert(t,r)}wrap(e,t){if(!(t instanceof Qs))throw new S("view-writer-wrap-invalid-attribute",this.document);if(Jl(e,this.document),e.isCollapsed){let s=e.start;s.parent.is("element")&&(r=s.parent,!Array.from(r.getChildren()).some(u=>!u.is("uiElement")))&&(s=s.getLastMatchingPosition(u=>u.item.is("uiElement"))),s=this._wrapPosition(s,t);const l=this.document.selection;return l.isCollapsed&&l.getFirstPosition().isEqual(e.start)&&this.setSelection(s),new Ie(s)}return this._wrapRange(e,t);var r}unwrap(e,t){if(!(t instanceof Qs))throw new S("view-writer-unwrap-invalid-attribute",this.document);if(Jl(e,this.document),e.isCollapsed)return e;const{start:r,end:s}=this._breakAttributesRange(e,!0),l=r.parent,u=this._unwrapChildren(l,r.offset,s.offset,t),p=this.mergeAttributes(u.start);p.isEqual(u.start)||u.end.offset--;const g=this.mergeAttributes(u.end);return new Ie(p,g)}rename(e,t){const r=new Zl(this.document,e,t.getAttributes());return this.insert(me._createAfter(t),r),this.move(Ie._createIn(t),me._createAt(r,0)),this.remove(Ie._createOn(t)),r}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return me._createAt(e,t)}createPositionAfter(e){return me._createAfter(e)}createPositionBefore(e){return me._createBefore(e)}createRange(e,t){return new Ie(e,t)}createRangeOn(e){return Ie._createOn(e)}createRangeIn(e){return Ie._createIn(e)}createSelection(...e){return new mr(...e)}createSlot(e="children"){if(!this._slotFactory)throw new S("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,r){let s,l;if(s=r?ym(e):e.parent.is("$text")?e.parent.parent:e.parent,!s)throw new S("view-writer-invalid-position-container",this.document);l=r?this._breakAttributes(e,!0):e.parent.is("$text")?Am(e):e;const u=s._insertChild(l.offset,t);for(const _ of t)this._addToClonedElementsGroup(_);const p=l.getShiftedBy(u),g=this.mergeAttributes(l);g.isEqual(l)||p.offset--;const b=this.mergeAttributes(p);return new Ie(g,b)}_wrapChildren(e,t,r,s){let l=t;const u=[];for(;l<r;){const g=e.getChild(l),b=g.is("$text"),_=g.is("attributeElement");if(_&&this._wrapAttributeElement(s,g))u.push(new me(e,l));else if(b||!_||E3(s,g)){const A=s._clone();g._remove(),A._appendChild(g),e._insertChild(l,A),this._addToClonedElementsGroup(A),u.push(new me(e,l))}else this._wrapChildren(g,0,g.childCount,s);l++}let p=0;for(const g of u)g.offset-=p,g.offset!=t&&(this.mergeAttributes(g).isEqual(g)||(p++,r--));return Ie._createFromParentsAndOffsets(e,t,e,r)}_unwrapChildren(e,t,r,s){let l=t;const u=[];for(;l<r;){const g=e.getChild(l);if(g.is("attributeElement"))if(g.isSimilar(s)){const b=g.getChildren(),_=g.childCount;g._remove(),e._insertChild(l,b),this._removeFromClonedElementsGroup(g),u.push(new me(e,l),new me(e,l+_)),l+=_,r+=_-1}else this._unwrapAttributeElement(s,g)?(u.push(new me(e,l),new me(e,l+1)),l++):(this._unwrapChildren(g,0,g.childCount,s),l++);else l++}let p=0;for(const g of u)g.offset-=p,!(g.offset==t||g.offset==r)&&(this.mergeAttributes(g).isEqual(g)||(p++,r--));return Ie._createFromParentsAndOffsets(e,t,e,r)}_wrapRange(e,t){const{start:r,end:s}=this._breakAttributesRange(e,!0),l=r.parent,u=this._wrapChildren(l,r.offset,s.offset,t),p=this.mergeAttributes(u.start);p.isEqual(u.start)||u.end.offset--;const g=this.mergeAttributes(u.end);return new Ie(p,g)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return d_(e.clone());e.parent.is("$text")&&(e=Am(e));const r=this.createAttributeElement("_wrapPosition-fake-element");r._priority=Number.POSITIVE_INFINITY,r.isSimilar=()=>!1,e.parent._insertChild(e.offset,r);const s=new Ie(e,e.getShiftedBy(1));this.wrap(s,t);const l=new me(r.parent,r.index);r._remove();const u=l.nodeBefore,p=l.nodeAfter;return u instanceof gt&&p instanceof gt?u_(u,p):d_(l)}_wrapAttributeElement(e,t){if(!f_(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const r of e.getAttributeKeys())if(r!=="class"&&r!=="style"&&t.hasAttribute(r)&&t.getAttribute(r)!==e.getAttribute(r))return!1;for(const r of e.getStyleNames())if(t.hasStyle(r)&&t.getStyle(r)!==e.getStyle(r))return!1;for(const r of e.getAttributeKeys())r!=="class"&&r!=="style"&&(t.hasAttribute(r)||this.setAttribute(r,e.getAttribute(r),t));for(const r of e.getStyleNames())t.hasStyle(r)||this.setStyle(r,e.getStyle(r),t);for(const r of e.getClassNames())t.hasClass(r)||this.addClass(r,t);return!0}_unwrapAttributeElement(e,t){if(!f_(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const r of e.getAttributeKeys())if(r!=="class"&&r!=="style"&&(!t.hasAttribute(r)||t.getAttribute(r)!==e.getAttribute(r)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const r of e.getStyleNames())if(!t.hasStyle(r)||t.getStyle(r)!==e.getStyle(r))return!1;for(const r of e.getAttributeKeys())r!=="class"&&r!=="style"&&this.removeAttribute(r,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const r=e.start,s=e.end;if(Jl(e,this.document),e.isCollapsed){const g=this._breakAttributes(e.start,t);return new Ie(g,g)}const l=this._breakAttributes(s,t),u=l.parent.childCount,p=this._breakAttributes(r,t);return l.offset+=l.parent.childCount-u,new Ie(p,l)}_breakAttributes(e,t=!1){const r=e.offset,s=e.parent;if(e.parent.is("emptyElement"))throw new S("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new S("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new S("view-writer-cannot-break-raw-element",this.document);if(!t&&s.is("$text")&&Cm(s.parent)||Cm(s))return e.clone();if(s.is("$text"))return this._breakAttributes(Am(e),t);if(r==s.childCount){const l=new me(s.parent,s.index+1);return this._breakAttributes(l,t)}if(r===0){const l=new me(s.parent,s.index);return this._breakAttributes(l,t)}{const l=s.index+1,u=s._clone();s.parent._insertChild(l,u),this._addToClonedElementsGroup(u);const p=s.childCount-r,g=s._removeChildren(r,p);u._appendChild(g);const b=new me(s.parent,l);return this._breakAttributes(b,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const s of e.getChildren())this._addToClonedElementsGroup(s);const t=e.id;if(!t)return;let r=this._cloneGroups.get(t);r||(r=new Set,this._cloneGroups.set(t,r)),r.add(e),e._clonesGroup=r}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const s of e.getChildren())this._removeFromClonedElementsGroup(s);const t=e.id;if(!t)return;const r=this._cloneGroups.get(t);r&&r.delete(e)}}function ym(a){let e=a.parent;for(;!Cm(e);){if(!e)return;e=e.parent}return e}function E3(a,e){return a.priority<e.priority||!(a.priority>e.priority)&&a.getIdentity()<e.getIdentity()}function d_(a){const e=a.nodeBefore;if(e&&e.is("$text"))return new me(e,e.data.length);const t=a.nodeAfter;return t&&t.is("$text")?new me(t,0):a}function Am(a){if(a.offset==a.parent.data.length)return new me(a.parent.parent,a.parent.index+1);if(a.offset===0)return new me(a.parent.parent,a.parent.index);const e=a.parent.data.slice(a.offset);return a.parent._data=a.parent.data.slice(0,a.offset),a.parent.parent._insertChild(a.parent.index+1,new gt(a.root.document,e)),new me(a.parent.parent,a.parent.index+1)}function u_(a,e){const t=a.data.length;return a._data+=e.data,e._remove(),new me(a,t)}const S3=[gt,Qs,Zl,vm,_m,Ih];function h_(a,e){for(const t of a){if(!S3.some(r=>t instanceof r))throw new S("view-writer-insert-invalid-node-type",e);t.is("$text")||h_(t.getChildren(),e)}}function Cm(a){return a&&(a.is("containerElement")||a.is("documentFragment"))}function Jl(a,e){const t=ym(a.start),r=ym(a.end);if(!t||!r||t!==r)throw new S("view-writer-invalid-range-container",e)}function f_(a,e){return a.id===null&&e.id===null}const p_=a=>a.createTextNode(" "),g_=a=>{const e=a.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},m_=a=>{const e=a.createElement("br");return e.dataset.ckeFiller="true",e},kr=7,Xl="⁠".repeat(kr);function Si(a){return typeof a=="string"?a.substr(0,kr)===Xl:Rt(a)&&a.data.substr(0,kr)===Xl}function ed(a){return a.data.length==kr&&Si(a)}function k_(a){const e=typeof a=="string"?a:a.data;return Si(a)?e.slice(kr):e}function D3(a,e){if(e.keyCode==Ge.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const r=t.getRangeAt(0).startContainer,s=t.getRangeAt(0).startOffset;Si(r)&&s<=kr&&t.collapse(r,0)}}}var b_=o(5037),T3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(b_.Z,T3),b_.Z.locals;class I3 extends Me(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),f.isBlink&&!f.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new S("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!f.isAndroid)return;let e=null;const t=!(f.isBlink&&!f.isAndroid)||!this.isSelecting;for(const r of this.markedChildren)this._updateChildrenMappings(r);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=me._createBefore(e.parent)));for(const r of this.markedAttributes)this._updateAttrs(r);for(const r of this.markedChildren)this._updateChildren(r,{inlineFillerPosition:e});for(const r of this.markedTexts)!this.markedChildren.has(r.parent)&&this.domConverter.mapViewToDom(r.parent)&&this._updateText(r,{inlineFillerPosition:e});if(t)if(e){const r=this.domConverter.viewPositionToDom(e),s=r.parent.ownerDocument;Si(r.parent)?this._inlineFiller=r.parent:this._inlineFiller=w_(s,r.parent,r.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const r=Array.from(t.childNodes),s=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),l=this._diffNodeLists(r,s),u=this._findUpdateActions(l,r,s,M3);if(u.indexOf("update")!==-1){const p={equal:0,insert:0,delete:0};for(const g of u)if(g==="update"){const b=p.equal+p.insert,_=p.equal+p.delete,A=e.getChild(b);!A||A.is("uiElement")||A.is("rawElement")||this._updateElementMappings(A,r[_]),Tv(s[b]),p.equal++}else p[g]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?me._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Rt(t.parent)&&Si(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Si(e))throw new S("view-renderer-filler-was-lost",this);ed(e)?e.remove():e.data=e.data.substr(kr),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,r=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(u){if(u.getAttribute("contenteditable")=="false")return!1;const p=u.findAncestor(g=>g.hasAttribute("contenteditable"));return!p||p.getAttribute("contenteditable")=="true"}(t)||r===t.getFillerOffset())return!1;const s=e.nodeBefore,l=e.nodeAfter;return!(s instanceof gt||l instanceof gt)&&(!f.isAndroid||!s&&!l)}_updateText(e,t){const r=this.domConverter.findCorrespondingDomText(e);let s=this.domConverter.viewToDom(e).data;const l=t.inlineFillerPosition;l&&l.parent==e.parent&&l.offset==e.index&&(s=Xl+s),v_(r,s)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const r=Array.from(t.attributes).map(l=>l.name),s=e.getAttributeKeys();for(const l of s)this.domConverter.setDomElementAttribute(t,l,e.getAttribute(l),e);for(const l of r)e.hasAttribute(l)||this.domConverter.removeDomElementAttribute(t,l)}_updateChildren(e,t){const r=this.domConverter.mapViewToDom(e);if(!r)return;if(f.isAndroid){let A=null;for(const x of Array.from(r.childNodes)){if(A&&Rt(A)&&Rt(x)){r.normalize();break}A=x}}const s=t.inlineFillerPosition,l=r.childNodes,u=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));s&&s.parent===e&&w_(r.ownerDocument,u,s.offset);const p=this._diffNodeLists(l,u),g=this._findUpdateActions(p,l,u,N3);let b=0;const _=new Set;for(const A of g)A==="delete"?(_.add(l[b]),Tv(l[b])):A!=="equal"&&A!=="update"||b++;b=0;for(const A of g)A==="insert"?(gn(r,b,u[b]),b++):A==="update"?(v_(l[b],u[b].data),b++):A==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(u[b])),b++);for(const A of _)A.parentNode||this.domConverter.unbindDomElement(A)}_diffNodeLists(e,t){return e=function(r,s){const l=Array.from(r);return l.length==0||!s||l[l.length-1]==s&&l.pop(),l}(e,this._fakeSelectionContainer),y(e,t,O3.bind(null,this.domConverter))}_findUpdateActions(e,t,r,s){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let l=[],u=[],p=[];const g={equal:0,insert:0,delete:0};for(const b of e)b==="insert"?p.push(r[g.equal+g.insert]):b==="delete"?u.push(t[g.equal+g.delete]):(l=l.concat(y(u,p,s).map(_=>_==="equal"?"update":_)),l.push("equal"),u=[],p=[]),g[b]++;return l.concat(y(u,p,s).map(b=>b==="equal"?"update":b))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(f.isBlink&&!f.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&f.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(u){const p=u.createElement("div");return p.className="ck-fake-selection-container",Object.assign(p.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),p.textContent=" ",p}(t));const r=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(r,this.selection),!this._fakeSelectionNeedsUpdate(e))return;r.parentElement&&r.parentElement==e||e.appendChild(r),r.textContent=this.selection.fakeSelectionLabel||" ";const s=t.getSelection(),l=t.createRange();s.removeAllRanges(),l.selectNodeContents(r),s.addRange(l)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const r=this.domConverter.viewPositionToDom(this.selection.anchor),s=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(r.parent,r.offset,s.parent,s.offset),f.isGecko&&function(l,u){const p=l.parent;if(p.nodeType!=Node.ELEMENT_NODE||l.offset!=p.childNodes.length-1)return;const g=p.childNodes[l.offset];g&&g.tagName=="BR"&&u.addRange(u.getRangeAt(0))}(s,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,r=e.ownerDocument.getSelection();return!t||t.parentElement!==e||r.anchorNode!==t&&!t.contains(r.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const r=e.activeElement,s=this.domConverter.mapDomToView(r);r&&s&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function w_(a,e,t){const r=e instanceof Array?e:e.childNodes,s=r[t];if(Rt(s))return s.data=Xl+s.data,s;{const l=a.createTextNode(Xl);return Array.isArray(e)?r.splice(t,0,l):gn(e,t,l),l}}function M3(a,e){return fn(a)&&fn(e)&&!Rt(a)&&!Rt(e)&&!Ln(a)&&!Ln(e)&&a.tagName.toLowerCase()===e.tagName.toLowerCase()}function N3(a,e){return fn(a)&&fn(e)&&Rt(a)&&Rt(e)}function O3(a,e,t){return e===t||(Rt(e)&&Rt(t)?e.data===t.data:!(!a.isBlockFiller(e)||!a.isBlockFiller(t)))}function v_(a,e){const t=a.data;if(t==e)return;const r=k(t,e);for(const s of r)s.type==="insert"?a.insertData(s.index,s.values.join("")):a.deleteData(s.index,s.howMany)}const P3=m_(Ae.document),B3=p_(Ae.document),L3=g_(Ae.document),Mh="data-ck-unsafe-attribute-",__="data-ck-unsafe-element";class Nh{constructor(e,{blockFillerMode:t,renderingMode:r="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Yi,this._inlineObjectElementMatcher=new Yi,this.document=e,this.renderingMode=r,this.blockFillerMode=t||(r==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Ae.document:Ae.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new mr(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const r of Array.from(e.children))this.unbindDomElement(r)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,r){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(r==="img"&&(e==="src"||e==="srcset")||r==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const r=new DOMParser().parseFromString(t,"text/html"),s=r.createDocumentFragment(),l=r.body.childNodes;for(;l.length>0;)s.appendChild(l[0]);const u=r.createTreeWalker(s,NodeFilter.SHOW_ELEMENT),p=[];let g;for(;g=u.nextNode();)p.push(g);for(const b of p){for(const A of b.getAttributeNames())this.setDomElementAttribute(b,A,b.getAttribute(A));const _=b.tagName.toLowerCase();this._shouldRenameElement(_)&&(C_(_),b.replaceWith(this._createReplacementDomElement(_,b)))}for(;e.firstChild;)e.firstChild.remove();e.append(s)}viewToDom(e,t={}){if(e.is("$text")){const r=this._processDataFromViewText(e);return this._domDocument.createTextNode(r)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let r;if(e.is("documentFragment"))r=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(r,e);else{if(e.is("uiElement"))return r=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(r,e),r;this._shouldRenameElement(e.name)?(C_(e.name),r=this._createReplacementDomElement(e.name)):r=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(r,this),t.bind&&this.bindElements(r,e);for(const s of e.getAttributeKeys())this.setDomElementAttribute(r,s,e.getAttribute(s),e)}if(t.withChildren!==!1)for(const s of this.viewChildrenToDom(e,t))r.appendChild(s);return r}}setDomElementAttribute(e,t,r,s){const l=this.shouldRenderAttribute(t,r,e.tagName.toLowerCase())||s&&s.shouldRenderUnsafeAttribute(t);l||$("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:r}),function(u){try{Ae.document.createAttribute(u)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!l?e.removeAttribute(t):e.hasAttribute(Mh+t)&&l&&e.removeAttribute(Mh+t),e.setAttribute(l?t:Mh+t,r)):$("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:r})}removeDomElementAttribute(e,t){t!=__&&(e.removeAttribute(t),e.removeAttribute(Mh+t))}*viewChildrenToDom(e,t={}){const r=e.getFillerOffset&&e.getFillerOffset();let s=0;for(const l of e.getChildren()){r===s&&(yield this._getBlockFiller());const u=l.is("element")&&!!l.getCustomProperty("dataPipeline:transparentRendering")&&!kn(l.getAttributes());u&&this.renderingMode=="data"?yield*this.viewChildrenToDom(l,t):(u&&$("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:l}),yield this.viewToDom(l,t)),s++}r===s&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),r=this.viewPositionToDom(e.end),s=this._domDocument.createRange();return s.setStart(t.parent,t.offset),s.setEnd(r.parent,r.offset),s}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const r=this.findCorrespondingDomText(t);if(!r)return null;let s=e.offset;return Si(r)&&(s+=kr),{parent:r,offset:s}}{let r,s,l;if(e.offset===0){if(r=this.mapViewToDom(t),!r)return null;l=r.childNodes[0]}else{const u=e.nodeBefore;if(s=u.is("$text")?this.findCorrespondingDomText(u):this.mapViewToDom(u),!s)return null;r=s.parentNode,l=s.nextSibling}return Rt(l)&&Si(l)?{parent:l,offset:kr}:{parent:r,offset:s?Yn(s)+1:0}}}domToView(e,t={}){const r=[],s=this._domToView(e,t,r),l=s.next().value;return l?(s.next(),this._processDomInlineNodes(null,r,t),l.is("$text")&&l.data.length==0?null:l):null}*domChildrenToView(e,t={},r=[]){for(let s=0;s<e.childNodes.length;s++){const l=e.childNodes[s],u=this._domToView(l,t,r),p=u.next().value;p!==null&&(this._isBlockViewElement(p)&&this._processDomInlineNodes(e,r,t),yield p,u.next())}this._processDomInlineNodes(e,r,t)}domSelectionToView(e){if(function(s){if(!f.isGecko||!s.rangeCount)return!1;const l=s.getRangeAt(0).startContainer;try{Object.prototype.toString.call(l)}catch{return!0}return!1}(e))return new mr([]);if(e.rangeCount===1){let s=e.getRangeAt(0).startContainer;Rt(s)&&(s=s.parentNode);const l=this.fakeSelectionToView(s);if(l)return l}const t=this.isDomSelectionBackward(e),r=[];for(let s=0;s<e.rangeCount;s++){const l=e.getRangeAt(s),u=this.domRangeToView(l);u&&r.push(u)}return new mr(r,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),r=this.domPositionToView(e.endContainer,e.endOffset);return t&&r?new Ie(t,r):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Yn(e));const r=this.mapDomToView(e);if(r&&(r.is("uiElement")||r.is("rawElement")))return me._createBefore(r);if(Rt(e)){if(ed(e))return this.domPositionToView(e.parentNode,Yn(e));const s=this.findCorrespondingViewText(e);let l=t;return s?(Si(e)&&(l-=kr,l=l<0?0:l),new me(s,l)):null}if(t===0){const s=this.mapDomToView(e);if(s)return new me(s,0)}else{const s=e.childNodes[t-1];if(Rt(s)&&ed(s)||s&&this.isBlockFiller(s))return this.domPositionToView(s.parentNode,Yn(s));const l=Rt(s)?this.findCorrespondingViewText(s):this.mapDomToView(s);if(l&&l.parent)return new me(l.parent,l.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(ed(e))return null;const t=this.getHostViewElement(e);if(t)return t;const r=e.previousSibling;if(r){if(!this.isElement(r))return null;const s=this.mapDomToView(r);if(s){const l=s.nextSibling;return l instanceof gt?l:null}}else{const s=this.mapDomToView(e.parentNode);if(s){const l=s.getChild(0);return l instanceof gt?l:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:r,scrollY:s}=Ae.window,l=[];y_(t,u=>{const{scrollLeft:p,scrollTop:g}=u;l.push([p,g])}),t.focus(),y_(t,u=>{const[p,g]=l.shift();u.scrollLeft=p,u.scrollTop=g}),Ae.window.scrollTo(r,s)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),r=this.domSelectionToView(t);r&&r.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(P3):!(e.tagName!=="BR"||!A_(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(L3)||function(t,r){return t.isEqualNode(B3)&&A_(t,r)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const r=t.collapsed;return t.detach(),r}getHostViewElement(e){const t=function(r){const s=[];let l=r;for(;l&&l.nodeType!=Node.DOCUMENT_NODE;)s.unshift(l),l=l.parentNode;return s}(e);for(t.pop();t.length;){const r=t.pop(),s=this._domToViewMapping.get(r);if(s&&(s.is("uiElement")||s.is("rawElement")))return s}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return p_(this._domDocument);case"markedNbsp":return g_(this._domDocument);case"br":return m_(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Rt(e)&&Si(e)&&t<kr||this.isElement(e)&&Si(e.childNodes[t]))return!1;const r=this.mapDomToView(e);return!r||!r.is("uiElement")&&!r.is("rawElement")}*_domToView(e,t,r){if(this.isBlockFiller(e))return null;const s=this.getHostViewElement(e);if(s)return s;if(Ln(e)&&t.skipComments)return null;if(Rt(e)){if(ed(e))return null;{const l=e.data;if(l==="")return null;const u=new gt(this.document,l);return r.push(u),u}}{let l=this.mapDomToView(e);if(l)return this._isInlineObjectElement(l)&&r.push(l),l;if(this.isDocumentFragment(e))l=new Js(this.document),t.bind&&this.bindDocumentFragments(e,l);else{l=this._createViewElement(e,t),t.bind&&this.bindElements(e,l);const p=e.attributes;if(p)for(let g=p.length,b=0;b<g;b++)l._setAttribute(p[b].name,p[b].value);if(this._isViewElementWithRawContent(l,t))return l._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(l)||r.push(l),l;if(Ln(e))return l._setCustomProperty("$rawContent",e.data),l}yield l;const u=[];if(t.withChildren!==!1)for(const p of this.domChildrenToView(e,t,u))l._appendChild(p);if(this._isInlineObjectElement(l))r.push(l);else for(const p of u)r.push(p)}}_processDomInlineNodes(e,t,r){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let s=!1;for(let l=0;l<t.length;l++){const u=t[l];if(!u.is("$text")){s=!1;continue}let p,g=!1;if(z3(u,this.preElements))p=k_(u.data);else{p=u.data.replace(/[ \n\t\r]{1,}/g," "),g=/[^\S\u00A0]/.test(p.charAt(p.length-1));const b=l>0?t[l-1]:null,_=l+1<t.length?t[l+1]:null,A=!b||b.is("element")&&b.name=="br"||s,x=!_&&!Si(u.data);r.withChildren!==!1&&(A&&(p=p.replace(/^ /,"")),x&&(p=p.replace(/ $/,""))),p=k_(p),p=p.replace(/ \u00A0/g,"  ");const T=_&&_.is("element")&&_.name!="br",B=_&&_.is("$text")&&_.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(p)||!_||T||B)&&(p=p.replace(/\u00A0$/," ")),(A||b&&b.is("element")&&b.name!="br")&&(p=p.replace(/^\u00A0/," "))}p.length==0&&u.parent?(u._remove(),t.splice(l,1),l--):(u._data=p,s=g)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(r=>this.preElements.includes(r.name)))return t;if(t.charAt(0)==" "){const r=this._getTouchingInlineViewNode(e,!1);!(r&&r.is("$textProxy")&&this._nodeEndsWithSpace(r))&&r||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const r=this._getTouchingInlineViewNode(e,!0),s=r&&r.is("$textProxy")&&r.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&r&&!s||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(r=>this.preElements.includes(r.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const r=new Zs({startPosition:t?me._createAfter(e):me._createBefore(e),direction:t?"forward":"backward"});for(const s of r){if(s.item.is("element","br"))return null;if(this._isInlineObjectElement(s.item))return s.item;if(s.item.is("containerElement"))return null;if(s.item.is("$textProxy"))return s.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Ln(e))return new Ih(this.document,"$comment");const r=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Ei(this.document,r)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const r=this._domDocument.createElement("span");if(r.setAttribute(__,e),t){for(;t.firstChild;)r.appendChild(t.firstChild);for(const s of t.getAttributeNames())r.setAttribute(s,t.getAttribute(s))}return r}}function z3(a,e){return a.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function y_(a,e){let t=a;for(;t;)e(t),t=t.parentElement}function A_(a,e){const t=a.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function C_(a){a==="script"&&$("domconverter-unsafe-script-element-detected"),a==="style"&&$("domconverter-unsafe-style-element-detected")}class Rr extends ft(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const x_=n_(function(a,e){lo(e,Lr(e),a)});class tc{constructor(e,t,r){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,x_(this,r)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Xs extends Rr{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(r,s)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(s.target)&&this.onDomEvent(s)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,r){this.isEnabled&&this.document.fire(e,new tc(this.view,t,r))}}class j3 extends Xs{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Ja(this)}};this.fire(e.type,e,t)}}const xm=function(){return jt.Date.now()};var R3=/\s/;const F3=function(a){for(var e=a.length;e--&&R3.test(a.charAt(e)););return e};var V3=/^\s+/;const $3=function(a){return a&&a.slice(0,F3(a)+1).replace(V3,"")};var U3=/^[-+]0x[0-9a-f]+$/i,H3=/^0b[01]+$/i,W3=/^0o[0-7]+$/i,q3=parseInt;const E_=function(a){if(typeof a=="number")return a;if(xh(a))return NaN;if(ge(a)){var e=typeof a.valueOf=="function"?a.valueOf():a;a=ge(e)?e+"":e}if(typeof a!="string")return a===0?a:+a;a=$3(a);var t=H3.test(a);return t||W3.test(a)?q3(a.slice(2),t?2:8):U3.test(a)?NaN:+a};var G3=Math.max,Y3=Math.min;const td=function(a,e,t){var r,s,l,u,p,g,b=0,_=!1,A=!1,x=!0;if(typeof a!="function")throw new TypeError("Expected a function");function T(te){var le=r,xe=s;return r=s=void 0,b=te,u=a.apply(xe,le)}function B(te){var le=te-g;return g===void 0||le>=e||le<0||A&&te-b>=l}function z(){var te=xm();if(B(te))return R(te);p=setTimeout(z,function(le){var xe=e-(le-g);return A?Y3(xe,l-(le-b)):xe}(te))}function R(te){return p=void 0,x&&r?T(te):(r=s=void 0,u)}function G(){var te=xm(),le=B(te);if(r=arguments,s=this,g=te,le){if(p===void 0)return function(xe){return b=xe,p=setTimeout(z,e),_?T(xe):u}(g);if(A)return clearTimeout(p),p=setTimeout(z,e),T(g)}return p===void 0&&(p=setTimeout(z,e)),u}return e=E_(e)||0,ge(t)&&(_=!!t.leading,l=(A="maxWait"in t)?G3(E_(t.maxWait)||0,e):l,x="trailing"in t?!!t.trailing:x),G.cancel=function(){p!==void 0&&clearTimeout(p),b=0,r=g=s=p=void 0},G.flush=function(){return p===void 0?u:R(xm())},G};class K3 extends Rr{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=td(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,r)=>{e.selection.isFake&&this.isEnabled&&r.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,r)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(r.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,r=new mr(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Ge.arrowleft&&e!=Ge.arrowup||r.setTo(r.getFirstPosition()),e!=Ge.arrowright&&e!=Ge.arrowdown||r.setTo(r.getLastPosition());const s={oldSelection:t,newSelection:r,domSelection:null};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}const Z3=function(a){return this.__data__.set(a,"__lodash_hash_undefined__"),this},Q3=function(a){return this.__data__.has(a)};function Oh(a){var e=-1,t=a==null?0:a.length;for(this.__data__=new Ra;++e<t;)this.add(a[e])}Oh.prototype.add=Oh.prototype.push=Z3,Oh.prototype.has=Q3;const J3=Oh,X3=function(a,e){for(var t=-1,r=a==null?0:a.length;++t<r;)if(e(a[t],t,a))return!0;return!1},eM=function(a,e){return a.has(e)},S_=function(a,e,t,r,s,l){var u=1&t,p=a.length,g=e.length;if(p!=g&&!(u&&g>p))return!1;var b=l.get(a),_=l.get(e);if(b&&_)return b==e&&_==a;var A=-1,x=!0,T=2&t?new J3:void 0;for(l.set(a,e),l.set(e,a);++A<p;){var B=a[A],z=e[A];if(r)var R=u?r(z,B,A,e,a,l):r(B,z,A,a,e,l);if(R!==void 0){if(R)continue;x=!1;break}if(T){if(!X3(e,function(G,te){if(!eM(T,te)&&(B===G||s(B,G,t,r,l)))return T.push(te)})){x=!1;break}}else if(B!==z&&!s(B,z,t,r,l)){x=!1;break}}return l.delete(a),l.delete(e),x},tM=function(a){var e=-1,t=Array(a.size);return a.forEach(function(r,s){t[++e]=[s,r]}),t},nM=function(a){var e=-1,t=Array(a.size);return a.forEach(function(r){t[++e]=r}),t};var D_=Nt?Nt.prototype:void 0,Em=D_?D_.valueOf:void 0;const iM=function(a,e,t,r,s,l,u){switch(t){case"[object DataView]":if(a.byteLength!=e.byteLength||a.byteOffset!=e.byteOffset)return!1;a=a.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(a.byteLength!=e.byteLength||!l(new it(a),new it(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Gt(+a,+e);case"[object Error]":return a.name==e.name&&a.message==e.message;case"[object RegExp]":case"[object String]":return a==e+"";case"[object Map]":var p=tM;case"[object Set]":var g=1&r;if(p||(p=nM),a.size!=e.size&&!g)return!1;var b=u.get(a);if(b)return b==e;r|=2,u.set(a,e);var _=S_(p(a),p(e),r,s,l,u);return u.delete(a),_;case"[object Symbol]":if(Em)return Em.call(a)==Em.call(e)}return!1};var rM=Object.prototype.hasOwnProperty;const oM=function(a,e,t,r,s,l){var u=1&t,p=Fl(a),g=p.length;if(g!=Fl(e).length&&!u)return!1;for(var b=g;b--;){var _=p[b];if(!(u?_ in e:rM.call(e,_)))return!1}var A=l.get(a),x=l.get(e);if(A&&x)return A==e&&x==a;var T=!0;l.set(a,e),l.set(e,a);for(var B=u;++b<g;){var z=a[_=p[b]],R=e[_];if(r)var G=u?r(R,z,_,e,a,l):r(z,R,_,a,e,l);if(!(G===void 0?z===R||s(z,R,t,r,l):G)){T=!1;break}B||(B=_=="constructor")}if(T&&!B){var te=a.constructor,le=e.constructor;te==le||!("constructor"in a)||!("constructor"in e)||typeof te=="function"&&te instanceof te&&typeof le=="function"&&le instanceof le||(T=!1)}return l.delete(a),l.delete(e),T};var T_="[object Arguments]",I_="[object Array]",Ph="[object Object]",M_=Object.prototype.hasOwnProperty;const sM=function(a,e,t,r,s,l){var u=yt(a),p=yt(e),g=u?I_:Ko(a),b=p?I_:Ko(e),_=(g=g==T_?Ph:g)==Ph,A=(b=b==T_?Ph:b)==Ph,x=g==b;if(x&&Ws(a)){if(!Ws(e))return!1;u=!0,_=!1}if(x&&!_)return l||(l=new Us),u||Il(a)?S_(a,e,t,r,s,l):iM(a,e,g,t,r,s,l);if(!(1&t)){var T=_&&M_.call(a,"__wrapped__"),B=A&&M_.call(e,"__wrapped__");if(T||B){var z=T?a.value():a,R=B?e.value():e;return l||(l=new Us),s(z,R,t,r,l)}}return!!x&&(l||(l=new Us),oM(a,e,t,r,s,l))},N_=function a(e,t,r,s,l){return e===t||(e==null||t==null||!Ht(e)&&!Ht(t)?e!=e&&t!=t:sM(e,t,r,s,a,l))},aM=function(a,e,t){var r=(t=typeof t=="function"?t:void 0)?t(a,e):void 0;return r===void 0?N_(a,e,void 0,t):!!r};class O_ extends Rr{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,r=new Set,s=new Set;for(const u of e){const p=t.mapDomToView(u.target);p&&(p.is("uiElement")||p.is("rawElement")||u.type!=="childList"||this._isBogusBrMutation(u)||s.add(p))}for(const u of e){const p=t.mapDomToView(u.target);if((!p||!p.is("uiElement")&&!p.is("rawElement"))&&u.type==="characterData"){const g=t.findCorrespondingViewText(u.target);g&&!s.has(g.parent)?r.add(g):!g&&Si(u.target)&&s.add(t.mapDomToView(u.target.parentNode))}}let l=!1;for(const u of r)l=!0,this.renderer.markToSync("text",u);for(const u of s){const p=t.mapViewToDom(u),g=Array.from(u.getChildren()),b=Array.from(t.domChildrenToView(p,{withChildren:!1}));aM(g,b,cM)||(l=!0,this.renderer.markToSync("children",u))}l&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function cM(a,e){if(!Array.isArray(a))return a===e||!(!a.is("$text")||!e.is("$text"))&&a.data===e.data}class Bh extends Xs{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(r,s)=>{const l=t.selection.editableElement;l!==null&&l!==s.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class lM extends Rr{constructor(e){super(e),this.mutationObserver=e.getObserver(O_),this.focusObserver=e.getObserver(Bh),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=td(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=td(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,r=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",r,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",r,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",r,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(s,l)=>{this.document.isComposing&&!f.isAndroid||(this._handleSelectionChange(l,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const r=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(r.anchorNode))return;this.mutationObserver.flush();const s=this.domConverter.domSelectionToView(r);if(s.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(s)||!this.domConverter.isDomSelectionCorrect(r))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(s))this.view.forceRender();else{const l={oldSelection:this.selection,newSelection:s,domSelection:r};this.document.fire("selectionChange",l),this._fireSelectionChangeDoneDebounced(l)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class dM extends Xs{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class P_{constructor(e,t={}){this._files=t.cacheFiles?B_(e):null,this._native=e}get files(){return this._files||(this._files=B_(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,r){this._native.setDragImage(e,t,r)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function B_(a){const e=Array.from(a.files||[]),t=Array.from(a.items||[]);return e.length?e:t.filter(r=>r.kind==="file").map(r=>r.getAsFile())}class uM extends Xs{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),r=this.view,s=r.document;let l=null,u=null,p=[];if(e.dataTransfer&&(l=new P_(e.dataTransfer)),e.data!==null?u=e.data:l&&(u=l.getData("text/plain")),s.selection.isFake)p=Array.from(s.selection.getRanges());else if(t.length)p=t.map(g=>{const b=r.domConverter.domPositionToView(g.startContainer,g.startOffset),_=r.domConverter.domPositionToView(g.endContainer,g.endOffset);return b?r.createRange(b,_):_?r.createRange(_):void 0}).filter(g=>!!g);else if(f.isAndroid){const g=e.target.ownerDocument.defaultView.getSelection();p=Array.from(r.domConverter.domSelectionToView(g).getRanges())}if(f.isAndroid&&e.inputType=="insertCompositionText"&&u&&u.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[r.createRange(p[0].end)]});else if(e.inputType=="insertText"&&u&&u.includes(`
`,isColorInherited:!1}),r.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],r],on:{dragstart:s.to(l=>l.preventDefault())}}]})}}function zA(a,e,t){return(r,s)=>{const l=new je(a);if(l.width<bO||l.height<kO)return null;let u;u=e.position==="inside"?l.bottom-s.height:l.bottom-s.height/2,u-=e.verticalOffset;const p=t(l,s),g=r.clone().moveTo(p,u).getIntersection(s.clone().moveTo(p,u)).getVisible();return!g||g.getArea()<s.getArea()?null:{top:u,left:p,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function jA(a){const e=a.config.get("ui.poweredBy"),t=e&&e.position||"border";return{position:t,label:wO,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:a.locale.contentLanguageDirection==="ltr"?"right":"left",...e}}class yO extends Me(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new fO(e),this.focusTracker=new ai,this.tooltipManager=new wn(e),this.poweredBy=new vO(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const r=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?r():this.once("ready",r)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const r=e.config.get("toolbar.viewportTopOffset");return r?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:r}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let r,s;e.keystrokes.set("Alt+F10",(l,u)=>{const p=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(p)&&!Array.from(t.domRoots.values()).includes(p)&&(r=p);const g=this._getCurrentFocusedToolbarDefinition();g&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let b=0;b<s.length;b++){const _=s.shift();if(s.push(_),_!==g&&this._focusFocusableCandidateToolbar(_)){g&&g.options.afterBlur&&g.options.afterBlur();break}}u()}),e.keystrokes.set("Esc",(l,u)=>{const p=this._getCurrentFocusedToolbarDefinition();p&&(r?(r.focus(),r=null):e.editing.view.focus(),p.options.afterBlur&&p.options.afterBlur(),u())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:r,options:s}=t;(Yt(r.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,r)=>RA(t)-RA(r)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:r}}=e;return r&&r(),!!Yt(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const r={top:0,bottom:0,left:0,right:0,...this.viewportOffset};t.viewportOffset.top+=r.top,t.viewportOffset.bottom+=r.bottom,t.viewportOffset.left+=r.left,t.viewportOffset.right+=r.right}}function RA(a){const{toolbarView:e,options:t}=a;let r=10;return Yt(e.element)&&r--,t.isContextual&&r--,r}var FA=o(9847),AO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(FA.Z,AO),FA.Z.locals;class CO extends Be{constructor(e){super(e),this.body=new TN(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class xO extends Be{constructor(e,t,r){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=r,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(r){e.change(s=>{const l=e.document.getRoot(r.name);s.addClass(r.isFocused?"ck-focused":"ck-blurred",l),s.removeClass(r.isFocused?"ck-blurred":"ck-focused",l)})}e.isRenderingInProgress?function r(s){e.once("change:isRenderingInProgress",(l,u,p)=>{p?r(s):t(s)})}(this):t(this)}}class EO extends xO{constructor(e,t,r,s={}){super(e,t,r);const l=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>l("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const r=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),r)})}}var VA=o(1874),SO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(VA.Z,SO),VA.Z.locals;class $A extends Hv{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class UA extends Me(){constructor(e,t){super(),t&&x_(this,t),e&&this.set(e)}}var HA=o(7592),DO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(HA.Z,DO),HA.Z.locals;var WA=o(6356),TO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(WA.Z,TO),WA.Z.locals;const Kh=Bn("px");class Zh extends ue{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,r=t.document.selection.editableElement;return r?t.domConverter.mapViewToDom(r.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new S("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const r=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),r.set(e.view,e),this._viewToStack.set(e.view,r),r===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new S("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new S("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Dn(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new IO(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(r,s)=>!s&&r>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(r,s)=>{if(s<2)return"";const l=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[l,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new MO(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,r)=>!r&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:r=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=r,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class IO extends Be{constructor(e){super(e);const t=e.t,r=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new ai,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",r.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:r.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const r=new rt(this.locale);return r.set({label:e,icon:t,tooltip:!0}),r}}class MO extends Be{constructor(e,t){super(e);const r=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",r.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:r.to("top",Kh),left:r.to("left",Kh),width:r.to("width",Kh),height:r.to("height",Kh)}},children:this.content}),this.on("change:numberOfPanels",(s,l,u,p)=>{u>p?this._addPanels(u-p):this._removePanels(p-u),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Be;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:r,height:s}=new je(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:r,height:s})}}}var qA=o(3707),NO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(qA.Z,NO),qA.Z.locals;class OO extends pd{constructor(e,t){const r=e.t,s=Object.assign({},{showResetButton:!0,showIcon:!0,creator:gd},t);super(e,s.creator),this.label=t.label,this._viewConfig=s,this._viewConfig.showIcon&&(this.iconView=new mo,this.iconView.content=$e.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new rt(e),this.resetButtonView.set({label:r("Clear"),icon:$e.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",l=>!l),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class PO extends Be{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class BO extends Be{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new ai,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new ko({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var GA=/[\\^$.*+?()[\]{}|]/g,LO=RegExp(GA.source);const YA=function(a){return(a=cm(a))&&LO.test(a)?a.replace(GA,"\\$&"):a};var KA=o(9332),zO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(KA.Z,zO),KA.Z.locals;class jO extends Be{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new ai,this.keystrokes=new gr,this.resultsView=new BO(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new PO,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new ko({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(r,{resultsCount:s,totalItemsCount:l})=>{this.resultsCount=s,this.totalItemsCount=l}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(YA(e),"ig"):null,r=this.filteredView.filter(t);this.fire("search",{query:e,...r})}_createSearchTextQueryView(){const e=new OO(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function r(s,{query:l,resultsCount:u,totalItemsCount:p}){return typeof s=="function"?s(l,u,p):s}this.on("search",(s,l)=>{if(l.resultsCount)t.set({isVisible:!1});else{const u=this._config.infoView&&this._config.infoView.text;let p,g;l.totalItemsCount?u&&u.notFound?(p=u.notFound.primary,g=u.notFound.secondary):(p=e("No results found"),g=""):u&&u.noSearchableItems?(p=u.noSearchableItems.primary,g=u.noSearchableItems.secondary):(p=e("No searchable items"),g=""),t.set({primaryText:r(p,l),secondaryText:r(g,l),isVisible:!0})}})}}var ZA=o(4029),RO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(ZA.Z,RO),ZA.Z.locals;class kd extends jO{constructor(e,t){super(e,t),this._config=t;const r=Bn("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const s=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[s.if("isVisible","ck-hidden",l=>!l),s.to("_position",l=>`ck-search__results_${l}`)],style:{width:s.to("_width",r)}}}),this.focusTracker.on("change:isFocused",(l,u,p)=>{this._updateResultsVisibility(),p?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(l,u)=>{this.resultsView.isVisible=!1,u()}),this.listenTo(Ae.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(l,{value:u})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=u,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new je(this.queryView.fieldView.element).width;const e=kd._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:kd.defaultResultsPositions});this.resultsView._position=e?e.name:"s"}_updateResultsVisibility(){const e=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=e}}kd.defaultResultsPositions=[a=>({top:a.bottom,left:a.left,name:"s"}),(a,e)=>({top:a.top-e.height,left:a.left,name:"n"})],kd._getOptimalPosition=At;var QA=o(4746),FO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(QA.Z,FO),QA.Z.locals;var JA=o(6446),VO={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(JA.Z,VO),JA.Z.locals;var XA=o(4176),$O={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(XA.Z,$O),XA.Z.locals;class UO extends yO{constructor(e,t){super(e),this.view=t,this._toolbarConfig=sA(e.config.get("toolbar"))}get element(){return this.view.editable.element}init(){const e=this.editor,t=this.view,r=e.editing.view,s=t.editable,l=r.document.getRoot();s.name=l.rootName,t.render();const u=s.element;this.setEditableElement(s.name,u),s.bind("isFocused").to(this.focusTracker),r.attachDomRoot(u),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.editor,t=this.view,r=t.editable.element,s=t.toolbar;t.panel.bind("isVisible").to(this.focusTracker,"isFocused"),t.bind("viewportTopOffset").to(this,"viewportOffset",({top:l})=>l||0),t.listenTo(e.ui,"update",()=>{t.panel.isVisible&&t.panel.pin({target:r,positions:t.panelPositions})}),s.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(s)}_initPlaceholder(){const e=this.editor,t=e.editing.view,r=t.document.getRoot(),s=e.config.get("placeholder");if(s){const l=typeof s=="string"?s:s[r.rootName];l&&(r.placeholder=l)}Gv({view:t,element:r,isDirectHost:!1,keepOnFocus:!0})}}const HO=Bn("px");class WO extends CO{constructor(e,t,r,s={}){super(e);const l=e.t;this.toolbar=new Wm(e,{shouldGroupWhenFull:s.shouldToolbarGroupWhenFull,isFloating:!0}),this.set("viewportTopOffset",0),this.panel=new Dn(e),this.panelPositions=this._getPanelPositions(),this.panel.extendTemplate({attributes:{class:"ck-toolbar-container"}}),this.editable=new EO(e,t,r,{label:u=>l("Rich Text Editor. Editing area: %0",u.name)}),this._resizeObserver=null}render(){if(super.render(),this.body.add(this.panel),this.registerChild(this.editable),this.panel.content.add(this.toolbar),this.toolbar.options.shouldGroupWhenFull){const e=this.editable.element;this._resizeObserver=new Ve(e,()=>{this.toolbar.maxWidth=HO(new je(e).width)})}}destroy(){super.destroy(),this._resizeObserver&&this._resizeObserver.destroy()}_getPanelPositionTop(e,t){let r;return r=e.top>t.height+this.viewportTopOffset?e.top-t.height:e.bottom>t.height+this.viewportTopOffset+50?this.viewportTopOffset:e.bottom,r}_getPanelPositions(){const e=[(t,r)=>({top:this._getPanelPositionTop(t,r),left:t.left,name:"toolbar_west",config:{withArrow:!1}}),(t,r)=>({top:this._getPanelPositionTop(t,r),left:t.left+t.width-r.width,name:"toolbar_east",config:{withArrow:!1}})];return this.locale.uiLanguageDirection==="ltr"?e:e.reverse()}}class Qh extends Vh(zm(vN)){constructor(e,t={}){if(!Jh(e)&&t.initialData!==void 0)throw new S("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(l){return Jh(l)?(u=l,u instanceof HTMLTextAreaElement?u.value:u.innerHTML):l;var u}(e)),this.model.document.createRoot(),Jh(e)&&(this.sourceElement=e,function(l,u){if(u.ckeditorInstance)throw new S("editor-source-element-already-used",l);u.ckeditorInstance=l,l.once("destroy",()=>{delete u.ckeditorInstance})}(this,e));const r=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new WO(this.locale,this.editing.view,this.sourceElement,{shouldToolbarGroupWhenFull:r});this.ui=new UO(this,s),function(l){if(!Ot(l.updateSourceElement))throw new S("attachtoform-missing-elementapi-interface",l);const u=l.sourceElement;if(function(p){return!!p&&p.tagName.toLowerCase()==="textarea"}(u)&&u.form){let p;const g=u.form,b=()=>l.updateSourceElement();Ot(g.submit)&&(p=g.submit,g.submit=()=>{b(),p.apply(g)}),g.addEventListener("submit",b),l.on("destroy",()=>{g.removeEventListener("submit",b),p&&(g.submit=p)})}}(this)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,t={}){return new Promise(r=>{if(Jh(e)&&e.tagName==="TEXTAREA")throw new S("editor-wrong-element",null);const s=new this(e,t);r(s.initPlugins().then(()=>s.ui.init()).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function Jh(a){return Ne(a)}Qh.Context=Uv,Qh.EditorWatchdog=By,Qh.ContextWatchdog=class extends Oy{constructor(a,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new AN,this._watchdogConfig=e,this._creator=t=>a.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(a){this._creator=a}setDestructor(a){this._destructor=a}get context(){return this._context}create(a={}){return this._actionQueues.enqueue(hd,()=>(this._contextConfig=a,this._create()))}getItem(a){return this._getWatchdog(a)._item}getItemState(a){return this._getWatchdog(a).state}add(a){const e=Ly(a);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let r;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return r=new By(null,this._watchdogConfig),r.setCreator(t.creator),r._setExcludedProperties(this._contextProps),t.destructor&&r.setDestructor(t.destructor),this._watchdogs.set(t.id,r),r.on("error",(s,{error:l,causesRestart:u})=>{this._fire("itemError",{itemId:t.id,error:l}),u&&this._actionQueues.enqueue(t.id,()=>new Promise(p=>{const g=()=>{r.off("restart",g),this._fire("itemRestart",{itemId:t.id}),p()};r.on("restart",g)}))}),r.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(a){const e=Ly(a);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const r=this._getWatchdog(t);return this._watchdogs.delete(t),r.destroy()})))}destroy(){return this._actionQueues.enqueue(hd,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(hd,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(a=>{console.error("An error happened during destroying the context or items.",a)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(a=>(this._context=a,this._contextProps=jm(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const a=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(a))})}_getWatchdog(a){const e=this._watchdogs.get(a);if(!e)throw new Error(`Item with the given id was not registered: ${a}.`);return e}_isErrorComingFromThisItem(a){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(a))return!1;return Py(this._context,a.context)}};const n0=["left","right","center","justify"];function eC(a){return n0.includes(a)}function tC(a,e){return e.contentLanguageDirection=="rtl"?a==="right":a==="left"}function nC(a){const e=a.map(r=>{let s;return s=typeof r=="string"?{name:r}:r,s}).filter(r=>{const s=n0.includes(r.name);return s||$("alignment-config-name-not-recognized",{option:r}),s}),t=e.filter(r=>!!r.className).length;if(t&&t<e.length)throw new S("alignment-config-classnames-are-missing",{configuredOptions:a});return e.forEach((r,s,l)=>{const u=l.slice(s+1);if(u.some(p=>p.name==r.name))throw new S("alignment-config-name-already-defined",{option:r,configuredOptions:a});if(r.className&&u.some(p=>p.className==r.className))throw new S("alignment-config-classname-already-defined",{option:r,configuredOptions:a})}),e}const i0="alignment";class qO extends bt{refresh(){const e=this.editor.locale,t=kn(this.editor.model.document.selection.getSelectedBlocks());this.isEnabled=!!t&&this._canBeAligned(t),this.isEnabled&&t.hasAttribute("alignment")?this.value=t.getAttribute("alignment"):this.value=e.contentLanguageDirection==="rtl"?"right":"left"}execute(e={}){const t=this.editor,r=t.locale,s=t.model,l=s.document,u=e.value;s.change(p=>{const g=Array.from(l.selection.getSelectedBlocks()).filter(_=>this._canBeAligned(_)),b=g[0].getAttribute("alignment");tC(u,r)||b===u||!u?function(_,A){for(const x of _)A.removeAttribute(i0,x)}(g,p):function(_,A,x){for(const T of _)A.setAttribute(i0,x,T)}(g,p,u)})}_canBeAligned(e){return this.editor.model.schema.checkAttribute(e,i0)}}class GO extends ue{static get pluginName(){return"AlignmentEditing"}constructor(e){super(e),e.config.define("alignment",{options:n0.map(t=>({name:t}))})}init(){const e=this.editor,t=e.locale,r=e.model.schema,s=nC(e.config.get("alignment.options")).filter(g=>eC(g.name)&&!tC(g.name,t)),l=s.some(g=>!!g.className);r.extend("$block",{allowAttributes:"alignment"}),e.model.schema.setAttributeProperties("alignment",{isFormatting:!0}),l?e.conversion.attributeToAttribute(function(g){const b={};for(const A of g)b[A.name]={key:"class",value:A.className};return{model:{key:"alignment",values:g.map(A=>A.name)},view:b}}(s)):e.conversion.for("downcast").attributeToAttribute(function(g){const b={};for(const{name:A}of g)b[A]={key:"style",value:{"text-align":A}};return{model:{key:"alignment",values:g.map(A=>A.name)},view:b}}(s));const u=function(g){const b=[];for(const{name:_}of g)b.push({view:{key:"style",value:{"text-align":_}},model:{key:"alignment",value:_}});return b}(s);for(const g of u)e.conversion.for("upcast").attributeToAttribute(g);const p=function(g){const b=[];for(const{name:_}of g)b.push({view:{key:"align",value:_},model:{key:"alignment",value:_}});return b}(s);for(const g of p)e.conversion.for("upcast").attributeToAttribute(g);e.commands.add("alignment",new qO(e))}}const Xh=new Map([["left",$e.alignLeft],["right",$e.alignRight],["center",$e.alignCenter],["justify",$e.alignJustify]]);class YO extends ue{get localizedOptionTitles(){const e=this.editor.t;return{left:e("Align left"),right:e("Align right"),center:e("Align center"),justify:e("Justify")}}static get pluginName(){return"AlignmentUI"}init(){const e=this.editor,t=e.ui.componentFactory,r=e.t,s=nC(e.config.get("alignment.options"));s.map(l=>l.name).filter(eC).forEach(l=>this._addButton(l)),t.add("alignment",l=>{const u=Xo(l);qh(u,()=>s.map(b=>t.create(`alignment:${b.name}`)),{enableActiveItemFocusOnDropdownOpen:!0,isVertical:!0,ariaLabel:r("Text alignment toolbar")}),u.buttonView.set({label:r("Text alignment"),tooltip:!0}),u.extendTemplate({attributes:{class:"ck-alignment-dropdown"}});const p=l.contentLanguageDirection==="rtl"?Xh.get("right"):Xh.get("left"),g=e.commands.get("alignment");return u.buttonView.bind("icon").to(g,"value",b=>Xh.get(b)||p),u.bind("isEnabled").to(g,"isEnabled"),this.listenTo(u,"execute",()=>{e.editing.view.focus()}),u})}_addButton(e){const t=this.editor;t.ui.componentFactory.add(`alignment:${e}`,r=>{const s=t.commands.get("alignment"),l=new rt(r);return l.set({label:this.localizedOptionTitles[e],icon:Xh.get(e),tooltip:!0,isToggleable:!0}),l.bind("isEnabled").to(s),l.bind("isOn").to(s,"value",u=>u===e),this.listenTo(l,"execute",()=>{t.execute("alignment",{value:e}),t.editing.view.focus()}),l})}}class iC{constructor(e,t=20){this._batch=null,this.model=e,this._size=0,this.limit=t,this._isLocked=!1,this._changeCallback=(r,s)=>{s.isLocal&&s.isUndoable&&s!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}get size(){return this._size}input(e){this._size+=e,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e=!1){this.isLocked&&!e||(this._batch=null,this._size=0)}}class KO extends bt{constructor(e,t){super(e),this._buffer=new iC(e.model,t),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,r=t.document,s=e.text||"",l=s.length;let u=r.selection;if(e.selection?u=e.selection:e.range&&(u=t.createSelection(e.range)),!t.canEditAt(u))return;const p=e.resultRange;t.enqueueChange(this._buffer.batch,g=>{this._buffer.lock(),t.deleteContent(u),s&&t.insertContent(g.createText(s,r.selection.getAttributes()),u),p?g.setSelection(p):u.is("documentSelection")||g.setSelection(u),this._buffer.unlock(),this._buffer.input(l)})}}const rC=["insertText","insertReplacementText"];class ZO extends Rr{constructor(e){super(e),this.focusObserver=e.getObserver(Bh),f.isAndroid&&rC.push("insertCompositionText");const t=e.document;t.on("beforeinput",(r,s)=>{if(!this.isEnabled)return;const{data:l,targetRanges:u,inputType:p,domEvent:g}=s;if(!rC.includes(p))return;this.focusObserver.flush();const b=new E(t,"insertText");t.fire(b,new tc(e,g,{text:l,selection:e.createSelection(u)})),b.stop.called&&r.stop()}),t.on("compositionend",(r,{data:s,domEvent:l})=>{this.isEnabled&&!f.isAndroid&&s&&t.fire("insertText",new tc(e,l,{text:s,selection:t.selection}))},{priority:"lowest"})}observe(){}stopObserving(){}}class oC extends ue{static get pluginName(){return"Input"}init(){const e=this.editor,t=e.model,r=e.editing.view,s=t.document.selection;r.addObserver(ZO);const l=new KO(e,e.config.get("typing.undoStep")||20);e.commands.add("insertText",l),e.commands.add("input",l),this.listenTo(r.document,"insertText",(u,p)=>{r.document.isComposing||p.preventDefault();const{text:g,selection:b,resultRange:_}=p,A=Array.from(b.getRanges()).map(B=>e.editing.mapper.toModelRange(B));let x=g;if(f.isAndroid){const B=Array.from(A[0].getItems()).reduce((z,R)=>z+(R.is("$textProxy")?R.data:""),"");B&&(B.length<=x.length?x.startsWith(B)&&(x=x.substring(B.length),A[0].start=A[0].start.getShiftedBy(B.length)):B.startsWith(x)&&(A[0].start=A[0].start.getShiftedBy(x.length),x=""))}const T={text:x,selection:t.createSelection(A)};_&&(T.resultRange=e.editing.mapper.toModelRange(_)),e.execute("insertText",T),r.scrollToTheSelection()}),f.isAndroid?this.listenTo(r.document,"keydown",(u,p)=>{!s.isCollapsed&&p.keyCode==229&&r.document.isComposing&&sC(t,l)}):this.listenTo(r.document,"compositionstart",()=>{s.isCollapsed||sC(t,l)})}}function sC(a,e){if(!e.isEnabled)return;const t=e.buffer;t.lock(),a.enqueueChange(t.batch,()=>{a.deleteContent(a.document.selection)}),t.unlock()}class aC extends bt{constructor(e,t){super(e),this.direction=t,this._buffer=new iC(e.model,e.config.get("typing.undoStep")),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,r=t.document;t.enqueueChange(this._buffer.batch,s=>{this._buffer.lock();const l=s.createSelection(e.selection||r.selection);if(!t.canEditAt(l))return;const u=e.sequence||1,p=l.isCollapsed;if(l.isCollapsed&&t.modifySelection(l,{direction:this.direction,unit:e.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(u))return void this._replaceEntireContentWithParagraph(s);if(this._shouldReplaceFirstBlockWithParagraph(l,u))return void this.editor.execute("paragraph",{selection:l});if(l.isCollapsed)return;let g=0;l.getFirstRange().getMinimalFlatRanges().forEach(b=>{g+=vi(b.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(l,{doNotResetEntireContent:p,direction:this.direction}),this._buffer.input(g),s.setSelection(l),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,r=t.document.selection,s=t.schema.getLimitElement(r);if(!(r.isCollapsed&&r.containsEntireContent(s))||!t.schema.checkChild(s,"paragraph"))return!1;const l=s.getChild(0);return!l||!l.is("element","paragraph")}_replaceEntireContentWithParagraph(e){const t=this.editor.model,r=t.document.selection,s=t.schema.getLimitElement(r),l=e.createElement("paragraph");e.remove(e.createRangeIn(s)),e.insert(l,s),e.setSelection(l,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const r=this.editor.model;if(t>1||this.direction!="backward"||!e.isCollapsed)return!1;const s=e.getFirstPosition(),l=r.schema.getLimitElement(s),u=l.getChild(0);return s.parent==u&&!!e.containsEntireContent(u)&&!!r.schema.checkChild(l,"paragraph")&&u.name!="paragraph"}}const cC="word",es="selection",cc="backward",bd="forward",lC={deleteContent:{unit:es,direction:cc},deleteContentBackward:{unit:"codePoint",direction:cc},deleteWordBackward:{unit:cC,direction:cc},deleteHardLineBackward:{unit:es,direction:cc},deleteSoftLineBackward:{unit:es,direction:cc},deleteContentForward:{unit:"character",direction:bd},deleteWordForward:{unit:cC,direction:bd},deleteHardLineForward:{unit:es,direction:bd},deleteSoftLineForward:{unit:es,direction:bd}};class QO extends Rr{constructor(e){super(e);const t=e.document;let r=0;t.on("keydown",()=>{r++}),t.on("keyup",()=>{r=0}),t.on("beforeinput",(s,l)=>{if(!this.isEnabled)return;const{targetRanges:u,domEvent:p,inputType:g}=l,b=lC[g];if(!b)return;const _={direction:b.direction,unit:b.unit,sequence:r};_.unit==es&&(_.selectionToRemove=e.createSelection(u[0])),g==="deleteContentBackward"&&(f.isAndroid&&(_.sequence=1),function(x){if(x.length!=1||x[0].isCollapsed)return!1;const T=x[0].getWalker({direction:"backward",singleCharacters:!0,ignoreElementEnd:!0});let B=0;for(const{nextPosition:z}of T){if(z.parent.is("$text")){const R=z.parent.data,G=z.offset;if(im(R,G)||rm(R,G)||jv(R,G))continue;B++}else B++;if(B>1)return!0}return!1}(u)&&(_.unit=es,_.selectionToRemove=e.createSelection(u)));const A=new Xa(t,"delete",u[0]);t.fire(A,new tc(e,p,_)),A.stop.called&&s.stop()}),f.isBlink&&function(s){const l=s.view,u=l.document;let p=null,g=!1;function b(A){return A==Ge.backspace||A==Ge.delete}function _(A){return A==Ge.backspace?cc:bd}u.on("keydown",(A,{keyCode:x})=>{p=x,g=!1}),u.on("keyup",(A,{keyCode:x,domEvent:T})=>{const B=u.selection,z=s.isEnabled&&x==p&&b(x)&&!B.isCollapsed&&!g;if(p=null,z){const R=B.getFirstRange(),G=new Xa(u,"delete",R),te={unit:es,direction:_(x),selectionToRemove:B};u.fire(G,new tc(l,T,te))}}),u.on("beforeinput",(A,{inputType:x})=>{const T=lC[x];b(p)&&T&&T.direction==_(p)&&(g=!0)},{priority:"high"}),u.on("beforeinput",(A,{inputType:x,data:T})=>{p==Ge.delete&&x=="insertText"&&T==""&&A.stop()},{priority:"high"})}(this)}observe(){}stopObserving(){}}class Hr extends ue{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,r=t.document,s=e.model.document;t.addObserver(QO),this._undoOnBackspace=!1;const l=new aC(e,"forward");e.commands.add("deleteForward",l),e.commands.add("forwardDelete",l),e.commands.add("delete",new aC(e,"backward")),this.listenTo(r,"delete",(u,p)=>{r.isComposing||p.preventDefault();const{direction:g,sequence:b,selectionToRemove:_,unit:A}=p,x=g==="forward"?"deleteForward":"delete",T={sequence:b};if(A=="selection"){const B=Array.from(_.getRanges()).map(z=>e.editing.mapper.toModelRange(z));T.selection=e.model.createSelection(B)}else T.unit=A;e.execute(x,T),t.scrollToTheSelection()},{priority:"low"}),this.editor.plugins.has("UndoEditing")&&(this.listenTo(r,"delete",(u,p)=>{this._undoOnBackspace&&p.direction=="backward"&&p.sequence==1&&p.unit=="codePoint"&&(this._undoOnBackspace=!1,e.execute("undo"),p.preventDefault(),u.stop())},{context:"$capture"}),this.listenTo(s,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class JO extends ue{static get requires(){return[oC,Hr]}static get pluginName(){return"Typing"}}function dC(a,e){let t=a.start;return{text:Array.from(a.getWalker({ignoreElementEnd:!1})).reduce((r,{item:s})=>s.is("$text")||s.is("$textProxy")?r+s.data:(t=e.createPositionAfter(s),""),""),range:e.createRange(t,a.end)}}class uC extends Me(){constructor(e,t){super(),this.model=e,this.testCallback=t,this._hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){const e=this.model.document;this.listenTo(e.selection,"change:range",(t,{directChange:r})=>{r&&(e.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this._hasMatch=!1))}),this.listenTo(e,"change:data",(t,r)=>{!r.isUndo&&r.isLocal&&this._evaluateTextBeforeSelection("data",{batch:r})})}_evaluateTextBeforeSelection(e,t={}){const r=this.model,s=r.document.selection,l=r.createRange(r.createPositionAt(s.focus.parent,0),s.focus),{text:u,range:p}=dC(l,r),g=this.testCallback(u);if(!g&&this.hasMatch&&this.fire("unmatched"),this._hasMatch=!!g,g){const b=Object.assign(t,{text:u,range:p});typeof g=="object"&&Object.assign(b,g),this.fire(`matched:${e}`,b)}}}class hC extends ue{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,r=e.editing.view,s=e.locale,l=t.document.selection;this.listenTo(r.document,"arrowKey",(u,p)=>{if(!l.isCollapsed||p.shiftKey||p.altKey||p.ctrlKey)return;const g=p.keyCode==Ge.arrowright,b=p.keyCode==Ge.arrowleft;if(!g&&!b)return;const _=s.contentLanguageDirection;let A=!1;A=_==="ltr"&&g||_==="rtl"&&b?this._handleForwardMovement(p):this._handleBackwardMovement(p),A===!0&&u.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(l,"change:range",(u,p)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!p.directChange&&tf(l.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,r=this.editor.model.document.selection,s=r.getFirstPosition();return!this._isGravityOverridden&&(!s.isAtStart||!r0(r,t))&&!!tf(s,t)&&(ef(e),this._overrideGravity(),!0)}_handleBackwardMovement(e){const t=this.attributes,r=this.editor.model,s=r.document.selection,l=s.getFirstPosition();return this._isGravityOverridden?(ef(e),this._restoreGravity(),o0(r,t,l),!0):l.isAtStart?!!r0(s,t)&&(ef(e),o0(r,t,l),!0):!!function(u,p){const g=u.getShiftedBy(-1);return tf(g,p)}(l,t)&&(l.isAtEnd&&!r0(s,t)&&tf(l,t)?(ef(e),o0(r,t,l),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1))}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function r0(a,e){for(const t of e)if(a.hasAttribute(t))return!0;return!1}function o0(a,e,t){const r=t.nodeBefore;a.change(s=>{if(r){const l=[],u=a.schema.isObject(r)&&a.schema.isInline(r);for(const[p,g]of r.getAttributes())!a.schema.checkAttribute("$text",p)||u&&a.schema.getAttributeProperties(p).copyFromObject===!1||l.push([p,g]);s.setSelectionAttribute(l)}else s.removeSelectionAttribute(e)})}function ef(a){a.preventDefault()}function tf(a,e){const{nodeBefore:t,nodeAfter:r}=a;for(const s of e){const l=t?t.getAttribute(s):void 0;if((r?r.getAttribute(s):void 0)!==l)return!0}return!1}const fC={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"½",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"⅓",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"⅔",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"¼",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"¾",null]},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:lc('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:lc("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:lc("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:lc('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:lc('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:lc("'"),to:[null,"‚",null,"’"]}},pC={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},XO=["symbols","mathematical","typography","quotes"];function eP(a){return typeof a=="string"?new RegExp(`(${YA(a)})$`):a}function tP(a){return typeof a=="string"?()=>[a]:a instanceof Array?()=>a:a}function nP(a){return(a.textNode?a.textNode:a.nodeAfter).getAttributes()}function lc(a){return new RegExp(`(^|\\s)(${a})([^${a}]*)(${a})$`)}function dc(a,e,t,r){return r.createRange(gC(a,e,t,!0,r),gC(a,e,t,!1,r))}function gC(a,e,t,r,s){let l=a.textNode||(r?a.nodeBefore:a.nodeAfter),u=null;for(;l&&l.getAttribute(e)==t;)u=l,l=r?l.previousSibling:l.nextSibling;return u?s.createPositionAt(u,r?"before":"after"):a}function ts(a,e,t,r){let s,l=null;typeof r=="function"?s=r:(l=a.commands.get(r),s=()=>{a.execute(r)}),a.model.document.on("change:data",(u,p)=>{if(l&&!l.isEnabled||!e.isEnabled)return;const g=kn(a.model.document.selection.getRanges());if(!g.isCollapsed||p.isUndo||!p.isLocal)return;const b=Array.from(a.model.document.differ.getChanges()),_=b[0];if(b.length!=1||_.type!=="insert"||_.name!="$text"||_.length!=1)return;const A=_.position.parent;if(A.is("element","codeBlock")||A.is("element","listItem")&&typeof r!="function"&&!["numberedList","bulletedList","todoList"].includes(r)||l&&l.value===!0)return;const x=A.getChild(0),T=a.model.createRangeOn(x);if(!T.containsRange(g)&&!g.end.isEqual(T.end))return;const B=t.exec(x.data.substr(0,g.end.offset));B&&a.model.enqueueChange(z=>{const R=z.createPositionAt(A,0),G=z.createPositionAt(A,B[0].length),te=new ci(R,G);if(s({match:B})!==!1){z.remove(te);const le=a.model.document.selection.getFirstRange(),xe=z.createRangeIn(A);!A.isEmpty||xe.isEqual(le)||xe.containsRange(le,!0)||z.remove(A)}te.detach(),a.model.enqueueChange(()=>{a.plugins.get("Delete").requestUndoOnBackspace()})})})}function uc(a,e,t,r){let s,l;t instanceof RegExp?s=t:l=t,l=l||(u=>{let p;const g=[],b=[];for(;(p=s.exec(u))!==null&&!(p&&p.length<4);){let{index:_,1:A,2:x,3:T}=p;const B=A+x+T;_+=p[0].length-B.length;const z=[_,_+A.length],R=[_+A.length+x.length,_+A.length+x.length+T.length];g.push(z),g.push(R),b.push([_+A.length,_+A.length+x.length])}return{remove:g,format:b}}),a.model.document.on("change:data",(u,p)=>{if(p.isUndo||!p.isLocal||!e.isEnabled)return;const g=a.model,b=g.document.selection;if(!b.isCollapsed)return;const _=Array.from(g.document.differ.getChanges()),A=_[0];if(_.length!=1||A.type!=="insert"||A.name!="$text"||A.length!=1)return;const x=b.focus,T=x.parent,{text:B,range:z}=function(le,xe){let He=le.start;return{text:Array.from(le.getItems()).reduce((Gr,Kn)=>!Kn.is("$text")&&!Kn.is("$textProxy")||Kn.getAttribute("code")?(He=xe.createPositionAfter(Kn),""):Gr+Kn.data,""),range:xe.createRange(He,le.end)}}(g.createRange(g.createPositionAt(T,0),x),g),R=l(B),G=mC(z.start,R.format,g),te=mC(z.start,R.remove,g);G.length&&te.length&&g.enqueueChange(le=>{if(r(le,G)!==!1){for(const xe of te.reverse())le.remove(xe);g.enqueueChange(()=>{a.plugins.get("Delete").requestUndoOnBackspace()})}})})}function mC(a,e,t){return e.filter(r=>r[0]!==void 0&&r[1]!==void 0).map(r=>t.createRange(a.getShiftedBy(r[0]),a.getShiftedBy(r[1])))}function nf(a,e){return(t,r)=>{if(!a.commands.get(e).isEnabled)return!1;const s=a.model.schema.getValidRanges(r,e);for(const l of s)t.setAttribute(e,!0,l);t.removeSelectionAttribute(e)}}class kC extends bt{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,r=t.document.selection,s=e.forceValue===void 0?!this.value:e.forceValue;t.change(l=>{if(r.isCollapsed)s?l.setSelectionAttribute(this.attributeKey,!0):l.removeSelectionAttribute(this.attributeKey);else{const u=t.schema.getValidRanges(r.getRanges(),this.attributeKey);for(const p of u)s?l.setAttribute(this.attributeKey,s,p):l.removeAttribute(this.attributeKey,p)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,r=e.document.selection;if(r.isCollapsed)return r.hasAttribute(this.attributeKey);for(const s of r.getRanges())for(const l of s.getItems())if(t.checkAttribute(l,this.attributeKey))return l.hasAttribute(this.attributeKey);return!1}}const hc="bold";class iP extends ue{static get pluginName(){return"BoldEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:hc}),e.model.schema.setAttributeProperties(hc,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:hc,view:"strong",upcastAlso:["b",t=>{const r=t.getStyle("font-weight");return r&&(r=="bold"||Number(r)>=600)?{name:!0,styles:["font-weight"]}:null}]}),e.commands.add(hc,new kC(e,hc)),e.keystrokes.set("CTRL+B",hc)}}const s0="bold";class rP extends ue{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(s0,r=>{const s=e.commands.get(s0),l=new rt(r);return l.set({label:t("Bold"),icon:$e.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),l.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(l,"execute",()=>{e.execute(s0),e.editing.view.focus()}),l})}}var bC=o(5363),oP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(bC.Z,oP),bC.Z.locals;const fc="italic";class sP extends ue{static get pluginName(){return"ItalicEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:fc}),e.model.schema.setAttributeProperties(fc,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:fc,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),e.commands.add(fc,new kC(e,fc)),e.keystrokes.set("CTRL+I",fc)}}const a0="italic";class aP extends ue{static get pluginName(){return"ItalicUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(a0,r=>{const s=e.commands.get(a0),l=new rt(r);return l.set({label:t("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),l.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(l,"execute",()=>{e.execute(a0),e.editing.view.focus()}),l})}}function*wC(a,e){for(const t of e)t&&a.getAttributeProperties(t[0]).copyOnEnter&&(yield t)}class cP extends bt{execute(){this.editor.model.change(e=>{this.enterBlock(e),this.fire("afterExecute",{writer:e})})}enterBlock(e){const t=this.editor.model,r=t.document.selection,s=t.schema,l=r.isCollapsed,u=r.getFirstRange(),p=u.start.parent,g=u.end.parent;if(s.isLimit(p)||s.isLimit(g))return l||p!=g||t.deleteContent(r),!1;if(l){const b=wC(e.model.schema,r.getAttributes());return vC(e,u.start),e.setSelectionAttribute(b),!0}{const b=!(u.start.isAtStart&&u.end.isAtEnd),_=p==g;if(t.deleteContent(r,{leaveUnmerged:b}),b){if(_)return vC(e,r.focus),!0;e.setSelection(g,0)}}return!1}}function vC(a,e){a.split(e),a.setSelection(e.parent.nextSibling,0)}const lP={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class _C extends Rr{constructor(e){super(e);const t=this.document;let r=!1;t.on("keydown",(s,l)=>{r=l.shiftKey}),t.on("beforeinput",(s,l)=>{if(!this.isEnabled)return;let u=l.inputType;f.isSafari&&r&&u=="insertParagraph"&&(u="insertLineBreak");const p=l.domEvent,g=lP[u];if(!g)return;const b=new Xa(t,"enter",l.targetRanges[0]);t.fire(b,new tc(e,p,{isSoft:g.isSoft})),b.stop.called&&s.stop()})}observe(){}stopObserving(){}}class rf extends ue{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,r=t.document;t.addObserver(_C),e.commands.add("enter",new cP(e)),this.listenTo(r,"enter",(s,l)=>{r.isComposing||l.preventDefault(),l.isSoft||(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"})}}class dP extends bt{execute(){const e=this.editor.model,t=e.document;e.change(r=>{(function(s,l,u){const p=u.isCollapsed,g=u.getFirstRange(),b=g.start.parent,_=g.end.parent,A=b==_;if(p){const x=wC(s.schema,u.getAttributes());yC(s,l,g.end),l.removeSelectionAttribute(u.getAttributeKeys()),l.setSelectionAttribute(x)}else{const x=!(g.start.isAtStart&&g.end.isAtEnd);s.deleteContent(u,{leaveUnmerged:x}),A?yC(s,l,u.focus):x&&l.setSelection(_,0)}})(e,r,t.selection),this.fire("afterExecute",{writer:r})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=function(r,s){if(s.rangeCount>1)return!1;const l=s.anchor;if(!l||!r.checkChild(l,"softBreak"))return!1;const u=s.getFirstRange(),p=u.start.parent,g=u.end.parent;return!((c0(p,r)||c0(g,r))&&p!==g)}(e.schema,t.selection)}}function yC(a,e,t){const r=e.createElement("softBreak");a.insertContent(r,t),e.setSelection(r,"after")}function c0(a,e){return!a.is("rootElement")&&(e.isLimit(a)||c0(a.parent,e))}class uP extends ue{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,r=e.conversion,s=e.editing.view,l=s.document;t.register("softBreak",{allowWhere:"$text",isInline:!0}),r.for("upcast").elementToElement({model:"softBreak",view:"br"}),r.for("downcast").elementToElement({model:"softBreak",view:(u,{writer:p})=>p.createEmptyElement("br")}),s.addObserver(_C),e.commands.add("shiftEnter",new dP(e)),this.listenTo(l,"enter",(u,p)=>{l.isComposing||p.preventDefault(),p.isSoft&&(e.execute("shiftEnter"),s.scrollToTheSelection())},{priority:"low"})}}class hP extends bt{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,r=t.schema,s=t.document.selection,l=Array.from(s.getSelectedBlocks()),u=e.forceValue===void 0?!this.value:e.forceValue;t.change(p=>{if(u){const g=l.filter(b=>of(b)||CC(r,b));this._applyQuote(p,g)}else this._removeQuote(p,l.filter(of))})}_getValue(){const e=kn(this.editor.model.document.selection.getSelectedBlocks());return!(!e||!of(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,r=kn(e.getSelectedBlocks());return!!r&&CC(t,r)}_removeQuote(e,t){AC(e,t).reverse().forEach(r=>{if(r.start.isAtStart&&r.end.isAtEnd)return void e.unwrap(r.start.parent);if(r.start.isAtStart){const l=e.createPositionBefore(r.start.parent);return void e.move(r,l)}r.end.isAtEnd||e.split(r.end);const s=e.createPositionAfter(r.end.parent);e.move(r,s)})}_applyQuote(e,t){const r=[];AC(e,t).reverse().forEach(s=>{let l=of(s.start);l||(l=e.createElement("blockQuote"),e.wrap(s,l)),r.push(l)}),r.reverse().reduce((s,l)=>s.nextSibling==l?(e.merge(e.createPositionAfter(s)),s):l)}}function of(a){return a.parent.name=="blockQuote"?a.parent:null}function AC(a,e){let t,r=0;const s=[];for(;r<e.length;){const l=e[r],u=e[r+1];t||(t=a.createPositionBefore(l)),u&&l.nextSibling==u||(s.push(a.createRange(t,a.createPositionAfter(l))),t=null),r++}return s}function CC(a,e){const t=a.checkChild(e.parent,"blockQuote"),r=a.checkChild(["$root","blockQuote"],e);return t&&r}class fP extends ue{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[rf,Hr]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new hP(e)),t.register("blockQuote",{inheritAllFrom:"$container"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(u=>{const p=e.model.document.differ.getChanges();for(const g of p)if(g.type=="insert"){const b=g.position.nodeAfter;if(!b)continue;if(b.is("element","blockQuote")&&b.isEmpty)return u.remove(b),!0;if(b.is("element","blockQuote")&&!t.checkChild(g.position,b))return u.unwrap(b),!0;if(b.is("element")){const _=u.createRangeIn(b);for(const A of _.getItems())if(A.is("element","blockQuote")&&!t.checkChild(u.createPositionBefore(A),A))return u.unwrap(A),!0}}else if(g.type=="remove"){const b=g.position.parent;if(b.is("element","blockQuote")&&b.isEmpty)return u.remove(b),!0}return!1});const r=this.editor.editing.view.document,s=e.model.document.selection,l=e.commands.get("blockQuote");this.listenTo(r,"enter",(u,p)=>{!s.isCollapsed||!l.value||s.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),p.preventDefault(),u.stop())},{context:"blockquote"}),this.listenTo(r,"delete",(u,p)=>{if(p.direction!="backward"||!s.isCollapsed||!l.value)return;const g=s.getLastPosition().parent;g.isEmpty&&!g.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),p.preventDefault(),u.stop())},{context:"blockquote"})}}var xC=o(3789),pP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(xC.Z,pP),xC.Z.locals;class gP extends ue{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("blockQuote",r=>{const s=e.commands.get("blockQuote"),l=new rt(r);return l.set({label:t("Block quote"),icon:$e.quote,tooltip:!0,isToggleable:!0}),l.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(l,"execute",()=>{e.execute("blockQuote"),e.editing.view.focus()}),l})}}class wd extends Xs{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function r(s){return(l,u)=>{u.preventDefault();const p=u.dropRange?[u.dropRange]:null,g=new E(t,s);t.fire(g,{dataTransfer:u.dataTransfer,method:l.name,targetRanges:p,target:u.target,domEvent:u.domEvent}),g.stop.called&&u.stopPropagation()}}this.listenTo(t,"paste",r("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",r("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",r("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,r=e.type=="drop"||e.type=="paste",s={dataTransfer:new P_(t,{cacheFiles:r})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(l,u){const p=u.target.ownerDocument,g=u.clientX,b=u.clientY;let _;return p.caretRangeFromPoint&&p.caretRangeFromPoint(g,b)?_=p.caretRangeFromPoint(g,b):u.rangeParent&&(_=p.createRange(),_.setStart(u.rangeParent,u.rangeOffset),_.collapse(!0)),_?l.domConverter.domRangeToView(_):null}(this.view,e)),this.fire(e.type,e,s)}}const EC=["figcaption","li"];function SC(a){let e="";if(a.is("$text")||a.is("$textProxy"))e=a.data;else if(a.is("element","img")&&a.hasAttribute("alt"))e=a.getAttribute("alt");else if(a.is("element","br"))e=`
`;else{let t=null;for(const r of a.getChildren()){const s=SC(r);t&&(t.is("containerElement")||r.is("containerElement"))&&(EC.includes(t.name)||EC.includes(r.name)?e+=`
`:e+=`

<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3H9V5H6.46173L11.3047 9.84298L9.8905 11.2572L5 6.3667V9H3V3Z" fill="black"/>
<path d="M3 21H9V19H6.3764L11.3046 14.0718L9.89038 12.6576L5 17.548V15H3V21Z" fill="black"/>
<path d="M15 21H21V15H19V17.5244L14.1332 12.6576L12.719 14.0718L17.6472 19H15V21Z" fill="black"/>
<path d="M21 3H15V5H17.5619L12.7189 9.84301L14.1331 11.2572L19 6.39032V9H21V3Z" fill="black"/>
</svg>
`,tooltip:!0}),t.bind("isOn").to(this,"isFullScreen"),a.config.get(Qx),a.config.get(Jx),t.on("execute",()=>{(r=>{const s=r.ui.view.editable.element;s.requestFullscreen?s.requestFullscreen():s.mozRequestFullScreen?s.mozRequestFullScreen():s.webkitRequestFullscreen?s.webkitRequestFullscreen():s.msRequestFullscreen&&s.msRequestFullscreen()})(this.editor)}),t})}_restoreStyle(a,e,t,r){t!==void 0?a.setStyle(e,t,r):a.removeStyle(e,r)}_restoreStyles(a,e){this._restoreStyle(a,"height",this.styles.height,e),this._restoreStyle(a,"overflow-y",this.styles["overflow-y"],e)}}],N0.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","alignment","|","imageInsert","blockQuote","mediaEmbed","undo","redo","fullscreen"]},language:"en",image:{toolbar:["imageTextAlternative","toggleImageCaption","imageStyle:inline","imageStyle:block","imageStyle:side","linkImage"]}};const wL=N0})(),c=c.default})());const b$=($t.exports==null?{}:$t.exports).default||$t.exports;($t.exports==null?{}:$t.exports).InlineEditor;const gk="focusScope.autoFocusOnMount",mk="focusScope.autoFocusOnUnmount",d5={bubbles:!1,cancelable:!0},w$=M.forwardRef((i,n)=>{const{loop:o=!1,trapped:c=!1,onMountAutoFocus:d,onUnmountAutoFocus:h,...f}=i,[m,k]=M.useState(null),v=Ns(d),w=Ns(h),y=M.useRef(null),C=no(n,I=>k(I)),E=M.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;M.useEffect(()=>{if(c){let L=function(J){if(E.paused||!m)return;const Z=J.target;m.contains(Z)?y.current=Z:cs(y.current,{select:!0})},S=function(J){if(E.paused||!m)return;const Z=J.relatedTarget;Z!==null&&(m.contains(Z)||cs(y.current,{select:!0}))},$=function(J){if(document.activeElement===document.body)for(const ee of J)ee.removedNodes.length>0&&cs(m)};var I=L,j=S,P=$;document.addEventListener("focusin",L),document.addEventListener("focusout",S);const H=new MutationObserver($);return m&&H.observe(m,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",L),document.removeEventListener("focusout",S),H.disconnect()}}},[c,m,E.paused]),M.useEffect(()=>{if(m){h5.add(E);const I=document.activeElement;if(!m.contains(I)){const P=new CustomEvent(gk,d5);m.addEventListener(gk,v),m.dispatchEvent(P),P.defaultPrevented||(v$(x$(tI(m)),{select:!0}),document.activeElement===I&&cs(m))}return()=>{m.removeEventListener(gk,v),setTimeout(()=>{const P=new CustomEvent(mk,d5);m.addEventListener(mk,w),m.dispatchEvent(P),P.defaultPrevented||cs(I??document.body,{select:!0}),m.removeEventListener(mk,w),h5.remove(E)},0)}}},[m,v,w,E]);const D=M.useCallback(I=>{if(!o&&!c||E.paused)return;const j=I.key==="Tab"&&!I.altKey&&!I.ctrlKey&&!I.metaKey,P=document.activeElement;if(j&&P){const L=I.currentTarget,[S,$]=_$(L);S&&$?!I.shiftKey&&P===$?(I.preventDefault(),o&&cs(S,{select:!0})):I.shiftKey&&P===S&&(I.preventDefault(),o&&cs($,{select:!0})):P===L&&I.preventDefault()}},[o,c,E.paused]);return M.createElement($i.div,st({tabIndex:-1},f,{ref:C,onKeyDown:D}))});function v$(i,{select:n=!1}={}){const o=document.activeElement;for(const c of i)if(cs(c,{select:n}),document.activeElement!==o)return}function _$(i){const n=tI(i),o=u5(n,i),c=u5(n.reverse(),i);return[o,c]}function tI(i){const n=[],o=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:c=>{const d=c.tagName==="INPUT"&&c.type==="hidden";return c.disabled||c.hidden||d?NodeFilter.FILTER_SKIP:c.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)n.push(o.currentNode);return n}function u5(i,n){for(const o of i)if(!y$(o,{upTo:n}))return o}function y$(i,{upTo:n}){if(getComputedStyle(i).visibility==="hidden")return!0;for(;i;){if(n!==void 0&&i===n)return!1;if(getComputedStyle(i).display==="none")return!0;i=i.parentElement}return!1}function A$(i){return i instanceof HTMLInputElement&&"select"in i}function cs(i,{select:n=!1}={}){if(i&&i.focus){const o=document.activeElement;i.focus({preventScroll:!0}),i!==o&&A$(i)&&n&&i.select()}}const h5=C$();function C$(){let i=[];return{add(n){const o=i[0];n!==o&&(o==null||o.pause()),i=f5(i,n),i.unshift(n)},remove(n){var o;i=f5(i,n),(o=i[0])===null||o===void 0||o.resume()}}}function f5(i,n){const o=[...i],c=o.indexOf(n);return c!==-1&&o.splice(c,1),o}function x$(i){return i.filter(n=>n.tagName!=="A")}let kk=0;function E$(){M.useEffect(()=>{var i,n;const o=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(i=o[0])!==null&&i!==void 0?i:p5()),document.body.insertAdjacentElement("beforeend",(n=o[1])!==null&&n!==void 0?n:p5()),kk++,()=>{kk===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(c=>c.remove()),kk--}},[])}function p5(){const i=document.createElement("span");return i.setAttribute("data-radix-focus-guard",""),i.tabIndex=0,i.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",i}var Qr=function(){return Qr=Object.assign||function(n){for(var o,c=1,d=arguments.length;c<d;c++){o=arguments[c];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(n[h]=o[h])}return n},Qr.apply(this,arguments)};function nI(i,n){var o={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&n.indexOf(c)<0&&(o[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,c=Object.getOwnPropertySymbols(i);d<c.length;d++)n.indexOf(c[d])<0&&Object.prototype.propertyIsEnumerable.call(i,c[d])&&(o[c[d]]=i[c[d]]);return o}function S$(i,n,o){if(o||arguments.length===2)for(var c=0,d=n.length,h;c<d;c++)(h||!(c in n))&&(h||(h=Array.prototype.slice.call(n,0,c)),h[c]=n[c]);return i.concat(h||Array.prototype.slice.call(n))}var mp="right-scroll-bar-position",kp="width-before-scroll-bar",D$="with-scroll-bars-hidden",T$="--removed-body-scroll-bar-size";function bk(i,n){return typeof i=="function"?i(n):i&&(i.current=n),i}function I$(i,n){var o=M.useState(function(){return{value:i,callback:n,facade:{get current(){return o.value},set current(c){var d=o.value;d!==c&&(o.value=c,o.callback(c,d))}}}})[0];return o.callback=n,o.facade}var g5=new WeakMap;function M$(i,n){var o=I$(n||null,function(c){return i.forEach(function(d){return bk(d,c)})});return M.useLayoutEffect(function(){var c=g5.get(o);if(c){var d=new Set(c),h=new Set(i),f=o.current;d.forEach(function(m){h.has(m)||bk(m,null)}),h.forEach(function(m){d.has(m)||bk(m,f)})}g5.set(o,i)},[i]),o}function N$(i){return i}function O$(i,n){n===void 0&&(n=N$);var o=[],c=!1,d={read:function(){if(c)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:i},useMedium:function(h){var f=n(h,c);return o.push(f),function(){o=o.filter(function(m){return m!==f})}},assignSyncMedium:function(h){for(c=!0;o.length;){var f=o;o=[],f.forEach(h)}o={push:function(m){return h(m)},filter:function(){return o}}},assignMedium:function(h){c=!0;var f=[];if(o.length){var m=o;o=[],m.forEach(h),f=o}var k=function(){var w=f;f=[],w.forEach(h)},v=function(){return Promise.resolve().then(k)};v(),o={push:function(w){f.push(w),v()},filter:function(w){return f=f.filter(w),o}}}};return d}function P$(i){i===void 0&&(i={});var n=O$(null);return n.options=Qr({async:!0,ssr:!1},i),n}var iI=function(i){var n=i.sideCar,o=nI(i,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var c=n.read();if(!c)throw new Error("Sidecar medium not found");return M.createElement(c,Qr({},o))};iI.isSideCarExport=!0;function B$(i,n){return i.useMedium(n),iI}var rI=P$(),wk=function(){},Mg=M.forwardRef(function(i,n){var o=M.useRef(null),c=M.useState({onScrollCapture:wk,onWheelCapture:wk,onTouchMoveCapture:wk}),d=c[0],h=c[1],f=i.forwardProps,m=i.children,k=i.className,v=i.removeScrollBar,w=i.enabled,y=i.shards,C=i.sideCar,E=i.noIsolation,D=i.inert,I=i.allowPinchZoom,j=i.as,P=j===void 0?"div":j,L=nI(i,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),S=C,$=M$([o,n]),H=Qr(Qr({},L),d);return M.createElement(M.Fragment,null,w&&M.createElement(S,{sideCar:rI,removeScrollBar:v,shards:y,noIsolation:E,inert:D,setCallbacks:h,allowPinchZoom:!!I,lockRef:o}),f?M.cloneElement(M.Children.only(m),Qr(Qr({},H),{ref:$})):M.createElement(P,Qr({},H,{className:k,ref:$}),m))});Mg.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Mg.classNames={fullWidth:kp,zeroRight:mp};var m5,L$=function(){if(m5)return m5;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function z$(){if(!document)return null;var i=document.createElement("style");i.type="text/css";var n=L$();return n&&i.setAttribute("nonce",n),i}function j$(i,n){i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}function R$(i){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(i)}var F$=function(){var i=0,n=null;return{add:function(o){i==0&&(n=z$())&&(j$(n,o),R$(n)),i++},remove:function(){i--,!i&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},V$=function(){var i=F$();return function(n,o){M.useEffect(function(){return i.add(n),function(){i.remove()}},[n&&o])}},oI=function(){var i=V$(),n=function(o){var c=o.styles,d=o.dynamic;return i(c,d),null};return n},$$={left:0,top:0,right:0,gap:0},vk=function(i){return parseInt(i||"",10)||0},U$=function(i){var n=window.getComputedStyle(document.body),o=n[i==="padding"?"paddingLeft":"marginLeft"],c=n[i==="padding"?"paddingTop":"marginTop"],d=n[i==="padding"?"paddingRight":"marginRight"];return[vk(o),vk(c),vk(d)]},H$=function(i){if(i===void 0&&(i="margin"),typeof window>"u")return $$;var n=U$(i),o=document.documentElement.clientWidth,c=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,c-o+n[2]-n[0])}},W$=oI(),q$=function(i,n,o,c){var d=i.left,h=i.top,f=i.right,m=i.gap;return o===void 0&&(o="margin"),`
  .`.concat(D$,` {
   overflow: hidden `).concat(c,`;
   padding-right: `).concat(m,"px ").concat(c,`;
  }
  body {
    overflow: hidden `).concat(c,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(c,";"),o==="margin"&&`
    padding-left: `.concat(d,`px;
    padding-top: `).concat(h,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m,"px ").concat(c,`;
    `),o==="padding"&&"padding-right: ".concat(m,"px ").concat(c,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(mp,` {
    right: `).concat(m,"px ").concat(c,`;
  }
  
  .`).concat(kp,` {
    margin-right: `).concat(m,"px ").concat(c,`;
  }
  
  .`).concat(mp," .").concat(mp,` {
    right: 0 `).concat(c,`;
  }
  
  .`).concat(kp," .").concat(kp,` {
    margin-right: 0 `).concat(c,`;
  }
  
  body {
    `).concat(T$,": ").concat(m,`px;
  }
`)},G$=function(i){var n=i.noRelative,o=i.noImportant,c=i.gapMode,d=c===void 0?"margin":c,h=M.useMemo(function(){return H$(d)},[d]);return M.createElement(W$,{styles:q$(h,!n,d,o?"":"!important")})},Yb=!1;if(typeof window<"u")try{var Hf=Object.defineProperty({},"passive",{get:function(){return Yb=!0,!0}});window.addEventListener("test",Hf,Hf),window.removeEventListener("test",Hf,Hf)}catch{Yb=!1}var bc=Yb?{passive:!1}:!1,Y$=function(i){return i.tagName==="TEXTAREA"},sI=function(i,n){var o=window.getComputedStyle(i);return o[n]!=="hidden"&&!(o.overflowY===o.overflowX&&!Y$(i)&&o[n]==="visible")},K$=function(i){return sI(i,"overflowY")},Z$=function(i){return sI(i,"overflowX")},k5=function(i,n){var o=n;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var c=aI(i,o);if(c){var d=cI(i,o),h=d[1],f=d[2];if(h>f)return!0}o=o.parentNode}while(o&&o!==document.body);return!1},Q$=function(i){var n=i.scrollTop,o=i.scrollHeight,c=i.clientHeight;return[n,o,c]},J$=function(i){var n=i.scrollLeft,o=i.scrollWidth,c=i.clientWidth;return[n,o,c]},aI=function(i,n){return i==="v"?K$(n):Z$(n)},cI=function(i,n){return i==="v"?Q$(n):J$(n)},X$=function(i,n){return i==="h"&&n==="rtl"?-1:1},eU=function(i,n,o,c,d){var h=X$(i,window.getComputedStyle(n).direction),f=h*c,m=o.target,k=n.contains(m),v=!1,w=f>0,y=0,C=0;do{var E=cI(i,m),D=E[0],I=E[1],j=E[2],P=I-j-h*D;(D||P)&&aI(i,m)&&(y+=P,C+=D),m=m.parentNode}while(!k&&m!==document.body||k&&(n.contains(m)||n===m));return(w&&(d&&y===0||!d&&f>y)||!w&&(d&&C===0||!d&&-f>C))&&(v=!0),v},Wf=function(i){return"changedTouches"in i?[i.changedTouches[0].clientX,i.changedTouches[0].clientY]:[0,0]},b5=function(i){return[i.deltaX,i.deltaY]},w5=function(i){return i&&"current"in i?i.current:i},tU=function(i,n){return i[0]===n[0]&&i[1]===n[1]},nU=function(i){return`
  .block-interactivity-`.concat(i,` {pointer-events: none;}
  .allow-interactivity-`).concat(i,` {pointer-events: all;}
`)},iU=0,wc=[];function rU(i){var n=M.useRef([]),o=M.useRef([0,0]),c=M.useRef(),d=M.useState(iU++)[0],h=M.useState(function(){return oI()})[0],f=M.useRef(i);M.useEffect(function(){f.current=i},[i]),M.useEffect(function(){if(i.inert){document.body.classList.add("block-interactivity-".concat(d));var I=S$([i.lockRef.current],(i.shards||[]).map(w5),!0).filter(Boolean);return I.forEach(function(j){return j.classList.add("allow-interactivity-".concat(d))}),function(){document.body.classList.remove("block-interactivity-".concat(d)),I.forEach(function(j){return j.classList.remove("allow-interactivity-".concat(d))})}}},[i.inert,i.lockRef.current,i.shards]);var m=M.useCallback(function(I,j){if("touches"in I&&I.touches.length===2)return!f.current.allowPinchZoom;var P=Wf(I),L=o.current,S="deltaX"in I?I.deltaX:L[0]-P[0],$="deltaY"in I?I.deltaY:L[1]-P[1],H,J=I.target,Z=Math.abs(S)>Math.abs($)?"h":"v";if("touches"in I&&Z==="h"&&J.type==="range")return!1;var ee=k5(Z,J);if(!ee)return!0;if(ee?H=Z:(H=Z==="v"?"h":"v",ee=k5(Z,J)),!ee)return!1;if(!c.current&&"changedTouches"in I&&(S||$)&&(c.current=H),!H)return!0;var de=c.current||H;return eU(de,j,I,de==="h"?S:$,!0)},[]),k=M.useCallback(function(I){var j=I;if(!(!wc.length||wc[wc.length-1]!==h)){var P="deltaY"in j?b5(j):Wf(j),L=n.current.filter(function(H){return H.name===j.type&&H.target===j.target&&tU(H.delta,P)})[0];if(L&&L.should){j.cancelable&&j.preventDefault();return}if(!L){var S=(f.current.shards||[]).map(w5).filter(Boolean).filter(function(H){return H.contains(j.target)}),$=S.length>0?m(j,S[0]):!f.current.noIsolation;$&&j.cancelable&&j.preventDefault()}}},[]),v=M.useCallback(function(I,j,P,L){var S={name:I,delta:j,target:P,should:L};n.current.push(S),setTimeout(function(){n.current=n.current.filter(function($){return $!==S})},1)},[]),w=M.useCallback(function(I){o.current=Wf(I),c.current=void 0},[]),y=M.useCallback(function(I){v(I.type,b5(I),I.target,m(I,i.lockRef.current))},[]),C=M.useCallback(function(I){v(I.type,Wf(I),I.target,m(I,i.lockRef.current))},[]);M.useEffect(function(){return wc.push(h),i.setCallbacks({onScrollCapture:y,onWheelCapture:y,onTouchMoveCapture:C}),document.addEventListener("wheel",k,bc),document.addEventListener("touchmove",k,bc),document.addEventListener("touchstart",w,bc),function(){wc=wc.filter(function(I){return I!==h}),document.removeEventListener("wheel",k,bc),document.removeEventListener("touchmove",k,bc),document.removeEventListener("touchstart",w,bc)}},[]);var E=i.removeScrollBar,D=i.inert;return M.createElement(M.Fragment,null,D?M.createElement(h,{styles:nU(d)}):null,E?M.createElement(G$,{gapMode:"margin"}):null)}const oU=B$(rI,rU);var lI=M.forwardRef(function(i,n){return M.createElement(Mg,Qr({},i,{ref:n,sideCar:oU}))});lI.classNames=Mg.classNames;const sU=lI;var aU=function(i){if(typeof document>"u")return null;var n=Array.isArray(i)?i[0]:i;return n.ownerDocument.body},vc=new WeakMap,qf=new WeakMap,Gf={},_k=0,dI=function(i){return i&&(i.host||dI(i.parentNode))},cU=function(i,n){return n.map(function(o){if(i.contains(o))return o;var c=dI(o);return c&&i.contains(c)?c:(console.error("aria-hidden",o,"in not contained inside",i,". Doing nothing"),null)}).filter(function(o){return!!o})},lU=function(i,n,o,c){var d=cU(n,Array.isArray(i)?i:[i]);Gf[o]||(Gf[o]=new WeakMap);var h=Gf[o],f=[],m=new Set,k=new Set(d),v=function(y){!y||m.has(y)||(m.add(y),v(y.parentNode))};d.forEach(v);var w=function(y){!y||k.has(y)||Array.prototype.forEach.call(y.children,function(C){if(m.has(C))w(C);else{var E=C.getAttribute(c),D=E!==null&&E!=="false",I=(vc.get(C)||0)+1,j=(h.get(C)||0)+1;vc.set(C,I),h.set(C,j),f.push(C),I===1&&D&&qf.set(C,!0),j===1&&C.setAttribute(o,"true"),D||C.setAttribute(c,"true")}})};return w(n),m.clear(),_k++,function(){f.forEach(function(y){var C=vc.get(y)-1,E=h.get(y)-1;vc.set(y,C),h.set(y,E),C||(qf.has(y)||y.removeAttribute(c),qf.delete(y)),E||y.removeAttribute(o)}),_k--,_k||(vc=new WeakMap,vc=new WeakMap,qf=new WeakMap,Gf={})}},dU=function(i,n,o){o===void 0&&(o="data-aria-hidden");var c=Array.from(Array.isArray(i)?i:[i]),d=n||aU(i);return d?(c.push.apply(c,Array.from(d.querySelectorAll("[aria-live]"))),lU(c,d,o,"aria-hidden")):function(){return null}};const uI="Dialog",[hI,Aq]=lv(uI),[uU,Nr]=hI(uI),hU=i=>{const{__scopeDialog:n,children:o,open:c,defaultOpen:d,onOpenChange:h,modal:f=!0}=i,m=M.useRef(null),k=M.useRef(null),[v=!1,w]=q4({prop:c,defaultProp:d,onChange:h});return M.createElement(uU,{scope:n,triggerRef:m,contentRef:k,contentId:up(),titleId:up(),descriptionId:up(),open:v,onOpenChange:w,onOpenToggle:M.useCallback(()=>w(y=>!y),[w]),modal:f},o)},fU="DialogTrigger",pU=M.forwardRef((i,n)=>{const{__scopeDialog:o,...c}=i,d=Nr(fU,o),h=no(n,d.triggerRef);return M.createElement($i.button,st({type:"button","aria-haspopup":"dialog","aria-expanded":d.open,"aria-controls":d.contentId,"data-state":wv(d.open)},c,{ref:h,onClick:pi(i.onClick,d.onOpenToggle)}))}),fI="DialogPortal",[gU,pI]=hI(fI,{forceMount:void 0}),mU=i=>{const{__scopeDialog:n,forceMount:o,children:c,container:d}=i,h=Nr(fI,n);return M.createElement(gU,{scope:n,forceMount:o},M.Children.map(c,f=>M.createElement(kl,{present:o||h.open},M.createElement(W4,{asChild:!0,container:d},f))))},Kb="DialogOverlay",kU=M.forwardRef((i,n)=>{const o=pI(Kb,i.__scopeDialog),{forceMount:c=o.forceMount,...d}=i,h=Nr(Kb,i.__scopeDialog);return h.modal?M.createElement(kl,{present:c||h.open},M.createElement(bU,st({},d,{ref:n}))):null}),bU=M.forwardRef((i,n)=>{const{__scopeDialog:o,...c}=i,d=Nr(Kb,o);return M.createElement(sU,{as:dv,allowPinchZoom:!0,shards:[d.contentRef]},M.createElement($i.div,st({"data-state":wv(d.open)},c,{ref:n,style:{pointerEvents:"auto",...c.style}})))}),Au="DialogContent",wU=M.forwardRef((i,n)=>{const o=pI(Au,i.__scopeDialog),{forceMount:c=o.forceMount,...d}=i,h=Nr(Au,i.__scopeDialog);return M.createElement(kl,{present:c||h.open},h.modal?M.createElement(vU,st({},d,{ref:n})):M.createElement(_U,st({},d,{ref:n})))}),vU=M.forwardRef((i,n)=>{const o=Nr(Au,i.__scopeDialog),c=M.useRef(null),d=no(n,o.contentRef,c);return M.useEffect(()=>{const h=c.current;if(h)return dU(h)},[]),M.createElement(gI,st({},i,{ref:d,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:pi(i.onCloseAutoFocus,h=>{var f;h.preventDefault(),(f=o.triggerRef.current)===null||f===void 0||f.focus()}),onPointerDownOutside:pi(i.onPointerDownOutside,h=>{const f=h.detail.originalEvent,m=f.button===0&&f.ctrlKey===!0;(f.button===2||m)&&h.preventDefault()}),onFocusOutside:pi(i.onFocusOutside,h=>h.preventDefault())}))}),_U=M.forwardRef((i,n)=>{const o=Nr(Au,i.__scopeDialog),c=M.useRef(!1),d=M.useRef(!1);return M.createElement(gI,st({},i,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:h=>{var f;if((f=i.onCloseAutoFocus)===null||f===void 0||f.call(i,h),!h.defaultPrevented){var m;c.current||(m=o.triggerRef.current)===null||m===void 0||m.focus(),h.preventDefault()}c.current=!1,d.current=!1},onInteractOutside:h=>{var f,m;(f=i.onInteractOutside)===null||f===void 0||f.call(i,h),h.defaultPrevented||(c.current=!0,h.detail.originalEvent.type==="pointerdown"&&(d.current=!0));const k=h.target;((m=o.triggerRef.current)===null||m===void 0?void 0:m.contains(k))&&h.preventDefault(),h.detail.originalEvent.type==="focusin"&&d.current&&h.preventDefault()}}))}),gI=M.forwardRef((i,n)=>{const{__scopeDialog:o,trapFocus:c,onOpenAutoFocus:d,onCloseAutoFocus:h,...f}=i,m=Nr(Au,o),k=M.useRef(null),v=no(n,k);return E$(),M.createElement(M.Fragment,null,M.createElement(w$,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:d,onUnmountAutoFocus:h},M.createElement(C4,st({role:"dialog",id:m.contentId,"aria-describedby":m.descriptionId,"aria-labelledby":m.titleId,"data-state":wv(m.open)},f,{ref:v,onDismiss:()=>m.onOpenChange(!1)}))),!1)}),yU="DialogTitle",AU=M.forwardRef((i,n)=>{const{__scopeDialog:o,...c}=i,d=Nr(yU,o);return M.createElement($i.h2,st({id:d.titleId},c,{ref:n}))}),CU="DialogDescription",mI=M.forwardRef((i,n)=>{const{__scopeDialog:o,...c}=i,d=Nr(CU,o);return M.createElement($i.p,st({id:d.descriptionId},c,{ref:n}))}),xU="DialogClose",EU=M.forwardRef((i,n)=>{const{__scopeDialog:o,...c}=i,d=Nr(xU,o);return M.createElement($i.button,st({type:"button"},c,{ref:n,onClick:pi(i.onClick,()=>d.onOpenChange(!1))}))});function wv(i){return i?"open":"closed"}const SU=hU,DU=pU,TU=mU,IU=kU,MU=wU,NU=AU,OU=mI,v5=EU,vv=(i,n)=>{(i.keyCode||i.which)===13&&n()},PU=({handleChange:i,post:n,addTag:o,deleteTag:c})=>{const[d,h]=M.useState(""),f=k=>{h(k.target.value)},m=()=>n.tags.map(k=>F.jsxs("span",{className:"post-category post-tags-form-display",children:["#",k," ",F.jsx("span",{className:"delete-tag",onClick:()=>{c(k)},children:"x"})]},k));return F.jsxs(SU,{children:[F.jsx(DU,{asChild:!0,children:F.jsx("button",{className:"Button orange-button set-tag-button",children:"Set Tags"})}),F.jsxs(TU,{children:[F.jsx(IU,{className:"DialogOverlay"}),F.jsxs(MU,{className:"DialogContent",children:[F.jsx(NU,{className:"DialogTitle",children:"Set Tags"}),F.jsx(OU,{className:"DialogDescription",children:"Here is where you set your tags."}),F.jsxs("fieldset",{className:"Fieldset",children:[F.jsx("label",{className:"Label",htmlFor:"tag",children:"Enter Tags"}),F.jsx("input",{onKeyUp:k=>{vv(k,()=>{o(d),h("")})},value:d,onChange:f,className:"Input",id:"name"}),F.jsx("button",{onClick:()=>{o(d)},className:"Button purple add-tag-button",children:"+"})]}),F.jsx(mI,{children:F.jsx("div",{className:"pop-up-tag-container",children:m()})}),F.jsx("div",{style:{display:"flex",marginTop:25,justifyContent:"flex-end"},children:F.jsx(v5,{asChild:!0,children:F.jsx("button",{name:"tags",className:"Button save-button",children:"Close"})})}),F.jsx(v5,{asChild:!0,children:F.jsx("button",{className:"IconButton","aria-label":"Close",children:F.jsx(yV,{})})})]})]})]})};function kI({handleChange:i,post:n,addTag:o,deleteTag:c}){const d=n.tags.map(h=>F.jsxs("span",{className:"post-category post-tags-form-display",children:["#",h]},h+n));return F.jsxs("form",{children:[F.jsxs("div",{className:"input",children:[F.jsx("label",{htmlFor:"title"}),F.jsx("input",{placeholder:"Title",onChange:i,value:n.title,type:"text",id:"title",name:"title"})]}),F.jsxs("div",{className:"input",children:[F.jsxs("div",{className:"input",children:[F.jsx("label",{htmlFor:"img"}),F.jsx("input",{placeholder:"Cover image url (optional)",onChange:i,value:n.img,type:"text",id:"img_url",name:"img"})]}),F.jsx("div",{className:"ckeditor-container",children:F.jsx(k$.CKEditor,{config:{mediaEmbed:{previewsInData:!0},placeholder:"Content (optional)",toolbar:{shouldNotGroupWhenFull:!0},fullscreen:{closeOnEscape:!0,closeOnClick:!1}},editor:b$,data:n.content?n.content:"",onReady:h=>{console.log("Editor is ready to use!",h),h.editing.view.document.on("click",(f,m)=>{fullscreen(h)})},onChange:(h,f)=>{f.getData(),i(f)}})})]}),F.jsx("div",{className:"outer-tag-container",children:F.jsxs("div",{className:"tag-container",children:[F.jsx("div",{className:"inner-tags-container",children:d}),F.jsx(PU,{handleChange:i,post:n,addTag:o,deleteTag:c})]})})]})}function BU({supabase:i,session:n}){const[o,c]=M.useState({title:"",content:"",img:"",tags:[]}),d=Fo(),{state:h}=ll();console.log(o);const f=n?n.user:{user_metadata:""},m=f.user_metadata.name,k=f.id;M.useEffect(()=>{h&&c({title:`${h.title} ~ ${h.author}`,content:h.description,img:h.cover_key?h.cover_url:""})},[]);const v=(E,D=[])=>{let I,j;E.target?D.length!==0?(I=E.target.name,j=D):(I=E.target.name,j=E.target.value):(I="content",j=E.getData()),c(P=>({...P,[I]:j}))},w=async()=>{await i.from("posts").insert({title:o.title,content:o.content,img:o.img,tags:o.tags,username:m,user_id:k}),$n.success("Post inserted into database!"),d("/Book-Chronicles")},y=E=>{E=E.trim(),!o.tags.includes(E)&&E&&c(D=>({...D,tags:[...D.tags,E]}))},C=E=>{E=E.trim();const D=o.tags.indexOf(E);c(I=>{const j=[...I.tags.slice(0,D),...I.tags.slice(D+1)];return{...I,tags:[...j]}})};return F.jsx(F.Fragment,{children:F.jsxs("div",{className:"create-container",children:[F.jsxs("h1",{className:"create-post-title pastel-black",children:["Create a ",F.jsx("span",{className:"pastel-orange",children:"Post"})]}),F.jsx(kI,{handleChange:v,post:o,addTag:y,deleteTag:C}),F.jsx("button",{className:"btn red-button darkAccent create-button",onClick:w,post:o,children:"Create Post"}),F.jsx("div",{className:"get-book-info-button",children:F.jsx(Ni,{to:"/Book-Chronicles/getBookInfo",children:"Need book information? Click here!"})})]})})}function LU({title:i,author:n,cover_url:o,cover_key:c,description:d}){const h=Fo(),f=()=>{h("/Book-Chronicles/create",{state:{title:i,author:n,cover_url:o,description:d,cover_key:c}})};return F.jsxs("div",{onClick:f,className:"book",children:[F.jsxs("div",{children:[F.jsx("h4",{className:"pastel-black",children:i}),F.jsxs("h5",{children:["By: ",n]}),F.jsx("p",{children:d})]}),F.jsx("img",{src:c?o:"https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"})]})}function zU(){const[i,n]=M.useState(""),[o,c]=M.useState([]),d=v=>{n(v.target.value)},h=async v=>{const y=await(await fetch(`https://openlibrary.org${v.key}.json`)).json();let C;y.description&&(C=y.description,typeof C!="string"&&(C=y.description.value));const E=await fetch(`https://covers.openlibrary.org/b/olid/${v.cover_edition_key}-M.jpg`),D={key:y.key,title:y.title,author:v.author_name?v.author_name[0]:"",cover_url:E.url,description:C,cover_key:v.cover_edition_key};c(I=>[...I,D])},f=async()=>{const w=await(await fetch(`https://openlibrary.org/search.json?q=${i}`)).json();c([]),n("");let y=0;for(const C of w.docs){if(y<15)await h(C);else break;y++}},m=()=>o.map((w,y)=>F.jsx(LU,{title:w.title,author:w.author,cover_url:w.cover_url,cover_key:w.cover_key,description:w.description},y)),k=()=>{const v=f();Jn.promise(v,{loading:"loading",success:"got all data",error:"error when fetching"})};return F.jsxs("article",{children:[F.jsx("h1",{className:"book-info-title pastel-black",children:F.jsxs("b",{children:["Grab a ",F.jsx("span",{className:"pastel-orange",children:"Book"})]})}),F.jsxs("div",{className:"search-bar",children:[F.jsx("label",{htmlFor:"title"}),F.jsx("input",{value:i,placeholder:"Search for a book...",className:"book-input",onKeyUp:v=>{vv(v,k)},onChange:d,type:"text",name:"title"}),F.jsx("button",{className:"btn orange-button",onClick:k,children:"Search"})]}),F.jsx("div",{className:"books-container",children:m()}),F.jsx("div",{className:"push"})]})}const jU="/Book-Chronicles/assets/cross-ab383046.png";function RU(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var FU={exports:{}};const VU={},$U=Object.freeze(Object.defineProperty({__proto__:null,default:VU},Symbol.toStringTag,{value:"Module"})),UU=yL($U);(function(i){/**
 * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bcrypt.js for details
 */(function(n,o){typeof RU=="function"&&i&&i.exports?i.exports=o():(n.dcodeIO=n.dcodeIO||{}).bcrypt=o()})(ma,function(){var n={},o=null;function c(Y){if(i&&i.exports)try{return UU.randomBytes(Y)}catch{}try{var Q;return(self.crypto||self.msCrypto).getRandomValues(Q=new Uint32Array(Y)),Array.prototype.slice.call(Q)}catch{}if(!o)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return o(Y)}var d=!1;try{c(1),d=!0}catch{}o=null,n.setRandomFallback=function(Y){o=Y},n.genSaltSync=function(Y,Q){if(Y=Y||I,typeof Y!="number")throw Error("Illegal arguments: "+typeof Y+", "+typeof Q);Y<4?Y=4:Y>31&&(Y=31);var q=[];return q.push("$2a$"),Y<10&&q.push("0"),q.push(Y.toString()),q.push("$"),q.push(y(c(D),D)),q.join("")},n.genSalt=function(Y,Q,q){if(typeof Q=="function"&&(q=Q,Q=void 0),typeof Y=="function"&&(q=Y,Y=void 0),typeof Y>"u")Y=I;else if(typeof Y!="number")throw Error("illegal arguments: "+typeof Y);function U(W){f(function(){try{W(null,n.genSaltSync(Y))}catch(X){W(X)}})}if(q){if(typeof q!="function")throw Error("Illegal callback: "+typeof q);U(q)}else return new Promise(function(W,X){U(function(oe,re){if(oe){X(oe);return}W(re)})})},n.hashSync=function(Y,Q){if(typeof Q>"u"&&(Q=I),typeof Q=="number"&&(Q=n.genSaltSync(Q)),typeof Y!="string"||typeof Q!="string")throw Error("Illegal arguments: "+typeof Y+", "+typeof Q);return se(Y,Q)},n.hash=function(Y,Q,q,U){function W(X){typeof Y=="string"&&typeof Q=="number"?n.genSalt(Q,function(oe,re){se(Y,re,X,U)}):typeof Y=="string"&&typeof Q=="string"?se(Y,Q,X,U):f(X.bind(this,Error("Illegal arguments: "+typeof Y+", "+typeof Q)))}if(q){if(typeof q!="function")throw Error("Illegal callback: "+typeof q);W(q)}else return new Promise(function(X,oe){W(function(re,ie){if(re){oe(re);return}X(ie)})})};function h(Y,Q){for(var q=0,U=0,W=0,X=Y.length;W<X;++W)Y.charCodeAt(W)===Q.charCodeAt(W)?++q:++U;return q<0?!1:U===0}n.compareSync=function(Y,Q){if(typeof Y!="string"||typeof Q!="string")throw Error("Illegal arguments: "+typeof Y+", "+typeof Q);return Q.length!==60?!1:h(n.hashSync(Y,Q.substr(0,Q.length-31)),Q)},n.compare=function(Y,Q,q,U){function W(X){if(typeof Y!="string"||typeof Q!="string"){f(X.bind(this,Error("Illegal arguments: "+typeof Y+", "+typeof Q)));return}if(Q.length!==60){f(X.bind(this,null,!1));return}n.hash(Y,Q.substr(0,29),function(oe,re){oe?X(oe):X(null,h(re,Q))},U)}if(q){if(typeof q!="function")throw Error("Illegal callback: "+typeof q);W(q)}else return new Promise(function(X,oe){W(function(re,ie){if(re){oe(re);return}X(ie)})})},n.getRounds=function(Y){if(typeof Y!="string")throw Error("Illegal arguments: "+typeof Y);return parseInt(Y.split("$")[2],10)},n.getSalt=function(Y){if(typeof Y!="string")throw Error("Illegal arguments: "+typeof Y);if(Y.length!==60)throw Error("Illegal hash length: "+Y.length+" != 60");return Y.substring(0,29)};var f=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout;function m(Y){var Q=[],q=0;return E.encodeUTF16toUTF8(function(){return q>=Y.length?null:Y.charCodeAt(q++)},function(U){Q.push(U)}),Q}var k="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),v=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],w=String.fromCharCode;function y(Y,Q){var q=0,U=[],W,X;if(Q<=0||Q>Y.length)throw Error("Illegal len: "+Q);for(;q<Q;){if(W=Y[q++]&255,U.push(k[W>>2&63]),W=(W&3)<<4,q>=Q){U.push(k[W&63]);break}if(X=Y[q++]&255,W|=X>>4&15,U.push(k[W&63]),W=(X&15)<<2,q>=Q){U.push(k[W&63]);break}X=Y[q++]&255,W|=X>>6&3,U.push(k[W&63]),U.push(k[X&63])}return U.join("")}function C(Y,Q){var q=0,U=Y.length,W=0,X=[],oe,re,ie,pe,ge,Se;if(Q<=0)throw Error("Illegal len: "+Q);for(;q<U-1&&W<Q&&(Se=Y.charCodeAt(q++),oe=Se<v.length?v[Se]:-1,Se=Y.charCodeAt(q++),re=Se<v.length?v[Se]:-1,!(oe==-1||re==-1||(ge=oe<<2>>>0,ge|=(re&48)>>4,X.push(w(ge)),++W>=Q||q>=U)||(Se=Y.charCodeAt(q++),ie=Se<v.length?v[Se]:-1,ie==-1)||(ge=(re&15)<<4>>>0,ge|=(ie&60)>>2,X.push(w(ge)),++W>=Q||q>=U)));)Se=Y.charCodeAt(q++),pe=Se<v.length?v[Se]:-1,ge=(ie&3)<<6>>>0,ge|=pe,X.push(w(ge)),++W;var tt=[];for(q=0;q<W;q++)tt.push(X[q].charCodeAt(0));return tt}var E=function(){var Y={};return Y.MAX_CODEPOINT=1114111,Y.encodeUTF8=function(Q,q){var U=null;for(typeof Q=="number"&&(U=Q,Q=function(){return null});U!==null||(U=Q())!==null;)U<128?q(U&127):U<2048?(q(U>>6&31|192),q(U&63|128)):U<65536?(q(U>>12&15|224),q(U>>6&63|128),q(U&63|128)):(q(U>>18&7|240),q(U>>12&63|128),q(U>>6&63|128),q(U&63|128)),U=null},Y.decodeUTF8=function(Q,q){for(var U,W,X,oe,re=function(ie){ie=ie.slice(0,ie.indexOf(null));var pe=Error(ie.toString());throw pe.name="TruncatedError",pe.bytes=ie,pe};(U=Q())!==null;)if(!(U&128))q(U);else if((U&224)===192)(W=Q())===null&&re([U,W]),q((U&31)<<6|W&63);else if((U&240)===224)((W=Q())===null||(X=Q())===null)&&re([U,W,X]),q((U&15)<<12|(W&63)<<6|X&63);else if((U&248)===240)((W=Q())===null||(X=Q())===null||(oe=Q())===null)&&re([U,W,X,oe]),q((U&7)<<18|(W&63)<<12|(X&63)<<6|oe&63);else throw RangeError("Illegal starting byte: "+U)},Y.UTF16toUTF8=function(Q,q){for(var U,W=null;(U=W!==null?W:Q())!==null;){if(U>=55296&&U<=57343&&(W=Q())!==null&&W>=56320&&W<=57343){q((U-55296)*1024+W-56320+65536),W=null;continue}q(U)}W!==null&&q(W)},Y.UTF8toUTF16=function(Q,q){var U=null;for(typeof Q=="number"&&(U=Q,Q=function(){return null});U!==null||(U=Q())!==null;)U<=65535?q(U):(U-=65536,q((U>>10)+55296),q(U%1024+56320)),U=null},Y.encodeUTF16toUTF8=function(Q,q){Y.UTF16toUTF8(Q,function(U){Y.encodeUTF8(U,q)})},Y.decodeUTF8toUTF16=function(Q,q){Y.decodeUTF8(Q,function(U){Y.UTF8toUTF16(U,q)})},Y.calculateCodePoint=function(Q){return Q<128?1:Q<2048?2:Q<65536?3:4},Y.calculateUTF8=function(Q){for(var q,U=0;(q=Q())!==null;)U+=Y.calculateCodePoint(q);return U},Y.calculateUTF16asUTF8=function(Q){var q=0,U=0;return Y.UTF16toUTF8(Q,function(W){++q,U+=Y.calculateCodePoint(W)}),[q,U]},Y}();Date.now=Date.now||function(){return+new Date};var D=16,I=10,j=16,P=100,L=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],S=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],$=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function H(Y,Q,q,U){var W,X=Y[Q],oe=Y[Q+1];return X^=q[0],W=U[X>>>24],W+=U[256|X>>16&255],W^=U[512|X>>8&255],W+=U[768|X&255],oe^=W^q[1],W=U[oe>>>24],W+=U[256|oe>>16&255],W^=U[512|oe>>8&255],W+=U[768|oe&255],X^=W^q[2],W=U[X>>>24],W+=U[256|X>>16&255],W^=U[512|X>>8&255],W+=U[768|X&255],oe^=W^q[3],W=U[oe>>>24],W+=U[256|oe>>16&255],W^=U[512|oe>>8&255],W+=U[768|oe&255],X^=W^q[4],W=U[X>>>24],W+=U[256|X>>16&255],W^=U[512|X>>8&255],W+=U[768|X&255],oe^=W^q[5],W=U[oe>>>24],W+=U[256|oe>>16&255],W^=U[512|oe>>8&255],W+=U[768|oe&255],X^=W^q[6],W=U[X>>>24],W+=U[256|X>>16&255],W^=U[512|X>>8&255],W+=U[768|X&255],oe^=W^q[7],W=U[oe>>>24],W+=U[256|oe>>16&255],W^=U[512|oe>>8&255],W+=U[768|oe&255],X^=W^q[8],W=U[X>>>24],W+=U[256|X>>16&255],W^=U[512|X>>8&255],W+=U[768|X&255],oe^=W^q[9],W=U[oe>>>24],W+=U[256|oe>>16&255],W^=U[512|oe>>8&255],W+=U[768|oe&255],X^=W^q[10],W=U[X>>>24],W+=U[256|X>>16&255],W^=U[512|X>>8&255],W+=U[768|X&255],oe^=W^q[11],W=U[oe>>>24],W+=U[256|oe>>16&255],W^=U[512|oe>>8&255],W+=U[768|oe&255],X^=W^q[12],W=U[X>>>24],W+=U[256|X>>16&255],W^=U[512|X>>8&255],W+=U[768|X&255],oe^=W^q[13],W=U[oe>>>24],W+=U[256|oe>>16&255],W^=U[512|oe>>8&255],W+=U[768|oe&255],X^=W^q[14],W=U[X>>>24],W+=U[256|X>>16&255],W^=U[512|X>>8&255],W+=U[768|X&255],oe^=W^q[15],W=U[oe>>>24],W+=U[256|oe>>16&255],W^=U[512|oe>>8&255],W+=U[768|oe&255],X^=W^q[16],Y[Q]=oe^q[j+1],Y[Q+1]=X,Y}function J(Y,Q){for(var q=0,U=0;q<4;++q)U=U<<8|Y[Q]&255,Q=(Q+1)%Y.length;return{key:U,offp:Q}}function Z(Y,Q,q){for(var U=0,W=[0,0],X=Q.length,oe=q.length,re,ie=0;ie<X;ie++)re=J(Y,U),U=re.offp,Q[ie]=Q[ie]^re.key;for(ie=0;ie<X;ie+=2)W=H(W,0,Q,q),Q[ie]=W[0],Q[ie+1]=W[1];for(ie=0;ie<oe;ie+=2)W=H(W,0,Q,q),q[ie]=W[0],q[ie+1]=W[1]}function ee(Y,Q,q,U){for(var W=0,X=[0,0],oe=q.length,re=U.length,ie,pe=0;pe<oe;pe++)ie=J(Q,W),W=ie.offp,q[pe]=q[pe]^ie.key;for(W=0,pe=0;pe<oe;pe+=2)ie=J(Y,W),W=ie.offp,X[0]^=ie.key,ie=J(Y,W),W=ie.offp,X[1]^=ie.key,X=H(X,0,q,U),q[pe]=X[0],q[pe+1]=X[1];for(pe=0;pe<re;pe+=2)ie=J(Y,W),W=ie.offp,X[0]^=ie.key,ie=J(Y,W),W=ie.offp,X[1]^=ie.key,X=H(X,0,q,U),U[pe]=X[0],U[pe+1]=X[1]}function de(Y,Q,q,U,W){var X=$.slice(),oe=X.length,re;if(q<4||q>31)if(re=Error("Illegal number of rounds (4-31): "+q),U){f(U.bind(this,re));return}else throw re;if(Q.length!==D)if(re=Error("Illegal salt length: "+Q.length+" != "+D),U){f(U.bind(this,re));return}else throw re;q=1<<q>>>0;var ie,pe,ge=0,Se;Int32Array?(ie=new Int32Array(L),pe=new Int32Array(S)):(ie=L.slice(),pe=S.slice()),ee(Q,Y,ie,pe);function tt(){if(W&&W(ge/q),ge<q)for(var nt=Date.now();ge<q&&(ge=ge+1,Z(Y,ie,pe),Z(Q,ie,pe),!(Date.now()-nt>P)););else{for(ge=0;ge<64;ge++)for(Se=0;Se<oe>>1;Se++)H(X,Se<<1,ie,pe);var Ee=[];for(ge=0;ge<oe;ge++)Ee.push((X[ge]>>24&255)>>>0),Ee.push((X[ge]>>16&255)>>>0),Ee.push((X[ge]>>8&255)>>>0),Ee.push((X[ge]&255)>>>0);if(U){U(null,Ee);return}else return Ee}U&&f(tt)}if(typeof U<"u")tt();else for(var wt;;)if(typeof(wt=tt())<"u")return wt||[]}function se(Y,Q,q,U){var W;if(typeof Y!="string"||typeof Q!="string")if(W=Error("Invalid string / salt: Not a string"),q){f(q.bind(this,W));return}else throw W;var X,oe;if(Q.charAt(0)!=="$"||Q.charAt(1)!=="2")if(W=Error("Invalid salt version: "+Q.substring(0,2)),q){f(q.bind(this,W));return}else throw W;if(Q.charAt(2)==="$")X=String.fromCharCode(0),oe=3;else{if(X=Q.charAt(2),X!=="a"&&X!=="b"&&X!=="y"||Q.charAt(3)!=="$")if(W=Error("Invalid salt revision: "+Q.substring(2,4)),q){f(q.bind(this,W));return}else throw W;oe=4}if(Q.charAt(oe+2)>"$")if(W=Error("Missing salt rounds"),q){f(q.bind(this,W));return}else throw W;var re=parseInt(Q.substring(oe,oe+1),10)*10,ie=parseInt(Q.substring(oe+1,oe+2),10),pe=re+ie,ge=Q.substring(oe+3,oe+25);Y+=X>="a"?"\0":"";var Se=m(Y),tt=C(ge,D);function wt(nt){var Ee=[];return Ee.push("$2"),X>="a"&&Ee.push(X),Ee.push("$"),pe<10&&Ee.push("0"),Ee.push(pe.toString()),Ee.push("$"),Ee.push(y(tt,tt.length)),Ee.push(y(nt,$.length*4-1)),Ee.join("")}if(typeof q>"u")return wt(de(Se,tt,pe));de(Se,tt,pe,function(nt,Ee){nt?q(nt,null):q(null,wt(Ee))},U)}return n.encodeBase64=y,n.decodeBase64=C,n})})(FU);function HU({date:i,comment:n,id:o,supabase:c,reloadComments:d,username:h,user_id:f,session_user_id:m}){const k=f===m,v=async()=>{k?confirm("Are you sure you want to delete this comment?")?(await c.from("comments").delete().eq("id",o),d()):console.log("delete is cancelled"):alert("You can't delete this comment! It's not yours!")};return F.jsxs("div",{className:"comment",children:[F.jsxs("div",{className:"comment-header",children:[F.jsxs("small",{children:[h," ",F.jsxs("span",{className:"time-ago",children:["• ",Zp(i)?Zp(i):""]})]}),k?F.jsx("img",{onClick:v,src:jU}):""]}),F.jsx("p",{children:n})]})}const WU="/Book-Chronicles/assets/trash-2415bf1a.png",qU="/Book-Chronicles/assets/edit-727f5020.png";function GU({supabase:i,session:n}){const[o,c]=M.useState({user_likes:"",tags:[]}),[d,h]=M.useState(!1),[f,m]=M.useState([]),[k,v]=M.useState(""),{id:w}=tv(),y=Fo(),C=n?n.user:{user_metadata:{}},E=C.user_metadata.name,D=C.id,I=D===o.user_id,j=async()=>{const{data:se,error:Y}=await i.from("posts").select().eq("id",w);c(se[0])},P=async()=>{const{data:se,error:Y}=await i.from("comments").select().order("created_at",{ascending:!1}).eq("post_id",w);m(se)};M.useEffect(()=>{const se=j();Jn.promise(se,{loading:"Loading your post...",success:"Post loaded!",error:"Couldn't get your post!"}),P(),window.scroll(0,0)},[]);const L=async()=>{if(n)if(!o.user_likes[D]&&!d){const se={...o.user_likes,[D]:!0};await i.from("posts").update({vote:o.vote+1,user_likes:se}).eq("id",w),console.log("vote has been updated..."),h(!0),c({...o,vote:o.vote+1})}else console.log("Can't like a post more than once...");else Jn.error("You must be logged in to like a post!")},S=se=>{v(se.target.value)},$=async()=>{I?confirm("Are you sure you want to delete this post?")?(await i.from("posts").delete().eq("id",w),y("/Book-Chronicles")):console.log("delete is cancelled"):Jn.error("You can't delete this post!'")},H=async()=>{I?y(`/Book-Chronicles/post/${w}/edit`):Jn.error("You can't access this!")},J=async()=>{await i.from("comments").insert({post_id:w,comment:k,username:E,user_id:D}),console.log("Comment is inserted into database..."),P(),v("")},Z=f.map(se=>F.jsx(HU,{date:se.created_at,comment:se.comment,id:se.id,supabase:i,reloadComments:P,username:se.username,user_id:se.user_id,session_user_id:D},se.id));let ee="back-pastel-green pastel-green";o.category=="review"?ee="back-pastel-purple pastel-purple":o.category=="recommend"&&(ee="back-pastel-red pastel-red");const de=()=>o.tags.slice(0,2).map(Y=>F.jsxs("p",{className:`post-category ${ee}`,children:["#",Y]},Y+w));return F.jsx("div",{className:"post-container",children:F.jsxs("div",{className:"post",children:[F.jsxs("div",{className:"post-tags",children:[F.jsxs("p",{children:["Posted ",o.created_at?Zp(o.created_at):" "]}),o.tags.length>2?F.jsxs("div",{className:"preview-tags-container",children:[de(),F.jsx("small",{className:"extra-tags-preview",children:F.jsx(Z4,{tags:o.tags,subtracted:2})})]}):F.jsx("div",{className:"preview-tags-container",children:de()})]}),F.jsx("h2",{className:"pastel-black",children:o.title}),F.jsx("img",{className:"post-image",src:o.img}),F.jsx("div",{children:_4(o.content)}),F.jsx("p",{children:F.jsx("b",{children:o.username?"~ "+o.username:""})}),F.jsxs("div",{className:"action-images",children:[F.jsxs("div",{onClick:L,className:`${o.user_likes[D]||d?"pastel-red":""} like-image`,children:[F.jsx("img",{src:v4})," ",F.jsxs("b",{children:[o.vote," ",o.vote!==1?"likes":"like"]})]}),n&&I?F.jsxs("div",{children:[F.jsx("img",{onClick:H,className:"edit-image",src:qU}),F.jsx("img",{onClick:$,className:"delete-image",src:WU})]}):""]}),F.jsxs("div",{className:"comments-section",children:[F.jsx("div",{className:"insert-comment-container",children:n?F.jsx("input",{onKeyUp:se=>{vv(se,J)},value:k,onChange:S,placeholder:"Leave a comment...",type:"text"}):F.jsx("input",{disabled:!0,placeholder:"Sign in to leave a comment...",type:"text"})}),F.jsx("div",{className:"comments-container",children:Z})]})]})})}function YU({supabase:i}){const[n,o]=M.useState({title:"",content:"",img:"",tags:[]}),c=Fo(),{id:d}=tv(),h=async()=>{const{data:w,error:y}=await i.from("posts").select().eq("id",d);o(w[0])};M.useEffect(()=>{h()},[]);const f=(w,y=[])=>{let C,E;w.target?y.length!==0?(C=w.target.name,E=y):(C=w.target.name,E=w.target.value):(C="content",E=w.getData()),o(D=>({...D,[C]:E}))},m=async()=>{await i.from("posts").update({title:n.title,content:n.content,img:n.img,tags:n.tags}).eq("id",d),$n.success("successfully updated!"),c(`/Book-Chronicles/post/${d}`)},k=w=>{w=w.trim(),!n.tags.includes(w)&&w&&o(y=>({...y,tags:[...y.tags,w]}))},v=w=>{w=w.trim();const y=n.tags.indexOf(w);o(C=>{const E=[...C.tags.slice(0,y),...C.tags.slice(y+1)];return{...C,tags:[...E]}})};return F.jsx("div",{children:F.jsxs("div",{className:"create-container",children:[F.jsxs("h1",{className:"create-post-title pastel-black",children:["Update ",F.jsx("span",{className:"pastel-orange",children:"Post"})]}),F.jsx(kI,{handleChange:f,post:n,addTag:k,deleteTag:v}),F.jsx("button",{className:"btn orange-button create-button",onClick:m,children:"Update Post"})]})})}const _v=i=>({async signupUser(n,o,c){const{data:d,error:h}=await i.auth.signUp({email:n,password:o,options:{data:{name:c}}});return[d,h]},async signIn(n,o){const{data:c,error:d}=await i.auth.signInWithPassword({email:n,password:o});return[c,d]},async getSession(){const{data:n,error:o}=await i.auth.getSession();return n},async logout(){await i.auth.signOut()},eventListener(){i.auth.onAuthStateChange((n,o)=>{console.log(n,o)})}}),Jd=(i,n)=>{const{name:o,value:c}=i.target;n(d=>({...d,[o]:c}))};function KU({supabase:i}){const n=_v(i),[o,c]=M.useState({}),d=Fo(),h=async m=>{const{data:k,error:v}=await i.from("users").select().eq("name",m);return k.length!==0},f=async()=>{if(o.name&&o.password&&o.email)if(await h(o.name))Jn.error("Display name taken.");else{const[k,v]=await n.signupUser(o.email,o.password,o.name),{user:w,session:y}=k;w?(await i.from("users").insert({user_id:w.id,name:w.user_metadata.name}),Jn.success("Signed up successfully!"),d("/Book-Chronicles")):Jn.error(v.message)}else Jn.error("You need to fill in all the fields!")};return F.jsx("div",{className:"outer-sign-container",children:F.jsxs("div",{className:"sign-container",children:[F.jsx("h1",{className:"sign-title",children:"Sign Up"}),F.jsxs("form",{onSubmit:m=>m.preventDefault(),children:[F.jsx("label",{htmlFor:"email"}),F.jsx("input",{className:"search-input sign-input",onChange:m=>Jd(m,c),placeholder:"Email",id:"email",name:"email",type:"email"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"password"}),F.jsx("input",{className:"search-input sign-input",onChange:m=>Jd(m,c),placeholder:"Password",id:"password",name:"password",type:"password"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"name"}),F.jsx("input",{className:"search-input sign-input",onChange:m=>Jd(m,c),placeholder:"Display Name",id:"name",name:"name",type:"text"}),F.jsx("div",{}),F.jsx("button",{onClick:f,type:"submit",className:"red-button sign-button",children:"Signup"}),F.jsx("div",{className:"sign-link",children:F.jsx(Ni,{to:"/Book-Chronicles/signin",children:"Have an account? Sign in!"})})]})]})})}function ZU({supabase:i}){const n=_v(i),[o,c]=M.useState({}),d=Fo(),h=async()=>{if(!o.email||!o.password)Jn.error("You need to fill in all the fields!");else{const[f,m]=await n.signIn(o.email,o.password),{user:k,session:v}=f;k||v?(Jn.success("Logged in."),setTimeout(()=>{d("/Book-Chronicles")},1e3)):Jn.error(m.message)}};return F.jsx("article",{className:"outer-sign-container",children:F.jsxs("div",{className:"sign-container",children:[F.jsx("h1",{className:"sign-title",children:"Sign In"}),F.jsxs("form",{onSubmit:f=>f.preventDefault(),children:[F.jsx("label",{htmlFor:"email"}),F.jsx("input",{className:"search-input sign-input",onChange:f=>Jd(f,c),placeholder:"Email",id:"email",name:"email",type:"email"}),F.jsx("div",{}),F.jsx("label",{htmlFor:"password"}),F.jsx("input",{className:"search-input sign-input",onChange:f=>Jd(f,c),placeholder:"Password",id:"password",name:"password",type:"password"}),F.jsx("div",{}),F.jsx("button",{onClick:h,type:"submit",className:"sign-button red-button",children:"Signin"}),F.jsx("div",{className:"sign-link",children:F.jsx(Ni,{to:"/Book-Chronicles/signup",children:"Not a member? Signup!"})})]})]})})}function QU({supabase:i}){const[n,o]=M.useState([]),c=async()=>{const{data:f,error:m}=await i.from("users").select().order("name");for(let k=0;k<f.length;k++){const v=f[k],w=await d(v);f[k].posts=w}f.sort((k,v)=>k.posts.length<v.posts.length?1:k.posts.length>v.posts.length?-1:0),o(f)},d=async f=>{const{data:m,error:k}=await i.from("posts").select().eq("user_id",f.user_id);return m};M.useEffect(()=>{const f=c();Jn.promise(f,{loading:"Grabbing all users...",success:"Click on a user to see their posts!",error:"Error while getting users..."})},[]);const h=()=>n.map(f=>F.jsx("li",{children:F.jsxs(Ni,{to:`/Book-Chronicles/users/${f.name}`,children:[f.name," ~ ",f.posts.length]})},f.id));return F.jsx("div",{children:h()})}function JU({supabase:i,session:n}){const[o,c]=M.useState([]),h=(n?n.user:{user_metadata:{}}).id,{username:f}=tv(),m=async()=>{const{data:v,error:w}=await i.from("posts").select().order("created_at",{ascending:!1}).eq("username",f);c(v)};M.useEffect(()=>{m()},[f]);const k=()=>o.length===0?F.jsx("h2",{children:"This user has not posted anything yet!"}):o.map(v=>{const w=v.user_likes[h];return F.jsx(Q4,{id:v.id,title:v.title,created_at:v.created_at,vote:v.vote,tags:v.tags,username:v.username,img_url:v.img,content:v.content,currentUserLiked:w},v.id)});return F.jsx("div",{className:"post-preview-container",children:k()})}function XU(){return F.jsxs(F.Fragment,{children:[F.jsx("h2",{children:"User profile coming soon..."}),F.jsx("p",{children:"Edit display name..."}),F.jsx("p",{children:"Change profile pic (we prob need a cropping service)..."}),F.jsx("p",{children:"Delete account..."})]})}const eH="/Book-Chronicles/assets/arrow-up-0fb140ce.png",tH=()=>{const[i,n]=M.useState(!1);M.useEffect(()=>{const c=()=>{window.scrollY>200?n(!0):n(!1)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]);const o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return F.jsx("div",{children:F.jsx("img",{className:`back-to-top-button ${i?"show-back-to-top":""}`,onClick:o,src:eH})})},nH="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABOvAAATrwFj5o7DAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABNRJREFUWIXtl2tMk1cYx3/nLfcKLaUysTqYzDFUQAfelpEoBqdsMJSBuhizi7hlWRazaUwWnU73YXjPbpqpu2Rmy8QL6i5Osi8umnlLFOPExU1uBVKgBWZrL7RnH/qyoS0FHIlf/Cdvcvo8/z7P7z3n7XlP4YHus8RQzMbM0jSvFMUCmS/BBIxVU40SmgSyWqNoqtovf/fHsALoJpXkaIRSISFvMH7DqOSW8VNm75iRW/DJhkLhuHeA7BXh8W7rDhCvq16rVm88kzNnUWqiaXy6Ni4BAHt3B7Y2M43XL1B37Ryu23YQgvScfOeMZ5Zt9ERHbP+oQLiGBKDLeCFeEZ5DSGYDtxWh2blk1W5jdKyuPBSz2+Wg5tejXDnzA94eN6ZxGeSVrayJjostrCgUDYMDyF4RbnDbTqhT3hyrTShbtGbXeiA/VPO+6mipo/rbzdzqbGdUSjrzl62zhGvC5lYsFJf7+pRgX453W3eozc1CeKcvXrPrpaE0B0hISqFw+SZi4gy01l3j3MmvE32Co6sOy8SQALpJJTnqmt/2wXMvbzg0X8IrwZp0WprobDP3C6GNS2DuktVowsL5/ewJ2ltuJguFr0ICaIRSAQgk28u3HqhVBO/11+DYnrUc27O2XwAAoymVSTMLkFJy7uR+kMxbfUTODQpgzCxNU6feSiRbhIPlEpL6K+52OXA77SEBALJyi4mM1tL85xW6rC1IWBcUwCtZACAFR2wXK7skPD9g9UEoIkpL8uNTAai/dh4BT648JJMCACTM8Q/k8ZVHpF7AzOEAAHg4LQcA840aACVCw7wAAEWSDODziavhkAJohgsgPnEMALe62gGQknEAYX1NUvjXOxJafZDbS9dpaeLYnrW4XcF31b3vlt3xOSJKS1H5++hHmv6NxcQZAHB0W3tDoyHwVyB7B4r8b4wQ/muQCmr1qeUUf1Kove6cAWgRECvDlNEKtPjUuH6kiWXvfBFQs/fOl288MCCU45b/zmNGGHpDzRA4Aw0APT45wSWoB7wDVh6krJYmAEbojQBI+CsAQCCr1WDRzgWiU0hODxdAQ+0FAMakZgL48HAiAEAjxFE/nSyOzy7VScHh4WjudtqpVwEeTs8BOL2lTLQGALTXVF4X8AsQj0es6fHwGdDUX+GIKC2R0doBAS6dqsLttGN6NAudIQkh2dSbC3hedRml2QqcB1w+6cst33QwS8DeYIU728wIATqjKVgagDbzDb7ftx6ft4fi1yowJqX8tHmBKOjNB7yMuq5UXgTxMRClCKXq8/UlPwvYF6y4fqQpZHN7VwfV32zB2+Nh4owCEpJS6n2SF/t6gp4HbAmWt9SlMEmpObt/26tfAif77RREHS03Ob5vHY6/bYxOzWDavKWtUqFo60Jh6evrd3fRTy7WK97wg+r7wakoyoeL3/5UHxNrWBGqsdtp59KpKq7+9iPeHg+m1EzySt+8FKaNK9peLBrv9ofe3mbNCjNYjdukFG/gny1brM54Zkpe6SMPjX1sQox6KHV0d2CzmGmoPU9d7QXcTjtCCNKnPu2cXrD03g6lfWXIKpkopfIBkmcH5R+V3Jz2xOxt054q2P3/juV3KW5yyXiNTymWknzh/1MyRk01Ao1CiuoeKau6r1beGErdB7qv+gcvVqv0EV04ogAAAABJRU5ErkJggg==";var bI={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(i){(function(){var n={}.hasOwnProperty;function o(){for(var h="",f=0;f<arguments.length;f++){var m=arguments[f];m&&(h=d(h,c(m)))}return h}function c(h){if(typeof h=="string"||typeof h=="number")return h;if(typeof h!="object")return"";if(Array.isArray(h))return o.apply(null,h);if(h.toString!==Object.prototype.toString&&!h.toString.toString().includes("[native code]"))return h.toString();var f="";for(var m in h)n.call(h,m)&&h[m]&&(f=d(f,m));return f}function d(h,f){return f?h?h+" "+f:h+f:h}i.exports?(o.default=o,i.exports=o):window.classNames=o})()})(bI);var iH=bI.exports;const Zb=ig(iH);/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/const rH="react-tooltip-core-styles",oH="react-tooltip-base-styles",_5={core:!1,base:!1};function y5({css:i,id:n=oH,type:o="base",ref:c}){var d,h;if(!i||typeof document>"u"||_5[o]||o==="core"&&typeof process<"u"&&(!((d=process==null?void 0:process.env)===null||d===void 0)&&d.REACT_TOOLTIP_DISABLE_CORE_STYLES)||o!=="base"&&typeof process<"u"&&(!((h=process==null?void 0:process.env)===null||h===void 0)&&h.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;o==="core"&&(n=rH),c||(c={});const{insertAt:f}=c;if(document.getElementById(n))return void console.warn(`[react-tooltip] Element with id '${n}' already exists. Call \`removeStyle()\` first`);const m=document.head||document.getElementsByTagName("head")[0],k=document.createElement("style");k.id=n,k.type="text/css",f==="top"&&m.firstChild?m.insertBefore(k,m.firstChild):m.appendChild(k),k.styleSheet?k.styleSheet.cssText=i:k.appendChild(document.createTextNode(i)),_5[o]=!0}const A5=(i,n,o)=>{let c=null;return function(...d){const h=()=>{c=null,o||i.apply(this,d)};o&&!c&&(i.apply(this,d),c=setTimeout(h,n)),o||(c&&clearTimeout(c),c=setTimeout(h,n))}},sH="DEFAULT_TOOLTIP_ID",aH={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},cH=M.createContext({getTooltipData:()=>aH});function wI(i=sH){return M.useContext(cH).getTooltipData(i)}const lH=typeof window<"u"?M.useLayoutEffect:M.useEffect,dH=i=>{if(!(i instanceof HTMLElement||i instanceof SVGElement))return!1;const n=getComputedStyle(i);return["overflow","overflow-x","overflow-y"].some(o=>{const c=n.getPropertyValue(o);return c==="auto"||c==="scroll"})},C5=i=>{if(!i)return null;let n=i.parentElement;for(;n;){if(dH(n))return n;n=n.parentElement}return document.scrollingElement||document.documentElement},x5=async({elementReference:i=null,tooltipReference:n=null,tooltipArrowReference:o=null,place:c="top",offset:d=10,strategy:h="absolute",middlewares:f=[D4(Number(d)),S4({fallbackAxisSideDirection:"start"}),T4({padding:5})],border:m})=>{if(!i)return{tooltipStyles:{},tooltipArrowStyles:{},place:c};if(n===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:c};const k=f;return o?(k.push($b({element:o,padding:5})),Ub(i,n,{placement:c,strategy:h,middleware:k}).then(({x:v,y:w,placement:y,middlewareData:C})=>{var E,D;const I={left:`${v}px`,top:`${w}px`,border:m},{x:j,y:P}=(E=C.arrow)!==null&&E!==void 0?E:{x:0,y:0},L=(D={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]])!==null&&D!==void 0?D:"bottom",S=m&&{borderBottom:m,borderRight:m};let $=0;if(m){const H=`${m}`.match(/(\d+)px/);$=H!=null&&H[1]?Number(H[1]):1}return{tooltipStyles:I,tooltipArrowStyles:{left:j!=null?`${j}px`:"",top:P!=null?`${P}px`:"",right:"",bottom:"",...S,[L]:`-${4+$}px`},place:y}})):Ub(i,n,{placement:"bottom",strategy:h,middleware:k}).then(({x:v,y:w,placement:y})=>({tooltipStyles:{left:`${v}px`,top:`${w}px`},tooltipArrowStyles:{},place:y}))};var _c={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},yk={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const uH=({forwardRef:i,id:n,className:o,classNameArrow:c,variant:d="dark",anchorId:h,anchorSelect:f,place:m="top",offset:k=10,events:v=["hover"],openOnClick:w=!1,positionStrategy:y="absolute",middlewares:C,wrapper:E,delayShow:D=0,delayHide:I=0,float:j=!1,hidden:P=!1,noArrow:L=!1,clickable:S=!1,closeOnEsc:$=!1,closeOnScroll:H=!1,closeOnResize:J=!1,openEvents:Z,closeEvents:ee,globalCloseEvents:de,imperativeModeOnly:se,style:Y,position:Q,afterShow:q,afterHide:U,content:W,contentWrapperRef:X,isOpen:oe,setIsOpen:re,activeAnchor:ie,setActiveAnchor:pe,border:ge,opacity:Se,arrowColor:tt,role:wt="tooltip"})=>{var nt;const Ee=M.useRef(null),on=M.useRef(null),Me=M.useRef(null),It=M.useRef(null),ni=M.useRef(null),[wi,dr]=M.useState(m),[Ui,vi]=M.useState({}),[lt,Mt]=M.useState({}),[Jt,ur]=M.useState(!1),[jt,Nt]=M.useState(!1),[Re,io]=M.useState(null),ro=M.useRef(!1),_i=M.useRef(null),{anchorRefs:$o,setActiveAnchor:Uo}=wI(n),ii=M.useRef(!1),[On,An]=M.useState([]),yt=M.useRef(!1),Ht=w||v.includes("click"),ri=Ht||(Z==null?void 0:Z.click)||(Z==null?void 0:Z.dblclick)||(Z==null?void 0:Z.mousedown),Hi=Z?{...Z}:{mouseenter:!0,focus:!0,click:!1,dblclick:!1,mousedown:!1};!Z&&Ht&&Object.assign(Hi,{mouseenter:!1,focus:!1,click:!0});const Wi=ee?{...ee}:{mouseleave:!0,blur:!0,click:!1,dblclick:!1,mouseup:!1};!ee&&Ht&&Object.assign(Wi,{mouseleave:!1,blur:!1});const sn=de?{...de}:{escape:$||!1,scroll:H||!1,resize:J||!1,clickOutsideAnchor:ri||!1};se&&(Object.assign(Hi,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(Wi,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(sn,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),lH(()=>(yt.current=!0,()=>{yt.current=!1}),[]);const Cn=ke=>{yt.current&&(ke&&Nt(!0),setTimeout(()=>{yt.current&&(re==null||re(ke),oe===void 0&&ur(ke))},10))};M.useEffect(()=>{if(oe===void 0)return()=>null;oe&&Nt(!0);const ke=setTimeout(()=>{ur(oe)},10);return()=>{clearTimeout(ke)}},[oe]),M.useEffect(()=>{if(Jt!==ro.current)if(ni.current&&clearTimeout(ni.current),ro.current=Jt,Jt)q==null||q();else{const ke=(Te=>{const De=Te.match(/^([\d.]+)(m?s?)$/);if(!De)return 0;const[,St,Dt]=De;return Dt!=="s"&&Dt!=="ms"?0:Number(St)*(Dt==="ms"?1:1e3)})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));ni.current=setTimeout(()=>{Nt(!1),io(null),U==null||U()},ke+25)}},[Jt]);const oo=(ke=D)=>{Me.current&&clearTimeout(Me.current),Me.current=setTimeout(()=>{Cn(!0)},ke)},xn=(ke=I)=>{It.current&&clearTimeout(It.current),It.current=setTimeout(()=>{ii.current||Cn(!1)},ke)},hr=ke=>{var Te;if(!ke)return;const De=(Te=ke.currentTarget)!==null&&Te!==void 0?Te:ke.target;if(!(De!=null&&De.isConnected))return pe(null),void Uo({current:null});D?oo():Cn(!0),pe(De),Uo({current:De}),It.current&&clearTimeout(It.current)},Or=()=>{S?xn(I||100):I?xn():Cn(!1),Me.current&&clearTimeout(Me.current)},Wt=({x:ke,y:Te})=>{var De;const St={getBoundingClientRect:()=>({x:ke,y:Te,width:0,height:0,top:Te,left:ke,right:ke,bottom:Te})};x5({place:(De=Re==null?void 0:Re.place)!==null&&De!==void 0?De:m,offset:k,elementReference:St,tooltipReference:Ee.current,tooltipArrowReference:on.current,strategy:y,middlewares:C,border:ge}).then(Dt=>{Object.keys(Dt.tooltipStyles).length&&vi(Dt.tooltipStyles),Object.keys(Dt.tooltipArrowStyles).length&&Mt(Dt.tooltipArrowStyles),dr(Dt.place)})},qt=ke=>{if(!ke)return;const Te=ke,De={x:Te.clientX,y:Te.clientY};Wt(De),_i.current=De},Gt=ke=>{var Te;if(!Jt)return;const De=ke.target;!((Te=Ee.current)===null||Te===void 0)&&Te.contains(De)||[document.querySelector(`[id='${h}']`),...On].some(St=>St==null?void 0:St.contains(De))||(Cn(!1),Me.current&&clearTimeout(Me.current))},Ce=A5(hr,50,!0),qe=A5(Or,50,!0),an=M.useCallback(()=>{var ke,Te;const De=(ke=Re==null?void 0:Re.position)!==null&&ke!==void 0?ke:Q;De?Wt(De):j?_i.current&&Wt(_i.current):ie!=null&&ie.isConnected&&x5({place:(Te=Re==null?void 0:Re.place)!==null&&Te!==void 0?Te:m,offset:k,elementReference:ie,tooltipReference:Ee.current,tooltipArrowReference:on.current,strategy:y,middlewares:C,border:ge}).then(St=>{yt.current&&(Object.keys(St.tooltipStyles).length&&vi(St.tooltipStyles),Object.keys(St.tooltipArrowStyles).length&&Mt(St.tooltipArrowStyles),dr(St.place))})},[Jt,ie,W,Y,m,Re==null?void 0:Re.place,k,y,Q,Re==null?void 0:Re.position,j]);M.useEffect(()=>{var ke,Te;const De=new Set($o);On.forEach(ct=>{De.add({current:ct})});const St=document.querySelector(`[id='${h}']`);St&&De.add({current:St});const Dt=()=>{Cn(!1)},si=C5(ie),yi=C5(Ee.current);sn.scroll&&(window.addEventListener("scroll",Dt),si==null||si.addEventListener("scroll",Dt),yi==null||yi.addEventListener("scroll",Dt));let Ot=null;sn.resize?window.addEventListener("resize",Dt):ie&&Ee.current&&(Ot=z4(ie,Ee.current,an,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const Pt=ct=>{ct.key==="Escape"&&Cn(!1)};sn.escape&&window.addEventListener("keydown",Pt),sn.clickOutsideAnchor&&window.addEventListener("click",Gt);const at=[],so=ct=>{Jt&&(ct==null?void 0:ct.target)===ie||hr(ct)},vl=ct=>{Jt&&(ct==null?void 0:ct.target)===ie&&Or()},Hn=["mouseenter","mouseleave","focus","blur"],Pa=["click","dblclick","mousedown","mouseup"];Object.entries(Hi).forEach(([ct,hn])=>{hn&&(Hn.includes(ct)?at.push({event:ct,listener:Ce}):Pa.includes(ct)&&at.push({event:ct,listener:so}))}),Object.entries(Wi).forEach(([ct,hn])=>{hn&&(Hn.includes(ct)?at.push({event:ct,listener:qe}):Pa.includes(ct)&&at.push({event:ct,listener:vl}))}),j&&at.push({event:"mousemove",listener:qt});const Ba=()=>{ii.current=!0},La=()=>{ii.current=!1,Or()};return S&&!ri&&((ke=Ee.current)===null||ke===void 0||ke.addEventListener("mouseenter",Ba),(Te=Ee.current)===null||Te===void 0||Te.addEventListener("mouseleave",La)),at.forEach(({event:ct,listener:hn})=>{De.forEach(Vs=>{var ao;(ao=Vs.current)===null||ao===void 0||ao.addEventListener(ct,hn)})}),()=>{var ct,hn;sn.scroll&&(window.removeEventListener("scroll",Dt),si==null||si.removeEventListener("scroll",Dt),yi==null||yi.removeEventListener("scroll",Dt)),sn.resize?window.removeEventListener("resize",Dt):Ot==null||Ot(),sn.clickOutsideAnchor&&window.removeEventListener("click",Gt),sn.escape&&window.removeEventListener("keydown",Pt),S&&!ri&&((ct=Ee.current)===null||ct===void 0||ct.removeEventListener("mouseenter",Ba),(hn=Ee.current)===null||hn===void 0||hn.removeEventListener("mouseleave",La)),at.forEach(({event:Vs,listener:ao})=>{De.forEach(Pr=>{var Ai;(Ai=Pr.current)===null||Ai===void 0||Ai.removeEventListener(Vs,ao)})})}},[ie,an,jt,$o,On,Z,ee,de,Ht]),M.useEffect(()=>{var ke,Te;let De=(Te=(ke=Re==null?void 0:Re.anchorSelect)!==null&&ke!==void 0?ke:f)!==null&&Te!==void 0?Te:"";!De&&n&&(De=`[data-tooltip-id='${n}']`);const St=new MutationObserver(Dt=>{const si=[],yi=[];Dt.forEach(Ot=>{if(Ot.type==="attributes"&&Ot.attributeName==="data-tooltip-id"&&Ot.target.getAttribute("data-tooltip-id")===n&&si.push(Ot.target),Ot.type==="childList"){if(ie){const Pt=[...Ot.removedNodes].filter(at=>at.nodeType===1);if(De)try{yi.push(...Pt.filter(at=>at.matches(De))),yi.push(...Pt.flatMap(at=>[...at.querySelectorAll(De)]))}catch{}Pt.some(at=>{var so;return!!(!((so=at==null?void 0:at.contains)===null||so===void 0)&&so.call(at,ie))&&(Nt(!1),Cn(!1),pe(null),Me.current&&clearTimeout(Me.current),It.current&&clearTimeout(It.current),!0)})}if(De)try{const Pt=[...Ot.addedNodes].filter(at=>at.nodeType===1);si.push(...Pt.filter(at=>at.matches(De))),si.push(...Pt.flatMap(at=>[...at.querySelectorAll(De)]))}catch{}}}),(si.length||yi.length)&&An(Ot=>[...Ot.filter(Pt=>!yi.includes(Pt)),...si])});return St.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{St.disconnect()}},[n,f,Re==null?void 0:Re.anchorSelect,ie]),M.useEffect(()=>{an()},[an]),M.useEffect(()=>{if(!(X!=null&&X.current))return()=>null;const ke=new ResizeObserver(()=>{setTimeout(()=>an())});return ke.observe(X.current),()=>{ke.disconnect()}},[W,X==null?void 0:X.current]),M.useEffect(()=>{var ke;const Te=document.querySelector(`[id='${h}']`),De=[...On,Te];ie&&De.includes(ie)||pe((ke=On[0])!==null&&ke!==void 0?ke:Te)},[h,On,ie]),M.useEffect(()=>()=>{Me.current&&clearTimeout(Me.current),It.current&&clearTimeout(It.current)},[]),M.useEffect(()=>{var ke;let Te=(ke=Re==null?void 0:Re.anchorSelect)!==null&&ke!==void 0?ke:f;if(!Te&&n&&(Te=`[data-tooltip-id='${n}']`),Te)try{const De=Array.from(document.querySelectorAll(Te));An(De)}catch{An([])}},[n,f,Re==null?void 0:Re.anchorSelect]);const Pn=(nt=Re==null?void 0:Re.content)!==null&&nt!==void 0?nt:W,oi=Jt&&Object.keys(Ui).length>0;return M.useImperativeHandle(i,()=>({open:ke=>{if(ke!=null&&ke.anchorSelect)try{document.querySelector(ke.anchorSelect)}catch{return void console.warn(`[react-tooltip] "${ke.anchorSelect}" is not a valid CSS selector`)}io(ke??null),ke!=null&&ke.delay?oo(ke.delay):Cn(!0)},close:ke=>{ke!=null&&ke.delay?xn(ke.delay):Cn(!1)},activeAnchor:ie,place:wi,isOpen:!!(jt&&!P&&Pn&&oi)})),jt&&!P&&Pn?Ao.createElement(E,{id:n,role:wt,className:Zb("react-tooltip",_c.tooltip,yk.tooltip,yk[d],o,`react-tooltip__place-${wi}`,_c[oi?"show":"closing"],oi?"react-tooltip__show":"react-tooltip__closing",y==="fixed"&&_c.fixed,S&&_c.clickable),onTransitionEnd:ke=>{ni.current&&clearTimeout(ni.current),Jt||ke.propertyName!=="opacity"||(Nt(!1),io(null),U==null||U())},style:{...Y,...Ui,opacity:Se!==void 0&&oi?Se:void 0},ref:Ee},Pn,Ao.createElement(E,{className:Zb("react-tooltip-arrow",_c.arrow,yk.arrow,c,L&&_c.noArrow),style:{...lt,background:tt?`linear-gradient(to right bottom, transparent 50%, ${tt} 50%)`:void 0},ref:on})):null},hH=({content:i})=>Ao.createElement("span",{dangerouslySetInnerHTML:{__html:i}}),E5=(i,n)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(i,n);Ao.forwardRef(({id:i,anchorId:n,anchorSelect:o,content:c,html:d,render:h,className:f,classNameArrow:m,variant:k="dark",place:v="top",offset:w=10,wrapper:y="div",children:C=null,events:E=["hover"],openOnClick:D=!1,positionStrategy:I="absolute",middlewares:j,delayShow:P=0,delayHide:L=0,float:S=!1,hidden:$=!1,noArrow:H=!1,clickable:J=!1,closeOnEsc:Z=!1,closeOnScroll:ee=!1,closeOnResize:de=!1,openEvents:se,closeEvents:Y,globalCloseEvents:Q,imperativeModeOnly:q=!1,style:U,position:W,isOpen:X,disableStyleInjection:oe=!1,border:re,opacity:ie,arrowColor:pe,setIsOpen:ge,afterShow:Se,afterHide:tt,role:wt="tooltip"},nt)=>{const[Ee,on]=M.useState(c),[Me,It]=M.useState(d),[ni,wi]=M.useState(v),[dr,Ui]=M.useState(k),[vi,lt]=M.useState(w),[Mt,Jt]=M.useState(P),[ur,jt]=M.useState(L),[Nt,Re]=M.useState(S),[io,ro]=M.useState($),[_i,$o]=M.useState(y),[Uo,ii]=M.useState(E),[On,An]=M.useState(I),[yt,Ht]=M.useState(null),[ri,Hi]=M.useState(null),Wi=M.useRef(oe),{anchorRefs:sn,activeAnchor:Cn}=wI(i),oo=qt=>qt==null?void 0:qt.getAttributeNames().reduce((Gt,Ce)=>{var qe;return Ce.startsWith("data-tooltip-")&&(Gt[Ce.replace(/^data-tooltip-/,"")]=(qe=qt==null?void 0:qt.getAttribute(Ce))!==null&&qe!==void 0?qe:null),Gt},{}),xn=qt=>{const Gt={place:Ce=>{var qe;wi((qe=Ce)!==null&&qe!==void 0?qe:v)},content:Ce=>{on(Ce??c)},html:Ce=>{It(Ce??d)},variant:Ce=>{var qe;Ui((qe=Ce)!==null&&qe!==void 0?qe:k)},offset:Ce=>{lt(Ce===null?w:Number(Ce))},wrapper:Ce=>{var qe;$o((qe=Ce)!==null&&qe!==void 0?qe:y)},events:Ce=>{const qe=Ce==null?void 0:Ce.split(" ");ii(qe??E)},"position-strategy":Ce=>{var qe;An((qe=Ce)!==null&&qe!==void 0?qe:I)},"delay-show":Ce=>{Jt(Ce===null?P:Number(Ce))},"delay-hide":Ce=>{jt(Ce===null?L:Number(Ce))},float:Ce=>{Re(Ce===null?S:Ce==="true")},hidden:Ce=>{ro(Ce===null?$:Ce==="true")},"class-name":Ce=>{Ht(Ce)}};Object.values(Gt).forEach(Ce=>Ce(null)),Object.entries(qt).forEach(([Ce,qe])=>{var an;(an=Gt[Ce])===null||an===void 0||an.call(Gt,qe)})};M.useEffect(()=>{on(c)},[c]),M.useEffect(()=>{It(d)},[d]),M.useEffect(()=>{wi(v)},[v]),M.useEffect(()=>{Ui(k)},[k]),M.useEffect(()=>{lt(w)},[w]),M.useEffect(()=>{Jt(P)},[P]),M.useEffect(()=>{jt(L)},[L]),M.useEffect(()=>{Re(S)},[S]),M.useEffect(()=>{ro($)},[$]),M.useEffect(()=>{An(I)},[I]),M.useEffect(()=>{Wi.current!==oe&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[oe]),M.useEffect(()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:oe==="core",disableBase:oe}}))},[]),M.useEffect(()=>{var qt;const Gt=new Set(sn);let Ce=o;if(!Ce&&i&&(Ce=`[data-tooltip-id='${i}']`),Ce)try{document.querySelectorAll(Ce).forEach(ke=>{Gt.add({current:ke})})}catch{console.warn(`[react-tooltip] "${Ce}" is not a valid CSS selector`)}const qe=document.querySelector(`[id='${n}']`);if(qe&&Gt.add({current:qe}),!Gt.size)return()=>null;const an=(qt=ri??qe)!==null&&qt!==void 0?qt:Cn.current,Pn=new MutationObserver(ke=>{ke.forEach(Te=>{var De;if(!an||Te.type!=="attributes"||!(!((De=Te.attributeName)===null||De===void 0)&&De.startsWith("data-tooltip-")))return;const St=oo(an);xn(St)})}),oi={attributes:!0,childList:!1,subtree:!1};if(an){const ke=oo(an);xn(ke),Pn.observe(an,oi)}return()=>{Pn.disconnect()}},[sn,Cn,ri,n,o]),M.useEffect(()=>{U!=null&&U.border&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),re&&!E5("border",`${re}`)&&console.warn(`[react-tooltip] "${re}" is not a valid \`border\`.`),U!=null&&U.opacity&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),ie&&!E5("opacity",`${ie}`)&&console.warn(`[react-tooltip] "${ie}" is not a valid \`opacity\`.`)},[]);let hr=C;const Or=M.useRef(null);if(h){const qt=h({content:Ee??null,activeAnchor:ri});hr=qt?Ao.createElement("div",{ref:Or,className:"react-tooltip-content-wrapper"},qt):null}else Ee&&(hr=Ee);Me&&(hr=Ao.createElement(hH,{content:Me}));const Wt={forwardRef:nt,id:i,anchorId:n,anchorSelect:o,className:Zb(f,yt),classNameArrow:m,content:hr,contentWrapperRef:Or,place:ni,variant:dr,offset:vi,wrapper:_i,events:Uo,openOnClick:D,positionStrategy:On,middlewares:j,delayShow:Mt,delayHide:ur,float:Nt,hidden:io,noArrow:H,clickable:J,closeOnEsc:Z,closeOnScroll:ee,closeOnResize:de,openEvents:se,closeEvents:Y,globalCloseEvents:Q,imperativeModeOnly:q,style:U,position:W,isOpen:X,border:re,opacity:ie,arrowColor:pe,setIsOpen:ge,afterShow:Se,afterHide:tt,activeAnchor:ri,setActiveAnchor:qt=>Hi(qt),role:wt};return Ao.createElement(uH,{...Wt})});typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",i=>{i.detail.disableCore||y5({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),i.detail.disableBase||y5({css:`