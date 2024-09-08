import k, { useState as ue, useRef as Or, useEffect as Fe } from "react";
var le = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function wr() {
  if (Ae) return Y;
  Ae = 1;
  var n = k, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, g = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(O, d, x) {
    var b, h = {}, T = null, C = null;
    x !== void 0 && (T = "" + x), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (C = d.ref);
    for (b in d) s.call(d, b) && !R.hasOwnProperty(b) && (h[b] = d[b]);
    if (O && O.defaultProps) for (b in d = O.defaultProps, d) h[b] === void 0 && (h[b] = d[b]);
    return { $$typeof: a, type: O, key: T, ref: C, props: h, _owner: g.current };
  }
  return Y.Fragment = o, Y.jsx = S, Y.jsxs = S, Y;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function jr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var n = k, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), O = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), I = Symbol.iterator, W = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[W];
      return typeof r == "function" ? r : null;
    }
    var D = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        j("error", e, t);
      }
    }
    function j(e, r, t) {
      {
        var i = D.ReactDebugCurrentFrame, c = i.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var F = !1, Z = !1, Je = !1, Be = !1, He = !1, fe;
    fe = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === R || He || e === g || e === x || e === b || Be || e === C || F || Z || Je || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === h || e.$$typeof === S || e.$$typeof === O || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case R:
          return "Profiler";
        case g:
          return "StrictMode";
        case x:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var r = e;
            return de(r) + ".Consumer";
          case S:
            var t = e;
            return de(t._context) + ".Provider";
          case d:
            return qe(e, e.render, "ForwardRef");
          case h:
            var i = e.displayName || null;
            return i !== null ? i : P(e.type) || "Memo";
          case T: {
            var c = e, f = c._payload, l = c._init;
            try {
              return P(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, L = 0, ve, pe, me, ge, he, be, ye;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ge() {
      {
        if (L === 0) {
          ve = console.log, pe = console.info, me = console.warn, ge = console.error, he = console.group, be = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function Xe() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: ve
            }),
            info: N({}, e, {
              value: pe
            }),
            warn: N({}, e, {
              value: me
            }),
            error: N({}, e, {
              value: ge
            }),
            group: N({}, e, {
              value: he
            }),
            groupCollapsed: N({}, e, {
              value: be
            }),
            groupEnd: N({}, e, {
              value: ye
            })
          });
        }
        L < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = D.ReactCurrentDispatcher, ee;
    function J(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (c) {
            var i = c.stack.trim().match(/\n( *(at )?)/);
            ee = i && i[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, B;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ze();
    }
    function _e(e, r) {
      if (!e || re)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      re = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = Q.current, Q.current = null, Ge();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (_) {
              i = _;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (_) {
              i = _;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            i = _;
          }
          e();
        }
      } catch (_) {
        if (_ && i && typeof _.stack == "string") {
          for (var u = _.stack.split(`
`), y = i.stack.split(`
`), v = u.length - 1, m = y.length - 1; v >= 1 && m >= 0 && u[v] !== y[m]; )
            m--;
          for (; v >= 1 && m >= 0; v--, m--)
            if (u[v] !== y[m]) {
              if (v !== 1 || m !== 1)
                do
                  if (v--, m--, m < 0 || u[v] !== y[m]) {
                    var w = `
` + u[v].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, w), w;
                  }
                while (v >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = f, Xe(), Error.prepareStackTrace = c;
      }
      var M = e ? e.displayName || e.name : "", $ = M ? J(M) : "";
      return typeof e == "function" && B.set(e, $), $;
    }
    function Qe(e, r, t) {
      return _e(e, !1);
    }
    function er(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, er(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case x:
          return J("Suspense");
        case b:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Qe(e.render);
          case h:
            return H(e.type, r, t);
          case T: {
            var i = e, c = i._payload, f = i._init;
            try {
              return H(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, Re = {}, Oe = D.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    function rr(e, r, t, i, c) {
      {
        var f = Function.call.bind(V);
        for (var l in e)
          if (f(e, l)) {
            var u = void 0;
            try {
              if (typeof e[l] != "function") {
                var y = Error((i || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              u = e[l](r, l, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              u = v;
            }
            u && !(u instanceof Error) && (K(c), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, l, typeof u), K(null)), u instanceof Error && !(u.message in Re) && (Re[u.message] = !0, K(c), p("Failed %s type: %s", t, u.message), K(null));
          }
      }
    }
    var tr = Array.isArray;
    function te(e) {
      return tr(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ar(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function je(e) {
      if (ar(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), we(e);
    }
    var z = D.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Pe, ne;
    ne = {};
    function or(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, r) {
      if (typeof e.ref == "string" && z.current && r && z.current.stateNode !== r) {
        var t = P(z.current.type);
        ne[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(z.current.type), e.ref), ne[t] = !0);
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Se || (Se = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Pe || (Pe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, i, c, f, l) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function dr(e, r, t, i, c) {
      {
        var f, l = {}, u = null, y = null;
        t !== void 0 && (je(t), u = "" + t), sr(r) && (je(r.key), u = "" + r.key), or(r) && (y = r.ref, ur(r, c));
        for (f in r)
          V.call(r, f) && !ir.hasOwnProperty(f) && (l[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            l[f] === void 0 && (l[f] = v[f]);
        }
        if (u || y) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && lr(l, m), y && cr(l, m);
        }
        return fr(e, u, y, c, i, z.current, l);
      }
    }
    var ae = D.ReactCurrentOwner, xe = D.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = H(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Te() {
      {
        if (ae.current) {
          var e = P(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      return "";
    }
    var Ce = {};
    function pr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = pr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var i = "";
        e && e._owner && e._owner !== ae.current && (i = " It was passed a child from " + P(e._owner.type) + "."), A(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), A(null);
      }
    }
    function De(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            oe(i) && ke(i, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = X(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), l; !(l = f.next()).done; )
              oe(l.value) && ke(l.value, r);
        }
      }
    }
    function mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = P(r);
          rr(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var c = P(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            A(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Ne = {};
    function $e(e, r, t, i, c, f) {
      {
        var l = Ke(e);
        if (!l) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = vr();
          y ? u += y : u += Te();
          var v;
          e === null ? v = "null" : te(e) ? v = "array" : e !== void 0 && e.$$typeof === a ? (v = "<" + (P(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, u);
        }
        var m = dr(e, r, t, c, f);
        if (m == null)
          return m;
        if (l) {
          var w = r.children;
          if (w !== void 0)
            if (i)
              if (te(w)) {
                for (var M = 0; M < w.length; M++)
                  De(w[M], e);
                Object.freeze && Object.freeze(w);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(w, e);
        }
        if (V.call(r, "key")) {
          var $ = P(e), _ = Object.keys(r).filter(function(Rr) {
            return Rr !== "key";
          }), se = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[$ + se]) {
            var _r = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, $, _r, $), Ne[$ + se] = !0;
          }
        }
        return e === s ? gr(m) : mr(m), m;
      }
    }
    function hr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function br(e, r, t) {
      return $e(e, r, t, !1);
    }
    var yr = br, Er = hr;
    U.Fragment = s, U.jsx = yr, U.jsxs = Er;
  }()), U;
}
process.env.NODE_ENV === "production" ? le.exports = wr() : le.exports = jr();
var E = le.exports, Ye = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ie = k.createContext && /* @__PURE__ */ k.createContext(Ye), Sr = ["attr", "size", "title"];
function Pr(n, a) {
  if (n == null) return {};
  var o = xr(n, a), s, g;
  if (Object.getOwnPropertySymbols) {
    var R = Object.getOwnPropertySymbols(n);
    for (g = 0; g < R.length; g++)
      s = R[g], !(a.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(n, s) && (o[s] = n[s]);
  }
  return o;
}
function xr(n, a) {
  if (n == null) return {};
  var o = {};
  for (var s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      if (a.indexOf(s) >= 0) continue;
      o[s] = n[s];
    }
  return o;
}
function q() {
  return q = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
    }
    return n;
  }, q.apply(this, arguments);
}
function We(n, a) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    a && (s = s.filter(function(g) {
      return Object.getOwnPropertyDescriptor(n, g).enumerable;
    })), o.push.apply(o, s);
  }
  return o;
}
function G(n) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? We(Object(o), !0).forEach(function(s) {
      Tr(n, s, o[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : We(Object(o)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(o, s));
    });
  }
  return n;
}
function Tr(n, a, o) {
  return a = Cr(a), a in n ? Object.defineProperty(n, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = o, n;
}
function Cr(n) {
  var a = kr(n, "string");
  return typeof a == "symbol" ? a : a + "";
}
function kr(n, a) {
  if (typeof n != "object" || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var s = o.call(n, a || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function Ue(n) {
  return n && n.map((a, o) => /* @__PURE__ */ k.createElement(a.tag, G({
    key: o
  }, a.attr), Ue(a.child)));
}
function ce(n) {
  return (a) => /* @__PURE__ */ k.createElement(Dr, q({
    attr: G({}, n.attr)
  }, a), Ue(n.child));
}
function Dr(n) {
  var a = (o) => {
    var {
      attr: s,
      size: g,
      title: R
    } = n, S = Pr(n, Sr), O = g || o.size || "1em", d;
    return o.className && (d = o.className), n.className && (d = (d ? d + " " : "") + n.className), /* @__PURE__ */ k.createElement("svg", q({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, s, S, {
      className: d,
      style: G(G({
        color: n.color || o.color
      }, o.style), n.style),
      height: O,
      width: O,
      xmlns: "http://www.w3.org/2000/svg"
    }), R && /* @__PURE__ */ k.createElement("title", null, R), n.children);
  };
  return Ie !== void 0 ? /* @__PURE__ */ k.createElement(Ie.Consumer, null, (o) => a(o)) : a(Ye);
}
function Le(n) {
  return ce({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" }, child: [] }] })(n);
}
function Ve(n) {
  return ce({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143 65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zm-368 0h92v44H26zm312.029 135.14 31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102z" }, child: [] }] })(n);
}
function ze(n) {
  return ce({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z" }, child: [] }] })(n);
}
const $r = ({
  buttonClass: n,
  buttonIconClass: a,
  dropdownClass: o,
  dropdownItemClass: s,
  dropdownHoverClass: g,
  lightButtonClass: R,
  darkButtonClass: S,
  systemButtonClass: O,
  lightIconClass: d,
  darkIconClass: x,
  systemIconClass: b
}) => {
  const [h, T] = ue(() => {
    const j = localStorage.getItem("themeMode");
    return j ? JSON.parse(j) : "system";
  }), [C, I] = ue(!1), W = Or(null), [X, D] = ue(0);
  Fe(() => {
    ((F) => {
      if (F === "dark")
        document.documentElement.classList.add("dark"), localStorage.setItem("themeMode", JSON.stringify("dark"));
      else if (F === "light")
        document.documentElement.classList.remove("dark"), localStorage.setItem("themeMode", JSON.stringify("light"));
      else {
        const Z = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", Z), localStorage.setItem("themeMode", JSON.stringify("system"));
      }
    })(h);
  }, [h]), Fe(() => {
    const j = () => {
      if (W.current) {
        const F = W.current.getBoundingClientRect();
        D(F.bottom);
      }
    };
    return j(), window.addEventListener("resize", j), () => window.removeEventListener("resize", j);
  }, [C]);
  const p = (j) => {
    T(j), I(!1);
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "relative flex flex-col items-center w-auto p-2", children: [
    /* @__PURE__ */ E.jsxs(
      "button",
      {
        ref: W,
        onClick: () => I(!C),
        className: `${n} ${h === "light" ? R : h === "dark" ? S : O}`,
        "aria-label": "Toggle theme mode options",
        "aria-haspopup": "true",
        "aria-expanded": C,
        children: [
          h === "dark" && /* @__PURE__ */ E.jsx(Le, { className: a }),
          h === "light" && /* @__PURE__ */ E.jsx(Ve, { className: a }),
          h === "system" && /* @__PURE__ */ E.jsx(ze, { className: a })
        ]
      }
    ),
    C && /* @__PURE__ */ E.jsxs(
      "div",
      {
        className: `${o}`,
        style: { top: `${X}px`, minWidth: "8rem" },
        role: "menu",
        children: [
          /* @__PURE__ */ E.jsxs(
            "button",
            {
              onClick: () => p("light"),
              className: `${s} ${g} ${R}`,
              "aria-label": "Switch to light mode",
              role: "menuitem",
              children: [
                /* @__PURE__ */ E.jsx("span", { className: `font-serif ${d}`, children: "Light" }),
                /* @__PURE__ */ E.jsx(Ve, { className: d })
              ]
            }
          ),
          /* @__PURE__ */ E.jsxs(
            "button",
            {
              onClick: () => p("dark"),
              className: `${s} ${g} ${S}`,
              "aria-label": "Switch to dark mode",
              role: "menuitem",
              children: [
                /* @__PURE__ */ E.jsx("span", { className: `font-serif ${x}`, children: "Dark" }),
                /* @__PURE__ */ E.jsx(Le, { className: x })
              ]
            }
          ),
          /* @__PURE__ */ E.jsxs(
            "button",
            {
              onClick: () => p("system"),
              className: `${s} ${g} ${O}`,
              "aria-label": "Switch to system mode",
              role: "menuitem",
              children: [
                /* @__PURE__ */ E.jsx("span", { className: `font-serif ${b}`, children: "System" }),
                /* @__PURE__ */ E.jsx(ze, { className: b })
              ]
            }
          )
        ]
      }
    )
  ] });
};
export {
  $r as default
};
