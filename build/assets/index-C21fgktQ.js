(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Cu={exports:{}},Uo={},Ru={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function bv(){if(Gp)return ht;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function _(F,X,Ee){this.props=F,this.context=X,this.refs=b,this.updater=Ee||S}_.prototype.isReactComponent={},_.prototype.setState=function(F,X){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,X,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function g(){}g.prototype=_.prototype;function L(F,X,Ee){this.props=F,this.context=X,this.refs=b,this.updater=Ee||S}var D=L.prototype=new g;D.constructor=L,w(D,_.prototype),D.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function Y(F,X,Ee){var Re,Ge={},te=null,ue=null;if(X!=null)for(Re in X.ref!==void 0&&(ue=X.ref),X.key!==void 0&&(te=""+X.key),X)U.call(X,Re)&&!k.hasOwnProperty(Re)&&(Ge[Re]=X[Re]);var Se=arguments.length-2;if(Se===1)Ge.children=Ee;else if(1<Se){for(var Be=Array(Se),Ue=0;Ue<Se;Ue++)Be[Ue]=arguments[Ue+2];Ge.children=Be}if(F&&F.defaultProps)for(Re in Se=F.defaultProps,Se)Ge[Re]===void 0&&(Ge[Re]=Se[Re]);return{$$typeof:s,type:F,key:te,ref:ue,props:Ge,_owner:O.current}}function C(F,X){return{$$typeof:s,type:F.type,key:X,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function V(F){var X={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ee){return X[Ee]})}var se=/\/+/g;function ee(F,X){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):X.toString(36)}function de(F,X,Ee,Re,Ge){var te=typeof F;(te==="undefined"||te==="boolean")&&(F=null);var ue=!1;if(F===null)ue=!0;else switch(te){case"string":case"number":ue=!0;break;case"object":switch(F.$$typeof){case s:case e:ue=!0}}if(ue)return ue=F,Ge=Ge(ue),F=Re===""?"."+ee(ue,0):Re,P(Ge)?(Ee="",F!=null&&(Ee=F.replace(se,"$&/")+"/"),de(Ge,X,Ee,"",function(Ue){return Ue})):Ge!=null&&(R(Ge)&&(Ge=C(Ge,Ee+(!Ge.key||ue&&ue.key===Ge.key?"":(""+Ge.key).replace(se,"$&/")+"/")+F)),X.push(Ge)),1;if(ue=0,Re=Re===""?".":Re+":",P(F))for(var Se=0;Se<F.length;Se++){te=F[Se];var Be=Re+ee(te,Se);ue+=de(te,X,Ee,Be,Ge)}else if(Be=y(F),typeof Be=="function")for(F=Be.call(F),Se=0;!(te=F.next()).done;)te=te.value,Be=Re+ee(te,Se++),ue+=de(te,X,Ee,Be,Ge);else if(te==="object")throw X=String(F),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return ue}function ce(F,X,Ee){if(F==null)return F;var Re=[],Ge=0;return de(F,Re,"","",function(te){return X.call(Ee,te,Ge++)}),Re}function ae(F){if(F._status===-1){var X=F._result;X=X(),X.then(function(Ee){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ee)},function(Ee){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ee)}),F._status===-1&&(F._status=0,F._result=X)}if(F._status===1)return F._result.default;throw F._result}var $={current:null},q={transition:null},fe={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:q,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ce,forEach:function(F,X,Ee){ce(F,function(){X.apply(this,arguments)},Ee)},count:function(F){var X=0;return ce(F,function(){X++}),X},toArray:function(F){return ce(F,function(X){return X})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ht.Component=_,ht.Fragment=n,ht.Profiler=a,ht.PureComponent=L,ht.StrictMode=r,ht.Suspense=m,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,ht.act=re,ht.cloneElement=function(F,X,Ee){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Re=w({},F.props),Ge=F.key,te=F.ref,ue=F._owner;if(X!=null){if(X.ref!==void 0&&(te=X.ref,ue=O.current),X.key!==void 0&&(Ge=""+X.key),F.type&&F.type.defaultProps)var Se=F.type.defaultProps;for(Be in X)U.call(X,Be)&&!k.hasOwnProperty(Be)&&(Re[Be]=X[Be]===void 0&&Se!==void 0?Se[Be]:X[Be])}var Be=arguments.length-2;if(Be===1)Re.children=Ee;else if(1<Be){Se=Array(Be);for(var Ue=0;Ue<Be;Ue++)Se[Ue]=arguments[Ue+2];Re.children=Se}return{$$typeof:s,type:F.type,key:Ge,ref:te,props:Re,_owner:ue}},ht.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},ht.createElement=Y,ht.createFactory=function(F){var X=Y.bind(null,F);return X.type=F,X},ht.createRef=function(){return{current:null}},ht.forwardRef=function(F){return{$$typeof:f,render:F}},ht.isValidElement=R,ht.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:ae}},ht.memo=function(F,X){return{$$typeof:h,type:F,compare:X===void 0?null:X}},ht.startTransition=function(F){var X=q.transition;q.transition={};try{F()}finally{q.transition=X}},ht.unstable_act=re,ht.useCallback=function(F,X){return $.current.useCallback(F,X)},ht.useContext=function(F){return $.current.useContext(F)},ht.useDebugValue=function(){},ht.useDeferredValue=function(F){return $.current.useDeferredValue(F)},ht.useEffect=function(F,X){return $.current.useEffect(F,X)},ht.useId=function(){return $.current.useId()},ht.useImperativeHandle=function(F,X,Ee){return $.current.useImperativeHandle(F,X,Ee)},ht.useInsertionEffect=function(F,X){return $.current.useInsertionEffect(F,X)},ht.useLayoutEffect=function(F,X){return $.current.useLayoutEffect(F,X)},ht.useMemo=function(F,X){return $.current.useMemo(F,X)},ht.useReducer=function(F,X,Ee){return $.current.useReducer(F,X,Ee)},ht.useRef=function(F){return $.current.useRef(F)},ht.useState=function(F){return $.current.useState(F)},ht.useSyncExternalStore=function(F,X,Ee){return $.current.useSyncExternalStore(F,X,Ee)},ht.useTransition=function(){return $.current.useTransition()},ht.version="18.3.1",ht}var Wp;function uf(){return Wp||(Wp=1,Ru.exports=bv()),Ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Av(){if(jp)return Uo;jp=1;var s=uf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,h){var x,v={},y=null,S=null;h!==void 0&&(y=""+h),m.key!==void 0&&(y=""+m.key),m.ref!==void 0&&(S=m.ref);for(x in m)r.call(m,x)&&!l.hasOwnProperty(x)&&(v[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)v[x]===void 0&&(v[x]=m[x]);return{$$typeof:e,type:f,key:y,ref:S,props:v,_owner:a.current}}return Uo.Fragment=n,Uo.jsx=u,Uo.jsxs=u,Uo}var Xp;function Cv(){return Xp||(Xp=1,Cu.exports=Av()),Cu.exports}var T=Cv(),ol={},Pu={exports:{}},Fn={},Nu={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Rv(){return qp||(qp=1,(function(s){function e(q,fe){var re=q.length;q.push(fe);e:for(;0<re;){var F=re-1>>>1,X=q[F];if(0<a(X,fe))q[F]=fe,q[re]=X,re=F;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var fe=q[0],re=q.pop();if(re!==fe){q[0]=re;e:for(var F=0,X=q.length,Ee=X>>>1;F<Ee;){var Re=2*(F+1)-1,Ge=q[Re],te=Re+1,ue=q[te];if(0>a(Ge,re))te<X&&0>a(ue,Ge)?(q[F]=ue,q[te]=re,F=te):(q[F]=Ge,q[Re]=re,F=Re);else if(te<X&&0>a(ue,re))q[F]=ue,q[te]=re,F=te;else break e}}return fe}function a(q,fe){var re=q.sortIndex-fe.sortIndex;return re!==0?re:q.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],h=[],x=1,v=null,y=3,S=!1,w=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(q){for(var fe=n(h);fe!==null;){if(fe.callback===null)r(h);else if(fe.startTime<=q)r(h),fe.sortIndex=fe.expirationTime,e(m,fe);else break;fe=n(h)}}function P(q){if(b=!1,D(q),!w)if(n(m)!==null)w=!0,ae(U);else{var fe=n(h);fe!==null&&$(P,fe.startTime-q)}}function U(q,fe){w=!1,b&&(b=!1,g(Y),Y=-1),S=!0;var re=y;try{for(D(fe),v=n(m);v!==null&&(!(v.expirationTime>fe)||q&&!V());){var F=v.callback;if(typeof F=="function"){v.callback=null,y=v.priorityLevel;var X=F(v.expirationTime<=fe);fe=s.unstable_now(),typeof X=="function"?v.callback=X:v===n(m)&&r(m),D(fe)}else r(m);v=n(m)}if(v!==null)var Ee=!0;else{var Re=n(h);Re!==null&&$(P,Re.startTime-fe),Ee=!1}return Ee}finally{v=null,y=re,S=!1}}var O=!1,k=null,Y=-1,C=5,R=-1;function V(){return!(s.unstable_now()-R<C)}function se(){if(k!==null){var q=s.unstable_now();R=q;var fe=!0;try{fe=k(!0,q)}finally{fe?ee():(O=!1,k=null)}}else O=!1}var ee;if(typeof L=="function")ee=function(){L(se)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ce=de.port2;de.port1.onmessage=se,ee=function(){ce.postMessage(null)}}else ee=function(){_(se,0)};function ae(q){k=q,O||(O=!0,ee())}function $(q,fe){Y=_(function(){q(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ae(U))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(q){switch(y){case 1:case 2:case 3:var fe=3;break;default:fe=y}var re=y;y=fe;try{return q()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,fe){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var re=y;y=q;try{return fe()}finally{y=re}},s.unstable_scheduleCallback=function(q,fe,re){var F=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,q){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=re+X,q={id:x++,callback:fe,priorityLevel:q,startTime:re,expirationTime:X,sortIndex:-1},re>F?(q.sortIndex=re,e(h,q),n(m)===null&&q===n(h)&&(b?(g(Y),Y=-1):b=!0,$(P,re-F))):(q.sortIndex=X,e(m,q),w||S||(w=!0,ae(U))),q},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(q){var fe=y;return function(){var re=y;y=fe;try{return q.apply(this,arguments)}finally{y=re}}}})(Lu)),Lu}var Yp;function Pv(){return Yp||(Yp=1,Nu.exports=Rv()),Nu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Nv(){if($p)return Fn;$p=1;var s=uf(),e=Pv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(t){return m.call(v,t)?!0:m.call(x,t)?!1:h.test(t)?v[t]=!0:(x[t]=!0,!1)}function S(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,c){if(i===null||typeof i>"u"||S(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,c,d,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,L);_[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,L);_[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,L);_[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,c){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,c)&&(o=null),c||d===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),q=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,F;function X(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Ee=!1;function Re(t,i){if(!t||Ee)return"";Ee=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){c=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}t()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),p=c.stack.split(`
`),E=d.length-1,I=p.length-1;1<=E&&0<=I&&d[E]!==p[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==p[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==p[I]){var B=`
`+d[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=I);break}}}finally{Ee=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?X(t):""}function Ge(t){switch(t.tag){case 5:return X(t.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return t=Re(t.type,!1),t;case 11:return t=Re(t.type.render,!1),t;case 1:return t=Re(t.type,!0),t;default:return""}}function te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case O:return"Portal";case C:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case se:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:te(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return te(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(t){var i=Be(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=Ue(t))}function $t(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Be(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _t(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Pt(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Se(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function Vt(t,i){lt(t,i);var o=Se(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ht(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ht(t,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function z(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ht(t,i,o){(i!=="number"||ft(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var gt=Array.isArray;function yt(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Se(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Xe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function N(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(gt(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Se(o)}}function M(t,i){var o=Se(i.value),c=Se(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function W(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var le,$e=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Te(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(t){nt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ze[i]=ze[t]})});function ye(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ze.hasOwnProperty(t)&&ze[t]?(""+i).trim():i+"px"}function Pe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=ye(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var We=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(We[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var at=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,Me=null,De=null;function xe(t){if(t=yo(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Sa(i),Le(t.stateNode,t.type,i))}}function pe(t){Me?De?De.push(t):De=[t]:Me=t}function Ce(){if(Me){var t=Me,i=De;if(De=Me=null,xe(t),i)for(t=0;t<i.length;t++)xe(i[t])}}function it(t,i){return t(i)}function Dt(){}var St=!1;function zn(t,i,o){if(St)return t(i,o);St=!0;try{return it(t,i,o)}finally{St=!1,(Me!==null||De!==null)&&(Dt(),Ce())}}function wn(t,i){var o=t.stateNode;if(o===null)return null;var c=Sa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qs=!1;if(f)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Qs=!1}function Js(t,i,o,c,d,p,E,I,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(ve){this.onError(ve)}}var Cr=!1,Rr=null,Pr=!1,si=null,eo={onError:function(t){Cr=!0,Rr=t}};function ea(t,i,o,c,d,p,E,I,B){Cr=!1,Rr=null,Js.apply(eo,arguments)}function ta(t,i,o,c,d,p,E,I,B){if(ea.apply(this,arguments),Cr){if(Cr){var ie=Rr;Cr=!1,Rr=null}else throw Error(n(198));Pr||(Pr=!0,si=ie)}}function $n(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function to(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Nr(t){if($n(t)!==t)throw Error(n(188))}function na(t){var i=t.alternate;if(!i){if(i=$n(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return Nr(d),t;if(p===c)return Nr(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=p;else{for(var E=!1,I=d.child;I;){if(I===o){E=!0,o=d,c=p;break}if(I===c){E=!0,c=d,o=p;break}I=I.sibling}if(!E){for(I=p.child;I;){if(I===o){E=!0,o=p,c=d;break}if(I===c){E=!0,c=p,o=d;break}I=I.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function no(t){return t=na(t),t!==null?ia(t):null}function ia(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ia(t);if(i!==null)return i;t=t.sibling}return null}var ra=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Zl=e.unstable_shouldYield,Ql=e.unstable_requestPaint,Wt=e.unstable_now,A=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,oe=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,Z=e.unstable_LowPriority,Ne=e.unstable_IdlePriority,Fe=null,be=null;function He(t){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:ut,tt=Math.log,Ze=Math.LN2;function ut(t){return t>>>=0,t===0?32:31-(tt(t)/Ze|0)|0}var Mt=64,Ft=4194304;function Ut(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tt(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,E=o&268435455;if(E!==0){var I=E&~d;I!==0?c=Ut(I):(p&=E,p!==0&&(c=Ut(p)))}else E=o&~d,E!==0?c=Ut(E):p!==0&&(c=Ut(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-ke(i),d=1<<o,c|=t[o],i&=~d;return c}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-ke(p),I=1<<E,B=d[E];B===-1?((I&o)===0||(I&c)!==0)&&(d[E]=Qe(I,i)):B<=i&&(t.expiredLanes|=I),p&=~I}}function vt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mn(){var t=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),t}function vi(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Jt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ke(i),t[i]=o}function Lr(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-ke(o),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~p}}function Nt(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-ke(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var ot=0;function Tn(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sn,on,is,xi,Tf,Jl=!1,oa=[],er=null,tr=null,nr=null,io=new Map,ro=new Map,ir=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(t,i){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(t,i,o,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=yo(i),i!==null&&on(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function $0(t,i,o,c,d){switch(i){case"focusin":return er=so(er,t,i,o,c,d),!0;case"dragenter":return tr=so(tr,t,i,o,c,d),!0;case"mouseover":return nr=so(nr,t,i,o,c,d),!0;case"pointerover":var p=d.pointerId;return io.set(p,so(io.get(p)||null,t,i,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ro.set(p,so(ro.get(p)||null,t,i,o,c,d)),!0}return!1}function Af(t){var i=Dr(t.target);if(i!==null){var o=$n(i);if(o!==null){if(i=o.tag,i===13){if(i=to(o),i!==null){t.blockedOn=i,Tf(t.priority,function(){is(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function aa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=tc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);at=c,o.target.dispatchEvent(c),at=null}else return i=yo(o),i!==null&&on(i),t.blockedOn=o,!1;i.shift()}return!0}function Cf(t,i,o){aa(t)&&o.delete(i)}function K0(){Jl=!1,er!==null&&aa(er)&&(er=null),tr!==null&&aa(tr)&&(tr=null),nr!==null&&aa(nr)&&(nr=null),io.forEach(Cf),ro.forEach(Cf)}function oo(t,i){t.blockedOn===i&&(t.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,K0)))}function ao(t){function i(d){return oo(d,t)}if(0<oa.length){oo(oa[0],t);for(var o=1;o<oa.length;o++){var c=oa[o];c.blockedOn===t&&(c.blockedOn=null)}}for(er!==null&&oo(er,t),tr!==null&&oo(tr,t),nr!==null&&oo(nr,t),io.forEach(i),ro.forEach(i),o=0;o<ir.length;o++)c=ir[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<ir.length&&(o=ir[0],o.blockedOn===null);)Af(o),o.blockedOn===null&&ir.shift()}var rs=P.ReactCurrentBatchConfig,la=!0;function Z0(t,i,o,c){var d=ot,p=rs.transition;rs.transition=null;try{ot=1,ec(t,i,o,c)}finally{ot=d,rs.transition=p}}function Q0(t,i,o,c){var d=ot,p=rs.transition;rs.transition=null;try{ot=4,ec(t,i,o,c)}finally{ot=d,rs.transition=p}}function ec(t,i,o,c){if(la){var d=tc(t,i,o,c);if(d===null)xc(t,i,c,ca,o),bf(t,c);else if($0(d,t,i,o,c))c.stopPropagation();else if(bf(t,c),i&4&&-1<Y0.indexOf(t)){for(;d!==null;){var p=yo(d);if(p!==null&&sn(p),p=tc(t,i,o,c),p===null&&xc(t,i,c,ca,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else xc(t,i,c,null,o)}}var ca=null;function tc(t,i,o,c){if(ca=null,t=H(c),t=Dr(t),t!==null)if(i=$n(t),i===null)t=null;else if(o=i.tag,o===13){if(t=to(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ca=t,null}function Rf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A()){case j:return 1;case oe:return 4;case ne:case Z:return 16;case Ne:return 536870912;default:return 16}default:return 16}}var rr=null,nc=null,ua=null;function Pf(){if(ua)return ua;var t,i=nc,o=i.length,c,d="value"in rr?rr.value:rr.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var E=o-t;for(c=1;c<=E&&i[o-c]===d[p-c];c++);return ua=d.slice(t,1<c?1-c:void 0)}function da(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function Nf(){return!1}function Vn(t){function i(o,c,d,p,E){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?fa:Nf,this.isPropagationStopped=Nf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Vn(ss),lo=re({},ss,{view:0,detail:0}),J0=Vn(lo),rc,sc,co,ha=re({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(rc=t.screenX-co.screenX,sc=t.screenY-co.screenY):sc=rc=0,co=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),Lf=Vn(ha),eg=re({},ha,{dataTransfer:0}),tg=Vn(eg),ng=re({},lo,{relatedTarget:0}),oc=Vn(ng),ig=re({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Vn(ig),sg=re({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=Vn(sg),ag=re({},ss,{data:0}),Df=Vn(ag),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ug[t])?!!i[t]:!1}function ac(){return dg}var fg=re({},lo,{key:function(t){if(t.key){var i=lg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hg=Vn(fg),pg=re({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Vn(pg),mg=re({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),gg=Vn(mg),vg=re({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Vn(vg),_g=re({},ha,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Vn(_g),Sg=[9,13,27,32],lc=f&&"CompositionEvent"in window,uo=null;f&&"documentMode"in document&&(uo=document.documentMode);var Mg=f&&"TextEvent"in window&&!uo,Uf=f&&(!lc||uo&&8<uo&&11>=uo),Ff=" ",Of=!1;function kf(t,i){switch(t){case"keyup":return Sg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function Eg(t,i){switch(t){case"compositionend":return Bf(i);case"keypress":return i.which!==32?null:(Of=!0,Ff);case"textInput":return t=i.data,t===Ff&&Of?null:t;default:return null}}function wg(t,i){if(os)return t==="compositionend"||!lc&&kf(t,i)?(t=Pf(),ua=nc=rr=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Uf&&i.locale!=="ko"?null:i.data;default:return null}}var Tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Tg[t.type]:i==="textarea"}function Vf(t,i,o,c){pe(c),i=xa(i,"onChange"),0<i.length&&(o=new ic("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var fo=null,ho=null;function bg(t){sh(t,0)}function pa(t){var i=ds(t);if($t(i))return t}function Ag(t,i){if(t==="change")return i}var Hf=!1;if(f){var cc;if(f){var uc="oninput"in document;if(!uc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),uc=typeof Gf.oninput=="function"}cc=uc}else cc=!1;Hf=cc&&(!document.documentMode||9<document.documentMode)}function Wf(){fo&&(fo.detachEvent("onpropertychange",jf),ho=fo=null)}function jf(t){if(t.propertyName==="value"&&pa(ho)){var i=[];Vf(i,ho,t,H(t)),zn(bg,i)}}function Cg(t,i,o){t==="focusin"?(Wf(),fo=i,ho=o,fo.attachEvent("onpropertychange",jf)):t==="focusout"&&Wf()}function Rg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pa(ho)}function Pg(t,i){if(t==="click")return pa(i)}function Ng(t,i){if(t==="input"||t==="change")return pa(i)}function Lg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:Lg;function po(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!m.call(i,d)||!oi(t[d],i[d]))return!1}return!0}function Xf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qf(t,i){var o=Xf(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xf(o)}}function Yf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Yf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $f(){for(var t=window,i=ft();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ft(t.document)}return i}function dc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Dg(t){var i=$f(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Yf(o.ownerDocument.documentElement,o)){if(c!==null&&dc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=qf(o,p);var E=qf(o,c);d&&E&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ig=f&&"documentMode"in document&&11>=document.documentMode,as=null,fc=null,mo=null,hc=!1;function Kf(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hc||as==null||as!==ft(c)||(c=as,"selectionStart"in c&&dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),mo&&po(mo,c)||(mo=c,c=xa(fc,"onSelect"),0<c.length&&(i=new ic("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=as)))}function ma(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ls={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},pc={},Zf={};f&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ga(t){if(pc[t])return pc[t];if(!ls[t])return t;var i=ls[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Zf)return pc[t]=i[o];return t}var Qf=ga("animationend"),Jf=ga("animationiteration"),eh=ga("animationstart"),th=ga("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,i){nh.set(t,i),l(i,[t])}for(var mc=0;mc<ih.length;mc++){var gc=ih[mc],Ug=gc.toLowerCase(),Fg=gc[0].toUpperCase()+gc.slice(1);sr(Ug,"on"+Fg)}sr(Qf,"onAnimationEnd"),sr(Jf,"onAnimationIteration"),sr(eh,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(th,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function rh(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,ta(c,i,void 0,t),t.currentTarget=null}function sh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var E=c.length-1;0<=E;E--){var I=c[E],B=I.instance,ie=I.currentTarget;if(I=I.listener,B!==p&&d.isPropagationStopped())break e;rh(d,I,ie),p=B}else for(E=0;E<c.length;E++){if(I=c[E],B=I.instance,ie=I.currentTarget,I=I.listener,B!==p&&d.isPropagationStopped())break e;rh(d,I,ie),p=B}}}if(Pr)throw t=si,Pr=!1,si=null,t}function Bt(t,i){var o=i[wc];o===void 0&&(o=i[wc]=new Set);var c=t+"__bubble";o.has(c)||(oh(i,t,2,!1),o.add(c))}function vc(t,i,o){var c=0;i&&(c|=4),oh(o,t,c,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[va]){t[va]=!0,r.forEach(function(o){o!=="selectionchange"&&(Og.has(o)||vc(o,!1,t),vc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[va]||(i[va]=!0,vc("selectionchange",!1,i))}}function oh(t,i,o,c){switch(Rf(i)){case 1:var d=Z0;break;case 4:d=Q0;break;default:d=ec}o=d.bind(null,i,o,t),d=void 0,!Qs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function xc(t,i,o,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;E=E.return}for(;I!==null;){if(E=Dr(I),E===null)return;if(B=E.tag,B===5||B===6){c=p=E;continue e}I=I.parentNode}}c=c.return}zn(function(){var ie=p,ve=H(o),_e=[];e:{var ge=nh.get(t);if(ge!==void 0){var Oe=ic,je=t;switch(t){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":Oe=hg;break;case"focusin":je="focus",Oe=oc;break;case"focusout":je="blur",Oe=oc;break;case"beforeblur":case"afterblur":Oe=oc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=gg;break;case Qf:case Jf:case eh:Oe=rg;break;case th:Oe=xg;break;case"scroll":Oe=J0;break;case"wheel":Oe=yg;break;case"copy":case"cut":case"paste":Oe=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=If}var Ye=(i&4)!==0,Kt=!Ye&&t==="scroll",K=Ye?ge!==null?ge+"Capture":null:ge;Ye=[];for(var G=ie,J;G!==null;){J=G;var we=J.stateNode;if(J.tag===5&&we!==null&&(J=we,K!==null&&(we=wn(G,K),we!=null&&Ye.push(xo(G,we,J)))),Kt)break;G=G.return}0<Ye.length&&(ge=new Oe(ge,je,null,o,ve),_e.push({event:ge,listeners:Ye}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",ge&&o!==at&&(je=o.relatedTarget||o.fromElement)&&(Dr(je)||je[Di]))break e;if((Oe||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Oe?(je=o.relatedTarget||o.toElement,Oe=ie,je=je?Dr(je):null,je!==null&&(Kt=$n(je),je!==Kt||je.tag!==5&&je.tag!==6)&&(je=null)):(Oe=null,je=ie),Oe!==je)){if(Ye=Lf,we="onMouseLeave",K="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=If,we="onPointerLeave",K="onPointerEnter",G="pointer"),Kt=Oe==null?ge:ds(Oe),J=je==null?ge:ds(je),ge=new Ye(we,G+"leave",Oe,o,ve),ge.target=Kt,ge.relatedTarget=J,we=null,Dr(ve)===ie&&(Ye=new Ye(K,G+"enter",je,o,ve),Ye.target=J,Ye.relatedTarget=Kt,we=Ye),Kt=we,Oe&&je)t:{for(Ye=Oe,K=je,G=0,J=Ye;J;J=cs(J))G++;for(J=0,we=K;we;we=cs(we))J++;for(;0<G-J;)Ye=cs(Ye),G--;for(;0<J-G;)K=cs(K),J--;for(;G--;){if(Ye===K||K!==null&&Ye===K.alternate)break t;Ye=cs(Ye),K=cs(K)}Ye=null}else Ye=null;Oe!==null&&ah(_e,ge,Oe,Ye,!1),je!==null&&Kt!==null&&ah(_e,Kt,je,Ye,!0)}}e:{if(ge=ie?ds(ie):window,Oe=ge.nodeName&&ge.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ge.type==="file")var Ke=Ag;else if(zf(ge))if(Hf)Ke=Ng;else{Ke=Rg;var Je=Cg}else(Oe=ge.nodeName)&&Oe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=Pg);if(Ke&&(Ke=Ke(t,ie))){Vf(_e,Ke,o,ve);break e}Je&&Je(t,ge,ie),t==="focusout"&&(Je=ge._wrapperState)&&Je.controlled&&ge.type==="number"&&Ht(ge,"number",ge.value)}switch(Je=ie?ds(ie):window,t){case"focusin":(zf(Je)||Je.contentEditable==="true")&&(as=Je,fc=ie,mo=null);break;case"focusout":mo=fc=as=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Kf(_e,o,ve);break;case"selectionchange":if(Ig)break;case"keydown":case"keyup":Kf(_e,o,ve)}var et;if(lc)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else os?kf(t,o)&&(rt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Uf&&o.locale!=="ko"&&(os||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&os&&(et=Pf()):(rr=ve,nc="value"in rr?rr.value:rr.textContent,os=!0)),Je=xa(ie,rt),0<Je.length&&(rt=new Df(rt,t,null,o,ve),_e.push({event:rt,listeners:Je}),et?rt.data=et:(et=Bf(o),et!==null&&(rt.data=et)))),(et=Mg?Eg(t,o):wg(t,o))&&(ie=xa(ie,"onBeforeInput"),0<ie.length&&(ve=new Df("onBeforeInput","beforeinput",null,o,ve),_e.push({event:ve,listeners:ie}),ve.data=et))}sh(_e,i)})}function xo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function xa(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=wn(t,o),p!=null&&c.unshift(xo(t,p,d)),p=wn(t,i),p!=null&&c.push(xo(t,p,d))),t=t.return}return c}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,i,o,c,d){for(var p=i._reactName,E=[];o!==null&&o!==c;){var I=o,B=I.alternate,ie=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&ie!==null&&(I=ie,d?(B=wn(o,p),B!=null&&E.unshift(xo(o,B,I))):d||(B=wn(o,p),B!=null&&E.push(xo(o,B,I)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var kg=/\r\n?/g,Bg=/\u0000|\uFFFD/g;function lh(t){return(typeof t=="string"?t:""+t).replace(kg,`
`).replace(Bg,"")}function _a(t,i,o){if(i=lh(i),lh(t)!==i&&o)throw Error(n(425))}function ya(){}var _c=null,yc=null;function Sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(Hg)}:Mc;function Hg(t){setTimeout(function(){throw t})}function Ec(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),ao(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);ao(i)}function or(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),_i="__reactFiber$"+us,_o="__reactProps$"+us,Di="__reactContainer$"+us,wc="__reactEvents$"+us,Gg="__reactListeners$"+us,Wg="__reactHandles$"+us;function Dr(t){var i=t[_i];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Di]||o[_i]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=uh(t);t!==null;){if(o=t[_i])return o;t=uh(t)}return i}t=o,o=t.parentNode}return null}function yo(t){return t=t[_i]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Sa(t){return t[_o]||null}var Tc=[],fs=-1;function ar(t){return{current:t}}function zt(t){0>fs||(t.current=Tc[fs],Tc[fs]=null,fs--)}function Ot(t,i){fs++,Tc[fs]=t.current,t.current=i}var lr={},gn=ar(lr),Nn=ar(!1),Ir=lr;function hs(t,i){var o=t.type.contextTypes;if(!o)return lr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Ln(t){return t=t.childContextTypes,t!=null}function Ma(){zt(Nn),zt(gn)}function dh(t,i,o){if(gn.current!==lr)throw Error(n(168));Ot(gn,i),Ot(Nn,o)}function fh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,ue(t)||"Unknown",d));return re({},o,c)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Ir=gn.current,Ot(gn,t),Ot(Nn,Nn.current),!0}function hh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=fh(t,i,Ir),c.__reactInternalMemoizedMergedChildContext=t,zt(Nn),zt(gn),Ot(gn,t)):zt(Nn),Ot(Nn,o)}var Ii=null,wa=!1,bc=!1;function ph(t){Ii===null?Ii=[t]:Ii.push(t)}function jg(t){wa=!0,ph(t)}function cr(){if(!bc&&Ii!==null){bc=!0;var t=0,i=ot;try{var o=Ii;for(ot=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Ii=null,wa=!1}catch(d){throw Ii!==null&&(Ii=Ii.slice(t+1)),ra(j,cr),d}finally{ot=i,bc=!1}}return null}var ps=[],ms=0,Ta=null,ba=0,Kn=[],Zn=0,Ur=null,Ui=1,Fi="";function Fr(t,i){ps[ms++]=ba,ps[ms++]=Ta,Ta=t,ba=i}function mh(t,i,o){Kn[Zn++]=Ui,Kn[Zn++]=Fi,Kn[Zn++]=Ur,Ur=t;var c=Ui;t=Fi;var d=32-ke(c)-1;c&=~(1<<d),o+=1;var p=32-ke(i)+d;if(30<p){var E=d-d%5;p=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Ui=1<<32-ke(i)+d|o<<d|c,Fi=p+t}else Ui=1<<p|o<<d|c,Fi=t}function Ac(t){t.return!==null&&(Fr(t,1),mh(t,1,0))}function Cc(t){for(;t===Ta;)Ta=ps[--ms],ps[ms]=null,ba=ps[--ms],ps[ms]=null;for(;t===Ur;)Ur=Kn[--Zn],Kn[Zn]=null,Fi=Kn[--Zn],Kn[Zn]=null,Ui=Kn[--Zn],Kn[Zn]=null}var Hn=null,Gn=null,Gt=!1,ai=null;function gh(t,i){var o=ti(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function vh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Hn=t,Gn=or(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Hn=t,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ti(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Hn=t,Gn=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(Gt){var i=Gn;if(i){var o=i;if(!vh(t,i)){if(Rc(t))throw Error(n(418));i=or(o.nextSibling);var c=Hn;i&&vh(t,i)?gh(c,o):(t.flags=t.flags&-4097|2,Gt=!1,Hn=t)}}else{if(Rc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Gt=!1,Hn=t}}}function xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Aa(t){if(t!==Hn)return!1;if(!Gt)return xh(t),Gt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Sc(t.type,t.memoizedProps)),i&&(i=Gn)){if(Rc(t))throw _h(),Error(n(418));for(;i;)gh(t,i),i=or(i.nextSibling)}if(xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Gn=or(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Gn=null}}else Gn=Hn?or(t.stateNode.nextSibling):null;return!0}function _h(){for(var t=Gn;t;)t=or(t.nextSibling)}function gs(){Gn=Hn=null,Gt=!1}function Nc(t){ai===null?ai=[t]:ai.push(t)}var Xg=P.ReactCurrentBatchConfig;function So(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var I=d.refs;E===null?delete I[p]:I[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ca(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function yh(t){var i=t._init;return i(t._payload)}function Sh(t){function i(K,G){if(t){var J=K.deletions;J===null?(K.deletions=[G],K.flags|=16):J.push(G)}}function o(K,G){if(!t)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function c(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function d(K,G){return K=vr(K,G),K.index=0,K.sibling=null,K}function p(K,G,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<G?(K.flags|=2,G):J):(K.flags|=2,G)):(K.flags|=1048576,G)}function E(K){return t&&K.alternate===null&&(K.flags|=2),K}function I(K,G,J,we){return G===null||G.tag!==6?(G=Mu(J,K.mode,we),G.return=K,G):(G=d(G,J),G.return=K,G)}function B(K,G,J,we){var Ke=J.type;return Ke===k?ve(K,G,J.props.children,we,J.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ae&&yh(Ke)===G.type)?(we=d(G,J.props),we.ref=So(K,G,J),we.return=K,we):(we=Qa(J.type,J.key,J.props,null,K.mode,we),we.ref=So(K,G,J),we.return=K,we)}function ie(K,G,J,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Eu(J,K.mode,we),G.return=K,G):(G=d(G,J.children||[]),G.return=K,G)}function ve(K,G,J,we,Ke){return G===null||G.tag!==7?(G=Wr(J,K.mode,we,Ke),G.return=K,G):(G=d(G,J),G.return=K,G)}function _e(K,G,J){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Mu(""+G,K.mode,J),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return J=Qa(G.type,G.key,G.props,null,K.mode,J),J.ref=So(K,null,G),J.return=K,J;case O:return G=Eu(G,K.mode,J),G.return=K,G;case ae:var we=G._init;return _e(K,we(G._payload),J)}if(gt(G)||fe(G))return G=Wr(G,K.mode,J,null),G.return=K,G;Ca(K,G)}return null}function ge(K,G,J,we){var Ke=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ke!==null?null:I(K,G,""+J,we);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case U:return J.key===Ke?B(K,G,J,we):null;case O:return J.key===Ke?ie(K,G,J,we):null;case ae:return Ke=J._init,ge(K,G,Ke(J._payload),we)}if(gt(J)||fe(J))return Ke!==null?null:ve(K,G,J,we,null);Ca(K,J)}return null}function Oe(K,G,J,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return K=K.get(J)||null,I(G,K,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case U:return K=K.get(we.key===null?J:we.key)||null,B(G,K,we,Ke);case O:return K=K.get(we.key===null?J:we.key)||null,ie(G,K,we,Ke);case ae:var Je=we._init;return Oe(K,G,J,Je(we._payload),Ke)}if(gt(we)||fe(we))return K=K.get(J)||null,ve(G,K,we,Ke,null);Ca(G,we)}return null}function je(K,G,J,we){for(var Ke=null,Je=null,et=G,rt=G=0,cn=null;et!==null&&rt<J.length;rt++){et.index>rt?(cn=et,et=null):cn=et.sibling;var bt=ge(K,et,J[rt],we);if(bt===null){et===null&&(et=cn);break}t&&et&&bt.alternate===null&&i(K,et),G=p(bt,G,rt),Je===null?Ke=bt:Je.sibling=bt,Je=bt,et=cn}if(rt===J.length)return o(K,et),Gt&&Fr(K,rt),Ke;if(et===null){for(;rt<J.length;rt++)et=_e(K,J[rt],we),et!==null&&(G=p(et,G,rt),Je===null?Ke=et:Je.sibling=et,Je=et);return Gt&&Fr(K,rt),Ke}for(et=c(K,et);rt<J.length;rt++)cn=Oe(et,K,rt,J[rt],we),cn!==null&&(t&&cn.alternate!==null&&et.delete(cn.key===null?rt:cn.key),G=p(cn,G,rt),Je===null?Ke=cn:Je.sibling=cn,Je=cn);return t&&et.forEach(function(xr){return i(K,xr)}),Gt&&Fr(K,rt),Ke}function Ye(K,G,J,we){var Ke=fe(J);if(typeof Ke!="function")throw Error(n(150));if(J=Ke.call(J),J==null)throw Error(n(151));for(var Je=Ke=null,et=G,rt=G=0,cn=null,bt=J.next();et!==null&&!bt.done;rt++,bt=J.next()){et.index>rt?(cn=et,et=null):cn=et.sibling;var xr=ge(K,et,bt.value,we);if(xr===null){et===null&&(et=cn);break}t&&et&&xr.alternate===null&&i(K,et),G=p(xr,G,rt),Je===null?Ke=xr:Je.sibling=xr,Je=xr,et=cn}if(bt.done)return o(K,et),Gt&&Fr(K,rt),Ke;if(et===null){for(;!bt.done;rt++,bt=J.next())bt=_e(K,bt.value,we),bt!==null&&(G=p(bt,G,rt),Je===null?Ke=bt:Je.sibling=bt,Je=bt);return Gt&&Fr(K,rt),Ke}for(et=c(K,et);!bt.done;rt++,bt=J.next())bt=Oe(et,K,rt,bt.value,we),bt!==null&&(t&&bt.alternate!==null&&et.delete(bt.key===null?rt:bt.key),G=p(bt,G,rt),Je===null?Ke=bt:Je.sibling=bt,Je=bt);return t&&et.forEach(function(Tv){return i(K,Tv)}),Gt&&Fr(K,rt),Ke}function Kt(K,G,J,we){if(typeof J=="object"&&J!==null&&J.type===k&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case U:e:{for(var Ke=J.key,Je=G;Je!==null;){if(Je.key===Ke){if(Ke=J.type,Ke===k){if(Je.tag===7){o(K,Je.sibling),G=d(Je,J.props.children),G.return=K,K=G;break e}}else if(Je.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ae&&yh(Ke)===Je.type){o(K,Je.sibling),G=d(Je,J.props),G.ref=So(K,Je,J),G.return=K,K=G;break e}o(K,Je);break}else i(K,Je);Je=Je.sibling}J.type===k?(G=Wr(J.props.children,K.mode,we,J.key),G.return=K,K=G):(we=Qa(J.type,J.key,J.props,null,K.mode,we),we.ref=So(K,G,J),we.return=K,K=we)}return E(K);case O:e:{for(Je=J.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){o(K,G.sibling),G=d(G,J.children||[]),G.return=K,K=G;break e}else{o(K,G);break}else i(K,G);G=G.sibling}G=Eu(J,K.mode,we),G.return=K,K=G}return E(K);case ae:return Je=J._init,Kt(K,G,Je(J._payload),we)}if(gt(J))return je(K,G,J,we);if(fe(J))return Ye(K,G,J,we);Ca(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,G!==null&&G.tag===6?(o(K,G.sibling),G=d(G,J),G.return=K,K=G):(o(K,G),G=Mu(J,K.mode,we),G.return=K,K=G),E(K)):o(K,G)}return Kt}var vs=Sh(!0),Mh=Sh(!1),Ra=ar(null),Pa=null,xs=null,Lc=null;function Dc(){Lc=xs=Pa=null}function Ic(t){var i=Ra.current;zt(Ra),t._currentValue=i}function Uc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){Pa=t,Lc=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function Qn(t){var i=t._currentValue;if(Lc!==t)if(t={context:t,memoizedValue:i,next:null},xs===null){if(Pa===null)throw Error(n(308));xs=t,Pa.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return i}var Or=null;function Fc(t){Or===null?Or=[t]:Or.push(t)}function Eh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Fc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Oi(t,c)}function Oi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ur=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function dr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Oi(t,o)}return d=c.interleaved,d===null?(i.next=i,Fc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Oi(t,o)}function Na(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Nt(t,o)}}function Th(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function La(t,i,o,c){var d=t.updateQueue;ur=!1;var p=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,ie=B.next;B.next=null,E===null?p=ie:E.next=ie,E=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==E&&(I===null?ve.firstBaseUpdate=ie:I.next=ie,ve.lastBaseUpdate=B))}if(p!==null){var _e=d.baseState;E=0,ve=ie=B=null,I=p;do{var ge=I.lane,Oe=I.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=t,Ye=I;switch(ge=i,Oe=o,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){_e=je.call(Oe,_e,ge);break e}_e=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,ge=typeof je=="function"?je.call(Oe,_e,ge):je,ge==null)break e;_e=re({},_e,ge);break e;case 2:ur=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Oe={eventTime:Oe,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ie=ve=Oe,B=_e):ve=ve.next=Oe,E|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(B=_e),d.baseState=B,d.firstBaseUpdate=ie,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);zr|=E,t.lanes=E,t.memoizedState=_e}}function bh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Mo={},yi=ar(Mo),Eo=ar(Mo),wo=ar(Mo);function kr(t){if(t===Mo)throw Error(n(174));return t}function kc(t,i){switch(Ot(wo,i),Ot(Eo,t),Ot(yi,Mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}zt(yi),Ot(yi,i)}function ys(){zt(yi),zt(Eo),zt(wo)}function Ah(t){kr(wo.current);var i=kr(yi.current),o=me(i,t.type);i!==o&&(Ot(Eo,t),Ot(yi,o))}function Bc(t){Eo.current===t&&(zt(yi),zt(Eo))}var jt=ar(0);function Da(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zc=[];function Vc(){for(var t=0;t<zc.length;t++)zc[t]._workInProgressVersionPrimary=null;zc.length=0}var Ia=P.ReactCurrentDispatcher,Hc=P.ReactCurrentBatchConfig,Br=0,Xt=null,en=null,an=null,Ua=!1,To=!1,bo=0,qg=0;function vn(){throw Error(n(321))}function Gc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!oi(t[o],i[o]))return!1;return!0}function Wc(t,i,o,c,d,p){if(Br=p,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ia.current=t===null||t.memoizedState===null?Zg:Qg,t=o(c,d),To){p=0;do{if(To=!1,bo=0,25<=p)throw Error(n(301));p+=1,an=en=null,i.updateQueue=null,Ia.current=Jg,t=o(c,d)}while(To)}if(Ia.current=ka,i=en!==null&&en.next!==null,Br=0,an=en=Xt=null,Ua=!1,i)throw Error(n(300));return t}function jc(){var t=bo!==0;return bo=0,t}function Si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Xt.memoizedState=an=t:an=an.next=t,an}function Jn(){if(en===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=an===null?Xt.memoizedState:an.next;if(i!==null)an=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},an===null?Xt.memoizedState=an=t:an=an.next=t}return an}function Ao(t,i){return typeof i=="function"?i(t):i}function Xc(t){var i=Jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=en,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var E=d.next;d.next=p.next,p.next=E}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=E=null,B=null,ie=p;do{var ve=ie.lane;if((Br&ve)===ve)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:t(c,ie.action);else{var _e={lane:ve,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(I=B=_e,E=c):B=B.next=_e,Xt.lanes|=ve,zr|=ve}ie=ie.next}while(ie!==null&&ie!==p);B===null?E=c:B.next=I,oi(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=B,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Xt.lanes|=p,zr|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qc(t){var i=Jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do p=t(p,E.action),E=E.next;while(E!==d);oi(p,i.memoizedState)||(Dn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function Ch(){}function Rh(t,i){var o=Xt,c=Jn(),d=i(),p=!oi(c.memoizedState,d);if(p&&(c.memoizedState=d,Dn=!0),c=c.queue,Yc(Lh.bind(null,o,c,t),[t]),c.getSnapshot!==i||p||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Co(9,Nh.bind(null,o,c,d,i),void 0,null),ln===null)throw Error(n(349));(Br&30)!==0||Ph(o,i,d)}return d}function Ph(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Nh(t,i,o,c){i.value=o,i.getSnapshot=c,Dh(i)&&Ih(t)}function Lh(t,i,o){return o(function(){Dh(i)&&Ih(t)})}function Dh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!oi(t,o)}catch{return!0}}function Ih(t){var i=Oi(t,1);i!==null&&di(i,t,1,-1)}function Uh(t){var i=Si();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},i.queue=t,t=t.dispatch=Kg.bind(null,Xt,t),[i.memoizedState,t]}function Co(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Fh(){return Jn().memoizedState}function Fa(t,i,o,c){var d=Si();Xt.flags|=t,d.memoizedState=Co(1|i,o,void 0,c===void 0?null:c)}function Oa(t,i,o,c){var d=Jn();c=c===void 0?null:c;var p=void 0;if(en!==null){var E=en.memoizedState;if(p=E.destroy,c!==null&&Gc(c,E.deps)){d.memoizedState=Co(i,o,p,c);return}}Xt.flags|=t,d.memoizedState=Co(1|i,o,p,c)}function Oh(t,i){return Fa(8390656,8,t,i)}function Yc(t,i){return Oa(2048,8,t,i)}function kh(t,i){return Oa(4,2,t,i)}function Bh(t,i){return Oa(4,4,t,i)}function zh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Vh(t,i,o){return o=o!=null?o.concat([t]):null,Oa(4,4,zh.bind(null,i,t),o)}function $c(){}function Hh(t,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Gh(t,i){var o=Jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Wh(t,i,o){return(Br&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(oi(o,i)||(o=mn(),Xt.lanes|=o,zr|=o,t.baseState=!0),i)}function Yg(t,i){var o=ot;ot=o!==0&&4>o?o:4,t(!0);var c=Hc.transition;Hc.transition={};try{t(!1),i()}finally{ot=o,Hc.transition=c}}function jh(){return Jn().memoizedState}function $g(t,i,o){var c=mr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Xh(t))qh(i,o);else if(o=Eh(t,i,o,c),o!==null){var d=An();di(o,t,c,d),Yh(o,i,c)}}function Kg(t,i,o){var c=mr(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xh(t))qh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,I=p(E,o);if(d.hasEagerState=!0,d.eagerState=I,oi(I,E)){var B=i.interleaved;B===null?(d.next=d,Fc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=Eh(t,i,d,c),o!==null&&(d=An(),di(o,t,c,d),Yh(o,i,c))}}function Xh(t){var i=t.alternate;return t===Xt||i!==null&&i===Xt}function qh(t,i){To=Ua=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Yh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Nt(t,o)}}var ka={readContext:Qn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},Zg={readContext:Qn,useCallback:function(t,i){return Si().memoizedState=[t,i===void 0?null:i],t},useContext:Qn,useEffect:Oh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Fa(4194308,4,zh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Fa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Fa(4,2,t,i)},useMemo:function(t,i){var o=Si();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=Si();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=$g.bind(null,Xt,t),[c.memoizedState,t]},useRef:function(t){var i=Si();return t={current:t},i.memoizedState=t},useState:Uh,useDebugValue:$c,useDeferredValue:function(t){return Si().memoizedState=t},useTransition:function(){var t=Uh(!1),i=t[0];return t=Yg.bind(null,t[1]),Si().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=Xt,d=Si();if(Gt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),ln===null)throw Error(n(349));(Br&30)!==0||Ph(c,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Oh(Lh.bind(null,c,p,t),[t]),c.flags|=2048,Co(9,Nh.bind(null,c,p,o,i),void 0,null),o},useId:function(){var t=Si(),i=ln.identifierPrefix;if(Gt){var o=Fi,c=Ui;o=(c&~(1<<32-ke(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=qg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Qg={readContext:Qn,useCallback:Hh,useContext:Qn,useEffect:Yc,useImperativeHandle:Vh,useInsertionEffect:kh,useLayoutEffect:Bh,useMemo:Gh,useReducer:Xc,useRef:Fh,useState:function(){return Xc(Ao)},useDebugValue:$c,useDeferredValue:function(t){var i=Jn();return Wh(i,en.memoizedState,t)},useTransition:function(){var t=Xc(Ao)[0],i=Jn().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Rh,useId:jh,unstable_isNewReconciler:!1},Jg={readContext:Qn,useCallback:Hh,useContext:Qn,useEffect:Yc,useImperativeHandle:Vh,useInsertionEffect:kh,useLayoutEffect:Bh,useMemo:Gh,useReducer:qc,useRef:Fh,useState:function(){return qc(Ao)},useDebugValue:$c,useDeferredValue:function(t){var i=Jn();return en===null?i.memoizedState=t:Wh(i,en.memoizedState,t)},useTransition:function(){var t=qc(Ao)[0],i=Jn().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Rh,useId:jh,unstable_isNewReconciler:!1};function li(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Kc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ba={isMounted:function(t){return(t=t._reactInternals)?$n(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=An(),d=mr(t),p=ki(c,d);p.payload=i,o!=null&&(p.callback=o),i=dr(t,p,d),i!==null&&(di(i,t,d,c),Na(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=An(),d=mr(t),p=ki(c,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=dr(t,p,d),i!==null&&(di(i,t,d,c),Na(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=An(),c=mr(t),d=ki(o,c);d.tag=2,i!=null&&(d.callback=i),i=dr(t,d,c),i!==null&&(di(i,t,c,o),Na(i,t,c))}};function $h(t,i,o,c,d,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,E):i.prototype&&i.prototype.isPureReactComponent?!po(o,c)||!po(d,p):!0}function Kh(t,i,o){var c=!1,d=lr,p=i.contextType;return typeof p=="object"&&p!==null?p=Qn(p):(d=Ln(i)?Ir:gn.current,c=i.contextTypes,p=(c=c!=null)?hs(t,d):lr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ba,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Zh(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Ba.enqueueReplaceState(i,i.state,null)}function Zc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Oc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Qn(p):(p=Ln(i)?Ir:gn.current,d.context=hs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Kc(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ba.enqueueReplaceState(d,d.state,null),La(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,i){try{var o="",c=i;do o+=Ge(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Qc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Jc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function Qh(t,i,o){o=ki(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Xa||(Xa=!0,pu=c),Jc(t,i)},o}function Jh(t,i,o){o=ki(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Jc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Jc(t,i),typeof c!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function ep(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new ev;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=pv.bind(null,t,i,o),i.then(t,t))}function tp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function np(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ki(-1,1),i.tag=2,dr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var tv=P.ReactCurrentOwner,Dn=!1;function bn(t,i,o,c){i.child=t===null?Mh(i,null,o,c):vs(i,t.child,o,c)}function ip(t,i,o,c,d){o=o.render;var p=i.ref;return _s(i,d),c=Wc(t,i,o,c,p,d),o=jc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Bi(t,i,d)):(Gt&&o&&Ac(i),i.flags|=1,bn(t,i,c,d),i.child)}function rp(t,i,o,c,d){if(t===null){var p=o.type;return typeof p=="function"&&!Su(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,sp(t,i,p,c,d)):(t=Qa(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:po,o(E,c)&&t.ref===i.ref)return Bi(t,i,d)}return i.flags|=1,t=vr(p,c),t.ref=i.ref,t.return=i,i.child=t}function sp(t,i,o,c,d){if(t!==null){var p=t.memoizedProps;if(po(p,c)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Bi(t,i,d)}return eu(t,i,o,c,d)}function op(t,i,o){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Es,Wn),Wn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(Es,Wn),Wn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Ot(Es,Wn),Wn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,Ot(Es,Wn),Wn|=c;return bn(t,i,d,o),i.child}function ap(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function eu(t,i,o,c,d){var p=Ln(o)?Ir:gn.current;return p=hs(i,p),_s(i,d),o=Wc(t,i,o,c,p,d),c=jc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Bi(t,i,d)):(Gt&&c&&Ac(i),i.flags|=1,bn(t,i,o,d),i.child)}function lp(t,i,o,c,d){if(Ln(o)){var p=!0;Ea(i)}else p=!1;if(_s(i,d),i.stateNode===null)Va(t,i),Kh(i,o,c),Zc(i,o,c,d),c=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var B=E.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Qn(ie):(ie=Ln(o)?Ir:gn.current,ie=hs(i,ie));var ve=o.getDerivedStateFromProps,_e=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";_e||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||B!==ie)&&Zh(i,E,c,ie),ur=!1;var ge=i.memoizedState;E.state=ge,La(i,c,E,d),B=i.memoizedState,I!==c||ge!==B||Nn.current||ur?(typeof ve=="function"&&(Kc(i,o,ve,c),B=i.memoizedState),(I=ur||$h(i,o,I,c,ge,B,ie))?(_e||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),E.props=c,E.state=B,E.context=ie,c=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,wh(t,i),I=i.memoizedProps,ie=i.type===i.elementType?I:li(i.type,I),E.props=ie,_e=i.pendingProps,ge=E.context,B=o.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=Ln(o)?Ir:gn.current,B=hs(i,B));var Oe=o.getDerivedStateFromProps;(ve=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==_e||ge!==B)&&Zh(i,E,c,B),ur=!1,ge=i.memoizedState,E.state=ge,La(i,c,E,d);var je=i.memoizedState;I!==_e||ge!==je||Nn.current||ur?(typeof Oe=="function"&&(Kc(i,o,Oe,c),je=i.memoizedState),(ie=ur||$h(i,o,ie,c,ge,je,B)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,je,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,je,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),E.props=c,E.state=je,E.context=B,c=ie):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),c=!1)}return tu(t,i,o,c,p,d)}function tu(t,i,o,c,d,p){ap(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&hh(i,o,!1),Bi(t,i,p);c=i.stateNode,tv.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=vs(i,t.child,null,p),i.child=vs(i,null,I,p)):bn(t,i,I,p),i.memoizedState=c.state,d&&hh(i,o,!0),i.child}function cp(t){var i=t.stateNode;i.pendingContext?dh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&dh(t,i.context,!1),kc(t,i.containerInfo)}function up(t,i,o,c,d){return gs(),Nc(d),i.flags|=256,bn(t,i,o,c),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function dp(t,i,o){var c=i.pendingProps,d=jt.current,p=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ot(jt,d&1),t===null)return Pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,p?(c=i.mode,p=i.child,E={mode:"hidden",children:E},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=Ja(E,c,0,null),t=Wr(t,c,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=iu(o),i.memoizedState=nu,t):ru(i,E));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return nv(t,i,E,c,I,d,o);if(p){p=c.fallback,E=i.mode,d=t.child,I=d.sibling;var B={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=vr(d,B),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=vr(I,p):(p=Wr(p,E,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,E=t.child.memoizedState,E=E===null?iu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~o,i.memoizedState=nu,c}return p=t.child,t=p.sibling,c=vr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function ru(t,i){return i=Ja({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function za(t,i,o,c){return c!==null&&Nc(c),vs(i,t.child,null,o),t=ru(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function nv(t,i,o,c,d,p,E){if(o)return i.flags&256?(i.flags&=-257,c=Qc(Error(n(422))),za(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Ja({mode:"visible",children:c.children},d,0,null),p=Wr(p,d,E,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&vs(i,t.child,null,E),i.child.memoizedState=iu(E),i.memoizedState=nu,p);if((i.mode&1)===0)return za(t,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(n(419)),c=Qc(p,c,void 0),za(t,i,E,c)}if(I=(E&t.childLanes)!==0,Dn||I){if(c=ln,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Oi(t,d),di(c,t,d,-1))}return yu(),c=Qc(Error(n(421))),za(t,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=mv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Gn=or(d.nextSibling),Hn=i,Gt=!0,ai=null,t!==null&&(Kn[Zn++]=Ui,Kn[Zn++]=Fi,Kn[Zn++]=Ur,Ui=t.id,Fi=t.overflow,Ur=i),i=ru(i,c.children),i.flags|=4096,i)}function fp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Uc(t.return,i,o)}function su(t,i,o,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function hp(t,i,o){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(bn(t,i,c.children,o),c=jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,o,i);else if(t.tag===19)fp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ot(jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Da(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),su(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Da(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}su(i,!0,o,null,p);break;case"together":su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=vr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=vr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function iv(t,i,o){switch(i.tag){case 3:cp(i),gs();break;case 5:Ah(i);break;case 1:Ln(i.type)&&Ea(i);break;case 4:kc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ot(Ra,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ot(jt,jt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?dp(t,i,o):(Ot(jt,jt.current&1),t=Bi(t,i,o),t!==null?t.sibling:null);Ot(jt,jt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return hp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ot(jt,jt.current),c)break;return null;case 22:case 23:return i.lanes=0,op(t,i,o)}return Bi(t,i,o)}var pp,ou,mp,gp;pp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ou=function(){},mp=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,kr(yi.current);var p=null;switch(o){case"input":d=_t(t,d),c=_t(t,c),p=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),p=[];break;case"textarea":d=Xe(t,d),c=Xe(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ya)}qe(o,c);var E;o=null;for(ie in d)if(!c.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var I=d[ie];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in c){var B=c[ie];if(I=d?.[ie],c.hasOwnProperty(ie)&&B!==I&&(B!=null||I!=null))if(ie==="style")if(I){for(E in I)!I.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in B)B.hasOwnProperty(E)&&I[E]!==B[E]&&(o||(o={}),o[E]=B[E])}else o||(p||(p=[]),p.push(ie,o)),o=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(p=p||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&Bt("scroll",t),p||I===B||(p=[])):(p=p||[]).push(ie,B))}o&&(p=p||[]).push("style",o);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},gp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Ro(t,i){if(!Gt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function rv(t,i,o){var c=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Ln(i.type)&&Ma(),xn(i),null;case 3:return c=i.stateNode,ys(),zt(Nn),zt(gn),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Aa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(vu(ai),ai=null))),ou(t,i),xn(i),null;case 5:Bc(i);var d=kr(wo.current);if(o=i.type,t!==null&&i.stateNode!=null)mp(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=kr(yi.current),Aa(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[_i]=i,c[_o]=p,t=(i.mode&1)!==0,o){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<go.length;d++)Bt(go[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Pt(c,p),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Bt("invalid",c);break;case"textarea":N(c,p),Bt("invalid",c)}qe(o,p),d=null;for(var E in p)if(p.hasOwnProperty(E)){var I=p[E];E==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&_a(c.textContent,I,t),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&_a(c.textContent,I,t),d=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Bt("scroll",c)}switch(o){case"input":pt(c),z(c,p,!0);break;case"textarea":pt(c),W(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=ya)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(o,{is:c.is}):(t=E.createElement(o),o==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,o),t[_i]=i,t[_o]=c,pp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ae(o,c),o){case"dialog":Bt("cancel",t),Bt("close",t),d=c;break;case"iframe":case"object":case"embed":Bt("load",t),d=c;break;case"video":case"audio":for(d=0;d<go.length;d++)Bt(go[d],t);d=c;break;case"source":Bt("error",t),d=c;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),d=c;break;case"details":Bt("toggle",t),d=c;break;case"input":Pt(t,c),d=_t(t,c),Bt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Bt("invalid",t);break;case"textarea":N(t,c),d=Xe(t,c),Bt("invalid",t);break;default:d=c}qe(o,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var B=I[p];p==="style"?Pe(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(t,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&Te(t,B):typeof B=="number"&&Te(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Bt("scroll",t):B!=null&&D(t,p,B,E))}switch(o){case"input":pt(t),z(t,c,!1);break;case"textarea":pt(t),W(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Se(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?yt(t,!!c.multiple,p,!1):c.defaultValue!=null&&yt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)gp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=kr(wo.current),kr(yi.current),Aa(i)){if(c=i.stateNode,o=i.memoizedProps,c[_i]=i,(p=c.nodeValue!==o)&&(t=Hn,t!==null))switch(t.tag){case 3:_a(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(c.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[_i]=i,i.stateNode=c}return xn(i),null;case 13:if(zt(jt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Gt&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_h(),gs(),i.flags|=98560,p=!1;else if(p=Aa(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[_i]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),p=!1}else ai!==null&&(vu(ai),ai=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(jt.current&1)!==0?tn===0&&(tn=3):yu())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return ys(),ou(t,i),t===null&&vo(i.stateNode.containerInfo),xn(i),null;case 10:return Ic(i.type._context),xn(i),null;case 17:return Ln(i.type)&&Ma(),xn(i),null;case 19:if(zt(jt),p=i.memoizedState,p===null)return xn(i),null;if(c=(i.flags&128)!==0,E=p.rendering,E===null)if(c)Ro(p,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Da(t),E!==null){for(i.flags|=128,Ro(p,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,t=c,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ot(jt,jt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Wt()>ws&&(i.flags|=128,c=!0,Ro(p,!1),i.lanes=4194304)}else{if(!c)if(t=Da(E),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ro(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Gt)return xn(i),null}else 2*Wt()-p.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,c=!0,Ro(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Wt(),i.sibling=null,o=jt.current,Ot(jt,c?o&1|2:o&1),i):(xn(i),null);case 22:case 23:return _u(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function sv(t,i){switch(Cc(i),i.tag){case 1:return Ln(i.type)&&Ma(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ys(),zt(Nn),zt(gn),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Bc(i),null;case 13:if(zt(jt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));gs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return zt(jt),null;case 4:return ys(),null;case 10:return Ic(i.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var Ha=!1,_n=!1,ov=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){qt(t,i,c)}else o.current=null}function au(t,i,o){try{o()}catch(c){qt(t,i,c)}}var vp=!1;function av(t,i){if(_c=la,t=$f(),dc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,I=-1,B=-1,ie=0,ve=0,_e=t,ge=null;t:for(;;){for(var Oe;_e!==o||d!==0&&_e.nodeType!==3||(I=E+d),_e!==p||c!==0&&_e.nodeType!==3||(B=E+c),_e.nodeType===3&&(E+=_e.nodeValue.length),(Oe=_e.firstChild)!==null;)ge=_e,_e=Oe;for(;;){if(_e===t)break t;if(ge===o&&++ie===d&&(I=E),ge===p&&++ve===c&&(B=E),(Oe=_e.nextSibling)!==null)break;_e=ge,ge=_e.parentNode}_e=Oe}o=I===-1||B===-1?null:{start:I,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(yc={focusedElem:t,selectionRange:o},la=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,Kt=je.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:li(i.type,Ye),Kt);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){qt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return je=vp,vp=!1,je}function Po(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&au(i,o,p)}d=d.next}while(d!==c)}}function Ga(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function lu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function xp(t){var i=t.alternate;i!==null&&(t.alternate=null,xp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[_i],delete i[_o],delete i[wc],delete i[Gg],delete i[Wg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _p(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_p(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ya));else if(c!==4&&(t=t.child,t!==null))for(cu(t,i,o),t=t.sibling;t!==null;)cu(t,i,o),t=t.sibling}function uu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}var dn=null,ci=!1;function fr(t,i,o){for(o=o.child;o!==null;)Sp(t,i,o),o=o.sibling}function Sp(t,i,o){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Fe,o)}catch{}switch(o.tag){case 5:_n||Ms(o,i);case 6:var c=dn,d=ci;dn=null,fr(t,i,o),dn=c,ci=d,dn!==null&&(ci?(t=dn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):dn.removeChild(o.stateNode));break;case 18:dn!==null&&(ci?(t=dn,o=o.stateNode,t.nodeType===8?Ec(t.parentNode,o):t.nodeType===1&&Ec(t,o),ao(t)):Ec(dn,o.stateNode));break;case 4:c=dn,d=ci,dn=o.stateNode.containerInfo,ci=!0,fr(t,i,o),dn=c,ci=d;break;case 0:case 11:case 14:case 15:if(!_n&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&au(o,i,E),d=d.next}while(d!==c)}fr(t,i,o);break;case 1:if(!_n&&(Ms(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){qt(o,i,I)}fr(t,i,o);break;case 21:fr(t,i,o);break;case 22:o.mode&1?(_n=(c=_n)||o.memoizedState!==null,fr(t,i,o),_n=c):fr(t,i,o);break;default:fr(t,i,o)}}function Mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ov),i.forEach(function(c){var d=gv.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function ui(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,ci=!1;break e;case 3:dn=I.stateNode.containerInfo,ci=!0;break e;case 4:dn=I.stateNode.containerInfo,ci=!0;break e}I=I.return}if(dn===null)throw Error(n(160));Sp(p,E,d),dn=null,ci=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ie){qt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,t),i=i.sibling}function Ep(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(i,t),Mi(t),c&4){try{Po(3,t,t.return),Ga(3,t)}catch(Ye){qt(t,t.return,Ye)}try{Po(5,t,t.return)}catch(Ye){qt(t,t.return,Ye)}}break;case 1:ui(i,t),Mi(t),c&512&&o!==null&&Ms(o,o.return);break;case 5:if(ui(i,t),Mi(t),c&512&&o!==null&&Ms(o,o.return),t.flags&32){var d=t.stateNode;try{Te(d,"")}catch(Ye){qt(t,t.return,Ye)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,E=o!==null?o.memoizedProps:p,I=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&lt(d,p),Ae(I,E);var ie=Ae(I,p);for(E=0;E<B.length;E+=2){var ve=B[E],_e=B[E+1];ve==="style"?Pe(d,_e):ve==="dangerouslySetInnerHTML"?$e(d,_e):ve==="children"?Te(d,_e):D(d,ve,_e,ie)}switch(I){case"input":Vt(d,p);break;case"textarea":M(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Oe=p.value;Oe!=null?yt(d,!!p.multiple,Oe,!1):ge!==!!p.multiple&&(p.defaultValue!=null?yt(d,!!p.multiple,p.defaultValue,!0):yt(d,!!p.multiple,p.multiple?[]:"",!1))}d[_o]=p}catch(Ye){qt(t,t.return,Ye)}}break;case 6:if(ui(i,t),Mi(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ye){qt(t,t.return,Ye)}}break;case 3:if(ui(i,t),Mi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch(Ye){qt(t,t.return,Ye)}break;case 4:ui(i,t),Mi(t);break;case 13:ui(i,t),Mi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(hu=Wt())),c&4&&Mp(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(ie=_n)||ve,ui(i,t),_n=ie):ui(i,t),Mi(t),c&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ve&&(t.mode&1)!==0)for(Ve=t,ve=t.child;ve!==null;){for(_e=Ve=ve;Ve!==null;){switch(ge=Ve,Oe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Po(4,ge,ge.return);break;case 1:Ms(ge,ge.return);var je=ge.stateNode;if(typeof je.componentWillUnmount=="function"){c=ge,o=ge.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ye){qt(c,o,Ye)}}break;case 5:Ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){bp(_e);continue}}Oe!==null?(Oe.return=ge,Ve=Oe):bp(_e)}ve=ve.sibling}e:for(ve=null,_e=t;;){if(_e.tag===5){if(ve===null){ve=_e;try{d=_e.stateNode,ie?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=_e.stateNode,B=_e.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=ye("display",E))}catch(Ye){qt(t,t.return,Ye)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=ie?"":_e.memoizedProps}catch(Ye){qt(t,t.return,Ye)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===t)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===t)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===t)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:ui(i,t),Mi(t),c&4&&Mp(t);break;case 21:break;default:ui(i,t),Mi(t)}}function Mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(_p(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Te(d,""),c.flags&=-33);var p=yp(t);uu(t,p,d);break;case 3:case 4:var E=c.stateNode.containerInfo,I=yp(t);cu(t,I,E);break;default:throw Error(n(161))}}catch(B){qt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function lv(t,i,o){Ve=t,wp(t)}function wp(t,i,o){for(var c=(t.mode&1)!==0;Ve!==null;){var d=Ve,p=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Ha;if(!E){var I=d.alternate,B=I!==null&&I.memoizedState!==null||_n;I=Ha;var ie=_n;if(Ha=E,(_n=B)&&!ie)for(Ve=d;Ve!==null;)E=Ve,B=E.child,E.tag===22&&E.memoizedState!==null?Ap(d):B!==null?(B.return=E,Ve=B):Ap(d);for(;p!==null;)Ve=p,wp(p),p=p.sibling;Ve=d,Ha=I,_n=ie}Tp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Ve=p):Tp(t)}}function Tp(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Ga(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:li(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&bh(i,p,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}bh(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ve=ie.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&ao(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&lu(i)}catch(ge){qt(i,i.return,ge)}}if(i===t){Ve=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function bp(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Ap(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ga(4,i)}catch(B){qt(i,o,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){qt(i,d,B)}}var p=i.return;try{lu(i)}catch(B){qt(i,p,B)}break;case 5:var E=i.return;try{lu(i)}catch(B){qt(i,E,B)}}}catch(B){qt(i,i.return,B)}if(i===t){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var cv=Math.ceil,Wa=P.ReactCurrentDispatcher,du=P.ReactCurrentOwner,ei=P.ReactCurrentBatchConfig,Et=0,ln=null,Zt=null,fn=0,Wn=0,Es=ar(0),tn=0,No=null,zr=0,ja=0,fu=0,Lo=null,In=null,hu=0,ws=1/0,zi=null,Xa=!1,pu=null,hr=null,qa=!1,pr=null,Ya=0,Do=0,mu=null,$a=-1,Ka=0;function An(){return(Et&6)!==0?Wt():$a!==-1?$a:$a=Wt()}function mr(t){return(t.mode&1)===0?1:(Et&2)!==0&&fn!==0?fn&-fn:Xg.transition!==null?(Ka===0&&(Ka=mn()),Ka):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Rf(t.type)),t)}function di(t,i,o,c){if(50<Do)throw Do=0,mu=null,Error(n(185));Jt(t,o,c),((Et&2)===0||t!==ln)&&(t===ln&&((Et&2)===0&&(ja|=o),tn===4&&gr(t,fn)),Un(t,c),o===1&&Et===0&&(i.mode&1)===0&&(ws=Wt()+500,wa&&cr()))}function Un(t,i){var o=t.callbackNode;Ct(t,i);var c=Tt(t,t===ln?fn:0);if(c===0)o!==null&&sa(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&sa(o),i===1)t.tag===0?jg(Rp.bind(null,t)):ph(Rp.bind(null,t)),Vg(function(){(Et&6)===0&&cr()}),o=null;else{switch(Tn(c)){case 1:o=j;break;case 4:o=oe;break;case 16:o=ne;break;case 536870912:o=Ne;break;default:o=ne}o=Op(o,Cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Cp(t,i){if($a=-1,Ka=0,(Et&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ts()&&t.callbackNode!==o)return null;var c=Tt(t,t===ln?fn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Za(t,c);else{i=c;var d=Et;Et|=2;var p=Np();(ln!==t||fn!==i)&&(zi=null,ws=Wt()+500,Hr(t,i));do try{fv();break}catch(I){Pp(t,I)}while(!0);Dc(),Wa.current=p,Et=d,Zt!==null?i=0:(ln=null,fn=0,i=tn)}if(i!==0){if(i===2&&(d=vt(t),d!==0&&(c=d,i=gu(t,d))),i===1)throw o=No,Hr(t,0),gr(t,c),Un(t,Wt()),o;if(i===6)gr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!uv(d)&&(i=Za(t,c),i===2&&(p=vt(t),p!==0&&(c=p,i=gu(t,p))),i===1))throw o=No,Hr(t,0),gr(t,c),Un(t,Wt()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Gr(t,In,zi);break;case 3:if(gr(t,c),(c&130023424)===c&&(i=hu+500-Wt(),10<i)){if(Tt(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){An(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Mc(Gr.bind(null,t,In,zi),i);break}Gr(t,In,zi);break;case 4:if(gr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var E=31-ke(c);p=1<<E,E=i[E],E>d&&(d=E),c&=~p}if(c=d,c=Wt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*cv(c/1960))-c,10<c){t.timeoutHandle=Mc(Gr.bind(null,t,In,zi),c);break}Gr(t,In,zi);break;case 5:Gr(t,In,zi);break;default:throw Error(n(329))}}}return Un(t,Wt()),t.callbackNode===o?Cp.bind(null,t):null}function gu(t,i){var o=Lo;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=Za(t,i),t!==2&&(i=In,In=o,i!==null&&vu(i)),t}function vu(t){In===null?In=t:In.push.apply(In,t)}function uv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!oi(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(t,i){for(i&=~fu,i&=~ja,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ke(i),c=1<<o;t[o]=-1,i&=~c}}function Rp(t){if((Et&6)!==0)throw Error(n(327));Ts();var i=Tt(t,0);if((i&1)===0)return Un(t,Wt()),null;var o=Za(t,i);if(t.tag!==0&&o===2){var c=vt(t);c!==0&&(i=c,o=gu(t,c))}if(o===1)throw o=No,Hr(t,0),gr(t,i),Un(t,Wt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Gr(t,In,zi),Un(t,Wt()),null}function xu(t,i){var o=Et;Et|=1;try{return t(i)}finally{Et=o,Et===0&&(ws=Wt()+500,wa&&cr())}}function Vr(t){pr!==null&&pr.tag===0&&(Et&6)===0&&Ts();var i=Et;Et|=1;var o=ei.transition,c=ot;try{if(ei.transition=null,ot=1,t)return t()}finally{ot=c,ei.transition=o,Et=i,(Et&6)===0&&cr()}}function _u(){Wn=Es.current,zt(Es)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,zg(o)),Zt!==null)for(o=Zt.return;o!==null;){var c=o;switch(Cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ma();break;case 3:ys(),zt(Nn),zt(gn),Vc();break;case 5:Bc(c);break;case 4:ys();break;case 13:zt(jt);break;case 19:zt(jt);break;case 10:Ic(c.type._context);break;case 22:case 23:_u()}o=o.return}if(ln=t,Zt=t=vr(t.current,null),fn=Wn=i,tn=0,No=null,fu=ja=zr=0,In=Lo=null,Or!==null){for(i=0;i<Or.length;i++)if(o=Or[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var E=p.next;p.next=d,c.next=E}o.pending=c}Or=null}return t}function Pp(t,i){do{var o=Zt;try{if(Dc(),Ia.current=ka,Ua){for(var c=Xt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ua=!1}if(Br=0,an=en=Xt=null,To=!1,bo=0,du.current=null,o===null||o.return===null){tn=1,No=i,Zt=null;break}e:{var p=t,E=o.return,I=o,B=i;if(i=fn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,ve=I,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Oe=tp(E);if(Oe!==null){Oe.flags&=-257,np(Oe,E,I,p,i),Oe.mode&1&&ep(p,ie,i),i=Oe,B=ie;var je=i.updateQueue;if(je===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else je.add(B);break e}else{if((i&1)===0){ep(p,ie,i),yu();break e}B=Error(n(426))}}else if(Gt&&I.mode&1){var Kt=tp(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),np(Kt,E,I,p,i),Nc(Ss(B,I));break e}}p=B=Ss(B,I),tn!==4&&(tn=2),Lo===null?Lo=[p]:Lo.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=Qh(p,B,i);Th(p,K);break e;case 1:I=B;var G=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(hr===null||!hr.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Jh(p,I,i);Th(p,we);break e}}p=p.return}while(p!==null)}Dp(o)}catch(Ke){i=Ke,Zt===o&&o!==null&&(Zt=o=o.return);continue}break}while(!0)}function Np(){var t=Wa.current;return Wa.current=ka,t===null?ka:t}function yu(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||(zr&268435455)===0&&(ja&268435455)===0||gr(ln,fn)}function Za(t,i){var o=Et;Et|=2;var c=Np();(ln!==t||fn!==i)&&(zi=null,Hr(t,i));do try{dv();break}catch(d){Pp(t,d)}while(!0);if(Dc(),Et=o,Wa.current=c,Zt!==null)throw Error(n(261));return ln=null,fn=0,tn}function dv(){for(;Zt!==null;)Lp(Zt)}function fv(){for(;Zt!==null&&!Zl();)Lp(Zt)}function Lp(t){var i=Fp(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,i===null?Dp(t):Zt=i,du.current=null}function Dp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=rv(o,i,Wn),o!==null){Zt=o;return}}else{if(o=sv(o,i),o!==null){o.flags&=32767,Zt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);tn===0&&(tn=5)}function Gr(t,i,o){var c=ot,d=ei.transition;try{ei.transition=null,ot=1,hv(t,i,o,c)}finally{ei.transition=d,ot=c}return null}function hv(t,i,o,c){do Ts();while(pr!==null);if((Et&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Lr(t,p),t===ln&&(Zt=ln=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||qa||(qa=!0,Op(ne,function(){return Ts(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=ei.transition,ei.transition=null;var E=ot;ot=1;var I=Et;Et|=4,du.current=null,av(t,o),Ep(o,t),Dg(yc),la=!!_c,yc=_c=null,t.current=o,lv(o),Ql(),Et=I,ot=E,ei.transition=p}else t.current=o;if(qa&&(qa=!1,pr=t,Ya=d),p=t.pendingLanes,p===0&&(hr=null),He(o.stateNode),Un(t,Wt()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Xa)throw Xa=!1,t=pu,pu=null,t;return(Ya&1)!==0&&t.tag!==0&&Ts(),p=t.pendingLanes,(p&1)!==0?t===mu?Do++:(Do=0,mu=t):Do=0,cr(),null}function Ts(){if(pr!==null){var t=Tn(Ya),i=ei.transition,o=ot;try{if(ei.transition=null,ot=16>t?16:t,pr===null)var c=!1;else{if(t=pr,pr=null,Ya=0,(Et&6)!==0)throw Error(n(331));var d=Et;for(Et|=4,Ve=t.current;Ve!==null;){var p=Ve,E=p.child;if((Ve.flags&16)!==0){var I=p.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ie=I[B];for(Ve=ie;Ve!==null;){var ve=Ve;switch(ve.tag){case 0:case 11:case 15:Po(8,ve,p)}var _e=ve.child;if(_e!==null)_e.return=ve,Ve=_e;else for(;Ve!==null;){ve=Ve;var ge=ve.sibling,Oe=ve.return;if(xp(ve),ve===ie){Ve=null;break}if(ge!==null){ge.return=Oe,Ve=ge;break}Ve=Oe}}}var je=p.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var Kt=Ye.sibling;Ye.sibling=null,Ye=Kt}while(Ye!==null)}}Ve=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,Ve=E;else e:for(;Ve!==null;){if(p=Ve,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Po(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,Ve=K;break e}Ve=p.return}}var G=t.current;for(Ve=G;Ve!==null;){E=Ve;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Ve=J;else e:for(E=G;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ga(9,I)}}catch(Ke){qt(I,I.return,Ke)}if(I===E){Ve=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Ve=we;break e}Ve=I.return}}if(Et=d,cr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Fe,t)}catch{}c=!0}return c}finally{ot=o,ei.transition=i}}return!1}function Ip(t,i,o){i=Ss(o,i),i=Qh(t,i,1),t=dr(t,i,1),i=An(),t!==null&&(Jt(t,1,i),Un(t,i))}function qt(t,i,o){if(t.tag===3)Ip(t,t,o);else for(;i!==null;){if(i.tag===3){Ip(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hr===null||!hr.has(c))){t=Ss(o,t),t=Jh(i,t,1),i=dr(i,t,1),t=An(),i!==null&&(Jt(i,1,t),Un(i,t));break}}i=i.return}}function pv(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=An(),t.pingedLanes|=t.suspendedLanes&o,ln===t&&(fn&o)===o&&(tn===4||tn===3&&(fn&130023424)===fn&&500>Wt()-hu?Hr(t,0):fu|=o),Un(t,i)}function Up(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var o=An();t=Oi(t,i),t!==null&&(Jt(t,i,o),Un(t,o))}function mv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Up(t,o)}function gv(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Up(t,o)}var Fp;Fp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Nn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,iv(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,Gt&&(i.flags&1048576)!==0&&mh(i,ba,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Va(t,i),t=i.pendingProps;var d=hs(i,gn.current);_s(i,o),d=Wc(null,i,c,t,d,o);var p=jc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(p=!0,Ea(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Oc(i),d.updater=Ba,i.stateNode=d,d._reactInternals=i,Zc(i,c,t,o),i=tu(null,i,c,!0,p,o)):(i.tag=0,Gt&&p&&Ac(i),bn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Va(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=xv(c),t=li(c,t),d){case 0:i=eu(null,i,c,t,o);break e;case 1:i=lp(null,i,c,t,o);break e;case 11:i=ip(null,i,c,t,o);break e;case 14:i=rp(null,i,c,li(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:li(c,d),eu(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:li(c,d),lp(t,i,c,d,o);case 3:e:{if(cp(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,wh(t,i),La(i,c,null,o);var E=i.memoizedState;if(c=E.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Ss(Error(n(423)),i),i=up(t,i,c,o,d);break e}else if(c!==d){d=Ss(Error(n(424)),i),i=up(t,i,c,o,d);break e}else for(Gn=or(i.stateNode.containerInfo.firstChild),Hn=i,Gt=!0,ai=null,o=Mh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),c===d){i=Bi(t,i,o);break e}bn(t,i,c,o)}i=i.child}return i;case 5:return Ah(i),t===null&&Pc(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,E=d.children,Sc(c,d)?E=null:p!==null&&Sc(c,p)&&(i.flags|=32),ap(t,i),bn(t,i,E,o),i.child;case 6:return t===null&&Pc(i),null;case 13:return dp(t,i,o);case 4:return kc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=vs(i,null,c,o):bn(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:li(c,d),ip(t,i,c,d,o);case 7:return bn(t,i,i.pendingProps,o),i.child;case 8:return bn(t,i,i.pendingProps.children,o),i.child;case 12:return bn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,E=d.value,Ot(Ra,c._currentValue),c._currentValue=E,p!==null)if(oi(p.value,E)){if(p.children===d.children&&!Nn.current){i=Bi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){E=p.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(p.tag===1){B=ki(-1,o&-o),B.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var ve=ie.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),ie.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),Uc(p.return,o,i),I.lanes|=o;break}B=B.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Uc(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}bn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,_s(i,o),d=Qn(d),c=c(d),i.flags|=1,bn(t,i,c,o),i.child;case 14:return c=i.type,d=li(c,i.pendingProps),d=li(c.type,d),rp(t,i,c,d,o);case 15:return sp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:li(c,d),Va(t,i),i.tag=1,Ln(c)?(t=!0,Ea(i)):t=!1,_s(i,o),Kh(i,c,d),Zc(i,c,d,o),tu(null,i,c,!0,t,o);case 19:return hp(t,i,o);case 22:return op(t,i,o)}throw Error(n(156,i.tag))};function Op(t,i){return ra(t,i)}function vv(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,i,o,c){return new vv(t,i,o,c)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xv(t){if(typeof t=="function")return Su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===ce)return 14}return 2}function vr(t,i){var o=t.alternate;return o===null?(o=ti(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Qa(t,i,o,c,d,p){var E=2;if(c=t,typeof t=="function")Su(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return Wr(o.children,d,p,i);case Y:E=8,d|=8;break;case C:return t=ti(12,o,i,d|2),t.elementType=C,t.lanes=p,t;case ee:return t=ti(13,o,i,d),t.elementType=ee,t.lanes=p,t;case de:return t=ti(19,o,i,d),t.elementType=de,t.lanes=p,t;case $:return Ja(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case V:E=9;break e;case se:E=11;break e;case ce:E=14;break e;case ae:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ti(E,o,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function Wr(t,i,o,c){return t=ti(7,t,c,i),t.lanes=o,t}function Ja(t,i,o,c){return t=ti(22,t,c,i),t.elementType=$,t.lanes=o,t.stateNode={isHidden:!1},t}function Mu(t,i,o){return t=ti(6,t,null,i),t.lanes=o,t}function Eu(t,i,o){return i=ti(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function _v(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function wu(t,i,o,c,d,p,E,I,B){return t=new _v(t,i,o,I,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ti(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(p),t}function yv(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function kp(t){if(!t)return lr;t=t._reactInternals;e:{if($n(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ln(o))return fh(t,o,i)}return i}function Bp(t,i,o,c,d,p,E,I,B){return t=wu(o,c,!0,t,d,p,E,I,B),t.context=kp(null),o=t.current,c=An(),d=mr(o),p=ki(c,d),p.callback=i??null,dr(o,p,d),t.current.lanes=d,Jt(t,d,c),Un(t,c),t}function el(t,i,o,c){var d=i.current,p=An(),E=mr(d);return o=kp(o),i.context===null?i.context=o:i.pendingContext=o,i=ki(p,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=dr(d,i,E),t!==null&&(di(t,d,E,p),Na(t,d,E)),E}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Tu(t,i){zp(t,i),(t=t.alternate)&&zp(t,i)}function Sv(){return null}var Vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function bu(t){this._internalRoot=t}nl.prototype.render=bu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Vr(function(){el(null,t,null,null)}),i[Di]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=xi();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ir.length&&i!==0&&i<ir[o].priority;o++);ir.splice(o,0,t),o===0&&Af(t)}};function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function Mv(t,i,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var ie=tl(E);p.call(ie)}}var E=Bp(i,c,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=E,t[Di]=E.current,vo(t.nodeType===8?t.parentNode:t),Vr(),E}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var ie=tl(B);I.call(ie)}}var B=wu(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=B,t[Di]=B.current,vo(t.nodeType===8?t.parentNode:t),Vr(function(){el(i,B,o,c)}),B}function rl(t,i,o,c,d){var p=o._reactRootContainer;if(p){var E=p;if(typeof d=="function"){var I=d;d=function(){var B=tl(E);I.call(B)}}el(i,E,t,d)}else E=Mv(o,i,t,d,c);return tl(E)}sn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ut(i.pendingLanes);o!==0&&(Nt(i,o|1),Un(i,Wt()),(Et&6)===0&&(ws=Wt()+500,cr()))}break;case 13:Vr(function(){var c=Oi(t,1);if(c!==null){var d=An();di(c,t,1,d)}}),Tu(t,1)}},on=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var o=An();di(i,t,134217728,o)}Tu(t,134217728)}},is=function(t){if(t.tag===13){var i=mr(t),o=Oi(t,i);if(o!==null){var c=An();di(o,t,i,c)}Tu(t,i)}},xi=function(){return ot},Tf=function(t,i){var o=ot;try{return ot=t,i()}finally{ot=o}},Le=function(t,i,o){switch(i){case"input":if(Vt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=Sa(c);if(!d)throw Error(n(90));$t(c),Vt(c,d)}}}break;case"textarea":M(t,o);break;case"select":i=o.value,i!=null&&yt(t,!!o.multiple,i,!1)}},it=xu,Dt=Vr;var Ev={usingClientEntryPoint:!1,Events:[yo,ds,Sa,pe,Ce,xu]},Io={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=no(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||Sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Fe=sl.inject(wv),be=sl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev,Fn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(i))throw Error(n(200));return yv(t,i,null,o)},Fn.createRoot=function(t,i){if(!Au(t))throw Error(n(299));var o=!1,c="",d=Vp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=wu(t,1,!1,null,null,o,!1,c,d),t[Di]=i.current,vo(t.nodeType===8?t.parentNode:t),new bu(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=no(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Vr(t)},Fn.hydrate=function(t,i,o){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,o)},Fn.hydrateRoot=function(t,i,o){if(!Au(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",E=Vp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Bp(i,null,t,1,o??null,d,!1,p,E),t[Di]=i.current,vo(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new nl(i)},Fn.render=function(t,i,o){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,o)},Fn.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(Vr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1},Fn.unstable_batchedUpdates=xu,Fn.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!il(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,o,!1,c)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Kp;function Lv(){if(Kp)return Pu.exports;Kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=Nv(),Pu.exports}var Zp;function Dv(){if(Zp)return ol;Zp=1;var s=Lv();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var r0=Dv(),Rn=uf();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const df="182",Iv=0,Qp=1,Uv=2,Il=1,Fv=2,Wo=3,Ar=0,kn=1,Xi=2,Yi=0,zs=1,fd=2,Jp=3,em=4,Ov=5,Qr=100,kv=101,Bv=102,zv=103,Vv=104,Hv=200,Gv=201,Wv=202,jv=203,hd=204,pd=205,Xv=206,qv=207,Yv=208,$v=209,Kv=210,Zv=211,Qv=212,Jv=213,ex=214,md=0,gd=1,vd=2,Hs=3,xd=4,_d=5,yd=6,Sd=7,s0=0,tx=1,nx=2,Ci=0,o0=1,a0=2,l0=3,c0=4,u0=5,d0=6,f0=7,h0=300,ns=301,Gs=302,Md=303,Ed=304,ql=306,wd=1e3,qi=1001,Td=1002,hn=1003,ix=1004,al=1005,Mn=1006,Du=1007,es=1008,Yn=1009,p0=1010,m0=1011,qo=1012,ff=1013,Ni=1014,bi=1015,Ki=1016,hf=1017,pf=1018,Yo=1020,g0=35902,v0=35899,x0=1021,_0=1022,mi=1023,Zi=1026,ts=1027,y0=1028,mf=1029,Ws=1030,gf=1031,vf=1033,Ul=33776,Fl=33777,Ol=33778,kl=33779,bd=35840,Ad=35841,Cd=35842,Rd=35843,Pd=36196,Nd=37492,Ld=37496,Dd=37488,Id=37489,Ud=37490,Fd=37491,Od=37808,kd=37809,Bd=37810,zd=37811,Vd=37812,Hd=37813,Gd=37814,Wd=37815,jd=37816,Xd=37817,qd=37818,Yd=37819,$d=37820,Kd=37821,Zd=36492,Qd=36494,Jd=36495,ef=36283,tf=36284,nf=36285,rf=36286,rx=3200,sx=0,ox=1,Tr="",ii="srgb",js="srgb-linear",Vl="linear",It="srgb",bs=7680,tm=519,ax=512,lx=513,cx=514,xf=515,ux=516,dx=517,_f=518,fx=519,nm=35044,im="300 es",Ai=2e3,Hl=2001;function S0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hx(){const s=Gl("canvas");return s.style.display="block",s}const rm={};function sm(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function At(...s){const e="THREE."+s.shift();console.error(e,...s)}function $o(...s){const e=s.join(" ");e in rm||(rm[e]=!0,st(...s))}function px(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=Math.PI/180,sf=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function xt(s,e,n){return Math.max(e,Math.min(n,s))}function mx(s,e){return(s%e+e)%e}function Iu(s,e,n){return(1-n)*s+n*e}function Fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,n=0){Lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ys{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,f){let m=r[a+0],h=r[a+1],x=r[a+2],v=r[a+3],y=l[u+0],S=l[u+1],w=l[u+2],b=l[u+3];if(f<=0){e[n+0]=m,e[n+1]=h,e[n+2]=x,e[n+3]=v;return}if(f>=1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=b;return}if(v!==b||m!==y||h!==S||x!==w){let _=m*y+h*S+x*w+v*b;_<0&&(y=-y,S=-S,w=-w,b=-b,_=-_);let g=1-f;if(_<.9995){const L=Math.acos(_),D=Math.sin(L);g=Math.sin(g*L)/D,f=Math.sin(f*L)/D,m=m*g+y*f,h=h*g+S*f,x=x*g+w*f,v=v*g+b*f}else{m=m*g+y*f,h=h*g+S*f,x=x*g+w*f,v=v*g+b*f;const L=1/Math.sqrt(m*m+h*h+x*x+v*v);m*=L,h*=L,x*=L,v*=L}}e[n]=m,e[n+1]=h,e[n+2]=x,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,u){const f=r[a],m=r[a+1],h=r[a+2],x=r[a+3],v=l[u],y=l[u+1],S=l[u+2],w=l[u+3];return e[n]=f*w+x*v+m*S-h*y,e[n+1]=m*w+x*y+h*v-f*S,e[n+2]=h*w+x*S+f*y-m*v,e[n+3]=x*w-f*v-m*y-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,h=f(r/2),x=f(a/2),v=f(l/2),y=m(r/2),S=m(a/2),w=m(l/2);switch(u){case"XYZ":this._x=y*x*v+h*S*w,this._y=h*S*v-y*x*w,this._z=h*x*w+y*S*v,this._w=h*x*v-y*S*w;break;case"YXZ":this._x=y*x*v+h*S*w,this._y=h*S*v-y*x*w,this._z=h*x*w-y*S*v,this._w=h*x*v+y*S*w;break;case"ZXY":this._x=y*x*v-h*S*w,this._y=h*S*v+y*x*w,this._z=h*x*w+y*S*v,this._w=h*x*v-y*S*w;break;case"ZYX":this._x=y*x*v-h*S*w,this._y=h*S*v+y*x*w,this._z=h*x*w-y*S*v,this._w=h*x*v+y*S*w;break;case"YZX":this._x=y*x*v+h*S*w,this._y=h*S*v+y*x*w,this._z=h*x*w-y*S*v,this._w=h*x*v-y*S*w;break;case"XZY":this._x=y*x*v-h*S*w,this._y=h*S*v-y*x*w,this._z=h*x*w+y*S*v,this._w=h*x*v+y*S*w;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],f=n[5],m=n[9],h=n[2],x=n[6],v=n[10],y=r+f+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-m)*S,this._y=(l-h)*S,this._z=(u-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(x-m)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+h)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-h)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-a)/S,this._x=(l+h)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,f=n._x,m=n._y,h=n._z,x=n._w;return this._x=r*x+u*f+a*h-l*m,this._y=a*x+u*m+l*f-r*h,this._z=l*x+u*h+r*m-a*f,this._w=u*x-r*f-a*m-l*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let m=1-n;if(f<.9995){const h=Math.acos(f),x=Math.sin(h);m=Math.sin(m*h)/x,n=Math.sin(n*h)/x,this._x=this._x*m+r*n,this._y=this._y*m+a*n,this._z=this._z*m+l*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+a*n,this._z=this._z*m+l*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,m=e.w,h=2*(u*a-f*r),x=2*(f*n-l*a),v=2*(l*r-u*n);return this.x=n+m*h+u*v-f*x,this.y=r+m*x+f*h-l*v,this.z=a+m*v+l*x-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,f=n.y,m=n.z;return this.x=a*m-l*f,this.y=l*u-r*m,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new Q,om=new Ys;class ct{constructor(e,n,r,a,l,u,f,m,h){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,m,h)}set(e,n,r,a,l,u,f,m,h){const x=this.elements;return x[0]=e,x[1]=a,x[2]=f,x[3]=n,x[4]=l,x[5]=m,x[6]=r,x[7]=u,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[3],m=r[6],h=r[1],x=r[4],v=r[7],y=r[2],S=r[5],w=r[8],b=a[0],_=a[3],g=a[6],L=a[1],D=a[4],P=a[7],U=a[2],O=a[5],k=a[8];return l[0]=u*b+f*L+m*U,l[3]=u*_+f*D+m*O,l[6]=u*g+f*P+m*k,l[1]=h*b+x*L+v*U,l[4]=h*_+x*D+v*O,l[7]=h*g+x*P+v*k,l[2]=y*b+S*L+w*U,l[5]=y*_+S*D+w*O,l[8]=y*g+S*P+w*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8];return n*u*x-n*f*h-r*l*x+r*f*m+a*l*h-a*u*m}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8],v=x*u-f*h,y=f*m-x*l,S=h*l-u*m,w=n*v+r*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=v*b,e[1]=(a*h-x*r)*b,e[2]=(f*r-a*u)*b,e[3]=y*b,e[4]=(x*n-a*m)*b,e[5]=(a*l-f*n)*b,e[6]=S*b,e[7]=(r*m-h*n)*b,e[8]=(u*n-r*l)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,f){const m=Math.cos(l),h=Math.sin(l);return this.set(r*m,r*h,-r*(m*u+h*f)+u+e,-a*h,a*m,-a*(-h*u+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Fu.makeScale(e,n)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new ct,am=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gx(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Tr?Vl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:r,transfer:Vl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:It,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),s}const wt=gx();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class vx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=Gl("canvas")),As.width=e.width,As.height=e.height;const a=As.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=$i(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor($i(n[r]/255)*255):n[r]=$i(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xx=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Ou(a[u].image)):l.push(Ou(a[u]))}else l=Ou(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Ou(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let _x=0;const ku=new Q;class Pn extends qs{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=qi,a=qi,l=Mn,u=es,f=mi,m=Yn,h=Pn.DEFAULT_ANISOTROPY,x=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Zo(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ku).x}get height(){return this.source.getSize(ku).y}get depth(){return this.source.getSize(ku).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=h0;Pn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,n=0,r=0,a=1){Yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const m=e.elements,h=m[0],x=m[4],v=m[8],y=m[1],S=m[5],w=m[9],b=m[2],_=m[6],g=m[10];if(Math.abs(x-y)<.01&&Math.abs(v-b)<.01&&Math.abs(w-_)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+b)<.1&&Math.abs(w+_)<.1&&Math.abs(h+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(h+1)/2,P=(S+1)/2,U=(g+1)/2,O=(x+y)/4,k=(v+b)/4,Y=(w+_)/4;return D>P&&D>U?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=O/r,l=k/r):P>U?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=O/a,l=Y/a):U<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),r=k/l,a=Y/l),this.set(r,a,l,n),this}let L=Math.sqrt((_-w)*(_-w)+(v-b)*(v-b)+(y-x)*(y-x));return Math.abs(L)<.001&&(L=1),this.x=(_-w)/L,this.y=(v-b)/L,this.z=(y-x)/L,this.w=Math.acos((h+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yx extends qs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n);const a={width:e,height:n,depth:r.depth},l=new Pn(a);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new yf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends yx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class M0 extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sx extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(l,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),cl.subVectors(this.max,Oo),Cs.subVectors(e.a,Oo),Rs.subVectors(e.b,Oo),Ps.subVectors(e.c,Oo),_r.subVectors(Rs,Cs),yr.subVectors(Ps,Rs),jr.subVectors(Cs,Ps);let n=[0,-_r.z,_r.y,0,-yr.z,yr.y,0,-jr.z,jr.y,_r.z,0,-_r.x,yr.z,0,-yr.x,jr.z,0,-jr.x,-_r.y,_r.x,0,-yr.y,yr.x,0,-jr.y,jr.x,0];return!Bu(n,Cs,Rs,Ps,cl)||(n=[1,0,0,0,1,0,0,0,1],!Bu(n,Cs,Rs,Ps,cl))?!1:(ul.crossVectors(_r,yr),n=[ul.x,ul.y,ul.z],Bu(n,Cs,Rs,Ps,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],fi=new Q,ll=new Qo,Cs=new Q,Rs=new Q,Ps=new Q,_r=new Q,yr=new Q,jr=new Q,Oo=new Q,cl=new Q,ul=new Q,Xr=new Q;function Bu(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Xr.fromArray(s,l);const f=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),m=e.dot(Xr),h=n.dot(Xr),x=r.dot(Xr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>f)return!1}return!0}const Mx=new Qo,ko=new Q,zu=new Q;class Jo{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Mx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(ko,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(zu)),this.expandByPoint(ko.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new Q,Vu=new Q,dl=new Q,Sr=new Q,Hu=new Q,fl=new Q,Gu=new Q;class Sf{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Vu.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(Vu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(dl),f=Sr.dot(this.direction),m=-Sr.dot(dl),h=Sr.lengthSq(),x=Math.abs(1-u*u);let v,y,S,w;if(x>0)if(v=u*m-f,y=u*f-m,w=l*x,v>=0)if(y>=-w)if(y<=w){const b=1/x;v*=b,y*=b,S=v*(v+u*y+2*f)+y*(u*v+y+2*m)+h}else y=l,v=Math.max(0,-(u*y+f)),S=-v*v+y*(y+2*m)+h;else y=-l,v=Math.max(0,-(u*y+f)),S=-v*v+y*(y+2*m)+h;else y<=-w?(v=Math.max(0,-(-u*l+f)),y=v>0?-l:Math.min(Math.max(-l,-m),l),S=-v*v+y*(y+2*m)+h):y<=w?(v=0,y=Math.min(Math.max(-l,-m),l),S=y*(y+2*m)+h):(v=Math.max(0,-(u*l+f)),y=v>0?l:Math.min(Math.max(-l,-m),l),S=-v*v+y*(y+2*m)+h);else y=u>0?-l:l,v=Math.max(0,-(u*y+f)),S=-v*v+y*(y+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Vu).addScaledVector(dl,y),S}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,f,m;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return h>=0?(r=(e.min.x-y.x)*h,a=(e.max.x-y.x)*h):(r=(e.max.x-y.x)*h,a=(e.min.x-y.x)*h),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),v>=0?(f=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),r>m||f>a)||((f>r||r!==r)&&(r=f),(m<a||a!==a)&&(a=m),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,r,a,l){Hu.subVectors(n,e),fl.subVectors(r,e),Gu.crossVectors(Hu,fl);let u=this.direction.dot(Gu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Sr.subVectors(this.origin,e);const m=f*this.direction.dot(fl.crossVectors(Sr,fl));if(m<0)return null;const h=f*this.direction.dot(Hu.cross(Sr));if(h<0||m+h>u)return null;const x=-f*Sr.dot(Gu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,n,r,a,l,u,f,m,h,x,v,y,S,w,b,_){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,m,h,x,v,y,S,w,b,_)}set(e,n,r,a,l,u,f,m,h,x,v,y,S,w,b,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=u,g[9]=f,g[13]=m,g[2]=h,g[6]=x,g[10]=v,g[14]=y,g[3]=S,g[7]=w,g[11]=b,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(a),h=Math.sin(a),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*v,w=f*x,b=f*v;n[0]=m*x,n[4]=-m*v,n[8]=h,n[1]=S+w*h,n[5]=y-b*h,n[9]=-f*m,n[2]=b-y*h,n[6]=w+S*h,n[10]=u*m}else if(e.order==="YXZ"){const y=m*x,S=m*v,w=h*x,b=h*v;n[0]=y+b*f,n[4]=w*f-S,n[8]=u*h,n[1]=u*v,n[5]=u*x,n[9]=-f,n[2]=S*f-w,n[6]=b+y*f,n[10]=u*m}else if(e.order==="ZXY"){const y=m*x,S=m*v,w=h*x,b=h*v;n[0]=y-b*f,n[4]=-u*v,n[8]=w+S*f,n[1]=S+w*f,n[5]=u*x,n[9]=b-y*f,n[2]=-u*h,n[6]=f,n[10]=u*m}else if(e.order==="ZYX"){const y=u*x,S=u*v,w=f*x,b=f*v;n[0]=m*x,n[4]=w*h-S,n[8]=y*h+b,n[1]=m*v,n[5]=b*h+y,n[9]=S*h-w,n[2]=-h,n[6]=f*m,n[10]=u*m}else if(e.order==="YZX"){const y=u*m,S=u*h,w=f*m,b=f*h;n[0]=m*x,n[4]=b-y*v,n[8]=w*v+S,n[1]=v,n[5]=u*x,n[9]=-f*x,n[2]=-h*x,n[6]=S*v+w,n[10]=y-b*v}else if(e.order==="XZY"){const y=u*m,S=u*h,w=f*m,b=f*h;n[0]=m*x,n[4]=-v,n[8]=h*x,n[1]=y*v+b,n[5]=u*x,n[9]=S*v-w,n[2]=w*v-S,n[6]=f*x,n[10]=b*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ex,e,wx)}lookAt(e,n,r){const a=this.elements;return jn.subVectors(e,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Mr.crossVectors(r,jn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Mr.crossVectors(r,jn)),Mr.normalize(),hl.crossVectors(jn,Mr),a[0]=Mr.x,a[4]=hl.x,a[8]=jn.x,a[1]=Mr.y,a[5]=hl.y,a[9]=jn.y,a[2]=Mr.z,a[6]=hl.z,a[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[4],m=r[8],h=r[12],x=r[1],v=r[5],y=r[9],S=r[13],w=r[2],b=r[6],_=r[10],g=r[14],L=r[3],D=r[7],P=r[11],U=r[15],O=a[0],k=a[4],Y=a[8],C=a[12],R=a[1],V=a[5],se=a[9],ee=a[13],de=a[2],ce=a[6],ae=a[10],$=a[14],q=a[3],fe=a[7],re=a[11],F=a[15];return l[0]=u*O+f*R+m*de+h*q,l[4]=u*k+f*V+m*ce+h*fe,l[8]=u*Y+f*se+m*ae+h*re,l[12]=u*C+f*ee+m*$+h*F,l[1]=x*O+v*R+y*de+S*q,l[5]=x*k+v*V+y*ce+S*fe,l[9]=x*Y+v*se+y*ae+S*re,l[13]=x*C+v*ee+y*$+S*F,l[2]=w*O+b*R+_*de+g*q,l[6]=w*k+b*V+_*ce+g*fe,l[10]=w*Y+b*se+_*ae+g*re,l[14]=w*C+b*ee+_*$+g*F,l[3]=L*O+D*R+P*de+U*q,l[7]=L*k+D*V+P*ce+U*fe,l[11]=L*Y+D*se+P*ae+U*re,l[15]=L*C+D*ee+P*$+U*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],m=e[9],h=e[13],x=e[2],v=e[6],y=e[10],S=e[14],w=e[3],b=e[7],_=e[11],g=e[15],L=m*S-h*y,D=f*S-h*v,P=f*y-m*v,U=u*S-h*x,O=u*y-m*x,k=u*v-f*x;return n*(b*L-_*D+g*P)-r*(w*L-_*U+g*O)+a*(w*D-b*U+g*k)-l*(w*P-b*O+_*k)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8],v=e[9],y=e[10],S=e[11],w=e[12],b=e[13],_=e[14],g=e[15],L=v*_*h-b*y*h+b*m*S-f*_*S-v*m*g+f*y*g,D=w*y*h-x*_*h-w*m*S+u*_*S+x*m*g-u*y*g,P=x*b*h-w*v*h+w*f*S-u*b*S-x*f*g+u*v*g,U=w*v*m-x*b*m-w*f*y+u*b*y+x*f*_-u*v*_,O=n*L+r*D+a*P+l*U;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=L*k,e[1]=(b*y*l-v*_*l-b*a*S+r*_*S+v*a*g-r*y*g)*k,e[2]=(f*_*l-b*m*l+b*a*h-r*_*h-f*a*g+r*m*g)*k,e[3]=(v*m*l-f*y*l-v*a*h+r*y*h+f*a*S-r*m*S)*k,e[4]=D*k,e[5]=(x*_*l-w*y*l+w*a*S-n*_*S-x*a*g+n*y*g)*k,e[6]=(w*m*l-u*_*l-w*a*h+n*_*h+u*a*g-n*m*g)*k,e[7]=(u*y*l-x*m*l+x*a*h-n*y*h-u*a*S+n*m*S)*k,e[8]=P*k,e[9]=(w*v*l-x*b*l-w*r*S+n*b*S+x*r*g-n*v*g)*k,e[10]=(u*b*l-w*f*l+w*r*h-n*b*h-u*r*g+n*f*g)*k,e[11]=(x*f*l-u*v*l-x*r*h+n*v*h+u*r*S-n*f*S)*k,e[12]=U*k,e[13]=(x*b*a-w*v*a+w*r*y-n*b*y-x*r*_+n*v*_)*k,e[14]=(w*f*a-u*b*a-w*r*m+n*b*m+u*r*_-n*f*_)*k,e[15]=(u*v*a-x*f*a+x*r*m-n*v*m-u*r*y+n*f*y)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,f=e.y,m=e.z,h=l*u,x=l*f;return this.set(h*u+r,h*f-a*m,h*m+a*f,0,h*f+a*m,x*f+r,x*m-a*u,0,h*m-a*f,x*m+a*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,f=n._z,m=n._w,h=l+l,x=u+u,v=f+f,y=l*h,S=l*x,w=l*v,b=u*x,_=u*v,g=f*v,L=m*h,D=m*x,P=m*v,U=r.x,O=r.y,k=r.z;return a[0]=(1-(b+g))*U,a[1]=(S+P)*U,a[2]=(w-D)*U,a[3]=0,a[4]=(S-P)*O,a[5]=(1-(y+g))*O,a[6]=(_+L)*O,a[7]=0,a[8]=(w+D)*k,a[9]=(_-L)*k,a[10]=(1-(y+b))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let l=Ns.set(a[0],a[1],a[2]).length();const u=Ns.set(a[4],a[5],a[6]).length(),f=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),hi.copy(this);const h=1/l,x=1/u,v=1/f;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=x,hi.elements[5]*=x,hi.elements[6]*=x,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,n.setFromRotationMatrix(hi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,n,r,a,l,u,f=Ai,m=!1){const h=this.elements,x=2*l/(n-e),v=2*l/(r-a),y=(n+e)/(n-e),S=(r+a)/(r-a);let w,b;if(m)w=l/(u-l),b=u*l/(u-l);else if(f===Ai)w=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===Hl)w=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,u,f=Ai,m=!1){const h=this.elements,x=2/(n-e),v=2/(r-a),y=-(n+e)/(n-e),S=-(r+a)/(r-a);let w,b;if(m)w=1/(u-l),b=u/(u-l);else if(f===Ai)w=-2/(u-l),b=-(u+l)/(u-l);else if(f===Hl)w=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=0,h[12]=y,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=w,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new Q,hi=new kt,Ex=new Q(0,0,0),wx=new Q(1,1,1),Mr=new Q,hl=new Q,jn=new Q,cm=new kt,um=new Ys;class Qi{constructor(e=0,n=0,r=0,a=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],m=a[1],h=a[5],x=a[9],v=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";let E0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tx=0;const dm=new Q,Ls=new Ys,Gi=new kt,pl=new Q,Bo=new Q,bx=new Q,Ax=new Ys,fm=new Q(1,0,0),hm=new Q(0,1,0),pm=new Q(0,0,1),mm={type:"added"},Cx={type:"removed"},Ds={type:"childadded",child:null},Wu={type:"childremoved",child:null};class pn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new Q,n=new Qi,r=new Ys,a=new Q(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new kt},normalMatrix:{value:new ct}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?pl.copy(e):pl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Bo,pl,this.up):Gi.lookAt(pl,Bo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cx),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const v=m[h];l(e.shapes,v)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,h=this.material.length;m<h;m++)f.push(l(e.materials,this.material[m]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];a.animations.push(l(e.animations,m))}}if(n){const f=u(e.geometries),m=u(e.materials),h=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(f){const m=[];for(const h in f){const x=f[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}pn.DEFAULT_UP=new Q(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new Q,Wi=new Q,ju=new Q,ji=new Q,Is=new Q,Us=new Q,gm=new Q,Xu=new Q,qu=new Q,Yu=new Q,$u=new Yt,Ku=new Yt,Zu=new Yt;class ri{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),pi.subVectors(e,n),a.cross(pi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){pi.subVectors(a,n),Wi.subVectors(r,n),ju.subVectors(e,n);const u=pi.dot(pi),f=pi.dot(Wi),m=pi.dot(ju),h=Wi.dot(Wi),x=Wi.dot(ju),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(h*m-f*x)*y,w=(u*x-f*m)*y;return l.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,n,r,a,l,u,f,m){return this.getBarycoord(e,n,r,a,ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,ji.x),m.addScaledVector(u,ji.y),m.addScaledVector(f,ji.z),m)}static getInterpolatedAttribute(e,n,r,a,l,u){return $u.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),$u.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector($u,l.x),u.addScaledVector(Ku,l.y),u.addScaledVector(Zu,l.z),u}static isFrontFacing(e,n,r,a){return pi.subVectors(r,n),Wi.subVectors(e,n),pi.cross(Wi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),pi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ri.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,f;Is.subVectors(a,r),Us.subVectors(l,r),Xu.subVectors(e,r);const m=Is.dot(Xu),h=Us.dot(Xu);if(m<=0&&h<=0)return n.copy(r);qu.subVectors(e,a);const x=Is.dot(qu),v=Us.dot(qu);if(x>=0&&v<=x)return n.copy(a);const y=m*v-x*h;if(y<=0&&m>=0&&x<=0)return u=m/(m-x),n.copy(r).addScaledVector(Is,u);Yu.subVectors(e,l);const S=Is.dot(Yu),w=Us.dot(Yu);if(w>=0&&S<=w)return n.copy(l);const b=S*h-m*w;if(b<=0&&h>=0&&w<=0)return f=h/(h-w),n.copy(r).addScaledVector(Us,f);const _=x*w-S*v;if(_<=0&&v-x>=0&&S-w>=0)return gm.subVectors(l,a),f=(v-x)/(v-x+(S-w)),n.copy(a).addScaledVector(gm,f);const g=1/(_+b+y);return u=b*g,f=y*g,n.copy(r).addScaledVector(Is,u).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Qu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=wt.workingColorSpace){if(e=mx(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Qu(u,l,e+1/3),this.g=Qu(u,l,e),this.b=Qu(u,l,e-1/3)}return wt.colorSpaceToWorking(this,a),this}setStyle(e,n=ii){function r(l){l!==void 0&&parseFloat(l)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const r=w0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return wt.workingToColorSpace(Sn.copy(this),e),Math.round(xt(Sn.r*255,0,255))*65536+Math.round(xt(Sn.g*255,0,255))*256+Math.round(xt(Sn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(Sn.copy(this),n);const r=Sn.r,a=Sn.g,l=Sn.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let m,h;const x=(f+u)/2;if(f===u)m=0,h=0;else{const v=u-f;switch(h=x<=.5?v/(u+f):v/(2-u-f),u){case r:m=(a-l)/v+(a<l?6:0);break;case a:m=(l-r)/v+2;break;case l:m=(r-a)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ii){wt.workingToColorSpace(Sn.copy(this),e);const n=Sn.r,r=Sn.g,a=Sn.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(ml);const r=Iu(Er.h,ml.h,n),a=Iu(Er.s,ml.s,n),l=Iu(Er.l,ml.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Rt;Rt.NAMES=w0;let Rx=0;class $s extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=zs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=pd,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hd&&(r.blendSrc=this.blendSrc),this.blendDst!==pd&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class T0 extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new Q,gl=new Lt;let Px=0;class Pi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Px++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=nm,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),a=On(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),a=On(a,this.array),l=On(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class b0 extends Pi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class A0 extends Pi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class En extends Pi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Nx=0;const ni=new kt,Ju=new pn,Fs=new Q,Xn=new Qo,zo=new Qo,un=new Q;class Bn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S0(e)?A0:b0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,r){return ni.makeTranslation(e,n,r),this.applyMatrix4(ni),this}scale(e,n,r){return ni.makeScale(e,n,r),this.applyMatrix4(ni),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new En(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];zo.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(Xn.min,zo.min),Xn.expandByPoint(un),un.addVectors(Xn.max,zo.max),Xn.expandByPoint(un)):(Xn.expandByPoint(zo.min),Xn.expandByPoint(zo.max))}Xn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(un));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],m=this.morphTargetsRelative;for(let h=0,x=f.count;h<x;h++)un.fromBufferAttribute(f,h),m&&(Fs.fromBufferAttribute(e,h),un.add(Fs)),a=Math.max(a,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],m=[];for(let Y=0;Y<r.count;Y++)f[Y]=new Q,m[Y]=new Q;const h=new Q,x=new Q,v=new Q,y=new Lt,S=new Lt,w=new Lt,b=new Q,_=new Q;function g(Y,C,R){h.fromBufferAttribute(r,Y),x.fromBufferAttribute(r,C),v.fromBufferAttribute(r,R),y.fromBufferAttribute(l,Y),S.fromBufferAttribute(l,C),w.fromBufferAttribute(l,R),x.sub(h),v.sub(h),S.sub(y),w.sub(y);const V=1/(S.x*w.y-w.x*S.y);isFinite(V)&&(b.copy(x).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(V),_.copy(v).multiplyScalar(S.x).addScaledVector(x,-w.x).multiplyScalar(V),f[Y].add(b),f[C].add(b),f[R].add(b),m[Y].add(_),m[C].add(_),m[R].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,C=L.length;Y<C;++Y){const R=L[Y],V=R.start,se=R.count;for(let ee=V,de=V+se;ee<de;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new Q,P=new Q,U=new Q,O=new Q;function k(Y){U.fromBufferAttribute(a,Y),O.copy(U);const C=f[Y];D.copy(C),D.sub(U.multiplyScalar(U.dot(C))).normalize(),P.crossVectors(O,C);const V=P.dot(m[Y])<0?-1:1;u.setXYZW(Y,D.x,D.y,D.z,V)}for(let Y=0,C=L.length;Y<C;++Y){const R=L[Y],V=R.start,se=R.count;for(let ee=V,de=V+se;ee<de;ee+=3)k(e.getX(ee+0)),k(e.getX(ee+1)),k(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new Q,l=new Q,u=new Q,f=new Q,m=new Q,h=new Q,x=new Q,v=new Q;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),b=e.getX(y+1),_=e.getX(y+2);a.fromBufferAttribute(n,w),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),x.subVectors(u,l),v.subVectors(a,l),x.cross(v),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.fromBufferAttribute(r,_),f.add(x),m.add(x),h.add(x),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(_,h.x,h.y,h.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),x.subVectors(u,l),v.subVectors(a,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(f,m){const h=f.array,x=f.itemSize,v=f.normalized,y=new h.constructor(m.length*x);let S=0,w=0;for(let b=0,_=m.length;b<_;b++){f.isInterleavedBufferAttribute?S=m[b]*f.data.stride+f.offset:S=m[b]*x;for(let g=0;g<x;g++)y[w++]=h[S++]}return new Pi(y,x,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,r=this.index.array,a=this.attributes;for(const f in a){const m=a[f],h=e(m,r);n.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const m=[],h=l[f];for(let x=0,v=h.length;x<v;x++){const y=h[x],S=e(y,r);m.push(S)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const a={};let l=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let v=0,y=h.length;v<y;v++){const S=h[v];x.push(S.toJSON(e.data))}x.length>0&&(a[m]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const h in a){const x=a[h];this.setAttribute(h,x.clone(n))}const l=e.morphAttributes;for(const h in l){const x=[],v=l[h];for(let y=0,S=v.length;y<S;y++)x.push(v[y].clone(n));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,x=u.length;h<x;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new kt,qr=new Sf,vl=new Jo,xm=new Q,xl=new Q,_l=new Q,yl=new Q,ed=new Q,Sl=new Q,_m=new Q,Ml=new Q;class Li extends pn{constructor(e=new Bn,n=new T0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Sl.set(0,0,0);for(let m=0,h=l.length;m<h;m++){const x=f[m],v=l[m];x!==0&&(ed.fromBufferAttribute(v,e),u?Sl.addScaledVector(ed,x):Sl.addScaledVector(ed.sub(n),x))}n.add(Sl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),qr.copy(e.ray).recast(e.near),!(vl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(vl,xm)===null||qr.origin.distanceToSquared(xm)>(e.far-e.near)**2))&&(vm.copy(l).invert(),qr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,h=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,b=y.length;w<b;w++){const _=y[w],g=u[_.materialIndex],L=Math.max(_.start,S.start),D=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let P=L,U=D;P<U;P+=3){const O=f.getX(P),k=f.getX(P+1),Y=f.getX(P+2);a=El(this,g,e,r,h,x,v,O,k,Y),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let _=w,g=b;_<g;_+=3){const L=f.getX(_),D=f.getX(_+1),P=f.getX(_+2);a=El(this,u,e,r,h,x,v,L,D,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(m!==void 0)if(Array.isArray(u))for(let w=0,b=y.length;w<b;w++){const _=y[w],g=u[_.materialIndex],L=Math.max(_.start,S.start),D=Math.min(m.count,Math.min(_.start+_.count,S.start+S.count));for(let P=L,U=D;P<U;P+=3){const O=P,k=P+1,Y=P+2;a=El(this,g,e,r,h,x,v,O,k,Y),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let _=w,g=b;_<g;_+=3){const L=_,D=_+1,P=_+2;a=El(this,u,e,r,h,x,v,L,D,P),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function Lx(s,e,n,r,a,l,u,f){let m;if(e.side===kn?m=r.intersectTriangle(u,l,a,!0,f):m=r.intersectTriangle(a,l,u,e.side===Ar,f),m===null)return null;Ml.copy(f),Ml.applyMatrix4(s.matrixWorld);const h=n.ray.origin.distanceTo(Ml);return h<n.near||h>n.far?null:{distance:h,point:Ml.clone(),object:s}}function El(s,e,n,r,a,l,u,f,m,h){s.getVertexPosition(f,xl),s.getVertexPosition(m,_l),s.getVertexPosition(h,yl);const x=Lx(s,e,n,r,xl,_l,yl,_m);if(x){const v=new Q;ri.getBarycoord(_m,xl,_l,yl,v),a&&(x.uv=ri.getInterpolatedAttribute(a,f,m,h,v,new Lt)),l&&(x.uv1=ri.getInterpolatedAttribute(l,f,m,h,v,new Lt)),u&&(x.normal=ri.getInterpolatedAttribute(u,f,m,h,v,new Q),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:f,b:m,c:h,normal:new Q,materialIndex:0};ri.getNormal(xl,_l,yl,y.normal),x.face=y,x.barycoord=v}return x}class Ks extends Bn{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const m=[],h=[],x=[],v=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,u,l,0),w("z","y","x",1,-1,r,n,-e,u,l,1),w("x","z","y",1,1,e,r,n,a,u,2),w("x","z","y",1,-1,e,r,-n,a,u,3),w("x","y","z",1,-1,e,n,r,a,l,4),w("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(m),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(v,2));function w(b,_,g,L,D,P,U,O,k,Y,C){const R=P/k,V=U/Y,se=P/2,ee=U/2,de=O/2,ce=k+1,ae=Y+1;let $=0,q=0;const fe=new Q;for(let re=0;re<ae;re++){const F=re*V-ee;for(let X=0;X<ce;X++){const Ee=X*R-se;fe[b]=Ee*L,fe[_]=F*D,fe[g]=de,h.push(fe.x,fe.y,fe.z),fe[b]=0,fe[_]=0,fe[g]=O>0?1:-1,x.push(fe.x,fe.y,fe.z),v.push(X/k),v.push(1-re/Y),$+=1}}for(let re=0;re<Y;re++)for(let F=0;F<k;F++){const X=y+F+ce*re,Ee=y+F+ce*(re+1),Re=y+(F+1)+ce*(re+1),Ge=y+(F+1)+ce*re;m.push(X,Ee,Ge),m.push(Ee,Re,Ge),q+=6}f.addGroup(S,q,C),S+=q,y+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Cn(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const a in r)e[a]=r[a]}return e}function Dx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function C0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Ix={clone:Xs,merge:Cn};var Ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ux,this.fragmentShader=Fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class R0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new Q,ym=new Lt,Sm=new Lt;class qn extends R0{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;l+=u.offsetX*a/m,n-=u.offsetY*r/h,a*=u.width/m,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,ks=1;class Ox extends pn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Os,ks,e,n);a.layers=this.layers,this.add(a);const l=new qn(Os,ks,e,n);l.layers=this.layers,this.add(l);const u=new qn(Os,ks,e,n);u.layers=this.layers,this.add(u);const f=new qn(Os,ks,e,n);f.layers=this.layers,this.add(f);const m=new qn(Os,ks,e,n);m.layers=this.layers,this.add(m);const h=new qn(Os,ks,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,f,m]=n;for(const h of n)this.remove(h);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,h,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,m),e.setRenderTarget(r,4,a),e.render(n,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),e.render(n,x),e.setRenderTarget(v,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class P0 extends Pn{constructor(e=[],n=ns,r,a,l,u,f,m,h,x){super(e,n,r,a,l,u,f,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N0 extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new P0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ks(5,5,5),l=new gi({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Yi});l.uniforms.tEquirect.value=n;const u=new Li(a,l),f=n.minFilter;return n.minFilter===es&&(n.minFilter=Mn),new Ox(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}class jo extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kx={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const f=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const b of e.hand.values()){const _=n.getJointPose(b,r),g=this._getHandJoint(h,b);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],y=x.position.distanceTo(v.position),S=.02,w=.005;h.inputState.pinching&&y>S+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=S-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return f!==null&&(f.visible=a!==null),m!==null&&(m.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new jo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Mm extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Bx extends Pn{constructor(e=null,n=1,r=1,a,l,u,f,m,h=hn,x=hn,v,y){super(null,u,f,m,h,x,a,l,v,y),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nd=new Q,zx=new Q,Vx=new ct;class Zr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=nd.subVectors(r,n).cross(zx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(nd),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Vx.getNormalMatrix(e),a=this.coplanarPoint(nd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Jo,Hx=new Lt(.5,.5),wl=new Q;class Mf{constructor(e=new Zr,n=new Zr,r=new Zr,a=new Zr,l=new Zr,u=new Zr){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ai,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],h=l[3],x=l[4],v=l[5],y=l[6],S=l[7],w=l[8],b=l[9],_=l[10],g=l[11],L=l[12],D=l[13],P=l[14],U=l[15];if(a[0].setComponents(h-u,S-x,g-w,U-L).normalize(),a[1].setComponents(h+u,S+x,g+w,U+L).normalize(),a[2].setComponents(h+f,S+v,g+b,U+D).normalize(),a[3].setComponents(h-f,S-v,g-b,U-D).normalize(),r)a[4].setComponents(m,y,_,P).normalize(),a[5].setComponents(h-m,S-y,g-_,U-P).normalize();else if(a[4].setComponents(h-m,S-y,g-_,U-P).normalize(),n===Ai)a[5].setComponents(h+m,S+y,g+_,U+P).normalize();else if(n===Hl)a[5].setComponents(m,y,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=Hx.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class L0 extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new Q,jl=new Q,Em=new kt,Vo=new Sf,Tl=new Jo,id=new Q,wm=new Q;class Gx extends pn{constructor(e=new Bn,n=new L0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)Wl.fromBufferAttribute(n,a-1),jl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Wl.distanceTo(jl);e.setAttribute("lineDistance",new En(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(a),Tl.radius+=l,e.ray.intersectsSphere(Tl)===!1)return;Em.copy(a).invert(),Vo.copy(e.ray).applyMatrix4(Em);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,h=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const S=Math.max(0,u.start),w=Math.min(x.count,u.start+u.count);for(let b=S,_=w-1;b<_;b+=h){const g=x.getX(b),L=x.getX(b+1),D=bl(this,e,Vo,m,g,L,b);D&&n.push(D)}if(this.isLineLoop){const b=x.getX(w-1),_=x.getX(S),g=bl(this,e,Vo,m,b,_,w-1);g&&n.push(g)}}else{const S=Math.max(0,u.start),w=Math.min(y.count,u.start+u.count);for(let b=S,_=w-1;b<_;b+=h){const g=bl(this,e,Vo,m,b,b+1,b);g&&n.push(g)}if(this.isLineLoop){const b=bl(this,e,Vo,m,w-1,S,w-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function bl(s,e,n,r,a,l,u){const f=s.geometry.attributes.position;if(Wl.fromBufferAttribute(f,a),jl.fromBufferAttribute(f,l),n.distanceSqToSegment(Wl,jl,id,wm)>r)return;id.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(id);if(!(h<e.near||h>e.far))return{distance:h,point:wm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Tm=new Q,bm=new Q;class Wx extends Gx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)Tm.fromBufferAttribute(n,a),bm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Tm.distanceTo(bm);e.setAttribute("lineDistance",new En(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D0 extends $s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Am=new kt,of=new Sf,Al=new Jo,Cl=new Q;class jx extends pn{constructor(e=new Bn,n=new D0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(a),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;Am.copy(a).invert(),of.copy(e.ray).applyMatrix4(Am);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,h=r.index,v=r.attributes.position;if(h!==null){const y=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let w=y,b=S;w<b;w++){const _=h.getX(w);Cl.fromBufferAttribute(v,_),Cm(Cl,_,m,a,e,n,this)}}else{const y=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let w=y,b=S;w<b;w++)Cl.fromBufferAttribute(v,w),Cm(Cl,w,m,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Cm(s,e,n,r,a,l,u){const f=of.distanceSqToPoint(s);if(f<n){const m=new Q;of.closestPointToPoint(s,m),m.applyMatrix4(r);const h=a.ray.origin.distanceTo(m);if(h<a.near||h>a.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ko extends Pn{constructor(e,n,r=Ni,a,l,u,f=hn,m=hn,h,x=Zi,v=1){if(x!==Zi&&x!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:n,depth:v};super(y,a,l,u,f,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Xx extends Ko{constructor(e,n=Ni,r=ns,a,l,u=hn,f=hn,m,h=Zi){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,n,r,a,l,u,f,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class I0 extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Rl=new Q,Pl=new Q,rd=new Q,Nl=new ri;class qx extends Bn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const a=Math.pow(10,4),l=Math.cos(Bl*n),u=e.getIndex(),f=e.getAttribute("position"),m=u?u.count:f.count,h=[0,0,0],x=["a","b","c"],v=new Array(3),y={},S=[];for(let w=0;w<m;w+=3){u?(h[0]=u.getX(w),h[1]=u.getX(w+1),h[2]=u.getX(w+2)):(h[0]=w,h[1]=w+1,h[2]=w+2);const{a:b,b:_,c:g}=Nl;if(b.fromBufferAttribute(f,h[0]),_.fromBufferAttribute(f,h[1]),g.fromBufferAttribute(f,h[2]),Nl.getNormal(rd),v[0]=`${Math.round(b.x*a)},${Math.round(b.y*a)},${Math.round(b.z*a)}`,v[1]=`${Math.round(_.x*a)},${Math.round(_.y*a)},${Math.round(_.z*a)}`,v[2]=`${Math.round(g.x*a)},${Math.round(g.y*a)},${Math.round(g.z*a)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let L=0;L<3;L++){const D=(L+1)%3,P=v[L],U=v[D],O=Nl[x[L]],k=Nl[x[D]],Y=`${P}_${U}`,C=`${U}_${P}`;C in y&&y[C]?(rd.dot(y[C].normal)<=l&&(S.push(O.x,O.y,O.z),S.push(k.x,k.y,k.z)),y[C]=null):Y in y||(y[Y]={index0:h[L],index1:h[D],normal:rd.clone()})}}for(const w in y)if(y[w]){const{index0:b,index1:_}=y[w];Rl.fromBufferAttribute(f,b),Pl.fromBufferAttribute(f,_),S.push(Rl.x,Rl.y,Rl.z),S.push(Pl.x,Pl.y,Pl.z)}this.setAttribute("position",new En(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yl extends Bn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(r),m=Math.floor(a),h=f+1,x=m+1,v=e/f,y=n/m,S=[],w=[],b=[],_=[];for(let g=0;g<x;g++){const L=g*y-u;for(let D=0;D<h;D++){const P=D*v-l;w.push(P,-L,0),b.push(0,0,1),_.push(D/f),_.push(1-g/m)}}for(let g=0;g<m;g++)for(let L=0;L<f;L++){const D=L+h*g,P=L+h*(g+1),U=L+1+h*(g+1),O=L+1+h*g;S.push(D,P,O),S.push(P,U,O)}this.setIndex(S),this.setAttribute("position",new En(w,3)),this.setAttribute("normal",new En(b,3)),this.setAttribute("uv",new En(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ef extends Bn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(u+f,Math.PI);let h=0;const x=[],v=new Q,y=new Q,S=[],w=[],b=[],_=[];for(let g=0;g<=r;g++){const L=[],D=g/r;let P=0;g===0&&u===0?P=.5/n:g===r&&m===Math.PI&&(P=-.5/n);for(let U=0;U<=n;U++){const O=U/n;v.x=-e*Math.cos(a+O*l)*Math.sin(u+D*f),v.y=e*Math.cos(u+D*f),v.z=e*Math.sin(a+O*l)*Math.sin(u+D*f),w.push(v.x,v.y,v.z),y.copy(v).normalize(),b.push(y.x,y.y,y.z),_.push(O+P,1-D),L.push(h++)}x.push(L)}for(let g=0;g<r;g++)for(let L=0;L<n;L++){const D=x[g][L+1],P=x[g][L],U=x[g+1][L],O=x[g+1][L+1];(g!==0||u>0)&&S.push(D,P,O),(g!==r-1||m<Math.PI)&&S.push(P,U,O)}this.setIndex(S),this.setAttribute("position",new En(w,3)),this.setAttribute("normal",new En(b,3)),this.setAttribute("uv",new En(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yx extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $x extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kx extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class U0 extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const sd=new kt,Rm=new Q,Pm=new Q;class Zx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rm),Pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pm),n.updateMatrixWorld(),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qx extends Zx{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Jx extends U0{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Qx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class F0 extends R0{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+n,m=a-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=x*this.view.offsetY,m=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class e_ extends U0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class t_ extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Nm(s,e,n,r){const a=n_(r);switch(n){case x0:return s*e;case y0:return s*e/a.components*a.byteLength;case mf:return s*e/a.components*a.byteLength;case Ws:return s*e*2/a.components*a.byteLength;case gf:return s*e*2/a.components*a.byteLength;case _0:return s*e*3/a.components*a.byteLength;case mi:return s*e*4/a.components*a.byteLength;case vf:return s*e*4/a.components*a.byteLength;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:case Rd:return Math.max(s,16)*Math.max(e,8)/4;case bd:case Cd:return Math.max(s,8)*Math.max(e,8)/2;case Pd:case Nd:case Dd:case Id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ld:case Ud:case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Qd:case Jd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function n_(s){switch(s){case Yn:case p0:return{byteLength:1,components:1};case qo:case m0:case Ki:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case Ni:case ff:case bi:return{byteLength:4,components:1};case g0:case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:df}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=df);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function O0(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function i_(s){const e=new WeakMap;function n(f,m){const h=f.array,x=f.usage,v=h.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,h,x),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,m,h){const x=m.array,v=m.updateRanges;if(s.bindBuffer(h,f),v.length===0)s.bufferSubData(h,0,x);else{v.sort((S,w)=>S.start-w.start);let y=0;for(let S=1;S<v.length;S++){const w=v[y],b=v[S];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++y,v[y]=b)}v.length=y+1;for(let S=0,w=v.length;S<w;S++){const b=v[S];s.bufferSubData(h,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,m));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,m),h.version=f.version}}return{get:a,remove:l,update:u}}var r_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,h_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ny=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,US=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:r_,alphahash_pars_fragment:s_,alphamap_fragment:o_,alphamap_pars_fragment:a_,alphatest_fragment:l_,alphatest_pars_fragment:c_,aomap_fragment:u_,aomap_pars_fragment:d_,batching_pars_vertex:f_,batching_vertex:h_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:v_,bumpmap_pars_fragment:x_,clipping_planes_fragment:__,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:S_,clipping_planes_vertex:M_,color_fragment:E_,color_pars_fragment:w_,color_pars_vertex:T_,color_vertex:b_,common:A_,cube_uv_reflection_fragment:C_,defaultnormal_vertex:R_,displacementmap_pars_vertex:P_,displacementmap_vertex:N_,emissivemap_fragment:L_,emissivemap_pars_fragment:D_,colorspace_fragment:I_,colorspace_pars_fragment:U_,envmap_fragment:F_,envmap_common_pars_fragment:O_,envmap_pars_fragment:k_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:K_,envmap_vertex:z_,fog_vertex:V_,fog_pars_vertex:H_,fog_fragment:G_,fog_pars_fragment:W_,gradientmap_pars_fragment:j_,lightmap_pars_fragment:X_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:Y_,lights_pars_begin:$_,lights_toon_fragment:Z_,lights_toon_pars_fragment:Q_,lights_phong_fragment:J_,lights_phong_pars_fragment:ey,lights_physical_fragment:ty,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:ry,lights_fragment_end:sy,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:uy,map_pars_fragment:dy,map_particle_fragment:fy,map_particle_pars_fragment:hy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:vy,morphnormal_vertex:xy,morphtarget_pars_vertex:_y,morphtarget_vertex:yy,normal_fragment_begin:Sy,normal_fragment_maps:My,normal_pars_fragment:Ey,normal_pars_vertex:wy,normal_vertex:Ty,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Ry,iridescence_pars_fragment:Py,opaque_fragment:Ny,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Iy,dithering_fragment:Uy,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:By,shadowmap_pars_vertex:zy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Hy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:jy,skinnormal_vertex:Xy,specularmap_fragment:qy,specularmap_pars_fragment:Yy,tonemapping_fragment:$y,tonemapping_pars_fragment:Ky,transmission_fragment:Zy,transmission_pars_fragment:Qy,uv_pars_fragment:Jy,uv_pars_vertex:eS,uv_vertex:tS,worldpos_vertex:nS,background_vert:iS,background_frag:rS,backgroundCube_vert:sS,backgroundCube_frag:oS,cube_vert:aS,cube_frag:lS,depth_vert:cS,depth_frag:uS,distance_vert:dS,distance_frag:fS,equirect_vert:hS,equirect_frag:pS,linedashed_vert:mS,linedashed_frag:gS,meshbasic_vert:vS,meshbasic_frag:xS,meshlambert_vert:_S,meshlambert_frag:yS,meshmatcap_vert:SS,meshmatcap_frag:MS,meshnormal_vert:ES,meshnormal_frag:wS,meshphong_vert:TS,meshphong_frag:bS,meshphysical_vert:AS,meshphysical_frag:CS,meshtoon_vert:RS,meshtoon_frag:PS,points_vert:NS,points_frag:LS,shadow_vert:DS,shadow_frag:IS,sprite_vert:US,sprite_frag:FS},Ie={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ti={basic:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Cn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Cn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Cn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Cn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Cn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Cn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Cn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Cn([Ie.lights,Ie.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ti.physical={uniforms:Cn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ll={r:0,b:0,g:0},$r=new Qi,OS=new kt;function kS(s,e,n,r,a,l,u){const f=new Rt(0);let m=l===!0?0:1,h,x,v=null,y=0,S=null;function w(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function b(D){let P=!1;const U=w(D);U===null?g(f,m):U&&U.isColor&&(g(U,1),P=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(D,P){const U=w(P);U&&(U.isCubeTexture||U.mapping===ql)?(x===void 0&&(x=new Li(new Ks(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Xs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,k,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(x)),$r.copy(P.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),x.material.uniforms.envMap.value=U,x.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(OS.makeRotationFromEuler($r)),x.material.toneMapped=wt.getTransfer(U.colorSpace)!==It,(v!==U||y!==U.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=U,y=U.version,S=s.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new Li(new Yl(2,2),new gi({name:"BackgroundMaterial",uniforms:Xs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=wt.getTransfer(U.colorSpace)!==It,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||y!==U.version||S!==s.toneMapping)&&(h.material.needsUpdate=!0,v=U,y=U.version,S=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function g(D,P){D.getRGB(Ll,C0(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,P,u)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,P=1){f.set(D),m=P,g(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,g(f,m)},render:b,addToRenderList:_,dispose:L}}function BS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,u=!1;function f(R,V,se,ee,de){let ce=!1;const ae=v(ee,se,V);l!==ae&&(l=ae,h(l.object)),ce=S(R,ee,se,de),ce&&w(R,ee,se,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,P(R,V,se,ee),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function m(){return s.createVertexArray()}function h(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function v(R,V,se){const ee=se.wireframe===!0;let de=r[R.id];de===void 0&&(de={},r[R.id]=de);let ce=de[V.id];ce===void 0&&(ce={},de[V.id]=ce);let ae=ce[ee];return ae===void 0&&(ae=y(m()),ce[ee]=ae),ae}function y(R){const V=[],se=[],ee=[];for(let de=0;de<n;de++)V[de]=0,se[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:se,attributeDivisors:ee,object:R,attributes:{},index:null}}function S(R,V,se,ee){const de=l.attributes,ce=V.attributes;let ae=0;const $=se.getAttributes();for(const q in $)if($[q].location>=0){const re=de[q];let F=ce[q];if(F===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),re===void 0||re.attribute!==F||F&&re.data!==F.data)return!0;ae++}return l.attributesNum!==ae||l.index!==ee}function w(R,V,se,ee){const de={},ce=V.attributes;let ae=0;const $=se.getAttributes();for(const q in $)if($[q].location>=0){let re=ce[q];re===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const F={};F.attribute=re,re&&re.data&&(F.data=re.data),de[q]=F,ae++}l.attributes=de,l.attributesNum=ae,l.index=ee}function b(){const R=l.newAttributes;for(let V=0,se=R.length;V<se;V++)R[V]=0}function _(R){g(R,0)}function g(R,V){const se=l.newAttributes,ee=l.enabledAttributes,de=l.attributeDivisors;se[R]=1,ee[R]===0&&(s.enableVertexAttribArray(R),ee[R]=1),de[R]!==V&&(s.vertexAttribDivisor(R,V),de[R]=V)}function L(){const R=l.newAttributes,V=l.enabledAttributes;for(let se=0,ee=V.length;se<ee;se++)V[se]!==R[se]&&(s.disableVertexAttribArray(se),V[se]=0)}function D(R,V,se,ee,de,ce,ae){ae===!0?s.vertexAttribIPointer(R,V,se,de,ce):s.vertexAttribPointer(R,V,se,ee,de,ce)}function P(R,V,se,ee){b();const de=ee.attributes,ce=se.getAttributes(),ae=V.defaultAttributeValues;for(const $ in ce){const q=ce[$];if(q.location>=0){let fe=de[$];if(fe===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const re=fe.normalized,F=fe.itemSize,X=e.get(fe);if(X===void 0)continue;const Ee=X.buffer,Re=X.type,Ge=X.bytesPerElement,te=Re===s.INT||Re===s.UNSIGNED_INT||fe.gpuType===ff;if(fe.isInterleavedBufferAttribute){const ue=fe.data,Se=ue.stride,Be=fe.offset;if(ue.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)g(q.location+Ue,ue.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)_(q.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Ue=0;Ue<q.locationSize;Ue++)D(q.location+Ue,F/q.locationSize,Re,re,Se*Ge,(Be+F/q.locationSize*Ue)*Ge,te)}else{if(fe.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)g(q.location+ue,fe.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ue=0;ue<q.locationSize;ue++)_(q.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ue=0;ue<q.locationSize;ue++)D(q.location+ue,F/q.locationSize,Re,re,F*Ge,F/q.locationSize*ue*Ge,te)}}else if(ae!==void 0){const re=ae[$];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(q.location,re);break;case 3:s.vertexAttrib3fv(q.location,re);break;case 4:s.vertexAttrib4fv(q.location,re);break;default:s.vertexAttrib1fv(q.location,re)}}}}L()}function U(){Y();for(const R in r){const V=r[R];for(const se in V){const ee=V[se];for(const de in ee)x(ee[de].object),delete ee[de];delete V[se]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const se in V){const ee=V[se];for(const de in ee)x(ee[de].object),delete ee[de];delete V[se]}delete r[R.id]}function k(R){for(const V in r){const se=r[V];if(se[R.id]===void 0)continue;const ee=se[R.id];for(const de in ee)x(ee[de].object),delete ee[de];delete se[R.id]}}function Y(){C(),u=!0,l!==a&&(l=a,h(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:C,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:_,disableUnusedAttributes:L}}function zS(s,e,n){let r;function a(h){r=h}function l(h,x){s.drawArrays(r,h,x),n.update(x,r,1)}function u(h,x,v){v!==0&&(s.drawArraysInstanced(r,h,x,v),n.update(x,r,v))}function f(h,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,v);let S=0;for(let w=0;w<v;w++)S+=x[w];n.update(S,r,1)}function m(h,x,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<h.length;w++)u(h[w],x[w],y[w]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,x,0,y,0,v);let w=0;for(let b=0;b<v;b++)w+=x[b]*y[b];n.update(w,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function VS(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==mi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const Y=k===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Yn&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==bi&&!Y)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const x=m(h);x!==h&&(st("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:P,maxSamples:U,samples:O}}function HS(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new Zr,f=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||a;return a=y,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){n=x(v,y,0)},this.setState=function(v,y,S){const w=v.clippingPlanes,b=v.clipIntersection,_=v.clipShadows,g=s.get(v);if(!a||w===null||w.length===0||l&&!_)l?x(null):h();else{const L=l?0:r,D=L*4;let P=g.clippingState||null;m.value=P,P=x(w,y,D,S);for(let U=0;U!==D;++U)P[U]=n[U];g.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,S,w){const b=v!==null?v.length:0;let _=null;if(b!==0){if(_=m.value,w!==!0||_===null){const g=S+b*4,L=y.matrixWorldInverse;f.getNormalMatrix(L),(_===null||_.length<g)&&(_=new Float32Array(g));for(let D=0,P=S;D!==b;++D,P+=4)u.copy(v[D]).applyMatrix4(L,f),u.normal.toArray(_,P),_[P+3]=u.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}function GS(s){let e=new WeakMap;function n(u,f){return f===Md?u.mapping=ns:f===Ed&&(u.mapping=Gs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Md||f===Ed)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const h=new N0(m.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",a),n(h.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const br=4,Lm=[.125,.215,.35,.446,.526,.582],Jr=20,WS=256,Ho=new F0,Dm=new Rt;let od=null,ad=0,ld=0,cd=!1;const jS=new Q;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,a=100,l={}){const{size:u=256,position:f=jS}=l;od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,a,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ad,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ki,format:mi,colorSpace:js,depthBuffer:!1},a=Um(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XS(l)),this._blurMaterial=YS(l,e,n),this._ggxMaterial=qS(l,e,n)}return a}_compileMaterial(e){const n=new Li(new Bn,e);this._renderer.compile(n,Ho)}_sceneToCubeUV(e,n,r,a,l){const m=new qn(90,1,n,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Dm),v.toneMapping=Ci,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Ks,new T0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let g=!1;const L=e.background;L?L.isColor&&(_.color.copy(L),e.background=null,g=!0):(_.color.copy(Dm),g=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(m.up.set(0,h[D],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+x[D],l.y,l.z)):P===1?(m.up.set(0,0,h[D]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+x[D],l.z)):(m.up.set(0,h[D],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+x[D]));const U=this._cubeSize;Bs(a,P*U,D>2?U:0,U,U),v.setRenderTarget(a),g&&v.render(b,m),v.render(e,m)}v.toneMapping=S,v.autoClear=y,e.background=L}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ns||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;Bs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,Ho)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),v=Math.sqrt(h*h-x*x),y=0+h*1.25,S=v*y,{_lodMax:w}=this,b=this._sizeLods[r],_=3*b*(r>w-br?r-w+br:0),g=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=w-n,Bs(l,_,g,3*b,2*b),a.setRenderTarget(l),a.render(f,Ho),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=w-r,Bs(e,_,g,3*b,2*b),a.setRenderTarget(e),a.render(f,Ho)}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,f){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[a];v.material=h;const y=h.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),b=l/w,_=isFinite(l)?1+Math.floor(x*b):Jr;_>Jr&&st(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Jr}`);const g=[];let L=0;for(let k=0;k<Jr;++k){const Y=k/b,C=Math.exp(-Y*Y/2);g.push(C),k===0?L+=C:k<_&&(L+=2*C)}for(let k=0;k<g.length;k++)g[k]=g[k]/L;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=g,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:D}=this;y.dTheta.value=w,y.mipInt.value=D-r;const P=this._sizeLods[a],U=3*P*(a>D-br?a-D+br:0),O=4*(this._cubeSize-P);Bs(n,U,O,3*P,2*P),m.setRenderTarget(n),m.render(v,Ho)}}function XS(s){const e=[],n=[],r=[];let a=s;const l=s-br+1+Lm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let m=1/f;u>s-br?m=Lm[u-s+br-1]:u===0&&(m=0),n.push(m);const h=1/(f-2),x=-h,v=1+h,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,w=6,b=3,_=2,g=1,L=new Float32Array(b*w*S),D=new Float32Array(_*w*S),P=new Float32Array(g*w*S);for(let O=0;O<S;O++){const k=O%3*2/3-1,Y=O>2?0:-1,C=[k,Y,0,k+2/3,Y,0,k+2/3,Y+1,0,k,Y,0,k+2/3,Y+1,0,k,Y+1,0];L.set(C,b*w*O),D.set(y,_*w*O);const R=[O,O,O,O,O,O];P.set(R,g*w*O)}const U=new Bn;U.setAttribute("position",new Pi(L,b)),U.setAttribute("uv",new Pi(D,_)),U.setAttribute("faceIndex",new Pi(P,g)),r.push(new Li(U,null)),a>br&&a--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Um(s,e,n){const r=new Ri(s,e,n);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bs(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function qS(s,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function YS(s,e,n){const r=new Float32Array(Jr),a=new Q(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Fm(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Om(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $S(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const m=f.mapping,h=m===Md||m===Ed,x=m===ns||m===Gs;if(h||x){let v=e.get(f);const y=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new Im(s)),v=h?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return h&&S&&S.height>0||x&&S&&a(S)?(n===null&&(n=new Im(s)),v=h?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let m=0;const h=6;for(let x=0;x<h;x++)f[x]!==void 0&&m++;return m===h}function l(f){const m=f.target;m.removeEventListener("dispose",l);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function KS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&$o("WebGLRenderer: "+r+" extension not supported."),a}}}function ZS(s,e,n,r){const a={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);y.removeEventListener("dispose",u),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(v,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,n.memory.geometries++),y}function m(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function h(v){const y=[],S=v.index,w=v.attributes.position;let b=0;if(S!==null){const L=S.array;b=S.version;for(let D=0,P=L.length;D<P;D+=3){const U=L[D+0],O=L[D+1],k=L[D+2];y.push(U,O,O,k,k,U)}}else if(w!==void 0){const L=w.array;b=w.version;for(let D=0,P=L.length/3-1;D<P;D+=3){const U=D+0,O=D+1,k=D+2;y.push(U,O,O,k,k,U)}}else return;const _=new(S0(y)?A0:b0)(y,1);_.version=b;const g=l.get(v);g&&e.remove(g),l.set(v,_)}function x(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:m,getWireframeAttribute:x}}function QS(s,e,n){let r;function a(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function m(y,S){s.drawElements(r,S,l,y*u),n.update(S,r,1)}function h(y,S,w){w!==0&&(s.drawElementsInstanced(r,S,l,y*u,w),n.update(S,r,w))}function x(y,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,w);let _=0;for(let g=0;g<w;g++)_+=S[g];n.update(_,r,1)}function v(y,S,w,b){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<y.length;g++)h(y[g]/u,S[g],b[g]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,b,0,w);let g=0;for(let L=0;L<w;L++)g+=S[L]*b[L];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function JS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:At("WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function eM(s,e,n){const r=new WeakMap,a=new Yt;function l(u,f,m){const h=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(f);if(y===void 0||y.count!==v){let R=function(){Y.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;y!==void 0&&y.texture.dispose();const w=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let P=0;w===!0&&(P=1),b===!0&&(P=2),_===!0&&(P=3);let U=f.attributes.position.count*P,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const k=new Float32Array(U*O*4*v),Y=new M0(k,U,O,v);Y.type=bi,Y.needsUpdate=!0;const C=P*4;for(let V=0;V<v;V++){const se=g[V],ee=L[V],de=D[V],ce=U*O*4*V;for(let ae=0;ae<se.count;ae++){const $=ae*C;w===!0&&(a.fromBufferAttribute(se,ae),k[ce+$+0]=a.x,k[ce+$+1]=a.y,k[ce+$+2]=a.z,k[ce+$+3]=0),b===!0&&(a.fromBufferAttribute(ee,ae),k[ce+$+4]=a.x,k[ce+$+5]=a.y,k[ce+$+6]=a.z,k[ce+$+7]=0),_===!0&&(a.fromBufferAttribute(de,ae),k[ce+$+8]=a.x,k[ce+$+9]=a.y,k[ce+$+10]=a.z,k[ce+$+11]=de.itemSize===4?a.w:1)}}y={count:v,texture:Y,size:new Lt(U,O)},r.set(f,y),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let w=0;for(let _=0;_<h.length;_++)w+=h[_];const b=f.morphTargetsRelative?1:1-w;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function tM(s,e,n,r){let a=new WeakMap;function l(m){const h=r.render.frame,x=m.geometry,v=e.get(m,x);if(a.get(v)!==h&&(e.update(v),a.set(v,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),a.get(m)!==h&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),a.set(m,h))),m.isSkinnedMesh){const y=m.skeleton;a.get(y)!==h&&(y.update(),a.set(y,h))}return v}function u(){a=new WeakMap}function f(m){const h=m.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:l,dispose:u}}const nM={[o0]:"LINEAR_TONE_MAPPING",[a0]:"REINHARD_TONE_MAPPING",[l0]:"CINEON_TONE_MAPPING",[c0]:"ACES_FILMIC_TONE_MAPPING",[d0]:"AGX_TONE_MAPPING",[f0]:"NEUTRAL_TONE_MAPPING",[u0]:"CUSTOM_TONE_MAPPING"};function iM(s,e,n,r,a){const l=new Ri(e,n,{type:s,depthBuffer:r,stencilBuffer:a}),u=new Ri(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),f=new Bn;f.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new En([0,2,0,0,2,0],2));const m=new Yx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Li(f,m),x=new F0(-1,1,1,-1,0,1);let v=null,y=null,S=!1,w,b=null,_=[],g=!1;this.setSize=function(L,D){l.setSize(L,D),u.setSize(L,D);for(let P=0;P<_.length;P++){const U=_[P];U.setSize&&U.setSize(L,D)}},this.setEffects=function(L){_=L,g=_.length>0&&_[0].isRenderPass===!0;const D=l.width,P=l.height;for(let U=0;U<_.length;U++){const O=_[U];O.setSize&&O.setSize(D,P)}},this.begin=function(L,D){if(S||L.toneMapping===Ci&&_.length===0)return!1;if(b=D,D!==null){const P=D.width,U=D.height;(l.width!==P||l.height!==U)&&this.setSize(P,U)}return g===!1&&L.setRenderTarget(l),w=L.toneMapping,L.toneMapping=Ci,!0},this.hasRenderPass=function(){return g},this.end=function(L,D){L.toneMapping=w,S=!0;let P=l,U=u;for(let O=0;O<_.length;O++){const k=_[O];if(k.enabled!==!1&&(k.render(L,U,P,D),k.needsSwap!==!1)){const Y=P;P=U,U=Y}}if(v!==L.outputColorSpace||y!==L.toneMapping){v=L.outputColorSpace,y=L.toneMapping,m.defines={},wt.getTransfer(v)===It&&(m.defines.SRGB_TRANSFER="");const O=nM[y];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(b),L.render(h,x),b=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),m.dispose()}}const k0=new Pn,af=new Ko(1,1),B0=new M0,z0=new Sx,V0=new P0,km=[],Bm=[],zm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=km[a];if(l===void 0&&(l=new Float32Array(a),km[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Kl(s,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function rM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function lM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),rn(n,r)}}function cM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Vm.set(r),s.uniformMatrix3fv(this.addr,!1,Vm),rn(n,r)}}function uM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;zm.set(r),s.uniformMatrix4fv(this.addr,!1,zm),rn(n,r)}}function dM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function mM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function gM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function vM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function xM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function _M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(af.compareFunction=n.isReversedDepthBuffer()?_f:xf,l=af):l=k0,n.setTexture2D(e||l,a)}function yM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||z0,a)}function SM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||V0,a)}function MM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||B0,a)}function EM(s){switch(s){case 5126:return rM;case 35664:return sM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return dM;case 35667:case 35671:return fM;case 35668:case 35672:return hM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return vM;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return MM}}function wM(s,e){s.uniform1fv(this.addr,e)}function TM(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function bM(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function AM(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function CM(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function RM(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function PM(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function NM(s,e){s.uniform1iv(this.addr,e)}function LM(s,e){s.uniform2iv(this.addr,e)}function DM(s,e){s.uniform3iv(this.addr,e)}function IM(s,e){s.uniform4iv(this.addr,e)}function UM(s,e){s.uniform1uiv(this.addr,e)}function FM(s,e){s.uniform2uiv(this.addr,e)}function OM(s,e){s.uniform3uiv(this.addr,e)}function kM(s,e){s.uniform4uiv(this.addr,e)}function BM(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=af:u=k0;for(let f=0;f!==a;++f)n.setTexture2D(e[f]||u,l[f])}function zM(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||z0,l[u])}function VM(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||V0,l[u])}function HM(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||B0,l[u])}function GM(s){switch(s){case 5126:return wM;case 35664:return TM;case 35665:return bM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return PM;case 5124:case 35670:return NM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return IM;case 5125:return UM;case 36294:return FM;case 36295:return OM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return HM}}class WM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=EM(n.type)}}class jM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GM(n.type)}}class XM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function Gm(s,e){s.seq.push(e),s.map[e.id]=e}function qM(s,e,n){const r=s.name,a=r.length;for(ud.lastIndex=0;;){const l=ud.exec(r),u=ud.lastIndex;let f=l[1];const m=l[2]==="]",h=l[3];if(m&&(f=f|0),h===void 0||h==="["&&u+2===a){Gm(n,h===void 0?new WM(f,s,e):new jM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new XM(f),Gm(n,v)),n=v}}}class zl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),m=e.getUniformLocation(n,f.name);qM(f,m,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Wm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const YM=37297;let $M=0;function KM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const jm=new ct;function ZM(s){wt._getMatrix(jm,wt.workingColorSpace,s);const e=`mat3( ${jm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+KM(s.getShaderSource(e),f)}else return l}function QM(s,e){const n=ZM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const JM={[o0]:"Linear",[a0]:"Reinhard",[l0]:"Cineon",[c0]:"ACESFilmic",[d0]:"AgX",[f0]:"Neutral",[u0]:"Custom"};function e1(s,e){const n=JM[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new Q;function t1(){wt.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function i1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function r1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Xo(s){return s!==""}function qm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(s){return s.replace(s1,a1)}const o1=new Map;function a1(s,e){let n=dt[e];if(n===void 0){const r=o1.get(e);if(r!==void 0)n=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return lf(n)}const l1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(l1,c1)}function c1(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Km(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const u1={[Il]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function d1(s){return u1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f1={[ns]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[ql]:"ENVMAP_TYPE_CUBE_UV"};function h1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":f1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const p1={[Gs]:"ENVMAP_MODE_REFRACTION"};function m1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":p1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g1={[s0]:"ENVMAP_BLENDING_MULTIPLY",[tx]:"ENVMAP_BLENDING_MIX",[nx]:"ENVMAP_BLENDING_ADD"};function v1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":g1[s.combine]||"ENVMAP_BLENDING_NONE"}function x1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function _1(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const m=d1(n),h=h1(n),x=m1(n),v=v1(n),y=x1(n),S=n1(n),w=i1(l),b=a.createProgram();let _,g,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Xo).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Xo).join(`
`),g.length>0&&(g+=`
`)):(_=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),g=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+x:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?dt.tonemapping_pars_fragment:"",n.toneMapping!==Ci?e1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,QM("linearToOutputTexel",n.outputColorSpace),t1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),u=lf(u),u=qm(u,n),u=Ym(u,n),f=lf(f),f=qm(f,n),f=Ym(f,n),u=$m(u),f=$m(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=L+_+u,P=L+g+f,U=Wm(a,a.VERTEX_SHADER,D),O=Wm(a,a.FRAGMENT_SHADER,P);a.attachShader(b,U),a.attachShader(b,O),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function k(V){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(b)||"",ee=a.getShaderInfoLog(U)||"",de=a.getShaderInfoLog(O)||"",ce=se.trim(),ae=ee.trim(),$=de.trim();let q=!0,fe=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,U,O);else{const re=Xm(a,U,"vertex"),F=Xm(a,O,"fragment");At("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+re+`
`+F)}else ce!==""?st("WebGLProgram: Program Info Log:",ce):(ae===""||$==="")&&(fe=!1);fe&&(V.diagnostics={runnable:q,programLog:ce,vertexShader:{log:ae,prefix:_},fragmentShader:{log:$,prefix:g}})}a.deleteShader(U),a.deleteShader(O),Y=new zl(a,b),C=r1(a,b)}let Y;this.getUniforms=function(){return Y===void 0&&k(this),Y};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(b,YM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$M++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=O,this}let y1=0;class S1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new M1(e),n.set(e,r)),r}}class M1{constructor(e){this.id=y1++,this.code=e,this.usedTimes=0}}function E1(s,e,n,r,a,l,u){const f=new E0,m=new S1,h=new Set,x=[],v=new Map,y=a.logarithmicDepthBuffer;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return h.add(C),C===0?"uv":`uv${C}`}function _(C,R,V,se,ee){const de=se.fog,ce=ee.geometry,ae=C.isMeshStandardMaterial?se.environment:null,$=(C.isMeshStandardMaterial?n:e).get(C.envMap||ae),q=$&&$.mapping===ql?$.image.height:null,fe=w[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,F=re!==void 0?re.length:0;let X=0;ce.morphAttributes.position!==void 0&&(X=1),ce.morphAttributes.normal!==void 0&&(X=2),ce.morphAttributes.color!==void 0&&(X=3);let Ee,Re,Ge,te;if(fe){const St=Ti[fe];Ee=St.vertexShader,Re=St.fragmentShader}else Ee=C.vertexShader,Re=C.fragmentShader,m.update(C),Ge=m.getVertexShaderID(C),te=m.getFragmentShaderID(C);const ue=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Be=ee.isInstancedMesh===!0,Ue=ee.isBatchedMesh===!0,pt=!!C.map,$t=!!C.matcap,ft=!!$,_t=!!C.aoMap,Pt=!!C.lightMap,lt=!!C.bumpMap,Vt=!!C.normalMap,z=!!C.displacementMap,Ht=!!C.emissiveMap,gt=!!C.metalnessMap,yt=!!C.roughnessMap,Xe=C.anisotropy>0,N=C.clearcoat>0,M=C.dispersion>0,W=C.iridescence>0,he=C.sheen>0,me=C.transmission>0,le=Xe&&!!C.anisotropyMap,$e=N&&!!C.clearcoatMap,Te=N&&!!C.clearcoatNormalMap,ze=N&&!!C.clearcoatRoughnessMap,nt=W&&!!C.iridescenceMap,ye=W&&!!C.iridescenceThicknessMap,Pe=he&&!!C.sheenColorMap,We=he&&!!C.sheenRoughnessMap,qe=!!C.specularMap,Ae=!!C.specularColorMap,at=!!C.specularIntensityMap,H=me&&!!C.transmissionMap,Le=me&&!!C.thicknessMap,Me=!!C.gradientMap,De=!!C.alphaMap,xe=C.alphaTest>0,pe=!!C.alphaHash,Ce=!!C.extensions;let it=Ci;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=s.toneMapping);const Dt={shaderID:fe,shaderType:C.type,shaderName:C.name,vertexShader:Ee,fragmentShader:Re,defines:C.defines,customVertexShaderID:Ge,customFragmentShaderID:te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ue,batchingColor:Ue&&ee._colorsTexture!==null,instancing:Be,instancingColor:Be&&ee.instanceColor!==null,instancingMorph:Be&&ee.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:js,alphaToCoverage:!!C.alphaToCoverage,map:pt,matcap:$t,envMap:ft,envMapMode:ft&&$.mapping,envMapCubeUVHeight:q,aoMap:_t,lightMap:Pt,bumpMap:lt,normalMap:Vt,displacementMap:z,emissiveMap:Ht,normalMapObjectSpace:Vt&&C.normalMapType===ox,normalMapTangentSpace:Vt&&C.normalMapType===sx,metalnessMap:gt,roughnessMap:yt,anisotropy:Xe,anisotropyMap:le,clearcoat:N,clearcoatMap:$e,clearcoatNormalMap:Te,clearcoatRoughnessMap:ze,dispersion:M,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Pe,sheenRoughnessMap:We,specularMap:qe,specularColorMap:Ae,specularIntensityMap:at,transmission:me,transmissionMap:H,thicknessMap:Le,gradientMap:Me,opaque:C.transparent===!1&&C.blending===zs&&C.alphaToCoverage===!1,alphaMap:De,alphaTest:xe,alphaHash:pe,combine:C.combine,mapUv:pt&&b(C.map.channel),aoMapUv:_t&&b(C.aoMap.channel),lightMapUv:Pt&&b(C.lightMap.channel),bumpMapUv:lt&&b(C.bumpMap.channel),normalMapUv:Vt&&b(C.normalMap.channel),displacementMapUv:z&&b(C.displacementMap.channel),emissiveMapUv:Ht&&b(C.emissiveMap.channel),metalnessMapUv:gt&&b(C.metalnessMap.channel),roughnessMapUv:yt&&b(C.roughnessMap.channel),anisotropyMapUv:le&&b(C.anisotropyMap.channel),clearcoatMapUv:$e&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Te&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:We&&b(C.sheenRoughnessMap.channel),specularMapUv:qe&&b(C.specularMap.channel),specularColorMapUv:Ae&&b(C.specularColorMap.channel),specularIntensityMapUv:at&&b(C.specularIntensityMap.channel),transmissionMapUv:H&&b(C.transmissionMap.channel),thicknessMapUv:Le&&b(C.thicknessMap.channel),alphaMapUv:De&&b(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Vt||Xe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ce.attributes.uv&&(pt||De),fog:!!de,useFog:C.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Se,skinning:ee.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Xi,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&C.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Dt.vertexUv1s=h.has(1),Dt.vertexUv2s=h.has(2),Dt.vertexUv3s=h.has(3),h.clear(),Dt}function g(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)R.push(V),R.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(L(R,C),D(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function L(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function D(C,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),C.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),C.push(f.mask)}function P(C){const R=w[C.type];let V;if(R){const se=Ti[R];V=Ix.clone(se.uniforms)}else V=C.uniforms;return V}function U(C,R){let V=v.get(R);return V!==void 0?++V.usedTimes:(V=new _1(s,R,C,l),x.push(V),v.set(R,V)),V}function O(C){if(--C.usedTimes===0){const R=x.indexOf(C);x[R]=x[x.length-1],x.pop(),v.delete(C.cacheKey),C.destroy()}}function k(C){m.remove(C)}function Y(){m.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:P,acquireProgram:U,releaseProgram:O,releaseShaderCache:k,programs:x,dispose:Y}}function w1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function T1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(v,y,S,w,b,_){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:y,material:S,groupOrder:w,renderOrder:v.renderOrder,z:b,group:_},s[e]=g):(g.id=v.id,g.object=v,g.geometry=y,g.material=S,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=b,g.group=_),e++,g}function f(v,y,S,w,b,_){const g=u(v,y,S,w,b,_);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function m(v,y,S,w,b,_){const g=u(v,y,S,w,b,_);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function h(v,y){n.length>1&&n.sort(v||T1),r.length>1&&r.sort(y||Zm),a.length>1&&a.sort(y||Zm)}function x(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:m,finish:x,sort:h}}function b1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Qm,s.set(r,[u])):a>=l.length?(u=new Qm,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function A1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Rt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function C1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let R1=0;function P1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function N1(s){const e=new A1,n=C1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Q);const a=new Q,l=new kt,u=new kt;function f(h){let x=0,v=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,w=0,b=0,_=0,g=0,L=0,D=0,P=0,U=0,O=0,k=0;h.sort(P1);for(let C=0,R=h.length;C<R;C++){const V=h[C],se=V.color,ee=V.intensity,de=V.distance;let ce=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ws?ce=V.shadow.map.texture:ce=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=se.r*ee,v+=se.g*ee,y+=se.b*ee;else if(V.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(V.sh.coefficients[ae],ee);k++}else if(V.isDirectionalLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const $=V.shadow,q=n.get(V);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=V.shadow.matrix,L++}r.directional[S]=ae,S++}else if(V.isSpotLight){const ae=e.get(V);ae.position.setFromMatrixPosition(V.matrixWorld),ae.color.copy(se).multiplyScalar(ee),ae.distance=de,ae.coneCos=Math.cos(V.angle),ae.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ae.decay=V.decay,r.spot[b]=ae;const $=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,$.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[b]=$.matrix,V.castShadow){const q=n.get(V);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=ce,P++}b++}else if(V.isRectAreaLight){const ae=e.get(V);ae.color.copy(se).multiplyScalar(ee),ae.halfWidth.set(V.width*.5,0,0),ae.halfHeight.set(0,V.height*.5,0),r.rectArea[_]=ae,_++}else if(V.isPointLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),ae.distance=V.distance,ae.decay=V.decay,V.castShadow){const $=V.shadow,q=n.get(V);q.shadowIntensity=$.intensity,q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,r.pointShadow[w]=q,r.pointShadowMap[w]=ce,r.pointShadowMatrix[w]=V.shadow.matrix,D++}r.point[w]=ae,w++}else if(V.isHemisphereLight){const ae=e.get(V);ae.skyColor.copy(V.color).multiplyScalar(ee),ae.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[g]=ae,g++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==w||Y.spotLength!==b||Y.rectAreaLength!==_||Y.hemiLength!==g||Y.numDirectionalShadows!==L||Y.numPointShadows!==D||Y.numSpotShadows!==P||Y.numSpotMaps!==U||Y.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=_,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+U-O,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=k,Y.directionalLength=S,Y.pointLength=w,Y.spotLength=b,Y.rectAreaLength=_,Y.hemiLength=g,Y.numDirectionalShadows=L,Y.numPointShadows=D,Y.numSpotShadows=P,Y.numSpotMaps=U,Y.numLightProbes=k,r.version=R1++)}function m(h,x){let v=0,y=0,S=0,w=0,b=0;const _=x.matrixWorldInverse;for(let g=0,L=h.length;g<L;g++){const D=h[g];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),v++}else if(D.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(_),S++}else if(D.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(D.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),w++}else if(D.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(_),y++}else if(D.isHemisphereLight){const P=r.hemi[b];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(_),b++}}}return{setup:f,setupView:m,state:r}}function Jm(s){const e=new N1(s),n=[],r=[];function a(x){h.camera=x,n.length=0,r.length=0}function l(x){n.push(x)}function u(x){r.push(x)}function f(){e.setup(n)}function m(x){e.setupView(n,x)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:m,pushLight:l,pushShadow:u}}function L1(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Jm(s),e.set(a,[f])):l>=u.length?(f=new Jm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U1=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],F1=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],e0=new kt,Go=new Q,dd=new Q;function O1(s,e,n){let r=new Mf;const a=new Lt,l=new Lt,u=new Yt,f=new $x,m=new Kx,h={},x=n.maxTextureSize,v={[Ar]:kn,[kn]:Ar,[Xi]:Xi},y=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:D1,fragmentShader:I1}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new Bn;w.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Li(w,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let g=this.type;this.render=function(O,k,Y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;O.type===Fv&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=Il);const C=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Yi),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const ee=g!==this.type;ee&&k.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ce=>ce.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ce=O.length;de<ce;de++){const ae=O[de],$=ae.shadow;if($===void 0){st("WebGLShadowMap:",ae,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const q=$.getFrameExtents();if(a.multiply(q),l.copy($.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/q.x),a.x=l.x*q.x,$.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/q.y),a.y=l.y*q.y,$.mapSize.y=l.y)),$.map===null||ee===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Wo){if(ae.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ri(a.x,a.y,{format:Ws,type:Ki,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),$.map.texture.name=ae.name+".shadowMap",$.map.depthTexture=new Ko(a.x,a.y,bi),$.map.depthTexture.name=ae.name+".shadowMapDepth",$.map.depthTexture.format=Zi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=hn,$.map.depthTexture.magFilter=hn}else{ae.isPointLight?($.map=new N0(a.x),$.map.depthTexture=new Xx(a.x,Ni)):($.map=new Ri(a.x,a.y),$.map.depthTexture=new Ko(a.x,a.y,Ni)),$.map.depthTexture.name=ae.name+".shadowMap",$.map.depthTexture.format=Zi;const re=s.state.buffers.depth.getReversed();this.type===Il?($.map.depthTexture.compareFunction=re?_f:xf,$.map.depthTexture.minFilter=Mn,$.map.depthTexture.magFilter=Mn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=hn,$.map.depthTexture.magFilter=hn)}$.camera.updateProjectionMatrix()}const fe=$.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<fe;re++){if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,re),s.clear();else{re===0&&(s.setRenderTarget($.map),s.clear());const F=$.getViewport(re);u.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),se.viewport(u)}if(ae.isPointLight){const F=$.camera,X=$.matrix,Ee=ae.distance||F.far;Ee!==F.far&&(F.far=Ee,F.updateProjectionMatrix()),Go.setFromMatrixPosition(ae.matrixWorld),F.position.copy(Go),dd.copy(F.position),dd.add(U1[re]),F.up.copy(F1[re]),F.lookAt(dd),F.updateMatrixWorld(),X.makeTranslation(-Go.x,-Go.y,-Go.z),e0.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$._frustum.setFromProjectionMatrix(e0,F.coordinateSystem,F.reversedDepth)}else $.updateMatrices(ae);r=$.getFrustum(),P(k,Y,$.camera,ae,this.type)}$.isPointLightShadow!==!0&&this.type===Wo&&L($,Y),$.needsUpdate=!1}g=this.type,_.needsUpdate=!1,s.setRenderTarget(C,R,V)};function L(O,k){const Y=e.update(b);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ri(a.x,a.y,{format:Ws,type:Ki})),y.uniforms.shadow_pass.value=O.map.depthTexture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,Y,y,b,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,Y,S,b,null)}function D(O,k,Y,C){let R=null;const V=Y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)R=V;else if(R=Y.isPointLight===!0?m:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const se=R.uuid,ee=k.uuid;let de=h[se];de===void 0&&(de={},h[se]=de);let ce=de[ee];ce===void 0&&(ce=R.clone(),de[ee]=ce,k.addEventListener("dispose",U)),R=ce}if(R.visible=k.visible,R.wireframe=k.wireframe,C===Wo?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:v[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const se=s.properties.get(R);se.light=Y}return R}function P(O,k,Y,C,R){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Wo)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),de=O.material;if(Array.isArray(de)){const ce=ee.groups;for(let ae=0,$=ce.length;ae<$;ae++){const q=ce[ae],fe=de[q.materialIndex];if(fe&&fe.visible){const re=D(O,fe,C,R);O.onBeforeShadow(s,O,k,Y,ee,re,q),s.renderBufferDirect(Y,null,ee,re,O,q),O.onAfterShadow(s,O,k,Y,ee,re,q)}}}else if(de.visible){const ce=D(O,de,C,R);O.onBeforeShadow(s,O,k,Y,ee,ce,null),s.renderBufferDirect(Y,null,ee,ce,O,null),O.onAfterShadow(s,O,k,Y,ee,ce,null)}}const se=O.children;for(let ee=0,de=se.length;ee<de;ee++)P(se[ee],k,Y,C,R)}function U(O){O.target.removeEventListener("dispose",U);for(const Y in h){const C=h[Y],R=O.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const k1={[md]:gd,[vd]:yd,[xd]:Sd,[Hs]:_d,[gd]:md,[yd]:vd,[Sd]:xd,[_d]:Hs};function B1(s,e){function n(){let H=!1;const Le=new Yt;let Me=null;const De=new Yt(0,0,0,0);return{setMask:function(xe){Me!==xe&&!H&&(s.colorMask(xe,xe,xe,xe),Me=xe)},setLocked:function(xe){H=xe},setClear:function(xe,pe,Ce,it,Dt){Dt===!0&&(xe*=it,pe*=it,Ce*=it),Le.set(xe,pe,Ce,it),De.equals(Le)===!1&&(s.clearColor(xe,pe,Ce,it),De.copy(Le))},reset:function(){H=!1,Me=null,De.set(-1,0,0,0)}}}function r(){let H=!1,Le=!1,Me=null,De=null,xe=null;return{setReversed:function(pe){if(Le!==pe){const Ce=e.get("EXT_clip_control");pe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=pe;const it=xe;xe=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(pe){pe?ue(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!H&&(s.depthMask(pe),Me=pe)},setFunc:function(pe){if(Le&&(pe=k1[pe]),De!==pe){switch(pe){case md:s.depthFunc(s.NEVER);break;case gd:s.depthFunc(s.ALWAYS);break;case vd:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case xd:s.depthFunc(s.EQUAL);break;case _d:s.depthFunc(s.GEQUAL);break;case yd:s.depthFunc(s.GREATER);break;case Sd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=pe}},setLocked:function(pe){H=pe},setClear:function(pe){xe!==pe&&(Le&&(pe=1-pe),s.clearDepth(pe),xe=pe)},reset:function(){H=!1,Me=null,De=null,xe=null,Le=!1}}}function a(){let H=!1,Le=null,Me=null,De=null,xe=null,pe=null,Ce=null,it=null,Dt=null;return{setTest:function(St){H||(St?ue(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(St){Le!==St&&!H&&(s.stencilMask(St),Le=St)},setFunc:function(St,zn,wn){(Me!==St||De!==zn||xe!==wn)&&(s.stencilFunc(St,zn,wn),Me=St,De=zn,xe=wn)},setOp:function(St,zn,wn){(pe!==St||Ce!==zn||it!==wn)&&(s.stencilOp(St,zn,wn),pe=St,Ce=zn,it=wn)},setLocked:function(St){H=St},setClear:function(St){Dt!==St&&(s.clearStencil(St),Dt=St)},reset:function(){H=!1,Le=null,Me=null,De=null,xe=null,pe=null,Ce=null,it=null,Dt=null}}}const l=new n,u=new r,f=new a,m=new WeakMap,h=new WeakMap;let x={},v={},y=new WeakMap,S=[],w=null,b=!1,_=null,g=null,L=null,D=null,P=null,U=null,O=null,k=new Rt(0,0,0),Y=0,C=!1,R=null,V=null,se=null,ee=null,de=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),ae=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ae=$>=2);let fe=null,re={};const F=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),Ee=new Yt().fromArray(F),Re=new Yt().fromArray(X);function Ge(H,Le,Me,De){const xe=new Uint8Array(4),pe=s.createTexture();s.bindTexture(H,pe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Me;Ce++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Le+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return pe}const te={};te[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ue(s.DEPTH_TEST),u.setFunc(Hs),lt(!1),Vt(Qp),ue(s.CULL_FACE),_t(Yi);function ue(H){x[H]!==!0&&(s.enable(H),x[H]=!0)}function Se(H){x[H]!==!1&&(s.disable(H),x[H]=!1)}function Be(H,Le){return v[H]!==Le?(s.bindFramebuffer(H,Le),v[H]=Le,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ue(H,Le){let Me=S,De=!1;if(H){Me=y.get(Le),Me===void 0&&(Me=[],y.set(Le,Me));const xe=H.textures;if(Me.length!==xe.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ce=xe.length;pe<Ce;pe++)Me[pe]=s.COLOR_ATTACHMENT0+pe;Me.length=xe.length,De=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,De=!0);De&&s.drawBuffers(Me)}function pt(H){return w!==H?(s.useProgram(H),w=H,!0):!1}const $t={[Qr]:s.FUNC_ADD,[kv]:s.FUNC_SUBTRACT,[Bv]:s.FUNC_REVERSE_SUBTRACT};$t[zv]=s.MIN,$t[Vv]=s.MAX;const ft={[Hv]:s.ZERO,[Gv]:s.ONE,[Wv]:s.SRC_COLOR,[hd]:s.SRC_ALPHA,[Kv]:s.SRC_ALPHA_SATURATE,[Yv]:s.DST_COLOR,[Xv]:s.DST_ALPHA,[jv]:s.ONE_MINUS_SRC_COLOR,[pd]:s.ONE_MINUS_SRC_ALPHA,[$v]:s.ONE_MINUS_DST_COLOR,[qv]:s.ONE_MINUS_DST_ALPHA,[Zv]:s.CONSTANT_COLOR,[Qv]:s.ONE_MINUS_CONSTANT_COLOR,[Jv]:s.CONSTANT_ALPHA,[ex]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(H,Le,Me,De,xe,pe,Ce,it,Dt,St){if(H===Yi){b===!0&&(Se(s.BLEND),b=!1);return}if(b===!1&&(ue(s.BLEND),b=!0),H!==Ov){if(H!==_||St!==C){if((g!==Qr||P!==Qr)&&(s.blendEquation(s.FUNC_ADD),g=Qr,P=Qr),St)switch(H){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fd:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",H);break}else switch(H){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jp:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case em:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",H);break}L=null,D=null,U=null,O=null,k.set(0,0,0),Y=0,_=H,C=St}return}xe=xe||Le,pe=pe||Me,Ce=Ce||De,(Le!==g||xe!==P)&&(s.blendEquationSeparate($t[Le],$t[xe]),g=Le,P=xe),(Me!==L||De!==D||pe!==U||Ce!==O)&&(s.blendFuncSeparate(ft[Me],ft[De],ft[pe],ft[Ce]),L=Me,D=De,U=pe,O=Ce),(it.equals(k)===!1||Dt!==Y)&&(s.blendColor(it.r,it.g,it.b,Dt),k.copy(it),Y=Dt),_=H,C=!1}function Pt(H,Le){H.side===Xi?Se(s.CULL_FACE):ue(s.CULL_FACE);let Me=H.side===kn;Le&&(Me=!Me),lt(Me),H.blending===zs&&H.transparent===!1?_t(Yi):_t(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const De=H.stencilWrite;f.setTest(De),De&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function Vt(H){H!==Iv?(ue(s.CULL_FACE),H!==V&&(H===Qp?s.cullFace(s.BACK):H===Uv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),V=H}function z(H){H!==se&&(ae&&s.lineWidth(H),se=H)}function Ht(H,Le,Me){H?(ue(s.POLYGON_OFFSET_FILL),(ee!==Le||de!==Me)&&(s.polygonOffset(Le,Me),ee=Le,de=Me)):Se(s.POLYGON_OFFSET_FILL)}function gt(H){H?ue(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function yt(H){H===void 0&&(H=s.TEXTURE0+ce-1),fe!==H&&(s.activeTexture(H),fe=H)}function Xe(H,Le,Me){Me===void 0&&(fe===null?Me=s.TEXTURE0+ce-1:Me=fe);let De=re[Me];De===void 0&&(De={type:void 0,texture:void 0},re[Me]=De),(De.type!==H||De.texture!==Le)&&(fe!==Me&&(s.activeTexture(Me),fe=Me),s.bindTexture(H,Le||te[H]),De.type=H,De.texture=Le)}function N(){const H=re[fe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function he(){try{s.texSubImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function Te(){try{s.texStorage2D(...arguments)}catch(H){At("WebGLState:",H)}}function ze(){try{s.texStorage3D(...arguments)}catch(H){At("WebGLState:",H)}}function nt(){try{s.texImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function ye(){try{s.texImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function Pe(H){Ee.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function We(H){Re.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Re.copy(H))}function qe(H,Le){let Me=h.get(Le);Me===void 0&&(Me=new WeakMap,h.set(Le,Me));let De=Me.get(H);De===void 0&&(De=s.getUniformBlockIndex(Le,H.name),Me.set(H,De))}function Ae(H,Le){const De=h.get(Le).get(H);m.get(Le)!==De&&(s.uniformBlockBinding(Le,De,H.__bindingPointIndex),m.set(Le,De))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},fe=null,re={},v={},y=new WeakMap,S=[],w=null,b=!1,_=null,g=null,L=null,D=null,P=null,U=null,O=null,k=new Rt(0,0,0),Y=0,C=!1,R=null,V=null,se=null,ee=null,de=null,Ee.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ue,disable:Se,bindFramebuffer:Be,drawBuffers:Ue,useProgram:pt,setBlending:_t,setMaterial:Pt,setFlipSided:lt,setCullFace:Vt,setLineWidth:z,setPolygonOffset:Ht,setScissorTest:gt,activeTexture:yt,bindTexture:Xe,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:nt,texImage3D:ye,updateUBOMapping:qe,uniformBlockBinding:Ae,texStorage2D:Te,texStorage3D:ze,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:le,compressedTexSubImage3D:$e,scissor:Pe,viewport:We,reset:at}}function z1(s,e,n,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,x=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,M){return S?new OffscreenCanvas(N,M):Gl("canvas")}function b(N,M,W){let he=1;const me=Xe(N);if((me.width>W||me.height>W)&&(he=W/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const le=Math.floor(he*me.width),$e=Math.floor(he*me.height);v===void 0&&(v=w(le,$e));const Te=M?w(le,$e):v;return Te.width=le,Te.height=$e,Te.getContext("2d").drawImage(N,0,0,le,$e),st("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+le+"x"+$e+")."),Te}else return"data"in N&&st("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function _(N){return N.generateMipmaps}function g(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(N,M,W,he,me=!1){if(N!==null){if(s[N]!==void 0)return s[N];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=M;if(M===s.RED&&(W===s.FLOAT&&(le=s.R32F),W===s.HALF_FLOAT&&(le=s.R16F),W===s.UNSIGNED_BYTE&&(le=s.R8)),M===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.R8UI),W===s.UNSIGNED_SHORT&&(le=s.R16UI),W===s.UNSIGNED_INT&&(le=s.R32UI),W===s.BYTE&&(le=s.R8I),W===s.SHORT&&(le=s.R16I),W===s.INT&&(le=s.R32I)),M===s.RG&&(W===s.FLOAT&&(le=s.RG32F),W===s.HALF_FLOAT&&(le=s.RG16F),W===s.UNSIGNED_BYTE&&(le=s.RG8)),M===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RG8UI),W===s.UNSIGNED_SHORT&&(le=s.RG16UI),W===s.UNSIGNED_INT&&(le=s.RG32UI),W===s.BYTE&&(le=s.RG8I),W===s.SHORT&&(le=s.RG16I),W===s.INT&&(le=s.RG32I)),M===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RGB8UI),W===s.UNSIGNED_SHORT&&(le=s.RGB16UI),W===s.UNSIGNED_INT&&(le=s.RGB32UI),W===s.BYTE&&(le=s.RGB8I),W===s.SHORT&&(le=s.RGB16I),W===s.INT&&(le=s.RGB32I)),M===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),W===s.UNSIGNED_INT&&(le=s.RGBA32UI),W===s.BYTE&&(le=s.RGBA8I),W===s.SHORT&&(le=s.RGBA16I),W===s.INT&&(le=s.RGBA32I)),M===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),M===s.RGBA){const $e=me?Vl:wt.getTransfer(he);W===s.FLOAT&&(le=s.RGBA32F),W===s.HALF_FLOAT&&(le=s.RGBA16F),W===s.UNSIGNED_BYTE&&(le=$e===It?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(N,M){let W;return N?M===null||M===Ni||M===Yo?W=s.DEPTH24_STENCIL8:M===bi?W=s.DEPTH32F_STENCIL8:M===qo&&(W=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ni||M===Yo?W=s.DEPTH_COMPONENT24:M===bi?W=s.DEPTH_COMPONENT32F:M===qo&&(W=s.DEPTH_COMPONENT16),W}function U(N,M){return _(N)===!0||N.isFramebufferTexture&&N.minFilter!==hn&&N.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function O(N){const M=N.target;M.removeEventListener("dispose",O),Y(M),M.isVideoTexture&&x.delete(M)}function k(N){const M=N.target;M.removeEventListener("dispose",k),R(M)}function Y(N){const M=r.get(N);if(M.__webglInit===void 0)return;const W=N.source,he=y.get(W);if(he){const me=he[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&C(N),Object.keys(he).length===0&&y.delete(W)}r.remove(N)}function C(N){const M=r.get(N);s.deleteTexture(M.__webglTexture);const W=N.source,he=y.get(W);delete he[M.__cacheKey],u.memory.textures--}function R(N){const M=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let me=0;me<M.__webglFramebuffer[he].length;me++)s.deleteFramebuffer(M.__webglFramebuffer[he][me]);else s.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)s.deleteFramebuffer(M.__webglFramebuffer[he]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=N.textures;for(let he=0,me=W.length;he<me;he++){const le=r.get(W[he]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),u.memory.textures--),r.remove(W[he])}r.remove(N)}let V=0;function se(){V=0}function ee(){const N=V;return N>=a.maxTextures&&st("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),V+=1,N}function de(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function ce(N,M){const W=r.get(N);if(N.isVideoTexture&&gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const he=N.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,N,M);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+M)}function ae(N,M){const W=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){te(W,N,M);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+M)}function $(N,M){const W=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){te(W,N,M);return}n.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+M)}function q(N,M){const W=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ue(W,N,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+M)}const fe={[wd]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[Td]:s.MIRRORED_REPEAT},re={[hn]:s.NEAREST,[ix]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Du]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},F={[ax]:s.NEVER,[fx]:s.ALWAYS,[lx]:s.LESS,[xf]:s.LEQUAL,[cx]:s.EQUAL,[_f]:s.GEQUAL,[ux]:s.GREATER,[dx]:s.NOTEQUAL};function X(N,M){if(M.type===bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Mn||M.magFilter===Du||M.magFilter===al||M.magFilter===es||M.minFilter===Mn||M.minFilter===Du||M.minFilter===al||M.minFilter===es)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,fe[M.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,fe[M.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,fe[M.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==al&&M.minFilter!==es||M.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(N,M){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",O));const he=M.source;let me=y.get(he);me===void 0&&(me={},y.set(he,me));const le=de(M);if(le!==N.__cacheKey){me[le]===void 0&&(me[le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,W=!0),me[le].usedTimes++;const $e=me[N.__cacheKey];$e!==void 0&&(me[N.__cacheKey].usedTimes--,$e.usedTimes===0&&C(M)),N.__cacheKey=le,N.__webglTexture=me[le].texture}return W}function Re(N,M,W){return Math.floor(Math.floor(N/W)/M)}function Ge(N,M,W,he){const le=N.updateRanges;if(le.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,W,he,M.data);else{le.sort((ye,Pe)=>ye.start-Pe.start);let $e=0;for(let ye=1;ye<le.length;ye++){const Pe=le[$e],We=le[ye],qe=Pe.start+Pe.count,Ae=Re(We.start,M.width,4),at=Re(Pe.start,M.width,4);We.start<=qe+1&&Ae===at&&Re(We.start+We.count-1,M.width,4)===Ae?Pe.count=Math.max(Pe.count,We.start+We.count-Pe.start):(++$e,le[$e]=We)}le.length=$e+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ye=0,Pe=le.length;ye<Pe;ye++){const We=le[ye],qe=Math.floor(We.start/4),Ae=Math.ceil(We.count/4),at=qe%M.width,H=Math.floor(qe/M.width),Le=Ae,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,at),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,at,H,Le,Me,W,he,M.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function te(N,M,W){let he=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=s.TEXTURE_3D);const me=Ee(N,M),le=M.source;n.bindTexture(he,N.__webglTexture,s.TEXTURE0+W);const $e=r.get(le);if(le.version!==$e.__version||me===!0){n.activeTexture(s.TEXTURE0+W);const Te=wt.getPrimaries(wt.workingColorSpace),ze=M.colorSpace===Tr?null:wt.getPrimaries(M.colorSpace),nt=M.colorSpace===Tr||Te===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ye=b(M.image,!1,a.maxTextureSize);ye=yt(M,ye);const Pe=l.convert(M.format,M.colorSpace),We=l.convert(M.type);let qe=D(M.internalFormat,Pe,We,M.colorSpace,M.isVideoTexture);X(he,M);let Ae;const at=M.mipmaps,H=M.isVideoTexture!==!0,Le=$e.__version===void 0||me===!0,Me=le.dataReady,De=U(M,ye);if(M.isDepthTexture)qe=P(M.format===ts,M.type),Le&&(H?n.texStorage2D(s.TEXTURE_2D,1,qe,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,qe,ye.width,ye.height,0,Pe,We,null));else if(M.isDataTexture)if(at.length>0){H&&Le&&n.texStorage2D(s.TEXTURE_2D,De,qe,at[0].width,at[0].height);for(let xe=0,pe=at.length;xe<pe;xe++)Ae=at[xe],H?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Pe,We,Ae.data):n.texImage2D(s.TEXTURE_2D,xe,qe,Ae.width,Ae.height,0,Pe,We,Ae.data);M.generateMipmaps=!1}else H?(Le&&n.texStorage2D(s.TEXTURE_2D,De,qe,ye.width,ye.height),Me&&Ge(M,ye,Pe,We)):n.texImage2D(s.TEXTURE_2D,0,qe,ye.width,ye.height,0,Pe,We,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,qe,at[0].width,at[0].height,ye.depth);for(let xe=0,pe=at.length;xe<pe;xe++)if(Ae=at[xe],M.format!==mi)if(Pe!==null)if(H){if(Me)if(M.layerUpdates.size>0){const Ce=Nm(Ae.width,Ae.height,M.format,M.type);for(const it of M.layerUpdates){const Dt=Ae.data.subarray(it*Ce/Ae.data.BYTES_PER_ELEMENT,(it+1)*Ce/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,it,Ae.width,Ae.height,1,Pe,Dt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,ye.depth,Pe,Ae.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,qe,Ae.width,Ae.height,ye.depth,0,Ae.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,ye.depth,Pe,We,Ae.data):n.texImage3D(s.TEXTURE_2D_ARRAY,xe,qe,Ae.width,Ae.height,ye.depth,0,Pe,We,Ae.data)}else{H&&Le&&n.texStorage2D(s.TEXTURE_2D,De,qe,at[0].width,at[0].height);for(let xe=0,pe=at.length;xe<pe;xe++)Ae=at[xe],M.format!==mi?Pe!==null?H?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Pe,Ae.data):n.compressedTexImage2D(s.TEXTURE_2D,xe,qe,Ae.width,Ae.height,0,Ae.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Pe,We,Ae.data):n.texImage2D(s.TEXTURE_2D,xe,qe,Ae.width,Ae.height,0,Pe,We,Ae.data)}else if(M.isDataArrayTexture)if(H){if(Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,qe,ye.width,ye.height,ye.depth),Me)if(M.layerUpdates.size>0){const xe=Nm(ye.width,ye.height,M.format,M.type);for(const pe of M.layerUpdates){const Ce=ye.data.subarray(pe*xe/ye.data.BYTES_PER_ELEMENT,(pe+1)*xe/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Pe,We,Ce)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,We,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,ye.width,ye.height,ye.depth,0,Pe,We,ye.data);else if(M.isData3DTexture)H?(Le&&n.texStorage3D(s.TEXTURE_3D,De,qe,ye.width,ye.height,ye.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,We,ye.data)):n.texImage3D(s.TEXTURE_3D,0,qe,ye.width,ye.height,ye.depth,0,Pe,We,ye.data);else if(M.isFramebufferTexture){if(Le)if(H)n.texStorage2D(s.TEXTURE_2D,De,qe,ye.width,ye.height);else{let xe=ye.width,pe=ye.height;for(let Ce=0;Ce<De;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,qe,xe,pe,0,Pe,We,null),xe>>=1,pe>>=1}}else if(at.length>0){if(H&&Le){const xe=Xe(at[0]);n.texStorage2D(s.TEXTURE_2D,De,qe,xe.width,xe.height)}for(let xe=0,pe=at.length;xe<pe;xe++)Ae=at[xe],H?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe,We,Ae):n.texImage2D(s.TEXTURE_2D,xe,qe,Pe,We,Ae);M.generateMipmaps=!1}else if(H){if(Le){const xe=Xe(ye);n.texStorage2D(s.TEXTURE_2D,De,qe,xe.width,xe.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,We,ye)}else n.texImage2D(s.TEXTURE_2D,0,qe,Pe,We,ye);_(M)&&g(he),$e.__version=le.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ue(N,M,W){if(M.image.length!==6)return;const he=Ee(N,M),me=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+W);const le=r.get(me);if(me.version!==le.__version||he===!0){n.activeTexture(s.TEXTURE0+W);const $e=wt.getPrimaries(wt.workingColorSpace),Te=M.colorSpace===Tr?null:wt.getPrimaries(M.colorSpace),ze=M.colorSpace===Tr||$e===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let pe=0;pe<6;pe++)!nt&&!ye?Pe[pe]=b(M.image[pe],!0,a.maxCubemapSize):Pe[pe]=ye?M.image[pe].image:M.image[pe],Pe[pe]=yt(M,Pe[pe]);const We=Pe[0],qe=l.convert(M.format,M.colorSpace),Ae=l.convert(M.type),at=D(M.internalFormat,qe,Ae,M.colorSpace),H=M.isVideoTexture!==!0,Le=le.__version===void 0||he===!0,Me=me.dataReady;let De=U(M,We);X(s.TEXTURE_CUBE_MAP,M);let xe;if(nt){H&&Le&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,We.width,We.height);for(let pe=0;pe<6;pe++){xe=Pe[pe].mipmaps;for(let Ce=0;Ce<xe.length;Ce++){const it=xe[Ce];M.format!==mi?qe!==null?H?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,it.width,it.height,qe,it.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,at,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,0,0,it.width,it.height,qe,Ae,it.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce,at,it.width,it.height,0,qe,Ae,it.data)}}}else{if(xe=M.mipmaps,H&&Le){xe.length>0&&De++;const pe=Xe(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Pe[pe].width,Pe[pe].height,qe,Ae,Pe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,at,Pe[pe].width,Pe[pe].height,0,qe,Ae,Pe[pe].data);for(let Ce=0;Ce<xe.length;Ce++){const Dt=xe[Ce].image[pe].image;H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,Dt.width,Dt.height,qe,Ae,Dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,at,Dt.width,Dt.height,0,qe,Ae,Dt.data)}}else{H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,qe,Ae,Pe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,at,qe,Ae,Pe[pe]);for(let Ce=0;Ce<xe.length;Ce++){const it=xe[Ce];H?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,0,0,qe,Ae,it.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce+1,at,qe,Ae,it.image[pe])}}}_(M)&&g(s.TEXTURE_CUBE_MAP),le.__version=me.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Se(N,M,W,he,me,le){const $e=l.convert(W.format,W.colorSpace),Te=l.convert(W.type),ze=D(W.internalFormat,$e,Te,W.colorSpace),nt=r.get(M),ye=r.get(W);if(ye.__renderTarget=M,!nt.__hasExternalTextures){const Pe=Math.max(1,M.width>>le),We=Math.max(1,M.height>>le);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,le,ze,Pe,We,M.depth,0,$e,Te,null):n.texImage2D(me,le,ze,Pe,We,0,$e,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),Ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,me,ye.__webglTexture,0,z(M)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,me,ye.__webglTexture,le),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(N,M,W){if(s.bindRenderbuffer(s.RENDERBUFFER,N),M.depthBuffer){const he=M.depthTexture,me=he&&he.isDepthTexture?he.type:null,le=P(M.stencilBuffer,me),$e=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ht(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(M),le,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(M),le,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,le,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,N)}else{const he=M.textures;for(let me=0;me<he.length;me++){const le=he[me],$e=l.convert(le.format,le.colorSpace),Te=l.convert(le.type),ze=D(le.internalFormat,$e,Te,le.colorSpace);Ht(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(M),ze,M.width,M.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(M),ze,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ze,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(N,M,W){const he=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),X(s.TEXTURE_CUBE_MAP,M.depthTexture);const nt=l.convert(M.depthTexture.format),ye=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===Zi?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(Pe=s.DEPTH24_STENCIL8);for(let We=0;We<6;We++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Pe,M.width,M.height,0,nt,ye,null)}}else ce(M.depthTexture,0);const le=me.__webglTexture,$e=z(M),Te=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,ze=M.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)Ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,Te,le,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ze,Te,le,0);else if(M.depthTexture.format===ts)Ht(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,Te,le,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,ze,Te,le,0);else throw new Error("Unknown depthTexture format")}function pt(N){const M=r.get(N),W=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=he}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Ue(M.__webglFramebuffer[he],N,he);else{const he=N.texture.mipmaps;he&&he.length>0?Ue(M.__webglFramebuffer[0],N,0):Ue(M.__webglFramebuffer,N,0)}else if(W){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=s.createRenderbuffer(),Be(M.__webglDepthbuffer[he],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Be(M.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,le)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(N,M,W){const he=r.get(N);M!==void 0&&Se(he.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&pt(N)}function ft(N){const M=N.texture,W=r.get(N),he=r.get(M);N.addEventListener("dispose",k);const me=N.textures,le=N.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=M.version,u.memory.textures++),le){W.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Te]=[];for(let ze=0;ze<M.mipmaps.length;ze++)W.__webglFramebuffer[Te][ze]=s.createFramebuffer()}else W.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Te=0;Te<M.mipmaps.length;Te++)W.__webglFramebuffer[Te]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if($e)for(let Te=0,ze=me.length;Te<ze;Te++){const nt=r.get(me[Te]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&Ht(N)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const ze=me[Te];W.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Te]);const nt=l.convert(ze.format,ze.colorSpace),ye=l.convert(ze.type),Pe=D(ze.internalFormat,nt,ye,ze.colorSpace,N.isXRRenderTarget===!0),We=z(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Pe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,W.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(W.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),X(s.TEXTURE_CUBE_MAP,M);for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)Se(W.__webglFramebuffer[Te][ze],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze);else Se(W.__webglFramebuffer[Te],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);_(M)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($e){for(let Te=0,ze=me.length;Te<ze;Te++){const nt=me[Te],ye=r.get(nt);let Pe=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,ye.__webglTexture),X(Pe,nt),Se(W.__webglFramebuffer,N,nt,s.COLOR_ATTACHMENT0+Te,Pe,0),_(nt)&&g(Pe)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,he.__webglTexture),X(Te,M),M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)Se(W.__webglFramebuffer[ze],N,M,s.COLOR_ATTACHMENT0,Te,ze);else Se(W.__webglFramebuffer,N,M,s.COLOR_ATTACHMENT0,Te,0);_(M)&&g(Te),n.unbindTexture()}N.depthBuffer&&pt(N)}function _t(N){const M=N.textures;for(let W=0,he=M.length;W<he;W++){const me=M[W];if(_(me)){const le=L(N),$e=r.get(me).__webglTexture;n.bindTexture(le,$e),g(le),n.unbindTexture()}}}const Pt=[],lt=[];function Vt(N){if(N.samples>0){if(Ht(N)===!1){const M=N.textures,W=N.width,he=N.height;let me=s.COLOR_BUFFER_BIT;const le=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(N),Te=M.length>1;if(Te)for(let nt=0;nt<M.length;nt++)n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=N.texture.mipmaps;ze&&ze.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let nt=0;nt<M.length;nt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const ye=r.get(M[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,W,he,0,0,W,he,me,s.NEAREST),m===!0&&(Pt.length=0,lt.length=0,Pt.push(s.COLOR_ATTACHMENT0+nt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Pt.push(le),lt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let nt=0;nt<M.length;nt++){n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,$e.__webglColorRenderbuffer[nt]);const ye=r.get(M[nt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function z(N){return Math.min(a.maxSamples,N.samples)}function Ht(N){const M=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(N){const M=u.render.frame;x.get(N)!==M&&(x.set(N,M),N.update())}function yt(N,M){const W=N.colorSpace,he=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==js&&W!==Tr&&(wt.getTransfer(W)===It?(he!==mi||me!==Yn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),M}function Xe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=se,this.setTexture2D=ce,this.setTexture2DArray=ae,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=$t,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function V1(s,e){function n(r,a=Tr){let l;const u=wt.getTransfer(a);if(r===Yn)return s.UNSIGNED_BYTE;if(r===hf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===g0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===v0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===p0)return s.BYTE;if(r===m0)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===ff)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===Ki)return s.HALF_FLOAT;if(r===x0)return s.ALPHA;if(r===_0)return s.RGB;if(r===mi)return s.RGBA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===y0)return s.RED;if(r===mf)return s.RED_INTEGER;if(r===Ws)return s.RG;if(r===gf)return s.RG_INTEGER;if(r===vf)return s.RGBA_INTEGER;if(r===Ul||r===Fl||r===Ol||r===kl)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bd||r===Ad||r===Cd||r===Rd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ad)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd||r===Nd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Pd||r===Nd)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ld)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Dd)return l.COMPRESSED_R11_EAC;if(r===Id)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ud)return l.COMPRESSED_RG11_EAC;if(r===Fd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Od||r===kd||r===Bd||r===zd||r===Vd||r===Hd||r===Gd||r===Wd||r===jd||r===Xd||r===qd||r===Yd||r===$d||r===Kd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Od)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zd||r===Qd||r===Jd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Zd)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ef||r===tf||r===nf||r===rf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ef)return l.COMPRESSED_RED_RGTC1_EXT;if(r===tf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class W1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new I0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new gi({vertexShader:H1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Li(new Yl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j1 extends qs{constructor(e,n){super();const r=this;let a=null,l=1,u=null,f="local-floor",m=1,h=null,x=null,v=null,y=null,S=null,w=null;const b=typeof XRWebGLBinding<"u",_=new W1,g={},L=n.getContextAttributes();let D=null,P=null;const U=[],O=[],k=new Lt;let Y=null;const C=new qn;C.viewport=new Yt;const R=new qn;R.viewport=new Yt;const V=[C,R],se=new t_;let ee=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=U[te];return ue===void 0&&(ue=new td,U[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=U[te];return ue===void 0&&(ue=new td,U[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=U[te];return ue===void 0&&(ue=new td,U[te]=ue),ue.getHandSpace()};function ce(te){const ue=O.indexOf(te.inputSource);if(ue===-1)return;const Se=U[ue];Se!==void 0&&(Se.update(te.inputSource,te.frame,h||u),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function ae(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",$);for(let te=0;te<U.length;te++){const ue=O[te];ue!==null&&(O[te]=null,U[te].disconnect(ue))}ee=null,de=null,_.reset();for(const te in g)delete g[te];e.setRenderTarget(D),S=null,y=null,v=null,a=null,P=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(Y),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(a,n)),v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",$),L.xrCompatible!==!0&&await n.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(k),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Be=null,Ue=null;L.depth&&(Ue=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=L.stencil?ts:Zi,Be=L.stencil?Yo:Ni);const pt={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(pt),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new Ri(y.textureWidth,y.textureHeight,{format:mi,type:Yn,depthTexture:new Ko(y.textureWidth,y.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Se={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ri(S.framebufferWidth,S.framebufferHeight,{format:mi,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await a.requestReferenceSpace(f),Ge.setContext(a),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(te){for(let ue=0;ue<te.removed.length;ue++){const Se=te.removed[ue],Be=O.indexOf(Se);Be>=0&&(O[Be]=null,U[Be].disconnect(Se))}for(let ue=0;ue<te.added.length;ue++){const Se=te.added[ue];let Be=O.indexOf(Se);if(Be===-1){for(let pt=0;pt<U.length;pt++)if(pt>=O.length){O.push(Se),Be=pt;break}else if(O[pt]===null){O[pt]=Se,Be=pt;break}if(Be===-1)break}const Ue=U[Be];Ue&&Ue.connect(Se)}}const q=new Q,fe=new Q;function re(te,ue,Se){q.setFromMatrixPosition(ue.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const Be=q.distanceTo(fe),Ue=ue.projectionMatrix.elements,pt=Se.projectionMatrix.elements,$t=Ue[14]/(Ue[10]-1),ft=Ue[14]/(Ue[10]+1),_t=(Ue[9]+1)/Ue[5],Pt=(Ue[9]-1)/Ue[5],lt=(Ue[8]-1)/Ue[0],Vt=(pt[8]+1)/pt[0],z=$t*lt,Ht=$t*Vt,gt=Be/(-lt+Vt),yt=gt*-lt;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(yt),te.translateZ(gt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ue[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=$t+gt,N=ft+gt,M=z-yt,W=Ht+(Be-yt),he=_t*ft/N*Xe,me=Pt*ft/N*Xe;te.projectionMatrix.makePerspective(M,W,he,me,Xe,N),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function F(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;let ue=te.near,Se=te.far;_.texture!==null&&(_.depthNear>0&&(ue=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),se.near=R.near=C.near=ue,se.far=R.far=C.far=Se,(ee!==se.near||de!==se.far)&&(a.updateRenderState({depthNear:se.near,depthFar:se.far}),ee=se.near,de=se.far),se.layers.mask=te.layers.mask|6,C.layers.mask=se.layers.mask&3,R.layers.mask=se.layers.mask&5;const Be=te.parent,Ue=se.cameras;F(se,Be);for(let pt=0;pt<Ue.length;pt++)F(Ue[pt],Be);Ue.length===2?re(se,C,R):se.projectionMatrix.copy(C.projectionMatrix),X(te,se,Be)};function X(te,ue,Se){Se===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=sf*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(te){m=te,y!==null&&(y.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(se)},this.getCameraTexture=function(te){return g[te]};let Ee=null;function Re(te,ue){if(x=ue.getViewerPose(h||u),w=ue,x!==null){const Se=x.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Be=!1;Se.length!==se.cameras.length&&(se.cameras.length=0,Be=!0);for(let ft=0;ft<Se.length;ft++){const _t=Se[ft];let Pt=null;if(S!==null)Pt=S.getViewport(_t);else{const Vt=v.getViewSubImage(y,_t);Pt=Vt.viewport,ft===0&&(e.setRenderTargetTextures(P,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(P))}let lt=V[ft];lt===void 0&&(lt=new qn,lt.layers.enable(ft),lt.viewport=new Yt,V[ft]=lt),lt.matrix.fromArray(_t.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(_t.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ft===0&&(se.matrix.copy(lt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Be===!0&&se.cameras.push(lt)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){v=r.getBinding();const ft=v.getDepthInformation(Se[0]);ft&&ft.isValid&&ft.texture&&_.init(ft,a.renderState)}if(Ue&&Ue.includes("camera-access")&&b){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<Se.length;ft++){const _t=Se[ft].camera;if(_t){let Pt=g[_t];Pt||(Pt=new I0,g[_t]=Pt);const lt=v.getCameraImage(_t);Pt.sourceTexture=lt}}}}for(let Se=0;Se<U.length;Se++){const Be=O[Se],Ue=U[Se];Be!==null&&Ue!==void 0&&Ue.update(Be,ue,h||u)}Ee&&Ee(te,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const Ge=new O0;Ge.setAnimationLoop(Re),this.setAnimationLoop=function(te){Ee=te},this.dispose=function(){}}}const Kr=new Qi,X1=new kt;function q1(s,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,C0(s)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function a(_,g,L,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(_,g):g.isMeshToonMaterial?(l(_,g),v(_,g)):g.isMeshPhongMaterial?(l(_,g),x(_,g)):g.isMeshStandardMaterial?(l(_,g),y(_,g),g.isMeshPhysicalMaterial&&S(_,g,P)):g.isMeshMatcapMaterial?(l(_,g),w(_,g)):g.isMeshDepthMaterial?l(_,g):g.isMeshDistanceMaterial?(l(_,g),b(_,g)):g.isMeshNormalMaterial?l(_,g):g.isLineBasicMaterial?(u(_,g),g.isLineDashedMaterial&&f(_,g)):g.isPointsMaterial?m(_,g,L,D):g.isSpriteMaterial?h(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===kn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===kn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const L=e.get(g),D=L.envMap,P=L.envMapRotation;D&&(_.envMap.value=D,Kr.copy(P),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),_.envMapRotation.value.setFromMatrix4(X1.makeRotationFromEuler(Kr)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function f(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function m(_,g,L,D){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*L,_.scale.value=D*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function x(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function v(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function y(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function S(_,g,L){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,g){g.matcap&&(_.matcap.value=g.matcap)}function b(_,g){const L=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Y1(s,e,n,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const P=D.program;r.uniformBlockBinding(L,P)}function h(L,D){let P=a[L.id];P===void 0&&(w(L),P=x(L),a[L.id]=P,L.addEventListener("dispose",_));const U=D.program;r.updateUBOMapping(L,U);const O=e.render.frame;l[L.id]!==O&&(y(L),l[L.id]=O)}function x(L){const D=v();L.__bindingPointIndex=D;const P=s.createBuffer(),U=L.__size,O=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,U,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function v(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const D=a[L.id],P=L.uniforms,U=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,k=P.length;O<k;O++){const Y=Array.isArray(P[O])?P[O]:[P[O]];for(let C=0,R=Y.length;C<R;C++){const V=Y[C];if(S(V,O,C,U)===!0){const se=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let de=0;for(let ce=0;ce<ee.length;ce++){const ae=ee[ce],$=b(ae);typeof ae=="number"||typeof ae=="boolean"?(V.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,se+de,V.__data)):ae.isMatrix3?(V.__data[0]=ae.elements[0],V.__data[1]=ae.elements[1],V.__data[2]=ae.elements[2],V.__data[3]=0,V.__data[4]=ae.elements[3],V.__data[5]=ae.elements[4],V.__data[6]=ae.elements[5],V.__data[7]=0,V.__data[8]=ae.elements[6],V.__data[9]=ae.elements[7],V.__data[10]=ae.elements[8],V.__data[11]=0):(ae.toArray(V.__data,de),de+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,D,P,U){const O=L.value,k=D+"_"+P;if(U[k]===void 0)return typeof O=="number"||typeof O=="boolean"?U[k]=O:U[k]=O.clone(),!0;{const Y=U[k];if(typeof O=="number"||typeof O=="boolean"){if(Y!==O)return U[k]=O,!0}else if(Y.equals(O)===!1)return Y.copy(O),!0}return!1}function w(L){const D=L.uniforms;let P=0;const U=16;for(let k=0,Y=D.length;k<Y;k++){const C=Array.isArray(D[k])?D[k]:[D[k]];for(let R=0,V=C.length;R<V;R++){const se=C[R],ee=Array.isArray(se.value)?se.value:[se.value];for(let de=0,ce=ee.length;de<ce;de++){const ae=ee[de],$=b(ae),q=P%U,fe=q%$.boundary,re=q+fe;P+=fe,re!==0&&U-re<$.storage&&(P+=U-re),se.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=P,P+=$.storage}}}const O=P%U;return O>0&&(P+=U-O),L.__size=P,L.__cache={},this}function b(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",L),D}function _(L){const D=L.target;D.removeEventListener("dispose",_);const P=u.indexOf(D.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function g(){for(const L in a)s.deleteBuffer(a[L]);u=[],a={},l={}}return{bind:m,update:h,dispose:g}}const $1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function K1(){return Ei===null&&(Ei=new Bx($1,16,16,Ws,Ki),Ei.name="DFG_LUT",Ei.minFilter=Mn,Ei.magFilter=Mn,Ei.wrapS=qi,Ei.wrapT=qi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class Z1{constructor(e={}){const{canvas:n=hx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1,outputBufferType:S=Yn}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const b=S,_=new Set([vf,gf,mf]),g=new Set([Yn,Ni,qo,Yo,hf,pf]),L=new Uint32Array(4),D=new Int32Array(4);let P=null,U=null;const O=[],k=[];let Y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1;this._outputColorSpace=ii;let V=0,se=0,ee=null,de=-1,ce=null;const ae=new Yt,$=new Yt;let q=null;const fe=new Rt(0);let re=0,F=n.width,X=n.height,Ee=1,Re=null,Ge=null;const te=new Yt(0,0,F,X),ue=new Yt(0,0,F,X);let Se=!1;const Be=new Mf;let Ue=!1,pt=!1;const $t=new kt,ft=new Q,_t=new Yt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Vt(){return ee===null?Ee:1}let z=r;function Ht(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${df}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Dt,!1),n.addEventListener("webglcontextcreationerror",St,!1),z===null){const j="webgl2";if(z=Ht(j,A),z===null)throw Ht(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let gt,yt,Xe,N,M,W,he,me,le,$e,Te,ze,nt,ye,Pe,We,qe,Ae,at,H,Le,Me,De,xe;function pe(){gt=new KS(z),gt.init(),Me=new V1(z,gt),yt=new VS(z,gt,e,Me),Xe=new B1(z,gt),yt.reversedDepthBuffer&&y&&Xe.buffers.depth.setReversed(!0),N=new JS(z),M=new w1,W=new z1(z,gt,Xe,M,yt,Me,N),he=new GS(C),me=new $S(C),le=new i_(z),De=new BS(z,le),$e=new ZS(z,le,N,De),Te=new tM(z,$e,le,N),at=new eM(z,yt,W),We=new HS(M),ze=new E1(C,he,me,gt,yt,De,We),nt=new q1(C,M),ye=new b1,Pe=new L1(gt),Ae=new kS(C,he,me,Xe,Te,w,m),qe=new O1(C,Te,yt),xe=new Y1(z,N,yt,Xe),H=new zS(z,gt,N),Le=new QS(z,gt,N),N.programs=ze.programs,C.capabilities=yt,C.extensions=gt,C.properties=M,C.renderLists=ye,C.shadowMap=qe,C.state=Xe,C.info=N}pe(),b!==Yn&&(Y=new iM(b,n.width,n.height,a,l));const Ce=new j1(C,z);this.xr=Ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(F,X,!1))},this.getSize=function(A){return A.set(F,X)},this.setSize=function(A,j,oe=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,X=j,n.width=Math.floor(A*Ee),n.height=Math.floor(j*Ee),oe===!0&&(n.style.width=A+"px",n.style.height=j+"px"),Y!==null&&Y.setSize(n.width,n.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(F*Ee,X*Ee).floor()},this.setDrawingBufferSize=function(A,j,oe){F=A,X=j,Ee=oe,n.width=Math.floor(A*oe),n.height=Math.floor(j*oe),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(b===Yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ae)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,j,oe,ne){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,j,oe,ne),Xe.viewport(ae.copy(te).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,j,oe,ne){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,j,oe,ne),Xe.scissor($.copy(ue).multiplyScalar(Ee).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){Xe.setScissorTest(Se=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,oe=!0){let ne=0;if(A){let Z=!1;if(ee!==null){const Ne=ee.texture.format;Z=_.has(Ne)}if(Z){const Ne=ee.texture.type,Fe=g.has(Ne),be=Ae.getClearColor(),He=Ae.getClearAlpha(),ke=be.r,tt=be.g,Ze=be.b;Fe?(L[0]=ke,L[1]=tt,L[2]=Ze,L[3]=He,z.clearBufferuiv(z.COLOR,0,L)):(D[0]=ke,D[1]=tt,D[2]=Ze,D[3]=He,z.clearBufferiv(z.COLOR,0,D))}else ne|=z.COLOR_BUFFER_BIT}j&&(ne|=z.DEPTH_BUFFER_BIT),oe&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Dt,!1),n.removeEventListener("webglcontextcreationerror",St,!1),Ae.dispose(),ye.dispose(),Pe.dispose(),M.dispose(),he.dispose(),me.dispose(),Te.dispose(),De.dispose(),xe.dispose(),ze.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Rr),Ce.removeEventListener("sessionend",Pr),si.stop()};function it(A){A.preventDefault(),sm("WebGLRenderer: Context Lost."),R=!0}function Dt(){sm("WebGLRenderer: Context Restored."),R=!1;const A=N.autoReset,j=qe.enabled,oe=qe.autoUpdate,ne=qe.needsUpdate,Z=qe.type;pe(),N.autoReset=A,qe.enabled=j,qe.autoUpdate=oe,qe.needsUpdate=ne,qe.type=Z}function St(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zn(A){const j=A.target;j.removeEventListener("dispose",zn),wn(j)}function wn(A){Qs(A),M.remove(A)}function Qs(A){const j=M.get(A).programs;j!==void 0&&(j.forEach(function(oe){ze.releaseProgram(oe)}),A.isShaderMaterial&&ze.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,oe,ne,Z,Ne){j===null&&(j=Pt);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,be=ia(A,j,oe,ne,Z);Xe.setMaterial(ne,Fe);let He=oe.index,ke=1;if(ne.wireframe===!0){if(He=$e.getWireframeAttribute(oe),He===void 0)return;ke=2}const tt=oe.drawRange,Ze=oe.attributes.position;let ut=tt.start*ke,Mt=(tt.start+tt.count)*ke;Ne!==null&&(ut=Math.max(ut,Ne.start*ke),Mt=Math.min(Mt,(Ne.start+Ne.count)*ke)),He!==null?(ut=Math.max(ut,0),Mt=Math.min(Mt,He.count)):Ze!=null&&(ut=Math.max(ut,0),Mt=Math.min(Mt,Ze.count));const Ft=Mt-ut;if(Ft<0||Ft===1/0)return;De.setup(Z,ne,be,oe,He);let Ut,Tt=H;if(He!==null&&(Ut=le.get(He),Tt=Le,Tt.setIndex(Ut)),Z.isMesh)ne.wireframe===!0?(Xe.setLineWidth(ne.wireframeLinewidth*Vt()),Tt.setMode(z.LINES)):Tt.setMode(z.TRIANGLES);else if(Z.isLine){let Qe=ne.linewidth;Qe===void 0&&(Qe=1),Xe.setLineWidth(Qe*Vt()),Z.isLineSegments?Tt.setMode(z.LINES):Z.isLineLoop?Tt.setMode(z.LINE_LOOP):Tt.setMode(z.LINE_STRIP)}else Z.isPoints?Tt.setMode(z.POINTS):Z.isSprite&&Tt.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,Ct=Z._multiDrawCounts,vt=Z._multiDrawCount,mn=He?le.get(He).bytesPerElement:1,vi=M.get(ne).currentProgram.getUniforms();for(let Jt=0;Jt<vt;Jt++)vi.setValue(z,"_gl_DrawID",Jt),Tt.render(Qe[Jt]/mn,Ct[Jt])}else if(Z.isInstancedMesh)Tt.renderInstances(ut,Ft,Z.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ct=Math.min(oe.instanceCount,Qe);Tt.renderInstances(ut,Ft,Ct)}else Tt.render(ut,Ft)};function Ji(A,j,oe){A.transparent===!0&&A.side===Xi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Nr(A,j,oe),A.side=Ar,A.needsUpdate=!0,Nr(A,j,oe),A.side=Xi):Nr(A,j,oe)}this.compile=function(A,j,oe=null){oe===null&&(oe=A),U=Pe.get(oe),U.init(j),k.push(U),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),A!==oe&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),U.setupLights();const ne=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ne=Z.material;if(Ne)if(Array.isArray(Ne))for(let Fe=0;Fe<Ne.length;Fe++){const be=Ne[Fe];Ji(be,oe,Z),ne.add(be)}else Ji(Ne,oe,Z),ne.add(Ne)}),U=k.pop(),ne},this.compileAsync=function(A,j,oe=null){const ne=this.compile(A,j,oe);return new Promise(Z=>{function Ne(){if(ne.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){Z(A);return}setTimeout(Ne,10)}gt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Js=null;function Cr(A){Js&&Js(A)}function Rr(){si.stop()}function Pr(){si.start()}const si=new O0;si.setAnimationLoop(Cr),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(A){Js=A,Ce.setAnimationLoop(A),A===null?si.stop():si.start()},Ce.addEventListener("sessionstart",Rr),Ce.addEventListener("sessionend",Pr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const oe=Ce.enabled===!0&&Ce.isPresenting===!0,ne=Y!==null&&(ee===null||oe)&&Y.begin(C,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(j),j=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,j,ee),U=Pe.get(A,k.length),U.init(j),k.push(U),$t.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Be.setFromProjectionMatrix($t,Ai,j.reversedDepth),pt=this.localClippingEnabled,Ue=We.init(this.clippingPlanes,pt),P=ye.get(A,O.length),P.init(),O.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Fe=C.xr.getDepthSensingMesh();Fe!==null&&eo(Fe,j,-1/0,C.sortObjects)}eo(A,j,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(Re,Ge),lt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,lt&&Ae.addToRenderList(P,A),this.info.render.frame++,Ue===!0&&We.beginShadows();const Z=U.state.shadowsArray;if(qe.render(Z,A,j),Ue===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&Y.hasRenderPass())===!1){const Fe=P.opaque,be=P.transmissive;if(U.setupLights(),j.isArrayCamera){const He=j.cameras;if(be.length>0)for(let ke=0,tt=He.length;ke<tt;ke++){const Ze=He[ke];ta(Fe,be,A,Ze)}lt&&Ae.render(A);for(let ke=0,tt=He.length;ke<tt;ke++){const Ze=He[ke];ea(P,A,Ze,Ze.viewport)}}else be.length>0&&ta(Fe,be,A,j),lt&&Ae.render(A),ea(P,A,j)}ee!==null&&se===0&&(W.updateMultisampleRenderTarget(ee),W.updateRenderTargetMipmap(ee)),ne&&Y.end(C),A.isScene===!0&&A.onAfterRender(C,A,j),De.resetDefaultState(),de=-1,ce=null,k.pop(),k.length>0?(U=k[k.length-1],Ue===!0&&We.setGlobalState(C.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?P=O[O.length-1]:P=null};function eo(A,j,oe,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){ne&&_t.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);const Fe=Te.update(A),be=A.material;be.visible&&P.push(A,Fe,be,oe,_t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const Fe=Te.update(A),be=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_t.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),_t.copy(Fe.boundingSphere.center)),_t.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(be)){const He=Fe.groups;for(let ke=0,tt=He.length;ke<tt;ke++){const Ze=He[ke],ut=be[Ze.materialIndex];ut&&ut.visible&&P.push(A,Fe,ut,oe,_t.z,Ze)}}else be.visible&&P.push(A,Fe,be,oe,_t.z,null)}}const Ne=A.children;for(let Fe=0,be=Ne.length;Fe<be;Fe++)eo(Ne[Fe],j,oe,ne)}function ea(A,j,oe,ne){const{opaque:Z,transmissive:Ne,transparent:Fe}=A;U.setupLightsView(oe),Ue===!0&&We.setGlobalState(C.clippingPlanes,oe),ne&&Xe.viewport(ae.copy(ne)),Z.length>0&&$n(Z,j,oe),Ne.length>0&&$n(Ne,j,oe),Fe.length>0&&$n(Fe,j,oe),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function ta(A,j,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ne.id]===void 0){const ut=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ne.id]=new Ri(1,1,{generateMipmaps:!0,type:ut?Ki:Yn,minFilter:es,samples:yt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ne=U.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||ae;Ne.setSize(Fe.z*C.transmissionResolutionScale,Fe.w*C.transmissionResolutionScale);const be=C.getRenderTarget(),He=C.getActiveCubeFace(),ke=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(fe),re=C.getClearAlpha(),re<1&&C.setClearColor(16777215,.5),C.clear(),lt&&Ae.render(oe);const tt=C.toneMapping;C.toneMapping=Ci;const Ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),U.setupLightsView(ne),Ue===!0&&We.setGlobalState(C.clippingPlanes,ne),$n(A,oe,ne),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Mt=0,Ft=j.length;Mt<Ft;Mt++){const Ut=j[Mt],{object:Tt,geometry:Qe,material:Ct,group:vt}=Ut;if(Ct.side===Xi&&Tt.layers.test(ne.layers)){const mn=Ct.side;Ct.side=kn,Ct.needsUpdate=!0,to(Tt,oe,ne,Qe,Ct,vt),Ct.side=mn,Ct.needsUpdate=!0,ut=!0}}ut===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}C.setRenderTarget(be,He,ke),C.setClearColor(fe,re),Ze!==void 0&&(ne.viewport=Ze),C.toneMapping=tt}function $n(A,j,oe){const ne=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Ne=A.length;Z<Ne;Z++){const Fe=A[Z],{object:be,geometry:He,group:ke}=Fe;let tt=Fe.material;tt.allowOverride===!0&&ne!==null&&(tt=ne),be.layers.test(oe.layers)&&to(be,j,oe,He,tt,ke)}}function to(A,j,oe,ne,Z,Ne){A.onBeforeRender(C,j,oe,ne,Z,Ne),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(C,j,oe,ne,A,Ne),Z.transparent===!0&&Z.side===Xi&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,C.renderBufferDirect(oe,j,ne,Z,A,Ne),Z.side=Ar,Z.needsUpdate=!0,C.renderBufferDirect(oe,j,ne,Z,A,Ne),Z.side=Xi):C.renderBufferDirect(oe,j,ne,Z,A,Ne),A.onAfterRender(C,j,oe,ne,Z,Ne)}function Nr(A,j,oe){j.isScene!==!0&&(j=Pt);const ne=M.get(A),Z=U.state.lights,Ne=U.state.shadowsArray,Fe=Z.state.version,be=ze.getParameters(A,Z.state,Ne,j,oe),He=ze.getProgramCacheKey(be);let ke=ne.programs;ne.environment=A.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(A.isMeshStandardMaterial?me:he).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",zn),ke=new Map,ne.programs=ke);let tt=ke.get(He);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===Fe)return no(A,be),tt}else be.uniforms=ze.getUniforms(A),A.onBeforeCompile(be,C),tt=ze.acquireProgram(be,He),ke.set(He,tt),ne.uniforms=be.uniforms;const Ze=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=We.uniform),no(A,be),ne.needsLights=sa(A),ne.lightsStateVersion=Fe,ne.needsLights&&(Ze.ambientLightColor.value=Z.state.ambient,Ze.lightProbe.value=Z.state.probe,Ze.directionalLights.value=Z.state.directional,Ze.directionalLightShadows.value=Z.state.directionalShadow,Ze.spotLights.value=Z.state.spot,Ze.spotLightShadows.value=Z.state.spotShadow,Ze.rectAreaLights.value=Z.state.rectArea,Ze.ltc_1.value=Z.state.rectAreaLTC1,Ze.ltc_2.value=Z.state.rectAreaLTC2,Ze.pointLights.value=Z.state.point,Ze.pointLightShadows.value=Z.state.pointShadow,Ze.hemisphereLights.value=Z.state.hemi,Ze.directionalShadowMap.value=Z.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ze.spotShadowMap.value=Z.state.spotShadowMap,Ze.spotLightMatrix.value=Z.state.spotLightMatrix,Ze.spotLightMap.value=Z.state.spotLightMap,Ze.pointShadowMap.value=Z.state.pointShadowMap,Ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=tt,ne.uniformsList=null,tt}function na(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function no(A,j){const oe=M.get(A);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function ia(A,j,oe,ne,Z){j.isScene!==!0&&(j=Pt),W.resetTextureUnits();const Ne=j.fog,Fe=ne.isMeshStandardMaterial?j.environment:null,be=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:js,He=(ne.isMeshStandardMaterial?me:he).get(ne.envMap||Fe),ke=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,tt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!oe.morphAttributes.position,ut=!!oe.morphAttributes.normal,Mt=!!oe.morphAttributes.color;let Ft=Ci;ne.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ft=C.toneMapping);const Ut=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Tt=Ut!==void 0?Ut.length:0,Qe=M.get(ne),Ct=U.state.lights;if(Ue===!0&&(pt===!0||A!==ce)){const sn=A===ce&&ne.id===de;We.setState(ne,A,sn)}let vt=!1;ne.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ct.state.version||Qe.outputColorSpace!==be||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==He||ne.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==We.numPlanes||Qe.numIntersection!==We.numIntersection)||Qe.vertexAlphas!==ke||Qe.vertexTangents!==tt||Qe.morphTargets!==Ze||Qe.morphNormals!==ut||Qe.morphColors!==Mt||Qe.toneMapping!==Ft||Qe.morphTargetsCount!==Tt)&&(vt=!0):(vt=!0,Qe.__version=ne.version);let mn=Qe.currentProgram;vt===!0&&(mn=Nr(ne,j,Z));let vi=!1,Jt=!1,Lr=!1;const Nt=mn.getUniforms(),ot=Qe.uniforms;if(Xe.useProgram(mn.program)&&(vi=!0,Jt=!0,Lr=!0),ne.id!==de&&(de=ne.id,Jt=!0),vi||ce!==A){Xe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(z,"projectionMatrix",A.projectionMatrix),Nt.setValue(z,"viewMatrix",A.matrixWorldInverse);const on=Nt.map.cameraPosition;on!==void 0&&on.setValue(z,ft.setFromMatrixPosition(A.matrixWorld)),yt.logarithmicDepthBuffer&&Nt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,Jt=!0,Lr=!0)}if(Qe.needsLights&&(Ct.state.directionalShadowMap.length>0&&Nt.setValue(z,"directionalShadowMap",Ct.state.directionalShadowMap,W),Ct.state.spotShadowMap.length>0&&Nt.setValue(z,"spotShadowMap",Ct.state.spotShadowMap,W),Ct.state.pointShadowMap.length>0&&Nt.setValue(z,"pointShadowMap",Ct.state.pointShadowMap,W)),Z.isSkinnedMesh){Nt.setOptional(z,Z,"bindMatrix"),Nt.setOptional(z,Z,"bindMatrixInverse");const sn=Z.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Nt.setValue(z,"boneTexture",sn.boneTexture,W))}Z.isBatchedMesh&&(Nt.setOptional(z,Z,"batchingTexture"),Nt.setValue(z,"batchingTexture",Z._matricesTexture,W),Nt.setOptional(z,Z,"batchingIdTexture"),Nt.setValue(z,"batchingIdTexture",Z._indirectTexture,W),Nt.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Nt.setValue(z,"batchingColorTexture",Z._colorsTexture,W));const Tn=oe.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&at.update(Z,oe,mn),(Jt||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,Nt.setValue(z,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ot.envMap.value=He,ot.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(ot.envMapIntensity.value=j.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=K1()),Jt&&(Nt.setValue(z,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&ra(ot,Lr),Ne&&ne.fog===!0&&nt.refreshFogUniforms(ot,Ne),nt.refreshMaterialUniforms(ot,ne,Ee,X,U.state.transmissionRenderTarget[A.id]),zl.upload(z,na(Qe),ot,W)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(zl.upload(z,na(Qe),ot,W),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(z,"center",Z.center),Nt.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Nt.setValue(z,"normalMatrix",Z.normalMatrix),Nt.setValue(z,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const sn=ne.uniformsGroups;for(let on=0,is=sn.length;on<is;on++){const xi=sn[on];xe.update(xi,mn),xe.bind(xi,mn)}}return mn}function ra(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function sa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,j,oe){const ne=M.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=j,M.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const oe=M.get(A);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const Zl=z.createFramebuffer();this.setRenderTarget=function(A,j=0,oe=0){ee=A,V=j,se=oe;let ne=null,Z=!1,Ne=!1;if(A){const be=M.get(A);if(be.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),ae.copy(A.viewport),$.copy(A.scissor),q=A.scissorTest,Xe.viewport(ae),Xe.scissor($),Xe.setScissorTest(q),de=-1;return}else if(be.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(be.__hasExternalTextures)W.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(be.__boundDepthTexture!==tt){if(tt!==null&&M.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ne=!0);const ke=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?ne=ke[j][oe]:ne=ke[j],Z=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ne=M.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[oe]:ne=ke,ae.copy(A.viewport),$.copy(A.scissor),q=A.scissorTest}else ae.copy(te).multiplyScalar(Ee).floor(),$.copy(ue).multiplyScalar(Ee).floor(),q=Se;if(oe!==0&&(ne=Zl),Xe.bindFramebuffer(z.FRAMEBUFFER,ne)&&Xe.drawBuffers(A,ne),Xe.viewport(ae),Xe.scissor($),Xe.setScissorTest(q),Z){const be=M.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,be.__webglTexture,oe)}else if(Ne){const be=j;for(let He=0;He<A.textures.length;He++){const ke=M.get(A.textures[He]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+He,ke.__webglTexture,oe,be)}}else if(A!==null&&oe!==0){const be=M.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,oe)}de=-1},this.readRenderTargetPixels=function(A,j,oe,ne,Z,Ne,Fe,be=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){Xe.bindFramebuffer(z.FRAMEBUFFER,He);try{const ke=A.textures[be],tt=ke.format,Ze=ke.type;if(!yt.textureFormatReadable(tt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ze)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&oe>=0&&oe<=A.height-Z&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),z.readPixels(j,oe,ne,Z,Me.convert(tt),Me.convert(Ze),Ne))}finally{const ke=ee!==null?M.get(ee).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,oe,ne,Z,Ne,Fe,be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(j>=0&&j<=A.width-ne&&oe>=0&&oe<=A.height-Z){Xe.bindFramebuffer(z.FRAMEBUFFER,He);const ke=A.textures[be],tt=ke.format,Ze=ke.type;if(!yt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.bufferData(z.PIXEL_PACK_BUFFER,Ne.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),z.readPixels(j,oe,ne,Z,Me.convert(tt),Me.convert(Ze),0);const Mt=ee!==null?M.get(ee).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,Mt);const Ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await px(z,Ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ut),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ne),z.deleteBuffer(ut),z.deleteSync(Ft),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,oe=0){const ne=Math.pow(2,-oe),Z=Math.floor(A.image.width*ne),Ne=Math.floor(A.image.height*ne),Fe=j!==null?j.x:0,be=j!==null?j.y:0;W.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,oe,0,0,Fe,be,Z,Ne),Xe.unbindTexture()};const Ql=z.createFramebuffer(),Wt=z.createFramebuffer();this.copyTextureToTexture=function(A,j,oe=null,ne=null,Z=0,Ne=null){Ne===null&&(Z!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=Z,Z=0):Ne=0);let Fe,be,He,ke,tt,Ze,ut,Mt,Ft;const Ut=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(oe!==null)Fe=oe.max.x-oe.min.x,be=oe.max.y-oe.min.y,He=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,tt=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const Tn=Math.pow(2,-Z);Fe=Math.floor(Ut.width*Tn),be=Math.floor(Ut.height*Tn),A.isDataArrayTexture?He=Ut.depth:A.isData3DTexture?He=Math.floor(Ut.depth*Tn):He=1,ke=0,tt=0,Ze=0}ne!==null?(ut=ne.x,Mt=ne.y,Ft=ne.z):(ut=0,Mt=0,Ft=0);const Tt=Me.convert(j.format),Qe=Me.convert(j.type);let Ct;j.isData3DTexture?(W.setTexture3D(j,0),Ct=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),Ct=z.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),Ct=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=z.getParameter(z.UNPACK_ROW_LENGTH),mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),vi=z.getParameter(z.UNPACK_SKIP_PIXELS),Jt=z.getParameter(z.UNPACK_SKIP_ROWS),Lr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ke),z.pixelStorei(z.UNPACK_SKIP_ROWS,tt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ze);const Nt=A.isDataArrayTexture||A.isData3DTexture,ot=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const Tn=M.get(A),sn=M.get(j),on=M.get(Tn.__renderTarget),is=M.get(sn.__renderTarget);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,on.__webglFramebuffer),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let xi=0;xi<He;xi++)Nt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(A).__webglTexture,Z,Ze+xi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,M.get(j).__webglTexture,Ne,Ft+xi)),z.blitFramebuffer(ke,tt,Fe,be,ut,Mt,Fe,be,z.DEPTH_BUFFER_BIT,z.NEAREST);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||M.has(A)){const Tn=M.get(A),sn=M.get(j);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,Ql),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Wt);for(let on=0;on<He;on++)Nt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tn.__webglTexture,Z,Ze+on):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Tn.__webglTexture,Z),ot?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,sn.__webglTexture,Ne,Ft+on):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,sn.__webglTexture,Ne),Z!==0?z.blitFramebuffer(ke,tt,Fe,be,ut,Mt,Fe,be,z.COLOR_BUFFER_BIT,z.NEAREST):ot?z.copyTexSubImage3D(Ct,Ne,ut,Mt,Ft+on,ke,tt,Fe,be):z.copyTexSubImage2D(Ct,Ne,ut,Mt,ke,tt,Fe,be);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ot?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ct,Ne,ut,Mt,Ft,Fe,be,He,Tt,Qe,Ut.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Ct,Ne,ut,Mt,Ft,Fe,be,He,Tt,Ut.data):z.texSubImage3D(Ct,Ne,ut,Mt,Ft,Fe,be,He,Tt,Qe,Ut):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ne,ut,Mt,Fe,be,Tt,Qe,Ut.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ne,ut,Mt,Ut.width,Ut.height,Tt,Ut.data):z.texSubImage2D(z.TEXTURE_2D,Ne,ut,Mt,Fe,be,Tt,Qe,Ut);z.pixelStorei(z.UNPACK_ROW_LENGTH,vt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,vi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Jt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Lr),Ne===0&&j.generateMipmaps&&z.generateMipmap(Ct),Xe.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Xe.unbindTexture()},this.resetState=function(){V=0,se=0,ee=null,Xe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const t0=new Q,Q1=new Ys,n0=new Q;class J1 extends pn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(n){n.element&&n.element instanceof n.element.ownerDocument.defaultView.Element&&n.element.parentNode!==null&&n.element.remove()})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this}}const wi=new kt,eE=new kt;class tE{constructor(e={}){const n=this;let r,a,l,u;const f={camera:{style:""},objects:new WeakMap},m=e.element!==void 0?e.element:document.createElement("div");m.style.overflow="hidden",this.domElement=m;const h=document.createElement("div");h.style.transformOrigin="0 0",h.style.pointerEvents="none",m.appendChild(h);const x=document.createElement("div");x.style.transformStyle="preserve-3d",h.appendChild(x),this.getSize=function(){return{width:r,height:a}},this.render=function(_,g){const L=g.projectionMatrix.elements[5]*u;g.view&&g.view.enabled?(h.style.transform=`translate( ${-g.view.offsetX*(r/g.view.width)}px, ${-g.view.offsetY*(a/g.view.height)}px )`,h.style.transform+=`scale( ${g.view.fullWidth/g.view.width}, ${g.view.fullHeight/g.view.height} )`):h.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld();let D,P;g.isOrthographicCamera&&(D=-(g.right+g.left)/2,P=(g.top+g.bottom)/2);const U=g.view&&g.view.enabled?g.view.height/g.view.fullHeight:1,O=g.isOrthographicCamera?`scale( ${U} )scale(`+L+")translate("+v(D)+"px,"+v(P)+"px)"+y(g.matrixWorldInverse):`scale( ${U} )translateZ(`+L+"px)"+y(g.matrixWorldInverse),Y=(g.isPerspectiveCamera?"perspective("+L+"px) ":"")+O+"translate("+l+"px,"+u+"px)";f.camera.style!==Y&&(x.style.transform=Y,f.camera.style=Y),b(_,_,g)},this.setSize=function(_,g){r=_,a=g,l=r/2,u=a/2,m.style.width=_+"px",m.style.height=g+"px",h.style.width=_+"px",h.style.height=g+"px",x.style.width=_+"px",x.style.height=g+"px"};function v(_){return Math.abs(_)<1e-10?0:_}function y(_){const g=_.elements;return"matrix3d("+v(g[0])+","+v(-g[1])+","+v(g[2])+","+v(g[3])+","+v(g[4])+","+v(-g[5])+","+v(g[6])+","+v(g[7])+","+v(g[8])+","+v(-g[9])+","+v(g[10])+","+v(g[11])+","+v(g[12])+","+v(-g[13])+","+v(g[14])+","+v(g[15])+")"}function S(_){const g=_.elements;return"translate(-50%,-50%)"+("matrix3d("+v(g[0])+","+v(g[1])+","+v(g[2])+","+v(g[3])+","+v(-g[4])+","+v(-g[5])+","+v(-g[6])+","+v(-g[7])+","+v(g[8])+","+v(g[9])+","+v(g[10])+","+v(g[11])+","+v(g[12])+","+v(g[13])+","+v(g[14])+","+v(g[15])+")")}function w(_){_.isCSS3DObject&&(_.element.style.display="none");for(let g=0,L=_.children.length;g<L;g++)w(_.children[g])}function b(_,g,L,D){if(_.visible===!1){w(_);return}if(_.isCSS3DObject){const P=_.layers.test(L.layers)===!0,U=_.element;if(U.style.display=P===!0?"":"none",P===!0){_.onBeforeRender(n,g,L);let O;_.isCSS3DSprite?(wi.copy(L.matrixWorldInverse),wi.transpose(),_.rotation2D!==0&&wi.multiply(eE.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(t0,Q1,n0),wi.setPosition(t0),wi.scale(n0),wi.elements[3]=0,wi.elements[7]=0,wi.elements[11]=0,wi.elements[15]=1,O=S(wi)):O=S(_.matrixWorld);const k=f.objects.get(_);if(k===void 0||k.style!==O){U.style.transform=O;const Y={style:O};f.objects.set(_,Y)}U.parentNode!==x&&x.appendChild(U),_.onAfterRender(n,g,L)}}for(let P=0,U=_.children.length;P<U;P++)b(_.children[P],g,L)}}}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iE=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),i0=s=>{const e=iE(s);return e.charAt(0).toUpperCase()+e.slice(1)},H0=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=Rn.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...f},m)=>Rn.createElement("svg",{ref:m,...rE,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:H0("lucide",a),...f},[...u.map(([h,x])=>Rn.createElement(h,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(s,e)=>{const n=Rn.forwardRef(({className:r,...a},l)=>Rn.createElement(sE,{ref:l,iconNode:e,className:H0(`lucide-${nE(i0(s))}`,`lucide-${s}`,r),...a}));return n.displayName=i0(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Xl=mt("award",oE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],lE=mt("book-open",aE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],uE=mt("briefcase",cE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],G0=mt("calendar",dE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],hE=mt("chevron-down",fE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],mE=mt("chevron-left",pE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vE=mt("chevron-right",gE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],_E=mt("chevron-up",xE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],SE=mt("cloud",yE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],EE=mt("code-xml",ME);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],TE=mt("code",wE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],AE=mt("cpu",bE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],RE=mt("database",CE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],cf=mt("external-link",PE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],W0=mt("github",NE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],j0=mt("globe",LE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],IE=mt("graduation-cap",DE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],FE=mt("house",UE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],kE=mt("layers",OE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],zE=mt("linkedin",BE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],HE=mt("loader-circle",VE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],WE=mt("mail",GE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],wf=mt("map-pin",jE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],qE=mt("message-square",XE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],$E=mt("phone",YE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],ZE=mt("qr-code",KE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],JE=mt("send",QE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],tw=mt("smartphone",ew);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],iw=mt("sparkles",nw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],X0=mt("star",rw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ow=mt("target",sw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],lw=mt("terminal",aw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],q0=mt("trending-up",cw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],dw=mt("trophy",uw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],hw=mt("twitter",fw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],mw=mt("user",pw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],vw=mt("zap",gw);function xw(){return T.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-white px-8",children:[T.jsx("div",{className:"mb-8",children:T.jsx("div",{className:"inline-block px-6 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full backdrop-blur-xl",children:T.jsx("span",{className:"text-purple-300 text-sm font-semibold tracking-widest",children:"ABOUT ME"})})}),T.jsxs("div",{className:"mb-6 relative",children:[T.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-500/50 rotate-6 hover:rotate-0 transition-transform duration-500",children:T.jsx(mw,{className:"w-16 h-16 text-white"})}),T.jsx("div",{className:"absolute -top-2 -right-2 bg-gradient-to-br from-green-400 to-green-600 w-10 h-10 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-green-500/50 animate-pulse",children:T.jsx(iw,{className:"w-5 h-5 text-white"})})]}),T.jsx("h2",{className:"text-5xl font-bold mb-3 tracking-tight",children:T.jsx("span",{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent",children:"Alex Morgan"})}),T.jsxs("div",{className:"flex items-center gap-3 mb-2 px-6 py-2 bg-purple-500/10 rounded-full border border-purple-500/30",children:[T.jsx(EE,{className:"w-5 h-5 text-purple-400"}),T.jsx("p",{className:"text-lg text-purple-200 font-medium tracking-wide",children:"Full Stack Developer"})]}),T.jsxs("div",{className:"flex items-center gap-2 text-slate-400 mb-8",children:[T.jsx(wf,{className:"w-4 h-4"}),T.jsx("span",{className:"text-sm",children:"San Francisco, CA"})]}),T.jsxs("div",{className:"text-center space-y-4 text-slate-300 max-w-2xl mb-8 leading-relaxed",children:[T.jsxs("p",{className:"text-base",children:["Passionate developer with ",T.jsx("span",{className:"text-purple-400 font-semibold",children:"5+ years of experience"})," building scalable web applications and elegant user interfaces that users love."]}),T.jsxs("p",{className:"text-base",children:["Specialized in ",T.jsx("span",{className:"text-blue-400 font-semibold",children:"React, Node.js, and cloud technologies"}),". Love turning complex problems into simple, beautiful, and performant solutions."]})]}),T.jsxs("div",{className:"flex gap-4",children:[T.jsxs("div",{className:"relative group",children:[T.jsx("div",{className:"absolute inset-0 bg-purple-500/20 blur-xl rounded-xl group-hover:bg-purple-500/30 transition-all"}),T.jsxs("div",{className:"relative px-6 py-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/40 backdrop-blur-xl",children:[T.jsx("div",{className:"text-3xl font-bold text-purple-300 mb-1",children:"5+"}),T.jsx("div",{className:"text-xs text-slate-400 uppercase tracking-wider",children:"Years Exp"})]})]}),T.jsxs("div",{className:"relative group",children:[T.jsx("div",{className:"absolute inset-0 bg-blue-500/20 blur-xl rounded-xl group-hover:bg-blue-500/30 transition-all"}),T.jsxs("div",{className:"relative px-6 py-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/40 backdrop-blur-xl",children:[T.jsx("div",{className:"text-3xl font-bold text-blue-300 mb-1",children:"50+"}),T.jsx("div",{className:"text-xs text-slate-400 uppercase tracking-wider",children:"Projects"})]})]}),T.jsxs("div",{className:"relative group",children:[T.jsx("div",{className:"absolute inset-0 bg-green-500/20 blur-xl rounded-xl group-hover:bg-green-500/30 transition-all"}),T.jsxs("div",{className:"relative px-6 py-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/40 backdrop-blur-xl",children:[T.jsx("div",{className:"text-3xl font-bold text-green-300 mb-1",children:"30+"}),T.jsx("div",{className:"text-xs text-slate-400 uppercase tracking-wider",children:"Clients"})]})]})]}),T.jsxs("div",{className:"mt-8 flex gap-3",children:[T.jsxs("div",{className:"px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center gap-2",children:[T.jsx(Xl,{className:"w-4 h-4 text-orange-400"}),T.jsx("span",{className:"text-xs text-orange-300 font-semibold",children:"Award Winner"})]}),T.jsxs("div",{className:"px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center gap-2",children:[T.jsx(vw,{className:"w-4 h-4 text-cyan-400"}),T.jsx("span",{className:"text-xs text-cyan-300 font-semibold",children:"Fast Learner"})]})]})]})}const _w=[{icon:TE,title:"Frontend Development",skills:[{name:"React.js",level:95},{name:"Next.js",level:90},{name:"TypeScript",level:92},{name:"Tailwind CSS",level:95},{name:"Vue.js",level:85}],color:"purple"},{icon:RE,title:"Backend Development",skills:[{name:"Node.js",level:93},{name:"Python",level:88},{name:"PostgreSQL",level:90},{name:"MongoDB",level:87},{name:"GraphQL",level:85}],color:"blue"},{icon:SE,title:"DevOps & Cloud",skills:[{name:"AWS",level:88},{name:"Docker",level:92},{name:"Kubernetes",level:80},{name:"CI/CD",level:90},{name:"Terraform",level:75}],color:"green"},{icon:tw,title:"Mobile & Other",skills:[{name:"React Native",level:85},{name:"REST APIs",level:95},{name:"WebSockets",level:88},{name:"WebGL/Three.js",level:80}],color:"pink"}];function yw(){return T.jsxs("div",{className:"h-full overflow-y-auto",children:[T.jsx("div",{className:"mb-8",children:T.jsx("div",{className:"inline-block px-6 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full backdrop-blur-xl mb-6",children:T.jsx("span",{className:"text-blue-300 text-sm font-semibold tracking-widest",children:"TECHNICAL SKILLS"})})}),T.jsx("div",{className:"grid grid-cols-2 gap-6",children:_w.map((s,e)=>{const n=s.icon;return T.jsxs("div",{className:"p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 transition-all duration-300",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[T.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg",children:T.jsx(n,{className:"w-6 h-6 text-white"})}),T.jsx("h3",{className:"font-bold text-white text-lg",children:s.title})]}),T.jsx("div",{className:"space-y-4",children:s.skills.map((r,a)=>T.jsxs("div",{children:[T.jsxs("div",{className:"flex justify-between items-center mb-2",children:[T.jsx("span",{className:"text-sm font-medium text-slate-300",children:r.name}),T.jsxs("span",{className:"text-xs font-bold text-purple-400",children:[r.level,"%"]})]}),T.jsx("div",{className:"h-2 bg-slate-700/50 rounded-full overflow-hidden",children:T.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000",style:{width:`${r.level}%`}})})]},a))})]},e)})}),T.jsxs("div",{className:"mt-6 grid grid-cols-3 gap-4",children:[T.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl text-center",children:[T.jsx(lw,{className:"w-8 h-8 text-purple-400 mx-auto mb-2"}),T.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:"10+"}),T.jsx("div",{className:"text-xs text-slate-400",children:"Languages"})]}),T.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl text-center",children:[T.jsx(AE,{className:"w-8 h-8 text-blue-400 mx-auto mb-2"}),T.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:"25+"}),T.jsx("div",{className:"text-xs text-slate-400",children:"Frameworks"})]}),T.jsxs("div",{className:"p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl text-center",children:[T.jsx(j0,{className:"w-8 h-8 text-green-400 mx-auto mb-2"}),T.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:"15+"}),T.jsx("div",{className:"text-xs text-slate-400",children:"Tools"})]})]})]})}const Sw=[{title:"FinTech Dashboard Platform",description:"Real-time analytics dashboard for financial data with advanced charting and AI predictions",tech:["React","TypeScript","Node.js","PostgreSQL","TensorFlow"],stars:1234,image:"💹",metrics:{users:"50K+",uptime:"99.9%"}},{title:"E-Commerce Marketplace",description:"Full-featured marketplace with payment processing, inventory management, and vendor portal",tech:["Next.js","Stripe","MongoDB","Redis","AWS"],stars:856,image:"🛒",metrics:{users:"100K+",revenue:"$2M+"}},{title:"AI Content Generator",description:"Smart content creation platform powered by GPT-4 with custom fine-tuning and SEO optimization",tech:["React","Python","FastAPI","OpenAI","Docker"],stars:2145,image:"🤖",metrics:{users:"25K+",content:"1M+"}},{title:"Real-Time Collaboration Suite",description:"Team collaboration tool with video conferencing, document editing, and project management",tech:["Vue.js","WebRTC","Socket.io","Kubernetes"],stars:678,image:"👥",metrics:{users:"30K+",sessions:"500K+"}},{title:"Healthcare Management System",description:"HIPAA-compliant patient management system with telemedicine capabilities",tech:["Next.js","PostgreSQL","AWS","FHIR"],stars:432,image:"🏥",metrics:{hospitals:"50+",patients:"200K+"}},{title:"IoT Monitoring Dashboard",description:"Industrial IoT platform for real-time sensor data monitoring and predictive maintenance",tech:["React","MQTT","InfluxDB","Grafana"],stars:589,image:"📡",metrics:{devices:"10K+",datapoints:"100M+"}}];function Mw(){return T.jsxs("div",{className:"h-full overflow-y-auto",children:[T.jsx("div",{className:"mb-8",children:T.jsx("div",{className:"inline-block px-6 py-2 bg-green-500/20 border border-green-500/40 rounded-full backdrop-blur-xl mb-6",children:T.jsx("span",{className:"text-green-300 text-sm font-semibold tracking-widest",children:"FEATURED PROJECTS"})})}),T.jsx("div",{className:"grid grid-cols-2 gap-5",children:Sw.map((s,e)=>T.jsxs("div",{className:"group p-5 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10",children:[T.jsxs("div",{className:"flex items-start justify-between mb-3",children:[T.jsx("div",{className:"text-4xl",children:s.image}),T.jsxs("div",{className:"flex gap-2",children:[T.jsx("button",{className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:T.jsx(W0,{className:"w-4 h-4 text-slate-400 hover:text-white"})}),T.jsx("button",{className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:T.jsx(cf,{className:"w-4 h-4 text-slate-400 hover:text-white"})})]})]}),T.jsx("h3",{className:"font-bold text-white text-lg mb-2 group-hover:text-green-300 transition-colors",children:s.title}),T.jsx("p",{className:"text-sm text-slate-400 mb-4 line-clamp-2",children:s.description}),T.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tech.map((n,r)=>T.jsx("span",{className:"px-2 py-1 bg-green-500/10 text-green-300 rounded-lg text-xs border border-green-500/20 font-medium",children:n},r))}),T.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-slate-700/50",children:[T.jsxs("div",{className:"flex items-center gap-4 text-xs",children:[T.jsxs("div",{className:"flex items-center gap-1 text-yellow-400",children:[T.jsx(X0,{className:"w-4 h-4 fill-current"}),T.jsx("span",{className:"font-semibold",children:s.stars})]}),T.jsxs("div",{className:"text-slate-400",children:[Object.entries(s.metrics)[0][0],": ",T.jsx("span",{className:"text-white font-semibold",children:Object.entries(s.metrics)[0][1]})]})]}),T.jsx(q0,{className:"w-4 h-4 text-green-400"})]})]},e))})]})}const Ew=[{title:"Senior Full Stack Developer",company:"TechCorp Solutions",location:"San Francisco, CA",period:"2022 - Present",type:"Full-time",description:"Leading development of cloud-native microservices architecture serving 1M+ users",achievements:["Architected and deployed scalable microservices reducing server costs by 40%","Led team of 8 developers using Agile methodologies","Improved application performance by 65% through optimization","Implemented CI/CD pipeline reducing deployment time by 80%"],tags:["React","Node.js","AWS","Kubernetes"]},{title:"Full Stack Developer",company:"InnovateLabs",location:"Remote",period:"2020 - 2022",type:"Full-time",description:"Built MVP and scaled product from 0 to 100K users in 18 months",achievements:["Developed core product features from scratch using React and Node.js","Integrated payment systems processing $5M+ annually","Implemented real-time features using WebSockets","Mentored 3 junior developers"],tags:["Next.js","PostgreSQL","Stripe","Docker"]},{title:"Frontend Developer",company:"Digital Agency Pro",location:"New York, NY",period:"2019 - 2020",type:"Full-time",description:"Created responsive web applications for Fortune 500 clients",achievements:["Delivered 20+ high-quality projects for major brands","Achieved 98% client satisfaction rating","Reduced page load times by 50% on average","Implemented modern design systems"],tags:["React","TypeScript","Tailwind","Figma"]}];function ww(){return T.jsxs("div",{className:"h-full overflow-y-auto",children:[T.jsx("div",{className:"mb-8",children:T.jsx("div",{className:"inline-block px-6 py-2 bg-red-500/20 border border-red-500/40 rounded-full backdrop-blur-xl mb-6",children:T.jsx("span",{className:"text-red-300 text-sm font-semibold tracking-widest",children:"WORK EXPERIENCE"})})}),T.jsx("div",{className:"space-y-6",children:Ew.map((s,e)=>T.jsxs("div",{className:"relative pl-8 pb-6 border-l-2 border-red-500/30 last:pb-0 group",children:[T.jsx("div",{className:"absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-600 border-4 border-slate-900 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform"}),T.jsxs("div",{className:"p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300",children:[T.jsxs("div",{className:"flex items-start justify-between mb-3",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"font-bold text-white text-xl mb-1",children:s.title}),T.jsxs("div",{className:"flex items-center gap-3 text-sm mb-2",children:[T.jsxs("div",{className:"flex items-center gap-1 text-red-300 font-semibold",children:[T.jsx(uE,{className:"w-4 h-4"}),s.company]}),T.jsxs("div",{className:"flex items-center gap-1 text-slate-400",children:[T.jsx(wf,{className:"w-3 h-3"}),s.location]})]})]}),T.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full",children:T.jsx("span",{className:"text-xs text-red-300 font-semibold",children:s.type})})]}),T.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-400 mb-4",children:[T.jsx(G0,{className:"w-4 h-4"}),T.jsx("span",{className:"font-medium",children:s.period})]}),T.jsx("p",{className:"text-slate-300 mb-4 leading-relaxed",children:s.description}),T.jsx("div",{className:"space-y-2 mb-4",children:s.achievements.map((n,r)=>T.jsxs("div",{className:"flex items-start gap-3 text-sm text-slate-400",children:[T.jsx(q0,{className:"w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"}),T.jsx("span",{children:n})]},r))}),T.jsx("div",{className:"flex flex-wrap gap-2",children:s.tags.map((n,r)=>T.jsx("span",{className:"px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs border border-slate-600 font-medium",children:n},r))})]})]},e))}),T.jsxs("div",{className:"mt-6 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[T.jsx(Xl,{className:"w-6 h-6 text-red-400"}),T.jsx("h3",{className:"font-bold text-white",children:"Total Impact"})]}),T.jsxs("p",{className:"text-slate-300 text-sm",children:["5+ years building products used by ",T.jsx("span",{className:"text-red-400 font-bold",children:"1M+ users"}),", generating ",T.jsx("span",{className:"text-red-400 font-bold",children:"$10M+ revenue"}),", leading teams of ",T.jsx("span",{className:"text-red-400 font-bold",children:"15+ developers"})]})]})]})}function Tw(){const[s,e]=Rn.useState({name:"",email:"",message:""}),[n,r]=Rn.useState("idle"),a=l=>{l.preventDefault(),r("sending"),setTimeout(()=>{r("sent"),e({name:"",email:"",message:""}),setTimeout(()=>r("idle"),3e3)},1500)};return T.jsxs("div",{className:"h-full overflow-y-auto",children:[T.jsx("div",{className:"mb-8",children:T.jsx("div",{className:"inline-block px-6 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full backdrop-blur-xl mb-6",children:T.jsx("span",{className:"text-orange-300 text-sm font-semibold tracking-widest",children:"GET IN TOUCH"})})}),T.jsxs("div",{className:"grid grid-cols-2 gap-6 mb-8",children:[T.jsxs("div",{className:"space-y-4",children:[T.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Let's Work Together"}),T.jsxs("div",{className:"space-y-3",children:[T.jsxs("a",{href:"mailto:alex.morgan@example.com",className:"flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 group",children:[T.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform",children:T.jsx(WE,{className:"w-6 h-6 text-white"})}),T.jsxs("div",{children:[T.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Email"}),T.jsx("div",{className:"text-white font-semibold",children:"alex.morgan@example.com"})]})]}),T.jsxs("a",{href:"tel:+1234567890",className:"flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group",children:[T.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform",children:T.jsx($E,{className:"w-6 h-6 text-white"})}),T.jsxs("div",{children:[T.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Phone"}),T.jsx("div",{className:"text-white font-semibold",children:"+1 (234) 567-890"})]})]}),T.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30",children:[T.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg",children:T.jsx(wf,{className:"w-6 h-6 text-white"})}),T.jsxs("div",{children:[T.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Location"}),T.jsx("div",{className:"text-white font-semibold",children:"San Francisco, CA"})]})]})]}),T.jsxs("div",{className:"pt-4",children:[T.jsx("div",{className:"text-sm text-slate-400 mb-3",children:"Connect on social media"}),T.jsxs("div",{className:"flex gap-3",children:[T.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 border border-blue-500/40 hover:bg-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group",children:T.jsx(zE,{className:"w-5 h-5 text-blue-400 group-hover:text-white"})}),T.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 flex items-center justify-center rounded-xl bg-slate-500/20 border border-slate-500/40 hover:bg-slate-500/30 hover:border-slate-400/60 transition-all duration-300 group",children:T.jsx(W0,{className:"w-5 h-5 text-slate-400 group-hover:text-white"})}),T.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/20 border border-sky-500/40 hover:bg-sky-500/30 hover:border-sky-400/60 transition-all duration-300 group",children:T.jsx(hw,{className:"w-5 h-5 text-sky-400 group-hover:text-white"})})]})]}),T.jsxs("div",{className:"mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/30",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[T.jsx(G0,{className:"w-5 h-5 text-purple-400"}),T.jsx("span",{className:"text-white font-semibold",children:"Schedule a Meeting"})]}),T.jsx("p",{className:"text-sm text-slate-400 mb-3",children:"Book a 30-minute consultation call"}),T.jsx("button",{className:"w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-semibold transition-colors",children:"Book Now"})]})]}),T.jsxs("div",{className:"p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[T.jsx(qE,{className:"w-6 h-6 text-orange-400"}),T.jsx("h3",{className:"text-xl font-bold text-white",children:"Send a Message"})]}),T.jsxs("form",{onSubmit:a,className:"space-y-4",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"Name"}),T.jsx("input",{type:"text",placeholder:"Your full name",value:s.name,onChange:l=>e({...s,name:l.target.value}),className:"w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors",required:!0})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"Email"}),T.jsx("input",{type:"email",placeholder:"your@email.com",value:s.email,onChange:l=>e({...s,email:l.target.value}),className:"w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors",required:!0})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-sm font-medium text-slate-300 mb-2",children:"Message"}),T.jsx("textarea",{placeholder:"Tell me about your project...",value:s.message,onChange:l=>e({...s,message:l.target.value}),rows:6,className:"w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none",required:!0})]}),T.jsxs("button",{type:"submit",disabled:n!=="idle",className:"w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 disabled:from-green-600 disabled:to-green-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 disabled:cursor-not-allowed",children:[n==="idle"&&T.jsxs(T.Fragment,{children:[T.jsx(JE,{className:"w-5 h-5"}),T.jsx("span",{children:"Send Message"})]}),n==="sending"&&T.jsx("span",{children:"Sending..."}),n==="sent"&&T.jsx("span",{children:"✓ Message Sent!"})]})]}),n==="sent"&&T.jsx("div",{className:"mt-4 p-3 bg-green-500/20 border border-green-500/40 rounded-xl text-green-300 text-sm text-center",children:"Thank you! I'll get back to you soon."})]})]})]})}const bw=[{degree:"Master of Science in Computer Science",institution:"Stanford University",location:"Stanford, CA",year:"2017 - 2019",gpa:"3.9/4.0",focus:"Distributed Systems & Machine Learning",achievements:["Published 2 research papers on distributed computing","Teaching Assistant for Advanced Algorithms course","Dean's List all semesters"]},{degree:"Bachelor of Science in Software Engineering",institution:"Massachusetts Institute of Technology",location:"Cambridge, MA",year:"2013 - 2017",gpa:"3.8/4.0",focus:"Web Technologies & Software Architecture",achievements:["Graduated Magna Cum Laude","Led university hackathon team to 1st place","President of Computer Science Club"]}],Aw=[{name:"AWS Certified Solutions Architect - Professional",issuer:"Amazon Web Services",year:"2023",icon:"☁️"},{name:"Google Cloud Professional Developer",issuer:"Google Cloud Platform",year:"2022",icon:"🌐"},{name:"Certified Kubernetes Administrator (CKA)",issuer:"Cloud Native Computing Foundation",year:"2021",icon:"⚙️"},{name:"Meta Front-End Developer Professional",issuer:"Meta",year:"2021",icon:"⚛️"},{name:"MongoDB Certified Developer",issuer:"MongoDB University",year:"2020",icon:"🍃"},{name:"Terraform Associate Certification",issuer:"HashiCorp",year:"2023",icon:"🔧"}];function Cw(){return T.jsxs("div",{className:"h-full overflow-y-auto",children:[T.jsx("div",{className:"mb-8",children:T.jsx("div",{className:"inline-block px-6 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full backdrop-blur-xl mb-6",children:T.jsx("span",{className:"text-cyan-300 text-sm font-semibold tracking-widest",children:"EDUCATION & CERTIFICATIONS"})})}),T.jsxs("div",{className:"mb-8",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[T.jsx(IE,{className:"w-8 h-8 text-cyan-400"}),T.jsx("h3",{className:"text-2xl font-bold text-white",children:"Academic Background"})]}),T.jsx("div",{className:"space-y-6",children:bw.map((s,e)=>T.jsxs("div",{className:"p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300",children:[T.jsx("div",{className:"flex items-start justify-between mb-4",children:T.jsxs("div",{children:[T.jsx("h4",{className:"font-bold text-white text-xl mb-2",children:s.degree}),T.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[T.jsx("div",{className:"text-cyan-300 font-semibold text-lg",children:s.institution}),T.jsx("div",{className:"px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full",children:T.jsxs("span",{className:"text-xs text-cyan-300 font-semibold",children:["GPA: ",s.gpa]})})]}),T.jsxs("div",{className:"text-slate-400 text-sm",children:[s.location," • ",s.year]})]})}),T.jsxs("div",{className:"mb-4 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl",children:[T.jsx("div",{className:"text-sm text-slate-400 mb-1",children:"Focus Area"}),T.jsx("div",{className:"text-white font-semibold",children:s.focus})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsx("div",{className:"text-sm font-semibold text-slate-300 mb-2",children:"Key Achievements:"}),s.achievements.map((n,r)=>T.jsxs("div",{className:"flex items-start gap-3 text-sm text-slate-400",children:[T.jsx(X0,{className:"w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0"}),T.jsx("span",{children:n})]},r))]})]},e))})]}),T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[T.jsx(Xl,{className:"w-8 h-8 text-yellow-400"}),T.jsx("h3",{className:"text-2xl font-bold text-white",children:"Professional Certifications"})]}),T.jsx("div",{className:"grid grid-cols-2 gap-4",children:Aw.map((s,e)=>T.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group",children:[T.jsxs("div",{className:"flex items-start justify-between mb-3",children:[T.jsx("div",{className:"text-3xl",children:s.icon}),T.jsx("div",{className:"px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-lg",children:T.jsx("span",{className:"text-xs text-yellow-300 font-bold",children:s.year})})]}),T.jsx("h4",{className:"font-bold text-white text-sm mb-2 group-hover:text-yellow-300 transition-colors",children:s.name}),T.jsx("div",{className:"text-xs text-slate-400",children:s.issuer})]},e))})]}),T.jsxs("div",{className:"mt-8 grid grid-cols-3 gap-4",children:[T.jsxs("div",{className:"p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 rounded-xl text-center",children:[T.jsx(dw,{className:"w-8 h-8 text-cyan-400 mx-auto mb-2"}),T.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:"2"}),T.jsx("div",{className:"text-xs text-slate-400",children:"Degrees"})]}),T.jsxs("div",{className:"p-4 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl text-center",children:[T.jsx(Xl,{className:"w-8 h-8 text-yellow-400 mx-auto mb-2"}),T.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:"6"}),T.jsx("div",{className:"text-xs text-slate-400",children:"Certifications"})]}),T.jsxs("div",{className:"p-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl text-center",children:[T.jsx(ow,{className:"w-8 h-8 text-purple-400 mx-auto mb-2"}),T.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:"3.85"}),T.jsx("div",{className:"text-xs text-slate-400",children:"Avg GPA"})]})]}),T.jsxs("div",{className:"mt-6 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[T.jsx(lE,{className:"w-6 h-6 text-purple-400"}),T.jsx("h3",{className:"font-bold text-white",children:"Continuous Learning"})]}),T.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Committed to lifelong learning through online courses, tech conferences, and staying current with emerging technologies. Active on platforms like Coursera, Udemy, and Frontend Masters."})]})]})}function Rw({targetRotation:s}){const e=Rn.useRef(null),n=Rn.useRef(null),r=Rn.useRef({x:0,y:0}),a=Rn.useRef({x:0,y:0});return Rn.useEffect(()=>{if(!e.current||!n.current)return;const l=new Mm,u=new qn(50,window.innerWidth/window.innerHeight,1,5e3);u.position.z=1500;const f=new tE;f.setSize(window.innerWidth,window.innerHeight),e.current.appendChild(f.domElement);const m=new Mm,h=new Z1({antialias:!1,alpha:!0,powerPreference:"high-performance"});h.setSize(window.innerWidth,window.innerHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(h.domElement);const x=new Ef(150,32,32),v=new gi({uniforms:{time:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        varying vec2 vUv;
        
        void main() {
          vec2 center = vec2(0.5);
          float dist = distance(vUv, center);
          float ring = sin(dist * 15.0 - time) * 0.5 + 0.5;
          vec3 color = mix(vec3(0.5, 0.0, 1.0), vec3(0.0, 0.5, 1.0), ring);
          float alpha = (1.0 - dist * 2.0) * ring * 0.7;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,blending:fd}),y=new Li(x,v);y.position.set(-800,-600,-2e3),m.add(y);const S=new Bn,w=[];for(let X=0;X<2e3;X++){const Ee=(Math.random()-.5)*4e3,Re=(Math.random()-.5)*4e3,Ge=(Math.random()-.5)*4e3;w.push(Ee,Re,Ge)}S.setAttribute("position",new En(w,3));const b=new D0({color:16777215,size:2,transparent:!0,opacity:.6}),_=new jx(S,b);m.add(_);const g=new Ks(1e3,1e3,1e3),L=new qx(g),D=new L0({color:9133302,transparent:!0,opacity:.3}),P=new Wx(L,D);m.add(P);const U=new e_(4210752,.5);m.add(U);const O=[],k=[9133302,3900150,1096065,15680580,16347926,440020];for(let X=0;X<6;X++){const Ee=new Jx(k[X],.3,600);m.add(Ee),O.push(Ee)}const Y=new jo;[{component:xw,color:"#8b5cf6",position:[0,0,500],rotation:[0,0,0]},{component:yw,color:"#3b82f6",position:[0,0,-500],rotation:[0,Math.PI,0]},{component:Mw,color:"#10b981",position:[500,0,0],rotation:[0,Math.PI/2,0]},{component:ww,color:"#ef4444",position:[-500,0,0],rotation:[0,-Math.PI/2,0]},{component:Tw,color:"#f97316",position:[0,500,0],rotation:[-Math.PI/2,0,0]},{component:Cw,color:"#06b6d4",position:[0,-500,0],rotation:[Math.PI/2,0,0]}].forEach((X,Ee)=>{const Re=document.createElement("div");Re.style.width="960px",Re.style.height="960px",Re.style.padding="60px",Re.style.background="linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 27, 75, 0.95) 100%)",Re.style.border=`3px solid ${X.color}`,Re.style.borderRadius="24px",Re.style.boxShadow=`0 0 60px ${X.color}40, inset 0 0 40px ${X.color}08`,Re.style.overflow="auto",Re.style.backdropFilter="blur(20px)";const Ge=X.component;r0.createRoot(Re).render(T.jsx(Ge,{}));const ue=new J1(Re);ue.position.set(X.position[0],X.position[1],X.position[2]),ue.rotation.set(X.rotation[0],X.rotation[1],X.rotation[2]),Y.add(ue),O[Ee].position.set(X.position[0],X.position[1],X.position[2])}),l.add(Y);let R=!1,V={x:0,y:0};const se=X=>{R=!0,V={x:X.clientX,y:X.clientY},a.current={x:0,y:0}},ee=X=>{if(R){const Ee=X.clientX-V.x,Re=X.clientY-V.y;a.current.y=Ee*.005,a.current.x=Re*.005,V={x:X.clientX,y:X.clientY}}},de=()=>{R=!1},ce=X=>{X.preventDefault(),u.position.z+=X.deltaY*.5,u.position.z=Math.max(800,Math.min(2500,u.position.z))};document.addEventListener("mousedown",se),document.addEventListener("mousemove",ee),document.addEventListener("mouseup",de),document.addEventListener("wheel",ce,{passive:!1});let ae,$=0;const fe=1e3/60,re=X=>{ae=requestAnimationFrame(re);const Ee=X-$;if(Ee<fe)return;if($=X-Ee%fe,v.uniforms.time&&(v.uniforms.time.value=X*.001),y.rotation.y+=.001,!R){r.current.x+=a.current.x,r.current.y+=a.current.y;const Ge=s.x-r.current.x,te=s.y-r.current.y;r.current.x+=Ge*.1,r.current.y+=te*.1,a.current.x*=.95,a.current.y*=.95}r.current.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,r.current.x)),Y.rotation.x=r.current.x,Y.rotation.y=r.current.y,P.rotation.x=r.current.x,P.rotation.y=r.current.y;const Re=Math.sin(X*5e-4)*20;Y.position.y=Re,P.position.y=Re,_.rotation.y+=1e-4,f.render(l,u),h.render(m,u)};re(0);const F=()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight),h.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",F),()=>{cancelAnimationFrame(ae),window.removeEventListener("resize",F),document.removeEventListener("mousedown",se),document.removeEventListener("mousemove",ee),document.removeEventListener("mouseup",de),document.removeEventListener("wheel",ce),e.current&&f.domElement.parentNode===e.current&&e.current.removeChild(f.domElement),n.current&&h.domElement.parentNode===n.current&&n.current.removeChild(h.domElement),h.dispose(),x.dispose(),v.dispose(),S.dispose(),b.dispose()}},[s]),T.jsxs(T.Fragment,{children:[T.jsx("div",{ref:n,className:"absolute inset-0",style:{zIndex:1}}),T.jsx("div",{ref:e,className:"absolute inset-0",style:{zIndex:2}})]})}function Pw({onNavigate:s}){return T.jsxs("div",{className:"absolute bottom-8 left-8 z-20",children:[T.jsx("div",{className:"relative",children:T.jsxs("div",{className:"w-56 h-56 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-950/90 backdrop-blur-2xl border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 flex items-center justify-center relative",children:[T.jsx("div",{className:"absolute inset-4 rounded-full border border-purple-500/10"}),T.jsx("div",{className:"absolute inset-8 rounded-full border border-purple-500/5"}),T.jsxs("button",{onClick:()=>s("front"),className:"relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/50 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10 group border-2 border-purple-400/50",title:"Home - About",children:[T.jsx(FE,{className:"w-6 h-6 text-white mb-0.5"}),T.jsx("span",{className:"text-[8px] text-white/80 font-semibold tracking-wider",children:"HOME"})]}),T.jsxs("button",{onClick:()=>s("up"),className:"absolute top-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-orange-600 hover:to-orange-700 border-2 border-orange-500/30 hover:border-orange-400/60 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl",title:"Contact",children:[T.jsx(_E,{className:"w-7 h-7 text-orange-400 group-hover:text-white transition-colors"}),T.jsx("span",{className:"text-[9px] text-orange-300 group-hover:text-white font-semibold tracking-wider mt-0.5",children:"CONTACT"})]}),T.jsxs("button",{onClick:()=>s("down"),className:"absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-cyan-600 hover:to-cyan-700 border-2 border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl",title:"Education",children:[T.jsx(hE,{className:"w-7 h-7 text-cyan-400 group-hover:text-white transition-colors"}),T.jsx("span",{className:"text-[9px] text-cyan-300 group-hover:text-white font-semibold tracking-wider mt-0.5",children:"EDUCATION"})]}),T.jsxs("button",{onClick:()=>s("left"),className:"absolute left-3 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-red-600 hover:to-red-700 border-2 border-red-500/30 hover:border-red-400/60 shadow-lg shadow-red-500/10 hover:shadow-red-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl",title:"Experience",children:[T.jsx(mE,{className:"w-7 h-7 text-red-400 group-hover:text-white transition-colors"}),T.jsx("span",{className:"text-[8px] text-red-300 group-hover:text-white font-semibold tracking-wider mt-0.5",children:"EXPERIENCE"})]}),T.jsxs("button",{onClick:()=>s("right"),className:"absolute right-3 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-green-600 hover:to-green-700 border-2 border-green-500/30 hover:border-green-400/60 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl",title:"Projects",children:[T.jsx(vE,{className:"w-7 h-7 text-green-400 group-hover:text-white transition-colors"}),T.jsx("span",{className:"text-[9px] text-green-300 group-hover:text-white font-semibold tracking-wider mt-0.5",children:"PROJECTS"})]})]})}),T.jsxs("div",{className:"mt-6 flex gap-3",children:[T.jsx("button",{onClick:()=>s("front"),className:"flex-1 px-4 py-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/40 hover:to-purple-600/40 border border-purple-500/50 hover:border-purple-400/70 rounded-xl text-purple-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20",children:"ABOUT"}),T.jsxs("button",{onClick:()=>s("back"),className:"flex-1 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/40 hover:to-blue-600/40 border border-blue-500/50 hover:border-blue-400/70 rounded-xl text-blue-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 flex items-center justify-center gap-2",children:[T.jsx(kE,{className:"w-4 h-4"}),"SKILLS"]})]})]})}function Nw(){const[s,e]=Rn.useState(!0);return Rn.useEffect(()=>{const n=setTimeout(()=>{e(!1)},1500);return()=>clearTimeout(n)},[]),s?T.jsx("div",{className:"fixed inset-0 bg-black z-50 flex items-center justify-center",children:T.jsxs("div",{className:"text-center",children:[T.jsx(HE,{className:"w-16 h-16 text-purple-500 animate-spin mx-auto mb-4"}),T.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Loading Portfolio"}),T.jsx("p",{className:"text-purple-300",children:"Initializing 3D space..."})]})}):null}function Lw(){return T.jsx("div",{className:"absolute bottom-8 right-8 z-20",children:T.jsxs("div",{className:"bg-gradient-to-br from-slate-900/90 via-purple-900/30 to-slate-900/90 backdrop-blur-2xl border-2 border-purple-500/30 rounded-2xl p-6 shadow-2xl shadow-purple-500/20 max-w-xs",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[T.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30",children:T.jsx(j0,{className:"w-5 h-5 text-white"})}),T.jsxs("div",{children:[T.jsx("h3",{className:"font-bold text-white tracking-wide",children:"DIGITAL CARD"}),T.jsx("p",{className:"text-xs text-slate-400",children:"Scan to visit portfolio"})]})]}),T.jsxs("div",{className:"relative mb-4 group",children:[T.jsx("div",{className:"w-full aspect-square bg-white rounded-xl p-4 shadow-lg",children:T.jsxs("div",{className:"w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden",children:[T.jsx(ZE,{className:"w-24 h-24 text-purple-400/50"}),T.jsx("div",{className:"absolute inset-0 opacity-20",children:T.jsx("div",{className:"grid grid-cols-8 grid-rows-8 h-full w-full p-2 gap-1",children:Array.from({length:64}).map((s,e)=>T.jsx("div",{className:`${Math.random()>.5?"bg-white":"bg-transparent"} rounded-sm`},e))})})]})}),T.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"})]}),T.jsxs("div",{className:"space-y-2",children:[T.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-500/20",children:[T.jsx("span",{className:"text-sm text-slate-300 font-medium",children:"Website"}),T.jsxs("a",{href:"https://alexmorgan.dev",target:"_blank",rel:"noopener noreferrer",className:"text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm font-semibold",children:["alexmorgan.dev",T.jsx(cf,{className:"w-3 h-3"})]})]}),T.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-500/20",children:[T.jsx("span",{className:"text-sm text-slate-300 font-medium",children:"Status"}),T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),T.jsx("span",{className:"text-green-400 text-sm font-semibold",children:"Available"})]})]})]}),T.jsxs("button",{className:"w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl text-white font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2",children:[T.jsx(cf,{className:"w-4 h-4"}),"VISIT PORTFOLIO"]})]})})}function Dw(){const[s,e]=Rn.useState({x:0,y:0}),n=r=>{const a=Math.PI/2;switch(r){case"up":e(l=>({x:Math.max(l.x-a,-Math.PI/2),y:l.y}));break;case"down":e(l=>({x:Math.min(l.x+a,Math.PI/2),y:l.y}));break;case"left":e(l=>({...l,y:l.y+a}));break;case"right":e(l=>({...l,y:l.y-a}));break;case"front":e({x:0,y:0});break;case"back":e({x:0,y:Math.PI});break}};return T.jsxs("div",{className:"w-full h-screen bg-black overflow-hidden relative",children:[T.jsx(Nw,{}),T.jsx(Rw,{targetRotation:s}),T.jsx("div",{className:"absolute top-0 left-0 right-0 z-10 p-8 pointer-events-none",children:T.jsxs("div",{className:"text-center",children:[T.jsxs("div",{className:"inline-block",children:[T.jsx("h1",{className:"text-6xl font-bold text-white mb-2 tracking-wider",children:T.jsx("span",{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent",children:"ALEX MORGAN"})}),T.jsx("div",{className:"h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"})]}),T.jsx("p",{className:"text-xl text-slate-300 mt-4 font-light tracking-widest",children:"FULL STACK DEVELOPER"})]})}),T.jsx(Pw,{onNavigate:n}),T.jsx(Lw,{}),T.jsx("div",{className:"absolute top-8 right-8 z-10 max-w-sm pointer-events-auto",children:T.jsxs("div",{className:"bg-gradient-to-br from-slate-900/70 via-purple-900/30 to-slate-900/70 backdrop-blur-2xl border border-purple-500/20 rounded-2xl p-6 shadow-2xl shadow-purple-500/10",children:[T.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[T.jsx("div",{className:"w-2 h-2 rounded-full bg-purple-500 animate-pulse"}),T.jsx("h3",{className:"font-semibold text-white tracking-wide",children:"NAVIGATION"})]}),T.jsxs("ul",{className:"text-sm text-slate-300 space-y-2",children:[T.jsxs("li",{className:"flex items-center gap-2",children:[T.jsx("span",{className:"text-purple-400",children:"◆"}),T.jsx("span",{children:"Use joystick to rotate the cube"})]}),T.jsxs("li",{className:"flex items-center gap-2",children:[T.jsx("span",{className:"text-purple-400",children:"◆"}),T.jsx("span",{children:"Drag with mouse for free rotation"})]}),T.jsxs("li",{className:"flex items-center gap-2",children:[T.jsx("span",{className:"text-purple-400",children:"◆"}),T.jsx("span",{children:"Scroll to zoom in/out"})]}),T.jsxs("li",{className:"flex items-center gap-2",children:[T.jsx("span",{className:"text-purple-400",children:"◆"}),T.jsx("span",{children:"Each face contains portfolio section"})]})]})]})}),T.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[T.jsx("div",{className:"absolute top-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-[100px] rounded-full"}),T.jsx("div",{className:"absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] rounded-full"})]})]})}r0.createRoot(document.getElementById("root")).render(T.jsx(Dw,{}));
