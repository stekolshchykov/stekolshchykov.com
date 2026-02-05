const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutFace-DvkPDboi.js","assets/map-pin-B0PIEzof.js","assets/award-CkBg1M6M.js","assets/ProjectsFace-B_AJ0wKh.js","assets/github-B2rsE6lS.js","assets/star-DJIsg_4D.js","assets/trending-up-BAmdZfXm.js","assets/ExperienceFace-4zxBnAWc.js","assets/calendar-BZ3dq6bX.js","assets/ContactFace-DnPy00Ob.js","assets/EducationFace-DVLQiCYn.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Rc={exports:{}},Fo={},bc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function y_(){if(Hp)return _t;Hp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function x(O,re,Te){this.props=O,this.context=re,this.refs=w,this.updater=Te||y}x.prototype.isReactComponent={},x.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=x.prototype;function b(O,re,Te){this.props=O,this.context=re,this.refs=w,this.updater=Te||y}var D=b.prototype=new g;D.constructor=b,T(D,x.prototype),D.isPureReactComponent=!0;var P=Array.isArray,N=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function j(O,re,Te){var ze,Ye={},J=null,ue=null;if(re!=null)for(ze in re.ref!==void 0&&(ue=re.ref),re.key!==void 0&&(J=""+re.key),re)N.call(re,ze)&&!k.hasOwnProperty(ze)&&(Ye[ze]=re[ze]);var ve=arguments.length-2;if(ve===1)Ye.children=Te;else if(1<ve){for(var Ue=Array(ve),be=0;be<ve;be++)Ue[be]=arguments[be+2];Ye.children=Ue}if(O&&O.defaultProps)for(ze in ve=O.defaultProps,ve)Ye[ze]===void 0&&(Ye[ze]=ve[ze]);return{$$typeof:s,type:O,key:J,ref:ue,props:Ye,_owner:F.current}}function A(O,re){return{$$typeof:s,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function H(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Te){return re[Te]})}var oe=/\/+/g;function Z(O,re){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):re.toString(36)}function ae(O,re,Te,ze,Ye){var J=typeof O;(J==="undefined"||J==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(J){case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case s:case e:ue=!0}}if(ue)return ue=O,Ye=Ye(ue),O=ze===""?"."+Z(ue,0):ze,P(Ye)?(Te="",O!=null&&(Te=O.replace(oe,"$&/")+"/"),ae(Ye,re,Te,"",function(be){return be})):Ye!=null&&(R(Ye)&&(Ye=A(Ye,Te+(!Ye.key||ue&&ue.key===Ye.key?"":(""+Ye.key).replace(oe,"$&/")+"/")+O)),re.push(Ye)),1;if(ue=0,ze=ze===""?".":ze+":",P(O))for(var ve=0;ve<O.length;ve++){J=O[ve];var Ue=ze+Z(J,ve);ue+=ae(J,re,Te,Ue,Ye)}else if(Ue=S(O),typeof Ue=="function")for(O=Ue.call(O),ve=0;!(J=O.next()).done;)J=J.value,Ue=ze+Z(J,ve++),ue+=ae(J,re,Te,Ue,Ye);else if(J==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ue}function ce(O,re,Te){if(O==null)return O;var ze=[],Ye=0;return ae(O,ze,"","",function(J){return re.call(Te,J,Ye++)}),ze}function te(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Te){(O._status===0||O._status===-1)&&(O._status=1,O._result=Te)},function(Te){(O._status===0||O._status===-1)&&(O._status=2,O._result=Te)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var Q={current:null},X={transition:null},fe={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:X,ReactCurrentOwner:F};function ne(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ce,forEach:function(O,re,Te){ce(O,function(){re.apply(this,arguments)},Te)},count:function(O){var re=0;return ce(O,function(){re++}),re},toArray:function(O){return ce(O,function(re){return re})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=x,_t.Fragment=n,_t.Profiler=a,_t.PureComponent=b,_t.StrictMode=r,_t.Suspense=m,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,_t.act=ne,_t.cloneElement=function(O,re,Te){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ze=T({},O.props),Ye=O.key,J=O.ref,ue=O._owner;if(re!=null){if(re.ref!==void 0&&(J=re.ref,ue=F.current),re.key!==void 0&&(Ye=""+re.key),O.type&&O.type.defaultProps)var ve=O.type.defaultProps;for(Ue in re)N.call(re,Ue)&&!k.hasOwnProperty(Ue)&&(ze[Ue]=re[Ue]===void 0&&ve!==void 0?ve[Ue]:re[Ue])}var Ue=arguments.length-2;if(Ue===1)ze.children=Te;else if(1<Ue){ve=Array(Ue);for(var be=0;be<Ue;be++)ve[be]=arguments[be+2];ze.children=ve}return{$$typeof:s,type:O.type,key:Ye,ref:J,props:ze,_owner:ue}},_t.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},_t.createElement=j,_t.createFactory=function(O){var re=j.bind(null,O);return re.type=O,re},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:d,render:O}},_t.isValidElement=R,_t.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:te}},_t.memo=function(O,re){return{$$typeof:h,type:O,compare:re===void 0?null:re}},_t.startTransition=function(O){var re=X.transition;X.transition={};try{O()}finally{X.transition=re}},_t.unstable_act=ne,_t.useCallback=function(O,re){return Q.current.useCallback(O,re)},_t.useContext=function(O){return Q.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return Q.current.useDeferredValue(O)},_t.useEffect=function(O,re){return Q.current.useEffect(O,re)},_t.useId=function(){return Q.current.useId()},_t.useImperativeHandle=function(O,re,Te){return Q.current.useImperativeHandle(O,re,Te)},_t.useInsertionEffect=function(O,re){return Q.current.useInsertionEffect(O,re)},_t.useLayoutEffect=function(O,re){return Q.current.useLayoutEffect(O,re)},_t.useMemo=function(O,re){return Q.current.useMemo(O,re)},_t.useReducer=function(O,re,Te){return Q.current.useReducer(O,re,Te)},_t.useRef=function(O){return Q.current.useRef(O)},_t.useState=function(O){return Q.current.useState(O)},_t.useSyncExternalStore=function(O,re,Te){return Q.current.useSyncExternalStore(O,re,Te)},_t.useTransition=function(){return Q.current.useTransition()},_t.version="18.3.1",_t}var Gp;function ud(){return Gp||(Gp=1,bc.exports=y_()),bc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function M_(){if(Wp)return Fo;Wp=1;var s=ud(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,m,h){var v,_={},S=null,y=null;h!==void 0&&(S=""+h),m.key!==void 0&&(S=""+m.key),m.ref!==void 0&&(y=m.ref);for(v in m)r.call(m,v)&&!l.hasOwnProperty(v)&&(_[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)_[v]===void 0&&(_[v]=m[v]);return{$$typeof:e,type:d,key:S,ref:y,props:_,_owner:a.current}}return Fo.Fragment=n,Fo.jsx=c,Fo.jsxs=c,Fo}var Xp;function E_(){return Xp||(Xp=1,Rc.exports=M_()),Rc.exports}var _e=E_(),al={},Pc={exports:{}},Un={},Lc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function T_(){return jp||(jp=1,(function(s){function e(X,fe){var ne=X.length;X.push(fe);e:for(;0<ne;){var O=ne-1>>>1,re=X[O];if(0<a(re,fe))X[O]=fe,X[ne]=re,ne=O;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var fe=X[0],ne=X.pop();if(ne!==fe){X[0]=ne;e:for(var O=0,re=X.length,Te=re>>>1;O<Te;){var ze=2*(O+1)-1,Ye=X[ze],J=ze+1,ue=X[J];if(0>a(Ye,ne))J<re&&0>a(ue,Ye)?(X[O]=ue,X[J]=ne,O=J):(X[O]=Ye,X[ze]=ne,O=ze);else if(J<re&&0>a(ue,ne))X[O]=ue,X[J]=ne,O=J;else break e}}return fe}function a(X,fe){var ne=X.sortIndex-fe.sortIndex;return ne!==0?ne:X.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var m=[],h=[],v=1,_=null,S=3,y=!1,T=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(X){for(var fe=n(h);fe!==null;){if(fe.callback===null)r(h);else if(fe.startTime<=X)r(h),fe.sortIndex=fe.expirationTime,e(m,fe);else break;fe=n(h)}}function P(X){if(w=!1,D(X),!T)if(n(m)!==null)T=!0,te(N);else{var fe=n(h);fe!==null&&Q(P,fe.startTime-X)}}function N(X,fe){T=!1,w&&(w=!1,g(j),j=-1),y=!0;var ne=S;try{for(D(fe),_=n(m);_!==null&&(!(_.expirationTime>fe)||X&&!H());){var O=_.callback;if(typeof O=="function"){_.callback=null,S=_.priorityLevel;var re=O(_.expirationTime<=fe);fe=s.unstable_now(),typeof re=="function"?_.callback=re:_===n(m)&&r(m),D(fe)}else r(m);_=n(m)}if(_!==null)var Te=!0;else{var ze=n(h);ze!==null&&Q(P,ze.startTime-fe),Te=!1}return Te}finally{_=null,S=ne,y=!1}}var F=!1,k=null,j=-1,A=5,R=-1;function H(){return!(s.unstable_now()-R<A)}function oe(){if(k!==null){var X=s.unstable_now();R=X;var fe=!0;try{fe=k(!0,X)}finally{fe?Z():(F=!1,k=null)}}else F=!1}var Z;if(typeof b=="function")Z=function(){b(oe)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=oe,Z=function(){ce.postMessage(null)}}else Z=function(){x(oe,0)};function te(X){k=X,F||(F=!0,Z())}function Q(X,fe){j=x(function(){X(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,te(N))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(X){switch(S){case 1:case 2:case 3:var fe=3;break;default:fe=S}var ne=S;S=fe;try{return X()}finally{S=ne}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,fe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=S;S=X;try{return fe()}finally{S=ne}},s.unstable_scheduleCallback=function(X,fe,ne){var O=s.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,X){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ne+re,X={id:v++,callback:fe,priorityLevel:X,startTime:ne,expirationTime:re,sortIndex:-1},ne>O?(X.sortIndex=ne,e(h,X),n(m)===null&&X===n(h)&&(w?(g(j),j=-1):w=!0,Q(P,ne-O))):(X.sortIndex=re,e(m,X),T||y||(T=!0,te(N))),X},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(X){var fe=S;return function(){var ne=S;S=fe;try{return X.apply(this,arguments)}finally{S=ne}}}})(Dc)),Dc}var qp;function w_(){return qp||(qp=1,Lc.exports=T_()),Lc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function A_(){if(Yp)return Un;Yp=1;var s=ud(),e=w_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function S(t){return m.call(_,t)?!0:m.call(v,t)?!1:h.test(t)?_[t]=!0:(v[t]=!0,!1)}function y(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,u){if(i===null||typeof i>"u"||y(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,u,f,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,b);x[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,b);x[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,b);x[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,u){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,u)&&(o=null),u||f===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),X=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,O;function re(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Te=!1;function ze(t,i){if(!t||Te)return"";Te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var u=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){u=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){u=ie}t()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var f=ie.stack.split(`
`),p=u.stack.split(`
`),E=f.length-1,U=p.length-1;1<=E&&0<=U&&f[E]!==p[U];)U--;for(;1<=E&&0<=U;E--,U--)if(f[E]!==p[U]){if(E!==1||U!==1)do if(E--,U--,0>U||f[E]!==p[U]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=U);break}}}finally{Te=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function Ye(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=ze(t.type,!1),t;case 11:return t=ze(t.type.render,!1),t;case 1:return t=ze(t.type,!0),t;default:return""}}function J(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case F:return"Portal";case A:return"Profiler";case j:return"StrictMode";case Z:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:J(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return J(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function dt(t){t._valueTracker||(t._valueTracker=be(t))}function Ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ue(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function ct(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xt(t,i){var o=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function yt(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ve(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ot(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function Ft(t,i){ot(t,i);var o=ve(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?gt(t,i.type,o):i.hasOwnProperty("defaultValue")&&gt(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function I(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function gt(t,i,o){(i!=="number"||ct(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ze=Array.isArray;function mt(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+ve(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Be(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ze(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ve(o)}}function M(t,i){var o=ve(i.value),u=ve(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function G(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var le,$e=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function we(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(t){it.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ve[i]=Ve[t]})});function ye(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ve.hasOwnProperty(t)&&Ve[t]?(""+i).trim():i+"px"}function Pe(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=ye(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var We=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(t,i){if(i){if(We[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function z(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var De=null,Me=null,Ne=null;function xe(t){if(t=yo(t)){if(typeof De!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ma(i),De(t.stateNode,t.type,i))}}function he(t){Me?Ne?Ne.push(t):Ne=[t]:Me=t}function Re(){if(Me){var t=Me,i=Ne;if(Ne=Me=null,xe(t),i)for(t=0;t<i.length;t++)xe(i[t])}}function rt(t,i){return t(i)}function Nt(){}var Mt=!1;function Bn(t,i,o){if(Mt)return t(i,o);Mt=!0;try{return rt(t,i,o)}finally{Mt=!1,(Me!==null||Ne!==null)&&(Nt(),Re())}}function Tn(t,i){var o=t.stateNode;if(o===null)return null;var u=Ma(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Js=!1;if(d)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Js=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Js=!1}function eo(t,i,o,u,f,p,E,U,B){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(ge){this.onError(ge)}}var Rr=!1,br=null,Pr=!1,si=null,to={onError:function(t){Rr=!0,br=t}};function ta(t,i,o,u,f,p,E,U,B){Rr=!1,br=null,eo.apply(to,arguments)}function na(t,i,o,u,f,p,E,U,B){if(ta.apply(this,arguments),Rr){if(Rr){var ie=br;Rr=!1,br=null}else throw Error(n(198));Pr||(Pr=!0,si=ie)}}function Yn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function no(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Lr(t){if(Yn(t)!==t)throw Error(n(188))}function ia(t){var i=t.alternate;if(!i){if(i=Yn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return Lr(f),t;if(p===u)return Lr(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=p;else{for(var E=!1,U=f.child;U;){if(U===o){E=!0,o=f,u=p;break}if(U===u){E=!0,u=f,o=p;break}U=U.sibling}if(!E){for(U=p.child;U;){if(U===o){E=!0,o=p,u=f;break}if(U===u){E=!0,u=p,o=f;break}U=U.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function io(t){return t=ia(t),t!==null?ra(t):null}function ra(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ra(t);if(i!==null)return i;t=t.sibling}return null}var sa=e.unstable_scheduleCallback,oa=e.unstable_cancelCallback,Zl=e.unstable_shouldYield,Ql=e.unstable_requestPaint,Wt=e.unstable_now,C=e.unstable_getCurrentPriorityLevel,W=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,Y=e.unstable_LowPriority,Le=e.unstable_IdlePriority,Fe=null,Ae=null;function Ge(t){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Fe,t,void 0,(t.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:ht,nt=Math.log,Qe=Math.LN2;function ht(t){return t>>>=0,t===0?32:31-(nt(t)/Qe|0)|0}var Et=64,Ot=4194304;function Ut(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function At(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,E=o&268435455;if(E!==0){var U=E&~f;U!==0?u=Ut(U):(p&=E,p!==0&&(u=Ut(p)))}else E=o&~f,E!==0?u=Ut(E):p!==0&&(u=Ut(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-ke(i),f=1<<o,u|=t[o],i&=~f;return u}function Je(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-ke(p),U=1<<E,B=f[E];B===-1?((U&o)===0||(U&u)!==0)&&(f[E]=Je(U,i)):B<=i&&(t.expiredLanes|=U),p&=~U}}function vt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mn(){var t=Et;return Et<<=1,(Et&4194240)===0&&(Et=64),t}function gi(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Jt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ke(i),t[i]=o}function Dr(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ke(o),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~p}}function Lt(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-ke(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var lt=0;function wn(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sn,on,is,_i,Td,Jl=!1,aa=[],er=null,tr=null,nr=null,ro=new Map,so=new Map,ir=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(t,i){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ro.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(i.pointerId)}}function oo(t,i,o,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=yo(i),i!==null&&on(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Wg(t,i,o,u,f){switch(i){case"focusin":return er=oo(er,t,i,o,u,f),!0;case"dragenter":return tr=oo(tr,t,i,o,u,f),!0;case"mouseover":return nr=oo(nr,t,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return ro.set(p,oo(ro.get(p)||null,t,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,so.set(p,oo(so.get(p)||null,t,i,o,u,f)),!0}return!1}function Ad(t){var i=Nr(t.target);if(i!==null){var o=Yn(i);if(o!==null){if(i=o.tag,i===13){if(i=no(o),i!==null){t.blockedOn=i,Td(t.priority,function(){is(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function la(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=tu(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);ut=u,o.target.dispatchEvent(u),ut=null}else return i=yo(o),i!==null&&on(i),t.blockedOn=o,!1;i.shift()}return!0}function Cd(t,i,o){la(t)&&o.delete(i)}function Xg(){Jl=!1,er!==null&&la(er)&&(er=null),tr!==null&&la(tr)&&(tr=null),nr!==null&&la(nr)&&(nr=null),ro.forEach(Cd),so.forEach(Cd)}function ao(t,i){t.blockedOn===i&&(t.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xg)))}function lo(t){function i(f){return ao(f,t)}if(0<aa.length){ao(aa[0],t);for(var o=1;o<aa.length;o++){var u=aa[o];u.blockedOn===t&&(u.blockedOn=null)}}for(er!==null&&ao(er,t),tr!==null&&ao(tr,t),nr!==null&&ao(nr,t),ro.forEach(i),so.forEach(i),o=0;o<ir.length;o++)u=ir[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<ir.length&&(o=ir[0],o.blockedOn===null);)Ad(o),o.blockedOn===null&&ir.shift()}var rs=P.ReactCurrentBatchConfig,ua=!0;function jg(t,i,o,u){var f=lt,p=rs.transition;rs.transition=null;try{lt=1,eu(t,i,o,u)}finally{lt=f,rs.transition=p}}function qg(t,i,o,u){var f=lt,p=rs.transition;rs.transition=null;try{lt=4,eu(t,i,o,u)}finally{lt=f,rs.transition=p}}function eu(t,i,o,u){if(ua){var f=tu(t,i,o,u);if(f===null)vu(t,i,u,ca,o),wd(t,u);else if(Wg(f,t,i,o,u))u.stopPropagation();else if(wd(t,u),i&4&&-1<Gg.indexOf(t)){for(;f!==null;){var p=yo(f);if(p!==null&&sn(p),p=tu(t,i,o,u),p===null&&vu(t,i,u,ca,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else vu(t,i,u,null,o)}}var ca=null;function tu(t,i,o,u){if(ca=null,t=z(u),t=Nr(t),t!==null)if(i=Yn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=no(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ca=t,null}function Rd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C()){case W:return 1;case se:return 4;case ee:case Y:return 16;case Le:return 536870912;default:return 16}default:return 16}}var rr=null,nu=null,fa=null;function bd(){if(fa)return fa;var t,i=nu,o=i.length,u,f="value"in rr?rr.value:rr.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var E=o-t;for(u=1;u<=E&&i[o-u]===f[p-u];u++);return fa=f.slice(t,1<u?1-u:void 0)}function da(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function Pd(){return!1}function zn(t){function i(o,u,f,p,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(o=t[U],this[U]=o?o(p):p[U]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ha:Pd,this.isPropagationStopped=Pd,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=zn(ss),uo=ne({},ss,{view:0,detail:0}),Yg=zn(uo),ru,su,co,pa=ne({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(ru=t.screenX-co.screenX,su=t.screenY-co.screenY):su=ru=0,co=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Ld=zn(pa),$g=ne({},pa,{dataTransfer:0}),Kg=zn($g),Zg=ne({},uo,{relatedTarget:0}),ou=zn(Zg),Qg=ne({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=zn(Qg),e0=ne({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t0=zn(e0),n0=ne({},ss,{data:0}),Dd=zn(n0),i0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=s0[t])?!!i[t]:!1}function au(){return o0}var a0=ne({},uo,{key:function(t){if(t.key){var i=i0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l0=zn(a0),u0=ne({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=zn(u0),c0=ne({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),f0=zn(c0),d0=ne({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=zn(d0),p0=ne({},pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m0=zn(p0),g0=[9,13,27,32],lu=d&&"CompositionEvent"in window,fo=null;d&&"documentMode"in document&&(fo=document.documentMode);var _0=d&&"TextEvent"in window&&!fo,Id=d&&(!lu||fo&&8<fo&&11>=fo),Ud=" ",Fd=!1;function Od(t,i){switch(t){case"keyup":return g0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function v0(t,i){switch(t){case"compositionend":return kd(i);case"keypress":return i.which!==32?null:(Fd=!0,Ud);case"textInput":return t=i.data,t===Ud&&Fd?null:t;default:return null}}function x0(t,i){if(os)return t==="compositionend"||!lu&&Od(t,i)?(t=bd(),fa=nu=rr=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Id&&i.locale!=="ko"?null:i.data;default:return null}}var S0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!S0[t.type]:i==="textarea"}function zd(t,i,o,u){he(u),i=xa(i,"onChange"),0<i.length&&(o=new iu("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var ho=null,po=null;function y0(t){rh(t,0)}function ma(t){var i=fs(t);if(Ht(i))return t}function M0(t,i){if(t==="change")return i}var Vd=!1;if(d){var uu;if(d){var cu="oninput"in document;if(!cu){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),cu=typeof Hd.oninput=="function"}uu=cu}else uu=!1;Vd=uu&&(!document.documentMode||9<document.documentMode)}function Gd(){ho&&(ho.detachEvent("onpropertychange",Wd),po=ho=null)}function Wd(t){if(t.propertyName==="value"&&ma(po)){var i=[];zd(i,po,t,z(t)),Bn(y0,i)}}function E0(t,i,o){t==="focusin"?(Gd(),ho=i,po=o,ho.attachEvent("onpropertychange",Wd)):t==="focusout"&&Gd()}function T0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ma(po)}function w0(t,i){if(t==="click")return ma(i)}function A0(t,i){if(t==="input"||t==="change")return ma(i)}function C0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:C0;function mo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!m.call(i,f)||!oi(t[f],i[f]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jd(t,i){var o=Xd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xd(o)}}function qd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?qd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Yd(){for(var t=window,i=ct();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ct(t.document)}return i}function fu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function R0(t){var i=Yd(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&qd(o.ownerDocument.documentElement,o)){if(u!==null&&fu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=jd(o,p);var E=jd(o,u);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b0=d&&"documentMode"in document&&11>=document.documentMode,as=null,du=null,go=null,hu=!1;function $d(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hu||as==null||as!==ct(u)||(u=as,"selectionStart"in u&&fu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),go&&mo(go,u)||(go=u,u=xa(du,"onSelect"),0<u.length&&(i=new iu("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=as)))}function ga(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ls={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},pu={},Kd={};d&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function _a(t){if(pu[t])return pu[t];if(!ls[t])return t;var i=ls[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Kd)return pu[t]=i[o];return t}var Zd=_a("animationend"),Qd=_a("animationiteration"),Jd=_a("animationstart"),eh=_a("transitionend"),th=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,i){th.set(t,i),l(i,[t])}for(var mu=0;mu<nh.length;mu++){var gu=nh[mu],P0=gu.toLowerCase(),L0=gu[0].toUpperCase()+gu.slice(1);sr(P0,"on"+L0)}sr(Zd,"onAnimationEnd"),sr(Qd,"onAnimationIteration"),sr(Jd,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(eh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function ih(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,na(u,i,void 0,t),t.currentTarget=null}function rh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],B=U.instance,ie=U.currentTarget;if(U=U.listener,B!==p&&f.isPropagationStopped())break e;ih(f,U,ie),p=B}else for(E=0;E<u.length;E++){if(U=u[E],B=U.instance,ie=U.currentTarget,U=U.listener,B!==p&&f.isPropagationStopped())break e;ih(f,U,ie),p=B}}}if(Pr)throw t=si,Pr=!1,si=null,t}function zt(t,i){var o=i[Tu];o===void 0&&(o=i[Tu]=new Set);var u=t+"__bubble";o.has(u)||(sh(i,t,2,!1),o.add(u))}function _u(t,i,o){var u=0;i&&(u|=4),sh(o,t,u,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[va]){t[va]=!0,r.forEach(function(o){o!=="selectionchange"&&(D0.has(o)||_u(o,!1,t),_u(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[va]||(i[va]=!0,_u("selectionchange",!1,i))}}function sh(t,i,o,u){switch(Rd(i)){case 1:var f=jg;break;case 4:f=qg;break;default:f=eu}o=f.bind(null,i,o,t),f=void 0,!Js||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function vu(t,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;U!==null;){if(E=Nr(U),E===null)return;if(B=E.tag,B===5||B===6){u=p=E;continue e}U=U.parentNode}}u=u.return}Bn(function(){var ie=p,ge=z(o),Se=[];e:{var me=th.get(t);if(me!==void 0){var Oe=iu,Xe=t;switch(t){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":Oe=l0;break;case"focusin":Xe="focus",Oe=ou;break;case"focusout":Xe="blur",Oe=ou;break;case"beforeblur":case"afterblur":Oe=ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=f0;break;case Zd:case Qd:case Jd:Oe=Jg;break;case eh:Oe=h0;break;case"scroll":Oe=Yg;break;case"wheel":Oe=m0;break;case"copy":case"cut":case"paste":Oe=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Nd}var qe=(i&4)!==0,Kt=!qe&&t==="scroll",q=qe?me!==null?me+"Capture":null:me;qe=[];for(var V=ie,K;V!==null;){K=V;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,q!==null&&(Ee=Tn(V,q),Ee!=null&&qe.push(xo(V,Ee,K)))),Kt)break;V=V.return}0<qe.length&&(me=new Oe(me,Xe,null,o,ge),Se.push({event:me,listeners:qe}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",me&&o!==ut&&(Xe=o.relatedTarget||o.fromElement)&&(Nr(Xe)||Xe[Ni]))break e;if((Oe||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Oe?(Xe=o.relatedTarget||o.toElement,Oe=ie,Xe=Xe?Nr(Xe):null,Xe!==null&&(Kt=Yn(Xe),Xe!==Kt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Oe=null,Xe=ie),Oe!==Xe)){if(qe=Ld,Ee="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Nd,Ee="onPointerLeave",q="onPointerEnter",V="pointer"),Kt=Oe==null?me:fs(Oe),K=Xe==null?me:fs(Xe),me=new qe(Ee,V+"leave",Oe,o,ge),me.target=Kt,me.relatedTarget=K,Ee=null,Nr(ge)===ie&&(qe=new qe(q,V+"enter",Xe,o,ge),qe.target=K,qe.relatedTarget=Kt,Ee=qe),Kt=Ee,Oe&&Xe)t:{for(qe=Oe,q=Xe,V=0,K=qe;K;K=us(K))V++;for(K=0,Ee=q;Ee;Ee=us(Ee))K++;for(;0<V-K;)qe=us(qe),V--;for(;0<K-V;)q=us(q),K--;for(;V--;){if(qe===q||q!==null&&qe===q.alternate)break t;qe=us(qe),q=us(q)}qe=null}else qe=null;Oe!==null&&oh(Se,me,Oe,qe,!1),Xe!==null&&Kt!==null&&oh(Se,Kt,Xe,qe,!0)}}e:{if(me=ie?fs(ie):window,Oe=me.nodeName&&me.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&me.type==="file")var Ke=M0;else if(Bd(me))if(Vd)Ke=A0;else{Ke=T0;var et=E0}else(Oe=me.nodeName)&&Oe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ke=w0);if(Ke&&(Ke=Ke(t,ie))){zd(Se,Ke,o,ge);break e}et&&et(t,me,ie),t==="focusout"&&(et=me._wrapperState)&&et.controlled&&me.type==="number"&&gt(me,"number",me.value)}switch(et=ie?fs(ie):window,t){case"focusin":(Bd(et)||et.contentEditable==="true")&&(as=et,du=ie,go=null);break;case"focusout":go=du=as=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,$d(Se,o,ge);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":$d(Se,o,ge)}var tt;if(lu)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else os?Od(t,o)&&(st="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(Id&&o.locale!=="ko"&&(os||st!=="onCompositionStart"?st==="onCompositionEnd"&&os&&(tt=bd()):(rr=ge,nu="value"in rr?rr.value:rr.textContent,os=!0)),et=xa(ie,st),0<et.length&&(st=new Dd(st,t,null,o,ge),Se.push({event:st,listeners:et}),tt?st.data=tt:(tt=kd(o),tt!==null&&(st.data=tt)))),(tt=_0?v0(t,o):x0(t,o))&&(ie=xa(ie,"onBeforeInput"),0<ie.length&&(ge=new Dd("onBeforeInput","beforeinput",null,o,ge),Se.push({event:ge,listeners:ie}),ge.data=tt))}rh(Se,i)})}function xo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function xa(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Tn(t,o),p!=null&&u.unshift(xo(t,p,f)),p=Tn(t,i),p!=null&&u.push(xo(t,p,f))),t=t.return}return u}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oh(t,i,o,u,f){for(var p=i._reactName,E=[];o!==null&&o!==u;){var U=o,B=U.alternate,ie=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&ie!==null&&(U=ie,f?(B=Tn(o,p),B!=null&&E.unshift(xo(o,B,U))):f||(B=Tn(o,p),B!=null&&E.push(xo(o,B,U)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var N0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function ah(t){return(typeof t=="string"?t:""+t).replace(N0,`
`).replace(I0,"")}function Sa(t,i,o){if(i=ah(i),ah(t)!==i&&o)throw Error(n(425))}function ya(){}var xu=null,Su=null;function yu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(O0)}:Mu;function O0(t){setTimeout(function(){throw t})}function Eu(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),lo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);lo(i)}function or(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),vi="__reactFiber$"+cs,So="__reactProps$"+cs,Ni="__reactContainer$"+cs,Tu="__reactEvents$"+cs,k0="__reactListeners$"+cs,B0="__reactHandles$"+cs;function Nr(t){var i=t[vi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ni]||o[vi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=uh(t);t!==null;){if(o=t[vi])return o;t=uh(t)}return i}t=o,o=t.parentNode}return null}function yo(t){return t=t[vi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ma(t){return t[So]||null}var wu=[],ds=-1;function ar(t){return{current:t}}function Vt(t){0>ds||(t.current=wu[ds],wu[ds]=null,ds--)}function kt(t,i){ds++,wu[ds]=t.current,t.current=i}var lr={},gn=ar(lr),Pn=ar(!1),Ir=lr;function hs(t,i){var o=t.type.contextTypes;if(!o)return lr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Ln(t){return t=t.childContextTypes,t!=null}function Ea(){Vt(Pn),Vt(gn)}function ch(t,i,o){if(gn.current!==lr)throw Error(n(168));kt(gn,i),kt(Pn,o)}function fh(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,ue(t)||"Unknown",f));return ne({},o,u)}function Ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Ir=gn.current,kt(gn,t),kt(Pn,Pn.current),!0}function dh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=fh(t,i,Ir),u.__reactInternalMemoizedMergedChildContext=t,Vt(Pn),Vt(gn),kt(gn,t)):Vt(Pn),kt(Pn,o)}var Ii=null,wa=!1,Au=!1;function hh(t){Ii===null?Ii=[t]:Ii.push(t)}function z0(t){wa=!0,hh(t)}function ur(){if(!Au&&Ii!==null){Au=!0;var t=0,i=lt;try{var o=Ii;for(lt=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Ii=null,wa=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(t+1)),sa(W,ur),f}finally{lt=i,Au=!1}}return null}var ps=[],ms=0,Aa=null,Ca=0,$n=[],Kn=0,Ur=null,Ui=1,Fi="";function Fr(t,i){ps[ms++]=Ca,ps[ms++]=Aa,Aa=t,Ca=i}function ph(t,i,o){$n[Kn++]=Ui,$n[Kn++]=Fi,$n[Kn++]=Ur,Ur=t;var u=Ui;t=Fi;var f=32-ke(u)-1;u&=~(1<<f),o+=1;var p=32-ke(i)+f;if(30<p){var E=f-f%5;p=(u&(1<<E)-1).toString(32),u>>=E,f-=E,Ui=1<<32-ke(i)+f|o<<f|u,Fi=p+t}else Ui=1<<p|o<<f|u,Fi=t}function Cu(t){t.return!==null&&(Fr(t,1),ph(t,1,0))}function Ru(t){for(;t===Aa;)Aa=ps[--ms],ps[ms]=null,Ca=ps[--ms],ps[ms]=null;for(;t===Ur;)Ur=$n[--Kn],$n[Kn]=null,Fi=$n[--Kn],$n[Kn]=null,Ui=$n[--Kn],$n[Kn]=null}var Vn=null,Hn=null,Gt=!1,ai=null;function mh(t,i){var o=ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function gh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=or(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ei(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Vn=t,Hn=null,!0):!1;default:return!1}}function bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pu(t){if(Gt){var i=Hn;if(i){var o=i;if(!gh(t,i)){if(bu(t))throw Error(n(418));i=or(o.nextSibling);var u=Vn;i&&gh(t,i)?mh(u,o):(t.flags=t.flags&-4097|2,Gt=!1,Vn=t)}}else{if(bu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Gt=!1,Vn=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Ra(t){if(t!==Vn)return!1;if(!Gt)return _h(t),Gt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!yu(t.type,t.memoizedProps)),i&&(i=Hn)){if(bu(t))throw vh(),Error(n(418));for(;i;)mh(t,i),i=or(i.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Hn=or(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Vn?or(t.stateNode.nextSibling):null;return!0}function vh(){for(var t=Hn;t;)t=or(t.nextSibling)}function gs(){Hn=Vn=null,Gt=!1}function Lu(t){ai===null?ai=[t]:ai.push(t)}var V0=P.ReactCurrentBatchConfig;function Mo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var U=f.refs;E===null?delete U[p]:U[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ba(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function xh(t){var i=t._init;return i(t._payload)}function Sh(t){function i(q,V){if(t){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function o(q,V){if(!t)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function u(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function f(q,V){return q=_r(q,V),q.index=0,q.sibling=null,q}function p(q,V,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return t&&q.alternate===null&&(q.flags|=2),q}function U(q,V,K,Ee){return V===null||V.tag!==6?(V=Mc(K,q.mode,Ee),V.return=q,V):(V=f(V,K),V.return=q,V)}function B(q,V,K,Ee){var Ke=K.type;return Ke===k?ge(q,V,K.props.children,Ee,K.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===te&&xh(Ke)===V.type)?(Ee=f(V,K.props),Ee.ref=Mo(q,V,K),Ee.return=q,Ee):(Ee=Ja(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=Mo(q,V,K),Ee.return=q,Ee)}function ie(q,V,K,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Ec(K,q.mode,Ee),V.return=q,V):(V=f(V,K.children||[]),V.return=q,V)}function ge(q,V,K,Ee,Ke){return V===null||V.tag!==7?(V=Wr(K,q.mode,Ee,Ke),V.return=q,V):(V=f(V,K),V.return=q,V)}function Se(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Mc(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case N:return K=Ja(V.type,V.key,V.props,null,q.mode,K),K.ref=Mo(q,null,V),K.return=q,K;case F:return V=Ec(V,q.mode,K),V.return=q,V;case te:var Ee=V._init;return Se(q,Ee(V._payload),K)}if(Ze(V)||fe(V))return V=Wr(V,q.mode,K,null),V.return=q,V;ba(q,V)}return null}function me(q,V,K,Ee){var Ke=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ke!==null?null:U(q,V,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case N:return K.key===Ke?B(q,V,K,Ee):null;case F:return K.key===Ke?ie(q,V,K,Ee):null;case te:return Ke=K._init,me(q,V,Ke(K._payload),Ee)}if(Ze(K)||fe(K))return Ke!==null?null:ge(q,V,K,Ee,null);ba(q,K)}return null}function Oe(q,V,K,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(K)||null,U(V,q,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case N:return q=q.get(Ee.key===null?K:Ee.key)||null,B(V,q,Ee,Ke);case F:return q=q.get(Ee.key===null?K:Ee.key)||null,ie(V,q,Ee,Ke);case te:var et=Ee._init;return Oe(q,V,K,et(Ee._payload),Ke)}if(Ze(Ee)||fe(Ee))return q=q.get(K)||null,ge(V,q,Ee,Ke,null);ba(V,Ee)}return null}function Xe(q,V,K,Ee){for(var Ke=null,et=null,tt=V,st=V=0,un=null;tt!==null&&st<K.length;st++){tt.index>st?(un=tt,tt=null):un=tt.sibling;var Ct=me(q,tt,K[st],Ee);if(Ct===null){tt===null&&(tt=un);break}t&&tt&&Ct.alternate===null&&i(q,tt),V=p(Ct,V,st),et===null?Ke=Ct:et.sibling=Ct,et=Ct,tt=un}if(st===K.length)return o(q,tt),Gt&&Fr(q,st),Ke;if(tt===null){for(;st<K.length;st++)tt=Se(q,K[st],Ee),tt!==null&&(V=p(tt,V,st),et===null?Ke=tt:et.sibling=tt,et=tt);return Gt&&Fr(q,st),Ke}for(tt=u(q,tt);st<K.length;st++)un=Oe(tt,q,st,K[st],Ee),un!==null&&(t&&un.alternate!==null&&tt.delete(un.key===null?st:un.key),V=p(un,V,st),et===null?Ke=un:et.sibling=un,et=un);return t&&tt.forEach(function(vr){return i(q,vr)}),Gt&&Fr(q,st),Ke}function qe(q,V,K,Ee){var Ke=fe(K);if(typeof Ke!="function")throw Error(n(150));if(K=Ke.call(K),K==null)throw Error(n(151));for(var et=Ke=null,tt=V,st=V=0,un=null,Ct=K.next();tt!==null&&!Ct.done;st++,Ct=K.next()){tt.index>st?(un=tt,tt=null):un=tt.sibling;var vr=me(q,tt,Ct.value,Ee);if(vr===null){tt===null&&(tt=un);break}t&&tt&&vr.alternate===null&&i(q,tt),V=p(vr,V,st),et===null?Ke=vr:et.sibling=vr,et=vr,tt=un}if(Ct.done)return o(q,tt),Gt&&Fr(q,st),Ke;if(tt===null){for(;!Ct.done;st++,Ct=K.next())Ct=Se(q,Ct.value,Ee),Ct!==null&&(V=p(Ct,V,st),et===null?Ke=Ct:et.sibling=Ct,et=Ct);return Gt&&Fr(q,st),Ke}for(tt=u(q,tt);!Ct.done;st++,Ct=K.next())Ct=Oe(tt,q,st,Ct.value,Ee),Ct!==null&&(t&&Ct.alternate!==null&&tt.delete(Ct.key===null?st:Ct.key),V=p(Ct,V,st),et===null?Ke=Ct:et.sibling=Ct,et=Ct);return t&&tt.forEach(function(S_){return i(q,S_)}),Gt&&Fr(q,st),Ke}function Kt(q,V,K,Ee){if(typeof K=="object"&&K!==null&&K.type===k&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case N:e:{for(var Ke=K.key,et=V;et!==null;){if(et.key===Ke){if(Ke=K.type,Ke===k){if(et.tag===7){o(q,et.sibling),V=f(et,K.props.children),V.return=q,q=V;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===te&&xh(Ke)===et.type){o(q,et.sibling),V=f(et,K.props),V.ref=Mo(q,et,K),V.return=q,q=V;break e}o(q,et);break}else i(q,et);et=et.sibling}K.type===k?(V=Wr(K.props.children,q.mode,Ee,K.key),V.return=q,q=V):(Ee=Ja(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=Mo(q,V,K),Ee.return=q,q=Ee)}return E(q);case F:e:{for(et=K.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(q,V.sibling),V=f(V,K.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=Ec(K,q.mode,Ee),V.return=q,q=V}return E(q);case te:return et=K._init,Kt(q,V,et(K._payload),Ee)}if(Ze(K))return Xe(q,V,K,Ee);if(fe(K))return qe(q,V,K,Ee);ba(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(q,V.sibling),V=f(V,K),V.return=q,q=V):(o(q,V),V=Mc(K,q.mode,Ee),V.return=q,q=V),E(q)):o(q,V)}return Kt}var _s=Sh(!0),yh=Sh(!1),Pa=ar(null),La=null,vs=null,Du=null;function Nu(){Du=vs=La=null}function Iu(t){var i=Pa.current;Vt(Pa),t._currentValue=i}function Uu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function xs(t,i){La=t,Du=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function Zn(t){var i=t._currentValue;if(Du!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(La===null)throw Error(n(308));vs=t,La.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Or=null;function Fu(t){Or===null?Or=[t]:Or.push(t)}function Mh(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Fu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Oi(t,u)}function Oi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var cr=!1;function Ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Oi(t,o)}return f=u.interleaved,f===null?(i.next=i,Fu(u)):(i.next=f.next,f.next=i),u.interleaved=i,Oi(t,o)}function Da(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Lt(t,o)}}function Th(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Na(t,i,o,u){var f=t.updateQueue;cr=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var B=U,ie=B.next;B.next=null,E===null?p=ie:E.next=ie,E=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,U=ge.lastBaseUpdate,U!==E&&(U===null?ge.firstBaseUpdate=ie:U.next=ie,ge.lastBaseUpdate=B))}if(p!==null){var Se=f.baseState;E=0,ge=ie=B=null,U=p;do{var me=U.lane,Oe=U.eventTime;if((u&me)===me){ge!==null&&(ge=ge.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=t,qe=U;switch(me=i,Oe=o,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Se=Xe.call(Oe,Se,me);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,me=typeof Xe=="function"?Xe.call(Oe,Se,me):Xe,me==null)break e;Se=ne({},Se,me);break e;case 2:cr=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,me=f.effects,me===null?f.effects=[U]:me.push(U))}else Oe={eventTime:Oe,lane:me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ge===null?(ie=ge=Oe,B=Se):ge=ge.next=Oe,E|=me;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;me=U,U=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(ge===null&&(B=Se),f.baseState=B,f.firstBaseUpdate=ie,f.lastBaseUpdate=ge,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);zr|=E,t.lanes=E,t.memoizedState=Se}}function wh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var Eo={},xi=ar(Eo),To=ar(Eo),wo=ar(Eo);function kr(t){if(t===Eo)throw Error(n(174));return t}function ku(t,i){switch(kt(wo,i),kt(To,t),kt(xi,Eo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Vt(xi),kt(xi,i)}function Ss(){Vt(xi),Vt(To),Vt(wo)}function Ah(t){kr(wo.current);var i=kr(xi.current),o=pe(i,t.type);i!==o&&(kt(To,t),kt(xi,o))}function Bu(t){To.current===t&&(Vt(xi),Vt(To))}var Xt=ar(0);function Ia(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zu=[];function Vu(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var Ua=P.ReactCurrentDispatcher,Hu=P.ReactCurrentBatchConfig,Br=0,jt=null,en=null,an=null,Fa=!1,Ao=!1,Co=0,H0=0;function _n(){throw Error(n(321))}function Gu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!oi(t[o],i[o]))return!1;return!0}function Wu(t,i,o,u,f,p){if(Br=p,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=t===null||t.memoizedState===null?j0:q0,t=o(u,f),Ao){p=0;do{if(Ao=!1,Co=0,25<=p)throw Error(n(301));p+=1,an=en=null,i.updateQueue=null,Ua.current=Y0,t=o(u,f)}while(Ao)}if(Ua.current=Ba,i=en!==null&&en.next!==null,Br=0,an=en=jt=null,Fa=!1,i)throw Error(n(300));return t}function Xu(){var t=Co!==0;return Co=0,t}function Si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?jt.memoizedState=an=t:an=an.next=t,an}function Qn(){if(en===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=an===null?jt.memoizedState:an.next;if(i!==null)an=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},an===null?jt.memoizedState=an=t:an=an.next=t}return an}function Ro(t,i){return typeof i=="function"?i(t):i}function ju(t){var i=Qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=en,f=u.baseQueue,p=o.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}u.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,u=u.baseState;var U=E=null,B=null,ie=p;do{var ge=ie.lane;if((Br&ge)===ge)B!==null&&(B=B.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:t(u,ie.action);else{var Se={lane:ge,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};B===null?(U=B=Se,E=u):B=B.next=Se,jt.lanes|=ge,zr|=ge}ie=ie.next}while(ie!==null&&ie!==p);B===null?E=u:B.next=U,oi(u,i.memoizedState)||(Dn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=B,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do p=f.lane,jt.lanes|=p,zr|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qu(t){var i=Qn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=t(p,E.action),E=E.next;while(E!==f);oi(p,i.memoizedState)||(Dn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Ch(){}function Rh(t,i){var o=jt,u=Qn(),f=i(),p=!oi(u.memoizedState,f);if(p&&(u.memoizedState=f,Dn=!0),u=u.queue,Yu(Lh.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,bo(9,Ph.bind(null,o,u,f,i),void 0,null),ln===null)throw Error(n(349));(Br&30)!==0||bh(o,i,f)}return f}function bh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Ph(t,i,o,u){i.value=o,i.getSnapshot=u,Dh(i)&&Nh(t)}function Lh(t,i,o){return o(function(){Dh(i)&&Nh(t)})}function Dh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!oi(t,o)}catch{return!0}}function Nh(t){var i=Oi(t,1);i!==null&&fi(i,t,1,-1)}function Ih(t){var i=Si();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},i.queue=t,t=t.dispatch=X0.bind(null,jt,t),[i.memoizedState,t]}function bo(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Uh(){return Qn().memoizedState}function Oa(t,i,o,u){var f=Si();jt.flags|=t,f.memoizedState=bo(1|i,o,void 0,u===void 0?null:u)}function ka(t,i,o,u){var f=Qn();u=u===void 0?null:u;var p=void 0;if(en!==null){var E=en.memoizedState;if(p=E.destroy,u!==null&&Gu(u,E.deps)){f.memoizedState=bo(i,o,p,u);return}}jt.flags|=t,f.memoizedState=bo(1|i,o,p,u)}function Fh(t,i){return Oa(8390656,8,t,i)}function Yu(t,i){return ka(2048,8,t,i)}function Oh(t,i){return ka(4,2,t,i)}function kh(t,i){return ka(4,4,t,i)}function Bh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function zh(t,i,o){return o=o!=null?o.concat([t]):null,ka(4,4,Bh.bind(null,i,t),o)}function $u(){}function Vh(t,i){var o=Qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Hh(t,i){var o=Qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Gh(t,i,o){return(Br&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(oi(o,i)||(o=mn(),jt.lanes|=o,zr|=o,t.baseState=!0),i)}function G0(t,i){var o=lt;lt=o!==0&&4>o?o:4,t(!0);var u=Hu.transition;Hu.transition={};try{t(!1),i()}finally{lt=o,Hu.transition=u}}function Wh(){return Qn().memoizedState}function W0(t,i,o){var u=mr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Xh(t))jh(i,o);else if(o=Mh(t,i,o,u),o!==null){var f=Cn();fi(o,t,u,f),qh(o,i,u)}}function X0(t,i,o){var u=mr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xh(t))jh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,U=p(E,o);if(f.hasEagerState=!0,f.eagerState=U,oi(U,E)){var B=i.interleaved;B===null?(f.next=f,Fu(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=Mh(t,i,f,u),o!==null&&(f=Cn(),fi(o,t,u,f),qh(o,i,u))}}function Xh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function jh(t,i){Ao=Fa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function qh(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Lt(t,o)}}var Ba={readContext:Zn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},j0={readContext:Zn,useCallback:function(t,i){return Si().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:Fh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Oa(4194308,4,Bh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Oa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Oa(4,2,t,i)},useMemo:function(t,i){var o=Si();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Si();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=W0.bind(null,jt,t),[u.memoizedState,t]},useRef:function(t){var i=Si();return t={current:t},i.memoizedState=t},useState:Ih,useDebugValue:$u,useDeferredValue:function(t){return Si().memoizedState=t},useTransition:function(){var t=Ih(!1),i=t[0];return t=G0.bind(null,t[1]),Si().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=jt,f=Si();if(Gt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),ln===null)throw Error(n(349));(Br&30)!==0||bh(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Fh(Lh.bind(null,u,p,t),[t]),u.flags|=2048,bo(9,Ph.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=Si(),i=ln.identifierPrefix;if(Gt){var o=Fi,u=Ui;o=(u&~(1<<32-ke(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=H0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},q0={readContext:Zn,useCallback:Vh,useContext:Zn,useEffect:Yu,useImperativeHandle:zh,useInsertionEffect:Oh,useLayoutEffect:kh,useMemo:Hh,useReducer:ju,useRef:Uh,useState:function(){return ju(Ro)},useDebugValue:$u,useDeferredValue:function(t){var i=Qn();return Gh(i,en.memoizedState,t)},useTransition:function(){var t=ju(Ro)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Rh,useId:Wh,unstable_isNewReconciler:!1},Y0={readContext:Zn,useCallback:Vh,useContext:Zn,useEffect:Yu,useImperativeHandle:zh,useInsertionEffect:Oh,useLayoutEffect:kh,useMemo:Hh,useReducer:qu,useRef:Uh,useState:function(){return qu(Ro)},useDebugValue:$u,useDeferredValue:function(t){var i=Qn();return en===null?i.memoizedState=t:Gh(i,en.memoizedState,t)},useTransition:function(){var t=qu(Ro)[0],i=Qn().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Rh,useId:Wh,unstable_isNewReconciler:!1};function li(t,i){if(t&&t.defaultProps){i=ne({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ku(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:ne({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var za={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=Cn(),f=mr(t),p=ki(u,f);p.payload=i,o!=null&&(p.callback=o),i=fr(t,p,f),i!==null&&(fi(i,t,f,u),Da(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=Cn(),f=mr(t),p=ki(u,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=fr(t,p,f),i!==null&&(fi(i,t,f,u),Da(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Cn(),u=mr(t),f=ki(o,u);f.tag=2,i!=null&&(f.callback=i),i=fr(t,f,u),i!==null&&(fi(i,t,u,o),Da(i,t,u))}};function Yh(t,i,o,u,f,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,E):i.prototype&&i.prototype.isPureReactComponent?!mo(o,u)||!mo(f,p):!0}function $h(t,i,o){var u=!1,f=lr,p=i.contextType;return typeof p=="object"&&p!==null?p=Zn(p):(f=Ln(i)?Ir:gn.current,u=i.contextTypes,p=(u=u!=null)?hs(t,f):lr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=za,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Kh(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&za.enqueueReplaceState(i,i.state,null)}function Zu(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Ou(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Zn(p):(p=Ln(i)?Ir:gn.current,f.context=hs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ku(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&za.enqueueReplaceState(f,f.state,null),Na(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",u=i;do o+=Ye(u),u=u.return;while(u);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Qu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ju(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var $0=typeof WeakMap=="function"?WeakMap:Map;function Zh(t,i,o){o=ki(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){qa||(qa=!0,pc=u),Ju(t,i)},o}function Qh(t,i,o){o=ki(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Ju(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ju(t,i),typeof u!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Jh(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new $0;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=u_.bind(null,t,i,o),i.then(t,t))}function ep(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function tp(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ki(-1,1),i.tag=2,fr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var K0=P.ReactCurrentOwner,Dn=!1;function An(t,i,o,u){i.child=t===null?yh(i,null,o,u):_s(i,t.child,o,u)}function np(t,i,o,u,f){o=o.render;var p=i.ref;return xs(i,f),u=Wu(t,i,o,u,p,f),o=Xu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(Gt&&o&&Cu(i),i.flags|=1,An(t,i,u,f),i.child)}function ip(t,i,o,u,f){if(t===null){var p=o.type;return typeof p=="function"&&!yc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,rp(t,i,p,u,f)):(t=Ja(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:mo,o(E,u)&&t.ref===i.ref)return Bi(t,i,f)}return i.flags|=1,t=_r(p,u),t.ref=i.ref,t.return=i,i.child=t}function rp(t,i,o,u,f){if(t!==null){var p=t.memoizedProps;if(mo(p,u)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Bi(t,i,f)}return ec(t,i,o,u,f)}function sp(t,i,o){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Es,Gn),Gn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(Es,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,kt(Es,Gn),Gn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,kt(Es,Gn),Gn|=u;return An(t,i,f,o),i.child}function op(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ec(t,i,o,u,f){var p=Ln(o)?Ir:gn.current;return p=hs(i,p),xs(i,f),o=Wu(t,i,o,u,p,f),u=Xu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Bi(t,i,f)):(Gt&&u&&Cu(i),i.flags|=1,An(t,i,o,f),i.child)}function ap(t,i,o,u,f){if(Ln(o)){var p=!0;Ta(i)}else p=!1;if(xs(i,f),i.stateNode===null)Ha(t,i),$h(i,o,u),Zu(i,o,u,f),u=!0;else if(t===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var B=E.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Zn(ie):(ie=Ln(o)?Ir:gn.current,ie=hs(i,ie));var ge=o.getDerivedStateFromProps,Se=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||B!==ie)&&Kh(i,E,u,ie),cr=!1;var me=i.memoizedState;E.state=me,Na(i,u,E,f),B=i.memoizedState,U!==u||me!==B||Pn.current||cr?(typeof ge=="function"&&(Ku(i,o,ge,u),B=i.memoizedState),(U=cr||Yh(i,o,U,u,me,B,ie))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),E.props=u,E.state=B,E.context=ie,u=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Eh(t,i),U=i.memoizedProps,ie=i.type===i.elementType?U:li(i.type,U),E.props=ie,Se=i.pendingProps,me=E.context,B=o.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=Ln(o)?Ir:gn.current,B=hs(i,B));var Oe=o.getDerivedStateFromProps;(ge=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||me!==B)&&Kh(i,E,u,B),cr=!1,me=i.memoizedState,E.state=me,Na(i,u,E,f);var Xe=i.memoizedState;U!==Se||me!==Xe||Pn.current||cr?(typeof Oe=="function"&&(Ku(i,o,Oe,u),Xe=i.memoizedState),(ie=cr||Yh(i,o,ie,u,me,Xe,B)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Xe,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Xe,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Xe),E.props=u,E.state=Xe,E.context=B,u=ie):(typeof E.componentDidUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),u=!1)}return tc(t,i,o,u,p,f)}function tc(t,i,o,u,f,p){op(t,i);var E=(i.flags&128)!==0;if(!u&&!E)return f&&dh(i,o,!1),Bi(t,i,p);u=i.stateNode,K0.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&E?(i.child=_s(i,t.child,null,p),i.child=_s(i,null,U,p)):An(t,i,U,p),i.memoizedState=u.state,f&&dh(i,o,!0),i.child}function lp(t){var i=t.stateNode;i.pendingContext?ch(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ch(t,i.context,!1),ku(t,i.containerInfo)}function up(t,i,o,u,f){return gs(),Lu(f),i.flags|=256,An(t,i,o,u),i.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function cp(t,i,o){var u=i.pendingProps,f=Xt.current,p=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),kt(Xt,f&1),t===null)return Pu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,t=u.fallback,p?(u=i.mode,p=i.child,E={mode:"hidden",children:E},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=el(E,u,0,null),t=Wr(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=ic(o),i.memoizedState=nc,t):rc(i,E));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return Z0(t,i,E,u,U,f,o);if(p){p=u.fallback,E=i.mode,f=t.child,U=f.sibling;var B={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=_r(f,B),u.subtreeFlags=f.subtreeFlags&14680064),U!==null?p=_r(U,p):(p=Wr(p,E,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,E=t.child.memoizedState,E=E===null?ic(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~o,i.memoizedState=nc,u}return p=t.child,t=p.sibling,u=_r(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function rc(t,i){return i=el({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Va(t,i,o,u){return u!==null&&Lu(u),_s(i,t.child,null,o),t=rc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Z0(t,i,o,u,f,p,E){if(o)return i.flags&256?(i.flags&=-257,u=Qu(Error(n(422))),Va(t,i,E,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=el({mode:"visible",children:u.children},f,0,null),p=Wr(p,f,E,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&_s(i,t.child,null,E),i.child.memoizedState=ic(E),i.memoizedState=nc,p);if((i.mode&1)===0)return Va(t,i,E,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var U=u.dgst;return u=U,p=Error(n(419)),u=Qu(p,u,void 0),Va(t,i,E,u)}if(U=(E&t.childLanes)!==0,Dn||U){if(u=ln,u!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|E))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Oi(t,f),fi(u,t,f,-1))}return Sc(),u=Qu(Error(n(421))),Va(t,i,E,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=c_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Hn=or(f.nextSibling),Vn=i,Gt=!0,ai=null,t!==null&&($n[Kn++]=Ui,$n[Kn++]=Fi,$n[Kn++]=Ur,Ui=t.id,Fi=t.overflow,Ur=i),i=rc(i,u.children),i.flags|=4096,i)}function fp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Uu(t.return,i,o)}function sc(t,i,o,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function dp(t,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(An(t,i,u.children,o),u=Xt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,o,i);else if(t.tag===19)fp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(kt(Xt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Ia(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),sc(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ia(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}sc(i,!0,o,null,p);break;case"together":sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ha(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=_r(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=_r(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Q0(t,i,o){switch(i.tag){case 3:lp(i),gs();break;case 5:Ah(i);break;case 1:Ln(i.type)&&Ta(i);break;case 4:ku(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;kt(Pa,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Xt,Xt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?cp(t,i,o):(kt(Xt,Xt.current&1),t=Bi(t,i,o),t!==null?t.sibling:null);kt(Xt,Xt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return dp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),kt(Xt,Xt.current),u)break;return null;case 22:case 23:return i.lanes=0,sp(t,i,o)}return Bi(t,i,o)}var hp,oc,pp,mp;hp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},oc=function(){},pp=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,kr(xi.current);var p=null;switch(o){case"input":f=xt(t,f),u=xt(t,u),p=[];break;case"select":f=ne({},f,{value:void 0}),u=ne({},u,{value:void 0}),p=[];break;case"textarea":f=Be(t,f),u=Be(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=ya)}je(o,u);var E;o=null;for(ie in f)if(!u.hasOwnProperty(ie)&&f.hasOwnProperty(ie)&&f[ie]!=null)if(ie==="style"){var U=f[ie];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in u){var B=u[ie];if(U=f?.[ie],u.hasOwnProperty(ie)&&B!==U&&(B!=null||U!=null))if(ie==="style")if(U){for(E in U)!U.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in B)B.hasOwnProperty(E)&&U[E]!==B[E]&&(o||(o={}),o[E]=B[E])}else o||(p||(p=[]),p.push(ie,o)),o=B;else ie==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(p=p||[]).push(ie,B)):ie==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(ie,""+B):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(B!=null&&ie==="onScroll"&&zt("scroll",t),p||U===B||(p=[])):(p=p||[]).push(ie,B))}o&&(p=p||[]).push("style",o);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},mp=function(t,i,o,u){o!==u&&(i.flags|=4)};function Po(t,i){if(!Gt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function J0(t,i,o){var u=i.pendingProps;switch(Ru(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Ln(i.type)&&Ea(),vn(i),null;case 3:return u=i.stateNode,Ss(),Vt(Pn),Vt(gn),Vu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Ra(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(_c(ai),ai=null))),oc(t,i),vn(i),null;case 5:Bu(i);var f=kr(wo.current);if(o=i.type,t!==null&&i.stateNode!=null)pp(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return vn(i),null}if(t=kr(xi.current),Ra(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[vi]=i,u[So]=p,t=(i.mode&1)!==0,o){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(f=0;f<_o.length;f++)zt(_o[f],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":yt(u,p),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},zt("invalid",u);break;case"textarea":L(u,p),zt("invalid",u)}je(o,p),f=null;for(var E in p)if(p.hasOwnProperty(E)){var U=p[E];E==="children"?typeof U=="string"?u.textContent!==U&&(p.suppressHydrationWarning!==!0&&Sa(u.textContent,U,t),f=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(p.suppressHydrationWarning!==!0&&Sa(u.textContent,U,t),f=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&zt("scroll",u)}switch(o){case"input":dt(u),I(u,p,!0);break;case"textarea":dt(u),G(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=ya)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=E.createElement(o,{is:u.is}):(t=E.createElement(o),o==="select"&&(E=t,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):t=E.createElementNS(t,o),t[vi]=i,t[So]=u,hp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ce(o,u),o){case"dialog":zt("cancel",t),zt("close",t),f=u;break;case"iframe":case"object":case"embed":zt("load",t),f=u;break;case"video":case"audio":for(f=0;f<_o.length;f++)zt(_o[f],t);f=u;break;case"source":zt("error",t),f=u;break;case"img":case"image":case"link":zt("error",t),zt("load",t),f=u;break;case"details":zt("toggle",t),f=u;break;case"input":yt(t,u),f=xt(t,u),zt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=ne({},u,{value:void 0}),zt("invalid",t);break;case"textarea":L(t,u),f=Be(t,u),zt("invalid",t);break;default:f=u}je(o,f),U=f;for(p in U)if(U.hasOwnProperty(p)){var B=U[p];p==="style"?Pe(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(t,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&we(t,B):typeof B=="number"&&we(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?B!=null&&p==="onScroll"&&zt("scroll",t):B!=null&&D(t,p,B,E))}switch(o){case"input":dt(t),I(t,u,!1);break;case"textarea":dt(t),G(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ve(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?mt(t,!!u.multiple,p,!1):u.defaultValue!=null&&mt(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(t&&i.stateNode!=null)mp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=kr(wo.current),kr(xi.current),Ra(i)){if(u=i.stateNode,o=i.memoizedProps,u[vi]=i,(p=u.nodeValue!==o)&&(t=Vn,t!==null))switch(t.tag){case 3:Sa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[vi]=i,i.stateNode=u}return vn(i),null;case 13:if(Vt(Xt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Gt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)vh(),gs(),i.flags|=98560,p=!1;else if(p=Ra(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[vi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),p=!1}else ai!==null&&(_c(ai),ai=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?tn===0&&(tn=3):Sc())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Ss(),oc(t,i),t===null&&vo(i.stateNode.containerInfo),vn(i),null;case 10:return Iu(i.type._context),vn(i),null;case 17:return Ln(i.type)&&Ea(),vn(i),null;case 19:if(Vt(Xt),p=i.memoizedState,p===null)return vn(i),null;if(u=(i.flags&128)!==0,E=p.rendering,E===null)if(u)Po(p,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Ia(t),E!==null){for(i.flags|=128,Po(p,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return kt(Xt,Xt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Wt()>Ts&&(i.flags|=128,u=!0,Po(p,!1),i.lanes=4194304)}else{if(!u)if(t=Ia(E),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Po(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Gt)return vn(i),null}else 2*Wt()-p.renderingStartTime>Ts&&o!==1073741824&&(i.flags|=128,u=!0,Po(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(o=p.last,o!==null?o.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Wt(),i.sibling=null,o=Xt.current,kt(Xt,u?o&1|2:o&1),i):(vn(i),null);case 22:case 23:return xc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function e_(t,i){switch(Ru(i),i.tag){case 1:return Ln(i.type)&&Ea(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),Vt(Pn),Vt(gn),Vu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Bu(i),null;case 13:if(Vt(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));gs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Vt(Xt),null;case 4:return Ss(),null;case 10:return Iu(i.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Ga=!1,xn=!1,t_=typeof WeakSet=="function"?WeakSet:Set,He=null;function Ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Yt(t,i,u)}else o.current=null}function ac(t,i,o){try{o()}catch(u){Yt(t,i,u)}}var gp=!1;function n_(t,i){if(xu=ua,t=Yd(),fu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,U=-1,B=-1,ie=0,ge=0,Se=t,me=null;t:for(;;){for(var Oe;Se!==o||f!==0&&Se.nodeType!==3||(U=E+f),Se!==p||u!==0&&Se.nodeType!==3||(B=E+u),Se.nodeType===3&&(E+=Se.nodeValue.length),(Oe=Se.firstChild)!==null;)me=Se,Se=Oe;for(;;){if(Se===t)break t;if(me===o&&++ie===f&&(U=E),me===p&&++ge===u&&(B=E),(Oe=Se.nextSibling)!==null)break;Se=me,me=Se.parentNode}Se=Oe}o=U===-1||B===-1?null:{start:U,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Su={focusedElem:t,selectionRange:o},ua=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,Kt=Xe.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?qe:li(i.type,qe),Kt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Yt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return Xe=gp,gp=!1,Xe}function Lo(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&ac(i,o,p)}f=f.next}while(f!==u)}}function Wa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function lc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function _p(t){var i=t.alternate;i!==null&&(t.alternate=null,_p(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[vi],delete i[So],delete i[Tu],delete i[k0],delete i[B0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vp(t){return t.tag===5||t.tag===3||t.tag===4}function xp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ya));else if(u!==4&&(t=t.child,t!==null))for(uc(t,i,o),t=t.sibling;t!==null;)uc(t,i,o),t=t.sibling}function cc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(cc(t,i,o),t=t.sibling;t!==null;)cc(t,i,o),t=t.sibling}var fn=null,ui=!1;function dr(t,i,o){for(o=o.child;o!==null;)Sp(t,i,o),o=o.sibling}function Sp(t,i,o){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Fe,o)}catch{}switch(o.tag){case 5:xn||Ms(o,i);case 6:var u=fn,f=ui;fn=null,dr(t,i,o),fn=u,ui=f,fn!==null&&(ui?(t=fn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(ui?(t=fn,o=o.stateNode,t.nodeType===8?Eu(t.parentNode,o):t.nodeType===1&&Eu(t,o),lo(t)):Eu(fn,o.stateNode));break;case 4:u=fn,f=ui,fn=o.stateNode.containerInfo,ui=!0,dr(t,i,o),fn=u,ui=f;break;case 0:case 11:case 14:case 15:if(!xn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&ac(o,i,E),f=f.next}while(f!==u)}dr(t,i,o);break;case 1:if(!xn&&(Ms(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){Yt(o,i,U)}dr(t,i,o);break;case 21:dr(t,i,o);break;case 22:o.mode&1?(xn=(u=xn)||o.memoizedState!==null,dr(t,i,o),xn=u):dr(t,i,o);break;default:dr(t,i,o)}}function yp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new t_),i.forEach(function(u){var f=f_.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function ci(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var p=t,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:fn=U.stateNode,ui=!1;break e;case 3:fn=U.stateNode.containerInfo,ui=!0;break e;case 4:fn=U.stateNode.containerInfo,ui=!0;break e}U=U.return}if(fn===null)throw Error(n(160));Sp(p,E,f),fn=null,ui=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ie){Yt(f,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mp(i,t),i=i.sibling}function Mp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(i,t),yi(t),u&4){try{Lo(3,t,t.return),Wa(3,t)}catch(qe){Yt(t,t.return,qe)}try{Lo(5,t,t.return)}catch(qe){Yt(t,t.return,qe)}}break;case 1:ci(i,t),yi(t),u&512&&o!==null&&Ms(o,o.return);break;case 5:if(ci(i,t),yi(t),u&512&&o!==null&&Ms(o,o.return),t.flags&32){var f=t.stateNode;try{we(f,"")}catch(qe){Yt(t,t.return,qe)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,E=o!==null?o.memoizedProps:p,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&p.type==="radio"&&p.name!=null&&ot(f,p),Ce(U,E);var ie=Ce(U,p);for(E=0;E<B.length;E+=2){var ge=B[E],Se=B[E+1];ge==="style"?Pe(f,Se):ge==="dangerouslySetInnerHTML"?$e(f,Se):ge==="children"?we(f,Se):D(f,ge,Se,ie)}switch(U){case"input":Ft(f,p);break;case"textarea":M(f,p);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Oe=p.value;Oe!=null?mt(f,!!p.multiple,Oe,!1):me!==!!p.multiple&&(p.defaultValue!=null?mt(f,!!p.multiple,p.defaultValue,!0):mt(f,!!p.multiple,p.multiple?[]:"",!1))}f[So]=p}catch(qe){Yt(t,t.return,qe)}}break;case 6:if(ci(i,t),yi(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(qe){Yt(t,t.return,qe)}}break;case 3:if(ci(i,t),yi(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{lo(i.containerInfo)}catch(qe){Yt(t,t.return,qe)}break;case 4:ci(i,t),yi(t);break;case 13:ci(i,t),yi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(hc=Wt())),u&4&&yp(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(xn=(ie=xn)||ge,ci(i,t),xn=ie):ci(i,t),yi(t),u&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ge&&(t.mode&1)!==0)for(He=t,ge=t.child;ge!==null;){for(Se=He=ge;He!==null;){switch(me=He,Oe=me.child,me.tag){case 0:case 11:case 14:case 15:Lo(4,me,me.return);break;case 1:Ms(me,me.return);var Xe=me.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){Yt(u,o,qe)}}break;case 5:Ms(me,me.return);break;case 22:if(me.memoizedState!==null){wp(Se);continue}}Oe!==null?(Oe.return=me,He=Oe):wp(Se)}ge=ge.sibling}e:for(ge=null,Se=t;;){if(Se.tag===5){if(ge===null){ge=Se;try{f=Se.stateNode,ie?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(U=Se.stateNode,B=Se.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=ye("display",E))}catch(qe){Yt(t,t.return,qe)}}}else if(Se.tag===6){if(ge===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(qe){Yt(t,t.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ge===Se&&(ge=null),Se=Se.return}ge===Se&&(ge=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ci(i,t),yi(t),u&4&&yp(t);break;case 21:break;default:ci(i,t),yi(t)}}function yi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(vp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(we(f,""),u.flags&=-33);var p=xp(t);cc(t,p,f);break;case 3:case 4:var E=u.stateNode.containerInfo,U=xp(t);uc(t,U,E);break;default:throw Error(n(161))}}catch(B){Yt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function i_(t,i,o){He=t,Ep(t)}function Ep(t,i,o){for(var u=(t.mode&1)!==0;He!==null;){var f=He,p=f.child;if(f.tag===22&&u){var E=f.memoizedState!==null||Ga;if(!E){var U=f.alternate,B=U!==null&&U.memoizedState!==null||xn;U=Ga;var ie=xn;if(Ga=E,(xn=B)&&!ie)for(He=f;He!==null;)E=He,B=E.child,E.tag===22&&E.memoizedState!==null?Ap(f):B!==null?(B.return=E,He=B):Ap(f);for(;p!==null;)He=p,Ep(p),p=p.sibling;He=f,Ga=U,xn=ie}Tp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,He=p):Tp(t)}}function Tp(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Wa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!xn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:li(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&wh(i,p,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}wh(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ge=ie.memoizedState;if(ge!==null){var Se=ge.dehydrated;Se!==null&&lo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xn||i.flags&512&&lc(i)}catch(me){Yt(i,i.return,me)}}if(i===t){He=null;break}if(o=i.sibling,o!==null){o.return=i.return,He=o;break}He=i.return}}function wp(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var o=i.sibling;if(o!==null){o.return=i.return,He=o;break}He=i.return}}function Ap(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Wa(4,i)}catch(B){Yt(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(B){Yt(i,f,B)}}var p=i.return;try{lc(i)}catch(B){Yt(i,p,B)}break;case 5:var E=i.return;try{lc(i)}catch(B){Yt(i,E,B)}}}catch(B){Yt(i,i.return,B)}if(i===t){He=null;break}var U=i.sibling;if(U!==null){U.return=i.return,He=U;break}He=i.return}}var r_=Math.ceil,Xa=P.ReactCurrentDispatcher,fc=P.ReactCurrentOwner,Jn=P.ReactCurrentBatchConfig,Tt=0,ln=null,Zt=null,dn=0,Gn=0,Es=ar(0),tn=0,Do=null,zr=0,ja=0,dc=0,No=null,Nn=null,hc=0,Ts=1/0,zi=null,qa=!1,pc=null,hr=null,Ya=!1,pr=null,$a=0,Io=0,mc=null,Ka=-1,Za=0;function Cn(){return(Tt&6)!==0?Wt():Ka!==-1?Ka:Ka=Wt()}function mr(t){return(t.mode&1)===0?1:(Tt&2)!==0&&dn!==0?dn&-dn:V0.transition!==null?(Za===0&&(Za=mn()),Za):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Rd(t.type)),t)}function fi(t,i,o,u){if(50<Io)throw Io=0,mc=null,Error(n(185));Jt(t,o,u),((Tt&2)===0||t!==ln)&&(t===ln&&((Tt&2)===0&&(ja|=o),tn===4&&gr(t,dn)),In(t,u),o===1&&Tt===0&&(i.mode&1)===0&&(Ts=Wt()+500,wa&&ur()))}function In(t,i){var o=t.callbackNode;bt(t,i);var u=At(t,t===ln?dn:0);if(u===0)o!==null&&oa(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&oa(o),i===1)t.tag===0?z0(Rp.bind(null,t)):hh(Rp.bind(null,t)),F0(function(){(Tt&6)===0&&ur()}),o=null;else{switch(wn(u)){case 1:o=W;break;case 4:o=se;break;case 16:o=ee;break;case 536870912:o=Le;break;default:o=ee}o=Fp(o,Cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Cp(t,i){if(Ka=-1,Za=0,(Tt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ws()&&t.callbackNode!==o)return null;var u=At(t,t===ln?dn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Qa(t,u);else{i=u;var f=Tt;Tt|=2;var p=Pp();(ln!==t||dn!==i)&&(zi=null,Ts=Wt()+500,Hr(t,i));do try{a_();break}catch(U){bp(t,U)}while(!0);Nu(),Xa.current=p,Tt=f,Zt!==null?i=0:(ln=null,dn=0,i=tn)}if(i!==0){if(i===2&&(f=vt(t),f!==0&&(u=f,i=gc(t,f))),i===1)throw o=Do,Hr(t,0),gr(t,u),In(t,Wt()),o;if(i===6)gr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!s_(f)&&(i=Qa(t,u),i===2&&(p=vt(t),p!==0&&(u=p,i=gc(t,p))),i===1))throw o=Do,Hr(t,0),gr(t,u),In(t,Wt()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Gr(t,Nn,zi);break;case 3:if(gr(t,u),(u&130023424)===u&&(i=hc+500-Wt(),10<i)){if(At(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Cn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Mu(Gr.bind(null,t,Nn,zi),i);break}Gr(t,Nn,zi);break;case 4:if(gr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var E=31-ke(u);p=1<<E,E=i[E],E>f&&(f=E),u&=~p}if(u=f,u=Wt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*r_(u/1960))-u,10<u){t.timeoutHandle=Mu(Gr.bind(null,t,Nn,zi),u);break}Gr(t,Nn,zi);break;case 5:Gr(t,Nn,zi);break;default:throw Error(n(329))}}}return In(t,Wt()),t.callbackNode===o?Cp.bind(null,t):null}function gc(t,i){var o=No;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=Qa(t,i),t!==2&&(i=Nn,Nn=o,i!==null&&_c(i)),t}function _c(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function s_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!oi(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(t,i){for(i&=~dc,i&=~ja,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ke(i),u=1<<o;t[o]=-1,i&=~u}}function Rp(t){if((Tt&6)!==0)throw Error(n(327));ws();var i=At(t,0);if((i&1)===0)return In(t,Wt()),null;var o=Qa(t,i);if(t.tag!==0&&o===2){var u=vt(t);u!==0&&(i=u,o=gc(t,u))}if(o===1)throw o=Do,Hr(t,0),gr(t,i),In(t,Wt()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Gr(t,Nn,zi),In(t,Wt()),null}function vc(t,i){var o=Tt;Tt|=1;try{return t(i)}finally{Tt=o,Tt===0&&(Ts=Wt()+500,wa&&ur())}}function Vr(t){pr!==null&&pr.tag===0&&(Tt&6)===0&&ws();var i=Tt;Tt|=1;var o=Jn.transition,u=lt;try{if(Jn.transition=null,lt=1,t)return t()}finally{lt=u,Jn.transition=o,Tt=i,(Tt&6)===0&&ur()}}function xc(){Gn=Es.current,Vt(Es)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,U0(o)),Zt!==null)for(o=Zt.return;o!==null;){var u=o;switch(Ru(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ea();break;case 3:Ss(),Vt(Pn),Vt(gn),Vu();break;case 5:Bu(u);break;case 4:Ss();break;case 13:Vt(Xt);break;case 19:Vt(Xt);break;case 10:Iu(u.type._context);break;case 22:case 23:xc()}o=o.return}if(ln=t,Zt=t=_r(t.current,null),dn=Gn=i,tn=0,Do=null,dc=ja=zr=0,Nn=No=null,Or!==null){for(i=0;i<Or.length;i++)if(o=Or[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,p=o.pending;if(p!==null){var E=p.next;p.next=f,u.next=E}o.pending=u}Or=null}return t}function bp(t,i){do{var o=Zt;try{if(Nu(),Ua.current=Ba,Fa){for(var u=jt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Fa=!1}if(Br=0,an=en=jt=null,Ao=!1,Co=0,fc.current=null,o===null||o.return===null){tn=1,Do=i,Zt=null;break}e:{var p=t,E=o.return,U=o,B=i;if(i=dn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ie=B,ge=U,Se=ge.tag;if((ge.mode&1)===0&&(Se===0||Se===11||Se===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Oe=ep(E);if(Oe!==null){Oe.flags&=-257,tp(Oe,E,U,p,i),Oe.mode&1&&Jh(p,ie,i),i=Oe,B=ie;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(B),i.updateQueue=qe}else Xe.add(B);break e}else{if((i&1)===0){Jh(p,ie,i),Sc();break e}B=Error(n(426))}}else if(Gt&&U.mode&1){var Kt=ep(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),tp(Kt,E,U,p,i),Lu(ys(B,U));break e}}p=B=ys(B,U),tn!==4&&(tn=2),No===null?No=[p]:No.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=Zh(p,B,i);Th(p,q);break e;case 1:U=B;var V=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(hr===null||!hr.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=Qh(p,U,i);Th(p,Ee);break e}}p=p.return}while(p!==null)}Dp(o)}catch(Ke){i=Ke,Zt===o&&o!==null&&(Zt=o=o.return);continue}break}while(!0)}function Pp(){var t=Xa.current;return Xa.current=Ba,t===null?Ba:t}function Sc(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||(zr&268435455)===0&&(ja&268435455)===0||gr(ln,dn)}function Qa(t,i){var o=Tt;Tt|=2;var u=Pp();(ln!==t||dn!==i)&&(zi=null,Hr(t,i));do try{o_();break}catch(f){bp(t,f)}while(!0);if(Nu(),Tt=o,Xa.current=u,Zt!==null)throw Error(n(261));return ln=null,dn=0,tn}function o_(){for(;Zt!==null;)Lp(Zt)}function a_(){for(;Zt!==null&&!Zl();)Lp(Zt)}function Lp(t){var i=Up(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?Dp(t):Zt=i,fc.current=null}function Dp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=J0(o,i,Gn),o!==null){Zt=o;return}}else{if(o=e_(o,i),o!==null){o.flags&=32767,Zt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);tn===0&&(tn=5)}function Gr(t,i,o){var u=lt,f=Jn.transition;try{Jn.transition=null,lt=1,l_(t,i,o,u)}finally{Jn.transition=f,lt=u}return null}function l_(t,i,o,u){do ws();while(pr!==null);if((Tt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Dr(t,p),t===ln&&(Zt=ln=null,dn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ya||(Ya=!0,Fp(ee,function(){return ws(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Jn.transition,Jn.transition=null;var E=lt;lt=1;var U=Tt;Tt|=4,fc.current=null,n_(t,o),Mp(o,t),R0(Su),ua=!!xu,Su=xu=null,t.current=o,i_(o),Ql(),Tt=U,lt=E,Jn.transition=p}else t.current=o;if(Ya&&(Ya=!1,pr=t,$a=f),p=t.pendingLanes,p===0&&(hr=null),Ge(o.stateNode),In(t,Wt()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(qa)throw qa=!1,t=pc,pc=null,t;return($a&1)!==0&&t.tag!==0&&ws(),p=t.pendingLanes,(p&1)!==0?t===mc?Io++:(Io=0,mc=t):Io=0,ur(),null}function ws(){if(pr!==null){var t=wn($a),i=Jn.transition,o=lt;try{if(Jn.transition=null,lt=16>t?16:t,pr===null)var u=!1;else{if(t=pr,pr=null,$a=0,(Tt&6)!==0)throw Error(n(331));var f=Tt;for(Tt|=4,He=t.current;He!==null;){var p=He,E=p.child;if((He.flags&16)!==0){var U=p.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ie=U[B];for(He=ie;He!==null;){var ge=He;switch(ge.tag){case 0:case 11:case 15:Lo(8,ge,p)}var Se=ge.child;if(Se!==null)Se.return=ge,He=Se;else for(;He!==null;){ge=He;var me=ge.sibling,Oe=ge.return;if(_p(ge),ge===ie){He=null;break}if(me!==null){me.return=Oe,He=me;break}He=Oe}}}var Xe=p.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var Kt=qe.sibling;qe.sibling=null,qe=Kt}while(qe!==null)}}He=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,He=E;else e:for(;He!==null;){if(p=He,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Lo(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,He=q;break e}He=p.return}}var V=t.current;for(He=V;He!==null;){E=He;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,He=K;else e:for(E=V;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Wa(9,U)}}catch(Ke){Yt(U,U.return,Ke)}if(U===E){He=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,He=Ee;break e}He=U.return}}if(Tt=f,ur(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Fe,t)}catch{}u=!0}return u}finally{lt=o,Jn.transition=i}}return!1}function Np(t,i,o){i=ys(o,i),i=Zh(t,i,1),t=fr(t,i,1),i=Cn(),t!==null&&(Jt(t,1,i),In(t,i))}function Yt(t,i,o){if(t.tag===3)Np(t,t,o);else for(;i!==null;){if(i.tag===3){Np(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(hr===null||!hr.has(u))){t=ys(o,t),t=Qh(i,t,1),i=fr(i,t,1),t=Cn(),i!==null&&(Jt(i,1,t),In(i,t));break}}i=i.return}}function u_(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=Cn(),t.pingedLanes|=t.suspendedLanes&o,ln===t&&(dn&o)===o&&(tn===4||tn===3&&(dn&130023424)===dn&&500>Wt()-hc?Hr(t,0):dc|=o),In(t,i)}function Ip(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ot,Ot<<=1,(Ot&130023424)===0&&(Ot=4194304)));var o=Cn();t=Oi(t,i),t!==null&&(Jt(t,i,o),In(t,o))}function c_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ip(t,o)}function f_(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Ip(t,o)}var Up;Up=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Pn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,Q0(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,Gt&&(i.flags&1048576)!==0&&ph(i,Ca,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ha(t,i),t=i.pendingProps;var f=hs(i,gn.current);xs(i,o),f=Wu(null,i,u,t,f,o);var p=Xu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(u)?(p=!0,Ta(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ou(i),f.updater=za,i.stateNode=f,f._reactInternals=i,Zu(i,u,t,o),i=tc(null,i,u,!0,p,o)):(i.tag=0,Gt&&p&&Cu(i),An(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ha(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=h_(u),t=li(u,t),f){case 0:i=ec(null,i,u,t,o);break e;case 1:i=ap(null,i,u,t,o);break e;case 11:i=np(null,i,u,t,o);break e;case 14:i=ip(null,i,u,li(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),ec(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),ap(t,i,u,f,o);case 3:e:{if(lp(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,Eh(t,i),Na(i,u,null,o);var E=i.memoizedState;if(u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ys(Error(n(423)),i),i=up(t,i,u,o,f);break e}else if(u!==f){f=ys(Error(n(424)),i),i=up(t,i,u,o,f);break e}else for(Hn=or(i.stateNode.containerInfo.firstChild),Vn=i,Gt=!0,ai=null,o=yh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),u===f){i=Bi(t,i,o);break e}An(t,i,u,o)}i=i.child}return i;case 5:return Ah(i),t===null&&Pu(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,E=f.children,yu(u,f)?E=null:p!==null&&yu(u,p)&&(i.flags|=32),op(t,i),An(t,i,E,o),i.child;case 6:return t===null&&Pu(i),null;case 13:return cp(t,i,o);case 4:return ku(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=_s(i,null,u,o):An(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),np(t,i,u,f,o);case 7:return An(t,i,i.pendingProps,o),i.child;case 8:return An(t,i,i.pendingProps.children,o),i.child;case 12:return An(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,E=f.value,kt(Pa,u._currentValue),u._currentValue=E,p!==null)if(oi(p.value,E)){if(p.children===f.children&&!Pn.current){i=Bi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var U=p.dependencies;if(U!==null){E=p.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(p.tag===1){B=ki(-1,o&-o),B.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var ge=ie.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),ie.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),Uu(p.return,o,i),U.lanes|=o;break}B=B.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Uu(E,o,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}An(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,xs(i,o),f=Zn(f),u=u(f),i.flags|=1,An(t,i,u,o),i.child;case 14:return u=i.type,f=li(u,i.pendingProps),f=li(u.type,f),ip(t,i,u,f,o);case 15:return rp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:li(u,f),Ha(t,i),i.tag=1,Ln(u)?(t=!0,Ta(i)):t=!1,xs(i,o),$h(i,u,f),Zu(i,u,f,o),tc(null,i,u,!0,t,o);case 19:return dp(t,i,o);case 22:return sp(t,i,o)}throw Error(n(156,i.tag))};function Fp(t,i){return sa(t,i)}function d_(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,o,u){return new d_(t,i,o,u)}function yc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function h_(t){if(typeof t=="function")return yc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===ce)return 14}return 2}function _r(t,i){var o=t.alternate;return o===null?(o=ei(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ja(t,i,o,u,f,p){var E=2;if(u=t,typeof t=="function")yc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case k:return Wr(o.children,f,p,i);case j:E=8,f|=8;break;case A:return t=ei(12,o,i,f|2),t.elementType=A,t.lanes=p,t;case Z:return t=ei(13,o,i,f),t.elementType=Z,t.lanes=p,t;case ae:return t=ei(19,o,i,f),t.elementType=ae,t.lanes=p,t;case Q:return el(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case H:E=9;break e;case oe:E=11;break e;case ce:E=14;break e;case te:E=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ei(E,o,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function Wr(t,i,o,u){return t=ei(7,t,u,i),t.lanes=o,t}function el(t,i,o,u){return t=ei(22,t,u,i),t.elementType=Q,t.lanes=o,t.stateNode={isHidden:!1},t}function Mc(t,i,o){return t=ei(6,t,null,i),t.lanes=o,t}function Ec(t,i,o){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function p_(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gi(0),this.expirationTimes=gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Tc(t,i,o,u,f,p,E,U,B){return t=new p_(t,i,o,U,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ei(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(p),t}function m_(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Op(t){if(!t)return lr;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ln(o))return fh(t,o,i)}return i}function kp(t,i,o,u,f,p,E,U,B){return t=Tc(o,u,!0,t,f,p,E,U,B),t.context=Op(null),o=t.current,u=Cn(),f=mr(o),p=ki(u,f),p.callback=i??null,fr(o,p,f),t.current.lanes=f,Jt(t,f,u),In(t,u),t}function tl(t,i,o,u){var f=i.current,p=Cn(),E=mr(f);return o=Op(o),i.context===null?i.context=o:i.pendingContext=o,i=ki(p,E),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=fr(f,i,E),t!==null&&(fi(t,f,E,p),Da(t,f,E)),E}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function wc(t,i){Bp(t,i),(t=t.alternate)&&Bp(t,i)}function g_(){return null}var zp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ac(t){this._internalRoot=t}il.prototype.render=Ac.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));tl(t,i,null,null)},il.prototype.unmount=Ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Vr(function(){tl(null,t,null,null)}),i[Ni]=null}};function il(t){this._internalRoot=t}il.prototype.unstable_scheduleHydration=function(t){if(t){var i=_i();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ir.length&&i!==0&&i<ir[o].priority;o++);ir.splice(o,0,t),o===0&&Ad(t)}};function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function __(t,i,o,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ie=nl(E);p.call(ie)}}var E=kp(i,u,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=E,t[Ni]=E.current,vo(t.nodeType===8?t.parentNode:t),Vr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var U=u;u=function(){var ie=nl(B);U.call(ie)}}var B=Tc(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=B,t[Ni]=B.current,vo(t.nodeType===8?t.parentNode:t),Vr(function(){tl(i,B,o,u)}),B}function sl(t,i,o,u,f){var p=o._reactRootContainer;if(p){var E=p;if(typeof f=="function"){var U=f;f=function(){var B=nl(E);U.call(B)}}tl(i,E,t,f)}else E=__(o,i,t,f,u);return nl(E)}sn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ut(i.pendingLanes);o!==0&&(Lt(i,o|1),In(i,Wt()),(Tt&6)===0&&(Ts=Wt()+500,ur()))}break;case 13:Vr(function(){var u=Oi(t,1);if(u!==null){var f=Cn();fi(u,t,1,f)}}),wc(t,1)}},on=function(t){if(t.tag===13){var i=Oi(t,134217728);if(i!==null){var o=Cn();fi(i,t,134217728,o)}wc(t,134217728)}},is=function(t){if(t.tag===13){var i=mr(t),o=Oi(t,i);if(o!==null){var u=Cn();fi(o,t,i,u)}wc(t,i)}},_i=function(){return lt},Td=function(t,i){var o=lt;try{return lt=t,i()}finally{lt=o}},De=function(t,i,o){switch(i){case"input":if(Ft(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=Ma(u);if(!f)throw Error(n(90));Ht(u),Ft(u,f)}}}break;case"textarea":M(t,o);break;case"select":i=o.value,i!=null&&mt(t,!!o.multiple,i,!1)}},rt=vc,Nt=Vr;var v_={usingClientEntryPoint:!1,Events:[yo,fs,Ma,he,Re,vc]},Uo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x_={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=io(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||g_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Fe=ol.inject(x_),Ae=ol}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v_,Un.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cc(i))throw Error(n(200));return m_(t,i,null,o)},Un.createRoot=function(t,i){if(!Cc(t))throw Error(n(299));var o=!1,u="",f=zp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Tc(t,1,!1,null,null,o,!1,u,f),t[Ni]=i.current,vo(t.nodeType===8?t.parentNode:t),new Ac(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=io(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return Vr(t)},Un.hydrate=function(t,i,o){if(!rl(i))throw Error(n(200));return sl(null,t,i,!0,o)},Un.hydrateRoot=function(t,i,o){if(!Cc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,p="",E=zp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=kp(i,null,t,1,o??null,f,!1,p,E),t[Ni]=i.current,vo(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new il(i)},Un.render=function(t,i,o){if(!rl(i))throw Error(n(200));return sl(null,t,i,!1,o)},Un.unmountComponentAtNode=function(t){if(!rl(t))throw Error(n(40));return t._reactRootContainer?(Vr(function(){sl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},Un.unstable_batchedUpdates=vc,Un.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!rl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return sl(t,i,o,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var $p;function C_(){if($p)return Pc.exports;$p=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pc.exports=A_(),Pc.exports}var Kp;function R_(){if(Kp)return al;Kp=1;var s=C_();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var sg=R_(),qt=ud();const b_="modulepreload",P_=function(s){return"/"+s},Zp={},qs=function(e,n,r){let a=Promise.resolve();if(n&&n.length>0){let c=function(h){return Promise.all(h.map(v=>Promise.resolve(v).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");a=c(n.map(h=>{if(h=P_(h),h in Zp)return;Zp[h]=!0;const v=h.endsWith(".css"),_=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${_}`))return;const S=document.createElement("link");if(S.rel=v?"stylesheet":b_,v||(S.as="script"),S.crossOrigin="",S.href=h,m&&S.setAttribute("nonce",m),document.head.appendChild(S),v)return new Promise((y,T)=>{S.addEventListener("load",y),S.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="182",L_=0,Qp=1,D_=2,Ul=1,N_=2,Xo=3,Cr=0,On=1,ji=2,Yi=0,zs=1,hf=2,Jp=3,em=4,I_=5,Qr=100,U_=101,F_=102,O_=103,k_=104,B_=200,z_=201,V_=202,H_=203,pf=204,mf=205,G_=206,W_=207,X_=208,j_=209,q_=210,Y_=211,$_=212,K_=213,Z_=214,gf=0,_f=1,vf=2,Hs=3,xf=4,Sf=5,yf=6,Mf=7,og=0,Q_=1,J_=2,Ci=0,ag=1,lg=2,ug=3,cg=4,fg=5,dg=6,hg=7,pg=300,ns=301,Gs=302,Ef=303,Tf=304,ql=306,wf=1e3,qi=1001,Af=1002,hn=1003,ev=1004,ll=1005,Mn=1006,Nc=1007,es=1008,qn=1009,mg=1010,gg=1011,Yo=1012,fd=1013,Pi=1014,wi=1015,Ki=1016,dd=1017,hd=1018,$o=1020,_g=35902,vg=35899,xg=1021,Sg=1022,mi=1023,Zi=1026,ts=1027,yg=1028,pd=1029,Ws=1030,md=1031,gd=1033,Fl=33776,Ol=33777,kl=33778,Bl=33779,Cf=35840,Rf=35841,bf=35842,Pf=35843,Lf=36196,Df=37492,Nf=37496,If=37488,Uf=37489,Ff=37490,Of=37491,kf=37808,Bf=37809,zf=37810,Vf=37811,Hf=37812,Gf=37813,Wf=37814,Xf=37815,jf=37816,qf=37817,Yf=37818,$f=37819,Kf=37820,Zf=37821,Qf=36492,Jf=36494,ed=36495,td=36283,nd=36284,id=36285,rd=36286,tv=3200,nv=0,iv=1,wr="",ni="srgb",Xs="srgb-linear",Hl="linear",It="srgb",As=7680,tm=519,rv=512,sv=513,ov=514,_d=515,av=516,lv=517,vd=518,uv=519,nm=35044,im="300 es",Ai=2e3,Gl=2001;function Mg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cv(){const s=Wl("canvas");return s.style.display="block",s}const rm={};function sm(...s){const e="THREE."+s.shift();console.log(e,...s)}function at(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Rt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Ko(...s){const e=s.join(" ");e in rm||(rm[e]=!0,at(...s))}function fv(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zl=Math.PI/180,sd=180/Math.PI;function Qo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function St(s,e,n){return Math.max(e,Math.min(n,s))}function dv(s,e){return(s%e+e)%e}function Ic(s,e,n){return(1-n)*s+n*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,n=0){Dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $s{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,d){let m=r[a+0],h=r[a+1],v=r[a+2],_=r[a+3],S=l[c+0],y=l[c+1],T=l[c+2],w=l[c+3];if(d<=0){e[n+0]=m,e[n+1]=h,e[n+2]=v,e[n+3]=_;return}if(d>=1){e[n+0]=S,e[n+1]=y,e[n+2]=T,e[n+3]=w;return}if(_!==w||m!==S||h!==y||v!==T){let x=m*S+h*y+v*T+_*w;x<0&&(S=-S,y=-y,T=-T,w=-w,x=-x);let g=1-d;if(x<.9995){const b=Math.acos(x),D=Math.sin(b);g=Math.sin(g*b)/D,d=Math.sin(d*b)/D,m=m*g+S*d,h=h*g+y*d,v=v*g+T*d,_=_*g+w*d}else{m=m*g+S*d,h=h*g+y*d,v=v*g+T*d,_=_*g+w*d;const b=1/Math.sqrt(m*m+h*h+v*v+_*_);m*=b,h*=b,v*=b,_*=b}}e[n]=m,e[n+1]=h,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,l,c){const d=r[a],m=r[a+1],h=r[a+2],v=r[a+3],_=l[c],S=l[c+1],y=l[c+2],T=l[c+3];return e[n]=d*T+v*_+m*y-h*S,e[n+1]=m*T+v*S+h*_-d*y,e[n+2]=h*T+v*y+d*S-m*_,e[n+3]=v*T-d*_-m*S-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,m=Math.sin,h=d(r/2),v=d(a/2),_=d(l/2),S=m(r/2),y=m(a/2),T=m(l/2);switch(c){case"XYZ":this._x=S*v*_+h*y*T,this._y=h*y*_-S*v*T,this._z=h*v*T+S*y*_,this._w=h*v*_-S*y*T;break;case"YXZ":this._x=S*v*_+h*y*T,this._y=h*y*_-S*v*T,this._z=h*v*T-S*y*_,this._w=h*v*_+S*y*T;break;case"ZXY":this._x=S*v*_-h*y*T,this._y=h*y*_+S*v*T,this._z=h*v*T+S*y*_,this._w=h*v*_-S*y*T;break;case"ZYX":this._x=S*v*_-h*y*T,this._y=h*y*_+S*v*T,this._z=h*v*T-S*y*_,this._w=h*v*_+S*y*T;break;case"YZX":this._x=S*v*_+h*y*T,this._y=h*y*_+S*v*T,this._z=h*v*T-S*y*_,this._w=h*v*_-S*y*T;break;case"XZY":this._x=S*v*_-h*y*T,this._y=h*y*_-S*v*T,this._z=h*v*T+S*y*_,this._w=h*v*_+S*y*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],d=n[5],m=n[9],h=n[2],v=n[6],_=n[10],S=r+d+_;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-m)*y,this._y=(l-h)*y,this._z=(c-a)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(v-m)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+h)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(l-h)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(c-a)/y,this._x=(l+h)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,d=n._x,m=n._y,h=n._z,v=n._w;return this._x=r*v+c*d+a*h-l*m,this._y=a*v+c*m+l*d-r*h,this._z=l*v+c*h+r*m-a*d,this._w=c*v-r*d-a*m-l*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,c=-c,d=-d);let m=1-n;if(d<.9995){const h=Math.acos(d),v=Math.sin(h);m=Math.sin(m*h)/v,n=Math.sin(n*h)/v,this._x=this._x*m+r*n,this._y=this._y*m+a*n,this._z=this._z*m+l*n,this._w=this._w*m+c*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+a*n,this._z=this._z*m+l*n,this._w=this._w*m+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,m=e.w,h=2*(c*a-d*r),v=2*(d*n-l*a),_=2*(l*r-c*n);return this.x=n+m*h+c*_-d*v,this.y=r+m*v+d*h-l*_,this.z=a+m*_+l*v-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,d=n.y,m=n.z;return this.x=a*m-l*d,this.y=l*c-r*m,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new $,om=new $s;class ft{constructor(e,n,r,a,l,c,d,m,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,m,h)}set(e,n,r,a,l,c,d,m,h){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=l,v[5]=m,v[6]=r,v[7]=c,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[3],m=r[6],h=r[1],v=r[4],_=r[7],S=r[2],y=r[5],T=r[8],w=a[0],x=a[3],g=a[6],b=a[1],D=a[4],P=a[7],N=a[2],F=a[5],k=a[8];return l[0]=c*w+d*b+m*N,l[3]=c*x+d*D+m*F,l[6]=c*g+d*P+m*k,l[1]=h*w+v*b+_*N,l[4]=h*x+v*D+_*F,l[7]=h*g+v*P+_*k,l[2]=S*w+y*b+T*N,l[5]=S*x+y*D+T*F,l[8]=S*g+y*P+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8];return n*c*v-n*d*h-r*l*v+r*d*m+a*l*h-a*c*m}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8],_=v*c-d*h,S=d*m-v*l,y=h*l-c*m,T=n*_+r*S+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(a*h-v*r)*w,e[2]=(d*r-a*c)*w,e[3]=S*w,e[4]=(v*n-a*m)*w,e[5]=(a*l-d*n)*w,e[6]=y*w,e[7]=(r*m-h*n)*w,e[8]=(c*n-r*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,d){const m=Math.cos(l),h=Math.sin(l);return this.set(r*m,r*h,-r*(m*c+h*d)+c+e,-a*h,a*m,-a*(-h*c+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Fc.makeScale(e,n)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new ft,am=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hv(){const s={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===It&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wr?Hl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xs]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:It,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const wt=hv();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class pv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=Wl("canvas")),Cs.width=e.width,Cs.height=e.height;const a=Cs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=$i(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor($i(n[r]/255)*255):n[r]=$i(n[r]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mv=0;class xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(Oc(a[c].image)):l.push(Oc(a[c]))}else l=Oc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let gv=0;const kc=new $;class bn extends Ys{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=qi,a=qi,l=Mn,c=es,d=mi,m=qn,h=bn.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Qo(),this.name="",this.source=new xd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=pg;bn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,r=0,a=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const m=e.elements,h=m[0],v=m[4],_=m[8],S=m[1],y=m[5],T=m[9],w=m[2],x=m[6],g=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+w)<.1&&Math.abs(T+x)<.1&&Math.abs(h+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(h+1)/2,P=(y+1)/2,N=(g+1)/2,F=(v+S)/4,k=(_+w)/4,j=(T+x)/4;return D>P&&D>N?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=F/r,l=k/r):P>N?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=F/a,l=j/a):N<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(N),r=k/l,a=j/l),this.set(r,a,l,n),this}let b=Math.sqrt((x-T)*(x-T)+(_-w)*(_-w)+(S-v)*(S-v));return Math.abs(b)<.001&&(b=1),this.x=(x-T)/b,this.y=(_-w)/b,this.z=(S-v)/b,this.w=Math.acos((h+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _v extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const a={width:e,height:n,depth:r.depth},l=new bn(a);this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new xd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends _v{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Eg extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vv extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(l,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),cl.subVectors(this.max,ko),Rs.subVectors(e.a,ko),bs.subVectors(e.b,ko),Ps.subVectors(e.c,ko),xr.subVectors(bs,Rs),Sr.subVectors(Ps,bs),Xr.subVectors(Rs,Ps);let n=[0,-xr.z,xr.y,0,-Sr.z,Sr.y,0,-Xr.z,Xr.y,xr.z,0,-xr.x,Sr.z,0,-Sr.x,Xr.z,0,-Xr.x,-xr.y,xr.x,0,-Sr.y,Sr.x,0,-Xr.y,Xr.x,0];return!Bc(n,Rs,bs,Ps,cl)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,Rs,bs,Ps,cl))?!1:(fl.crossVectors(xr,Sr),n=[fl.x,fl.y,fl.z],Bc(n,Rs,bs,Ps,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new $,new $,new $,new $,new $,new $,new $,new $],di=new $,ul=new Jo,Rs=new $,bs=new $,Ps=new $,xr=new $,Sr=new $,Xr=new $,ko=new $,cl=new $,fl=new $,jr=new $;function Bc(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){jr.fromArray(s,l);const d=a.x*Math.abs(jr.x)+a.y*Math.abs(jr.y)+a.z*Math.abs(jr.z),m=e.dot(jr),h=n.dot(jr),v=r.dot(jr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>d)return!1}return!0}const xv=new Jo,Bo=new $,zc=new $;class ea{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):xv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(zc)),this.expandByPoint(Bo.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new $,Vc=new $,dl=new $,yr=new $,Hc=new $,hl=new $,Gc=new $;class Sd{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Vc.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(Vc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(dl),d=yr.dot(this.direction),m=-yr.dot(dl),h=yr.lengthSq(),v=Math.abs(1-c*c);let _,S,y,T;if(v>0)if(_=c*m-d,S=c*d-m,T=l*v,_>=0)if(S>=-T)if(S<=T){const w=1/v;_*=w,S*=w,y=_*(_+c*S+2*d)+S*(c*_+S+2*m)+h}else S=l,_=Math.max(0,-(c*S+d)),y=-_*_+S*(S+2*m)+h;else S=-l,_=Math.max(0,-(c*S+d)),y=-_*_+S*(S+2*m)+h;else S<=-T?(_=Math.max(0,-(-c*l+d)),S=_>0?-l:Math.min(Math.max(-l,-m),l),y=-_*_+S*(S+2*m)+h):S<=T?(_=0,S=Math.min(Math.max(-l,-m),l),y=S*(S+2*m)+h):(_=Math.max(0,-(c*l+d)),S=_>0?l:Math.min(Math.max(-l,-m),l),y=-_*_+S*(S+2*m)+h);else S=c>0?-l:l,_=Math.max(0,-(c*S+d)),y=-_*_+S*(S+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Vc).addScaledVector(dl,S),y}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,m=r+c;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,d,m;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return h>=0?(r=(e.min.x-S.x)*h,a=(e.max.x-S.x)*h):(r=(e.max.x-S.x)*h,a=(e.min.x-S.x)*h),v>=0?(l=(e.min.y-S.y)*v,c=(e.max.y-S.y)*v):(l=(e.max.y-S.y)*v,c=(e.min.y-S.y)*v),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(d=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||d>a)||((d>r||r!==r)&&(r=d),(m<a||a!==a)&&(a=m),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,r,a,l){Hc.subVectors(n,e),hl.subVectors(r,e),Gc.crossVectors(Hc,hl);let c=this.direction.dot(Gc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;yr.subVectors(this.origin,e);const m=d*this.direction.dot(hl.crossVectors(yr,hl));if(m<0)return null;const h=d*this.direction.dot(Hc.cross(yr));if(h<0||m+h>c)return null;const v=-d*yr.dot(Gc);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,l,c,d,m,h,v,_,S,y,T,w,x){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,m,h,v,_,S,y,T,w,x)}set(e,n,r,a,l,c,d,m,h,v,_,S,y,T,w,x){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=d,g[13]=m,g[2]=h,g[6]=v,g[10]=_,g[14]=S,g[3]=y,g[7]=T,g[11]=w,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),c=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),m=Math.cos(a),h=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const S=c*v,y=c*_,T=d*v,w=d*_;n[0]=m*v,n[4]=-m*_,n[8]=h,n[1]=y+T*h,n[5]=S-w*h,n[9]=-d*m,n[2]=w-S*h,n[6]=T+y*h,n[10]=c*m}else if(e.order==="YXZ"){const S=m*v,y=m*_,T=h*v,w=h*_;n[0]=S+w*d,n[4]=T*d-y,n[8]=c*h,n[1]=c*_,n[5]=c*v,n[9]=-d,n[2]=y*d-T,n[6]=w+S*d,n[10]=c*m}else if(e.order==="ZXY"){const S=m*v,y=m*_,T=h*v,w=h*_;n[0]=S-w*d,n[4]=-c*_,n[8]=T+y*d,n[1]=y+T*d,n[5]=c*v,n[9]=w-S*d,n[2]=-c*h,n[6]=d,n[10]=c*m}else if(e.order==="ZYX"){const S=c*v,y=c*_,T=d*v,w=d*_;n[0]=m*v,n[4]=T*h-y,n[8]=S*h+w,n[1]=m*_,n[5]=w*h+S,n[9]=y*h-T,n[2]=-h,n[6]=d*m,n[10]=c*m}else if(e.order==="YZX"){const S=c*m,y=c*h,T=d*m,w=d*h;n[0]=m*v,n[4]=w-S*_,n[8]=T*_+y,n[1]=_,n[5]=c*v,n[9]=-d*v,n[2]=-h*v,n[6]=y*_+T,n[10]=S-w*_}else if(e.order==="XZY"){const S=c*m,y=c*h,T=d*m,w=d*h;n[0]=m*v,n[4]=-_,n[8]=h*v,n[1]=S*_+w,n[5]=c*v,n[9]=y*_-T,n[2]=T*_-y,n[6]=d*v,n[10]=w*_+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sv,e,yv)}lookAt(e,n,r){const a=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Mr.crossVectors(r,Wn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Mr.crossVectors(r,Wn)),Mr.normalize(),pl.crossVectors(Wn,Mr),a[0]=Mr.x,a[4]=pl.x,a[8]=Wn.x,a[1]=Mr.y,a[5]=pl.y,a[9]=Wn.y,a[2]=Mr.z,a[6]=pl.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[4],m=r[8],h=r[12],v=r[1],_=r[5],S=r[9],y=r[13],T=r[2],w=r[6],x=r[10],g=r[14],b=r[3],D=r[7],P=r[11],N=r[15],F=a[0],k=a[4],j=a[8],A=a[12],R=a[1],H=a[5],oe=a[9],Z=a[13],ae=a[2],ce=a[6],te=a[10],Q=a[14],X=a[3],fe=a[7],ne=a[11],O=a[15];return l[0]=c*F+d*R+m*ae+h*X,l[4]=c*k+d*H+m*ce+h*fe,l[8]=c*j+d*oe+m*te+h*ne,l[12]=c*A+d*Z+m*Q+h*O,l[1]=v*F+_*R+S*ae+y*X,l[5]=v*k+_*H+S*ce+y*fe,l[9]=v*j+_*oe+S*te+y*ne,l[13]=v*A+_*Z+S*Q+y*O,l[2]=T*F+w*R+x*ae+g*X,l[6]=T*k+w*H+x*ce+g*fe,l[10]=T*j+w*oe+x*te+g*ne,l[14]=T*A+w*Z+x*Q+g*O,l[3]=b*F+D*R+P*ae+N*X,l[7]=b*k+D*H+P*ce+N*fe,l[11]=b*j+D*oe+P*te+N*ne,l[15]=b*A+D*Z+P*Q+N*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],m=e[9],h=e[13],v=e[2],_=e[6],S=e[10],y=e[14],T=e[3],w=e[7],x=e[11],g=e[15],b=m*y-h*S,D=d*y-h*_,P=d*S-m*_,N=c*y-h*v,F=c*S-m*v,k=c*_-d*v;return n*(w*b-x*D+g*P)-r*(T*b-x*N+g*F)+a*(T*D-w*N+g*k)-l*(T*P-w*F+x*k)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],m=e[6],h=e[7],v=e[8],_=e[9],S=e[10],y=e[11],T=e[12],w=e[13],x=e[14],g=e[15],b=_*x*h-w*S*h+w*m*y-d*x*y-_*m*g+d*S*g,D=T*S*h-v*x*h-T*m*y+c*x*y+v*m*g-c*S*g,P=v*w*h-T*_*h+T*d*y-c*w*y-v*d*g+c*_*g,N=T*_*m-v*w*m-T*d*S+c*w*S+v*d*x-c*_*x,F=n*b+r*D+a*P+l*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=b*k,e[1]=(w*S*l-_*x*l-w*a*y+r*x*y+_*a*g-r*S*g)*k,e[2]=(d*x*l-w*m*l+w*a*h-r*x*h-d*a*g+r*m*g)*k,e[3]=(_*m*l-d*S*l-_*a*h+r*S*h+d*a*y-r*m*y)*k,e[4]=D*k,e[5]=(v*x*l-T*S*l+T*a*y-n*x*y-v*a*g+n*S*g)*k,e[6]=(T*m*l-c*x*l-T*a*h+n*x*h+c*a*g-n*m*g)*k,e[7]=(c*S*l-v*m*l+v*a*h-n*S*h-c*a*y+n*m*y)*k,e[8]=P*k,e[9]=(T*_*l-v*w*l-T*r*y+n*w*y+v*r*g-n*_*g)*k,e[10]=(c*w*l-T*d*l+T*r*h-n*w*h-c*r*g+n*d*g)*k,e[11]=(v*d*l-c*_*l-v*r*h+n*_*h+c*r*y-n*d*y)*k,e[12]=N*k,e[13]=(v*w*a-T*_*a+T*r*S-n*w*S-v*r*x+n*_*x)*k,e[14]=(T*d*a-c*w*a-T*r*m+n*w*m+c*r*x-n*d*x)*k,e[15]=(c*_*a-v*d*a+v*r*m-n*_*m-c*r*S+n*d*S)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,d=e.y,m=e.z,h=l*c,v=l*d;return this.set(h*c+r,h*d-a*m,h*m+a*d,0,h*d+a*m,v*d+r,v*m-a*c,0,h*m-a*d,v*m+a*c,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,d=n._z,m=n._w,h=l+l,v=c+c,_=d+d,S=l*h,y=l*v,T=l*_,w=c*v,x=c*_,g=d*_,b=m*h,D=m*v,P=m*_,N=r.x,F=r.y,k=r.z;return a[0]=(1-(w+g))*N,a[1]=(y+P)*N,a[2]=(T-D)*N,a[3]=0,a[4]=(y-P)*F,a[5]=(1-(S+g))*F,a[6]=(x+b)*F,a[7]=0,a[8]=(T+D)*k,a[9]=(x-b)*k,a[10]=(1-(S+w))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let l=Ls.set(a[0],a[1],a[2]).length();const c=Ls.set(a[4],a[5],a[6]).length(),d=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),hi.copy(this);const h=1/l,v=1/c,_=1/d;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=v,hi.elements[5]*=v,hi.elements[6]*=v,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,n.setFromRotationMatrix(hi),r.x=l,r.y=c,r.z=d,this}makePerspective(e,n,r,a,l,c,d=Ai,m=!1){const h=this.elements,v=2*l/(n-e),_=2*l/(r-a),S=(n+e)/(n-e),y=(r+a)/(r-a);let T,w;if(m)T=l/(c-l),w=c*l/(c-l);else if(d===Ai)T=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(d===Gl)T=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=S,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,c,d=Ai,m=!1){const h=this.elements,v=2/(n-e),_=2/(r-a),S=-(n+e)/(n-e),y=-(r+a)/(r-a);let T,w;if(m)T=1/(c-l),w=c/(c-l);else if(d===Ai)T=-2/(c-l),w=-(c+l)/(c-l);else if(d===Gl)T=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=v,h[4]=0,h[8]=0,h[12]=S,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=T,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ls=new $,hi=new Bt,Sv=new $(0,0,0),yv=new $(1,1,1),Mr=new $,pl=new $,Wn=new $,um=new Bt,cm=new $s;class Qi{constructor(e=0,n=0,r=0,a=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],m=a[1],h=a[5],v=a[9],_=a[2],S=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(S,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(S,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";let Tg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mv=0;const fm=new $,Ds=new $s,Gi=new Bt,ml=new $,zo=new $,Ev=new $,Tv=new $s,dm=new $(1,0,0),hm=new $(0,1,0),pm=new $(0,0,1),mm={type:"added"},wv={type:"removed"},Ns={type:"childadded",child:null},Wc={type:"childremoved",child:null};class pn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new $,n=new Qi,r=new $s,a=new $(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ft}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ml.copy(e):ml.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(zo,ml,this.up):Gi.lookAt(ml,zo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wv),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const _=m[h];l(e.shapes,_)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(l(e.materials,this.material[m]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];a.animations.push(l(e.animations,m))}}if(n){const d=c(e.geometries),m=c(e.materials),h=c(e.textures),v=c(e.images),_=c(e.shapes),S=c(e.skeletons),y=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(d){const m=[];for(const h in d){const v=d[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}pn.DEFAULT_UP=new $(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new $,Wi=new $,Xc=new $,Xi=new $,Is=new $,Us=new $,gm=new $,jc=new $,qc=new $,Yc=new $,$c=new $t,Kc=new $t,Zc=new $t;class ii{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),pi.subVectors(e,n),a.cross(pi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){pi.subVectors(a,n),Wi.subVectors(r,n),Xc.subVectors(e,n);const c=pi.dot(pi),d=pi.dot(Wi),m=pi.dot(Xc),h=Wi.dot(Wi),v=Wi.dot(Xc),_=c*h-d*d;if(_===0)return l.set(0,0,0),null;const S=1/_,y=(h*m-d*v)*S,T=(c*v-d*m)*S;return l.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,r,a,l,c,d,m){return this.getBarycoord(e,n,r,a,Xi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Xi.x),m.addScaledVector(c,Xi.y),m.addScaledVector(d,Xi.z),m)}static getInterpolatedAttribute(e,n,r,a,l,c){return $c.setScalar(0),Kc.setScalar(0),Zc.setScalar(0),$c.fromBufferAttribute(e,n),Kc.fromBufferAttribute(e,r),Zc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector($c,l.x),c.addScaledVector(Kc,l.y),c.addScaledVector(Zc,l.z),c}static isFrontFacing(e,n,r,a){return pi.subVectors(r,n),Wi.subVectors(e,n),pi.cross(Wi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),pi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ii.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,d;Is.subVectors(a,r),Us.subVectors(l,r),jc.subVectors(e,r);const m=Is.dot(jc),h=Us.dot(jc);if(m<=0&&h<=0)return n.copy(r);qc.subVectors(e,a);const v=Is.dot(qc),_=Us.dot(qc);if(v>=0&&_<=v)return n.copy(a);const S=m*_-v*h;if(S<=0&&m>=0&&v<=0)return c=m/(m-v),n.copy(r).addScaledVector(Is,c);Yc.subVectors(e,l);const y=Is.dot(Yc),T=Us.dot(Yc);if(T>=0&&y<=T)return n.copy(l);const w=y*h-m*T;if(w<=0&&h>=0&&T<=0)return d=h/(h-T),n.copy(r).addScaledVector(Us,d);const x=v*T-y*_;if(x<=0&&_-v>=0&&y-T>=0)return gm.subVectors(l,a),d=(_-v)/(_-v+(y-T)),n.copy(a).addScaledVector(gm,d);const g=1/(x+w+S);return c=w*g,d=S*g,n.copy(r).addScaledVector(Is,c).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Qc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Pt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=wt.workingColorSpace){if(e=dv(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Qc(c,l,e+1/3),this.g=Qc(c,l,e),this.b=Qc(c,l,e-1/3)}return wt.colorSpaceToWorking(this,a),this}setStyle(e,n=ni){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ni){const r=wg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return wt.workingToColorSpace(yn.copy(this),e),Math.round(St(yn.r*255,0,255))*65536+Math.round(St(yn.g*255,0,255))*256+Math.round(St(yn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(yn.copy(this),n);const r=yn.r,a=yn.g,l=yn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let m,h;const v=(d+c)/2;if(d===c)m=0,h=0;else{const _=c-d;switch(h=v<=.5?_/(c+d):_/(2-c-d),c){case r:m=(a-l)/_+(a<l?6:0);break;case a:m=(l-r)/_+2;break;case l:m=(r-a)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=ni){wt.workingToColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,a=yn.b;return e!==ni?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(gl);const r=Ic(Er.h,gl.h,n),a=Ic(Er.s,gl.s,n),l=Ic(Er.l,gl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new Pt;Pt.NAMES=wg;let Av=0;class Ks extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=zs,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pf&&(r.blendSrc=this.blendSrc),this.blendDst!==mf&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const m=l[d];delete m.metadata,c.push(m)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yd extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new $,_l=new Dt;let Cv=0;class bi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=nm,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),a=Fn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),a=Fn(a,this.array),l=Fn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class Ag extends bi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Cg extends bi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class En extends bi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Rv=0;const ti=new Bt,Jc=new pn,Fs=new $,Xn=new Jo,Vo=new Jo,cn=new $;class kn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?Cg:Ag)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,r){return ti.makeTranslation(e,n,r),this.applyMatrix4(ti),this}scale(e,n,r){return ti.makeScale(e,n,r),this.applyMatrix4(ti),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new En(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];Vo.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(Xn.min,Vo.min),Xn.expandByPoint(cn),cn.addVectors(Xn.max,Vo.max),Xn.expandByPoint(cn)):(Xn.expandByPoint(Vo.min),Xn.expandByPoint(Vo.max))}Xn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)cn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(cn));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],m=this.morphTargetsRelative;for(let h=0,v=d.count;h<v;h++)cn.fromBufferAttribute(d,h),m&&(Fs.fromBufferAttribute(e,h),cn.add(Fs)),a=Math.max(a,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new $,m[j]=new $;const h=new $,v=new $,_=new $,S=new Dt,y=new Dt,T=new Dt,w=new $,x=new $;function g(j,A,R){h.fromBufferAttribute(r,j),v.fromBufferAttribute(r,A),_.fromBufferAttribute(r,R),S.fromBufferAttribute(l,j),y.fromBufferAttribute(l,A),T.fromBufferAttribute(l,R),v.sub(h),_.sub(h),y.sub(S),T.sub(S);const H=1/(y.x*T.y-T.x*y.y);isFinite(H)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(H),x.copy(_).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(H),d[j].add(w),d[A].add(w),d[R].add(w),m[j].add(x),m[A].add(x),m[R].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let j=0,A=b.length;j<A;++j){const R=b[j],H=R.start,oe=R.count;for(let Z=H,ae=H+oe;Z<ae;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const D=new $,P=new $,N=new $,F=new $;function k(j){N.fromBufferAttribute(a,j),F.copy(N);const A=d[j];D.copy(A),D.sub(N.multiplyScalar(N.dot(A))).normalize(),P.crossVectors(F,A);const H=P.dot(m[j])<0?-1:1;c.setXYZW(j,D.x,D.y,D.z,H)}for(let j=0,A=b.length;j<A;++j){const R=b[j],H=R.start,oe=R.count;for(let Z=H,ae=H+oe;Z<ae;Z+=3)k(e.getX(Z+0)),k(e.getX(Z+1)),k(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const a=new $,l=new $,c=new $,d=new $,m=new $,h=new $,v=new $,_=new $;if(e)for(let S=0,y=e.count;S<y;S+=3){const T=e.getX(S+0),w=e.getX(S+1),x=e.getX(S+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,x),v.subVectors(c,l),_.subVectors(a,l),v.cross(_),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),h.fromBufferAttribute(r,x),d.add(v),m.add(v),h.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let S=0,y=n.count;S<y;S+=3)a.fromBufferAttribute(n,S+0),l.fromBufferAttribute(n,S+1),c.fromBufferAttribute(n,S+2),v.subVectors(c,l),_.subVectors(a,l),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,m){const h=d.array,v=d.itemSize,_=d.normalized,S=new h.constructor(m.length*v);let y=0,T=0;for(let w=0,x=m.length;w<x;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*v;for(let g=0;g<v;g++)S[T++]=h[y++]}return new bi(S,v,_)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,r=this.index.array,a=this.attributes;for(const d in a){const m=a[d],h=e(m,r);n.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const m=[],h=l[d];for(let v=0,_=h.length;v<_;v++){const S=h[v],y=e(S,r);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,m=c.length;d<m;d++){const h=c[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const a={};let l=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let _=0,S=h.length;_<S;_++){const y=h[_];v.push(y.toJSON(e.data))}v.length>0&&(a[m]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const h in a){const v=a[h];this.setAttribute(h,v.clone(n))}const l=e.morphAttributes;for(const h in l){const v=[],_=l[h];for(let S=0,y=_.length;S<y;S++)v.push(_[S].clone(n));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,v=c.length;h<v;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new Bt,qr=new Sd,vl=new ea,vm=new $,xl=new $,Sl=new $,yl=new $,ef=new $,Ml=new $,xm=new $,El=new $;class Li extends pn{constructor(e=new kn,n=new yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Ml.set(0,0,0);for(let m=0,h=l.length;m<h;m++){const v=d[m],_=l[m];v!==0&&(ef.fromBufferAttribute(_,e),c?Ml.addScaledVector(ef,v):Ml.addScaledVector(ef.sub(n),v))}n.add(Ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),qr.copy(e.ray).recast(e.near),!(vl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(vl,vm)===null||qr.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(_m.copy(l).invert(),qr.copy(e.ray).applyMatrix4(_m),!(r.boundingBox!==null&&qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,d=l.index,m=l.attributes.position,h=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,S=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,w=S.length;T<w;T++){const x=S[T],g=c[x.materialIndex],b=Math.max(x.start,y.start),D=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let P=b,N=D;P<N;P+=3){const F=d.getX(P),k=d.getX(P+1),j=d.getX(P+2);a=Tl(this,g,e,r,h,v,_,F,k,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let x=T,g=w;x<g;x+=3){const b=d.getX(x),D=d.getX(x+1),P=d.getX(x+2);a=Tl(this,c,e,r,h,v,_,b,D,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(m!==void 0)if(Array.isArray(c))for(let T=0,w=S.length;T<w;T++){const x=S[T],g=c[x.materialIndex],b=Math.max(x.start,y.start),D=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let P=b,N=D;P<N;P+=3){const F=P,k=P+1,j=P+2;a=Tl(this,g,e,r,h,v,_,F,k,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let x=T,g=w;x<g;x+=3){const b=x,D=x+1,P=x+2;a=Tl(this,c,e,r,h,v,_,b,D,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function bv(s,e,n,r,a,l,c,d){let m;if(e.side===On?m=r.intersectTriangle(c,l,a,!0,d):m=r.intersectTriangle(a,l,c,e.side===Cr,d),m===null)return null;El.copy(d),El.applyMatrix4(s.matrixWorld);const h=n.ray.origin.distanceTo(El);return h<n.near||h>n.far?null:{distance:h,point:El.clone(),object:s}}function Tl(s,e,n,r,a,l,c,d,m,h){s.getVertexPosition(d,xl),s.getVertexPosition(m,Sl),s.getVertexPosition(h,yl);const v=bv(s,e,n,r,xl,Sl,yl,xm);if(v){const _=new $;ii.getBarycoord(xm,xl,Sl,yl,_),a&&(v.uv=ii.getInterpolatedAttribute(a,d,m,h,_,new Dt)),l&&(v.uv1=ii.getInterpolatedAttribute(l,d,m,h,_,new Dt)),c&&(v.normal=ii.getInterpolatedAttribute(c,d,m,h,_,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:h,normal:new $,materialIndex:0};ii.getNormal(xl,Sl,yl,S.normal),v.face=S,v.barycoord=_}return v}class Zs extends kn{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const m=[],h=[],v=[],_=[];let S=0,y=0;T("z","y","x",-1,-1,r,n,e,c,l,0),T("z","y","x",1,-1,r,n,-e,c,l,1),T("x","z","y",1,1,e,r,n,a,c,2),T("x","z","y",1,-1,e,r,-n,a,c,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(m),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(_,2));function T(w,x,g,b,D,P,N,F,k,j,A){const R=P/k,H=N/j,oe=P/2,Z=N/2,ae=F/2,ce=k+1,te=j+1;let Q=0,X=0;const fe=new $;for(let ne=0;ne<te;ne++){const O=ne*H-Z;for(let re=0;re<ce;re++){const Te=re*R-oe;fe[w]=Te*b,fe[x]=O*D,fe[g]=ae,h.push(fe.x,fe.y,fe.z),fe[w]=0,fe[x]=0,fe[g]=F>0?1:-1,v.push(fe.x,fe.y,fe.z),_.push(re/k),_.push(1-ne/j),Q+=1}}for(let ne=0;ne<j;ne++)for(let O=0;O<k;O++){const re=S+O+ce*ne,Te=S+O+ce*(ne+1),ze=S+(O+1)+ce*(ne+1),Ye=S+(O+1)+ce*ne;m.push(re,Te,Ye),m.push(Te,ze,Ye),X+=6}d.addGroup(y,X,A),y+=X,S+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const a in r)e[a]=r[a]}return e}function Pv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Lv={clone:js,merge:Rn};var Dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dv,this.fragmentShader=Nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class bg extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new $,Sm=new Dt,ym=new Dt;class jn extends bg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,Sm,ym),n.subVectors(ym,Sm)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/m,n-=c.offsetY*r/h,a*=c.width/m,r*=c.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,ks=1;class Iv extends pn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(Os,ks,e,n);a.layers=this.layers,this.add(a);const l=new jn(Os,ks,e,n);l.layers=this.layers,this.add(l);const c=new jn(Os,ks,e,n);c.layers=this.layers,this.add(c);const d=new jn(Os,ks,e,n);d.layers=this.layers,this.add(d);const m=new jn(Os,ks,e,n);m.layers=this.layers,this.add(m);const h=new jn(Os,ks,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,d,m]=n;for(const h of n)this.remove(h);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,m,h,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,m),e.setRenderTarget(r,4,a),e.render(n,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,S,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Pg extends bn{constructor(e=[],n=ns,r,a,l,c,d,m,h,v){super(e,n,r,a,l,c,d,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lg extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Pg(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Zs(5,5,5),l=new ri({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Yi});l.uniforms.tEquirect.value=n;const c=new Li(a,l),d=n.minFilter;return n.minFilter===es&&(n.minFilter=Mn),new Iv(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class jo extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const x=n.getJointPose(w,r),g=this._getHandJoint(h,w);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],S=v.position.distanceTo(_.position),y=.02,T=.005;h.inputState.pinching&&S>y+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&S<=y-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return d!==null&&(d.visible=a!==null),m!==null&&(m.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new jo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Mm extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Fv extends bn{constructor(e=null,n=1,r=1,a,l,c,d,m,h=hn,v=hn,_,S){super(null,c,d,m,h,v,a,l,_,S),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nf=new $,Ov=new $,kv=new ft;class Zr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=nf.subVectors(r,n).cross(Ov.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(nf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||kv.getNormalMatrix(e),a=this.coplanarPoint(nf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new ea,Bv=new Dt(.5,.5),wl=new $;class Md{constructor(e=new Zr,n=new Zr,r=new Zr,a=new Zr,l=new Zr,c=new Zr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ai,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],m=l[2],h=l[3],v=l[4],_=l[5],S=l[6],y=l[7],T=l[8],w=l[9],x=l[10],g=l[11],b=l[12],D=l[13],P=l[14],N=l[15];if(a[0].setComponents(h-c,y-v,g-T,N-b).normalize(),a[1].setComponents(h+c,y+v,g+T,N+b).normalize(),a[2].setComponents(h+d,y+_,g+w,N+D).normalize(),a[3].setComponents(h-d,y-_,g-w,N-D).normalize(),r)a[4].setComponents(m,S,x,P).normalize(),a[5].setComponents(h-m,y-S,g-x,N-P).normalize();else if(a[4].setComponents(h-m,y-S,g-x,N-P).normalize(),n===Ai)a[5].setComponents(h+m,y+S,g+x,N+P).normalize();else if(n===Gl)a[5].setComponents(m,S,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=Bv.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dg extends Ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xl=new $,jl=new $,Em=new Bt,Ho=new Sd,Al=new ea,rf=new $,Tm=new $;class zv extends pn{constructor(e=new kn,n=new Dg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)Xl.fromBufferAttribute(n,a-1),jl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Xl.distanceTo(jl);e.setAttribute("lineDistance",new En(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(a),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;Em.copy(a).invert(),Ho.copy(e.ray).applyMatrix4(Em);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,h=this.isLineSegments?2:1,v=r.index,S=r.attributes.position;if(v!==null){const y=Math.max(0,c.start),T=Math.min(v.count,c.start+c.count);for(let w=y,x=T-1;w<x;w+=h){const g=v.getX(w),b=v.getX(w+1),D=Cl(this,e,Ho,m,g,b,w);D&&n.push(D)}if(this.isLineLoop){const w=v.getX(T-1),x=v.getX(y),g=Cl(this,e,Ho,m,w,x,T-1);g&&n.push(g)}}else{const y=Math.max(0,c.start),T=Math.min(S.count,c.start+c.count);for(let w=y,x=T-1;w<x;w+=h){const g=Cl(this,e,Ho,m,w,w+1,w);g&&n.push(g)}if(this.isLineLoop){const w=Cl(this,e,Ho,m,T-1,y,T-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Cl(s,e,n,r,a,l,c){const d=s.geometry.attributes.position;if(Xl.fromBufferAttribute(d,a),jl.fromBufferAttribute(d,l),n.distanceSqToSegment(Xl,jl,rf,Tm)>r)return;rf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(rf);if(!(h<e.near||h>e.far))return{distance:h,point:Tm.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const wm=new $,Am=new $;class Vv extends zv{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)wm.fromBufferAttribute(n,a),Am.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+wm.distanceTo(Am);e.setAttribute("lineDistance",new En(r,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ng extends Ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cm=new Bt,od=new Sd,Rl=new ea,bl=new $;class Hv extends pn{constructor(e=new kn,n=new Ng){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(a),Rl.radius+=l,e.ray.intersectsSphere(Rl)===!1)return;Cm.copy(a).invert(),od.copy(e.ray).applyMatrix4(Cm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,h=r.index,_=r.attributes.position;if(h!==null){const S=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let T=S,w=y;T<w;T++){const x=h.getX(T);bl.fromBufferAttribute(_,x),Rm(bl,x,m,a,e,n,this)}}else{const S=Math.max(0,c.start),y=Math.min(_.count,c.start+c.count);for(let T=S,w=y;T<w;T++)bl.fromBufferAttribute(_,T),Rm(bl,T,m,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Rm(s,e,n,r,a,l,c){const d=od.distanceSqToPoint(s);if(d<n){const m=new $;od.closestPointToPoint(s,m),m.applyMatrix4(r);const h=a.ray.origin.distanceTo(m);if(h<a.near||h>a.far)return;l.push({distance:h,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Zo extends bn{constructor(e,n,r=Pi,a,l,c,d=hn,m=hn,h,v=Zi,_=1){if(v!==Zi&&v!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:n,depth:_};super(S,a,l,c,d,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Gv extends Zo{constructor(e,n=Pi,r=ns,a,l,c=hn,d=hn,m,h=Zi){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,n,r,a,l,c,d,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ig extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Pl=new $,Ll=new $,sf=new $,Dl=new ii;class Wv extends kn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const a=Math.pow(10,4),l=Math.cos(zl*n),c=e.getIndex(),d=e.getAttribute("position"),m=c?c.count:d.count,h=[0,0,0],v=["a","b","c"],_=new Array(3),S={},y=[];for(let T=0;T<m;T+=3){c?(h[0]=c.getX(T),h[1]=c.getX(T+1),h[2]=c.getX(T+2)):(h[0]=T,h[1]=T+1,h[2]=T+2);const{a:w,b:x,c:g}=Dl;if(w.fromBufferAttribute(d,h[0]),x.fromBufferAttribute(d,h[1]),g.fromBufferAttribute(d,h[2]),Dl.getNormal(sf),_[0]=`${Math.round(w.x*a)},${Math.round(w.y*a)},${Math.round(w.z*a)}`,_[1]=`${Math.round(x.x*a)},${Math.round(x.y*a)},${Math.round(x.z*a)}`,_[2]=`${Math.round(g.x*a)},${Math.round(g.y*a)},${Math.round(g.z*a)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let b=0;b<3;b++){const D=(b+1)%3,P=_[b],N=_[D],F=Dl[v[b]],k=Dl[v[D]],j=`${P}_${N}`,A=`${N}_${P}`;A in S&&S[A]?(sf.dot(S[A].normal)<=l&&(y.push(F.x,F.y,F.z),y.push(k.x,k.y,k.z)),S[A]=null):j in S||(S[j]={index0:h[b],index1:h[D],normal:sf.clone()})}}for(const T in S)if(S[T]){const{index0:w,index1:x}=S[T];Pl.fromBufferAttribute(d,w),Ll.fromBufferAttribute(d,x),y.push(Pl.x,Pl.y,Pl.z),y.push(Ll.x,Ll.y,Ll.z)}this.setAttribute("position",new En(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yl extends kn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,d=Math.floor(r),m=Math.floor(a),h=d+1,v=m+1,_=e/d,S=n/m,y=[],T=[],w=[],x=[];for(let g=0;g<v;g++){const b=g*S-c;for(let D=0;D<h;D++){const P=D*_-l;T.push(P,-b,0),w.push(0,0,1),x.push(D/d),x.push(1-g/m)}}for(let g=0;g<m;g++)for(let b=0;b<d;b++){const D=b+h*g,P=b+h*(g+1),N=b+1+h*(g+1),F=b+1+h*g;y.push(D,P,F),y.push(P,N,F)}this.setIndex(y),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(w,3)),this.setAttribute("uv",new En(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ed extends kn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(c+d,Math.PI);let h=0;const v=[],_=new $,S=new $,y=[],T=[],w=[],x=[];for(let g=0;g<=r;g++){const b=[],D=g/r;let P=0;g===0&&c===0?P=.5/n:g===r&&m===Math.PI&&(P=-.5/n);for(let N=0;N<=n;N++){const F=N/n;_.x=-e*Math.cos(a+F*l)*Math.sin(c+D*d),_.y=e*Math.cos(c+D*d),_.z=e*Math.sin(a+F*l)*Math.sin(c+D*d),T.push(_.x,_.y,_.z),S.copy(_).normalize(),w.push(S.x,S.y,S.z),x.push(F+P,1-D),b.push(h++)}v.push(b)}for(let g=0;g<r;g++)for(let b=0;b<n;b++){const D=v[g][b+1],P=v[g][b],N=v[g+1][b],F=v[g+1][b+1];(g!==0||c>0)&&y.push(D,P,F),(g!==r-1||m<Math.PI)&&y.push(P,N,F)}this.setIndex(y),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(w,3)),this.setAttribute("uv",new En(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xv extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jv extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qv extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ug extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const of=new Bt,bm=new $,Pm=new $;class Yv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Md,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(bm),Pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pm),n.updateMatrixWorld(),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $v extends Yv{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kv extends Ug{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new $v}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Fg extends bg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+n,m=a-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Zv extends Ug{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qv extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Lm(s,e,n,r){const a=Jv(r);switch(n){case xg:return s*e;case yg:return s*e/a.components*a.byteLength;case pd:return s*e/a.components*a.byteLength;case Ws:return s*e*2/a.components*a.byteLength;case md:return s*e*2/a.components*a.byteLength;case Sg:return s*e*3/a.components*a.byteLength;case mi:return s*e*4/a.components*a.byteLength;case gd:return s*e*4/a.components*a.byteLength;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:case Pf:return Math.max(s,16)*Math.max(e,8)/4;case Cf:case bf:return Math.max(s,8)*Math.max(e,8)/2;case Lf:case Df:case If:case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nf:case Ff:case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qf:case Jf:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case td:case nd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case id:case rd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Jv(s){switch(s){case qn:case mg:return{byteLength:1,components:1};case Yo:case gg:case Ki:return{byteLength:2,components:1};case dd:case hd:return{byteLength:2,components:4};case Pi:case fd:case wi:return{byteLength:4,components:1};case _g:case vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Og(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function ex(s){const e=new WeakMap;function n(d,m){const h=d.array,v=d.usage,_=h.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,h,v),d.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:S,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,h){const v=m.array,_=m.updateRanges;if(s.bindBuffer(h,d),_.length===0)s.bufferSubData(h,0,v);else{_.sort((y,T)=>y.start-T.start);let S=0;for(let y=1;y<_.length;y++){const T=_[S],w=_[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,_[S]=w)}_.length=S+1;for(let y=0,T=_.length;y<T;y++){const w=_[y];s.bufferSubData(h,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function c(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:a,remove:l,update:c}}var tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
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
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
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
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ux=`#ifdef USE_BATCHING
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
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,px=`#ifdef USE_IRIDESCENCE
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
#endif`,mx=`#ifdef USE_BUMPMAP
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tx=`#define PI 3.141592653589793
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
} // validated`,wx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ax=`vec3 transformedNormal = objectNormal;
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
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hx=`#ifdef USE_GRADIENTMAP
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
}`,Gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
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
#endif`,Jx=`uniform sampler2D dfgLUT;
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
}`,eS=`
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cS=`#if defined( USE_POINTS_UV )
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
#endif`,fS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`#ifdef USE_MORPHTARGETS
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
#endif`,_S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ES=`#ifdef USE_NORMALMAP
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
#endif`,TS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,US=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BS=`float getShadowMask() {
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
}`,zS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VS=`#ifdef USE_SKINNING
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
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`#include <common>
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
}`,ay=`#if DEPTH_PACKING == 3200
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
}`,ly=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
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
}`,hy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,Sy=`#define NORMAL
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
}`,yy=`#define NORMAL
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
}`,My=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,Ty=`#define STANDARD
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
}`,wy=`#define STANDARD
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
}`,Ay=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Ry=`uniform float size;
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
}`,by=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Dy=`uniform float rotation;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:tx,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:rx,alphatest_fragment:sx,alphatest_pars_fragment:ox,aomap_fragment:ax,aomap_pars_fragment:lx,batching_pars_vertex:ux,batching_vertex:cx,begin_vertex:fx,beginnormal_vertex:dx,bsdfs:hx,iridescence_fragment:px,bumpmap_pars_fragment:mx,clipping_planes_fragment:gx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:vx,clipping_planes_vertex:xx,color_fragment:Sx,color_pars_fragment:yx,color_pars_vertex:Mx,color_vertex:Ex,common:Tx,cube_uv_reflection_fragment:wx,defaultnormal_vertex:Ax,displacementmap_pars_vertex:Cx,displacementmap_vertex:Rx,emissivemap_fragment:bx,emissivemap_pars_fragment:Px,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Nx,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Ux,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:qx,envmap_vertex:Ox,fog_vertex:kx,fog_pars_vertex:Bx,fog_fragment:zx,fog_pars_fragment:Vx,gradientmap_pars_fragment:Hx,lightmap_pars_fragment:Gx,lights_lambert_fragment:Wx,lights_lambert_pars_fragment:Xx,lights_pars_begin:jx,lights_toon_fragment:Yx,lights_toon_pars_fragment:$x,lights_phong_fragment:Kx,lights_phong_pars_fragment:Zx,lights_physical_fragment:Qx,lights_physical_pars_fragment:Jx,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:oS,map_fragment:aS,map_pars_fragment:lS,map_particle_fragment:uS,map_particle_pars_fragment:cS,metalnessmap_fragment:fS,metalnessmap_pars_fragment:dS,morphinstance_vertex:hS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:gS,morphtarget_vertex:_S,normal_fragment_begin:vS,normal_fragment_maps:xS,normal_pars_fragment:SS,normal_pars_vertex:yS,normal_vertex:MS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:TS,clearcoat_normal_fragment_maps:wS,clearcoat_pars_fragment:AS,iridescence_pars_fragment:CS,opaque_fragment:RS,packing:bS,premultiplied_alpha_fragment:PS,project_vertex:LS,dithering_fragment:DS,dithering_pars_fragment:NS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:US,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:OS,shadowmap_vertex:kS,shadowmask_pars_fragment:BS,skinbase_vertex:zS,skinning_pars_vertex:VS,skinning_vertex:HS,skinnormal_vertex:GS,specularmap_fragment:WS,specularmap_pars_fragment:XS,tonemapping_fragment:jS,tonemapping_pars_fragment:qS,transmission_fragment:YS,transmission_pars_fragment:$S,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:QS,worldpos_vertex:JS,background_vert:ey,background_frag:ty,backgroundCube_vert:ny,backgroundCube_frag:iy,cube_vert:ry,cube_frag:sy,depth_vert:oy,depth_frag:ay,distance_vert:ly,distance_frag:uy,equirect_vert:cy,equirect_frag:fy,linedashed_vert:dy,linedashed_frag:hy,meshbasic_vert:py,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:_y,meshmatcap_vert:vy,meshmatcap_frag:xy,meshnormal_vert:Sy,meshnormal_frag:yy,meshphong_vert:My,meshphong_frag:Ey,meshphysical_vert:Ty,meshphysical_frag:wy,meshtoon_vert:Ay,meshtoon_frag:Cy,points_vert:Ry,points_frag:by,shadow_vert:Py,shadow_frag:Ly,sprite_vert:Dy,sprite_frag:Ny},Ie={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ti={basic:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Rn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Rn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Pt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Rn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Rn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Rn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Rn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Rn([Ie.common,Ie.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Rn([Ie.lights,Ie.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ti.physical={uniforms:Rn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Nl={r:0,b:0,g:0},$r=new Qi,Iy=new Bt;function Uy(s,e,n,r,a,l,c){const d=new Pt(0);let m=l===!0?0:1,h,v,_=null,S=0,y=null;function T(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function w(D){let P=!1;const N=T(D);N===null?g(d,m):N&&N.isColor&&(g(N,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(D,P){const N=T(P);N&&(N.isCubeTexture||N.mapping===ql)?(v===void 0&&(v=new Li(new Zs(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:js(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,k,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),$r.copy(P.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),v.material.uniforms.envMap.value=N,v.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler($r)),v.material.toneMapped=wt.getTransfer(N.colorSpace)!==It,(_!==N||S!==N.version||y!==s.toneMapping)&&(v.material.needsUpdate=!0,_=N,S=N.version,y=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Li(new Yl(2,2),new ri({name:"BackgroundMaterial",uniforms:js(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=wt.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||S!==N.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,_=N,S=N.version,y=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function g(D,P){D.getRGB(Nl,Rg(s)),r.buffers.color.setClear(Nl.r,Nl.g,Nl.b,P,c)}function b(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),m=P,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,g(d,m)},render:w,addToRenderList:x,dispose:b}}function Fy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=S(null);let l=a,c=!1;function d(R,H,oe,Z,ae){let ce=!1;const te=_(Z,oe,H);l!==te&&(l=te,h(l.object)),ce=y(R,Z,oe,ae),ce&&T(R,Z,oe,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,P(R,H,oe,Z),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function m(){return s.createVertexArray()}function h(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function _(R,H,oe){const Z=oe.wireframe===!0;let ae=r[R.id];ae===void 0&&(ae={},r[R.id]=ae);let ce=ae[H.id];ce===void 0&&(ce={},ae[H.id]=ce);let te=ce[Z];return te===void 0&&(te=S(m()),ce[Z]=te),te}function S(R){const H=[],oe=[],Z=[];for(let ae=0;ae<n;ae++)H[ae]=0,oe[ae]=0,Z[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,H,oe,Z){const ae=l.attributes,ce=H.attributes;let te=0;const Q=oe.getAttributes();for(const X in Q)if(Q[X].location>=0){const ne=ae[X];let O=ce[X];if(O===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),ne===void 0||ne.attribute!==O||O&&ne.data!==O.data)return!0;te++}return l.attributesNum!==te||l.index!==Z}function T(R,H,oe,Z){const ae={},ce=H.attributes;let te=0;const Q=oe.getAttributes();for(const X in Q)if(Q[X].location>=0){let ne=ce[X];ne===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const O={};O.attribute=ne,ne&&ne.data&&(O.data=ne.data),ae[X]=O,te++}l.attributes=ae,l.attributesNum=te,l.index=Z}function w(){const R=l.newAttributes;for(let H=0,oe=R.length;H<oe;H++)R[H]=0}function x(R){g(R,0)}function g(R,H){const oe=l.newAttributes,Z=l.enabledAttributes,ae=l.attributeDivisors;oe[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),ae[R]!==H&&(s.vertexAttribDivisor(R,H),ae[R]=H)}function b(){const R=l.newAttributes,H=l.enabledAttributes;for(let oe=0,Z=H.length;oe<Z;oe++)H[oe]!==R[oe]&&(s.disableVertexAttribArray(oe),H[oe]=0)}function D(R,H,oe,Z,ae,ce,te){te===!0?s.vertexAttribIPointer(R,H,oe,ae,ce):s.vertexAttribPointer(R,H,oe,Z,ae,ce)}function P(R,H,oe,Z){w();const ae=Z.attributes,ce=oe.getAttributes(),te=H.defaultAttributeValues;for(const Q in ce){const X=ce[Q];if(X.location>=0){let fe=ae[Q];if(fe===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const ne=fe.normalized,O=fe.itemSize,re=e.get(fe);if(re===void 0)continue;const Te=re.buffer,ze=re.type,Ye=re.bytesPerElement,J=ze===s.INT||ze===s.UNSIGNED_INT||fe.gpuType===fd;if(fe.isInterleavedBufferAttribute){const ue=fe.data,ve=ue.stride,Ue=fe.offset;if(ue.isInstancedInterleavedBuffer){for(let be=0;be<X.locationSize;be++)g(X.location+be,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<X.locationSize;be++)x(X.location+be);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let be=0;be<X.locationSize;be++)D(X.location+be,O/X.locationSize,ze,ne,ve*Ye,(Ue+O/X.locationSize*be)*Ye,J)}else{if(fe.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)g(X.location+ue,fe.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ue=0;ue<X.locationSize;ue++)x(X.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ue=0;ue<X.locationSize;ue++)D(X.location+ue,O/X.locationSize,ze,ne,O*Ye,O/X.locationSize*ue*Ye,J)}}else if(te!==void 0){const ne=te[Q];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(X.location,ne);break;case 3:s.vertexAttrib3fv(X.location,ne);break;case 4:s.vertexAttrib4fv(X.location,ne);break;default:s.vertexAttrib1fv(X.location,ne)}}}}b()}function N(){j();for(const R in r){const H=r[R];for(const oe in H){const Z=H[oe];for(const ae in Z)v(Z[ae].object),delete Z[ae];delete H[oe]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const oe in H){const Z=H[oe];for(const ae in Z)v(Z[ae].object),delete Z[ae];delete H[oe]}delete r[R.id]}function k(R){for(const H in r){const oe=r[H];if(oe[R.id]===void 0)continue;const Z=oe[R.id];for(const ae in Z)v(Z[ae].object),delete Z[ae];delete oe[R.id]}}function j(){A(),c=!0,l!==a&&(l=a,h(l.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:x,disableUnusedAttributes:b}}function Oy(s,e,n){let r;function a(h){r=h}function l(h,v){s.drawArrays(r,h,v),n.update(v,r,1)}function c(h,v,_){_!==0&&(s.drawArraysInstanced(r,h,v,_),n.update(v,r,_))}function d(h,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,v,0,_);let y=0;for(let T=0;T<_;T++)y+=v[T];n.update(y,r,1)}function m(h,v,_,S){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<h.length;T++)c(h[T],v[T],S[T]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,v,0,S,0,_);let T=0;for(let w=0;w<_;w++)T+=v[w]*S[w];n.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ky(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(k){return!(k!==mi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const j=k===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==qn&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==wi&&!j)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const v=m(h);v!==h&&(at("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=n.logarithmicDepthBuffer===!0,S=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:P,maxSamples:N,samples:F}}function By(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Zr,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const y=_.length!==0||S||r!==0||a;return a=S,r=_.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,S){n=v(_,S,0)},this.setState=function(_,S,y){const T=_.clippingPlanes,w=_.clipIntersection,x=_.clipShadows,g=s.get(_);if(!a||T===null||T.length===0||l&&!x)l?v(null):h();else{const b=l?0:r,D=b*4;let P=g.clippingState||null;m.value=P,P=v(T,S,D,y);for(let N=0;N!==D;++N)P[N]=n[N];g.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,y,T){const w=_!==null?_.length:0;let x=null;if(w!==0){if(x=m.value,T!==!0||x===null){const g=y+w*4,b=S.matrixWorldInverse;d.getNormalMatrix(b),(x===null||x.length<g)&&(x=new Float32Array(g));for(let D=0,P=y;D!==w;++D,P+=4)c.copy(_[D]).applyMatrix4(b,d),c.normal.toArray(x,P),x[P+3]=c.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function zy(s){let e=new WeakMap;function n(c,d){return d===Ef?c.mapping=ns:d===Tf&&(c.mapping=Gs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===Ef||d===Tf)if(e.has(c)){const m=e.get(c).texture;return n(m,c.mapping)}else{const m=c.image;if(m&&m.height>0){const h=new Lg(m.height);return h.fromEquirectangularTexture(s,c),e.set(c,h),c.addEventListener("dispose",a),n(h.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ar=4,Dm=[.125,.215,.35,.446,.526,.582],Jr=20,Vy=256,Go=new Fg,Nm=new Pt;let af=null,lf=0,uf=0,cf=!1;const Hy=new $;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,a=100,l={}){const{size:c=256,position:d=Hy}=l;af=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,a,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(af,lf,uf),this._renderer.xr.enabled=cf,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),af=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ki,format:mi,colorSpace:Xs,depthBuffer:!1},a=Um(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gy(l)),this._blurMaterial=Xy(l,e,n),this._ggxMaterial=Wy(l,e,n)}return a}_compileMaterial(e){const n=new Li(new kn,e);this._renderer.compile(n,Go)}_sceneToCubeUV(e,n,r,a,l){const m=new jn(90,1,n,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(Nm),_.toneMapping=Ci,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Zs,new yd({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let g=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,g=!0):(x.color.copy(Nm),g=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(m.up.set(0,h[D],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[D],l.y,l.z)):P===1?(m.up.set(0,0,h[D]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[D],l.z)):(m.up.set(0,h[D],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[D]));const N=this._cubeSize;Bs(a,P*N,D>2?N:0,N,N),_.setRenderTarget(a),g&&_.render(w,m),_.render(e,m)}_.toneMapping=y,_.autoClear=S,e.background=b}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ns||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const m=this._cubeSize;Bs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(c,Go)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const m=c.uniforms,h=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),S=0+h*1.25,y=_*S,{_lodMax:T}=this,w=this._sizeLods[r],x=3*w*(r>T-Ar?r-T+Ar:0),g=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-n,Bs(l,x,g,3*w,2*w),a.setRenderTarget(l),a.render(d,Go),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=T-r,Bs(e,x,g,3*w,2*w),a.setRenderTarget(e),a.render(d,Go)}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,d){const m=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[a];_.material=h;const S=h.uniforms,y=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Jr-1),w=l/T,x=isFinite(l)?1+Math.floor(v*w):Jr;x>Jr&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Jr}`);const g=[];let b=0;for(let k=0;k<Jr;++k){const j=k/w,A=Math.exp(-j*j/2);g.push(A),k===0?b+=A:k<x&&(b+=2*A)}for(let k=0;k<g.length;k++)g[k]=g[k]/b;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=c==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=T,S.mipInt.value=D-r;const P=this._sizeLods[a],N=3*P*(a>D-Ar?a-D+Ar:0),F=4*(this._cubeSize-P);Bs(n,N,F,3*P,2*P),m.setRenderTarget(n),m.render(_,Go)}}function Gy(s){const e=[],n=[],r=[];let a=s;const l=s-Ar+1+Dm.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);e.push(d);let m=1/d;c>s-Ar?m=Dm[c-s+Ar-1]:c===0&&(m=0),n.push(m);const h=1/(d-2),v=-h,_=1+h,S=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,T=6,w=3,x=2,g=1,b=new Float32Array(w*T*y),D=new Float32Array(x*T*y),P=new Float32Array(g*T*y);for(let F=0;F<y;F++){const k=F%3*2/3-1,j=F>2?0:-1,A=[k,j,0,k+2/3,j,0,k+2/3,j+1,0,k,j,0,k+2/3,j+1,0,k,j+1,0];b.set(A,w*T*F),D.set(S,x*T*F);const R=[F,F,F,F,F,F];P.set(R,g*T*F)}const N=new kn;N.setAttribute("position",new bi(b,w)),N.setAttribute("uv",new bi(D,x)),N.setAttribute("faceIndex",new bi(P,g)),r.push(new Li(N,null)),a>Ar&&a--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Um(s,e,n){const r=new Ri(s,e,n);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bs(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Wy(s,e,n){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Xy(s,e,n){const r=new Float32Array(Jr),a=new $(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Fm(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Om(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

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
	`}function jy(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,h=m===Ef||m===Tf,v=m===ns||m===Gs;if(h||v){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return n===null&&(n=new Im(s)),_=h?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return h&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new Im(s)),_=h?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function a(d){let m=0;const h=6;for(let v=0;v<h;v++)d[v]!==void 0&&m++;return m===h}function l(d){const m=d.target;m.removeEventListener("dispose",l);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function qy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ko("WebGLRenderer: "+r+" extension not supported."),a}}}function Yy(s,e,n,r){const a={},l=new WeakMap;function c(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",c),delete a[S.id];const y=l.get(S);y&&(e.remove(y),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function d(_,S){return a[S.id]===!0||(S.addEventListener("dispose",c),a[S.id]=!0,n.memory.geometries++),S}function m(_){const S=_.attributes;for(const y in S)e.update(S[y],s.ARRAY_BUFFER)}function h(_){const S=[],y=_.index,T=_.attributes.position;let w=0;if(y!==null){const b=y.array;w=y.version;for(let D=0,P=b.length;D<P;D+=3){const N=b[D+0],F=b[D+1],k=b[D+2];S.push(N,F,F,k,k,N)}}else if(T!==void 0){const b=T.array;w=T.version;for(let D=0,P=b.length/3-1;D<P;D+=3){const N=D+0,F=D+1,k=D+2;S.push(N,F,F,k,k,N)}}else return;const x=new(Mg(S)?Cg:Ag)(S,1);x.version=w;const g=l.get(_);g&&e.remove(g),l.set(_,x)}function v(_){const S=l.get(_);if(S){const y=_.index;y!==null&&S.version<y.version&&h(_)}else h(_);return l.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function $y(s,e,n){let r;function a(S){r=S}let l,c;function d(S){l=S.type,c=S.bytesPerElement}function m(S,y){s.drawElements(r,y,l,S*c),n.update(y,r,1)}function h(S,y,T){T!==0&&(s.drawElementsInstanced(r,y,l,S*c,T),n.update(y,r,T))}function v(S,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,S,0,T);let x=0;for(let g=0;g<T;g++)x+=y[g];n.update(x,r,1)}function _(S,y,T,w){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)h(S[g]/c,y[g],w[g]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,l,S,0,w,0,T);let g=0;for(let b=0;b<T;b++)g+=y[b]*w[b];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function Ky(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Rt("WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Zy(s,e,n){const r=new WeakMap,a=new $t;function l(c,d,m){const h=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let A=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",A)};S!==void 0&&S.texture.dispose();const y=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],g=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let D=0;y===!0&&(D=1),T===!0&&(D=2),w===!0&&(D=3);let P=d.attributes.position.count*D,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*N*4*_),k=new Eg(F,P,N,_);k.type=wi,k.needsUpdate=!0;const j=D*4;for(let R=0;R<_;R++){const H=x[R],oe=g[R],Z=b[R],ae=P*N*4*R;for(let ce=0;ce<H.count;ce++){const te=ce*j;y===!0&&(a.fromBufferAttribute(H,ce),F[ae+te+0]=a.x,F[ae+te+1]=a.y,F[ae+te+2]=a.z,F[ae+te+3]=0),T===!0&&(a.fromBufferAttribute(oe,ce),F[ae+te+4]=a.x,F[ae+te+5]=a.y,F[ae+te+6]=a.z,F[ae+te+7]=0),w===!0&&(a.fromBufferAttribute(Z,ce),F[ae+te+8]=a.x,F[ae+te+9]=a.y,F[ae+te+10]=a.z,F[ae+te+11]=Z.itemSize===4?a.w:1)}}S={count:_,texture:k,size:new Dt(P,N)},r.set(d,S),d.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let y=0;for(let w=0;w<h.length;w++)y+=h[w];const T=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function Qy(s,e,n,r){let a=new WeakMap;function l(m){const h=r.render.frame,v=m.geometry,_=e.get(m,v);if(a.get(_)!==h&&(e.update(_),a.set(_,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),a.get(m)!==h&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),a.set(m,h))),m.isSkinnedMesh){const S=m.skeleton;a.get(S)!==h&&(S.update(),a.set(S,h))}return _}function c(){a=new WeakMap}function d(m){const h=m.target;h.removeEventListener("dispose",d),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:l,dispose:c}}const Jy={[ag]:"LINEAR_TONE_MAPPING",[lg]:"REINHARD_TONE_MAPPING",[ug]:"CINEON_TONE_MAPPING",[cg]:"ACES_FILMIC_TONE_MAPPING",[dg]:"AGX_TONE_MAPPING",[hg]:"NEUTRAL_TONE_MAPPING",[fg]:"CUSTOM_TONE_MAPPING"};function eM(s,e,n,r,a){const l=new Ri(e,n,{type:s,depthBuffer:r,stencilBuffer:a}),c=new Ri(e,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),d=new kn;d.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new En([0,2,0,0,2,0],2));const m=new Xv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Li(d,m),v=new Fg(-1,1,1,-1,0,1);let _=null,S=null,y=!1,T,w=null,x=[],g=!1;this.setSize=function(b,D){l.setSize(b,D),c.setSize(b,D);for(let P=0;P<x.length;P++){const N=x[P];N.setSize&&N.setSize(b,D)}},this.setEffects=function(b){x=b,g=x.length>0&&x[0].isRenderPass===!0;const D=l.width,P=l.height;for(let N=0;N<x.length;N++){const F=x[N];F.setSize&&F.setSize(D,P)}},this.begin=function(b,D){if(y||b.toneMapping===Ci&&x.length===0)return!1;if(w=D,D!==null){const P=D.width,N=D.height;(l.width!==P||l.height!==N)&&this.setSize(P,N)}return g===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=Ci,!0},this.hasRenderPass=function(){return g},this.end=function(b,D){b.toneMapping=T,y=!0;let P=l,N=c;for(let F=0;F<x.length;F++){const k=x[F];if(k.enabled!==!1&&(k.render(b,N,P,D),k.needsSwap!==!1)){const j=P;P=N,N=j}}if(_!==b.outputColorSpace||S!==b.toneMapping){_=b.outputColorSpace,S=b.toneMapping,m.defines={},wt.getTransfer(_)===It&&(m.defines.SRGB_TRANSFER="");const F=Jy[S];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(w),b.render(h,v),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),c.dispose(),d.dispose(),m.dispose()}}const kg=new bn,ad=new Zo(1,1),Bg=new Eg,zg=new vv,Vg=new Pg,km=[],Bm=[],zm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=km[a];if(l===void 0&&(l=new Float32Array(a),km[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(l,d)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function rn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Kl(s,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function tM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2fv(this.addr,e),rn(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;s.uniform3fv(this.addr,e),rn(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4fv(this.addr,e),rn(n,e)}}function sM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),rn(n,r)}}function oM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;Vm.set(r),s.uniformMatrix3fv(this.addr,!1,Vm),rn(n,r)}}function aM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(nn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,r))return;zm.set(r),s.uniformMatrix4fv(this.addr,!1,zm),rn(n,r)}}function lM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2iv(this.addr,e),rn(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3iv(this.addr,e),rn(n,e)}}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4iv(this.addr,e),rn(n,e)}}function dM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;s.uniform2uiv(this.addr,e),rn(n,e)}}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;s.uniform3uiv(this.addr,e),rn(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;s.uniform4uiv(this.addr,e),rn(n,e)}}function gM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(ad.compareFunction=n.isReversedDepthBuffer()?vd:_d,l=ad):l=kg,n.setTexture2D(e||l,a)}function _M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||zg,a)}function vM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Vg,a)}function xM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Bg,a)}function SM(s){switch(s){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return uM;case 35668:case 35672:return cM;case 35669:case 35673:return fM;case 5125:return dM;case 36294:return hM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}function yM(s,e){s.uniform1fv(this.addr,e)}function MM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function EM(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function TM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function wM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function AM(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function CM(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function RM(s,e){s.uniform1iv(this.addr,e)}function bM(s,e){s.uniform2iv(this.addr,e)}function PM(s,e){s.uniform3iv(this.addr,e)}function LM(s,e){s.uniform4iv(this.addr,e)}function DM(s,e){s.uniform1uiv(this.addr,e)}function NM(s,e){s.uniform2uiv(this.addr,e)}function IM(s,e){s.uniform3uiv(this.addr,e)}function UM(s,e){s.uniform4uiv(this.addr,e)}function FM(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=ad:c=kg;for(let d=0;d!==a;++d)n.setTexture2D(e[d]||c,l[d])}function OM(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||zg,l[c])}function kM(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Vg,l[c])}function BM(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Bg,l[c])}function zM(s){switch(s){case 5126:return yM;case 35664:return MM;case 35665:return EM;case 35666:return TM;case 35674:return wM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return bM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return NM;case 36295:return IM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return BM}}class VM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=SM(n.type)}}class HM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zM(n.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Gm(s,e){s.seq.push(e),s.map[e.id]=e}function WM(s,e,n){const r=s.name,a=r.length;for(ff.lastIndex=0;;){const l=ff.exec(r),c=ff.lastIndex;let d=l[1];const m=l[2]==="]",h=l[3];if(m&&(d=d|0),h===void 0||h==="["&&c+2===a){Gm(n,h===void 0?new VM(d,s,e):new HM(d,s,e));break}else{let _=n.map[d];_===void 0&&(_=new GM(d),Gm(n,_)),n=_}}}class Vl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(n,c),m=e.getUniformLocation(n,d.name);WM(d,m,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const d=n[l],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Wm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const XM=37297;let jM=0;function qM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Xm=new ft;function YM(s){wt._getMatrix(Xm,wt.workingColorSpace,s);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+qM(s.getShaderSource(e),d)}else return l}function $M(s,e){const n=YM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const KM={[ag]:"Linear",[lg]:"Reinhard",[ug]:"Cineon",[cg]:"ACESFilmic",[dg]:"AgX",[hg]:"Neutral",[fg]:"Custom"};function ZM(s,e){const n=KM[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Il=new $;function QM(){wt.getLuminanceCoefficients(Il);const s=Il.x.toFixed(4),e=Il.y.toFixed(4),n=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function eE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function tE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function qo(s){return s!==""}function qm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(s){return s.replace(nE,rE)}const iE=new Map;function rE(s,e){let n=pt[e];if(n===void 0){const r=iE.get(e);if(r!==void 0)n=pt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ld(n)}const sE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(sE,oE)}function oE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const aE={[Ul]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function lE(s){return aE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uE={[ns]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[ql]:"ENVMAP_TYPE_CUBE_UV"};function cE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":uE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const fE={[Gs]:"ENVMAP_MODE_REFRACTION"};function dE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":fE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hE={[og]:"ENVMAP_BLENDING_MULTIPLY",[Q_]:"ENVMAP_BLENDING_MIX",[J_]:"ENVMAP_BLENDING_ADD"};function pE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hE[s.combine]||"ENVMAP_BLENDING_NONE"}function mE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gE(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const m=lE(n),h=cE(n),v=dE(n),_=pE(n),S=mE(n),y=JM(n),T=eE(l),w=a.createProgram();let x,g,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(qo).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(qo).join(`
`),g.length>0&&(g+=`
`)):(x=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),g=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?pt.tonemapping_pars_fragment:"",n.toneMapping!==Ci?ZM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,$M("linearToOutputTexel",n.outputColorSpace),QM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qo).join(`
`)),c=ld(c),c=qm(c,n),c=Ym(c,n),d=ld(d),d=qm(d,n),d=Ym(d,n),c=$m(c),d=$m(d),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=b+x+c,P=b+g+d,N=Wm(a,a.VERTEX_SHADER,D),F=Wm(a,a.FRAGMENT_SHADER,P);a.attachShader(w,N),a.attachShader(w,F),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function k(H){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(w)||"",Z=a.getShaderInfoLog(N)||"",ae=a.getShaderInfoLog(F)||"",ce=oe.trim(),te=Z.trim(),Q=ae.trim();let X=!0,fe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,N,F);else{const ne=jm(a,N,"vertex"),O=jm(a,F,"fragment");Rt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ce+`
`+ne+`
`+O)}else ce!==""?at("WebGLProgram: Program Info Log:",ce):(te===""||Q==="")&&(fe=!1);fe&&(H.diagnostics={runnable:X,programLog:ce,vertexShader:{log:te,prefix:x},fragmentShader:{log:Q,prefix:g}})}a.deleteShader(N),a.deleteShader(F),j=new Vl(a,w),A=tE(a,w)}let j;this.getUniforms=function(){return j===void 0&&k(this),j};let A;this.getAttributes=function(){return A===void 0&&k(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,XM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=F,this}let _E=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xE(e),n.set(e,r)),r}}class xE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function SE(s,e,n,r,a,l,c){const d=new Tg,m=new vE,h=new Set,v=[],_=new Map,S=a.logarithmicDepthBuffer;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return h.add(A),A===0?"uv":`uv${A}`}function x(A,R,H,oe,Z){const ae=oe.fog,ce=Z.geometry,te=A.isMeshStandardMaterial?oe.environment:null,Q=(A.isMeshStandardMaterial?n:e).get(A.envMap||te),X=Q&&Q.mapping===ql?Q.image.height:null,fe=T[A.type];A.precision!==null&&(y=a.getMaxPrecision(A.precision),y!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const ne=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=ne!==void 0?ne.length:0;let re=0;ce.morphAttributes.position!==void 0&&(re=1),ce.morphAttributes.normal!==void 0&&(re=2),ce.morphAttributes.color!==void 0&&(re=3);let Te,ze,Ye,J;if(fe){const Mt=Ti[fe];Te=Mt.vertexShader,ze=Mt.fragmentShader}else Te=A.vertexShader,ze=A.fragmentShader,m.update(A),Ye=m.getVertexShaderID(A),J=m.getFragmentShaderID(A);const ue=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Ue=Z.isInstancedMesh===!0,be=Z.isBatchedMesh===!0,dt=!!A.map,Ht=!!A.matcap,ct=!!Q,xt=!!A.aoMap,yt=!!A.lightMap,ot=!!A.bumpMap,Ft=!!A.normalMap,I=!!A.displacementMap,gt=!!A.emissiveMap,Ze=!!A.metalnessMap,mt=!!A.roughnessMap,Be=A.anisotropy>0,L=A.clearcoat>0,M=A.dispersion>0,G=A.iridescence>0,de=A.sheen>0,pe=A.transmission>0,le=Be&&!!A.anisotropyMap,$e=L&&!!A.clearcoatMap,we=L&&!!A.clearcoatNormalMap,Ve=L&&!!A.clearcoatRoughnessMap,it=G&&!!A.iridescenceMap,ye=G&&!!A.iridescenceThicknessMap,Pe=de&&!!A.sheenColorMap,We=de&&!!A.sheenRoughnessMap,je=!!A.specularMap,Ce=!!A.specularColorMap,ut=!!A.specularIntensityMap,z=pe&&!!A.transmissionMap,De=pe&&!!A.thicknessMap,Me=!!A.gradientMap,Ne=!!A.alphaMap,xe=A.alphaTest>0,he=!!A.alphaHash,Re=!!A.extensions;let rt=Ci;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Nt={shaderID:fe,shaderType:A.type,shaderName:A.name,vertexShader:Te,fragmentShader:ze,defines:A.defines,customVertexShaderID:Ye,customFragmentShaderID:J,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:be,batchingColor:be&&Z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Z.instanceColor!==null,instancingMorph:Ue&&Z.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Xs,alphaToCoverage:!!A.alphaToCoverage,map:dt,matcap:Ht,envMap:ct,envMapMode:ct&&Q.mapping,envMapCubeUVHeight:X,aoMap:xt,lightMap:yt,bumpMap:ot,normalMap:Ft,displacementMap:I,emissiveMap:gt,normalMapObjectSpace:Ft&&A.normalMapType===iv,normalMapTangentSpace:Ft&&A.normalMapType===nv,metalnessMap:Ze,roughnessMap:mt,anisotropy:Be,anisotropyMap:le,clearcoat:L,clearcoatMap:$e,clearcoatNormalMap:we,clearcoatRoughnessMap:Ve,dispersion:M,iridescence:G,iridescenceMap:it,iridescenceThicknessMap:ye,sheen:de,sheenColorMap:Pe,sheenRoughnessMap:We,specularMap:je,specularColorMap:Ce,specularIntensityMap:ut,transmission:pe,transmissionMap:z,thicknessMap:De,gradientMap:Me,opaque:A.transparent===!1&&A.blending===zs&&A.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:he,combine:A.combine,mapUv:dt&&w(A.map.channel),aoMapUv:xt&&w(A.aoMap.channel),lightMapUv:yt&&w(A.lightMap.channel),bumpMapUv:ot&&w(A.bumpMap.channel),normalMapUv:Ft&&w(A.normalMap.channel),displacementMapUv:I&&w(A.displacementMap.channel),emissiveMapUv:gt&&w(A.emissiveMap.channel),metalnessMapUv:Ze&&w(A.metalnessMap.channel),roughnessMapUv:mt&&w(A.roughnessMap.channel),anisotropyMapUv:le&&w(A.anisotropyMap.channel),clearcoatMapUv:$e&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:We&&w(A.sheenRoughnessMap.channel),specularMapUv:je&&w(A.specularMap.channel),specularColorMapUv:Ce&&w(A.specularColorMap.channel),specularIntensityMapUv:ut&&w(A.specularIntensityMap.channel),transmissionMapUv:z&&w(A.transmissionMap.channel),thicknessMapUv:De&&w(A.thicknessMap.channel),alphaMapUv:Ne&&w(A.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ft||Be),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(dt||Ne),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ve,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:dt&&A.map.isVideoTexture===!0&&wt.getTransfer(A.map.colorSpace)===It,decodeVideoTextureEmissive:gt&&A.emissiveMap.isVideoTexture===!0&&wt.getTransfer(A.emissiveMap.colorSpace)===It,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ji,flipSided:A.side===On,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||be)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Nt.vertexUv1s=h.has(1),Nt.vertexUv2s=h.has(2),Nt.vertexUv3s=h.has(3),h.clear(),Nt}function g(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)R.push(H),R.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(b(R,A),D(R,A),R.push(s.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function b(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function D(A,R){d.disableAll(),R.instancing&&d.enable(0),R.instancingColor&&d.enable(1),R.instancingMorph&&d.enable(2),R.matcap&&d.enable(3),R.envMap&&d.enable(4),R.normalMapObjectSpace&&d.enable(5),R.normalMapTangentSpace&&d.enable(6),R.clearcoat&&d.enable(7),R.iridescence&&d.enable(8),R.alphaTest&&d.enable(9),R.vertexColors&&d.enable(10),R.vertexAlphas&&d.enable(11),R.vertexUv1s&&d.enable(12),R.vertexUv2s&&d.enable(13),R.vertexUv3s&&d.enable(14),R.vertexTangents&&d.enable(15),R.anisotropy&&d.enable(16),R.alphaHash&&d.enable(17),R.batching&&d.enable(18),R.dispersion&&d.enable(19),R.batchingColor&&d.enable(20),R.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),A.push(d.mask)}function P(A){const R=T[A.type];let H;if(R){const oe=Ti[R];H=Lv.clone(oe.uniforms)}else H=A.uniforms;return H}function N(A,R){let H=_.get(R);return H!==void 0?++H.usedTimes:(H=new gE(s,R,A,l),v.push(H),_.set(R,H)),H}function F(A){if(--A.usedTimes===0){const R=v.indexOf(A);v[R]=v[v.length-1],v.pop(),_.delete(A.cacheKey),A.destroy()}}function k(A){m.remove(A)}function j(){m.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:P,acquireProgram:N,releaseProgram:F,releaseShaderCache:k,programs:v,dispose:j}}function yE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,m){s.get(c)[d]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function ME(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(_,S,y,T,w,x){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:S,material:y,groupOrder:T,renderOrder:_.renderOrder,z:w,group:x},s[e]=g):(g.id=_.id,g.object=_,g.geometry=S,g.material=y,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=w,g.group=x),e++,g}function d(_,S,y,T,w,x){const g=c(_,S,y,T,w,x);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function m(_,S,y,T,w,x){const g=c(_,S,y,T,w,x);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function h(_,S){n.length>1&&n.sort(_||ME),r.length>1&&r.sort(S||Zm),a.length>1&&a.sort(S||Zm)}function v(){for(let _=e,S=s.length;_<S;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:m,finish:v,sort:h}}function EE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Qm,s.set(r,[c])):a>=l.length?(c=new Qm,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new Pt};break;case"SpotLight":n={position:new $,direction:new $,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let AE=0;function CE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function RE(s){const e=new TE,n=wE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new $);const a=new $,l=new Bt,c=new Bt;function d(h){let v=0,_=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,T=0,w=0,x=0,g=0,b=0,D=0,P=0,N=0,F=0,k=0;h.sort(CE);for(let A=0,R=h.length;A<R;A++){const H=h[A],oe=H.color,Z=H.intensity,ae=H.distance;let ce=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ws?ce=H.shadow.map.texture:ce=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=oe.r*Z,_+=oe.g*Z,S+=oe.b*Z;else if(H.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(H.sh.coefficients[te],Z);k++}else if(H.isDirectionalLight){const te=e.get(H);if(te.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,X=n.get(H);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,r.directionalShadow[y]=X,r.directionalShadowMap[y]=ce,r.directionalShadowMatrix[y]=H.shadow.matrix,b++}r.directional[y]=te,y++}else if(H.isSpotLight){const te=e.get(H);te.position.setFromMatrixPosition(H.matrixWorld),te.color.copy(oe).multiplyScalar(Z),te.distance=ae,te.coneCos=Math.cos(H.angle),te.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),te.decay=H.decay,r.spot[w]=te;const Q=H.shadow;if(H.map&&(r.spotLightMap[N]=H.map,N++,Q.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[w]=Q.matrix,H.castShadow){const X=n.get(H);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,r.spotShadow[w]=X,r.spotShadowMap[w]=ce,P++}w++}else if(H.isRectAreaLight){const te=e.get(H);te.color.copy(oe).multiplyScalar(Z),te.halfWidth.set(H.width*.5,0,0),te.halfHeight.set(0,H.height*.5,0),r.rectArea[x]=te,x++}else if(H.isPointLight){const te=e.get(H);if(te.color.copy(H.color).multiplyScalar(H.intensity),te.distance=H.distance,te.decay=H.decay,H.castShadow){const Q=H.shadow,X=n.get(H);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=H.shadow.matrix,D++}r.point[T]=te,T++}else if(H.isHemisphereLight){const te=e.get(H);te.skyColor.copy(H.color).multiplyScalar(Z),te.groundColor.copy(H.groundColor).multiplyScalar(Z),r.hemi[g]=te,g++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==y||j.pointLength!==T||j.spotLength!==w||j.rectAreaLength!==x||j.hemiLength!==g||j.numDirectionalShadows!==b||j.numPointShadows!==D||j.numSpotShadows!==P||j.numSpotMaps!==N||j.numLightProbes!==k)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=x,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+N-F,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=k,j.directionalLength=y,j.pointLength=T,j.spotLength=w,j.rectAreaLength=x,j.hemiLength=g,j.numDirectionalShadows=b,j.numPointShadows=D,j.numSpotShadows=P,j.numSpotMaps=N,j.numLightProbes=k,r.version=AE++)}function m(h,v){let _=0,S=0,y=0,T=0,w=0;const x=v.matrixWorldInverse;for(let g=0,b=h.length;g<b;g++){const D=h[g];if(D.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),_++}else if(D.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),y++}else if(D.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),c.identity(),l.copy(D.matrixWorld),l.premultiply(x),c.extractRotation(l),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),T++}else if(D.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),S++}else if(D.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(x),w++}}}return{setup:d,setupView:m,state:r}}function Jm(s){const e=new RE(s),n=[],r=[];function a(v){h.camera=v,n.length=0,r.length=0}function l(v){n.push(v)}function c(v){r.push(v)}function d(){e.setup(n)}function m(v){e.setupView(n,v)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:d,setupLightsView:m,pushLight:l,pushShadow:c}}function bE(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new Jm(s),e.set(a,[d])):l>=c.length?(d=new Jm(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LE=`uniform sampler2D shadow_pass;
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
}`,DE=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],NE=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],eg=new Bt,Wo=new $,df=new $;function IE(s,e,n){let r=new Md;const a=new Dt,l=new Dt,c=new $t,d=new jv,m=new qv,h={},v=n.maxTextureSize,_={[Cr]:On,[On]:Cr,[ji]:ji},S=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:PE,fragmentShader:LE}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const T=new kn;T.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Li(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let g=this.type;this.render=function(F,k,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;F.type===N_&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Ul);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(Yi),oe.buffers.depth.getReversed()===!0?oe.buffers.color.setClear(0,0,0,0):oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const Z=g!==this.type;Z&&k.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(ce=>ce.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,ce=F.length;ae<ce;ae++){const te=F[ae],Q=te.shadow;if(Q===void 0){at("WebGLShadowMap:",te,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;a.copy(Q.mapSize);const X=Q.getFrameExtents();if(a.multiply(X),l.copy(Q.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/X.x),a.x=l.x*X.x,Q.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/X.y),a.y=l.y*X.y,Q.mapSize.y=l.y)),Q.map===null||Z===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Xo){if(te.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Ri(a.x,a.y,{format:Ws,type:Ki,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),Q.map.texture.name=te.name+".shadowMap",Q.map.depthTexture=new Zo(a.x,a.y,wi),Q.map.depthTexture.name=te.name+".shadowMapDepth",Q.map.depthTexture.format=Zi,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=hn,Q.map.depthTexture.magFilter=hn}else{te.isPointLight?(Q.map=new Lg(a.x),Q.map.depthTexture=new Gv(a.x,Pi)):(Q.map=new Ri(a.x,a.y),Q.map.depthTexture=new Zo(a.x,a.y,Pi)),Q.map.depthTexture.name=te.name+".shadowMap",Q.map.depthTexture.format=Zi;const ne=s.state.buffers.depth.getReversed();this.type===Ul?(Q.map.depthTexture.compareFunction=ne?vd:_d,Q.map.depthTexture.minFilter=Mn,Q.map.depthTexture.magFilter=Mn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=hn,Q.map.depthTexture.magFilter=hn)}Q.camera.updateProjectionMatrix()}const fe=Q.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<fe;ne++){if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(Q.map),s.clear());const O=Q.getViewport(ne);c.set(l.x*O.x,l.y*O.y,l.x*O.z,l.y*O.w),oe.viewport(c)}if(te.isPointLight){const O=Q.camera,re=Q.matrix,Te=te.distance||O.far;Te!==O.far&&(O.far=Te,O.updateProjectionMatrix()),Wo.setFromMatrixPosition(te.matrixWorld),O.position.copy(Wo),df.copy(O.position),df.add(DE[ne]),O.up.copy(NE[ne]),O.lookAt(df),O.updateMatrixWorld(),re.makeTranslation(-Wo.x,-Wo.y,-Wo.z),eg.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(eg,O.coordinateSystem,O.reversedDepth)}else Q.updateMatrices(te);r=Q.getFrustum(),P(k,j,Q.camera,te,this.type)}Q.isPointLightShadow!==!0&&this.type===Xo&&b(Q,j),Q.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(A,R,H)};function b(F,k){const j=e.update(w);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ri(a.x,a.y,{format:Ws,type:Ki})),S.uniforms.shadow_pass.value=F.map.depthTexture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(k,null,j,S,w,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(k,null,j,y,w,null)}function D(F,k,j,A){let R=null;const H=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=j.isPointLight===!0?m:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const oe=R.uuid,Z=k.uuid;let ae=h[oe];ae===void 0&&(ae={},h[oe]=ae);let ce=ae[Z];ce===void 0&&(ce=R.clone(),ae[Z]=ce,k.addEventListener("dispose",N)),R=ce}if(R.visible=k.visible,R.wireframe=k.wireframe,A===Xo?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:_[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=s.properties.get(R);oe.light=j}return R}function P(F,k,j,A,R){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Xo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),ae=F.material;if(Array.isArray(ae)){const ce=Z.groups;for(let te=0,Q=ce.length;te<Q;te++){const X=ce[te],fe=ae[X.materialIndex];if(fe&&fe.visible){const ne=D(F,fe,A,R);F.onBeforeShadow(s,F,k,j,Z,ne,X),s.renderBufferDirect(j,null,Z,ne,F,X),F.onAfterShadow(s,F,k,j,Z,ne,X)}}}else if(ae.visible){const ce=D(F,ae,A,R);F.onBeforeShadow(s,F,k,j,Z,ce,null),s.renderBufferDirect(j,null,Z,ce,F,null),F.onAfterShadow(s,F,k,j,Z,ce,null)}}const oe=F.children;for(let Z=0,ae=oe.length;Z<ae;Z++)P(oe[Z],k,j,A,R)}function N(F){F.target.removeEventListener("dispose",N);for(const j in h){const A=h[j],R=F.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const UE={[gf]:_f,[vf]:yf,[xf]:Mf,[Hs]:Sf,[_f]:gf,[yf]:vf,[Mf]:xf,[Sf]:Hs};function FE(s,e){function n(){let z=!1;const De=new $t;let Me=null;const Ne=new $t(0,0,0,0);return{setMask:function(xe){Me!==xe&&!z&&(s.colorMask(xe,xe,xe,xe),Me=xe)},setLocked:function(xe){z=xe},setClear:function(xe,he,Re,rt,Nt){Nt===!0&&(xe*=rt,he*=rt,Re*=rt),De.set(xe,he,Re,rt),Ne.equals(De)===!1&&(s.clearColor(xe,he,Re,rt),Ne.copy(De))},reset:function(){z=!1,Me=null,Ne.set(-1,0,0,0)}}}function r(){let z=!1,De=!1,Me=null,Ne=null,xe=null;return{setReversed:function(he){if(De!==he){const Re=e.get("EXT_clip_control");he?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),De=he;const rt=xe;xe=null,this.setClear(rt)}},getReversed:function(){return De},setTest:function(he){he?ue(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(he){Me!==he&&!z&&(s.depthMask(he),Me=he)},setFunc:function(he){if(De&&(he=UE[he]),Ne!==he){switch(he){case gf:s.depthFunc(s.NEVER);break;case _f:s.depthFunc(s.ALWAYS);break;case vf:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case xf:s.depthFunc(s.EQUAL);break;case Sf:s.depthFunc(s.GEQUAL);break;case yf:s.depthFunc(s.GREATER);break;case Mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=he}},setLocked:function(he){z=he},setClear:function(he){xe!==he&&(De&&(he=1-he),s.clearDepth(he),xe=he)},reset:function(){z=!1,Me=null,Ne=null,xe=null,De=!1}}}function a(){let z=!1,De=null,Me=null,Ne=null,xe=null,he=null,Re=null,rt=null,Nt=null;return{setTest:function(Mt){z||(Mt?ue(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Mt){De!==Mt&&!z&&(s.stencilMask(Mt),De=Mt)},setFunc:function(Mt,Bn,Tn){(Me!==Mt||Ne!==Bn||xe!==Tn)&&(s.stencilFunc(Mt,Bn,Tn),Me=Mt,Ne=Bn,xe=Tn)},setOp:function(Mt,Bn,Tn){(he!==Mt||Re!==Bn||rt!==Tn)&&(s.stencilOp(Mt,Bn,Tn),he=Mt,Re=Bn,rt=Tn)},setLocked:function(Mt){z=Mt},setClear:function(Mt){Nt!==Mt&&(s.clearStencil(Mt),Nt=Mt)},reset:function(){z=!1,De=null,Me=null,Ne=null,xe=null,he=null,Re=null,rt=null,Nt=null}}}const l=new n,c=new r,d=new a,m=new WeakMap,h=new WeakMap;let v={},_={},S=new WeakMap,y=[],T=null,w=!1,x=null,g=null,b=null,D=null,P=null,N=null,F=null,k=new Pt(0,0,0),j=0,A=!1,R=null,H=null,oe=null,Z=null,ae=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),te=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),te=Q>=2);let fe=null,ne={};const O=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Te=new $t().fromArray(O),ze=new $t().fromArray(re);function Ye(z,De,Me,Ne){const xe=new Uint8Array(4),he=s.createTexture();s.bindTexture(z,he),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Me;Re++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(De+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return he}const J={};J[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),c.setFunc(Hs),ot(!1),Ft(Qp),ue(s.CULL_FACE),xt(Yi);function ue(z){v[z]!==!0&&(s.enable(z),v[z]=!0)}function ve(z){v[z]!==!1&&(s.disable(z),v[z]=!1)}function Ue(z,De){return _[z]!==De?(s.bindFramebuffer(z,De),_[z]=De,z===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=De),z===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=De),!0):!1}function be(z,De){let Me=y,Ne=!1;if(z){Me=S.get(De),Me===void 0&&(Me=[],S.set(De,Me));const xe=z.textures;if(Me.length!==xe.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Re=xe.length;he<Re;he++)Me[he]=s.COLOR_ATTACHMENT0+he;Me.length=xe.length,Ne=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(Me)}function dt(z){return T!==z?(s.useProgram(z),T=z,!0):!1}const Ht={[Qr]:s.FUNC_ADD,[U_]:s.FUNC_SUBTRACT,[F_]:s.FUNC_REVERSE_SUBTRACT};Ht[O_]=s.MIN,Ht[k_]=s.MAX;const ct={[B_]:s.ZERO,[z_]:s.ONE,[V_]:s.SRC_COLOR,[pf]:s.SRC_ALPHA,[q_]:s.SRC_ALPHA_SATURATE,[X_]:s.DST_COLOR,[G_]:s.DST_ALPHA,[H_]:s.ONE_MINUS_SRC_COLOR,[mf]:s.ONE_MINUS_SRC_ALPHA,[j_]:s.ONE_MINUS_DST_COLOR,[W_]:s.ONE_MINUS_DST_ALPHA,[Y_]:s.CONSTANT_COLOR,[$_]:s.ONE_MINUS_CONSTANT_COLOR,[K_]:s.CONSTANT_ALPHA,[Z_]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(z,De,Me,Ne,xe,he,Re,rt,Nt,Mt){if(z===Yi){w===!0&&(ve(s.BLEND),w=!1);return}if(w===!1&&(ue(s.BLEND),w=!0),z!==I_){if(z!==x||Mt!==A){if((g!==Qr||P!==Qr)&&(s.blendEquation(s.FUNC_ADD),g=Qr,P=Qr),Mt)switch(z){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hf:s.blendFunc(s.ONE,s.ONE);break;case Jp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",z);break}else switch(z){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jp:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case em:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",z);break}b=null,D=null,N=null,F=null,k.set(0,0,0),j=0,x=z,A=Mt}return}xe=xe||De,he=he||Me,Re=Re||Ne,(De!==g||xe!==P)&&(s.blendEquationSeparate(Ht[De],Ht[xe]),g=De,P=xe),(Me!==b||Ne!==D||he!==N||Re!==F)&&(s.blendFuncSeparate(ct[Me],ct[Ne],ct[he],ct[Re]),b=Me,D=Ne,N=he,F=Re),(rt.equals(k)===!1||Nt!==j)&&(s.blendColor(rt.r,rt.g,rt.b,Nt),k.copy(rt),j=Nt),x=z,A=!1}function yt(z,De){z.side===ji?ve(s.CULL_FACE):ue(s.CULL_FACE);let Me=z.side===On;De&&(Me=!Me),ot(Me),z.blending===zs&&z.transparent===!1?xt(Yi):xt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),l.setMask(z.colorWrite);const Ne=z.stencilWrite;d.setTest(Ne),Ne&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(z){R!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),R=z)}function Ft(z){z!==L_?(ue(s.CULL_FACE),z!==H&&(z===Qp?s.cullFace(s.BACK):z===D_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),H=z}function I(z){z!==oe&&(te&&s.lineWidth(z),oe=z)}function gt(z,De,Me){z?(ue(s.POLYGON_OFFSET_FILL),(Z!==De||ae!==Me)&&(s.polygonOffset(De,Me),Z=De,ae=Me)):ve(s.POLYGON_OFFSET_FILL)}function Ze(z){z?ue(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function mt(z){z===void 0&&(z=s.TEXTURE0+ce-1),fe!==z&&(s.activeTexture(z),fe=z)}function Be(z,De,Me){Me===void 0&&(fe===null?Me=s.TEXTURE0+ce-1:Me=fe);let Ne=ne[Me];Ne===void 0&&(Ne={type:void 0,texture:void 0},ne[Me]=Ne),(Ne.type!==z||Ne.texture!==De)&&(fe!==Me&&(s.activeTexture(Me),fe=Me),s.bindTexture(z,De||J[z]),Ne.type=z,Ne.texture=De)}function L(){const z=ne[fe];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function de(){try{s.texSubImage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function pe(){try{s.texSubImage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function we(){try{s.texStorage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function Ve(){try{s.texStorage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function it(){try{s.texImage2D(...arguments)}catch(z){Rt("WebGLState:",z)}}function ye(){try{s.texImage3D(...arguments)}catch(z){Rt("WebGLState:",z)}}function Pe(z){Te.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Te.copy(z))}function We(z){ze.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),ze.copy(z))}function je(z,De){let Me=h.get(De);Me===void 0&&(Me=new WeakMap,h.set(De,Me));let Ne=Me.get(z);Ne===void 0&&(Ne=s.getUniformBlockIndex(De,z.name),Me.set(z,Ne))}function Ce(z,De){const Ne=h.get(De).get(z);m.get(De)!==Ne&&(s.uniformBlockBinding(De,Ne,z.__bindingPointIndex),m.set(De,Ne))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},fe=null,ne={},_={},S=new WeakMap,y=[],T=null,w=!1,x=null,g=null,b=null,D=null,P=null,N=null,F=null,k=new Pt(0,0,0),j=0,A=!1,R=null,H=null,oe=null,Z=null,ae=null,Te.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ue,disable:ve,bindFramebuffer:Ue,drawBuffers:be,useProgram:dt,setBlending:xt,setMaterial:yt,setFlipSided:ot,setCullFace:Ft,setLineWidth:I,setPolygonOffset:gt,setScissorTest:Ze,activeTexture:mt,bindTexture:Be,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:it,texImage3D:ye,updateUBOMapping:je,uniformBlockBinding:Ce,texStorage2D:we,texStorage3D:Ve,texSubImage2D:de,texSubImage3D:pe,compressedTexSubImage2D:le,compressedTexSubImage3D:$e,scissor:Pe,viewport:We,reset:ut}}function OE(s,e,n,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,v=new WeakMap;let _;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,M){return y?new OffscreenCanvas(L,M):Wl("canvas")}function w(L,M,G){let de=1;const pe=Be(L);if((pe.width>G||pe.height>G)&&(de=G/Math.max(pe.width,pe.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const le=Math.floor(de*pe.width),$e=Math.floor(de*pe.height);_===void 0&&(_=T(le,$e));const we=M?T(le,$e):_;return we.width=le,we.height=$e,we.getContext("2d").drawImage(L,0,0,le,$e),at("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+le+"x"+$e+")."),we}else return"data"in L&&at("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function x(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,M,G,de,pe=!1){if(L!==null){if(s[L]!==void 0)return s[L];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=M;if(M===s.RED&&(G===s.FLOAT&&(le=s.R32F),G===s.HALF_FLOAT&&(le=s.R16F),G===s.UNSIGNED_BYTE&&(le=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.R8UI),G===s.UNSIGNED_SHORT&&(le=s.R16UI),G===s.UNSIGNED_INT&&(le=s.R32UI),G===s.BYTE&&(le=s.R8I),G===s.SHORT&&(le=s.R16I),G===s.INT&&(le=s.R32I)),M===s.RG&&(G===s.FLOAT&&(le=s.RG32F),G===s.HALF_FLOAT&&(le=s.RG16F),G===s.UNSIGNED_BYTE&&(le=s.RG8)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RG8UI),G===s.UNSIGNED_SHORT&&(le=s.RG16UI),G===s.UNSIGNED_INT&&(le=s.RG32UI),G===s.BYTE&&(le=s.RG8I),G===s.SHORT&&(le=s.RG16I),G===s.INT&&(le=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RGB8UI),G===s.UNSIGNED_SHORT&&(le=s.RGB16UI),G===s.UNSIGNED_INT&&(le=s.RGB32UI),G===s.BYTE&&(le=s.RGB8I),G===s.SHORT&&(le=s.RGB16I),G===s.INT&&(le=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),G===s.UNSIGNED_INT&&(le=s.RGBA32UI),G===s.BYTE&&(le=s.RGBA8I),G===s.SHORT&&(le=s.RGBA16I),G===s.INT&&(le=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),M===s.RGBA){const $e=pe?Hl:wt.getTransfer(de);G===s.FLOAT&&(le=s.RGBA32F),G===s.HALF_FLOAT&&(le=s.RGBA16F),G===s.UNSIGNED_BYTE&&(le=$e===It?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(L,M){let G;return L?M===null||M===Pi||M===$o?G=s.DEPTH24_STENCIL8:M===wi?G=s.DEPTH32F_STENCIL8:M===Yo&&(G=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===$o?G=s.DEPTH_COMPONENT24:M===wi?G=s.DEPTH_COMPONENT32F:M===Yo&&(G=s.DEPTH_COMPONENT16),G}function N(L,M){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==hn&&L.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function F(L){const M=L.target;M.removeEventListener("dispose",F),j(M),M.isVideoTexture&&v.delete(M)}function k(L){const M=L.target;M.removeEventListener("dispose",k),R(M)}function j(L){const M=r.get(L);if(M.__webglInit===void 0)return;const G=L.source,de=S.get(G);if(de){const pe=de[M.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&A(L),Object.keys(de).length===0&&S.delete(G)}r.remove(L)}function A(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const G=L.source,de=S.get(G);delete de[M.__cacheKey],c.memory.textures--}function R(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(M.__webglFramebuffer[de]))for(let pe=0;pe<M.__webglFramebuffer[de].length;pe++)s.deleteFramebuffer(M.__webglFramebuffer[de][pe]);else s.deleteFramebuffer(M.__webglFramebuffer[de]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[de])}else{if(Array.isArray(M.__webglFramebuffer))for(let de=0;de<M.__webglFramebuffer.length;de++)s.deleteFramebuffer(M.__webglFramebuffer[de]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let de=0;de<M.__webglColorRenderbuffer.length;de++)M.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[de]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=L.textures;for(let de=0,pe=G.length;de<pe;de++){const le=r.get(G[de]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),c.memory.textures--),r.remove(G[de])}r.remove(L)}let H=0;function oe(){H=0}function Z(){const L=H;return L>=a.maxTextures&&at("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),H+=1,L}function ae(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ce(L,M){const G=r.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const de=L.image;if(de===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,L,M);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function te(L,M){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){J(G,L,M);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function Q(L,M){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){J(G,L,M);return}n.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function X(L,M){const G=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){ue(G,L,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}const fe={[wf]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[Af]:s.MIRRORED_REPEAT},ne={[hn]:s.NEAREST,[ev]:s.NEAREST_MIPMAP_NEAREST,[ll]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},O={[rv]:s.NEVER,[uv]:s.ALWAYS,[sv]:s.LESS,[_d]:s.LEQUAL,[ov]:s.EQUAL,[vd]:s.GEQUAL,[av]:s.GREATER,[lv]:s.NOTEQUAL};function re(L,M){if(M.type===wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Mn||M.magFilter===Nc||M.magFilter===ll||M.magFilter===es||M.minFilter===Mn||M.minFilter===Nc||M.minFilter===ll||M.minFilter===es)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,fe[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,fe[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,fe[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ne[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ne[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==ll&&M.minFilter!==es||M.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Te(L,M){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",F));const de=M.source;let pe=S.get(de);pe===void 0&&(pe={},S.set(de,pe));const le=ae(M);if(le!==L.__cacheKey){pe[le]===void 0&&(pe[le]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,G=!0),pe[le].usedTimes++;const $e=pe[L.__cacheKey];$e!==void 0&&(pe[L.__cacheKey].usedTimes--,$e.usedTimes===0&&A(M)),L.__cacheKey=le,L.__webglTexture=pe[le].texture}return G}function ze(L,M,G){return Math.floor(Math.floor(L/G)/M)}function Ye(L,M,G,de){const le=L.updateRanges;if(le.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,de,M.data);else{le.sort((ye,Pe)=>ye.start-Pe.start);let $e=0;for(let ye=1;ye<le.length;ye++){const Pe=le[$e],We=le[ye],je=Pe.start+Pe.count,Ce=ze(We.start,M.width,4),ut=ze(Pe.start,M.width,4);We.start<=je+1&&Ce===ut&&ze(We.start+We.count-1,M.width,4)===Ce?Pe.count=Math.max(Pe.count,We.start+We.count-Pe.start):(++$e,le[$e]=We)}le.length=$e+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let ye=0,Pe=le.length;ye<Pe;ye++){const We=le[ye],je=Math.floor(We.start/4),Ce=Math.ceil(We.count/4),ut=je%M.width,z=Math.floor(je/M.width),De=Ce,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),n.texSubImage2D(s.TEXTURE_2D,0,ut,z,De,Me,G,de,M.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function J(L,M,G){let de=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=s.TEXTURE_3D);const pe=Te(L,M),le=M.source;n.bindTexture(de,L.__webglTexture,s.TEXTURE0+G);const $e=r.get(le);if(le.version!==$e.__version||pe===!0){n.activeTexture(s.TEXTURE0+G);const we=wt.getPrimaries(wt.workingColorSpace),Ve=M.colorSpace===wr?null:wt.getPrimaries(M.colorSpace),it=M.colorSpace===wr||we===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ye=w(M.image,!1,a.maxTextureSize);ye=mt(M,ye);const Pe=l.convert(M.format,M.colorSpace),We=l.convert(M.type);let je=D(M.internalFormat,Pe,We,M.colorSpace,M.isVideoTexture);re(de,M);let Ce;const ut=M.mipmaps,z=M.isVideoTexture!==!0,De=$e.__version===void 0||pe===!0,Me=le.dataReady,Ne=N(M,ye);if(M.isDepthTexture)je=P(M.format===ts,M.type),De&&(z?n.texStorage2D(s.TEXTURE_2D,1,je,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,je,ye.width,ye.height,0,Pe,We,null));else if(M.isDataTexture)if(ut.length>0){z&&De&&n.texStorage2D(s.TEXTURE_2D,Ne,je,ut[0].width,ut[0].height);for(let xe=0,he=ut.length;xe<he;xe++)Ce=ut[xe],z?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,Pe,We,Ce.data):n.texImage2D(s.TEXTURE_2D,xe,je,Ce.width,Ce.height,0,Pe,We,Ce.data);M.generateMipmaps=!1}else z?(De&&n.texStorage2D(s.TEXTURE_2D,Ne,je,ye.width,ye.height),Me&&Ye(M,ye,Pe,We)):n.texImage2D(s.TEXTURE_2D,0,je,ye.width,ye.height,0,Pe,We,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&De&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,je,ut[0].width,ut[0].height,ye.depth);for(let xe=0,he=ut.length;xe<he;xe++)if(Ce=ut[xe],M.format!==mi)if(Pe!==null)if(z){if(Me)if(M.layerUpdates.size>0){const Re=Lm(Ce.width,Ce.height,M.format,M.type);for(const rt of M.layerUpdates){const Nt=Ce.data.subarray(rt*Re/Ce.data.BYTES_PER_ELEMENT,(rt+1)*Re/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,rt,Ce.width,Ce.height,1,Pe,Nt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,ye.depth,Pe,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,je,Ce.width,Ce.height,ye.depth,0,Ce.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Ce.width,Ce.height,ye.depth,Pe,We,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,xe,je,Ce.width,Ce.height,ye.depth,0,Pe,We,Ce.data)}else{z&&De&&n.texStorage2D(s.TEXTURE_2D,Ne,je,ut[0].width,ut[0].height);for(let xe=0,he=ut.length;xe<he;xe++)Ce=ut[xe],M.format!==mi?Pe!==null?z?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,Pe,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,xe,je,Ce.width,Ce.height,0,Ce.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce.width,Ce.height,Pe,We,Ce.data):n.texImage2D(s.TEXTURE_2D,xe,je,Ce.width,Ce.height,0,Pe,We,Ce.data)}else if(M.isDataArrayTexture)if(z){if(De&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,je,ye.width,ye.height,ye.depth),Me)if(M.layerUpdates.size>0){const xe=Lm(ye.width,ye.height,M.format,M.type);for(const he of M.layerUpdates){const Re=ye.data.subarray(he*xe/ye.data.BYTES_PER_ELEMENT,(he+1)*xe/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Pe,We,Re)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,We,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,je,ye.width,ye.height,ye.depth,0,Pe,We,ye.data);else if(M.isData3DTexture)z?(De&&n.texStorage3D(s.TEXTURE_3D,Ne,je,ye.width,ye.height,ye.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,We,ye.data)):n.texImage3D(s.TEXTURE_3D,0,je,ye.width,ye.height,ye.depth,0,Pe,We,ye.data);else if(M.isFramebufferTexture){if(De)if(z)n.texStorage2D(s.TEXTURE_2D,Ne,je,ye.width,ye.height);else{let xe=ye.width,he=ye.height;for(let Re=0;Re<Ne;Re++)n.texImage2D(s.TEXTURE_2D,Re,je,xe,he,0,Pe,We,null),xe>>=1,he>>=1}}else if(ut.length>0){if(z&&De){const xe=Be(ut[0]);n.texStorage2D(s.TEXTURE_2D,Ne,je,xe.width,xe.height)}for(let xe=0,he=ut.length;xe<he;xe++)Ce=ut[xe],z?Me&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe,We,Ce):n.texImage2D(s.TEXTURE_2D,xe,je,Pe,We,Ce);M.generateMipmaps=!1}else if(z){if(De){const xe=Be(ye);n.texStorage2D(s.TEXTURE_2D,Ne,je,xe.width,xe.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,We,ye)}else n.texImage2D(s.TEXTURE_2D,0,je,Pe,We,ye);x(M)&&g(de),$e.__version=le.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ue(L,M,G){if(M.image.length!==6)return;const de=Te(L,M),pe=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const le=r.get(pe);if(pe.version!==le.__version||de===!0){n.activeTexture(s.TEXTURE0+G);const $e=wt.getPrimaries(wt.workingColorSpace),we=M.colorSpace===wr?null:wt.getPrimaries(M.colorSpace),Ve=M.colorSpace===wr||$e===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!it&&!ye?Pe[he]=w(M.image[he],!0,a.maxCubemapSize):Pe[he]=ye?M.image[he].image:M.image[he],Pe[he]=mt(M,Pe[he]);const We=Pe[0],je=l.convert(M.format,M.colorSpace),Ce=l.convert(M.type),ut=D(M.internalFormat,je,Ce,M.colorSpace),z=M.isVideoTexture!==!0,De=le.__version===void 0||de===!0,Me=pe.dataReady;let Ne=N(M,We);re(s.TEXTURE_CUBE_MAP,M);let xe;if(it){z&&De&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ut,We.width,We.height);for(let he=0;he<6;he++){xe=Pe[he].mipmaps;for(let Re=0;Re<xe.length;Re++){const rt=xe[Re];M.format!==mi?je!==null?z?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,rt.width,rt.height,je,rt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,ut,rt.width,rt.height,0,rt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,rt.width,rt.height,je,Ce,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,ut,rt.width,rt.height,0,je,Ce,rt.data)}}}else{if(xe=M.mipmaps,z&&De){xe.length>0&&Ne++;const he=Be(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ut,he.width,he.height)}for(let he=0;he<6;he++)if(ye){z?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,je,Ce,Pe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Pe[he].width,Pe[he].height,0,je,Ce,Pe[he].data);for(let Re=0;Re<xe.length;Re++){const Nt=xe[Re].image[he].image;z?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,Nt.width,Nt.height,je,Ce,Nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,ut,Nt.width,Nt.height,0,je,Ce,Nt.data)}}else{z?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,je,Ce,Pe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,je,Ce,Pe[he]);for(let Re=0;Re<xe.length;Re++){const rt=xe[Re];z?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,je,Ce,rt.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,ut,je,Ce,rt.image[he])}}}x(M)&&g(s.TEXTURE_CUBE_MAP),le.__version=pe.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ve(L,M,G,de,pe,le){const $e=l.convert(G.format,G.colorSpace),we=l.convert(G.type),Ve=D(G.internalFormat,$e,we,G.colorSpace),it=r.get(M),ye=r.get(G);if(ye.__renderTarget=M,!it.__hasExternalTextures){const Pe=Math.max(1,M.width>>le),We=Math.max(1,M.height>>le);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,le,Ve,Pe,We,M.depth,0,$e,we,null):n.texImage2D(pe,le,Ve,Pe,We,0,$e,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),gt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,pe,ye.__webglTexture,0,I(M)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,pe,ye.__webglTexture,le),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(L,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const de=M.depthTexture,pe=de&&de.isDepthTexture?de.type:null,le=P(M.stencilBuffer,pe),$e=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(M),le,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(M),le,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,le,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,L)}else{const de=M.textures;for(let pe=0;pe<de.length;pe++){const le=de[pe],$e=l.convert(le.format,le.colorSpace),we=l.convert(le.type),Ve=D(le.internalFormat,$e,we,le.colorSpace);gt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(M),Ve,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(M),Ve,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(L,M,G){const de=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(M.depthTexture);if(pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),re(s.TEXTURE_CUBE_MAP,M.depthTexture);const it=l.convert(M.depthTexture.format),ye=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===Zi?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(Pe=s.DEPTH24_STENCIL8);for(let We=0;We<6;We++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Pe,M.width,M.height,0,it,ye,null)}}else ce(M.depthTexture,0);const le=pe.__webglTexture,$e=I(M),we=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,Ve=M.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)gt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ve,we,le,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Ve,we,le,0);else if(M.depthTexture.format===ts)gt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ve,we,le,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Ve,we,le,0);else throw new Error("Unknown depthTexture format")}function dt(L){const M=r.get(L),G=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){const pe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",pe)};de.addEventListener("dispose",pe),M.__depthDisposeCallback=pe}M.__boundDepthTexture=de}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let de=0;de<6;de++)be(M.__webglFramebuffer[de],L,de);else{const de=L.texture.mipmaps;de&&de.length>0?be(M.__webglFramebuffer[0],L,0):be(M.__webglFramebuffer,L,0)}else if(G){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=s.createRenderbuffer(),Ue(M.__webglDepthbuffer[de],L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,le)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ue(M.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,le)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(L,M,G){const de=r.get(L);M!==void 0&&ve(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&dt(L)}function ct(L){const M=L.texture,G=r.get(L),de=r.get(M);L.addEventListener("dispose",k);const pe=L.textures,le=L.isWebGLCubeRenderTarget===!0,$e=pe.length>1;if($e||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=M.version,c.memory.textures++),le){G.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[we]=[];for(let Ve=0;Ve<M.mipmaps.length;Ve++)G.__webglFramebuffer[we][Ve]=s.createFramebuffer()}else G.__webglFramebuffer[we]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)G.__webglFramebuffer[we]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if($e)for(let we=0,Ve=pe.length;we<Ve;we++){const it=r.get(pe[we]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&gt(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let we=0;we<pe.length;we++){const Ve=pe[we];G.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[we]);const it=l.convert(Ve.format,Ve.colorSpace),ye=l.convert(Ve.type),Pe=D(Ve.internalFormat,it,ye,Ve.colorSpace,L.isXRRenderTarget===!0),We=I(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Pe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,G.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),re(s.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ve=0;Ve<M.mipmaps.length;Ve++)ve(G.__webglFramebuffer[we][Ve],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ve);else ve(G.__webglFramebuffer[we],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(M)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($e){for(let we=0,Ve=pe.length;we<Ve;we++){const it=pe[we],ye=r.get(it);let Pe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,ye.__webglTexture),re(Pe,it),ve(G.__webglFramebuffer,L,it,s.COLOR_ATTACHMENT0+we,Pe,0),x(it)&&g(Pe)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,de.__webglTexture),re(we,M),M.mipmaps&&M.mipmaps.length>0)for(let Ve=0;Ve<M.mipmaps.length;Ve++)ve(G.__webglFramebuffer[Ve],L,M,s.COLOR_ATTACHMENT0,we,Ve);else ve(G.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,we,0);x(M)&&g(we),n.unbindTexture()}L.depthBuffer&&dt(L)}function xt(L){const M=L.textures;for(let G=0,de=M.length;G<de;G++){const pe=M[G];if(x(pe)){const le=b(L),$e=r.get(pe).__webglTexture;n.bindTexture(le,$e),g(le),n.unbindTexture()}}}const yt=[],ot=[];function Ft(L){if(L.samples>0){if(gt(L)===!1){const M=L.textures,G=L.width,de=L.height;let pe=s.COLOR_BUFFER_BIT;const le=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(L),we=M.length>1;if(we)for(let it=0;it<M.length;it++)n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ve=L.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let it=0;it<M.length;it++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const ye=r.get(M[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,G,de,0,0,G,de,pe,s.NEAREST),m===!0&&(yt.length=0,ot.length=0,yt.push(s.COLOR_ATTACHMENT0+it),L.depthBuffer&&L.resolveDepthBuffer===!1&&(yt.push(le),ot.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let it=0;it<M.length;it++){n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const ye=r.get(M[it]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function I(L){return Math.min(a.maxSamples,L.samples)}function gt(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(L){const M=c.render.frame;v.get(L)!==M&&(v.set(L,M),L.update())}function mt(L,M){const G=L.colorSpace,de=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Xs&&G!==wr&&(wt.getTransfer(G)===It?(de!==mi||pe!==qn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",G)),M}function Be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=oe,this.setTexture2D=ce,this.setTexture2DArray=te,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=Ht,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kE(s,e){function n(r,a=wr){let l;const c=wt.getTransfer(a);if(r===qn)return s.UNSIGNED_BYTE;if(r===dd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===mg)return s.BYTE;if(r===gg)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===fd)return s.INT;if(r===Pi)return s.UNSIGNED_INT;if(r===wi)return s.FLOAT;if(r===Ki)return s.HALF_FLOAT;if(r===xg)return s.ALPHA;if(r===Sg)return s.RGB;if(r===mi)return s.RGBA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===yg)return s.RED;if(r===pd)return s.RED_INTEGER;if(r===Ws)return s.RG;if(r===md)return s.RG_INTEGER;if(r===gd)return s.RGBA_INTEGER;if(r===Fl||r===Ol||r===kl||r===Bl)if(c===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cf||r===Rf||r===bf||r===Pf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Cf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lf||r===Df||r===Nf||r===If||r===Uf||r===Ff||r===Of)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Lf||r===Df)return c===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Nf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===If)return l.COMPRESSED_R11_EAC;if(r===Uf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ff)return l.COMPRESSED_RG11_EAC;if(r===Of)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===jf||r===qf||r===Yf||r===$f||r===Kf||r===Zf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===kf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$f)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qf||r===Jf||r===ed)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Qf)return c===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ed)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===td||r===nd||r===id||r===rd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===td)return l.COMPRESSED_RED_RGTC1_EXT;if(r===nd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===id)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$o?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const BE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zE=`
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

}`;class VE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Ig(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ri({vertexShader:BE,fragmentShader:zE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Li(new Yl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HE extends Ys{constructor(e,n){super();const r=this;let a=null,l=1,c=null,d="local-floor",m=1,h=null,v=null,_=null,S=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",x=new VE,g={},b=n.getContextAttributes();let D=null,P=null;const N=[],F=[],k=new Dt;let j=null;const A=new jn;A.viewport=new $t;const R=new jn;R.viewport=new $t;const H=[A,R],oe=new Qv;let Z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=N[J];return ue===void 0&&(ue=new tf,N[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=N[J];return ue===void 0&&(ue=new tf,N[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=N[J];return ue===void 0&&(ue=new tf,N[J]=ue),ue.getHandSpace()};function ce(J){const ue=F.indexOf(J.inputSource);if(ue===-1)return;const ve=N[ue];ve!==void 0&&(ve.update(J.inputSource,J.frame,h||c),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function te(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",Q);for(let J=0;J<N.length;J++){const ue=F[J];ue!==null&&(F[J]=null,N[J].disconnect(ue))}Z=null,ae=null,x.reset();for(const J in g)delete g[J];e.setRenderTarget(D),y=null,S=null,_=null,a=null,P=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(a,n)),_},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",te),a.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await n.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(k),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ue=null,be=null;b.depth&&(be=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=b.stencil?ts:Zi,Ue=b.stencil?$o:Pi);const dt={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:l};_=this.getBinding(),S=_.createProjectionLayer(dt),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Ri(S.textureWidth,S.textureHeight,{format:mi,type:qn,depthTexture:new Zo(S.textureWidth,S.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ve={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,n,ve),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Ri(y.framebufferWidth,y.framebufferHeight,{format:mi,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),h=null,c=await a.requestReferenceSpace(d),Ye.setContext(a),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(J){for(let ue=0;ue<J.removed.length;ue++){const ve=J.removed[ue],Ue=F.indexOf(ve);Ue>=0&&(F[Ue]=null,N[Ue].disconnect(ve))}for(let ue=0;ue<J.added.length;ue++){const ve=J.added[ue];let Ue=F.indexOf(ve);if(Ue===-1){for(let dt=0;dt<N.length;dt++)if(dt>=F.length){F.push(ve),Ue=dt;break}else if(F[dt]===null){F[dt]=ve,Ue=dt;break}if(Ue===-1)break}const be=N[Ue];be&&be.connect(ve)}}const X=new $,fe=new $;function ne(J,ue,ve){X.setFromMatrixPosition(ue.matrixWorld),fe.setFromMatrixPosition(ve.matrixWorld);const Ue=X.distanceTo(fe),be=ue.projectionMatrix.elements,dt=ve.projectionMatrix.elements,Ht=be[14]/(be[10]-1),ct=be[14]/(be[10]+1),xt=(be[9]+1)/be[5],yt=(be[9]-1)/be[5],ot=(be[8]-1)/be[0],Ft=(dt[8]+1)/dt[0],I=Ht*ot,gt=Ht*Ft,Ze=Ue/(-ot+Ft),mt=Ze*-ot;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(mt),J.translateZ(Ze),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Be=Ht+Ze,L=ct+Ze,M=I-mt,G=gt+(Ue-mt),de=xt*ct/L*Be,pe=yt*ct/L*Be;J.projectionMatrix.makePerspective(M,G,de,pe,Be,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function O(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ue=J.near,ve=J.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),oe.near=R.near=A.near=ue,oe.far=R.far=A.far=ve,(Z!==oe.near||ae!==oe.far)&&(a.updateRenderState({depthNear:oe.near,depthFar:oe.far}),Z=oe.near,ae=oe.far),oe.layers.mask=J.layers.mask|6,A.layers.mask=oe.layers.mask&3,R.layers.mask=oe.layers.mask&5;const Ue=J.parent,be=oe.cameras;O(oe,Ue);for(let dt=0;dt<be.length;dt++)O(be[dt],Ue);be.length===2?ne(oe,A,R):oe.projectionMatrix.copy(A.projectionMatrix),re(J,oe,Ue)};function re(J,ue,ve){ve===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(oe)},this.getCameraTexture=function(J){return g[J]};let Te=null;function ze(J,ue){if(v=ue.getViewerPose(h||c),T=ue,v!==null){const ve=v.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Ue=!1;ve.length!==oe.cameras.length&&(oe.cameras.length=0,Ue=!0);for(let ct=0;ct<ve.length;ct++){const xt=ve[ct];let yt=null;if(y!==null)yt=y.getViewport(xt);else{const Ft=_.getViewSubImage(S,xt);yt=Ft.viewport,ct===0&&(e.setRenderTargetTextures(P,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(P))}let ot=H[ct];ot===void 0&&(ot=new jn,ot.layers.enable(ct),ot.viewport=new $t,H[ct]=ot),ot.matrix.fromArray(xt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(xt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(yt.x,yt.y,yt.width,yt.height),ct===0&&(oe.matrix.copy(ot.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),Ue===!0&&oe.cameras.push(ot)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const ct=_.getDepthInformation(ve[0]);ct&&ct.isValid&&ct.texture&&x.init(ct,a.renderState)}if(be&&be.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let ct=0;ct<ve.length;ct++){const xt=ve[ct].camera;if(xt){let yt=g[xt];yt||(yt=new Ig,g[xt]=yt);const ot=_.getCameraImage(xt);yt.sourceTexture=ot}}}}for(let ve=0;ve<N.length;ve++){const Ue=F[ve],be=N[ve];Ue!==null&&be!==void 0&&be.update(Ue,ue,h||c)}Te&&Te(J,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Ye=new Og;Ye.setAnimationLoop(ze),this.setAnimationLoop=function(J){Te=J},this.dispose=function(){}}}const Kr=new Qi,GE=new Bt;function WE(s,e){function n(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,Rg(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function a(x,g,b,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(x,g):g.isMeshToonMaterial?(l(x,g),_(x,g)):g.isMeshPhongMaterial?(l(x,g),v(x,g)):g.isMeshStandardMaterial?(l(x,g),S(x,g),g.isMeshPhysicalMaterial&&y(x,g,P)):g.isMeshMatcapMaterial?(l(x,g),T(x,g)):g.isMeshDepthMaterial?l(x,g):g.isMeshDistanceMaterial?(l(x,g),w(x,g)):g.isMeshNormalMaterial?l(x,g):g.isLineBasicMaterial?(c(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?m(x,g,b,D):g.isSpriteMaterial?h(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,n(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===On&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,n(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===On&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,n(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,n(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const b=e.get(g),D=b.envMap,P=b.envMapRotation;D&&(x.envMap.value=D,Kr.copy(P),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),x.envMapRotation.value.setFromMatrix4(GE.makeRotationFromEuler(Kr)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,x.aoMapTransform))}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function m(x,g,b,D){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*b,x.scale.value=D*.5,g.map&&(x.map.value=g.map,n(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function v(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function _(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,b){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function w(x,g){const b=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function XE(s,e,n,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(b,D){const P=D.program;r.uniformBlockBinding(b,P)}function h(b,D){let P=a[b.id];P===void 0&&(T(b),P=v(b),a[b.id]=P,b.addEventListener("dispose",x));const N=D.program;r.updateUBOMapping(b,N);const F=e.render.frame;l[b.id]!==F&&(S(b),l[b.id]=F)}function v(b){const D=_();b.__bindingPointIndex=D;const P=s.createBuffer(),N=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,N,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function _(){for(let b=0;b<d;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(b){const D=a[b.id],P=b.uniforms,N=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let F=0,k=P.length;F<k;F++){const j=Array.isArray(P[F])?P[F]:[P[F]];for(let A=0,R=j.length;A<R;A++){const H=j[A];if(y(H,F,A,N)===!0){const oe=H.__offset,Z=Array.isArray(H.value)?H.value:[H.value];let ae=0;for(let ce=0;ce<Z.length;ce++){const te=Z[ce],Q=w(te);typeof te=="number"||typeof te=="boolean"?(H.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,oe+ae,H.__data)):te.isMatrix3?(H.__data[0]=te.elements[0],H.__data[1]=te.elements[1],H.__data[2]=te.elements[2],H.__data[3]=0,H.__data[4]=te.elements[3],H.__data[5]=te.elements[4],H.__data[6]=te.elements[5],H.__data[7]=0,H.__data[8]=te.elements[6],H.__data[9]=te.elements[7],H.__data[10]=te.elements[8],H.__data[11]=0):(te.toArray(H.__data,ae),ae+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,D,P,N){const F=b.value,k=D+"_"+P;if(N[k]===void 0)return typeof F=="number"||typeof F=="boolean"?N[k]=F:N[k]=F.clone(),!0;{const j=N[k];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return N[k]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function T(b){const D=b.uniforms;let P=0;const N=16;for(let k=0,j=D.length;k<j;k++){const A=Array.isArray(D[k])?D[k]:[D[k]];for(let R=0,H=A.length;R<H;R++){const oe=A[R],Z=Array.isArray(oe.value)?oe.value:[oe.value];for(let ae=0,ce=Z.length;ae<ce;ae++){const te=Z[ae],Q=w(te),X=P%N,fe=X%Q.boundary,ne=X+fe;P+=fe,ne!==0&&N-ne<Q.storage&&(P+=N-ne),oe.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=Q.storage}}}const F=P%N;return F>0&&(P+=N-F),b.__size=P,b.__cache={},this}function w(b){const D={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(D.boundary=4,D.storage=4):b.isVector2?(D.boundary=8,D.storage=8):b.isVector3||b.isColor?(D.boundary=16,D.storage=12):b.isVector4?(D.boundary=16,D.storage=16):b.isMatrix3?(D.boundary=48,D.storage=48):b.isMatrix4?(D.boundary=64,D.storage=64):b.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",b),D}function x(b){const D=b.target;D.removeEventListener("dispose",x);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function g(){for(const b in a)s.deleteBuffer(a[b]);c=[],a={},l={}}return{bind:m,update:h,dispose:g}}const jE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function qE(){return Mi===null&&(Mi=new Fv(jE,16,16,Ws,Ki),Mi.name="DFG_LUT",Mi.minFilter=Mn,Mi.magFilter=Mn,Mi.wrapS=qi,Mi.wrapT=qi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class YE{constructor(e={}){const{canvas:n=cv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:y=qn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=c;const w=y,x=new Set([gd,md,pd]),g=new Set([qn,Pi,Yo,$o,dd,hd]),b=new Uint32Array(4),D=new Int32Array(4);let P=null,N=null;const F=[],k=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let R=!1;this._outputColorSpace=ni;let H=0,oe=0,Z=null,ae=-1,ce=null;const te=new $t,Q=new $t;let X=null;const fe=new Pt(0);let ne=0,O=n.width,re=n.height,Te=1,ze=null,Ye=null;const J=new $t(0,0,O,re),ue=new $t(0,0,O,re);let ve=!1;const Ue=new Md;let be=!1,dt=!1;const Ht=new Bt,ct=new $,xt=new $t,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Ft(){return Z===null?Te:1}let I=r;function gt(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cd}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",Nt,!1),n.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const W="webgl2";if(I=gt(W,C),I===null)throw gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Rt("WebGLRenderer: "+C.message),C}let Ze,mt,Be,L,M,G,de,pe,le,$e,we,Ve,it,ye,Pe,We,je,Ce,ut,z,De,Me,Ne,xe;function he(){Ze=new qy(I),Ze.init(),Me=new kE(I,Ze),mt=new ky(I,Ze,e,Me),Be=new FE(I,Ze),mt.reversedDepthBuffer&&S&&Be.buffers.depth.setReversed(!0),L=new Ky(I),M=new yE,G=new OE(I,Ze,Be,M,mt,Me,L),de=new zy(A),pe=new jy(A),le=new ex(I),Ne=new Fy(I,le),$e=new Yy(I,le,L,Ne),we=new Qy(I,$e,le,L),ut=new Zy(I,mt,G),We=new By(M),Ve=new SE(A,de,pe,Ze,mt,Ne,We),it=new WE(A,M),ye=new EE,Pe=new bE(Ze),Ce=new Uy(A,de,pe,Be,we,T,m),je=new IE(A,we,mt),xe=new XE(I,L,mt,Be),z=new Oy(I,Ze,L),De=new $y(I,Ze,L),L.programs=Ve.programs,A.capabilities=mt,A.extensions=Ze,A.properties=M,A.renderLists=ye,A.shadowMap=je,A.state=Be,A.info=L}he(),w!==qn&&(j=new eM(w,n.width,n.height,a,l));const Re=new HE(A,I);this.xr=Re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(C){C!==void 0&&(Te=C,this.setSize(O,re,!1))},this.getSize=function(C){return C.set(O,re)},this.setSize=function(C,W,se=!0){if(Re.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,re=W,n.width=Math.floor(C*Te),n.height=Math.floor(W*Te),se===!0&&(n.style.width=C+"px",n.style.height=W+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(O*Te,re*Te).floor()},this.setDrawingBufferSize=function(C,W,se){O=C,re=W,Te=se,n.width=Math.floor(C*se),n.height=Math.floor(W*se),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(w===qn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(te)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,W,se,ee){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,W,se,ee),Be.viewport(te.copy(J).multiplyScalar(Te).round())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,W,se,ee){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,W,se,ee),Be.scissor(Q.copy(ue).multiplyScalar(Te).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(C){Be.setScissorTest(ve=C)},this.setOpaqueSort=function(C){ze=C},this.setTransparentSort=function(C){Ye=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,se=!0){let ee=0;if(C){let Y=!1;if(Z!==null){const Le=Z.texture.format;Y=x.has(Le)}if(Y){const Le=Z.texture.type,Fe=g.has(Le),Ae=Ce.getClearColor(),Ge=Ce.getClearAlpha(),ke=Ae.r,nt=Ae.g,Qe=Ae.b;Fe?(b[0]=ke,b[1]=nt,b[2]=Qe,b[3]=Ge,I.clearBufferuiv(I.COLOR,0,b)):(D[0]=ke,D[1]=nt,D[2]=Qe,D[3]=Ge,I.clearBufferiv(I.COLOR,0,D))}else ee|=I.COLOR_BUFFER_BIT}W&&(ee|=I.DEPTH_BUFFER_BIT),se&&(ee|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",Mt,!1),Ce.dispose(),ye.dispose(),Pe.dispose(),M.dispose(),de.dispose(),pe.dispose(),we.dispose(),Ne.dispose(),xe.dispose(),Ve.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",br),Re.removeEventListener("sessionend",Pr),si.stop()};function rt(C){C.preventDefault(),sm("WebGLRenderer: Context Lost."),R=!0}function Nt(){sm("WebGLRenderer: Context Restored."),R=!1;const C=L.autoReset,W=je.enabled,se=je.autoUpdate,ee=je.needsUpdate,Y=je.type;he(),L.autoReset=C,je.enabled=W,je.autoUpdate=se,je.needsUpdate=ee,je.type=Y}function Mt(C){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Bn(C){const W=C.target;W.removeEventListener("dispose",Bn),Tn(W)}function Tn(C){Js(C),M.remove(C)}function Js(C){const W=M.get(C).programs;W!==void 0&&(W.forEach(function(se){Ve.releaseProgram(se)}),C.isShaderMaterial&&Ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,se,ee,Y,Le){W===null&&(W=yt);const Fe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=ra(C,W,se,ee,Y);Be.setMaterial(ee,Fe);let Ge=se.index,ke=1;if(ee.wireframe===!0){if(Ge=$e.getWireframeAttribute(se),Ge===void 0)return;ke=2}const nt=se.drawRange,Qe=se.attributes.position;let ht=nt.start*ke,Et=(nt.start+nt.count)*ke;Le!==null&&(ht=Math.max(ht,Le.start*ke),Et=Math.min(Et,(Le.start+Le.count)*ke)),Ge!==null?(ht=Math.max(ht,0),Et=Math.min(Et,Ge.count)):Qe!=null&&(ht=Math.max(ht,0),Et=Math.min(Et,Qe.count));const Ot=Et-ht;if(Ot<0||Ot===1/0)return;Ne.setup(Y,ee,Ae,se,Ge);let Ut,At=z;if(Ge!==null&&(Ut=le.get(Ge),At=De,At.setIndex(Ut)),Y.isMesh)ee.wireframe===!0?(Be.setLineWidth(ee.wireframeLinewidth*Ft()),At.setMode(I.LINES)):At.setMode(I.TRIANGLES);else if(Y.isLine){let Je=ee.linewidth;Je===void 0&&(Je=1),Be.setLineWidth(Je*Ft()),Y.isLineSegments?At.setMode(I.LINES):Y.isLineLoop?At.setMode(I.LINE_LOOP):At.setMode(I.LINE_STRIP)}else Y.isPoints?At.setMode(I.POINTS):Y.isSprite&&At.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))At.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Je=Y._multiDrawStarts,bt=Y._multiDrawCounts,vt=Y._multiDrawCount,mn=Ge?le.get(Ge).bytesPerElement:1,gi=M.get(ee).currentProgram.getUniforms();for(let Jt=0;Jt<vt;Jt++)gi.setValue(I,"_gl_DrawID",Jt),At.render(Je[Jt]/mn,bt[Jt])}else if(Y.isInstancedMesh)At.renderInstances(ht,Ot,Y.count);else if(se.isInstancedBufferGeometry){const Je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,bt=Math.min(se.instanceCount,Je);At.renderInstances(ht,Ot,bt)}else At.render(ht,Ot)};function Ji(C,W,se){C.transparent===!0&&C.side===ji&&C.forceSinglePass===!1?(C.side=On,C.needsUpdate=!0,Lr(C,W,se),C.side=Cr,C.needsUpdate=!0,Lr(C,W,se),C.side=ji):Lr(C,W,se)}this.compile=function(C,W,se=null){se===null&&(se=C),N=Pe.get(se),N.init(W),k.push(N),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),C!==se&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),N.setupLights();const ee=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Le=Y.material;if(Le)if(Array.isArray(Le))for(let Fe=0;Fe<Le.length;Fe++){const Ae=Le[Fe];Ji(Ae,se,Y),ee.add(Ae)}else Ji(Le,se,Y),ee.add(Le)}),N=k.pop(),ee},this.compileAsync=function(C,W,se=null){const ee=this.compile(C,W,se);return new Promise(Y=>{function Le(){if(ee.forEach(function(Fe){M.get(Fe).currentProgram.isReady()&&ee.delete(Fe)}),ee.size===0){Y(C);return}setTimeout(Le,10)}Ze.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let eo=null;function Rr(C){eo&&eo(C)}function br(){si.stop()}function Pr(){si.start()}const si=new Og;si.setAnimationLoop(Rr),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(C){eo=C,Re.setAnimationLoop(C),C===null?si.stop():si.start()},Re.addEventListener("sessionstart",br),Re.addEventListener("sessionend",Pr),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const se=Re.enabled===!0&&Re.isPresenting===!0,ee=j!==null&&(Z===null||se)&&j.begin(A,Z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,W,Z),N=Pe.get(C,k.length),N.init(W),k.push(N),Ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ue.setFromProjectionMatrix(Ht,Ai,W.reversedDepth),dt=this.localClippingEnabled,be=We.init(this.clippingPlanes,dt),P=ye.get(C,F.length),P.init(),F.push(P),Re.enabled===!0&&Re.isPresenting===!0){const Fe=A.xr.getDepthSensingMesh();Fe!==null&&to(Fe,W,-1/0,A.sortObjects)}to(C,W,0,A.sortObjects),P.finish(),A.sortObjects===!0&&P.sort(ze,Ye),ot=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ot&&Ce.addToRenderList(P,C),this.info.render.frame++,be===!0&&We.beginShadows();const Y=N.state.shadowsArray;if(je.render(Y,C,W),be===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&j.hasRenderPass())===!1){const Fe=P.opaque,Ae=P.transmissive;if(N.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Ae.length>0)for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke];na(Fe,Ae,C,Qe)}ot&&Ce.render(C);for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke];ta(P,C,Qe,Qe.viewport)}}else Ae.length>0&&na(Fe,Ae,C,W),ot&&Ce.render(C),ta(P,C,W)}Z!==null&&oe===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),ee&&j.end(A),C.isScene===!0&&C.onAfterRender(A,C,W),Ne.resetDefaultState(),ae=-1,ce=null,k.pop(),k.length>0?(N=k[k.length-1],be===!0&&We.setGlobalState(A.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function to(C,W,se,ee){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ue.intersectsSprite(C)){ee&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ht);const Fe=we.update(C),Ae=C.material;Ae.visible&&P.push(C,Fe,Ae,se,xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ue.intersectsObject(C))){const Fe=we.update(C),Ae=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),xt.copy(Fe.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(Ht)),Array.isArray(Ae)){const Ge=Fe.groups;for(let ke=0,nt=Ge.length;ke<nt;ke++){const Qe=Ge[ke],ht=Ae[Qe.materialIndex];ht&&ht.visible&&P.push(C,Fe,ht,se,xt.z,Qe)}}else Ae.visible&&P.push(C,Fe,Ae,se,xt.z,null)}}const Le=C.children;for(let Fe=0,Ae=Le.length;Fe<Ae;Fe++)to(Le[Fe],W,se,ee)}function ta(C,W,se,ee){const{opaque:Y,transmissive:Le,transparent:Fe}=C;N.setupLightsView(se),be===!0&&We.setGlobalState(A.clippingPlanes,se),ee&&Be.viewport(te.copy(ee)),Y.length>0&&Yn(Y,W,se),Le.length>0&&Yn(Le,W,se),Fe.length>0&&Yn(Fe,W,se),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function na(C,W,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ee.id]===void 0){const ht=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ee.id]=new Ri(1,1,{generateMipmaps:!0,type:ht?Ki:qn,minFilter:es,samples:mt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Le=N.state.transmissionRenderTarget[ee.id],Fe=ee.viewport||te;Le.setSize(Fe.z*A.transmissionResolutionScale,Fe.w*A.transmissionResolutionScale);const Ae=A.getRenderTarget(),Ge=A.getActiveCubeFace(),ke=A.getActiveMipmapLevel();A.setRenderTarget(Le),A.getClearColor(fe),ne=A.getClearAlpha(),ne<1&&A.setClearColor(16777215,.5),A.clear(),ot&&Ce.render(se);const nt=A.toneMapping;A.toneMapping=Ci;const Qe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),N.setupLightsView(ee),be===!0&&We.setGlobalState(A.clippingPlanes,ee),Yn(C,se,ee),G.updateMultisampleRenderTarget(Le),G.updateRenderTargetMipmap(Le),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Et=0,Ot=W.length;Et<Ot;Et++){const Ut=W[Et],{object:At,geometry:Je,material:bt,group:vt}=Ut;if(bt.side===ji&&At.layers.test(ee.layers)){const mn=bt.side;bt.side=On,bt.needsUpdate=!0,no(At,se,ee,Je,bt,vt),bt.side=mn,bt.needsUpdate=!0,ht=!0}}ht===!0&&(G.updateMultisampleRenderTarget(Le),G.updateRenderTargetMipmap(Le))}A.setRenderTarget(Ae,Ge,ke),A.setClearColor(fe,ne),Qe!==void 0&&(ee.viewport=Qe),A.toneMapping=nt}function Yn(C,W,se){const ee=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Le=C.length;Y<Le;Y++){const Fe=C[Y],{object:Ae,geometry:Ge,group:ke}=Fe;let nt=Fe.material;nt.allowOverride===!0&&ee!==null&&(nt=ee),Ae.layers.test(se.layers)&&no(Ae,W,se,Ge,nt,ke)}}function no(C,W,se,ee,Y,Le){C.onBeforeRender(A,W,se,ee,Y,Le),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(A,W,se,ee,C,Le),Y.transparent===!0&&Y.side===ji&&Y.forceSinglePass===!1?(Y.side=On,Y.needsUpdate=!0,A.renderBufferDirect(se,W,ee,Y,C,Le),Y.side=Cr,Y.needsUpdate=!0,A.renderBufferDirect(se,W,ee,Y,C,Le),Y.side=ji):A.renderBufferDirect(se,W,ee,Y,C,Le),C.onAfterRender(A,W,se,ee,Y,Le)}function Lr(C,W,se){W.isScene!==!0&&(W=yt);const ee=M.get(C),Y=N.state.lights,Le=N.state.shadowsArray,Fe=Y.state.version,Ae=Ve.getParameters(C,Y.state,Le,W,se),Ge=Ve.getProgramCacheKey(Ae);let ke=ee.programs;ee.environment=C.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(C.isMeshStandardMaterial?pe:de).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,ke===void 0&&(C.addEventListener("dispose",Bn),ke=new Map,ee.programs=ke);let nt=ke.get(Ge);if(nt!==void 0){if(ee.currentProgram===nt&&ee.lightsStateVersion===Fe)return io(C,Ae),nt}else Ae.uniforms=Ve.getUniforms(C),C.onBeforeCompile(Ae,A),nt=Ve.acquireProgram(Ae,Ge),ke.set(Ge,nt),ee.uniforms=Ae.uniforms;const Qe=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=We.uniform),io(C,Ae),ee.needsLights=oa(C),ee.lightsStateVersion=Fe,ee.needsLights&&(Qe.ambientLightColor.value=Y.state.ambient,Qe.lightProbe.value=Y.state.probe,Qe.directionalLights.value=Y.state.directional,Qe.directionalLightShadows.value=Y.state.directionalShadow,Qe.spotLights.value=Y.state.spot,Qe.spotLightShadows.value=Y.state.spotShadow,Qe.rectAreaLights.value=Y.state.rectArea,Qe.ltc_1.value=Y.state.rectAreaLTC1,Qe.ltc_2.value=Y.state.rectAreaLTC2,Qe.pointLights.value=Y.state.point,Qe.pointLightShadows.value=Y.state.pointShadow,Qe.hemisphereLights.value=Y.state.hemi,Qe.directionalShadowMap.value=Y.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Qe.spotShadowMap.value=Y.state.spotShadowMap,Qe.spotLightMatrix.value=Y.state.spotLightMatrix,Qe.spotLightMap.value=Y.state.spotLightMap,Qe.pointShadowMap.value=Y.state.pointShadowMap,Qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=nt,ee.uniformsList=null,nt}function ia(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Vl.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function io(C,W){const se=M.get(C);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function ra(C,W,se,ee,Y){W.isScene!==!0&&(W=yt),G.resetTextureUnits();const Le=W.fog,Fe=ee.isMeshStandardMaterial?W.environment:null,Ae=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xs,Ge=(ee.isMeshStandardMaterial?pe:de).get(ee.envMap||Fe),ke=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Qe=!!se.morphAttributes.position,ht=!!se.morphAttributes.normal,Et=!!se.morphAttributes.color;let Ot=Ci;ee.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ot=A.toneMapping);const Ut=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,At=Ut!==void 0?Ut.length:0,Je=M.get(ee),bt=N.state.lights;if(be===!0&&(dt===!0||C!==ce)){const sn=C===ce&&ee.id===ae;We.setState(ee,C,sn)}let vt=!1;ee.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==bt.state.version||Je.outputColorSpace!==Ae||Y.isBatchedMesh&&Je.batching===!1||!Y.isBatchedMesh&&Je.batching===!0||Y.isBatchedMesh&&Je.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Je.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Je.instancing===!1||!Y.isInstancedMesh&&Je.instancing===!0||Y.isSkinnedMesh&&Je.skinning===!1||!Y.isSkinnedMesh&&Je.skinning===!0||Y.isInstancedMesh&&Je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Je.instancingMorph===!1&&Y.morphTexture!==null||Je.envMap!==Ge||ee.fog===!0&&Je.fog!==Le||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==ke||Je.vertexTangents!==nt||Je.morphTargets!==Qe||Je.morphNormals!==ht||Je.morphColors!==Et||Je.toneMapping!==Ot||Je.morphTargetsCount!==At)&&(vt=!0):(vt=!0,Je.__version=ee.version);let mn=Je.currentProgram;vt===!0&&(mn=Lr(ee,W,Y));let gi=!1,Jt=!1,Dr=!1;const Lt=mn.getUniforms(),lt=Je.uniforms;if(Be.useProgram(mn.program)&&(gi=!0,Jt=!0,Dr=!0),ee.id!==ae&&(ae=ee.id,Jt=!0),gi||ce!==C){Be.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Lt.setValue(I,"projectionMatrix",C.projectionMatrix),Lt.setValue(I,"viewMatrix",C.matrixWorldInverse);const on=Lt.map.cameraPosition;on!==void 0&&on.setValue(I,ct.setFromMatrixPosition(C.matrixWorld)),mt.logarithmicDepthBuffer&&Lt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Lt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),ce!==C&&(ce=C,Jt=!0,Dr=!0)}if(Je.needsLights&&(bt.state.directionalShadowMap.length>0&&Lt.setValue(I,"directionalShadowMap",bt.state.directionalShadowMap,G),bt.state.spotShadowMap.length>0&&Lt.setValue(I,"spotShadowMap",bt.state.spotShadowMap,G),bt.state.pointShadowMap.length>0&&Lt.setValue(I,"pointShadowMap",bt.state.pointShadowMap,G)),Y.isSkinnedMesh){Lt.setOptional(I,Y,"bindMatrix"),Lt.setOptional(I,Y,"bindMatrixInverse");const sn=Y.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Lt.setValue(I,"boneTexture",sn.boneTexture,G))}Y.isBatchedMesh&&(Lt.setOptional(I,Y,"batchingTexture"),Lt.setValue(I,"batchingTexture",Y._matricesTexture,G),Lt.setOptional(I,Y,"batchingIdTexture"),Lt.setValue(I,"batchingIdTexture",Y._indirectTexture,G),Lt.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Lt.setValue(I,"batchingColorTexture",Y._colorsTexture,G));const wn=se.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&ut.update(Y,se,mn),(Jt||Je.receiveShadow!==Y.receiveShadow)&&(Je.receiveShadow=Y.receiveShadow,Lt.setValue(I,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(lt.envMap.value=Ge,lt.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(lt.envMapIntensity.value=W.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=qE()),Jt&&(Lt.setValue(I,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&sa(lt,Dr),Le&&ee.fog===!0&&it.refreshFogUniforms(lt,Le),it.refreshMaterialUniforms(lt,ee,Te,re,N.state.transmissionRenderTarget[C.id]),Vl.upload(I,ia(Je),lt,G)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Vl.upload(I,ia(Je),lt,G),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Lt.setValue(I,"center",Y.center),Lt.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Lt.setValue(I,"normalMatrix",Y.normalMatrix),Lt.setValue(I,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const sn=ee.uniformsGroups;for(let on=0,is=sn.length;on<is;on++){const _i=sn[on];xe.update(_i,mn),xe.bind(_i,mn)}}return mn}function sa(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function oa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,W,se){const ee=M.get(C);ee.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),M.get(C.texture).__webglTexture=W,M.get(C.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const se=M.get(C);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const Zl=I.createFramebuffer();this.setRenderTarget=function(C,W=0,se=0){Z=C,H=W,oe=se;let ee=null,Y=!1,Le=!1;if(C){const Ae=M.get(C);if(Ae.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(I.FRAMEBUFFER,Ae.__webglFramebuffer),te.copy(C.viewport),Q.copy(C.scissor),X=C.scissorTest,Be.viewport(te),Be.scissor(Q),Be.setScissorTest(X),ae=-1;return}else if(Ae.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(Ae.__hasExternalTextures)G.rebindTextures(C,M.get(C.texture).__webglTexture,M.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(Ae.__boundDepthTexture!==nt){if(nt!==null&&M.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const ke=M.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?ee=ke[W][se]:ee=ke[W],Y=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?ee=M.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?ee=ke[se]:ee=ke,te.copy(C.viewport),Q.copy(C.scissor),X=C.scissorTest}else te.copy(J).multiplyScalar(Te).floor(),Q.copy(ue).multiplyScalar(Te).floor(),X=ve;if(se!==0&&(ee=Zl),Be.bindFramebuffer(I.FRAMEBUFFER,ee)&&Be.drawBuffers(C,ee),Be.viewport(te),Be.scissor(Q),Be.setScissorTest(X),Y){const Ae=M.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,se)}else if(Le){const Ae=W;for(let Ge=0;Ge<C.textures.length;Ge++){const ke=M.get(C.textures[Ge]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ge,ke.__webglTexture,se,Ae)}}else if(C!==null&&se!==0){const Ae=M.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,se)}ae=-1},this.readRenderTargetPixels=function(C,W,se,ee,Y,Le,Fe,Ae=0){if(!(C&&C.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){Be.bindFramebuffer(I.FRAMEBUFFER,Ge);try{const ke=C.textures[Ae],nt=ke.format,Qe=ke.type;if(!mt.textureFormatReadable(nt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ee&&se>=0&&se<=C.height-Y&&(C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae),I.readPixels(W,se,ee,Y,Me.convert(nt),Me.convert(Qe),Le))}finally{const ke=Z!==null?M.get(Z).__webglFramebuffer:null;Be.bindFramebuffer(I.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,W,se,ee,Y,Le,Fe,Ae=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge)if(W>=0&&W<=C.width-ee&&se>=0&&se<=C.height-Y){Be.bindFramebuffer(I.FRAMEBUFFER,Ge);const ke=C.textures[Ae],nt=ke.format,Qe=ke.type;if(!mt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.bufferData(I.PIXEL_PACK_BUFFER,Le.byteLength,I.STREAM_READ),C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae),I.readPixels(W,se,ee,Y,Me.convert(nt),Me.convert(Qe),0);const Et=Z!==null?M.get(Z).__webglFramebuffer:null;Be.bindFramebuffer(I.FRAMEBUFFER,Et);const Ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fv(I,Ot,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Le),I.deleteBuffer(ht),I.deleteSync(Ot),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,se=0){const ee=Math.pow(2,-se),Y=Math.floor(C.image.width*ee),Le=Math.floor(C.image.height*ee),Fe=W!==null?W.x:0,Ae=W!==null?W.y:0;G.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,se,0,0,Fe,Ae,Y,Le),Be.unbindTexture()};const Ql=I.createFramebuffer(),Wt=I.createFramebuffer();this.copyTextureToTexture=function(C,W,se=null,ee=null,Y=0,Le=null){Le===null&&(Y!==0?(Ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=Y,Y=0):Le=0);let Fe,Ae,Ge,ke,nt,Qe,ht,Et,Ot;const Ut=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(se!==null)Fe=se.max.x-se.min.x,Ae=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,nt=se.min.y,Qe=se.isBox3?se.min.z:0;else{const wn=Math.pow(2,-Y);Fe=Math.floor(Ut.width*wn),Ae=Math.floor(Ut.height*wn),C.isDataArrayTexture?Ge=Ut.depth:C.isData3DTexture?Ge=Math.floor(Ut.depth*wn):Ge=1,ke=0,nt=0,Qe=0}ee!==null?(ht=ee.x,Et=ee.y,Ot=ee.z):(ht=0,Et=0,Ot=0);const At=Me.convert(W.format),Je=Me.convert(W.type);let bt;W.isData3DTexture?(G.setTexture3D(W,0),bt=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),bt=I.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),bt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const vt=I.getParameter(I.UNPACK_ROW_LENGTH),mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),Jt=I.getParameter(I.UNPACK_SKIP_ROWS),Dr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe);const Lt=C.isDataArrayTexture||C.isData3DTexture,lt=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const wn=M.get(C),sn=M.get(W),on=M.get(wn.__renderTarget),is=M.get(sn.__renderTarget);Be.bindFramebuffer(I.READ_FRAMEBUFFER,on.__webglFramebuffer),Be.bindFramebuffer(I.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let _i=0;_i<Ge;_i++)Lt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,M.get(C).__webglTexture,Y,Qe+_i),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,M.get(W).__webglTexture,Le,Ot+_i)),I.blitFramebuffer(ke,nt,Fe,Ae,ht,Et,Fe,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST);Be.bindFramebuffer(I.READ_FRAMEBUFFER,null),Be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||M.has(C)){const wn=M.get(C),sn=M.get(W);Be.bindFramebuffer(I.READ_FRAMEBUFFER,Ql),Be.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wt);for(let on=0;on<Ge;on++)Lt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,Y,Qe+on):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,Y),lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,Le,Ot+on):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,Le),Y!==0?I.blitFramebuffer(ke,nt,Fe,Ae,ht,Et,Fe,Ae,I.COLOR_BUFFER_BIT,I.NEAREST):lt?I.copyTexSubImage3D(bt,Le,ht,Et,Ot+on,ke,nt,Fe,Ae):I.copyTexSubImage2D(bt,Le,ht,Et,ke,nt,Fe,Ae);Be.bindFramebuffer(I.READ_FRAMEBUFFER,null),Be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(bt,Le,ht,Et,Ot,Fe,Ae,Ge,At,Je,Ut.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(bt,Le,ht,Et,Ot,Fe,Ae,Ge,At,Ut.data):I.texSubImage3D(bt,Le,ht,Et,Ot,Fe,Ae,Ge,At,Je,Ut):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Le,ht,Et,Fe,Ae,At,Je,Ut.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Le,ht,Et,Ut.width,Ut.height,At,Ut.data):I.texSubImage2D(I.TEXTURE_2D,Le,ht,Et,Fe,Ae,At,Je,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Dr),Le===0&&W.generateMipmaps&&I.generateMipmap(bt),Be.unbindTexture()},this.initRenderTarget=function(C){M.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){H=0,oe=0,Z=null,Be.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const tg=new $,$E=new $s,ng=new $;class KE extends pn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(n){n.element&&n.element instanceof n.element.ownerDocument.defaultView.Element&&n.element.parentNode!==null&&n.element.remove()})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this}}const Ei=new Bt,ZE=new Bt;class QE{constructor(e={}){const n=this;let r,a,l,c;const d={camera:{style:""},objects:new WeakMap},m=e.element!==void 0?e.element:document.createElement("div");m.style.overflow="hidden",this.domElement=m;const h=document.createElement("div");h.style.transformOrigin="0 0",h.style.pointerEvents="none",m.appendChild(h);const v=document.createElement("div");v.style.transformStyle="preserve-3d",h.appendChild(v),this.getSize=function(){return{width:r,height:a}},this.render=function(x,g){const b=g.projectionMatrix.elements[5]*c;g.view&&g.view.enabled?(h.style.transform=`translate( ${-g.view.offsetX*(r/g.view.width)}px, ${-g.view.offsetY*(a/g.view.height)}px )`,h.style.transform+=`scale( ${g.view.fullWidth/g.view.width}, ${g.view.fullHeight/g.view.height} )`):h.style.transform="",x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld();let D,P;g.isOrthographicCamera&&(D=-(g.right+g.left)/2,P=(g.top+g.bottom)/2);const N=g.view&&g.view.enabled?g.view.height/g.view.fullHeight:1,F=g.isOrthographicCamera?`scale( ${N} )scale(`+b+")translate("+_(D)+"px,"+_(P)+"px)"+S(g.matrixWorldInverse):`scale( ${N} )translateZ(`+b+"px)"+S(g.matrixWorldInverse),j=(g.isPerspectiveCamera?"perspective("+b+"px) ":"")+F+"translate("+l+"px,"+c+"px)";d.camera.style!==j&&(v.style.transform=j,d.camera.style=j),w(x,x,g)},this.setSize=function(x,g){r=x,a=g,l=r/2,c=a/2,m.style.width=x+"px",m.style.height=g+"px",h.style.width=x+"px",h.style.height=g+"px",v.style.width=x+"px",v.style.height=g+"px"};function _(x){return Math.abs(x)<1e-10?0:x}function S(x){const g=x.elements;return"matrix3d("+_(g[0])+","+_(-g[1])+","+_(g[2])+","+_(g[3])+","+_(g[4])+","+_(-g[5])+","+_(g[6])+","+_(g[7])+","+_(g[8])+","+_(-g[9])+","+_(g[10])+","+_(g[11])+","+_(g[12])+","+_(-g[13])+","+_(g[14])+","+_(g[15])+")"}function y(x){const g=x.elements;return"translate(-50%,-50%)"+("matrix3d("+_(g[0])+","+_(g[1])+","+_(g[2])+","+_(g[3])+","+_(-g[4])+","+_(-g[5])+","+_(-g[6])+","+_(-g[7])+","+_(g[8])+","+_(g[9])+","+_(g[10])+","+_(g[11])+","+_(g[12])+","+_(g[13])+","+_(g[14])+","+_(g[15])+")")}function T(x){x.isCSS3DObject&&(x.element.style.display="none");for(let g=0,b=x.children.length;g<b;g++)T(x.children[g])}function w(x,g,b,D){if(x.visible===!1){T(x);return}if(x.isCSS3DObject){const P=x.layers.test(b.layers)===!0,N=x.element;if(N.style.display=P===!0?"":"none",P===!0){x.onBeforeRender(n,g,b);let F;x.isCSS3DSprite?(Ei.copy(b.matrixWorldInverse),Ei.transpose(),x.rotation2D!==0&&Ei.multiply(ZE.makeRotationZ(x.rotation2D)),x.matrixWorld.decompose(tg,$E,ng),Ei.setPosition(tg),Ei.scale(ng),Ei.elements[3]=0,Ei.elements[7]=0,Ei.elements[11]=0,Ei.elements[15]=1,F=y(Ei)):F=y(x.matrixWorld);const k=d.objects.get(x);if(k===void 0||k.style!==F){N.style.transform=F;const j={style:F};d.objects.set(x,j)}N.parentNode!==v&&v.appendChild(N),x.onAfterRender(n,g,b)}}for(let P=0,N=x.children.length;P<N;P++)w(x.children[P],g,b)}}}const JE=qt.lazy(()=>qs(()=>import("./AboutFace-DvkPDboi.js"),__vite__mapDeps([0,1,2])).then(s=>({default:s.AboutFace}))),e1=qt.lazy(()=>qs(()=>import("./SkillsFace-DK1GNaeG.js"),[]).then(s=>({default:s.SkillsFace}))),t1=qt.lazy(()=>qs(()=>import("./ProjectsFace-B_AJ0wKh.js"),__vite__mapDeps([3,4,5,6])).then(s=>({default:s.ProjectsFace}))),n1=qt.lazy(()=>qs(()=>import("./ExperienceFace-4zxBnAWc.js"),__vite__mapDeps([7,1,8,6,2])).then(s=>({default:s.ExperienceFace}))),i1=qt.lazy(()=>qs(()=>import("./ContactFace-DnPy00Ob.js"),__vite__mapDeps([9,1,4,8])).then(s=>({default:s.ContactFace}))),r1=qt.lazy(()=>qs(()=>import("./EducationFace-DVLQiCYn.js"),__vite__mapDeps([10,5,2])).then(s=>({default:s.EducationFace})));function s1({targetRotation:s}){const e=qt.useRef(null),n=qt.useRef(null),r=qt.useRef({x:0,y:0}),a=qt.useRef({x:0,y:0}),l=qt.useRef(s),c=qt.useRef(null);return qt.useEffect(()=>{l.current=s,c.current?.()},[s]),qt.useEffect(()=>{if(!e.current||!n.current)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=window.innerWidth<900,h=navigator.hardwareConcurrency>0&&navigator.hardwareConcurrency<=4,v=d||m||h,_=v?400:1600,S=v?18:32,y=v?1:1.25,T=v?24:60,w=v?8:20,x=v?3:6,g=new Mm,b=new jn(50,window.innerWidth/window.innerHeight,1,5e3);b.position.z=1500;const D=new QE;D.setSize(window.innerWidth,window.innerHeight),e.current.appendChild(D.domElement);const P=new Mm,N=new YE({antialias:!1,alpha:!0,powerPreference:"high-performance"});N.setSize(window.innerWidth,window.innerHeight),N.setPixelRatio(Math.min(window.devicePixelRatio,y)),n.current.appendChild(N.domElement);const F=new Ed(150,S,S),k=v?new yd({color:3359061,transparent:!0,opacity:.18}):new ri({uniforms:{time:{value:0}},vertexShader:`
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
          `,transparent:!0,blending:hf}),j=new Li(F,k);j.position.set(-800,-600,-2e3),P.add(j);const A=new kn,R=[];for(let I=0;I<_;I++){const gt=(Math.random()-.5)*4e3,Ze=(Math.random()-.5)*4e3,mt=(Math.random()-.5)*4e3;R.push(gt,Ze,mt)}A.setAttribute("position",new En(R,3));const H=new Ng({color:16777215,size:2,transparent:!0,opacity:.6}),oe=new Hv(A,H);P.add(oe);const Z=new Zs(1e3,1e3,1e3),ae=new Wv(Z),ce=new Dg({color:9133302,transparent:!0,opacity:.3}),te=new Vv(ae,ce);P.add(te);const Q=new Zv(4210752,.5);P.add(Q);const X=[],fe=[9133302,3900150,1096065,15680580,16347926,440020];for(let I=0;I<x;I++){const gt=new Kv(fe[I],v?.2:.3,600);P.add(gt),X.push(gt)}const ne=new jo,O=[{component:JE,color:"#8b5cf6",position:[0,0,500],rotation:[0,0,0]},{component:e1,color:"#3b82f6",position:[0,0,-500],rotation:[0,Math.PI,0]},{component:t1,color:"#10b981",position:[500,0,0],rotation:[0,Math.PI/2,0]},{component:n1,color:"#ef4444",position:[-500,0,0],rotation:[0,-Math.PI/2,0]},{component:i1,color:"#f97316",position:[0,500,0],rotation:[-Math.PI/2,0,0]},{component:r1,color:"#06b6d4",position:[0,-500,0],rotation:[Math.PI/2,0,0]}],re=[];O.forEach((I,gt)=>{const Ze=document.createElement("div");Ze.style.width="860px",Ze.style.height="860px",Ze.style.padding="40px",Ze.style.background="linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 27, 75, 0.95) 100%)",Ze.style.border=`3px solid ${I.color}`,Ze.style.borderRadius="24px",Ze.style.boxShadow=`0 0 60px ${I.color}40, inset 0 0 40px ${I.color}08`,Ze.style.overflow="auto",Ze.style.contain="layout style paint",Ze.style.willChange="transform";const mt=I.component,Be=sg.createRoot(Ze);Be.render(_e.jsx(qt.Suspense,{fallback:_e.jsx("div",{style:{color:"#cbd5e1",padding:"1rem"},children:"Loading..."}),children:_e.jsx(mt,{})})),re.push(Be);const L=new KE(Ze);L.position.set(I.position[0],I.position[1],I.position[2]),L.rotation.set(I.rotation[0],I.rotation[1],I.rotation[2]),ne.add(L);const M=X[gt%X.length];M&&M.position.set(I.position[0],I.position[1],I.position[2])}),g.add(ne);let Te=!1,ze={x:0,y:0};const Ye=I=>{Te=!0,ze={x:I.clientX,y:I.clientY},a.current={x:0,y:0},c.current?.()},J=I=>{if(Te){const gt=I.clientX-ze.x,Ze=I.clientY-ze.y;a.current.y=gt*.005,a.current.x=Ze*.005,ze={x:I.clientX,y:I.clientY},c.current?.()}},ue=()=>{Te=!1},ve=I=>{I.preventDefault(),b.position.z+=I.deltaY*.5,b.position.z=Math.max(800,Math.min(2500,b.position.z)),c.current?.()},Ue=e.current;Ue.addEventListener("mousedown",Ye),window.addEventListener("mousemove",J),window.addEventListener("mouseup",ue),Ue.addEventListener("wheel",ve,{passive:!1});let be=0,dt=0,Ht=!1;const ct=1e3/T,xt=()=>{const I=l.current.x-r.current.x,gt=l.current.y-r.current.y;return Te||Math.abs(a.current.x)>2e-4||Math.abs(a.current.y)>2e-4||Math.abs(I)>5e-4||Math.abs(gt)>5e-4},yt=I=>{if(be=0,v&&Ht&&!xt())return;be=requestAnimationFrame(yt);const gt=I-dt;if(gt<ct)return;if(dt=I-gt%ct,!v&&k instanceof ri&&k.uniforms.time&&(k.uniforms.time.value=I*.001),j.rotation.y+=v?4e-4:.001,!Te){r.current.x+=a.current.x,r.current.y+=a.current.y;const mt=l.current.x-r.current.x,Be=l.current.y-r.current.y;r.current.x+=mt*.1,r.current.y+=Be*.1,a.current.x*=.95,a.current.y*=.95}r.current.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,r.current.x)),ne.rotation.x=r.current.x,ne.rotation.y=r.current.y,te.rotation.x=r.current.x,te.rotation.y=r.current.y;const Ze=Math.sin(I*5e-4)*w;ne.position.y=Ze,te.position.y=Ze,oe.rotation.y+=v?5e-5:1e-4,D.render(g,b),N.render(P,b),Ht=!0},ot=()=>{be===0&&(be=requestAnimationFrame(yt))};c.current=ot,ot();const Ft=()=>{b.aspect=window.innerWidth/window.innerHeight,b.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight),N.setSize(window.innerWidth,window.innerHeight),ot()};return window.addEventListener("resize",Ft),()=>{cancelAnimationFrame(be),c.current=null,window.removeEventListener("resize",Ft),Ue.removeEventListener("mousedown",Ye),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",ue),Ue.removeEventListener("wheel",ve),e.current&&D.domElement.parentNode===e.current&&e.current.removeChild(D.domElement),n.current&&N.domElement.parentNode===n.current&&n.current.removeChild(N.domElement),N.dispose(),F.dispose(),k.dispose(),A.dispose(),H.dispose(),Z.dispose(),ae.dispose(),ce.dispose(),re.forEach(I=>I.unmount())}},[]),_e.jsxs(_e.Fragment,{children:[_e.jsx("div",{ref:n,className:"absolute inset-0",style:{zIndex:1}}),_e.jsx("div",{ref:e,className:"absolute inset-0",style:{zIndex:2}})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a1=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),ig=s=>{const e=a1(s);return e.charAt(0).toUpperCase()+e.slice(1)},Hg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=qt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},m)=>qt.createElement("svg",{ref:m,...l1,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Hg("lucide",a),...d},[...c.map(([h,v])=>qt.createElement(h,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=(s,e)=>{const n=qt.forwardRef(({className:r,...a},l)=>qt.createElement(u1,{ref:l,iconNode:e,className:Hg(`lucide-${o1(ig(s))}`,`lucide-${s}`,r),...a}));return n.displayName=ig(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],f1=Di("chevron-down",c1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],h1=Di("chevron-left",d1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],m1=Di("chevron-right",p1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],_1=Di("chevron-up",g1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],rg=Di("external-link",v1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],S1=Di("globe",x1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],M1=Di("house",y1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],T1=Di("layers",E1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],A1=Di("loader-circle",w1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],R1=Di("qr-code",C1);function b1({onNavigate:s}){return _e.jsxs("div",{className:"absolute bottom-8 left-8 z-20",children:[_e.jsx("div",{className:"relative",children:_e.jsxs("div",{className:"w-56 h-56 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-950/90 backdrop-blur-2xl border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 flex items-center justify-center relative",children:[_e.jsx("div",{className:"absolute inset-4 rounded-full border border-purple-500/10"}),_e.jsx("div",{className:"absolute inset-8 rounded-full border border-purple-500/5"}),_e.jsxs("button",{onClick:()=>s("front"),className:"relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/50 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10 group border-2 border-purple-400/50",title:"Home - About",children:[_e.jsx(M1,{className:"w-6 h-6 text-white mb-0.5"}),_e.jsx("span",{className:"text-[8px] text-white/80 font-semibold tracking-wider",children:"HOME"})]}),_e.jsxs("button",{onClick:()=>s("up"),className:"absolute top-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-orange-600 hover:to-orange-700 border-2 border-orange-500/30 hover:border-orange-400/60 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl",title:"Contact",children:[_e.jsx(_1,{className:"w-7 h-7 text-orange-400 group-hover:text-white transition-colors"}),_e.jsx("span",{className:"text-[9px] text-orange-300 group-hover:text-white font-semibold tracking-wider mt-0.5",children:"CONTACT"})]}),_e.jsxs("button",{onClick:()=>s("down"),className:"absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-cyan-600 hover:to-cyan-700 border-2 border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl",title:"Education",children:[_e.jsx(f1,{className:"w-7 h-7 text-cyan-400 group-hover:text-white transition-colors"}),_e.jsx("span",{className:"text-[9px] text-cyan-300 group-hover:text-white font-semibold tracking-wider mt-0.5",children:"EDUCATION"})]}),_e.jsxs("button",{onClick:()=>s("left"),className:"absolute left-3 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-red-600 hover:to-red-700 border-2 border-red-500/30 hover:border-red-400/60 shadow-lg shadow-red-500/10 hover:shadow-red-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl",title:"Experience",children:[_e.jsx(h1,{className:"w-7 h-7 text-red-400 group-hover:text-white transition-colors"}),_e.jsx("span",{className:"text-[8px] text-red-300 group-hover:text-white font-semibold tracking-wider mt-0.5",children:"EXPERIENCE"})]}),_e.jsxs("button",{onClick:()=>s("right"),className:"absolute right-3 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-green-600 hover:to-green-700 border-2 border-green-500/30 hover:border-green-400/60 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl",title:"Projects",children:[_e.jsx(m1,{className:"w-7 h-7 text-green-400 group-hover:text-white transition-colors"}),_e.jsx("span",{className:"text-[9px] text-green-300 group-hover:text-white font-semibold tracking-wider mt-0.5",children:"PROJECTS"})]})]})}),_e.jsxs("div",{className:"mt-6 flex gap-3",children:[_e.jsx("button",{onClick:()=>s("front"),className:"flex-1 px-4 py-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/40 hover:to-purple-600/40 border border-purple-500/50 hover:border-purple-400/70 rounded-xl text-purple-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20",children:"ABOUT"}),_e.jsxs("button",{onClick:()=>s("back"),className:"flex-1 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/40 hover:to-blue-600/40 border border-blue-500/50 hover:border-blue-400/70 rounded-xl text-blue-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 flex items-center justify-center gap-2",children:[_e.jsx(T1,{className:"w-4 h-4"}),"SKILLS"]})]})]})}function P1(){const[s,e]=qt.useState(!0);return qt.useEffect(()=>{const n=setTimeout(()=>{e(!1)},1500);return()=>clearTimeout(n)},[]),s?_e.jsx("div",{className:"fixed inset-0 bg-black z-50 flex items-center justify-center",children:_e.jsxs("div",{className:"text-center",children:[_e.jsx(A1,{className:"w-16 h-16 text-purple-500 animate-spin mx-auto mb-4"}),_e.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Loading Portfolio"}),_e.jsx("p",{className:"text-purple-300",children:"Initializing 3D space..."})]})}):null}function L1(){return _e.jsx("div",{className:"absolute bottom-8 right-8 z-20",children:_e.jsxs("div",{className:"bg-gradient-to-br from-slate-900/90 via-purple-900/30 to-slate-900/90 backdrop-blur-2xl border-2 border-purple-500/30 rounded-2xl p-6 shadow-2xl shadow-purple-500/20 max-w-xs",children:[_e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[_e.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30",children:_e.jsx(S1,{className:"w-5 h-5 text-white"})}),_e.jsxs("div",{children:[_e.jsx("h3",{className:"font-bold text-white tracking-wide",children:"DIGITAL CARD"}),_e.jsx("p",{className:"text-xs text-slate-400",children:"Scan to visit portfolio"})]})]}),_e.jsxs("div",{className:"relative mb-4 group",children:[_e.jsx("div",{className:"w-full aspect-square bg-white rounded-xl p-4 shadow-lg",children:_e.jsxs("div",{className:"w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden",children:[_e.jsx(R1,{className:"w-24 h-24 text-purple-400/50"}),_e.jsx("div",{className:"absolute inset-0 opacity-20",children:_e.jsx("div",{className:"grid grid-cols-8 grid-rows-8 h-full w-full p-2 gap-1",children:Array.from({length:64}).map((s,e)=>_e.jsx("div",{className:`${Math.random()>.5?"bg-white":"bg-transparent"} rounded-sm`},e))})})]})}),_e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"})]}),_e.jsxs("div",{className:"space-y-2",children:[_e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-500/20",children:[_e.jsx("span",{className:"text-sm text-slate-300 font-medium",children:"Website"}),_e.jsxs("a",{href:"https://alexmorgan.dev",target:"_blank",rel:"noopener noreferrer",className:"text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm font-semibold",children:["alexmorgan.dev",_e.jsx(rg,{className:"w-3 h-3"})]})]}),_e.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-500/20",children:[_e.jsx("span",{className:"text-sm text-slate-300 font-medium",children:"Status"}),_e.jsxs("div",{className:"flex items-center gap-2",children:[_e.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),_e.jsx("span",{className:"text-green-400 text-sm font-semibold",children:"Available"})]})]})]}),_e.jsxs("button",{className:"w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl text-white font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2",children:[_e.jsx(rg,{className:"w-4 h-4"}),"VISIT PORTFOLIO"]})]})})}function D1(){const[s,e]=qt.useState({x:0,y:0}),n=r=>{const a=Math.PI/2;switch(r){case"up":e(l=>({x:Math.max(l.x-a,-Math.PI/2),y:l.y}));break;case"down":e(l=>({x:Math.min(l.x+a,Math.PI/2),y:l.y}));break;case"left":e(l=>({...l,y:l.y+a}));break;case"right":e(l=>({...l,y:l.y-a}));break;case"front":e({x:0,y:0});break;case"back":e({x:0,y:Math.PI});break}};return _e.jsxs("div",{className:"w-full h-screen bg-black overflow-hidden relative",children:[_e.jsx(P1,{}),_e.jsx(s1,{targetRotation:s}),_e.jsx("div",{className:"absolute top-0 left-0 right-0 z-10 p-8 pointer-events-none",children:_e.jsxs("div",{className:"text-center",children:[_e.jsxs("div",{className:"inline-block",children:[_e.jsx("h1",{className:"text-6xl font-bold text-white mb-2 tracking-wider",children:_e.jsx("span",{className:"bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent",children:"ALEX MORGAN"})}),_e.jsx("div",{className:"h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"})]}),_e.jsx("p",{className:"text-xl text-slate-300 mt-4 font-light tracking-widest",children:"FULL STACK DEVELOPER"})]})}),_e.jsx(b1,{onNavigate:n}),_e.jsx(L1,{}),_e.jsx("div",{className:"absolute top-8 right-8 z-10 max-w-sm pointer-events-auto",children:_e.jsxs("div",{className:"bg-gradient-to-br from-slate-900/70 via-purple-900/30 to-slate-900/70 backdrop-blur-2xl border border-purple-500/20 rounded-2xl p-6 shadow-2xl shadow-purple-500/10",children:[_e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[_e.jsx("div",{className:"w-2 h-2 rounded-full bg-purple-500 animate-pulse"}),_e.jsx("h3",{className:"font-semibold text-white tracking-wide",children:"NAVIGATION"})]}),_e.jsxs("ul",{className:"text-sm text-slate-300 space-y-2",children:[_e.jsxs("li",{className:"flex items-center gap-2",children:[_e.jsx("span",{className:"text-purple-400",children:"◆"}),_e.jsx("span",{children:"Use joystick to rotate the cube"})]}),_e.jsxs("li",{className:"flex items-center gap-2",children:[_e.jsx("span",{className:"text-purple-400",children:"◆"}),_e.jsx("span",{children:"Drag with mouse for free rotation"})]}),_e.jsxs("li",{className:"flex items-center gap-2",children:[_e.jsx("span",{className:"text-purple-400",children:"◆"}),_e.jsx("span",{children:"Scroll to zoom in/out"})]}),_e.jsxs("li",{className:"flex items-center gap-2",children:[_e.jsx("span",{className:"text-purple-400",children:"◆"}),_e.jsx("span",{children:"Each face contains portfolio section"})]})]})]})}),_e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[_e.jsx("div",{className:"absolute top-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-[100px] rounded-full"}),_e.jsx("div",{className:"absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] rounded-full"})]})]})}sg.createRoot(document.getElementById("root")).render(_e.jsx(D1,{}));export{rg as E,S1 as G,Di as c,_e as j,qt as r};
