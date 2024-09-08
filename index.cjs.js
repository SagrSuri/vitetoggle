"use strict";const _=require("react");var ue={exports:{}},Y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e;function _r(){if($e)return Y;$e=1;var n=_,a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,g=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function P(w,d,T){var b,h={},C=null,k=null;T!==void 0&&(C=""+T),d.key!==void 0&&(C=""+d.key),d.ref!==void 0&&(k=d.ref);for(b in d)s.call(d,b)&&!O.hasOwnProperty(b)&&(h[b]=d[b]);if(w&&w.defaultProps)for(b in d=w.defaultProps,d)h[b]===void 0&&(h[b]=d[b]);return{$$typeof:a,type:w,key:C,ref:k,props:h,_owner:g.current}}return Y.Fragment=o,Y.jsx=P,Y.jsxs=P,Y}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe;function Rr(){return Fe||(Fe=1,process.env.NODE_ENV!=="production"&&function(){var n=_,a=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),w=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),I=Symbol.iterator,W="@@iterator";function X(e){if(e===null||typeof e!="object")return null;var r=I&&e[I]||e[W];return typeof r=="function"?r:null}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function p(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),i=1;i<r;i++)t[i-1]=arguments[i];S("error",e,t)}}function S(e,r,t){{var i=D.ReactDebugCurrentFrame,c=i.getStackAddendum();c!==""&&(r+="%s",t=t.concat([c]));var f=t.map(function(l){return String(l)});f.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,f)}}var F=!1,Z=!1,Ye=!1,Ue=!1,Je=!1,ce;ce=Symbol.for("react.module.reference");function Be(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===O||Je||e===g||e===T||e===b||Ue||e===k||F||Z||Ye||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===h||e.$$typeof===P||e.$$typeof===w||e.$$typeof===d||e.$$typeof===ce||e.getModuleId!==void 0))}function He(e,r,t){var i=e.displayName;if(i)return i;var c=r.displayName||r.name||"";return c!==""?t+"("+c+")":t}function fe(e){return e.displayName||"Context"}function x(e){if(e==null)return null;if(typeof e.tag=="number"&&p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case o:return"Portal";case O:return"Profiler";case g:return"StrictMode";case T:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case w:var r=e;return fe(r)+".Consumer";case P:var t=e;return fe(t._context)+".Provider";case d:return He(e,e.render,"ForwardRef");case h:var i=e.displayName||null;return i!==null?i:x(e.type)||"Memo";case C:{var c=e,f=c._payload,l=c._init;try{return x(l(f))}catch{return null}}}return null}var N=Object.assign,L=0,de,ve,pe,me,ge,he,be;function ye(){}ye.__reactDisabledLog=!0;function Ke(){{if(L===0){de=console.log,ve=console.info,pe=console.warn,me=console.error,ge=console.group,he=console.groupCollapsed,be=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ye,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}}function qe(){{if(L--,L===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},e,{value:de}),info:N({},e,{value:ve}),warn:N({},e,{value:pe}),error:N({},e,{value:me}),group:N({},e,{value:ge}),groupCollapsed:N({},e,{value:he}),groupEnd:N({},e,{value:be})})}L<0&&p("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Q=D.ReactCurrentDispatcher,ee;function J(e,r,t){{if(ee===void 0)try{throw Error()}catch(c){var i=c.stack.trim().match(/\n( *(at )?)/);ee=i&&i[1]||""}return`
`+ee+e}}var re=!1,B;{var Ge=typeof WeakMap=="function"?WeakMap:Map;B=new Ge}function Ee(e,r){if(!e||re)return"";{var t=B.get(e);if(t!==void 0)return t}var i;re=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=Q.current,Q.current=null,Ke();try{if(r){var l=function(){throw Error()};if(Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(R){i=R}Reflect.construct(e,[],l)}else{try{l.call()}catch(R){i=R}e.call(l.prototype)}}else{try{throw Error()}catch(R){i=R}e()}}catch(R){if(R&&i&&typeof R.stack=="string"){for(var u=R.stack.split(`
`),y=i.stack.split(`
`),v=u.length-1,m=y.length-1;v>=1&&m>=0&&u[v]!==y[m];)m--;for(;v>=1&&m>=0;v--,m--)if(u[v]!==y[m]){if(v!==1||m!==1)do if(v--,m--,m<0||u[v]!==y[m]){var j=`
`+u[v].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),typeof e=="function"&&B.set(e,j),j}while(v>=1&&m>=0);break}}}finally{re=!1,Q.current=f,qe(),Error.prepareStackTrace=c}var M=e?e.displayName||e.name:"",$=M?J(M):"";return typeof e=="function"&&B.set(e,$),$}function Xe(e,r,t){return Ee(e,!1)}function Ze(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function H(e,r,t){if(e==null)return"";if(typeof e=="function")return Ee(e,Ze(e));if(typeof e=="string")return J(e);switch(e){case T:return J("Suspense");case b:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return Xe(e.render);case h:return H(e.type,r,t);case C:{var i=e,c=i._payload,f=i._init;try{return H(f(c),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,_e={},Re=D.ReactDebugCurrentFrame;function K(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);Re.setExtraStackFrame(t)}else Re.setExtraStackFrame(null)}function Qe(e,r,t,i,c){{var f=Function.call.bind(V);for(var l in e)if(f(e,l)){var u=void 0;try{if(typeof e[l]!="function"){var y=Error((i||"React class")+": "+t+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}u=e[l](r,l,i,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(v){u=v}u&&!(u instanceof Error)&&(K(c),p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",t,l,typeof u),K(null)),u instanceof Error&&!(u.message in _e)&&(_e[u.message]=!0,K(c),p("Failed %s type: %s",t,u.message),K(null))}}}var er=Array.isArray;function te(e){return er(e)}function rr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function tr(e){try{return Oe(e),!1}catch{return!0}}function Oe(e){return""+e}function we(e){if(tr(e))return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",rr(e)),Oe(e)}var z=D.ReactCurrentOwner,nr={key:!0,ref:!0,__self:!0,__source:!0},je,Se,ne;ne={};function ar(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ir(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function or(e,r){if(typeof e.ref=="string"&&z.current&&r&&z.current.stateNode!==r){var t=x(z.current.type);ne[t]||(p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',x(z.current.type),e.ref),ne[t]=!0)}}function sr(e,r){{var t=function(){je||(je=!0,p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ur(e,r){{var t=function(){Se||(Se=!0,p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var lr=function(e,r,t,i,c,f,l){var u={$$typeof:a,type:e,key:r,ref:t,props:l,_owner:f};return u._store={},Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function cr(e,r,t,i,c){{var f,l={},u=null,y=null;t!==void 0&&(we(t),u=""+t),ir(r)&&(we(r.key),u=""+r.key),ar(r)&&(y=r.ref,or(r,c));for(f in r)V.call(r,f)&&!nr.hasOwnProperty(f)&&(l[f]=r[f]);if(e&&e.defaultProps){var v=e.defaultProps;for(f in v)l[f]===void 0&&(l[f]=v[f])}if(u||y){var m=typeof e=="function"?e.displayName||e.name||"Unknown":e;u&&sr(l,m),y&&ur(l,m)}return lr(e,u,y,c,i,z.current,l)}}var ae=D.ReactCurrentOwner,Pe=D.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=H(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(t)}else Pe.setExtraStackFrame(null)}var ie;ie=!1;function oe(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function xe(){{if(ae.current){var e=x(ae.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){return""}var Te={};function dr(e){{var r=xe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=dr(r);if(Te[t])return;Te[t]=!0;var i="";e&&e._owner&&e._owner!==ae.current&&(i=" It was passed a child from "+x(e._owner.type)+"."),A(e),p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,i),A(null)}}function ke(e,r){{if(typeof e!="object")return;if(te(e))for(var t=0;t<e.length;t++){var i=e[t];oe(i)&&Ce(i,r)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var c=X(e);if(typeof c=="function"&&c!==e.entries)for(var f=c.call(e),l;!(l=f.next()).done;)oe(l.value)&&Ce(l.value,r)}}}function vr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===h))t=r.propTypes;else return;if(t){var i=x(r);Qe(t,e.props,"prop",i,e)}else if(r.PropTypes!==void 0&&!ie){ie=!0;var c=x(r);p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",c||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var i=r[t];if(i!=="children"&&i!=="key"){A(e),p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i),A(null);break}}e.ref!==null&&(A(e),p("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}var De={};function Ne(e,r,t,i,c,f){{var l=Be(e);if(!l){var u="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=fr();y?u+=y:u+=xe();var v;e===null?v="null":te(e)?v="array":e!==void 0&&e.$$typeof===a?(v="<"+(x(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):v=typeof e,p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",v,u)}var m=cr(e,r,t,c,f);if(m==null)return m;if(l){var j=r.children;if(j!==void 0)if(i)if(te(j)){for(var M=0;M<j.length;M++)ke(j[M],e);Object.freeze&&Object.freeze(j)}else p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(j,e)}if(V.call(r,"key")){var $=x(e),R=Object.keys(r).filter(function(Er){return Er!=="key"}),se=R.length>0?"{key: someKey, "+R.join(": ..., ")+": ...}":"{key: someKey}";if(!De[$+se]){var yr=R.length>0?"{"+R.join(": ..., ")+": ...}":"{}";p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,se,$,yr,$),De[$+se]=!0}}return e===s?pr(m):vr(m),m}}function mr(e,r,t){return Ne(e,r,t,!0)}function gr(e,r,t){return Ne(e,r,t,!1)}var hr=gr,br=mr;U.Fragment=s,U.jsx=hr,U.jsxs=br}()),U}process.env.NODE_ENV==="production"?ue.exports=_r():ue.exports=Rr();var E=ue.exports,Ve={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ae=_.createContext&&_.createContext(Ve),Or=["attr","size","title"];function wr(n,a){if(n==null)return{};var o=jr(n,a),s,g;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(n);for(g=0;g<O.length;g++)s=O[g],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(o[s]=n[s])}return o}function jr(n,a){if(n==null)return{};var o={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(a.indexOf(s)>=0)continue;o[s]=n[s]}return o}function q(){return q=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},q.apply(this,arguments)}function Me(n,a){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter(function(g){return Object.getOwnPropertyDescriptor(n,g).enumerable})),o.push.apply(o,s)}return o}function G(n){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?Me(Object(o),!0).forEach(function(s){Sr(n,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Me(Object(o)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(o,s))})}return n}function Sr(n,a,o){return a=Pr(a),a in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,n}function Pr(n){var a=xr(n,"string");return typeof a=="symbol"?a:a+""}function xr(n,a){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var s=o.call(n,a||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function ze(n){return n&&n.map((a,o)=>_.createElement(a.tag,G({key:o},a.attr),ze(a.child)))}function le(n){return a=>_.createElement(Tr,q({attr:G({},n.attr)},a),ze(n.child))}function Tr(n){var a=o=>{var{attr:s,size:g,title:O}=n,P=wr(n,Or),w=g||o.size||"1em",d;return o.className&&(d=o.className),n.className&&(d=(d?d+" ":"")+n.className),_.createElement("svg",q({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,P,{className:d,style:G(G({color:n.color||o.color},o.style),n.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),O&&_.createElement("title",null,O),n.children)};return Ae!==void 0?_.createElement(Ae.Consumer,null,o=>a(o)):a(Ve)}function Ie(n){return le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"},child:[]}]})(n)}function We(n){return le({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143 65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zm-368 0h92v44H26zm312.029 135.14 31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102z"},child:[]}]})(n)}function Le(n){return le({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"},child:[]}]})(n)}const Cr=({buttonClass:n,buttonIconClass:a,dropdownClass:o,dropdownItemClass:s,dropdownHoverClass:g,lightButtonClass:O,darkButtonClass:P,systemButtonClass:w,lightIconClass:d,darkIconClass:T,systemIconClass:b})=>{const[h,C]=_.useState(()=>{const S=localStorage.getItem("themeMode");return S?JSON.parse(S):"system"}),[k,I]=_.useState(!1),W=_.useRef(null),[X,D]=_.useState(0);_.useEffect(()=>{(F=>{if(F==="dark")document.documentElement.classList.add("dark"),localStorage.setItem("themeMode",JSON.stringify("dark"));else if(F==="light")document.documentElement.classList.remove("dark"),localStorage.setItem("themeMode",JSON.stringify("light"));else{const Z=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",Z),localStorage.setItem("themeMode",JSON.stringify("system"))}})(h)},[h]),_.useEffect(()=>{const S=()=>{if(W.current){const F=W.current.getBoundingClientRect();D(F.bottom)}};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[k]);const p=S=>{C(S),I(!1)};return E.jsxs("div",{className:"relative flex flex-col items-center w-auto p-2",children:[E.jsxs("button",{ref:W,onClick:()=>I(!k),className:`${n} ${h==="light"?O:h==="dark"?P:w}`,"aria-label":"Toggle theme mode options","aria-haspopup":"true","aria-expanded":k,children:[h==="dark"&&E.jsx(Ie,{className:a}),h==="light"&&E.jsx(We,{className:a}),h==="system"&&E.jsx(Le,{className:a})]}),k&&E.jsxs("div",{className:`${o}`,style:{top:`${X}px`,minWidth:"8rem"},role:"menu",children:[E.jsxs("button",{onClick:()=>p("light"),className:`${s} ${g} ${O}`,"aria-label":"Switch to light mode",role:"menuitem",children:[E.jsx("span",{className:`font-serif ${d}`,children:"Light"}),E.jsx(We,{className:d})]}),E.jsxs("button",{onClick:()=>p("dark"),className:`${s} ${g} ${P}`,"aria-label":"Switch to dark mode",role:"menuitem",children:[E.jsx("span",{className:`font-serif ${T}`,children:"Dark"}),E.jsx(Ie,{className:T})]}),E.jsxs("button",{onClick:()=>p("system"),className:`${s} ${g} ${w}`,"aria-label":"Switch to system mode",role:"menuitem",children:[E.jsx("span",{className:`font-serif ${b}`,children:"System"}),E.jsx(Le,{className:b})]})]})]})};module.exports=Cr;
