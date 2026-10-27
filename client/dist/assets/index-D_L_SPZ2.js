(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qs={exports:{}},tl={},Xs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),dc=Symbol.for("react.portal"),fc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),xc=Symbol.for("react.memo"),wc=Symbol.for("react.lazy"),Oo=Symbol.iterator;function kc(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var Ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gs=Object.assign,Ys={};function on(e,t,n){this.props=e,this.context=t,this.refs=Ys,this.updater=n||Ks}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bs(){}bs.prototype=on.prototype;function Ui(e,t,n){this.props=e,this.context=t,this.refs=Ys,this.updater=n||Ks}var $i=Ui.prototype=new bs;$i.constructor=Ui;Gs($i,on.prototype);$i.isPureReactComponent=!0;var Io=Array.isArray,Zs=Object.prototype.hasOwnProperty,Bi={current:null},Js={key:!0,ref:!0,__self:!0,__source:!0};function qs(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Zs.call(t,r)&&!Js.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Yn,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function Sc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function jc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ao=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yn:case dc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+wl(o,0):r,Io(l)?(n="",e!=null&&(n=e.replace(Ao,"$&/")+"/"),xr(l,t,n,"",function(d){return d})):l!=null&&(Vi(l)&&(l=Sc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ao,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Io(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+wl(i,a);o+=xr(i,t,n,u,l)}else if(u=kc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+wl(i,a++),o+=xr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Nc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},Ec={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Bi};function ea(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=fc;L.Profiler=mc;L.PureComponent=Ui;L.StrictMode=pc;L.Suspense=yc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ec;L.act=ea;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gs({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Zs.call(t,u)&&!Js.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Yn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hc,_context:e},e.Consumer=e};L.createElement=qs;L.createFactory=function(e){var t=qs.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:vc,render:e}};L.isValidElement=Vi;L.lazy=function(e){return{$$typeof:wc,_payload:{_status:-1,_result:e},_init:Nc}};L.memo=function(e,t){return{$$typeof:xc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};L.unstable_act=ea;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Xs.exports=L;var H=Xs.exports;const Cc=cc(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=H,_c=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),Lc=Object.prototype.hasOwnProperty,Tc=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Lc.call(t,r)&&!Mc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:_c,type:e,key:i,ref:o,props:l,_owner:Tc.current}}tl.Fragment=Pc;tl.jsx=ta;tl.jsxs=ta;Qs.exports=tl;var s=Qs.exports,Xl={},na={exports:{}},we={},ra={exports:{}},la={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,_){var P=N.length;N.push(_);e:for(;0<P;){var X=P-1>>>1,Z=N[X];if(0<l(Z,_))N[X]=_,N[P]=Z,P=X;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var _=N[0],P=N.pop();if(P!==_){N[0]=P;e:for(var X=0,Z=N.length,er=Z>>>1;X<er;){var vt=2*(X+1)-1,xl=N[vt],yt=vt+1,tr=N[yt];if(0>l(xl,P))yt<Z&&0>l(tr,xl)?(N[X]=tr,N[yt]=P,X=yt):(N[X]=xl,N[vt]=P,X=vt);else if(yt<Z&&0>l(tr,P))N[X]=tr,N[yt]=P,X=yt;else break e}}return _}function l(N,_){var P=N.sortIndex-_.sortIndex;return P!==0?P:N.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],g=1,h=null,m=3,w=!1,k=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=N)r(d),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(d)}}function v(N){if(x=!1,p(N),!k)if(n(u)!==null)k=!0,vl(j);else{var _=n(d);_!==null&&yl(v,_.startTime-N)}}function j(N,_){k=!1,x&&(x=!1,f(z),z=-1),w=!0;var P=m;try{for(p(_),h=n(u);h!==null&&(!(h.expirationTime>_)||N&&!_e());){var X=h.callback;if(typeof X=="function"){h.callback=null,m=h.priorityLevel;var Z=X(h.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(u)&&r(u),p(_)}else r(u);h=n(u)}if(h!==null)var er=!0;else{var vt=n(d);vt!==null&&yl(v,vt.startTime-_),er=!1}return er}finally{h=null,m=P,w=!1}}var E=!1,C=null,z=-1,Q=5,T=-1;function _e(){return!(e.unstable_now()-T<Q)}function un(){if(C!==null){var N=e.unstable_now();T=N;var _=!0;try{_=C(!0,N)}finally{_?cn():(E=!1,C=null)}}else E=!1}var cn;if(typeof c=="function")cn=function(){c(un)};else if(typeof MessageChannel<"u"){var Do=new MessageChannel,uc=Do.port2;Do.port1.onmessage=un,cn=function(){uc.postMessage(null)}}else cn=function(){M(un,0)};function vl(N){C=N,E||(E=!0,cn())}function yl(N,_){z=M(function(){N(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,vl(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var P=m;m=_;try{return N()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,_){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=m;m=N;try{return _()}finally{m=P}},e.unstable_scheduleCallback=function(N,_,P){var X=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?X+P:X):P=X,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,N={id:g++,callback:_,priorityLevel:N,startTime:P,expirationTime:Z,sortIndex:-1},P>X?(N.sortIndex=P,t(d,N),n(u)===null&&N===n(d)&&(x?(f(z),z=-1):x=!0,yl(v,P-X))):(N.sortIndex=Z,t(u,N),k||w||(k=!0,vl(j))),N},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(N){var _=m;return function(){var P=m;m=_;try{return N.apply(this,arguments)}finally{m=P}}}})(la);ra.exports=la;var Rc=ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=H,xe=Rc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ia=new Set,Mn={};function Tt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)ia.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Uo={};function Ic(e){return Kl.call(Uo,e)?!0:Kl.call(Fo,e)?!1:Oc.test(e)?Uo[e]=!0:(Fo[e]=!0,!1)}function Ac(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,t,n,r){if(t===null||typeof t>"u"||Ac(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hi=/[\-:]([a-z])/g;function Wi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hi,Wi);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hi,Wi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hi,Wi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qi(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fc(t,n,l,r)&&(n=null),r||l===null?Ic(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var be=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Xi=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),oa=Symbol.for("react.provider"),sa=Symbol.for("react.context"),Ki=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),aa=Symbol.for("react.offscreen"),$o=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,kl;function xn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var Sl=!1;function jl(e,t){if(!e||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Uc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Dt:return"Portal";case Gl:return"Profiler";case Xi:return"StrictMode";case Yl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case oa:return(e._context.displayName||"Context")+".Provider";case Ki:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gi:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function $c(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Xi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ua(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bc(e){var t=ua(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Bc(e))}function ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ua(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function da(e,t){t=t.checked,t!=null&&Qi(e,"checked",t,!1)}function ql(e,t){da(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Xt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ho(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(wn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function fa(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ma=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Vc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function ga(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Hc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Hc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Kt=null,Gt=null;function Qo(e){if(e=Jn(e)){if(typeof oi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ol(t),oi(e.stateNode,e.type,t))}}function va(e){Kt?Gt?Gt.push(e):Gt=[e]:Kt=e}function ya(){if(Kt){var e=Kt,t=Gt;if(Gt=Kt=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function xa(e,t){return e(t)}function wa(){}var Nl=!1;function ka(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return xa(e,t,n)}finally{Nl=!1,(Kt!==null||Gt!==null)&&(wa(),ya())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var si=!1;if(Xe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){si=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{si=!1}function Wc(e,t,n,r,l,i,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Nn=!1,Mr=null,Rr=!1,ai=null,Qc={onError:function(e){Nn=!0,Mr=e}};function Xc(e,t,n,r,l,i,o,a,u){Nn=!1,Mr=null,Wc.apply(Qc,arguments)}function Kc(e,t,n,r,l,i,o,a,u){if(Xc.apply(this,arguments),Nn){if(Nn){var d=Mr;Nn=!1,Mr=null}else throw Error(y(198));Rr||(Rr=!0,ai=d)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xo(e){if(Mt(e)!==e)throw Error(y(188))}function Gc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Xo(l),e;if(i===r)return Xo(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ja(e){return e=Gc(e),e!==null?Na(e):null}function Na(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Na(e);if(t!==null)return t;e=e.sibling}return null}var Ea=xe.unstable_scheduleCallback,Ko=xe.unstable_cancelCallback,Yc=xe.unstable_shouldYield,bc=xe.unstable_requestPaint,K=xe.unstable_now,Zc=xe.unstable_getCurrentPriorityLevel,bi=xe.unstable_ImmediatePriority,Ca=xe.unstable_UserBlockingPriority,Dr=xe.unstable_NormalPriority,Jc=xe.unstable_LowPriority,za=xe.unstable_IdlePriority,nl=null,Ue=null;function qc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:nd,ed=Math.log,td=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(ed(e)/td|0)|0}var or=64,sr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=kn(a):(i&=o,i!==0&&(r=kn(i)))}else o=n&~l,o!==0?r=kn(o):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Re(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=rd(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _a(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Pa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var La,Ji,Ta,Ma,Ra,ci=!1,ar=[],lt=null,it=null,ot=null,On=new Map,In=new Map,et=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sd(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return it=pn(it,e,t,n,r,l),!0;case"mouseover":return ot=pn(ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,pn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,In.set(i,pn(In.get(i)||null,e,t,n,r,l)),!0}return!1}function Da(e){var t=kt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Sa(n),t!==null){e.blockedOn=t,Ra(e.priority,function(){Ta(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ii=r,n.target.dispatchEvent(r),ii=null}else return t=Jn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Yo(e,t,n){kr(e)&&n.delete(t)}function ad(){ci=!1,lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),ot!==null&&kr(ot)&&(ot=null),On.forEach(Yo),In.forEach(Yo)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,ad)))}function An(e){function t(l){return mn(l,e)}if(0<ar.length){mn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),it!==null&&mn(it,e),ot!==null&&mn(ot,e),On.forEach(t),In.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Da(n),n.blockedOn===null&&et.shift()}var Yt=be.ReactCurrentBatchConfig,Ir=!0;function ud(e,t,n,r){var l=D,i=Yt.transition;Yt.transition=null;try{D=1,qi(e,t,n,r)}finally{D=l,Yt.transition=i}}function cd(e,t,n,r){var l=D,i=Yt.transition;Yt.transition=null;try{D=4,qi(e,t,n,r)}finally{D=l,Yt.transition=i}}function qi(e,t,n,r){if(Ir){var l=di(e,t,n,r);if(l===null)Ol(e,t,r,Ar,n),Go(e,r);else if(sd(l,e,t,n,r))r.stopPropagation();else if(Go(e,r),t&4&&-1<od.indexOf(e)){for(;l!==null;){var i=Jn(l);if(i!==null&&La(i),i=di(e,t,n,r),i===null&&Ol(e,t,r,Ar,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Ar=null;function di(e,t,n,r){if(Ar=null,e=Yi(r),e=kt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Oa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case bi:return 1;case Ca:return 4;case Dr:case Jc:return 16;case za:return 536870912;default:return 16}default:return 16}}var nt=null,eo=null,Sr=null;function Ia(){if(Sr)return Sr;var e,t=eo,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Sr=l.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function bo(){return!1}function ke(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:bo,this.isPropagationStopped=bo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=ke(sn),Zn=B({},sn,{view:0,detail:0}),dd=ke(Zn),Cl,zl,hn,rl=B({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Cl=e.screenX-hn.screenX,zl=e.screenY-hn.screenY):zl=Cl=0,hn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Zo=ke(rl),fd=B({},rl,{dataTransfer:0}),pd=ke(fd),md=B({},Zn,{relatedTarget:0}),_l=ke(md),hd=B({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=ke(hd),vd=B({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yd=ke(vd),xd=B({},sn,{data:0}),Jo=ke(xd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sd[e])?!!t[e]:!1}function no(){return jd}var Nd=B({},Zn,{key:function(e){if(e.key){var t=wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=ke(Nd),Cd=B({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=ke(Cd),zd=B({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),_d=ke(zd),Pd=B({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ld=ke(Pd),Td=B({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=ke(Td),Rd=[9,13,27,32],ro=Xe&&"CompositionEvent"in window,En=null;Xe&&"documentMode"in document&&(En=document.documentMode);var Dd=Xe&&"TextEvent"in window&&!En,Aa=Xe&&(!ro||En&&8<En&&11>=En),es=" ",ts=!1;function Fa(e,t){switch(e){case"keyup":return Rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ua(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function Od(e,t){switch(e){case"compositionend":return Ua(t);case"keypress":return t.which!==32?null:(ts=!0,es);case"textInput":return e=t.data,e===es&&ts?null:e;default:return null}}function Id(e,t){if(It)return e==="compositionend"||!ro&&Fa(e,t)?(e=Ia(),Sr=eo=nt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Aa&&t.locale!=="ko"?null:t.data;default:return null}}var Ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ad[e.type]:t==="textarea"}function $a(e,t,n,r){va(r),t=Fr(t,"onChange"),0<t.length&&(n=new to("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,Fn=null;function Fd(e){Za(e,0)}function ll(e){var t=Ut(e);if(ca(t))return e}function Ud(e,t){if(e==="change")return t}var Ba=!1;if(Xe){var Pl;if(Xe){var Ll="oninput"in document;if(!Ll){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),Ll=typeof rs.oninput=="function"}Pl=Ll}else Pl=!1;Ba=Pl&&(!document.documentMode||9<document.documentMode)}function ls(){Cn&&(Cn.detachEvent("onpropertychange",Va),Fn=Cn=null)}function Va(e){if(e.propertyName==="value"&&ll(Fn)){var t=[];$a(t,Fn,e,Yi(e)),ka(Fd,t)}}function $d(e,t,n){e==="focusin"?(ls(),Cn=t,Fn=n,Cn.attachEvent("onpropertychange",Va)):e==="focusout"&&ls()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Fn)}function Vd(e,t){if(e==="click")return ll(t)}function Hd(e,t){if(e==="input"||e==="change")return ll(t)}function Wd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Wd;function Un(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Kl.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function os(e,t){var n=is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=is(n)}}function Ha(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ha(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wa(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qd(e){var t=Wa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ha(n.ownerDocument.documentElement,n)){if(r!==null&&lo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=os(n,i);var o=os(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=Xe&&"documentMode"in document&&11>=document.documentMode,At=null,fi=null,zn=null,pi=!1;function ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||At==null||At!==Tr(r)||(r=At,"selectionStart"in r&&lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&Un(zn,r)||(zn=r,r=Fr(fi,"onSelect"),0<r.length&&(t=new to("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=At)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ft={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Tl={},Qa={};Xe&&(Qa=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function il(e){if(Tl[e])return Tl[e];if(!Ft[e])return e;var t=Ft[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qa)return Tl[e]=t[n];return e}var Xa=il("animationend"),Ka=il("animationiteration"),Ga=il("animationstart"),Ya=il("transitionend"),ba=new Map,as="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){ba.set(e,t),Tt(t,[e])}for(var Ml=0;Ml<as.length;Ml++){var Rl=as[Ml],Kd=Rl.toLowerCase(),Gd=Rl[0].toUpperCase()+Rl.slice(1);mt(Kd,"on"+Gd)}mt(Xa,"onAnimationEnd");mt(Ka,"onAnimationIteration");mt(Ga,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(Ya,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function us(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kc(r,t,void 0,e),e.currentTarget=null}function Za(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;us(l,a,d),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;us(l,a,d),i=u}}}if(Rr)throw e=ai,Rr=!1,ai=null,e}function I(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var r=e+"__bubble";n.has(r)||(Ja(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),Ja(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[dr]){e[dr]=!0,ia.forEach(function(n){n!=="selectionchange"&&(Yd.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Dl("selectionchange",!1,t))}}function Ja(e,t,n,r){switch(Oa(t)){case 1:var l=ud;break;case 4:l=cd;break;default:l=qi}n=l.bind(null,t,n,e),l=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=kt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}ka(function(){var d=i,g=Yi(n),h=[];e:{var m=ba.get(e);if(m!==void 0){var w=to,k=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":w=Ed;break;case"focusin":k="focus",w=_l;break;case"focusout":k="blur",w=_l;break;case"beforeblur":case"afterblur":w=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=_d;break;case Xa:case Ka:case Ga:w=gd;break;case Ya:w=Ld;break;case"scroll":w=dd;break;case"wheel":w=Md;break;case"copy":case"cut":case"paste":w=yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=qo}var x=(t&4)!==0,M=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Dn(c,f),v!=null&&x.push(Bn(c,v,p)))),M)break;c=c.return}0<x.length&&(m=new w(m,k,null,n,g),h.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==ii&&(k=n.relatedTarget||n.fromElement)&&(kt(k)||k[Ke]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?kt(k):null,k!==null&&(M=Mt(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(x=Zo,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=qo,v="onPointerLeave",f="onPointerEnter",c="pointer"),M=w==null?m:Ut(w),p=k==null?m:Ut(k),m=new x(v,c+"leave",w,n,g),m.target=M,m.relatedTarget=p,v=null,kt(g)===d&&(x=new x(f,c+"enter",k,n,g),x.target=p,x.relatedTarget=M,v=x),M=v,w&&k)t:{for(x=w,f=k,c=0,p=x;p;p=Rt(p))c++;for(p=0,v=f;v;v=Rt(v))p++;for(;0<c-p;)x=Rt(x),c--;for(;0<p-c;)f=Rt(f),p--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=Rt(x),f=Rt(f)}x=null}else x=null;w!==null&&cs(h,m,w,x,!1),k!==null&&M!==null&&cs(h,M,k,x,!0)}}e:{if(m=d?Ut(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=Ud;else if(ns(m))if(Ba)j=Hd;else{j=Bd;var E=$d}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Vd);if(j&&(j=j(e,d))){$a(h,j,n,g);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&ei(m,"number",m.value)}switch(E=d?Ut(d):window,e){case"focusin":(ns(E)||E.contentEditable==="true")&&(At=E,fi=d,zn=null);break;case"focusout":zn=fi=At=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,ss(h,n,g);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":ss(h,n,g)}var C;if(ro)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else It?Fa(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Aa&&n.locale!=="ko"&&(It||z!=="onCompositionStart"?z==="onCompositionEnd"&&It&&(C=Ia()):(nt=g,eo="value"in nt?nt.value:nt.textContent,It=!0)),E=Fr(d,z),0<E.length&&(z=new Jo(z,e,null,n,g),h.push({event:z,listeners:E}),C?z.data=C:(C=Ua(n),C!==null&&(z.data=C)))),(C=Dd?Od(e,n):Id(e,n))&&(d=Fr(d,"onBeforeInput"),0<d.length&&(g=new Jo("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=C))}Za(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift(Bn(e,i,l)),i=Dn(e,t),i!=null&&r.push(Bn(e,i,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=Dn(n,i),u!=null&&o.unshift(Bn(n,u,a))):l||(u=Dn(n,i),u!=null&&o.push(Bn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var bd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function ds(e){return(typeof e=="string"?e:""+e).replace(bd,`
`).replace(Zd,"")}function fr(e,t,n){if(t=ds(t),ds(e)!==t&&n)throw Error(y(425))}function Ur(){}var mi=null,hi=null;function gi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,fs=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof fs<"u"?function(e){return fs.resolve(null).then(e).catch(ef)}:vi;function ef(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),An(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);An(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,Vn="__reactProps$"+an,Ke="__reactContainer$"+an,yi="__reactEvents$"+an,tf="__reactListeners$"+an,nf="__reactHandles$"+an;function kt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ps(e);e!==null;){if(n=e[Fe])return n;e=ps(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ol(e){return e[Vn]||null}var xi=[],$t=-1;function ht(e){return{current:e}}function A(e){0>$t||(e.current=xi[$t],xi[$t]=null,$t--)}function O(e,t){$t++,xi[$t]=e.current,e.current=t}var pt={},oe=ht(pt),pe=ht(!1),Ct=pt;function qt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function $r(){A(pe),A(oe)}function ms(e,t,n){if(oe.current!==pt)throw Error(y(168));O(oe,t),O(pe,n)}function qa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,$c(e)||"Unknown",l));return B({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Ct=oe.current,O(oe,e),O(pe,pe.current),!0}function hs(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=qa(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,A(pe),A(oe),O(oe,e)):A(pe),O(pe,n)}var Ve=null,sl=!1,Al=!1;function eu(e){Ve===null?Ve=[e]:Ve.push(e)}function rf(e){sl=!0,eu(e)}function gt(){if(!Al&&Ve!==null){Al=!0;var e=0,t=D;try{var n=Ve;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,sl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Ea(bi,gt),l}finally{D=t,Al=!1}}return null}var Bt=[],Vt=0,Vr=null,Hr=0,Se=[],je=0,zt=null,He=1,We="";function xt(e,t){Bt[Vt++]=Hr,Bt[Vt++]=Vr,Vr=e,Hr=t}function tu(e,t,n){Se[je++]=He,Se[je++]=We,Se[je++]=zt,zt=e;var r=He;e=We;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var i=32-Re(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Re(t)+l|n<<l|r,We=i+e}else He=1<<i|n<<l|r,We=e}function io(e){e.return!==null&&(xt(e,1),tu(e,1,0))}function oo(e){for(;e===Vr;)Vr=Bt[--Vt],Bt[Vt]=null,Hr=Bt[--Vt],Bt[Vt]=null;for(;e===zt;)zt=Se[--je],Se[je]=null,We=Se[--je],Se[je]=null,He=Se[--je],Se[je]=null}var ye=null,ve=null,F=!1,Me=null;function nu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(F){var t=ve;if(t){var n=t;if(!gs(e,t)){if(wi(e))throw Error(y(418));t=st(n.nextSibling);var r=ye;t&&gs(e,t)?nu(r,n):(e.flags=e.flags&-4097|2,F=!1,ye=e)}}else{if(wi(e))throw Error(y(418));e.flags=e.flags&-4097|2,F=!1,ye=e}}}function vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function pr(e){if(e!==ye)return!1;if(!F)return vs(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gi(e.type,e.memoizedProps)),t&&(t=ve)){if(wi(e))throw ru(),Error(y(418));for(;t;)nu(e,t),t=st(t.nextSibling)}if(vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?st(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=ve;e;)e=st(e.nextSibling)}function en(){ve=ye=null,F=!1}function so(e){Me===null?Me=[e]:Me.push(e)}var lf=be.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ys(e){var t=e._init;return t(e._payload)}function lu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=dt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,v){return c===null||c.tag!==6?(c=Wl(p,f.mode,v),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,v){var j=p.type;return j===Ot?g(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&ys(j)===c.type)?(v=l(c,p.props),v.ref=gn(f,c,p),v.return=f,v):(v=Lr(p.type,p.key,p.props,null,f.mode,v),v.ref=gn(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Ql(p,f.mode,v),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,v,j){return c===null||c.tag!==7?(c=Et(p,f.mode,v,j),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Wl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case rr:return p=Lr(c.type,c.key,c.props,null,f.mode,p),p.ref=gn(f,null,c),p.return=f,p;case Dt:return c=Ql(c,f.mode,p),c.return=f,c;case Je:var v=c._init;return h(f,v(c._payload),p)}if(wn(c)||dn(c))return c=Et(c,f.mode,p,null),c.return=f,c;mr(f,c)}return null}function m(f,c,p,v){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===j?u(f,c,p,v):null;case Dt:return p.key===j?d(f,c,p,v):null;case Je:return j=p._init,m(f,c,j(p._payload),v)}if(wn(p)||dn(p))return j!==null?null:g(f,c,p,v,null);mr(f,p)}return null}function w(f,c,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(c,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,j);case Dt:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,j);case Je:var E=v._init;return w(f,c,p,E(v._payload),j)}if(wn(v)||dn(v))return f=f.get(p)||null,g(c,f,v,j,null);mr(c,v)}return null}function k(f,c,p,v){for(var j=null,E=null,C=c,z=c=0,Q=null;C!==null&&z<p.length;z++){C.index>z?(Q=C,C=null):Q=C.sibling;var T=m(f,C,p[z],v);if(T===null){C===null&&(C=Q);break}e&&C&&T.alternate===null&&t(f,C),c=i(T,c,z),E===null?j=T:E.sibling=T,E=T,C=Q}if(z===p.length)return n(f,C),F&&xt(f,z),j;if(C===null){for(;z<p.length;z++)C=h(f,p[z],v),C!==null&&(c=i(C,c,z),E===null?j=C:E.sibling=C,E=C);return F&&xt(f,z),j}for(C=r(f,C);z<p.length;z++)Q=w(C,f,z,p[z],v),Q!==null&&(e&&Q.alternate!==null&&C.delete(Q.key===null?z:Q.key),c=i(Q,c,z),E===null?j=Q:E.sibling=Q,E=Q);return e&&C.forEach(function(_e){return t(f,_e)}),F&&xt(f,z),j}function x(f,c,p,v){var j=dn(p);if(typeof j!="function")throw Error(y(150));if(p=j.call(p),p==null)throw Error(y(151));for(var E=j=null,C=c,z=c=0,Q=null,T=p.next();C!==null&&!T.done;z++,T=p.next()){C.index>z?(Q=C,C=null):Q=C.sibling;var _e=m(f,C,T.value,v);if(_e===null){C===null&&(C=Q);break}e&&C&&_e.alternate===null&&t(f,C),c=i(_e,c,z),E===null?j=_e:E.sibling=_e,E=_e,C=Q}if(T.done)return n(f,C),F&&xt(f,z),j;if(C===null){for(;!T.done;z++,T=p.next())T=h(f,T.value,v),T!==null&&(c=i(T,c,z),E===null?j=T:E.sibling=T,E=T);return F&&xt(f,z),j}for(C=r(f,C);!T.done;z++,T=p.next())T=w(C,f,z,T.value,v),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?z:T.key),c=i(T,c,z),E===null?j=T:E.sibling=T,E=T);return e&&C.forEach(function(un){return t(f,un)}),F&&xt(f,z),j}function M(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var j=p.key,E=c;E!==null;){if(E.key===j){if(j=p.type,j===Ot){if(E.tag===7){n(f,E.sibling),c=l(E,p.props.children),c.return=f,f=c;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Je&&ys(j)===E.type){n(f,E.sibling),c=l(E,p.props),c.ref=gn(f,E,p),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===Ot?(c=Et(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Lr(p.type,p.key,p.props,null,f.mode,v),v.ref=gn(f,c,p),v.return=f,f=v)}return o(f);case Dt:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ql(p,f.mode,v),c.return=f,f=c}return o(f);case Je:return E=p._init,M(f,c,E(p._payload),v)}if(wn(p))return k(f,c,p,v);if(dn(p))return x(f,c,p,v);mr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Wl(p,f.mode,v),c.return=f,f=c),o(f)):n(f,c)}return M}var tn=lu(!0),iu=lu(!1),Wr=ht(null),Qr=null,Ht=null,ao=null;function uo(){ao=Ht=Qr=null}function co(e){var t=Wr.current;A(Wr),e._currentValue=t}function Si(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bt(e,t){Qr=e,ao=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Qr===null)throw Error(y(308));Ht=e,Qr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var St=null;function fo(e){St===null?St=[e]:St.push(e)}function ou(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,fo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=d:a.next=d,g.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;o=0,g=d=u=null,a=i;do{var m=a.lane,w=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,x=a;switch(m=t,w=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){h=k.call(w,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,m=typeof k=="function"?k.call(w,h,m):k,m==null)break e;h=B({},h,m);break e;case 2:qe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(d=g=w,u=h):g=g.next=w,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=h}}function ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var qn={},$e=ht(qn),Hn=ht(qn),Wn=ht(qn);function jt(e){if(e===qn)throw Error(y(174));return e}function mo(e,t){switch(O(Wn,t),O(Hn,e),O($e,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}A($e),O($e,t)}function nn(){A($e),A(Hn),A(Wn)}function au(e){jt(Wn.current);var t=jt($e.current),n=ni(t,e.type);t!==n&&(O(Hn,e),O($e,n))}function ho(e){Hn.current===e&&(A($e),A(Hn))}var U=ht(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function go(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Er=be.ReactCurrentDispatcher,Ul=be.ReactCurrentBatchConfig,_t=0,$=null,Y=null,J=null,Gr=!1,_n=!1,Qn=0,of=0;function re(){throw Error(y(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,l,i){if(_t=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?cf:df,e=n(r,l),_n){i=0;do{if(_n=!1,Qn=0,25<=i)throw Error(y(301));i+=1,J=Y=null,t.updateQueue=null,Er.current=ff,e=n(r,l)}while(_n)}if(Er.current=Yr,t=Y!==null&&Y.next!==null,_t=0,J=Y=$=null,Gr=!1,t)throw Error(y(300));return e}function xo(){var e=Qn!==0;return Qn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function ze(){if(Y===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,Y=e;else{if(e===null)throw Error(y(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function Xn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,d=i;do{var g=d.lane;if((_t&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,$.lanes|=g,Pt|=g}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=a,Oe(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=ze(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Oe(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function uu(){}function cu(e,t){var n=$,r=ze(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,wo(pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Kn(9,fu.bind(null,n,r,l,t),void 0,null),q===null)throw Error(y(349));_t&30||du(n,t,l)}return l}function du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fu(e,t,n,r){t.value=n,t.getSnapshot=r,mu(t)&&hu(e)}function pu(e,t,n){return n(function(){mu(t)&&hu(e)})}function mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function hu(e){var t=Ge(e,1);t!==null&&De(t,e,1,-1)}function ks(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=uf.bind(null,$,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gu(){return ze().memoizedState}function Cr(e,t,n,r){var l=Ae();$.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=ze();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&vo(r,o.deps)){l.memoizedState=Kn(t,n,i,r);return}}$.flags|=e,l.memoizedState=Kn(1|t,n,i,r)}function Ss(e,t){return Cr(8390656,8,e,t)}function wo(e,t){return al(2048,8,e,t)}function vu(e,t){return al(4,2,e,t)}function yu(e,t){return al(4,4,e,t)}function xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,xu.bind(null,t,e),n)}function ko(){}function ku(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Su(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ju(e,t,n){return _t&21?(Oe(n,t)||(n=_a(),$.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function sf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{D=n,Ul.transition=r}}function Nu(){return ze().memoizedState}function af(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e))Cu(t,n);else if(n=ou(e,t,n,r),n!==null){var l=ae();De(n,e,r,l),zu(n,t,r)}}function uf(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Cu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Oe(a,o)){var u=t.interleaved;u===null?(l.next=l,fo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ou(e,t,l,r),n!==null&&(l=ae(),De(n,e,r,l),zu(n,t,r))}}function Eu(e){var t=e.alternate;return e===$||t!==null&&t===$}function Cu(e,t){_n=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Yr={readContext:Ce,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},cf={readContext:Ce,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=af.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:ks,useDebugValue:ko,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=ks(!1),t=e[0];return e=sf.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Ae();if(F){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),q===null)throw Error(y(349));_t&30||du(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ss(pu.bind(null,r,i,e),[e]),r.flags|=2048,Kn(9,fu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ae(),t=q.identifierPrefix;if(F){var n=We,r=He;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},df={readContext:Ce,useCallback:ku,useContext:Ce,useEffect:wo,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:Su,useReducer:$l,useRef:gu,useState:function(){return $l(Xn)},useDebugValue:ko,useDeferredValue:function(e){var t=ze();return ju(t,Y.memoizedState,e)},useTransition:function(){var e=$l(Xn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:Nu,unstable_isNewReconciler:!1},ff={readContext:Ce,useCallback:ku,useContext:Ce,useEffect:wo,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:Su,useReducer:Bl,useRef:gu,useState:function(){return Bl(Xn)},useDebugValue:ko,useDeferredValue:function(e){var t=ze();return Y===null?t.memoizedState=e:ju(t,Y.memoizedState,e)},useTransition:function(){var e=Bl(Xn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:Nu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ji(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ul={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(De(t,e,l,r),Nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(De(t,e,l,r),Nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ct(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(De(t,e,r,n),Nr(t,e,r))}};function js(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function _u(e,t,n){var r=!1,l=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=me(t)?Ct:oe.current,r=t.contextTypes,i=(r=r!=null)?qt(e,l):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ul,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ns(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ul.enqueueReplaceState(t,t.state,null)}function Ni(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},po(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=me(t)?Ct:oe.current,l.context=qt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ji(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ul.enqueueReplaceState(l,l.state,null),Xr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Uc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function Pu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,Oi=r),Ei(e,t)},n}function Lu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ei(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ei(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Es(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=zf.bind(null,e,t,n),t.then(e,e))}function Cs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var mf=be.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?iu(t,null,n,r):tn(t,e.child,n,r)}function _s(e,t,n,r,l){n=n.render;var i=t.ref;return bt(t,l),r=yo(e,t,n,r,i,l),n=xo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(F&&n&&io(t),t.flags|=1,se(e,t,r,l),t.child)}function Ps(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Po(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Tu(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Ye(e,t,l)}return t.flags|=1,e=dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Tu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ye(e,t,l)}return Ci(e,t,n,r,l)}function Mu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Qt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Qt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Qt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Qt,ge),ge|=r;return se(e,t,l,n),t.child}function Ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ci(e,t,n,r,l){var i=me(n)?Ct:oe.current;return i=qt(t,i),bt(t,l),n=yo(e,t,n,r,i,l),r=xo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ye(e,t,l)):(F&&r&&io(t),t.flags|=1,se(e,t,n,l),t.child)}function Ls(e,t,n,r,l){if(me(n)){var i=!0;Br(t)}else i=!1;if(bt(t,l),t.stateNode===null)zr(e,t),_u(t,n,r),Ni(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=me(n)?Ct:oe.current,d=qt(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Ns(t,o,r,d),qe=!1;var m=t.memoizedState;o.state=m,Xr(t,r,o,l),u=t.memoizedState,a!==r||m!==u||pe.current||qe?(typeof g=="function"&&(ji(t,n,g,r),u=t.memoizedState),(a=qe||js(t,n,a,r,m,u,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,su(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Le(t.type,a),o.props=d,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ce(u):(u=me(n)?Ct:oe.current,u=qt(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||m!==u)&&Ns(t,o,r,u),qe=!1,m=t.memoizedState,o.state=m,Xr(t,r,o,l);var k=t.memoizedState;a!==h||m!==k||pe.current||qe?(typeof w=="function"&&(ji(t,n,w,r),k=t.memoizedState),(d=qe||js(t,n,d,r,m,k,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return zi(e,t,n,r,i,l)}function zi(e,t,n,r,l,i){Ru(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&hs(t,n,!1),Ye(e,t,i);r=t.stateNode,mf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,a,i)):se(e,t,a,i),t.memoizedState=r.state,l&&hs(t,n,!0),t.child}function Du(e){var t=e.stateNode;t.pendingContext?ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ms(e,t.context,!1),mo(e,t.containerInfo)}function Ts(e,t,n,r,l){return en(),so(l),t.flags|=256,se(e,t,n,r),t.child}var _i={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(U,l&1),e===null)return ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=Et(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pi(n),t.memoizedState=_i,e):So(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return hf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=dt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=dt(a,i):(i=Et(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Pi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=_i,r}return i=e.child,e=i.sibling,r=dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function So(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&so(r),tn(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(y(422))),hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=Et(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Pi(o),t.memoizedState=_i,i);if(!(t.mode&1))return hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(y(419)),r=Vl(i,r,void 0),hr(e,t,o,r)}if(a=(o&e.childLanes)!==0,fe||a){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ge(e,l),De(r,e,l,-1))}return _o(),r=Vl(Error(y(421))),hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=_f.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=st(l.nextSibling),ye=t,F=!0,Me=null,e!==null&&(Se[je++]=He,Se[je++]=We,Se[je++]=zt,He=e.id,We=e.overflow,zt=t),t=So(t,r.children),t.flags|=4096,t)}function Ms(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Si(e.return,t,n)}function Hl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Iu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ms(e,n,t);else if(e.tag===19)Ms(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:Du(t),en();break;case 5:au(t);break;case 1:me(t.type)&&Br(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Ou(e,t,n):(O(U,U.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Iu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Mu(e,t,n)}return Ye(e,t,n)}var Au,Li,Fu,Uu;Au=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Li=function(){};Fu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,jt($e.current);var i=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ti(e,l),r=ti(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ri(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Mn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&I("scroll",e),i||a===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Uu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vf(e,t,n){var r=t.pendingProps;switch(oo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&$r(),le(t),null;case 3:return r=t.stateNode,nn(),A(pe),A(oe),go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Fi(Me),Me=null))),Li(e,t),le(t),null;case 5:ho(t);var l=jt(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=jt($e.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)I(Sn[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Bo(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":Ho(r,i),I("invalid",r)}ri(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),l=["children",""+a]):Mn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&I("scroll",r)}switch(n){case"input":lr(r),Vo(r,i,!0);break;case"textarea":lr(r),Wo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Vn]=r,Au(e,t,!1,!1),t.stateNode=e;e:{switch(o=li(n,r),n){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)I(Sn[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Bo(e,r),l=Jl(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),I("invalid",e);break;case"textarea":Ho(e,r),l=ti(e,r),I("invalid",e);break;default:l=r}ri(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ga(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ma(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Rn(e,u):typeof u=="number"&&Rn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&I("scroll",e):u!=null&&Qi(e,i,u,o))}switch(n){case"input":lr(e),Vo(e,r,!1);break;case"textarea":lr(e),Wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Xt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Uu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=jt(Wn.current),jt($e.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return le(t),null;case 13:if(A(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ve!==null&&t.mode&1&&!(t.flags&128))ru(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Fe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Me!==null&&(Fi(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?b===0&&(b=3):_o())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return nn(),Li(e,t),e===null&&$n(t.stateNode.containerInfo),le(t),null;case 10:return co(t.type._context),le(t),null;case 17:return me(t.type)&&$r(),le(t),null;case 19:if(A(U),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(b!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Kr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>ln&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!F)return le(t),null}else 2*K()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=U.current,O(U,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function yf(e,t){switch(oo(t),t.tag){case 1:return me(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),A(pe),A(oe),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(A(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(U),null;case 4:return nn(),null;case 10:return co(t.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var gr=!1,ie=!1,xf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ti(e,t,n){try{n()}catch(r){V(e,t,r)}}var Rs=!1;function wf(e,t){if(mi=Ir,e=Wa(),lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var w;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break t;if(m===n&&++d===l&&(a=o),m===i&&++g===r&&(u=o),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},Ir=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,M=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Le(t.type,x),M);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return k=Rs,Rs=!1,k}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ti(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $u(e){var t=e.alternate;t!==null&&(e.alternate=null,$u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Vn],delete t[yi],delete t[tf],delete t[nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var ee=null,Te=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Vu(e,t,n),n=n.sibling}function Vu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:ie||Wt(n,t);case 6:var r=ee,l=Te;ee=null,Ze(e,t,n),ee=r,Te=l,ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),An(e)):Il(ee,n.stateNode));break;case 4:r=ee,l=Te,ee=n.stateNode.containerInfo,Te=!0,Ze(e,t,n),ee=r,Te=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ti(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!ie&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Ze(e,t,n),ie=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xf),t.forEach(function(r){var l=Pf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Te=!1;break e;case 3:ee=a.stateNode.containerInfo,Te=!0;break e;case 4:ee=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(ee===null)throw Error(y(160));Vu(i,o,l),ee=null,Te=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){V(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hu(t,e),t=t.sibling}function Hu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Ie(e),r&4){try{Pn(3,e,e.return),cl(3,e)}catch(x){V(e,e.return,x)}try{Pn(5,e,e.return)}catch(x){V(e,e.return,x)}}break;case 1:Pe(t,e),Ie(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Pe(t,e),Ie(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{Rn(l,"")}catch(x){V(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&da(l,i),li(a,o);var d=li(a,i);for(o=0;o<u.length;o+=2){var g=u[o],h=u[o+1];g==="style"?ga(l,h):g==="dangerouslySetInnerHTML"?ma(l,h):g==="children"?Rn(l,h):Qi(l,g,h,d)}switch(a){case"input":ql(l,i);break;case"textarea":fa(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Xt(l,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Xt(l,!!i.multiple,i.defaultValue,!0):Xt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(x){V(e,e.return,x)}}break;case 6:if(Pe(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){V(e,e.return,x)}}break;case 3:if(Pe(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{An(t.containerInfo)}catch(x){V(e,e.return,x)}break;case 4:Pe(t,e),Ie(e);break;case 13:Pe(t,e),Ie(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Eo=K())),r&4&&Os(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||g,Pe(t,e),ie=d):Pe(t,e),Ie(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(m=S,w=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Wt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){V(r,n,x)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){As(h);continue}}w!==null?(w.return=m,S=w):As(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ha("display",o))}catch(x){V(e,e.return,x)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(x){V(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pe(t,e),Ie(e),r&4&&Os(e);break;case 21:break;default:Pe(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Rn(l,""),r.flags&=-33);var i=Ds(e);Di(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ds(e);Ri(e,a,o);break;default:throw Error(y(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e,t,n){S=e,Wu(e)}function Wu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ie;a=gr;var d=ie;if(gr=o,(ie=u)&&!d)for(S=l;S!==null;)o=S,u=o.child,o.tag===22&&o.memoizedState!==null?Fs(l):u!==null?(u.return=o,S=u):Fs(l);for(;i!==null;)S=i,Wu(i),i=i.sibling;S=l,gr=a,ie=d}Is(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Is(e)}}function Is(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ws(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ws(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&An(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ie||t.flags&512&&Mi(t)}catch(m){V(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function As(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Fs(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){V(t,l,u)}}var i=t.return;try{Mi(t)}catch(u){V(t,i,u)}break;case 5:var o=t.return;try{Mi(t)}catch(u){V(t,o,u)}}}catch(u){V(t,t.return,u)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var Sf=Math.ceil,br=be.ReactCurrentDispatcher,jo=be.ReactCurrentOwner,Ee=be.ReactCurrentBatchConfig,R=0,q=null,G=null,te=0,ge=0,Qt=ht(0),b=0,Gn=null,Pt=0,dl=0,No=0,Ln=null,de=null,Eo=0,ln=1/0,Be=null,Zr=!1,Oi=null,ut=null,vr=!1,rt=null,Jr=0,Tn=0,Ii=null,_r=-1,Pr=0;function ae(){return R&6?K():_r!==-1?_r:_r=K()}function ct(e){return e.mode&1?R&2&&te!==0?te&-te:lf.transition!==null?(Pr===0&&(Pr=_a()),Pr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Oa(e.type)),e):1}function De(e,t,n,r){if(50<Tn)throw Tn=0,Ii=null,Error(y(185));bn(e,n,r),(!(R&2)||e!==q)&&(e===q&&(!(R&2)&&(dl|=n),b===4&&tt(e,te)),he(e,r),n===1&&R===0&&!(t.mode&1)&&(ln=K()+500,sl&&gt()))}function he(e,t){var n=e.callbackNode;ld(e,t);var r=Or(e,e===q?te:0);if(r===0)n!==null&&Ko(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ko(n),t===1)e.tag===0?rf(Us.bind(null,e)):eu(Us.bind(null,e)),qd(function(){!(R&6)&&gt()}),n=null;else{switch(Pa(r)){case 1:n=bi;break;case 4:n=Ca;break;case 16:n=Dr;break;case 536870912:n=za;break;default:n=Dr}n=Ju(n,Qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qu(e,t){if(_r=-1,Pr=0,R&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Or(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var l=R;R|=2;var i=Ku();(q!==e||te!==t)&&(Be=null,ln=K()+500,Nt(e,t));do try{Ef();break}catch(a){Xu(e,a)}while(!0);uo(),br.current=i,R=l,G!==null?t=0:(q=null,te=0,t=b)}if(t!==0){if(t===2&&(l=ui(e),l!==0&&(r=l,t=Ai(e,l))),t===1)throw n=Gn,Nt(e,0),tt(e,r),he(e,K()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!jf(l)&&(t=qr(e,r),t===2&&(i=ui(e),i!==0&&(r=i,t=Ai(e,i))),t===1))throw n=Gn,Nt(e,0),tt(e,r),he(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,de,Be);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Eo+500-K(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(wt.bind(null,e,de,Be),t);break}wt(e,de,Be);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Re(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sf(r/1960))-r,10<r){e.timeoutHandle=vi(wt.bind(null,e,de,Be),r);break}wt(e,de,Be);break;case 5:wt(e,de,Be);break;default:throw Error(y(329))}}}return he(e,K()),e.callbackNode===n?Qu.bind(null,e):null}function Ai(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=qr(e,t),e!==2&&(t=de,de=n,t!==null&&Fi(t)),e}function Fi(e){de===null?de=e:de.push.apply(de,e)}function jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~No,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Us(e){if(R&6)throw Error(y(327));Zt();var t=Or(e,0);if(!(t&1))return he(e,K()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Ai(e,r))}if(n===1)throw n=Gn,Nt(e,0),tt(e,t),he(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,de,Be),he(e,K()),null}function Co(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(ln=K()+500,sl&&gt())}}function Lt(e){rt!==null&&rt.tag===0&&!(R&6)&&Zt();var t=R;R|=1;var n=Ee.transition,r=D;try{if(Ee.transition=null,D=1,e)return e()}finally{D=r,Ee.transition=n,R=t,!(R&6)&&gt()}}function zo(){ge=Qt.current,A(Qt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jd(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(oo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:nn(),A(pe),A(oe),go();break;case 5:ho(r);break;case 4:nn();break;case 13:A(U);break;case 19:A(U);break;case 10:co(r.type._context);break;case 22:case 23:zo()}n=n.return}if(q=e,G=e=dt(e.current,null),te=ge=t,b=0,Gn=null,No=dl=Pt=0,de=Ln=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function Xu(e,t){do{var n=G;try{if(uo(),Er.current=Yr,Gr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(_t=0,J=Y=$=null,_n=!1,Qn=0,jo.current=null,n===null||n.return===null){b=1,Gn=t,G=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Cs(o);if(w!==null){w.flags&=-257,zs(w,o,a,i,t),w.mode&1&&Es(i,d,t),t=w,u=d;var k=t.updateQueue;if(k===null){var x=new Set;x.add(u),t.updateQueue=x}else k.add(u);break e}else{if(!(t&1)){Es(i,d,t),_o();break e}u=Error(y(426))}}else if(F&&a.mode&1){var M=Cs(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),zs(M,o,a,i,t),so(rn(u,a));break e}}i=u=rn(u,a),b!==4&&(b=2),Ln===null?Ln=[i]:Ln.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Pu(i,u,t);xs(i,f);break e;case 1:a=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Lu(i,a,t);xs(i,v);break e}}i=i.return}while(i!==null)}Yu(n)}catch(j){t=j,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Ku(){var e=br.current;return br.current=Yr,e===null?Yr:e}function _o(){(b===0||b===3||b===2)&&(b=4),q===null||!(Pt&268435455)&&!(dl&268435455)||tt(q,te)}function qr(e,t){var n=R;R|=2;var r=Ku();(q!==e||te!==t)&&(Be=null,Nt(e,t));do try{Nf();break}catch(l){Xu(e,l)}while(!0);if(uo(),R=n,br.current=r,G!==null)throw Error(y(261));return q=null,te=0,b}function Nf(){for(;G!==null;)Gu(G)}function Ef(){for(;G!==null&&!Yc();)Gu(G)}function Gu(e){var t=Zu(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Yu(e):G=t,jo.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{b=6,G=null;return}}else if(n=vf(n,t,ge),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);b===0&&(b=5)}function wt(e,t,n){var r=D,l=Ee.transition;try{Ee.transition=null,D=1,Cf(e,t,n,r)}finally{Ee.transition=l,D=r}return null}function Cf(e,t,n,r){do Zt();while(rt!==null);if(R&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(id(e,i),e===q&&(G=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,Ju(Dr,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=D;D=1;var a=R;R|=4,jo.current=null,wf(e,n),Hu(n,e),Qd(hi),Ir=!!mi,hi=mi=null,e.current=n,kf(n),bc(),R=a,D=o,Ee.transition=i}else e.current=n;if(vr&&(vr=!1,rt=e,Jr=l),i=e.pendingLanes,i===0&&(ut=null),qc(n.stateNode),he(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=Oi,Oi=null,e;return Jr&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Ii?Tn++:(Tn=0,Ii=e):Tn=0,gt(),null}function Zt(){if(rt!==null){var e=Pa(Jr),t=Ee.transition,n=D;try{if(Ee.transition=null,D=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,Jr=0,R&6)throw Error(y(331));var l=R;for(R|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Pn(8,g,i)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var m=g.sibling,w=g.return;if($u(g),g===d){S=null;break}if(m!==null){m.return=w,S=m;break}S=w}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=c;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(j){V(a,a.return,j)}if(a===o){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(R=l,gt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{D=n,Ee.transition=t}}return!1}function $s(e,t,n){t=rn(n,t),t=Pu(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(bn(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)$s(e,e,n);else for(;t!==null;){if(t.tag===3){$s(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=Lu(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(bn(t,1,e),he(t,e));break}}t=t.return}}function zf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(b===4||b===3&&(te&130023424)===te&&500>K()-Eo?Nt(e,0):No|=n),he(e,t)}function bu(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ae();e=Ge(e,t),e!==null&&(bn(e,t,n),he(e,n))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bu(e,n)}function Pf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),bu(e,n)}var Zu;Zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,gf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,F&&t.flags&1048576&&tu(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var l=qt(t,oe.current);bt(t,n),l=yo(null,t,r,e,l,n);var i=xo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Br(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,po(t),l.updater=ul,t.stateNode=l,l._reactInternals=t,Ni(t,r,e,n),t=zi(null,t,r,!0,i,n)):(t.tag=0,F&&i&&io(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Tf(r),e=Le(r,e),l){case 0:t=Ci(null,t,r,e,n);break e;case 1:t=Ls(null,t,r,e,n);break e;case 11:t=_s(null,t,r,e,n);break e;case 14:t=Ps(null,t,r,Le(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ci(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Ls(e,t,r,l,n);case 3:e:{if(Du(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,su(e,t),Xr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(y(423)),t),t=Ts(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=Ts(e,t,r,n,l);break e}else for(ve=st(t.stateNode.containerInfo.firstChild),ye=t,F=!0,Me=null,n=iu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ye(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return au(t),e===null&&ki(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(t.flags|=32),Ru(e,t),se(e,t,o,n),t.child;case 6:return e===null&&ki(t),null;case 13:return Ou(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),_s(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(Wr,r._currentValue),r._currentValue=o,i!==null)if(Oe(i.value,o)){if(i.children===l.children&&!pe.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qe(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Si(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Si(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,bt(t,n),l=Ce(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),Ps(e,t,r,l,n);case 15:return Tu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),zr(e,t),t.tag=1,me(r)?(e=!0,Br(t)):e=!1,bt(t,n),_u(t,r,l),Ni(t,r,l,n),zi(null,t,r,!0,e,n);case 19:return Iu(e,t,n);case 22:return Mu(e,t,n)}throw Error(y(156,t.tag))};function Ju(e,t){return Ea(e,t)}function Lf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Lf(e,t,n,r)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tf(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ki)return 11;if(e===Gi)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return Et(n.children,l,i,t);case Xi:o=8,l|=8;break;case Gl:return e=Ne(12,n,t,l|2),e.elementType=Gl,e.lanes=i,e;case Yl:return e=Ne(13,n,t,l),e.elementType=Yl,e.lanes=i,e;case bl:return e=Ne(19,n,t,l),e.elementType=bl,e.lanes=i,e;case aa:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oa:o=10;break e;case sa:o=9;break e;case Ki:o=11;break e;case Gi:o=14;break e;case Je:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Et(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=aa,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Lo(e,t,n,r,l,i,o,a,u){return e=new Mf(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},po(i),e}function Rf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e){if(!e)return pt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return qa(e,n,t)}return t}function ec(e,t,n,r,l,i,o,a,u){return e=Lo(n,r,!0,e,l,i,o,a,u),e.context=qu(null),n=e.current,r=ae(),l=ct(n),i=Qe(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,bn(e,l,r),he(e,r),e}function pl(e,t,n,r){var l=t.current,i=ae(),o=ct(l);return n=qu(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(De(e,l,o,i),Nr(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function To(e,t){Bs(e,t),(e=e.alternate)&&Bs(e,t)}function Df(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}ml.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pl(e,t,null,null)};ml.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){pl(null,e,null,null)}),t[Ke]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ma();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Da(e)}};function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vs(){}function Of(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=el(o);i.call(d)}}var o=ec(t,r,e,0,null,!1,!1,"",Vs);return e._reactRootContainer=o,e[Ke]=o.current,$n(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=el(u);a.call(d)}}var u=Lo(e,0,!1,null,null,!1,!1,"",Vs);return e._reactRootContainer=u,e[Ke]=u.current,$n(e.nodeType===8?e.parentNode:e),Lt(function(){pl(t,u,n,r)}),u}function gl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=el(o);a.call(u)}}pl(t,o,e,l)}else o=Of(n,t,e,l,r);return el(o)}La=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Zi(t,n|1),he(t,K()),!(R&6)&&(ln=K()+500,gt()))}break;case 13:Lt(function(){var r=Ge(e,1);if(r!==null){var l=ae();De(r,e,1,l)}}),To(e,1)}};Ji=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ae();De(t,e,134217728,n)}To(e,134217728)}};Ta=function(e){if(e.tag===13){var t=ct(e),n=Ge(e,t);if(n!==null){var r=ae();De(n,e,t,r)}To(e,t)}};Ma=function(){return D};Ra=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};oi=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(y(90));ca(r),ql(r,l)}}}break;case"textarea":fa(e,n);break;case"select":t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}};xa=Co;wa=Lt;var If={usingClientEntryPoint:!1,Events:[Jn,Ut,ol,va,ya,Co]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Af={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ja(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(Af),Ue=yr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ro(t))throw Error(y(200));return Rf(e,t,null,n)};we.createRoot=function(e,t){if(!Ro(e))throw Error(y(299));var n=!1,r="",l=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Lo(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,$n(e.nodeType===8?e.parentNode:e),new Mo(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ja(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Lt(e)};we.hydrate=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Ro(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=tc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ec(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};we.render=function(e,t,n){if(!hl(t))throw Error(y(200));return gl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!hl(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Co;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return gl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),na.exports=we;var Ff=na.exports,Hs=Ff;Xl.createRoot=Hs.createRoot,Xl.hydrateRoot=Hs.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=H.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},u)=>H.createElement("svg",{ref:u,...$f,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:rc("lucide",l),...a},[...o.map(([d,g])=>H.createElement(d,g)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(e,t)=>{const n=H.forwardRef(({className:r,...l},i)=>H.createElement(Bf,{ref:i,iconNode:t,className:rc(`lucide-${Uf(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=W("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=W("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=W("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=W("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=W("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=W("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=W("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=W("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=W("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=W("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=W("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=W("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=W("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=W("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=W("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=W("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=W("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=W("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=W("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=W("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function lp({theme:e,toggleTheme:t,onOpenAdmin:n}){const[r,l]=H.useState(!1),i=[{label:"Home",href:"#hero"},{label:"Case Studies",href:"#projects"},{label:"About Me",href:"#about"},{label:"Education",href:"#education"},{label:"Resume",href:"#resume"},{label:"Contact",href:"#contact"}];return s.jsxs("nav",{className:"minimal-navbar",children:[s.jsxs("a",{href:"#hero",className:"brand-group",children:[s.jsx("div",{className:"brand-logo-badge",children:s.jsx("span",{children:"SL"})}),s.jsx("span",{className:"brand-title",children:"Samuel L."})]}),s.jsx("div",{className:"nav-links-desktop",children:i.map(o=>s.jsx("a",{href:o.href,className:"nav-item-link",children:o.label},o.label))}),s.jsxs("div",{className:"nav-controls",children:[s.jsx("button",{onClick:t,className:"icon-control-btn",title:e==="dark"?"Switch to warm light":"Switch to dark mode","aria-label":"Toggle visual theme",children:e==="dark"?s.jsx(rp,{size:17}):s.jsx(qf,{size:17})}),s.jsxs("button",{onClick:n,className:"admin-link-btn",title:"Admin dashboard",children:[s.jsx(ic,{size:13}),s.jsx("span",{children:"Admin"})]}),s.jsx("button",{onClick:()=>l(!r),className:"mobile-hamburger-btn","aria-label":"Toggle menu",children:r?s.jsx(ac,{size:20}):s.jsx(Jf,{size:20})})]}),r&&s.jsx("div",{className:"mobile-nav-panel",children:i.map(o=>s.jsx("a",{href:o.href,className:"mobile-item-link",onClick:()=>l(!1),children:o.label},o.label))}),s.jsx("style",{children:`
        .minimal-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0 2rem 0;
          position: relative;
        }
        .brand-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .brand-logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #18181b;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: -0.02em;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        }
        [data-theme='dark'] .brand-logo-badge {
          background: #f3f4f6;
          color: #111827;
        }
        .brand-title {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-main);
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }
        .nav-item-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }
        .nav-item-link:hover {
          color: var(--text-main);
        }
        .nav-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .icon-control-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid var(--border-subtle);
          background: transparent;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .icon-control-btn:hover {
          color: var(--text-main);
          border-color: var(--border-strong);
        }
        .admin-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .admin-link-btn:hover {
          color: var(--text-main);
          border-color: var(--border-strong);
        }
        .mobile-hamburger-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }
        .mobile-nav-panel {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-float);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          z-index: 50;
        }
        .mobile-item-link {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-main);
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
        }
        .mobile-item-link:hover {
          background: var(--bg-subtle);
        }
        @media (max-width: 860px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-hamburger-btn {
            display: block;
          }
        }
      `})]})}function ip({profile:e}){return s.jsxs("section",{id:"hero",className:"hero-editorial",children:[s.jsxs("div",{className:"hero-editorial-inner",children:[s.jsxs("h1",{className:"hero-greeting",children:[s.jsx("span",{className:"greeting-word",children:"Hi,"}),s.jsx("span",{className:"inline-avatar-frame",children:s.jsx("img",{src:"/avatar.jpg",alt:"Samuel L.",className:"inline-avatar-img",onError:t=>{t.target.style.display="none"}})}),s.jsx("span",{className:"greeting-name",children:"I'm Samuel!"})]}),s.jsxs("p",{className:"hero-narrative",children:["An aspiring full-stack developer and computer science engineering student at"," ",s.jsx("strong",{className:"text-highlight",children:"Easwari Engineering College"})," who is developing practical programming skills and software architecture foundations — now building real-world, responsive web applications that solve practical problems."]}),s.jsxs("div",{className:"hero-status-row",children:[s.jsxs("span",{className:"badge-pill",children:[s.jsx(Yf,{size:14}),s.jsx("span",{children:"B.E. Computer Science and Engineering"})]}),s.jsx("span",{className:"badge-pill",children:s.jsx("span",{children:"Engineering Student • Aspiring Developer"})}),s.jsx("span",{className:"placeholder-pill",children:s.jsx("span",{children:"[Status: Actively Seeking Internships]"})})]}),s.jsxs("div",{className:"hero-action-row",children:[s.jsx("a",{href:"#projects",className:"btn btn-dark",children:s.jsx("span",{children:"Explore Case Studies"})}),s.jsx("a",{href:"#about",className:"btn btn-outline",children:s.jsx("span",{children:"About My Journey"})}),s.jsx("a",{href:"#contact",className:"btn btn-outline",children:s.jsx("span",{children:"Get In Touch"})})]}),s.jsxs("div",{className:"hero-social-strip",children:[s.jsx("span",{className:"social-strip-label",children:"Profiles & Channels:"}),s.jsxs("a",{href:(e==null?void 0:e.github)||"https://github.com/samuel-placeholder",target:"_blank",rel:"noreferrer",className:"social-subtle-link",children:[s.jsx(lc,{size:15}),s.jsx("span",{children:"GitHub"}),s.jsx("span",{className:"placeholder-micro",children:"[Placeholder]"})]}),s.jsxs("a",{href:(e==null?void 0:e.linkedin)||"https://linkedin.com/in/samuel-placeholder",target:"_blank",rel:"noreferrer",className:"social-subtle-link",children:[s.jsx(bf,{size:15}),s.jsx("span",{children:"LinkedIn"}),s.jsx("span",{className:"placeholder-micro",children:"[Placeholder]"})]})]})]}),s.jsx("style",{children:`
        .hero-editorial {
          padding: 6.5rem 0 5rem 0;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .hero-editorial-inner {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        /* The signature headline layout from the provided image */
        .hero-greeting {
          font-size: 4.25rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          line-height: 1.1;
          margin-bottom: 2.25rem;
        }
        .inline-avatar-frame {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 18px;
          overflow: hidden;
          background: #e5e7eb;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          margin: 0 0.2rem;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .inline-avatar-frame:hover {
          transform: scale(1.06) rotate(-2deg);
        }
        .inline-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-narrative {
          font-size: 1.28rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 400;
          max-width: 660px;
        }
        .text-highlight {
          color: var(--text-main);
          font-weight: 600;
        }
        .hero-status-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.25rem;
        }
        .hero-action-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }
        .hero-social-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .social-strip-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .social-subtle-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }
        .social-subtle-link:hover {
          color: var(--text-main);
        }
        .placeholder-micro {
          font-size: 0.7rem;
          font-family: var(--font-mono);
          color: #d97706;
          background: #fef3c7;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
        }
        [data-theme='dark'] .placeholder-micro {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
        }
        @media (max-width: 768px) {
          .hero-editorial {
            padding: 3.5rem 0 3rem 0;
          }
          .hero-greeting {
            font-size: 2.75rem;
          }
          .inline-avatar-frame {
            width: 54px;
            height: 54px;
            border-radius: 14px;
          }
          .hero-narrative {
            font-size: 1.08rem;
          }
        }
      `})]})}function op({profile:e}){return s.jsxs("section",{id:"about",className:"section-wrapper about-editorial",children:[s.jsxs("div",{className:"section-header-row",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-main-title",children:"About Me"}),s.jsx("span",{className:"section-tagline",children:"Academic journey & career aspirations"})]}),s.jsx("span",{className:"badge-pill",children:"Easwari Engineering College"})]}),s.jsxs("div",{className:"about-editorial-grid",children:[s.jsxs("div",{className:"about-text-column",children:[s.jsx("h3",{className:"about-lead",children:"Engineering Student at Easwari Engineering College with a passion for software craftsmanship."}),s.jsxs("p",{className:"editorial-p",children:["I am an engineering student pursuing my ",s.jsx("strong",{children:"B.E. in Computer Science and Engineering"})," at ",s.jsx("strong",{children:"Easwari Engineering College"}),". My educational journey combines fundamental computer science principles — data structures, algorithms, database systems, and object-oriented software development — with hands-on full-stack development."]}),s.jsxs("p",{className:"editorial-p",children:["My primary career goal is to ",s.jsx("strong",{children:(e==null?void 0:e.careerGoal)||"become a skilled software developer and build real-world applications."})," I believe that the best way to master software engineering is to write clean, maintainable code, test thoroughly, and build practical projects that deliver real user value."]}),s.jsxs("div",{className:"honesty-editorial-callout",children:[s.jsx(np,{size:16,className:"callout-sparkle"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Honest Student Profile:"})," I am actively preparing for entry-level software engineering roles and internships. All credentials and contact details without confirmed data are marked as transparent placeholders."]})]})]}),s.jsxs("div",{className:"about-sidebar-column",children:[s.jsxs("div",{className:"fact-box",children:[s.jsx("span",{className:"fact-box-label",children:"Degree & Department"}),s.jsx("span",{className:"fact-box-val",children:"B.E. Computer Science and Engineering"}),s.jsx("span",{className:"fact-box-sub",children:"Easwari Engineering College"})]}),s.jsxs("div",{className:"fact-box",children:[s.jsx("span",{className:"fact-box-label",children:"Career Aspiration"}),s.jsx("span",{className:"fact-box-val",children:"Software Developer / Full-Stack Engineer"}),s.jsx("span",{className:"fact-box-sub",children:"Building real-world web applications"})]}),s.jsxs("div",{className:"fact-box",children:[s.jsx("span",{className:"fact-box-label",children:"Contact Details (Placeholders)"}),s.jsxs("div",{className:"placeholder-row",children:[s.jsx(oc,{size:13}),s.jsx("span",{className:"placeholder-pill",children:"[your-email@example.com]"})]}),s.jsxs("div",{className:"placeholder-row",style:{marginTop:"0.4rem"},children:[s.jsx(ep,{size:13}),s.jsx("span",{className:"placeholder-pill",children:"[+91-XXXXXXXXXX]"})]}),s.jsxs("div",{className:"placeholder-row",style:{marginTop:"0.4rem"},children:[s.jsx(sc,{size:13}),s.jsx("span",{className:"placeholder-pill",children:"[Chennai, Tamil Nadu, India]"})]})]})]})]}),s.jsx("style",{children:`
        .about-editorial-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 3.5rem;
          align-items: start;
        }
        .about-lead {
          font-size: 1.45rem;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }
        .editorial-p {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }
        .editorial-p strong {
          color: var(--text-main);
        }
        .honesty-editorial-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--bg-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 1.25rem;
          margin-top: 2rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .callout-sparkle {
          color: #d97706;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .about-sidebar-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .fact-box {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .fact-box-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        .fact-box-val {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .fact-box-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 0.2rem;
        }
        .placeholder-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-muted);
        }
        @media (max-width: 860px) {
          .about-editorial-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `})]})}function sp({categories:e}){const t=[{title:"Frontend Development",skills:["React.js","JavaScript (ES6+)","HTML5 & CSS3","Vite","Responsive Web Design"]},{title:"Backend & APIs",skills:["Node.js","Express.js","RESTful API Architecture","JWT Authentication","Input Validation"]},{title:"Databases & Cloud",skills:["MongoDB","Mongoose ODM","MongoDB Atlas","SQL Basics","Vercel & Render Deployment"]},{title:"Tools & Fundamentals",skills:["Git & GitHub","VS Code","Postman API Testing","Data Structures","Algorithm Design"]}],n=e&&e.length>0?e:t;return s.jsxs("section",{id:"skills",className:"section-wrapper skills-editorial",children:[s.jsxs("div",{className:"section-header-row",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-main-title",children:"Technical Capabilities"}),s.jsx("span",{className:"section-tagline",children:"Programming languages, frameworks, and developer workflows"})]}),s.jsx("span",{className:"badge-pill",children:"MERN Stack"})]}),s.jsx("div",{className:"skills-editorial-grid",children:n.map((r,l)=>s.jsxs("div",{className:"skill-group-box",children:[s.jsx("h3",{className:"skill-group-title",children:r.title}),s.jsx("div",{className:"skill-items-container",children:r.skills.map((i,o)=>{const a=typeof i=="string"?i:i.name;return s.jsxs("div",{className:"skill-pill-item",children:[s.jsx("span",{className:"bullet-dot"}),s.jsx("span",{children:a})]},o)})})]},l))}),s.jsx("style",{children:`
        .skills-editorial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .skill-group-box {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }
        .skill-group-title {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--text-main);
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .skill-items-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .skill-pill-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          flex-shrink: 0;
        }
      `})]})}function ap({educationList:e}){const t=[{institution:"Easwari Engineering College",degree:"Bachelor of Engineering in Computer Science and Engineering (B.E. CSE)",duration:"Present / Engineering Student",location:"Chennai, Tamil Nadu",marksPlaceholder:"[Academic Marks / CGPA: Editable Placeholder]",highlights:["Curriculum emphasizes Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Object-Oriented Software Engineering.","Developing practical full-stack web projects with the MERN stack (MongoDB, Express, React, Node.js).","Participating in college coding initiatives and technical symposiums."]},{institution:"[Higher Secondary School Placeholder]",degree:"Higher Secondary Certificate (HSC) - Computer Science / Mathematics",duration:"[Years: e.g. 2021 - 2023]",location:"[City / State Placeholder]",marksPlaceholder:"[Percentage: Editable Placeholder]",highlights:["Completed higher secondary education with foundation in Mathematics, Physics, and Elementary Programming concepts."]}],n=e&&e.length>0?e:t;return s.jsxs("section",{id:"education",className:"section-wrapper education-editorial",children:[s.jsxs("div",{className:"section-header-row",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-main-title",children:"Education"}),s.jsx("span",{className:"section-tagline",children:"Academic foundations & computer science coursework"})]}),s.jsx("span",{className:"badge-pill",children:"Easwari Engineering College"})]}),s.jsx("div",{className:"education-cards-list",children:n.map((r,l)=>s.jsxs("div",{className:"edu-editorial-card",children:[s.jsxs("div",{className:"edu-top-row",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"edu-institution-title",children:r.institution}),s.jsx("p",{className:"edu-degree-subtitle",children:r.degree})]}),s.jsxs("div",{className:"edu-duration-tag",children:[s.jsx(Wf,{size:13}),s.jsx("span",{children:r.duration})]})]}),s.jsxs("div",{className:"edu-meta-strip",children:[s.jsxs("span",{className:"badge-pill",children:[s.jsx(sc,{size:12}),s.jsx("span",{children:r.location||"Chennai, India"})]}),s.jsx("span",{className:"placeholder-pill",children:r.marksPlaceholder||"[Academic Marks Placeholder]"})]}),r.highlights&&r.highlights.length>0&&s.jsx("ul",{className:"edu-highlights-list",children:r.highlights.map((i,o)=>s.jsxs("li",{children:["• ",i]},o))})]},l))}),s.jsx("style",{children:`
        .education-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .edu-editorial-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .edu-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .edu-institution-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }
        .edu-degree-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 0.2rem;
        }
        .edu-duration-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          background: var(--bg-subtle);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
        }
        .edu-meta-strip {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0.85rem 0 1.25rem 0;
          flex-wrap: wrap;
        }
        .edu-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .edu-top-row {
            flex-direction: column;
          }
        }
      `})]})}function up({projects:e}){const[t,n]=H.useState("All"),r=["All","Full-Stack Web App","Algorithms & Tools","Backend & API"],l=t==="All"?e:e.filter(i=>{var o;return((o=i.category)==null?void 0:o.toLowerCase())===t.toLowerCase()});return s.jsxs("section",{id:"projects",className:"section-wrapper case-studies-editorial",children:[s.jsxs("div",{className:"section-header-row",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-main-title",children:"Case Studies & Projects"}),s.jsx("span",{className:"section-tagline",children:"Curated academic and personal engineering builds"})]}),s.jsx("div",{className:"filter-pill-strip",children:r.map(i=>s.jsx("button",{onClick:()=>n(i),className:`filter-text-btn ${t===i?"active":""}`,children:i},i))})]}),s.jsx("div",{className:"case-studies-grid",children:l.map((i,o)=>s.jsxs("article",{className:"case-study-card",children:[s.jsxs("div",{className:"case-study-media-box",children:[s.jsx("div",{className:"case-study-badge-tag",children:i.badge||i.category||"Academic Project"}),s.jsxs("div",{className:"case-study-links-overlay",children:[i.githubUrl&&s.jsx("a",{href:i.githubUrl,target:"_blank",rel:"noreferrer",className:"case-icon-btn",title:"GitHub Code Repository",children:s.jsx(lc,{size:16})}),i.liveDemoUrl&&s.jsx("a",{href:i.liveDemoUrl,target:"_blank",rel:"noreferrer",className:"case-icon-btn",title:"Live Demo",children:s.jsx(Vf,{size:17})})]})]}),s.jsxs("div",{className:"case-study-content",children:[s.jsxs("div",{className:"case-meta-top",children:[s.jsx("span",{className:"case-category-label",children:i.category}),s.jsx("span",{className:"placeholder-pill",children:"[Placeholders]"})]}),s.jsx("h3",{className:"case-study-title",children:i.title}),s.jsx("p",{className:"case-study-desc",children:i.description}),i.highlights&&i.highlights.length>0&&s.jsx("ul",{className:"case-highlights-list",children:i.highlights.map((a,u)=>s.jsxs("li",{children:["• ",a]},u))}),s.jsx("div",{className:"case-tech-strip",children:i.technologies&&i.technologies.map((a,u)=>s.jsx("span",{className:"tech-pill-micro",children:a},u))})]})]},i._id||o))}),s.jsx("style",{children:`
        .filter-pill-strip {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .filter-text-btn {
          background: transparent;
          border: 1px solid var(--border-pill);
          color: var(--text-secondary);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.84rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .filter-text-btn:hover {
          color: var(--text-main);
          border-color: var(--border-strong);
        }
        .filter-text-btn.active {
          background: var(--text-main);
          color: var(--bg-surface);
          border-color: var(--text-main);
        }
        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.25rem;
        }
        .case-study-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .case-study-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-float);
          border-color: var(--border-pill);
        }
        .case-study-media-box {
          height: 140px;
          background: linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-tag) 100%);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
        }
        .case-study-badge-tag {
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          color: var(--text-main);
          border: 1px solid var(--border-subtle);
        }
        .case-study-links-overlay {
          display: flex;
          gap: 0.45rem;
        }
        .case-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        .case-icon-btn:hover {
          background: var(--text-main);
          color: var(--bg-surface);
        }
        .case-study-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .case-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .case-category-label {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .case-study-title {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-main);
          margin-bottom: 0.65rem;
          line-height: 1.35;
        }
        .case-study-desc {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .case-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          padding: 0.75rem;
          border-radius: 10px;
          background: var(--bg-subtle);
        }
        .case-tech-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
        }
        .tech-pill-micro {
          font-size: 0.74rem;
          font-family: var(--font-mono);
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          background: var(--bg-tag);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
        }
      `})]})}function cp({profile:e}){const t=()=>{window.print()};return s.jsxs("section",{id:"resume",className:"section-wrapper resume-editorial",children:[s.jsxs("div",{className:"section-header-row",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-main-title",children:"Resume"}),s.jsx("span",{className:"section-tagline",children:"Academic summary & verified qualifications"})]}),s.jsx("div",{className:"resume-controls",children:s.jsxs("button",{onClick:t,className:"btn btn-dark",style:{padding:"0.45rem 1.1rem",fontSize:"0.86rem"},children:[s.jsx(Gf,{size:14}),s.jsx("span",{children:"Save as PDF"})]})})]}),s.jsxs("div",{className:"resume-editorial-sheet",children:[s.jsxs("div",{className:"resume-sheet-header",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"resume-sheet-name",children:(e==null?void 0:e.name)||"Samuel L."}),s.jsx("p",{className:"resume-sheet-sub",children:"Engineering Student • B.E. Computer Science and Engineering • Easwari Engineering College"}),s.jsxs("p",{className:"resume-sheet-goal",children:[s.jsx("strong",{children:"Objective:"})," ",(e==null?void 0:e.careerGoal)||"Become a skilled software developer and build real-world applications."]})]}),s.jsxs("div",{className:"resume-sheet-badges",children:[s.jsx("span",{className:"placeholder-pill",children:"[Contact: Placeholder]"}),s.jsx("span",{className:"placeholder-pill",children:"[Marks: Placeholder]"})]})]}),s.jsxs("div",{className:"resume-sheet-body",children:[s.jsxs("div",{className:"resume-section-block",children:[s.jsx("h4",{className:"resume-block-title",children:"Education"}),s.jsxs("div",{className:"resume-item-row",children:[s.jsxs("div",{className:"row-left",children:[s.jsx("strong",{children:"Easwari Engineering College"}),s.jsx("span",{className:"row-sub",children:"B.E. Computer Science and Engineering"})]}),s.jsx("span",{className:"row-date",children:"Present / Engineering Student"})]})]}),s.jsxs("div",{className:"resume-section-block",children:[s.jsx("h4",{className:"resume-block-title",children:"Technical Skills"}),s.jsxs("p",{className:"resume-tech-line",children:[s.jsx("strong",{children:"Frontend:"})," React.js, JavaScript (ES6+), HTML5, CSS3, Vite, Responsive Design"]}),s.jsxs("p",{className:"resume-tech-line",children:[s.jsx("strong",{children:"Backend & DB:"})," Node.js, Express.js, REST API Architecture, MongoDB, Mongoose, JWT"]}),s.jsxs("p",{className:"resume-tech-line",children:[s.jsx("strong",{children:"Tools & Fundamentals:"})," Git, GitHub, VS Code, Postman, Data Structures & Algorithms"]})]}),s.jsxs("div",{className:"resume-section-block",children:[s.jsx("h4",{className:"resume-block-title",children:"Key Projects"}),s.jsxs("div",{className:"resume-item-row",children:[s.jsxs("div",{className:"row-left",children:[s.jsx("strong",{children:"Student Grade & Attendance Management System"}),s.jsx("span",{className:"row-sub",children:"React.js, Node.js, Express, MongoDB"})]}),s.jsx("span",{className:"row-date",children:"Academic Project"})]}),s.jsxs("div",{className:"resume-item-row",style:{marginTop:"0.5rem"},children:[s.jsxs("div",{className:"row-left",children:[s.jsx("strong",{children:"Algorithm & Data Structure Visualizer"}),s.jsx("span",{className:"row-sub",children:"JavaScript ES6+, Vite, Canvas"})]}),s.jsx("span",{className:"row-date",children:"Core CS Project"})]})]}),s.jsxs("div",{className:"resume-section-block",children:[s.jsx("h4",{className:"resume-block-title",children:"Certifications & Experience"}),s.jsx("p",{className:"row-sub",children:"Professional work experience and formal certifications are reserved as editable placeholders to ensure honest student representation."}),s.jsx("div",{style:{marginTop:"0.5rem"},children:s.jsx("span",{className:"placeholder-pill",children:"[Certifications & Internships: Editable Placeholders]"})})]})]})]}),s.jsx("style",{children:`
        .resume-editorial-sheet {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 2.5rem;
        }
        .resume-sheet-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .resume-sheet-name {
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-main);
        }
        .resume-sheet-sub {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }
        .resume-sheet-goal {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
          max-width: 620px;
        }
        .resume-sheet-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .resume-sheet-body {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .resume-section-block {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .resume-block-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.35rem;
          margin-bottom: 0.5rem;
        }
        .resume-item-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        .row-left {
          display: flex;
          flex-direction: column;
        }
        .row-left strong {
          color: var(--text-main);
          font-size: 0.98rem;
        }
        .row-sub {
          color: var(--text-secondary);
          font-size: 0.88rem;
        }
        .row-date {
          font-size: 0.82rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .resume-tech-line {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .resume-tech-line strong {
          color: var(--text-main);
        }
        @media (max-width: 640px) {
          .resume-editorial-sheet {
            padding: 1.5rem;
          }
          .resume-item-row {
            flex-direction: column;
          }
        }
      `})]})}function dp({profile:e}){const[t,n]=H.useState({name:"",email:"",subject:"",message:""}),[r,l]=H.useState({submitting:!1,success:null,message:""}),i=a=>{n({...t,[a.target.name]:a.target.value})},o=async a=>{a.preventDefault(),l({submitting:!0,success:null,message:""});try{const u=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),d=await u.json();u.ok&&d.success?(l({submitting:!1,success:!0,message:"Thank you! Your message has been sent to Samuel."}),n({name:"",email:"",subject:"",message:""})):l({submitting:!1,success:!1,message:d.message||"Error delivering message. Please verify all fields."})}catch{l({submitting:!1,success:!1,message:"Could not connect to the backend API server."})}};return s.jsxs("section",{id:"contact",className:"section-wrapper contact-editorial",children:[s.jsxs("div",{className:"section-header-row",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-main-title",children:"Get In Touch"}),s.jsx("span",{className:"section-tagline",children:"Open for internship opportunities and student collaborations"})]}),s.jsx("span",{className:"badge-pill",children:"Response via API"})]}),s.jsxs("div",{className:"contact-editorial-layout",children:[s.jsxs("div",{className:"contact-editorial-pitch",children:[s.jsx("h3",{className:"pitch-heading",children:"Let's build something together."}),s.jsx("p",{className:"pitch-text",children:"I'm currently seeking internship opportunities, mentorship, and junior developer roles where I can contribute enthusiasm, write clean full-stack code, and continue expanding practical skills."}),s.jsxs("div",{className:"pitch-contact-info",children:[s.jsxs("div",{className:"info-line",children:[s.jsx("span",{className:"info-line-title",children:"College"}),s.jsx("span",{className:"info-line-val",children:"Easwari Engineering College"})]}),s.jsxs("div",{className:"info-line",children:[s.jsx("span",{className:"info-line-title",children:"Email"}),s.jsx("span",{className:"placeholder-pill",children:"[your-email@example.com]"})]}),s.jsxs("div",{className:"info-line",children:[s.jsx("span",{className:"info-line-title",children:"Phone"}),s.jsx("span",{className:"placeholder-pill",children:"[+91-XXXXXXXXXX]"})]})]})]}),s.jsx("div",{className:"contact-form-container",children:s.jsxs("form",{onSubmit:o,className:"editorial-form",children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Your Name"}),s.jsx("input",{type:"text",name:"name",required:!0,placeholder:"e.g. Alex Smith",value:t.name,onChange:i,className:"minimal-input"})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Your Email Address"}),s.jsx("input",{type:"email",name:"email",required:!0,placeholder:"e.g. alex@company.com",value:t.email,onChange:i,className:"minimal-input"})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Subject"}),s.jsx("input",{type:"text",name:"subject",required:!0,placeholder:"Internship opportunity / Collaboration",value:t.subject,onChange:i,className:"minimal-input"})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Message"}),s.jsx("textarea",{name:"message",rows:"4",required:!0,placeholder:"Write your note here...",value:t.message,onChange:i,className:"minimal-textarea"})]}),r.message&&s.jsxs("div",{className:`status-note ${r.success?"success":"error"}`,children:[r.success?s.jsx(Xf,{size:16}):s.jsx(Qf,{size:16}),s.jsx("span",{children:r.message})]}),s.jsx("button",{type:"submit",disabled:r.submitting,className:"btn btn-dark",style:{width:"100%",marginTop:"0.5rem"},children:r.submitting?s.jsx("span",{children:"Sending..."}):s.jsxs(s.Fragment,{children:[s.jsx(tp,{size:15}),s.jsx("span",{children:"Send Message"})]})})]})})]}),s.jsx("style",{children:`
        .contact-editorial-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .pitch-heading {
          font-size: 1.85rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-main);
          margin-bottom: 1rem;
        }
        .pitch-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .pitch-contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: var(--bg-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-card);
          border: 1px solid var(--border-subtle);
        }
        .info-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.9rem;
        }
        .info-line-title {
          font-weight: 600;
          color: var(--text-muted);
        }
        .info-line-val {
          font-weight: 500;
          color: var(--text-main);
        }
        .contact-form-container {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 2rem;
        }
        .editorial-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-field label {
          font-size: 0.82rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
        }
        .minimal-input, .minimal-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1px solid var(--border-pill);
          background: var(--bg-subtle);
          color: var(--text-main);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.15s ease;
        }
        .minimal-input:focus, .minimal-textarea:focus {
          border-color: var(--border-strong);
        }
        .status-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          padding: 0.75rem;
          border-radius: 8px;
        }
        .status-note.success {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }
        .status-note.error {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }
        [data-theme='dark'] .status-note.success {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border-color: rgba(16, 185, 129, 0.3);
        }
        [data-theme='dark'] .status-note.error {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border-color: rgba(239, 68, 68, 0.3);
        }
        @media (max-width: 860px) {
          .contact-editorial-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `})]})}function fp({profile:e}){const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsxs("footer",{className:"footer-editorial",children:[s.jsx("div",{className:"footer-editorial-divider"}),s.jsxs("div",{className:"footer-editorial-inner",children:[s.jsxs("div",{className:"footer-left",children:[s.jsx("span",{className:"footer-brand-text",children:"Samuel L."}),s.jsx("span",{className:"footer-role-text",children:"B.E. Computer Science and Engineering • Easwari Engineering College"}),s.jsxs("p",{className:"footer-copyright",children:["© ",new Date().getFullYear()," Samuel L. Honesty guaranteed: all unprovided details are kept as transparent placeholders."]})]}),s.jsxs("div",{className:"footer-right",children:[s.jsxs("div",{className:"footer-links-row",children:[s.jsx("a",{href:"#hero",children:"Home"}),s.jsx("a",{href:"#projects",children:"Case Studies"}),s.jsx("a",{href:"#about",children:"About"}),s.jsx("a",{href:"#resume",children:"Resume"}),s.jsx("a",{href:"#contact",children:"Contact"})]}),s.jsxs("button",{onClick:t,className:"btn-top",title:"Back to top",children:[s.jsx("span",{children:"Back to top"}),s.jsx(Hf,{size:14})]})]})]}),s.jsx("style",{children:`
        .footer-editorial {
          margin-top: 5rem;
          padding-top: 2rem;
        }
        .footer-editorial-divider {
          width: 100%;
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 2rem;
        }
        .footer-editorial-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .footer-brand-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }
        .footer-role-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .footer-copyright {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }
        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.25rem;
        }
        .footer-links-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-links-row a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }
        .footer-links-row a:hover {
          color: var(--text-main);
        }
        .btn-top {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: transparent;
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          color: var(--text-secondary);
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-top:hover {
          color: var(--text-main);
          border-color: var(--border-strong);
        }
        @media (max-width: 640px) {
          .footer-editorial-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-right {
            align-items: flex-start;
          }
        }
      `})]})}function pp({isOpen:e,onClose:t}){const[n,r]=H.useState({username:"admin",password:""}),[l,i]=H.useState(localStorage.getItem("portfolio_admin_token")||""),[o,a]=H.useState([]),[u,d]=H.useState(!1),[g,h]=H.useState("");if(!e)return null;const m=async x=>{x.preventDefault(),d(!0),h("");try{const M=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),f=await M.json();M.ok&&f.success?(i(f.token),localStorage.setItem("portfolio_admin_token",f.token),w(f.token)):h(f.message||"Login failed. Invalid credentials.")}catch{h("Connection failed. Please ensure the backend is running on port 5000.")}finally{d(!1)}},w=async x=>{d(!0);try{const M=await fetch("/api/admin/messages",{headers:{Authorization:`Bearer ${x}`}}),f=await M.json();M.ok&&f.success?a(f.data||[]):h(f.message||"Failed to fetch messages.")}catch{h("Error retrieving messages from backend.")}finally{d(!1)}},k=()=>{i(""),localStorage.removeItem("portfolio_admin_token"),a([])};return s.jsxs("div",{className:"admin-modal-overlay",children:[s.jsxs("div",{className:"glass-card admin-modal-card",children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-box",children:[s.jsx(ic,{size:18,className:"modal-lock-icon"}),s.jsx("h3",{children:"Portfolio Admin & Message Dashboard"})]}),s.jsx("button",{onClick:t,className:"modal-close-btn",children:s.jsx(ac,{size:20})})]}),s.jsx("div",{className:"modal-body",children:l?s.jsxs("div",{className:"admin-inbox-view",children:[s.jsxs("div",{className:"inbox-controls",children:[s.jsxs("span",{className:"inbox-count",children:[o.length," Contact Inquiries Received"]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[s.jsx("button",{onClick:()=>w(l),className:"btn btn-secondary",style:{padding:"0.4rem 0.8rem",fontSize:"0.82rem"},children:"Refresh"}),s.jsxs("button",{onClick:k,className:"btn btn-secondary",style:{padding:"0.4rem 0.8rem",fontSize:"0.82rem"},children:[s.jsx(Zf,{size:14}),s.jsx("span",{children:"Logout"})]})]})]}),u&&s.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:s.jsx(Ws,{size:24,className:"spinner"})}),!u&&o.length===0&&s.jsxs("div",{className:"no-messages-box",children:[s.jsx(oc,{size:32,style:{color:"var(--text-muted)",marginBottom:"0.5rem"}}),s.jsx("p",{children:"No messages submitted yet. Submit a message via the Contact section to test the live backend."})]}),s.jsx("div",{className:"messages-stream",children:o.map((x,M)=>s.jsxs("div",{className:"message-item-card",children:[s.jsxs("div",{className:"msg-header",children:[s.jsxs("div",{children:[s.jsx("strong",{className:"msg-sender",children:x.name})," ",s.jsxs("span",{className:"msg-email",children:["<",x.email,">"]})]}),s.jsxs("span",{className:"msg-time",children:[s.jsx(Kf,{size:12}),new Date(x.createdAt).toLocaleDateString()," ",new Date(x.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]}),s.jsxs("div",{className:"msg-subject",children:[s.jsx("strong",{children:"Subject:"})," ",x.subject]}),s.jsx("p",{className:"msg-content",children:x.message})]},x._id||M))})]}):s.jsxs("form",{onSubmit:m,className:"admin-login-form",children:[s.jsx("p",{className:"login-desc",children:"Log in to securely review contact form inquiries sent to Samuel L."}),s.jsxs("div",{className:"credentials-tip",children:[s.jsx("strong",{children:"Default Local Credentials:"}),s.jsxs("div",{children:["Username: ",s.jsx("code",{children:"admin"})]}),s.jsxs("div",{children:["Password: ",s.jsx("code",{children:"Admin@1234"})]})]}),g&&s.jsx("div",{className:"admin-error-box",children:g}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Admin Username"}),s.jsx("input",{type:"text",value:n.username,onChange:x=>r({...n,username:x.target.value}),required:!0,className:"form-input"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Password"}),s.jsx("input",{type:"password",placeholder:"Enter admin password...",value:n.password,onChange:x=>r({...n,password:x.target.value}),required:!0,className:"form-input"})]}),s.jsx("button",{type:"submit",disabled:u,className:"btn btn-primary",style:{width:"100%",marginTop:"0.5rem"},children:u?s.jsx(Ws,{size:16,className:"spinner"}):"Authenticate Admin"})]})})]}),s.jsx("style",{children:`
        .admin-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .admin-modal-card {
          width: 100%;
          max-width: 650px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-hover);
          overflow: hidden;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }
        .modal-title-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .modal-lock-icon {
          color: var(--accent-cyan);
        }
        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        .modal-close-btn:hover {
          color: var(--text-primary);
        }
        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
        }
        .admin-login-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .login-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .credentials-tip {
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #bae6fd;
        }
        .credentials-tip code {
          background: rgba(0, 0, 0, 0.3);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          color: #facc15;
        }
        .admin-error-box {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          padding: 0.7rem;
          border-radius: 8px;
          font-size: 0.88rem;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .inbox-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
        }
        .inbox-count {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }
        .no-messages-box {
          text-align: center;
          padding: 2.5rem 1rem;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .messages-stream {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .message-item-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          padding: 1.1rem;
        }
        .msg-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .msg-sender {
          color: var(--text-primary);
        }
        .msg-email {
          color: var(--text-muted);
          font-size: 0.82rem;
          font-family: var(--font-mono);
        }
        .msg-time {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .msg-subject {
          font-size: 0.88rem;
          color: var(--accent-cyan);
          margin-bottom: 0.5rem;
        }
        .msg-content {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          white-space: pre-wrap;
        }
      `})]})}function mp(){const[e,t]=H.useState("light"),[n,r]=H.useState(null),[l,i]=H.useState([]),[o,a]=H.useState(!1),u=()=>{const d=e==="light"?"dark":"light";t(d),document.documentElement.setAttribute("data-theme",d)};return H.useEffect(()=>{document.documentElement.setAttribute("data-theme","light"),(async()=>{try{const[g,h]=await Promise.all([fetch("/api/profile"),fetch("/api/projects")]);if(g.ok){const m=await g.json();m.success&&r(m.data)}if(h.ok){const m=await h.json();m.success&&i(m.data)}}catch(g){console.warn("API fetch warning:",g)}})()},[]),s.jsxs("div",{className:"app-frame",children:[s.jsxs("div",{className:"surface-canvas",children:[s.jsx(lp,{theme:e,toggleTheme:u,onOpenAdmin:()=>a(!0)}),s.jsxs("main",{children:[s.jsx(ip,{profile:n}),s.jsx(up,{projects:l}),s.jsx(op,{profile:n}),s.jsx(sp,{categories:n==null?void 0:n.skillCategories}),s.jsx(ap,{educationList:n==null?void 0:n.education}),s.jsx(cp,{profile:n}),s.jsx(dp,{profile:n})]}),s.jsx(fp,{profile:n})]}),s.jsx(pp,{isOpen:o,onClose:()=>a(!1)})]})}Xl.createRoot(document.getElementById("root")).render(s.jsx(Cc.StrictMode,{children:s.jsx(mp,{})}));
